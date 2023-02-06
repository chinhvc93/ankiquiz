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
          "username": "robertohyena",
          "content": "A.  Correct answer. Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>NOT B.  EC2 conditional forwarder will not meet Highest performance requirement.<br><br>NOT C.  Missing: Need to associate private hosted zone to all VPC. <br>\\\"All VPC's will need to associate their private hosted zones to all other VPC's if required to.\\\"<br>Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>NOT D.  Missing: Need to associate private hosted zone to all VPC. <br>\\\"All VPC's will need to associate their private hosted zones to all other VPC's if required to.\\\"<br>Source: https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 779764,
          "date": "Wed 18 Jan 2023 09:42",
          "username": "Jacktheriser2019",
          "content": "A answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776540,
          "date": "Sun 15 Jan 2023 13:36",
          "username": "Nicocacik",
          "content": "Definitely A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774663,
          "date": "Fri 13 Jan 2023 17:32",
          "username": "masetromain",
          "content": "The correct option would be option A:<br><br>Associate the private hosted zone to all the VPCs.<br>Create a Route 53 inbound resolver in the shared services VPC. <br>Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.<br>This option will allow the on-premises systems to resolve and connect to cloud.example.com by forwarding the DNS queries to the inbound resolver in the shared services VPC, which will then forward the queries to the private hosted zone. All VPCs will be able to resolve cloud.example.com by resolving the queries through the private hosted zone associated to all VPCs. Additionally, this option takes advantage of the already existing AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway, which will provide the highest performance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 771071,
          "date": "Tue 10 Jan 2023 06:14",
          "username": "AjayD123",
          "content": "A is correct answer as all VPCs need to be accessed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 752894,
          "date": "Thu 22 Dec 2022 01:16",
          "username": "WuKongCoder",
          "content": "A correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 751834,
          "date": "Wed 21 Dec 2022 04:23",
          "username": "arron86",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 740358,
          "date": "Fri 09 Dec 2022 19:52",
          "username": "zhangyu20000",
          "content": "A because it requires all VPC can resolve the example.com. All VPCs must be associated with private hosted zone",
          "upvote_count": "3",
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
          "username": "robertohyena",
          "content": "C. <br>https://docs.aws.amazon.com/apigateway/latest/developerguide/dns-failover.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 774664,
          "date": "Fri 13 Jan 2023 17:36",
          "username": "masetromain",
          "content": "The solution that will meet these requirements is option C:<br><br>Deploy a new API Gateway API and Lambda functions in another Region.<br>Change the Route 53 DNS record to a failover record.<br>Enable target health monitoring.<br>Convert the DynamoDB tables to global tables.<br><br>This solution will allow the API to failover to a different region, by using Route 53 failover record. The failover record will direct traffic to the primary API endpoint (the one in the primary region) as long as it is healthy. If the primary endpoint becomes unavailable, traffic will be directed to the secondary endpoint (the one in the secondary region). Additionally, by converting the DynamoDB tables to global tables, the data will be available in both regions, which is required for the failover scenario. Target health monitoring can be used to monitor the health of the API Gateway, and when it is determined that the primary endpoint is unavailable, the traffic will be directed to the secondary endpoint.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741120,
          "date": "Sat 10 Dec 2022 17:54",
          "username": "masetromain",
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
          "username": "Snip",
          "content": "Right answer is D. <br>An SCP at a lower level can't add a permission after it is blocked by an SCP at a higher level. SCPs can only filter; they never add permissions.<br>SO you need to create a new OU for the new account assign an SCP, and move the root SCP to Production OU. Then move the new account to production OU when AWS config is done.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 741380,
          "date": "Sun 11 Dec 2022 03:45",
          "username": "robertohyena",
          "content": "Answer: D. <br><br>Not A: too much overhead and maintenance.<br>Not B: SCP at Root will still deny Config to the temporary OU.<br>Not C: Too much overhead to create allow list.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 780429,
          "date": "Wed 18 Jan 2023 22:05",
          "username": "skashanali",
          "content": "Right answer is D<br><br>As permission are inherited from root, they have to remove the SCP from root and apply on Production OU..<br>Also allow SCP related to AWS config for onboarding temp OU and revert the changes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774674,
          "date": "Fri 13 Jan 2023 17:43",
          "username": "masetromainmasetromain",
          "content": "Yes, in option D, the solution is to create a temporary OU named Onboarding for the new account. By creating a new OU for the new account, it allows for a new set of permissions and policies to be applied to this account, separate from the existing Production OU.<br><br>Once the new OU is created, an SCP is applied to it to allow AWS Config actions. This SCP allows the new account to make necessary adjustments to AWS Config without being blocked by the existing policies at the root level of the organization.<br><br>Then, the root SCP that is blocking these actions is moved to the Production OU, where it will continue to block these actions for all other accounts that are members of the Production OU.<br><br>Finally, once the necessary adjustments are made, the new account can be moved to the Production OU, where it will be subject to the existing policies and restrictions.This approach is the correct solution because it allows the new account to make necessary adjustments to AWS Config while still adhering to the company's policies, and it does not introduce additional long-term maintenance. The new account will be only in the new OU temporarily, and the SCP blocking AWS Config actions will only be in the root temporarily.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 774675,
          "date": "Fri 13 Jan 2023 17:43",
          "username": "masetromain",
          "content": "This approach is the correct solution because it allows the new account to make necessary adjustments to AWS Config while still adhering to the company's policies, and it does not introduce additional long-term maintenance. The new account will be only in the new OU temporarily, and the SCP blocking AWS Config actions will only be in the root temporarily.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743191,
          "date": "Mon 12 Dec 2022 19:43",
          "username": "nez15",
          "content": "SAP-CO1 question",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741122,
          "date": "Sat 10 Dec 2022 17:57",
          "username": "masetromain",
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
          "username": "robertohyena",
          "content": "C. <br>- Aurora writers is a distractor.<br>- Single master mode only has read replica - with Aurora replicas.<br>- Multi master mode, not in the options<br>- NLB does not support round robin and least outstanding algorithmhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 774678,
          "date": "Fri 13 Jan 2023 17:45",
          "username": "masetromain",
          "content": "C is correct. This solution will provide a consistent user experience by using an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled. This allows the application and database tiers to scale by using Aurora Auto Scaling for Aurora Replicas. This will ensure that the application is able to handle the increased user base while maintaining a consistent user experience. The use of an Application Load Balancer also allows for better routing of traffic to the available Aurora Replicas.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757284,
          "date": "Mon 26 Dec 2022 09:55",
          "username": "ThaiNT",
          "content": "Using Amazon Aurora Auto Scaling with Aurora replicas<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753295,
          "date": "Thu 22 Dec 2022 13:53",
          "username": "masssa",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 748050,
          "date": "Sat 17 Dec 2022 13:37",
          "username": "Arun_Bala",
          "content": "Correct ans is c",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743193,
          "date": "Mon 12 Dec 2022 19:45",
          "username": "nez15",
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
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB.  Configure the ALB to invoke the correct Lambda function for each type of request. Create a CloudFront function to remove the problematic headers based on the value of the User-Agent header.<br></p>",
              "correct": false,
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
              "correct": true,
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
          "username": "EricZhang",
          "content": "A.  The only difference between A and D is CloudFront function vs Lambda@Edge. In this case the CloudFront function can remove the response header based on request header and much faster/light-weight.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 741134,
          "date": "Sat 10 Dec 2022 18:17",
          "username": "masetromain",
          "content": "I think this is answer D: Lambda@Edge can modify headers<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 794275,
          "date": "Tue 31 Jan 2023 15:25",
          "username": "sergza",
          "content": "For Simple header Manipulation without need of body access use of CF functions i guessis more appropriate than Lambda@Edge.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775160,
          "date": "Sat 14 Jan 2023 08:24",
          "username": "lobana",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html<br><br>With CloudFront Functions in Amazon CloudFront, you can write lightweight functions in JavaScript for high-scale, latency-sensitive CDN customizations. Your functions can manipulate the requests and responses that flow through CloudFront, perform basic authentication and authorization, generate HTTP responses at the edge, and more.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774680,
          "date": "Fri 13 Jan 2023 17:49",
          "username": "masetromain",
          "content": "D.  Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB.  Configure the ALB to invoke the correct Lambda function for each type of request. Create a Lambda@Edge function that will remove the problematic headers in response to viewer requests based on the value of the User-Agent header. This solution would allow the company to use CloudFront as a CDN to improve the performance of the service, and use Lambda@Edge to remove the problematic headers, allowing older devices to access the service without errors. The ALB can route requests to the correct Lambda function based on the request type.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 762032,
          "date": "Fri 30 Dec 2022 15:30",
          "username": "eraser2021999",
          "content": "D as per explanations of Stephane's Udemy training.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760991,
          "date": "Thu 29 Dec 2022 13:28",
          "username": "mmendozaf",
          "content": "As most of the logic are related with user agent headers, API Gateway have more capabilities. This discard, A,D.  Between B and C, request is only to delete the header to specific User agents and not by default, discarding option B.  <br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760797,
          "date": "Thu 29 Dec 2022 09:56",
          "username": "hobokabobo",
          "content": "A) While cloudfront is able to remove headers it will not be able to that conditionally depending on another header(user agent).<br>B) Api Gateway can add and modify headers but not remove them.<br>C)HTTP Gateway: we want dynamic, an api.-> Wrong from the beginning.<br>D) lamda@edge can remove headers and as it is code it can do it based on conditions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 759792,
          "date": "Wed 28 Dec 2022 13:17",
          "username": "pppttl",
          "content": "A, because it's faster. <br><br>CloudFront Functions vs. Lambda@Edge use cases<br>* CF Functions:<br>* cache key normalization: transform request attributes (headers, cookies, query string, URL) to create an optimal Cache Key<br>* header manipulation: insert/modify/delete HTTP headers in the request or response<br>* URL rewrites or redirects<br>* request authentication & authorization: create and validate user-generated tokens (e. g. JWT) to allow/deny requests<br>* Lambda@Edge:<br>* longer execution time (several ms)<br>* adjustable CPU or memory<br>* 3rd party dependencies (like AWS SDK)<br>* network access to use external services for processing<br>* file system access or access to the body of HTTP requests",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 758446,
          "date": "Tue 27 Dec 2022 13:07",
          "username": "Untamables",
          "content": "Vote D. <br>A and D can modify headers programmably. AWS mentions Lambda@Edge supports modifying headers based on User-Agent value in their document.<br>Option B is wrong. It is just able to override.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752972,
          "date": "Thu 22 Dec 2022 06:05",
          "username": "WuKongCoderCloud_noob",
          "content": "B is correct answer, on premises mean can't use cloudfornt， api gateway http api can't support response mapping template<br>https://docs.aws.amazon.com/zh_cn/apigateway/latest/developerguide/http-api-vs-rest.htmlI think the question is saying they are migrating the on-premises services to AWS and the application is already migrated to Lambda. Why can't use cloudfront?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 757056,
          "date": "Mon 26 Dec 2022 05:34",
          "username": "Cloud_noob",
          "content": "I think the question is saying they are migrating the on-premises services to AWS and the application is already migrated to Lambda. Why can't use cloudfront?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751970,
          "date": "Wed 21 Dec 2022 08:28",
          "username": "karysffhobokabobo",
          "content": "API gateway can rewrite header<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-override-request-response-parameters.htmlyes: rewrite and add but imo it cannot remove a header.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760792,
          "date": "Thu 29 Dec 2022 09:47",
          "username": "hobokabobo",
          "content": "yes: rewrite and add but imo it cannot remove a header.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741595,
          "date": "Sun 11 Dec 2022 11:32",
          "username": "robertohyena",
          "content": "Answer is D. <br>- Lambda@Edge can remove problematic headers<br>- API gateway can only do request / response transformation",
          "upvote_count": "6",
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
          "username": "robertohyena",
          "content": "Answer: C & D<br><br>Source: <br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example4.html",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 795394,
          "date": "Wed 01 Feb 2023 19:21",
          "username": "DWsk",
          "content": "I think the answer is C & D. <br>But what's with E? You don't need the principal, but it would still work, right?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780438,
          "date": "Wed 18 Jan 2023 22:18",
          "username": "skashanali",
          "content": "Allow specific user and specific actions on the mentioned S3 bucket is the right way. We always think of fine grain access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 770967,
          "date": "Tue 10 Jan 2023 02:00",
          "username": "Teknoklutz",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760996,
          "date": "Thu 29 Dec 2022 13:32",
          "username": "mmendozaf",
          "content": "Permissions is required to provide on the source component, at least.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760806,
          "date": "Thu 29 Dec 2022 10:07",
          "username": "hobokabobo",
          "content": "It says choose two. <br>C&A <br>C grants access and A whitelists the different domain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760211,
          "date": "Wed 28 Dec 2022 19:47",
          "username": "skashanali",
          "content": "Ans C, is for the S3 CORS bucket policy and<br>Ans D, for the User permission set to allow S3 bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748053,
          "date": "Sat 17 Dec 2022 13:47",
          "username": "Arun_Bala",
          "content": "Ans C & D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741136,
          "date": "Sat 10 Dec 2022 18:21",
          "username": "masetromain",
          "content": "examtopics misedited the question \\\"(Choose two.)\\\"<br>I would answer CD",
          "upvote_count": "4",
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
          "id": 742275,
          "date": "Mon 12 Dec 2022 02:13",
          "username": "zhangyu20000yuyuyuyuyuzhangyu20000masetromain",
          "content": "Answer is A.  ABC all works but A is most COST EFFECTIVEI do not think A is the right answer. <br>Because image must be upload to the ECR.https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/Is true but \\\" you can now package and deploy Lambda functions as container images of up to 10 GB in size.\\\" the size is not specified, personally I find it too small",
          "upvote_count": "6133",
          "selected_answers": ""
        },
        {
          "id": 763230,
          "date": "Sun 01 Jan 2023 16:00",
          "username": "yuyuyuyuyu",
          "content": "I do not think A is the right answer. <br>Because image must be upload to the ECR.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742276,
          "date": "Mon 12 Dec 2022 02:15",
          "username": "zhangyu20000",
          "content": "https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 742773,
          "date": "Mon 12 Dec 2022 13:29",
          "username": "masetromain",
          "content": "Is true but \\\" you can now package and deploy Lambda functions as container images of up to 10 GB in size.\\\" the size is not specified, personally I find it too small",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 794492,
          "date": "Tue 31 Jan 2023 19:12",
          "username": "sergza",
          "content": "A is most Cost effective Does not need ALB and smallest operational overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774685,
          "date": "Fri 13 Jan 2023 17:54",
          "username": "masetromain",
          "content": "B.  Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.<br>This option meets the requirement of using a serverless architecture by utilizing the Fargate launch type for the ECS clusters, which allows for automatic scaling of the containers based on the expected load. It also allows for separate deployments for production and testing by configuring separate ECS clusters and Application Load Balancers for each environment. This option also minimizes operational complexity by utilizing ECS and Fargate for the container orchestration and scaling.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 766170,
          "date": "Thu 05 Jan 2023 01:44",
          "username": "NYB",
          "content": "it should be ECR + ECS + Fargate, ans: B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765305,
          "date": "Wed 04 Jan 2023 07:07",
          "username": "jeussinUntamables",
          "content": "EnableEKS+Fargate ??Currently available.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 790673,
          "date": "Sat 28 Jan 2023 15:45",
          "username": "Untamables",
          "content": "Currently available.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760217,
          "date": "Wed 28 Dec 2022 19:52",
          "username": "skashanali",
          "content": "C & D is both valid but when it comes to cost-effective solution, I would go for ECS which does have additional cluster cost for its control plane.<br>https://www.clickittech.com/aws/amazon-ecs-vs-eks/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 758539,
          "date": "Tue 27 Dec 2022 14:21",
          "username": "Untamables",
          "content": "I Vote B. <br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-java-microservices-on-amazon-ecs-using-amazon-ecr-and-aws-fargate.html<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-java-microservices-on-amazon-ecs-using-amazon-ecr-and-load-balancing.html<br><br>Option C and D also work, but B is the most cost-effective.<br><br>Option A is wrong. It can launch only APIs and does not mention Web UI.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-lambda-functions-with-container-images.html<br><br>Option C is wrong. Amazon EKS costs more than Amazon ECS a bit.<br>https://aws.amazon.com/ecs/pricing/<br>https://aws.amazon.com/eks/pricing/<br><br>Option D is wrong. The Docker environment of AWS Elastic Beanstalk is based on Amazon EC2. That costs more than AWS Fargate.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753882,
          "date": "Fri 23 Dec 2022 06:46",
          "username": "ptpho",
          "content": "I go with B. <br>why EKS while there is no K8s.<br>Just ECS is OK (cost saving and container support)",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 753290,
          "date": "Thu 22 Dec 2022 13:47",
          "username": "yuyuyuyuyu",
          "content": "I think the correct answer is B. <br>C has no notion of tasks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741142,
          "date": "Sat 10 Dec 2022 18:33",
          "username": "masetromainmasetromain",
          "content": "Answer C makes the most sense<br>https://aws.amazon.com/eks/<br>https://aws.amazon.com/ecr/Option C, using Amazon EKS with Fargate launch type, would be a valid solution for deploying containerized microservices, but it may not be the most cost-effective option. Amazon EKS is a managed Kubernetes service that is more complex to set up and operate than other container orchestration options like Amazon ECS or Elastic Beanstalk. It also generally incurs additional costs for the management of Kubernetes control plane and worker nodes. For a simple use case with a known load and minimal operational complexity, it may not be necessary to use a fully-managed Kubernetes service like EKS and a simpler solution like ECS or Elastic Beanstalk may be more cost-effective.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774686,
          "date": "Fri 13 Jan 2023 17:55",
          "username": "masetromain",
          "content": "Option C, using Amazon EKS with Fargate launch type, would be a valid solution for deploying containerized microservices, but it may not be the most cost-effective option. Amazon EKS is a managed Kubernetes service that is more complex to set up and operate than other container orchestration options like Amazon ECS or Elastic Beanstalk. It also generally incurs additional costs for the management of Kubernetes control plane and worker nodes. For a simple use case with a known load and minimal operational complexity, it may not be necessary to use a fully-managed Kubernetes service like EKS and a simpler solution like ECS or Elastic Beanstalk may be more cost-effective.",
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
          "username": "masetromainmasetromain",
          "content": "I go with B<br>https://docs.amazonaws.cn/en_us/Route53/latest/DeveloperGuide/welcome-health-checks.htmlB is correct, because it meets the company's requirements for reducing RTO to less than 15 minutes and not having a large budget for an active-active strategy.<br><br>In this solution, the company creates an AWS Lambda function in the backup region which promotes the read replica and modifies the Auto Scaling group values. Route 53 is configured with a health check that monitors the web application and sends an Amazon SNS notification to the Lambda function when the health check status is unhealthy. The Route 53 record is also updated with a failover policy that routes traffic to the ALB in the backup region when a health check failure occurs. This way, when the primary region goes down, the failover policy triggers and traffic is directed to the backup region, ensuring a quick recovery time.",
          "upvote_count": "71",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774692,
          "date": "Fri 13 Jan 2023 17:58",
          "username": "masetromain",
          "content": "B is correct, because it meets the company's requirements for reducing RTO to less than 15 minutes and not having a large budget for an active-active strategy.<br><br>In this solution, the company creates an AWS Lambda function in the backup region which promotes the read replica and modifies the Auto Scaling group values. Route 53 is configured with a health check that monitors the web application and sends an Amazon SNS notification to the Lambda function when the health check status is unhealthy. The Route 53 record is also updated with a failover policy that routes traffic to the ALB in the backup region when a health check failure occurs. This way, when the primary region goes down, the failover policy triggers and traffic is directed to the backup region, ensuring a quick recovery time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796179,
          "date": "Thu 02 Feb 2023 16:40",
          "username": "aws0909",
          "content": "I will go with option B as it reduces the RTO",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 794958,
          "date": "Wed 01 Feb 2023 10:11",
          "username": "Yihong",
          "content": "A: no health check<br>C: active active<br>D: Equal weight?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 758588,
          "date": "Tue 27 Dec 2022 14:59",
          "username": "Untamables",
          "content": "I Vote B. <br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html<br><br>Option A, C and D are wrong. The latency-based routing and endopoint weights should be used for active/active strategy.<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753893,
          "date": "Fri 23 Dec 2022 06:56",
          "username": "ptpho",
          "content": "I go with B<br>5xx is incorrectly method to cover the case of the main site completely down<br>Its not act-act loading so R53 should not load traffic between 2 ALBs",
          "upvote_count": "2",
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
          "username": "masetromainmasetromainspencer_sharpmasetromain",
          "content": "I go with ADF<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.htmlA.  Using an Elastic Load Balancer (ELB) to distribute traffic across multiple EC2 instances can help ensure that the application remains available in the event that one of the instances becomes unavailable. By configuring the instances as part of an Auto Scaling group with a minimum capacity of two instances, you can ensure that there is always at least one healthy instance to handle traffic.<br>D.  Modifying the DB instance to create a Multi-AZ deployment that extends across two availability zones can help ensure that the database remains available in the event of a failure. In the event of a failure, traffic will automatically be directed to the secondary availability zone, reducing the amount of downtime.<br>F.  Creating a replication group for the ElastiCache for Redis cluster and enabling Multi-AZ can help ensure that the in-memory data store remains available in the event of a failure. This will allow traffic to be automatically directed to the secondary availability zone, reducing the amount of downtime.Why C is wrong?Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.",
          "upvote_count": "7111",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 774694,
          "date": "Fri 13 Jan 2023 18:02",
          "username": "masetromain",
          "content": "A.  Using an Elastic Load Balancer (ELB) to distribute traffic across multiple EC2 instances can help ensure that the application remains available in the event that one of the instances becomes unavailable. By configuring the instances as part of an Auto Scaling group with a minimum capacity of two instances, you can ensure that there is always at least one healthy instance to handle traffic.<br>D.  Modifying the DB instance to create a Multi-AZ deployment that extends across two availability zones can help ensure that the database remains available in the event of a failure. In the event of a failure, traffic will automatically be directed to the secondary availability zone, reducing the amount of downtime.<br>F.  Creating a replication group for the ElastiCache for Redis cluster and enabling Multi-AZ can help ensure that the in-memory data store remains available in the event of a failure. This will allow traffic to be automatically directed to the secondary availability zone, reducing the amount of downtime.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752113,
          "date": "Wed 21 Dec 2022 10:58",
          "username": "spencer_sharpmasetromain",
          "content": "Why C is wrong?Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 774695,
          "date": "Fri 13 Jan 2023 18:02",
          "username": "masetromain",
          "content": "Other options like B.  and C.  does not meet the requirement because the instances are configured in unlimited mode, it will not be possible to ensure that there is always at least one healthy instance to handle traffic if there is a failure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758600,
          "date": "Tue 27 Dec 2022 15:15",
          "username": "Untamables",
          "content": "No doubt, ADF. <br>Option C is wrong. Creating a read replica 'in the same availability zone' makes no sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 757432,
          "date": "Mon 26 Dec 2022 14:05",
          "username": "aimik",
          "content": "ADF all of them high availibility",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753899,
          "date": "Fri 23 Dec 2022 07:01",
          "username": "ptpho",
          "content": "I go with ADF<br>Hope we have 74 questions like this =))",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 748058,
          "date": "Sat 17 Dec 2022 13:59",
          "username": "Arun_Bala",
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
          "username": "Raj40",
          "content": "A & E<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html#custom-error-pages-procedure",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 788913,
          "date": "Thu 26 Jan 2023 17:25",
          "username": "vsk12",
          "content": "A & C as S3 can be used to host the static website and Route 53 can be configured for health checks and fail-over routing.<br>Refer AWS documentation -<br>Route 53 Fail Over S3<br>(https://aws.amazon.com/premiumsupport/knowledge-center/fail-over-s3-r53/)<br><br>Option E is wrong as CloudFront would return the error response for failure and does not provide a page that Route 53 can point to.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774696,
          "date": "Fri 13 Jan 2023 18:05",
          "username": "masetromain",
          "content": "Option A: Creating an S3 bucket and uploading custom error pages to it will allow you to provide a custom error page to visitors when the ALB returns a 502 error.<br>Option E: By configuring CloudFront custom error pages, visitors will be redirected to a publicly accessible web page when a 502 error occurs.<br>DNS records can be modified to point to a publicly accessible web page, which will be displayed when the error occurs.<br><br>Option B and D are not a best practice since they would change the behavior of the load balancer and it's not the best way to display custom error pages.<br>Option C is not related to custom error pages and not the best way to handle the problem.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 761369,
          "date": "Thu 29 Dec 2022 19:37",
          "username": "excoRt",
          "content": "A & E - Classic Cloudfront error page mechanism",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 759334,
          "date": "Wed 28 Dec 2022 04:51",
          "username": "Untamables",
          "content": "Option A and E are the most simple way to meet the requirement.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 753911,
          "date": "Fri 23 Dec 2022 07:20",
          "username": "ptpho",
          "content": "I go with AE<br>since R53 \\\"Evaluate Target Health\\\" works with Alias Records that support health checks, so CLDFR distribution cannot be selected",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753804,
          "date": "Fri 23 Dec 2022 03:27",
          "username": "JimmyWong0911",
          "content": "AE<br>SAP-C01 #831",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 752117,
          "date": "Wed 21 Dec 2022 11:03",
          "username": "spencer_sharp",
          "content": "AE<br>SAP-C01 #831",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741628,
          "date": "Sun 11 Dec 2022 12:22",
          "username": "robertohyena",
          "content": "Answer: A & C<br><br>C & E never state where is the publicly accessible webpage.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 741162,
          "date": "Sat 10 Dec 2022 19:07",
          "username": "masetromainmasetromain",
          "content": "I want to answer AC. <br>Answer A to have a static web page.<br>The C response to have an ALB status check.I was wrong the answer is AE<br>https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/3/",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 770625,
          "date": "Mon 09 Jan 2023 17:06",
          "username": "masetromain",
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
          "username": "masetromainmasetromain",
          "content": "I go with BDStep B is needed because it enables the organization to share resources across accounts.<br>Step D is needed because it allows the infrastructure account to share specific subnets with the other accounts in the organization, so that the other accounts can create resources within those subnets without having to manage their own networks.",
          "upvote_count": "61",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 774700,
          "date": "Fri 13 Jan 2023 18:09",
          "username": "masetromain",
          "content": "Step B is needed because it enables the organization to share resources across accounts.<br>Step D is needed because it allows the infrastructure account to share specific subnets with the other accounts in the organization, so that the other accounts can create resources within those subnets without having to manage their own networks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752613,
          "date": "Wed 21 Dec 2022 18:40",
          "username": "razguru",
          "content": "A - Doesn't seem correct as the question didnt state multiple VPs, so transit gateway is not relevant. <br>I will go with B & D",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 798620,
          "date": "Sun 05 Feb 2023 06:04",
          "username": "masssamasssa",
          "content": "Anwer is BD. <br>https://aws.amazon.com/jp/premiumsupport/knowledge-center/vpc-share-subnet-with-another-account/https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-sharing.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 798622,
          "date": "Sun 05 Feb 2023 06:05",
          "username": "masssa",
          "content": "https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-sharing.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792664,
          "date": "Mon 30 Jan 2023 12:05",
          "username": "zozza2023",
          "content": "B & D seems to be the correct answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 761489,
          "date": "Thu 29 Dec 2022 22:00",
          "username": "skashanali",
          "content": "Ans A doesn't make sense.<br>You also need to enable sharing with AWS Organizations within Resource Access Manager service to share the subnet.<br>https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 759345,
          "date": "Wed 28 Dec 2022 05:12",
          "username": "Untamables",
          "content": "AWS Resource Access Manager can share subnets with other AWS accounts.<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 753965,
          "date": "Fri 23 Dec 2022 08:26",
          "username": "ptpho",
          "content": "I go with AD<br>the company can use to share a common network across multiple accounts -> TGW in infras account<br>Enable resource sharing is an optional to share all 'without having to enumerate each account'",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741683,
          "date": "Sun 11 Dec 2022 13:33",
          "username": "robertohyena",
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
          "username": "Raj40",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 753918,
          "date": "Fri 23 Dec 2022 07:30",
          "username": "ptpho",
          "content": "It's A .clearly",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 753074,
          "date": "Thu 22 Dec 2022 09:08",
          "username": "spencer_sharp",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743013,
          "date": "Mon 12 Dec 2022 17:07",
          "username": "masetromainmasetromain",
          "content": "I go with AA.  Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.<br>This solution uses AWS PrivateLink, which creates a secure and private connection between the company's VPC and the third-party SaaS application VPC, without the traffic traversing the internet. The use of a security group and limiting access to the endpoint service conforms to the principle of least privilege.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774702,
          "date": "Fri 13 Jan 2023 18:11",
          "username": "masetromain",
          "content": "A.  Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.<br>This solution uses AWS PrivateLink, which creates a secure and private connection between the company's VPC and the third-party SaaS application VPC, without the traffic traversing the internet. The use of a security group and limiting access to the endpoint service conforms to the principle of least privilege.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741703,
          "date": "Sun 11 Dec 2022 13:54",
          "username": "robertohyena",
          "content": "A is correct.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html#share-endpoint-service",
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
          "id": 753082,
          "date": "Thu 22 Dec 2022 09:18",
          "username": "spencer_sharp",
          "content": "AS THE SAME WITH SAP-C01 QUESTION 782",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743019,
          "date": "Mon 12 Dec 2022 17:13",
          "username": "masetromainmasetromain",
          "content": "A is good<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patch-management-hybrid-cloud/design-on-premises.htmlA is correct. AWS Systems Manager can manage patches on both on-premises servers and EC2 instances and can generate patch compliance reports. AWS OpsWorks and Amazon Inspector are not specifically designed for patch management and therefore would not be the best choice for this use case. Using Amazon EventBridge rule and AWS X-Ray to generate patch compliance reports is not a practical solution as they are not designed for patch management reporting.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774705,
          "date": "Fri 13 Jan 2023 18:14",
          "username": "masetromain",
          "content": "A is correct. AWS Systems Manager can manage patches on both on-premises servers and EC2 instances and can generate patch compliance reports. AWS OpsWorks and Amazon Inspector are not specifically designed for patch management and therefore would not be the best choice for this use case. Using Amazon EventBridge rule and AWS X-Ray to generate patch compliance reports is not a practical solution as they are not designed for patch management reporting.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742569,
          "date": "Mon 12 Dec 2022 09:54",
          "username": "Raj40",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742295,
          "date": "Mon 12 Dec 2022 02:38",
          "username": "zhangyu20000",
          "content": "A is correct",
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
          "id": 774711,
          "date": "Fri 13 Jan 2023 18:17",
          "username": "masetromain",
          "content": "B.  Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance. This approach will use the Auto Scaling lifecycle hook to execute the script that copies log files to S3, before the instance is terminated, ensuring that all log files are copied from the terminated instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759354,
          "date": "Wed 28 Dec 2022 05:39",
          "username": "Untamables",
          "content": "B<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744354,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "rtgfdv3",
          "content": "https://aws.amazon.com/blogs/infrastructure-and-automation/run-code-before-terminating-an-ec2-auto-scaling-instance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743021,
          "date": "Mon 12 Dec 2022 17:20",
          "username": "masetromainmasetromain",
          "content": "I find answer C correct.<br>but can at the same time that an instance is terminated run a lambda function that executes the script?I'm wrong the answer is B<br><br>https://www.examtopics.com/discussions/amazon/view/69532-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 743097,
          "date": "Mon 12 Dec 2022 18:27",
          "username": "masetromain",
          "content": "I'm wrong the answer is B<br><br>https://www.examtopics.com/discussions/amazon/view/69532-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742820,
          "date": "Mon 12 Dec 2022 14:19",
          "username": "zhangyu20000",
          "content": "B is correct<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/tutorial-lifecycle-hook-lambda.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742575,
          "date": "Mon 12 Dec 2022 10:00",
          "username": "Raj40",
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
          "username": "masetromain",
          "content": "C and E are correct.<br>C.  Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B. <br>This step is necessary because the VPC in Account B needs to be associated with the private hosted zone in Account A to be able to resolve the DNS records.<br>E.  Associate a new VPC in Account B with a hosted zone in Account A.  Delete the association authorization in Account A. <br>This step is necessary because the association authorization needs to be removed in Account A after the association is done in Account B. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 752618,
          "date": "Wed 21 Dec 2022 18:50",
          "username": "razguru",
          "content": "C & E are correct options.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743030,
          "date": "Mon 12 Dec 2022 17:31",
          "username": "masetromainmasetromain",
          "content": "With comments and links the answer is C and E.  (Ty robertohyène and JosuéXu)<br><br>C = 6. Run the following command to create the association between Account A's private hosted zone and Account B's VPC.  Use the hosted zone's ID from step 3. B account.<br>E = 7.It is recommended to remove the association permission after the association is created. This will prevent you from recreating the same association later.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/https://www.examtopics.com/discussions/amazon/view/36113-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 743095,
          "date": "Mon 12 Dec 2022 18:26",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/36113-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742587,
          "date": "Mon 12 Dec 2022 10:11",
          "username": "Raj40",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 742073,
          "date": "Sun 11 Dec 2022 21:29",
          "username": "JoshuaXu",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741723,
          "date": "Sun 11 Dec 2022 14:12",
          "username": "robertohyena",
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
          "id": 792717,
          "date": "Mon 30 Jan 2023 13:08",
          "username": "zozza2023",
          "content": "C is the correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774726,
          "date": "Fri 13 Jan 2023 18:28",
          "username": "masetromain",
          "content": "C.  Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.<br><br>Amazon CloudFront is a content delivery network (CDN) that can be used to deliver content to users with low latency and high data transfer speeds. By configuring a CloudFront distribution for the blog site and pointing it at an S3 bucket, the videos can be cached at edge locations closer to users, reducing buffering and timeout issues. Additionally, S3 is designed for scalable storage and can handle high levels of user traffic. Migrating the videos from EFS to S3, would also improve the performance and scalability of the website.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 753100,
          "date": "Thu 22 Dec 2022 09:49",
          "username": "spencer_sharp",
          "content": "No brainer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743442,
          "date": "Tue 13 Dec 2022 01:23",
          "username": "komorebi",
          "content": "CCCCCCCCCCCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743378,
          "date": "Mon 12 Dec 2022 23:25",
          "username": "zhangyu20000",
          "content": "C is correct. Do works but not as cheaper as C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743032,
          "date": "Mon 12 Dec 2022 17:34",
          "username": "masetromainmasetromain",
          "content": "answer C makes sensehttps://www.examtopics.com/discussions/amazon/view/6008-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743093,
          "date": "Mon 12 Dec 2022 18:25",
          "username": "masetromain",
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
          "id": 792725,
          "date": "Mon 30 Jan 2023 13:18",
          "username": "zozza2023",
          "content": "A is the correct solution and the best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774727,
          "date": "Fri 13 Jan 2023 18:30",
          "username": "masetromainmasetromain",
          "content": "A.  Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC. <br><br>This solution provides a redundant Direct Connect connection in the same Region by creating a new private virtual interface on each connection, and connecting both private virtual interfaces to a Direct Connect gateway. The Direct Connect gateway is then connected to the single VPC.  This solution also allows the company to expand into other Regions while providing connectivity through the same pair of Direct Connect connections.<br>The Direct Connect Gateway allows you to connect multiple VPCs and on-premises networks in different accounts and different regions to a single Direct Connect connection.<br>It also provides automatic failover and routing capabilities.Option D is not the best solution because it uses a Transit Gateway, which is used to connect multiple VPCs and on-premises networks in different accounts and different regions, but it is not necessary in this scenario. The company only wants to add a redundant Direct Connect connection in the same Region and connect it to the same VPC.  Additionally, using a Transit Gateway in this scenario would add more complexity and might not be necessary.<br>Also, Transit Gateway does not provide automatic failover and routing capabilities, which is required in this scenario.<br>The Direct Connect Gateway is a better choice in this scenario as it provides the necessary functionality of automatic failover and routing capabilities, and it is more suitable for connecting multiple Direct Connect connections to a single VPC. ",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774728,
          "date": "Fri 13 Jan 2023 18:31",
          "username": "masetromain",
          "content": "Option D is not the best solution because it uses a Transit Gateway, which is used to connect multiple VPCs and on-premises networks in different accounts and different regions, but it is not necessary in this scenario. The company only wants to add a redundant Direct Connect connection in the same Region and connect it to the same VPC.  Additionally, using a Transit Gateway in this scenario would add more complexity and might not be necessary.<br>Also, Transit Gateway does not provide automatic failover and routing capabilities, which is required in this scenario.<br>The Direct Connect Gateway is a better choice in this scenario as it provides the necessary functionality of automatic failover and routing capabilities, and it is more suitable for connecting multiple Direct Connect connections to a single VPC. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 759382,
          "date": "Wed 28 Dec 2022 06:20",
          "username": "Untamables",
          "content": "A<br>https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/aws-dx-dxgw-with-vgw-multi-regions-and-aws-public-peering.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 753399,
          "date": "Thu 22 Dec 2022 15:52",
          "username": "spencer_sharp",
          "content": "transit gateway does not support cross-region",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743377,
          "date": "Mon 12 Dec 2022 23:24",
          "username": "zhangyu20000",
          "content": "A is correct because direct connect gateway support multi region",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743039,
          "date": "Mon 12 Dec 2022 17:39",
          "username": "masetromainmasetromain",
          "content": "I go with A<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html<br>https://jayendrapatil.com/aws-direct-connect-gateway/https://www.examtopics.com/discussions/amazon/view/69343-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743092,
          "date": "Mon 12 Dec 2022 18:25",
          "username": "masetromain",
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
          "id": 790976,
          "date": "Sat 28 Jan 2023 19:59",
          "username": "Musk",
          "content": "I don't like C.  It says that it CONTAINS static content, but it does not say ONLY static content. The S3 would not be suitable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774730,
          "date": "Fri 13 Jan 2023 18:35",
          "username": "masetromain",
          "content": "This solution meets the requirements by using multiple managed services offered by AWS which can reduce the operational overhead. Hosting the web application in Amazon S3 would make it highly available, scalable and can handle variable traffic. The uploaded videos can be stored in S3 and processed using S3 event notifications that trigger a Lambda function, which calls the Amazon Rekognition API to categorize the videos. SQS can be used to process the event notifications and also it is a managed service.<br>This solution eliminates the need to manage EC2 instances, EBS volumes and the custom software. Additionally, using Lambda function in this case, eliminates the need for managing additional servers to process the SQS queue which will reduce operational overhead.<br><br>By using this solution, the company can benefit from the scalability, reliability, and cost-effectiveness that these services offer, which can help to reduce operational overhead and improve the overall performance and security of the application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759396,
          "date": "Wed 28 Dec 2022 06:40",
          "username": "Untamables",
          "content": "I vote C. <br>The serverless architecture reduces operational overhead the most for the requirement.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html<br>https://docs.aws.amazon.com/rekognition/latest/dg/video-analyzing-with-sqs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 753403,
          "date": "Thu 22 Dec 2022 15:56",
          "username": "spencer_sharp",
          "content": "no brainer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743055,
          "date": "Mon 12 Dec 2022 17:51",
          "username": "masetromainmasetromain",
          "content": "website contains static content = S3<br>I go with Chttps://www.examtopics.com/discussions/amazon/view/35889-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743091,
          "date": "Mon 12 Dec 2022 18:24",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/35889-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742849,
          "date": "Mon 12 Dec 2022 14:37",
          "username": "zhangyu20000",
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
          "username": "masetromain",
          "content": "AWS Serverless Application Model (SAM) is a framework that helps you build, test and deploy your serverless applications. It uses CloudFormation under the hood, so it is a way to simplify the process of creating, updating, and deploying CloudFormation templates. CodeDeploy is a service that automates code deployments to any instance, including on-premises instances and Lambda functions.<br>With AWS SAM you can use the built-in CodeDeploy to deploy new versions of the Lambda function, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code.<br>You can also define CloudWatch Alarms to trigger a rollback in case of any issues.<br>This allows for a faster and more efficient deployment process, as well as a more reliable rollback process when errors are identified. This way you can increase the speed of deployment and reduce the time to detect and revert when errors are identified.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753409,
          "date": "Thu 22 Dec 2022 16:03",
          "username": "spencer_sharp",
          "content": "sam typical use case",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743060,
          "date": "Mon 12 Dec 2022 17:56",
          "username": "masetromainmasetromain",
          "content": "AWS CodeDeploy is intended for this kind of use<br>https://aws.amazon.com/fr/codedeploy/https://www.examtopics.com/discussions/amazon/view/5158-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743090,
          "date": "Mon 12 Dec 2022 18:24",
          "username": "masetromain",
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
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.<br></p>",
              "correct": false,
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
              "correct": true,
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
          "username": "tman22tman22",
          "content": "A - Glacier Deep Archive can't be used for web hosting, regardless if the company says retrieval time is no concern.Nevermind, I go for D. <br>It should be technically possible - and mostly dependent on the intranet web application logic - It could present users with the ability to start file retrieval, for then to later access the data.",
          "upvote_count": "62",
          "selected_answers": ""
        },
        {
          "id": 751300,
          "date": "Tue 20 Dec 2022 18:52",
          "username": "tman22",
          "content": "Nevermind, I go for D. <br>It should be technically possible - and mostly dependent on the intranet web application logic - It could present users with the ability to start file retrieval, for then to later access the data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 797116,
          "date": "Fri 03 Feb 2023 15:50",
          "username": "DWskcloudman",
          "content": "I'm really unsure on this one. I can't find a definitive answer whether you can use glacier to host web content. It would make sense you can't because you need to restore the data before retrieving it, but theoretically it could be possible with application logic.<br>This question feels like its a gotcha that is using Glacier as a red herring for CHEAPEST option but really wants you to use One Zone IA. Read this : The number of requests will be low. Availability and speed of retrieval are not concerns of the company & LOWEST COST I see its D",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 798118,
          "date": "Sat 04 Feb 2023 16:41",
          "username": "cloudman",
          "content": "Read this : The number of requests will be low. Availability and speed of retrieval are not concerns of the company & LOWEST COST I see its D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796195,
          "date": "Thu 02 Feb 2023 17:00",
          "username": "Shahul75",
          "content": "It should C. <br>taking of the wrong ones, <br>* S3 interface doesn't support website endpoints<br>* EFS One Zone-IA is expensive than SC1<br>Only one is left, which is \\\"C\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 780186,
          "date": "Wed 18 Jan 2023 17:04",
          "username": "bititan",
          "content": "web hosting not possible with deep archive objects. so I go for option A.  Question is notabout archival solution. it's about accessing data from vpc based application whilst maintaining lowest",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774740,
          "date": "Fri 13 Jan 2023 18:43",
          "username": "masetromain",
          "content": "The S3 Glacier Deep Archive storage class is the lowest-cost storage class offered by Amazon S3, and it is designed for archival data that is accessed infrequently and for which retrieval time of several hours is acceptable. S3 interface endpoint for the VPC ensures that access to the bucket is only from resources within the VPC and this will meet the requirement of not being accessible to the public. And also, S3 bucket can be configured for website hosting, and this will allow employees to access the documents through the corporate intranet.<br>Using an EC2 instance and a file system or block store would be more expensive and unnecessary because the number of requests to the data will be low and availability and speed of retrieval are not concerns.<br>Additionally, using Amazon S3 bucket will provide durability, scalability and availability of data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 743069,
          "date": "Mon 12 Dec 2022 18:08",
          "username": "masetromainmasetromainzhangyu20000bjct",
          "content": "The number of requests will be low. Availability and speed of retrieval are not concerns of the company.<br>Which solution will meet these requirements at the LOWEST cost?<br><br>I go with DThe S3 Glacier Deep Archive storage class is the lowest-cost storage class offered by Amazon S3, and it is designed for archival data that is accessed infrequently and for which retrieval time of several hours is acceptable. S3 interface endpoint for the VPC ensures that access to the bucket is only from resources within the VPC and this will meet the requirement of not being accessible to the public. And also, S3 bucket can be configured for website hosting, and this will allow employees to access the documents through the corporate intranet.<br>Using an EC2 instance and a file system or block store would be more expensive and unnecessary because the number of requests to the data will be low and availability and speed of retrieval are not concerns.<br>Additionally, using Amazon S3 bucket will provide durability, scalability and availability of data.one bucket with deep glacier by default, can this bucket use web hosting?Yes we can use one bucket with different storage class to store objects as per s3 lifecycle policy.",
          "upvote_count": "4121",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774738,
          "date": "Fri 13 Jan 2023 18:42",
          "username": "masetromain",
          "content": "The S3 Glacier Deep Archive storage class is the lowest-cost storage class offered by Amazon S3, and it is designed for archival data that is accessed infrequently and for which retrieval time of several hours is acceptable. S3 interface endpoint for the VPC ensures that access to the bucket is only from resources within the VPC and this will meet the requirement of not being accessible to the public. And also, S3 bucket can be configured for website hosting, and this will allow employees to access the documents through the corporate intranet.<br>Using an EC2 instance and a file system or block store would be more expensive and unnecessary because the number of requests to the data will be low and availability and speed of retrieval are not concerns.<br>Additionally, using Amazon S3 bucket will provide durability, scalability and availability of data.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744568,
          "date": "Wed 14 Dec 2022 01:01",
          "username": "zhangyu20000bjct",
          "content": "one bucket with deep glacier by default, can this bucket use web hosting?Yes we can use one bucket with different storage class to store objects as per s3 lifecycle policy.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 750827,
          "date": "Tue 20 Dec 2022 13:06",
          "username": "bjct",
          "content": "Yes we can use one bucket with different storage class to store objects as per s3 lifecycle policy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742868,
          "date": "Mon 12 Dec 2022 14:48",
          "username": "zhangyu20000",
          "content": "A is correct. HA is not required here. <br>D use Glacier deep archive that need hours to access that will cause time out for web",
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
          "id": 780191,
          "date": "Wed 18 Jan 2023 17:12",
          "username": "bititan",
          "content": "A is has options for SAML and SCIM configuration with AD<br>C is all about users and no roles are mentioned. AD User attributes cannot be mapped to IAM users direct<br>D is openID based, MS AD would not support this<br><br>so I go with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774750,
          "date": "Fri 13 Jan 2023 18:52",
          "username": "masetromainmasetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/74174-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Both option C and option A are valid solutions that meet the requirements for the scenario.<br><br>ABAC, or attribute-based access control, is a method of granting access to resources based on the attributes of the user, the resource, and the action. This allows for fine-grained access control, which can be useful for implementing a security policy that requires conditional access to the accounts based on user groups and roles.<br><br>AWS IAM Identity Center (AWS SSO) allows you to connect to your on-premises Active Directory service using SAML 2.0. With this, you can enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol, which allows for the management of user identities in a single location.In option C, the company will use IAM to use a SAML 2.0 identity provider, and it will use the appropriate groups in Active Directory to grant access to the required AWS accounts by using cross-account IAM users. In this way, it can implement its security policy of conditional access to the accounts based on user groups and roles.<br><br>In summary, both option A and C are valid solutions, both of them allow you to use your on-premises Active Directory service for user authentication, and both of them allow you to manage user identities in a single location and grant access to the AWS accounts based on user groups and roles.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774751,
          "date": "Fri 13 Jan 2023 18:52",
          "username": "masetromain",
          "content": "In option C, the company will use IAM to use a SAML 2.0 identity provider, and it will use the appropriate groups in Active Directory to grant access to the required AWS accounts by using cross-account IAM users. In this way, it can implement its security policy of conditional access to the accounts based on user groups and roles.<br><br>In summary, both option A and C are valid solutions, both of them allow you to use your on-premises Active Directory service for user authentication, and both of them allow you to manage user identities in a single location and grant access to the AWS accounts based on user groups and roles.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751311,
          "date": "Tue 20 Dec 2022 19:02",
          "username": "tman22",
          "content": "C. <br>On-premises Active Directory does not support SCIM or OIDC.  Azure AD is not mentioned.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 750626,
          "date": "Tue 20 Dec 2022 08:55",
          "username": "aragon_saa",
          "content": "I choose A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743079,
          "date": "Mon 12 Dec 2022 18:17",
          "username": "masetromainmasetromain",
          "content": "I prefer to go to answer A for ABAC<br><br>https://docs.aws.amazon.com/singlesignon/latest/userguide/scim-profile-saml.html<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.htmlhttps://www.examtopics.com/discussions/amazon/view/74174-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743088,
          "date": "Mon 12 Dec 2022 18:22",
          "username": "masetromain",
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
          "id": 792755,
          "date": "Mon 30 Jan 2023 14:06",
          "username": "zozza2023",
          "content": "The problem is that an error is displayed==>solution API throttling",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 789070,
          "date": "Thu 26 Jan 2023 20:53",
          "username": "vsk12",
          "content": "Option B is wrong as API throttling would be applied to all the customers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774790,
          "date": "Fri 13 Jan 2023 20:18",
          "username": "masetromainmasetromain",
          "content": "API throttling is a technique that can be used to control the rate of requests to an API. This can be useful in situations where a small number of clients are making a large number of requests, which is causing errors. By implementing API throttling through a usage plan at the API Gateway level, the solutions architect can limit the number of requests that a client can make, which will help to reduce the number of errors.<br><br>It's important that the client application handles the code 429 replies without error, this will help to improve the customer experience by reducing the number of errors that are displayed to customers. Additionally, it will prevent the API's reputation from being damaged by the errors.It is important to note that other solutions such as retry logic with exponential backoff and irregular variation in the client application or turn on API caching to enhance responsiveness for the production stage may help to improve the customer experience and reduce errors, but they do not address the root cause of the problem which is a large number of requests coming from a small number of clients.<br><br>Implementing reserved concurrency at the Lambda function level can provide resources that are needed during sudden increases in traffic, but it does not address the issue of a client making a large number of requests and causing errors.",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774791,
          "date": "Fri 13 Jan 2023 20:18",
          "username": "masetromain",
          "content": "It is important to note that other solutions such as retry logic with exponential backoff and irregular variation in the client application or turn on API caching to enhance responsiveness for the production stage may help to improve the customer experience and reduce errors, but they do not address the root cause of the problem which is a large number of requests coming from a small number of clients.<br><br>Implementing reserved concurrency at the Lambda function level can provide resources that are needed during sudden increases in traffic, but it does not address the issue of a client making a large number of requests and causing errors.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 760167,
          "date": "Wed 28 Dec 2022 18:41",
          "username": "zhangyu20000",
          "content": "B is correct. API gateway throttling is applied to single account - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html. Retry will make it even worse.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 743086,
          "date": "Mon 12 Dec 2022 18:22",
          "username": "masetromainmasetromainmasetromain",
          "content": "I go with A:<br>https://www.examtopics.com/discussions/amazon/view/69110-exam-aws-certified-solutions-architect-professional-topic-1/Implementing retry logic with exponential backoff and irregular variation in the client application can be a good way to improve the reliability of the application and reduce errors, but it does not address the root cause of the problem, which is a large number of requests coming from a small number of clients.<br><br>Retry logic with exponential backoff works by increasing the time between retries by a certain factor (e.g. doubling it) after each failed attempt. This can help to reduce the number of errors by giving the API time to recover from a high load. However, it does not address the issue of the high load itself. If the number of requests that a client is making is causing errors, retry logic alone may not be sufficient to resolve the issue.Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774792,
          "date": "Fri 13 Jan 2023 20:19",
          "username": "masetromainmasetromain",
          "content": "Implementing retry logic with exponential backoff and irregular variation in the client application can be a good way to improve the reliability of the application and reduce errors, but it does not address the root cause of the problem, which is a large number of requests coming from a small number of clients.<br><br>Retry logic with exponential backoff works by increasing the time between retries by a certain factor (e.g. doubling it) after each failed attempt. This can help to reduce the number of errors by giving the API time to recover from a high load. However, it does not address the issue of the high load itself. If the number of requests that a client is making is causing errors, retry logic alone may not be sufficient to resolve the issue.Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 774793,
          "date": "Fri 13 Jan 2023 20:19",
          "username": "masetromain",
          "content": "Handling errors with descriptive error messages can improve the customer experience, but it does not address the underlying problem of high number of requests from a small number of clients that causes errors.<br><br>Throttling is a way to control the rate of requests to an API, which can help to reduce the number of errors. By limiting the number of requests that a client can make, throttling can help to reduce the high number of requests that is causing errors, and it addresses the root cause of the problem.",
          "upvote_count": "1",
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
          "id": 791518,
          "date": "Sun 29 Jan 2023 10:38",
          "username": "Musk",
          "content": "I go for D.  In A, we are missing a critical step, exporting the resutls back from FSX to S3. Instead, we are deleting the FSX file system, which means that results and modifications are lost. Please check https://aws.amazon.com/blogs/storage/new-enhancements-for-moving-data-between-amazon-fsx-for-lustre-and-amazon-s3/ which explains that.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786710,
          "date": "Tue 24 Jan 2023 17:55",
          "username": "MasterP007",
          "content": "Option A is Correct. <br>As for Option B - is there such a thing as EBS Multi-attach!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774796,
          "date": "Fri 13 Jan 2023 20:22",
          "username": "masetromain",
          "content": "This solution would provide the largest overall cost reduction while meeting the requirements. By migrating the data to an S3 bucket using the S3 Intelligent-Tiering storage class, the company can take advantage of the automatic cost optimization provided by the storage class, which can result in significant cost savings. Additionally, by using Amazon FSx for Lustre to create a new file system with the data from Amazon S3, the company can take advantage of the high-performance access to the needed data for the duration of the 72-hour run. When the job is complete, the company can delete the file system, further reducing costs.<br><br>Option B, C and D may provide some cost savings over the current solution, but the savings would be less significant than the option A, because of the cost of the storage, the cost of the data transfer, and the cost of the storage gateway, the solution using the S3 and FSx for Lustre is the most cost-effective while meeting the requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 755230,
          "date": "Sat 24 Dec 2022 23:49",
          "username": "cloudfever",
          "content": "using FSx for Lustre with lazy loading allows you to only pay for the data that is accessed during the job, rather than paying for the entire file system upfront.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744182,
          "date": "Tue 13 Dec 2022 16:12",
          "username": "masetromain",
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
          "id": 792845,
          "date": "Mon 30 Jan 2023 14:27",
          "username": "zozza2023",
          "content": "C.  NLB with one Elastic IP per AZ to handle TCP traffic. Alias record set named my.service.com.<br>https://www.examtopics.com/discussions/amazon/view/28045-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791541,
          "date": "Sun 29 Jan 2023 11:11",
          "username": "Musk",
          "content": "C looks correct. I did not read the rest.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774801,
          "date": "Fri 13 Jan 2023 20:29",
          "username": "masetromain",
          "content": "A more appropriate solution would be option C.  Create an Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB.  Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set. As it uses the NLB as the resource in the A-record, traffic will be routed through the NLB, and it will automatically route the traffic to the healthy instances based on the health checks and also it provides the fixed address assignments as the other companies can add the NLB's Elastic IP addresses to their allow lists.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744188,
          "date": "Tue 13 Dec 2022 16:15",
          "username": "masetromain",
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
          "id": 796612,
          "date": "Fri 03 Feb 2023 02:46",
          "username": "Amac1979",
          "content": "C<br>Savings plans are 60-75% savings, capacity reservations guarantee the capacity (no savings).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792858,
          "date": "Mon 30 Jan 2023 14:32",
          "username": "zozza2023",
          "content": "SLA looks like 65%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783299,
          "date": "Sat 21 Jan 2023 14:04",
          "username": "Pugsley",
          "content": "The math is more logical for D - look at the 65% vs 35%.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774804,
          "date": "Fri 13 Jan 2023 20:36",
          "username": "masetromain",
          "content": "Option D is correct because it meets the requirements of maintaining high availability, meeting SLAs for scheduled jobs, and reducing costs with a consumption-based model. By splitting the 12 instances across three Availability Zones, the system can maintain high availability and availability of resources in case of a failure. Option D also uses a combination of On-Demand Instances with Capacity Reservations and Spot Instances, which allows for scheduled jobs to be run on the On-Demand instances with guaranteed capacity, while also taking advantage of the cost savings from Spot Instances for the user jobs which have lower SLA requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 768079,
          "date": "Fri 06 Jan 2023 22:02",
          "username": "Vicious000",
          "content": "I think is D since it says most cost effective",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744194,
          "date": "Tue 13 Dec 2022 16:19",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/89276-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 742885,
          "date": "Mon 12 Dec 2022 15:15",
          "username": "zhangyu20000",
          "content": "D is correct, other options has no more than 50% compute, less than required 65.",
          "upvote_count": "3",
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
          "id": 792862,
          "date": "Mon 30 Jan 2023 14:34",
          "username": "zozza2023",
          "content": "Secrets Manager support RotationSchedule.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791552,
          "date": "Sun 29 Jan 2023 11:32",
          "username": "Musk",
          "content": "Option B is not wrong, but it has more operational overhead compared to option A.  Option B uses AWS Systems Manager Parameter Store, which is less automated and requires manual intervention to perform password rotation. Option A uses AWS Secrets Manager, which provides a built-in mechanism to rotate secrets, reducing operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774807,
          "date": "Fri 13 Jan 2023 20:45",
          "username": "masetromain",
          "content": "Option A is the correct answer because it meets the security engineer's requirements with the least amount of operational overhead. This option uses AWS Secrets Manager to generate the database password as a secret resource, which is a secure and managed service for storing and rotating secrets such as database credentials. The CloudFormation template also includes a Lambda function resource to rotate the password, and a Secrets Manager RotationSchedule resource to schedule the password rotation every 90 days.<br>This option is the correct answer because it is the best way to manage the password rotation, Secrets Manager is a fully managed service that encrypts and stores the credentials and rotates the credentials automatically, and CloudFormation is used to automate the deployment of the resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759544,
          "date": "Wed 28 Dec 2022 09:03",
          "username": "Untamables",
          "content": "A<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/cloudformation.html<br>Option B is wrong. The ParameterStore::RotationSchedule resource does not exist in CloudFormation.<br>Option C is wrong. It does not meet the requirement because it does not use CloudFormation.<br>Option D is wrong. The AWS::AppSync::DataSource resource is what to create data sources for resolvers in AWS AppSync to connect to.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744928,
          "date": "Wed 14 Dec 2022 10:24",
          "username": "robertohyena",
          "content": "Secrets Manager support RotationSchedule.<br>Not ParameterStore.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 744197,
          "date": "Tue 13 Dec 2022 16:21",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/47127-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743627,
          "date": "Tue 13 Dec 2022 06:42",
          "username": "nyunyu",
          "content": "A <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742894,
          "date": "Mon 12 Dec 2022 15:22",
          "username": "zhangyu20000",
          "content": "C is correct - https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
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
          "username": "Untamables",
          "content": "A and C. <br>API Gateway REST API can invoke DynamoDB directly.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-overview-developer-experience.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 792892,
          "date": "Mon 30 Jan 2023 14:56",
          "username": "zozza2023",
          "content": "A and C are the correct answers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 774809,
          "date": "Fri 13 Jan 2023 20:47",
          "username": "masetromain",
          "content": "A and C are the correct answers.A.  Create an Amazon API Gateway REST API. Configure this API with direct integrations to DynamoDB by using API Gateway's AWS integration type.C.  Create an Amazon API Gateway HTTP API. Configure this API with integrations to AWS Lambda functions that return data from the DynamoDB tables.<br>By Using Amazon API Gateway, the solution will automatically scale in response to demand, and it will also provide a simple API over HTTPS. While using the Lambda function the data can be accessed from the DynamoDB tables.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 762206,
          "date": "Fri 30 Dec 2022 18:52",
          "username": "eraser2021999",
          "content": "Lambda@Edge is available for CloudFront and not for Global Accelerator.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 744203,
          "date": "Tue 13 Dec 2022 16:28",
          "username": "masetromain",
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
          "id": 792938,
          "date": "Mon 30 Jan 2023 15:47",
          "username": "zozza2023",
          "content": "CEF are the answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 774812,
          "date": "Fri 13 Jan 2023 20:53",
          "username": "masetromainShahul75masetromain",
          "content": "C: By creating an AWS Lambda function, the solution architect can use the JSON document to look up the target URLs for each domain and respond with the appropriate redirect URL. This way, the solution does not need to rely on a web server to handle the redirects, which reduces operational effort.<br><br>E: By creating an Amazon CloudFront distribution, the solution architect can deploy a Lambda@Edge function that can look up the target URLs for each domain and respond with the appropriate redirect URL. This way, CloudFront can handle the redirection, which reduces operational effort.<br><br>F: By creating an SSL certificate with ACM and including the domains as Subject Alternative Names, the solution architect can ensure that the redirect service can handle both HTTP and HTTPS requests, which is required by the company.SAN cannot handle redirects.We need to do http - httpsA and B are not the right answer because they would require configuring and maintaining a web server to handle the redirects, which would increase operational effort.<br>D is not the right answer because it would require creating an API Gateway API, which increases operational effort.",
          "upvote_count": "412",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 796339,
          "date": "Thu 02 Feb 2023 19:47",
          "username": "Shahul75",
          "content": "SAN cannot handle redirects.We need to do http - https",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774813,
          "date": "Fri 13 Jan 2023 20:54",
          "username": "masetromain",
          "content": "A and B are not the right answer because they would require configuring and maintaining a web server to handle the redirects, which would increase operational effort.<br>D is not the right answer because it would require creating an API Gateway API, which increases operational effort.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 759826,
          "date": "Wed 28 Dec 2022 13:47",
          "username": "Untamables",
          "content": "CEF<br>The serverless architecture reduces operational overhead the most.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html<br>https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 744206,
          "date": "Tue 13 Dec 2022 16:32",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/69017-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
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
          "id": 792940,
          "date": "Mon 30 Jan 2023 15:53",
          "username": "zozza2023",
          "content": "Answer A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774816,
          "date": "Fri 13 Jan 2023 21:09",
          "username": "masetromain",
          "content": "Answer A : because we do not depend on the users, I prefer management account<br><br>Option C or A would be the correct answer. In option C, the solution architect would activate the costCenter user-defined tag in the member accounts of the organization, and then schedule a monthly AWS Cost and Usage Report from the management account to retrieve the reports and calculate the total cost for the costCenter tagged resources. In option A, the management account of the organization would activate the costCenter user-defined tag and configure monthly AWS Cost and Usage Reports to be saved to an Amazon S3 bucket in the management account. Then, use the tag breakdown in the report to obtain the total cost for the costCenter tagged resources. Both options would allow the company to accurately identify the cost of the security tools running on the EC2 instances and charge the compliance team's AWS account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759868,
          "date": "Wed 28 Dec 2022 14:13",
          "username": "Untamables",
          "content": "I vote A. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/configurecostallocreport.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759369,
          "date": "Wed 28 Dec 2022 06:04",
          "username": "yimiccyimicc",
          "content": "Should be a CChange to A, the activation of user tag for billing can only be done by management account",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759376,
          "date": "Wed 28 Dec 2022 06:07",
          "username": "yimicc",
          "content": "Change to A, the activation of user tag for billing can only be done by management account",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 751340,
          "date": "Tue 20 Dec 2022 19:34",
          "username": "tman22",
          "content": "A.  You want the cost information across all accounts - So you use the management account.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 744217,
          "date": "Tue 13 Dec 2022 16:40",
          "username": "masetromain",
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
          "id": 792941,
          "date": "Mon 30 Jan 2023 15:54",
          "username": "zozza2023",
          "content": "A and C are the answer for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 774821,
          "date": "Fri 13 Jan 2023 21:17",
          "username": "masetromain",
          "content": "Option A is sharing the transit gateway with member accounts by using AWS Resource Access Manager, which allows the management account to share resources with member accounts. Option C is launching an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account, and associates the attachment with the transit gateway in the management account by using the transit gateway ID.  This automation of creating a new VPC and transit gateway attachment in new member accounts can help to streamline the process and reduce operational effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 760904,
          "date": "Thu 29 Dec 2022 11:51",
          "username": "Untamables",
          "content": "A & C<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 744223,
          "date": "Tue 13 Dec 2022 16:43",
          "username": "masetromain",
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
          "id": 792947,
          "date": "Mon 30 Jan 2023 16:00",
          "username": "zozza2023",
          "content": "should be C i guess",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 782128,
          "date": "Fri 20 Jan 2023 11:46",
          "username": "ask4cloud",
          "content": "This approach allows the procurement managers to assume the procurement-manager-role in shared services accounts, which have the AWSPrivateMarketplaceAdminFullAccess managed policy attached to it and can then manage the Private Marketplace. The organization root-level SCP denies the permission to administer Private Marketplace to everyone except the role named procurement-manager-role and another SCP denies the permission to create an IAM role named procurement-manager-role to everyone in the organization, ensuring that only the procurement team can assume the role and manage the Private Marketplace. This approach provides a centralized way to manage and restrict access to Private Marketplace while maintaining a high level of security.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774824,
          "date": "Fri 13 Jan 2023 21:21",
          "username": "masetromain",
          "content": "The most efficient way to design an architecture to meet these requirements is option C.  By creating an IAM role named procurement-manager-role in all the shared services accounts in the organization and adding the AWSPrivateMarketplaceAdminFullAccess managed policy to the role, the procurement managers will have the necessary permissions to administer Private Marketplace. Then, by creating an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role and another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization, the company can restrict access to Private Marketplace administrative access to only the procurement managers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744242,
          "date": "Tue 13 Dec 2022 16:54",
          "username": "masetromain",
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
          "id": 792917,
          "date": "Mon 30 Jan 2023 15:24",
          "username": "jooncco",
          "content": "B is correct.<br>By removing FullAWSAccess SCP, default deny will be applied.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780727,
          "date": "Thu 19 Jan 2023 05:35",
          "username": "AjayD123",
          "content": "B is correct<br>https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744248,
          "date": "Tue 13 Dec 2022 16:55",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/46899-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742312,
          "date": "Mon 12 Dec 2022 02:51",
          "username": "zhangyu20000",
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
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.<br></p>",
              "correct": true,
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
          "username": "EricZhang",
          "content": "Serverless requires least operational effort.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798657,
          "date": "Sun 05 Feb 2023 07:57",
          "username": "oatif",
          "content": "The answer is C, no idea, why ppl are voting for A.  C requires the minimum amount of effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793547,
          "date": "Tue 31 Jan 2023 03:10",
          "username": "jooncco",
          "content": "Suppose there are a 100 REST APIs (Since this application is monolithic, it's quite common).<br>Are you still going to copy and paste all those API codes into lambda?<br>What if business logic changes?<br>This is not MINIMAL. I would go with C. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792961,
          "date": "Mon 30 Jan 2023 16:11",
          "username": "zozza2023",
          "content": "why not C?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786164,
          "date": "Tue 24 Jan 2023 06:11",
          "username": "viddkr",
          "content": "Question on 23-Jan-2023, selected A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774829,
          "date": "Fri 13 Jan 2023 21:31",
          "username": "masetromaintatdatpham",
          "content": "Option A is good because it separates the API into individual AWS Lambda functions, which allows for automatic scaling of the backend based on the traffic it receives. Additionally, it also allows for more fine-grained scaling of specific parts of the API that may be receiving more traffic than others. By configuring an Amazon API Gateway REST API with Lambda integration, you can also benefit from features such as caching, monitoring, and security. Finally, by updating the Route 53 record to point to the API Gateway API, you can ensure that mobile clients are directed to the correct endpoint. This solution will have the least operational overhead, as it allows for automatic scaling and offloads many of the operational responsibilities to the managed services provided by AWS.I think the answer is C, you forgot that the application is monolithic. You need a lot of effort to migrate app to lambda function.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793757,
          "date": "Tue 31 Jan 2023 08:14",
          "username": "tatdatpham",
          "content": "I think the answer is C, you forgot that the application is monolithic. You need a lot of effort to migrate app to lambda function.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 767485,
          "date": "Fri 06 Jan 2023 10:49",
          "username": "adit",
          "content": "C - least operational effort from existing setup.<br><br>A - Operational effort is high<br>B - Containerize - Operational effort is high<br>D - ALB and private subnet - Operational effort is high",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744250,
          "date": "Tue 13 Dec 2022 16:59",
          "username": "masetromainzhangyu20000masetromain",
          "content": "I go with DD does not have ASG, it cannot scale outCorrect, option D does not include the use of an Auto Scaling group, which would be necessary for the API to automatically scale based on traffic. This would increase the operational overhead as manual scaling actions would need to be taken to handle the increased traffic. Option A or B would be better in this case as they both include automated scaling capabilities.",
          "upvote_count": "231",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 749868,
          "date": "Mon 19 Dec 2022 14:45",
          "username": "zhangyu20000masetromain",
          "content": "D does not have ASG, it cannot scale outCorrect, option D does not include the use of an Auto Scaling group, which would be necessary for the API to automatically scale based on traffic. This would increase the operational overhead as manual scaling actions would need to be taken to handle the increased traffic. Option A or B would be better in this case as they both include automated scaling capabilities.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 774828,
          "date": "Fri 13 Jan 2023 21:31",
          "username": "masetromain",
          "content": "Correct, option D does not include the use of an Auto Scaling group, which would be necessary for the API to automatically scale based on traffic. This would increase the operational overhead as manual scaling actions would need to be taken to handle the increased traffic. Option A or B would be better in this case as they both include automated scaling capabilities.",
          "upvote_count": "1",
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
          "id": 774832,
          "date": "Fri 13 Jan 2023 21:33",
          "username": "masetromain",
          "content": "B is the correct answer. The solution would be to create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. This would allow the management account to view the usage costs across all the member accounts, and the teams can visualize the CUR through an Amazon QuickSight dashboard. This allows the organization to have a centralized place to view the cost breakdown and the teams to access the cost breakdown in an easy way.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744252,
          "date": "Tue 13 Dec 2022 17:00",
          "username": "masetromain",
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
          "id": 798665,
          "date": "Sun 05 Feb 2023 08:20",
          "username": "oatif",
          "content": "My initial thought was A, but the solution requires data to be available in the cloud, not to replace a Windows File server with a Cloud-based sol'n-like storage gateway. So B is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774833,
          "date": "Fri 13 Jan 2023 21:36",
          "username": "masetromain",
          "content": "B.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.D.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS) are also valid options. They both use DataSync to schedule a daily task to replicate the data between on-premises and cloud, the main difference is the type of file system in the cloud, Amazon FSx or Amazon Elastic File System (Amazon EFS).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744255,
          "date": "Tue 13 Dec 2022 17:03",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/47620-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2",
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
          "id": 793573,
          "date": "Tue 31 Jan 2023 03:55",
          "username": "jooncco",
          "content": "Modifying any existing application code IS a operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 782160,
          "date": "Fri 20 Jan 2023 12:17",
          "username": "ask4cloud",
          "content": "This solution will meet the requirements with the least operational overhead as it allows the company to use Amazon CloudFront to automatically distribute the static assets of the web application across multiple regions, and if the primary S3 bucket in us-east-1 becomes unavailable, CloudFront will automatically route the traffic to the secondary S3 bucket in the second region. This solution eliminates the need for additional Lambda function or updating the application code for failover.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774835,
          "date": "Fri 13 Jan 2023 21:37",
          "username": "masetromain",
          "content": "C.  Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins. This option provides automatic replication of objects across the two S3 buckets, and CloudFront automatically routes requests to the nearest origin, providing low latency and high availability for the application. This solution requires minimal operational overhead to maintain as the replication and failover is handled automatically by S3 and CloudFront.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 766972,
          "date": "Thu 05 Jan 2023 20:09",
          "username": "VVish",
          "content": "C - LEAST operational overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759778,
          "date": "Wed 28 Dec 2022 13:00",
          "username": "aimik",
          "content": "involves updating the application code to load S3 objects from the second region in case of a failover, which is not necessary if you are using CloudFront with an origin group as in option C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744348,
          "date": "Tue 13 Dec 2022 19:20",
          "username": "masetromain",
          "content": "Answer C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742310,
          "date": "Mon 12 Dec 2022 02:45",
          "username": "zhangyu20000",
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
          "id": 792995,
          "date": "Mon 30 Jan 2023 16:44",
          "username": "zozza2023",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 786938,
          "date": "Tue 24 Jan 2023 21:35",
          "username": "lunt",
          "content": "Answer is A. B.  R53 alias record?C.  No requirement for multi-region. Just HA. D.  Spot instance not HA. A.  Yes. NLB fine, EC2 ASG fine, R53 alias to NLB EIP fine.<br>Question does not mention regions, NLB can work with websites - yes ALB is the better option but NLB works perfectly fine for HTTP/HTTPS traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774839,
          "date": "Fri 13 Jan 2023 21:42",
          "username": "masetromain",
          "content": "B is correct. The solution architect should use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. <br><br>This solution provides scalability and high availability for the web application by using an Application Load Balancer and an Auto Scaling group in multiple availability zones, which can automatically scale in and out based on traffic demand. The use of a Multi-AZ Amazon Aurora MySQL DB cluster provides high availability for the database layer and the Retain deletion policy ensures the data is retained even if the DB instance is deleted. Additionally, the use of Route 53 with an alias record ensures traffic is routed to the correct location.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744835,
          "date": "Wed 14 Dec 2022 08:44",
          "username": "robertohyenamasetromain",
          "content": "Agree with B. <br>Not A: we will not use NLB for web app<br>Not C: Beanstalk is region service. It CANNOT \\\"automatically scaling web server environment that spans two separate Regions\\\"<br>Not D:spot instances cant meet 'highly available'That's correct, option C is not a valid solution because AWS Elastic Beanstalk is a region-specific service, it cannot span multiple regions. Option B is a valid solution that uses CloudFormation to launch a stack with an Application Load Balancer in front of an Auto Scaling group, a Multi-AZ Aurora MySQL cluster and Route 53 to route traffic to the load balancer, it meets the requirements of scalability and high availability with a good performance and with less operational overhead.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774840,
          "date": "Fri 13 Jan 2023 21:44",
          "username": "masetromain",
          "content": "That's correct, option C is not a valid solution because AWS Elastic Beanstalk is a region-specific service, it cannot span multiple regions. Option B is a valid solution that uses CloudFormation to launch a stack with an Application Load Balancer in front of an Auto Scaling group, a Multi-AZ Aurora MySQL cluster and Route 53 to route traffic to the load balancer, it meets the requirements of scalability and high availability with a good performance and with less operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744352,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "masetromainmasetromain",
          "content": "for me the answer is Bhttps://www.examtopics.com/discussions/amazon/view/28502-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744353,
          "date": "Tue 13 Dec 2022 19:24",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/28502-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742305,
          "date": "Mon 12 Dec 2022 02:42",
          "username": "zhangyu20000EricZhang",
          "content": "Answer is B.  <br>AC not correct because Beanstalk does not support .NET<br>D user spot instance that is not reliableBeanstalk does support .NET https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.container.console.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 747094,
          "date": "Fri 16 Dec 2022 12:17",
          "username": "EricZhang",
          "content": "Beanstalk does support .NET https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.container.console.html",
          "upvote_count": "1",
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
          "id": 774843,
          "date": "Fri 13 Jan 2023 21:47",
          "username": "masetromain",
          "content": "The best solution is C, because it involves creating the stack set in the management account of the organization, which is the central point of control for all the member accounts. This allows the solutions architect to manage the deployment of the stack set across all member accounts from a single location. Service-managed permissions are used, which allows the CloudFormation service to deploy the stack set to all member accounts. The deployment options are set to deploy to the organization and automatic deployment is enabled, which ensures that the stack set is automatically deployed to all member accounts as soon as it is created in the management account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744459,
          "date": "Tue 13 Dec 2022 21:56",
          "username": "Atila50",
          "content": "I THINK I SHOULD BE A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744357,
          "date": "Tue 13 Dec 2022 19:26",
          "username": "masetromain",
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
          "username": "bititan",
          "content": "trusted advisor doesn't have option to upload data, so option F is irrelavent",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 782366,
          "date": "Fri 20 Jan 2023 15:46",
          "username": "boomx",
          "content": "BDE.  Trusted Advisor is not for onprem assessments. Migration hub does EC2 ones",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778167,
          "date": "Mon 16 Jan 2023 20:39",
          "username": "zhangyu20000",
          "content": "ADE is my answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 774847,
          "date": "Fri 13 Jan 2023 21:58",
          "username": "masetromainmasetromainshputhan",
          "content": "in order to meet the requirements of capturing details about the system configuration, system performance, running processes, and network connections of on-premises workloads, the company should install the AWS Application Discovery Agent on the physical machines and VMs. This will allow the company to assess the existing applications and gather information about their system configurations, performance, and network connections.<br><br>To group servers into applications for migration, the company should use the AWS Migration Hub. This will allow the company to organize their servers and applications in a way that makes migration to AWS more manageable and efficient.In order to generate recommended instance types and associated costs, the company should use AWS Trusted Advisor. Trusted Advisor can analyze the data collected by the Application Discovery Agent and provide recommendations for cost-optimized EC2 instances that will be suitable for the company's workloads. This will allow the company to run their workloads on AWS in the most cost-effective manner.<br><br>Option E, which involves generating recommended instance types and associated costs using AWS Migration Hub, is not the best choice for cost optimization, Trusted Advisor is a service that analyzes the resources in your AWS environment and provides recommendations to help you save money, improve system performance, or close security gaps.I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html",
          "upvote_count": "213",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 774848,
          "date": "Fri 13 Jan 2023 21:59",
          "username": "masetromainshputhan",
          "content": "In order to generate recommended instance types and associated costs, the company should use AWS Trusted Advisor. Trusted Advisor can analyze the data collected by the Application Discovery Agent and provide recommendations for cost-optimized EC2 instances that will be suitable for the company's workloads. This will allow the company to run their workloads on AWS in the most cost-effective manner.<br><br>Option E, which involves generating recommended instance types and associated costs using AWS Migration Hub, is not the best choice for cost optimization, Trusted Advisor is a service that analyzes the resources in your AWS environment and provides recommendations to help you save money, improve system performance, or close security gaps.I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 783136,
          "date": "Sat 21 Jan 2023 10:17",
          "username": "shputhan",
          "content": "I think option E is correct. Considering the fact Trusted Advisor provides suggestion based on utilization of resources which is already deployed in AWS. Whereas Migration Hub can suggest recommended EC2 instances.<br>https://docs.aws.amazon.com/migrationhub/latest/ug/ec2-recommendations.html",
          "upvote_count": "3",
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
          "id": 793012,
          "date": "Mon 30 Jan 2023 17:02",
          "username": "zozza2023",
          "content": "C for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774854,
          "date": "Fri 13 Jan 2023 22:06",
          "username": "masetromain",
          "content": "C.  Setting up an S3 gateway VPC endpoint in the VPC and attaching an endpoint policy to the endpoint will allow the EC2 instances to securely access the S3 bucket for image storage without the need for NAT gateways, reducing costs without compromising security or increasing ongoing operations. This option reduces the costs associated with the NAT gateways and allows for faster data retrieval from the S3 bucket as traffic does not have to go through the internet gateway.",
          "upvote_count": "1",
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
          "username": "zhangyu20000",
          "content": "A is correct. On demand mode is for unknown load pattern, auto scaling is for know burst pattern",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 793015,
          "date": "Mon 30 Jan 2023 17:05",
          "username": "zozza2023",
          "content": "has nothing with DAX here.<br>between A and B==> A is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791391,
          "date": "Sun 29 Jan 2023 05:42",
          "username": "pravi1",
          "content": "A makes sense here. On-demand more costly compared to reserved ones.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786028,
          "date": "Tue 24 Jan 2023 02:19",
          "username": "DDONG",
          "content": "A SAPC01 #1005",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785162,
          "date": "Mon 23 Jan 2023 10:11",
          "username": "ccort",
          "content": "A<br>on-demand prices can be 7 times higher, given the options it is better to have reserved WCU and RCU and auto scale in the given schedule",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774855,
          "date": "Fri 13 Jan 2023 22:09",
          "username": "masetromainmasetromain",
          "content": "B.  Configure on-demand capacity mode for the table. This solution will allow the table to automatically scale its capacity based on the actual usage, and will minimize the cost of the table as it will only pay for the capacity used during the peak load period, and not the entire week. Additionally, since the access pattern includes more writes than reads, on-demand capacity mode is a good fit as it is more cost-effective for write-heavy workloads.Option D is a possible solution that could meet the requirements, as it leverages DynamoDB Accelerator (DAX) to improve the performance of read operations on the table and also configures on-demand capacity mode for the table which will minimize the cost as it only charges for the requests made to the table.<br><br>However, it's important to consider that DAX will add some costs to the solution, and it's not guaranteed that the on-demand capacity mode will be enough to handle the peak load, so it's important to monitor the table and make sure that the performance is meeting the expectations.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774856,
          "date": "Fri 13 Jan 2023 22:09",
          "username": "masetromain",
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
          "id": 793019,
          "date": "Mon 30 Jan 2023 17:12",
          "username": "zozza2023",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 791753,
          "date": "Sun 29 Jan 2023 16:05",
          "username": "Musk",
          "content": "Because A is not valid due to time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 791394,
          "date": "Sun 29 Jan 2023 05:43",
          "username": "pravi1",
          "content": "D will be correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776912,
          "date": "Sun 15 Jan 2023 19:14",
          "username": "masetromain",
          "content": "The correct answer would be option D. <br><br>This option suggests creating a queue using Amazon SQS, configuring the existing web server to publish to the new queue, and using EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. The EC2 instances can be scaled based on the SQS queue length, which ensures that the resources are available during peak usage times and reduces costs during non-peak times.<br><br>Option A is not correct because it suggests using AWS Lambda which has a maximum execution time of 15 minutes.<br>Option B is not correct because it suggests creating a new EC2 instance for each message in the queue, which is not cost-effective.<br>Option C is not correct because it suggests using Amazon EFS, which is not a suitable option for long-term storage of large files.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776636,
          "date": "Sun 15 Jan 2023 14:53",
          "username": "zhangyu20000",
          "content": "D is correct because it took 1 hour to process the file. Lambda only run 15 minutes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774859,
          "date": "Fri 13 Jan 2023 22:13",
          "username": "masetromainAtila50Atila50andctygrmasetromain",
          "content": "A.  Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.<br>This approach will be the most cost-effective as it uses serverless AWS Lambda to process the files, which only incurs charges while the function is running, and is therefore well suited for workloads with variable and unpredictable usage patterns. Additionally, using Amazon S3 for storage is a cost-effective option as it allows for the storage of large amounts of data at a low cost.Although this answer is the most cost-effective, AWS Lambda only allows functions to run up to 15 minutes.correct ans is DYou cannot use Lambda function since the question mentioned \\\"process time take up to 1 hour for processing\\\" Aws Lambda functions can run only 15 minutes per function.https://www.examtopics.com/discussions/amazon/view/36333-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>you are right, I was wrong despite the fact that I already knew this question. sorry",
          "upvote_count": "11111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776918,
          "date": "Sun 15 Jan 2023 19:23",
          "username": "Atila50Atila50",
          "content": "Although this answer is the most cost-effective, AWS Lambda only allows functions to run up to 15 minutes.correct ans is D",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 776921,
          "date": "Sun 15 Jan 2023 19:27",
          "username": "Atila50",
          "content": "correct ans is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776207,
          "date": "Sun 15 Jan 2023 07:37",
          "username": "andctygrmasetromain",
          "content": "You cannot use Lambda function since the question mentioned \\\"process time take up to 1 hour for processing\\\" Aws Lambda functions can run only 15 minutes per function.https://www.examtopics.com/discussions/amazon/view/36333-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>you are right, I was wrong despite the fact that I already knew this question. sorry",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 776879,
          "date": "Sun 15 Jan 2023 18:36",
          "username": "masetromain",
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
          "id": 791760,
          "date": "Sun 29 Jan 2023 16:12",
          "username": "Musk",
          "content": "Option B is the most cost-effective solution that meets the requirements. Reducing the number of data nodes in the cluster and adding UltraWarm nodes will help to reduce the ongoing costs of running the OpenSearch Service cluster. Configuring the indexes to transition to UltraWarm when OpenSearch Service ingests the data will further reduce costs. Additionally, transitioning the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy will lower the storage costs of retaining the input data for compliance purposes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774862,
          "date": "Fri 13 Jan 2023 22:17",
          "username": "masetromainmasetromain",
          "content": "B is the most cost-effective solution as it reduces the number of data nodes in the cluster to 2 and adds UltraWarm nodes to handle the expected capacity. By configuring the indexes to transition to UltraWarm when OpenSearch Service ingests the data, the company can take advantage of the lower storage costs of UltraWarm. Additionally, by transitioning the input data to S3 Glacier Deep Archive after 1 month using an S3 Lifecycle policy, the company can further reduce costs by using the lower storage costs of S3 Glacier Deep Archive for long-term data retention.Option C can meet the requirements of reducing the number of data nodes in the cluster and using UltraWarm and cold storage nodes to handle the expected capacity and moving the data to lower cost storage after 1 month. However, it may not be the most cost-effective solution as it involves additional complexity in configuring the indexes to transition between different storage tiers, and may also require additional management and maintenance of the cold storage nodes. Option B, where the data is transitioned from S3 Standard to S3 Glacier Deep Archive using an S3 Lifecycle policy is simpler and more cost-effective as it eliminates the need for additional storage tiers and management.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774863,
          "date": "Fri 13 Jan 2023 22:17",
          "username": "masetromain",
          "content": "Option C can meet the requirements of reducing the number of data nodes in the cluster and using UltraWarm and cold storage nodes to handle the expected capacity and moving the data to lower cost storage after 1 month. However, it may not be the most cost-effective solution as it involves additional complexity in configuring the indexes to transition between different storage tiers, and may also require additional management and maintenance of the cold storage nodes. Option B, where the data is transitioned from S3 Standard to S3 Glacier Deep Archive using an S3 Lifecycle policy is simpler and more cost-effective as it eliminates the need for additional storage tiers and management.",
          "upvote_count": "2",
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
          "username": "masetromainmasetromain",
          "content": "The solution that meets this requirement with the LEAST operational overhead is D.  Configuring an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0, and applying the SCP to the NonProd OU. This solution would prevent the security group inbound rule from being created in the first place and will not require any additional steps or actions to be taken in order to remove the rule. This is less operationally intensive than modifying the EventBridge rule to invoke an AWS Lambda function, adding a Config rule or allowing the ec2:AuthorizeSecurityGroupIngress action with a specific IP.Option C does not meet the requirement that the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source. It only allows the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. It does not prevent the creation of a security group inbound rule that includes 0.0.0.0/0 as the source, it only allows for the ingress action on non-0.0.0.0/0 IPs.<br>Option D is the best solution as it denies the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. This will prevent the creation of any security group inbound rule that includes 0.0.0.0/0 as the source.",
          "upvote_count": "62",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774866,
          "date": "Fri 13 Jan 2023 22:21",
          "username": "masetromain",
          "content": "Option C does not meet the requirement that the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source. It only allows the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. It does not prevent the creation of a security group inbound rule that includes 0.0.0.0/0 as the source, it only allows for the ingress action on non-0.0.0.0/0 IPs.<br>Option D is the best solution as it denies the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. This will prevent the creation of any security group inbound rule that includes 0.0.0.0/0 as the source.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 798843,
          "date": "Sun 05 Feb 2023 14:10",
          "username": "snani10",
          "content": "I don't think aws:SourceIp is the input of the security group, it is the IP of the user who is updating the security group. <br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 794731,
          "date": "Wed 01 Feb 2023 00:55",
          "username": "joonccooatif",
          "content": "A is correct.<br>The values of AWS resource CANNOT be controlled by policies.A requires too much work, SCP is like a guardrail, it removes the ability for admins to assign certain permissions to users or services. <br><br>Regarding your point, it is referring to the API caller's Public IP -but look at the IP is 0.0.0.0/0 it is open to the entire internet, anybody can reach NonProd resource.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798591,
          "date": "Sun 05 Feb 2023 04:37",
          "username": "oatif",
          "content": "A requires too much work, SCP is like a guardrail, it removes the ability for admins to assign certain permissions to users or services. <br><br>Regarding your point, it is referring to the API caller's Public IP -but look at the IP is 0.0.0.0/0 it is open to the entire internet, anybody can reach NonProd resource.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791780,
          "date": "Sun 29 Jan 2023 16:37",
          "username": "Musk",
          "content": "Voting for A as per daybey's comment",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 787566,
          "date": "Wed 25 Jan 2023 12:45",
          "username": "daybeyMusk",
          "content": "I would go for A. <br>Not B: vpc-sg-open-only-to-authorized-ports does not exist.<br>Not C & D: SCP's can explicitly deny ec2:AuthorizeSecurityGroupIngress rule however aws:SourceIp key is not refering to the value of the ingress rule, but it is referring to the API caller's own Public IP. See this please: https://stackoverflow.com/a/61243672Very well seen thataws:SourceIp refers to the one creating the SG, not the SG allowed IP addresses.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791779,
          "date": "Sun 29 Jan 2023 16:37",
          "username": "Musk",
          "content": "Very well seen thataws:SourceIp refers to the one creating the SG, not the SG allowed IP addresses.",
          "upvote_count": "1",
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
          "id": 790702,
          "date": "Sat 28 Jan 2023 16:13",
          "username": "Untamables",
          "content": "https://aws.amazon.com/solutions/implementations/git-to-s3-using-webhooks/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780947,
          "date": "Thu 19 Jan 2023 10:15",
          "username": "AjayD123",
          "content": "Api Gateway with Lambda<br>https://medium.com/mindorks/building-webhook-is-easy-using-aws-lambda-and-api-gateway-56f5e5c3a596",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774868,
          "date": "Fri 13 Jan 2023 22:24",
          "username": "masetromainmasetromain",
          "content": "B.  Create an Amazon API Gateway HTTP API. Implement each webhook logic in a separate AWS Lambda function. Update the Git servers to call the API Gateway endpoint. This solution will provide low operational overhead as it utilizes the serverless capabilities of AWS Lambda and API Gateway, which automatically scales and manages the underlying infrastructure and resources. It also allows for the webhook logic to be easily managed and updated through the API Gateway interface.<br><br>The answer should be B because it is the best solution in terms of operational overhead.Option A would require updating the Git servers to call individual Lambda function URLs for each webhook, which would be more complex and time-consuming than calling a single API Gateway endpoint. <br><br>Option C would require deploying the webhook logic to AWS App Runner, which would also be more complex and time-consuming than using an API Gateway. <br><br>Option D would also require containerizing the webhook logic and creating an ECS cluster and Fargate, which would also add complexity and operational overhead compared to using an API Gateway.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774869,
          "date": "Fri 13 Jan 2023 22:24",
          "username": "masetromain",
          "content": "Option A would require updating the Git servers to call individual Lambda function URLs for each webhook, which would be more complex and time-consuming than calling a single API Gateway endpoint. <br><br>Option C would require deploying the webhook logic to AWS App Runner, which would also be more complex and time-consuming than using an API Gateway. <br><br>Option D would also require containerizing the webhook logic and creating an ECS cluster and Fargate, which would also add complexity and operational overhead compared to using an API Gateway.",
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
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is D: Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3.<br><br>Here is why the other choices are not correct:<br>A.  Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select. - AWS Agentless Discovery Connector will help in discovering and inventory servers but it does not provide the same level of detailed metrics as the AWS Application Discovery Agent, it also does not cover process information.B.  Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight. - It does not cover process information and it's not the best way to collect the required data, it's not efficient and it might miss some important information.<br>C.  Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console. - this solution might not be very reliable and it does not cover process information, also it does not provide a way to query and analyze the data.D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.",
          "upvote_count": "711",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779247,
          "date": "Tue 17 Jan 2023 20:13",
          "username": "masetromainmasetromain",
          "content": "B.  Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight. - It does not cover process information and it's not the best way to collect the required data, it's not efficient and it might miss some important information.<br>C.  Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console. - this solution might not be very reliable and it does not cover process information, also it does not provide a way to query and analyze the data.D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 779248,
          "date": "Tue 17 Jan 2023 20:13",
          "username": "masetromain",
          "content": "D.  Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3. - This is the correct answer as it covers all the requirements mentioned in the question, it will allow collecting the detailed metrics, including process information and it provides a way to query and analyze the data using Amazon Athena.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791396,
          "date": "Sun 29 Jan 2023 05:46",
          "username": "pravi1",
          "content": "D will be correct in my opinion.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779995,
          "date": "Wed 18 Jan 2023 13:44",
          "username": "icasspoatif",
          "content": "Choosing between A and D.  For A, how can S3 select query?I think A is a better solution because the Agentless discovery connector is custom-made for the VMware environment. It will save us time and collect all the necessary data we need. Installing a Discovery agent in every server would be very time-consuming. S3 select allows simple select operations against your raw data. I don't think we need athena for",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 798538,
          "date": "Sun 05 Feb 2023 02:24",
          "username": "oatif",
          "content": "I think A is a better solution because the Agentless discovery connector is custom-made for the VMware environment. It will save us time and collect all the necessary data we need. Installing a Discovery agent in every server would be very time-consuming. S3 select allows simple select operations against your raw data. I don't think we need athena for",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778768,
          "date": "Tue 17 Jan 2023 11:00",
          "username": "silkroad78masetromain",
          "content": "D Since Agentless Collector can't collect process https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.htmlYou are correct, AWS Agentless Discovery does not collect information about processes running on the servers. It primarily focuses on gathering information about the server's hardware, operating system, and network configuration. It is mainly used to discover and inventory servers, but it doesn't provide the same level of detailed metrics as the AWS Application Discovery Agent. The AWS Application Discovery Agent is the best option if the company wants to gather information about running processes on the servers, as it can provide more detailed metrics than Agentless Discovery.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 779244,
          "date": "Tue 17 Jan 2023 20:12",
          "username": "masetromain",
          "content": "You are correct, AWS Agentless Discovery does not collect information about processes running on the servers. It primarily focuses on gathering information about the server's hardware, operating system, and network configuration. It is mainly used to discover and inventory servers, but it doesn't provide the same level of detailed metrics as the AWS Application Discovery Agent. The AWS Application Discovery Agent is the best option if the company wants to gather information about running processes on the servers, as it can provide more detailed metrics than Agentless Discovery.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774871,
          "date": "Fri 13 Jan 2023 22:25",
          "username": "masetromain",
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
          "username": "masetromain",
          "content": "A.  Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.<br><br>This solution will give the Lambda function access to the internet by routing its outbound traffic through the NAT gateway, which has a public Elastic IP address. This will allow the external provider to whitelist the single public IP address associated with the NAT gateway, and enable the application to access the new service.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793162,
          "date": "Mon 30 Jan 2023 19:18",
          "username": "zozza2023",
          "content": "option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 788998,
          "date": "Thu 26 Jan 2023 19:32",
          "username": "MasterP007",
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
          "username": "masetromainmasetromain",
          "content": "The correct answer is B and D. <br>B.  Using RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database can help improve the performance of the application by reducing the number of connections opened to the database. RDS Proxy manages the connection pool and routes incoming connections to the available read replicas, which can help with connection management and reduce the number of connections that need to be opened and closed.<br>D.  Moving the code for opening the database connection in the Lambda function outside of the event handler can help to improve the performance of the application by allowing the database connection to be reused across multiple requests. This avoids the need to open and close a new connection for each request, which can be time-consuming and resource-intensive.A.  Using the cluster endpoint of the Aurora database instead of the reader endpoint would not help improve performance in this case, because the solution architect is already using read replicas to offload read traffic from the primary instance.<br>C.  Using the Lambda Provisioned Concurrency feature would not help improve performance in this case, as the problem is related to the number of connections to the database, not the number of instances running the Lambda function.<br>E.  Changing the API Gateway endpoint to an edge-optimized endpoint would not help improve performance in this case, as the problem is related to the number of connections to the database, not the location of the API Gateway endpoint.",
          "upvote_count": "62",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 774877,
          "date": "Fri 13 Jan 2023 22:32",
          "username": "masetromain",
          "content": "A.  Using the cluster endpoint of the Aurora database instead of the reader endpoint would not help improve performance in this case, because the solution architect is already using read replicas to offload read traffic from the primary instance.<br>C.  Using the Lambda Provisioned Concurrency feature would not help improve performance in this case, as the problem is related to the number of connections to the database, not the number of instances running the Lambda function.<br>E.  Changing the API Gateway endpoint to an edge-optimized endpoint would not help improve performance in this case, as the problem is related to the number of connections to the database, not the location of the API Gateway endpoint.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 798563,
          "date": "Sun 05 Feb 2023 03:29",
          "username": "Amac1979",
          "content": "BD<br>https://awstut.com/en/2022/04/30/connect-to-rds-outside-of-lambda-handler-method-to-improve-performance-en/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 782532,
          "date": "Fri 20 Jan 2023 17:57",
          "username": "masssa",
          "content": "B/C<br>lambda provisioned concurrency and RDS proxy are mentioned in same page.<br>https://quintagroup.com/blog/aws-lambda-provisioned-concurrency",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781929,
          "date": "Fri 20 Jan 2023 07:34",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.howitworks.html<br>https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 779429,
          "date": "Wed 18 Jan 2023 01:39",
          "username": "jhonivy",
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
          "username": "Untamables",
          "content": "Vote D. <br>If you need to pass encrypted traffic to targets without the load balancer decrypting it, you can create a Network Load Balancer or Classic Load Balancer with a TCP listener on port 443.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 785469,
          "date": "Mon 23 Jan 2023 15:43",
          "username": "pitakk",
          "content": "Amazon-issued public certificates can't be installed on an EC2 instance. To enable end-to-end encryption, you must use a third-party SSL certificate. https://aws.amazon.com/premiumsupport/knowledge-center/acm-ssl-certificate-ec2-elb/ so it's C or D.  I choose C as it's ALB",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 794049,
          "date": "Tue 31 Jan 2023 12:09",
          "username": "jojom19980",
          "content": "You must also configure the instances in your environment to listen on the secure port and terminate HTTPS connections. The configuration varies per platform. See Configuring your application to terminate HTTPS connections at the instance for instructions. You can use a self-signed certificate for the EC2 instances without issue.<br> link: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-endtoend.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791833,
          "date": "Sun 29 Jan 2023 17:28",
          "username": "Musk",
          "content": "I think I go for C, although depending on the definition of end-to-end (allows decryption in between?) might be D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785210,
          "date": "Mon 23 Jan 2023 11:17",
          "username": "ccort",
          "content": "I think C only because ACM only allows to export a private certificate, not public ones, which I assume are the ones being used by the ALB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 782761,
          "date": "Fri 20 Jan 2023 21:24",
          "username": "bititan",
          "content": "A.  this is about end 2 end encyrption between client and web server. if you do not install cert in webserver, then the transmission between ALB and web server remains unencrypted. cost is not a factor mentioned here only security is",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775237,
          "date": "Sat 14 Jan 2023 11:07",
          "username": "masetromain",
          "content": "The correct answer is option A.  By placing the EC2 instances behind an Application Load Balancer (ALB) and provisioning an SSL certificate using AWS Certificate Manager (ACM), associating the SSL certificate with the ALB, and configuring the ALB to listen on port 443 and forward traffic to port 443 on the instances, it ensures that traffic is encrypted in transit between the client and the web server. This meets the requirement for end-to-end encryption.<br><br>Option B is incorrect because it does not allow for end-to-end encryption in transit between the client and the web server.<br><br>Option C is incorrect because it involves using two SSL certificates, one from AWS and one from a third-party, which would create complexity and increase costs.<br><br>Option D is incorrect because it uses a Network Load Balancer (NLB) which does not support SSL termination and would not ensure end-to-end encryption in transit between the client and the web server.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
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
          "id": 793190,
          "date": "Mon 30 Jan 2023 19:41",
          "username": "zozza2023",
          "content": "C is corect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779255,
          "date": "Tue 17 Jan 2023 20:22",
          "username": "masetromainmasetromain",
          "content": "C.  <br>This option would meet the requirements of resolving the data loading issue and migrating without interruption or changes for the company's customers. By using AWS DMS for continuous data replication, the company can ensure that the data being migrated is up to date. By setting up an Aurora Replica and moving the aggregation jobs to run against it, the company can offload some of the read workload from the primary database and reduce the risk of issues with the load jobs. By using AWS Lambda functions behind an ALB and Amazon RDS Proxy to write to the Aurora MySQL database, the company can add an extra layer of security and scalability to the data collection process. Finally, by pointing the collector DNS record to the ALB after the databases are synced and disabling the AWS DMS sync task, the company can ensure a smooth cutover to the new environment.A.  <br>This option would not work as it would require to change the primary database and also it may cause interruption for the company's customers during the cutover process.<br>B. <br>This option would not work as it would not include Aurora Replica to offload the read workload, this would result in aggregation jobs running on the primary database which can cause the load jobs to fail during heavy loads.<br>D. <br>This option would not work as it would require to use kinesis data stream which may cause performance issues and also it may not be the best fit for this use case. Additionally, using Kinesis Data Firehose would add complexity to the data replication process, and may result in increased latency or data loss.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779256,
          "date": "Tue 17 Jan 2023 20:22",
          "username": "masetromain",
          "content": "A.  <br>This option would not work as it would require to change the primary database and also it may cause interruption for the company's customers during the cutover process.<br>B. <br>This option would not work as it would not include Aurora Replica to offload the read workload, this would result in aggregation jobs running on the primary database which can cause the load jobs to fail during heavy loads.<br>D. <br>This option would not work as it would require to use kinesis data stream which may cause performance issues and also it may not be the best fit for this use case. Additionally, using Kinesis Data Firehose would add complexity to the data replication process, and may result in increased latency or data loss.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776683,
          "date": "Sun 15 Jan 2023 15:48",
          "username": "zhangyu20000",
          "content": "C is correct. need more read replica for aggregation jobs to read data",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775238,
          "date": "Sat 14 Jan 2023 11:11",
          "username": "masetromainmasetromainandctygrjojom19980",
          "content": "The correct answer is B.  Setting up an Amazon Aurora MySQL database and using AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora will ensure that data is continuously replicated to the new environment with minimal interruption. Moving the aggregation jobs to run against the Aurora MySQL database will ensure that the data is being read from the same database that is being loaded, which will resolve the data loading issue. Setting up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group, and disabling the AWS DMS sync task after the cutover from on-premises to AWS, will ensure that the migration occurs without interruptions or changes for the company's customers.Answer A is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario, and disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.<br><br>Answer C is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario.<br><br>Answer D is incorrect because it's not necessary to use Amazon Kinesis data stream and Firehose to replicate the data when AWS DMS can be used to perform continuous data replication. Also, disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.hhhhhhhhhh.",
          "upvote_count": "1141",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775239,
          "date": "Sat 14 Jan 2023 11:11",
          "username": "masetromainandctygrjojom19980",
          "content": "Answer A is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario, and disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.<br><br>Answer C is incorrect because it's not necessary to set up an Aurora Replica for the Aurora MySQL database, doing this will introduce additional complexity and cost. Using Amazon RDS Proxy is not necessary for this scenario.<br><br>Answer D is incorrect because it's not necessary to use Amazon Kinesis data stream and Firehose to replicate the data when AWS DMS can be used to perform continuous data replication. Also, disabling the replication job and restarting the Aurora Replica as the primary instance will cause an interruption to the service.Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.hhhhhhhhhh.",
          "upvote_count": "141",
          "selected_answers": ""
        },
        {
          "id": 788137,
          "date": "Wed 25 Jan 2023 22:11",
          "username": "andctygrjojom19980",
          "content": "Dude can u pls stop copy-pasting from chatgpt I am so sick of it. It is not a reliable source. Just stop it for the god sake.hhhhhhhhhh.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 794060,
          "date": "Tue 31 Jan 2023 12:19",
          "username": "jojom19980",
          "content": "hhhhhhhhhh.",
          "upvote_count": "1",
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
      "general_feedback": "<p>Correct Answer: D</p>",
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
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to automatically encrypt objects on GetObject and PutObject requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the S3 bucket properties, change the default encryption to AES-256 with a customer managed key. Attach a policy to deny unencrypted PutObject requests to any entities that access the S3 bucket. Use the AWS CLI to re-upload all objects in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 782187,
          "date": "Fri 20 Jan 2023 12:58",
          "username": "Untamables",
          "content": "I think D is correct.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775242,
          "date": "Sat 14 Jan 2023 11:23",
          "username": "masetromainMuskmasetromain",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br><br>So the correct answer is B.  In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.What about the requirement of customer managed keys?Option A is not correct because it uses SSE-S3 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it only denies unencrypted PutObject requests but does not specify how the objects will be encrypted.<br><br>Option C is not correct because it does not specify how the security team will manage the encryption keys and it does not specify how the objects will be encrypted.<br><br>Option D is not correct because it uses AES-256 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it simply denies unencrypted PutObject requests, but it doesn't specify how the objects will be encrypted.",
          "upvote_count": "521",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 791856,
          "date": "Sun 29 Jan 2023 17:58",
          "username": "Musk",
          "content": "What about the requirement of customer managed keys?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775243,
          "date": "Sat 14 Jan 2023 11:23",
          "username": "masetromain",
          "content": "Option A is not correct because it uses SSE-S3 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it only denies unencrypted PutObject requests but does not specify how the objects will be encrypted.<br><br>Option C is not correct because it does not specify how the security team will manage the encryption keys and it does not specify how the objects will be encrypted.<br><br>Option D is not correct because it uses AES-256 with a customer-managed key, but it does not specify how the security team will manage the encryption keys. Additionally, it simply denies unencrypted PutObject requests, but it doesn't specify how the objects will be encrypted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791399,
          "date": "Sun 29 Jan 2023 05:52",
          "username": "pravi1",
          "content": "B makes sense as KMS is better way to manage keys.",
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
          "id": 783072,
          "date": "Sat 21 Jan 2023 07:54",
          "username": "masssa",
          "content": "B is correct.<br>C is not correct, because ALB is regional service, so ALB have to be added too.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775298,
          "date": "Sat 14 Jan 2023 12:42",
          "username": "masetromain",
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
          "id": 793200,
          "date": "Mon 30 Jan 2023 19:57",
          "username": "zozza2023",
          "content": "https://www.examtopics.com/discussions/amazon/view/82131-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781017,
          "date": "Thu 19 Jan 2023 11:30",
          "username": "AjayD123",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/simplify-network-routing-and-security-administration-with-vpc-prefix-lists/#:~:text=A%20Prefix%20List%20is%20a,Resource%20Access%20Manager%20(RAM).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775319,
          "date": "Sat 14 Jan 2023 12:53",
          "username": "masetromain",
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
          "id": 793211,
          "date": "Mon 30 Jan 2023 20:03",
          "username": "zozza2023",
          "content": "AWS compute optimizer+ lambda",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783095,
          "date": "Sat 21 Jan 2023 08:40",
          "username": "masssamasssa",
          "content": "I vote C. <br>AWS compute optimizer can make lambda recommendation without any development.<br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-lambda-recommendations.htmlI correct answer C to B. <br>AWS compute optimizer itself cannot make recommendation file by oneself.<br>It need simple lambda.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 783100,
          "date": "Sat 21 Jan 2023 08:48",
          "username": "masssa",
          "content": "I correct answer C to B. <br>AWS compute optimizer itself cannot make recommendation file by oneself.<br>It need simple lambda.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 781019,
          "date": "Thu 19 Jan 2023 11:36",
          "username": "AjayD123",
          "content": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLambdaFunctionRecommendations.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776695,
          "date": "Sun 15 Jan 2023 16:04",
          "username": "zhangyu20000",
          "content": "B is correct<br>https://aws.amazon.com/blogs/compute/optimizing-aws-lambda-cost-and-performance-using-aws-compute-optimizer/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775322,
          "date": "Sat 14 Jan 2023 12:56",
          "username": "masetromain",
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
          "id": 791893,
          "date": "Sun 29 Jan 2023 18:42",
          "username": "MuskMusk",
          "content": "In C, you don't need to define all the possible values of the application tagWell, maybe you do.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 791901,
          "date": "Sun 29 Jan 2023 18:47",
          "username": "Musk",
          "content": "Well, maybe you do.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776698,
          "date": "Sun 15 Jan 2023 16:08",
          "username": "zhangyu20000",
          "content": "ADF<br>C is not correct because resources already tagged, not necessary to create cost category. Root must enable IAM to access Billing",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775335,
          "date": "Sat 14 Jan 2023 13:04",
          "username": "masetromainmasetromain",
          "content": "A, C and F are the correct answers because they provide the required cost reports and analysis for the company's applications and teams.<br>A.  Activating user-defined cost allocation tags that represent the application and the team allows the company to assign costs to specific applications and teams. This allows the company to see how much each application and team is costing them, which is important for cost forecasting and budgeting.<br>C.  Creating a cost category for each application in Billing and Cost Management allows the company to group costs by application. This makes it easier to understand the costs associated with each application and to compare the costs of different applications over time.<br>F.  Enabling Cost Explorer allows the company to analyze costs and usage over time, and to create custom reports and forecasts. This is important for understanding the costs associated with each application and team, and for forecasting future costs.B is not correct because AWS generated cost allocation tags are automatically created for some AWS resources, but it does not provide the required cost reports and analysis for the company's applications and teams.<br><br>Option D is not correct because IAM access controls are used to limit access to the billing and cost management features, but it is not necessary to configure it to meet the requirements.<br><br>E is not correct because Creating a cost budget allows the company to set a budget for their costs and to receive alerts when costs exceed the budget, but it does not provide the required cost reports and analysis for the company's applications and teams.",
          "upvote_count": "33",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 775336,
          "date": "Sat 14 Jan 2023 13:04",
          "username": "masetromain",
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
          "id": 793226,
          "date": "Mon 30 Jan 2023 20:17",
          "username": "zozza2023",
          "content": "The correct solution is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775339,
          "date": "Sat 14 Jan 2023 13:07",
          "username": "masetromain",
          "content": "The correct solution is B.  Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.  This will ensure that the web application can continue to call the third-party API after the migration by using the customer-owned public IP addresses that were assigned to the NAT gateways. This ensures that the third-party API will only see traffic coming from the customer-owned IP addresses that are on the allow list. Option A,C and D doesn't make sense in this context.",
          "upvote_count": "4",
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
          "username": "Atila50",
          "content": "SCP doesn't grant permission",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790947,
          "date": "Sat 28 Jan 2023 19:43",
          "username": "irene7",
          "content": "C - smae question from topic 1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776708,
          "date": "Sun 15 Jan 2023 16:12",
          "username": "zhangyu20000",
          "content": "C is correct<br>SCP policy allow everything except cloudtrail. SCP is boundary but it does not give allow to IAM users. You have to configure allow for every IAM",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775352,
          "date": "Sat 14 Jan 2023 13:18",
          "username": "masetromainmasetromainmasetromain",
          "content": "A.  Add s3:CreateBucket with “Allow” effect to the SCP.<br><br>This is the correct answer because the SCP is denying all actions for cloudtrail, including all actions for creating new S3 buckets. By adding the s3:CreateBucket action with an \\\"Allow\\\" effect, the developers will be able to create new S3 buckets.<br>B.  Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.<br><br>This option would not solve the problem because it would still be denied the ability to create new S3 buckets.C.  Instruct the developers to add Amazon S3 permissions to their IAM entities.<br><br>This option would not solve the problem because the problem is that the SCP is denying all actions for cloudtrail, not that the developers are lacking permissions in their IAM entities.<br>D.  Remove the SCP from account 1111-1111-1111.<br><br>This option would solve the problem, but it would not be ideal because it would remove all restrictions on the account, including restrictions on cloudtrail actions which may be necessary for security and compliance reasons.This policy allows all actions (indicated by the \\\"Action\\\": \\\"\\\" line) on all resources (indicated by the \\\"Resource\\\": \\\"\\\" line) in the AWS account, except for CloudTrail actions (indicated by the \\\"Action\\\": \\\"cloudtrail:*\\\" line). The \\\"Effect\\\": \\\"Deny\\\" line specifies that any CloudTrail actions will be denied. This means that the user or role that this policy is associated with will not be able to perform any CloudTrail actions, such as starting or stopping a trail or getting trail status. This can be useful if the user or role should not have access to CloudTrail functionality.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775353,
          "date": "Sat 14 Jan 2023 13:18",
          "username": "masetromainmasetromain",
          "content": "C.  Instruct the developers to add Amazon S3 permissions to their IAM entities.<br><br>This option would not solve the problem because the problem is that the SCP is denying all actions for cloudtrail, not that the developers are lacking permissions in their IAM entities.<br>D.  Remove the SCP from account 1111-1111-1111.<br><br>This option would solve the problem, but it would not be ideal because it would remove all restrictions on the account, including restrictions on cloudtrail actions which may be necessary for security and compliance reasons.This policy allows all actions (indicated by the \\\"Action\\\": \\\"\\\" line) on all resources (indicated by the \\\"Resource\\\": \\\"\\\" line) in the AWS account, except for CloudTrail actions (indicated by the \\\"Action\\\": \\\"cloudtrail:*\\\" line). The \\\"Effect\\\": \\\"Deny\\\" line specifies that any CloudTrail actions will be denied. This means that the user or role that this policy is associated with will not be able to perform any CloudTrail actions, such as starting or stopping a trail or getting trail status. This can be useful if the user or role should not have access to CloudTrail functionality.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 775356,
          "date": "Sat 14 Jan 2023 13:20",
          "username": "masetromain",
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
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.<br></p>",
              "correct": true,
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
          "username": "masetromainmmendozafAtila50",
          "content": "The correct answer is C.  Taking a snapshot of the EBS volume using Amazon Data Lifecycle Manager (DLM) will meet the requirements because it allows you to create a backup of the volume without the need to access the instance or its SSH key pair. Additionally, DLM allows you to schedule the backups to occur at specific intervals and also enables you to copy the snapshots to an S3 bucket. This approach will not impact the running application as the backup is performed on the EBS volume level.<br><br>Option A is not correct because the instance would need an IAM role with permission to write to S3 and access to the instance via Systems Manager Session Manager.<br><br>Option B is not correct because it would require stopping the instance, which would impact the running application.<br><br>Option D is not correct because it would require stopping the instance and creating a new EC2 instance, which would impact the running application.Assuming that EBS is encrypted, I think that is much easier to run the copy command from AW system managerthank you for correcting some of these answers and for the explanations to them",
          "upvote_count": "521",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786704,
          "date": "Tue 24 Jan 2023 17:45",
          "username": "mmendozaf",
          "content": "Assuming that EBS is encrypted, I think that is much easier to run the copy command from AW system manager",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775977,
          "date": "Sat 14 Jan 2023 23:32",
          "username": "Atila50",
          "content": "thank you for correcting some of these answers and for the explanations to them",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795816,
          "date": "Thu 02 Feb 2023 07:22",
          "username": "tatdatpham",
          "content": "The answer is A<br>Option C (Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.) does not meet the requirement of not having the administrative SSH key pair for the instance, which is needed for accessing the data on the EBS volume. The application team does not have access to the instance and cannot take a snapshot or copy the data to Amazon S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793238,
          "date": "Mon 30 Jan 2023 20:34",
          "username": "zozza2023",
          "content": "\\\"critical application\\\" and DLM is designed to protect EC2 EBSany disruption",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791918,
          "date": "Sun 29 Jan 2023 19:15",
          "username": "Musk",
          "content": "I don't think C is correct because to copy the data to S3 you would need to create a volume from the snapshot and mount it in an EC2 instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790982,
          "date": "Sat 28 Jan 2023 20:06",
          "username": "irene7",
          "content": "C, you can't directly copy from ebs to s3. You need to take a snapshot to copy to s3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785698,
          "date": "Mon 23 Jan 2023 19:16",
          "username": "bititan",
          "content": "taking a backup of the data to s3. aws doesn't allow up to view snapshots in s3",
          "upvote_count": "4",
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
          "username": "icasspmasetromain",
          "content": "\\\"The above command should be executed with destination AWS IAM user account credentials only otherwise the copied objects in destination S3 bucket will still have the source account permissions and won't be accessible by destination account users.\\\" According to https://medium.com/tensult/copy-s3-bucket-objects-across-aws-accounts-e46c15c4b9e1.You are correct, step E should be executed using the IAM user credentials from the destination account. This is because when objects are copied from one bucket to another, the object's permissions (ACLs) are also copied. Therefore, if the objects are copied using the IAM user credentials from the source account, the objects will have the same permissions as they did in the source bucket, which may not include permissions for the user in the destination account. By using the IAM user credentials from the destination account, the objects will have the appropriate permissions for the user in the destination account once they are copied.",
          "upvote_count": "52",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 780163,
          "date": "Wed 18 Jan 2023 16:45",
          "username": "masetromain",
          "content": "You are correct, step E should be executed using the IAM user credentials from the destination account. This is because when objects are copied from one bucket to another, the object's permissions (ACLs) are also copied. Therefore, if the objects are copied using the IAM user credentials from the source account, the objects will have the same permissions as they did in the source bucket, which may not include permissions for the user in the destination account. By using the IAM user credentials from the destination account, the objects will have the appropriate permissions for the user in the destination account once they are copied.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 793246,
          "date": "Mon 30 Jan 2023 20:42",
          "username": "zozza2023",
          "content": "BDF are the answers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 780164,
          "date": "Wed 18 Jan 2023 16:47",
          "username": "masetromain",
          "content": "I switch to BDF;<br>Step B is necessary so that the user in the destination account has the necessary permissions to access the source bucket and list its contents, read its objects. <br><br>Step D is needed so that the user in the destination account has the necessary permissions to access the destination bucket and list contents, put objects, and set object ACLs<br><br>Step F is necessary because the aws s3 sync command needs to be run using the IAM user credentials from the destination account, so that the objects will have the appropriate permissions for the user in the destination account once they are copied.<br><br>The other choices are not correct because :A.  and C.  are about creating policies in the source account but the user who wants to access the data is in the destination accountE.  is about running the command with the source account, which is not suitable because it will lead to copied objects in destination S3 bucket still have the source account permissions and won't be accessible by destination account users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 776816,
          "date": "Sun 15 Jan 2023 17:38",
          "username": "zhangyu20000",
          "content": "BCE<br>Source user must have role that can write to destination bucket",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775424,
          "date": "Sat 14 Jan 2023 13:54",
          "username": "masetromainpengpengpengpengNicocaciklochesistemas",
          "content": "The question is asking for a combination of steps that will successfully copy the data using the AWS CLI.<br><br>The correct answer would be B, D and E. <br><br>Step B: You must create a bucket policy in the source account that allows the user in the destination account to list and read the source bucket's contents.<br>Step D: You must create an IAM policy in the destination account that allows the user to list, put and set object ACLs in the destination bucket<br>Step E: Run the aws s3 sync command as a user in the source account. Specify the source and destination buckets to copy the data.<br>By doing so, the solution architect will be able to copy the data from the source to the destination bucket.I think it is ADF especially option F as option D is using user in destination account.sorry, typo, BDFI think that the answer is BDF.  If you select steps B and D, you must use a user in the destination account (option F)If you are specifying Step D where you create an IAM policy in the destination account that allow a user in the destination account to access the source bucket, why are you choosing Step E instead of Step F where it specifies a user on the destination account rather in the source?",
          "upvote_count": "11123",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 780075,
          "date": "Wed 18 Jan 2023 15:17",
          "username": "pengpengpengpeng",
          "content": "I think it is ADF especially option F as option D is using user in destination account.sorry, typo, BDF",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 781895,
          "date": "Fri 20 Jan 2023 06:01",
          "username": "pengpeng",
          "content": "sorry, typo, BDF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779362,
          "date": "Tue 17 Jan 2023 23:04",
          "username": "Nicocacik",
          "content": "I think that the answer is BDF.  If you select steps B and D, you must use a user in the destination account (option F)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777407,
          "date": "Mon 16 Jan 2023 08:15",
          "username": "lochesistemas",
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
          "username": "Atila50",
          "content": "https://www.examtopics.com/discussions/amazon/view/28312-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780169,
          "date": "Wed 18 Jan 2023 16:52",
          "username": "masetromainmasetromain",
          "content": "A.  Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load is the correct answer as it meets the requirement of supporting a canary release.<br><br>Option B is not correct because while it would allow for a canary release, it would involve deploying the new version of the application into a separate CloudFormation stack, which would be a more complex and time-consuming process compared to creating an alias for a new version of the Lambda function.<br><br>Option C is not correct because while it would allow for a canary release, it would involve creating a version for every new deployed Lambda function, which would be more complex and time-consuming process compared to creating an alias for a new version of the Lambda function.Option D is not correct because AWS CodeDeploy is a deployment service that allows you to automate code deployments to a variety of compute services like EC2 and on-premises servers, but it does not support routing configuration for a canary release on AWS Lambda.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780171,
          "date": "Wed 18 Jan 2023 16:53",
          "username": "masetromain",
          "content": "Option D is not correct because AWS CodeDeploy is a deployment service that allows you to automate code deployments to a variety of compute services like EC2 and on-premises servers, but it does not support routing configuration for a canary release on AWS Lambda.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776824,
          "date": "Sun 15 Jan 2023 17:44",
          "username": "zhangyu20000",
          "content": "A is correct.<br>D does not have routing to distribute load",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775459,
          "date": "Sat 14 Jan 2023 14:54",
          "username": "masetromain",
          "content": "AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and on-premises instances. CodeDeploy allows to perform a canary release, which is a technique that releases new versions of software to a small subset of users or systems before releasing it to the entire infrastructure. This makes it possible to test the new version of the software before releasing it to the entire population.<br><br>Option A creates an alias for every new deployed version of the Lambda function, but it doesn't include the ability to perform a canary release.<br>Option B Deploy the application into a new CloudFormation stack, and use an Amazon Route 53 weighted routing policy to distribute the load, this option can be used for canary release, but it is not the best solution for it.<br>Option C creates a version for every new deployed Lambda function, but it does not include the ability to perform a canary release.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
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
          "id": 775468,
          "date": "Sat 14 Jan 2023 14:59",
          "username": "masetromainmasetromain",
          "content": "Option B is the correct answer. Migrating the SFTP server to AWS Transfer for SFTP will improve the reliability and scalability of the SFTP solution. AWS Transfer for SFTP is a fully managed SFTP service that enables the company to transfer files directly into and out of Amazon S3 using the SFTP protocol. By using this service, the company can offload the management of the SFTP server to AWS, which will provide high availability, scalability, and security. The company can then update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname, which will ensure that the SFTP server is reachable on the DNS.Option A, C and D do not provide the same level of scalability and reliability as AWS Transfer for SFTP. While placing the EC2 instance behind a load balancer can help improve availability, it will not necessarily improve scalability, and it would still require the company to manage the SFTP server. Option C , migrating the SFTP server to a file gateway in AWS Storage Gateway, would not necessarily improve the scalability and reliability of the SFTP solution, as it would still require the company to manage the SFTP server.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775469,
          "date": "Sat 14 Jan 2023 14:59",
          "username": "masetromain",
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
          "id": 793948,
          "date": "Tue 31 Jan 2023 11:11",
          "username": "Signup_Nickname",
          "content": "I vote B<br>https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775472,
          "date": "Sat 14 Jan 2023 15:02",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for VM Import. Use the AWS CLI to run the EC2 import command. This approach allows the solutions architect to export the application as an image in OVF format, which preserves the software and configuration settings, and then import it into Amazon EC2 using the EC2 import command.Option A is incorrect because it uses AWS DataSync and FSx for Windows File Server to replicate the data store, but it doesn't preserve the software and configuration settings of the application.<br><br>Option C is incorrect because it uses AWS Storage Gateway to export a CIFS share, but it doesn't preserve the software and configuration settings of the application.<br><br>Option D is incorrect because it uses AWS Systems Manager and AWS Backup to create a snapshot of the VM, but it doesn't preserve the software and configuration settings of the application.",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775473,
          "date": "Sat 14 Jan 2023 15:02",
          "username": "masetromain",
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
          "username": "zhangyu20000masetromain",
          "content": "A: create Docker image and save it to ECR<br>B: run this image on Fargate<br><br>No answer should have Lambda the will be time outYou are correct, both options A and B involve creating a Docker image of the application code and running it on Amazon Elastic Container Service (ECS) using either Fargate or EC2 as the launch type. These options would allow for more control over the resources allocated to the application and potentially prevent timeout errors. Option A is necessary to create the image and store it in a registry, and option B is necessary to run the image on Fargate which is a managed container orchestration service that eliminates the need for provisioning and scaling of the underlying infrastructure.",
          "upvote_count": "71",
          "selected_answers": ""
        },
        {
          "id": 778216,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "masetromain",
          "content": "You are correct, both options A and B involve creating a Docker image of the application code and running it on Amazon Elastic Container Service (ECS) using either Fargate or EC2 as the launch type. These options would allow for more control over the resources allocated to the application and potentially prevent timeout errors. Option A is necessary to create the image and store it in a registry, and option B is necessary to run the image on Fargate which is a managed container orchestration service that eliminates the need for provisioning and scaling of the underlying infrastructure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778217,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A and B. <br>A.  Modify the application deployment by building a Docker image that contains the application code. Publish the image to Amazon Elastic Container Registry (Amazon ECR).<br><br>- This step is necessary to package the application code in a container and make it available for running on ECS.<br>B.  Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of AWS Fargate. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.<br><br>- This step is necessary to run the containerized application on Fargate, which is a fully managed container orchestration service that eliminates the need to provision and scale the underlying infrastructure.Option C and E are not correct because they don't address the problem of timeout errors. AWS Step Functions and Amazon Elastic File System (EFS) are services that can be used to coordinate and manage workflows and file storage respectively, but they don't help with the specific problem of the Lambda function timing out.<br><br>Option D is not correct because AWS Fargate is a serverless compute engine for containers that eliminates the need for provisioning and scaling the underlying infrastructure.<br>It means that the company does not have to manage the underlying infrastructure, which is what the company wants.",
          "upvote_count": "52",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 778218,
          "date": "Mon 16 Jan 2023 21:30",
          "username": "masetromain",
          "content": "Option C and E are not correct because they don't address the problem of timeout errors. AWS Step Functions and Amazon Elastic File System (EFS) are services that can be used to coordinate and manage workflows and file storage respectively, but they don't help with the specific problem of the Lambda function timing out.<br><br>Option D is not correct because AWS Fargate is a serverless compute engine for containers that eliminates the need for provisioning and scaling the underlying infrastructure.<br>It means that the company does not have to manage the underlying infrastructure, which is what the company wants.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 793269,
          "date": "Mon 30 Jan 2023 20:59",
          "username": "zozza2023",
          "content": "lamda will time out<br>A: create Docker image and save it to ECR<br>B: run this image on Fargate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 792049,
          "date": "Sun 29 Jan 2023 21:42",
          "username": "Musk",
          "content": "AB makes most sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 775484,
          "date": "Sat 14 Jan 2023 15:11",
          "username": "masetromainmasetromain",
          "content": "B and C are correct choices for this question.<br><br>B: Creating a new Amazon Elastic Container Service (ECS) task definition with a compatibility type of AWS Fargate and adjusting the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3 can help to prevent invocation failures by breaking up the image processing work into smaller tasks that can be processed concurrently.<br><br>C: Creating an AWS Step Functions state machine with a Parallel state to invoke the Lambda function and increasing the provisioned concurrency of the Lambda function can also help to prevent invocation failures by allowing the Lambda function to handle more requests in parallel.Option A is not a correct answer because it does not address the issue of the Lambda function timing out.<br><br>Option D is not a correct answer because it is similar to option B, but it uses Amazon EC2 instead of AWS Fargate which is a more modern and serverless way to run containerized applications.<br><br>Option E is not a correct answer because it does not address the issue of the Lambda function timing out.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 775485,
          "date": "Sat 14 Jan 2023 15:11",
          "username": "masetromain",
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
          "id": 787745,
          "date": "Wed 25 Jan 2023 15:38",
          "username": "pitakkMusk",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-controls.html#disallow-rds-storage-unencryptedThe only thing is that this option talks about guardrails, while the article talks about controls, not mandatory.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792053,
          "date": "Sun 29 Jan 2023 21:51",
          "username": "Musk",
          "content": "The only thing is that this option talks about guardrails, while the article talks about controls, not mandatory.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775495,
          "date": "Sat 14 Jan 2023 15:19",
          "username": "masetromain",
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
          "id": 775506,
          "date": "Sat 14 Jan 2023 15:24",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is D.  This strategy uses IAM roles and AWS Systems Manager to provide secure and auditable SSH access to the instances. The IAM role is attached to all the EC2 instances and has the AmazonSSMManagedInstanceCore managed policy attached, which allows the instances to be managed by Systems Manager. The engineers then install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager. This approach provides secure and auditable access to the instances without the need for IP-based security group rules or additional infrastructure.Option A uses EC2 Instance Connect to provide secure and auditable SSH access to the instances, but it requires additional infrastructure and configuration. <br><br>Option B provides auditing of commands run by the engineers, but it relies on IP-based security group rules, which can be difficult to manage and may not be as secure as using IAM roles. <br><br>Option C uses AWS Config and Firewall Manager to automatically remediate changes to security group rules, but it still relies on IP-based security group rules and does not provide an auditable method of access to the instances.For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775507,
          "date": "Sat 14 Jan 2023 15:24",
          "username": "masetromainmasetromain",
          "content": "Option A uses EC2 Instance Connect to provide secure and auditable SSH access to the instances, but it requires additional infrastructure and configuration. <br><br>Option B provides auditing of commands run by the engineers, but it relies on IP-based security group rules, which can be difficult to manage and may not be as secure as using IAM roles. <br><br>Option C uses AWS Config and Firewall Manager to automatically remediate changes to security group rules, but it still relies on IP-based security group rules and does not provide an auditable method of access to the instances.For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 775508,
          "date": "Sat 14 Jan 2023 15:25",
          "username": "masetromain",
          "content": "For option A to work, the following additional infrastructure and configuration would be required:<br><br>The EC2 Instance Connect service needs to be enabled in the AWS account and the appropriate IAM permissions would need to be granted to the engineers.<br><br>The EC2 instances would need to have the EC2 Instance Connect agent installed and configured.<br><br>The engineers would need to install the EC2 Instance Connect CLI on their devices and have the necessary credentials to authenticate with AWS.<br><br>In addition, the company would need to update their processes and procedures to ensure that engineers are only using EC2 Instance Connect to access the instances and that all access is being logged and audited.",
          "upvote_count": "1",
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
      "general_feedback": "<p>Correct Answer: BDF</p>",
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
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy to deny access to costly services and components. Apply the IAM policy to the developer accounts.<br></p>",
              "correct": true,
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
          "id": 795498,
          "date": "Wed 01 Feb 2023 21:24",
          "username": "jojom19980",
          "content": "BCF is the correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 793275,
          "date": "Mon 30 Jan 2023 21:06",
          "username": "zozza2023",
          "content": "BDF seems ok",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 787088,
          "date": "Wed 25 Jan 2023 00:42",
          "username": "harleydog",
          "content": "You don't attach a policy to an account, you attach a policy to a user, group, or role.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786860,
          "date": "Tue 24 Jan 2023 20:36",
          "username": "bititan",
          "content": "option D is wrong because you cannot apply IAM policy to an account. So I choose option C because SCP will block them from using services",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 776839,
          "date": "Sun 15 Jan 2023 18:03",
          "username": "zhangyu20000Nicocacikmasetromainharleydogignorica",
          "content": "BDF<br>B: set budget limit, F to check and use lambda to terminate, D: deny costly services<br>There is no organizations used here. All policy must be directly applied to accountsI have doubts between C and D because at the beginning it says that the company uses AWS Organizations so I think that D is correctWhile creating an SCP (Service Control Policy) to deny access to costly services and components can help prevent developers from accidentally launching or using these services, it may not be the most effective approach to controlling costs.<br><br>An SCP can only be applied to the root level of an organization, which means that it will apply to all accounts and OUs within that organization. This means that it would not be possible to apply different policies for different accounts or OUs, which would make it more difficult to manage costs for each developer's account specifically.<br><br>Additionally, an SCP only denies access to services and does not prevent developers from accidentally running services unnecessarily, which is one of the requirements for the company. While an SCP is a powerful tool for controlling access to AWS services, it may not be the best option for managing costs specifically.<br><br>Using AWS Budgets, in conjunction with an IAM policy to deny access to costly services and components, would be a more effective approach in this scenario.You can attach an SCP to the root, to an OU, or to an account. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.htmlI second this. C should be correct, not D. <br>We are talking about \\\"accounts\\\" and you do not apply IAM to accounts but to users, group, roles.<br>SCP can be used to deny access from services as well as operations for starting a certain service.<br>https://stackoverflow.com/questions/63573198/how-to-restrict-the-instance-types-allowed-to-launch-in-an-aws-account<br>(for example how to restrict the RunInstances)<br>D is for sure not OK.",
          "upvote_count": "12132",
          "selected_answers": ""
        },
        {
          "id": 779377,
          "date": "Tue 17 Jan 2023 23:37",
          "username": "Nicocacikmasetromainharleydogignorica",
          "content": "I have doubts between C and D because at the beginning it says that the company uses AWS Organizations so I think that D is correctWhile creating an SCP (Service Control Policy) to deny access to costly services and components can help prevent developers from accidentally launching or using these services, it may not be the most effective approach to controlling costs.<br><br>An SCP can only be applied to the root level of an organization, which means that it will apply to all accounts and OUs within that organization. This means that it would not be possible to apply different policies for different accounts or OUs, which would make it more difficult to manage costs for each developer's account specifically.<br><br>Additionally, an SCP only denies access to services and does not prevent developers from accidentally running services unnecessarily, which is one of the requirements for the company. While an SCP is a powerful tool for controlling access to AWS services, it may not be the best option for managing costs specifically.<br><br>Using AWS Budgets, in conjunction with an IAM policy to deny access to costly services and components, would be a more effective approach in this scenario.You can attach an SCP to the root, to an OU, or to an account. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.htmlI second this. C should be correct, not D. <br>We are talking about \\\"accounts\\\" and you do not apply IAM to accounts but to users, group, roles.<br>SCP can be used to deny access from services as well as operations for starting a certain service.<br>https://stackoverflow.com/questions/63573198/how-to-restrict-the-instance-types-allowed-to-launch-in-an-aws-account<br>(for example how to restrict the RunInstances)<br>D is for sure not OK.",
          "upvote_count": "2132",
          "selected_answers": ""
        },
        {
          "id": 780189,
          "date": "Wed 18 Jan 2023 17:07",
          "username": "masetromainharleydogignorica",
          "content": "While creating an SCP (Service Control Policy) to deny access to costly services and components can help prevent developers from accidentally launching or using these services, it may not be the most effective approach to controlling costs.<br><br>An SCP can only be applied to the root level of an organization, which means that it will apply to all accounts and OUs within that organization. This means that it would not be possible to apply different policies for different accounts or OUs, which would make it more difficult to manage costs for each developer's account specifically.<br><br>Additionally, an SCP only denies access to services and does not prevent developers from accidentally running services unnecessarily, which is one of the requirements for the company. While an SCP is a powerful tool for controlling access to AWS services, it may not be the best option for managing costs specifically.<br><br>Using AWS Budgets, in conjunction with an IAM policy to deny access to costly services and components, would be a more effective approach in this scenario.You can attach an SCP to the root, to an OU, or to an account. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.htmlI second this. C should be correct, not D. <br>We are talking about \\\"accounts\\\" and you do not apply IAM to accounts but to users, group, roles.<br>SCP can be used to deny access from services as well as operations for starting a certain service.<br>https://stackoverflow.com/questions/63573198/how-to-restrict-the-instance-types-allowed-to-launch-in-an-aws-account<br>(for example how to restrict the RunInstances)<br>D is for sure not OK.",
          "upvote_count": "132",
          "selected_answers": ""
        },
        {
          "id": 787086,
          "date": "Wed 25 Jan 2023 00:38",
          "username": "harleydogignorica",
          "content": "You can attach an SCP to the root, to an OU, or to an account. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.htmlI second this. C should be correct, not D. <br>We are talking about \\\"accounts\\\" and you do not apply IAM to accounts but to users, group, roles.<br>SCP can be used to deny access from services as well as operations for starting a certain service.<br>https://stackoverflow.com/questions/63573198/how-to-restrict-the-instance-types-allowed-to-launch-in-an-aws-account<br>(for example how to restrict the RunInstances)<br>D is for sure not OK.",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 791644,
          "date": "Sun 29 Jan 2023 13:57",
          "username": "ignorica",
          "content": "I second this. C should be correct, not D. <br>We are talking about \\\"accounts\\\" and you do not apply IAM to accounts but to users, group, roles.<br>SCP can be used to deny access from services as well as operations for starting a certain service.<br>https://stackoverflow.com/questions/63573198/how-to-restrict-the-instance-types-allowed-to-launch-in-an-aws-account<br>(for example how to restrict the RunInstances)<br>D is for sure not OK.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775616,
          "date": "Sat 14 Jan 2023 16:35",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B, D and F. <br><br>B: Use AWS Budgets to create a fixed monthly budget for each developer's account as part of the account creation process. This will ensure that each developer has a set budget limit and will not be able to incur additional costs beyond that limit.<br><br>D: Create an IAM policy to deny access to costly services and components. Apply the IAM policy to the developer accounts. This will prevent developers from launching or using services that are deemed too costly for the company.<br><br>F: Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services. This will ensure that when the budget limit is reached, all services will be terminated to prevent additional costs.A is not the best solution because it's only set the fixed monthly account usage limit but it will not prevent developers from using costly services and components.<br><br>C is not the best solution because it does not set a fixed monthly budget for each developer's account and does not provide a way to alert or terminate services when the budgeted amount is reached.<br><br>E is not the best solution because it does not provide a way to alert or notify the company when the budgeted amount is reached and does not provide a way to automatically terminate services when the budgeted amount is reached.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 775617,
          "date": "Sat 14 Jan 2023 16:36",
          "username": "masetromain",
          "content": "A is not the best solution because it's only set the fixed monthly account usage limit but it will not prevent developers from using costly services and components.<br><br>C is not the best solution because it does not set a fixed monthly budget for each developer's account and does not provide a way to alert or terminate services when the budgeted amount is reached.<br><br>E is not the best solution because it does not provide a way to alert or notify the company when the budgeted amount is reached and does not provide a way to automatically terminate services when the budgeted amount is reached.",
          "upvote_count": "1",
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
          "id": 793281,
          "date": "Mon 30 Jan 2023 21:12",
          "username": "zozza2023",
          "content": "B is correct. Move Lambda and Aurora both to target account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792074,
          "date": "Sun 29 Jan 2023 22:19",
          "username": "Musk",
          "content": "B can be done with this: https://aws.amazon.com/about-aws/whats-new/2019/07/amazon_aurora_supportscloningacrossawsaccounts-/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 782866,
          "date": "Sat 21 Jan 2023 01:02",
          "username": "SK_Cert_master",
          "content": "B. <br>It seems that Lambda cannot be shared via RAM<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776955,
          "date": "Sun 15 Jan 2023 19:59",
          "username": "zhangyu20000",
          "content": "B is correct. Move Lambda and Aurora both to target account<br>A: not move Aurora <br>C: Lambda not move<br>d: Lambda and Aurora both not moved",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775641,
          "date": "Sat 14 Jan 2023 16:48",
          "username": "masetromainmasetromain",
          "content": "The correct answer is option B.  This solution uses a combination of AWS Resource Access Manager (RAM) and automated backups to migrate the Lambda functions and the Aurora database to the Target account while minimizing downtime.<br><br>In this solution, the Lambda function deployment package is downloaded from the Source account and used to create new Lambda functions in the Target account. The Aurora DB cluster is shared with the Target account using AWS RAM and the Target account is granted permission to clone the Aurora DB cluster, allowing for a new copy of the Aurora database to be created in the Target account. This approach allows for the data to be migrated to the Target account while minimizing downtime, as the Target account can use the cloned Aurora database while the original Aurora database continues to be used in the Source account.Option A is not the best solution because it doesn't share the Aurora DB cluster with the Target account and this would cause data inconsistencies as the Source and Target accounts would not share the same data.<br><br>Option C is not the best solution because, it does not specify how the data will be migrated and it would cause downtime as the Source and Target accounts are not sharing the same data.<br><br>Option D is not the best solution because it does not specify how the Lambda function will be migrated and it would cause data inconsistencies as the Source and Target accounts are not sharing the same data.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775643,
          "date": "Sat 14 Jan 2023 16:48",
          "username": "masetromain",
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
          "id": 793296,
          "date": "Mon 30 Jan 2023 21:29",
          "username": "zozza2023",
          "content": "the script takes approximately 5 minutes==>Lamda is the simpliest soltion (compared to D)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776962,
          "date": "Sun 15 Jan 2023 20:06",
          "username": "zhangyu20000",
          "content": "A is correct, it provide HA, scale, less management. Task only need 5 minutes<br>B: enen more complex<br>C: container still run on one EC2, not scale<br>d: need container, Farget and Lambda. Complex than A",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 775652,
          "date": "Sat 14 Jan 2023 16:55",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A, migrating the data processing script to an AWS Lambda function and using an S3 event notification to invoke the Lambda function to process the objects when the company uploads the objects. This solution meets the company's requirements of high availability and scalability, as well as reducing long-term management overhead, and is likely to be the most cost-effective option.<br><br>Option B involves creating an SQS queue and configuring S3 to send event notifications to it. The data processing script would then poll the SQS queue and process the S3 objects that the SQS message identifies. While this option also provides high availability and scalability, it is less cost-effective than using Lambda, as it requires additional resources such as an SQS queue and an EC2 Auto Scaling group.Option C, migrating the data processing script to a container image and running it on an EC2 instance, would still require the company to manage the underlying EC2 instances and may not be as cost-effective as using Lambda.<br><br>Option D, migrating the data processing script to a container image that runs on Amazon ECS on AWS Fargate, would still require the company to manage the underlying infrastructure and may not be as cost-effective as using Lambda. Additionally, it introduces additional complexity by adding a Lambda function that calls the Fargate RunTask API operation.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775653,
          "date": "Sat 14 Jan 2023 16:55",
          "username": "masetromain",
          "content": "Option C, migrating the data processing script to a container image and running it on an EC2 instance, would still require the company to manage the underlying EC2 instances and may not be as cost-effective as using Lambda.<br><br>Option D, migrating the data processing script to a container image that runs on Amazon ECS on AWS Fargate, would still require the company to manage the underlying infrastructure and may not be as cost-effective as using Lambda. Additionally, it introduces additional complexity by adding a Lambda function that calls the Fargate RunTask API operation.",
          "upvote_count": "1",
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
          "id": 793300,
          "date": "Mon 30 Jan 2023 21:33",
          "username": "zozza2023",
          "content": "active-passive failover==>a failover routing policy within route 53",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776964,
          "date": "Sun 15 Jan 2023 20:07",
          "username": "zhangyu20000",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775667,
          "date": "Sat 14 Jan 2023 17:02",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is C.  Choice C meets the requirements for the application to be highly available and to dynamically scale to meet user traffic, as well as implementing a disaster recovery environment in the us-west-1 Region through active-passive failover.<br><br>In choice C, the company creates a VPC in us-east-1 and a VPC in us-west-1, and sets up an Application Load Balancer (ALB) and Auto Scaling group in both VPCs. The ALB extends across multiple Availability Zones in each VPC, and the Auto Scaling group deploys the EC2 instances across these Availability Zones. The Auto Scaling group is placed behind the ALB, which allows for automatic scaling of the instances to meet user traffic.<br><br>An Amazon Route 53 hosted zone is also created, with separate records for each ALB.  Health checks are enabled for each record, and a failover routing policy is configured. This allows for active-passive failover between the two regions, ensuring high availability for the application.Choice A, B, and D do not fully meet the requirements of the disaster recovery environment in the us-west-1 Region and the failover routing policy because they do not include the necessary configurations for active-passive failover.<br><br>In choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice B, the VPCs in us-east-1 and us-west-1 are separate, and the configuration is replicated in both regions but there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.",
          "upvote_count": "411",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775668,
          "date": "Sat 14 Jan 2023 17:02",
          "username": "masetromainmasetromain",
          "content": "Choice A, B, and D do not fully meet the requirements of the disaster recovery environment in the us-west-1 Region and the failover routing policy because they do not include the necessary configurations for active-passive failover.<br><br>In choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice B, the VPCs in us-east-1 and us-west-1 are separate, and the configuration is replicated in both regions but there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 775671,
          "date": "Sat 14 Jan 2023 17:03",
          "username": "masetromain",
          "content": "Choice D is similar to choice A, the VPCs in us-east-1 and us-west-1 are peered and the Auto Scaling group and Application Load Balancer (ALB) are extended across multiple availability zones in both regions. However, there is no explicit failover routing policy configured, so it is not clear how the application would failover to the us-west-1 region in the event of an outage.<br><br>Choice C is the correct answer as it includes all the necessary components for a disaster recovery environment in the us-west-1 region. It creates separate VPCs, Application Load Balancer, and Auto Scaling Group in both regions, and it enables health checks and configure a failover routing policy for each record. This ensures that in the event of an outage, the application can automatically failover to the us-west-1 region with minimal downtime.",
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
          "id": 795518,
          "date": "Wed 01 Feb 2023 21:50",
          "username": "jojom19980",
          "content": "AWS SSO is configured to use AD Connector as an identity source<br>https://controltower.aws-management.tools/aa/sso/ad_connector/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790732,
          "date": "Sat 28 Jan 2023 16:35",
          "username": "UntamablesKazr",
          "content": "A<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html<br>Option B is wrong. AD Connector is a directory gateway that can redirect directory requests to your self-managed AD.  Hence you cannot create permission sets and map them with the AD. <br>Option C and D are wrong. There is no need to enable all features in AWS Organizations.<br>https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-sso.htmlhttps://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br><br>AWS IAM Identity Center (successor to AWS Single Sign-On) \\\"requires a two-way trust\\\" so that it has permissions to read user and group information from your domain to synchronize user and group metadata. IAM Identity Center uses this metadata when assigning access to \\\"permission sets\\\" or applications.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791109,
          "date": "Sat 28 Jan 2023 22:26",
          "username": "Kazr",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br><br>AWS IAM Identity Center (successor to AWS Single Sign-On) \\\"requires a two-way trust\\\" so that it has permissions to read user and group information from your domain to synchronize user and group metadata. IAM Identity Center uses this metadata when assigning access to \\\"permission sets\\\" or applications.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778224,
          "date": "Mon 16 Jan 2023 21:35",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/69172-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>You are correct, I apologize for the oversight. To meet the requirements of the IT support workers, option D would be the correct solution:<br><br>This option will first enable all features in AWS Organizations, then create and configure an AD Connector to connect to the company's on-premises Active Directory. Then, it will configure IAM Identity Center (AWS SSO) and set the AD Connector as the identity source, allowing the IT support workers to access the console using their existing Active Directory credentials. Finally, it will create permission sets and map them to the existing groups within the company's Active Directory. This solution will also be cost-effective as it does not involve creating a new directory in AWS Directory Service.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776968,
          "date": "Sun 15 Jan 2023 20:09",
          "username": "zhangyu20000",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775684,
          "date": "Sat 14 Jan 2023 17:12",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B. <br><br>In this solution, the company creates an organization in AWS Organizations, turns on the IAM Identity Center feature in Organizations, creates and configures an AD Connector to connect to the company's on-premises Active Directory, configures IAM Identity Center and selects the AD Connector as the identity source, and creates permission sets and maps them to the existing groups within the company's Active Directory.<br><br>This solution meets the requirements of the company's IT support workers, as it allows them to use their existing Active Directory credentials to access the AWS Management Console. Additionally, the solution is most cost-effective as it only uses the necessary features of AWS Organizations and IAM Identity Center to achieve the desired functionality without unnecessary costs.Choice A is not the best solution because it creates and configures a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory, which may lead to additional costs and complexity.<br>Choice C and D are not the best solutions as they turn on all features for the organization, which is not necessary to achieve the desired functionality and may lead to additional costs and complexity.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775685,
          "date": "Sat 14 Jan 2023 17:12",
          "username": "masetromain",
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
          "id": 793312,
          "date": "Mon 30 Jan 2023 21:43",
          "username": "zozza2023",
          "content": "Transfer Accelerator + Multi-part uploads for files more 500MB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 793084,
          "date": "Mon 30 Jan 2023 18:13",
          "username": "Musk",
          "content": "I like AD but I am unsure. If the users in US don't complain about issues, it must be because multi-part upload is already enabled, otherwise it would fail 50% of the times. If only Australia users complain, it must be something else... Maybe A+B is a better option, although B is not the most cost efficient certainly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776971,
          "date": "Sun 15 Jan 2023 20:11",
          "username": "zhangyu20000",
          "content": "AD is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775689,
          "date": "Sat 14 Jan 2023 17:14",
          "username": "masetromainmasetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/74177-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answers would be A and D. <br>A.  Enabling S3 Transfer Acceleration on the S3 bucket and configuring the app to use the Transfer Acceleration endpoint for uploads will improve the app's performance for users in Australia by providing a fast and secure way to transfer large files over the Internet.<br>D.  Configuring the app to break the video files into chunks and using a multipart upload to transfer files to Amazon S3, will improve the app's performance for users in Australia by allowing them to upload large files in parallel, which can increase upload speed and reduce the risk of upload failures.B.  Configuring an S3 bucket in each Region to receive the uploads and using S3 Cross-Region Replication to copy the files to the distribution S3 bucket is not the most cost-effective solution for this specific use case.<br>C.  Setting up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region is not a solution that would improve the performance of the uploads specifically for users in Australia.<br>E.  Modifying the app to add random prefixes to the files before uploading will not improve the app's performance for users in Australia.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 775690,
          "date": "Sat 14 Jan 2023 17:14",
          "username": "masetromain",
          "content": "B.  Configuring an S3 bucket in each Region to receive the uploads and using S3 Cross-Region Replication to copy the files to the distribution S3 bucket is not the most cost-effective solution for this specific use case.<br>C.  Setting up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region is not a solution that would improve the performance of the uploads specifically for users in Australia.<br>E.  Modifying the app to add random prefixes to the files before uploading will not improve the app's performance for users in Australia.",
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
          "id": 777081,
          "date": "Sun 15 Jan 2023 22:29",
          "username": "zhangyu20000",
          "content": "B is correct.<br>C: Aurora is useless, Proxy is pointing to existing RDS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775693,
          "date": "Sat 14 Jan 2023 17:16",
          "username": "masetromain",
          "content": "The correct solution is B.  Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.<br><br>An RDS proxy is a service that allows you to pool and share connections to an RDS database. By using an RDS proxy, your application can automatically reconnect to the database after a failover event, without the need to restart the application.<br><br>Solution A, migrating to Aurora Serverless, may not solve the problem because Aurora Serverless does not support Multi-AZ.<br>Solution C and D are not the correct solutions because it does not solve the problem of reconnecting to the database after a failover event.",
          "upvote_count": "1",
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
          "id": 793318,
          "date": "Mon 30 Jan 2023 21:46",
          "username": "zozza2023",
          "content": "C is correct (less op overhead than A)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777096,
          "date": "Sun 15 Jan 2023 22:49",
          "username": "zhangyu20000",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775698,
          "date": "Sat 14 Jan 2023 17:19",
          "username": "masetromainmasetromain",
          "content": "The correct solution is C.  Set up AWS IoT Core. For each device, create a corresponding AWS IoT thing and provision a certificate. Connect each device to AWS IoT Core.<br><br>AWS IoT Core is a fully managed service that enables secure, bi-directional communication between internet-connected devices and the AWS Cloud. It supports the MQTT protocol and includes built-in device authentication and access control. By using AWS IoT Core, the company can easily provision and manage the X.509 certificates for each device, and connect the devices to the service with minimal operational overhead.Option A, setting up Amazon MQ queues and connecting each device to a queue, would require significant operational overhead to manage the queues and ensure that each device is properly authenticated and connected.<br>Option B and D, using a Network Load Balancer (NLB) with a Lambda authorizer or an Amazon API Gateway HTTP API with a mutual TLS certificate authorizer and running an MQTT broker on EC2 instances, would also introduce more operational complexity and overhead compared to using AWS IoT Core.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775699,
          "date": "Sat 14 Jan 2023 17:19",
          "username": "masetromain",
          "content": "Option A, setting up Amazon MQ queues and connecting each device to a queue, would require significant operational overhead to manage the queues and ensure that each device is properly authenticated and connected.<br>Option B and D, using a Network Load Balancer (NLB) with a Lambda authorizer or an Amazon API Gateway HTTP API with a mutual TLS certificate authorizer and running an MQTT broker on EC2 instances, would also introduce more operational complexity and overhead compared to using AWS IoT Core.",
          "upvote_count": "1",
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
          "id": 793139,
          "date": "Mon 30 Jan 2023 18:57",
          "username": "Musk",
          "content": "B does not enfore CF, otherwise it would work.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790740,
          "date": "Sat 28 Jan 2023 16:39",
          "username": "Untamables",
          "content": "C<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/security-best-practices.html#use-iam-to-control-access<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779391,
          "date": "Wed 18 Jan 2023 00:20",
          "username": "Nicocacik",
          "content": "You have to use a service role",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778256,
          "date": "Mon 16 Jan 2023 21:57",
          "username": "masetromainmasetromain",
          "content": "C.  Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>This option is also correct, it is a way to restrict the access of engineers to only be able to perform AWS CloudFormation actions and provision only approved resources. By giving only permissions to the IAM role used by engineers for CloudFormation and creating a separate IAM role with permissions to provision approved resources and then assigning that role to CloudFormation during stack creation, we ensure that engineers can only provision the approved resources using CloudFormation.Both options B and C are correct.<br><br>Option B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>Option C: Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>Both options will enforce the new restriction on the IAM role that the engineers use for access, by limiting their access only to approved resources and only allowing them to provision resources using AWS CloudFormation. The specif",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 778258,
          "date": "Mon 16 Jan 2023 21:59",
          "username": "masetromain",
          "content": "Both options B and C are correct.<br><br>Option B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>Option C: Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.<br><br>Both options will enforce the new restriction on the IAM role that the engineers use for access, by limiting their access only to approved resources and only allowing them to provision resources using AWS CloudFormation. The specif",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777089,
          "date": "Sun 15 Jan 2023 22:40",
          "username": "zhangyu20000masetromain",
          "content": "C is correct<br>A: only allow CF, no approved resources<br>B: role allow approved resources and CF.  User can bypass CF<br>D: CF onlyB: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation is correct but by itself it does not guarantee that the engineers will use only approved resources or will use AWS CloudFormation to provision them. The solutions architect should also implement additional controls such as using AWS Organizations to centrally manage access policies, using AWS Config to monitor and enforce compliance with the company's policies, or creating a custom resource in the CloudFormation templates to validate the provisioned resources against a predefined list of approved resources.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 778254,
          "date": "Mon 16 Jan 2023 21:57",
          "username": "masetromain",
          "content": "B: Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation is correct but by itself it does not guarantee that the engineers will use only approved resources or will use AWS CloudFormation to provision them. The solutions architect should also implement additional controls such as using AWS Organizations to centrally manage access policies, using AWS Config to monitor and enforce compliance with the company's policies, or creating a custom resource in the CloudFormation templates to validate the provisioned resources against a predefined list of approved resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775709,
          "date": "Sat 14 Jan 2023 17:24",
          "username": "masetromainzhangyu20000masetromain",
          "content": "The correct answer is B.  Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.<br><br>This solution will meet the requirement of enforcing the new restriction on the IAM role that the engineers use for access by only allowing the engineers to use AWS CloudFormation to provision the approved resources. By updating the IAM policy to only allow provisioning of approved resources and AWS CloudFormation, it will restrict the engineers from provisioning any other resources. Engineers will use AWS CloudFormation templates to create stacks with approved resources, which will ensure that only the approved resources are being provisioned.it allow provision of approved resources and CF in same time. User can provision resources directly without CFOther options are not the correct answer because:<br><br>Option A only allows access to Amazon S3 and AWS CloudFormation, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option C only allows AWS CloudFormation actions, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option D is incomplete, it doesn't specify how to restrict the engineers from provisioning resources other than the approved ones",
          "upvote_count": "131",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777936,
          "date": "Mon 16 Jan 2023 17:36",
          "username": "zhangyu20000",
          "content": "it allow provision of approved resources and CF in same time. User can provision resources directly without CF",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775710,
          "date": "Sat 14 Jan 2023 17:24",
          "username": "masetromain",
          "content": "Other options are not the correct answer because:<br><br>Option A only allows access to Amazon S3 and AWS CloudFormation, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option C only allows AWS CloudFormation actions, but it doesn't restrict the engineers from provisioning resources other than the approved ones<br>Option D is incomplete, it doesn't specify how to restrict the engineers from provisioning resources other than the approved ones",
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
          "id": 784745,
          "date": "Sun 22 Jan 2023 23:34",
          "username": "DDONG",
          "content": "B SAP01 #613",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777098,
          "date": "Sun 15 Jan 2023 22:52",
          "username": "zhangyu20000Atila50masetromain",
          "content": "C is correct<br>Dynamodb support 4KB size, low latency and TTLdo yo mean Bhttps://www.examtopics.com/discussions/amazon/view/28419-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Option C is using RDS MySQL which is a relational database and will not be able to handle the scale of millions of small records per minute with low latency and it is not designed for automatic deletion of records based on time and it will be more expensive as well.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 778291,
          "date": "Mon 16 Jan 2023 22:23",
          "username": "Atila50",
          "content": "do yo mean B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778261,
          "date": "Mon 16 Jan 2023 22:03",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/28419-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Option C is using RDS MySQL which is a relational database and will not be able to handle the scale of millions of small records per minute with low latency and it is not designed for automatic deletion of records based on time and it will be more expensive as well.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775714,
          "date": "Sat 14 Jan 2023 17:26",
          "username": "masetromainmasetromain",
          "content": "The most cost-effective and efficient solution that meets the design requirements would be option B, Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to delete records older than 120 days.<br><br>DynamoDB is a NoSQL key-value store designed for high scale and performance. It is fully managed by AWS and can easily handle millions of small records per minute. Additionally, with the TTL feature, you can set an expiration time for each record, so that the data can be automatically deleted after the specified time period.Option A, storing each incoming record as a single .csv file in an Amazon S3 bucket, would not be a good option because it would be difficult to retrieve individual records from the .csv files, and will likely increase the cost of data retrieval.<br><br>Option C, storing each incoming record in a single table in an Amazon RDS MySQL database, would be a more expensive option as RDS is typically more expensive than DynamoDB.  Additionally, running a cron job to delete old data could lead to additional operational overhead.<br><br>Option D, storing incoming records in batches in an S3 bucket, would be a less efficient option as it would require additional processing and parsing of the data to retrieve individual records.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775715,
          "date": "Sat 14 Jan 2023 17:26",
          "username": "masetromain",
          "content": "Option A, storing each incoming record as a single .csv file in an Amazon S3 bucket, would not be a good option because it would be difficult to retrieve individual records from the .csv files, and will likely increase the cost of data retrieval.<br><br>Option C, storing each incoming record in a single table in an Amazon RDS MySQL database, would be a more expensive option as RDS is typically more expensive than DynamoDB.  Additionally, running a cron job to delete old data could lead to additional operational overhead.<br><br>Option D, storing incoming records in batches in an S3 bucket, would be a less efficient option as it would require additional processing and parsing of the data to retrieve individual records.",
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
          "id": 779550,
          "date": "Wed 18 Jan 2023 04:00",
          "username": "icassp",
          "content": "for B,C, Amazon RDS does not support global tables yet. Only Aurora supports.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777099,
          "date": "Sun 15 Jan 2023 22:53",
          "username": "zhangyu20000masetromainShahul75masetromain",
          "content": "D is correctIt is possible that some people may think that option D.  Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source. is the best solution, as it also utilizes read replicas and cross-Region promotion to minimize downtime. However, it is important to consider that while this solution provides high availability, it doesn't provide the same level of automatic replication that global tables do. In case of a disruption, there is a risk of data loss during the manual switchover.<br>and also with option D, you are still working with a single point of failure, the primary database, while in option B you have multiple copies of your data distributed across different regions, so in case of a failure you can switch over to one of the replicas without loss of data.B is not right.Only Aurora has global tables.RDS don'thttps://www.examtopics.com/discussions/amazon/view/69438-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "3211",
          "selected_answers": ""
        },
        {
          "id": 778268,
          "date": "Mon 16 Jan 2023 22:06",
          "username": "masetromainShahul75",
          "content": "It is possible that some people may think that option D.  Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source. is the best solution, as it also utilizes read replicas and cross-Region promotion to minimize downtime. However, it is important to consider that while this solution provides high availability, it doesn't provide the same level of automatic replication that global tables do. In case of a disruption, there is a risk of data loss during the manual switchover.<br>and also with option D, you are still working with a single point of failure, the primary database, while in option B you have multiple copies of your data distributed across different regions, so in case of a failure you can switch over to one of the replicas without loss of data.B is not right.Only Aurora has global tables.RDS don't",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 797150,
          "date": "Fri 03 Feb 2023 16:28",
          "username": "Shahul75",
          "content": "B is not right.Only Aurora has global tables.RDS don't",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778270,
          "date": "Mon 16 Jan 2023 22:06",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/69438-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775724,
          "date": "Sat 14 Jan 2023 17:30",
          "username": "masetromainmasetromain",
          "content": "The correct answer is option B.  Configuring global tables and read replicas on Amazon RDS with the cross-Region scope enabled provides the highest availability for the database. In case of disruption, the company can use AWS Lambda to copy the read replicas from one Region to another Region, ensuring that the website remains operational at all times. This solution provides automatic failover across multiple regions and allows for fast recovery in case of a disruption.<br><br>Option A involves promoting an automated backup to be a standalone DB instance and creating a replacement read replica that has the promoted DB instance as its source. This solution is less efficient since it requires manual intervention and additional steps to promote the backup and create a replacement read replica.Option C involves configuring global tables and automated backups on Amazon RDS. This solution is less efficient since it does not provide automatic failover across multiple regions and requires additional steps to copy the read replicas from one Region to another Region using AWS Lambda.<br><br>Option D involves configuring read replicas on Amazon RDS. In the case of disruption, promoting a cross-Region and read replica to be a standalone DB instance. This solution is less efficient than Option B since it does not provide automatic failover across multiple regions and requires manual intervention to promote the read replica to a standalone instance.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775726,
          "date": "Sat 14 Jan 2023 17:30",
          "username": "masetromain",
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
          "id": 793329,
          "date": "Mon 30 Jan 2023 22:01",
          "username": "zozza2023",
          "content": "solution is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778278,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "masetromain",
          "content": "A.  Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.<br><br>This option will allow you to connect from the on-premises servers to VPC B with the least operational effort, as it utilizes the transit gateway to connect all networks and allows for easy updates to the route tables. BGP propagation is not necessary and the use of transit gateway will simplify the traffic routing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778276,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A.  Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.<br><br>This option allows for all three networks (on-premises, VPC A and VPC B) to be connected through the transit gateway, which simplifies the traffic routing and makes it easy to update the route tables for all networks. It also eliminates the need for a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity.Option B is not correct because it would require a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity and effort.<br><br>Option C is not correct because updating the route tables for all three networks and configuring BGP propagation can be a complex process, and waiting for BGP propagation to finish would add an unnecessary delay.<br><br>Option D is not correct because modifying the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B and splitting the two routers of the virtual private gateway between the two VPCs would be overly complex and difficult to manage. It will not be the most efficient solution and adding unnecessary complexity to the existing solution.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 778277,
          "date": "Mon 16 Jan 2023 22:12",
          "username": "masetromain",
          "content": "Option B is not correct because it would require a separate Site-to-Site VPN connection between the on-premises network and VPC B, which would add unnecessary complexity and effort.<br><br>Option C is not correct because updating the route tables for all three networks and configuring BGP propagation can be a complex process, and waiting for BGP propagation to finish would add an unnecessary delay.<br><br>Option D is not correct because modifying the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B and splitting the two routers of the virtual private gateway between the two VPCs would be overly complex and difficult to manage. It will not be the most efficient solution and adding unnecessary complexity to the existing solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777105,
          "date": "Sun 15 Jan 2023 23:06",
          "username": "zhangyu20000masetromain",
          "content": "A is correct. on-premise is connected to TGW, use TDW to talk to VPC A/B<br>B: too many VPN connections<br>C: VPC B cannot use VPC A to VPN<br>D: one VPN gateway cannot be associated with more than one VPCIs correct that option A is the correct answer. Thank for you help.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 778279,
          "date": "Mon 16 Jan 2023 22:13",
          "username": "masetromain",
          "content": "Is correct that option A is the correct answer. Thank for you help.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775732,
          "date": "Sat 14 Jan 2023 17:34",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  This option involves creating a new Site-to-Site VPN connection between the on-premises network and VPC B, and connecting that VPN connection to the transit gateway. This allows the on-premises network to access resources in VPC B through the transit gateway, which already has a connection to VPC A and can route traffic between the two VPCs. This solution requires minimal additional configuration and minimal operational overhead.Option A involves creating a transit gateway, attaching all three networks (the on-premises network, VPC A, and VPC B) to it and updating routing tables for all networks. This solution would require significant additional configuration and would be more complex to set up and maintain.<br><br>Option C involves updating routing tables for all three networks and configuring BGP propagation. This solution is complex and would require additional configuration and maintenance.<br><br>Option D involves modifying the definition of the Site-to-Site VPN to include both VPC A and B and splitting the two VPN routers between the two VPCs. This solution is complex and would require additional configuration and maintenance.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775733,
          "date": "Sat 14 Jan 2023 17:34",
          "username": "masetromain",
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
          "id": 793752,
          "date": "Tue 31 Jan 2023 08:07",
          "username": "Musk",
          "content": "It's B, becuse D is discarded since \\\"The application can use SMTP only.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793750,
          "date": "Tue 31 Jan 2023 08:05",
          "username": "Musk",
          "content": "I doubt between B and D.  Both seem correct to me.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790752,
          "date": "Sat 28 Jan 2023 16:45",
          "username": "Untamables",
          "content": "In this scenario, you should use Amazon SES SMTP interface to send emails because the application can use SMTP only.<br>https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 788794,
          "date": "Thu 26 Jan 2023 15:15",
          "username": "boomx",
          "content": "B<br>STARTTLS works over 25, less change. Also SES SMTP interface needs SMTP credentials<br>https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778285,
          "date": "Mon 16 Jan 2023 22:18",
          "username": "masetromain",
          "content": "The correct answer is option A: \\\"Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.\\\"<br><br>Option B is incorrect as it suggests to use SMTP with STARTTLS to connect to Amazon SES, which is a less secure method than using a secure wrapper such as TLS Wrapper. Option B also suggests using long-term SMTP credentials which could be a security concern.<br><br>Option C is incorrect as it suggests to use the SES API to send email messages, which is not necessary as the application can only use SMTP.<br><br>Option D is incorrect as it suggests to use AWS SDKs to send email messages, which is not necessary as the application can only use SMTP. Also, it suggests to use IAM user for Amazon SES which is also a security concern as it will involve long-term credentials as well.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777245,
          "date": "Mon 16 Jan 2023 02:35",
          "username": "Atila50",
          "content": "https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777108,
          "date": "Sun 15 Jan 2023 23:12",
          "username": "zhangyu20000Muskmasetromain",
          "content": "A is correct. <br>https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html<br>TLS support TLS Wrapper or STARTTLS.<br>B: use STARTTLE but use credential, should use role which is in AYou can't use a role with SES. https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-credentials.htmlYes, you are correct. Option A is the correct answer, as it outlines the steps to configure the application to connect to Amazon SES using a secure method (TLS Wrapper) and authenticate using an IAM role with the necessary permissions (ses:SendEmail and ses:SendRawEmail). This is a more secure and recommended method to authenticate with Amazon SES as it does not involve using long-term credentials such as access keys.",
          "upvote_count": "311",
          "selected_answers": ""
        },
        {
          "id": 793749,
          "date": "Tue 31 Jan 2023 08:05",
          "username": "Musk",
          "content": "You can't use a role with SES. https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-credentials.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778284,
          "date": "Mon 16 Jan 2023 22:18",
          "username": "masetromain",
          "content": "Yes, you are correct. Option A is the correct answer, as it outlines the steps to configure the application to connect to Amazon SES using a secure method (TLS Wrapper) and authenticate using an IAM role with the necessary permissions (ses:SendEmail and ses:SendRawEmail). This is a more secure and recommended method to authenticate with Amazon SES as it does not involve using long-term credentials such as access keys.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775745,
          "date": "Sat 14 Jan 2023 17:49",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials. Use the credentials to authenticate with Amazon SES.<br><br>This solution allows the application to use the Simple Mail Transfer Protocol (SMTP) protocol to send email messages, which the application requires. Using STARTTLS enables the use of Transport Layer Security (TLS) encryption to secure the connection between the application and Amazon SES. Obtaining the Amazon SES SMTP credentials and using them to authenticate with Amazon SES allows the application to use Amazon SES to send email messages.Option A is incorrect because it uses an IAM role, rather than SMTP credentials, to authenticate with Amazon SES.<br>Option C is incorrect because it uses the SES API to send email messages, which the application may not support.<br>Option D is incorrect because it uses an IAM user, rather than SMTP credentials, to authenticate with Amazon SES.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775747,
          "date": "Sat 14 Jan 2023 17:49",
          "username": "masetromain",
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
          "id": 777115,
          "date": "Sun 15 Jan 2023 23:22",
          "username": "zhangyu20000",
          "content": "A is correct<br>B: no such template for cost exporer<br>CD: Price List Query API is for list price, not for usage",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775782,
          "date": "Sat 14 Jan 2023 18:33",
          "username": "masetromain",
          "content": "The correct solution is A. <br><br>Creating an AWS Cost and Usage Report for the organization and defining tags and cost categories in the report will allow for detailed cost reporting for the different companies that have been consolidated into one organization. By creating a table in Amazon Athena and an Amazon QuickSight dataset based on the Athena table, the finance team will be able to easily query and generate reports on the costs for all the companies. The dataset can then be shared with the finance team for them to use for their reporting needs.<br><br>Option B is not correct because it does not provide a way to query and generate reports on the costs for all the companies. <br><br>Option C is not correct because it only provides spending information from the AWS Price List Query API and does not provide detailed cost reporting for the different companies. <br><br>Option D is not correct because it only uses the AWS Price List Query API and does not provide a way to query and generate reports on the costs for all the companies.",
          "upvote_count": "1",
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
          "id": 777119,
          "date": "Sun 15 Jan 2023 23:24",
          "username": "zhangyu20000",
          "content": "CE are correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775793,
          "date": "Sat 14 Jan 2023 18:55",
          "username": "masetromainmasetromain",
          "content": "C and E are the correct answers.<br><br>Option C: Leveraging Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data would help to resolve the issues with the API servers being consistently overloaded. By using Kinesis, the data can be ingested and processed in real-time, allowing the API servers to handle the increased load. Using Lambda to process the data can also help to improve the overall performance and scalability of the platform.<br><br>Option E: Re-architecting the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance would help to resolve the issues with high write latency. DynamoDB is a NoSQL database that is designed for high performance and scalability, making it a good fit for this use case. Additionally, DynamoDB supports auto-scaling, which can help to ensure that the database can handle the expected growth in the number of sensors.Option A, Resizing the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS will not solve the problem, as the problem is not just related to storage size but also high write latency.<br><br>Option B, Re-architecting the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and adding read replicas would help to improve the read performance, but it won't help in reducing write latency.<br><br>Option D, Using AWS X-Ray to analyze and debug application issues and adding more API servers to match the load, would help in identifying the problem and resolving it, but it will not help in reducing the load on the servers.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 775794,
          "date": "Sat 14 Jan 2023 18:55",
          "username": "masetromain",
          "content": "Option A, Resizing the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS will not solve the problem, as the problem is not just related to storage size but also high write latency.<br><br>Option B, Re-architecting the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and adding read replicas would help to improve the read performance, but it won't help in reducing write latency.<br><br>Option D, Using AWS X-Ray to analyze and debug application issues and adding more API servers to match the load, would help in identifying the problem and resolving it, but it will not help in reducing the load on the servers.",
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
          "id": 794658,
          "date": "Tue 31 Jan 2023 23:07",
          "username": "Musk",
          "content": "Thinking better bout the ones that in combintion would help best, I finally vote B and D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 794646,
          "date": "Tue 31 Jan 2023 22:57",
          "username": "Musk",
          "content": "I think D will help more to reduce latency than A.  Compleexity or cost is not a factor in the request.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 793355,
          "date": "Mon 30 Jan 2023 22:20",
          "username": "zozza2023Musk",
          "content": "well explained by masetromain :)he often changes idea after someone contradicts.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 794648,
          "date": "Tue 31 Jan 2023 22:57",
          "username": "Musk",
          "content": "he often changes idea after someone contradicts.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775798,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "masetromainmasetromainmasetromain",
          "content": "A and C are correct answers.A.  Enable S3 Transfer Acceleration on the S3 bucket and ensure that the web application uses the Transfer Acceleration signed URLs will accelerate the uploads of documents to S3 bucket, this will help to reduce the latency for users outside of Europe.C.  Change the API Gateway Regional endpoints to edge-optimized endpoints will help the company to improve the latency by caching the responses of the API Gateway closer to the users.B.  Creating an accelerator in AWS Global Accelerator and attaching it to the CloudFront distribution will not help in this scenario as it only helps to route the traffic to the optimal endpoint based on the location of the user.D.  Provisioning the entire stack in two other locations that are spread across the world and using global databases on the Aurora Serverless cluster will help to reduce the latency but it would be more complex to implement and manage.E.  Adding an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database will not help in this scenario because it is only used to improve connection management and load balancing for Amazon RDS databases, but not for Aurora Serverless databases.https://www.examtopics.com/discussions/amazon/view/69470-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "322",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 775800,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "masetromainmasetromain",
          "content": "B.  Creating an accelerator in AWS Global Accelerator and attaching it to the CloudFront distribution will not help in this scenario as it only helps to route the traffic to the optimal endpoint based on the location of the user.D.  Provisioning the entire stack in two other locations that are spread across the world and using global databases on the Aurora Serverless cluster will help to reduce the latency but it would be more complex to implement and manage.E.  Adding an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database will not help in this scenario because it is only used to improve connection management and load balancing for Amazon RDS databases, but not for Aurora Serverless databases.https://www.examtopics.com/discussions/amazon/view/69470-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 775801,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "masetromain",
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
          "id": 793358,
          "date": "Mon 30 Jan 2023 22:21",
          "username": "zozza2023",
          "content": "typico A S3 Intelligent-Tiering",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792388,
          "date": "Mon 30 Jan 2023 05:22",
          "username": "jhonivy",
          "content": "D it will reduce the cost on retrieval requests",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776247,
          "date": "Sun 15 Jan 2023 09:12",
          "username": "masetromainmasetromainjhonivyyoungprinceton",
          "content": "The correct answer is A.  Configure S3 Intelligent-Tiering on the S3 bucket.<br><br>Amazon S3 Intelligent-Tiering is a storage class that automatically moves objects between two access tiers based on changing access patterns. Objects that are accessed frequently are stored in the frequent access tier and objects that are accessed infrequently are stored in the infrequent access tier. This allows for cost optimization without requiring manual intervention. This makes it an ideal solution for the scenario described, as it can automatically move objects that are infrequently accessed after 30 days to a lower-cost storage tier while still maintaining millisecond retrieval availability.Option B is not correct as it only moves data to S3 Glacier Deep Archive after 30 days, which would still require additional steps to retrieve the data.<br>Option C is not correct because Amazon Elastic File System (Amazon EFS) is a file storage service for use with Amazon EC2 instances, it does not provide a cost-effective solution for storing and retrieving large amounts of data.<br>Option D is not correct because adding a Cache-Control: max-age header only controls the caching behavior of the objects and does not address the cost optimization requirements.Option D works for the reduction cost on retrieval requesttake the test then tell us if your answers are valid, if they are share them with us ;)",
          "upvote_count": "4211",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776248,
          "date": "Sun 15 Jan 2023 09:12",
          "username": "masetromainjhonivyyoungprinceton",
          "content": "Option B is not correct as it only moves data to S3 Glacier Deep Archive after 30 days, which would still require additional steps to retrieve the data.<br>Option C is not correct because Amazon Elastic File System (Amazon EFS) is a file storage service for use with Amazon EC2 instances, it does not provide a cost-effective solution for storing and retrieving large amounts of data.<br>Option D is not correct because adding a Cache-Control: max-age header only controls the caching behavior of the objects and does not address the cost optimization requirements.Option D works for the reduction cost on retrieval requesttake the test then tell us if your answers are valid, if they are share them with us ;)",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 792380,
          "date": "Mon 30 Jan 2023 05:15",
          "username": "jhonivyyoungprinceton",
          "content": "Option D works for the reduction cost on retrieval requesttake the test then tell us if your answers are valid, if they are share them with us ;)",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 792822,
          "date": "Mon 30 Jan 2023 14:23",
          "username": "youngprinceton",
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
          "id": 798895,
          "date": "Sun 05 Feb 2023 15:34",
          "username": "Heer",
          "content": "OPTION C:<br><br>If you have an increasing number of Amazon S3 buckets, spread across tens or even hundreds of accounts, you might be in search of a tool that makes it easier to manage your growing storage footprint and improve cost efficiencies. S3 Storage Lens is an analytics feature built-in to the S3 console to help you gain organization-wide visibility into your object storage usage and activity trends, and to identify cost savings opportunities. S3 Storage Lens is available for all S3 accounts, free of charge. You can also upgrade to advanced metrics to receive additional metrics, insights, and an extended data retention period.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795325,
          "date": "Wed 01 Feb 2023 17:48",
          "username": "Musk",
          "content": "B or C won't analyze anything from before enabling it. You are simply late. If you want to anlayze previous 12 months, go for A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795310,
          "date": "Wed 01 Feb 2023 17:40",
          "username": "tatdatpham",
          "content": "Both B and C can do that, but the question did not mention about cost so I vote for C because It has UI friendly :). <br>Advanced metrics in S3 Storage Lens help Generate metrics that can help you manage and optimize your storage costs, such as lifecycle rule counts for transitions, expirations, and incomplete multipart uploads. Data is available for queries for 15 months",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 795304,
          "date": "Wed 01 Feb 2023 17:37",
          "username": "Musk",
          "content": "It can't be B.  When you upgrade AWS S3 Storage Lens to get advanced metrics, metrics data is only preserved since the date when you upgraded, not for the previous 15 months before you upgraded. The request is to review the previous data for the last 12 months.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790769,
          "date": "Sat 28 Jan 2023 16:53",
          "username": "Untamableszozza2023",
          "content": "Both B and C are good.<br>I guess AWS wants clients to use S3 Storage Lens... Hence I vote C. agree with u gess aws want us to know about Lens",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793361,
          "date": "Mon 30 Jan 2023 22:24",
          "username": "zozza2023",
          "content": "agree with u gess aws want us to know about Lens",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786626,
          "date": "Tue 24 Jan 2023 15:52",
          "username": "vsk12",
          "content": "Answer B makes more sense as using QS, data can be analyzed further.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785362,
          "date": "Mon 23 Jan 2023 14:04",
          "username": "masssa",
          "content": "I vote C \\\"S3 Storage Lens\\\".<br>free metrics cannot provide recommendation, but upgrade metrics can provide recommendation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781213,
          "date": "Thu 19 Jan 2023 15:10",
          "username": "AjayD123",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776251,
          "date": "Sun 15 Jan 2023 09:16",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  The solution of using S3 storage class analysis and importing data trends into an Amazon QuickSight dashboard will allow the solutions architect to review data trends for the past 12 months and identify the appropriate storage class for the objects. This solution will allow the architect to see which objects are frequently accessed, which objects are infrequently accessed, and the costs associated with the different storage classes.<br><br>Option A, Downloading AWS Cost and Usage Reports for the last 12 months of S3 usage and reviewing AWS Trusted Advisor recommendations for cost savings, will provide information on S3 costs but does not provide data trends that allow the architect to determine the appropriate storage class for the objects.Option C, Using Amazon S3 Storage Lens and upgrading the default dashboard to include advanced metrics for storage trends, will provide information on S3 usage but does not provide data trends that allow the architect to determine the appropriate storage class for the objects.<br><br>Option D, Using Access Analyzer for S3, and downloading the Access Analyzer for S3 report for the last 12 months and importing the .csv file to an Amazon QuickSight dashboard, is not relevant as it is used to analyze access controls and permissions to S3 resources, and it does not provide data trends that allow the architect to determine the appropriate storage class for the objects.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776252,
          "date": "Sun 15 Jan 2023 09:16",
          "username": "masetromain",
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
          "id": 793369,
          "date": "Mon 30 Jan 2023 22:28",
          "username": "zozza2023",
          "content": "The correct answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776255,
          "date": "Sun 15 Jan 2023 09:19",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C.  Use AWS Organizations and AWS CloudFormation StackSets.<br>AWS Organizations allows the management of multiple AWS accounts as a single entity and AWS CloudFormation StackSets allows creating, updating, and deleting stacks across multiple accounts and regions in an organization. This solution allows creating a single CloudFormation template that can be deployed across multiple accounts and regions, and also allows for the management of access and permissions for the different accounts through the use of IAM roles and policies in the management account.Option A and D both use AWS CloudFormation, but do not take into account the management of multiple accounts and regions. Option B uses AWS Organizations but doesn't include the use of CloudFormation StackSets, which is necessary for managing deployments across multiple accounts and regions.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776256,
          "date": "Sun 15 Jan 2023 09:19",
          "username": "masetromain",
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
          "username": "Musk",
          "content": "This is repeated :-(",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795312,
          "date": "Wed 01 Feb 2023 17:42",
          "username": "tatdatpham",
          "content": "Duplicate question with #84",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777137,
          "date": "Sun 15 Jan 2023 23:39",
          "username": "zhangyu20000",
          "content": "C is correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776257,
          "date": "Sun 15 Jan 2023 09:20",
          "username": "masetromain",
          "content": "same question of \\\"Questions #84\\\"",
          "upvote_count": "3",
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
          "id": 785014,
          "date": "Mon 23 Jan 2023 06:40",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776259,
          "date": "Sun 15 Jan 2023 09:24",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  Specifying AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application and swapping the staging and production environment URLs. This approach allows the company to deploy updates several times an hour and quickly roll back changes as needed.<br><br>Option A, Deploying a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances, while it may provide a way to roll back changes by replacing instances with previous versions, it may not allow for rapid deployment of updates multiple times per hour.Option C, Using AWS Systems Manager to re-provision the infrastructure for each deployment. Updating the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and using Amazon Route 53 weighted routing to point to the new environment, would require more time-consuming steps and may not be able to roll back changes as quickly.<br><br>Option D, Rolling out the application updates as part of an Auto Scaling event using prebuilt AMIs. Using new versions of the AMIs to add instances and phasing out all instances that use the previous AMI version with the configured termination policy during a deployment event, while it may be a way to roll back changes, it doesn't allow for rapid deployment of updates multiple times per hour.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776260,
          "date": "Sun 15 Jan 2023 09:24",
          "username": "masetromain",
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
          "username": "masetromainmasetromain",
          "content": "The correct combination of steps to meet these requirements is B and C. <br>B.  Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port. This allows the instances to make outbound connections to the DB cluster on the default Aurora port.<br>C.  Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port. This allows connections to the DB cluster from the EC2 instances on the default Aurora port.A.  Adding an inbound rule to the EC2 instances' security group would allow incoming connections to the instances on the default Aurora port, but it would not allow the instances to connect to the DB cluster.<br>D.  Adding an outbound rule to the DB cluster's security group would allow the DB cluster to make outbound connections to the EC2 instances on the default Aurora port, but it would not allow connections to the DB cluster from the instances.<br>E.  Adding an outbound rule to the DB cluster's security group specifying the EC2 instances' security group as the destination over the ephemeral ports would allow the DB cluster to make outbound connections to the instances on ephemeral ports, but it would not allow connections to the DB cluster from the instances on the default Aurora port.",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 776267,
          "date": "Sun 15 Jan 2023 09:27",
          "username": "masetromain",
          "content": "A.  Adding an inbound rule to the EC2 instances' security group would allow incoming connections to the instances on the default Aurora port, but it would not allow the instances to connect to the DB cluster.<br>D.  Adding an outbound rule to the DB cluster's security group would allow the DB cluster to make outbound connections to the EC2 instances on the default Aurora port, but it would not allow connections to the DB cluster from the instances.<br>E.  Adding an outbound rule to the DB cluster's security group specifying the EC2 instances' security group as the destination over the ephemeral ports would allow the DB cluster to make outbound connections to the instances on ephemeral ports, but it would not allow connections to the DB cluster from the instances on the default Aurora port.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795322,
          "date": "Wed 01 Feb 2023 17:47",
          "username": "tatdatpham",
          "content": "Flow connection: EC2 -> DB<br>So you need to configure Outbound EC2 and Inbound DB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 793384,
          "date": "Mon 30 Jan 2023 22:37",
          "username": "zozza2023",
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
          "username": "masetromainmasetromain",
          "content": "B.  Configure AWS Budgets in the organization's management account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's management account to create monthly reports for each business unit.<br><br>This option is the most cost-effective because it utilizes the organization's management account to set budgets and configure alerts for all accounts in the organization, rather than having to configure budgets and alerts individually in each account. Additionally, using Cost Explorer in the management account allows the cloud governance team to view the consolidated spending for all accounts in the organization and create reports for each business unit. This eliminates the need to access each individual account to view costs and create reports.Option A is not the most cost-effective solution because it requires configuring budgets and reports in multiple accounts, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option C is not the most cost-effective solution because it requires the cloud governance team to access the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option D is not the most cost-effective solution because it requires creating an AWS Lambda function to process AWS Cost and Usage Reports, which increases the complexity and cost of managing the cloud spending for each business unit.",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776271,
          "date": "Sun 15 Jan 2023 09:32",
          "username": "masetromain",
          "content": "Option A is not the most cost-effective solution because it requires configuring budgets and reports in multiple accounts, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option C is not the most cost-effective solution because it requires the cloud governance team to access the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit, which increases the complexity and cost of managing the cloud spending for each business unit.<br><br>Option D is not the most cost-effective solution because it requires creating an AWS Lambda function to process AWS Cost and Usage Reports, which increases the complexity and cost of managing the cloud spending for each business unit.",
          "upvote_count": "1",
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
          "id": 793388,
          "date": "Mon 30 Jan 2023 22:45",
          "username": "zozza2023",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785490,
          "date": "Mon 23 Jan 2023 15:51",
          "username": "masssa",
          "content": "\\\"DeletionPolicy\\\" : \\\"Retain\\\"　can prevent to delete resource",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780227,
          "date": "Wed 18 Jan 2023 17:48",
          "username": "masetromainmasetromain",
          "content": "I switch to A:<br>https://www.examtopics.com/discussions/amazon/view/5233-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>Modifying the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources, is another valid solution to prevent accidental deletion of data in this scenario. By adding a DeletionPolicy attribute of \\\"Retain\\\" to RDS and EBS resources in the CloudFormation templates, the company can ensure that these resources and their data are not deleted when the CloudFormation stack is deleted. This is a way to prevent accidental deletion of data by preserving the resources when the stack is deleted.Option B, Configuring a stack policy that disallows the deletion of RDS and EBS resources, would also prevent accidental deletion of data by RDS and EBS resources, but it does so by controlling access to the resources rather than preserving the resources as Option A does. Stack policies are a way to set up fine-grained access controls for the CloudFormation stack, so it would prevent users who are not authorized to delete RDS and EBS resources from doing so.<br><br>Option C, Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, is not a good solution because it only controls who can delete the resources, not whether they are deleted or retained when the stack is deleted.<br><br>Option D, Using AWS Config rules to prevent deleting RDS and EBS resources, is also not a good solution because AWS Config only records and monitors the configuration changes, it does not prevent any action on the resources.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780228,
          "date": "Wed 18 Jan 2023 17:48",
          "username": "masetromain",
          "content": "Option B, Configuring a stack policy that disallows the deletion of RDS and EBS resources, would also prevent accidental deletion of data by RDS and EBS resources, but it does so by controlling access to the resources rather than preserving the resources as Option A does. Stack policies are a way to set up fine-grained access controls for the CloudFormation stack, so it would prevent users who are not authorized to delete RDS and EBS resources from doing so.<br><br>Option C, Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, is not a good solution because it only controls who can delete the resources, not whether they are deleted or retained when the stack is deleted.<br><br>Option D, Using AWS Config rules to prevent deleting RDS and EBS resources, is also not a good solution because AWS Config only records and monitors the configuration changes, it does not prevent any action on the resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777146,
          "date": "Sun 15 Jan 2023 23:51",
          "username": "zhangyu20000",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776274,
          "date": "Sun 15 Jan 2023 09:36",
          "username": "masetromain",
          "content": "The correct answer is B.  Configuring a stack policy that disallows the deletion of RDS and EBS resources will prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted.<br>A.  Modifying the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources may prevent data from being deleted, but it does not prevent the stack deletion itself, which is the main concern.<br>C.  Modifying IAM policies to deny deleting RDS and EBS resources that are tagged with an \\\"aws:cloudformation:stack-name\\\" tag, would not help to prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted.<br>D.  Using AWS Config rules to prevent deleting RDS and EBS resources would prevent users from accidentally deleting data stored in these resources when a production CloudFormation stack is deleted, but it does not prevent the stack deletion itself.",
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
      "question_text": "<p>A company has VPC flow logs enabled for Its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address 198.51.100.2 destined for a private Amazon EC2 instance.<br><br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br><br>Which set of steps should the solutions architect take to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interlace. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": true,
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
          "username": "vsk12",
          "content": "I would go with option B.  Source will be public IP like 198.51.100.2.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 790785,
          "date": "Sat 28 Jan 2023 17:08",
          "username": "Untamables",
          "content": "This is a trick question.<br>'Action = ACCEPT' response is sent from private EC2 instances (203.0.x.x) to the public IP address (198.51.100.2) via the NAT Gateway. The NAT Gateway can catch only this outbound traffic because the relevant inbound traffic does not pass through the NAT Gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 790070,
          "date": "Sat 28 Jan 2023 00:39",
          "username": "zozza2023",
          "content": "should be B no? as the source =198.51.100.2. and dest =203.0<br>I think D is the inverse",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776281,
          "date": "Sun 15 Jan 2023 09:44",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \\\"like 198.51.100.2\\\" and the source address set as \\\"like 203.0\\\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br><br>This set of steps will allow the solutions architect to determine whether the inbound traffic coming from the public IP address 198.51.100.2 is unsolicited, by filtering the VPC flow logs to show the traffic that is going to the private Amazon EC2 instance, and then checking if the traffic is coming from within the VPC CIDR block (203.0) or from outside of it (198.51.100.2). By using Amazon CloudWatch and filtering the logs with the specified IP addresses, the architect can quickly and efficiently identify any unsolicited traffic.The other options are not correct because they are not using the correct service (CloudTrail instead of CloudWatch) or not filtering the logs correctly with the specified IP addresses and the desired information is not available.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776282,
          "date": "Sun 15 Jan 2023 09:44",
          "username": "masetromain",
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
          "id": 797131,
          "date": "Fri 03 Feb 2023 16:11",
          "username": "mmendozaf",
          "content": "To encrypt you need to Re-copy the file and batch is more efficient.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795402,
          "date": "Wed 01 Feb 2023 19:27",
          "username": "Musk",
          "content": "As per Romidan's link, it is clear.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 793830,
          "date": "Tue 31 Jan 2023 09:20",
          "username": "mikeshop",
          "content": "Batch operations are more efficient for millions of objects than running the CLI command.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790161,
          "date": "Sat 28 Jan 2023 02:48",
          "username": "romidan",
          "content": "Option A seems efficient as per the blog - <br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786641,
          "date": "Tue 24 Jan 2023 16:24",
          "username": "vsk12",
          "content": "Option A is correct since manual copying (Option C) for millions of objects is time-consuming.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785616,
          "date": "Mon 23 Jan 2023 17:44",
          "username": "masssaMuskmikeshop",
          "content": "I vote C<br>https://aws.amazon.com/jp/blogs/news/encrypting-existing-amazon-s3-objects-with-the-aws-cli/As mikeshop said: For S3 buckets with a large number of objects, in the order of millions or billions of objects, using Amazon S3 inventory or Amazon S3 Batch Operations can be a better option than using the AWS CLI instructions in this post.If you read further in that post, it says that for large object stores, batch operations are more efficient.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 795401,
          "date": "Wed 01 Feb 2023 19:26",
          "username": "Musk",
          "content": "As mikeshop said: For S3 buckets with a large number of objects, in the order of millions or billions of objects, using Amazon S3 inventory or Amazon S3 Batch Operations can be a better option than using the AWS CLI instructions in this post.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793828,
          "date": "Tue 31 Jan 2023 09:19",
          "username": "mikeshop",
          "content": "If you read further in that post, it says that for large object stores, batch operations are more efficient.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785332,
          "date": "Mon 23 Jan 2023 13:22",
          "username": "Untamables",
          "content": "I thought option A might be correct after reading the below blog article because there were millions of objects in the S3 buckets in this scenario.<br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776290,
          "date": "Sun 15 Jan 2023 09:50",
          "username": "masetromain",
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
          "id": 793411,
          "date": "Mon 30 Jan 2023 23:21",
          "username": "zozza2023",
          "content": "AWS Glue Data Catalog to convert data to be structuredbefore querying them <br>Amazon Athena to query the data. <br>Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790789,
          "date": "Sat 28 Jan 2023 17:15",
          "username": "Untamables",
          "content": "Generally, unstructured data should be converted structured data before querying them. AWS Glue can do that.<br>https://docs.aws.amazon.com/glue/latest/dg/schema-relationalize.html<br>https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779093,
          "date": "Tue 17 Jan 2023 18:00",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C.  Use an AWS Glue Data Catalog and Amazon Athena to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.<br><br>This solution allows you to use Amazon Athena and the AWS Glue Data Catalog to query and analyze the data in an S3 bucket. Amazon Athena is a serverless, interactive query service that allows you to analyze data in S3 using SQL. The AWS Glue Data Catalog is a managed metadata repository that can be used to store and retrieve table definitions for data stored in S3. Together, these services can provide a cost-effective way to query and analyze large amounts of unstructured data. Additionally, by using an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive, you can retain the data indefinitely for compliance reasons while also reducing storage costs.The other options are not correct because:A.  Using S3 Select is good for filtering data in S3, but it may not be a suitable solution for querying and analyzing large amounts of data.<br>B.  Amazon Redshift Spectrum can be used to query data stored in S3, but it may not be as cost-effective as using Amazon Athena for querying unstructured data<br>D.  Using Amazon Redshift Spectrum with S3 Intelligent-Tiering could be a good solution, but S3 Intelligent-Tiering is designed to optimize storage costs based on access patterns and it would not be the best solution for compliance reasons as S3 Intelligent-Tiering will move data to other storage classes according to access patterns.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779094,
          "date": "Tue 17 Jan 2023 18:01",
          "username": "masetromain",
          "content": "The other options are not correct because:A.  Using S3 Select is good for filtering data in S3, but it may not be a suitable solution for querying and analyzing large amounts of data.<br>B.  Amazon Redshift Spectrum can be used to query data stored in S3, but it may not be as cost-effective as using Amazon Athena for querying unstructured data<br>D.  Using Amazon Redshift Spectrum with S3 Intelligent-Tiering could be a good solution, but S3 Intelligent-Tiering is designed to optimize storage costs based on access patterns and it would not be the best solution for compliance reasons as S3 Intelligent-Tiering will move data to other storage classes according to access patterns.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777154,
          "date": "Mon 16 Jan 2023 00:00",
          "username": "zhangyu20000",
          "content": "C is correct because it is unstructured data. You cannot use S3 select and must use Glue Crawler to generate catalg.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776293,
          "date": "Sun 15 Jan 2023 09:54",
          "username": "masetromain",
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
          "id": 793413,
          "date": "Mon 30 Jan 2023 23:22",
          "username": "zozza2023",
          "content": "3 weeks + cost effective ==> Snowball Edge Storage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776295,
          "date": "Sun 15 Jan 2023 09:56",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A.  Order several AWS Snowball Edge Storage Optimized devices by using the AWS Management Console. Configure the devices with a destination S3 bucket. Copy the data to the devices. Ship the devices back to AWS.<br><br>This option will meet the requirements to complete the data transfer within 3 weeks, as the Snowball Edge devices can transfer large amounts of data quickly and securely. The data will be encrypted in transit and at rest. The company's internet connection speed is not a bottleneck as the data transfer will happen on the devices and not over the internet.Option B is not a cost-effective solution, as setting up and maintaining a 10 Gbps Direct Connect connection can be quite expensive, especially if it's only needed for a one-time data transfer.<br><br>Option C is not a cost-effective solution, as creating a VPN connection between the on-premises storage and the nearest AWS region would require significant networking configuration and maintenance, and would likely be more expensive than using Snowball Edge devices.<br><br>Option D is not a cost-effective solution, as deploying an AWS Storage Gateway file gateway on premises would require additional hardware and ongoing maintenance costs, and may not be necessary for a one-time data transfer.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776296,
          "date": "Sun 15 Jan 2023 09:56",
          "username": "masetromain",
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
          "id": 776302,
          "date": "Sun 15 Jan 2023 10:03",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D.  Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use Amazon Textract and Amazon Comprehend to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.<br><br>This solution meets the requirements of accurate form extraction, minimal time to market, and minimal long-term operational overhead. Amazon Textract and Amazon Comprehend are fully managed and serverless services that can perform OCR and extract relevant data from the forms, which eliminates the need to develop custom libraries or train and host models. Using AWS Step Functions and Lambda allows for easy automation of the process and the ability to scale as needed.Option A:<br>This option would require significant development and maintenance effort and would not take advantage of fully managed services, resulting in increased operational overhead.<br><br>Option B:<br>This option is similar to option A in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.<br><br>Option C:<br>This option is similar to option B in that it would require significant development and maintenance effort to train and host the models, and would not take advantage of fully managed services resulting in increased operational overhead.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776303,
          "date": "Sun 15 Jan 2023 10:03",
          "username": "masetromain",
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
          "username": "masetromainmasetromain",
          "content": "Option A is the correct answer. In this solution, the company creates an Amazon Machine Image (AMI) of the web server VM, which can be used to launch EC2 instances that are identical to the on-premises web servers. The company then creates an EC2 Auto Scaling group that uses the AMI and an Application Load Balancer (ALB) to provide automatic scaling and high availability for the web front end. The company also replaces the on-premises messaging queue (RabbitMQ) with Amazon MQ, which is a managed message broker service that is fully compatible with RabbitMQ. Finally, the company uses Amazon Elastic Kubernetes Service (EKS) to host the order-processing backend, which allows them to run their existing Kubernetes cluster in the AWS cloud without making any major changes to the application. This approach allows the company to lift and shift their existing platform with minimal operational overhead.Option B, using a custom AWS Lambda runtime and Amazon API Gateway, would require significant changes to the application and may not be compatible with the current codebase. <br><br>Option C, installing Kubernetes on a fleet of different EC2 instances, would also require significant changes to the application and may not be compatible with the current codebase. <br><br>Option D, using Amazon Simple Queue Service (Amazon SQS) instead of Amazon MQ, would not provide the same level of messaging capabilities as Amazon MQ and may not be sufficient for the needs of the order-processing platform.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776314,
          "date": "Sun 15 Jan 2023 10:10",
          "username": "masetromain",
          "content": "Option B, using a custom AWS Lambda runtime and Amazon API Gateway, would require significant changes to the application and may not be compatible with the current codebase. <br><br>Option C, installing Kubernetes on a fleet of different EC2 instances, would also require significant changes to the application and may not be compatible with the current codebase. <br><br>Option D, using Amazon Simple Queue Service (Amazon SQS) instead of Amazon MQ, would not provide the same level of messaging capabilities as Amazon MQ and may not be sufficient for the needs of the order-processing platform.",
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
          "id": 790792,
          "date": "Sat 28 Jan 2023 17:18",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786002,
          "date": "Tue 24 Jan 2023 01:21",
          "username": "masssa",
          "content": "I Vote A. <br>https://repost.aws/ja/knowledge-center/s3-large-file-encryption-kms-key<br>Adding kms:GenerateDataKeyis necessary.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776317,
          "date": "Sun 15 Jan 2023 10:16",
          "username": "masetromainmasetromain",
          "content": "A.  kms:GenerateDataKey<br><br>The solutions architect needs to add the \\\"kms:GenerateDataKey\\\" action to the IAM policy in order to generate a data key for client-side encryption. Without this action, the IAM role does not have the necessary permissions to generate a data key, which causes the error message when attempting to upload a new object.The other options are not correct because they are not required for this use case. kms:GetKeyPolicy allows for the retrieval of the key policy for a CMK but it does not have any relation to client-side encryption of S3 objects, kms:GetPublicKey allows for the retrieval of the public key of a CMK, but it does not have any relation to client-side encryption of S3 objects and kms:Sign allows for signing a message using a CMK but it does not have any relation to client-side encryption of S3 objects.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776320,
          "date": "Sun 15 Jan 2023 10:18",
          "username": "masetromain",
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
          "id": 790794,
          "date": "Sat 28 Jan 2023 17:20",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776329,
          "date": "Sun 15 Jan 2023 10:20",
          "username": "masetromainmasetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/74273-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answer is A.  Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.<br><br>This approach allows for monitoring of the incoming traffic and its behavior before taking any action that can affect the legitimate traffic. By setting the action to count, the web ACL will only log the requests that match the conditions of the rules, but it will not block them. This way, the company can analyze the requests and check for any false positives. Once they identify and correct any false positives, they can gradually change the action of the web ACL rules from count to block, thus improving the security posture of the application without adversely affecting legitimate traffic.Option B is not correct because using only rate-based rules can lead to false positives and blocking of legitimate traffic. Option C is not correct because using only AWS managed rule groups can limit the flexibility and specificity of the web ACLs. Option D is not correct because using only custom rule groups with action set to allow can lead to security vulnerabilities.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776330,
          "date": "Sun 15 Jan 2023 10:21",
          "username": "masetromain",
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
          "id": 795542,
          "date": "Wed 01 Feb 2023 22:42",
          "username": "Musk",
          "content": "Clearly",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 793418,
          "date": "Mon 30 Jan 2023 23:38",
          "username": "zozza2023",
          "content": "Create a new customer-managed prefix list in the security team's AWS account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790797,
          "date": "Sat 28 Jan 2023 17:21",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779097,
          "date": "Tue 17 Jan 2023 18:02",
          "username": "masetromainmasetromain",
          "content": "C.  Create a new customer-managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.<br><br>This solution meets the requirements with the least amount of operational overhead as it requires the security team to create and maintain a single customer-managed prefix list, and share it with the organization using AWS Resource Access Manager. The owners of each AWS account are then responsible for allowing the prefix list in their security groups, which eliminates the need for the security team to manually notify each account owner when changes are made. This solution also eliminates the need for a separate AWS Lambda function in each account, reducing the overall complexity of the solution.Option A is not correct because it requires setting up an SNS topic in the security team's AWS account, and deploying an AWS Lambda function in each AWS account. This increases the operational overhead as it requires setting up and maintaining the SNS topic, and deploying and configuring the Lambda function in each account.<br><br>Option B is not correct because it requires creating new customer-managed prefix lists in each AWS account within the organization, which increases the operational overhead as it requires the security team to create and maintain multiple prefix lists.<br><br>Option D is not correct because it requires creating an IAM role in each account in the organization, which increases the operational overhead as it requires the security team to set up and maintain multiple roles. Additionally, it also deploys an AWS Lambda function in the security team's AWS account, which increases complexity and operational overhead.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779098,
          "date": "Tue 17 Jan 2023 18:03",
          "username": "masetromain",
          "content": "Option A is not correct because it requires setting up an SNS topic in the security team's AWS account, and deploying an AWS Lambda function in each AWS account. This increases the operational overhead as it requires setting up and maintaining the SNS topic, and deploying and configuring the Lambda function in each account.<br><br>Option B is not correct because it requires creating new customer-managed prefix lists in each AWS account within the organization, which increases the operational overhead as it requires the security team to create and maintain multiple prefix lists.<br><br>Option D is not correct because it requires creating an IAM role in each account in the organization, which increases the operational overhead as it requires the security team to set up and maintain multiple roles. Additionally, it also deploys an AWS Lambda function in the security team's AWS account, which increases complexity and operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777160,
          "date": "Mon 16 Jan 2023 00:11",
          "username": "zhangyu20000",
          "content": "C is correct. The prefix list is managed by security team and shared with other accounts. Other accounts can directly use it.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776340,
          "date": "Sun 15 Jan 2023 10:25",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D. <br><br>Option D creates an IAM role in each account in the organization which grants permissions to update security groups. Then, it deploys an AWS Lambda function in the security team's AWS account, this lambda function is able to assume the IAM roles in each account and update the security groups with the new IP CIDR ranges. This solution allows the security team to easily distribute and update the common set of IP CIDR ranges across all accounts with minimal operational overhead.<br><br>Option A, uses an SNS topic, where the security team would need to notify all account owners every time an update is made to the allow list and would require the developers in each account to run a Lambda function which updates the security group. This solution would require a lot of manual work, and is not automated.Option B, requires the security team to notify the owners of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.<br><br>Option C, uses a customer-managed prefix list in the security team's AWS account. But, it still requires the owners of each account to allow the new customer-managed prefix list ID in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776341,
          "date": "Sun 15 Jan 2023 10:25",
          "username": "masetromain",
          "content": "Option B, requires the security team to notify the owners of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.<br><br>Option C, uses a customer-managed prefix list in the security team's AWS account. But, it still requires the owners of each account to allow the new customer-managed prefix list ID in their security groups, this solution would not provide a centralized control of the IP CIDR ranges and would require a lot of manual work.",
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
          "id": 795543,
          "date": "Wed 01 Feb 2023 22:50",
          "username": "Musk",
          "content": "It's B as explained here: https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793420,
          "date": "Mon 30 Jan 2023 23:39",
          "username": "zozza2023",
          "content": "should be B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776346,
          "date": "Sun 15 Jan 2023 10:27",
          "username": "masetromain",
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
          "id": 793421,
          "date": "Mon 30 Jan 2023 23:41",
          "username": "zozza2023",
          "content": "decouple ==> SQS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790808,
          "date": "Sat 28 Jan 2023 17:36",
          "username": "Untamables",
          "content": "The application needs to pass the initiative to the next step. That means the application does not wait the response from the Lambda function, it should have the responsibility only to call the Lambda function. To do so, the application only throw the job information to Amazon SQS queue and finish. After that, AWS Lambda function can pull the job information from SQS queue and start processing actively.<br>https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 788868,
          "date": "Thu 26 Jan 2023 16:40",
          "username": "Qing",
          "content": "I vote for C - use Step Functions with its callback feature to throttle the third party api call.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776356,
          "date": "Sun 15 Jan 2023 10:31",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A.  Using an Amazon Simple Queue Service (SQS) queue to store events and invoke the Lambda function is a good solution to decouple the third-party service calls and ensure that all the calls are eventually completed. SQS is a fully managed, reliable, and highly scalable message queuing service that allows applications to send, store, and receive messages between distributed components. By sending the third-party service calls to an SQS queue, it allows the application to continue processing without waiting for the third-party services to respond, which can result in faster response times and lower error rates.Other options like AWS Step Functions state machine, Amazon EventBridge, and Amazon Simple Notification Service (SNS) topic are not appropriate for this use case. AWS Step Functions is a service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows. Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. Amazon SNS is a fully managed messaging service for both application-to-application and application-to-person (A2P) communication. These services are not focused on providing message queues and would not be the best fit for this use case.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776357,
          "date": "Sun 15 Jan 2023 10:31",
          "username": "masetromain",
          "content": "Other options like AWS Step Functions state machine, Amazon EventBridge, and Amazon Simple Notification Service (SNS) topic are not appropriate for this use case. AWS Step Functions is a service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows. Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. Amazon SNS is a fully managed messaging service for both application-to-application and application-to-person (A2P) communication. These services are not focused on providing message queues and would not be the best fit for this use case.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    }
  ]
}