var DVA_C01_Part5 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#401",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a website that will be hosted from an Amazon S3 bucket. The website must support secure browser connections.<br>Which combination of actions must the developer take to meet this requirement? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#401",
            "answers": [
              {
                "choice": "<p>A. Create an Elastic Load Balancer (ELB). Configure the ELB to direct traffic to the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon CloudFront distribution. Set the S3 bucket as an origin.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the Elastic Load Balancer with an SSL/TLS certificate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the Amazon CloudFront distribution with an SSL/TLS certificate.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure the S3 bucket with an SSL/TLS certificate.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 401 discussion",
        "discusstion": [
          {
            "id": 616048,
            "date": "Tue 14 Jun 2022 07:28",
            "username": "Trex2472",
            "content": "of course its BD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 605765,
            "date": "Mon 23 May 2022 03:28",
            "username": "anna_montana",
            "content": "BD are the answers",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541868,
            "date": "Sun 06 Feb 2022 17:49",
            "username": "JP_PA",
            "content": "ANS: B&D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 535968,
            "date": "Sun 30 Jan 2022 07:13",
            "username": "BeDiepyHari008Vlasto",
            "content": "A and C because it said website not static website.Dude S3 supports only static websitesIt is S3, of course it is a static website. B and D are correct.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 652930,
            "date": "Sun 28 Aug 2022 14:30",
            "username": "Hari008",
            "content": "Dude S3 supports only static websites",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540411,
            "date": "Fri 04 Feb 2022 13:35",
            "username": "Vlasto",
            "content": "It is S3, of course it is a static website. B and D are correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515665,
            "date": "Mon 03 Jan 2022 13:02",
            "username": "denccc",
            "content": "B and D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 514866,
            "date": "Sun 02 Jan 2022 08:01",
            "username": "yfwang",
            "content": "B&D is the answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 514092,
            "date": "Fri 31 Dec 2021 14:35",
            "username": "ayush_1995",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/getting-started-secure-static-website-cloudformation-template.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 513254,
            "date": "Thu 30 Dec 2021 11:42",
            "username": "Gaurav_GGG",
            "content": "B.  Create an Amazon CloudFront distribution. Set the S3 bucket as an origin.D.  Configure the Amazon CloudFront distribution with an SSL/TLS certificate.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#402",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that runs on AWS Lambda@Edge. The application serves content that varies based on the device that the viewer is using.<br>Information about the number of hits by device type is written to logs that are stored in a log group in Amazon CloudWatch Logs. The company needs to publish an Amazon CloudWatch custom metric for each device type.<br>Which approach will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#402",
            "answers": [
              {
                "choice": "<p>A. Create a CloudWatch Logs Insights query to extract the device type information from the logs and to create a custom metric with device type as a dimension.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CloudWatch metric filter to extract metrics from the log files with device type as a dimension.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the application to write its logs in the CloudWatch embedded metric format with device type as a dimension.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the CloudWatch Logs agent for Lambda integration. Update the application to use the StatsD protocol to emit the metrics.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 402 discussion",
        "discusstion": [
          {
            "id": 515577,
            "date": "Mon 03 Jan 2022 10:52",
            "username": "dencccCHRIS12722222mevltmevlt",
            "content": "First I thought B as well but after doing some research I'll switch to C. : https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.htmlAns: C.  I searched and do not think you can specify a dimension when creating metric filters for logs<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CreateMetricFilterProcedure.htmlLambda is auto connected to CW so you don't have to send logs. You just have to create metrics based on the logs.<br>https://www.youtube.com/watch?vf8cPeFFCWowNevermind I think you are right. It is only possible to create dimentions with programming lang.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html",
            "upvote_count": "6332",
            "selected_answers": ""
          },
          {
            "id": 516931,
            "date": "Tue 04 Jan 2022 20:16",
            "username": "CHRIS12722222mevltmevlt",
            "content": "Ans: C.  I searched and do not think you can specify a dimension when creating metric filters for logs<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CreateMetricFilterProcedure.htmlLambda is auto connected to CW so you don't have to send logs. You just have to create metrics based on the logs.<br>https://www.youtube.com/watch?vf8cPeFFCWowNevermind I think you are right. It is only possible to create dimentions with programming lang.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html",
            "upvote_count": "332",
            "selected_answers": ""
          },
          {
            "id": 519300,
            "date": "Sat 08 Jan 2022 04:30",
            "username": "mevltmevlt",
            "content": "Lambda is auto connected to CW so you don't have to send logs. You just have to create metrics based on the logs.<br>https://www.youtube.com/watch?vf8cPeFFCWowNevermind I think you are right. It is only possible to create dimentions with programming lang.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 519302,
            "date": "Sat 08 Jan 2022 04:39",
            "username": "mevlt",
            "content": "Nevermind I think you are right. It is only possible to create dimentions with programming lang.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 600206,
            "date": "Wed 11 May 2022 18:08",
            "username": "MikeyJ",
            "content": "dimension<br>A name=E2=80=93value pair (for example, InstanceTypem1.small, or EngineNamemysql), that contains additional information to identify a metric.<br>https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#D<br><br>In this case, device type.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 586629,
            "date": "Sat 16 Apr 2022 07:53",
            "username": "SpeedRunner",
            "content": "B is answer.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudwatch-metrics-logging.html:<br>\\\"When you create a trigger for a CloudFront event, Lambda begins to send metrics to CloudWatch automatically.\\\" and \\\"Lambda automatically sends function logs to CloudWatch Logs. You can access the log files using the CloudWatch console or the CloudWatch Logs API.\\\" So you don't need to write log. C is not answer.<br>https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-cloudwatch-logs-announces-dimension-support-for-metric-filters/:<br>\\\"CloudWatch Logs Metric Filters allow you to create filter patterns to search for and match terms, phrases, or values in your CloudWatch Logs log events, and turn these into metrics that you can graph in CloudWatch Metrics or use to create a CloudWatch Alarm.\\\"<br>So answer is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 573989,
            "date": "Thu 24 Mar 2022 02:30",
            "username": "w2000weledu1985w2000w",
            "content": "D is correct.<br>\\\"For each device type, the organization must provide an Amazon CloudWatch custom metric.\\\"<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-custom-metrics-statsd.htmlBut that's not for Lambda...You are right, it is Lambda, it won't work.<br>On a second look, I am changing my answer to A. <br>A.  Create a CloudWatch Logs Insights query to extract the device type information from the logs and to create a custom metric with device type as a dimension.<br><br>\\\"The company needs to publish an Amazon CloudWatch custom metric for each device type.\\\"<br><br>We need to create a metric with two dimensions like this:<br><br>number_of_hits_by_device_metric<br>deviceId: my_device_Id<br>count: my_count",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 579740,
            "date": "Sat 02 Apr 2022 08:30",
            "username": "eledu1985w2000w",
            "content": "But that's not for Lambda...You are right, it is Lambda, it won't work.<br>On a second look, I am changing my answer to A. <br>A.  Create a CloudWatch Logs Insights query to extract the device type information from the logs and to create a custom metric with device type as a dimension.<br><br>\\\"The company needs to publish an Amazon CloudWatch custom metric for each device type.\\\"<br><br>We need to create a metric with two dimensions like this:<br><br>number_of_hits_by_device_metric<br>deviceId: my_device_Id<br>count: my_count",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 591688,
            "date": "Mon 25 Apr 2022 14:24",
            "username": "w2000w",
            "content": "You are right, it is Lambda, it won't work.<br>On a second look, I am changing my answer to A. <br>A.  Create a CloudWatch Logs Insights query to extract the device type information from the logs and to create a custom metric with device type as a dimension.<br><br>\\\"The company needs to publish an Amazon CloudWatch custom metric for each device type.\\\"<br><br>We need to create a metric with two dimensions like this:<br><br>number_of_hits_by_device_metric<br>deviceId: my_device_Id<br>count: my_count",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 571701,
            "date": "Sun 20 Mar 2022 16:27",
            "username": "Awsexam100",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 551588,
            "date": "Sun 20 Feb 2022 07:18",
            "username": "Shelly1987",
            "content": "I think B : https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-cloudwatch-logs-announces-dimension-support-for-metric-filters/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 534931,
            "date": "Fri 28 Jan 2022 21:07",
            "username": "forgreatspam",
            "content": "See here: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html<br><br>> When you publish a metric generated from values found in either JSON log events or space-delimited log events, you can also publish dimensions with the metric.<br><br>Specifically look at \\\"Publishing dimensions with metrics from JSON log events\\\" section.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 513539,
            "date": "Thu 30 Dec 2021 18:01",
            "username": "claudiadlr",
            "content": "I'll go with \\\"B\\\" - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudwatch-metrics-logging.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 513203,
            "date": "Thu 30 Dec 2021 10:53",
            "username": "Gaurav_GGG",
            "content": "C - The CloudWatch embedded metric format is a JSON specification used to instruct CloudWatch Logs to automatically extract metric values embedded in structured log events.",
            "upvote_count": "3",
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
        "question_text": "<p>A company manages a website that runs on Amazon EC2 instances behind an Elastic Load Balancer. The EC2 Instances are CPU-constrained. The company's engineering team needs to secure the inbound internet traffic.<br>Which combination of steps will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#403",
            "answers": [
              {
                "choice": "<p>A. Configure the Elastic Load Balancer with SSL passthrough.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure SSL certificates on the Elastic Load Balancer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the Elastic Load Balancer with a Loadable Storage System.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install SSL certificates on the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure the Elastic Load Balancer with SSL termination.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 403 discussion",
        "discusstion": [
          {
            "id": 513943,
            "date": "Fri 31 Dec 2021 09:16",
            "username": "denccc",
            "content": "B and E",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 520726,
            "date": "Mon 10 Jan 2022 08:57",
            "username": "successzy",
            "content": "The technical staff at the organization is responsible for securing incoming internet traffic.<br>Ans: B, E",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 569136,
            "date": "Wed 16 Mar 2022 15:59",
            "username": "DBrasseur",
            "content": "Given the fat they want control, could be A&D or B&E.  However, the deciding factor is that \\\"CPU is limited\\\". Meaning that the decryption process (due to SSL) should not be performed on the instance. Thus B&E. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 517837,
            "date": "Wed 05 Jan 2022 23:19",
            "username": "ej123netk",
            "content": "Seems like they really want control over SSL.... to me it sounds like A and DWhy control? Anyway they can also control it with ELB. <br>I'd go for B & E. ",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 546136,
            "date": "Sat 12 Feb 2022 23:50",
            "username": "netk",
            "content": "Why control? Anyway they can also control it with ELB. <br>I'd go for B & E. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#404",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an AWS Serverless Application Model (AWS SAM) template. The AWS SAM template contains the definition of multiple AWS Lambda functions, an Amazon S3 bucket, and an Amazon CloudFront distribution. One of the Lambda functions runs on Lambda@Edge in the CloudFront distribution. The<br>S3 bucket is configured as an origin for the CloudFront distribution.<br>When the developer deploys the AWS SAM template in the eu-west-1 Region, the creation of the stack fails.<br>What could have caused this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#404",
            "answers": [
              {
                "choice": "<p>A. CloudFront distributions can be created only in the us-east-1 Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Lambda@Edge functions can be created only in the us-east-1 Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. A single AWS SAM template cannot contain multiple Lambda functions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The CloudFront distribution and the S3 bucket cannot be created in the same Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 404 discussion",
        "discusstion": [
          {
            "id": 639099,
            "date": "Fri 29 Jul 2022 11:05",
            "username": "funAtAws",
            "content": "It is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 610359,
            "date": "Thu 02 Jun 2022 00:58",
            "username": "jaimitom94",
            "content": "Its B https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html#lambda-at-edge-restrictions-region",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515712,
            "date": "Mon 03 Jan 2022 13:49",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514269,
            "date": "Sat 01 Jan 2022 00:39",
            "username": "Drgn",
            "content": "B<br><br>The Lambda function must be in the US East (N. Virginia) Region.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 513789,
            "date": "Fri 31 Dec 2021 01:27",
            "username": "claudiadlr",
            "content": "I'll go with \\\"B\\\" - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513279,
            "date": "Thu 30 Dec 2021 12:09",
            "username": "Gaurav_GGG",
            "content": "B.  Lambda@Edge functions can be created only in the us-east-1 Region.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#405",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is serving private media content on Amazon S3 by using an Amazon CloudFront distribution. A developer needs to secure the media content with the signed URL.<br>What should the developer do to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#405",
            "answers": [
              {
                "choice": "<p>A. Use an access Key and a secret access key to generate an S3 presigned URL. Replace the S3 hostname with a CloudFront distribution name in the URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an SSH-2 RSA key pair. Upload the public key to CloudFront, and assign the public key to a trusted signer. Use a public key and key ID to sign the CloudFront URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an SSH-2 DSA key pair. Upload the public key to CloudFront, and assign the public key to a trusted signer. Use a private key and key ID to sign the CloudFront URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an SSH-2 RSA key pair. Upload the public key to CloudFront, and assign the public key to a trusted signer. Use a private key and key ID to sign the CloudFront URL.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 405 discussion",
        "discusstion": [
          {
            "id": 512131,
            "date": "Wed 29 Dec 2021 13:18",
            "username": "reve666",
            "content": "=E2=80=A2 You generate your own public / private key<br>=E2=80=A2 The private key is used by your applications (e.g. EC2) to sign URLs<br>=E2=80=A2 The public key (uploaded) is used by CloudFront to verify URLs",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 607073,
            "date": "Wed 25 May 2022 08:30",
            "username": "shirokame",
            "content": "D because:<br>Each signer that you use to create CloudFront signed URLs or signed cookies must have a public=E2=80=93private key pair.<br>The signer uses its private key to sign the URL or cookies, and CloudFront uses the public key to verify the signature.<br>Creating key pairs for your signers: It must be an SSH-2 RSA key pair<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 577034,
            "date": "Mon 28 Mar 2022 20:29",
            "username": "eledu1985",
            "content": "to use public key you shoud encrypt with private, that's how pub/priv keys works, also in SSH",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 542704,
            "date": "Mon 07 Feb 2022 23:08",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 523950,
            "date": "Sat 15 Jan 2022 07:07",
            "username": "hikura",
            "content": "D because Private key is required to Sign the URL not Public key.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 523647,
            "date": "Fri 14 Jan 2022 18:42",
            "username": "SonamDhingrahikura",
            "content": "B is correct, the private key never leaves your systembut in B you are never using the private key.<br>In D also the private key is not leaving the system, it is just used for signing.",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 523951,
            "date": "Sat 15 Jan 2022 07:09",
            "username": "hikura",
            "content": "but in B you are never using the private key.<br>In D also the private key is not leaving the system, it is just used for signing.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 522618,
            "date": "Thu 13 Jan 2022 05:00",
            "username": "vsmaske",
            "content": "D<br><br>When you create signed URLs or signed cookies, you use the private key from the signer=E2=80=99s key pair to sign a portion of the URL or the cookie.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521899,
            "date": "Wed 12 Jan 2022 04:51",
            "username": "taejin909",
            "content": "AAAAAAAA",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515021,
            "date": "Sun 02 Jan 2022 15:36",
            "username": "denccc",
            "content": "It's D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514707,
            "date": "Sat 01 Jan 2022 22:52",
            "username": "CHRIS12722222CHRIS12722222",
            "content": "B.  https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.htmlSorry it is D (use private key to sign the url, use public key to verify the url)<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 536775,
            "date": "Mon 31 Jan 2022 10:10",
            "username": "CHRIS12722222",
            "content": "Sorry it is D (use private key to sign the url, use public key to verify the url)<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#406",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing code for an AWS Lambda function. The function will be used as a Lambda authorizer so that Amazon API Gateway can control access to a specific API.<br>What should this code return in addition to the principal identifier upon successful authentication?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#406",
            "answers": [
              {
                "choice": "<p>A. An HTTP response status code of 200 that indicates successful completion<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. An integer 0 that indicates successful completion<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The Amazon Resource Name (ARN) of an IAM role that will be assumed for authentication<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A policy document with desired permissions<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 406 discussion",
        "discusstion": [
          {
            "id": 685835,
            "date": "Tue 04 Oct 2022 02:07",
            "username": "blackwhitesblackwhites",
            "content": "Should B<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.htmlSorry=EF=BC=8CIt should answer D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 685837,
            "date": "Tue 04 Oct 2022 02:07",
            "username": "blackwhites",
            "content": "Sorry=EF=BC=8CIt should answer D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 598307,
            "date": "Sat 07 May 2022 22:32",
            "username": "mike_0",
            "content": "The Lambda function grants access by returning an output object containing at least an IAM policy and a principal identifier.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 537369,
            "date": "Mon 31 Jan 2022 20:35",
            "username": "Orffeus",
            "content": "D: \\\"takes the caller's identity as input and returns an IAM policy as output\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521963,
            "date": "Wed 12 Jan 2022 08:45",
            "username": "vsmaskevsmaske",
            "content": "C<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.htmlIts D.  C was type",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 521964,
            "date": "Wed 12 Jan 2022 08:46",
            "username": "vsmaske",
            "content": "Its D.  C was type",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 518657,
            "date": "Thu 06 Jan 2022 23:34",
            "username": "ccamile",
            "content": "D<br>When a client makes a request to one of your API's methods, API Gateway calls your Lambda authorizer, which takes the caller's identity as input and returns an IAM policy as output.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514346,
            "date": "Sat 01 Jan 2022 05:05",
            "username": "msengupta",
            "content": "If your custom authorizer is fronting a single API Gateway resource or you are not caching your authorizer responses, the resource you specify is straight-forward. AWS provides the ARN of the method that the caller is requesting.<br><br>Ref: https://www.alexdebrie.com/posts/lambda-custom-authorizers/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 512140,
            "date": "Wed 29 Dec 2021 13:27",
            "username": "reve666",
            "content": "The policyDocument is another required property and the core of the authorizer response. You must return a valid IAM policy that allows access to the underlying API Gateway resource that the user is trying to access.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#407",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The developer is creating a web application that collects highly regulated and confidential user data through a POST request. The web application is served through Amazon CloudFront. User names and phone numbers must be encrypted at the edge and must remain encrypted throughout the entire application stack.<br>What is the MOST secure way to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#407",
            "answers": [
              {
                "choice": "<p>A. Enforce Match Viewer with HTTPS Only on CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use only the newest TLS security policy on CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enforce a signed URL on CloudFront on the front end.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use field-level encryption on CloudFront.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 407 discussion",
        "discusstion": [
          {
            "id": 513603,
            "date": "Thu 30 Dec 2021 19:34",
            "username": "claudiadlr",
            "content": "I'll go with \\\"D\\\" - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html<br>\\\"To use field-level encryption, when you configure your CloudFront distribution, specify the set of fields in POST requests that you want to be encrypted, and the public key to use to encrypt them. You can encrypt up to 10 data fields in a request. (You can=E2=80=99t encrypt all of the data in a request with field-level encryption; you must specify individual fields to encrypt.)\\\"",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 600482,
            "date": "Thu 12 May 2022 08:13",
            "username": "MikeyJ",
            "content": "\\\"With Amazon CloudFront, you can enforce secure end-to-end connections to origin servers by using HTTPS. Field-level encryption adds an additional layer of security that lets you protect specific data throughout system processing so that only certain applications can see it.<br><br>Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data=E2=80=94and have the credentials to decrypt it=E2=80=94are able to do so.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 519418,
            "date": "Sat 08 Jan 2022 10:40",
            "username": "waqas1992",
            "content": "D<br>Field-level encryption on CF help you to encrypt the data field in request",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 513219,
            "date": "Thu 30 Dec 2021 11:04",
            "username": "Gaurav_GGG",
            "content": "D - Use field-level encryption on CloudFront.",
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
        "question_text": "<p>A company runs a traditional three-tier application, including its NoSQL database, on Amazon EC2 instances in a VPC.  The company wants to migrate the database to Amazon DynamoDB. <br>During testing, a developer notices that the application on the EC2 instances cannot write data to the DynamoDB table. The developer needs to grant the application write access to the DynamoDB table in a secure manner.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#408",
            "answers": [
              {
                "choice": "<p>A. Create a gateway VPC endpoint for DynamoDB.  Specify the VPC ID in the --vpc-id parameter.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an interface VPC endpoint for DynamoDB.  Specify the VPC ID in the --vpc-id parameter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM user that allows write access to the DynamoDB table. Add the user to the EC2 Instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM role that allows write access to the DynamoDB table. Add the role to the EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an IAM group that allows write access to the DynamoDB table. Add the group to the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 408 discussion",
        "discusstion": [
          {
            "id": 515675,
            "date": "Mon 03 Jan 2022 13:11",
            "username": "denccc",
            "content": "It's AD",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 633960,
            "date": "Wed 20 Jul 2022 11:29",
            "username": "awscloudlearner321",
            "content": "A&D.  Only s3 and dynamodb are gateway endpoints. Everything else is interface.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 542706,
            "date": "Mon 07 Feb 2022 23:11",
            "username": "JP_PA",
            "content": "ANS: A&D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 514851,
            "date": "Sun 02 Jan 2022 07:06",
            "username": "striver",
            "content": "AD is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 513261,
            "date": "Thu 30 Dec 2021 11:48",
            "username": "Gaurav_GGG",
            "content": "Key - The developer must securely provide the application write access to the DynamoDB table.D.  Create an IAM role that allows write access to the DynamoDB table. Add the role to the EC2 instances.<br>If it hints for network issue, we might need to think for gateway endpoint for DynamoDb",
            "upvote_count": "4",
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
        "question_text": "<p>A company is hosting a workshop for external users and wants to share the reference documents with the external users for 7 days. The company stores the reference documents in an Amazon S3 bucket that the company owns.<br>What is the MOST secure way to share the documents with the external users?<br></p>",
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
                "choice": "<p>A. Use S3 presigned URLs to share the documents with the external users. Set an expiration time of 7 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Move the documents to an Amazon WorkDocs folder. Share the links of the WorkDocs folder with the external users.<br></p>",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 409 discussion",
        "discusstion": [
          {
            "id": 520934,
            "date": "Mon 10 Jan 2022 16:01",
            "username": "CHRIS12722222",
            "content": "A is the correct answer",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 591983,
            "date": "Tue 26 Apr 2022 00:35",
            "username": "statsu26",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 542708,
            "date": "Mon 07 Feb 2022 23:12",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "2",
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
        "question_text": "<p>A developer has written an application that writes data to Amazon DynamoDB.  The DynamoDB table has been configured to use conditional writes. During peak usage times, writes are failing due to a ConditionalCheckFailedException error.<br>How can the developer increase the application's reliability when multiple clients are attempting to write to the same record?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#410",
            "answers": [
              {
                "choice": "<p>A. Write data to an Amazon SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the amount of write capacity for the table to anticipate short-term spikes or bursts in write operations.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a caching solution, such as DynamoDB Accelerator or Amazon ElastiCache.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement error retries and exponential backoff with jitter.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 410 discussion",
        "discusstion": [
          {
            "id": 522910,
            "date": "Thu 13 Jan 2022 16:08",
            "username": "ersahincoArtsyvibealexaws1232312321_mgm7",
            "content": "Answer: D<br>Ref: https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/THE LINK CLEARLY SAYS:<br><br>While OCC is guaranteed to make progress, it can still perform quite poorly under high contention. The simplest of these contention cases is when a whole lot of clients start at the same time, and try to update the same database row.<br><br>SO I GO WITH OPTION CNo You're wrong, option C i.e. DAX only optimizes read operations, read the question carefully before you type anything stupidThis is a a characteristic of OCC, and can be dealt with by D, as @ersahinco points out. Not sure what you point is here.",
            "upvote_count": "9214",
            "selected_answers": ""
          },
          {
            "id": 580609,
            "date": "Mon 04 Apr 2022 10:13",
            "username": "Artsyvibealexaws1232312321_mgm7",
            "content": "THE LINK CLEARLY SAYS:<br><br>While OCC is guaranteed to make progress, it can still perform quite poorly under high contention. The simplest of these contention cases is when a whole lot of clients start at the same time, and try to update the same database row.<br><br>SO I GO WITH OPTION CNo You're wrong, option C i.e. DAX only optimizes read operations, read the question carefully before you type anything stupidThis is a a characteristic of OCC, and can be dealt with by D, as @ersahinco points out. Not sure what you point is here.",
            "upvote_count": "214",
            "selected_answers": ""
          },
          {
            "id": 645364,
            "date": "Thu 11 Aug 2022 10:40",
            "username": "alexaws1232312321_",
            "content": "No You're wrong, option C i.e. DAX only optimizes read operations, read the question carefully before you type anything stupid",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 588495,
            "date": "Wed 20 Apr 2022 09:53",
            "username": "mgm7",
            "content": "This is a a characteristic of OCC, and can be dealt with by D, as @ersahinco points out. Not sure what you point is here.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 647280,
            "date": "Mon 15 Aug 2022 18:25",
            "username": "[Removed]",
            "content": "D appears to be correct. The clue is with the word: \\\"Jitter\\\". The conditional write enable publishing to DynamoDB, but some test fails when bulk writes takes place. This causes an exception error to be thrown: ConditionalCheckFailedException. If the writes are tried again by staggering them, i.e. sent with jitter, that will set the ConditionalCheckFailedException flag to false, and thus resolve the problem.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 646028,
            "date": "Fri 12 Aug 2022 23:20",
            "username": "Chhotu_DBA",
            "content": "answer will be D since its write",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 639741,
            "date": "Sat 30 Jul 2022 18:09",
            "username": "Acesyo",
            "content": "write - so D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 632501,
            "date": "Sun 17 Jul 2022 10:28",
            "username": "temptemp1",
            "content": "if it was read operation Cache & DAX will help.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 619683,
            "date": "Tue 21 Jun 2022 10:10",
            "username": "sidvic",
            "content": "Answer: D<br>\\\"DAX is not ideal for the following types of applications:\\\"<br> \\\"Applications that are write-intensive, or that do not perform much read activity.\\\" https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html#DAX.use-cases",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618726,
            "date": "Sun 19 Jun 2022 16:29",
            "username": "VijiTu",
            "content": "Its doubtful the option is C because elastic cache will not be used with Dynamo DB.  Also DAX is used for performance improvement of dynamoDB.  They have mixed both options together. So considering D by elimination process",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 617972,
            "date": "Sat 18 Jun 2022 01:21",
            "username": "mohamedba",
            "content": "The caching is used to handle read traffic.<br>The solution is not C because it's a write issue.<br>Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 610347,
            "date": "Thu 02 Jun 2022 00:01",
            "username": "jaimitom94",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 602985,
            "date": "Tue 17 May 2022 18:11",
            "username": "Raynman727",
            "content": "We are talking about writes, not reads. What is caching going to do? I dont think it is C.  Conditional errors is when multiple writes at the same time, the first one there will win and the second one there will fail, thats where the error retries and expotential backoff makes sense. Not sure about the jitter part, but I think it is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 600507,
            "date": "Thu 12 May 2022 09:21",
            "username": "MikeyJ",
            "content": "No answer seems totally correct. Wonder if the question and/or answers isn't quite right?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 588487,
            "date": "Wed 20 Apr 2022 09:39",
            "username": "mgm7",
            "content": "I don't get C. Speeding up realization that you can't write will speed up writes?Probably I'm missing something ....",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 552672,
            "date": "Mon 21 Feb 2022 09:46",
            "username": "Joe29",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 552245,
            "date": "Sun 20 Feb 2022 21:17",
            "username": "Shelly1987",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 550845,
            "date": "Sat 19 Feb 2022 11:34",
            "username": "ShrikantMS",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 546512,
            "date": "Sun 13 Feb 2022 15:55",
            "username": "seeking_cert",
            "content": "C is the correct answer.As even with the retries a conditional check will fail as long as conditions aren't met.Caching that this particular write failed and to skip this record would help.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540418,
            "date": "Fri 04 Feb 2022 13:42",
            "username": "Vlasto",
            "content": "I do not see how the exponential backoff would help in this case. So there is a situation where probably somebody else wrote some data to the database which caused that your write does not fulfill the condition. Trying again will not help, unless someone else changes the data again and then suddenly your query would succeed. I would definitelly not count on that happening. I do not see how any of these should help you but the closest might be some write through cache to give you the most recent data before you try to write the data to limit the chances of this error happening.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#411",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a REST application that consists of an Amazon API Gateway API and several AWS Lambda functions. A developer is responding to an alert that the API Gateway API's HTTP response error rate has unexpectedly increased. The developer must determine which Lambda function is malfunctioning and must make the determination as quickly as possible.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#411",
            "answers": [
              {
                "choice": "<p>A. Implement error handling in the functions to write error logs to the AWS X-Ray API. Use the X-Ray console to query the logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable Amazon CloudWatch Logs and detailed CloudWatch metrics. Use CloudWatch Logs Insights to query the API Gateway logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Download the API Gateway logs and Lambda invocation logs from Amazon S3. Perform a line-by-line search against them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Export the API Gateway logs and Lambda invocation logs from Amazon EventBridge (Amazon CloudWatch Events) and Amazon CloudWatch Logs. Perform a line-by-line search against them.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 411 discussion",
        "discusstion": [
          {
            "id": 514204,
            "date": "Fri 31 Dec 2021 20:52",
            "username": "Drgnpond27",
            "content": "I'll go with B. <br>To troubleshoot Lambda code errors<br>1. Review your Amazon CloudWatch Logs for Lambda.<br>2. Use AWS X-Ray to identify any code performance bottlenecks.<br><br>Reference<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-troubleshoot-function-failures/Agreed. Also, the answer A says \\\"Implement error handling\\\". I don't think it satisfies the criteria \\\"rapidly discover\\\" issues.",
            "upvote_count": "91",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 646426,
            "date": "Sat 13 Aug 2022 19:34",
            "username": "pond27",
            "content": "Agreed. Also, the answer A says \\\"Implement error handling\\\". I don't think it satisfies the criteria \\\"rapidly discover\\\" issues.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 586263,
            "date": "Fri 15 Apr 2022 11:45",
            "username": "aws_proff",
            "content": "A looks correct",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 550863,
            "date": "Sat 19 Feb 2022 12:23",
            "username": "ShrikantMS",
            "content": "B- Cloudwatch is the standard",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514860,
            "date": "Sun 02 Jan 2022 07:33",
            "username": "striver",
            "content": "B is the correct answer in my opinion.<br><br>I don't think we can write logs to X-Ray",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 514341,
            "date": "Sat 01 Jan 2022 04:56",
            "username": "IssamTun",
            "content": "B- CloudWatch is always recommended for troubleshooting in such situations",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 513263,
            "date": "Thu 30 Dec 2021 11:54",
            "username": "Gaurav_GGGGaurav_GGG",
            "content": "B.  Enable Amazon CloudWatch Logs and detailed CloudWatch metrics. Use CloudWatch Logs Insights to query the API Gateway logs.<br> Lambda Error-> CloudWatchLambda or API GW",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 513266,
            "date": "Thu 30 Dec 2021 11:54",
            "username": "Gaurav_GGG",
            "content": "Lambda or API GW",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#412",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company built an online event platform. For each event, the company organizes quizzes and generates leaderboards that are based on the quiz scores. The company stores the leaderboard data in Amazon DynamoDB and retains the data for 30 days after an event is complete. The company then uses a scheduled job to delete the old leaderboard data.<br>The DynamoDB table is configured with a fixed write capacity. During the months when many events occur, the DynamoDB write API requests are throttled when the scheduled delete job runs.<br>A developer must create a long-term solution that deletes the old leaderboard data and optimizes write throughput.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#412",
            "answers": [
              {
                "choice": "<p>A. Configure a TTL attribute for the leaderboard data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use DynamoDB Streams to schedule and delete the leaderboard data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Step Functions to schedule and delete the leaderboard data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set a higher write capacity when the scheduled delete job runs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 412 discussion",
        "discusstion": [
          {
            "id": 511498,
            "date": "Tue 28 Dec 2021 20:00",
            "username": "t33me",
            "content": "A.  Configure a TTL attribute for the leaderboard data.<br>\\\"deletes the item from your table without consuming any write throughput\\\"<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 515561,
            "date": "Mon 03 Jan 2022 10:34",
            "username": "denccc",
            "content": "It's A",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 645942,
            "date": "Fri 12 Aug 2022 16:34",
            "username": "ALQASSASS",
            "content": "TTL is useful if you store items that lose relevance after a specific time.<br>It's A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 637792,
            "date": "Wed 27 Jul 2022 06:40",
            "username": "juaneks",
            "content": "A: DynamoDB TTL is free",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 610336,
            "date": "Wed 01 Jun 2022 23:03",
            "username": "jaimitom94",
            "content": "A.  Configure a TTL attribute for the leaderboard data.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 589571,
            "date": "Thu 21 Apr 2022 20:29",
            "username": "GeekInside",
            "content": "It's A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 534115,
            "date": "Thu 27 Jan 2022 21:43",
            "username": "JP_PA",
            "content": "Ans: A",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#413",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is troubleshooting a three-tier application, which is deployed on Amazon EC2 instances. There is a connectivity problem between the application servers and the database servers.<br>Which AWS services or tools should be used to identify the faulty component? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#413",
            "answers": [
              {
                "choice": "<p>A. AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Trusted Advisor<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon VPC Flow Logs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Network access control lists<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. AWS Config rules<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 413 discussion",
        "discusstion": [
          {
            "id": 514108,
            "date": "Fri 31 Dec 2021 15:04",
            "username": "waqas1992",
            "content": "C & D are correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 589561,
            "date": "Thu 21 Apr 2022 20:13",
            "username": "GeekInside",
            "content": "C & D are correct answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 551364,
            "date": "Sat 19 Feb 2022 23:22",
            "username": "Shelly1987",
            "content": "Selected Answer: C,D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 551293,
            "date": "Sat 19 Feb 2022 21:02",
            "username": "waldonuts",
            "content": "A: CloudTrail doesnt record network traffic events<br>B: recommends best practises<br>E: helps check compliance<br><br>leaves C&D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 548270,
            "date": "Wed 16 Feb 2022 04:19",
            "username": "ShrikantMS",
            "content": "ANswer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#414",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An international ecommerce company's website encourages customers to leave reviews of products that they have purchased. Products are seasonal. The products are popular for a short period of time and then are not popular in the next season.<br>Customers leave the reviews in their native language. A developer is using Amazon Translate to implement a new feature to translate the reviews into other languages for customers who speak different languages. The website has hundreds of thousands of products with millions of reviews and is growing. Most reviews will be viewed in only two or three languages.<br>What is the MOST cost-effective way to implement this new feature?<br></p>",
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
                "choice": "<p>A. Update the application code that writes the review to the database to translate the review into all supported languages. Persist a copy of each translation in the database for future visitors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the application code that reads the review from the database to check an Amazon ElastiCache cluster for translated reviews. If a visitor is requesting a review and language combination that is not in the cache, configure the application to translate it and store it in the cache with a TTL of 1 month.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the application code that reads the review from the database to translate the review in real time and return the translated version without persisting it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up a database change stream to write events to a stream each time a customer writes a review. Configure an AWS Lambda function to read the events from the stream, translate the review into all supported languages, and update the review database to include all translations for future visitors.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 414 discussion",
        "discusstion": [
          {
            "id": 523876,
            "date": "Sat 15 Jan 2022 02:52",
            "username": "DrgnLaXuanLinh",
            "content": "I'm going with B. <br><br>It is the most cost effective IMHO, with the minimalist amount of administration of reviews. However, the most flexible, scalable solution would be D.  But, it lacks the time portion of the question.<br><br>A - No need to save the translation indefinitely.<br>C - The LEAST Cost Effective option. Not storing the translation will require re-translating for every user, every review, every time.<br>D - Possible solution, but reading/lambda streams is more costly then writing to a cache. Additionally, there is no thought of TTL, where a product is only popular for a \\\"season\\\"dude, AWS Translate is very expensive",
            "upvote_count": "61",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 644013,
            "date": "Mon 08 Aug 2022 09:55",
            "username": "LaXuanLinh",
            "content": "dude, AWS Translate is very expensive",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 646352,
            "date": "Sat 13 Aug 2022 15:54",
            "username": "Chhotu_DBA",
            "content": "because of the cost its C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 644011,
            "date": "Mon 08 Aug 2022 09:54",
            "username": "LaXuanLinhLaXuanLinh",
            "content": "B is not correct because you will have to use AWS Translate every time someone requests for reviews. AWS Translate costs $15 per 1 million requests. Let say your pagination is 5 reviews/page, each review could easily be 200-500 characters so everyday you're looking at 1-2 million characters translated that will cost you $30/day$900/month<br>Meanwhile translating the reviews once and storing them in RDS cost so much less money a monthSource for AWS translate pricing<br>https://aws.amazon.com/translate/pricing/",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 644014,
            "date": "Mon 08 Aug 2022 09:55",
            "username": "LaXuanLinh",
            "content": "Source for AWS translate pricing<br>https://aws.amazon.com/translate/pricing/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 622441,
            "date": "Sun 26 Jun 2022 11:19",
            "username": "VijiTu",
            "content": "This translation is not requested quite often. It's not a good practice to use caching for infrequent data. Hence I go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 601083,
            "date": "Fri 13 May 2022 12:43",
            "username": "MikeyJ",
            "content": "I'll say C, as this solution only translates what is needed, on demand, with no ongoing costs of expensive services like Elasticache. That seems to fit with AWS's focus on everything-on-demand with minimal infrastructure.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 566423,
            "date": "Sun 13 Mar 2022 00:20",
            "username": "Anthouse",
            "content": "I'm going to go with C on this one. Translating on-the-fly with C would incur cost for Translate, while translating and caching would incur cost for Translate and ElastiCache. End-goal is most cost-effective solution without regard to performance - so even though caching translations would help performance (especially considering the wording of items being seasonally popular) it would cost more.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 544076,
            "date": "Wed 09 Feb 2022 21:24",
            "username": "77777",
            "content": "It's C.  Amazon Translate offers real-time translation. Option B is not cost effective.<br>https://docs.aws.amazon.com/translate/latest/dg/sync.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 534606,
            "date": "Fri 28 Jan 2022 11:23",
            "username": "CHRIS12722222",
            "content": "Elasticache will incur some cost and overhead",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 534111,
            "date": "Thu 27 Jan 2022 21:35",
            "username": "JP_PA",
            "content": "Ans : B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521952,
            "date": "Wed 12 Jan 2022 08:15",
            "username": "squeck",
            "content": "Why not B here?",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 519370,
            "date": "Sat 08 Jan 2022 08:34",
            "username": "successzy",
            "content": "I think the answer is C. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515724,
            "date": "Mon 03 Jan 2022 13:55",
            "username": "denccc",
            "content": "Would go for C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514123,
            "date": "Fri 31 Dec 2021 15:55",
            "username": "ayush_1995",
            "content": "should be C, since reviews are season-based, and translating every review to sorted language makes no sense.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 513289,
            "date": "Thu 30 Dec 2021 12:18",
            "username": "Gaurav_GGG",
            "content": "Confused Between C and D.  Will go with C for most Cost Effective solution and while application development is still in progress, they can write logic to translate review at runtime. (Assumption - App side Logic to use Locale for Language)",
            "upvote_count": "1",
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
        "question_text": "<p>A developer has written an application hosted on Amazon EC2 instances. The application generates and uploads thousands of new objects to an Amazon S3 bucket located in the same AWS Region. The size of each object is less than 1 MB.  The application is taking too long to run.<br>How can the performance of the application be improved?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#415",
            "answers": [
              {
                "choice": "<p>A. Use the S3 Multipart Upload API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use S3 Transfer Acceleration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Upload the objects in parallel to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a random prefix to the object Keys.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 415 discussion",
        "discusstion": [
          {
            "id": 517450,
            "date": "Wed 05 Jan 2022 13:39",
            "username": "EdwarsSpeedRunner",
            "content": "I think it is C<br><br>from https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html<br>(...) your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per prefix in a bucket. There are no limits to the number of prefixes in a bucket. You can increase your read or write performance by using parallelization. For example, if you create 10 prefixes in an Amazon S3 bucket to parallelize reads, you could scale your read performance to 55,000 read requests per second. Similarly, you can scale write operations by writing to multiple prefixes.<br><br>so, you need to add a prefix to parallelize but not randomly because at the end of the documentation page you can read.<br>(...)PREVIOUSLY Amazon S3 performance guidelines recommended randomizing prefix naming with hashed characters to optimize performance for frequent data retrievals. You NO LONGER HAVE TO RANDOMIZE prefix naming for performance, and can use sequential date-based naming for your prefixes.NO LONGER HAVE TO RANDOMIZE doesn't mean randomized prefix will not work. Just it means no need to randomize.But if you do(randomized prefix) it would still works.",
            "upvote_count": "61",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 586624,
            "date": "Sat 16 Apr 2022 07:29",
            "username": "SpeedRunner",
            "content": "NO LONGER HAVE TO RANDOMIZE doesn't mean randomized prefix will not work. Just it means no need to randomize.But if you do(randomized prefix) it would still works.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 670642,
            "date": "Fri 16 Sep 2022 11:05",
            "username": "trungducng2910",
            "content": "CCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 645957,
            "date": "Fri 12 Aug 2022 17:54",
            "username": "Chhotu_DBA",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 604996,
            "date": "Sat 21 May 2022 21:02",
            "username": "anna_montana",
            "content": "Chttps://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 586623,
            "date": "Sat 16 Apr 2022 07:27",
            "username": "SpeedRunner",
            "content": "This question might old as it mention about adding random prefix. No longer have to randomize the prefix but still it will work. So D is correct. C will not work as it uses one bucket.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 567347,
            "date": "Mon 14 Mar 2022 05:35",
            "username": "AWSDEVA",
            "content": "ANS: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 542715,
            "date": "Mon 07 Feb 2022 23:21",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 515572,
            "date": "Mon 03 Jan 2022 10:45",
            "username": "denccc",
            "content": "would go for C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514100,
            "date": "Fri 31 Dec 2021 14:55",
            "username": "waqas1992EdwarsVlasto",
            "content": "A - Wrong: File size is less than1 MB, so no need to use multipart upload<br>B - Wrong: Transfer acceleration is a good choice but I won't use it for 1MB file honestly in real world scenario<br>C - You can't go more than 3500 PUT/POST request for one bucket so wont work either<br>D - Use parallel upload with random prefix might solve the problem. I will go with DWrong, you can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per PREFIX in a bucket3500 seems more than 1. If that would not be enough then you could also add prefix, but ideally not random.",
            "upvote_count": "331",
            "selected_answers": ""
          },
          {
            "id": 517440,
            "date": "Wed 05 Jan 2022 13:27",
            "username": "Edwars",
            "content": "Wrong, you can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per PREFIX in a bucket",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 540375,
            "date": "Fri 04 Feb 2022 12:16",
            "username": "Vlasto",
            "content": "3500 seems more than 1. If that would not be enough then you could also add prefix, but ideally not random.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513507,
            "date": "Thu 30 Dec 2021 17:00",
            "username": "claudiadlr",
            "content": "I think it's \\\"C\\\" - https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 511504,
            "date": "Tue 28 Dec 2021 20:09",
            "username": "t33me",
            "content": "\\\"A\\\" is wrong.<br>\\\"You can use a multipart upload for objects from 5 MB to 5 TB in size. \\\"",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#417",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has three microservice projects that are separated into different folders under the same AWS CodeCommit repository. Each project has a separate<br>AWS CodePipeline pipeline. The developer notices that when changes are pushed to one microservice, all three pipelines begin to run.<br>The developer needs to ensure that only relevant pipelines run. The developer cannot make any changes to how the repository is organized.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#417",
            "answers": [
              {
                "choice": "<p>A. For each of the three microservice projects, create a separate CodeCommit repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function to evaluate changes to the repository and run the appropriate pipeline.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon API Gateway API that is backed by an AWS Lambda function to determine the appropriate pipeline to run. Add the API endpoint to a webhook in CodeCommit.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate all three pipelines to a single pipeline. Add conditional stages to build a certain microservice project.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 417 discussion",
        "discusstion": [
          {
            "id": 542725,
            "date": "Mon 07 Feb 2022 23:29",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514344,
            "date": "Sat 01 Jan 2022 05:01",
            "username": "msengupta",
            "content": "Correct answer is B.  \\\"To introduce custom logic and control the events that kickoff the pipeline, this example configures the default CloudWatch Events rule to detect changes in the source and trigger a Lambda function rather than invoke the pipeline directly.\\\"<br>Ref: https://aws.amazon.com/blogs/devops/adding-custom-logic-to-aws-codepipeline-with-aws-lambda-and-amazon-cloudwatch-events/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 511961,
            "date": "Wed 29 Dec 2021 09:30",
            "username": "reve666",
            "content": "Use CloudWatch Events (Amazon EventBridge). Example:<br>=E2=80=A2 You can create events for failed pipelines<br>=E2=80=A2 You can create events for cancelled stages",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#419",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed web servers on Amazon EC2 instances with Amazon Linux in the us-east-1 Region. The EC2 instances are backed by Amazon Elastic<br>Block Store (Amazon EBS). A developer wants to ensure that all of these instances will provide encryption at rest by using an AWS Key Management Service<br>(AWS KMS) key.<br>How can the developer enable encryption at rest on existing and new instances by using an AWS KMS key?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#419",
            "answers": [
              {
                "choice": "<p>A. Use AWS Certificate Manager (ACM) to generate a TLS certificate. Store the private key in AWS KMS. Use AWS KMS on the instances to enable TLS encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Manually enable EBS encryption with AWS KMS on running instances. Then enable EBS encryption by default for new instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable EBS encryption by default. Create snapshots from the running instances. Replace running instances with new instances from snapshots.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Export the AWS KMS key to the application. Encrypt all application data by using the exported key. Enable EBS encryption by default to encrypt all other data.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 419 discussion",
        "discusstion": [
          {
            "id": 709724,
            "date": "Wed 02 Nov 2022 10:13",
            "username": "cloud_collector",
            "content": "C should be right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 605804,
            "date": "Mon 23 May 2022 06:05",
            "username": "mywogunleye",
            "content": "C<br>\\\"You cannot directly encrypt existing unencrypted volumes or snapshots. However, you can create encrypted volumes or snapshots from unencrypted volumes or snapshots\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 545459,
            "date": "Fri 11 Feb 2022 20:51",
            "username": "seeking_cert",
            "content": "When you enable encryption at the time of the creation you specify which key (KMS) to select. Thus option C is best choice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 525243,
            "date": "Sun 16 Jan 2022 21:24",
            "username": "eukalix",
            "content": "it is C",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 515084,
            "date": "Sun 02 Jan 2022 17:59",
            "username": "dencccCHRIS12722222",
            "content": "would go for Cme too",
            "upvote_count": "42",
            "selected_answers": ""
          },
          {
            "id": 515830,
            "date": "Mon 03 Jan 2022 15:25",
            "username": "CHRIS12722222",
            "content": "me too",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#421",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company created a serverless application that includes users' favorite actors. The company modeled its data in an Amazon DynamoDB table The categories of the table are Actor, Movie, and Year.<br>Each actor appears in several movies and can appear in multiple movies in a single year. The company wants to see which of the users' favorite actors were in the same movie and which movies were in the same year. A developer needs to design the DynamoDB table to minimize response time for those queries.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#421",
            "answers": [
              {
                "choice": "<p>A. Create a composite primary key with Actor as the partition key and Movie as the sort key Use Year as the sort key for aglobal secondary index (GSI).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a composite primary key with Actor as the partition key and Year as the sort key Use Movie as the sort key for a global secondary index (GSI).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a composite primary key with Movie as the partition key and Actor as the sort key Use Year as the sort key for a global secondary index (GSI).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a simple primary key with Actor as the partition key. Use Year as the sort key for a local secondary index (LSI).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 421 discussion",
        "discusstion": [
          {
            "id": 518652,
            "date": "Thu 06 Jan 2022 23:03",
            "username": "ej123",
            "content": "CCCCCCCCCC",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 590477,
            "date": "Sat 23 Apr 2022 10:23",
            "username": "Ivanyan",
            "content": "C.  Create a composite primary key with Movie as the partition key and Actor as the sort key Use Year as the sort key for a global secondary index (GSI).",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 575512,
            "date": "Sat 26 Mar 2022 12:48",
            "username": "Awsexam100",
            "content": "actor + movie sorted on years .same actor can have multiple movies in same year.<br>answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 563183,
            "date": "Tue 08 Mar 2022 12:13",
            "username": "SK_2_SK",
            "content": "Interested in each Movie's actors & actor's movies with its release year.<br>So Movie + year > Actor<br>Movie: primary partition key<br>Actor : sort key<br>Year: GSI",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 513957,
            "date": "Fri 31 Dec 2021 09:44",
            "username": "dencccdencccdenccc",
            "content": "Would go for AIn doubt after checking this again..Would go for C now",
            "upvote_count": "126",
            "selected_answers": ""
          },
          {
            "id": 516919,
            "date": "Tue 04 Jan 2022 20:06",
            "username": "dencccdenccc",
            "content": "In doubt after checking this again..Would go for C now",
            "upvote_count": "26",
            "selected_answers": ""
          },
          {
            "id": 516921,
            "date": "Tue 04 Jan 2022 20:07",
            "username": "denccc",
            "content": "Would go for C now",
            "upvote_count": "6",
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
        "question_text": "<p>A company is running a custom web application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group. The company's development team is using AWS CloudFormation to deploy all the services. The application is time-consuming to install and configure when the development team launches a new instance<br>Which combination of steps should a developer take to optimize the performance when a new instance is launched? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#422",
            "answers": [
              {
                "choice": "<p>A. Use an AWS Marketplace Amazon Machine Image (AMI) with a prebuilt application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a prebuilt Amazon Machine Image (AMI) with the application installed and configured.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the launch template resource in the CloudFormation template.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Systems Manager Run Command to install and configure the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use CloudFormation helper scripts to install and configure the application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 422 discussion",
        "discusstion": [
          {
            "id": 523652,
            "date": "Fri 14 Jan 2022 19:05",
            "username": "SonamDhingra",
            "content": "Would go for B and. C",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 718361,
            "date": "Tue 15 Nov 2022 00:38",
            "username": "cloud_collectorcloud_collector",
            "content": "Due to E :<br>AWS CloudFormation helper scripts can be used to install software and start services on an EC2 instance created as a part of the stack.<br><br>I think C is better in hereFor C:<br>You can create an Auto Scaling group and specify a launch template to use for the group. When Amazon EC2 Auto Scaling launches instances in the Auto Scaling group, it uses the launch parameters defined in the associated launch template.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 718366,
            "date": "Tue 15 Nov 2022 00:44",
            "username": "cloud_collector",
            "content": "For C:<br>You can create an Auto Scaling group and specify a launch template to use for the group. When Amazon EC2 Auto Scaling launches instances in the Auto Scaling group, it uses the launch parameters defined in the associated launch template.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 644778,
            "date": "Wed 10 Aug 2022 06:32",
            "username": "LunaLovegood15",
            "content": "Answer: B & C<br><br>On one hand, AWS::CloudFormation::Init and the other configuration tools provide a great deal of flexibility and control over instance configuration. On the other hand, AMIs offers the fastest application boot times, since your desired configuration and application can be preinstalled while creating a custom AMI.<br><br>https://aws.amazon.com/blogs/devops/best-practices-for-deploying-applications-on-aws-cloudformation-stacks/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 599059,
            "date": "Mon 09 May 2022 15:01",
            "username": "cloudbusting",
            "content": "i would go with BC",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 590090,
            "date": "Fri 22 Apr 2022 17:35",
            "username": "mgm7",
            "content": "Building an AMI image every time you have a new build will not save you time over a helper function inside cloudfoundation it seems to me...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 580529,
            "date": "Mon 04 Apr 2022 04:52",
            "username": "w2000w",
            "content": "E.  Use CloudFormation helper scripts to install and configure the application.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html<br>\\\"cfn-init: Use to retrieve and interpret resource metadata, install packages, create files, and start services<br>...<br>Note<br>The scripts aren't executed by default. You must include calls in your template to execute specific helper scripts.\\\"C.  Update the launch template resource in the CloudFormation template<br>\\\"You call the scripts directly from your template. The scripts work in conjunction with resource metadata that's defined in the same template. The scripts run on the Amazon EC2 instance during the stack creation process.\\\"",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 547399,
            "date": "Mon 14 Feb 2022 22:38",
            "username": "DaniWS10",
            "content": "B looks more efficient than E -- B and C. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 544079,
            "date": "Wed 09 Feb 2022 21:27",
            "username": "JohnPi",
            "content": "BC answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 531516,
            "date": "Mon 24 Jan 2022 19:52",
            "username": "Nicolas_21",
            "content": "BC answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 529446,
            "date": "Fri 21 Jan 2022 22:52",
            "username": "forgreatspam",
            "content": "B - https://aws.amazon.com/blogs/devops/best-practices-for-deploying-applications-on-aws-cloudformation-stacks/<br>> When you are using CloudFormation, you can use anything from AMIs,...<br><br>C - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-launch-templates.html<br>> For example, a launch template can contain the AMI ID",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 524867,
            "date": "Sun 16 Jan 2022 12:10",
            "username": "eukalix",
            "content": "CloudFormation helper scripts still need time to get executed. It will not help",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 515914,
            "date": "Mon 03 Jan 2022 17:36",
            "username": "Edwars",
            "content": "I would go for C and E, there is no mentions to AMI nor AWS Systems Manager in https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 515696,
            "date": "Mon 03 Jan 2022 13:30",
            "username": "[Removed]",
            "content": "Would go for B and. C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515027,
            "date": "Sun 02 Jan 2022 15:46",
            "username": "denccc",
            "content": "Would go for B and. C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#423",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a web application that will run on AWS Lambda. The application will give users the ability to log in to view private documents. All pages in the application must be designed to match the company's branding.<br>How can the developer host the sign-in pages with the LEAST amount of custom code?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#423",
            "answers": [
              {
                "choice": "<p>A. Upload files for the sign-in pages with the required branding to an Amazon S3 bucket. Configure static website hosting for the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Lambda function to serve the sign-in pages with the required branding. Configure Amazon API Gateway to route traffic to the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Lambda@Edge function to serve the sign-in pages with the required branding. Configure Amazon CloudFront to invoke the function in response to user requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon Cognito user pool with an Amazon Cognito hosted UI for the sign-in pages. Customize the pages with the required branding.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 423 discussion",
        "discusstion": [
          {
            "id": 514348,
            "date": "Sat 01 Jan 2022 05:13",
            "username": "msengupta",
            "content": "You can use the AWS Management Console, or the AWS CLI or API, to specify customization settings for the built-in app UI experience. You can upload a custom logo image to be displayed in the app. You can also use cascading style sheets (CSS) to customize the look of the UI.<br>Ref: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-ui-customization.html",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 523419,
            "date": "Fri 14 Jan 2022 09:11",
            "username": "ANPT1103",
            "content": "D.  Configure an Amazon Cognito user pool with an Amazon Cognito hosted UI for the sign-in pages. Customize the pages with the required branding.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 537372,
            "date": "Mon 31 Jan 2022 20:39",
            "username": "Orffeus",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#424",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using an Amazon SQS standard queue to store messages sent from the front-end tier to the backend tier of an application. The backend tier parses the message and saves an entry to an Amazon DynamoDB table. A developer discovers that duplicate entries are being stored in the DynamoDB table, even though AWS CloudTrail records only a single Amazon SQS message per entry.<br>What change needs to be made to resolve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#424",
            "answers": [
              {
                "choice": "<p>A. Enable queue de-duplication to prevent duplicate messages.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the front-end tier to use the MessageGroupID argument.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the application logic to use Amazon SNS between Amazon SQS and the front-end tier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the Amazon SQS queue type to first-in, first-out (FIFO).<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 424 discussion",
        "discusstion": [
          {
            "id": 587472,
            "date": "Mon 18 Apr 2022 06:52",
            "username": "SpeedRunner",
            "content": "Answer is A.  Enable deduplication for FIFO queue. B is a FIFO queue feature but has nothing to do with duplication. D is not possible as other people explained.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 718373,
            "date": "Tue 15 Nov 2022 01:28",
            "username": "cloud_collectorcloud_collector",
            "content": "You can't convert an existing standard queue into a FIFO queue. To make the move, you must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.htmlChange my ans to D. <br>Because A and B is belong to FIFO 's features, we must change the queue type before use them.<br>D in here, I think it means change the way of used queue from standard to FIFO, definitely it cannot be convert from existing one to FIFO directly.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 718375,
            "date": "Tue 15 Nov 2022 01:34",
            "username": "cloud_collector",
            "content": "Change my ans to D. <br>Because A and B is belong to FIFO 's features, we must change the queue type before use them.<br>D in here, I think it means change the way of used queue from standard to FIFO, definitely it cannot be convert from existing one to FIFO directly.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 651717,
            "date": "Thu 25 Aug 2022 11:20",
            "username": "Hari008",
            "content": "Definitely D as Option A should be FIFO initially",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 645776,
            "date": "Fri 12 Aug 2022 08:54",
            "username": "LaXuanLinh",
            "content": "FIFO is the not necessary since standard queue can also enable deduplication, furthermore you can't change type of an existing standard queue to FIFO, you have to create a new queue, therefore D is not correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 634258,
            "date": "Wed 20 Jul 2022 23:20",
            "username": "AWSEXPERT42069LaXuanLinh",
            "content": "D. ) Makes the most sense to me given the vagueness, assuming they mean create another queue that is FIFO<br><br>However, A. ) Makes more sense given the queue is already a FIFO queue.You can then enable the de-duplication by doing \\\"... one of the following:<br><br>- Enable content-based deduplication. This instructs Amazon SQS to use a SHA-256 hash to generate the message deduplication ID using the body of the message=E2=80=94but not the attributes of the message. For more information, see the documentation on the CreateQueue, GetQueueAttributes, and SetQueueAttributes actions in the Amazon Simple Queue Service API Reference.<br><br>- Explicitly provide the message deduplication ID (or view the sequence number) for the message. For more information, see the documentation on the SendMessage, SendMessageBatch, and ReceiveMessage actions in the Amazon Simple Queue Service API Reference.\\\"<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.htmlunfortunately you can't change type of a queue, you can only create another queue so D is not correct",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 645774,
            "date": "Fri 12 Aug 2022 08:50",
            "username": "LaXuanLinh",
            "content": "unfortunately you can't change type of a queue, you can only create another queue so D is not correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 615879,
            "date": "Mon 13 Jun 2022 19:07",
            "username": "Gomer",
            "content": "I think the answer is D becauseI think they are implying that you recreate/replace the standard queue with a FIFO queue , not just change the setting on existing queue (I agree can't convert standard to FIFO).A.  & B.  are only applicable to a FIFO queue anyway, so first step is to move to a FIFO queue.Only D.  makes any sense (if you interpret the wording to say that your are replacing the queue)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 602577,
            "date": "Mon 16 May 2022 14:32",
            "username": "gingerbread_person",
            "content": "Another one of those unclear questions:-<br>A.  This is related to FIFO queues only but the question refers to a standard queue.B.  Same as above.C.  Cannot really be this.D.  Cannot change a queue type once it is created<br><br>I'm really baffled here?????",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 564450,
            "date": "Thu 10 Mar 2022 02:51",
            "username": "blake1111111",
            "content": "It's NOT D.  You cannot change the type of an SQS queue after its been created. Therefore, it's B. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 518810,
            "date": "Fri 07 Jan 2022 08:04",
            "username": "ccamile",
            "content": "B For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this quota, Amazon SQS returns no error messages.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514589,
            "date": "Sat 01 Jan 2022 17:26",
            "username": "msengupta",
            "content": "Ref: https://medium.com/avmconsulting-blog/deduplicating-amazon-sqs-messages-dc114d1e6545",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514335,
            "date": "Sat 01 Jan 2022 04:32",
            "username": "ayush_1995balabalabalabala",
            "content": "FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers. Additionally, message groups allow multiple separate ordered message streams within the same queueSQS can not change type once it's created. The only way is to recreate a new FIFO queue. So, D is incorrect.",
            "upvote_count": "44",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 529761,
            "date": "Sat 22 Jan 2022 11:40",
            "username": "balabalabalabala",
            "content": "SQS can not change type once it's created. The only way is to recreate a new FIFO queue. So, D is incorrect.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#425",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a Java application that deploys to AWS services. The company uses AWS CodePipeline to build a pipeline for the project. Whenever a team member commits changes to the source code, CodePipeline must build and deploy the application in the AWS Cloud.<br>Which combination of AWS services does the company need to use to meet these requirements?<br></p>",
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
                "choice": "<p>A. Amazon S3, AWS CodeBuild, and AWS CodeCommit<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon S3, AWS CodeBuild, and Amazon Elastic Container Service (Amazon ECS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CodeCommit, AWS CodeBuild, and AWS CodeDeploy<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CodeGuru, AWS CodeCommit, and AWS CodeBuild<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 425 discussion",
        "discusstion": [
          {
            "id": 515090,
            "date": "Sun 02 Jan 2022 18:05",
            "username": "denccc",
            "content": "It's C",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 575853,
            "date": "Sun 27 Mar 2022 01:42",
            "username": "__Sam",
            "content": "C is the correct one",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 546577,
            "date": "Sun 13 Feb 2022 17:35",
            "username": "Orffeus",
            "content": "C is correct",
            "upvote_count": "1",
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
        "question_text": "<p>A media company is using Amazon API Gateway to manage microservices that are implemented as AWS Lambda functions. The company's development team is planning to roll out another version of its API. To avoid affecting existing users when the new API is deployed, the company wants to give all users a 3-month period to migrate from the old API version to the new API version.<br>Which implementation strategy should the company use to achieve this goal?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#426",
            "answers": [
              {
                "choice": "<p>A. Update the Lambda functions. Configure the API to use Lambda proxy integration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the Lambda functions. Provide the API client with the new Lambda endpoints.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use API Gateway to deploy a new stage that uses updated Lambda functions and provides users with a new URL.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use API Gateway to redirect requests based on a request header to updated Lambda functions. Configure a 90-day expiration on the old API.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 426 discussion",
        "discusstion": [
          {
            "id": 515690,
            "date": "Mon 03 Jan 2022 13:25",
            "username": "denccc",
            "content": "It's C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 617515,
            "date": "Fri 17 Jun 2022 06:17",
            "username": "Maskfox",
            "content": "why not D?",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 545949,
            "date": "Sat 12 Feb 2022 16:07",
            "username": "haiche1410",
            "content": "C is correct<br>A stage is a named reference to a deployment, which is a snapshot of the API. You use a Stage to manage and optimize a particular deployment. For example, you can configure stage settings to enable caching, customize request throttling, configure logging, define stage variables, or attach a canary release for testing.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#427",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to modify an application architecture to meet new functional requirements. Application data is stored in Amazon DynamoDB and processed for analysis in a nightly batch. The system analysts do not want to wait until the next day to view the processed data and have asked to have it available in near-real time.<br>Which application architecture pattern would enable the data to be processed as it is received?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#427",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 427 discussion",
        "discusstion": [
          {
            "id": 511986,
            "date": "Wed 29 Dec 2021 09:59",
            "username": "reve666mevlt",
            "content": "Enables event driven programming with DynamoDB StreamsIt is also Asynchronous invoking.",
            "upvote_count": "72",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 523689,
            "date": "Fri 14 Jan 2022 20:10",
            "username": "mevlt",
            "content": "It is also Asynchronous invoking.",
            "upvote_count": "2",
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
        "question_text": "<p>A company set up a continuous build process that uses AWS CodeBuild and AWS CodeCommit. During the development phase, developers are frequently pushing code and causing significant build failures. The company wants a solution that will build code before the developers push the code to the main branch.<br>Which solution meets these requirements MOST cost-effectively?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#429",
            "answers": [
              {
                "choice": "<p>A. Configure am Amazon EC2 instance with the CodeBuild agent to build the code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure CodeBuild jobs on AWS for each branch build process.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the CodeBuild agent to build the code in the local system.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure a Jenkins plugin for CodeBuild to run the code build process<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 429 discussion",
        "discusstion": [
          {
            "id": 591280,
            "date": "Mon 25 Apr 2022 01:07",
            "username": "mcdirkLaXuanLinh",
            "content": "ive seen many companies implement multibranch builds i.e. ( development,testing, qa ) all before main branch<br>Why would this approach not be viable here?probably because of the requirement \\\"cost-effectiveness\\\", developer should build it locally first to test I guess",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 643227,
            "date": "Sat 06 Aug 2022 08:53",
            "username": "LaXuanLinh",
            "content": "probably because of the requirement \\\"cost-effectiveness\\\", developer should build it locally first to test I guess",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 527416,
            "date": "Wed 19 Jan 2022 11:41",
            "username": "hemlatab",
            "content": "It should be C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 515045,
            "date": "Sun 02 Jan 2022 16:16",
            "username": "denccc",
            "content": "It's C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 512001,
            "date": "Wed 29 Dec 2021 10:19",
            "username": "reve666",
            "content": "C is Correct: https://docs.aws.amazon.com/codebuild/latest/userguide/use-codebuild-agent.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#430",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has designed a serverless application that uses Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function. The application receives data in an SQS queue on the last day of every month. The function successfully processes all the data in the queue within 1 day.<br>A detailed AWS bill shows a large number of SQS API requests throughout the month, even though the queue receives data only on the last day of the month.<br>What is the root cause of the extra API requests?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#430",
            "answers": [
              {
                "choice": "<p>A. Lambda is using long polling to check for messages in the SQS queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The SQS queue is sending ping messages to Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The function is not automatically deleting the messages from the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Visibility timeout is not set to 0 to remove the extra API requests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 430 discussion",
        "discusstion": [
          {
            "id": 645341,
            "date": "Thu 11 Aug 2022 09:44",
            "username": "LaXuanLinh",
            "content": "C is not correct, the question clearly states that the queries are throughout the month so this has nothing to do with Lambda processing but not deleting messages on the very last day",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 591968,
            "date": "Mon 25 Apr 2022 23:43",
            "username": "statsu26statsu26",
            "content": "Answer: CA is correct.",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 591970,
            "date": "Mon 25 Apr 2022 23:49",
            "username": "statsu26",
            "content": "A is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 577238,
            "date": "Tue 29 Mar 2022 06:31",
            "username": "w2000w",
            "content": "Lambda keeps polling as long as the event source mapping is enabled.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html<br>Lambda supports the following options for Amazon SQS event sources.<br>Event source options<br>...<br>Enabled =E2=80=93 The status of the event source mapping. Set to true to enable the event source mapping. Set to false to stop processing records.<br><br>Note<br>Amazon SQS has a perpetual free tier for requests. Beyond the free tier, Amazon SQS charges per million requests. While your event source mapping is active, Lambda makes requests to the queue to get items. For pricing details, see Amazon SQS pricing<br>.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 551499,
            "date": "Sun 20 Feb 2022 04:15",
            "username": "waldonuts",
            "content": "Im voting on A, if Lambda is polling all month, long or short its getting charges regardless of the response being empty.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 538190,
            "date": "Tue 01 Feb 2022 21:45",
            "username": "Orffeus",
            "content": "A: long pooling return empty messages after wait timeout",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 537980,
            "date": "Tue 01 Feb 2022 16:51",
            "username": "egaws",
            "content": "Most likely the lambda is not returning success result which in turn makes the message visible for the others",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 535180,
            "date": "Sat 29 Jan 2022 05:42",
            "username": "CHRIS12722222CHRIS12722222",
            "content": "Seems lamdba automatically deletes message after successfully processing it. Many long polling calls after max of 20s throughout the month will definitely increase cost<br><br>https://github.com/localstack/localstack/issues/4180https://www.reddit.com/r/aws/comments/cpabbr/sqs_deleting_automatically_messages_after/",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 535182,
            "date": "Sat 29 Jan 2022 05:49",
            "username": "CHRIS12722222",
            "content": "https://www.reddit.com/r/aws/comments/cpabbr/sqs_deleting_automatically_messages_after/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 522782,
            "date": "Thu 13 Jan 2022 11:39",
            "username": "teja6mevlt",
            "content": "I think the answer is C:A.  Long polling or short polling will only poll messages when messages are in the queue.Message retention is 14 days so I am confused. How is it possible to keep data in a Queue for a month?",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 523544,
            "date": "Fri 14 Jan 2022 14:33",
            "username": "mevlt",
            "content": "Message retention is 14 days so I am confused. How is it possible to keep data in a Queue for a month?",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 520889,
            "date": "Mon 10 Jan 2022 15:02",
            "username": "CHRIS12722222CHRIS12722222",
            "content": "Reference link points to Aref https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 520890,
            "date": "Mon 10 Jan 2022 15:02",
            "username": "CHRIS12722222",
            "content": "ref https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#431",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer assumes a role with the AWS CLI to get a set of temporary security credentials.<br>Which of the following must be set in the environment variables or AWS configuration file to authenticate to AWS?<br></p>",
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
                "choice": "<p>A. AccessKeyId SecretAccessKey, and AssumedRoleId<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. UserId, SessionToken, and AssumedRoleId<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AccessKeyId, SecretAccessKey, and SessionToken<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. UserId, SessionToken and Credentials<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 431 discussion",
        "discusstion": [
          {
            "id": 633111,
            "date": "Mon 18 Jul 2022 19:47",
            "username": "Gomer",
            "content": "How its done:<br># Assume IAM role (independent of ~/.aws/config or ~/.aws/credentials file)(see: \\\"How do I assume an IAM role using the AWS CLI?\\\", \\\"AWS sts assume role in one command\\\")<br>aws sts assume-role --role-arn \\\"arn:aws:iam::123456789012:role/example-role\\\" --role-session-name AWSCLI-Session\t--region us-west-1\t# 1. Assume the example-role IAM role (outputs: AccessKeyId, SecretAccessKey, and SessionToken)(Q108.2)(Q146.2)<br>export AWS_ACCESS_KEY_IDRoleAccessKeyID; export AWS_SECRET_ACCESS_KEYRoleSecretKey; export AWS_SESSION_TOKENRoleSessionToken\t\t# 2. Create three environment variables to assume the IAM role using output of previous command.(Q141.2)(Q376.2)<br>aws sts get-caller-identity\t\t\t\t\t\t\t\t\t\t\t\t\t\t# 3. Verify IAM role has been assumed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 521550,
            "date": "Tue 11 Jan 2022 14:11",
            "username": "ersahinco",
            "content": "Answer:C<br>Hint: temporary security credentials",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 515605,
            "date": "Mon 03 Jan 2022 11:13",
            "username": "brightosey",
            "content": "C.  AccessKeyId, SecretAccessKey, and SessionToken",
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
        "question_text": "<p>A company uses AWS Organizations to manage multiple accounts. Account A has an application that runs on an Amazon EC2 instance. The application uses the<br>AWS CLI to run automated deployments in Account =D7=80=E2=80=99. An administrator set up cross-account access by using an EC2 IAM service role in Account A and an IAM role in Account =D7=80=E2=80=99.<br>The application uses the following command to assume the IAM role in Account =D7=80=E2=80=99 but is unable to deploy anything in Account =D7=80=E2=80=99. aws sts assume-role --role-arn `am:aws:iam::&lt;AccountB-ID&gt;:role/AccountB-Role` --role-session-name AccountB-Role-Session<br>Which step is needed next so that the application can successfully use the credentials that it obtains by using the role in Account B?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#432",
            "answers": [
              {
                "choice": "<p>A. Configure the access key and secret access key of a valid IAM user from Account =D7=80=E2=80=99 in the environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the access key, secret access key, and token from the assume-role command in the environment variables.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CLI profile for the EC2 IAM service role in the AWS configuration file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Delete any access keys and secret access keys in the environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 432 discussion",
        "discusstion": [
          {
            "id": 613155,
            "date": "Wed 08 Jun 2022 10:31",
            "username": "Justu",
            "content": "This is about roles, ec2 instance has successfully assumed role, but if there's a aws access tokein in the env variables, aws cli tries to use it firts -> hence delete those from variables so ec2 instance role will be used.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 600489,
            "date": "Thu 12 May 2022 08:28",
            "username": "MikeyJ",
            "content": "The AWS CLI command outputs several pieces of information. Inside the credentials block you need the AccessKeyId, SecretAccessKey, and SessionToken. This example uses the environment variables RoleAccessKeyID, RoleSecretKey, and RoleSessionToken.<br><br>Create three environment variables to assume the IAM role. These environment variables are filled out with this output:<br><br>export AWS_ACCESS_KEY_IDRoleAccessKeyID<br>export AWS_SECRET_ACCESS_KEYRoleSecretKey<br>export AWS_SESSION_TOKENRoleSessionToken<br>---<br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-assume-role-cli/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 535676,
            "date": "Sat 29 Jan 2022 20:28",
            "username": "forgreatspam",
            "content": "Looks very similar to this question:<br>https://stackoverflow.com/questions/63241009/aws-sts-assume-role-in-one-command",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515657,
            "date": "Mon 03 Jan 2022 12:49",
            "username": "dencccdencccCHRIS12722222",
            "content": "Question is too vague. It's not clear for me if he tries to run the account from within the application in account A or from his local machine connected to account A. if it's from his local machine I would go for B, if it's from within the EC2 I would go for D. AnswerB<br>For EC2: Unsetting existing environment variables will not configure the AccessKeyId, SecretAccessKey, and SessionToken from the sts:assume-role API call.",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 515658,
            "date": "Mon 03 Jan 2022 12:50",
            "username": "dencccCHRIS12722222",
            "content": "if it's from his local machine I would go for B, if it's from within the EC2 I would go for D. AnswerB<br>For EC2: Unsetting existing environment variables will not configure the AccessKeyId, SecretAccessKey, and SessionToken from the sts:assume-role API call.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 517582,
            "date": "Wed 05 Jan 2022 15:58",
            "username": "CHRIS12722222",
            "content": "AnswerB<br>For EC2: Unsetting existing environment variables will not configure the AccessKeyId, SecretAccessKey, and SessionToken from the sts:assume-role API call.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513631,
            "date": "Thu 30 Dec 2021 19:52",
            "username": "claudiadlr",
            "content": "I'll go with \\\"B\\\" - \\\"The AWS CLI command outputs several pieces of information. Inside the credentials block you need the AccessKeyId, SecretAccessKey, and SessionToken.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 513231,
            "date": "Thu 30 Dec 2021 11:15",
            "username": "Gaurav_GGG",
            "content": "Question is not clear in terms of which account did what as there are some typing errors.<br><br>Based on assumption of what question might be asking. I would be go with D.  Once you obtain temp credentials using STS, you do not need Access Key and Secret key. You can delete it.",
            "upvote_count": "2",
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
        "question_text": "<p>A developer wants to implement Amazon EC2 Auto Scaling for a web application The developer wants to ensure that sessions will not be lost during scale-in events.<br>How can the developer maintain the session state and share it across the EC2 instances?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#433",
            "answers": [
              {
                "choice": "<p>A. Write the sessions to an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to each EC2 instance in the group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the sessions in an Amazon ElastiCache for Memcached cluster. Configure the application to use the Memcached API.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Publish the sessions to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe each EC2 instance in the group to the topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Write the sessions to an Amazon Redshift cluster. Configure the application to use the Amazon Redshift API.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 433 discussion",
        "discusstion": [
          {
            "id": 704261,
            "date": "Wed 26 Oct 2022 01:45",
            "username": "cloud_collector",
            "content": "Amazon ElastiCache is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution.<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 590535,
            "date": "Sat 23 Apr 2022 12:11",
            "username": "Ivanyan",
            "content": "B.  Store the sessions in an Amazon ElastiCache for Memcached cluster. Configure the application to use the Memcached API.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 522764,
            "date": "Thu 13 Jan 2022 10:54",
            "username": "phattran",
            "content": "B is correct anwser.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#435",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is running an application on an Amazon EC2 instance. When the application tries to read an Amazon S3 bucket the application fails. The developer notices that the associated IAM role is missing the S3 read permission. The developer needs to give the application the ability to read the S3 bucket.<br>Which solution will meet this requirement with the LEAST application disruption?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#435",
            "answers": [
              {
                "choice": "<p>A. Add the permission to the role. Terminate the existing EC2 instance. Launch a new EC2 instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the permission to the role so that the change will take effect automatically<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add the permission to the role. Hibernate and restart the existing EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the permission to the S3 bucket. Restart the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 435 discussion",
        "discusstion": [
          {
            "id": 515123,
            "date": "Sun 02 Jan 2022 19:08",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 545699,
            "date": "Sat 12 Feb 2022 08:34",
            "username": "nlbr",
            "content": "It is B.  Not need to restart.<br>AIM role changes directly affect the permission.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 532180,
            "date": "Tue 25 Jan 2022 15:09",
            "username": "Rmnvcc",
            "content": "Indeed it is B, no need to restart",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 527889,
            "date": "Wed 19 Jan 2022 21:22",
            "username": "eukalix",
            "content": "It is B. ",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514047,
            "date": "Fri 31 Dec 2021 12:33",
            "username": "ayush_1995ayush_1995",
            "content": "no need of restartanswer is B -> Add the permission to the role so that the change will take effect automatically",
            "upvote_count": "25",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 514049,
            "date": "Fri 31 Dec 2021 12:33",
            "username": "ayush_1995",
            "content": "answer is B -> Add the permission to the role so that the change will take effect automatically",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 514028,
            "date": "Fri 31 Dec 2021 11:26",
            "username": "successzy",
            "content": "Ans: B, after adding additional policy to iam role, it is immediacy effected.",
            "upvote_count": "4",
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
        "question_text": "<p>A developer is using Amazon API Gateway as an HTTP proxy to a backend endpoint. There are three separate environments development, testing, and production. Each environment has a corresponding stage in the API.<br>The developer needs to direct traffic to different backend endpoints for each of these stages without creating a separate API for each stage.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#436",
            "answers": [
              {
                "choice": "<p>A. Add a model to the API. Add a schema to differentiate the different backend endpoints<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create stage variables. Configure the variables in the HTTP integration request of the API.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use API custom authorizers to create an authorizer for each of the different stages.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the integration response of the API to add different backend endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 436 discussion",
        "discusstion": [
          {
            "id": 515117,
            "date": "Sun 02 Jan 2022 18:58",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 704247,
            "date": "Wed 26 Oct 2022 01:19",
            "username": "cloud_collector",
            "content": "With deployment stages in API Gateway, you can manage multiple release stages for each API, such as alpha, beta, and production. Using stage variables you can configure an API deployment stage to interact with different backend endpoints.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/stage-variables.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 600164,
            "date": "Wed 11 May 2022 16:26",
            "username": "MikeyJ",
            "content": "Stage variables act like environment variables and can be used to change the behavior of your API Gateway methods for each deployment stage; for example, making it possible to reach a different back end depending on which stage the API is running on.<br><br>https://aws.amazon.com/blogs/compute/using-api-gateway-stage-variables-to-manage-lambda-functions/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 520665,
            "date": "Mon 10 Jan 2022 06:28",
            "username": "ej123",
            "content": "weird but I think B",
            "upvote_count": "3",
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
        "question_text": "<p>A physician's office management application requires that all data in transit between an EC2 instance and an Amazon EBS volume be encrypted.<br>Which of the following techniques fulfills this requirement? (Choose two.)<br></p>",
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
                "choice": "<p>A. Create encrypted snapshots into Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon RDS with encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use IAM roles to limit access to the Amazon EBS volume.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable EBS encryption.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Leverage OS-level encryption.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 438 discussion",
        "discusstion": [
          {
            "id": 513931,
            "date": "Fri 31 Dec 2021 08:22",
            "username": "ayush_1995",
            "content": "ans: D and E",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 518735,
            "date": "Fri 07 Jan 2022 04:11",
            "username": "msenguptaJP_PAawscloudlearner321awscloudlearner32177777",
            "content": "C -> You need to enable EBS encryption otherwise the data is not secure<br>D -> EC2 is being used to access EBS so IAM roles are the most secure.<br><br>A is useful when transferring an encrypted EBS from one AZ to another or when encrypting an unencrypted EBS<br><br>B and E have nothing to do with ensuring secure access of data from EBS by EC2 instanceIAM role for EBS volumesecurity ?EBS is attached to EC2. IAM role to limit access to EC2 instances and ideally security groups on top of it.actually, KMS permission is required for users to decrypt the encrypted EBS volume.C,D - This doc explains it all<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
            "upvote_count": "82111",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 519818,
            "date": "Sun 09 Jan 2022 00:17",
            "username": "JP_PAawscloudlearner321awscloudlearner321",
            "content": "IAM role for EBS volumesecurity ?EBS is attached to EC2. IAM role to limit access to EC2 instances and ideally security groups on top of it.actually, KMS permission is required for users to decrypt the encrypted EBS volume.",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 629386,
            "date": "Sun 10 Jul 2022 02:23",
            "username": "awscloudlearner321",
            "content": "EBS is attached to EC2. IAM role to limit access to EC2 instances and ideally security groups on top of it.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 629387,
            "date": "Sun 10 Jul 2022 02:26",
            "username": "awscloudlearner321",
            "content": "actually, KMS permission is required for users to decrypt the encrypted EBS volume.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 527745,
            "date": "Wed 19 Jan 2022 17:41",
            "username": "77777",
            "content": "C,D - This doc explains it all<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 624179,
            "date": "Tue 28 Jun 2022 20:44",
            "username": "Gomer",
            "content": "The question is vague, but I think the answer is C & D if the actual purpose of the \\\"role\\\" is to control KMS access to encrypt/decrypt EBS data.Makes more sense if you review the URL:<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 609385,
            "date": "Mon 30 May 2022 20:04",
            "username": "AulaitQM",
            "content": "I vote for DE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 604782,
            "date": "Sat 21 May 2022 11:29",
            "username": "asim_rasheed",
            "content": "D and E because IAM role is for access, RDS has no relevance here, A talks about encryption at rest and not trnasit, so only D and E makes perfect sense here",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 599398,
            "date": "Tue 10 May 2022 06:37",
            "username": "Asim17",
            "content": "D & E since it requires IN transit encryption",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590180,
            "date": "Fri 22 Apr 2022 20:04",
            "username": "mgm7JYS94",
            "content": "IAM roles has nothing to do with encryption.The OS layer can use encryption too before the data is written to the block device (EBS).Should I only use encryption for protection?<br>It is not asking for encryption, it is asking for \\\"protection.\\\"",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 646965,
            "date": "Mon 15 Aug 2022 02:56",
            "username": "JYS94",
            "content": "Should I only use encryption for protection?<br>It is not asking for encryption, it is asking for \\\"protection.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 589478,
            "date": "Thu 21 Apr 2022 17:18",
            "username": "Robledo",
            "content": "D and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 586662,
            "date": "Sat 16 Apr 2022 09:52",
            "username": "cloudMaster",
            "content": "Ans: A,D<br><br>A: EBS snapshot is stored in S3.<br>B: enable encryption for EBS volume.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 558616,
            "date": "Tue 01 Mar 2022 07:28",
            "username": "zoliv",
            "content": "voting D and E.  C does not make sense in this case. D & E both provide file encyption at storage level (in this case EBS)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 523357,
            "date": "Fri 14 Jan 2022 06:21",
            "username": "Anand178",
            "content": "Can Anyone answer the right answer?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515467,
            "date": "Mon 03 Jan 2022 09:01",
            "username": "mvsnogueira2021",
            "content": "I agree with D and E ..<br>The other 3 does not make sense.<br>B is talking about RDS. This question does not talk about RDS<br>C - Is about access to EBS<br>A - Why save in a S3 ?",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 513769,
            "date": "Fri 31 Dec 2021 00:00",
            "username": "Bhargav2211",
            "content": "Hey, can someone help me with this answer?",
            "upvote_count": "2",
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
        "question_text": "<p>A gaming company has deployed a web portal on AWS Elastic Beanstalk. The company sometimes needs to deploy new versions three or four times in a day.<br>The company needs to deploy new features for all users as quickly as possible. The solution must minimize performance impact and must maximize availability.<br>What solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#439",
            "answers": [
              {
                "choice": "<p>A. Use a rolling deployment policy to deploy to Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an immutable deployment policy to deploy to Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an all-at-once deployment policy to deploy to Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a canary deployment strategy to deploy changes to Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 439 discussion",
        "discusstion": [
          {
            "id": 643383,
            "date": "Sat 06 Aug 2022 14:40",
            "username": "tiaanvdr",
            "content": "Why does the \\\"correct solution\\\" often differ? Is the correct solution just decided upon by some mod, or is it the official correct solution?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 621670,
            "date": "Fri 24 Jun 2022 15:19",
            "username": "pierpaolotiaanvdr",
            "content": "the Rolling policy does not guarantee immediate availability to all users.<br>So the correct answer is B. Why would A then be marked as the \\\"correct\\\" answer, who decides what the correct answer is?",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 643384,
            "date": "Sat 06 Aug 2022 14:41",
            "username": "tiaanvdr",
            "content": "Why would A then be marked as the \\\"correct\\\" answer, who decides what the correct answer is?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 617321,
            "date": "Thu 16 Jun 2022 18:17",
            "username": "cloudMaster",
            "content": "Ans C : (keyword rapid roll out)<br><br>All at once =E2=80=93 The quickest deployment method. Suitable if you can accept a short loss of service, and if quick deployments are important to you. With this method, Elastic Beanstalk deploys the new application version to each instance. Then, the web proxy or application server might need to restart. As a result, your application might be unavailable to users (or have low availability) for a short time.<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 530793,
            "date": "Sun 23 Jan 2022 21:28",
            "username": "Nicolas_21",
            "content": "Answer B",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521327,
            "date": "Tue 11 Jan 2022 07:39",
            "username": "SrinathK",
            "content": "B is Correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 520825,
            "date": "Mon 10 Jan 2022 13:06",
            "username": "jack0155",
            "content": "B immutable",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515616,
            "date": "Mon 03 Jan 2022 11:28",
            "username": "[Removed]",
            "content": "Immutable B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514675,
            "date": "Sat 01 Jan 2022 22:01",
            "username": "CHRIS12722222denccc",
            "content": "B.  Canary deployment does not roll out features to all users, you need to split traffic. Minimal performance effect & max availability eliminates Rolling and All-at-once deployments.Agree w B",
            "upvote_count": "42",
            "selected_answers": ""
          },
          {
            "id": 515019,
            "date": "Sun 02 Jan 2022 15:33",
            "username": "denccc",
            "content": "Agree w B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      }
    ]
  }