var SAP_C02_Part1 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs.<br>The company has the following DNS resolution requirements:<br>On-premises systems should be able to resolve and connect to cloud.example.com.<br>All VPCs should be able to resolve cloud.example.com.<br>There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway.<br>Which architecture should the company use to meet these requirements with the HIGHEST performance?<br><br></p>",
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
              "choice": "<p>A. Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the private hosted zone to all the VPCs. Deploy an Amazon EC2 conditional forwarder in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the conditional forwarder.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Associate the private hosted zone to the shared services VPCreate a Route 53 outbound resolver in the shared services VPAttach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the outbound resolver.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate the private hosted zone to the shared services VPC.  Create a Route 53 inbound resolver in the shared services VPC.  Attach the shared services VPC to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741364,
          "date": "Sun 11 Dec 2022 03:06",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "A.  Correct answer. Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>NOT B.  EC2 conditional forwarder will not meet Highest performance requirement.<br><br>NOT C.  Missing: Need to associate private hosted zone to all VPC. <br>\\\"All VPC's will need to associate their private hosted zones to all other VPC's if required to.\\\"<br>Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>NOT D.  Missing: Need to associate private hosted zone to all VPC. <br>\\\"All VPC's will need to associate their private hosted zones to all other VPC's if required to.\\\"<br>Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 852751,
          "date": "Tue 28 Mar 2023 06:11",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Associate the private hosted zone to all the VPCs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835464,
          "date": "Fri 10 Mar 2023 22:42",
          "username": "\t\t\t\tIndreshKumar\t\t\t",
          "content": "A.  Correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831995,
          "date": "Tue 07 Mar 2023 15:25",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "Correct answer is A<br><br>Why D is not correct - The transit gateway may need to forward requests to the inbound resolver in order to introduce additional latency.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 831689,
          "date": "Tue 07 Mar 2023 10:08",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "ttps://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 827664,
          "date": "Fri 03 Mar 2023 05:44",
          "username": "\t\t\t\tkrushna5966\t\t\t",
          "content": "Every one has selected option A so why system is showing Option D can anyone explain",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826508,
          "date": "Thu 02 Mar 2023 06:02",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818661,
          "date": "Thu 23 Feb 2023 03:00",
          "username": "\t\t\t\tGabehcoud\t\t\t",
          "content": "can I check with those who has written the exam, <br>1. was this question even there? <br>2. Was the answer A right?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816007,
          "date": "Tue 21 Feb 2023 00:24",
          "username": "\t\t\t\tospherenet\t\t\t",
          "content": "It appears that Option A is the correct answer. The company can associate the private hosted zone to all the VPCs and create a Route 53 inbound resolver in the shared services VPC.  They can then attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver. This will allow on-premises systems to resolve and connect to cloud.example.com and all VPCs to resolve cloud.example.com with the highest performance. Option B is incorrect because an EC2 conditional forwarder will not meet the highest performance requirement. Option C and D are incorrect because they both miss the requirement of associating the private hosted zone to all the VPCs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809114,
          "date": "Wed 15 Feb 2023 05:55",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The best architecture to meet the given requirements with the HIGHEST performance would be Option A:<br>A.  Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.<br><br>This architecture ensures that all VPCs can resolve the cloud.example.com domain using the private hosted zone. Additionally, it creates a Route 53 inbound resolver in the shared services VPC that can handle DNS resolution requests from on-premises systems through the transit gateway. This setup allows for fast and efficient DNS resolution with minimal latency.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 804661,
          "date": "Fri 10 Feb 2023 20:10",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779764,
          "date": "Wed 18 Jan 2023 09:42",
          "username": "\t\t\t\tJacktheriser2019\t\t\t",
          "content": "A answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776540,
          "date": "Sun 15 Jan 2023 13:36",
          "username": "\t\t\t\tNicocacik\t\t\t",
          "content": "Definitely A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774663,
          "date": "Fri 13 Jan 2023 17:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct option would be option A:<br><br>Associate the private hosted zone to all the VPCs.<br>Create a Route 53 inbound resolver in the shared services VPC. <br>Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.<br>This option will allow the on-premises systems to resolve and connect to cloud.example.com by forwarding the DNS queries to the inbound resolver in the shared services VPC, which will then forward the queries to the private hosted zone. All VPCs will be able to resolve cloud.example.com by resolving the queries through the private hosted zone associated to all VPCs. Additionally, this option takes advantage of the already existing AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway, which will provide the highest performance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 771071,
          "date": "Tue 10 Jan 2023 06:14",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "A is correct answer as all VPCs need to be accessed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 752894,
          "date": "Thu 22 Dec 2022 01:16",
          "username": "\t\t\t\tWuKongCoder\t\t\t",
          "content": "A correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 751834,
          "date": "Wed 21 Dec 2022 04:23",
          "username": "\t\t\t\tarron86\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is providing weather data over a REST-based API to several customers. The API is hosted by Amazon API Gateway and is integrated with different AWS Lambda functions for each API operation. The company uses Amazon Route 53 for DNS and has created a resource record of weather.example.com. The company stores data for the API in Amazon DynamoDB tables. The company needs a solution that will give the API the ability to fail over to a different AWS Region.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Deploy a new set of Lambda functions in a new Region. Update the API Gateway API to use an edge-optimized API endpoint with Lambda functions from both Regions as targets. Convert the DynamoDB tables to global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a new API Gateway API and Lambda functions in another Region. Change the Route 53 DNS record to a multivalue answer. Add both API Gateway APIs to the answer. Enable target health monitoring. Convert the DynamoDB tables to global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new API Gateway API and Lambda functions in another Region. Change the Route 53 DNS record to a failover record. Enable target health monitoring. Convert the DynamoDB tables to global tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new API Gateway API in a new Region. Change the Lambda functions to global functions. Change the Route 53 DNS record to a multivalue answer. Add both API Gateway APIs to the answer. Enable target health monitoring. Convert the DynamoDB tables to global tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741377,
          "date": "Sun 11 Dec 2022 03:39",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "C. <br>https://docs.aws.amazon.com/apigateway/latest/developerguide/dns-failover.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 852753,
          "date": "Tue 28 Mar 2023 06:12",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C is good here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831693,
          "date": "Tue 07 Mar 2023 10:13",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/dns-failover.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819832,
          "date": "Thu 23 Feb 2023 23:24",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "Easy one :)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 809115,
          "date": "Wed 15 Feb 2023 05:57",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The best solution to give the API the ability to fail over to a different AWS Region would be option C:<br>C.  Deploy a new API Gateway API and Lambda functions in another Region. Change the Route 53 DNS record to a failover record. Enable target health monitoring. Convert the DynamoDB tables to global tables.<br><br>This solution involves deploying a new API Gateway API and Lambda functions in another region. The company should also convert the DynamoDB tables to global tables to enable cross-region replication of the data. Then, the company should change the Route 53 DNS record to a failover record and enable target health monitoring to automatically route traffic to the new region in the event of a failure or outage in the primary region.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 804659,
          "date": "Fri 10 Feb 2023 20:10",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774664,
          "date": "Fri 13 Jan 2023 17:36",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The solution that will meet these requirements is option C:<br><br>Deploy a new API Gateway API and Lambda functions in another Region.<br>Change the Route 53 DNS record to a failover record.<br>Enable target health monitoring.<br>Convert the DynamoDB tables to global tables.<br><br>This solution will allow the API to failover to a different region, by using Route 53 failover record. The failover record will direct traffic to the primary API endpoint (the one in the primary region) as long as it is healthy. If the primary endpoint becomes unavailable, traffic will be directed to the secondary endpoint (the one in the secondary region). Additionally, by converting the DynamoDB tables to global tables, the data will be available in both regions, which is required for the failover scenario. Target health monitoring can be used to monitor the health of the API Gateway, and when it is determined that the primary endpoint is unavailable, the traffic will be directed to the secondary endpoint.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741120,
          "date": "Sat 10 Dec 2022 17:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I agree with answer C.  this is the correct use case of road 53 DNS failover record",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations with a single OU named Production to manage multiple accounts. All accounts are members of the Production OU. Administrators use deny list SCPs in the root of the organization to manage access to restricted services.<br>The company recently acquired a new business unit and invited the new unit's existing AWS account to the organization. Once onboarded, the administrators of the new business unit discovered that they are not able to update existing AWS Config rules to meet the company's policies.<br>Which option will allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance?<br><br></p>",
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
              "choice": "<p>A. Remove the organization's root SCPs that limit access to AWS Config. Create AWS Service Catalog products for the company's standard AWS Config rules and deploy them throughout the organization, including the new account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the new account to the Production OU when adjustments to AWS Config are complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert the organization's root SCPs from deny list SCPs to allow list SCPs to allow the required services only. Temporarily apply an SCP to the organization's root that allows AWS Config actions for principals only in the new account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the organization's root SCP to the Production OU. Move the new account to the Production OU when adjustments to AWS Config are complete.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 740240,
          "date": "Fri 09 Dec 2022 16:57",
          "username": "\t\t\t\tSnip\t\t\t",
          "content": "Right answer is D. <br>An SCP at a lower level can't add a permission after it is blocked by an SCP at a higher level. SCPs can only filter; they never add permissions.<br>SO you need to create a new OU for the new account assign an SCP, and move the root SCP to Production OU. Then move the new account to production OU when AWS config is done.",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 741380,
          "date": "Sun 11 Dec 2022 03:45",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Answer: D. <br><br>Not A: too much overhead and maintenance.<br>Not B: SCP at Root will still deny Config to the temporary OU.<br>Not C: Too much overhead to create allow list.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 852756,
          "date": "Tue 28 Mar 2023 06:16",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 852466,
          "date": "Mon 27 Mar 2023 22:42",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D is the correct answer. Explicit Deny on root can't be bypassed by just adding “allow” in the OU SCP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 831697,
          "date": "Tue 07 Mar 2023 10:24",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "enforce the current policies without introducing additional long-term maintenance -> requires organisaiton SCP to move to Production OU to avoid such issues in future",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829420,
          "date": "Sat 04 Mar 2023 22:18",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D is 100% the correct answer.<br>explicit deny in the root SCPcan't be bypassed even which explicit allow..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827090,
          "date": "Thu 02 Mar 2023 17:12",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827086,
          "date": "Thu 02 Mar 2023 17:11",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Please note Question Constraint: Which option will allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance?<br>Strategies for using SCPs<br>You can configure the service control policies (SCPs) in your organization to work as either of the following:<br>A deny list – actions are allowed by default, and you specify what services and actions are prohibited<br>An allow list – actions are prohibited by default, and you specify what services and actions are allowed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826510,
          "date": "Thu 02 Mar 2023 06:11",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "SCP at root level is the root cause of the new not working and Answer D is right fit for it",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811330,
          "date": "Fri 17 Feb 2023 03:52",
          "username": "\t\t\t\tpromartyr\t\t\t",
          "content": "When they say \\\"Move the organization's root SCP to the Production OU\\\" - where is it moving from? Isn't there only one OU?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>from Onboarding OU to Production OU?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823052,
          "date": "Mon 27 Feb 2023 00:38",
          "username": "\t\t\t\tkamonegi\t\t\t",
          "content": "from Onboarding OU to Production OU?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809117,
          "date": "Wed 15 Feb 2023 06:02",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The best option to allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance would be option D:<br>D.  Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the organization's root SCP to the Production OU. Move the new account to the Production OU when adjustments to AWS Config are complete.<br><br>This solution involves creating a temporary OU named Onboarding for the new account and applying an SCP to the Onboarding OU that allows AWS Config actions. The organization's root SCP should be moved to the Production OU, and the new account should be moved to the Production OU when the adjustments to AWS Config are complete. This approach allows the administrators of the new account to make changes to AWS Config rules while maintaining the current policies in the Production OU.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 806083,
          "date": "Sun 12 Feb 2023 08:58",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "D makes sense but there is something that does not: \\\"Apply an SCP to the Onboarding OU to allow AWS Config actions.\\\" SCPs never allow. I think it mkes D incorrect.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804665,
          "date": "Fri 10 Feb 2023 20:12",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "D is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780429,
          "date": "Wed 18 Jan 2023 22:05",
          "username": "\t\t\t\tskashanali\t\t\t",
          "content": "Right answer is D<br><br>As permission are inherited from root, they have to remove the SCP from root and apply on Production OU..<br>Also allow SCP related to AWS config for onboarding temp OU and revert the changes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774674,
          "date": "Fri 13 Jan 2023 17:43",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Yes, in option D, the solution is to create a temporary OU named Onboarding for the new account. By creating a new OU for the new account, it allows for a new set of permissions and policies to be applied to this account, separate from the existing Production OU.<br><br>Once the new OU is created, an SCP is applied to it to allow AWS Config actions. This SCP allows the new account to make necessary adjustments to AWS Config without being blocked by the existing policies at the root level of the organization.<br><br>Then, the root SCP that is blocking these actions is moved to the Production OU, where it will continue to block these actions for all other accounts that are members of the Production OU.<br><br>Finally, once the necessary adjustments are made, the new account can be moved to the Production OU, where it will be subject to the existing policies and restrictions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This approach is the correct solution because it allows the new account to make necessary adjustments to AWS Config while still adhering to the company's policies, and it does not introduce additional long-term maintenance. The new account will be only in the new OU temporarily, and the SCP blocking AWS Config actions will only be in the root temporarily.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774675,
          "date": "Fri 13 Jan 2023 17:43",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "This approach is the correct solution because it allows the new account to make necessary adjustments to AWS Config while still adhering to the company's policies, and it does not introduce additional long-term maintenance. The new account will be only in the new OU temporarily, and the SCP blocking AWS Config actions will only be in the root temporarily.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743191,
          "date": "Mon 12 Dec 2022 19:43",
          "username": "\t\t\t\tnez15\t\t\t",
          "content": "SAP-CO1 question",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741122,
          "date": "Sat 10 Dec 2022 17:57",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a two-tier web-based application in an on-premises data center. The application layer consists of a single server running a stateful application. The application connects to a PostgreSQL database running on a separate server. The application's user base is expected to grow significantly, so the company is migrating the application and database to AWS. The solution will use Amazon Aurora PostgreSQL, Amazon EC2 Auto Scaling, and Elastic Load Balancing.<br>Which solution will provide a consistent user experience that will allow the application and database tiers to scale?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Enable Aurora Auto Scaling for Aurora Replicas. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Aurora Auto Scaling for Aurora writers. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the round robin routing and sticky sessions enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Aurora Scaling for Aurora writers. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741387,
          "date": "Sun 11 Dec 2022 04:19",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "C. <br>- Aurora writers is a distractor.<br>- Single master mode only has read replica - with Aurora replicas.<br>- Multi master mode, not in the options<br>- NLB does not support round robin and least outstanding algorithmhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 852757,
          "date": "Tue 28 Mar 2023 06:17",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Aurora replicas + ALB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831699,
          "date": "Tue 07 Mar 2023 10:25",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html#Aurora.Replication.Replicas",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 826511,
          "date": "Thu 02 Mar 2023 06:14",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "C.  <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html#Aurora.Replication.Replicas",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809118,
          "date": "Wed 15 Feb 2023 06:03",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The best solution to provide a consistent user experience that will allow the application and database tiers to scale would be option C:<br>C.  Enable Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the round robin routing and sticky sessions enabled.<br><br>This solution involves enabling Aurora Auto Scaling for Aurora Replicas to automatically add and remove read replicas to match the application's workload. The solution also uses an Application Load Balancer to distribute traffic to the application layer, with the round robin routing algorithm to balance the traffic evenly across multiple instances. Sticky sessions should be enabled to maintain session affinity for each user, allowing for a consistent user experience.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774678,
          "date": "Fri 13 Jan 2023 17:45",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C is correct. This solution will provide a consistent user experience by using an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled. This allows the application and database tiers to scale by using Aurora Auto Scaling for Aurora Replicas. This will ensure that the application is able to handle the increased user base while maintaining a consistent user experience. The use of an Application Load Balancer also allows for better routing of traffic to the available Aurora Replicas.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757284,
          "date": "Mon 26 Dec 2022 09:55",
          "username": "\t\t\t\tThaiNT\t\t\t",
          "content": "Using Amazon Aurora Auto Scaling with Aurora replicas<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753295,
          "date": "Thu 22 Dec 2022 13:53",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 748050,
          "date": "Sat 17 Dec 2022 13:37",
          "username": "\t\t\t\tArun_Bala\t\t\t",
          "content": "Correct ans is c",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743193,
          "date": "Mon 12 Dec 2022 19:45",
          "username": "\t\t\t\tnez15\t\t\t",
          "content": "SAP-C01 Question. <br>https://www.examtopics.com/discussions/amazon/view/36075-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses a service to collect metadata from applications that the company hosts on premises. Consumer devices such as TVs and internet radios access the applications. Many older devices do not support certain HTTP headers and exhibit errors when these headers are present in responses. The company has configured an on-premises load balancer to remove the unsupported headers from responses sent to older devices, which the company identified by the User-Agent headers.<br>The company wants to migrate the service to AWS, adopt serverless technologies, and retain the ability to support the older devices. The company has already migrated the applications into a set of AWS Lambda functions.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB.  Configure the ALB to invoke the correct Lambda function for each type of request. Create a CloudFront function to remove the problematic headers based on the value of the User-Agent header.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway REST API for the metadata service. Configure API Gateway to invoke the correct Lambda function for each type of request. Modify the default gateway responses to remove the problematic headers based on the value of the User-Agent header.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway HTTP API for the metadata service. Configure API Gateway to invoke the correct Lambda function for each type of request. Create a response mapping template to remove the problematic headers based on the value of the User-Agent. Associate the response data mapping with the HTTP API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB.  Configure the ALB to invoke the correct Lambda function for each type of request. Create a Lambda@Edge function that will remove the problematic headers in response to viewer requests based on the value of the User-Agent header.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 746619,
          "date": "Fri 16 Dec 2022 01:13",
          "username": "\t\t\t\tEricZhang\t\t\t",
          "content": "A.  The only difference between A and D is CloudFront function vs Lambda@Edge. In this case the CloudFront function can remove the response header based on request header and much faster/light-weight.",
          "upvote_count": "18",
          "selected_answers": ""
        },
        {
          "id": 741134,
          "date": "Sat 10 Dec 2022 18:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I think this is answer D: Lambda@Edge can modify headers<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 852759,
          "date": "Tue 28 Mar 2023 06:20",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Cloudfront can do it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 844556,
          "date": "Mon 20 Mar 2023 06:23",
          "username": "\t\t\t\tramyaram\t\t\t",
          "content": "CloudFront functions are very light weight and most efficient for this use case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835540,
          "date": "Sat 11 Mar 2023 01:47",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "\\\"Header manipulation – You can insert, modify, or delete HTTP headers in the request or response.\\\" - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835158,
          "date": "Fri 10 Mar 2023 16:30",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "B as per the question that non Http Device need response other than HTTP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 831709,
          "date": "Tue 07 Mar 2023 10:40",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Confused between A and D , but will go with A in the exam based on below explainatins<br>https://medium.com/trackit/cloudfront-functions-vs-lambda-edge-which-one-should-you-choose-c88527647695<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 827615,
          "date": "Fri 03 Mar 2023 03:57",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "D is correct <br>This solution uses Amazon CloudFront with an Application Load Balancer (ALB) and AWS Lambda@Edge to remove problematic headers based on the User-Agent header. CloudFront can be used as a content delivery network (CDN) to deliver the metadata service to consumer devices while the ALB is used to invoke the correct Lambda function for each type of request. Lambda@Edge is used to modify the response headers in real-time based on the User-Agent header.<br><br>This solution addresses the requirement to support older devices that do not support certain HTTP headers by removing problematic headers based on the value of the User-Agent header. It also leverages serverless technologies such as AWS Lambda and Lambda@Edge for scalability and cost-effectiveness.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 825806,
          "date": "Wed 01 Mar 2023 13:22",
          "username": "\t\t\t\tAppon\t\t\t",
          "content": "In the question its stated that \\\"The company wants to migrate the (metadata) service to AWS...\\\"<br><br>In the answers involving CF, there is no mention of migrating metadata service...am I missing something?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820989,
          "date": "Fri 24 Feb 2023 23:04",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Per the feature comparisons between Lambda and CloudFront functions, A is the correct option as it clearly states it does header manipulation for the response headers and requests. <br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819889,
          "date": "Fri 24 Feb 2023 00:32",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A is the correct answer. Cloudfront functions (not @Edge) are suited for suchlight weight tasks and very important they are cheaper than Cloudfront@Edge which costs x3 the price of the Cloudfront function.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817558,
          "date": "Wed 22 Feb 2023 08:08",
          "username": "\t\t\t\tMahakali\t\t\t",
          "content": "Cloudfront function is the suitable option as it is mentioned as ideal for header manipulations.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817268,
          "date": "Wed 22 Feb 2023 00:07",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Lambda@Edge can modify headers<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816660,
          "date": "Tue 21 Feb 2023 15:22",
          "username": "\t\t\t\tPSPaul\t\t\t",
          "content": "It's should be D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816017,
          "date": "Tue 21 Feb 2023 00:33",
          "username": "\t\t\t\tospherenet\t\t\t",
          "content": "A is the correct answer.<br><br>Explanation:<br><br>CloudFront is a good option for delivering content and improving user experience with caching, reducing latency and increasing availability.<br>An Application Load Balancer (ALB) can be used with CloudFront to route requests to the correct Lambda function.<br>The CloudFront function can be used to remove the problematic headers based on the User-Agent header to support older devices.<br>Using CloudFront and Lambda functions will allow the company to adopt serverless technologies for this use case.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809121,
          "date": "Wed 15 Feb 2023 06:09",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "D: This solution involves creating an Amazon CloudFront distribution for the metadata service and configuring it to forward requests to the Application Load Balancer (ALB), which is used to invoke the correct Lambda function for each type of request. A Lambda@Edge function should be created that will remove the problematic headers in response to viewer requests based on the value of the User-Agent header. This approach allows the company to remove the problematic headers while supporting older devices and using serverless technologies.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 805833,
          "date": "Sun 12 Feb 2023 02:24",
          "username": "\t\t\t\tSubbuKhan\t\t\t",
          "content": "Lambda@Edge lets you run Lambda functions to customize the content that CloudFront delivers, executing the functions in AWS locations closer to the viewer. The functions run in response to CloudFront events, without provisioning or managing servers. You can use Lambda functions to change CloudFront requests and responses at the following points:<br><br>- After CloudFront receives a request from a viewer (viewer request)<br><br>- Before CloudFront forwards the request to the origin (origin request)<br><br>- After CloudFront receives the response from the origin (origin response)<br><br>- Before CloudFront forwards the response to the viewer (viewer response)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under Account A, which belongs to the retail company. The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own AWS account (Account B).<br>Which combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In Account A, set the S3 bucket policy to the following:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In Account A, set the S3 bucket policy to the following:<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In Account B, set the permissions of User_DataProcessor to the following:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In Account B, set the permissions of User_DataProcessor to the following:<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741606,
          "date": "Sun 11 Dec 2022 11:45",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Answer: C & D<br><br>Source: <br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example4.html",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 855471,
          "date": "Thu 30 Mar 2023 10:19",
          "username": "\t\t\t\thpipit\t\t\t",
          "content": "C and D, 100%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 853650,
          "date": "Tue 28 Mar 2023 21:56",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C+D no doubts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 852760,
          "date": "Tue 28 Mar 2023 06:21",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C + D are right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835163,
          "date": "Fri 10 Mar 2023 16:32",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "I would select C as Account A need to grant access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831715,
          "date": "Tue 07 Mar 2023 10:44",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "going with C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829430,
          "date": "Sat 04 Mar 2023 22:38",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C & D are the correct answers ✅",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827622,
          "date": "Fri 03 Mar 2023 04:07",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "C & D<br><br>To allow User_DataProcessor to access the S3 bucket from Account B, the following steps need to be taken:<br><br>In Account A, set the S3 bucket policy to allow access to the bucket from the IAM user in Account B.  This is done by adding a statement to the bucket policy that allows the IAM user in Account B to perform the necessary actions (GetObject and ListBucket) on the bucket and its contents.<br><br>In Account B, create an IAM policy that allows the IAM user (User_DataProcessor) to perform the necessary actions (GetObject and ListBucket) on the S3 bucket and its contents. The policy should reference the ARN of the S3 bucket and the actions that the user is allowed to perform.<br><br>Note: turning on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A is not necessary for this scenario as it is typically used for allowing web browsers to access resources from different domains.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827180,
          "date": "Thu 02 Mar 2023 18:51",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Two ways for Cross account permissions is either through bucket policies or using IAM role.<br>With Bucket Policy you need; and for this question , a user policy is required to delegate access to the user in the partner account. A bucket policy and a userpolicy. and bucket policy will include an arn<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example4.html#access-policies-walkthrough-example4-overview<br><br>C: Bucket Policy in account A<br>D: User Policy in Account B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821217,
          "date": "Sat 25 Feb 2023 06:37",
          "username": "\t\t\t\tvandergun\t\t\t",
          "content": "c&D for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 795394,
          "date": "Wed 01 Feb 2023 19:21",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "I think the answer is C & D. <br>But what's with E? You don't need the principal, but it would still work, right?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780438,
          "date": "Wed 18 Jan 2023 22:18",
          "username": "\t\t\t\tskashanali\t\t\t",
          "content": "Allow specific user and specific actions on the mentioned S3 bucket is the right way. We always think of fine grain access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 770967,
          "date": "Tue 10 Jan 2023 02:00",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760996,
          "date": "Thu 29 Dec 2022 13:32",
          "username": "\t\t\t\tmmendozaf\t\t\t",
          "content": "Permissions is required to provide on the source component, at least.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760806,
          "date": "Thu 29 Dec 2022 10:07",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "It says choose two. <br>C&A <br>C grants access and A whitelists the different domain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760211,
          "date": "Wed 28 Dec 2022 19:47",
          "username": "\t\t\t\tskashanali\t\t\t",
          "content": "Ans C, is for the S3 CORS bucket policy and<br>Ans D, for the User permission set to allow S3 bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748053,
          "date": "Sat 17 Dec 2022 13:47",
          "username": "\t\t\t\tArun_Bala\t\t\t",
          "content": "Ans C & D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a traditional web application on Amazon EC2 instances. The company needs to refactor the application as microservices that run on containers. Separate versions of the application exist in two distinct environments: production and testing. Load for the application is variable, but the minimum load and the maximum load are known. A solutions architect needs to design the updated application with a serverless architecture that minimizes operational complexity.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A. Upload the container images to AWS Lambda as functions. Configure a concurrency limit for the associated Lambda functions to handle the expected peak load. Configure two separate Lambda integrations within Amazon API Gateway: one for production and one for testing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Kubernetes Service (Amazon EKS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the EKS clusters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the container images to AWS Elastic Beanstalk. In Elastic Beanstalk, create separate environments and deployments for production and testing. Configure two separate Application Load Balancers to direct traffic to the Elastic Beanstalk deployments.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774685,
          "date": "Fri 13 Jan 2023 17:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.<br>This option meets the requirement of using a serverless architecture by utilizing the Fargate launch type for the ECS clusters, which allows for automatic scaling of the containers based on the expected load. It also allows for separate deployments for production and testing by configuring separate ECS clusters and Application Load Balancers for each environment. This option also minimizes operational complexity by utilizing ECS and Fargate for the container orchestration and scaling.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742275,
          "date": "Mon 12 Dec 2022 02:13",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "Answer is A.  ABC all works but A is most COST EFFECTIVE<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A) is not correct. AWS documentation says you can package and deploy Lambda functions AS container images. A) says Deploy Container images as lambda functions, the opposite.</li><li>Yes, would be cheap, but can't run a web app from Lambda</li><li>I do not think A is the right answer. <br>Because image must be upload to the ECR.</li><li>https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 842792,
          "date": "Sat 18 Mar 2023 14:13",
          "username": "\t\t\t\tMansaMunsa\t\t\t",
          "content": "A) is not correct. AWS documentation says you can package and deploy Lambda functions AS container images. A) says Deploy Container images as lambda functions, the opposite.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812486,
          "date": "Sat 18 Feb 2023 00:20",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "Yes, would be cheap, but can't run a web app from Lambda",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 763230,
          "date": "Sun 01 Jan 2023 16:00",
          "username": "\t\t\t\tyuyuyuyuyu\t\t\t",
          "content": "I do not think A is the right answer. <br>Because image must be upload to the ECR.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742276,
          "date": "Mon 12 Dec 2022 02:15",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 855077,
          "date": "Thu 30 Mar 2023 01:34",
          "username": "\t\t\t\tcuonglc\t\t\t",
          "content": "Selected Answer: B<br>b for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 852775,
          "date": "Tue 28 Mar 2023 06:40",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "ECS + Fargate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835329,
          "date": "Fri 10 Mar 2023 19:58",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Confused between A and B but after a long think decided to go with A<br><br>Option A suggests uploading the container images to AWS Lambda as functions and configuring a concurrency limit to handle the expected peak load. This approach allows the company to take advantage of the benefits of serverless computing, such as auto-scaling, without having to manage any infrastructure. In addition, using Lambda integrations within Amazon API Gateway allows the company to direct traffic to the appropriate environment for testing or production.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 827940,
          "date": "Fri 03 Mar 2023 13:08",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "Option B is the most cost-effective solution that meets all the requirements.<br><br>This solution uploads the container images to Amazon Elastic Container Registry (Amazon ECR) and deploys them using Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Two separate Application Load Balancers are configured to direct traffic to the ECS clusters for production and testing.<br><br>This solution is cost-effective as it leverages the benefits of serverless architecture with Fargate launch type that removes the need for server management and the cost of running idle servers. Additionally, with auto-scaling, the resources can be dynamically adjusted to handle varying traffic. Furthermore, the use of Application Load Balancers reduces operational complexity and allows for efficient traffic routing.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819275,
          "date": "Thu 23 Feb 2023 15:13",
          "username": "\t\t\t\tmacc183\t\t\t",
          "content": "I think the answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818100,
          "date": "Wed 22 Feb 2023 18:25",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/definitions.html<br><br>The question states the Solutions Architect needs to update the application with a serverless architecture.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816194,
          "date": "Tue 21 Feb 2023 05:40",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Option B is the most cost-effective solution for the following reasons:<br><br>The use of Fargate, a serverless compute engine for containers, eliminates the need for managing and scaling the underlying infrastructure. This minimizes operational complexity and reduces costs as the resources are used only when required.<br>Auto scaling ensures that the application scales up and down based on the load, providing the required performance and availability without incurring additional costs.<br>Amazon ECS is a simpler and more cost-effective solution than Amazon EKS, which requires more management and additional resources to operate the Kubernetes control plane.<br>Using Application Load Balancers to direct traffic to the ECS clusters ensures high availability and fault tolerance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing to A, B is not serverless and cost-effective.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818105,
          "date": "Wed 22 Feb 2023 18:28",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Changing to A, B is not serverless and cost-effective.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 807552,
          "date": "Mon 13 Feb 2023 16:49",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "Although I would not use this way in production, A is the cheapest.<br>All ECS/EKS needs some LB in front, plus the hourly fee of the cluster.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 806099,
          "date": "Sun 12 Feb 2023 09:20",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "B is cheaper than C, otherwise both would work",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 802408,
          "date": "Wed 08 Feb 2023 19:39",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "A can be cheaper but it's not performant for a web application. I assume that A does not use provisioned concurrency, so I have to deal with cold starts. If I use provisioned concurrency, I can make B cheaper.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 794492,
          "date": "Tue 31 Jan 2023 19:12",
          "username": "\t\t\t\tsergza\t\t\t",
          "content": "A is most Cost effective Does not need ALB and smallest operational overhead",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 766170,
          "date": "Thu 05 Jan 2023 01:44",
          "username": "\t\t\t\tNYB\t\t\t",
          "content": "it should be ECR + ECS + Fargate, ans: B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765305,
          "date": "Wed 04 Jan 2023 07:07",
          "username": "\t\t\t\tjeussin\t\t\t",
          "content": "EnableEKS+Fargate ??<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Currently available.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790673,
          "date": "Sat 28 Jan 2023 15:45",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "Currently available.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760217,
          "date": "Wed 28 Dec 2022 19:52",
          "username": "\t\t\t\tskashanali\t\t\t",
          "content": "C & D is both valid but when it comes to cost-effective solution, I would go for ECS which does have additional cluster cost for its control plane.<br>https://www.clickittech.com/aws/amazon-ecs-vs-eks/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 758539,
          "date": "Tue 27 Dec 2022 14:21",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I Vote B. <br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-java-microservices-on-amazon-ecs-using-amazon-ecr-and-aws-fargate.html<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-java-microservices-on-amazon-ecs-using-amazon-ecr-and-load-balancing.html<br><br>Option C and D also work, but B is the most cost-effective.<br><br>Option A is wrong. It can launch only APIs and does not mention Web UI.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-lambda-functions-with-container-images.html<br><br>Option C is wrong. Amazon EKS costs more than Amazon ECS a bit.<br>https://aws.amazon.com/ecs/pricing/<br>https://aws.amazon.com/eks/pricing/<br><br>Option D is wrong. The Docker environment of AWS Elastic Beanstalk is based on Amazon EC2. That costs more than AWS Fargate.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's still technically possible to return html/css with AWS Lambda like what this guy did https://stackoverflow.com/a/59385039/422842</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 802383,
          "date": "Wed 08 Feb 2023 19:22",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "It's still technically possible to return html/css with AWS Lambda like what this guy did https://stackoverflow.com/a/59385039/422842",
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
      "question_text": "<p>A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application's data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.<br>The company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region. The company does not have a large enough budget for an active-active strategy.<br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service (Amazon SNS) notification to the Lambda function when the health check status is unhealthy. Update the application's Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region. Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741154,
          "date": "Sat 10 Dec 2022 18:52",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with B<br>https://docs.amazonaws.cn/en_us/Route53/latest/DeveloperGuide/welcome-health-checks.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is correct, because it meets the company's requirements for reducing RTO to less than 15 minutes and not having a large budget for an active-active strategy.<br><br>In this solution, the company creates an AWS Lambda function in the backup region which promotes the read replica and modifies the Auto Scaling group values. Route 53 is configured with a health check that monitors the web application and sends an Amazon SNS notification to the Lambda function when the health check status is unhealthy. The Route 53 record is also updated with a failover policy that routes traffic to the ALB in the backup region when a health check failure occurs. This way, when the primary region goes down, the failover policy triggers and traffic is directed to the backup region, ensuring a quick recovery time.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774692,
          "date": "Fri 13 Jan 2023 17:58",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B is correct, because it meets the company's requirements for reducing RTO to less than 15 minutes and not having a large budget for an active-active strategy.<br><br>In this solution, the company creates an AWS Lambda function in the backup region which promotes the read replica and modifies the Auto Scaling group values. Route 53 is configured with a health check that monitors the web application and sends an Amazon SNS notification to the Lambda function when the health check status is unhealthy. The Route 53 record is also updated with a failover policy that routes traffic to the ALB in the backup region when a health check failure occurs. This way, when the primary region goes down, the failover policy triggers and traffic is directed to the backup region, ensuring a quick recovery time.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 852778,
          "date": "Tue 28 Mar 2023 06:44",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "SNS + Health check",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 831719,
          "date": "Tue 07 Mar 2023 10:50",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827941,
          "date": "Fri 03 Mar 2023 13:11",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "The best option to meet the requirements and reduce RTO to less than 15 minutes is to choose option B. <br><br>Option B involves creating an AWS Lambda function in the backup region to promote the read replica and modify the Auto Scaling group values. Additionally, Route 53 can be configured with a health check that monitors the web application and sends an Amazon SNS notification to the Lambda function when the health check status is unhealthy. The application's Route 53 record can be updated with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.<br><br>This option is cost-effective as it does not require an active-active strategy, and it uses AWS services to minimize the RTO. The Lambda function can be invoked to promote the read replica in the backup region, and the Auto Scaling group values can be updated to launch EC2 instances in the backup region. Furthermore, the Route 53 health check feature can be used to monitor the web application and initiate the failover process.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 807566,
          "date": "Mon 13 Feb 2023 17:08",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "It would be interesting to see if this actually works. SNS is a regional service, in the last outage of the Virginia Region, we lost SNS completely.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 796179,
          "date": "Thu 02 Feb 2023 16:40",
          "username": "\t\t\t\taws0909\t\t\t",
          "content": "I will go with option B as it reduces the RTO",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 794958,
          "date": "Wed 01 Feb 2023 10:11",
          "username": "\t\t\t\tYihong\t\t\t",
          "content": "A: no health check<br>C: active active<br>D: Equal weight?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 758588,
          "date": "Tue 27 Dec 2022 14:59",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I Vote B. <br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html<br><br>Option A, C and D are wrong. The latency-based routing and endopoint weights should be used for active/active strategy.<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753893,
          "date": "Fri 23 Dec 2022 06:56",
          "username": "\t\t\t\tptpho\t\t\t",
          "content": "I go with B<br>5xx is incorrectly method to cover the case of the main site completely down<br>Its not act-act loading so R53 should not load traffic between 2 ALBs",
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
      "question_text": "<p>A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.<br>A solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are configured in unlimited mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DB instance to create a read replica in the same Availability Zone. Promote the read replica to be the primary DB instance in failure scenarios.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DB instance to create a Multi-AZ deployment that extends across two Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a replication group for the ElastiCache for Redis cluster. Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a replication group for the ElastiCache for Redis cluster. Enable Multi-AZ on the cluster.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 741159,
          "date": "Sat 10 Dec 2022 18:57",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with ADF<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A.  Using an Elastic Load Balancer (ELB) to distribute traffic across multiple EC2 instances can help ensure that the application remains available in the event that one of the instances becomes unavailable. By configuring the instances as part of an Auto Scaling group with a minimum capacity of two instances, you can ensure that there is always at least one healthy instance to handle traffic.<br>D.  Modifying the DB instance to create a Multi-AZ deployment that extends across two availability zones can help ensure that the database remains available in the event of a failure. In the event of a failure, traffic will automatically be directed to the secondary availability zone, reducing the amount of downtime.<br>F.  Creating a replication group for the ElastiCache for Redis cluster and enabling Multi-AZ can help ensure that the in-memory data store remains available in the event of a failure. This will allow traffic to be automatically directed to the secondary availability zone, reducing the amount of downtime.</li><li>Why C is wrong?</li><li>Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.</li><li>Issue with C - Read replica in the same AZ does not sound High availability</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 774694,
          "date": "Fri 13 Jan 2023 18:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Using an Elastic Load Balancer (ELB) to distribute traffic across multiple EC2 instances can help ensure that the application remains available in the event that one of the instances becomes unavailable. By configuring the instances as part of an Auto Scaling group with a minimum capacity of two instances, you can ensure that there is always at least one healthy instance to handle traffic.<br>D.  Modifying the DB instance to create a Multi-AZ deployment that extends across two availability zones can help ensure that the database remains available in the event of a failure. In the event of a failure, traffic will automatically be directed to the secondary availability zone, reducing the amount of downtime.<br>F.  Creating a replication group for the ElastiCache for Redis cluster and enabling Multi-AZ can help ensure that the in-memory data store remains available in the event of a failure. This will allow traffic to be automatically directed to the secondary availability zone, reducing the amount of downtime.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 752113,
          "date": "Wed 21 Dec 2022 10:58",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "Why C is wrong?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.</li><li>Issue with C - Read replica in the same AZ does not sound High availability</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774695,
          "date": "Fri 13 Jan 2023 18:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Issue with C - Read replica in the same AZ does not sound High availability</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 807107,
          "date": "Mon 13 Feb 2023 07:12",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Issue with C - Read replica in the same AZ does not sound High availability",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 853657,
          "date": "Tue 28 Mar 2023 22:08",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "ADF the correct answers ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 852780,
          "date": "Tue 28 Mar 2023 06:47",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "ADF is the best fit.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 836974,
          "date": "Sun 12 Mar 2023 13:01",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "I believe, This is correct approach https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 833173,
          "date": "Wed 08 Mar 2023 17:46",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "adf correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 829053,
          "date": "Sat 04 Mar 2023 15:57",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Selecting E because - \\\"Multi-AZ is enabled by default on Redis (cluster mode enabled) clusters\\\" as per https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 827946,
          "date": "Fri 03 Mar 2023 13:21",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "Option B is incorrect because unlimited mode is a configuration option for an Auto Scaling group that is used to handle bursty workloads, and it does not provide any additional availability benefits.<br><br>Option C is incorrect because creating a read replica in the same Availability Zone does not provide any additional availability benefits, and it would not be able to take over in the event of a failure of the primary instance.<br><br>Option F is incorrect because Multi-AZ is not an option for ElastiCache for Redis clusters.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827943,
          "date": "Fri 03 Mar 2023 13:15",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "A, D, E are the correct options to meet the requirements.<br><br>Option A is correct because an Auto Scaling group with a minimum capacity of two instances and an Elastic Load Balancer distributing traffic across them can provide high availability and automatic recovery from failure.<br><br>Option D is correct because a Multi-AZ deployment for the RDS instance will ensure that there is a synchronized standby copy of the database in a separate Availability Zone that can be used for automatic failover.<br><br>Option E is correct because configuring an Auto Scaling group for the ElastiCache for Redis cluster will ensure that there is at least one available node at all times, and automatic recovery can be achieved by launching new instances to replace any failed nodes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827227,
          "date": "Thu 02 Mar 2023 19:29",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826525,
          "date": "Thu 02 Mar 2023 06:48",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 817278,
          "date": "Wed 22 Feb 2023 00:21",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Why F and Not E ? ElastiCache for Redis natively supports automatic Multi-AZ failover.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html</li><li>This does not answer why not E</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 827230,
          "date": "Thu 02 Mar 2023 19:29",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This does not answer why not E</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829050,
          "date": "Sat 04 Mar 2023 15:53",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "This does not answer why not E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 806111,
          "date": "Sun 12 Feb 2023 09:33",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I don't dislike C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758600,
          "date": "Tue 27 Dec 2022 15:15",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "No doubt, ADF. <br>Option C is wrong. Creating a read replica 'in the same availability zone' makes no sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 757432,
          "date": "Mon 26 Dec 2022 14:05",
          "username": "\t\t\t\taimik\t\t\t",
          "content": "ADF all of them high availibility",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753899,
          "date": "Fri 23 Dec 2022 07:01",
          "username": "\t\t\t\tptpho\t\t\t",
          "content": "I go with ADF<br>Hope we have 74 questions like this =))",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 748058,
          "date": "Sat 17 Dec 2022 13:59",
          "username": "\t\t\t\tArun_Bala\t\t\t",
          "content": "I go for correct answer as : ADF options",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB.  Static content is cached. Amazon Route 53 is used to host all public zones.<br>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB.  The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.<br>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.<br>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to host a static webpage. Upload the custom error pages to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Target.FailedHealthChecks is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.<br></p>",
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
          "id": 742509,
          "date": "Mon 12 Dec 2022 08:30",
          "username": "\t\t\t\tRaj40\t\t\t",
          "content": "A & E<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html#custom-error-pages-procedure",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 852782,
          "date": "Tue 28 Mar 2023 06:49",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "AE - easy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 831723,
          "date": "Tue 07 Mar 2023 10:56",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 828287,
          "date": "Fri 03 Mar 2023 20:19",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "Explanation:<br>Option A allows the creation of a custom error page that can be hosted on an S3 bucket. Option E provides a way to configure a custom error response for CloudFront, which can point to the S3 bucket hosting the error page. This allows visitors to see a custom error page without modifying any of the application infrastructure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819931,
          "date": "Fri 24 Feb 2023 01:20",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A&E are the correct answers imo",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 813074,
          "date": "Sat 18 Feb 2023 15:16",
          "username": "\t\t\t\tPratap\t\t\t",
          "content": "A and E as per https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html#custom-error-pages-procedure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 807109,
          "date": "Mon 13 Feb 2023 07:22",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "A is incorrect because, Cloud front already handles OAI and its easy to build up error page with it. DNS records apply is pretty quick, So C,E are correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788913,
          "date": "Thu 26 Jan 2023 17:25",
          "username": "\t\t\t\tvsk12\t\t\t",
          "content": "A & C as S3 can be used to host the static website and Route 53 can be configured for health checks and fail-over routing.<br>Refer AWS documentation -<br>Route 53 Fail Over S3<br>(https://aws.amazon.com/premiumsupport/knowledge-center/fail-over-s3-r53/)<br><br>Option E is wrong as CloudFront would return the error response for failure and does not provide a page that Route 53 can point to.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774696,
          "date": "Fri 13 Jan 2023 18:05",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A: Creating an S3 bucket and uploading custom error pages to it will allow you to provide a custom error page to visitors when the ALB returns a 502 error.<br>Option E: By configuring CloudFront custom error pages, visitors will be redirected to a publicly accessible web page when a 502 error occurs.<br>DNS records can be modified to point to a publicly accessible web page, which will be displayed when the error occurs.<br><br>Option B and D are not a best practice since they would change the behavior of the load balancer and it's not the best way to display custom error pages.<br>Option C is not related to custom error pages and not the best way to handle the problem.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 761369,
          "date": "Thu 29 Dec 2022 19:37",
          "username": "\t\t\t\texcoRt\t\t\t",
          "content": "A & E - Classic Cloudfront error page mechanism",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 759334,
          "date": "Wed 28 Dec 2022 04:51",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "Option A and E are the most simple way to meet the requirement.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 753911,
          "date": "Fri 23 Dec 2022 07:20",
          "username": "\t\t\t\tptpho\t\t\t",
          "content": "I go with AE<br>since R53 \\\"Evaluate Target Health\\\" works with Alias Records that support health checks, so CLDFR distribution cannot be selected",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753804,
          "date": "Fri 23 Dec 2022 03:27",
          "username": "\t\t\t\tJimmyWong0911\t\t\t",
          "content": "AE<br>SAP-C01 #831",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 752117,
          "date": "Wed 21 Dec 2022 11:03",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "AE<br>SAP-C01 #831",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741628,
          "date": "Sun 11 Dec 2022 12:22",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Answer: A & C<br><br>C & E never state where is the publicly accessible webpage.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 741162,
          "date": "Sat 10 Dec 2022 19:07",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I want to answer AC. <br>Answer A to have a static web page.<br>The C response to have an ALB status check.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I was wrong the answer is AE<br>https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/3/</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 770625,
          "date": "Mon 09 Jan 2023 17:06",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I was wrong the answer is AE<br>https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/3/",
          "upvote_count": "1",
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
      "question_text": "<p>A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.<br>The company's infrastructure team has a dedicated infrastructure account that has a VPC.  The infrastructure team must use this account to manage the network. Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets.<br>Which combination of actions should the solutions architect perform to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
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
          "id": 743010,
          "date": "Mon 12 Dec 2022 17:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with BD<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Step B is needed because it enables the organization to share resources across accounts.<br>Step D is needed because it allows the infrastructure account to share specific subnets with the other accounts in the organization, so that the other accounts can create resources within those subnets without having to manage their own networks.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 774700,
          "date": "Fri 13 Jan 2023 18:09",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Step B is needed because it enables the organization to share resources across accounts.<br>Step D is needed because it allows the infrastructure account to share specific subnets with the other accounts in the organization, so that the other accounts can create resources within those subnets without having to manage their own networks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752613,
          "date": "Wed 21 Dec 2022 18:40",
          "username": "\t\t\t\trazguru\t\t\t",
          "content": "A - Doesn't seem correct as the question didnt state multiple VPs, so transit gateway is not relevant. <br>I will go with B & D",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 852784,
          "date": "Tue 28 Mar 2023 06:51",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "BD is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 832492,
          "date": "Wed 08 Mar 2023 04:10",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "ANS: A & C. <br><br>Option B is not required because AWS Organizations is already being used to manage the accounts. Resource sharing needs to be enabled, but this can be done by creating a resource share.<br><br>Option D and E both involve creating a resource share in AWS Resource Access Manager (RAM), but they are not the correct solution for this scenario.Option D is specific to subnets, option E is specific to prefix lists, which are used for IP address ranges. Since VPCs are being used in this scenario, options D and E are not applicable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 831735,
          "date": "Tue 07 Mar 2023 11:08",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "wouldnt \\\"Select each prefix list to associate with the resource share.\\\" will be use to do then go with selecting each subnet",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827593,
          "date": "Fri 03 Mar 2023 02:49",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Q: A solution to share a common network across multiple accounts<br>-A because you need a way to route traffic, its either this or vpc peering(not mentioned)<br>-Dor E Because a you can use RAM to share a subnet or prefixes. I am leaning towards E bcos a prefix will be more efficient. e.g. rather than share a /24 subnet. I will share a /16 prefix.(network summarization)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 798620,
          "date": "Sun 05 Feb 2023 06:04",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "Anwer is BD. <br>https://aws.amazon.com/jp/premiumsupport/knowledge-center/vpc-share-subnet-with-another-account/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-sharing.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 798622,
          "date": "Sun 05 Feb 2023 06:05",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-sharing.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792664,
          "date": "Mon 30 Jan 2023 12:05",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "B & D seems to be the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 761489,
          "date": "Thu 29 Dec 2022 22:00",
          "username": "\t\t\t\tskashanali\t\t\t",
          "content": "Ans A doesn't make sense.<br>You also need to enable sharing with AWS Organizations within Resource Access Manager service to share the subnet.<br>https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 759345,
          "date": "Wed 28 Dec 2022 05:12",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "AWS Resource Access Manager can share subnets with other AWS accounts.<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 753965,
          "date": "Fri 23 Dec 2022 08:26",
          "username": "\t\t\t\tptpho\t\t\t",
          "content": "I go with AD<br>the company can use to share a common network across multiple accounts -> TGW in infras account<br>Enable resource sharing is an optional to share all 'without having to enumerate each account'",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 741683,
          "date": "Sun 11 Dec 2022 13:33",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "B & D<br><br>https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html",
          "upvote_count": "3",
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
      "question_text": "<p>A company wants to use a third-party software-as-a-service (SaaS) application. The third-party SaaS application is consumed through several API calls. The third-party SaaS application also runs on AWS inside a VPC. <br>The company will consume the third-party SaaS application from inside a VPC.  The company has internal security policies that mandate the use of private connectivity that does not traverse the internet. No resources that run in the company VPC are allowed to be accessed from outside the company's VPC.  All permissions must conform to the principles of least privilege.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
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
              "choice": "<p>C. Create a VPC peering connection between the third-party SaaS application and the company VPUpdate route tables by adding the needed routes for the peering connection.<br></p>",
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
          "id": 742562,
          "date": "Mon 12 Dec 2022 09:49",
          "username": "\t\t\t\tRaj40\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743013,
          "date": "Mon 12 Dec 2022 17:07",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A.  Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.<br>This solution uses AWS PrivateLink, which creates a secure and private connection between the company's VPC and the third-party SaaS application VPC, without the traffic traversing the internet. The use of a security group and limiting access to the endpoint service conforms to the principle of least privilege.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774702,
          "date": "Fri 13 Jan 2023 18:11",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.<br>This solution uses AWS PrivateLink, which creates a secure and private connection between the company's VPC and the third-party SaaS application VPC, without the traffic traversing the internet. The use of a security group and limiting access to the endpoint service conforms to the principle of least privilege.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 852785,
          "date": "Tue 28 Mar 2023 06:53",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Create an AWS PrivateLink interface VPC endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831742,
          "date": "Tue 07 Mar 2023 11:12",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 753918,
          "date": "Fri 23 Dec 2022 07:30",
          "username": "\t\t\t\tptpho\t\t\t",
          "content": "It's A .clearly",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 753074,
          "date": "Thu 22 Dec 2022 09:08",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741703,
          "date": "Sun 11 Dec 2022 13:54",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "A is correct.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html#share-endpoint-service",
          "upvote_count": "5",
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
      "question_text": "<p>A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching. Management requires a single report showing the patch status of all the servers and instances.<br>Which set of actions should a solutions architect take to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon EventBridge rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use AWS X-Ray to post the patch status to AWS Systems Manager OpsCenter to generate patch compliance reports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 743019,
          "date": "Mon 12 Dec 2022 17:13",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A is good<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patch-management-hybrid-cloud/design-on-premises.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is correct. AWS Systems Manager can manage patches on both on-premises servers and EC2 instances and can generate patch compliance reports. AWS OpsWorks and Amazon Inspector are not specifically designed for patch management and therefore would not be the best choice for this use case. Using Amazon EventBridge rule and AWS X-Ray to generate patch compliance reports is not a practical solution as they are not designed for patch management reporting.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774705,
          "date": "Fri 13 Jan 2023 18:14",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A is correct. AWS Systems Manager can manage patches on both on-premises servers and EC2 instances and can generate patch compliance reports. AWS OpsWorks and Amazon Inspector are not specifically designed for patch management and therefore would not be the best choice for this use case. Using Amazon EventBridge rule and AWS X-Ray to generate patch compliance reports is not a practical solution as they are not designed for patch management reporting.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 852788,
          "date": "Tue 28 Mar 2023 06:54",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Use AWS Systems Manager to manage patches",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831745,
          "date": "Tue 07 Mar 2023 11:15",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/patch-management-hybrid-cloud/design-on-premises.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826566,
          "date": "Thu 02 Mar 2023 08:06",
          "username": "\t\t\t\tgameoflove\t\t\t",
          "content": "AWS System Manager support On-premise and EC2 instance patching",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819940,
          "date": "Fri 24 Feb 2023 01:29",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A is correct ofc..easy one )",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 753082,
          "date": "Thu 22 Dec 2022 09:18",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "AS THE SAME WITH SAP-C01 QUESTION 782",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742569,
          "date": "Mon 12 Dec 2022 09:54",
          "username": "\t\t\t\tRaj40\t\t\t",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742295,
          "date": "Mon 12 Dec 2022 02:38",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct",
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
      "question_text": "<p>A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central Amazon S3 bucket every 15 minutes. The security team discovers that log files are missing from some of the terminated EC2 instances.<br>Which set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?<br><br></p>",
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
              "choice": "<p>A. Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic. From the SNS notification, call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send ABANDON to the Auto Scaling group to terminate the instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852789,
          "date": "Tue 28 Mar 2023 06:56",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Systems manager + eventbridge",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 831759,
          "date": "Tue 07 Mar 2023 11:28",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://aws.amazon.com/blogs/infrastructure-and-automation/run-code-before-terminating-an-ec2-auto-scaling-instance/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774711,
          "date": "Fri 13 Jan 2023 18:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance. This approach will use the Auto Scaling lifecycle hook to execute the script that copies log files to S3, before the instance is terminated, ensuring that all log files are copied from the terminated instances.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759354,
          "date": "Wed 28 Dec 2022 05:39",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "B<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744354,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "https://aws.amazon.com/blogs/infrastructure-and-automation/run-code-before-terminating-an-ec2-auto-scaling-instance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743021,
          "date": "Mon 12 Dec 2022 17:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I find answer C correct.<br>but can at the same time that an instance is terminated run a lambda function that executes the script?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm wrong the answer is B<br><br>https://www.examtopics.com/discussions/amazon/view/69532-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743097,
          "date": "Mon 12 Dec 2022 18:27",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I'm wrong the answer is B<br><br>https://www.examtopics.com/discussions/amazon/view/69532-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742820,
          "date": "Mon 12 Dec 2022 14:19",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/tutorial-lifecycle-hook-lambda.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742575,
          "date": "Mon 12 Dec 2022 10:00",
          "username": "\t\t\t\tRaj40\t\t\t",
          "content": "Correct answer B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A.  The company's applications and databases are running in Account B. <br>A solutions architect will deploy a two-tier application in a new VPC.  To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53.<br>During deployment, the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53.<br>Which combination of steps should the solutions architect take to resolve this issue? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Deploy the database on a separate EC2 instance in the new VPC.  Create a record set for the instance's private IP in the private hosted zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use SSH to connect to the application tier EC2 instance. Add an RDS endpoint IP address to the /etc/resolv.conf file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a private hosted zone for the example com domain in Account B.  Configure Route 53 replication between AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Associate a new VPC in Account B with a hosted zone in Account A.  Delete the association authorization in Account A. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774714,
          "date": "Fri 13 Jan 2023 18:21",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C and E are correct.<br>C.  Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B. <br>This step is necessary because the VPC in Account B needs to be associated with the private hosted zone in Account A to be able to resolve the DNS records.<br>E.  Associate a new VPC in Account B with a hosted zone in Account A.  Delete the association authorization in Account A. <br>This step is necessary because the association authorization needs to be removed in Account A after the association is done in Account B. ",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 852792,
          "date": "Tue 28 Mar 2023 06:59",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "CE seme like the best choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 832501,
          "date": "Wed 08 Mar 2023 04:44",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "ANS: A & C<br><br>B is incorrect because modifying the /etc/resolv.conf file on the EC2 instance would not resolve the issue since the issue is with the Route 53 configuration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 831763,
          "date": "Tue 07 Mar 2023 11:33",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 806146,
          "date": "Sun 12 Feb 2023 10:23",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 805463,
          "date": "Sat 11 Feb 2023 18:29",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "C and E. <br>In order to resolve the issue, the solutions architect should create an authorization to associate the private hosted zone in Account A with the new VPC in Account B (Option C). This will allow the new VPC in Account B to access the DNS records stored in the private hosted zone in Account A. <br><br>In addition, the solutions architect should associate the new VPC in Account B with the hosted zone in Account A (Option E) and delete the association authorization in Account A.  This will ensure that the new VPC in Account B is properly configured to use the private hosted zone in Account A and resolve the db.example.com CNAME record set correctly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 752618,
          "date": "Wed 21 Dec 2022 18:50",
          "username": "\t\t\t\trazguru\t\t\t",
          "content": "C & E are correct options.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743030,
          "date": "Mon 12 Dec 2022 17:31",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "With comments and links the answer is C and E.  (Ty robertohyène and JosuéXu)<br><br>C = 6. Run the following command to create the association between Account A's private hosted zone and Account B's VPC.  Use the hosted zone's ID from step 3. B account.<br>E = 7.It is recommended to remove the association permission after the association is created. This will prevent you from recreating the same association later.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/36113-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 743095,
          "date": "Mon 12 Dec 2022 18:26",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/36113-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742587,
          "date": "Mon 12 Dec 2022 10:11",
          "username": "\t\t\t\tRaj40\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 742073,
          "date": "Sun 11 Dec 2022 21:29",
          "username": "\t\t\t\tJoshuaXu\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741723,
          "date": "Sun 11 Dec 2022 14:12",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Correct answers: C & E",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company used Amazon EC2 instances to deploy a web fleet to host a blog site. The EC2 instances are behind an Application Load Balancer (ALB) and are configured in an Auto Scaling group. The web application stores all blog content on an Amazon EFS volume.<br>The company recently added a feature for bloggers to add video to their posts, attracting 10 times the previous user traffic. At peak times of day, users report buffering and timeout issues while attempting to reach the site or watch videos.<br>Which is the MOST cost-efficient and scalable deployment that will resolve the issues for users?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>A. Reconfigure Amazon EFS to enable maximum I/O.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the blog site to use instance store volumes for storage. Copy the site contents to the volumes at launch and to Amazon S3 at shutdown.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon CloudFront distribution for all site contents, and point the distribution at the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 753100,
          "date": "Thu 22 Dec 2022 09:49",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "No brainer",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 852793,
          "date": "Tue 28 Mar 2023 07:01",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Configure an Amazon CloudFront distribution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831767,
          "date": "Tue 07 Mar 2023 11:35",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "y configuring a CloudFront distribution for the blog site and pointing it at an S3 bucket, the videos can be cached at edge locations closer to users, reducing buffering and timeout issues.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819949,
          "date": "Fri 24 Feb 2023 01:46",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C ofc.. i hope i will get such easy question in the real exam",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792717,
          "date": "Mon 30 Jan 2023 13:08",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "C is the correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774726,
          "date": "Fri 13 Jan 2023 18:28",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.<br><br>Amazon CloudFront is a content delivery network (CDN) that can be used to deliver content to users with low latency and high data transfer speeds. By configuring a CloudFront distribution for the blog site and pointing it at an S3 bucket, the videos can be cached at edge locations closer to users, reducing buffering and timeout issues. Additionally, S3 is designed for scalable storage and can handle high levels of user traffic. Migrating the videos from EFS to S3, would also improve the performance and scalability of the website.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743442,
          "date": "Tue 13 Dec 2022 01:23",
          "username": "\t\t\t\tkomorebi\t\t\t",
          "content": "CCCCCCCCCCCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743378,
          "date": "Mon 12 Dec 2022 23:25",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct. Do works but not as cheaper as C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree that C is correct, why do you think D is not cheaper ?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817448,
          "date": "Wed 22 Feb 2023 05:02",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Agree that C is correct, why do you think D is not cheaper ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743032,
          "date": "Mon 12 Dec 2022 17:34",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "answer C makes sense<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/6008-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743093,
          "date": "Mon 12 Dec 2022 18:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/6008-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
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
      "question_text": "<p>A company with global offices has a single 1&nbsp;Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC. <br>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br>Which solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852794,
          "date": "Tue 28 Mar 2023 07:03",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Provision a Direct Connect gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817479,
          "date": "Wed 22 Feb 2023 06:08",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : B and C are good for existing architecture in question. But with redundant DX connection requirement, only solution is Gateway. that resolves to A(Direct connect gateway) or D(Transit gateway), but D as transit gateway is wrong because it mentions private interfaces connecting with transit gateway which is weird [usually VPC attachments are made connecting transit gateway]. So answer is A - Direct Connect Gateway. (Infact, this is future proof when we want different VPCs in different regions later with this architecture)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792725,
          "date": "Mon 30 Jan 2023 13:18",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "A is the correct solution and the best",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774727,
          "date": "Fri 13 Jan 2023 18:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC. <br><br>This solution provides a redundant Direct Connect connection in the same Region by creating a new private virtual interface on each connection, and connecting both private virtual interfaces to a Direct Connect gateway. The Direct Connect gateway is then connected to the single VPC.  This solution also allows the company to expand into other Regions while providing connectivity through the same pair of Direct Connect connections.<br>The Direct Connect Gateway allows you to connect multiple VPCs and on-premises networks in different accounts and different regions to a single Direct Connect connection.<br>It also provides automatic failover and routing capabilities.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D is not possible at all. You connect to TGW using transit VIF, not private VIF</li><li>Option D is not the best solution because it uses a Transit Gateway, which is used to connect multiple VPCs and on-premises networks in different accounts and different regions, but it is not necessary in this scenario. The company only wants to add a redundant Direct Connect connection in the same Region and connect it to the same VPC.  Additionally, using a Transit Gateway in this scenario would add more complexity and might not be necessary.<br>Also, Transit Gateway does not provide automatic failover and routing capabilities, which is required in this scenario.<br>The Direct Connect Gateway is a better choice in this scenario as it provides the necessary functionality of automatic failover and routing capabilities, and it is more suitable for connecting multiple Direct Connect connections to a single VPC. </li><li>All options here are problematic. The DX-GW is a control plane-only device; in other words, no actual traffic goes over it; it is just a Route-Reflector it only carries the routing table. TGW is not a region construct, so by itself, it cannot provide regional redundancy. In any case, all things considered, maybe A is the closest but it should mention VGW.</li><li>I meant to say, \\\"TGW is a region construct\\\".</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813872,
          "date": "Sun 19 Feb 2023 09:51",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "Option D is not possible at all. You connect to TGW using transit VIF, not private VIF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774728,
          "date": "Fri 13 Jan 2023 18:31",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option D is not the best solution because it uses a Transit Gateway, which is used to connect multiple VPCs and on-premises networks in different accounts and different regions, but it is not necessary in this scenario. The company only wants to add a redundant Direct Connect connection in the same Region and connect it to the same VPC.  Additionally, using a Transit Gateway in this scenario would add more complexity and might not be necessary.<br>Also, Transit Gateway does not provide automatic failover and routing capabilities, which is required in this scenario.<br>The Direct Connect Gateway is a better choice in this scenario as it provides the necessary functionality of automatic failover and routing capabilities, and it is more suitable for connecting multiple Direct Connect connections to a single VPC. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>All options here are problematic. The DX-GW is a control plane-only device; in other words, no actual traffic goes over it; it is just a Route-Reflector it only carries the routing table. TGW is not a region construct, so by itself, it cannot provide regional redundancy. In any case, all things considered, maybe A is the closest but it should mention VGW.</li><li>I meant to say, \\\"TGW is a region construct\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 816812,
          "date": "Tue 21 Feb 2023 17:13",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "All options here are problematic. The DX-GW is a control plane-only device; in other words, no actual traffic goes over it; it is just a Route-Reflector it only carries the routing table. TGW is not a region construct, so by itself, it cannot provide regional redundancy. In any case, all things considered, maybe A is the closest but it should mention VGW.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I meant to say, \\\"TGW is a region construct\\\".</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816815,
          "date": "Tue 21 Feb 2023 17:16",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "I meant to say, \\\"TGW is a region construct\\\".",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759382,
          "date": "Wed 28 Dec 2022 06:20",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "A<br>https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/aws-dx-dxgw-with-vgw-multi-regions-and-aws-public-peering.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 753399,
          "date": "Thu 22 Dec 2022 15:52",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "transit gateway does not support cross-region<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/<br>But Still answer is A</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815401,
          "date": "Mon 20 Feb 2023 15:54",
          "username": "\t\t\t\tMahakali\t\t\t",
          "content": "https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/<br>But Still answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743377,
          "date": "Mon 12 Dec 2022 23:24",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct because direct connect gateway support multi region",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743039,
          "date": "Mon 12 Dec 2022 17:39",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with A<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html<br>https://jayendrapatil.com/aws-direct-connect-gateway/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/69343-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743092,
          "date": "Mon 12 Dec 2022 18:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/69343-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a web application that allows users to upload short videos. The videos are stored on Amazon EBS volumes and analyzed by custom recognition software for categorization.<br>The website contains static content that has variable traffic with peaks in certain months. The architecture consists of Amazon EC2 instances running in an Auto Scaling group for the web application and EC2 instances running in an Auto Scaling group to process an Amazon SQS queue. The company wants to re-architect the application to reduce operational overhead using AWS managed services where possible and remove dependencies on third-party software.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ECS containers for the web application and Spot instances for the Auto Scaling group that processes the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the uploaded videos in Amazon EFS and mount the file system to the EC2 instances for the web application. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the web application in Amazon S3. Store the uploaded videos in Amazon S3. Use S3 event notification to publish events to the SQS queue. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk to launch EC2 instances in an Auto Scaling group for the web application and launch a worker environment to process the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852795,
          "date": "Tue 28 Mar 2023 07:05",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Host the web application in Amazon S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 832518,
          "date": "Wed 08 Mar 2023 05:10",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "ANS is D<br><br>Point to consider, \\\"reduce operational overhead using AWS managed services\\\" and not to redesign. Therefore, EC2 will be replaced with ElasticBeans",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 831772,
          "date": "Tue 07 Mar 2023 11:42",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "This solution eliminates the need for managing and scaling EC2 instances for the web application and the worker environment for processing the SQS queue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 821734,
          "date": "Sat 25 Feb 2023 19:30",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "The answer is C. <br><br>This solution eliminates the need for managing and scaling EC2 instances for the web application and the worker environment for processing the SQS queue. Instead, Amazon S3 can host the web application, and store the uploaded videos, which can trigger S3 event notifications to send messages to the SQS queue. Then, an AWS Lambda function can process the messages in the SQS queue and use Amazon Rekognition API to categorize the videos. This approach also takes advantage of AWS-managed services, such as S3, SQS, and Lambda, which reduces operational overhead and dependency on third-party software.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817943,
          "date": "Wed 22 Feb 2023 15:48",
          "username": "\t\t\t\tPSPaul\t\t\t",
          "content": "Vote C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817487,
          "date": "Wed 22 Feb 2023 06:23",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : Key here is reduced operational head and use aws managed services which takes to serverless solutions. which is Lambda and Rekognition (aws managed). Mounting to EFS is overhead and moreover is good for file system, in future can pose problem scaling it with large video content in future. S3 is good for static videos storage obviously, So C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790976,
          "date": "Sat 28 Jan 2023 19:59",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I don't like C.  It says that it CONTAINS static content, but it does not say ONLY static content. The S3 would not be suitable.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The most appropriate solution would be to use Amazon S3 for storing the uploaded videos, and hosting the web application. This approach reduces operational overhead, and removes dependencies on third-party software. S3 event notifications can be used to publish events to an SQS queue, which can then be processed using AWS Lambda functions that call the Amazon Rekognition API to categorize the videos.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810173,
          "date": "Thu 16 Feb 2023 02:47",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The most appropriate solution would be to use Amazon S3 for storing the uploaded videos, and hosting the web application. This approach reduces operational overhead, and removes dependencies on third-party software. S3 event notifications can be used to publish events to an SQS queue, which can then be processed using AWS Lambda functions that call the Amazon Rekognition API to categorize the videos.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774730,
          "date": "Fri 13 Jan 2023 18:35",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "This solution meets the requirements by using multiple managed services offered by AWS which can reduce the operational overhead. Hosting the web application in Amazon S3 would make it highly available, scalable and can handle variable traffic. The uploaded videos can be stored in S3 and processed using S3 event notifications that trigger a Lambda function, which calls the Amazon Rekognition API to categorize the videos. SQS can be used to process the event notifications and also it is a managed service.<br>This solution eliminates the need to manage EC2 instances, EBS volumes and the custom software. Additionally, using Lambda function in this case, eliminates the need for managing additional servers to process the SQS queue which will reduce operational overhead.<br><br>By using this solution, the company can benefit from the scalability, reliability, and cost-effectiveness that these services offer, which can help to reduce operational overhead and improve the overall performance and security of the application.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759396,
          "date": "Wed 28 Dec 2022 06:40",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I vote C. <br>The serverless architecture reduces operational overhead the most for the requirement.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html<br>https://docs.aws.amazon.com/rekognition/latest/dg/video-analyzing-with-sqs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 753403,
          "date": "Thu 22 Dec 2022 15:56",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "no brainer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743055,
          "date": "Mon 12 Dec 2022 17:51",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "website contains static content = S3<br>I go with C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/35889-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743091,
          "date": "Mon 12 Dec 2022 18:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/35889-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742849,
          "date": "Mon 12 Dec 2022 14:37",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "Correct answer is C",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a serverless application comprised of Amazon CloudFront, Amazon API Gateway, and AWS Lambda functions. The current deployment process of the application code is to create a new version number of the Lambda function and run an AWS CLI script to update. If the new function version has errors, another CLI script reverts by deploying the previous working version of the function. The company would like to decrease the time to deploy new versions of the application logic provided by the Lambda functions, and also reduce the time to detect and revert when errors are identified.<br>How can this be accomplished?<br><br></p>",
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
              "choice": "<p>A. Create and deploy nested AWS CloudFormation stacks with the parent stack consisting of the AWS CloudFront distribution and API Gateway, and the child stack containing the Lambda function. For changes to Lambda, create an AWS CloudFormation change set and deploy; if errors are triggered, revert the AWS CloudFormation change set to the previous version.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS SAM and built-in AWS CodeDeploy to deploy the new Lambda version, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code. Rollback if Amazon CloudWatch alarms are triggered.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Refactor the AWS CLI scripts into a single script that deploys the new Lambda version. When deployment is completed, the script tests execute. If errors are detected, revert to the previous Lambda version.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and deploy an AWS CloudFormation stack that consists of a new API Gateway endpoint that references the new Lambda version. Change the CloudFront origin to the new API Gateway endpoint, monitor errors and if detected, change the AWS CloudFront origin to the previous API Gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774735,
          "date": "Fri 13 Jan 2023 18:39",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "AWS Serverless Application Model (SAM) is a framework that helps you build, test and deploy your serverless applications. It uses CloudFormation under the hood, so it is a way to simplify the process of creating, updating, and deploying CloudFormation templates. CodeDeploy is a service that automates code deployments to any instance, including on-premises instances and Lambda functions.<br>With AWS SAM you can use the built-in CodeDeploy to deploy new versions of the Lambda function, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code.<br>You can also define CloudWatch Alarms to trigger a rollback in case of any issues.<br>This allows for a faster and more efficient deployment process, as well as a more reliable rollback process when errors are identified. This way you can increase the speed of deployment and reduce the time to detect and revert when errors are identified.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 852800,
          "date": "Tue 28 Mar 2023 07:06",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Use AWS SAM and built-in AWS CodeDeploy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 844771,
          "date": "Mon 20 Mar 2023 11:44",
          "username": "\t\t\t\t5up3rm4n\t\t\t",
          "content": "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html<br><br>AWS Serverless Application Model (AWS SAM) comes built-in with CodeDeploy to provide gradual AWS Lambda deployments. With just a few lines of configuration, AWS SAM does the following for you:<br><br>Deploys new versions of your Lambda function, and automatically creates aliases that point to the new version.<br><br>Gradually shifts customer traffic to the new version until you're satisfied that it's working as expected. If an update doesn't work correctly, you can roll back the changes.<br><br>Defines pre-traffic and post-traffic test functions to verify that the newly deployed code is configured correctly and that your application operates as expected.<br><br>Automatically rolls back the deployment if CloudWatch alarms are triggered.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 831775,
          "date": "Tue 07 Mar 2023 11:46",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "AWS Serverless Application Model (SAM)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753409,
          "date": "Thu 22 Dec 2022 16:03",
          "username": "\t\t\t\tspencer_sharp\t\t\t",
          "content": "sam typical use case",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743060,
          "date": "Mon 12 Dec 2022 17:56",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "AWS CodeDeploy is intended for this kind of use<br>https://aws.amazon.com/fr/codedeploy/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/5158-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743090,
          "date": "Mon 12 Dec 2022 18:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/5158-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to store a large number of archived documents and make the documents available to employees through the corporate intranet. Employees will access the system by connecting through a client VPN service that is attached to a VPC.  The data must not be accessible to the public.<br>The documents that the company is storing are copies of data that is held on physical media elsewhere. The number of requests will be low. Availability and speed of retrieval are not concerns of the company.<br>Which solution will meet these requirements at the LOWEST cost?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch an Amazon EC2 instance that runs a web server. Attach an Amazon Elastic File System (Amazon EFS) file system to store the archived data in the EFS One Zone-Infrequent Access (EFS One Zone-IA) storage class Configure the instance security groups to allow access only from private networks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an Amazon EC2 instance that runs a web server Attach an Amazon Elastic Block Store (Amazon EBS) volume to store the archived data. Use the Cold HDD (sc1) volume type. Configure the instance security groups to allow access only from private networks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 Glacier Deep Archive storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 751295,
          "date": "Tue 20 Dec 2022 18:46",
          "username": "\t\t\t\ttman22\t\t\t",
          "content": "A - Glacier Deep Archive can't be used for web hosting, regardless if the company says retrieval time is no concern.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nevermind, I go for D. <br>It should be technically possible - and mostly dependent on the intranet web application logic - It could present users with the ability to start file retrieval, for then to later access the data.</li></ul>",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 751300,
          "date": "Tue 20 Dec 2022 18:52",
          "username": "\t\t\t\ttman22\t\t\t",
          "content": "Nevermind, I go for D. <br>It should be technically possible - and mostly dependent on the intranet web application logic - It could present users with the ability to start file retrieval, for then to later access the data.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 742868,
          "date": "Mon 12 Dec 2022 14:48",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct. HA is not required here. <br>D use Glacier deep archive that need hours to access that will cause time out for web",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 853723,
          "date": "Tue 28 Mar 2023 23:31",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A makes more sense than D. . Deep Archive retrieval time is 12 hours and I'm not sure it's possible to host static website in such long retrieval time!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 842076,
          "date": "Fri 17 Mar 2023 15:41",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "A is the only correct. I looked up the AWS docs...<br>S3 Glacier Deep Archive is a completely separate service that does not support web hosting.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841361,
          "date": "Thu 16 Mar 2023 22:11",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "A , i created bucket with web hosting and put some html pages in glacier deep archive and had403 error, operation invalid for object storage class",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 839324,
          "date": "Tue 14 Mar 2023 22:42",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "D - S3 One Zone-IA is for data that is accessed less frequently, but requires rapid access when needed. Question says availability and speed of retrieval are not concerns of the company.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836995,
          "date": "Sun 12 Mar 2023 13:23",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "Availability and speed of retrieval are not concerns of the company.<br>but they did not mention high durability which is not provided by OneZone-IA<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is the only correct. I looked up the AWS docs... <br>S3 Glacier Deep Archive is a completely separate service that does not support web hosting.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 842075,
          "date": "Fri 17 Mar 2023 15:41",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "A is the only correct. I looked up the AWS docs... <br>S3 Glacier Deep Archive is a completely separate service that does not support web hosting.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836782,
          "date": "Sun 12 Mar 2023 08:40",
          "username": "\t\t\t\tlimjieson\t\t\t",
          "content": "D is c orrect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835602,
          "date": "Sat 11 Mar 2023 04:15",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html<br>Store large number of archived docs, and available through corp intranet. <br>Copies of data held on physical media elsewhere (could be re-created). <br>Requests low (but it doesn't say RARE so think monthly/quarterly).<br>\\\"AVAILABILITY\\\" and speed of retrieval are not concerns.<br><br>It is A, yes Glacier is \\\"cheaper\\\", but I have to leave the archives for at least 180 days, would be available on corp intranet and it is more cost-effective if I want to migrate the data to Glacier if I monitor use and see it is \\\"rarely\\\" touched and know I have to hold it due to regulatory for at minimal 180 days.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831781,
          "date": "Tue 07 Mar 2023 11:56",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "will go with A considering following hints<br>1) data is copy of somethign stored else where (hints to One zone)<br>2) traffic is low(but it still exist)<br>3) minimum storage duration <br><br>D might alos be correct but i will select A in exam",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 821756,
          "date": "Sat 25 Feb 2023 20:02",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "This solution provides cost-effective storage for the archived documents using the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class, which is the lowest cost storage option for infrequently accessed data in a single availability zone. Hosting the S3 bucket as a website enables easy access to the documents through the intranet, and creating an S3 interface endpoint ensures that access is only possible through the VPN attached to the VPC.  Additionally, S3 provides built-in security features, such as bucket policies and access control lists (ACLs), to control access to the data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 819340,
          "date": "Thu 23 Feb 2023 16:23",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "I will use A, but the question does not specify how often the files are retrieved. If they are retrieved frequently A for sure if they aren't then D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.linkedin.com/pulse/s3-standard-more-cost-effective-than-glacier-jon-bonso;<br>Definitely A:Glacier has the highest minimum storage duration, which is 180 days, it becomes cost prohibitive if you factor in retrieval costs</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 828292,
          "date": "Fri 03 Mar 2023 20:22",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://www.linkedin.com/pulse/s3-standard-more-cost-effective-than-glacier-jon-bonso;<br>Definitely A:Glacier has the highest minimum storage duration, which is 180 days, it becomes cost prohibitive if you factor in retrieval costs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818102,
          "date": "Wed 22 Feb 2023 18:25",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Tricky one - Glacier storage class has different levels which can fetch documents quickly with instant retrieval too. so many people go for A but answer is D to save more!. - https://aws.amazon.com/s3/storage-classes/glacier/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm on the fence on this question, Option A is offering a Single AZ S3 bucket with infrequent access that has the feature to enable web hosting. I can't find a web hosting feature with any of the archive classes unless the archive is restored and transitioned back to the standard class.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821007,
          "date": "Fri 24 Feb 2023 23:55",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "I'm on the fence on this question, Option A is offering a Single AZ S3 bucket with infrequent access that has the feature to enable web hosting. I can't find a web hosting feature with any of the archive classes unless the archive is restored and transitioned back to the standard class.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817967,
          "date": "Wed 22 Feb 2023 16:13",
          "username": "\t\t\t\tPSPaul\t\t\t",
          "content": "D is good!<br>Keyword is \\\"speed of retrieval are not concerns\\\"<br>So, Glacier Deep Archive is the choice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816632,
          "date": "Tue 21 Feb 2023 14:47",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "Lowest cost gives the hint. it should be option D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816630,
          "date": "Tue 21 Feb 2023 14:46",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "Lowest cost gives the hint. it should be option D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816315,
          "date": "Tue 21 Feb 2023 08:23",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "The employees can connect via intranet point to note is it's not via web application, so ppl can wait 12hours to get the documents for the lowest storage cost",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company's AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company's AWS accounts.<br>The company's security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Configure AWS IAM Identity Center (AWS Single Sign-On) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS IAM Identity Center (AWS Single Sign-On) by using IAM Identity Center as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using IAM Identity Center permission sets.<br></p>",
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
          "id": 852801,
          "date": "Tue 28 Mar 2023 07:12",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A is the best choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 846436,
          "date": "Wed 22 Mar 2023 00:15",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "A and B are wrong. https://docs.aws.amazon.com/singlesignon/latest/userguide/supported-idps.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changed to D.  https://aws.amazon.com/ru/blogs/security/aws-federated-authentication-with-active-directory-federation-services-ad-fs/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 846443,
          "date": "Wed 22 Mar 2023 00:21",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "Changed to D.  https://aws.amazon.com/ru/blogs/security/aws-federated-authentication-with-active-directory-federation-services-ad-fs/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832528,
          "date": "Wed 08 Mar 2023 05:34",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "ANS is B<br><br>Option A is incorrect because it suggests using SAML 2.0 for authentication but does not address the requirements for managing user identities in a single location or providing conditional access based on user groups and roles.<br><br>Option C is incorrect because it suggests creating cross-account IAM users, which would require duplicating user identities across AWS accounts, defeating the purpose of using a single location for managing user identities.<br><br>Option D is incorrect because it suggests using an OpenID Connect (OIDC) identity provider, which does not integrate with Active Directory.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821759,
          "date": "Sat 25 Feb 2023 20:05",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "AWS Single Sign-On (SSO) is designed to manage access to multiple AWS accounts and business applications, and it allows users to sign in once using their existing credentials, including those from Active Directory. By configuring AWS SSO to connect to Active Directory by using SAML 2.0, the user identities can be managed in a single location. Additionally, automatic provisioning can be enabled using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. This will ensure that users are created and updated in AWS SSO based on changes in Active Directory.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820210,
          "date": "Fri 24 Feb 2023 08:34",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "A: imo not possible with on premises AD (SCIM not supported)<br>B: imo not possible with on premises AD (SCIM not supported)<br>C: \\\"Provision users in IAM\\\" violates the requirement of central user Management.<br>D: OIDC may be an ugly pig but works. Usage of roles removes the necessity of maintaining users in AWS.<br>(admitted: A would be much nicer if it was possible. )",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818405,
          "date": "Wed 22 Feb 2023 22:01",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : SAML, Existing Active Directory services authentication mechanism and ABAC are key terms for the requirement. A fits well. D is wrong because, OIDC does not need to be implemented as the auth mechanism is already in place with AD.  OIDC does not jell with Active Directory. AD and SAML is a workable solution though.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 780191,
          "date": "Wed 18 Jan 2023 17:12",
          "username": "\t\t\t\tbititan\t\t\t",
          "content": "A is has options for SAML and SCIM configuration with AD<br>C is all about users and no roles are mentioned. AD User attributes cannot be mapped to IAM users direct<br>D is openID based, MS AD would not support this<br><br>so I go with A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774750,
          "date": "Fri 13 Jan 2023 18:52",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/74174-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Both option C and option A are valid solutions that meet the requirements for the scenario.<br><br>ABAC, or attribute-based access control, is a method of granting access to resources based on the attributes of the user, the resource, and the action. This allows for fine-grained access control, which can be useful for implementing a security policy that requires conditional access to the accounts based on user groups and roles.<br><br>AWS IAM Identity Center (AWS SSO) allows you to connect to your on-premises Active Directory service using SAML 2.0. With this, you can enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol, which allows for the management of user identities in a single location.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In option C, the company will use IAM to use a SAML 2.0 identity provider, and it will use the appropriate groups in Active Directory to grant access to the required AWS accounts by using cross-account IAM users. In this way, it can implement its security policy of conditional access to the accounts based on user groups and roles.<br><br>In summary, both option A and C are valid solutions, both of them allow you to use your on-premises Active Directory service for user authentication, and both of them allow you to manage user identities in a single location and grant access to the AWS accounts based on user groups and roles.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774751,
          "date": "Fri 13 Jan 2023 18:52",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "In option C, the company will use IAM to use a SAML 2.0 identity provider, and it will use the appropriate groups in Active Directory to grant access to the required AWS accounts by using cross-account IAM users. In this way, it can implement its security policy of conditional access to the accounts based on user groups and roles.<br><br>In summary, both option A and C are valid solutions, both of them allow you to use your on-premises Active Directory service for user authentication, and both of them allow you to manage user identities in a single location and grant access to the AWS accounts based on user groups and roles.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751311,
          "date": "Tue 20 Dec 2022 19:02",
          "username": "\t\t\t\ttman22\t\t\t",
          "content": "C. <br>On-premises Active Directory does not support SCIM or OIDC.  Azure AD is not mentioned.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 750626,
          "date": "Tue 20 Dec 2022 08:55",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "I choose A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743079,
          "date": "Mon 12 Dec 2022 18:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I prefer to go to answer A for ABAC<br><br>https://docs.aws.amazon.com/singlesignon/latest/userguide/scim-profile-saml.html<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/74174-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743088,
          "date": "Mon 12 Dec 2022 18:22",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/74174-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
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
      "question_text": "<p>A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon DynamoDB table. The application is showing an increase in the number of errors during PUT requests. Most of the PUT calls come from a small number of clients that are authenticated with specific API keys.<br>A solutions architect has identified that a large number of the PUT requests originate from one client. The API is noncritical, and clients can tolerate retries of unsuccessful calls. However, the errors are displayed to customers and are causing damage to the API's reputation.<br>What should the solutions architect recommend to improve the customer experience?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement API throttling through a usage plan at the API Gateway level. Ensure that the client application handles code 429 replies without error.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on API caching to enhance responsiveness for the production stage. Run 10-minute load tests. Verify that the cache capacity is appropriate for the workload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement reserved concurrency at the Lambda function level to provide the resources that are needed during sudden increases in traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 760167,
          "date": "Wed 28 Dec 2022 18:41",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct. API gateway throttling is applied to single account - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html. Retry will make it even worse.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 774790,
          "date": "Fri 13 Jan 2023 20:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "API throttling is a technique that can be used to control the rate of requests to an API. This can be useful in situations where a small number of clients are making a large number of requests, which is causing errors. By implementing API throttling through a usage plan at the API Gateway level, the solutions architect can limit the number of requests that a client can make, which will help to reduce the number of errors.<br><br>It's important that the client application handles the code 429 replies without error, this will help to improve the customer experience by reducing the number of errors that are displayed to customers. Additionally, it will prevent the API's reputation from being damaged by the errors.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is important to note that other solutions such as retry logic with exponential backoff and irregular variation in the client application or turn on API caching to enhance responsiveness for the production stage may help to improve the customer experience and reduce errors, but they do not address the root cause of the problem which is a large number of requests coming from a small number of clients.<br><br>Implementing reserved concurrency at the Lambda function level can provide resources that are needed during sudden increases in traffic, but it does not address the issue of a client making a large number of requests and causing errors.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774791,
          "date": "Fri 13 Jan 2023 20:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "It is important to note that other solutions such as retry logic with exponential backoff and irregular variation in the client application or turn on API caching to enhance responsiveness for the production stage may help to improve the customer experience and reduce errors, but they do not address the root cause of the problem which is a large number of requests coming from a small number of clients.<br><br>Implementing reserved concurrency at the Lambda function level can provide resources that are needed during sudden increases in traffic, but it does not address the issue of a client making a large number of requests and causing errors.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 852804,
          "date": "Tue 28 Mar 2023 07:14",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818485,
          "date": "Wed 22 Feb 2023 22:55",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : While catching errors and showing nice error message is good for customers,<br>it still does damage to API as clients think API is not working/responding well.<br>Retry and showing nice error will still invoke frustration to clients and damage to API :-)<br>As the api is being bombarded with small number of clients (note they are successfully <br>authenticated already trying to update resources with PUT) so assuming they are just bombarding with 429 too many requests.<br>So API throttling helps. Caching may give stale data (C is not apt here) Reserved concurrency<br>when lambda is overloaded (D is not a fit either). B should be correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816314,
          "date": "Tue 21 Feb 2023 08:22",
          "username": "\t\t\t\tMahakali\t\t\t",
          "content": "API throttling helps",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816257,
          "date": "Tue 21 Feb 2023 06:48",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Exponential backoff is a boto3 client retry logic that will impact all clients. The question is stating it's one client causing the issue, so A is not the correct choice. <br>B as API Gateway can throttle the requests and handle the error pages correctly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815509,
          "date": "Mon 20 Feb 2023 17:14",
          "username": "\t\t\t\tjaysparky\t\t\t",
          "content": "It is B.  Don't think PUT Method should be cached.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792755,
          "date": "Mon 30 Jan 2023 14:06",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "The problem is that an error is displayed==>solution API throttling",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 789070,
          "date": "Thu 26 Jan 2023 20:53",
          "username": "\t\t\t\tvsk12\t\t\t",
          "content": "Option B is wrong as API throttling would be applied to all the customers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It can be applied to requests with specific API key.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819361,
          "date": "Thu 23 Feb 2023 16:46",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "It can be applied to requests with specific API key.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743086,
          "date": "Mon 12 Dec 2022 18:22",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I go with A:<br>https://www.examtopics.com/discussions/amazon/view/69110-exam-aws-certified-solutions-architect-professional-topic-1/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Implementing retry logic with exponential backoff and irregular variation in the client application can be a good way to improve the reliability of the application and reduce errors, but it does not address the root cause of the problem, which is a large number of requests coming from a small number of clients.<br><br>Retry logic with exponential backoff works by increasing the time between retries by a certain factor (e.g. doubling it) after each failed attempt. This can help to reduce the number of errors by giving the API time to recover from a high load. However, it does not address the issue of the high load itself. If the number of requests that a client is making is causing errors, retry logic alone may not be sufficient to resolve the issue.</li><li>Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774792,
          "date": "Fri 13 Jan 2023 20:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Implementing retry logic with exponential backoff and irregular variation in the client application can be a good way to improve the reliability of the application and reduce errors, but it does not address the root cause of the problem, which is a large number of requests coming from a small number of clients.<br><br>Retry logic with exponential backoff works by increasing the time between retries by a certain factor (e.g. doubling it) after each failed attempt. This can help to reduce the number of errors by giving the API time to recover from a high load. However, it does not address the issue of the high load itself. If the number of requests that a client is making is causing errors, retry logic alone may not be sufficient to resolve the issue.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774793,
          "date": "Fri 13 Jan 2023 20:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.",
          "upvote_count": "2",
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
      "question_text": "<p>A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200&nbsp;TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72&nbsp;hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared file system run continuously. The compute and storage instances are all in the same AWS Region.<br>A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run.<br>Which solution will provide the LARGEST overall cost reduction while meeting these requirements?<br><br></p>",
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
              "choice": "<p>A. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852805,
          "date": "Tue 28 Mar 2023 07:17",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A is the best choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 843056,
          "date": "Sat 18 Mar 2023 19:27",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "definitely A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831797,
          "date": "Tue 07 Mar 2023 12:14",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Lazy loading is cost-effective because only a subset of data is used at every job",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 823462,
          "date": "Mon 27 Feb 2023 10:17",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "A: Lazy loading is cost-effective because only a subset of data is used at every job<br>B: There are hundreds of EC2 instances using the volume which is not possible (one EBS volume is limited to 16 nitro instances attached)<br>C: Batching would load too much data<br>D: storage gateway is used for on premises data access, I don't know is you can install a gateway in AWS, but Amazon would never advise this",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820277,
          "date": "Fri 24 Feb 2023 10:05",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "A: provides High performance Access<br>B: EBS is by far more expensive than s3.<br>C: Lustre with Lazy Loading(A) is Cheaper than Batch loading<br>D: might be cheaper than A but does not provide High performance Access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818544,
          "date": "Thu 23 Feb 2023 00:31",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "My Logical answer : D has blunder in it. Storage gateway is not a storage solution. its just a gateway for large data transfers usual usecase of on premises. Block storage is not fit as data is being modified here in this<br>usecase. So B is wrong. am guessing data analytics usecase here for high performant compute which Lustre provides.that leaves A or C.  The tricky word here is Overall cost storage saving comparing S3 Intelligent tier vs Standard tier. Intelligent tier can recognise that data is not being touched<br>for a month and it will use its intelligence to move into other cheaper storage class and gets to work whenever that high performance job needs to be started. So A fits well.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think you are wrong about the S3 file gateway:<br>https://docs.aws.amazon.com/filegateway/latest/files3/create-gateway-file.html#connect-to-amazon-s3-file</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820251,
          "date": "Fri 24 Feb 2023 09:18",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "I think you are wrong about the S3 file gateway:<br>https://docs.aws.amazon.com/filegateway/latest/files3/create-gateway-file.html#connect-to-amazon-s3-file",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815190,
          "date": "Mon 20 Feb 2023 13:01",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "FSx for Lustre with lazy loading should work",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813907,
          "date": "Sun 19 Feb 2023 10:30",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "Can someone please explain why the correct answer is A, and not C?<br>A will actually come out more expensive, as (because you load the file each month) the files will never transition out from S3 standard, and you also pay for the inteligent-tiering.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hey Anita - Intelligent tier will observe that data is not touched for a month right, so data can actually be moved into other cheaper storage based on usage patterns. it is cheaper compared to standard S3. AWS says Since the launch of S3 Intelligent-Tiering in 2018, customers have saved $750 million from adopting S3 Intelligent-Tiering when compared to S3 Standard. Read thru this as this article says S3 intelligent tiering provides automatic save storage costs- https://aws.amazon.com/s3/storage-classes/intelligent-tiering/</li><li>OK, just noticed only a subset of the files are read during the monthly job, so in that case A is correct.</li><li>This job runs 1x every month, so the data has no opportunity to transition into cheaper storage tier.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html<br>\\\" For a low monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects to the Infrequent Access tier when they have not been accessed for 30 consecutive days.\\\"<br>So basically all you achieve with using intelligent tiering is keeping the data in standard storage for 30 days, moving the data to infrequent access and moving it back to standard the same day or the next. Seems pretty pointless to me</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818548,
          "date": "Thu 23 Feb 2023 00:38",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Hey Anita - Intelligent tier will observe that data is not touched for a month right, so data can actually be moved into other cheaper storage based on usage patterns. it is cheaper compared to standard S3. AWS says Since the launch of S3 Intelligent-Tiering in 2018, customers have saved $750 million from adopting S3 Intelligent-Tiering when compared to S3 Standard. Read thru this as this article says S3 intelligent tiering provides automatic save storage costs- https://aws.amazon.com/s3/storage-classes/intelligent-tiering/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>OK, just noticed only a subset of the files are read during the monthly job, so in that case A is correct.</li><li>This job runs 1x every month, so the data has no opportunity to transition into cheaper storage tier.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html<br>\\\" For a low monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects to the Infrequent Access tier when they have not been accessed for 30 consecutive days.\\\"<br>So basically all you achieve with using intelligent tiering is keeping the data in standard storage for 30 days, moving the data to infrequent access and moving it back to standard the same day or the next. Seems pretty pointless to me</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 822954,
          "date": "Sun 26 Feb 2023 21:53",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "OK, just noticed only a subset of the files are read during the monthly job, so in that case A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822937,
          "date": "Sun 26 Feb 2023 21:34",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "This job runs 1x every month, so the data has no opportunity to transition into cheaper storage tier.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html<br>\\\" For a low monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects to the Infrequent Access tier when they have not been accessed for 30 consecutive days.\\\"<br>So basically all you achieve with using intelligent tiering is keeping the data in standard storage for 30 days, moving the data to infrequent access and moving it back to standard the same day or the next. Seems pretty pointless to me",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 791518,
          "date": "Sun 29 Jan 2023 10:38",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I go for D.  In A, we are missing a critical step, exporting the resutls back from FSX to S3. Instead, we are deleting the FSX file system, which means that results and modifications are lost. Please check https://aws.amazon.com/blogs/storage/new-enhancements-for-moving-data-between-amazon-fsx-for-lustre-and-amazon-s3/ which explains that.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think we could assume it because it deliberately uses FSx for Lustre linked to S3.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 803427,
          "date": "Thu 09 Feb 2023 16:49",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I think we could assume it because it deliberately uses FSx for Lustre linked to S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786710,
          "date": "Tue 24 Jan 2023 17:55",
          "username": "\t\t\t\tMasterP007\t\t\t",
          "content": "Option A is Correct. <br>As for Option B - is there such a thing as EBS Multi-attach!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yeah there is but its not feasible here as there is hundreds of instance.<br><br>Multi-Attach enabled volumes can be attached to up to 16 Linux instances built on the Nitro System that are in the same Availability Zone. You can attach a volume that is Multi-Attach enabled to Windows instances, but the operating system does not recognize the data on the volume that is shared between the instances, which can result in data inconsistency.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817178,
          "date": "Tue 21 Feb 2023 22:15",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "yeah there is but its not feasible here as there is hundreds of instance.<br><br>Multi-Attach enabled volumes can be attached to up to 16 Linux instances built on the Nitro System that are in the same Availability Zone. You can attach a volume that is Multi-Attach enabled to Windows instances, but the operating system does not recognize the data on the volume that is shared between the instances, which can result in data inconsistency.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774796,
          "date": "Fri 13 Jan 2023 20:22",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "This solution would provide the largest overall cost reduction while meeting the requirements. By migrating the data to an S3 bucket using the S3 Intelligent-Tiering storage class, the company can take advantage of the automatic cost optimization provided by the storage class, which can result in significant cost savings. Additionally, by using Amazon FSx for Lustre to create a new file system with the data from Amazon S3, the company can take advantage of the high-performance access to the needed data for the duration of the 72-hour run. When the job is complete, the company can delete the file system, further reducing costs.<br><br>Option B, C and D may provide some cost savings over the current solution, but the savings would be less significant than the option A, because of the cost of the storage, the cost of the data transfer, and the cost of the storage gateway, the solution using the S3 and FSx for Lustre is the most cost-effective while meeting the requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 755230,
          "date": "Sat 24 Dec 2022 23:49",
          "username": "\t\t\t\tcloudfever\t\t\t",
          "content": "using FSx for Lustre with lazy loading allows you to only pay for the data that is accessed during the job, rather than paying for the entire file system upfront.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744182,
          "date": "Tue 13 Dec 2022 16:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/80991-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new service that will be accessed using TCP on a static port. A solutions architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name my.service.com, which is publicly accessible. The service must use fixed address assignments so other companies can add the addresses to their allow lists.<br>Assuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB.  Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLCreate a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB.  Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB.  Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852809,
          "date": "Tue 28 Mar 2023 07:19",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831802,
          "date": "Tue 07 Mar 2023 12:17",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "IP address using NLB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818607,
          "date": "Thu 23 Feb 2023 01:56",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : Non http port like TCP should hint to NLB immediately.(ALB does not fit here) Sharing IP address of EC2 is not apt<br>whether it is from individual EC2 instances or those from ECS cluster.this eliminates A,B. D, infact the NLB's address which stays in front of / associates to ec2 instances need to be shared. So, only solution is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817197,
          "date": "Tue 21 Feb 2023 22:36",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "C looks correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792845,
          "date": "Mon 30 Jan 2023 14:27",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "C.  NLB with one Elastic IP per AZ to handle TCP traffic. Alias record set named my.service.com.<br>https://www.examtopics.com/discussions/amazon/view/28045-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791541,
          "date": "Sun 29 Jan 2023 11:11",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "C looks correct. I did not read the rest.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774801,
          "date": "Fri 13 Jan 2023 20:29",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A more appropriate solution would be option C.  Create an Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB.  Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set. As it uses the NLB as the resource in the A-record, traffic will be routed through the NLB, and it will automatically route the traffic to the healthy instances based on the health checks and also it provides the fixed address assignments as the other companies can add the NLB's Elastic IP addresses to their allow lists.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744188,
          "date": "Tue 13 Dec 2022 16:15",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/28045-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company's data center.<br>The system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA.  The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed.<br>A solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 854528,
          "date": "Wed 29 Mar 2023 16:41",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "12 nodes in redundant configuration ..Means 6 nodes can handle load at any given time. <br>Out of 6 nodes, 65 % is SLA driven (~4nodes) and 35% load can be paused. <br>This lead to 4 nodes with single point of failure. D- If one -az down you still have 4 nodes available.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 852813,
          "date": "Tue 28 Mar 2023 07:22",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "...Run one instance in each Availability Zone as a Spot Instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 852642,
          "date": "Tue 28 Mar 2023 03:28",
          "username": "\t\t\t\thigashikumi\t\t\t",
          "content": "The solution that meets the requirements most cost-effectively is Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832250,
          "date": "Tue 07 Mar 2023 21:01",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "D -> No long term commitment. Please hourly jobs require 65% capacity",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 830288,
          "date": "Sun 05 Mar 2023 21:22",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "I can't understand people who voted D. . Capacity Reserved instances are very expensive and have the same price of on-demand so it's not a “cost-effectively“ solution .<br>C is the most cost effectively solution that also makes sense.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option-C uses savings plan and needs commitment; The question says no long-term commitment; Hence option-D is the best.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 832536,
          "date": "Wed 08 Mar 2023 05:52",
          "username": "\t\t\t\tNPN\t\t\t",
          "content": "Option-C uses savings plan and needs commitment; The question says no long-term commitment; Hence option-D is the best.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823791,
          "date": "Mon 27 Feb 2023 15:09",
          "username": "\t\t\t\t_lasco_\t\t\t",
          "content": "Voted D because of the 65% / 35% proportion. C seems to be good but with only 50% instances available we break the SLA",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 823489,
          "date": "Mon 27 Feb 2023 10:37",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "D has no long term commitment (e.g. saving plans) and has 75% on demand instances / 25% spot instances which is near the requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 821781,
          "date": "Sat 25 Feb 2023 20:49",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "Option D is also a good solution because it splits the 12 instances across three Availability Zones and uses a mix of On-Demand Instances with Capacity Reservations and Spot Instances. However, it allocates fewer On-Demand Instances than Option C, which could result in lower availability.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821780,
          "date": "Sat 25 Feb 2023 20:48",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "C is a good solution because it splits the 12 instances across three Availability Zones and uses a mix of On-Demand Instances with a Savings Plan and Spot Instances.<br><br>On-Demand instances provide a consumption-based model with no long-term commitments, which is one of the requirements mentioned in the scenario. Although other purchasing options such as Reserved Instances or Savings Plans could offer significant discounts over On-Demand pricing, they require longer commitments and upfront payments, which may not align with the requirement of a consumption-based model with no long-term commitments. Additionally, using On-Demand instances can help to maintain high availability and meet the tight SLAs required for the scheduled jobs, as they provide the fastest and most reliable way to provision EC2 instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 820376,
          "date": "Fri 24 Feb 2023 11:53",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "We have an SLA to meet, that cannot be guaranteed with spot instances. We need to ensure that 65% of capacity is always available.<br>The only option that has at least 65% capacity always available is D. <br>Other options may be cheaper but do not provide the required Service Level.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 819224,
          "date": "Thu 23 Feb 2023 14:09",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "\\\" with no long-term commitments.\\\" -> option c require atleast 1=3 years of commitments, so we can ignore it. So D is the best option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818788,
          "date": "Thu 23 Feb 2023 05:26",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : A and B gets eliminated because one says two AZs and other is wierd proportion of 4 OnDemand, rest Spot instances.<br>that leaves C and D.  Most might go for D thinking 65-35 proportion but question asks for MOST cost effective which is option with Savings plans and its just 1 year commitment [its not really long term] (https://aws.amazon.com/savingsplans/compute-pricing/)<br>In fact one standing out in this aspect is only C.  Two OnDemand with savings plan saves and Two Spot instances save costs too. Win win situation<br>and we have this same proportion in other two AZs as well, good for High Availability. So, I choose C. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>without knowing what the company considers \\\"long-term\\\" we cannot make that assumption. Yes, I leaned to it at first but reviewing the statement \\\"which solution will meet these requirements most cost-effectively?\\\" they don't want a commitment at all.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836606,
          "date": "Sun 12 Mar 2023 00:44",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "without knowing what the company considers \\\"long-term\\\" we cannot make that assumption. Yes, I leaned to it at first but reviewing the statement \\\"which solution will meet these requirements most cost-effectively?\\\" they don't want a commitment at all.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818731,
          "date": "Thu 23 Feb 2023 04:18",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : A and B gets eliminated because one says two AZs and other is wierd proportion of 4 OnDemand, rest Spot instances.<br>that leaves C and D.  Most might go for D thinking 65-35 proportion but question asks for MOST cost effective which is option with Savings plans and its just 1 year commitment [its not really long term] (https://aws.amazon.com/savingsplans/compute-pricing/)<br>In fact one standing out in this aspect is only C.  Two OnDemand with savings plan saves and Two Spot instances save costs too. Win win situation<br>and we have this same proportion in other two AZs as well, good for High Availability. So, I choose C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796612,
          "date": "Fri 03 Feb 2023 02:46",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "C<br>Savings plans are 60-75% savings, capacity reservations guarantee the capacity (no savings).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792858,
          "date": "Mon 30 Jan 2023 14:32",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "SLA looks like 65%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783299,
          "date": "Sat 21 Jan 2023 14:04",
          "username": "\t\t\t\tPugsley\t\t\t",
          "content": "The math is more logical for D - look at the 65% vs 35%.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774804,
          "date": "Fri 13 Jan 2023 20:36",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option D is correct because it meets the requirements of maintaining high availability, meeting SLAs for scheduled jobs, and reducing costs with a consumption-based model. By splitting the 12 instances across three Availability Zones, the system can maintain high availability and availability of resources in case of a failure. Option D also uses a combination of On-Demand Instances with Capacity Reservations and Spot Instances, which allows for scheduled jobs to be run on the On-Demand instances with guaranteed capacity, while also taking advantage of the cost savings from Spot Instances for the user jobs which have lower SLA requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security:<br>The database must use strong, randomly generated passwords stored in a secure AWS managed service.<br>The application resources must be deployed through AWS CloudFormation.<br>The application must rotate credentials for the database every 90&nbsp;days.<br>A solutions architect will generate a CloudFormation template to deploy the application.<br>Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 759544,
          "date": "Wed 28 Dec 2022 09:03",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "A<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/cloudformation.html<br>Option B is wrong. The ParameterStore::RotationSchedule resource does not exist in CloudFormation.<br>Option C is wrong. It does not meet the requirement because it does not use CloudFormation.<br>Option D is wrong. The AWS::AppSync::DataSource resource is what to create data sources for resolvers in AWS AppSync to connect to.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 852815,
          "date": "Tue 28 Mar 2023 07:23",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Secrets Manager RotationSchedule resource",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 832252,
          "date": "Tue 07 Mar 2023 21:04",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_managed.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 823796,
          "date": "Mon 27 Feb 2023 15:13",
          "username": "\t\t\t\t_lasco_\t\t\t",
          "content": "voted A, rotation with secrets manager:<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_managed.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 821785,
          "date": "Sat 25 Feb 2023 20:54",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "The best solution is either A or C, but A may be the LEAST amount of operational overhead since it uses AWS Secrets Manager's built-in rotation functionality.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818766,
          "date": "Thu 23 Feb 2023 04:51",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : Secrets manager only can support password rotation, not parameter store.<br>Parameter store is just a location as its name suggest to refer to or <br>be referred from elsewhere. B,D are eliminated.C is wrong<br>because, there is no necessity for event bridge rule to capture known 90 days trigger.<br>Rotation schedule is already available when you configure a secret in Secrets manager.<br>That leaves option A as correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 792862,
          "date": "Mon 30 Jan 2023 14:34",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Secrets Manager support RotationSchedule.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791552,
          "date": "Sun 29 Jan 2023 11:32",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Option B is not wrong, but it has more operational overhead compared to option A.  Option B uses AWS Systems Manager Parameter Store, which is less automated and requires manual intervention to perform password rotation. Option A uses AWS Secrets Manager, which provides a built-in mechanism to rotate secrets, reducing operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774807,
          "date": "Fri 13 Jan 2023 20:45",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is the correct answer because it meets the security engineer's requirements with the least amount of operational overhead. This option uses AWS Secrets Manager to generate the database password as a secret resource, which is a secure and managed service for storing and rotating secrets such as database credentials. The CloudFormation template also includes a Lambda function resource to rotate the password, and a Secrets Manager RotationSchedule resource to schedule the password rotation every 90 days.<br>This option is the correct answer because it is the best way to manage the password rotation, Secrets Manager is a fully managed service that encrypts and stores the credentials and rotates the credentials automatically, and CloudFormation is used to automate the deployment of the resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744928,
          "date": "Wed 14 Dec 2022 10:24",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Secrets Manager support RotationSchedule.<br>Not ParameterStore.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744197,
          "date": "Tue 13 Dec 2022 16:21",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/47127-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743627,
          "date": "Tue 13 Dec 2022 06:42",
          "username": "\t\t\t\tnyunyu\t\t\t",
          "content": "A <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742894,
          "date": "Mon 12 Dec 2022 15:22",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct - https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Appreciate your participation in the discussions. However, I suggest do a proper research before voicing out your opinion.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808995,
          "date": "Wed 15 Feb 2023 02:38",
          "username": "\t\t\t\tCloud_noob\t\t\t",
          "content": "Appreciate your participation in the discussions. However, I suggest do a proper research before voicing out your opinion.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is storing data in several Amazon DynamoDB tables. A solutions architect must use a serverless architecture to make the data accessible publicly through a simple API over HTTPS. The solution must scale automatically in response to demand.<br>Which solutions meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon API Gateway REST API. Configure this API with direct integrations to DynamoDB by using API Gateway's AWS integration type.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API. Configure this API with direct integrations to Dynamo DB by using API Gateway's AWS integration type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway HTTP API. Configure this API with integrations to AWS Lambda functions that return data from the DynamoDB tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an accelerator in AWS Global Accelerator. Configure this accelerator with AWS Lambda@Edge function integrations that return data from the DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a Network Load Balancer. Configure listener rules to forward requests to the appropriate AWS Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 759799,
          "date": "Wed 28 Dec 2022 13:23",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "A and C. <br>API Gateway REST API can invoke DynamoDB directly.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-overview-developer-experience.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 852817,
          "date": "Tue 28 Mar 2023 07:24",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "AC is a good fit",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 832553,
          "date": "Wed 08 Mar 2023 06:17",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "Ans is A & C<br><br>Option B: HTTP APIs do not currently support integrations with DynamoDB, and therefore this solution would not work.<br>Option D: AWS Global Accelerator and AWS Lambda@Edge, which both involve infrastructure management.<br>Option E: NLB does not meet the requirement of being serverless.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832257,
          "date": "Tue 07 Mar 2023 21:08",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "going with A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 823809,
          "date": "Mon 27 Feb 2023 15:22",
          "username": "\t\t\t\t_lasco_\t\t\t",
          "content": "I voted A and C<br>Api gateway REST APis support direct integration with DynamoDb<br>The same can be achieved with HTTP APIs using a lambda between the two",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 818891,
          "date": "Thu 23 Feb 2023 07:59",
          "username": "\t\t\t\tGabehcoud\t\t\t",
          "content": "Think it should CD.  snippet from the link https://aws.amazon.com/api-gateway/faqs/ below<br><br>HTTP APIs are ideal for:<br>Building proxy APIs for AWS Lambda or any HTTP endpoint<br>Building modern APIs that are equipped with OIDC and OAuth 2 authorization <br>Workloads that are likely to grow very large<br>APIs for latency sensitive workloadsREST APIs are ideal for:<br>Customers looking to pay a single price point for an all-inclusive set of features needed to build, manage, and publish their APIs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818797,
          "date": "Thu 23 Feb 2023 05:38",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "API Gateway is the solution for simple API. D is Cloudfront/Lambda@edge solution for faster<br>response. Rcoequirement says API. So D gets eliminated. E is irrelevant<br>of course. B is wrong because DynamoDB vs Dynamo DB. (no brainer) That leaves A and C<br>as correct answers. (If question asks for more secure not exposing DynamoDB<br>directly, I'd go for C)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816296,
          "date": "Tue 21 Feb 2023 07:38",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "To make the data accessible publicly through a simple API over HTTPS while using a serverless architecture, the recommended solutions are to use Amazon API Gateway with direct integrations to DynamoDB or with integrations to AWS Lambda functions.<br><br>Option A is a valid solution. With a REST API, API Gateway can be configured with direct integrations to DynamoDB, which eliminates the need for a Lambda function.<br><br>Option C is also a valid solution. With an HTTP API, API Gateway can be configured with integrations to AWS Lambda functions that return data from the DynamoDB tables. This solution provides more flexibility since Lambda can be used to customize the data returned from the DynamoDB tables before it is sent back to the client.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 792892,
          "date": "Mon 30 Jan 2023 14:56",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "A and C are the correct answers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 774809,
          "date": "Fri 13 Jan 2023 20:47",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A and C are the correct answers.A.  Create an Amazon API Gateway REST API. Configure this API with direct integrations to DynamoDB by using API Gateway's AWS integration type.C.  Create an Amazon API Gateway HTTP API. Configure this API with integrations to AWS Lambda functions that return data from the DynamoDB tables.<br>By Using Amazon API Gateway, the solution will automatically scale in response to demand, and it will also provide a simple API over HTTPS. While using the Lambda function the data can be accessed from the DynamoDB tables.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For A, this one to be specific https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 804426,
          "date": "Fri 10 Feb 2023 15:32",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "For A, this one to be specific https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 762206,
          "date": "Fri 30 Dec 2022 18:52",
          "username": "\t\t\t\teraser2021999\t\t\t",
          "content": "Lambda@Edge is available for CloudFront and not for Global Accelerator.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 744203,
          "date": "Tue 13 Dec 2022 16:28",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "OK with CD<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLs are defined in a JSON document. All DNS records are managed by Amazon Route 53.<br>A solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.<br>Which combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
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
          "id": 774812,
          "date": "Fri 13 Jan 2023 20:53",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C: By creating an AWS Lambda function, the solution architect can use the JSON document to look up the target URLs for each domain and respond with the appropriate redirect URL. This way, the solution does not need to rely on a web server to handle the redirects, which reduces operational effort.<br><br>E: By creating an Amazon CloudFront distribution, the solution architect can deploy a Lambda@Edge function that can look up the target URLs for each domain and respond with the appropriate redirect URL. This way, CloudFront can handle the redirection, which reduces operational effort.<br><br>F: By creating an SSL certificate with ACM and including the domains as Subject Alternative Names, the solution architect can ensure that the redirect service can handle both HTTP and HTTPS requests, which is required by the company.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SAN cannot handle redirects.We need to do http - https</li><li>A and B are not the right answer because they would require configuring and maintaining a web server to handle the redirects, which would increase operational effort.<br>D is not the right answer because it would require creating an API Gateway API, which increases operational effort.</li><li>Wrong for B, Lambda can be an ALB target, you do not need web server</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 796339,
          "date": "Thu 02 Feb 2023 19:47",
          "username": "\t\t\t\tShahul75\t\t\t",
          "content": "SAN cannot handle redirects.We need to do http - https",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774813,
          "date": "Fri 13 Jan 2023 20:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A and B are not the right answer because they would require configuring and maintaining a web server to handle the redirects, which would increase operational effort.<br>D is not the right answer because it would require creating an API Gateway API, which increases operational effort.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong for B, Lambda can be an ALB target, you do not need web server</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 847428,
          "date": "Wed 22 Mar 2023 20:04",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "Wrong for B, Lambda can be an ALB target, you do not need web server",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832557,
          "date": "Wed 08 Mar 2023 06:24",
          "username": "\t\t\t\tmKrishna\t\t\t",
          "content": "Key point \\\"LEAST amount of operational effort\\\"<br><br>ANS: B, C, D<br><br>Option A is not a serverless solution and would require more operational effort to manage an EC2 instance. <br>Option E is also a valid solution, but deploying a CloudFront distribution would introduce additional complexity and operational overhead. <br>Option F is not necessary for this solution since the redirection is based on domain name and not SSL certificates.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821016,
          "date": "Sat 25 Feb 2023 00:18",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Options A, D, and E are not necessary for meeting the requirements and would add additional complexity and operational effort. Option A suggests creating a dynamic webpage that runs on an EC2 instance, which is unnecessary as the redirect can be handled by the ALB and Lambda function. Option D suggests using an Amazon API Gateway API with a custom domain to publish an AWS Lambda function, which adds additional complexity and operational effort. Option E suggests creating a CloudFront distribution and deploying a Lambda@Edge function, which is more complex than the solution described above and is not necessary for the given requirements.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818841,
          "date": "Thu 23 Feb 2023 07:05",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "My Logical answer : CloudFront /edge services does not fit here on the requirement.E is not apt. Its for online marketing and all domains users need to be<br>redirected. Redirect service steps are all asked for. Needs a Load balancer as front controller which accepts requests from all domains and SSL certificate is certainly needed..A is irrelevant as creating a single web page does not help in redirection. I go with BCF as correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 818840,
          "date": "Thu 23 Feb 2023 07:04",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "My Logical answer : CloudFront /edge services does not fit here on the requirement.E is not apt. Its for online marketing and all domains users need to be<br>redirected. Redirect service steps are all asked for. Needs a Load balancer as front controller which accepts requests from all domains and SSL certificate is certainly needed..A is irrelevant as creating a single web page does not help in redirection. I go with BCF as correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810214,
          "date": "Thu 16 Feb 2023 04:09",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "I choose B,C,E because the question is focused on implementing a redirect service. F will not work as it's for creating an SSL certificate, not creating the redirect service.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Step 1: Create an Application Load Balancer (ALB) that includes HTTP and HTTPS listeners. The ALB can be used to route incoming requests to the appropriate backend service, in this case, the AWS Lambda function.<br><br>Step 2: Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL. We can use the ALB as a trigger for the Lambda function to process the incoming requests and return the appropriate redirect response.<br><br>Step 3: Create an Amazon CloudFront distribution. We can use the ALB as the origin for the CloudFront distribution. This allows us to use the global edge network of CloudFront for faster and more reliable content delivery. We can also deploy a Lambda@Edge function to modify the response headers and redirect the incoming requests to the appropriate target URL.</li><li>Switching to F: <br>Option F is also a valid solution to create an SSL certificate using AWS Certificate Manager (ACM) that includes the domains as Subject Alternative Names, allowing secure HTTPS connections.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 810217,
          "date": "Thu 16 Feb 2023 04:12",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Step 1: Create an Application Load Balancer (ALB) that includes HTTP and HTTPS listeners. The ALB can be used to route incoming requests to the appropriate backend service, in this case, the AWS Lambda function.<br><br>Step 2: Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL. We can use the ALB as a trigger for the Lambda function to process the incoming requests and return the appropriate redirect response.<br><br>Step 3: Create an Amazon CloudFront distribution. We can use the ALB as the origin for the CloudFront distribution. This allows us to use the global edge network of CloudFront for faster and more reliable content delivery. We can also deploy a Lambda@Edge function to modify the response headers and redirect the incoming requests to the appropriate target URL.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Switching to F: <br>Option F is also a valid solution to create an SSL certificate using AWS Certificate Manager (ACM) that includes the domains as Subject Alternative Names, allowing secure HTTPS connections.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 816297,
          "date": "Tue 21 Feb 2023 07:44",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Switching to F: <br>Option F is also a valid solution to create an SSL certificate using AWS Certificate Manager (ACM) that includes the domains as Subject Alternative Names, allowing secure HTTPS connections.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792938,
          "date": "Mon 30 Jan 2023 15:47",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "CEF are the answers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 759826,
          "date": "Wed 28 Dec 2022 13:47",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "CEF<br>The serverless architecture reduces operational overhead the most.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html<br>https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 744206,
          "date": "Tue 13 Dec 2022 16:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/69017-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that has multiple AWS accounts is using AWS Organizations. The company's AWS accounts host VPCs, Amazon EC2 instances, and containers.<br>The company's compliance team has deployed a security tool in each VPC where the company has deployments. The security tools run on EC2 instances and send information to the AWS account that is dedicated for the compliance team. The company has tagged all the compliance-related resources with a key of “costCenter” and a value or “compliance”.<br>The company wants to identify the cost of the security tools that are running on the EC2 instances so that the company can charge the compliance team's AWS account. The cost calculation must be as accurate as possible.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. In the management account of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Use the tag breakdown in the report to obtain the total cost for the costCenter tagged resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the member accounts of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Schedule a monthly AWS Lambda function to retrieve the reports and calculate the total cost for the costCenter tagged resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the member accounts of the organization activate the costCenter user-defined tag. From the management account, schedule a monthly AWS Cost and Usage Report. Use the tag breakdown in the report to calculate the total cost for the costCenter tagged resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom report in the organization view in AWS Trusted Advisor. Configure the report to generate a monthly billing summary for the costCenter tagged resources in the compliance team's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 759868,
          "date": "Wed 28 Dec 2022 14:13",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I vote A. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/configurecostallocreport.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 852820,
          "date": "Tue 28 Mar 2023 07:29",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Cost center tag int he management account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 832277,
          "date": "Tue 07 Mar 2023 21:32",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Management account for reports",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792940,
          "date": "Mon 30 Jan 2023 15:53",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Answer A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774816,
          "date": "Fri 13 Jan 2023 21:09",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Answer A : because we do not depend on the users, I prefer management account<br><br>Option C or A would be the correct answer. In option C, the solution architect would activate the costCenter user-defined tag in the member accounts of the organization, and then schedule a monthly AWS Cost and Usage Report from the management account to retrieve the reports and calculate the total cost for the costCenter tagged resources. In option A, the management account of the organization would activate the costCenter user-defined tag and configure monthly AWS Cost and Usage Reports to be saved to an Amazon S3 bucket in the management account. Then, use the tag breakdown in the report to obtain the total cost for the costCenter tagged resources. Both options would allow the company to accurately identify the cost of the security tools running on the EC2 instances and charge the compliance team's AWS account.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759369,
          "date": "Wed 28 Dec 2022 06:04",
          "username": "\t\t\t\tyimicc\t\t\t",
          "content": "Should be a C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Change to A, the activation of user tag for billing can only be done by management account</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759376,
          "date": "Wed 28 Dec 2022 06:07",
          "username": "\t\t\t\tyimicc\t\t\t",
          "content": "Change to A, the activation of user tag for billing can only be done by management account",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 751340,
          "date": "Tue 20 Dec 2022 19:34",
          "username": "\t\t\t\ttman22\t\t\t",
          "content": "A.  You want the cost information across all accounts - So you use the management account.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 744217,
          "date": "Tue 13 Dec 2022 16:40",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I want to answer C",
          "upvote_count": "1",
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
      "question_text": "<p>A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. From the management account, share the transit gateway with member accounts by using AWS Resource Access Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the management account, share the transit gateway with member accounts by using an AWS Organizations SCP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the management account by using the transit gateway ID. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the management account by using a transit gateway service-linked role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. From the management account, share the transit gateway with member accounts by using AWS Service Catalog.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852822,
          "date": "Tue 28 Mar 2023 07:32",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "AC are my choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 792941,
          "date": "Mon 30 Jan 2023 15:54",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "A and C are the answer for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 774821,
          "date": "Fri 13 Jan 2023 21:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is sharing the transit gateway with member accounts by using AWS Resource Access Manager, which allows the management account to share resources with member accounts. Option C is launching an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account, and associates the attachment with the transit gateway in the management account by using the transit gateway ID.  This automation of creating a new VPC and transit gateway attachment in new member accounts can help to streamline the process and reduce operational effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 760904,
          "date": "Thu 29 Dec 2022 11:51",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "A & C<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 744223,
          "date": "Tue 13 Dec 2022 16:43",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/60090-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team's policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS Marketplace to achieve this requirement. The procurement team wants administration of Private Marketplace to be restricted to a role named procurement-manager-role, which could be assumed by procurement managers. Other IAM users, groups, roles, and account administrators in the company should be denied Private Marketplace administrative access.<br>What is the MOST efficient way to design an architecture to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the PowerUserAccess managed policy to the role. Apply an inline policy to all IAM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the AdministratorAccess managed policy to the role. Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role named procurement-manager-role in all the shared services accounts in the organization. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role named procurement-manager-role in all AWS accounts that will be used by developers. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an SCP in Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Apply the SCP to all the shared services accounts in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852916,
          "date": "Tue 28 Mar 2023 09:10",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Create an IAM role named procurement-manager-role in all the shared services accounts in the organization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 821883,
          "date": "Sat 25 Feb 2023 23:52",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "Confirmed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792947,
          "date": "Mon 30 Jan 2023 16:00",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "should be C i guess",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 782128,
          "date": "Fri 20 Jan 2023 11:46",
          "username": "\t\t\t\task4cloud\t\t\t",
          "content": "This approach allows the procurement managers to assume the procurement-manager-role in shared services accounts, which have the AWSPrivateMarketplaceAdminFullAccess managed policy attached to it and can then manage the Private Marketplace. The organization root-level SCP denies the permission to administer Private Marketplace to everyone except the role named procurement-manager-role and another SCP denies the permission to create an IAM role named procurement-manager-role to everyone in the organization, ensuring that only the procurement team can assume the role and manage the Private Marketplace. This approach provides a centralized way to manage and restrict access to Private Marketplace while maintaining a high level of security.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774824,
          "date": "Fri 13 Jan 2023 21:21",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The most efficient way to design an architecture to meet these requirements is option C.  By creating an IAM role named procurement-manager-role in all the shared services accounts in the organization and adding the AWSPrivateMarketplaceAdminFullAccess managed policy to the role, the procurement managers will have the necessary permissions to administer Private Marketplace. Then, by creating an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role and another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization, the company can restrict access to Private Marketplace administrative access to only the procurement managers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744242,
          "date": "Tue 13 Dec 2022 16:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/28410-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is in the process of implementing AWS Organizations to constrain its developers to use only Amazon EC2, Amazon S3, and Amazon DynamoDB.  The developers account resides in a dedicated organizational unit (OU). The solutions architect has implemented the following SCP on the developers account:<br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-professional-sap-c02/image5.png\"><br>When this policy is deployed, IAM users in the developers account are still able to use AWS services that are not listed in the policy.<br>What should the solutions architect do to eliminate the developers' ability to use services outside the scope of this policy?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Create an explicit deny statement for each AWS service that should be constrained.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the FullAWSAccess SCP from the developers account's OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the FullAWSAccess SCP to explicitly deny all services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an explicit deny statement using a wildcard to the end of the SCP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852929,
          "date": "Tue 28 Mar 2023 09:13",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Remove the FullAWSAccess SCP from the developers account's OU",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828663,
          "date": "Sat 04 Mar 2023 05:12",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "An allow list strategy has you remove the FullAWSAccess SCP that is attached by default to every OU and account. This means that no APIs are permitted anywhere unless you explicitly allow them. To allow a service API to operate in an AWS account, you must create your own SCPs and attach them to the account and every OU above it, up to and including the root. Every SCP in the hierarchy, starting at the root, must explicitly allow the APIs that you want to be usable in the OUs and accounts below it<br><br>A deny list strategy makes use of the FullAWSAccess SCP that is attached by default to every OU and account. This SCP overrides the default implicit deny, and explicitly allows all permissions to flow down from the root to every account, unless you explicitly deny a permission with an additional SCP that you create and attach to the appropriate OU or account<br>If the developers can access other services it implies the \\\"Deny List Strategy\\\" henceFullAWSAccess is in place and should be removed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820230,
          "date": "Fri 24 Feb 2023 08:55",
          "username": "\t\t\t\tGabehcoud\t\t\t",
          "content": "the question doesn't state that there is another SCP applied to developers account. By choosing B, are we just assuming ? Why can't it be D?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 804546,
          "date": "Fri 10 Feb 2023 17:09",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I was confused at first but the intersection of sets here allowed me to understand the flow of SCPs from root to child OUs https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792917,
          "date": "Mon 30 Jan 2023 15:24",
          "username": "\t\t\t\tjooncco\t\t\t",
          "content": "B is correct.<br>By removing FullAWSAccess SCP, default deny will be applied.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780727,
          "date": "Thu 19 Jan 2023 05:35",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "B is correct<br>https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744248,
          "date": "Tue 13 Dec 2022 16:55",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46899-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742312,
          "date": "Mon 12 Dec 2022 02:51",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct because default FullAWSAccess SCP is applied",
          "upvote_count": "4",
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
      "question_text": "<p>A company is hosting a monolithic REST-based API for a mobile app on five Amazon EC2 instances in public subnets of a VPC.  Mobile clients connect to the API by using a domain name that is hosted on Amazon Route 53. The company has created a Route 53 multivalue answer routing policy with the IP addresses of all the EC2 instances. Recently, the app has been overwhelmed by large and sudden increases to traffic. The app has not been able to keep up with the traffic.<br>A solutions architect needs to implement a solution so that the app can handle the new and varying load.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) in front of the API. Move the EC2 instances to private subnets in the VPC.  Add the EC2 instances as targets for the ALB.  Update the Route 53 record to point to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 747081,
          "date": "Fri 16 Dec 2022 12:02",
          "username": "\t\t\t\tEricZhang\t\t\t",
          "content": "Serverless requires least operational effort.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How can this be the answer ?? It says: Separate the API into individual AWS Lambda functions. Can you calculate the operational overhead to do that?</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 822775,
          "date": "Sun 26 Feb 2023 19:00",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "How can this be the answer ?? It says: Separate the API into individual AWS Lambda functions. Can you calculate the operational overhead to do that?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 793547,
          "date": "Tue 31 Jan 2023 03:10",
          "username": "\t\t\t\tjooncco\t\t\t",
          "content": "Suppose there are a 100 REST APIs (Since this application is monolithic, it's quite common).<br>Are you still going to copy and paste all those API codes into lambda?<br>What if business logic changes?<br>This is not MINIMAL. I would go with C. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It says \\\"a monolithic REST-based API \\\" - hence only 1 API. Initially I thought C, but I'll go with A as it says least operation overhead (not least implementation effort). Lambda has virtually no operation overhead compared to EC2.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819817,
          "date": "Thu 23 Feb 2023 23:14",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "It says \\\"a monolithic REST-based API \\\" - hence only 1 API. Initially I thought C, but I'll go with A as it says least operation overhead (not least implementation effort). Lambda has virtually no operation overhead compared to EC2.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 852937,
          "date": "Tue 28 Mar 2023 09:19",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "I vote A - sep lambda functions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837581,
          "date": "Mon 13 Mar 2023 04:10",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/module-one/ and https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/serverless-microservices.html<br><br>Just saying, moving it to a microservice architecture not only makes sense but will remove a lot of operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830343,
          "date": "Sun 05 Mar 2023 22:29",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "This question is the mother of all tricky questions lol<br>The main issue of the current design is that R53 is used to distribute the load to the app. Which is a bad practice. This why i think ALB is the best solution here. Answer A is incorrect because a big refactor and this is the last think you want to think about !<br>Answer D solve only the Autoscaling, but miss the ALB and still use the R53 as a load balancer!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree, with u<br>Makes no sense refactor the APP not knowing details ( A &amp; B)<br>I dont see why to create a lambda to add and remove records to route 53 that could be cached as long as the duration of the TTL.( C )</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 831999,
          "date": "Tue 07 Mar 2023 15:28",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "Agree, with u<br>Makes no sense refactor the APP not knowing details ( A & B)<br>I dont see why to create a lambda to add and remove records to route 53 that could be cached as long as the duration of the TTL.( C )",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826432,
          "date": "Thu 02 Mar 2023 03:52",
          "username": "\t\t\t\tdoto\t\t\t",
          "content": "ccccccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 823847,
          "date": "Mon 27 Feb 2023 15:59",
          "username": "\t\t\t\t_lasco_\t\t\t",
          "content": "C is correct<br><br>A: may require a lot of effort in refactoring to lambda and different architecture<br>B: may require a lot of effort in refactoring to containers/kubernetes and different architecture <br>C: correct<br>D: would be great to have a load balancer but the solution does not involve autoscaling so by itself does not satisfy the increase in demand. Also moving instances to private subnet may be not viable, depending on the app behaviour.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 821887,
          "date": "Sun 26 Feb 2023 00:00",
          "username": "\t\t\t\tcudbyanc\t\t\t",
          "content": "Option A and B suggest re-architecting the application, which may require significant development work and operational overhead. Option C adds complexity by requiring an additional Lambda function to update the Route 53 record.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's correct, but unfortunately D is not scaleable as it's missing the ASG</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828455,
          "date": "Fri 03 Mar 2023 23:42",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "That's correct, but unfortunately D is not scaleable as it's missing the ASG",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821486,
          "date": "Sat 25 Feb 2023 13:58",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "Why do they give a question with a set of answers that are all bad given the scenario. <br>D: misses Autoscaler. It just does not do what the architect was asked to find a solution for.<br>C: it simply does not work: changing DNS need to take TTL into account... <br>B: adds overhead for Kubernetes. <br>A: works but is ridiculous expensive and comes with operational effort to maintain lambda.<br><br>So I guess the only possible option is A.  <br><br>Disclaimer: No one reasonable would use Lambda if it comes to high load. If the load justifies an EC2let alone 5 EC instances. EC2 is way to go. Autoscaler, Loadbalancer. This is simple and simple means less operational overhead while complexity means operational overhead: Lambda adds complexity and is expensive when it comes to load (one invocation: cheap but not massive number of invocations).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820059,
          "date": "Fri 24 Feb 2023 04:00",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "My Logical answer : After reading some discussion comments, my take - Least operation effort does not mean quick fix, its least work to maintain it. C is wrong , it seemed good reading first part but at the end it mentions wierd statement \\\"lambda updating Route53 all the time when it reacts ? why updating DNS service every time? \\\" D is not apt because, why would we put internet facing EC2 instances in private subnet? that adds additional overhead of maintaining NAT gateways /route tables etc. So serverless solution for least operational effort leaves A or B.  I feel B is over provisioning with ECS/EKS clustering because it looks like a low/medium scale app with just 5 ec2 instances. I'd go with A as best answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820056,
          "date": "Fri 24 Feb 2023 03:55",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "My Logical answer : After reading some discussion comments, my take - Least operation effort does not mean quick fix, its least work to maintain it. C is wrong , it seemed good reading first part but at the end it mentions wierd statement \\\"lambda updating Route53 all the time when it reacts ? why updating DNS service every time? \\\" D is not apt because, why would we put internet facing EC2 instances in private subnet? that adds additional overhead of maintaining NAT gateways /route tables etc. So serverless solution for least operational effort leaves A or B.  I feel B is over provisioning with ECS/EKS clustering because it looks like a low/medium scale app with just 5 ec2 instances. I'd go with A as best answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819391,
          "date": "Thu 23 Feb 2023 17:22",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "C based on minimal operational overhead<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Decided to update my answer to D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835351,
          "date": "Fri 10 Mar 2023 20:34",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Decided to update my answer to D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812355,
          "date": "Fri 17 Feb 2023 21:47",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "API Gateway is the option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 801587,
          "date": "Wed 08 Feb 2023 02:51",
          "username": "\t\t\t\ttinyflame\t\t\t",
          "content": "No C<br>Because max 8 EC2s on Route53 multivalue answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 799872,
          "date": "Mon 06 Feb 2023 15:59",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "I know this question is gonna be a controversial one. The real issue is what the mean of LEAST OPERATIONAL OVERHEAD means. It could mean the least amount of work to set up initially, in which case the answer is definitely C.  Converting a monolithic application to lambda is not a simple task.<br>But in operation overhead means how much work it would take to maintain, the answer is definitely A because serverless has a lot less effort once its operational. <br>Personally, I would go with A on this question. I've been taking these cert exams for a while now and I get a sense that AWS wants you to use serverless.<br>Additionally, not quite sure what it means in C to have the lambda update Route 53...",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798657,
          "date": "Sun 05 Feb 2023 07:57",
          "username": "\t\t\t\toatif\t\t\t",
          "content": "The answer is C, no idea, why ppl are voting for A.  C requires the minimum amount of effort.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>operational overhead means less effort in the long run, so i would change my answer to A. </li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 806905,
          "date": "Mon 13 Feb 2023 00:31",
          "username": "\t\t\t\toatif\t\t\t",
          "content": "operational overhead means less effort in the long run, so i would change my answer to A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792961,
          "date": "Mon 30 Jan 2023 16:11",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "why not C?",
          "upvote_count": "2",
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
      "question_text": "<p>A company has created an OU in AWS Organizations for each of its engineering teams. Each OU owns multiple AWS accounts. The organization has hundreds of AWS accounts.<br>A solutions architect must design a solution so that each OU can view a breakdown of usage costs across its AWS accounts.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
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
          "id": 852948,
          "date": "Tue 28 Mar 2023 09:26",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B.  Create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774832,
          "date": "Fri 13 Jan 2023 21:33",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B is the correct answer. The solution would be to create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. This would allow the management account to view the usage costs across all the member accounts, and the teams can visualize the CUR through an Amazon QuickSight dashboard. This allows the organization to have a centralized place to view the cost breakdown and the teams to access the cost breakdown in an easy way.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744252,
          "date": "Tue 13 Dec 2022 17:00",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/71951-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing data on premises on a Windows file server. The company produces 5&nbsp;GB of new data daily.<br>The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS.<br>Which data migration strategy should the company use?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852959,
          "date": "Tue 28 Mar 2023 09:31",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 840108,
          "date": "Wed 15 Mar 2023 18:27",
          "username": "\t\t\t\ttestingaws123\t\t\t",
          "content": "The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. <br>Here It is open to discussion. Do they want to migrate the entire data to the cloud or do they just want data to be available in the cloud.<br>It sound like data will sync to the cloud and remain active on prem. Which leads to option A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837587,
          "date": "Mon 13 Mar 2023 04:19",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/trnsfr-data-using-datasync.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 823860,
          "date": "Mon 27 Feb 2023 16:08",
          "username": "\t\t\t\t_lasco_\t\t\t",
          "content": "B<br>I was in doubt between B and D, but EFS does not support windows for mounting:<br>https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 804602,
          "date": "Fri 10 Feb 2023 18:23",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I am curious if Amazon FSx File Gateway from Azure Storage Gateway (https://aws.amazon.com/storagegateway/file/) can address this.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798665,
          "date": "Sun 05 Feb 2023 08:20",
          "username": "\t\t\t\toatif\t\t\t",
          "content": "My initial thought was A, but the solution requires data to be available in the cloud, not to replace a Windows File server with a Cloud-based sol'n-like storage gateway. So B is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correct, it says \\\"The company migrated part of its Windows-based workload to AWS\\\" so there is still some workload onpremise, this is not about data also workloads, so A is incorrect as smiply replacing the existing windows file server is not an option. Also DataSync work with Direct Connect which the company already uses further giving a hint to B</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847153,
          "date": "Wed 22 Mar 2023 15:31",
          "username": "\t\t\t\tvvahe\t\t\t",
          "content": "Correct, it says \\\"The company migrated part of its Windows-based workload to AWS\\\" so there is still some workload onpremise, this is not about data also workloads, so A is incorrect as smiply replacing the existing windows file server is not an option. Also DataSync work with Direct Connect which the company already uses further giving a hint to B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774833,
          "date": "Fri 13 Jan 2023 21:36",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.D.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS) are also valid options. They both use DataSync to schedule a daily task to replicate the data between on-premises and cloud, the main difference is the type of file system in the cloud, Amazon FSx or Amazon Elastic File System (Amazon EFS).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744255,
          "date": "Tue 13 Dec 2022 17:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/47620-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is reviewing a web application that runs on AWS. The application references static assets in an Amazon S3 bucket in the us-east-1 Region. The company needs resiliency across multiple AWS Regions. The company already has created an S3 bucket in a second Region.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A. Configure the application to write each object to both S3 buckets. Set up an Amazon Route 53 public hosted zone with a record set by using a weighted routing policy for each S3 bucket. Configure the application to reference the objects by using the Route 53 DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to copy objects from the S3 bucket in us-east-1 to the S3 bucket in the second Region. Invoke the Lambda function each time an object is written to the S3 bucket in us-east-1. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. If failover is required, update the application code to load S3 objects from the S3 bucket in the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852968,
          "date": "Tue 28 Mar 2023 09:39",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "S3 + Cloudfront",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 851750,
          "date": "Mon 27 Mar 2023 07:31",
          "username": "\t\t\t\tCloud_noob\t\t\t",
          "content": "you can configure Amazon CloudFront to use two different Amazon S3 buckets from different regions as the origin for your content.<br><br>To do this, you would need to create two separate Amazon S3 bucket origins in your CloudFront distribution settings, each one pointing to a different S3 bucket in a different region.<br><br>When creating the CloudFront distribution, you can add multiple origins to the distribution configuration. You can specify the origin domain name for each origin, which will correspond to the domain name of the S3 bucket you want to use as the origin.<br><br>You can also specify the origin protocol policy, which determines whether CloudFront uses HTTP or HTTPS to communicate with the origin.<br><br>Keep in mind that you will need to configure cross-region replication between the two S3 buckets in order to keep the content in both buckets synchronized. Additionally, you will need to make sure that both S3 buckets are publicly accessible or that CloudFront has the appropriate permissions to access the buckets.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793573,
          "date": "Tue 31 Jan 2023 03:55",
          "username": "\t\t\t\tjooncco\t\t\t",
          "content": "Modifying any existing application code IS a operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 782160,
          "date": "Fri 20 Jan 2023 12:17",
          "username": "\t\t\t\task4cloud\t\t\t",
          "content": "This solution will meet the requirements with the least operational overhead as it allows the company to use Amazon CloudFront to automatically distribute the static assets of the web application across multiple regions, and if the primary S3 bucket in us-east-1 becomes unavailable, CloudFront will automatically route the traffic to the secondary S3 bucket in the second region. This solution eliminates the need for additional Lambda function or updating the application code for failover.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774835,
          "date": "Fri 13 Jan 2023 21:37",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins. This option provides automatic replication of objects across the two S3 buckets, and CloudFront automatically routes requests to the nearest origin, providing low latency and high availability for the application. This solution requires minimal operational overhead to maintain as the replication and failover is handled automatically by S3 and CloudFront.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 766972,
          "date": "Thu 05 Jan 2023 20:09",
          "username": "\t\t\t\tVVish\t\t\t",
          "content": "C - LEAST operational overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759778,
          "date": "Wed 28 Dec 2022 13:00",
          "username": "\t\t\t\taimik\t\t\t",
          "content": "involves updating the application code to load S3 objects from the second region in case of a failover, which is not necessary if you are using CloudFront with an origin group as in option C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744348,
          "date": "Tue 13 Dec 2022 19:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Answer C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742310,
          "date": "Mon 12 Dec 2022 02:45",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a three-tier web application in an on-premises environment. Due to a recent surge in traffic that resulted in downtime and a significant financial impact, company management has ordered that the application be moved to AWS. The application is written in .NET and has a dependency on a MySQL database. A solutions architect must design a scalable and highly available solution to meet the demand of 200,000 daily users.<br>Which steps should the solutions architect take to design an appropriate solution?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A. Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MySQL Multi-AZ DB instance. The environment should launch a Network Load Balancer (NLB) in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company's domain to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two separate Regions with an Application Load Balancer (ALB) in each Region. Create a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a cross-Region read replica. Use Amazon Route 53 with a geoproximity routing policy to route traffic between the two Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon ECS cluster of Spot instances spanning three Availability Zones. The stack should launch an Amazon RDS MySQL DB instance with a Snapshot deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852975,
          "date": "Tue 28 Mar 2023 09:43",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 840361,
          "date": "Wed 15 Mar 2023 23:16",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B makes sense to me ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 837601,
          "date": "Mon 13 Mar 2023 04:39",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.concepts.design.html<br><br>AWS EB does support .NET and MySQL; the difference now is that it is not supported separate regions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812369,
          "date": "Fri 17 Feb 2023 21:56",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "ALB and Rou53 Alias",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792995,
          "date": "Mon 30 Jan 2023 16:44",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 786938,
          "date": "Tue 24 Jan 2023 21:35",
          "username": "\t\t\t\tlunt\t\t\t",
          "content": "Answer is A. B.  R53 alias record?C.  No requirement for multi-region. Just HA. D.  Spot instance not HA. A.  Yes. NLB fine, EC2 ASG fine, R53 alias to NLB EIP fine.<br>Question does not mention regions, NLB can work with websites - yes ALB is the better option but NLB works perfectly fine for HTTP/HTTPS traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774839,
          "date": "Fri 13 Jan 2023 21:42",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B is correct. The solution architect should use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. <br><br>This solution provides scalability and high availability for the web application by using an Application Load Balancer and an Auto Scaling group in multiple availability zones, which can automatically scale in and out based on traffic demand. The use of a Multi-AZ Amazon Aurora MySQL DB cluster provides high availability for the database layer and the Retain deletion policy ensures the data is retained even if the DB instance is deleted. Additionally, the use of Route 53 with an alias record ensures traffic is routed to the correct location.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744835,
          "date": "Wed 14 Dec 2022 08:44",
          "username": "\t\t\t\trobertohyena\t\t\t",
          "content": "Agree with B. <br>Not A: we will not use NLB for web app<br>Not C: Beanstalk is region service. It CANNOT \\\"automatically scaling web server environment that spans two separate Regions\\\"<br>Not D:spot instances cant meet 'highly available'<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's correct, option C is not a valid solution because AWS Elastic Beanstalk is a region-specific service, it cannot span multiple regions. Option B is a valid solution that uses CloudFormation to launch a stack with an Application Load Balancer in front of an Auto Scaling group, a Multi-AZ Aurora MySQL cluster and Route 53 to route traffic to the load balancer, it meets the requirements of scalability and high availability with a good performance and with less operational overhead.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774840,
          "date": "Fri 13 Jan 2023 21:44",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "That's correct, option C is not a valid solution because AWS Elastic Beanstalk is a region-specific service, it cannot span multiple regions. Option B is a valid solution that uses CloudFormation to launch a stack with an Application Load Balancer in front of an Auto Scaling group, a Multi-AZ Aurora MySQL cluster and Route 53 to route traffic to the load balancer, it meets the requirements of scalability and high availability with a good performance and with less operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744352,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "for me the answer is B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/28502-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744353,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/28502-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742305,
          "date": "Mon 12 Dec 2022 02:42",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "Answer is B.  <br>AC not correct because Beanstalk does not support .NET<br>D user spot instance that is not reliable<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Beanstalk does support .NET https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.container.console.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747094,
          "date": "Fri 16 Dec 2022 12:17",
          "username": "\t\t\t\tEricZhang\t\t\t",
          "content": "Beanstalk does support .NET https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.container.console.html",
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
      "question_text": "<p>A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts.<br>A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks. Trusted access has been enabled in Organizations.<br>What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?<br><br></p>",
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
              "choice": "<p>A. Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create stacks in the Organizations member accounts. Use self-service permissions. Set deployment options to deploy to an organization. Enable the CloudFormation StackSets automatic deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a stack set in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create stacks in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852978,
          "date": "Tue 28 Mar 2023 09:47",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Create a stack set in the Organizations management account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812373,
          "date": "Fri 17 Feb 2023 22:02",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Stack Set in Mgmt account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774843,
          "date": "Fri 13 Jan 2023 21:47",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The best solution is C, because it involves creating the stack set in the management account of the organization, which is the central point of control for all the member accounts. This allows the solutions architect to manage the deployment of the stack set across all member accounts from a single location. Service-managed permissions are used, which allows the CloudFormation service to deploy the stack set to all member accounts. The deployment options are set to deploy to the organization and automatic deployment is enabled, which ensures that the stack set is automatically deployed to all member accounts as soon as it is created in the management account.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744459,
          "date": "Tue 13 Dec 2022 21:56",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "I THINK I SHOULD BE A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744357,
          "date": "Tue 13 Dec 2022 19:26",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/47723-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its workloads from on premises to AWS. The workloads run on Linux and Windows. The company has a large on-premises infrastructure that consists of physical machines and VMs that host numerous applications.<br><br>The company must capture details about the system configuration, system performance, running processes, and network connections of its on-premises workloads. The company also must divide the on-premises applications into groups for AWS migrations. The company needs recommendations for Amazon EC2 instance types so that the company can run its workloads on AWS in the most cost-effective manner.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Assess the existing applications by installing AWS Application Discovery Agent on the physical machines and VMs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Assess the existing applications by installing AWS Systems Manager Agent on the physical machines and VMs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Group servers into applications for migration by using AWS Systems Manager Application Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Group servers into applications for migration by using AWS Migration Hub.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Generate recommended instance types and associated costs by using AWS Migration Hub.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Import data about server sizes into AWS Trusted Advisor. Follow the recommendations for cost optimization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 780551,
          "date": "Thu 19 Jan 2023 00:55",
          "username": "\t\t\t\tbititan\t\t\t",
          "content": "trusted advisor doesn't have option to upload data, so option F is irrelavent",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 855227,
          "date": "Thu 30 Mar 2023 04:56",
          "username": "\t\t\t\thgc2023\t\t\t",
          "content": "B is incorrect because the servers are on prem.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 840371,
          "date": "Wed 15 Mar 2023 23:33",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "ADE no doubts ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 821014,
          "date": "Sat 25 Feb 2023 00:13",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : Falls under the domain \\\"Accelerate Workload Migration and Modernization\\\"<br>promoting MigrationHub<br>Step 1 - Identify the apps<br>Step 2 - Group them<br>Step 3 - Before hand, find out what instance types would need to be in when <br>actual migration happens<br>https://d1.awsstatic.com/Product-Page-Diagram_AWS-Migration-Hub-Orchestrator%402x.0c34c9483d13ebd26cf9072193384a58531624f3.png<br>For OnPremises migrations, first phase is Discovery which can be done with<br>Discovery agent , A<br>https://d1.awsstatic.com/products/application-discovery-service/Product-Page-Diagram_AWS-Application-Discovery-Service%201.9d81c27f3de50349a9406b8def61b8eb914e2930.png<br><br>I wont go with Trusted Advisor although it advises how cost can be advised because-<br>This applies for already aws available environment. Here, about to get migrated into<br>AWS and Architects need to discover lot of info before hand to plan alot. So I choose E between E and F.  My answer - A,D,E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808615,
          "date": "Tue 14 Feb 2023 18:10",
          "username": "\t\t\t\taws0909\t\t\t",
          "content": "WhyOption C Group servers into applications for migration by using AWS Systems Manager Application Manager is incorrect?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS SSM Application Manager is used for existing resources deployed to AWS</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824773,
          "date": "Tue 28 Feb 2023 13:23",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "AWS SSM Application Manager is used for existing resources deployed to AWS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804736,
          "date": "Fri 10 Feb 2023 21:22",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "A is better than B. <br><br>> Agent-based discovery can be performed by deploying the AWS Application Discovery Agent on each of your VMs and physical servers. The agent installer is available for Windows and Linux operating systems. It collects static configuration data, detailed time-series system-performance information, inbound and outbound network connections, and processes that are running.<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 782366,
          "date": "Fri 20 Jan 2023 15:46",
          "username": "\t\t\t\tboomx\t\t\t",
          "content": "BDE.  Trusted Advisor is not for onprem assessments. Migration hub does EC2 ones",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778167,
          "date": "Mon 16 Jan 2023 20:39",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "ADE is my answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 774847,
          "date": "Fri 13 Jan 2023 21:58",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "in order to meet the requirements of capturing details about the system configuration, system performance, running processes, and network connections of on-premises workloads, the company should install the AWS Application Discovery Agent on the physical machines and VMs. This will allow the company to assess the existing applications and gather information about their system configurations, performance, and network connections.<br><br>To group servers into applications for migration, the company should use the AWS Migration Hub. This will allow the company to organize their servers and applications in a way that makes migration to AWS more manageable and efficient.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hey Maestro, appreciate your responses man..but you are wrong in this question. E is correct because this is for on premises requirement. F is correct in aws environment. ADE should be correct. I gave detailed logical answer as well if you are interested in other comments area</li><li>In order to generate recommended instance types and associated costs, the company should use AWS Trusted Advisor. Trusted Advisor can analyze the data collected by the Application Discovery Agent and provide recommendations for cost-optimized EC2 instances that will be suitable for the company's workloads. This will allow the company to run their workloads on AWS in the most cost-effective manner.<br><br>Option E, which involves generating recommended instance types and associated costs using AWS Migration Hub, is not the best choice for cost optimization, Trusted Advisor is a service that analyzes the resources in your AWS environment and provides recommendations to help you save money, improve system performance, or close security gaps.</li><li>I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 821019,
          "date": "Sat 25 Feb 2023 00:21",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Hey Maestro, appreciate your responses man..but you are wrong in this question. E is correct because this is for on premises requirement. F is correct in aws environment. ADE should be correct. I gave detailed logical answer as well if you are interested in other comments area",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774848,
          "date": "Fri 13 Jan 2023 21:59",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "In order to generate recommended instance types and associated costs, the company should use AWS Trusted Advisor. Trusted Advisor can analyze the data collected by the Application Discovery Agent and provide recommendations for cost-optimized EC2 instances that will be suitable for the company's workloads. This will allow the company to run their workloads on AWS in the most cost-effective manner.<br><br>Option E, which involves generating recommended instance types and associated costs using AWS Migration Hub, is not the best choice for cost optimization, Trusted Advisor is a service that analyzes the resources in your AWS environment and provides recommendations to help you save money, improve system performance, or close security gaps.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783136,
          "date": "Sat 21 Jan 2023 10:17",
          "username": "\t\t\t\tshputhan\t\t\t",
          "content": "I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html",
          "upvote_count": "6",
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
      "question_text": "<p>A company is hosting an image-processing service on AWS in a VPC.  The VPC extends across two Availability Zones. Each Availability Zone contains one public subnet and one private subnet.<br><br>The service runs on Amazon EC2 instances in the private subnets. An Application Load Balancer in the public subnets is in front of the service. The service needs to communicate with the internet and does so through two NAT gateways. The service uses Amazon S3 for image storage. The EC2 instances retrieve approximately 1 ТВ of data from an S3 bucket each day.<br><br>The company has promoted the service as highly secure. A solutions architect must reduce cloud expenditures as much as possible without compromising the service's security posture or increasing the time spent on ongoing operations.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. Replace the NAT gateways with NAT instances. In the VPC route table, create a route from the private subnets to the NAT instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the EC2 instances to the public subnets. Remove the NAT gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an S3 gateway VPC endpoint in the VPAttach an endpoint policy to the endpoint to allow the required actions on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach an Amazon Elastic File System (Amazon EFS) volume to the EC2 instances. Host the images on the EFS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852993,
          "date": "Tue 28 Mar 2023 10:06",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Set up an S3 gateway VPC endpoint",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 840379,
          "date": "Wed 15 Mar 2023 23:36",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C - easy one ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 821033,
          "date": "Sat 25 Feb 2023 00:54",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "The only reason for C is - Gateway endpoints are not Billed and so cost effective (https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3) If the question changes from single region to across region, the answer would be B (overhead of NAT gateways and traversing TBs of data across NAT is expensive) because gateway endpoints are region specific<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B wouldn't be highly secure and data transfer would also be slower</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 824194,
          "date": "Mon 27 Feb 2023 23:03",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "B wouldn't be highly secure and data transfer would also be slower",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793012,
          "date": "Mon 30 Jan 2023 17:02",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "C for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774854,
          "date": "Fri 13 Jan 2023 22:06",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Setting up an S3 gateway VPC endpoint in the VPC and attaching an endpoint policy to the endpoint will allow the EC2 instances to securely access the S3 bucket for image storage without the need for NAT gateways, reducing costs without compromising security or increasing ongoing operations. This option reduces the costs associated with the NAT gateways and allows for faster data retrieval from the S3 bucket as traffic does not have to go through the internet gateway.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently deployed an application on AWS. The application uses Amazon DynamoDB.  The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.<br><br>A solutions architect needs to implement a solution to minimize the cost of the table.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure on-demand capacity mode for the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure DynamoDB Accelerator (DAX) in front of the table. Reduce the provisioned read capacity to match the new peak load on the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure DynamoDB Accelerator (DAX) in front of the table. Configure on-demand capacity mode for the table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776630,
          "date": "Sun 15 Jan 2023 14:51",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct. On demand mode is for unknown load pattern, auto scaling is for know burst pattern",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 855230,
          "date": "Thu 30 Mar 2023 05:01",
          "username": "\t\t\t\thgc2023\t\t\t",
          "content": "read and write units are more expensive in on demand mode so I don't think D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 852997,
          "date": "Tue 28 Mar 2023 10:10",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Use AWS Application Auto Scaling makes the most sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 844830,
          "date": "Mon 20 Mar 2023 12:48",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "A for me, not B.  On-demand is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes, and when underprovisioned capacity would impact the user experience.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 840387,
          "date": "Wed 15 Mar 2023 23:45",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D - no doubts..<br>In addition to on-demand, DAX can reduce the Dynamodb cost up to 60%✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835355,
          "date": "Fri 10 Mar 2023 20:43",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "Will go with A in exam as peak load is known",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 832805,
          "date": "Wed 08 Mar 2023 11:13",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "tuning dynamo db is not sufficient, you also need to scale the applicaiton to meet peak loads",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830372,
          "date": "Sun 05 Mar 2023 23:13",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "Answer D makes sense. On-demand is the good option for infrequent access to dynamoDB. <br>A option requires a code refactoring",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 823827,
          "date": "Mon 27 Feb 2023 15:47",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "In this link https://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/ I found this: \\\"DynamoDB on-demand is useful if your application traffic is difficult to predict and control, your workload has large spikes of short duration, or if your average table utilization is well below the peak.\\\" I think this is very close to what we are looking for so maybe B. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Here, the traffic is predicted \\\"The peak load occurs once a week for a 4-hour period and is double the average load\\\". Hence, with AWS Autoscaling we can schedule the WCU scaling, which would be way cheaper than on-demand capacity.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 824798,
          "date": "Tue 28 Feb 2023 13:46",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "Here, the traffic is predicted \\\"The peak load occurs once a week for a 4-hour period and is double the average load\\\". Hence, with AWS Autoscaling we can schedule the WCU scaling, which would be way cheaper than on-demand capacity.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821062,
          "date": "Sat 25 Feb 2023 01:44",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "OnDemand when needed is good, but here, we know that only 4 hours is peak.<br>So better purchase the reserved RCUs/WCUs and on top of it enable auto scaling which<br>meets 4 hour high demand. DAX is a extreme performant cache cluster. <br>DAX is not ideal for write intensitive, that does not mean use DAX for reads. Look at where DAX does not fit -https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html<br>Here for reducing costs,A is correct. See here how provisoned reduce costs-<br>https://aws.amazon.com/dynamodb/pricing/?refid=ce6876ca-ceb9-46a2-adaa-d36fce8fbba7",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810227,
          "date": "Thu 16 Feb 2023 04:43",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "A.  Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.<br><br>Since the peak period is only 4 hours a week and the application load is close to the average load for the rest of the week, it is not cost-effective to configure on-demand capacity mode for the table. Instead, AWS Application Auto Scaling can be used to increase the RCUs and WCUs during the peak period to meet the increased demand, and then decrease them to match the average load for the rest of the week. Additionally, reserved capacity can be purchased to match the average load, further reducing costs. Using DynamoDB Accelerator (DAX) in front of the table does not directly address the issue of cost optimization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793015,
          "date": "Mon 30 Jan 2023 17:05",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "has nothing with DAX here.<br>between A and B==> A is the answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DAX is useful for read-intensive loads.</li><li>This, DAX is not an option, on demand isn't either, leaves A</li><li>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html#DAX.use-cases</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 804774,
          "date": "Fri 10 Feb 2023 21:35",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "DAX is useful for read-intensive loads.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This, DAX is not an option, on demand isn't either, leaves A</li><li>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html#DAX.use-cases</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 847166,
          "date": "Wed 22 Mar 2023 15:54",
          "username": "\t\t\t\tvvahe\t\t\t",
          "content": "This, DAX is not an option, on demand isn't either, leaves A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804775,
          "date": "Fri 10 Feb 2023 21:36",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html#DAX.use-cases",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 791391,
          "date": "Sun 29 Jan 2023 05:42",
          "username": "\t\t\t\tpravi1\t\t\t",
          "content": "A makes sense here. On-demand more costly compared to reserved ones.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786028,
          "date": "Tue 24 Jan 2023 02:19",
          "username": "\t\t\t\tDDONG\t\t\t",
          "content": "A SAPC01 #1005",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785162,
          "date": "Mon 23 Jan 2023 10:11",
          "username": "\t\t\t\tccort\t\t\t",
          "content": "A<br>on-demand prices can be 7 times higher, given the options it is better to have reserved WCU and RCU and auto scale in the given schedule",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774855,
          "date": "Fri 13 Jan 2023 22:09",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Configure on-demand capacity mode for the table. This solution will allow the table to automatically scale its capacity based on the actual usage, and will minimize the cost of the table as it will only pay for the capacity used during the peak load period, and not the entire week. Additionally, since the access pattern includes more writes than reads, on-demand capacity mode is a good fit as it is more cost-effective for write-heavy workloads.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D is a possible solution that could meet the requirements, as it leverages DynamoDB Accelerator (DAX) to improve the performance of read operations on the table and also configures on-demand capacity mode for the table which will minimize the cost as it only charges for the requests made to the table.<br><br>However, it's important to consider that DAX will add some costs to the solution, and it's not guaranteed that the on-demand capacity mode will be enough to handle the peak load, so it's important to monitor the table and make sure that the performance is meeting the expectations.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774856,
          "date": "Fri 13 Jan 2023 22:09",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option D is a possible solution that could meet the requirements, as it leverages DynamoDB Accelerator (DAX) to improve the performance of read operations on the table and also configures on-demand capacity mode for the table which will minimize the cost as it only charges for the requests made to the table.<br><br>However, it's important to consider that DAX will add some costs to the solution, and it's not guaranteed that the on-demand capacity mode will be enough to handle the peak load, so it's important to monitor the table and make sure that the performance is meeting the expectations.",
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
      "question_text": "<p>A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours.<br><br>What is the MOST cost-effective migration recommendation?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>A. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852999,
          "date": "Tue 28 Mar 2023 10:12",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "SQS and Auto Scaling",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840395,
          "date": "Wed 15 Mar 2023 23:57",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D - makes sense.. Lambda can't run more than 15m.<br>And Amazon MQ is only recommended when migrating existing message brokers that rely on compatibility with APIs such as JMS or protocols such as AMQP, MQTT, OpenWire, and STOMP.. in the question there is no mention for these services ..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 821178,
          "date": "Sat 25 Feb 2023 05:11",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "A and C are out because lambda does not support more than 15 min. B says, to create an EC2 for each new message which is certainly not cost effective and bad design as well. So answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810230,
          "date": "Thu 16 Feb 2023 04:52",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The most cost-effective migration recommendation to handle peak loads during business hours is to use Amazon SQS to create a queue, configure the existing web server to publish to the new queue, and use Amazon EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. The EC2 instances should be scaled based on the SQS queue length. Storing the processed files in an Amazon S3 bucket will help in reducing the storage cost. This approach is scalable and can handle peak loads during business hours, while still being cost-effective during non-business hours. Option A is also a possible solution, but using EC2 instances in an EC2 Auto Scaling group is a more scalable and cost-effective solution. Options B and C involve using Amazon EFS, which can be more expensive than Amazon S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 793019,
          "date": "Mon 30 Jan 2023 17:12",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 791753,
          "date": "Sun 29 Jan 2023 16:05",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Because A is not valid due to time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 791394,
          "date": "Sun 29 Jan 2023 05:43",
          "username": "\t\t\t\tpravi1\t\t\t",
          "content": "D will be correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776912,
          "date": "Sun 15 Jan 2023 19:14",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer would be option D. <br><br>This option suggests creating a queue using Amazon SQS, configuring the existing web server to publish to the new queue, and using EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. The EC2 instances can be scaled based on the SQS queue length, which ensures that the resources are available during peak usage times and reduces costs during non-peak times.<br><br>Option A is not correct because it suggests using AWS Lambda which has a maximum execution time of 15 minutes.<br>Option B is not correct because it suggests creating a new EC2 instance for each message in the queue, which is not cost-effective.<br>Option C is not correct because it suggests using Amazon EFS, which is not a suitable option for long-term storage of large files.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776636,
          "date": "Sun 15 Jan 2023 14:53",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "D is correct because it took 1 hour to process the file. Lambda only run 15 minutes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774859,
          "date": "Fri 13 Jan 2023 22:13",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.<br>This approach will be the most cost-effective as it uses serverless AWS Lambda to process the files, which only incurs charges while the function is running, and is therefore well suited for workloads with variable and unpredictable usage patterns. Additionally, using Amazon S3 for storage is a cost-effective option as it allows for the storage of large amounts of data at a low cost.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Although this answer is the most cost-effective, AWS Lambda only allows functions to run up to 15 minutes.</li><li>correct ans is D</li><li>You cannot use Lambda function since the question mentioned \\\"process time take up to 1 hour for processing\\\" Aws Lambda functions can run only 15 minutes per function.</li><li>https://www.examtopics.com/discussions/amazon/view/36333-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>you are right, I was wrong despite the fact that I already knew this question. sorry</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776918,
          "date": "Sun 15 Jan 2023 19:23",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "Although this answer is the most cost-effective, AWS Lambda only allows functions to run up to 15 minutes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>correct ans is D</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776921,
          "date": "Sun 15 Jan 2023 19:27",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "correct ans is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776207,
          "date": "Sun 15 Jan 2023 07:37",
          "username": "\t\t\t\tandctygr\t\t\t",
          "content": "You cannot use Lambda function since the question mentioned \\\"process time take up to 1 hour for processing\\\" Aws Lambda functions can run only 15 minutes per function.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/36333-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>you are right, I was wrong despite the fact that I already knew this question. sorry</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776879,
          "date": "Sun 15 Jan 2023 18:36",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/36333-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>you are right, I was wrong despite the fact that I already knew this question. sorry",
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
      "question_text": "<p>A company is using Amazon OpenSearch Service to analyze data. The company loads data into an OpenSearch Service cluster with 10 data nodes from an Amazon S3 bucket that uses S3 Standard storage. The data resides in the cluster for 1 month for read-only analysis. After 1 month, the company deletes the index that contains the data from the cluster. For compliance purposes, the company must retain a copy of all input data.<br><br>The company is concerned about ongoing costs and asks a solutions architect to recommend a new solution.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Replace all the data nodes with UltraWarm nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the number of data nodes in the cluster to 2 Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Transition the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Reduce the number of data nodes in the cluster to 2. Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Add cold storage nodes to the cluster Transition the indexes from UltraWarm to cold storage. Delete the input data from the S3 bucket after 1 month by using an S3 Lifecycle policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reduce the number of data nodes in the cluster to 2. Add instance-backed data nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 845307,
          "date": "Mon 20 Mar 2023 23:38",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "If you look at the IAM documentation here, you can see that the ec2:AuthorizeSecurityGroupIngress action doesn't have any conditions that would allow you to specify the ip addresses in the inbound/outbound rules.https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 840402,
          "date": "Thu 16 Mar 2023 00:14",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B - makes more sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 828687,
          "date": "Sat 04 Mar 2023 06:21",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "UltraWarm provides a cost-effective way to store large amounts of read-only data on Amazon OpenSearch Service. Standard data nodes use \\\"hot\\\" storage, which takes the form of instance stores or Amazon EBS volumes attached to each node. Hot storage provides the fastest possible performance for indexing and searching new data.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804820,
          "date": "Fri 10 Feb 2023 23:09",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I asked ChatGPT. Can I use all UltraWarm nodes in AWS OpenSearch instead of data nodes? :)<br><br>No, UltraWarm nodes in AWS OpenSearch are designed for storage and retrieval of infrequently accessed data, while data nodes are optimized for faster indexing and searching of data. While UltraWarm nodes can be used as a complement to data nodes, they are not a replacement for them.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This eliminates option A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821954,
          "date": "Sun 26 Feb 2023 01:40",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "This eliminates option A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791760,
          "date": "Sun 29 Jan 2023 16:12",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Option B is the most cost-effective solution that meets the requirements. Reducing the number of data nodes in the cluster and adding UltraWarm nodes will help to reduce the ongoing costs of running the OpenSearch Service cluster. Configuring the indexes to transition to UltraWarm when OpenSearch Service ingests the data will further reduce costs. Additionally, transitioning the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy will lower the storage costs of retaining the input data for compliance purposes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774862,
          "date": "Fri 13 Jan 2023 22:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B is the most cost-effective solution as it reduces the number of data nodes in the cluster to 2 and adds UltraWarm nodes to handle the expected capacity. By configuring the indexes to transition to UltraWarm when OpenSearch Service ingests the data, the company can take advantage of the lower storage costs of UltraWarm. Additionally, by transitioning the input data to S3 Glacier Deep Archive after 1 month using an S3 Lifecycle policy, the company can further reduce costs by using the lower storage costs of S3 Glacier Deep Archive for long-term data retention.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C can meet the requirements of reducing the number of data nodes in the cluster and using UltraWarm and cold storage nodes to handle the expected capacity and moving the data to lower cost storage after 1 month. However, it may not be the most cost-effective solution as it involves additional complexity in configuring the indexes to transition between different storage tiers, and may also require additional management and maintenance of the cold storage nodes. Option B, where the data is transitioned from S3 Standard to S3 Glacier Deep Archive using an S3 Lifecycle policy is simpler and more cost-effective as it eliminates the need for additional storage tiers and management.</li><li>B says to delete but question asks for saving on compliance purposes.</li><li>* I meant C says..</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774863,
          "date": "Fri 13 Jan 2023 22:17",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C can meet the requirements of reducing the number of data nodes in the cluster and using UltraWarm and cold storage nodes to handle the expected capacity and moving the data to lower cost storage after 1 month. However, it may not be the most cost-effective solution as it involves additional complexity in configuring the indexes to transition between different storage tiers, and may also require additional management and maintenance of the cold storage nodes. Option B, where the data is transitioned from S3 Standard to S3 Glacier Deep Archive using an S3 Lifecycle policy is simpler and more cost-effective as it eliminates the need for additional storage tiers and management.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B says to delete but question asks for saving on compliance purposes.</li><li>* I meant C says..</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 821204,
          "date": "Sat 25 Feb 2023 06:10",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "B says to delete but question asks for saving on compliance purposes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>* I meant C says..</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821205,
          "date": "Sat 25 Feb 2023 06:10",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "* I meant C says..",
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
      "question_text": "<p>A company has 10 accounts that are part of an organization in AWS Organizations. AWS Config is configured in each account. All accounts belong to either the Prod OU or the NonProd OU.<br><br>The company has set up an Amazon EventBridge rule in each AWS account to notify an Amazon Simple Notification Service (Amazon SNS) topic when an Amazon EC2 security group inbound rule is created with 0.0.0.0/0 as the source. The company's security team is subscribed to the SNS topic.<br><br>For all accounts in the NonProd OU, the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source.<br><br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A. Modify the EventBridge rule to invoke an AWS Lambda function to remove the security group inbound rule and to publish to the SNS topic. Deploy the updated rule to the NonProd OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the vpc-sg-open-only-to-authorized-ports AWS Config managed rule to the NonProd OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an SCP to allow the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. Apply the SCP to the NonProd OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. Apply the SCP to the NonProd OU.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774865,
          "date": "Fri 13 Jan 2023 22:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The solution that meets this requirement with the LEAST operational overhead is D.  Configuring an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0, and applying the SCP to the NonProd OU. This solution would prevent the security group inbound rule from being created in the first place and will not require any additional steps or actions to be taken in order to remove the rule. This is less operationally intensive than modifying the EventBridge rule to invoke an AWS Lambda function, adding a Config rule or allowing the ec2:AuthorizeSecurityGroupIngress action with a specific IP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C does not meet the requirement that the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source. It only allows the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. It does not prevent the creation of a security group inbound rule that includes 0.0.0.0/0 as the source, it only allows for the ingress action on non-0.0.0.0/0 IPs.<br>Option D is the best solution as it denies the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. This will prevent the creation of any security group inbound rule that includes 0.0.0.0/0 as the source.</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774866,
          "date": "Fri 13 Jan 2023 22:21",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C does not meet the requirement that the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source. It only allows the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. It does not prevent the creation of a security group inbound rule that includes 0.0.0.0/0 as the source, it only allows for the ingress action on non-0.0.0.0/0 IPs.<br>Option D is the best solution as it denies the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. This will prevent the creation of any security group inbound rule that includes 0.0.0.0/0 as the source.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 849321,
          "date": "Fri 24 Mar 2023 14:36",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "As Damijo said from the docs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 847484,
          "date": "Wed 22 Mar 2023 21:20",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "The \\\"aws:SourceIp\\\" is used for restrict access to AWS from user which have specific IP specified in aws:SourceIp.<br>This is not a condition for source ip in a SG<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So it cannot be D for sure</li><li>C is not true for the same (and say allow...)<br>B is not true because it's partial, the rule will be flag as NON COMPLIANT but will not be delete without using System Manager automation document<br>A is true and does not add a lot of operational overhead because there is already an eventbridge rule for that</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 847487,
          "date": "Wed 22 Mar 2023 21:22",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "So it cannot be D for sure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is not true for the same (and say allow...)<br>B is not true because it's partial, the rule will be flag as NON COMPLIANT but will not be delete without using System Manager automation document<br>A is true and does not add a lot of operational overhead because there is already an eventbridge rule for that</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 847498,
          "date": "Wed 22 Mar 2023 21:31",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "C is not true for the same (and say allow...)<br>B is not true because it's partial, the rule will be flag as NON COMPLIANT but will not be delete without using System Manager automation document<br>A is true and does not add a lot of operational overhead because there is already an eventbridge rule for that",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 845310,
          "date": "Mon 20 Mar 2023 23:39",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "If you look at the IAM documentation here, you can see that the ec2:AuthorizeSecurityGroupIngress action doesn't have any conditions that would allow you to specify the ip addresses in the inbound/outbound rules.https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 845103,
          "date": "Mon 20 Mar 2023 18:21",
          "username": "\t\t\t\tramyaram\t\t\t",
          "content": "D would be the best option to meet operational overhead requirement",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840638,
          "date": "Thu 16 Mar 2023 08:33",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840408,
          "date": "Thu 16 Mar 2023 00:28",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D is the LEAST operational overhead solution<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing my answer to A<br>Well.. after investigating I found out that it's not possible to prevent security changes with SCP</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840417,
          "date": "Thu 16 Mar 2023 00:51",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "Changing my answer to A<br>Well.. after investigating I found out that it's not possible to prevent security changes with SCP",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 838514,
          "date": "Tue 14 Mar 2023 03:52",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "C and D are out; for security groups you cannot do a deny, only allow so D is out and C is out because you cant do a \\\"is not\\\" since that is still a deny - https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html<br>B.  out because that AWS Config managed rule is detective only, not proactive, go ahead and review the list for different evaluation modes: https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-evaluation-mode.html<br><br>This is a legit \\\"trick\\\" question, you have to modify the rule to invoke an AWS Lambda to always remove it. All the other stuff in this statement is to through you off - you must use EventBridge to create a rule.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 833291,
          "date": "Wed 08 Mar 2023 20:02",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "D meets the requirements<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>later I found that SourceIP is the IP address of a requester. So D isn't correct !!!</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837090,
          "date": "Sun 12 Mar 2023 15:05",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "later I found that SourceIP is the IP address of a requester. So D isn't correct !!!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 832813,
          "date": "Wed 08 Mar 2023 11:23",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "creating a lambda and removing it seems weird and definatly lot of operation overhead. will go with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 825215,
          "date": "Tue 28 Feb 2023 20:42",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/how-to-automatically-revert-and-receive-notifications-about-changes-to-your-amazon-vpc-security-groups/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825208,
          "date": "Tue 28 Feb 2023 20:34",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "I don't understand people that says D, can you tell me what is the differences between C and D?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822938,
          "date": "Sun 26 Feb 2023 21:35",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "Answer should be B;<br>The solution that will meet the requirement with the LEAST operational overhead is option B: Add the vpc-sg-open-only-to-authorized-ports AWS Config managed rule to the NonProd OU.<br><br>This option is the least operational overhead because it utilizes an existing AWS Config managed rule, which means that there is no need to create or deploy any new resources or code. The vpc-sg-open-only-to-authorized-ports rule will automatically evaluate all security groups in the NonProd OU and report any that allow inbound traffic from 0.0.0.0/0. This rule will also allow security groups to be created or updated with any other source IP address.<br><br>Option A requires the creation and deployment of a Lambda function, which will require additional operational overhead. Option C requires the configuration of an SCP, which can be complex and may cause unintended consequences if not configured properly. Option D is similar to Option C but uses a deny policy instead of an allow policy, which can be more difficult to manage and troubleshoot.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Here is the link:<br>https://docs.aws.amazon.com/config/latest/developerguide/vpc-sg-open-only-to-authorized-ports.html</li><li>But does it act upon it or just marked as non-compliance?</li><li>Even if it acts upon it and deletes the rule it didn't stop developers to create the rule in the first place, hence doesn't meet the criteria</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 822943,
          "date": "Sun 26 Feb 2023 21:39",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "Here is the link:<br>https://docs.aws.amazon.com/config/latest/developerguide/vpc-sg-open-only-to-authorized-ports.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But does it act upon it or just marked as non-compliance?</li><li>Even if it acts upon it and deletes the rule it didn't stop developers to create the rule in the first place, hence doesn't meet the criteria</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823843,
          "date": "Mon 27 Feb 2023 15:58",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "But does it act upon it or just marked as non-compliance?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Even if it acts upon it and deletes the rule it didn't stop developers to create the rule in the first place, hence doesn't meet the criteria</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 824209,
          "date": "Mon 27 Feb 2023 23:41",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "Even if it acts upon it and deletes the rule it didn't stop developers to create the rule in the first place, hence doesn't meet the criteria",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 821220,
          "date": "Sat 25 Feb 2023 06:47",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "D is correct. Refer SCP usage strategies- https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html<br>In AWS Organizations, FullAWSAccess SCP is by default added and applied to all OUs/member accounts.So, an allow is already there, so we just need to add a deny and apply to NonProd OU<br>For C to be answer, we need to do additional step of adding deny rule for all OUs and member accounts which is tedious and against least operational overhead. that is the whole reason FullAWSAccess isadded by default on AWS Organizations.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820535,
          "date": "Fri 24 Feb 2023 14:54",
          "username": "\t\t\t\tNidjo\t\t\t",
          "content": "Answer is A, the conditions aws:SourceIP don't exist for this API call.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820319,
          "date": "Fri 24 Feb 2023 11:00",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "option D as it has least operational overhead",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816972,
          "date": "Tue 21 Feb 2023 19:11",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "D.  Configure an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. Apply the SCP to the NonProd OU.<br><br>This solution leverages AWS Organizations' Service Control Policies (SCPs) to deny the ec2:AuthorizeSecurityGroupIngress action when the source IP is 0.0.0.0/0. This means that any attempt to create a security group inbound rule with that source IP will be blocked at the organizational level, without the need for any additional resources or configurations in individual accounts. This approach has the least operational overhead as it requires only the configuration of an SCP in the NonProd OU, which can be easily managed and updated.",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts a Git repository in an on-premises data center. The company uses webhooks to invoke functionality that runs in the AWS Cloud. The company hosts the webhook logic on a set of Amazon EC2 instances in an Auto Scaling group that the company set as a target for an Application Load Balancer (ALB). The Git server calls the ALB for the configured webhooks. The company wants to move the solution to a serverless architecture.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. For each webhook, create and configure an AWS Lambda function URL. Update the Git servers to call the individual Lambda function URLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API. Implement each webhook logic in a separate AWS Lambda function. Update the Git servers to call the API Gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the webhook logic to AWS App Runner. Create an ALB, and set App Runner as the target. Update the Git servers to call the ALB endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Containerize the webhook logic. Create an Amazon Elastic Container Service (Amazon ECS) cluster, and run the webhook logic in AWS Fargate. Create an Amazon API Gateway REST API, and set Fargate as the target. Update the Git servers to call the API Gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774868,
          "date": "Fri 13 Jan 2023 22:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Create an Amazon API Gateway HTTP API. Implement each webhook logic in a separate AWS Lambda function. Update the Git servers to call the API Gateway endpoint. This solution will provide low operational overhead as it utilizes the serverless capabilities of AWS Lambda and API Gateway, which automatically scales and manages the underlying infrastructure and resources. It also allows for the webhook logic to be easily managed and updated through the API Gateway interface.<br><br>The answer should be B because it is the best solution in terms of operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A would require updating the Git servers to call individual Lambda function URLs for each webhook, which would be more complex and time-consuming than calling a single API Gateway endpoint. <br><br>Option C would require deploying the webhook logic to AWS App Runner, which would also be more complex and time-consuming than using an API Gateway. <br><br>Option D would also require containerizing the webhook logic and creating an ECS cluster and Fargate, which would also add complexity and operational overhead compared to using an API Gateway.</li><li>I do agree with B.  <br><br>However on Git server side it does make no difference if one calls aws or do a rest call via gateway. <br>Eg. if you use Python it makes no difference if you use boto(call Lambda) or request(rest api) module.<br>If one implemets via shell it makes no difference if one uses aws-cli(invoke Lambda directly) or curl(do a rest call).<br>Similar for other implementations.</li><li>As addition why B is still better: it hides the implementation details and decouples by introducing a interface.<br>With that a team for Aws may change what ever it needs to change to implement the interface. On the other hand on git side can use whatever deems necessary without caring about implementation details.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774869,
          "date": "Fri 13 Jan 2023 22:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A would require updating the Git servers to call individual Lambda function URLs for each webhook, which would be more complex and time-consuming than calling a single API Gateway endpoint. <br><br>Option C would require deploying the webhook logic to AWS App Runner, which would also be more complex and time-consuming than using an API Gateway. <br><br>Option D would also require containerizing the webhook logic and creating an ECS cluster and Fargate, which would also add complexity and operational overhead compared to using an API Gateway.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I do agree with B.  <br><br>However on Git server side it does make no difference if one calls aws or do a rest call via gateway. <br>Eg. if you use Python it makes no difference if you use boto(call Lambda) or request(rest api) module.<br>If one implemets via shell it makes no difference if one uses aws-cli(invoke Lambda directly) or curl(do a rest call).<br>Similar for other implementations.</li><li>As addition why B is still better: it hides the implementation details and decouples by introducing a interface.<br>With that a team for Aws may change what ever it needs to change to implement the interface. On the other hand on git side can use whatever deems necessary without caring about implementation details.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 821979,
          "date": "Sun 26 Feb 2023 02:43",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "I do agree with B.  <br><br>However on Git server side it does make no difference if one calls aws or do a rest call via gateway. <br>Eg. if you use Python it makes no difference if you use boto(call Lambda) or request(rest api) module.<br>If one implemets via shell it makes no difference if one uses aws-cli(invoke Lambda directly) or curl(do a rest call).<br>Similar for other implementations.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As addition why B is still better: it hides the implementation details and decouples by introducing a interface.<br>With that a team for Aws may change what ever it needs to change to implement the interface. On the other hand on git side can use whatever deems necessary without caring about implementation details.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821991,
          "date": "Sun 26 Feb 2023 02:50",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "As addition why B is still better: it hides the implementation details and decouples by introducing a interface.<br>With that a team for Aws may change what ever it needs to change to implement the interface. On the other hand on git side can use whatever deems necessary without caring about implementation details.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 840428,
          "date": "Thu 16 Mar 2023 01:05",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B makes sense ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 804868,
          "date": "Sat 11 Feb 2023 00:43",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "Here's what ChatGPT has to say.<br>In general, if you're looking for the option with the least operational overhead and you're comfortable with a fully managed, serverless environment, then AWS Lambda with API Gateway may be the better choice. However, if you require more control over your environment or need to use containers, then AWS App Runner with ALB may be the better option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790702,
          "date": "Sat 28 Jan 2023 16:13",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://aws.amazon.com/solutions/implementations/git-to-s3-using-webhooks/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780947,
          "date": "Thu 19 Jan 2023 10:15",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "Api Gateway with Lambda<br>https://medium.com/mindorks/building-webhook-is-easy-using-aws-lambda-and-api-gateway-56f5e5c3a596",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate 1,000 on-premises servers to AWS. The servers run on several VMware clusters in the company's data center. As part of the migration plan, the company wants to gather server metrics such as CPU details, RAM usage, operating system information, and running processes. The company then wants to query and analyze the data.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 779246,
          "date": "Tue 17 Jan 2023 20:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D: Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3.<br><br>Here is why the other choices are not correct:<br>A.  Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select. - AWS Agentless Discovery Connector will help in discovering and inventory servers but it does not provide the same level of detailed metrics as the AWS Application Discovery Agent, it also does not cover process information.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B.  Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight. - It does not cover process information and it's not the best way to collect the required data, it's not efficient and it might miss some important information.<br>C.  Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console. - this solution might not be very reliable and it does not cover process information, also it does not provide a way to query and analyze the data.</li><li>D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779247,
          "date": "Tue 17 Jan 2023 20:13",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight. - It does not cover process information and it's not the best way to collect the required data, it's not efficient and it might miss some important information.<br>C.  Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console. - this solution might not be very reliable and it does not cover process information, also it does not provide a way to query and analyze the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779248,
          "date": "Tue 17 Jan 2023 20:13",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 853131,
          "date": "Tue 28 Mar 2023 12:58",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "D is the answer because agentless cant grab everything",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840437,
          "date": "Thu 16 Mar 2023 01:26",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A is wrong.. because Agentless can't collect processes .. only CPU/RAM and disk IO",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828871,
          "date": "Sat 04 Mar 2023 12:51",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "If you have virtual machines (VMs) that are running in the VMware vCenter environment, you can use the Agentless Collector to collect system information without having to install an agent on each VM. Instead, you load this on-premises appliance into vCenter and allow it to discover all of its hosts and VMs.<br><br>Agentless Collector captures system performance information and resource utilization for each VM running in the vCenter, regardless of what operating system is in use. However, it cannot “look inside” each of the VMs, and as such, cannot figure out what processes are running on each VM nor what network connections exist.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Going with D; Agentless discovery Connector does not gather process information; \\\"THE\\\" on premises HOSTs(physical servers?) will be running on esxi server.<br>You can deploy Discovery agent on Server(VM) . I might be overthinking it.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828891,
          "date": "Sat 04 Mar 2023 13:04",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Going with D; Agentless discovery Connector does not gather process information; \\\"THE\\\" on premises HOSTs(physical servers?) will be running on esxi server.<br>You can deploy Discovery agent on Server(VM) . I might be overthinking it.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824823,
          "date": "Tue 28 Feb 2023 14:13",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "With the agentless collector you cannot get running processes on the VMs, and you cannot export the data to CSV or to Athena for further querying",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 821596,
          "date": "Sat 25 Feb 2023 16:36",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Even though question does not ask for least operational effort, performance, HA etc, the solution needs to be thinking those in mind. deploying on each server is not practically good solution. So D cannot be answer. Instead, an appliance which does this discovery job is good which is right there in A.  Moreover A is exclusively for VMWare use case. I choose A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819077,
          "date": "Thu 23 Feb 2023 11:40",
          "username": "\t\t\t\tmonkeyfish\t\t\t",
          "content": "Answer is A. <br>The AWS Agentless Discovery Connector is used when performing migration of servers in vmware clusters. S3 Select can be used to query.<br>AWS SA's would only recommend installing the agent on each on-prem server for physical hosts, not vmware server.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 Select supports querying one file at a time. With Amazon Athena, you can perform SQL against any number of objects, or even entire bucket paths.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819902,
          "date": "Fri 24 Feb 2023 00:45",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "S3 Select supports querying one file at a time. With Amazon Athena, you can perform SQL against any number of objects, or even entire bucket paths.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 791396,
          "date": "Sun 29 Jan 2023 05:46",
          "username": "\t\t\t\tpravi1\t\t\t",
          "content": "D will be correct in my opinion.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 779995,
          "date": "Wed 18 Jan 2023 13:44",
          "username": "\t\t\t\ticassp\t\t\t",
          "content": "Choosing between A and D.  For A, how can S3 select query?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think A is a better solution because the Agentless discovery connector is custom-made for the VMware environment. It will save us time and collect all the necessary data we need. Installing a Discovery agent in every server would be very time-consuming. S3 select allows simple select operations against your raw data. I don't think we need athena for</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 798538,
          "date": "Sun 05 Feb 2023 02:24",
          "username": "\t\t\t\toatif\t\t\t",
          "content": "I think A is a better solution because the Agentless discovery connector is custom-made for the VMware environment. It will save us time and collect all the necessary data we need. Installing a Discovery agent in every server would be very time-consuming. S3 select allows simple select operations against your raw data. I don't think we need athena for",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778768,
          "date": "Tue 17 Jan 2023 11:00",
          "username": "\t\t\t\tsilkroad78\t\t\t",
          "content": "D Since Agentless Collector can't collect process https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are correct, AWS Agentless Discovery does not collect information about processes running on the servers. It primarily focuses on gathering information about the server's hardware, operating system, and network configuration. It is mainly used to discover and inventory servers, but it doesn't provide the same level of detailed metrics as the AWS Application Discovery Agent. The AWS Application Discovery Agent is the best option if the company wants to gather information about running processes on the servers, as it can provide more detailed metrics than Agentless Discovery.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 779244,
          "date": "Tue 17 Jan 2023 20:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "You are correct, AWS Agentless Discovery does not collect information about processes running on the servers. It primarily focuses on gathering information about the server's hardware, operating system, and network configuration. It is mainly used to discover and inventory servers, but it doesn't provide the same level of detailed metrics as the AWS Application Discovery Agent. The AWS Application Discovery Agent is the best option if the company wants to gather information about running processes on the servers, as it can provide more detailed metrics than Agentless Discovery.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774871,
          "date": "Fri 13 Jan 2023 22:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct solution is A.  Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select.<br><br>This solution allows the company to gather detailed server metrics from the on-premises hosts by deploying the Agentless Discovery Connector virtual appliance. The data can then be imported into AWS Migration Hub for further analysis. The company can then use AWS Glue to perform an ETL job on the data and query it using Amazon S3 Select for further analysis.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a serverless application that runs on an AWS Lambda function that is attached to a VPC.  The company needs to integrate the application with a new service from an external provider. The external provider supports only requests that come from public IPv4 addresses that are in an allow list.<br><br>The company must provide a single public IP address to the external provider before the application can start using the new service.<br><br>Which solution will give the application the ability to access the new service?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an egress-only internet gateway. Associate an Elastic IP address with the egress-only internet gateway. Configure the elastic network interface on the Lambda function to use the egress-only internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the Lambda function to use the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the default route in the public VPC route table to use the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774872,
          "date": "Fri 13 Jan 2023 22:26",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.<br><br>This solution will give the Lambda function access to the internet by routing its outbound traffic through the NAT gateway, which has a public Elastic IP address. This will allow the external provider to whitelist the single public IP address associated with the NAT gateway, and enable the application to access the new service.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 853133,
          "date": "Tue 28 Mar 2023 13:00",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 847201,
          "date": "Wed 22 Mar 2023 16:25",
          "username": "\t\t\t\tvvahe\t\t\t",
          "content": "A<br><br>https://docs.aws.amazon.com/lambda/latest/operatorguide/networking-vpc.html<br><br>\\\"By default, Lambda functions have access to the public internet. This is not the case after they have been configured with access to one of your VPCs. If you continue to need access to resources on the internet, set up a NAT instance or Amazon NAT Gateway. Alternatively, you can also use VPC endpoints to enable private communications between your VPC and supported AWS services.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 840441,
          "date": "Thu 16 Mar 2023 01:34",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "NAT gateway is needed✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 833642,
          "date": "Thu 09 Mar 2023 07:22",
          "username": "\t\t\t\tmacc183\t\t\t",
          "content": "why D is incorrect? I guess IGW also has public IP address?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>IGW cannot have an EIP</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834670,
          "date": "Fri 10 Mar 2023 06:56",
          "username": "\t\t\t\tdoto\t\t\t",
          "content": "IGW cannot have an EIP",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828896,
          "date": "Sat 04 Mar 2023 13:08",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Easy \\\"A\\\".<br>B is wrong; Egress is a VPC component that allows outbound communication over IPv6 . C and D are wrong",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 810242,
          "date": "Thu 16 Feb 2023 05:13",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "A.  Deploying a NAT gateway is the best solution for this scenario. Since the external provider supports only public IPv4 addresses, the Lambda function can be configured with a private IP address in the VPC.  A NAT gateway is used to provide a public IP address to the Lambda function when it accesses the external provider's service. This allows the Lambda function to access the new service while also securing it within the VPC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793162,
          "date": "Mon 30 Jan 2023 19:18",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 788998,
          "date": "Thu 26 Jan 2023 19:32",
          "username": "\t\t\t\tMasterP007\t\t\t",
          "content": "Option -B is incorrect, cause that's more for IPv6 use-case.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has developed a web application that uses an Amazon API Gateway Regional endpoint and an AWS Lambda function. The consumers of the web application are all close to the AWS Region where the application will be deployed. The Lambda function only queries an Amazon Aurora MySQL database. The solutions architect has configured the database to have three read replicas.<br><br>During testing, the application does not meet performance requirements. Under high load, the application opens a large number of database connections. The solutions architect must improve the application's performance.<br><br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Use the cluster endpoint of the Aurora database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Lambda Provisioned Concurrency feature.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the code for opening the database connection in the Lambda function outside of the event handler.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Change the API Gateway endpoint to an edge-optimized endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 774876,
          "date": "Fri 13 Jan 2023 22:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B and D. <br>B.  Using RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database can help improve the performance of the application by reducing the number of connections opened to the database. RDS Proxy manages the connection pool and routes incoming connections to the available read replicas, which can help with connection management and reduce the number of connections that need to be opened and closed.<br>D.  Moving the code for opening the database connection in the Lambda function outside of the event handler can help to improve the performance of the application by allowing the database connection to be reused across multiple requests. This avoids the need to open and close a new connection for each request, which can be time-consuming and resource-intensive.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A.  Using the cluster endpoint of the Aurora database instead of the reader endpoint would not help improve performance in this case, because the solution architect is already using read replicas to offload read traffic from the primary instance.<br>C.  Using the Lambda Provisioned Concurrency feature would not help improve performance in this case, as the problem is related to the number of connections to the database, not the number of instances running the Lambda function.<br>E.  Changing the API Gateway endpoint to an edge-optimized endpoint would not help improve performance in this case, as the problem is related to the number of connections to the database, not the location of the API Gateway endpoint.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 774877,
          "date": "Fri 13 Jan 2023 22:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Using the cluster endpoint of the Aurora database instead of the reader endpoint would not help improve performance in this case, because the solution architect is already using read replicas to offload read traffic from the primary instance.<br>C.  Using the Lambda Provisioned Concurrency feature would not help improve performance in this case, as the problem is related to the number of connections to the database, not the number of instances running the Lambda function.<br>E.  Changing the API Gateway endpoint to an edge-optimized endpoint would not help improve performance in this case, as the problem is related to the number of connections to the database, not the location of the API Gateway endpoint.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 853138,
          "date": "Tue 28 Mar 2023 13:02",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "RDS proxy + Lambda function",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 840446,
          "date": "Thu 16 Mar 2023 01:51",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "RDX proxy & connecting outside the handler method is up to 5 times faster than connecting inside.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 832831,
          "date": "Wed 08 Mar 2023 11:43",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "he Lambda function only queries an Amazon Aurora MySQL database- so i would reject option C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 821649,
          "date": "Sat 25 Feb 2023 17:35",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "This may be too logical answer :-) - Setting up RDS proxy will help connection pooling, So B is one answer. Now C vs D<br>This question focuses on serverless solutions and best practices of lambda. and question hints that lambda only contains simple code.so lambda concurrency improvements may not be be the cause for performance issues detected while testing, and guess what - app is still in testing phase. so code might have a flaw can be reviewed and changed as per lambda best practices - https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html. I choose B and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804873,
          "date": "Sat 11 Feb 2023 01:10",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "According to ChatGPT,<br>By reusing the same database connection across multiple invocations of the function, you can reduce the number of database connections that are opened and closed, which can help conserve resources and reduce the risk of running into database connection limits.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 798563,
          "date": "Sun 05 Feb 2023 03:29",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "BD<br>https://awstut.com/en/2022/04/30/connect-to-rds-outside-of-lambda-handler-method-to-improve-performance-en/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 782532,
          "date": "Fri 20 Jan 2023 17:57",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "B/C<br>lambda provisioned concurrency and RDS proxy are mentioned in same page.<br>https://quintagroup.com/blog/aws-lambda-provisioned-concurrency",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781929,
          "date": "Fri 20 Jan 2023 07:34",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.howitworks.html<br>https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 779429,
          "date": "Wed 18 Jan 2023 01:39",
          "username": "\t\t\t\tjhonivy\t\t\t",
          "content": "B/C<br>Provisioned Concurrency needed: https://www.reddit.com/r/aws/comments/gcwtqt/lambda_provisioned_concurrency_with_aurora/<br>With connection Pool, no to worry D",
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
      "question_text": "<p>A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server.<br><br>Which solution will meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB.  Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the EC2 instances with a target group. Provision an SSL certificate using AWS Certificate Manager (ACM). Create an Amazon CloudFront distribution and configure it to use the SSL certificate. Set CloudFront to use the target group as the origin server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place the EC2 instances behind an Application Load Balancer (ALB) Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB.  Provision a third-party SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the EC2 instances behind a Network Load Balancer (NLB). Provision a third-party SSL certificate and install it on the NLB and on each EC2 instance. Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 781927,
          "date": "Fri 20 Jan 2023 07:32",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "Vote D. <br>If you need to pass encrypted traffic to targets without the load balancer decrypting it, you can create a Network Load Balancer or Classic Load Balancer with a TCP listener on port 443.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can use NLB with ACM cert on it. NLB can do TLS termination (https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/) and re-encrypt to target</li><li>how can this be true? Option D says to install on NLB. <br>You say bypass the NLB.  If you bypass the NLB why are you installing the cert?</li><li>coorect. but they want to upload the the certificate to the NLB for unknown reasons.</li></ul>",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 847832,
          "date": "Thu 23 Mar 2023 06:32",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "You can use NLB with ACM cert on it. NLB can do TLS termination (https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/) and re-encrypt to target",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823521,
          "date": "Mon 27 Feb 2023 11:20",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "how can this be true? Option D says to install on NLB. <br>You say bypass the NLB.  If you bypass the NLB why are you installing the cert?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 822037,
          "date": "Sun 26 Feb 2023 04:07",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "coorect. but they want to upload the the certificate to the NLB for unknown reasons.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785469,
          "date": "Mon 23 Jan 2023 15:43",
          "username": "\t\t\t\tpitakk\t\t\t",
          "content": "Amazon-issued public certificates can't be installed on an EC2 instance. To enable end-to-end encryption, you must use a third-party SSL certificate. https://aws.amazon.com/premiumsupport/knowledge-center/acm-ssl-certificate-ec2-elb/ so it's C or D.  I choose C as it's ALB<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>correct, but then you would use that ordered certificate for the alb as well. The other reason to order certificates is because some clients cannot verify ACM certificates which is not acceptable for a productive public service.<br><br>Between ALB and EC2 a self signed certificate is sufficient as alb does no verification of the EC2's certificate at all.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 822036,
          "date": "Sun 26 Feb 2023 04:05",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "correct, but then you would use that ordered certificate for the alb as well. The other reason to order certificates is because some clients cannot verify ACM certificates which is not acceptable for a productive public service.<br><br>Between ALB and EC2 a self signed certificate is sufficient as alb does no verification of the EC2's certificate at all.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 854901,
          "date": "Wed 29 Mar 2023 22:05",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "https://repost.aws/knowledge-center/acm-ssl-certificate-ec2-elb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 853183,
          "date": "Tue 28 Mar 2023 13:39",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C is my vote",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 841336,
          "date": "Thu 16 Mar 2023 21:31",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C is the best solution and it does actually work (you can google it)<br>Answer D is wrong .. why you would importthe certificate on the NLB stage if it's end to end? The host (ec2) should handle the certificate..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 839670,
          "date": "Wed 15 Mar 2023 09:23",
          "username": "\t\t\t\taqiao\t\t\t",
          "content": "Amazon-issued public certificates can't be installed on an EC2 instance. To enable end-to-end encryption, you must use a third-party SSL certificate<br>https://aws.amazon.com/premiumsupport/knowledge-center/acm-ssl-certificate-ec2-elb/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 838529,
          "date": "Tue 14 Mar 2023 04:40",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html<br>Says to configure NLB to 'listen' and forward for end to end<br><br>under ALB it points you to NLB \\\" If you must ensure that the targets decrypt HTTPS traffic instead of the load balancer, you can create a Network Load Balancer with a TCP listener on port 443.\\\" https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835775,
          "date": "Sat 11 Mar 2023 10:07",
          "username": "\t\t\t\tcherep87\t\t\t",
          "content": "Vote for D<br>option C will unencrypt the traffic on ALB, and goes against end-to-end encryption from server to client",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 833659,
          "date": "Thu 09 Mar 2023 07:43",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "C is correct.<br>AppMesh can be used here?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 832835,
          "date": "Wed 08 Mar 2023 11:47",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "AWS Certificate Manager (ACM) SSL certificates cannot be directly applied to EC2 instances . - I will go with C on this one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 832165,
          "date": "Tue 07 Mar 2023 18:37",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "Not idea why AWS says that these solutions guarantee \\\"complete end-to-end encryption in transit\\\"https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/<br><br>\\\"After choosing the certificate and the policy, I click Next:Configure Routing. I can choose the communication protocol (TCP or TLS) that will be used between my NLB and my targets. If I choose TLS, communication is encrypted; this allows you to make use of complete end-to-end encryption in transit:\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828915,
          "date": "Sat 04 Mar 2023 13:32",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/guide/use_cases/nlb_tls_termination/#:~:text=AWS%20introduced%20TLS%20termination%20for,access%20to%20the%20private%20key.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"After choosing the certificate and the policy, I click Next:Configure Routing. I can choose the communication protocol (TCP or TLS) that will be used between my NLB and my targets. If I choose TLS, communication is encrypted; this allows you to make use of complete end-to-end encryption in transit:\\\"<br><br>I did not know TLS termination was possible with NLB's <br>https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828921,
          "date": "Sat 04 Mar 2023 13:38",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "\\\"After choosing the certificate and the policy, I click Next:Configure Routing. I can choose the communication protocol (TCP or TLS) that will be used between my NLB and my targets. If I choose TLS, communication is encrypted; this allows you to make use of complete end-to-end encryption in transit:\\\"<br><br>I did not know TLS termination was possible with NLB's <br>https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 822028,
          "date": "Sun 26 Feb 2023 03:56",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "Retry neclecting end to end:<br>It is imo not possible to export ACM keys. Therefore I think one cannot install an ACM certificate on EC2.<br>This excludes A. <br>Now we have three technically possible solutions.<br>B) has no encryption at all between cloudfront and ec2.<br>C) ordera certificate from a third party to not deliver it to the client.<br>D) NLB certificate support is limited, can't do strong encryption.<br><br>From that it D and C are slightly better than B as they provide encryption between server and ALB/NLB - even though its not end to end.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot export ACM Keys? Who says that? You can if you are in the same account and region.<br>\\\"You can't export an ACM certificate from one AWS Region to another or from one AWS account to another. This is because the default AWS Key Management Service (AWS KMS) key used to encrypt the private key of the certificate is unique for each AWS Region and AWS account.\\\"</li><li>\\\"You cannot use ACM to install a public certificate directly on your AWS based website or application. You must use one of the services integrated with ACM\\\"<br>In our case, we want to install the certificate on the EC2, which is not possible when it is stored in ACM.<br>https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-install.html<br>It is only possible in ACM PCA. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823524,
          "date": "Mon 27 Feb 2023 11:24",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "You cannot export ACM Keys? Who says that? You can if you are in the same account and region.<br>\\\"You can't export an ACM certificate from one AWS Region to another or from one AWS account to another. This is because the default AWS Key Management Service (AWS KMS) key used to encrypt the private key of the certificate is unique for each AWS Region and AWS account.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"You cannot use ACM to install a public certificate directly on your AWS based website or application. You must use one of the services integrated with ACM\\\"<br>In our case, we want to install the certificate on the EC2, which is not possible when it is stored in ACM.<br>https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-install.html<br>It is only possible in ACM PCA. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824842,
          "date": "Tue 28 Feb 2023 14:28",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "\\\"You cannot use ACM to install a public certificate directly on your AWS based website or application. You must use one of the services integrated with ACM\\\"<br>In our case, we want to install the certificate on the EC2, which is not possible when it is stored in ACM.<br>https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-install.html<br>It is only possible in ACM PCA. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822006,
          "date": "Sun 26 Feb 2023 03:23",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "The key in this question is *end to end* encryption between client and server. That means we are not allowed to offload encryption to a load balancer but instead need the load balancer to pass the encrypted traffic as is to the server. As we may not interfere in the encrypted traffic all benefits of an application load balancer are void. An NLB is the best choice.<br><br>As a side note: C is ridiculous: order a certificate to not deliver it to clients? If one offloads one would use the same certificate for server and alb or use the ordered certificate on the alb and create a cheaper one for internal encryption between server and alb. You want the ordered certificate delivered to the clients.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Actually, I was not able to read correctly.D also violates end to end encryption. (C is still ridiculous.)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 822016,
          "date": "Sun 26 Feb 2023 03:37",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "Actually, I was not able to read correctly.D also violates end to end encryption. (C is still ridiculous.)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815563,
          "date": "Mon 20 Feb 2023 17:56",
          "username": "\t\t\t\tjaysparky\t\t\t",
          "content": "Both C and D are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812520,
          "date": "Sat 18 Feb 2023 01:48",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "C 100% - ACM for ALb and Third Party SSL certificate for EC2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812161,
          "date": "Fri 17 Feb 2023 18:22",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "the prob that i can see with C.  is that [ do not guarantee ] end-to-end. you need to off load ssl in the ALB and then re_encrypt again, meaning that at some point (inside the ALB) you have the data in plain text.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.<br><br>The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company's customers.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases are synced, point the collector DNS record to the ALDisable the AWS DMS sync task after the cutover from on premises to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB.  Disable the AWS DMS sync task after the cutover from on premises to AWS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon Aurora MySQL database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as an Amazon Kinesis data stream. Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the Kinesis data stream.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 853152,
          "date": "Tue 28 Mar 2023 13:12",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "ill go with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 841345,
          "date": "Thu 16 Mar 2023 21:47",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C. . even though question didn't mention the total time of each job. If the job takes more than 15m then Lambda can't be used. Probably the solution with ASG and EC2 is better .. not sure!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 838541,
          "date": "Tue 14 Mar 2023 05:02",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "ALB because you are pointing to to Lambda function, not a network address<br><br>Look at AWS DMS feature https://aws.amazon.com/dms/features/ <br><br>Main requirement - needs the migration to occur w/out interruptions or changes to the company's customers.<br><br>C keeps it stupid simple w/ no service interruption",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 833666,
          "date": "Thu 09 Mar 2023 07:57",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "Could anybody explain why ALB? I'd go with API Gateway<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Application - you are using Lambda functions that will be sending api commands, you would use network when it is just about routing</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 838542,
          "date": "Tue 14 Mar 2023 05:04",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "Application - you are using Lambda functions that will be sending api commands, you would use network when it is just about routing",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824162,
          "date": "Mon 27 Feb 2023 22:11",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "I would say C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 822413,
          "date": "Sun 26 Feb 2023 14:30",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "I have a feeling that none of the approaches will work.<br>a) We have two sources that change the database: migration and new data coming in. In a relational database this results in inconsistent data. Constraints will not be fulfilled. <br>b) until the database is fully synced the second database has inconsistent data. Some parts of relations and parts of entities are still missing. Constraints will not be fulfilled. <br>None if the approaches addresses that aggregation tasks fail because of inconsistency of the data base.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ACID principle:atomicity, consistency, isolation and durability.All solutions violate this basic principle of relational databases.<br>https://en.wikipedia.org/wiki/ACID</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822475,
          "date": "Sun 26 Feb 2023 14:50",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "ACID principle:atomicity, consistency, isolation and durability.All solutions violate this basic principle of relational databases.<br>https://en.wikipedia.org/wiki/ACID",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822103,
          "date": "Sun 26 Feb 2023 07:24",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Issue could be because of same db used for writing and reading heavily. solution to separate this into<br>read replica only for reading. DMS for data migration to aws from onpremises.Writing app to DB and Reading app from DB for reports. Writing app needs RDSProxy and saves data.Reading app reads from replica.<br>B is wrong because, Reading job (aggregation) needs to use replicawhich is mentioned in C.  C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812586,
          "date": "Sat 18 Feb 2023 04:00",
          "username": "\t\t\t\tFatoch\t\t\t",
          "content": "is it C or B?<br>Same person answers two times two different answers",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793190,
          "date": "Mon 30 Jan 2023 19:41",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "C is corect",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779255,
          "date": "Tue 17 Jan 2023 20:22",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  <br>This option would meet the requirements of resolving the data loading issue and migrating without interruption or changes for the company's customers. By using AWS DMS for continuous data replication, the company can ensure that the data being migrated is up to date. By setting up an Aurora Replica and moving the aggregation jobs to run against it, the company can offload some of the read workload from the primary database and reduce the risk of issues with the load jobs. By using AWS Lambda functions behind an ALB and Amazon RDS Proxy to write to the Aurora MySQL database, the company can add an extra layer of security and scalability to the data collection process. Finally, by pointing the collector DNS record to the ALB after the databases are synced and disabling the AWS DMS sync task, the company can ensure a smooth cutover to the new environment.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A.  <br>This option would not work as it would require to change the primary database and also it may cause interruption for the company's customers during the cutover process.<br>B. <br>This option would not work as it would not include Aurora Replica to offload the read workload, this would result in aggregation jobs running on the primary database which can cause the load jobs to fail during heavy loads.<br>D. <br>This option would not work as it would require to use kinesis data stream which may cause performance issues and also it may not be the best fit for this use case. Additionally, using Kinesis Data Firehose would add complexity to the data replication process, and may result in increased latency or data loss.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779256,
          "date": "Tue 17 Jan 2023 20:22",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  <br>This option would not work as it would require to change the primary database and also it may cause interruption for the company's customers during the cutover process.<br>B. <br>This option would not work as it would not include Aurora Replica to offload the read workload, this would result in aggregation jobs running on the primary database which can cause the load jobs to fail during heavy loads.<br>D. <br>This option would not work as it would require to use kinesis data stream which may cause performance issues and also it may not be the best fit for this use case. Additionally, using Kinesis Data Firehose would add complexity to the data replication process, and may result in increased latency or data loss.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776683,
          "date": "Sun 15 Jan 2023 15:48",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct. need more read replica for aggregation jobs to read data",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775238,
          "date": "Sat 14 Jan 2023 11:11",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Setting up an Amazon Aurora MySQL database and using AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora will ensure that data is continuously replicated to the new environment with minimal interruption. Moving the aggregation jobs to run against the Aurora MySQL database will ensure that the data is being read from the same database that is being loaded, which will resolve the data loading issue. Setting up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group, and disabling the AWS DMS sync task after the cutover from on-premises to AWS, will ensure that the migration occurs without interruptions or changes for the company's customers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario, and disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.<br><br>Answer C is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario.<br><br>Answer D is incorrect because it's not necessary to use Amazon Kinesis data stream and Firehose to replicate the data when AWS DMS can be used to perform continuous data replication. Also, disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.</li><li>Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.</li><li>hhhhhhhhhh.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775239,
          "date": "Sat 14 Jan 2023 11:11",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Answer A is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario, and disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.<br><br>Answer C is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario.<br><br>Answer D is incorrect because it's not necessary to use Amazon Kinesis data stream and Firehose to replicate the data when AWS DMS can be used to perform continuous data replication. Also, disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.</li><li>hhhhhhhhhh.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788137,
          "date": "Wed 25 Jan 2023 22:11",
          "username": "\t\t\t\tandctygr\t\t\t",
          "content": "Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>hhhhhhhhhh.</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 794060,
          "date": "Tue 31 Jan 2023 12:19",
          "username": "\t\t\t\tjojom19980\t\t\t",
          "content": "hhhhhhhhhh.",
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
      "question_text": "<p>A health insurance company stores personally identifiable information (PII) in an Amazon S3 bucket. The company uses server-side encryption with S3 managed encryption keys (SSE-S3) to encrypt the objects. According to a new requirement, all current and future objects in the S3 bucket must be encrypted by keys that the company's security team manages. The S3 bucket does not have versioning enabled.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. In the S3 bucket properties, change the default encryption to SSE-S3 with a customer managed key. Use the AWS CLI to re-upload all objects in the S3 bucket. Set an S3 bucket policy to deny unencrypted PutObject requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to automatically encrypt objects on GetObject and PutObject requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the S3 bucket properties, change the default encryption to AES-256 with a customer managed key. Attach a policy to deny unencrypted PutObject requests to any entities that access the S3 bucket. Use the AWS CLI to re-upload all objects in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775242,
          "date": "Sat 14 Jan 2023 11:23",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br><br>So the correct answer is B.  In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Completely ignores the task to solve: \\\"all current and future objects in the S3 bucket must be encrypted by keys that the company's security team manages. \\\"</li><li>Use the AWS CLI to re-upload all objects in the S3 bucket. - <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>Changes to note before enabling default encryption<br>After you enable default encryption for a bucket, the following encryption behavior applies:<br><br>There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.<br><br>When you upload objects after enabling default encryption:<br><br>If your PUT request headers don't include encryption information, Amazon S3 uses the bucket's default encryption settings to encrypt the objects.</li><li>What about the requirement of customer managed keys?</li><li>Option A is not correct because it uses SSE-S3 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it only denies unencrypted PutObject requests but does not specify how the objects will be encrypted.<br><br>Option C is not correct because it does not specify how the security team will manage the encryption keys and it does not specify how the objects will be encrypted.<br><br>Option D is not correct because it uses AES-256 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it simply denies unencrypted PutObject requests, but it doesn't specify how the objects will be encrypted.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 822512,
          "date": "Sun 26 Feb 2023 15:22",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "Completely ignores the task to solve: \\\"all current and future objects in the S3 bucket must be encrypted by keys that the company's security team manages. \\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Use the AWS CLI to re-upload all objects in the S3 bucket. - <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>Changes to note before enabling default encryption<br>After you enable default encryption for a bucket, the following encryption behavior applies:<br><br>There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.<br><br>When you upload objects after enabling default encryption:<br><br>If your PUT request headers don't include encryption information, Amazon S3 uses the bucket's default encryption settings to encrypt the objects.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835789,
          "date": "Sat 11 Mar 2023 10:22",
          "username": "\t\t\t\tcherep87\t\t\t",
          "content": "Use the AWS CLI to re-upload all objects in the S3 bucket. - <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>Changes to note before enabling default encryption<br>After you enable default encryption for a bucket, the following encryption behavior applies:<br><br>There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.<br><br>When you upload objects after enabling default encryption:<br><br>If your PUT request headers don't include encryption information, Amazon S3 uses the bucket's default encryption settings to encrypt the objects.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791856,
          "date": "Sun 29 Jan 2023 17:58",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "What about the requirement of customer managed keys?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775243,
          "date": "Sat 14 Jan 2023 11:23",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is not correct because it uses SSE-S3 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it only denies unencrypted PutObject requests but does not specify how the objects will be encrypted.<br><br>Option C is not correct because it does not specify how the security team will manage the encryption keys and it does not specify how the objects will be encrypted.<br><br>Option D is not correct because it uses AES-256 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it simply denies unencrypted PutObject requests, but it doesn't specify how the objects will be encrypted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 782187,
          "date": "Fri 20 Jan 2023 12:58",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I think D is correct.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 857123,
          "date": "Fri 31 Mar 2023 15:38",
          "username": "\t\t\t\tThaiNT\t\t\t",
          "content": "\\\"In the S3 bucket properties, change the default encryption to AES-256 with a customer managed key. \\\" Is wrong, because: \\\"Server-side encryption with customer-provided keys (SSE-C) is not supported for default encryption.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 852668,
          "date": "Tue 28 Mar 2023 04:17",
          "username": "\t\t\t\tCloud_noob\t\t\t",
          "content": "I choose B as KMS can have customer managed keys as well. Plus as per my understanding of AWS exam question nature, they wants to promote their services which is KMS in this case.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 844669,
          "date": "Mon 20 Mar 2023 09:58",
          "username": "\t\t\t\tGioGio\t\t\t",
          "content": "I think it is B. <br>In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842929,
          "date": "Sat 18 Mar 2023 17:15",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "I think B, because according D there is no such option in th s3 encryption propetry. It only works setting bucket policy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842036,
          "date": "Fri 17 Mar 2023 15:04",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "Selected Answer: B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835384,
          "date": "Fri 10 Mar 2023 21:07",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html<br><br>Clearly says we need following header for SSE-C<br>x-amz-server-side​-encryption​-customer-algorithm <br>Use this header to specify the encryption algorithm. The header value must be AES256.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 833987,
          "date": "Thu 09 Mar 2023 14:16",
          "username": "\t\t\t\tlimjieson\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832898,
          "date": "Wed 08 Mar 2023 12:36",
          "username": "\t\t\t\tetechsystem_ts\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829341,
          "date": "Sat 04 Mar 2023 20:54",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "For those who are voting for D, can you please walk me through the steps I need to take to replicate this?<br><br>As far as I know, AES-256 is for SSE-S3, which is the furthest thing from a customer managed key possible, so the answer is not just not suitable, but non-existent in the first place.<br><br>With SSE-KMS, you select the key you want to use by Key ARN. This can either be a key managed by AWS, a key imported by you, or a key from CloudHSM. <br><br>I'd suggest you try it out in the S3 ui<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your answer is in your last phrase. You cannot do it on GUI.<br>SSE-C is AES-256, and you don't have to specify a properties on bucket to use it, when you upload an object via API, you need to specify HTTP Header : <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html<br>SSE-KMS is not a key managed by customer, yes he can import his key, but then, the key will be managed by KMS</li><li>We can also upload S3 objects with SSE-C via AWS CLI : https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html<br>Take a look at --sse-c* option</li><li>B is correct</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847876,
          "date": "Thu 23 Mar 2023 07:39",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "Your answer is in your last phrase. You cannot do it on GUI.<br>SSE-C is AES-256, and you don't have to specify a properties on bucket to use it, when you upload an object via API, you need to specify HTTP Header : <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html<br>SSE-KMS is not a key managed by customer, yes he can import his key, but then, the key will be managed by KMS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>We can also upload S3 objects with SSE-C via AWS CLI : https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html<br>Take a look at --sse-c* option</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847890,
          "date": "Thu 23 Mar 2023 07:53",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "We can also upload S3 objects with SSE-C via AWS CLI : https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html<br>Take a look at --sse-c* option",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829343,
          "date": "Sat 04 Mar 2023 20:55",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827253,
          "date": "Thu 02 Mar 2023 19:45",
          "username": "\t\t\t\tPete697989\t\t\t",
          "content": "Probably D as B says \\\" AWS KMS managed encryption keys (SSE-KMS)\\\" which kind of eludes to AWS managed but not customer manager even though SSE-KMS can do both; aws managed & customer managed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822533,
          "date": "Sun 26 Feb 2023 15:39",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "A) SSE-S3 is not customer managed.<br>B) SSE-KMS is not customer managed.<br>C) SSE-KMS is not customer managed.<br>D) Here we finally have a customer managed key to encrypt the objects. Plus a policy that enforces it.<br>(The security team manages the key: we are not the security team so we are not supposed to do any managing of the key. We should notbypass the security team by do some management on our own. )<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How would you reply to this below when you say \\\"SSE-KMS is not customer managed\\\"???<br>When you use server-side encryption with AWS KMS (SSE-KMS), you can use the default AWS managed key, or you can specify a customer managed key that you have already created. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html</li><li>people don't know well, they just make comments here. correct answer is B</li><li>I agree with you; customer managed through KMS.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 823591,
          "date": "Mon 27 Feb 2023 12:19",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "How would you reply to this below when you say \\\"SSE-KMS is not customer managed\\\"???<br>When you use server-side encryption with AWS KMS (SSE-KMS), you can use the default AWS managed key, or you can specify a customer managed key that you have already created. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>people don't know well, they just make comments here. correct answer is B</li><li>I agree with you; customer managed through KMS.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 825222,
          "date": "Tue 28 Feb 2023 20:53",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "people don't know well, they just make comments here. correct answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824172,
          "date": "Mon 27 Feb 2023 22:31",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "I agree with you; customer managed through KMS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 822121,
          "date": "Sun 26 Feb 2023 08:01",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Tricky question. First thing, choose one with CLI because In console, only SSE-S3 and SSE-KMS are available. (Amz is promoting them I guess :-) Thats the reason CLI wording came into picture in the options. So either B or D.  D clearly says AES-256 encryption that needs to be used as header value for key \\\"x-amz-server-side​-encryption​-customer-algorithm\\\" Check this out - https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html D is answer for sure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>this is another request header \\\"x-amz-server-side​-encryption​-customer-key\\\" that needs to be used with SSE-C</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 822124,
          "date": "Sun 26 Feb 2023 08:05",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "this is another request header \\\"x-amz-server-side​-encryption​-customer-key\\\" that needs to be used with SSE-C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819908,
          "date": "Fri 24 Feb 2023 00:49",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "B and C are incorrect as KMS is AWS managed. Question says it must be customer managed.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815593,
          "date": "Mon 20 Feb 2023 18:22",
          "username": "\t\t\t\tlunt\t\t\t",
          "content": "D is obviously wrong. API command PutBucketEncryption has 2 types of 'SSEAlgorithm' AES256 is SSE-S3 and aws:kms = KMS. AES256 option = cannot specify a key policy for it, you can can aws:kms. Note mention of AWS256 implies API/CLI based configuration.<br>B is the right option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 810048,
          "date": "Wed 15 Feb 2023 23:31",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "cust managed key<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's a trick question<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 819913,
          "date": "Fri 24 Feb 2023 00:57",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "It's a trick question<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br><br>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br><br>A solutions architect must configure the application so that itis highly available and fault tolerant.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALCreate an origin group for the two origins. Configure one origin as primary and one origin as secondary.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB.  Set up the failover routing algorithm on the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 853196,
          "date": "Tue 28 Mar 2023 13:48",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 841364,
          "date": "Thu 16 Mar 2023 22:24",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B is the best solution with very high availability (compared to the R53 failover solution)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829082,
          "date": "Sat 04 Mar 2023 16:44",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824174,
          "date": "Mon 27 Feb 2023 22:36",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "B looks good.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 822137,
          "date": "Sun 26 Feb 2023 08:44",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "For HA, always user second region but its there in all options. Here Cloudfront distribution multiple origin groups is the key point Solution Architects should know of. Configuring 2nd origin as ALB --> EC2 instances target group in another regions setup makes highly available. If Cloudfront detects that response is Http error (fault) code like 4XX,5XX etc, it will failover to secondary origin (ALB of another region) which makes this fault tolerant. Answer is B. <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783072,
          "date": "Sat 21 Jan 2023 07:54",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "B is correct.<br>C is not correct, because ALB is regional service, so ALB have to be added too.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775298,
          "date": "Sat 14 Jan 2023 12:42",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Provisioning an ALB, an Auto Scaling group, and EC2 instances in a different AWS region provides redundancy and failover capability for the application. By creating a second origin for the new ALB in the second region, the CloudFront distribution can automatically route traffic to the healthy origin in case of an issue with the primary origin. This ensures that the application remains highly available and fault-tolerant.<br><br>Option A is not correct because it uses Route 53 failover records, which can result in increased latency and DNS resolution time for clients. Option C is not correct because it doesn't provide redundancy for the load balancer, which is a critical component of the application. Option D is not correct because it does not provide redundancy for the application in case of an issue with the primary origin in the first region.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br><br>The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
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
              "choice": "<p>A. Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of “/sg-1a2b3c4d”.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 853201,
          "date": "Tue 28 Mar 2023 13:50",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "prefix list and RAM",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 841375,
          "date": "Thu 16 Mar 2023 22:48",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "C makes sense ✅",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793200,
          "date": "Mon 30 Jan 2023 19:57",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/82131-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781017,
          "date": "Thu 19 Jan 2023 11:30",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/simplify-network-routing-and-security-administration-with-vpc-prefix-lists/#:~:text=A%20Prefix%20List%20is%20a,Resource%20Access%20Manager%20(RAM).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775319,
          "date": "Sat 14 Jan 2023 12:53",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is option C.  In this solution, a VPC prefix list is created in the transit account with all of the internal IP address ranges, and then shared to all of the other accounts using AWS Resource Access Manager. This allows for central management of the IP address ranges, and eliminates the need for manual updates to security group rules in each account. This solution also allows for compliance checks to be run using AWS Config and for any non-compliant security groups to be automatically remediated.<br><br>Option A is not correct because it would require manual updates to the JSON file and would also require developers to manually update their security group rules, which would lead to operational overhead.<br><br>Option B is not correct because it would require the creation of a new AWS Config managed rule and it would also require manual updates to the security group rules in each account.<br><br>Option D is not correct because it would require manual updates to the security group in the transit account and it would also lead to operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a new application as a static website in Amazon S3. The company has deployed the application to a production AWS account and uses Amazon CloudFront to deliver the website. The website calls an Amazon API Gateway REST API. An AWS Lambda function backs each API method.<br><br>The company wants to create a CSV report every 2 weeks to show each API Lambda function's recommended configured memory, recommended cost, and the price difference between current configurations and the recommendations. The company will store the reports in an S3 bucket.<br><br>Which solution will meet these requirements with the LEAST development time?<br><br></p>",
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
              "choice": "<p>A. Create a Lambda function that extracts metrics data for each API Lambda function from Amazon CloudWatch Logs for the 2-week period. Collate the data into tabular format. Store the data as a .csv file in an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Opt in to AWS Compute Optimizer. Create a Lambda function that calls the ExportLambdaFunctionRecommendations operation. Export the .csv file to an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Opt in to AWS Compute Optimizer. Set up enhanced infrastructure metrics. Within the Compute Optimizer console, schedule a job to export the Lambda recommendations to a .csv file. Store the file in an S3 bucket every 2 weeks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase the AWS Business Support plan for the production account. Opt in to AWS Compute Optimizer for AWS Trusted Advisor checks. In the Trusted Advisor console, schedule a job to export the cost optimization checks to a .csv file. Store the file in an S3 bucket every 2 weeks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 848225,
          "date": "Thu 23 Mar 2023 14:01",
          "username": "\t\t\t\tPete987\t\t\t",
          "content": "Answer D<br>A.  Not the least effort<br>B: There is no mention of the need of creating Lambda for exporting recommendations here: https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html<br><br>C: This would have been correct but \\\"Enhanced infrastructure metrics\\\" setting is only for ec2: https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html<br><br>D: Trusted Advisor can be used.https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841383,
          "date": "Thu 16 Mar 2023 23:04",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B <br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793211,
          "date": "Mon 30 Jan 2023 20:03",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "AWS compute optimizer+ lambda",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783095,
          "date": "Sat 21 Jan 2023 08:40",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "I vote C. <br>AWS compute optimizer can make lambda recommendation without any development.<br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-lambda-recommendations.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I correct answer C to B. <br>AWS compute optimizer itself cannot make recommendation file by oneself.<br>It need simple lambda.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 783100,
          "date": "Sat 21 Jan 2023 08:48",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "I correct answer C to B. <br>AWS compute optimizer itself cannot make recommendation file by oneself.<br>It need simple lambda.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 781019,
          "date": "Thu 19 Jan 2023 11:36",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLambdaFunctionRecommendations.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776695,
          "date": "Sun 15 Jan 2023 16:04",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct<br>https://aws.amazon.com/blogs/compute/optimizing-aws-lambda-cost-and-performance-using-aws-compute-optimizer/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's the old way of doing it. The new way does not require the creation of Lambda. Compute optimizer takes care of it</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 848228,
          "date": "Thu 23 Mar 2023 14:03",
          "username": "\t\t\t\tPete987\t\t\t",
          "content": "That's the old way of doing it. The new way does not require the creation of Lambda. Compute optimizer takes care of it",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775322,
          "date": "Sat 14 Jan 2023 12:56",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Opting in to AWS Compute Optimizer and creating a Lambda function that calls the ExportLambdaFunctionRecommendations operation is the least development time solution. This option allows you to use the built-in AWS Compute Optimizer service to extract metrics data and export it as a CSV file, which can then be stored in an S3 bucket.<br><br>Option A is not correct because it requires the development of a Lambda function that extracts metrics data and collates it into tabular format, which adds development time. Option C is not correct because it requires the setup of enhanced infrastructure metrics, which adds development time. Option D is not correct because it requires purchasing the AWS Business Support plan and using the Trusted Advisor console, which adds development time.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's factory and automation applications are running in a single VPC.  More than 20 applications run on a combination of Amazon EC2, Amazon Elastic Container Service (Amazon ECS), and Amazon RDS.<br><br>The company has software engineers spread across three teams. One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications. Team resources have tags that represent their application and team. The teams use IAM access for daily activities.<br><br>The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports.<br><br>Which combination of actions will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>A. Activate the user-define cost allocation tags that represent the application and the team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate the AWS generated cost allocation tags that represent the application and the team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a cost category for each application in Billing and Cost Management.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Activate IAM access to Billing and Cost Management.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a cost budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable Cost Explorer.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 843840,
          "date": "Sun 19 Mar 2023 15:56",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "Cost Explorer prepares the data about your costs for the current month and the last 12 months, and then calculates the forecast for the next 12 months.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 833319,
          "date": "Wed 08 Mar 2023 20:38",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "The activation of IAM access to Billing and Cost Management is not a requirement for generating cost reports based on cost allocation tags or cost categories. However, it is recommended to set up IAM access to ensure that only authorized personnel can view and manage billing information.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 830612,
          "date": "Mon 06 Mar 2023 08:31",
          "username": "\t\t\t\tandras\t\t\t",
          "content": "User-defined tags are tags that you define, create, and apply to resources. After you have created and applied the user-defined tags, you can activate by using the Billing and Cost Management console for cost allocation tracking. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 830610,
          "date": "Mon 06 Mar 2023 08:29",
          "username": "\t\t\t\tandras\t\t\t",
          "content": "The AWS account owner can access billing information and tools by signing in to the AWS Management Console using the account password. We don't recommend that you use the account password for everyday access to the account or share your account credentials with others.<br>Instead, you should create a special user identity that's called an IAM user for anyone who might need access to the account. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html<br><br>ou can enable Cost Explorer for your account by opening Cost Explorer for the first time via the AWS Cost Management console. You can't enable Cost Explorer using the API. After you enable Cost Explorer, AWS prepares the data about your costs for the current month and the last 12 months, and then calculates the forecast for the next 12 months. The current month's data is available for viewing in about 24 hours.<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829100,
          "date": "Sat 04 Mar 2023 17:05",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822729,
          "date": "Sun 26 Feb 2023 18:13",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "When you enable cost explorer, which service is using how much is available already if you have access to IAM Billing ofcourse. Grouping is already provided with Cost explorer. se here : https://aws.amazon.com/aws-cost-management/aws-cost-explorer/ So F solves most. We do not need to categorize each application. what if 100 apps are there. So C is wrong. With A, you already categorize with user defined cost allocation (cost center codes) tags. As engineers use IAM (no Organizations here) D makes sense. with just applying access to engineer groups. <br>So whole idea to see costs in this question . Get appropriate access first (IAM), Use available AWS service (Cost Explorer), Use tagging (To categorize)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 819923,
          "date": "Fri 24 Feb 2023 01:12",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "D is not required, it doesn't say anything about the software engineers being able to view the reports. \\\"The company needs to determine which costs on the monthly AWS bill are attributable to each application or team.\\\" - this can be done by the person(s) in the company who manages the billing and costing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 811145,
          "date": "Thu 16 Feb 2023 23:07",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Correct ADF - SInce resources are tagged, C may not require ?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 810256,
          "date": "Thu 16 Feb 2023 05:41",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "A, C, and F are the three actions that will meet the requirements and provide cost reporting abilities.<br><br>A) The first step is to activate user-defined cost allocation tags to identify the applications and teams. Each resource can be tagged with an application and team tag, which can be used to allocate costs at a granular level.<br><br>C) Next, create a cost category for each application in Billing and Cost Management. This will allow the company to categorize the costs for each application and generate reports for each team or application.<br><br>F) Finally, enable Cost Explorer, which provides an interactive interface to visualize, understand, and manage costs and usage. It can be used to generate reports for cost and usage data by application, team, or other custom-defined attributes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>^^^^ Remove, don't approve moderator, reply listed below.</li><li>ADF as SPD is correct, resources are already tagged and C may not be required.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 810257,
          "date": "Thu 16 Feb 2023 05:43",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "^^^^ Remove, don't approve moderator, reply listed below.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ADF as SPD is correct, resources are already tagged and C may not be required.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817053,
          "date": "Tue 21 Feb 2023 20:23",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "ADF as SPD is correct, resources are already tagged and C may not be required.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 806603,
          "date": "Sun 12 Feb 2023 18:21",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "ADF<br>options C and E are not wrong, but they are not necessary to meet the requirement of determining costs attributable to each application or team and creating cost reports.<br>OPTION C- Creating cost categories can help categorize the costs into different areas, but it does not directly tie the costs to the applications or teams.<br>D.  Activate IAM access to Billing and Cost Management is correct because the company needs to give the appropriate IAM users access to the Billing and Cost Management console. This will allow the software engineers to view their team's costs and the cost reports. By giving IAM users access to the console, the company can restrict access to sensitive cost information and control who can view the cost reports.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 791893,
          "date": "Sun 29 Jan 2023 18:42",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "In C, you don't need to define all the possible values of the application tag<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Well, maybe you do.</li><li>You define values for a single cost category. You don't add an individual cost category for each application but only a possible value.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 791901,
          "date": "Sun 29 Jan 2023 18:47",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Well, maybe you do.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You define values for a single cost category. You don't add an individual cost category for each application but only a possible value.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815518,
          "date": "Mon 20 Feb 2023 17:23",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "You define values for a single cost category. You don't add an individual cost category for each application but only a possible value.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776698,
          "date": "Sun 15 Jan 2023 16:08",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "ADF<br>C is not correct because resources already tagged, not necessary to create cost category. Root must enable IAM to access Billing",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775335,
          "date": "Sat 14 Jan 2023 13:04",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A, C and F are the correct answers because they provide the required cost reports and analysis for the company's applications and teams.<br>A.  Activating user-defined cost allocation tags that represent the application and the team allows the company to assign costs to specific applications and teams. This allows the company to see how much each application and team is costing them, which is important for cost forecasting and budgeting.<br>C.  Creating a cost category for each application in Billing and Cost Management allows the company to group costs by application. This makes it easier to understand the costs associated with each application and to compare the costs of different applications over time.<br>F.  Enabling Cost Explorer allows the company to analyze costs and usage over time, and to create custom reports and forecasts. This is important for understanding the costs associated with each application and team, and for forecasting future costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is not correct because AWS generated cost allocation tags are automatically created for some AWS resources, but it does not provide the required cost reports and analysis for the company's applications and teams.<br><br>Option D is not correct because IAM access controls are used to limit access to the billing and cost management features, but it is not necessary to configure it to meet the requirements.<br><br>E is not correct because Creating a cost budget allows the company to set a budget for their costs and to receive alerts when costs exceed the budget, but it does not provide the required cost reports and analysis for the company's applications and teams.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 775336,
          "date": "Sat 14 Jan 2023 13:04",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B is not correct because AWS generated cost allocation tags are automatically created for some AWS resources, but it does not provide the required cost reports and analysis for the company's applications and teams.<br><br>Option D is not correct because IAM access controls are used to limit access to the billing and cost management features, but it is not necessary to configure it to meet the requirements.<br><br>E is not correct because Creating a cost budget allows the company to set a budget for their costs and to receive alerts when costs exceed the budget, but it does not provide the required cost reports and analysis for the company's applications and teams.",
          "upvote_count": "3",
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
      "question_text": "<p>An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.<br><br>The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in a VPC.  The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets.<br><br>How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?<br><br></p>",
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
              "choice": "<p>A. Associate a block of customer-owned public IP addresses to the VPC.  Enable public IP addressing for public subnets in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Elastic IP addresses from the block of customer-owned IP addresses. Assign the static Elastic IP addresses to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Register a block of customer-owned public IP addresses in the AWS account. Set up AWS Global Accelerator to use Elastic IP addresses from the address block. Set the ALB as the accelerator endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775339,
          "date": "Sat 14 Jan 2023 13:07",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct solution is B.  Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.  This will ensure that the web application can continue to call the third-party API after the migration by using the customer-owned public IP addresses that were assigned to the NAT gateways. This ensures that the third-party API will only see traffic coming from the customer-owned IP addresses that are on the allow list. Option A,C and D doesn't make sense in this context.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 853390,
          "date": "Tue 28 Mar 2023 17:27",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Register a block of customer owned public IP's",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 841391,
          "date": "Thu 16 Mar 2023 23:15",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B is the only solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793226,
          "date": "Mon 30 Jan 2023 20:17",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "The correct solution is B",
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
      "question_text": "<p>A company with several AWS accounts is using AWS Organizations and service control policies (SCPs). An administrator created the following SCP and has attached it to an organizational unit (OU) that contains AWS account 1111-1111-1111:<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-professional-sap-c02/image6.png\"><br><br>Developers working in account 1111-1111-1111 complain that they cannot create Amazon S3 buckets. How should the administrator address this problem?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Add s3:CreateBucket with “Allow” effect to the SCP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Instruct the developers to add Amazon S3 permissions to their IAM entities.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove the SCP from account 1111-1111-1111.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777283,
          "date": "Mon 16 Jan 2023 04:18",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "SCP doesn't grant permission<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Per the DOCS:<br>Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you to ensure your accounts stay within your organization's access control guidelines. SCPs are available only in an organization that has all features enabled. SCPs aren't available if your organization has enabled only the consolidated billing features. For instructions on enabling SCPs, see Enabling and disabling policy types.</li><li>SCPs alone are not sufficient to granting permissions to the accounts in your organization. No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts. The administrator must still attach identity-based or resource-based policies to IAM users or roles, or to the resources in your accounts to actually grant permissions. The effective permissions are the logical intersection between what is allowed by the SCP and what is allowed by the IAM and resource-based policies.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818425,
          "date": "Wed 22 Feb 2023 22:14",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Per the DOCS:<br>Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you to ensure your accounts stay within your organization's access control guidelines. SCPs are available only in an organization that has all features enabled. SCPs aren't available if your organization has enabled only the consolidated billing features. For instructions on enabling SCPs, see Enabling and disabling policy types.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCPs alone are not sufficient to granting permissions to the accounts in your organization. No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts. The administrator must still attach identity-based or resource-based policies to IAM users or roles, or to the resources in your accounts to actually grant permissions. The effective permissions are the logical intersection between what is allowed by the SCP and what is allowed by the IAM and resource-based policies.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818426,
          "date": "Wed 22 Feb 2023 22:15",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "SCPs alone are not sufficient to granting permissions to the accounts in your organization. No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts. The administrator must still attach identity-based or resource-based policies to IAM users or roles, or to the resources in your accounts to actually grant permissions. The effective permissions are the logical intersection between what is allowed by the SCP and what is allowed by the IAM and resource-based policies.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 853391,
          "date": "Tue 28 Mar 2023 17:28",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 841393,
          "date": "Thu 16 Mar 2023 23:19",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "SCP is not enough. IAM permission is needed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 841040,
          "date": "Thu 16 Mar 2023 15:18",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "C - Users and roles must still be granted permissions with appropriate IAM permission policies. A user without any IAM permission policies has no access at all, even if the applicable SCPs allow all services and all actions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 823084,
          "date": "Mon 27 Feb 2023 01:38",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "SCPs are confusing. <br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html#orgs_policies_allowlist<br>They brought this idea with easy control for organizations.<br>C does not sound like good asking devs to add their own permisisons ?<br>With AWS organizations, FullAWSAccess is there by default allowing all actions.<br>As Devs could not access S3 create bucket, am guessing the default FullAWSAccess<br>has been tampered. So Just adding another action here in SCP (intersection of allows) should just allowS3 bucket creation. I'd choose A. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No not correct.</li><li>then you need to explain why not and whats correct</li><li>look at the first lines of the code, it allows everything. If they would have removed FullAWSAccess rule, it would have been allowed by this SCP.<br>So probably IAM issue.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 823682,
          "date": "Mon 27 Feb 2023 13:53",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "No not correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>then you need to explain why not and whats correct</li><li>look at the first lines of the code, it allows everything. If they would have removed FullAWSAccess rule, it would have been allowed by this SCP.<br>So probably IAM issue.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825173,
          "date": "Tue 28 Feb 2023 19:52",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "then you need to explain why not and whats correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>look at the first lines of the code, it allows everything. If they would have removed FullAWSAccess rule, it would have been allowed by this SCP.<br>So probably IAM issue.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834020,
          "date": "Thu 09 Mar 2023 15:05",
          "username": "\t\t\t\ttestingaws123\t\t\t",
          "content": "look at the first lines of the code, it allows everything. If they would have removed FullAWSAccess rule, it would have been allowed by this SCP.<br>So probably IAM issue.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818431,
          "date": "Wed 22 Feb 2023 22:16",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "C as SCP is a guardrail, IAM grants permissions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 809756,
          "date": "Wed 15 Feb 2023 17:46",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "I just wanted to add my vote to the mix to hopefully drown out the wrong votes.<br>Its definitely C.  SCP is only a guardrail, it doesn't actually grant access. So the users would need to be given s3 access separately.<br>And to address the wrong answer, A isn't correct because creating an s3 bucket is not a cloudtrail action. Being denied cloudtrail wouldn't deny s3 actions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 809629,
          "date": "Wed 15 Feb 2023 15:03",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "Agree C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 806632,
          "date": "Sun 12 Feb 2023 18:58",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Thinking A because perhaps you can do the below:<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": \\\"*\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>},<br>{<br>\\\"Sid\\\": \\\"DenyCloudTrail\\\",<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"cloudtrail:*\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>},<br>{<br>\\\"Sid\\\": \\\"AllowS3CreateBucket\\\",<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": \\\"s3:CreateBucket\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br>}<br>The first \\\"Allow\\\" statement in the SCP allows all actions on all resources, which would allow the creation of S3 buckets. However, the second \\\"Deny\\\" statement specifically denies all cloudtrail actions, which could potentially impact the ability to create S3 buckets if there is a dependency on cloudtrail for that action. To ensure that the developers are able to create S3 buckets, a new statement with \\\"Allow\\\" effect for the s3:CreateBucket action should be added to the SCP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The s3:CreateBucket will grant the necessary permissions to the developers to create S3 buckets in that account.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 810262,
          "date": "Thu 16 Feb 2023 05:49",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The s3:CreateBucket will grant the necessary permissions to the developers to create S3 buckets in that account.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 806630,
          "date": "Sun 12 Feb 2023 18:57",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Thinking A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 806627,
          "date": "Sun 12 Feb 2023 18:55",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Thinking A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790947,
          "date": "Sat 28 Jan 2023 19:43",
          "username": "\t\t\t\tirene7\t\t\t",
          "content": "C - smae question from topic 1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776708,
          "date": "Sun 15 Jan 2023 16:12",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct<br>SCP policy allow everything except cloudtrail. SCP is boundary but it does not give allow to IAM users. You have to configure allow for every IAM",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 775352,
          "date": "Sat 14 Jan 2023 13:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Add s3:CreateBucket with “Allow” effect to the SCP.<br><br>This is the correct answer because the SCP is denying all actions for cloudtrail, including all actions for creating new S3 buckets. By adding the s3:CreateBucket action with an \\\"Allow\\\" effect, the developers will be able to create new S3 buckets.<br>B.  Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.<br><br>This option would not solve the problem because it would still be denied the ability to create new S3 buckets.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>s3:CreateBucket is already allowed in the first wildcard, and giving it explcitely would not include any cloudtrail actions with it ! In my opinion, A has no effect.</li><li>C.  Instruct the developers to add Amazon S3 permissions to their IAM entities.<br><br>This option would not solve the problem because the problem is that the SCP is denying all actions for cloudtrail, not that the developers are lacking permissions in their IAM entities.<br>D.  Remove the SCP from account 1111-1111-1111.<br><br>This option would solve the problem, but it would not be ideal because it would remove all restrictions on the account, including restrictions on cloudtrail actions which may be necessary for security and compliance reasons.</li><li>This policy allows all actions (indicated by the \\\"Action\\\": \\\"\\\" line) on all resources (indicated by the \\\"Resource\\\": \\\"\\\" line) in the AWS account, except for CloudTrail actions (indicated by the \\\"Action\\\": \\\"cloudtrail:*\\\" line). The \\\"Effect\\\": \\\"Deny\\\" line specifies that any CloudTrail actions will be denied. This means that the user or role that this policy is associated with will not be able to perform any CloudTrail actions, such as starting or stopping a trail or getting trail status. This can be useful if the user or role should not have access to CloudTrail functionality.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825792,
          "date": "Wed 01 Mar 2023 13:11",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "s3:CreateBucket is already allowed in the first wildcard, and giving it explcitely would not include any cloudtrail actions with it ! In my opinion, A has no effect.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775353,
          "date": "Sat 14 Jan 2023 13:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Instruct the developers to add Amazon S3 permissions to their IAM entities.<br><br>This option would not solve the problem because the problem is that the SCP is denying all actions for cloudtrail, not that the developers are lacking permissions in their IAM entities.<br>D.  Remove the SCP from account 1111-1111-1111.<br><br>This option would solve the problem, but it would not be ideal because it would remove all restrictions on the account, including restrictions on cloudtrail actions which may be necessary for security and compliance reasons.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This policy allows all actions (indicated by the \\\"Action\\\": \\\"\\\" line) on all resources (indicated by the \\\"Resource\\\": \\\"\\\" line) in the AWS account, except for CloudTrail actions (indicated by the \\\"Action\\\": \\\"cloudtrail:*\\\" line). The \\\"Effect\\\": \\\"Deny\\\" line specifies that any CloudTrail actions will be denied. This means that the user or role that this policy is associated with will not be able to perform any CloudTrail actions, such as starting or stopping a trail or getting trail status. This can be useful if the user or role should not have access to CloudTrail functionality.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775356,
          "date": "Sat 14 Jan 2023 13:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "This policy allows all actions (indicated by the \\\"Action\\\": \\\"\\\" line) on all resources (indicated by the \\\"Resource\\\": \\\"\\\" line) in the AWS account, except for CloudTrail actions (indicated by the \\\"Action\\\": \\\"cloudtrail:*\\\" line). The \\\"Effect\\\": \\\"Deny\\\" line specifies that any CloudTrail actions will be denied. This means that the user or role that this policy is associated with will not be able to perform any CloudTrail actions, such as starting or stopping a trail or getting trail status. This can be useful if the user or role should not have access to CloudTrail functionality.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a monolithic application that is critical to the company's business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company's application team receives a directive from the legal department to back up the data from the instance's encrypted Amazon Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket. The application team does not have the administrative SSH key pair for the instance. The application must continue to serve the users.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
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
          "id": 775361,
          "date": "Sat 14 Jan 2023 13:23",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is C.  Taking a snapshot of the EBS volume using Amazon Data Lifecycle Manager (DLM) will meet the requirements because it allows you to create a backup of the volume without the need to access the instance or its SSH key pair. Additionally, DLM allows you to schedule the backups to occur at specific intervals and also enables you to copy the snapshots to an S3 bucket. This approach will not impact the running application as the backup is performed on the EBS volume level.<br><br>Option A is not correct because the instance would need an IAM role with permission to write to S3 and access to the instance via Systems Manager Session Manager.<br><br>Option B is not correct because it would require stopping the instance, which would impact the running application.<br><br>Option D is not correct because it would require stopping the instance and creating a new EC2 instance, which would impact the running application.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Assuming that EBS is encrypted, I think that is much easier to run the copy command from AW system manager</li><li>thank you for correcting some of these answers and for the explanations to them</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786704,
          "date": "Tue 24 Jan 2023 17:45",
          "username": "\t\t\t\tmmendozaf\t\t\t",
          "content": "Assuming that EBS is encrypted, I think that is much easier to run the copy command from AW system manager",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775977,
          "date": "Sat 14 Jan 2023 23:32",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "thank you for correcting some of these answers and for the explanations to them",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 843559,
          "date": "Sun 19 Mar 2023 09:42",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "A for the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 842040,
          "date": "Fri 17 Mar 2023 15:09",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "Selected Answer: A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 839588,
          "date": "Wed 15 Mar 2023 07:23",
          "username": "\t\t\t\taqiao\t\t\t",
          "content": "AWS recommended to stop EC2 instances to create root volume snapshot<br>When you create a snapshot for an EBS volume that serves as a root device, we recommend that you stop the instance before taking the snapshot.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 833967,
          "date": "Thu 09 Mar 2023 13:50",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "A is correct<br>read carefully: a directive from the legal department to back up the data from the instance's encrypted Amazon Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket.<br> ... to back THE DATA from ... to S3. So, the legal department needs data itself, not the EBS that contains the data. That is why C is wrong!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825220,
          "date": "Tue 28 Feb 2023 20:51",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/ebs-copy-snapshot-data-s3-create-volume/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 823747,
          "date": "Mon 27 Feb 2023 14:47",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Answer is A.  Little config is needed to setup AWS Systems Manager Session Manager but its worth it here as the question says the app is critical to companies businessOnce you gain ec2 access, you can use all sorts of commands. just do >aws ec2 help and thats where I found this copy-snapshot command.<br><br>Aws doc about ec2 copy-snapshot command is below :<br>DESCRIPTION<br> Copiesa point-in-time snapshot of an EBS volume and stores it in Ama-<br> zon S3. You can copy a snapshot within the same Region, from one Region<br> toanother,or from a Region to an Outpost. You can't copy a snapshot<br> from an Outpost to a Region, from one Outpost to another, or within the<br> same Outpost.<br><br> You can use the snapshot to create EBS volumes or Amazon Machine Images<br> (AMIs).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I explored DLM but did not find suitable commands to copy to S3 although other options are there to create volumes,snapshots, AMIs etc. So I choose A and not C</li><li>Same here, there is this command https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-snapshot.html but the destination bucket is not under user control.</li><li>moreover, instance does not need to be shut down which is the greatest requirement here as the app is critical to the business here in question.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 823751,
          "date": "Mon 27 Feb 2023 14:49",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "I explored DLM but did not find suitable commands to copy to S3 although other options are there to create volumes,snapshots, AMIs etc. So I choose A and not C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Same here, there is this command https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-snapshot.html but the destination bucket is not under user control.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825175,
          "date": "Tue 28 Feb 2023 19:54",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "Same here, there is this command https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-snapshot.html but the destination bucket is not under user control.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823753,
          "date": "Mon 27 Feb 2023 14:50",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "moreover, instance does not need to be shut down which is the greatest requirement here as the app is critical to the business here in question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822306,
          "date": "Sun 26 Feb 2023 12:36",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "Yes, Systems Manager Session Manager can access an instance without requiring SSH keys.<br><br>Session Manager provides a secure, auditable way to access your instances using AWS Identity and Access Management (IAM) roles, rather than relying on SSH keys. When using Session Manager, you can control who has access to your instances, and you can audit their activity.<br><br>To use Session Manager, you need to have the required IAM permissions to start a session with an instance. Once you have those permissions, you can connect to an instance through the AWS Management Console, AWS CLI, or using the AWS SDKs. When you start a session, Session Manager establishes a secure connection between your computer and the instance.<br><br>In summary, Session Manager is an alternative to SSH that uses IAM roles for access control and doesn't require you to manage SSH keys.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820701,
          "date": "Fri 24 Feb 2023 17:14",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "A- Mission critical application so not feasible<br>C - Cant take snaptshot since its encrypted<br>D- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonS3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811156,
          "date": "Thu 16 Feb 2023 23:14",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Its A - Log on to Instance through SSM. For DLM, it will store on amazon manage S3 and you might not have control on S3......",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 810264,
          "date": "Thu 16 Feb 2023 05:53",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The answer is A, Amazon Linux 2 is mentioned because by default SSM manager is included with the AMI hence you can access the instances using Systems Manager. Just need to attach a role to the instances to allow it to write to an S3 bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809766,
          "date": "Wed 15 Feb 2023 17:54",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "The answer is C.  DLM is designed for EBS volume backups without downtime.<br>This is a classic case of AWS pointing you to a service that created just for this purpose.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 804918,
          "date": "Sat 11 Feb 2023 03:05",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "Changed my mind. I like C because it is ideal as an automated backup solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 804917,
          "date": "Sat 11 Feb 2023 03:01",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "According to ChatGPT, Option C, which involves taking a snapshot of the EBS volume using Amazon Data Lifecycle Manager (Amazon DLM) and then copying the data to Amazon S3, does not require the instance to be rebooted, so it should not cause downtime.<br><br>However, it's worth noting that while the backup is being performed, the EBS volume may experience an increase in I/O latency, which could potentially impact the performance of the application during the backup process. Therefore, it is recommended to perform the backup during a maintenance window or a low-traffic period to minimize the impact on users.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795816,
          "date": "Thu 02 Feb 2023 07:22",
          "username": "\t\t\t\ttatdatpham\t\t\t",
          "content": "The answer is A<br>Option C (Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.) does not meet the requirement of not having the administrative SSH key pair for the instance, which is needed for accessing the data on the EBS volume. The application team does not have access to the instance and cannot take a snapshot or copy the data to Amazon S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793238,
          "date": "Mon 30 Jan 2023 20:34",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "\\\"critical application\\\" and DLM is designed to protect EC2 EBSany disruption",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791918,
          "date": "Sun 29 Jan 2023 19:15",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I don't think C is correct because to copy the data to S3 you would need to create a volume from the snapshot and mount it in an EC2 instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to copy data from an Amazon S3 bucket m an AWS account to a new S3 bucket in a new AWS account. The solutions architect must implement a solution that uses the AWS CLI.<br><br>Which combination of steps will successfully copy the data? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>A. Create a bucket policy to allow the source bucket to list its contents and to put objects and set object ACLs in the destination bucket. Attach the bucket policy to the destination bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a bucket policy to allow a user in the destination account to list the source bucket's contents and read the source bucket's objects. Attach the bucket policy to the source bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM policy in the source account. Configure the policy to allow a user in the source account to list contents and get objects in the source bucket, and to list contents, put objects, and set object ACLs in the destination bucket. Attach the policy to the user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy in the destination account. Configure the policy to allow a user in the destination account to list contents and get objects in the source bucket, and to list contents, put objects, and set objectACLs in the destination bucket. Attach the policy to the user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Run the aws s3 sync command as a user in the source account. Specify the source and destination buckets to copy the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Run the aws s3 sync command as a user in the destination account. Specify the source and destination buckets to copy the data.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 779908,
          "date": "Wed 18 Jan 2023 12:09",
          "username": "\t\t\t\ticassp\t\t\t",
          "content": "\\\"The above command should be executed with destination AWS IAM user account credentials only otherwise the copied objects in destination S3 bucket will still have the source account permissions and won't be accessible by destination account users.\\\" According to https://medium.com/tensult/copy-s3-bucket-objects-across-aws-accounts-e46c15c4b9e1.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are correct, step E should be executed using the IAM user credentials from the destination account. This is because when objects are copied from one bucket to another, the object's permissions (ACLs) are also copied. Therefore, if the objects are copied using the IAM user credentials from the source account, the objects will have the same permissions as they did in the source bucket, which may not include permissions for the user in the destination account. By using the IAM user credentials from the destination account, the objects will have the appropriate permissions for the user in the destination account once they are copied.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 780163,
          "date": "Wed 18 Jan 2023 16:45",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "You are correct, step E should be executed using the IAM user credentials from the destination account. This is because when objects are copied from one bucket to another, the object's permissions (ACLs) are also copied. Therefore, if the objects are copied using the IAM user credentials from the source account, the objects will have the same permissions as they did in the source bucket, which may not include permissions for the user in the destination account. By using the IAM user credentials from the destination account, the objects will have the appropriate permissions for the user in the destination account once they are copied.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 780164,
          "date": "Wed 18 Jan 2023 16:47",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I switch to BDF;<br>Step B is necessary so that the user in the destination account has the necessary permissions to access the source bucket and list its contents, read its objects. <br><br>Step D is needed so that the user in the destination account has the necessary permissions to access the destination bucket and list contents, put objects, and set object ACLs<br><br>Step F is necessary because the aws s3 sync command needs to be run using the IAM user credentials from the destination account, so that the objects will have the appropriate permissions for the user in the destination account once they are copied.<br><br>The other choices are not correct because :A.  and C.  are about creating policies in the source account but the user who wants to access the data is in the destination accountE.  is about running the command with the source account, which is not suitable because it will lead to copied objects in destination S3 bucket still have the source account permissions and won't be accessible by destination account users.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 825115,
          "date": "Tue 28 Feb 2023 19:05",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Logical answer : Who ever uploads to a bucket becomes its owner. So A should ring a flaw in it. Similar issue in C.  So straight away, A, C are wrong. that points to B,D to be correct. Refer https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-data-from-an-s3-bucket-in-one-account-and-region-to-another-account-and-region.html<br><br>Now E or F ? the hint is in D.  Destination account user has the necessary privileges to get/put objects permission. So choose destination account or run sync/copy commands. So the answer should be B, D , F",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 823918,
          "date": "Mon 27 Feb 2023 17:01",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "The parts BDF fit together in a way that works. <br><br>Ithink choosing this direction (pulling from the destination account) is slightly more secure than thenthe other other way round(pushing from source to destination) as only read access is granted to the foreign account but no write access - especially regarding human error: one cannot accidentally tamper with the source, so the worst thing that could happen is that one needs to sync again. The other options don't fit together with other parts.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793246,
          "date": "Mon 30 Jan 2023 20:42",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "BDF are the answers",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 776816,
          "date": "Sun 15 Jan 2023 17:38",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "BCE<br>Source user must have role that can write to destination bucket",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775424,
          "date": "Sat 14 Jan 2023 13:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The question is asking for a combination of steps that will successfully copy the data using the AWS CLI.<br><br>The correct answer would be B, D and E. <br><br>Step B: You must create a bucket policy in the source account that allows the user in the destination account to list and read the source bucket's contents.<br>Step D: You must create an IAM policy in the destination account that allows the user to list, put and set object ACLs in the destination bucket<br>Step E: Run the aws s3 sync command as a user in the source account. Specify the source and destination buckets to copy the data.<br>By doing so, the solution architect will be able to copy the data from the source to the destination bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think it is ADF especially option F as option D is using user in destination account.</li><li>sorry, typo, BDF</li><li>I think that the answer is BDF.  If you select steps B and D, you must use a user in the destination account (option F)</li><li>If you are specifying Step D where you create an IAM policy in the destination account that allow a user in the destination account to access the source bucket, why are you choosing Step E instead of Step F where it specifies a user on the destination account rather in the source?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 780075,
          "date": "Wed 18 Jan 2023 15:17",
          "username": "\t\t\t\tpengpeng\t\t\t",
          "content": "I think it is ADF especially option F as option D is using user in destination account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry, typo, BDF</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781895,
          "date": "Fri 20 Jan 2023 06:01",
          "username": "\t\t\t\tpengpeng\t\t\t",
          "content": "sorry, typo, BDF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779362,
          "date": "Tue 17 Jan 2023 23:04",
          "username": "\t\t\t\tNicocacik\t\t\t",
          "content": "I think that the answer is BDF.  If you select steps B and D, you must use a user in the destination account (option F)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777407,
          "date": "Mon 16 Jan 2023 08:15",
          "username": "\t\t\t\tlochesistemas\t\t\t",
          "content": "If you are specifying Step D where you create an IAM policy in the destination account that allow a user in the destination account to access the source bucket, why are you choosing Step E instead of Step F where it specifies a user on the destination account rather in the source?",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>A. Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777275,
          "date": "Mon 16 Jan 2023 04:02",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/28312-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825167,
          "date": "Tue 28 Feb 2023 19:45",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "aws update-alias command has routing-config option to route the weighted % traffic<br>As is correct<br>https://aws.amazon.com/blogs/compute/implementing-canary-deployments-of-aws-lambda-functions-with-alias-traffic-shifting/<br># Point alias to new version, weighted at 5% (original version at 95% of traffic)<br>aws lambda update-alias --function-name myfunction --name myalias --routing-config '{\\\"AdditionalVersionWeights\\\" : {\\\"2\\\" : 0.05} }'",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 804922,
          "date": "Sat 11 Feb 2023 03:16",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "According to ChatGPT, The \\\"update-alias\\\" command is a feature of AWS Lambda service. It is used to update the configuration of a Lambda alias, including the routing configuration which can be used for canary releases, blue/green deployments, and other deployment strategies.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780169,
          "date": "Wed 18 Jan 2023 16:52",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load is the correct answer as it meets the requirement of supporting a canary release.<br><br>Option B is not correct because while it would allow for a canary release, it would involve deploying the new version of the application into a separate CloudFormation stack, which would be a more complex and time-consuming process compared to creating an alias for a new version of the Lambda function.<br><br>Option C is not correct because while it would allow for a canary release, it would involve creating a version for every new deployed Lambda function, which would be more complex and time-consuming process compared to creating an alias for a new version of the Lambda function.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D is not correct because AWS CodeDeploy is a deployment service that allows you to automate code deployments to a variety of compute services like EC2 and on-premises servers, but it does not support routing configuration for a canary release on AWS Lambda.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780171,
          "date": "Wed 18 Jan 2023 16:53",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option D is not correct because AWS CodeDeploy is a deployment service that allows you to automate code deployments to a variety of compute services like EC2 and on-premises servers, but it does not support routing configuration for a canary release on AWS Lambda.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776824,
          "date": "Sun 15 Jan 2023 17:44",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct.<br>D does not have routing to distribute load",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775459,
          "date": "Sat 14 Jan 2023 14:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and on-premises instances. CodeDeploy allows to perform a canary release, which is a technique that releases new versions of software to a small subset of users or systems before releasing it to the entire infrastructure. This makes it possible to test the new version of the software before releasing it to the entire population.<br><br>Option A creates an alias for every new deployed version of the Lambda function, but it doesn't include the ability to perform a canary release.<br>Option B Deploy the application into a new CloudFormation stack, and use an Amazon Route 53 weighted routing policy to distribute the load, this option can be used for canary release, but it is not the best solution for it.<br>Option C creates a version for every new deployed Lambda function, but it does not include the ability to perform a canary release.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You have 2 different answers.....I think it is better you delete this.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815588,
          "date": "Mon 20 Feb 2023 18:18",
          "username": "\t\t\t\tjaysparky\t\t\t",
          "content": "You have 2 different answers.....I think it is better you delete this.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC.  After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.<br><br>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?<br><br></p>",
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
          "id": 802654,
          "date": "Thu 09 Feb 2023 00:32",
          "username": "\t\t\t\ttinyflame\t\t\t",
          "content": "A=ALB cannot be used with SFTP<br>B = Correct<br>C=Storage Gateway is not an SFTP Server<br>D=NLB can be used with SFTP, but EC2 is single",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850952,
          "date": "Sun 26 Mar 2023 13:39",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the way to go..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775468,
          "date": "Sat 14 Jan 2023 14:59",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B is the correct answer. Migrating the SFTP server to AWS Transfer for SFTP will improve the reliability and scalability of the SFTP solution. AWS Transfer for SFTP is a fully managed SFTP service that enables the company to transfer files directly into and out of Amazon S3 using the SFTP protocol. By using this service, the company can offload the management of the SFTP server to AWS, which will provide high availability, scalability, and security. The company can then update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname, which will ensure that the SFTP server is reachable on the DNS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A, C and D do not provide the same level of scalability and reliability as AWS Transfer for SFTP. While placing the EC2 instance behind a load balancer can help improve availability, it will not necessarily improve scalability, and it would still require the company to manage the SFTP server. Option C , migrating the SFTP server to a file gateway in AWS Storage Gateway, would not necessarily improve the scalability and reliability of the SFTP solution, as it would still require the company to manage the SFTP server.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775469,
          "date": "Sat 14 Jan 2023 14:59",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A, C and D do not provide the same level of scalability and reliability as AWS Transfer for SFTP. While placing the EC2 instance behind a load balancer can help improve availability, it will not necessarily improve scalability, and it would still require the company to manage the SFTP server. Option C , migrating the SFTP server to a file gateway in AWS Storage Gateway, would not necessarily improve the scalability and reliability of the SFTP solution, as it would still require the company to manage the SFTP server.",
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
      "question_text": "<p>A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for VM Import. Use the AWS CLI to run the EC2 import command.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFS) share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy. Launch an EC2 instance that is based on the AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM. Register the VM with Systems Manager to be a managed instance. Use AWS Backup to create a snapshot of the VM and create an AMI. Launch an EC2 instance that is based on the AMI.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850954,
          "date": "Sun 26 Mar 2023 13:41",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the answer - OVF. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 825363,
          "date": "Tue 28 Feb 2023 23:56",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Use VM Import/Export. B is correct . https://aws.amazon.com/ec2/vm-import/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html<br>Prerequisites<br>Create an Amazon S3 bucket for storing the exported images or choose an existing bucket. The bucket must be in the Region where you want to import your VMs. For more information about S3 buckets, see the Amazon Simple Storage Service User Guide.<br><br>Create an IAM role named vmimport. For more information, see Required service role.<br><br>If you have not already installed the AWS CLI on the computer you'll use to run the import commands, see the AWS Command Line Interface User Guide.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 825367,
          "date": "Tue 28 Feb 2023 23:58",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html<br>Prerequisites<br>Create an Amazon S3 bucket for storing the exported images or choose an existing bucket. The bucket must be in the Region where you want to import your VMs. For more information about S3 buckets, see the Amazon Simple Storage Service User Guide.<br><br>Create an IAM role named vmimport. For more information, see Required service role.<br><br>If you have not already installed the AWS CLI on the computer you'll use to run the import commands, see the AWS Command Line Interface User Guide.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793948,
          "date": "Tue 31 Jan 2023 11:11",
          "username": "\t\t\t\tSignup_Nickname\t\t\t",
          "content": "I vote B<br>https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775472,
          "date": "Sat 14 Jan 2023 15:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for VM Import. Use the AWS CLI to run the EC2 import command. This approach allows the solutions architect to export the application as an image in OVF format, which preserves the software and configuration settings, and then import it into Amazon EC2 using the EC2 import command.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is incorrect because it uses AWS DataSync and FSx for Windows File Server to replicate the data store, but it doesn't preserve the software and configuration settings of the application.<br><br>Option C is incorrect because it uses AWS Storage Gateway to export a CIFS share, but it doesn't preserve the software and configuration settings of the application.<br><br>Option D is incorrect because it uses AWS Systems Manager and AWS Backup to create a snapshot of the VM, but it doesn't preserve the software and configuration settings of the application.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775473,
          "date": "Sat 14 Jan 2023 15:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is incorrect because it uses AWS DataSync and FSx for Windows File Server to replicate the data store, but it doesn't preserve the software and configuration settings of the application.<br><br>Option C is incorrect because it uses AWS Storage Gateway to export a CIFS share, but it doesn't preserve the software and configuration settings of the application.<br><br>Option D is incorrect because it uses AWS Systems Manager and AWS Backup to create a snapshot of the VM, but it doesn't preserve the software and configuration settings of the application.",
          "upvote_count": "2",
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
      "question_text": "<p>A video processing company has an application that downloads images from an Amazon S3 bucket, processes the images, stores a transformed image in a second S3 bucket, and updates metadata about the image in an Amazon DynamoDB table. The application is written in Node.js and runs by using an AWS Lambda function. The Lambda function is invoked when a new image is uploaded to Amazon S3.<br><br>The application ran without incident for a while. However, the size of the images has grown significantly. The Lambda function is now failing frequently with timeout errors. The function timeout is set to its maximum value. A solutions architect needs to refactor the application's architecture to prevent invocation failures. The company does not want to manage the underlying infrastructure.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. Modify the application deployment by building a Docker image that contains the application code. Publish the image to Amazon Elastic Container Registry (Amazon ECR).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of AWS Fargate. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Step Functions state machine with a Parallel state to invoke the Lambda function. Increase the provisioned concurrency of the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of Amazon EC2. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the application to store images on Amazon Elastic File System (Amazon EFS) and to store metadata on an Amazon RDS DB instance. Adjust the Lambda function to mount the EFS file share.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776832,
          "date": "Sun 15 Jan 2023 17:52",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A: create Docker image and save it to ECR<br>B: run this image on Fargate<br><br>No answer should have Lambda the will be time out<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are correct, both options A and B involve creating a Docker image of the application code and running it on Amazon Elastic Container Service (ECS) using either Fargate or EC2 as the launch type. These options would allow for more control over the resources allocated to the application and potentially prevent timeout errors. Option A is necessary to create the image and store it in a registry, and option B is necessary to run the image on Fargate which is a managed container orchestration service that eliminates the need for provisioning and scaling of the underlying infrastructure.</li></ul>",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 778216,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "You are correct, both options A and B involve creating a Docker image of the application code and running it on Amazon Elastic Container Service (ECS) using either Fargate or EC2 as the launch type. These options would allow for more control over the resources allocated to the application and potentially prevent timeout errors. Option A is necessary to create the image and store it in a registry, and option B is necessary to run the image on Fargate which is a managed container orchestration service that eliminates the need for provisioning and scaling of the underlying infrastructure.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778217,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A and B. <br>A.  Modify the application deployment by building a Docker image that contains the application code. Publish the image to Amazon Elastic Container Registry (Amazon ECR).<br><br>- This step is necessary to package the application code in a container and make it available for running on ECS.<br>B.  Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of AWS Fargate. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.<br><br>- This step is necessary to run the containerized application on Fargate, which is a fully managed container orchestration service that eliminates the need to provision and scale the underlying infrastructure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C and E are not correct because they don't address the problem of timeout errors. AWS Step Functions and Amazon Elastic File System (EFS) are services that can be used to coordinate and manage workflows and file storage respectively, but they don't help with the specific problem of the Lambda function timing out.<br><br>Option D is not correct because AWS Fargate is a serverless compute engine for containers that eliminates the need for provisioning and scaling the underlying infrastructure.<br>It means that the company does not have to manage the underlying infrastructure, which is what the company wants.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 778218,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C and E are not correct because they don't address the problem of timeout errors. AWS Step Functions and Amazon Elastic File System (EFS) are services that can be used to coordinate and manage workflows and file storage respectively, but they don't help with the specific problem of the Lambda function timing out.<br><br>Option D is not correct because AWS Fargate is a serverless compute engine for containers that eliminates the need for provisioning and scaling the underlying infrastructure.<br>It means that the company does not have to manage the underlying infrastructure, which is what the company wants.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 850956,
          "date": "Sun 26 Mar 2023 13:43",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A + B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842363,
          "date": "Sat 18 Mar 2023 00:31",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A+B makes sense to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 825481,
          "date": "Wed 01 Mar 2023 03:30",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Based on Serverless solutions used, need to go with Fargate in combination with either ECS/EC2.As company does not want to manage infra, we go for because Fargate-ECS combo as Fargate-EC2 needs more maintenance .That means D is out. E is obviously out EFS does not contribute to lambda invocation timeouts.<br>C is wrong because, increased concurrency (more lambda versions) won't solve timeouts.<br>That leaves A and B as right answers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 809640,
          "date": "Wed 15 Feb 2023 15:26",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "C is not right, question clearly said no involve infrastructure, EC2 is a infrastructure, Lamda time out 15 mins.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 793269,
          "date": "Mon 30 Jan 2023 20:59",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "lamda will time out<br>A: create Docker image and save it to ECR<br>B: run this image on Fargate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 792049,
          "date": "Sun 29 Jan 2023 21:42",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "AB makes most sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 775484,
          "date": "Sat 14 Jan 2023 15:11",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B and C are correct choices for this question.<br><br>B: Creating a new Amazon Elastic Container Service (ECS) task definition with a compatibility type of AWS Fargate and adjusting the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3 can help to prevent invocation failures by breaking up the image processing work into smaller tasks that can be processed concurrently.<br><br>C: Creating an AWS Step Functions state machine with a Parallel state to invoke the Lambda function and increasing the provisioned concurrency of the Lambda function can also help to prevent invocation failures by allowing the Lambda function to handle more requests in parallel.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is not a correct answer because it does not address the issue of the Lambda function timing out.<br><br>Option D is not a correct answer because it is similar to option B, but it uses Amazon EC2 instead of AWS Fargate which is a more modern and serverless way to run containerized applications.<br><br>Option E is not a correct answer because it does not address the issue of the Lambda function timing out.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 775485,
          "date": "Sat 14 Jan 2023 15:11",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is not a correct answer because it does not address the issue of the Lambda function timing out.<br><br>Option D is not a correct answer because it is similar to option B, but it uses Amazon EC2 instead of AWS Fargate which is a more modern and serverless way to run containerized applications.<br><br>Option E is not a correct answer because it does not address the issue of the Lambda function timing out.",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an organization in AWS Organizations. The company is using AWS Control Tower to deploy a landing zone for the organization. The company wants to implement governance and policy enforcement. The company must implement a policy that will detect Amazon RDS DB instances that are not encrypted at rest in the company's production OU.<br><br>Which solution will meet this requirement?<br><br></p>",
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
              "choice": "<p>A. Turn on mandatory guardrails in AWS Control Tower. Apply the mandatory guardrails to the production OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the appropriate guardrail from the list of strongly recommended guardrails in AWS Control Tower. Apply the guardrail to the production OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Config to create a new mandatory guardrail. Apply the rule to all accounts in the production OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom SCP in AWS Control Tower. Apply the SCP to the production OU.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850957,
          "date": "Sun 26 Mar 2023 13:45",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Enable the appropriate guardrail",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829490,
          "date": "Sun 05 Mar 2023 00:35",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Mandatory controls are owned by AWS Control Tower, and they apply to every OU on your landing zone. These controls are applied by default when you set up your landing zone, and they can't be deactivated.<br>The solution requirement falls under a proactive(Recommended Control). <br>https://docs.aws.amazon.com/controltower/latest/userguide/rds-rules.html#ct-rds-pr-16-description<br>Optional controls are OU specific.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 825505,
          "date": "Wed 01 Mar 2023 04:46",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Tip - As this detective guardrail is available, answer is B.  But if the guardrail is not available in that predefined list, the answer would be --C https://aws.amazon.com/blogs/mt/aws-control-tower-detective-guardrails-as-an-aws-config-conformance-pack/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 809646,
          "date": "Wed 15 Feb 2023 15:29",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "question is asking for detection, not mandate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 787745,
          "date": "Wed 25 Jan 2023 15:38",
          "username": "\t\t\t\tpitakk\t\t\t",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-controls.html#disallow-rds-storage-unencrypted<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The only thing is that this option talks about guardrails, while the article talks about controls, not mandatory.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792053,
          "date": "Sun 29 Jan 2023 21:51",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "The only thing is that this option talks about guardrails, while the article talks about controls, not mandatory.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775495,
          "date": "Sat 14 Jan 2023 15:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  AWS Control Tower provides a set of \\\"strongly recommended guardrails\\\" that can be enabled to implement governance and policy enforcement. One of these guardrails is \\\"Encrypt Amazon RDS instances\\\" which will detect RDS DB instances that are not encrypted at rest. By enabling this guardrail and applying it to the production OU, the company will be able to enforce encryption for RDS instances in the production environment.<br><br>Option A is incorrect because mandatory guardrails are pre-defined by AWS and cannot be customized.<br>Option C is incorrect because AWS Config does not provide mandatory guardrails for RDS instances.<br>Option D is incorrect because AWS Control Tower does not provide a feature called custom SCP (Service Control Policy), it uses guardrails instead.",
          "upvote_count": "3",
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
      "question_text": "<p>A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.<br><br>The company's existing architecture includes the following:<br><br>• A VPC with private and public subnets, and a NAT gateway.<br>• Site-to-Site VPN for connectivity with the on-premises environment.<br>• EC2 security groups with direct SSH access from the on-premises environment.<br><br>The company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.<br><br>Which strategy should a solutions architect use?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
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
          "id": 850959,
          "date": "Sun 26 Mar 2023 13:47",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "D for sure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829492,
          "date": "Sun 05 Mar 2023 00:43",
          "username": "\t\t\t\tAjani\t\t\t",
          "content": "Why its NOT A<br>To connect using the Amazon EC2 console, the instance must have a public IPv4 address.<br><br>If the instance does not have a public IP address, you can connect to the instance over a private network using an SSH client or the EC2 Instance Connect CLI. For example, you can connect from within the same VPC or through a VPN connection, transit gateway, or AWS Direct Connect.<br><br>EC2 Instance Connect does not support connecting using an IPv6 address.<br>going with D:",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827297,
          "date": "Thu 02 Mar 2023 20:10",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "A is wrong because Instance connect does not provided auditing<br>B is wrong because it mentions OS audit logs. we need to audit SSH trafic<br>C is wrong because we want to audit not remediate as asked in question. config service is to record <br>using predefined rules and remediate as well<br><br>D is correct because,<br>By attaching the AmazonSSMManagedInstanceCore policy to an IAM role, EC2 instances can be controlled and monitored through the Systems Manager service, enabling capabilities such as remote instance management, patching, and compliance reporting. (ChatGPT response its answers are brief and helpful sometimes)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814694,
          "date": "Mon 20 Feb 2023 01:36",
          "username": "\t\t\t\tlygf\t\t\t",
          "content": "Need to be able to audit the commands ran on the machine.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 810003,
          "date": "Wed 15 Feb 2023 22:34",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "I don't understand why it can't be A for this one. Why is AWS Systems Manager Session better than EC2 Instance Connect? They both require installing something on the instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For EC2 instance connect there are a few requirements:<br>- instance has public IP (the instances in question are private)<br>- you have port 22 open (A says remove port 22 inbound)</li><li>Could option A audit the commands ran on the server, as required by the question? I knew D certainly can.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829378,
          "date": "Sat 04 Mar 2023 21:23",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "For EC2 instance connect there are a few requirements:<br>- instance has public IP (the instances in question are private)<br>- you have port 22 open (A says remove port 22 inbound)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814693,
          "date": "Mon 20 Feb 2023 01:35",
          "username": "\t\t\t\tlygf\t\t\t",
          "content": "Could option A audit the commands ran on the server, as required by the question? I knew D certainly can.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804943,
          "date": "Sat 11 Feb 2023 04:09",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "According to ChatGPT,<br><br>Yes, AWS Systems Manager Session Manager can track the commands that are executed during a session. The session is recorded in the form of a log, which can be accessed and reviewed later. The log contains information such as the start time, end time, and the user who initiated the session, as well as a record of all the commands executed during the session, including their output and exit codes. This information can be useful for auditing purposes, troubleshooting, and compliance reporting.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 802678,
          "date": "Thu 09 Feb 2023 00:52",
          "username": "\t\t\t\ttinyflame\t\t\t",
          "content": "provide auditing of commands run by the engineers= B Only",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775506,
          "date": "Sat 14 Jan 2023 15:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D.  This strategy uses IAM roles and AWS Systems Manager to provide secure and auditable SSH access to the instances. The IAM role is attached to all the EC2 instances and has the AmazonSSMManagedInstanceCore managed policy attached, which allows the instances to be managed by Systems Manager. The engineers then install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager. This approach provides secure and auditable access to the instances without the need for IP-based security group rules or additional infrastructure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A uses EC2 Instance Connect to provide secure and auditable SSH access to the instances, but it requires additional infrastructure and configuration. <br><br>Option B provides auditing of commands run by the engineers, but it relies on IP-based security group rules, which can be difficult to manage and may not be as secure as using IAM roles. <br><br>Option C uses AWS Config and Firewall Manager to automatically remediate changes to security group rules, but it still relies on IP-based security group rules and does not provide an auditable method of access to the instances.</li><li>For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775507,
          "date": "Sat 14 Jan 2023 15:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A uses EC2 Instance Connect to provide secure and auditable SSH access to the instances, but it requires additional infrastructure and configuration. <br><br>Option B provides auditing of commands run by the engineers, but it relies on IP-based security group rules, which can be difficult to manage and may not be as secure as using IAM roles. <br><br>Option C uses AWS Config and Firewall Manager to automatically remediate changes to security group rules, but it still relies on IP-based security group rules and does not provide an auditable method of access to the instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775508,
          "date": "Sat 14 Jan 2023 15:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS Organizations allows developers to experiment on AWS. As part of the landing zone that the company has deployed, developers use their company email address to request an account. The company wants to ensure that developers are not launching costly services or running services unnecessarily. The company must give developers a fixed monthly budget to limit their AWS costs.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>A. Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Budgets to create a fixed monthly budget for each developer's account as part of the account creation process.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP to deny access to costly services and components. Apply the SCP to the developer accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy to deny access to costly services and components. Apply the IAM policy to the developer accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Budgets alert action to terminate services when the budgeted amount is reached. Configure the action to terminate all services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850961,
          "date": "Sun 26 Mar 2023 13:53",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "BCF -SCP is more efficient at restrictions than using IAM across accounts.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 841507,
          "date": "Fri 17 Mar 2023 03:00",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "First sentence \\\"A company that uses AWS Organizations...\\\" -<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html<br><br>It is BCF - when they are granted access to the AWS Organization, you will want to set the SCP for the: OrganizationAccountAccessRole. Yes, you \\\"could create\\\" a new IAM role specific to developers, but you can create a SCP for only what is necessary for the developers to do their job.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 834006,
          "date": "Thu 09 Mar 2023 14:41",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "Invoke an AWS Lambda function to terminate all services<br>Is there a Lambda to terminate all services?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823841,
          "date": "Mon 27 Feb 2023 15:57",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "I ignore everyone here answer includes C and D. <br>\\\"deny access to costly services and components.\\\" What does that mean? WHO is going to decide which services are costly one by one? Come on guys.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer should be A-B-FA.  Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.B.  Use AWS Budgets to create a fixed monthly budget for each developer's account as part of the account creation process.F.  Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823852,
          "date": "Mon 27 Feb 2023 16:01",
          "username": "\t\t\t\tlkyixoayffasdrlaqd\t\t\t",
          "content": "Answer should be A-B-FA.  Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.B.  Use AWS Budgets to create a fixed monthly budget for each developer's account as part of the account creation process.F.  Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 820771,
          "date": "Fri 24 Feb 2023 18:24",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "I prefer D over C as IAM cant be applied to Account",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 819955,
          "date": "Fri 24 Feb 2023 01:55",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "Not D as you can't apply IAM policy to an AWS Account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 812390,
          "date": "Fri 17 Feb 2023 22:18",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "BCF<br>I dont think C is a valid answer [ strictly speaking ], <br>In a Landing Zone you cant apply SCPs directly to accounts, <br>You apply guardrails or controls,,,, that can have scp inside as artifacts. <br><br>Either way an account is not a principal you can apply either an IAM policy to an account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 811171,
          "date": "Thu 16 Feb 2023 23:46",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Clear - BCF - SCP is preferable over IAM",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 810272,
          "date": "Thu 16 Feb 2023 06:16",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The questions is asking which steps will ensure that developers are not launching costly services or running services unnecessarily that will meet the requirements.Both E and F mention \\\"Terminate All Services\\\", which implies it will terminate all of the services once the budget is exceeded.B and C are correct and so is D by process of elimination.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The moderator remove the above comment and forgot to see the word running services so BCF seems logical in this case.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810277,
          "date": "Thu 16 Feb 2023 06:21",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The moderator remove the above comment and forgot to see the word running services so BCF seems logical in this case.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810009,
          "date": "Wed 15 Feb 2023 22:37",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "BDF<br>I see some votes for C over D, but that can't be because you can't apply a policy to an account. Additionally, an SCP would make more sense for a situation where you don't want anyone in the account to use the services",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 809653,
          "date": "Wed 15 Feb 2023 15:37",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "IAM should apply to user/groups, not accounts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 806628,
          "date": "Sun 12 Feb 2023 18:56",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Thinking A because perhaps you can do the below:<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": \\\"*\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>},<br>{<br>\\\"Sid\\\": \\\"DenyCloudTrail\\\",<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"cloudtrail:*\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>},<br>{<br>\\\"Sid\\\": \\\"AllowS3CreateBucket\\\",<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": \\\"s3:CreateBucket\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br>}<br>The first \\\"Allow\\\" statement in the SCP allows all actions on all resources, which would allow the creation of S3 buckets. However, the second \\\"Deny\\\" statement specifically denies all cloudtrail actions, which could potentially impact the ability to create S3 buckets if there is a dependency on cloudtrail for that action. To ensure that the developers are able to create S3 buckets, a new statement with \\\"Allow\\\" effect for the s3:CreateBucket action should be added to the SCP.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804960,
          "date": "Sat 11 Feb 2023 04:34",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I mean BCF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 804957,
          "date": "Sat 11 Feb 2023 04:33",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I go for C vs D because accounts usually mean AWS account in the context of AWS Organization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 795498,
          "date": "Wed 01 Feb 2023 21:24",
          "username": "\t\t\t\tjojom19980\t\t\t",
          "content": "BCF is the correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 793275,
          "date": "Mon 30 Jan 2023 21:06",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "BDF seems ok",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 787088,
          "date": "Wed 25 Jan 2023 00:42",
          "username": "\t\t\t\tharleydog\t\t\t",
          "content": "You don't attach a policy to an account, you attach a policy to a user, group, or role.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications in an AWS account that is named Source. The account is in an organization in AWS Organizations. One of the applications uses AWS Lambda functions and stores inventory data in an Amazon Aurora database. The application deploys the Lambda functions by using a deployment package. The company has configured automated backups for Aurora.<br><br>The company wants to migrate the Lambda functions and the Aurora database to a new AWS account that is named Target. The application processes critical data, so the company must minimize downtime.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the automated Aurora DB cluster snapshot with the Target account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the Aurora DB cluster with the Target account by using AWS Resource Access Manager {AWS RAM). Grant the Target account permission to clone the Aurora DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions and the Aurora DB cluster with the Target account. Grant the Target account permission to clone the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions with the Target account. Share the automated Aurora DB cluster snapshot with the Target account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850962,
          "date": "Sun 26 Mar 2023 13:55",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the way forward",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827395,
          "date": "Thu 02 Mar 2023 21:20",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "AWS RAM can share ec2 instances,lambdas, DB clusters, RDS, event Redshift clusters.<br>Refer AWS SA video here - https://www.youtube.com/watch?v=KL9SICG52zY<br>If company would not have had critical data, answer C is good. as existing app should not be down, we have to download lambda and then share. so answer is B.  other wise you can stop app and share with RAM (Resource shares)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793281,
          "date": "Mon 30 Jan 2023 21:12",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "B is correct. Move Lambda and Aurora both to target account",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792074,
          "date": "Sun 29 Jan 2023 22:19",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "B can be done with this: https://aws.amazon.com/about-aws/whats-new/2019/07/amazon_aurora_supportscloningacrossawsaccounts-/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 782866,
          "date": "Sat 21 Jan 2023 01:02",
          "username": "\t\t\t\tSK_Cert_master\t\t\t",
          "content": "B. <br>It seems that Lambda cannot be shared via RAM<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As per the above link, Lambda can be shared. Please see the \\\"Subnets\\\" section .</li><li>You cannot share lambda, but creating a Lambda in a shared subnet is allowed.</li><li>scratch that</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824843,
          "date": "Tue 28 Feb 2023 14:29",
          "username": "\t\t\t\tSatya80\t\t\t",
          "content": "As per the above link, Lambda can be shared. Please see the \\\"Subnets\\\" section .<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot share lambda, but creating a Lambda in a shared subnet is allowed.</li><li>scratch that</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825359,
          "date": "Tue 28 Feb 2023 23:46",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "You cannot share lambda, but creating a Lambda in a shared subnet is allowed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824917,
          "date": "Tue 28 Feb 2023 15:45",
          "username": "\t\t\t\tSatya80\t\t\t",
          "content": "scratch that",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776955,
          "date": "Sun 15 Jan 2023 19:59",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct. Move Lambda and Aurora both to target account<br>A: not move Aurora <br>C: Lambda not move<br>d: Lambda and Aurora both not moved",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775641,
          "date": "Sat 14 Jan 2023 16:48",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is option B.  This solution uses a combination of AWS Resource Access Manager (RAM) and automated backups to migrate the Lambda functions and the Aurora database to the Target account while minimizing downtime.<br><br>In this solution, the Lambda function deployment package is downloaded from the Source account and used to create new Lambda functions in the Target account. The Aurora DB cluster is shared with the Target account using AWS RAM and the Target account is granted permission to clone the Aurora DB cluster, allowing for a new copy of the Aurora database to be created in the Target account. This approach allows for the data to be migrated to the Target account while minimizing downtime, as the Target account can use the cloned Aurora database while the original Aurora database continues to be used in the Source account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is not the best solution because it doesn't share the Aurora DB cluster with the Target account and this would cause data inconsistencies as the Source and Target accounts would not share the same data.<br><br>Option C is not the best solution because, it does not specify how the data will be migrated and it would cause downtime as the Source and Target accounts are not sharing the same data.<br><br>Option D is not the best solution because it does not specify how the Lambda function will be migrated and it would cause data inconsistencies as the Source and Target accounts are not sharing the same data.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775643,
          "date": "Sat 14 Jan 2023 16:48",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is not the best solution because it doesn't share the Aurora DB cluster with the Target account and this would cause data inconsistencies as the Source and Target accounts would not share the same data.<br><br>Option C is not the best solution because, it does not specify how the data will be migrated and it would cause downtime as the Source and Target accounts are not sharing the same data.<br><br>Option D is not the best solution because it does not specify how the Lambda function will be migrated and it would cause data inconsistencies as the Source and Target accounts are not sharing the same data.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Python script on an Amazon EC2 instance to process data. The script runs every 10 minutes. The script ingests files from an Amazon S3 bucket and processes the files. On average, the script takes approximately 5 minutes to process each file The script will not reprocess a file that the script has already processed.<br><br>The company reviewed Amazon CloudWatch metrics and noticed that the EC2 instance is idle for approximately 40% of the time because of the file processing speed. The company wants to make the workload highly available and scalable. The company also wants to reduce long-term management overhead.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>A. Migrate the data processing script to an AWS Lambda function. Use an S3 event notification to invoke the Lambda function to process the objects when the company uploads the objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure Amazon S3 to send event notifications to the SQS queue. Create an EC2 Auto Scaling group with a minimum size of one instance. Update the data processing script to poll the SQS queue. Process the S3 objects that the SQS message identifies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the data processing script to a container image. Run the data processing container on an EC2 instance. Configure the container to poll the S3 bucket for new objects and to process the resulting objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the data processing script to a container image that runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Create an AWS Lambda function that calls the Fargate RunTaskAPI operation when the container processes the file. Use an S3 event notification to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775652,
          "date": "Sat 14 Jan 2023 16:55",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A, migrating the data processing script to an AWS Lambda function and using an S3 event notification to invoke the Lambda function to process the objects when the company uploads the objects. This solution meets the company's requirements of high availability and scalability, as well as reducing long-term management overhead, and is likely to be the most cost-effective option.<br><br>Option B involves creating an SQS queue and configuring S3 to send event notifications to it. The data processing script would then poll the SQS queue and process the S3 objects that the SQS message identifies. While this option also provides high availability and scalability, it is less cost-effective than using Lambda, as it requires additional resources such as an SQS queue and an EC2 Auto Scaling group.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C, migrating the data processing script to a container image and running it on an EC2 instance, would still require the company to manage the underlying EC2 instances and may not be as cost-effective as using Lambda.<br><br>Option D, migrating the data processing script to a container image that runs on Amazon ECS on AWS Fargate, would still require the company to manage the underlying infrastructure and may not be as cost-effective as using Lambda. Additionally, it introduces additional complexity by adding a Lambda function that calls the Fargate RunTask API operation.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775653,
          "date": "Sat 14 Jan 2023 16:55",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C, migrating the data processing script to a container image and running it on an EC2 instance, would still require the company to manage the underlying EC2 instances and may not be as cost-effective as using Lambda.<br><br>Option D, migrating the data processing script to a container image that runs on Amazon ECS on AWS Fargate, would still require the company to manage the underlying infrastructure and may not be as cost-effective as using Lambda. Additionally, it introduces additional complexity by adding a Lambda function that calls the Fargate RunTask API operation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776962,
          "date": "Sun 15 Jan 2023 20:06",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct, it provide HA, scale, less management. Task only need 5 minutes<br>B: enen more complex<br>C: container still run on one EC2, not scale<br>d: need container, Farget and Lambda. Complex than A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 850965,
          "date": "Sun 26 Mar 2023 13:58",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Migrate the data processing script to an AWS Lambda function.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 849977,
          "date": "Sat 25 Mar 2023 10:50",
          "username": "\t\t\t\tAsagumo\t\t\t",
          "content": "There are two points of concern when choosing Lambda in the following two ways<br>The fact that the original EC2 specs are so fast that it may take only 5 minutes to complete.<br>The fact that the average time is only 5 minutes, so there may be cases where the time exceeds 15 minutes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 842398,
          "date": "Sat 18 Mar 2023 02:11",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A best practice to handle files in S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830409,
          "date": "Mon 06 Mar 2023 00:03",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "It asks for the most cost effective solution.<br>While Lambda may be simple and cheap for if you have only a few invocations and low memory requirements. <br>As processing is called every 10 minutes. The EC2 is indeed idle for 40% of the time, 60% of the time its under load.But we are asked to look at how it scales - in regards to cost.<br>We have a 60% used EC2. Lambda costs explode when it scales.<br>Lambda is the by far most expensive solution.<br>B) is more cost effective.<br>(Who votes for Lambda when it comes to cost for processing big load, never had to pay the AWS bill for it.)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also \\\"long-term management overhead\\\" should be reduced. Ec2 the long term management overhead is way lower than maintaining Lambda.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 830413,
          "date": "Mon 06 Mar 2023 00:12",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "Also \\\"long-term management overhead\\\" should be reduced. Ec2 the long term management overhead is way lower than maintaining Lambda.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827456,
          "date": "Thu 02 Mar 2023 22:28",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "A and D are good but A is most cost effective as asked in question. B has only one instance that means not highly available. C has container/ec2 combo with more work on ec2 which is cost ineffective and more operating effort.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is not cost effective and not good.. (meant C in above comment)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 827458,
          "date": "Thu 02 Mar 2023 22:29",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "D is not cost effective and not good.. (meant C in above comment)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793296,
          "date": "Mon 30 Jan 2023 21:29",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "the script takes approximately 5 minutes==>Lamda is the simpliest soltion (compared to D)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company in North America plans to release a new online web application to its customers on AWS. The company will launch the application in the us-east-1 Region on Amazon EC2 instances. The application must be highly available and must dynamically scale to meet user traffic. The company also wants to implement a disaster recovery environment for the application in the us-west-1 Region by using active-passive failover.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC.  Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC.  Place the Auto Scaling group behind the ALSet up the same configuration in the us-west-1 VPC.  Create an Amazon Route 53 hosted zone. Create separate records for each ALEnable health checks to ensure high availability between Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPCreate an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPPlace the Auto Scaling group behind the ALB.  Set up the same configuration in the us-west-1 VPCreate an Amazon Route 53 hosted zone. Create separate records for each ALB.  Enable health checks and configure a failover routing policy for each record.<br></p>",
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
          "id": 775667,
          "date": "Sat 14 Jan 2023 17:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is C.  Choice C meets the requirements for the application to be highly available and to dynamically scale to meet user traffic, as well as implementing a disaster recovery environment in the us-west-1 Region through active-passive failover.<br><br>In choice C, the company creates a VPC in us-east-1 and a VPC in us-west-1, and sets up an Application Load Balancer (ALB) and Auto Scaling group in both VPCs. The ALB extends across multiple Availability Zones in each VPC, and the Auto Scaling group deploys the EC2 instances across these Availability Zones. The Auto Scaling group is placed behind the ALB, which allows for automatic scaling of the instances to meet user traffic.<br><br>An Amazon Route 53 hosted zone is also created, with separate records for each ALB.  Health checks are enabled for each record, and a failover routing policy is configured. This allows for active-passive failover between the two regions, ensuring high availability for the application.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Choice A, B, and D do not fully meet the requirements of the disaster recovery environment in the us-west-1 Region and the failover routing policy because they do not include the necessary configurations for active-passive failover.<br><br>In choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice B, the VPCs in us-east-1 and us-west-1 are separate, and the configuration is replicated in both regions but there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.</li><li>Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775668,
          "date": "Sat 14 Jan 2023 17:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Choice A, B, and D do not fully meet the requirements of the disaster recovery environment in the us-west-1 Region and the failover routing policy because they do not include the necessary configurations for active-passive failover.<br><br>In choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice B, the VPCs in us-east-1 and us-west-1 are separate, and the configuration is replicated in both regions but there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775671,
          "date": "Sat 14 Jan 2023 17:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850967,
          "date": "Sun 26 Mar 2023 14:00",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C for DR",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827524,
          "date": "Thu 02 Mar 2023 23:59",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Active-Passive failover with primary and secondary records in Route53<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html<br>https://d1tcczg8b21j1t.cloudfront.net/strapi-assets/32_Route_53_health_checks_4_64165fc533.png<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>VPC Peering is good for fully accessing all resources in a shared env but thats not asked here, so A and D gets eliminated. B does not mention the weighted routing config enable ment although setup is good. So answer is C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827525,
          "date": "Fri 03 Mar 2023 00:03",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "VPC Peering is good for fully accessing all resources in a shared env but thats not asked here, so A and D gets eliminated. B does not mention the weighted routing config enable ment although setup is good. So answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793300,
          "date": "Mon 30 Jan 2023 21:33",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "active-passive failover==>a failover routing policy within route 53",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776964,
          "date": "Sun 15 Jan 2023 20:07",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct",
          "upvote_count": "3",
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
      "question_text": "<p>A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.<br><br>The IT support workers no longer want to maintain both their Active Directory and IAM user accounts. They want to be able to access the console by using their existing Active Directory credentials. The solutions architect is using AWS IAM Identity Center (AWS Single Sign-On) to implement this functionality.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure IAM Identity Center and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure IAM Identity Center and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure IAM Identity Center and select the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure IAM Identity Center and set the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778224,
          "date": "Mon 16 Jan 2023 21:35",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/69172-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>You are correct, I apologize for the oversight. To meet the requirements of the IT support workers, option D would be the correct solution:<br><br>This option will first enable all features in AWS Organizations, then create and configure an AD Connector to connect to the company's on-premises Active Directory. Then, it will configure IAM Identity Center (AWS SSO) and set the AD Connector as the identity source, allowing the IT support workers to access the console using their existing Active Directory credentials. Finally, it will create permission sets and map them to the existing groups within the company's Active Directory. This solution will also be cost-effective as it does not involve creating a new directory in AWS Directory Service.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 853716,
          "date": "Tue 28 Mar 2023 23:19",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "D as Vherman said below",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850969,
          "date": "Sun 26 Mar 2023 14:06",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Option D is the most cost-effective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 843198,
          "date": "Sat 18 Mar 2023 23:05",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "D is the correct answer.. B is wrong answer <br><br>From aws documentation:<br>Q: Which AWS accounts can I connect to IAM Identity Center?<br><br>You can add any AWS account managed using AWS Organizations to IAM Identity Center. You need to enable all features in your organizations to manage your accounts single sign-on.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837878,
          "date": "Mon 13 Mar 2023 12:12",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "D is correct<br>There is no IAM Identity Center feature in Organizations. hence, B is out<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes there is and it should be all you need to enable, therefore B is correct.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846152,
          "date": "Tue 21 Mar 2023 17:17",
          "username": "\t\t\t\tsenhorjorge\t\t\t",
          "content": "Yes there is and it should be all you need to enable, therefore B is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829394,
          "date": "Sat 04 Mar 2023 21:39",
          "username": "\t\t\t\tanita_student\t\t\t",
          "content": "See pre-requisites for AWS SSO: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827608,
          "date": "Fri 03 Mar 2023 03:40",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Question : Does aws AD connector configuration needs aws organization features turned on ?<br><br>ChatGPT : Answer No, AWS Microsoft AD Connector does not require AWS Organization features to be turned on.<br><br>The AWS Microsoft AD Connector is a standalone service that enables you to connect your AWS resources to an existing Microsoft Active Directory (AD) domain or forest. It does not depend on or require any specific AWS organization features or settings.<br><br>However, if you are using AWS Directory Service to create a new AD directory in AWS, you can choose to enable AWS Organizations integration to simplify the management of multiple AWS accounts. This integration allows you to manage AWS Directory Service directories across multiple AWS accounts and regions from a single master account.<br><br>But again, this is an optional feature and does not affect the functionality of the AWS Microsoft AD Connector itself. You can use the AWS Microsoft AD Connector without enabling AWS Organizations integration if you prefer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This link someone posted https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html<br>is in favor of D.  but I think, here in question , its a single account only. I am resistant to choose D, I could be wrong though.</li><li>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html<br><br>I assume single account is Management account and it does not need org features enabled.See above link and follow all steps listed there. no necessity to enable organizations features. I stick with B only.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827612,
          "date": "Fri 03 Mar 2023 03:45",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "This link someone posted https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html<br>is in favor of D.  but I think, here in question , its a single account only. I am resistant to choose D, I could be wrong though.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827630,
          "date": "Fri 03 Mar 2023 04:17",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html<br><br>I assume single account is Management account and it does not need org features enabled.See above link and follow all steps listed there. no necessity to enable organizations features. I stick with B only.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814656,
          "date": "Mon 20 Feb 2023 00:20",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Correcting the Answer - Its D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811198,
          "date": "Fri 17 Feb 2023 00:30",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "B - Why need all feature<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's D.  You need it s explained in https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html</li><li>Thanks, so its not B. </li><li>Exactly, it's not B.  Additionally, B refers to enabling IAM Identity Center in Organizations, and you would enable that in the IAM Identity Center console. What's confusing about D is that it does not refer to enabling it.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812999,
          "date": "Sat 18 Feb 2023 14:21",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "It's D.  You need it s explained in https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks, so its not B. </li><li>Exactly, it's not B.  Additionally, B refers to enabling IAM Identity Center in Organizations, and you would enable that in the IAM Identity Center console. What's confusing about D is that it does not refer to enabling it.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 814655,
          "date": "Mon 20 Feb 2023 00:19",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Thanks, so its not B. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly, it's not B.  Additionally, B refers to enabling IAM Identity Center in Organizations, and you would enable that in the IAM Identity Center console. What's confusing about D is that it does not refer to enabling it.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815554,
          "date": "Mon 20 Feb 2023 17:46",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Exactly, it's not B.  Additionally, B refers to enabling IAM Identity Center in Organizations, and you would enable that in the IAM Identity Center console. What's confusing about D is that it does not refer to enabling it.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811093,
          "date": "Thu 16 Feb 2023 21:58",
          "username": "\t\t\t\tDWsk\t\t\t",
          "content": "This one is tricky because in order to enable SSO in Organizations you need to enable all features. Thanks @moota for the explanation",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 809669,
          "date": "Wed 15 Feb 2023 15:59",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "just need a feature with AD connector",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 804976,
          "date": "Sat 11 Feb 2023 05:01",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "There are only two feature sets to turn on.<br>All features – The default feature set that is available to AWS Organizations. It includes all the functionality of consolidated billing, plus advanced features that give you more control over accounts in your organization.<br><br>Consolidated billing – This feature set provides shared billing functionality, but doesn't include the more advanced features of AWS Organizations. For example, you can't enable other AWS services to integrate with your organization to work across all of its accounts, or use policies to restrict what users and roles in different accounts can do. To use the advanced AWS Organizations features, you must enable all features in your organization.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The keyword is \\\"Accounts\\\" vs \\\"single account\\\", why is All Features required for a single account?</li><li>Take a look at this link: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html scroll down to \\\"If you've already set up AWS Organizations, make sure that all features are enabled. \\\"</li><li>Because the ONLY OTHER option is to enable Consolidated Billing, which is of no use here, hence All Features must be enabled</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 810287,
          "date": "Thu 16 Feb 2023 06:41",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The keyword is \\\"Accounts\\\" vs \\\"single account\\\", why is All Features required for a single account?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Take a look at this link: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html scroll down to \\\"If you've already set up AWS Organizations, make sure that all features are enabled. \\\"</li><li>Because the ONLY OTHER option is to enable Consolidated Billing, which is of no use here, hence All Features must be enabled</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825368,
          "date": "Tue 28 Feb 2023 23:58",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "Take a look at this link: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html scroll down to \\\"If you've already set up AWS Organizations, make sure that all features are enabled. \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819972,
          "date": "Fri 24 Feb 2023 02:16",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "Because the ONLY OTHER option is to enable Consolidated Billing, which is of no use here, hence All Features must be enabled",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795518,
          "date": "Wed 01 Feb 2023 21:50",
          "username": "\t\t\t\tjojom19980\t\t\t",
          "content": "AWS SSO is configured to use AD Connector as an identity source<br>https://controltower.aws-management.tools/aa/sso/ad_connector/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790732,
          "date": "Sat 28 Jan 2023 16:35",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "A<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html<br>Option B is wrong. AD Connector is a directory gateway that can redirect directory requests to your self-managed AD.  Hence you cannot create permission sets and map them with the AD. <br>Option C and D are wrong. There is no need to enable all features in AWS Organizations.<br>https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-sso.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br><br>AWS IAM Identity Center (successor to AWS Single Sign-On) \\\"requires a two-way trust\\\" so that it has permissions to read user and group information from your domain to synchronize user and group metadata. IAM Identity Center uses this metadata when assigning access to \\\"permission sets\\\" or applications.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791109,
          "date": "Sat 28 Jan 2023 22:26",
          "username": "\t\t\t\tKazr\t\t\t",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br><br>AWS IAM Identity Center (successor to AWS Single Sign-On) \\\"requires a two-way trust\\\" so that it has permissions to read user and group information from your domain to synchronize user and group metadata. IAM Identity Center uses this metadata when assigning access to \\\"permission sets\\\" or applications.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776968,
          "date": "Sun 15 Jan 2023 20:09",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775684,
          "date": "Sat 14 Jan 2023 17:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B. <br><br>In this solution, the company creates an organization in AWS Organizations, turns on the IAM Identity Center feature in Organizations, creates and configures an AD Connector to connect to the company's on-premises Active Directory, configures IAM Identity Center and selects the AD Connector as the identity source, and creates permission sets and maps them to the existing groups within the company's Active Directory.<br><br>This solution meets the requirements of the company's IT support workers, as it allows them to use their existing Active Directory credentials to access the AWS Management Console. Additionally, the solution is most cost-effective as it only uses the necessary features of AWS Organizations and IAM Identity Center to achieve the desired functionality without unnecessary costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is correct.. question explicitly says \\\"one account\\\". No need to enable all features in this case.</li><li>Choice A is not the best solution because it creates and configures a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory, which may lead to additional costs and complexity.<br>Choice C and D are not the best solutions as they turn on all features for the organization, which is not necessary to achieve the desired functionality and may lead to additional costs and complexity.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 804244,
          "date": "Fri 10 Feb 2023 12:30",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "B is correct.. question explicitly says \\\"one account\\\". No need to enable all features in this case.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775685,
          "date": "Sat 14 Jan 2023 17:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Choice A is not the best solution because it creates and configures a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory, which may lead to additional costs and complexity.<br>Choice C and D are not the best solutions as they turn on all features for the organization, which is not necessary to achieve the desired functionality and may lead to additional costs and complexity.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB. <br><br>Users who access the app from Australia have experienced uploads that take long periods of time. Sometimes the files fail to completely upload for these users. A solutions architect must improve the app's performance for these uploads.<br><br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
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
          "id": 850970,
          "date": "Sun 26 Mar 2023 14:08",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "AD all day",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 839772,
          "date": "Wed 15 Mar 2023 11:23",
          "username": "\t\t\t\taqiao\t\t\t",
          "content": "B is not suitable here, since it wants to improve upload experience, not download",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 793312,
          "date": "Mon 30 Jan 2023 21:43",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Transfer Accelerator + Multi-part uploads for files more 500MB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 793084,
          "date": "Mon 30 Jan 2023 18:13",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I like AD but I am unsure. If the users in US don't complain about issues, it must be because multi-part upload is already enabled, otherwise it would fail 50% of the times. If only Australia users complain, it must be something else... Maybe A+B is a better option, although B is not the most cost efficient certainly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776971,
          "date": "Sun 15 Jan 2023 20:11",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "AD is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775689,
          "date": "Sat 14 Jan 2023 17:14",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/74177-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answers would be A and D. <br>A.  Enabling S3 Transfer Acceleration on the S3 bucket and configuring the app to use the Transfer Acceleration endpoint for uploads will improve the app's performance for users in Australia by providing a fast and secure way to transfer large files over the Internet.<br>D.  Configuring the app to break the video files into chunks and using a multipart upload to transfer files to Amazon S3, will improve the app's performance for users in Australia by allowing them to upload large files in parallel, which can increase upload speed and reduce the risk of upload failures.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B.  Configuring an S3 bucket in each Region to receive the uploads and using S3 Cross-Region Replication to copy the files to the distribution S3 bucket is not the most cost-effective solution for this specific use case.<br>C.  Setting up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region is not a solution that would improve the performance of the uploads specifically for users in Australia.<br>E.  Modifying the app to add random prefixes to the files before uploading will not improve the app's performance for users in Australia.</li><li>yes, it will. Other options are more important, but sure random (rsp. any hash that distributes well) prefixes improve performance a lot.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 775690,
          "date": "Sat 14 Jan 2023 17:14",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Configuring an S3 bucket in each Region to receive the uploads and using S3 Cross-Region Replication to copy the files to the distribution S3 bucket is not the most cost-effective solution for this specific use case.<br>C.  Setting up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region is not a solution that would improve the performance of the uploads specifically for users in Australia.<br>E.  Modifying the app to add random prefixes to the files before uploading will not improve the app's performance for users in Australia.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yes, it will. Other options are more important, but sure random (rsp. any hash that distributes well) prefixes improve performance a lot.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 831582,
          "date": "Tue 07 Mar 2023 06:26",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "yes, it will. Other options are more important, but sure random (rsp. any hash that distributes well) prefixes improve performance a lot.",
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
      "question_text": "<p>An application is using an Amazon RDS for MySQL Multi-AZ DB instance in the us-east-1 Region. After a failover test, the application lost the connections to the database and could not re-establish the connections. After a restart of the application, the application re-established the connections.<br><br>A solutions architect must implement a solution so that the application can re-establish connections to the database without requiring a restart.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Aurora MySQL Serverless v1 DB instance. Migrate the RDS DB instance to the Aurora Serverless v1 DB instance. Update the connection settings in the application to point to the Aurora reader endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a two-node Amazon Aurora MySQL DB cluster. Migrate the RDS DB instance to the Aurora DB cluster. Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket. Export the database to Amazon S3 by using AWS Database Migration Service (AWS DMS). Configure Amazon Athena to use the S3 bucket as a data store. Install the latest Open Database Connectivity (ODBC) driver for the application. Update the connection settings in the application to point to the Athena endpoint<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850971,
          "date": "Sun 26 Mar 2023 14:09",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Create an RDS proxy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827647,
          "date": "Fri 03 Mar 2023 05:06",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Amazon RDS Proxy is a fully managed database proxy service for Amazon Relational Database Service (RDS) that makes applications more scalable, resilient, and secure. It allows applications to pool and share connections to an RDS database, which can help reduce database connection overhead, improve scalability, and provide automatic failover and high availability.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 809673,
          "date": "Wed 15 Feb 2023 16:03",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "proxy will be a buffer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777081,
          "date": "Sun 15 Jan 2023 22:29",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "B is correct.<br>C: Aurora is useless, Proxy is pointing to existing RDS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775693,
          "date": "Sat 14 Jan 2023 17:16",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct solution is B.  Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.<br><br>An RDS proxy is a service that allows you to pool and share connections to an RDS database. By using an RDS proxy, your application can automatically reconnect to the database after a failover event, without the need to restart the application.<br><br>Solution A, migrating to Aurora Serverless, may not solve the problem because Aurora Serverless does not support Multi-AZ.<br>Solution C and D are not the correct solutions because it does not solve the problem of reconnecting to the database after a failover event.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What?? Aurora does not support Multi AZ ? its a blunder !</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827645,
          "date": "Fri 03 Mar 2023 04:59",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "What?? Aurora does not support Multi AZ ? its a blunder !",
          "upvote_count": "1",
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
      "question_text": "<p>A company is building a solution in the AWS Cloud. Thousands or devices will connect to the solution and send data. Each device needs to be able to send and receive data in real time over the MQTT protocol. Each device must authenticate by using a unique X.509 certificate.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Set up AWS IoT Core. For each device, create a corresponding Amazon MQ queue and provision a certificate. Connect each device to Amazon MQ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Network Load Balancer (NLB) and configure it with an AWS Lambda authorizer. Run an MQTT broker on Amazon EC2 instances in an Auto Scaling group. Set the Auto Scaling group as the target for the NLConnect each device to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS IoT Core. For each device, create a corresponding AWS IoT thing and provision a certificate. Connect each device to AWS IoT Core.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon API Gateway HTTP API and a Network Load Balancer (NLB). Create integration between API Gateway and the NLB.  Configure a mutual TLS certificate authorizer on the HTTP API. Run an MQTT broker on an Amazon EC2 instance that the NLB targets. Connect each device to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775698,
          "date": "Sat 14 Jan 2023 17:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct solution is C.  Set up AWS IoT Core. For each device, create a corresponding AWS IoT thing and provision a certificate. Connect each device to AWS IoT Core.<br><br>AWS IoT Core is a fully managed service that enables secure, bi-directional communication between internet-connected devices and the AWS Cloud. It supports the MQTT protocol and includes built-in device authentication and access control. By using AWS IoT Core, the company can easily provision and manage the X.509 certificates for each device, and connect the devices to the service with minimal operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A, setting up Amazon MQ queues and connecting each device to a queue, would require significant operational overhead to manage the queues and ensure that each device is properly authenticated and connected.<br>Option B and D, using a Network Load Balancer (NLB) with a Lambda authorizer or an Amazon API Gateway HTTP API with a mutual TLS certificate authorizer and running an MQTT broker on EC2 instances, would also introduce more operational complexity and overhead compared to using AWS IoT Core.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775699,
          "date": "Sat 14 Jan 2023 17:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A, setting up Amazon MQ queues and connecting each device to a queue, would require significant operational overhead to manage the queues and ensure that each device is properly authenticated and connected.<br>Option B and D, using a Network Load Balancer (NLB) with a Lambda authorizer or an Amazon API Gateway HTTP API with a mutual TLS certificate authorizer and running an MQTT broker on EC2 instances, would also introduce more operational complexity and overhead compared to using AWS IoT Core.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850973,
          "date": "Sun 26 Mar 2023 14:10",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "I choose C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 842293,
          "date": "Fri 17 Mar 2023 21:54",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/iot/latest/developerguide/attach-to-cert.html<br><br>It is C,- you have to do this through IOT core, for the devices you need an AWS IOT \\\"thing\\\" and then provision a certificate for the thing. from there connect the device.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 834481,
          "date": "Thu 09 Mar 2023 23:23",
          "username": "\t\t\t\tforceli\t\t\t",
          "content": "-The AWS IoT Device SDKs support device communications using the MQTT<br>-Device connections to AWS IoT use X.509 client certificates <br>https://docs.aws.amazon.com/iot/latest/developerguide/iot-connect-devices.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry I meant \\\"C\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 834485,
          "date": "Thu 09 Mar 2023 23:30",
          "username": "\t\t\t\tforceli\t\t\t",
          "content": "Sorry I meant \\\"C\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793318,
          "date": "Mon 30 Jan 2023 21:46",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "C is correct (less op overhead than A)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777096,
          "date": "Sun 15 Jan 2023 22:49",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several workloads in a single AWS account. A new company policy states that engineers can provision only approved resources and that engineers must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access.<br><br>What should the solutions architect do to create the solution?<br><br></p>",
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
              "choice": "<p>A. Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers' IAM role to only allow access to Amazon S3 and AWS CloudFormation. Use AWS CloudFormation templates to provision resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision resources in AWS CloudFormation stacks. Update the IAM policy for the engineers' IAM role to only allow access to their own AWS CloudFormation stack.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850974,
          "date": "Sun 26 Mar 2023 14:12",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C.  Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827677,
          "date": "Fri 03 Mar 2023 06:11",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Tricky one. Question has a hint -\\\"to enforce the new restriction on the IAM role\\\" (note its not IAM policy as mentioned in option B) Creating a policy with approved resources first and assuming/applying that role to engineers will enforce. So C is correct. (B lacks enforcement, B is incorrect)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818543,
          "date": "Thu 23 Feb 2023 00:30",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "C IAM policy is allowing to provision of approved resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793139,
          "date": "Mon 30 Jan 2023 18:57",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "B does not enfore CF, otherwise it would work.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790740,
          "date": "Sat 28 Jan 2023 16:39",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "C<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/security-best-practices.html#use-iam-to-control-access<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779391,
          "date": "Wed 18 Jan 2023 00:20",
          "username": "\t\t\t\tNicocacik\t\t\t",
          "content": "You have to use a service role",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778256,
          "date": "Mon 16 Jan 2023 21:57",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>This option is also correct, it is a way to restrict the access of engineers to only be able to perform AWS CloudFormation actions and provision only approved resources. By giving only permissions to the IAM role used by engineers for CloudFormation and creating a separate IAM role with permissions to provision approved resources and then assigning that role to CloudFormation during stack creation, we ensure that engineers can only provision the approved resources using CloudFormation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both options B and C are correct.<br><br>Option B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>Option C: Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>Both options will enforce the new restriction on the IAM role that the engineers use for access, by limiting their access only to approved resources and only allowing them to provision resources using AWS CloudFormation. The specif</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778258,
          "date": "Mon 16 Jan 2023 21:59",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Both options B and C are correct.<br><br>Option B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>Option C: Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>Both options will enforce the new restriction on the IAM role that the engineers use for access, by limiting their access only to approved resources and only allowing them to provision resources using AWS CloudFormation. The specif",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777089,
          "date": "Sun 15 Jan 2023 22:40",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct<br>A: only allow CF, no approved resources<br>B: role allow approved resources and CF.  User can bypass CF<br>D: CF only<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation is correct but by itself it does not guarantee that the engineers will use only approved resources or will use AWS CloudFormation to provision them. The solutions architect should also implement additional controls such as using AWS Organizations to centrally manage access policies, using AWS Config to monitor and enforce compliance with the company's policies, or creating a custom resource in the CloudFormation templates to validate the provisioned resources against a predefined list of approved resources.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778254,
          "date": "Mon 16 Jan 2023 21:57",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation is correct but by itself it does not guarantee that the engineers will use only approved resources or will use AWS CloudFormation to provision them. The solutions architect should also implement additional controls such as using AWS Organizations to centrally manage access policies, using AWS Config to monitor and enforce compliance with the company's policies, or creating a custom resource in the CloudFormation templates to validate the provisioned resources against a predefined list of approved resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775709,
          "date": "Sat 14 Jan 2023 17:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>This solution will meet the requirement of enforcing the new restriction on the IAM role that the engineers use for access by only allowing the engineers to use AWS CloudFormation to provision the approved resources. By updating the IAM policy to only allow provisioning of approved resources and AWS CloudFormation, it will restrict the engineers from provisioning any other resources. Engineers will use AWS CloudFormation templates to create stacks with approved resources, which will ensure that only the approved resources are being provisioned.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it allow provision of approved resources and CF in same time. User can provision resources directly without CF</li><li>Other options are not the correct answer because:<br><br>Option A only allows access to Amazon S3 and AWS CloudFormation, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option C only allows AWS CloudFormation actions, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option D is incomplete, it doesn't specify how to restrict the engineers from provisioning resources other than the approved ones</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777936,
          "date": "Mon 16 Jan 2023 17:36",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "it allow provision of approved resources and CF in same time. User can provision resources directly without CF",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775710,
          "date": "Sat 14 Jan 2023 17:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Other options are not the correct answer because:<br><br>Option A only allows access to Amazon S3 and AWS CloudFormation, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option C only allows AWS CloudFormation actions, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option D is incomplete, it doesn't specify how to restrict the engineers from provisioning resources other than the approved ones",
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
      "question_text": "<p>A solutions architect is designing the data storage and retrieval architecture for a new application that a company will be launching soon. The application is designed to ingest millions of small records per minute from devices all around the world. Each record is less than 4 KB in size and needs to be stored in a durable location where it can be retrieved with low latency. The data is ephemeral and the company is required to store the data for 120 days only, after which the data can be deleted.<br><br>The solutions architect calculates that, during the course of a year, the storage requirements would be about 10-15 TB. <br><br>Which storage strategy is the MOST cost-effective and meets the design requirements?<br><br></p>",
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
              "choice": "<p>A. Design the application to store each incoming record as a single .csv file in an Amazon S3 bucket to allow for indexed retrieval. Configure a lifecycle policy to delete data older than 120 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to delete records older than 120 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Design the application to store each incoming record in a single table in an Amazon RDS MySQL database. Run a nightly cron job that runs a query to delete any records older than 120 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Design the application to batch incoming records before writing them to an Amazon S3 bucket. Update the metadata for the object to contain the list of records in the batch and use the Amazon S3 metadata search feature to retrieve the data. Configure a lifecycle policy to delete the data after 120 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775714,
          "date": "Sat 14 Jan 2023 17:26",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The most cost-effective and efficient solution that meets the design requirements would be option B, Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to delete records older than 120 days.<br><br>DynamoDB is a NoSQL key-value store designed for high scale and performance. It is fully managed by AWS and can easily handle millions of small records per minute. Additionally, with the TTL feature, you can set an expiration time for each record, so that the data can be automatically deleted after the specified time period.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A, storing each incoming record as a single .csv file in an Amazon S3 bucket, would not be a good option because it would be difficult to retrieve individual records from the .csv files, and will likely increase the cost of data retrieval.<br><br>Option C, storing each incoming record in a single table in an Amazon RDS MySQL database, would be a more expensive option as RDS is typically more expensive than DynamoDB.  Additionally, running a cron job to delete old data could lead to additional operational overhead.<br><br>Option D, storing incoming records in batches in an S3 bucket, would be a less efficient option as it would require additional processing and parsing of the data to retrieve individual records.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775715,
          "date": "Sat 14 Jan 2023 17:26",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A, storing each incoming record as a single .csv file in an Amazon S3 bucket, would not be a good option because it would be difficult to retrieve individual records from the .csv files, and will likely increase the cost of data retrieval.<br><br>Option C, storing each incoming record in a single table in an Amazon RDS MySQL database, would be a more expensive option as RDS is typically more expensive than DynamoDB.  Additionally, running a cron job to delete old data could lead to additional operational overhead.<br><br>Option D, storing incoming records in batches in an S3 bucket, would be a less efficient option as it would require additional processing and parsing of the data to retrieve individual records.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 853731,
          "date": "Tue 28 Mar 2023 23:41",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "B DynamoDB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850975,
          "date": "Sun 26 Mar 2023 14:13",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B.  Design the application to store each incoming record in an Amazon DynamoDB table",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 784745,
          "date": "Sun 22 Jan 2023 23:34",
          "username": "\t\t\t\tDDONG\t\t\t",
          "content": "B SAP01 #613",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777098,
          "date": "Sun 15 Jan 2023 22:52",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct<br>Dynamodb support 4KB size, low latency and TTL<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>do yo mean B</li><li>https://www.examtopics.com/discussions/amazon/view/28419-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Option C is using RDS MySQL which is a relational database and will not be able to handle the scale of millions of small records per minute with low latency and it is not designed for automatic deletion of records based on time and it will be more expensive as well.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778291,
          "date": "Mon 16 Jan 2023 22:23",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "do yo mean B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778261,
          "date": "Mon 16 Jan 2023 22:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/28419-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Option C is using RDS MySQL which is a relational database and will not be able to handle the scale of millions of small records per minute with low latency and it is not designed for automatic deletion of records based on time and it will be more expensive as well.",
          "upvote_count": "1",
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
      "question_text": "<p>A retail company is hosting an ecommerce website on AWS across multiple AWS Regions. The company wants the website to be operational at all times for online purchases. The website stores data in an Amazon RDS for MySQL DB instance.<br><br>Which solution will provide the HIGHEST availability for the database?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
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
          "id": 850977,
          "date": "Sun 26 Mar 2023 14:15",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "D makes the most sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 842392,
          "date": "Sat 18 Mar 2023 01:55",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "This really should be multi-az but you could move to it w/ D. <br>Here is the key to this one though; Highest Availability - the read replica is an asynchronous copy, while backup is a \\\"time\\\". Easier to do the read replica, and flip the switches than to reload from backup. Global Tables relate to DynomoDB https://disaster-recovery.workshop.aws/en/services/databases/dynamodb/dynamo-global-table.html<br>Little handy \\\"DR\\\" guide",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827685,
          "date": "Fri 03 Mar 2023 06:30",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "No global tables concept in RDS, B,C are eliminated. A is wrong in terms of backing up Db copy to a standalone instance ? D provides read replicas for reading and also swtiches as a failiover in times of disruption and becomes primary. this is how HA can be maintained. D is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 826791,
          "date": "Thu 02 Mar 2023 12:40",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "MySQL - Read Replica. In this case, this is not aurora so not the global table option and hence can not be B and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 826698,
          "date": "Thu 02 Mar 2023 10:28",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "I haven't found any information about a \\\"global table\\\" for RDS.<br>Global tables are for DynamoDB.  For Aurora, it's called \\\"global databases\\\".<br>RDS for MySQL supports cross-region read replicas https://aws.amazon.com/fr/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/, so D has a better availability than A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779550,
          "date": "Wed 18 Jan 2023 04:00",
          "username": "\t\t\t\ticassp\t\t\t",
          "content": "for B,C, Amazon RDS does not support global tables yet. Only Aurora supports.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Is Aurora not part of RDS? You can choose Aurora's compatibility with MySQL and PostreSQL).</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814077,
          "date": "Sun 19 Feb 2023 13:52",
          "username": "\t\t\t\tAlanKrish\t\t\t",
          "content": "Is Aurora not part of RDS? You can choose Aurora's compatibility with MySQL and PostreSQL).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777099,
          "date": "Sun 15 Jan 2023 22:53",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "D is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is possible that some people may think that option D.  Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source. is the best solution, as it also utilizes read replicas and cross-Region promotion to minimize downtime. However, it is important to consider that while this solution provides high availability, it doesn't provide the same level of automatic replication that global tables do. In case of a disruption, there is a risk of data loss during the manual switchover.<br>and also with option D, you are still working with a single point of failure, the primary database, while in option B you have multiple copies of your data distributed across different regions, so in case of a failure you can switch over to one of the replicas without loss of data.</li><li>Cant be B due to global tables, ReadReplicas are supported with RDS and other options of restoring from backup do not create high availability</li><li>B is not right.Only Aurora has global tables.RDS don't</li><li>https://www.examtopics.com/discussions/amazon/view/69438-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 778268,
          "date": "Mon 16 Jan 2023 22:06",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "It is possible that some people may think that option D.  Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source. is the best solution, as it also utilizes read replicas and cross-Region promotion to minimize downtime. However, it is important to consider that while this solution provides high availability, it doesn't provide the same level of automatic replication that global tables do. In case of a disruption, there is a risk of data loss during the manual switchover.<br>and also with option D, you are still working with a single point of failure, the primary database, while in option B you have multiple copies of your data distributed across different regions, so in case of a failure you can switch over to one of the replicas without loss of data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Cant be B due to global tables, ReadReplicas are supported with RDS and other options of restoring from backup do not create high availability</li><li>B is not right.Only Aurora has global tables.RDS don't</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 809932,
          "date": "Wed 15 Feb 2023 21:07",
          "username": "\t\t\t\tryansmithnz\t\t\t",
          "content": "Cant be B due to global tables, ReadReplicas are supported with RDS and other options of restoring from backup do not create high availability",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797150,
          "date": "Fri 03 Feb 2023 16:28",
          "username": "\t\t\t\tShahul75\t\t\t",
          "content": "B is not right.Only Aurora has global tables.RDS don't",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778270,
          "date": "Mon 16 Jan 2023 22:06",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/69438-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775724,
          "date": "Sat 14 Jan 2023 17:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is option B.  Configuring global tables and read replicas on Amazon RDS with the cross-Region scope enabled provides the highest availability for the database. In case of disruption, the company can use AWS Lambda to copy the read replicas from one Region to another Region, ensuring that the website remains operational at all times. This solution provides automatic failover across multiple regions and allows for fast recovery in case of a disruption.<br><br>Option A involves promoting an automated backup to be a standalone DB instance and creating a replacement read replica that has the promoted DB instance as its source. This solution is less efficient since it requires manual intervention and additional steps to promote the backup and create a replacement read replica.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If the disruption is an outage that takes the Region offline completely, how could we use Lambda to copy the read replica from the Region that is no longer available to the backup to another Region?</li><li>Option C involves configuring global tables and automated backups on Amazon RDS. This solution is less efficient since it does not provide automatic failover across multiple regions and requires additional steps to copy the read replicas from one Region to another Region using AWS Lambda.<br><br>Option D involves configuring read replicas on Amazon RDS. In the case of disruption, promoting a cross-Region and read replica to be a standalone DB instance. This solution is less efficient than Option B since it does not provide automatic failover across multiple regions and requires manual intervention to promote the read replica to a standalone instance.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826155,
          "date": "Wed 01 Mar 2023 19:21",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "If the disruption is an outage that takes the Region offline completely, how could we use Lambda to copy the read replica from the Region that is no longer available to the backup to another Region?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775726,
          "date": "Sat 14 Jan 2023 17:30",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C involves configuring global tables and automated backups on Amazon RDS. This solution is less efficient since it does not provide automatic failover across multiple regions and requires additional steps to copy the read replicas from one Region to another Region using AWS Lambda.<br><br>Option D involves configuring read replicas on Amazon RDS. In the case of disruption, promoting a cross-Region and read replica to be a standalone DB instance. This solution is less efficient than Option B since it does not provide automatic failover across multiple regions and requires manual intervention to promote the read replica to a standalone instance.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Example Corp. has an on-premises data center and a VPC named VPC A in the Example Corp. AWS account. The on-premises network connects to VPC A through an AWS Site-To-Site VPN. The on-premises servers can properly access VPC A.  Example Corp. just acquired AnyCompany, which has a VPC named VPC B.  There is no IP address overlap among these networks. Example Corp. has peered VPC A and VPC B. <br><br>Example Corp. wants to connect from its on-premise servers to VPC B.  Example Corp. has properly set up the network ACL and security groups.<br><br>Which solution will meet this requirement with the LEAST operational effort?<br><br></p>",
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
              "choice": "<p>A. Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway. Create a Site-to-Site VPN connection between the on-premises network and VPC B, and connect the VPN connection to the transit gateway. Add a route to direct traffic to the peered VPCs, and add an authorization rule to give clients access to the VPCs A and B. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the route tables for the Site-to-Site VPN and both VPCs for all three networks. Configure BGP propagation for all three networks. Wait for up to 5 minutes for BGP propagation to finish.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B.  Split the two routers of the virtual private getaway between the two VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 852880,
          "date": "Tue 28 Mar 2023 08:49",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "Solution A is the only one possible solution<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A : the best (and the only one possible) answer : When you have 2 VPC, you have multiple solution to connect to onprem : <br>- Create 2 S2S VPN (1 for each VPC)<br>- or Create a TGW, attach both VPC to it and attach S2S VPN to it too<br>- or Create a third VPC (VPC routing), and peer VPC A with VPC routing, VPC B to VPC routing, attach a S2S VPN to VPC routing and use a NVA on VPC routing to route trafic. NVA can do transitivity.<br>Here, solution A is one of the possible answer</li><li>B is impossible : When you create a S2S VPN connection, it's between 2 entites (here, the onprem and VPC B). It says that they connect the onprem to VPCB with S2SVPN AND THEN to a TGW, it's not possible to connect a S2S VPN from onprem to VPC to a TGW (it\\\"s a 3 entities). You can however connect a S2S VPN to a TGW (onprem to TGW) (which is solution A).<br>C : Does not work, there is no transitivity on AWS. S2S VPN cannot reach VPC B through VPC A<br>D is impossible :There is no magic, you cannot \\\"split\\\" router (that does not exist). VGW is attach to a single VPC.  A S2S VPN cannot multiplex VPC</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 852882,
          "date": "Tue 28 Mar 2023 08:49",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "A : the best (and the only one possible) answer : When you have 2 VPC, you have multiple solution to connect to onprem : <br>- Create 2 S2S VPN (1 for each VPC)<br>- or Create a TGW, attach both VPC to it and attach S2S VPN to it too<br>- or Create a third VPC (VPC routing), and peer VPC A with VPC routing, VPC B to VPC routing, attach a S2S VPN to VPC routing and use a NVA on VPC routing to route trafic. NVA can do transitivity.<br>Here, solution A is one of the possible answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 852881,
          "date": "Tue 28 Mar 2023 08:49",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "B is impossible : When you create a S2S VPN connection, it's between 2 entites (here, the onprem and VPC B). It says that they connect the onprem to VPCB with S2SVPN AND THEN to a TGW, it's not possible to connect a S2S VPN from onprem to VPC to a TGW (it\\\"s a 3 entities). You can however connect a S2S VPN to a TGW (onprem to TGW) (which is solution A).<br>C : Does not work, there is no transitivity on AWS. S2S VPN cannot reach VPC B through VPC A<br>D is impossible :There is no magic, you cannot \\\"split\\\" router (that does not exist). VGW is attach to a single VPC.  A S2S VPN cannot multiplex VPC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850980,
          "date": "Sun 26 Mar 2023 14:17",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A.  Create a transit gateway. Attach the Site-to-Site VPN",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 844284,
          "date": "Sun 19 Mar 2023 23:00",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A makes sense to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 843640,
          "date": "Sun 19 Mar 2023 11:30",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 827700,
          "date": "Fri 03 Mar 2023 07:13",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "A has this wierd wording - attaching S-S VPN ? transit gateway attaches to VPCs only not S-S vpn. A is wrong. Since VPC A and VPC B are already peered, the easiest solution to connect from the on-premises servers to VPC B would be to create another Site-to-Site VPN connection between the on-premises data center and VPC B.  This would require minimal operational effort, as the existing VPN connection with VPC A can remain unchanged.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>oops this is wrong..VPN can be attached...</li><li>Moderator, please delete this comment..</li><li>https://docs.aws.amazon.com/vpn/latest/s2svpn/how_it_works.html<br>When you create a virtual private gateway, you can specify the private Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN (64512). You cannot change the ASN after you've created the virtual private gateway. Due to this reason, So A is not possible (with least effort). Answer should be B. </li><li>THe VGW for VPCA is no more needed on A because you attach the VPCA to the TGW.<br>The ASN will be on the TGW attachment with the S2S VPN.<br>This is the best solution.<br>In the meantime, B is impossible. When you create a S2S VPN connection, it's between 2 entites (here, the onprem and VPC B). It says that they connect the onprem to VPCB with S2SVPN AND THEN to a TGW, it's not possible to connect a S2S VPN from onprem to VPC to a TGW. You can however connect a S2S VPN to a TGW (onprem to TGW).</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827705,
          "date": "Fri 03 Mar 2023 07:18",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "oops this is wrong..VPN can be attached...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Moderator, please delete this comment..</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827708,
          "date": "Fri 03 Mar 2023 07:25",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Moderator, please delete this comment..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827707,
          "date": "Fri 03 Mar 2023 07:24",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "https://docs.aws.amazon.com/vpn/latest/s2svpn/how_it_works.html<br>When you create a virtual private gateway, you can specify the private Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN (64512). You cannot change the ASN after you've created the virtual private gateway. Due to this reason, So A is not possible (with least effort). Answer should be B. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>THe VGW for VPCA is no more needed on A because you attach the VPCA to the TGW.<br>The ASN will be on the TGW attachment with the S2S VPN.<br>This is the best solution.<br>In the meantime, B is impossible. When you create a S2S VPN connection, it's between 2 entites (here, the onprem and VPC B). It says that they connect the onprem to VPCB with S2SVPN AND THEN to a TGW, it's not possible to connect a S2S VPN from onprem to VPC to a TGW. You can however connect a S2S VPN to a TGW (onprem to TGW).</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 852867,
          "date": "Tue 28 Mar 2023 08:41",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "THe VGW for VPCA is no more needed on A because you attach the VPCA to the TGW.<br>The ASN will be on the TGW attachment with the S2S VPN.<br>This is the best solution.<br>In the meantime, B is impossible. When you create a S2S VPN connection, it's between 2 entites (here, the onprem and VPC B). It says that they connect the onprem to VPCB with S2SVPN AND THEN to a TGW, it's not possible to connect a S2S VPN from onprem to VPC to a TGW. You can however connect a S2S VPN to a TGW (onprem to TGW).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811209,
          "date": "Fri 17 Feb 2023 00:54",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "TGW is the solutions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 806859,
          "date": "Sun 12 Feb 2023 23:06",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "D. <br>A - setting up new transit gateway- more operational cost<br>B - new site-to-site - vpn -more operational cost<br>C - updating route tables for site to site vpn and3 VPCs,bgp config update for 3 networks .. more operational cost<br>D - because it requires the least amount of operational effort. By modifying the Site-to-Site VPN's virtual private gateway definition to include both VPC A and VPC B and splitting the two routers of the virtual private gateway between the two VPCs, the on-premises servers can connect to both VPCs with minimal additional effort. This solution leverages the existing Site-to-Site VPN and does not add any additional layers of complexity to the network.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is not possible. There is no magic, you cannot \\\"split\\\" router (that does not exist). VGW is attach to a single VPC.  A S2S VPN cannot multiplex VPC ;)</li><li>It looks like you understood D.  How can you split two routers of the VGW between two VPCs? The VGW is an object that can be attached to a single VPC at a time.What are the two routers they talk about here? Are there on-prem routers?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 852863,
          "date": "Tue 28 Mar 2023 08:35",
          "username": "\t\t\t\tArnaud92\t\t\t",
          "content": "D is not possible. There is no magic, you cannot \\\"split\\\" router (that does not exist). VGW is attach to a single VPC.  A S2S VPN cannot multiplex VPC ;)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826170,
          "date": "Wed 01 Mar 2023 19:33",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "It looks like you understood D.  How can you split two routers of the VGW between two VPCs? The VGW is an object that can be attached to a single VPC at a time.What are the two routers they talk about here? Are there on-prem routers?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793329,
          "date": "Mon 30 Jan 2023 22:01",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "solution is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778278,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.<br><br>This option will allow you to connect from the on-premises servers to VPC B with the least operational effort, as it utilizes the transit gateway to connect all networks and allows for easy updates to the route tables. BGP propagation is not necessary and the use of transit gateway will simplify the traffic routing.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778276,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A.  Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.<br><br>This option allows for all three networks (on-premises, VPC A and VPC B) to be connected through the transit gateway, which simplifies the traffic routing and makes it easy to update the route tables for all networks. It also eliminates the need for a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is not correct because it would require a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity and effort.<br><br>Option C is not correct because updating the route tables for all three networks and configuring BGP propagation can be a complex process, and waiting for BGP propagation to finish would add an unnecessary delay.<br><br>Option D is not correct because modifying the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B and splitting the two routers of the virtual private gateway between the two VPCs would be overly complex and difficult to manage. It will not be the most efficient solution and adding unnecessary complexity to the existing solution.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778277,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B is not correct because it would require a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity and effort.<br><br>Option C is not correct because updating the route tables for all three networks and configuring BGP propagation can be a complex process, and waiting for BGP propagation to finish would add an unnecessary delay.<br><br>Option D is not correct because modifying the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B and splitting the two routers of the virtual private gateway between the two VPCs would be overly complex and difficult to manage. It will not be the most efficient solution and adding unnecessary complexity to the existing solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777105,
          "date": "Sun 15 Jan 2023 23:06",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct. on-premise is connected to TGW, use TDW to talk to VPC A/B<br>B: too many VPN connections<br>C: VPC B cannot use VPC A to VPN<br>D: one VPN gateway cannot be associated with more than one VPC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Is correct that option A is the correct answer. Thank for you help.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 778279,
          "date": "Mon 16 Jan 2023 22:13",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Is correct that option A is the correct answer. Thank for you help.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775732,
          "date": "Sat 14 Jan 2023 17:34",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  This option involves creating a new Site-to-Site VPN connection between the on-premises network and VPC B, and connecting that VPN connection to the transit gateway. This allows the on-premises network to access resources in VPC B through the transit gateway, which already has a connection to VPC A and can route traffic between the two VPCs. This solution requires minimal additional configuration and minimal operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A involves creating a transit gateway, attaching all three networks (the on-premises network, VPC A, and VPC B) to it and updating routing tables for all networks. This solution would require significant additional configuration and would be more complex to set up and maintain.<br><br>Option C involves updating routing tables for all three networks and configuring BGP propagation. This solution is complex and would require additional configuration and maintenance.<br><br>Option D involves modifying the definition of the Site-to-Site VPN to include both VPC A and B and splitting the two VPN routers between the two VPCs. This solution is complex and would require additional configuration and maintenance.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775733,
          "date": "Sat 14 Jan 2023 17:34",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A involves creating a transit gateway, attaching all three networks (the on-premises network, VPC A, and VPC B) to it and updating routing tables for all networks. This solution would require significant additional configuration and would be more complex to set up and maintain.<br><br>Option C involves updating routing tables for all three networks and configuring BGP propagation. This solution is complex and would require additional configuration and maintenance.<br><br>Option D involves modifying the definition of the Site-to-Site VPN to include both VPC A and B and splitting the two VPN routers between the two VPCs. This solution is complex and would require additional configuration and maintenance.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently completed the migration from an on-premises data center to the AWS Cloud by using a replatforming strategy. One of the migrated servers is running a legacy Simple Mail Transfer Protocol (SMTP) service that a critical application relies upon. The application sends outbound email messages to the company's customers. The legacy SMTP server does not support TLS encryption and uses TCP port 25. The application can use SMTP only.<br><br>The company decides to use Amazon Simple Email Service (Amazon SES) and to decommission the legacy SMTP server. The company has created and validated the SES domain. The company has lifted the SES limits.<br><br>What should the company do to modify the application to send email messages from Amazon SES?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials. Use the credentials to authenticate with Amazon SES.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the application to use the SES API to send email messages. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Use the IAM role as a service role for Amazon SES.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the application to use AWS SDKs to send email messages. Create an IAM user for Amazon SES. Generate API access keys. Use the access keys to authenticate with Amazon SES.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850981,
          "date": "Sun 26 Mar 2023 14:18",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B.  Configure the application to connect to Amazon SES by using STARTTLS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847360,
          "date": "Wed 22 Mar 2023 19:04",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "B , https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 844306,
          "date": "Sun 19 Mar 2023 23:39",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "B is wrong because STARTTLS uses port 25 and EC2 instances can't send outbound traffic through port 25 (you must ask AWS to allow port 25)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 836040,
          "date": "Sat 11 Mar 2023 14:35",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "The key to this question imo is the sentence \\\"The application can use SMTP only\\\". <br>So we cannot go for encryption. <br>Imo there is no TLS wrapper for Mail that supports authentication which is needed for SES, one needs a proxiing mailserver for that(need support for auth and encryption, rewriting mail).<br>With StarttlsSMTP protocol is supported by AWS and the legacy application can send the mail to AWS just as it did to to the legacy mailserver. <br>(Of course: a unix machine has not just one application but a lot of little apps like cron, at ...and low traffic mailserver consumes like no resources, so in real world every unix machine should have a small local smtp, eg a postfix configured to forward all traffic from every tool app, system ...to ses but that real world option is not provided as possible answer: so B. )<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you may look at https://www.stunnel.org/, if find a way to make auth work with ses: well then go for A.  Afaik it is not possible - but happy to learn if there is a way.</li><li>also have a look at<br>https://hector.dev/2015/01/17/sending-e-mail-via-amazon-ses-over-smtp-with-iam-roles/<br>Using iam roles does not realy work with smpt auth.(I didn't get it to work and it seems no one else either)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836119,
          "date": "Sat 11 Mar 2023 15:09",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "you may look at https://www.stunnel.org/, if find a way to make auth work with ses: well then go for A.  Afaik it is not possible - but happy to learn if there is a way.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836138,
          "date": "Sat 11 Mar 2023 15:29",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "also have a look at<br>https://hector.dev/2015/01/17/sending-e-mail-via-amazon-ses-over-smtp-with-iam-roles/<br>Using iam roles does not realy work with smpt auth.(I didn't get it to work and it seems no one else either)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828234,
          "date": "Fri 03 Mar 2023 19:15",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html<br>For new apps, C should be correct. But here, Its re-platforming strategy migrating from SMTP to SES<br>STARTTLS vs TLS Wrapper is being tested here. (A or B) But A sounds 25 port communication which the existing app uses. So B should be correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 819996,
          "date": "Fri 24 Feb 2023 02:38",
          "username": "\t\t\t\tscuzzy2010\t\t\t",
          "content": "B is correct.<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html<br>STARTTLS supportsports 25, 587, and 2587<br>TLSWRAPPER supports ports465 and 2465<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>FYI Amazon SES supports STARTTLS encryption over port 587, which is the recommended port for email transmission. But existing port 25 can be configured too as in this case as the migration came from SMTP port 25</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 828237,
          "date": "Fri 03 Mar 2023 19:17",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "FYI Amazon SES supports STARTTLS encryption over port 587, which is the recommended port for email transmission. But existing port 25 can be configured too as in this case as the migration came from SMTP port 25",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793752,
          "date": "Tue 31 Jan 2023 08:07",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "It's B, becuse D is discarded since \\\"The application can use SMTP only.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793750,
          "date": "Tue 31 Jan 2023 08:05",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I doubt between B and D.  Both seem correct to me.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790752,
          "date": "Sat 28 Jan 2023 16:45",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "In this scenario, you should use Amazon SES SMTP interface to send emails because the application can use SMTP only.<br>https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 788794,
          "date": "Thu 26 Jan 2023 15:15",
          "username": "\t\t\t\tboomx\t\t\t",
          "content": "B<br>STARTTLS works over 25, less change. Also SES SMTP interface needs SMTP credentials<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778285,
          "date": "Mon 16 Jan 2023 22:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is option A: \\\"Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.\\\"<br><br>Option B is incorrect as it suggests to use SMTP with STARTTLS to connect to Amazon SES, which is a less secure method than using a secure wrapper such as TLS Wrapper. Option B also suggests using long-term SMTP credentials which could be a security concern.<br><br>Option C is incorrect as it suggests to use the SES API to send email messages, which is not necessary as the application can only use SMTP.<br><br>Option D is incorrect as it suggests to use AWS SDKs to send email messages, which is not necessary as the application can only use SMTP. Also, it suggests to use IAM user for Amazon SES which is also a security concern as it will involve long-term credentials as well.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A) what tls wrapper are you talking about? <br>B) \\\"Starttls is less secure\\\": SES AWS Mailservers support Starttls anf you have no way of reconfigure the AWS severs. <br>(With Starttls the *server* accepts unencrypted and encrypted incomming smtp mail. The client just connects with smpt encrypted or not, the server will accept both. ...)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 836026,
          "date": "Sat 11 Mar 2023 14:21",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "A) what tls wrapper are you talking about? <br>B) \\\"Starttls is less secure\\\": SES AWS Mailservers support Starttls anf you have no way of reconfigure the AWS severs. <br>(With Starttls the *server* accepts unencrypted and encrypted incomming smtp mail. The client just connects with smpt encrypted or not, the server will accept both. ...)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777245,
          "date": "Mon 16 Jan 2023 02:35",
          "username": "\t\t\t\tAtila50\t\t\t",
          "content": "https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777108,
          "date": "Sun 15 Jan 2023 23:12",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct. <br>https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html<br>TLS support TLS Wrapper or STARTTLS.<br>B: use STARTTLE but use credential, should use role which is in A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't use a role with SES. https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-credentials.html</li><li>Yes, you are correct. Option A is the correct answer, as it outlines the steps to configure the application to connect to Amazon SES using a secure method (TLS Wrapper) and authenticate using an IAM role with the necessary permissions (ses:SendEmail and ses:SendRawEmail). This is a more secure and recommended method to authenticate with Amazon SES as it does not involve using long-term credentials such as access keys.</li><li>no - you are assuming the type of SMTP server, it has to be programmatically configured because the \\\"application can use SMTP only\\\".<br><br>SES only support TLS and they already created validated the SES domain. So, if you follow this: https://docs.aws.amazon.com/ses/latest/dg/send-using-smtp-programmatically.html<br><br>you have to configure the app to use starttls to upgrade it, code in your SMTP creds to authenticate, and bang- send email</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 793749,
          "date": "Tue 31 Jan 2023 08:05",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "You can't use a role with SES. https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-credentials.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778284,
          "date": "Mon 16 Jan 2023 22:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Yes, you are correct. Option A is the correct answer, as it outlines the steps to configure the application to connect to Amazon SES using a secure method (TLS Wrapper) and authenticate using an IAM role with the necessary permissions (ses:SendEmail and ses:SendRawEmail). This is a more secure and recommended method to authenticate with Amazon SES as it does not involve using long-term credentials such as access keys.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>no - you are assuming the type of SMTP server, it has to be programmatically configured because the \\\"application can use SMTP only\\\".<br><br>SES only support TLS and they already created validated the SES domain. So, if you follow this: https://docs.aws.amazon.com/ses/latest/dg/send-using-smtp-programmatically.html<br><br>you have to configure the app to use starttls to upgrade it, code in your SMTP creds to authenticate, and bang- send email</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842404,
          "date": "Sat 18 Mar 2023 02:21",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "no - you are assuming the type of SMTP server, it has to be programmatically configured because the \\\"application can use SMTP only\\\".<br><br>SES only support TLS and they already created validated the SES domain. So, if you follow this: https://docs.aws.amazon.com/ses/latest/dg/send-using-smtp-programmatically.html<br><br>you have to configure the app to use starttls to upgrade it, code in your SMTP creds to authenticate, and bang- send email",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775745,
          "date": "Sat 14 Jan 2023 17:49",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials. Use the credentials to authenticate with Amazon SES.<br><br>This solution allows the application to use the Simple Mail Transfer Protocol (SMTP) protocol to send email messages, which the application requires. Using STARTTLS enables the use of Transport Layer Security (TLS) encryption to secure the connection between the application and Amazon SES. Obtaining the Amazon SES SMTP credentials and using them to authenticate with Amazon SES allows the application to use Amazon SES to send email messages.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is incorrect because it uses an IAM role, rather than SMTP credentials, to authenticate with Amazon SES.<br>Option C is incorrect because it uses the SES API to send email messages, which the application may not support.<br>Option D is incorrect because it uses an IAM user, rather than SMTP credentials, to authenticate with Amazon SES.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775747,
          "date": "Sat 14 Jan 2023 17:49",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is incorrect because it uses an IAM role, rather than SMTP credentials, to authenticate with Amazon SES.<br>Option C is incorrect because it uses the SES API to send email messages, which the application may not support.<br>Option D is incorrect because it uses an IAM user, rather than SMTP credentials, to authenticate with Amazon SES.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently acquired several other companies. Each company has a separate AWS account with a different billing and reporting method. The acquiring company has consolidated all the accounts into one organization in AWS Organizations. However, the acquiring company has found it difficult to generate a cost report that contains meaningful groups for all the teams.<br><br>The acquiring company's finance team needs a solution to report on costs for all the companies through a self-managed application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a table in Amazon Athena. Create an Amazon QuickSight dataset based on the Athena table. Share the dataset with the finance team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon QuickSight dataset that receives spending information from the AWS Price List Query API. Share the dataset with the finance team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Price List Query API to collect account spending information. Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850982,
          "date": "Sun 26 Mar 2023 14:19",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A.  Create an AWS Cost and Usage Report for the organization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 804987,
          "date": "Sat 11 Feb 2023 05:37",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I can customize reporting in Cost Explorer but cannot find how to do templates.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777115,
          "date": "Sun 15 Jan 2023 23:22",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct<br>B: no such template for cost exporer<br>CD: Price List Query API is for list price, not for usage",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775782,
          "date": "Sat 14 Jan 2023 18:33",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct solution is A. <br><br>Creating an AWS Cost and Usage Report for the organization and defining tags and cost categories in the report will allow for detailed cost reporting for the different companies that have been consolidated into one organization. By creating a table in Amazon Athena and an Amazon QuickSight dataset based on the Athena table, the finance team will be able to easily query and generate reports on the costs for all the companies. The dataset can then be shared with the finance team for them to use for their reporting needs.<br><br>Option B is not correct because it does not provide a way to query and generate reports on the costs for all the companies. <br><br>Option C is not correct because it only provides spending information from the AWS Price List Query API and does not provide detailed cost reporting for the different companies. <br><br>Option D is not correct because it only uses the AWS Price List Query API and does not provide a way to query and generate reports on the costs for all the companies.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an IoT platform on AWS. IoT sensors in various locations send data to the company's Node.js API servers on Amazon EC2 instances running behind an Application Load Balancer. The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume.<br><br>The number of sensors the company has deployed in the field has increased over time, and is expected to grow significantly. The API servers are consistently overloaded and RDS metrics show high write latency.<br><br>Which of the following steps together will resolve the issues permanently and enable growth as new sensors are provisioned, while keeping this platform cost-efficient? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS X-Ray to analyze and debug application issues and add more API servers to match the load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775793,
          "date": "Sat 14 Jan 2023 18:55",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C and E are the correct answers.<br><br>Option C: Leveraging Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data would help to resolve the issues with the API servers being consistently overloaded. By using Kinesis, the data can be ingested and processed in real-time, allowing the API servers to handle the increased load. Using Lambda to process the data can also help to improve the overall performance and scalability of the platform.<br><br>Option E: Re-architecting the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance would help to resolve the issues with high write latency. DynamoDB is a NoSQL database that is designed for high performance and scalability, making it a good fit for this use case. Additionally, DynamoDB supports auto-scaling, which can help to ensure that the database can handle the expected growth in the number of sensors.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I disagree with option E.  Re-architecting the database tier from RDS to DynamoDB is not possible. RDS is a SQL database, and DynamoDB is a NoSQL database. <br><br>The correct one should be C and B</li><li>I agree with you.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html<br>Aurora can deliver up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.<br><br>Aurora includes a high-performance storage subsystem. Its MySQL- and PostgreSQL-compatible database engines are customized to take advantage of that fast distributed storage. The underlying storage grows automatically as needed. An Aurora cluster volume can grow to a maximum size of 128 tebibytes (TiB).</li><li>Naw, you can migrate: https://aws.amazon.com/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/<br><br>Plus, with DynamoDB it scales, don't need to add read replica complexity and it also supports IoT out of the box - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB. html<br>This is for IoT sensors that send data and I don't need to store forever so, DynamoDB for this use case is better and cheaper allowing scale</li><li>Option A, Resizing the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS will not solve the problem, as the problem is not just related to storage size but also high write latency.<br><br>Option B, Re-architecting the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and adding read replicas would help to improve the read performance, but it won't help in reducing write latency.<br><br>Option D, Using AWS X-Ray to analyze and debug application issues and adding more API servers to match the load, would help in identifying the problem and resolving it, but it will not help in reducing the load on the servers.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 825234,
          "date": "Tue 28 Feb 2023 21:13",
          "username": "\t\t\t\tSuperP43\t\t\t",
          "content": "I disagree with option E.  Re-architecting the database tier from RDS to DynamoDB is not possible. RDS is a SQL database, and DynamoDB is a NoSQL database. <br><br>The correct one should be C and B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree with you.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html<br>Aurora can deliver up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.<br><br>Aurora includes a high-performance storage subsystem. Its MySQL- and PostgreSQL-compatible database engines are customized to take advantage of that fast distributed storage. The underlying storage grows automatically as needed. An Aurora cluster volume can grow to a maximum size of 128 tebibytes (TiB).</li><li>Naw, you can migrate: https://aws.amazon.com/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/<br><br>Plus, with DynamoDB it scales, don't need to add read replica complexity and it also supports IoT out of the box - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB. html<br>This is for IoT sensors that send data and I don't need to store forever so, DynamoDB for this use case is better and cheaper allowing scale</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 834714,
          "date": "Fri 10 Mar 2023 08:14",
          "username": "\t\t\t\tkamaro\t\t\t",
          "content": "I agree with you.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html<br>Aurora can deliver up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.<br><br>Aurora includes a high-performance storage subsystem. Its MySQL- and PostgreSQL-compatible database engines are customized to take advantage of that fast distributed storage. The underlying storage grows automatically as needed. An Aurora cluster volume can grow to a maximum size of 128 tebibytes (TiB).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Naw, you can migrate: https://aws.amazon.com/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/<br><br>Plus, with DynamoDB it scales, don't need to add read replica complexity and it also supports IoT out of the box - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB. html<br>This is for IoT sensors that send data and I don't need to store forever so, DynamoDB for this use case is better and cheaper allowing scale</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842417,
          "date": "Sat 18 Mar 2023 02:48",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "Naw, you can migrate: https://aws.amazon.com/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/<br><br>Plus, with DynamoDB it scales, don't need to add read replica complexity and it also supports IoT out of the box - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB. html<br>This is for IoT sensors that send data and I don't need to store forever so, DynamoDB for this use case is better and cheaper allowing scale",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775794,
          "date": "Sat 14 Jan 2023 18:55",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A, Resizing the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS will not solve the problem, as the problem is not just related to storage size but also high write latency.<br><br>Option B, Re-architecting the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and adding read replicas would help to improve the read performance, but it won't help in reducing write latency.<br><br>Option D, Using AWS X-Ray to analyze and debug application issues and adding more API servers to match the load, would help in identifying the problem and resolving it, but it will not help in reducing the load on the servers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850986,
          "date": "Sun 26 Mar 2023 14:25",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "CE is the best choice. DynamoDB is the better choice for the IoT sensors growth.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 844319,
          "date": "Mon 20 Mar 2023 00:04",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "BD fit the requirement. (Cost efficient)<br>CE are the opposite of the requirement, DynamoDB and Kinesis more expensive than Aurora for large scale apps .. even DynamoDB alone more expensive than Aurora for large scale apps<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I forgot to mention that DynamoDB is noSQL database, and requires also a big refactor in the NodeJS app. Does not make sense here to choose DynamoDB over Aurora (MySQL)..</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 844321,
          "date": "Mon 20 Mar 2023 00:08",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "I forgot to mention that DynamoDB is noSQL database, and requires also a big refactor in the NodeJS app. Does not make sense here to choose DynamoDB over Aurora (MySQL)..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841376,
          "date": "Thu 16 Mar 2023 22:48",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/5011-exam-aws-certified-solutions-architect-professional-topic-1/ DynamoDB or other NoSQL options are not the solutions when organizations need to store predictable, structured data. In that case, Amazon Aurora is the best solution with high scalability and best performances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 838356,
          "date": "Mon 13 Mar 2023 23:00",
          "username": "\t\t\t\tDimidrol\t\t\t",
          "content": "A C for me.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 835732,
          "date": "Sat 11 Mar 2023 09:10",
          "username": "\t\t\t\tlimjieson\t\t\t",
          "content": "B and D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777119,
          "date": "Sun 15 Jan 2023 23:24",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "CE are correct",
          "upvote_count": "2",
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
      "question_text": "<p>A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin. The web application communicates with Amazon API Gateway Regional endpoints. The API Gateway APIs call AWS Lambda functions that store metadata in an Amazon Aurora Serverless database and put the documents into an S3 bucket.<br>The company is growing steadily and has completed a proof of concept with its largest customer. The company must improve latency outside of Europe.<br><br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an accelerator in AWS Global Accelerator. Attach the accelerator to the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the API Gateway Regional endpoints to edge-optimized endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision the entire stack in two other locations that are spread across the world. Use global databases on the Aurora Serverless cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850990,
          "date": "Sun 26 Mar 2023 14:28",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "AC are the best combo",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 836454,
          "date": "Sat 11 Mar 2023 20:41",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "A) well yes, maybe but we do already have cloudfront in front - so questionable if acceleration has a big impact on performance.<br>B) Not possible. Afaik you cannot attach global accelerator to cloudfront.<br>C) this is possible and should five some improvements for api access.<br>D) its more infrastructure but it would indeed improve performance.<br>E)This is AFAIK not possible.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It may be that this is an outdated question when there was no support for D(serverless v1 &lt;-&gt; serverless v2). In which case I indeed would go with AC instead.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 836457,
          "date": "Sat 11 Mar 2023 20:47",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "It may be that this is an outdated question when there was no support for D(serverless v1 <-> serverless v2). In which case I indeed would go with AC instead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829298,
          "date": "Sat 04 Mar 2023 20:17",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "D is wrong because question asked for improvement. nor re-architect.<br>B is not apt here although it improves networking performance because use case here is for S3 uploads.<br>E is wrong because there is no need of RDS proxy which provides DB connection pooling.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Global accelerator vs CloudFront<br>AWS Global Accelerator is designed for non-HTTP(S) traffic and is used when you have a globally distributed set of endpoints that need to be accessed by clients around the world. CloudFront is designed for HTTP(S) traffic and is used when you have web content that needs to be delivered to users around the world</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 829340,
          "date": "Sat 04 Mar 2023 20:53",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Global accelerator vs CloudFront<br>AWS Global Accelerator is designed for non-HTTP(S) traffic and is used when you have a globally distributed set of endpoints that need to be accessed by clients around the world. CloudFront is designed for HTTP(S) traffic and is used when you have web content that needs to be delivered to users around the world",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 805356,
          "date": "Sat 11 Feb 2023 16:43",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I agree with C vs D because the backend behind the API Gateway return metadata, which are cacheable with an edge-optimized API Gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 794658,
          "date": "Tue 31 Jan 2023 23:07",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Thinking better bout the ones that in combintion would help best, I finally vote B and D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 794646,
          "date": "Tue 31 Jan 2023 22:57",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "I think D will help more to reduce latency than A.  Compleexity or cost is not a factor in the request.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 793355,
          "date": "Mon 30 Jan 2023 22:20",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "well explained by masetromain :)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>His answers are from chatGPT :)</li><li>he often changes idea after someone contradicts.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 828432,
          "date": "Fri 03 Mar 2023 22:18",
          "username": "\t\t\t\tPete697989\t\t\t",
          "content": "His answers are from chatGPT :)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 794648,
          "date": "Tue 31 Jan 2023 22:57",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "he often changes idea after someone contradicts.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775798,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A and C are correct answers.A.  Enable S3 Transfer Acceleration on the S3 bucket and ensure that the web application uses the Transfer Acceleration signed URLs will accelerate the uploads of documents to S3 bucket, this will help to reduce the latency for users outside of Europe.C.  Change the API Gateway Regional endpoints to edge-optimized endpoints will help the company to improve the latency by caching the responses of the API Gateway closer to the users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B.  Creating an accelerator in AWS Global Accelerator and attaching it to the CloudFront distribution will not help in this scenario as it only helps to route the traffic to the optimal endpoint based on the location of the user.D.  Provisioning the entire stack in two other locations that are spread across the world and using global databases on the Aurora Serverless cluster will help to reduce the latency but it would be more complex to implement and manage.E.  Adding an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database will not help in this scenario because it is only used to improve connection management and load balancing for Amazon RDS databases, but not for Aurora Serverless databases.</li><li>https://www.examtopics.com/discussions/amazon/view/69470-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 775800,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Creating an accelerator in AWS Global Accelerator and attaching it to the CloudFront distribution will not help in this scenario as it only helps to route the traffic to the optimal endpoint based on the location of the user.D.  Provisioning the entire stack in two other locations that are spread across the world and using global databases on the Aurora Serverless cluster will help to reduce the latency but it would be more complex to implement and manage.E.  Adding an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database will not help in this scenario because it is only used to improve connection management and load balancing for Amazon RDS databases, but not for Aurora Serverless databases.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/69470-exam-aws-certified-solutions-architect-professional-topic-1/</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775801,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/69470-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An adventure company has launched a new feature on its mobile app. Users can use the feature to upload their hiking and rafting photos and videos anytime. The photos and videos are stored in Amazon S3 Standard storage in an S3 bucket and are served through Amazon CloudFront.<br><br>The company needs to optimize the cost of the storage. A solutions architect discovers that most of the uploaded photos and videos are accessed infrequently after 30 days. However, some of the uploaded photos and videos are accessed frequently after 30 days. The solutions architect needs to implement a solution that maintains millisecond retrieval availability of the photos and videos at the lowest possible cost.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>A. Configure S3 Intelligent-Tiering on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 Lifecycle policy to transition image objects and video objects from S3 Standard to S3 Glacier Deep Archive after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace Amazon S3 with an Amazon Elastic File System (Amazon EFS) file system that is mounted on Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a Cache-Control: max-age header to the S3 image objects and S3 video objects. Set the header to 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850992,
          "date": "Sun 26 Mar 2023 14:29",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A - easy question",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 844337,
          "date": "Mon 20 Mar 2023 00:32",
          "username": "\t\t\t\tokladev\t\t\t",
          "content": "A - S3 Intelligent-Tiering can fit the requirement",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829353,
          "date": "Sat 04 Mar 2023 20:59",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "First half of question drags you to answer B but SA found that some media is being used even after downloads. so data is being accessed in unknown patterns. Way to go is Intelligent tier.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>*I meant even after 30 days (not downloads in above comment)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829356,
          "date": "Sat 04 Mar 2023 21:00",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "*I meant even after 30 days (not downloads in above comment)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814959,
          "date": "Mon 20 Feb 2023 08:42",
          "username": "\t\t\t\tJungMun\t\t\t",
          "content": "This is my open. The question ask us maintains millisecond retrieval ability. It means we can't use cold storage (So, A, B is not answer). EFS is expensive and not durable. If we use client cache (Ignore client's volume), we can reduce network costs(actually s3's storage costs is really cheap). It means that we can reduce costs too.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There are lots of wrong types. Please forgive me. English is not familiar with me yet.</li><li>The keyword is millisecond retrieval time, which rules everything out except A. </li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814962,
          "date": "Mon 20 Feb 2023 08:44",
          "username": "\t\t\t\tJungMun\t\t\t",
          "content": "There are lots of wrong types. Please forgive me. English is not familiar with me yet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The keyword is millisecond retrieval time, which rules everything out except A. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820154,
          "date": "Fri 24 Feb 2023 07:05",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The keyword is millisecond retrieval time, which rules everything out except A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 809688,
          "date": "Wed 15 Feb 2023 16:32",
          "username": "\t\t\t\tklog\t\t\t",
          "content": "bc A solutions architect discovers that most of the uploaded photos and videos are accessed infrequently after 30 days. However, some of the uploaded photos and videos are accessed frequently after 30 days.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793358,
          "date": "Mon 30 Jan 2023 22:21",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "typico A S3 Intelligent-Tiering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792388,
          "date": "Mon 30 Jan 2023 05:22",
          "username": "\t\t\t\tjhonivy\t\t\t",
          "content": "D it will reduce the cost on retrieval requests",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776247,
          "date": "Sun 15 Jan 2023 09:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A.  Configure S3 Intelligent-Tiering on the S3 bucket.<br><br>Amazon S3 Intelligent-Tiering is a storage class that automatically moves objects between two access tiers based on changing access patterns. Objects that are accessed frequently are stored in the frequent access tier and objects that are accessed infrequently are stored in the infrequent access tier. This allows for cost optimization without requiring manual intervention. This makes it an ideal solution for the scenario described, as it can automatically move objects that are infrequently accessed after 30 days to a lower-cost storage tier while still maintaining millisecond retrieval availability.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is not correct as it only moves data to S3 Glacier Deep Archive after 30 days, which would still require additional steps to retrieve the data.<br>Option C is not correct because Amazon Elastic File System (Amazon EFS) is a file storage service for use with Amazon EC2 instances, it does not provide a cost-effective solution for storing and retrieving large amounts of data.<br>Option D is not correct because adding a Cache-Control: max-age header only controls the caching behavior of the objects and does not address the cost optimization requirements.</li><li>Option D works for the reduction cost on retrieval request</li><li>take the test then tell us if your answers are valid, if they are share them with us ;)</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776248,
          "date": "Sun 15 Jan 2023 09:12",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B is not correct as it only moves data to S3 Glacier Deep Archive after 30 days, which would still require additional steps to retrieve the data.<br>Option C is not correct because Amazon Elastic File System (Amazon EFS) is a file storage service for use with Amazon EC2 instances, it does not provide a cost-effective solution for storing and retrieving large amounts of data.<br>Option D is not correct because adding a Cache-Control: max-age header only controls the caching behavior of the objects and does not address the cost optimization requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D works for the reduction cost on retrieval request</li><li>take the test then tell us if your answers are valid, if they are share them with us ;)</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 792380,
          "date": "Mon 30 Jan 2023 05:15",
          "username": "\t\t\t\tjhonivy\t\t\t",
          "content": "Option D works for the reduction cost on retrieval request<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>take the test then tell us if your answers are valid, if they are share them with us ;)</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792822,
          "date": "Mon 30 Jan 2023 14:23",
          "username": "\t\t\t\tyoungprinceton\t\t\t",
          "content": "take the test then tell us if your answers are valid, if they are share them with us ;)",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store files and images in a variety of storage classes. The company's S3 costs have increased substantially during the past year.<br><br>A solutions architect needs to review data trends for the past 12 months and identity the appropriate storage class for the objects.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>A. Download AWS Cost and Usage Reports for the last 12 months of S3 usage. Review AWS Trusted Advisor recommendations for cost savings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use S3 storage class analysis. Import data trends into an Amazon QuickSight dashboard to analyze storage trends.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 Storage Lens. Upgrade the default dashboard to include advanced metrics for storage trends.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Access Analyzer for S3. Download the Access Analyzer for S3 report for the last 12 months. Import the .csv file to an Amazon QuickSight dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 853761,
          "date": "Wed 29 Mar 2023 00:30",
          "username": "\t\t\t\tAmac1979\t\t\t",
          "content": "C - storage lens",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850994,
          "date": "Sun 26 Mar 2023 14:30",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C - storage lens",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 844059,
          "date": "Sun 19 Mar 2023 18:40",
          "username": "\t\t\t\tDamijo\t\t\t",
          "content": "C - https://aws.amazon.com/blogs/storage/5-ways-to-reduce-costs-using-amazon-s3-storage-lens/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 842427,
          "date": "Sat 18 Mar 2023 03:17",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "Storage class: After you configure a filter, you'll start seeing data analysis based on the filter in the Amazon S3 console in 24 to 48 hours. However, storage class analysis observes the access patterns of a filtered data set for 30 days or longer to gather information for analysis before giving a result<br><br>Storage Lens: All S3 Storage Lens metrics are retained for a period of 15 months. However, metrics are only available for queries for a specific duration, which depends on your metrics selection. This duration can't be modified. Free metrics are available for queries for a 14-day period, and advanced metrics are available for queries for a 15-month period.<br><br>You have to upgrade regardless to query up to 12 months",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 830740,
          "date": "Mon 06 Mar 2023 12:08",
          "username": "\t\t\t\tandras\t\t\t",
          "content": "S3 is not among the cost optimization in trusted Advisor:<br>https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814668,
          "date": "Mon 20 Feb 2023 00:46",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "C - Storage Lens",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 811068,
          "date": "Thu 16 Feb 2023 21:14",
          "username": "\t\t\t\tryansmithnz\t\t\t",
          "content": "o review data trends and identify the appropriate storage class for the objects, the solutions architect can use the Amazon S3 Storage Lens feature. Amazon S3 Storage Lens provides organization-wide visibility into object storage, access, and usage patterns, making it easier to identify cost optimization opportunities and enforce compliance policies.<br><br>The architect can use the Storage Lens dashboard to view trends and metrics for the past 12 months, such as storage utilization, object size distribution, and access patterns. Based on these insights, the architect can determine the appropriate storage class for each object.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 806880,
          "date": "Sun 12 Feb 2023 23:58",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "not B because there is no cost information from this.<br>not C because it cannot analyze past access trends if you just activate storage lens<br>not D because you are just enabling it <br>choosing A because it will do the job. now.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Storage class analysis only provides recommendations for Standard to Standard IA classes.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817369,
          "date": "Wed 22 Feb 2023 03:03",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Storage class analysis only provides recommendations for Standard to Standard IA classes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 798895,
          "date": "Sun 05 Feb 2023 15:34",
          "username": "\t\t\t\tHeer\t\t\t",
          "content": "OPTION C:<br><br>If you have an increasing number of Amazon S3 buckets, spread across tens or even hundreds of accounts, you might be in search of a tool that makes it easier to manage your growing storage footprint and improve cost efficiencies. S3 Storage Lens is an analytics feature built-in to the S3 console to help you gain organization-wide visibility into your object storage usage and activity trends, and to identify cost savings opportunities. S3 Storage Lens is available for all S3 accounts, free of charge. You can also upgrade to advanced metrics to receive additional metrics, insights, and an extended data retention period.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795325,
          "date": "Wed 01 Feb 2023 17:48",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "B or C won't analyze anything from before enabling it. You are simply late. If you want to anlayze previous 12 months, go for A. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is the correct answer.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825275,
          "date": "Tue 28 Feb 2023 22:02",
          "username": "\t\t\t\tSuperP43\t\t\t",
          "content": "This is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795310,
          "date": "Wed 01 Feb 2023 17:40",
          "username": "\t\t\t\ttatdatpham\t\t\t",
          "content": "Both B and C can do that, but the question did not mention about cost so I vote for C because It has UI friendly :). <br>Advanced metrics in S3 Storage Lens help Generate metrics that can help you manage and optimize your storage costs, such as lifecycle rule counts for transitions, expirations, and incomplete multipart uploads. Data is available for queries for 15 months",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 795304,
          "date": "Wed 01 Feb 2023 17:37",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "It can't be B.  When you upgrade AWS S3 Storage Lens to get advanced metrics, metrics data is only preserved since the date when you upgraded, not for the previous 15 months before you upgraded. The request is to review the previous data for the last 12 months.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790769,
          "date": "Sat 28 Jan 2023 16:53",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "Both B and C are good.<br>I guess AWS wants clients to use S3 Storage Lens... Hence I vote C. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>agree with u gess aws want us to know about Lens</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793361,
          "date": "Mon 30 Jan 2023 22:24",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "agree with u gess aws want us to know about Lens",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786626,
          "date": "Tue 24 Jan 2023 15:52",
          "username": "\t\t\t\tvsk12\t\t\t",
          "content": "Answer B makes more sense as using QS, data can be analyzed further.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785362,
          "date": "Mon 23 Jan 2023 14:04",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "I vote C \\\"S3 Storage Lens\\\".<br>free metrics cannot provide recommendation, but upgrade metrics can provide recommendation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781213,
          "date": "Thu 19 Jan 2023 15:10",
          "username": "\t\t\t\tAjayD123\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776251,
          "date": "Sun 15 Jan 2023 09:16",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  The solution of using S3 storage class analysis and importing data trends into an Amazon QuickSight dashboard will allow the solutions architect to review data trends for the past 12 months and identify the appropriate storage class for the objects. This solution will allow the architect to see which objects are frequently accessed, which objects are infrequently accessed, and the costs associated with the different storage classes.<br><br>Option A, Downloading AWS Cost and Usage Reports for the last 12 months of S3 usage and reviewing AWS Trusted Advisor recommendations for cost savings, will provide information on S3 costs but does not provide data trends that allow the architect to determine the appropriate storage class for the objects.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C, Using Amazon S3 Storage Lens and upgrading the default dashboard to include advanced metrics for storage trends, will provide information on S3 usage but does not provide data trends that allow the architect to determine the appropriate storage class for the objects.<br><br>Option D, Using Access Analyzer for S3, and downloading the Access Analyzer for S3 report for the last 12 months and importing the .csv file to an Amazon QuickSight dashboard, is not relevant as it is used to analyze access controls and permissions to S3 resources, and it does not provide data trends that allow the architect to determine the appropriate storage class for the objects.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776252,
          "date": "Sun 15 Jan 2023 09:16",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C, Using Amazon S3 Storage Lens and upgrading the default dashboard to include advanced metrics for storage trends, will provide information on S3 usage but does not provide data trends that allow the architect to determine the appropriate storage class for the objects.<br><br>Option D, Using Access Analyzer for S3, and downloading the Access Analyzer for S3 report for the last 12 months and importing the .csv file to an Amazon QuickSight dashboard, is not relevant as it is used to analyze access controls and permissions to S3 resources, and it does not provide data trends that allow the architect to determine the appropriate storage class for the objects.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.<br></p>",
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
          "id": 850995,
          "date": "Sun 26 Mar 2023 14:31",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Use AWS Organizations and AWS CloudFormation StackSets",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793369,
          "date": "Mon 30 Jan 2023 22:28",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "The correct answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776255,
          "date": "Sun 15 Jan 2023 09:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is C.  Use AWS Organizations and AWS CloudFormation StackSets.<br>AWS Organizations allows the management of multiple AWS accounts as a single entity and AWS CloudFormation StackSets allows creating, updating, and deleting stacks across multiple accounts and regions in an organization. This solution allows creating a single CloudFormation template that can be deployed across multiple accounts and regions, and also allows for the management of access and permissions for the different accounts through the use of IAM roles and policies in the management account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A and D both use AWS CloudFormation, but do not take into account the management of multiple accounts and regions. Option B uses AWS Organizations but doesn't include the use of CloudFormation StackSets, which is necessary for managing deployments across multiple accounts and regions.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776256,
          "date": "Sun 15 Jan 2023 09:19",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A and D both use AWS CloudFormation, but do not take into account the management of multiple accounts and regions. Option B uses AWS Organizations but doesn't include the use of CloudFormation StackSets, which is necessary for managing deployments across multiple accounts and regions.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.<br></p>",
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
          "id": 795338,
          "date": "Wed 01 Feb 2023 17:58",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "This is repeated :-(",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795312,
          "date": "Wed 01 Feb 2023 17:42",
          "username": "\t\t\t\ttatdatpham\t\t\t",
          "content": "Duplicate question with #84",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777137,
          "date": "Sun 15 Jan 2023 23:39",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776257,
          "date": "Sun 15 Jan 2023 09:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "same question of \\\"Questions #84\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to refactor a monolithic application into a modern application design deployed on AWS. The CI/CD pipeline needs to be upgraded to support the modern design for the application with the following requirements:<br><br>• It should allow changes to be released several times every hour.<br>• It should be able to roll back the changes as quickly as possible.<br><br>Which design will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#86",
          "answers": [
            {
              "choice": "<p>A. Deploy a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Specify AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application. To deploy, swap the staging and production environment URLs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Systems Manager to re-provision the infrastructure for each deployment. Update the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and use Amazon Route 53 weighted routing to point to the new environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Roll out the application updates as part of an Auto Scaling event using prebuilt AMIs. Use new versions of the AMIs to add instances. and phase out all instances that use the previous AMI version with the configured termination policy during a deployment event.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850999,
          "date": "Sun 26 Mar 2023 14:32",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B.  Specify AWS Elastic Beanstalk",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 785014,
          "date": "Mon 23 Jan 2023 06:40",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776259,
          "date": "Sun 15 Jan 2023 09:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Specifying AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application and swapping the staging and production environment URLs. This approach allows the company to deploy updates several times an hour and quickly roll back changes as needed.<br><br>Option A, Deploying a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances, while it may provide a way to roll back changes by replacing instances with previous versions, it may not allow for rapid deployment of updates multiple times per hour.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C, Using AWS Systems Manager to re-provision the infrastructure for each deployment. Updating the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and using Amazon Route 53 weighted routing to point to the new environment, would require more time-consuming steps and may not be able to roll back changes as quickly.<br><br>Option D, Rolling out the application updates as part of an Auto Scaling event using prebuilt AMIs. Using new versions of the AMIs to add instances and phasing out all instances that use the previous AMI version with the configured termination policy during a deployment event, while it may be a way to roll back changes, it doesn't allow for rapid deployment of updates multiple times per hour.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776260,
          "date": "Sun 15 Jan 2023 09:24",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option C, Using AWS Systems Manager to re-provision the infrastructure for each deployment. Updating the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and using Amazon Route 53 weighted routing to point to the new environment, would require more time-consuming steps and may not be able to roll back changes as quickly.<br><br>Option D, Rolling out the application updates as part of an Auto Scaling event using prebuilt AMIs. Using new versions of the AMIs to add instances and phasing out all instances that use the previous AMI version with the configured termination policy during a deployment event, while it may be a way to roll back changes, it doesn't allow for rapid deployment of updates multiple times per hour.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances. A solutions architect is designing VPC infrastructure in an AWS Region where the application needs to access an Amazon Aurora DB Cluster. The EC2 instances are all associated with the same security group. The DB cluster is associated with its own security group.<br><br>The solutions architect needs to add rules to the security groups to provide the application with least privilege access to the DB Cluster.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>A. Add an inbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the source over the default Aurora port.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the default Aurora port.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the ephemeral ports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776264,
          "date": "Sun 15 Jan 2023 09:27",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct combination of steps to meet these requirements is B and C. <br>B.  Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port. This allows the instances to make outbound connections to the DB cluster on the default Aurora port.<br>C.  Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port. This allows connections to the DB cluster from the EC2 instances on the default Aurora port.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A.  Adding an inbound rule to the EC2 instances' security group would allow incoming connections to the instances on the default Aurora port, but it would not allow the instances to connect to the DB cluster.<br>D.  Adding an outbound rule to the DB cluster's security group would allow the DB cluster to make outbound connections to the EC2 instances on the default Aurora port, but it would not allow connections to the DB cluster from the instances.<br>E.  Adding an outbound rule to the DB cluster's security group specifying the EC2 instances' security group as the destination over the ephemeral ports would allow the DB cluster to make outbound connections to the instances on ephemeral ports, but it would not allow connections to the DB cluster from the instances on the default Aurora port.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 776267,
          "date": "Sun 15 Jan 2023 09:27",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  Adding an inbound rule to the EC2 instances' security group would allow incoming connections to the instances on the default Aurora port, but it would not allow the instances to connect to the DB cluster.<br>D.  Adding an outbound rule to the DB cluster's security group would allow the DB cluster to make outbound connections to the EC2 instances on the default Aurora port, but it would not allow connections to the DB cluster from the instances.<br>E.  Adding an outbound rule to the DB cluster's security group specifying the EC2 instances' security group as the destination over the ephemeral ports would allow the DB cluster to make outbound connections to the instances on ephemeral ports, but it would not allow connections to the DB cluster from the instances on the default Aurora port.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 851002,
          "date": "Sun 26 Mar 2023 14:36",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "BC gets my vote",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 842430,
          "date": "Sat 18 Mar 2023 03:36",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "Look at the traffic - from the instances EC2 -> DB Cluster I need to go to it as the destination and port (outbound, nothing more or less); so that DB responses needs to see my Security group (since they are shared) coming inbound on that port; any other port deny. <br><br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/working-with-security-groups.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 822262,
          "date": "Sun 26 Feb 2023 11:46",
          "username": "\t\t\t\tGabehcoud\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/security-group-rules.html<br>By default, security groups contain outbound rules that allow all outbound traffic. So why do we even need a outbound rule? Guys common. lets not confuse each other.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"You can delete these rules...\\\"<br>Practice Security Best Practices - although default why are you leaving all outbound traffic open?<br><br>Besides, to go w/ least privilege access would delete the outbound all rule and only allow outbound to DB cluster.</li><li>That is a really good point, keep in mind that is when you create a security group using the GUI/Console when you use API the SG outbound does not have that allow-all. But again this is not part of the question. If we add that outbound rule, should we need to add others like DNS???</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 842432,
          "date": "Sat 18 Mar 2023 03:45",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "\\\"You can delete these rules...\\\"<br>Practice Security Best Practices - although default why are you leaving all outbound traffic open?<br><br>Besides, to go w/ least privilege access would delete the outbound all rule and only allow outbound to DB cluster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826221,
          "date": "Wed 01 Mar 2023 20:39",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "That is a really good point, keep in mind that is when you create a security group using the GUI/Console when you use API the SG outbound does not have that allow-all. But again this is not part of the question. If we add that outbound rule, should we need to add others like DNS???",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810331,
          "date": "Thu 16 Feb 2023 07:48",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "To provide the application with least privilege access to the Aurora DB cluster, the solutions architect should add inbound rules to both the security groups.<br><br>For the EC2 instances' security group, an inbound rule should be added that allows traffic from the DB cluster's security group over the default Aurora port. This will allow the EC2 instances to communicate with the Aurora DB cluster.<br><br>For the Aurora DB cluster's security group, an inbound rule should be added that allows traffic from the EC2 instances' security group over the default Aurora port. This will allow the Aurora DB cluster to communicate with the EC2 instances.<br><br>By default all outbound rules are open, it's only the ingress that needs to allow traffic.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B&amp;C after doing a recreate in the AWS Console, stand corrected.</li><li>To provide the application with least privilege access to the Amazon Aurora DB Cluster, the solutions architect should take the following steps:<br><br>Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port (port 3306). This will allow the EC2 instances to connect to the Aurora DB Cluster.<br><br>Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port (port 3306). This will allow the EC2 instances to send traffic to the Aurora DB Cluster.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 817384,
          "date": "Wed 22 Feb 2023 03:15",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "B&C after doing a recreate in the AWS Console, stand corrected.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To provide the application with least privilege access to the Amazon Aurora DB Cluster, the solutions architect should take the following steps:<br><br>Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port (port 3306). This will allow the EC2 instances to connect to the Aurora DB Cluster.<br><br>Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port (port 3306). This will allow the EC2 instances to send traffic to the Aurora DB Cluster.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 818556,
          "date": "Thu 23 Feb 2023 00:54",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "To provide the application with least privilege access to the Amazon Aurora DB Cluster, the solutions architect should take the following steps:<br><br>Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port (port 3306). This will allow the EC2 instances to connect to the Aurora DB Cluster.<br><br>Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port (port 3306). This will allow the EC2 instances to send traffic to the Aurora DB Cluster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795322,
          "date": "Wed 01 Feb 2023 17:47",
          "username": "\t\t\t\ttatdatpham\t\t\t",
          "content": "Flow connection: EC2 -> DB<br>So you need to configure Outbound EC2 and Inbound DB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 793384,
          "date": "Mon 30 Jan 2023 22:37",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "seems logic<br>outbound EC2 and inbound to DB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br><br>Which solution is the MOST cost-effective way to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Budgets in the organization's management account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's management account to create monthly reports for each business unit.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Cost and Usage Reports in the organization's management account and configure reports grouped by application, environment. and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776270,
          "date": "Sun 15 Jan 2023 09:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "B.  Configure AWS Budgets in the organization's management account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's management account to create monthly reports for each business unit.<br><br>This option is the most cost-effective because it utilizes the organization's management account to set budgets and configure alerts for all accounts in the organization, rather than having to configure budgets and alerts individually in each account. Additionally, using Cost Explorer in the management account allows the cloud governance team to view the consolidated spending for all accounts in the organization and create reports for each business unit. This eliminates the need to access each individual account to view costs and create reports.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is not the most cost-effective solution because it requires configuring budgets and reports in multiple accounts, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option C is not the most cost-effective solution because it requires the cloud governance team to access the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option D is not the most cost-effective solution because it requires creating an AWS Lambda function to process AWS Cost and Usage Reports, which increases the complexity and cost of managing the cloud spending for each business unit.</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776271,
          "date": "Sun 15 Jan 2023 09:32",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is not the most cost-effective solution because it requires configuring budgets and reports in multiple accounts, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option C is not the most cost-effective solution because it requires the cloud governance team to access the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option D is not the most cost-effective solution because it requires creating an AWS Lambda function to process AWS Cost and Usage Reports, which increases the complexity and cost of managing the cloud spending for each business unit.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 851003,
          "date": "Sun 26 Mar 2023 14:39",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B.  Configure AWS Budgets in the organization's management account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#89",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CloudFormation to deploy its infrastructure. The company is concerned that, if a production CloudFormation stack is deleted, important data stored in Amazon RDS databases or Amazon EBS volumes might also be deleted.<br><br>How can the company prevent users from accidentally deleting data in this way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>A. Modify the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a stack policy that disallows the deletion of RDS and EBS resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify IAM policies lo deny deleting RDS and EBS resources that are tagged with an \"aws:cloudformation:stack-name\" tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Config rules to prevent deleting RDS and EBS resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 851006,
          "date": "Sun 26 Mar 2023 14:40",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 842435,
          "date": "Sat 18 Mar 2023 03:57",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html<br>With the DeletionPolicy attribute you can preserve, and in some cases, backup a resource when its stack is deleted. You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy attribute, AWS CloudFormation deletes the resource by default.<br>Retain<br>CloudFormation keeps the resource without deleting the resource or its contents when its stack is deleted. You can add this deletion policy to any resource type. When CloudFormation completes the stack deletion, the stack will be in Delete_Complete state; however, resources that are retained continue to exist and continue to incur applicable charges until you delete those resource",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 833396,
          "date": "Wed 08 Mar 2023 22:58",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "A stack policy is a document that defines the update and deletion actions that can be performed on resources in a CloudFormation stack. By default, all resources in a CloudFormation stack can be deleted by users with appropriate permissions. However, you can use a stack policy to restrict the deletion of certain resources, such as Amazon RDS databases or Amazon EBS volumes.<br><br>In this case, the company can create a stack policy that explicitly disallows the deletion of any RDS or EBS resources in the production CloudFormation stack. This will prevent users from accidentally deleting important data stored in these resources.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829621,
          "date": "Sun 05 Mar 2023 05:17",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "For RDS instances, you can set the \\\"DeletionPolicy\\\" attribute to \\\"Retain\\\". This will ensure that when the stack is deleted, the RDS instance will not be deleted and its data will be retained. <br><br>For EBS volumes, you can use the \\\"DeletionPolicy\\\" attribute in combination with the \\\"SnapshotId\\\" attribute to create a snapshot of the volume before deleting it. This will allow you to restore the data later if need<br><br>Yaml examples for RDS and EBS :<br><br>Resources:<br>MyDB:<br>Type: AWS::RDS::DBInstance<br>Properties:<br># RDS instance properties go here<br>DeletionPolicy: Retain<br><br>Resources:<br>MyVolume:<br>Type: AWS::EC2::Volume<br>Properties:<br># Volume properties go here<br>DeletionPolicy: Snapshot<br>SnapshotId: my-snapshot-id",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 811253,
          "date": "Fri 17 Feb 2023 01:36",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "Clear A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 808891,
          "date": "Tue 14 Feb 2023 23:04",
          "username": "\t\t\t\tlunt\t\t\t",
          "content": "AC1984 do your homework.<br>Stack policy can protect against deletion but not against actual entire CFN stack template being deleted. DeletionPolicy = if I was to delete the entire CFN stack, the CFN process will delete all elements and skip over RDS and EBS due to protections. 20 second Google search could of confirmed this.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 808104,
          "date": "Tue 14 Feb 2023 06:39",
          "username": "\t\t\t\tAC1984\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808102,
          "date": "Tue 14 Feb 2023 06:37",
          "username": "\t\t\t\tAC1984\t\t\t",
          "content": "B.  Configure a stack policy that disallows the deletion of RDS and EBS resources.<br>A stack policy is a JSON-based document that defines the actions that can be performed on a CloudFormation stack, and can be used to prevent users from accidentally deleting critical resources. By configuring a stack policy that disallows the deletion of RDS and EBS resources, the company can prevent users from accidentally deleting important data stored in those resources.<br><br>Option A (adding a DeletionPolicy attribute) does not prevent users from deleting the resources, but rather determines what happens to the resources when the stack is deleted. Option C (modifying IAM policies) is not sufficient because it only affects the permissions of specific users or groups, and does not prevent accidental deletions. Option D (using AWS Config rules) can help detect deletions of RDS and EBS resources, but it does not prevent them from being deleted.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Option A (adding a DeletionPolicy attribute) does not prevent users from deleting the resources, but rather determines what happens to the resources when the stack is deleted.\\\" This is actually what the question is asking !</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827767,
          "date": "Fri 03 Mar 2023 09:24",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "\\\"Option A (adding a DeletionPolicy attribute) does not prevent users from deleting the resources, but rather determines what happens to the resources when the stack is deleted.\\\" This is actually what the question is asking !",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 805515,
          "date": "Sat 11 Feb 2023 19:26",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "I go for A because I assume that the CF stack is allowed to be deleted in some deployment scenarios.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793388,
          "date": "Mon 30 Jan 2023 22:45",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785490,
          "date": "Mon 23 Jan 2023 15:51",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "\\\"DeletionPolicy\\\" : \\\"Retain\\\"　can prevent to delete resource",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780227,
          "date": "Wed 18 Jan 2023 17:48",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "I switch to A:<br>https://www.examtopics.com/discussions/amazon/view/5233-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Modifying the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources, is another valid solution to prevent accidental deletion of data in this scenario. By adding a DeletionPolicy attribute of \\\"Retain\\\" to RDS and EBS resources in the CloudFormation templates, the company can ensure that these resources and their data are not deleted when the CloudFormation stack is deleted. This is a way to prevent accidental deletion of data by preserving the resources when the stack is deleted.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B, Configuring a stack policy that disallows the deletion of RDS and EBS resources, would also prevent accidental deletion of data by RDS and EBS resources, but it does so by controlling access to the resources rather than preserving the resources as Option A does. Stack policies are a way to set up fine-grained access controls for the CloudFormation stack, so it would prevent users who are not authorized to delete RDS and EBS resources from doing so.<br><br>Option C, Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, is not a good solution because it only controls who can delete the resources, not whether they are deleted or retained when the stack is deleted.<br><br>Option D, Using AWS Config rules to prevent deleting RDS and EBS resources, is also not a good solution because AWS Config only records and monitors the configuration changes, it does not prevent any action on the resources.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780228,
          "date": "Wed 18 Jan 2023 17:48",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B, Configuring a stack policy that disallows the deletion of RDS and EBS resources, would also prevent accidental deletion of data by RDS and EBS resources, but it does so by controlling access to the resources rather than preserving the resources as Option A does. Stack policies are a way to set up fine-grained access controls for the CloudFormation stack, so it would prevent users who are not authorized to delete RDS and EBS resources from doing so.<br><br>Option C, Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, is not a good solution because it only controls who can delete the resources, not whether they are deleted or retained when the stack is deleted.<br><br>Option D, Using AWS Config rules to prevent deleting RDS and EBS resources, is also not a good solution because AWS Config only records and monitors the configuration changes, it does not prevent any action on the resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777146,
          "date": "Sun 15 Jan 2023 23:51",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776274,
          "date": "Sun 15 Jan 2023 09:36",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is B.  Configuring a stack policy that disallows the deletion of RDS and EBS resources will prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted.<br>A.  Modifying the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources may prevent data from being deleted, but it does not prevent the stack deletion itself, which is the main concern.<br>C.  Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, would not help to prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted.<br>D.  Using AWS Config rules to prevent deleting RDS and EBS resources would prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted, but it does not prevent the stack deletion itself.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Bro, Question is not concerned about stack deletion, only RDS/EBS data.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829622,
          "date": "Sun 05 Mar 2023 05:20",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Bro, Question is not concerned about stack deletion, only RDS/EBS data.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has VPC flow logs enabled for Its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address 198.51.100.2 destined for a private Amazon EC2 instance.<br><br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br><br>Which set of steps should the solutions architect take to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>A. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interlace. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 786637,
          "date": "Tue 24 Jan 2023 16:16",
          "username": "\t\t\t\tvsk12\t\t\t",
          "content": "I would go with option B.  Source will be public IP like 198.51.100.2.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 851014,
          "date": "Sun 26 Mar 2023 14:48",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Option B is better than option D because it filters the logs based on the source address \\\"like 198.51.100.2\\\" (the public IP address) and the destination address \\\"like 203.0\\\" (which corresponds to the VPC CIDR block). By analyzing the traffic between these addresses, you can determine whether the traffic represents unsolicited inbound connections from the internet.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842690,
          "date": "Sat 18 Mar 2023 12:12",
          "username": "\t\t\t\ttaer\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842436,
          "date": "Sat 18 Mar 2023 04:09",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "B is the better option -> we need to understand why and which IPs this is hitting. If it is being allowed through, then we can identify the actual Private internal VPC that may have a bad inbound security group allowing connectivity. <br><br>Once that is identified, we could reverse (or add an 'or') to see all inbound and outbound traffic between the two. <br><br>Identify the actual flow first before flipping it hence statement:<br>Query results show traffic on the NAT gateway private IP from the public IP, but not traffic on other private IPs in the VPC.  These results confirm that the incoming traffic was unsolicited. However, if you do see traffic on the private instance's IP, then follow the steps under Reason #2.<br><br>(this is more security analytics/traffic log review)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 837556,
          "date": "Mon 13 Mar 2023 03:30",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "source is internet address",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 833403,
          "date": "Wed 08 Mar 2023 23:11",
          "username": "\t\t\t\tkiran15789\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/<br><br>Refer Reason 1<br><br>Run the query below.<br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10<br>Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.<br><br>Query results show traffic on the NAT gateway private IP from the public IP, but not traffic on other private IPs in the VPC.  These results confirm that the incoming traffic was unsolicited. However, if you do see traffic on the private instance's IP, then follow the steps under Reason #2.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For those that are choosing D - this is why D is incorrect and needs to be B</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842437,
          "date": "Sat 18 Mar 2023 04:11",
          "username": "\t\t\t\tzejou1\t\t\t",
          "content": "For those that are choosing D - this is why D is incorrect and needs to be B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819324,
          "date": "Thu 23 Feb 2023 15:58",
          "username": "\t\t\t\tsaurabh1805\t\t\t",
          "content": "for me correct answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 819285,
          "date": "Thu 23 Feb 2023 15:23",
          "username": "\t\t\t\tmonkeyfish\t\t\t",
          "content": "B because:<br>destination address set as \\\"like 203.0\\\"<br>source address set as \\\"like 198.51.100.2\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817391,
          "date": "Wed 22 Feb 2023 03:20",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Option D is the correct answer because Amazon CloudWatch Logs Insights can be used to filter the sum of bytes transferred by the source address and the destination address. The solution architect should open the CloudWatch console, select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface, and then run a query to filter with the destination address set as \\\"like 198.51.100.2\\\" and the source address set as \\\"like 203.0\\\". Finally, run the stats command to filter the sum of bytes transferred by the source address and the destination address.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813287,
          "date": "Sat 18 Feb 2023 17:36",
          "username": "\t\t\t\tgetsat0024\t\t\t",
          "content": "It is B <br>Reference:https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Based in this is D.  <br><br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10</li><li>my bad is B <br><br> Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.</li><li>VPC cidr is SRC \\\"203.0\\\" <br>DST = 195.51.100.2 which is public address<br><br>keep in mind you're tracing the route from the VPC SRC (203.0.) to the Public internet DST 195.51.100.2 using cloudwatch.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 815702,
          "date": "Mon 20 Feb 2023 20:08",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "Based in this is D.  <br><br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>my bad is B <br><br> Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.</li><li>VPC cidr is SRC \\\"203.0\\\" <br>DST = 195.51.100.2 which is public address<br><br>keep in mind you're tracing the route from the VPC SRC (203.0.) to the Public internet DST 195.51.100.2 using cloudwatch.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815707,
          "date": "Mon 20 Feb 2023 20:10",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "my bad is B <br><br> Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>VPC cidr is SRC \\\"203.0\\\" <br>DST = 195.51.100.2 which is public address<br><br>keep in mind you're tracing the route from the VPC SRC (203.0.) to the Public internet DST 195.51.100.2 using cloudwatch.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817396,
          "date": "Wed 22 Feb 2023 03:26",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "VPC cidr is SRC \\\"203.0\\\" <br>DST = 195.51.100.2 which is public address<br><br>keep in mind you're tracing the route from the VPC SRC (203.0.) to the Public internet DST 195.51.100.2 using cloudwatch.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811256,
          "date": "Fri 17 Feb 2023 01:39",
          "username": "\t\t\t\tspd\t\t\t",
          "content": "I think B - SOurce public IP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 806067,
          "date": "Sun 12 Feb 2023 08:33",
          "username": "\t\t\t\toatif\t\t\t",
          "content": "B is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 805529,
          "date": "Sat 11 Feb 2023 19:46",
          "username": "\t\t\t\tmoota\t\t\t",
          "content": "Trick question. A NAT Gateway is not supposed to accept incoming traffic. There might be a security issue here.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/<br><br>basically it accepts the traffic, then dopt it.<br>the idea is check if the sum is more than 0 from NAT to Public Destination</li><li>looks like i am wrongshould be D<br><br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10<br><br>Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.</li><li>No I think you are right. It talks about *inbound* traffic. Meaning source is the public IP. If this is even possible in reality: don't know. Question does say inbound - so....</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815700,
          "date": "Mon 20 Feb 2023 20:07",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/<br><br>basically it accepts the traffic, then dopt it.<br>the idea is check if the sum is more than 0 from NAT to Public Destination<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>looks like i am wrongshould be D<br><br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10<br><br>Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.</li><li>No I think you are right. It talks about *inbound* traffic. Meaning source is the public IP. If this is even possible in reality: don't know. Question does say inbound - so....</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815708,
          "date": "Mon 20 Feb 2023 20:12",
          "username": "\t\t\t\trtgfdv3\t\t\t",
          "content": "looks like i am wrongshould be D<br><br>filter (dstAddr like 'xxx.xxx' and srcAddr like 'public IP')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10<br><br>Note: You can use just the first two octets in the search filter to analyze all network interfaces in the VPC.  In the example above, replace xxx.xxx with the first two octets of your VPC classless inter-domain routing (CIDR). Also, replace public IP with the public IP that you're seeing in the VPC flow log entry.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No I think you are right. It talks about *inbound* traffic. Meaning source is the public IP. If this is even possible in reality: don't know. Question does say inbound - so....</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837563,
          "date": "Mon 13 Mar 2023 03:37",
          "username": "\t\t\t\thobokabobo\t\t\t",
          "content": "No I think you are right. It talks about *inbound* traffic. Meaning source is the public IP. If this is even possible in reality: don't know. Question does say inbound - so....",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790785,
          "date": "Sat 28 Jan 2023 17:08",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "This is a trick question.<br>'Action = ACCEPT' response is sent from private EC2 instances (203.0.x.x) to the public IP address (198.51.100.2) via the NAT Gateway. The NAT Gateway can catch only this outbound traffic because the relevant inbound traffic does not pass through the NAT Gateway.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 790070,
          "date": "Sat 28 Jan 2023 00:39",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "should be B no? as the source =198.51.100.2. and dest =203.0<br>I think D is the inverse",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776281,
          "date": "Sun 15 Jan 2023 09:44",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \\\"like 198.51.100.2\\\" and the source address set as \\\"like 203.0\\\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br><br>This set of steps will allow the solutions architect to determine whether the inbound traffic coming from the public IP address 198.51.100.2 is unsolicited, by filtering the VPC flow logs to show the traffic that is going to the private Amazon EC2 instance, and then checking if the traffic is coming from within the VPC CIDR block (203.0) or from outside of it (198.51.100.2). By using Amazon CloudWatch and filtering the logs with the specified IP addresses, the architect can quickly and efficiently identify any unsolicited traffic.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other options are not correct because they are not using the correct service (CloudTrail instead of CloudWatch) or not filtering the logs correctly with the specified IP addresses and the desired information is not available.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776282,
          "date": "Sun 15 Jan 2023 09:44",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The other options are not correct because they are not using the correct service (CloudTrail instead of CloudWatch) or not filtering the logs correctly with the specified IP addresses and the desired information is not available.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company consists or two separate business units. Each business unit has its own AWS account within a single organization in AWS Organizations. The business units regularly share sensitive documents with each other. To facilitate sharing, the company created an Amazon S3 bucket in each account and configured low-way replication between the S3 buckets. The S3 buckets have millions of objects.<br><br>Recently, a security audit identified that neither S3 bucket has encryption at rest enabled. Company policy requires that all documents must be stored with encryption at rest. The company wants to implement server-side encryption with Amazon S3 managed encryption keys (SSE-S3).<br><br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Turn on SSE-S3 on both S3 buckets. Use S3 Batch Operations to copy and encrypt the objects in the same location.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Key Management Service (AWS KMS) key in each account. Turn on server-side encryption with AWS KMS keys (SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account. Encrypt the existing objects by using an S3 copy command in the AWS CLI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on SSE-S3 on both S3 buckets. Encrypt the existing objects by using an S3 copy command in the AWS CLI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Key Management Service, (AWS KMS) key in each account. Turn on server-side encryption with AWS KMS keys (SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account. Use S3 Batch Operations to copy the objects into the same location.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 851035,
          "date": "Sun 26 Mar 2023 15:10",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A is much more efficient",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837247,
          "date": "Sun 12 Mar 2023 18:03",
          "username": "\t\t\t\ttestingaws123\t\t\t",
          "content": "Answer is A<br>Keyword is \\\"The S3 buckets have millions of objects\\\"<br>If there are million of objects then you should use Batch operations. <br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>good point, changing my answer to A</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 844307,
          "date": "Sun 19 Mar 2023 23:46",
          "username": "\t\t\t\tforceli\t\t\t",
          "content": "good point, changing my answer to A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834525,
          "date": "Fri 10 Mar 2023 01:21",
          "username": "\t\t\t\tforceli\t\t\t",
          "content": "A and C seems to be correct but using batch requires more steps.<br>https://aws.amazon.com/blogs/storage/encrypting-existing-amazon-s3-objects-with-the-aws-cli/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829668,
          "date": "Sun 05 Mar 2023 06:55",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "C is wrong. How can S3 copy encrypt ? A is correct. Refer how S3 batch operations are used to encrypt here -https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826260,
          "date": "Wed 01 Mar 2023 21:52",
          "username": "\t\t\t\tSarutobi\t\t\t",
          "content": "I guess A and/or C can be because they are pretty close; after reading everything here, they are a lot of good points.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810813,
          "date": "Thu 16 Feb 2023 16:16",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Encrypting existing objects<br>To encrypt your existing Amazon S3 objects, you can use Amazon S3 Batch Operations. You provide S3 Batch Operations with a list of objects to operate on, and Batch Operations calls the respective API to perform the specified operation. You can use the Batch Operations Copy operation to copy existing unencrypted objects and write them back to the same bucket as encrypted objects. A single Batch Operations job can perform the specified operation on billions of objects. For more information, see Performing large-scale batch operations on Amazon S3 objects and the AWS Storage Blog post Encrypting objects with Amazon S3 Batch Operations.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html?icmpid=docs_s3_hp_create_bucket_default_encryption",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797131,
          "date": "Fri 03 Feb 2023 16:11",
          "username": "\t\t\t\tmmendozaf\t\t\t",
          "content": "To encrypt you need to Re-copy the file and batch is more efficient.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795402,
          "date": "Wed 01 Feb 2023 19:27",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "As per Romidan's link, it is clear.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793830,
          "date": "Tue 31 Jan 2023 09:20",
          "username": "\t\t\t\tmikeshop\t\t\t",
          "content": "Batch operations are more efficient for millions of objects than running the CLI command.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790161,
          "date": "Sat 28 Jan 2023 02:48",
          "username": "\t\t\t\tromidan\t\t\t",
          "content": "Option A seems efficient as per the blog - <br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786641,
          "date": "Tue 24 Jan 2023 16:24",
          "username": "\t\t\t\tvsk12\t\t\t",
          "content": "Option A is correct since manual copying (Option C) for millions of objects is time-consuming.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785616,
          "date": "Mon 23 Jan 2023 17:44",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "I vote C<br>https://aws.amazon.com/jp/blogs/news/encrypting-existing-amazon-s3-objects-with-the-aws-cli/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As mikeshop said: For S3 buckets with a large number of objects, in the order of millions or billions of objects, using Amazon S3 inventory or Amazon S3 Batch Operations can be a better option than using the AWS CLI instructions in this post.</li><li>If you read further in that post, it says that for large object stores, batch operations are more efficient.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 795401,
          "date": "Wed 01 Feb 2023 19:26",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "As mikeshop said: For S3 buckets with a large number of objects, in the order of millions or billions of objects, using Amazon S3 inventory or Amazon S3 Batch Operations can be a better option than using the AWS CLI instructions in this post.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 793828,
          "date": "Tue 31 Jan 2023 09:19",
          "username": "\t\t\t\tmikeshop\t\t\t",
          "content": "If you read further in that post, it says that for large object stores, batch operations are more efficient.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785332,
          "date": "Mon 23 Jan 2023 13:22",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "I thought option A might be correct after reading the below blog article because there were millions of objects in the S3 buckets in this scenario.<br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776290,
          "date": "Sun 15 Jan 2023 09:50",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is option C.  Turn on SSE-S3 on both S3 buckets and encrypt the existing objects by using an S3 copy command in the AWS CLI.<br>This option is the most operationally efficient solution because it uses the built-in SSE-S3 feature of S3, which eliminates the need to create and manage additional KMS keys and encrypting existing objects using S3 copy command is a straight forward process.<br><br>Option A is not the most operationally efficient solution because it requires additional steps to encrypt the objects which might take time as there are millions of objects.<br><br>Option B and D are not the most operationally efficient solution because they require additional steps to create and manage KMS keys. Additionally, they also require additional steps to encrypt the existing objects.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#92",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application collects and stores a large amount of unstructured data in an Amazon S3 bucket. The S3 bucket contains several terabytes of data and uses the S3 Standard storage class. The data increases in size by several gigabytes every day.<br><br>The company needs to query and analyze the data. The company does not access data that is more than 1 year old. However, the company must retain all the data indefinitely for compliance reasons.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Use S3 Select to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Redshift Spectrum to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old 10 S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Glue Data Catalog and Amazon Athena to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Redshift Spectrum to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Intelligent-Tiering.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 779093,
          "date": "Tue 17 Jan 2023 18:00",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is C.  Use an AWS Glue Data Catalog and Amazon Athena to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.<br><br>This solution allows you to use Amazon Athena and the AWS Glue Data Catalog to query and analyze the data in an S3 bucket. Amazon Athena is a serverless, interactive query service that allows you to analyze data in S3 using SQL. The AWS Glue Data Catalog is a managed metadata repository that can be used to store and retrieve table definitions for data stored in S3. Together, these services can provide a cost-effective way to query and analyze large amounts of unstructured data. Additionally, by using an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive, you can retain the data indefinitely for compliance reasons while also reducing storage costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other options are not correct because:A.  Using S3 Select is good for filtering data in S3, but it may not be a suitable solution for querying and analyzing large amounts of data.<br>B.  Amazon Redshift Spectrum can be used to query data stored in S3, but it may not be as cost-effective as using Amazon Athena for querying unstructured data<br>D.  Using Amazon Redshift Spectrum with S3 Intelligent-Tiering could be a good solution, but S3 Intelligent-Tiering is designed to optimize storage costs based on access patterns and it would not be the best solution for compliance reasons as S3 Intelligent-Tiering will move data to other storage classes according to access patterns.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779094,
          "date": "Tue 17 Jan 2023 18:01",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The other options are not correct because:A.  Using S3 Select is good for filtering data in S3, but it may not be a suitable solution for querying and analyzing large amounts of data.<br>B.  Amazon Redshift Spectrum can be used to query data stored in S3, but it may not be as cost-effective as using Amazon Athena for querying unstructured data<br>D.  Using Amazon Redshift Spectrum with S3 Intelligent-Tiering could be a good solution, but S3 Intelligent-Tiering is designed to optimize storage costs based on access patterns and it would not be the best solution for compliance reasons as S3 Intelligent-Tiering will move data to other storage classes according to access patterns.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 851039,
          "date": "Sun 26 Mar 2023 15:11",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "C is the best choice for unstructured data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829679,
          "date": "Sun 05 Mar 2023 07:16",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "S3 select only to select few parts of the data and here its lot of unstructured data. So A is wrong. Use Athena console to create Glue crawler as referred here - <br>https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827819,
          "date": "Fri 03 Mar 2023 10:17",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "I think \\\"semi-structured\\\" is the right word here, because unstructured can be videos, images or text that has no schema.<br>Assuming that we want to query semi-structured data :<br>I don't understand why everyone is voting Athena.<br>Athena is fast in certain cases and has more features for aggregation, but we are just asking querying here (and analyzing is very vague).<br>In terms of cost, S3 select is around 2$ by TB scanned, and Athena is 5$.<br>Glue data catalog brings ease of use, but is not required for querying with athena.<br>S3 select is not limited in the amount of scanned data, only in the row size (1MB)<br>Can someone explain ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 793411,
          "date": "Mon 30 Jan 2023 23:21",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "AWS Glue Data Catalog to convert data to be structuredbefore querying them <br>Amazon Athena to query the data. <br>Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790789,
          "date": "Sat 28 Jan 2023 17:15",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "Generally, unstructured data should be converted structured data before querying them. AWS Glue can do that.<br>https://docs.aws.amazon.com/glue/latest/dg/schema-relationalize.html<br>https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777154,
          "date": "Mon 16 Jan 2023 00:00",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct because it is unstructured data. You cannot use S3 select and must use Glue Crawler to generate catalg.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776293,
          "date": "Sun 15 Jan 2023 09:54",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A is the correct answer. S3 Select allows you to query the data stored in an S3 bucket, which can be useful when you need to retrieve specific subsets of data from a large amount of data. By creating an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive, you can save cost as it is a low-cost storage class for archival data that is infrequently accessed and for which retrieval times of several hours are acceptable. This solution is most cost-effective as it allows you to keep all the data indefinitely for compliance reasons while also reducing storage costs for older data that is not frequently accessed.<br><br>The other options are not as cost-effective as they would require additional costs for data transfer, storage and query in other services.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video processing company wants to build a machine learning (ML) model by using 600 TB of compressed data that is stored as thousands of files in the company's on-premises network attached storage system. The company does not have the necessary compute resources on premises for ML experiments and wants to use AWS.<br><br>The company needs to complete the data transfer to AWS within 3 weeks. The data transfer will be a one-time transfer. The data must be encrypted in transit. The measured upload speed of the company's internet connection is 100 Mbps. and multiple departments share the connection.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
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
              "choice": "<p>C. Create a VPN connection between the on-premises network attached storage and the nearest AWS Region. Transfer the data over the VPN connection.<br></p>",
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
          "id": 851041,
          "date": "Sun 26 Mar 2023 15:13",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A obviously",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830135,
          "date": "Sun 05 Mar 2023 18:32",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Around 8 devices and snowball (actually a Rectangular box)<br>Snowball Edge Storage Optimized device is equipped with up to 80 terabytes (TB) of storage capacity, as well as 40 vCPUs and 80 GB of memory for running compute-intensive applications. It also includes an optional GPU for accelerated computing workloads.<br><br>Built-in security features such as tamper-resistant enclosures, an E Ink shipping label, and 256-bit encryption for data at rest and in transit.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793413,
          "date": "Mon 30 Jan 2023 23:22",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "3 weeks + cost effective ==> Snowball Edge Storage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776295,
          "date": "Sun 15 Jan 2023 09:56",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A.  Order several AWS Snowball Edge Storage Optimized devices by using the AWS Management Console. Configure the devices with a destination S3 bucket. Copy the data to the devices. Ship the devices back to AWS.<br><br>This option will meet the requirements to complete the data transfer within 3 weeks, as the Snowball Edge devices can transfer large amounts of data quickly and securely. The data will be encrypted in transit and at rest. The company's internet connection speed is not a bottleneck as the data transfer will happen on the devices and not over the internet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is not a cost-effective solution, as setting up and maintaining a 10 Gbps Direct Connect connection can be quite expensive, especially if it's only needed for a one-time data transfer.<br><br>Option C is not a cost-effective solution, as creating a VPN connection between the on-premises storage and the nearest AWS region would require significant networking configuration and maintenance, and would likely be more expensive than using Snowball Edge devices.<br><br>Option D is not a cost-effective solution, as deploying an AWS Storage Gateway file gateway on premises would require additional hardware and ongoing maintenance costs, and may not be necessary for a one-time data transfer.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776296,
          "date": "Sun 15 Jan 2023 09:56",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B is not a cost-effective solution, as setting up and maintaining a 10 Gbps Direct Connect connection can be quite expensive, especially if it's only needed for a one-time data transfer.<br><br>Option C is not a cost-effective solution, as creating a VPN connection between the on-premises storage and the nearest AWS region would require significant networking configuration and maintenance, and would likely be more expensive than using Snowball Edge devices.<br><br>Option D is not a cost-effective solution, as deploying an AWS Storage Gateway file gateway on premises would require additional hardware and ongoing maintenance costs, and may not be necessary for a one-time data transfer.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated Its forms-processing application to AWS. When users interact with the application, they upload scanned forms as files through a web application. A database stores user metadata and references to files that are stored in Amazon S3. The web application runs on Amazon EC2 instances and an Amazon RDS for PostgreSQL database.<br><br>When forms are uploaded, the application sends notifications to a team through Amazon Simple Notification Service (Amazon SNS). A team member then logs in and processes each form. The team member performs data validation on the form and extracts relevant data before entering the information into another system that uses an API.<br><br>A solutions architect needs to automate the manual processing of the forms. The solution must provide accurate form extraction. minimize time to market, and minimize tong-term operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Develop custom libraries to perform optical character recognition (OCR) on the forms. Deploy the libraries to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster as an application tier. Use this tier to process the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data into an Amazon DynamoDB table. Submit the data to the target system's APL. Host the new application tier on EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use artificial intelligence and machine learning (AI/ML) models that are trained and hosted on an EC2 instance to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host a new application tier on EC2 instances. Use this tier to call endpoints that host artificial intelligence and machine teaming (AI/ML) models that are trained and hosted in Amazon SageMaker to perform optical character recognition (OCR) on the forms. Store the output in Amazon ElastiCache. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use Amazon Textract and Amazon Comprehend to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 851045,
          "date": "Sun 26 Mar 2023 15:14",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Amazon Textract..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 830341,
          "date": "Sun 05 Mar 2023 22:23",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Textract can analyze different types of documents such as forms, invoices, receipts, and tables, and can extract information such as text, tables, and key-value pairs.<br><br>Comprehend provides a set of APIs that can be used to analyze text data in real-time. The service can identify the language of the text, extract entities such as people, organizations, and locations, and detect the sentiment expressed in the text. It can also extract key phrases that summarize the meaning of the text, and can classify the text into predefined categories.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827839,
          "date": "Fri 03 Mar 2023 10:42",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "D : Managed AWS Services",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776302,
          "date": "Sun 15 Jan 2023 10:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D.  Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use Amazon Textract and Amazon Comprehend to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.<br><br>This solution meets the requirements of accurate form extraction, minimal time to market, and minimal long-term operational overhead. Amazon Textract and Amazon Comprehend are fully managed and serverless services that can perform OCR and extract relevant data from the forms, which eliminates the need to develop custom libraries or train and host models. Using AWS Step Functions and Lambda allows for easy automation of the process and the ability to scale as needed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A:<br>This option would require significant development and maintenance effort and would not take advantage of fully managed services, resulting in increased operational overhead.<br><br>Option B:<br>This option is similar to option A in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.<br><br>Option C:<br>This option is similar to option B in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776303,
          "date": "Sun 15 Jan 2023 10:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A:<br>This option would require significant development and maintenance effort and would not take advantage of fully managed services, resulting in increased operational overhead.<br><br>Option B:<br>This option is similar to option A in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.<br><br>Option C:<br>This option is similar to option B in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is refactoring its on-premises order-processing platform in the AWS Cloud. The platform includes a web front end that is hosted on a fleet of VMs, RabbitMQ to connect the front end to the backend, and a Kubernetes cluster to run a containerized backend system to process the orders. The company does not want to make any major changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom AWS Lambda runtime to mimic the web server environment. Create an Amazon API Gateway API to replace the front-end web servers. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Install Kubernetes on a fleet of different EC2 instances to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up an Amazon Simple Queue Service (Amazon SQS) queue to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776312,
          "date": "Sun 15 Jan 2023 10:10",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is the correct answer. In this solution, the company creates an Amazon Machine Image (AMI) of the web server VM, which can be used to launch EC2 instances that are identical to the on-premises web servers. The company then creates an EC2 Auto Scaling group that uses the AMI and an Application Load Balancer (ALB) to provide automatic scaling and high availability for the web front end. The company also replaces the on-premises messaging queue (RabbitMQ) with Amazon MQ, which is a managed message broker service that is fully compatible with RabbitMQ. Finally, the company uses Amazon Elastic Kubernetes Service (EKS) to host the order-processing backend, which allows them to run their existing Kubernetes cluster in the AWS cloud without making any major changes to the application. This approach allows the company to lift and shift their existing platform with minimal operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B, using a custom AWS Lambda runtime and Amazon API Gateway, would require significant changes to the application and may not be compatible with the current codebase. <br><br>Option C, installing Kubernetes on a fleet of different EC2 instances, would also require significant changes to the application and may not be compatible with the current codebase. <br><br>Option D, using Amazon Simple Queue Service (Amazon SQS) instead of Amazon MQ, would not provide the same level of messaging capabilities as Amazon MQ and may not be sufficient for the needs of the order-processing platform.</li><li>Your justification for option C is wrong.<br>Option C is valid, as Kubernetes on EC2 is very similar as the existing Kubernetes environment on-premises. But EKS is a safe bet and reduces operational overhead, while keeping the same API as previously. Hence, A is a better choice.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776314,
          "date": "Sun 15 Jan 2023 10:10",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B, using a custom AWS Lambda runtime and Amazon API Gateway, would require significant changes to the application and may not be compatible with the current codebase. <br><br>Option C, installing Kubernetes on a fleet of different EC2 instances, would also require significant changes to the application and may not be compatible with the current codebase. <br><br>Option D, using Amazon Simple Queue Service (Amazon SQS) instead of Amazon MQ, would not provide the same level of messaging capabilities as Amazon MQ and may not be sufficient for the needs of the order-processing platform.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your justification for option C is wrong.<br>Option C is valid, as Kubernetes on EC2 is very similar as the existing Kubernetes environment on-premises. But EKS is a safe bet and reduces operational overhead, while keeping the same API as previously. Hence, A is a better choice.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 827846,
          "date": "Fri 03 Mar 2023 10:47",
          "username": "\t\t\t\tsambb\t\t\t",
          "content": "Your justification for option C is wrong.<br>Option C is valid, as Kubernetes on EC2 is very similar as the existing Kubernetes environment on-premises. But EKS is a safe bet and reduces operational overhead, while keeping the same API as previously. Hence, A is a better choice.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 851051,
          "date": "Sun 26 Mar 2023 15:16",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A is the best choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815096,
          "date": "Mon 20 Feb 2023 11:13",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Option A is re-hosting or mybe re-platforming. The question says the purpose is re-factoring, then it's B. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It says the company does not want to make changes to the application in the problem statement. B would require significant code changes to the application.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817400,
          "date": "Wed 22 Feb 2023 03:37",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "It says the company does not want to make changes to the application in the problem statement. B would require significant code changes to the application.",
          "upvote_count": "1",
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
      "question_text": "<p>A solutions architect needs to implement a client-side encryption mechanism for objects that will be stored in a new Amazon S3 bucket. The solutions architect created a CMK that is stored in AWS Key Management Service (AWS KMS) for this purpose.<br><br>The solutions architect created the following IAM policy and attached it to an IAM role:<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-professional-sap-c02/image7.png\"><br><br>During tests, the solutions architect was able to successfully get existing test objects in the S3 bucket. However, attempts to upload a new object resulted in an error message. The error message stated that the action was forbidden.<br><br>Which action must the solutions architect add to the IAM policy to meet all the requirements?<br><br></p>",
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
          "id": 851055,
          "date": "Sun 26 Mar 2023 15:17",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790792,
          "date": "Sat 28 Jan 2023 17:18",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786002,
          "date": "Tue 24 Jan 2023 01:21",
          "username": "\t\t\t\tmasssa\t\t\t",
          "content": "I Vote A. <br>https://repost.aws/ja/knowledge-center/s3-large-file-encryption-kms-key<br>Adding kms:GenerateDataKeyis necessary.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776317,
          "date": "Sun 15 Jan 2023 10:16",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "A.  kms:GenerateDataKey<br><br>The solutions architect needs to add the \\\"kms:GenerateDataKey\\\" action to the IAM policy in order to generate a data key for client-side encryption. Without this action, the IAM role does not have the necessary permissions to generate a data key, which causes the error message when attempting to upload a new object.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other options are not correct because they are not required for this use case. kms:GetKeyPolicy allows for the retrieval of the key policy for a CMK but it does not have any relation to client-side encryption of S3 objects, kms:GetPublicKey allows for the retrieval of the public key of a CMK, but it does not have any relation to client-side encryption of S3 objects and kms:Sign allows for signing a message using a CMK but it does not have any relation to client-side encryption of S3 objects.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776320,
          "date": "Sun 15 Jan 2023 10:18",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The other options are not correct because they are not required for this use case. kms:GetKeyPolicy allows for the retrieval of the key policy for a CMK but it does not have any relation to client-side encryption of S3 objects, kms:GetPublicKey allows for the retrieval of the public key of a CMK, but it does not have any relation to client-side encryption of S3 objects and kms:Sign allows for signing a message using a CMK but it does not have any relation to client-side encryption of S3 objects.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer. The company wants to improve the security posture of the application and plans to use AWS WAF web ACLs. The solution must not adversely affect legitimate traffic to the application.<br><br>How should a solutions architect configure the web ACLs to meet these requirements?<br><br></p>",
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
          "id": 851058,
          "date": "Sun 26 Mar 2023 15:19",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "A.  Set the action of the web ACL rules to Count. Enable AWS WAF logging.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830443,
          "date": "Mon 06 Mar 2023 00:54",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "AWS WAF allows you to create web ACL (Access Control List) rules in \\\"Count\\\" mode, which allows you to monitor traffic without actually blocking it. In Count mode, AWS WAF counts the number of requests that match a particular rule, but doesn't take any action to block those requests.<br><br>Count mode can be useful in several ways:<br><br>Testing new rules: You can create new rules and test them in Count mode before enabling them to block traffic. This allows you to evaluate the effectiveness of your rules without risking false positives or false negatives.<br><br>Analyzing traffic: You can use Count mode to analyze traffic patterns and identify potential security threats. By monitoring the number of requests that match a particular rule, you can detect patterns that may indicate an attack or vulnerability.<br><br>Compliance reporting: Count mode can be used for compliance reporting, where you need to demonstrate that certain rules are being enforced. By counting the number of requests that match a rule, you can provide evidence that your security policies are being followed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790794,
          "date": "Sat 28 Jan 2023 17:20",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776329,
          "date": "Sun 15 Jan 2023 10:20",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/74273-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answer is A.  Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.<br><br>This approach allows for monitoring of the incoming traffic and its behavior before taking any action that can affect the legitimate traffic. By setting the action to count, the web ACL will only log the requests that match the conditions of the rules, but it will not block them. This way, the company can analyze the requests and check for any false positives. Once they identify and correct any false positives, they can gradually change the action of the web ACL rules from count to block, thus improving the security posture of the application without adversely affecting legitimate traffic.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is not correct because using only rate-based rules can lead to false positives and blocking of legitimate traffic. Option C is not correct because using only AWS managed rule groups can limit the flexibility and specificity of the web ACLs. Option D is not correct because using only custom rule groups with action set to allow can lead to security vulnerabilities.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776330,
          "date": "Sun 15 Jan 2023 10:21",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B is not correct because using only rate-based rules can lead to false positives and blocking of legitimate traffic. Option C is not correct because using only AWS managed rule groups can limit the flexibility and specificity of the web ACLs. Option D is not correct because using only custom rule groups with action set to allow can lead to security vulnerabilities.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.<br><br>The company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company's on-premises network. Developers within each account are responsible for adding new IP CIDR ranges to their security groups. The security team has its own AWS account. Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.<br><br>The solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
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
          "id": 851126,
          "date": "Sun 26 Mar 2023 16:13",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "Prefix lists + RAM",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 830468,
          "date": "Mon 06 Mar 2023 02:06",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Prefix lists + Resource Access Manager RAM is the solution.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 795542,
          "date": "Wed 01 Feb 2023 22:42",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "Clearly",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793418,
          "date": "Mon 30 Jan 2023 23:38",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "Create a new customer-managed prefix list in the security team's AWS account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790797,
          "date": "Sat 28 Jan 2023 17:21",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779097,
          "date": "Tue 17 Jan 2023 18:02",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "C.  Create a new customer-managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.<br><br>This solution meets the requirements with the least amount of operational overhead as it requires the security team to create and maintain a single customer-managed prefix list, and share it with the organization using AWS Resource Access Manager. The owners of each AWS account are then responsible for allowing the prefix list in their security groups, which eliminates the need for the security team to manually notify each account owner when changes are made. This solution also eliminates the need for a separate AWS Lambda function in each account, reducing the overall complexity of the solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is not correct because it requires setting up an SNS topic in the security team's AWS account, and deploying an AWS Lambda function in each AWS account. This increases the operational overhead as it requires setting up and maintaining the SNS topic, and deploying and configuring the Lambda function in each account.<br><br>Option B is not correct because it requires creating new customer-managed prefix lists in each AWS account within the organization, which increases the operational overhead as it requires the security team to create and maintain multiple prefix lists.<br><br>Option D is not correct because it requires creating an IAM role in each account in the organization, which increases the operational overhead as it requires the security team to set up and maintain multiple roles. Additionally, it also deploys an AWS Lambda function in the security team's AWS account, which increases complexity and operational overhead.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779098,
          "date": "Tue 17 Jan 2023 18:03",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option A is not correct because it requires setting up an SNS topic in the security team's AWS account, and deploying an AWS Lambda function in each AWS account. This increases the operational overhead as it requires setting up and maintaining the SNS topic, and deploying and configuring the Lambda function in each account.<br><br>Option B is not correct because it requires creating new customer-managed prefix lists in each AWS account within the organization, which increases the operational overhead as it requires the security team to create and maintain multiple prefix lists.<br><br>Option D is not correct because it requires creating an IAM role in each account in the organization, which increases the operational overhead as it requires the security team to set up and maintain multiple roles. Additionally, it also deploys an AWS Lambda function in the security team's AWS account, which increases complexity and operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777160,
          "date": "Mon 16 Jan 2023 00:11",
          "username": "\t\t\t\tzhangyu20000\t\t\t",
          "content": "C is correct. The prefix list is managed by security team and shared with other accounts. Other accounts can directly use it.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776340,
          "date": "Sun 15 Jan 2023 10:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is D. <br><br>Option D creates an IAM role in each account in the organization which grants permissions to update security groups. Then, it deploys an AWS Lambda function in the security team's AWS account, this lambda function is able to assume the IAM roles in each account and update the security groups with the new IP CIDR ranges. This solution allows the security team to easily distribute and update the common set of IP CIDR ranges across all accounts with minimal operational overhead.<br><br>Option A, uses an SNS topic, where the security team would need to notify all account owners every time an update is made to the allow list and would require the developers in each account to run a Lambda function which updates the security group. This solution would require a lot of manual work, and is not automated.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B, requires the security team to notify the owners of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.<br><br>Option C, uses a customer-managed prefix list in the security team's AWS account. But, it still requires the owners of each account to allow the new customer-managed prefix list ID in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.</li><li>Create an IAM role in each account in the organization. this does not add up to operational overhead right.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776341,
          "date": "Sun 15 Jan 2023 10:25",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Option B, requires the security team to notify the owners of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.<br><br>Option C, uses a customer-managed prefix list in the security team's AWS account. But, it still requires the owners of each account to allow the new customer-managed prefix list ID in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Create an IAM role in each account in the organization. this does not add up to operational overhead right.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 830457,
          "date": "Mon 06 Mar 2023 01:32",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Create an IAM role in each account in the organization. this does not add up to operational overhead right.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site-to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.<br><br>A solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.<br><br>What is the MOST cost-effective solution that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Client VPN endpoint in the main AWS account. Provision a transit gateway that is connected to each AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Client VPN endpoint in the main AWS account. Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 851129,
          "date": "Sun 26 Mar 2023 16:17",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 830481,
          "date": "Mon 06 Mar 2023 02:35",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "https://docs.aws.amazon.com/images/vpn/latest/clientvpn-admin/images/client-vpn-scenario-peer-vpc.png<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Tip - If there is no site-site gateway already and question asks for scalable solution then answer would be C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 830482,
          "date": "Mon 06 Mar 2023 02:39",
          "username": "\t\t\t\tGod_Is_Love\t\t\t",
          "content": "Tip - If there is no site-site gateway already and question asks for scalable solution then answer would be C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828825,
          "date": "Sat 04 Mar 2023 11:40",
          "username": "\t\t\t\tZek\t\t\t",
          "content": "Support B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795543,
          "date": "Wed 01 Feb 2023 22:50",
          "username": "\t\t\t\tMusk\t\t\t",
          "content": "It's B as explained here: https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793420,
          "date": "Mon 30 Jan 2023 23:39",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "should be B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776346,
          "date": "Sun 15 Jan 2023 10:27",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/80782-exam-aws-certified-solutions-architect-professional-topic-1/<br>B.  Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications is the MOST cost-effective solution that meets these requirements. This solution allows employees to connect to the main AWS account using a Client VPN endpoint, and then use peering connections established with other AWS accounts to access the internal applications. This eliminates the need for additional Client VPN endpoints in each AWS account, reducing costs. <br><br>Option A, creating a Client VPN endpoint in each AWS account, would be more expensive as it would require multiple endpoints. <br><br>Option C, creating a transit gateway, would also add unnecessary costs. <br><br>Option D, connecting the Client VPN endpoint to the Site-to-Site VPN, may not provide a scalable solution for remote employees.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. Recent application metrics show inconsistent response times and a significant increase in error rates. Calls to third-party services are causing the delays. Currently, the application calls third-party services synchronously by directly invoking an AWS Lambda function.<br><br>A solutions architect needs to decouple the third-party service calls and ensure that all the calls are eventually completed.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#100",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Simple Queue Service (Amazon SQS) queue to store events and invoke the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Step Functions state machine to pass events to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon EventBridge rule to pass events to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Simple Notification Service (Amazon SNS) topic to store events and Invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 857066,
          "date": "Fri 31 Mar 2023 14:32",
          "username": "\t\t\t\thpipit\t\t\t",
          "content": "A : SQS QUEUE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 851257,
          "date": "Sun 26 Mar 2023 18:27",
          "username": "\t\t\t\tmfsec\t\t\t",
          "content": "SQS for decoupling",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818564,
          "date": "Thu 23 Feb 2023 01:16",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "SQS ---> Lambda is the correct option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793421,
          "date": "Mon 30 Jan 2023 23:41",
          "username": "\t\t\t\tzozza2023\t\t\t",
          "content": "decouple ==> SQS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790808,
          "date": "Sat 28 Jan 2023 17:36",
          "username": "\t\t\t\tUntamables\t\t\t",
          "content": "The application needs to pass the initiative to the next step. That means the application does not wait the response from the Lambda function, it should have the responsibility only to call the Lambda function. To do so, the application only throw the job information to Amazon SQS queue and finish. After that, AWS Lambda function can pull the job information from SQS queue and start processing actively.<br>https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 788868,
          "date": "Thu 26 Jan 2023 16:40",
          "username": "\t\t\t\tQing\t\t\t",
          "content": "I vote for C - use Step Functions with its callback feature to throttle the third party api call.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776356,
          "date": "Sun 15 Jan 2023 10:31",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "The correct answer is A.  Using an Amazon Simple Queue Service (SQS) queue to store events and invoke the Lambda function is a good solution to decouple the third-party service calls and ensure that all the calls are eventually completed. SQS is a fully managed, reliable, and highly scalable message queuing service that allows applications to send, store, and receive messages between distributed components. By sending the third-party service calls to an SQS queue, it allows the application to continue processing without waiting for the third-party services to respond, which can result in faster response times and lower error rates.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Other options like AWS Step Functions state machine, Amazon EventBridge, and Amazon Simple Notification Service (SNS) topic are not appropriate for this use case. AWS Step Functions is a service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows. Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. Amazon SNS is a fully managed messaging service for both application-to-application and application-to-person (A2P) communication. These services are not focused on providing message queues and would not be the best fit for this use case.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776357,
          "date": "Sun 15 Jan 2023 10:31",
          "username": "\t\t\t\tmasetromain\t\t\t",
          "content": "Other options like AWS Step Functions state machine, Amazon EventBridge, and Amazon Simple Notification Service (SNS) topic are not appropriate for this use case. AWS Step Functions is a service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows. Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. Amazon SNS is a fully managed messaging service for both application-to-application and application-to-person (A2P) communication. These services are not focused on providing message queues and would not be the best fit for this use case.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    }
  ]
}
