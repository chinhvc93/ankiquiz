// 11. AWS Lambda and Serverless
var AWSLambdaAndServerless = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 50007,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You implement a REST API using a Lambda Function. The API is exposed through the AWS API gateway. The Lambda Function calls a third-party service to retrieve the data. But this third-party service may not respond in time. You already increased the timeout of the Lambda Function to be 15 minutes. However, sometimes users still get an HTTP 504 error after about 30 seconds. Which of the following options is the most possible reason?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>Please check <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html</a> for the Amazon API Gateway limits. The integration timeout is 50 milliseconds - 29 seconds for all integration types. And the limit cannot be increased.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because HTTP 504 is Gateway Timeout instead of Internal Server Error.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​</strong> When the third-party service does not respond in time, the API Gateway reaches its limit after 29 seconds. It is not the third-party service that returns the HTTP 504 error code in this scenario.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT:</strong>​ Because the API call&nbsp;through API Gateway cannot exceed 29 seconds due to the limits. This is the most possible reason to cause the issue.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​</strong> Because the limit of Lambda Function can be 15 minutes according to <a href=\"https://aws.amazon.com/about-aws/whats-new/2018/10/aws-lambda-supports-functions-that-can-run-up-to-15-minutes/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2018/10/aws-lambda-supports-functions-that-can-run-up-to-15-minutes/</a>. The limit of API Gateway has caused the issue.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39874,
            "question_id": 50007,
            "answers": [
              {
                "choice": "<p>The error code indicates that there is an Internal Server Error. Check the CloudWatch Logs of the Lambda Function.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The third-party service has returned an HTTP 504 error after 30 seconds to the Lambda Function. Then the Lambda Function forwards the error to the API Gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The maximum of integration timeout for AWS API Gateway is 29 seconds. Although the timer for Lambda Function does not expire yet, the API Gateway already hits its limitation.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>When Lambda Function integrates with API Gateway, the effective Lambda Function execution time limit is 30 seconds although the limit is set to 15 minutes.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 50008,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have deployed a REST API in Amazon API Gateway. And the API integrates with a DynamoDB table. The table has a large amount of data. For certain queries, it may take over 10 seconds to finish. You want to set a custom timeout of 5 seconds for the API so that users do not have to wait a long time for the response. How should you implement this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>Users can set up the API Integration Request using the API Gateway console. Details can be found in .<a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html</a></p>\r\n\r\n<p>The below screenshot is an example of configuring the integration timeout:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong><img src=\"https://lh5.googleusercontent.com/lAGZLsiWUE5KAUP5A07IlCdVeaMyTAeyeV_UrMKCrmXG0uL_fbJAC1NF0aPBsUUirxNLcvIL_TrUyAKos-fAX_9wW-s0or12HhhknHl1yo9Hj3188Gh7d0StSwr7CydHSjSnjI4t\" style=\"height:253px; width:413px\" /></strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:​ </strong>Because this cannot guarantee that the query time is less than 5 seconds. The custom timeout needs to be modified through API Gateway.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​ </strong>Because the integration timeout of API gateway can be configured between 50 milliseconds and 29 seconds.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because this option does not configure the integration timeout for the REST API.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT:​ </strong>This option creates an integration timeout for the DynamoDB table. If the processing time in DynamoDB is longer than 5 seconds, the incoming request is disconnected by the API Gateway.&nbsp;</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39875,
            "question_id": 50008,
            "answers": [
              {
                "choice": "<p>You can configure the DynamoDB Accelerator (DAX) in the DynamoDB table so that the table can process the queries from the API Gateway faster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The timeout of API gateway is 30 seconds and cannot be customized. Define a custom timeout of 5 seconds at the application or function level.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enlarge the DynamoDB read capacity to a higher value to shorten the waiting time for the users of the REST API.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the integration request of the API gateway, uncheck the &ldquo;Use Default Timeout&rdquo; box and configure the custom timeout to be 5 seconds.<br />\r\n&nbsp;</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 50009,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are developing a REST API in Amazon API Gateway. The API integrates with a Lambda Function. You found that when clients hit the API using an unsupported method, the API Gateway has returned a Missing Authentication Token (403) response. As the response does not provide much information, you want to customize the response. For example, you want to change the error code to 404 and add some custom HTTP headers. How would you implement this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>Users can customize the gateway response using the API Gateway console according to&nbsp;</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-gateway-response-using-the-console.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-gateway-response-using-the-console.html</a>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT:​ </strong>Users can select the particular Missing Authentication Token 403 gateway response under the API and customize it as below screenshot:</li>\r\n</ul>\r\n\r\n<p><strong><img src=\"https://lh5.googleusercontent.com/HO41W76tHPjeclDgf4vWdmRdFs7jlgdrVOfNeqYKtWFl_t_UwJVFrhw2xh9ja51ntoeL71GAZ1rn-bd4MvRVpF2mkOdLCqk3tCE1n9e8XOvir2JB3EMwgTjo9Df4uDEVA410JbX-\" style=\"height:276px; width:602px\" /></strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​ </strong>In this scenario, it needs to modify the default gateway response. The integration response of the API method should not be changed.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because in the AWS API Gateway console, users cannot forward a gateway response to another. Instead, the status code, headers and bodies should be customized.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​ </strong>Similar to option B. The method configuration should not be modified. It does not change the API Gateway behavior when clients hit an unsupported method.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39876,
            "question_id": 50009,
            "answers": [
              {
                "choice": "<p>In the AWS API Gateway console, choose Gateway Responses under the API and select the 403 response. Add custom headers and modify the response status code to 404.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In the API method&#39;s integration response, add the custom headers and modify the status code to 404.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the AWS API Gateway console, select the Missing Authentication Token 403 response. Forward it to an HTTP 404 Not Found response. Select the 404 response and add custom headers accordingly.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Select the API method and click the integration response. Forward the 403 response to a 404 Not Found response. In the meantime, add the custom headers in the forwarded response.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 50010,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You implement an API in AWS API Gateway. The API integrates with a Lambda Function which returns the query results from an RDS database. For security purposes, you want the API to allow traffic only from a VPC endpoint since it should be used internally. The VPC endpoint ID is vpc-11bb22cc. What is the best method to implement this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong><br />\r\nAmazon API Gateway resource policies are used to control whether a specified principal can invoke the API.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:​ </strong>Because vpce-11bb22cc can not be used as a Principal. The field of Principal should be &ldquo;*&rdquo;.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:​</strong> Because it allows all Principals to use the API and then denies the actions if the SourceVpce is not vpce-11bb22cc. This policy guarantees that only the traffic from vpce-11bb22cc can access the API.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because explicit deny is better than explicit allow as it has a clear boundary. Other entities may still be able to access this API if there are explicit allows in their IAM policies.&nbsp;</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​ </strong>Because the explicit deny takes priorities. So the first part of the policy denies all the traffic, including the requests from the endpoint of vpce-11bb22cc.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html</a>.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 58976,
            "question_id": 50010,
            "answers": [
              {
                "question_id": "50010",
                "choice": "<p>Implement the below policy in the API Gateway Resource Policy:</p>\r\n\r\n<p>{&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,<br />\r\n&nbsp;&nbsp;&quot;Statement&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;vpce-11bb22cc&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [ &quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;]&nbsp;<br />\r\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;]<br />\r\n}</p>\r\n\r\n<p>&nbsp;</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50010",
                "choice": "<p>Implement the below policy in the API Gateway Resource Policy:</p>\r\n\r\n<p>{&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,<br />\r\n&nbsp;&nbsp;&quot;Statement&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;*&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [ &quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;]&nbsp;&nbsp;<br />\r\n&nbsp;&nbsp; &nbsp; &nbsp;},<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Deny&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;*&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [&nbsp;&quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;],<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Condition&quot; : {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;StringNotEquals&quot;: {&nbsp;&quot;aws:SourceVpce&quot;: &quot;vpce-11bb22cc&quot;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;]<br />\r\n}</p>\r\n\r\n<p>&nbsp;</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "50010",
                "choice": "<p>Implement the below policy in the API Gateway Resource Policy:</p>\r\n\r\n<p>{&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,<br />\r\n&nbsp;&nbsp;&quot;Statement&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;*&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [&nbsp;&quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;],<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Condition&quot; : {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;StringEquals&quot;: {&nbsp;&quot;aws:SourceVpce&quot;: &quot;vpce-11bb22cc&quot; }<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;]<br />\r\n}</p>\r\n\r\n<p>&nbsp;</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50010",
                "choice": "<p>Implement the below policy in the API Gateway Resource Policy:</p>\r\n\r\n<p>{&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,<br />\r\n&nbsp;&nbsp;&quot;Statement&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Deny&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;*&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [&nbsp;&quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;]&nbsp;&nbsp;<br />\r\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;},<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: &quot;*&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;execute-api:Invoke&quot;,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [&nbsp;&quot;arn:aws:execute-api:region:account-id:api-id/*&quot;&nbsp;],<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Condition&quot; : {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;StringEquals&quot;: {&nbsp;&quot;aws:SourceVpce&quot;: &quot;vpce-11bb22cc&quot;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;]<br />\r\n}</p>\r\n\r\n<p>&nbsp;</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 50011,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are developing a mobile application. As it is a proof of concept, you want to deliver the project as soon as possible and you prefer using a serverless pattern. The whole application contains the presentation tier, the logical tier and the database tier. The component in the presentation tier is the mobile application running on a user device. For the logical tier and database tier, which services should you use as the serverless mobile backend?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>As the serverless pattern is required, we should choose the serverless services that AWS fully manages.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because Amazon RDS MySQL is not a pure serverless service. Users still need to configure the database instance type, storage and provisioned IOPS. Details can be found in&nbsp;<a href=\"https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf\" target=\"_blank\">https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf</a>.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because AWS ECS with EC2 instance is not a serverless service,&nbsp;ECS with Fargate can be a serverless service. In this scenario, Amazon API Gateway with AWS Lambda is the most appropriate for the logic tier.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because AWS Auto Scaling Group and Amazon DocumentDB are not serverless services.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Because all the mentioned services are serverless. Users do not need to create or maintain servers for the whole architecture.</li>\r\n</ul>\r\n\r\n<p>Check&nbsp;<a href=\"https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf\" target=\"_blank\">https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf</a> on how to create AWS serverless multi-tier architectures via Amazon API Gateway and AWS Lambda.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 59009,
            "question_id": 50011,
            "answers": [
              {
                "question_id": "50011",
                "choice": "<p>The logical tier contains Amazon API Gateway and AWS Lambda. The API Gateway endpoints are secured via Amazon Certificate Manager. Amazon RDS MySQL is used for the data tier.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50011",
                "choice": "<p>The logic tier contains Amazon API Gateway and AWS ECS with EC2 instances. The API Gateway endpoints are secured via third-party identity providers. The data tier includes the resource of Amazon DynamoDB.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50011",
                "choice": "<p>The logic tier contains Amazon CloudFront and AWS Auto Scaling Group. Amazon Cognito identity pools provide identity services. Amazon DocumentDB is used for the data tier.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50011",
                "choice": "<p>The logic tier contains Amazon API Gateway and AWS Lambda. The API Gateway endpoints are secured via Amazon Cognito user pools. Amazon DynamoDB is used for the data tier.<br />\r\n&nbsp;</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 50012,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You have built a web API in AWS using API Gateway, AWS Lambda, and DynamoDB. For the DynamoDB table, the read and write capacities have been provisioned as 100. Recently, you found&nbsp;ProvisionedThroughputExceededException for some client requests, which mainly happens when the traffic is high during the daytime.&nbsp;Which of the following actions can help to reduce the number of exceptions?&nbsp;(Select TWO)&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer​ ​&ndash;​ A and&nbsp;C</strong></p>\r\n\r\n<p>In this scenario, to reduce the number of ProvisionedThroughputExceededException, there are two approaches. One is to enlarge the capacities of the DynamoDB table. The other is to reduce the traffic.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A&nbsp;​is​ CORRECT</strong>:​ Because DynamoDB supports auto-scaling, can be used to enlarge the capacity. Take the below snapshot as an example:</li>\r\n</ul>\r\n\r\n<p><strong><img src=\"https://lh4.googleusercontent.com/qJdb0Xnf3pIwkBCXur5dXZWpyr8HGDOC1kx7TwSD3BZVmYnzrnPaR5e1kl4m35Xf9pbNqXFZv2sR0bdf47c0KEa8Ki09jQSTAfT0r7dgV3hi13MxXtq5R5YmUTJroYeuQEaauSMF\" style=\"height:204px; width:389px\" /></strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​B&nbsp;​is​ ​incorrect</strong>:​ Because adding retires can potentially increase the traffic, and it does not help reduce the number of exceptions.</li>\r\n\t<li><strong>Option​ ​C&nbsp;​is​ CORRECT</strong>:​ Because the SQS queue can control the requests made to the DynamoDB table and it acts as a cache that controls the rate of requests to the table.</li>\r\n\t<li><strong>Option​ ​D&nbsp;​is​ ​incorrect</strong>:​ Because CloudFront does not work with DynamoDB. Instead, Elasticache can be used as a caching layer for DynamoDB.</li>\r\n\t<li><strong>Option​ ​E&nbsp;​is​ ​incorrect</strong>:​ Because users can directly enable DynamoDB auto scaling rather than configure it manually.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 93098,
            "question_id": 50012,
            "answers": [
              {
                "question_id": "50012",
                "choice": "<p>In the DynamoDB table, enable auto-scaling for the read and write capacities.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "50012",
                "choice": "<p>Adding retries to the AWS Lambda function if ProvisionedThroughputExceededException happens.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50012",
                "choice": "<p>Configure an SQS queue to control the traffic to the DynamoDB table. The extra messages are put in the queue first before they reach the table.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "50012",
                "choice": "<p>Configure AWS CloudFront as a caching layer in front of DynamoDB to reduce traffic to the DynamoDB table.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "50012",
                "choice": "<p>Create a CloudWatch alarm for ProvisionedThroughputExceededException. Enlarge the provisioned capacities if the alarm is triggered.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 50013,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You create a Lambda Function to process clients&rsquo; queries from a web application. The workload is time sensitive so that you want the Lambda function to finish processing and respond as quickly as possible. You prefer allocating more resources such as memories or CPUs to the Lambda Function. However, you are unsure how many resources are being used at the moment. Which action can help you to get the current memory usage and allocate more resources if needed?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>Check <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html</a> on how to configure Lambda Functions. Users can allocate memories for a Lambda Function as below:</p>\r\n\r\n<p><strong><img src=\"https://lh3.googleusercontent.com/BiM-4QuemUffPIimEgQs46vVZQzrIY2qndouG5d7e9B9s2MdzA3jLntdmEVEEkco8gZO9fpxCv28j05KLufNvCVpa3N4lEVvPnrQ-lPNfEVcsC0-uHzUgYLPHwDhzYtykm-2ChIj\" style=\"height:193px; width:368px\" /></strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:​ </strong>We cannot use the default CloudWatch metrics to get the allocated and used memory.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:​ </strong>We can get the max memory used from the CloudWatch logs.</li>\r\n</ul>\r\n\r\n<p><strong><img src=\"https://lh6.googleusercontent.com/dzUQ-MuoDkubyE8EoJHrYK9bjgDM8cYPKdK9rax6DyQJQ2U6pli3FS-2_gBDUTrmRCfJhfOFeo2pjJr6nvTi41i1_3fU7IR5Gq40d2DKdSSsi5H-m2ggymCU-TZSvooWc2kcE8Sy\" style=\"height:35px; width:602px\" /></strong></p>\r\n\r\n<p>If the max memory used is close to the memory allocated, it is better to allocate more memories to speed up the processing.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​</strong> Because the reserved concurrency does not influence how many memories or CPUs the Lambda Function has to process a request.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Although Lambda Function is serverless, users are still responsible for monitoring the running status and allocating more resources if needed.&nbsp;</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39880,
            "question_id": 50013,
            "answers": [
              {
                "choice": "<p>Check the default CloudWatch metrics to get the allocated and used memories. Pre-allocate more resources to the Lambda Function if required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check CloudWatch Logs to get the max memory used and allocate more memory if needed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>&nbsp;Check CloudWatch metrics to get the max number of invocations. Increase the reserved concurrency to speed up the processing time.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Memories and CPUs in Lambda Function are managed by AWS and can auto-scale if required. You are not supposed to allocate more resources by yourself.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 50014,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are developing a new Lambda Function. Sometimes the function invocation may fail, such as when retries are exhausted or the event age has been exceeded. For these failed events, you want to route the asynchronous function failed results to a destination resource automatically without writing additional code. Which of the following destination is supported?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\n\n<p>Lambda asynchronous invocations can put an event or message on Amazon Simple Notification Service (SNS), Amazon Simple Queue Service (SQS), or Amazon EventBridge for further processing.</p>\n\n<p>Check the explanations in</p>\n\n<p><a href=\"https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/\">https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/</a></p>\n\n<p>Option​ ​A ​is​ CORRECT because the EventBridge event bus can be configured as a destination of asynchronous function results.<br />\nOptions B, C and D are incorrect because Lambda functions cannot route execution results to these services.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39881,
            "question_id": 50014,
            "answers": [
              {
                "choice": "<p>EventBridge event bus</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Step Functions</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon MQ</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS SWF</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 50015,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have deployed a new Lambda Function and an RDS MySQL database. The Lambda is not configured in any VPC and has internet access. As the Lambda Function needs to communicate with the RDS database to fetch data, you configure the Lambda Function in the private subnet where the database resides. However, after that, the Lambda Function has lost the internet connection. How would you resolve this problem?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>Refer to <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html</a> for how to configure a Lambda Function to access resources in a VPC. You can configure the Lambda Function to access to a VPC as below:</p>\r\n\r\n<p><strong><img src=\"https://lh5.googleusercontent.com/gpIC6XloczWpdRvUiey6fDXjdblI_9a1sZkTYZXPtqt6IP_9fQ0j3wWt0br3e3JrnaX8JuFzABWa4wfXzKKXx7Bey7RecHff8XkW9NK-smQPBf_BiXQ9f4TrtAZ-9QA-dORENeb2\" style=\"height:157px; width:212px\" /></strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT:​ </strong>Because when a function is attached in the private subnet, it does not have access to the internet unless the VPC provides access. The NAT Gateway can provide the internet access for the resources in the private gateway.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​ </strong>In this question, the Lambda function needs the internet access. It does not mention that it needs to access other AWS services. VPC endpoints cannot fulfill the requirements.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because if the Lambda function is not attached to the VPC, it cannot communicate with the RDS instance. However, the Lambda function needs to fetch data from the RDS database.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​ </strong>Because the NAT gateway should be used for the resources in the private subnet to connect to the internet. Attaching an internet gateway in the public subnet does not help.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39882,
            "question_id": 50015,
            "answers": [
              {
                "choice": "<p>In the VPC private subnet, route the outbound traffic to a NAT gateway in a public subnet.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create VPC endpoints for all the services that the Lambda Function needs to access.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Do not attach the VPC access to the Lambda Function as, by default, the Lambda Function has the internet access.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Attach an Internet gateway to the public subnet of the VPC. Modify the route table to use the internet gateway for all inbound and outbound traffic.<br />\r\n&nbsp;</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 50016,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are developing an application using a microservices architecture. Some serverless AWS services such as Lambda, SQS and DynamoDB are used. One Lambda Function is deployed to reset users&rsquo; passwords, but it does not run frequently. When the function is inactive and called, it may take a longer time to handle the requests. You want to minimize the processing time for the function. Which of the following Lambda &quot;features&quot; you can use to get greater control over the performance of your&nbsp;serverless applications at any scale?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>If the Lambda Function is not used for a long time, AWS may recycle the container. And if there are new requests to the function, AWS needs to deploy the container again for the function. In order to pre-warm the Lambda function, the best way is to use the &quot;Provisioned Concurrency&quot; which is a &quot;feature&quot; of the Lambda function.</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/\">https://aws.amazon.com/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/</a></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/03/11/ckeditor_68457.png\" style=\"height:744px; width:1040px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Options​ ​A, B and D are&nbsp;​incorrect:​ </strong>Because these are NOT a &quot;feature&quot; of the Lambda function.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39883,
            "question_id": 50016,
            "answers": [
              {
                "choice": "<p>For the Lambda Function, avoid using languages such as Java that need a long compilation time. Use Node.js or Python instead.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a CloudWatch Event rule and select the Lambda Function as its target. The event is executed every minute to warm up the function so that the function stays active.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the Lambda Function to use &quot;Provisioned Concurrency&quot; always to stay active so that the Lambda container does not get reused by AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CloudWatch alarm to monitor the invocations of the function. If there are no invocations for 1 hour, trigger the alarm to call the Lambda Function so that the function stays warm.<br />\r\n&nbsp;</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      }
    ]
  }