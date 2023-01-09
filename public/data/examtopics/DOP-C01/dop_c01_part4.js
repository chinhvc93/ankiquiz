var DOP_C01_Part4 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#301",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You want to build a new search tool feature for your monitoring system that will allow your information security team to quickly audit all API calls in your AWS accounts. What combination of AWS services can you use to develop and automate the backend processes supporting this tool? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABG</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#301",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudSearch domain for API call logs. Configure the search domain so that it can be used to index API call logs for the search tool.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CloudTrail to store API call logs in an Amazon S3 bucket. Configure an Amazon Simple Notification Service topic called \"log-notification\" that notifies subscribers when new logs are available. Subscribe an Amazon SQS queue to the topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Cloudwatch to ship AWS CloudTrail logs to your monitoring system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Elastic Beanstalk application in worker role mode that uses an Amazon Simple Email Service (SES) domain to facilitate batch processing new API call log files retrieved from an Amazon S3 bucket into a search index.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS CloudTrail to store API call logs in an Amazon S3 bucket. Configure Amazon Simple Email Service (SES) to notify subscribers when new logs are available. Subscribe an Amazon SQS queue to the email domain.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Create Amazon Cloudwatch custom metrics for the API call logs. Configure a Cloudwatch search domain so that it can be used to index API call logs for the search tool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br>G.Create an AWS Elastic Beanstalk application in worker role mode that uses an Amazon SQS queue to facilitate batch processing new API call log files retrieved from an Amazon S3 bucket into a search index.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 301 discussion",
        "discusstion": [
          {
            "id": 363445,
            "date": "Sat 23 Oct 2021 18:54",
            "username": "nsei",
            "content": "ABG is the ans<br>https://aws.amazon.com/blogs/startups/how-to-search-cloudtrail-logs-easily-with-amazon-cloudsearch/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 511745,
            "date": "Wed 29 Dec 2021 04:19",
            "username": "Jaxjd",
            "content": "Workflow > BGA. .",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#302",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are using AWS Elastic Beanstalk to deploy your application and must make data stored on an Amazon Elastic Block Store (EBS) volume snapshot available to the Amazon Elastic Compute Cloud (EC2) instances. How can you modify your Elastic Beanstalk environment so that the data is added to the Amazon EC2 instances every time you deploy your application?<br></p>",
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
                "choice": "<p>A. Add commands to a configuration file in the .ebextensions folder of your deployable archive that mount an additional Amazon EBS volume on launch. Also add a \"BlockDeviceMappings\" option, and specify the snapshot to use for the block device in the Auto Scaling launch configuration.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add commands to a configuration file in the .ebextensions folder of your deployable archive that uses the create-volume Amazon EC2 API or CLI to create a new ephemeral volume based on the specified snapshot and then mounts the volume on launch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add commands to the Amazon EC2 user data that will be executed by eb-init, which uses the create- volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mounts the volume on launch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add commands to the Chef recipe associated with your environment, use the create-volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mount the volume on launch.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 302 discussion",
        "discusstion": [
          {
            "id": 363302,
            "date": "Fri 05 Nov 2021 12:27",
            "username": "nsei",
            "content": "A is the correct answer<br>https://aws.amazon.com/blogs/devops/customize-ephemeral-and-ebs-volumes-in-elastic-beanstalk-environments/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 540071,
            "date": "Thu 03 Feb 2022 23:44",
            "username": "hmc929",
            "content": "B is the ans",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#303",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You would like to run automated, continuous application level integration tests on all members of an Auto Scaling group. Which two options should you use?<br>(Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#303",
            "answers": [
              {
                "choice": "<p>A. Use the AWS SDK to run the DescribeInstances API call on the Auto Scaling group, and then iterate over the members and remotely connect to each Amazon EC2 instance and run the integration tests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS SDK to run the DescribeAutoScalinglnstances API call on the Auto Scaling Group, iterate over the members using the Describe Instances API call, remotely connect to each Amazon EC2 instance, and then run the integration tests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up a custom CloudWatch metric with the output of your integration tests that are run by a scheduled process on each instance, and then set up a CloudWatch alert for any failures.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Using an Auto Cycle Group lifecycle policy, define a scheduled task to run integration tests when a new Amazon EC2 instance enters the InService state.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set up a custom CloudWatch metric that uses the output of the DescribeAutoScalingInstances API call to determine the HealthCheck status of the Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Using the Auto Cycle Group lifecycle policy, define a scheduled task to run integration tests on individual instances using the Amazon EC2 user data to export test data to CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 303 discussion",
        "discusstion": [
          {
            "id": 672885,
            "date": "Mon 19 Sep 2022 05:39",
            "username": "colinquek",
            "content": "B, E for me.<br>Cos is autoscaling, i dont think i can choose C as it schedules. There is no idea when and instance is gonna be ard or otherwise.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 402188,
            "date": "Wed 20 Oct 2021 21:59",
            "username": "MBJames",
            "content": "BC make sense",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#304",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application Amazon Elastic Compute Cloud (EC2) instances bootstrap by using a master configuration file that is kept in a version-enabled Amazon Simple<br>Storage Service (S3) bucket. Which one of the following methods should you use to securely install the current configuration version onto the instances in a cost- effective way?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#304",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon DynamoDB table to store the different versions of the configuration file. Associate AWS Identity and Access Management (IAM) EC2 roles to the Amazon EC2 instances, and reference the DynamoDB table to get the latest file from Amazon Simple Storage Service (S3).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Associate an IAM S3 role to the bucket, list the object versions using the Amazon S3 API, and then get the latest object.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Associate an IAM EC2 role to the instances, list the object versions using the Amazon S3 API, and then get the latest object.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Associate an IAM EC2 role to the instances, and then simply get the object from Amazon S3, because the default is the current version.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the IAM credentials in the Amazon EC2 user data for each instance, and then simply get the object from S3, because the default is the current version.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 304 discussion",
        "discusstion": [
          {
            "id": 333134,
            "date": "Sat 09 Oct 2021 19:35",
            "username": "BKhan",
            "content": "Ans is D",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 514790,
            "date": "Sun 02 Jan 2022 04:02",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#305",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company operates a website for promoters to sell tickets for entertainment events. You are using a load balancer in front of an Auto Scaling group of web servers. Promotion of popular events can cause surges of website visitors.<br>During scaling-out at these times, newly launched instances are unable to complete configuration quickly enough, leading to user disappointment. What options should you choose to improve scaling yet minimize costs? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#305",
            "answers": [
              {
                "choice": "<p>A. Create an AMI with the application pre-configured. Create a new Auto Scaling launch configuration using this new AMI, and configure the Auto Scaling group to launch with this AMI.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Auto Scaling pre-warming to launch instances before they are required. Configure pre-warming to use the CPU trend CloudWatch metric for the group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Publish a custom CloudWatch memo from your application on the number of tickets sold, and create an Auto Scaling policy based on this.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the history of past scaling events for similar event sales to predict future scaling requirements. Use the Auto Scaling scheduled scaling feature to vary the size of the fleet.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure an Amazon S3 bucket for website hosting. Upload into the bucket an HTML holding page with its x-amz-website-redirect-location' metadata property set to the load balancer endpoint. Configure Elastic Load Balancing to redirect to the holding page when the load on web servers is above a certain level.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 305 discussion",
        "discusstion": [
          {
            "id": 583128,
            "date": "Sat 09 Apr 2022 06:19",
            "username": "AdamSmith",
            "content": "https://aws.amazon.com/jp/blogs/compute/scaling-your-applications-faster-with-ec2-auto-scaling-warm-pools/<br>There's a thing called warm pool in EC2 Auto Scaling Group.<br>So A and B make sense, if by pre-warming they are refering to said \\\"warm pool\\\".<br>C and D are pretty much similar approach and not that good of a solution tbh.<br>Choose E if you want to get fired.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504070,
            "date": "Sat 18 Dec 2021 08:21",
            "username": "GreatFunana",
            "content": "AD is legit. We can prebake AMIs, and we can use the past to try to schedule the building of resources ahead of traffic spikes.<br><br>B: Pre-warming is for when you know you are about to experience load, and you need to make sure the resources are going to get used quick. This is not that situation.<br>C: basing a scaling policy on a finite resource won't help.<br>E is not legit either, hosting on S3 is only good for static sites.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 374569,
            "date": "Fri 08 Oct 2021 17:46",
            "username": "happydazeSonamDhingra",
            "content": "AB I'd say.You pre-warm the Application Load Balancer, not sure what is pre-warming the autoscaling",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 553827,
            "date": "Tue 22 Feb 2022 17:36",
            "username": "SonamDhingra",
            "content": "You pre-warm the Application Load Balancer, not sure what is pre-warming the autoscaling",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#306",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are responsible for a popular file sharing application that uses Elastic Load Balancing to distribute traffic to an Amazon EC2 application tier deployed in an<br>Auto Scaling group that runs across multiple Availability Zones. You currently record the number of user file transfers to a log file on the application server, and then write data points from the logs to an Amazon RDS MySQL instance. You are not happy with how your application scales, and want to implement a new scaling policy based on the average number of user file transfers in a 10-minute period instead of average CPU utilization in the last five minutes. What steps should you take to ensure that your application tier scales based on this new policy? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#306",
            "answers": [
              {
                "choice": "<p>A. Create a new CloudWatch alarm based on the Elastic Load Balancing \"RequestCount\" metric that triggers an Auto Scaling action to scale the application tier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new CloudWatch alarm based on a custom metric streaming from the Amazon RDS MySQL instance that triggers an Auto Scaling action to scale the application tier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new CloudWatch alarm based on a custom metric published from file transfer logs streaming to CloudWatch that triggers an Auto Scaling action to scale the application tier.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new Auto Scaling launch configuration that includes an Amazon EC2 user data script that installs a CloudWatch Logs Agent on newly launched instances in the application tier. The agent will be configured to stream the file transfers log tile to CloudWatch.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a new Auto Scaling launch configuration for the application tier that scales based on an Auto Scaling policy that reads the file transfer log data from the Amazon RIDS MySQL instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Create a new Auto Scaling launch configuration that includes an Amazon EC2 user data script that installs an Amazon RDS Logs Agent on newly launched instances in the application tier. The agent will be configured to stream the file transfer data points to the Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 306 discussion",
        "discusstion": [
          {
            "id": 533642,
            "date": "Thu 27 Jan 2022 10:33",
            "username": "Ram_Param",
            "content": "Ans: CD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 333151,
            "date": "Fri 24 Sep 2021 05:30",
            "username": "BKhan",
            "content": "Ans are CD",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#307",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your DevOps team is responsible for a multi-tier, Windows-based web application consisting of web servers, Amazon RDS database instances, and a load balancer behind Amazon Route53. You have been asked by your manager to build a cost-effective rolling deployment solution for this web application. What method should you use?<br></p>",
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
                "choice": "<p>A. Re-deploy your application on an AWS OpsWorks stack. Use the AWS OpsWorks done stack feature to allow updates between duplicate stacks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your application on Elastic Beanstalk and take advantage of Elastic BeanStalk rolling updates.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your application using an AWS CloudFormation template, launch a new AWS CloudFormation stack during each deployment, and then tear down the old stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your application using an AWS CloudFormation template. Use AWS CloudFormation rolling deployment policies, create a new policy for your AWS CloudFormation stack, and initiate an update stack operation to deploy new code.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 307 discussion",
        "discusstion": [
          {
            "id": 636846,
            "date": "Mon 25 Jul 2022 19:12",
            "username": "iman0510",
            "content": "it's 100000000000000% B, people voting for D really don't understand this question.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 612534,
            "date": "Tue 07 Jun 2022 02:45",
            "username": "phuchoang",
            "content": "I will choose D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546680,
            "date": "Sun 13 Feb 2022 20:44",
            "username": "blueorca",
            "content": "D is correct, Beanstalk is great for rolling deployment but not so much for 3 layered app. Only OpsWorks and CF and self-managed layers are good for that.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 522676,
            "date": "Thu 13 Jan 2022 07:49",
            "username": "zgydmy",
            "content": "Vote B",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 501159,
            "date": "Tue 14 Dec 2021 08:24",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 333153,
            "date": "Thu 21 Oct 2021 22:26",
            "username": "BKhan",
            "content": "Ans is D<br>As we can use Elastic BeanStack but we need a cost-effective solution which is D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#308",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You recently encountered a major bug in your Windows-based web application during a deployment cycle. During this failed deployment, it took the team four hours to roll back to a previously working state, which left customers with a poor user experience. During the post-mortem, your team discussed the need to provide a quicker way to roll back failed deployments. You currently run your web application on Amazon EC2 using Windows 2012R2 and use Elastic Load<br>Balancing for your load balancing needs. Which technique should you use to solve this problem?<br></p>",
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
                "choice": "<p>A. Create deployable versioned bundles of your application. Store the bundles on Amazon S3. Re-deploy your web application on Elastic Beanstalk, and enable the Elastic Beanstalk autorollback feature tied to CloudWatch metrics that define failure.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your web application using an AWS OpsWorks stack, and use the AWS OpsWorks auto-rollback feature to initiate a rollback during failures.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create deployable versioned bundles of your application. Store the bundle on Amazon S3. Re-deploy your web application using an AWS OpsWorks stack, and use AWS OpsWorks application versioning to initiate a rollback during failures.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your web application using Elastic Beanstalk, and use the Elastic Beanstalk application versions when deploying. During failures, re-deploy the previous version to the Elastic Beanstalk environment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Re-deploy your web application using Elastic Beanstalk, and use the Elastic Beanstalk API to trigger a FailedDeployment API call to initiate a rollback to the previous version.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 308 discussion",
        "discusstion": [
          {
            "id": 633311,
            "date": "Tue 19 Jul 2022 05:05",
            "username": "GCPWizard",
            "content": "I believe the correct answer is B. <br><br>The DeploymentCommand takes rollback as an argument.<br><br>\\\"rollback\\\": Roll the app back to the previous version. When you update an app, AWS OpsWorks Stacks stores the previous version, up to a maximum of five versions. You can use this command to roll an app back as many as four versions.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 590865,
            "date": "Sun 24 Apr 2022 05:38",
            "username": "KingGuo",
            "content": "ans: D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 586393,
            "date": "Fri 15 Apr 2022 16:53",
            "username": "phuchoang",
            "content": "I will choose D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 404093,
            "date": "Sun 31 Oct 2021 13:53",
            "username": "NNHAN",
            "content": "I choose D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 333156,
            "date": "Tue 26 Oct 2021 00:11",
            "username": "BKhanSK_2_SK",
            "content": "Ans is B<br><br>A) Beanstalk auto rollback feature doesn't exist<br><br>B) DeploymentCommand has a rollback option<br><br>For apps, the following commands are available:<br><br>deploy: Deploy an app. Ruby on Rails apps have an optional Args parameter named migrate. Set Args to {\\\"migrate\\\":[\\\"true\\\"]} to migrate the database. The default setting is {\\\"migrate\\\":[\\\"false\\\"]}.<br><br>rollback Roll the app back to the previous version. When you update an app, AWS OpsWorks stores the previous version, up to a maximum of five versions. You can use this command to roll an app back as many as four versions.<br><br>http://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeploymentCommand.html<br><br>C) This is from console, but I guess B) is quicker since it is from Command Line using DeploymentCommand<br><br>D) I can't find FailedDeployment API in Elastic Beanstalk.https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 596837,
            "date": "Wed 04 May 2022 15:25",
            "username": "SK_2_SK",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#309",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a high-traffic application running behind a load balancer with clients that are very sensitive to latency. How should you determine which back-end<br>Amazon Elastic Compute Cloud application instances are causing increased latency so that they can be replaced?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#309",
            "answers": [
              {
                "choice": "<p>A. By using the Elastic Load Balancing Latency CloudWatch metric.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. By using the HTTP X-Forwarded-For header for requests from the load balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. By running a distributed load test to the load balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. By using the load balancer access logs.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 309 discussion",
        "discusstion": [
          {
            "id": 528941,
            "date": "Fri 21 Jan 2022 05:58",
            "username": "Ray0411",
            "content": "D<br>A only can shows the average latency per AZ.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331084,
            "date": "Mon 18 Oct 2021 02:36",
            "username": "devopp",
            "content": "D as Access Logs give you this instance latency info per call to each node in Target Group",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 327290,
            "date": "Mon 27 Sep 2021 22:11",
            "username": "WhyIronManWhyIronManGreatFunana",
            "content": "I'll go with A<br><br>Ref: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.htmlNevermind, D is right....<br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-latency-troubleshooting/Yep. Metrics are averages. Logs will give latency per target.",
            "upvote_count": "151",
            "selected_answers": ""
          },
          {
            "id": 327291,
            "date": "Sat 09 Oct 2021 05:00",
            "username": "WhyIronManGreatFunana",
            "content": "Nevermind, D is right....<br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-latency-troubleshooting/Yep. Metrics are averages. Logs will give latency per target.",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 508589,
            "date": "Fri 24 Dec 2021 17:39",
            "username": "GreatFunana",
            "content": "Yep. Metrics are averages. Logs will give latency per target.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#311",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You manage a three-tier web application consisting of an autoscaled web proxy tier, an autoscaled application tier, and an Amazon RDS database tier. You use a load balancer to distribute requests from end users to the web proxy tier and another, internal load balancer to distribute requests between the web tier and the application tier. After deploying a small database schema update, you notice that all of your web and application instances have been terminated.<br>What may have caused this?<br></p>",
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
                "choice": "<p>A. Your load balancers use an HTTP health check, and the page relies on retrieving data from your database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Your load balancer use TCP health checks to provide application-level health checks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The cooldown period of the Auto Scaling group is too short, so the instances do not have enough time to recover from an issue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Your Auto Scaling group health check type is set to \"EC2\" to check that the instances themselves are healthy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 311 discussion",
        "discusstion": [
          {
            "id": 380809,
            "date": "Tue 05 Oct 2021 06:09",
            "username": "D2",
            "content": "A is correct. During schema changes, page may fail resulting in ASG action",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#312",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your organization has decided to implement a third-party configuration management tool that uses a master server from which nodes pull configuration. You have built a custom base Amazon Machine Image that already has the third-party configuration management agent installed. You want to use the same base AMI in<br>Development, Test and Production environments, each of which has its own master server.<br>How should you configure your Amazon EC2 instances to register with the correct master server on launch?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#312",
            "answers": [
              {
                "choice": "<p>A. Create a tag for all instances that specifies their environment. When launching instances, provide an Amazon EC2 UserData script that gets this tag by querying the MetaData Service and registers the agent with the master.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon CloudFormation to describe your environment. Configure an input parameter for the master server hostname/address, and use this parameter within an Amazon EC2 UserData script that registers the agent with the master.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a script on your third-party configuration management master server that queries the Amazon EC2 API for new instances and registers them with it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Simple Workflow Service to automate the process of registering new instances with your master server. Use an Environment tag in Amazon EC2 to register instances with the correct master server.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 312 discussion",
        "discusstion": [
          {
            "id": 647473,
            "date": "Tue 16 Aug 2022 07:41",
            "username": "MichaelExam",
            "content": "Both A, B are working fine. But using cloudformation parameters is better than changing the UserData variable.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 617009,
            "date": "Thu 16 Jun 2022 02:01",
            "username": "monkalways",
            "content": "The answer is A.  B, \\\"Use CloudFormation to describe environment\\\" does not make sense; the environment should be passed in as parameter, then define a mapping for master hostnames in each environment.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 588034,
            "date": "Tue 19 Apr 2022 09:51",
            "username": "ramikh",
            "content": "Instance Tags now available on the Amazon EC2 Instance Metadata Service 2022.Now, by accessing tags from your instance metadata, you no longer need to use the DescribeInstance or DescribeTag API calls to retrieve tag information, which reduces your API transactions per second, and lets your tag retrievals scale with the number of instances that you control.https://aws.amazon.com/about-aws/whats-new/2022/01/instance-tags-amazon-ec2-instance-metadata-service/ Selected answer A",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 514803,
            "date": "Sun 02 Jan 2022 04:20",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 380814,
            "date": "Thu 04 Nov 2021 14:31",
            "username": "D2",
            "content": "B makes sense to maintain environment variables and use them to register instance",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 356103,
            "date": "Wed 06 Oct 2021 18:54",
            "username": "idforadf",
            "content": "Is it B or involving CloudFormation is expensive for this use case?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#313",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been asked to handle a large data migration from multiple Amazon RDS MySQL instances to a DynamoDB table. You have been given a short amount of time to complete the data migration.<br>What will allow you to complete this complex data processing workflow?<br></p>",
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
                "choice": "<p>A. Create an Amazon Kinesis data stream, pipe in all of the Amazon RDS data, and direct the data toward a DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write a script in your language of choice, install the script on an Amazon EC2 instance, and then use Auto Scaling groups to ensure that the latency of the migration pipelines never exceeds four seconds in any 15-minute period.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Write a bash script to run on your Amazon RDS instance that will export data into DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a data pipeline to export Amazon RDS data and import the data into DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 313 discussion",
        "discusstion": [
          {
            "id": 671864,
            "date": "Sun 18 Sep 2022 02:03",
            "username": "colinquek",
            "content": "simply becos https://aws.amazon.com/datapipeline/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 504496,
            "date": "Sat 18 Dec 2021 23:40",
            "username": "Balki",
            "content": "D looks more close",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 333214,
            "date": "Mon 20 Sep 2021 22:45",
            "username": "BKhanDantehilary",
            "content": "Ans is A:<br>https://aws.amazon.com/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/A is wrong, checked your link and Kinesis can't be used alone, it has to be with EMR and lambda.<br>D is more appropriate",
            "upvote_count": "26",
            "selected_answers": ""
          },
          {
            "id": 378264,
            "date": "Mon 25 Oct 2021 18:59",
            "username": "Dantehilary",
            "content": "A is wrong, checked your link and Kinesis can't be used alone, it has to be with EMR and lambda.<br>D is more appropriate",
            "upvote_count": "6",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#314",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application requires a fault-tolerant, low-latency and repeatable method to load configurations files via Auto Scaling when Amazon Elastic Compute Cloud<br>(EC2) instances launch.<br>Which approach should you use to satisfy these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#314",
            "answers": [
              {
                "choice": "<p>A. Securely copy the content from a running Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon EC2 UserData script to copy the configurations from an Amazon Storage Services (S3) bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a script via cfn-init to pull content hosted in an Amazon ElastiCache cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a script via cfn-init to pull content hosted on your on-premises server.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use an Amazon EC2 UserData script to pull content hosted on your on-premises server.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 314 discussion",
        "discusstion": [
          {
            "id": 389581,
            "date": "Tue 28 Sep 2021 16:32",
            "username": "D2jj22222",
            "content": "Answer B.  Others dont make senseyour right, those options are not correct",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 581226,
            "date": "Tue 05 Apr 2022 13:54",
            "username": "jj22222",
            "content": "your right, those options are not correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618152,
            "date": "Sat 18 Jun 2022 11:04",
            "username": "gr3y_matter",
            "content": "B,C-<br><br>for making an application \\\"fault tolerant\\\" we can use AUTO SCALING & ELASTIC LOAD BALANCER (out of which ASG is already used).<br>for \\\"low latency\\\" we can use ElastiCache Cluster.<br>for \\\"repeatable way for loading configuration files\\\" we have to use AMIs that are stored on S3 in the standard storage class (that can only be accessed via the service web interface or APIs).",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 581940,
            "date": "Wed 06 Apr 2022 19:17",
            "username": "RtwoDtwo",
            "content": "There are 5 options, doesnt this mean there are two possible answers?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 581225,
            "date": "Tue 05 Apr 2022 13:53",
            "username": "jj22222",
            "content": "B.  Use an Amazon EC2 UserData script to copy the configurations from an Amazon Storage Services (S3) bucket.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#315",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Currently, your deployment process consists of setting your load balancer to point to a maintenance page, turning off ea web application servers, deploying your code, turning the web application servers back on, and removing the maintenance page. Working with your development team, you've agreed that performing rolling deployments of your software would provide a better user experience and a more agile deployment process.<br>Which techniques could you use to provide a cost-effective rolling deployment process? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#315",
            "answers": [
              {
                "choice": "<p>A. Use the Amazon Elastic Cloud Compute (EC2) API to write a service to return a list of servers based on the tags for the application that needs deployment, and use Amazon Simple Queue Service to queue up all servers for a rolling deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your application on AWS Elastic Beanstalk, and use Elastic Beanstalk rolling deployments.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your application on an AWS OpsWorks stack, and take advantage of OpsWorks rolling deployments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your application using an AWS CloudFormation template, launch a new CloudFormation stack during each deployment, and then tear down the old stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Re-deploy your application using an AWS CloudFormation template with Auto Scaling group, and use update policies to provide rolling updates.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Using Amazon Simple Workflow Service, create a workflow application that talks to the Amazon EC2 API to deploy your new code in a rolling fashion.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 315 discussion",
        "discusstion": [
          {
            "id": 514789,
            "date": "Sun 02 Jan 2022 04:01",
            "username": "nqthien041292",
            "content": "Vote BE",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 497652,
            "date": "Thu 09 Dec 2021 12:06",
            "username": "I_heart_shuffle_girls",
            "content": "I believe BE is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 389589,
            "date": "Tue 21 Sep 2021 10:26",
            "username": "D2",
            "content": "BE Correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#316",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You manage a web advertising platform on a single AWS account. This platform produces realtime ad-click data that you store as objects in an Amazon S3 bucket called \"dick-data.\" Your advertising partners want to use Amazon Elastic MapReduce in their own AWS accounts to do analytics on the ad-click data. They have asked for immediate access to the ad-dick data so that they can run analytics.<br>Which two choices are required to facilitate secure access to this data? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#316",
            "answers": [
              {
                "choice": "<p>A. Create a cross-account TAM role with a trust policy that contains partner AWS account IDs and a unique external ID. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new IAM group for AWS Data Pipeline users with a trust policy that contains partner AWS account IDs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure an Amazon S3 bucket policy for the \"click-data\" bucket that allows Read-Only access to the objects, and associate this policy with an IAM role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the Amazon S3 bucket access control list to allow access to the partners Amazon Elastic MapReduce cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure AWS Data Pipeline in the partner AWS accounts to use the web Identity Federation API to access data in the \"click-data\" bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Configure AWS Data Pipeline to transfer the data from the ''click-data\" bucket to the partner's Amazon Elastic MapReduce cluster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 316 discussion",
        "discusstion": [
          {
            "id": 631034,
            "date": "Wed 13 Jul 2022 21:34",
            "username": "toma",
            "content": "a and c",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 587940,
            "date": "Tue 19 Apr 2022 03:30",
            "username": "Training",
            "content": "Should be AD.  Refer to https://thecodinginterface.com/blog/terraform-aws-emr-cross-account-s3/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 374623,
            "date": "Fri 08 Oct 2021 15:45",
            "username": "happydazeD2StelSen",
            "content": "No such ting as a TAM in this context (At AWS a TAM is Technical Account Manager).That's a typo. It means IAM. In fact 'click-data' is mentioned as 'dick-data'. there are multiple typos in this question.<br><br>A,C are correctHahaha 'dick-data'.",
            "upvote_count": "186",
            "selected_answers": ""
          },
          {
            "id": 380878,
            "date": "Fri 15 Oct 2021 22:08",
            "username": "D2StelSen",
            "content": "That's a typo. It means IAM. In fact 'click-data' is mentioned as 'dick-data'. there are multiple typos in this question.<br><br>A,C are correctHahaha 'dick-data'.",
            "upvote_count": "86",
            "selected_answers": ""
          },
          {
            "id": 428985,
            "date": "Fri 29 Oct 2021 16:52",
            "username": "StelSen",
            "content": "Hahaha 'dick-data'.",
            "upvote_count": "6",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#317",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run a SIP-based telephony application that uses Amazon EC2 for its web tier and uses MySQL on Amazon RDS as its database. The application stores only the authentication profile data for its existing users in the database and therefore is read-intensive. Your monitoring system shows that your web instances and the database have high CPU utilization.<br>Which of the following steps should you take in order to ensure the continual availability of your application? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#317",
            "answers": [
              {
                "choice": "<p>A. Use a CloudFront RTMP download distribution with the application tier as the origin for the distribution.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up an Auto Scaling group for the application tier and a policy that scales based on the Amazon EC2 CloudWatch CPU utilization metric.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Vertically scale up the Amazon EC2 instances manually.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up an Auto Scaling group for the application tier and a policy that scales based on the Amazon RDS CloudWatch CPU utilization metric.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Switch to General Purpose (SSD) Storage from Provisioned IOPS Storage (PIOPS) for the Amazon RDS database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use multiple Amazon RDS read replicas.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 317 discussion",
        "discusstion": [
          {
            "id": 333249,
            "date": "Fri 29 Oct 2021 03:05",
            "username": "BKhan",
            "content": "Ans is : BF",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 672883,
            "date": "Mon 19 Sep 2022 05:22",
            "username": "colinquek",
            "content": "tis is the way. since is a config change in AWS only.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BF"
          }
        ]
      },
      {
        "question_id": "#318",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team is responsible for an AWS Elastic Beanstalk application. The business requires that you move to a continuous deployment model, thus releasing updates to the application multiple times per day with zero downtime.<br>What should you do to enable this and still be able to roll back to the previous version almost immediately in an emergency?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#318",
            "answers": [
              {
                "choice": "<p>A. Enable roiling updates in the Elastic Beanstalk environment and set an appropriate pause time for application startup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a second Elastic Beanstalk environment that runs the new application version, and swap the environment CNAMEs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the application to poll for a new application version in your code repository; download and install the new version to each running Elastic Beanstalk instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a second Elastic Beanstalk environment with the new application version, and configure the old environment to use the HTTP 301 response code to redirect clients to the new environment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 318 discussion",
        "discusstion": [
          {
            "id": 428986,
            "date": "Thu 21 Oct 2021 17:14",
            "username": "StelSen",
            "content": "Answer: B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#319",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your Company wants to perform A/B testing on a new website feature for 20 percent of its users. The website uses CloudFront for whole site delivery, with some content cached for up to 24 hours. How do you enable this testing for the required proportion of users while minimizing performance impact?<br></p>",
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
                "choice": "<p>A. Configure the web servers to handle two domain names. The feature is switched on or off depending on which domain name is used for a request. Configure a CloudFront origin for each domain name, and configure the CloudFront distribution to use one origin for 20 percent of users and the other origin for the other 80 percent.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the CloudFront distribution to forward a cookie specific to this feature. For requests where the cookie is not set, the web servers set its value to ''on\" for 20 percent of responses and \"off\" for 80 percent. For requests where the cookie is set, the web servers use Its value to determine whether the feature should be on or off for the response.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a second stack of web servers that host the website with the feature on. Using Amazon Route53, create two resource record sets with the same name: one with a weighting of \"1\" and a value of this new stack; the other a weighting of \"4\" and a value of the existing stack. Use the resource record set's name as the CloudFront distribution's origin.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Invalidate all of the CloudFront distribution's cache items that the feature affects. On future requests, the web servers create responses with the feature on for 20 percent of users, and off for 80 percent. The web servers set \"Cache-Control: no-cache\" on all of these responses.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 319 discussion",
        "discusstion": [
          {
            "id": 445313,
            "date": "Wed 03 Nov 2021 15:22",
            "username": "donny_sanjaySonamDhingra",
            "content": "B is the correct answerB doesn't handle the cache invalidation part of the problem and D doesn't solve the cookie problem. None of the answers provides a complete solution.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 554284,
            "date": "Wed 23 Feb 2022 08:43",
            "username": "SonamDhingra",
            "content": "B doesn't handle the cache invalidation part of the problem and D doesn't solve the cookie problem. None of the answers provides a complete solution.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#320",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been asked to use your departments existing continuous Integration (CI) tool to test a three-tier web architecture defined In an AWS CloudFormation template. The tool already supports AWS APIs and can launch new AWS CloudFormation stacks after polling version control. The CI tool reports on the success of the AWS CloudFormation stack creation by using the Describe Stacks API to look for the CREATE COMPLETE status. The architecture tiers defined in the template consist of:<br>- One load balancer<br>- Five Amazon EC2 instances running the web application<br>- One multi-AZ Amazon ROS instance<br>How would you implement this? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#320",
            "answers": [
              {
                "choice": "<p>A. Define a WaitCondition and a WaitConditionHandle for the output of a UserData command that does sanity checking of the application's post-install state.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define a CustomResource and write a script that runs architecture-level Integration tests through the load balancer to the application and database for the state of multiple tiers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define a WaitCondition and use a WaitConditionHandle that leverages the AWS SDK to run the DescribeStacks API call until the CREATE COMPLETE status is returned.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Define a CustomResource that leverages the AWS SDK to run the DescribeStacks API call until the 'CREATE COMPLETE status is returned.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Define a UserDataHandle for the output of a UserData command that does sanity checking of the application's post-install state and runs integration tests on the state of multiple tiers through the load balancer to the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Define a UserDataHandle for the output of a CustomResource that does sanity checking of the application's post-install state.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 320 discussion",
        "discusstion": [
          {
            "id": 544743,
            "date": "Thu 10 Feb 2022 18:50",
            "username": "blueorca",
            "content": "AB look right",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 402219,
            "date": "Tue 26 Oct 2021 04:11",
            "username": "MBJamesRightAnswers",
            "content": "I would choose A and B. <br>No such thing as a UserDataHandle and the other options are meant to use resources within the stack to check for CREATE_COMPLETE in the stack, but the stack would never complete because of resources beind used to wait for the CREATE_COMPLETE (creating a deadlock situation).The CI tool alreday verifies that the AWS CloudFormation stack completiuon by checking CREATE_COMPLETE state. So, Ans C and D are duplicate verifications and not applicable. There is nothing called UserDataHandle. Ans E and F are distractions. The opnly applicable answers are A (sanity checking of the application's post-install state) and B(verify architecture-level Integration tests through the load balancer to the application and database for the state of multiple tiers).",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 526830,
            "date": "Tue 18 Jan 2022 17:48",
            "username": "RightAnswers",
            "content": "The CI tool alreday verifies that the AWS CloudFormation stack completiuon by checking CREATE_COMPLETE state. So, Ans C and D are duplicate verifications and not applicable. There is nothing called UserDataHandle. Ans E and F are distractions. The opnly applicable answers are A (sanity checking of the application's post-install state) and B(verify architecture-level Integration tests through the load balancer to the application and database for the state of multiple tiers).",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#321",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are building a large, multi-tenant SaaS (software-as-a-service) application with a component that fetches data to process from a customer-specific Amazon<br>S3 bucket in their account.<br>How should you ensure that your application follows security best practices and limits risk when fetching data from customer-owned Amazon S3 buckets?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#321",
            "answers": [
              {
                "choice": "<p>A. Have users create an IAM user with a policy that grants read-only access to the Amazon S3 bucket required by your application, and store the corresponding access keys in an encrypted database that holds their account data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Have users create a cross-account lAM role with a policy that grants read-only access to the Amazon S3 bucket required by your application to the AWS account ID running your production Sass application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Have users create an Amazon S3 bucket policy that grants read-only access to the Amazon S3 bucket required by your application, and securely store the corresponding access keys in the database holding their account data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Have users create an Amazon S3 bucket policy that grants read-only access to the Amazon S3 bucket required by your application and limits access to the public IP address of the SaaS application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 321 discussion",
        "discusstion": [
          {
            "id": 671847,
            "date": "Sun 18 Sep 2022 01:05",
            "username": "colinquek",
            "content": "B - prevents public and cross users, as this is a multi-tenant app.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 604709,
            "date": "Sat 21 May 2022 06:13",
            "username": "alicewsm",
            "content": "Coz cross account role will be created in customer account not for application role, bucket policy would be a best choice",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 540265,
            "date": "Fri 04 Feb 2022 09:09",
            "username": "Erso",
            "content": "Correct Answer is D https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example2.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 529667,
            "date": "Sat 22 Jan 2022 08:27",
            "username": "kanavpeer",
            "content": "Answer is D, as cross account role will be created in each customer account, and there SAAS application running on ec2 won't be able to assume that role.Bucket policies are considered as a best practice when cross account bucket access is required",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 522680,
            "date": "Thu 13 Jan 2022 07:57",
            "username": "zgydmy",
            "content": "Vote D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 501226,
            "date": "Tue 14 Dec 2021 09:43",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 333460,
            "date": "Sun 19 Sep 2021 19:10",
            "username": "BKhan",
            "content": "Ans is B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#322",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a fleet of Elastic Compute Cloud (EC2) instances in an Auto Scaling group. All of these instances are running Microsoft Windows Server 2012 backed by Amazon Elastic Block Store (EBS). These instances were launched through AWS CloudFormation. You have determined that your instances are underutilized, and in order to save some money, have decided to modify the instance type of the fleet. In which of the following ways can you achieve the desired result during a scheduled maintenance window? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#322",
            "answers": [
              {
                "choice": "<p>A. Create a new Auto Scaling launch configuration specifying the new instance type, associate it to the existing Auto Scaling group, and terminate the running instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Identify the new instance type in the user data and restart the running instances one at a time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS Command Line Interface (CLI) to modify the instance type of each running instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the instance type in the AWS CloudFormation template that was used to create the Amazon EC2 instances, and then update the stack.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Take snapshots of the running instances, and launch new instances based on those snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 322 discussion",
        "discusstion": [
          {
            "id": 333462,
            "date": "Fri 05 Nov 2021 17:39",
            "username": "BKhan",
            "content": "Ans is AD",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#323",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run a large number of applications on Amazon EC2 instances. Each application has associated metadata, such as cost center, support contact, and application ID.  Many applications usually co-exist on each Amazon EC2 instance, so the amount of metadata per instance can range from 10 to 200 items. The customer wants to be able to quickly access this metadata using an API without logging into the instances. Which of the following options will satisfy their requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#323",
            "answers": [
              {
                "choice": "<p>A. Create individual Amazon EC2 tags for each metadata item, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2- describe-instance API call.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create compound Amazon EC2 tags for the metadata items, where multiple items are joined together in individual tags, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2-describe-tags API call.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a DynamoDB table to hold the metadata, and associate it with the Amazon EC2 instance IDs running the applications. Access the metadata by querying the database via the DynamoDB API.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. As part of the Amazon EC2 Instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by using the ec2-describe- instance API call.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. As part of the Amazon EC2 instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by accessing its loopback address from a management instance in the same VPC. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 323 discussion",
        "discusstion": [
          {
            "id": 429596,
            "date": "Mon 11 Oct 2021 11:59",
            "username": "StelSenGreatFunanaRightAnswers",
            "content": "Answer is A and CWrong. Max number of tags per resource is 50. There can be from 10-200. BC is the best answer.\\\"Compound tag\\\" is not an AWS terminology. Compound Tags, also known as multi-valued tags, combine several data elements into a single tag, using delimiters to segregate<br>the different attributes, as in: EnvironmentTypeDevelopment;Webserver;Tomcat-6.2;Tier-2. I could find only one Reference: https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf",
            "upvote_count": "171",
            "selected_answers": ""
          },
          {
            "id": 502680,
            "date": "Thu 16 Dec 2021 06:16",
            "username": "GreatFunanaRightAnswers",
            "content": "Wrong. Max number of tags per resource is 50. There can be from 10-200. BC is the best answer.\\\"Compound tag\\\" is not an AWS terminology. Compound Tags, also known as multi-valued tags, combine several data elements into a single tag, using delimiters to segregate<br>the different attributes, as in: EnvironmentTypeDevelopment;Webserver;Tomcat-6.2;Tier-2. I could find only one Reference: https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf",
            "upvote_count": "71",
            "selected_answers": ""
          },
          {
            "id": 509878,
            "date": "Sun 26 Dec 2021 23:44",
            "username": "RightAnswers",
            "content": "\\\"Compound tag\\\" is not an AWS terminology. Compound Tags, also known as multi-valued tags, combine several data elements into a single tag, using delimiters to segregate<br>the different attributes, as in: EnvironmentTypeDevelopment;Webserver;Tomcat-6.2;Tier-2. I could find only one Reference: https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#324",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application running on multiple Amazon EC2 instances within an Auto Scaling group. You notice that instances are being re-spawned as their health checks are failing in Amazon EC2. However, before you have a chance to diagnose the issue, the affected instances are being terminated by the Auto Scaling service. You receive notifications of health checks failing and investigate within 20 minutes. However, this is not enough time to troubleshoot the issue.<br>What should you change that will enable you to troubleshoot the instance before it is terminated by the Auto Scaling service, while keeping costs minimal?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#324",
            "answers": [
              {
                "choice": "<p>A. Install the Amazon CloudWatch Logs Agent on the instance and configure application and system logs to be sent to the CloudWatch Logs service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an Amazon SNS topic and associate it with your Auto Scaling group's CloudWatch alarms. Configure an Amazon SQS queue as a subscriber of this topic, and then create a fleet of Amazon EC2 workers that poll this queue and instruct the Amazon EC2 Auto Scaling API to remove the instance from the Auto Scaling group when an alarm is triggered.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Auto Scaling Group lifecycle hook to hold the instance in a terminating:wait state until you have completed any troubleshooting. When you have completed troubleshooting, wait for the terminating state to expire, or notify to Scaling to complete the lifecycle hook and terminate the Instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the \"DeleteOnTermination\" flag to false in the Auto Scaling group configuration to ensure that instances are not deleted in the future.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 324 discussion",
        "discusstion": [
          {
            "id": 539144,
            "date": "Wed 02 Feb 2022 20:54",
            "username": "bobsmith2000",
            "content": "no-brainer",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 517577,
            "date": "Wed 05 Jan 2022 15:56",
            "username": "RightAnswers",
            "content": "C is correct.<br>https://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-delay-termination/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 380992,
            "date": "Sun 07 Nov 2021 03:12",
            "username": "D2",
            "content": "C is correct.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#325",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You set up a scalable continuous integration platform on AWS. The platform consists of a master node that can delegate project build jobs to multiple slave nodes, all running on Amazon EC2. The build output will be stored in Amazon S3. You always have five slave nodes deployed. Each slave node can handle 10 build jobs simultaneously. Your master node publishes a custom Amazon CloudWatch metric with the name \"RunningBuildiobs\" that Slows you to programmatically track how many build jobs are running across your platform.<br>Which two configuration options will allow you to flexibly scale your platform to support more than 50 simultaneous build jobs while minimizing costs? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#325",
            "answers": [
              {
                "choice": "<p>A. Place your fleet of slave nodes in an Auto Scaling group. Configure a CloudWatch alarm that triggers an Auto Scaling policy to launch Amazon EC2 Instances when \"RunningBuildJobs\" is greater than 45 for more than five minutes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a CloudWatch alarm that sends an alert when \"RunningBuildJobs\" is greater than 45 for more than five minutes. Use Amazon Simple Queue Service to process additional build jobs when the CloudWatch alarm is triggered.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure your fleet of slave nodes to fully utilize all of your purchased Amazon EC2 Heavy Utilization Reserved Instances. Configure a CloudWatch alarm that launches new Amazon EC2 instances when \"RunningBuildJobs\" is less than 40 for more than five minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run your fleet of slave nodes in an Auto Scaling group. Configure a Cloudwatch alarm that launches new Amazon EC2 Dedicated Instances when \"RunningBuildJobs\" is less than 40 for more than five minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Place your fleet of slave nodes in an Auto Scaling group. Configure a CloudWatch alarm that triggers an Auto Scaling policy to terminate Amazon EC2 instances when \"RunningBuildJobs\" is less than 40 for more than five minutes.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 325 discussion",
        "discusstion": [
          {
            "id": 380993,
            "date": "Thu 30 Sep 2021 15:57",
            "username": "D2",
            "content": "AE Make sense",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 421944,
            "date": "Sun 10 Oct 2021 13:58",
            "username": "cyrusipStelSen",
            "content": "why not A,CFor this kind of workloads, avoid using ReservedInstances. So, C is not a good option. A & E still ok.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 429599,
            "date": "Sat 30 Oct 2021 04:50",
            "username": "StelSen",
            "content": "For this kind of workloads, avoid using ReservedInstances. So, C is not a good option. A & E still ok.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#326",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have just come from your Chief Information Security Officer's (CISO) office with the instructions to provide an audit report of all AWS network rules used by the organization's Amazon EC2 instances. You have discovered that a single Describe-Security-Groups API call will return all of an account's security groups and rules within a region. You create the following pseudo-code to create the required report:<br>- Parse \"aws ec2 describe-security-groups\" output<br>- For each security group<br>- Create report of ingress and egress rules<br>Which two additional pieces of logic should you include to meet the CISO's requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#326",
            "answers": [
              {
                "choice": "<p>A. Parse security groups in each region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Parse security groups in each Availability Zone and region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Evaluate VPC network access control lists.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Evaluate AWS CloudTrail logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Evaluate Elastic Load Balancing access control lists.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Parse CloudFront access control lists.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 326 discussion",
        "discusstion": [
          {
            "id": 429601,
            "date": "Wed 06 Oct 2021 14:25",
            "username": "StelSen",
            "content": "Answer is A and C.  A is 100% sure. C - I believe even NACL is used for EC2 instances, although not directly linked with EC2.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#327",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are responsible for a large-scale video transcoding system that operates with an Auto Scaling group of video transcoding workers. The Auto Scaling group is configured with a minimum of 750 Amazon EC2 instances and a maximum of 1000 Amazon EC2 instances. You are using Amazon SQS to pass a message containing the URI for a video stored in Amazon S3 to the transcoding workers. An Amazon CloudWatch alarm has notified you that the queue depth is becoming very large. How can you resolve the alarm without the risk of increasing the time to transcode videos? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#327",
            "answers": [
              {
                "choice": "<p>A. Create a second queue in Amazon SQS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Adjust the Amazon CloudWatch alarms for a higher queue depth.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new Auto Scaling group with a launch configuration that has a larger Amazon EC2 instance type.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an additional Availability Zone to the Auto Scaling group configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Change the Amazon CloudWatch alarm so that it monitors the CPU utilization of the Amazon EC2 instances rather than the Amazon SQS queue depth.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Adjust the Auto Scaling group configuration to increase the maximum number of Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 327 discussion",
        "discusstion": [
          {
            "id": 381000,
            "date": "Mon 04 Oct 2021 04:05",
            "username": "D2",
            "content": "CF Correct",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 646637,
            "date": "Sun 14 Aug 2022 10:06",
            "username": "colinquekcolinquek",
            "content": "I would go w BF as there is a max number of EC2s. The ques did not specify if that is a hard limit or otherwise.sorry change to BC",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 666936,
            "date": "Mon 12 Sep 2022 14:28",
            "username": "colinquek",
            "content": "sorry change to BC",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#328",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been tasked with deploying a solution for your company that will store images, which the marketing department will use for its campaigns. Employees are able to upload images via a web interface, and once uploaded, each image must be resized and watermarked with the company logo. Image resize and watermark is not time-sensitive and can be completed days after upload if required. How should you design this solution in the most highly available and cost- effective way?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#328",
            "answers": [
              {
                "choice": "<p>A. Configure your web application to upload images to the Amazon Elastic Transcoder service. Use the Amazon Elastic Transcoder watermark feature to add the company logo as a watermark on your images and then to upload the final images into an Amazon S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure your web application to upload images to Amazon S3, and send the Amazon S3 bucket URI to an Amazon SQS queue. Create an Auto Scaling group and configure it to use Spot instances, specifying a price you are willing to pay. Configure the instances in this Auto Scaling group to poll the SQS queue for new images and then resize and watermark the image before uploading the final images into Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure your web application to upload images to Amazon S3, and send the S3 object URI to an Amazon SQS queue. Create an Auto Scaling launch configuration that uses Spot instances, specifying a price you are willing to pay. Configure the instances in this Auto Scaling group to poll the Amazon SQS queue for new images and then resize and watermark the image before uploading the new images into Amazon S3 and deleting the message from the Amazon SQS queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure your web application to upload images to the local storage of the web server. Create a cronjob to execute a script daily that scans this directory for new files and then uses the Amazon EC2 Service API to launch 10 new Amazon EC2 instances, which will resize and watermark the images daily.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 328 discussion",
        "discusstion": [
          {
            "id": 513739,
            "date": "Thu 30 Dec 2021 22:29",
            "username": "Bad_MatRightAnswers",
            "content": "Actually, A is correct. Elastic Transcoder is a service to resize images and put a watermark on itYou can configure Elastic Transcoder to overlay up to four graphics, known as watermarks, over a VIDEO during transcoding. It can't be used for images. So, ANS C. ",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 519816,
            "date": "Sun 09 Jan 2022 00:10",
            "username": "RightAnswers",
            "content": "You can configure Elastic Transcoder to overlay up to four graphics, known as watermarks, over a VIDEO during transcoding. It can't be used for images. So, ANS C. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 402228,
            "date": "Thu 07 Oct 2021 11:46",
            "username": "MBJames",
            "content": "C is correct, the message must be deleted by the queue after successful processing",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 381002,
            "date": "Fri 01 Oct 2021 23:13",
            "username": "D2",
            "content": "C is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 333561,
            "date": "Thu 23 Sep 2021 06:39",
            "username": "BKhan",
            "content": "Ans is C:<br>B is also almost the same as C but in it, say Bucket URL which is wrong",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#329",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run a small online consignment marketplace. Interested sellers complete an online application in order to allow them to sell their products on your website.<br>Once approved, they can post their product using a custom interface. From that pant, you manage the shopping cart process so that when a buyer decides to buy a product, you handle the billing and coordinate the shipping. Part of this process requires sending emails to the buyer and the seller at different stages. Your system has been running on AWS for a few months. Occasionally, products are shipped before payment cleared and emails are sent out of order. Furthermore, sometimes credit cards are being charged twice.<br>How can you resolve these problems?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#329",
            "answers": [
              {
                "choice": "<p>A. Use the Amazon Simple Queue Service (SQS), and use a different set of workers for each task.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Amazon Simple Workflow Service (SWF), and use a different set of workers for each task.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the Simple Email Service (SES) to control the correct order of email delivery.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS Data Pipeline service to control the process flow of the various tasks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use the Amazon Simple Queue Service (SQS), and use a single set of workers for each task.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 329 discussion",
        "discusstion": [
          {
            "id": 334476,
            "date": "Thu 28 Oct 2021 06:39",
            "username": "BKhan",
            "content": "Ans is B<br><br>https://aws.amazon.com/swf/",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#330",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application has an Auto Scaling group of m3.large instances running an application that receives messages born an Amazon SQS queue. After a while, the number of instances reaches the maximum set for the group and the number of messages on the queue continues to increase. You have discovered that a third- party library used by the application has a bug that causes a memory leak.<br>What cost-effective steps can you take to continue message processing while the library developer fixes the bug?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#330",
            "answers": [
              {
                "choice": "<p>A. Enable Elastic Load Balancing health checks for the Auto Scaling group. When Elastic Load Balancing has detected a failure, Auto Scaling will terminate the failing application's instance and launch a new one.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon EC2 instance memory usage CloudWatch metrics to raise alerts when they reach a defined level and send a message to Auto Scaling to fail the instance health check.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use application monitoring on the instance to restart the application when memory usage reaches a defined level.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new Auto Scaling launch configuration to use the r3.large instance type. Update the Auto Scaling group with the new launch configuration.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 330 discussion",
        "discusstion": [
          {
            "id": 677782,
            "date": "Sat 24 Sep 2022 13:22",
            "username": "colinquek",
            "content": "very bad wording for answers, esp B, which happens to be the only viable one.<br>Monitoring memory is a custom CW Agent metric, it must be explicitly enabled.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 650422,
            "date": "Mon 22 Aug 2022 22:34",
            "username": "hubekpeter",
            "content": "B and C are wrong, memory leak can cause kernel panic very quickly, so none of these solutions are reliable. D is wrong also. Usually it will fill up the whole memory, no matter how big the instance is. Of course there are other procedures how can this issue can be remediated, but from the options available I will choose A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 545460,
            "date": "Fri 11 Feb 2022 20:53",
            "username": "blueorcadevops7",
            "content": "C, use custom metric to check memory leaks and cycling the instances, we have done this in real life, dealing with the same situation.I will go with A. <br>I think C is wrong because it uses \\\"application monitoring\\\" and \\\"restart the application.\\\" I don't it is part of AWS solution.",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 650638,
            "date": "Tue 23 Aug 2022 09:03",
            "username": "devops7",
            "content": "I will go with A. <br>I think C is wrong because it uses \\\"application monitoring\\\" and \\\"restart the application.\\\" I don't it is part of AWS solution.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 545366,
            "date": "Fri 11 Feb 2022 15:15",
            "username": "bobsmith2000",
            "content": "I gravitate more to A.  It uses conventional approach, only aws means and will work out.<br><br>B is nonsense: you can't fall an instance health check from CloudWatch. Moreover, CloudWatch agent didn't mentioned.C.  It's a aws exam, remember. Which app monitoring? To vague and unclear as to me.D.  It's a band-aid for a wall crack. It's a memory leak, doesn't matter how much memory you have.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 545362,
            "date": "Fri 11 Feb 2022 15:08",
            "username": "bobsmith2000",
            "content": "I'm gravitate more to A. <br><br>B it's nonsense: you can't fall an instance health check",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 505852,
            "date": "Tue 21 Dec 2021 07:19",
            "username": "GreatFunana",
            "content": "A.  Not as cost effective as C. <br>B: is only a partial answer, and nothing without a CloudWatch agent.<br>D is a bad answer, that is the equivalent of just throwing (A LOT) of money at the problem, and is NOT cost effective.<br><br>C: Is an answer, not a permanent one, but one that will deal with the memory leak without raising the costs.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 374674,
            "date": "Sun 17 Oct 2021 18:48",
            "username": "happydazeDantehilary",
            "content": "Ans is B, question specifies \\\"cost-effective steps\\\".B is wrong because there isn't cloudwatch metrics for memory, only a custom metric can be used. D is most correct.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 378341,
            "date": "Fri 22 Oct 2021 14:28",
            "username": "Dantehilary",
            "content": "B is wrong because there isn't cloudwatch metrics for memory, only a custom metric can be used. D is most correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 334479,
            "date": "Fri 15 Oct 2021 11:54",
            "username": "BKhanGreatFunana",
            "content": "Apprently D seems correct Answer.<br>m3.large has 7.5 GB of Ram and r3.large has 15.25 GiBD is not cost effective. r3's are really expensive.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 510020,
            "date": "Mon 27 Dec 2021 05:37",
            "username": "GreatFunana",
            "content": "D is not cost effective. r3's are really expensive.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#331",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are in charge of a large-scale highly available multi-tier web application infrastructure. This architecture consists of Amazon Route53 with a load balancer and multiple Amazon EC2 instances. You have been tasked to come up with a process to provide Blue/Green style deployments.<br>Which technique should you use to deliver this new requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#331",
            "answers": [
              {
                "choice": "<p>A. Using Elastic Beanstalk re-deploy your application and configure Elastic Beanstalk Deployment types, and then use Amazon Route53's alias resource record set to swap between Elastic Beanstalk deployment types.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your application behind a load balancer using an AWS CloudFormation template, launch a new AWS CloudFormation stack during each deployment, update your Amazon Route53 alias resource record set to point to the new load balancer, and finally, terminate your old AWS CloudFormation stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your application behind a load balancer using Auto Scaling groups, create a new identical Auto Scaling group, and associate it to the load balancer. During deployment, create a new Amazon Route53 hosted zone, add this new load balancer to the zone in an alias resource record set, and then remove your old Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your application behind a load balancer using an OpsWorks stack, and use AWS OpsWorks stack versioning. During deployment, create a new version of your application, tell OpsWorks to launch the new version behind your load balancer, and when the new version launches, update your Amazon Route53 alias resource retort to point to the new load balancer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 331 discussion",
        "discusstion": [
          {
            "id": 334858,
            "date": "Sat 06 Nov 2021 10:00",
            "username": "BKhan",
            "content": "Ans is B<br>For Elastic Beanstalk in Blue/Green, we have to create a new environment",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 649124,
            "date": "Sat 20 Aug 2022 02:29",
            "username": "jexam211",
            "content": "For Blue Green the best is ElasticBean",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 644541,
            "date": "Tue 09 Aug 2022 15:53",
            "username": "Rakesh8585",
            "content": "ElasticBean : A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#332",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application uses Amazon SQS and Auto Scaling to process background jobs. The Auto Scaling policy is based on the number of messages in the queue, with a maximum Instance count of 100. Since the application was launched, the group has never scaled above 50. The Auto Scaling group has now scaled to 100, the queue size is increasing, and very few Jobs are being completed. The number of messages being sent to the queue is at normal levels.<br>What should you do to identify why the queue size is unusually high, and to reduce it?<br></p>",
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
                "choice": "<p>A. Temporarily increase the Auto Scaling group's desired value to 200. When the queue size has been reduced, reduce it to 50.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Analyze the application logs to identify possible reasons for message processing failure and resolve the cause for failures.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create additional Auto Scaling groups, enabling the processing of the queue to be performed in parallel.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Analyze CloudTrail logs for Amazon SQS to ensure that the instances' Amazon EC2 role has permission to receive messages from the queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 332 discussion",
        "discusstion": [
          {
            "id": 381055,
            "date": "Sun 24 Oct 2021 03:21",
            "username": "D2",
            "content": "B is the only one answering 'why'. other options are trying to resolve the problem",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 334863,
            "date": "Sat 23 Oct 2021 06:29",
            "username": "BKhan",
            "content": "Ans is B<br>A and C are don't make sense and D is wrong because if there is a permission issue no job should be completed but in question, it is mentioned: \\\" very few Jobs are being completed.\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#333",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a web application that is currently running on a collection of micro instance types in a single AZ behind a single load balancer. You have an Auto Scaling group configured to scale from 2 to 64 instances. When reviewing your CloudWatch metrics, you see that sometimes your Auto Scaling group is running 64 micro instances. The web application is reading and writing to a DynamoDB-configured backend and configured with 800 Write Capacity Units and 800 Read Capacity<br>Units. Your customers are complaining that they are experiencing long load times when viewing your website. You have investigated the DynamoDB CloudWatch metrics; you are under the provisioned Read and write Capacity Units and there is no throttling.<br>How do you scale your service to improve the load times and ensure the principles of high availability?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#333",
            "answers": [
              {
                "choice": "<p>A. Change your Auto Scaling group configuration to include multiple AZs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change your Auto Scaling group configuration to include multiple AZs, and increase the number of Read Capacity Units in your DynamoDB table by a factor of three, because you will need to be calling DynarnoDB from three AZs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a second load balancer to your Auto Scaling group so that you can support more inbound connections per second.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change your Auto Scaling group configuration to use larger instances and include multiple AZ's instead of one.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 333 discussion",
        "discusstion": [
          {
            "id": 381060,
            "date": "Wed 29 Sep 2021 17:08",
            "username": "D2",
            "content": "D is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 335340,
            "date": "Sun 26 Sep 2021 19:38",
            "username": "BKhan",
            "content": "Ans is D<br>As per question, there is no issue in Dynamodb and autoscaling group reaches to Max",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#334",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your social media marketing application has a component written in Ruby running on AWS Elastic Beanstalk. This application component posts messages to social media sites in support of various marketing campaigns. Your management now requires you to record replies to these social media messages to analyze the effectiveness of the marketing campaign in comparison to past and future efforts. You have already developed a new application component to interface with the social media site APIs in order to read the replies.<br>Which process should you use to record the social media replies in a durable data store that can be accessed at any time for analysis of historical data?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#334",
            "answers": [
              {
                "choice": "<p>A. Deploy the new application component in an Auto Scaling group of Amazon Elastic Compute Cloud (EC2) Instances, read the data from the social media sites, store it with Amazon Elastic Block Store, and use AWS Data Pipeline to publish it to Amazon Kinesis for analytics.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the new application component as an Elastic Beanstalk application, read the data from the social media sites, store it in Amazon DynamoDB, and use Apache Hive with Amazon Elastic MapReduce for analytics.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy the new application component in an Auto Scaling group of Amazon EC2 instances, read the data from the social media sites, store it in Amazon Glacier, and use AWS Data Pipeline to publish it to Amazon Redshift for analytics.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy the new application component as an Amazon Elastic Beanstalk application, read the data from the social media site, store it with Amazon Elastic Block Store, and use Amazon Kinesis to stream the data to Amazon CloudWatch for analytics.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 334 discussion",
        "discusstion": [
          {
            "id": 381061,
            "date": "Sat 02 Oct 2021 13:31",
            "username": "D2",
            "content": "B is perfect answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 356848,
            "date": "Mon 27 Sep 2021 16:31",
            "username": "awsqueen",
            "content": "B<br>Ref : https://aws.amazon.com/blogs/aws/aws-howto-using-amazon-elastic-mapreduce-with-dynamodb/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#335",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A web application is being actively developed by multiple development teams within your organization. You have created a self-service portal-driven by AWS<br>CloudFormation and the AWS APIs-that allows testers to select a code branch containing a new feature that they want to test. The portal will then provision an environment and deploy the right branch of code to it. Recently you have noticed that a large number of environments contain broken builds. You want to introduce a set of automated browser tests that are executed on a new environment before the environment is available to the tester. This way a tester does not waste time trying to test new features in a broken environment.<br>Select a suitable way to implement such a feature into the existing self-service portal:<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#335",
            "answers": [
              {
                "choice": "<p>A. Specify your automated tests in the \"tests\" section of the AWS CloudFormation template. AWS CloudFormation will then execute the tests on your behalf as part of the environment build.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a centralized test server that hosts an automated browser testing framework. Use an AWS CloudFormation custom resource to notify the centralized test server, via an Amazon SNS topic, that a new environment has been initialized. The centralized test server can then execute the tests before sending the results back to the AWS CloudFormation service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Pass the test scripts to the cfn-init service via the \"tests\" section of the AWS::CloudFormation::Init metadata. Cfn-init will then execute these tests and return the result to the AWS CloudFormation service.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure a centralized test server that hosts an automated browser testing framework. Include an Amazon SES email resource under the outputs section of your AWS CloudFormation template. This we send an email to your centralized test server, informing it that the environment is ready for tests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 335 discussion",
        "discusstion": [
          {
            "id": 648177,
            "date": "Wed 17 Aug 2022 19:53",
            "username": "hubekpeter",
            "content": "Custom resource is way better approach.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 630962,
            "date": "Wed 13 Jul 2022 17:41",
            "username": "nebojsaMa",
            "content": "I would go with C, as there is an option to implement test sections in init example https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html<br>And on the B the SNS topic doesn't make sense to me as there is no Lambda or something else after.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 613434,
            "date": "Wed 08 Jun 2022 19:49",
            "username": "cox1960",
            "content": "C - you can install and test your app with CFn Init type under cfn-init helper script with \\\"command\\\" and \\\"test\\\" sections. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 553831,
            "date": "Tue 22 Feb 2022 17:45",
            "username": "SonamDhingra",
            "content": "Option - B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 335425,
            "date": "Tue 12 Oct 2021 12:50",
            "username": "BKhanjexam211",
            "content": "Ans is B:<br>A: There is no \\\"Tests\\\" section in the cloudformation template as far as I am aware so this is incorrect.<br><br>C: Again, there is no \\\"Tests\\\" section in the CF init http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html<br><br>so we left with B or D and the difference between them is SNS vs SES for notification and obviously, we are going to pick SNS for pushing out notification.Currently can you put a test section as you can see here<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 647798,
            "date": "Tue 16 Aug 2022 21:46",
            "username": "jexam211",
            "content": "Currently can you put a test section as you can see here<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#336",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have written a server-side Node.Js application and a web application with an HTML/JavaScript front end that uses the Angular.js framework. The server-side application connects to an Amazon Redshift cluster, issues queries, and then returns the results to the front end for display. Your user base is very large and distributed, but it is important to keep the cost of running this application low.<br>Which deployment strategy is both technically valid and the most cost-effective?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: E</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#336",
            "answers": [
              {
                "choice": "<p>A. Deploy an AWS Elastic Beanstalk application with two environments: one for the Node.js application and another for the web front end. Launch an Amazon Redshift cluster, and point your application to its Java Database Connectivity (JDBC) endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an AWS OpsWorks stack with three layers: a static web server layer for your front end, a Node.js app server layer for your server-side application, and a Redshift DB layer for your Amazon Redshift duster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon Simple Storage Service (S3) bucket. Create an Amazon CloudFront distribution with this bucket as its origin. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload the HTML, CSS, images, and JavaScript for the front end, plus the Node.js code for the server-side application, to an Amazon S3 bucket. Create a CloudFront distribution with this bucket as its origin. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon S3 bucket. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 336 discussion",
        "discusstion": [
          {
            "id": 671825,
            "date": "Sun 18 Sep 2022 00:02",
            "username": "colinquek",
            "content": "E<br><br>For those who chose C, can i ask wouldnt having CloudFront drive up the cost? Correct me if im missing something. Tks in adv.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: E"
          },
          {
            "id": 514877,
            "date": "Sun 02 Jan 2022 08:42",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 335429,
            "date": "Thu 04 Nov 2021 15:01",
            "username": "BKhan",
            "content": "Ans is C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#337",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are building an AWS CloudFormation template for a multi-tier web application. The user data of your Linux web server resource contains a complex script that can take a long time to run. Which techniques could you use to ensure that these servers are fully configured and running before attaching them to the load balancer? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#337",
            "answers": [
              {
                "choice": "<p>A. Launch your Linux servers from a nested stack that is called from within the load balancer resource in your AWS CloudFormation template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an AWS CloudFormation Wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use curl to send a signal the Wait Condition at http://169.254.169.254/waithandle/.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add an AWS CloudFormation wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use curl to signal to the Wait Condition pre-signed URL that they are ready.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. In your AWS CloudFormation template, position the load balancer resource JSON block directly below your Linux server resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add an AWS CloudFormation Wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use the command \"cfn-signal\" to signal that they are ready.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 337 discussion",
        "discusstion": [
          {
            "id": 335434,
            "date": "Sun 03 Oct 2021 01:14",
            "username": "BKhan",
            "content": "Ans is CE<br><br>A: nested stack is not going to solve this dependency issue so this is wrong<br><br>B: http://169.254.169.254/waithandle/ is not a valid url for sending the signal back to the wait condition handler<br><br>C: Curl is one way of signaling the wait condition handler http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-waitcondition.html<br><br>D: Resource in CF template is not executed in order so this is wrong<br><br>E: cfn-signal helper script is another way to signal the wait condition handler http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-waitcondition.html",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 397008,
            "date": "Tue 05 Oct 2021 19:59",
            "username": "nseinsei",
            "content": "I'll go with E and ESorry C & E",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 397010,
            "date": "Sat 23 Oct 2021 08:41",
            "username": "nsei",
            "content": "Sorry C & E",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#338",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Customers have recently been complaining that your web application has randomly stopped responding. During a deep dive of your logs, the team has discovered a major bug in your new Java web application. This bug is causing a memory leak that eventually causes the application to crash. Your web application runs on<br>Amazon EC2 and was built with AWS CloudFormation. Which techniques should you use to help detect these problems faster, as well as help eliminate the server's unresponsiveness? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#338",
            "answers": [
              {
                "choice": "<p>A. Update your AWS CloudFormation configuration and enable a CustomResource that uses cfnsignal to detect memory leaks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update your CloudWatch metric granularity config for all Amazon EC2 memory metrics to support five- second granularity. Create a CloudWatch alarm that triggers an Amazon SNS notification to page your team when the application memory becomes too large.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update your AWS CloudFormation configuration to take advantage of Auto Scaling groups. Configure an Auto Scaling group policy to trigger off your custom CloudWatch metrics.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a custom CloudWatch metric that you push your JVM memory usage to. Create a Cloudwatch alarm that triggers an Amazon SNS notification to page your team when the application memory usage becomes too large.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Update your AWS CloudFormation configuration to take advantage of CloudWatch metrics Agent. Configure the CloudWatch Metrics Agent to monitor memory usage and trigger an Amazon SNS alarm.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 338 discussion",
        "discusstion": [
          {
            "id": 596487,
            "date": "Wed 04 May 2022 05:33",
            "username": "TarTee",
            "content": "C and D should be correct answer.<br>E seems correct at first look. But there is no resource type to install CloudWatch Metric in AWS CloudFormation Config",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 583204,
            "date": "Sat 09 Apr 2022 10:11",
            "username": "friendofpenguin",
            "content": "The problem with C is that it doesn't \\\"assist in identifying these issues more quickly\\\"; it pretends the issue with the application doesn't exist!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 551487,
            "date": "Sun 20 Feb 2022 03:40",
            "username": "MF2C",
            "content": "C and D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 501123,
            "date": "Tue 14 Dec 2021 07:48",
            "username": "GreatFunanafriendofpenguinRightAnswers",
            "content": "A: Wrong: CFNSignal is not used in this fashion.<br>B: Wrong: Memory is not monitored by default, which this answer implies.<br>E: Wrong: no such thing as an SNS Alarm.<br>--<br>D: Possible solution vector: create an alarm that is triggered based on memory<br>C: Can use this alarm to trigger a scale up of a new instance without a memory issue while getting rid of the one with them.<br><br>C is not a practical solution, more of a bandaid, but it is more right than the others.SNS alarm - maybe alarm with SNS as action?D, E<br>The solution is update the CloudFormation template to use CloudWatch agent to monitor memory usage and trigger SNS alarm (Ans E) and to create a custom CloudWatch metric to monitor memory usage/JVM memory usage (Ans D).<br>However, none of the answers mention anything about installing the ClodWatch agent. I assume the sentence \\\"Update your AWS CloudFormation configuration to take advantage of CloudWatch metrics Agent\\\" implies that CloudFormation will install CloudWatch agent.<br>Answer C states \\\"Configure an Auto Scaling group policy to trigger off your custom CloudWatch metrics\\\". Shouldn't it be the other way around i.e. custom CloudWatch metrics will trigger off the the Auto Scaling group policy?",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 583203,
            "date": "Sat 09 Apr 2022 10:10",
            "username": "friendofpenguin",
            "content": "SNS alarm - maybe alarm with SNS as action?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510500,
            "date": "Mon 27 Dec 2021 18:08",
            "username": "RightAnswers",
            "content": "D, E<br>The solution is update the CloudFormation template to use CloudWatch agent to monitor memory usage and trigger SNS alarm (Ans E) and to create a custom CloudWatch metric to monitor memory usage/JVM memory usage (Ans D).<br>However, none of the answers mention anything about installing the ClodWatch agent. I assume the sentence \\\"Update your AWS CloudFormation configuration to take advantage of CloudWatch metrics Agent\\\" implies that CloudFormation will install CloudWatch agent.<br>Answer C states \\\"Configure an Auto Scaling group policy to trigger off your custom CloudWatch metrics\\\". Shouldn't it be the other way around i.e. custom CloudWatch metrics will trigger off the the Auto Scaling group policy?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429607,
            "date": "Thu 30 Sep 2021 23:25",
            "username": "StelSen",
            "content": "Answer D & E",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#339",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an ASP.NET web application running in Amazon Elastic Beanstalk. Your next version of the application requires a third-party Windows Installer package to be installed on the instance on first boot and before the application launches.<br>Which options are possible? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#339",
            "answers": [
              {
                "choice": "<p>A. In the application's Global.asax file, run msiexec.exe to install the package using Process.Start() in the Application Start event handler.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the source bundle's .ebextensions folder, create a file with a .config extension. In the file, under the \"packages\" section and \"msi\" package manager, include the package's URL.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Launch a new Amazon EC2 instance from the AMI used by the environment. Log into the instance, install the package and run sysprep. Create a new AMI. Configure the environment to use the new AMI.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the environment's configuration, edit the instances configuration and add the package's URL to the \"Packages\" section.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. In the source bundle's .ebextensions folder, create a \"Packages\" folder. Place the package in the folder.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 339 discussion",
        "discusstion": [
          {
            "id": 545464,
            "date": "Fri 11 Feb 2022 21:03",
            "username": "blueorca",
            "content": "BC for me, D sounds like a distractor",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 545368,
            "date": "Fri 11 Feb 2022 15:21",
            "username": "bobsmith2000",
            "content": "BC.  no-brainer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 397027,
            "date": "Sun 26 Sep 2021 18:24",
            "username": "nsei",
            "content": "I'll go with B and C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 395607,
            "date": "Sat 25 Sep 2021 17:38",
            "username": "muell_xyz",
            "content": "BC<br><br>https://aws.amazon.com/blogs/developer/customizing-windows-elastic-beanstalk-environments-part-1/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 384733,
            "date": "Fri 24 Sep 2021 13:15",
            "username": "mazzz",
            "content": "correct one BC",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#340",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>For AWS Auto Scaling, what is the first transition state an instance enters after leaving steady state when scaling in due to health check failure or decreased load?<br></p>",
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
                "choice": "<p>A. Terminating<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Detaching<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Terminating:Wait<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. EnteringStandby<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 340 discussion",
        "discusstion": [
          {
            "id": 497553,
            "date": "Thu 09 Dec 2021 10:44",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 331089,
            "date": "Fri 08 Oct 2021 05:02",
            "username": "devoppStelSen",
            "content": "A for TerminatINGAgree. https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 429609,
            "date": "Tue 26 Oct 2021 10:40",
            "username": "StelSen",
            "content": "Agree. https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#341",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are hired as the new head of operations for a SaaS company. Your CTO has asked you to make debugging any part of your entire operation simpler and as fast as possible. She complains that she has no idea what is going on in the complex, service-oriented architecture, because the developers just log to disk, and it's very hard to find errors in logs on so many services. How can you best meet this requirement and satisfy your CTO?<br></p>",
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
                "choice": "<p>A. Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the <code>PutBucket</code> event and publish events to AWS Lambda. Use the Lambda to analyze logs as soon as they come in and flag issues.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Begin using CloudWatch Logs on every service. Stream all Log Groups into S3 objects. Use AWS EMR cluster jobs to perform ad-hoc MapReduce analysis and write new queries when needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the <code>PutBucket</code> event and publish events to AWS Kinesis. Use Apache Spark on AWS EMR to perform at-scale stream processing queries on the log chunks and flag issues.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Begin using CloudWatch Logs on every service. Stream all Log Groups into an AWS Elasticsearch Service Domain running Kibana 4 and perform log analysis on a search cluster.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 341 discussion",
        "discusstion": [
          {
            "id": 429610,
            "date": "Tue 21 Sep 2021 14:47",
            "username": "StelSen",
            "content": "Option-D: https://aws.amazon.com/log-analytics/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#342",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of AWS Elastic Beanstalk's model, which is true?<br></p>",
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
                "choice": "<p>A. Applications have many deployments, deployments have many environments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Environments have many applications, applications have many deployments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Applications have many environments, environments have many deployments.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deployments have many environments, environments have many applications.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 342 discussion",
        "discusstion": [
          {
            "id": 581216,
            "date": "Tue 05 Apr 2022 13:45",
            "username": "jj22222",
            "content": "C.  Applications have many environments, environments have many deployments.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 514823,
            "date": "Sun 02 Jan 2022 05:23",
            "username": "mg458932",
            "content": "C. <br><br>Application<br>An Elastic Beanstalk application is a logical collection of Elastic Beanstalk components, including environments, versions, and environment configurations. In Elastic Beanstalk an application is conceptually similar to a folder.<br><br>Environment<br>An environment is a collection of AWS resources running an application version. Each environment runs only one application version at a time, however, you can run the same application version or different application versions in many environments simultaneously. When you create an environment, Elastic Beanstalk provisions the resources needed to run the application version you specified.<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497478,
            "date": "Thu 09 Dec 2021 09:57",
            "username": "I_heart_shuffle_girls",
            "content": "Answer is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429614,
            "date": "Sat 25 Sep 2021 14:08",
            "username": "StelSen",
            "content": "Answer: C.  https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#343",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work for a company that automatically tags photographs using artificial neural networks (ANNs), which run on GPUs using C++. You receive millions of images at a time, but only 3 times per day on average. These images are loaded into an AWS S3 bucket you control for you in a batch, and then the customer publishes a JSON-formatted manifest into another S3 bucket you control as well. Each image takes 10 milliseconds to process using a full GPU. Your neural network software requires 5 minutes to bootstrap. Image tags are JSON objects, and you must publish them to an S3 bucket. Which of these is the best system architectures for this system?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#343",
            "answers": [
              {
                "choice": "<p>A. Create an OpsWorks Stack with two Layers. The first contains lifecycle scripts for launching and bootstrapping an HTTP API on G2 instances for ANN image processing, and the second has an always-on instance which monitors the S3 manifest bucket for new files. When a new file is detected, request instances to boot on the ANN layer. When the instances are booted and the HTTP APIs are up, submit processing requests to individual instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Make an S3 notification configuration which publishes to AWS Lambda on the manifest bucket. Make the Lambda create a CloudFormation Stack which contains the logic to construct an autoscaling worker tier of EC2 G2 instances with the ANN code on each instance. Create an SQS queue of the images in the manifest. Tear the stack down when the queue is empty.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy your ANN code to AWS Lambda as a bundled binary for the C++ extension. Make an S3 notification configuration on the manifest, which publishes to another AWS Lambda running controller code. This controller code publishes all the images in the manifest to AWS Kinesis. Your ANN code Lambda Function uses the Kinesis as an Event Source. The system automatically scales when the stream contains image events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Auto Scaling, Load Balanced Elastic Beanstalk worker tier Application and Environment. Deploy the ANN code to G2 instances in this tier. Set the desired capacity to 1. Make the code periodically check S3 for new manifests. When a new manifest is detected, push all of the images in the manifest into the SQS queue associated with the Elastic Beanstalk worker tier.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 343 discussion",
        "discusstion": [
          {
            "id": 381097,
            "date": "Wed 22 Sep 2021 02:38",
            "username": "D2",
            "content": "B is correct. Other options are not relevant",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 573572,
            "date": "Wed 23 Mar 2022 12:50",
            "username": "dzenadcu",
            "content": "S3 event-driven notifications must initiate the process. That's the key difference presented in B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#344",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are designing a system which needs, at minumum, 8 m4.large instances operating to service traffic. When designing a system for high availability in the us- east-1 region, which has 6 Availability Zones, you company needs to be able to handle death of a full availability zone. How should you distribute the servers, to save as much cost as possible, assuming all of the EC2 nodes are properly linked to an ELB?<br>Your VPC account can utilize us-east-1's AZ's a through f, inclusive.<br></p>",
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
                "choice": "<p>A. 3 servers in each of AZ's a through d, inclusive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 8 servers in each of AZ's a and b.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 2 servers in each of AZ's a through e, inclusive.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. 4 servers in each of AZ's a through c, inclusive.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 344 discussion",
        "discusstion": [
          {
            "id": 331090,
            "date": "Fri 08 Oct 2021 17:46",
            "username": "devopp",
            "content": "C<br>Most cost eff is lowest total count while meeting req for 8 with 1 AZ down, so its 10 -2 8. Other plausible options running 12 nodes so more 3 expensive...",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 553210,
            "date": "Mon 21 Feb 2022 21:12",
            "username": "RightAnswers",
            "content": "Both C and D are correct. But C is more cost effective, since you have only 10 instances compared to 12 instances in Ans D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504856,
            "date": "Sun 19 Dec 2021 14:23",
            "username": "Balki",
            "content": "C looks more close",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#345",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to create a Route53 record automatically in CloudFormation when not running in production during all launches of a Template.<br>How should you implement this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#345",
            "answers": [
              {
                "choice": "<p>A. Use a <code>Parameter</code> for <code>environment</code>, and add a <code>Condition</code> on the Route53 <code>Resource</code> in the template to create the record only when <code>environment</code> is not <code>production</code>.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create two templates, one with the Route53 record value and one with a null value for the record. Use the one without it when deploying to production.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a <code>Parameter</code> for <code>environment</code>, and add a <code>Condition</code> on the Route53 <code>Resource</code> in the template to create the record with a null string when <code>environment</code> is <code>production</code>.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create two templates, one with the Route53 record and one without it. Use the one without it when deploying to production.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 345 discussion",
        "discusstion": [
          {
            "id": 514879,
            "date": "Sun 02 Jan 2022 08:51",
            "username": "mg458932",
            "content": "A. <br>You might use conditions when you want to reuse a template that can create resources in different contexts, such as a test environment versus a production environment. In your template, you can add an EnvironmentType input parameter, which accepts either prod or test as inputs.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504359,
            "date": "Sat 18 Dec 2021 18:34",
            "username": "RightAnswers",
            "content": "A<br>Link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331092,
            "date": "Sat 23 Oct 2021 14:12",
            "username": "devopp",
            "content": "A<br>valid use of Template Parameter and Condition",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#346",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is web identity federation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#346",
            "answers": [
              {
                "choice": "<p>A. Use of an identity provider like Google or Facebook to become an AWS IAM User.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use of an identity provider like Google or Facebook to exchange for temporary AWS security credentials.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use of AWS IAM User tokens to log in as a Google or Facebook user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use of AWS STS Tokens to log in as a Google or Facebook user.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 346 discussion",
        "discusstion": [
          {
            "id": 497522,
            "date": "Thu 09 Dec 2021 10:25",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331095,
            "date": "Mon 11 Oct 2021 13:23",
            "username": "devopp",
            "content": "B to obtain temp STS Token",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#347",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been asked to de-risk deployments at your company. Specifically, the CEO is concerned about outages that occur because of accidental inconsistencies between Staging and Production, which sometimes cause unexpected behaviors in Production even when Staging tests pass. You already use<br>Docker to get high consistency between Staging and Production for the application environment on your EC2 instances.<br>How do you further de-risk the rest of the execution environment, since in AWS, there are many service components you may use beyond EC2 virtual machines?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#347",
            "answers": [
              {
                "choice": "<p>A. Develop models of your entire cloud system in CloudFormation. Use this model in Staging and Production to achieve greater parity.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Config to force the Staging and Production stacks to have configuration parity. Any differences will be detected for you so you are aware of risks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AMIs to ensure the whole machine, including the kernel of the virual machines, is consistent, since Docker uses Linux Container (LXC) technology, and we need to make sure the container environment is consistent.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS ECS and Docker clustering. This will make sure that the AMIs and machine sizes are the same across both environments.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 347 discussion",
        "discusstion": [
          {
            "id": 429617,
            "date": "Wed 03 Nov 2021 08:46",
            "username": "StelSen",
            "content": "Option-A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#348",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are creating a new API for video game scores. Reads are 100 times more common than writes, and the top 1% of scores are read 100 times more frequently than the rest of the scores.<br>What's the best design for this system, using DynamoDB?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#348",
            "answers": [
              {
                "choice": "<p>A. DynamoDB table with 100x higher read than write throughput, with CloudFront caching.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. DynamoDB table with roughly equal read and write throughput, with CloudFront caching.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. DynamoDB table with 100x higher read than write throughput, with ElastiCache caching.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. DynamoDB table with roughly equal read and write throughput, with ElastiCache caching.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 348 discussion",
        "discusstion": [
          {
            "id": 429619,
            "date": "Fri 05 Nov 2021 16:49",
            "username": "StelSen",
            "content": "Option-D.  good use case for ElastiCache",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#349",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You were just hired as a DevOps Engineer for a startup. Your startup uses AWS for 100% of their infrastructure. They currently have no automation at all for deployment, and they have had many failures while trying to deploy to production. The company has told you deployment process risk mitigation is the most important thing now, and you have a lot of budget for tools and AWS resources. Their stack:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03760/0021000001.png\" class=\"in-exam-image\"><br>The scaling group properly varies between 4 and 12 EC2 servers.<br>Which of the following approaches, given this company's stack and their priorities, best meets the company's needs?<br></p>",
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
                "choice": "<p>A. Model the stack in AWS Elastic Beanstalk as a single Application with multiple Environments. Use Elastic Beanstalk's Rolling Deploy option to progressively roll out application code changes when promoting across environments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Model the stack in 3 CloudFormation templates: Data layer, compute layer, and networking layer. Write stack deployment and integration testing automation following Blue-Green methodologies.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Model the stack in AWS OpsWorks as a single Stack, with 1 compute layer and its associated ELB.  Use Chef and App Deployments to automate Rolling Deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Model the stack in 1 CloudFormation template, to ensure consistency and dependency graph resolution. Write deployment and integration testing automation following Rolling Deployment methodologies.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 349 discussion",
        "discusstion": [
          {
            "id": 509137,
            "date": "Sat 25 Dec 2021 14:43",
            "username": "szl0144",
            "content": "B seems like the answer",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 429622,
            "date": "Wed 29 Sep 2021 12:59",
            "username": "StelSenmg458932ivanenko",
            "content": "I am confused with A & B.  But choosing B since it has blue/green and client have lots of budget.According to the question \\\"you have a large budget for tools and AWS resources\\\", so if you are going to use Beanstalk better to choose rolling deployment with an additional batch rather than the Rolling Deploy option which works when we are going to save money. So I think A is not the best option.A is wrong, as Elastic Beanstalk does not support DynamoDB",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 517224,
            "date": "Wed 05 Jan 2022 08:13",
            "username": "mg458932",
            "content": "According to the question \\\"you have a large budget for tools and AWS resources\\\", so if you are going to use Beanstalk better to choose rolling deployment with an additional batch rather than the Rolling Deploy option which works when we are going to save money. So I think A is not the best option.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540199,
            "date": "Fri 04 Feb 2022 05:49",
            "username": "ivanenko",
            "content": "A is wrong, as Elastic Beanstalk does not support DynamoDB",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#350",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the scope of an EBS snapshot?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#350",
            "answers": [
              {
                "choice": "<p>A. Availability Zone<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Placement Group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Region<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. VPC<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 350 discussion",
        "discusstion": [
          {
            "id": 497517,
            "date": "Thu 09 Dec 2021 10:23",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 332351,
            "date": "Wed 27 Oct 2021 08:38",
            "username": "RLai",
            "content": "Snapshot is stored in S3 being replicated across AZ. Therefore, it should be region and answer is C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#351",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your system uses a multi-master, multi-region DynamoDB configuration spanning two regions to achieve high availablity. For the first time since launching your system, one of the AWS Regions in which you operate over went down for 3 hours, and the failover worked correctly. However, after recovery, your users are experiencing strange bugs, in which users on different sides of the globe see different data.<br>What is a likely design issue that was not accounted for when launching?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#351",
            "answers": [
              {
                "choice": "<p>A. The system does not have Lambda Functor Repair Automatons, to perform table scans and chack for corrupted partition blocks inside the Table in the recovered Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The system did not implement DynamoDB Table Defragmentation for restoring partition performance in the Region that experienced an outage, so data is served stale.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The system did not include repair logic and request replay buffering logic for post-failure, to resynchronize data to the Region that was unavailable for a number of hours.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The system did not use DynamoDB Consistent Read requests, so the requests in different areas are not utilizing consensus across Regions at runtime.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 351 discussion",
        "discusstion": [
          {
            "id": 517823,
            "date": "Wed 05 Jan 2022 22:46",
            "username": "RightAnswers",
            "content": "Ans D<br>The key thing here is it is a MULTI-MASTER multi-region DDB architecture. This is normally implemented using DynamoDB Global Tables (https://www.serverless.com/blog/build-multiregion-multimaster-application-dynamodb-global-tables). if DynamoDB Global Tables are used, then the read inconsistency could be because Cosnsisten Read Requests are not used.<br>However, there is another approach - Multi-Master DDB can be implemented by creating independent tables in different regions and then using DynamoDB streams to sync the records. If that approach is used, the C may be an answer.<br>DynamoDB steams was available since Nov 2014 and Amazon release DynamoDB Global Tables in Nov 2017. I am not sure why someone would implement multi-master, multi-region DynamoDB architecture using DynamoDB streams after 2017.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 637050,
            "date": "Tue 26 Jul 2022 03:37",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 633729,
            "date": "Tue 19 Jul 2022 21:42",
            "username": "toma",
            "content": "will go with D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 631033,
            "date": "Wed 13 Jul 2022 21:33",
            "username": "toma",
            "content": "D is the right answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 539196,
            "date": "Wed 02 Feb 2022 22:05",
            "username": "bobsmith2000",
            "content": "Old question? None of it seems correct.<br>\\\"If a Region becomes isolated or degraded, DynamoDB keeps track of any writes that have been performed but have not yet been propagated to all of the replica tables. When the Region comes back online, DynamoDB resumes propagating any pending writes from that Region to the replica tables in other Regions. It also resumes propagating writes from other replica tables to the Region that is now back online.\\\"<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429674,
            "date": "Fri 01 Oct 2021 17:33",
            "username": "StelSen",
            "content": "I guess \\\"Option-C\\\". I used the elimination technique. I could eliminate other options and unsure about Option-C. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#352",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>There are a number of ways to purchase compute capacity on AWS. Which orders the price per compute or memory unit from LOW to HIGH (cheapest to most expensive), on average?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#352",
            "answers": [
              {
                "choice": "<p>A. On-Demand B.  Spot C.  Reserved<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A, B, C<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. C, B, A<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. B, C, A<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. A, C, B<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 352 discussion",
        "discusstion": [
          {
            "id": 331098,
            "date": "Mon 27 Sep 2021 20:05",
            "username": "devopp",
            "content": "its D<br>Spot cheaper than Reserved cheaper than OnDemand<br>https://blog.boltops.com/2018/07/13/on-demand-vs-reserved-vs-spot-aws-ec2-pricing-comparison",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 545549,
            "date": "Fri 11 Feb 2022 23:33",
            "username": "blueorca",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 381378,
            "date": "Sat 23 Oct 2021 06:53",
            "username": "D2",
            "content": "Answer is D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 378502,
            "date": "Tue 19 Oct 2021 18:52",
            "username": "Dantehilary",
            "content": "D https://aws.amazon.com/ec2/pricing/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 336097,
            "date": "Tue 12 Oct 2021 21:10",
            "username": "BKhan",
            "content": "Ans is D<br>Amazon EC2 Spot instances allow you to request spare Amazon EC2 computing capacity for up to 90% off the On-Demand price<br>Reserved Instances provide you with a significant discount (up to 75%) compared to On-Demand instance pricing<br>https://aws.amazon.com/ec2/pricing/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#353",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run operations for a company that processes digital wallet payments at a very high volume. One second of downtime, during which you drop payments or are otherwise unavailable, loses you on average USD 100. You balance the financials of the transaction system once per day.<br>Which database setup is best suited to address this business risk?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#353",
            "answers": [
              {
                "choice": "<p>A. A multi-AZ RDS deployment with synchronous replication to multiple standbys and read-replicas for fast failover and ACID properties.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A multi-region, multi-master, active-active RDS configuration using database-level ACID design principles with database trigger writes for replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A multi-region, multi-master, active-active DynamoDB configuration using application control-level BASE design principles with change-stream write queue buffers for replication.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. A multi-AZ DynamoDB setup with changes streamed to S3 via AWS Kinesis, for highly durable storage and BASE properties.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 353 discussion",
        "discusstion": [
          {
            "id": 504504,
            "date": "Sun 19 Dec 2021 00:03",
            "username": "Balki",
            "content": "C https://aws.amazon.com/blogs/database/how-to-use-amazon-dynamodb-global-tables-to-power-multiregion-architectures/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429675,
            "date": "Mon 11 Oct 2021 15:35",
            "username": "StelSen",
            "content": "Option-C.  Reason: App wants not even 1 second downtime. DDB Global DB will achieve this. DDB have ACID characteristics: https://aws.amazon.com/blogs/aws/new-amazon-dynamodb-transactions/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#354",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of DynamoDB, what are true of Local Secondary Key properties?<br></p>",
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
                "choice": "<p>A. Either the partition key or the sort key can be different from the table, but not both.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Only the sort key can be different from the table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The partition key and sort key can be different from the table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Only the partition key can be different from the table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 354 discussion",
        "discusstion": [
          {
            "id": 581211,
            "date": "Tue 05 Apr 2022 13:38",
            "username": "jj22222",
            "content": "B.  Only the sort key can be different from the table.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514766,
            "date": "Sun 02 Jan 2022 02:27",
            "username": "mg458932",
            "content": "B. <br>DynamoDB supports two types of secondary indexes:<br><br>Global secondary index =E2=80=94 An index with a partition key and a sort key that can be different from those on the base table. A global secondary index is considered \\\"global\\\" because queries on the index can span all of the data in the base table, across all partitions. A global secondary index is stored in its own partition space away from the base table and scales separately from the base table.<br><br>Local secondary index =E2=80=94 An index that has the same partition key as the base table, but a different sort key. A local secondary index is \\\"local\\\" in the sense that every partition of a local secondary index is scoped to a base table partition that has the same partition key value.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 497448,
            "date": "Thu 09 Dec 2021 09:28",
            "username": "I_heart_shuffle_girls",
            "content": "Answer is B. <br><br>Local secondary index - An index that has the same partition key as the base table, but a different sort key",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429679,
            "date": "Tue 05 Oct 2021 21:56",
            "username": "StelSen",
            "content": "Option-B.  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html<br>\\\"A local secondary index maintains an alternate sort key for a given partition key value. A local secondary index also contains a copy of some or all of the attributes from its base table. You specify which attributes are projected into the local secondary index when you create the table. The data in a local secondary index is organized by the same partition key as the base table, but with a different sort key. This lets you access data items efficiently across this different dimension. For greater query or scan flexibility, you can create up to five local secondary indexes per table.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#355",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which deployment method, when using AWS Auto Scaling Groups and Auto Scaling Launch Configurations, enables the shortest time to live for individual servers?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#355",
            "answers": [
              {
                "choice": "<p>A. Pre-baking AMIs with all code and configuration on deploys.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Using a Dockerfile bootstrap on instance launch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Using UserData bootstrapping scripts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Using AWS EC2 Run Commands to dynamically SSH into fleets.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 355 discussion",
        "discusstion": [
          {
            "id": 617161,
            "date": "Thu 16 Jun 2022 10:03",
            "username": "gr3y_matter",
            "content": "A - https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/prebaking-vs.-bootstrapping-amis.html#:~:textInstalling%20your%20application,the%20current%20environment.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 617158,
            "date": "Thu 16 Jun 2022 09:55",
            "username": "[Removed]",
            "content": "A- https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/prebaking-vs.-bootstrapping-amis.html#:~:textInstalling%20your%20application,the%20current%20environment.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 534521,
            "date": "Fri 28 Jan 2022 08:57",
            "username": "SonamDhingra",
            "content": "Option-A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 429680,
            "date": "Fri 08 Oct 2021 00:51",
            "username": "StelSen",
            "content": "Option-A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#356",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these techniques enables the fastest possible rollback times in the event of a failed deployment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#356",
            "answers": [
              {
                "choice": "<p>A. Rolling; Immutable<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Rolling; Mutable<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Canary or A/B<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Blue-Green<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 356 discussion",
        "discusstion": [
          {
            "id": 581284,
            "date": "Tue 05 Apr 2022 15:39",
            "username": "jj22222",
            "content": "blue-green",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497530,
            "date": "Thu 09 Dec 2021 10:30",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381382,
            "date": "Sat 25 Sep 2021 19:50",
            "username": "D2",
            "content": "D correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#357",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following are not valid sources for OpsWorks custom cookbook repositories?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#357",
            "answers": [
              {
                "choice": "<p>A. HTTP(S)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Git<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS EBS<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Subversion<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 357 discussion",
        "discusstion": [
          {
            "id": 636131,
            "date": "Sun 24 Jul 2022 18:17",
            "username": "MachanNoob",
            "content": "C.  AWS EBS is not supported. All others are supported.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 501240,
            "date": "Tue 14 Dec 2021 09:59",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497664,
            "date": "Thu 09 Dec 2021 12:12",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429713,
            "date": "Tue 21 Sep 2021 08:02",
            "username": "StelSen",
            "content": "Option-C.  Other sources are supported. https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-installingcustom-enable.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#358",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are building a deployment system on AWS. You will deploy new code by bootstrapping instances in a private subnet in a VPC at runtime using UserData scripts pointing to an S3 zip file object, where your code is stored. An ELB in a public subnet has network interfaces and connectivity to the instances. Requests from users of the system are routed to the ELB via a Route53 A Record Alias. You do not use any VPC endpoints.<br>Which is a risk of using this approach?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#358",
            "answers": [
              {
                "choice": "<p>A. Route53 Alias records do not always update dynamically with ELB network changes after deploys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. If the NAT routing for the private subnet fails, deployments fail.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Kernel changes to the base AMI may render the code inoperable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The instances cannot be in a private subnet if the ELB is in a public one.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 358 discussion",
        "discusstion": [
          {
            "id": 429718,
            "date": "Sun 17 Oct 2021 17:53",
            "username": "StelSen",
            "content": "Option-B.  Since instances requires internet to reachout to S3 bucket (as we don't have vpc endpoint).",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#359",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which major database needs a BYO license?<br></p>",
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
                "choice": "<p>A. PostgreSQL<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. MariaDB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. MySQL<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Oracle<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 359 discussion",
        "discusstion": [
          {
            "id": 497578,
            "date": "Thu 09 Dec 2021 11:08",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 336109,
            "date": "Fri 22 Oct 2021 20:49",
            "username": "BKhan",
            "content": "Ans is D<br>https://aws.amazon.com/rds/oracle/faqs/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#360",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the maximum supported single-volume throughput on EBS?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#360",
            "answers": [
              {
                "choice": "<p>A. 320MiB/s<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. 160MiB/s<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 40MiB/s<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 640MiB/s<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 360 discussion",
        "discusstion": [
          {
            "id": 497607,
            "date": "Thu 09 Dec 2021 11:35",
            "username": "I_heart_shuffle_girls",
            "content": "I would go with A as it says single EBS volume.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 357794,
            "date": "Wed 20 Oct 2021 12:30",
            "username": "Cloudguy123",
            "content": "Max Throughput per Volume<br>SSD-Backed General Purpose (gp2)*\t\t160 MiB/s<br>SSD-Backed Provisioned IOPS (io1)\t\t320 MiB/s<br>HDD-Backed Throughput Optimized (st1)\t500 MiB/s<br>HDD-Backed Cold (sc1)\t\t\t\t250 MiB/s<br><br>Answer A is max in the available options<br>https://docs.aws.amazon.com/whitepapers/latest/aws-storage-services-overview/performance-3.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 336111,
            "date": "Tue 12 Oct 2021 09:30",
            "username": "BKhan",
            "content": "Ans is A<br>Max Throughput per Volume is \t320 MiB/s=09<br>https://docs.aws.amazon.com/whitepapers/latest/aws-storage-services-overview/performance-3.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#361",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When a user is detaching an EBS volume from a running instance and attaching it to a new instance, which of the below mentioned options should be followed to avoid file system damage?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#361",
            "answers": [
              {
                "choice": "<p>A. Unmount the volume first<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Stop all the I/O of the volume before processing<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Take a snapshot of the volume before detaching<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Force Detach the volume to ensure that all the data stays intact<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 361 discussion",
        "discusstion": [
          {
            "id": 579955,
            "date": "Sat 02 Apr 2022 19:04",
            "username": "jj22222",
            "content": "unmount the volume first",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 523631,
            "date": "Fri 14 Jan 2022 18:01",
            "username": "SonamDhingra",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510195,
            "date": "Mon 27 Dec 2021 10:40",
            "username": "kowalkowal",
            "content": "Ans: A<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html<br>You can detach an Amazon EBS volume from an instance explicitly or by terminating the instance. However, if the instance is running, you must first unmount the volume from the instance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 505661,
            "date": "Mon 20 Dec 2021 21:05",
            "username": "Bad_Mat",
            "content": "I vote for A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429721,
            "date": "Sun 03 Oct 2021 23:40",
            "username": "StelSendevops7",
            "content": "Option-BB may cost data lost, but A is to \\\"avoid file system damage\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 651090,
            "date": "Wed 24 Aug 2022 06:26",
            "username": "devops7",
            "content": "B may cost data lost, but A is to \\\"avoid file system damage\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#362",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user is creating a new EBS volume from an existing snapshot. The snapshot size shows 10 GB.  Can the user create a volume of 30 GB from that snapshot?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#362",
            "answers": [
              {
                "choice": "<p>A. Provided the original volume has set the change size attribute to true<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Yes<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Provided the snapshot has the modify size attribute set as true<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. No<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 362 discussion",
        "discusstion": [
          {
            "id": 514264,
            "date": "Sat 01 Jan 2022 00:31",
            "username": "RightAnswers",
            "content": "B<br>https://aws.amazon.com/ebs/features/<br>Resizing Amazon EBS volumes - There are two methods that can be used to resize an Amazon EBS volume. If you create a new volume based on a snapshot, you can specify a larger size for the new volume. With the Elastic Volumes feature you can dynamically grow live volumes without the use of snapshots. Make certain that your file system and application supports resizing a device.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 497540,
            "date": "Thu 09 Dec 2021 10:35",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429725,
            "date": "Thu 30 Sep 2021 11:10",
            "username": "StelSen",
            "content": "Option-B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#363",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>How long are the messages kept on an SQS queue by default?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#363",
            "answers": [
              {
                "choice": "<p>A. If a message is not read, it is never deleted<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 2 weeks<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 1 day<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 4 days<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 363 discussion",
        "discusstion": [
          {
            "id": 635470,
            "date": "Sat 23 Jul 2022 09:25",
            "username": "Hunter123",
            "content": "https://aws.amazon.com/sqs/faqs/#:~:textYou%20can%20configure%20the%20Amazon,your%20messages%20are%20automatically%20deleted.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 620005,
            "date": "Tue 21 Jun 2022 20:30",
            "username": "SHAAHIBHUSHANAWS",
            "content": "B<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-queue-parameters.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618185,
            "date": "Sat 18 Jun 2022 12:15",
            "username": "gr3y_matter",
            "content": "if min is 1second, max is 14 days 2 weeks, then [ Why it is not be \\\"B- 2 weeks\\\"] as a longest duration ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 516189,
            "date": "Tue 04 Jan 2022 02:56",
            "username": "Ray0411",
            "content": "D<br>but a little confused , is it really a DOP question?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497495,
            "date": "Thu 09 Dec 2021 10:11",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.<br><br>min: 1 second, default: 4 days, max: 14 days",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429727,
            "date": "Sat 30 Oct 2021 23:56",
            "username": "StelSen",
            "content": "Option-D.  https://aws.amazon.com/sqs/faqs/#Limits_and_restrictions",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#364",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has attached an EBS volume to a running Linux instance as a \"/dev/sdf\" device. The user is unable to see the attached device when he runs the command<br>\"df -h\".<br>What is the possible reason for this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#364",
            "answers": [
              {
                "choice": "<p>A. The volume is not in the same AZ of the instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The volume is not formatted<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The volume is not attached as a root device<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The volume is not mounted<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 364 discussion",
        "discusstion": [
          {
            "id": 508924,
            "date": "Sat 25 Dec 2021 02:12",
            "username": "szl0144",
            "content": "should be D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429728,
            "date": "Mon 27 Sep 2021 07:54",
            "username": "StelSen",
            "content": "Option-D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#365",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When using Amazon SQS how much data can you store in a message?<br></p>",
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
                "choice": "<p>A. 8 KB<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. 2 KB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 16 KB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 4 KB<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 365 discussion",
        "discusstion": [
          {
            "id": 620851,
            "date": "Thu 23 Jun 2022 10:28",
            "username": "ishitat",
            "content": "None is correct : 256kb is the option..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 527786,
            "date": "Wed 19 Jan 2022 18:52",
            "username": "hubekpeter",
            "content": "The answers are obsolete, it's 2GBs, but it used to be 8kB during the service launch.<br>https://aws.amazon.com/blogs/aws/amazon-sqs-15-years-and-still-queueing/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508616,
            "date": "Fri 24 Dec 2021 17:56",
            "username": "sg0206",
            "content": "None is correct : 256kb is the option..<br>The minimum message size is 1 byte (1 character). The maximum is 262,144 bytes (256 KB).<br><br>To send messages larger than 256 KB, you can use the Amazon SQS Extended Client Library for Java. This library allows you to send an Amazon SQS message that contains a reference to a message payload in Amazon S3. The maximum payload size is 2 GB. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497514,
            "date": "Thu 09 Dec 2021 10:22",
            "username": "I_heart_shuffle_girls",
            "content": "256 KB without S3, 2 GB with S3.<br><br>No answer is correct here.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 466790,
            "date": "Sun 07 Nov 2021 00:52",
            "username": "okidavpupkinGreatFunana",
            "content": "This question is out of data. It's up to 2GB. <br>https://aws.amazon.com/about-aws/whats-new/2015/10/now-send-payloads-up-to-2gb-with-amazon-sqs/2GB can be placed to S3 and referred in SQS message. Max msg size that can be put to SQS stays 256Only if you use SQS extended client library, which store data excess of 256KB in S3. The answer is still 256KB for raw SQS.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 486066,
            "date": "Wed 24 Nov 2021 16:40",
            "username": "vpupkin",
            "content": "2GB can be placed to S3 and referred in SQS message. Max msg size that can be put to SQS stays 256",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 501068,
            "date": "Tue 14 Dec 2021 05:33",
            "username": "GreatFunana",
            "content": "Only if you use SQS extended client library, which store data excess of 256KB in S3. The answer is still 256KB for raw SQS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 346345,
            "date": "Sun 17 Oct 2021 17:49",
            "username": "AnilaC",
            "content": "The answer should be 256kb",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 341270,
            "date": "Thu 07 Oct 2021 18:54",
            "username": "GCP_user",
            "content": "Please see this information published in 2015. 6 years ago.<br><br>Now Send Payloads up to 2GB with Amazon SQS<br>Posted On: Oct 27, 2015<br><br>Amazon Simple Queue Service (SQS) now has an Extended Client Library that enables you to send and receive messages with payloads up to 2GB.  Previously, message payloads were limited to 256KB.  Using the Extended Client Library, message payloads larger than 256KB are stored in an Amazon Simple Storage Service (S3) bucket, using SQS to send and receive a reference to the payload location.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 336114,
            "date": "Sun 03 Oct 2021 21:48",
            "username": "BKhan",
            "content": "All answers are wrong in this question. SQS supports a maximum message size of 256kb. The transport works around this size limit by using Amazon S3 to store message payloads for messages that are larger than 256kb in size",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#366",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the maximum time messages can be stored in SQS?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#366",
            "answers": [
              {
                "choice": "<p>A. 14 days<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. one month<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 4 days<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 7 days<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 366 discussion",
        "discusstion": [
          {
            "id": 619118,
            "date": "Mon 20 Jun 2022 09:57",
            "username": "gr3y_matter",
            "content": "In some other question ,examTopic says it's 'C' which is incorrect. (please fix the answer in that question)<br>minTime1min<br>DefaultTime4days<br>maxTime14 days (longest time)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497526,
            "date": "Thu 09 Dec 2021 10:27",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429729,
            "date": "Fri 08 Oct 2021 16:35",
            "username": "StelSen",
            "content": "Option-A.  https://aws.amazon.com/sqs/faqs/#Limits_and_restrictions",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#367",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In DynamoDB, a secondary index is a data structure that contains a subset of attributes from a table, along with an alternate key to support ______ operations.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#367",
            "answers": [
              {
                "choice": "<p>A. None of the above<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Both<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Query<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Scan<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 367 discussion",
        "discusstion": [
          {
            "id": 585186,
            "date": "Wed 13 Apr 2022 14:25",
            "username": "jj22222",
            "content": "I think C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497531,
            "date": "Thu 09 Dec 2021 10:30",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 395727,
            "date": "Mon 04 Oct 2021 07:52",
            "username": "muell_xyzMBJamesStelSenRightAnswers",
            "content": "B<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html<br><br>You can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes.I think C is correct. You can do query and scan on a secondary indexes, but the key specifically supports queries. Scan are done when the key is not used (and that's why they are more expensive).Agree. C.  The purpose of index is to get faster result. Scan read the entire table. No use of index in this case.B<br>The scan is against the index not the whole table. As it clearly states in the link posted bymuell_xyz 2:<br>\\\"You can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes\\\"",
            "upvote_count": "1211",
            "selected_answers": ""
          },
          {
            "id": 402574,
            "date": "Sat 09 Oct 2021 08:33",
            "username": "MBJamesStelSenRightAnswers",
            "content": "I think C is correct. You can do query and scan on a secondary indexes, but the key specifically supports queries. Scan are done when the key is not used (and that's why they are more expensive).Agree. C.  The purpose of index is to get faster result. Scan read the entire table. No use of index in this case.B<br>The scan is against the index not the whole table. As it clearly states in the link posted bymuell_xyz 2:<br>\\\"You can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes\\\"",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 429730,
            "date": "Thu 28 Oct 2021 02:23",
            "username": "StelSenRightAnswers",
            "content": "Agree. C.  The purpose of index is to get faster result. Scan read the entire table. No use of index in this case.B<br>The scan is against the index not the whole table. As it clearly states in the link posted bymuell_xyz 2:<br>\\\"You can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 514250,
            "date": "Fri 31 Dec 2021 23:52",
            "username": "RightAnswers",
            "content": "B<br>The scan is against the index not the whole table. As it clearly states in the link posted bymuell_xyz 2:<br>\\\"You can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#368",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has created a new EBS volume from an existing snapshot. The user mounts the volume on the instance to which it is attached.<br>Which of the below mentioned options is a required step before the user can mount the volume?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#368",
            "answers": [
              {
                "choice": "<p>A. Run a cyclic check on the device for data consistency<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create the file system of the volume<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Resize the volume as per the original snapshot size<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. No step is required. The user can directly mount the device<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 368 discussion",
        "discusstion": [
          {
            "id": 429735,
            "date": "Mon 18 Oct 2021 06:23",
            "username": "StelSen",
            "content": "Option-D.  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html<br><br>Determine whether there is a file system on the volume. New volumes are raw block devices, and you must create a file system on them before you can mount and use them. Volumes that were created from snapshots likely have a file system on them already; if you create a new file system on top of an existing file system, the operation overwrites your data.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#369",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need your CI to build AMIs with code pre-installed on the images on every new code push. You need to do this as cheaply as possible.<br>How do you do this?<br></p>",
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
                "choice": "<p>A. Bid on spot instances just above the asking price as soon as new commits come in, perform all instance configuration and setup, then create an AMI based on the spot instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Have the CI launch a new on-demand EC2 instance when new commits come in, perform all instance configuration and setup, then create an AMI based on the on-demand instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Purchase a Light Utilization Reserved Instance to save money on the continuous integration machine. Use these credits whenever your create AMIs on instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. When the CI instance receives commits, attach a new EBS volume to the CI machine. Perform all setup on this EBS volume so you do not need a new EC2 instance to create the AMI.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 369 discussion",
        "discusstion": [
          {
            "id": 519820,
            "date": "Sun 09 Jan 2022 00:22",
            "username": "RightAnswers",
            "content": "A<br>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers since July 1, 2021. For customers that have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022.<br>You can now request Amazon EC2 Spot instances to run continuously, for up to six hours, at a flat rate that saves you up to 50% compared to On-Demand prices. This enables you to reduce costs when running finite duration tasks.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429736,
            "date": "Mon 04 Oct 2021 05:32",
            "username": "StelSen",
            "content": "Option-A.  I just use rejection technique and rejected, B, C, D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#370",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of DynamoDB, what are true of Global Secondary Key properties?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#370",
            "answers": [
              {
                "choice": "<p>A. The partition key and sort key can be different from the table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Only the partition key can be different from the table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Either the partition key or the sort key can be different from the table, but not both.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Only the sort key can be different from the table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 370 discussion",
        "discusstion": [
          {
            "id": 581220,
            "date": "Tue 05 Apr 2022 13:47",
            "username": "jj22222",
            "content": "This one was asked twice so far",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 497480,
            "date": "Thu 09 Dec 2021 09:58",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429754,
            "date": "Sat 09 Oct 2021 21:34",
            "username": "StelSen",
            "content": "Option-A: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#371",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to process long-running jobs once and only once. How might you do this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#371",
            "answers": [
              {
                "choice": "<p>A. Use an SNS queue and set the visibility timeout to long enough for jobs to process.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an SQS queue and set the reprocessing timeout to long enough for jobs to process.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an SQS queue and set the visibility timeout to long enough for jobs to process.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an SNS queue and set the reprocessing timeout to long enough for jobs to process.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 371 discussion",
        "discusstion": [
          {
            "id": 497521,
            "date": "Thu 09 Dec 2021 10:24",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429757,
            "date": "Sun 31 Oct 2021 06:49",
            "username": "StelSen",
            "content": "Option-C.  Visibility Timeout ensures the message is not accessible by other consumer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#372",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are getting a lot of empty receive requests when using Amazon SQS. This is making a lot of unnecessary network load on your instances. What can you do to reduce this load?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#372",
            "answers": [
              {
                "choice": "<p>A. Subscribe your queue to an SNS topic instead.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use as long of a poll as possible, instead of short polls.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Alter your visibility timeout to be shorter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use <code>sqsd</code> on your EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 372 discussion",
        "discusstion": [
          {
            "id": 516188,
            "date": "Tue 04 Jan 2022 02:55",
            "username": "Ray0411",
            "content": "B long poll",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381392,
            "date": "Sun 10 Oct 2021 12:48",
            "username": "D2StelSen",
            "content": "B correctagree with this",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 429759,
            "date": "Thu 21 Oct 2021 12:37",
            "username": "StelSen",
            "content": "agree with this",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#373",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to know when you spend $1000 or more on AWS. What's the easy way for you to see that notification?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#373",
            "answers": [
              {
                "choice": "<p>A. AWS CloudWatch Events tied to API calls, when certain thresholds are exceeded, publish to SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Scrape the billing page periodically and pump into Kinesis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CloudWatch Metrics + Billing Alarm + Lambda event subscription. When a threshold is exceeded, email the manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Scrape the billing page periodically and publish to SNS.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 373 discussion",
        "discusstion": [
          {
            "id": 361526,
            "date": "Thu 28 Oct 2021 23:13",
            "username": "MrCarter",
            "content": "This question is older than I am. No need to use lambda any more, just create a billing alarm straight from billing console",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 510448,
            "date": "Mon 27 Dec 2021 17:10",
            "username": "RightAnswers",
            "content": "Why would anyone use a lambda to create a billing alarm when CloudWatch can directly be used to send notification using SNS?<br>Ref: https://aws.amazon.com/blogs/mt/setting-up-an-amazon-cloudwatch-billing-alarm-to-proactively-monitor-estimated-charges/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497529,
            "date": "Thu 09 Dec 2021 10:29",
            "username": "I_heart_shuffle_girls",
            "content": "There are no good answers here.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#374",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to grant a vendor access to your AWS account. They need to be able to read protected messages in a private S3 bucket at their leisure. They also use<br>AWS.<br>What is the best way to accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#374",
            "answers": [
              {
                "choice": "<p>A. Create an IAM User with API Access Keys. Grant the User permissions to access the bucket. Give the vendor the AWS Access Key ID and AWS Secret Access Key for the User.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an EC2 Instance Profile on your account. Grant the associated IAM role full access to the bucket. Start an EC2 instance with this Profile and give SSH access to the instance to the vendor.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a cross-account IAM Role with permission to access the bucket, and grant permission to use the Role to the vendor AWS account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Generate a signed S3 PUT URL and a signed S3 PUT URL, both with wildcard values and 2 year durations. Pass the URLs to the vendor.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 374 discussion",
        "discusstion": [
          {
            "id": 585188,
            "date": "Wed 13 Apr 2022 14:28",
            "username": "jj22222",
            "content": "C looks right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 573051,
            "date": "Tue 22 Mar 2022 16:40",
            "username": "dzenadcu",
            "content": "C, authorize account is the keyword",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429761,
            "date": "Sat 30 Oct 2021 21:21",
            "username": "StelSen",
            "content": "Option-C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#375",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your serverless architecture using AWS API Gateway, AWS Lambda, and AWS DynamoDB experienced a large increase in traffic to a sustained 400 requests per second, and dramatically increased in failure rates. Your requests, during normal operation, last 500 milliseconds on average. Your DynamoDB table did not exceed 50% of provisioned throughput, and Table primary keys are designed correctly.<br>What is the most likely issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#375",
            "answers": [
              {
                "choice": "<p>A. Your API Gateway deployment is throttling your requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Your AWS API Gateway Deployment is bottlenecking on request (de)serialization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. You did not request a limit increase on concurrent Lambda function executions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. You used Consistent Read requests on DynamoDB and are experiencing semaphore lock.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 375 discussion",
        "discusstion": [
          {
            "id": 553233,
            "date": "Mon 21 Feb 2022 21:37",
            "username": "RightAnswers",
            "content": "Not sure how old this question is...<br>For Lambda: The default regional concurrency quota starts at 1,000 instances. For an initial burst of traffic, your functions' cumulative concurrency in a Region can reach an initial level of between 500 and 3000, which varies per Region.<br>API Gateway: 10,000 requests per second (RPS) with an additional burst capacity provided by the token bucket algorithm, using a maximum bucket capacity of 5,000 requests.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429778,
            "date": "Wed 22 Sep 2021 13:48",
            "username": "StelSen",
            "content": "May be Option-C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#376",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Why are more frequent snapshots or EBS Volumes faster?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#376",
            "answers": [
              {
                "choice": "<p>A. Blocks in EBS Volumes are allocated lazily, since while logically separated from other EBS Volumes, Volumes often share the same physical hardware. Snapshotting the first time forces full block range allocation, so the second snapshot doesn't need to perform the allocation phase and is faster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The snapshots are incremental so that only the blocks on the device that have changed after your last snapshot are saved in the new snapshot.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS provisions more disk throughput for burst capacity during snapshots if the drive has been pre-warmed by snapshotting and reading all blocks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The drive is pre-warmed, so block access is more rapid for volumes when every block on the device has already been read at least one time.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 376 discussion",
        "discusstion": [
          {
            "id": 497509,
            "date": "Thu 09 Dec 2021 10:21",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429779,
            "date": "Sat 09 Oct 2021 05:45",
            "username": "StelSen",
            "content": "Possible Option-B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#377",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>For AWS CloudFormation, which stack state refuses UpdateStack calls?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#377",
            "answers": [
              {
                "choice": "<p>A. <code>UPDATE_ROLLBACK_FAILED</code><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. <code>UPDATE_ROLLBACK_COMPLETE</code><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <code>UPDATE_COMPLETE</code><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. <code>CREATE_COMPLETE</code><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 377 discussion",
        "discusstion": [
          {
            "id": 514984,
            "date": "Sun 02 Jan 2022 14:09",
            "username": "mg458932",
            "content": "A. <br>If your stack is stuck in the UPDATE_ROLLBACK_FAILED state after a failed update, then the only actions that you can perform on the stack are the ContinueUpdateRollback or DeleteStack operations. This is because CloudFormation requires further input from you to acknowledge that the stack is out of sync with the template that the stack is attempting to roll back to. To retry the rollback and resolve the error, you can use ContinueUpdateRollback.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-update-rollback-failed/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497504,
            "date": "Thu 09 Dec 2021 10:19",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429776,
            "date": "Mon 11 Oct 2021 07:03",
            "username": "StelSen",
            "content": "Option-A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#378",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to migrate 10 million records in one hour into DynamoDB.  All records are 1.5KB in size. The data is evenly distributed across the partition key.<br>How many write capacity units should you provision during this batch load?<br></p>",
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
                "choice": "<p>A. 6667<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 4166<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 5556<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. 2778<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 378 discussion",
        "discusstion": [
          {
            "id": 336562,
            "date": "Fri 22 Oct 2021 18:25",
            "username": "BKhan",
            "content": "Ans is C<br>One write request unit represents one write for an item up to 1 KB in size. If you need to write an item that is larger than 1 KB, DynamoDB needs to consume additional write request units.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#379",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your CTO thinks your AWS account was hacked. What is the only way to know for certain if there was unauthorized access and what they did, assuming your hackers are very sophisticated AWS engineers and doing everything they can to cover their tracks?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#379",
            "answers": [
              {
                "choice": "<p>A. Use CloudTrail Log File Integrity Validation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Config SNS Subscriptions and process events in real time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use CloudTrail backed up to AWS S3 and Glacier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Config Timeline forensics.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 379 discussion",
        "discusstion": [
          {
            "id": 429783,
            "date": "Thu 28 Oct 2021 16:27",
            "username": "StelSen",
            "content": "Option-A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#380",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these is not a Pseudo Parameter in AWS CloudFormation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#380",
            "answers": [
              {
                "choice": "<p>A. AWS::StackName<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS::AccountId<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS::StackArn<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS::NotificationARNs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 380 discussion",
        "discusstion": [
          {
            "id": 620830,
            "date": "Thu 23 Jun 2022 09:37",
            "username": "ishitat",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html<br>this is the new link",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504997,
            "date": "Sun 19 Dec 2021 18:05",
            "username": "RightAnswers",
            "content": "C<br>Pseudo parameters are parameters that are predefined by AWS CloudFormation. You don't declare them in your template. Use them the same way as you would a parameter, as the argument for the Ref function. Link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html<br>AWS::AccountId<br>AWS::NotificationARNs<br>AWS::NoValue<br>AWS::Partition<br>AWS::Region<br>AWS::StackId<br>AWS::StackName<br>AWS::URLSuffix",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 497505,
            "date": "Thu 09 Dec 2021 10:19",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381394,
            "date": "Wed 20 Oct 2021 19:24",
            "username": "D2",
            "content": "C Correct<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#381",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the scope of an EBS volume?<br></p>",
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
                "choice": "<p>A. VPC<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Region<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Placement Group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Availability Zone<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 381 discussion",
        "discusstion": [
          {
            "id": 497493,
            "date": "Thu 09 Dec 2021 10:06",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381395,
            "date": "Thu 21 Oct 2021 06:51",
            "username": "D2",
            "content": "D Correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#382",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are experiencing performance issues writing to a DynamoDB table. Your system tracks high scores for video games on a marketplace. Your most popular game experiences all of the performance issues.<br>What is the most likely problem?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#382",
            "answers": [
              {
                "choice": "<p>A. DynamoDB's vector clock is out of sync, because of the rapid growth in request for the most popular game.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. You selected the Game ID or equivalent identifier as the primary partition key for the table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Users of the most popular video game each perform more read and write requests than average.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. You did not provision enough read or write throughput to the table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 382 discussion",
        "discusstion": [
          {
            "id": 600353,
            "date": "Thu 12 May 2022 01:09",
            "username": "ghostdog",
            "content": "B - IMO this is textbook \\\"hot partition\\\" problem: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595845,
            "date": "Mon 02 May 2022 05:27",
            "username": "cooldeity",
            "content": "D: only one makes sense",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#383",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You meet once per month with your operations team to review the past month's data. During the meeting, you realize that 3 weeks ago, your monitoring system which pings over HTTP from outside AWS recorded a large spike in latency on your 3-tier web service API. You use DynamoDB for the database layer, ELB, EBS, and EC2 for the business logic tier, and SQS, ELB, and EC2 for the presentation layer.<br>Which of the following techniques will NOT help you figure out what happened?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#383",
            "answers": [
              {
                "choice": "<p>A. Check your CloudTrail log history around the spike's time for any API calls that caused slowness.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Review CloudWatch Metrics graphs to determine which component(s) slowed the system down.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Review your ELB access logs in S3 to see if any ELBs in your system saw the latency.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Analyze your logs to detect bursts in traffic at that time.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 383 discussion",
        "discusstion": [
          {
            "id": 553844,
            "date": "Tue 22 Feb 2022 18:05",
            "username": "bobsmith2000",
            "content": "A. <br>CloudTrail monitors any AWS API calls, not calls to your custom API.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 405396,
            "date": "Fri 24 Sep 2021 17:17",
            "username": "NNHAN",
            "content": "CloudWatch announces the extension of metric retention from 14 days to 15 months, free of charge. CloudWatch has already stored at least 3 months of all existing metrics, which customers can begin using immediately to analyze seasonality, monthly trends and in the future, year-over-year comparisons and forecasts.<br><br>CloudWatch Metrics now supports the following three retention schedules:<br><br>1 minute datapoints are available for 15 days<br>5 minute datapoints are available for 63 days<br>1 hour datapoints are available for 455 days",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#384",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these is not an intrinsic function in AWS CloudFormation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#384",
            "answers": [
              {
                "choice": "<p>A. Fn::Split<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Fn::FindInMap<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Fn::Select<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Fn::GetAZs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 384 discussion",
        "discusstion": [
          {
            "id": 401628,
            "date": "Wed 06 Oct 2021 05:48",
            "username": "steelsalmonMBJames",
            "content": "It says here that Fn::Split is an intrinsic function? https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-split.htmlthese all exist now - likely this is an old question",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 402595,
            "date": "Sat 06 Nov 2021 17:17",
            "username": "MBJames",
            "content": "these all exist now - likely this is an old question",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#385",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>For AWS CloudFormation, which is true?<br></p>",
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
                "choice": "<p>A. Custom resources using SNS have a default timeout of 3 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Custom resources using SNS do not need a <code>ServiceToken</code> property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Custom resources using Lambda and <code>Code.ZipFile</code> allow inline nodejs resource composition.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Custom resources using Lambda do not need a <code>ServiceToken</code>property<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 385 discussion",
        "discusstion": [
          {
            "id": 579951,
            "date": "Sat 02 Apr 2022 19:00",
            "username": "jj22222",
            "content": "C.  Custom resources using Lambda and <code>Code.ZipFile</code> allow inline nodejs resource composition.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497427,
            "date": "Thu 09 Dec 2021 09:06",
            "username": "I_heart_shuffle_girls",
            "content": "WillCloud is correct answer is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 478951,
            "date": "Mon 15 Nov 2021 20:29",
            "username": "WillCloud",
            "content": "C<br>https://aws.amazon.com/cn/blogs/infrastructure-and-automation/deploying-aws-lambda-functions-using-aws-cloudformation-the-portable-way/<br>Inline function code<br>Simple functions that are written in Node.js or Python can be declared inline in an AWS CloudFormation template, so no zips are necessary. AWS CloudFormation supports a maximum of 4096 characters, so this is viable only for small functions.<br><br>Resources:<br>MyFunction:<br>Type: AWS::Lambda::Function<br>Properties:<br>Code:<br>ZipFile: |<br>import json<br>def handler(event, context):<br>print(\\\"Event: %s\\\" % json.dumps(event))",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#386",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your API requires the ability to stay online during AWS regional failures. Your API does not store any state, it only aggregates data from other sources - you do not have a database. What is a simple but effective way to achieve this uptime goal?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#386",
            "answers": [
              {
                "choice": "<p>A. Use a CloudFront distribution to serve up your API. Even if the region your API is in goes down, the edge locations CloudFront uses will be fine.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an ELB and a cross-zone ELB deployment to create redundancy across datacenters. Even if a region fails, the other AZ will stay online.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Route53 Weighted Round Robin record, and if one region goes down, have that region redirect to the other region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Route53 Latency Based Routing Record with Failover and point it to two identical deployments of your stateless API in two different regions. Make sure both regions use Auto Scaling Groups behind ELBs.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 386 discussion",
        "discusstion": [
          {
            "id": 612397,
            "date": "Mon 06 Jun 2022 16:28",
            "username": "phuchoang",
            "content": "I vote for D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 561492,
            "date": "Sat 05 Mar 2022 16:04",
            "username": "kanavpeerkanavpeer",
            "content": "i vote for ACorrection: D",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 561493,
            "date": "Sat 05 Mar 2022 16:05",
            "username": "kanavpeer",
            "content": "Correction: D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#387",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are designing an enterprise data storage system. Your data management software system requires mountable disks and a real filesystem, so you cannot use<br>S3 for storage. You need persistence, so you will be using AWS EBS Volumes for your system. The system needs as lowcost storage as possible, and access is not frequent or high throughput, and is mostly sequential reads.<br>Which is the most appropriate EBS Volume Type for this scenario?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#387",
            "answers": [
              {
                "choice": "<p>A. gp1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. io1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. standard<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. gp2<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 387 discussion",
        "discusstion": [
          {
            "id": 530220,
            "date": "Sun 23 Jan 2022 03:44",
            "username": "Ram_Parambobsmith2000bobsmith2000",
            "content": "Old question/answers.<br>You would now use a SC1 (Cold HDD) type.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#hard-disk-drivesIt's one of go, because the question is about the volume size<br>\\\"The system requires as little storage as feasible\\\"<br>It's 125 GG min for sc1go it's a to, I mean gp* which can be as little as 1GB",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 543718,
            "date": "Wed 09 Feb 2022 12:22",
            "username": "bobsmith2000bobsmith2000",
            "content": "It's one of go, because the question is about the volume size<br>\\\"The system requires as little storage as feasible\\\"<br>It's 125 GG min for sc1go it's a to, I mean gp* which can be as little as 1GB",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 543719,
            "date": "Wed 09 Feb 2022 12:24",
            "username": "bobsmith2000",
            "content": "go it's a to, I mean gp* which can be as little as 1GB",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#388",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to deploy an AWS stack in a repeatable manner across multiple environments. You have selected CloudFormation as the right tool to accomplish this, but have found that there is a resource type you need to create and model, but is unsupported by CloudFormation. How should you overcome this challenge?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#388",
            "answers": [
              {
                "choice": "<p>A. Use a CloudFormation Custom Resource Template by selecting an API call to proxy for create, update, and delete actions. CloudFormation will use the AWS SDK, CLI, or API method of your choosing as the state transition function for the resource type you are modeling.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Submit a ticket to the AWS Forums. AWS extends CloudFormation Resource Types by releasing tooling to the AWS Labs organization on GitHub. Their response time is usually 1 day, and they complete requests within a week or two.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Instead of depending on CloudFormation, use Chef, Puppet, or Ansible to author Heat templates, which are declarative stack resource definitions that operate over the OpenStack hypervisor and cloud environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a CloudFormation Custom Resource Type by implementing create, update, and delete functionality, either by subscribing a Custom Resource Provider to an SNS topic, or by implementing the logic in AWS Lambda.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 388 discussion",
        "discusstion": [
          {
            "id": 336820,
            "date": "Mon 01 Nov 2021 18:34",
            "username": "BKhan",
            "content": "Ans is D<br>Custom resources enable you to write custom provisioning logic in templates that AWS CloudFormation runs anytime you create, update (if you changed the custom resource), or delete stacks. For example, you might want to include resources that aren't available as AWS CloudFormation resource types. You can include those resources by using custom resources. That way you can still manage all your related resources in a single stack.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#389",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run a 2000-engineer organization. You are about to begin using AWS at a large scale for the first time. You want to integrate with your existing identity management system running on Microsoft Active Directory, because your organization is a power-user of Active Directory. How should you manage your AWS identities in the most simple manner?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#389",
            "answers": [
              {
                "choice": "<p>A. Use a large AWS Directory Service Simple AD. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a large AWS Directory Service AD Connector.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Sync Domain running on AWS Directory Service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Directory Sync Domain running on AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 389 discussion",
        "discusstion": [
          {
            "id": 602541,
            "date": "Mon 16 May 2022 12:51",
            "username": "alicewsm",
            "content": "Vote for B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 509864,
            "date": "Sun 26 Dec 2021 23:13",
            "username": "RightAnswers",
            "content": "AD Connector comes in 2 sizes; small and large. However, there is no limit of 500 and 5000 users for AD Connector. This limit of 500 and 5000 is applicable for AWS Simple AD and AWS Directory Service for Microsoft Active Directory.<br>Here is an extract from the link: https://forums.aws.amazon.com/thread.jspa?threadID282600 -<br>\\\"We use the AD Connector internally against a domain with over half a million users. The limit on the connector is not user count but the concurrent volume of requests. As long as your whole organization is not logging on all at once you should be fine\\\".<br>B is a plausible answer, but a SMALL AD connector might work - there is no mention about volume of traffic to get a correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#390",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of AWS OpsWorks, which of the following is not an instance type you can allocate in a stack layer?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#390",
            "answers": [
              {
                "choice": "<p>A. 24/7 instances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Spot instances<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Time-based instances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Load-based instances<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 390 discussion",
        "discusstion": [
          {
            "id": 511004,
            "date": "Tue 28 Dec 2021 11:41",
            "username": "kowalkowal",
            "content": "B - https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-opsworks.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497490,
            "date": "Thu 09 Dec 2021 10:05",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#391",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these is not a CloudFormation Helper Script?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#391",
            "answers": [
              {
                "choice": "<p>A. cfn-signal<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. cfn-hup<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. cfn-request<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. cfn-get-metadata<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 391 discussion",
        "discusstion": [
          {
            "id": 482429,
            "date": "Sat 20 Nov 2021 11:59",
            "username": "DerekKey",
            "content": "C: The answer is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#392",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team wants to begin practicing continuous delivery using CloudFormation, to enable automated builds and deploys of whole, versioned stacks or stack layers. You have a 3-tier, mission-critical system. Which of the following is NOT a best practice for using CloudFormation in a continuous delivery environment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#392",
            "answers": [
              {
                "choice": "<p>A. Use the AWS CloudFormation <code>ValidateTemplate</code> call before publishing changes to AWS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Model your stack in one template, so you can leverage CloudFormation's state management and dependency resolution to propagate all changes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use CloudFormation to create brand new infrastructure for all stateless resources on each push, and run integration tests on that set of infrastructure.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Parametrize the template and use <code>Mappings</code> to ensure your template works in multiple Regions.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 392 discussion",
        "discusstion": [
          {
            "id": 527713,
            "date": "Wed 19 Jan 2022 17:21",
            "username": "kanavpeer",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#393",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to replicate API calls across two systems in real time. What tool should you use as a buffer and transport mechanism for API call events?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#393",
            "answers": [
              {
                "choice": "<p>A. AWS SQS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Kinesis<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS SNS<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 393 discussion",
        "discusstion": [
          {
            "id": 497549,
            "date": "Thu 09 Dec 2021 10:42",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 336849,
            "date": "Thu 23 Sep 2021 21:46",
            "username": "BKhan",
            "content": "Ans is C<br><br>SQS will not help to achieve the Real-time requirement, but Kinesis does.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#395",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the scope of AWS IAM?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#395",
            "answers": [
              {
                "choice": "<p>A. Global<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Availability Zone<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Region<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Placement Group<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 395 discussion",
        "discusstion": [
          {
            "id": 647220,
            "date": "Mon 15 Aug 2022 15:45",
            "username": "StefanoMonti",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 497519,
            "date": "Thu 09 Dec 2021 10:24",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#396",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are building a mobile app for consumers to post cat pictures online. You will be storing the images in AWS S3. You want to run the system very cheaply and simply.<br>Which one of these options allows you to build a photo sharing application without needing to worry about scaling expensive uploads processes, authentication/ authorization and so forth?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#396",
            "answers": [
              {
                "choice": "<p>A. Build the application out using AWS Cognito and web identity federation to allow users to log in using Facebook or Google Accounts. Once they are logged in, the secret token passed to that user is used to directly access resources on AWS, like AWS S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use JWT or SAML compliant systems to build authorization policies. Users log in with a username and password, and are given a token they can use indefinitely to make calls against the photo infrastructure.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS API Gateway with a constantly rotating API Key to allow access from the client-side. Construct a custom build of the SDK and include S3 access in it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS oAuth Service Domain ad grant public signup and access to the domain. During setup, add at least one major social media site as a trusted Identity Provider for users.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 396 discussion",
        "discusstion": [
          {
            "id": 544064,
            "date": "Wed 09 Feb 2022 21:03",
            "username": "blueorca",
            "content": "A out of all 4, but I think presigned URL would be a better choice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521836,
            "date": "Wed 12 Jan 2022 01:08",
            "username": "Ray0411",
            "content": "A Cognito",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#398",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the order of most-to-least rapidly-scaling (fastest to scale first)?<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03760/0023600001.png\" class=\"in-exam-image\"><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#398",
            "answers": [
              {
                "choice": "<p>A. B, A, C<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. C, B, A<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. C, A, B<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A, C, B<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 398 discussion",
        "discusstion": [
          {
            "id": 497625,
            "date": "Thu 09 Dec 2021 11:47",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#399",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which is not a restriction on AWS EBS Snapshots?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#399",
            "answers": [
              {
                "choice": "<p>A. Snapshots which are shared cannot be used as a basis for other snapshots.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. You cannot share a snapshot containing an AWS Access Key ID or AWS Secret Access Key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. You cannot share unencrypted snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Snapshot restorations are restricted to the region in which the snapshots are created.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 399 discussion",
        "discusstion": [
          {
            "id": 545720,
            "date": "Sat 12 Feb 2022 09:51",
            "username": "blueorca",
            "content": "A and C are both wrong<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html<br>You can share only unencrypted snapshots publicly. So we CAN share unencrypted snapshots.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497598,
            "date": "Thu 09 Dec 2021 11:21",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#400",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to deploy a new application version to production. Because the deployment is high-risk, you need to roll the new version out to users over a number of hours, to make sure everything is working correctly. You need to be able to control the proportion of users seeing the new version of the application down to the percentage point. You use ELB and EC2 with Auto Scaling Groups and custom AMIs with your code pre-installed assigned to Launch Configurations. There are no database-level changes during your deployment. You have been told you cannot spend too much money, so you must not increase the number of EC2 instances much at all during the deployment, but you also need to be able to switch back to the original version of code quickly if something goes wrong.<br>What is the best way to meet these requirements?<br></p>",
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
                "choice": "<p>A. Create a second ELB, Auto Scaling Launch Configuration, and Auto Scaling Group using the Launch Configuration. Create AMIs with all code pre-installed. Assign the new AMI to the second Auto Scaling Launch Configuration. Use Route53 Weighted Round Robin Records to adjust the proportion of traffic hitting the two ELBs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Blue-Green deployment method to enable the fastest possible rollback if needed. Create a full second stack of instances and cut the DNS over to the new stack of instances, and change the DNS back if a rollback is needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create AMIs with all code pre-installed. Assign the new AMI to the Auto Scaling Launch Configuration, to replace the old one. Gradually terminate instances running the old code (launched with the old Launch Configuration) and allow the new AMIs to boot to adjust the traffic balance to the new code. On rollback, reverse the process by doing the same thing, but changing the AMI on the Launch Config back to the original code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate to use AWS Elastic Beanstalk. Use the established and well-tested Rolling Deployment setting AWS provides on the new Application Environment, publishing a zip bundle of the new code and adjusting the wait period to spread the deployment over time. Re-deploy the old code bundle to rollback if needed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 400 discussion",
        "discusstion": [
          {
            "id": 390456,
            "date": "Sun 17 Oct 2021 19:56",
            "username": "D2RightAnswersRightAnswersGreatFunana",
            "content": "Answer CA is not the answer. The key item in the question is \\\"You must be able to precisely regulate the percentage of people who view the updated version of the program\\\".<br>If we use weighted round robin, then it depends on the weight as well as amount of traffic. So, let's say one server has weight of 1 and the other 9. Then if there are 10 requests, 1% will go to the lower weight. If there are 15 reqs then 15% of traffic will go to lower weight.Sorry, with 10 requests, 10% and with 15 requests (15/10 * 1) 15% traffic.<br>So percentage is not always same. With 20 requests 20/10 * 120% traffic.Gradually terminating instances to replace them with new code is a bad way to do deployment in a modern automated system.<br><br>Answer is A. ",
            "upvote_count": "7116",
            "selected_answers": ""
          },
          {
            "id": 517864,
            "date": "Thu 06 Jan 2022 00:34",
            "username": "RightAnswersRightAnswers",
            "content": "A is not the answer. The key item in the question is \\\"You must be able to precisely regulate the percentage of people who view the updated version of the program\\\".<br>If we use weighted round robin, then it depends on the weight as well as amount of traffic. So, let's say one server has weight of 1 and the other 9. Then if there are 10 requests, 1% will go to the lower weight. If there are 15 reqs then 15% of traffic will go to lower weight.Sorry, with 10 requests, 10% and with 15 requests (15/10 * 1) 15% traffic.<br>So percentage is not always same. With 20 requests 20/10 * 120% traffic.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 517868,
            "date": "Thu 06 Jan 2022 00:36",
            "username": "RightAnswers",
            "content": "Sorry, with 10 requests, 10% and with 15 requests (15/10 * 1) 15% traffic.<br>So percentage is not always same. With 20 requests 20/10 * 120% traffic.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 503406,
            "date": "Fri 17 Dec 2021 07:50",
            "username": "GreatFunana",
            "content": "Gradually terminating instances to replace them with new code is a bad way to do deployment in a modern automated system.<br><br>Answer is A. ",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 687067,
            "date": "Wed 05 Oct 2022 19:11",
            "username": "deng113jie",
            "content": "Route53 works but is not mentioned in the existing setup, so will increase cost; also A didn't mention terminate ec2 instance at the same time.<br>Hence I'll choose C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 631026,
            "date": "Wed 13 Jul 2022 21:17",
            "username": "toma",
            "content": "answer should be C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 627631,
            "date": "Wed 06 Jul 2022 01:06",
            "username": "angelsrp",
            "content": "Launch configurations cannot be updated, thats for launch templates, answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 568809,
            "date": "Wed 16 Mar 2022 07:31",
            "username": "razerlg",
            "content": "Answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      }
    ]
  }