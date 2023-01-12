var DVA_C01_Part4 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#301",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business intelligence application runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Application-level audits require a searchable log of all API calls from users to the application. The application's developers must store the logs centrally on AWS.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Install the Amazon CloudWatch agent on the Amazon EC2 host that runs Fargate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the awslogs log driver in the ECS task definition.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure AWS CloudTrail for the ECS containers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install the ECS logs collector on the ECS hosts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 301 discussion",
        "discusstion": [
          {
            "id": 743977,
            "date": "Tue 13 Dec 2022 13:14",
            "username": "mrbig00",
            "content": "The correct solution is option B.  Configuring the awslogs log driver in the ECS task definition will allow the application to store the logs centrally on AWS. The awslogs log driver sends logs to Amazon CloudWatch Logs, which is a managed service that provides search and analysis of log data. This solution will meet the requirements of storing the logs centrally on AWS and making them searchable. Installing the Amazon CloudWatch agent on the Amazon EC2 host or installing the ECS logs collector on the ECS hosts will not work because the application is running on AWS Fargate and not on Amazon EC2. AWS CloudTrail is not a suitable solution because it is used to record API calls made to AWS services, not application-level API calls.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 742727,
            "date": "Mon 12 Dec 2022 12:47",
            "username": "fabriciollf",
            "content": "Reference documentation:<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732490,
            "date": "Thu 01 Dec 2022 11:21",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730454,
            "date": "Tue 29 Nov 2022 14:35",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_awslogs.html<br><br>Using the awslogs log driver:<br>You can configure the containers in your tasks to send log information to CloudWatch Logs. If you do this, you can view the logs from the containers in your Fargate tasks.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729347,
            "date": "Mon 28 Nov 2022 16:55",
            "username": "JohnStanley",
            "content": "B<br><br>https://www.datadoghq.com/blog/tools-for-collecting-aws-fargate-metrics/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727419,
            "date": "Sat 26 Nov 2022 10:40",
            "username": "kapil206001geetha0489DrCloud",
            "content": "D<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/logging-using-cloudtrail.htmlunable to find why D is the answer in this reference. Can you please explainGeetha: \\\"D\\\" is not correct. Reason: AWS Fargate is a managed service. We can't install at host level. https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 729861,
            "date": "Tue 29 Nov 2022 03:32",
            "username": "geetha0489DrCloud",
            "content": "unable to find why D is the answer in this reference. Can you please explainGeetha: \\\"D\\\" is not correct. Reason: AWS Fargate is a managed service. We can't install at host level. https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 730498,
            "date": "Tue 29 Nov 2022 15:25",
            "username": "DrCloud",
            "content": "Geetha: \\\"D\\\" is not correct. Reason: AWS Fargate is a managed service. We can't install at host level. https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
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
        "question_text": "<p>A company hosts a client-side web application for one of its subsidiaries on Amazon S3. The web application can be accessed through Amazon CloudFront from https://www.example.com. After a successful rollout, the company wants to host three more client-side web applications for its remaining subsidiaries on three separate S3 buckets.<br><br>To achieve this goal, a developer moves all the common JavaScript files and web fonts to a central S3 bucket that serves the web applications. However, during testing, the developer notices that the browser blocks the JavaScript files and web fonts.<br><br>What should the developer do to prevent the browser from blocking the JavaScript files and web fonts?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#302",
            "answers": [
              {
                "choice": "<p>A. Create four access points that allow access to the central S3 bucket. Assign an access point to each web application bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a bucket policy that allows access to the central S3 bucket. Attach the bucket policy to the central S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a cross-origin resource sharing (CORS) configuration that allows access to the central S3 bucket. Add the CORS configuration to the central S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Content-MD5 header that provides a message integrity check for the central S3 bucket. Insert the Content-MD5 header for each web application request.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 302 discussion",
        "discusstion": [
          {
            "id": 730467,
            "date": "Tue 29 Nov 2022 14:43",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html<br><br>Using cross-origin resource sharing (CORS):<br>Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727528,
            "date": "Sat 26 Nov 2022 14:16",
            "username": "k1kavi1",
            "content": "I agree",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727508,
            "date": "Sat 26 Nov 2022 13:33",
            "username": "michaldavid",
            "content": "C agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#303",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a new application. The company needs to secure sensitive configuration data such as database connection strings, application license codes, and API keys that the application uses to access external resources. The company must track access to the configuration data for auditing purposes. The resources are managed outside the application.<br><br>The company is not required to manage rotation of the connection strings, license codes, and API keys in the application. The company must implement a solution to securely store the configuration data and to give the application access to the configuration data. The solution must comply with security best practices.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
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
                "choice": "<p>A. Store the configuration data in an encrypted file on the source code bundle. Grant the application access by using IAM policies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the configuration data in AWS Systems Manager Parameter Store. Grant the application access by using IAM policies.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the configuration data on an Amazon Elastic Block Store (Amazon EBS) encrypted volume. Attach the EBS volume to an Amazon EC2 instance to provide the application with access to the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the configuration data in AWS Secrets Manager. Grant the application access by using IAM policies.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 303 discussion",
        "discusstion": [
          {
            "id": 744970,
            "date": "Wed 14 Dec 2022 11:36",
            "username": "fabriciollf",
            "content": "B<br>System manager parameter is cost effective since customer doesnot want rotation .",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 743979,
            "date": "Tue 13 Dec 2022 13:16",
            "username": "mrbig00",
            "content": "The correct solution is option B.  Storing the configuration data in AWS Systems Manager Parameter Store and granting the application access using IAM policies will meet the requirements of securely storing the configuration data and giving the application access to it. AWS Systems Manager Parameter Store is a managed service that provides a secure store for configuration data and allows for auditing of access to the data. This solution will be cost-effective because it does not require the company to manage the rotation of the connection strings, license codes, and API keys. Storing the data in an encrypted file on the source code bundle or on an Amazon EBS encrypted volume may not be secure enough to protect sensitive data. Using AWS Secrets Manager would be an appropriate solution, but it may not be as cost-effective as using AWS Systems Manager Parameter Store.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731545,
            "date": "Wed 30 Nov 2022 14:49",
            "username": "DrCloud",
            "content": "https://aws.amazon.com/blogs/mt/the-right-way-to-store-secrets-using-parameter-store/<br><br>https://docs.aws.amazon.com/managedservices/latest/userguide/sys-man-param-store.html<br>AWS Systems Manager Parameter Store (AMS SSPS):<br>AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, and license codes as parameter values.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727531,
            "date": "Sat 26 Nov 2022 14:19",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727509,
            "date": "Sat 26 Nov 2022 13:35",
            "username": "michaldavid",
            "content": "This is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727422,
            "date": "Sat 26 Nov 2022 10:45",
            "username": "kapil206001",
            "content": "B<br>System manager parameter is cost effectivesince customer doesnot want rotation .",
            "upvote_count": "2",
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
        "question_text": "<p>A developer deploys a custom application to three Amazon EC2 instances. The application processes messages from an Amazon Simple Queue Service (Amazon SQS) standard queue with default settings. When the developer runs a load test on the Amazon SQS queue, the developer discovers that the application processes many messages multiple times.<br><br>How can the developer ensure that the application processes each message exactly once?</p>",
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
                "choice": "<p>A. Modify the SQS standard queue to an SQS FIFO queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Process the messages on one EC2 instance instead of three instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new SQS FIFO queue. Point the application to the new queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the DelaySeconds value on the current SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 304 discussion",
        "discusstion": [
          {
            "id": 752875,
            "date": "Thu 22 Dec 2022 00:45",
            "username": "Nosal",
            "content": "You can't convert an existing standard queue into a FIFO queue. To make the move, you must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 743983,
            "date": "Tue 13 Dec 2022 13:20",
            "username": "mrbig00",
            "content": "The correct solution is option A.  Modifying the SQS standard queue to an SQS FIFO queue will ensure that the application processes each message exactly once. SQS FIFO queues guarantee that messages are delivered and processed in the order in which they are sent, and that each message is processed exactly once. Using three EC2 instances to process messages may cause some messages to be processed multiple times. Creating a new SQS FIFO queue and pointing the application to it would work, but modifying the existing queue is a simpler solution. Increasing the DelaySeconds value on the queue would not help because it would not change the fact that messages may be processed multiple times.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727534,
            "date": "Sat 26 Nov 2022 14:20",
            "username": "k1kavi1",
            "content": "Create new FIFO queue",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727510,
            "date": "Sat 26 Nov 2022 13:39",
            "username": "michaldavid",
            "content": "D is correct. Order of the messaged isn't the issues here DrCloud",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 725847,
            "date": "Thu 24 Nov 2022 14:12",
            "username": "DrCloud",
            "content": "Ans: C<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.html<br>Moving from a standard queue to a FIFO queue:<br>If you have an existing application that uses standard queues and you want to take advantage of the ordering or exactly-once processing features of FIFO queues, you need to configure the queue and your application correctly.<br>Note:<br>You can't convert an existing standard queue into a FIFO queue. To make the move, you must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#305",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running its website on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. A developer needs to secure the internet-facing connection with HTTPS. The developer uses AWS Certificate Manager (ACM) to issue an X.509 certificate.<br><br>What should the developer do to secure the connection?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#305",
            "answers": [
              {
                "choice": "<p>A. Configure the ALB to use the X.509 certificate by using the AWS Management Console.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure each EC2 instance to use the same X.509 certificate by using the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Export the root key of the X.509 certificate to an Amazon S3 bucket. Configure each EC2 instance to use the same X.509 certificate from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Export the root key of the X.509 certificate to an Amazon S3 bucket. Configure the ALB to use the X.509 certificate from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 305 discussion",
        "discusstion": [
          {
            "id": 743991,
            "date": "Tue 13 Dec 2022 13:26",
            "username": "mrbig00",
            "content": "The correct solution is option A.  Configuring the ALB to use the X.509 certificate will secure the internet-facing connection with HTTPS. The developer can use the AWS Management Console to configure the ALB to use the X.509 certificate that was issued by ACM. This will ensure that the connection between the user's web browser and the ALB is encrypted using HTTPS. Configuring each EC2 instance to use the same X.509 certificate would not be necessary because the ALB will handle the SSL/TLS termination and encrypt the connection to the instances. Exporting the root key of the X.509 certificate to an S3 bucket and configuring the ALB or the EC2 instances to use it from the S3 bucket would not work because ACM certificates are managed by AWS and cannot be exported.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727537,
            "date": "Sat 26 Nov 2022 14:23",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727511,
            "date": "Sat 26 Nov 2022 13:41",
            "username": "michaldavid",
            "content": "I go with A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725850,
            "date": "Thu 24 Nov 2022 14:27",
            "username": "DrCloud",
            "content": "Ans: A<br>https://aws.amazon.com/premiumsupport/knowledge-center/configure-acm-certificates-ec2/<br>https://aws.amazon.com/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/<br>Configuring an Amazon Issued ACM public certificate for a website that's hosted on an EC2 instance requires exporting the certificate. However, you can't export the certificate because ACM manages the private key that signs and creates the certificate.<br>Instead, you can associate an ACM certificate with a load balancer or an ACM SSL/TLS certificate with a CloudFront distribution.<br>Associate an ACM SSL certificate with an Application Load Balancer<br>Open the Amazon EC2 console.<br>In the navigation pane, choose Load Balancers, and then choose your Application Load Balancer.<br>Choose Add listener.<br>For Protocol, choose HTTPS.<br>For port, choose 443.<br>For Default action(s), choose Forward to, and then select your ALB target group from the dropdown list.<br>For Default SSL certificate, choose From ACM (recommended) and then choose the ACM certificate.<br>Choose Save.",
            "upvote_count": "3",
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
        "question_text": "<p>A developer uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to store data in Amazon S3. The developer needs to decrypt and download the encrypted objects by using the GetObject API call.<br><br>What is the LEAST amount of information that the developer must provide in the API call to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#306",
            "answers": [
              {
                "choice": "<p>A. The S3 object key only<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The S3 object key and the encryption key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The S3 object key and the Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The S3 object key and a randomly salted Hash-based Message Authentication Code (HMAC) value of the encryption key<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 306 discussion",
        "discusstion": [
          {
            "id": 743993,
            "date": "Tue 13 Dec 2022 13:28",
            "username": "mrbig00",
            "content": "The correct answer is the S3 object key only. When using SSE-S3 to encrypt objects in Amazon S3, the encryption keys are managed by Amazon S3. To decrypt and download encrypted objects using the GetObject API call, the developer only needs to provide the S3 object key. Amazon S3 will use the encryption keys that it manages to decrypt the object before returning it to the developer. Providing the encryption key or the ARN of the AWS KMS key would not be necessary because the encryption keys are managed by Amazon S3. Providing a salted HMAC value of the encryption key would not be possible because the developer does not have access to the encryption key.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732496,
            "date": "Thu 01 Dec 2022 11:30",
            "username": "k1kavi1",
            "content": "Agree with A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732487,
            "date": "Thu 01 Dec 2022 11:17",
            "username": "SoMaL69",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html<br>Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS) or server-side encryption with Amazon S3=E2=80=93managed encryption keys (SSE-S3). If your object does use these types of keys, you'll get an HTTP 400 BadRequest error.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725901,
            "date": "Thu 24 Nov 2022 15:08",
            "username": "DrCloud",
            "content": "Ans: A<br>Ask is, \\\"LEAST amount of information\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html#API_GetObject_Examples<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/get-object.html<br>Sample Request:<br>The following request returns the object my-image.jpg.<br>GET /my-image.jpg HTTP/1.1<br>Host: bucket.s3.<Region>.amazonaws.com<br>Date: Mon, 3 Oct 2016 22:32:00 GMT<br>Authorization: authorization string<br><br>The following example uses the get-object command to download an object from Amazon S3:<br>aws s3api get-object --bucket text-content --key dir/my_images.tar.bz2 my_images.tar.bz2",
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
        "question_text": "<p>A developer is managing an application that uploads user files to an Amazon S3 bucket named companybucket. The company wants to maintain copies of all the files uploaded by users for compliance purposes, while ensuring users still have access to the data through the application.<br><br>Which IAM permissions should be applied to users to ensure they can create but not remove files from the bucket?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#307",
            "answers": [
              {
                "choice": "<p>A. <br></p>",
                "correct": false,
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
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 307 discussion",
        "discusstion": [
          {
            "id": 743996,
            "date": "Tue 13 Dec 2022 13:30",
            "username": "mrbig00",
            "content": "To ensure that users can create but not remove files from the Amazon S3 bucket, the developer should apply the following IAM permissions to the users:<br><br>s3:PutObject: This permission allows users to add objects to the bucket.<br>s3:GetObject: This permission allows users to download the objects in the bucket.<br>The developer should not grant the s3:DeleteObject permission, which would allow users to remove objects from the bucket. By not granting this permission, the company can maintain copies of all files uploaded by users for compliance purposes, while still allowing users to access the data through the application.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727541,
            "date": "Sat 26 Nov 2022 14:28",
            "username": "k1kavi1",
            "content": "Choosing D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727516,
            "date": "Sat 26 Nov 2022 13:51",
            "username": "michaldavid",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 725967,
            "date": "Thu 24 Nov 2022 15:50",
            "username": "DrCloud",
            "content": "Ans: D<br>To accomplish: \\\"can create but not remove files\\\"<br>-- Need: \\\"Put Object\\\" <br>-- Don't need: \\\"Delete Object\\\"<br>https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html",
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
        "question_text": "<p>A company is developing a microservice that will manage customer account data in an Amazon DynamoDB table. Insert, update, and delete requests will be rare. Read traffic will be heavy. The company must have the ability to access customer data quickly by using a customer ID.  The microservice can tolerate stale data.<br><br>Which solution will meet these requirements with the FEWEST possible read capacity units (RCUs)?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#308",
            "answers": [
              {
                "choice": "<p>A. Read the table by using eventually consistent reads.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Read the table by using strongly consistent reads.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Read the table by using transactional reads.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Read the table by using strongly consistent PartiQL queries.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 308 discussion",
        "discusstion": [
          {
            "id": 743997,
            "date": "Tue 13 Dec 2022 13:31",
            "username": "mrbig00",
            "content": "The correct solution is option A.  Reading the table by using eventually consistent reads will meet the requirements with the fewest possible read capacity units (RCUs). When using eventually consistent reads, DynamoDB returns the latest data that it has in its cache, which may be slightly out of date. This is acceptable in this case because the microservice can tolerate stale data. Using eventually consistent reads will reduce the number of RCUs required to read the table because DynamoDB does not need to wait for all copies of the data to be updated before returning the data. Using strongly consistent reads or transactional reads would require more RCUs because these read modes require DynamoDB to wait for all copies of the data to be updated before returning the data. Using PartiQL queries would not be necessary because the requirements can be met using regular read operations.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727617,
            "date": "Sat 26 Nov 2022 16:40",
            "username": "k1kavi1",
            "content": "A.  Read the table by using eventually consistent reads.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727517,
            "date": "Sat 26 Nov 2022 13:54",
            "username": "michaldavid",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725993,
            "date": "Thu 24 Nov 2022 16:15",
            "username": "DrCloud",
            "content": "Ans: A<br>Key points: \\\"Read heavy\\\", \\\"access data quickly\\\", \\\"can tolerate stale data\\\"<br>To achieve: \\\"FEWEST\\\" possible (RCUs)<br><br>For items up to 4 KB in size, one RCU can perform one strongly consistent read request per second.<br>For items up to 4 KB in size, one RCU can perform two eventually consistent read requests per second.<br>Transactional read requests require two RCUs to perform one read per second for items up to 4 KB. <br><br>For example,<br>a strongly consistent read of an 8 KB item would require two RCUs,<br>an eventually consistent read of an 8 KB item would require one RCU,<br>and a transactional read of an 8 KB item would require four RCUs.<br><br>https://aws.amazon.com/dynamodb/pricing/provisioned/",
            "upvote_count": "4",
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
        "question_text": "<p>A developer deploys an ecommerce application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. The EC2 instances are based on an Amazon Machine Image (AMI) that uses an Amazon Elastic Block Store (Amazon EBS) root volume. After deployment, the developer notices that a third of the instances seem to be idle. These instances are not receiving requests from the load balancer. The developer verifies that all the instances are registered with the load balancer. The developer must implement a solution to allow the EC2 instances to receive requests from the load balancer.<br><br>Which action will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#309",
            "answers": [
              {
                "choice": "<p>A. Reregister the failed instances with the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable all Availability Zones for the ALB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the instance refresh feature to redeploy the EC2 Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Restart the EC2 instances that are not receiving traffic.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 309 discussion",
        "discusstion": [
          {
            "id": 744000,
            "date": "Tue 13 Dec 2022 13:34",
            "username": "mrbig00by116549",
            "content": "The correct action is to enable all Availability Zones for the ALB.  This will allow the ALB to distribute requests across all registered instances, regardless of which Availability Zone they are in. By enabling all Availability Zones, the developer can ensure that the EC2 instances that are not receiving traffic will start receiving requests from the ALB.  Reregistering the failed instances with the ALB or using the instance refresh feature to redeploy the EC2 Auto Scaling group would not solve the problem because the instances are already registered and the instance refresh feature does not support AMIs with EBS root volumes. Restarting the EC2 instances that are not receiving traffic would not solve the problem because the instances are registered with the ALB and are not failing.hey qq please, if all the AZ were not enabled will the instances be registered still please?",
            "upvote_count": "61",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 765950,
            "date": "Wed 04 Jan 2023 18:33",
            "username": "by116549",
            "content": "hey qq please, if all the AZ were not enabled will the instances be registered still please?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732502,
            "date": "Thu 01 Dec 2022 11:35",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727518,
            "date": "Sat 26 Nov 2022 13:56",
            "username": "michaldavid",
            "content": "CCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726034,
            "date": "Thu 24 Nov 2022 17:16",
            "username": "DrCloud",
            "content": "Ans: C<br>https://aws.amazon.com/blogs/compute/introducing-instance-refresh-for-ec2-auto-scaling/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#310",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application stores financial statements in an Amazon S3 bucket. A recent security audit found that the bucket does not comply with company standards. Currently, several IAM policies allow encrypted calls and unencrypted calls to the bucket. The company needs to create a bucket policy that forces all requests to the bucket to use encrypted connections.<br><br>Which solution will meet this requirement?</p>",
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
                "choice": "<p>A. Add a bucket policy with a condition of \"aws:SecureTransport\": \"true\" and an effect of \"Allow.\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a bucket policy with a resource of \"am:aws:s3:::https/bucketname\" and an effect of \"Allow.\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a bucket policy with a condition of \"aws:SecureTransport\": \"false\" and an effect of \"Deny.\"<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a bucket policy with a resource of \"arn:aws:s3:::http/bucketname\" and an effect of \"Deny.\"<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 310 discussion",
        "discusstion": [
          {
            "id": 727631,
            "date": "Sat 26 Nov 2022 16:50",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727521,
            "date": "Sat 26 Nov 2022 13:58",
            "username": "michaldavid",
            "content": "Correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726047,
            "date": "Thu 24 Nov 2022 17:31",
            "username": "DrCloud",
            "content": "Ans: C<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/",
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
        "question_text": "<p>A company uses the AWS SDK for JavaScript in the Browser to build a web application and then hosts the application on Amazon S3. The company wants the application to support 10,000 users concurrently. The company selects Amazon DynamoDB to store user preferences in a table. There is a requirement to uniquely identify users at any scale.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#311",
            "answers": [
              {
                "choice": "<p>A. Create a user cookie. Attach an 1AM role to the S3 bucket that hosts the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an Amazon CloudFront distribution with an origin access identity (OAI) to access the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure and use Amazon Cognito. Access DynamoDB with the authenticated users.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM user for each user. Use fine-grained access control on the DynamoDB table to control access.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 311 discussion",
        "discusstion": [
          {
            "id": 744002,
            "date": "Tue 13 Dec 2022 13:36",
            "username": "mrbig00",
            "content": "The correct solution is to configure and use Amazon Cognito. This will allow the application to support 10,000 users concurrently and will provide a unique identifier for each user. By using Amazon Cognito, the company can authenticate users and then access DynamoDB with the authenticated users to store their preferences in a table. This approach will allow the company to control access to the DynamoDB table and to scale to any number of users. Creating a user cookie or deploying an Amazon CloudFront distribution with an OAI would not solve the problem because these solutions do not provide a way to uniquely identify users or control access to DynamoDB.  Creating an IAM user for each user and using fine-grained access control on the DynamoDB table would not be practical or scalable because it would require the company to manage and maintain a large number of IAM users.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 732580,
            "date": "Thu 01 Dec 2022 13:17",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726054,
            "date": "Thu 24 Nov 2022 17:44",
            "username": "DrCloud",
            "content": "Ans: C<br>When dealing with user profiles in serverless applications we often turn to Cognito for managing their credentials while the app itself will store user entities.<br>https://www.sorenandersen.com/manage-user-profile-data-between-cognito-and-dynamodb/",
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
        "question_text": "<p>An application on AWS is using third-party APIs. A developer needs to monitor API errors in the code. The developer needs to receive notifications if failures reach a set threshold value.<br><br>How can the developer meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#312",
            "answers": [
              {
                "choice": "<p>A. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Email Service (Amazon SES) for notification.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon CloudWatch API error metric. Use Amazon Simple Notification Service (Amazon SNS) for notification.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon CloudWatch API error metric. Use Amazon Simple Email Service (Amazon SES) for notification.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Notification Service (Amazon SNS) for notification.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 312 discussion",
        "discusstion": [
          {
            "id": 727963,
            "date": "Sun 27 Nov 2022 07:40",
            "username": "michaldavid",
            "content": "DDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727635,
            "date": "Sat 26 Nov 2022 16:56",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726071,
            "date": "Thu 24 Nov 2022 18:07",
            "username": "DrCloud",
            "content": "Ans: D<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring_automated_manual.html<br>Creating CloudWatch alarms to monitor API Gateway:<br>You can create a CloudWatch alarm that sends an Amazon SNS message when the alarm changes state. An alarm watches a single metric over a time period you specify, and performs one or more actions based on the value of the metric relative to a given threshold over a number of time periods. The action is a notification sent to an Amazon SNS topic .",
            "upvote_count": "2",
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
        "question_text": "<p>A company is preparing to migrate an application to the company's first AWS environment. Before this migration, a developer is creating a proof-of-concept application to validate a model for building and deploying container-based applications on AWS.<br><br>Which combination of steps should the developer take to deploy the containerized proof-of-concept application with the LEAST operational effort? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#313",
            "answers": [
              {
                "choice": "<p>A. Package the application into a .zip file by using a command line tool. Upload the package to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Package the application into a container image by using the Docker CLI. Upload the image to Amazon Elastic Container Registry (Amazon ECR).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy the application to an Amazon EC2 instance by using AWS CodeDeploy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on AWS Fargate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 313 discussion",
        "discusstion": [
          {
            "id": 732589,
            "date": "Thu 01 Dec 2022 13:21",
            "username": "k1kavi1",
            "content": "Going with B&E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 727964,
            "date": "Sun 27 Nov 2022 07:43",
            "username": "michaldavid",
            "content": "B and E for me",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          }
        ]
      },
      {
        "question_id": "#314",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a web application that processes and tracks votes. A voting device submits the votes to an Amazon S3 bucket named DOC-EXAMPLE-BUCKET. The application needs to record the votes to an Amazon DynamoDB table named Example. The developer writes an AWS Lambda function to process the objects. The developer writes the following policy for the execution role of the Lambda function:<br><br><img src=\"https://img.examtopics.com/aws-certified-developer-associate/image23.png\"><br><br>The developer ran a successful test on the Lambda function. However, the developer could not find a record of the invocation in the logs.<br><br>What should the developer do to record invocations of this function in the logs?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#314",
            "answers": [
              {
                "choice": "<p>A. Modify the Lambda function resource configuration in the AWS Management Console to log Lambda function invocations to Amazon CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the Lambda code to produce event log output. Send the event log output to stdout. Redirect the stdout to Amazon CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the Lambda execution role to have permissions to a create log groups, log streams, and log events in Amazon CloudWatch Logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the Lambda invocation permissions to allow DynamoDB and Amazon S3 to log Lambda actions to Amazon CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 314 discussion",
        "discusstion": [
          {
            "id": 732592,
            "date": "Thu 01 Dec 2022 13:23",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727966,
            "date": "Sun 27 Nov 2022 07:48",
            "username": "michaldavid",
            "content": "This is C to me",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#315",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has written the following IAM policy to provide access to an Amazon S3 bucket:<br><br><img src=\"https://img.examtopics.com/aws-certified-developer-associate/image24.png\"><br><br>Which access does the policy allow regarding the s3:GetObject and s3:PutObject actions?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#315",
            "answers": [
              {
                "choice": "<p>A. Access on all buckets except the \"DOC-EXAMPLE-BUCKET\" bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Access on all buckets that start with \"DOC-EXAMPLE-BUCKET\" except the \"DOC-EXAMPLE-BUCKET/secrets\" bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Access on all objects in the \"DOC-EXAMPLE-BUCKET\" bucket along with access to all S3 actions for objects in the \"DOC-EXAMPLE-BUCKET\" bucket that start with \"secrets\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Access on all objects in the \"DOC-EXAMPLE-BUCKET\" bucket except on objects that start with \"secrets\"<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 315 discussion",
        "discusstion": [
          {
            "id": 731647,
            "date": "Wed 30 Nov 2022 16:06",
            "username": "DrCloud",
            "content": "Meaning:<br>DOC-EXAMPLE-BUCKET > bucket<br>DOC-EXAMPLE-BUCKET/* > contents in the bucket<br><br>In this example,<br>ALLOW all \\\"Objects\\\" > DOC-EXAMPLE-BUCKET/*<br>DENY objects starting with secrets > DOC-EXAMPLE-BUCKET/secrets*<br><br>https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 742712,
            "date": "Mon 12 Dec 2022 12:29",
            "username": "fabriciollf",
            "content": "@DrCloud has the perfect example",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729330,
            "date": "Mon 28 Nov 2022 16:35",
            "username": "lrom",
            "content": "For me D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727968,
            "date": "Sun 27 Nov 2022 07:53",
            "username": "michaldavid",
            "content": "Torn between B and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727641,
            "date": "Sat 26 Nov 2022 17:02",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#316",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building various microservices for an application that will run on Amazon EC2 instances. The developer needs to monitor the end-to-end view of the requests between the microservices and debug any issues in the various microservices.<br><br>What should the developer do to accomplish these tasks?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#316",
            "answers": [
              {
                "choice": "<p>A. Use Amazon CloudWatch to aggregate the microservices' logs and metrics, and build the monitoring dashboard.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CloudTrail to aggregate the microservices' logs and metrics, and build the monitoring dashboard.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS X-Ray SDK to add instrumentation in all the microservices, and monitor using the X-Ray service map.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Health to monitor the health of all the microservices.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 316 discussion",
        "discusstion": [
          {
            "id": 732677,
            "date": "Thu 01 Dec 2022 15:02",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/distributed-monitoring.html#distributed-tracing<br>https://aws.amazon.com/xray/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727969,
            "date": "Sun 27 Nov 2022 07:54",
            "username": "michaldavid",
            "content": "CCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727644,
            "date": "Sat 26 Nov 2022 17:04",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#317",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using AWS CodeDeploy to automate a company's application deployments to Amazon EC2.<br><br>Which application specification file properties are required to ensure the software deployments do not fail? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#317",
            "answers": [
              {
                "choice": "<p>A. The file must be a JSON-formatted file named appspec.json.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The file must be a YAML-formatted file named appspec.yml.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The file must be stored in AWS CodeBuild and referenced from the application's source code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The file must be placed in the root of the directory structure of the application's source code.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. The file must be stored in Amazon S3 and referenced from the application's source code.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 317 discussion",
        "discusstion": [
          {
            "id": 733144,
            "date": "Thu 01 Dec 2022 23:16",
            "username": "S_S_01",
            "content": "B & D for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727970,
            "date": "Sun 27 Nov 2022 07:56",
            "username": "michaldavid",
            "content": "B and D are correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 727647,
            "date": "Sat 26 Nov 2022 17:06",
            "username": "k1kavi1",
            "content": "Going with B & D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 727450,
            "date": "Sat 26 Nov 2022 11:51",
            "username": "kapil206001",
            "content": "B & D<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#318",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer maintains an Amazon API Gateway REST API. Customers use the API through a frontend UI and Amazon Cognito authentication.<br><br>The developer has a new version of the API that contains new endpoints and backward-incompatible interface changes. The developer needs to provide beta access to other developers on the team without affecting customers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#318",
            "answers": [
              {
                "choice": "<p>A. Define a development stage on the API Gateway API. Instruct the other developers to point the endpoints to the development stage.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define a new API Gateway API that points to the new API application code. Instruct the other developers to point the endpoints to the new API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a query parameter in the API application code that determines which code version to call.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Specify new API Gateway endpoints for the API endpoints that the developer wants to add.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 318 discussion",
        "discusstion": [
          {
            "id": 734566,
            "date": "Sat 03 Dec 2022 17:38",
            "username": "DrCloud",
            "content": "An API stage is a logical reference to a lifecycle state of your API (for example, dev, prod, beta, or v2).<br><br>You can consider an API Gateway stage as a specific lifecycle stage or version of your API.<br>For example:<br>production-stage<br>development-stage<br>beta-stage<br>From these stages you can configure things like throttling and caching.<br>https://stackoverflow.com/questions/47848586/what-is-a-stage-in-the-context-of-amazon-api-gateway",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 733149,
            "date": "Thu 01 Dec 2022 23:23",
            "username": "S_S_01",
            "content": "A with this one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727974,
            "date": "Sun 27 Nov 2022 07:59",
            "username": "michaldavid",
            "content": "I'd go with A on this one",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727650,
            "date": "Sat 26 Nov 2022 17:08",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#319",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company with multiple branch locations has an analytics and reporting application. Each branch office pushes a sales report to a shared Amazon S3 bucket at a predefined time each day. The company has developed an AWS Lambda function that analyzes the reports from all branch offices in a single pass. The Lambda function stores the results in a database.<br><br>The company needs to start the analysis once each day at a specific time.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#319",
            "answers": [
              {
                "choice": "<p>A. Configure an S3 event notification to invoke the Lambda function when a branch office uploads a sales report.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Step Functions state machine that invokes the Lambda function once each day at the predefined time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the Lambda function to run continuously and to begin analysis only at the predefined time each day.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EventBridge scheduled rule that invokes the Lambda function once each day at the predefined time.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 319 discussion",
        "discusstion": [
          {
            "id": 734570,
            "date": "Sat 03 Dec 2022 17:44",
            "username": "DrCloud",
            "content": "Ask: MOST cost-effectively?<br><br>Creating an Amazon EventBridge rule that runs on a schedule:<br>A rule can run in response to an event or at certain time intervals. For example, to periodically run an AWS Lambda function, you can create a rule to run on a schedule.<br><br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 733150,
            "date": "Thu 01 Dec 2022 23:25",
            "username": "S_S_01",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727975,
            "date": "Sun 27 Nov 2022 08:01",
            "username": "michaldavid",
            "content": "DDDDDD",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727654,
            "date": "Sat 26 Nov 2022 17:10",
            "username": "k1kavi1k1kavi1xicomynorxicomynor",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.htmlA - Thinking if S3 event notification is most cost effective.<br>https://eoins.medium.com/comparing-two-ways-to-trigger-lambda-from-s3-b5da8cfe1aeeIt is more cost effective but does not align with the fact that it needs to be ran once a day*It won't be more cost effective as it will run every time an event is triggered vs running only once a day",
            "upvote_count": "2111",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734309,
            "date": "Sat 03 Dec 2022 10:12",
            "username": "k1kavi1xicomynorxicomynor",
            "content": "A - Thinking if S3 event notification is most cost effective.<br>https://eoins.medium.com/comparing-two-ways-to-trigger-lambda-from-s3-b5da8cfe1aeeIt is more cost effective but does not align with the fact that it needs to be ran once a day*It won't be more cost effective as it will run every time an event is triggered vs running only once a day",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 746806,
            "date": "Fri 16 Dec 2022 05:34",
            "username": "xicomynorxicomynor",
            "content": "It is more cost effective but does not align with the fact that it needs to be ran once a day*It won't be more cost effective as it will run every time an event is triggered vs running only once a day",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 746808,
            "date": "Fri 16 Dec 2022 05:34",
            "username": "xicomynor",
            "content": "*It won't be more cost effective as it will run every time an event is triggered vs running only once a day",
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
        "question_text": "<p>A company is expanding the compatibility of its photo-sharing mobile app to hundreds of additional devices with unique screen dimensions and resolutions. Photos are stored in Amazon S3 in their original format and resolution. The company uses an Amazon CloudFront distribution to serve the photos. The app includes the dimension and resolution of the display as GET parameters with every request.<br><br>A developer needs to implement a solution that optimizes the photos that are served to each device to reduce load time and increase photo quality.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#320",
            "answers": [
              {
                "choice": "<p>A. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a dynamic CloudFront origin that automatically maps the request of each device to the corresponding photo variant.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a Lambda@Edge function to route requests to the corresponding photo variant by using request headers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. Change the CloudFront TTL cache policy to the maximum value possible.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. In the same function, store a copy of the processed photos on Amazon S3 for subsequent requests.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 320 discussion",
        "discusstion": [
          {
            "id": 744017,
            "date": "Tue 13 Dec 2022 13:53",
            "username": "mrbig00",
            "content": "C.  Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. Change the CloudFront TTL cache policy to the maximum value possible.<br><br>This solution will meet the requirements most cost-effectively because it allows the developer to use a Lambda@Edge function to optimize the photos on the fly, without the need to pre-generate multiple variants of the photos for different devices. This approach can reduce the overall storage and compute costs associated with generating and storing multiple photo variants. Additionally, changing the CloudFront TTL cache policy to the maximum value possible can help reduce the number of times the Lambda@Edge function needs to be executed, further reducing the cost.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735518,
            "date": "Mon 05 Dec 2022 00:22",
            "username": "SBoksh",
            "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734190,
            "date": "Sat 03 Dec 2022 04:36",
            "username": "ubuntu1234xicomynor",
            "content": "This could be D as well, although C is also technically correct, but the workflow is complete only in D.  as when objects are resized , they need to be saved again to the S3 for cache.<br><br>https://aws.amazon.com/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/They don't need to be saved in order to be cached. They can be cached from Cloudfrontresponse directly, and that's why TTL for cloudfront would be set to maximum TTL",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 746810,
            "date": "Fri 16 Dec 2022 05:36",
            "username": "xicomynor",
            "content": "They don't need to be saved in order to be cached. They can be cached from Cloudfrontresponse directly, and that's why TTL for cloudfront would be set to maximum TTL",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733156,
            "date": "Thu 01 Dec 2022 23:28",
            "username": "S_S_01",
            "content": "C For Me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732607,
            "date": "Thu 01 Dec 2022 13:38",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#321",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is monitoring an application that runs on an Amazon EC2 instance. The developer has configured a custom Amazon CloudWatch metric with data granularity of 1 second. If any issues occur, the developer wants to be notified within 30 seconds by Amazon Simple Notification Service (Amazon SNS).<br><br>What should the developer do to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#321",
            "answers": [
              {
                "choice": "<p>A. Configure a high-resolution CloudWatch alarm.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up a custom CloudWatch dashboard.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon CloudWatch Logs Insights.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change to a default CloudWatch metric.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 321 discussion",
        "discusstion": [
          {
            "id": 733157,
            "date": "Thu 01 Dec 2022 23:28",
            "username": "S_S_01",
            "content": "AAAAAA",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727991,
            "date": "Sun 27 Nov 2022 08:22",
            "username": "michaldavid",
            "content": "AAAAAAA",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727658,
            "date": "Sat 26 Nov 2022 17:16",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/about-aws/whats-new/2017/07/amazon-cloudwatch-introduces-high-resolution-custom-metrics-and-alarms/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#322",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A current architecture uses many Lambda functions invoking one another as a large state machine. The coordination of this state machine is legacy custom code that breaks easily.<br><br>Which AWS Service can help refactor and manage the state machine?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#322",
            "answers": [
              {
                "choice": "<p>A. AWS Data Pipeline<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS SNS with AWS SOS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Elastic MapReduce<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Step Functions<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 322 discussion",
        "discusstion": [
          {
            "id": 733158,
            "date": "Thu 01 Dec 2022 23:29",
            "username": "S_S_01",
            "content": "DDDDDD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727992,
            "date": "Sun 27 Nov 2022 08:22",
            "username": "michaldavid",
            "content": "DDDDDDDD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727662,
            "date": "Sat 26 Nov 2022 17:17",
            "username": "k1kavi1k1kavi1",
            "content": "Agreedhttps://www.examtopics.com/discussions/amazon/view/5235-exam-aws-certified-developer-associate-topic-1-question-10/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727664,
            "date": "Sat 26 Nov 2022 17:20",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/5235-exam-aws-certified-developer-associate-topic-1-question-10/",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is running an application on an Amazon EC2 instance. When the application tries to read an Amazon S3 bucket, the application fails. The developer notices that the associated IAM role is missing the S3 read permission. The developer needs to give the application the ability to read the S3 bucket.<br><br>Which solution will meet this requirement with the LEAST application disruption?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#323",
            "answers": [
              {
                "choice": "<p>A. Add the permission to the role. Terminate the existing EC2 instance. Launch a new EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the permission to the role so that the change will take effect automatically.<br></p>",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 323 discussion",
        "discusstion": [
          {
            "id": 733159,
            "date": "Thu 01 Dec 2022 23:30",
            "username": "S_S_01",
            "content": "B is answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727993,
            "date": "Sun 27 Nov 2022 08:24",
            "username": "michaldavid",
            "content": "No need to restart",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727666,
            "date": "Sat 26 Nov 2022 17:20",
            "username": "k1kavi1",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727496,
            "date": "Sat 26 Nov 2022 13:05",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/69134-exam-aws-certified-developer-associate-topic-1-question-435/",
            "upvote_count": "2",
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
        "question_text": "<p>A company needs to develop a proof of concept for a web service application. The application will show the weather forecast for one of the company's office locations. The application will provide a REST endpoint that clients can call. Where possible, the application should use caching features provided by AWS to limit the number of requests to the backend service. The application backend will receive a small amount of traffic only during testing.<br><br>Which approach should the developer take to provide the REST endpoint MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#324",
            "answers": [
              {
                "choice": "<p>A. Create a container image. Deploy the container image by using Amazon Elastic Kubernetes Service (Amazon EKS). Expose the functionality by using Amazon API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM). Expose the Lambda functionality by using Amazon API Gateway.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a container image. Deploy the container image by using Amazon Elastic Container Service (Amazon ECS). Expose the functionality by using Amazon API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a microservices application in a preferred programming language. Deploy the application to AWS Elastic Beanstalk. Expose the AWS Lambda functionality by using an Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 324 discussion",
        "discusstion": [
          {
            "id": 734630,
            "date": "Sat 03 Dec 2022 19:47",
            "username": "DrCloud",
            "content": "https://aws.amazon.com/blogs/architecture/rate-limiting-strategies-for-serverless-applications/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733161,
            "date": "Thu 01 Dec 2022 23:32",
            "username": "S_S_01",
            "content": "Going With B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727671,
            "date": "Sat 26 Nov 2022 17:24",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#325",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's developer is creating an AWS Lambda function that will read data from an Amazon RDS database. The company's security policies require the database credentials to be encrypted at rest by AWS Key Management Service (AWS KMS) keys. The database credentials must also be automatically rotated. The Lambda function needs to be able to read the database credentials securely.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#325",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Secrets Manager secret for the database credentials encrypted with a KMS key. Modify the Lambda function to retrieve the secret from Secrets Manager. Attach a custom IAM policy to the Lambda function execution role to allow access to secretsmanager:GetSecretValue from the secret's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon S3 bucket for the database credentials. Encrypt the database credentials with server-side encryption with KMS keys (SSE-KMS). Modify the Lambda function to retrieve the database credentials from the S3 bucket. Attach a custom IAM policy to the Lambda function execution role to allow access to S3:GetObject from the S3 bucket's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create SecureString parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the parameter values by using Lambda environment variables. Attach a custom IAM policy to the Lambda function execution role to allow access to ssm:GetParameter from the parameter's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create String parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the parameter values by using Lambda environment variables. Attach a custom IAM policy to the Lambda function execution role to allow access to ssm:GetParameter from the parameter's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 325 discussion",
        "discusstion": [
          {
            "id": 763390,
            "date": "Mon 02 Jan 2023 00:26",
            "username": "rlnd2000",
            "content": "Key requirement > Automatic rotation",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 733164,
            "date": "Thu 01 Dec 2022 23:34",
            "username": "S_S_01",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727999,
            "date": "Sun 27 Nov 2022 08:31",
            "username": "michaldavid",
            "content": "A is correct. Parameter Store doesn't provide automatic rotation",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727674,
            "date": "Sat 26 Nov 2022 17:27",
            "username": "k1kavi1xicomynork1kavi1",
            "content": "SecureString parameters in AWS Systems Manager Parameter StoreParameter Store does not allow rotation so it's A. Agreed. Going with A",
            "upvote_count": "121",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 746811,
            "date": "Fri 16 Dec 2022 05:39",
            "username": "xicomynor",
            "content": "Parameter Store does not allow rotation so it's A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 732611,
            "date": "Thu 01 Dec 2022 13:44",
            "username": "k1kavi1",
            "content": "Agreed. Going with A",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is creating an application that will store personal health information (PHI). The PHI needs to be encrypted at all times. An encrypted Amazon RDS for MySQL DB instance is storing the data. The developer wants to increase the performance of the application by caching frequently accessed data while adding the ability to sort or rank the cached datasets.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#326",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon ElastiCache for Redis instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon ElastiCache for Memcached instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon RDS for MySQL read replica. Connect to the read replica by using SSL. Configure the read replica to store frequently accessed data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon DynamoDB table and a DynamoDB Accelerator (DAX) cluster for the table. Store frequently accessed data in the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 326 discussion",
        "discusstion": [
          {
            "id": 734655,
            "date": "Sat 03 Dec 2022 20:42",
            "username": "DrCloud",
            "content": "key point: \\\"ability to sort or rank the cached datasets\\\"<br><br>When deciding between Memcached and Redis, here are a few questions to consider:<br><br>Are you looking for more advanced data types, such as lists, hashes, bit arrays, HyperLogLogs, and sets? If so, use Redis.<br><br>Does sorting and ranking datasets in memory help you, such as with leaderboards? If so, use Redis.<br><br>https://docs.aws.amazon.com/whitepapers/latest/scale-performance-elasticache/memcached-vs.-redis.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 733220,
            "date": "Fri 02 Dec 2022 00:35",
            "username": "S_S_01",
            "content": "Answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728002,
            "date": "Sun 27 Nov 2022 08:33",
            "username": "michaldavid",
            "content": "I go with A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727678,
            "date": "Sat 26 Nov 2022 17:32",
            "username": "k1kavi1",
            "content": "https://blog.cloudthat.com/amazon-elasticache-an-introduction-and-step-by-step-guide-to-launching-an-elasticache-redis-server/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#327",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages a financial services application that stores a large volume of data in an Amazon DynamoDB table. A developer needs to improve the performance of the DynamoDB read queries without increasing the cost.<br><br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#327",
            "answers": [
              {
                "choice": "<p>A. Use parallel scans.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a local secondary index (LSI).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a DynamoDB Accelerator (DAX) cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Query with the ProjectionExpression parameter.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 327 discussion",
        "discusstion": [
          {
            "id": 762058,
            "date": "Fri 30 Dec 2022 16:19",
            "username": "fe2fe2",
            "content": "The answer cant be A.  It says query not scan. Scan and query different things in DynamoDB. <br>If you check their API pages, you will see Scan has parallel scan option. But in Query API page, there is no such parallel scan option. Because it is not valid for Query.<br><br>In this case, the answer is D. https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 762059,
            "date": "Fri 30 Dec 2022 16:20",
            "username": "fe2",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734659,
            "date": "Sat 03 Dec 2022 20:57",
            "username": "DrCloud",
            "content": "Given: \\\"large volume of data\\\" in an Amazon DynamoDB table.<br><br>Taking advantage of parallel scans:<br>Many applications can benefit from using \\\"parallel Scan\\\" operations rather than sequential scans. For example, an application that processes a large table of historical data can perform a parallel scan much faster than a sequential one.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734195,
            "date": "Sat 03 Dec 2022 04:58",
            "username": "ubuntu1234",
            "content": "C. <br>Applications that are read-intensive, but are also cost-sensitive. With DynamoDB, you provision the number of reads per second that your application requires. If read activity increases, you can increase your tables' provisioned read throughput (at an additional cost). Or, you can offload the activity from your application to a DAX cluster, and reduce the number of read capacity units that you need to purchase otherwise.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 733012,
            "date": "Thu 01 Dec 2022 20:35",
            "username": "fswklotto1",
            "content": "Vote for D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728005,
            "date": "Sun 27 Nov 2022 08:35",
            "username": "michaldavid",
            "content": "I believe A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727681,
            "date": "Sat 26 Nov 2022 17:35",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-query-scan.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#328",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team is working on a mobile app that allows users to upload pictures to Amazon S3. The team expects the app will be used by hundreds of thousands of users during a single event simultaneously. Once the pictures are uploaded, the backend service will scan and parse the pictures for inappropriate content.<br><br>Which approach is the MOST resilient way to achieve this goal, which also smooths out temporary volume spikes for the backend service?</p>",
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
                "choice": "<p>A. Develop an AWS Lambda function to check the upload folder in the S3 bucket. If new uploaded pictures are detected, the Lambda function will scan and parse them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Once a picture is uploaded to Amazon S3, publish the event to an Amazon SQS queue. Use the queue as an event source to trigger an AWS Lambda function. In the Lambda function, scan and parse the picture.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. When the user uploads a picture. invoke an API hosted in Amazon API Gateway. The API will invoke an AWS Lambda function to scan and parse the picture.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a state machine in AWS Step Functions to check the upload folder in the S3 bucket. If a new picture is detected, invoke an AWS Lambda function to scan and parse it.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 328 discussion",
        "discusstion": [
          {
            "id": 728010,
            "date": "Sun 27 Nov 2022 08:39",
            "username": "michaldavid",
            "content": "Too many users will be uploading so can't be A",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727686,
            "date": "Sat 26 Nov 2022 17:38",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28948-exam-aws-certified-developer-associate-topic-1-question-309/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#329",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application that will run on Amazon EC2 instances in an Auto Scaling group. The developer wants to externalize the session state to support the application.<br><br>Which AWS services or resources can the developer use to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#329",
            "answers": [
              {
                "choice": "<p>A. Amazon DynamoDB<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Cognito<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon ElastiCache<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Application Load Balancer<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Amazon Simple Queue Service (Amazon SQS)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 329 discussion",
        "discusstion": [
          {
            "id": 733855,
            "date": "Fri 02 Dec 2022 16:06",
            "username": "SoMaL69",
            "content": "I believe it should be AC because of \\\"externalize the session state\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 733013,
            "date": "Thu 01 Dec 2022 20:40",
            "username": "fswklotto1",
            "content": "Vote for CD, D sticky session",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 728011,
            "date": "Sun 27 Nov 2022 08:41",
            "username": "michaldavid",
            "content": "A and C easy",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 727688,
            "date": "Sat 26 Nov 2022 17:40",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28318-exam-aws-certified-developer-associate-topic-1-question-227/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          }
        ]
      },
      {
        "question_id": "#330",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer registered an AWS Lambda function as a target for an Application Load Balancer (ALB) using a CLI command. However, the Lambda function is not being invoked when the client sends requests through the ALB. <br><br>Why is the Lambda function not being invoked?</p>",
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
                "choice": "<p>A. A Lambda function cannot be registered as a target for an ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A Lambda function can be registered with an ALB using AWS Management Console only.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The permissions to invoke the Lambda function are missing.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Cross-zone is not enabled on the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 330 discussion",
        "discusstion": [
          {
            "id": 728013,
            "date": "Sun 27 Nov 2022 08:42",
            "username": "michaldavid",
            "content": "CCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727690,
            "date": "Sat 26 Nov 2022 17:42",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28620-exam-aws-certified-developer-associate-topic-1-question-256/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#331",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodePipeline to deliver one of its applications. The delivery pipeline is triggered by changes to the main branch of an AWS CodeCommit repository and uses AWS CodeBuild to implement the test and build stages of the process and AWS CodeDeploy to deploy the application.<br><br>The pipeline has been operating successfully for several months and there have been no modifications. Following a recent change to the application's source code, AWS CodeDeploy has not deployed the updated application as expected.<br><br>What are the possible causes? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#331",
            "answers": [
              {
                "choice": "<p>A. The change was not made in the main branch of the AWS CodeCommit repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. One of the earlier stages in the pipeline failed and the pipeline has terminated.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. One of the Amazon EC2 instances in the company's AWS CodePipeline cluster is inactive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The AWS CodePipeline is incorrectly configured and is not invoking AWS CodeDeploy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. AWS CodePipeline does not have permissions to access AWS CodeCommit.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 331 discussion",
        "discusstion": [
          {
            "id": 728019,
            "date": "Sun 27 Nov 2022 08:49",
            "username": "michaldavid",
            "content": "A and B correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 727691,
            "date": "Sat 26 Nov 2022 17:44",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4175-exam-aws-certified-developer-associate-topic-1-question-87/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          }
        ]
      },
      {
        "question_id": "#332",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer created a web API that receives requests by using an internet-facing Application Load Balancer (ALB) with an HTTPS listener. The developer configures an Amazon Cognito user pool and wants to ensure that every request to the API is authenticated through Amazon Cognito.<br><br>What should the developer do to meet this requirement?</p>",
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
                "choice": "<p>A. Add a listener rule to the listener to return a fixed response if the Authorization header is missing. Set the fixed response to 401 Unauthorized.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an authentication action for the listener rules of the ALSet the rule action type to authenticate-cognito. Set the OnUnauthenticatedRequest field to \"deny.\"<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon API Gateway API. Configure all API methods to be forwarded to the ALB endpoint. Create an authorizer of the COGNITO_USER_POOLS type. Configure every API method to use that authorizer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new target group that includes an AWS Lambda function target that validates the Authorization header by using Amazon Cognito. Associate the target group with the listener.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 332 discussion",
        "discusstion": [
          {
            "id": 746817,
            "date": "Fri 16 Dec 2022 05:49",
            "username": "xicomynor",
            "content": "There's no need to create an API GW. ALB can handle it itself: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html<br><br>You configure user authentication by creating an authenticate action for one or more listener rules. The authenticate-cognito and authenticate-oidc action types are supported only with HTTPS listeners. For descriptions of the corresponding fields, see AuthenticateCognitoActionConfig and AuthenticateOidcActionConfig in the Elastic Load Balancing API Reference version 2015-12-01.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 744824,
            "date": "Wed 14 Dec 2022 08:22",
            "username": "mrbig00",
            "content": "B.  Create an authentication action for the listener rules of the ALB.  Set the rule action type to authenticate-cognito. Set the OnUnauthenticatedRequest field to \\\"deny.\\\"<br><br>To ensure that all requests to an internet-facing Application Load Balancer (ALB) are authenticated through Amazon Cognito, the developer can create an authentication action for the listener rules of the ALB.  The authentication action specifies the type of authentication to be performed, which in this case should be \\\"authenticate-cognito.\\\" Additionally, the developer should set the OnUnauthenticatedRequest field to \\\"deny,\\\" which will cause the ALB to reject any requests that are not authenticated. This will ensure that only requests with a valid Amazon Cognito token will be allowed through the ALB. <br><br>Other options, such as adding a listener rule to return a fixed response, creating an Amazon API Gateway API, or creating a new target group with a Lambda function target, are not necessary for the given requirements.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734666,
            "date": "Sat 03 Dec 2022 21:29",
            "username": "DrCloud",
            "content": "Control access to a REST API using Amazon Cognito user pools as authorizer:<br>To use an Amazon Cognito user pool with your API, you must first create an authorizer of the COGNITO_USER_POOLS type and then configure an API method to use that authorizer.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728020,
            "date": "Sun 27 Nov 2022 08:51",
            "username": "michaldavid",
            "content": "CCCCCCC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727912,
            "date": "Sun 27 Nov 2022 04:48",
            "username": "kapil206001",
            "content": "B<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#rule-action-types",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727692,
            "date": "Sat 26 Nov 2022 17:46",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enable-cognito-user-pool.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#333",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to build an AWS CloudFormation template that self-populates the AWS Region variable that deploys the CloudFormation template.<br><br>What is the MOST operationally efficient way to determine the Region in which the template is being deployed?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#333",
            "answers": [
              {
                "choice": "<p>A. Use the AWS::Region pseudo parameter.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Require the Region as a CloudFormation parameter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Find the Region from the AWS:StackId pseudo parameter by using the Fn::Split intrinsic function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Dynamically import the Region by referencing the relevant parameter in AWS Systems Manager Parameter Store.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 333 discussion",
        "discusstion": [
          {
            "id": 729491,
            "date": "Mon 28 Nov 2022 18:56",
            "username": "michaldavid",
            "content": "AAAAAA",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727917,
            "date": "Sun 27 Nov 2022 04:59",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727693,
            "date": "Sat 26 Nov 2022 17:49",
            "username": "k1kavi1hamimelon",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html\\\"AWS::Region<br>Returns a string representing the Region in which the encompassing resource is being created, such as us-west-2.\\\"",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 736378,
            "date": "Tue 06 Dec 2022 00:15",
            "username": "hamimelon",
            "content": "\\\"AWS::Region<br>Returns a string representing the Region in which the encompassing resource is being created, such as us-west-2.\\\"",
            "upvote_count": "1",
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
        "question_text": "<p>A company has a web application that is deployed on AWS. The application uses an Amazon API Gateway API and an AWS Lambda function as its backend.<br><br>The application recently demonstrated unexpected behavior. A developer examines the Lambda function code, finds an error, and modifies the code to resolve the problem. Before deploying the change to production, the developer needs to run tests to validate that the application operates properly.<br><br>The application has only a production environment available. The developer must create a new development environment to test the code changes. The developer must also prevent other developers from overwriting these changes during the test cycle.<br><br>Which combination of steps will meet these requirements with the LEAST development effort? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#334",
            "answers": [
              {
                "choice": "<p>A. Create a new resource in the current stage. Create a new method with Lambda proxy integration. Select the Lambda function. Add the hotfix alias. Redeploy the current stage. Test the backend.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the Lambda function in the API Gateway API integration request to use the hotfix alias. Deploy the API Gateway API to a new stage named hotfix. Test the backend.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the Lambda function by fixing the code. Test the Lambda function. Create the alias hotfix. Point the alias to the $LATEST version.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the Lambda function by fixing the code. Test the Lambda function. When the Lambda function is working as expected, publish the Lambda function as a new version. Create the alias hotfix. Point the alias to the new version.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a new API Gateway API for the development environment. Add a resource and method with Lambda integration. Choose the Lambda function and the hotfix alias. Deploy to a new stage. Test the backend.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 334 discussion",
        "discusstion": [
          {
            "id": 732697,
            "date": "Thu 01 Dec 2022 15:15",
            "username": "k1kavi1",
            "content": "Going with B&D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 732543,
            "date": "Thu 01 Dec 2022 12:38",
            "username": "SoMaL69xicomynorxicomynor",
            "content": "D,E<br>New stage needs to be created as there is only one which is PROD. New stage is not the same as New API GW. So E is not trueNew stage is not the same as New API GW API. So E is not true",
            "upvote_count": "211",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 746818,
            "date": "Fri 16 Dec 2022 05:50",
            "username": "xicomynorxicomynor",
            "content": "New stage is not the same as New API GW. So E is not trueNew stage is not the same as New API GW API. So E is not true",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 746819,
            "date": "Fri 16 Dec 2022 05:51",
            "username": "xicomynor",
            "content": "New stage is not the same as New API GW API. So E is not true",
            "upvote_count": "1",
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
        "question_text": "<p>A company that manages movie reviews wants to make its movie review data available to its customers by calling a set of REST web service endpoints. The company will develop the retrieval functionality as AWS Lambda functions and will expose the functionality to customers as an Amazon API Gateway REST API.<br><br>The company needs to ensure that no consumer exceeds 100 requests a day to the API during the initial deployment. The company decides to use API Gateway API keys to restrict access. The company creates and issues API keys for each customer.<br><br>What should the company do next to meet these requirements with the LEAST administrative effort?</p>",
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
                "choice": "<p>A. Create a usage plan that applies throttling at 100 requests a day. Associate the usage plan with the API keys of all customers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon DynamoDB table to track all the requests that use a particular API key. For each request to the API, count the number of records in the DynamoDB table for that day for the API key. If the number of requests is 100 or greater, generate an exception.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a usage plan that applies a quota of 100 requests a day. Associate the usage plan with the API keys of all customers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Aurora table to track all the requests that use a particular API key. For each request to the API, count the number of records in the Aurora table for that day for the API key. If the number of requests is 100 or greater, generate an exception.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 335 discussion",
        "discusstion": [
          {
            "id": 742740,
            "date": "Mon 12 Dec 2022 12:59",
            "username": "fabriciollf",
            "content": "DynamoDB is not the correct ansewer here and Thronttling is applay for all API. So I belive rigth choice is C. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734690,
            "date": "Sat 03 Dec 2022 22:01",
            "username": "DrCloud",
            "content": "What is quota in API gateway?<br>API quotas usually describe a certain amount of calls for longer intervals. For example, your API quota might be 5.000 calls per month. Remember that this could be combined with a rate limit or throttling setup e.g. 20 TPS (Transactions per Second).<br><br>What is throttling in AWS API gateway?<br>AWS throttling limits are applied across all accounts and clients in a region. These limit settings exist to prevent your API=E2=80=94and your account=E2=80=94from being overwhelmed by too many requests. These limits are set by AWS and can't be changed by a customer.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-create<br>Choose Enable quota, and set specify a value (for example, 5000) for a selected time interval (for example, Month).",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734531,
            "date": "Sat 03 Dec 2022 16:18",
            "username": "JAG1808",
            "content": "A quota limit sets the target maximum number of requests with a given API key that can be submitted within a specified time interval.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 733084,
            "date": "Thu 01 Dec 2022 21:41",
            "username": "fswklotto1fswklotto1",
            "content": "Vote for A<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html<br>A throttling limit sets the target point at which request throttling should start. This can be set at the API or API method level.<br><br>A quota limit sets the target maximum number of requests with a given API key that can be submitted within a specified time interval. You can configure individual API methods to require API key authorization based on usage plan configuration.Should be C",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 733087,
            "date": "Thu 01 Dec 2022 21:44",
            "username": "fswklotto1",
            "content": "Should be C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 732546,
            "date": "Thu 01 Dec 2022 12:44",
            "username": "SoMaL69",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-create",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728803,
            "date": "Mon 28 Nov 2022 06:34",
            "username": "michaldavid",
            "content": "This is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728036,
            "date": "Sun 27 Nov 2022 09:16",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.htmlGoing with C based on quota limit instead of throttling limit",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734323,
            "date": "Sat 03 Dec 2022 10:57",
            "username": "k1kavi1",
            "content": "Going with C based on quota limit instead of throttling limit",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727919,
            "date": "Sun 27 Nov 2022 05:06",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-create",
            "upvote_count": "2",
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
        "question_text": "<p>A distributed application includes an AWS Lambda function that runs successfully in the DEV environment with 128 MB of memory assigned. The same function is failing in the TEST environment. The developer is monitoring the application using AWS X-Ray, but the Lambda function cannot be seen on the X-Ray service graph. The Lambda execution role has AWS X-Ray permissions.<br><br>What is the MOST LIKELY cause for AWS X-Ray not showing any data for the Lambda function?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#336",
            "answers": [
              {
                "choice": "<p>A. The AWS SDK needs to be included in the AWS Lambda deployment package.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. VPC Flow Logs are not enabled for the application VPC. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Active tracing needs to be enabled for the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The memory needs to be increased to 2 GB for the TEST environments.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 336 discussion",
        "discusstion": [
          {
            "id": 734698,
            "date": "Sat 03 Dec 2022 22:12",
            "username": "DrCloud",
            "content": "https://stackoverflow.com/questions/43728674/enabling-x-ray-support-in-aws-lambda<br>You need to check the \\\"Enable Active Tracing\\\" checkbox in the Lambda console.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 732705,
            "date": "Thu 01 Dec 2022 15:24",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728804,
            "date": "Mon 28 Nov 2022 06:36",
            "username": "michaldavid",
            "content": "CCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727920,
            "date": "Sun 27 Nov 2022 05:18",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html",
            "upvote_count": "1",
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
        "question_text": "<p>A developer wants to process personally identifiable information by using a public HTTP API that is hosted on Amazon EC2. The developer also wants to protect the data as securely as possible in transit.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#337",
            "answers": [
              {
                "choice": "<p>A. Use the Amazon CloudFront field-level encryption feature for the incoming data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Apply the principle of least privilege for access to the AWS Key Management Service (AWS KMS) service page.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Frequently rotate any API access keys for the HTTP API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Turn on multi-factor authentication (MFA) for all IAM users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Implement TLS for the HTTP API.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 337 discussion",
        "discusstion": [
          {
            "id": 732552,
            "date": "Thu 01 Dec 2022 12:47",
            "username": "SoMaL69",
            "content": "should be A, E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 728807,
            "date": "Mon 28 Nov 2022 06:39",
            "username": "michaldavid",
            "content": "I believe A and E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 728037,
            "date": "Sun 27 Nov 2022 09:20",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/security/how-to-protect-sensitive-data-for-its-entire-lifecycle-in-aws/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 727921,
            "date": "Sun 27 Nov 2022 05:22",
            "username": "kapil206001",
            "content": "AE<br>https://aws.amazon.com/blogs/security/how-to-protect-sensitive-data-for-its-entire-lifecycle-in-aws/",
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
        "question_text": "<p>A developer is modifying an existing AWS Lambda function. While checking the code, the developer notices hardcoded parameter values for an Amazon RDS for SQL Server user name, password, database, host, and port. There also are hardcoded parameter values for an Amazon DynamoDB table, an Amazon S3 bucket, and an Amazon Simple Notification Service (Amazon SNS) topic.<br><br>The developer wants to securely store the parameter values outside the code in an encrypted format and wants to turn on rotation for the credentials. The developer also wants to be able to reuse the parameter values from other applications and to update the parameter values without modifying code.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#338",
            "answers": [
              {
                "choice": "<p>A. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create SecureString parameters in AWS Systems Manager Parameter Store for the DynamoDB table, S3 bucket, and SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic. Create a Lambda function and set the logic for the credentials rotation task. Schedule the credentials rotation task in Amazon EventBridge.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Store the DynamoDB table, S3 bucket, and SNS topic in Amazon S3. Create a Lambda function and set the logic for the credentials rotation. Invoke the Lambda function on a schedule.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 338 discussion",
        "discusstion": [
          {
            "id": 729486,
            "date": "Mon 28 Nov 2022 18:50",
            "username": "michaldavid",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728038,
            "date": "Sun 27 Nov 2022 09:23",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#339",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a serverless ecommerce web application. The application needs to make coordinated, all-or-nothing changes to multiple items in the company's inventory table in Amazon DynamoDB. <br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#339",
            "answers": [
              {
                "choice": "<p>A. Enable transactions for the DynamoDB table. Use the BatchWriteItem operation to update the items.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the TransactWriteItems operation to group the changes. Update the items in the table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up a FIFO queue using Amazon SOS. Group the changes in the queue. Update the table based on the grouped changes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a transaction table in an Amazon Aurora DB cluster to manage the transactions. Write a backend process to sync the Aurora DB table and the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 339 discussion",
        "discusstion": [
          {
            "id": 728039,
            "date": "Sun 27 Nov 2022 09:25",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/33714-exam-aws-certified-developer-associate-topic-1-question-332/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727922,
            "date": "Sun 27 Nov 2022 05:28",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/33714-exam-aws-certified-developer-associate-topic-1-question-332/",
            "upvote_count": "1",
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
        "question_text": "<p>A developer has created a Node.js web application on a local development machine. The developer wants to use AWS technology to host the website. The developer needs a solution that requires the least possible operational overhead and no code changes.<br><br>Which AWS service should the developer use to meet these requirements?</p>",
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
                "choice": "<p>A. AWS Elastic Beanstalk<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon EC2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Elastic Kubernetes Service (Amazon EKS)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 340 discussion",
        "discusstion": [
          {
            "id": 732560,
            "date": "Thu 01 Dec 2022 12:55",
            "username": "SoMaL69",
            "content": "https://www.examtopics.com/discussions/amazon/view/69034-exam-aws-certified-developer-associate-topic-1-question-369/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728041,
            "date": "Sun 27 Nov 2022 09:27",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/69034-exam-aws-certified-developer-associate-topic-1-question-369/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727924,
            "date": "Sun 27 Nov 2022 05:29",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/69034-exam-aws-certified-developer-associate-topic-1-question-369/",
            "upvote_count": "2",
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
        "question_text": "<p>An AWS Lambda function requires read access to an Amazon S3 bucket and requires read/write access to an Amazon DynamoDB table. The correct IAM policy already exists.<br><br>What is the MOST secure way to grant the Lambda function access to the S3 bucket and the DynamoDB table?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#341",
            "answers": [
              {
                "choice": "<p>A. Attach the existing IAM policy to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role for the Lambda function. Attach the existing IAM policy to the role. Attach the role to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM user with programmatic access. Attach the existing IAM policy to the user. Add the user access key ID and secret access key as environment variables in the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the AWS account root user access key ID and secret access key as encrypted environment variables in the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 341 discussion",
        "discusstion": [
          {
            "id": 728042,
            "date": "Sun 27 Nov 2022 09:28",
            "username": "k1kavi1",
            "content": "Going with B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727938,
            "date": "Sun 27 Nov 2022 06:53",
            "username": "kapil206001",
            "content": "always use role & attach bucket policy to role .",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727581,
            "date": "Sat 26 Nov 2022 16:00",
            "username": "michaldavid",
            "content": "Defo B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726856,
            "date": "Fri 25 Nov 2022 15:42",
            "username": "DrCloud",
            "content": "Ans: B<br>You can also manage machine identities for external parties who need access. To give access to machine identities, you can use IAM roles.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
            "upvote_count": "1",
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
        "question_text": "<p>A developer has an Amazon DynamoDB table that must be in provisioned mode to comply with user requirements. The application needs to support the following:<br><br>- Average item size: 10 KB<br>- Item reads each second: 10 strongly consistent<br>- Item writes each second: 2 transactional<br><br>Which read and write capacity cost-effectively meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#342",
            "answers": [
              {
                "choice": "<p>A. Read 10; write 2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Read 30; write 40<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use on-demand scaling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Read 300; write 400<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 342 discussion",
        "discusstion": [
          {
            "id": 728044,
            "date": "Sun 27 Nov 2022 09:30",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28706-exam-aws-certified-developer-associate-topic-1-question-266/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727943,
            "date": "Sun 27 Nov 2022 06:59",
            "username": "kapil206001",
            "content": "B<br>4 KB/sec strong consistent read requires 1 RCU. So 10 KB data requires 3 RCU . Since 10 reads required each sec30 RCU<br>1 KB transactional writerequires 2 WCU per second . Since 10 KB size so 20 WCU each sec for 1 write . FOr 2 Wrties40 WCU",
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
        "question_text": "<p>A developer is creating an AWS CloudFormation template to deploy Amazon EC2 instances across multiple AWS accounts. The developer must choose the EC2 instances from a list of approved instance types.<br><br>How can the developer incorporate the list of approved instance types in the CloudFormation template?</p>",
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
                "choice": "<p>A. Create a separate CloudFormation template for each EC2 instance type in the list.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the Resources section of the CloudFormation template, create resources for each EC2 instance type in the list.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the CloudFormation template, create a separate parameter for each EC2 instance type in the list.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the CloudFormation template, create a parameter with the list of EC2 instance types as Allowed Values.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 343 discussion",
        "discusstion": [
          {
            "id": 728045,
            "date": "Sun 27 Nov 2022 09:32",
            "username": "k1kavi1",
            "content": "Agreed with option D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727582,
            "date": "Sat 26 Nov 2022 16:03",
            "username": "michaldavid",
            "content": "Agree with DrCloud this is D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727178,
            "date": "Sat 26 Nov 2022 01:37",
            "username": "DrCloud",
            "content": "Ans: D<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html<br>Parameters:<br>InstanceTypeParameter:<br>Type: String<br>Default: t2.micro<br>AllowedValues:<br>- t2.micro<br>- m1.small<br>- m1.large<br>Description: Enter t2.micro, m1.small, or m1.large. Default is t2.micro.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#344",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company is using an AWS Lambda function behind Amazon API Gateway as its application tier. To process orders during checkout, the application calls a POST API from the frontend. The POST API invokes the Lambda function asynchronously. In rare situations, the application has not processed orders. The Lambda application logs show no errors or failures.<br><br>What should a developer do to solve this problem?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#344",
            "answers": [
              {
                "choice": "<p>A. Inspect the frontend logs for API failures. Call the POST API manually by using the requests from the log file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create and inspect the Lambda dead-letter queue. Troubleshoot the failed functions. Reprocess the events.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Inspect the Lambda logs in Amazon CloudWatch for possible errors. Fix the errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Make sure that caching is disabled for the POST API in API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 344 discussion",
        "discusstion": [
          {
            "id": 738028,
            "date": "Wed 07 Dec 2022 16:26",
            "username": "hamimelon",
            "content": "I did think B was reasonable, but I didn't see \\\"dead-letter queue\\\" in the question.Then I found the word \\\"asynchronously\\\", which implies dead-letter queue.B it is.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728046,
            "date": "Sun 27 Nov 2022 09:33",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727583,
            "date": "Sat 26 Nov 2022 16:05",
            "username": "michaldavid",
            "content": "B for me",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727183,
            "date": "Sat 26 Nov 2022 01:52",
            "username": "DrCloud",
            "content": "Ans: B<br>https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html<br>Asynchronous invocation =E2=80=93 Lambda retries function errors twice. If the function doesn't have enough capacity to handle all incoming requests, events might wait in the queue for hours or days to be sent to the function. You can configure a dead-letter queue on the function to capture events that weren't successfully processed.",
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
        "question_text": "<p>A developer is building a three-tier application with an Application Load Balancer (ALB), Amazon EC2 instances, and Amazon RDS. There is an alias record in Amazon Route 53 that points to the ALB.  When the developer tries to access the ALB from a laptop, the request times out.<br><br>Which logs should the developer investigate to verify that the request is reaching the AWS network?</p>",
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
                "choice": "<p>A. VPC Flow Logs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Route 53 logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Systems Manager Agent logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudWatch agent logs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 345 discussion",
        "discusstion": [
          {
            "id": 746821,
            "date": "Fri 16 Dec 2022 06:03",
            "username": "xicomynor",
            "content": "I go with A.  Even though we can enable Route53 logs. They will only give information about the domain name resolution. Not necesarily about AWS Network reachability, but VPC Flow Logs will.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 741368,
            "date": "Sun 11 Dec 2022 03:16",
            "username": "tobeornot",
            "content": "VPC Flow Logswould show packet arriving in the VPC where the ALB lives, while Route53 would show a request was made to resolve the domain-name. The two are very different, considering the question says \\\"to verify that the request is reaching the AWS network?\\\" it may lean towards A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 728047,
            "date": "Sun 27 Nov 2022 09:37",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727222,
            "date": "Sat 26 Nov 2022 03:48",
            "username": "DrCloudHieuTTRyanDDD",
            "content": "Ans: B<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html<br>To route domain traffic to an ELB load balancer, use Amazon Route 53 to create an alias record that points to your load balancer. An alias record is a Route 53 extension to DNS.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html<br>You can configure Amazon Route 53 to log information about the public DNS queries that Route 53 receives, such as the following:<br>Domain or subdomain that was requested<br>Date and time of the request<br>DNS record type (such as A or AAAA)<br>Route 53 edge location that responded to the DNS query<br>DNS response code, such as NoError or ServFail<br><br>Once you configure query logging, Route 53 will send logs to CloudWatch Logs. You use CloudWatch Logs tools to access the query logs.reachability aws network ????A is the answerShouldn't this be D as logs are in CloudWatch finally?",
            "upvote_count": "312",
            "selected_answers": ""
          },
          {
            "id": 757990,
            "date": "Tue 27 Dec 2022 01:58",
            "username": "HieuTT",
            "content": "reachability aws network ????A is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732179,
            "date": "Thu 01 Dec 2022 03:30",
            "username": "RyanDDD",
            "content": "Shouldn't this be D as logs are in CloudWatch finally?",
            "upvote_count": "2",
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
        "question_text": "<p>A developer is designing a serverless application for a game in which users register and log in through a web browser. The application makes requests on behalf of users to a set of AWS Lambda functions that run behind an Amazon API Gateway HTTP API.<br><br>The developer needs to implement a solution to register and log in users on the application's sign-in page. The solution must minimize operational overhead and must minimize ongoing management of user identities.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Create Amazon Cognito user pools for external social identity providers. Configure IAM roles for the identity pools.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Program the sign-in page to create users' IAM groups with the IAM roles attached to the groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon RDS for SQL Server DB instance to store the users and manage the permissions to the background resources in AWS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the sign-in page to register and store the users and their passwords in an Amazon DynamoDB table with an attached IAM policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 346 discussion",
        "discusstion": [
          {
            "id": 728049,
            "date": "Sun 27 Nov 2022 09:38",
            "username": "k1kavi1",
            "content": "A.  Create Amazon Cognito user pools for external social identity providers. Configure IAM roles for the identity pools.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727585,
            "date": "Sat 26 Nov 2022 16:07",
            "username": "michaldavid",
            "content": "AAAAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727226,
            "date": "Sat 26 Nov 2022 04:04",
            "username": "DrCloud",
            "content": "Ans: A<br>https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is creating an AWS Lambda function in VPC mode. An Amazon S3 event will invoke the Lambda function when an object is uploaded into an S3 bucket. The Lambda function will process the object and produce some analytic results that will be recorded into a file. Each processed object will also generate a log entry that will be recorded into a file.<br><br>Other Lambda functions, AWS services, and on-premises resources must have access to the result files and log file. Each log entry must also be appended to the same shared log file. The developer needs a solution that can share files and append results into an existing file.<br><br>Which solution should the developer use to meet these requirements?</p>",
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
                "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in Lambda. Store the result files and log file in the mount point. Append the log entries to the log file.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Elastic Block Store (Amazon EBS) Multi-Attach enabled volume. Attach the EBS volume to all Lambda functions. Update the Lambda function code to download the log file, append the log entries, and upload the modified log file to Amazon EBS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a reference to the /tmp local directory. Store the result files and log file by using the directory reference. Append the log entry to the log file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a reference to the /opt storage directory. Store the result files and log file by using the directory reference. Append the log entry to the log file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 347 discussion",
        "discusstion": [
          {
            "id": 728050,
            "date": "Sun 27 Nov 2022 09:42",
            "username": "k1kavi1",
            "content": "EFS is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727589,
            "date": "Sat 26 Nov 2022 16:10",
            "username": "michaldavid",
            "content": "A for me",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727232,
            "date": "Sat 26 Nov 2022 04:14",
            "username": "DrCloud",
            "content": "Ans: A<br>Need: share files and append results into an existing file > EFS<br><br>https://aws.amazon.com/blogs/compute/using-amazon-efs-for-aws-lambda-in-your-serverless-applications/<br>For appending to existing files, EFS is also a preferred option to using Amazon S3.",
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
        "question_text": "<p>A developer is creating a new batch application that will run on an Amazon EC2 instance. The application requires read access to an Amazon S3 bucket. The developer needs to follow security best practices to grant S3 read access to the application.<br><br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#348",
            "answers": [
              {
                "choice": "<p>A. Add the permissions to an IAM policy. Attach the policy to a role. Attach the role to the EC2 instance profile.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the permissions inline to an IAM group. Attach the group to the EC2 instance profile.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add the permissions to an IAM policy. Attach the policy to a user. Attach the user to the EC2 instance profile.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the permissions to an IAM policy. Use IAM web identity federation to access the S3 bucket with the policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 348 discussion",
        "discusstion": [
          {
            "id": 728052,
            "date": "Sun 27 Nov 2022 09:43",
            "username": "k1kavi1",
            "content": "Going with A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727590,
            "date": "Sat 26 Nov 2022 16:11",
            "username": "michaldavid",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727234,
            "date": "Sat 26 Nov 2022 04:22",
            "username": "DrCloud",
            "content": "Ans: A<br>https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is creating a serverless orchestrator that performs a series of steps to processes incoming IoT data. The orchestrator transforms the data, performs a series of calculations, and stores the results in Amazon DynamoDB.  The entire process is completed in less than a minute.<br><br>The orchestrator must process tens of thousands of transactions each second. The orchestrator must not miss a transaction and must process each transaction at least once.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#349",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Simple Notification Service (Amazon SNS) to process the data through an HTTP or HTTPS endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Step Functions to process the data as Standard Workflows.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Step Functions to process the data as Synchronous Express Workflows.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Step Functions to process the data as Asynchronous Express Workflows.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 349 discussion",
        "discusstion": [
          {
            "id": 767043,
            "date": "Thu 05 Jan 2023 22:12",
            "username": "zebtig",
            "content": "D is correct as atleast once",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 766137,
            "date": "Wed 04 Jan 2023 23:58",
            "username": "braveheart22",
            "content": "D is definitely the right answer for me. Asynchronous Express Workflows is the same as configuring SQS dead letter queue that will ensure that each transaction must be processed at least once.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 745696,
            "date": "Thu 15 Dec 2022 05:43",
            "username": "BelloMioxicomynor",
            "content": "I Vote D<br>https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html<br>Asynchronous Express Workflows: At-least-once workflow execution.<br><br>Synchronous Express Workflows: At-most-once workflow execution.Totally agree. C and D are almost the same. Except that the questions says \\\"at least once\\\", which is guaranteed by Asynchronous Express Workflows.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 746831,
            "date": "Fri 16 Dec 2022 06:22",
            "username": "xicomynor",
            "content": "Totally agree. C and D are almost the same. Except that the questions says \\\"at least once\\\", which is guaranteed by Asynchronous Express Workflows.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728060,
            "date": "Sun 27 Nov 2022 09:55",
            "username": "k1kavi1",
            "content": "Going with Synchronous Express Workflows",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727594,
            "date": "Sat 26 Nov 2022 16:14",
            "username": "michaldavid",
            "content": "I think C as well",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726337,
            "date": "Fri 25 Nov 2022 03:04",
            "username": "DrCloud",
            "content": "Ans: D<br>https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html<br>Express Workflows are ideal for high-volume, event-processing workloads such as IoT data ingestion, streaming data processing and transformation.<br>https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html<br>Results are written to DynamoDB.  You can use Asynchronous Express Workflows when you don't require immediate response output, such as messaging services or data processing that other services don't depend on.<br>https://aws.amazon.com/step-functions/pricing/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 724964,
            "date": "Wed 23 Nov 2022 08:30",
            "username": "absolutic",
            "content": "I think it's C<br>https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html",
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
        "question_text": "<p>A developer wants to reduce risk when deploying a new version of an existing AWS Lambda function. To test the Lambda function, the developer needs to split the traffic between the existing version and the new version of the Lambda function.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Configure a weighted routing policy in Amazon Route 53. Associate the versions of the Lambda function with the weighted routing policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a function alias. Configure the alias to split the traffic between the two versions of the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Application Load Balancer (ALB) that uses the Lambda function as a target. Configure the ALB to split the traffic between the two versions of the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create the new version of the Lambda function as a Lambda layer on the existing version. Configure the function to split the traffic between the two layers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 350 discussion",
        "discusstion": [
          {
            "id": 744868,
            "date": "Wed 14 Dec 2022 09:20",
            "username": "mrbig00",
            "content": "B.  Create a function alias. Configure the alias to split the traffic between the two versions of the Lambda function.<br><br>To split traffic between the existing and new versions of a Lambda function, the developer can create a function alias and configure it to split the traffic between the two versions. A function alias is a pointer to a specific version of a Lambda function, and can be used to route traffic to the appropriate version. The developer can use the AWS Management Console or the AWS CLI to create and configure the function alias.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728062,
            "date": "Sun 27 Nov 2022 09:58",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728028,
            "date": "Sun 27 Nov 2022 09:08",
            "username": "kapil206001",
            "content": "B<br>Use routing configuration on an alias to send a portion of traffic to a second function version. For example, you can reduce the risk of deploying a new version by configuring the alias to send most of the traffic to the existing version, and only a small percentage of traffic to the new version.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727595,
            "date": "Sat 26 Nov 2022 16:15",
            "username": "michaldavid",
            "content": "B for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726308,
            "date": "Fri 25 Nov 2022 02:09",
            "username": "DrCloud",
            "content": "Ans: D<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html<br>You can use versions to manage the deployment of your functions. For example, you can publish a new version of a function for beta testing without affecting users of the stable production version. Lambda creates a new version of your function each time that you publish the function. The new version is a copy of the unpublished version of the function.<br>Note:<br>Lambda doesn't create a new version if the code in the unpublished version is the same as the previous published version.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724967,
            "date": "Wed 23 Nov 2022 08:32",
            "username": "absolutic",
            "content": "It is B",
            "upvote_count": "1",
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
        "question_text": "<p>A company has hundreds of AWS Lambda functions that the company's QA team needs to test by using the Lambda function URLs. A developer needs to configure the authentication of the Lambda functions to allow access so that the QA IAM group can invoke the Lambda functions by using the public URLs.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to create an IAM identity-based policy that allows the lambda:InvokeFunctionUrl action to all the Lambda function Amazon Resource Names (ARNs). Attach the policy to the QA IAM group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to create an IAM resource-based policy that allows the lambdainvokeFunctionUrl action to all the Lambda function Amazon Resource Names (ARNs). Attach the policy to the QA IAM group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to loop on the Lambda functions to create an IAM identity-based policy that allows the lambdainvokeFunctionUrl action from the QA IAM group's Amazon Resource Name (ARN).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to loop on the Lambda functions to create an IAM resource-based policy that allows the lambdainvokeFunctionUrl action from the QA IAM group's Amazon Resource Name (ARN).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 351 discussion",
        "discusstion": [
          {
            "id": 728786,
            "date": "Mon 28 Nov 2022 05:53",
            "username": "michaldavid",
            "content": "Should be A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728067,
            "date": "Sun 27 Nov 2022 10:02",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#352",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has an application that pushes files from an on-premises local server to an Amazon S3 bucket. The application uses an AWS access key and a secret key that are stored on the server for authentication. The application calls AWS Security Token Service (AWS STS) to assume a role with access to perform the S3 PUT operation to upload the file.<br><br>The developer is migrating the server to an Amazon EC2 instance. The EC2 instance is configured with an IAM instance profile in the same AWS account that owns the S3 bucket.<br><br>What is the MOST secure solution for the developer to use to migrate the automation code?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#352",
            "answers": [
              {
                "choice": "<p>A. Remove the code that calls the STS AssumeRole operation. Use the same access key and secret key from the server to access the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Remove the access key and the secret key. Use the STS AssumeRole operation to add permissions to access the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Use an IAM instance profile role that grants access to the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Create a new access key and secret key. Use the new keys to access the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 352 discussion",
        "discusstion": [
          {
            "id": 728785,
            "date": "Mon 28 Nov 2022 05:53",
            "username": "michaldavid",
            "content": "CCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728068,
            "date": "Sun 27 Nov 2022 10:04",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#353",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a new web application that will be deployed and managed with AWS Elastic Beanstalk. The application will include an Amazon RDS DB instance.<br><br>What steps should the developer take to access the RDS DB instance from the code? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#353",
            "answers": [
              {
                "choice": "<p>A. Modify the endpoint name using either the AWS Management Console or AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Upload the driver to Amazon S3 and reference it in the code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Download the appropriate database driver and include it with the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Construct a connection string using the Elastic Beanstalk environment variables.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a CNAME record referencing database instances ALIAS.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 353 discussion",
        "discusstion": [
          {
            "id": 764772,
            "date": "Tue 03 Jan 2023 15:53",
            "username": "landc",
            "content": "To connect to the database, add the appropriate driver JAR file to your application, load the driver class in your code, and create a connection object with the environment properties provided by Elastic Beanstalk.<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-rds.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 762063,
            "date": "Fri 30 Dec 2022 16:21",
            "username": "Mark1000",
            "content": "C y D<br><br>As SBoksh link show:<br><br>\\\"To connect to the database, add the appropriate driver JAR file to your application, load the driver class in your code, and create a connection object with the environment properties provided by Elastic Beanstalk.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 735016,
            "date": "Sun 04 Dec 2022 11:56",
            "username": "SBokshhamimelon",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-rds.html#java-rds-drivershttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.db.html<br><br>\\\"Elastic Beanstalk provides integration with Amazon Relational Database Service (Amazon RDS). You can use Elastic Beanstalk to add a MySQL, PostgreSQL, Oracle, or SQL Server database to an existing environment or a new one when you create it. When you add a database instance, Elastic Beanstalk provides the connection information to your application. It does this by setting the environment properties for the database hostname, port, user name, password, and database name.\\\"",
            "upvote_count": "33",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 738067,
            "date": "Wed 07 Dec 2022 16:49",
            "username": "hamimelon",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.db.html<br><br>\\\"Elastic Beanstalk provides integration with Amazon Relational Database Service (Amazon RDS). You can use Elastic Beanstalk to add a MySQL, PostgreSQL, Oracle, or SQL Server database to an existing environment or a new one when you create it. When you add a database instance, Elastic Beanstalk provides the connection information to your application. It does this by setting the environment properties for the database hostname, port, user name, password, and database name.\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 732739,
            "date": "Thu 01 Dec 2022 16:01",
            "username": "k1kavi1",
            "content": "Going with A&D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 728789,
            "date": "Mon 28 Nov 2022 05:55",
            "username": "michaldavid",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 728346,
            "date": "Sun 27 Nov 2022 15:51",
            "username": "DrCloud",
            "content": "Ans: A, D<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.RDS.html<br>After you launch your database instance and configure security groups, you can pass the connection information, such as the endpoint and password, to your application by using environment properties. This is the same mechanism that Elastic Beanstalk uses in the background when you run a database instance in your environment.",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is using AWS Amplify Hosting to build and deploy an application. The developer is receiving an increased number of bug reports from users. The developer wants to add end-to-end testing to the application to eliminate as many bugs as possible before the bugs roach production.<br><br>Which solution should the developer implement to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#354",
            "answers": [
              {
                "choice": "<p>A. Run the amplify add test command in the Amplify CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create unit tests in the application. Deploy the unit tests by using the amplify push command in the Amplify CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a test phase to the amplify.yml build settings for the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a test phase to the aws-exports.js file for the application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 354 discussion",
        "discusstion": [
          {
            "id": 728790,
            "date": "Mon 28 Nov 2022 05:58",
            "username": "michaldavid",
            "content": "CCCCCCCC",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728370,
            "date": "Sun 27 Nov 2022 16:23",
            "username": "DrCloud",
            "content": "Ans: C<br>You can run end-to-end (E2E) tests in the test phase of your Amplify app to catch regressions before pushing code to production. The test phase can be configured in the build specification YML.<br>https://docs.aws.amazon.com/amplify/latest/userguide/running-tests.html<br>Add tests to your existing Amplify app<br>You can use the test step to run any test commands at build time. For E2E tests, Amplify Hosting offers a deeper integration with Cypress that allows you to generate a UI report for your tests. To add Cypress tests to an existing app, update your amplify.yml build settings.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 728054,
            "date": "Sun 27 Nov 2022 09:45",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/amplify/latest/userguide/running-tests.html",
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
        "question_text": "<p>A developer is building a serverless application that uses the AWS Cloud Development Kit (AWS CDK) to deploy application infrastructure. The developer is creating an AWS Lambda function that queries an HTTP API. The API needs all requests to include an access token for authentication and authorization. The developer needs to store the access token securely and to give the Lambda function access to the token.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to capture the access token. Set the access token as an environment variable of the Lambda function. Update the Lambda function's code to reference the environment variable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to create an AWS Systems Manager Parameter Store String parameter. Set the value of the parameter from the environment variable. Update the Lambda function's execution role to allow the GetParameter action on the parameter. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Parameter Store.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the AWS CDK stack to create an AWS Systems Manager Parameter Store String parameter. Update the Lambda function's execution role to allow the GetParameter action on the parameter. Manually set the access token in Parameter Store. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Parameter Store.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the AWS CDK stack to create an AWS Secrets Manager secret. Configure the permissions for the secret and the Lambda function to allow the function to access the secret. Update the CloudFormation stack policy inside the AWS CDK stack to prevent updates to the secret. Manually set the access token in Secrets Manager. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 355 discussion",
        "discusstion": [
          {
            "id": 763309,
            "date": "Sun 01 Jan 2023 19:52",
            "username": "fe2",
            "content": "If you want to store tokens in SSM Parameter store, it is better to store them as SecureString instead of just String. Both, B and C not correct. D is secure solution.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 753785,
            "date": "Fri 23 Dec 2022 02:10",
            "username": "fabriciollf",
            "content": "The question mentions \\\"... store the access token securely ...\\\", I belive this points to the Secrets Manager",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 733981,
            "date": "Fri 02 Dec 2022 19:28",
            "username": "fswklotto1",
            "content": "Vote for B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728418,
            "date": "Sun 27 Nov 2022 17:19",
            "username": "DrCloud",
            "content": "Ans: B<br>https://aws.amazon.com/blogs/compute/securely-retrieving-secrets-with-aws-lambda/<br><br>AWS Systems Manager Parameter Store enables you to store configuration data securely, including secrets, as parameter values.<br>Parameter Store integrates directly with Secrets Manager as a pass-through service for references to Secrets Manager secrets. Use this integration if you prefer using Parameter Store as a consistent solution for calling and referencing secrets across your applications.<br><br>https://betterprogramming.pub/managing-secrets-with-aws-cloud-development-kit-cdk-25ec1e80dfc3",
            "upvote_count": "3",
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
        "question_text": "<p>A developer is working on an application that is deployed on an Amazon EC2 instance. The application needs to transfer a file to an Amazon S3 bucket.<br><br>What should the developer do to authenticate the application's access to the S3 bucket in the MOST secure way?</p>",
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
                "choice": "<p>A. Create an access key for an IAM user. Store the access key in the application's environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role. Create an access key for the role. Store the access key in the application's environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Associate an IAM role with the EC2 instance. Use the instance metadata service to retrieve the credentials.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure a bucket policy for the S3 bucket. Allow access from the EC2 instance ID in the bucket policy.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 356 discussion",
        "discusstion": [
          {
            "id": 728442,
            "date": "Sun 27 Nov 2022 17:49",
            "username": "DrCloud",
            "content": "Ask: \\\"MOST\\\" secure way<br>Eliminate: A, B, C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728103,
            "date": "Sun 27 Nov 2022 10:44",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#357",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running its application on the most recent generation of hare metal Amazon EC2 instances. A developer is adding a low-latency computation feature to the application. The feature depends on highly sensitive personally identifiable information (PII). When computation occurs on unencrypted data, the feature needs to run in an isolated environment that provides CPU and memory isolation.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Build and deploy the feature on the original EC2 instance store.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the now feature in the original application. Deploy the application on a Dedicated Host.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Package the now feature and deploy the now feature on AWS Lambda. Use AWS Key Management Service (AWS KMS) to encrypt and decrypt the PII.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Build and deploy the now feature as part of the original application. Run the feature on AWS Nitro Enclaves.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 357 discussion",
        "discusstion": [
          {
            "id": 728794,
            "date": "Mon 28 Nov 2022 06:09",
            "username": "michaldavid",
            "content": "DDDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728457,
            "date": "Sun 27 Nov 2022 17:59",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html<br><br>AWS Nitro Enclaves is an Amazon EC2 feature that allows you to create isolated execution environments, called enclaves, from Amazon EC2 instances. Enclaves are separate, hardened, and highly constrained virtual machines. They provide only secure local socket connectivity with their parent instance. They have no persistent storage, interactive access, or external networking. Users cannot SSH into an enclave, and the data and applications inside the enclave cannot be accessed by the processes, applications, or users (root or admin) of the parent instance. Using Nitro Enclaves, you can secure your most sensitive data, such as personally identifiable information (PII), and your data processing applications.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728104,
            "date": "Sun 27 Nov 2022 10:46",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/ec2/nitro/nitro-enclaves/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#358",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created an AWS Lambda function that interacts with an Amazon Aurora MySQL database. The Lambda function makes queries to the database. After a performance test for the Lambda function, the database starts to show an error for too many connections.<br><br>Which solution will solve this problem with the LEAST operational effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#358",
            "answers": [
              {
                "choice": "<p>A. Create a road replica for the database. Query the replica database instead of the primary database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the data to an Amazon DynamoDB database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Sot a limit to the Lambda function's concurrency.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a proxy in Amazon RDS Proxy. Query the proxy instead of the database.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 358 discussion",
        "discusstion": [
          {
            "id": 728795,
            "date": "Mon 28 Nov 2022 06:11",
            "username": "michaldavid",
            "content": "Use proxy D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728467,
            "date": "Sun 27 Nov 2022 18:14",
            "username": "DrCloud",
            "content": "Error: too many connections<br>Ask: LEAST operational effort?<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html<br>If your applications frequently open and close connections, or keep a large number of long-lived connections open, we recommend that you use Amazon RDS Proxy. RDS Proxy is a fully managed, highly available database proxy that uses connection pooling to share database connections securely and efficiently.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#359",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A calendar application gives users the ability to schedule and share events. The application stores its data in several Amazon DynamoDB tables. The Events table stores all events for the application. The Events table has a primary key in which the partition key is the date of the event and the sort key is the user's unique ID number.<br><br>A developer is working on a dashboard that will show each user all the details for all their events scheduled on a single day. The developer needs to get the data from the Events table.<br><br>What should the developer do to get the relevant data MOST efficiently?</p>",
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
                "choice": "<p>A. Perform a scan on the Events table by using the partition key and the sort key as filter expressions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform a query on the Events table by using the partition key and the sort key as filter expressions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Perform a scan on the Events table by using the partition key and the sort key in a key condition expression.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Perform a query on the Events table by using the partition key and the sort key in a key condition expression.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 359 discussion",
        "discusstion": [
          {
            "id": 728799,
            "date": "Mon 28 Nov 2022 06:12",
            "username": "michaldavid",
            "content": "DDDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728474,
            "date": "Sun 27 Nov 2022 18:25",
            "username": "DrCloud",
            "content": "Key condition expressions for query:<br><br>To specify the search criteria, you use a key condition expression=E2=80=94a string that determines the items to be read from the table or index.<br><br>You must specify the partition key name and value as an equality condition. You cannot use a non-key attribute in a Key Condition Expression.<br><br>You can optionally provide a second condition for the sort key (if present).<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.KeyConditionExpressions",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728113,
            "date": "Sun 27 Nov 2022 10:56",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#360",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is integrating Amazon ElastiCache in an application. The cache will store data from a database. The cached data must populate real-time dashboards.<br><br>Which caching strategy will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#360",
            "answers": [
              {
                "choice": "<p>A. A read-through cache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A write-behind cache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A lazy-loading cache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A write-through cache<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 360 discussion",
        "discusstion": [
          {
            "id": 742752,
            "date": "Mon 12 Dec 2022 13:07",
            "username": "fabriciollf",
            "content": "I believe is D<br>\\\"The advantages of write-through are as follows: Data in the cache is never stale.\\\"<br>AWS documentation.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728800,
            "date": "Mon 28 Nov 2022 06:13",
            "username": "michaldavid",
            "content": "I think D as well",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728479,
            "date": "Sun 27 Nov 2022 18:35",
            "username": "DrCloud",
            "content": "Write-through:<br>The write-through strategy adds data or updates data in the cache whenever data is written to the database.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728117,
            "date": "Sun 27 Nov 2022 10:58",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html#Strategies.WriteThrough",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#361",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A social media application uses the AWS SDK for JavaScript on the frontend to get user credentials from AWS Security Token Service (AWS STS). The application stores its assets in an Amazon S3 bucket. The application serves its content by using an Amazon CloudFront distribution with the origin sot to the S3 bucket.<br><br>The credentials for the role that the application assumes to make the SDK calls are stored in plaintext in a JSON file within the application code. The developer needs to implement a solution that will allow the application to get user credentials without having any credentials hardcoded in the application code.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to allow the function to access AWS STS. Move all SDK calls from the frontend into the function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a CloudFront function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to allow the function to access AWS STS. Move all SDK calls from the frontend into the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON file into the function. Move all SDK calls from the frontend into the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a CloudFront function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON file into the function. Move all SDK calls from the frontend into the function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 361 discussion",
        "discusstion": [
          {
            "id": 753719,
            "date": "Thu 22 Dec 2022 23:51",
            "username": "fabriciollf",
            "content": "Access authorization: Implement access control and authorization for the content delivered through CloudFront by creating and validating user-generated tokens, such as HMAC tokens or JSON web tokens (JWT), to allow/deny requests.<br><br>https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 735654,
            "date": "Mon 05 Dec 2022 05:19",
            "username": "SBoksh",
            "content": "Lambda@Edge is a good fit for the following scenarios:<br><br>Functions that take several milliseconds or more to complete.<br><br>Functions that require adjustable CPU or memory.<br><br>Functions that depend on third-party libraries (including the AWS SDK, for integration with other AWS services).",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734436,
            "date": "Sat 03 Dec 2022 13:28",
            "username": "k1kavi1",
            "content": "B or D<br>https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734334,
            "date": "Sat 03 Dec 2022 11:22",
            "username": "ubuntu1234",
            "content": "B<br>With CloudFront Functions in Amazon CloudFront, you can write lightweight functions in JavaScript for high-scale, latency-sensitive CDN customizations. Your functions can manipulate the requests and responses that flow through CloudFront, perform basic authentication and authorization, generate HTTP responses at the edge, and more....<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html<br>https://jayendrapatil.com/aws-cloudfront-edge-functions/",
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
        "question_text": "<p>A company has an ecommerce application. To track product reviews, the company's development team uses an Amazon DynamoDB table.<br><br>Every record includes the following:<br><br>- A Review ID, a 16-digit universally unique identifier (UUID)<br>- A Product ID and User ID, 16-digit UUIDs that reference other tables<br>- A Product Rating on a scale of 1-5<br>- An optional comment from the user<br><br>The table partition key is the Review ID.  The most performed query against the table is to find the 10 reviews with the highest rating for a given product.<br><br>Which index will provide the FASTEST response for this query?</p>",
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
                "choice": "<p>A. A global secondary index (GSI) with Product ID as the partition key and Product Rating as the sort key<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. A global secondary index (GSI) with Product ID as the partition key and Review ID as the sort key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A local secondary index (LSI) with Product ID as the partition key and Product Rating as the sort key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A local secondary index (LSI) with Review ID as the partition key and Product ID as the sort key<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 362 discussion",
        "discusstion": [
          {
            "id": 728607,
            "date": "Sun 27 Nov 2022 22:18",
            "username": "DrCloud",
            "content": "Ask:<br>(1) Find the 10 reviews with the highest rating for a given product.<br>- We need: Product ID as the partition key and Product Rating as the sort key.<br>- Eliminate, LSI<br><br>(2) FASTEST > GSI<br>- A global secondary has its own provisioned throughput settings for read and write activity that are separate from those of the table.<br>- A local secondary index shares provisioned throughput settings for read and write activity with the table it is indexing.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general.html",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 744913,
            "date": "Wed 14 Dec 2022 10:09",
            "username": "mrbig00",
            "content": "The correct answer is A.  A global secondary index (GSI) with Product ID as the partition key and Product Rating as the sort key.<br><br>A global secondary index (GSI) is a type of index in DynamoDB that has a different partition key than the table. In this case, the GSI should have Product ID as the partition key and Product Rating as the sort key. This will allow the GSI to be queried efficiently for the 10 reviews with the highest rating for a given product.<br><br>Option B is incorrect because it does not include the Product Rating as the sort key, which is necessary for the query. Option C is incorrect because it uses a local secondary index (LSI), which can only be queried by the table's partition key and the LSI's sort key. Option D is incorrect because it uses the Review ID as the partition key, which is not relevant for the query.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734439,
            "date": "Sat 03 Dec 2022 13:31",
            "username": "k1kavi1",
            "content": "Going with A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729500,
            "date": "Mon 28 Nov 2022 19:10",
            "username": "michaldavid",
            "content": "AAAAAA",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#363",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A media company wants to test its web application more frequently. The company deploys the application by using a separate AWS CloudFormation stack for each environment. The same CloudFormation template is deployed to each stack as the application progresses through the development lifecycle.<br><br>A developer needs to build an automated alert for the quality assurance (QA) team. The developer wants the alert to occur for new deployments in the final pre-production environment.<br><br>Which solution will moot these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#363",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add a subscription to notify the QA team. Update the CloudFormation stack options to point to the SNS topic in the pro-production environment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function that notifies the QA team. Create an Amazon EventBridge rule to invoke the Lambda function on the default event bus. Filter the events on the CloudFormation service and the CloudFormation stack Amazon Resource Name (ARM).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon CloudWatch alarm that monitors the metrics from CloudFormation. Filter the metrics on the stack name and the stack status. Configure the alarm to notify the QA team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function that notifies the QA team. Configure the event source mapping to receive events from CloudFormation. Specify the filtering values to limit invocations to the desired CloudFormation stack.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 363 discussion",
        "discusstion": [
          {
            "id": 744543,
            "date": "Wed 14 Dec 2022 00:29",
            "username": "fabriciollf",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-rollback-email/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732777,
            "date": "Thu 01 Dec 2022 16:44",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729504,
            "date": "Mon 28 Nov 2022 19:16",
            "username": "michaldavid",
            "content": "AAAAAAAAA",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728631,
            "date": "Sun 27 Nov 2022 22:47",
            "username": "DrCloud",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-rollback-email/<br>https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/CloudFormation/cloudformation-stack-notification.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#364",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is preparing a containerized application for deployment to AWS Lambda. The developer wants to build and optimize the container images to reduce duplicate work and improve build, deploy, and update times.<br><br>Which combination of steps should the developer take to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#364",
            "answers": [
              {
                "choice": "<p>A. Use an AWS provided base image.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the smallest compatible third-party base image.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Build frequently changing layers in the imago first, followed by stable layers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store images for functions with large layers in the same Amazon Elastic Container Registry (Amazon ECR) repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Maximize the number of layers in the built image.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 364 discussion",
        "discusstion": [
          {
            "id": 734445,
            "date": "Sat 03 Dec 2022 13:35",
            "username": "k1kavi1",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 729505,
            "date": "Mon 28 Nov 2022 19:18",
            "username": "michaldavid",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 728645,
            "date": "Sun 27 Nov 2022 22:57",
            "username": "DrCloud",
            "content": "https://aws.amazon.com/blogs/compute/optimizing-lambda-functions-packaged-as-container-images/<br><br>Strategies for optimizing container images:<br>1. Use AWS-provided base images<br>2. Use multi-stage builds<br>3. Build from stable to frequently changing<br>4. Use a single repository for functions with large layers",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 728189,
            "date": "Sun 27 Nov 2022 13:23",
            "username": "kapil206001",
            "content": "AD<br>https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
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
        "question_text": "<p>A developer is using Amazon CodeGuru Profiler. The developer has configured the application with the CodeGuru Profiler agent. However, when the application runs, the developer notices that a significant number of events are missing from the generated profile.<br><br>How can the developer reduce the number of missed events in the profile?</p>",
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
                "choice": "<p>A. Set a lower value for the SamplingIntervalInMilliseconds property.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set a lower value for the ReportingIntervalInMilliseconds property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set a higher value for the SamplingIntervalInMilliseconds property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set a higher value for the ReportingIntervalInMilliseconds property.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 365 discussion",
        "discusstion": [
          {
            "id": 754765,
            "date": "Sat 24 Dec 2022 09:02",
            "username": "almadeedo",
            "content": "Choosing A. <br>As stated in https://docs.aws.amazon.com/it_it/codeguru/latest/profiler-api/API_AgentConfiguration.html:<br>SamplingIntervalInMilliseconds is The sampling interval in milliseconds that is used to profile samples ... and so:<br>- Reducing (lower value) the sampling interval expressed in millisecond will increase the number of sampling, hence reduce the number of miss",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 744921,
            "date": "Wed 14 Dec 2022 10:17",
            "username": "mrbig00",
            "content": "The correct answer is C.  To reduce the number of missed events in the profile, the developer should set a higher value for the SamplingIntervalInMilliseconds property. This property controls the sampling rate of the agent, and setting a higher value will result in the agent collecting more data.<br><br>Option A is incorrect because setting a lower value for the SamplingIntervalInMilliseconds property would result in the agent collecting less data, leading to more missed events in the profile.<br><br>Option B is incorrect because the ReportingIntervalInMilliseconds property does not affect the number of missed events in the profile. This property controls how often the agent sends data to CodeGuru Profiler.<br><br>Option D is incorrect because setting a higher value for the ReportingIntervalInMilliseconds property would not affect the number of missed events in the profile. This property only controls how often the agent sends data to CodeGuru Profiler.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728656,
            "date": "Sun 27 Nov 2022 23:36",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/it_it/codeguru/latest/profiler-api/API_AgentConfiguration.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#366",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team set up a pipeline to launch a test environment. The developers want to automate tests for their application. The team created an AWS CodePipeline stage to deploy the application to a test environment in batches using AWS Elastic Beanstalk. A later CodePipeline stage contains a single action that uses AWS CodeBuild to run numerous automated Selenium-based tests on the deployed application. The team must speed up the pipeline without removing any of the individual tests.<br><br>Which set of actions will MOST effectively speed up application deployment and testing?</p>",
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
                "choice": "<p>A. Set up an all-at-once deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up a rolling update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up an immutable update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up a traffic-splitting deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 366 discussion",
        "discusstion": [
          {
            "id": 744610,
            "date": "Wed 14 Dec 2022 02:23",
            "username": "fabriciollf",
            "content": "The correct answer is A. <br>For test enviroment all-at-once is a good fit, see the aws documentation:<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html<br><br>All at once =E2=80=93 The quickest deployment method. Suitable if you can accept a short loss of service, and if quick deployments are important to you. With this method, Elastic Beanstalk deploys the new application version to each instance. Then, the web proxy or application server might need to restart. As a result, your application might be unavailable to users (or have low availability) for a short time.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734372,
            "date": "Sat 03 Dec 2022 12:10",
            "username": "ubuntu1234",
            "content": "A<br>Why use All At Once? I recommend considering it only for development and test environments. Downtimes due to failed deployments may affect your business badly in production.<br>https://blog.shikisoft.com/which_elastic_beanstalk_deployment_should_you_use/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 734013,
            "date": "Fri 02 Dec 2022 20:12",
            "username": "fswklotto1",
            "content": "Vote for A because of launching a test environment, should use all at once",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729513,
            "date": "Mon 28 Nov 2022 19:22",
            "username": "michaldavid",
            "content": "DDDDDD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728122,
            "date": "Sun 27 Nov 2022 11:09",
            "username": "k1kavi1",
            "content": "Going with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727723,
            "date": "Sat 26 Nov 2022 18:43",
            "username": "alfredk92",
            "content": "Should be D",
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
        "question_text": "<p>A developer has built an application using Amazon Cognito for authentication and authorization. After a user is successfully logged in to the application, the application creates a user record in an Amazon DynamoDB table.<br>What is the correct flow to authenticate the user and create a record in the DynamoDB table?<br></p>",
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
                "choice": "<p>A. Authenticate and get a token from an Amazon Cognito user pool. Use the token to access DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Authenticate and get a token from an Amazon Cognito identity pool. Use the token to access DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Authenticate and get a token from an Amazon Cognito user pool. Exchange the token for AWS credentials with an Amazon Cognito identity pool. Use the credentials to access DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Authenticate and get a token from an Amazon Cognito identity pool. Exchange the token for AWS credentials with an Amazon Cognito user pool. Use the credentials to access DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 367 discussion",
        "discusstion": [
          {
            "id": 346472,
            "date": "Wed 22 Sep 2021 00:59",
            "username": "faramawiMal_8mevlt",
            "content": "I will go with C<br><br>\\\"You can enable your users to sign-in with a user pool, and then access AWS services using an identity pool. After a successful authentication, your web or mobile app will receive user pool tokens from Amazon Cognito. You can use those tokens to retrieve AWS credentials that allow your app to access other AWS services\\\"<br>Reference: https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-integrating-user-pools-with-identity-pools.htmlWell explained!User Pools Authenticates and Identity Pools Authorizes.",
            "upvote_count": "2413",
            "selected_answers": ""
          },
          {
            "id": 447231,
            "date": "Sun 07 Nov 2021 08:03",
            "username": "Mal_8",
            "content": "Well explained!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 523688,
            "date": "Fri 14 Jan 2022 20:09",
            "username": "mevlt",
            "content": "User Pools Authenticates and Identity Pools Authorizes.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 592069,
            "date": "Tue 26 Apr 2022 05:33",
            "username": "statsu26",
            "content": "Answer: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 540683,
            "date": "Fri 04 Feb 2022 23:45",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 445903,
            "date": "Fri 05 Nov 2021 09:03",
            "username": "Sayto",
            "content": "Finally last question",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 398834,
            "date": "Thu 04 Nov 2021 02:32",
            "username": "ajeeshb",
            "content": "Answer is C. <br>Cognito User pool is for authentication and Identity pool is for authorization.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 398580,
            "date": "Tue 02 Nov 2021 12:10",
            "username": "Suresh108",
            "content": "CCCCCC. <br><br>Authentication - Cognito User pool.<br>Authorization - COgnito Identity pool.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 367968,
            "date": "Tue 19 Oct 2021 16:12",
            "username": "modarov",
            "content": "It is definitelyC: Authenticate and get a token from an Amazon Cognito user pool. Exchange the token for AWS credentials with an Amazon Cognito identity pool. Use the credentials to access DynamoDB. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 352611,
            "date": "Sat 16 Oct 2021 04:36",
            "username": "VAG1595",
            "content": "Answer: C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 348677,
            "date": "Thu 30 Sep 2021 21:29",
            "username": "TroyMcLure",
            "content": "Correct Answer: \\\"C\\\"",
            "upvote_count": "4",
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
        "question_text": "<p>A company is using AWS CloudFormation templates to deploy AWS resources. The company needs to update one of its AWS CloudFormation stacks.<br>What can the company do to find out how the changes will impact the resources that are running?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#368",
            "answers": [
              {
                "choice": "<p>A. Investigate the change sets.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Investigate the stack policies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Investigate the Metadata section.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Investigate the Resources section.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 368 discussion",
        "discusstion": [
          {
            "id": 514287,
            "date": "Sat 01 Jan 2022 01:37",
            "username": "mvsnogueira2021",
            "content": "I agree with option A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html<br><br>\\\"When you need to update a stack, understanding how your changes will affect running resources before you implement them can help you update stacks with confidence. Change sets allow you to preview how proposed changes to a stack might impact your running resources\\\"",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 577050,
            "date": "Mon 28 Mar 2022 20:58",
            "username": "eledu1985alexaws1232312321_",
            "content": "\\\"With change sets, you can preview the changes AWS CloudFormation will make to your stack\\\" --> https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.htmlthen why u picked D",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 635966,
            "date": "Sun 24 Jul 2022 12:14",
            "username": "alexaws1232312321_",
            "content": "then why u picked D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 530847,
            "date": "Sun 23 Jan 2022 22:55",
            "username": "Nicolas_21",
            "content": "A.  Investigate the change sets.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515025,
            "date": "Sun 02 Jan 2022 15:42",
            "username": "denccc",
            "content": "It's A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513952,
            "date": "Fri 31 Dec 2021 09:38",
            "username": "ayush_1995",
            "content": "With change sets, you can preview the changes AWS CloudFormation will make to your stack, and then decide whether to apply those changes.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 512038,
            "date": "Wed 29 Dec 2021 11:06",
            "username": "reve666",
            "content": "I think it's A",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#369",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created a Node.js web application on a local development machine. The developer wants to use AWS technology to host the website. The developer needs a solution that requires the least possible operational overhead and no code changes.<br>Which AWS service should the developer use to meet these requirements?<br></p>",
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
                "choice": "<p>A. AWS Elastic Beanstalk<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon EC2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Elastic Kubernetes Service (Amazon EKS)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 369 discussion",
        "discusstion": [
          {
            "id": 519412,
            "date": "Sat 08 Jan 2022 10:32",
            "username": "waqas1992",
            "content": "A<br>Just deploy ur code on AWS EB and you don't need to manage it",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 513530,
            "date": "Thu 30 Dec 2021 17:53",
            "username": "claudiadlr",
            "content": "I'll go with \\\"A\\\" - https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/<br>You can deploy Node.js web app using AWS Elastic Beanstalk, which offers few operational overhead.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 683332,
            "date": "Fri 30 Sep 2022 09:46",
            "username": "GenePoole",
            "content": "\\\"operational overhead\\\"managing systems. You need a system that looks after itself, that is not EC2 or EKS. Fargate pretty much looks after itself (not an option). Lambda would need the html and other static content hosted somewhere else, so is not a \\\"solution\\\". Elastic Beanstalk is the obvious choice here.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 540684,
            "date": "Fri 04 Feb 2022 23:46",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 515576,
            "date": "Mon 03 Jan 2022 10:50",
            "username": "denccc",
            "content": "It's A",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 513201,
            "date": "Thu 30 Dec 2021 10:52",
            "username": "Gaurav_GGG",
            "content": "fewest operational overhead -> Elastic BeanStalk.",
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
        "question_text": "<p>An application is processing clickstream data using Amazon Kinesis. The clickstream data feed into Kinesis experiences periodic spikes. The PutRecords API call occasionally fails and the logs show that the failed call returns the response shown below:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04119/0018400001.png\" class=\"in-exam-image\"><br>Which techniques will help mitigate this exception? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#370",
            "answers": [
              {
                "choice": "<p>A. Implement retries with exponential backoff.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a PutRecord API instead of PutRecords.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reduce the frequency and/or size of the requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon SNS instead of Kinesis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Reduce the number of KCL consumers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 370 discussion",
        "discusstion": [
          {
            "id": 515568,
            "date": "Mon 03 Jan 2022 10:40",
            "username": "denccc",
            "content": "A and C indeed",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 514098,
            "date": "Fri 31 Dec 2021 14:47",
            "username": "waqas1992",
            "content": "Answer: A,C",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 763747,
            "date": "Mon 02 Jan 2023 14:36",
            "username": "fe2fe2",
            "content": "The answer is definetely AC. <br>In PutRecords API page, it obviously recommended to \\\"Reduce the frequency or size of the requests\\\"<br>Check: https://docs.amazonaws.cn/en_us/kinesis/latest/APIReference/API_PutRecords.htmlProvisionedThroughputExceededException<br>The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide, and Error Retries and Exponential Backoff in Amazon in the Amazon General Reference.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 763748,
            "date": "Mon 02 Jan 2023 14:36",
            "username": "fe2",
            "content": "ProvisionedThroughputExceededException<br>The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide, and Error Retries and Exponential Backoff in Amazon in the Amazon General Reference.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 646893,
            "date": "Sun 14 Aug 2022 21:18",
            "username": "[Removed]",
            "content": "Answer is B and C -<br>public class ProvisionedThroughputExceededException<br>extends AmazonKinesisException<br>The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests.<br>https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/kinesis/model/ProvisionedThroughputExceededException.htmlThere are two different operations in the Kinesis Data Streams API that add data to a stream, PutRecords and PutRecord. The PutRecords operation sends multiple records to your stream per HTTP request, and the singular PutRecord operation sends records to your stream one at a time (a separate HTTP request is required for each record). You should prefer using PutRecords for most applications because it will achieve higher throughput per data producer. For more information about each of these operations, see the separate subsections below.<br>https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-sdk.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 644020,
            "date": "Mon 08 Aug 2022 10:22",
            "username": "cen007",
            "content": "Tricky Question as usual.<br><br>This is preventing KDS from write throttling.<br>-Change the configuration settings for your producer so that your write rate is decreased.<br>-Limit the request rate of the producer and the number of records that are sent (per second) to match the capacity of the stream.<br>https://aws.amazon.com/premiumsupport/knowledge-center/kinesis-data-stream-throttling-errors/<br><br>Retry and Exponential will not mitigate \\\"Rate exceeded for Shard\\\", it only ensures data will eventually be put in the stream.<br>\\\"If you're not using an AWS SDK, you should retry original requests that receive server (5xx) or throttling errors. However, client errors (4xx) indicate that you need to revise the request to correct the problem before trying again. \\\"<br>https://docs.aws.amazon.com/general/latest/gr/api-retries.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 589572,
            "date": "Thu 21 Apr 2022 20:33",
            "username": "GeekInside",
            "content": "answer: A & C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 565984,
            "date": "Sat 12 Mar 2022 09:25",
            "username": "EnjoyAnswer",
            "content": "I think it's B,C<br>Question is asking mitigating. Not deal it after happed.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 548278,
            "date": "Wed 16 Feb 2022 04:44",
            "username": "ShrikantMS",
            "content": "A AND C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 528302,
            "date": "Thu 20 Jan 2022 10:51",
            "username": "eukalix",
            "content": "A and C",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 527684,
            "date": "Wed 19 Jan 2022 16:52",
            "username": "Rmnvcc",
            "content": "answer: A & C",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: AC"
          }
        ]
      },
      {
        "question_id": "#371",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a serverless ecommerce application that is based on AWS Lambda. An asynchronous workflow manages the checkout process and must orchestrate different Lambda functions. The workflow runs one function for each item in the shopping cart. The developer is using AWS Step Functions to orchestrate the process.<br>The checkout process is running the Lambda functions serially, and the developer needs to improve the performance of the process.<br>What should the developer do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#371",
            "answers": [
              {
                "choice": "<p>A. Use a Choice state to identify the size of the cart and invoke a specific Lambda function with the entire cart content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a Retry field for a second run to process all the items that failed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a Parallel state to iterate over all the items in parallel.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a Map state to iterate over all the items in the cart.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 371 discussion",
        "discusstion": [
          {
            "id": 543898,
            "date": "Wed 09 Feb 2022 17:06",
            "username": "mk115",
            "content": "It's D.  (Map can also run tasks in parallel) In question there is \\\"Each item in the shopping cart triggers a separate function in the process.\\\" so we need to execute lambda per item in list.<br>As it's said in the documentation:<br>While the Parallel state executes multiple branches of steps using the same input, a Map state will execute the same steps for multiple entries of an array in the state input.<br>https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 518368,
            "date": "Thu 06 Jan 2022 17:32",
            "username": "ej123",
            "content": "Answer is C",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 713477,
            "date": "Tue 08 Nov 2022 05:38",
            "username": "cloud_collector",
            "content": "https://towardsaws.com/aws-step-functions-map-state-parallel-state-3d1be5be8fc5",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 646549,
            "date": "Sun 14 Aug 2022 06:01",
            "username": "ALQASSASS",
            "content": "Answer is D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 626242,
            "date": "Sat 02 Jul 2022 18:54",
            "username": "unknownuser123",
            "content": "Map is the right answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 603061,
            "date": "Wed 18 May 2022 00:57",
            "username": "Raynman727",
            "content": "https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html<br>I'm going to go with MAP. You can have different functions in the parallel state, but the functions need to take in the same input. Being a shopping cart, each item is its own thing and own function, so you would use MAP. If you were passing the entire cart to each function, it would be parallel.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 592308,
            "date": "Tue 26 Apr 2022 12:32",
            "username": "kitkwok",
            "content": "should be map<br><br>The Map state (\\\"Type\\\": \\\"Map\\\") can be used to run a set of steps for each element of an input array. While the Parallel state executes multiple branches of steps using the same input, a Map state will execute the same steps for multiple entries of an array in the state input.<br><br>For an introduction to using a Map state, see the Map State Tutorial.<br><br>In addition to the common state fields, Map states include these additional fields.<br><br>Iterator (Required)<br>The Iterator field's value is an object that defines a state machine which will process each element of the array.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 591349,
            "date": "Mon 25 Apr 2022 04:51",
            "username": "w2000w",
            "content": "D.  Use a Map state to iterate over all the items in the cart.<br><br>https://aws.amazon.com/blogs/aws/new-step-functions-support-for-dynamic-parallelism/<br>\\\"...The ProcessAllItems state is using Map to process items in the order in parallel.\\\"",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 590944,
            "date": "Sun 24 Apr 2022 10:45",
            "username": "mgm7",
            "content": "Map, for reasons mentioned here.In particular, there is an option:<br>The MaxConcurrencyfield's value is an integer that provides an upper bound on how many invocations of the Iterator may run in parallel. For instance, a MaxConcurrency value of 10 will limit your Map state to 10 concurrent iterations running at one time.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 576062,
            "date": "Sun 27 Mar 2022 10:09",
            "username": "mabel_liu",
            "content": "https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 571108,
            "date": "Sat 19 Mar 2022 15:54",
            "username": "kozzleto",
            "content": "D: Map executes function with different input (each item of the array - check Iterator and ItemsPath). Parallel only executes with the same input.<br>https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 540686,
            "date": "Fri 04 Feb 2022 23:49",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 512072,
            "date": "Wed 29 Dec 2021 11:51",
            "username": "reve666",
            "content": "Parallel State - Begin parallel branches of execution",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#372",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a third-party tool to build, bundle, and package its applications on-premises, and store them locally. The company uses Amazon EC2 instances to run its front-end applications.<br>How can an application be deployed from the source control system onto the EC2 instances?<br></p>",
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
                "choice": "<p>A. Use AWS CodeDeploy and point it to the local storage to directly deploy a bundle in a .zip, .tar, or .tar.gz format.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Upload the bundle to an Amazon S3 bucket and specify the S3 location when doing a deployment using AWS CodeDeploy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a repository using AWS CodeCommit to automatically trigger a deployment to the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeBuild to automatically deploy the latest build to the latest EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 372 discussion",
        "discusstion": [
          {
            "id": 511319,
            "date": "Tue 28 Dec 2021 17:20",
            "username": "t33me",
            "content": "B.  \\\"For other source control systems, you can bundle and upload the revision to an Amazon S3 bucket in a .zip, .tar, or .tar.gz format and specify the Amazon S3 location when doing a deployment.\\\"",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 683363,
            "date": "Fri 30 Sep 2022 10:12",
            "username": "GenePoole",
            "content": "Not CodeCommit (C) as they do all their CI on prem. They have already built it so CodeBuild is irrelevant(D). So it is one of the CodeDeploy choices, either from S3 or locally. Getting cloud to access an on-prem location is more complicated that copying files into a bucket.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 646273,
            "date": "Sat 13 Aug 2022 12:13",
            "username": "ALQASSASS",
            "content": "Option B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 639772,
            "date": "Sat 30 Jul 2022 20:04",
            "username": "AshokkumarC",
            "content": "Option B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 542344,
            "date": "Mon 07 Feb 2022 13:00",
            "username": "WLELEL2",
            "content": "B for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 535999,
            "date": "Sun 30 Jan 2022 09:04",
            "username": "BeDiepyJP_PA",
            "content": "CodeDeploy can deploy on-premises and EC2.Pick Acodedeploy can only deploy from s3 and git ANS is B",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 536514,
            "date": "Sun 30 Jan 2022 23:21",
            "username": "JP_PA",
            "content": "codedeploy can only deploy from s3 and git ANS is B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515705,
            "date": "Mon 03 Jan 2022 13:40",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 513272,
            "date": "Thu 30 Dec 2021 12:04",
            "username": "Gaurav_GGG",
            "content": "B is correct. All other options irrelevant.",
            "upvote_count": "4",
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
        "question_text": "<p>A developer is creating AWS CloudFormation templates to manage an application's deployment in Amazon Elastic Container Service (Amazon ECS) through<br>AWS CodeDeploy. The developer wants to automatically deploy new versions of the application to a percentage of users before the new version becomes available for all users.<br>How should the developer manage the deployment of the new version?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#373",
            "answers": [
              {
                "choice": "<p>A. Modify the CloudFormation template to include a Transform section and the AWS::CodeDeploy::BlueGreen hook.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the new version in a new CloudFormation stack. After testing is complete, update the application's DNS records for the new stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run CloudFormation stack updates on the application stack to deploy new application versions when they are available.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a nested stack for the new version. Include a Transform section and the AWS::CodeDeploy::BlueGreen hook.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 373 discussion",
        "discusstion": [
          {
            "id": 516741,
            "date": "Tue 04 Jan 2022 15:55",
            "username": "msengupta",
            "content": "To enable CloudFormation to perform blue/green deployments on a stack, include the following information in its stack template:<br><br>A Transform section in your template that invokes the AWS::CodeDeployBlueGreen transform and a Hook section that invokes the AWS::CodeDeploy::BlueGreen hook.<br><br>At least one of the ECS resources that will trigger a blue/green deployment if replaced during a stack update. Currently, those resources are AWS::ECS::TaskDefinition and AWS::ECS::TaskSet.<br><br>Source: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 514089,
            "date": "Fri 31 Dec 2021 14:25",
            "username": "SHAAHIBHUSHANAWS",
            "content": "D<br>If we modify existing stack then it will overide current setup. So use nested stack to refer existing template and add new code.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 512084,
            "date": "Wed 29 Dec 2021 12:02",
            "username": "reve666",
            "content": "You can't use the AWS::CodeDeploy::BlueGreen hook in a template that includes nested stack resources.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#374",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to make sure that only one user from its Admin group has the permanent right to delete an Amazon EC2 resource. There should be no changes in the existing policy under the Admin group.<br>What should a developer use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#374",
            "answers": [
              {
                "choice": "<p>A. AWS managed policy<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Inline policy<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. IAM trust relationship<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Security Token Service (AWS STS)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 374 discussion",
        "discusstion": [
          {
            "id": 512087,
            "date": "Wed 29 Dec 2021 12:06",
            "username": "reve666",
            "content": "I think B because Inline policy is Strict one-to-one relationship between policy and principal...",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 707091,
            "date": "Sat 29 Oct 2022 11:13",
            "username": "cloud_collector",
            "content": "When you change a managed policy, the change is applied to all principal entities that the policy is attached to. For example, if you want to add permission for a new AWS API, you can update the managed policy to add the permission. (If you're using an AWS managed policy, AWS updates to the policy.) When the policy is updated, the changes are applied to all principal entities that the policy is attached to. In contrast, to change an inline policy you must individually edit each identity that contains the policy. For example, if a group and a role both contain the same inline policy, you must individually edit both principal entities in order to change that policy.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#inline-policies",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514333,
            "date": "Sat 01 Jan 2022 04:28",
            "username": "ayush_1995ayush_1995",
            "content": "guessing Daws managed policy have a wide scope... whereas prod is least privileged allow",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 514334,
            "date": "Sat 01 Jan 2022 04:29",
            "username": "ayush_1995",
            "content": "aws managed policy have a wide scope... whereas prod is least privileged allow",
            "upvote_count": "1",
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
        "question_text": "<p>A company is planning to deploy an application on AWS behind an Elastic Load Balancer. The application uses an HTTP/HTTPS listener and must access the client IP addresses.<br>Which load-balancing solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#376",
            "answers": [
              {
                "choice": "<p>A. Use an Application Load Balancer and the X-Forwarded-For headers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a Network Load Balancer (NLB). Enable proxy protocol support on the NLB and the target application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Application Load Balancer. Register the targets by the instance ID. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a Network Load Balancer and the X-Forwarded-For headers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 376 discussion",
        "discusstion": [
          {
            "id": 515557,
            "date": "Mon 03 Jan 2022 10:29",
            "username": "brightosey",
            "content": "A.  Use an Application Load Balancer and the X-Forwarded-For headers.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 590040,
            "date": "Fri 22 Apr 2022 15:56",
            "username": "Ivanyan",
            "content": "A.  Use an Application Load Balancer and the X-Forwarded-For headers.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 546582,
            "date": "Sun 13 Feb 2022 17:42",
            "username": "netk",
            "content": "I'd go for A. <br>Application needs to know the originating IP address and 'X-Forwarded-For' HTTP field keeps this value.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#377",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an Amazon S3 bucket containing premier content that it intends to make available to only paid subscribers of its website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors.<br>How can the company limit the ability to download a premier content file in the S3 bucket to paid subscribers only?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#377",
            "answers": [
              {
                "choice": "<p>A. Apply a bucket policy that allows anonymous users to download the content from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a bucket policy that requires multi-factor authentication for requests to access the S3 bucket objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable server-side encryption on the S3 bucket for data protection against the non-paying website visitors.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 377 discussion",
        "discusstion": [
          {
            "id": 514351,
            "date": "Sat 01 Jan 2022 05:22",
            "username": "msengupta",
            "content": "When you create a presigned URL for your object, you must provide your security credentials, specify a bucket name, an object key, the HTTP method (GET to download the object), and the expiration date and time. Presigned URLs are valid only for the specified duration.<br><br>Anyone who receives the presigned URL can then access the object. For example, if you have a video in your bucket and both the bucket and the object are private, you can share the video with others by generating a presigned URL.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 596418,
            "date": "Tue 03 May 2022 16:31",
            "username": "cloudbusting",
            "content": "pre signed url is the correct one.",
            "upvote_count": "2",
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
        "question_text": "<p>A developer is building a website that will be hosted in an Amazon S3 bucket with static website hosting enabled. The developer will use Amazon Route 53 for the<br>DNS service and will use an alias record to point the company's domain to the bucket. The developer must redirect one S3 object to a different URL.<br>What should the developer use so that the redirect will work correctly from a page on the website?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#378",
            "answers": [
              {
                "choice": "<p>A. A Route 53 CNAME alias record that points to the new location<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. An S3 object-level redirect through system-defined metadata<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. A Route 53 A record that points to the new location<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A redirect that is configured within the S3 bucket's policy<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 378 discussion",
        "discusstion": [
          {
            "id": 637835,
            "date": "Wed 27 Jul 2022 07:56",
            "username": "Gomer",
            "content": "\\\"You can redirect requests for an object to another object or URL by setting the website redirect location in the metadata of the object. You set the redirect by adding the x-amz-website-redirect-location property to the object metadata. On the Amazon S3 console, you set the Website Redirect Location in the metadata of the object. If you use the Amazon S3 API, you set x-amz-website-redirect-location. The website then interprets the object as a 301 redirect.To redirect a request to another object, you set the redirect location to the key of the target object. To redirect a request to an external URL, you set the redirect location to the URL that you want. For more information about object metadata, see System-defined object metadata.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 523053,
            "date": "Thu 13 Jan 2022 21:01",
            "username": "mevlt",
            "content": "It is A.  CNAME is for other resources. Alias is for AWS native services.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 632696,
            "date": "Sun 17 Jul 2022 21:54",
            "username": "pierpaolo",
            "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 607795,
            "date": "Thu 26 May 2022 22:42",
            "username": "anna_montana",
            "content": "ANSWER A<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 586284,
            "date": "Fri 15 Apr 2022 12:45",
            "username": "JoellaLi",
            "content": "B. <br>'You can redirect requests for an object to another object or URL by setting the website redirect location in the metadata of the object. You set the redirect by adding the x-amz-website-redirect-location property to the object metadata. On the Amazon S3 console, you set the Website Redirect Location in the metadata of the object. If you use the Amazon S3 API, you set x-amz-website-redirect-location. The website then interprets the object as a 301 redirect.<br><br>To redirect a request to another object, you set the redirect location to the key of the target object. To redirect a request to an external URL, you set the redirect location to the URL that you want. For more information about object metadata, see System-defined object metadata.'<br><br>Link: https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 537348,
            "date": "Mon 31 Jan 2022 20:21",
            "username": "OrffeusAwsexam100anna_montana",
            "content": "B is correctno Route 53 is also involved here.It is A. you are right. B does not involve route 53. My answer as well is A",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 575259,
            "date": "Fri 25 Mar 2022 22:16",
            "username": "Awsexam100anna_montana",
            "content": "no Route 53 is also involved here.It is A. you are right. B does not involve route 53. My answer as well is A",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 607794,
            "date": "Thu 26 May 2022 22:41",
            "username": "anna_montana",
            "content": "you are right. B does not involve route 53. My answer as well is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 536404,
            "date": "Sun 30 Jan 2022 19:54",
            "username": "JP_PA",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#379",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an event handling system. To handle messages asynchronously, the developer created a standard Amazon SQS queue. Quality assurance testing reveals that some events were processed multiple times.<br>What is the recommended way to ensure the events are not processed more than once?<br></p>",
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
                "choice": "<p>A. Change long polling to short polling.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a FIFO queue and configure deduplication.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Convert the standard SQS queue into a FIFO queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Send the messages with message timers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 379 discussion",
        "discusstion": [
          {
            "id": 520629,
            "date": "Mon 10 Jan 2022 05:21",
            "username": "ej123",
            "content": "Gonna say B<br><br>\\\"You can't convert an existing standard queue into a FIFO queue. To make the move, you must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue.\\\"",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 515028,
            "date": "Sun 02 Jan 2022 15:47",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 705456,
            "date": "Thu 27 Oct 2022 12:48",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 550038,
            "date": "Fri 18 Feb 2022 06:36",
            "username": "aamhi",
            "content": "It's B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 547404,
            "date": "Mon 14 Feb 2022 22:42",
            "username": "DaniWS10",
            "content": "I'd go for B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#380",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has written a multi-threaded application that is running on a fleet of Amazon EC2 instances. The operations team has requested a graphical method to monitor the number of running threads over time.<br>What is the MOST efficient way to fulfill this request?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#380",
            "answers": [
              {
                "choice": "<p>A. Periodically send the thread count to AWS X-Ray segments, then generate a service graph on demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a custom Amazon CloudWatch metric and periodically perform a PutMetricData call with the current thread count.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Periodically log thread count data to Amazon S3. Use Amazon Kinesis to process the data into a graph.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Periodically write the current thread count to a table using Amazon DynamoDB and use Amazon CloudFront to create a graph.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 380 discussion",
        "discusstion": [
          {
            "id": 599003,
            "date": "Mon 09 May 2022 12:59",
            "username": "Asim17",
            "content": "Since it is mentioned graphical representation. I will go for A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590063,
            "date": "Fri 22 Apr 2022 16:42",
            "username": "Ivanyan",
            "content": "B.  Create a custom Amazon CloudWatch metric and periodically perform a PutMetricData call with the current thread count.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 586410,
            "date": "Fri 15 Apr 2022 18:13",
            "username": "hk6963",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph_a_metric.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 577968,
            "date": "Wed 30 Mar 2022 04:45",
            "username": "Flyodu",
            "content": "thread",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 577688,
            "date": "Tue 29 Mar 2022 17:11",
            "username": "w2000w",
            "content": "The CloudWatch agent provides this metric already (custom metric)<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html<br>...<br>processes_total_threads<br>The total number of threads making up the processes. This metric is available only on Linux instances.<br><br>This metric is not collected on macOS computers.<br><br>Unit: Count",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 552522,
            "date": "Mon 21 Feb 2022 05:59",
            "username": "pre_test_2021",
            "content": "I will go with A.  Multiple threads<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-java-multithreading.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 529357,
            "date": "Fri 21 Jan 2022 21:18",
            "username": "CHRIS12722222",
            "content": "cloudwatch can plot graphs",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514101,
            "date": "Fri 31 Dec 2021 14:57",
            "username": "SHAAHIBHUSHANAWS",
            "content": "B<br><br>custom metric",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 512091,
            "date": "Wed 29 Dec 2021 12:13",
            "username": "reve666CHRIS12722222WLELEL2WLELEL2",
            "content": "The operations team has requested a graphical methodcloudwatch can plot graphsJust because it can plot graphs, doesn't mean it is as useful as X-RAY graphical analysis. The question asks the most \\\"effective\\\" wayNVM. B sounds like a better option",
            "upvote_count": "2111",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 522404,
            "date": "Wed 12 Jan 2022 20:27",
            "username": "CHRIS12722222WLELEL2WLELEL2",
            "content": "cloudwatch can plot graphsJust because it can plot graphs, doesn't mean it is as useful as X-RAY graphical analysis. The question asks the most \\\"effective\\\" wayNVM. B sounds like a better option",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 543176,
            "date": "Tue 08 Feb 2022 16:57",
            "username": "WLELEL2WLELEL2",
            "content": "Just because it can plot graphs, doesn't mean it is as useful as X-RAY graphical analysis. The question asks the most \\\"effective\\\" wayNVM. B sounds like a better option",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 543177,
            "date": "Tue 08 Feb 2022 16:58",
            "username": "WLELEL2",
            "content": "NVM. B sounds like a better option",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is building an application that processes a stream of user-supplied data. The data stream must be consumed by multiple Amazon EC2 based processing applications in parallel and in real time. Each processor must be able to resume without losing data if there is a service interruption. The Application<br>Architect plans to add other processors in the near future, and wants to minimize the amount data duplication involved.<br>Which solution will satisfy these requirements?<br></p>",
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
                "choice": "<p>A. Publish the data to Amazon SQS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Publish the data to Amazon Kinesis Data Firehose.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Publish the data to Amazon CloudWatch Events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Publish the data to Amazon Kinesis Data Streams.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 382 discussion",
        "discusstion": [
          {
            "id": 518647,
            "date": "Thu 06 Jan 2022 22:54",
            "username": "ej123",
            "content": "DDDDDDDD",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 670538,
            "date": "Fri 16 Sep 2022 08:31",
            "username": "trungducng2910",
            "content": "D for sure",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 604705,
            "date": "Sat 21 May 2022 05:43",
            "username": "AWSFastLearner",
            "content": "It should be in real time. So Kinesis streams.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 603337,
            "date": "Wed 18 May 2022 16:12",
            "username": "krispectiveSandipSamanta",
            "content": "C is the correct answer. When we use kinesis streams the application must handle the duplication of the records. Check here https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-duplicates.html. A combination of versioning and unique ID is while using opensearch \\\". For example, with Opensearch you can use a combination of versioning and unique IDs to prevent duplicated processing.\\\" Thus the correct answer is C. You mean D, right?",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 718710,
            "date": "Tue 15 Nov 2022 13:07",
            "username": "SandipSamanta",
            "content": "You mean D, right?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 601670,
            "date": "Sat 14 May 2022 17:53",
            "username": "MikeyJMikeyJ",
            "content": "SQS with a FIFO queue and data deduplication. Thoughts?Actually maybe Kinesis Data streams is correct, using \\\"A sequence number is a unique identifier for each data record. Sequence number is assigned by Kinesis Data Streams when a data producer calls PutRecord or PutRecords API to add data to a Kinesis data stream\\\"",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 601671,
            "date": "Sat 14 May 2022 17:58",
            "username": "MikeyJ",
            "content": "Actually maybe Kinesis Data streams is correct, using \\\"A sequence number is a unique identifier for each data record. Sequence number is assigned by Kinesis Data Streams when a data producer calls PutRecord or PutRecords API to add data to a Kinesis data stream\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513953,
            "date": "Fri 31 Dec 2021 09:42",
            "username": "denccc",
            "content": "Would go for D",
            "upvote_count": "3",
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
        "question_text": "<p>A developer is troubleshooting the permissions of an application that needs to make changes to an Amazon RDS database. The developer has access to the IAM role that the application is using.<br>Which command structure should the developer use to test the role permissions?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#383",
            "answers": [
              {
                "choice": "<p>A. aws sts assume-role<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. aws iam attach-role-policy<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aws ssm resume-session<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. aws rds add-role-to-db-cluster<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 383 discussion",
        "discusstion": [
          {
            "id": 705447,
            "date": "Thu 27 Oct 2022 12:26",
            "username": "cloud_collector",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/iam-assume-role-cli/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 590071,
            "date": "Fri 22 Apr 2022 17:00",
            "username": "Ivanyan",
            "content": "A.  aws sts assume-role",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 521126,
            "date": "Mon 10 Jan 2022 21:40",
            "username": "CHRIS12722222",
            "content": "A.  Use the sts assume role to verify the permissions",
            "upvote_count": "4",
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
        "question_text": "<p>An organization is using Amazon API Gateway to provide a public API called `Survey` for collecting user feedback posts about its products. The survey API has<br>`DEV` and `PROD` stages and consists of one resource `/feedback` which allows users to retrieve/create/update single feedback posts.<br>A version-controlled Swagger file is used to define a new API that retrieves multiple feedback posts. To add the new API resource `/ listFeedbackForProduct` the developer makes changes to the Swagger file defining an API, uploads the file to the organization's version control system, and uses the API Gateway Import API feature to apply the changes to the Survey API. After successful import, the developer runs the tests against the DEV stage and finds that resource `/listFeedbackForProduct` is not available.<br>What is MOST likely the reason for resource not being available?<br></p>",
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
                "choice": "<p>A. Even though the Swagger import was successful, resource creation failed afterwards.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. There is a propagation delay of several minutes in creating API Gateway resources after import.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The developer needs to restart the API Gateway stage after import in order to apply the changes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The developer needs to create a new deployment after import in order to deploy the changes.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 384 discussion",
        "discusstion": [
          {
            "id": 520500,
            "date": "Sun 09 Jan 2022 23:34",
            "username": "balabalabalabala",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/updating-api.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 546608,
            "date": "Sun 13 Feb 2022 18:26",
            "username": "netk",
            "content": "Answer is D. <br>Resource updates require redeploying the API, whereas configuration updates do not.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 536348,
            "date": "Sun 30 Jan 2022 18:29",
            "username": "JP_PA",
            "content": "Ans : D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#385",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application that is deployed to Amazon EC2 is using Amazon DynamoDB.  The application calls the DynamoDB REST API. Periodically, the application receives a ProvisionedThroughputExceededException error when the application writes to a DynamoDB table.<br>Which solutions will mitigate this error MOST cost-effectively? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#385",
            "answers": [
              {
                "choice": "<p>A. Modify the application code to perform exponential backoff when the error is received.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the application to use the AWS SDKs for DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the read and write throughput of the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a DynamoDB Accelerator (DAX) cluster for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a second DynamoDB table. Distribute the reads and writes between two tables.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 385 discussion",
        "discusstion": [
          {
            "id": 520300,
            "date": "Sun 09 Jan 2022 16:46",
            "username": "JP_PAYahowmy",
            "content": "A and B<br>Example: Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests using Error Retries and Exponential Backoff.I think its B and C, what if the item size is larger than the provisioned WCU? exponential backoff will not help and you will always get throttled for that item.",
            "upvote_count": "101",
            "selected_answers": ""
          },
          {
            "id": 559338,
            "date": "Wed 02 Mar 2022 11:39",
            "username": "Yahowmy",
            "content": "I think its B and C, what if the item size is larger than the provisioned WCU? exponential backoff will not help and you will always get throttled for that item.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546857,
            "date": "Mon 14 Feb 2022 03:37",
            "username": "seeking_cert",
            "content": "This question appeared in my exam. A and B are the answers",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 713467,
            "date": "Tue 08 Nov 2022 05:07",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 639690,
            "date": "Sat 30 Jul 2022 14:55",
            "username": "tomosabc1",
            "content": "I think the answer is BC. <br>Because option A and B are basically talking about the same thing(exponential backoff), but B is obviously more effectively than A and cost us less development efforts. When B is there, there is no need to choose A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 604801,
            "date": "Sat 21 May 2022 12:12",
            "username": "mywogunleye",
            "content": "A and B<br>Managing Settings on DynamoDB Provisioned Capacity Tables - Amazon DynamoDB<br>\\\"If your application performs reads or writes at a higher rate than your table can support, DynamoDB begins to throttle those requests. When DynamoDB throttles a read or write, it returns a ProvisionedThroughputExceededException to the caller. The application can then take appropriate action, such as waiting for a short interval before retrying the request. and We recommend that you use the AWS SDKs for software development. The AWS SDKs provide built-in support for retrying throttled requests; you do not need to write this logic yourself. For more information, see Error Retries and Exponential Backoff.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 539679,
            "date": "Thu 03 Feb 2022 13:19",
            "username": "Vlasto",
            "content": "A,B as they do basically the same thing. You could consider C if the issue was occuring more often and also in that case there would be no need to increase read capacity, only write capacity.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 520248,
            "date": "Sun 09 Jan 2022 15:21",
            "username": "josh119891",
            "content": "prefer AC at the beginning, but the doc is mentioned like<br>'each AWS SDK implements an exponential backoff algorithm for better flow control',<br>'The AWS SDKs implement automatic retry logic and exponential backoff.'.<br>So if the most effectively is about saving money and time, AB are correct.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 515538,
            "date": "Mon 03 Jan 2022 10:10",
            "username": "[Removed]",
            "content": "Options A and C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 514593,
            "date": "Sat 01 Jan 2022 17:37",
            "username": "CHRIS12722222CHRIS12722222",
            "content": "AC.  I think read/write CU increase will helpi think AB",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 536749,
            "date": "Mon 31 Jan 2022 09:22",
            "username": "CHRIS12722222",
            "content": "i think AB",
            "upvote_count": "1",
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
        "question_text": "<p>A developer is building a highly secure healthcare application using serverless components. This application requires writing temporary data to /tmp storage on an<br>AWS Lambda function.<br>How should the developer encrypt this data?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#386",
            "answers": [
              {
                "choice": "<p>A. Enable Amazon EBS volume encryption with an AWS KMS CMK in the Lambda function configuration so that all storage attached to the Lambda function is encrypted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up the Lambda function with a role and key policy to access an AWS KMS CMK. Use the CMK to generate a data key used to encrypt all data prior to writing to /tmp storage.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use OpenSSL to generate a symmetric encryption key on Lambda startup. Use this key to encrypt the data prior to writing to /tmp storage.<br></p>",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 386 discussion",
        "discusstion": [
          {
            "id": 515132,
            "date": "Sun 02 Jan 2022 19:23",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 600193,
            "date": "Wed 11 May 2022 17:38",
            "username": "MikeyJ",
            "content": "The /tmp directory is backed by an Amazon EC2 instance store and is<br>encrypted at-rest. (Page 12)<br><br>https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/security-overview-aws-lambda.pdf",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590078,
            "date": "Fri 22 Apr 2022 17:14",
            "username": "Ivanyan",
            "content": "B.  Set up the Lambda function with a role and key policy to access an AWS KMS CMK. Use the CMK to generate a data key used to encrypt all data prior to writing to /tmp storage.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 537585,
            "date": "Tue 01 Feb 2022 03:10",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 514955,
            "date": "Sun 02 Jan 2022 12:51",
            "username": "successzy",
            "content": "The answer is B. ",
            "upvote_count": "3",
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
        "question_text": "<p>A company maintains an application that uses an Amazon RDS DB instance for its database. A developer needs to implement encryption at rest for the database.<br>Which combination of steps should the developer take to meet this requirement? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#388",
            "answers": [
              {
                "choice": "<p>A. Enable encryption on the DB instance in the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Stop the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Restore the DB instance from the encrypted snapshot.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Take a snapshot of the DB instance, and create an encrypted copy of the snapshot.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a customer managed key in AWS Key Management Service (AWS KMS).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 388 discussion",
        "discusstion": [
          {
            "id": 513320,
            "date": "Thu 30 Dec 2021 12:57",
            "username": "Gaurav_GGG",
            "content": "C, D<br><br>You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created.<br>Hence, encrypt snapshot and then restore from this.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 515773,
            "date": "Mon 03 Jan 2022 14:29",
            "username": "denccc",
            "content": "C and D",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 623376,
            "date": "Mon 27 Jun 2022 17:37",
            "username": "ExamCandidate01",
            "content": "You can enable encryption for an Amazon RDS DB instance when you create it, but not after it's created (\\\"A\\\" is incorrect). However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance, and then creating an encrypted copy of that snapshot . (\\\"D\\\" is a correct response). To perform encryption, would require encryption key so my preference would be to go with \\\"E\\\" as second (as none of the remaining choices make any sense)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 607870,
            "date": "Fri 27 May 2022 04:45",
            "username": "mike_0",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 599811,
            "date": "Wed 11 May 2022 03:23",
            "username": "Asim17",
            "content": "C & D is right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 569085,
            "date": "Wed 16 Mar 2022 14:45",
            "username": "DBrasseur",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Limitations<br>You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 561912,
            "date": "Sun 06 Mar 2022 10:50",
            "username": "SK_2_SK",
            "content": "Why do we need to restore DB from an encrypted snapshot, if what we want to do is make an encrypted snapshot??<br><br>Wouldn't it be stop the copy, make an encrypted snapshot?",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 543571,
            "date": "Wed 09 Feb 2022 08:18",
            "username": "ANPT1103",
            "content": "C.  Restore the DB instance from the encrypted snapshot.D.  Take a snapshot of the DB instance, and create an encrypted copy of the snapshot.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          }
        ]
      },
      {
        "question_id": "#389",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is attempting to use the Amazon S3 PutObject API operation to upload an object to an S3 bucket that has default encryption enabled. The developer receives a 400 Bad Request error.<br>What is the most likely cause of this error?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#389",
            "answers": [
              {
                "choice": "<p>A. The API operation cannot access the encryption key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The HTTP Content-Length header is missing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The object exceeds the maximum object size that is allowed.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The S3 bucket exceeds the maximum storage capacity that is allowed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 389 discussion",
        "discusstion": [
          {
            "id": 521440,
            "date": "Tue 11 Jan 2022 11:03",
            "username": "squeck",
            "content": "It's C, since missing Content-Length returns 411:<br><br>Code: MissingContentLength<br>Description: You must provide the Content-Length HTTP header.<br>HTTP Status Code: 411 Length Required",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 607793,
            "date": "Thu 26 May 2022 22:24",
            "username": "mohamedba",
            "content": "The good response is C https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 599613,
            "date": "Tue 10 May 2022 15:38",
            "username": "mcdirk",
            "content": "voting C<br><br>https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 577051,
            "date": "Mon 28 Mar 2022 21:04",
            "username": "eledu1985",
            "content": "B is incorrect because no content length ends with a 411 code not 400. All the rest are: D: close to impossible, A. .. also not right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 541840,
            "date": "Sun 06 Feb 2022 17:26",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 531988,
            "date": "Tue 25 Jan 2022 10:00",
            "username": "Rmnvcc",
            "content": "it is c",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 515884,
            "date": "Mon 03 Jan 2022 16:50",
            "username": "Edwars",
            "content": "Would go for C as well<br><br>from https://docs.aws.amazon.com/AmazonS3/latest/API/API_Error.html there are 52 different errors which can return a 400 Bad Request error but I think<br><br>Code: EntityTooLarge<br>Description: Your proposed upload exceeds the maximum allowed object size.<br>HTTP Status Code: 400 Bad Request<br>SOAP Fault Code Prefix: Client<br><br>is the unique that matches with an answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515026,
            "date": "Sun 02 Jan 2022 15:44",
            "username": "denccc",
            "content": "Would go for C: https://docs.aws.amazon.com/AmazonS3/latest/API/API_Error.html",
            "upvote_count": "2",
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
        "question_text": "<p>A company requires all data that is stored in Amazon DynamoDB tables to be encrypted at rest with keys that are managed by the company.<br>How can a developer meet these requirements WITHOUT changing the application?<br></p>",
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
                "choice": "<p>A. Use the AWS Encryption SDK to encrypt items before insertion.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable table-level encryption with an AWS managed customer master key (CMK).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Certificate Manager (ACM) to create one certificate for each DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Import key material in DynamoDB, and enable table-level encryption.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 390 discussion",
        "discusstion": [
          {
            "id": 713461,
            "date": "Tue 08 Nov 2022 04:39",
            "username": "cloud_collector",
            "content": "DynamoDB encryption at rest provides an additional layer of data protection by always securing your data in an encrypted table=E2=80=94including its primary key, local and global secondary indexes, streams, global tables, backups, and DynamoDB Accelerator (DAX) clusters whenever the data is stored in durable media.<br><br>Customer managed key =E2=80=93 The key is stored in your account and is created, owned, and managed by you. You have full control over the KMS key (AWS KMS charges apply).<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 634255,
            "date": "Wed 20 Jul 2022 23:13",
            "username": "AWSEXPERT42069",
            "content": "Answer is B. ) Enable table-level encryption with an AWS managed customer master key (CMK)<br><br>You can supply the key the companies \\\"owns\\\" as a CMK into KMS, which can then be used to encrypt the table:<br>https://docs.aws.amazon.com/kms/latest/developerguide/services-dynamodb.html#dynamodb-encrypt<br>https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html<br><br>This is the alternative to using the default AWS managed key for Dynamo",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 631472,
            "date": "Thu 14 Jul 2022 19:07",
            "username": "GomerGomer",
            "content": "The original text of the question reads as follows: \\\"A company requires all data that is stored in Amazon DynamoDB tables to be encrypted at rest with keys that are managed by the company.How can a developer meet these requirements WITHOUT changing the application?\\\".As stated from the URL below: \\\"use a customer managed key with imported key material\\\"If you summarize the three key types and benefits of each choice, the answer becomes clear.https://docs.aws.amazon.com/kms/latest/developerguide/services-dynamodb.htmlP.S. the word \\\"owned\\\" vs. \\\"managed\\\" key between the original question and the exam topics version makes all the difference in clarifying the answer (IMHO)",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 631476,
            "date": "Thu 14 Jul 2022 19:10",
            "username": "Gomer",
            "content": "P.S. the word \\\"owned\\\" vs. \\\"managed\\\" key between the original question and the exam topics version makes all the difference in clarifying the answer (IMHO)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 541843,
            "date": "Sun 06 Feb 2022 17:27",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521412,
            "date": "Tue 11 Jan 2022 10:09",
            "username": "ersahinco",
            "content": "Answer: B<br>Ref:<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/services-dynamodb.html",
            "upvote_count": "4",
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
        "question_text": "<p>A developer is automating a new application deployment with AWS Serverless Application Model (AWS SAM). The new application has one AWS Lambda function and one Amazon S3 bucket. The Lambda function must access the S3 bucket to only read objects.<br>How should the developer configure AWS SAM to grant the necessary read privilege to the S3 bucket?<br></p>",
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
                "choice": "<p>A. Reference a second Lambda authorizer function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a custom S3 bucket policy to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Simple Queue Service (SQS) topic for only S3 object reads. Reference the topic in the template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the S3ReadPolicy template to the Lambda function's execution role.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 391 discussion",
        "discusstion": [
          {
            "id": 515668,
            "date": "Mon 03 Jan 2022 13:06",
            "username": "denccc",
            "content": "It's D https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-template-list.html",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 607925,
            "date": "Fri 27 May 2022 07:41",
            "username": "shirokame",
            "content": "It's D<br>AWS SAM allows you to choose from a list of policy templates to scope the permissions of your Lambda functions to the resources that are used by your application<br>And S3ReadPolicy is one of the template<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-templates.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590762,
            "date": "Sat 23 Apr 2022 20:50",
            "username": "mcdirk",
            "content": "D<br>Touch misleading on purpose...of course..<br>but the template can be modified to specify your specific bucket(s) and action(s)<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-template-list.html#s3-read-policy",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 560839,
            "date": "Fri 04 Mar 2022 15:29",
            "username": "EpicPureblood",
            "content": "D Dawg",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 541847,
            "date": "Sun 06 Feb 2022 17:32",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#395",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a new application that uses an Amazon DynamoDB table. The specification states that all items that are older than 48 hours must be removed.<br>Which solution will meet this requirement?<br></p>",
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
                "choice": "<p>A. Create a new attribute that has the Number data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new attribute that has the String data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new attribute that has the Number data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new attribute that has the String data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 395 discussion",
        "discusstion": [
          {
            "id": 515565,
            "date": "Mon 03 Jan 2022 10:38",
            "username": "denccc",
            "content": "I would go for C: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 519285,
            "date": "Sat 08 Jan 2022 03:29",
            "username": "mevlt",
            "content": "I has to be number because date has to be in Epoch. Since it is asking to create LSI which is not possible after table creation.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 674314,
            "date": "Tue 20 Sep 2022 17:32",
            "username": "Gene_Poole",
            "content": "Using a number makes more sense for a date value than a string. \\\"Shortly after the date and time of the specified timestamp, DynamoDB deletes the item\\\", so must be C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541853,
            "date": "Sun 06 Feb 2022 17:37",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#396",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is troubleshooting connectivity issues between an AWS Lambda function and an Amazon EC2 instance that runs Amazon Linux 2. The Lambda function and the EC2 instance cannot communicate with each other even though the Lambda function is configured to access resources in the EC2 instance's subnet.<br>How can the developer inspect the network traffic between the Lambda function and the EC2 instance?<br></p>",
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
                "choice": "<p>A. Inspect the VPC flow logs for network activity.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the traceroute command on the EC2 instance to check connectivity.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Analyze the Amazon CloudWatch metrics for network traffic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the telnet command on the EC2 instance to check connectivity.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 396 discussion",
        "discusstion": [
          {
            "id": 513338,
            "date": "Thu 30 Dec 2021 13:11",
            "username": "Gaurav_GGG",
            "content": "A -Inspect the VPC flow logs for network activity.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 546090,
            "date": "Sat 12 Feb 2022 22:00",
            "username": "netk",
            "content": "Clearly, A. <br>VPC flows logs to inspect east-west traffic (within VPC).",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 540733,
            "date": "Sat 05 Feb 2022 02:56",
            "username": "dave0808",
            "content": "Agree with A<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html<br>Flow logs can help you with a number of tasks, such as:<br>Diagnosing overly restrictive security group rules<br>Monitoring the traffic that is reaching your instance<br>Determining the direction of the traffic to and from the network interfaces",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#397",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a web application that is deployed on Amazon EC2 instances behind an internet-facing Application Load Balancer (ALB). The developer must add an Amazon CloudFront distribution in front of the ALB.  The developer also must ensure that customer data from outside the VPC is encrypted in transit.<br>Which combination of CloudFront configuration settings should the developer use to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#397",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 397 discussion",
        "discusstion": [
          {
            "id": 511878,
            "date": "Wed 29 Dec 2021 07:53",
            "username": "reve666CHRIS12722222",
            "content": "Answer B/EAnswer: BE",
            "upvote_count": "51",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 520824,
            "date": "Mon 10 Jan 2022 13:04",
            "username": "CHRIS12722222",
            "content": "Answer: BE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 581459,
            "date": "Tue 05 Apr 2022 23:04",
            "username": "w2000w",
            "content": "Choose Match Viewer only if you specify Redirect HTTP to HTTPS or HTTPS Only for Viewer Protocol Policy.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 564669,
            "date": "Thu 10 Mar 2022 09:52",
            "username": "Yahowmy",
            "content": "How B is correct? what if the viewer uses HTTP?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541857,
            "date": "Sun 06 Feb 2022 17:40",
            "username": "JP_PA",
            "content": "ANS: B&E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 538180,
            "date": "Tue 01 Feb 2022 21:22",
            "username": "Orffeus",
            "content": "B&E as per https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront-to-custom-origin.html",
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
        "question_text": "<p>An AWS Lambda function requires read access to an Amazon S3 bucket and requires read/write access to an Amazon DynamoDB table. The correct IAM policy already exists.<br>What is the MOST secure way to grant the Lambda function access to the S3 bucket and the DynamoDB table?<br></p>",
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
                "choice": "<p>A. Attach the existing IAM policy to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role for the Lambda function. Attach the existing IAM policy to the role. Attach the role to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM user with programmatic access. Attach the existing IAM policy to the user. Add the user access key ID and secret access key as environment variables in the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the AWS account root user access key ID and secret access key as encrypted environment variables in the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 398 discussion",
        "discusstion": [
          {
            "id": 513216,
            "date": "Thu 30 Dec 2021 11:02",
            "username": "Gaurav_GGG",
            "content": "Creating Role and providing access is most secure.B.  Create an IAM role for the Lambda function. Attach the existing IAM policy to the role. Attach the role to the Lambda function.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 519207,
            "date": "Fri 07 Jan 2022 22:32",
            "username": "waqas1992",
            "content": "B<br>policy can't be directly attched to Lambda directly. So assign policy to role and attach role to lambda",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 541861,
            "date": "Sun 06 Feb 2022 17:41",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515584,
            "date": "Mon 03 Jan 2022 10:57",
            "username": "denccc",
            "content": "it's B",
            "upvote_count": "5",
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
        "question_text": "<p>A developer is working on an ecommerce website. The developer wants to review server logs without logging in to each of the application servers individually. The website runs on multiple Amazon EC2 instances, is written in Python, and needs to be highly available.<br>How can the developer update the application to meet these requirements with MINIMUM changes?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#399",
            "answers": [
              {
                "choice": "<p>A. Rewrite the application to be cloud native and to run on AWS Lambda, where the logs can be reviewed in Amazon CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up centralized logging by using Amazon Elasticsearch Service (Amazon ES), Logstash, and Kibana.<br></p>",
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
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 399 discussion",
        "discusstion": [
          {
            "id": 513330,
            "date": "Thu 30 Dec 2021 13:04",
            "username": "Gaurav_GGG",
            "content": "A & B.  Too many ModificationsC.  Not efficient<br>D.  Only D looks relevant. Install the unified Amazon CloudWatch agent on the EC2 instances. Configure the agent to push the application logs to CloudWatch.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 515785,
            "date": "Mon 03 Jan 2022 14:35",
            "username": "denccc",
            "content": "D is correct",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 546082,
            "date": "Sat 12 Feb 2022 21:42",
            "username": "netk",
            "content": "Answer: D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 541864,
            "date": "Sun 06 Feb 2022 17:43",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#400",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is changing the configuration for a CPU-intensive AWS Lambda function that runs once an hour. The function usually takes 45 seconds to run, but sometimes the run time is up to 1 minute. The timeout parameter is set to 3 minutes, and all other parameters are set to default.<br>The developer needs to optimize the run time of this function.<br>Which solution will meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#400",
            "answers": [
              {
                "choice": "<p>A. Redeploy the function within the default VPC. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the function's memory.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Redeploy the function by using Lambda layers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the function's reserved concurrency.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 400 discussion",
        "discusstion": [
          {
            "id": 671278,
            "date": "Sat 17 Sep 2022 07:27",
            "username": "trungducng2910",
            "content": "increase memory > reduce the run time > B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 546598,
            "date": "Sun 13 Feb 2022 18:07",
            "username": "netk",
            "content": "BBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 541865,
            "date": "Sun 06 Feb 2022 17:44",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521751,
            "date": "Tue 11 Jan 2022 21:11",
            "username": "CHRIS12722222",
            "content": "B looks good",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 521683,
            "date": "Tue 11 Jan 2022 19:02",
            "username": "phattran",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521534,
            "date": "Tue 11 Jan 2022 13:41",
            "username": "ersahinco",
            "content": "Answer: B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      }
    ]
  }