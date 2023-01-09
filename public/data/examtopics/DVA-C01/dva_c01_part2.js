var DVA_C01_Part2 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#101",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using an AWS Lambda function to process records from an Amazon Kinesis data stream. The company recently observed slow processing of the records. A developer notices that the iterator age metric for the function is increasing and that the Lambda run duration is constantly above normal.<br>Which actions should the developer take to increase the processing speed? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#101",
            "answers": [
              {
                "choice": "<p>A. Increase the number of shards of the Kinesis data stream.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Decrease the timeout of the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the memory that is allocated to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Decrease the number of shards of the Kinesis data stream.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Increase the timeout of the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 101 discussion",
        "discusstion": [
          {
            "id": 514712,
            "date": "Sat 01 Jan 2022 23:06",
            "username": "CHRIS12722222Arnaud92",
            "content": "AC is correct. Visit the link in the solution<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-iterator-age/true : =C2=AB To increase the speed at which your function processes records, add shards to your data stream. Lambda processes records in each shard in order. It stops processing additional records in a shard if your function returns an error. With more shards, there are more batches being processed at once, which lowers the impact of errors on concurrency. =C2=BB",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 694561,
            "date": "Fri 14 Oct 2022 08:59",
            "username": "Arnaud92",
            "content": "true : =C2=AB To increase the speed at which your function processes records, add shards to your data stream. Lambda processes records in each shard in order. It stops processing additional records in a shard if your function returns an error. With more shards, there are more batches being processed at once, which lowers the impact of errors on concurrency. =C2=BB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 686804,
            "date": "Wed 05 Oct 2022 13:08",
            "username": "haazybanj",
            "content": "A and C is the right answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 683330,
            "date": "Fri 30 Sep 2022 09:40",
            "username": "arun00028",
            "content": "A an C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 630595,
            "date": "Tue 12 Jul 2022 16:59",
            "username": "Prem21",
            "content": "I vote for AC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 622176,
            "date": "Sat 25 Jun 2022 17:34",
            "username": "AulaitQM",
            "content": "I vote for AC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 545997,
            "date": "Sat 12 Feb 2022 17:27",
            "username": "IsraLev",
            "content": "Answer: AC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 544071,
            "date": "Wed 09 Feb 2022 21:14",
            "username": "JohnPi",
            "content": "A&C is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 541838,
            "date": "Sun 06 Feb 2022 17:22",
            "username": "JP_PA",
            "content": "ANS: A&C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 541608,
            "date": "Sun 06 Feb 2022 10:25",
            "username": "Janakiram_Madurai",
            "content": "It is AC. <br><br>Resolution from the below url.<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-iterator-age/<br><br>1.Decrease your function's runtime duration<br>Achievable by:<br>Increase the amount of memory allocated to the function.<br>Optimize your function code .<br>2.Increase your stream's shard count",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515022,
            "date": "Sun 02 Jan 2022 15:37",
            "username": "denccc",
            "content": "It's AC",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 513944,
            "date": "Fri 31 Dec 2021 09:16",
            "username": "ayush_1995dark_cherrymonCHRIS12722222eledu1985",
            "content": "INcrease shards and increase timeoutthat doesn't make it run faster, so not EAC is correct. Visit the link in the solution<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-iterator-age/E is not correct because that way only gets a workarround with the same bad performance...",
            "upvote_count": "1111",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 721067,
            "date": "Fri 18 Nov 2022 05:50",
            "username": "dark_cherrymon",
            "content": "that doesn't make it run faster, so not E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514713,
            "date": "Sat 01 Jan 2022 23:06",
            "username": "CHRIS12722222",
            "content": "AC is correct. Visit the link in the solution<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-iterator-age/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 567729,
            "date": "Mon 14 Mar 2022 16:05",
            "username": "eledu1985",
            "content": "E is not correct because that way only gets a workarround with the same bad performance...",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#102",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is making changes to a custom application that uses AWS Elastic Beanstalk.<br>Which solutions will update the Elastic Beanstalk environment with the new application version after the developer completes the changes? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#102",
            "answers": [
              {
                "choice": "<p>A. Package the application code into a .zip file. Use the AWS Management Console to upload the zip file and deploy the packaged application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Package the application code into a .tar file. Use the AWS Management Console to create a new application version from the .tar file. Update the environment by using the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Package the application code into a .tar file. Use the AWS Management Console to upload the .tar file and deploy the packaged application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Package the application code into a .zip file. Use the AWS CLI to create a new application version from the .zip file and to update the environment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Package the application code into a .zip file. Use the AWS Management Console to create a new application version from the .zip file. Rebuild the environment by using the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 102 discussion",
        "discusstion": [
          {
            "id": 686807,
            "date": "Wed 05 Oct 2022 13:11",
            "username": "haazybanj",
            "content": "A and D more realistic",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 657542,
            "date": "Fri 02 Sep 2022 17:14",
            "username": "JOL86",
            "content": "This should be A and D I think? Elastic beanstalk won't take .tar files and E seems strange to use AWS Management console and then CLI to rebuild.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 657342,
            "date": "Fri 02 Sep 2022 13:19",
            "username": "LEHUY",
            "content": "A,D looking more realistic.<br>When you go to your EB console and any application ; rightaway on the console you can see a BIG option to upload and deploy ;thats where I lean to A.  (Upload zip and Deploy).<br>And to D obviously you can do the same with AWS EB CLI , by creating application new version and updating environment fot the target app.<br>https://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/update-environment.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AD"
          }
        ]
      },
      {
        "question_id": "#103",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application where reading objects from Amazon S3 is based on the type of user. The user types are registered user and guest user. The company has 25,000 users and is growing. Information is pulled from an S3 bucket depending on the user type.<br>Which approaches are recommended to provide access to both user types? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#103",
            "answers": [
              {
                "choice": "<p>A. Provide a different access key and secret access key in the application code for registered users and guest users to provide read access to the objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use S3 bucket policies to restrict read access to specific IAM users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Cognito to provide access using authenticated and unauthenticated roles.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new IAM user for each user and grant read access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use the AWS IAM service and let the application assume the different roles using the AWS Security Token Service (AWS STS) AssumeRole action depending on the type of user and provide read access to Amazon S3 using the assumed role.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 103 discussion",
        "discusstion": [
          {
            "id": 155144,
            "date": "Mon 20 Sep 2021 23:49",
            "username": "jodeepak",
            "content": "Answer C & E",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 245735,
            "date": "Fri 15 Oct 2021 17:10",
            "username": "RicardoD",
            "content": "C | E are the answers",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 686811,
            "date": "Wed 05 Oct 2022 13:19",
            "username": "haazybanj",
            "content": "Answer C & E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 587481,
            "date": "Mon 18 Apr 2022 07:26",
            "username": "programpete",
            "content": "can someone explain why A & E are the apparent answers instead of C& E which seem the most logical ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 551253,
            "date": "Sat 19 Feb 2022 19:59",
            "username": "waldonuts",
            "content": "C & E are the only options remaining after eliminating the Others<br>A: Never hard code keys<br>B&D: 25,000 and growing, I pity the person trying to maintain user accounts :)",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 533715,
            "date": "Thu 27 Jan 2022 13:13",
            "username": "walkincloudVlasto",
            "content": "Can someone explain why A&E are the answers? I thought it was C&D. I will try:<br>A) Do not even consider this option<br>B) Would be possible if you had a few users and not expecting to get more, so not a real world scenario<br>C) Cognito can handle authorized and unauthorized access so C is correct<br>D) Why would you create so many users and assign them permissions when you just need to distinguish between two roles<br>E) Perfectly fine for the scenario to create Authorized and Unauthorized role, let the app Assume the role and call the services (if the role has the necessary permissions then the call would be successful)",
            "upvote_count": "26",
            "selected_answers": ""
          },
          {
            "id": 540232,
            "date": "Fri 04 Feb 2022 07:37",
            "username": "Vlasto",
            "content": "I will try:<br>A) Do not even consider this option<br>B) Would be possible if you had a few users and not expecting to get more, so not a real world scenario<br>C) Cognito can handle authorized and unauthorized access so C is correct<br>D) Why would you create so many users and assign them permissions when you just need to distinguish between two roles<br>E) Perfectly fine for the scenario to create Authorized and Unauthorized role, let the app Assume the role and call the services (if the role has the necessary permissions then the call would be successful)",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 431570,
            "date": "Tue 19 Oct 2021 08:00",
            "username": "santhoshmj",
            "content": "C and E is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 164603,
            "date": "Fri 15 Oct 2021 01:31",
            "username": "ipindado2020",
            "content": "Ans: CE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 163386,
            "date": "Thu 07 Oct 2021 11:31",
            "username": "hellohi",
            "content": "No worries got it bucket policy is for IAM users",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 160674,
            "date": "Tue 05 Oct 2021 11:23",
            "username": "quanlh",
            "content": "C and E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 160375,
            "date": "Thu 30 Sep 2021 18:43",
            "username": "saeidp",
            "content": "C and E are correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 158592,
            "date": "Sat 25 Sep 2021 09:19",
            "username": "edu_awscertified",
            "content": "C and E",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#104",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application to analyze the traffic to a fleet of Amazon EC2 instances. The EC2 instances run behind a public Application Load Balancer<br>(ALB). An HTTP server runs on each of the EC2 instances, logging all requests to a log file.<br>The developer wants to capture the client public IP addresses. The developer analyzes the log files and notices only the IP address of the ALB. <br>What must the developer do to capture the client public IP addresses in the log file?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#104",
            "answers": [
              {
                "choice": "<p>A. Add a Host header to the HTTP server log configuration file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the Amazon CloudWatch Logs agent on each EC2 instance. Configure the agent to write to the log file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the AWS X-Ray daemon on each EC2 instance. Configure the daemon to write to the log file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an X-Forwarded-For header to the HTTP server log configuration file.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 104 discussion",
        "discusstion": [
          {
            "id": 695158,
            "date": "Sat 15 Oct 2022 05:47",
            "username": "cloud_collector",
            "content": "The X-Forwarded-For request header helps you identify the IP address of a client when you use an HTTP or HTTPS load balancer. Because load balancers intercept traffic between clients and servers, your server access logs only contain the IP address of the load balancer.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/x-forwarded-headers.html#x-forwarded-for",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 678461,
            "date": "Sun 25 Sep 2022 07:24",
            "username": "RUKSHANA",
            "content": "D<br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-capture-client-ip-addresses/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 655824,
            "date": "Thu 01 Sep 2022 07:13",
            "username": "m_t_kd",
            "content": "D- X-Forwarded-For header will help",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 655511,
            "date": "Wed 31 Aug 2022 23:40",
            "username": "Chhotu_DBA",
            "content": "This is D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#105",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a new AWS Serverless Application Model (AWS SAM) template with a new AWS Lambda function. The Lambda function runs complex code. The developer wants to test the Lambda function with more CPU power.<br>What should the developer do to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#105",
            "answers": [
              {
                "choice": "<p>A. Increase the runtime engine version.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the timeout.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the number of Lambda layers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the memory.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 105 discussion",
        "discusstion": [
          {
            "id": 514069,
            "date": "Fri 31 Dec 2021 13:33",
            "username": "SHAAHIBHUSHANAWS",
            "content": "D<br><br>Increase memory. for lambda more memory will add more CPU.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 703218,
            "date": "Mon 24 Oct 2022 19:04",
            "username": "raphaelmulenda",
            "content": "D<br>Increase memory. for lambda more memory will add more CPU.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 690202,
            "date": "Sun 09 Oct 2022 15:11",
            "username": "habros",
            "content": "D.  CPU size and memory is relative in Lambda. More memorymore CPU",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655825,
            "date": "Thu 01 Sep 2022 07:14",
            "username": "m_t_kd",
            "content": "D- Increase the memory",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 552600,
            "date": "Mon 21 Feb 2022 07:57",
            "username": "Shelly1987",
            "content": "D with allocating more memory,more CPU will be available.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 546648,
            "date": "Sun 13 Feb 2022 19:47",
            "username": "netk",
            "content": "DDDDDD",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#106",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer uses a single AWS CloudFormation template to configure the test environment and the production environment for an application. The developer handles environment-specific requirements in the CloudFormation template.<br>The developer decides to update the Amazon EC2 Auto Scaling launch template with new Amazon Machine Images (AMIs) for each environment. The<br>CloudFormation update for the new AMIs is successful in the test environment, but the update fails in the production environment.<br>What are the possible causes of the CloudFormation update failure in the production environment? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#106",
            "answers": [
              {
                "choice": "<p>A. The new AMIs do not fulfill the specified conditions in the CloudFormation template.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The service quota for the number of EC2 vCPUs in the AWS Region has been exceeded.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The security group that is specified in the CloudFormation template does not exist.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. CloudFormation does not recognize the template change as an update.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. CloudFormation does not have sufficient IAM permissions to make the changes.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 106 discussion",
        "discusstion": [
          {
            "id": 759225,
            "date": "Wed 28 Dec 2022 02:04",
            "username": "HieuTT",
            "content": "A<br>E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731548,
            "date": "Wed 30 Nov 2022 14:50",
            "username": "gpitgpit",
            "content": "A is probable, but B is moreSorry, C is more.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 731551,
            "date": "Wed 30 Nov 2022 14:51",
            "username": "gpit",
            "content": "Sorry, C is more.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 688253,
            "date": "Fri 07 Oct 2022 05:23",
            "username": "arun00028",
            "content": "A and E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 684211,
            "date": "Sat 01 Oct 2022 14:54",
            "username": "habros",
            "content": "A and E. <br>AMIs can only be used on specific region. Either both environments running on different regions, or permissions insufficient.<br>IAM access deny exception is common issue. Easiest way to allow or deny AWS resources to user. So when user does not have permission to run template on production environment, it=E2=80=99s obvious.<br>Security group is more for networking (open ports). If fail means written wrongly.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 682784,
            "date": "Thu 29 Sep 2022 16:50",
            "username": "XAvenger",
            "content": "\\\"The service quota\\\" does not make sense because we updated Template, there was not any attempt to launch instances > B is incorrect<br>\\\"The security group\\\" was not mentioned before at all.Why would it fail now? I think C is incorrect<br>\\\"does not recognize the template change as an update\\\" > it cannot be. D is incorrect.<br>looks like A and E is the best choice",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 681359,
            "date": "Wed 28 Sep 2022 04:48",
            "username": "RUKSHANA",
            "content": "the answer is C & E it.<br>Option A should not a correct option,<br>If so it should have failed in the test environment as well",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 677763,
            "date": "Sat 24 Sep 2022 12:47",
            "username": "MunzerR",
            "content": "A and B are true in my opinion<br><br>the other answers don't make sense as the APP was working correctly",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 674264,
            "date": "Tue 20 Sep 2022 16:32",
            "username": "Spamuel",
            "content": "I feel like A is definitely an option, but unsure which other one is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#107",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a serverless web application and maintains different branches of code. The developer wants to avoid updating the Amazon API Gateway target endpoint each time a new code push is performed.<br>What solution would allow the developer to perform a code push efficiently, without the need to update the API Gateway?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#107",
            "answers": [
              {
                "choice": "<p>A. Associate different AWS Lambda functions to an API Gateway target endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create different stages in API Gateway. then associate API Gateway with AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create aliases and versions in AWS Lambda.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Tag the AWS Lambda functions with different names.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 107 discussion",
        "discusstion": [
          {
            "id": 346505,
            "date": "Fri 01 Oct 2021 12:33",
            "username": "faramawi",
            "content": "I will go with C<br><br>I think to \\\"allow the developer to perform a code push efficiently, without the need to update the API Gateway\\\", this will require creating an alias referencing latest lambda version abd which can be referred tousing API Gateway Stage Variable<br><br>Reference<br>https://aws.amazon.com/blogs/compute/using-api-gateway-stage-variables-to-manage-lambda-functions/",
            "upvote_count": "18",
            "selected_answers": ""
          },
          {
            "id": 402193,
            "date": "Thu 04 Nov 2021 10:42",
            "username": "RikardoFrotran",
            "content": "I will go with B<br><br>It asks for push code to different branches, with stages you can define different branches such as DEV or PROD. <br><br>The alias would just be a user-friendly way to address branches.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 727910,
            "date": "Sun 27 Nov 2022 04:29",
            "username": "RyanDDD",
            "content": "CCCCCCCCCCCCCCCCCCCC",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 713682,
            "date": "Tue 08 Nov 2022 11:18",
            "username": "cloud_collector",
            "content": "\\\"...avoid updating the Amazon API Gateway target endpoint...\\\"<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/stage-variables.html#stage-variables-use-cases<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 696737,
            "date": "Mon 17 Oct 2022 04:10",
            "username": "kyozanurohamimelon",
            "content": "The question does not mention about Lambda?serverless web application",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733295,
            "date": "Fri 02 Dec 2022 02:16",
            "username": "hamimelon",
            "content": "serverless web application",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 686817,
            "date": "Wed 05 Oct 2022 13:27",
            "username": "haazybanj",
            "content": "Answer: C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 567241,
            "date": "Sun 13 Mar 2022 23:54",
            "username": "Anthouse",
            "content": "I say C, code branches are used to make a local copy of a repo for a dev to work on it on their local machine before merging changes back into the main branch - which may then be promoted to staging, QA, prod, etc as appropriate. Making an entirely new stage every time a dev pushes code makes no sense. Instead you would push the code into a new Lambda version and update the alias to point to it, with no changes on the API gateway.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 407256,
            "date": "Fri 05 Nov 2021 07:34",
            "username": "Huy",
            "content": "Create 3 stages means you need 3 lambda functions. It is doesn't solve the requirement. It is C. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 398814,
            "date": "Tue 19 Oct 2021 12:13",
            "username": "ajeeshb",
            "content": "I think the answer is B.  APi gateway stages allows you to map APi gateway to multiple Lambda functions. So at the API gateway side this is what we need to do. Using aliases at lambda function enables to use single lambda function with API gateway.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 352616,
            "date": "Sun 17 Oct 2021 06:51",
            "username": "VAG1595",
            "content": "Answer: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 348662,
            "date": "Mon 04 Oct 2021 21:09",
            "username": "TroyMcLure",
            "content": "Correct Answer: \\\"C\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#108",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to deploy an application running on AWS Fargate using Amazon ECS. The application has environment variables that must be passed to a container for the application to initialize.<br>How should the environment variables be passed to the container?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#108",
            "answers": [
              {
                "choice": "<p>A. Define an array that includes the environment variables under the environment parameter within the service definition.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define an array that includes the environment variables under the environment parameter within the task definition.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define an array that includes the environment variables under the entryPoint parameter within the task definition.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Define an array that includes the environment variables under the entryPoint parameter within the service definition.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 108 discussion",
        "discusstion": [
          {
            "id": 159647,
            "date": "Sat 02 Oct 2021 05:00",
            "username": "jodeepak",
            "content": "Answer B<br>https://docs.aws.amazon.com/AmazonECS/latest/userguide/task_definition_parameters.html#container_definitions",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 686818,
            "date": "Wed 05 Oct 2022 13:27",
            "username": "haazybanj",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 622308,
            "date": "Sun 26 Jun 2022 03:39",
            "username": "VijiTu",
            "content": "You can also implement tighter control by setting up an AWS IAM policy to prevent users from creating an EBS volume unless it is encrypted<br><br>Answer c holds good. Hence CD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 539954,
            "date": "Thu 03 Feb 2022 21:29",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 538344,
            "date": "Wed 02 Feb 2022 03:48",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 509134,
            "date": "Sat 25 Dec 2021 14:36",
            "username": "SHAAHIBHUSHANAWS",
            "content": "B<br>https://docs.aws.amazon.com/AmazonECS/latest/userguide/taskdef-envfiles.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 195162,
            "date": "Fri 29 Oct 2021 09:47",
            "username": "Chinta",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174934,
            "date": "Fri 15 Oct 2021 04:08",
            "username": "saeidp",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 160643,
            "date": "Tue 05 Oct 2021 04:52",
            "username": "requiem",
            "content": "answer: B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#109",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer must extend an existing application that is based on the AWS Serverless Application Model (AWS SAM). The developer has used the AWS SAM CLI to create the project. The project contains different AWS Lambda functions.<br>Which combination of commands must the developer use to redeploy the AWS SAM application? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#109",
            "answers": [
              {
                "choice": "<p>A. sam init<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. sam validate<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. sam build<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. sam deploy<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. sam publish<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 109 discussion",
        "discusstion": [
          {
            "id": 655513,
            "date": "Wed 31 Aug 2022 23:43",
            "username": "Chhotu_DBA",
            "content": "C D correct",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 721358,
            "date": "Fri 18 Nov 2022 16:25",
            "username": "dark_cherrymon",
            "content": "it's not B or E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 705702,
            "date": "Thu 27 Oct 2022 17:46",
            "username": "cwit63",
            "content": "C & D are correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#110",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer manages an application that interacts with Amazon RDS. After observing slow performance with read queries, the developer implements Amazon<br>ElastiCache to update the cache immediately following the primary database update.<br>What will be the result of this approach to caching?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#110",
            "answers": [
              {
                "choice": "<p>A. Caching will increase the load on the database instance because the cache is updated for every database update.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Caching will slow performance of the read queries because the cache is updated when the cache cannot find the requested data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The cache will become large and expensive because the infrequently requested data is also written to the cache.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Overhead will be added to the initial response time because the cache is updated only after a cache miss.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 110 discussion",
        "discusstion": [
          {
            "id": 521127,
            "date": "Mon 10 Jan 2022 21:44",
            "username": "CHRIS12722222",
            "content": "C.  This is write through strategy",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 754362,
            "date": "Fri 23 Dec 2022 17:46",
            "username": "Kapello10",
            "content": "dddddddddddddddddddddddddddd",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 748655,
            "date": "Sun 18 Dec 2022 08:19",
            "username": "MeenuSingla",
            "content": "C is the right answer As the data which is not used frequently will also updated with each primary db update",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 731583,
            "date": "Wed 30 Nov 2022 15:11",
            "username": "gpit",
            "content": "C is wrong because you can always set TTL to the cached to reduce the size.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 721362,
            "date": "Fri 18 Nov 2022 16:30",
            "username": "dark_cherrymon",
            "content": "D<br><br>i don't think C is right. your reddis can be custom coded to dump unneeded stuff",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 686821,
            "date": "Wed 05 Oct 2022 13:30",
            "username": "haazybanj",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 681870,
            "date": "Wed 28 Sep 2022 17:40",
            "username": "AulaitQM",
            "content": "It is C.  For those saying it is D, please read the question carefully.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 680657,
            "date": "Tue 27 Sep 2022 12:58",
            "username": "AK34180",
            "content": "It should be d",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 574707,
            "date": "Thu 24 Mar 2022 22:39",
            "username": "Awsexam100",
            "content": "its D<br>There is a cache miss penalty. Each cache miss results in three trips:<br><br>Initial request for data from the cache<br><br>Query of the database for the data<br><br>Writing the data to the cache<br><br>These misses can cause a noticeable delay in data getting to the application.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html<br>Lazy loading",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 514336,
            "date": "Sat 01 Jan 2022 04:35",
            "username": "ayush_1995",
            "content": "maybe C ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 512025,
            "date": "Wed 29 Dec 2021 10:51",
            "username": "reve666",
            "content": "Answer is C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#111",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has a stateful web server on-premises that is being migrated to AWS. The developer must have greater elasticity in the new design.<br>How should the developer re-factor the application to make it more elastic? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#111",
            "answers": [
              {
                "choice": "<p>A. Use pessimistic concurrency on Amazon DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon CloudFront with an Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon CloudFront with an AWS Web Application Firewall.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store session state data in an Amazon DynamoDB table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use an ELB with an Auto Scaling group.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 111 discussion",
        "discusstion": [
          {
            "id": 23364,
            "date": "Mon 20 Sep 2021 06:27",
            "username": "newbie2019",
            "content": "Correct, D+E",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 678893,
            "date": "Sun 25 Sep 2022 16:27",
            "username": "GenePoole",
            "content": "A - Not really relevant<br>B - Stateful suggests non static requests, so does this really help?<br>C - WAF is for security not elasticity<br>D - As the app is stateful the sessions need to go somewhere, so this makes sense.<br>E - Allows the app running on EC2 to scale, this is your elasticity.<br><br>elasticity<br>1. the ability of an object or material to resume its normal shape after being stretched or compressed; stretchiness.<br>2.ability to change and adapt; adaptability.",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 633733,
            "date": "Tue 19 Jul 2022 21:56",
            "username": "sivsgahmed308",
            "content": "I will go with B & E - If you read the question carefully - 'increase its elasticity'. B & E is a way to increase its elasticity.To me, for a stateful web server, Cloudfornt has nothing to do. So B and C is not the right option",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 669438,
            "date": "Thu 15 Sep 2022 05:01",
            "username": "ahmed308",
            "content": "To me, for a stateful web server, Cloudfornt has nothing to do. So B and C is not the right option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 573698,
            "date": "Wed 23 Mar 2022 15:45",
            "username": "skb1996skb1996",
            "content": "Should we not use ELB as an origin for Cloudfront?<br>Cache management can be done nicely, also Cloudfront can serve dynamic content, not sure why we are not considering it.<br><br>As for me B, E is the answer. D is correct, but the B, E can also handle this, as better pair upAlso found this in docs ,<br><br>\\\"Some advantages with utilizing sticky sessions are that it=E2=80=99s cost effective due to the fact you are storing sessions on the same web servers running your applications and that retrieval of those sessions is generally fast because it eliminates network latency. A drawback for using storing sessions on an individual node is that in the event of a failure, you are likely to lose the sessions that were resident on the failed node. In addition, in the event the number of your web servers change, for example a scale-up scenario, it=E2=80=99s possible that the traffic may be unequally spread across the web servers as active sessions may exist on particular servers. If not mitigated properly, this can hinder the scalability of your application\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 573701,
            "date": "Wed 23 Mar 2022 15:47",
            "username": "skb1996",
            "content": "Also found this in docs ,<br><br>\\\"Some advantages with utilizing sticky sessions are that it=E2=80=99s cost effective due to the fact you are storing sessions on the same web servers running your applications and that retrieval of those sessions is generally fast because it eliminates network latency. A drawback for using storing sessions on an individual node is that in the event of a failure, you are likely to lose the sessions that were resident on the failed node. In addition, in the event the number of your web servers change, for example a scale-up scenario, it=E2=80=99s possible that the traffic may be unequally spread across the web servers as active sessions may exist on particular servers. If not mitigated properly, this can hinder the scalability of your application\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 373735,
            "date": "Sat 06 Nov 2021 10:14",
            "username": "valourpetervu",
            "content": "How come nobody is talking about the \\\"stateful\\\" keyword of the question. The answer is actually C and EStateful indicates D option. C has nothing to do with \\\"flexibility in the new design\\\". So E should be the next answer.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 507539,
            "date": "Thu 23 Dec 2021 03:44",
            "username": "petervu",
            "content": "Stateful indicates D option. C has nothing to do with \\\"flexibility in the new design\\\". So E should be the next answer.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 351234,
            "date": "Fri 05 Nov 2021 09:09",
            "username": "VAG1595",
            "content": "Answer: D,E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 173623,
            "date": "Sun 24 Oct 2021 10:20",
            "username": "saeidp",
            "content": "D and E are correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 154325,
            "date": "Sun 17 Oct 2021 13:55",
            "username": "WilsonNF",
            "content": "D & E are correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 127684,
            "date": "Sun 17 Oct 2021 04:17",
            "username": "Scarback",
            "content": "Resp: D E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 69383,
            "date": "Thu 30 Sep 2021 04:38",
            "username": "ginfizzbearginfizzbearCodeSlinger777Maiconalexaws1232312321_",
            "content": "It is B an D.  <br>B)https://linuxacademy.com/community/show/6241-why-use-autoscaling-and-cdn-cloudfront-at-the-same-time/<br>D) https://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KGu3LN1mb6yGbg5Dh26/stateless-application-servicesSorry, it's B (see link) and Ehttps://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.htmlB is wrong. Cloudfront is for static files, not a webserver app!You can use ELB as a origin for Cloudfront and have a webserver behind ELB.  But I'd go with D/E for the examYou can do all that but that it's not mentioned about what's behind the alb and the best solution is one which is more flexible here, dynamodb is made for scaling",
            "upvote_count": "11641",
            "selected_answers": ""
          },
          {
            "id": 69384,
            "date": "Fri 01 Oct 2021 03:54",
            "username": "ginfizzbearCodeSlinger777Maiconalexaws1232312321_",
            "content": "Sorry, it's B (see link) and Ehttps://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.htmlB is wrong. Cloudfront is for static files, not a webserver app!You can use ELB as a origin for Cloudfront and have a webserver behind ELB.  But I'd go with D/E for the examYou can do all that but that it's not mentioned about what's behind the alb and the best solution is one which is more flexible here, dynamodb is made for scaling",
            "upvote_count": "1641",
            "selected_answers": ""
          },
          {
            "id": 71032,
            "date": "Sun 10 Oct 2021 15:24",
            "username": "CodeSlinger777Maiconalexaws1232312321_",
            "content": "B is wrong. Cloudfront is for static files, not a webserver app!You can use ELB as a origin for Cloudfront and have a webserver behind ELB.  But I'd go with D/E for the examYou can do all that but that it's not mentioned about what's behind the alb and the best solution is one which is more flexible here, dynamodb is made for scaling",
            "upvote_count": "641",
            "selected_answers": ""
          },
          {
            "id": 211249,
            "date": "Sat 30 Oct 2021 21:45",
            "username": "Maiconalexaws1232312321_",
            "content": "You can use ELB as a origin for Cloudfront and have a webserver behind ELB.  But I'd go with D/E for the examYou can do all that but that it's not mentioned about what's behind the alb and the best solution is one which is more flexible here, dynamodb is made for scaling",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 645472,
            "date": "Thu 11 Aug 2022 14:40",
            "username": "alexaws1232312321_",
            "content": "You can do all that but that it's not mentioned about what's behind the alb and the best solution is one which is more flexible here, dynamodb is made for scaling",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67683,
            "date": "Mon 27 Sep 2021 20:26",
            "username": "kinetic1g",
            "content": "D.  Store session state data in an Amazon DynamoDB tableE.  Use an ELB with an Auto Scaling group",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 46567,
            "date": "Mon 27 Sep 2021 17:27",
            "username": "awscertified",
            "content": "D.  Store session state data in an Amazon DynamoDB tableE.  Use an ELB with an Auto Scaling group",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 30614,
            "date": "Tue 21 Sep 2021 20:24",
            "username": "aws_Tamilan",
            "content": "DED.  Store session state data in an Amazon DynamoDB tableE.  Use an ELB with an Auto Scaling group",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#112",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has a legacy application that is hosted on-premises. Other applications hosted on AWS depend on the on-premises application for proper functioning.<br>In case of any application errors, the developer wants to be able to use Amazon CloudWatch to monitor and troubleshoot all applications from one place.<br>How can the developer accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#112",
            "answers": [
              {
                "choice": "<p>A. Install an AWS SDK on the on-premises server to automatically send logs to CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Download the CloudWatch agent to the on-premises server. Configure the agent to use IAM user credentials with permissions for CloudWatch.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Upload log files from the on-premises server to Amazon S3 and have CloudWatch read the files.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload log files from the on-premises server to an Amazon EC2 instance and have the instance forward the logs to CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 112 discussion",
        "discusstion": [
          {
            "id": 156635,
            "date": "Sun 26 Sep 2021 05:44",
            "username": "WilsonNF",
            "content": "B.  Download the CloudWatch agent to the on-premises server. Configure the agent to use IAM user credentials with permissions for CloudWatch.<br>KEY: monitoring on premiseCloudWatch Agent",
            "upvote_count": "28",
            "selected_answers": ""
          },
          {
            "id": 243390,
            "date": "Tue 26 Oct 2021 15:05",
            "username": "RicardoD",
            "content": "B is the answer<br><br>Install the agent and, create a user and give it permission to it to access cloudwatch functionalities",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 748657,
            "date": "Sun 18 Dec 2022 08:23",
            "username": "MeenuSingla",
            "content": "B . As cloud watch agent works well when it comes to onprem monitoring on clod watch",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 539992,
            "date": "Thu 03 Feb 2022 22:13",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 438441,
            "date": "Tue 02 Nov 2021 05:56",
            "username": "Juanlufr",
            "content": "Answer B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 194170,
            "date": "Mon 25 Oct 2021 07:57",
            "username": "Chinta",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 174822,
            "date": "Mon 25 Oct 2021 01:31",
            "username": "saeidp",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 166424,
            "date": "Mon 18 Oct 2021 16:52",
            "username": "rasiram",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159984,
            "date": "Tue 12 Oct 2021 17:18",
            "username": "requiem",
            "content": "answer: B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#113",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing a serverless application with two AWS Lambda functions to process photos. One Lambda function stores objects in an Amazon S3 bucket and stores the associated metadata in an Amazon DynamoDB table. The other Lambda function fetches the objects from the S3 bucket by using the metadata from the DynamoDB table. Both Lambda functions use the same Python library to perform complex computations and are approaching the quota for the maximum size of zipped deployment packages.<br>What should the developer do to reduce the size of the Lambda deployment packages with the LEAST operational overhead?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#113",
            "answers": [
              {
                "choice": "<p>A. Package each Python library in its own .zip file archive. Deploy each Lambda function with its own copy of the library.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Lambda layer with the required Python library. Use the Lambda layer in both Lambda functions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Combine the two Lambda functions into one Lambda function. Deploy the Lambda function as a single .zip file archive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Download the Python library to an S3 bucket. Program the Lambda functions to reference the object URLs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 113 discussion",
        "discusstion": [
          {
            "id": 760431,
            "date": "Thu 29 Dec 2022 00:45",
            "username": "d2b0",
            "content": "Right answer is B for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 748658,
            "date": "Sun 18 Dec 2022 08:25",
            "username": "MeenuSingla",
            "content": "Lamba layers is useful in this case . Right answer is B for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 690214,
            "date": "Sun 09 Oct 2022 15:27",
            "username": "habroshabros",
            "content": "B.  Lambda layers are reusable across modules when required tooFunctions*",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 690215,
            "date": "Sun 09 Oct 2022 15:27",
            "username": "habros",
            "content": "Functions*",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 684988,
            "date": "Sun 02 Oct 2022 19:55",
            "username": "haazybanj",
            "content": "Answer is Bhttps://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 674113,
            "date": "Tue 20 Sep 2022 14:00",
            "username": "colintkn",
            "content": "B is the answer. Use layers for dependencies",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#114",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is adding a feature to a client-side application so that users can upload videos to an Amazon S3 bucket.<br>What is the MOST secure way to give the application the ability to write files to the S3 bucket?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#114",
            "answers": [
              {
                "choice": "<p>A. Update the S3 bucket policy to allow public write access. Allow any user to upload videos by removing the need to handle user authentication within the client- side application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new IAM policy and a corresponding IAM user with permissions to write to the S3 bucket. Store the key and the secret for the user in the application code. Use the key to authenticate the video uploads.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the API layer of the application to have a new endpoint that creates signed URLs that allow an object to be put into the S3 bucket. Generate a presigned URL through this API call in the client application. Upload the video by using the signed URL.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Generate a new IAM key and a corresponding secret by using the AWS account root user credentials. Store the key and the secret for the user in the application code. Use the key to authenticate the video uploads.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 114 discussion",
        "discusstion": [
          {
            "id": 511406,
            "date": "Tue 28 Dec 2021 18:49",
            "username": "t33me",
            "content": "Looks like correct answer is \\\"C\\\"",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731139,
            "date": "Wed 30 Nov 2022 06:41",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 523349,
            "date": "Fri 14 Jan 2022 05:48",
            "username": "successzy",
            "content": "Answer should be C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 521400,
            "date": "Tue 11 Jan 2022 09:48",
            "username": "ersahinco",
            "content": "Answer: C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#115",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building an application for stock trading. The application needs sub-millisecond latency for processing trade requests. The company uses Amazon<br>DynamoDB to store all the trading data that is used to process each trading request.<br>A development team performs load testing on the application and finds that the data retrieval time is higher than expected. The development team needs a solution that reduces the data retrieval time with the least possible effort.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#115",
            "answers": [
              {
                "choice": "<p>A. Add local secondary indexes (LSIs) for the trading data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the trading data in Amazon S3, and use S3 Transfer Acceleration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add retries with exponential backoff for DynamoDB queries.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use DynamoDB Accelerator (DAX) to cache the trading data.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 115 discussion",
        "discusstion": [
          {
            "id": 514641,
            "date": "Sat 01 Jan 2022 20:59",
            "username": "justaek1CHRIS12722222",
            "content": "I go with D<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html<br><br>Amazon DynamoDB is designed for scale and performance. In most cases, the DynamoDB response times can be measured in single-digit milliseconds. However, there are certain use cases that require response times in microseconds. For these use cases, DynamoDB Accelerator (DAX) delivers fast response times for accessing eventually consistent data.<br><br>keywords are \\\"time required to get data\\\", \\\"significantly improves data retrieval time\\\" and \\\"least amount of work\\\"Agreed. answerD<br>You just need to click check box to enable DAX so it is least amount of work.<br>LSI must be enabled when the database is created and cant be created afterwards. Since the database is already existing, we cannot configure LSI. So final answer is D",
            "upvote_count": "910",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 518984,
            "date": "Fri 07 Jan 2022 14:32",
            "username": "CHRIS12722222",
            "content": "Agreed. answerD<br>You just need to click check box to enable DAX so it is least amount of work.<br>LSI must be enabled when the database is created and cant be created afterwards. Since the database is already existing, we cannot configure LSI. So final answer is D",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 517800,
            "date": "Wed 05 Jan 2022 21:56",
            "username": "ej123ej123Edwars",
            "content": "I think Dactually.... DAX makes some assumptions and requires a VPC/subnet etc.... since the question states \\\"least amount of work\\\" now I think it might be AWell, LSI needs to be created with the table, so the developers would need to recreate table from scratch in order to create this LSI too",
            "upvote_count": "724",
            "selected_answers": ""
          },
          {
            "id": 517802,
            "date": "Wed 05 Jan 2022 21:59",
            "username": "ej123Edwars",
            "content": "actually.... DAX makes some assumptions and requires a VPC/subnet etc.... since the question states \\\"least amount of work\\\" now I think it might be AWell, LSI needs to be created with the table, so the developers would need to recreate table from scratch in order to create this LSI too",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 532342,
            "date": "Tue 25 Jan 2022 19:48",
            "username": "Edwars",
            "content": "Well, LSI needs to be created with the table, so the developers would need to recreate table from scratch in order to create this LSI too",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 733317,
            "date": "Fri 02 Dec 2022 02:37",
            "username": "hamimelon",
            "content": "D.  DAX is designed for caching reads.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731140,
            "date": "Wed 30 Nov 2022 06:43",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 653282,
            "date": "Mon 29 Aug 2022 06:50",
            "username": "indralight79",
            "content": "I think D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 515146,
            "date": "Sun 02 Jan 2022 19:51",
            "username": "striverPazh",
            "content": "A is the correct answer in my opinion.<br><br>DAX can only help if your RCUs are throttled. The question focuses on improving the latency which forces to think in somehow optimizing the query operation, And that's why adding LSI will solve the problem.You can't add a LSI after the table is created, and moreover, dax can be used for caching. So in this use case, it should be dax",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 589092,
            "date": "Thu 21 Apr 2022 06:55",
            "username": "Pazh",
            "content": "You can't add a LSI after the table is created, and moreover, dax can be used for caching. So in this use case, it should be dax",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 511877,
            "date": "Wed 29 Dec 2021 07:53",
            "username": "lavy",
            "content": "Agree - A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#116",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to build and deploy a serverless application that has an API that mobile clients will use. The API will use Amazon DynamoDB and Amazon<br>OpenSearch Service (Amazon Elasticsearch Service) as data sources. Responses that are sent to the clients will contain aggregated data from both data sources.<br>The developer must minimize the number of API endpoints and must minimize the number of API calls that are required to retrieve the necessary data.<br>Which solution should the developer use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#116",
            "answers": [
              {
                "choice": "<p>A. GraphQL API on AWS AppSync<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. REST API on Amazon API Gateway<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. GraphQL API on an Amazon EC2 instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. REST API on AWS Elastic Beanstalk<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 116 discussion",
        "discusstion": [
          {
            "id": 657554,
            "date": "Fri 02 Sep 2022 17:27",
            "username": "JOL86",
            "content": "I think it should be A.  AppSync has direct integration with DynamoDB and OpenSearch, and it talks about minimizing number of API endpoints. With AppSync you only have one endpoint and the client asks for the data it wants.<br><br>API Gateway would need several endpoints for this",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 692785,
            "date": "Wed 12 Oct 2022 08:52",
            "username": "jasmeet94",
            "content": "Answer is A<br>AppSync is a managed service that uses GraphQL<br>=E2=80=A2 GraphQL makes it easy for applications to get exactly the data they need.<br>=E2=80=A2 This includes combining data from one or more sources =E2=80=A2 NoSQL data stores, Relational databases, HTTP APIs...<br>=E2=80=A2 Integrates with DynamoDB, Aurora, Elasticsearch & others =E2=80=A2 Custom sources with AWS Lambda<br>=E2=80=A2 Retrieve data in real-time with WebSocket or MQTT on WebSocket =E2=80=A2 For mobile apps: local data access & data synchronization<br>=E2=80=A2 It all starts with uploading one GraphQL schema",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 678381,
            "date": "Sun 25 Sep 2022 05:31",
            "username": "david00",
            "content": "Option A: https://aws.amazon.com/appsync/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 673800,
            "date": "Tue 20 Sep 2022 06:55",
            "username": "Jabol",
            "content": "Looks like perfect example for A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 660352,
            "date": "Mon 05 Sep 2022 18:21",
            "username": "Vinafec",
            "content": "Clear A: https://aws.amazon.com/appsync/<br><br>- single endpoint with DynamoDB and ElasticSearch integration<br>- serverless",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 655517,
            "date": "Wed 31 Aug 2022 23:48",
            "username": "Chhotu_DBA",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#117",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Lambda function processes data before sending it to a downstream service. Each piece of data is approximately 1MB in size. After a security audit, the function is now required to encrypt the data before sending it downstream.<br>Which API call is required to perform the encryption?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#117",
            "answers": [
              {
                "choice": "<p>A. Pass the data to the KMS ReEncrypt API for encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the KMS GenerateDataKey API to get an encryption key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the KMS GenerateDataKeyWithoutPlainText API to get an encryption key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Pass the data to KMS as part of the Encrypt API for encryption.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 117 discussion",
        "discusstion": [
          {
            "id": 517184,
            "date": "Wed 05 Jan 2022 06:26",
            "username": "laxit",
            "content": "GenerateDataKev<br><br>spelling error bros =F0=9F=91=8A",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 619558,
            "date": "Tue 21 Jun 2022 03:45",
            "username": "JAMG54",
            "content": "why not C? KMS only supports a max of kb of data for encryption and the questions says 1MB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590527,
            "date": "Sat 23 Apr 2022 12:01",
            "username": "Ivanyan",
            "content": "B.  Use the KMS GenerateDataKey API to get an encryption key.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 535921,
            "date": "Sun 30 Jan 2022 05:27",
            "username": "weilun_tann",
            "content": "B. <br><br>https://docs.aws.amazon.com/kms/latest/developerguide/programming-encryption.html<br><br>The examples in this topic use the Encrypt, Decrypt, and ReEncrypt operations in the AWS KMS API.<br><br>These operations are designed to encrypt and decrypt data keys. They use an AWS KMS keys in the encryption operations and they cannot accept more than 4 KB (4096 bytes) of data. Although you might use them to encrypt small amounts of data, such as a password or RSA key, they are not designed to encrypt application data.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521842,
            "date": "Wed 12 Jan 2022 01:37",
            "username": "ven1234",
            "content": "Ans: B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 516398,
            "date": "Tue 04 Jan 2022 10:22",
            "username": "ccamile",
            "content": "I think is B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 515211,
            "date": "Sun 02 Jan 2022 21:46",
            "username": "CHRIS12722222VlastomevltCHRIS12722222",
            "content": "C.  A more secured option since lambda needs to process data before encrypting the dataYou can process the data and then call the KMS when you need the key.it says now.Agreed",
            "upvote_count": "1121",
            "selected_answers": ""
          },
          {
            "id": 539765,
            "date": "Thu 03 Feb 2022 15:45",
            "username": "Vlasto",
            "content": "You can process the data and then call the KMS when you need the key.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 517917,
            "date": "Thu 06 Jan 2022 03:37",
            "username": "mevltCHRIS12722222",
            "content": "it says now.Agreed",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 536779,
            "date": "Mon 31 Jan 2022 10:18",
            "username": "CHRIS12722222",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515032,
            "date": "Sun 02 Jan 2022 15:51",
            "username": "denccc",
            "content": "Would go for B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#118",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a web application that runs on Amazon EC2 instances with a custom Amazon Machine Image (AMI). The company uses AWS CloudFormation to provision the application. The application runs in the us-east-1 Region, and the company needs to deploy the application to the us-west-1 Region.<br>An attempt to create the AWS CloudFormation stack in us-west-1 fails. An error message states that the AMI ID does not exist. A developer must resolve this error with a solution that uses the least amount of operational overhead.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#118",
            "answers": [
              {
                "choice": "<p>A. Change the AWS CloudFormation templates for us-east-1 and us-west-1 to use an AWS AMI. Relaunch the stack for both Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Copy the custom AMI from us-east-1 to us-west-1. Update the AWS CloudFormation template for us-west-1 to refer to AMI ID for the copied AMI. Relaunch the stack.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Build the custom AMI in us-west-1. Create a new AWS CloudFormation template to launch the stack in us-west-1 with the new AMI ID. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Manually deploy the application outside AWS CloudFormation in us-west-1.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 118 discussion",
        "discusstion": [
          {
            "id": 690231,
            "date": "Sun 09 Oct 2022 15:36",
            "username": "habroshabros",
            "content": "B as AMI is region specific. Create New AMIs for each individual regionhttps://aws.amazon.com/blogs/aws/ec2-ami-copy-between-regions/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 690233,
            "date": "Sun 09 Oct 2022 15:38",
            "username": "habros",
            "content": "https://aws.amazon.com/blogs/aws/ec2-ami-copy-between-regions/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655634,
            "date": "Thu 01 Sep 2022 02:48",
            "username": "Chhotu_DBA",
            "content": "B correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#119",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer wants to run a PHP website with an NGINX proxy and package them as Docker containers in one environment. The developer wants a managed environment with automated provisioning and load balancing. The developer cannot change the configuration and must minimize operational overhead.<br>How should the developer build the website to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#119",
            "answers": [
              {
                "choice": "<p>A. Create a new application in AWS Elastic Beanstalk that is preconfigured for a multicontainer Docker environment. Upload the code, and deploy it to a web server environment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the code on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Construct an AWS CloudFormation template that launches Amazon EC2 instances. Install and configure the PHP code by using cfn helper scripts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload the code for the PHP website into an Amazon S3 bucket. Host the website from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 119 discussion",
        "discusstion": [
          {
            "id": 521551,
            "date": "Tue 11 Jan 2022 14:21",
            "username": "ersahinco",
            "content": "Answer: A",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 748669,
            "date": "Sun 18 Dec 2022 08:37",
            "username": "MeenuSingla",
            "content": "Automatic provisioning points to EB . Correct answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733328,
            "date": "Fri 02 Dec 2022 02:49",
            "username": "hamimelonS4RPYK3VIC5",
            "content": "What is wrong with B?As I understood because LB provisioning should be automated too",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 748990,
            "date": "Sun 18 Dec 2022 15:28",
            "username": "S4RPYK3VIC5",
            "content": "As I understood because LB provisioning should be automated too",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721432,
            "date": "Fri 18 Nov 2022 17:51",
            "username": "dark_cherrymon",
            "content": "i voted A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 694665,
            "date": "Fri 14 Oct 2022 12:29",
            "username": "Arnaud92",
            "content": "A, use beanstalk",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#120",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a website that displays a daily newsletter. When a user visits the website, an AWS Lambda function processes the browser's request and queries the company's on-premises database to obtain the current newsletter. The newsletters are stored in English. The Lambda function uses the Amazon Translate<br>TranslateText API operation to translate the newsletters, and the translation is displayed to the user.<br>Due to an increase in popularity, the website's response time has slowed. The database is overloaded. The company cannot change the database and needs a solution that improves the response time of the Lambda function.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#120",
            "answers": [
              {
                "choice": "<p>A. Change to asynchronous Lambda function invocation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Cache the translated newsletters in the Lambda /tmp directory.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable TranslateText API caching.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the Lambda function to use parallel processing.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 120 discussion",
        "discusstion": [
          {
            "id": 659150,
            "date": "Sun 04 Sep 2022 11:40",
            "username": "JOL86",
            "content": "I'm not sure how making it asynchronous would work? The user needs to call the Lambda and get the translated newsletter back. Making it async wouldn't improve performance of doing that.<br><br>Same with the database being overloaded. If we add parallel processing, the database will still be overloaded. I also don't think the TranslateText API has caching<br><br>I'm thinking B as all the others don't make sense. Although caching with the /tmp directory seems a little strange, it can be used for that purpose as mentioned here:<br><br>https://aws.amazon.com/blogs/compute/choosing-between-aws-lambda-data-storage-options-in-web-apps/",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 727935,
            "date": "Sun 27 Nov 2022 06:44",
            "username": "RyanDDD",
            "content": "We can use /tmp as temp cache for Lambda.<br>https://aws.amazon.com/blogs/compute/choosing-between-aws-lambda-data-storage-options-in-web-apps/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721437,
            "date": "Fri 18 Nov 2022 17:56",
            "username": "dark_cherrymon",
            "content": "B, so what if /tmp isn't shared you can redirect it to another lambda that does have it cached",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718516,
            "date": "Tue 15 Nov 2022 06:46",
            "username": "bont",
            "content": "Lambda doesn't share \\\"/tmp\\\" directory across multiple executions hence the application will return error if the execution context has expired since it won't be able to find the cache stored stored in the previous /tmp directory so the application will need to be dynamic to check if the cache exists or fetch it from the database.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 681895,
            "date": "Wed 28 Sep 2022 17:59",
            "username": "AulaitQM",
            "content": "I vote for B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 678393,
            "date": "Sun 25 Sep 2022 05:45",
            "username": "david00",
            "content": "Async only makes it slower, doesn't improve the db speed or page load",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 677616,
            "date": "Sat 24 Sep 2022 06:55",
            "username": "Vinafec",
            "content": "Going with B. <br>Why translate the same newsletter a potentially infinite number of times?<br><br>Going async would respond faster, but without result.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658310,
            "date": "Sat 03 Sep 2022 12:01",
            "username": "Danbraga",
            "content": "Why not \\\"D\\\". It seems the same as A. ...",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655522,
            "date": "Wed 31 Aug 2022 23:53",
            "username": "Chhotu_DBA",
            "content": "asynchronous, A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#121",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an AWS CloudFormation template for an application. The application includes an Amazon RDS database. The password to be set for the resource's MasterUserPassword property is already stored in AWS Secrets Manager.<br>How can the developer reference the value of the password in the CloudFormation template?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#121",
            "answers": [
              {
                "choice": "<p>A. Use a parameter in the CloudFormation template with the same name of the secret.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the ssm dynamic reference by specifying the name of the secret and its version.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the secretsmanager dynamic reference by specifying the appropriate reference-key segment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the ssm-secure dynamic reference by specifying the name of the secret and its version.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 121 discussion",
        "discusstion": [
          {
            "id": 687114,
            "date": "Wed 05 Oct 2022 19:57",
            "username": "haazybanj",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 679466,
            "date": "Mon 26 Sep 2022 08:23",
            "username": "GeePete",
            "content": "C:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 672592,
            "date": "Sun 18 Sep 2022 18:44",
            "username": "robbyboss",
            "content": "C: https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655524,
            "date": "Wed 31 Aug 2022 23:54",
            "username": "Chhotu_DBA",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#122",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application is using Amazon DynamoDB as its data store, and should be able to read 100 items per second as strongly consistent reads. Each item is 5 KB in size.<br>To what value should the table's provisioned read throughput be set?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#122",
            "answers": [
              {
                "choice": "<p>A. 50 read capacity units<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 100 read capacity units<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 200 read capacity units<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. 500 read capacity units<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 122 discussion",
        "discusstion": [
          {
            "id": 529273,
            "date": "Fri 21 Jan 2022 18:46",
            "username": "dduenas",
            "content": "1 RCU1 strong consistent read for 4k.5K2RCU. x 100200RCU",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 733754,
            "date": "Fri 02 Dec 2022 14:27",
            "username": "gpit",
            "content": "Well calculated by dduenas!",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 721440,
            "date": "Fri 18 Nov 2022 17:59",
            "username": "dark_cherrymon",
            "content": "CCCCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 696054,
            "date": "Sun 16 Oct 2022 09:21",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 659533,
            "date": "Sun 04 Sep 2022 22:49",
            "username": "criscg75",
            "content": "C is the answer",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 542738,
            "date": "Mon 07 Feb 2022 23:46",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 520164,
            "date": "Sun 09 Jan 2022 12:43",
            "username": "MrAlevy",
            "content": "Nope, it's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 520160,
            "date": "Sun 09 Jan 2022 12:40",
            "username": "MrAlevyCHRIS12722222",
            "content": "D<br>5KB item - 2 RCU, in hight consistent mode - 2*24 RCU per item. 4 * 100400 RCU for all.No need to multiply by 2",
            "upvote_count": "26",
            "selected_answers": ""
          },
          {
            "id": 523682,
            "date": "Fri 14 Jan 2022 20:02",
            "username": "CHRIS12722222",
            "content": "No need to multiply by 2",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 511648,
            "date": "Wed 29 Dec 2021 00:43",
            "username": "SHAAHIBHUSHANAWS",
            "content": "C<br>4KB with strongly consistent read needs 4 RCU. 100 items will need 2*100 i.e. 200 RCU",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#123",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently migrated its web, application, and NoSQL database tiers to AWS. The company is using Auto Scaling to scale the web and application tiers.<br>More than 95 percent of the Amazon DynamoDB requests are repeated read-requests.<br>How can the DynamoDB NoSQL tier be scaled up to cache these repeated requests?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#123",
            "answers": [
              {
                "choice": "<p>A. Amazon EMR<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon DynamoDB Accelerator<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon SQS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudFront<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 123 discussion",
        "discusstion": [
          {
            "id": 29045,
            "date": "Fri 24 Sep 2021 01:19",
            "username": "dumma",
            "content": "Correct, DAX is the caching solution for DynamoDB",
            "upvote_count": "19",
            "selected_answers": ""
          },
          {
            "id": 543287,
            "date": "Tue 08 Feb 2022 20:10",
            "username": "JP_PA",
            "content": "ANS : B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 350445,
            "date": "Fri 05 Nov 2021 13:20",
            "username": "VAG1595",
            "content": "Answer: B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 319827,
            "date": "Sat 30 Oct 2021 23:50",
            "username": "wils3",
            "content": "Ans: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 173064,
            "date": "Mon 25 Oct 2021 03:32",
            "username": "saeidp",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 130324,
            "date": "Sat 23 Oct 2021 10:40",
            "username": "mlyuAWSforWork",
            "content": "B is certainly the only option for scaling up the DynamoDB. <br>However, I believe caching in cloudfront should be a more effective way as saving the round trip from cloudfront to DynamoDB. <br>Cloudfront also serve the caching function as well.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html<br>What do you guys think?because they asked particularly for the Dynamo DB tier \\\"DynamoDB NoSQL tier be scaled up to cache these repeated requests\\\"",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 143681,
            "date": "Sun 24 Oct 2021 08:15",
            "username": "AWSforWork",
            "content": "because they asked particularly for the Dynamo DB tier \\\"DynamoDB NoSQL tier be scaled up to cache these repeated requests\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 125644,
            "date": "Thu 14 Oct 2021 01:46",
            "username": "Scarback",
            "content": "Resp: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67618,
            "date": "Sun 10 Oct 2021 21:38",
            "username": "kinetic1g",
            "content": "B.  Amazon DynamoDB Accelerator",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 46293,
            "date": "Sun 03 Oct 2021 12:43",
            "username": "awscertified",
            "content": "B.  Amazon DynamoDB Accelerator",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 36889,
            "date": "Fri 01 Oct 2021 09:03",
            "username": "doofus",
            "content": "https://aws.amazon.com/dynamodb/dax/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 32034,
            "date": "Sun 26 Sep 2021 09:45",
            "username": "FHU",
            "content": "The correct answer is (B).",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 30422,
            "date": "Sat 25 Sep 2021 12:00",
            "username": "aws_Tamilan",
            "content": "B.  Amazon DynamoDB Accelerator",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#124",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building an application to track athlete performance using an Amazon DynamoDB table. Each item in the table is identified by a partition key<br>(user_id) and a sort key (sport_name). The table design is shown below:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04119/0006200001.png\" class=\"in-exam-image\"><br>(Note: Not all table attributes are shown)<br>A Developer is asked to write a leaderboard application to display the top performers (user_id) based on the score for each sport_name.<br>What process will allow the Developer to extract results MOST efficiently from the DynamoDB table?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#124",
            "answers": [
              {
                "choice": "<p>A. Use a DynamoDB query operation with the key attributes of user_id and sport_name and order the results based on the score attribute.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a global secondary index with a partition key of sport_name and a sort key of score, and get the results<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a DynamoDB scan operation to retrieve scores and user_id based on sport_name, and order the results based on the score attribute.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a local secondary index with a primary key of sport_name and a sort key of score and get the results based on the score attribute.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 124 discussion",
        "discusstion": [
          {
            "id": 366078,
            "date": "Sun 10 Oct 2021 06:19",
            "username": "modarovMal_8",
            "content": "Partition key of the Local Secondary Index must me the same as the one in a base table. So, you have to use Global Secondary Index and the right answear is BWell explained!",
            "upvote_count": "242",
            "selected_answers": ""
          },
          {
            "id": 447032,
            "date": "Mon 01 Nov 2021 03:26",
            "username": "Mal_8",
            "content": "Well explained!",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 348363,
            "date": "Sun 26 Sep 2021 17:12",
            "username": "Ronak1",
            "content": "B is correct answer since score should be sort_key and results can be fetch in asc. and desc order based on sort_key",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 653693,
            "date": "Tue 30 Aug 2022 01:14",
            "username": "icebox0e",
            "content": "B is correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 581250,
            "date": "Tue 05 Apr 2022 14:42",
            "username": "gordan",
            "content": "LSI can not be created after creation of the table",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 522207,
            "date": "Wed 12 Jan 2022 15:07",
            "username": "bhawesh31",
            "content": "partition key is changing so GSI",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515674,
            "date": "Mon 03 Jan 2022 13:11",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 506473,
            "date": "Tue 21 Dec 2021 23:04",
            "username": "rabo2021",
            "content": "B, A global secondary index contains a selection of attributes from the base table, but they are organized by a primary key that is different from that of the table. The index key does not need to have any of the key attributes from the table.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 493465,
            "date": "Sat 04 Dec 2021 04:08",
            "username": "hulebadu",
            "content": "Answer is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 489431,
            "date": "Sun 28 Nov 2021 22:47",
            "username": "leliodesouza",
            "content": "Answer: B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 445247,
            "date": "Thu 14 Oct 2021 22:10",
            "username": "hemlatabmega_mind",
            "content": "why not Abecause it will retrieve all the data then you have to filter the result , it's not efficient.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 448342,
            "date": "Fri 05 Nov 2021 17:03",
            "username": "mega_mind",
            "content": "because it will retrieve all the data then you have to filter the result , it's not efficient.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 424208,
            "date": "Thu 14 Oct 2021 13:03",
            "username": "cynthiacy",
            "content": "The answer is B.  One can only set up the local secondary index when creating the table.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 414890,
            "date": "Sun 10 Oct 2021 23:44",
            "username": "filetyaizkazani",
            "content": "why not D?Cannot create LSI on the running table, only during creation",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 423525,
            "date": "Wed 13 Oct 2021 12:07",
            "username": "yaizkazani",
            "content": "Cannot create LSI on the running table, only during creation",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 350446,
            "date": "Mon 04 Oct 2021 05:23",
            "username": "VAG1595",
            "content": "Answer: B",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 346960,
            "date": "Sun 26 Sep 2021 04:00",
            "username": "kwch791",
            "content": "ans is b",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#125",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created a new IAM user that has the s3:PutObject permission to write to a specific Amazon S3 bucket. The S3 bucket uses server-side encryption with AWS KMS managed keys (SSE-KMS) as the default encryption. When an application uses the access key and secret key of the IAM user to call the PutObject API operation, the application receives an access denied error.<br>What should the developer do to resolve this error?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#125",
            "answers": [
              {
                "choice": "<p>A. Update the policy of the IAM user to allow the s3:EncryptionConfiguration action.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the bucket policy of the S3 bucket to allow the IAM user to upload objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the policy of the IAM user to allow the kms:GenerateDataKey action.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the ACL of the S3 bucket to allow the IAM user to upload objects.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 125 discussion",
        "discusstion": [
          {
            "id": 674132,
            "date": "Tue 20 Sep 2022 14:22",
            "username": "colintkn",
            "content": "Answer is C, https://aws.amazon.com/premiumsupport/knowledge-center/s3-access-denied-error-kms/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 672602,
            "date": "Sun 18 Sep 2022 18:56",
            "username": "robbyboss",
            "content": "reference: https://aws.amazon.com/premiumsupport/knowledge-center/s3-access-denied-error-kms/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#126",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application running on Amazon EC2 instances must access objects within an Amazon S3 bucket that are encrypted using server-side encryption using AWS<br>KMS encryption keys (SSE-KMS). The application must have access to the customer master key (CMK) to decrypt the objects.<br>Which combination of steps will grant the application access? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#126",
            "answers": [
              {
                "choice": "<p>A. Write an S3 bucket policy that grants the bucket access to the key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Grant access to the key in the IAM EC2 role attached to the application's EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Write a key policy that enables IAM policies to grant access to the key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Grant access to the key in the S3 bucket's ACL<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a Systems Manager parameter that exposes the KMS key to the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 126 discussion",
        "discusstion": [
          {
            "id": 350268,
            "date": "Thu 30 Sep 2021 05:57",
            "username": "ynov07",
            "content": "B C<br>1.Open the AWS KMS console, and then view the key's policy document using the policy view. Modify the key's policy to grant the IAM user permissions for the kms:GenerateDataKey and kms:Decrypt actions at minimum.<br>2.Open the IAM console. Add a policy to the IAM user that grants the permissions to upload and download from the bucket.<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-default-encryption/",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 543292,
            "date": "Tue 08 Feb 2022 20:19",
            "username": "JP_PA",
            "content": "ANS: B&C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 520226,
            "date": "Sun 09 Jan 2022 14:47",
            "username": "CHRIS12722222CHRIS12722222",
            "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/key-policy-requirements-EBS-encryption.html<br>I vote BCKMS stores in keys not secrets manager",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 520233,
            "date": "Sun 09 Jan 2022 14:57",
            "username": "CHRIS12722222",
            "content": "KMS stores in keys not secrets manager",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434096,
            "date": "Sat 06 Nov 2021 11:53",
            "username": "KinleyChristian",
            "content": "First option would be B<br>Confused between C and E for second option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 424221,
            "date": "Mon 01 Nov 2021 05:29",
            "username": "cynthiacy",
            "content": "The answer should be B and C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 400138,
            "date": "Sun 31 Oct 2021 21:01",
            "username": "ajeeshb",
            "content": "Answers: B & C. <br>For the application to access the CMK for decryption, the EC2 instance role should have the permission to access the Key. Also the KMS key policy should allow access to the root account and thus all IAM policies in the account.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 387344,
            "date": "Mon 25 Oct 2021 06:11",
            "username": "snssqs",
            "content": "I meant to write B C sorry",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 387343,
            "date": "Tue 19 Oct 2021 18:36",
            "username": "snssqs",
            "content": "looks like AE. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 383706,
            "date": "Tue 19 Oct 2021 05:17",
            "username": "xxxdolorxxx",
            "content": "There seems to not be a conclusive answer. I vote B and E. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 380284,
            "date": "Sun 17 Oct 2021 17:22",
            "username": "KemChhoCloud",
            "content": "Option B and C seems good here",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 370140,
            "date": "Thu 14 Oct 2021 10:17",
            "username": "Aparna_acc",
            "content": "Looks B and C<br>saideep , Ricardo, awscertified can someone please confirm",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 367650,
            "date": "Wed 13 Oct 2021 14:10",
            "username": "[Removed]",
            "content": "BE for sure",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 351029,
            "date": "Fri 08 Oct 2021 01:01",
            "username": "VAG1595",
            "content": "Answer: B,C<br>https://aws.amazon.com/blogs/security/how-to-use-kms-and-iam-to-enable-independent-security-controls-for-encrypted-data-in-s3/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 348370,
            "date": "Wed 29 Sep 2021 20:32",
            "username": "Ronak1",
            "content": "Looks AB can anyone confirm",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#127",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application needs to encrypt data that is written to Amazon S3 where the keys are managed in an on-premises data center, and the encryption is handled by<br>S3.<br>Which type of encryption should be used?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#127",
            "answers": [
              {
                "choice": "<p>A. Use server-side encryption with Amazon S3-managed keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use server-side encryption with AWS KMS-managed keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use client-side encryption with AWS KMS-managed keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use server-side encryption with customer-provided keys.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 127 discussion",
        "discusstion": [
          {
            "id": 657351,
            "date": "Fri 02 Sep 2022 13:32",
            "username": "LEHUY",
            "content": "Answer D: \\\"With Server-Side Encryption with Customer-Provided Keys (SSE-C), you manage the encryption keys and Amazon S3 manages the encryption, as it writes to disks, and decryption, when you access your objects.\\\"",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696073,
            "date": "Sun 16 Oct 2022 09:56",
            "username": "cloud_collector",
            "content": "With Server-Side Encryption with Customer-Provided Keys (SSE-C), you manage the encryption keys and Amazon S3 manages the encryption, as it writes to disks, and decryption, when you access your objects.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 655929,
            "date": "Thu 01 Sep 2022 09:26",
            "username": "LEHUY",
            "content": "B<br>........",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#128",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a serverless application that is based on AWS Lambda. The developer initializes the AWS software development kit (SDK) outside of the<br>Lambda handler function.<br>What is the PRIMARY benefit of this action?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#128",
            "answers": [
              {
                "choice": "<p>A. Improves legibility and stylistic convention<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Takes advantage of runtime environment reuse<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Provides better error handling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Creates a new SDK instance for each invocation<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 128 discussion",
        "discusstion": [
          {
            "id": 696079,
            "date": "Sun 16 Oct 2022 10:00",
            "username": "cloud_collector",
            "content": "Initialize SDK clients and database connections outside of the function handler, and cache static assets locally in the /tmp directory. Subsequent invocations processed by the same instance of your function can reuse these resources. This saves cost by reducing function run time.<br>https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-code",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657060,
            "date": "Fri 02 Sep 2022 08:35",
            "username": "LEHUY",
            "content": "B is correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656467,
            "date": "Thu 01 Sep 2022 18:58",
            "username": "ARHATRAJ",
            "content": "B is correct",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655536,
            "date": "Thu 01 Sep 2022 00:09",
            "username": "Chhotu_DBA",
            "content": "\\\"Takes advantage of runtime environment reuse\\\" is correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#129",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is testing a Docker-based application that uses the AWS SDK to interact with Amazon DynamoDB.  In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster.<br>How should the application authenticate with AWS services in production?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#129",
            "answers": [
              {
                "choice": "<p>A. Configure an ECS task IAM role for the application to use.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Refactor the application to call AWS STS AssumeRole based on an instance role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure AWS access key/secret access key environment variables with new credentials.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the credentials file with a new access key/secret access key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 129 discussion",
        "discusstion": [
          {
            "id": 11656,
            "date": "Thu 23 Sep 2021 22:41",
            "username": "awscertified",
            "content": "A.  Configure an ECS task IAM role for the application to use",
            "upvote_count": "20",
            "selected_answers": ""
          },
          {
            "id": 599732,
            "date": "Tue 10 May 2022 20:30",
            "username": "softlove89",
            "content": "A.  Configure an ECS task IAM role for the application to use",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 595162,
            "date": "Sat 30 Apr 2022 18:45",
            "username": "niki1310",
            "content": "ecs task iam role",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 589511,
            "date": "Thu 21 Apr 2022 18:15",
            "username": "tasbasi",
            "content": "as stated clearly by : Your Amazon ECS tasks can have an IAM role associated with them. The permissions granted in the IAM role are assumed by the containers running in the task.<br>(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 587095,
            "date": "Sun 17 Apr 2022 09:33",
            "username": "Ivanyan",
            "content": "A.  Configure an ECS task IAM role for the application to use",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 516114,
            "date": "Mon 03 Jan 2022 23:48",
            "username": "ej123",
            "content": "none of the answers provided really hit home... As you can read here (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) ECS will make available a URL with temporary credentials (curl 169.254.170.2$AWS_CONTAINER_CREDENTIALS_RELATIVE_URI) accessible from inside the container... it's really up to the application to fetch them... it is not enough to associate a role with the Task",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 493462,
            "date": "Sat 04 Dec 2021 04:01",
            "username": "hulebadu",
            "content": "Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 489420,
            "date": "Sun 28 Nov 2021 21:31",
            "username": "leliodesouza",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 341077,
            "date": "Thu 04 Nov 2021 09:39",
            "username": "VAG1595",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 311124,
            "date": "Fri 29 Oct 2021 06:26",
            "username": "wils3",
            "content": "Ans : A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 197403,
            "date": "Wed 27 Oct 2021 20:05",
            "username": "Vishaka1995",
            "content": "A is the right answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 191207,
            "date": "Sat 16 Oct 2021 03:39",
            "username": "codeScalable",
            "content": "I will go with A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 171584,
            "date": "Sun 10 Oct 2021 04:39",
            "username": "saeidp",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 142336,
            "date": "Wed 06 Oct 2021 19:34",
            "username": "MFDOOM",
            "content": "Ans : A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 67476,
            "date": "Tue 05 Oct 2021 05:08",
            "username": "kinetic1g",
            "content": "A.  Configure an ECS task IAM role for the application to use",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 53203,
            "date": "Sun 26 Sep 2021 12:44",
            "username": "Bach999",
            "content": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html<br>With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 23086,
            "date": "Fri 24 Sep 2021 23:26",
            "username": "newbie2019",
            "content": "Correct, A><br><br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_IAM_role.html#:~:targetTextAmazon%20ECS%20Task%20Role,Task%20Role%20trust%20relationship%20policy.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#130",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created an AWS Lambda function to provide notification through Amazon Simple Notification Service (Amazon SNS) whenever a file is uploaded to Amazon S3 that is larger than 50 MB.  The developer has deployed and tested the Lambda function by using the CLI. However, when the event notification is added to the S3 bucket and a 3,000 MB file is uploaded, the Lambda function does not launch.<br>Which of the following is a possible reason for the Lambda function's inability to launch?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#130",
            "answers": [
              {
                "choice": "<p>A. The S3 event notification does not activate for files that are larger than 1,000 MB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The resource-based policy for the Lambda function does not have the required permissions to be invoked by Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Lambda functions cannot be invoked directly from an S3 event.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The S3 bucket needs to be made public.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 130 discussion",
        "discusstion": [
          {
            "id": 674146,
            "date": "Tue 20 Sep 2022 14:31",
            "username": "colintkn",
            "content": "Answer is BA.  No such limitsB.  Yes, resource based policies allows principals to assume it.C.  S3 has direct integration with lambdaD.  definitely not a secure choice",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733784,
            "date": "Fri 02 Dec 2022 14:54",
            "username": "gpit",
            "content": "If B, why it's good in CLI test, as it implies?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721540,
            "date": "Fri 18 Nov 2022 20:52",
            "username": "dark_cherrymon",
            "content": "B, the other ones didn't make any sense",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 695229,
            "date": "Sat 15 Oct 2022 08:33",
            "username": "cloud_collector",
            "content": "Rule out A & D at first.<br>C:Amazon S3 can send an event to a Lambda function when an object is created or deleted.<br>https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#131",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores documents in Amazon S3 with default settings. A new regulation requires the company to encrypt the documents at rest, rotate the encryption keys annually, and keep a record of when the encryption keys were rotated. The company does not want to manage the encryption keys outside of AWS.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#131",
            "answers": [
              {
                "choice": "<p>A. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use server-side encryption with customer-provided encryption keys (SSE-C).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use client-side encryption before sending the data to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 131 discussion",
        "discusstion": [
          {
            "id": 655542,
            "date": "Thu 01 Sep 2022 00:14",
            "username": "Chhotu_DBASpamuel",
            "content": "it should be BAgreed - AWS KMS provides auditability, where as s3 does not.",
            "upvote_count": "81",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 675130,
            "date": "Wed 21 Sep 2022 14:38",
            "username": "Spamuel",
            "content": "Agreed - AWS KMS provides auditability, where as s3 does not.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693023,
            "date": "Wed 12 Oct 2022 13:51",
            "username": "gary_gary",
            "content": "Server-Side Encryption with AWS KMS keys (SSE-KMS) is similar to SSE-S3, but with some additional benefits and charges for using this service. There are separate permissions for the use of a KMS key that provides added protection against unauthorized access of your objects in Amazon S3. SSE-KMS also provides you with an audit trail that shows when your KMS key was used and by whom. Additionally, you can create and manage customer managed keys or use AWS managed keys that are unique to you, your service, and your Region.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733336,
            "date": "Fri 02 Dec 2022 03:07",
            "username": "hamimelon",
            "content": "B.  AWS KMS provides key rotation.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721541,
            "date": "Fri 18 Nov 2022 20:54",
            "username": "dark_cherrymon",
            "content": "i was thinking A or B, looking at the comments it's B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 667052,
            "date": "Mon 12 Sep 2022 15:56",
            "username": "szhang2004",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#132",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has discovered that an application responsible for processing messages in an Amazon SQS queue is routinely falling behind. The application is capable of processing multiple messages in one invocation, but is only receiving one message at a time.<br>What should the developer do to increase the number of messages the application receives?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#132",
            "answers": [
              {
                "choice": "<p>A. Call the ChangeMessageVisibility API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call the AddPermission API to set MaxNumberOfMessages for the ReceiveMessage action to a value greater than the default of 1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Call the ReceiveMessage API to set MaxNumberOfMessages to a value greater than the default of 1.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Call the SetQueueAttributes API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 132 discussion",
        "discusstion": [
          {
            "id": 244638,
            "date": "Thu 21 Oct 2021 11:29",
            "username": "RicardoD",
            "content": "C is the answer<br><br>One can change the number of messages received in a queue from 1 to 10 messages ate a time, by calling the ReceiveMessage API",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 538311,
            "date": "Wed 02 Feb 2022 03:00",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 194807,
            "date": "Mon 18 Oct 2021 11:40",
            "username": "Chinta",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 160055,
            "date": "Tue 12 Oct 2021 20:52",
            "username": "requiem",
            "content": "answer: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 157778,
            "date": "Sat 09 Oct 2021 12:01",
            "username": "saeidp",
            "content": "C is correct<br>Use ReceiveMessage APIto retrieve up to 10 messages at a time, from the specified queue.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 157131,
            "date": "Wed 06 Oct 2021 09:17",
            "username": "WilsonNF",
            "content": "C.  Call the ReceiveMessage API to set MaxNumberOfMessages to a value greater than the default of 1.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#133",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using an Amazon Kinesis Data Firehose delivery stream to store data in Amazon S3. Before storing the data in Amazon S3, the developer wants to enrich the data by combining the data with data from an Amazon DynamoDB table.<br>How can the developer implement the data enrichment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#133",
            "answers": [
              {
                "choice": "<p>A. Create a Kinesis Data Firehose data transformation by using an Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the Kinesis Data Firehose delivery stream to send data to a Kinesis data stream. Enrich the data by using an AWS Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the Kinesis Data Firehose delivery stream to store data in the DynamoDB table. Export the table to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Kinesis Data Firehose data transformation by using an AWS Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 133 discussion",
        "discusstion": [
          {
            "id": 658450,
            "date": "Sat 03 Sep 2022 14:30",
            "username": "Danbraga",
            "content": "I Vote D, diregard first message LOL<br>https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693310,
            "date": "Wed 12 Oct 2022 20:15",
            "username": "tbhtptbhtp",
            "content": "The wording may be wrong as it sounds like the lambda is not invoked between the two streams, but having two streams is mandatory. D is written like it is a single stream which will not work.I am wrong. Did not read the question right. D is correct",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 693312,
            "date": "Wed 12 Oct 2022 20:17",
            "username": "tbhtp",
            "content": "I am wrong. Did not read the question right. D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 667062,
            "date": "Mon 12 Sep 2022 16:00",
            "username": "szhang2004",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 659849,
            "date": "Mon 05 Sep 2022 09:20",
            "username": "sidvic",
            "content": "i think D.  Is the second scenario from this document<br>https://aws.amazon.com/it/blogs/big-data/joining-and-enriching-streaming-data-on-amazon-kinesis/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 658448,
            "date": "Sat 03 Sep 2022 14:29",
            "username": "Danbraga",
            "content": "I vote C<br>https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 658308,
            "date": "Sat 03 Sep 2022 12:00",
            "username": "JOL86",
            "content": "Answer is D I think. Kinesis firehose has the ability to add a lambda transformation. Kinesis Data Streams doesn't have this",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655543,
            "date": "Thu 01 Sep 2022 00:16",
            "username": "Chhotu_DBA",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#134",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company created an application to consume and process data. The application uses Amazon Simple Queue Service (Amazon SQS) and AWS Lambda functions. The application is currently working as expected, but it occasionally receives several messages that it cannot process properly. The company needs to clear these messages to prevent the queue from becoming blocked.<br>A developer must implement a solution that makes queue processing always operational. The solution must give the company the ability to defer the messages with errors and save these messages for further analysis.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#134",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon CloudWatch Logs to save the error messages to a separate log stream.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new SQS queue. Set the new queue as a dead-letter queue for the application queue. Configure the Maximum Receives setting.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the SQS queue to a FIFO queue. Configure the message retention period to 0 seconds.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon CloudWatch alarm for Lambda function errors. Publish messages to an Amazon Simple Notification Service (Amazon SNS) topic to notify administrator users.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 134 discussion",
        "discusstion": [
          {
            "id": 655615,
            "date": "Thu 01 Sep 2022 02:15",
            "username": "Chhotu_DBA",
            "content": "I think its B",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 739697,
            "date": "Fri 09 Dec 2022 04:06",
            "username": "aws_leo",
            "content": "The main keywords here are \\\"save these messages for further analysis\\\" so DLQ is always a good option in this kind of question",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732231,
            "date": "Thu 01 Dec 2022 05:10",
            "username": "G4Exams",
            "content": "It's B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 696048,
            "date": "Sun 16 Oct 2022 09:04",
            "username": "cloud_collector",
            "content": "Dead-letter queues are useful for debugging your application or messaging system because they let you isolate unconsumed messages to determine why their processing doesn't succeed.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 667065,
            "date": "Mon 12 Sep 2022 16:02",
            "username": "szhang2004",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655931,
            "date": "Thu 01 Sep 2022 09:28",
            "username": "LEHUY",
            "content": "B. ........",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#135",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a website that is developed in PHP and is launched using AWS Elastic Beanstalk. There is a new version of the website that needs to be deployed in the Elastic Beanstalk environment. The company cannot tolerate having the website offline if an update fails. Deployments must have minimal impact and rollback as soon as possible.<br>What deployment method should be used?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#135",
            "answers": [
              {
                "choice": "<p>A. All at once<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Rolling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Snapshots<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Immutable<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 135 discussion",
        "discusstion": [
          {
            "id": 13915,
            "date": "Wed 22 Sep 2021 22:14",
            "username": "DJTauKuntazulu",
            "content": "Yes D https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.htmlImmutable environment updates are an alternative to rolling updates. Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely. If an immutable environment update fails, the rollback process requires only terminating an Auto Scaling group. A failed rolling update, on the other hand, requires performing an additional rolling update to roll back the changes.",
            "upvote_count": "164",
            "selected_answers": ""
          },
          {
            "id": 315322,
            "date": "Tue 02 Nov 2021 06:55",
            "username": "Kuntazulu",
            "content": "Immutable environment updates are an alternative to rolling updates. Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely. If an immutable environment update fails, the rollback process requires only terminating an Auto Scaling group. A failed rolling update, on the other hand, requires performing an additional rolling update to roll back the changes.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 732232,
            "date": "Thu 01 Dec 2022 05:11",
            "username": "G4Exams",
            "content": "D because the scenario needs 0 downtime...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 694726,
            "date": "Fri 14 Oct 2022 14:12",
            "username": "Arnaud92",
            "content": "Answer D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 351166,
            "date": "Fri 05 Nov 2021 19:36",
            "username": "VAG1595",
            "content": "Answer: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 321671,
            "date": "Fri 05 Nov 2021 01:26",
            "username": "wils3",
            "content": "Ans : D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 192224,
            "date": "Mon 25 Oct 2021 02:04",
            "username": "Chinta",
            "content": "D is the Correct Answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 173110,
            "date": "Fri 22 Oct 2021 04:20",
            "username": "saeidp",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 135099,
            "date": "Fri 22 Oct 2021 00:58",
            "username": "Dmag",
            "content": "D.  Immutable, for roll back just point to older version(blue)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 125714,
            "date": "Wed 20 Oct 2021 18:08",
            "username": "Scarback",
            "content": "Resp: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67651,
            "date": "Wed 20 Oct 2021 10:13",
            "username": "kinetic1g",
            "content": "D.  Immutable",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 62669,
            "date": "Sun 10 Oct 2021 03:18",
            "username": "SugarTang",
            "content": "How to understand \\\"\\\"Rollback ASAP\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 46328,
            "date": "Thu 30 Sep 2021 05:02",
            "username": "awscertified",
            "content": "D.  Immutable",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 32070,
            "date": "Sun 26 Sep 2021 02:28",
            "username": "FHU",
            "content": "Correct answer is (D).",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 29497,
            "date": "Fri 24 Sep 2021 00:49",
            "username": "govindarathi4",
            "content": "D.  Immutable<br>It is costly but does provide the fastest rollback",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#136",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application running on multiple Amazon EC2 instances pulls messages from a standard Amazon SQS queue. A requirement for the application is that all messages must be encrypted at rest.<br>Developers are instructed to use methods that allow for centralized key management and minimize possible support requirements whenever possible.<br>Which of the following solutions supports these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#136",
            "answers": [
              {
                "choice": "<p>A. Encrypt individual messages by using client-side encryption with customer managed keys, then write to the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Encrypt individual messages by using SQS Extended Client and the Amazon S3 encryption client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an SQS queue, and encrypt the queue by using server-side encryption with AWS KMS.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an SQS queue, and encrypt the queue by using client-side encryption.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 136 discussion",
        "discusstion": [
          {
            "id": 194522,
            "date": "Fri 24 Sep 2021 00:52",
            "username": "jk0",
            "content": "C - SSE encrypts messages as soon as Amazon SQS receives them. The messages are stored in encrypted form and Amazon SQS decrypts messages only when they are sent to an authorized consumer.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 389646,
            "date": "Wed 27 Oct 2021 06:30",
            "username": "snssqs",
            "content": "\\\"Sewer\\\" side encryption lol",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 681913,
            "date": "Wed 28 Sep 2022 18:19",
            "username": "AulaitQM",
            "content": "I vote for C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 644751,
            "date": "Wed 10 Aug 2022 04:43",
            "username": "Franklin_Richards",
            "content": "Always use the Sewer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 537601,
            "date": "Tue 01 Feb 2022 03:40",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 527420,
            "date": "Wed 19 Jan 2022 11:49",
            "username": "hemlatab",
            "content": "C is the answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 526293,
            "date": "Tue 18 Jan 2022 05:10",
            "username": "mnizamu",
            "content": "C - Server-side encryption (SSE) lets you transmit sensitive data in encrypted queues. SSE protects the contents of messages in queues using SQS-owned encryption keys (SSE-SQS) or keys managed in the AWS Key Management Service (SSE-KMS).<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 517198,
            "date": "Wed 05 Jan 2022 07:03",
            "username": "laxit",
            "content": "Spell Error<br>sewer-side",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 424177,
            "date": "Thu 28 Oct 2021 07:27",
            "username": "yaizkazani",
            "content": "I go for sewer-side encryption",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 375175,
            "date": "Tue 26 Oct 2021 04:28",
            "username": "AndyTokyo608Mal_8",
            "content": "B is the answer AWS SDK for Java is the condition of server side encryptionSQS Extended Client Library for Java & AWS SDK for Java are needed to store large msgs in s3 (256 KB to 2 GB)<br>Answer C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 447517,
            "date": "Fri 29 Oct 2021 00:59",
            "username": "Mal_8",
            "content": "SQS Extended Client Library for Java & AWS SDK for Java are needed to store large msgs in s3 (256 KB to 2 GB)<br>Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 246574,
            "date": "Sat 16 Oct 2021 22:58",
            "username": "RicardoD",
            "content": "C is the answer<br><br>Server-side encryption (SSE) lets you transmit sensitive data in encrypted queues. SSE protects the contents of messages in queues using keys managed in AWS Key Management Service (AWS KMS).",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 225957,
            "date": "Sun 03 Oct 2021 09:02",
            "username": "icody",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 195281,
            "date": "Fri 24 Sep 2021 07:46",
            "username": "Chinta",
            "content": "C ,encrypt the queue using server side encryption kms",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 193704,
            "date": "Mon 20 Sep 2021 08:51",
            "username": "JaneJ",
            "content": "C.  Create an SQS queue, and encrypt the queue by using sewer-side encryption with AWS KMS.",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#137",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a web application that is using Amazon Cognito for authentication. The company does not want to use multi-factor authentication (MFA) for all the visitors every time, but the company's security team has concerns about compromised credentials. The development team needs to configure mandatory<br>MFA only when suspicious sign-in attempts are detected.<br>Which Amazon Cognito feature will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#137",
            "answers": [
              {
                "choice": "<p>A. Short message service (SMS) text message MFA<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Advanced security metrics<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Time-based one-time password (TOTP) software token MFA<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Adaptive authentication<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 137 discussion",
        "discusstion": [
          {
            "id": 656223,
            "date": "Thu 01 Sep 2022 14:17",
            "username": "m_t_kd",
            "content": "Answer is D, With adaptive authentication, you can configure your user pool to block suspicious sign-ins or add second factor authentication in response to an increased risk level.<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 655612,
            "date": "Thu 01 Sep 2022 02:11",
            "username": "Chhotu_DBA",
            "content": "D is correct",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#138",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a two-tier application running on an Amazon EC2 server that handles all of its AWS based e-commerce activity. During peak times, the backend servers that process orders are overloaded with requests. This results in some orders failing to process. A developer needs to create a solution that will re-factor the application.<br>Which steps will allow for more flexibility during peak times, while still remaining cost-effective? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#138",
            "answers": [
              {
                "choice": "<p>A. Increase the backend T2 EC2 instance sizes to x1 to handle the largest possible load throughout the year.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement an Amazon SQS queue to decouple the front-end and backend servers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon SNS queue to decouple the front-end and backend servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate the backend servers to on-premises and pull from an Amazon SNS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Modify the backend servers to pull from an Amazon SQS queue.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 138 discussion",
        "discusstion": [
          {
            "id": 348591,
            "date": "Fri 22 Oct 2021 01:38",
            "username": "TroyMcLure",
            "content": "Correct Answer: \\\"B\\\" & \\\"E\\\"",
            "upvote_count": "18",
            "selected_answers": ""
          },
          {
            "id": 347999,
            "date": "Tue 12 Oct 2021 20:36",
            "username": "faramawi",
            "content": "Answer: BE",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 715778,
            "date": "Fri 11 Nov 2022 06:34",
            "username": "gunjan4392",
            "content": "B, E. ,<br>Is my take",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 685594,
            "date": "Mon 03 Oct 2022 16:24",
            "username": "haazybanj",
            "content": "B and E is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 537322,
            "date": "Mon 31 Jan 2022 19:52",
            "username": "Orffeus",
            "content": "Agree with BE - process data asynchronously using SQS",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 536519,
            "date": "Sun 30 Jan 2022 23:28",
            "username": "JP_PA",
            "content": "ANS: B&E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 439517,
            "date": "Wed 03 Nov 2021 23:28",
            "username": "Juanlufr",
            "content": "Answers B & E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 398516,
            "date": "Tue 02 Nov 2021 14:24",
            "username": "Suresh108",
            "content": "BBBBBBBBBBBEEEEEEEEEEEEEEE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 353008,
            "date": "Sat 30 Oct 2021 10:55",
            "username": "VAG1595",
            "content": "Answer: B,E",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#139",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an AWS Lambda function that generates a new file each time it runs. Each new file must be checked into an AWS CodeCommit repository hosted in the same AWS account.<br>How should the developer accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#139",
            "answers": [
              {
                "choice": "<p>A. When the Lambda function starts, use the Git CLI to clone the repository. Check the new file into the cloned repository and push the change.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. After the new file is created in Lambda, use cURL to invoke the CodeCommit API. Send the file to the repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an AWS SDK to instantiate a CodeCommit client. Invoke the putjile method to add the file to the repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload the new file to an Amazon S3 bucket. Create an AWS Step Function to accept S3 events. In the Step Function, add the new file to the repository.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 139 discussion",
        "discusstion": [
          {
            "id": 155141,
            "date": "Mon 20 Sep 2021 23:21",
            "username": "jodeepak",
            "content": "Answer C<br>https://docs.aws.amazon.com/cli/latest/reference/codecommit/index.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 721592,
            "date": "Fri 18 Nov 2022 22:44",
            "username": "dark_cherrymon",
            "content": "i'm starting to think it's not A because you need a linux ec2 to issue git cli",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 646588,
            "date": "Sun 14 Aug 2022 07:52",
            "username": "LaXuanLinh",
            "content": "the correct command is put-file, not put_file",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540530,
            "date": "Fri 04 Feb 2022 17:53",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 355635,
            "date": "Sat 30 Oct 2021 18:40",
            "username": "rolymeckaws_leo",
            "content": "A and C are correct<br>But C takes less effort<br>Answer is CAgree. From Lambda function, we can use CodeCommit API to put new file(s) to a repository or a branch:<br>PutFile (API), which adds or modifies a single file in a specified repository and branch.<br><br>Ref: https://docs.aws.amazon.com/cli/latest/reference/codecommit/index.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 739705,
            "date": "Fri 09 Dec 2022 04:22",
            "username": "aws_leo",
            "content": "Agree. From Lambda function, we can use CodeCommit API to put new file(s) to a repository or a branch:<br>PutFile (API), which adds or modifies a single file in a specified repository and branch.<br><br>Ref: https://docs.aws.amazon.com/cli/latest/reference/codecommit/index.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 353098,
            "date": "Wed 27 Oct 2021 13:54",
            "username": "VAG1595",
            "content": "Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299574,
            "date": "Tue 26 Oct 2021 16:36",
            "username": "gobble",
            "content": "both A and C seems right. However, wrapping all your want inside lambda code is better than getting git configured during lambda runtime.<br><br>https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/codecommit/AWSCodeCommitClient.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 195240,
            "date": "Sat 23 Oct 2021 22:34",
            "username": "ChintaPopoAWS",
            "content": "C is correct need to call put file methodhttps://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/codecommit.html",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 338392,
            "date": "Wed 27 Oct 2021 13:36",
            "username": "PopoAWS",
            "content": "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/codecommit.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 184232,
            "date": "Wed 20 Oct 2021 18:12",
            "username": "dragonie",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 165756,
            "date": "Sun 03 Oct 2021 05:30",
            "username": "BiswaGB",
            "content": "I feel both A and C are correct. However C seems to be a better approach.<br>To use A(git cli), first git cli need to be installed in lambda run time.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 160671,
            "date": "Thu 30 Sep 2021 17:11",
            "username": "quanlh",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 160351,
            "date": "Sat 25 Sep 2021 00:52",
            "username": "saeidp",
            "content": "C is the answere",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#140",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing an Amazon DynamoDB table for an application. The application will store user information that includes a unique identifier and an email address for each user. The application must be able to query the table by using either the unique identifier or the email address.<br>How should the developer design the DynamoDB table to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#140",
            "answers": [
              {
                "choice": "<p>A. For the primary key of the table, specify the unique identifier as the partition key and specify the email address as the sort key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. For the primary key of the table, specify the unique identifier as the partition key. Create a local secondary index (LSI) based on the email address.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. For the primary key of the table, specify the email address as the partition key and specify the unique identifier as the sort key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. For the primary key of the table, specify the unique identifier as the partition key. Create a global secondary index (GSI) based on the email address.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 140 discussion",
        "discusstion": [
          {
            "id": 739711,
            "date": "Fri 09 Dec 2022 04:35",
            "username": "aws_leo",
            "content": "The main point in the question is that they want to query table by using EITHER unique identifier OR email address.<br><br>A and B is not enough if we only has one primary key in a table<br><br>Assump that we configure base table has partition key is \\\"unique identifier\\\" so that we can query base on this key<br><br>For B), the LSI index must have the same partition key with base table. So in case the assumption above, you cannot query only email address<br><br>For D) the GSI can have different partition key and sort key from base table. So we can create partition key is \\\"email address\\\" and sort key is \\\"unique identifier\\\" for GSI. Then we can use only \\\"email address\\\" for query",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 681918,
            "date": "Wed 28 Sep 2022 18:29",
            "username": "AulaitQM",
            "content": "It is D.  At first I thought it was B, but the requirement is to be able to search by one or the other, the unique id or the email. With a local index, you need the primary key as well. Only a global index would allow you to search using only the email (once the primary key is set to the unique id)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 680138,
            "date": "Mon 26 Sep 2022 22:30",
            "username": "Spamuel",
            "content": "Option D - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 674064,
            "date": "Tue 20 Sep 2022 13:03",
            "username": "Jabol",
            "content": "We need different primary key in second index so we need global secondary index",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 662730,
            "date": "Wed 07 Sep 2022 18:56",
            "username": "peytoSpamuel",
            "content": "question sucks its trying to convey this: GSI can be a single attribute key which is called a partition key or it can be a composite key with two attributes,Agreed - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 680137,
            "date": "Mon 26 Sep 2022 22:30",
            "username": "Spamuel",
            "content": "Agreed - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655611,
            "date": "Thu 01 Sep 2022 02:10",
            "username": "Chhotu_DBAm_t_kd",
            "content": "I think its DPls specify reason",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657444,
            "date": "Fri 02 Sep 2022 14:55",
            "username": "m_t_kd",
            "content": "Pls specify reason",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#141",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has an application that asynchronously invokes an AWS Lambda function. The developer wants to store messages that resulted in failed invocations of the Lambda function so that the application can retry the call later.<br>What should the developer do to accomplish this goal with the LEAST operational overhead?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#141",
            "answers": [
              {
                "choice": "<p>A. Set up Amazon CloudWatch Logs log groups to filter and store the messages in an Amazon S3 bucket. Import the messages in Lambda. Run the Lambda function again.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon EventBridge (Amazon CloudWatch Events) to send the messages to Amazon Simple Notification Service (Amazon SNS) to initiate the Lambda function again.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a dead-letter queue for discarded messages. Set the dead-letter queue as an event source for the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Send Amazon EventBridge (Amazon CloudWatch Events) events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda function to pull messages from the SQS queue. Run the Lambda function again.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 141 discussion",
        "discusstion": [
          {
            "id": 729910,
            "date": "Tue 29 Nov 2022 05:50",
            "username": "michaldavid",
            "content": "CCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728639,
            "date": "Sun 27 Nov 2022 22:52",
            "username": "RyanDDD",
            "content": "Asynchronous invocation =E2=80=93 You can configure a dead-letter queue on the function to capture events that weren't successfully processed.<br>Event source mappings =E2=80=93 Event source mappings that read from streams retry the entire batch of items.<br>For event source mappings that read from a queue, you determine the length of time between retries and destination for failed events by configuring the visibility timeout and redrive policy on the source queue.<br>https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 672625,
            "date": "Sun 18 Sep 2022 19:34",
            "username": "robbyboss",
            "content": "Implement a dead-letter queue for discarded messages.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 659549,
            "date": "Sun 04 Sep 2022 23:22",
            "username": "m_t_kdDanbragahabros",
            "content": "Answer is C, SIMPLEST form<br>https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.htmlWhy not B?Keyword =E2=80=9Cretry the call later=E2=80=9D<br>SNS is perfect for fanout situations (multiple invocations) but in this case it does not apply",
            "upvote_count": "411",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 664444,
            "date": "Fri 09 Sep 2022 12:58",
            "username": "Danbragahabros",
            "content": "Why not B?Keyword =E2=80=9Cretry the call later=E2=80=9D<br>SNS is perfect for fanout situations (multiple invocations) but in this case it does not apply",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 690315,
            "date": "Sun 09 Oct 2022 17:56",
            "username": "habros",
            "content": "Keyword =E2=80=9Cretry the call later=E2=80=9D<br>SNS is perfect for fanout situations (multiple invocations) but in this case it does not apply",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655554,
            "date": "Thu 01 Sep 2022 00:27",
            "username": "Chhotu_DBA",
            "content": "I think its A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#142",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application in Python. The application runs on AWS Lambda. The application generates a file and needs to upload this file to Amazon S3.<br>The developer must implement this upload functionality with the least possible change to the application code.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#142",
            "answers": [
              {
                "choice": "<p>A. Make an HTTP request directly to the S3 API to upload the file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Include the AWS SDK for Python in the Lambda function. Use the SDK to upload the file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS SDK for Python that is installed in the Lambda environment to upload the file.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS CLI that is installed in the Lambda environment to upload the file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 142 discussion",
        "discusstion": [
          {
            "id": 655558,
            "date": "Thu 01 Sep 2022 00:31",
            "username": "Chhotu_DBA",
            "content": "C seems correct",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729911,
            "date": "Tue 29 Nov 2022 05:51",
            "username": "michaldavid",
            "content": "CCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 721661,
            "date": "Sat 19 Nov 2022 01:13",
            "username": "dark_cherrymondark_cherrymondark_cherrymon",
            "content": "it's probably still C because even with A you need a presigned url<br><br>though i would mention that boto is ending support for python so this question may not be so relevant. though you probably can use the older versions of python<br><br>https://github.com/boto/boto3<br><br>\\\"On 2022-05-30, support for Python 3.6 was ended. This follows the Python Software Foundation end of support for the runtime which occurred on 2021-12-23. For more information, see this blog post.\\\"\\\"On 2022-05-30, support for Python 3.6 was ended. This follows the Python Software Foundation end of support for the runtime which occurred on 2021-12-23. For more information, see this blog post.\\\"<br><br>https://www.serverlessops.io/blog/aws-lambda-and-python-boto3-bundling#:~:textBecause%20the%20boto3%20module%20is,t%20bother%20bundling%20that%20either.my copy paste didn't work, here's the quote i was going for<br><br>\\\"Because the boto3 module is already available in the AWS Lambda Python runtimes, don=E2=80=99t bother including boto3 and its dependency botocore in your Lambda deployment zip file.\\\"",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 721665,
            "date": "Sat 19 Nov 2022 01:18",
            "username": "dark_cherrymondark_cherrymon",
            "content": "\\\"On 2022-05-30, support for Python 3.6 was ended. This follows the Python Software Foundation end of support for the runtime which occurred on 2021-12-23. For more information, see this blog post.\\\"<br><br>https://www.serverlessops.io/blog/aws-lambda-and-python-boto3-bundling#:~:textBecause%20the%20boto3%20module%20is,t%20bother%20bundling%20that%20either.my copy paste didn't work, here's the quote i was going for<br><br>\\\"Because the boto3 module is already available in the AWS Lambda Python runtimes, don=E2=80=99t bother including boto3 and its dependency botocore in your Lambda deployment zip file.\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 721667,
            "date": "Sat 19 Nov 2022 01:19",
            "username": "dark_cherrymon",
            "content": "my copy paste didn't work, here's the quote i was going for<br><br>\\\"Because the boto3 module is already available in the AWS Lambda Python runtimes, don=E2=80=99t bother including boto3 and its dependency botocore in your Lambda deployment zip file.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 690319,
            "date": "Sun 09 Oct 2022 17:58",
            "username": "habros",
            "content": "Boto3 comes with the Lambda environment by default<br>https://aws.amazon.com/sdk-for-python/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#143",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application that is hosted on an Amazon EC2 instance needs access to files that are stored in an Amazon S3 bucket. The application lists the objects that are stored in the S3 bucket and displays a table to the user. During testing, a developer discovers that the application does not show any objects in the list.<br>What is the MOST secure way to resolve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#143",
            "answers": [
              {
                "choice": "<p>A. Update the IAM instance profile that is attached to the EC2 instance to include the S3:' permission for the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the IAM instance profile that is attached to the EC2 instance to include the S3:ListBucket permission for the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the developer's user permissions to include the S3:ListBucket permission for the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the S3 bucket policy by including the S3:ListBucket permission and by setting the Principal element to specify the account number of the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 143 discussion",
        "discusstion": [
          {
            "id": 755947,
            "date": "Sun 25 Dec 2022 20:24",
            "username": "by116549",
            "content": "According to this URL ListBucket will list the buckets, the question is after the objects in the bucket:<br><br>https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729914,
            "date": "Tue 29 Nov 2022 05:51",
            "username": "michaldavid",
            "content": "BBBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721675,
            "date": "Sat 19 Nov 2022 01:26",
            "username": "dark_cherrymon",
            "content": "B i was kinda looking at D, but the account number thing didn't ring a bell",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719148,
            "date": "Tue 15 Nov 2022 22:34",
            "username": "ManasChurithuyeinaung",
            "content": "Event though we should follow least privilege, but s3:listbucket will help list the bucket but not the objects.I had a same thought with you but when I checked the documentation =E2=87=92 \\\"s3:ListBucket permission allows the user to use the Amazon S3 GET Bucket (List Objects) operation\\\"",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 755617,
            "date": "Sun 25 Dec 2022 13:06",
            "username": "thuyeinaung",
            "content": "I had a same thought with you but when I checked the documentation =E2=87=92 \\\"s3:ListBucket permission allows the user to use the Amazon S3 GET Bucket (List Objects) operation\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 684703,
            "date": "Sun 02 Oct 2022 10:42",
            "username": "habros",
            "content": "B.  least principle of privilege, so no s3:*. to view all files in bucket, s3:listbucket is sufficient",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655559,
            "date": "Thu 01 Sep 2022 00:32",
            "username": "Chhotu_DBA",
            "content": "B is correct",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#144",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to implement a cache to store data that an application frequently queries from an Amazon RDS for MySQL database. The data structures that will be cached include sets and sorted sets.<br>How should the developer implement the cache to achieve the LOWEST latency?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#144",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon ElastiCache for Memcached instance. Serialize the data as JSON before caching the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon ElastiCache for Redis instance. Use a Redis client library to cache the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon DynamoDB table. Serialize the data as JSON before caching the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon ElastiCache for Memcached instance. Use a Memcached client library to cache the data.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 144 discussion",
        "discusstion": [
          {
            "id": 733845,
            "date": "Fri 02 Dec 2022 15:55",
            "username": "gpit",
            "content": "Redis supports storing objects",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729915,
            "date": "Tue 29 Nov 2022 05:53",
            "username": "michaldavid",
            "content": "BBBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 685623,
            "date": "Mon 03 Oct 2022 17:11",
            "username": "haazybanj",
            "content": "B is the answer as Memcache has no support forsorted set",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 676513,
            "date": "Thu 22 Sep 2022 21:27",
            "username": "Spamuel",
            "content": "Turns out that Memcached does not provide support for Sorted Sets. Must be B. <br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655560,
            "date": "Thu 01 Sep 2022 00:34",
            "username": "Chhotu_DBA",
            "content": "B correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#145",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer creates an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. All message content must be encrypted in transit and at rest between Lambda and Amazon SNS.<br>A part of the Lambda execution role is as follows:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04238/0007400001.png\" class=\"in-exam-image\"><br>Which combination of steps should the developer take to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#145",
            "answers": [
              {
                "choice": "<p>A. Enable server-side encryption on the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify \"aws:SecureTransport\": \"true\" as the condition.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a VPC endpoint for Amazon SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a StringEquals condition of \"sns:Protocol\": \"https\" to the Lambda execution role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify \"aws:SecureTransport\": \"false\" as the condition.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 145 discussion",
        "discusstion": [
          {
            "id": 661545,
            "date": "Tue 06 Sep 2022 20:04",
            "username": "Vinafec",
            "content": "A: force encryption on rest<br>E: deny all that are not encrypted in transit",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 733364,
            "date": "Fri 02 Dec 2022 03:49",
            "username": "hamimelon",
            "content": "Why is D wrong?My problem with E is that Lambda is publishing to SNS, not triggered by SNS, so Lambda doesn't care whether SNS has encryption at-rest or not.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729916,
            "date": "Tue 29 Nov 2022 05:55",
            "username": "michaldavid",
            "content": "A and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 684704,
            "date": "Sun 02 Oct 2022 10:46",
            "username": "habros",
            "content": "A&E.  Trick question. You SHOULD deny policy when protocol is not HTTPS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 678310,
            "date": "Sun 25 Sep 2022 02:21",
            "username": "RUKSHANA",
            "content": "A & E<br>https://docs.aws.amazon.com/sns/latest/dg/sns-security-best-practices.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 656244,
            "date": "Thu 01 Sep 2022 14:39",
            "username": "m_t_kd",
            "content": "Answer is A & E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655573,
            "date": "Thu 01 Sep 2022 01:05",
            "username": "Chhotu_DBAAulaitQM",
            "content": "AB correctno, it is AE because B would deny the encrypted data",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 681925,
            "date": "Wed 28 Sep 2022 18:38",
            "username": "AulaitQM",
            "content": "no, it is AE because B would deny the encrypted data",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#146",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using an AWS Key Management Service (AWS KMS) customer master key (CMK) with imported key material to encrypt data in Amazon S3. The developer accidentally deletes the key material of the CMK and is unable to decrypt the data.<br>How can the developer decrypt the data that was encrypted by the CMK?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#146",
            "answers": [
              {
                "choice": "<p>A. Request support from AWS to recover the deleted key material.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new CMK. Use the new CMK to decrypt the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the CMK without the key material.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Reimport the same key material to the CMK.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 146 discussion",
        "discusstion": [
          {
            "id": 674803,
            "date": "Wed 21 Sep 2022 07:09",
            "username": "Jabol",
            "content": "\\\"To use the KMS key again, you must reimport the same key material into the KMS key. In contrast, deleting a KMS key is irreversible. If you schedule key deletion and the required waiting period expires, AWS KMS deletes the key material and all metadata associated with the KMS key.\\\" - https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-delete-key-material.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657448,
            "date": "Fri 02 Sep 2022 15:04",
            "username": "m_t_kd",
            "content": "Correct Answer is D",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729918,
            "date": "Tue 29 Nov 2022 05:56",
            "username": "michaldavid",
            "content": "DDDDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#147",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to launch a new Amazon EC2 instance by using the AWS CLI.<br>Which AWS CLI command should the developer use to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#147",
            "answers": [
              {
                "choice": "<p>A. aws ec2 bundle-instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. aws ec2 start-instances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aws ec2 confirm-product-instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. aws ec2 run instances<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 147 discussion",
        "discusstion": [
          {
            "id": 729919,
            "date": "Tue 29 Nov 2022 05:57",
            "username": "michaldavid",
            "content": "DDDDDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 676520,
            "date": "Thu 22 Sep 2022 21:33",
            "username": "Spamuel",
            "content": "\\\"AWS ec2 run-instances\\\"<br>https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-instances.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 672639,
            "date": "Sun 18 Sep 2022 19:45",
            "username": "robbyboss",
            "content": "D as it's closest to run-instances",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 655571,
            "date": "Thu 01 Sep 2022 01:03",
            "username": "Chhotu_DBA",
            "content": "D is right",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#148",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team uses AWS Elastic Beanstalk for application deployment. The development team has configured the application version lifecycle policy to limit the number of application versions to 25. However, even with the application version lifecycle policy, the source bundle is deleted from the Amazon S3 source bucket.<br>What should the development team do in the Elastic Beanstalk application version lifecycle settings to retain the source code in the S3 bucket?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#148",
            "answers": [
              {
                "choice": "<p>A. Enable versioning on the source bundle S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Disable the S3 bucket lifecycle policy to avoid the archiving of the source bundle.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the Elastic Beanstalk application version lifecycle policy to increase the version quota to 50.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the Elastic Beanstalk application version lifecycle policy to retain the source bundle in Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 148 discussion",
        "discusstion": [
          {
            "id": 729921,
            "date": "Tue 29 Nov 2022 05:58",
            "username": "michaldavid",
            "content": "DDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 695197,
            "date": "Sat 15 Oct 2022 06:59",
            "username": "cloud_collector",
            "content": "same as question#285<br>https://www.examtopics.com/discussions/amazon/view/28544-exam-aws-certified-developer-associate-topic-1-question-285/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 676523,
            "date": "Thu 22 Sep 2022 21:36",
            "username": "Spamuel",
            "content": "D - https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-lifecycle.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 655570,
            "date": "Thu 01 Sep 2022 01:01",
            "username": "Chhotu_DBA",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#149",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team is building a new application that will run on Amazon EC2 and use Amazon DynamoDB as a storage layer. The developers all have assigned IAM user accounts in the same IAM group. The developers currently can launch EC2 instances, and they need to be able to launch EC2 instances with an instance role allowing access to Amazon DynamoDB. <br><br>Which AWS IAM changes are needed when creating an instance role to provide this functionality?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#149",
            "answers": [
              {
                "choice": "<p>A. Create an IAM permission policy attached to the role that allows access to DynamoDB.  Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole and iam:PassRole permissions for the role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM permissions policy attached to the role that allows access to DynamoDAdd a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM permission policy attached to the role that allows access to Amazon EC2. Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM permissions policy attached to the role that allows access to DynamoDB.  Add a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole permission for the role.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 149 discussion",
        "discusstion": [
          {
            "id": 729922,
            "date": "Tue 29 Nov 2022 06:02",
            "username": "michaldavid",
            "content": "BBBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723565,
            "date": "Mon 21 Nov 2022 14:54",
            "username": "dark_cherrymondark_cherrymon",
            "content": "i picked bit's pass role and not get role<br><br>\\\"An IAM permissions policy attached to the IAM user that allows the user to pass only those approved roles. You usually add iam:GetRole to iam:PassRole so the user can get the details of the role to be passed\\\"<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html<br><br>the rest of the question was a bit of a grammer issue and i'm not too certain",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723567,
            "date": "Mon 21 Nov 2022 14:55",
            "username": "dark_cherrymon",
            "content": "it's pass role and not get role<br><br>\\\"An IAM permissions policy attached to the IAM user that allows the user to pass only those approved roles. You usually add iam:GetRole to iam:PassRole so the user can get the details of the role to be passed\\\"<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html<br><br>the rest of the question was a bit of a grammer issue and i'm not too certain",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#150",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A banking application processes thousands of transactions each second. Each transaction payload must have end-to-end encryption. The application encrypts each transaction locally by using the AWS Key Management Service (AWS KMS) GenerateDataKey operation. A developer is testing the application and receives a ThrottlingException error.<br><br>Which actions are best practices to resolve this error? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#150",
            "answers": [
              {
                "choice": "<p>A. Use the LocalCryptoMatenalsCache feature of the AWS Encryption SDK encryption library.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call the AWS KMS Encrypt operation directly to allow AWS KMS to encrypt the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a case in the AWS Support Center to increase the quota for the account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Simple Queue Service (Amazon SQS) to queue the requests to AWS KMS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Switch to an AWS KMS custom key store.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 150 discussion",
        "discusstion": [
          {
            "id": 734203,
            "date": "Sat 03 Dec 2022 05:38",
            "username": "SBoksh",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/kms-throttlingexception-error/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 723577,
            "date": "Mon 21 Nov 2022 15:03",
            "username": "dark_cherrymon",
            "content": "and A<br><br>\\\"Use the data key caching feature with the AWS Encryption SDK encryption library. Data key caching reduces the rate of API requests by caching and reusing the data keys for encryption to meet cost and performance requirements.\\\"<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/kms-throttlingexception-error/#:~:textThe%20ThrottlingException%20error%20code%20indicates,KMS%20service%20throttles%20the%20request.<br><br>which leads me to<br><br>https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/data-caching-details.html#simplecache<br><br>\\\" To create an instance of the local cache, use the LocalCryptoMaterialsCache constructor in Java and Python, the\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 723573,
            "date": "Mon 21 Nov 2022 15:01",
            "username": "dark_cherrymon",
            "content": "it's definately C<br><br>\\\"Request an AWS KMS quota increase to exceed the request quota.\\\"<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/kms-throttlingexception-error/#:~:textThe%20ThrottlingException%20error%20code%20indicates,KMS%20service%20throttles%20the%20request.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#151",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has code that is stored in an Amazon S3 bucket. The code must be deployed as an AWS Lambda function across multiple accounts in the same AWS Region as the S3 bucket. An AWS CloudFormation template that runs for each account will deploy the Lambda function.<br>What is the MOST secure way to allow CloudFormation to access the Lambda code in the S3 bucket?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#151",
            "answers": [
              {
                "choice": "<p>A. Grant the CloudFormation service role the S3 ListBucket and GetObject permissions. Add a bucket policy to Amazon S3 with the pnncipal of \"AWS\": [account numbers].<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Grant the CloudFormation service role the S3 GetObject permission. Add a bucket policy to Amazon S3 with the principal of \"*\".<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a service-based link to grant the Lambda function the S3 ListBucket and GetObject permissions by explicitly adding the S3 bucket=E2=80=99s account number in the resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a service-based link to grant the Lambda function the S3 GetObject permission. Add a resource of \"*\" to allow access to the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 151 discussion",
        "discusstion": [
          {
            "id": 729925,
            "date": "Tue 29 Nov 2022 06:07",
            "username": "michaldavid",
            "content": "AAAAAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723580,
            "date": "Mon 21 Nov 2022 15:06",
            "username": "dark_cherrymon",
            "content": "previous answer was A equalivent<br><br>https://www.examtopics.com/discussions/amazon/view/51575-exam-aws-certified-developer-associate-topic-1-question-360/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#152",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating a legacy application to a serverless application on AWS. The legacy application consists of a set of web services that are exposed by an Amazon API Gateway API. A developer needs to replace the existing implementation of web services with AWS Lambda functions. The developer needs to test a new version of the API that uses the functions in production. The developer must minimize the impact of the testing on the application's users.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#152",
            "answers": [
              {
                "choice": "<p>A. Create a beta stage for the new version of the API. Send the updated endpoint to the users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a development stage for the new version of the API. Use a canary deployment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a development stage for the new version of the API. Promote a canary release.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a deployment stage. Enable mutual TLS for the new version of the API.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 152 discussion",
        "discusstion": [
          {
            "id": 762985,
            "date": "Sun 01 Jan 2023 01:03",
            "username": "tieyua",
            "content": "I guess it wasn't clear what \\\"testing\\\" mean here.Testing post production go live?Or testing your newly minted code in prod env.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 742387,
            "date": "Mon 12 Dec 2022 05:05",
            "username": "xicomynor",
            "content": "I choose A.  I understand this as the developer being the one that is testing, not involing production users yet. By using B a production user could find any error or similar, but with A only the ones testing with specific endpoint would be prone to errors and once it's tested by developer B can be used.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 734213,
            "date": "Sat 03 Dec 2022 05:59",
            "username": "SBoksh",
            "content": "no need to involve user or depend on them for testing",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733987,
            "date": "Fri 02 Dec 2022 19:35",
            "username": "gpit",
            "content": "BTW, D, mTLS, is for two way certification, an authentication way, not for deployment.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733984,
            "date": "Fri 02 Dec 2022 19:31",
            "username": "gpit",
            "content": "B is the sure safer way, because it is under your control, not your clients'.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728048,
            "date": "Sun 27 Nov 2022 09:38",
            "username": "saysamsuf",
            "content": "bbbbbbb",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 725752,
            "date": "Thu 24 Nov 2022 11:51",
            "username": "CloudHandsOn",
            "content": "l choose B. <br>I dont think it it=E2=80=99s A, because it mentions least impact for the application user, and providing an updated endpoint to your users in production will be a huge disruption. Creating a development stage, and using canary approach sounds more feasible, according to the doc.<br><br>Reference: https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 725146,
            "date": "Wed 23 Nov 2022 14:17",
            "username": "kapil206001",
            "content": "I choose B<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html#api-gateway-canary-release-deployment-overview",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 723584,
            "date": "Mon 21 Nov 2022 15:13",
            "username": "dark_cherrymon",
            "content": "A because<br><br>i don't think it's b or c because your not doing an upgrade, and also elimanted D because i see no mention of security",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#153",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to modify an application architecture to meet new functional requirements. Application data is stored in Amazon DynamoDB and processed for analysis in a nightly batch. The system analysts do not want to wait until the next day to view the processed data and have asked to have it available in near-real time.<br><br>Which application architecture pattern would enable the data to be processed as it is received?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#153",
            "answers": [
              {
                "choice": "<p>A. Event driven<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Client-server driven<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Fan-out driven<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Schedule driven<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 153 discussion",
        "discusstion": [
          {
            "id": 729927,
            "date": "Tue 29 Nov 2022 06:10",
            "username": "michaldavid",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725753,
            "date": "Thu 24 Nov 2022 11:53",
            "username": "CloudHandsOn",
            "content": "I choose A. <br>Event drivenreal time",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723588,
            "date": "Mon 21 Nov 2022 15:17",
            "username": "dark_cherrymon",
            "content": "i think A is the only real driven",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723582,
            "date": "Mon 21 Nov 2022 15:12",
            "username": "sionita",
            "content": "A event-driven",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#154",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating a web application from on premises to AWS. The company needs to move session storage from the application code to a shared service as part of the migration. The session storage data must be encrypted at rest.<br><br>Which AWS services meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#154",
            "answers": [
              {
                "choice": "<p>A. Amazon ElastiCache for Redis<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon ElastiCache for Memcached<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon CloudWatch<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Amazon DynamoDB<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 154 discussion",
        "discusstion": [
          {
            "id": 748847,
            "date": "Sun 18 Dec 2022 13:42",
            "username": "MeenuSingla",
            "content": "A and E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 742687,
            "date": "Mon 12 Dec 2022 12:00",
            "username": "fabriciollf",
            "content": "A and E<br>https://aws.amazon.com/blogs/security/amazon-elasticache-now-supports-encryption-for-elasticache-for-redis/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 739914,
            "date": "Fri 09 Dec 2022 09:19",
            "username": "aws_leoaws_leo",
            "content": "A) ElastiCache for Redis is always a good option as a distributed cache for session management - https://aws.amazon.com/getting-started/hands-on/building-fast-session-caching-with-amazon-elasticache-for-redis/<br>It also supports encrypt at rest - https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/at-rest-encryption.html<br><br>E) DynamoDB is also common to store session state with TTL support. And all user data stored in Amazon DynamoDB is fully encrypted at rest - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.htmlElastiCache Memcached can be used for session storage. However, the question asks encryption at rest while ElastiCache Memcached only supports encryption in-transit<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html",
            "upvote_count": "33",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 739924,
            "date": "Fri 09 Dec 2022 09:28",
            "username": "aws_leo",
            "content": "ElastiCache Memcached can be used for session storage. However, the question asks encryption at rest while ElastiCache Memcached only supports encryption in-transit<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 734948,
            "date": "Sun 04 Dec 2022 09:44",
            "username": "asiutrafswklotto1",
            "content": "Of course, it is A and BAmazon ElastiCache for Memcached now supports encryption of data in transit",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 743361,
            "date": "Mon 12 Dec 2022 22:53",
            "username": "fswklotto1",
            "content": "Amazon ElastiCache for Memcached now supports encryption of data in transit",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734843,
            "date": "Sun 04 Dec 2022 05:20",
            "username": "G4Exams",
            "content": "Redis and DynamoDB.  I don't understand why so many vote for A&B.  What should Memcache be useful for in this scenario ? Hopefully somebody can unswer this. Redis is without a doubt right...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 733991,
            "date": "Fri 02 Dec 2022 19:40",
            "username": "gpit",
            "content": "ElasticCache Redis can store session obj and has high availability and can be encrypted. DynamoDb is encrypted by default and its speed can used for storing session info",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 729930,
            "date": "Tue 29 Nov 2022 06:14",
            "username": "michaldavid",
            "content": "AAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729929,
            "date": "Tue 29 Nov 2022 06:12",
            "username": "michaldavid",
            "content": "A and B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 729455,
            "date": "Mon 28 Nov 2022 18:07",
            "username": "fswklotto1",
            "content": "A and B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 726398,
            "date": "Fri 25 Nov 2022 06:20",
            "username": "k1kavi1k1kavi1",
            "content": "A and could it be D ?<br>https://docs.aws.amazon.com/aws-sdk-php/v2/guide/feature-dynamodb-session-handler.htmlhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.htmlTypo, i meant E -DynamoDB",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 726399,
            "date": "Fri 25 Nov 2022 06:21",
            "username": "k1kavi1",
            "content": "Typo, i meant E -DynamoDB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725755,
            "date": "Thu 24 Nov 2022 11:58",
            "username": "CloudHandsOn",
            "content": "A, B<br>Only caching/encrypting options I see to choose from",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725661,
            "date": "Thu 24 Nov 2022 09:25",
            "username": "absolutic",
            "content": "I believe it's A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723595,
            "date": "Mon 21 Nov 2022 15:21",
            "username": "dark_cherrymon",
            "content": "reddis is encrypted at rest but i can only see memcache encrypted at transit.<br><br>https://aws.amazon.com/about-aws/whats-new/2022/05/amazon-elasticache-memcached-supports-encryption-data-transit/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723589,
            "date": "Mon 21 Nov 2022 15:17",
            "username": "sionita",
            "content": "A, B Amazon ElastiCache for Redis and Memcached<br>https://aws.amazon.com/caching/session-management/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#155",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming application stores scores for players in an Amazon DynamoDB table that has four attributes user_id, user_name, user_score and user_rank. The users are allowed to update their names only. A user is authenticated by web identity federation.<br><br>Which set of conditions should be added in the policy attached to the role for the dynamodb:PutItem API call?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#155",
            "answers": [
              {
                "choice": "<p>A. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 155 discussion",
        "discusstion": [
          {
            "id": 729457,
            "date": "Mon 28 Nov 2022 18:10",
            "username": "fswklotto1",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726403,
            "date": "Fri 25 Nov 2022 06:25",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725758,
            "date": "Thu 24 Nov 2022 12:02",
            "username": "CloudHandsOn",
            "content": "I choose A,<br>the identifier is the user id, and attribute that can be changed is the user_name",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725165,
            "date": "Wed 23 Nov 2022 14:37",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#156",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting a workshop for external users and wants to share the reference documents with the external users for 7 days. The company stores the reference documents in an Amazon S3 bucket that the company owns.<br><br>What is the MOST secure way to share the documents with the external users?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#156",
            "answers": [
              {
                "choice": "<p>A. Use S3 presigned URLs to share the documents with the external users. Set an expiration time of 7 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Move the documents to an Amazon WorkDocs folder Share the links of the WorkDocs folder with the external users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create temporary IAM users that have read-only access to the S3 bucket. Share the access keys with the external users. Expire the credentials after 7 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a role that has read-only access to the S3 bucket. Share the Amazon Resource Name (ARN) of this role with the external users.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 156 discussion",
        "discusstion": [
          {
            "id": 729932,
            "date": "Tue 29 Nov 2022 06:15",
            "username": "michaldavid",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726405,
            "date": "Fri 25 Nov 2022 06:29",
            "username": "k1kavi1",
            "content": "A<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723598,
            "date": "Mon 21 Nov 2022 15:23",
            "username": "sionita",
            "content": "A-pre-signed URL's",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#157",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is storing many objects in a single Amazon S3 bucket. The developer needs to optimize the S3 bucket for high request rates.<br><br>How should the developer store the objects to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#157",
            "answers": [
              {
                "choice": "<p>A. Store the objects by using S3 Intelligent-Tiering.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the objects at the root of the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the objects by using object key names distributed across multiple prefixes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store each object with an object tag named \"prefix\" that contains a unique value.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 157 discussion",
        "discusstion": [
          {
            "id": 739939,
            "date": "Fri 09 Dec 2022 09:50",
            "username": "aws_leo",
            "content": "Prefix should be a correct answer:<br>For example, your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per partitioned prefix. There are no limits to the number of prefixes in a bucket. You can increase your read or write performance by using parallelization. For example, if you create 10 prefixes in an Amazon S3 bucket to parallelize reads, you could scale your read performance to 55,000 read requests per second<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729936,
            "date": "Tue 29 Nov 2022 06:17",
            "username": "michaldavid",
            "content": "ccccccc",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726409,
            "date": "Fri 25 Nov 2022 06:34",
            "username": "k1kavi1",
            "content": "C.  Using prefix is better option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725761,
            "date": "Thu 24 Nov 2022 12:10",
            "username": "CloudHandsOn",
            "content": "C. <br>Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 725651,
            "date": "Thu 24 Nov 2022 09:08",
            "username": "AKRAMPO",
            "content": "C https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 725020,
            "date": "Wed 23 Nov 2022 10:06",
            "username": "saysamsufsaysamsuf",
            "content": "i chose A because of the phrase: request rate which denotes that some items are more frequently accessed than others. https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/please disregard my answer- i must have been drunk while answering. lol. i go with C",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728051,
            "date": "Sun 27 Nov 2022 09:42",
            "username": "saysamsuf",
            "content": "please disregard my answer- i must have been drunk while answering. lol. i go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723603,
            "date": "Mon 21 Nov 2022 15:26",
            "username": "dark_cherrymon",
            "content": "cccccccc",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#158",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a serverless application that uses AWS Lambda functions and AWS Systems Manager parameters to store configuration data. The company moves the Lambda functions inside the VPC and into private subnets. The Lambda functions are now producing errors in their attempts to access Systems Manager parameters.<br><br>Which solution will allow the Lambda functions to access Systems Manager parameters inside the VPC?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#158",
            "answers": [
              {
                "choice": "<p>A. Configure security groups to allow access to Systems Manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an interface VPC endpoint for Systems Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Internet gateway from inside the VPC. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a gateway VPC endpoint for Systems Manager.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 158 discussion",
        "discusstion": [
          {
            "id": 743409,
            "date": "Tue 13 Dec 2022 00:21",
            "username": "fabriciollf",
            "content": "B is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 740165,
            "date": "Fri 09 Dec 2022 14:53",
            "username": "techiegeekie",
            "content": "gateway endpoints only support s3 and dynamodb",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729937,
            "date": "Tue 29 Nov 2022 06:18",
            "username": "michaldavid",
            "content": "bbbbbbbbb",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725762,
            "date": "Thu 24 Nov 2022 12:13",
            "username": "CloudHandsOn",
            "content": "B. <br>This allows you to keep the resource inside the VPC private, while still accessing system manager privately",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725654,
            "date": "Thu 24 Nov 2022 09:12",
            "username": "AKRAMPO",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/lambda-vpc-parameter-store/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723620,
            "date": "Mon 21 Nov 2022 15:34",
            "username": "sionitaspeer",
            "content": "D-Create a gateway VPC endpoint for Systems Manager.<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-vpc-parameter-store/The link you have provided talks about creating Interface Endpoint and not Gateway VPC Endpoint. So correct answer would be 'B'",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 753629,
            "date": "Thu 22 Dec 2022 21:52",
            "username": "speer",
            "content": "The link you have provided talks about creating Interface Endpoint and not Gateway VPC Endpoint. So correct answer would be 'B'",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723609,
            "date": "Mon 21 Nov 2022 15:29",
            "username": "dark_cherrymon",
            "content": "B<br><br>\\\"Set up an interface endpoint in your Amazon VPC that allows your function to access Systems Manager.\\\"<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-vpc-parameter-store/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#159",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A research company has a website that is used once each day to perform scientific calculations based on inputs that are submitted through a webpage. The calculations are CPU intensive. An AWS Lambda function performs the calculations once each day. Users occasionally receive errors because of Lambda function timeouts.<br><br>Which change will reduce the Lambda function's runtime duration?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#159",
            "answers": [
              {
                "choice": "<p>A. Configure Lambda to run the function on an Amazon EC2 burstable instance type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Lambda to run the function on an Amazon EC2 instance type that is recommended for high performance computing (HPC) workloads.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Lambda to run the function with a larger reserved concurrency value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Lambda to run the function with a larger memory value.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 159 discussion",
        "discusstion": [
          {
            "id": 739944,
            "date": "Fri 09 Dec 2022 10:01",
            "username": "aws_leo",
            "content": "There are similar questions like this one, the keyword here is CPU intensive -> increase Lamba RAM",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729939,
            "date": "Tue 29 Nov 2022 06:19",
            "username": "michaldavid",
            "content": "dddddddd",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726413,
            "date": "Fri 25 Nov 2022 06:40",
            "username": "k1kavi1",
            "content": "D<br>https://docs.aws.amazon.com/lambda/latest/operatorguide/configurations.html#cpu-bound-config",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723893,
            "date": "Mon 21 Nov 2022 21:40",
            "username": "saysamsuf",
            "content": "I will go with D as memory increment in lambda helps with performance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723631,
            "date": "Mon 21 Nov 2022 15:45",
            "username": "sionita",
            "content": "D<br>The amount of memory also determines the amount of virtual CPU available to a function. Adding more memory proportionally increases the amount of CPU, increasing the overall computational power available.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#160",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an application. New users of the application must be able to create an account and register by using their own social media accounts.<br><br>Which AWS service or resource should the developer use to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#160",
            "answers": [
              {
                "choice": "<p>A. IAM role<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Cognito identity pools<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Cognito user pools<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Directory Service<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 160 discussion",
        "discusstion": [
          {
            "id": 729940,
            "date": "Tue 29 Nov 2022 06:20",
            "username": "michaldavid",
            "content": "cccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726415,
            "date": "Fri 25 Nov 2022 06:42",
            "username": "k1kavi1",
            "content": "C<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725083,
            "date": "Wed 23 Nov 2022 12:32",
            "username": "saysamsuf",
            "content": ".....user pool",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725082,
            "date": "Wed 23 Nov 2022 12:31",
            "username": "saysamsuf",
            "content": "Perfect use<br>case of Amazon cognito",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#161",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer wants to use AWS CodeDeploy to deploy an Amazon Elastic Container Service (Amazon ECS) service.<br><br>What are the MINIMUM properties required in the 'resources' section of the AppSpec file for CodeDeploy to deploy the ECS service successfully?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#161",
            "answers": [
              {
                "choice": "<p>A. name, alias currentversion, and targetversion<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. TaskDefinition, ContainerName, and PlatformVersion<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. TaskDefimtion, ContainerName, and ContainerPort<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. name, currentversion, NetworkConfiguration, and PlatformVersion<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 161 discussion",
        "discusstion": [
          {
            "id": 745465,
            "date": "Wed 14 Dec 2022 22:32",
            "username": "BelloMio",
            "content": "C TaskDefimtion, ContainerName, and ContainerPort<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-create-appspec-file.html<br>\\\"The AppSpec file for an Amazon ECS deployment specifies your task definition, container name, and container port\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 744999,
            "date": "Wed 14 Dec 2022 12:12",
            "username": "fabriciollf",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-resources.html#reference-appspec-file-structure-resources-ecs<br><br>TaskDefinition =E2=80=93 Required. This is the task definition for the Amazon ECS service to deploy. It is specified with the ARN of the task definition. The ARN format is arn:aws:ecs:aws-region:account-id:task-definition/task-definition-family:task-definition-revision. For more information, see Amazon Resource Names (ARNs) and AWS service namespaces.<br><br>ContainerName =E2=80=93 Required. This is the name of the Amazon ECS container that contains your Amazon ECS application. It must be a container specified in your Amazon ECS task definition.<br><br>ContainerPort =E2=80=93 Required. This is the port on the container where traffic will be routed to.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734227,
            "date": "Sat 03 Dec 2022 06:42",
            "username": "SBoksh",
            "content": "it' for ECSnot EC2",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729941,
            "date": "Tue 29 Nov 2022 06:21",
            "username": "michaldavid",
            "content": "cccccc",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727915,
            "date": "Sun 27 Nov 2022 04:54",
            "username": "Chandra_07",
            "content": "C<br><br>https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-create-appspec-file.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 726417,
            "date": "Fri 25 Nov 2022 06:48",
            "username": "k1kavi1",
            "content": "C - Below is the configuration required for ECS<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-resources.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 723640,
            "date": "Mon 21 Nov 2022 15:50",
            "username": "sionita",
            "content": "C - TaskDefinition, ContainerName, and ContainerPort<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-create-appspec-file.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 723616,
            "date": "Mon 21 Nov 2022 15:33",
            "username": "dark_cherrymonryarya",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-resources.html<br><br>\\\"<br>resources:<br>- name-of-function-to-deploy:<br>type: \\\"AWS::Lambda::Function\\\"<br>properties:<br>name: name-of-lambda-function-to-deploy<br>alias: alias-of-lambda-function-to-deploy<br>currentversion: version-of-the-lambda-function-traffic-currently-points-to<br>targetversion: version-of-the-lambda-function-to-shift-traffic-to<br>\\\"it is for lambda function",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 745763,
            "date": "Thu 15 Dec 2022 07:14",
            "username": "ryarya",
            "content": "it is for lambda function",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#162",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed a single-page application on AWS. The application stores assets in an Amazon S3 bucket. The application has an Amazon CloudFront distribution that is configured with the S3 bucket as the origin. Amazon API Gateway APIs access AWS Lambda functions that store information in an Amazon DynamoDB table. The application ingests a payload that includes 20 fields of sensitive data.<br><br>Which combination of steps should a developer take to protect the sensitive data through its entire lifecycle in AWS? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#162",
            "answers": [
              {
                "choice": "<p>A. Create a Lambda@Edge function to encrypt data when CloudFront processes a client request. Configure the distribution to invoke the Lambda@Edge function when the origin request event occurs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Generate an AWS Key Management Service (AWS KMS) customer managed key that Lambda@Edge can use.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an SSL/TLS certificate in AWS Certificate Manager (ACM). Associate the certificate with the Network Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up a Network Load Balancer for API Gateway private integrations.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the data in the S3 bucket by using server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Transfer the encrypted data from the S3 bucket to the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 162 discussion",
        "discusstion": [
          {
            "id": 766787,
            "date": "Thu 05 Jan 2023 16:41",
            "username": "renmathw",
            "content": "Okie since already encrypted by Lambda@Edge no nned to encrypt again..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 766785,
            "date": "Thu 05 Jan 2023 16:40",
            "username": "renmathw",
            "content": "Why can't it be A & E ? since its sensitive data encryption might be required at S3 also, I' m I correct...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729943,
            "date": "Tue 29 Nov 2022 06:24",
            "username": "michaldavid",
            "content": "A and B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 726421,
            "date": "Fri 25 Nov 2022 06:55",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/security/how-to-protect-sensitive-data-for-its-entire-lifecycle-in-aws/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 725771,
            "date": "Thu 24 Nov 2022 12:29",
            "username": "CloudHandsOn",
            "content": "I will go with A,B according to the doc. use Lambda @Edge, along with KMS that Lambda Edge can use<br>reference: https://aws.amazon.com/blogs/security/how-to-protect-sensitive-data-for-its-entire-lifecycle-in-aws/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723682,
            "date": "Mon 21 Nov 2022 16:12",
            "username": "sionita",
            "content": "https://aws.amazon.com/blogs/security/how-to-protect-sensitive-data-for-its-entire-lifecycle-in-aws/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 723680,
            "date": "Mon 21 Nov 2022 16:10",
            "username": "sionita",
            "content": "A and B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#163",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application that stores data in an Amazon DynamoDB table by using the Putltem API operation. The table has a partition key of streamID and has a sort key of seqID.  The developer needs to make sure that the Putltem invocation does not overwrite the existing partition key and sort key.<br><br>Which condition expression will maintain the uniqueness of the partition key and the sort key?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#163",
            "answers": [
              {
                "choice": "<p>A. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 163 discussion",
        "discusstion": [
          {
            "id": 745221,
            "date": "Wed 14 Dec 2022 16:35",
            "username": "freerider76",
            "content": "aws dynamodb put-item \\<br>--table-name ProductCatalog \\<br>--item file://item.json \\<br>--condition-expression \\\"attribute_not_exists(Id)\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 743353,
            "date": "Mon 12 Dec 2022 22:44",
            "username": "fabriciollf",
            "content": "The corretc is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729944,
            "date": "Tue 29 Nov 2022 06:25",
            "username": "michaldavid",
            "content": "aaaaaaaaaa",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726423,
            "date": "Fri 25 Nov 2022 06:59",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725777,
            "date": "Thu 24 Nov 2022 12:34",
            "username": "CloudHandsOn",
            "content": "Answer is A. <br>C does not make sense, as that condition will attempt to PutItem if the StreamID and SeqID is is found.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725663,
            "date": "Thu 24 Nov 2022 09:32",
            "username": "AKRAMPO",
            "content": "A .....To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725248,
            "date": "Wed 23 Nov 2022 17:04",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#164",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created an AWS Lambda function that is written in Python. The Lambda function reads data from objects in Amazon S3 and writes data to an Amazon DynamoDB table.<br><br>The function is successfully invoked from an S3 event notification when an object is created. However, the function fails when it attempts to write to the DynamoDB table.<br><br>What is the MOST likely cause of this issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#164",
            "answers": [
              {
                "choice": "<p>A. The Lambda function's concurrency limit has been exceeded.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The DynamoDB table requires a global secondary index (GSI) to support writes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The Lambda function does not have IAM permissions to write to DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The DynamoDB table is not running in the same Availability Zone as the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 164 discussion",
        "discusstion": [
          {
            "id": 729946,
            "date": "Tue 29 Nov 2022 06:26",
            "username": "michaldavid",
            "content": "cccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726425,
            "date": "Fri 25 Nov 2022 07:03",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_lambda-access-dynamodb.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723684,
            "date": "Mon 21 Nov 2022 16:15",
            "username": "sionita",
            "content": "C -The Lambda function does not have IAM permissions to write to DynamoDB. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#165",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team wants to build a continuous integration/continuous delivery (CI/CD) pipeline. The team is using AWS CodePipeline to automate the code build and deployment. The team wants to store the program code to prepare for the CI/CD pipeline.<br><br>Which AWS service should the team use to store the program code?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#165",
            "answers": [
              {
                "choice": "<p>A. AWS CodeDeploy<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS CodeArtifact<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CodeCommit<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CodeGuru<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 165 discussion",
        "discusstion": [
          {
            "id": 763328,
            "date": "Sun 01 Jan 2023 20:50",
            "username": "nharaz",
            "content": "AWS CodeCommit =E2=80=93 A fully-managed source control service that hosts secure Git-based repositories. CodeCommit makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem. This solution uses CodeCommit to create a repository to store the application and deployment codes.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729947,
            "date": "Tue 29 Nov 2022 06:27",
            "username": "michaldavid",
            "content": "cccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726426,
            "date": "Fri 25 Nov 2022 07:08",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/devops/complete-ci-cd-with-aws-codecommit-aws-codebuild-aws-codedeploy-and-aws-codepipeline/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 725784,
            "date": "Thu 24 Nov 2022 12:40",
            "username": "CloudHandsOn",
            "content": "I believe its C, AWS CodeCommit.<br>Not sure if the code-artifact option fits this use case.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725092,
            "date": "Wed 23 Nov 2022 12:54",
            "username": "saysamsuf",
            "content": "This is confusing for me. I will lean towards code commit which is like a git-hub preparatory for cicd jobs. This phrase \\\"The team wants to store the program code to prepare for the CI/CD pipeline\\\" is my cue to that . AWS code-artifacts works like nexus to store packages that have undergone build and maybe test process",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#166",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer supports an application that accesses data in an Amazon DynamoDB table. One of the item attributes is expiration Date in the timestamp format. The application uses this attribute to find items, archive them, and remove them from the table based on the timestamp value.<br><br>The application will be decommissioned soon, and the developer must find another way to implement this functionality. The developer needs a solution that will require the least amount of code to write.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#166",
            "answers": [
              {
                "choice": "<p>A. Enable TTL on the expirationDate attribute in the table. Create a DynamoDB stream. Create an AWS Lambda function to process the deleted items. Create a DynamoDB trigger for the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create two AWS Lambda functions: one to delete the items and one to process the items. Create a DynamoDB stream. Use the DeleteItem API operation to delete the items based on the expirationDate attribute. Use the GetRecords API operation to get the items from the DynamoDB stream and process them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create two AWS Lambda functions: one to delete the items and one to process the items. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule to invoke the Lambda functions. Use the DeleteItem API operation to delete the items based on the expirationDate attribute. Use the GetRecords API operation to get the items from the DynamoDB table and process them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable TTL on the expirationDate attribute in the table. Specify an Amazon Simple Queue Service (Amazon SQS) dead-letter queue as the target to delete the items. Create an AWS Lambda function to process the items.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 166 discussion",
        "discusstion": [
          {
            "id": 760664,
            "date": "Thu 29 Dec 2022 07:30",
            "username": "thensanity",
            "content": "least amount of code to write - dynamoDB ez",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729952,
            "date": "Tue 29 Nov 2022 06:29",
            "username": "michaldavid",
            "content": "aaaaaaaaa",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726429,
            "date": "Fri 25 Nov 2022 07:14",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/database/automatically-archive-items-to-s3-using-dynamodb-time-to-live-with-aws-lambda-and-amazon-kinesis-firehose/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725794,
            "date": "Thu 24 Nov 2022 12:48",
            "username": "CloudHandsOn",
            "content": "I believe the answer is A. <br>We can set TTL in dynamoDB to remove items",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725256,
            "date": "Wed 23 Nov 2022 17:20",
            "username": "kapil206001",
            "content": "A<br>https://aws.amazon.com/blogs/database/automatically-archive-items-to-s3-using-dynamodb-time-to-live-with-aws-lambda-and-amazon-kinesis-firehose/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 723694,
            "date": "Mon 21 Nov 2022 16:21",
            "username": "sionita",
            "content": "A- TTL and a DynamoDB stream",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 723626,
            "date": "Mon 21 Nov 2022 15:41",
            "username": "dark_cherrymon",
            "content": "ccccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#167",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has developed a new serverless application using AWS Lambda functions that will be deployed using the AWS Serverless Application Model (AWS SAM) CLI.<br><br>Which step should the developer complete prior to deploying the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#167",
            "answers": [
              {
                "choice": "<p>A. Compress the application to a .zip file and upload it into AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Test the new AWS Lambda function by first tracing it in AWS X-Ray.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Bundle the serverless application using a SAM package.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create the application environment using the eb create my-env command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 167 discussion",
        "discusstion": [
          {
            "id": 729953,
            "date": "Tue 29 Nov 2022 06:30",
            "username": "michaldavid",
            "content": "ccccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726430,
            "date": "Fri 25 Nov 2022 07:19",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam-deploy-update.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723698,
            "date": "Mon 21 Nov 2022 16:24",
            "username": "sionita",
            "content": "C Bundle the serverless application using a SAM package.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 723629,
            "date": "Mon 21 Nov 2022 15:43",
            "username": "dark_cherrymon",
            "content": "cccc<br><br>https://www.examtopics.com/discussions/amazon/view/28650-exam-aws-certified-developer-associate-topic-1-question-312/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#168",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is working on an ecommerce website. The developer wants to review server logs without logging in to each of the application servers individually. The website runs on multiple Amazon EC2 instances, is written in Python, and needs to be highly available.<br><br>How can the developer update the application to meet these requirements with MINIMUM changes?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#168",
            "answers": [
              {
                "choice": "<p>A. Rewrite the application to be cloud native and to run on AWS Lambda, where the logs can be reviewed in Amazon CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up centralized logging by using Amazon OpenSearch Service (Amazon Elasticsearch Service), Logstash, and OpenSearch Dashboards (Kibana).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Scale down the application to one larger EC2 instance where only one instance is recording logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install the unified Amazon CloudWatch agent on the EC2 instances. Configure the agent to push the application logs to CloudWatch.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 168 discussion",
        "discusstion": [
          {
            "id": 729955,
            "date": "Tue 29 Nov 2022 06:30",
            "username": "michaldavid",
            "content": "dddddddddd",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726431,
            "date": "Fri 25 Nov 2022 07:23",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723635,
            "date": "Mon 21 Nov 2022 15:46",
            "username": "dark_cherrymon",
            "content": "D<br><br>https://www.examtopics.com/discussions/amazon/view/69058-exam-aws-certified-developer-associate-topic-1-question-399/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#169",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs an event-management platform to accept registrations for an upcoming event. The platform must perform a single invocation of an existing AWS Lambda function 10 minutes after a user completes a new account registration.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#169",
            "answers": [
              {
                "choice": "<p>A. Add an item to an Amazon DynamoDB table. Set the item TTL to 10 minutes. Invoke the Lambda function when the TTL expires.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an ongoing Amazon EventBridge (Amazon CloudWatch Events) rule with a rate expression of 600 seconds. Create a rule/target to invoke the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Send a message to an Amazon Simple Queue Service (Amazon SQS) delay queue. Set the queue to 600 seconds. Configure the Lambda function with the queue as an event source.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Put a record in Amazon Kinesis Data Streams. Configure the Lambda function to use the data stream as an event source. Define the shard iterator AT_TIMESTAMP setting to 10 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 169 discussion",
        "discusstion": [
          {
            "id": 754326,
            "date": "Fri 23 Dec 2022 16:15",
            "username": "kvttieyua",
            "content": "Any idea why not A?You can't invoke lambda from TTL, need DynamoDb Stream first",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 763022,
            "date": "Sun 01 Jan 2023 03:59",
            "username": "tieyua",
            "content": "You can't invoke lambda from TTL, need DynamoDb Stream first",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734237,
            "date": "Sat 03 Dec 2022 07:11",
            "username": "SBoksh",
            "content": "delay queue to hide the message for first 10 mins",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729956,
            "date": "Tue 29 Nov 2022 06:31",
            "username": "michaldavid",
            "content": "I'd say C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727972,
            "date": "Sun 27 Nov 2022 07:58",
            "username": "lrom",
            "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726432,
            "date": "Fri 25 Nov 2022 07:29",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-run-lambda-schedule.htmlC is correct",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734875,
            "date": "Sun 04 Dec 2022 07:25",
            "username": "k1kavi1",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723638,
            "date": "Mon 21 Nov 2022 15:48",
            "username": "dark_cherrymon",
            "content": "cccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#170",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>How would a developer notify users when a new item is written to a DynamoDB table without affecting the provisioned throughput?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#170",
            "answers": [
              {
                "choice": "<p>A. Set up a DynamoDB stream to trigger a Lambda function that sends an SNS notification to users.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Schedule an Amazon CloudWatch event to regularly trigger a Lambda function that scans the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run a polling application that queries the DynamoDB table at one-second intervals and send SNS notification to users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Embed a Lambda notification function in DynamoDB and configure DynamoDB to trigger the embedded Lambda function when changes are made.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 170 discussion",
        "discusstion": [
          {
            "id": 735010,
            "date": "Sun 04 Dec 2022 11:49",
            "username": "asiutra",
            "content": "the answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729957,
            "date": "Tue 29 Nov 2022 06:32",
            "username": "michaldavid",
            "content": "aaaaaaa",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726435,
            "date": "Fri 25 Nov 2022 07:32",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#171",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a web application that is deployed on Amazon EC2 instances behind an internet-facing Application Load Balancer (ALB). The developer must add an Amazon CloudFront distribution in front of the ALB.  The developer also must ensure that customer data from outside the VPC is encrypted in transit.<br><br>Which combination of CloudFront configuration settings should the developer use to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#171",
            "answers": [
              {
                "choice": "<p>A. Restrict viewer access by using signed URLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set the Origin Protocol Policy setting to Match Viewer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable field-level encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable automatic object compression.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set the Viewer Protocol Policy setting to Redirect HTTP to HTTPS.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 171 discussion",
        "discusstion": [
          {
            "id": 729962,
            "date": "Tue 29 Nov 2022 06:34",
            "username": "michaldavid",
            "content": "B and E",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 726441,
            "date": "Fri 25 Nov 2022 07:45",
            "username": "k1kavi1",
            "content": "Amazon CloudFront encryption in transit best options areHTTPS & field-level encryption https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 723642,
            "date": "Mon 21 Nov 2022 15:51",
            "username": "dark_cherrymon",
            "content": "BE<br><br>https://www.examtopics.com/discussions/amazon/view/68872-exam-aws-certified-developer-associate-topic-1-question-397/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          }
        ]
      },
      {
        "question_id": "#172",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a web application that must share secure documents with end users. The documents are stored in a private Amazon S3 bucket. The application must allow only authenticated users to download specific documents when requested, and only for a duration of 15 minutes.<br><br>How can the developer meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#172",
            "answers": [
              {
                "choice": "<p>A. Copy the documents to a separate S3 bucket that has a lifecycle policy for deletion after 15 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a presigned S3 URL using the AWS SDK with an expiration time of 15 minutes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use server-side encryption with AWS KMS managed keys (SSE-KMS) and download the documents using HTTPS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the S3 bucket policy to only allow specific users to download the documents. Revert the change after 15 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 172 discussion",
        "discusstion": [
          {
            "id": 729963,
            "date": "Tue 29 Nov 2022 06:36",
            "username": "michaldavid",
            "content": "bbbbbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726442,
            "date": "Fri 25 Nov 2022 07:47",
            "username": "k1kavi1",
            "content": "S3 Presigned URLs for limited time access",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723645,
            "date": "Mon 21 Nov 2022 15:52",
            "username": "dark_cherrymon",
            "content": "B<br><br>https://www.examtopics.com/discussions/amazon/view/28955-exam-aws-certified-developer-associate-topic-1-question-303/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#173",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate an existing web application to AWS. The application consists of two web servers and a MySQL database.<br><br>The company wants the application to automatically scale in response to demand. The company also wants to reduce its operational overhead for database backups and maintenance. The company needs the ability to deploy multiple versions of the application concurrently.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#173",
            "answers": [
              {
                "choice": "<p>A. Deploy the application to AWS Elastic Beanstalk. Migrate the database to an Amazon RDS Multi-AZ DB instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI. Integrate the Auto Scaling group with an Application Load Balancer for the web servers. Migrate the database to a MySQL instance that runs on an Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy the application to AWS Elastic Beanstalk. Migrate the database to a MySQL instance that runs on an Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI. Integrate the Auto Scaling group with an Application Load Balancer for the web servers. Migrate the database to an Amazon RDS Multi-AZ DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 173 discussion",
        "discusstion": [
          {
            "id": 729964,
            "date": "Tue 29 Nov 2022 06:36",
            "username": "michaldavid",
            "content": "aaaaaaa",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726446,
            "date": "Fri 25 Nov 2022 07:54",
            "username": "k1kavi1",
            "content": "ElasticBeanStalk for deploying multiple versions of application concurrently<br><br>RDS for database backups and maintenance<br><br>https://aws.amazon.com/rds/features/backup/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723646,
            "date": "Mon 21 Nov 2022 15:53",
            "username": "dark_cherrymon",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#174",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company must store original customer records for 10 years for legal reasons. A complete record contains personally identifiable information (PII). According to local regulations. PII is available to only certain people in the company and must not be shared with third parties. The company needs to make the records available to third-party organizations for statistical analysis without sharing the PII.<br><br>A developer wants to store the original immutable record in Amazon S3. Depending on who accesses the S3 document, the document should be returned as is or with all the PII removed. The developer has written an AWS Lambda function to remove the PII from the document. The function is named removePii.<br><br>What should the developer do so that the company can meet the PII requirements while maintaining only one copy of the document?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#174",
            "answers": [
              {
                "choice": "<p>A. Set up an S3 event notification that invokes the removePii function when an S3 GET request is made. Call Amazon S3 by using a GET request to access the object without PII.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up an S3 event notification that invokes the removePii function when an S3 PUT request is made. Call Amazon S3 by using a PUT request to access the object without PII.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an S3 Object Lambda access point from the S3 console. Select the removePii function. Use S3 Access Points to access the object without PII.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an S3 access point from the S3 console. Use the access point name to call the GetObjectLegalHold S3 API function. Pass in the removePii function name to access the object without PII.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 174 discussion",
        "discusstion": [
          {
            "id": 758906,
            "date": "Tue 27 Dec 2022 19:20",
            "username": "by116549",
            "content": "Correct you need to have an Access Point:<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/tutorial-s3-object-lambda-redact-pii.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734277,
            "date": "Sat 03 Dec 2022 09:06",
            "username": "SBoksh",
            "content": "S3 event notification is not triggered for Get, list or Head. it is S3 object lambda access point<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729966,
            "date": "Tue 29 Nov 2022 06:39",
            "username": "michaldavid",
            "content": "cccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726453,
            "date": "Fri 25 Nov 2022 08:00",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723738,
            "date": "Mon 21 Nov 2022 17:24",
            "username": "sionita",
            "content": "C https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723650,
            "date": "Mon 21 Nov 2022 15:56",
            "username": "dark_cherrymondark_cherrymondark_cherrymon",
            "content": "cccccccchttps://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.htmlhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723655,
            "date": "Mon 21 Nov 2022 15:57",
            "username": "dark_cherrymondark_cherrymon",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.htmlhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 723657,
            "date": "Mon 21 Nov 2022 15:58",
            "username": "dark_cherrymon",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#175",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing an AWS Lambda function that creates temporary files that are less than 10 MB during invocation. The temporary files will be accessed and modified multiple times during invocation. The developer has no need to save or retrieve these files in the future.<br><br>Where should the temporary files be stored?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#175",
            "answers": [
              {
                "choice": "<p>A. the /tmp directory<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Elastic File System (Amazon EFS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Elastic Block Store (Amazon EBS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 175 discussion",
        "discusstion": [
          {
            "id": 729968,
            "date": "Tue 29 Nov 2022 06:40",
            "username": "michaldavid",
            "content": "aaaaaa",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726456,
            "date": "Fri 25 Nov 2022 08:02",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/compute/choosing-between-aws-lambda-data-storage-options-in-web-apps/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#176",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a web and mobile application for two types of users: regular users and guest users. Regular users are required to log in, but guest users do not log in. Users should see only their data, regardless of whether they authenticate. Users need AWS credentials before they can access AWS resources.<br><br>What is the MOST secure solution that the developer can implement to allow access for guest users?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#176",
            "answers": [
              {
                "choice": "<p>A. Use an Amazon Cognito credentials provider to issue temporary credentials that are linked to an unauthenticated role that has access to the required resources.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up an IAM user that has permissions to the required resources. Hardcode the IAM credentials in the web and mobile application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Generate temporary keys that are stored in AWS Key Management Service (AWS KMS). Use the temporary keys to access the required resources.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Generate temporary credentials. Store the temporary credentials in AWS Secrets Manager. Use the temporary credentials to access the required resources.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 176 discussion",
        "discusstion": [
          {
            "id": 763173,
            "date": "Sun 01 Jan 2023 12:45",
            "username": "tieyua",
            "content": "Sounds like our in-house experts given up completely since about page 15 or so ^_^",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 761783,
            "date": "Fri 30 Dec 2022 09:46",
            "username": "nharaz",
            "content": "Amazon Cognito identity pools provide temporary AWS credentials for users who are guests (unauthenticated) and for users who have been authenticated and received a token. An identity pool is a store of user identity data specific to your account.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729969,
            "date": "Tue 29 Nov 2022 06:41",
            "username": "michaldavid",
            "content": "aaaaaaaa",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726460,
            "date": "Fri 25 Nov 2022 08:08",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725834,
            "date": "Thu 24 Nov 2022 13:39",
            "username": "CloudHandsOn",
            "content": "A. <br>perfect job for Cognito",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723992,
            "date": "Tue 22 Nov 2022 00:47",
            "username": "saysamsuf",
            "content": "A seems about right. I stand to be corrected.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#177",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using AWS Elastic Beanstalk to create a deployment for a web application that supports ecommerce. According to a company requirement. Amazon EC2 instances that host one version of the application must be retired when the deployment of a new version is complete.<br><br>Which deployment methods can the developer use to meet this requirement? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#177",
            "answers": [
              {
                "choice": "<p>A. All-al-once deployment<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In-place deployment<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Rolling deployment without an additional batch<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Blue/green deployment<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Immutable deployment<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 177 discussion",
        "discusstion": [
          {
            "id": 734058,
            "date": "Fri 02 Dec 2022 21:47",
            "username": "gpit",
            "content": "C is also fine as it doesn't break the requirement - maybe the eCommerce website has near 0 traffic.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729972,
            "date": "Tue 29 Nov 2022 06:43",
            "username": "michaldavid",
            "content": "D and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 726463,
            "date": "Fri 25 Nov 2022 08:15",
            "username": "k1kavi1",
            "content": "Immutable and Blue/Green code deployed to new instances.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 723667,
            "date": "Mon 21 Nov 2022 16:02",
            "username": "dark_cherrymon",
            "content": "DE, must have 2 at the same time during transition",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: DE"
          }
        ]
      },
      {
        "question_id": "#178",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company caches session information for a web application in an Amazon DynamoDB table. The company wants an automated way to delete old items from the table.<br><br>What is the simplest way to do this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#178",
            "answers": [
              {
                "choice": "<p>A. Write a script that deletes old records; schedule the script as a cron job on an Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Each day, create a new table to hold session data; delete the previous day=E2=80=99s table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an attribute with the expiration time; name the attribute ItemExpiration.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 178 discussion",
        "discusstion": [
          {
            "id": 729976,
            "date": "Tue 29 Nov 2022 06:45",
            "username": "michaldavid",
            "content": "bbbbbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726465,
            "date": "Fri 25 Nov 2022 08:19",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#179",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's new mobile app uses Amazon API Gateway. As the development team completes a new release of its APIs, a developer must safely and transparently roll out the API change.<br><br>What is the SIMPLEST solution for the developer to use for rolling out the new API version to a limited number of users through API Gateway?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#179",
            "answers": [
              {
                "choice": "<p>A. Create a new API in API Gateway. Direct a portion of the traffic to the new API using an Amazon Route 53 weighted routing policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Validate the new API version and promote it to production during the window of lowest expected utilization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement an Amazon CloudWatch alarm to trigger a rollback if the observed HTTP 500 status code rate exceeds a predetermined threshold.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the canary release deployment option in API Gateway. Direct a percentage of the API traffic using the canarySettings setting.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 179 discussion",
        "discusstion": [
          {
            "id": 729978,
            "date": "Tue 29 Nov 2022 06:46",
            "username": "michaldavid",
            "content": "dddddddd",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726466,
            "date": "Fri 25 Nov 2022 08:22",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723672,
            "date": "Mon 21 Nov 2022 16:03",
            "username": "dark_cherrymon",
            "content": "D<br><br>https://www.examtopics.com/discussions/amazon/view/51596-exam-aws-certified-developer-associate-topic-1-question-355/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#180",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing a serverless application that customers use to select seats for a concert venue. Customers send the ticket requests to an Amazon API Gateway API with an AWS Lambda function that acknowledges the order and generates an order ID.  The application includes two additional Lambda functions: one for inventory management and one for payment processing. These two Lambda functions run in parallel and write the order to an Amazon Dynamo DB table.<br><br>The application must provide seats to customers according to the following requirements. If a seat is accidently sold more than once, the first order that the application received must get the seat. In these cases, the application must process the payment for only the first order. However, if the first order is rejected during payment processing, the second order must get the seat. In these cases, the application must process the payment for the second order.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#180",
            "answers": [
              {
                "choice": "<p>A. Send the order ID to an Amazon Simple Notification Service (Amazon SNS) FIFO topic that fans out to one Amazon Simple Queue Service (Amazon SQS) FIFO queue for inventory management and another SQS FIFO queue for payment processing.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the Lambda function that generates the order ID to initiate the Lambda function for inventory management. Then initiate the Lambda function for payment processing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Send the order ID to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the Lambda functions for inventory management and payment processing to the topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deliver the order ID to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda functions for inventory management and payment processing to poll the queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 180 discussion",
        "discusstion": [
          {
            "id": 763615,
            "date": "Mon 02 Jan 2023 10:30",
            "username": "Xandero",
            "content": "A -> https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 763180,
            "date": "Sun 01 Jan 2023 13:14",
            "username": "tieyua",
            "content": "With two FIFO Q running in parallel, how do you handle when first payment failed?If you track this via DynamoDB, then your entire application is single threaded.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 743560,
            "date": "Tue 13 Dec 2022 04:32",
            "username": "fswklotto1",
            "content": "Vote for D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729980,
            "date": "Tue 29 Nov 2022 06:48",
            "username": "michaldavid",
            "content": "aaaaaaa",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726468,
            "date": "Fri 25 Nov 2022 08:29",
            "username": "k1kavi1k1kavi1",
            "content": "Inventory & Payment functions are running in parallel. So going with Fanout option.<br>https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.htmlAlso FIFO topics preserve message order",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 733745,
            "date": "Fri 02 Dec 2022 14:21",
            "username": "k1kavi1",
            "content": "Also FIFO topics preserve message order",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725838,
            "date": "Thu 24 Nov 2022 13:47",
            "username": "CloudHandsOnHieuTT",
            "content": "Why not D?in oder ?",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 755497,
            "date": "Sun 25 Dec 2022 08:31",
            "username": "HieuTT",
            "content": "in oder ?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#181",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer wants to implement authentication using Amazon Cognito user pools for an existing API in Amazon API Gateway. After creating the Amazon Cognito user pool, the developer tests the GET request to the API. Unauthenticated requests to the API return a 200 OK status response.<br><br>Which combination of additional steps are required to complete the authentication implementation? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#181",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito user pool.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda authorizer in API Gateway and specify the Amazon Cognito user pool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Specify the authorizer in the GET method section of API Gateway and redeploy the API<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Cognito user pools to make and authenticate the request to API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito identity pool.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 181 discussion",
        "discusstion": [
          {
            "id": 729984,
            "date": "Tue 29 Nov 2022 06:50",
            "username": "michaldavid",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 726470,
            "date": "Fri 25 Nov 2022 08:39",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 725846,
            "date": "Thu 24 Nov 2022 14:11",
            "username": "CloudHandsOn",
            "content": "I believe it=E2=80=99s A,C<br>After the user pool is created in Cognito, an authorizer will need to be created in API Gateway for Cognito (not Lambda) specifying a user pool. Then, redeploying the API after the changes will allow the changes to take effect.<br><br>References:<br>1.) https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html<br>2.) https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api-with-console.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 725773,
            "date": "Thu 24 Nov 2022 12:31",
            "username": "kapil206001",
            "content": "A&C<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#182",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a command line script to launch an Amazon EC2 instance at a preset time with a cron job. The developer will provide a user data script to start a task and then terminate the instance. The task cannot be interrupted and must run to completion.<br><br>How should the developer launch the EC2 instance?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#182",
            "answers": [
              {
                "choice": "<p>A. Use the ec2 start-instances command.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the ec2 request-spot-instances command.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the ec2 run-instances command.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the ec2 purchase-scheduled-instances command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 182 discussion",
        "discusstion": [
          {
            "id": 745591,
            "date": "Thu 15 Dec 2022 02:21",
            "username": "fabriciollf",
            "content": "https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-instances.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729986,
            "date": "Tue 29 Nov 2022 06:50",
            "username": "michaldavid",
            "content": "ccccccc",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 725780,
            "date": "Thu 24 Nov 2022 12:36",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-instances.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#183",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an Amazon DynamoDB table. The entire table must be encrypted at rest.<br><br>Which solution will meet this requirement MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#183",
            "answers": [
              {
                "choice": "<p>A. Create the DynamoDB table by using default encryption settings.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Encrypt the data by using the DynamoDB Encryption Client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. During creation of the DynamoDB table, configure encryption at rest with an AWS Key Management Service (AWS KMS) AWS managed key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. During creation of the DynamoDB table, configure encryption at rest with an AWS Key Management Service (AWS KMS) customer managed key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 183 discussion",
        "discusstion": [
          {
            "id": 726474,
            "date": "Fri 25 Nov 2022 08:47",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725782,
            "date": "Thu 24 Nov 2022 12:39",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html<br>AWS owned key =E2=80=93 Default encryption type. The key is owned by DynamoDB (no additional charge).<br><br>AWS managed key =E2=80=93 The key is stored in your account and is managed by AWS KMS (AWS KMS charges apply).<br><br>Customer managed key =E2=80=93 The key is stored in your account and is created, owned, and managed by you. You have full control over the KMS key (AWS KMS charges apply).",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#184",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company configures an Amazon S3 bucket to deliver S3 object events to Amazon EventBridge (Amazon CloudWatch Events). An EventBridge rule invokes an AWS Lambda function for each object event that is received from the S3 bucket.<br><br>A developer is working on a new version of the Lambda function. To ensure that the new Lambda function works as expected, the developer must run a repeatable test that uses realistic S3 bucket object events. The developer must minimize the amount of code and infrastructure that are required to support the test.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#184",
            "answers": [
              {
                "choice": "<p>A. Create another S3 bucket that can deliver object events to EventBridge. Add another EventBridge rule to deliver data events from the new S3 bucket to the new Lambda function Develop a tool to update objects in the new S3 bucket to produce the test S3 object events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the new Lambda function as an additional target of the existing EventBridge rule. Deliver the S3 object events to the existing Lambda function and the new Lambda function simultaneously.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use EventBridge to archive and replay production S3 object events. Set up a new EventBridge rule to deliver replayed S3 object events to the new Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Develop a tool that uses the EventBridge PutEvents API operation to publish aws.s3 data events. Add a new EventBridge rule that delivers the aws.s3 events to the new Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 184 discussion",
        "discusstion": [
          {
            "id": 729990,
            "date": "Tue 29 Nov 2022 06:54",
            "username": "michaldavid",
            "content": "cccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 725837,
            "date": "Thu 24 Nov 2022 13:44",
            "username": "kapil206001",
            "content": "C<br>https://docs.amazonaws.cn/en_us/eventbridge/latest/userguide/eb-replay-archived-event.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#185",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has built an application running on AWS Lambda using AWS Serverless Application Model (AWS SAM).<br><br>What is the correct sequence of steps to successfully deploy the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#185",
            "answers": [
              {
                "choice": "<p>A. 1. Build the SAM template in Amazon EC2.2. Package the SAM template to Amazon EBS storage.3. Deploy the SAM template from Amazon EBS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 1. Build the SAM template locally.2. Package the SAM template onto Amazon S3.3. Deploy the SAM template from Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. 1. Build the SAM template locally.2. Deploy the SAM template from Amazon S3.3. Package the SAM template for use.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 1. Build the SAM template locally.2. Package the SAM template from AWS CodeCommit.3. Deploy the SAM template to CodeCommit.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 185 discussion",
        "discusstion": [
          {
            "id": 729993,
            "date": "Tue 29 Nov 2022 06:55",
            "username": "michaldavid",
            "content": "bbbbbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726480,
            "date": "Fri 25 Nov 2022 08:54",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 725289,
            "date": "Wed 23 Nov 2022 18:19",
            "username": "saysamsuf",
            "content": "I agree",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#186",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team of developers is using an AWS CodePipeline pipeline as a continuous integration and continuous delivery (CI/CD) mechanism for a web application. A developer has written unit tests to programmatically test the functionality of the application code. The unit tests produce a test report that shows the results of each individual check. The developer now wants to run these tests automatically during the CI/CD process.<br><br>Which solution will meet this requirement with the LEAST operational effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#186",
            "answers": [
              {
                "choice": "<p>A. Write a Git pre-commit hook that runs the tests before every commit. Ensure that each developer who is working on the project has the pre-commit hook installed locally. Review the test report and resolve any issues before pushing changes to AWS CodeCommit.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage after the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage before the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a new stage to the pipeline. Use Jenkins as the provider. Configure CodePipeline to use Jenkins to run the unit tests. Write a Jenkinsfile that fails the stage if any test does not pass. Use the test report plugin for Jenkins to integrate the report with the Jenkins dashboard. View the test results in Jenkins. Resolve any issues.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 186 discussion",
        "discusstion": [
          {
            "id": 747076,
            "date": "Fri 16 Dec 2022 11:55",
            "username": "fabriciollf",
            "content": "C is the correct answer here, we dont need to deploy the application to the test enviroment in order to execute unit tests.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 744227,
            "date": "Tue 13 Dec 2022 16:46",
            "username": "fswklotto1",
            "content": "Vote for C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735502,
            "date": "Sun 04 Dec 2022 23:50",
            "username": "hamimelon",
            "content": "Pretty sure it's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731589,
            "date": "Wed 30 Nov 2022 15:19",
            "username": "SoMaL69bindukas",
            "content": "I believe it should be B. <br>As we need deploy app to test env first and then run unit testsBut it's unit tests, not e2e tests. Why do we need env for unit tests?",
            "upvote_count": "32",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 738565,
            "date": "Thu 08 Dec 2022 03:55",
            "username": "bindukas",
            "content": "But it's unit tests, not e2e tests. Why do we need env for unit tests?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 726484,
            "date": "Fri 25 Nov 2022 08:58",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/devops/test-reports-with-aws-codebuild/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#187",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A game stores user game data in an Amazon DynamoDB table. Individual users should not have access to other users' game data.<br><br>How can this be accomplished?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#187",
            "answers": [
              {
                "choice": "<p>A. Encrypt the game data with individual user keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Restrict access to specific items based on certain primary key values.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Stage data in SQS queues to inject metadata before accessing DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Read records from DynamoDB and discard irrelevant data client-side.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 187 discussion",
        "discusstion": [
          {
            "id": 729995,
            "date": "Tue 29 Nov 2022 06:58",
            "username": "michaldavid",
            "content": "bbbbbbb",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726485,
            "date": "Fri 25 Nov 2022 09:01",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_items.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#188",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an application that will give users the ability to store photos from their cellphones in the cloud. The application needs to support tens of thousands of users. The application uses an Amazon API Gateway REST API that is integrated with AWS Lambda functions to process the photos. The application stores details about the photos in Amazon DynamoDB. <br><br>Users need to create an account to access the application. In the application, users must be able to upload photos and retrieve previously uploaded photos. The photos will range in size from 300 KB to 5 MB. <br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#188",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos and details in the DynamoDB table. Retrieve previously uploaded photos directly from the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM user for each user of the application during the sign-up process. Use IAM authentication to access the API Gateway API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a user=E2=80=99s table in DynamoDB.  Use the table to manage user accounts. Create a Lambda authorizer that validates user credentials against the users table. Integrate the Lambda authorizer with API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 188 discussion",
        "discusstion": [
          {
            "id": 745490,
            "date": "Wed 14 Dec 2022 23:08",
            "username": "BelloMio",
            "content": "Why not A?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730010,
            "date": "Tue 29 Nov 2022 07:23",
            "username": "michaldavid",
            "content": "bbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726523,
            "date": "Fri 25 Nov 2022 09:36",
            "username": "k1kavi1k1kavi1",
            "content": "I agreeDynamoDB Item limits :The maximum item size in DynamoDB is 400 KB, which includes both attribute name binary length (UTF-8 length) and attribute value lengths (again binary length). The attribute name counts towards the size limit.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html<br>Best practices for storing large items and attributes - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-use-s3-too.html",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726527,
            "date": "Fri 25 Nov 2022 09:44",
            "username": "k1kavi1",
            "content": "DynamoDB Item limits :The maximum item size in DynamoDB is 400 KB, which includes both attribute name binary length (UTF-8 length) and attribute value lengths (again binary length). The attribute name counts towards the size limit.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html<br>Best practices for storing large items and attributes - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-use-s3-too.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#189",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a three-tier web application that should be able to handle a minimum of 5000 requests per minute. Requirements state that the web tier should be completely stateless while the application maintains session state for the users.<br><br>How can session data be externalized, keeping latency at the LOWEST possible value?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#189",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon RDS instance, then implement session handling at the application level to leverage a database inside the RDS database instance for session data storage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement a shared file system solution across the underlying Amazon EC2 instances, then implement session handling at the application level to leverage the shared file system for session data storage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon ElastiCache Memcached cluster, then implement session handling at the application level to leverage the cluster for session data storage.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon DynamoDB table, then implement session handling at the application level to leverage the table for session data storage.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 189 discussion",
        "discusstion": [
          {
            "id": 735504,
            "date": "Sun 04 Dec 2022 23:53",
            "username": "hamimelonMark1000",
            "content": "What's wrong with D?\\\"keeping latency at the LOWEST\\\" --> elasticache",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 761175,
            "date": "Thu 29 Dec 2022 16:10",
            "username": "Mark1000",
            "content": "\\\"keeping latency at the LOWEST\\\" --> elasticache",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726530,
            "date": "Fri 25 Nov 2022 09:48",
            "username": "k1kavi1k1kavi1",
            "content": "https://www.amazonaws.cn/en/elasticache/memcached/https://www.examtopics.com/discussions/amazon/view/7029-exam-aws-certified-developer-associate-topic-1-question-193/",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731629,
            "date": "Wed 30 Nov 2022 15:55",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/7029-exam-aws-certified-developer-associate-topic-1-question-193/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#190",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using an Amazon API Gateway REST API endpoint as a webhook to publish events from an on-premises source control management (SCM) system to Amazon EventBridge (Amazon CloudWatch Events). The company has configured an EventBridge (CloudWatch Events) rule to listen for the events and to control application deployment in a central AWS account. The company needs to receive the same events across multiple receiver AWS accounts.<br><br>How can a developer meet these requirements without changing the configuration of the SCM system?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#190",
            "answers": [
              {
                "choice": "<p>A. Deploy the API Gateway REST API to all the required AWS accounts. Use the same custom domain name for all the gateway endpoints so that a single SCM webhook can be used for all events from all accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the API Gateway REST API to all the receiver AWS accounts. Create as many SCM webhooks as the number of AWS accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Grant permission to the central AWS account for EventBridge (CloudWatch Events)to access the receiver AWS accounts. Add an EventBridge (CloudWatch Events) event bus on the receiver AWS accounts as the targets to the existing EventBridge (CloudWatch Events) rule.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Convert the API Gateway type from REST API to HTTP API.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 190 discussion",
        "discusstion": [
          {
            "id": 730016,
            "date": "Tue 29 Nov 2022 07:29",
            "username": "michaldavid",
            "content": "cccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726535,
            "date": "Fri 25 Nov 2022 09:53",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cross-account.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#191",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing an application that will be accessed through the Amazon API Gateway REST API. Registered users should be the only ones who can access certain resources of this API. The token being used should expire automatically and needs to be refreshed periodically.<br><br>How can a developer meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#191",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Cognito identity pool, configure the Amazon Cognito Authorizer in API Gateway, and use the temporary credentials generated by the identity pool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create and maintain a database record for each user with a corresponding token and use an AWS Lambda authorizer in API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Cognito user pool, configure the Cognito Authorizer in API Gateway, and use the identity or access token.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM user for each API user, attach an invoke permissions policy to the API, and use an IAM authorizer in API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 191 discussion",
        "discusstion": [
          {
            "id": 730066,
            "date": "Tue 29 Nov 2022 08:56",
            "username": "michaldavid",
            "content": "ccccccc",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726538,
            "date": "Fri 25 Nov 2022 09:56",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.htmlhttps://www.examtopics.com/discussions/amazon/view/28050-exam-aws-certified-developer-associate-topic-1-question-223/",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731654,
            "date": "Wed 30 Nov 2022 16:11",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28050-exam-aws-certified-developer-associate-topic-1-question-223/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726247,
            "date": "Thu 24 Nov 2022 23:36",
            "username": "CloudHandsOn",
            "content": "The answer is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725913,
            "date": "Thu 24 Nov 2022 15:18",
            "username": "kapil206001",
            "content": "C<br>use cognito user pool authorizer with token validation .",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#192",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer maintains a critical business application that uses Amazon DynamoDB as the primary data store. The DynamoDB table contains millions of documents and receives 30-60 requests each minute. The developer needs to perform processing in near-real time on the documents when they are added or updated in the DynamoDB table.<br><br>How can the developer implement this feature with the LEAST amount of change to the existing application code?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#192",
            "answers": [
              {
                "choice": "<p>A. Set up a cron job on an Amazon EC2 instance. Run a script every hour to query the table for changes and process the documents.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable a DynamoDB stream on the table. Invoke an AWS Lambda function to process the documents.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the application to send a PutEvents request to Amazon EventBridge (Amazon CloudWatch Events). Create an EventBridge (CloudWatch Events) rule to invoke an AWS Lambda function to process the documents.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the application to synchronously process the documents directly after the DynamoDB write.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 192 discussion",
        "discusstion": [
          {
            "id": 730069,
            "date": "Tue 29 Nov 2022 08:57",
            "username": "michaldavid",
            "content": "bbbbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726541,
            "date": "Fri 25 Nov 2022 10:00",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#193",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A web application is using Amazon Kinesis Streams for clickstream data that may not be consumed for up to 12 hours.<br><br>How can the developer implement encryption at rest for data within the Kinesis Streams?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#193",
            "answers": [
              {
                "choice": "<p>A. Enable SSL connections to Kinesis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Kinesis Consumer Library.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Encrypt the data once it is at rest with a Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable server-side encryption in Kinesis Streams.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 193 discussion",
        "discusstion": [
          {
            "id": 726542,
            "date": "Fri 25 Nov 2022 10:03",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html<br>https://docs.aws.amazon.com/streams/latest/dev/what-is-sse.htmlhttps://www.examtopics.com/discussions/amazon/view/5466-exam-aws-certified-developer-associate-topic-1-question-54/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731657,
            "date": "Wed 30 Nov 2022 16:11",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/5466-exam-aws-certified-developer-associate-topic-1-question-54/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#194",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has copies of customer ID cards in its on-premises system. The company wants the on-premises system to automatically upload the ID card images directly to an Amazon S3 bucket.<br><br>What is the MOST secure way to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#194",
            "answers": [
              {
                "choice": "<p>A. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM user. Attach the user to a policy that includes the s3:PutObject permission. Configure the on-premises system to use the generated access key and secrets to authenticate access to AWS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM role. Attach the role to a policy that includes the s3:PutObject permission. Configure the on-premises system to use the AssumeRole functionality in the AWS SDK to authenticate access to AWS.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using an AWS Lambda function and a private REST API endpoint. Create an AWS Site-to-Site VPN connection between the on-premises network and the VPC to allow the on-premises system to call the API to receive the presigned URLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using an AWS Lambda function and a public REST API endpoint. Secure the API by adding an Amazon Cognito authorizer. Create a user for the on-premises system to use for authentication to call the API to receive the presigned URLs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 194 discussion",
        "discusstion": [
          {
            "id": 761191,
            "date": "Thu 29 Dec 2022 16:28",
            "username": "Mark1000",
            "content": "I vote for C<br><br>It's say \\\"MOST secure\\\", with SDK the files go over internet (encrypted but over internet); in option C is vpn",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 742563,
            "date": "Mon 12 Dec 2022 09:49",
            "username": "bbbl34sd",
            "content": "B ? Attach a role to policy ?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732990,
            "date": "Thu 01 Dec 2022 20:02",
            "username": "AbQusay",
            "content": "can someone specify why b not c ?",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 730074,
            "date": "Tue 29 Nov 2022 09:02",
            "username": "michaldavid",
            "content": "bbbbbbbb",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726556,
            "date": "Fri 25 Nov 2022 10:14",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726250,
            "date": "Thu 24 Nov 2022 23:44",
            "username": "CloudHandsOn",
            "content": "Why not C?",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#195",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a highly secure healthcare application using serverless components. This application requires writing temporary data to /tmp storage on an AWS Lambda function.<br><br>How should the developer encrypt this data?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#195",
            "answers": [
              {
                "choice": "<p>A. Enable Amazon EBS volume encryption with an AWS KMS key in the Lambda function configuration so that all storage attached to the Lambda function is encrypted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up the Lambda function with a role and key policy to access an AWS KMS key. Use the key to generate a data key used to encrypt all data prior to writing to /tmp storage.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use OpenSSL to generate a symmetric encryption key on Lambda startup. Use this key to encrypt the data prior to writing to /tmp.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an on-premises hardware security module (HSM) to generate keys, where the Lambda function requests a data key from the HSM and uses that to encrypt data on all requests to the function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 195 discussion",
        "discusstion": [
          {
            "id": 730100,
            "date": "Tue 29 Nov 2022 09:27",
            "username": "michaldavid",
            "content": "bbbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726559,
            "date": "Fri 25 Nov 2022 10:19",
            "username": "k1kavi1k1kavi1",
            "content": "https://aws.amazon.com/blogs/compute/using-larger-ephemeral-storage-for-aws-lambda/https://www.examtopics.com/discussions/amazon/view/69249-exam-aws-certified-developer-associate-topic-1-question-386/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731669,
            "date": "Wed 30 Nov 2022 16:19",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/69249-exam-aws-certified-developer-associate-topic-1-question-386/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#196",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer creates a web service that performs many critical activities. The web service code uses an AWS SDK to publish noncritical metrics to Amazon CloudWatch by using the PutMetricData API. The web service must return results to the caller as quickly as possible. The response data from the PutMetricData API is not necessary to create the web service response.<br><br>Which solution will MOST improve the response time of the web service?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#196",
            "answers": [
              {
                "choice": "<p>A. Upgrade to the latest version of the AWS SDK.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call the PutMetricData API in a background thread.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS SDK to perform a synchronous call to an AWS Lambda function. Call the PutMetricData API within the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Send metric data to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function with the queue as the event source. Call the PutMetricData API within the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 196 discussion",
        "discusstion": [
          {
            "id": 736308,
            "date": "Mon 05 Dec 2022 22:10",
            "username": "rrrrrrrrrr1",
            "content": "b or d.<br><br>b makes more logical sense, d is more amazon",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 735513,
            "date": "Mon 05 Dec 2022 00:11",
            "username": "hamimelon",
            "content": "D.  Regarding C, it makes no sense to use synchronous processing.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732527,
            "date": "Thu 01 Dec 2022 12:05",
            "username": "SBoksh",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-api",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 730108,
            "date": "Tue 29 Nov 2022 09:32",
            "username": "michaldavidxicomynor",
            "content": "ccccccccThere's no way it can be C as the synchronous call will make the service wait for lambda response.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 743595,
            "date": "Tue 13 Dec 2022 05:52",
            "username": "xicomynor",
            "content": "There's no way it can be C as the synchronous call will make the service wait for lambda response.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726564,
            "date": "Fri 25 Nov 2022 10:24",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#197",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a Ruby application and needs to automate the deployment, scaling, and management of an environment without requiring knowledge of the underlying infrastructure.<br><br>Which service would best accomplish this task?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#197",
            "answers": [
              {
                "choice": "<p>A. AWS CodeDeploy<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS CloudFormation<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS OpsWorks<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Elastic Beanstalk<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 197 discussion",
        "discusstion": [
          {
            "id": 730109,
            "date": "Tue 29 Nov 2022 09:33",
            "username": "michaldavid",
            "content": "dddddddd",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726566,
            "date": "Fri 25 Nov 2022 10:26",
            "username": "k1kavi1k1kavi1",
            "content": "I agreehttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_Ruby.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731677,
            "date": "Wed 30 Nov 2022 16:28",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_Ruby.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#198",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an Amazon S3 bucket that contains sensitive data. The data must be encrypted in transit and at rest. The company encrypts the data in the S3 bucket by using an AWS Key Management Service (AWS KMS) key. A developer needs to grant several other AWS accounts the permission to use the S3 GetObject operation to retrieve the data from the S3 bucket.<br><br>How can the developer enforce that all requests to retrieve the data provide encryption in transit?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#198",
            "answers": [
              {
                "choice": "<p>A. Define a resource-based policy on the S3 bucket to deny access when a request meets the condition \"aws:SecureTransport\": \"false\".<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define a resource-based policy on the S3 bucket to allow access when a request meets the condition \"aws:SecureTransport\": \"false\".<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define a role-based policy on the other accounts' roles to deny access when a request meets the condition of \"aws:SecureTransport\": \"false\".<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Define a resource-based policy on the KMS key to deny access when a request meets the condition of \"aws:SecureTransport\": \"false\".<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 198 discussion",
        "discusstion": [
          {
            "id": 730110,
            "date": "Tue 29 Nov 2022 09:34",
            "username": "michaldavid",
            "content": "aaaaaaaaa",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726568,
            "date": "Fri 25 Nov 2022 10:29",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#199",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying an application in the AWS Cloud by using AWS CloudFormation. The application will connect to an existing Amazon RDS database. The hostname of the RDS database is stored in AWS Systems Manager Parameter Store as a plaintext value. The developer needs to incorporate the database hostname into the CloudFormation template to initialize the application when the stack is created.<br><br>How should the developer reference the parameter that contains the database hostname?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#199",
            "answers": [
              {
                "choice": "<p>A. Use the ssm dynamic reference.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Ref intrinsic function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the Fn::ImportValue intrinsic function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the ssm-secure dynamic reference.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 199 discussion",
        "discusstion": [
          {
            "id": 730112,
            "date": "Tue 29 Nov 2022 09:35",
            "username": "michaldavid",
            "content": "aaaaaaaa",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726571,
            "date": "Fri 25 Nov 2022 10:33",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725971,
            "date": "Thu 24 Nov 2022 15:56",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#200",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a new complex application on AWS. The application consists of multiple microservices hosted on Amazon EC2. The developer wants to determine which microservice adds the most latency while handling a request.<br><br>Which method should the developer use to make this determination?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#200",
            "answers": [
              {
                "choice": "<p>A. Instrument each microservice request using the AWS X-Ray SDK. Examine the annotations associated with the requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Instrument each microservice request using the AWS X-Ray SDK. Examine the subsegments associated with the requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Instrument each microservice request using the AWS X-Ray SDK. Examine the Amazon CloudWatch EC2 instance metrics associated with the requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Instrument each microservice request using the Amazon CloudWatch SDK. Examine the CloudWatch EC2 instance metrics associated with the requests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 200 discussion",
        "discusstion": [
          {
            "id": 730113,
            "date": "Tue 29 Nov 2022 09:35",
            "username": "michaldavid",
            "content": "bbbbbbbbbbb",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726573,
            "date": "Fri 25 Nov 2022 10:35",
            "username": "k1kavi1k1kavi1",
            "content": "Choosing Bhttps://www.examtopics.com/discussions/amazon/view/51602-exam-aws-certified-developer-associate-topic-1-question-351/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731681,
            "date": "Wed 30 Nov 2022 16:32",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/51602-exam-aws-certified-developer-associate-topic-1-question-351/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725976,
            "date": "Thu 24 Nov 2022 16:00",
            "username": "kapil206001",
            "content": "B<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-subsegments",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      }
    ]
  }