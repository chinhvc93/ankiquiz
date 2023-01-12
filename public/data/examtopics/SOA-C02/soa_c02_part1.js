var SOA_C02_Part1 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is creating two AWS CloudFormation templates. The first template will create a VPC with associated resources, such as subnets, route tables, and an internet gateway. The second template will deploy application resources within the VPC that was created by the first template. The second template should refer to the resources created by the first template.<br>How can this be accomplished with the LEAST amount of administrative effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Add an export field to the outputs of the first template and import the values in the second template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom resource that queries the stack created by the first template and retrieves the required values.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a mapping in the first template that is referenced by the second template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Input the names of resources in the first template and refer to those names in the second template as a parameter.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 1 discussion",
      "discusstion": [
        {
          "id": 444062,
          "date": "Thu 04 Nov 2021 13:09",
          "username": "widefoot",
          "content": "Sorry I meant the answer is A not C :",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 482206,
          "date": "Sat 20 Nov 2021 03:01",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 653592,
          "date": "Mon 29 Aug 2022 20:28",
          "username": "princajen",
          "content": "A is correct!<br>The optional Mappings section matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. You use the Fn::FindInMap intrinsic function to retrieve values in a map.<br><br>You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 625149,
          "date": "Thu 30 Jun 2022 11:17",
          "username": "ceeee",
          "content": "A is correct, mappings have nothing to do in referencing from one stack to the other",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 561076,
          "date": "Fri 04 Mar 2022 23:31",
          "username": "roka_ua",
          "content": "Answer is A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 517279,
          "date": "Wed 05 Jan 2022 09:43",
          "username": "MrkJobs",
          "content": "Answer -A<br>\\\"To create a cross-stack reference, use the Export output field to flag the value of a resource output for export. Then, use the Fn::ImportValue intrinsic function to import the value. For more information, see Outputs and Fn::ImportValue.\\\"<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 515697,
          "date": "Mon 03 Jan 2022 13:31",
          "username": "szl0144",
          "content": "vote A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508153,
          "date": "Thu 23 Dec 2021 22:47",
          "username": "doc_nta",
          "content": "answer is AAAAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 444061,
          "date": "Mon 01 Nov 2021 20:08",
          "username": "widefoot",
          "content": "Answer is C:<br>create a cross-stack reference, use the Export output field to flag the value of a resource output for export. Then, use the Fn::ImportValue intrinsic function to import the value. For more information, see Outputs and Fn::ImportValue.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 425515,
          "date": "Thu 28 Oct 2021 01:50",
          "username": "Finger41",
          "content": "The way i saw it - Outputs -> basically saying okay out of our template we can export some stuff and other templates can reference it. References -> so you can basically link your stuff within your template<br><br>Thats why i think its A. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 370691,
          "date": "Wed 20 Oct 2021 07:59",
          "username": "RicardoD",
          "content": "A is the answer<br><br>Export the outputs to the second template",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 356174,
          "date": "Wed 13 Oct 2021 08:29",
          "username": "FHU0utsider",
          "content": "It is A for sure. By exporting a stack output value, it can then be later referenced in another stack by using the Fn::ImportValue. As is in this doc: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.htmlhttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 363831,
          "date": "Fri 15 Oct 2021 13:10",
          "username": "0utsider",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 348545,
          "date": "Tue 12 Oct 2021 02:04",
          "username": "WH",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-reference-resource/<br>answer: A (sorry A is the correct answer)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 348544,
          "date": "Mon 11 Oct 2021 03:18",
          "username": "WH",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-reference-resource/<br>answer: C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 348423,
          "date": "Tue 05 Oct 2021 04:09",
          "username": "Drey",
          "content": "This should be A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 346724,
          "date": "Sun 03 Oct 2021 02:09",
          "username": "sunilpanda",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html<br><br>option a",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340682,
          "date": "Sat 02 Oct 2021 11:43",
          "username": "dusty_dev",
          "content": "i'm more inclined towards outputs and hence A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an infernal web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto<br>Scaling group in a single Availability Zone. A SysOps administrator must make the application highly available.<br>Which action should the SysOps administrator take to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Increase the maximum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the minimum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Auto Scaling group to launch new instances in a second Availability Zone in the same AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Auto Scaling group to launch new instances in an Availability Zone in a second AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 1 discussion",
      "discusstion": [
        {
          "id": 425545,
          "date": "Sat 23 Oct 2021 18:54",
          "username": "Finger41",
          "content": "Option C is the answer. Spreading it across zones.<br><br>A and B doesnt make it highly available if a zone goes down.<br><br>D is false as ASG is region bound, as seen here: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 525976,
          "date": "Mon 17 Jan 2022 18:45",
          "username": "GeordiLaForge",
          "content": "Why is it evil? \\\"A business operates an evil online application...\\\" lol",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 737442,
          "date": "Wed 07 Dec 2022 06:25",
          "username": "michaldavid",
          "content": "cccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721633,
          "date": "Sat 19 Nov 2022 00:31",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691085,
          "date": "Mon 10 Oct 2022 13:49",
          "username": "AwsNewPeople",
          "content": "Definitely C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 688796,
          "date": "Fri 07 Oct 2022 18:09",
          "username": "Surferbolt",
          "content": "Looking for availability, so either C or D.  D is not possible, so C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 609498,
          "date": "Tue 31 May 2022 02:38",
          "username": "Mambo_king",
          "content": "thats a weird qstn on a business operating an evil online app.....what tym do Admins make these qstns",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561083,
          "date": "Fri 04 Mar 2022 23:39",
          "username": "roka_ua",
          "content": "C for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 540197,
          "date": "Fri 04 Feb 2022 05:49",
          "username": "QAMISO",
          "content": "An Auto Scaling group can contain EC2 instances in one or more Availability Zones within the same Region. However, Auto Scaling groups cannot span multiple Regions. C is the correct Answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 515714,
          "date": "Mon 03 Jan 2022 13:49",
          "username": "szl0144",
          "content": "vote C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482217,
          "date": "Sat 20 Nov 2021 03:13",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 370746,
          "date": "Mon 04 Oct 2021 00:49",
          "username": "RicardoD",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 356680,
          "date": "Fri 01 Oct 2021 22:43",
          "username": "FHU",
          "content": "Letter C is the correct answer. \\\"An Auto Scaling group can contain EC2 instances in one or more Availability Zones within the same Region. However, Auto Scaling groups cannot span multiple Regions\\\". As stated in https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 340589,
          "date": "Thu 23 Sep 2021 13:59",
          "username": "Azaad78",
          "content": "C - is correct ASG is Region bound.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a web application in a VPC that has subnets in three Availability Zones. The company launches three Amazon EC2 instances from an<br>EC2 Auto Scaling group behind an Application Load Balancer (ALB).<br>A SysOps administrator notices that two of the EC2 instances are in the same Availability Zone, rather than being distributed evenly across all three Availability<br>Zones. There are no errors in the Auto Scaling group's activity history.<br>What is the MOST likely reason for the unexpected placement of EC2 instances?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. One Availability Zone did not have sufficient capacity for the requested EC2 instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The ALB was configured for only two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The Auto Scaling group was configured for only two Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon EC2 Auto Scaling randomly placed the instances in Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 2 discussion",
      "discusstion": [
        {
          "id": 340456,
          "date": "Sun 26 Sep 2021 15:53",
          "username": "LuizMarqueslongb1",
          "content": "Correct Answer is C, the autoscaling group is responsable to add the instances in the subnets. Seriously, get someone qualified to review your answers. This one was a VERY EASY one and yet the wrong answer is displayed.but it says \\\"There are no mistakes in the activity history of the Auto Scaling group.\\\"?",
          "upvote_count": "183",
          "selected_answers": ""
        },
        {
          "id": 557621,
          "date": "Sun 27 Feb 2022 22:00",
          "username": "longb1",
          "content": "but it says \\\"There are no mistakes in the activity history of the Auto Scaling group.\\\"?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 653594,
          "date": "Mon 29 Aug 2022 20:33",
          "username": "princajen",
          "content": "I vote for B!<br><br>You can enable or disable the Availability Zones for your load balancer at any time. After you enable an Availability Zone, the load balancer starts routing requests to the registered targets in that Availability Zone. Your load balancer is most effective if you ensure that each enabled Availability Zone has at least one registered target.<br><br>After you disable an Availability Zone, the targets in that Availability Zone remain registered with the load balancer, but the load balancer will not route requests to them.<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-subnets.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 644532,
          "date": "Tue 09 Aug 2022 15:30",
          "username": "by116549",
          "content": "When you create an ALB do you no need to specify the list of subnets here too in the network mapping section?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 630355,
          "date": "Tue 12 Jul 2022 09:20",
          "username": "Goozian",
          "content": "When one Availability Zone becomes unhealthy or unavailable, Amazon EC2 Auto Scaling launches new instances in an unaffected Availability Zone<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 627385,
          "date": "Tue 05 Jul 2022 12:07",
          "username": "DuniX33",
          "content": "C is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 606388,
          "date": "Tue 24 May 2022 03:04",
          "username": "altonh",
          "content": "The answer should be C<br>I believe the last statement should read \\\"There are no ERRORS in the activity history of the Auto Scaling group\\\".The word 'MISTAKE' does not make sense when you are talking about Activity History.Activity History is basically a log. So how can AWS make a 'mistake' on it?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 589397,
          "date": "Thu 21 Apr 2022 15:00",
          "username": "summercat",
          "content": "Answer should be A. <br><br>Amazon EC2 Auto Scaling enables you to take advantage of the safety and reliability of geographic redundancy by spanning Auto Scaling groups across multiple Availability Zones within a Region. When one Availability Zone becomes unhealthy or unavailable, Auto Scaling launches new instances in an unaffected Availability Zone. When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones.<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 586649,
          "date": "Sat 16 Apr 2022 09:24",
          "username": "Mikilo",
          "content": "C is it",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 569367,
          "date": "Thu 17 Mar 2022 00:09",
          "username": "Anthouse",
          "content": "I will probably go with A on this one because it explicitly says there were no mistakes in the ASG. Definitely not an ALB issue since it doesn't haven anything to do with deploying instances. However could be due to lack of available resources in the AZ, which seems counter intuitive in the cloud where resources seem infinite but remember Spot instances are designed to be and are reclaimed by AWS when resources are short so it does happen.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 558076,
          "date": "Mon 28 Feb 2022 14:32",
          "username": "CHRIS12722222",
          "content": "There is possibility the correct answer is A. <br><br>\\\"There are no mistakes in the activity history of the ASG\\\" suggest the issue is not with how the ASG is configured.<br>Ref : https://aws.amazon.com/premiumsupport/knowledge-center/ec2-insufficient-capacity-errors/<br><br>Ref 2: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/troubleshooting-launch.html#troubleshooting-launch-capacity",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 515755,
          "date": "Mon 03 Jan 2022 14:18",
          "username": "szl0144",
          "content": "I VOTE C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 505460,
          "date": "Mon 20 Dec 2021 14:58",
          "username": "yalurjuraj666",
          "content": "Correct answer is B, cause it says \\\"There are no mistakes in the activity history of the Auto Scaling group.\\\" (which means auto scaling group was created without any mistake, so all three AZs have been configured in ASG)ALB doesn't have effect on placing instances into AZs",
          "upvote_count": "33",
          "selected_answers": ""
        },
        {
          "id": 518855,
          "date": "Fri 07 Jan 2022 10:04",
          "username": "juraj666",
          "content": "ALB doesn't have effect on placing instances into AZs",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 482291,
          "date": "Sat 20 Nov 2021 07:30",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 439393,
          "date": "Thu 14 Oct 2021 01:24",
          "username": "m3d",
          "content": "If the answer is C, why the author of this still not updating this? :/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 425517,
          "date": "Sat 09 Oct 2021 10:31",
          "username": "Finger41",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 386027,
          "date": "Fri 08 Oct 2021 08:48",
          "username": "USR",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 370695,
          "date": "Sat 02 Oct 2021 23:18",
          "username": "RicardoD",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a website on multiple Amazon EC2 instances that run in an Auto Scaling group. Users are reporting slow responses during peak times between<br>6 PM and 11 PM every weekend. A SysOps administrator must implement a solution to improve performance during these peak times.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. Create a scheduled Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to increase the desired capacity before peak times.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a scheduled scaling action with a recurrence option to change the desired capacity before and after peak times.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a target tracking scaling policy to add more instances when memory utilization is above 70%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the cooldown period for the Auto Scaling group to modify desired capacity before and after peak times.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 2 discussion",
      "discusstion": [
        {
          "id": 425568,
          "date": "Wed 20 Oct 2021 15:59",
          "username": "Finger41",
          "content": "Answer is B - \\\"Scheduled scaling helps you to set up your own scaling schedule according to predictable load changes. For example, let's say that every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can configure a schedule for Amazon EC2 Auto Scaling to increase capacity on Wednesday and decrease capacity on Friday.\\\"<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 737445,
          "date": "Wed 07 Dec 2022 06:28",
          "username": "michaldavid",
          "content": "bbbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721634,
          "date": "Sat 19 Nov 2022 00:31",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591042,
          "date": "Sun 24 Apr 2022 14:35",
          "username": "Mecdrox",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561079,
          "date": "Fri 04 Mar 2022 23:35",
          "username": "roka_ua",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 517301,
          "date": "Wed 05 Jan 2022 10:05",
          "username": "MrkJobs",
          "content": "as finger41 say",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515707,
          "date": "Mon 03 Jan 2022 13:41",
          "username": "szl0144",
          "content": "vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482212,
          "date": "Sat 20 Nov 2021 03:09",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 370766,
          "date": "Mon 18 Oct 2021 21:49",
          "username": "RicardoD",
          "content": "B is the answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 356692,
          "date": "Mon 04 Oct 2021 00:00",
          "username": "FHU",
          "content": "B is the correct answer. The auto scaling group from EC2 has a feature of scheduled scaling where you can scale up and down at preferred date and times.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 340610,
          "date": "Wed 22 Sep 2021 08:10",
          "username": "Azaad78",
          "content": "B - is correct.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on premises and wants to use AWS for data backup. All of the data must be available locally. The backup application can write only to block-based storage that is compatible with the Portable Operating System Interface (POSIX).<br>Which backup solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Configure the backup software to use Amazon S3 as the target for the data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the backup software to use Amazon S3 Glacier as the target for the data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Storage Gateway, and configure it to use gateway-cached volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Storage Gateway, and configure it to use gateway-stored volumes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 3 discussion",
      "discusstion": [
        {
          "id": 356180,
          "date": "Sat 09 Oct 2021 23:52",
          "username": "FHU",
          "content": "Letter D is the correct answer. A and B can be taken out because they do not maintain copies locally. Letter C only caches locally, at your datacenter, the recent used files. The only option that caches all your files locally, is letter D, storage gateway with stored volume.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 425518,
          "date": "Sat 30 Oct 2021 01:55",
          "username": "Finger41",
          "content": "Option D, as this satisfies the answer with a data stored on premise, and backed up to an S3 storage bucket. https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 586655,
          "date": "Sat 16 Apr 2022 09:32",
          "username": "Mikilo",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 482295,
          "date": "Sat 20 Nov 2021 07:43",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 406962,
          "date": "Wed 20 Oct 2021 17:43",
          "username": "Danmay001ceeee",
          "content": "B is the solutionno bestie, definitely not lol. why would u need glacier ?",
          "upvote_count": "27",
          "selected_answers": ""
        },
        {
          "id": 475267,
          "date": "Wed 10 Nov 2021 08:25",
          "username": "ceeee",
          "content": "no bestie, definitely not lol. why would u need glacier ?",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 370696,
          "date": "Thu 14 Oct 2021 04:16",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 348860,
          "date": "Fri 08 Oct 2021 04:23",
          "username": "Agr321",
          "content": "D is Correct.<br>https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 344307,
          "date": "Fri 01 Oct 2021 16:54",
          "username": "BSNJ",
          "content": "Instance Storage / Block Storage / File System will be under Block based storage<br>S3 will be under Object Based Storage",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The company configured an Amazon CloudFront distribution and set the ALB as the origin. The company created an Amazon Route 53 CNAME record to send all traffic through the CloudFront distribution. As an unintended side effect, mobile users are now being served the desktop version of the website.<br>Which action should a SysOps administrator take to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Configure the CloudFront distribution behavior to forward the User-Agent header.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the CloudFront distribution origin settings. Add a User-Agent header to the list of origin custom headers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable IPv6 on the ALB.  Update the CloudFront distribution origin settings to use the dualstack endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable IPv6 on the CloudFront distribution. Update the Route 53 record to use the dualstack endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 3 discussion",
      "discusstion": [
        {
          "id": 610142,
          "date": "Wed 01 Jun 2022 14:00",
          "username": "PepepepPepepep",
          "content": "I agree it is A because:<br>1. B is wrong, since you are modifyingorigin custom headers that are values that you set unilaterally, independent of the Header of the request that you received from client. As the documentation states, the uses cases for for origin custom headers are:<br>Identifying requests from CloudFront<br>Determining which requests come from a particular distribution<br>Enabling cross-origin resource sharing (CORS)<br>Controlling access to content<br>(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html)2. A is correct. If you want CloudFront to cache different versions of your objects based on the device that a user is using to view your content, we recommend that you configure CloudFront to forward one or more of the following headers to your custom origin:<br>CloudFront-Is-Desktop-Viewer<br>CloudFront-Is-Mobile-Viewer<br>CloudFront-Is-SmartTV-Viewer<br>CloudFront-Is-Tablet-Viewer<br>As you can see based on what comes in the request received by CF, It is going to set the value to truebefore forwarding the request to your origin.<br>The resume, with origin custom headers you are the one that decide what is going to be on the header, there is no way to match what it comes on the request received on CF and what is going to be sent to the origin. On the other hand with User-Agent header, CF inspects the header and determines what type of device is used (Smart TV, Tablet, Desktop, Mobile).",
          "upvote_count": "75",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 610143,
          "date": "Wed 01 Jun 2022 14:00",
          "username": "Pepepep",
          "content": "2. A is correct. If you want CloudFront to cache different versions of your objects based on the device that a user is using to view your content, we recommend that you configure CloudFront to forward one or more of the following headers to your custom origin:<br>CloudFront-Is-Desktop-Viewer<br>CloudFront-Is-Mobile-Viewer<br>CloudFront-Is-SmartTV-Viewer<br>CloudFront-Is-Tablet-Viewer<br>As you can see based on what comes in the request received by CF, It is going to set the value to truebefore forwarding the request to your origin.<br>The resume, with origin custom headers you are the one that decide what is going to be on the header, there is no way to match what it comes on the request received on CF and what is going to be sent to the origin. On the other hand with User-Agent header, CF inspects the header and determines what type of device is used (Smart TV, Tablet, Desktop, Mobile).",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 589914,
          "date": "Fri 22 Apr 2022 12:54",
          "username": "dontcomplain",
          "content": "Why would this not be B? It would serve the same function more efficiently?",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 740716,
          "date": "Sat 10 Dec 2022 07:09",
          "username": "MrMLB",
          "content": "A ; final answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739215,
          "date": "Thu 08 Dec 2022 16:25",
          "username": "BietTuot",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 727094,
          "date": "Fri 25 Nov 2022 22:30",
          "username": "exam67",
          "content": "B would correct (but very inefficient) assuming implied in the answer that the user-agent is added to the cache key. It is correct because a viewer request would not produce a cache hit if an object with the same user agent is not in the cache. Very inefficient because there are thousands of user-agents out there... how big is this cache?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 699657,
          "date": "Thu 20 Oct 2022 09:47",
          "username": "Surferbolt",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697976,
          "date": "Tue 18 Oct 2022 08:40",
          "username": "Pontimau",
          "content": "The answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697017,
          "date": "Mon 17 Oct 2022 08:57",
          "username": "Pontimau",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-user-agent-header",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 681371,
          "date": "Wed 28 Sep 2022 05:34",
          "username": "CVDON",
          "content": "B but its not recommended, a better answer is to send custom CF headers based in User-Agent header https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html#header-caching-web-device",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 670079,
          "date": "Thu 15 Sep 2022 17:37",
          "username": "skinnyxpuppy",
          "content": "If you go to the AWS console, you can navigate to CloudFront, then \\\"Policies\\\" on the left. This will allow you to create a custom origin policy and you can include \\\"CloudFont-is-Desktop-User\\\" header, and then that can be attached to a behavior.<br>I believe the correct answer is A. <br>For option B, you can create an entirely new Custom Header and value, on the origin settings, but that will be the exact same Header and Value that is passed on EVERY request.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665526,
          "date": "Sat 10 Sep 2022 18:24",
          "username": "nakikoo",
          "content": "C seems viable but i maybe wrong...since ALB is set as the intended origin destination, theres no need to change the origin destination setting, B incorrect, A seems like you need to manually change it every time there is a request that comes from a different header, C seems more like you enable a dual channel type to route to the original intended destination...which is the ALB. ..im sticking with C on this based on reading and logic",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 663083,
          "date": "Thu 08 Sep 2022 06:07",
          "username": "AAAaat",
          "content": "I think it is A, OAI is only for use with S3? see AWS glossary<br><br>origin access identity<br>Also called OAI. When using Amazon CloudFront to serve content with an Amazon S3 bucket as the origin, a virtual identity that you use to require users to access your content through CloudFront URLs instead of Amazon S3 URLs. Usually used with CloudFront private content.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655722,
          "date": "Thu 01 Sep 2022 05:08",
          "username": "princajen",
          "content": "after much reading I'm voting A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 653297,
          "date": "Mon 29 Aug 2022 07:35",
          "username": "Gorille69",
          "content": "A for me : https://www.youtube.com/watch?vFQFg8FrRcxA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 652432,
          "date": "Sat 27 Aug 2022 02:54",
          "username": "Hello23",
          "content": "B 100%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 651859,
          "date": "Thu 25 Aug 2022 18:11",
          "username": "ersahinco",
          "content": "The answer is definetly B. <br>Ref: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-user-agent-header",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 642059,
          "date": "Wed 03 Aug 2022 21:30",
          "username": "Acesyo",
          "content": "A is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has enabled AWS CloudTrail in an AWS account. If CloudTrail is disabled, it must be re-enabled immediately.<br>What should the SysOps administrator do to meet these requirements WITHOUT writing custom code?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Add the AWS account to AWS Organizations. Enable CloudTrail in the management account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Config rule that is invoked when CloudTrail configuration changes. Apply the AWS-ConfigureCloudTrailLogging automatic remediation action.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config rule that is invoked when CloudTrail configuration changes. Configure the rule to invoke an AWS Lambda function to enable CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Event) hourly rule with a schedule pattern to run an AWS Systems Manager Automation document to enable CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 4 discussion",
      "discusstion": [
        {
          "id": 737454,
          "date": "Wed 07 Dec 2022 06:38",
          "username": "michaldavid",
          "content": "bbbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721648,
          "date": "Sat 19 Nov 2022 00:55",
          "username": "Liongeek",
          "content": "I agree with you all that B is the answer but that remedation doesn't exist. We'll have to add it from a template and CUSTOMIZE it so ummm....",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689150,
          "date": "Sat 08 Oct 2022 10:56",
          "username": "Surferbolt",
          "content": "B, Config can check and also remediate automatically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 627201,
          "date": "Tue 05 Jul 2022 04:13",
          "username": "Yoyo76",
          "content": "B was my choice",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 612850,
          "date": "Tue 07 Jun 2022 19:41",
          "username": "ceros399",
          "content": "Ans B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 607266,
          "date": "Wed 25 May 2022 16:51",
          "username": "Taiful",
          "content": "Answer: B<br><br>Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-re-enable-aws-cloudtrail-by-using-a-custom-remediation-rule-in-aws-config.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 595452,
          "date": "Sun 01 May 2022 07:54",
          "username": "everythingship",
          "content": "It's B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 593517,
          "date": "Thu 28 Apr 2022 06:26",
          "username": "Finger41",
          "content": "B - \\\"To ensure that CloudTrail remains enabled in your account, AWS Config provides the cloudtrail-enabled managed rule. If CloudTrail is turned off, the cloudtrail-enabled rule automatically re-enables it by using automatic remediation.\\\"<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-re-enable-aws-cloudtrail-by-using-a-custom-remediation-rule-in-aws-config.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 591258,
          "date": "Mon 25 Apr 2022 00:20",
          "username": "Mecdrox",
          "content": "I vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon RDS DB instance. The company wants to implement a caching service while maintaining high availability.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Add Auto Discovery to the data store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ElastiCache for Memcached data store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon ElastiCache for Redis data store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Multi-AZ for the data store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable Multi-threading for the data store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 5 discussion",
      "discusstion": [
        {
          "id": 332461,
          "date": "Mon 20 Sep 2021 06:53",
          "username": "Salis",
          "content": "C and D",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 425522,
          "date": "Wed 20 Oct 2021 05:03",
          "username": "Finger41",
          "content": "I think C and D. <br><br>The way i see it is Redis is used for Multi AZ, replication and HA and acts kind of like RDS. Inversely i see Memcached for multithreading and sharding, with no presistence, acting like a pure cache for db performance.<br><br>Performance isnt the topic of the question, its persistance, hence memcahed is crossed out, and redis with Multi-AZ is.<br><br>https://aws.amazon.com/elasticache/redis/<br>vs<br>https://aws.amazon.com/elasticache/memcached/",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 595529,
          "date": "Sun 01 May 2022 11:38",
          "username": "psou7",
          "content": "C and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 586653,
          "date": "Sat 16 Apr 2022 09:29",
          "username": "Mikilo",
          "content": "C, D is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 517514,
          "date": "Wed 05 Jan 2022 15:22",
          "username": "MrkJobs",
          "content": "C-D<br>\\\"The main benefits of running your Amazon ElastiCache for Redis in Multi-AZ mode are enhanced availability and smaller need for administration.\\\"<br>https://aws.amazon.com/elasticache/faqs/?nc1h_ls",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 515761,
          "date": "Mon 03 Jan 2022 14:22",
          "username": "szl0144",
          "content": "c and D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 482294,
          "date": "Sat 20 Nov 2021 07:39",
          "username": "nqthien041292",
          "content": "Vote CD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 410827,
          "date": "Sat 16 Oct 2021 02:29",
          "username": "hou0220",
          "content": "I vote B and D.  Memcached is well suit for database use case. -- https://aws.amazon.com/elasticache/memcached/?ncsn&loc2&dn1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370701,
          "date": "Mon 11 Oct 2021 01:28",
          "username": "RicardoD",
          "content": "C | D are the answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 356193,
          "date": "Fri 01 Oct 2021 13:15",
          "username": "FHU",
          "content": "Letter C and D is correct. Redis is multi-az, that is the key to understand the correct answer.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 340479,
          "date": "Thu 30 Sep 2021 19:46",
          "username": "Azaad78",
          "content": "C and D",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its website on Amazon EC2 instances behind an Application Load Balancer. The company manages its DNS with Amazon Route 53, and wants to point its domain's zone apex to the website.<br>Which type of record should be used to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. An AAAA record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An A record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A CNAME record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An alias record for the domain's zone apex<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 5 discussion",
      "discusstion": [
        {
          "id": 357463,
          "date": "Thu 21 Oct 2021 09:17",
          "username": "FHU",
          "content": "Letter D is correct. Route 53 supports redirection of zone apex to the ALB via alias.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 737452,
          "date": "Wed 07 Dec 2022 06:38",
          "username": "michaldavid",
          "content": "dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722408,
          "date": "Sun 20 Nov 2022 06:34",
          "username": "mlantonis2",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721649,
          "date": "Sat 19 Nov 2022 00:56",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694927,
          "date": "Fri 14 Oct 2022 19:13",
          "username": "Anthony053",
          "content": "Alias: Used to map DNS record to Amazon S3 bucket static website.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689154,
          "date": "Sat 08 Oct 2022 11:06",
          "username": "Surferbolt",
          "content": "D.  Cannot create CNAME record for zone apex. AAAA and A are address records, which translates website names to IPv6 and IPv4 addresses respectively.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 527932,
          "date": "Wed 19 Jan 2022 22:10",
          "username": "69657",
          "content": "Answer is D<br>Can't create a CNAME record for the top node of a DNS namespace (Zone<br>Apex)<br>- Example: you can't create for example.com, but you can create for<br>www.example.com",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 515763,
          "date": "Mon 03 Jan 2022 14:24",
          "username": "szl0144",
          "content": "vote D, double check it with the route 53",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482296,
          "date": "Sat 20 Nov 2021 07:44",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 344224,
          "date": "Tue 19 Oct 2021 21:04",
          "username": "binhdt2611",
          "content": "Answer is D. <br>We should point an alias record to ALB, because alias can be used for naked domain name",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An existing, deployed solution uses Amazon EC2 instances with Amazon EBS General Purpose SSD volumes, an Amazon RDS PostgreSQL database, an<br>Amazon EFS file system, and static objects stored in an Amazon S3 bucket. The Security team now mandates that at-rest encryption be turned on immediately for all aspects of the application, without creating new resources and without any downtime.<br>To satisfy the requirements, which one of these services can the SysOps administrator enable at-rest encryption on?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. EBS General Purpose SSD volumes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. RDS PostgreSQL database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon EFS file systems<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. S3 objects within a bucket<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 6 discussion",
      "discusstion": [
        {
          "id": 332460,
          "date": "Tue 05 Oct 2021 12:28",
          "username": "Salis",
          "content": "D<br>Only S3 can be encrypted on the fly, for EBS EFS and RDS we have to take a snapshot, copy\\ encrypted it and create new resources",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 425527,
          "date": "Sat 23 Oct 2021 06:25",
          "username": "Finger41",
          "content": "D, -https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html<br>The others have procedures to make encryption at rest work. Involves mucking around with snapshots.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 636016,
          "date": "Sun 24 Jul 2022 13:33",
          "username": "in12",
          "content": "D is my answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 581188,
          "date": "Tue 05 Apr 2022 13:00",
          "username": "ryuhei",
          "content": "Answer=EF=BC=9AD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 515746,
          "date": "Mon 03 Jan 2022 14:11",
          "username": "szl0144",
          "content": "vote d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 482270,
          "date": "Sat 20 Nov 2021 06:18",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 386040,
          "date": "Mon 18 Oct 2021 01:57",
          "username": "USR",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370703,
          "date": "Wed 13 Oct 2021 19:44",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 343673,
          "date": "Mon 11 Oct 2021 09:13",
          "username": "PatNathan",
          "content": "Agreed only S3 can be done on fly",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company must ensure that any objects uploaded to an S3 bucket are encrypted.<br>Which of the following actions will meet this requirement? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. Implement AWS Shield to protect against unencrypted objects stored in S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement Object access control list (ACL) to deny unencrypted objects from being uploaded to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement Amazon S3 default encryption to make sure that any object being uploaded is encrypted before it is stored.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement Amazon Inspector to inspect objects uploaded to the S3 bucket to make sure that they are encrypted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Implement S3 bucket policies to deny unencrypted objects from being uploaded to the buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 6 discussion",
      "discusstion": [
        {
          "id": 739225,
          "date": "Thu 08 Dec 2022 16:34",
          "username": "BietTuot",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 737465,
          "date": "Wed 07 Dec 2022 06:45",
          "username": "michaldavid",
          "content": "ccc eee",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722407,
          "date": "Sun 20 Nov 2022 06:34",
          "username": "mlantonis2",
          "content": "Ans: CE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 721650,
          "date": "Sat 19 Nov 2022 00:58",
          "username": "Liongeek",
          "content": "Ans: CE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689163,
          "date": "Sat 08 Oct 2022 11:26",
          "username": "Surferbolt",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 665540,
          "date": "Sat 10 Sep 2022 18:43",
          "username": "nakikoo",
          "content": "CE correct, default encryption is a feature you can enable and disable in S3, it encrypt the data when entered S3 and decrypt whenever people retrieve data...server-side encryption is data encrypted as it is before entering an S3..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608359,
          "date": "Sat 28 May 2022 12:35",
          "username": "MikeyJ",
          "content": "Poorly worded question as encrypting objects before uploading would use client side encryption. C&E seem the most likely answers, as ACLs can't prevent the uploading of unencrypted objects.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 599722,
          "date": "Tue 10 May 2022 19:47",
          "username": "by116549Finger41",
          "content": "Sorry @Finger41 and @Mecdrox I am bit confused by C as the question states:<br>\\\"verify that all items uploaded to an S3 bucket are encrypted prior to uploading them\\\"<br>Option C from what I can see states:<br>\\\"With Amazon S3 default encryption, you can set the default encryption behaviuor for an S3 bucket so that all new objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS keys stored in AWS Key Management Service (AWS KMS) (SSE-KMS).\\\"<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html<br><br>Does the data not need to be encrypted prior to being uploaded?Its encrypted at the time of writing to disk. :). Ensures all objects are encrypted when data is stored in S3, if using Amazon S3 default encryption ie server side encryption.<br><br>Looking at an extension of your link : https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html<br><br> Amazon S3 encrypts your data at the object level as it writes it to disks in its data centers and decrypts it for you when you access it.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 606351,
          "date": "Tue 24 May 2022 01:30",
          "username": "Finger41",
          "content": "Its encrypted at the time of writing to disk. :). Ensures all objects are encrypted when data is stored in S3, if using Amazon S3 default encryption ie server side encryption.<br><br>Looking at an extension of your link : https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html<br><br> Amazon S3 encrypts your data at the object level as it writes it to disks in its data centers and decrypts it for you when you access it.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 599357,
          "date": "Tue 10 May 2022 03:59",
          "username": "Finger41MikeyJ",
          "content": "C & E - https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/\\\"In order to enforce object encryption, create an S3 bucket policy that denies any S3 Put request that does not include the x-amz-server-side-encryption header. There are two possible values for the x-amz-server-side-encryption header: AES256, which tells S3 to use S3-managed keys, and aws:kms, which tells S3 to use AWS KMS=E2=80=93managed keys.\\\"",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 612356,
          "date": "Mon 06 Jun 2022 14:38",
          "username": "MikeyJ",
          "content": "\\\"In order to enforce object encryption, create an S3 bucket policy that denies any S3 Put request that does not include the x-amz-server-side-encryption header. There are two possible values for the x-amz-server-side-encryption header: AES256, which tells S3 to use S3-managed keys, and aws:kms, which tells S3 to use AWS KMS=E2=80=93managed keys.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591068,
          "date": "Sun 24 Apr 2022 15:02",
          "username": "Mecdrox",
          "content": "C and E are correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company uses an Amazon RDS DB instance to store inventory of all stock items. The company maintains several AWS Lambda functions that interact with the database to add, update, and delete items. The Lambda functions use hardcoded credentials to connect to the database.<br>A SysOps administrator must ensure that the database credentials are never stored in plaintext and that the password is rotated every 30 days.<br>Which solution will meet these requirements in the MOST operationally efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A. Store the database password as an environment variable for each Lambda function. Create a new Lambda function that is named PasswordRotate. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the PasswordRotate function every 30 days to change the database password and update the environment variable for each Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Key Management Service (AWS KMS) to encrypt the database password and to store the encrypted password as an environment variable for each Lambda function. Grant each Lambda function access to the KMS key so that the database password can be decrypted when required. Create a new Lambda function that is named PasswordRotate to change the password every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Secrets Manager to store credentials for the database. Create a Secrets Manager secret and select the database so that Secrets Manager will use a Lambda function to update the database password automatically. Specify an automatic rotation schedule of 30 days. Update each Lambda function to access the database password from Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Parameter Store to create a secure string to store credentials for the database. Create a new Lambda function called PasswordRotate. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the PasswordRotate function every 30 days to change the database password and to update the secret within Parameter Store. Update each Lambda function to access the database password from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 7 discussion",
      "discusstion": [
        {
          "id": 425528,
          "date": "Wed 27 Oct 2021 08:37",
          "username": "Finger41",
          "content": "C<br><br>When you choose to enable rotation, Secrets Manager supports the following Amazon Relational Database Service (Amazon RDS) databases with AWS written and tested Lambda rotation function templates, and full configuration of the rotation process:<br><br>Amazon Aurora on Amazon RDS<br>MySQL on Amazon RDS<br>PostgreSQL on Amazon RDS<br>Oracle on Amazon RDS<br>MariaDB on Amazon RDS<br>Microsoft SQL Server on Amazon RDS<br><br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 604558,
          "date": "Fri 20 May 2022 18:37",
          "username": "vjt",
          "content": "it is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517327,
          "date": "Wed 05 Jan 2022 10:31",
          "username": "MrkJobs",
          "content": "\\\"you can configure Secrets Manager to automatically rotate the secret for you according to a specified schedule.\\\"<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 482225,
          "date": "Sat 20 Nov 2021 03:43",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 346744,
          "date": "Sat 02 Oct 2021 06:31",
          "username": "sunilpanda",
          "content": "C<br>https://aws.amazon.com/secrets-manager/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 340525,
          "date": "Sun 26 Sep 2021 15:46",
          "username": "Azaad78",
          "content": "C - is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load<br>Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application.<br>Which combination of actions should a SysOps administrator take to resolve this problem? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A. Change to the least outstanding requests algorithm on the ALB target group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure cookie forwarding in the CloudFront distribution cache behavior.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure header forwarding in the CloudFront distribution cache behavior.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable group-level stickiness on the ALB listener rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable sticky sessions on the ALB target group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 7 discussion",
      "discusstion": [
        {
          "id": 408736,
          "date": "Wed 27 Oct 2021 09:24",
          "username": "jkwek",
          "content": "Answer is B and E. <br>Refer url :<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html<br>You can configure each cache behavior to do one of the following:<br><br>Forward all cookies to your origin =E2=80=93 CloudFront includes all cookies sent by the viewer when it forwards requests to the origin.<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html<br>By default, an Application Load Balancer routes each request independently to a registered target based on the chosen load-balancing algorithm.",
          "upvote_count": "18",
          "selected_answers": ""
        },
        {
          "id": 737469,
          "date": "Wed 07 Dec 2022 06:49",
          "username": "michaldavid",
          "content": "bbbbbbb and eeeeeee",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 722409,
          "date": "Sun 20 Nov 2022 06:36",
          "username": "mlantonis2",
          "content": "Ans: BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721652,
          "date": "Sat 19 Nov 2022 00:59",
          "username": "Liongeek",
          "content": "Ans: BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 665552,
          "date": "Sat 10 Sep 2022 19:01",
          "username": "nakikoo",
          "content": "im sticking with CE with this one...again might be wrong, but logically, the questions says \\\"Stateful\\\" web application, meaning it comes from one host, header can be set from the one stateful web application to route to only one destination...configuring cookie based might overload the process, which explains the logout issue...but i maybe wrong, just a suggestion<br>Header based caching:<br>https://aws.amazon.com/premiumsupport/knowledge-center/configure-cloudfront-to-forward-headers/<br><br>cookie based caching:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 628080,
          "date": "Wed 06 Jul 2022 20:44",
          "username": "mohamedba",
          "content": "Cookie forwarding for CloudFront and Stick Session for the ALB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 605870,
          "date": "Mon 23 May 2022 08:50",
          "username": "Mikilo",
          "content": "B and E is correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 595823,
          "date": "Mon 02 May 2022 04:13",
          "username": "Finger41",
          "content": "B and E : https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html + https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 561030,
          "date": "Fri 04 Mar 2022 21:24",
          "username": "roka_ua",
          "content": "I vote BE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 556098,
          "date": "Fri 25 Feb 2022 17:45",
          "username": "JeanClaud",
          "content": "Def B\\E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 516413,
          "date": "Tue 04 Jan 2022 10:41",
          "username": "MrkJobs",
          "content": "B - E<br>to use sticky, need rigth cookie. as aws documentation explain:<br>\\\"Application Load Balancers support both duration-based cookies and application-based cookies. The key to managing sticky sessions is determining how long your load balancer should consistently route the user's request to the same target. Sticky sessions are enabled at the target group level. You can use a combination of duration-based stickiness, application-based stickiness, and no stickiness across all of your target groups.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 515348,
          "date": "Mon 03 Jan 2022 03:00",
          "username": "szl0144",
          "content": "vote BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508143,
          "date": "Thu 23 Dec 2021 22:23",
          "username": "doc_nta",
          "content": "I vote BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481605,
          "date": "Fri 19 Nov 2021 12:54",
          "username": "nqthien041292",
          "content": "Vote BE",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 409268,
          "date": "Tue 02 Nov 2021 19:05",
          "username": "Huy",
          "content": "B & E is correct answer. Enable sticky session + forward Cookie because ALB sticky session works based on cookie.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 402996,
          "date": "Thu 30 Sep 2021 03:17",
          "username": "USRshuda",
          "content": "Is it B and E ?should be as from here : https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 404399,
          "date": "Fri 01 Oct 2021 08:08",
          "username": "shuda",
          "content": "should be as from here : https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a serverless application on AWS Lambda. The application stores data in an Amazon RDS for MySQL DB instance. Usage has steadily increased, and recently there have been numerous \"too many connections\" errors when the Lambda function attempts to connect to the database. The company already has configured the database to use the maximum max_connections value that is possible.<br>What should a SysOps administrator do to resolve these errors?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Create a read replica of the database. Use Amazon Route 53 to create a weighted DNS record that contains both databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon RDS Proxy to create a proxy. Update the connection string in the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the value in the max_connect_errors parameter in the parameter group that the database uses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Lambda function's reserved concurrency to a higher value.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 8 discussion",
      "discusstion": [
        {
          "id": 344414,
          "date": "Sun 24 Oct 2021 22:20",
          "username": "binhdt2611",
          "content": "Answer is B<br><br>Check\\\"Database proxy for Amazon RDS\\\" section in the link to see how RDS proxy help Lambda handle huge connections to RDS MySQL<br><br>https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 409389,
          "date": "Fri 05 Nov 2021 13:25",
          "username": "jkwek",
          "content": "Answer is B. <br>https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/<br>RDS Proxy acts as an intermediary between your application and an RDS database. RDS Proxy establishes and manages the necessary connection pools to your database so that your application creates fewer database connections.<br>Your Lambda functions interact with RDS Proxy instead of your database instance. It handles the connection pooling necessary for scaling many simultaneous connections created by concurrent Lambda functions. This allows your Lambda applications to reuse existing connections, rather than creating new connections for every function invocation.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 737468,
          "date": "Wed 07 Dec 2022 06:49",
          "username": "michaldavid",
          "content": "bbbbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 599373,
          "date": "Tue 10 May 2022 04:52",
          "username": "Finger41",
          "content": "B - https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/<br><br>Solution straight out of the docs.....",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 576682,
          "date": "Mon 28 Mar 2022 09:17",
          "username": "pglag",
          "content": "its B for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 574885,
          "date": "Fri 25 Mar 2022 09:32",
          "username": "mmmmm12451",
          "content": "B for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 564750,
          "date": "Thu 10 Mar 2022 12:12",
          "username": "VTHOR",
          "content": "B, for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561085,
          "date": "Fri 04 Mar 2022 23:40",
          "username": "roka_ua",
          "content": "Should be B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 517310,
          "date": "Wed 05 Jan 2022 10:16",
          "username": "MrkJobs",
          "content": "B<br>\\\"You can use RDS Proxy for any application that makes SQL calls to your database. But in the context of serverless, we focus on how this improves the Lambda experience. The proxy handles all database traffic that normally flows from your Lambda functions directly to the database.\\\"<br>https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 508157,
          "date": "Thu 23 Dec 2021 22:52",
          "username": "doc_nta",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482221,
          "date": "Sat 20 Nov 2021 03:31",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 376758,
          "date": "Thu 04 Nov 2021 22:26",
          "username": "lei00",
          "content": "I think the answer should be B. <br><br>D -- the concurrency is more towards the services invoke Lambda, instead of the question here \\\"too many connections to RDS\\\"<br>https://aws.amazon.com/tw/blogs/compute/managing-aws-lambda-function-concurrency/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 341733,
          "date": "Sat 25 Sep 2021 16:19",
          "username": "Azaad78",
          "content": "D - I think. Cause Lamdas are writing to RDS. Read replica are only for reading. https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html<br>This doc shows that Lamda's concurrent behavior can be limited.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its website in the us-east-1 Region. The company is preparing to deploy its website into the eu-central-1 Region. Website visitors who are located in Europe should access the website that is hosted in eu-central-1. All other visitors access the website that is hosted in us-east-1. The company uses<br>Amazon Route 53 to manage the website's DNS records.<br>Which routing policy should a SysOps administrator apply to the Route 53 record set to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Geolocation routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Geoproximity routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Multivalue answer routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 8 discussion",
      "discusstion": [
        {
          "id": 425531,
          "date": "Thu 04 Nov 2021 02:18",
          "username": "Finger41",
          "content": "Answer A - geolocation \\\"Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an ELB load balancer in the Frankfurt region.\\\"<br><br>Could be confused with geoproximity - \\\"Geoproximity routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources. You can also optionally choose to route more traffic or less to a given resource by specifying a value, known as a bias. A bias expands or shrinks the size of the geographic region from which traffic is routed to a resource\\\" the use case is not needed as per question.https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 574871,
          "date": "Fri 25 Mar 2022 09:04",
          "username": "mmmmm12451",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 561029,
          "date": "Fri 04 Mar 2022 21:23",
          "username": "roka_ua",
          "content": "Should be A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 516404,
          "date": "Tue 04 Jan 2022 10:32",
          "username": "MrkJobs",
          "content": "Solution A:<br>as Finger41 wrote.<br>\\\"Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an ELB load balancer in the Frankfurt region.\\\"<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 515347,
          "date": "Mon 03 Jan 2022 02:59",
          "username": "szl0144",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508142,
          "date": "Thu 23 Dec 2021 22:19",
          "username": "doc_nta",
          "content": "For sur A is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 486970,
          "date": "Thu 25 Nov 2021 23:49",
          "username": "rexix7368",
          "content": "Definetly is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 484230,
          "date": "Mon 22 Nov 2021 14:19",
          "username": "rjaraujo",
          "content": "Vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 481604,
          "date": "Fri 19 Nov 2021 12:53",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 409043,
          "date": "Tue 19 Oct 2021 17:18",
          "username": "Huy",
          "content": "Answer is A.  geolocation routing with a default value. Geoproximity routing policy is not precise as geolocation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 379703,
          "date": "Sun 17 Oct 2021 13:55",
          "username": "ahaffarhou0220",
          "content": "Why we cannot choose Option B Geoproximity routing policy?<br>Geolocation routing policy =E2=80=93 Use when you want to route traffic based on the location of your users.<br><br>Geoproximity routing policy =E2=80=93 Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another.Because the question stated \\\"Website visitors who are located in Europe should access the website that is hosted in eu-central-1\\\". The requirement is based on user location.",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 410840,
          "date": "Sat 30 Oct 2021 08:37",
          "username": "hou0220",
          "content": "Because the question stated \\\"Website visitors who are located in Europe should access the website that is hosted in eu-central-1\\\". The requirement is based on user location.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 370710,
          "date": "Sun 10 Oct 2021 13:38",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340526,
          "date": "Sat 09 Oct 2021 00:07",
          "username": "Azaad78",
          "content": "A - Geolocation",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 332452,
          "date": "Wed 22 Sep 2021 03:08",
          "username": "Salis",
          "content": "A<br>Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an ELB load balancer in the Frankfurt region.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its website in the us-east-1 Region. The company is preparing to deploy its website into the eu-central-1 Region. Website visitors who are located in Europe should access the website that is hosted in eu-central-1. All other visitors access the website that is hosted in us-east-1. The company uses<br>Amazon Route 53 to manage the website's DNS records.<br>Which routing policy should a SysOps administrator apply to the Route 53 record set to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Geolocation routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Geoproximity routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Multivalue answer routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 8 discussion",
      "discusstion": [
        {
          "id": 591009,
          "date": "Sun 24 Apr 2022 13:52",
          "username": "Mecdrox",
          "content": "A.  https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html ALL users in Europe must be directed to the site hosted in Europe.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 629105,
          "date": "Sat 09 Jul 2022 11:52",
          "username": "abul12",
          "content": "I am confused about the correct answer is C<br><br>So why those choose if community members choose A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 628078,
          "date": "Wed 06 Jul 2022 20:42",
          "username": "mohamedba",
          "content": "Easy one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 622492,
          "date": "Sun 26 Jun 2022 12:48",
          "username": "Santoshkmr",
          "content": "A.  Geolocation routing policy",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595816,
          "date": "Mon 02 May 2022 03:57",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo<br><br>Ignore the answer provided by this website. You are routing based on location, that is geo-location routing.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 588883,
          "date": "Wed 20 Apr 2022 20:24",
          "username": "ovilla",
          "content": "The answer is A: when you want to route traffic based on the location of your users.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a website on Amazon EC2 instances that are in an Auto Scaling group. When the website traffic increases, additional instances take several minutes to become available because of a long-running user data script that installs software. A SysOps administrator must decrease the time that is required for new instances to become available.<br>Which action should the SysOps administrator take to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Reduce the scaling thresholds so that instances are added before traffic increases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase Reserved Instances to cover 100% of the maximum capacity of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Auto Scaling group to launch instances that have a storage optimized instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use EC2 Image Builder to prepare an Amazon Machine Image (AMI) that has pre-installed software.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 9 discussion",
      "discusstion": [
        {
          "id": 425533,
          "date": "Sun 31 Oct 2021 07:19",
          "username": "Finger41",
          "content": "D - automated way to update your image. Have a pipeline to update your image. When you boot from your AMI updatesscrits are already pre-installed, so no need to complete boot scripts in boot process.<br><br>https://aws.amazon.com/image-builder/",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 636060,
          "date": "Sun 24 Jul 2022 15:24",
          "username": "tech1guru",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 626076,
          "date": "Sat 02 Jul 2022 11:25",
          "username": "DuniX33",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 515747,
          "date": "Mon 03 Jan 2022 14:11",
          "username": "szl0144",
          "content": "vote d",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482272,
          "date": "Sat 20 Nov 2021 06:28",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 415930,
          "date": "Fri 29 Oct 2021 12:47",
          "username": "Alex_shimo",
          "content": "D for sure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 370712,
          "date": "Wed 27 Oct 2021 01:57",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 367274,
          "date": "Mon 25 Oct 2021 04:37",
          "username": "pareencloud",
          "content": "it is also been called as golden ami",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 346747,
          "date": "Sat 09 Oct 2021 23:00",
          "username": "sunilpanda",
          "content": "D<br>prebuilt application specific AMI",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 329077,
          "date": "Wed 06 Oct 2021 19:51",
          "username": "MukunthP",
          "content": "Answer is D. ",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is deploying an application on 10 Amazon EC2 instances. The application must be highly available. The instances must be placed on distinct underlying hardware.<br>What should the SysOps administrator do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Launch the instances into a cluster placement group in a single AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the instances into a partition placement group in multiple AWS Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch the instances into a spread placement group in multiple AWS Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the instances into a spread placement group in a single AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 9 discussion",
      "discusstion": [
        {
          "id": 341740,
          "date": "Fri 01 Oct 2021 07:27",
          "username": "Azaad78",
          "content": "D - I think. Keep in mind placement groups can't cross regions.",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 737472,
          "date": "Wed 07 Dec 2022 06:51",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733551,
          "date": "Fri 02 Dec 2022 08:48",
          "username": "pravinb",
          "content": "B incorrect - you cant launch them in multiple AWS regions..Only D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 721654,
          "date": "Sat 19 Nov 2022 01:06",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 631604,
          "date": "Fri 15 Jul 2022 05:34",
          "username": "yeanlingmedal71",
          "content": "Spread =E2=80=93 strictly places a small group of instances across distinct underlying hardware to reduce correlated failures. A rack spread placement group can span multiple Availability Zones in the same Region. For rack spread level placement groups, you can have a maximum of seven running instances per Availability Zone per group.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 630212,
          "date": "Mon 11 Jul 2022 23:35",
          "username": "mohamedba",
          "content": "D. <br>Spread in single region is the answer (max 7 instances per AZ). Not that placement groups can't cross regions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625144,
          "date": "Thu 30 Jun 2022 11:05",
          "username": "ceeee",
          "content": "D definitely, because we need ec2s in separated racks and because placement groups do not cross regions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 618655,
          "date": "Sun 19 Jun 2022 13:23",
          "username": "221898",
          "content": "D - I think",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 614152,
          "date": "Thu 09 Jun 2022 20:09",
          "username": "ceros399",
          "content": "ansD<br>you might think on c, however vpcs doesn't spread across multiple regions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 598821,
          "date": "Mon 09 May 2022 05:32",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561072,
          "date": "Fri 04 Mar 2022 23:27",
          "username": "roka_ua",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 535610,
          "date": "Sat 29 Jan 2022 18:14",
          "username": "JackSurya",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 518457,
          "date": "Thu 06 Jan 2022 19:12",
          "username": "lefty0",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 516639,
          "date": "Tue 04 Jan 2022 14:28",
          "username": "MrkJobs",
          "content": "answer D:<br>Spread works only in 1 region.<br>Max instace per avalibility zone 7. if 3 availibility zone21 Istance. ( Question10 istance)<br>\\\"A spread placement group is a group of instances that are each placed on distinct racks, with each rack having its own network and power source.\\\"<br>All istance are placed on different racks for a maximun of 7 istance for AvailabilityZone.<br>\\\"A spread placement group can span multiple Availability Zones in the same Region. You can have a maximum of seven running instances per Availability Zone per group.\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-spread",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 515689,
          "date": "Mon 03 Jan 2022 13:25",
          "username": "szl0144",
          "content": "I VOTE D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508149,
          "date": "Thu 23 Dec 2021 22:43",
          "username": "doc_nta",
          "content": "I would go with d",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 500879,
          "date": "Mon 13 Dec 2021 21:25",
          "username": "MrMLB",
          "content": "Vote D.  Strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to restrict access to an Amazon S3 bucket to Amazon EC2 instances in a VPC only. All traffic must be over the AWS private network.<br>What actions should the SysOps administrator take to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Create a VPC endpoint for the S3 bucket, and create an IAM policy that conditionally limits all S3 actions on the bucket to the VPC endpoint as the source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC endpoint for the S3 bucket, and create an S3 bucket policy that conditionally limits all S3 actions on the bucket to the VPC endpoint as the source.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a service-linked role for Amazon EC2 that allows the EC2 instances to interact directly with Amazon S3, and attach an IAM policy to the role that allows the EC2 instances full access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a NAT gateway in the VPC, and modify the VPC route table to route all traffic destined for Amazon S3 through the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 10 discussion",
      "discusstion": [
        {
          "id": 356245,
          "date": "Sun 31 Oct 2021 19:13",
          "username": "FHUAWS21",
          "content": "Letter B is the correct one. While IAM policy (letter A) also can be used, it does not enforce everyone. The only option that enforces everyone is policy configured directly in the bucket S3.Concur, option B<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html",
          "upvote_count": "133",
          "selected_answers": ""
        },
        {
          "id": 601550,
          "date": "Sat 14 May 2022 13:54",
          "username": "AWS21",
          "content": "Concur, option B<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 606444,
          "date": "Tue 24 May 2022 04:54",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591357,
          "date": "Mon 25 Apr 2022 05:31",
          "username": "Shriraj32",
          "content": "B is the correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 586651,
          "date": "Sat 16 Apr 2022 09:28",
          "username": "Mikilo",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 482293,
          "date": "Sat 20 Nov 2021 07:37",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 370713,
          "date": "Thu 04 Nov 2021 16:25",
          "username": "RicardoD",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 329078,
          "date": "Wed 27 Oct 2021 07:04",
          "username": "MukunthP",
          "content": "Answer is B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is troubleshooting an AWS CloudFormation template whereby multiple Amazon EC2 instances are being created. The template is working in us-east-1, but it is failing in us-west-2 with the error code:<br>AMI [ami-12345678] does not exist<br>How should the Administrator ensure that the AWS CloudFormation template is working in every region?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Copy the source region's Amazon Machine Image (AMI) to the destination region and assign it the same ID. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Edit the AWS CloudFormation template to specify the region code as part of the fully qualified AMI ID. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Edit the AWS CloudFormation template to offer a drop-down list of all AMIs to the user by using the AWS::EC2::AMI::ImageID control.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the AWS CloudFormation template by including the AMI IDs in the \"Mappings\" section. Refer to the proper mapping within the template for the proper AMI ID. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 10 discussion",
      "discusstion": [
        {
          "id": 748017,
          "date": "Sat 17 Dec 2022 12:37",
          "username": "gasgasjb",
          "content": "D.  Mappings Section.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 737473,
          "date": "Wed 07 Dec 2022 06:53",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721656,
          "date": "Sat 19 Nov 2022 01:07",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689359,
          "date": "Sat 08 Oct 2022 15:41",
          "username": "Surferbolt",
          "content": "D.  I may be wrong in the details, but if I recall correctly, AMI IDs are different for different Region, and Mappings in CloudFormation template can solve the problem described.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 630322,
          "date": "Tue 12 Jul 2022 08:05",
          "username": "Goozian",
          "content": "Parameters:<br>EnvironmentType:<br>Description: The environment type<br>Type: String<br>Default: test<br>AllowedValues:<br>- prod<br>- test<br>ConstraintDescription: must be a prod or test<br>Mappings:<br>RegionAndInstanceTypeToAMIID:<br>us-east-1:<br>test: \\\"ami-8ff710e2\\\"<br>prod: \\\"ami-f5f41398\\\"<br>us-west-2:<br>test: \\\"ami-eff1028f\\\"<br>prod: \\\"ami-d0f506b0\\\"...other regions and AMI IDs...Resources: ...other resources...<br><br>Outputs:<br>TestOutput:<br>Description: Return the name of the AMI ID that matches the region and environment type keys<br>Value: !FindInMap [RegionAndInstanceTypeToAMIID, !Ref \\\"AWS::Region\\\", !Ref EnvironmentType]",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 606392,
          "date": "Tue 24 May 2022 03:08",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591256,
          "date": "Mon 25 Apr 2022 00:19",
          "username": "Mecdrox",
          "content": "I vote D.  Mappings is the solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator notices a scale-up event for an Amazon EC2 Auto Scaling group. Amazon CloudWatch shows a spike in the RequestCount metric for the associated Application Load Balancer. The administrator would like to know the IP addresses for the source of the requests.<br>Where can the administrator find this information?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Auto Scaling logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS CloudTrail logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. EC2 instance logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Elastic Load Balancer access logs<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 11 discussion",
      "discusstion": [
        {
          "id": 614418,
          "date": "Fri 10 Jun 2022 10:28",
          "username": "221898",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 612877,
          "date": "Tue 07 Jun 2022 20:32",
          "username": "ceros399TheFemster",
          "content": "B is not the answers, you cannot find traffic information in CloudTrail, it only logs API calls to aws.<br>in this case ans is D because literally the access is through the ELB. i agree its D since it also did not mentioned Cloudtrail so we cannot assume they are using Cloudtrail.Logically it has to be D",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 614010,
          "date": "Thu 09 Jun 2022 15:21",
          "username": "TheFemster",
          "content": "i agree its D since it also did not mentioned Cloudtrail so we cannot assume they are using Cloudtrail.Logically it has to be D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 611451,
          "date": "Sat 04 Jun 2022 15:56",
          "username": "nebuchadnezzar",
          "content": "Questions saysApplication Load Balancer while the answer is Elastic load balancer, I think it should be B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 605861,
          "date": "Mon 23 May 2022 08:35",
          "username": "Mikilo",
          "content": "D is Correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 602862,
          "date": "Tue 17 May 2022 11:18",
          "username": "altonh",
          "content": "The answer is D. <br>B is not the right answer. Cloud trail cannot record the source of the incoming request.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594096,
          "date": "Fri 29 Apr 2022 00:42",
          "username": "Finger41everythingship",
          "content": "Both B and D are correct, if you are looking for source IP.<br>B - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-record-contents.html<br>D - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#access-log-entry-formatI know B is also correct. But it's not useful.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 595473,
          "date": "Sun 01 May 2022 08:39",
          "username": "everythingship",
          "content": "I know B is also correct. But it's not useful.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 591359,
          "date": "Mon 25 Apr 2022 05:33",
          "username": "Shriraj32",
          "content": "I vote D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591018,
          "date": "Sun 24 Apr 2022 14:11",
          "username": "Mecdrox",
          "content": "I think D.  We are looking for the client source ip. https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 588899,
          "date": "Wed 20 Apr 2022 20:51",
          "username": "ovilla",
          "content": "I think is D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator notices a scale-up event for an Amazon EC2 Auto Scaling group. Amazon CloudWatch shows a spike in the RequestCount metric for the associated Application Load Balancer. The administrator would like to know the IP addresses for the source of the requests.<br>Where can the administrator find this information?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Auto Scaling logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS CloudTrail logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. EC2 instance logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Elastic Load Balancer access logs<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 11 discussion",
      "discusstion": [
        {
          "id": 340626,
          "date": "Mon 04 Oct 2021 19:41",
          "username": "LuizMarques",
          "content": "Answer is D. <br>Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer. Each log contains information such as the time the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 577850,
          "date": "Tue 29 Mar 2022 22:11",
          "username": "hammering",
          "content": "D.  Elastic Load Balancer access logs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 574862,
          "date": "Fri 25 Mar 2022 08:48",
          "username": "mmmmm12451",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 555787,
          "date": "Fri 25 Feb 2022 06:05",
          "username": "az102",
          "content": "D. https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html .",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 546789,
          "date": "Mon 14 Feb 2022 00:13",
          "username": "roka_ua",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 531596,
          "date": "Mon 24 Jan 2022 22:38",
          "username": "meggie",
          "content": "Vote for B:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-monitoring-features.html<br>Search for \\\"IP\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 527428,
          "date": "Wed 19 Jan 2022 11:59",
          "username": "aramisrocha",
          "content": "the answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 516365,
          "date": "Tue 04 Jan 2022 09:32",
          "username": "MrkJobs",
          "content": "Answer is A:<br>focus word. CloudWatch.<br>CloudWatch are enabled and works with autoscaling.<br>Inside autoscaling log 2 option for client IP: CloudTrail (if enabled) or EventLog.<br>Access logging is an optional feature of Elastic Load Balancing that is disabled by default.<br>Optionalneed specific word inside question to undestand if enabled.<br>(https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 515275,
          "date": "Mon 03 Jan 2022 00:22",
          "username": "szl0144",
          "content": "D IS correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 508135,
          "date": "Thu 23 Dec 2021 22:11",
          "username": "doc_nta",
          "content": "the answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 495605,
          "date": "Tue 07 Dec 2021 06:00",
          "username": "MrMLB",
          "content": "Answer is D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 491890,
          "date": "Wed 01 Dec 2021 20:23",
          "username": "peterjohn",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 490246,
          "date": "Mon 29 Nov 2021 23:12",
          "username": "rexix7368",
          "content": "ELB acess logs..<br>Cloudtrail logs focused on API requests not application requests to resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 485534,
          "date": "Wed 24 Nov 2021 01:51",
          "username": "Jhong",
          "content": "I think it's B.  In https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-dg.pdf, \\\"Amazon EC2 Auto Scaling is integrated with AWS CloudTrail... Using the information collected by CloudTrail,<br>you can determine the request that was made to Amazon EC2 Auto Scaling, the IP address from which<br>the request was made, who made the request, when it was made, and additional details.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 485053,
          "date": "Tue 23 Nov 2021 14:23",
          "username": "gmcs",
          "content": "Vote B<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-dg.pdf (Page 244)<br><br>CloudTrail Logs<br>AWS CloudTrail enables you to track the calls made to the Amazon EC2 Auto Scaling API by or on behalf of your Amazon Web Services account. CloudTrail stores the information in log files in the Amazon S3 bucket that you specify. You can use these log files to monitor activity of your AutoScaling groups. Logs include which requests were made, the source IP addresses where the requests came from, who made the request, when the request was made, and so on.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 484389,
          "date": "Mon 22 Nov 2021 18:01",
          "username": "hhhhhhhhhhh",
          "content": "Vote D, ELB access logs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 484007,
          "date": "Mon 22 Nov 2021 10:05",
          "username": "rjaraujo",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is provisioning an Amazon Elastic File System (Amazon EFS) file system to provide shared storage across multiple Amazon EC2 instances. The instances all exist in the same VPC across multiple Availability Zones. There are two instances in each Availability Zone. The SysOps administrator must make the file system accessible to each instance with the lowest possible latency.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Create a mount target for the EFS file system in the VPC.  Use the mount target to mount the file system on each of the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a mount target for the EFS file system in one Availability Zone of the VPC.  Use the mount target to mount the file system on the instances in that Availability Zone. Share the directory with the other instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a mount target for each instance. Use each mount target to mount the EFS file system on each respective instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a mount target in each Availability Zone of the VPC.  Use the mount target to mount the EFS file system on the instances in the respective Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 11 discussion",
      "discusstion": [
        {
          "id": 737477,
          "date": "Wed 07 Dec 2022 06:56",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721657,
          "date": "Sat 19 Nov 2022 01:08",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689405,
          "date": "Sat 08 Oct 2022 16:13",
          "username": "Surferbolt",
          "content": "D.  You can create an EFS mount target down to AZ level only.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 617126,
          "date": "Thu 16 Jun 2022 08:31",
          "username": "221898",
          "content": "Correct Answer: D =F0=9F=97=B3=EF=B8=8F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 606400,
          "date": "Tue 24 May 2022 03:18",
          "username": "Finger41",
          "content": "d - https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 604580,
          "date": "Fri 20 May 2022 19:05",
          "username": "vjt",
          "content": "It is D. <br>A mount target provides an IP address for an NFSv4 endpoint at which you can mount an Amazon EFS file system. You mount your file system using its Domain Name Service (DNS) name, which resolves to the IP address of the EFS mount target in the same Availability Zone as your EC2 instance. You can create one mount target in each Availability Zone in an AWS Region. If there are multiple subnets in an Availability Zone in your VPC, you create a mount target in one of the subnets. Then all EC2 instances in that Availability Zone share that mount target.<br><br>https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 591263,
          "date": "Mon 25 Apr 2022 00:30",
          "username": "Mecdrox",
          "content": "I vote D for multi AZ requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A SysOps administrator needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A. Create an Aurora Replica. Promote the replica to replace the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use backtracking to rewind the existing DB cluster to the desired recovery point.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use point-in-time recovery to restore the existing DB cluster to the desired recovery point.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 12 discussion",
      "discusstion": [
        {
          "id": 329083,
          "date": "Thu 23 Sep 2021 05:06",
          "username": "MukunthP",
          "content": "Answer is C<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 425536,
          "date": "Sun 24 Oct 2021 16:22",
          "username": "Finger41",
          "content": "Answer is C<br><br>The question clearly states that backtracking is enabled.<br><br>\\\"The limit for a backtrack window is 72 hours.....Backtracking is only available for DB clusters that were created with the Backtrack feature enabled....Backtracking \\\"rewinds\\\" the DB cluster to the time you specify. Backtracking is not a replacement for backing up your DB cluster so that you can restore it to a point in time....You can backtrack a DB cluster quickly. Restoring a DB cluster to a point in time launches a new DB cluster and restores it from backup data or a DB cluster snapshot, which can take hours.\\\"<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 517540,
          "date": "Wed 05 Jan 2022 15:38",
          "username": "MrkJobs",
          "content": "C<br>focus word: 72 hours - restore-in-point<br>\\\"Backtracking \\\"rewinds\\\" the DB cluster to the time you specify. Backtracking is not a replacement for backing up your DB cluster so that you can restore it to a point in time\\\"<br>The limit for a backtrack window is 72 hours.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 482310,
          "date": "Sat 20 Nov 2021 08:04",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 474386,
          "date": "Mon 08 Nov 2021 17:25",
          "username": "chanez",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 414032,
          "date": "Fri 22 Oct 2021 20:29",
          "username": "Toks2021",
          "content": "C<br>\\\"You can backtrack a DB cluster quickly. Restoring a DB cluster to a point in time launches a new DB cluster and restores it from backup data or a DB cluster snapshot, which can take hours. Backtracking a DB cluster doesn't require a new DB cluster and rewinds the DB cluster in minutes.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 386055,
          "date": "Thu 21 Oct 2021 22:10",
          "username": "USR",
          "content": "Option C - Backtracking a DB cluster doesn't require a new DB cluster and rewinds the DB cluster in minutes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 379711,
          "date": "Thu 14 Oct 2021 08:46",
          "username": "ahaffar",
          "content": "Option D is the answer since we need to use the same cluster<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 377399,
          "date": "Wed 13 Oct 2021 23:31",
          "username": "ahaffar",
          "content": "While C & D are correct but the answer id C<br>as D would create a new DB Cluster<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 356658,
          "date": "Thu 07 Oct 2021 14:07",
          "username": "FHU",
          "content": "Letter C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 340629,
          "date": "Mon 27 Sep 2021 18:24",
          "username": "LuizMarques",
          "content": "Answer is C. <br>D is wrong because Restore to Point in Time scales a new cluster and the question asks for a solution in the already existing db cluster",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has successfully deployed a VPC with an AWS CloudFormation template. The SysOps administrator wants to deploy the same template across multiple accounts that are managed through AWS Organizations.<br>Which solution will meet this requirement with the LEAST operational overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A. Assume the OrganizationAccountAccessRole IAM role from the management account. Deploy the template in each of the accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to assume a role in each account. Deploy the template by using the AWS CloudFormation CreateStack API call.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to query for a list of accounts. Deploy the template by using the AWS CloudFormation CreateStack API call.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation StackSets from the management account to deploy the template in each of the accounts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 12 discussion",
      "discusstion": [
        {
          "id": 737479,
          "date": "Wed 07 Dec 2022 06:58",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722414,
          "date": "Sun 20 Nov 2022 06:50",
          "username": "mlantonis2",
          "content": "D StackSets",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721658,
          "date": "Sat 19 Nov 2022 01:09",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689409,
          "date": "Sat 08 Oct 2022 16:16",
          "username": "Surferbolt",
          "content": "D.  CloudFormation StackSets is designed for scenarios like that.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658768,
          "date": "Sat 03 Sep 2022 21:09",
          "username": "andrerkn",
          "content": "D is the correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 657343,
          "date": "Fri 02 Sep 2022 13:20",
          "username": "Hello23",
          "content": "AWS CloudFormation StackSets extends the capability of stacks by enabling you to create, update, or delete stacks across multiple accounts and AWS Regions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a flash sale on its website. The website is hosted on burstable performance Amazon EC2 instances in an Auto Scaling group. The Auto<br>Scaling group is configured to launch instances when the CPU utilization is above 70%.<br>A couple of hours into the sale, users report slow load times and error messages for refused connections. A SysOps administrator reviews Amazon CloudWatch metrics and notices that the CPU utilization is at 20% across the entire fleet of instances.<br>The SysOps administrator must restore the website's functionality without making changes to the network infrastructure.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Activate unlimited mode for the instances in the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement an Amazon CloudFront distribution to offload the traffic from the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the website to a different AWS Region that is closer to the users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reduce the desired size of the Auto Scaling group to artificially increase CPU average utilization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 13 discussion",
      "discusstion": [
        {
          "id": 608311,
          "date": "Sat 28 May 2022 10:28",
          "username": "MikeyJMambo_king",
          "content": "A.  The EC2 instances have been so busy they've used all their credits. Now their credits are all gone the CPU is restricted to running at a baseline level of 20%. There's still a lot of demand from users, so a quick fix is to allow unlimited mode to let the CPUs ram up to full power again.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html#earning-CPU-creditsi support your choice 100%",
          "upvote_count": "61",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 619778,
          "date": "Tue 21 Jun 2022 13:01",
          "username": "Mambo_king",
          "content": "i support your choice 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 612323,
          "date": "Mon 06 Jun 2022 13:33",
          "username": "MikeyJbroadwinkbroadwink",
          "content": "FWIW I learned that this is a question from TutorialDojo and they give the answer as setting up a CloudFront distribution.TutorialsDojo one states ASG + ALB, this question is phrased a little bit different, There is not ALB. <br>CloudFront can connect with S3, ALB and Custom Origins (EC2 and On-Premises) but cannot connect with ASG.So...<br>I was wrong,<br>Tutorial Dojo question is exactly this one, and they address the Answer with CloudFront + ALB. <br>But Neal Davis has a similar question on his exams that address the right answer as EC2 Credits.<br>So, just hope this question doesn't shows :)",
          "upvote_count": "122",
          "selected_answers": ""
        },
        {
          "id": 621052,
          "date": "Thu 23 Jun 2022 16:54",
          "username": "broadwinkbroadwink",
          "content": "TutorialsDojo one states ASG + ALB, this question is phrased a little bit different, There is not ALB. <br>CloudFront can connect with S3, ALB and Custom Origins (EC2 and On-Premises) but cannot connect with ASG.So...<br>I was wrong,<br>Tutorial Dojo question is exactly this one, and they address the Answer with CloudFront + ALB. <br>But Neal Davis has a similar question on his exams that address the right answer as EC2 Credits.<br>So, just hope this question doesn't shows :)",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 629253,
          "date": "Sat 09 Jul 2022 17:36",
          "username": "broadwink",
          "content": "So...<br>I was wrong,<br>Tutorial Dojo question is exactly this one, and they address the Answer with CloudFront + ALB. <br>But Neal Davis has a similar question on his exams that address the right answer as EC2 Credits.<br>So, just hope this question doesn't shows :)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 605860,
          "date": "Mon 23 May 2022 08:34",
          "username": "Mikilo",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 602860,
          "date": "Tue 17 May 2022 11:10",
          "username": "altonh",
          "content": "It's A. <br>It cannot be B because:<br>1. CF cannot point to ASG<br>2. You need to modify your DNS to point to CF and that would be changing the network infrastructure.<br>3. There was never any mention if the website is serving a good amount of static contents.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 600853,
          "date": "Fri 13 May 2022 00:53",
          "username": "jjcode",
          "content": "The CPU utilization is according to the logs is 20%, which means more instances will not solve the problem, The question hints at this being a resource problem with the app itself, so i went with B.  Who writes these things?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 595478,
          "date": "Sun 01 May 2022 09:03",
          "username": "psou7All_ultrex",
          "content": "It is B - Cloudfront and yes Cloudfront support EC2 as origin<br>https://aws.amazon.com/cloudfront/getting-started/EC2/LOL, read step 3 for setting it up, you need an ALB which would change the network infrastructure.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 595695,
          "date": "Sun 01 May 2022 20:22",
          "username": "All_ultrex",
          "content": "LOL, read step 3 for setting it up, you need an ALB which would change the network infrastructure.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 595461,
          "date": "Sun 01 May 2022 08:24",
          "username": "everythingship",
          "content": "It's absolutely A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 594484,
          "date": "Fri 29 Apr 2022 15:17",
          "username": "All_ultrex",
          "content": "They mark C correct, but their link points to A being the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594082,
          "date": "Fri 29 Apr 2022 00:07",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html<br><br>The reference in the answer indicates to a wrong answer, should be associated to A, not C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591369,
          "date": "Mon 25 Apr 2022 05:58",
          "username": "Shriraj32All_ultrexeverythingshipeverythingship",
          "content": "Implement an Amazon CloudFront distribution to offload the traffic from the Auto Scaling group does not breach the requirement of no changes in the network infrastructure. Reason is that cloudfront is a distribution that allows you to distribute content using a worldwide network of edge locations that provide low latency and high data transfer speeds. It plug in to existing setup, not changes to it.<br>So Answer is BBut CloudFront requires an origin, you can't use a ASG as an origin...this is why I think it's AYou must not modufiy the network architecture.* modify",
          "upvote_count": "4211",
          "selected_answers": ""
        },
        {
          "id": 592481,
          "date": "Tue 26 Apr 2022 15:50",
          "username": "All_ultrex",
          "content": "But CloudFront requires an origin, you can't use a ASG as an origin...this is why I think it's A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 595462,
          "date": "Sun 01 May 2022 08:25",
          "username": "everythingshipeverythingship",
          "content": "You must not modufiy the network architecture.* modify",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 595463,
          "date": "Sun 01 May 2022 08:26",
          "username": "everythingship",
          "content": "* modify",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591024,
          "date": "Sun 24 Apr 2022 14:17",
          "username": "Mecdrox",
          "content": "a. activate unlimited mode. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html<br><br>It is likely that the CPU credits have been used up by sustained bursting above the baseline for the instances. Enabling<br>unlimited mode will allow the instances to sustain higher CPU utilization through the sales events.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 588900,
          "date": "Wed 20 Apr 2022 20:54",
          "username": "ovilla",
          "content": "It's B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a flash sale on its website. The website is hosted on burstable performance Amazon EC2 instances in an Auto Scaling group. The Auto<br>Scaling group is configured to launch instances when the CPU utilization is above 70%.<br>A couple of hours into the sale, users report slow load times and error messages for refused connections. A SysOps administrator reviews Amazon CloudWatch metrics and notices that the CPU utilization is at 20% across the entire fleet of instances.<br>The SysOps administrator must restore the website's functionality without making changes to the network infrastructure.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Activate unlimited mode for the instances in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement an Amazon CloudFront distribution to offload the traffic from the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the website to a different AWS Region that is closer to the users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reduce the desired size of the Auto Scaling group to artificially increase CPU average utilization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 13 discussion",
      "discusstion": [
        {
          "id": 340633,
          "date": "Sun 03 Oct 2021 16:33",
          "username": "LuizMarquesCHRIS12722222mgurkan",
          "content": "Answer is B. A.  Activate unlimited mode for the instances in the Auto Scaling group. Wrong because activating unlimted mode would only reduce CPU utilization and thats not the cause of the problem here.B.  Implement an Amazon CloudFront distribution to offload the traffic from the Auto Scaling group. Correct, with the help of the cloudfront we would get less hits on the load balancer and so a better traffic response.C.  Move the website to a different AWS Region that is closer to the users. The question states that no network modification can be made and also if this was the problem it would happen no mather whats the traffic on the site, so wrong.D.  Reduce the desired size of the Auto Scaling group to artificially increase CPU average utilization. wrong, this one makes no sence since it would only create another problem.Correct option is A<br>Using cloudfront means we are now changing the network architecture by using edge locations.<br>changing the burst type to unlimited allows the ec2 to borrow up to 1-day credit upfront for bursting during spiky flash sales. This way, we only modify the ec2, not the networkI believe you are misunderstanding the problem. Unlimited mode is not increasing the number of instances. These are burstable instances, if instances are out of burst credit they will work underutilized. If you update to the unlimited burst option, even your instance's burst credit is completed, the CPU will not go down but you will pay extra money for an extra burst which solves the problem. The question specifically mentions burstable instances.",
          "upvote_count": "1914",
          "selected_answers": ""
        },
        {
          "id": 547148,
          "date": "Mon 14 Feb 2022 14:35",
          "username": "CHRIS12722222",
          "content": "Correct option is A<br>Using cloudfront means we are now changing the network architecture by using edge locations.<br>changing the burst type to unlimited allows the ec2 to borrow up to 1-day credit upfront for bursting during spiky flash sales. This way, we only modify the ec2, not the network",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 529376,
          "date": "Fri 21 Jan 2022 21:54",
          "username": "mgurkan",
          "content": "I believe you are misunderstanding the problem. Unlimited mode is not increasing the number of instances. These are burstable instances, if instances are out of burst credit they will work underutilized. If you update to the unlimited burst option, even your instance's burst credit is completed, the CPU will not go down but you will pay extra money for an extra burst which solves the problem. The question specifically mentions burstable instances.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 356976,
          "date": "Thu 28 Oct 2021 01:32",
          "username": "radium88",
          "content": "I think the answer is A.  In this case burstable instances are used, and asg scaling threshold is above the baseline performance. Seems to be that instances have used all available cpu credits and is throttled down by AWS, which causes performance problems. And as far as I remember there is no burstable instances with cpu baseline at 70%.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 581245,
          "date": "Tue 05 Apr 2022 14:18",
          "username": "All_ultrex",
          "content": "This question appeared on digitalcloud.training practice tests.They went with A because<br>you cannot create a CloudFront distribution for an Auto Scaling group as it is not a supported origin (an ELB would be required).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 566850,
          "date": "Sun 13 Mar 2022 14:18",
          "username": "crazydev",
          "content": "Correct option would be B. <br>Why?<br>Well the reason is that the problem isn't with the instances at all. CPU utilization is around 20%, so no need to burst off the instances, unless you want them to fly to the moon along with your money.<br>The real issue lies with the number of simultaneous requests that users are making. The instances aren't able to sustain that many requests.<br>Cloudfront here is a good caching solution in this regard. The underlying network won't change if you implement this, the reason is that you just have to add a custom origin there and you can associate your old website's domain with it in route 53. Users, won't even notice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 566535,
          "date": "Sun 13 Mar 2022 05:02",
          "username": "desiboy825",
          "content": "B CloudFront",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 559836,
          "date": "Thu 03 Mar 2022 07:03",
          "username": "waldonuts",
          "content": "My preference is for 'A' also as its burstable the the issue arises a few hours into the launch, suggesting credits are gone.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 555784,
          "date": "Fri 25 Feb 2022 05:50",
          "username": "az102",
          "content": "It is A. The average CPU utilization across is low hint that the performance issue might be due to certain high CPU demand requests.In general, the fleet of EC2 instance should be enough to serve the traffic in general.Brustable performance EC2 is useful to handle this by committing a baseline CPU usage at 20% with allowing unlimited brust.This can cater both average scenarios and high CPU demand outliners.More detail graphs and examples are described here:https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html .<br><br>B - Wrong because it change the network routing path, which means changed the network architecture.<br>C - same explanation as B. <br>D - increase the CPU utilization is not a way to resolve performance issue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 546787,
          "date": "Mon 14 Feb 2022 00:12",
          "username": "roka_ua",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 536471,
          "date": "Sun 30 Jan 2022 21:38",
          "username": "meggie",
          "content": "A burstable performance instance configured as unlimited can sustain high CPU utilization for any period of time whenever required. The hourly instance price automatically covers all CPU usage spikes if the average CPU utilization of the instance is at or below the baseline over a rolling 24-hour period or the instance lifetime, whichever is shorter.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 521769,
          "date": "Tue 11 Jan 2022 22:18",
          "username": "KimoHasNoBalls",
          "content": "I don't see how adding a cloudfront distropution is not changing the network, but if the CPU on the instance's is only 20%, autoscaling is not happening, thus bursting is not an issue.So i guess i would go with B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 500307,
          "date": "Mon 13 Dec 2021 01:59",
          "username": "mgurkan",
          "content": "Answer is A. <br>It is burstable instances and uses burst credits. When the instances are out of credit because they were working in higher cpu which uses all the credit. After the credit is done all the servers will work under capacity until some credit accumulated.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 499013,
          "date": "Sat 11 Dec 2021 01:12",
          "username": "Vicious000",
          "content": "Use an Auto Scaling group to launch a burstable performance instance as Unlimited<br>When burstable performance instances are launched or started, they require CPU credits for a good bootstrapping experience. If you use an Auto Scaling group to launch your instances, we recommend that you configure your instances as unlimited. If you do, the instances use surplus credits when they are automatically launched or restarted by the Auto Scaling group. Using surplus credits prevents performance restrictions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 486963,
          "date": "Thu 25 Nov 2021 23:19",
          "username": "rexix7368",
          "content": "B is the best method for acomplish the issue without network infra changes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 486302,
          "date": "Wed 24 Nov 2021 23:26",
          "username": "youthanasia",
          "content": "B.  Cloudfront was designed for this sort of scenaio.<br>In response to A, what will unlimited mode do, the CPU is at 20% util?? Unlimited mode is when you need 100% for long periods of time.<br><br>A burstable performance instance configured as unlimited can sustain high CPU utilization for any period of time whenever required.<br><br>The CPU is underutilized...",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 483899,
          "date": "Mon 22 Nov 2021 07:30",
          "username": "hhhhhhhhhhh",
          "content": "Vote B, its a network issue. So cloudfront could help.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481609,
          "date": "Fri 19 Nov 2021 12:57",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 409046,
          "date": "Thu 04 Nov 2021 01:03",
          "username": "Huy",
          "content": "B is correct. The problem is related to Network or IOPS not CPU. So CloudFront will help.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running distributed computing software to manage a fleet of 20 Amazon EC2 instances for calculations. The fleet includes 2 control nodes and 18 task nodes to run the calculations. Control nodes can automatically start the task nodes.<br>Currently, all the nodes run on demand. The control nodes must be available 24 hours a day, 7 days a week. The task nodes run for 4 hours each day. A SysOps administrator needs to optimize the cost of this solution.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Purchase EC2 Instance Savings Plans for the control nodes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Dedicated Hosts for the control nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Reserved Instances for the task nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Spot Instances for the control nodes. Use On-Demand Instances if there is no Spot availability.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Spot Instances for the task nodes. Use On-Demand Instances if there is no Spot availability.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 13 discussion",
      "discusstion": [
        {
          "id": 739260,
          "date": "Thu 08 Dec 2022 17:15",
          "username": "BietTuot",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 737481,
          "date": "Wed 07 Dec 2022 07:02",
          "username": "michaldavid",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 733578,
          "date": "Fri 02 Dec 2022 09:43",
          "username": "pravinb",
          "content": "A and E make more sense if we compare all other options.. we cant use spot instances for control nodes..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722416,
          "date": "Sun 20 Nov 2022 06:54",
          "username": "mlantonis2",
          "content": "A and E. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721660,
          "date": "Sat 19 Nov 2022 01:12",
          "username": "Liongeek",
          "content": "Ans: AE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720220,
          "date": "Thu 17 Nov 2022 06:08",
          "username": "Arkarter",
          "content": "AE is the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 716909,
          "date": "Sat 12 Nov 2022 21:15",
          "username": "Atown",
          "content": "AE is the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 689495,
          "date": "Sat 08 Oct 2022 18:08",
          "username": "Surferbolt",
          "content": "AE.  Control nodes run all the time, so commit them to a savings plan. Task nodes run 4 hour at a time, so spot instances for them.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 683992,
          "date": "Sat 01 Oct 2022 07:17",
          "username": "Kinetix",
          "content": "Savings plan for control nodes and spot/on demand for task nodes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 681673,
          "date": "Wed 28 Sep 2022 14:04",
          "username": "gr3y_matterneta1o",
          "content": "Confused between A & C ? then see this article<br>https://www.prosperops.com/blog/why-you-should-avoid-ec2-instance-savings-plans/#:~:textPutting%20it%20all,EC2ISPs%20make%20sense.It isn't 'C', spot would be cheaper for task nodes since they only need to run 4 hours a day. I'd disagree with that articles summary. Generally speaking Savings Plans are equal in discount but more flexible than their RI counterpart.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 710685,
          "date": "Thu 03 Nov 2022 18:33",
          "username": "neta1o",
          "content": "It isn't 'C', spot would be cheaper for task nodes since they only need to run 4 hours a day. I'd disagree with that articles summary. Generally speaking Savings Plans are equal in discount but more flexible than their RI counterpart.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 678077,
          "date": "Sat 24 Sep 2022 19:20",
          "username": "AJHamadaKinetix",
          "content": "I would choose C and E because the questions asks you to be cost-efficient while maintaining control nodes 24/7, so the cheapest here is not the most cost-efficient.Your solution do not address instances for the control nodes",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 683995,
          "date": "Sat 01 Oct 2022 07:19",
          "username": "Kinetix",
          "content": "Your solution do not address instances for the control nodes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677881,
          "date": "Sat 24 Sep 2022 16:13",
          "username": "Hayder_Alobaidi",
          "content": "The Answer is AE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 657891,
          "date": "Sat 03 Sep 2022 01:10",
          "username": "kati2k22cz",
          "content": "AE is the best solution. Look here<br>https://www.missioncloud.com/blog/ec2-spot-instances-vs-aws-savings-plans-what-are-the-potential-savings",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 657347,
          "date": "Fri 02 Sep 2022 13:26",
          "username": "Hello23",
          "content": "A&E because it asks for the most cost effective solution, EC2 instance savings plan is a better option than reserved instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 656478,
          "date": "Thu 01 Sep 2022 19:06",
          "username": "princajen",
          "content": "The answers should have been RI's for the control nodes, since they are running 24/7 and spot instances for the task nodes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656241,
          "date": "Thu 01 Sep 2022 14:38",
          "username": "CiCa560",
          "content": "Disagree with hi-lighted answers as they both contradict the other.<br><br>B - not the cheapest option for the control nodes<br>C - not the cheapest option for the task nodes<br>D - not possible, control nodes need to run 24x7<br><br>Leaves A & E",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 654283,
          "date": "Tue 30 Aug 2022 19:45",
          "username": "haxaffeeKinetix",
          "content": "Should be CE while there is no statement about how long these instances are supposed to run besides 24/7. RI are long term contracts but they will indeed optimize cost and thats in the question.What about the control nodes?",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 683996,
          "date": "Sat 01 Oct 2022 07:20",
          "username": "Kinetix",
          "content": "What about the control nodes?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Elasticsearch Service (Amazon ES) to analyze sales and customer usage data. Members of the company's geographically dispersed sales team are traveling. They need to log in to Kibana by using their existing corporate credentials that are stored in Active Directory. The company has deployed<br>Active Directory Federation Services (AD FS) to enable authentication to cloud services.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>A. Configure Active Directory as an authentication provider in Amazon ES. Add the Active Directory server's domain name to Amazon ES. Configure Kibana to use Amazon ES authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon Cognito user pool. Configure Active Directory as an external identity provider for the user pool. Enable Amazon Cognito authentication for Kibana on Amazon ES.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Active Directory user authentication in Kibana. Create an IP-based custom domain access policy in Amazon ES that includes the Active Directory server's IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish a trust relationship with Kibana on the Active Directory server. Enable Active Directory user authentication in Kibana. Add the Active Directory server's IP address to Kibana.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 14 discussion",
      "discusstion": [
        {
          "id": 597543,
          "date": "Fri 06 May 2022 06:16",
          "username": "Finger41",
          "content": "B - https://aws.amazon.com/blogs/security/how-to-enable-secure-access-to-kibana-using-aws-single-sign-on/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591028,
          "date": "Sun 24 Apr 2022 14:20",
          "username": "Mecdrox",
          "content": "I vote b.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Elasticsearch Service (Amazon ES) to analyze sales and customer usage data. Members of the company's geographically dispersed sales team are traveling. They need to log in to Kibana by using their existing corporate credentials that are stored in Active Directory. The company has deployed<br>Active Directory Federation Services (AD FS) to enable authentication to cloud services.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>A. Configure Active Directory as an authentication provider in Amazon ES. Add the Active Directory server's domain name to Amazon ES. Configure Kibana to use Amazon ES authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon Cognito user pool. Configure Active Directory as an external identity provider for the user pool. Enable Amazon Cognito authentication for Kibana on Amazon ES.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Active Directory user authentication in Kibana. Create an IP-based custom domain access policy in Amazon ES that includes the Active Directory server's IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish a trust relationship with Kibana on the Active Directory server. Enable Active Directory user authentication in Kibana. Add the Active Directory server's IP address to Kibana.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 14 discussion",
      "discusstion": [
        {
          "id": 425537,
          "date": "Wed 27 Oct 2021 12:52",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 481652,
          "date": "Fri 19 Nov 2021 13:50",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 409048,
          "date": "Thu 21 Oct 2021 23:03",
          "username": "Huy",
          "content": "B - https://aws.amazon.com/blogs/security/how-to-enable-secure-access-to-kibana-using-aws-single-sign-on/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 370740,
          "date": "Mon 04 Oct 2021 15:14",
          "username": "RicardoD",
          "content": "B is the answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 356673,
          "date": "Sun 26 Sep 2021 12:01",
          "username": "FHU",
          "content": "Letter B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 340581,
          "date": "Tue 21 Sep 2021 11:02",
          "username": "Azaad78",
          "content": "B - is ok",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is supposed to receive a data file every hour in an Amazon S3 bucket. An S3 event notification invokes an AWS Lambda function each time a file arrives. The function processes the data for use by an application.<br>The application team notices that sometimes the file does not arrive. The application team wants to receive a notification whenever the file does not arrive.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>A. Add an S3 Lifecycle rule on the S3 bucket with a scope that is limited to objects that were created in the last hour. Configure another S3 event notification to be invoked by the lifecycle transition when the number of objects transitioned is zero. Publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure another S3 event notification to invoke a Lambda function that posts a message to an Amazon Simple Queue Service (Amazon SQS) queue. Create an Amazon CloudWatch alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team when the ApproximateAgeOfOldestMessage metric of the queue is greater than 1 hour.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the application team when the Invocations metric of the Lambda function is zero for an hour. Configure the alarm to treat missing data as breaching.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Lambda function to get the timestamp of the newest file in the S3 bucket. If the timestamp is more than 1 hour ago, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the new function hourly.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 14 discussion",
      "discusstion": [
        {
          "id": 737487,
          "date": "Wed 07 Dec 2022 07:07",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721666,
          "date": "Sat 19 Nov 2022 01:19",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716912,
          "date": "Sat 12 Nov 2022 21:17",
          "username": "Atown",
          "content": "I vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 654284,
          "date": "Tue 30 Aug 2022 19:50",
          "username": "haxaffee",
          "content": "C sounds like the best option. Tested it as well.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon EC2 instance is running an application that uses Amazon Simple Queue Service (Amazon SQS) queues. A SysOps administrator must ensure that the application can read, write, and delete messages from the SQS queues.<br>Which solution will meet these requirements in the MOST secure manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Embed the IAM user's credentials in the application's configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Export the IAM user's access key and secret access key as environment variables on the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows sqs:* permissions to the appropriate queues.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 15 discussion",
      "discusstion": [
        {
          "id": 425542,
          "date": "Fri 22 Oct 2021 09:53",
          "username": "Finger41",
          "content": "Really should be doing this via a Role, and applying this to EC2, hence options A and B are out. Plus you dont want to expose user to input credentials at all, Parameter store or Secrets Manager should be reviewed.<br><br>C is an option, however using sqs:* doesnt really fit with a fine grained set of restrictions the question is asking us to review.<br><br>D is the correct answer as it allows us to read, write and delete in the most secure manner.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 356677,
          "date": "Thu 14 Oct 2021 10:31",
          "username": "FHU",
          "content": "Letter D is the correct answer. Letter A is incorrect because exporting credentials to the application is not a good practice. Letter B is incorrect because using access key and secret access key in application is a very bad practice. Letter C is incorrect because using wildcard is allowing everything, and thus is not recommend.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 617044,
          "date": "Thu 16 Jun 2022 04:20",
          "username": "221898",
          "content": "Vote D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591036,
          "date": "Sun 24 Apr 2022 14:27",
          "username": "Mecdrox",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 586659,
          "date": "Sat 16 Apr 2022 09:42",
          "username": "Mikilo",
          "content": "D is correct here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 482301,
          "date": "Sat 20 Nov 2021 07:48",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 370743,
          "date": "Fri 15 Oct 2021 23:18",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340585,
          "date": "Sun 26 Sep 2021 23:19",
          "username": "Azaad78",
          "content": "D - Listing out what is allowed is better than a \\\"*\\\" wildcard.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently acquired another corporation and all of that corporation's AWS accounts. A financial analyst needs the cost data from these accounts. A<br>SysOps administrator uses Cost Explorer to generate cost and usage reports. The SysOps administrator notices that \"No Tagkey\" represents 20% of the monthly cost.<br>What should the SysOps administrator do to tag the \"No Tagkey\" resources?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Add the accounts to AWS Organizations. Use a service control policy (SCP) to tag all the untagged resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Config rule to find the untagged resources. Set the remediation action to terminate the resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Cost Explorer to find and tag all the untagged resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Tag Editor to find and tag all the untagged resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 15 discussion",
      "discusstion": [
        {
          "id": 721668,
          "date": "Sat 19 Nov 2022 01:20",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690689,
          "date": "Mon 10 Oct 2022 05:59",
          "username": "Surferbolt",
          "content": "D. <br><br>\\\"You can add tags to resources when you create the resource. You can use the resource's service console or API to add, change, or remove those tags one resource at a time. To add tags to=E2=80=94or edit or delete tags of=E2=80=94multiple resources at once, use Tag Editor. With Tag Editor, you search for the resources that you want to tag, and then manage tags for the resources in your search results.\\\"<br>https://docs.aws.amazon.com/ARG/latest/userguide/tag-editor.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 669652,
          "date": "Thu 15 Sep 2022 10:16",
          "username": "Onimole",
          "content": "Correct!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654288,
          "date": "Tue 30 Aug 2022 19:53",
          "username": "haxaffee",
          "content": "Tag Editor as part of AWS Resource Groups works for this. D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>While setting up an AWS managed VPN connection, a SysOps administrator creates a customer gateway resource in AWS. The customer gateway device resides in a data center with a NAT gateway in front of it.<br>What address should be used to create the customer gateway resource?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>A. The private IP address of the customer gateway device<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The MAC address of the NAT device in front of the customer gateway device<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The public IP address of the customer gateway device<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The public IP address of the NAT device in front of the customer gateway device<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 16 discussion",
      "discusstion": [
        {
          "id": 737490,
          "date": "Wed 07 Dec 2022 07:20",
          "username": "michaldavid",
          "content": "dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721669,
          "date": "Sat 19 Nov 2022 01:21",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654998,
          "date": "Wed 31 Aug 2022 12:43",
          "username": "moonwalkeryj",
          "content": "D<br>If your customer gateway device is behind a network address translation (NAT) device, use the IP address of your NAT device.<br>https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 654996,
          "date": "Wed 31 Aug 2022 12:42",
          "username": "moonwalkeryj",
          "content": "If your customer gateway device is behind a network address translation (NAT) device, use the IP address of your NAT device.<br>https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has launched a social media website that gives users the ability to upload images directly to a centralized Amazon S3 bucket. The website is popular in areas that are geographically distant from the AWS Region where the S3 bucket is located. Users are reporting that uploads are slow. A SysOps administrator must improve the upload speed.<br>What should the SysOps administrator do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. Create S3 access points in Regions that are closer to the users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an accelerator in AWS Global Accelerator for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 Transfer Acceleration on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable cross-origin resource sharing (CORS) on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 17 discussion",
      "discusstion": [
        {
          "id": 340592,
          "date": "Tue 19 Oct 2021 04:18",
          "username": "Azaad78",
          "content": "C - Transfer Accelerator is for S3. Global Accelerator for ELB and EC2.",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 425546,
          "date": "Fri 05 Nov 2021 22:35",
          "username": "Finger41",
          "content": "C is the answer.<br><br>\\\"Why use Transfer Acceleration?<br>You might want to use Transfer Acceleration on a bucket for various reasons:<br>->Your customers upload to a centralized bucket from all over the world.<br>->You transfer gigabytes to terabytes of data on a regular basis across continents.<br>->You can't use all of your available bandwidth over the internet when uploading to Amazon S3.\\\"<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 618698,
          "date": "Sun 19 Jun 2022 14:57",
          "username": "221898",
          "content": "C - Transfer Accelerator is for S3. Global Accelerator for ELB and EC2.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591225,
          "date": "Sun 24 Apr 2022 22:22",
          "username": "fromnowhere",
          "content": "answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 561081,
          "date": "Fri 04 Mar 2022 23:38",
          "username": "roka_ua",
          "content": "C for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 560247,
          "date": "Thu 03 Mar 2022 18:08",
          "username": "Rick365",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 535616,
          "date": "Sat 29 Jan 2022 18:24",
          "username": "JackSurya",
          "content": "i would go with C. <br>key word is physically far..<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517305,
          "date": "Wed 05 Jan 2022 10:09",
          "username": "MrkJobs",
          "content": "C<br>focus word: upload, bucker far from<br>\\\"Your customers upload to a centralized bucket from all over the world\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 515710,
          "date": "Mon 03 Jan 2022 13:48",
          "username": "szl0144",
          "content": "vote C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508156,
          "date": "Thu 23 Dec 2021 22:50",
          "username": "doc_nta",
          "content": "c is ok",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 482215,
          "date": "Sat 20 Nov 2021 03:11",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 405265,
          "date": "Sat 30 Oct 2021 00:09",
          "username": "lartex",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370755,
          "date": "Thu 28 Oct 2021 18:09",
          "username": "RicardoD",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 356683,
          "date": "Wed 20 Oct 2021 10:16",
          "username": "FHU",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 347355,
          "date": "Tue 19 Oct 2021 07:12",
          "username": "sunilpanda",
          "content": "C<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 329089,
          "date": "Wed 06 Oct 2021 19:31",
          "username": "MukunthP",
          "content": "Answer is C. <br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that is experiencing performance problems many times each night. A root cause analysis reveals sudden increases in CPU utilization that last 5 minutes on an Amazon EC2 Linux instance. A SysOps administrator must find the process ID (PID) of the service or process that is consuming more CPU.<br>What should the SysOps administrator do to collect the process utilization information with the LEAST amount of effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. Configure the Amazon CloudWatch agent procstat plugin to capture CPU process metrics.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Lambda function to run every minute to capture the PID and send a notification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Log in to the EC2 instance by using a .pem key each night. Then run the top command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the default Amazon CloudWatch CPU utilization metric to capture the PID in CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 17 discussion",
      "discusstion": [
        {
          "id": 737492,
          "date": "Wed 07 Dec 2022 07:26",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721673,
          "date": "Sat 19 Nov 2022 01:25",
          "username": "Liongeek",
          "content": "ANS: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690696,
          "date": "Mon 10 Oct 2022 06:08",
          "username": "Surferbolt",
          "content": "A.  CloudWatch by default collects only aggregated CPU utilization, but can be configured with the Procstat plugin to collect more data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 670809,
          "date": "Fri 16 Sep 2022 14:30",
          "username": "get_certified",
          "content": "Procstat plugin allows to collect more data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655002,
          "date": "Wed 31 Aug 2022 12:47",
          "username": "moonwalkeryj",
          "content": "A<br>The procstat plugin enables you to collect metrics from individual processes. It is supported on Linux servers and on servers running Windows Server 2012 or later.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-procstat-process-metrics.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an online shopping portal in the AWS Cloud. The portal provides HTTPS security by using a TLS certificate on an Elastic Load Balancer (ELB).<br>Recently, the portal suffered an outage because the TLS certificate expired. A SysOps administrator must create a solution to automatically renew certificates to avoid this issue in the future.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A. Request a public certificate by using AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB.  Write a scheduled AWS Lambda function to renew the certificate every 18 months.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Request a public certificate by using AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB.  ACM will automatically manage the renewal of the certificate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Register a certificate with a third-party certificate authority (CA). Import this certificate into AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB.  ACM will automatically manage the renewal of the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Register a certificate with a third-party certificate authority (CA). Configure the ELB to import the certificate directly from the CA.  Set the certificate refresh cycle on the ELB to refresh when the certificate is within 3 months of the expiration date.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 18 discussion",
      "discusstion": [
        {
          "id": 639718,
          "date": "Sat 30 Jul 2022 16:49",
          "username": "Fatoch",
          "content": "this question was yesterday's exam.<br>which one is correct exactly B or C?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 614417,
          "date": "Fri 10 Jun 2022 10:24",
          "username": "221898",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 604762,
          "date": "Sat 21 May 2022 10:30",
          "username": "arietan",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594086,
          "date": "Fri 29 Apr 2022 00:14",
          "username": "Finger41",
          "content": "Answer is B - https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html<br><br>ACM can prompt you when to renew, but not renew 3rd party imported certificates.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 593174,
          "date": "Wed 27 Apr 2022 15:12",
          "username": "AWS21",
          "content": "The most correct answer is B. The benefits of AWS Certificate Manager (ACM) are there there is no cost for SSL/TLS certificates.Public and private certificates are provisioned for free. However, you'll have to pay for the AWS resources utilizing the certificates. You don't have to use certificate services directly from certificate providers (e.g., GlobalSign, Thawte=E2=80=A6). ACM will provide the certificates, automate and renew/update for free.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 591040,
          "date": "Sun 24 Apr 2022 14:32",
          "username": "Mecdrox",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 574861,
          "date": "Fri 25 Mar 2022 08:39",
          "username": "mmmmm12451",
          "content": "B is answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 546788,
          "date": "Mon 14 Feb 2022 00:12",
          "username": "roka_ua",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 519215,
          "date": "Fri 07 Jan 2022 22:54",
          "username": "lefty0",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 516334,
          "date": "Tue 04 Jan 2022 09:06",
          "username": "MrkJobs",
          "content": "B<br>With AWS Certificate Manager, you can quickly request a certificate, deploy it on AWS resources such as Elastic Load Balancers, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals.<br>https://aws.amazon.com/certificate-manager/faqs/?nc1h_ls",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515274,
          "date": "Mon 03 Jan 2022 00:21",
          "username": "szl0144",
          "content": "B IS correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 510598,
          "date": "Mon 27 Dec 2021 21:43",
          "username": "doc_nta",
          "content": "b is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 507514,
          "date": "Thu 23 Dec 2021 03:24",
          "username": "pakindessama",
          "content": "C seems correct but AWS doesn't manage the renewal process of third-party certificates",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 499014,
          "date": "Sat 11 Dec 2021 01:15",
          "username": "Vicious000",
          "content": "Imported certificates =E2=80=93 If you want to use a third-party certificate with Amazon CloudFront, Elastic Load Balancing, or Amazon API Gateway, you may import it into ACM using the AWS Management Console, AWS CLI, or ACM APIs. ACM does not manage the renewal process for imported certificates. You are responsible for monitoring the expiration date of your imported certificates and for renewing them before they expire. You can use the AWS Management Console to monitor the expiration dates of an imported certificates and import a new third-party certificate to replace an expiring one.<br><br>https://aws.amazon.com/certificate-manager/faqs/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 491888,
          "date": "Wed 01 Dec 2021 20:20",
          "username": "peterjohn",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 483902,
          "date": "Mon 22 Nov 2021 07:33",
          "username": "hhhhhhhhhhh",
          "content": "Vote B.  AWS ACM doesnt renew certificates comes from thrid party.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481610,
          "date": "Fri 19 Nov 2021 12:57",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator configured AWS Backup to capture snapshots from a single Amazon EC2 instance that has one Amazon Elastic Block Store (Amazon<br>EBS) volume attached. On the first snapshot, the EBS volume has 10 GiB of data. On the second snapshot, the EBS volume still contains 10 GiB of data, but 4<br>GiB have changed. On the third snapshot, 2 GiB of data have been added to the volume, for a total of 12 GiB. <br>How much total storage is required to store these snapshots?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A. 12 GiB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 16 GiB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 26 GiB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 32 GiB<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 18 discussion",
      "discusstion": [
        {
          "id": 654295,
          "date": "Tue 30 Aug 2022 20:02",
          "username": "haxaffee",
          "content": "100% B.  This scenario is explained at https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html#how_snapshots_work",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 737505,
          "date": "Wed 07 Dec 2022 07:43",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721674,
          "date": "Sat 19 Nov 2022 01:26",
          "username": "Liongeek",
          "content": "ANS: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703822,
          "date": "Tue 25 Oct 2022 13:52",
          "username": "Capy",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html#how_snapshots_work",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691362,
          "date": "Mon 10 Oct 2022 18:45",
          "username": "Surferbolt",
          "content": "D.  Incremental snapshots.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 670820,
          "date": "Fri 16 Sep 2022 14:33",
          "username": "get_certified",
          "content": "Due to incremental snapshots?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#19",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a VPC with public and private subnets. An Amazon EC2 based application resides in the private subnets and needs to process raw .csv files stored in an Amazon S3 bucket. A SysOps administrator has set up the correct IAM role with the required permissions for the application to access the S3 bucket, but the application is unable to communicate with the S3 bucket.<br>Which action will solve this problem while adhering to least privilege access?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>A. Add a bucket policy to the S3 bucket permitting access from the IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an S3 gateway endpoint to the VPC.  Configure the route table for the private subnet.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the route table to allow the instances on the private subnet access through the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a NAT Gateway in a private subnet and configure the route table for the private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 19 discussion",
      "discusstion": [
        {
          "id": 329092,
          "date": "Thu 23 Sep 2021 06:59",
          "username": "MukunthP",
          "content": "Answer is B",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 425564,
          "date": "Sun 31 Oct 2021 22:21",
          "username": "Finger41",
          "content": "Answer is B. <br><br>Technology to use is a VPC endpoint - \\\"A VPC endpoint enables private connections between your VPC and supported AWS services and VPC endpoint services powered by AWS PrivateLink. AWS PrivateLink is a technology that enables you to privately access services by using private IP addresses. Traffic between your VPC and the other service does not leave the Amazon network.\\\"<br><br>S3 is an example of a gateway endpoint. We want to see services in AWS while not leaving the VPC. ",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 617125,
          "date": "Thu 16 Jun 2022 08:27",
          "username": "221898",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591041,
          "date": "Sun 24 Apr 2022 14:34",
          "username": "Mecdrox",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 586650,
          "date": "Sat 16 Apr 2022 09:25",
          "username": "Mikilo",
          "content": "B is the correct Answer here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 482289,
          "date": "Sat 20 Nov 2021 07:27",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 370759,
          "date": "Sat 02 Oct 2021 22:31",
          "username": "RicardoD",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 367865,
          "date": "Wed 29 Sep 2021 06:08",
          "username": "lei00RicardoDlei00",
          "content": "Just wondering why not A?the question mentions that IAM is correctly set up.<br><br>Anyway, if your server is in the private subnet, it means it does not have direct access to internet.<br>Better solution is to get a endpoint for S3 and set the route in the RT, so the traffic between S3 and Ec2 flows through private link. In this case, internet access is not necessaryI see, thanks for your explanation.",
          "upvote_count": "282",
          "selected_answers": ""
        },
        {
          "id": 370763,
          "date": "Thu 07 Oct 2021 16:03",
          "username": "RicardoDlei00",
          "content": "the question mentions that IAM is correctly set up.<br><br>Anyway, if your server is in the private subnet, it means it does not have direct access to internet.<br>Better solution is to get a endpoint for S3 and set the route in the RT, so the traffic between S3 and Ec2 flows through private link. In this case, internet access is not necessaryI see, thanks for your explanation.",
          "upvote_count": "82",
          "selected_answers": ""
        },
        {
          "id": 376795,
          "date": "Tue 19 Oct 2021 11:32",
          "username": "lei00",
          "content": "I see, thanks for your explanation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 356689,
          "date": "Tue 28 Sep 2021 23:03",
          "username": "FHU",
          "content": "B is the correct answer, since we are talking about least privilege.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#19",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team is managing an AWS account that is a member of an organization in AWS Organizations. The organization has consolidated billing features enabled. The account hosts several applications.<br>A SysOps administrator has applied tags to resources within the account to reflect the environment. The team needs a report of the breakdown of charges by environment.<br>What should the SysOps administrator do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>A. Filter, map, and categorize resource groups in Tag Editor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure that the organization's service control policies (SCPs) allow access to cost allocation tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure that the IAM credentials that are used to access Cost Explorer have permissions to group cost by tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Activate the tag keys for cost allocation on the organization's management account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 19 discussion",
      "discusstion": [
        {
          "id": 655013,
          "date": "Wed 31 Aug 2022 12:56",
          "username": "moonwalkeryj",
          "content": "D<br>You must activate both types of tags separately before they can appear in Cost Explorer or on a cost allocation report.<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 737504,
          "date": "Wed 07 Dec 2022 07:43",
          "username": "michaldavid",
          "content": "dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 736979,
          "date": "Tue 06 Dec 2022 17:14",
          "username": "Daniel_Y",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733590,
          "date": "Fri 02 Dec 2022 10:03",
          "username": "pravinb",
          "content": "only D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721676,
          "date": "Sat 19 Nov 2022 01:27",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 691365,
          "date": "Mon 10 Oct 2022 18:49",
          "username": "Surferbolt",
          "content": "D.  You need to activate the tags. It's not A because the question already said that resources has been tagged.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 688555,
          "date": "Fri 07 Oct 2022 13:20",
          "username": "hippius",
          "content": "D is right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 670823,
          "date": "Fri 16 Sep 2022 14:34",
          "username": "get_certified",
          "content": "Using cost allocation tags",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 655293,
          "date": "Wed 31 Aug 2022 18:54",
          "username": "haxaffee",
          "content": "Agree with moonwalkeryj on D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AWS CloudFormation template to provision an Amazon EC2 instance and an Amazon RDS DB instance. A SysOps administrator must update the template to ensure that the DB instance is created before the EC2 instance is launched.<br>What should the SysOps administrator do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Add a wait condition to the template. Update the EC2 instance user data script to send a signal after the EC2 instance is started.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the DependsOn attribute to the EC2 instance resource, and provide the logical name of the RDS resource.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the order of the resources in the template so that the RDS resource is listed before the EC2 instance resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create multiple templates. Use AWS CloudFormation StackSets to wait for one stack to complete before the second stack is created.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 20 discussion",
      "discusstion": [
        {
          "id": 370855,
          "date": "Sun 03 Oct 2021 18:05",
          "username": "RicardoD",
          "content": "B is the answer<br><br>With the DependsOn attribute you can specify that the creation of a specific resource follows another. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 408751,
          "date": "Sat 06 Nov 2021 18:59",
          "username": "jkwek",
          "content": "Answer is B. <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html<br><br>Syntax<br>The DependsOn attribute can take a single string or list of strings.<br><br>\\\"DependsOn\\\" : [ String, ... ]<br>Example<br>The following template contains an AWS::EC2::Instance resource with a DependsOn attribute that specifies myDB, an AWS::RDS::DBInstance. When CloudFormation creates this stack, it first creates myDB, then creates Ec2Instance.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 737506,
          "date": "Wed 07 Dec 2022 07:44",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721409,
          "date": "Fri 18 Nov 2022 17:26",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691717,
          "date": "Tue 11 Oct 2022 06:23",
          "username": "Surferbolt",
          "content": "B.  DependsOn attribute.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 598797,
          "date": "Mon 09 May 2022 03:47",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561067,
          "date": "Fri 04 Mar 2022 23:23",
          "username": "roka_ua",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 516473,
          "date": "Tue 04 Jan 2022 11:33",
          "username": "MrkJobs",
          "content": "B is the answer:<br>\\\"With the DependsOn attribute you can specify that the creation of a specific resource follows another. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute.\\\"<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515680,
          "date": "Mon 03 Jan 2022 13:16",
          "username": "szl0144",
          "content": "vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481841,
          "date": "Fri 19 Nov 2021 16:06",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps Administrator is managing a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an<br>EC2 Auto Scaling group. The administrator wants to set an alarm for when all target instances associated with the ALB are unhealthy.<br>Which condition should be used with the alarm?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. AWS/ApplicationELB HealthyHostCount < 0<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS/ApplicationELB UnhealthyHostCount > 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS/EC2 StatusCheckFailed < 0<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS/EC2 StatusCheckFailed > 1<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 21 discussion",
      "discusstion": [
        {
          "id": 620522,
          "date": "Wed 22 Jun 2022 19:08",
          "username": "SebGoozian",
          "content": "Vote B<br>https://aws.amazon.com/blogs/networking-and-content-delivery/identifying-unhealthy-targets-of-elastic-load-balancer/B is triggered when even 1 instance got failed",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 630756,
          "date": "Wed 13 Jul 2022 05:09",
          "username": "Goozian",
          "content": "B is triggered when even 1 instance got failed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 586658,
          "date": "Sat 16 Apr 2022 09:39",
          "username": "Mikilo",
          "content": "A is the right answer here",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 517524,
          "date": "Wed 05 Jan 2022 15:30",
          "username": "MrkJobs",
          "content": "A<br>focus ALL<br>not B<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 482299,
          "date": "Sat 20 Nov 2021 07:47",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 425570,
          "date": "Fri 22 Oct 2021 01:55",
          "username": "Finger41MrkJobsBigbearcn",
          "content": "A and B can be used right?<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.htmlonly A. <br>No B, value of answer >1 question is ALLB means that at least one target instance is unhealthy.",
          "upvote_count": "123",
          "selected_answers": ""
        },
        {
          "id": 517523,
          "date": "Wed 05 Jan 2022 15:29",
          "username": "MrkJobs",
          "content": "only A. <br>No B, value of answer >1 question is ALL",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 433172,
          "date": "Sun 31 Oct 2021 03:43",
          "username": "Bigbearcn",
          "content": "B means that at least one target instance is unhealthy.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 370788,
          "date": "Tue 19 Oct 2021 11:29",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 357031,
          "date": "Sat 02 Oct 2021 22:16",
          "username": "FHU",
          "content": "Letter A is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340612,
          "date": "Wed 29 Sep 2021 16:35",
          "username": "Azaad78",
          "content": "I think A. ",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a static website on Amazon S3. The website is served by an Amazon CloudFront distribution with a default TTL of 86,400 seconds.<br>The company recently uploaded an updated version of the website to Amazon S3. However, users still see the old content when they refresh the site. A SysOps administrator must make the new version of the website visible to users as soon as possible.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. Adjust the TTL value for the DNS CNAME record that is pointing to the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an invalidation on the CloudFront distribution for the old S3 objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudFront distribution. Update the DNS records to point to the new CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the DNS record for the website to point to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 21 discussion",
      "discusstion": [
        {
          "id": 737509,
          "date": "Wed 07 Dec 2022 07:47",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721411,
          "date": "Fri 18 Nov 2022 17:27",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691720,
          "date": "Tue 11 Oct 2022 06:26",
          "username": "Surferbolt",
          "content": "B.  Invalidate old versions so newer visits will cache the latest version.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 670842,
          "date": "Fri 16 Sep 2022 14:47",
          "username": "get_certified",
          "content": "Invalidation is a to replicate the changes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 654302,
          "date": "Tue 30 Aug 2022 20:13",
          "username": "haxaffee",
          "content": "B is correct. Invalidations can be created for the entire bucket content or specific paths.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has created a VPC that contains a public subnet and a private subnet. Amazon EC2 instances that were launched in the private subnet cannot access the internet. The default network ACL is active on all subnets in the VPC, and all security groups allow all outbound traffic.<br>Which solution will provide the EC2 instances in the private subnet with access to the internet?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a NAT gateway in the public subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a NAT gateway in the private subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a NAT gateway in the private subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 22 discussion",
      "discusstion": [
        {
          "id": 651363,
          "date": "Wed 24 Aug 2022 18:40",
          "username": "Loserrandom",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 629733,
          "date": "Sun 10 Jul 2022 22:54",
          "username": "mohamedba",
          "content": "1000% for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 610904,
          "date": "Fri 03 Jun 2022 06:36",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.htmlLegit purpose of a NAT Gateway, needs to be deployed in a public subnet",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591044,
          "date": "Sun 24 Apr 2022 14:37",
          "username": "Mecdrox",
          "content": "Vote A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has created a VPC that contains a public subnet and a private subnet. Amazon EC2 instances that were launched in the private subnet cannot access the internet. The default network ACL is active on all subnets in the VPC, and all security groups allow all outbound traffic:<br>Which solution will provide the EC2 instances in the private subnet with access to the internet?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a NAT gateway in the public subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a NAT gateway in the private subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a NAT gateway in the private subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 22 discussion",
      "discusstion": [
        {
          "id": 561064,
          "date": "Fri 04 Mar 2022 23:19",
          "username": "roka_ua",
          "content": "Definitely A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 515677,
          "date": "Mon 03 Jan 2022 13:14",
          "username": "szl0144",
          "content": "vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 481690,
          "date": "Fri 19 Nov 2021 14:53",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 425571,
          "date": "Sat 06 Nov 2021 20:44",
          "username": "Finger41",
          "content": "Answer is A",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 422600,
          "date": "Tue 02 Nov 2021 19:04",
          "username": "Alex_shimo",
          "content": "A<br>he public subnet in Availability Zone A contains the NAT gateway. The private subnet in Availability Zone B contains instances. The router sends internet bound traffic from the instances in the private subnet to the NAT gateway. The NAT gateway sends the traffic to the internet gateway, using the elastic IP address for the NAT gateway as the source IP address.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 370791,
          "date": "Mon 25 Oct 2021 10:44",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 357035,
          "date": "Sat 23 Oct 2021 06:19",
          "username": "FHU",
          "content": "Letter A is correct. NAT Gateway resides in public subnet, and traffic should be routed from private subnet to NAT Gateway: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340613,
          "date": "Fri 08 Oct 2021 23:46",
          "username": "Azaad78",
          "content": "A - is correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is responsible for managing a company's cloud infrastructure with AWS CloudFormation. The SysOps administrator needs to create a single resource that consists of multiple AWS services. The resource must support creation and deletion through the CloudFormation console.<br>Which CloudFormation resource type should the SysOps administrator create to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. AWS::EC2::Instance with a cfn-init helper script<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS::OpsWorks::Instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS::SSM::Document<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Custom::MyCustomType<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 22 discussion",
      "discusstion": [
        {
          "id": 737510,
          "date": "Wed 07 Dec 2022 07:51",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656502,
          "date": "Thu 01 Sep 2022 19:29",
          "username": "princajen",
          "content": "Custom resources enable you to write custom provisioning logic in templates that AWS CloudFormation runs anytime you create, update (if you changed the custom resource), or delete stacks. For example, you might want to include resources that aren't available as AWS CloudFormation resource types. You can include those resources by using custom resources. That way you can still manage all your related resources in a single stack.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon Elastic File System (Amazon EFS) file system to share files across many Linux Amazon EC2 instances. A SysOps administrator notices that the file system's PercentIOLimit metric is consistently at 100% for 15 minutes or longer. The SysOps administrator also notices that the application that reads and writes to that file system is performing poorly. They application requires high throughput and IOPS while accessing the file system.<br>What should the SysOps administrator do to remediate the consistently high PercentIOLimit metric?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A. Create a new EFS file system that uses Max I/O performance mode. Use AWS DataSync to migrate data to the new EFS file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an EFS lifecycle policy to transition future files to the Infrequent Access (IA) storage class to improve performance. Use AWS DataSync to migrate existing data to IA storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing EFS file system and activate Max I/O performance mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the existing EFS file system and activate Provisioned Throughput mode.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 23 discussion",
      "discusstion": [
        {
          "id": 425757,
          "date": "Fri 05 Nov 2021 23:54",
          "username": "ZL23",
          "content": "A<br><br>To support a wide variety of cloud storage workloads, Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed.<br><br>If the PercentIOLimit percentage returned was at or near 100 percent for a significant amount of time during the test, your application should use the Max I/O performance mode.<br><br>https://docs.aws.amazon.com/efs/latest/ug/performance.html",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 555794,
          "date": "Fri 25 Feb 2022 06:41",
          "username": "az102",
          "content": "A. <br><br>Turn on Max I/O is the solution for reaching PercentIOLimit 100% issue ( https://docs.aws.amazon.com/efs/latest/ug/performance.html ).Only A or C can be correct.<br><br>C is wrong because \\\"You set the performance mode when you create a file system, and you can't change it after it is created.\\\" from https://docs.aws.amazon.com/efs/latest/ug/performance.html .",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595542,
          "date": "Sun 01 May 2022 12:06",
          "username": "everythingship",
          "content": "IT\\\"S AN A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594184,
          "date": "Fri 29 Apr 2022 04:46",
          "username": "Finger41everythingship",
          "content": "There is some confusion between A and C, the correct answer is A as per : https://docs.aws.amazon.com/efs/latest/ug/performance.html<br><br>\\\"You set the performance mode when you create a file system, and you can't change it after it is created.\\\"Exactely !",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595541,
          "date": "Sun 01 May 2022 12:06",
          "username": "everythingship",
          "content": "Exactely !",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 542001,
          "date": "Sun 06 Feb 2022 20:57",
          "username": "Nerdleo",
          "content": "Answer is A<br>\\\"To support a wide variety of cloud storage workloads, Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 530917,
          "date": "Mon 24 Jan 2022 00:54",
          "username": "fukuyama",
          "content": "Ans. A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 511687,
          "date": "Wed 29 Dec 2021 02:19",
          "username": "jon_2020",
          "content": "A is the correct answer.<br><br>Using the right performance mode<br>Our recommendation for determining which performance mode to use is as follows:<br><br>Create a new file system using the default General Purpose performance mode.<br><br>Run your application (or a use case similar to your application) for a period of time to test its performance.<br><br>Monitor the PercentIOLimit Amazon CloudWatch metric for Amazon EFS during the performance test. For more information about accessing this and other metrics, see Amazon CloudWatch Metrics.<br><br>If the PercentIOLimit percentage returned was at or near 100 percent for a significant amount of time during the test, your application should use the Max I/O performance mode. Otherwise, it should use the default General Purpose mode.<br><br>To move to a different performance mode, migrate the data to a different file system that was created in the other performance mode. You can use DataSync to transfer files between two EFS file systems. To learn more, see Transferring data into and out of Amazon EFS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 491911,
          "date": "Wed 01 Dec 2021 21:07",
          "username": "peterjohn",
          "content": "As the question only asked<br>\\\"What should the SysOps administrator do to correct the PercentIOLimit metric's persistently high value\\\", so the throughput is not asked. in this case, correct answer is A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 488920,
          "date": "Sun 28 Nov 2021 08:27",
          "username": "SRTSRT",
          "content": "I believe it should be A :<br><br>Reason : Performance mode cannot be changed for EFS, and the application is struggling with IO :<br>https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes<br><br>Throughput of EFS can be changed to Provisioned throughput. However, the question does not mentions if high throughput is required :<br>https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 481613,
          "date": "Fri 19 Nov 2021 12:58",
          "username": "nqthien041292randabnb",
          "content": "Vote CThis is wrong because you can't change a file systems mode, thus you have to create a new EFS",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 522278,
          "date": "Wed 12 Jan 2022 16:52",
          "username": "randabnb",
          "content": "This is wrong because you can't change a file systems mode, thus you have to create a new EFS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 425574,
          "date": "Mon 01 Nov 2021 12:37",
          "username": "Finger41",
          "content": "Answer is A<br><br>\\\"Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed......To move to a different performance mode, migrate the data to a different file system that was created in the other performance mode. You can use DataSync to transfer files between two EFS file systems.\\\"<br><br>https://docs.aws.amazon.com/efs/latest/ug/performance.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 411787,
          "date": "Sat 23 Oct 2021 06:16",
          "username": "LrdKaniennqthien041292",
          "content": "D is the answer because you can update your file system. https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.htmlVote for D.  Why should we create a new EFS when we can update it to Max I/O mode?",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 479873,
          "date": "Wed 17 Nov 2021 09:39",
          "username": "nqthien041292",
          "content": "Vote for D.  Why should we create a new EFS when we can update it to Max I/O mode?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370792,
          "date": "Thu 14 Oct 2021 14:58",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 357038,
          "date": "Fri 24 Sep 2021 17:48",
          "username": "FHU",
          "content": "Letter A is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340615,
          "date": "Fri 24 Sep 2021 06:01",
          "username": "Azaad78LrdKanienKimoHasNoBallsstarcub",
          "content": "A - you can't modify existing EFS to change modes. https://docs.aws.amazon.com/efs/latest/ug/performance.htmlhttps://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html - you sure?YES:<br>To support a wide variety of cloud storage workloads, Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed.You choose a file system's performance mode when you create it, and it cannot be changed. The link you posted is for updating ThroughputMode which is different.",
          "upvote_count": "3214",
          "selected_answers": ""
        },
        {
          "id": 411788,
          "date": "Sun 24 Oct 2021 18:19",
          "username": "LrdKanienKimoHasNoBallsstarcub",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html - you sure?YES:<br>To support a wide variety of cloud storage workloads, Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed.You choose a file system's performance mode when you create it, and it cannot be changed. The link you posted is for updating ThroughputMode which is different.",
          "upvote_count": "214",
          "selected_answers": ""
        },
        {
          "id": 521771,
          "date": "Tue 11 Jan 2022 22:23",
          "username": "KimoHasNoBalls",
          "content": "YES:<br>To support a wide variety of cloud storage workloads, Amazon EFS offers two performance modes, General Purpose mode and Max I/O mode. You choose a file system's performance mode when you create it, and it cannot be changed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 434264,
          "date": "Sun 07 Nov 2021 08:29",
          "username": "starcub",
          "content": "You choose a file system's performance mode when you create it, and it cannot be changed. The link you posted is for updating ThroughputMode which is different.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new website will run on Amazon EC2 instances behind an Application Load Balancer. Amazon Route 53 will be used to manage DNS records.<br>What type of record should be set in Route 53 to point the website's apex domain name (for example, `company.com`) to the Application Load Balancer?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A. CNAME<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. SOA<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. TXT<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ALIAS<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 23 discussion",
      "discusstion": [
        {
          "id": 737511,
          "date": "Wed 07 Dec 2022 07:51",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 736985,
          "date": "Tue 06 Dec 2022 17:17",
          "username": "Daniel_Y",
          "content": "Only D, when pointing to resource names the record is Alias",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721418,
          "date": "Fri 18 Nov 2022 17:38",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 691725,
          "date": "Tue 11 Oct 2022 06:31",
          "username": "Surferbolt",
          "content": "D.  SOA and TXT are definitely wrong. CNAME allows you to map names, but only for non zone apex addresses (ie m.example.com to mobile.example.com)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 683603,
          "date": "Fri 30 Sep 2022 15:42",
          "username": "neta1o",
          "content": "D, \\\"Route 53 supports the alias resource record set, which lets you map your zone apex (e.g. example.com) DNS name to your load balancer DNS name.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 681311,
          "date": "Wed 28 Sep 2022 02:12",
          "username": "azure4life",
          "content": "Definitely",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 677023,
          "date": "Fri 23 Sep 2022 12:56",
          "username": "Chhotu_DBA",
          "content": "The answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 675989,
          "date": "Thu 22 Sep 2022 12:39",
          "username": "ahmedtahalhosari",
          "content": "We can't use ALIAS with root domain \\\"apix\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655796,
          "date": "Thu 01 Sep 2022 06:34",
          "username": "hiishii",
          "content": "I am going with D",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data storage company provides a service that gives users the ability to upload and download files as needed. The files are stored in Amazon S3 Standard and must be immediately retrievable for 1 year. Users access files frequently during the first 30 days after the files are stored. Users rarely access files after 30 days.<br>The company's SysOps administrator must use S3 Lifecycle policies to implement a solution that maintains object availability and minimizes cost.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Move objects to S3 Glacier after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) immediately.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 24 discussion",
      "discusstion": [
        {
          "id": 628082,
          "date": "Wed 06 Jul 2022 20:48",
          "username": "mohamedba",
          "content": "Standard IA after 30 days.<br>It would be one zone IA if you did not an availibility constraint.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 623591,
          "date": "Tue 28 Jun 2022 04:13",
          "username": "Rick365",
          "content": "availability and cost",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 597576,
          "date": "Fri 06 May 2022 08:19",
          "username": "taehooontaehooon",
          "content": "to preserver availability, it needs to be standard IA not Single IAsingle --> one zone",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 597577,
          "date": "Fri 06 May 2022 08:20",
          "username": "taehooon",
          "content": "single --> one zone",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 597541,
          "date": "Fri 06 May 2022 06:09",
          "username": "Finger41",
          "content": "C - Preserves availability and cost effectivness.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data storage company provides a service that gives users the ability to upload and download files as needed. The files are stored in Amazon S3 Standard and must be immediately retrievable for 1 year. Users access files frequently during the first 30 days after the files are stored. Users rarely access files after 30 days.<br>The company's SysOps administrator must use S3 Lifecycle policies to implement a solution that maintains object availability and minimizes cost.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Move objects to S3 Glacier after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) immediately.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 24 discussion",
      "discusstion": [
        {
          "id": 561059,
          "date": "Fri 04 Mar 2022 23:06",
          "username": "roka_ua",
          "content": "Vote for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 516422,
          "date": "Tue 04 Jan 2022 10:50",
          "username": "MrkJobs",
          "content": "C<br>documentation: 30-days retation:<br>S3 Standard-IA - 99.9% availability<br>S3 One Zone-IA - 99.5% availability<br>https://aws.amazon.com/s3/storage-classes/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 484413,
          "date": "Mon 22 Nov 2021 18:33",
          "username": "hhhhhhhhhhh",
          "content": "Vote C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 481637,
          "date": "Fri 19 Nov 2021 13:35",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 475175,
          "date": "Wed 10 Nov 2021 03:20",
          "username": "henryyvrXeptac",
          "content": "A<br> the S3 Glacier and S3 Glacier Deep Archive class are designed for 99.99% availability and an SLA of 99.9%<br>Reference: https://aws.amazon.com/s3/faqs/Upvoted this before I re-read the question, C is the correct answer. The files must be instantly accessible within the first year.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 480224,
          "date": "Wed 17 Nov 2021 19:59",
          "username": "Xeptac",
          "content": "Upvoted this before I re-read the question, C is the correct answer. The files must be instantly accessible within the first year.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 425577,
          "date": "Mon 25 Oct 2021 22:38",
          "username": "Finger41",
          "content": "A - Satisfies availability, but doesn't make it immediately accessible. Need expedited retrievals.<br>B - Doesn't satisfy high availability, but does minimise cost after 30 days.<br>C - Guarantees availability and low cost after 30 days.<br>D - Files are heavily used for 30 days, no point.<br><br>https://aws.amazon.com/s3/storage-classes/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 370793,
          "date": "Sat 23 Oct 2021 19:47",
          "username": "RicardoD",
          "content": "C is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 357040,
          "date": "Fri 08 Oct 2021 19:13",
          "username": "FHU",
          "content": "Letter C is correct. The question asks for immediately availability for one year, which Glacier can not guarantee. The question also asks object availability, which one zone Infrequent Access can not guarantee.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 340616,
          "date": "Sun 03 Oct 2021 12:40",
          "username": "Azaad78",
          "content": "C - is correct. One Zone IA has risk that data can be lost.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing security and compliance by using AWS Trusted Advisor. The company's SysOps team is validating the list of Trusted Advisor checks that it can access.<br>Which factor will affect the quantity of available Trusted Advisor checks?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Whether at least one Amazon EC2 instance is in the running state<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The AWS Support plan<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. An AWS Organizations service control policy (SCP)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Whether the AWS account root user has multi-factor authentication (MFA) enabled<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 24 discussion",
      "discusstion": [
        {
          "id": 721420,
          "date": "Fri 18 Nov 2022 17:42",
          "username": "Liongeek",
          "content": "Ans: B<br>Ref.: https://aws.amazon.com/premiumsupport/faqs/?nc1h_ls<br>\\\"Q: Which Trusted Advisor checks and features are available to all AWS customers?<br><br>AWS Basic Support and AWS Developer Support customers get access to 6 security checks (S3 Bucket Permissions, Security Groups - Specific Ports Unrestricted, IAM Use, MFA on Root Account, EBS Public Snapshots, RDS Public Snapshots) and 50 service limit checks. AWS Business Support, AWS Enterprise On-Ramp, and AWS Enterprise Support customers get access to all 115 Trusted Advisor checks (14 cost optimization, 17 security, 24 fault tolerance, 10 performance, and 50 service limits) and recommendations.\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 720335,
          "date": "Thu 17 Nov 2022 09:48",
          "username": "Pontimau",
          "content": "For me, the answer it's D:<br>Whether the AWS account root user has multi-factor authentication (MFA) enabled",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 691727,
          "date": "Tue 11 Oct 2022 06:33",
          "username": "Surferbolt",
          "content": "B is the answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655298,
          "date": "Wed 31 Aug 2022 18:58",
          "username": "haxaffee",
          "content": "https://aws.amazon.com/premiumsupport/plans/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company using AWS Organizations requires that no Amazon S3 buckets in its production accounts should ever be deleted.<br>What is the SIMPLEST approach the SysOps administrator can take to ensure S3 buckets in those accounts can never be deleted?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Set up MFA Delete on all the S3 buckets to prevent the buckets from being deleted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use service control policies to deny the s3:DeleteBucket action on all buckets in production accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM group that has an IAM policy to deny the s3:DeleteBucket action on all buckets in production accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Shield to deny the s3:DeleteBucket action on the AWS account instead of all S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 25 discussion",
      "discusstion": [
        {
          "id": 425766,
          "date": "Sun 07 Nov 2021 15:17",
          "username": "ZL23",
          "content": "B<br><br>If you're using AWS Organizations, check the service control policies for any statements that explicitly deny Amazon S3 access. In particular, check the service control policies for statements denying the s3:PutBucketPolicy action.<br><br>https://aws.amazon.com/tw/premiumsupport/knowledge-center/s3-access-denied-bucket-policy/",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 631519,
          "date": "Thu 14 Jul 2022 21:48",
          "username": "Fatoch",
          "content": "Hi, guys anyone knows that in this exam ask hands on?<br>If ask what kind of questions? Any idea",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 618653,
          "date": "Sun 19 Jun 2022 13:18",
          "username": "221898",
          "content": "B - apply SCP at the AWS Organisations level.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 598799,
          "date": "Mon 09 May 2022 03:54",
          "username": "Finger41",
          "content": "B - apply SCP at the AWS Organisations level.<br>aws.amazon.com/tw/premiumsupport/knowledge-center/s3-access-denied-bucket-policy/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591048,
          "date": "Sun 24 Apr 2022 14:41",
          "username": "Mecdrox",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561068,
          "date": "Fri 04 Mar 2022 23:24",
          "username": "roka_ua",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 516488,
          "date": "Tue 04 Jan 2022 11:45",
          "username": "MrkJobs",
          "content": "answer is B<br>MFA works only un bucket with verisioning enabled ( no info in question )<br>https://aws.amazon.com/tw/premiumsupport/knowledge-center/s3-access-denied-bucket-policy/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515679,
          "date": "Mon 03 Jan 2022 13:16",
          "username": "szl0144",
          "content": "vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 500870,
          "date": "Mon 13 Dec 2021 21:10",
          "username": "MrMLB",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 494197,
          "date": "Sun 05 Dec 2021 10:46",
          "username": "ExamGuy4545",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 492874,
          "date": "Fri 03 Dec 2021 01:57",
          "username": "peterjohn",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 481866,
          "date": "Fri 19 Nov 2021 16:19",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 425578,
          "date": "Wed 03 Nov 2021 01:06",
          "username": "Finger41",
          "content": "B - apply SCP at the AWS Organisations level.<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 410900,
          "date": "Tue 02 Nov 2021 06:55",
          "username": "hou0220",
          "content": "I go for B. <br>\\\"You configure MFA delete on a bucket to help ensure that the data in your bucket cannot be accidentally deleted.\\\" -- https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html<br><br>MFA Delete not fit to this use case. More importantly, the requirement is \\\"S3 bucket can never be deleted\\\".",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 379772,
          "date": "Tue 05 Oct 2021 07:16",
          "username": "ahaffarProtoGodnutouch",
          "content": "Since the question mentioned the simplest option, I believe is should be A, since defining SCPs alone wont give you the required permissions, you still need to create IAM policies in those accounts<br>SCPs alone are not sufficient to granting permissions to the accounts in your organization. No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts.<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.htmlBut the question asks for \\\"prod\\\" .<br>The answer says \\\"all\\\"<br>I think B is betterA is to prevent accidentally deletion. the Question is how to prevent from deletion at all.SCP is the answer.",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 381667,
          "date": "Fri 22 Oct 2021 15:27",
          "username": "ProtoGod",
          "content": "But the question asks for \\\"prod\\\" .<br>The answer says \\\"all\\\"<br>I think B is better",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 511203,
          "date": "Tue 28 Dec 2021 15:43",
          "username": "nutouch",
          "content": "A is to prevent accidentally deletion. the Question is how to prevent from deletion at all.SCP is the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370796,
          "date": "Wed 29 Sep 2021 05:17",
          "username": "RicardoD",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 357043,
          "date": "Mon 27 Sep 2021 02:58",
          "username": "FHU",
          "content": "Letter B is correct. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is investigating issues on an Amazon RDS for MariaDB DB instance. The SysOps administrator wants to display the database load categorized by detailed wait events.<br>How can the SysOps administrator accomplish this goal?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon RDS Performance Insights.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable and configure Enhanced Monitoring.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review the database logs in Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 25 discussion",
      "discusstion": [
        {
          "id": 606507,
          "date": "Tue 24 May 2022 08:06",
          "username": "CodePoet",
          "content": "Performance Insight is the right answer https://aws.amazon.com/rds/performance-insights/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 737519,
          "date": "Wed 07 Dec 2022 08:12",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721425,
          "date": "Fri 18 Nov 2022 17:47",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716917,
          "date": "Sat 12 Nov 2022 21:25",
          "username": "Atown",
          "content": "B is the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606460,
          "date": "Tue 24 May 2022 05:15",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Overview.ActiveSessions.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Route 53 to manage the public DNS records for the domain example.com. The company deploys an Amazon CloudFront distribution to deliver static assets for a new corporate website. The company wants to create a subdomain that is named \"static\" and must route traffic for the subdomain to the<br>CloudFront distribution.<br>How should a SysOps administrator create a new record for the subdomain in Route 53?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Create a CNAME record. Enter static.cloudfront.net as the record name. Enter the CloudFront distribution's public IP address as the value.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CNAME record. Enter static.example.com as the record name. Enter the CloudFront distribution's private IP address as the value.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an A record. Enter static.cloudfront.net as the record name. Enter the CloudFront distribution's ID as an alias target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an A record. Enter static.example.com as the record name. Enter the CloudFront distribution's domain name as an alias target.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 26 discussion",
      "discusstion": [
        {
          "id": 437409,
          "date": "Sat 06 Nov 2021 20:37",
          "username": "nick3332Agr321",
          "content": "Definetely D.  <br>Best way is to create an A record in Route 53 as follows:<br>In AWS go to Route 53. <br>Create a Hosted Zone by entering a fake apex, such as fakedomainblah.com<br>Select the Hosted Zone just created and click Add Record<br>Select A record.<br>You got two options: Entering an IP address or Enabling the Alias button.<br>(So your target can be an IP address or an Alias record)<br>Therefore, option D is correct!Agree on \\\"D\\\"<br>Choose Alias if you want to route traffic to selected AWS resources, such as CloudFront distributions and Amazon S3 buckets, or if you want to route traffic from one record in a hosted zone to another record.",
          "upvote_count": "163",
          "selected_answers": ""
        },
        {
          "id": 474878,
          "date": "Tue 09 Nov 2021 16:22",
          "username": "Agr321",
          "content": "Agree on \\\"D\\\"<br>Choose Alias if you want to route traffic to selected AWS resources, such as CloudFront distributions and Amazon S3 buckets, or if you want to route traffic from one record in a hosted zone to another record.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 637646,
          "date": "Wed 27 Jul 2022 00:11",
          "username": "promartyr",
          "content": "Correct answer is: \\\"Create an A record. Enter static.example.com as the record name. Enter the CloudFront distribution's domain name as an alias target.\\\"<br><br>Relevant documentation is here: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html<br><br>Read it until the bottom where it says about creating the A Record",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 605859,
          "date": "Mon 23 May 2022 08:29",
          "username": "Mikilo",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 593521,
          "date": "Thu 28 Apr 2022 06:30",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 546783,
          "date": "Mon 14 Feb 2022 00:06",
          "username": "roka_ua",
          "content": "Alias is better than CNAME.  Vote for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 483894,
          "date": "Mon 22 Nov 2021 07:24",
          "username": "hhhhhhhhhhh",
          "content": "agree on D<br>CNAME use in hostname, while alias is for AWS service",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 481606,
          "date": "Fri 19 Nov 2021 12:56",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 433190,
          "date": "Thu 28 Oct 2021 21:45",
          "username": "BigbearcnCHRIS12722222",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html#AFormat<br>Im for Option B<br>A record type is IP address, So Can't be D. It should be CNAME record type.It is D,",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 547065,
          "date": "Mon 14 Feb 2022 11:45",
          "username": "CHRIS12722222",
          "content": "It is D,",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 425579,
          "date": "Tue 19 Oct 2021 21:12",
          "username": "Finger41",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 357051,
          "date": "Tue 05 Oct 2021 18:07",
          "username": "FHU",
          "content": "D is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 354122,
          "date": "Sat 02 Oct 2021 20:19",
          "username": "James136432453",
          "content": "Drey's link is the correct reference, but it clearly states the record type should be an A-record, should route to \\\"Alias to CloudFront distributions\\\" and point to the CloudFront Distribution domain name of your distribution. The Answer is clearly D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 349878,
          "date": "Fri 24 Sep 2021 12:39",
          "username": "DreyDrey",
          "content": "this should be B. <br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.htmlSorry D",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 363182,
          "date": "Mon 18 Oct 2021 03:36",
          "username": "Drey",
          "content": "Sorry D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to host an application on a set of Amazon EC2 instances that are distributed across multiple Availability Zones. The application must be able to scale to millions of requests each second.<br>A SysOps administrator must design a solution to distribute the traffic to the EC2 instances. The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Amazon Simple Queue Service (Amazon SQS) queue<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Application Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Global Accelerator<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Network Load Balancer<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 26 discussion",
      "discusstion": [
        {
          "id": 738638,
          "date": "Thu 08 Dec 2022 06:18",
          "username": "michaldavid",
          "content": "dddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 736987,
          "date": "Tue 06 Dec 2022 17:19",
          "username": "Daniel_Y",
          "content": "must be able to scale to millions of requests each second - the NLB can scale that much",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707662,
          "date": "Sun 30 Oct 2022 08:07",
          "username": "psdas",
          "content": "D, as it mentions static IP address.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 691800,
          "date": "Tue 11 Oct 2022 08:06",
          "username": "Surferbolt",
          "content": "D.  Network Load balancer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 667953,
          "date": "Tue 13 Sep 2022 13:42",
          "username": "Zulola",
          "content": "D. .Network load Balancer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 617078,
          "date": "Thu 16 Jun 2022 06:22",
          "username": "221898",
          "content": "D.  Network Load Balancer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 608846,
          "date": "Sun 29 May 2022 18:35",
          "username": "SebRick365",
          "content": "Associate the static IP addresses provided by AWS Global Accelerator to regional AWS resources or endpoints, such as Network Load Balancers, Application Load Balancers, EC2 Instances, and Elastic IP addresses. The IP addresses are anycast from AWS edge locations so they provide onboarding to the AWS global network close to your users.<br>Easily move endpoints between Availability Zones or AWS Regions without needing to update your DNS configuration or change client-facing applications.<br>Dial traffic up or down for a specific AWS Region by configuring a traffic dial percentage for your endpoint groups. This is especially useful for testing performance and releasing updates.<br>Control the proportion of traffic directed to each endpoint within an endpoint group by assigning weights across the endpoints.<br>https://aws.amazon.com/global-accelerator/faqs/it's D",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659519,
          "date": "Sun 04 Sep 2022 22:31",
          "username": "Rick365",
          "content": "it's D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 606957,
          "date": "Wed 25 May 2022 02:23",
          "username": "altonh",
          "content": "Answer is D.  It cannot be C because you only get 2 anycast IPs for the global accelerator.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 606450,
          "date": "Tue 24 May 2022 05:03",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html<br><br>Perfectly describes a network load balancer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 606449,
          "date": "Tue 24 May 2022 05:03",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html<br><br>Perfectly describes a network load balancer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 595556,
          "date": "Sun 01 May 2022 12:29",
          "username": "psou7",
          "content": "Definitely D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 594273,
          "date": "Fri 29 Apr 2022 08:54",
          "username": "tn93",
          "content": "it's D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 594125,
          "date": "Fri 29 Apr 2022 02:36",
          "username": "doggiecai",
          "content": "It's D. <br>\\\"Network Load Balancer is optimized to handle sudden and volatile traffic patterns while using a single static IP address per Availability Zone.\\\"<br>https://aws.amazon.com/elasticloadbalancing/network-load-balancer/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591261,
          "date": "Mon 25 Apr 2022 00:28",
          "username": "Mecdroxgr3y_matter",
          "content": "I vote C for the Static IP requirement. \\\" The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone.\\\"<br>https://aws.amazon.com/global-accelerator/faqs/ search for static IP.whenever there is a term like 'Single/ Static IP' always think of Load Balancers first.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681814,
          "date": "Wed 28 Sep 2022 16:51",
          "username": "gr3y_matter",
          "content": "whenever there is a term like 'Single/ Static IP' always think of Load Balancers first.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 590978,
          "date": "Sun 24 Apr 2022 12:10",
          "username": "lotfi50",
          "content": "I think it's D",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to be alerted through email when IAM CreateUser API calls are made within its AWS account.<br>Which combination of actions should a SysOps administrator take to meet this requirement? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with AWS CloudTrail as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with Amazon CloudSearch as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with AWS IAM Access Analyzer as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Simple Notification Service (Amazon SNS) topic as an event target with an email subscription.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use an Amazon Simple Email Service (Amazon SES) notification as an event target with an email subscription.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 27 discussion",
      "discusstion": [
        {
          "id": 482208,
          "date": "Sat 20 Nov 2021 03:04",
          "username": "nqthien041292",
          "content": "Vote AD",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 425581,
          "date": "Sat 30 Oct 2021 00:03",
          "username": "Finger41",
          "content": "A and D are the correct answers.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 673367,
          "date": "Mon 19 Sep 2022 16:08",
          "username": "hanguyen89",
          "content": "AD em oi !!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 567868,
          "date": "Mon 14 Mar 2022 20:02",
          "username": "ablazleon",
          "content": "D seems to be correct in comparison to E.  At first, I didn't see any difference between A and C.  Then, I found on the web that cloud trail as the event source was the only way EventBridge can \\\"accept IAM CreateUser as the specific API call for the event pattern\\\" (https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-CloudTrail-Rule.html, https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-eventbridge.html).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561077,
          "date": "Fri 04 Mar 2022 23:34",
          "username": "roka_ua",
          "content": "AD for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 531295,
          "date": "Mon 24 Jan 2022 13:35",
          "username": "VTHORMikeyJ",
          "content": "Why not A E?\\\"Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application. You can configure Amazon SES quickly to support several email use cases, including transactional, marketing, or mass email communications.\\\"<br><br>We're looking for a notification, that's all, so SNS is the answer.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 608356,
          "date": "Sat 28 May 2022 12:28",
          "username": "MikeyJ",
          "content": "\\\"Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application. You can configure Amazon SES quickly to support several email use cases, including transactional, marketing, or mass email communications.\\\"<br><br>We're looking for a notification, that's all, so SNS is the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517288,
          "date": "Wed 05 Jan 2022 09:56",
          "username": "MrkJobs",
          "content": "A-D<br>\\\"CloudTrail then assumes the IAM role you created (see #3 above), which allows CloudTrail to publish events to your CloudWatch logs. CloudWatch allows you to run a filter on these events and generate a CloudWatch metric on any matches. It's up to you to define when these metrics trigger an alarm, but when enough events occur in a specified time period, you will receive an alert either via an SNS topic or email.\\\"<br>https://aws.amazon.com/it/blogs/security/how-to-receive-alerts-when-your-iam-configuration-changes/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 515698,
          "date": "Mon 03 Jan 2022 13:32",
          "username": "szl0144",
          "content": "vote AD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 510955,
          "date": "Tue 28 Dec 2021 10:37",
          "username": "doc_nta",
          "content": "AD are the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 370805,
          "date": "Fri 29 Oct 2021 03:18",
          "username": "RicardoD",
          "content": "A | D are the answers",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 357057,
          "date": "Wed 13 Oct 2021 09:01",
          "username": "FHU",
          "content": "Letters A and D are correct. Letter E should not be used in this case. You use SES when you want to send campaign emails to clients, it resides in the category of transactional emails service. For simple monitoring alarms, you should use SNS.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 341118,
          "date": "Sun 10 Oct 2021 11:39",
          "username": "James136432453",
          "content": "There is not an AWS document or blog post saying you can use cloudsearch to monitor calls to the IAM API. This blog post says CloudTrail is the tool for that. A and D are the answers. https://aws.amazon.com/blogs/security/how-to-receive-alerts-when-your-iam-configuration-changes/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 340649,
          "date": "Tue 05 Oct 2021 03:15",
          "username": "LuizMarques",
          "content": "Answer is AD.  Cloudtrail is a service that monitors API calls to AWS resources and SNS is the notification service.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 332789,
          "date": "Mon 20 Sep 2021 20:26",
          "username": "SalisLuizMarques",
          "content": "Answer is B and DCloudSearch is a solution to create a searching engine for your application, like a google search.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 340651,
          "date": "Wed 06 Oct 2021 22:26",
          "username": "LuizMarques",
          "content": "CloudSearch is a solution to create a searching engine for your application, like a google search.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is using AWS CloudFormation StackSets to create AWS resources in two AWS Regions in the same AWS account. A stack operation fails in one Region and returns the stack instance status of OUTDATED. <br>What is the cause of this failure?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. The CloudFormation template changed on the local disk and has not been submitted to CloudFormation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The CloudFormation template is trying to create a global resource that is not unique.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The stack has not yet been deployed to the Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The SysOps administrator is using an old version of the CloudFormation API.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 27 discussion",
      "discusstion": [
        {
          "id": 659521,
          "date": "Sun 04 Sep 2022 22:37",
          "username": "Rick365",
          "content": "agree with haxaffee,<br>Common reasons for stack operation failure<br>Problem: A stack operation failed, and the stack instance status is OUTDATED. <br>Cause: There can be several common causes for stack operation failure.<br>The template could be trying to create global resources that must be unique but aren't, such as S3 buckets.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655308,
          "date": "Wed 31 Aug 2022 19:10",
          "username": "haxaffee",
          "content": "B as this is listed in https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-troubleshooting.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The company configured an Amazon CloudFront distribution and set the ALB as the origin. The company created an Amazon Route 53 CNAME record to send all traffic through the CloudFront distribution. As an unintended side effect, mobile users are now being served the desktop version of the website.<br>Which action should a SysOps administrator take to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A. Configure the CloudFront distribution behavior to forward the User-Agent header.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the CloudFront distribution origin settings. Add a User-Agent header to the list of origin custom headers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable IPv6 on the ALB.  Update the CloudFront distribution origin settings to use the dualstack endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable IPv6 on the CloudFront distribution. Update the Route 53 record to use the dualstack endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 28 discussion",
      "discusstion": [
        {
          "id": 329104,
          "date": "Mon 20 Sep 2021 06:35",
          "username": "MukunthP",
          "content": "Answer is B",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 408444,
          "date": "Wed 06 Oct 2021 02:53",
          "username": "jkwek",
          "content": "Answer is B. <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html<br>If you look at section \\\"Configuring caching based on the device type\\\" , there are a list of devices:<br>If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to forward the applicable headers to your custom origin:<br>CloudFront-Is-Desktop-Viewer<br>CloudFront-Is-Mobile-Viewer<br>CloudFront-Is-SmartTV-Viewer<br>CloudFront-Is-Tablet-Viewer<br>Based on the value of the User-Agent header, CloudFront sets the value of these headers to true or false before forwarding the request to your origin.",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 655142,
          "date": "Wed 31 Aug 2022 15:49",
          "username": "andrerkn",
          "content": "So... why the correct answer is C?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 646728,
          "date": "Sun 14 Aug 2022 14:15",
          "username": "haianhkevin2010",
          "content": "Answer is B. <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html<br>If you look at section \\\"Configuring caching based on the device type\\\" , there are a list of devices:<br>If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to forward the applicable headers to your custom origin:<br>CloudFront-Is-Desktop-Viewer<br>CloudFront-Is-Mobile-Viewer<br>CloudFront-Is-SmartTV-Viewer<br>CloudFront-Is-Tablet-Viewer<br>Based on the value of the User-Agent header, CloudFront sets the value of these headers to true or false before forwarding the request to your origin.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 578412,
          "date": "Wed 30 Mar 2022 18:34",
          "username": "hammering",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 567010,
          "date": "Sun 13 Mar 2022 17:04",
          "username": "crazydev",
          "content": "Answer should be A. <br>Many seems to have gone for B, but its wrong.<br>CloudFront adds this (user-agent) header regardless of whether the request from the viewer includes a User-Agent header. If the request from the viewer includes a User-Agent header, CloudFront removes it.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-user-agent-header",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 558273,
          "date": "Mon 28 Feb 2022 20:27",
          "username": "GatorGrad929",
          "content": "You can add the following headers to determine the viewer's device type. Based on the value of the User-Agent header, CloudFront sets the value of these headers to true or false.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 557977,
          "date": "Mon 28 Feb 2022 11:08",
          "username": "CHRIS12722222",
          "content": "Guys, create a cloudfront distribution and try to configure this yourself, You will discover the answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 556495,
          "date": "Sat 26 Feb 2022 04:32",
          "username": "az102",
          "content": "B. <br><br>A - can also achieve it but the origin need to further detect device type base on user-agent value.It is tedious and error-prone logic.Lucky that there are some libraries for it: http://uadetector.sourceforge.net/ .B.  It should be more optimal to let CloudFront to do the device-type detection based on user-agent value.It is a use case mentioned in developer guide: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 542862,
          "date": "Tue 08 Feb 2022 05:48",
          "username": "duychienvt",
          "content": "I think the answer is A instead of B.  We just need to forward the header, we don't/ need to add on the header.<br>\\\"<br>If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to FOWARD the applicable headers to your custom origin:<br>\\\"<br>Ref:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 542860,
          "date": "Tue 08 Feb 2022 05:47",
          "username": "duychienvt",
          "content": "I think the answer is A instead of A.  We just need to forward the header, we don't/ need to add on the header.<br>\\\"<br>If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to FOWARD the applicable headers to your custom origin:<br>\\\"<br>Ref:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 536651,
          "date": "Mon 31 Jan 2022 05:05",
          "username": "meggie",
          "content": "hitelist the User-Agent header in our distributions behavior over on our AWS console (or AWS CLI)<br><br>CloudFront Distributions > xxxxx > Behaviors > Edit > Whitelist Headers > Enter a custom header \\\"User-Agent\\\" > Add Custom > Yes, Edit",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 516432,
          "date": "Tue 04 Jan 2022 10:58",
          "username": "MrkJobs",
          "content": "Answer B:<br>\\\"If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to forward the applicable headers<br>CloudFront-Is-Desktop-Viewer<br>CloudFront-Is-Mobile-Viewer \\\"<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 511103,
          "date": "Tue 28 Dec 2021 13:47",
          "username": "yfwang",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 509789,
          "date": "Sun 26 Dec 2021 21:01",
          "username": "nutouch",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html<br>Configuring caching based on the device type<br>If you want CloudFront to cache different versions of your objects based on the device a user is using to view your content, configure CloudFront to forward the applicable headers to your custom origin:<br><br>CloudFront-Is-Desktop-Viewer<br><br>CloudFront-Is-Mobile-Viewer<br><br>CloudFront-Is-SmartTV-Viewer<br><br>CloudFront-Is-Tablet-Viewer<br><br>Based on the value of the User-Agent header, CloudFront sets the value of these headers to true or false before forwarding the request to your origin. If a device falls into more than one category, more than one value might be true. For example, for some tablet devices, CloudFront might set both CloudFront-Is-Mobile-Viewer and CloudFront-Is-Tablet-Viewer to true.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 508146,
          "date": "Thu 23 Dec 2021 22:30",
          "username": "doc_nta",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-user-agent-header",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 500853,
          "date": "Mon 13 Dec 2021 20:37",
          "username": "MrMLB",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator must configure Amazon S3 to host a simple nonproduction webpage. The SysOps administrator has created an empty S3 bucket from the<br>AWS Management Console. The S3 bucket has the default configuration in place.<br>Which combination of actions should the SysOps administrator take to complete this process? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A. Configure the S3 bucket by using the \"Redirect requests for an object\" functionality to point to the bucket root URL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn off the \"Block all public access\" setting. Allow public access by using a bucket ACL that contains <Permission>WEBSITE</Permission>.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn off the \"Block all public access\" setting. Allow public access by using a bucket ACL that allows access to the AuthenticatedUsers grantee.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn off the \"Block all public access\" setting. Set a bucket policy that allows \"Principal\": the s3:GetObject action.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an index.html document. Configure static website hosting, and upload the index document to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 28 discussion",
      "discusstion": [
        {
          "id": 656509,
          "date": "Thu 01 Sep 2022 19:41",
          "username": "princajen",
          "content": "Step 1: Create a bucket<br>Step 2: Enable static website hosting<br>Step 3: Edit Block Public Access settings<br>Step 4: Add a bucket policy that makes your bucket content publicly available<br>Step 5: Configure an index document<br>Step 6: Configure an error document<br>Step 7: Test your website endpoint<br>Step 8: Clean up<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 753333,
          "date": "Thu 22 Dec 2022 14:45",
          "username": "MrMLB",
          "content": "D & E. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 721439,
          "date": "Fri 18 Nov 2022 17:57",
          "username": "Liongeek",
          "content": "Ans: D&E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A SysOps administrator needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. Create an Aurora Replica. Promote the replica to replace the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use backtracking to rewind the existing DB cluster to the desired recovery point.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use point-in-time recovery to restore the existing DB cluster to the desired recovery point.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 29 discussion",
      "discusstion": [
        {
          "id": 744590,
          "date": "Wed 14 Dec 2022 01:37",
          "username": "MrMLB",
          "content": "C for the win",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 617043,
          "date": "Thu 16 Jun 2022 04:19",
          "username": "221898",
          "content": "C - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 606453,
          "date": "Tue 24 May 2022 05:08",
          "username": "Finger41",
          "content": "C - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 604603,
          "date": "Fri 20 May 2022 20:57",
          "username": "vjtvjt",
          "content": "it is D.  it is PITR and not backtracking. also Restored DB clusters are automatically associated with the default DB cluster and DB parameter groups. <br>Please clarify why C is suggested by people here?it is C.  PITR will create a new DB cluster. however i am still confused with below aws info.<br><br>\\\"You can restore a DB cluster to a specific point in time, creating a new DB cluster.<br><br>When you restore a DB cluster to a point in time, you can choose the default virtual private cloud (VPC) security group. Or you can apply a custom VPC security group to your DB cluster.<br><br>Restored DB clusters are automatically associated with the default DB cluster and DB parameter groups.\\\"",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 604608,
          "date": "Fri 20 May 2022 21:04",
          "username": "vjt",
          "content": "it is C.  PITR will create a new DB cluster. however i am still confused with below aws info.<br><br>\\\"You can restore a DB cluster to a specific point in time, creating a new DB cluster.<br><br>When you restore a DB cluster to a point in time, you can choose the default virtual private cloud (VPC) security group. Or you can apply a custom VPC security group to your DB cluster.<br><br>Restored DB clusters are automatically associated with the default DB cluster and DB parameter groups.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 591366,
          "date": "Mon 25 Apr 2022 05:51",
          "username": "Shriraj32",
          "content": "I think C is the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 591019,
          "date": "Sun 24 Apr 2022 14:13",
          "username": "Mecdrox",
          "content": "C.  within 72 hours, backtracking is enabled. Must not restore to a new DB.  C is the only solution that meets all requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 589821,
          "date": "Fri 22 Apr 2022 10:19",
          "username": "dontcomplain",
          "content": "Please update answer should be C",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its website on Amazon EC2 instances behind an Application Load Balancer. The company manages its DNS with Amazon Route 53, and wants to point its domain's zone apex to the website.<br>Which type of record should be used to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. An AAAA record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An A record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A CNAME record for the domain's zone apex<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An alias record for the domain's zone apex<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 29 discussion",
      "discusstion": [
        {
          "id": 653306,
          "date": "Mon 29 Aug 2022 07:59",
          "username": "Gorille69",
          "content": "D : You can't have a CNAME for a APEX Zone.https://www.isc.org/blogs/cname-at-the-apex-of-a-zone/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 606448,
          "date": "Tue 24 May 2022 05:01",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/setting-up-route53-zoneapex-elb.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 591282,
          "date": "Mon 25 Apr 2022 01:08",
          "username": "Mecdrox",
          "content": "I vote D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is maintaining a web application using an Amazon CloudFront web distribution, an Application Load Balancer (ALB), Amazon RDS, and<br>Amazon EC2 in a VPC.  All services have logging enabled. The administrator needs to investigate HTTP Layer 7 status codes from the web application.<br>Which log sources contain the status codes? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. VPC Flow Logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS CloudTrail logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ALB access logs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. CloudFront access logs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. RDS logs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 30 discussion",
      "discusstion": [
        {
          "id": 344225,
          "date": "Sun 31 Oct 2021 15:40",
          "username": "binhdt2611",
          "content": "Definitely C and D<br><br>\\\"C\\\" because Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br><br>\\\"D\\\" because \\\"you can configure CloudFront to create log files that contain detailed information about every user request that CloudFront receives\\\"<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 606456,
          "date": "Tue 24 May 2022 05:12",
          "username": "Finger41",
          "content": "C & D are the answers<br>C:https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br>D:https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 524933,
          "date": "Sun 16 Jan 2022 13:13",
          "username": "KimoHasNoBalls",
          "content": "sorry, C and D are right, i missed the \\\"codes returned by the web application.\\\" Part.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 524929,
          "date": "Sun 16 Jan 2022 13:11",
          "username": "KimoHasNoBalls",
          "content": "How does one get RDS logs with C and D, aren't the VPC flow logs needed for that ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482312,
          "date": "Sat 20 Nov 2021 08:06",
          "username": "nqthien041292",
          "content": "Vote CD",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 370812,
          "date": "Sat 06 Nov 2021 10:22",
          "username": "RicardoD",
          "content": "C | D are the answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 341511,
          "date": "Tue 28 Sep 2021 12:47",
          "username": "Azaad78",
          "content": "C,D - are correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user working in the Amazon EC2 console increased the size of an Amazon Elastic Block Store (Amazon EBS) volume attached to an Amazon EC2 Windows instance. The change is not reflected in the file system.<br>What should a SysOps administrator do to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. Extend the file system with operating system-level tools to use the new storage capacity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reattach the EBS volume to the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Reboot the EC2 instance that is attached to the EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take a snapshot of the EBS volume. Replace the original volume with a volume that is created from the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 30 discussion",
      "discusstion": [
        {
          "id": 656511,
          "date": "Thu 01 Sep 2022 19:46",
          "username": "princajen",
          "content": "After you increase the size of an EBS volume, use the Windows Disk Management utility or PowerShell to extend the disk size to the new size of the volume. You can begin resizing the file system as soon as the volume enters the optimizing state.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/recognize-expanded-volume-windows.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 670901,
          "date": "Fri 16 Sep 2022 16:12",
          "username": "get_certified",
          "content": "Extend the volume from Window Disk Manager tool",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is deploying a test site running on Amazon EC2 instances. The application requires both incoming and outgoing connectivity to the internet.<br>Which combination of steps are required to provide internet connectivity to the EC2 instances? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Add a NAT gateway to a public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach a private address to the elastic network interface on the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach an Elastic IP address to the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an entry to the route table for the subnet that points to an internet gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an internet gateway and attach it to a VPC. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 31 discussion",
      "discusstion": [
        {
          "id": 628075,
          "date": "Wed 06 Jul 2022 20:37",
          "username": "mohamedbabroadwink",
          "content": "This question is again ambitious. You can have 2 use cases:<br>1. EC2 in public subnet. Here you just to configure SG if you use the default VPC, an IGW is created by default and route table is also configured to redirect all traffic outside the VPC to the IGW.<br>2. EC2 in private subnet. Here, you need a NAT Gateway and add a rule in the route table.<br>NOTHING PRECISED WITH THIS QUESTION<br>I would vote for DESo, the question address Inbound and Outbound traffic, gotta be a IGW,<br>NAT Gateway perform an operation called egress-only, which means, Data from Instances to Internet is possible, but Internet to Instances is impossible.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 629256,
          "date": "Sat 09 Jul 2022 17:46",
          "username": "broadwink",
          "content": "So, the question address Inbound and Outbound traffic, gotta be a IGW,<br>NAT Gateway perform an operation called egress-only, which means, Data from Instances to Internet is possible, but Internet to Instances is impossible.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595807,
          "date": "Mon 02 May 2022 03:37",
          "username": "Finger41",
          "content": "D & E are correct : https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html<br><br>A - You need in and out, still requires an internet gateway<br>B - That wont get you internet connection<br>C - You just need to create and attach an internet gateway to a VPC, so this wont do anything.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 595551,
          "date": "Sun 01 May 2022 12:18",
          "username": "everythingship",
          "content": "I think it's safer when the web server locates in private subnets. But it isn't mandatory.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561024,
          "date": "Fri 04 Mar 2022 21:19",
          "username": "roka_ua",
          "content": "DE is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 518925,
          "date": "Fri 07 Jan 2022 12:41",
          "username": "AMohanty",
          "content": "A, D, E are correct in their own ways of interpretation<br>It doesn't say if the EC2 instances are in Private subnet so no requirement for NAT GW<br>Will go for D and E",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 515345,
          "date": "Mon 03 Jan 2022 02:51",
          "username": "szl0144",
          "content": "d e is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 515248,
          "date": "Sun 02 Jan 2022 23:04",
          "username": "srthsrthMrkJobs",
          "content": "why not A?you don't need a public subnet.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 516399,
          "date": "Tue 04 Jan 2022 10:24",
          "username": "MrkJobs",
          "content": "you don't need a public subnet.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 491924,
          "date": "Wed 01 Dec 2021 21:28",
          "username": "peterjohn",
          "content": "D and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481616,
          "date": "Fri 19 Nov 2021 12:59",
          "username": "nqthien041292",
          "content": "Vote DE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 475973,
          "date": "Thu 11 Nov 2021 04:59",
          "username": "pkb0129",
          "content": "D and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370815,
          "date": "Sat 06 Nov 2021 06:19",
          "username": "RicardoD",
          "content": "D | E are the answers",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 357485,
          "date": "Fri 05 Nov 2021 15:10",
          "username": "FHU",
          "content": "D and E are correct. https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 341512,
          "date": "Wed 13 Oct 2021 01:45",
          "username": "Azaad78",
          "content": "D,E - are correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is using Amazon EC2 instances to host an application. The SysOps administrator needs to grant permissions for the application to access an Amazon DynamoDB table.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Create access keys to access the DynamoDB table. Assign the access keys to the EC2 instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an EC2 key pair to access the DynamoDB table. Assign the key pair to the EC2 instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user to access the DynamoDB table. Assign the IAM user to the EC2 instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role to access the DynamoDB table. Assign the IAM role to the EC2 instance profile.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 31 discussion",
      "discusstion": [
        {
          "id": 738648,
          "date": "Thu 08 Dec 2022 06:34",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721484,
          "date": "Fri 18 Nov 2022 19:17",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691843,
          "date": "Tue 11 Oct 2022 08:53",
          "username": "Surferbolt",
          "content": "D.  From a security standpoint, always try to prioritize using roles over users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656515,
          "date": "Thu 01 Sep 2022 19:50",
          "username": "princajen",
          "content": "Access to Amazon DynamoDB requires credentials. Those credentials must have permissions to access AWS resources, such as an Amazon DynamoDB table or an Amazon Elastic Compute Cloud (Amazon EC2) instance. The following sections provide details on how you can use AWS Identity and Access Management (IAM) and DynamoDB to help secure access to your resources.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/authentication-and-access-control.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is running multiple applications for their customers. Each application is deployed by running a base AWS CloudFormation template that configures a new VPC.  All applications are run in the same AWS account and AWS Region. A SysOps administrator has noticed that when trying to deploy the same AWS<br>CloudFormation stack, it fails to deploy.<br>What is likely to be the problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. The Amazon Machine image used is not available in that region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The AWS CloudFormation template needs to be updated to the latest version.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The VPC configuration parameters have changed and must be updated in the template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The account has reached the default limit for VPCs allowed.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 32 discussion",
      "discusstion": [
        {
          "id": 628077,
          "date": "Wed 06 Jul 2022 20:41",
          "username": "mohamedba",
          "content": "Max VPC allowed per region is 5.<br>Answer is D. <br>But you can extend this limit by contacting aws support",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 595814,
          "date": "Mon 02 May 2022 03:54",
          "username": "Finger41yeanlingmedal71",
          "content": "D - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-limit-exceeded +https://docs.aws.amazon.com/general/latest/gr/vpc-service.html<br><br>Adjustable, but you are allowed 5 VPCs per region, question never mentioned deploying a VPC in a new region, thus deploying in the same region can impact service quotas.+1<br>agreed",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 649965,
          "date": "Mon 22 Aug 2022 01:24",
          "username": "yeanlingmedal71",
          "content": "+1<br>agreed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591064,
          "date": "Sun 24 Apr 2022 14:58",
          "username": "Mecdroxeverythingship",
          "content": "Vote DI agress.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 595555,
          "date": "Sun 01 May 2022 12:26",
          "username": "everythingship",
          "content": "I agress.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is running multiple applications for their customers. Each application is deployed by running a base AWS CloudFormation template that configures a new VPC.  All applications are run in the same AWS account and AWS Region. A SysOps administrator has noticed that when trying to deploy the same AWS<br>CloudFormation stack, it fails to deploy.<br>What is likely to be the problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. The Amazon Machine image used is not available in that region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The AWS CloudFormation template needs to be updated to the latest version.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The VPC configuration parameters have changed and must be updated in the template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The account has reached the default limit for VPCs allowed.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 32 discussion",
      "discusstion": [
        {
          "id": 357486,
          "date": "Fri 01 Oct 2021 16:07",
          "username": "FHU",
          "content": "D is correct, because AWS has a default quota limit of 5 vpcs per region.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 557449,
          "date": "Sun 27 Feb 2022 17:41",
          "username": "longb1",
          "content": "this is so fkin stupid, it will tell us why it fails to deploy anyways why is this a question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 555804,
          "date": "Fri 25 Feb 2022 06:58",
          "username": "az102",
          "content": "D.  https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 481618,
          "date": "Fri 19 Nov 2021 13:00",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 370816,
          "date": "Sat 16 Oct 2021 22:41",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 341514,
          "date": "Fri 01 Oct 2021 08:31",
          "username": "Azaad78",
          "content": "D - is correct",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator wants to protect objects in an Amazon S3 bucket from accidental overwrite and deletion. Noncurrent objects must be kept for 90 days and then must be permanently deleted. Objects must reside within the same AWS Region as the original S3 bucket.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Data Lifecycle Manager (Amazon DLM) lifecycle policy for the S3 bucket. Add a rule to the lifecycle policy to delete noncurrent objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Backup policy for the S3 bucket. Create a backup rule that includes a lifecycle to expire noncurrent objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 Cross-Region Replication on the S3 bucket. Create an S3 Lifecycle policy for the bucket to expire noncurrent objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Versioning on the S3 bucket. Create an S3 Lifecycle policy for the bucket to expire noncurrent objects after 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 32 discussion",
      "discusstion": [
        {
          "id": 738647,
          "date": "Thu 08 Dec 2022 06:34",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695800,
          "date": "Sun 16 Oct 2022 02:06",
          "username": "Anthony053",
          "content": "Enabling Versioning on the S3 bucket will protect accidental overwritten and deletion of data.<br>Versioning is same as 'Soft-delete' in an Azure!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657903,
          "date": "Sat 03 Sep 2022 01:25",
          "username": "kati2k22cz",
          "content": "yes it's D. <br>https://cloudacademy.com/blog/s3-lifecycle-policies-versioning-encryption-aws-security/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is using AWS Organizations to manage its multi-account AWS environment. According to company policy, all users should have read-level access to a particular Amazon S3 bucket in a central account. The S3 bucket data should not be available outside the organization. A SysOps administrator must set up the permissions and add a bucket policy to the S3 bucket.<br>Which parameters should be specified to accomplish this in the MOST efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Specify \"*\" as the principal and PrincipalOrgId as a condition.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Specify all account numbers as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Specify PrincipalOrgId as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Specify the organization's master account as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 33 discussion",
      "discusstion": [
        {
          "id": 648482,
          "date": "Thu 18 Aug 2022 16:37",
          "username": "yeanlingmedal71",
          "content": "You can use a new condition key, aws:PrincipalOrgID, in these policies to require all principals accessing the resource to be from an account (including the master account) in the organization.<br>For example, let's say you have an Amazon S3 bucket policy and you want to restrict access to only principals from AWS accounts inside of your organization. To accomplish this, you can define the aws:PrincipalOrgID condition and set the value to your organization ID in the bucket policy. Your organization ID is what sets the access control on the S3 bucket",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 613616,
          "date": "Thu 09 Jun 2022 06:21",
          "username": "LHLLFC",
          "content": "https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 594081,
          "date": "Fri 29 Apr 2022 00:01",
          "username": "Finger41",
          "content": "A - https://aws.amazon.com/blogs/security/iam-share-aws-resources-groups-aws-accounts-aws-organizations/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591065,
          "date": "Sun 24 Apr 2022 14:59",
          "username": "Mecdrox",
          "content": "A is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is using AWS Organizations to manage its multi-account AWS environment. According to company policy, all users should have read-level access to a particular Amazon S3 bucket in a central account. The S3 bucket data should not be available outside the organization. A SysOps administrator must set up the permissions and add a bucket policy to the S3 bucket.<br>Which parameters should be specified to accomplish this in the MOST efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Specify \"*\" as the principal and PrincipalOrgId as a condition.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Specify all account numbers as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Specify PrincipalOrgId as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Specify the organization's master account as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 33 discussion",
      "discusstion": [
        {
          "id": 341520,
          "date": "Mon 04 Oct 2021 05:58",
          "username": "Azaad78",
          "content": "A - is good : https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 525121,
          "date": "Sun 16 Jan 2022 18:48",
          "username": "KimoHasNoBalls",
          "content": "you can define the aws:PrincipalOrgID condition and set the value to your organization ID in the bucket policy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 519214,
          "date": "Fri 07 Jan 2022 22:44",
          "username": "lefty0",
          "content": "vote a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 483897,
          "date": "Mon 22 Nov 2021 07:27",
          "username": "hhhhhhhhhhh",
          "content": "A is good",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481607,
          "date": "Fri 19 Nov 2021 12:57",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 448565,
          "date": "Thu 14 Oct 2021 09:08",
          "username": "styroCharlesleeee",
          "content": "what is\\\"*\\\" ???Specify a (*) wildcard as the principal and set PrincipalOrgId as a condition.",
          "upvote_count": "33",
          "selected_answers": ""
        },
        {
          "id": 458056,
          "date": "Wed 20 Oct 2021 14:12",
          "username": "Charlesleeee",
          "content": "Specify a (*) wildcard as the principal and set PrincipalOrgId as a condition.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 370819,
          "date": "Wed 06 Oct 2021 06:34",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that customers use to search for records on a website. The application's data is stored in an Amazon Aurora DB cluster. The application's usage varies by season and by day of the week.<br>The website's popularity is increasing, and the website is experiencing slower performance because of increased load on the DB cluster during periods of peak activity. The application logs show that the performance issues occur when users are searching for information. The same search is rarely performed multiple times.<br>A SysOps administrator must improve the performance of the platform by using a solution that maximizes resource efficiency.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon ElastiCache for Redis cluster in front of the DB cluster. Modify the application to check the cache before the application issues new queries to the database. Add the results of any queries to the cache.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Aurora Replica for the DB cluster. Modify the application to use the reader endpoint for search operations. Use Aurora Auto Scaling to scale the number of replicas based on load.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Provisioned IOPS on the storage volumes that support the DB cluster to improve performance sufficiently to support the peak load on the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the instance size in the DB cluster to a size that is sufficient to support the peak load on the application. Use Aurora Auto Scaling to scale the instance size based on load.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 33 discussion",
      "discusstion": [
        {
          "id": 738646,
          "date": "Thu 08 Dec 2022 06:34",
          "username": "michaldavid",
          "content": "bbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721489,
          "date": "Fri 18 Nov 2022 19:23",
          "username": "Liongeek",
          "content": "Ans: B<br>Same search is rarely performed so Elasticache isn't needed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691856,
          "date": "Tue 11 Oct 2022 09:16",
          "username": "Surferbolt",
          "content": "B.  Caching will not solve the performance issue in this scenario, as the same search is rarely performed multiple times. Thus read replicas will be better.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 670905,
          "date": "Fri 16 Sep 2022 16:17",
          "username": "get_certified",
          "content": "Read replicas will solve the problem.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659562,
          "date": "Sun 04 Sep 2022 23:43",
          "username": "princajen",
          "content": "I'm voting B!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659538,
          "date": "Sun 04 Sep 2022 22:52",
          "username": "Rick365",
          "content": "The same search is rarely performed multiple times. Read Replicas will solve this issue",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658410,
          "date": "Sat 03 Sep 2022 14:04",
          "username": "moonwalkeryj",
          "content": "B<br>It cannot be A, Because of this: The same search is rarely performed multiple times",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 658236,
          "date": "Sat 03 Sep 2022 10:35",
          "username": "CiCa560",
          "content": "A - The question specifically talks about performance issues - ElasticCache will resolve the performance issue.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 657906,
          "date": "Sat 03 Sep 2022 01:32",
          "username": "kati2k22cz",
          "content": "B.  Here the AWS document<br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon S3 Inventory report reveals that more than 1 million objects in an S3 bucket are not encrypted. These objects must be encrypted, and all future objects must be encrypted at the time they are written.<br>Which combination of actions should a SysOps administrator take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule that runs evaluations against configuration changes to the S3 bucket. When an unencrypted object is found, run an AWS Systems Manager Automation document to encrypt the object in place.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Edit the properties of the S3 bucket to enable default server-side encryption.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Filter the S3 Inventory report by using S3 Select to find all objects that are not encrypted. Create an S3 Batch Operations job to copy each object in place with encryption enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Filter the S3 Inventory report by using S3 Select to find all objects that are not encrypted. Send each object name as a message to an Amazon Simple Queue Service (Amazon SQS) queue. Use the SQS queue to invoke an AWS Lambda function to tag each object with a key of \"Encryption\" and a value of \"SSE- KMS\".<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use S3 Event Notifications to invoke an AWS Lambda function on all new object-created events for the S3 bucket. Configure the Lambda function to check whether the object is encrypted and to run an AWS Systems Manager Automation document to encrypt the object in place when an unencrypted object is found.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 34 discussion",
      "discusstion": [
        {
          "id": 341129,
          "date": "Mon 25 Oct 2021 05:06",
          "username": "James136432453friendofpenguinCHRIS12722222",
          "content": "Batch operations can be used to encrypt unencrypted existing objects. Answers are B and C.  https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/correct answer is AB use SSM according to this blog post https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/This post talks bout remediating the bucket itself using AWS managed config rules, not encrypting unencrypted object in the bucket. You need to enable server-side encryption on the bucket first then u copy all the unencrypted objects in place to the same bucket to encrypt the objects",
          "upvote_count": "2524",
          "selected_answers": ""
        },
        {
          "id": 516736,
          "date": "Tue 04 Jan 2022 15:50",
          "username": "friendofpenguinCHRIS12722222",
          "content": "correct answer is AB use SSM according to this blog post https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/This post talks bout remediating the bucket itself using AWS managed config rules, not encrypting unencrypted object in the bucket. You need to enable server-side encryption on the bucket first then u copy all the unencrypted objects in place to the same bucket to encrypt the objects",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 547787,
          "date": "Tue 15 Feb 2022 14:30",
          "username": "CHRIS12722222",
          "content": "This post talks bout remediating the bucket itself using AWS managed config rules, not encrypting unencrypted object in the bucket. You need to enable server-side encryption on the bucket first then u copy all the unencrypted objects in place to the same bucket to encrypt the objects",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 517258,
          "date": "Wed 05 Jan 2022 09:11",
          "username": "MrkJobs",
          "content": "B-C<br>focus word: \\\"over 1 million items\\\" - \\\"new object\\\"<br>B -> https://aws.amazon.com/it/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/<br>C -> https://aws.amazon.com/it/premiumsupport/knowledge-center/s3-aws-kms-default-encryption/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 625145,
          "date": "Thu 30 Jun 2022 11:07",
          "username": "ceeee",
          "content": "b and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 618657,
          "date": "Sun 19 Jun 2022 13:39",
          "username": "221898",
          "content": "https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 612959,
          "date": "Wed 08 Jun 2022 00:58",
          "username": "AWS_SJ",
          "content": "Answer will be B and C<br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 598822,
          "date": "Mon 09 May 2022 05:36",
          "username": "Finger41",
          "content": "Automation rule via SSM + Server Side Encryption on S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 596513,
          "date": "Wed 04 May 2022 06:40",
          "username": "AvidSquid",
          "content": "B and C, https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561074,
          "date": "Fri 04 Mar 2022 23:29",
          "username": "roka_ua",
          "content": "BC is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 535613,
          "date": "Sat 29 Jan 2022 18:17",
          "username": "JackSurya",
          "content": "B and C are correct.<br>batch operation can be used to encrypt unencrypted existing objects",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 518459,
          "date": "Thu 06 Jan 2022 19:14",
          "username": "lefty0",
          "content": "B | C are correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 497923,
          "date": "Thu 09 Dec 2021 18:14",
          "username": "henryyvr",
          "content": "Vote A & B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 484558,
          "date": "Mon 22 Nov 2021 22:08",
          "username": "hhhhhhhhhhh",
          "content": "Vote B and C<br>B , service policy could set default encryption<br>C, batch operations could modify object metadata and properties",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 482204,
          "date": "Sat 20 Nov 2021 02:56",
          "username": "nqthien041292",
          "content": "Vote AB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 478808,
          "date": "Mon 15 Nov 2021 17:18",
          "username": "rodolfo2020",
          "content": "A Y E obviously",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 475908,
          "date": "Thu 11 Nov 2021 02:23",
          "username": "henryyvr",
          "content": "A& B<br>https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-server-side-encryption-enabled.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts. Corporate policy mandates that only specific AWS Regions can be used to store and process customer data. A SysOps administrator must prevent the provisioning of Amazon EC2 instances in unauthorized Regions by anyone in the company.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Configure AWS CloudTrail in all Regions to record all API activity. Create an Amazon EventBridge (Amazon CloudWatch Events) rule in all unauthorized Regions for ec2:RunInstances events. Use AWS Lambda to terminate the launched EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In each AWS account, create a managed IAM policy that uses a Region condition to deny the ec2:RunInstances action in all unauthorized Regions. Attach this policy to all IAM groups in each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each AWS account, create an IAM permissions boundary policy that uses a Region condition to deny the ec2:RunInstances action in all unauthorized Regions. Attach the permissions boundary policy to all IAM users in each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a service control policy (SCP) in AWS Organizations to deny the ec2:RunInstances action in all unauthorized Regions. Attach this policy to the root level of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 34 discussion",
      "discusstion": [
        {
          "id": 655321,
          "date": "Wed 31 Aug 2022 19:30",
          "username": "haxaffee",
          "content": "Def D here. If this question has something like \\\"Use Control Tower and setup the landing zone with provisioned regions\\\" that would take be correct but there is no Control Tower option on this one.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 738651,
          "date": "Thu 08 Dec 2022 06:36",
          "username": "michaldavid",
          "content": "dddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721491,
          "date": "Fri 18 Nov 2022 19:24",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company must ensure that any objects uploaded to an S3 bucket are encrypted.<br>Which of the following actions will meet this requirement? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Implement AWS Shield to protect against unencrypted objects stored in S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement Object access control list (ACL) to deny unencrypted objects from being uploaded to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement Amazon S3 default encryption to make sure that any object being uploaded is encrypted before it is stored.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement Amazon Inspector to inspect objects uploaded to the S3 bucket to make sure that they are encrypted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Implement S3 bucket policies to deny unencrypted objects from being uploaded to the buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 35 discussion",
      "discusstion": [
        {
          "id": 408678,
          "date": "Fri 05 Nov 2021 04:59",
          "username": "jkwek",
          "content": "Answers are C and E. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>You can set the default encryption behavior on an Amazon S3 bucket so that all objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS Key Management Service (AWS KMS) customer master keys (CMKs).<br>https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/<br>How to Prevent Uploads of Unencrypted Objects to Amazon S3#<br>By using an S3 bucket policy, you can enforce the encryption requirement when users upload objects, instead of assigning a restrictive IAM policy to all users.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 561078,
          "date": "Fri 04 Mar 2022 23:34",
          "username": "roka_ua",
          "content": "CE for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 517298,
          "date": "Wed 05 Jan 2022 10:03",
          "username": "MrkJobs",
          "content": "C-E<br>\\\"Amazon S3 default encryption<br>Follow these steps to configure your bucket policy to deny upload requests\\\"<br>https://aws.amazon.com/it/premiumsupport/knowledge-center/s3-bucket-store-kms-encrypted-objects/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 515706,
          "date": "Mon 03 Jan 2022 13:40",
          "username": "szl0144",
          "content": "vote CE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 493341,
          "date": "Fri 03 Dec 2021 21:01",
          "username": "peterjohn",
          "content": "Vote CE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482210,
          "date": "Sat 20 Nov 2021 03:06",
          "username": "nqthien041292",
          "content": "Vote CE",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 392011,
          "date": "Wed 20 Oct 2021 00:20",
          "username": "Faraz5457",
          "content": "C-E for sure",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 377054,
          "date": "Thu 07 Oct 2021 13:39",
          "username": "dark4igijuraj666ProtoGod",
          "content": "As i understand, we talk about already uploaded objects - thats why D and Cin the question is \\\"prior to uploading\\\" so must be before it's already there\\\"already\\\" is not mentioned in the question.<br>However, with the Inspector you can see IF is or not encripted.",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 515896,
          "date": "Mon 03 Jan 2022 17:01",
          "username": "juraj666",
          "content": "in the question is \\\"prior to uploading\\\" so must be before it's already there",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 382735,
          "date": "Mon 18 Oct 2021 11:05",
          "username": "ProtoGod",
          "content": "\\\"already\\\" is not mentioned in the question.<br>However, with the Inspector you can see IF is or not encripted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 370822,
          "date": "Sun 03 Oct 2021 21:22",
          "username": "RicardoD",
          "content": "C | E are the answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 341524,
          "date": "Sat 25 Sep 2021 12:11",
          "username": "Azaad78",
          "content": "C, E - are ok.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's public website is hosted in an Amazon S3 bucket in the us-east-1 Region behind an Amazon CloudFront distribution. The company wants to ensure that the website is protected from DDoS attacks. A SysOps administrator needs to deploy a solution that gives the company the ability to maintain control over the rate limit at which DDoS protections are applied.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Deploy a global-scoped AWS WAF web ACL with an allow default action. Configure an AWS WAF rate-based rule to block matching traffic. Associate the web ACL with the CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS WAF web ACL with an allow default action in us-east-1. Configure an AWS WAF rate-based rule to block matching traffic. Associate the web ACL with the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a global-scoped AWS WAF web ACL with a block default action. Configure an AWS WAF rate-based rule to allow matching traffic. Associate the web ACL with the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS WAF web ACL with a block default action in us-east-1. Configure an AWS WAF rate-based rule to allow matching traffic. Associate the web ACL with the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 35 discussion",
      "discusstion": [
        {
          "id": 738653,
          "date": "Thu 08 Dec 2022 06:40",
          "username": "michaldavid",
          "content": "I think A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 699322,
          "date": "Wed 19 Oct 2022 21:55",
          "username": "VanfoxVanfox",
          "content": "Why global scoped? Answer should be B. After reviewing I see it is A due to Cloudfront Distribution.",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 700799,
          "date": "Fri 21 Oct 2022 13:31",
          "username": "Vanfox",
          "content": "After reviewing I see it is A due to Cloudfront Distribution.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 657908,
          "date": "Sat 03 Sep 2022 01:35",
          "username": "kati2k22cz",
          "content": "yes, A is the answer<br>https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-default-action.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator developed a Python script that uses the AWS SDK to conduct several maintenance tasks. The script needs to run automatically every night.<br>What is the MOST operationally efficient solution that meets this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A. Convert the Python script to an AWS Lambda function. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the function every night.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the Python script to an AWS Lambda function. Use AWS CloudTrail to invoke the function every night.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the Python script to an Amazon EC2 instance. Use Amazon EventBride (Amazon CloudWatch Events) to schedule the instance to start and stop every night.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the Python script to an Amazon EC2 instance. Use AWS Systems Manager to schedule the instance to start and stop every night.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 36 discussion",
      "discusstion": [
        {
          "id": 738656,
          "date": "Thu 08 Dec 2022 06:43",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721496,
          "date": "Fri 18 Nov 2022 19:28",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691941,
          "date": "Tue 11 Oct 2022 11:11",
          "username": "Surferbolt",
          "content": "A.  Lambda is good enough.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 670909,
          "date": "Fri 16 Sep 2022 16:21",
          "username": "get_certified",
          "content": "Here a lambda function will be the most efficient solution.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658249,
          "date": "Sat 03 Sep 2022 10:46",
          "username": "CiCa560",
          "content": "Question asks for 'the MOST operationally efficient solution'<br><br>Deploying a Python script to an EC2 instance for execution would not be efficient",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator must create a solution that immediately notifies software developers if an AWS Lambda function experiences an error.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Notification Service (Amazon SNS) topic with an email subscription for each developer. Create an Amazon CloudWatch alarm by using the Errors metric and the Lambda function name as a dimension. Configure the alarm to send a notification to the SNS topic when the alarm state reaches ALARM.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Notification Service (Amazon SNS) topic with a mobile subscription for each developer. Create an Amazon EventBridge (Amazon CloudWatch Events) alarm by using the LambdaError as the event pattern and the SNS topic name as a resource. Configure the alarm to send a notification to the SNS topic when the alarm state reaches ALARM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify each developer email address in Amazon Simple Email Service (Amazon SES). Create an Amazon CloudWatch rule by using the LambdaError metric and developer email addresses as dimensions. Configure the rule to send an email through Amazon SES when the rule state reaches ALARM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Verify each developer mobile phone in Amazon Simple Email Service (Amazon SES). Create an Amazon EventBridge (Amazon CloudWatch Events) rule by using Error as the event pattern and the Lambda function name as a resource. Configure the rule to send a push notification through Amazon SES when the rule state reaches ALARM.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 37 discussion",
      "discusstion": [
        {
          "id": 589983,
          "date": "Fri 22 Apr 2022 14:38",
          "username": "ovilla",
          "content": "It's A",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 738657,
          "date": "Thu 08 Dec 2022 06:45",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721497,
          "date": "Fri 18 Nov 2022 19:29",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 644536,
          "date": "Tue 09 Aug 2022 15:38",
          "username": "by116549",
          "content": "Not C or D as SES is used for marketing emails.<br><br>Leaves us with A or B. <br><br>With B AWS config, Cloudtrail or Cloudwatch can be the source no a SNS topic.<br><br>A seems the best reasonable solution",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 606414,
          "date": "Tue 24 May 2022 04:07",
          "username": "Finger41",
          "content": "A - https://aws.amazon.com/blogs/mt/get-notified-specific-lambda-function-error-patterns-using-cloudwatch/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595528,
          "date": "Sun 01 May 2022 11:35",
          "username": "psou7",
          "content": "A is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web application on an Amazon EC2 instance in a production VPC.  Client connections to the application are failing. A SysOps administrator inspects the VPC flow logs and finds the following entry:<br>2 111122223333 eni-&lt;###&gt; 192.0.2.15 203.0.113.56 40711 443 6 1 40 1418530010 1418530070 REJECT OK<br>What is a possible cause of these failed connections?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. A security group is denying traffic on port 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The EC2 instance is shut down.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The network ACL is blocking HTTPS traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The VPC has no internet gateway attached.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 38 discussion",
      "discusstion": [
        {
          "id": 450201,
          "date": "Sat 30 Oct 2021 13:41",
          "username": "AndrewwfwDreski",
          "content": "Answer is : Letter \\\"C\\\" NOT Letter \\\"A\\\"<br>1. SG DO NOT DENY !!<br>2. SG is Stateful, If the inbound HTTPS traffic is allowed then outbound HTTPS traffic would be allowed as well.<br><br>3. From the Src Private IP & the Dst Public IP (This mean Outbound direction for the traffic).<br><br>In this case the inbound was allowed but the outbound was rejected, Only ACL (Stateless) show this behavior asthere's an outbound rule that Deny HTTPs traffic.Public IP Range: 192.0.0.0 to 223.255.255.0<br>Private IP Range: 192.168.0.0 to 192.168.255.255",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 610401,
          "date": "Thu 02 Jun 2022 03:13",
          "username": "Dreski",
          "content": "Public IP Range: 192.0.0.0 to 223.255.255.0<br>Private IP Range: 192.168.0.0 to 192.168.255.255",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 494031,
          "date": "Sun 05 Dec 2021 02:00",
          "username": "peterjohn",
          "content": "Answer is C. <br>please see the section \\\"Accepted and rejected traffic\\\" example in below page<br>https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-accepted-rejected",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 643239,
          "date": "Sat 06 Aug 2022 09:46",
          "username": "J040788",
          "content": "If your network ACL permits outbound ICMP traffic, the flow log displays two ACCEPT records (one for the originating ping and one for the response ping). If your security group denies inbound ICMP traffic, the flow log displays a single REJECT record, because the traffic was not permitted to reach your instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 626055,
          "date": "Sat 02 Jul 2022 11:06",
          "username": "DuniX33",
          "content": "\\\"If your network ACL permits outbound ICMP traffic, the flow log displays two ACCEPT records (one for the originating ping and one for the response ping). If your security group denies inbound ICMP traffic, the flow log displays a single REJECT record, because the traffic was not permitted to reach your instance.\\\" ... and the log is showing a single REJECT",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 616328,
          "date": "Tue 14 Jun 2022 19:29",
          "username": "gdbc",
          "content": "Answer is A IMO, NACL's work at the subnet layer, the log specifically mentions the interface: eni-*, SG's work at the instance and interface level.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 605769,
          "date": "Mon 23 May 2022 03:46",
          "username": "eratic1",
          "content": "I believe the answer is A<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-security-groups<br><br>If we look at the question at hand, it clearly states that the client connections are having trouble connecting to the application. Thus it is clear that this is an inbound rule issue since the clients cannot reach the application.<br><br>Due to the single reject record, this would be considered a security group inbound rule thats blocking traffic.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 599380,
          "date": "Tue 10 May 2022 05:17",
          "username": "Finger41",
          "content": "C - https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-accepted-rejected<br><br>SGs are stateful. ACLs are stateless. ACL prohibted access out......",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591332,
          "date": "Mon 25 Apr 2022 03:32",
          "username": "fromnowhere",
          "content": "I am wondering who is grading these questions, this was an easy on. Correct answer should be C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 515740,
          "date": "Mon 03 Jan 2022 14:07",
          "username": "szl0144",
          "content": "vote C, AWS SG is stateful",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 482264,
          "date": "Sat 20 Nov 2021 06:07",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 409257,
          "date": "Sun 17 Oct 2021 02:58",
          "username": "Huy",
          "content": "Answer is C.  Notice the IP address where the source is private IP and destination is public IP. That means the outbound is not allowedwith ACL. One more thing, Security Group doesn't have Deny rule (if we strictly consider wording)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 408687,
          "date": "Thu 07 Oct 2021 04:37",
          "username": "jkwekFinger41",
          "content": "Answer is A:<br>https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#<br>Accepted and rejected traffic:<br>In this example, RDP traffic (destination port 3389, TCP protocol) to network interface eni-1235b8ca123456789 in account 123456789010 was rejected.<br><br>2 123456789010 eni-1235b8ca123456789 172.31.9.69 172.31.9.12 49761 3389 6 20 4249 1418530010 1418530070 REJECT OKYeah thats through a NACL not an SG......",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 599381,
          "date": "Tue 10 May 2022 05:19",
          "username": "Finger41",
          "content": "Yeah thats through a NACL not an SG......",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 389950,
          "date": "Wed 06 Oct 2021 12:46",
          "username": "misako",
          "content": "doesn't HTTPS traffic go thru port 443 also, why is C wrong?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 370840,
          "date": "Wed 29 Sep 2021 00:40",
          "username": "RicardoD",
          "content": "A is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 341585,
          "date": "Wed 22 Sep 2021 02:37",
          "username": "Azaad78",
          "content": "A - is good - because of single reject ok: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-accepted-rejected",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a private Amazon S3 bucket that contains sensitive information. A SysOps administrator needs to keep logs of the IP addresses from authentication failures that result from attempts to access objects in the bucket. The logs must be stored so that they cannot be overwritten or deleted for 90 days.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudTrail trail. Configure the log files to be saved to Amazon CloudWatch Logs. Configure the log group with a retention period of 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudTrail trail. Configure the log files to be saved to a different S3 bucket. Turn on CloudTrail log file integrity validation for 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on access logging for the S3 bucket. Configure the access logs to be saved to Amazon CloudWatch Logs. Configure the log group with a retention period of 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on access logging for the S3 bucket. Configure the access logs to be saved in a second S3 bucket. Turn on S3 Object Lock on the second S3 bucket, and configure a default retention period of 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 38 discussion",
      "discusstion": [
        {
          "id": 656535,
          "date": "Thu 01 Sep 2022 20:17",
          "username": "princajencosmogen",
          "content": "I would have thought is A, but after reading I found this: \\\"CloudTrail does not deliver logs for requests that fail authentication (in which the provided credentials are not valid). However, it does include logs for requests in which authorization fails (AccessDenied) and requests that are made by anonymous users.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.htmlYou are right, but read again the question:=E2=80=9Dkeep logs of the IP addresses from authentication failures=E2=80=9D that =E2=80=9Cresult from attempts to access objects in the bucket=E2=80=9D . =E2=80=9CThat result from attempts to access objects in the bucket=E2=80=9D , for me it's mean authorization fails(AccessDenied).So, for me B,C,D technically are not possible. Vote for A",
          "upvote_count": "51",
          "selected_answers": ""
        },
        {
          "id": 731517,
          "date": "Wed 30 Nov 2022 14:28",
          "username": "cosmogen",
          "content": "You are right, but read again the question:=E2=80=9Dkeep logs of the IP addresses from authentication failures=E2=80=9D that =E2=80=9Cresult from attempts to access objects in the bucket=E2=80=9D . =E2=80=9CThat result from attempts to access objects in the bucket=E2=80=9D , for me it's mean authorization fails(AccessDenied).So, for me B,C,D technically are not possible. Vote for A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 745971,
          "date": "Thu 15 Dec 2022 12:01",
          "username": "zolthar_z",
          "content": "the answer is C:<br>https://aws.amazon.com/premiumsupport/knowledge-center/external-ip-address-s3-bucket/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 745055,
          "date": "Wed 14 Dec 2022 13:29",
          "username": "BietTuot",
          "content": "I think the correct answer is D. <br>The other answers (A, B and C) don't allow you to lock objects and you can overwrite or delete them. If you read carefully: \\\"The logs must be stored so that they cannot be overwritten or deleted for 90 days\\\".<br><br>Now why we need to store logs in second bucket? That's because \\\"S3 buckets with S3 Object Lock can't be used as destination buckets for server access logs\\\".<br>Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745053,
          "date": "Wed 14 Dec 2022 13:28",
          "username": "BietTuot",
          "content": "I think the correct answer is D. <br>The other answers (A, B and C) don't allow you to lock objects and you can overwrite or delete them. If you read carefully: \\\"The logs must be stored so that they cannot be overwritten or deleted for 90 days\\\".<br><br>Now why we need to store logs in second bucket? That's because \\\"S3 buckets with S3 Object Lock can't be used as destination buckets for server access logs\\\".<br>Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744384,
          "date": "Tue 13 Dec 2022 20:00",
          "username": "beznika",
          "content": "I think it's D.  They specify that the logs cannot be overwritten or deleted for 90 days. Only D option with the object lock allows this. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html The other 3 options don't protect objects from deletion or overwriting.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 731522,
          "date": "Wed 30 Nov 2022 14:32",
          "username": "cosmogencosmogen",
          "content": "Read again the question:=E2=80=9Dkeep logs of the IP addresses from authentication failures=E2=80=9D that =E2=80=9Cresult from attempts to access objects in the bucket=E2=80=9D . =E2=80=9CThat result from attempts to access objects in the bucket=E2=80=9D , for me it's mean authorization fails(AccessDenied).So, for me B,C,D technically are not possible. Vote for ALogging options for Amazon S3:<br>You can record the actions that are taken by users, roles, or AWS services on Amazon S3 resources and maintain log records for auditing and compliance purposes. To do this, you can use server-access logging, AWS CloudTrail logging, or a combination of both. We recommend that you use CloudTrail for logging bucket-level and object-level actions for your Amazon S3 resources. For more information about each option, see the following sections:<br>* Logging requests using server access logging<br>* Logging Amazon S3 API calls using AWS CloudTrail<br>The following table lists the key properties of CloudTrail logs and Amazon S3 server-access logs. To make sure that CloudTrail meets your security requirements, review the table and notes.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 731855,
          "date": "Wed 30 Nov 2022 19:34",
          "username": "cosmogen",
          "content": "Logging options for Amazon S3:<br>You can record the actions that are taken by users, roles, or AWS services on Amazon S3 resources and maintain log records for auditing and compliance purposes. To do this, you can use server-access logging, AWS CloudTrail logging, or a combination of both. We recommend that you use CloudTrail for logging bucket-level and object-level actions for your Amazon S3 resources. For more information about each option, see the following sections:<br>* Logging requests using server access logging<br>* Logging Amazon S3 API calls using AWS CloudTrail<br>The following table lists the key properties of CloudTrail logs and Amazon S3 server-access logs. To make sure that CloudTrail meets your security requirements, review the table and notes.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731507,
          "date": "Wed 30 Nov 2022 14:21",
          "username": "CloudHandsOnCloudHandsOn",
          "content": "D is the correct answer. Here is why..<br>When logs are enabled for the S3 bucket, the destination needed is another s3 bucket (1). If logs are sent to CloudWatch,S3 Data Events will need to be enabled and delivered to CloudTrail, which in turn can be delivered to CloudWatch Logs (2).<br><br>References:<br>1.) https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html<br>2.) https://repost.aws/questions/QUktXj6H2NT1mPM3ZTulhTOA/s-3-server-access-logs-to-cloudwatchCORRECTION: I think the answer is A, and agree withprincajen.<br>C is NOT the answer because you cant send directly to CW from S3, you will need CT.<br>D is NOT the answer because you cant enable S3 Object lock on the target bucket.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 731531,
          "date": "Wed 30 Nov 2022 14:37",
          "username": "CloudHandsOn",
          "content": "CORRECTION: I think the answer is A, and agree withprincajen.<br>C is NOT the answer because you cant send directly to CW from S3, you will need CT.<br>D is NOT the answer because you cant enable S3 Object lock on the target bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725574,
          "date": "Thu 24 Nov 2022 06:31",
          "username": "cosmogencosmogen",
          "content": "When you enable s3 server access logging, you must specify target bucket. I can't see any option to configure logs to be saved to Cloud watch.<br>=E2=80=98By default, Amazon S3 doesn't collect server access logs. When you enable logging, Amazon S3 delivers access logs for a source bucket to a target bucket that you choose. The target bucket must be in the same AWS Region and AWS account as the source bucket, and must not have a default retention period configuration.=E2=80=9C<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html<br>So for me , may be D is correct.As I read it agin now, may be D is not correct, because as you can read from the article, when you enable logging:=E2=80=9DThe target bucket must be in the same AWS Region and AWS account as the source bucket, and must not have a default retention period configuration.=E2=80=9C So target bucket must not have default retention period configuration. And one more:<br>Note:<br>S3 buckets with S3 Object Lock can't be used as destination buckets for server access logs.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html<br>So may be A is correct. It's a tricky question.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 725598,
          "date": "Thu 24 Nov 2022 07:30",
          "username": "cosmogen",
          "content": "As I read it agin now, may be D is not correct, because as you can read from the article, when you enable logging:=E2=80=9DThe target bucket must be in the same AWS Region and AWS account as the source bucket, and must not have a default retention period configuration.=E2=80=9C So target bucket must not have default retention period configuration. And one more:<br>Note:<br>S3 buckets with S3 Object Lock can't be used as destination buckets for server access logs.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html<br>So may be A is correct. It's a tricky question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722441,
          "date": "Sun 20 Nov 2022 08:05",
          "username": "mlantonis2",
          "content": "C is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 721499,
          "date": "Fri 18 Nov 2022 19:31",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717889,
          "date": "Mon 14 Nov 2022 11:20",
          "username": "fedorian",
          "content": "A - CloudTrail does not deliver logs for requests that fail authentication<br>C - Correct<br>D - Not possible - You can't enable S3 Object Lock on the target bucket.(see https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 657910,
          "date": "Sat 03 Sep 2022 01:45",
          "username": "kati2k22cz",
          "content": "D. <br>Learn more here: https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its production file server to AWS. All data that is stored on the file server must remain accessible if an Availability Zone becomes unavailable or when system maintenance is performed. Users must be able to interact with the file server through the SMB protocol. Users also must have the ability to manage file permissions by using Windows ACLs.<br>Which solution will net these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Create a single AWS Storage Gateway file gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon FSx for Windows File Server Multi-AZ file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems. Configure Microsoft Distributed File System Replication (DFSR).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 39 discussion",
      "discusstion": [
        {
          "id": 649086,
          "date": "Fri 19 Aug 2022 21:07",
          "username": "yeanlingmedal71",
          "content": "Multi-AZ file systems support all the availability and durability features of Single-AZ file systems. In addition, they are designed to provide continuous availability to data, even during file system maintenance, infrastructure component replacement, and when an Availability Zone is unavailable. In a Multi-AZ deployment, Amazon FSx automatically provisions and maintains a standby file server in a different Availability Zone. Any changes written to disk in your file system are synchronously replicated across Availability Zones to the standby. If there is planned file system maintenance or unplanned service disruption, Amazon FSx automatically fails over to the secondary file server, allowing you to continue accessing your data without manual intervention.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594182,
          "date": "Fri 29 Apr 2022 04:41",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html<br>FSX for Windows in a Multi AZ satisfies the configuration",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591071,
          "date": "Sun 24 Apr 2022 15:07",
          "username": "Mecdrox",
          "content": "I think B.  No, local access requirements so the storage gateway is not likely.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its production file server to AWS. All data that is stored on the file server must remain accessible if an Availability Zone becomes unavailable or when system maintenance is performed. Users must be able to interact with the file server through the SMB protocol. Users also must have the ability to manage file permissions by using Windows ACLs.<br>Which solution will net these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Create a single AWS Storage Gateway file gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon FSx for Windows File Server Multi-AZ file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems. Configure Microsoft Distributed File System Replication (DFSR).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 39 discussion",
      "discusstion": [
        {
          "id": 380395,
          "date": "Sun 26 Sep 2021 21:23",
          "username": "ahaffar",
          "content": "B<br>https://aws.amazon.com/fsx/windows/",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 674319,
          "date": "Tue 20 Sep 2022 17:42",
          "username": "hanguyen89",
          "content": "vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 555790,
          "date": "Fri 25 Feb 2022 06:26",
          "username": "az102",
          "content": "B. To support SMB, FSx is the choice: https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html.For supporting fail-over across AZ, can turn on Multi-AZ option.https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 484391,
          "date": "Mon 22 Nov 2021 18:04",
          "username": "hhhhhhhhhhh",
          "content": "Vote B, HZ means high availability, then it should be multi AZ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481612,
          "date": "Fri 19 Nov 2021 12:58",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator migrates NAT instances to NAT gateways. After the migration, an application that is hosted on Amazon EC2 instances in a private subnet cannot access the internet.<br>Which of the following are possible reasons for this problem? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. The application is using a protocol that the NAT gateway does not support.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The NAT gateway is not in a security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The NAT gateway is in an unsupported Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The NAT gateway is not in the Available state.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. The port forwarding settings do not allow access to internal services from the internet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 39 discussion",
      "discusstion": [
        {
          "id": 745070,
          "date": "Wed 14 Dec 2022 13:40",
          "username": "BietTuot",
          "content": "Instances cannot access the internet<br>Problem<br><br>You created a public NAT gateway and followed the steps to test it, but the ping command fails, or your instances in the private subnet cannot access the internet.<br><br>Causes<br><br>The cause of this problem might be one of the following:<br><br>The NAT gateway is not ready to serve traffic.<br><br>Your route tables are not configured correctly.<br><br>Your security groups or network ACLs are blocking inbound or outbound traffic.<br><br>You're using an unsupported protocol.<br><br>Solution<br><br>Check the following information:<br><br>Check that the NAT gateway is in the Available state. In the Amazon VPC console, go to the NAT Gateways page and view the status information in the details pane. If the NAT gateway is in a failed state, there may have been an error when it was created. For more information, see NAT gateway creation fails.<br><br>Reference: https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 744679,
          "date": "Wed 14 Dec 2022 04:10",
          "username": "MrMLB",
          "content": "The possible reasons for this problem are options A and D: the application is using a protocol that the NAT gateway does not support, or the NAT gateway is not in the Available state. If the application is using a protocol that the NAT gateway does not support, it will not be able to access the internet through the NAT gateway. Similarly, if the NAT gateway is not in the Available state, it will not be able to provide internet access to the EC2 instances. The other options, B, C, and E, are not possible reasons for this problem.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731500,
          "date": "Wed 30 Nov 2022 14:17",
          "username": "mautpo",
          "content": "Thinking about A, I believe its not a matter of protocol once application was behind NAT Instances and I was supposed to be working...Thats why I vote for C and D. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 721519,
          "date": "Fri 18 Nov 2022 20:20",
          "username": "Liongeek",
          "content": "Ans: D<br>Ref.https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html#nat-gateway-troubleshooting-no-internet-connection",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 673924,
          "date": "Tue 20 Sep 2022 10:12",
          "username": "Gorille69",
          "content": "no need for security group with NAT GATEWAY. Port forwarding does not exist with NAT GATEWAY but yes with NAT instance. There had to be port forwarding on the NAT INSTANCE.  So for me D , and A by default",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656545,
          "date": "Thu 01 Sep 2022 20:23",
          "username": "princajenprincajen",
          "content": "You created a public NAT gateway and followed the steps to test it, but the ping command fails, or your instances in the private subnet cannot access the internet.<br><br>Causes<br><br>The cause of this problem might be one of the following:<br><br>The NAT gateway is not ready to serve traffic.<br><br>Your route tables are not configured correctly.<br><br>Your security groups or network ACLs are blocking inbound or outbound traffic.<br><br>You're using an unsupported protocol.<br>(Ensure that your connection is using a TCP, UDP, or ICMP protocol only.)https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html#nat-gateway-troubleshooting-no-internet-connection",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 656547,
          "date": "Thu 01 Sep 2022 20:24",
          "username": "princajen",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html#nat-gateway-troubleshooting-no-internet-connection",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655341,
          "date": "Wed 31 Aug 2022 19:47",
          "username": "haxaffee",
          "content": "I think this one is AD according to https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html#nat-gateway-troubleshooting-no-internet-connection",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new website will run on Amazon EC2 instances behind an Application Load Balancer. Amazon Route 53 will be used to manage DNS records.<br>What type of record should be set in Route 53 to point the website's apex domain name (for example, `company.com`) to the Application Load Balancer?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. CNAME<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. SOA<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. TXT<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ALIAS<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 40 discussion",
      "discusstion": [
        {
          "id": 606455,
          "date": "Tue 24 May 2022 05:10",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/setting-up-route53-zoneapex-elb.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591074,
          "date": "Sun 24 Apr 2022 15:09",
          "username": "Mecdrox",
          "content": "Alias record type as pointing to AWS from AWS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 588917,
          "date": "Wed 20 Apr 2022 21:21",
          "username": "ovilla",
          "content": "The answer is D",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new website will run on Amazon EC2 instances behind an Application Load Balancer. Amazon Route 53 will be used to manage DNS records.<br>What type of record should be set in Route 53 to point the website's apex domain name (for example, `company.com`) to the Application Load Balancer?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. CNAME<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. SOA<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. TXT<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ALIAS<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 40 discussion",
      "discusstion": [
        {
          "id": 370845,
          "date": "Sun 10 Oct 2021 20:26",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 586660,
          "date": "Sat 16 Apr 2022 09:46",
          "username": "Mikilo",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 482313,
          "date": "Sat 20 Nov 2021 08:07",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on an Amazon EC2 instance. A SysOps administrator creates an Auto Scaling group and an Application Load Balancer (ALB) to handle an increase in demand. However, the EC2 instances are failing the health check.<br>What should the SysOps administrator do to troubleshoot this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. Verify that the Auto Scaling group is configured to use all AWS Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Verify that the application is running on the protocol and the port that the listener is expecting.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify the listener priority in the ALB.  Change the priority if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Verify the maximum number of instances in the Auto Scaling group. Change the number if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 40 discussion",
      "discusstion": [
        {
          "id": 745076,
          "date": "Wed 14 Dec 2022 13:46",
          "username": "BietTuot",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 738660,
          "date": "Thu 08 Dec 2022 06:58",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721520,
          "date": "Fri 18 Nov 2022 20:23",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 705664,
          "date": "Thu 27 Oct 2022 16:40",
          "username": "spaget",
          "content": "It's B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 663700,
          "date": "Thu 08 Sep 2022 16:33",
          "username": "hanguyen89",
          "content": "D em =C6=A1i ! hungvv6",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656554,
          "date": "Thu 01 Sep 2022 20:30",
          "username": "princajen",
          "content": "Vote B!<br>Target.FailedHealthChecks<br>Verify that the target is listening for traffic on the health check port. You can use the ss command on Linux targets to verify which ports your server is listening on. For Windows targets, you can use the netstat command.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-fix-failing-health-checks-alb/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655343,
          "date": "Wed 31 Aug 2022 19:50",
          "username": "haxaffee",
          "content": "Vote B.  No idea how D is related with failing health checks.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SysOps administrator has created an Amazon EC2 instance with custom software that will be used as a template for all new EC2 instances across multiple AWS accounts. The Amazon Elastic Block Store (Amazon EBS) volumes that are attached to the EC2 instance are encrypted with AWS managed keys.<br>The SysOps administrator creates an Amazon Machine Image (AMI) of the custom EC2 instance and plans to share the AMI with the company's other AWS accounts. The company requires that all AMIs are encrypted with AWS Key Management Service (AWS KMS) keys and that only authorized AWS accounts can access the shared AMIs.<br>Which solution will securely share the AMI with the other AWS accounts?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A. In the account where the AMI was created, create a customer master key (CMK). Modify the key policy to provide kms:DescribeKey, kms:ReEncrypt*, kms:CreateGrant, and kms:Decrypt permissions to the AWS accounts that the AMI will be shared with. Modify the AMI permissions to specify the AWS account numbers that the AMI will be shared with.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the account where the AMI was created, create a customer master key (CMK). Modify the key policy to provide kms:DescribeKey, kms:ReEncrypt*, kms:CreateGrant, and kms:Decrypt permissions to the AWS accounts that the AMI will be shared with. Create a copy of the AMI, and specify the CMK. Modify the permissions on the copied AMI to specify the AWS account numbers that the AMI will be shared with.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the account where the AMI was created, create a customer master key (CMK). Modify the key policy to provide kms:DescribeKey, kms:ReEncrypt*, kms:CreateGrant, and kms:Decrypt permissions to the AWS accounts that the AMI will be shared with. Create a copy of the AMI, and specify the CMK. Modify the permissions on the copied AMI to make it public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the account where the AMI was created, modify the key policy of the AWS managed key to provide kms:DescribeKey, kms:ReEncrypt*, kms:CreateGrant, and kms:Decrypt permissions to the AWS accounts that the AMI will be shared with. Modify the AMI permissions to specify the AWS account numbers that the AMI will be shared with.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 41 discussion",
      "discusstion": [
        {
          "id": 343685,
          "date": "Tue 21 Sep 2021 06:43",
          "username": "AldredHuy",
          "content": "Look like B to me.<br>https://aws.amazon.com/blogs/security/how-to-create-a-custom-ami-with-encrypted-amazon-ebs-snapshots-and-share-it-with-other-accounts-and-regions/It is A based on this",
          "upvote_count": "146",
          "selected_answers": ""
        },
        {
          "id": 409264,
          "date": "Tue 05 Oct 2021 16:30",
          "username": "Huy",
          "content": "It is A based on this",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 378660,
          "date": "Sat 25 Sep 2021 14:58",
          "username": "Nick1027itbrplaltonh",
          "content": "It should be B, done it couple of times for workDo you really need to make a copy of the AMI? that is the difference between A and BCannot be A because \\\"AWS managed keys are used to encrypt the Amazon Elastic Block Store\\\".",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 510826,
          "date": "Tue 28 Dec 2021 06:58",
          "username": "itbrplaltonh",
          "content": "Do you really need to make a copy of the AMI? that is the difference between A and BCannot be A because \\\"AWS managed keys are used to encrypt the Amazon Elastic Block Store\\\".",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 605814,
          "date": "Mon 23 May 2022 06:43",
          "username": "altonh",
          "content": "Cannot be A because \\\"AWS managed keys are used to encrypt the Amazon Elastic Block Store\\\".",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 604555,
          "date": "Fri 20 May 2022 18:35",
          "username": "vjt",
          "content": "its B for sure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 599375,
          "date": "Tue 10 May 2022 05:01",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 578743,
          "date": "Thu 31 Mar 2022 10:14",
          "username": "doggiecai",
          "content": "Definitely B.  AWS has a limitation which is everything encrypted with AWS managed key can't be shared across account. So you must make a copy of it and encrypt the copy with a Customer Managed key in order to share it.<br>I have confirmed this limitation at my work last month, and I have also confirmed with AWS support team.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 567824,
          "date": "Mon 14 Mar 2022 18:48",
          "username": "crazydev",
          "content": "The answer is B. <br>Why not A? Well because : EBS is encrypted with aws managed keys. Scope of sharing such AMIs is limited to the account. If you want to share the AMI with other accounts you need to make a copy of it and then re-encrypt it using a customer managed key (in KMS) then update key policies and share the key to decrypt shared AMI.<br>Rest of the details are pretty much clear.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561088,
          "date": "Fri 04 Mar 2022 23:42",
          "username": "roka_ua",
          "content": "I like B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 538580,
          "date": "Wed 02 Feb 2022 11:20",
          "username": "FHU",
          "content": "Letter B is corret. The question states that the AMI is using an AWS managed key. Since managed key cannot be shared, we have to make a copy of it associating with the customer key.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 530438,
          "date": "Sun 23 Jan 2022 11:20",
          "username": "juraj666",
          "content": "i'm going with A based on this blog post<br>https://aws.amazon.com/blogs/security/how-to-share-encrypted-amis-across-accounts-to-launch-encrypted-ec2-instances/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 517322,
          "date": "Wed 05 Jan 2022 10:26",
          "username": "MrkJobs",
          "content": "B<br>\\\"AMIs are a regional resource. When you share an AMI, it is only available in that Region. To make an AMI available in a different Region, copy the AMI to the Region and then share it\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 482224,
          "date": "Sat 20 Nov 2021 03:39",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 450208,
          "date": "Sun 07 Nov 2021 16:54",
          "username": "Andrewwfw",
          "content": "Answer Is A not B<br>There's no need to Copy the AMI since the requirement is Cross Account sharing.<br><br>B would be correct only if It's CrossAccount CrossRegion Sharing.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 433332,
          "date": "Sat 06 Nov 2021 12:52",
          "username": "Bigbearcnitbrpl",
          "content": "You can share an AMI with specific AWS accounts without making the AMI public. All you need is the AWS account IDs. You can only share AMIs that have unencrypted volumes and volumes that are encrypted with a customer managed key.<br> If you share an AMI with encrypted volumes, you must also share any customer managed keys used to encrypt them.<br><br>You cannot share an AMI that has volumes that are encrypted with an AWS managed key.<br><br>So AD is wrong because you can't share the ami that encrypted with aws managed key.<br>C is wrong because you don't need to make it public.Only B is correct.https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.htmlI may be wrong but A is not saying it uses AWS Managed Keys... only D. . B states you need to make a copy of the AMI.. do you really need that?",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 510828,
          "date": "Tue 28 Dec 2021 06:59",
          "username": "itbrpl",
          "content": "I may be wrong but A is not saying it uses AWS Managed Keys... only D. . B states you need to make a copy of the AMI.. do you really need that?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 425805,
          "date": "Thu 04 Nov 2021 12:32",
          "username": "ZL23",
          "content": "B<br><br>Since AWS managed keys cannot be share, you 'll need to make a new copy which is encrypted by CMK (which is able to be shared).",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 411798,
          "date": "Mon 18 Oct 2021 06:16",
          "username": "LrdKanien",
          "content": "the blog shows a copy",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 409265,
          "date": "Sun 17 Oct 2021 00:08",
          "username": "HuyAMohanty",
          "content": "It is A.  We don't need to copy the AMI and specify the CMK. Just share the CMK and the AMI. Target account can launch an instance from that encrypted AMI.AWS managed CMKs are used to encrypt EBS<br>How would the second account gain access to the initial CMK ?<br>A is wrong, would go with B. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 522596,
          "date": "Thu 13 Jan 2022 03:52",
          "username": "AMohanty",
          "content": "AWS managed CMKs are used to encrypt EBS<br>How would the second account gain access to the initial CMK ?<br>A is wrong, would go with B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 380406,
          "date": "Fri 01 Oct 2021 09:49",
          "username": "ahaffar",
          "content": "I would go with Option D, why would I re-create another copy of the AMI.<br>also in the question, its specified the EBS volumes are already encrypted why we should create a new KMS KEY",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has created an AWS Service Catalog portfolio and has shared the portfolio with a second AWS account in the company. The second account is controlled by a different administrator.<br>Which action will the administrator of the second account be able to perform?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A. Add a product from the imported portfolio to a local portfolio.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add new products to the imported portfolio.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the launch role for the products contained in the imported portfolio.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Customize the products in the imported portfolio.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 41 discussion",
      "discusstion": [
        {
          "id": 656610,
          "date": "Thu 01 Sep 2022 21:30",
          "username": "princajen",
          "content": "When you share a portfolio using account-to-account sharing or AWS Organizations, you allow an AWS Service Catalog administrator of another AWS account to import your portfolio into his or her account and distribute the products to end users in that account.<br><br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_sharing.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 738671,
          "date": "Thu 08 Dec 2022 07:12",
          "username": "michaldavid",
          "content": "aaaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721521,
          "date": "Fri 18 Nov 2022 20:24",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#42",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated its application to AWS. The company will host the application on Amazon EC2 instances of multiple instance families.<br>During initial testing, a SysOps administrator identifies performance issues on selected EC2 instances. The company has a strict budget allocation policy, so the<br>SysOps administrator must use the right resource types with the performance characteristics to match the workload.<br>What should the SysOps administrator do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>A. Purchase regional Reserved Instances (RIs) for immediate cost savings. Review and take action on the EC2 rightsizing recommendations in Cost Explorer. Exchange the RIs for the optimal instance family after rightsizing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase zonal Reserved Instances (RIs) for the existing instances. Monitor the RI utilization in the AWS Billing and Cost Management console. Make adjustments to instance sizes to optimize utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Review and take action on AWS Compute Optimizer recommendations. Purchase Compute Savings Plans to reduce the cost that is required to run the compute resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review resource utilization metrics in the AWS Cost and Usage Report. Rightsize the EC2 instances. Create On-Demand Capacity Reservations for the rightsized resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 42 discussion",
      "discusstion": [
        {
          "id": 657914,
          "date": "Sat 03 Sep 2022 01:59",
          "username": "kati2k22cz",
          "content": "C<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recommendations.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744683,
          "date": "Wed 14 Dec 2022 04:22",
          "username": "MrMLB",
          "content": "D<br><br>The SysOps administrator should review resource utilization metrics in the AWS Cost and Usage Report, rightsize the EC2 instances, and create On-Demand Capacity Reservations for the rightsized resources in order to meet this requirement. This will allow the administrator to identify the EC2 instances that are experiencing performance issues, and resize them to the optimal instance family based on their workload. Creating On-Demand Capacity Reservations will also ensure that the company has access to the necessary compute resources without exceeding its budget allocation. Options A, B, and C are not appropriate for this situation, as they do not involve rightsizing the EC2 instances to match the workload.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 738677,
          "date": "Thu 08 Dec 2022 07:16",
          "username": "michaldavid",
          "content": "cccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721523,
          "date": "Fri 18 Nov 2022 20:27",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to create a daily Amazon Machine Image (AMI) of an existing Amazon Linux EC2 instance that hosts the operating system, application, and database on multiple attached Amazon Elastic Block Store (Amazon EBS) volumes. File system integrity must be maintained.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to call the CreateImage API operation with the EC2 instance ID and the no-reboot parameter enabled. Create a daily scheduled Amazon EventBridge (Amazon CloudWatch Events) rule that invokes the function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to call the CreateImage API operation with the EC2 instance ID and the reboot parameter enabled. Create a daily scheduled Amazon EventBridge (Amazon CloudWatch Events) rule that invokes the function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup to create a backup plan with a backup rule that runs daily. Assign the resource ID of the EC2 instance with the no-reboot parameter enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Backup to create a backup plan with a backup rule that runs daily. Assign the resource ID of the EC2 instance with the reboot parameter enabled.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 43 discussion",
      "discusstion": [
        {
          "id": 344279,
          "date": "Wed 06 Oct 2021 07:05",
          "username": "binhdt2611MrkJobs",
          "content": "I think answer is B<br><br>Use Lambda to call CreateImage API operation is useful. Because it has option \\\"No reboot\\\" which help ensure File System integrity<br><br>\\\"NoReboot<br>By default, Amazon EC2 attempts to shut down and reboot the instance before creating the image. If the No Reboot option is set, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.\\\"<br><br>Besides, we can use AWS EventBridge to invoke Lambda functionhttps://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.htmlnope, with noboot you loose the question requirement \\\"integrity\\\"<br>\\\"When this option is used, file system integrity on the created image can't be guaranteed.\\\"",
          "upvote_count": "101",
          "selected_answers": ""
        },
        {
          "id": 517583,
          "date": "Wed 05 Jan 2022 15:59",
          "username": "MrkJobs",
          "content": "nope, with noboot you loose the question requirement \\\"integrity\\\"<br>\\\"When this option is used, file system integrity on the created image can't be guaranteed.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 343703,
          "date": "Tue 05 Oct 2021 15:14",
          "username": "Aldred",
          "content": "I think i go with B; https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Creating_EBSbacked_WinAMI.html<br><br>AWS backup manage EC2's backup with default no-reboot. No reboot cannot ensure File System intergrity",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 595561,
          "date": "Sun 01 May 2022 12:39",
          "username": "psou7",
          "content": "It is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555709,
          "date": "Fri 25 Feb 2022 03:48",
          "username": "az102",
          "content": "B. <br><br>A&C are not correct as file system integrity on the created image can't be guaranteed.Source: https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html<br><br>D is not correct as AWS Backup does not reboot EC2 instances at any time.Source: https://docs.aws.amazon.com/aws-backup/latest/devguide/AWSBackup-dg.pdf",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 482320,
          "date": "Sat 20 Nov 2021 08:20",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 460913,
          "date": "Mon 01 Nov 2021 12:10",
          "username": "titi_r",
          "content": "\\\"If you choose No reboot, we can't guarantee the file system integrity of the created image.\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Creating_EBSbacked_WinAMI.html<br><br>Reboot is needed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 457708,
          "date": "Thu 28 Oct 2021 09:21",
          "username": "Alex1atdAlex1atd",
          "content": "The answer is CMy bad, is B",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 461818,
          "date": "Thu 04 Nov 2021 09:39",
          "username": "Alex1atd",
          "content": "My bad, is B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 438129,
          "date": "Tue 26 Oct 2021 22:26",
          "username": "Bigbearcn",
          "content": "https://docs.aws.amazon.com/aws-backup/latest/devguide/AWSBackup-dg.pdf<br><br>AWS Backup does not reboot EC2 instances at any time.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 383673,
          "date": "Mon 11 Oct 2021 13:17",
          "username": "0utsiderLrdKanien",
          "content": "Where its said EC2 needs to be running all the time?<br>Can it be D?anyone know if AWS backup can do this?",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 411805,
          "date": "Wed 13 Oct 2021 05:57",
          "username": "LrdKanien",
          "content": "anyone know if AWS backup can do this?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 378664,
          "date": "Fri 08 Oct 2021 00:15",
          "username": "Nick1027",
          "content": "It's B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is tasked with deploying a company's infrastructure as code. The SysOps administrator want to write a single template that can be reused for multiple environments.<br>How should the SysOps administrator use AWS CloudFormation to create a solution?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A. Use Amazon EC2 user data in a CloudFormation template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use nested stacks to provision resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use parameters in a CloudFormation template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use stack policies to provision resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 43 discussion",
      "discusstion": [
        {
          "id": 656615,
          "date": "Thu 01 Sep 2022 21:37",
          "username": "princajen",
          "content": "Reuse templates to replicate stacks in multiple environments<br>After you have your stacks and resources set up, you can reuse your templates to replicate your infrastructure in multiple environments. For example, you can create environments for development, testing, and production so that you can test changes before implementing them into production. To make templates reusable, use the parameters, mappings, and conditions sections so that you can customize your stacks when you create them. For example, for your development environments, you can specify a lower-cost instance type compared to your production environment, but all other configurations and settings remain the same.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#reuse",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738680,
          "date": "Thu 08 Dec 2022 07:17",
          "username": "michaldavid",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721525,
          "date": "Fri 18 Nov 2022 20:28",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716404,
          "date": "Sat 12 Nov 2022 01:46",
          "username": "Atown",
          "content": "I believe C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 699851,
          "date": "Thu 20 Oct 2022 13:35",
          "username": "Milus",
          "content": "It looks like B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692821,
          "date": "Wed 12 Oct 2022 09:43",
          "username": "Surferbolt",
          "content": "C.  Parameters.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 673501,
          "date": "Mon 19 Sep 2022 19:23",
          "username": "GianilucaGianilucazolthar_z",
          "content": "D seems correctI meant B as per https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.htmlDon't confuse nested stacks with stacksets",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 673507,
          "date": "Mon 19 Sep 2022 19:29",
          "username": "Gianilucazolthar_z",
          "content": "I meant B as per https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.htmlDon't confuse nested stacks with stacksets",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 746005,
          "date": "Thu 15 Dec 2022 12:35",
          "username": "zolthar_z",
          "content": "Don't confuse nested stacks with stacksets",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is responsible for a large fleet of Amazon EC2 instances and must know whether any instances will be affected by upcoming hardware maintenance.<br>Which option would provide this information with the LEAST administrative overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A. Deploy a third-party monitoring solution to provide real-time EC2 instance monitoring.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. List any instances with failed system status checks using the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Monitor AWS CloudTrail for StopInstances API calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review the AWS Personal Health Dashboard.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 44 discussion",
      "discusstion": [
        {
          "id": 738686,
          "date": "Thu 08 Dec 2022 07:24",
          "username": "michaldavid",
          "content": "ddddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721526,
          "date": "Fri 18 Nov 2022 20:29",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656618,
          "date": "Thu 01 Sep 2022 21:40",
          "username": "princajen",
          "content": "If a hardware malfunction occurs, then Amazon EC2 tags the specific hardware as faulty. Any instances that are running on the hypervisor of the faulty hardware are moved to healthy hardware. During the transition to new hardware, the Amazon EBS-backed instances are stopped and instance store-backed instances are terminated. Amazon EC2 sends a notification through email and to your Personal Health Dashboard informing you of the hardware degradation and of the upcoming instance stop or termination.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-degraded-hardware/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is setting up an automated process to recover an Amazon EC2 instance in the event of an underlying hardware failure. The recovered instance must have the same private IP address and the same Elastic IP address that the original instance had. The SysOps team must receive an email notification when the recovery process is initiated.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_Instance metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_System metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group across three different subnets in the same Availability Zone with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to send an email message to the SysOps team through Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group across three Availability Zones with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 45 discussion",
      "discusstion": [
        {
          "id": 344382,
          "date": "Tue 21 Sep 2021 12:35",
          "username": "binhdt2611",
          "content": "Answer is B<br><br>You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered.<br><br>A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata. If the impaired instance has a public IPv4 address, the instance retains the public IPv4 address after recovery. If the impaired instance is in a placement group, the recovered instance runs in the placement group.<br><br>When the StatusCheckFailed_System alarm is triggered, and the recover action is initiated, you will be notified by the Amazon SNS topic that you selected when you created the alarm and associated the recover action.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
          "upvote_count": "19",
          "selected_answers": ""
        },
        {
          "id": 631707,
          "date": "Fri 15 Jul 2022 13:14",
          "username": "aha_789",
          "content": "Why not D?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 627591,
          "date": "Tue 05 Jul 2022 21:40",
          "username": "Goozian",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 621356,
          "date": "Fri 24 Jun 2022 00:44",
          "username": "frank991Mambo_kingbroadwinkceeee",
          "content": "can some explain why it is A?A is misleading because instance_status checks dont point to underlying hardware failures so forget it and start looking forward to use B if your exam has this qstnA states for StatusCheckFailed_Instance metric, this metric is used when the instance has an error.<br>But the question is asking for Hardware failure, and this metric (StatusCheckFailed_Instance metric) checks only for software errors, so you need to use the StatusCheckFailed_System metric.because the question specifies that it's a hardware problem, the StatusCheckFailed_System metric detects hardware problems, as the StatusCheckFailed_Instance detects software problems. To detect both software and hardware problems you check on the StatusCheckFailed metric (it covers both)",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 625486,
          "date": "Fri 01 Jul 2022 02:10",
          "username": "Mambo_king",
          "content": "A is misleading because instance_status checks dont point to underlying hardware failures so forget it and start looking forward to use B if your exam has this qstn",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 626210,
          "date": "Sat 02 Jul 2022 17:41",
          "username": "broadwink",
          "content": "A states for StatusCheckFailed_Instance metric, this metric is used when the instance has an error.<br>But the question is asking for Hardware failure, and this metric (StatusCheckFailed_Instance metric) checks only for software errors, so you need to use the StatusCheckFailed_System metric.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625130,
          "date": "Thu 30 Jun 2022 10:39",
          "username": "ceeee",
          "content": "because the question specifies that it's a hardware problem, the StatusCheckFailed_System metric detects hardware problems, as the StatusCheckFailed_Instance detects software problems. To detect both software and hardware problems you check on the StatusCheckFailed metric (it covers both)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 620152,
          "date": "Wed 22 Jun 2022 06:30",
          "username": "221898",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 597545,
          "date": "Fri 06 May 2022 06:21",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 595565,
          "date": "Sun 01 May 2022 13:15",
          "username": "everythingship",
          "content": "Answer is B. <br>StatusCheckFailed_Instance : VM<br>StatusCheckFailed_System : Host",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 594429,
          "date": "Fri 29 Apr 2022 13:58",
          "username": "AWS21trashjunk",
          "content": "As of 4/29/2022, Answers A and B are the same (e.g., the wording is identical).Notice it has one difference \\\"StatusCheckFailed_System\\\" and \\\"StatusCheckFailed_Instance\\\", such a small difference.",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 595209,
          "date": "Sat 30 Apr 2022 20:29",
          "username": "trashjunk",
          "content": "Notice it has one difference \\\"StatusCheckFailed_System\\\" and \\\"StatusCheckFailed_Instance\\\", such a small difference.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 578427,
          "date": "Wed 30 Mar 2022 19:18",
          "username": "hammeringhammering",
          "content": "Answer is B<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html<br><br>search \\\"Loss of system power\\\".in this question, it is a \\\"Hardware issues on the physical host that impact network reachability\\\"",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 578428,
          "date": "Wed 30 Mar 2022 19:19",
          "username": "hammering",
          "content": "in this question, it is a \\\"Hardware issues on the physical host that impact network reachability\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 563746,
          "date": "Wed 09 Mar 2022 05:09",
          "username": "zolivFinger41",
          "content": "A & B are the same statement...... /A is for Instance checks, the other is for system checks (hardware)",
          "upvote_count": "23",
          "selected_answers": ""
        },
        {
          "id": 597544,
          "date": "Fri 06 May 2022 06:20",
          "username": "Finger41",
          "content": "A is for Instance checks, the other is for system checks (hardware)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 519368,
          "date": "Sat 08 Jan 2022 08:33",
          "username": "AMohanty",
          "content": "Why not D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516468,
          "date": "Tue 04 Jan 2022 11:29",
          "username": "MrkJobs",
          "content": "Answer is B<br>\\\"When the StatusCheckFailed_System alarm is triggered, and the recover action is initiated, you are notified by the Amazon SNS topic that you chose when you created the alarm and associated the recover action. During instance recovery, the instance is migrated during an instance reboot, and any data that is in-memory is lost. When the process is complete, information is published to the SNS topic you've configured for the alarm. Anyone who is subscribed to this SNS topic receives an email notification that includes the status of the recovery attempt and any further instructions. You notice an instance reboot on the recovered instance.\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html#AddingRecoverActions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515678,
          "date": "Mon 03 Jan 2022 13:15",
          "username": "szl0144",
          "content": "vote B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 481789,
          "date": "Fri 19 Nov 2021 15:42",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 397780,
          "date": "Sun 24 Oct 2021 11:41",
          "username": "SDusari",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 378666,
          "date": "Sat 02 Oct 2021 07:51",
          "username": "Nick1027",
          "content": "It's B, underlying host issue belongs to system status check, not instance status check",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is attempting to deploy resources by using an AWS CloudFormation template. An Amazon EC2 instance that is defined in the template fails to launch and produces an InsufficientInstanceCapacity error.<br>Which actions should the SysOps administrator take to resolve this error? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. Create a separate AWS CloudFormation template for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the AWS CloudFormation template to not specify an Availability Zone for the EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the AWS CloudFormation template to use a different EC2 instance type.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a different Amazon Machine Image (AMI) for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the AWS CLI's validate-template command before creating a stack from the template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 45 discussion",
      "discusstion": [
        {
          "id": 656624,
          "date": "Thu 01 Sep 2022 21:45",
          "username": "princajen",
          "content": "If you're launching an instance, submit a new request without specifying an Availability Zone.<br><br>If you're launching an instance, submit a new request using a different instance type (which you can resize at a later stage). For more information, see Change the instance type.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/troubleshooting-launch.html#troubleshooting-launch-capacity",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 738688,
          "date": "Thu 08 Dec 2022 07:26",
          "username": "michaldavid",
          "content": "B and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 721529,
          "date": "Fri 18 Nov 2022 20:35",
          "username": "Liongeek",
          "content": "Ans: BC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692982,
          "date": "Wed 12 Oct 2022 13:11",
          "username": "Surferbolt",
          "content": "BC.  InsufficientInstanceCapacity error message means the current AZ that you wish to deploy your instance in does not have enough capacity, so BC are the best options to circumvent it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an internal application on Amazon EC2 instances. All application data and requests route through an AWS Site-to-Site VPN connection between the on-premises network and AWS. The company must monitor the application for changes that allow network access outside of the corporate network. Any change that exposes the application externally must be restricted automatically.<br>Which solution meets these requirements in the MOST operationally efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that updates security groups that are associated with the elastic network interface to remove inbound rules with noncorporate CIDR ranges. Turn on VPC Flow Logs, and send the logs to Amazon CloudWatch Logs. Create an Amazon CloudWatch alarm that matches traffic from noncorporate CIDR ranges, and publish a message to an Amazon Simple Notification Service (Amazon SNS) topic with the Lambda function as a target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a scheduled Amazon EventBridge (Amazon CloudWatch Events) rule that targets an AWS Systems Manager Automation document to check for public IP addresses on the EC2 instances. If public IP addresses are found on the EC2 instances, initiate another Systems Manager Automation document to terminate the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Config and a custom rule to monitor whether a security group allows inbound requests from noncorporate CIDR ranges. Create an AWS Systems Manager Automation document to remove any noncorporate CIDR ranges from the application security groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Config and the managed rule for monitoring public IP associations with the EC2 instances by tag. Tag the EC2 instances with an identifier. Create an AWS Systems Manager Automation document to remove the public IP association from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 46 discussion",
      "discusstion": [
        {
          "id": 380493,
          "date": "Sun 03 Oct 2021 06:09",
          "username": "ahaffarcathal",
          "content": "I think its C<br>https://aws.amazon.com/blogs/security/how-to-auto-remediate-internet-accessible-ports-with-aws-config-and-aws-system-manager/I agree, C seems correct",
          "upvote_count": "205",
          "selected_answers": ""
        },
        {
          "id": 415581,
          "date": "Sun 17 Oct 2021 18:43",
          "username": "cathal",
          "content": "I agree, C seems correct",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 631698,
          "date": "Fri 15 Jul 2022 12:46",
          "username": "aha_789",
          "content": "It's C,<br>A does not make sense as it is not the most effective way",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 622340,
          "date": "Sun 26 Jun 2022 06:07",
          "username": "AWS_Aspirant_007",
          "content": "C is the right ans",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 618579,
          "date": "Sun 19 Jun 2022 09:35",
          "username": "221898",
          "content": "https://aws.amazon.com/blogs/security/how-to-auto-remediate-internet-accessible-ports-with-aws-config-and-aws-system-manager/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 605863,
          "date": "Mon 23 May 2022 08:41",
          "username": "Mikilo",
          "content": "C is Correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 595795,
          "date": "Mon 02 May 2022 03:19",
          "username": "Finger41",
          "content": "C - \\\"Not only can AWS Config monitor and detect deviations from desired configurations, but it can also be used together with other services, such as AWS Systems Manager, to automatically remediate such deviations when they are detected.\\\"<br><br>https://aws.amazon.com/blogs/security/how-to-auto-remediate-internet-accessible-ports-with-aws-config-and-aws-system-manager/<br><br>Solution overview is there.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 561023,
          "date": "Fri 04 Mar 2022 21:16",
          "username": "roka_ua",
          "content": "Vote for c",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555799,
          "date": "Fri 25 Feb 2022 06:47",
          "username": "az102",
          "content": "C.  https://aws.amazon.com/blogs/mt/manage-custom-aws-config-rules-with-remediations-using-conformance-packs/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 540163,
          "date": "Fri 04 Feb 2022 04:21",
          "username": "QAMISO",
          "content": "ANSWER IS C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516393,
          "date": "Tue 04 Jan 2022 10:17",
          "username": "MrkJobs",
          "content": "C<br>from amazon documentation:<br>\\\"The custom AWS Config rule checks if there are any Security Groups with a rule that allows access for a CIDR block larger than /16. This means that any Security Group rule added that is larger=E2=80=9410.0.0.0/10 or 10.0.0.0/1=E2=80=94makes the Security Group non-compliant. Once the custom AWS Config rule marks it as non-compliant, it triggers an SSM automation document that calls the remediation Lambda function that removes the non-compliant rule from the Security Group.\\\"<br>https://aws.amazon.com/blogs/mt/manage-custom-aws-config-rules-with-remediations-using-conformance-packs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 515344,
          "date": "Mon 03 Jan 2022 02:50",
          "username": "szl0144",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508141,
          "date": "Thu 23 Dec 2021 22:17",
          "username": "doc_nta",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 481615,
          "date": "Fri 19 Nov 2021 12:59",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 475971,
          "date": "Thu 11 Nov 2021 04:57",
          "username": "pkb0129pkb0129Finger41",
          "content": "I think A is correct.<br>C- Can you use System manager to modify the Security Group?Agree with C. ... System manager do have the document for security group.A is a solution, however C is the most effective way. See : https://aws.amazon.com/blogs/security/how-to-auto-remediate-internet-accessible-ports-with-aws-config-and-aws-system-manager/",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 479282,
          "date": "Tue 16 Nov 2021 10:53",
          "username": "pkb0129",
          "content": "Agree with C. ... System manager do have the document for security group.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595798,
          "date": "Mon 02 May 2022 03:21",
          "username": "Finger41",
          "content": "A is a solution, however C is the most effective way. See : https://aws.amazon.com/blogs/security/how-to-auto-remediate-internet-accessible-ports-with-aws-config-and-aws-system-manager/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route 53 to route traffic.<br>The company also has a static website that is configured in an Amazon S3 bucket.<br>A SysOps administrator must use the static website as a backup to the web application. The failover to the static website must be fully automated.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Create a primary failover routing policy record. Configure the value to be the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to switch from the primary website to the secondary website when the health check fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a primary failover routing policy record. Configure the value to be the ALB.  Associate the record with a Route 53 health check.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a secondary failover routing policy record. Configure the value to be the static website. Associate the record with a Route 53 health check.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a secondary failover routing policy record. Configure the value to be the static website.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 46 discussion",
      "discusstion": [
        {
          "id": 744688,
          "date": "Wed 14 Dec 2022 04:34",
          "username": "MrMLB",
          "content": "D E<br><br>The combination of actions that will meet these requirements is creating a primary failover routing policy record, configuring the value to be the ALB, and creating a secondary failover routing policy record, configuring the value to be the static website. This allows the SysOps administrator to use the static website as a backup to the web application, and automatically fail over to the static website if the health check fails. The administrator can also associate the record with a Route 53 health check to monitor the health of the web application and trigger the failover if necessary. Option A is not appropriate for this situation, as it does not include the secondary failover routing policy record that is necessary for automatic failover. Option B is not appropriate, as it does not involve configuring the routing policy records, which are necessary for directing traffic to the appropriate website. Option C is not appropriate, as it does not include the secondary failover routing policy record that is necessary for automatic failover.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 738691,
          "date": "Thu 08 Dec 2022 07:29",
          "username": "michaldavid",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721531,
          "date": "Fri 18 Nov 2022 20:36",
          "username": "Liongeek",
          "content": "Ans: CD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714430,
          "date": "Wed 09 Nov 2022 10:34",
          "username": "Capy",
          "content": "C E<br>read carefully this link. It's mentioned that for the primary routiong policy you must specify Helat Check YES, instead for the secondary routing failover routing policy with don't specify Healt Check",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713322,
          "date": "Mon 07 Nov 2022 22:12",
          "username": "Nono90",
          "content": "https://aws.amazon.com/pt/premiumsupport/knowledge-center/fail-over-s3-r53/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 706870,
          "date": "Sat 29 Oct 2022 03:30",
          "username": "andreapg",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html#dns-failover-types-active-passive-one-resource",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 699707,
          "date": "Thu 20 Oct 2022 10:44",
          "username": "Surferbolt",
          "content": "CE.  No health check for secondary failover.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 663821,
          "date": "Thu 08 Sep 2022 19:04",
          "username": "princajen",
          "content": "Create the failover endpoint<br>Open the Amazon Route 53 console, and then choose Hosted zones.<br>Choose the hosted zone that you want to create the record for.<br>Choose Create record, and input the following:<br>For Record name, use the same value that you entered for the primary record.<br>For Record type, choose A =E2=80=93 Routes traffic to an IPV4 address and some AWS resources.<br>For Alias, choose Yes.<br>Note: Aliases automatically use a time to live (TTL) that matches the alias target.<br>For Alias Target, choose the S3 bucket that you created previously.<br>For Routing Policy, choose Failover.<br>For Failover Record Type, choose Secondary.<br>For Set ID, enter a name.<br>Note: The name for the Set ID on your failover endpoint must be different from the name of the Set ID on your primary endpoint.<br>For Associate with Health Check, choose No.<br>Choose Create records.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 663072,
          "date": "Thu 08 Sep 2022 05:44",
          "username": "Braggprincajen",
          "content": "In the Create the failover endpoint section : For Associate with Health Check, choose No<br>https://aws.amazon.com/pt/premiumsupport/knowledge-center/fail-over-s3-r53/Good call out!",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 663819,
          "date": "Thu 08 Sep 2022 19:02",
          "username": "princajen",
          "content": "Good call out!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657920,
          "date": "Sat 03 Sep 2022 02:07",
          "username": "kati2k22czXAvengerhaxaffee",
          "content": "C and D<br>Here a scenario with step by step<br>https://aws.amazon.com/pt/premiumsupport/knowledge-center/fail-over-s3-r53/CE. <br>It cannot be \\\"CD\\\" Please read your link:<br> Create the failover endpoint<br>...<br>For Failover Record Type, choose Secondary.<br>...<br>For Associate with Health Check, choose No.Verified OK",
          "upvote_count": "332",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 671412,
          "date": "Sat 17 Sep 2022 12:03",
          "username": "XAvenger",
          "content": "CE. <br>It cannot be \\\"CD\\\" Please read your link:<br> Create the failover endpoint<br>...<br>For Failover Record Type, choose Secondary.<br>...<br>For Associate with Health Check, choose No.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 658635,
          "date": "Sat 03 Sep 2022 17:56",
          "username": "haxaffee",
          "content": "Verified OK",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator needs to design a high-traffic static website. The website must be highly available and must provide the lowest possible latency to users across the globe.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket, and upload the website content to the S3 bucket. Create an Amazon CloudFront distribution in each AWS Region, and set the S3 bucket as the origin. Use Amazon Route 53 to create a DNS record that uses a geolocation routing policy to route traffic to the correct CloudFront distribution based on where the request originates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 bucket, and upload the website content to the S3 bucket. Create an Amazon CloudFront distribution, and set the S3 bucket as the origin. Use Amazon Route 53 to create an alias record that points to the CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Application Load Balancer (ALB) and a target group. Create an Amazon EC2 Auto Scaling group with at least two EC2 instances in the associated target group. Store the website content on the EC2 instances. Use Amazon Route 53 to create an alias record that points to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) and a target group in two Regions. Create an Amazon EC2 Auto Scaling group in each Region with at least two EC2 instances in each target group. Store the website content on the EC2 instances. Use Amazon Route 53 to create a DNS record that uses a geolocation routing policy to route traffic to the correct ALB based on where the request originates.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 47 discussion",
      "discusstion": [
        {
          "id": 370859,
          "date": "Sat 23 Oct 2021 07:42",
          "username": "RicardoD",
          "content": "B is the answer<br><br>CloudFront is not AWS-region specific",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 397785,
          "date": "Sun 31 Oct 2021 16:42",
          "username": "SDusari",
          "content": "Answer is B<br><br>Cloudfront serves globally, not region specific",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 629734,
          "date": "Sun 10 Jul 2022 23:03",
          "username": "mohamedba",
          "content": "A is wrong, CloudFront is a global service, not region specific.<br>Answer is clearly 1000% B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 625490,
          "date": "Fri 01 Jul 2022 02:28",
          "username": "Mambo_king",
          "content": "B make sense",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625141,
          "date": "Thu 30 Jun 2022 11:01",
          "username": "ceeee",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 618654,
          "date": "Sun 19 Jun 2022 13:20",
          "username": "221898",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 598802,
          "date": "Mon 09 May 2022 04:00",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-cloudfront-walkthrough.html as per documentation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591080,
          "date": "Sun 24 Apr 2022 15:25",
          "username": "Mecdrox",
          "content": "B CloudFront is global not region specific.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 573765,
          "date": "Wed 23 Mar 2022 17:27",
          "username": "biancodaAWS21",
          "content": "I believe the answer is A. <br>Yes, CloudFront is a global service, but the edge cache are regional.<br><br>https://aws.amazon.com/cloudfront/faqs/<br>How does Amazon CloudFront provide higher performance?<br>Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers.You make a good point - edge caches are regional. However, the CloudFront Distribution is the name given to the origin of the content you plan to distribute.The CloudFront Distribution/ origin is global.<br><br>Option B is the most correct.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 603933,
          "date": "Thu 19 May 2022 15:33",
          "username": "AWS21",
          "content": "You make a good point - edge caches are regional. However, the CloudFront Distribution is the name given to the origin of the content you plan to distribute.The CloudFront Distribution/ origin is global.<br><br>Option B is the most correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561070,
          "date": "Fri 04 Mar 2022 23:26",
          "username": "roka_ua",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 516584,
          "date": "Tue 04 Jan 2022 13:31",
          "username": "MrkJobs",
          "content": "answer B:<br>question focus word: Alias, geolocal<br>don't need 53 geolocal configuration<br>from aws documentation:<br>\\\"Include the cloudfront.net domain name, or a CNAME alias that you create\\\"<br>\\\"Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers. Amazon CloudFront ensures that \\\"end-user requests are served by the closest edge location.<br>https://aws.amazon.com/cloudfront/faqs/?nc1h_ls",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 516581,
          "date": "Tue 04 Jan 2022 13:30",
          "username": "MrkJobs",
          "content": "answer B:<br>question focus word: Alias, geolocal<br>don't need 53 geolocal configuration<br>from aws documentation:<br>\\\"Include the cloudfront.net domain name, or a CNAME alias that you create\\\"<br>\\\"Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers. Amazon CloudFront ensures that \\\"end-user requests are served by the closest edge location.<br>https://aws.amazon.com/cloudfront/faqs/?nc1h_ls",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 515688,
          "date": "Mon 03 Jan 2022 13:24",
          "username": "szl0144",
          "content": "I VOTE B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 508147,
          "date": "Thu 23 Dec 2021 22:42",
          "username": "doc_nta",
          "content": "I am sure the answer is b",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 492887,
          "date": "Fri 03 Dec 2021 02:39",
          "username": "peterjohn",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482178,
          "date": "Sat 20 Nov 2021 01:39",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 343531,
          "date": "Wed 06 Oct 2021 03:05",
          "username": "James136432453",
          "content": "B.  CloudFront distributions are global",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics application is running on an Amazon EC2 instance. A SysOps administrator must add custom dimensions to the metrics collected by the Amazon<br>CloudWatch agent.<br>How can the SysOps administrator meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Create a custom shell script to extract the dimensions and collect the metrics using the Amazon CloudWatch agent.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to evaluate the required custom dimensions and send the metrics to Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to collect the metrics from AWS CloudTrail and send the metrics to an Amazon CloudWatch Logs group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an append_dimensions field in the Amazon CloudWatch agent configuration file to collect the metrics.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 47 discussion",
      "discusstion": [
        {
          "id": 745103,
          "date": "Wed 14 Dec 2022 14:16",
          "username": "BietTuot",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 738693,
          "date": "Thu 08 Dec 2022 07:30",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656632,
          "date": "Thu 01 Sep 2022 21:50",
          "username": "princajen",
          "content": "In custom metrics, the --dimensions parameter is common. A dimension further clarifies what the metric is and what data it stores. You can have up to 30 dimensions assigned to one metric, and each dimension is defined by a name and value pair<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores its data in an Amazon S3 bucket. The company is required to classify the data and find any sensitive personal information in its S3 files.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule to discover sensitive personal information in the S3 files and mark them as noncompliant.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 event-driven artificial intelligence/machine learning (AI/ML) pipeline to classify sensitive personal information by using Amazon Rekognition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon GuardDuty. Configure S3 protection to monitor all data inside Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Amazon Macie. Create a discovery job that uses the managed data identifier.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 48 discussion",
      "discusstion": [
        {
          "id": 738699,
          "date": "Thu 08 Dec 2022 07:32",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721532,
          "date": "Fri 18 Nov 2022 20:38",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 693029,
          "date": "Wed 12 Oct 2022 13:54",
          "username": "Surferbolt",
          "content": "D.  Amazon Macie searches S3 buckets for sensitive personal information.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656635,
          "date": "Thu 01 Sep 2022 21:52",
          "username": "princajen",
          "content": "To discover sensitive data with Amazon Macie, you create and run sensitive data discovery jobs. A sensitive data discovery job analyzes objects in Amazon Simple Storage Service (Amazon S3) buckets to determine whether the objects contain sensitive data, and it provides detailed reports of the sensitive data that it finds and the analysis that it performs. By creating and running jobs, you can automate discovery, logging, and reporting of sensitive data in S3 buckets.<br>https://docs.aws.amazon.com/macie/latest/user/data-classification.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages an application that uses Amazon ElastiCache for Redis with two extra-large nodes spread across two different Availability Zones. The company's IT team discovers that the ElastiCache for Redis cluster has 75% freeable memory. The application must maintain high availability.<br>What is the MOST cost-effective way to resize the cluster?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Decrease the number of nodes in the ElastiCache for Redis cluster from 2 to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a new ElastiCache for Redis cluster that uses large node types. Migrate the data from the original cluster to the new cluster. After the process is complete, shut down the original cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new ElastiCache for Redis cluster that uses large node types. Take a backup from the original cluster, and restore the backup in the new cluster. After the process is complete, shut down the original cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Perform an online resizing for the ElastiCache for Redis cluster. Change the node types from extra-large nodes to large nodes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 49 discussion",
      "discusstion": [
        {
          "id": 376763,
          "date": "Sat 23 Oct 2021 01:51",
          "username": "lei00",
          "content": "The answer should be D. <br>ElastiCache can be scaled up/down online in the console, simply modify the node type you want, with little downtime.<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 599351,
          "date": "Tue 10 May 2022 03:34",
          "username": "Finger41",
          "content": "D - https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561075,
          "date": "Fri 04 Mar 2022 23:30",
          "username": "roka_ua",
          "content": "Vote for D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 560244,
          "date": "Thu 03 Mar 2022 18:07",
          "username": "Rick365",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 535614,
          "date": "Sat 29 Jan 2022 18:19",
          "username": "JackSurya",
          "content": "D is correct.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517266,
          "date": "Wed 05 Jan 2022 09:20",
          "username": "MrkJobs",
          "content": "D<br>Choose the node type you want to scale to from the Node type list<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 502936,
          "date": "Thu 16 Dec 2021 14:18",
          "username": "MrMLB",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 482205,
          "date": "Sat 20 Nov 2021 02:59",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 409395,
          "date": "Sun 31 Oct 2021 19:58",
          "username": "jkwek",
          "content": "Answer is D. <br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html<br>As demand on your clusters changes, you might decide to improve performance or reduce costs by changing the number of shards in your Redis (cluster mode enabled) cluster. We recommend using online horizontal scaling to do so, because it allows your cluster to continue serving requests during the scaling process.<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 401009,
          "date": "Wed 27 Oct 2021 00:25",
          "username": "CloudyTexas",
          "content": "D is correct.<br><br>A-does not meet HA requirement<br>B-not efficient way to resize the cluster<br>C-have down time",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 344430,
          "date": "Thu 14 Oct 2021 18:49",
          "username": "binhdt2611",
          "content": "I think answer is A<br><br>AWS ElastiCache Redis allows to remove nodes from cluster online.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.DeleteNode.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web portal on Amazon EC2 instances. The web portal uses an Elastic Load Balancer (ELB) and Amazon Route 53 for its public DNS service.<br>The ELB and the EC2 instances are deployed by way of a single AWS CloudFormation stack in the us-east-1 Region. The web portal must be highly available across multiple Regions.<br>Which configuration will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Deploy a copy of the stack in the us-west-2 Region. Create a single start of authority (SOA) record in Route 53 that includes the IP address from each ELB.  Configure the SOA record with health checks. Use the ELB in us-east-1 as the primary record and the ELB in us-west-2 as the secondary record.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a copy of the stack in the us-west-2 Region. Create an additional A record in Route 53 that includes the ELB in us-west-2 as an alias target. Configure the A records with a failover routing policy and health checks. Use the ELB in us-east-1 as the primary record and the ELB in us-west-2 as the secondary record.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new group of EC2 instances in the us-west-2 Region. Associate the new EC2 instances with the existing ELB, and configure loadbalancer health checks on all EC2 instances. Configure the ELB to update Route 53 when EC2 instances in us-west-2 fail health checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new group of EC2 instances in the us-west-2 Region. Configure EC2 health checks on all EC2 instances in each Region. Configure a peering connection between the VPCs. Use the VPC in us-east-1 as the primary record and the VPC in us-west-2 as the secondary record.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 49 discussion",
      "discusstion": [
        {
          "id": 738702,
          "date": "Thu 08 Dec 2022 07:34",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721536,
          "date": "Fri 18 Nov 2022 20:40",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700263,
          "date": "Thu 20 Oct 2022 22:01",
          "username": "Shruti09753",
          "content": "B should be the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 699713,
          "date": "Thu 20 Oct 2022 10:55",
          "username": "Surferbolt",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688657,
          "date": "Fri 07 Oct 2022 15:22",
          "username": "hippius",
          "content": "Sure It's B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673592,
          "date": "Mon 19 Sep 2022 21:49",
          "username": "Gianiluca",
          "content": "Agree it's B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 662722,
          "date": "Wed 07 Sep 2022 18:53",
          "username": "Balliache520505",
          "content": "The answer is B.  When you create a hosted zone, Route 53 automatically creates a name server (NS) record and a start of authority (SOA) record for the zone. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html#migrate-dns-create-hosted-zone",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 661742,
          "date": "Wed 07 Sep 2022 01:47",
          "username": "AAAaat",
          "content": "B.  the doc also state you rarely would ever need to change anything about SOA which is automoatically created.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659567,
          "date": "Sun 04 Sep 2022 23:53",
          "username": "princajen",
          "content": "No matter how I read it, I always go for B!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659558,
          "date": "Sun 04 Sep 2022 23:37",
          "username": "andrerkn",
          "content": "Going with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658696,
          "date": "Sat 03 Sep 2022 19:30",
          "username": "haxaffee",
          "content": "It's not possible to create or add failover to SOA records and you can also not Alias target them. Wrong in so many ways. Please read https://en.wikipedia.org/wiki/SOA_record<br>B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658687,
          "date": "Sat 03 Sep 2022 19:22",
          "username": "kati2k22cz",
          "content": "Guess is B Because the use of routing policy and health checks",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is investigating why a user has been unable to use RDP to connect over the internet from their home computer to a bastion server running on an Amazon EC2 Windows instance.<br>Which of the following are possible causes of this issue? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A. A network ACL associated with the bastion's subnet is blocking the network traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The instance does not have a private IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The route table associated with the bastion's subnet does not have a route to the internet gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The security group for the instance does not have an inbound rule on port 22.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. The security group for the instance does not have an outbound rule on port 3389.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 50 discussion",
      "discusstion": [
        {
          "id": 658700,
          "date": "Sat 03 Sep 2022 19:31",
          "username": "haxaffee",
          "content": "Correct.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 744692,
          "date": "Wed 14 Dec 2022 04:48",
          "username": "MrMLB",
          "content": "The possible causes of this issue are:<br>A.  A network ACL associated with the bastion's subnet is blocking the network traffic.<br>C.  The route table associated with the bastion's subnet does not have a route to the internet gateway.<br>E.  The security group for the instance does not have an outbound rule on port 3389.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728465,
          "date": "Sun 27 Nov 2022 18:13",
          "username": "Jamshif01Jamshif01",
          "content": "A - can be<br>B - he is connecting via public anyway this is irrelevant<br>C - yes it should have access to internet so he can connect outside<br>D - this is for linux only<br>E - can be<br><br>so it's either AE or CE<br>I vote for CEI was wrong about E it says outbound<br>so the answer is AC 100%",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 728468,
          "date": "Sun 27 Nov 2022 18:15",
          "username": "Jamshif01",
          "content": "I was wrong about E it says outbound<br>so the answer is AC 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721087,
          "date": "Fri 18 Nov 2022 07:02",
          "username": "Liongeek",
          "content": "Ans: A&C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 673549,
          "date": "Mon 19 Sep 2022 20:23",
          "username": "GianilucaLiongeekSurferboltnikkoe",
          "content": "C and E - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/troubleshoot-connect-windows-instance.htmlOutbound is not a concern here.Not E.  Security Groups are stateful, inbound rules will apply to outbound rules.AC, outbound traffic has nothing to do with this",
          "upvote_count": "2112",
          "selected_answers": ""
        },
        {
          "id": 721088,
          "date": "Fri 18 Nov 2022 07:03",
          "username": "Liongeek",
          "content": "Outbound is not a concern here.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705215,
          "date": "Thu 27 Oct 2022 06:10",
          "username": "Surferbolt",
          "content": "Not E.  Security Groups are stateful, inbound rules will apply to outbound rules.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 679712,
          "date": "Mon 26 Sep 2022 14:11",
          "username": "nikkoe",
          "content": "AC, outbound traffic has nothing to do with this",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts with consolidated billing enabled. Organization member account owners want the benefits of Reserved Instances (RIs) but do not want to share RIs with other accounts.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. Purchase RIs in individual member accounts. Disable RI discount sharing in the management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase RIs in individual member accounts. Disable RI discount sharing in the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase RIs in the management account. Disable RI discount sharing in the management account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase RIs in the management account. Disable RI discount sharing in the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 51 discussion",
      "discusstion": [
        {
          "id": 409280,
          "date": "Wed 13 Oct 2021 09:19",
          "username": "HuycathalCHRIS12722222CHRIS12722222",
          "content": "Answer is A.  https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/<br><br>RI discounts apply to accounts in an organization's consolidated billing family depending upon whether RI sharing is turned on or off for the accounts. By default, RI sharing for all accounts in an organization is turned on. The management account of an organization can change this setting by turning off RI sharing for an account.<br><br>The capacity reservation for an RI applies only to the account the RI was purchased on, no matter whether RI sharing is turned on or off.I think this is the correct answer. After all I think purchasing any service in the master account is generally not advised.B is the correct answer here.<br>Based on the article you provided.<br>Purchase RI in the member accts allows the member acct to enjoy RI benefit. Disabling sharing in the member acct ensures that only them enjoy the RI benefitWhat i meant was to disable RI sharing for member accts via the org management acct. Reading the options again, i think the answer is A",
          "upvote_count": "17112",
          "selected_answers": ""
        },
        {
          "id": 415596,
          "date": "Thu 04 Nov 2021 06:28",
          "username": "cathal",
          "content": "I think this is the correct answer. After all I think purchasing any service in the master account is generally not advised.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 548389,
          "date": "Wed 16 Feb 2022 08:58",
          "username": "CHRIS12722222CHRIS12722222",
          "content": "B is the correct answer here.<br>Based on the article you provided.<br>Purchase RI in the member accts allows the member acct to enjoy RI benefit. Disabling sharing in the member acct ensures that only them enjoy the RI benefitWhat i meant was to disable RI sharing for member accts via the org management acct. Reading the options again, i think the answer is A",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 558064,
          "date": "Mon 28 Feb 2022 14:14",
          "username": "CHRIS12722222",
          "content": "What i meant was to disable RI sharing for member accts via the org management acct. Reading the options again, i think the answer is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 606404,
          "date": "Tue 24 May 2022 03:31",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-behavior.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591088,
          "date": "Sun 24 Apr 2022 15:34",
          "username": "Mecdrox",
          "content": "Purchase RIs in individual member accounts. Disable RI discount sharing in the<br>management account.<br><br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-behavior.html<br><br>For billing purposes, the consolidated billing feature of AWS Organizations treats all the accounts in the organization as<br>one account. This means that all accounts in the organization can receive the hourly cost benefit of Reserved Instances<br>that are purchased by any other account.<br>However, RIs can be purchased in individual member accounts and those accounts receive the discount first. To ensure<br>that discounts are not shared with other accounts in the organization you can turn off Reserved Instance discount sharing<br>on the Preferences page on the Billing and Cost Management console.<br>This means that RIs and Savings Plans discounts aren't shared between any accounts that have sharing turned off.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 517356,
          "date": "Wed 05 Jan 2022 11:14",
          "username": "MrkJobs",
          "content": "A<br>\\\"The management account of an organization can turn off Reserved Instance (RI) discount and Savings Plans discount sharing for any accounts in that organization\\\"<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html<br><br>no C-D -> https://docs.aws.amazon.com/organizations/latest/userguide/orgs_best-practices_mgmt-acct.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 482284,
          "date": "Sat 20 Nov 2021 07:16",
          "username": "nqthien041292",
          "content": "Vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 474368,
          "date": "Mon 08 Nov 2021 16:37",
          "username": "chanez",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 437958,
          "date": "Thu 04 Nov 2021 16:20",
          "username": "Bigbearcn",
          "content": "Answer is A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 409419,
          "date": "Wed 03 Nov 2021 09:20",
          "username": "jkwekjuraj666",
          "content": "Answer is C. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html<br>The management account of an organization can turn off Reserved Instance (RI) discount and Savings Plans discount sharing for any accounts in that organization, including the management account. This means that RIs and Savings Plans discounts aren't shared between any accounts that have sharing turned off. To share an RI or Savings Plans discount with an account, both accounts must have sharing turned on.\\\"If RI sharing is turned off for an account in an organization, then:<br>RI discounts apply only to the account that purchased the RIs.\\\" - only to accounts that purchased the RI, if you purchased it in management account it won't apply to member account",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 518853,
          "date": "Fri 07 Jan 2022 09:55",
          "username": "juraj666",
          "content": "\\\"If RI sharing is turned off for an account in an organization, then:<br>RI discounts apply only to the account that purchased the RIs.\\\" - only to accounts that purchased the RI, if you purchased it in management account it won't apply to member account",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 376777,
          "date": "Thu 30 Sep 2021 05:17",
          "username": "lei00",
          "content": "The answer should be C. <br>To share an RI or Savings Plans discount with an account, both accounts must have sharing turned on.<br><br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is examining the following AWS CloudFormation template:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04242/0003100001.jpg\" class=\"in-exam-image\"><br>Why will the stack creation fail?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. The Outputs section of the CloudFormation template was omitted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Parameters section of the CloudFormation template was omitted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The PrivateDnsName cannot be set from a CloudFormation template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The VPC was not specified in the CloudFormation template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 51 discussion",
      "discusstion": [
        {
          "id": 721090,
          "date": "Fri 18 Nov 2022 07:05",
          "username": "Liongeek",
          "content": "Ans: C<br>PrivateDNSEndpoint is an output, not a parameter",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658702,
          "date": "Sat 03 Sep 2022 19:35",
          "username": "haxaffee",
          "content": "C is correct. See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html Only available is PrivateDnsNameOptions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's IT department noticed an increase in the spend of their developer AWS account. There are over 50 developers using the account, and the finance team wants to determine the service costs incurred by each developer.<br>What should a SysOps administrator do to collect this information? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. Activate the createdBy tag in the account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Analyze the usage with Amazon CloudWatch dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Analyze the usage with Cost Explorer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Trusted Advisor to track resource usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a billing alarm in AWS Budgets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 52 discussion",
      "discusstion": [
        {
          "id": 370864,
          "date": "Sat 30 Oct 2021 02:33",
          "username": "RicardoD",
          "content": "A | C are the answers",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 599379,
          "date": "Tue 10 May 2022 05:12",
          "username": "Finger41",
          "content": "A & C - docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tags.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 515745,
          "date": "Mon 03 Jan 2022 14:10",
          "username": "szl0144",
          "content": "vote ac",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 482267,
          "date": "Sat 20 Nov 2021 06:10",
          "username": "nqthien041292",
          "content": "Vote AC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 341743,
          "date": "Tue 12 Oct 2021 07:46",
          "username": "Azaad78",
          "content": "A, C - are correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new application runs on Amazon EC2 instances and accesses data in an Amazon RDS database instance. When fully deployed in production, the application fails. The database can be queried from a console on a bastion host. When looking at the web server logs, the following error is repeated multiple times:<br>*** Error Establishing a Database Connection<br>Which of the following may be causes of the connectivity problems? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. The security group for the database does not have the appropriate egress rule from the database to the web server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The certificate used by the web server is not trusted by the RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The security group for the database does not have the appropriate ingress rule from the web server to the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The port used by the application developer does not match the port specified in the RDS configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. The database is still being created and is not available for connectivity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 52 discussion",
      "discusstion": [
        {
          "id": 744693,
          "date": "Wed 14 Dec 2022 04:57",
          "username": "MrMLB",
          "content": "A and C are possible causes of the connectivity problems.<br><br>A is a possible cause because the security group for the database controls which other resources can access the database. If the security group does not have the appropriate egress rule from the database to the web server, the web server will not be able to access the database.<br><br>C is a possible cause because the security group for the database also controls which other resources can access the database. If the security group does not have the appropriate ingress rule from the web server to the database, the web server will not be able to access the database.<br><br>B, D, and E are not likely causes of the connectivity problems. The certificate used by the web server is not relevant to the connectivity between the web server and the RDS instance. The port used by the application developer does not need to match the port specified in the RDS configuration, and the database being created is not relevant to the connectivity problems.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739842,
          "date": "Fri 09 Dec 2022 07:28",
          "username": "michaldavid",
          "content": "C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721092,
          "date": "Fri 18 Nov 2022 07:07",
          "username": "Liongeek",
          "content": "Ans: C&D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 694115,
          "date": "Thu 13 Oct 2022 18:48",
          "username": "Surferbolt",
          "content": "CD.  Database can be queried from Bastion, so E is out. Security groups are stateful, so you don't have to bother with the egress rules in this situation, as long as you have the proper ingress rule.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 688659,
          "date": "Fri 07 Oct 2022 15:28",
          "username": "hippius",
          "content": "CD because the database can be queried from the bastion",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 661764,
          "date": "Wed 07 Sep 2022 02:07",
          "username": "AAAaat",
          "content": "It can't be E because it says the database can be queried from bastion host",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 659563,
          "date": "Sun 04 Sep 2022 23:43",
          "username": "andrerkn",
          "content": "CD for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 658705,
          "date": "Sat 03 Sep 2022 19:39",
          "username": "haxaffee",
          "content": "I go with CD here. The question states<br><br>\\\"When fully deployed in production, the application fails. The database can be queried from a console on a bastion host.\\\"<br><br>Stupid question if the answer is that the DB is not in state available. Thats just always true.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 656646,
          "date": "Thu 01 Sep 2022 22:02",
          "username": "princajenprincajen",
          "content": "The RDS DB instance is in a state other than available, so it can't accept connections.<br>The source you use to connect to the DB instance is missing from the sources authorized to access the DB instance in your security group, network access control lists (ACLs), or local firewalls.<br>The wrong DNS name or endpoint is used to connect to the DB instance.<br>The Multi-AZ DB instance failed over, and the secondary DB instance uses a subnet or route table that doesn't allow inbound connections.<br>The user authentication is incorrect because of one of the following reasons:<br>You're using an incorrect user name or password at the database level to access the instance from the DB client.<br>You don't have the required database permissions to access the instance.<br>The client is running on a version that's incompatible with the database version.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/After reviewing correct answers are C,D.  I missed the part that it can be queried from bastion host.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 663844,
          "date": "Thu 08 Sep 2022 19:22",
          "username": "princajen",
          "content": "After reviewing correct answers are C,D.  I missed the part that it can be queried from bastion host.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps Administrator runs a web application that is using a microservices approach whereby different responsibilities of the application have been divided in a separate microservice running on a different Amazon EC2 instance. The administrator has been tasked with reconfiguring the infrastructure to support this approach.<br>How can the administrator accomplish this with the LEAST administrative overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudFront to log the URL and forward the request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudFront to rewrite the header based on the microservice and forward the request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Application Load Balancer (ALB) and do path-based routing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a Network Load Balancer (NLB) and do path-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 53 discussion",
      "discusstion": [
        {
          "id": 341744,
          "date": "Sat 25 Sep 2021 02:47",
          "username": "Azaad78shuda",
          "content": "C - is correct. ALBs can do HTTP/HTTPS base smart routing.ref: https://aws.amazon.com/premiumsupport/knowledge-center/elb-achieve-path-based-routing-alb/",
          "upvote_count": "84",
          "selected_answers": ""
        },
        {
          "id": 438877,
          "date": "Tue 02 Nov 2021 10:27",
          "username": "shuda",
          "content": "ref: https://aws.amazon.com/premiumsupport/knowledge-center/elb-achieve-path-based-routing-alb/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 599378,
          "date": "Tue 10 May 2022 05:10",
          "username": "Finger41",
          "content": "C - https://aws.amazon.com/getting-started/container-microservices-tutorial/module-four/ This is for ECS and ECR however same principle. And this article for EC2, all based on Target Groups : https://aws.amazon.com/premiumsupport/knowledge-center/elb-achieve-path-based-routing-alb/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 515739,
          "date": "Mon 03 Jan 2022 14:06",
          "username": "szl0144",
          "content": "vote C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482236,
          "date": "Sat 20 Nov 2021 04:09",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 370868,
          "date": "Sun 10 Oct 2021 23:54",
          "username": "RicardoD",
          "content": "C is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A compliance team requires all administrator passwords for Amazon RDS DB instances to be changed at least annually.<br>Which solution meets this requirement in the MOST operationally efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>A. Store the database credentials in AWS Secrets Manager. Configure automatic rotation for the secret every 365 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the database credentials as a parameter in the RDS parameter group. Create a database trigger to rotate the password every 365 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database credentials in a private Amazon S3 bucket. Schedule an AWS Lambda function to generate a new set of credentials every 365 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the database credentials in AWS Systems Manager Parameter Store as a secure string parameter. Configure automatic rotation for the parameter every 365 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 53 discussion",
      "discusstion": [
        {
          "id": 744695,
          "date": "Wed 14 Dec 2022 05:01",
          "username": "MrMLB",
          "content": "D<br><br>The most operationally efficient solution would be to store the database credentials in AWS Systems Manager Parameter Store as a secure string parameter, and then configure automatic rotation for the parameter every 365 days. This way, the credentials will be securely stored and automatically rotated as required by the compliance team. Options A and C both involve storing the credentials in different locations and using different methods for rotating the credentials, which would not be as operationally efficient. Option B involves using a database trigger to rotate the password, but this would require additional setup and maintenance, and may not be as reliable as using automatic rotation in AWS Systems Manager.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739844,
          "date": "Fri 09 Dec 2022 07:29",
          "username": "michaldavid",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721095,
          "date": "Fri 18 Nov 2022 07:14",
          "username": "Liongeek",
          "content": "Ams: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658727,
          "date": "Sat 03 Sep 2022 20:14",
          "username": "kati2k22cz",
          "content": "A is correct. We can confirm here<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple Amazon EC2 instances that run a resource-intensive application in a development environment. A SysOps administrator is implementing a solution to stop these EC2 instances when they are not in use.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>A. Assess AWS CloudTrail logs to verify that there is no EC2 API activity. Invoke an AWS lambda function to stop the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm to stop the EC2 instances when the average CPU utilization is lower than 5% for a 30-minute period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch metric to stop the EC2 instances when the VolumeReadBytes metric is lower than 500 for a 30-minute period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Config to invoke an AWS Lambda function to stop the EC2 instances based on resource configuration changes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 54 discussion",
      "discusstion": [
        {
          "id": 380519,
          "date": "Wed 22 Sep 2021 10:56",
          "username": "ahaffar",
          "content": "B<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html#AddingStopActions",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 517478,
          "date": "Wed 05 Jan 2022 14:43",
          "username": "MrkJobs",
          "content": "B<br>\\\"You can create an alarm that stops an Amazon EC2 instance when a certain threshold has been met.<br>You can create an alarm that is triggered when the average CPU utilization percentage has been lower than 10 percent for 24 hours, signaling that it is idle and no longer in use\\\"<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html#AddingStopActions",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 491040,
          "date": "Tue 30 Nov 2021 23:43",
          "username": "rexix7368",
          "content": "common moderators!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 482292,
          "date": "Sat 20 Nov 2021 07:34",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 462492,
          "date": "Sat 06 Nov 2021 17:42",
          "username": "Alex1atd",
          "content": "Seem that almost questions from here are in the exam.<br>I've just had the exam a few minutes ago",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 415551,
          "date": "Sun 26 Sep 2021 17:57",
          "username": "samiraninsidebamishrbnbatcjelleyGG1234345PVDMMike777777PVDMpaultronium23Mike777777Alex1atd",
          "content": "new sysops SOA-C02 has 4 labs and they are progressive lab means in order to do Lab2, you must complete Lab1 and so on. 50 questions then submit then Lab1,then submit, then Lab2. Once submitted, you can't come back to previous lab. and result is awaited for 5 days. not like previous on the spot result.answer B. <br>few questions are coming from this set.Did most of the questions here on this site of 54 show up in the exam? Or brand new questions?I am curious.. Is this dump valid or should we follow the 900+ dump?Where is the 900+ dump?yes, the same thing with me. result is not instant.<br>most questions are here, but approx 10 questions are not here. you must study and read discussion here.Did you just use this repository or are you also referring to the 900+ question dump?i'm referring to this repo onlyIs it enough to pass even if you don't know the labs?In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.Do you remember the missing questions?",
          "upvote_count": "41311325151",
          "selected_answers": ""
        },
        {
          "id": 649490,
          "date": "Sat 20 Aug 2022 18:01",
          "username": "bamishr",
          "content": "answer B. <br>few questions are coming from this set.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 422704,
          "date": "Sun 26 Sep 2021 21:03",
          "username": "bnbatcjelleyGG1234345",
          "content": "Did most of the questions here on this site of 54 show up in the exam? Or brand new questions?I am curious.. Is this dump valid or should we follow the 900+ dump?Where is the 900+ dump?",
          "upvote_count": "311",
          "selected_answers": ""
        },
        {
          "id": 424452,
          "date": "Thu 30 Sep 2021 04:57",
          "username": "jelleyGG1234345",
          "content": "I am curious.. Is this dump valid or should we follow the 900+ dump?Where is the 900+ dump?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 435781,
          "date": "Thu 30 Sep 2021 09:46",
          "username": "GG1234345",
          "content": "Where is the 900+ dump?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 442541,
          "date": "Fri 01 Oct 2021 23:55",
          "username": "PVDMMike777777PVDMpaultronium23Mike777777Alex1atd",
          "content": "yes, the same thing with me. result is not instant.<br>most questions are here, but approx 10 questions are not here. you must study and read discussion here.Did you just use this repository or are you also referring to the 900+ question dump?i'm referring to this repo onlyIs it enough to pass even if you don't know the labs?In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.Do you remember the missing questions?",
          "upvote_count": "325151",
          "selected_answers": ""
        },
        {
          "id": 444390,
          "date": "Sun 03 Oct 2021 17:15",
          "username": "Mike777777PVDMpaultronium23Mike777777",
          "content": "Did you just use this repository or are you also referring to the 900+ question dump?i'm referring to this repo onlyIs it enough to pass even if you don't know the labs?In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.",
          "upvote_count": "2515",
          "selected_answers": ""
        },
        {
          "id": 446416,
          "date": "Fri 08 Oct 2021 07:53",
          "username": "PVDMpaultronium23Mike777777",
          "content": "i'm referring to this repo onlyIs it enough to pass even if you don't know the labs?In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.",
          "upvote_count": "515",
          "selected_answers": ""
        },
        {
          "id": 447229,
          "date": "Tue 19 Oct 2021 17:20",
          "username": "paultronium23Mike777777",
          "content": "Is it enough to pass even if you don't know the labs?In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 447903,
          "date": "Sat 30 Oct 2021 23:13",
          "username": "Mike777777",
          "content": "In my experience with my first attempt, prior to using this repo, the labs are not difficult at all. Since you can use the GUI, it makes the process pretty straightforward. you may take a bit to figure out how to navigate the AWS console, but as long as you give yourself plenty of time at the end of the exam you can figure it out. They are 20% of your grade.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 460371,
          "date": "Tue 02 Nov 2021 14:28",
          "username": "Alex1atd",
          "content": "Do you remember the missing questions?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 377755,
          "date": "Tue 21 Sep 2021 03:44",
          "username": "dark4igi",
          "content": "answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is responsible for managing a fleet of Amazon EC2 instances. These EC2 instances upload build artifacts to a third-party service. The third-party service recently implemented a strict IP allow list that requires all build uploads to come from a single IP address.<br>What change should the systems administrator make to the existing build fleet to comply with this new requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>A. Move all of the EC2 instances behind a NAT gateway and provide the gateway IP address to the service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move all of the EC2 instances behind an internet gateway and provide the gateway IP address to the service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move all of the EC2 instances into a single Availability Zone and provide the Availability Zone IP address to the service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move all of the EC2 instances to a peered VPC and provide the VPC IP address to the service.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 54 discussion",
      "discusstion": [
        {
          "id": 658738,
          "date": "Sat 03 Sep 2022 20:28",
          "username": "kati2k22cz",
          "content": "NAT Gateway is the choice. Letter A<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 739847,
          "date": "Fri 09 Dec 2022 07:32",
          "username": "michaldavid",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721099,
          "date": "Fri 18 Nov 2022 07:17",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon CloudFront distribution to deliver its website. Traffic logs for the website must be centrally stored, and all data must be encrypted at rest.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon OpenSearch Service (Amazon Elasticsearch Service) domain with internet access and server-side encryption that uses the default AWS managed customer master key (CMK). Configure CloudFront to use the Amazon OpenSearch Service (Amazon Elasticsearch Service) domain as a log destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon OpenSearch Service (Amazon Elasticsearch Service) domain with VPC access and server-side encryption that uses AES-256. Configure CloudFront to use the Amazon OpenSearch Service (Amazon Elasticsearch Service) domain as a log destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket that is configured with default server-side encryption that uses AES-256. Configure CloudFront to use the S3 bucket as a log destination.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket that is configured with no default encryption. Enable encryption in the CloudFront distribution, and use the S3 bucket as a log destination.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 55 discussion",
      "discusstion": [
        {
          "id": 745856,
          "date": "Thu 15 Dec 2022 09:45",
          "username": "BietTuot",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 739848,
          "date": "Fri 09 Dec 2022 07:36",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 694126,
          "date": "Thu 13 Oct 2022 18:57",
          "username": "Surferbolt",
          "content": "C.  CloudFront logs can be sent to an S3 bucket, and S3 buckets can be encrypted.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 662736,
          "date": "Wed 07 Sep 2022 19:13",
          "username": "Balliache520505",
          "content": "The answer is C.  https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 658798,
          "date": "Sat 03 Sep 2022 22:32",
          "username": "kati2k22cz",
          "content": "C. <br>here some references<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html<br>https://stackoverflow.com/questions/52560188/are-my-s3-objects-encrypted-at-rest-or-not",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization created an Amazon Elastic File System (Amazon EFS) volume with a file system ID of fs-85ba41fc, and it is actively used by 10 Amazon EC2 hosts. The organization has become concerned that the file system is not encrypted.<br>How can this be resolved?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Enable encryption on each host's connection to the Amazon EFS volume. Each connection must be recreated for encryption to take effect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable encryption on the existing EFS volume by using the AWS Command Line Interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable encryption on each host's local drive. Restart each host to encrypt the drive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable encryption on a newly created volume and copy all data from the original volume. Reconnect each host to the new volume.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 56 discussion",
      "discusstion": [
        {
          "id": 408684,
          "date": "Wed 29 Sep 2021 12:10",
          "username": "jkwek",
          "content": "D is correct.<br>https://docs.aws.amazon.com/efs/latest/ug/encryption.html<br>Amazon EFS supports two forms of encryption for file systems, encryption of data in transit and encryption at rest. You can enable encryption of data at rest when creating an Amazon EFS file system. You can enable encryption of data in transit when you mount the file system.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 744703,
          "date": "Wed 14 Dec 2022 05:20",
          "username": "MrMLBforeverlearner",
          "content": "B<br><br>The best solution for resolving this issue is to enable encryption on the existing EFS volume by using the AWS Command Line Interface. This will allow the organization to encrypt the data on the file system without having to recreate any connections or copy any data. Option A involves enabling encryption on each host's connection to the EFS volume, but this would require each connection to be recreated for encryption to take effect. Option C involves enabling encryption on each host's local drive, but this would not encrypt the data on the EFS volume. Option D involves creating a new volume and copying all data from the original volume, but this would be time-consuming and would require each host to be reconnected to the new volume. Enabling encryption on the existing EFS volume using the AWS CLI is the most efficient and effective solution.I noticed a few (wrong) answers like this, and they looked like if they were generated by ChatGPT. So I tried it, and it basically gave me the same answer (just slightly longer but most words are exactly the same).<br>Kind of surprised that ChatGPT is wrong, though, as the AWS doc clearly says \\\"Once you create an EFS file system, you cannot change its encryption setting. This means that you cannot modify an unencrypted file system to make it encrypted. Instead, you need to create a new, encrypted file system.\\\" (https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html)<br>Kind of fun that, if you tell ChatGPT the right answer, it apologies, it admits it's wrong, and also provides with instructions on how to copy the files :D",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751496,
          "date": "Tue 20 Dec 2022 22:18",
          "username": "foreverlearner",
          "content": "I noticed a few (wrong) answers like this, and they looked like if they were generated by ChatGPT. So I tried it, and it basically gave me the same answer (just slightly longer but most words are exactly the same).<br>Kind of surprised that ChatGPT is wrong, though, as the AWS doc clearly says \\\"Once you create an EFS file system, you cannot change its encryption setting. This means that you cannot modify an unencrypted file system to make it encrypted. Instead, you need to create a new, encrypted file system.\\\" (https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html)<br>Kind of fun that, if you tell ChatGPT the right answer, it apologies, it admits it's wrong, and also provides with instructions on how to copy the files :D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744701,
          "date": "Wed 14 Dec 2022 05:17",
          "username": "MrMLB",
          "content": "B<br><br>The best solution for resolving this issue is to enable encryption on the existing EFS volume by using the AWS Command Line Interface. This will allow the organization to encrypt the data on the file system without having to recreate any connections or copy any data. Option A involves enabling encryption on each host's connection to the EFS volume, but this would require each connection to be recreated for encryption to take effect. Option C involves enabling encryption on each host's local drive, but this would not encrypt the data on the EFS volume. Option D involves creating a new volume and copying all data from the original volume, but this would be time-consuming and would require each host to be reconnected to the new volume. Enabling encryption on the existing EFS volume using the AWS CLI is the most efficient and effective solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739849,
          "date": "Fri 09 Dec 2022 07:39",
          "username": "michaldavid",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 711606,
          "date": "Sat 05 Nov 2022 08:39",
          "username": "Masoud11",
          "content": "100% D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 676746,
          "date": "Fri 23 Sep 2022 05:55",
          "username": "Starboy",
          "content": "D is correct as you can't encrypt after the creation of EFS volume.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 606395,
          "date": "Tue 24 May 2022 03:12",
          "username": "Finger41",
          "content": "D -https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 515749,
          "date": "Mon 03 Jan 2022 14:14",
          "username": "szl0144",
          "content": "vote D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482276,
          "date": "Sat 20 Nov 2021 06:41",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 408686,
          "date": "Thu 14 Oct 2021 18:10",
          "username": "jkwek",
          "content": "The reasoning here for answer D is there is no details for existing data encryption. So to play safe, better encrypt then copy data over.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 370836,
          "date": "Thu 23 Sep 2021 16:05",
          "username": "RicardoD",
          "content": "D is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is reviewing AWS Trusted Advisor warnings and encounters a warning for an S3 bucket policy that has open access permissions. While discussing the issue the bucket owner, the administrator realizes the S3 bucket is an origin for an Amazon CloudFront web distribution.<br>Which action should the administrator take to ensure that users access objects in Amazon S3 by using only CloudFront URLs?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Encrypt the S3 bucket content with Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an origin access identity and grant it permissions to read objects in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Assign an IAM user to the CloudFront distribution and grant the user permissions in the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign an IAM role to the CloudFront distribution and grant the role permissions in the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 56 discussion",
      "discusstion": [
        {
          "id": 634438,
          "date": "Thu 21 Jul 2022 09:31",
          "username": "Goozian",
          "content": "When you first set up an Amazon S3 bucket as the origin for a CloudFront distribution, you grant everyone permission to read the files in your bucket. This allows anyone to access your files either through CloudFront or using the Amazon S3 URL.<br><br>To ensure that your users access your files using only CloudFront URLs, regardless of whether the URLs are signed, do the following:<br>1. Create an origin access identity, which is a special CloudFront user, and associate the origin access identity with your distribution<br>2. Change the permissions either on your Amazon S3 bucket or on the files in your bucket so that only the origin access identity has read permission.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606446,
          "date": "Tue 24 May 2022 04:57",
          "username": "Finger41",
          "content": "b - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 592255,
          "date": "Tue 26 Apr 2022 10:59",
          "username": "Mikilo",
          "content": "B is Correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a critical serverless application that uses multiple AWS Lambda functions. Each Lambda function generates 1 GB of log data daily in its own<br>Amazon CloudWatch Logs log group. The company's security team asks for a count of application errors, grouped by type, across all of the log group.<br>What should a SysOps administrator do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Perform a CloudWatch Logs Insights query that uses the stats command and count function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Perform a CloudWatch Logs search that uses the groupby keyword and count function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Perform an Amazon Athena query that uses the SELECT and GROUP BY keywords.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Perform an Amazon RDS query that uses the SELECT and GROUP BY keywords.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 57 discussion",
      "discusstion": [
        {
          "id": 644576,
          "date": "Tue 09 Aug 2022 18:08",
          "username": "by116549",
          "content": "Looks like Athena cannot be used with cloudwatch:<br>https://docs.aws.amazon.com/athena/latest/ug/querying-AWS-service-logs.html<br><br>So Looks to be Insights (option a) is the closest answer:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-examples.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 630761,
          "date": "Wed 13 Jul 2022 05:49",
          "username": "GoozianJ040788",
          "content": "why not Athena ?!I believe Aethna is used more when it is S3 logs. This says cloudwatch logs so should be insights IMO.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 643256,
          "date": "Sat 06 Aug 2022 10:43",
          "username": "J040788",
          "content": "I believe Aethna is used more when it is S3 logs. This says cloudwatch logs so should be insights IMO.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 606458,
          "date": "Tue 24 May 2022 05:13",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html<br><br>CloudWatch Logs Insights includes a purpose-built query language with a few simple but powerful commands. CloudWatch Logs Insights provides sample queries, command descriptions, query autocompletion, and log field discovery to help you get started. Sample queries are included for several types of AWS service logs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 602584,
          "date": "Mon 16 May 2022 14:46",
          "username": "by116549",
          "content": "I would go for CloudWatch Logs Insights as it states the following:<br><br>\\\"CloudWatch Logs Insights automatically discovers fields in logs from AWS services such as Amazon Route 53, AWS Lambda, AWS CloudTrail, and Amazon VPC, and any application or custom log that emits log events as JSON.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 598575,
          "date": "Sun 08 May 2022 15:46",
          "username": "fromnowhere",
          "content": "I'm going with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591201,
          "date": "Sun 24 Apr 2022 20:56",
          "username": "Mecdrox",
          "content": "I think it is A.  https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html STATS:COUNT function",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 590972,
          "date": "Sun 24 Apr 2022 12:00",
          "username": "lotfi50",
          "content": "I think it's C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 589827,
          "date": "Fri 22 Apr 2022 10:35",
          "username": "ovilla",
          "content": "I'm not sure, is it A ?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AWS Service Catalog portfolio to create and manage resources. A SysOps administrator must create a replica of the company's existing AWS infrastructure in a new AWS account.<br>What is the MOST operationally efficient way to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template to use the AWS Service Catalog portfolio in the new AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the new AWS account, manually create an AWS Service Catalog portfolio that duplicates the original portfolio.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run an AWS Lambda function to create a new AWS Service Catalog portfolio based on the output of the DescribePortfolio API operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the AWS Service Catalog portfolio with the new AWS account. Import the portfolio into the new AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 57 discussion",
      "discusstion": [
        {
          "id": 744704,
          "date": "Wed 14 Dec 2022 05:20",
          "username": "MrMLB",
          "content": "D it is",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 739851,
          "date": "Fri 09 Dec 2022 07:45",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658801,
          "date": "Sat 03 Sep 2022 22:46",
          "username": "kati2k22cz",
          "content": "D<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_sharing.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator needs to give users the ability to upload objects to an Amazon S3 bucket. The SysOps administrator creates a presigned URL and provides the URL to a user, but the user cannot upload an object to the S3 bucket. The presigned URL has not expired, and no bucket policy is applied to the S3 bucket.<br>Which of the following could be the cause of this problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. The user has not properly configured the AWS CLI with their access key and secret access key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The SysOps administrator does not have the necessary permissions to upload the object to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The SysOps administrator must apply a bucket policy to the S3 bucket to allow the user to upload the object.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The object already has been uploaded through the use of the presigned URL, so the presigned URL is no longer valid.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 58 discussion",
      "discusstion": [
        {
          "id": 595098,
          "date": "Sat 30 Apr 2022 17:01",
          "username": "summercat",
          "content": "Ans is B. <br><br>A presigned URL gives you access to the object identified in the URL, provided that the creator of the presigned URL has permissions to access that object. That is, if you receive a presigned URL to upload an object, you can upload the object only if the creator of the presigned URL has the necessary permissions to upload that object.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 647857,
          "date": "Wed 17 Aug 2022 02:25",
          "username": "Rick365",
          "content": "agree with summercat<br>Ans is B. <br>A presigned URL gives you access to the object identified in the URL, provided that the creator of the presigned URL has permissions to access that object. That is, if you receive a presigned URL to upload an object, you can upload the object only if the creator of the presigned URL has the necessary permissions to upload that object.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606398,
          "date": "Tue 24 May 2022 03:16",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html<br><br>Anyone with valid security credentials can create a presigned URL. However, for you to successfully upload an object, the presigned URL must be created by someone who has permission to perform the operation that the presigned URL is based upon",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 605910,
          "date": "Mon 23 May 2022 09:50",
          "username": "altonh",
          "content": "The correct answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 592246,
          "date": "Tue 26 Apr 2022 10:46",
          "username": "Mikilo",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator must manage the security of an AWS account. Recently, an IAM user's access key was mistakenly uploaded to a public code repository.<br>The SysOps administrator must identify anything that was changed by using this access key.<br>How should the SysOps administrator meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send all IAM events to an AWS Lambda function for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Query Amazon EC2 logs by using Amazon CloudWatch Logs Insights for all events initiated with the compromised access key within the suspected timeframe.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Search AWS CloudTrail event history for all events initiated with the compromised access key within the suspected timeframe.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Search VPC Flow Logs for all events initiated with the compromised access key within the suspected timeframe.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 58 discussion",
      "discusstion": [
        {
          "id": 658810,
          "date": "Sat 03 Sep 2022 23:42",
          "username": "kati2k22cz",
          "content": "C<br>\\\"You can troubleshoot operational and security incidents over the past 90 days in the CloudTrail console by viewing Event history.\\\"<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 745862,
          "date": "Thu 15 Dec 2022 09:55",
          "username": "BietTuot",
          "content": "answer is C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 739853,
          "date": "Fri 09 Dec 2022 07:48",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to track its expenditures for Amazon EC2 and Amazon RDS within AWS. The company decides to implement more rigorous tagging requirements for resources in its AWS accounts. A SysOps administrator needs to identify all noncompliant resources.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>A. Create a rule in Amazon EventBridge (Amazon CloudWatch Events) that invokes a custom AWS Lambda function that will evaluate all created or updated resources for the specified tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a rule in AWS Config that invokes a custom AWS Lambda function that will evaluate all resources for the specified tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a rule in AWS Config with the required-tags managed rule to evaluate all resources for the specified tags.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a rule in Amazon EventBridge (Amazon CloudWatch Events) with a managed rule to evaluate all created or updated resources for the specified tags.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 59 discussion",
      "discusstion": [
        {
          "id": 595810,
          "date": "Mon 02 May 2022 03:43",
          "username": "Finger41",
          "content": "C - you can see resouces that are complient and non-complient, and can filter between each via AWS Config. Automation steps post this can be done via a custom Systems Manager Automotion document - https://docs.aws.amazon.com/config/latest/developerguide/required-tags.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591233,
          "date": "Sun 24 Apr 2022 23:07",
          "username": "MecdroxFinger41",
          "content": "NONE of the solutions appear to accomplish the key task: A SysOps administrator needs to identify all noncompliant resources.<br><br>C is the start of the process only. An additional step would need to be taken to identify untagged - noncompliant resources / items.AWS Config does identify non-compliant resources based on the config rule. See : https://docs.aws.amazon.com/config/latest/developerguide/remediation.html",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 595812,
          "date": "Mon 02 May 2022 03:47",
          "username": "Finger41",
          "content": "AWS Config does identify non-compliant resources based on the config rule. See : https://docs.aws.amazon.com/config/latest/developerguide/remediation.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a retail website on multiple Amazon EC2 instances behind an Application Load Balancer (ALB). The company must secure traffic to the website over an HTTPS connection.<br>Which combination of actions should a SysOps administrator take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>A. Attach the certificate to each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach the certificate to the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a private certificate in AWS Certificate Manager (ACM).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a public certificate in AWS Certificate Manager (ACM).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Export the certificate, and attach it to the website.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 59 discussion",
      "discusstion": [
        {
          "id": 739854,
          "date": "Fri 09 Dec 2022 07:49",
          "username": "michaldavid",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 658819,
          "date": "Sun 04 Sep 2022 00:10",
          "username": "kati2k22cz",
          "content": "BD<br>show article about certificates<br>https://www.ssls.com/blog/the-difference-between-aws-certificates-and-public-ca-certificates/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application's performance. A SysOps administrator must scale the application to meet the increased traffic.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 60 discussion",
      "discusstion": [
        {
          "id": 637648,
          "date": "Wed 27 Jul 2022 00:13",
          "username": "promartyr",
          "content": "ASG is exactly what is needed - since it is random times, you can't schedule (hence, it cannot be D) - Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 612854,
          "date": "Tue 07 Jun 2022 19:48",
          "username": "ceros399",
          "content": "Ans C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594076,
          "date": "Thu 28 Apr 2022 23:52",
          "username": "Finger41",
          "content": "C - docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 593088,
          "date": "Wed 27 Apr 2022 13:09",
          "username": "AWS21",
          "content": "AWS Auto Scaling Group provide users an automated approach to increase or decrease cloud resources (e.g., compute, memory, and network bandwidth) as needs changes. Hence, the answer is narrowed down to C or D. <br><br>The question states =E2=80=9Cduring random moments of heightened traffic=E2=80=9D.  Option D is not the best choice, implementing a =E2=80=9Cscheduled scaling policy=E2=80=9D would be hit or miss for =E2=80=9Crandom moments of heightened traffic=E2=80=9D. <br><br>The best choice is option =E2=80=9CC=E2=80=9D Deploy the Application to an Auto Scaling group of EC2 instances with a target tracking policy=E2=80=A6",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 591249,
          "date": "Mon 25 Apr 2022 00:05",
          "username": "Mecdrox",
          "content": "I vote C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses several large Chef recipes to automate the configuration of virtual machines (VMs) in its data center. A SysOps administrator is migrating this workload to Amazon EC2 Instances on AWS and must run the existing Chef recipes.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Create a Chef server that includes EC2 instances. Migrate the existing recipes. Modify the EC2 instance user data to connect to Chef.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS OpsWorks for Chef Automate. Migrate the existing recipes. Modify the EC2 instance user data to connect to Chef.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the existing recipes to Amazon S3. Run the recipes by using AWS Systems Manager State Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the existing recipes to the user data section during the creation of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 61 discussion",
      "discusstion": [
        {
          "id": 627519,
          "date": "Tue 05 Jul 2022 17:51",
          "username": "mohamedba",
          "content": "Whenever you see key words like chef or puppet on exam questions, close your eyes and GO for AWS OpsWorks",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 620047,
          "date": "Wed 22 Jun 2022 00:02",
          "username": "Atown",
          "content": "It's B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594080,
          "date": "Thu 28 Apr 2022 23:58",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591250,
          "date": "Mon 25 Apr 2022 00:06",
          "username": "Mecdrox",
          "content": "I vote B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a stateful, long-running workload on a single xlarge general purpose Amazon EC2 On-Demand Instance Metrics show that the service is always using 80% of its available memory and 40% of its available CPU. A SysOps administrator must reduce the cost of the service without negatively affecting performance.<br>Which change in instance type will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Change to one large compute optimized On-Demand Instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change to one large memory optimized On-Demand Instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change to one xlarge general purpose Spot Instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change to two large general purpose On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 61 discussion",
      "discusstion": [
        {
          "id": 661783,
          "date": "Wed 07 Sep 2022 02:24",
          "username": "AAAaat",
          "content": "B because it is a stateful long running work load",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739862,
          "date": "Fri 09 Dec 2022 08:03",
          "username": "michaldavid",
          "content": "BBBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739566,
          "date": "Fri 09 Dec 2022 00:04",
          "username": "tyfta6",
          "content": "Isn't x-Large vs large has bigger ram size?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694513,
          "date": "Fri 14 Oct 2022 07:16",
          "username": "Surferbolt",
          "content": "B.  CPU utilisation is rather low for using an xlarge instance, so a memory optimized large instance is a cheaper option that should meet the workload requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658823,
          "date": "Sun 04 Sep 2022 00:24",
          "username": "kati2k22czCiCa560",
          "content": "For me its C. <br>You can reduce teh cost using a spot instance. Here more about spot instance<br>https://www.amazonaws.cn/en/ec2/spot-instances/faqs/Questions states - reduce the cost of the service without negatively affecting performance.<br><br>Using a Spot Instance may affect performance, if it terminates with only a 2 min warning.<br><br>The stats state the load is Memory intensive, so B looks to be most suitable.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 660485,
          "date": "Mon 05 Sep 2022 21:12",
          "username": "CiCa560",
          "content": "Questions states - reduce the cost of the service without negatively affecting performance.<br><br>Using a Spot Instance may affect performance, if it terminates with only a 2 min warning.<br><br>The stats state the load is Memory intensive, so B looks to be most suitable.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company asks a SysOps administrator to ensure that AWS CloudTrail files are not tampered with after they are created. Currently, the company uses AWS<br>Identity and Access Management (IAM) to restrict access to specific trails. The company's security team needs the ability to trace the integrity of each file.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function when a new file is delivered. Configure the Lambda function to compute an MD5 hash check on the file and store the result in an Amazon DynamoDB table. The security team can use the values that are stored in DynamoDB to verify the integrity of the delivered files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function that is invoked each time a new file is delivered to the CloudTrail bucket. Configure the Lambda function to compute an MD5 hash check on the file and store the result as a tag in an Amazon 53 object. The security team can use the information in the tag to verify the integrity of the delivered files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable the CloudTrail file integrity feature on an Amazon S3 bucket. Create an IAM policy that grants the security team access to the file integrity logs that are stored in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the CloudTrail file integrity feature on the trail. The security team can use the digest file that is created by CloudTrail to verify the integrity of the delivered files.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 62 discussion",
      "discusstion": [
        {
          "id": 425519,
          "date": "Wed 27 Oct 2021 06:46",
          "username": "Finger41",
          "content": "D - \\\"When you enable log file integrity validation, CloudTrail creates a hash for every log file that it delivers. Every hour, CloudTrail also creates and delivers a file that references the log files for the last hour and contains a hash of each. This file is called a digest file. Validated log files are invaluable in security and forensic investigations\\\"<br><br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 746042,
          "date": "Thu 15 Dec 2022 13:19",
          "username": "BietTuot",
          "content": "D is correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 744710,
          "date": "Wed 14 Dec 2022 05:36",
          "username": "MrMLB",
          "content": "D it is",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 739864,
          "date": "Fri 09 Dec 2022 08:07",
          "username": "michaldavid",
          "content": "DDDDDDDD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 735612,
          "date": "Mon 05 Dec 2022 03:38",
          "username": "pravinb",
          "content": "only D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694982,
          "date": "Fri 14 Oct 2022 21:10",
          "username": "sassy69",
          "content": "I vote D as well",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 694515,
          "date": "Fri 14 Oct 2022 07:19",
          "username": "Surferbolt",
          "content": "D.  CloudTrail log file integrity validation",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 681810,
          "date": "Wed 28 Sep 2022 16:50",
          "username": "CHRIS12722222",
          "content": "integrity is not an s3 feature, it's a cloudtrail feature.<br>vote for D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656802,
          "date": "Fri 02 Sep 2022 03:36",
          "username": "princajen",
          "content": "I vote for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 605892,
          "date": "Mon 23 May 2022 09:26",
          "username": "Mikilo",
          "content": "D is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 578424,
          "date": "Wed 30 Mar 2022 19:10",
          "username": "hammering",
          "content": "choose D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516454,
          "date": "Tue 04 Jan 2022 11:21",
          "username": "MrkJobs",
          "content": "Answer D<br>no S3 bucket enabling.<br>\\\"To enable log file integrity validation, you can use the AWS Management Console, the AWS CLI, or CloudTrail API. For more information, see Enabling log file integrity validation for CloudTrail.\\\"<br>\\\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 481677,
          "date": "Fri 19 Nov 2021 14:41",
          "username": "nqthien041292",
          "content": "Vote D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 356187,
          "date": "Tue 26 Oct 2021 08:54",
          "username": "FHU",
          "content": "Letter D is correct. You should enable or disable file integrity validation when creating or updating a trail.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 348432,
          "date": "Tue 19 Oct 2021 20:22",
          "username": "Drey",
          "content": "File Integrity Feature is under CloudTrail, S3 has File Integrity Monitoring.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 346736,
          "date": "Wed 06 Oct 2021 01:50",
          "username": "sunilpanda",
          "content": "D<br><br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 343625,
          "date": "Tue 05 Oct 2021 02:46",
          "username": "PatNathan",
          "content": "i hope it should be D, digest files are checked for validating dampering",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its infrastructure on Amazon EC2 instances that run in an Auto Scaling group. Recently, the company promoted faulty code to the entire EC2 fleet. This faulty code caused the Auto Scaling group to scale the instances before any of the application logs could be retrieved.<br>What should a SysOps administrator do to retain the application logs after instances are terminated?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Configure an Auto Scaling lifecycle hook to create a snapshot of the ephemeral storage upon termination of the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon Machine Image (AMI) that has the Amazon CloudWatch agent installed and configured to send logs to Amazon CloudWatch Logs. Update the launch template to use the new AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Amazon Machine Image (AMI) that has a custom script configured to send logs to AWS CloudTrail. Update the launch template to use the new AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install the Amazon CloudWatch agent on the Amazon Machine Image (AMI) that is defined in the launch template. Configure the CloudWatch agent to back up the logs to ephemeral storage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 62 discussion",
      "discusstion": [
        {
          "id": 601867,
          "date": "Sun 15 May 2022 04:26",
          "username": "Vedi1",
          "content": "Answer: B as the cloudwatch agent can push the logs to cloudwatch log group.<br>We can't take the snapshot for the ephemeral (instance store) storage.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 653005,
          "date": "Sun 28 Aug 2022 17:19",
          "username": "haxaffee",
          "content": "Weird question. I think A and B both work.<br><br>For A https://aws.amazon.com/blogs/aws/auto-scaling-update-lifecycle-standby-detach/ It states, that \\\"After it has been detached from the group but before it has been terminated (Auto Scaling calls this state Terminating). You can do any additional work that is needed to fully decommission the instance. You can capture a final snapshot of any work in progress, move log files to long-term storage, or hold malfunctioning instances off to the side for debugging.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 647614,
          "date": "Tue 16 Aug 2022 13:14",
          "username": "Rick365",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 636075,
          "date": "Sun 24 Jul 2022 16:14",
          "username": "tech1guru",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 616864,
          "date": "Wed 15 Jun 2022 18:49",
          "username": "221898",
          "content": "Answer is B .",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 607490,
          "date": "Thu 26 May 2022 08:10",
          "username": "Skajus",
          "content": "Answer is B .",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 595560,
          "date": "Sun 01 May 2022 12:38",
          "username": "psou7",
          "content": "Vote A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591252,
          "date": "Mon 25 Apr 2022 00:08",
          "username": "Mecdrox",
          "content": "I think it is A but there is something off about the wording. I could be C as this technically would accomplish the task. But administratively this is more work to manage custom AMI.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 589862,
          "date": "Fri 22 Apr 2022 11:20",
          "username": "ovilla",
          "content": "I think it's A",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When the AWS Cloud infrastructure experiences an event that may impact an organization, which AWS service can be used to see which of the organization's resources are affected?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. AWS Service Health Dashboard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Trusted Advisor<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Personal Health Dashboard<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Systems Manager<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 63 discussion",
      "discusstion": [
        {
          "id": 601724,
          "date": "Sat 14 May 2022 19:37",
          "username": "umrzyj",
          "content": "\\\"determine which of the business's resources are impacted\\\"<br>PHD can provide ResourceIDs, SHD doesn't.<br>For every SHD there is a corresponding PHD copy but not the other way around.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 599358,
          "date": "Tue 10 May 2022 04:10",
          "username": "Finger41",
          "content": "Think A and C are one in the same now - https://aws.amazon.com/premiumsupport/technology/aws-health-dashboard/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591273,
          "date": "Mon 25 Apr 2022 00:58",
          "username": "Mecdrox",
          "content": "I vote C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps Administrator is required to monitor free space on Amazon EBS volumes attached to Microsoft Windows-based Amazon EC2 instances within a company's account. The administrator must be alerted to potential issues.<br>What should the administrator do to receive email alerts before low storage space affects EC2 instance performance?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. Use built-in Amazon CloudWatch metrics, and configure CloudWatch alarms and an Amazon SNS topic for email notifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudTrail logs and configure the trail to send notifications to an Amazon SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Amazon CloudWatch agent to send disk space metrics, then set up CloudWatch alarms using an Amazon SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Trusted Advisor and enable email notification alerts for EC2 disk space.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 63 discussion",
      "discusstion": [
        {
          "id": 630214,
          "date": "Mon 11 Jul 2022 23:43",
          "username": "mohamedba",
          "content": "Disk space is not a built-in metric.<br>You should install CloudWatch Agent and create custom metric.<br>Ans is C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 625934,
          "date": "Sat 02 Jul 2022 06:39",
          "username": "DuniX33",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 620028,
          "date": "Tue 21 Jun 2022 21:33",
          "username": "skinnyxpuppy",
          "content": "https://marbot.io/blog/monitoring-ec2-disk-usage.html<br><br>\\\"However, a crucial metric is missing. You will not find metrics indicating the disk usage. The reason for that, AWS - or to be more precise, the hypervisor - does know nothing about the usage of the instance store or EBS volumes linked to your EC2 instance.<br>Luckily, there is a simple solution to that problem: the CloudWatch agent.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 612345,
          "date": "Mon 06 Jun 2022 14:16",
          "username": "MikeyJ",
          "content": "Is it not A, as EBS send metrics without needing the CW Agent?<br><br>\\\"Amazon Elastic Block Store (Amazon EBS) sends data points to CloudWatch for several metrics. All Amazon EBS volume types automatically send 1-minute metrics to CloudWatch, but only when the volume is attached to an instance.\\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 599353,
          "date": "Tue 10 May 2022 03:37",
          "username": "Finger41",
          "content": "C - docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html<br><br>Use Cloudwatch agent to install Disk and Memory stats, then configure an alarm, and send an alert to SNS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 595030,
          "date": "Sat 30 Apr 2022 15:17",
          "username": "kasaerteverythingship",
          "content": "Answer should be A because disk metrics are part of the AWS standard provided metricsIt's wrong. You must install CW Agent on EC2 instance for monitoring Disk and Memory Utilization.",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 596483,
          "date": "Wed 04 May 2022 04:52",
          "username": "everythingship",
          "content": "It's wrong. You must install CW Agent on EC2 instance for monitoring Disk and Memory Utilization.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is trying to connect two applications. One application runs in an on-premises data center that has a hostname of host1.onprem.private. The other application runs on an Amazon EC2 instance that has a hostname of host1.awscloud.private. An AWS Site-to-Site VPN connection is in place between the on- premises network and AWS.<br>The application that runs in the data center tries to connect to the application that runs on the EC2 instance, but DNS resolution fails. A SysOps administrator must implement DNS resolution between on-premises and AWS resources.<br>Which solution allows the on-premises application to resolve the EC2 instance hostname?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Route 53 inbound resolver endpoint with a forwarding rule for the onprem.private hosted zone. Associate the resolver with the VPC of the EC2 instance. Configure the on-premises DNS resolver to forward onprem.private DNS queries to the inbound resolver endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon Route 53 inbound resolver endpoint. Associate the resolver with the VPC of the EC2 instance. Configure the on-premises DNS resolver to forward awscloud.private DNS queries to the inbound resolver endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an Amazon Route 53 outbound resolver endpoint with a forwarding rule for the onprem.private hosted zone. Associate the resolver with the AWS Region of the EC2 instance. Configure the on-premises DNS resolver to forward onprem.private DNS queries to the outbound resolver endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon Route 53 outbound resolver endpoint. Associate the resolver with the AWS Region of the EC2 instance. Configure the on-premises DNS resolver to forward awscloud.private DNS queries to the outbound resolver endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 64 discussion",
      "discusstion": [
        {
          "id": 599354,
          "date": "Tue 10 May 2022 03:41",
          "username": "Finger41",
          "content": "B - https://aws.amazon.com/premiumsupport/knowledge-center/route53-resolve-with-inbound-endpoint/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 596486,
          "date": "Wed 04 May 2022 05:22",
          "username": "everythingship",
          "content": "Answer is B. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 592164,
          "date": "Tue 26 Apr 2022 09:12",
          "username": "Mikilo",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/set-up-integrated-dns-resolution-for-hybrid-networks-in-amazon-route-53.html<br><br>looking at the test DNS resolution from AWS to the on-premises environment",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 592137,
          "date": "Tue 26 Apr 2022 08:28",
          "username": "Mikilo",
          "content": "leaning towards C.  might be wrong too.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 591255,
          "date": "Mon 25 Apr 2022 00:17",
          "username": "Mecdrox",
          "content": "I vote B.  But I could be wrong.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an AWS KMS customer master key (CMK) with imported key material. The company references the CMK by its alias in the Java application to encrypt data. The CMK must be rotated every 6 months.<br>What is the process to rotate the key?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>A. Enable automatic key rotation for the CMK, and specify a period of 6 months.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CMK with new imported material, and update the key alias to point to the new CMK.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Delete the current key material, and import new material into the existing CMK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Import a copy of the existing key material into a new CMK as a backup, and set the rotation schedule for 6 months.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 64 discussion",
      "discusstion": [
        {
          "id": 656816,
          "date": "Fri 02 Sep 2022 03:41",
          "username": "princajen",
          "content": "If you choose to import keys to AWS KMS or asymmetric keys or use a custom key store, you can manually rotate them by creating a new KMS key and mapping an existing key alias from the old KMS key to the new KMS key.<br><br>https://aws.amazon.com/kms/faqs/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759783,
          "date": "Wed 28 Dec 2022 13:06",
          "username": "Arnaud92",
          "content": "To create new cryptographic material for your customer managed keys, you can create new KMS keys, and then change your applications or aliases to use the new KMS keys. https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The security team is concerned because the number of AWS Identity and Access Management (IAM) policies being used in the environment is increasing. The team tasked a SysOps administrator to report on the current number of IAM policies in use and the total available IAM policies.<br>Which AWS service should the administrator use to check how current IAM policy usage compares to current service limits?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>A. AWS Trusted Advisor<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Inspector<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Config<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Organizations<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 65 discussion",
      "discusstion": [
        {
          "id": 739869,
          "date": "Fri 09 Dec 2022 08:14",
          "username": "michaldavid",
          "content": "AAAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695430,
          "date": "Sat 15 Oct 2022 15:40",
          "username": "Surferbolt",
          "content": "A.  Trusted Advisor can be used to check your usage of services with service limits.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 664462,
          "date": "Fri 09 Sep 2022 13:06",
          "username": "chanaka5",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is trying to set up an Amazon Route 53 domain name to route traffic to a website hosted on Amazon S3. The domain name of the website is www.example.com and the S3 bucket name DOC-EXAMPLE-BUCKET. After the record set is set up in Route 53, the domain name www.anycompany.com does not seem to work, and the static website is not displayed in the browser.<br>Which of the following is a cause of this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>A. The S3 bucket must be configured with Amazon CloudFront first.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Route 53 record set must have an IAM role that allows access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The Route 53 record set must be in the same region as the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The S3 bucket name must match the record set name in Route 53.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 66 discussion",
      "discusstion": [
        {
          "id": 739890,
          "date": "Fri 09 Dec 2022 08:48",
          "username": "michaldavid",
          "content": "DDDDDD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 659573,
          "date": "Mon 05 Sep 2022 00:02",
          "username": "andrerkn",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656817,
          "date": "Fri 02 Sep 2022 03:44",
          "username": "princajen",
          "content": "Check S3 website endpoint names<br><br>Make sure that the name of the resource record for your Amazon S3 website endpoint matches the name of your Amazon S3 bucket. Also, configure your bucket for website hosting.<br><br>For example, if your bucket's name is AWSDOC-EXAMPLE-BUCKET, the record name must also be AWSDOC-EXAMPLE-BUCKET.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/route-53-no-targets/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has used AWS CloudFormation to deploy a serverless application into a production VPC.  The application consists of an AWS Lambda function, an Amazon DynamoDB table, and an Amazon API Gateway API. The SysOps administrator must delete the AWS CloudFormation stack without deleting the DynamoDB table.<br>Which action should the SysOps administrator take before deleting the AWS CloudFormation stack?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. Add a Retain deletion policy to the DynamoDB resource in the AWS CloudFormation stack.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a Snapshot deletion policy to the DynamoDB resource in the AWS CloudFormation stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable termination protection on the AWS CloudFormation stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the application's IAM policy with a Deny statement for the dynamodb:DeleteTable action.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 67 discussion",
      "discusstion": [
        {
          "id": 739893,
          "date": "Fri 09 Dec 2022 08:51",
          "username": "michaldavid",
          "content": "AAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 656818,
          "date": "Fri 02 Sep 2022 03:45",
          "username": "princajen",
          "content": "I vote for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 616924,
          "date": "Wed 15 Jun 2022 21:24",
          "username": "AWS_SJ",
          "content": "Answer us A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 599370,
          "date": "Tue 10 May 2022 04:38",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 591090,
          "date": "Sun 24 Apr 2022 15:37",
          "username": "Mecdrox",
          "content": "The answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is using AWS Compute Optimizer to get recommendations for a fleet of Amazon EC2 instances. After the analysis is complete, some of the EC2 instances are missing from the Compute Optimizer dashboard.<br>What is the cause of this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. The missing instances do not have the Amazon CloudWatch agent installed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Compute Optimizer does not support the instance types of the missing instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Compute Optimizer already considers the missing instances to be optimized.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The missing instances are running a Windows operating system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 67 discussion",
      "discusstion": [
        {
          "id": 618651,
          "date": "Sun 19 Jun 2022 13:16",
          "username": "221898",
          "content": "Amazon EC2 instance requirements<br>To determine the supported Regions for each of these instance types, see Finding an Amazon EC2 instance type in the Amazon EC2 User Guide for Linux Instances.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 614141,
          "date": "Thu 09 Jun 2022 20:02",
          "username": "ceros399",
          "content": "AnsB<br><br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html#:~:textCompute%20Optimizer%20only%20generates%20recommendations%20for%20supported%20instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 608352,
          "date": "Sat 28 May 2022 12:11",
          "username": "MikeyJ",
          "content": "You can get some (though not all) recommendations without having the Agent installed. However some EC2 instance types are not supported at all and therefore do not appear in the recommendations.<br><br>\\\"Compute Optimizer only generates recommendations for supported instances. Not all instance types are available in every AWS Region that Compute Optimizer is available in. To determine the supported Regions for each of these instance types, see Finding an Amazon EC2 instance type in the Amazon EC2 User Guide for Linux Instances.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606926,
          "date": "Wed 25 May 2022 00:19",
          "username": "Raji82",
          "content": "B - Check Amazon EC2 instance requirements<br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 606175,
          "date": "Mon 23 May 2022 17:43",
          "username": "Testis",
          "content": "I vote for B, according to https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html#requirements-ec2-instances",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606174,
          "date": "Mon 23 May 2022 17:41",
          "username": "Testis",
          "content": "I vote for B, according to this",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 598798,
          "date": "Mon 09 May 2022 03:51",
          "username": "Finger41",
          "content": "A - https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html<br><br>Needs detailed Metrics ie CloudWatch Agent to be installed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 596508,
          "date": "Wed 04 May 2022 06:33",
          "username": "AvidSquid",
          "content": "B, https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 591259,
          "date": "Mon 25 Apr 2022 00:22",
          "username": "Mecdrox",
          "content": "I vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is notified that an Amazon EC2 instance has stopped responding. The AWS Management Console indicates that the system checks are failing.<br>What should the administrator do first to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>A. Reboot the EC2 instance so it can be launched on a new host.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stop and then start the EC2 instance so that it can be launched on a new host.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Terminate the EC2 instance and relaunch it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. View the AWS CloudTrail log to investigate what changed on the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 68 discussion",
      "discusstion": [
        {
          "id": 371857,
          "date": "Thu 23 Sep 2021 05:41",
          "username": "lei00",
          "content": "B is correct,<br>system status check -- stop and restart<br>instance status check -- reboot<br><br>refer: https://acloud.guru/forums/aws-certified-sysops-administrator-associate/discussion/-K9I3MvysRcTvbNJHKLj/status_checks",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 739896,
          "date": "Fri 09 Dec 2022 08:54",
          "username": "michaldavid",
          "content": "BBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721116,
          "date": "Fri 18 Nov 2022 07:48",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656820,
          "date": "Fri 02 Sep 2022 03:46",
          "username": "princajen",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606394,
          "date": "Tue 24 May 2022 03:10",
          "username": "Finger41",
          "content": "B - https://aws.amazon.com/premiumsupport/knowledge-center/ec2-windows-system-status-check-fail/#:~:textA%20system%20status%20check%20failure%20indicates%20a%20problem%20with%20the,from%20the%20current%20underlying%20host.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 605942,
          "date": "Mon 23 May 2022 11:11",
          "username": "Mikilo",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 518849,
          "date": "Fri 07 Jan 2022 09:51",
          "username": "juraj666",
          "content": "vote B - been doing this quite often lately as instances fail without prior retirement notification",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 515748,
          "date": "Mon 03 Jan 2022 14:12",
          "username": "szl0144",
          "content": "vote B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 482275,
          "date": "Sat 20 Nov 2021 06:37",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 379972,
          "date": "Mon 04 Oct 2021 15:23",
          "username": "ahaffar",
          "content": "B is correct<br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-windows-system-status-check-fail/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software development company has multiple developers who work on the same product. Each developer must have their own development environments, and these development environments must be identical. Each development environment consists of Amazon EC2 instances and an Amazon RDS DB instance. The development environments should be created only when necessary, and they must be terminated each night to minimize costs.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly cron job on each development instance to stop all running processes to reduce CPU utilization to nearly zero.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to delete the AWS CloudFormation stacks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to terminate all EC2 instances and the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to cause AWS CloudFormation to delete all of the development environment resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 69 discussion",
      "discusstion": [
        {
          "id": 595802,
          "date": "Mon 02 May 2022 03:31",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-run-lambda-schedule.html + https://aws.amazon.com/blogs/mt/using-aws-lambda-to-decommission-products-provisioned-from-an-aws-service-catalog-portfolio/<br><br>Ideally you want to delete the Stack, not just the EC2 and RDS instances. Persistant EBS volumes and snapshots may still exist that can incurr cost.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739899,
          "date": "Fri 09 Dec 2022 08:56",
          "username": "michaldavid",
          "content": "BBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721117,
          "date": "Fri 18 Nov 2022 07:50",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695460,
          "date": "Sat 15 Oct 2022 16:16",
          "username": "Surferbolt",
          "content": "B is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656823,
          "date": "Fri 02 Sep 2022 03:49",
          "username": "princajen",
          "content": "B is correct! You want to delete the stack, not just certain resources.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 605865,
          "date": "Mon 23 May 2022 08:43",
          "username": "Mikilo",
          "content": "B is Correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 595550,
          "date": "Sun 01 May 2022 12:15",
          "username": "everythingship",
          "content": "It's B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 592119,
          "date": "Tue 26 Apr 2022 07:53",
          "username": "Mikiloeverythingship",
          "content": "B is CorrectCorrect !",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 595549,
          "date": "Sun 01 May 2022 12:15",
          "username": "everythingship",
          "content": "Correct !",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is partnering with an external vendor to provide data processing services. For this integration, the vendor must host the company's data in an Amazon<br>S3 bucket in the vendor's AWS account. The vendor is allowing the company to provide an AWS Key Management Service (AWS KMS) key to encrypt the company's data. The vendor has provided an IAM role Amazon Resources Name (ARN) to the company for this integration.<br>What should a SysOps administrator do to configure this integration?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Create a new KMS key. Add the vendor's IAM role ARN to the KMS key policy. Provide the new KMS key ARN to the vendor.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new KMS key. Create a new IAM key. Add the vendor's IAM role ARN to an inline policy that is attached to the IAM user. Provide the new IAM user ARN to the vendor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure encryption using the KMS managed S3 key. Add the vendor's IAM role ARN to the KMS key policy. Provide the KMS managed S3 key ARN to the vendor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure encryption using the KMS managed S3 key. Create an S3 bucket. Add the vendor's IAM role ARN to the S3 bucket policy. Provide the S3 bucket ARN to the vendor.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 70 discussion",
      "discusstion": [
        {
          "id": 746104,
          "date": "Thu 15 Dec 2022 14:17",
          "username": "BietTuot",
          "content": "I vote for A. C.  INCORRECT: You can't modify KMS managed S3 key policy.D.  INCORRECT: Because the bucket is in the vendor's account not in the company's account. Moreover, bucket policy doesn't allow Role encrypt/decrypt data. You need to use KMS Key policy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 745509,
          "date": "Wed 14 Dec 2022 23:37",
          "username": "MrMLB",
          "content": "A.  Create a new KMS key. Add the vendor's IAM role ARN to the KMS key policy. Provide the new KMS key ARN to the vendor.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744696,
          "date": "Wed 14 Dec 2022 05:04",
          "username": "tyfta6",
          "content": "Vote for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 739905,
          "date": "Fri 09 Dec 2022 09:00",
          "username": "michaldavid",
          "content": "Going for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720835,
          "date": "Thu 17 Nov 2022 21:23",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717584,
          "date": "Mon 14 Nov 2022 00:50",
          "username": "fedorian",
          "content": "The vendor is required to host the S3 bucket. It holds the company's data.<br>The vendor wants to use a company-provided key to encrypt the data.<br>So the company needs to create the new key and then provide access to that key from the IAM role which was provided by the vendor. (Answer: A)<br><br>D - Can't be D as that would mean the company is hosting the data (not the vendor). D is hosting the data at the company and providing access to the data to the vendor.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706509,
          "date": "Fri 28 Oct 2022 15:54",
          "username": "spagetzhangyu20000",
          "content": "It's A guys.question clearly ask to use KMS",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 713345,
          "date": "Mon 07 Nov 2022 23:43",
          "username": "zhangyu20000",
          "content": "question clearly ask to use KMS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705672,
          "date": "Thu 27 Oct 2022 16:57",
          "username": "Surferbolt",
          "content": "Bucket is in vendor's account, encrypted using company's key. So the vendor will require permission to use key to access data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 686455,
          "date": "Wed 05 Oct 2022 00:08",
          "username": "Kinetix",
          "content": "The explanation alludes to A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 684498,
          "date": "Sat 01 Oct 2022 23:51",
          "username": "bakjeeone",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 677817,
          "date": "Sat 24 Sep 2022 14:34",
          "username": "azure_kai",
          "content": "I would choose A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 648436,
          "date": "Thu 18 Aug 2022 15:11",
          "username": "softarts",
          "content": "C> can't modify KMS managed S3 key policy<br>D> not mention about the Role encrypt/decrypt data(bucket policy can't do that)<br>I choose A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 629377,
          "date": "Sun 10 Jul 2022 01:45",
          "username": "Goozian",
          "content": "The answer is D > \\\"S3 Bucket Policy\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 621488,
          "date": "Fri 24 Jun 2022 09:21",
          "username": "221898",
          "content": "Note that KMS policies cant be edited after creation, as its read-only.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 606454,
          "date": "Tue 24 May 2022 05:09",
          "username": "CodePoet",
          "content": "The answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 606365,
          "date": "Tue 24 May 2022 01:50",
          "username": "Finger41Goozian",
          "content": "C - https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-denied-error-s3/<br><br>Note that KMS policies cant be edited after creation, as its read-only.in the link you shared, it clearly mentions \\\"Bucket Policy\\\" but you chose C ?!<br>Answer is D",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 629376,
          "date": "Sun 10 Jul 2022 01:44",
          "username": "Goozian",
          "content": "in the link you shared, it clearly mentions \\\"Bucket Policy\\\" but you chose C ?!<br>Answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 605919,
          "date": "Mon 23 May 2022 10:24",
          "username": "Mikilo",
          "content": "Going with C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is using AWS Systems Manager Patch Manager to patch a fleet of Amazon EC2 instances. The SysOps administrator has configured a patch baseline and a maintenance window. The SysOps administrator also has used an instance tag to identify which instances to patch.<br>The SysOps administrator must give Systems Manager the ability to access the EC2 instances.<br>Which additional action must the SysOps administrator perform to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>A. Add an inbound rule to the instances' security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an IAM instance profile with access to Systems Manager to the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Systems Manager activation. Then activate the fleet of instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Manually specify the instances to patch instead of using tag-based selection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 71 discussion",
      "discusstion": [
        {
          "id": 656829,
          "date": "Fri 02 Sep 2022 03:57",
          "username": "princajen",
          "content": "By default, AWS Systems Manager doesn't have permission to perform actions on your instances. Grant access by using an AWS Identity and Access Management (IAM) instance profile. An instance profile is a container that passes IAM role information to an Amazon Elastic Compute Cloud (Amazon EC2) instance at launch. You can create an instance profile for Systems Manager by attaching one or more IAM policies that define the necessary permissions to a new role or to a role you already created.<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739916,
          "date": "Fri 09 Dec 2022 09:21",
          "username": "michaldavid",
          "content": "bbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720841,
          "date": "Thu 17 Nov 2022 21:30",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#72",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its website on Amazon EC2 instances in the us-east-1 Region. The company is preparing to extend its website into the eu-central-1 Region, but the database must remain only in us-east-1. After deployment, the EC2 instances in eu-central-1 are unable to connect to the database in us-east-1.<br>What is the MOST operationally efficient solution that will resolve this connectivity issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>A. Create a VPC peering connection between the two Regions. Add the private IP address range of the instances to the inbound rule of the database security group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC peering connection between the two Regions. Add the security group of the instances in eu-central-1 to the outbound rule of the database security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPN connection between the two Regions. Add the private IP address range of the instances to the outbound rule of the database security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPN connection between the two Regions. Add the security group of the instances in eu-central-1 to the inbound rule of the database security group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 72 discussion",
      "discusstion": [
        {
          "id": 746792,
          "date": "Fri 16 Dec 2022 05:13",
          "username": "MrMLB",
          "content": "By creating a VPC peering connection between the two Regions and adding the security group of the instances in eu-central-1 to the outbound rule of the database security group, you can establish a direct network connection between the two VPCs and allow the instances in eu-central-1 to communicate with the database in us-east-1. This is the most operationally efficient solution because it allows for faster and more efficient communication between the two VPCs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739917,
          "date": "Fri 09 Dec 2022 09:22",
          "username": "michaldavid",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720843,
          "date": "Thu 17 Nov 2022 21:31",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656832,
          "date": "Fri 02 Sep 2022 04:02",
          "username": "princajenrod1234pablo23449",
          "content": "Correct answer is A!<br>VPN options are out of the question.<br>We are left with add the IP address or a security group rule, but since you cannont create a security group rule that references a peer VPC security group, than the answer is clearly A. https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.htmlyes, you can use SGs from peering VPNs but since it says to use in outbound the choice is A. ",
          "upvote_count": "412",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 705935,
          "date": "Thu 27 Oct 2022 23:21",
          "username": "rod1234pablo23449",
          "content": "https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.htmlyes, you can use SGs from peering VPNs but since it says to use in outbound the choice is A. ",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 708103,
          "date": "Mon 31 Oct 2022 01:47",
          "username": "pablo23449",
          "content": "yes, you can use SGs from peering VPNs but since it says to use in outbound the choice is A. ",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates custom AMI images by launching new Amazon EC2 instances from an AWS CloudFormation template. It installs and configures necessary software through AWS OpsWorks, and takes images of each EC2 instance. The process of installing and configuring software can take between 2 to 3 hours, but at times, the process stalls due to installation errors.<br>The SysOps administrator must modify the CloudFormation template so if the process stalls, the entire stack will fail and roll back.<br>Based on these requirements, what should be added to the template?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Conditions with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. CreationPolicy with a timeout set to 4 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. DependsOn with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Metadata with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 73 discussion",
      "discusstion": [
        {
          "id": 614163,
          "date": "Thu 09 Jun 2022 20:41",
          "username": "ceros399",
          "content": "AnsB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606350,
          "date": "Tue 24 May 2022 01:21",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html<br><br>Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591277,
          "date": "Mon 25 Apr 2022 01:03",
          "username": "Mecdrox",
          "content": "I think B as the Timeout is part of the CreationPolicy.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create an automated solution for all accounts managed by AWS Organizations to detect any security groups that use 0.0.0.0/0 as the source address for inbound traffic. The company also wants to automatically remediate any noncompliant security groups by restricting access to a specific CIDR block that corresponds with the company's intranet.<br>Which set of actions should the SysOps administrator take to create a solution?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule to detect noncompliant security groups. Set up automatic remediation to change the 0.0.0.0/0 source address to the approved CIDR block.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy to deny the creation of security groups that have 0.0.0.0/0 as the source address. Attach this IAM policy to every user in the company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to inspect new and existing security groups. Check for a noncompliant 0.0.0.0/0 source address and change the source address to the approved CIDR block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a service control policy (SCP) for the organizational unit (OU) to deny the creation of security groups that have the 0.0.0.0/0 source address. Set up automatic remediation to change the 0.0.0.0/0 source address to the approved CIDR block.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 73 discussion",
      "discusstion": [
        {
          "id": 739919,
          "date": "Fri 09 Dec 2022 09:24",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720844,
          "date": "Thu 17 Nov 2022 21:32",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695481,
          "date": "Sat 15 Oct 2022 16:44",
          "username": "Surferbolt",
          "content": "A.  It's a job for Config.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 654473,
          "date": "Wed 31 Aug 2022 00:25",
          "username": "Rick365",
          "content": "A.  Create an AWS Config rule to detect noncompliant security groups. Set up automatic remediation to change the 0.0.0.0/0 source address to the approved CIDR block?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming application is deployed on four Amazon EC2 instances in a default VPC.  The SysOps administrator has noticed consistently high latency in responses as data is transferred among the four instances. There is no way for the administrator to alter the application code.<br>The MOST effective way to reduce latency is to relaunch the EC2 instances in:<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>A. a dedicated VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. a single subnet inside the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. a placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. a single Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 74 discussion",
      "discusstion": [
        {
          "id": 627623,
          "date": "Tue 05 Jul 2022 23:46",
          "username": "mohamedba",
          "content": "Cluster Placement Group is the way to go in order to reduce latency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594180,
          "date": "Fri 29 Apr 2022 04:38",
          "username": "Finger41",
          "content": "C - Cluster placement group : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 593182,
          "date": "Wed 27 Apr 2022 15:25",
          "username": "AWS21everythingshipMambo_king",
          "content": "=E2=80=9CB=E2=80=9D is the most correct answer.AWS EC2 placement group facilitates launching a group of EC2 instances close to each other in the same availability zone.The close proximity helps the EC2s take advantage of high-speed connectivity and low latency.I disagree with you. Logically, your opinion agrees with D.  Simply because using Single subnet means using Same AZ.B isnt the way....the qstn here is all about improving latency for inter-communication between the instances and a placement group specifically a cluster one achieves this hence C is the solution",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 595476,
          "date": "Sun 01 May 2022 08:58",
          "username": "everythingship",
          "content": "I disagree with you. Logically, your opinion agrees with D.  Simply because using Single subnet means using Same AZ.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 625476,
          "date": "Fri 01 Jul 2022 01:38",
          "username": "Mambo_king",
          "content": "B isnt the way....the qstn here is all about improving latency for inter-communication between the instances and a placement group specifically a cluster one achieves this hence C is the solution",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591278,
          "date": "Mon 25 Apr 2022 01:04",
          "username": "Mecdrox",
          "content": "I vote C.  Placement groups FTW!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company requires that all activity in its AWS account be logged using AWS CloudTrail. Additionally, a SysOps administrator must know when CloudTrail log files are modified or deleted.<br>How should the SysOps administrator meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>A. Enable log file integrity validation. Use the AWS CLI to validate the log files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable log file integrity validation. Use the AWS CloudTrail Processing Library to validate the log files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use CloudTrail Insights to monitor the log files for modifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon CloudWatch Logs to monitor the log files for modifications.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 74 discussion",
      "discusstion": [
        {
          "id": 749944,
          "date": "Mon 19 Dec 2022 16:00",
          "username": "zolthar_z",
          "content": "The answer is A, the cloud trail processing library is only to process logs, not check integrity",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 746795,
          "date": "Fri 16 Dec 2022 05:18",
          "username": "MrMLBforeverlearner",
          "content": "B<br><br>Option A is incorrect because it does not specify how to validate the log files. Option C is incorrect because CloudTrail Insights is a feature that allows you to analyze CloudTrail log data, but it does not provide a way to validate log file integrity. Option D is incorrect because Amazon CloudWatch Logs is a service that allows you to monitor, store, and access your log data, but it does not provide a way to validate log file integrity.Another wrong ChatGPT answer.. \\\"To validate the integrity of CloudTrail log files, you can use the AWS CLI or create your own solution\\\" (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html )",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 752571,
          "date": "Wed 21 Dec 2022 17:37",
          "username": "foreverlearner",
          "content": "Another wrong ChatGPT answer.. \\\"To validate the integrity of CloudTrail log files, you can use the AWS CLI or create your own solution\\\" (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html )",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 739920,
          "date": "Fri 09 Dec 2022 09:25",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695482,
          "date": "Sat 15 Oct 2022 16:45",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 663095,
          "date": "Thu 08 Sep 2022 06:29",
          "username": "AAAaat",
          "content": "Yes it is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659142,
          "date": "Sun 04 Sep 2022 11:26",
          "username": "haxaffee",
          "content": "Answer can only be A.  How to use CLI -> https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-cli.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 656840,
          "date": "Fri 02 Sep 2022 04:09",
          "username": "princajenAWS21",
          "content": "The answer is A!<br>The CloudTrail Processing Library is a Java library that provides an easy way to process AWS CloudTrail logs. You provide configuration details about your CloudTrail SQS queue and write code to process events. The CloudTrail Processing Library does the rest. It polls your Amazon SQS queue, reads and parses queue messages, downloads CloudTrail log files, parses events in the log files, and passes the events to your code as Java objects.<br><br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/use-the-cloudtrail-processing-library.htmlprincajen, your response describes answer B. ",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 748010,
          "date": "Sat 17 Dec 2022 12:21",
          "username": "AWS21",
          "content": "princajen, your response describes answer B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655706,
          "date": "Thu 01 Sep 2022 04:50",
          "username": "Flosuccess",
          "content": "Looks like the answer is A<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company monitors its account activity using AWS CloudTrail, and is concerned that some log files are being tampered with after the logs have been delivered to the account's Amazon S3 bucket.<br>Moving forward, how can the SysOps Administrator confirm that the log files have not been modified after being delivered to the S3 bucket?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>A. Stream the CloudTrail logs to Amazon CloudWatch Logs to store logs at a secondary location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable log file integrity validation and use digest files to verify the hash value of the log file.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replicate the S3 log bucket across regions, and encrypt log files with S3 managed keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 server access logging to track requests made to the log bucket for security audits.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 75 discussion",
      "discusstion": [
        {
          "id": 645114,
          "date": "Wed 10 Aug 2022 20:46",
          "username": "sark77",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 622416,
          "date": "Sun 26 Jun 2022 10:35",
          "username": "221898",
          "content": "B - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 606352,
          "date": "Tue 24 May 2022 01:32",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 597709,
          "date": "Fri 06 May 2022 13:17",
          "username": "AWS21",
          "content": "Option B is the corrected answer.<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 596489,
          "date": "Wed 04 May 2022 05:41",
          "username": "everythingship",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 592169,
          "date": "Tue 26 Apr 2022 09:18",
          "username": "Mikilo",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591279,
          "date": "Mon 25 Apr 2022 01:06",
          "username": "Mecdrox",
          "content": "B is the correct choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 589979,
          "date": "Fri 22 Apr 2022 14:24",
          "username": "ovilla",
          "content": "It's B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to host its stateful web-based applications on AWS. A SysOps administrator is using an Auto Scaling group of Amazon EC2 instances. The web applications will run 24 hours a day, 7 days a week throughout the year. The company must be able to change the instance type within the same instance family later in the year based on the traffic and usage patterns.<br>Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>A. Convertible Reserved Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. On-Demand Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Spot Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Standard Reserved Instances<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 75 discussion",
      "discusstion": [
        {
          "id": 772979,
          "date": "Thu 12 Jan 2023 00:55",
          "username": "skywalker",
          "content": "AAAAAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 752592,
          "date": "Wed 21 Dec 2022 18:11",
          "username": "foreverlearner",
          "content": "The questions says: \\\"must be able to change the instance TYPE within the SAME instance FAMILY\\\". Note that the question says TYPE, and not SIZE. <br>According to https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html, You can \\\"Change the instance SIZE within the same instance family and generation\\\" and<br>\\\"For example, you can modify a Reserved Instance from t2.small to t2.large because they're both in the same T2 family and generation. But you can't modify a Reserved Instance from T2 to M2 or from T2 to T3, because in both these examples, the target instance family and generation are not the same as the original Reserved Instance.\\\"<br><br>In the above example: General Purpose Family, TYPE T, Generation 2, SIZE small (T2.large) (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes)<br>Convert it to T2.large. This is same TYPE (T2), different SIZE (large). Hence, Standard would cover it.<br>However, if I want to change T3.small, this would be a different TYPE (T3) within the same family (General Purpose).<br><br>Hope this example helps claryifing.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 746804,
          "date": "Fri 16 Dec 2022 05:29",
          "username": "MrMLB",
          "content": "D<br><br>To meet the requirements of hosting stateful web-based applications on AWS, running 24/7 throughout the year, and being able to change the instance type within the same instance family later in the year, the most cost-effective EC2 instance purchasing option would be Standard Reserved Instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 746200,
          "date": "Thu 15 Dec 2022 15:44",
          "username": "BietTuot",
          "content": "Answer is D.  (Instance typeinstance size within a family and generation).<br>When your needs change, you can modify your Standard or Convertible Reserved Instances and continue to benefit from the billing benefit. You can modify attributes such as the Availability Zone, instance size (within the same instance family and generation), and scope of your Reserved Instance. And Standard is cheaper than convertible.<br>Ref: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716860,
          "date": "Sat 12 Nov 2022 19:37",
          "username": "Atown",
          "content": "Enables you to modify Availability Zone, scope, networking type, and instance size (within the same instance type) of your Reserved Instance. For more information, see Modifying Reserved Instances.<br><br>Key Phrase is to Modify within the same instance Family, you can modify Standard Reserved Instances within the same Instance Family and Standard is most cost effective.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 705610,
          "date": "Thu 27 Oct 2022 15:51",
          "username": "acethetest1000",
          "content": "D - you can modify the instance size within the same family: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html<br>When your needs change, you can modify your Standard or Convertible Reserved Instances and continue to benefit from the billing benefit. You can modify attributes such as the Availability Zone, instance size (within the same instance family), and scope of your Reserved Instance",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 684504,
          "date": "Sun 02 Oct 2022 00:11",
          "username": "bakjeeonesassy69xenodamus",
          "content": "D, Because same instance family, standard offering is more cheaper than convertiable offering class.But you can't change the instance type with Standard Reserved, which the question is askingYou can change instance size within the same family using standard.Convertible allows you to change between families, which isn't needed here, and is more expensive.",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 694986,
          "date": "Fri 14 Oct 2022 21:22",
          "username": "sassy69xenodamus",
          "content": "But you can't change the instance type with Standard Reserved, which the question is askingYou can change instance size within the same family using standard.Convertible allows you to change between families, which isn't needed here, and is more expensive.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 717900,
          "date": "Mon 14 Nov 2022 11:53",
          "username": "xenodamus",
          "content": "You can change instance size within the same family using standard.Convertible allows you to change between families, which isn't needed here, and is more expensive.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 682138,
          "date": "Wed 28 Sep 2022 23:41",
          "username": "AWS21",
          "content": "Answer \\\"A\\\" is correct.<br>https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/standard-vs.-convertible-offering-classes.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659146,
          "date": "Sun 04 Sep 2022 11:28",
          "username": "haxaffee",
          "content": "Its A.  Spot is not an option for 24/7 stateful. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658752,
          "date": "Sat 03 Sep 2022 20:50",
          "username": "andrerkn",
          "content": "A for sure.<br>C doesn't work for \\\"24 hours a day, 7 days a week\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 657642,
          "date": "Fri 02 Sep 2022 19:15",
          "username": "kati2k22czRick365",
          "content": "I Guess is CThe web applications will run 24 hours a day, 7 days a week throughout the year.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 657964,
          "date": "Sat 03 Sep 2022 03:49",
          "username": "Rick365",
          "content": "The web applications will run 24 hours a day, 7 days a week throughout the year.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to host several applications across multiple AWS accounts. Several teams are responsible for building and maintaining the infrastructure of the application across the AWS accounts.<br>A SysOps administrator must implement a solution to ensure that user accounts and permissions are centrally managed. The solution must be integrated with the company's existing on-premises Active Directory environment. The SysOps administrator already has enabled AWS Single Sign-On (AWS SSO) and has set up an AWS Direct Connect connection.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
          "answers": [
            {
              "choice": "<p>A. Create a Simple AD domain, and establish a forest trust relationship with the on-premises Active Directory domain. Set the Simple AD domain as the identity source for AWS SSO. Create the required role-based permission sets. Assign each group of users to the AWS accounts that the group will manage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Active Directory domain controller on an Amazon EC2 instance that is joined to the on-premises Active Directory domain. Set the Active Directory domain controller as the identity source for AWS SSO. Create the required role-based permission sets. Assign each group of users to the AWS accounts that the group will manage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AD Connector that is associated with the on-premises Active Directory domain. Set the AD Connector as the identity source for AWS SSO. Create the required role-based permission sets. Assign each group of users to the AWS accounts that the group will manage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the built-in SSO directory as the identity source for AWS SSO. Copy the users and groups from the on-premises Active Directory domain. Create the required role-based permission sets. Assign each group of users to the AWS accounts that the group will manage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 76 discussion",
      "discusstion": [
        {
          "id": 649502,
          "date": "Sat 20 Aug 2022 19:02",
          "username": "kati2k22cz",
          "content": "its C<br>to knoww more about AD connector see:<br>https://docs.aws.amazon.com/pt_br/directoryservice/latest/admin-guide/directory_ad_connector.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 599371,
          "date": "Tue 10 May 2022 04:48",
          "username": "Finger41",
          "content": "C - https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application runs on Amazon EC2 instances in an Auto Scaling group. Following the deployment of a new feature on the EC2 instances, some instances were marked as unhealthy and then replaced by the Auto Scaling group. The EC2 instances terminated before a SysOps administrator could determine the cause of the health status changes. To troubleshoot this issue, the SysOps administrator wants to ensure that an AWS Lambda function is invoked in this situation.<br>How should the SysOps administrator meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
          "answers": [
            {
              "choice": "<p>A. Activate the instance scale-in protection setting for the Auto Scaling group. Invoke the Lambda function through Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate the instance scale-in protection setting for the Auto Scaling group. Invoke the Lambda function through Amazon Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a lifecycle hook to the Auto Scaling group to invoke the Lambda function through Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a lifecycle hook to the Auto Scaling group to invoke the Lambda function through Amazon Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 76 discussion",
      "discusstion": [
        {
          "id": 740696,
          "date": "Sat 10 Dec 2022 06:40",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720863,
          "date": "Thu 17 Nov 2022 22:09",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716867,
          "date": "Sat 12 Nov 2022 19:44",
          "username": "Atown",
          "content": "A is Wrong because Instance scale-in protection does not protect Auto Scaling instances from the following: Health check replacement if the instance fails health checks<br><br>C is the Correct Answers -- When a scale-in event occurs, a lifecycle hook pauses the instance before it is terminated and sends you a notification using Amazon EventBridge. While the instance is in the wait state, you can invoke an AWS Lambda function or connect to the instance to download logs or other data before the instance is fully terminated.<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 684505,
          "date": "Sun 02 Oct 2022 00:14",
          "username": "bakjeeone",
          "content": "Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 682092,
          "date": "Wed 28 Sep 2022 22:01",
          "username": "kati2k22czpablo23449",
          "content": "think better. Its A<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.htmlInstance scale-in protection does not protect Auto Scaling instances from the following: Health check replacement if the instance fails health checks",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 708114,
          "date": "Mon 31 Oct 2022 02:25",
          "username": "pablo23449",
          "content": "Instance scale-in protection does not protect Auto Scaling instances from the following: Health check replacement if the instance fails health checks",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658891,
          "date": "Sun 04 Sep 2022 03:33",
          "username": "kati2k22cz",
          "content": "OK its C. <br>check this doc https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator must create a solution to automatically shuts down any Amazon EC2 instances that have less than 10% average CPU to monitor average<br>CPU utilization for 60 minutes or more.<br>Which solution meets these requirements in the MOST operationally efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. Implement a cron job on each EC2 instance to run once every 60 minutes and calculate the current CPU utilization. Initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement an Amazon CloudWatch alarm for each EC2 instance to monitor average CPU utilization. Set the period at 1 hour, and set the threshold at 10%. Configure an EC2 action on the alarm to stop the instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the unified Amazon CloudWatch agent on each EC2 instance, and enable the Basic level predefined metric set. Log CPU utilization every 60 minutes, and initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Run Command to get CPU utilization from each EC2 instance every 60 minutes. Initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 77 discussion",
      "discusstion": [
        {
          "id": 599362,
          "date": "Tue 10 May 2022 04:20",
          "username": "Finger41",
          "content": "B - https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591272,
          "date": "Mon 25 Apr 2022 00:56",
          "username": "Mecdrox",
          "content": "I vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application that hosts critical data for several clients. The company uses AWS CloudTrail to track user activities on various AWS resources. To meet new security requirements, the company needs to protect the CloudTrail log files from being modified, deleted, or forged.<br>Which solution will meet these requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. Enable CloudTrail log file integrity validation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon S3 MFA Delete on the S3 bucket where the CloudTrail log files are stored.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 Versioning to keep all versions of the CloudTrail log files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Key Management Service (AWS KMS) security keys to secure the CloudTrail log files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 77 discussion",
      "discusstion": [
        {
          "id": 746809,
          "date": "Fri 16 Dec 2022 05:35",
          "username": "MrMLB",
          "content": "A it is",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 746410,
          "date": "Thu 15 Dec 2022 19:22",
          "username": "beznika",
          "content": "I'll go for A although no options provided protect logs from being deleted.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 740697,
          "date": "Sat 10 Dec 2022 06:41",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720864,
          "date": "Thu 17 Nov 2022 22:10",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695549,
          "date": "Sat 15 Oct 2022 19:14",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 678883,
          "date": "Sun 25 Sep 2022 16:09",
          "username": "Gianiluca",
          "content": "AWS example exam has a very similar question - see link and the answer was<br>to enable log file integrity<br> https://d1.awsstatic.com/training-and-certification/docs-sysops-associate/AWS-Certified-SysOps-Administrator-Associate_Sample-Questions.pdf",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 676849,
          "date": "Fri 23 Sep 2022 08:48",
          "username": "nikkoe",
          "content": "i think the answer is both A and B, because the question says to protect the log files too, the integrity doesn't protect the log deletion",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656849,
          "date": "Fri 02 Sep 2022 04:13",
          "username": "princajen",
          "content": "The answer is A!<br>Enable CloudTrail log file integrity<br><br>Validated log files are especially valuable in security and forensic investigations. For example, a validated log file enables you to assert positively that the log file itself has not changed, or that particular user credentials performed specific API activity. The CloudTrail log file integrity validation process also lets you know if a log file has been deleted or changed, or assert positively that no log files were delivered to your account during a given period of time. CloudTrail log file integrity validation uses industry standard algorithms: SHA-256 for hashing and SHA-256 with RSA for digital signing. This makes it computationally unfeasible to modify, delete or forge CloudTrail log files without detection.<br><br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 654488,
          "date": "Wed 31 Aug 2022 00:48",
          "username": "Rick365",
          "content": "A.  Enable CloudTrail log file integrity validation.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new requirement stating that all resources in AWS must be tagged according to a set policy.<br>Which AWS service should be used to enforce and continually identify all resources that are not in compliance with the policy?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. AWS CloudTrail<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Inspector<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Config<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Systems Manager<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 78 discussion",
      "discusstion": [
        {
          "id": 598796,
          "date": "Mon 09 May 2022 03:45",
          "username": "Finger41",
          "content": "C - https://docs.aws.amazon.com/config/latest/developerguide/evaluating-your-resources.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591271,
          "date": "Mon 25 Apr 2022 00:56",
          "username": "Mecdrox",
          "content": "I vote c",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 631601,
          "date": "Fri 15 Jul 2022 05:14",
          "username": "yeanlingmedal71",
          "content": "If you are using AWS Config rules, AWS Config continuously evaluates your AWS resource configurations for desired settings. Depending on the rule, AWS Config will evaluate your resources either in response to configuration changes or periodically. Each rule is associated with an AWS Lambda function, which contains the evaluation logic for the rule. When AWS Config evaluates your resources, it invokes the rule's AWS Lambda function. The function returns the compliance status of the evaluated resources. If a resource violates the conditions of a rule, AWS Config flags the resource and the rule as noncompliant. When the compliance status of a resource changes, AWS Config sends a notification to your Amazon SNS topic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company operates out of five AWS Regions. A SysOps administrator wants to identify all the company's tagged and untagged Amazon EC2 instances.<br>The company requires the output to display the instance ID and tags.<br>What is the MOST operationally efficient way for the SysOps administrator to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. Create a tag-based resource group in AWS Resource Groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Trusted Advisor. Export the EC2 On-Demand Instances check results from Trusted Advisor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Cost Explorer. Choose a service type of EC2-Instances, and group by Resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Tag Editor in AWS Resource Groups. Select all Regions, and choose a resource type of AWS::EC2::Instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 78 discussion",
      "discusstion": [
        {
          "id": 740698,
          "date": "Sat 10 Dec 2022 06:42",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720866,
          "date": "Thu 17 Nov 2022 22:11",
          "username": "Liongeek",
          "content": "You can't create a tag-based group if the instances may not be tagged -_-<br>Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656853,
          "date": "Fri 02 Sep 2022 04:16",
          "username": "princajen",
          "content": "With Tag Editor, you build a query to find resources in one or more AWS Regions that are available for tagging. You can choose up to 20 individual resource types, or build a query on All resource types. Your query can include resources that already have tags, or resources that have no tags.<br><br>https://docs.aws.amazon.com/ARG/latest/userguide/find-resources-to-tag.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization finds that a high number of gp2 Amazon EBS volumes are running out of space.<br>Which solution will provide the LEAST disruption with MINIMAL effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Create a snapshot and restore it to a larger gp2 volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a RAID 0 with another new gp2 volume to increase capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage the Elastic Volumes feature of EBS to increase gp2 volume size.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write a script to migrate data to a larger gp2 volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 79 discussion",
      "discusstion": [
        {
          "id": 598794,
          "date": "Mon 09 May 2022 03:40",
          "username": "Finger41",
          "content": "C - https://aws.amazon.com/premiumsupport/knowledge-center/expand-ebs-root-volume-windows/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 591270,
          "date": "Mon 25 Apr 2022 00:54",
          "username": "Mecdrox",
          "content": "C.  But don't forget to expand the allocation in the OS if tied to EC2",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to upload gigabytes of files every day. The company need to achieve higher throughput and upload speeds to Amazon S3.<br>Which action should a SysOps administrator take to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution with the GET HTTP method allowed and the S3 bucket as an origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ElastiCache cluster and enable caching for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Global Accelerator and configure it with the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Transfer Acceleration and use the acceleration endpoint when uploading files.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 79 discussion",
      "discusstion": [
        {
          "id": 740699,
          "date": "Sat 10 Dec 2022 06:43",
          "username": "michaldavid",
          "content": "dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720867,
          "date": "Thu 17 Nov 2022 22:12",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716868,
          "date": "Sat 12 Nov 2022 19:47",
          "username": "Atown",
          "content": "D is the correct answer<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/<br>Enable Amazon S3 Transfer Acceleration<br>Amazon S3 Transfer Acceleration can provide fast and secure transfers over long distances between your client and Amazon S3. Transfer Acceleration uses Amazon CloudFront's globally distributed edge locations.<br><br>Transfer Acceleration incurs additional charges, so be sure to review pricing. To determine if Transfer Acceleration might improve the transfer speeds for your use case, review the Amazon S3 Transfer Acceleration Speed Comparison tool.<br><br>Note: Transfer Acceleration doesn't support cross-Region copies using CopyObject.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695550,
          "date": "Sat 15 Oct 2022 19:17",
          "username": "Surferbolt",
          "content": "D is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656854,
          "date": "Fri 02 Sep 2022 04:18",
          "username": "princajen",
          "content": "I vote for D!<br>Enable Amazon S3 Transfer Acceleration<br>Amazon S3 Transfer Acceleration can provide fast and secure transfers over long distances between your client and Amazon S3. Transfer Acceleration uses Amazon CloudFront's globally distributed edge locations.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator maintains the security and compliance of a company's AWS account. To ensure the company's Amazon EC2 instances are following company policy, a SysOps administrator wants to terminate any EC2 instance that do not contain a department tag. Noncompliant resources must be terminated in near-real time.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule with the required-tags managed rule to identify noncompliant resources. Configure automatic remediation to run the AWS- TerminateEC2Instance automation document to terminate noncompliant resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon EventBridge (Amazon CloudWatch Events) rule to monitor when new EC2 instances are created. Send the event to a Simple Notification Service (Amazon SNS) topic for automatic remediation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure all users who can create EC2 instances also have the permissions to use the ec2:CreateTags and ec2:DescribeTags actions. Change the instance's shutdown behavior to terminate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure AWS Systems Manager Compliance is configured to manage the EC2 instances. Call the AWS-StopEC2Instances automation document to stop noncompliant resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 80 discussion",
      "discusstion": [
        {
          "id": 740701,
          "date": "Sat 10 Dec 2022 06:44",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720877,
          "date": "Thu 17 Nov 2022 22:26",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695552,
          "date": "Sat 15 Oct 2022 19:20",
          "username": "Surferbolt",
          "content": "A.  Config.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658903,
          "date": "Sun 04 Sep 2022 04:00",
          "username": "kati2k22cz",
          "content": "vote for A. <br>https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon Route 53 private hosted zone in its AWS account. The private hosted zone is connected to the company's on-premises data center by an AWS Direct Connect connection. Virtual machines (VMs) in the on-premises data center need to resolve DNS queries that exist in the private hosted zone.<br>What is the MOST operationally efficient solution that meets this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Create a Route 53 inbound resolver. Configure the on-premises VMs to use the inbound resolver.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Route 53 outbound resolver. Configure the on-premises VMs to use the outbound resolver.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the security group on the Route 53 private hosted zone by adding an inbound rule for the on-premises CIDR range.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a Route 53 public hosted zone. Create an NS record for the private hosted zone. Query the public hosted zone from the on-premises VMs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 81 discussion",
      "discusstion": [
        {
          "id": 592177,
          "date": "Tue 26 Apr 2022 09:30",
          "username": "Mikilo",
          "content": "leaning towards A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 633156,
          "date": "Mon 18 Jul 2022 22:09",
          "username": "mohamedbaaws_arn_name",
          "content": "Answer is A: inbound resolver.<br>B is not correct because you need the resolver to accept queries from outside your VPC (onprem)<br>C is just a distractor, nothing to do with the given scenario.<br>D is another possibility but you may not want your traffic to go over the internet, so D is not correctQuestion state \\\"Virtual machines (VMs) running in the on-premises data center must resolve DNS requests originating from the private hosted zone\\\" . It's mean B is true",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 640648,
          "date": "Mon 01 Aug 2022 15:24",
          "username": "aws_arn_name",
          "content": "Question state \\\"Virtual machines (VMs) running in the on-premises data center must resolve DNS requests originating from the private hosted zone\\\" . It's mean B is true",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 629356,
          "date": "Sun 10 Jul 2022 00:30",
          "username": "Goozian",
          "content": "A is correct. as long as we are using Direct Connect / Site2Site VPN, Resolver is the best option. Since on-prem servers are going to resolve, should be inbound endpoint.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 626341,
          "date": "Sun 03 Jul 2022 01:45",
          "username": "methamode",
          "content": "This is absolutely A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 625951,
          "date": "Sat 02 Jul 2022 07:30",
          "username": "DuniX33",
          "content": "As it says \\\"The DNS service included in AWS Managed Microsoft AD uses conditional forwarders to forward domain resolution to either Amazon Route 53 (for domains in the awscloud.com zone) or to on-premises DNS servers (for domains in the example.com zone).\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 615061,
          "date": "Sat 11 Jun 2022 21:18",
          "username": "AWS_SJ",
          "content": "I believe this is A<br><br>How do I configure a Route 53 Resolver inbound endpoint to resolve DNS records in my private hosted zone from my remote network?<br>https://aws.amazon.com/premiumsupport/knowledge-center/route53-resolve-with-inbound-endpoint/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 610478,
          "date": "Thu 02 Jun 2022 09:36",
          "username": "SkajusSkajus",
          "content": "I think it is D.  Because private zones can not be queried from outside of vpcMy bad. Using resolvers you can. But to configure each of instance to forward to inbound connector=E2=80=A6",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 610483,
          "date": "Thu 02 Jun 2022 09:51",
          "username": "Skajus",
          "content": "My bad. Using resolvers you can. But to configure each of instance to forward to inbound connector=E2=80=A6",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608757,
          "date": "Sun 29 May 2022 14:58",
          "username": "ude",
          "content": "Selected Answer: A<br><br>https://medium.com/tuimm/resolve-aws-private-hosted-zones-from-on-premise-with-route-53-inbound-resolver-ba683b371522",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 605749,
          "date": "Mon 23 May 2022 02:33",
          "username": "altonh",
          "content": "Most are favoring B.  But the 2nd line in B ('Configure the on-premises VMs to use the outbound resolver.') is incorrect. You don't need to configure anything on on-premise)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 599364,
          "date": "Tue 10 May 2022 04:26",
          "username": "Finger41",
          "content": "B - https://aws.amazon.com/es/premiumsupport/knowledge-center/route53-resolve-with-outbound-endpoint/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 597183,
          "date": "Thu 05 May 2022 09:33",
          "username": "osclr",
          "content": "I think could be B:<br>https://aws.amazon.com/es/premiumsupport/knowledge-center/route53-resolve-with-outbound-endpoint/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 597182,
          "date": "Thu 05 May 2022 09:33",
          "username": "osclr",
          "content": "I think could be B:<br>https://aws.amazon.com/es/premiumsupport/knowledge-center/route53-resolve-with-outbound-endpoint/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 596535,
          "date": "Wed 04 May 2022 07:48",
          "username": "everythingship",
          "content": "Answer is A. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 592209,
          "date": "Tue 26 Apr 2022 10:04",
          "username": "Mikilo",
          "content": "https://d1.awsstatic.com/whitepapers/hybrid-cloud-dns-options-for-vpc.pdf<br><br>looking at Figure 2: I will change to C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591264,
          "date": "Mon 25 Apr 2022 00:38",
          "username": "Mecdrox",
          "content": "None of these answers seem to accomplish the requirement? https://aws.amazon.com/blogs/security/how-to-centralize-dns-management-in-a-multi-account-environment/<br><br>I mean MAYBE D?<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html#NSrecords",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uploaded its website files to an Amazon S3 bucket that has S3 Versioning enabled. The company uses an Amazon CloudFront distribution with the S3 bucket as the origin. The company recently modified the files, but the object names remained the same. Users report that old content is still appearing on the website.<br>How should a SysOps administrator remediate this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Create a CloudFront invalidation, and add the path of the updated files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFront signed URL to update each object immediately.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an S3 origin access identity (OAI) to display only the updated files to users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Disable S3 Versioning on the S3 bucket so that the updated files can replace the old files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 81 discussion",
      "discusstion": [
        {
          "id": 656863,
          "date": "Fri 02 Sep 2022 04:26",
          "username": "princajen",
          "content": "Answer is A!<br>.Short description<br>By default, CloudFront caches a response from Amazon S3 for 24 hours (Default TTL of 86,400 seconds). If your request lands at an edge location that served the Amazon S3 response within 24 hours, then CloudFront uses the cached response. This happens even if you updated the content in Amazon S3.<br><br>Use one of the following ways to push the updated Amazon S3 content from CloudFront:<br><br>Invalidate the Amazon S3 objects.<br>Use object versioning<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serving-outdated-content-s3/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 740704,
          "date": "Sat 10 Dec 2022 06:49",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720878,
          "date": "Thu 17 Nov 2022 22:28",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696250,
          "date": "Sun 16 Oct 2022 15:10",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPC networks named VPC A and VPC B.  The VPC A CIDR block is 10.0.0.0/16 and the VPC B CIDR block is 172.31.0.0/16. The company wants to establish a VPC peering connection named pcx-12345 between both VPCs.<br>Which rules should appear in the route table of VPC A after configuration? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>A. Destination: 10.0.0.0/16, Target: Local<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Destination: 172.31.0.0/16, Target: Local<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Destination: 10.0.0.0/16, Target: pcx-12345<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Destination: 172.31.0.0/16, Target: pcx-12345<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Destination: 10.0.0.0/16, Target: 172.31.0.0/16<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 82 discussion",
      "discusstion": [
        {
          "id": 740706,
          "date": "Sat 10 Dec 2022 06:52",
          "username": "michaldavid",
          "content": "A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 720879,
          "date": "Thu 17 Nov 2022 22:30",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716873,
          "date": "Sat 12 Nov 2022 19:51",
          "username": "Atown",
          "content": "I agree with A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 658908,
          "date": "Sun 04 Sep 2022 04:06",
          "username": "kati2k22cz",
          "content": "Yes, A and D. <br>lookthe table on this doc<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-routing.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company analyzes sales data for its customers. Customers upload files to one of the company's Amazon S3 buckets, and a message is posted to an Amazon<br>Simple Queue Service (Amazon SQS) queue that contains the object Amazon Resource Name (ARN). An application that runs on an Amazon EC2 instance polls the queue and processes the messages. The processing time depends on the size of the file.<br>Customers are reporting delays in the processing of their files. A SysOps administrator decides to configure Amazon EC2 Auto Scaling as the first step. The<br>SysOps administrator creates an Amazon Machine Image (AMI) that is based on the existing EC2 instance. The SysOps administrator also creates a launch template that references the AMI.<br>How should the SysOps administrator configure the Auto Scaling policy to improve the response time?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>A. Add several different instance sizes in the launch template. Create an Auto Scaling policy based on the ApproximateNumberOfMessagesVisible metric to select the size of the instance based on the number of messages in the queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling policy based on the ApproximateNumberOfMessagesDelayed metric to scale the number of instances based on the number of messages in the queue that have been delayed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a custom metric based on the ASGAverageCPUUtilization metric and the GroupPendingInstances metric from the Auto Scaling group. Modify the application to calculate the metric and post the metric to Amazon CloudWatch once each minute. Create an Auto Scaling policy based on this metric to scale the number of instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom metric based on the ApproximateNumberOfMessagesVisible metric and the number of instances in the InService state in the Auto Scaling group. Modify the application to calculate the metric and post the metric to Amazon CloudWatch once each minute. Create an Auto Scaling policy based on this metric to scale the number of instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 83 discussion",
      "discusstion": [
        {
          "id": 754559,
          "date": "Fri 23 Dec 2022 22:34",
          "username": "Mila28",
          "content": "I'm agree with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752605,
          "date": "Wed 21 Dec 2022 18:31",
          "username": "foreverlearner",
          "content": "The issue here is that the app is taking too long to process the files. This means that the messages are in the SQS queue, just they're not being processed fast enough.<br><br>It can't be B as \\\"ApproximateNumberOfMessagesDelayed =E2=80=93 Returns the approximate number of messages in the queue that are delayed and not available for reading immediately\\\" (https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html). This would mean that the messages are not available, which isn't the case in this question<br><br>The link posted by zolthar_z clearly explains why it's D.  The app takes a variable amount of time to process each message, hence the app should calculate the Backlog per instance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 750169,
          "date": "Mon 19 Dec 2022 19:56",
          "username": "zolthar_z",
          "content": "The answer is D: https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728154,
          "date": "Sun 27 Nov 2022 12:26",
          "username": "marcelodbamarcelodba",
          "content": "It's DAns is B",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 739852,
          "date": "Fri 09 Dec 2022 07:48",
          "username": "marcelodba",
          "content": "Ans is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720892,
          "date": "Thu 17 Nov 2022 22:39",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 715688,
          "date": "Fri 11 Nov 2022 03:00",
          "username": "weixing",
          "content": "It is D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 659188,
          "date": "Sun 04 Sep 2022 12:59",
          "username": "kati2k22cz",
          "content": "B. <br>Some explanations of ApproximateNumberOfMessagesDelayed attribute<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a multi-tier web application with two Amazon EC2 instances in one Availability Zone in the us-east-1 Region. A SysOps administrator must migrate one of the EC2 instances to a new Availability Zone.<br>Which solution will accomplish this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>A. Copy the EC2 instance to a different Availability Zone. Terminate the original instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Machine Image (AMI) from the EC2 instance and launch it in a different Availability Zone. Terminate the original instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the EC2 instance to a different Availability Zone using the AWS CLI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stop the EC2 instance, modify the Availability Zone, and start the instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 84 discussion",
      "discusstion": [
        {
          "id": 740710,
          "date": "Sat 10 Dec 2022 07:01",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720893,
          "date": "Thu 17 Nov 2022 22:40",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656871,
          "date": "Fri 02 Sep 2022 04:34",
          "username": "princajen",
          "content": "Answer is B!<br><br>It's not possible to move an existing instance to another subnet, Availability Zone, or VPC.  Instead, you can manually migrate the instance by creating a new Amazon Machine Image (AMI) from the source instance. Then, launch a new instance using the new AMI in the desired subnet, Availability Zone, or VPC.  Finally, you can reassign any Elastic IP addresses from the source instance to the new instance.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/move-ec2-instance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expanding its fleet of Amazon EC2 instances before an expected increase of traffic. When a SysOps administrator attempts to add more instances, an InstanceLimitExceeded error is returned.<br>What should the SysOps administrator do to resolve this error?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Add an additional CIDR block to the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the EC2 instances in a different Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch new EC2 instances in another VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Service Quotas to request an EC2 quota increase.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 85 discussion",
      "discusstion": [
        {
          "id": 740712,
          "date": "Sat 10 Dec 2022 07:03",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720894,
          "date": "Thu 17 Nov 2022 22:40",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656873,
          "date": "Fri 02 Sep 2022 04:35",
          "username": "princajen",
          "content": "Description<br>You get the InstanceLimitExceeded error when you try to launch a new instance or restart a stopped instance.<br><br>Cause<br>If you get an InstanceLimitExceeded error when you try to launch a new instance or restart a stopped instance, you have reached the limit on the number of instances that you can launch in a Region. When you create your AWS account, we set default limits on the number of instances you can run on a per-Region basis.<br><br>Solution<br>You can request an instance limit increase on a per-region basis.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/troubleshooting-launch.html#troubleshooting-launch-limit",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to prohibit its developers from using a particular family of Amazon EC2 instances. The company uses AWS Organizations and wants to apply the restriction across multiple accounts.<br>What is the MOST operationally efficient way for the company to apply service control policies (SCPs) to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#86",
          "answers": [
            {
              "choice": "<p>A. Add the accounts to an organizational unit (OU). Apply the SCPs to the OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the accounts to resource groups in AWS Resource Groups. Apply the SCPs to the resource groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Apply the SCPs to each developer account<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enroll the accounts with AWS Control Tower. Apply the SCPs to the AWS Control Tower management account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 86 discussion",
      "discusstion": [
        {
          "id": 740714,
          "date": "Sat 10 Dec 2022 07:06",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720896,
          "date": "Thu 17 Nov 2022 22:42",
          "username": "Liongeek",
          "content": "Ans: A<br>Cause it's the most efficient",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 686479,
          "date": "Wed 05 Oct 2022 01:21",
          "username": "Kinetix",
          "content": "Question says Most Operationally Efficient. If they do not already use CT it adds another layer of complexity. They will still need to create OU's for the Developers anyway.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 684512,
          "date": "Sun 02 Oct 2022 00:50",
          "username": "bakjeeoneKinetix",
          "content": "D, it is not required OU , it is sufficient by Control TowerQuestion says Most Operationally Efficient. If they do not<br> already use CT it adds another layer of complexity. They will still need to create OU's for the Developers anyway. Its A",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 686478,
          "date": "Wed 05 Oct 2022 01:20",
          "username": "Kinetix",
          "content": "Question says Most Operationally Efficient. If they do not<br> already use CT it adds another layer of complexity. They will still need to create OU's for the Developers anyway. Its A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656876,
          "date": "Fri 02 Sep 2022 04:39",
          "username": "princajen",
          "content": "Answer is A!<br><br>https://aws.amazon.com/blogs/industries/best-practices-for-aws-organizations-service-control-policies-in-a-multi-account-environment/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application is running on an Amazon EC2 instance in a VPC with the default DHCP option set. The application connects to an on-premises Microsoft SQL<br>Server database with the DNS name mssql.example.com. The application is unable to resolve the database DNS name.<br>Which solution will fix this problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Route 53 Resolver inbound endpoint. Add a forwarding rule for the domain example.com. Associate the forwarding rule with the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Route 53 Resolver inbound endpoint. Add a system rule for the domain example.com. Associate the system rule with the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Route 53 Resolver outbound endpoint. Add a forwarding rule for the domain example.com. Associate the forwarding rule with the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Route 53 Resolver outbound endpoint. Add a system rule for the domain example.com. Associate the system rule with the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 87 discussion",
      "discusstion": [
        {
          "id": 720898,
          "date": "Thu 17 Nov 2022 22:43",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 716874,
          "date": "Sat 12 Nov 2022 19:54",
          "username": "Atown",
          "content": "C<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659363,
          "date": "Sun 04 Sep 2022 17:43",
          "username": "princajenprincajen",
          "content": "A!<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-rules-managing.htmlSorry C!",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659364,
          "date": "Sun 04 Sep 2022 17:43",
          "username": "princajen",
          "content": "Sorry C!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 659221,
          "date": "Sun 04 Sep 2022 13:38",
          "username": "kati2k22cz",
          "content": "Checked its C. <br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is hosted by an internet provider at app.example.com. The company wants to access the application by using www.company.com, which the company owns and manages with Amazon Route 53.<br>Which Route 53 record should be created to address this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>A. A record<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Alias record<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. CNAME record<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Pointer (PTR) record<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 88 discussion",
      "discusstion": [
        {
          "id": 740800,
          "date": "Sat 10 Dec 2022 10:17",
          "username": "BugsBunny9998666",
          "content": "URL to URL is CNAME.  probably the only question in a whole sys ops where answer is CNAME",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 740715,
          "date": "Sat 10 Dec 2022 07:09",
          "username": "michaldavid",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720899,
          "date": "Thu 17 Nov 2022 22:44",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659297,
          "date": "Sun 04 Sep 2022 15:07",
          "username": "kati2k22cz",
          "content": "C is correct.<br>\\\"A CNAME record can redirect DNS queries to any DNS record. For example, you can create a CNAME record that redirects queries from acme.example.com to zenith.example.com or to acme.example.org. \\\"<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#89",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company expanded its web application to serve a worldwide audience. A SysOps administrator has implemented a multi-Region AWS deployment for all production infrastructure. The SysOps administrator must route traffic based on the location of resources.<br>Which Amazon Route 53 routing policy should the SysOps administrator use to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>A. Geolocation routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Geoproximity routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency-based routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Multivalue answer routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 89 discussion",
      "discusstion": [
        {
          "id": 659191,
          "date": "Sun 04 Sep 2022 13:03",
          "username": "haxaffeeshure4shure",
          "content": "Should be B because it states \\\"based on location of resources\\\". Geolocation is used for based on location of users. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.htmlThis is a great explanation",
          "upvote_count": "71",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 694753,
          "date": "Fri 14 Oct 2022 15:04",
          "username": "shure4shure",
          "content": "This is a great explanation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 740717,
          "date": "Sat 10 Dec 2022 07:11",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720900,
          "date": "Thu 17 Nov 2022 22:46",
          "username": "Liongeek",
          "content": "Ans: B<br>Location of resources -based",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716875,
          "date": "Sat 12 Nov 2022 19:56",
          "username": "Atown",
          "content": "Answer is B<br><br>Question \\\"location of resources\\\"<br><br>Geolocation routing policy =E2=80=93 Use when you want to route traffic based on the location of your users. You can use geolocation routing to create records in a private hosted zone.<br><br>Geoproximity routing policy =E2=80=93 Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696370,
          "date": "Sun 16 Oct 2022 18:21",
          "username": "Surferbolt",
          "content": "B.  Geoproximity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659367,
          "date": "Sun 04 Sep 2022 17:48",
          "username": "princajen",
          "content": "Geoproximity routing policy =E2=80=93 Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator wants to upload a file that is 1 TB in size from on-premises to an Amazon S3 bucket using multipart uploads.<br>What should the SysOps administrator do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>A. Upload the file using the S3 console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the s3api copy-object command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the s3api put-object command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the s3 cp command<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 90 discussion",
      "discusstion": [
        {
          "id": 659369,
          "date": "Sun 04 Sep 2022 17:52",
          "username": "princajen",
          "content": "I vote for D!<br><br>It's a best practice to use aws s3 commands (such as aws s3 cp) for multipart uploads and downloads, because these aws s3 commands automatically perform multipart uploading and downloading based on the file size. By comparison, aws s3api commands, such as aws s3api create-multipart-upload, should be used only when aws s3 commands don't support a specific upload need, such as when the multipart upload involves multiple servers, a multipart upload is manually stopped and resumed later, or when the aws s3 command doesn't support a required request parameter.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-multipart-upload-cli/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 746828,
          "date": "Fri 16 Dec 2022 06:18",
          "username": "MrMLB",
          "content": "The correct answer is D: Use the s3 cp command.<br><br>s3 cp file.txt s3://my-bucket/ --multipart-upload",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 740718,
          "date": "Sat 10 Dec 2022 07:13",
          "username": "michaldavid",
          "content": "dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720901,
          "date": "Thu 17 Nov 2022 22:47",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716879,
          "date": "Sat 12 Nov 2022 20:02",
          "username": "Atown",
          "content": "The Correct answer is D<br><br>Read Article<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-multipart-upload-cli/<br><br>To use a high-level aws s3 command for your multipart upload, run this command:<br>$ aws s3 cp large_test_file s3://DOC-EXAMPLE-BUCKET/<br><br>Important: Use this aws s3api procedure only when aws s3 commands don't support a specific upload need",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 682161,
          "date": "Thu 29 Sep 2022 00:25",
          "username": "AWS21",
          "content": "I believe the correct answer is \\\"D\\\".<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 674825,
          "date": "Wed 21 Sep 2022 07:47",
          "username": "Gorille69",
          "content": "It's a best practice to use aws s3 commands (such as aws s3 cp) for multipart uploads and downloads. here , there is a multipart uploads",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659378,
          "date": "Sun 04 Sep 2022 18:09",
          "username": "kati2k22cz",
          "content": "Choose C.  put-object is the answer.<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/put-object.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659197,
          "date": "Sun 04 Sep 2022 13:13",
          "username": "haxaffee",
          "content": "Ill go with D (aws s3 cp) on that one. It's recommended at https://aws.amazon.com/premiumsupport/knowledge-center/s3-multipart-upload-cli/ and there is more to be done for s3api to work.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application team is working with a SysOps administrator to define Amazon CloudWatch alarms for an application. The application team does not know the application's expected usage or expected growth.<br>Which solution should the SysOps administrator recommend?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#91",
          "answers": [
            {
              "choice": "<p>A. Create CloudWatch alarms that are based on anomaly detection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create CloudWatch alarms by using a set of composite alarms.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create CloudWatch alarms by using static thresholds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create CloudWatch alarms that treat missing data as breaching.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 91 discussion",
      "discusstion": [
        {
          "id": 740723,
          "date": "Sat 10 Dec 2022 07:21",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720903,
          "date": "Thu 17 Nov 2022 22:48",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659495,
          "date": "Sun 04 Sep 2022 21:48",
          "username": "kati2k22cz",
          "content": "Nice choice to use CloudWatch Anomaly Detection. Letter A<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659371,
          "date": "Sun 04 Sep 2022 17:54",
          "username": "princajen",
          "content": "A!<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#92",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a stateless application that is hosted on an Amazon EC2 instance. Users are reporting performance issues. A SysOps administrator reviews the<br>Amazon CloudWatch metrics for the application and notices that the instance's CPU utilization frequently reaches 90% during business hours.<br>What is the MOST operationally efficient solution that will improve the application's responsiveness?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>A. Configure CloudWatch logging on the EC2 instance. Configure a CloudWatch alarm for CPU utilization to alert the SysOps administrator when CPU utilization goes above 90%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Client VPN connection to allow the application users to connect directly to the EC2 instance private IP address to reduce latency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group, and assign it to an Application Load Balancer. Configure a target tracking scaling policy that is based on the average CPU utilization of the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudWatch alarm that activates when the EC2 instance's CPU utilization goes above 80%. Configure the alarm to invoke an AWS Lambda function that vertically scales the instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 92 discussion",
      "discusstion": [
        {
          "id": 740724,
          "date": "Sat 10 Dec 2022 07:22",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720904,
          "date": "Thu 17 Nov 2022 22:49",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716882,
          "date": "Sat 12 Nov 2022 20:09",
          "username": "Atown",
          "content": "I vote C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659622,
          "date": "Mon 05 Sep 2022 01:24",
          "username": "kati2k22cz",
          "content": "C<br>same example on this doc<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company uses an Amazon ElastiCache for Memcached cluster for in-memory caching of popular product queries on the shopping site. When viewing recent Amazon CloudWatch metrics data for the ElastiCache cluster, the SysOps administrator notices a large number of evictions.<br>Which of the following actions will reduce these evictions? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>A. Add an additional node to the ElastiCache cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the ElastiCache time to live (TTL).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the individual node size inside the ElastiCache cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Put an Elastic Load Balancer in front of the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Simple Queue Service (Amazon SQS) to decouple the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 93 discussion",
      "discusstion": [
        {
          "id": 659229,
          "date": "Sun 04 Sep 2022 13:47",
          "username": "haxaffee",
          "content": "Scale Out and or Scale Up -> https://d1.awsstatic.com/training-and-certification/docs-sysops-associate/AWS-Certified-SysOps-Administrator-Associate_Sample-Questions_C02.pdf Question 2",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 740725,
          "date": "Sat 10 Dec 2022 07:24",
          "username": "michaldavid",
          "content": "A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 680092,
          "date": "Mon 26 Sep 2022 21:28",
          "username": "Gianiluca",
          "content": "The is one of AWS sample exam questions and the answer is A C see - https://d1.awsstatic.com/training-and-certification/docs-sysops-associate/AWS-Certified-SysOps-Administrator-Associate_Sample-Questions.pdf",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator wants to provide access to AWS services by attaching an IAM policy to multiple IAM users. The SysOps administrator also wants to be able to change the policy and create new versions.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Add the users to an IAM service-linked role. Attach the policy to the role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the users to an IAM user group. Attach the policy to the group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS managed policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a customer managed policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an inline policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 94 discussion",
      "discusstion": [
        {
          "id": 696387,
          "date": "Sun 16 Oct 2022 18:41",
          "username": "Surferbolt",
          "content": "BD.  Don't use AWS managed policies because you can't customise those.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 659662,
          "date": "Mon 05 Sep 2022 03:50",
          "username": "kati2k22cz",
          "content": "Yes, B and D<br>https://docs.aws.amazon.com/acm/latest/userguide/authen-custmanagedpolicies.html<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores critical data in Amazon S3 buckets. A SysOps administrator must build a solution to record all S3 API activity.<br>Which action will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Configure S3 bucket metrics to record object access logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudTrail trail to log data events for all S3 objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 server access logging for each S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS IAM Access Analyzer for Amazon S3 to store object access logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 95 discussion",
      "discusstion": [
        {
          "id": 720905,
          "date": "Thu 17 Nov 2022 22:59",
          "username": "Liongeek",
          "content": "I'll go B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696386,
          "date": "Sun 16 Oct 2022 18:40",
          "username": "Surferbolt",
          "content": "B.  CloudTrail logs API calls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659373,
          "date": "Sun 04 Sep 2022 17:57",
          "username": "princajenchanaka5",
          "content": "B!<br><br>Amazon S3 is integrated with AWS CloudTrail, a service that provides a record of actions taken by a user, role, or an AWS service in Amazon S3. CloudTrail captures a subset of API calls for Amazon S3 as events, including calls from the Amazon S3 console and code calls to the Amazon S3 APIs.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging.htmlQuestion specifies API calls, hence S3 Server access logging is out.",
          "upvote_count": "42",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 665719,
          "date": "Sun 11 Sep 2022 01:51",
          "username": "chanaka5",
          "content": "Question specifies API calls, hence S3 Server access logging is out.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application that uses a MySQL database on an Amazon EC2 instance. The EC2 instance has a General Purpose SSD Amazon Elastic Block<br>Store (Amazon EBS) volume. The company made changes to the application code and now wants to perform load testing to evaluate the impact of the code changes.<br>A SysOps administrator must create a new MySQL instance from a snapshot of the existing production instance. This new instance needs to perform as similarly as possible to the production instance.<br>Which restore option meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#96",
          "answers": [
            {
              "choice": "<p>A. Use EBS fast snapshot restore to create a new General Purpose SSD EBS volume from the production snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use EBS fast snapshot restore to create a new Provisioned IOPS SSD EBS volume from the production snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use EBS snapshot restore to create a new General Purpose SSD EBS volume from the production snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use EBS snapshot restore to create a new Provisioned IOPS SSD EBS volume from the production snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 96 discussion",
      "discusstion": [
        {
          "id": 740732,
          "date": "Sat 10 Dec 2022 07:45",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720909,
          "date": "Thu 17 Nov 2022 23:02",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656891,
          "date": "Fri 02 Sep 2022 04:53",
          "username": "princajen",
          "content": "The answer is A!<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team of on-call engineers frequently needs to connect to Amazon EC2 instances in a private subnet to troubleshoot and run commands. The instances use either the latest AWS-provided Windows Amazon Machine Images (AMIs) or Amazon Linux AMIs.<br>The team has an existing 1AM role for authorization. A SysOps administrator must provide the team with access to the instances by granting IAM permissions to this role.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#97",
          "answers": [
            {
              "choice": "<p>A. Add a statement to the 1AM role policy to allow the ssm:StartSession action on the instances. Instruct the team to use AWS Systems Manager Session Manager to connect to the instances by using the assumed IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate an Elastic IP address and a security group with each instance. Add the engineers' IP addresses to the security group inbound rules. Add a statement to the IAM role policy to allow the ec2:AuthorizeSecurityGrouplngress action so that the team can connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bastion host with an EC2 instance, and associate the bastion host with the VPC.  Add a statement to the 1AM role policy to allow the ec2:CreateVpnConnection action on the bastion host. Instruct the team to use the bastion host endpoint to connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an internet-facing Network Load Balancer. Use two listeners. Forward port 22 to a target group of Linux instances. Forward port 3389 to a target group of Windows instances. Add a statement to the IAM role policy to allow the ec2:CreateRoute action so that the team can connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 97 discussion",
      "discusstion": [
        {
          "id": 740735,
          "date": "Sat 10 Dec 2022 07:48",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720911,
          "date": "Thu 17 Nov 2022 23:05",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696827,
          "date": "Mon 17 Oct 2022 06:35",
          "username": "Surferbolt",
          "content": "A is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 660002,
          "date": "Mon 05 Sep 2022 11:43",
          "username": "kati2k22cz",
          "content": "Agree, its A. <br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to ensure strict adherence to a budget for 25 applications deployed on AWS. Separate teams are responsible for storage, compute, and database costs. A SysOps administrator must implement an automated solution to alert each team when their projected spend will exceed a quarterly amount that has been set by the finance department. The solution cannot incur additional compute, storage, or database costs.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Cost and Usage Reports to send a daily report to an Amazon S3 bucket. Create an AWS Lambda function that will evaluate spend by service and notify each team by using Amazon Simple Notification Service (Amazon SNS) notifications. Invoke the Lambda function when a report is placed in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Cost and Usage Reports to send a daily report to an Amazon S3 bucket. Create a rule in Amazon EventBridge (Amazon CloudWatch Events) to evaluate the spend by service and notify each team by using Amazon Simple Queue Service (Amazon SQS) when the cost threshold is exceeded.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Budgets to create one cost budget and select each of the services in use. Specify the budget amount defined by the finance department along with the forecasted cost threshold. Enter the appropriate email recipients for the budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Budgets to create a cost budget for each team, filtering by the services they own. Specify the budget amount defined by the finance department along with a forecasted cost threshold. Enter the appropriate email recipients for each budget.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 98 discussion",
      "discusstion": [
        {
          "id": 740738,
          "date": "Sat 10 Dec 2022 07:50",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720915,
          "date": "Thu 17 Nov 2022 23:07",
          "username": "Liongeek",
          "content": "Ans: D<br>You will need one budget per deparment",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696824,
          "date": "Mon 17 Oct 2022 06:34",
          "username": "Surferbolt",
          "content": "D.  Budgets",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 660037,
          "date": "Mon 05 Sep 2022 12:17",
          "username": "kati2k22cz",
          "content": "Letter D.  Cost per team<br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a static website on Amazon S3. An Amazon CloudFront distribution presents this site to global users. The company uses the Managed-<br>CachingDisabled CloudFront cache policy. The company's developers confirm that they frequently update a file in Amazon S3 with new information.<br>Users report that the website presents correct information when the website first loads the file. However, the users' browsers do not retrieve the updated file after a refresh.<br>What should a SysOps administrator recommend to fix this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Add a Cache-Control header field with max-age0 to the S3 object.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the CloudFront cache policy to Managed-CachingOptimized.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Disable bucket versioning in the S3 bucket configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable content compression in the CloudFront configuration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 99 discussion",
      "discusstion": [
        {
          "id": 740739,
          "date": "Sat 10 Dec 2022 07:53",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 716889,
          "date": "Sat 12 Nov 2022 20:21",
          "username": "Atown",
          "content": "Would it not be B since Caching is already Disabled?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696894,
          "date": "Mon 17 Oct 2022 06:51",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659375,
          "date": "Sun 04 Sep 2022 18:02",
          "username": "princajen",
          "content": "A!<br>You can control how long your files stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. Increasing the duration means that your users get better performance because your files are more likely to be served directly from the edge cache. A longer duration also reduces the load on your origin.<br><br>To change the cache duration for an individual file, you can configure your origin to add a Cache-Control header with the max-age or s-maxage directive, or an Expires header to the file.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a policy that requires all Amazon EC2 instances to have a specific set of tags. If an EC2 instance does not have the required tags, the noncompliant instance should be terminated.<br>What is the MOST operationally efficient solution that meets these requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#100",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send all EC2 instance state changes to an AWS Lambda function to determine if each instance is compliant. Terminate any noncompliant instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy that enforces all EC2 instance tag requirements. If the required tags are not in place for an instance, the policy will terminate noncompliant instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to determine if each EC2 instance is compliant and terminate an instance if it is noncompliant. Schedule the Lambda function to invoke every 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config rule to check if the required tags are present. If an EC2 instance is noncompliant, invoke an AWS Systems Manager Automation document to terminate the instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 100 discussion",
      "discusstion": [
        {
          "id": 740740,
          "date": "Sat 10 Dec 2022 07:53",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720815,
          "date": "Thu 17 Nov 2022 20:56",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696896,
          "date": "Mon 17 Oct 2022 06:52",
          "username": "Surferbolt",
          "content": "D.  Use Config.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662608,
          "date": "Wed 07 Sep 2022 16:43",
          "username": "kati2k22cz",
          "content": "its D. <br>https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    }
  ]
}
