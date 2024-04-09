var SCS_C01_Part3 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#301",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is operating a website using Amazon CloudFront. CloudFront serves some content from Amazon S3 and other content from web servers running on<br>Amazon EC2 instances behind an Application Load Balancer (ALB). Amazon DynamoDB is used as the data store. The company already uses AWS Certificate<br>Manager (ACM) to store a public TLS certificate that can optionally secure connections between the website users and CloudFront. The company has a new requirement to enforce end-to-end encryption in transit.<br>Which combination of steps should the company take to meet this requirement? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#301",
          "answers": [
            {
              "choice": "<p>Update the CloudFront distribution, configuring it to optionally use HTTPS when connecting to origins on Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the web application configuration on the web servers to use HTTPS instead of HTTPS when connecting to DynamoDB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the CloudFront distribution to redirect HTTP connections to HTTPS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the web servers on the EC2 instances to listen using HTTPS using the public ACM TLS certificate. Update the ALB to connect to the target group using HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the ALB listener to listen using HTTPS using the public ACM TLS certificate. Update the CloudFront distribution to connect to the HTTPS listener.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a TLS certificate. Configure the web servers on the EC2 instances to use HTTPS only with that certificate. Update the ALB to connect to the target group using HTTPS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 301 discussion",
      "discusstion": [
        {
          "id": 583631,
          "date": "Sun 10 Apr 2022 10:54",
          "username": "f4bi4n",
          "content": "its CEF<br>- B doesen't makes sence, DDB is always HTTPS<br>- the requirement is end to end encryption. In the text is written that HTTPS is optionally on Cloudfront, so C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes , B is default using HTTPS<br><br>Data in transit: All your data in DynamoDB is encrypted in transit (except the data in DAX). By default, communications to and from DynamoDB use the HTTPS protocol, which protects network traffic by using Secure Sockets Layer (SSL)/Transport Layer Security (TLS) encryption.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/encryption.usagenotes.html</li><li>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAXEncryptionInTransit.html</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 669719,
          "date": "Thu 15 Sep 2022 11:06",
          "username": "cloud_collector",
          "content": "Yes , B is default using HTTPS<br><br>Data in transit: All your data in DynamoDB is encrypted in transit (except the data in DAX). By default, communications to and from DynamoDB use the HTTPS protocol, which protects network traffic by using Secure Sockets Layer (SSL)/Transport Layer Security (TLS) encryption.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/encryption.usagenotes.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAXEncryptionInTransit.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827680,
          "date": "Fri 03 Mar 2023 06:23",
          "username": "kujin",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAXEncryptionInTransit.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517026,
          "date": "Tue 04 Jan 2022 23:28",
          "username": "argol",
          "content": "Ans : BCF<br>CF -> ALB -> EC2 servers -> Dynamo<br>CF to ALB<br>ALB to EC2 servers",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1155958,
          "date": "Thu 22 Feb 2024 01:36",
          "username": "Raphaello",
          "content": "Going with CEF.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Important note: You can't use a self-signed certificate for HTTPS communication between CloudFront and your origin.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront-to-custom-origin.html#using-https-cloudfront-to-origin-certificate</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 1161844,
          "date": "Wed 28 Feb 2024 18:14",
          "username": "Raphaello",
          "content": "Important note: You can't use a self-signed certificate for HTTPS communication between CloudFront and your origin.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront-to-custom-origin.html#using-https-cloudfront-to-origin-certificate",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913529,
          "date": "Sat 03 Jun 2023 14:29",
          "username": "Toptip",
          "content": "B doesn't make sense at all... The question ask for End to End TLS between the users and CloudFront..<br>A vs C: I think C is better to redirect HTTP to HTTPS otherwise the users will see 404 page if they opened the HTTP page by mistake",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 889465,
          "date": "Thu 04 May 2023 17:08",
          "username": "ITGURU51",
          "content": "The question states that we need to configure end to end TLS encryption. Therefore the ALB need a public certificate and theweb servers running on EC2 instances need to be configured to use HTTPS which also requires a certificate. Also Cloudfront needs to be configured to redirect HTTP to HTTPS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 855907,
          "date": "Thu 30 Mar 2023 17:15",
          "username": "peddyua",
          "content": "the key is \\\"enforce end-to-end encryption in transit\\\"<br> this means A is out, since ALL communications MUST be ENFORCED to encryprt traffic<br>this leaves the following choices:<br>C. to harden security on CF byencrypting all 100% of communications (redirect HTTP to HTTPS, pretty common practice)<br>E. Encrypt communication between CF and ALB as question says \\\"...that can optionally secure connections between the website users and CloudFront\\\" which means we need to further improve connection so all 100% of connections are encrypted.<br>F. Securing END to END from ALB to EC2.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 760327,
          "date": "Wed 28 Dec 2022 21:55",
          "username": "awsec2",
          "content": "cde , Option A is not necessary because it only applies to content served from Amazon S3, which is not part of the end-to-end encryption requirement. Option B is not necessary because the data store is not part of the end-to-end encryption requirement. Option F is not necessary because the company already has a TLS certificate stored in ACM that can be used for this purpose.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 752377,
          "date": "Wed 21 Dec 2022 14:46",
          "username": "RameshAWS",
          "content": "C, E, F",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751265,
          "date": "Tue 20 Dec 2022 18:11",
          "username": "[Removed]",
          "content": "CDE (if you are using the Apache HTTP Server, you can follow these steps:<br><br>Download the ACM certificate and the private key from ACM.<br>Copy the certificate and private key files to your EC2 instance.<br>Update the Apache HTTP Server configuration to use the certificate and private key.<br>Restart the Apache HTTP Server to apply the changes.)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 682156,
          "date": "Thu 29 Sep 2022 00:13",
          "username": "vikaswalajay",
          "content": "AEF<br>C is wrong- redirect http to https because user may use http at first before https redirection so end to end matters here..<br><br>B is wrong because Ddb only works on https,<br>D is wrong because web server can't use ACM, have to use CA certificate",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 653035,
          "date": "Sun 28 Aug 2022 18:37",
          "username": "sapien45",
          "content": "A : optionally having HTTPS is problematic<br>B: DynamoDB is always HTTPS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 648341,
          "date": "Thu 18 Aug 2022 09:24",
          "username": "CW0106",
          "content": "https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html<br>DDB uses https by default. No B<br>https://docs.aws.amazon.com/zh_cn/AmazonCloudFront/latest/DeveloperGuide/using-https.html<br>A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AEF"
        },
        {
          "id": 642693,
          "date": "Fri 05 Aug 2022 04:59",
          "username": "Rja148393",
          "content": "A needs to be considered since we are not considering the S3 for end-to-end comm<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html<br>. AEF for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AEF"
        },
        {
          "id": 625344,
          "date": "Thu 30 Jun 2022 17:52",
          "username": "anirudh1989",
          "content": "so what is the correct answer to this question?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 621470,
          "date": "Fri 24 Jun 2022 08:21",
          "username": "tuananhngo",
          "content": "BCE. Not BCF.<br>F is wrong because you can not Configure the web servers on the EC2 instances to use HTTPS only with that certificate and its very similar to D.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 537660,
          "date": "Tue 01 Feb 2022 06:55",
          "username": "ideoignus",
          "content": "B, E, F",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 535179,
          "date": "Sat 29 Jan 2022 05:37",
          "username": "AliS2020",
          "content": "I aggress with NSF2 there must be a typoso it would be BC but now is it E or F. If we think about End to End encryption and leveraging Cloud Front then we should choose Cloud Front. So it will be BCE. Any thoughts ?",
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
      "question_text": "<p>A company has a new AWS account that does not have AWS CloudTrail configured. The account has an IAM access key that was issued by AWS Security Token<br>Service (AWS STS). A security engineer discovers that the IAM access key has been compromised within the last 24 hours.<br>The security engineer must stop the compromised IAM access key from being used. The security engineer also must determine which activities the key has been used for so far.<br>What should the security engineer do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#302",
          "answers": [
            {
              "choice": "<p>In the CloudTrail console, under CloudTrail event history, search by access key for the compromised key, with the correlated events, and identify which IAM user the key belongs to. In the IAM console, revoke all active sessions for that IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new CloudTrail trail. In the CloudTrail console, under CloudTrail event history, search by access key for the compromised key, view the correlated events, and identify which IAM user the key belongs to. In the IAM console, revoke all active sessions for that IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new CloudTrail trail. In the CloudTrail console, under CloudTrail event history, search by access key for the compromised key, view the correlated events, and identify which IAM role the key belongs to. In the IAM console, delete that IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the CloudTrail console, under CloudTrail event history, search by access key for the compromised key, view the correlated events, and identify which IAM role the key belongs to. In the IAM console, revoke all active sessions for that IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 302 discussion",
      "discusstion": [
        {
          "id": 533454,
          "date": "Thu 27 Jan 2022 04:03",
          "username": "Radhaghosh",
          "content": "Create new log make no sense.<br>Access via STS --> SO IAM role not user<br>Correct Answer D",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 527162,
          "date": "Wed 19 Jan 2022 03:21",
          "username": "sam_live",
          "content": "temporary access (AWS STS) are only associated with IAM Roles. You can view the usage of the STS session in CloudTrail Event History.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html#id_credentials_temp_control-access_monitor-ct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1155962,
          "date": "Thu 22 Feb 2024 01:42",
          "username": "Raphaello",
          "content": "STS provide short term creds, therefore an IAM role belongs to the keys, not user.<br><br>D.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1116641,
          "date": "Mon 08 Jan 2024 14:32",
          "username": "yorkicurke",
          "content": "And why i think D is wrong;<br>Option D: because it assumes that the compromised key belongs to an IAM role.<br> However, the scenario specifies that the key was issued by AWS Security Token Service (AWS STS), which typically issues temporary credentials to IAM users, not roles.<br>IAM roles do not have 'sessions'  that can be revoked in the same way that IAM users do. Hence, this option would not effectively stop the compromised key from being used.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913533,
          "date": "Sat 03 Jun 2023 14:36",
          "username": "Toptip",
          "content": "D no doubts...<br>STSRole (not IAM User)<br>Also you don't have to enable Cloudtrail to search for user activities in Cloudtrail console:<br><br>Q: If I am a new AWS customer or existing AWS customer and don't have CloudTrail set up, do I need to enable or set up anything to view my account activity?<br>- No, nothing is required to begin viewing your account activity. You can visit the AWS CloudTrail console or AWS CLI and begin viewing up to the past 90 days of account activity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 889481,
          "date": "Thu 04 May 2023 17:30",
          "username": "ITGURU51",
          "content": "AWS Security Token Service (AWS STS) is a web service that enables you to request temporary, limited-privilege credentials for users. You can use these credentials to make programmatic requests for AWS resources using the AWS CLI or AWS API (using the AWS SDKs). The temporary credentials provide the same permissions as long-term security credentials, such as IAM user credentials. Therefore: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795561,
          "date": "Wed 01 Feb 2023 23:41",
          "username": "roguecloud",
          "content": "Another UGLY question.<br>I think it has to boil down to A.<br>B & Ccan't configure ClouTrail after the fact for this.<br>D does not really make sense as access key is for a USER not a ROLE, the key does not \\\"belong to\\\" the role as the answer states (probably to through us off!). This answer Might be more correct if it mentioned \\\"temporary security credentials.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 764515,
          "date": "Tue 03 Jan 2023 12:17",
          "username": "jishrajesh",
          "content": "D is the Answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760332,
          "date": "Wed 28 Dec 2022 21:59",
          "username": "awsec2",
          "content": "c<br>Option A is not correct because CloudTrail must be configured first before it can be used to search for events by access key. Option C is not correct because it suggests deleting the IAM role, which may not be appropriate if the role is still needed. Option D is not correct because it suggests revoking active sessions for the IAM role, but the question states that the key belongs to an IAM user, not an IAM role.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662429,
          "date": "Wed 07 Sep 2022 13:51",
          "username": "ErnstVonPappen",
          "content": "So Sapien45 works for Amazon.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 653038,
          "date": "Sun 28 Aug 2022 18:41",
          "username": "sapien45",
          "content": "To immediately deny all permissions to any current user of role credentials :<br><br>In the navigation pane, choose Roles, and then choose the name (not the check box) of the role whose permissions you want to revoke.<br><br>On the Summary page for the selected role, choose the Revoke sessions tab.<br><br>On the Revoke sessions tab, choose Revoke active sessions.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I have exciting news for all Amazon Web Services customers! I have been waiting patiently to share this great news with all of you and finally, the wait is over. AWS CloudTrail is now enabled by default for ALL CUSTOMERS and will provide visibility into the past seven days of account activity without the need for you to configure a trail in the service to get started. This new =E2=80=98always on' capability provides the ability to view, search, and download the aforementioned account activity through the CloudTrail Event History.<br><br>https://aws.amazon.com/blogs/aws/new-amazon-web-services-extends-cloudtrail-to-all-aws-customers/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658525,
          "date": "Sat 03 Sep 2022 15:36",
          "username": "sapien45",
          "content": "I have exciting news for all Amazon Web Services customers! I have been waiting patiently to share this great news with all of you and finally, the wait is over. AWS CloudTrail is now enabled by default for ALL CUSTOMERS and will provide visibility into the past seven days of account activity without the need for you to configure a trail in the service to get started. This new =E2=80=98always on' capability provides the ability to view, search, and download the aforementioned account activity through the CloudTrail Event History.<br><br>https://aws.amazon.com/blogs/aws/new-amazon-web-services-extends-cloudtrail-to-all-aws-customers/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 601328,
          "date": "Fri 13 May 2022 21:22",
          "username": "ShortRound",
          "content": "I just read https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html<br>and see that D is the best answer.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 601327,
          "date": "Fri 13 May 2022 21:20",
          "username": "ShortRound",
          "content": "D sounds close, but IAM keys do not belong to Roles. A is the better answer as it mentions the IAM user key.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>as the access is though STS --&gt; it's mean Role IAM</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 615753,
          "date": "Mon 13 Jun 2022 12:53",
          "username": "lotfi50",
          "content": "as the access is though STS --> it's mean Role IAM",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 585962,
          "date": "Thu 14 Apr 2022 21:05",
          "username": "TigerInTheCloud",
          "content": "C and D are out as no key associate with IAM ole<br>B and C are out as the new trail cannot capture the historical events.<br>A is the only choice. CouldTrail is enabled by default without setup for any new account for many years now and the default retention has been changed from 7 to 14 and not 90 days.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 572652,
          "date": "Tue 22 Mar 2022 03:32",
          "username": "ceros399",
          "content": "B - should be the answer, first cloudtrail was not enabled, so in order to have CloudTrail information we first must enable it, D and A doesn'tpass this statemend, then is about access keys which are related to users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CouldTrail is enabled by default without setup for any new account.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594977,
          "date": "Sat 30 Apr 2022 13:49",
          "username": "mongiam",
          "content": "CouldTrail is enabled by default without setup for any new account.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 570787,
          "date": "Fri 18 Mar 2022 23:59",
          "username": "tezawynn",
          "content": "It says Cloudtrail is not turned on so ruled out A and D.<br>You disable the access key, not delete the role. Thus B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 520153,
          "date": "Sun 09 Jan 2022 12:27",
          "username": "babaseun",
          "content": "D,,,, I believe we revoke IAM Role for the compromised key not the user.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html",
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
      "question_text": "<p>A company has a website with an Amazon CloudFront HTTPS distribution an Application Load Balancer (ALB) with multiple web instances for dynamic website content, and an Amazon S3 bucket for static website content. The company's security engineer recently updated the website security requirements:<br>-HTTPS needs to be enforced for all data in transit with specific ciphers.<br>-The CloudFront distribution needs to be accessible from the internet only.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#303",
          "answers": [
            {
              "choice": "<p>Set up an S3 bucket policy with the aws:securetransport key. Configure the CloudFront origin access identity (OAI) with the S3 bucket. Configure CloudFront to use specific ciphers. Enforce the ALB with an HTTPS listener only and select the appropriate security policy for the ciphers. Link the ALB with AWS WAF to allow access from the CloudFront IP ranges.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an S3 bucket policy with the aws:securetransport key. Configure the CloudFront origin access identity (OAI) with the S3 bucket. Enforce the ALB with an HTTPS listener only and select the appropriate security policy for the ciphers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the CloudFront distribution to use AWS WAF. Force HTTPS on the S3 bucket with specific ciphers in the bucket policy. Configure an HTTPS listener only for the ALB. Set up a security group to limit access to the ALB from the CloudFront IP ranges.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the CloudFront distribution to use the ALB as the origin. Enforce an HTTP listener on the ALB. Create a path-based routing rule on the ALB with proxies that connect to Amazon S3. Create a bucket policy to allow access from these proxies only.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 303 discussion",
      "discusstion": [
        {
          "id": 515516,
          "date": "Mon 03 Jan 2022 09:50",
          "username": "network_zeal",
          "content": "A,with https://aws.amazon.com/blogs/security/automatically-update-aws-waf-ip-sets-with-aws-ip-ranges/ to update CF ip range. B does not enforce cipher on s3 content.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1041058,
          "date": "Wed 11 Oct 2023 21:23",
          "username": "epomatti",
          "content": "Remember that you CANNOT configure specific ciphers for CloudFront. You must choose from a pre-defined policy set, and it only is available when using a custom certificate, not for the default one.<br><br>Having said that, it looks like A is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913544,
          "date": "Sat 03 Jun 2023 14:47",
          "username": "Toptip",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760339,
          "date": "Wed 28 Dec 2022 22:03",
          "username": "awsec2",
          "content": "A<br><br>This solution will enforce HTTPS for all data in transit with specific ciphers, as required. The S3 bucket policy with the aws:securetransport key will ensure that all data transferred between the bucket and CloudFront is encrypted. The CloudFront OAI will allow CloudFront to access the S3 bucket, and the ciphers can be configured in the CloudFront distribution. The ALB will be enforced with an HTTPS listener only, which will allow it to accept only encrypted traffic. AWS WAF can be used to allow access to the ALB only from the CloudFront IP ranges, ensuring that the CloudFront distribution is accessible from the internet only.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713855,
          "date": "Tue 08 Nov 2022 14:17",
          "username": "barbodelli",
          "content": "You have 2 delivery methods specified<br>Internet -> Cloudfront -> ALB -> EC2<br>Internet -> Cloudfront -> S3<br><br>B only takes care of S3. In order to add OAI type function to ALB -> EC2. You also need to do the steps in A.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 649114,
          "date": "Sat 20 Aug 2022 01:28",
          "username": "QBB",
          "content": "A! https://aws.amazon.com/blogs/secujavascript:void(0)rity/automatically-update-aws-waf-ip-sets-with-aws-ip-ranges/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 647839,
          "date": "Wed 17 Aug 2022 00:48",
          "username": "francisco_guerra",
          "content": "Answer is A check this:<br><br>AWS publishes the IP ranges in JSON format for CloudFront and other AWS services. If your origin is an Elastic Load Balancer or an Amazon EC2 instance, you can use VPC security groups to allow only CloudFront IP ranges to access your applications. The IP ranges in the list are separated by service and Region, and you must specify only the IP ranges that correspond to CloudFront.<br><br>https://aws.amazon.com/blogs/security/automatically-update-security-groups-for-amazon-cloudfront-ip-ranges-using-aws-lambda/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 526180,
          "date": "Tue 18 Jan 2022 00:24",
          "username": "YouYouYou",
          "content": "you can do configure cloudfront to use a specific cipher in b as well which is a less complex solution and meets the requirements answer B is better",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 519197,
          "date": "Fri 07 Jan 2022 21:43",
          "username": "argol",
          "content": "Configure CloudFront to use specific ciphers<br>\\\"A\\\" is the answer",
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
      "question_text": "<p>A company hosts a web-based application that captures and stores sensitive data in an Amazon DynamoDB table. A security audit reveals that the application does not provide end-to-end data protection or the ability to detect unauthorized data changes. The software engineering team needs to make changes that will address the audit findings.<br>Which set of steps should the software engineering team take?<br></p>",
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
              "choice": "<p>Use an AWS Key Management Service (AWS CMK) CMK. Encrypt the data at rest.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) Private Certificate Authority. Encrypt the data in transit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a DynamoDB encryption client. Use client-side encryption and sign the table items.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Encryption SDK. Use client-side encryption and sign the table items.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 304 discussion",
      "discusstion": [
        {
          "id": 527168,
          "date": "Wed 19 Jan 2022 03:28",
          "username": "sam_live",
          "content": "Answer C.<br>https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/what-is-ddb-encrypt.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>according with this link, the answer should be D:<br>\\\"Our client-side encryption library was renamed to the AWS Database Encryption SDK.\\\"</li><li>No. AWS Encryption SDK (https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html) and AWS Database Encryption SDK (former Dybamo DB encryption client) are 2 different things. So the link enforce the use of AWS Database Encryption SDK that is formely known as Dybamo DB encryption client. Likely this question was not updated.</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 930098,
          "date": "Thu 22 Jun 2023 05:09",
          "username": "nico73",
          "content": "according with this link, the answer should be D:<br>\\\"Our client-side encryption library was renamed to the AWS Database Encryption SDK.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No. AWS Encryption SDK (https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html) and AWS Database Encryption SDK (former Dybamo DB encryption client) are 2 different things. So the link enforce the use of AWS Database Encryption SDK that is formely known as Dybamo DB encryption client. Likely this question was not updated.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 965510,
          "date": "Fri 28 Jul 2023 13:05",
          "username": "captainpike",
          "content": "No. AWS Encryption SDK (https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html) and AWS Database Encryption SDK (former Dybamo DB encryption client) are 2 different things. So the link enforce the use of AWS Database Encryption SDK that is formely known as Dybamo DB encryption client. Likely this question was not updated.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155972,
          "date": "Thu 22 Feb 2024 01:56",
          "username": "Raphaello",
          "content": "DynamoDB encryption client, and client-side encryption to ensure end-to-end encryption to data, and only allows authorized data changes.<br><br>C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1041059,
          "date": "Wed 11 Oct 2023 21:30",
          "username": "epomatti",
          "content": "Answer: C<br><br>Keep in mind that \\\"DynamoDB encryption client\\\" has been renamed to AWS Database Encryption SDK (which is NOT the same as AWS Encryption SDK).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913547,
          "date": "Sat 03 Jun 2023 14:48",
          "username": "Toptip",
          "content": "C\\\"DynamoDB encryption client\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 794170,
          "date": "Tue 31 Jan 2023 13:58",
          "username": "Jimmy123",
          "content": "Option D, using the AWS Encryption SDK for client-side encryption and signing of the DynamoDB table items, is the correct option that addresses the audit findings for end-to-end data protection and the ability to detect unauthorized data changes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658551,
          "date": "Sat 03 Sep 2022 16:04",
          "username": "sapien45",
          "content": "The DynamoDB Encryption Client supports client-side encryption, where you encrypt your table data before you send it to DynamoDB.<br>However, DynamoDB provides a server-side encryption at rest feature that transparently encrypts your table when it is persisted to disk and decrypts it when you access the table.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 653043,
          "date": "Sun 28 Aug 2022 18:50",
          "username": "sapien45",
          "content": "https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/client-server-side.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 639787,
          "date": "Sat 30 Jul 2022 21:18",
          "username": "dcasabona",
          "content": "I go for option C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 584768,
          "date": "Tue 12 Apr 2022 15:52",
          "username": "teo2157",
          "content": "I'll go for A, as the DynamoDB Encryption Client is designed to be implemented in new, unpopulated databases and this is an existing database. https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/what-is-ddb-encrypt.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the question says \\\"end to end encryption\\\", and option A says \\\"encrypt the data at rest\\\". So, it is NOT an option.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 639786,
          "date": "Sat 30 Jul 2022 21:17",
          "username": "dcasabona",
          "content": "the question says \\\"end to end encryption\\\", and option A says \\\"encrypt the data at rest\\\". So, it is NOT an option.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 540101,
          "date": "Fri 04 Feb 2022 00:36",
          "username": "fortune",
          "content": "DynamoDB protects user data stored at rest and also data in transit between on-premises clients and DynamoDB, and between DynamoDB and other AWS resources within the same AWS Region. C is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517815,
          "date": "Wed 05 Jan 2022 22:19",
          "username": "remyy",
          "content": "The answer is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516753,
          "date": "Tue 04 Jan 2022 16:05",
          "username": "argol",
          "content": "The DynamoDB Encryption Client supports client-side encryption, where you encrypt your table data before you send it to DynamoDB. However, DynamoDB provides a server-side encryption at rest feature that transparently encrypts your table when it is persisted to disk and decrypts it when you access the table.<br>C is the answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a strict policy against using root credentials. The company's security team wants to be alerted as soon as possible when root credentials are used to sign in to the AWS Management Console.<br>How should the security team achieve this goal?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#305",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda to periodically query AWS CloudTrail for console login events and send alerts using Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EventBridge (Amazon CloudWatch Events) to monitor console logins and direct them to Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Athena to query AWS SSO logs and send alerts using Amazon Simple Notification Service (Amazon SNS) for root login events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Resource Access Manager to review the access logs and send alerts using Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 305 discussion",
      "discusstion": [
        {
          "id": 1155973,
          "date": "Thu 22 Feb 2024 01:57",
          "username": "Raphaello",
          "content": "B is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913551,
          "date": "Sat 03 Jun 2023 14:50",
          "username": "Toptip",
          "content": "B - EventBridge rule pattern can be used to monitor the Cloudtrail/Cloudwatch logs for a specific log events (don't really need Lambda for that)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760356,
          "date": "Wed 28 Dec 2022 22:31",
          "username": "awsec2",
          "content": "B.<br><br>Amazon EventBridge can be used to monitor console logins and trigger an event when a root login is detected. The event can then be directed to Amazon SNS, which can send an alert to the security team. This will allow the security team to be notified as soon as a root login occurs.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 613975,
          "date": "Thu 09 Jun 2022 14:20",
          "username": "lotfi50",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 535920,
          "date": "Sun 30 Jan 2022 05:24",
          "username": "AliS2020",
          "content": "It should be B<br><br>In turn, CloudWatch integrates with Amazon Simple Notification Services (SNS). You can combine these three services in such a way that SNS will send you an email when CloudTrail detects root access key activity in your AWS account.<br>https://aws.amazon.com/blogs/security/how-to-receive-notifications-when-your-aws-accounts-root-access-keys-are-used/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The problem with B is it does not mention Cloud Trail at all. The whole scenario with B does not work without Cloud trail.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 599070,
          "date": "Mon 09 May 2022 15:30",
          "username": "Ayusef",
          "content": "The problem with B is it does not mention Cloud Trail at all. The whole scenario with B does not work without Cloud trail.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 523833,
          "date": "Sat 15 Jan 2022 00:37",
          "username": "RaySmith",
          "content": "Answer is B<br>https://aws.amazon.com/premiumsupport/knowledge-center/root-user-account-eventbridge-rule/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 519192,
          "date": "Fri 07 Jan 2022 21:30",
          "username": "argol",
          "content": "Amazon CloudWatch Events<br>\\\"B\\\" is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 518854,
          "date": "Fri 07 Jan 2022 10:01",
          "username": "jayaj",
          "content": "\\\"want to be notified immediately\\\" A -is Lambda to checkCT periodically so not immediate.<br>Has to be B - CW events.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 518707,
          "date": "Fri 07 Jan 2022 03:14",
          "username": "sam_live",
          "content": "user login activities are auto enabled in CloudTrail. One can see Root user activities in CloudTrail logs, and they can be queried by using a function.<br>A should be the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516206,
          "date": "Tue 04 Jan 2022 04:02",
          "username": "network_zeal",
          "content": "B, CW events",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 514557,
          "date": "Sat 01 Jan 2022 16:13",
          "username": "Ayusef",
          "content": "None of these are the best answer but of the choices I would say ...A... cloud trail is the tool for identity who and SNS for notification.",
          "upvote_count": "2",
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
      "question_text": "<p>A security engineer recently rotated all IAM access keys in an AWS account. The security engineer then configured AWS Config and enabled the following AWS<br>Config managed rules; mfa-enabled-for-iam-console-access, iam-user-mfa-enabled, access-key-rotated, and iam-user-unused-credentials-check.<br>The security engineer notices that all resources are displaying as noncompliant after the IAM GenerateCredentialReport API operation is invoked.<br>What could be the reason for the noncompliant status?<br></p>",
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
              "choice": "<p>The IAM credential report was generated within the past 4 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The security engineer does not have the GenerateCredentialReport permission.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The security engineer does not have the GetCredentialReport permission.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The AWS Config rules have a MaximumExecutionFrequency value of 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 306 discussion",
      "discusstion": [
        {
          "id": 520016,
          "date": "Sun 09 Jan 2022 09:16",
          "username": "James2022",
          "content": "See: https://aws.amazon.com/premiumsupport/knowledge-center/config-credential-report/",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1175994,
          "date": "Sun 17 Mar 2024 18:56",
          "username": "hro",
          "content": "D - Maybe I am interpreting the question incorrectly. But according to the following (see below),<br>it cant be A because this answer deals with the report and not the noncompliant status. A report would have<br>been downloaded regardless of compliance status.<br>D seems to relate to the noncompliant status message based on the following link provided above.<br>Source: https://aws.amazon.com/blogs/mt/managing-aged-access-keys-through-aws-config-remediations/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155979,
          "date": "Thu 22 Feb 2024 02:04",
          "username": "Raphaello",
          "content": "A.<br><br>You can generate a credential report as often as once every four hours<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 874241,
          "date": "Wed 19 Apr 2023 04:33",
          "username": "amaltare",
          "content": "supporting link<br>https://repost.aws/knowledge-center/config-credential-report",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760357,
          "date": "Wed 28 Dec 2022 22:33",
          "username": "awsec2",
          "content": "The reason for the noncompliant status could be that the IAM credential report was generated within the past 4 hours.<br><br>When the IAM GenerateCredentialReport API operation is invoked, it takes about 4 hours for the report to be generated and made available for use. Until the report is generated, all resources will be displayed as noncompliant.<br><br>Option A is correct because it correctly identifies the cause of the noncompliant status.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D is the correct answer. The AWS Config rules have a MaximumExecutionFrequency value of 24 hours, which means that the IAM GenerateCredentialReport API operation must be invoked every 24 hours in order for the resources to be compliant. If the operation is invoked less frequently than this, the resources will display as noncompliant.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 794197,
          "date": "Tue 31 Jan 2023 14:11",
          "username": "Jimmy123",
          "content": "Option D is the correct answer. The AWS Config rules have a MaximumExecutionFrequency value of 24 hours, which means that the IAM GenerateCredentialReport API operation must be invoked every 24 hours in order for the resources to be compliant. If the operation is invoked less frequently than this, the resources will display as noncompliant.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 534211,
          "date": "Fri 28 Jan 2022 01:20",
          "username": "Radhaghosh",
          "content": "Option is A<br>This Question is tricky and not explicitly mentioned everything.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 533496,
          "date": "Thu 27 Jan 2022 05:06",
          "username": "Radhaghosh",
          "content": "Option A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 529182,
          "date": "Fri 21 Jan 2022 15:15",
          "username": "sam_live",
          "content": "Option D specifies the maximum frequency for the rule to run, therefore it's not the reason for generating non-compliance event. to not get non-compliance status one can increase the frequency to 6, 12, or 24 hours.<br>Option A is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 524710,
          "date": "Sun 16 Jan 2022 08:21",
          "username": "CarisB",
          "content": "\\\"Earlier this month\\\" means to me that the key rotation has been performed many days ago, so A doesn't seem relevant to me : the 4-hours-ago report should show compliancy the the rotation of the keys.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 519618,
          "date": "Sat 08 Jan 2022 16:42",
          "username": "f4bi4n",
          "content": "A:<br>The credential report checks if a report was generated within the past four hours. If the AWS config rules are triggered every 1-4 hours, a cached copy of the credential report is downloaded after 4 hours pass. For more information, see Getting credential reports for your AWS account.<br>https://aws.amazon.com/premiumsupport/knowledge-center/config-credential-report/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 517889,
          "date": "Thu 06 Jan 2022 02:12",
          "username": "remyy",
          "content": "https://docs.aws.amazon.com/config/latest/developerguide/access-keys-rotated.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 514626,
          "date": "Sat 01 Jan 2022 19:56",
          "username": "roger8978",
          "content": "D?.....",
          "upvote_count": "1",
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
      "question_text": "<p>A company wants to gain better control of its large number of AWS accounts by establishing a centralized location where the accounts can be managed. The company also wants to prevent any users outside the company-owned AWS accounts from accessing a company Amazon S3 bucket.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#307",
          "answers": [
            {
              "choice": "<p>Implement an organization in AWS Organizations. Build a detective control by monitoring AWS CloudTrail logs for attempts to access the S3 bucket from IP addresses outside the company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Control Tower landing zone, and migrate the accounts. Create an S3 bucket policy that restricts access to only a principal list of accounts that have been manually entered.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an organization in AWS Organizations. Invite the AWS accounts to join the organization. Create a resource policy that includes a PrincipalOrgID condition key for the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Invite all of the company's AWS accounts into AWS Control Tower. Use AWS Control Tower's automatic protection for the AWS accounts to deny access from external users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 307 discussion",
      "discusstion": [
        {
          "id": 521148,
          "date": "Mon 10 Jan 2022 22:32",
          "username": "jayaj",
          "content": "Cis correct. Once all the AWS accounts are invited to the organization, you can define the aws:PrincipalOrgID condition and set the value to your organization ID in the S3 bucket policy.<br><br>Then only the accounts in your Organization can access the S3 bucket and any new account also will have the same policy applied.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1155983,
          "date": "Thu 22 Feb 2024 02:08",
          "username": "Raphaello",
          "content": "Correct answer is C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913562,
          "date": "Sat 03 Jun 2023 14:57",
          "username": "Toptip",
          "content": "C makes sense.. use \\\"aws:PrincipalOrgID\\\" in bucket policy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 885104,
          "date": "Sun 30 Apr 2023 12:31",
          "username": "ITGURU51",
          "content": "Organizations provide a centralized location where accounts can be managed, with the least amount of operational overhead. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 881383,
          "date": "Wed 26 Apr 2023 11:36",
          "username": "gerches",
          "content": "It is not B because says to maintain a list, using orgID is faster",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 869850,
          "date": "Fri 14 Apr 2023 02:16",
          "username": "G4Exams",
          "content": "CT is best practice but the scenario asks for LEAST operational overhead so it's definitely C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 633613,
          "date": "Tue 19 Jul 2022 15:59",
          "username": "sapien45",
          "content": "https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/<br>To require the principal account to be in my organization, I add a condition to my policy using the global condition key aws:PrincipalOrgID. This condition requires that only principals from accounts in my organization can access the S3 bucket. This means that although Steve is one of the principals in the policy, he can't access the financial report because the account that he is a member of doesn't belong to my organization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 535924,
          "date": "Sun 30 Jan 2022 05:35",
          "username": "AliS2020",
          "content": "C is correct<br>AWS Identity and Access Management (IAM) now makes it easier for you to control access to your AWS resources by using the AWS organization of IAM principals (users and roles). For some services, you grant permissions using resource-based policies to specify the accounts and principals that can access the resource and what actions they can perform on it. Now, you can use a new condition key, aws:PrincipalOrgID, in these policies to require all principals accessing the resource to be from an account (including the master account) in the organization. For example, let's say you have an Amazon S3 bucket policy and you want to restrict https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 534229,
          "date": "Fri 28 Jan 2022 01:42",
          "username": "Radhaghosh",
          "content": "Option C is Correct<br><br>Question asks about \\\"organization wishes to block customers who do not have company-owned AWS accounts from accessing a corporate-owned Amazon S3 bucket.\\\" --> All comapany accounts should be in Organization to Use the aws:PrincipalOrgID",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516805,
          "date": "Tue 04 Jan 2022 17:36",
          "username": "argol",
          "content": "AWS Control Tower creates your landing zone using AWS Organizations, thereby bringing together ongoing account management and governance, as well as implementation of best practices based on our experience of working with thousands of customers as they migrate to the cloud. AWS CT lets builders provision new AWS accounts in just a few clicks, while you have peace of mind knowing that your accounts conform to company-wide policies. AWS customers can implement AWS CT, extend governance into new or existing accounts, and quickly gain visibility into their compliance status.<br>should be \\\"C\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not B !AWS CT - simplifies(Faster) the process of setting up new multi-account environments with predefined security baseline templates.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561294,
          "date": "Sat 05 Mar 2022 08:56",
          "username": "aj2aj2",
          "content": "Why not B !AWS CT - simplifies(Faster) the process of setting up new multi-account environments with predefined security baseline templates.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 514664,
          "date": "Sat 01 Jan 2022 21:52",
          "username": "roger8978",
          "content": "Sorry. I read the options again. C actually talks about adding ALL AWS accounts.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514661,
          "date": "Sat 01 Jan 2022 21:48",
          "username": "roger8978",
          "content": "A - No<br>B-Yes. Also talk about S3 bucket protection<br>C - No. The question is asking to maintain ALL the accounts not just AWS accounts.<br>D - No. It could've been correct but it doesn't talk about S3 protection",
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
      "question_text": "<p>A company's engineering team is developing a new application that creates AWS Key Management Service (AWS KMS) CMK grants for users. Immediately after a grant is created, users must be able to use the CMK to encrypt a 512-byte payload. During load testing, a bug appears intermittently where<br>AccessDeniedExceptions are occasionally triggered when a user first attempts to encrypt using the CMK.<br>Which solution should the company's security specialist recommend?<br></p>",
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
              "choice": "<p>Instruct users to implement a retry mechanism every 2 minutes until the call succeeds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Instruct the engineering team to consume a random grant token from users, and to call the CreateGrant operation, passing it the grant token. Instruct users to use that grant token in their call to encrypt.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Instruct the engineering team to create a random name for the grant when calling the CreateGrant operation. Return the name to the users and instruct them to provide the name as the grant token in the call to encrypt.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Instruct the engineering team to pass the grant token returned in the CreateGrant response to users. Instruct users to use that grant token in their call to encrypt.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 308 discussion",
      "discusstion": [
        {
          "id": 533372,
          "date": "Thu 27 Jan 2022 01:41",
          "username": "Radhaghosh",
          "content": "You need the Grant Token (not a random generated)<br>Answer is D",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1155988,
          "date": "Thu 22 Feb 2024 02:16",
          "username": "Raphaello",
          "content": "D is actually what makes sense out of all options.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1112594,
          "date": "Wed 03 Jan 2024 09:08",
          "username": "yorkicurke",
          "content": "eliminating B & C:<br>-->The grant token is generated by AWS KMS as a response to the CreateGrant operation.<br><br>A:<br>It will cause unnecessary delays and still does not address the root cause of the issue. you can not expect user to retry every 2 min and hope for it to succeed. That could turn into infinite loop.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913573,
          "date": "Sat 03 Jun 2023 15:04",
          "username": "Toptip",
          "content": "D - is correct<br>Grant Token should be used this case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760358,
          "date": "Wed 28 Dec 2022 22:37",
          "username": "awsec2",
          "content": "D.<br><br>The grant token returned in the CreateGrant response should be used by the users in their call to encrypt. This will ensure that the grant token is valid and can be used to encrypt the payload.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757637,
          "date": "Mon 26 Dec 2022 17:09",
          "username": "bazoch78",
          "content": "as per the doc (https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html#create-grant and https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kms.html#KMS.Client.create_grant) CreateGrant returns a grant token.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731065,
          "date": "Wed 30 Nov 2022 04:50",
          "username": "D2",
          "content": "Answer A<br>The grantee principal can use the permissions that the grant gives them without specifying the grant, just as they would if the permissions came from a key policy or IAM policy. However, when you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the operation achieves eventual consistency. To use the permissions in a grant immediately, use a grant token.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/grants.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your statement does nothing but confirm it's D. \\\"To use the permissions in a grant immediately, use a grant token.\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 965541,
          "date": "Fri 28 Jul 2023 13:44",
          "username": "captainpike",
          "content": "Your statement does nothing but confirm it's D. \\\"To use the permissions in a grant immediately, use a grant token.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658565,
          "date": "Sat 03 Sep 2022 16:18",
          "username": "sapien45",
          "content": "To use the permissions in a new grant immediately, use the grant token for the grant. Save the grant token that the CreateGrant operation returns. Then submit the grant token in the request for the AWS KMS operation.<br>D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 638681,
          "date": "Thu 28 Jul 2022 13:48",
          "username": "ude",
          "content": "it's D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 607493,
          "date": "Thu 26 May 2022 08:32",
          "username": "lotfi50",
          "content": "D is the good answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 598783,
          "date": "Mon 09 May 2022 03:01",
          "username": "Jonfernz",
          "content": "When you apply a grant, the effect is not immediate. It takes time for all of KMS to learn it. So if you want the grant to work immediately, you need to use the CreateGrant operation and use the grant token that it returns. You can use this token to GenerateDataKey and Decrypt.<br><br># Create a grant; save the grant token<br>token$(aws kms create-grant \\<br>--key-id 1234abcd-12ab-34cd-56ef-1234567890ab \\<br>--grantee-principal arn:aws:iam::111122223333:user/appUser \\<br>--retiring-principal arn:aws:iam::111122223333:user/acctAdmin \\<br>--operations GenerateDataKey Decrypt \\<br>--query GrantToken \\<br>--output text)<br><br># Use the grant token in a request<br>aws kms generate-data-key \\<br>--key-id 1234abcd-12ab-34cd-56ef-1234567890ab \\<br>=E2=80=93-key-spec AES_256 \\<br>--grant-tokens $token",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 593308,
          "date": "Wed 27 Apr 2022 19:02",
          "username": "mongiam",
          "content": "D<br>refer: https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 585809,
          "date": "Thu 14 Apr 2022 15:57",
          "username": "TigerInTheCloud",
          "content": "A - When you create a grant, the grant might not be effective immediately. There's likely to be a brief interval, less than five minutes, until the grant achieves eventual consistency, that is, before the new grant is available throughout AWS KMS. https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token<br>B - Grantor does not need information from grantee<br>C - Token not name is used<br>D - That is the action which run into issue.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hi @Tiger, its D</li><li>In ther same link you posted :<br>To use the permissions in a new grant immediately, use the grant token for the grant. Save the grant token that the CreateGrant operation returns. Then submit the grant token in the request for the AWS KMS operation.<br>D</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 587548,
          "date": "Mon 18 Apr 2022 10:16",
          "username": "MoreOps",
          "content": "Hi @Tiger, its D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 633707,
          "date": "Tue 19 Jul 2022 20:32",
          "username": "sapien45",
          "content": "In ther same link you posted :<br>To use the permissions in a new grant immediately, use the grant token for the grant. Save the grant token that the CreateGrant operation returns. Then submit the grant token in the request for the AWS KMS operation.<br>D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516097,
          "date": "Mon 03 Jan 2022 23:10",
          "username": "argol",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token<br>D is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 516094,
          "date": "Mon 03 Jan 2022 23:10",
          "username": "argol",
          "content": "To use the permissions in a new grant immediately, use the grant token for the grant. Save the grant token that the CreateGrant operation returns. Then submit the grant token in the request for the AWS KMS operation. You can submit a grant token to any AWS KMS grant operation and you can submit multiple grant tokens in the same request.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 514883,
          "date": "Sun 02 Jan 2022 09:28",
          "username": "aguijap",
          "content": "D - CreateGrant is the only operation that returns a grant token. You cannot get a grant token from any other AWS KMS operation",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 512685,
          "date": "Wed 29 Dec 2021 21:38",
          "username": "babaseun",
          "content": "D......pass the grant token returned in the CreateGrant response to users",
          "upvote_count": "2",
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
      "question_text": "<p>A company uses Amazon GuardDuty to detect threats and malicious activities in AWS accounts. The company has subscribed to a third-party threat intelligence list uploaded to an Amazon S3 bucket.<br>How should the security engineer efficiently use the threat list across all company AWS accounts?<br></p>",
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
              "choice": "<p>Ensure the S3 bucket policy allows all company AWS accounts access to the threat list. Use an AWS Lambda function to automatically add the threat list to all company AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure GuardDuty is in master-member configuration. Add the threat list to the master account referencing the S3 object that contains the threat list.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure all accounts are part of the same organization in AWS Organizations. Add the threat list to any company account within AWS Organizations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure the threat list in the S3 bucket is publicly accessible. Use an Amazon CloudWatch Events event on GuardDuty findings to match IPs against the threat list.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 309 discussion",
      "discusstion": [
        {
          "id": 515332,
          "date": "Mon 03 Jan 2022 02:04",
          "username": "roger8978",
          "content": "B......IMO....https://aws.amazon.com/blogs/security/how-to-manage-amazon-guardduty-security-findings-across-multiple-accounts/",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1155990,
          "date": "Thu 22 Feb 2024 02:19",
          "username": "Raphaello",
          "content": "B is the correct answer.<br><br>ACD do not say much really!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760362,
          "date": "Wed 28 Dec 2022 22:41",
          "username": "awsec2",
          "content": "C.By adding the threat list to any company account within AWS Organizations, the security engineer can ensure that the threat list is available to all accounts that are part of the organization. This will allow the security engineer to efficiently use the threat list across all company AWS accounts without having to manually add it to each account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 640713,
          "date": "Mon 01 Aug 2022 16:54",
          "username": "dcasabona",
          "content": "Option B for me.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 635188,
          "date": "Fri 22 Jul 2022 13:49",
          "username": "sapien45",
          "content": "In multi-account environments, only users from GuardDuty administrator accounts can upload and manage trusted IP lists and threat lists. Trusted IP lists and threat lists that are uploaded by the administrator account are imposed on GuardDuty functionality in its member accounts.<br><br>Customize findings within the GuardDuty network through the creation and management of suppression rules, trusted IP lists, and threat lists. Member accounts lose access to these features in a multiple-account environment.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 601556,
          "date": "Sat 14 May 2022 14:25",
          "username": "treeli",
          "content": "https://aws.amazon.com/blogs/security/how-to-manage-amazon-guardduty-security-findings-across-multiple-accounts/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 534316,
          "date": "Fri 28 Jan 2022 04:02",
          "username": "Radhaghosh",
          "content": "B. Ensure GuardDuty is in master-member configuration. Add the threat list to the master account referencing the S3 object that contains the threat list.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 532830,
          "date": "Wed 26 Jan 2022 12:32",
          "username": "leu_alves_sch",
          "content": "Answer: B<br>https://aws.amazon.com/blogs/security/how-to-automate-import-third-party-threat-intelligence-feeds-into-amazon-guardduty/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 516987,
          "date": "Tue 04 Jan 2022 21:52",
          "username": "argol",
          "content": "Managing multiple accounts in Amazon GuardDuty<br>To manage multiple accounts in Amazon GuardDuty, you must choose a single AWS account to be the administrator account for GuardDuty. You can then associate other AWS accounts with the administrator account as member accounts. There are two ways to associate accounts with a GuardDuty administrator account: either through an AWS Organizations organization that both accounts are members of, or by sending an invitation through GuardDuty.<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_accounts.html<br>\\\"C\\\" is the answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Based on your explanation, option B seems closest.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 551627,
          "date": "Sun 20 Feb 2022 08:36",
          "username": "mmendozaf",
          "content": "Based on your explanation, option B seems closest.",
          "upvote_count": "3",
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
      "question_text": "<p>A security engineer needs to create an AWS Key Management Service (AWS KMS) key that will be used to encrypt all data stored in a company's Amazon S3 buckets in the us-west-1 Region. The key will use server-side encryption. Usage of the key must be limited to requests coming from Amazon S3 within the company's account.<br>Which statement in the KMS key policy will meet these requirements?<br>A.<br><img class=\"w-100\" src=\"https://www.examtopics.com/assets/media/exam-media/04239/0020500001.png\" class=\"in-exam-image\"&gt;<br>B.<br><img class=\"w-100\" src=\"https://www.examtopics.com/assets/media/exam-media/04239/0020500002.png\" class=\"in-exam-image\"&gt;<br>C.<br><img class=\"w-100\" src=\"https://www.examtopics.com/assets/media/exam-media/04239/0020600001.png\" class=\"in-exam-image\"&gt;<br>D.<br><img class=\"w-100\" src=\"https://www.examtopics.com/assets/media/exam-media/04239/0020700001.png\" class=\"in-exam-image\"&gt;<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#310",
          "answers": []
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 310 discussion",
      "discusstion": [
        {
          "id": 530685,
          "date": "Sun 23 Jan 2022 17:44",
          "username": "sam_live",
          "content": "A correct answer.<br>https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>updated link<br>https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-caller-account</li></ul>",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 909350,
          "date": "Mon 29 May 2023 13:45",
          "username": "Tofu13",
          "content": "updated link<br>https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-caller-account",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1156560,
          "date": "Thu 22 Feb 2024 18:04",
          "username": "Raphaello",
          "content": "Correct answer is A.<br><br>kms:ViaService<br>kms:CallerAccount<br>Will do the job!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155993,
          "date": "Thu 22 Feb 2024 02:21",
          "username": "Raphaello",
          "content": "A.<br>A is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 840984,
          "date": "Thu 16 Mar 2023 14:28",
          "username": "c73bf38",
          "content": "A:The policy grants permission to the AWS account root user to perform encryption, decryption, re-encryption, generate data keys, and describe the key operations on all KMS keys.<br>The policy includes a condition that restricts access to requests coming from the same account and requests with an S3 source ARN that matches the account ID and us-west-1 Region.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 737356,
          "date": "Wed 07 Dec 2022 02:49",
          "username": "maddyr",
          "content": "Agree with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731070,
          "date": "Wed 30 Nov 2022 05:03",
          "username": "D2",
          "content": "Answer A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714752,
          "date": "Wed 09 Nov 2022 18:05",
          "username": "AdamWest",
          "content": "A Is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 519193,
          "date": "Fri 07 Jan 2022 21:32",
          "username": "roger8978",
          "content": "A .....",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 518716,
          "date": "Fri 07 Jan 2022 03:31",
          "username": "sam_live",
          "content": "A is correct. Any resources & condition via service s3.us-west-1.amazonaws.com.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517725,
          "date": "Wed 05 Jan 2022 19:40",
          "username": "argol",
          "content": "\\\"A\\\" is the answer",
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
      "question_text": "<p>A company recently set up Amazon GuardDuty and is receiving a high number of findings from IP addresses within the company. A security engineer has verified that these IP addresses are trusted and allowed.<br>Which combination of steps should the security engineer take to configure GuardDuty so that it does not produce findings for these IP addresses? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#311",
          "answers": [
            {
              "choice": "<p>Create a plaintext configuration file that contains the trusted IP addresses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a JSON configuration file that contains the trusted IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the configuration file directly to GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the configuration file to Amazon S3. Add a new trusted IP list to GuardDuty that points to the file.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Manually copy and paste the configuration file data into the trusted IP list in GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 311 discussion",
      "discusstion": [
        {
          "id": 1156439,
          "date": "Thu 22 Feb 2024 15:42",
          "username": "Raphaello",
          "content": "AD. Thank you!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 840990,
          "date": "Thu 16 Mar 2023 14:32",
          "username": "c73bf38",
          "content": "The correct steps for configuring GuardDuty to exclude trusted IP addresses are:<br><br>A. Create a plaintext configuration file that contains the trusted IP addresses.<br>D. Upload the configuration file to Amazon S3. Add a new trusted IP list to GuardDuty that points to the file.<br><br>GuardDuty allows you to exclude trusted IP addresses by creating a custom Trusted IP list. To create a list, you must first create a configuration file that contains the trusted IP addresses. The file can be either plaintext or JSON format. Then, upload the configuration file to an Amazon S3 bucket and create a Trusted IP list in GuardDuty that points to the file. This will ensure that GuardDuty does not generate findings for traffic originating from these trusted IP addresses.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 760364,
          "date": "Wed 28 Dec 2022 22:47",
          "username": "awsec2",
          "content": "B. D.The security engineer should create a JSON configuration file that contains the trusted IP addresses and upload it to Amazon S3. Then, the security engineer should add a new trusted IP list to GuardDuty that points to the file in S3. This will allow GuardDuty to reference the trusted IP addresses from the configuration file and not produce findings for these IP addresses.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't use JSON configuration file.<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.html#prepare_list<br>https://repost.aws/knowledge-center/guardduty-trusted-ip-list</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 871537,
          "date": "Sun 16 Apr 2023 09:06",
          "username": "Kezuko",
          "content": "You can't use JSON configuration file.<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.html#prepare_list<br>https://repost.aws/knowledge-center/guardduty-trusted-ip-list",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730339,
          "date": "Tue 29 Nov 2022 12:50",
          "username": "D2",
          "content": "Answer AD<br>https://aws.amazon.com/premiumsupport/knowledge-center/guardduty-trusted-ip-list/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 640717,
          "date": "Mon 01 Aug 2022 17:00",
          "username": "dcasabona",
          "content": "Just confirmed, options A and D are correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 635193,
          "date": "Fri 22 Jul 2022 14:01",
          "username": "sapien45",
          "content": "Json is not a supported format",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 557385,
          "date": "Sun 27 Feb 2022 15:58",
          "username": "lotfi50",
          "content": "A & D ok",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 557384,
          "date": "Sun 27 Feb 2022 15:57",
          "username": "lotfi50",
          "content": "A & Dok",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 545665,
          "date": "Sat 12 Feb 2022 06:25",
          "username": "AliS2020",
          "content": "Yes A and D<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.html<br>You can specify the location URL in the following formats:<br><br>https://s3.amazonaws.com/bucket.name/file.txt<br><br>https://s3-aws-region.amazonaws.com/bucket.name/file.txt<br><br>http://bucket.s3.amazonaws.com/file.txt<br><br>http://bucket.s3-aws-region.amazonaws.com/file.txt<br><br>s3://bucket.name/file.txt",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 534318,
          "date": "Fri 28 Jan 2022 04:04",
          "username": "Radhaghosh",
          "content": "A. Create a plaintext configuration file that contains the trusted IP addresses.<br>D. Upload the configuration file to Amazon S3. Add a new trusted IP list to GuardDuty that points to the file.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516296,
          "date": "Tue 04 Jan 2022 08:20",
          "username": "DaKam",
          "content": "A & D<br>Refer to https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.html<br>Create a plaintext file, place it into a bucket and refer it in the guardduty trusted-ip config",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 515334,
          "date": "Mon 03 Jan 2022 02:09",
          "username": "roger8978",
          "content": "A & D.<br>While updating the IP list, it asks for a location i.e., S3 path and the file format. the valid values are plaintext, CSV.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514837,
          "date": "Sun 02 Jan 2022 06:19",
          "username": "khamrumunnu",
          "content": "Answer is A and D.<br><br>We need to create a plaintext file with the IP addresses and upload it to S3. Then, pass the s3 url in the GuardDuty Trusted IP List",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 513567,
          "date": "Thu 30 Dec 2021 19:04",
          "username": "LittlyAnky",
          "content": "B & D...............",
          "upvote_count": "1",
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
      "question_text": "<p>A company's security engineer is configuring Amazon S3 permissions to ban all current and future public buckets. However, the company hosts several websites directly off S3 buckets with public access enabled.<br>The engineer needs to block the public S3 buckets without causing any outages on the existing websites. The engineer has set up an Amazon CloudFront distribution for each website.<br>Which set of steps should the security engineer implement next?<br></p>",
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
              "choice": "<p>Configure an S3 bucket as the origin with an origin access identity (OAI) for the CloudFront distribution. Switch the DNS records for websites to point to the CloudFront distribution. Enable block public access settings at the account level.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 bucket as the origin with an origin access identity (OAI) for the CloudFront distribution. Switch the DNS records for the websites to point to the CloudFront distribution. Then, for each S3 bucket, enable block public access settings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 bucket as the origin with an origin access identity (OAI) for the CloudFront distribution. Enable block public access settings at the account level.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 bucket as the origin for the CloudFront distribution. Configure the S3 bucket policy to accept connections from the CloudFront points of presence only. Switch the DNS records for the websites to point to the CloudFront distribution. Enable block public access settings at the account level.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 312 discussion",
      "discusstion": [
        {
          "id": 585474,
          "date": "Thu 14 Apr 2022 02:17",
          "username": "TigerInTheCloud",
          "content": "Amazon S3 is the only object storage service that allows you to block public access to all of your objects at the bucket or the account level, now and in the future by using S3 Block Public Access.<br>A - Good<br>B - cannot prevent future public buckets from being created.<br>C - DNS records of the 'webpages directly on Amazon S3 buckets' need to point to CF now.<br>D - OAI, not CloudFront points of presence, is used for identifying the coming traffic from CF",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 519022,
          "date": "Fri 07 Jan 2022 15:40",
          "username": "argol",
          "content": "To restrict access to content that you serve from Amazon S3 buckets, follow these steps:<br>Create a special CloudFront user called an origin access identity (OAI) and associate it with your distribution.<br>Configure your S3 bucket permissions so that CloudFront can use the OAI to access the files in your bucket and serve them to your users. Make sure that users can't use a direct URL to the S3 bucket to access a file there.<br>\\\"D\\\" is the answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D does not mention OAI so Answer is A<br>and yes we need to update DNS<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/</li></ul>",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 621284,
          "date": "Thu 23 Jun 2022 22:30",
          "username": "francisco_guerra",
          "content": "D does not mention OAI so Answer is A<br>and yes we need to update DNS<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1156446,
          "date": "Thu 22 Feb 2024 15:52",
          "username": "Raphaello",
          "content": "Keyword: \\\"ban all current and FUTURE public buckets.\\\"<br>Therefore the choice is to block public access on the account level, to block public bucket creation in the future, rather than blocking blocking public access to existing buckets only.<br><br>Search and identify keywords that edges one option over the other.<br>In this question, it edges A over B (D is not even an option).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1064836,
          "date": "Tue 07 Nov 2023 14:48",
          "username": "TPBABA",
          "content": "A IS THE ANSWER",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913619,
          "date": "Sat 03 Jun 2023 15:48",
          "username": "Toptip",
          "content": "A no doubts... You need: OAI + CF + Enable block public access settings at the account level.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 889539,
          "date": "Thu 04 May 2023 19:13",
          "username": "ITGURU51",
          "content": "We need to block S3 public access at the account level. When this security control is configured it applies account-wide for all current and future buckets.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 865930,
          "date": "Mon 10 Apr 2023 03:46",
          "username": "nairj",
          "content": "Answer is A:<br>D : What is the need to configure the S3 bucket policy to accept connections from the CloudFront points of presence only? It has to be configured using OAI or OAC so I think the answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 803191,
          "date": "Thu 09 Feb 2023 13:16",
          "username": "milofficial",
          "content": "C is bogus<br>B is wrong because future S3 buckets can still be public<br>D is wrong as it is missing OAI<br>A is right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 799769,
          "date": "Mon 06 Feb 2023 14:38",
          "username": "Smartphone",
          "content": "Correct Answer is D. A is missing the bucket policy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771343,
          "date": "Tue 10 Jan 2023 12:39",
          "username": "luisfsm",
          "content": "It's A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 763218,
          "date": "Sun 01 Jan 2023 15:14",
          "username": "Teknoklutz",
          "content": "A should be answer - OAI",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760366,
          "date": "Wed 28 Dec 2022 22:50",
          "username": "awsec2",
          "content": "A.<br><br>To block the public S3 buckets, the security engineer should enable block public access settings at the account level. This will block all current and future public buckets in the account. To prevent outages on the existing websites, the security engineer should configure an S3 bucket as the origin for the CloudFront distribution and switch the DNS records for the websites to point to the CloudFront distribution. This will allow the websites to continue to be served from the S3 buckets through the CloudFront distribution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 669671,
          "date": "Thu 15 Sep 2022 10:28",
          "username": "cloud_collector",
          "content": "1#.You can use the S3 console, AWS CLI, AWS SDKs, and REST API to configure block public access settings for your all the buckets in your account.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-block-public-access-account.html<br><br>2#. When you use CloudFront with an Amazon S3 bucket as the origin, you can configure CloudFront and Amazon S3 .....To do this, configure CloudFront to send authenticated requests to Amazon S3, and configure Amazon S3 to only allow access to authenticated requests from CloudFront. CloudFront provides two ways to send authenticated requests to an Amazon S3 origin: origin access control (OAC) and origin access identity (OAI).<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>3#.CloudFront origin access identity (OAI) provides similar functionality as origin access control (OAC), but it doesn't work for all scenarios. This is why we recommend using OAC instead. Specifically, OAI doesn't support:<br>=E2=86=92=E3=80=80New AWS Regions launched after December 2022=E3=80=80=E2=86=90<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai<br><br>In the question, \\\"...configuring Amazon S3 permissions to ban all current and future public buckets.\\\"</li><li>4#. Before you create an origin access control (OAC) or set it up in a CloudFront distribution, make sure the OAC has permission to access the S3 bucket origin. Do this after creating a CloudFront distribution, but before adding the OAC to the S3 origin in the distribution configuration.<br><br>To give the OAC permission to access the S3 bucket, use an S3 bucket policy to allow the CloudFront service principal (cloudfront.amazonaws.com) to access the bucket. Use a Condition element in the policy to allow CloudFront to access the bucket only when the request is on behalf of the CloudFront distribution that contains the S3 origin.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 669675,
          "date": "Thu 15 Sep 2022 10:30",
          "username": "cloud_collector",
          "content": "3#.CloudFront origin access identity (OAI) provides similar functionality as origin access control (OAC), but it doesn't work for all scenarios. This is why we recommend using OAC instead. Specifically, OAI doesn't support:<br>=E2=86=92=E3=80=80New AWS Regions launched after December 2022=E3=80=80=E2=86=90<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai<br><br>In the question, \\\"...configuring Amazon S3 permissions to ban all current and future public buckets.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>4#. Before you create an origin access control (OAC) or set it up in a CloudFront distribution, make sure the OAC has permission to access the S3 bucket origin. Do this after creating a CloudFront distribution, but before adding the OAC to the S3 origin in the distribution configuration.<br><br>To give the OAC permission to access the S3 bucket, use an S3 bucket policy to allow the CloudFront service principal (cloudfront.amazonaws.com) to access the bucket. Use a Condition element in the policy to allow CloudFront to access the bucket only when the request is on behalf of the CloudFront distribution that contains the S3 origin.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 669680,
          "date": "Thu 15 Sep 2022 10:32",
          "username": "cloud_collector",
          "content": "4#. Before you create an origin access control (OAC) or set it up in a CloudFront distribution, make sure the OAC has permission to access the S3 bucket origin. Do this after creating a CloudFront distribution, but before adding the OAC to the S3 origin in the distribution configuration.<br><br>To give the OAC permission to access the S3 bucket, use an S3 bucket policy to allow the CloudFront service principal (cloudfront.amazonaws.com) to access the bucket. Use a Condition element in the policy to allow CloudFront to access the bucket only when the request is on behalf of the CloudFront distribution that contains the S3 origin.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 663698,
          "date": "Thu 08 Sep 2022 16:28",
          "username": "Root_Access",
          "content": "I'd say its D, regardless of using OAI or OAC, you need to modify your bucket policy to allow cloudfront distribution access S3 files.<br>Also OAC is the new way of limiting access and Amazon recommends using it over OAI:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#migrate-from-oai-to-oac",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 653056,
          "date": "Sun 28 Aug 2022 19:20",
          "username": "sapien45",
          "content": "https://aws.amazon.com/s3/features/block-public-access/#:~:textAmazon%20S3%20is%20the%20only,on%20block%20all%20public%20access.<br><br> Amazon S3 is the only object storage service that allows you to block public access to all of your objects at the bucket or the account level, now and in the future by using S3 Block Public Access.<br><br>To ensure that public access to all your S3 buckets and objects is blocked, turn on block all public access.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 639274,
          "date": "Fri 29 Jul 2022 16:34",
          "username": "dcasabona",
          "content": "Option A for sure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-block-public-access-account.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 644897,
          "date": "Wed 10 Aug 2022 11:53",
          "username": "dcasabona",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-block-public-access-account.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 638667,
          "date": "Thu 28 Jul 2022 13:32",
          "username": "ude",
          "content": "B for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#313",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is analyzing Amazon GuardDuty findings. The security engineer observes an Impact value for ThreatPurpose in a GuardDuty finding.<br>What does this value indicate?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#313",
          "answers": [
            {
              "choice": "<p>An adversary has compromised an AWS resource so that the resource is capable of contacting its home command and control (C&C) server to receive further instructions for malicious activity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>GuardDuty is detecting activity or activity patterns that are different from the established baseline for a particular AWS resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>GuardDuty is detecting activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy the company's systems and data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>GuardDuty is detecting activity or activity patterns that an adversary might use to expand its knowledge of the company's systems and internal networks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 313 discussion",
      "discusstion": [
        {
          "id": 514288,
          "date": "Sat 01 Jan 2022 01:38",
          "username": "khamrumunnu",
          "content": "Answer: C<br><br>Impact<br>This value indicates that GuardDuty has detected activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy your systems and data. This threat purpose is based on MITRE ATT&CK tactics<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 533471,
          "date": "Thu 27 Jan 2022 04:22",
          "username": "Radhaghosh",
          "content": "Correct Answer is Option C<br><br>Option A. --> Backdoor<br>Option B. --> Baseline<br>Option C. --> Impact<br>Option D. --> Discovery",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1156473,
          "date": "Thu 22 Feb 2024 16:31",
          "username": "Raphaello",
          "content": "Definition.<br><br>Impact<br>This value indicates that GuardDuty has detected activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy your systems and data.<br><br>C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 769672,
          "date": "Sun 08 Jan 2023 18:42",
          "username": "sakibmas",
          "content": "DefenseEvasion value indicates that GuardDuty has detected activity or activity patterns that an adversary may use to avoid detection while infiltrating your environment.<br>Discovery value indicates that GuardDuty has detected activity or activity patterns that an adversary may use to expand their knowledge of your systems and internal networks.<br>Exfiltration value indicates that GuardDuty has detected activity or activity patterns that an adversary may use when attempting to steal data from your network.<br>Impact value indicates that GuardDuty has detected activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy your systems and data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760370,
          "date": "Wed 28 Dec 2022 22:55",
          "username": "awsec2",
          "content": "C<br>The Impact value for ThreatPurpose in a GuardDuty finding indicates that GuardDuty is detecting activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy the company's systems and data. This value indicates that GuardDuty has identified a potential threat to the company's systems and data, and that further investigation may be needed to determine the nature and extent of the threat.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732504,
          "date": "Thu 01 Dec 2022 11:39",
          "username": "D2",
          "content": "Answer C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 639790,
          "date": "Sat 30 Jul 2022 21:34",
          "username": "dcasabona",
          "content": "Option C - https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 633146,
          "date": "Mon 18 Jul 2022 21:28",
          "username": "sapien45",
          "content": "Impact<br>This value indicates that GuardDuty has detected activity or activity patterns that suggest that an adversary is attempting to manipulate, interrupt, or destroy your systems and data. This threat purpose is based on MITRE ATT&CK tactics",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 585986,
          "date": "Thu 14 Apr 2022 22:11",
          "username": "TigerInTheCloud",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 551697,
          "date": "Sun 20 Feb 2022 11:22",
          "username": "lotfi50",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 542905,
          "date": "Tue 08 Feb 2022 08:16",
          "username": "Waniru",
          "content": "Ans C:<br><br>Scroll down to ThreatPurpose<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html",
          "upvote_count": "1",
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
      "question_text": "<p>A company deployed Amazon GuardDuty in the us-east-1 Region. The company wants all DNS logs that relate to the company's Amazon EC2 instances to be inspected.<br>What should a security engineer do to ensure that the EC2 instances are logged?<br></p>",
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
              "choice": "<p>Use IPv6 addresses that are configured for hostnames.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure external DNS resolvers as internal resolvers that are visible only to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DNS resolvers for all EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a third-party DNS resolver with logging for all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 314 discussion",
      "discusstion": [
        {
          "id": 520972,
          "date": "Mon 10 Jan 2022 17:19",
          "username": "LearnMeSomeAWS",
          "content": "\\\"If you use AWS DNS resolvers for your EC2 instances (the default setting), then GuardDuty can access and process your request and response DNS logs through the internal AWS DNS resolvers. If you are using a 3rd party DNS resolver, for example, OpenDNS or GoogleDNS, or if you set up your own DNS resolvers, then GuardDuty cannot access and process data from this data source.\\\"<< therefore C.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 514160,
          "date": "Fri 31 Dec 2021 17:37",
          "username": "roger8978",
          "content": "C. https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html#guardduty_dns",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 760371,
          "date": "Wed 28 Dec 2022 22:57",
          "username": "awsec2",
          "content": "D<br>Option A is not correct because it suggests using IPv6 addresses that are configured for hostnames, which is not related to logging EC2 instances in GuardDuty. Option B is not correct because it suggests configuring external DNS resolvers as internal resolvers that are visible only to AWS, which does not address the requirement to log EC2 instances in GuardDuty. Option C is not correct because it suggests using AWS DNS resolvers for all EC2 instances, which does not provide the necessary logging for GuardDuty.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry itsC</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 768076,
          "date": "Fri 06 Jan 2023 21:57",
          "username": "awsec2",
          "content": "Sorry itsC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 653059,
          "date": "Sun 28 Aug 2022 19:32",
          "username": "sapien45",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html<br>If you use AWS DNS resolvers for your Amazon EC2 instances (the default setting), then GuardDuty can access and process your request and response DNS logs through the internal AWS DNS resolvers. If you use another DNS resolver, such as OpenDNS or GoogleDNS, or if you set up your own DNS resolvers, then GuardDuty cannot access and process data from this data source.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 639876,
          "date": "Sun 31 Jul 2022 04:24",
          "username": "ritears41",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html#guardduty_dns",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 597617,
          "date": "Fri 06 May 2022 09:38",
          "username": "HananS",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html#guardduty_dns<br>C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#315",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has recently recovered from a security incident that required the restoration of Amazon EC2 instances from snapshots.<br>After performing a gap analysis of its disaster recovery procedures and backup strategies, the company is concerned that, next time, it will not be able to recover the EC2 instances if the AWS account was compromised and Amazon EBS snapshots were deleted.<br>All EBS snapshots are encrypted using an AWS KMS CMK.<br>Which solution would solve this problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#315",
          "answers": [
            {
              "choice": "<p>Create a new Amazon S3 bucket. Use EBS lifecycle policies to move EBS snapshots to the new S3 bucket. Move snapshots to Amazon S3 Glacier using lifecycle policies, and apply Glacier Vault Lock policies to prevent deletion.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager to distribute a configuration that performs local backups of all attached disks to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS account with limited privileges. Allow the new account to access the AWS KMS key used to encrypt the EBS snapshots, and copy the encrypted snapshots to the new account on a recurring basis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup to copy EBS snapshots to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 315 discussion",
      "discusstion": [
        {
          "id": 633680,
          "date": "Tue 19 Jul 2022 18:56",
          "username": "sapien45",
          "content": "We use this strategy",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156521,
          "date": "Thu 22 Feb 2024 17:17",
          "username": "Raphaello",
          "content": "Option A seems very good solution to me!<br><br>C is a fine solution, but why not A? What makes A less appealing that C?!!!<br>In fact, using Glacier Vault Lock is the ONLY way to protect against data deletion, and even after moving snapshots/backups to a different account, Glacier Vault Lock would be required to protect against data deletion from the new account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 934826,
          "date": "Tue 27 Jun 2023 00:15",
          "username": "SKS",
          "content": "I think D could be right answer , wonder why no one focused on that<br>https://aws.amazon.com/getting-started/hands-on/amazon-ebs-backup-and-restore-using-aws-backup/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 889554,
          "date": "Thu 04 May 2023 19:52",
          "username": "ITGURU51",
          "content": "The question states that all EBS snapshots are encrypted using an AWS KMS CMK. C is the only answer that implies that the encrypted snapshot must be decrypted using the CMK.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 584897,
          "date": "Tue 12 Apr 2022 22:05",
          "username": "TigerInTheCloud",
          "content": "C is the answer. In the AWS document https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-policy.html, \\\"[a]utomating cross-account snapshot copies ... enables you to protect yourself against data loss in the event of your account being compromised.\\\"<br>Answer A may prevent the deletion but what if the KMS is deleted without being noticed by anyone. Also, the restoring process is harder to be implemented.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C seems to be right.<br>But what happens if the KMS key on the compromised account gets deleted in this case?<br>U don't have a copy of the key, but just the right to access the key. But after deletion, that access will not work any longer. Am I getting it wrong?</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 909790,
          "date": "Tue 30 May 2023 02:05",
          "username": "Tofu13",
          "content": "C seems to be right.<br>But what happens if the KMS key on the compromised account gets deleted in this case?<br>U don't have a copy of the key, but just the right to access the key. But after deletion, that access will not work any longer. Am I getting it wrong?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 552065,
          "date": "Sun 20 Feb 2022 18:39",
          "username": "ideoignus",
          "content": "A - the s3 bucket is not visible or manageable by user<br>B - system manager run command cannot distribute snapshot copies - data life cycle manager does that<br>D - AWS Backup does not publish its use of S3 and does not publish its storage mechanisms other than backup vaults<br>C -<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 532549,
          "date": "Wed 26 Jan 2022 02:57",
          "username": "Radhaghosh",
          "content": "C is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 527893,
          "date": "Wed 19 Jan 2022 21:28",
          "username": "AWS_Dude",
          "content": "B and C are correct however the question is asking which answer is MOST effective. That would be C since it's more secure architecture.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is correct but to add to this, D is not correct because although AWS Backup is great for securing backups the answer says it pushes the snapshots to S3 which could be deleted if the account is compromised. Now if the answer said it was using AWS Backup with a VaultLock then it would be the correct answer since using the vault lock stops anyone from deleting it. https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 543252,
          "date": "Tue 08 Feb 2022 19:18",
          "username": "AWS_Dude",
          "content": "C is correct but to add to this, D is not correct because although AWS Backup is great for securing backups the answer says it pushes the snapshots to S3 which could be deleted if the account is compromised. Now if the answer said it was using AWS Backup with a VaultLock then it would be the correct answer since using the vault lock stops anyone from deleting it. https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 520914,
          "date": "Mon 10 Jan 2022 15:42",
          "username": "ggx",
          "content": "C is the right answer. Create a recovery account/region with limited access, and you need the same CMK key to decrypt data in recovery account",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 519245,
          "date": "Sat 08 Jan 2022 00:58",
          "username": "babaseun",
          "content": "C....... https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-policy.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 518999,
          "date": "Fri 07 Jan 2022 15:02",
          "username": "argol",
          "content": "https://aws.amazon.com/blogs/compute/automating-the-creation-of-consistent-amazon-ebs-snapshots-with-amazon-ec2-systems-manager-part-1/<br>\\\"B\\\" is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517463,
          "date": "Wed 05 Jan 2022 13:59",
          "username": "zenek666",
          "content": "C is the correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516802,
          "date": "Tue 04 Jan 2022 17:28",
          "username": "Master455",
          "content": "A for me",
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
      "question_text": "<p>A software-as-a-service (SaaS) company hosts an application on AWS in a VPC. External customers will use the application on their own Amazon EC2 instances.<br>To access the application, the customers need to install a client application on an EC2 instance in a VPC in their AWS accounts.<br>A security engineer is designing a solution to allow communication between the client software and the SaaS application. The solution must maximize scalability and security.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#316",
          "answers": [
            {
              "choice": "<p>Create a Network Load Balancer (NLB) in the VPC in the SaaS company account. Use the NLB for TLS termination and load balancing. Use EC2 instances as targets for the NLB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Network Load Balancer (NLB) in the VPCs in the customer accounts. Use the NLB for TLS termination and load balancing. Use EC2 instances as targets for the NLB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS PrivateLink endpoint service in the VPCs in the customer accounts. Create a PrivateLink interface endpoint in the VPC in the SaaS company account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS PrivateLink endpoint service in the VPC in the SaaS company account. Create a PrivateLink interface endpoint in the VPCs in the customer accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC peering connection between the VPC in the SaaS company account and the VPCs in the customer accounts. Create the required routes for a VPC peering connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 316 discussion",
      "discusstion": [
        {
          "id": 516947,
          "date": "Tue 04 Jan 2022 20:38",
          "username": "argol",
          "content": "Interface VPC endpoints, powered by AWS PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace. By powering Gateway Load Balancer endpoints, AWS PrivateLink brings the same level of security and performance to your virtual network appliances or custom traffic inspection logic.<br>\\\"A\\\" and \\\"D\\\"",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 516239,
          "date": "Tue 04 Jan 2022 06:22",
          "username": "DaKam",
          "content": "Refer to https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-service-overview.html<br>Solution: A & D<br><br>As maximize scalability and security<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Read this line from the link you posted<br>\\\"In the following diagram, the account owner of VPC B is a service provider, and has a service running on instances in subnet B. The owner of VPC B has a service endpoint (vpce-svc-1234) with an associated Network Load Balancer that points to the instances in subnet B as targets. Instances in subnet A of VPC A use an interface endpoint to access the services in subnet B.\\\"</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 534256,
          "date": "Fri 28 Jan 2022 02:39",
          "username": "Radhaghosh",
          "content": "Read this line from the link you posted<br>\\\"In the following diagram, the account owner of VPC B is a service provider, and has a service running on instances in subnet B. The owner of VPC B has a service endpoint (vpce-svc-1234) with an associated Network Load Balancer that points to the instances in subnet B as targets. Instances in subnet A of VPC A use an interface endpoint to access the services in subnet B.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1156532,
          "date": "Thu 22 Feb 2024 17:34",
          "username": "Raphaello",
          "content": "AD the correct description to create VPC Endpoint Service through NLB.<br>https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/creating-highly-available-endpoint-services.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 987101,
          "date": "Tue 22 Aug 2023 07:22",
          "username": "Nuha_23",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 913643,
          "date": "Sat 03 Jun 2023 16:09",
          "username": "Toptip",
          "content": "AD 100%... got similar question in SAP-C02 exam",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 856684,
          "date": "Fri 31 Mar 2023 09:04",
          "username": "Cyp",
          "content": "Ans AD, for those who have choosen AC please be aware of the difference between Endpoint and endpoint service.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 799962,
          "date": "Mon 06 Feb 2023 17:38",
          "username": "Smartphone",
          "content": "Answer is A&D<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/integrate-third-party-services/architecture-1.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 769680,
          "date": "Sun 08 Jan 2023 18:54",
          "username": "sakibmas",
          "content": "Using AWS PrivateLink, you can access SaaS products privately, as if they were running in your own VPC.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 760375,
          "date": "Wed 28 Dec 2022 23:03",
          "username": "awsec2",
          "content": "cd<br>Create an AWS PrivateLink endpoint service in the VPC in the SaaS company account.<br>Create a PrivateLink interface endpoint in the VPCs in the customer accounts.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730360,
          "date": "Tue 29 Nov 2022 13:15",
          "username": "D2",
          "content": "Ans A, C<br>https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I meant A, D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 730361,
          "date": "Tue 29 Nov 2022 13:16",
          "username": "D2",
          "content": "I meant A, D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729711,
          "date": "Tue 29 Nov 2022 00:25",
          "username": "Balki",
          "content": "Answer is obviously A&D https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS principals, such as AWS accounts, IAM users, and IAM roles can connect to your endpoint service privately by creating an interface VPC endpoint. Service providers must do the following to make their services available to service consumers.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 741680,
          "date": "Sun 11 Dec 2022 13:31",
          "username": "Balki",
          "content": "AWS principals, such as AWS accounts, IAM users, and IAM roles can connect to your endpoint service privately by creating an interface VPC endpoint. Service providers must do the following to make their services available to service consumers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722708,
          "date": "Sun 20 Nov 2022 15:50",
          "username": "Fyssy",
          "content": "sorry AD. NLB and VPC interface service in the provider and VPC interface endpoint in the consumer<br>https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 722706,
          "date": "Sun 20 Nov 2022 15:47",
          "username": "Fyssy",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 653070,
          "date": "Sun 28 Aug 2022 19:55",
          "username": "sapien45",
          "content": "none of the proposed responsescorrespond to the diagam here : https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html<br>In the diagram, target EC2 instances and load balancers are in the same service provider account. While in the questions, Load balancer communicate through AWS PrivateLink with its target EC2 instances. Weird.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 640253,
          "date": "Mon 01 Aug 2022 00:21",
          "username": "dcasabona",
          "content": "Option A and D for me.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 638554,
          "date": "Thu 28 Jul 2022 10:03",
          "username": "zdd",
          "content": "Answer: A D<br>https://docs.aws.amazon.com/vpc/latest/privatelink/images/privatelink-concepts.png",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 638553,
          "date": "Thu 28 Jul 2022 10:00",
          "username": "zdd",
          "content": "Answer: D E",
          "upvote_count": "1",
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
      "question_text": "<p>A company is using Amazon Elastic Container Service (Amazon ECS) to deploy an application that deals with sensitive data. During a recent security audit, the company identified a security issue in which Amazon RDS credentials were stored with the application code in the company's source code repository.<br>A security engineer needs to develop a solution to ensure that database credentials are stored securely and rotated periodically. The credentials should be accessible to the application only. The engineer also needs to prevent database administrators from sharing database credentials as plaintext with other teammates. The solution must also minimize administrative overhead.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#317",
          "answers": [
            {
              "choice": "<p>Use the AWS Systems Manager Parameter Store to generate database credentials. Use an IAM profile for ECS tasks to restrict access to database credentials to specific containers only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Secrets Manager to store database credentials. Use an IAM inline policy for ECS tasks to restrict access to database credentials to specific containers only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Systems Manager Parameter Store to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Secrets Manager to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 317 discussion",
      "discusstion": [
        {
          "id": 516801,
          "date": "Tue 04 Jan 2022 17:25",
          "username": "argol",
          "content": "With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task. Applications must sign their AWS API requests with AWS credentials, and this feature provides a strategy for managing credentials for your applications to use, similar to the way that Amazon EC2 instance profiles provide credentials to EC2 instances. Instead of creating and distributing your AWS credentials to the containers or using the EC2 instance's role, you can associate an IAM role with an ECS task definition or RunTask API operation. The applications in the task's containers can then use the AWS SDK or CLI to make API requests to authorized AWS services.<br>\\\"D\\\"",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1156535,
          "date": "Thu 22 Feb 2024 17:38",
          "username": "Raphaello",
          "content": "Correct answer is D.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 965576,
          "date": "Fri 28 Jul 2023 14:58",
          "username": "captainpike",
          "content": "D. However, I believe inline policy would be better here. The problem is the wording of the option \\\"Use an IAM inline policy for ECS tasks to restrict access to database credentials to specific containers only.\\\" It should have said \\\"Use an IAM inline policy for the ECS task IAM Role..\\\" the way the option was stated, it seems that you are creating an inline policy for the ECS task which is not possible.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why I think inline policy is better in this situation ? because of this https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#inline-policies \\\"inline policies maintain a strict one-to-one relationship between a policy and an identity. They are deleted when you delete the identity. \\\" If you use the IAM role with managed policy, in theory, it's possible for db admins, by other means, use the policy somewhere else and gain access, and the questions states \\\"to prevent database administrators from sharing database credentials as plaintext with other teammates\\\". Maybe I am being too picky.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 965577,
          "date": "Fri 28 Jul 2023 14:58",
          "username": "captainpike",
          "content": "Why I think inline policy is better in this situation ? because of this https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#inline-policies \\\"inline policies maintain a strict one-to-one relationship between a policy and an identity. They are deleted when you delete the identity. \\\" If you use the IAM role with managed policy, in theory, it's possible for db admins, by other means, use the policy somewhere else and gain access, and the questions states \\\"to prevent database administrators from sharing database credentials as plaintext with other teammates\\\". Maybe I am being too picky.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913646,
          "date": "Sat 03 Jun 2023 16:11",
          "username": "Toptip",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760377,
          "date": "Wed 28 Dec 2022 23:05",
          "username": "awsec2",
          "content": "The solution that meets these requirements is option B: Use AWS Secrets Manager to store database credentials. Use an IAM inline policy for ECS tasks to restrict access to database credentials to specific containers only.<br><br>AWS Secrets Manager is a service that makes it easier to manage secrets, such as database credentials. Secrets Manager rotates secrets automatically, eliminating the need for manual rotation and reducing the risk of human error. Additionally, Secrets Manager provides secure, encrypted storage for secrets, ensuring that they are not stored in plaintext.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657897,
          "date": "Sat 03 Sep 2022 01:20",
          "username": "vbal",
          "content": "Anyone, why not inline policy?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 633610,
          "date": "Tue 19 Jul 2022 15:57",
          "username": "sapien45",
          "content": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 556188,
          "date": "Fri 25 Feb 2022 19:52",
          "username": "Sec101",
          "content": "The answer is C:<br>Reason: Both D and C are the correct choices however, C is a cheaper choice. The question asks to reduce admin cost<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>man, parameter store don't support automatic rotation, because it, D is correct.</li><li>Its Correct and obviously</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 569655,
          "date": "Thu 17 Mar 2022 11:47",
          "username": "ccieman2016",
          "content": "man, parameter store don't support automatic rotation, because it, D is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 561477,
          "date": "Sat 05 Mar 2022 15:39",
          "username": "rodolfo2020",
          "content": "Its Correct and obviously",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 534226,
          "date": "Fri 28 Jan 2022 01:38",
          "username": "Radhaghosh",
          "content": "Correct Option is Option D<br>Combination ofAWS Secrets Manager + ECS task Role",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514654,
          "date": "Sat 01 Jan 2022 21:38",
          "username": "roger8978",
          "content": "D. I think. the application should assume a role to access the credentials.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is outsourcing its operational support to an external company. The company's security officer must implement an access solution for delegating operational support that minimizes overhead.<br>Which approach should the security officer take to meet these requirements?<br></p>",
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
              "choice": "<p>Implement Amazon Cognito identity pools with a role that uses a policy that denies the actions related to Amazon Cognito API management. Allow the external company to federate through its identity provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Federate AWS Identity and Access Management (IAM) with the external company's identity provider. Create an IAM role and attach a policy with the necessary permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM group for the external company. Add a policy to the group that denies IAM modifications. Securely provide the credentials to the external company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS SSO with the external company's identity provider. Create an IAM group to map to the identity provider user group, and attach a policy with the necessary permissions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 318 discussion",
      "discusstion": [
        {
          "id": 524953,
          "date": "Sun 16 Jan 2022 14:09",
          "username": "MillarD",
          "content": "Federate IAM with the external company's identity provider",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 517059,
          "date": "Wed 05 Jan 2022 00:44",
          "username": "argol",
          "content": "\\\"B\\\"<br>Federate IAM with the external company's identity provider",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1156548,
          "date": "Thu 22 Feb 2024 17:53",
          "username": "Raphaello",
          "content": "I can confidently say, none of these options is a sound secure solution.<br><br>A. Cognito is basically used to web and application authentication/authorization. Not applicable to this scenario.<br><br>B. Using external company's IdP is madness. The source of truth to user, groups, user metadata, authentication are all in the external company's control. Even creating roles in my account does not seem enough know that the source of truth is not at my company's control.<br>External IdP without SCIM is a better (but not mention), as the source of truth will be in AWS SSO (Identity Center).<br><br>C. IAM group is an identity, not used as authentication entity.<br><br>D. Even worse than B, cause cannot use IAM group for mapping. It should be IAM role. But again, IdP of external company is not ideal secure wise!<br>-------------------------------------<br><br>That being said, if this bad question ever shows up in your exam..select B, as the best of the rest, but know that this solution is not good enough unless using IdP without SCIM. This is important.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913649,
          "date": "Sat 03 Jun 2023 16:15",
          "username": "Toptip",
          "content": "Only B makes sense.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817489,
          "date": "Wed 22 Feb 2023 06:27",
          "username": "createchange",
          "content": "C is out of the question.<br><br>A doesn't seem appropriate, due to the lack of concern about permissions. There should be more consideration than simply \\\"stop them from modifying Cognito settings.\\\"<br><br>D seemed right at first, but the wording is wrong. You don't assign permissions to an IAM group, you assign a Permission Set to a user/group provided by the IdP.<br><br>As such, my vote is B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 809413,
          "date": "Wed 15 Feb 2023 12:20",
          "username": "gtmnagalla",
          "content": "Amazon Cognito simplifies the development process by helping you manage identities for your customer-facing applications. As your application grows, some of your enterprise customers may ask you to integrate with their own Identity Provider (IdP) so that their users can sign-on to your app using their company's identity, and have role-based access-control (RBAC) based on their company's directory group membership.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My problem with this answer is that the question is not talking about client application, it's talking about handing-off the operations of the AWS account</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 965579,
          "date": "Fri 28 Jul 2023 15:04",
          "username": "captainpike",
          "content": "My problem with this answer is that the question is not talking about client application, it's talking about handing-off the operations of the AWS account",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760378,
          "date": "Wed 28 Dec 2022 23:06",
          "username": "awsec2",
          "content": "B. Federate AWS Identity and Access Management (IAM) with the external company's identity provider. Create an IAM role and attach a policy with the necessary permissions.<br><br>This approach allows the external company to use its own identity provider to authenticate users and access resources in the company's AWS account. By delegating the management of user identities and access to the external company's identity provider, the security officer minimizes the overhead of managing user access directly. The IAM role and policy can be used to grant the necessary permissions to the external company's users, allowing them to perform the required operational tasks while still maintaining control over access to the company's resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732073,
          "date": "Thu 01 Dec 2022 00:04",
          "username": "hubekpeter",
          "content": "D is more suitable if you're configuring federation on organizational level and have many limitations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 653074,
          "date": "Sun 28 Aug 2022 20:06",
          "username": "sapien45",
          "content": "D is an improvement of B.<br>And yes, of course an AWS policy can be attached to a group.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 535974,
          "date": "Sun 30 Jan 2022 07:27",
          "username": "AliS2020",
          "content": "It should be B<br><br>To create a role for identity federation (AWS CLI)<br><br>Create a role: aws iam create-role<br><br>Attach a permissions policy to the role: aws iam attach-role-policy<br><br>or<br><br>Create an inline permissions policy for the role: aws iam put-role-policy<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 533073,
          "date": "Wed 26 Jan 2022 17:51",
          "username": "NSF2",
          "content": "Using 3rd party identity provider which makes me to go with Cognito, so answer A.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 530301,
          "date": "Sun 23 Jan 2022 07:33",
          "username": "sam_live",
          "content": "I like the option D but I've a problem with the words \\\"Create an IAM group to map to the identity provider user group\\\". we map IAM roles to IdP groups not the groups.<br>So the correct option should be A.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 529758,
          "date": "Sat 22 Jan 2022 11:28",
          "username": "YouYouYou",
          "content": "C is out of questions<br><br>A & B and D are all the same from implementation and result point of view they require federation and they makes the life of support team easier however D is a much better and scalable solution and it gives the support the flexibility of adding new members to their support group nothing shared except the sign on url<br><br>i'll go with D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Would you ever think of doing this ?<br>'Use AWS SSO with the external company\\\"=E2=84=A2s identity provider' <br>Also the ambiguity around wording, as role can't be mapped to a group.</li><li>You're getting group membership as a claim, so that's exactly what you need to do. Map IAM role to some of the identity claims.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 533079,
          "date": "Wed 26 Jan 2022 17:54",
          "username": "NSF2",
          "content": "Would you ever think of doing this ?<br>'Use AWS SSO with the external company\\\"=E2=84=A2s identity provider' <br>Also the ambiguity around wording, as role can't be mapped to a group.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're getting group membership as a claim, so that's exactly what you need to do. Map IAM role to some of the identity claims.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732070,
          "date": "Wed 30 Nov 2022 23:58",
          "username": "hubekpeter",
          "content": "You're getting group membership as a claim, so that's exactly what you need to do. Map IAM role to some of the identity claims.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517060,
          "date": "Wed 05 Jan 2022 00:46",
          "username": "argol",
          "content": "If you already manage user identities outside of AWS, you can use IAM identity providers instead of creating IAM users in your AWS account. With an identity provider (IdP), you can manage your user identities outside of AWS and give these external user identities permissions to use AWS resources in your account. This is useful if your organization already has its own identity system, such as a corporate user directory. It is also useful if you are creating a mobile app or web application that requires access to AWS resources.<br><br>When you use an IAM identity provider, you don't have to create custom sign-in code or manage your own user identities.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But isnt that also the case with cognito identity pools(option a)? identity management can be outside of your AWS account.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 518071,
          "date": "Thu 06 Jan 2022 09:49",
          "username": "network_zeal",
          "content": "But isnt that also the case with cognito identity pools(option a)? identity management can be outside of your AWS account.",
          "upvote_count": "1",
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
      "question_text": "<p>A company's policy requires that all API keys be encrypted and stored separately from source code in a centralized security account. This security account is managed by the company's security team. However, an audit revealed that an API key is stored with the source code of an AWS Lambda function in an AWS<br>CodeCommit repository in the DevOps account.<br>How should the security team securely store the API key?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#319",
          "answers": [
            {
              "choice": "<p>Create a CodeCommit repository in the security account using AWS Key Management Service (AWS KMS) for encryption. Require the development team to migrate the Lambda source code to this repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the API key in an Amazon S3 bucket in the security account using server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to encrypt the key. Create a presigned URL for the S3 key, and specify the URL in a Lambda environmental variable in the AWS CloudFormation template. Update the Lambda function code to retrieve the key using the URL and call the API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a secret in AWS Secrets Manager in the security account to store the API key using AWS Key Management Service (AWS KMS) for encryption. Grant access to the IAM role used by the Lambda function so that the function can retrieve the key from Secrets Manager and call the API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an encrypted environment variable for the Lambda function to store the API key using AWS Key Management Service (AWS KMS) for encryption. Grant access to the IAM role used by the Lambda function so that the function can decrypt the key at runtime.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 319 discussion",
      "discusstion": [
        {
          "id": 523700,
          "date": "Fri 14 Jan 2022 20:36",
          "username": "LaLune",
          "content": "One of thepurposes of the AWS secrets manager is to store secrets in secure string format.Only C provides that opportunity here. Hardcoding a key is very unsecure practice. And C, among the options is the only way not to find along the way the key plaintext.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1156554,
          "date": "Thu 22 Feb 2024 17:57",
          "username": "Raphaello",
          "content": "Correct answer is C.<br><br>Secrets Manager to store API key securely using KMS key. Grant access to KSM key to Lambda exec role.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913656,
          "date": "Sat 03 Jun 2023 16:17",
          "username": "Toptip",
          "content": "C most secure solution in this situation",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760379,
          "date": "Wed 28 Dec 2022 23:08",
          "username": "awsec2",
          "content": "C<br>This solution meets the requirement of storing the API key in a centralized security account and encrypting it using AWS KMS. It also separates the key from the source code and avoids storing it directly with the code in the CodeCommit repository. Additionally, it allows the security team to manage the key in the security account and grant access to the IAM role used by the Lambda function, which minimizes the overhead of managing the key.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 653075,
          "date": "Sun 28 Aug 2022 20:08",
          "username": "sapien45",
          "content": "AWS secret manager to store sensitive API keys<br>The service has basically been created for that",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 610771,
          "date": "Thu 02 Jun 2022 21:44",
          "username": "CollinsWolf",
          "content": "Secrets manager stores keys in secure strings and that is its main purpose.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 560818,
          "date": "Fri 04 Mar 2022 14:55",
          "username": "mx677",
          "content": "secret manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 534277,
          "date": "Fri 28 Jan 2022 03:17",
          "username": "Radhaghosh",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516959,
          "date": "Tue 04 Jan 2022 20:52",
          "username": "argol",
          "content": "\\\"C\\\"........",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to monitor the deletion of customer managed CMKs. A security engineer must create an alarm that will notify the company before a CM=D7=80 is deleted. The security engineer has configured the integration of AWS CloudTrail with Amazon CloudWatch.<br>What should the security engineer do next to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#320",
          "answers": [
            {
              "choice": "<p>Within AWS Key Management Service (AWS KMS), specify the deletion time of the key material during CMK creation. AWS KMS will automatically create a CloudWatch alarm.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge (Amazon CloudWatch Events) rule to look for API calls of DeleteAlias. Create an AWS Lambda function to send an Amazon Simple Notification Service (Amazon SNS) message to the company. Add the Lambda function as the target of the Eventbridge (CloudWatch Events) rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge (Amazon CloudWatch Events) rule to look for API calls of DisableKey and ScheduleKeyDeletion. Create an AWS Lambda function to send an Amazon Simple Notification Service (Amazon SNS) message to the company. Add the Lambda function as the target of the Eventbridge (CloudWatch Events) rule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) policy to look for AWS Key Management Service (AWS KMS) API calls of RevokeGrant and ScheduleKeyDeletion. Create an AWS Lambda function to generate the alarm and send the notification to the company. Add the Lambda function as the target of the SNS policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 320 discussion",
      "discusstion": [
        {
          "id": 913659,
          "date": "Sat 03 Jun 2023 16:20",
          "username": "Toptip",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 889632,
          "date": "Thu 04 May 2023 22:09",
          "username": "ITGURU51",
          "content": "ScheduleKeyDeletion is an operation in AWS Key Management Service that schedules the deletion of a KMS key. By default, AWS KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to PendingDeletion and the key can't be used in any cryptographic operations. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662721,
          "date": "Wed 07 Sep 2022 18:51",
          "username": "Root_Access",
          "content": "Here is an example in cloudtrail:<br>https://docs.aws.amazon.com/kms/latest/developerguide/ct-schedule-key-deletion.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 657365,
          "date": "Fri 02 Sep 2022 13:41",
          "username": "MungKey",
          "content": "C: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/monitor-and-remediate-scheduled-deletion-of-aws-kms-keys.html",
          "upvote_count": "3",
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
      "question_text": "<p>A company runs a global ecommerce website that is hosted on AWS. The company uses Amazon CloudFront to serve content to its user base. The company wants to block inbound traffic from a specific set of countries to comply with recent data regulation policies.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
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
              "choice": "<p>Create an AWS WAF web ACL with an IP match condition to deny the countries' IP ranges. Associate the web ACL with the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS WAF web ACL with a geo match condition to deny the specific countries. Associate the web ACL with the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the geo restriction feature in CloudFront to deny the specific countries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use geolocation headers in CloudFront to deny the specific countries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 321 discussion",
      "discusstion": [
        {
          "id": 656507,
          "date": "Thu 01 Sep 2022 19:38",
          "username": "mh777",
          "content": "C: https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-geo-restriction/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913661,
          "date": "Sat 03 Jun 2023 16:22",
          "username": "Toptip",
          "content": "C - CF has this build-in feature.. don't need to use WAF for that",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 869862,
          "date": "Fri 14 Apr 2023 02:43",
          "username": "G4Exams",
          "content": "Geo restriction is the right answer here for sure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 710501,
          "date": "Thu 03 Nov 2022 13:57",
          "username": "HieuTT",
          "content": "325 is the end question ??? While Database have 334 questions",
          "upvote_count": "1",
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
      "question_text": "<p>A security engineer receives an AWS abuse email message. According to the message, an Amazon EC2 instance that is running in the security engineer's AWS account is sending phishing email messages.<br>The EC2 instance is part of an application that is deployed in production. The application runs on many EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple subnets and multiple Availability Zones.<br>The instances normally communicate only over the HTTP, HTTPS, and MySQL protocols. Upon investigation, the security engineer discovers that email messages are being sent over port 587. All other traffic is normal.<br>The security engineer must create a solution that contains the compromised EC2 instance, preserves forensic evidence for analysis, and minimizes application downtime.<br>Which combination of steps must the security engineer take to meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#322",
          "answers": [
            {
              "choice": "<p>Add an outbound rule to the security group that is attached to the compromised EC2 instance to deny traffic to 0.0.0.0/0 and port 587.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an outbound rule to the network ACL for the subnet that contains the compromised EC2 instance to deny traffic to 0.0.0.0/0 and port 587.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Gather volatile memory from the compromised EC2 instance. Suspend the compromised EC2 instance from the Auto Scaling group. Then take a snapshot of the compromised EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Take a snapshot of the compromised EC2 instance. Suspend the compromised EC2 instance from the Auto Scaling group. Then gather volatile memory from the compromised EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the compromised EC2 instance to an isolated subnet that has a network ACL that has no inbound rules or outbound rules.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the existing security group that is attached to the compromised EC2 instance with a new security group that has no inbound rules or outbound rules.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 322 discussion",
      "discusstion": [
        {
          "id": 657390,
          "date": "Fri 02 Sep 2022 14:04",
          "username": "MungKey",
          "content": "BCF<br>A - Not correct - SG cannot add outbound rule to deny<br>B - Correct - NACL to deny outbound<br>C - Correct - Before suspending gather volatile memory, after suspending take snapshot<br>D - Not Correct - Suspending before gathering volatile memory may clear the memory<br>E - Can do but F is better option<br>F - Correct - Isolate the EC2 instance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>E: It's not possible to move an existing instance to another subnet, Availability Zone, or VPC. Instead, you can manually migrate the instance by creating a new Amazon Machine Image (AMI) from the source instance.<br><br>https://repost.aws/knowledge-center/move-ec2-instance</li></ul>",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 900319,
          "date": "Wed 17 May 2023 17:48",
          "username": "kujin",
          "content": "E: It's not possible to move an existing instance to another subnet, Availability Zone, or VPC. Instead, you can manually migrate the instance by creating a new Amazon Machine Image (AMI) from the source instance.<br><br>https://repost.aws/knowledge-center/move-ec2-instance",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 913669,
          "date": "Sat 03 Jun 2023 16:26",
          "username": "Toptip",
          "content": "B,C,F best combination",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 890005,
          "date": "Fri 05 May 2023 13:49",
          "username": "ITGURU51",
          "content": "In the real world, we can use the security group to isolate the endpoint. This question is a little tricky because using an NACL impacts the entire subnet not just the compromised endpoint. From a cyber security perspective, the best way to isolate the host is to add the instance to a security group with no rules. BCF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 869653,
          "date": "Thu 13 Apr 2023 20:13",
          "username": "swolfgang",
          "content": "=C4=B1 dont understand why not bce,e is better option =C4=B1 think,",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835855,
          "date": "Sat 11 Mar 2023 11:58",
          "username": "Artaggedon",
          "content": "In order of obvious:<br>- C is CORRECT and D is INCORRECT. You can't dump RAM memory from a snapshot.<br>- A is INCORRECT. No deny rules on Security Groups.<br>Now, the tricky part. Between B, E and F, one must be wrong. Picking B, you get to protect a little bit your production environment, and between E and F, both basically do the same. But it's also true that, normally, you don't get to answer twice over the same resource in an AWS exam (in this case, NACL). And since E and F do the same thing, we should pick B and F.<br><br>Therefore BCF, or at least it's what I've gathered from looking around and trying to make this. But I can see the reasoning behind CEF too. This is a complicated one with no clear answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 769689,
          "date": "Sun 08 Jan 2023 19:11",
          "username": "sakibmas",
          "content": "A - Not correct - SG cannot add outbound rule to deny<br>D - Not Correct - Suspending before gathering volatile memory may clear the memory",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 658603,
          "date": "Sat 03 Sep 2022 17:05",
          "username": "sapien45",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/infrastructure-domain-incidents.html.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 656919,
          "date": "Fri 02 Sep 2022 05:25",
          "username": "vbal",
          "content": "BCF....",
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
      "question_text": "<p>A development team recently deployed a Java application on a default AWS Elastic Beanstalk environment. The application is unable to connect to an Amazon S3 bucket that has a default configuration in the same account.<br>What should a security engineer do to troubleshoot this issue?<br></p>",
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
              "choice": "<p>Confirm that the Elastic Beanstalk service role has access to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Confirm that the Elastic Beanstalk instance profile has access to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Confirm that the AWSElasticBeanstalkFullAccess managed policy is attached to the Elastic Beanstalk environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Confirm that the S3 bucket policy allows access from the Elastic Beanstalk application ARN.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 323 discussion",
      "discusstion": [
        {
          "id": 1107957,
          "date": "Thu 28 Dec 2023 17:21",
          "username": "yorkicurke",
          "content": "When Elastic Beanstalk launches EC2 instances for an environment, it assigns an IAM instance profile to those instances. This instance profile contains the permissions needed for the application code running on the instances to access AWS resources like S3.<br><br>The application \\\"code access\\\" -> is controlled via-> the instance profile,<br>while Elastic Beanstalk's \\\"own operations\\\" -> are controlled via -> the service role.<br><br>Hope that's helpfull.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 920149,
          "date": "Sat 10 Jun 2023 17:19",
          "username": "6_8ftwin",
          "content": "Cannot be 'D' because the default S3 bucket policy is accessible by the bucket owner. This does not mean it explicitly blocks a given instance profile role.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913672,
          "date": "Sat 03 Jun 2023 16:28",
          "username": "Toptip",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835882,
          "date": "Sat 11 Mar 2023 12:18",
          "username": "Artaggedon",
          "content": "In my opinion, it's D. The reason behind is that an Instance Profile, technically, cannot have permissions since it's more about an identity than an authorithation. The permissions are in the role, so the short description in the documentation is misleading.<br><br>Plus, when you create an Elastic Beanstalk, both the instance profile and the role are created and, normally, in that process you add the permissions needed to the role. But what you don't get to check is if there's an explicit deny on the S3 for whatever reason. And it's true that S3 policies have more authority than IAM Roles, since ownership of the object is a thing.<br><br>It's an unfair question, but D is the one with more power.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As both B and D look right, i guess u are supposed to conclude that \\\"the S3 bucket policy allows access\\\" in answer D does not mean \\\"allow\\\" as in English (where it translates to \\\"does not deny)\\\" but \\\"allow\\\" as in a policy context where the two are different things.</li><li>OK, it's B because it says bucket with default configuration.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 909948,
          "date": "Tue 30 May 2023 07:53",
          "username": "Tofu13",
          "content": "As both B and D look right, i guess u are supposed to conclude that \\\"the S3 bucket policy allows access\\\" in answer D does not mean \\\"allow\\\" as in English (where it translates to \\\"does not deny)\\\" but \\\"allow\\\" as in a policy context where the two are different things.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>OK, it's B because it says bucket with default configuration.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 925090,
          "date": "Fri 16 Jun 2023 13:15",
          "username": "Tofu13",
          "content": "OK, it's B because it says bucket with default configuration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 770067,
          "date": "Mon 09 Jan 2023 06:59",
          "username": "sakibmas",
          "content": "To access an S3 bucket from Elastic Beanstalk, verify that your AWS Identity and Access Management (IAM) instance profile is attached to an Amazon Elastic Compute Cloud (Amazon EC2) instance. The instance must have the correct permissions for Amazon S3. Then, confirm that your S3 bucket policy doesn't deny access to the role attached to your instance profile<br>Reference: https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-s3-bucket-instance/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 757935,
          "date": "Tue 27 Dec 2022 00:37",
          "username": "RameshAWS",
          "content": "Validate permissions for your instance profile<br>https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-s3-bucket-instance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658612,
          "date": "Sat 03 Sep 2022 17:18",
          "username": "sapien45",
          "content": "To access an S3 bucket from Elastic Beanstalk, verify that your AWS Identity and Access Management (IAM) instance profile is attached to an Amazon Elastic Compute Cloud (Amazon EC2) instance. The instance must have the correct permissions for Amazon S3. Then, confirm that your S3 bucket policy doesn't deny access to the role attached to your instance profile.<br>https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-s3-bucket-instance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658378,
          "date": "Sat 03 Sep 2022 13:19",
          "username": "toolshedlol",
          "content": "\\\"To access an S3 bucket from Elastic Beanstalk, verify that your AWS Identity and Access Management (IAM) instance profile is attached to an Amazon Elastic Compute Cloud (Amazon EC2) instance. The instance must have the correct permissions for Amazon S3. Then, confirm that your S3 bucket policy doesn't deny access to the role attached to your instance profile.\\\"<br><br>the same!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 654316,
          "date": "Tue 30 Aug 2022 20:33",
          "username": "CuLeBrO",
          "content": "As per the link shared in the proposed solution of this question, the answer is B.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-s3-bucket-instance/<br><br>\\\"To access an S3 bucket from Elastic Beanstalk, verify that your AWS Identity and Access Management (IAM) instance profile is attached to an Amazon Elastic Compute Cloud (Amazon EC2) instance. The instance must have the correct permissions for Amazon S3. Then, confirm that your S3 bucket policy doesn't deny access to the role attached to your instance profile.\\\"",
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
      "question_text": "<p>A company needs to provide digital evidence to a security engineer for analysis. The evidence must be encrypted and the immutability of the source data must be maintained.<br>What is the MOST secure solution that meets these requirements?<br></p>",
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
              "choice": "<p>Upload the digital evidence to a new Amazon S3 bucket. Set up an S3 Lifecycle configuration to move the data to S3 Glacier. Configure S3 Glacier with a vault lock policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the digital evidence to a new Amazon S3 bucket with S3 Object Lock enabled. Implement server-side encryption with AWS Key Management Service (AWS KMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the digital evidence to a new Amazon S3 bucket Configure an S3 bucket policy. Enable S3 Versioning and MFA Delete. Use S3 presigned URLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon EC2 instance. Store the digital evidence on an attached Amazon Elastic Block Store (Amazon EBS) volume. Enable termination protection, isolate the EC2 instance and take a snapshot of the EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 324 discussion",
      "discusstion": [
        {
          "id": 913675,
          "date": "Sat 03 Jun 2023 16:31",
          "username": "Toptip",
          "content": "B<br>encrypted and the immutabilitykms + Object Lock",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 890032,
          "date": "Fri 05 May 2023 14:43",
          "username": "ITGURU51",
          "content": "Object Lock provides two ways to manage object retention: retention periods and legal holds.<br><br>Retention period =E2=80=94 Specifies a fixed period of time during which an object remains locked. During this period, your object is WORM-protected and can't be overwritten or deleted. For more information, see Retention periods<br><br>Legal hold =E2=80=94 Provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it. Legal holds are independent from retention periods. For more information, see Legal holds. B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774370,
          "date": "Fri 13 Jan 2023 12:16",
          "username": "sakibmas",
          "content": "With S3 Object Lock, you can store objects using a write-once-read-many (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.<br>Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Uploading the digital evidence to a new Amazon S3 bucket with S3 Object Lock enabled and implementing server-side encryption with AWS Key Management Service (AWS KMS) would provide the necessary security and immutability for the digital evidence.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 890034,
          "date": "Fri 05 May 2023 14:45",
          "username": "ITGURU51",
          "content": "Uploading the digital evidence to a new Amazon S3 bucket with S3 Object Lock enabled and implementing server-side encryption with AWS Key Management Service (AWS KMS) would provide the necessary security and immutability for the digital evidence.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710500,
          "date": "Thu 03 Nov 2022 13:56",
          "username": "HieuTT",
          "content": "325 is the end question ??? While Database have 334 questions",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 658605,
          "date": "Sat 03 Sep 2022 17:09",
          "username": "sapien45",
          "content": "With S3 Object Lock, you can store objects using a write-once-read-many (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. You can use Object Lock to help meet regulatory requirements that require WORM storage, or to simply add another layer of protection against object changes and deletion.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 657399,
          "date": "Fri 02 Sep 2022 14:12",
          "username": "MungKey",
          "content": "B: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654326,
          "date": "Tue 30 Aug 2022 20:37",
          "username": "CuLeBrO",
          "content": "B<br><br>https://aws.amazon.com/about-aws/whats-new/2018/11/s3-object-lock/",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running third-party WAF software on AWS. The company's security team discovers that the third-party WAF software has vulnerabilities that can lead to server-side request forgery (SSRF) attacks. Because of this discovery, the security team mandates that the entire AWS infrastructure must use version 2 of the instance metadata service (IMDSv2).<br>At the planned completion of the implementation of IMDSv2, the security team uses the Amazon CloudWatch metric Amazon EC2:MetadataNoToken and determines that hundreds of old IMDSv1 requests still are occurring each day. The security team is willing to risk the availability of the company's application to finish this implementation.<br>Which combination of steps should the security team take to complete the migration to IMDSv2 in the AWS environment? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#325",
          "answers": [
            {
              "choice": "<p>Write and enforce an IAM policy that denies the ec2:runinstances action when the ec2:MetadataHttpTokens condition key is not set to required.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the ec2 modify-instance-metadata-options command from the AWS CLI with the http-put-response-hop-limit 0 option.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the ec2 modify-instance-metadata-options command from the AWS CLI with the --http-tokens required option.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify instance security groups to deny all outbound HTTP traffic to 169.254.169.254.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>From each of the AWS account EC2 instances run the following command: <img class=\"w-100\" src=\"https://www.examtopics.com/assets/media/exam-media/04239/0021600001.png\" class=\"in-exam-image\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 325 discussion",
      "discusstion": [
        {
          "id": 913681,
          "date": "Sat 03 Jun 2023 16:34",
          "username": "Toptip",
          "content": "A + C best combination",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 703475,
          "date": "Tue 25 Oct 2022 03:18",
          "username": "HieuTT",
          "content": "325 is the end question ??? While Database have 334 questions",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 658619,
          "date": "Sat 03 Sep 2022 17:28",
          "username": "sapien45",
          "content": "The two answers are part of the same solution<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html<br>aws ec2 run-instances<br>--image-id ami-0abcdef1234567890<br>--instance-type t3.large<br>...<br>--metadata-options \\\"HttpEndpointenabled,HttpProtocolIpv6enabled\\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExamplePolicies_EC2.html#iam-example-instance-metadata<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br> {<br>\\\"Sid\\\": \\\"RequireImdsV2\\\",<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"ec2:RunInstances\\\",<br>\\\"Resource\\\": \\\"arn:aws:ec2:*:*:instance/*\\\",<br>\\\"Condition\\\": {<br>\\\"StringNotEquals\\\": {<br>\\\"ec2:MetadataHttpTokens\\\": \\\"required\\\"<br>}<br>}<br>}<br>]<br>}",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 656501,
          "date": "Thu 01 Sep 2022 19:28",
          "username": "mh777",
          "content": "A: https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ExamplePolicies_EC2.html#iam-example-instance-metadata<br>C: https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#326",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an Amazon RDS for MySQL DB instance in a VPC. The VPC must not send or receive network traffic through the internet.<br><br>A security engineer wants to use AWS Secrets Manager to rotate the DB instance credentials automatically. Because of a security policy, the security engineer cannot use the standard AWS Lambda function that Secrets Manager provides to rotate the credentials.<br><br>The security engineer deploys a custom Lambda function in the VPC. The custom Lambda function will be responsible for rotating the secret in Secrets Manager. The security engineer edits the DB instance's security group to allow connections from this function. When the function is invoked, the function cannot communicate with Secrets Manager to rotate the secret properly.<br><br>What should the security engineer do so that the function can rotate the secret?</p>",
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
              "choice": "<p>Add an egress-only internet gateway to the VPC. Allow only the Lambda function's subnet to route traffic through the egress-only internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a NAT gateway to the VPC. Configure only the Lambda function's subnet with a default route through the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPC peering connection to the default VPC for Secrets Manager. Configure the Lambda function's subnet to use the peering connection for routes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Secrets Manager interface VPC endpoint. Include the Lambda function's private subnet during the configuration process.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 326 discussion",
      "discusstion": [
        {
          "id": 913687,
          "date": "Sat 03 Jun 2023 16:36",
          "username": "Toptip",
          "content": "D - easy one.. need \\\"interface VPC endpoint\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 890331,
          "date": "Fri 05 May 2023 23:05",
          "username": "ITGURU51",
          "content": "The security engineer should configure a Secrets Manager interface VPC endpoint and include the Lambda function's private subnet during the configuration process. This will allow the custom Lambda function to communicate with Secrets Manager to rotate the secret properly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 866132,
          "date": "Mon 10 Apr 2023 10:51",
          "username": "nairj",
          "content": "D : - Use of VPC Endpoint for traffic to AWS Secrets manager to be private, not through the Internet.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 770511,
          "date": "Mon 09 Jan 2023 15:23",
          "username": "sakibmas",
          "content": "You can establish a private connection between your VPC and Secrets Manager by creating an interface VPC endpoint. Interface endpoints are powered by AWS PrivateLink, a technology that enables you to privately access Secrets Manager APIs without an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.<br>Reference: https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 746350,
          "date": "Thu 15 Dec 2022 18:21",
          "username": "Un1c0rn",
          "content": "C-incorrect. VPC peering has nothing to do with it.<br>D- Correct. It should be VPC interface endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722864,
          "date": "Sun 20 Nov 2022 19:17",
          "username": "AdamWest",
          "content": "D - Is correct<br>VPC peering is for VRF to VRF not this.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722045,
          "date": "Sat 19 Nov 2022 15:15",
          "username": "luisfsm",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722044,
          "date": "Sat 19 Nov 2022 15:15",
          "username": "luisfsm",
          "content": "D looks correct:<br><br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html",
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
      "question_text": "<p>A security team is developing an application on an Amazon EC2 instance to get objects from an Amazon S3 bucket. All objects in the S3 bucket are encrypted with an AWS Key Management Service (AWS KMS) CMK. All network traffic for requests that are made within the VPC is restricted to the AWS infrastructure. This traffic does not traverse the public internet.<br><br>The security team is unable to get objects from the S3 bucket.<br><br>Which factors could cause this issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#327",
          "answers": [
            {
              "choice": "<p>The IAM instance profile that is attached to the EC2 instance does not allow the s3:ListBucket action to the S3 bucket in the AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The IAM instance profile that is attached to the EC2 instance does not allow the s3:ListParts action to the S3 bucket in the AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The KMS key policy that encrypts the object in the S3 bucket does not allow the kms:ListKeys action to the EC2 instance profile ARN.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The KMS key policy that encrypts the object in the S3 bucket does not allow the kms:Decrypt action to the EC2 instance profile ARN.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The security group that is attached to the EC2 instance is missing an outbound rule to the S3 managed prefix list over port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The security group that is attached to the EC2 instance is missing an inbound rule from the S3 managed prefix list over port 443.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 327 discussion",
      "discusstion": [
        {
          "id": 724748,
          "date": "Wed 23 Nov 2022 00:29",
          "username": "Isaias",
          "content": "ADE,<br>B incorrect there=C2=B4s no exist listparts<br>C incorrect no listkey need it<br>F incorrect, SG are statefull, means you don=C2=B4s need to allow the returns trarffic",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 933937,
          "date": "Mon 26 Jun 2023 02:38",
          "username": "OCHT",
          "content": "ADF is right.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 913691,
          "date": "Sat 03 Jun 2023 16:40",
          "username": "Toptip",
          "content": "A+D+E correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 860511,
          "date": "Tue 04 Apr 2023 02:54",
          "username": "task_7",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html<br>Characteristics of security group rules<br>You can specify allow rules, but not deny rules.<br><br>When you first create a security group, it has no inbound rules. Therefore, no inbound traffic is allowed until you add inbound rules to the security group.<br><br>When you first create a security group, it has an outbound rule that allows all outbound traffic from the resource. You can remove the rule and add outbound rules that allow specific outbound traffic only. If your security group has no outbound rules, no outbound traffic is allowed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 835954,
          "date": "Sat 11 Mar 2023 13:10",
          "username": "Artaggedon",
          "content": "Since SG are state full, ADE is the correct answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 770515,
          "date": "Mon 09 Jan 2023 15:28",
          "username": "sakibmas",
          "content": "F incorrect, Security Group rules are statefull, means you do not need to allow the return incoming trarffic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 746353,
          "date": "Thu 15 Dec 2022 18:24",
          "username": "Un1c0rn",
          "content": "%100 ADE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 724226,
          "date": "Tue 22 Nov 2022 10:46",
          "username": "beatz",
          "content": "but I think the request needs to return from s3 to ec2 aswell, so it might be F instead of E. But I am really not sure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722838,
          "date": "Sun 20 Nov 2022 18:45",
          "username": "AdamWest",
          "content": "ADE - The EC2 is reaching out to S3, thus - E is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 722051,
          "date": "Sat 19 Nov 2022 15:26",
          "username": "luisfsm",
          "content": "A and D seem correct, but E makes more sense than F, since the EC2 instance needs access to S3, not the opposite, therefore Outbound rule... But, not sure about it.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADE"
        }
      ]
    },
    {
      "question_id": "#328",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a cron job on an Amazon EC2 instance on a predefined schedule. The cron job calls a bash script that encrypts a 2 KB file. A security engineer creates an AWS Key Management Service (AWS KMS) CMK with a key policy. The key policy and the EC2 instance role have the necessary configuration for this job.<br><br>Which process should the bash script use to encrypt the file?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#328",
          "answers": [
            {
              "choice": "<p>Use the aws kms encrypt command to encrypt the file by using the existing CMK.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the aws kms create-grant command to generate a grant for the existing CMK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the aws kms encrypt command to generate a data key. Use the plaintext data key to encrypt the file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the aws kms generate-data-key command to generate a data key. Use the encrypted data key to encrypt the file.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 328 discussion",
      "discusstion": [
        {
          "id": 730310,
          "date": "Tue 29 Nov 2022 12:28",
          "username": "D2",
          "content": "Answer A<br>data size is less than 4kb hence below should work<br>https://docs.aws.amazon.com/cli/latest/reference/kms/encrypt.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913697,
          "date": "Sat 03 Jun 2023 16:44",
          "username": "Toptip",
          "content": "A<br>'aws kms encrypt' command should be used for data less than 4KB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 770522,
          "date": "Mon 09 Jan 2023 15:34",
          "username": "sakibmas",
          "content": "\\\"aws kms encrypt\\\" Encrypts plaintext of up to 4,096 bytes using a KMS key.<br>Reference: https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kms/encrypt.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 768467,
          "date": "Sat 07 Jan 2023 12:19",
          "username": "luis12345",
          "content": "If the data to be encrypted in smaller than 4KB, there is no need to generate a new DataKey. It can be done directly with the CMK.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722576,
          "date": "Sun 20 Nov 2022 12:44",
          "username": "Blueocean",
          "content": "I would prefer option A to option D<br><br>https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html",
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
      "question_text": "<p>A company's security engineer needs to restrict access to AWS so that the company can deploy resources only in the eu-west-1 Region. The company uses AWS Organizations and has applied the following SCP at the organization's root level:<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image1.png\"&gt;<br><br>The company uses Amazon S3, Amazon Route 53, Amazon CloudFront, and AWS Identity and Access Management (IAM). These services must still work in eu-west-1.<br><br>Which entry should the security engineer remove from the NotAction element in the Deny policy to achieve this goal?</p>",
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
              "choice": "<p>s3:*<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>iam:*<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>cloudfront:*<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>route53:*<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 329 discussion",
      "discusstion": [
        {
          "id": 731143,
          "date": "Wed 30 Nov 2022 06:46",
          "username": "landsamboni",
          "content": "A.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-requested-region.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1107989,
          "date": "Thu 28 Dec 2023 18:12",
          "username": "yorkicurke",
          "content": "{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Sid\\\": \\\"DenyOutsideIreland\\\",<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"NotAction\\\": [<br>\\\"s3:*\\\",<br>\\\"route53:*\\\",<br>\\\"iam:*\\\",<br>\\\"cloudfront:*\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\": {<br>\\\"StringNotEquals\\\": {<br>\\\"aws:RequestedRegion\\\": \\\"eu-west-1\\\"<br>}<br>}<br>},<br>{<br>\\\"Sid\\\": \\\"AllowSelectServicesInIreland\\\",<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"s3:*\\\",<br>\\\"route53:*\\\",<br>\\\"iam:*\\\",<br>\\\"cloudfront:*\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\": {<br>\\\"StringEquals\\\": {<br>\\\"aws:RequestedRegion\\\": \\\"eu-west-1\\\"<br>}<br>}<br>}<br>]<br>}",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 920152,
          "date": "Sat 10 Jun 2023 17:29",
          "username": "6_8ftwin",
          "content": "S3 uses a global namespace; the actual object storage is specific to a given region",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913701,
          "date": "Sat 03 Jun 2023 16:49",
          "username": "Toptip",
          "content": "Only S3 is regional service. the others are global",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 832418,
          "date": "Wed 08 Mar 2023 02:16",
          "username": "llroni",
          "content": "A is correct but second allow policy is wrong. condition should be removed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 770526,
          "date": "Mon 09 Jan 2023 15:37",
          "username": "sakibmas",
          "content": "IAM, Route53, Cloudfront, Support are global",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 724757,
          "date": "Wed 23 Nov 2022 00:42",
          "username": "Isaias",
          "content": "A correct, the others services are global",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723043,
          "date": "Sun 20 Nov 2022 22:56",
          "username": "Shriraj32",
          "content": "S3 is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#330",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Signer with all of the company's AWS Lambda functions. A developer recently stopped working for the company. The company wants to ensure that all the code that the developer wrote can no longer be deployed to the Lambda functions.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#330",
          "answers": [
            {
              "choice": "<p>Revoke all versions of the signing profile assigned to the developer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Examine the developer's IAM roles. Remove all permissions that grant access to Signer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-encrypt all source code with a new AWS Key Management Service (AWS KMS) key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CodeGuru to profile all the code that the Lambda functions use.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 330 discussion",
      "discusstion": [
        {
          "id": 1052830,
          "date": "Tue 24 Oct 2023 14:39",
          "username": "M2ao",
          "content": "https://docs.aws.amazon.com/signer/latest/developerguide/revoking.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913706,
          "date": "Sat 03 Jun 2023 16:53",
          "username": "Toptip",
          "content": "A<br>SignerRevoke",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830162,
          "date": "Sun 05 Mar 2023 19:12",
          "username": "kujin",
          "content": "https://docs.aws.amazon.com/signer/latest/developerguide/revoking.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722904,
          "date": "Sun 20 Nov 2022 20:01",
          "username": "Fyssy",
          "content": "https://docs.aws.amazon.com/cli/latest/reference/signer/revoke-signing-profile.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722849,
          "date": "Sun 20 Nov 2022 18:55",
          "username": "AdamWest",
          "content": "A - Is the answer see above link.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722142,
          "date": "Sat 19 Nov 2022 18:35",
          "username": "AdamWest",
          "content": "A -<br>https://docs.aws.amazon.com/cli/latest/reference/signer/revoke-signing-profile.html",
          "upvote_count": "3",
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
      "question_text": "<p>A company is ready to deploy a public web application. The company will use AWS and will host the application on an Amazon EC2 instance. The company must use SSL/TLS encryption. The company is already using AWS Certificate Manager (ACM) and will export a certificate for use with the deployment.<br><br>How can a security engineer deploy the application to meet these requirements?</p>",
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
              "choice": "<p>Put the EC2 instance behind an Application Load Balancer (ALB). In the EC2 console, associate the certificate with the ALB by choosing HTTPS and 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instance behind a Network Load Balancer. Associate the certificate with the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instance behind a Network Load Balancer (NLB). In the EC2 console, associate the certificate with the NLB by choosing HTTPS and 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instance behind an Application Load Balancer. Associate the certificate with the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 331 discussion",
      "discusstion": [
        {
          "id": 934563,
          "date": "Mon 26 Jun 2023 16:40",
          "username": "Green53",
          "content": "\\\"The company is already using AWS Certificate Manager (ACM) and will export a certificate for use with the deployment.\\\"<br>You can't export a certificate from ACM, unless it's a private ACM.<br><br>Unless it's a poorly worded question, this would point towards the EC2 instance running with the certificate.<br>This means it could be B or D :s",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913708,
          "date": "Sat 03 Jun 2023 16:55",
          "username": "Toptip",
          "content": "A... correct 100%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 869865,
          "date": "Fri 14 Apr 2023 02:48",
          "username": "G4Exams",
          "content": "It's A because the scenario requires an ALB and D is not possible because it doesn't make sense to put the certification in front of the EC2 directly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 857070,
          "date": "Fri 31 Mar 2023 14:38",
          "username": "Cyp",
          "content": "Question is not clear... You can configure SSL offload on NLB as well. You use ALB if you have to use L7 control over requests such as http header injection or path based routing...vs otherwise NLB is more cheaper.... Also, you can install certificate on NLB and configure tcp passthrough so that certificate terminates on instance. Is it clear what question asks ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 830178,
          "date": "Sun 05 Mar 2023 19:27",
          "username": "kujin",
          "content": "A. https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/<br>NLB can terminate TLS now. However, only private ACM certificates can be associated with the EC2.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is also a viable solution, however A is more straightforward solution</li><li>Public ACM certificates should be used with ELBs and other AWS services that support ACM integration. Standalone EC2 instances should use public certificates issued by trusted CAs like Let's Encrypt or DigiCert.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 830185,
          "date": "Sun 05 Mar 2023 19:33",
          "username": "kujin",
          "content": "C is also a viable solution, however A is more straightforward solution<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Public ACM certificates should be used with ELBs and other AWS services that support ACM integration. Standalone EC2 instances should use public certificates issued by trusted CAs like Let's Encrypt or DigiCert.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 830441,
          "date": "Mon 06 Mar 2023 00:54",
          "username": "kujin",
          "content": "Public ACM certificates should be used with ELBs and other AWS services that support ACM integration. Standalone EC2 instances should use public certificates issued by trusted CAs like Let's Encrypt or DigiCert.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 803281,
          "date": "Thu 09 Feb 2023 15:00",
          "username": "milofficial",
          "content": "i think we don't need to explain",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741880,
          "date": "Sun 11 Dec 2022 17:16",
          "username": "Balki",
          "content": "If all the questions are as easy as this, it will be helpful",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732859,
          "date": "Thu 01 Dec 2022 17:51",
          "username": "AdamWest",
          "content": "A is the answer:<br>Associate an ACM SSL certificate with an Application Load Balancer<br>Open the Amazon EC2 console.<br>In the navigation pane, choose Load Balancers, and then choose your Application Load Balancer.<br>Choose Add listener.<br>For Protocol, choose HTTPS.<br>For port, choose 443.<br>For Default action(s), choose Forward to, and then select your ALB target group from the dropdown list.<br>For Default SSL certificate, choose From ACM (recommended) and then choose the ACM certificate.<br>Choose Save.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732100,
          "date": "Thu 01 Dec 2022 01:00",
          "username": "Isaias",
          "content": "A is the only sense answer, ALB with https lisntener and ACM certificate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#332",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Network Load Balancer (NLB) target instance is not entering the InService state. A security engineer determines that health checks are failing.<br><br>Which factors could cause the health check failures? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#332",
          "answers": [
            {
              "choice": "<p>The target instance's security group does not allow traffic from the NLB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The target instance's security group is not attached to the NLB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The NLB's security group is not attached to the target instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The target instance's subnet network ACL does not allow traffic from the NLB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The target instance's security group is not using IP addresses to allow traffic from the NLB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The target network ACL is not attached to the NLB.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 332 discussion",
      "discusstion": [
        {
          "id": 721313,
          "date": "Fri 18 Nov 2022 14:59",
          "username": "luisfsm",
          "content": "Based on the following links, I think it's A-D-E:<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html#target-security-groups<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-troubleshooting.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Network Load Balancers do not have associated security groups. Therefore, the security groups for your targets must use IP addresses to allow traffic.<br><br>You can't use the security groups for the clients as a source in the security groups for the targets. Therefore, the security groups for your targets must use the IP addresses of the clients to allow traffic.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 731977,
          "date": "Wed 30 Nov 2022 21:53",
          "username": "landsamboni",
          "content": "Network Load Balancers do not have associated security groups. Therefore, the security groups for your targets must use IP addresses to allow traffic.<br><br>You can't use the security groups for the clients as a source in the security groups for the targets. Therefore, the security groups for your targets must use the IP addresses of the clients to allow traffic.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 913714,
          "date": "Sat 03 Jun 2023 16:57",
          "username": "Toptip",
          "content": "A,D,E another easy question..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 835973,
          "date": "Sat 11 Mar 2023 13:35",
          "username": "Artaggedon",
          "content": "Answer F seems to have changed because it now talks about NACL, but stills makes no sense since it talks about target's NACL, which is ment to be used by the EC2 instances, not for the NLB.<br><br>Therefore, ADE is still the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 771202,
          "date": "Tue 10 Jan 2023 09:34",
          "username": "sakibmas",
          "content": "ALB has Security Group. NLB does not have Security Group. Thus, B,C & F is incorrect",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 746375,
          "date": "Thu 15 Dec 2022 18:44",
          "username": "Un1c0rn",
          "content": "F-Incorrect: You cannot attach security groups to NLB.<br>ADE- CORRECT",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 741885,
          "date": "Sun 11 Dec 2022 17:22",
          "username": "Balki",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-troubleshooting.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        }
      ]
    },
    {
      "question_id": "#333",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer must develop an AWS Identity and Access Management (IAM) strategy for a company's organization in AWS Organizations. The company needs to give developers autonomy to develop and test their applications on AWS, but the company also needs to implement security guardrails to help protect itself. The company creates and distributes applications with different levels of data classification and types. The solution must maximize scalability.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#333",
          "answers": [
            {
              "choice": "<p>Create an SCP to restrict access to highly privileged or unauthorized actions to specific IAM principals. Assign the SCP to the appropriate AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM permissions boundary to allow access to specific actions and IAM principals. Assign the IAM permissions boundary to all IAM principals within the organization<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a delegated IAM role that has capabilities to create other IAM roles. Use the delegated IAM role to provision IAM principals by following the principle of least privilege.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create OUs based on data classification and type. Add the AWS accounts to the appropriate OU. Provide developers access to the AWS accounts based on business need.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM groups based on data classification and type. Add only the required developers' IAM role to the IAM groups within each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM policies based on data classification and type. Add the minimum required IAM policies to the developers' IAM role within each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 333 discussion",
      "discusstion": [
        {
          "id": 934557,
          "date": "Mon 26 Jun 2023 16:32",
          "username": "Green53",
          "content": "- A: It mentions \\\"AWS Organisations\\\" and scalability, so I'm instantly looking for an SCP.<br>- B: Possibly, but it's not scalable, you would need to create/maintain a boundry in each account. Then, add IAM principle to the boundary.<br>- C: Sounds like good practice, isolate the role that can create other roles.<br>- D: Sounds scalable, should be easy to determine who has access to what<br>- E: Not really scalable, we want to avoid using groups (i.e, you create a new account, you need to recreate the groups)<br>- F: Not scalable, creating IAM policies for each data classification and type, for *each* account? Does each developer have a separate role? D is more more scalable.<br><br>I'd therefore go A, C and D (over F).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 913725,
          "date": "Sat 03 Jun 2023 17:17",
          "username": "Toptip",
          "content": "ADF only makes sense to me...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 890360,
          "date": "Sat 06 May 2023 00:47",
          "username": "ITGURU51",
          "content": "Typically, IT teams use AWS IAM roles with applications to handle credentials that run on AWS tools. Admins apply roles to instances so workloads can make secure API requests without any concern for underlying security credentials. Also, IAM roles enable admins and developers to delegate API permissions. In addition service control policies can be applied to organizational units to limit and control the scope of permissions granted to the developers. ACD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 865575,
          "date": "Sun 09 Apr 2023 16:33",
          "username": "Cyp",
          "content": "Correction BCD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCD"
        },
        {
          "id": 865574,
          "date": "Sun 09 Apr 2023 16:31",
          "username": "Cyp",
          "content": "SCP policies can be attached to an OU or directly to a account which means it affects all I am principals under an account or ou. Not the specific ones like stated A. Therefore A is out. For flexibility and scalability use permission boundaries.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 836660,
          "date": "Sun 12 Mar 2023 02:26",
          "username": "awsguru1998",
          "content": "ABD<br><br>Creating a delegated IAM role (option C) may also be a viable option, but it may be more complex to manage and may not be as scalable as an IAM permissions boundary, especially as the number of IAM principals grows.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 760161,
          "date": "Wed 28 Dec 2022 18:35",
          "username": "Teknoklutz",
          "content": "A looks good over F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 757411,
          "date": "Mon 26 Dec 2022 13:47",
          "username": "Singhh",
          "content": "ACD looks to be more relevant, SCP is correct method for OU<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A cannot be right as the field \\\"Principal\\\" does not exist on SCPs</li><li>Here, the Principal does not talks about the Syntax. It talks about the IAM principals, which is a Role and users.<br>\\\"For example, you can use SCPs to restrict access to specific AWS Regions, or prevent your IAM principals from deleting common resources, such as an IAM role used for your central administrators. You can also define exceptions to your governance controls, restricting service actions for all IAM entities (users, roles, and root) in the account except a specific administrator role.\\\"<br>https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/</li><li>ACD is correct answer</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 768476,
          "date": "Sat 07 Jan 2023 12:29",
          "username": "luis12345",
          "content": "A cannot be right as the field \\\"Principal\\\" does not exist on SCPs<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Here, the Principal does not talks about the Syntax. It talks about the IAM principals, which is a Role and users.<br>\\\"For example, you can use SCPs to restrict access to specific AWS Regions, or prevent your IAM principals from deleting common resources, such as an IAM role used for your central administrators. You can also define exceptions to your governance controls, restricting service actions for all IAM entities (users, roles, and root) in the account except a specific administrator role.\\\"<br>https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/</li><li>ACD is correct answer</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 800500,
          "date": "Tue 07 Feb 2023 04:20",
          "username": "Smartphone",
          "content": "Here, the Principal does not talks about the Syntax. It talks about the IAM principals, which is a Role and users.<br>\\\"For example, you can use SCPs to restrict access to specific AWS Regions, or prevent your IAM principals from deleting common resources, such as an IAM role used for your central administrators. You can also define exceptions to your governance controls, restricting service actions for all IAM entities (users, roles, and root) in the account except a specific administrator role.\\\"<br>https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ACD is correct answer</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 800501,
          "date": "Tue 07 Feb 2023 04:20",
          "username": "Smartphone",
          "content": "ACD is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754650,
          "date": "Sat 24 Dec 2022 03:10",
          "username": "Kevin24",
          "content": "Applying permissions at organization level is a more feasible approach<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question states that the security engineer needs to maximize scalability.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 890362,
          "date": "Sat 06 May 2023 00:51",
          "username": "ITGURU51",
          "content": "The question states that the security engineer needs to maximize scalability.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753338,
          "date": "Thu 22 Dec 2022 14:51",
          "username": "AgentR",
          "content": "https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/#:~:textYou%20can%20attach%20SCPs%20to,they%20do%20not%20grant%20permissions.<br><br>You can attach SCPs to the organization root, OUs, and individual accounts. SCPs attached to the root and OUs apply to all OUs and accounts inside of them.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 735267,
          "date": "Sun 04 Dec 2022 18:07",
          "username": "Teknoklutz",
          "content": "For A - SCP needs to be assigned to OU and not direct Account ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCP can be attached directly to member accounts</li><li>https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/<br>' You can attach SCPs to the organization root, OUs, and individual accounts. SCPs attached to the root and OUs apply to all OUs and accounts inside of them.' </li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 757101,
          "date": "Mon 26 Dec 2022 07:05",
          "username": "Subs2021",
          "content": "SCP can be attached directly to member accounts",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752877,
          "date": "Thu 22 Dec 2022 00:47",
          "username": "Wilson_S",
          "content": "https://aws.amazon.com/blogs/security/how-to-use-service-control-policies-to-set-permission-guardrails-across-accounts-in-your-aws-organization/<br>' You can attach SCPs to the organization root, OUs, and individual accounts. SCPs attached to the root and OUs apply to all OUs and accounts inside of them.' ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 733804,
          "date": "Fri 02 Dec 2022 15:09",
          "username": "AdamWest",
          "content": "Its either ACD or ACF - Going with ACD.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        }
      ]
    },
    {
      "question_id": "#334",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has thousands of AWS Lambda functions. While reviewing the Lambda functions, a security engineer discovers that sensitive information is being stored in environment variables and is viewable as plaintext in the Lambda console. The values of the sensitive information are only a few characters long.<br><br>What is the MOST cost-effective way to address this security issue?</p>",
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
              "choice": "<p>Set up IAM policies from the Lambda console to hide access to the environment variables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions to store the environment variables. Access the environment variables at runtime. Use IAM permissions to restrict access to the environment variables to only the Lambda functions that require access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the environment variables in AWS Secrets Manager, and access them at runtime. Use IAM permissions to restrict access to the secrets to only the Lambda functions that require access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the environment variables in AWS Systems Manager Parameter Store as secure string parameters, and access them at runtime. Use IAM permissions to restrict access to the parameters to only the Lambda functions that require access.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 334 discussion",
      "discusstion": [
        {
          "id": 721322,
          "date": "Fri 18 Nov 2022 15:13",
          "username": "luisfsm",
          "content": "More cost-effective way would be parameter store as a secure string",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913729,
          "date": "Sat 03 Jun 2023 17:19",
          "username": "Toptip",
          "content": "D is the most cost-effective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 869868,
          "date": "Fri 14 Apr 2023 02:51",
          "username": "G4Exams",
          "content": "Parameter Store is the cheapest way. It's in general the way to go when there a questions about most cost-effective way to store a secret.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755788,
          "date": "Sun 25 Dec 2022 16:32",
          "username": "Subs2021",
          "content": "D is cost effective way to store the information and its free.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 751544,
          "date": "Tue 20 Dec 2022 22:45",
          "username": "XaviL",
          "content": "D is cost effective",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 737732,
          "date": "Wed 07 Dec 2022 11:26",
          "username": "maddyr",
          "content": "D is cost effective compared to C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728246,
          "date": "Sun 27 Nov 2022 14:24",
          "username": "RamarRaju",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722158,
          "date": "Sat 19 Nov 2022 19:03",
          "username": "AdamWest",
          "content": "Answer D:",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#335",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Route 53 Resolver for its hybrid DNS infrastructure. The company has set up Route 53 Resolver forwarding rules for authoritative domains that are hosted on on-premises DNS servers.<br><br>A new security mandate requires the company to implement a solution to log and query DNS traffic that goes to the on-premises DNS servers. The logs must show details of the source IP address of the instance from which the query originated. The logs also must show the DNS name that was requested in Route 53 Resolver.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Use VPC Traffic Mirroring. Configure all relevant elastic network interfaces as the traffic source, include amazon-dns in the mirror filter, and set Amazon CloudWatch Logs as the mirror target. Use CloudWatch Insights on the mirror session logs to run queries on the source IP address and DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure VPC flow logs on all relevant VPCs. Send the logs to an Amazon S3 bucket. Use Amazon Athena to run SQL queries on the source IP address and DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Route 53 Resolver query logging on all relevant VPCs. Send the logs to Amazon CloudWatch Logs. Use CloudWatch Insights to run queries on the source IP address and DNS name.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Route 53 Resolver rules on the authoritative domains that forward to the on-premises DNS servers. Send the logs to an Amazon S3 bucket. Use Amazon Athena to run SQL queries on the source IP address and DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 335 discussion",
      "discusstion": [
        {
          "id": 744863,
          "date": "Wed 14 Dec 2022 09:14",
          "username": "amcloud",
          "content": "Is C - https://aws.amazon.com/es/blogs/aws/log-your-vpc-dns-queries-with-route-53-resolver-query-logs/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913735,
          "date": "Sat 03 Jun 2023 17:25",
          "username": "Toptip",
          "content": "C - Route 53 Resolver query logging can log Outbound R53 Resolver",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 890816,
          "date": "Sat 06 May 2023 17:09",
          "username": "ITGURU51",
          "content": "The solution that will meet these requirements is to configure Route 53 Resolver query logging on all relevant VPCs. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847612,
          "date": "Thu 23 Mar 2023 01:06",
          "username": "[Removed]",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-query-logs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757965,
          "date": "Tue 27 Dec 2022 01:10",
          "username": "yew2",
          "content": "Why isn't it D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When you create or edit an outbound endpoint, you specify the following values:<br><br>Endpoint name<br>VPC in the region-name Region<br>Security group<br>IP addresses<br>Tags<br><br>Just by modifying the forwarding rule we can not forward the log to S3. Further, the option D does not talk about logging the DNS query.<br>So, A is the reasonable Answer</li><li>Please see the question no. 10 and its explanation of the official AWS document<br>https://d1.awsstatic.com/training-and-certification/docs-advnetworking-spec/AWS-Certified-Advanced-Networking-Specialty_Sample-Questions.pdf</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 800517,
          "date": "Tue 07 Feb 2023 04:48",
          "username": "Smartphone",
          "content": "When you create or edit an outbound endpoint, you specify the following values:<br><br>Endpoint name<br>VPC in the region-name Region<br>Security group<br>IP addresses<br>Tags<br><br>Just by modifying the forwarding rule we can not forward the log to S3. Further, the option D does not talk about logging the DNS query.<br>So, A is the reasonable Answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please see the question no. 10 and its explanation of the official AWS document<br>https://d1.awsstatic.com/training-and-certification/docs-advnetworking-spec/AWS-Certified-Advanced-Networking-Specialty_Sample-Questions.pdf</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 800521,
          "date": "Tue 07 Feb 2023 04:52",
          "username": "Smartphone",
          "content": "Please see the question no. 10 and its explanation of the official AWS document<br>https://d1.awsstatic.com/training-and-certification/docs-advnetworking-spec/AWS-Certified-Advanced-Networking-Specialty_Sample-Questions.pdf",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755796,
          "date": "Sun 25 Dec 2022 16:37",
          "username": "Subs2021",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 754656,
          "date": "Sat 24 Dec 2022 03:26",
          "username": "Kevin24",
          "content": "The correct answer is to configure Amazon Route 53 Resolver query logging for all the VPCs. The query logs can be stored in Amazon CloudWatch Logs and can be analyzed with CloudWatch Logs Insights. The other answer options will fail to capture the needed DNS queries.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735477,
          "date": "Sun 04 Dec 2022 22:31",
          "username": "AdamWest",
          "content": "D - Is the Answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732458,
          "date": "Thu 01 Dec 2022 10:45",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724727,
          "date": "Tue 22 Nov 2022 23:26",
          "username": "Shriraj32",
          "content": "I agree with D.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722859,
          "date": "Sun 20 Nov 2022 19:09",
          "username": "AdamWest",
          "content": "C--https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This seems to be a typo</li><li>Wrong Question answer - This Question Answer: D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732457,
          "date": "Thu 01 Dec 2022 10:45",
          "username": "D2",
          "content": "This seems to be a typo",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735476,
          "date": "Sun 04 Dec 2022 22:31",
          "username": "AdamWest",
          "content": "Wrong Question answer - This Question Answer: D",
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
      "question_text": "<p>A company uses SAML federation with AWS Identity and Access Management (IAM) to provide internal users with SSO for their AWS accounts. The company's identity provider certificate was rotated as part of its normal lifecycle. Shortly after, users started receiving the following error when attempting to log in:<br><br>\"Error: Response Signature Invalid (Service: AWSSecurityTokenService; Status Code: 400; Error Code: InvalidIdentityToken)\"<br><br>A security engineer needs to address the immediate issue and ensure that it will not occur again.<br><br>Which combination of steps should the security engineer take to accomplish this? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#336",
          "answers": [
            {
              "choice": "<p>Download a new copy of the SAML metadata file from the identity provider. Create a new IAM identity provider entity. Upload the new metadata file to the new IAM identity provider entity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>During the next certificate rotation period and before the current certificate expires, add a new certificate as the secondary to the identity provider. Generate a new metadata file and upload it to the IAM identity provider entity. Perform automated or manual rotation of the certificate when required.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Download a new copy of the SAML metadata file from the identity provider. Upload the new metadata to the IAM identity provider entity configured for the SAML integration in question.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>During the next certificate rotation period and before the current certificate expires, add a new certificate as the secondary to the identity provider. Generate a new copy of the metadata file and create a new IAM identity provider entity. Upload the metadata file to the new IAM identity provider entity. Perform automated or manual rotation of the certificate when required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Download a new copy of the SAML metadata file from the identity provider. Create a new IAM identity provider entity. Upload the new metadata file to the new IAM identity provider entity. Update the identity provider configurations to pass a new IAM identity provider entity name in the SAML assertion.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 336 discussion",
      "discusstion": [
        {
          "id": 1108021,
          "date": "Thu 28 Dec 2023 18:57",
          "username": "yorkicurke",
          "content": "Reason for not choosing A and D;<br><br>It is not correctcreating a --\\\"new\\\"-- IAM identity provider--\\\"entity\\\"-- , cos that would require updating all IAM roles that --\\\"trust\\\"--the ---\\\"old identity provider entity \\\" ---.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 890827,
          "date": "Sat 06 May 2023 17:18",
          "username": "ITGURU51",
          "content": "B and C provides a viable solution for outdate meta data or invalid certificates used duringthe authentication process for SAML.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754660,
          "date": "Sat 24 Dec 2022 03:31",
          "username": "Kevin24",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_saml.html#troubleshoot_saml_invalid-metadata",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 734167,
          "date": "Sat 03 Dec 2022 03:30",
          "username": "neverletmego",
          "content": "Agree with BC",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 731010,
          "date": "Wed 30 Nov 2022 02:48",
          "username": "tainh",
          "content": "I chooseB & C<br>B: https://docs.aws.amazon.com/singlesignon/latest/userguide/rotatesamlcert.html<br>C: https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_saml.html#troubleshoot_saml_invalid-metadata",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#337",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a group of Amazon EC2 instances in a single private subnet of a VPC with no internet gateway attached. A security engineer has installed the Amazon CloudWatch agent on all instances in that subnet to capture logs from a specific application. To ensure that the logs flow securely, the company's networking team has created VPC endpoints for CloudWatch monitoring and CloudWatch logs. The networking team has attached the endpoints to the VPC.<br><br>The application is generating logs. However, when the security engineer queries CloudWatch, the logs do not appear.<br><br>Which combination of steps should the security engineer take to troubleshoot this issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#337",
          "answers": [
            {
              "choice": "<p>Ensure that the EC2 instance profile that is attached to the EC2 instances has permissions to create log streams and write logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a metric filter on the logs so that they can be viewed in the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check the CloudWatch agent configuration file on each EC2 instance to make sure that the CloudWatch agent is collecting the proper log files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Check the VPC endpoint policies of both VPC endpoints to ensure that the EC2 instances have permissions to use them.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a NAT gateway in the subnet so that the EC2 instances can communicate with CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the security groups allow all the EC2 instances to communicate with each other to aggregate logs before sending.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 337 discussion",
      "discusstion": [
        {
          "id": 721426,
          "date": "Fri 18 Nov 2022 17:47",
          "username": "luisfsm",
          "content": "By elimination, ACD",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 890877,
          "date": "Sat 06 May 2023 18:33",
          "username": "ITGURU51",
          "content": "To grant the EC2 instance profile permissions to create log streams and write logs, you need to attach a permissions policy to the IAM role associated with the EC2 instance profile. A<br>C- We need to make the the cloudwatch agent is configured, running and collecting the logs on the endpoint.<br>D-Ensure the EC2 instance has connectivity and the correct permissions to VPC endpoints.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755802,
          "date": "Sun 25 Dec 2022 17:00",
          "username": "Subs2021",
          "content": "Refer CloudWatch logging troubleshooting and https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 732877,
          "date": "Thu 01 Dec 2022 18:14",
          "username": "AdamWest",
          "content": "ACD - Is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 730146,
          "date": "Tue 29 Nov 2022 10:19",
          "username": "D2",
          "content": "Answer ACD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        }
      ]
    },
    {
      "question_id": "#338",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company does not allow the permanent installation of SSH keys onto an Amazon Linux 2 EC2 instance. However, three employees who have IAM user accounts require access to the EC2 instance. The employees must use an SSH session to perform critical duties.<br><br>How can a security engineer provide the appropriate access to the EC2 instance to meet these requirements?</p>",
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
              "choice": "<p>Use AWS Systems Manager Inventory to select the EC2 instance and connect. Provide the IAM user accounts with the permissions to use Systems Manager Inventory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Run Command to open an SSH connection to the EC2 instance. Provide the IAM user accounts with the permissions to use Run Command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Session Manager. Provide the IAM user accounts with the permissions to use Systems Manager Session Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Connect to the EC2 instance as the ec2-user through the AWS Management Console's EC2 SSH client method. Provide the IAM user accounts with access to use the EC2 service in the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 338 discussion",
      "discusstion": [
        {
          "id": 733251,
          "date": "Fri 02 Dec 2022 01:31",
          "username": "AdamWest",
          "content": "Revised answer- C<br>Port forwarding<br><br>Redirect any port inside your managed node to a local port on a client. After that, connect to the local port and access the server application that is running inside the node.<br>Note<br>Logging isn't available for Session Manager sessions that connect through port forwarding or SSH. This is because SSH encrypts all session data, and Session Manager only serves as a tunnel for SSH connections.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 940140,
          "date": "Sat 01 Jul 2023 17:57",
          "username": "symplesims",
          "content": "C is correct<br>\\\"The employees must use an SSH session to perform critical duties.\\\"<br><br>SSM not use SSH protocol, but support SSH Session<br>- https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#sessions-start-ssh",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 934543,
          "date": "Mon 26 Jun 2023 16:17",
          "username": "Green53",
          "content": "I'd actually go D here, because of:<br>\\\"The employees must use an SSH session to perform critical duties.\\\"<br><br>C does not provide an SSH session. Yes, it seem you can now tunnel the connection, as described here:<br>https://repost.aws/knowledge-center/systems-manager-ssh-vpc-resources<br>But that requires permanent installation of public keys (to verify the initial SSH connection). This is explictly not allowed.<br><br>Since A/B are garbage, that really only leaves D. I don't see why D isn't related EC2 instance connect:<br>https://aws.amazon.com/blogs/compute/new-using-amazon-ec2-instance-connect-for-ssh-access-to-your-ec2-instances/<br>Sounds exactly like what they're attempting to do. Provide SSH access via the console for IAM users. D uses temporary credentials to connect to the instance.<br><br>Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913750,
          "date": "Sat 03 Jun 2023 17:38",
          "username": "Toptip",
          "content": "C is 100% correct. easy one...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913050,
          "date": "Fri 02 Jun 2023 23:47",
          "username": "6_8ftwin",
          "content": "C<br>For the people saying D, the method described (i.e., \\\"AWS Management Console's EC2 SSH client method\\\") is not EC2 Instance Connect.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 910213,
          "date": "Tue 30 May 2023 14:07",
          "username": "Tofu13",
          "content": "Session Manager connects via ssm agent to the instance, which is apparently similar to SSH, but not the same.<br>https://repost.aws/knowledge-center/systems-manager-ssh-vpc-resources<br>(U can use real SSH tunnels once logged in though, but that's not the question)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 898338,
          "date": "Mon 15 May 2023 15:47",
          "username": "Mark1000",
          "content": "Answer C<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 890895,
          "date": "Sat 06 May 2023 19:10",
          "username": "ITGURU51",
          "content": "Session manager enables secure remote access to endpoints running in the cloud or in data center environments. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730154,
          "date": "Tue 29 Nov 2022 10:24",
          "username": "D2",
          "content": "Answer C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722876,
          "date": "Sun 20 Nov 2022 19:33",
          "username": "AdamWest",
          "content": "D - Systems manager essentially disables ssh.<br>In 2019 AWS provided Amazon EC2 Instance Connect, a new way to control SSH access to your EC2 instances using AWS Identity and Access Management (IAM).<br>https://aws.amazon.com/blogs/compute/new-using-amazon-ec2-instance-connect-for-ssh-access-to-your-ec2-instances/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As per Instance Connect feature, users would login using IAM user access. Whereas, in option users are logging in as 'ec2-user'. In my view - answer should be option C, not D</li><li>The user authenticates as ec2-user on the instance (as it's Amazon Linux), but they use IAM for the initial authorisation.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 730153,
          "date": "Tue 29 Nov 2022 10:24",
          "username": "D2",
          "content": "As per Instance Connect feature, users would login using IAM user access. Whereas, in option users are logging in as 'ec2-user'. In my view - answer should be option C, not D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The user authenticates as ec2-user on the instance (as it's Amazon Linux), but they use IAM for the initial authorisation.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 934544,
          "date": "Mon 26 Jun 2023 16:18",
          "username": "Green53",
          "content": "The user authenticates as ec2-user on the instance (as it's Amazon Linux), but they use IAM for the initial authorisation.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running a dynamic website by using an Application Load Balancer (ALB). A security engineer notices that bots from different IP addresses are using brute-force attacks to invoke a service endpoint frequently.<br><br>What is the FASTEST way to mitigate this problem?</p>",
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
              "choice": "<p>Create an AWS Lambda function to process ALB logs. Block the bots' IP addresses in the ALB's security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS WAF web ACL for the ALAdd a rate-based rule to the web ACL to block the bots.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an ALB listener rule. Combine source-ip and path-pattern as the conditions to match bots. Specify a fixed-response action to return an HTTP 403 status.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS WAF web ACL for the ALB. Add a rate-based rule to a rule group to block the bots. Attach the rule to the web ACL.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 339 discussion",
      "discusstion": [
        {
          "id": 926331,
          "date": "Sun 18 Jun 2023 01:37",
          "username": "Samcert",
          "content": "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control-rg-using.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913754,
          "date": "Sat 03 Jun 2023 17:44",
          "username": "Toptip",
          "content": "B - simple and straightforward...<br>D - is wrong,rule groups can be used only with AWS Firewall Manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910229,
          "date": "Tue 30 May 2023 14:28",
          "username": "Tofu13",
          "content": "Really hard to decide between B and D, but I'd say that is B, because AWS prefers to include the actual name for things in their answers, but D doesn't mention Bot Control rule group.<br>Also true, that u' d have to add the rule group to the webACL rather than the rule, but it's usually not that kind of trap that falsify a question, rather an inaccuracy imo.<br>https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 890941,
          "date": "Sat 06 May 2023 20:37",
          "username": "ITGURU51",
          "content": "As per AWS: Bot Control is enabled by adding an AWS managed rule group to a Web Access Control List, making it easy to add bot protection for your applications that use Amazon CloudFront, Application Load Balancer, Amazon API Gateway. D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 871489,
          "date": "Sun 16 Apr 2023 07:34",
          "username": "isokalau",
          "content": "The FASTEST way to mitigate this problem would be to create an AWS WAF web ACL for the ALB and add a rate-based rule to block the bots. Therefore, the correct answer is B.<br>D suggests creating an AWS WAF web ACL and adding a rate-based rule to a rule group to block the bots. This option is similar to option B but involves additional steps that may slow down the mitigation process.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 865260,
          "date": "Sun 09 Apr 2023 05:37",
          "username": "awsgugu",
          "content": "D: https://aws.amazon.com/waf/features/bot-control/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 857132,
          "date": "Fri 31 Mar 2023 15:45",
          "username": "Cyp",
          "content": "I agree. You can apply rules directly to a Web ACL, not necessary to create a rule group: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 843326,
          "date": "Sun 19 Mar 2023 02:15",
          "username": "[Removed]",
          "content": "You can apply rules directly to a Web ACL, not necessary to create a rule group: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 800541,
          "date": "Tue 07 Feb 2023 05:41",
          "username": "Smartphone",
          "content": "In D it talks about \\\"Add a rate-based rule to a rule group...\\\" and\\\"..Attach the rule to the web ACL\\\". If you have added the rate based rule to the rule group then the rule group needs to be added to the web ACL not the rule.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For the FASTEST - B is the correct answer. No need to create Rule group. Just add rule to web ACL</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 800542,
          "date": "Tue 07 Feb 2023 05:42",
          "username": "Smartphone",
          "content": "For the FASTEST - B is the correct answer. No need to create Rule group. Just add rule to web ACL",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 763249,
          "date": "Sun 01 Jan 2023 17:14",
          "username": "secdaddy",
          "content": "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control-rg-using.html<br>Discusses a rule group, which seems to be the only difference between B and D so I guess D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That being said, can configure a rate limit rule which might be 'the FASTEST way'.<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html<br><br>Stupid question</li><li>This document provide comparison between Rate-based rule statement and AWS WAF Bot Control rule group<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections-comparison-table-rbr-bot.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763251,
          "date": "Sun 01 Jan 2023 17:16",
          "username": "secdaddy",
          "content": "That being said, can configure a rate limit rule which might be 'the FASTEST way'.<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html<br><br>Stupid question<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This document provide comparison between Rate-based rule statement and AWS WAF Bot Control rule group<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections-comparison-table-rbr-bot.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 830587,
          "date": "Mon 06 Mar 2023 07:30",
          "username": "kujin",
          "content": "This document provide comparison between Rate-based rule statement and AWS WAF Bot Control rule group<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections-comparison-table-rbr-bot.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755806,
          "date": "Sun 25 Dec 2022 17:06",
          "username": "Subs2021",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755606,
          "date": "Sun 25 Dec 2022 12:53",
          "username": "KarthikRaveRaam",
          "content": "Why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 738650,
          "date": "Thu 08 Dec 2022 06:36",
          "username": "lokwongwtl",
          "content": "Why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730162,
          "date": "Tue 29 Nov 2022 10:27",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723030,
          "date": "Sun 20 Nov 2022 22:38",
          "username": "Shriraj32",
          "content": "Yup, going for D too.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721429,
          "date": "Fri 18 Nov 2022 17:50",
          "username": "luisfsm",
          "content": "WAF is the guy for this. Between B and D, i go with D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Is B a faster approach than D though?</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 734171,
          "date": "Sat 03 Dec 2022 03:40",
          "username": "neverletmego",
          "content": "Is B a faster approach than D though?",
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
      "question_text": "<p>A team is using AWS Secrets Manager to store an application database password. Only a limited number of IAM principals within the account can have access to the secret. The principals who require access to the secret change frequently. A security engineer must create a solution that maximizes flexibility and scalability.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#340",
          "answers": [
            {
              "choice": "<p>Use a role-based approach by creating an IAM role with an inline permissions policy that allows access to the secret. Update the IAM principals in the role trust policy as required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a VPC endpoint for Secrets Manager. Create and attach an endpoint policy that specifies the IAM principals that are allowed to access the secret. Update the list of IAM principals as required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a tag-based approach by attaching a resource policy to the secret. Apply tags to the secret and the IAM principals. Use the aws:PrincipalTag and aws:ResourceTag IAM condition keys to control access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a deny-by-default approach by using IAM policies to deny access to the secret explicitly. Attach the policies to an IAM group. Add all IAM principals to the IAM group. Remove principals from the group when they need access. Add the principals to the group again when access is no longer allowed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 340 discussion",
      "discusstion": [
        {
          "id": 913759,
          "date": "Sat 03 Jun 2023 17:47",
          "username": "Toptip",
          "content": "C - ABAC approach",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 890962,
          "date": "Sat 06 May 2023 21:04",
          "username": "ITGURU51",
          "content": "Attribute-based access control (ABAC) can be used to simplify permissions management at scale. You can use tags to control access to your AWS resources that support tagging, including IAM resources. You can tag IAM users and roles to control what they can access. C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 787302,
          "date": "Wed 25 Jan 2023 06:45",
          "username": "arpgaur",
          "content": "Kinda wondering why not D? definetly more secure than C because of an implicit deny all rule.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ABAC is the most flexible solution given out of all possible choices.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 890965,
          "date": "Sat 06 May 2023 21:09",
          "username": "ITGURU51",
          "content": "ABAC is the most flexible solution given out of all possible choices.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 735566,
          "date": "Mon 05 Dec 2022 02:07",
          "username": "AdamWest",
          "content": "C - using tags you can now use attribute-based access control (ABAC) to simplify permissions management at scale. (Also Amazon is pushing this model)<br>A - Will totally work however, its not as flexible or scalable asABAC<br>B- VPC policy good luck managing that. Not flexible or scalable.<br>D - Not flexible and managing that would also suck.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734173,
          "date": "Sat 03 Dec 2022 03:44",
          "username": "neverletmego",
          "content": "C.<br>https://aws.amazon.com/blogs/security/simplify-granting-access-to-your-aws-resources-by-using-tags-on-aws-iam-users-and-roles/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 734160,
          "date": "Sat 03 Dec 2022 02:57",
          "username": "beebee",
          "content": "Why not A?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 732008,
          "date": "Wed 30 Nov 2022 22:37",
          "username": "landsamboni",
          "content": "B.<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html",
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
      "question_text": "<p>A company requires deep packet inspection on encrypted traffic to its web servers in its VPC.<br><br>Which solution will meet this requirement?</p>",
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
              "choice": "<p>Decrypt traffic by using an Application Load Balancer (ALB) that is configured for TLS termination. Configure the ALB to send the traffic to an AWS Network Firewall endpoint for the deep packet inspection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decrypt traffic by using a Network Load Balancer (NLB) that is configured for TLS termination. Configure the NLB to send the traffic to an AWS Network Firewall endpoint for the deep packet inspection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Decrypt traffic by using an Application Load Balancer (ALB) that is configured for TLS termination. Configure the ALB to send the traffic to an AWS WAF endpoint for the deep packet inspection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decrypt traffic by using a Network Load Balancer (NLB) that is configured for TLS termination. Configure the NLB to send the traffic to an AWS WAF endpoint for the deep packet inspection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 341 discussion",
      "discusstion": [
        {
          "id": 729158,
          "date": "Mon 28 Nov 2022 14:32",
          "username": "D2",
          "content": "Ans B<br><br>https://aws.amazon.com/network-firewall/faqs/<br> Can AWS Network Firewall inspect encrypted traffic?<br><br>AWS Network Firewall does not currently support deep packet inspection for encrypted traffic. To work around this limitation, you can decrypt traffic using a Network Load Balancer (NLB) before sending it to an AWS Network Firewall endpoint. Also, for HTTPS traffic, AWS Network Firewall can inspect the domain name provided by the Server Name Indicator (SNI) during the TLS handshake.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer of above FAQ has changed to:<br>AWS Network Firewall does support deep packet inspection for encrypted traffic.<br>So this question is not likely to come up with this wording.</li></ul>",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 911258,
          "date": "Wed 31 May 2023 14:40",
          "username": "Tofu13",
          "content": "Answer of above FAQ has changed to:<br>AWS Network Firewall does support deep packet inspection for encrypted traffic.<br>So this question is not likely to come up with this wording.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1108425,
          "date": "Fri 29 Dec 2023 08:31",
          "username": "yorkicurke",
          "content": "i will still go for A even though now NLB supports TLS and all, here is why;<br><br>key difference between them when it comes to handling decrypted traffic:<br><br>ALBs operate at the request level (layer 7), which allows them to inspect the content of the traffic and make routing decisions based on that. This makes them suitable for use cases like the one in Option A, where the decrypted traffic needs to be sent to AWS Network Firewall for deep packet inspection.<br><br>NLBs operate at the connection level (layer 4), which means they can't inspect the content of the traffic. They make routing decisions based on IP protocol data, such as source IP, source port, destination IP, and destination port. This makes them less suitable for use cases like the one in Option B, where the decrypted traffic needs to be inspected.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your reasoning does not make sense. ALB and NLB are mainly to forward traffic - they don't \\\"inspect\\\" traffic as you claimed. Once the TLS traffic is decrypted, the traffic self is not altered by the LB so the AWS Network Firewall can do DPI anyways.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1179077,
          "date": "Thu 21 Mar 2024 10:07",
          "username": "nznzwell",
          "content": "Your reasoning does not make sense. ALB and NLB are mainly to forward traffic - they don't \\\"inspect\\\" traffic as you claimed. Once the TLS traffic is decrypted, the traffic self is not altered by the LB so the AWS Network Firewall can do DPI anyways.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 936031,
          "date": "Wed 28 Jun 2023 05:05",
          "username": "dante_2k5",
          "content": "Option A, which suggests using an ALB for TLS termination, is incorrect because ALB only supports TLS termination on port 443 and may not meet the requirement if the traffic is not using port 443, which in this case is not being explicit.<br>Option C and Option D are not valid due AWS WAF is not suitable for deep packet inspection.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 929266,
          "date": "Wed 21 Jun 2023 11:19",
          "username": "vherman",
          "content": "A look best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913793,
          "date": "Sat 03 Jun 2023 18:16",
          "username": "Toptip",
          "content": "NLB + Network Firewall",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 890977,
          "date": "Sat 06 May 2023 21:39",
          "username": "ITGURU51",
          "content": "A is the best answer because the ALB is designed to load balance http and https requests. Furthermore terminating TLS traffic using an (ALB) is a common practice for enterprise networks. AWS Network Firewall provides deep packet inspection to analyze malicious traffic flowing in and out of the VPC. A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 857167,
          "date": "Fri 31 Mar 2023 16:18",
          "username": "Cyp",
          "content": "The Answer is B. With ALB you can only create TLS listener for port 443 but with NLB you can create TLS listener of your choice.... Remember, the traffic that Network firewall is going to inspect dosent necessarily to be https...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847495,
          "date": "Wed 22 Mar 2023 21:28",
          "username": "examaws",
          "content": "NLB cannot perform TLS termination. So even if NLB can decrypt traffic, you need another appliance behind that NLB, before sending the traffic to Network Firewall. ALB can handle all of the required, decrypt and TLS termination, before send to Network Firewall.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br>NLB Can perform TLS termination.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 866215,
          "date": "Mon 10 Apr 2023 13:20",
          "username": "nairj",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br>NLB Can perform TLS termination.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 846963,
          "date": "Wed 22 Mar 2023 12:01",
          "username": "rijub2022",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/deployment-models-for-aws-network-firewall-with-vpc-routing-enhancements/<br><br>' In the figure 3 example, an Application Load Balancer (ALB) enables you to offload TLS. Decrypted HTTP traffic is sent to backend application targets which could be in a different AZ enabling HTTP header and payload inspection. Following our principle, traffic from ALB to backend target is inspected in the same AZ as the client (ALB). The application in turn requires connectivity to the relational (main/active node) database. This traffic once again is processed closer to the client (application EC2 instance) and traffic is returned symmetrically.' ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774556,
          "date": "Fri 13 Jan 2023 15:01",
          "username": "sakibmas",
          "content": "ALB =E2=80=94 Layer 7 (HTTP/HTTPS traffic), Flexible.<br>NLB =E2=80=94 Layer 4 (TLS/TCP/UDP traffic), Static IPs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 766522,
          "date": "Thu 05 Jan 2023 11:21",
          "username": "Ciph",
          "content": "A, please refer part-2 in below link.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/deployment-models-for-aws-network-firewall/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763257,
          "date": "Sun 01 Jan 2023 17:29",
          "username": "secdaddy",
          "content": "In support of B<br>TLS Termination for Network Load Balancers<br>https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 762295,
          "date": "Fri 30 Dec 2022 21:14",
          "username": "Teknoklutz",
          "content": "Network Firewall IPS feature",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760501,
          "date": "Thu 29 Dec 2022 03:06",
          "username": "Fyssy",
          "content": "Unlike a Classic Load Balancer or an Application Load Balancer, a Network Load Balancer can't have application layer (layer 7) HTTP or HTTPS listeners. It only supports transport layer (layer 4) TCP listeners. HTTP and HTTPS traffic can be routed to your environment over TCP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 754199,
          "date": "Fri 23 Dec 2022 13:40",
          "username": "ryogoku",
          "content": "It's traffic to web servers. Why ALB is not correct? Is there aws doc stating ALB does not support sending traffic to network firewall?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As of today, all the endpoint services could only be associated with either NLB or GWLB. That is the primary reason why ALB is out.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 763784,
          "date": "Mon 02 Jan 2023 15:31",
          "username": "TerrenceC",
          "content": "As of today, all the endpoint services could only be associated with either NLB or GWLB. That is the primary reason why ALB is out.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741910,
          "date": "Sun 11 Dec 2022 17:55",
          "username": "Balki",
          "content": "AWS Network Firewall's intrusion prevention system (IPS) provides active traffic flow inspection so you can identify and block vulnerability exploits using signature-based detection",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732450,
          "date": "Thu 01 Dec 2022 10:37",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#342",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security team is working on a solution that will use Amazon EventBridge (Amazon CloudWatch Events) to monitor new Amazon S3 objects. The solution will monitor for public access and for changes to any S3 bucket policy or setting that result in public access. The security team configures EventBridge to watch for specific API calls that are logged from AWS CloudTrail. EventBridge has an action to send an email notification through Amazon Simple Notification Service (Amazon SNS) to the security team immediately with details of the API call.<br><br>Specifically, the security team wants EventBridge to watch for the s3:PutObjectAcl, s3:DeleteBucketPolicy, and s3:PutBucketPolicy API invocation logs from CloudTrail. While developing the solution in a single account, the security team discovers that the s3:PutObjectAcl API call does not invoke an EventBridge event. However, the s3:DeleteBucketPolicy API call and the s3:PutBucketPolicy API call do invoke an event.<br><br>The security team has enabled CloudTrail for AWS management events with a basic configuration in the AWS Region in which EventBridge is being tested. Verification of the EventBridge event pattern indicates that the pattern is set up correctly. The security team must implement a solution so that the s3:PutObjectAcl API call will invoke an EventBridge event. The solution must not generate false notifications.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#342",
          "answers": [
            {
              "choice": "<p>Modify the EventBridge event pattern by selecting Amazon S3. Select All Events as the event type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the EventBridge event pattern by selecting Amazon S3. Select Bucket Level Operations as the event type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable CloudTrail Insights to identify unusual API activity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable CloudTrail to monitor data events for read and write operations to S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 342 discussion",
      "discusstion": [
        {
          "id": 722893,
          "date": "Sun 20 Nov 2022 19:53",
          "username": "AdamWest",
          "content": "D - Is correct you must use Data Events<br>https://docs.amazonaws.cn/en_us/eventbridge/latest/userguide/eb-log-s3-data-events.html",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913796,
          "date": "Sat 03 Jun 2023 18:20",
          "username": "Toptip",
          "content": "D... easy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 903610,
          "date": "Mon 22 May 2023 03:22",
          "username": "572f16d",
          "content": "D<br>You can also get CloudTrail logs for object-level Amazon S3 actions. To do this, enable data events for your S3 bucket or all buckets in your account. When an object-level action occurs in your account, CloudTrail evaluates your trail settings. If the event matches the object that you specified in a trail, the event is logged. For more information, see Enabling CloudTrail event logging for S3 buckets and objects and Logging Data Events for Trails in the AWS CloudTrail User Guide.<br><br>The following object-level API actions are logged as CloudTrail events:<br>....<br>PutObjectAcl<br>.....",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 890980,
          "date": "Sat 06 May 2023 21:51",
          "username": "ITGURU51",
          "content": "The solution that will meet the requirements is D. Enable CloudTrail to monitor data events for read and write operations to S3 buckets. This will allow the s3:PutObjectAcl API call to invoke an EventBridge event without generating false notifications.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 866225,
          "date": "Mon 10 Apr 2023 13:36",
          "username": "nairj",
          "content": "D : Enable Cloudtrail to monitor API call and set-up an EventBridge rule configuring the source and the target",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834034,
          "date": "Thu 09 Mar 2023 15:28",
          "username": "kujin",
          "content": "A - s3:DeleteBucketPolicy, and s3:PutBucketPolicy -> Bucket level action<br>s3:PutObjectAcl -> Object level action<br>https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html",
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
      "question_text": "<p>A company is running batch workloads that use containers on Amazon Elastic Container Service (Amazon ECS). The company needs a secure solution for storing API keys that are required for integration with external services. The company's security policy states that API keys must not be stored or transmitted in plaintext. The company's IT team currently rotates the API keys manually.<br><br>A security engineer must recommend a solution that meets the security requirements and automates the rotation of the API keys<br><br>Which solution should the security engineer recommend?</p>",
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
              "choice": "<p>Use a secure string parameter in AWS Systems Manager Parameter Store. Activate the feature for automatic rotation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 user data for storing the API keys. Set up a scheduled AWS Lambda function to automatically rotate the API keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Fargate to store the API keys. Set up a scheduled AWS Lambda function to automatically rotate the API keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Secrets Manager to store the API keys. Reference the API keys in the container definition.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 343 discussion",
      "discusstion": [
        {
          "id": 913799,
          "date": "Sat 03 Jun 2023 18:26",
          "username": "Toptip",
          "content": "only D makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 890981,
          "date": "Sat 06 May 2023 21:55",
          "username": "ITGURU51",
          "content": "Secrets manager enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. So the correct answer is D.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 738527,
          "date": "Thu 08 Dec 2022 03:05",
          "username": "maddyr",
          "content": "D as secrets mgr",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722898,
          "date": "Sun 20 Nov 2022 19:57",
          "username": "AdamWest",
          "content": "D - I don t know why rotation is not listed<br>To implement password rotation lifecycles, use AWS Secrets Manager. You can rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle using Secrets Manager",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722648,
          "date": "Sun 20 Nov 2022 14:43",
          "username": "sambda",
          "content": "My ans is D as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721442,
          "date": "Fri 18 Nov 2022 18:04",
          "username": "luisfsm",
          "content": "Think it's D. However, we don't see the rotation in the answer...<br><br>https://aws.amazon.com/blogs/compute/securing-credentials-using-aws-secrets-manager-with-aws-fargate/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#344",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys a set of standard IAM roles in AWS accounts. The IAM roles are based on job functions within the company. To balance operational efficiency and security, a security engineer implemented AWS Organizations SCPs to restrict access to critical security services in all company accounts.<br><br>All of the company's accounts and OUs within AWS Organizations have a default FullAWSAccess SCP that is attached. The security engineer needs to ensure that no one can disable Amazon GuardDuty and AWS Security Hub. The security engineer also must not override other permissions that are granted by IAM policies that are defined in the accounts.<br><br>Which SCP should the security engineer attach to the root of the organization to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#344",
          "answers": [
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image2.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image3.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image4.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image5.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 344 discussion",
      "discusstion": [
        {
          "id": 913800,
          "date": "Sat 03 Jun 2023 18:29",
          "username": "Toptip",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 890983,
          "date": "Sat 06 May 2023 22:01",
          "username": "ITGURU51",
          "content": "the NotAction element cannot be used in this case. The NotAction element is used to specify an exception to a list of actions. For example, you could use a NotAction element to allow all actions except for a specific set of actions. However, in this case, you want to explicitly deny access to specific actions that would disable Amazon GuardDuty and AWS Security Hub. A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 879826,
          "date": "Tue 25 Apr 2023 04:11",
          "username": "G4Exams",
          "content": "Definitely A. The \\\"NotAction\\\" in the other options is not correct here.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 803324,
          "date": "Thu 09 Feb 2023 15:33",
          "username": "milofficial",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734559,
          "date": "Sat 03 Dec 2022 17:20",
          "username": "Isaias",
          "content": "A for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732019,
          "date": "Wed 30 Nov 2022 22:54",
          "username": "landsamboni",
          "content": "A.<br>SCP can not Allow, only Deny<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It can, but it does not need it because it already has a DefaultFullAccess, so what we need is attach a explictdeny ,</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734558,
          "date": "Sat 03 Dec 2022 17:20",
          "username": "Isaias",
          "content": "It can, but it does not need it because it already has a DefaultFullAccess, so what we need is attach a explictdeny ,",
          "upvote_count": "9",
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
      "question_text": "<p>A security engineer is creating a new Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. The cluster will act as a data warehouse. A separate fleet of application servers will extract records from the data warehouse and will transform these records into reports that will be uploaded to Amazon S3 buckets.<br><br>The security engineer must securely configure the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster so that only the application servers can access it.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#345",
          "answers": [
            {
              "choice": "<p>Configure network ACLs on the subnets that host the Amazon OpenSearch Service (Amazon Elasticsearch Service) instances to allow access from the application servers only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPC peering connection between the VPC that contains the application servers and the VPC that contains the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Monitor the VPC flow logs for traffic that is destined for the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Use the flow logs to detect traffic that did not originate from the application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster for VPC access only. Use a security group to allow access to the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster from the application servers only.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 345 discussion",
      "discusstion": [
        {
          "id": 731179,
          "date": "Wed 30 Nov 2022 08:01",
          "username": "tainh",
          "content": "D<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913803,
          "date": "Sat 03 Jun 2023 18:33",
          "username": "Toptip",
          "content": "D security group",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 890989,
          "date": "Sat 06 May 2023 22:23",
          "username": "ITGURU51",
          "content": "Using a security group to control access to the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster provides more granular control and is considered a best practice for securing an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 803328,
          "date": "Thu 09 Feb 2023 15:34",
          "username": "milofficial",
          "content": "101% D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 762299,
          "date": "Fri 30 Dec 2022 21:21",
          "username": "Teknoklutz",
          "content": "Because others A/B/C does not make sense",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#346",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has implemented centralized logging and monitoring of AWS CloudTrail logs from all Regions in an Amazon S3 bucket. The log files are encrypted using AWS KMS. A security engineer is attempting to review the log files using a third-party tool hosted on an Amazon EC2 instance. The security engineer is unable to access the logs in the S3 bucket and receives an access denied error message.<br><br>What should the security engineer do to fix this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#346",
          "answers": [
            {
              "choice": "<p>Check that the role the security engineer uses grants permission to decrypt objects using the KMS CMK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check that the role the security engineer uses grants permission to decrypt objects using the KMS CMK and gives access to the S3 bucket and objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check that the role the EC2 instance profile uses grants permission to decrypt objects using the KMS CMK and gives access to the S3 bucket and objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Check that the role the EC2 instance profile uses grants permission to decrypt objects using the KMS CMK.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 346 discussion",
      "discusstion": [
        {
          "id": 732122,
          "date": "Thu 01 Dec 2022 01:34",
          "username": "Isaias",
          "content": "C<br>to grant permisssion to an application(tool) running in the instance you need to create a instance profile the contains the role for those permissions<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729264,
          "date": "Mon 28 Nov 2022 16:19",
          "username": "D2",
          "content": "Answer C<br><br>When security engineer is accessing objects in s3 from third party tool on s3, he/she is using instance profile",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 913809,
          "date": "Sat 03 Jun 2023 18:35",
          "username": "Toptip",
          "content": "C - EC2 instance profile uses grants permission to decrypt objects using the KMS CMK and gives access to the S3 bucket and objects.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 911288,
          "date": "Wed 31 May 2023 14:52",
          "username": "Tofu13",
          "content": "I guess C is fine, though strictly speaking it is not mandatory that the role gives access to the S3 bucket since a bucket policy would work as well. In that case D is as good or bad as C. Changing \\\"give\\\" access with \\\"has\\\" access and everything is fine. Multiple choice is really prone to these kind of problems...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 770013,
          "date": "Mon 09 Jan 2023 04:48",
          "username": "Leonardocp33",
          "content": "For me is C, It makes sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735336,
          "date": "Sun 04 Dec 2022 19:15",
          "username": "Teknoklutz",
          "content": "Answer C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 731200,
          "date": "Wed 30 Nov 2022 08:29",
          "username": "tainh",
          "content": "C<br>attach instance profile with role ( Decrypt KMS and access S3 )",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722910,
          "date": "Sun 20 Nov 2022 20:05",
          "username": "AdamWest",
          "content": "B -<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-default-encryption/<br>https://blog.skeddly.com/2016/06/giving-aws-credentials-to-third-party-services.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It should be C. As long as the User can access EC2, it is fine</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741914,
          "date": "Sun 11 Dec 2022 18:03",
          "username": "Balki",
          "content": "It should be C. As long as the User can access EC2, it is fine",
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
      "question_text": "<p>A company needs a cloud-based, managed desktop solution for its workforce of remote employees. The company wants to ensure that the employees can access the desktops only by using company-provided devices. A security engineer must design a solution that will minimize cost and management overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#347",
          "answers": [
            {
              "choice": "<p>Deploy a custom virtual desktop infrastructure (VDI) solution with a restriction policy to allow access only from corporate devices.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a fleet of Amazon EC2 instances. Assign an instance to each employee with certificate-based device authentication that uses Windows Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon WorkSpaces. Set up a trusted device policy with IP blocking on the authentication gateway by using AWS Identity and Access Management (IAM).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon WorkSpaces. Create client certificates, and deploy them to trusted devices. Enable restricted access at the directory level.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 347 discussion",
      "discusstion": [
        {
          "id": 722911,
          "date": "Sun 20 Nov 2022 20:07",
          "username": "AdamWest",
          "content": "D - Best practices relates to client Certs. https://docs.aws.amazon.com/whitepapers/latest/best-practices-deploying-amazon-workspaces/security.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/whitepapers/latest/best-practices-deploying-amazon-workspaces/security.html#:~:textAccess%20control%20options%20and%20trusted%20devices</li><li>you can restrict WorkSpaces access to trusted devices with valid certificates. When you enable this feature, WorkSpaces uses certificate-based authentication to determine whether a device is trusted. If the WorkSpaces client application can't verify that a device is trusted, it blocks attempts to log in or reconnect from the device.</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 834255,
          "date": "Thu 09 Mar 2023 19:09",
          "username": "kujin",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/best-practices-deploying-amazon-workspaces/security.html#:~:textAccess%20control%20options%20and%20trusted%20devices",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 891550,
          "date": "Sun 07 May 2023 18:30",
          "username": "ITGURU51",
          "content": "you can restrict WorkSpaces access to trusted devices with valid certificates. When you enable this feature, WorkSpaces uses certificate-based authentication to determine whether a device is trusted. If the WorkSpaces client application can't verify that a device is trusted, it blocks attempts to log in or reconnect from the device.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 913814,
          "date": "Sat 03 Jun 2023 18:39",
          "username": "Toptip",
          "content": "D .. Restrict WorkSpaces access to trusted devices",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 857945,
          "date": "Sat 01 Apr 2023 15:25",
          "username": "dan80",
          "content": "https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729267,
          "date": "Mon 28 Nov 2022 16:22",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#348",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer logs in to the AWS Lambda console with administrator permissions. The security engineer is trying to view logs in Amazon CloudWatch for a Lambda function that is named my Function.<br>When the security engineer chooses the option in the Lambda console to view logs in CloudWatch, an 'error loading Log Streams\" message appears.<br><br>The IAM policy for the Lambda function's execution role contains the following:<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image6.png\"&gt;<br><br>How should the security engineer correct the error?</p>",
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
              "choice": "<p>Move the logs:CreateLogGroup action to the second Allow statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the logs:PutDestination action to the second Allow statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the logs:GetLogEvents action to the second Allow statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the logs:CreateLogStream action to the second Allow statement.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 348 discussion",
      "discusstion": [
        {
          "id": 732054,
          "date": "Wed 30 Nov 2022 23:24",
          "username": "landsamboni",
          "content": "D. Is the answer. Just deployed a new Lambda and checked its policy for Cloudwatch. CreateLogStream is the one missing in the answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CloudWatchLogsReadOnlyAccess doesn't include \\\"logs:CreateLogStream\\\" but it includes \\\"logs:Get*\\\"<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html#:~:textoam%3A*%3A*%3Asink/*%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D-,CloudWatchLogsReadOnlyAccess,-The%20CloudWatchLogsReadOnlyAccess%20policy</li><li>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html#:~:textoam%3A*%3A*%3Asink/*%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D-,CloudWatchLogsReadOnlyAccess</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 834266,
          "date": "Thu 09 Mar 2023 19:30",
          "username": "kujin",
          "content": "CloudWatchLogsReadOnlyAccess doesn't include \\\"logs:CreateLogStream\\\" but it includes \\\"logs:Get*\\\"<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html#:~:textoam%3A*%3A*%3Asink/*%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D-,CloudWatchLogsReadOnlyAccess,-The%20CloudWatchLogsReadOnlyAccess%20policy<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html#:~:textoam%3A*%3A*%3Asink/*%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D-,CloudWatchLogsReadOnlyAccess</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834269,
          "date": "Thu 09 Mar 2023 19:35",
          "username": "kujin",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html#:~:textoam%3A*%3A*%3Asink/*%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D-,CloudWatchLogsReadOnlyAccess",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1050282,
          "date": "Sun 22 Oct 2023 08:49",
          "username": "M2ao",
          "content": "https://www.examtopics.com/discussions/amazon/view/88116-exam-aws-certified-security-specialty-topic-1-question-348/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 913818,
          "date": "Sat 03 Jun 2023 18:41",
          "username": "Toptip",
          "content": "D correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774620,
          "date": "Fri 13 Jan 2023 16:22",
          "username": "sakibmas",
          "content": "Get* permission should be enough to view logs<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it will provide you to list the logs , not to view them - https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html D is the Answer</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 858039,
          "date": "Sat 01 Apr 2023 17:09",
          "username": "dan80",
          "content": "it will provide you to list the logs , not to view them - https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html D is the Answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755836,
          "date": "Sun 25 Dec 2022 17:55",
          "username": "Subs2021",
          "content": "100% : Ans : D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732051,
          "date": "Wed 30 Nov 2022 23:23",
          "username": "landsamboni",
          "content": "Ans: D.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729284,
          "date": "Mon 28 Nov 2022 16:24",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722912,
          "date": "Sun 20 Nov 2022 20:09",
          "username": "AdamWest",
          "content": "D<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#349",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Certificate Manager (ACM) to automate the renewal of SSL/TLS certificates that the company's Elastic Load Balancers use. The company recently noticed that ACM was unable to automatically renew some certificates. These certificates have a status of \"pending validation'  in the ACM console.<br><br>A security engineer configured the certificates by using DNS validation. The security engineer has verified that the existing certificates have not expired.<br><br>What should the security engineer do to correct this issue?</p>",
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
              "choice": "<p>Manually validate ownership of each domain in the ACM console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the DNS CNAME for each domain matches the ACM certificate CNAME record.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Export and then reimport the certificates into ACM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Validate the ownership of each domain by using email validation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 349 discussion",
      "discusstion": [
        {
          "id": 722913,
          "date": "Sun 20 Nov 2022 20:10",
          "username": "AdamWest",
          "content": "B<br>https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-pending-validation/",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913823,
          "date": "Sat 03 Jun 2023 18:47",
          "username": "Toptip",
          "content": "B 100% correct<br>DNS validationCNAME",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 800580,
          "date": "Tue 07 Feb 2023 06:36",
          "username": "Smartphone",
          "content": "If your certificate is in the Pending validation state, then confirm that the CNAME record provided by ACM was added to the correct DNS configuration. To determine the DNS configuration to add the CNAME record, run a command similar to the following:<br>https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-pending-validation/<br><br>If the ACM certificate request status is Pending validation, the request is waiting for action from you. If you chose email validation when you made the request, you or an authorized representative must respond to the validation email messages.<br>https://docs.aws.amazon.com/acm/latest/userguide/certificate-validation.html<br><br>D appears the correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 755852,
          "date": "Sun 25 Dec 2022 18:10",
          "username": "Subs2021",
          "content": "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#350",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is developing automation that uses an AWS Lambda function to add tags to non-compliant IAM users and IAM roles. During testing, the function fails to perform the tagging action. When the security engineer attempts to look at the associated Amazon CloudWatch log group, no logs are being generated. After additional troubleshooting, the security engineer determines that the issue is related to the associated Lambda execution role.<br><br>Which statement should the security engineer add to the Lambda execution role to ensure functionality while following the principle of least privilege?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#350",
          "answers": [
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image7.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image8.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image9.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image10.png\"><br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 350 discussion",
      "discusstion": [
        {
          "id": 745900,
          "date": "Thu 15 Dec 2022 10:53",
          "username": "minori",
          "content": "D.<br> aws:PrincipalArn use following:<br>IAM role<br>IAM user<br>AWS STS federated user session<br>AWS account root user<br>and lambda arn is not in it.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 746451,
          "date": "Thu 15 Dec 2022 20:18",
          "username": "Un1c0rn",
          "content": "D-It should be SourceARN not PrincipalARN<br>Use SourceARN to compare the (ARN) of the resource making a \\\"service-to-service\\\" request with the ARN that you specify in the policy.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#:~:textaws%3ASourceArn,ARN%20that%20you%20specify%20in%20the%20policy.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#:~:textyou%20are%20using.-,aws%3ASourceArn,-Works%20with%20ARN</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 834404,
          "date": "Thu 09 Mar 2023 22:01",
          "username": "kujin",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#:~:textyou%20are%20using.-,aws%3ASourceArn,-Works%20with%20ARN",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913472,
          "date": "Sat 03 Jun 2023 13:06",
          "username": "6_8ftwin",
          "content": "D<br>CalledVia is used to specify a service, not a specific ARN. Also, Lambda is not included as one of these services.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774624,
          "date": "Fri 13 Jan 2023 16:32",
          "username": "sakibmas",
          "content": "B - wrong condition - CalledVia<br>C-wrong permission - CreateLog",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 770269,
          "date": "Mon 09 Jan 2023 12:10",
          "username": "secdaddy",
          "content": "I struggle with SourceArn vs PrincipalArn<br>Looking at this a different way though, I note that tagging doesn't work and that of the four policies, none of the tag related Actions change so it follows that the problem isn't the Actions but some other part of the policy.The only part of the policy that changes, between the four options and not looking at Actions, is the PrincipalArn vs SourceArn condition.<br>So I guess D on this basis",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755860,
          "date": "Sun 25 Dec 2022 18:27",
          "username": "Subs2021",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 742781,
          "date": "Mon 12 Dec 2022 13:36",
          "username": "john99291",
          "content": "So it might be A, but why not C? It's least privilege than A.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741799,
          "date": "Sun 11 Dec 2022 15:51",
          "username": "Phongsanth",
          "content": "A good for me<br>B Use Via service<br>C not enough permission as others<br>D Use SourceArn<br><br>Refer to this wording.<br>Use this key to compare the Amazon Resource Name (ARN) of the resource making a service-to-service request with the ARN that you specify in the policy.<br><br>This key does not work with the ARN of the principal making the request. Instead, use aws:PrincipalArn. The source's ARN includes the account ID, so it is not necessary to use aws:SourceAccount with aws:SourceArn.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 739629,
          "date": "Fri 09 Dec 2022 01:41",
          "username": "AdamWest",
          "content": "D - Is the answer<br>In the answer B it uses the Calledvia which relates to Athena context Key - not execution<br>https://docs.aws.amazon.com/athena/latest/ug/security-iam-athena-calledvia.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732125,
          "date": "Thu 01 Dec 2022 01:52",
          "username": "landsamboni",
          "content": "Answer: D.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WHy not B ?</li><li>B - wrong condition - CalledVia</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 735341,
          "date": "Sun 04 Dec 2022 19:19",
          "username": "Teknoklutz",
          "content": "WHy not B ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B - wrong condition - CalledVia</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 800591,
          "date": "Tue 07 Feb 2023 06:51",
          "username": "Smartphone",
          "content": "B - wrong condition - CalledVia",
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
      "question_text": "<p>A company provides an AWS account for each of its teams. Members of each team authenticate with AWS by using user accounts in their own team's account.<br><br>The company created a project-specific AWS account for collaboration by three or more teams. The company also created a new Amazon S3 bucket inside this new account. There is no S3 bucket policy or S3 ACL. A security engineer must implement a secure solution so that all teams can read objects and write to objects that are stored in the S3 bucket.<br><br>What should the security engineer do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#351",
          "answers": [
            {
              "choice": "<p>In the same AWS account where the S3 bucket resides, update the bucket's ACL to include the canonical user ID of the teams' AWS accounts. Teams will specify the account number of the AWS account where the bucket is located when they read objects and write to objects in the bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the same AWS account where the S3 bucket resides, create an IAM role that has appropriate permissions for the bucket. Include a trust policy that specifies the teams' AWS accounts as the principals. Teams will assume the role when they read objects and write to objects in the bucket<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the same AWS account where the S3 bucket resides, add a bucket policy to allow all the teams to read objects and write to objects in the bucket. Teams will specify the account number of the AWS account where the bucket is located when they read objects and write to objects in the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the same AWS account where the S3 bucket resides, create an IAM user, an IAM group, and access keys for each team. Each team will share its access keys when the team reads objects and writes to objects in the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 351 discussion",
      "discusstion": [
        {
          "id": 722950,
          "date": "Sun 20 Nov 2022 20:49",
          "username": "AdamWest",
          "content": "B<br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>' By assuming an IAM role in Account A, the Amazon S3 operation is determined by the access policy. The IAM role is deemed as an API call made by a local IAM entity in Account A. A bucket policy or an ACL for cross-account access isn't required. ' </li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753658,
          "date": "Thu 22 Dec 2022 22:39",
          "username": "Wilson_S",
          "content": "' By assuming an IAM role in Account A, the Amazon S3 operation is determined by the access policy. The IAM role is deemed as an API call made by a local IAM entity in Account A. A bucket policy or an ACL for cross-account access isn't required. ' ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 742602,
          "date": "Mon 12 Dec 2022 10:27",
          "username": "tryks",
          "content": "Answer C https://beabetterdev.com/2022/03/15/s3-bucket-policy-vs-iam/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914151,
          "date": "Sun 04 Jun 2023 07:19",
          "username": "Toptip",
          "content": "B is correct.<br>C is a trap.. it says: \\\"Teams will specify the account number of the AWS account where the bucket is located \\\" which doesn't make sense at all...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913481,
          "date": "Sat 03 Jun 2023 13:17",
          "username": "6_8ftwin",
          "content": "B<br>bucket names use a global namespace",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 891598,
          "date": "Sun 07 May 2023 19:25",
          "username": "ITGURU51",
          "content": "This solution allows all teams to read and write objects in the S3 bucket securely by assuming a role with appropriate permissions. The trust policy ensures that only the specified teams' AWS accounts can assume the role. This is a secure and scalable solution for cross-account access to an S3 bucket. B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 866714,
          "date": "Tue 11 Apr 2023 02:16",
          "username": "nairj",
          "content": "Answer is B:<br>Delegate access across AWS account using Cross Account access - https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html<br>C is not correct since the answer says users pass on the account number while accessing the bucket?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 838145,
          "date": "Mon 13 Mar 2023 19:14",
          "username": "Mickey321",
          "content": "Why B is correct. It says IAM role is created in same AWS account which has S3. IAM role should be created in other teams role.. What I am missing?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775145,
          "date": "Sat 14 Jan 2023 07:38",
          "username": "sakibmas",
          "content": "Easy cross-account management is the best reason to use bucket policies over IAM. However, C could NOT be the answer as it is not possible to specify the account number while reading or writing objects.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 773284,
          "date": "Thu 12 Jan 2023 09:51",
          "username": "Smartphone",
          "content": "C could NOT be the answer.<br>In the option it is mentioned...\\\"specify the account number of the AWS account where the bucket is located when they read objects and write to objects in the bucket\\\"<br>How account number can be mentioned in the CLI while reading and writing the object. The cross account access would be possible by configuring new profile.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is a correct Answer.<br>1. Create a trust relation by creating a role in the account by specifying the Account ID<br>2. Assume the role while accessing the object and bucket contents.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 773298,
          "date": "Thu 12 Jan 2023 10:14",
          "username": "Smartphone",
          "content": "B is a correct Answer.<br>1. Create a trust relation by creating a role in the account by specifying the Account ID<br>2. Assume the role while accessing the object and bucket contents.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 769312,
          "date": "Sun 08 Jan 2023 12:06",
          "username": "AssilAbdulrahim",
          "content": "The Answer is C.<br>This is a typical cross account access. where you need 2 things:<br>1.Create an S3 bucket resource policy in the Account where S3 is created<br>2.Create an IAM role or user in Accounts of the teams seeking access.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747438,
          "date": "Fri 16 Dec 2022 18:03",
          "username": "aj2aj2",
          "content": "C - Agreed -If you have a certain S3 bucket that is going to be used throughout an organization or group of teams, it makes more sense to control permission on the bucket level.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729026,
          "date": "Mon 28 Nov 2022 12:26",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#352",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a guideline that mandates the encryption of all Amazon S3 bucket data in transit. A security engineer must implement an S3 bucket policy that denies any S3 operations if data is not encrypted.<br><br>Which S3 bucket policy will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#352",
          "answers": [
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image11.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image12.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image13.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image14.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 352 discussion",
      "discusstion": [
        {
          "id": 724845,
          "date": "Wed 23 Nov 2022 03:55",
          "username": "Shriraj32",
          "content": "I believe it's B. It's talking about transit.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 934151,
          "date": "Mon 26 Jun 2023 09:10",
          "username": "Green53",
          "content": "Badly worded question:<br>\\\"denies any S3 operations if data is not encrypted.\\\"<br><br>In Transit? At rest? Going by the \\\"Sid\\\" of each policy, I'd say transit.<br><br>A - This will deny is it's using encryption during transit, so wrong<br>B - Looks good<br>C / D - Both discussing encryption at rest.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914155,
          "date": "Sun 04 Jun 2023 07:21",
          "username": "Toptip",
          "content": "B - in simple words: Deny the request if the SecureTransport is FALSE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 879829,
          "date": "Tue 25 Apr 2023 04:22",
          "username": "G4Exams",
          "content": "B. It must be denied if SecureTransport:false.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 764531,
          "date": "Tue 03 Jan 2023 12:26",
          "username": "jishrajesh",
          "content": "Selected B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755884,
          "date": "Sun 25 Dec 2022 19:00",
          "username": "Subs2021",
          "content": "Why does the answer say C when its Clearly B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754698,
          "date": "Sat 24 Dec 2022 05:53",
          "username": "Kevin24",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732139,
          "date": "Thu 01 Dec 2022 02:20",
          "username": "tainh",
          "content": "B<br>https://aws.amazon.com/blogs/security/how-to-use-bucket-policies-and-apply-defense-in-depth-to-help-secure-your-amazon-s3-data/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 726314,
          "date": "Fri 25 Nov 2022 02:22",
          "username": "AdamWest",
          "content": "B -Is the answer. Another double negative for a positive.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#353",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's security engineer is investigating an Amazon GuardDuty finding for unusual activity for an IAM role. The AWS account has AWS Single Sign-On configured with federation with the company's on-premises Active Directory domain controller. The security engineer determines that the root cause of the finding is a compromised Active Directory identity on premises. Multiple production workloads are using the IAM role on AWS.<br><br>The security engineer must mitigate the unauthorized use of the IAM role while minimizing production workload downtime on AWS.<br><br>Which combination of actions should the security engineer take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#353",
          "answers": [
            {
              "choice": "<p>Inactivate the IAM role's access key. Issue a new IAM access key,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Revoke access for the identity in the on-premises Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach an IAM policy to the IAM role to deny all access to any AWS Security Token Service (AWS STS) tokens that were issued prior to the current time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach an IAM policy to the IAM role to deny access to the federated Active Directory identity's ARN.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the IAM role's login profile to restrict use of the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 353 discussion",
      "discusstion": [
        {
          "id": 732173,
          "date": "Thu 01 Dec 2022 03:18",
          "username": "landsamboni",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 914156,
          "date": "Sun 04 Jun 2023 07:24",
          "username": "Toptip",
          "content": "B,C are correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 891641,
          "date": "Sun 07 May 2023 20:56",
          "username": "ITGURU51",
          "content": "The best practice would be to disable the compromised user account in Active Directory. This enables that the compromised account will not have access to federated or shared resources in AWS. Next we need to prevent the compromised account from being able to access the AWS security tokens service. We can reduce the attack surface and prevent the possibility of lateral movement by restricting access to the AWS Security Token Service. This is because STS is typically used for identify federation andcross account access. BC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This ensures, I meant.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 891642,
          "date": "Sun 07 May 2023 20:57",
          "username": "ITGURU51",
          "content": "This ensures, I meant.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 866719,
          "date": "Tue 11 Apr 2023 02:27",
          "username": "nairj",
          "content": "Answer is B and C<br>A, D, and E just doesn't make sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 773356,
          "date": "Thu 12 Jan 2023 11:40",
          "username": "Smartphone",
          "content": "B and C seem correct answer.<br>AWS STS security tokens are typically used for identity federation, providing cross-account access and for resources related to EC2 instances that require access by other applications. So, C will not block the access of applications that are configured with role to access other AWS services.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 768119,
          "date": "Fri 06 Jan 2023 23:27",
          "username": "awsec2",
          "content": "The correct actions are B and C.<br><br>To mitigate the unauthorized use of the IAM role while minimizing production workload downtime, the security engineer should take the following actions:<br><br>Revoke access for the identity in the on-premises Active Directory: This will prevent the compromised identity from being able to use the IAM role on AWS.<br><br>Attach an IAM policy to the IAM role to deny all access to any AWS Security Token Service (AWS STS) tokens that were issued prior to the current time: This will prevent the compromised identity from being able to use the IAM role on AWS by invalidating any previously issued AWS STS tokens. This will minimize downtime because the policy will only affect the compromised identity, rather than all users of the IAM role.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 757614,
          "date": "Mon 26 Dec 2022 16:46",
          "username": "Pabzzzz",
          "content": "Option C will block all STS to the ROLE not identity - remember production workloads are using the role. so only the STS tokens for the identity need to be disabled. so BC are correct not BD<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you mean B,D your explanation is for B,D</li><li>Example Policy:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": {<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"*\\\",<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\": {\\\"DateLessThan\\\": {\\\"aws:TokenIssueTime\\\": \\\"2014-05-07T23:47:00Z\\\"}}<br>}<br>}</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760858,
          "date": "Thu 29 Dec 2022 11:09",
          "username": "Alvindo",
          "content": "you mean B,D your explanation is for B,D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766231,
          "date": "Thu 05 Jan 2023 04:51",
          "username": "Wilson_S",
          "content": "Example Policy:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": {<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"*\\\",<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\": {\\\"DateLessThan\\\": {\\\"aws:TokenIssueTime\\\": \\\"2014-05-07T23:47:00Z\\\"}}<br>}<br>}",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 755886,
          "date": "Sun 25 Dec 2022 19:03",
          "username": "Subs2021",
          "content": "100%. B & C.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@Subs2021 Can you please justify?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757196,
          "date": "Mon 26 Dec 2022 09:02",
          "username": "KarthikRaveRaam",
          "content": "@Subs2021 Can you please justify?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 738642,
          "date": "Thu 08 Dec 2022 06:29",
          "username": "maddyr",
          "content": "sorry BC is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 738640,
          "date": "Thu 08 Dec 2022 06:27",
          "username": "maddyr",
          "content": "BD for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#354",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's policies require that code be validated to ensure that the code has not been altered before invocation. A security engineer needs to update code in an AWS Lambda function. The developer has finalized the code and has stored the code in an Amazon S3 bucket.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#354",
          "answers": [
            {
              "choice": "<p>Deploy the new code in a zip file to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Invoke a signing job by using AWS Signer. Deploy the new signed code to the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Key Management Service (AWS KMS) to encrypt the code.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Analyze the code with Amazon CodeGuru.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store all passwords in AWS Secrets Manager.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 354 discussion",
      "discusstion": [
        {
          "id": 755891,
          "date": "Sun 25 Dec 2022 19:09",
          "username": "Subs2021",
          "content": "Check this<br><br>https://aws.amazon.com/blogs/security/best-practices-and-advanced-patterns-for-lambda-code-signing/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I am going to go with AB as I can't find any documentation online that shows AWS Signer integration with AWS KMS. Thanks for the link above!</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 761417,
          "date": "Thu 29 Dec 2022 20:35",
          "username": "Wilson_S",
          "content": "I am going to go with AB as I can't find any documentation online that shows AWS Signer integration with AWS KMS. Thanks for the link above!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754273,
          "date": "Fri 23 Dec 2022 15:01",
          "username": "ryogoku",
          "content": "Signer works on zip files. No need to encrypt the code, therefore I believe C is incorrect.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1020204,
          "date": "Thu 28 Sep 2023 21:54",
          "username": "Olawale100",
          "content": "A -> Create and Zip fileand<br>B -> AWS Signer<br><br>The two tasks works.<br><br>C -> while valid does not seem to supported by any AWS documentation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 940640,
          "date": "Sun 02 Jul 2023 10:11",
          "username": "TECHNOWARRIOR",
          "content": "AWS Signer can be used to sign the zipped Lambda function, which will encrypt the code package and add a signature to it. This signature can then be used by Lambda to verify the integrity of the code package when it is deployed.<br><br> Option C cannot be the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 926370,
          "date": "Sun 18 Jun 2023 03:20",
          "username": "Samcert",
          "content": "https://aws.amazon.com/blogs/security/best-practices-and-advanced-patterns-for-lambda-code-signing/#:~:textcode%20analysis%20controls.-,Basic%20pattern%3A,-Figure%202%20shows<br><br>\\\"The basic code signing pattern uses AWS Signer on a ZIP file and calls a create API to install the signed artifact in Lambda.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 914157,
          "date": "Sun 04 Jun 2023 07:28",
          "username": "Toptip",
          "content": "A+B easy one..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 842101,
          "date": "Fri 17 Mar 2023 16:31",
          "username": "c73bf38",
          "content": "Need to validate that the code has not been altered before invocation, thereforeA and B are the correct choices.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 773483,
          "date": "Thu 12 Jan 2023 14:37",
          "username": "Smartphone",
          "content": "Current Answer is AB.<br>Upload the lambda code in a zipped format to S3 bucket is one of the requirement for Lambda code signing.<br>Encryption is not an requirement for code signing. So 'C' could not be the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764535,
          "date": "Tue 03 Jan 2023 12:28",
          "username": "jishrajesh",
          "content": "Selected BC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 762604,
          "date": "Sat 31 Dec 2022 11:34",
          "username": "Teknoklutz",
          "content": "https://aws.amazon.com/blogs/security/best-practices-and-advanced-patterns-for-lambda-code-signing/<br><br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 757624,
          "date": "Mon 26 Dec 2022 16:57",
          "username": "Pabzzzz",
          "content": "AB - signer needs a zipline plus there is no ask to encrypt",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 738652,
          "date": "Thu 08 Dec 2022 06:36",
          "username": "maddyr",
          "content": "B : code signing for authenticity and integrity<br>C : kms - symmetric/HMAC for verifying integrity",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 732174,
          "date": "Thu 01 Dec 2022 03:21",
          "username": "landsamboni",
          "content": "BC agree",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 727705,
          "date": "Sat 26 Nov 2022 18:14",
          "username": "AdamWest",
          "content": "BC -<br>To verify code integrity, use AWS Signer to create digitally signed code packages for functions and layers. When a user attempts to deploy a code package, Lambda performs validation checks on the code package before accepting the deployment. Because code signing validation checks run at deployment time, there is no performance impact on function execution.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html<br>and Encrypt - With a KMS key to sign and verify.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#355",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts in an organization in AWS Organizations. The company is operating its business only in the United States (US) and stores sensitive information in Amazon S3 buckets. Because of the sensitivity of the data, the company wants to block access to S3 buckets that are located in AWS Regions outside the US.<br><br>Which SCP should a security engineer use to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#355",
          "answers": [
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image15.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image16.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image17.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image18.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 355 discussion",
      "discusstion": [
        {
          "id": 726324,
          "date": "Fri 25 Nov 2022 02:33",
          "username": "AdamWest",
          "content": "B - This exam loves the double negatives.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914158,
          "date": "Sun 04 Jun 2023 07:32",
          "username": "Toptip",
          "content": "B is the correct answer... took me a while to figure out the A has \\\"NotAction\\\" which is wrong ... though A and B are 100% the same lol",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 893135,
          "date": "Tue 09 May 2023 15:43",
          "username": "Fatoch",
          "content": "I think it's D. Because you should allow S3. S3 should be Allow<br>B says that Deny S3 and All US regions.That's why its wrong answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842102,
          "date": "Fri 17 Mar 2023 16:35",
          "username": "c73bf38",
          "content": "Effect, Action, and StringNotLike",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793499,
          "date": "Tue 31 Jan 2023 01:30",
          "username": "Chiquitabandita",
          "content": "never mind I found the difference between A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793498,
          "date": "Tue 31 Jan 2023 01:29",
          "username": "Chiquitabandita",
          "content": "what is the difference between A or B, they look the same.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755897,
          "date": "Sun 25 Dec 2022 19:14",
          "username": "Subs2021",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 755122,
          "date": "Sat 24 Dec 2022 21:21",
          "username": "ryogoku",
          "content": "Vote B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751409,
          "date": "Tue 20 Dec 2022 20:45",
          "username": "AWS_SJ",
          "content": "What is the different between A and B?<br>Both looks same,am I missng something?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"NotAction\\\" vs \\\"Action\\\"</li><li>NotAction<br>Action</li><li>Took me a minute too! A contains: ' \\\"NotAction\\\"<br>\\\"s3: *\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753456,
          "date": "Thu 22 Dec 2022 16:59",
          "username": "aj2aj2",
          "content": "\\\"NotAction\\\" vs \\\"Action\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753717,
          "date": "Thu 22 Dec 2022 23:50",
          "username": "Teknoklutz",
          "content": "NotAction<br>Action",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753766,
          "date": "Fri 23 Dec 2022 01:24",
          "username": "Wilson_S",
          "content": "Took me a minute too! A contains: ' \\\"NotAction\\\"<br>\\\"s3: *\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741291,
          "date": "Sat 10 Dec 2022 23:58",
          "username": "BK__",
          "content": "D is the correct answer. Do not follow the popular choice but this official AWS doc https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Good find on the article, howeverit states - \\\"The NotAction element enables you to list services whose operations (or individual operations) are exempted from this restriction. \\\" so because s3 is not being exempt, the answer is B.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 759265,
          "date": "Wed 28 Dec 2022 03:00",
          "username": "mcitarella87",
          "content": "Good find on the article, howeverit states - \\\"The NotAction element enables you to list services whose operations (or individual operations) are exempted from this restriction. \\\" so because s3 is not being exempt, the answer is B.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729092,
          "date": "Mon 28 Nov 2022 13:45",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724848,
          "date": "Wed 23 Nov 2022 04:01",
          "username": "Shriraj32",
          "content": "Going for B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#356",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently had a security audit in which the auditors identified multiple potential threats. These potential threats can cause usage pattern changes such as DNS access peak, abnormal instance traffic, abnormal network interface traffic, and unusual Amazon S3 API calls. The threats can come from different sources and can occur at any time. The company needs to implement a solution to continuously monitor its system and identify all these incoming threats in near-real time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#356",
          "answers": [
            {
              "choice": "<p>Enable AWS CloudTrail logs, VPC flow logs, and DNS logs. Use Amazon CloudWatch Logs to manage these logs from a centralized account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS CloudTrail logs, VPC flow logs, and DNS logs. Use Amazon Macie to monitor these logs from a centralized account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon GuardDuty from a centralized account. Use GuardDuty to manage AWS CloudTrail logs, VPC flow logs, and DNS logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon Inspector from a centralized account. Use Amazon Inspector to manage AWS CloudTrail logs, VPC flow logs, and DNS logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 356 discussion",
      "discusstion": [
        {
          "id": 732316,
          "date": "Thu 01 Dec 2022 07:08",
          "username": "tainh",
          "content": "C<br>Q: Which data sources does GuardDuty analyze?<br><br>GuardDuty analyzes CloudTrail management event logs, CloudTrail S3 data event logs, VPC Flow Logs, DNS query logs, and Amazon EKS audit logs. GuardDuty can also scan EBS volume data for possible malware when GuardDuty Malware Protection is enabled and identifies suspicious behavior indicative of malicious software in EC2 instance or container workloads. The service is optimized to consume large data volumes for near real-time processing of security detections. GuardDuty gives you access to built-in detection techniques developed and optimized for the cloud, which are maintained and continuously improved upon by GuardDuty engineering.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Spot on. Also, as referenced in the question 'for near real-time processing of security detections.' </li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 753770,
          "date": "Fri 23 Dec 2022 01:32",
          "username": "Wilson_S",
          "content": "Spot on. Also, as referenced in the question 'for near real-time processing of security detections.' ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 934144,
          "date": "Mon 26 Jun 2023 09:02",
          "username": "Green53",
          "content": "You know we need DNS, VPC and CloudTrail logs.<br>We need continuous near real-time monitoring .<br>A - Not real time<br>B - This isn't what Macie is used for<br>C - GuardDuty enables these resources by default, sounds good!<br>D - Inspector is for EC2 vulnerabilities, it won't process these logs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914160,
          "date": "Sun 04 Jun 2023 07:35",
          "username": "Toptip",
          "content": "GuardDuty can analyze VPC/DNS/EKS/CloudTrail logs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 891653,
          "date": "Sun 07 May 2023 21:24",
          "username": "ITGURU51",
          "content": "GuardDuty analyzes threats in near real time and is easy to configure. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 764537,
          "date": "Tue 03 Jan 2023 12:29",
          "username": "jishrajesh",
          "content": "selected C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755899,
          "date": "Sun 25 Dec 2022 19:17",
          "username": "Subs2021",
          "content": "C is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729103,
          "date": "Mon 28 Nov 2022 13:56",
          "username": "D2",
          "content": "Answer C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726327,
          "date": "Fri 25 Nov 2022 02:35",
          "username": "AdamWest",
          "content": "Agree - C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724929,
          "date": "Wed 23 Nov 2022 07:16",
          "username": "Shriraj32",
          "content": "C from elimination.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#357",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security audit reveals that several Amazon Elastic Block Store (Amazon EBS) volumes in a company's production account are not encrypted. The unencrypted EBS volumes are attached to Amazon EC2 instances that are provisioned with an Auto Scaling group and a launch template.<br><br>A security engineer must implement a solution to ensure that all EBS volumes are encrypted now and in the future.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Update the launch template by setting the Encrypted flag for all EBS volumes to true, Use the Auto Scaling group's instance refresh feature to replace existing instances with new instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new launch template from the old launch template. Set the Encrypted flag for all EBS volumes to true. Update the Auto Scaling group to use the new version of the launch template. Wait for the Auto Scaling group to replace all the old instances that have unencrypted EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon EC2 console to enable encryption of new EBS volumes by default for each AWS Region that the company uses. Use the Auto Scaling group's instance refresh feature to replace existing instances with new instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon EC2 console to enable encryption of new EBS volumes by default for each AWS Region that the company uses. Update this setting so that Auto Scaling groups will automatically replace existing instances with new instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 357 discussion",
      "discusstion": [
        {
          "id": 753981,
          "date": "Fri 23 Dec 2022 08:43",
          "username": "sse69",
          "content": "C<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html<br>https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/<br>Turning on encryption by default doesn't change any existing unencrypted or encrypted resources. It encrypts only volumes and snapshot copies that you create after turning on default encryption.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1108386,
          "date": "Fri 29 Dec 2023 07:56",
          "username": "yorkicurke",
          "content": "enabling encryption by default in the EC2 console does not apply to existing EBS volumes. It only applies to new EBS volumes that are created after the setting is enabled.<br>And in question it was specifically asked 'Now'. so",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1009388,
          "date": "Sun 17 Sep 2023 01:02",
          "username": "Shenannigan",
          "content": "based on the statement: \\\"A security engineer must implement a solution to ensure that all EBS volumes are encrypted now and in the future\\\" I am picking C as other volumes could be spun up outside of the ASG that were un-encrypted and B only addresses the ASG.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929339,
          "date": "Wed 21 Jun 2023 12:33",
          "username": "vherman",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929021,
          "date": "Wed 21 Jun 2023 05:49",
          "username": "Green53",
          "content": "Seems split between B and C.<br>B certainly sounds feasible, but I would elimintate it simply because you're waiting for the ASG to replace all the old instances. I'd much prefer to use the instance refresh feature to replace the instances instantly.<br><br>C sounds like the better option, since it will not only cover the instances in the ASG, but all other instances by default.<br>https://repost.aws/knowledge-center/ebs-automatic-encryption<br><br>If C wasn't an option, I'd likely go A though.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915990,
          "date": "Tue 06 Jun 2023 09:03",
          "username": "michele_scar",
          "content": "With B you solve the question without entropy of other configurations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 912410,
          "date": "Fri 02 Jun 2023 01:21",
          "username": "Tofu13",
          "content": "sse69 links and explanation are both fine. However, this leads to Answer B as encryption by default only applies to future volumes. But we want all of them to be encrypted now as well.<br>B takes some time until all unencrypted volumes are replaced, but its the only answer left.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 871434,
          "date": "Sun 16 Apr 2023 05:48",
          "username": "isokalau",
          "content": "Option A is incorrect because updating the launch template will not affect the existing instances with unencrypted EBS volumes. The instance refresh feature only replaces instances that are in the Auto Scaling group, but it does not change the EBS volume encryption.<br><br>Option C is incorrect because it only applies to new EBS volumes and not to the existing unencrypted EBS volumes attached to the instances.<br><br>Option D is also incorrect because it sets encryption of new EBS volumes to be enabled by default for each region, but it does not address the existing unencrypted EBS volumes attached to the instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Therefore, the most appropriate solution is to create a new launch template that has encryption enabled for all EBS volumes and update the Auto Scaling group to use the new launch template. The Auto Scaling group will then replace all the old instances with new instances that have encrypted EBS volumes.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 871435,
          "date": "Sun 16 Apr 2023 05:48",
          "username": "isokalau",
          "content": "Therefore, the most appropriate solution is to create a new launch template that has encryption enabled for all EBS volumes and update the Auto Scaling group to use the new launch template. The Auto Scaling group will then replace all the old instances with new instances that have encrypted EBS volumes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841373,
          "date": "Thu 16 Mar 2023 22:43",
          "username": "c73bf38",
          "content": "Set the Encrypted flag for all EBS volumes to true.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836946,
          "date": "Sun 12 Mar 2023 12:33",
          "username": "Artaggedon",
          "content": "D and B are INCORRECT since the Auto Scaling Groups will not inmediatelly replace the unencrypted ELBs.<br>A is INCORRECT since every ELBs aside from the ones launched from template will be able stay unencrypted.<br>C is the only one CORRECT since you cover the entire Region and you don't have to wait for the ELBs to be replaced.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828024,
          "date": "Fri 03 Mar 2023 14:58",
          "username": "roguecloud",
          "content": "Going with C based on Instance Refresh documentation provided. Also the 'wait' is a sign that B is not correct. I've seen many ASGs in Production that do not change for extended periods of time.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 806103,
          "date": "Sun 12 Feb 2023 09:25",
          "username": "ygen",
          "content": "Option C doesn't answer a case that in the future the company decide to use a new region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>BTW, can someone please explain why option A is not valid?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 806106,
          "date": "Sun 12 Feb 2023 09:28",
          "username": "ygen",
          "content": "BTW, can someone please explain why option A is not valid?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 773611,
          "date": "Thu 12 Jan 2023 16:00",
          "username": "Smartphone",
          "content": "Guys read the question carefully \\\"implement a solution to ensure that all EBS volumes are encrypted now and in the future\\\".. By using the option B the instances will be launched with encryption for this autoscaling group.. But remember, in FUTURE, if you launch any instance then by default that EBS volume will NOT be encrypted...<br><br>But the Option C ensures that any EBS volume launched in FUTURE will be encrypted and as well as it will also encrypt the volume of current autoscaling group.<br><br>Hence the correct answer is C.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 770317,
          "date": "Mon 09 Jan 2023 12:53",
          "username": "secdaddy",
          "content": "Either B or C should work. The requirement says 'now'.B says wait ! now whereas Cinstance refreshnow so I guess C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 762606,
          "date": "Sat 31 Dec 2022 11:38",
          "username": "Teknoklutz",
          "content": "An instance refresh can be helpful when you have a new Amazon Machine Image (AMI) or a new user data script. To use an instance refresh, first create a new launch template that specifies the new AMI or user data script. Then, start an instance refresh to begin updating the instances in the group immediately.<br>So its B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 755641,
          "date": "Sun 25 Dec 2022 13:47",
          "username": "Fyssy",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 755126,
          "date": "Sat 24 Dec 2022 21:29",
          "username": "ryogoku",
          "content": "Option B does not cover all future cases while C does.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#358",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has installed a third-party application that is distributed on several Amazon EC2 instances and on-premises servers. Occasionally, the company's IT team needs to use SSH to connect to each machine to perform software maintenance tasks. Outside these time slots, the machines must be completely isolated from the rest of the network. The company does not want to maintain any SSH keys. Additionally, the company wants to pay only for machine hours when there is an SSH connection.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Create a bastion host with port forwarding to connect to the machines.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Systems Manager Session Manager to allow temporary connections.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudShell to create serverless connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an interface VPC endpoint for each machine for private connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 358 discussion",
      "discusstion": [
        {
          "id": 723000,
          "date": "Sun 20 Nov 2022 21:51",
          "username": "AdamWest",
          "content": "B - 100%<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 934142,
          "date": "Mon 26 Jun 2023 09:00",
          "username": "Green53",
          "content": "A - Port forwarding alone doesn't help, you need authentication<br>B - Sounds good, provides SSH access via your role for AWS and on-prem:<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html<br><br>C - Researched, and won't work. According to https://aws.amazon.com/cloudshell/faqs/:<br><br>Q: Can I access resources in a VPC with CloudShell?<br>No, you cannot currently access resources that are in your private VPC in this release of CloudShell.<br><br>D - No<br><br>The phrase \\\"company wants to pay only for machine hours when there is an SSH connection\\\" is confusing people, and I read it as to mean that they don't want to run a bastion host that just sits there!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914181,
          "date": "Sun 04 Jun 2023 08:00",
          "username": "Toptip",
          "content": "B- AWS Systems Manager Session Manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 797361,
          "date": "Fri 03 Feb 2023 21:46",
          "username": "sam15",
          "content": "The answer is B.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html<br>https://aws.amazon.com/systems-manager/pricing/<br><br>No open inbound ports and no need to manage bastion hosts or SSH keys<br><br>Leaving inbound SSH ports and remote PowerShell ports open on your managed nodes greatly increases the risk of entities running unauthorized or malicious commands on the managed nodes. Session Manager helps you improve your security posture by letting you close these inbound ports, freeing you from managing SSH keys and certificates, bastion hosts, and jump boxes.<br><br>On-Premises Instance Management<br>Systems Manager advanced instances are priced on a pay-as-you-go basis. You are charged based on the number of advanced instances activated as Systems Manager managed instances and the hours those instances are running. Charges are not incurred for the hours where an advanced on-premises instance is de-registered, shut down, or terminated for the entire hour. This pricing applies to instances (on-premises, other cloud providers, or Amazon EC2) registered using Systems Manager activations.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 763570,
          "date": "Mon 02 Jan 2023 08:21",
          "username": "secdaddy",
          "content": "None of the answers meet all requirements.B is better than C.<br>A doesn't meet the requirements<br>B meets all requirements except not paying for machine hours only when there is an ssh connection<br>C can be used to spin up instances and connect to them using ssh but would involve managing ssh keys; also serverless doesn't seem to fit the ask.<br>D doesn't meet the requirements",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755917,
          "date": "Sun 25 Dec 2022 19:37",
          "username": "Subs2021",
          "content": "Ans: B<br><br>1. Need to manage both on prem and cloud resources<br>2. No maintenance of SSH keys",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754283,
          "date": "Fri 23 Dec 2022 15:19",
          "username": "ryogoku",
          "content": "Session managerno maintenance of SSH keys.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 746695,
          "date": "Fri 16 Dec 2022 03:11",
          "username": "eji",
          "content": "I think the answer is B because it says \\\"The company does not want to maintain any SSH keys\\\" so session manager in system manager can do it<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed! 'Session Manager helps you improve your security posture by letting you close these inbound ports, freeing you from managing SSH keys and certificates, bastion hosts, and jump boxes.' https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753776,
          "date": "Fri 23 Dec 2022 01:48",
          "username": "Wilson_S",
          "content": "Agreed! 'Session Manager helps you improve your security posture by letting you close these inbound ports, freeing you from managing SSH keys and certificates, bastion hosts, and jump boxes.' https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 735584,
          "date": "Mon 05 Dec 2022 02:38",
          "username": "AdamWest",
          "content": "Really think C is the answer.<br>You only pay for other AWS resources you use with CloudShell to create and run your applications.System manager has a base cost once above the free teir and session manager falls under that.<br>changed answer to C.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How should we connect to the on-premise server?<br>I'll go with B.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html</li><li>Agreed!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 747766,
          "date": "Sat 17 Dec 2022 05:49",
          "username": "ajajajaj",
          "content": "How should we connect to the on-premise server?<br>I'll go with B.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed!</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 755915,
          "date": "Sun 25 Dec 2022 19:36",
          "username": "Subs2021",
          "content": "Agreed!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732220,
          "date": "Thu 01 Dec 2022 04:49",
          "username": "landsamboni",
          "content": "I liked B, but the \\\"he company wants to pay only for machine hours when there is an SSH connection\\\" makes me think about C... not sure. However, I'd choose B as final answ",
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
      "question_text": "<p>A security engineer is configuring a new website that is named example.com. The security engineer wants to secure communications with the website by requiring users to connect to example.com through HTTPS.<br><br>Which of the following is a valid option for storing SSL/TLS certificates?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#359",
          "answers": [
            {
              "choice": "<p>Custom SSL certificate that is stored in AWS Key Management Service (AWS KMS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Default SSL certificate that is stored in Amazon CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Custom SSL certificate that is stored in AWS Certificate Manager (ACM)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Default SSL certificate that is stored in Amazon S3<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 359 discussion",
      "discusstion": [
        {
          "id": 729549,
          "date": "Mon 28 Nov 2022 20:19",
          "username": "Teknoklutz",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/install-ssl-cloudfront/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914183,
          "date": "Sun 04 Jun 2023 08:03",
          "username": "Toptip",
          "content": "C - feels like a CCP type of question",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 773631,
          "date": "Thu 12 Jan 2023 16:18",
          "username": "Smartphone",
          "content": "storing SSL/TLS certificates - for this only the correct answer is C.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755918,
          "date": "Sun 25 Dec 2022 19:38",
          "username": "Subs2021",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742932,
          "date": "Mon 12 Dec 2022 15:44",
          "username": "Balki",
          "content": "Default CloudFront Certificate (*.cloudfront.net). The URL is custom. Hence C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732346,
          "date": "Thu 01 Dec 2022 07:55",
          "username": "tainh",
          "content": "- CloudFront assigns a default domain name to your distribution, for example, d111111abcdef8.cloudfront.net. If you use this domain name, then you can use the CloudFront default SSL/TLS certificate already selected for your distribution. If you use a different domain name for your distribution, then it's a best practice to do one of the following to avoid domain-name-related certificate warnings:<br>- Request a public certificate from AWS Certificate Manager.<br>- Import certificates into AWS Certificate Manager.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729127,
          "date": "Mon 28 Nov 2022 14:17",
          "username": "D2",
          "content": "Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724864,
          "date": "Wed 23 Nov 2022 04:36",
          "username": "Shriraj32",
          "content": "Cette B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>example.com</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 929344,
          "date": "Wed 21 Jun 2023 12:37",
          "username": "vherman",
          "content": "example.com",
          "upvote_count": "1",
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
      "question_text": "<p>A company deploys an application on AWS. The application recently uploaded confidential data to an Amazon S3 bucket outside the company. The company's security team wants to prevent this scenario from occurring in the future. The company owns 100 different S3 buckets in various AWS accounts and uses AWS Organizations to manage the accounts.<br><br>The security team must implement a solution that allows individual teams to create new S3 buckets. The solution must allow applications that are deployed on AWS to access only the S3 buckets that are deployed in the company's organization.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#360",
          "answers": [
            {
              "choice": "<p>Create an S3 access point in each private subnet. Route all S3 requests to this access point. Create an S3 access point policy that restricts access to specific S3 buckets. Update all S3 access point policies when new S3 buckets are created in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 gateway endpoint in each private subnet. Route all S3 requests to this endpoint. Create an S3 gateway endpoint policy that restricts access to specific S3 buckets. Update all S3 gateway endpoint policies when new S3 buckets are created in the organization,<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 interface endpoint in each private subnet. Route all S3 requests to this endpoint. Create an S3 interface endpoint policy that restricts access to specific S3 buckets. Update all S3 interface endpoint policies when new S3 buckets are created in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Gateway Load Balancer endpoint in each private subnet. Route all S3 requests to this endpoint. Create a Gateway Load Balancer endpoint policy that restricts access to specific S3 buckets. Update all Gateway Load Balancer endpoint policies when new S3 buckets are created in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 360 discussion",
      "discusstion": [
        {
          "id": 738759,
          "date": "Thu 08 Dec 2022 09:20",
          "username": "maddyr",
          "content": "Here there is no mention of within VPC or cross VPC access. For within VPC access, gateway type S3 endpoint will meet the reqs. For cross VPC access/hybrid env., interface endpoint is reqd.<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly @Maddyr, I don't know why everyone is picking \\\"Interface\\\" from the link since there's no mention of within VPC or cross VPC access.</li><li>We should also use interface endpoints to enable on premise applications to access S3 resources.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741181,
          "date": "Sat 10 Dec 2022 19:47",
          "username": "BK__",
          "content": "Exactly @Maddyr, I don't know why everyone is picking \\\"Interface\\\" from the link since there's no mention of within VPC or cross VPC access.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 892150,
          "date": "Mon 08 May 2023 14:23",
          "username": "ITGURU51",
          "content": "We should also use interface endpoints to enable on premise applications to access S3 resources.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1108415,
          "date": "Fri 29 Dec 2023 08:22",
          "username": "yorkicurke",
          "content": "many have given good reason for option B but i will give why i didnt pick A, which i was considering but came accroos few facts that;<br>Why A is wrong -->><br><br>S3 access points can only be used for object-level operations like GetObject, PutObject etc. They do not support bucket-level operations like creating or deleting buckets. The question requires restricting access at the bucket-level.<br><br>S3 access points do not support restricting access based on the AWS account or organization that the requester belongs to. The access point policy can only control access based on properties like IP address range, VPC etc.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1095826,
          "date": "Wed 13 Dec 2023 22:06",
          "username": "Amy2009",
          "content": "It should be B. Gateway end point.<br><br>With a gateway endpoint, you can access Amazon S3 from your VPC, without requiring an internet gateway or NAT device for your VPC, and with no additional cost. However, gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 928168,
          "date": "Tue 20 Jun 2023 07:15",
          "username": "Andrii223",
          "content": "Gateway endpoints for Amazon S3<br>Use Amazon S3 public IP addresses<br>Use the same Amazon S3 DNS names<br>Do not allow access from on premises<br>Do not allow access from another AWS Region<br>Not billed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914192,
          "date": "Sun 04 Jun 2023 08:10",
          "username": "Toptip",
          "content": "Both B and C are 100% correct... BUT, There is no additional charge for using gateway endpoints...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913567,
          "date": "Sat 03 Jun 2023 15:01",
          "username": "6_8ftwin",
          "content": "B<br>When using a gateway endpoint, a prefix list can be added to a route table to CONTROL the traffic that is allowed to access the service through the endpoint.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 892141,
          "date": "Mon 08 May 2023 14:16",
          "username": "ITGURU51",
          "content": "A gateway endpoint is a gateway that you specify in the routing table to access Amazon S3 from your VPC over the AWS network. Interface endpoints should be used for specific use cases such as: using private IP addresses to route requests to Amazon S3 from within your VPC, on premises, or from a VPC in another AWS Region by using VPC peering or AWS Transit Gateway. B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 867363,
          "date": "Tue 11 Apr 2023 15:51",
          "username": "Sai123",
          "content": "why cant we use as it restricts access to specific s3 buckets, Option B and C are more related to routing to travel through internal network instead of public internet. Answer should be A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 867367,
          "date": "Tue 11 Apr 2023 15:56",
          "username": "Sai123",
          "content": "https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 852092,
          "date": "Mon 27 Mar 2023 14:21",
          "username": "Cyp",
          "content": "Both A and B does the job however question says route all requests... You can route requests to gateway endpoint not interface endpoint. Please refer to the difference btw two endpoint types.<br><br>So ans is B<br><br>https://acloudguru.com/forums/aws-certified-security-specialty/how-is-an-endpoint-gateway-more-resilient-than-endpoint-interface#:~:textAn%20interface%20endpoint%20is%20powered,traffic%20destined%20for%20the%20service.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 841374,
          "date": "Thu 16 Mar 2023 22:45",
          "username": "c73bf38",
          "content": "S3 gateway endpoint creation",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 825378,
          "date": "Wed 01 Mar 2023 00:13",
          "username": "YogiB1",
          "content": "Between B & C, interface endpoint won't stop accessing S3 buckets outside your account whereas gateway endpoints are added to route table so you must use them (enforced) to access S3 from VPC. So gateway endpoint serves the purpose here. Answer is B.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 811079,
          "date": "Thu 16 Feb 2023 21:34",
          "username": "PatrickLi",
          "content": "Upvote for B. Gateway endpoints for S3 and DynamoDB. And no they won't require any NAT gateways.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 787530,
          "date": "Wed 25 Jan 2023 11:59",
          "username": "selim507",
          "content": "You should always use gateway endpoint for S3 as default if you don't have any specific req.<br><br>\\\"Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC. Gateway endpoints do not enable AWS PrivateLink.<br><br>There is no additional charge for using gateway endpoints.\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 763612,
          "date": "Mon 02 Jan 2023 10:25",
          "username": "secdaddy",
          "content": "B would require adding NAT devices in each private subnet, of which there is no mention in the solution.C seems to meet the requirements as the private subnets can use the interface gateway directly.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Going to need to disagree on that, one of the most important benefits of S3 Gateway (been implementing for multiple orgs since release) is that you can access S3 even with no IGW/NAT/ingress /egress..</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 828140,
          "date": "Fri 03 Mar 2023 18:00",
          "username": "roguecloud",
          "content": "Going to need to disagree on that, one of the most important benefits of S3 Gateway (been implementing for multiple orgs since release) is that you can access S3 even with no IGW/NAT/ingress /egress..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 762607,
          "date": "Sat 31 Dec 2022 11:41",
          "username": "Teknoklutz",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 755635,
          "date": "Sun 25 Dec 2022 13:36",
          "username": "Fyssy",
          "content": "Gateway is inexpensive as interface endpoint supports<br> VPN and Direct connect https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 755131,
          "date": "Sat 24 Dec 2022 21:41",
          "username": "ryogoku",
          "content": "C is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#361",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs that are in the same AWS account. One VPC is located in the us-east-1 Region, and the other VPC is located in the us-west-2 region. The VPCs have an active VPC peering connection with each other, and the route tables for each VPC are configured to route network traffic properly between each VPC.<br><br>An Amazon Aurora DB instance exists in the VPC in us-east-1, and the DB instance's security group controls access to the DB instance. An Auto Scaling group is running in the VPC in us-west-2. The Auto Scaling group is continually adding and removing Amazon EC2 instances because of fluctuations in the demand for capacity. Every EC2 instance that launches as part of the Auto Scaling group belongs to a security group that is specific to the Auto Scaling group.<br><br>A security engineer needs to configure a solution that allows the EC2 instances to access the DB instance that is located in us-east-1.<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
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
              "choice": "<p>Add the ID of the DB instance's security group to the inbound rules of the EC2 instances' security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the subnets used by the Auto Scaling group of the VPC in us-west-2 to the DB instance's security group,<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add the private IP address of each EC2 instance from the Auto Scaling group to the DB instance's security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the ID of the EC2 instances' security group to the inbound rules of the DB instance's securely group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 361 discussion",
      "discusstion": [
        {
          "id": 726338,
          "date": "Fri 25 Nov 2022 03:07",
          "username": "AdamWest",
          "content": "D - (Isais - you can add SG's from other vpc's if they are peered) - From user guide.<br>The ID of a security group (referred to here as the specified security group). For example, the current security group, a security group from the same VPC, or a security group for a peered VPC. This allows traffic based on the private IP addresses of the resources associated with the specified security group. This does not add rules from the specified security group to the current security group.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>YOu=C2=B4re Right</li><li>B - You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC. from https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html</li><li>Security groups cannot be referenced between regions. According to AWS documentation, 'You cannot reference the security group of a peer VPC that's in a different region. Instead, use the CIDR block of the peer VPC.</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732127,
          "date": "Thu 01 Dec 2022 01:55",
          "username": "Isaias",
          "content": "YOu=C2=B4re Right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816085,
          "date": "Tue 21 Feb 2023 02:32",
          "username": "charlesdeng",
          "content": "B - You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC. from https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Security groups cannot be referenced between regions. According to AWS documentation, 'You cannot reference the security group of a peer VPC that's in a different region. Instead, use the CIDR block of the peer VPC.</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 892236,
          "date": "Mon 08 May 2023 16:07",
          "username": "ITGURU51",
          "content": "Security groups cannot be referenced between regions. According to AWS documentation, 'You cannot reference the security group of a peer VPC that's in a different region. Instead, use the CIDR block of the peer VPC.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 770029,
          "date": "Mon 09 Jan 2023 05:30",
          "username": "Leonardocp33",
          "content": "B, \\\"You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.\\\" https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html#:~:textYou%20cannot%20reference%20the%20security%20group%20of%20a%20peer%20VPC%20that%27s%20in%20a%20different%20Region.%20Instead%2C%20use%20the%20CIDR%20block%20of%20the%20peer%20VPC.upvoted%201%20times",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 947004,
          "date": "Sun 09 Jul 2023 10:28",
          "username": "lucesarano",
          "content": "B. As the other are pointing I have tried that and you can try yourself.<br><br>Go to eu-west-1 and check default security group.<br>Get id of eu-west-2 default security group<br>Try to reference in the first Security Group the id of the second, it won't appear.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930333,
          "date": "Thu 22 Jun 2023 11:22",
          "username": "Green53",
          "content": "A sneaky question. As people have said, security groups can only be referenced across peers when they're in the *same* region:<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html<br><br>Since you don't want to whitelist individual IPs, B is the suitable answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 916008,
          "date": "Tue 06 Jun 2023 09:26",
          "username": "michele_scar",
          "content": "You cannot reference SG between different region. It's needed the CIDR block",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914195,
          "date": "Sun 04 Jun 2023 08:17",
          "username": "Toptip",
          "content": "B is 100% correct...<br>D could be correct only if both VPC are in the SAME REGION.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 912510,
          "date": "Fri 02 Jun 2023 05:51",
          "username": "Tofu13",
          "content": "B Add the subnetsadd the subnets CIDR.<br>C only adds single IPs which is not working very well in an AS group.<br>D not working because of different regions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 825784,
          "date": "Wed 01 Mar 2023 13:04",
          "username": "Ell89",
          "content": "as explained by multiple members already, you can reference an SG of a peered VPC, but not from a different region.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 793155,
          "date": "Mon 30 Jan 2023 19:10",
          "username": "makanju",
          "content": "B- You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776021,
          "date": "Sun 15 Jan 2023 00:28",
          "username": "sakibmas",
          "content": "A - reverse requirements<br>B - not least access<br>C - not feasible<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How you will add the ID of the EC2 instances' security group that is located in the different region?<br>Correct Answer is B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780873,
          "date": "Thu 19 Jan 2023 08:57",
          "username": "Smartphone",
          "content": "How you will add the ID of the EC2 instances' security group that is located in the different region?<br>Correct Answer is B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 774056,
          "date": "Fri 13 Jan 2023 04:03",
          "username": "Smartphone",
          "content": "You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.<br>You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html<br><br>Hence the correct answer is B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 768805,
          "date": "Sat 07 Jan 2023 19:17",
          "username": "sahanpere",
          "content": "B is correct.<br>D is not correct. You can't specify the Security ID in different regions only CIDR. https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html#:~:textYou%20cannot%20reference%20the%20security%20group%20of%20a%20peer%20VPC%20that%27s%20in%20a%20different%20Region.%20Instead%2C%20use%20the%20CIDR%20block%20of%20the%20peer%20VPC.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760632,
          "date": "Thu 29 Dec 2022 07:03",
          "username": "NOZOMI",
          "content": "Unfortunately, SGID references are only available in the same region and when VPCPeering is configured. It's not specified in the docs, but you'll find out if you actually do it. (There are also descriptions in some free blogs)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B - For Source in SGID, type the ID of the security group in the peer VPC if it is in the same Region or the CIDR block of the peer VPC if it is in a different Region. refer: https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 765109,
          "date": "Wed 04 Jan 2023 00:11",
          "username": "siva_siva",
          "content": "B - For Source in SGID, type the ID of the security group in the peer VPC if it is in the same Region or the CIDR block of the peer VPC if it is in a different Region. refer: https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 755132,
          "date": "Sat 24 Dec 2022 21:43",
          "username": "ryogoku",
          "content": "D is correct as explained by Adam.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724863,
          "date": "Wed 23 Nov 2022 04:35",
          "username": "Isaias",
          "content": "B, adding the subnets on SG on the DB inbound rule<br>A y D cannot be,becase you cannot add a SG from another VPC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yes you can</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732227,
          "date": "Thu 01 Dec 2022 05:02",
          "username": "landsamboni",
          "content": "yes you can",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724615,
          "date": "Tue 22 Nov 2022 20:43",
          "username": "beatz",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723474,
          "date": "Mon 21 Nov 2022 13:38",
          "username": "luisfsm",
          "content": "The only rational answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#362",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company receives an email message from the AWS Abuse team. The message states that an IAM user in the company's AWS account has had an associated access key and secret access key pair published in public code repositories.<br><br>The identified AM user is designated as a service account. The IAM user uses hardcoded credentials in a critical customer-facing production application. There are no signs of a compromise within the company's AWS account. The company's security team must address this situation by implementing a solution that minimizes application downtime.<br><br>What is the correct order of actions for the security team to take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#362",
          "answers": [
            {
              "choice": "<p>Delete any AWS Management Console credentials that are associated with the IAM user. Create a new access key and secret access key pair for the IAM user. Update the application to use the new credentials. Inactivate the publicly exposed IAM access key. Revoke any temporary AWS Security Token Service (AWS STS) credentials that are associated with the IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Revoke any temporary AWS Security Token Service (AWS STS) credentials that are associated with the IAM user. Inactivate the publicly exposed IAM access key. Create a new access key and secret access key pair for the IAM user. Update the application to use the new credentials. Delete any AWS Management Console credentials that are associated with the IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Inactivate the publicly exposed IAM access key. Create a new access key and secret access key pair for the IAM user. Update the application to use the new credentials. Revoke any temporary AWS Security Token Service (AWS STS) credentials that are associated with the IAM user. Delete any AWS Management Console credentials that are associated with the IAM user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Delete any AWS Management Console credentials that are associated with the IAM user. Create a new access key and secret access key pair for the IAM user. Inactivate the publicly exposed IAM access key. Revoke any temporary AWS Security Token Service (AWS STS) credentials that are associated with the IAM user. Update the application to use the new credentials.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 362 discussion",
      "discusstion": [
        {
          "id": 763619,
          "date": "Mon 02 Jan 2023 10:35",
          "username": "secdaddy",
          "content": "Requirement \\\"solution that minimizes application downtime\\\"<br>A is the only one that updates the application before inactivating (this word actually exists!) the old credentials programmatic access.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1113828,
          "date": "Thu 04 Jan 2024 16:49",
          "username": "dsmynameew",
          "content": "Definitely A for lowest down time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 930329,
          "date": "Thu 22 Jun 2023 11:19",
          "username": "Green53",
          "content": "The AWS blog post people reference state:<br><br>1. Determine what resources those credentials have access to<br>2. Invalidate the credentials so they can no longer be used to access your account<br>3. Consider invalidating any temporary security credentials that might have been issued using the credentials<br>4. Restore appropriate access<br><br>Since this is an IAM user (and not a role), the application won't be using any temporary credentails (it's using a long term access key/secret).<br><br>Based on the list above, I'd originally go C. It would cause a longer period of downtime, but would focus on deactivating the credentials *before* restoring access the application.<br><br>However, it's confusing, since the question states there is no sign of compromise, and they want to minimise downtime. This would push me towards A (the fact the IAM credentials are removed first is strange). Create a second acces/secret key (IAM user can have two), update the application, then revoke/disable the other credentials.<br><br>I can see both A and C being correct though, depending on the situation!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929375,
          "date": "Wed 21 Jun 2023 12:59",
          "username": "vherman",
          "content": "A cant be done. you first need to deactivate. So C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 916026,
          "date": "Tue 06 Jun 2023 09:47",
          "username": "michele_scar",
          "content": "A and D create immediate downtime.<br>B it's not good because in the meanwhile you revoke STS and do anything, it should be created other session<br><br>so it's C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914206,
          "date": "Sun 04 Jun 2023 08:34",
          "username": "Toptip",
          "content": "C makes sense.. it's not recommended to delete the credential immediately. better to disable them.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 892261,
          "date": "Mon 08 May 2023 16:44",
          "username": "ITGURU51",
          "content": "Here are the steps that the security team can take to minimize downtime while addressing the situation:<br><br>Create a new access key and secret access key pair for the IAM user.<br>Update the application to use the new credentials.<br>Inactivate the publicly exposed IAM access key. A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841377,
          "date": "Thu 16 Mar 2023 22:51",
          "username": "c73bf38",
          "content": "Inactivate the publicly exposed IAM access key to prevent further unauthorized access to the AWS account is the first step, answer is C for me.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 837044,
          "date": "Sun 12 Mar 2023 14:26",
          "username": "Artaggedon",
          "content": "A - It's the only one that has a downtime close to zero and that's the priority in this case.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830675,
          "date": "Mon 06 Mar 2023 09:58",
          "username": "Ell89",
          "content": "C - you cant delete keys without inactivating them first. Plus, A is stating to delete console credentials, which are not the same as programmatic keys.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812761,
          "date": "Sat 18 Feb 2023 08:40",
          "username": "paczkin",
          "content": "Credentials deletion is not recommended as the first step. Preffered way is to inactivate them first as we can always return before app is updated. This removes options A and D.<br>Answer B suggests to revoke temporary STS tokens first and as the last step to delete credentials. Here we have a threat that between these two actions the new temporary credentials can be created.<br>https://aws.amazon.com/es/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/<br>I vote for C.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 811083,
          "date": "Thu 16 Feb 2023 21:40",
          "username": "PatrickLi",
          "content": "Upvote for A. What secdaddy said.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 758148,
          "date": "Tue 27 Dec 2022 06:06",
          "username": "yew2",
          "content": "if the answer is B or C, then wouldn't the last step \\\"Delete any AWS Management Console credentials that are associated with the IAM user.\\\" remove the new access keys that were just created ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Credentials (username/password) are not the same as the access keys.This is an IAM user (not a role).</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 930318,
          "date": "Thu 22 Jun 2023 11:01",
          "username": "Green53",
          "content": "Credentials (username/password) are not the same as the access keys.This is an IAM user (not a role).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 756017,
          "date": "Sun 25 Dec 2022 22:29",
          "username": "Subs2021",
          "content": "C is the right answer and here is why. There are no signs of compromise and requirement is to ensure less downtime for application. If temp credential revoked first then application also will get impacted. so the correct answer is C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 745083,
          "date": "Wed 14 Dec 2022 13:54",
          "username": "amcloud",
          "content": "https://aws.amazon.com/es/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/ - B<br>2.Invalidate the credentials<br>3.Invalidating any temporary security credentials<br>4.Restore appropriate access<br><br>It makes no sense to do 4 step before 3... The theat actor can be still inside.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If you first focus to invalidate short term credentials, the originally exposed keys can be used to generate new short term credentials. Following this logic and the documentation, I would opt for C.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754336,
          "date": "Fri 23 Dec 2022 16:30",
          "username": "ryogoku",
          "content": "If you first focus to invalidate short term credentials, the originally exposed keys can be used to generate new short term credentials. Following this logic and the documentation, I would opt for C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732431,
          "date": "Thu 01 Dec 2022 10:09",
          "username": "D2",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726340,
          "date": "Fri 25 Nov 2022 03:09",
          "username": "AdamWest",
          "content": "C - Is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#363",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating one of its legacy systems from an on-premises data center to AWS. The application server will run on AWS, but the database must remain in the on-premises data center for compliance reasons. The database is sensitive to network latency. Additionally, the data that travels between the on-premises data center and AWS must have IPsec encryption.<br><br>Which combination of AWS solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#363",
          "answers": [
            {
              "choice": "<p>AWS Site-to-Site VPN<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Direct Connect<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS VPN CloudHub<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>VPC peering<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>NAT gateway<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 363 discussion",
      "discusstion": [
        {
          "id": 723015,
          "date": "Sun 20 Nov 2022 22:18",
          "username": "AdamWest",
          "content": "AB - 100%<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 724869,
          "date": "Wed 23 Nov 2022 04:51",
          "username": "Isaias",
          "content": "a: encryption<br>b:for latency",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1183556,
          "date": "Tue 26 Mar 2024 20:24",
          "username": "hro",
          "content": "AB - Cant be D - VPC peering there is no VPC to VPC going on.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914208,
          "date": "Sun 04 Jun 2023 08:37",
          "username": "Toptip",
          "content": "A+B.. S2S over DX",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 892271,
          "date": "Mon 08 May 2023 16:53",
          "username": "ITGURU51",
          "content": "AWS Direct Connect does not encrypt network traffic in transit. Therefore answers A and B provide end to end data encryption. We can use Direct connect to ensure low network latency and AWS Site to Site to encrypt data as it move across the network.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777890,
          "date": "Mon 16 Jan 2023 16:47",
          "username": "sakibmas",
          "content": "AWS Direct Connect does not encrypt your traffic that is in transit by default. To encrypt the data in transit that traverses AWS Direct Connect, you must use the transit encryption options for that service.<br>Reference: https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 764545,
          "date": "Tue 03 Jan 2023 12:36",
          "username": "jishrajesh",
          "content": "AB Selected",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 759922,
          "date": "Wed 28 Dec 2022 15:18",
          "username": "must_be_rohit",
          "content": "requirement is for the data that travels between the on-premises data center and AWS must have IPsec encryption.<br>Direct connect does not encrypt data by default... this it has to be VPN connectivity... thus A/C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Look at the URL provided by Adam.site to site VPN across directconnect is correct, so AB</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 763622,
          "date": "Mon 02 Jan 2023 10:43",
          "username": "secdaddy",
          "content": "Look at the URL provided by Adam.site to site VPN across directconnect is correct, so AB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 756018,
          "date": "Sun 25 Dec 2022 22:31",
          "username": "Subs2021",
          "content": "Agreed",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 724759,
          "date": "Wed 23 Nov 2022 00:44",
          "username": "Blueocean",
          "content": "Agree should be A and B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 723487,
          "date": "Mon 21 Nov 2022 13:45",
          "username": "luisfsm",
          "content": "Agree with AB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 723012,
          "date": "Sun 20 Nov 2022 22:17",
          "username": "AdamWest",
          "content": "AB -100%<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a multi-account AWS environment with AWS Organizations enabled. The company has hundreds of workloads that are deployed across multiple AWS services. The company has enabled AWS Security Hub for all accounts within the organization and has designated a delegated administrator.<br><br>The company wants to implement a centralized solution to provide near-real-time response and automatic remediation for custom security detections throughout the organization.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#364",
          "answers": [
            {
              "choice": "<p>Create Security Hub custom actions in the organization's delegated administrator account. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to evaluate the configuration of the resource and send noncompliant resources to Security Hub. Send the findings to an EventBridge (CloudWatch Events) event to invoke a Lambda function to remediate the custom security detection. Send the Lambda function results to an Amazon Simple Notification Service (Amazon SNS) topic. Update the Security Hub finding.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create Security Hub insights for findings in the organization's delegated administrator account. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to parse the resources within the insight and send noncompliant resources to Security Hub. Send the output to invoke subsequent Lambda functions to remediate the noncompliant resources. Send the Lambda function results to an Amazon Simple Notification Service (Amazon SNS) topic. Update the Security Hub finding.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Security Hub insights for findings in the organization's delegated administrator account and member accounts. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to parse the resources within the insight and send noncompliant resources to Security Hub. Send the output to invoke subsequent Lambda functions to remediate the noncompliant resources. Send the Lambda function results to an Amazon Simple Notification Service (Amazon SNS) topic. Update the Security Hub finding.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Designate an AWS Config delegated administrator account for the organization. Create an AWS Config aggregator in this delegated administrator account and in all member accounts. Enable Security Hub integration with AWS Config. Create an AWS Config custom rule to check for noncompliant resources. Create an associated AWS Lambda function to take action on the noncompliant resources. Send the Lambda function results to a log group in Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 364 discussion",
      "discusstion": [
        {
          "id": 748026,
          "date": "Sat 17 Dec 2022 12:58",
          "username": "D2",
          "content": "Answer A<br>https://aws.amazon.com/solutions/implementations/automated-security-response-on-aws/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>refer by the link, mention to AWS Security Hub Custom Actions.<br>vote A</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 754385,
          "date": "Fri 23 Dec 2022 18:25",
          "username": "due",
          "content": "refer by the link, mention to AWS Security Hub Custom Actions.<br>vote A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1058216,
          "date": "Mon 30 Oct 2023 20:20",
          "username": "AgboolaKun",
          "content": "The correct answer is A.<br>Please refer to the link - https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-custom-actions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 916034,
          "date": "Tue 06 Jun 2023 09:59",
          "username": "michele_scar",
          "content": "Using custom action to send findings to Events",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914231,
          "date": "Sun 04 Jun 2023 09:17",
          "username": "Toptip",
          "content": "I think A is correct.. but i need to investigate more!<br>Is this flow valid? Hub>EventBridge>Lambda>Hub>EventBrdige>Lambda>SNS<br>i'm still not sure if it's possible to use the Security Hub \\\"custom actions\\\" so \\\"evaluate\\\" findings with Lambda then notify Security Hub again to trigger a EventBridge which trigger another Lambda function.. sounds weird right?<br><br>D could be also correct even though i don't like it",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 892309,
          "date": "Mon 08 May 2023 17:59",
          "username": "ITGURU51",
          "content": "B and C are removed from the equation for the following reasons:<br>Security Hub insights deliver generic detections, however the business requirement specifies the need to create a custom detection.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 892305,
          "date": "Mon 08 May 2023 17:52",
          "username": "ITGURU51",
          "content": "Answer A provides near real time threat detection and response.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 866797,
          "date": "Tue 11 Apr 2023 04:17",
          "username": "nairj",
          "content": "Answer is A : The difference between A and D is : A focusses on remediation of Security hub findings which is what the question has asked for, not validating compliance of resources based on AWS config rules. D is correct if the question asks about validating compliance of resources.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 841380,
          "date": "Thu 16 Mar 2023 22:57",
          "username": "c73bf38",
          "content": "Security Hub for centralized monitoring and response and automatic remediation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837056,
          "date": "Sun 12 Mar 2023 14:38",
          "username": "Artaggedon",
          "content": "My vote goes to A. Here's why:<br><br>D is INCORRECT since you would only be able to detect changes in your AWS, but not other threats.<br>B and C are INCORRECT since we are asked for CUSTOM, and both implement default findings or configuration.<br><br>A is the one in my opinion.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 836411,
          "date": "Sat 11 Mar 2023 19:49",
          "username": "awsguru1998",
          "content": "B<br><br>A proposes creating Security Hub custom actions and using Amazon EventBridge (Amazon CloudWatch Events) rules to invoke AWS Lambda functions to evaluate the configuration of the resource and send noncompliant resources to Security Hub. However, it does not specify any remediation action to be taken, so it would require manual intervention to remediate the noncompliant resources.<br><br>Therefore, option B is the better solution for providing near-real-time response and automatic remediation for custom security detections throughout the organization.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804582,
          "date": "Fri 10 Feb 2023 17:53",
          "username": "selim507",
          "content": "The question requires \\\"Custom Security Detection\\\", so I go with D, AWS Config.<br>You can create your own rules in config and get notified when it is not fulfilled any more and you can fix the issue with a lambda.<br><br>Whereas in Security Hub you can only run some rules defined by AWS or some industry companies.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 770035,
          "date": "Mon 09 Jan 2023 05:39",
          "username": "Leonardocp33",
          "content": "A, near real time is more effective with CloudWatch Events.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742860,
          "date": "Mon 12 Dec 2022 14:45",
          "username": "Balki",
          "content": "It is clearly B<br>https://aws.amazon.com/blogs/security/use-security-hub-custom-actions-to-remediate-s3-resources-based-on-macie-discovery-results/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 735359,
          "date": "Sun 04 Dec 2022 19:41",
          "username": "Teknoklutz",
          "content": "i think D for AWS Config",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733342,
          "date": "Fri 02 Dec 2022 03:12",
          "username": "tainh",
          "content": "i think A<br>https://aws.amazon.com/solutions/implementations/automated-security-response-on-aws/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732255,
          "date": "Thu 01 Dec 2022 05:49",
          "username": "landsamboni",
          "content": "I think A is correct.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-custom-actions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 726235,
          "date": "Thu 24 Nov 2022 23:02",
          "username": "Isaias",
          "content": "D, have more sense, I discard ABC because you dont need event bridge to send not compliance to Sechub<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This phrase makes me doubt about D: \\\"Enable Security Hub integration with AWS Config\\\". You don't need to \\\"enable integration\\\" for those right?</li><li>I think A is correct.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-custom-actions.html</li><li>for me it doest make sense \\\"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to evaluate the configuration of the resource and send noncompliant resources to Security Hub.\\\" <br>, the not compliance created by securotu hub are config rules when you enable an standard like CIS/foundation, thus you need config</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732250,
          "date": "Thu 01 Dec 2022 05:46",
          "username": "landsamboni",
          "content": "This phrase makes me doubt about D: \\\"Enable Security Hub integration with AWS Config\\\". You don't need to \\\"enable integration\\\" for those right?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think A is correct.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-custom-actions.html</li><li>for me it doest make sense \\\"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to evaluate the configuration of the resource and send noncompliant resources to Security Hub.\\\" <br>, the not compliance created by securotu hub are config rules when you enable an standard like CIS/foundation, thus you need config</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732253,
          "date": "Thu 01 Dec 2022 05:48",
          "username": "landsamboni",
          "content": "I think A is correct.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-custom-actions.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734582,
          "date": "Sat 03 Dec 2022 18:11",
          "username": "Isaias",
          "content": "for me it doest make sense \\\"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to evaluate the configuration of the resource and send noncompliant resources to Security Hub.\\\" <br>, the not compliance created by securotu hub are config rules when you enable an standard like CIS/foundation, thus you need config",
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
      "question_text": "<p>A company's security engineer is configuring AWS Single Sign-On (AWS SSO) to give employees the ability to access multiple AWS accounts that are part of an organization in AWS Organizations. Persistent network connectivity exists between the organization's management account where AWS SSO is configured and an existing on-premises Active Directory instance. The security engineer wants to enable employee authentication by using the existing on-premises Active Directory instance.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#365",
          "answers": [
            {
              "choice": "<p>Deploy the default AWS SSO user directory. Establish a two-way trust relationship between AWS SSO and the existing Active Directory instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS managed Active Directory instance in the organization's management account. Establish a two-way trust relationship with the existing Active Directory instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a self-managed Active Directory instance in the organization's management account. Establish a two-way trust relationship with the existing Active Directory instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS managed Active Directory instance in the organization's management account. Establish a one-way trust relationship with the existing Active Directory instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 365 discussion",
      "discusstion": [
        {
          "id": 811098,
          "date": "Thu 16 Feb 2023 22:01",
          "username": "PatrickLi",
          "content": "Voting for B. See this repost: https://repost.aws/questions/QUAVB2guDnTwCGCSGbbaxNyw/aws-sso-with-microsoft-ad-as-id-p<br>I don't know why so many people chose C? The question asks for \\\"least overhead\\\" and you use a self-managed AD? Really?",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732257,
          "date": "Thu 01 Dec 2022 05:53",
          "username": "landsamboni",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html<br>Create a two-way trust relationship =E2=80=93 When two-way trust relationships are created between AWS Managed Microsoft AD and a self-managed directory in AD, users in your self-managed directory in AD can sign in with their corporate credentials to various AWS services and business applications. One-way trusts do not work with IAM Identity Center.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>One-way trusts do not work with IAM Identity Center.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732258,
          "date": "Thu 01 Dec 2022 05:53",
          "username": "landsamboni",
          "content": "One-way trusts do not work with IAM Identity Center.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 934129,
          "date": "Mon 26 Jun 2023 08:47",
          "username": "Green53",
          "content": "B is the logical answer.<br>C is more less operationally efficient than B, unsure why it's been selected.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914272,
          "date": "Sun 04 Jun 2023 11:01",
          "username": "Toptip",
          "content": "Only B makes sense...<br>A. You can't use both user directory and AD<br>C.you need AD connector for this solution<br>D. One-way trust is not supported by AWS SSO",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 912554,
          "date": "Fri 02 Jun 2023 07:37",
          "username": "Tofu13",
          "content": "SSO needs to look up objects in AD in order to work, so u need a two-way trust.(Search for Scenario 2 in below link). Be aware that there are services like FSx for Windows Fileserver which do not require a 2-way trust.<br><br>https://aws.amazon.com/blogs/security/everything-you-wanted-to-know-about-trusts-with-aws-managed-microsoft-ad/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 870986,
          "date": "Sat 15 Apr 2023 16:27",
          "username": "isokalau",
          "content": "Option A is not operationally efficient because it requires the creation of a separate user directory, which would require additional user management and potentially increase the risk of account lockout and identity management issues.<br><br>Option C requires the deployment and management of a self-managed Active Directory instance, which could be costly and resource-intensive.<br><br>Option D is not operationally efficient because a one-way trust relationship would require manual user management, and the user's Active Directory credentials would not be synchronized with the AWS environment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 841381,
          "date": "Thu 16 Mar 2023 23:01",
          "username": "c73bf38",
          "content": "AWS Managed with two way trust for existing AD.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 830678,
          "date": "Mon 06 Mar 2023 10:08",
          "username": "Ell89",
          "content": "B - the same as C but less admin over head.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 809042,
          "date": "Wed 15 Feb 2023 04:07",
          "username": "Boss_Sivaji",
          "content": "Answer B, as self managed AD still require AD connector or AWS Managed AD.<br>If you want to use your self-managed Active Directory credentials to access AWS Services or third-party services, you can integrate your self-managed AD with AWS IAM and AWS Single Sign-On using AWS AD Connector or AWS Managed AD through a trust relationship. In these cases, AD Connector or AWS Managed AD must be deployed in the management account of your organization.<br>https://docs.aws.amazon.com/whitepapers/latest/active-directory-domain-services//design-considerations-for-running-active-directory-on-ec2-instances.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808679,
          "date": "Tue 14 Feb 2023 19:33",
          "username": "selim507",
          "content": "Because of the SSO (IAM Identity center) we need to create two way trust.<br>If we compare B and C, at C it is self managed, whereas at B it is aws managed. Therefore it is B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780133,
          "date": "Wed 18 Jan 2023 16:17",
          "username": "sakibmas",
          "content": "You can configure one and two-way external and forest trust relationships between your AWS Directory Service for Microsoft Active Directory and self-managed (on-premises) directories, as well as between multiple AWS Managed Microsoft AD directories in the AWS cloud. AWS Managed Microsoft AD supports all three trust relationship directions: Incoming, Outgoing and Two-way (Bi-directional).<br>Reference: https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_setup_trust.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 763780,
          "date": "Mon 02 Jan 2023 15:20",
          "username": "secdaddy",
          "content": "Unclear to me if AWS SSO (now IAM Identity Center) can have a direct relationship with the existing on prem AD instance.<br><br>A - If it is possible to establish a direct (two way) trust relationship between AWS SSO (now IAM Identity Center) and the existing on prem AD instance then this would be the most operationally efficient solution.<br>If A is not possible then B is probably the best answer as it seems to be supported and would be less operational overhead than C<br>C I don't see that this would be more operationally efficient than B<br>D Not supported as one way trust<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760219,
          "date": "Wed 28 Dec 2022 19:53",
          "username": "Teknoklutz",
          "content": "C- Correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759941,
          "date": "Wed 28 Dec 2022 15:30",
          "username": "must_be_rohit",
          "content": "AWS Directory service is the only need here..<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 756041,
          "date": "Sun 25 Dec 2022 23:25",
          "username": "Subs2021",
          "content": "Why not A? Just set up the SSO and Federate with on prem AD using SAML.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 755531,
          "date": "Sun 25 Dec 2022 10:06",
          "username": "ryogoku",
          "content": "AWS Managedless operational overhead<br>Two-way trust needed as per this article: https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751430,
          "date": "Tue 20 Dec 2022 21:19",
          "username": "AWS_SJ",
          "content": "why not B ?AWS managed AD?",
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
      "question_text": "<p>A company has a security team that manages its AWS Key Management Service (AWS KMS) CMKs. Members of the security team must be the only ones to administer the CMKs. The company's application team has a software process that needs temporary access to the CMKS occasionally. The security team must provide the application team's software process access to the CMKs.<br><br>Which solution meets these requirements with the LEAST overhead?</p>",
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
              "choice": "<p>Export the CMK key material to an on-premises hardware security module (HSM). Give the application team access to the key material.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Edit the key policy that grants the security team access to the CMKs by adding the application team as principals. Revert this change when the application team no longer needs access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a key grant to allow the application team to use the CMKs. Revoke the grant when the application team no longer needs access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new CMK by generating key material on premises. Import the key material to AWS KMS whenever the application team needs access. Grant the application team permissions to use the CMK.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 366 discussion",
      "discusstion": [
        {
          "id": 733352,
          "date": "Fri 02 Dec 2022 03:26",
          "username": "tainh",
          "content": "C is correct<br>https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 947042,
          "date": "Sun 09 Jul 2023 11:05",
          "username": "lucesarano",
          "content": "I think C is correct but I think it's one individual grant per CMK.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914278,
          "date": "Sun 04 Jun 2023 11:08",
          "username": "Toptip",
          "content": "C .. easy one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 892321,
          "date": "Mon 08 May 2023 18:14",
          "username": "ITGURU51",
          "content": "The security team can create a key grant to allow the application team to use the CMKs and revoke the grant when the application team no longer needs access. This solution provides temporary access to the CMKs with minimal overhead. C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 837084,
          "date": "Sun 12 Mar 2023 15:02",
          "username": "Artaggedon",
          "content": "D - INCORRECT since it has a lot of overhead. You don't need to create keys outside KMS, you don't benefit from it in this scenario.<br>A - INCORRECT since you can't export key material from KMS.<br>Between B and C, C has less overhead and it's less dangerous. You can lock yourself out from a key by editing it's policy, but such thing doesn't happen with grants. Also, keys can have multiple grants, which makes them more handy when giving programmatic access.<br><br>C is the CORRECT one for me.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 826015,
          "date": "Wed 01 Mar 2023 16:23",
          "username": "Ell89",
          "content": "if a potential answer includes grants, its probably that.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 811095,
          "date": "Thu 16 Feb 2023 21:59",
          "username": "PatrickLi",
          "content": "Voting for B. See this repost: https://repost.aws/questions/QUAVB2guDnTwCGCSGbbaxNyw/aws-sso-with-microsoft-ad-as-id-p<br>I don't know why so many people chose C? The question asks for \\\"least overhead\\\" and you use a self-managed AD? Really?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>THIS IS DIFFERENT Q</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858583,
          "date": "Sun 02 Apr 2023 08:49",
          "username": "TE12",
          "content": "THIS IS DIFFERENT Q",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 759951,
          "date": "Wed 28 Dec 2022 15:36",
          "username": "must_be_rohit",
          "content": "but it says LEAST overhead so i will change to C and use grants",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 759944,
          "date": "Wed 28 Dec 2022 15:34",
          "username": "must_be_rohit",
          "content": "a specific need in the question is : Members of the security team must be the only ones to administer the CMKs<br>for admin purpose its HSM.. thus A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't export key material from KMS (unless you've previously imported it). So A is not possible, therefore it's incorrect.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837066,
          "date": "Sun 12 Mar 2023 14:50",
          "username": "Artaggedon",
          "content": "You can't export key material from KMS (unless you've previously imported it). So A is not possible, therefore it's incorrect.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723024,
          "date": "Sun 20 Nov 2022 22:24",
          "username": "AdamWest",
          "content": "C -- 100%<br>https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722972,
          "date": "Sun 20 Nov 2022 21:07",
          "username": "Shriraj32",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#367",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to prevent SSH access through the use of SSH key pairs for any Amazon Linux 2 Amazon EC2 instances in its AWS account. However, a system administrator occasionally will need to access these EC2 instances through SSH in an emergency. For auditing purposes, the company needs to record any commands that a user runs in an EC2 instance.<br><br>What should a security engineer do to configure access to these EC2 instances to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#367",
          "answers": [
            {
              "choice": "<p>Use the EC2 serial console. Configure the EC2 serial console to save all commands that are entered to an Amazon S3 bucket. Provide the EC2 instances with an IAM role that allows the EC2 serial console to access Amazon S3. Configure an IAM account for the system administrator. Provide an IAM policy that allows the IAM account to use the EC2 serial console,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use EC2 Instance Connect. Configure EC2 Instance Connect to save all commands that are entered to Amazon CloudWatch Logs. Provide the EC2 instances with an IAM role that allows the EC2 Instances to access CloudWatch Logs. Configure an IAM account for the system administrator. Provide an IAM policy that allows the IAM account to use EC2 Instance Connect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an EC2 key pair with an EC2 instance that needs SSH access. Access the EC2 instance with this key pair by using SSH. Configure the EC2 instance to save all commands that are entered to Amazon CloudWatch Logs. Provide the EC2 instance with an IAM role that allows the EC2 instance to access Amazon S3 and CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Session Manager. Configure Session Manager to save all commands that are entered in a session to an Amazon S3 bucket. Provide the EC2 instances with an IAM role that allows Systems Manager to manage the EC2 instances. Configure an IAM account for the system administrator. Provide an IAM policy that allows the IAM account to use Session Manager.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 367 discussion",
      "discusstion": [
        {
          "id": 723505,
          "date": "Mon 21 Nov 2022 14:01",
          "username": "luisfsm",
          "content": "I think it's D. With Session Manager, any command can be sent to S3 or CloudWatch logs, while on Instance Connect only the API requests are sent to Cloudtrail.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726349,
          "date": "Fri 25 Nov 2022 03:26",
          "username": "AdamWest",
          "content": "I agree.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914281,
          "date": "Sun 04 Jun 2023 11:11",
          "username": "Toptip",
          "content": "D<br>Steps To log session data using Amazon S3 (console)<br>Open the AWS Systems Manager console at https://console.aws.amazon.com/systems-manager/.<br><br>In the navigation pane, choose Session Manager.<br><br>Choose the Preferences tab, and then choose Edit.<br><br>Select the check box next to Enable under S3 logging.<br><br>(Recommended) Select the check box next to Allow only encrypted S3 buckets. With this option turned on, log data is encrypted using the server-side encryption key specified for the bucket. If you don't want to encrypt the log data that is sent to Amazon S3, clear the check box. You must also clear the check box if encryption isn't allowed on the S3 bucket.<br><br>For S3 bucket name, select one of the following:",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 892325,
          "date": "Mon 08 May 2023 18:21",
          "username": "ITGURU51",
          "content": "To meet the requirements of preventing SSH access through the use of SSH key pairs while still allowing occasional emergency access by a system administrator and recording any commands that a user runs in an EC2 instance for auditing purposes, a security engineer should use AWS Systems Manager Session Manager. They should configure Session Manager to save all commands that are entered in a session to an Amazon S3 bucket.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 757346,
          "date": "Mon 26 Dec 2022 11:19",
          "username": "KarthikRaveRaam",
          "content": "Agree with D. But this statement is my concern<br>\\\"However, a system administrator occasionally will need to access these EC2 instances through SSH in an emergency.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"You can allow users in your AWS account to use the AWS Command Line Interface (AWS CLI) to establish Secure Shell (SSH) connections to managed nodes using AWS Systems Manager Session Manager.\\\"<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 764309,
          "date": "Tue 03 Jan 2023 09:11",
          "username": "secdaddy",
          "content": "\\\"You can allow users in your AWS account to use the AWS Command Line Interface (AWS CLI) to establish Secure Shell (SSH) connections to managed nodes using AWS Systems Manager Session Manager.\\\"<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 733359,
          "date": "Fri 02 Dec 2022 03:37",
          "username": "tainh",
          "content": "D is correct<br>1. prevent SSH access: use Session Manager (SSM)<br>2. record any command that users runs in an EC2 Instance: save all command to S3 buckets<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732263,
          "date": "Thu 01 Dec 2022 05:57",
          "username": "landsamboni",
          "content": "Should be D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728995,
          "date": "Mon 28 Nov 2022 12:03",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726348,
          "date": "Fri 25 Nov 2022 03:26",
          "username": "AdamWest",
          "content": "D - After review I agree it should be D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726236,
          "date": "Thu 24 Nov 2022 23:07",
          "username": "Isaias",
          "content": "I agree with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723026,
          "date": "Sun 20 Nov 2022 22:28",
          "username": "AdamWest",
          "content": "B --75%<br>https://medium.com/the-scale-factory/should-you-use-aws-ec2-instance-connect-to-ssh-into-your-instances-5c13b5fd565a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#368",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps team is planning to deploy a containerized application on Amazon Elastic Container Service (Amazon ECS). The team will use an Application Load Balancer (ALB) to distribute the incoming traffic for the ECS application. A security engineer needs to terminate the TLS traffic at the ALB to ensure security of data in transit.<br><br>Which solutions can the security engineer use to create a certificate and deploy the certificate at the ALB to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#368",
          "answers": [
            {
              "choice": "<p>Use TLS tools to create a certificate signing request (CSR). Get the CSR signed by a certificate authority (CA) to produce a certificate. Import the certificate into AWS Certificate Manager (ACM).Specify the certificate for the TLS listener on the ALB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to request a certificate. Specify the certificate fort the TLS listener on the ALB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Key Management Service (AWS KMS) tools to create a certificate signing request (CSR). Get the CSR signed by a certificate authority (CA) to produce a certificate. Import the certificate into AWS Certificate Manager (ACM). Specify the certificate for the TLS listener on the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure automatic TLS support in the ECS cluster. Configure the ALB to pass the TLS connection to the containers in the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate a certificate while creating the ECS cluster. Import the certificate into AWS Certificate Manager (ACM). Specify the certificate for the TLS listener on the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 368 discussion",
      "discusstion": [
        {
          "id": 733369,
          "date": "Fri 02 Dec 2022 03:55",
          "username": "tainh",
          "content": "A, B are correct<br><br>We recommend that you create certificates for your load balancer using AWS Certificate Manager (ACM). ACM supports RSA certificates with 2048, 3072, and 4096-bit key lengths, and all ECDSA certificates. ACM integrates with Elastic Load Balancing so that you can deploy the certificate on your load balancer. For more information, see the AWS Certificate Manager User Guide.<br><br>Alternatively, you can use SSL/TLS tools to create a certificate signing request (CSR), then get the CSR signed by a CA to produce a certificate, then import the certificate into ACM or upload the certificate to AWS Identity and Access Management (IAM).<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1094800,
          "date": "Tue 12 Dec 2023 18:42",
          "username": "Raphaello",
          "content": "AB<br>AWS KMS cannot be used to issue CSR.<br>However, ALB is a L7 LB, so there's no \\\"TLS listener\\\" on it. TLS listener is used with NLB (L4 LB) for TLS termination on NLB; but still B is better option than the rest.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 929420,
          "date": "Wed 21 Jun 2023 13:37",
          "username": "vherman",
          "content": "there is no such thing as TLS listener on the ALB<br>there is HTTPS listener",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914312,
          "date": "Sun 04 Jun 2023 11:39",
          "username": "Toptip",
          "content": "A and B - use a tool (Not ACM) to create CSR then sign it and import to ACM or Generate a Certificate directly with ACM",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 892334,
          "date": "Mon 08 May 2023 18:32",
          "username": "ITGURU51",
          "content": "AB are obvious choices here. We can either create a certificate signing request or use AWS Certificate Manager to generate the certificate for the ELB. (Elastic Load Balancer) The AWS best practice is to use ACM to create or import certificates for the load balancer. To deploy a certificate on the load balancer the cert must be in the same region as the ELB.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 802255,
          "date": "Wed 08 Feb 2023 17:29",
          "username": "Smartphone",
          "content": "This question is really tricky. The question answers what are the methods to \\\"create a certificate and deploy the certificate at the ALB\\\"...<br>So the options A and B are two solutions to create certificate and deploy it at the ALB<br>Answers: A & B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729003,
          "date": "Mon 28 Nov 2022 12:07",
          "username": "D2",
          "content": "A and B are two separate solutions (not a combination) to achieve the same.<br><br>There is no requirement to encrypt from ALB to containers running in ECS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 726352,
          "date": "Fri 25 Nov 2022 03:30",
          "username": "AdamWest",
          "content": "BD - Use ACM for Encryption in transit.<br>https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It=C2=B4s a tricky question, because the ALB cannot passthrough the SSL connection just the NLB can do it,or with the ALB create the Target groups with https protocol to keep the security data intransit</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 727170,
          "date": "Sat 26 Nov 2022 01:17",
          "username": "Isaias",
          "content": "It=C2=B4s a tricky question, because the ALB cannot passthrough the SSL connection just the NLB can do it,or with the ALB create the Target groups with https protocol to keep the security data intransit",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726242,
          "date": "Thu 24 Nov 2022 23:17",
          "username": "Isaias",
          "content": "AB<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#369",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web server in the AWS Cloud. The company will store the content for the web server in an Amazon S3 bucket. A security engineer must use an Amazon CloudFront distribution to speed up delivery of the content. None of the files can be publicly accessible from the S3 bucket direct.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#369",
          "answers": [
            {
              "choice": "<p>Configure the permissions on the individual files in the S3 bucket so that only the CloudFront distribution has access to them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an origin access identity (OAI). Associate the OAI with the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI can access the files in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 role in AWS Identity and Access Management (IAM). Allow only the CloudFront distribution to assume the role to access the files in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 bucket policy that uses only the CloudFront distribution ID as the principal and the Amazon Resource Name (ARN) as the target.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 369 discussion",
      "discusstion": [
        {
          "id": 914316,
          "date": "Sun 04 Jun 2023 11:40",
          "username": "Toptip",
          "content": "B easy one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 912566,
          "date": "Fri 02 Jun 2023 07:53",
          "username": "Tofu13",
          "content": "Deprecated, use OAC instead.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826024,
          "date": "Wed 01 Mar 2023 16:28",
          "username": "Ell89",
          "content": "B - OAI's",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733374,
          "date": "Fri 02 Dec 2022 04:00",
          "username": "tainh",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732269,
          "date": "Thu 01 Dec 2022 06:05",
          "username": "landsamboni",
          "content": "Answer B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 729006,
          "date": "Mon 28 Nov 2022 12:09",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724896,
          "date": "Wed 23 Nov 2022 06:09",
          "username": "Isaias",
          "content": "B, OAI the key",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723097,
          "date": "Mon 21 Nov 2022 01:39",
          "username": "AdamWest",
          "content": "B - 100%<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#370",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon API Gateway API invokes an AWS Lambda function that needs to interact with a software-as-a-service (SaaS) platform. A unique client token is generated in the SaaS platform to grant access to the Lambda function. A security engineer needs to design a solution to encrypt the access token at rest and pass the token to the Lambda function at runtime.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#370",
          "answers": [
            {
              "choice": "<p>Store the client token as a secret in AWS Secrets Manager. Use the AWS SDK to retrieve the secretin the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a token-based Lambda authorizer in API Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the client token as a SecureString parameter in AWS Systems Manager Parameter Store. Use the AWS SDK to retrieve the value of the SecureString parameter in the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Key Management Service (AWS KMS) to encrypt the client token. Pass the token to the Lambda function at runtime through an environment variable.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 370 discussion",
      "discusstion": [
        {
          "id": 914317,
          "date": "Sun 04 Jun 2023 11:42",
          "username": "Toptip",
          "content": "Param store - SecureString is FREE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 892364,
          "date": "Mon 08 May 2023 19:04",
          "username": "ITGURU51",
          "content": "The most cost-effective solution to meet these requirements would be to store the client token as a SecureString parameter in AWS Systems Manager Parameter Store and use the AWS SDK to retrieve the value of the SecureString parameter in the Lambda function.C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 826026,
          "date": "Wed 01 Mar 2023 16:30",
          "username": "Ell89",
          "content": "C<br>for cost effectiveness, systems manager parameter store trumps secrets manager",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764332,
          "date": "Tue 03 Jan 2023 09:45",
          "username": "secdaddy",
          "content": "A unique client token is generated in the SaaS platform to grant access to the Lambda function<br><br>(0) most cost effective solution to (1) encrypt the access token at rest and (2) pass the token to the Lambda function at runtime<br><br>Unless I am mistaken a Lamda authorizer is Lambda side auth before execution of a Lambda function, not auth of Lambda to the SaaS application.If so, this eliminates B.<br>A Secrets Manager & C Parameter Store seem to both be possible. Parameter Store is free, Secrets Manager is not so between these C is better but both incur some cost by using the AWS SDK.<br>D seems possible but has a cost per key<br>https://medium.com/@kush.saraiya/encrypting-environment-variables-in-aws-lambda-function-e09cdde9fef1<br><br>Hard to evaluate the costs on this but I think the 'MOST cost-effectively' is a hint to choose Parameter Store so I think C is the best answer. (disclaimer I have never worked with any of this and am just reading documentation)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Clarification - I read this \\\"A unique client token is generated in the SaaS platform to grant access to the Lambda function\\\" to mean that the token is used by the Lambda function to access the SaaS application, not the other way around.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 764337,
          "date": "Tue 03 Jan 2023 09:49",
          "username": "secdaddy",
          "content": "Clarification - I read this \\\"A unique client token is generated in the SaaS platform to grant access to the Lambda function\\\" to mean that the token is used by the Lambda function to access the SaaS application, not the other way around.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755186,
          "date": "Sat 24 Dec 2022 22:49",
          "username": "Fyssy",
          "content": "A Lambda authorizer is useful if you want to implement a custom authorization scheme that uses a bearer token authentication strategy such as OAuth or SAML, or that uses request parameters to determine the caller's identity.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754971,
          "date": "Sat 24 Dec 2022 16:44",
          "username": "Kevin24",
          "content": "Why B isn't a valid option? Is it because request need to come from 3rd party SAAS solution?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733377,
          "date": "Fri 02 Dec 2022 04:02",
          "username": "tainh",
          "content": "C , most cost-effectively<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And encrypted at rest.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764088,
          "date": "Mon 02 Jan 2023 23:41",
          "username": "Wilson_S",
          "content": "And encrypted at rest.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724897,
          "date": "Wed 23 Nov 2022 06:12",
          "username": "Isaias",
          "content": "Agree with C, cost-effectively",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723511,
          "date": "Mon 21 Nov 2022 14:04",
          "username": "luisfsm",
          "content": "Agree with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723098,
          "date": "Mon 21 Nov 2022 01:41",
          "username": "AdamWest",
          "content": "C -90%<br>https://aws.amazon.com/systems-manager/pricing/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#371",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple departments. Each department has its own AWS account. All these accounts belong to the same organization in AWS Organizations.<br><br>A large .csv file is stored in an Amazon S3 bucket in the sales department's AWS account. The company wants to allow users from the other accounts to access the .csv file's content through the combination of AWS Glue and Amazon Athena. However, the company does not want to allow users from the other accounts to access other files in the same folder.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Apply a user policy in the other accounts to allow AWS Glue and Athena to access the .csv file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Select to restrict access to the .csv file. In AWS Glue Data Catalog, use S3 Select as the source of the AWS Glue database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define an AWS Glue Data Catalog resource policy in AWS Glue to grant cross-account S3 object access to the .csv file.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Grant AWS Glue access to Amazon S3 in a resource-based policy that specifies the organization as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 371 discussion",
      "discusstion": [
        {
          "id": 733412,
          "date": "Fri 02 Dec 2022 04:29",
          "username": "tainh",
          "content": "C is correct<br>https://aws.amazon.com/blogs/big-data/query-cross-account-aws-glue-data-catalogs-using-amazon-athena/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915700,
          "date": "Mon 05 Jun 2023 21:24",
          "username": "p4v10",
          "content": "C is the right answer for this",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 892424,
          "date": "Mon 08 May 2023 20:13",
          "username": "ITGURU51",
          "content": "C grants cross account access to the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842115,
          "date": "Fri 17 Mar 2023 17:09",
          "username": "c73bf38",
          "content": "Cross-Accountmultiple departments and accounts",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744742,
          "date": "Wed 14 Dec 2022 06:19",
          "username": "AWS_SJ",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 730381,
          "date": "Tue 29 Nov 2022 13:41",
          "username": "Teknoklutz",
          "content": "https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue-cross-account.html",
          "upvote_count": "3",
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
      "question_text": "<p>A company has multiple accounts in the AWS Cloud. Users in the developer account need to have access to specific resources in the production account.<br><br>What is the MOST secure way to provide this access?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#372",
          "answers": [
            {
              "choice": "<p>Create one IAM user in the production account. Grant the appropriate permissions to the resources that are needed. Share the password only with the users that need access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create cross-account access with an IAM role in the developer account. Grant the appropriate permissions to this role. Allow users in the developer account to assume this role to access the production resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create cross-account access with an IAM user account in the production account. Grant the appropriate permissions to this user account. Allow users in the developer account to use this user account to access the production resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create cross-account access with an IAM role in the production account. Grant the appropriate permissions to this role. Allow users in the developer account to assume this role to access the production resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 372 discussion",
      "discusstion": [
        {
          "id": 724905,
          "date": "Wed 23 Nov 2022 06:27",
          "username": "Isaias",
          "content": "D, create role on destination account, grant access to the rol, permit developer user assume permisions<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914331,
          "date": "Sun 04 Jun 2023 11:55",
          "username": "Toptip",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 892503,
          "date": "Mon 08 May 2023 22:49",
          "username": "ITGURU51",
          "content": "The IAM role should be created where the resource is located. In this particular case, users from the developer account need access to the production resource. Therefore, the cross account with the IAM role should be assigned to the production account. D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 733415,
          "date": "Fri 02 Dec 2022 04:31",
          "username": "tainh",
          "content": "D is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728955,
          "date": "Mon 28 Nov 2022 11:03",
          "username": "D2",
          "content": "Answer D<br><br>why all answers are wrong here<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>because it's cheaper for examtopics to get the right answers from us, later updating their answers to match what we agree on ;-)</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764387,
          "date": "Tue 03 Jan 2023 11:04",
          "username": "secdaddy",
          "content": "because it's cheaper for examtopics to get the right answers from us, later updating their answers to match what we agree on ;-)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725291,
          "date": "Wed 23 Nov 2022 18:20",
          "username": "Shriraj32",
          "content": "Yup D it is",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#373",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is attempting to troubleshoot a problem. An application that runs on an Amazon EC2 instance in a VPC cannot communicate with an Amazon RDS DB instance in another subnet of the same VPC. The connection request is timing out.<br><br>Which issues could be causing this problem? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#373",
          "answers": [
            {
              "choice": "<p>The application instance's security group is not allowing outbound traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The network ACL of the application instance's subnet is not allowing traffic between the application and the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The VPC's route table is not configured correctly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>There is no peering connection between the application and the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The DB instance's security group is not allowing outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 373 discussion",
      "discusstion": [
        {
          "id": 724908,
          "date": "Wed 23 Nov 2022 06:34",
          "username": "Isaias",
          "content": "AB<br>C incorrect - route table are attached on subnet not vpc<br>D incorrect - same vpc you dont need peering<br>E incorrect - the outbound traffic rules typically don't apply to DB instances.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I must say, VPC's have defaut Route Tables, so I don't see that argument fit.<br><br>If you ask me, I doubt between A, B and C, but i go for A and B since it's the first place I go check to troubleshoot. But I have nothing to back that claim with.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 837115,
          "date": "Sun 12 Mar 2023 15:34",
          "username": "Artaggedon",
          "content": "I must say, VPC's have defaut Route Tables, so I don't see that argument fit.<br><br>If you ask me, I doubt between A, B and C, but i go for A and B since it's the first place I go check to troubleshoot. But I have nothing to back that claim with.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1108521,
          "date": "Fri 29 Dec 2023 10:22",
          "username": "yorkicurke",
          "content": "Option C & D can be easily ruled out the fact that both are in the same VPC:<br><br>They should be able to communicate with each other without needing specific route table entries.<br><br>Since the application and the DB instance are in the same VPC, a peering connection is not necessary.<br><br>Option E:<br>The DB instance's security group would need to allow inbound traffic (not outbound) from the application for a connection to be established.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 892504,
          "date": "Mon 08 May 2023 22:57",
          "username": "ITGURU51",
          "content": "The questions states that the EC2 instance cannot communicate with the RDS database.<br>A) check the security group-outbound rule-EC2 instance<br>B) check the NACL associated with the EC2 instance",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 867716,
          "date": "Wed 12 Apr 2023 00:54",
          "username": "nairj",
          "content": "A and B . C - route tables are attached to the subnet.<br>D and E don't make sense.<br>E - SGs are stateful, if a traffic is allowed to flow in, it is allowed to flow out.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 739503,
          "date": "Thu 08 Dec 2022 22:56",
          "username": "maddyr",
          "content": "agree with A, B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 728957,
          "date": "Mon 28 Nov 2022 11:06",
          "username": "D2",
          "content": "Answer AB",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 723100,
          "date": "Mon 21 Nov 2022 01:52",
          "username": "AdamWest",
          "content": "AB - 70%",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#374",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a requirement that no Amazon EC2 security group can allow SSH access from the CIDR block 0.0.0.0/0. The company wants to monitor compliance with this requirement at all times and wants to receive a near-real-time notification if any security group is noncompliant.<br><br>A security engineer has configured AWS Config and will use the restricted-ssh managed rule to monitor the security groups.<br><br>What should the security engineer do next to meet these requirements?</p>",
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
              "choice": "<p>Configure AWS Config to send its configuration snapshots to an Amazon S3 bucket. Create an AWS Lambda function to run on a PutEvent to the S3 bucket. Configure the Lambda function to parse the snapshot for a compliance change to the restricted-ssh managed rule. Configure the Lambda function to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic if a change is discovered.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon EventBridge (Amazon CloudWatch Events) event rule that is invoked by a compliance change event from AWS Config for the restricted-ssh managed rule. Configure the event rule to target an Amazon Simple Notification Service (Amazon SNS) topic that will provide a notification.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Config to push all its compliance notifications to Amazon CloudWatch Logs. Configure a CloudWatch Logs metric filter on the AWS Config log group to look for a compliance notification change on the restricted-ssh managed rule. Create an Amazon CloudWatch alarm on the metric filter to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic if the alarm is in the ALARM state.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon CloudWatch alarm on the CloudWatch metric for the restricted-ssh managed rule. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic if the alarm is in the ALARM state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 374 discussion",
      "discusstion": [
        {
          "id": 723101,
          "date": "Mon 21 Nov 2022 01:53",
          "username": "AdamWest",
          "content": "B - 100%<br>https://aws.amazon.com/premiumsupport/knowledge-center/config-resource-non-compliant/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914340,
          "date": "Sun 04 Jun 2023 12:00",
          "username": "Toptip",
          "content": "B no doubts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 892507,
          "date": "Mon 08 May 2023 23:02",
          "username": "ITGURU51",
          "content": "Near real time anythingevent bridge.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 803510,
          "date": "Thu 09 Feb 2023 18:11",
          "username": "milofficial",
          "content": "keyword near real-time -> event bridge<br>so its b",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739513,
          "date": "Thu 08 Dec 2022 23:05",
          "username": "maddyr",
          "content": "B all the way",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733482,
          "date": "Fri 02 Dec 2022 07:03",
          "username": "tainh",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724912,
          "date": "Wed 23 Nov 2022 06:36",
          "username": "Isaias",
          "content": "B for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#375",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a web application that runs on Amazon EC2 instances. The application listens on port 80 and port 443. The company uses an Application Load Balancer (ALB) with AWS WAF to terminate SSL and to forward traffic to the application instances only on port 80.<br><br>The ALB is in public subnets that are associated with a network ACL that is named NACL. The application instances are in dedicated private subnets that are associated with a network ACL that is named NACL2. An Amazon RDS for PostgreSQL DB instance that uses port 5432 is in a dedicated private subnet that is associated with a network ACL that is named NACL3. All the network ACLs currently allow all inbound and outbound traffic.<br><br>Which set of network ACL changes will increase the security of the application while ensuring functionality?</p>",
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
              "choice": "<p>Make the following changes to NACL3:Add a rule that allows inbound traffic on port 5432 from NACL2.Add a rule that allows outbound traffic on ports 1024-65536 to NACL2.Remove the default rules that allow all inbound and outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Make the following changes to NACL3:Add a rule that allows inbound traffic on port 5432 from the CIDR blocks of the application instance subnets.Add a rule that allows outbound traffic on ports 1024-65536 to the application instance subnets.Remove the default rules that allow all inbound and outbound traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Make the following changes to NACL2:Add a rule that allows outbound traffic on port 5432 to the CIDR blocks of the RDS subnets.Remove the default rules that allow all inbound and outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Make the following changes to NACL2:Add a rule that allows inbound traffic on port 5432 from the CIDR blocks of the RDS subnets.Add a rule that allows outbound traffic on port 5432 to the RDS subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 375 discussion",
      "discusstion": [
        {
          "id": 726256,
          "date": "Fri 25 Nov 2022 00:05",
          "username": "Isaias",
          "content": "B correct.<br>A incorrect cannot attach acl in other acl<br> C incorrect the app instances need outbound traffic to respond connection to alb<br>D same C escenario",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 947361,
          "date": "Sun 09 Jul 2023 17:07",
          "username": "Hishamov88",
          "content": "B with a remark that the ephemeral port range is \\\"1024-65535\\\" not \\\"1024-65536\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914349,
          "date": "Sun 04 Jun 2023 12:05",
          "username": "Toptip",
          "content": "B only one that makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 867741,
          "date": "Wed 12 Apr 2023 01:36",
          "username": "nairj",
          "content": "Answer is B : Add the subnet range of NACL 2 to NACL 3 with the required port information, and set-up inbound and outbound.<br>A - Can not attach NACL<br>C and D - The app subnet NACLs are not propoerly configured.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733491,
          "date": "Fri 02 Dec 2022 07:18",
          "username": "tainh",
          "content": "B is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 726358,
          "date": "Fri 25 Nov 2022 03:45",
          "username": "AdamWest",
          "content": "I also have B as the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#376",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer has designed a VPC to segment private traffic from public traffic. The VPC includes two Availability Zones. The security engineer has provisioned each Availability Zone with one private subnet and one public subnet. The security engineer has created three route tables for use with the environment. One route table is for the public subnets, and two route tables are for the private subnets (one route table for the private subnet in each Availability Zone).<br><br>The security engineer discovers that all four subnets are attempting to route traffic out though the internet gateway that is attached to the VPC.<br><br>Which combination of steps should the security engineer take to remediate this scenario? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#376",
          "answers": [
            {
              "choice": "<p>Verify that a NAT gateway has been provisioned in the public subnet in each Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that a NAT gateway has been provisioned in the private subnet in each Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the route tables that are associated with each of the public subnets. Create a new route for local destinations to the VPC CIDR range.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the route tables that are associated with each of the private subnets. Create a new route for the destination 0.0.0.0/0. Specify the NAT gateway in the public subnet of the same Availability Zone as the target of the route<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the route tables that ae associated with each of the private subnets. Create a new route for the destination 0.0.0.0/0. Specify the internet gateway in the public subnet of the same Availability Zone as the target of the route.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 376 discussion",
      "discusstion": [
        {
          "id": 724002,
          "date": "Tue 22 Nov 2022 01:40",
          "username": "AdamWest",
          "content": "AD -<br>A NAT Gateway is an AWS service that allows a private subnet to have access to the Internet, but prevents the Internet from initiating a connection directly to the instances.<br><br>While the NAT Gateway is needed for private subnets to have Internet access, it is created in a public subnet<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're right!</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 724344,
          "date": "Tue 22 Nov 2022 14:43",
          "username": "luisfsm",
          "content": "You're right!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 934111,
          "date": "Mon 26 Jun 2023 08:30",
          "username": "Green53",
          "content": "NAT GW needs to exist in the public subnet.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 914391,
          "date": "Sun 04 Jun 2023 12:34",
          "username": "Toptip",
          "content": "well.. it's A+D correct, even though from the question i understood that the security engineer don't want public access (so why NAT is needed?)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 784359,
          "date": "Sun 22 Jan 2023 14:53",
          "username": "sakibmas",
          "content": "The dafault gateway of private subnet is NAT gateway",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 739527,
          "date": "Thu 08 Dec 2022 23:22",
          "username": "maddyr",
          "content": "A and D 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733500,
          "date": "Fri 02 Dec 2022 07:29",
          "username": "tainh",
          "content": "A,D are correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 728965,
          "date": "Mon 28 Nov 2022 11:19",
          "username": "D2",
          "content": "Answer: AD",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 725293,
          "date": "Wed 23 Nov 2022 18:23",
          "username": "Shriraj32",
          "content": "Yup A and D, it's common sense",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 724915,
          "date": "Wed 23 Nov 2022 06:48",
          "username": "Isaias",
          "content": "I agree A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 723529,
          "date": "Mon 21 Nov 2022 14:14",
          "username": "luisfsm",
          "content": "Looks like B-D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changed to A-D</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 724345,
          "date": "Tue 22 Nov 2022 14:44",
          "username": "luisfsm",
          "content": "Changed to A-D",
          "upvote_count": "3",
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
      "question_text": "<p>A company has decided to use AWS Key Management Service (AWS KMS) for all of its encryption keys. The company plans to create all of its keys as customer managed CMKs and will not import any encryption keys. The company must rotate its encryption keys once every 12 months.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#377",
          "answers": [
            {
              "choice": "<p>Change the customer managed CMK key policy to enable automatic key rotation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS managed CMKs instead of customer managed CMKs so that AWS will rotate the keys automatically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Invoke an AWS Lambda function regularly to rotate the backing key of each customer managed CMK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable automatic key rotation for each customer managed CMK after it has been created in AWS KMS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 377 discussion",
      "discusstion": [
        {
          "id": 934109,
          "date": "Mon 26 Jun 2023 08:28",
          "username": "Green53",
          "content": "D is correct.<br>A - You don't change the policy to enable rotation, it's done on creation<br>B - Customer Managed, so not AWS Managed<br>C - Not required<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>to add to your comment once the customer managed CMK key is created, the option for \\\"rotation\\\" will be greyed out meaning not possible to change. just to clarify. thanks your comment.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1108544,
          "date": "Fri 29 Dec 2023 10:51",
          "username": "yorkicurke",
          "content": "to add to your comment once the customer managed CMK key is created, the option for \\\"rotation\\\" will be greyed out meaning not possible to change. just to clarify. thanks your comment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914395,
          "date": "Sun 04 Jun 2023 12:36",
          "username": "Toptip",
          "content": "D is correct... \\\"not import any encryption keys\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 912760,
          "date": "Fri 02 Jun 2023 13:07",
          "username": "Tofu13",
          "content": "Don't like this question.<br>From the given information u could use AWS managed CMKs as well and more effective since keys are rotated automatically and u don't need to import any encryption keys. Of course there are more differences like being able to edit key policy etc. but again no information. However, as the question states that they plan to use customer managed keys I ll go with D. Though AWS likes to prefer their managed solutions...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 767008,
          "date": "Thu 05 Jan 2023 20:46",
          "username": "Leonardocp33",
          "content": "D for sure, the same question said \\\"The company plans to create all of its keys as customer managed CMKs\\\" just need enable auto rotation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733505,
          "date": "Fri 02 Dec 2022 07:37",
          "username": "tainh",
          "content": "D is correct<br>Customer-managed CMK will rotate once a year automatically through opt-in or on-demand<br>manually ( aws-kms-best-practices)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724919,
          "date": "Wed 23 Nov 2022 06:56",
          "username": "Isaias",
          "content": "D<br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723110,
          "date": "Mon 21 Nov 2022 02:08",
          "username": "AdamWest",
          "content": "D - 100%",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723108,
          "date": "Mon 21 Nov 2022 02:06",
          "username": "AdamWest",
          "content": "A:<br>Automatic key rotation is disabled by default on customer managed keys but authorized users can enable and disable it. When you enable (or re-enable) automatic key rotation, AWS KMS automatically rotates the KMS key one year (approximately 365 days) after the enable date and every year thereafter<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DIs correct. A was an accident:<br>D: Automatic key rotation is disabled by default on customer managed keys but authorized users can enable and disable it. When you enable (or re-enable) automatic key rotation, AWS KMS automatically rotates the KMS key one year (approximately 365 days) after the enable date and every year thereafter</li><li>WHy not B ?</li><li>the B would refers use AWS Managed Key (there=C2=B4s no exist AWS Managed CMK)<br>and the question says\\\"The company plans to create all of its keys as customer managed CMKs\\\", (notAWS Managed Key), so it could not be B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723109,
          "date": "Mon 21 Nov 2022 02:07",
          "username": "AdamWest",
          "content": "DIs correct. A was an accident:<br>D: Automatic key rotation is disabled by default on customer managed keys but authorized users can enable and disable it. When you enable (or re-enable) automatic key rotation, AWS KMS automatically rotates the KMS key one year (approximately 365 days) after the enable date and every year thereafter<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WHy not B ?</li><li>the B would refers use AWS Managed Key (there=C2=B4s no exist AWS Managed CMK)<br>and the question says\\\"The company plans to create all of its keys as customer managed CMKs\\\", (notAWS Managed Key), so it could not be B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730864,
          "date": "Tue 29 Nov 2022 22:28",
          "username": "Teknoklutz",
          "content": "WHy not B ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the B would refers use AWS Managed Key (there=C2=B4s no exist AWS Managed CMK)<br>and the question says\\\"The company plans to create all of its keys as customer managed CMKs\\\", (notAWS Managed Key), so it could not be B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732137,
          "date": "Thu 01 Dec 2022 02:18",
          "username": "Isaias",
          "content": "the B would refers use AWS Managed Key (there=C2=B4s no exist AWS Managed CMK)<br>and the question says\\\"The company plans to create all of its keys as customer managed CMKs\\\", (notAWS Managed Key), so it could not be B",
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
      "question_text": "<p>A security engineer needs to implement a solution to create and control the keys that a company uses for cryptographic operations. The security engineer must create symmetric keys in which the key material is generated and used within a custom key store that is backed by an AWS CloudHSM cluster.<br><br>The security engineer will use symmetric and asymmetric data key pairs for local use within applications. The security engineer also must audit the use of the keys.<br><br>How can the security engineer meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#378",
          "answers": [
            {
              "choice": "<p>To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon Athena.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>To create the keys, use Amazon S3 and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 378 discussion",
      "discusstion": [
        {
          "id": 723115,
          "date": "Mon 21 Nov 2022 02:15",
          "username": "AdamWest",
          "content": "D - You can monitor AWS KMS with Cloudtrail (API logs), Cloudwatch (Monitor,Store logs from Cloudtrail), Eventbridge (rotated,deleted or imported), Cloudwatch metrics (Performance) and alarms (Watch metrics then preform actions based on metrics.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 934107,
          "date": "Mon 26 Jun 2023 08:26",
          "username": "Green53",
          "content": "The answers calls for the creation of symmetric and storing of asymmetric.<br><br>AWS KMS supports asymmetric KMS keys that represent a mathematically related RSA, elliptic curve (ECC), or SM2 (China Regions only) public and private key pair. These key pairs are generated in AWS KMS hardware security modules certified under the FIPS 140-2 Cryptographic Module Validation Program, except in the China (Beijing) and China (Ningxia) Regions. The private key never leaves the AWS KMS HSMs unencrypted.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html<br><br>So we're definitely using KMS.The option is where best to audit the use of the keys. CloudTrail is the best option, so D.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914431,
          "date": "Sun 04 Jun 2023 12:57",
          "username": "Toptip",
          "content": "I think B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 874454,
          "date": "Wed 19 Apr 2023 11:30",
          "username": "amaltare",
          "content": "requirement here is for both symmetric and asymmetric key pairs, so and a custom key store with KMS doesn't support that, it only supports Symmetric key pairs<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>KMS is for creating the keys, not store them</li><li>Agree. To add on with the link. https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 879630,
          "date": "Mon 24 Apr 2023 20:28",
          "username": "gerches",
          "content": "KMS is for creating the keys, not store them",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 878347,
          "date": "Sun 23 Apr 2023 14:38",
          "username": "Kezuko",
          "content": "Agree. To add on with the link. https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 764635,
          "date": "Tue 03 Jan 2023 13:45",
          "username": "secdaddy",
          "content": "Would logging come from KMS where they keys are created or rather from CloudHSM, as that's where the keys are to be stored?<br>Either way I agree D as CloudHSM also works with CloudTrail<br>https://docs.aws.amazon.com/cloudhsm/latest/userguide/get-api-logs-using-cloudtrail.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 747082,
          "date": "Fri 16 Dec 2022 12:05",
          "username": "eji",
          "content": "CloudTrail can use for audit because in the Cloudtrail can log the API Calls made to CMK",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728968,
          "date": "Mon 28 Nov 2022 11:24",
          "username": "D2",
          "content": "Answer D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#379",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is testing a new version of its application. The company is using a public Amazon API Gateway API to expose the application. Currently, the company wants to allow only testers from its network to access the new application.<br><br>Which solutions can the company use to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#379",
          "answers": [
            {
              "choice": "<p>Create and configure a security group that allows access from the company's IP address range. Apply the security group to the API Gateway API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create and configure a network ACL that allows traffic from the company's IP address range. Apply the network ACL to the API Gateway API subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS WAF web ACL. Configure an IP match rule that allows traffic from the company's IP address range. Apply the web ACL to the API Gateway API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a condition in the API Gateway resource policy to allow access only from the company's IP address range.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an interface VPC endpoint for the API Gateway execute-api. Instruct testers to use this endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 379 discussion",
      "discusstion": [
        {
          "id": 764644,
          "date": "Tue 03 Jan 2023 13:54",
          "username": "secdaddy",
          "content": "Could be CD. Unsure of E as the API is public and there's no discussion of where the tester network is.<br><br>C \\\"can create rules to allow or block requests from specified IP address ranges\\\"<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html<br><br>D \\\"Resource policies let you create resource-based policies to allow or deny access to your APIs and methods from specified source IP addresses or VPC endpoints.\\\"<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 946821,
          "date": "Sun 09 Jul 2023 03:40",
          "username": "wmp7039",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 934102,
          "date": "Mon 26 Jun 2023 08:21",
          "username": "Green53",
          "content": "C is the first obvious solution. It's a public endpoint that supports WAF (not a security group or NACL).<br><br>Leaves D and E.<br>E wouldn't amend the existing public Gateway, just provide the engineers a different (private) method faccessing.<br><br>That leaves D:<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 914439,
          "date": "Sun 04 Jun 2023 13:00",
          "username": "Toptip",
          "content": "D+E only combo that makes sense<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>for D: \\\"aws:VpcSourceIp\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 914446,
          "date": "Sun 04 Jun 2023 13:03",
          "username": "Toptip",
          "content": "for D: \\\"aws:VpcSourceIp\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 871215,
          "date": "Sat 15 Apr 2023 20:28",
          "username": "swolfgang",
          "content": "why not b?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 852382,
          "date": "Mon 27 Mar 2023 20:27",
          "username": "Cyp",
          "content": "Questions says Public API which means that testers will use public network to call API. Thus, answer is CD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 843196,
          "date": "Sat 18 Mar 2023 23:02",
          "username": "c73bf38",
          "content": "D and E<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.htmlhttps://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html#apigateway-authorization-flow-resource-policy-only",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 818107,
          "date": "Wed 22 Feb 2023 18:31",
          "username": "createchange",
          "content": "E doesn't make sense. While this would enable testers to this the API from an endpoint, it wouldn't restrict users from the internet from also accessing it. The question requests that you implement a solution which LIMITS access to the API GW to testers only.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 789365,
          "date": "Fri 27 Jan 2023 07:29",
          "username": "arpgaur",
          "content": "Why not B & D ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787692,
          "date": "Wed 25 Jan 2023 14:44",
          "username": "selim507",
          "content": "Since it is public api gateway, we need to focus on public facing surfaces. Like apigateway and waf..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 784373,
          "date": "Sun 22 Jan 2023 15:07",
          "username": "sakibmas",
          "content": "E - incorrect - The company is using a public Amazon API Gateway API to expose the application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 771047,
          "date": "Tue 10 Jan 2023 05:05",
          "username": "Smartphone",
          "content": "E does not look a correct answer. In question it is not mentioned that the tester will access the application from any VPC. The application endpoint is already public. So does not make any sense to create a Private Endpoint for the API Gateway.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C and D seem a correct answer.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 771048,
          "date": "Tue 10 Jan 2023 05:06",
          "username": "Smartphone",
          "content": "C and D seem a correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 769325,
          "date": "Sun 08 Jan 2023 12:23",
          "username": "sahanpere",
          "content": "Please read the question carefully.. it says Pubic API's and Testers will use their own network.<br>Having VPC endpoint access only restrict access to VPC. Hence E is wrong. To restrict Public access only for specific network we can add IP Rules in WAF and APi Gateway resource policy So I go with @secdaddy 's answer CD",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 733516,
          "date": "Fri 02 Dec 2022 07:52",
          "username": "tainh",
          "content": "E: Using Amazon API Gateway, you can create private REST APIs that can only be accessed from your virtual private cloud in Amazon VPC by using an interface VPC endpoint. This is an endpoint network interface that you create in your VPC.<br><br>D:Using resource policies, you can allow or deny access to your API from selected VPCs and VPC endpoints, including across AWS accounts",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 723117,
          "date": "Mon 21 Nov 2022 02:25",
          "username": "AdamWest",
          "content": "DE - Use resource policies to allow or deny access to your api from selected vpc endpoints.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DE"
        }
      ]
    },
    {
      "question_id": "#380",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company organizes hundreds of AWS accounts in AWS Organizations in Developer, Test, and Production OUs. Developers who have full administrative privileges in their respective accounts use the accounts in the Developer OU. The company wants to allow only certain Amazon EC2 instance types to be used within the Developer OU.<br><br>How can the company prevent developer accounts from launching unapproved EC2 instance types?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#380",
          "answers": [
            {
              "choice": "<p>Create a now launch template in each AWS account in the Developer OU to deny the ec2:RunInstances API call for instance types that are not in an approved list Associate these templates with all IAM principals in the account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy to deny the ec2:RunInstances API call for instance types that are not in an approved list. Attach the policy to all IAM principals in all the AWS accounts in the Developer OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a managed SCP that is attached to the organization's root account to deny the ec2:RunInstances API call for instance types that are not in an approved list<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP to deny the ec2:RunInstances API call for instance types that are not in an approved list. Attach the policy to the Developer OU.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 380 discussion",
      "discusstion": [
        {
          "id": 726259,
          "date": "Fri 25 Nov 2022 00:13",
          "username": "Isaias",
          "content": "D for me<br>C incorrect cannot modify a managade scp",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1162074,
          "date": "Thu 29 Feb 2024 01:11",
          "username": "Raphaello",
          "content": "D is the correct answer.<br><br>The request is to allow \\\"certain Amazon EC2 instance types \\\" for developers who have full access on accounts in certain OU.<br>Best approach is to limit them through SCP that is applied to that OU, using IAM condition element \\\"ec2:InstanceType\\\".<br><br>Ex.<br>---<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"ec2:RunInstances\\\",<br>\\\"Resource\\\": [\\\"arn:aws:ec2:*:*:instance/*\\\"],<br>\\\"Condition\\\": {\\\"StringNotEquals\\\": {\\\"ec2:InstanceType\\\": \\\"t2.micro\\\"}}<br>---",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914462,
          "date": "Sun 04 Jun 2023 13:13",
          "username": "Toptip",
          "content": "D is good but not the best approach to handle such scenario.<br>better to Deny with StringNotEquals condition if the region is not the desired region (much easier to maintain):<br> \\\"StringNotEquals\\\": {<br>\\\"ec2:Region\\\": \\\"ALLOWED REGION\\\"<br>},",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 867753,
          "date": "Wed 12 Apr 2023 02:03",
          "username": "nairj",
          "content": "D is correct. It's all about using SCP at the OU to restric access instead of applying IAM based controls at the account level.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 764658,
          "date": "Tue 03 Jan 2023 14:05",
          "username": "secdaddy",
          "content": "Organizations and OUSCP<br>Create the policy :<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_ec2.html#example-ec2-1<br>attach the policy to an OU<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 738974,
          "date": "Thu 08 Dec 2022 12:52",
          "username": "Singhh",
          "content": "requirement is developer OU ,<br>C has root OU which is wrong",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#381",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security team is using Amazon EC2 Image Builder to build a hardened AMI with forensic capabilities. An AWS Key Management Service (AWS KMS) key will encrypt the forensic AMI. EC2 Image Builder successfully installs the required patches and packages in the security team's AWS account. The security team uses a federated IAM role in the same AWS account to sign in to the AWS Management Console and attempts to launch the forensic AMI. The EC2 instance launches and immediately terminates.<br><br>What should the security team do to launch the EC2 instance successfully?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#381",
          "answers": [
            {
              "choice": "<p>Update the policy that is associated with the federated IAM role to allow the ec2:DescribeImages action for the forensic AML.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the policy that is associated with the federated IAM role to allow the ec2:StartInstances action in the security team's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the policy that is associated with the KMS key that is used to encrypt the forensic AMI. Configure the policy to allow the kms:Encrypt and kms:Decrypt actions for the federated IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the policy that is associated with the federated IAM role to allow the kms:DescribeKey action for the KMS key that is used to encrypt the forensic AMI.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 381 discussion",
      "discusstion": [
        {
          "id": 733528,
          "date": "Fri 02 Dec 2022 08:12",
          "username": "tainh",
          "content": "C is correct<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/troubleshooting-launch.html#troubleshooting-launch-internal<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Refer to the link,<br>Make sure we have policy to allow both kms:Encrypt and kms:Decrypt.</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 754906,
          "date": "Sat 24 Dec 2022 14:43",
          "username": "due",
          "content": "Refer to the link,<br>Make sure we have policy to allow both kms:Encrypt and kms:Decrypt.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914481,
          "date": "Sun 04 Jun 2023 13:24",
          "username": "Toptip",
          "content": "Yes, it's C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#382",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has identified two security concerns. One concern is unencrypted Amazon Elastic Block Store (Amazon EBS) volumes. The other concern is public IP addresses that are assigned to Amazon EC2 instances. A security engineer must build a solution to prevent and remediate these security issues.<br><br>What should the security engineer do to meet these requirements with the LEAST amount of effort?</p>",
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
              "choice": "<p>Use AWS CloudTrail to monitor accounts for noncompliant configurations. Use AWS Lambda functions to evaluate configuration state and perform automated remediation actions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config rules to monitor accounts for noncompliant configurations. Use AWS Systems Manager Automation to perform automated remediation actions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon GuardDuty to monitor accounts for noncompliant configurations. Use AWS Lambda function to perform automated remediation actions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Compliance to monitor accounts for noncompliant configurations. Use Systems Manager Automation to perform automated remediation actions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 382 discussion",
      "discusstion": [
        {
          "id": 723119,
          "date": "Mon 21 Nov 2022 02:35",
          "username": "AdamWest",
          "content": "B - Use AWS Config for compliancy, then using system manager you can automatically or manually remediate.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914496,
          "date": "Sun 04 Jun 2023 13:31",
          "username": "Toptip",
          "content": "B Config+Automatedbest combo",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 798497,
          "date": "Sun 05 Feb 2023 01:09",
          "username": "sam15",
          "content": "B.<br>https://aws.amazon.com/blogs/mt/implement-aws-config-rule-remediation-with-systems-manager-change-manager/<br>an example where an Amazon Elastic Compute Cloud (Amazon EC2) instance with a public IP address generates a change request, which once approved, will turn off the instance.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 764785,
          "date": "Tue 03 Jan 2023 16:07",
          "username": "secdaddy",
          "content": "In support of B<br>https://aws.amazon.com/blogs/mt/remediate-noncompliant-aws-config-rules-with-aws-systems-manager-automation-runbooks/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 733529,
          "date": "Fri 02 Dec 2022 08:15",
          "username": "tainh",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728910,
          "date": "Mon 28 Nov 2022 10:03",
          "username": "D2",
          "content": "Answer B for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726266,
          "date": "Fri 25 Nov 2022 00:19",
          "username": "Isaias",
          "content": "B for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#383",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new application stack. The design includes web servers and backend servers that are hosted on Amazon EC2 instances. The design also includes an Amazon Aurora MySQL DB cluster.<br><br>The EC2 instances are in an Auto Scaling group that uses launch templates. The EC2 instances for the web layer and the backend layer are backed by Amazon Elastic Block Store (Amazon EBS) volumes. No layers are encrypted at rest. A security engineer needs to implement encryption at rest.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#383",
          "answers": [
            {
              "choice": "<p>Modify EBS default encryption setting in the target AWS Region to enable encryption. Use an Auto Scaling group instance refresh.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the launch templates for the web layer and the backend layer to add AWS Certificate Manager (ACM) encryption for the attached EBS volumes. Use an Auto Scaling group instance refresh.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) encrypted DB cluster from a snapshot of the existing DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Apply AWS Key Management Service (AWS KMS) encryption to the existing DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply AWS Certificate Manager (ACM) encryption to the existing DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 383 discussion",
      "discusstion": [
        {
          "id": 934091,
          "date": "Mon 26 Jun 2023 08:12",
          "username": "Green53",
          "content": "A/C<br>B - You don't use ACM for encryption, it's KMS<br>D - You can't encrypt an existing cluster, you need to snapshot, then encrypt with KMS<br>E - Same as B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 914511,
          "date": "Sun 04 Jun 2023 13:40",
          "username": "Toptip",
          "content": "A+C easy...<br>you can restore an unencrypted snapshot to a NEW encrypted Aurora DB cluster.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 893315,
          "date": "Tue 09 May 2023 19:15",
          "username": "ITGURU51",
          "content": "The security engineer needs to implement and design a security solution that will encrypt data at rest. AC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 867755,
          "date": "Wed 12 Apr 2023 02:10",
          "username": "nairj",
          "content": "A and C<br>Whoever is selecting B has to understand ACM is not used for encryption at rest",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 762612,
          "date": "Sat 31 Dec 2022 12:01",
          "username": "Teknoklutz",
          "content": "You can not modify launch template so A and C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 759275,
          "date": "Wed 28 Dec 2022 03:14",
          "username": "must_be_rohit",
          "content": "workload are provisioned uses launch template",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 733543,
          "date": "Fri 02 Dec 2022 08:41",
          "username": "tainh",
          "content": "A,C are correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 728920,
          "date": "Mon 28 Nov 2022 10:15",
          "username": "D2",
          "content": "AC Correct<br><br>Details for A<br>https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and For C - https://aws.amazon.com/blogs/database/securing-data-in-amazon-rds-using-aws-kms-encryption/</li><li>More support for C<br>\\\"You can't convert an unencrypted DB cluster to an encrypted one. However, you can restore an unencrypted snapshot to an encrypted Aurora DB cluster.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 730882,
          "date": "Tue 29 Nov 2022 22:49",
          "username": "Teknoklutz",
          "content": "and For C - https://aws.amazon.com/blogs/database/securing-data-in-amazon-rds-using-aws-kms-encryption/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>More support for C<br>\\\"You can't convert an unencrypted DB cluster to an encrypted one. However, you can restore an unencrypted snapshot to an encrypted Aurora DB cluster.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 764798,
          "date": "Tue 03 Jan 2023 16:19",
          "username": "secdaddy",
          "content": "More support for C<br>\\\"You can't convert an unencrypted DB cluster to an encrypted one. However, you can restore an unencrypted snapshot to an encrypted Aurora DB cluster.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html",
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
      "question_text": "<p>A company has two VPCs in the same AWS Region and in the same AWS account. Each VPC uses a CIDR block that does not overlap with the CIDR block of the other VPC. One VPC contains AWS Lambda functions that run inside a subnet that accesses the internet through a NAT gateway. The Lambda functions require access to a publicly accessible Amazon Aurora MySQL database that is running in the other VPC.<br><br>A security engineer determines that the Aurora database uses a security group rule that allows connections from the NAT gateway IP address that the Lambda functions use. The company's security policy states that no database should be publicly accessible.<br><br>What is the MOST secure way that the security engineer can provide the Lambda functions with access to the Aurora database?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#384",
          "answers": [
            {
              "choice": "<p>Move the Aurora database into a private subnet that has no internet access routes in the database's current VPC. Configure the Lambda functions to use the Aurora database's new private IP address to access the database. Configure the Aurora database's security group to allow access from the private IP addresses of the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Establish a VPC endpoint between the two VPCs. In the Aurora database's VPC, configure a service VPC endpoint for Amazon RDS. In the Lambda functions' VPC, configure an interface VPC endpoint that uses the service endpoint in the Aurora database's VPC. Configure the service endpoint to allow connections from the Lambda functions<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Establish an AWS Direct Connect interface between the VPCs. Configure the Lambda functions to use a new route table that accesses the Aurora database through the Direct Connect interface. Configure the Aurora database's security group to allow access from the Direct Connect interface IP address,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the Lambda functions into a public subnet in their VPC. Move the Aurora database into a private subnet in its VPC. Configure the Lambda functions to use the Aurora database's new private IP address to access the database. Configure the Aurora database to allow access from the public IP addresses of the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 384 discussion",
      "discusstion": [
        {
          "id": 733546,
          "date": "Fri 02 Dec 2022 08:45",
          "username": "tainh",
          "content": "B is correct<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-endpoints.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914520,
          "date": "Sun 04 Jun 2023 13:49",
          "username": "Toptip",
          "content": "Only B makes sense to me...VPC endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913828,
          "date": "Sat 03 Jun 2023 19:07",
          "username": "6_8ftwin",
          "content": "B<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/vpc-interface-endpoints.html<br>\\\"All RDS API operations relevant to managing Amazon Aurora resources are available from your VPC using AWS PrivateLink.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 893317,
          "date": "Tue 09 May 2023 19:22",
          "username": "ITGURU51",
          "content": "A VPC endpoint is considered more secure than other options because it allows you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. This means that traffic between your VPC and the service does not leave the Amazon network, reducing the risk of data interception by malicious actors .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 883290,
          "date": "Fri 28 Apr 2023 08:59",
          "username": "Ghouley",
          "content": "I would say A as it is the only answer that makes sense while addressing the need for the RDS to be private",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 870923,
          "date": "Sat 15 Apr 2023 14:48",
          "username": "isokalau",
          "content": "The MOST secure way that the security engineer can provide the Lambda functions with access to the Aurora database is option A: Move the Aurora database into a private subnet that has no internet access routes in the database's current VPC. Configure the Lambda functions to use the Aurora database's new private IP address to access the database. Configure the Aurora database's security group to allow access from the private IP addresses of the Lambda functions.<br><br>This option ensures that the Aurora database is not publicly accessible by moving it to a private subnet with no internet access routes. The Lambda functions can then access the database using its private IP address. The security group for the Aurora database can be updated to allow access only from the private IP addresses of the Lambda functions, which limits access to the database to only the Lambda functions that require it.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's all correct, except for one problem; how does Lamdba access the database in the other VPC? There is no connection between them once it can't go over the public network.<br><br>You'd either require a peering connection or VPC Endpoint service for A to work.<br><br>A VPC endpoint is a connection from your VPC to a specific service provided by AWS or by someone else. The VPC endpoint is exposed as a private IP address within your VPC, accessible using a private DNS name. VPC endpoints are most commonly used to make AWS API requests from a VPC, without going onto the public internet.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 934087,
          "date": "Mon 26 Jun 2023 08:08",
          "username": "Green53",
          "content": "That's all correct, except for one problem; how does Lamdba access the database in the other VPC? There is no connection between them once it can't go over the public network.<br><br>You'd either require a peering connection or VPC Endpoint service for A to work.<br><br>A VPC endpoint is a connection from your VPC to a specific service provided by AWS or by someone else. The VPC endpoint is exposed as a private IP address within your VPC, accessible using a private DNS name. VPC endpoints are most commonly used to make AWS API requests from a VPC, without going onto the public internet.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 867505,
          "date": "Tue 11 Apr 2023 18:59",
          "username": "Sai123",
          "content": "The question says no DB should be publicly accessable, with option B the DB is still punlicly accessible. So doesnt the answer should be A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Never mind there is no peering between VPC so A cannot be correct.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 867508,
          "date": "Tue 11 Apr 2023 19:04",
          "username": "Sai123",
          "content": "Never mind there is no peering between VPC so A cannot be correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771813,
          "date": "Tue 10 Jan 2023 22:28",
          "username": "Nocky24",
          "content": "Would have said A if there was a VPC peering, so went with B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 771270,
          "date": "Tue 10 Jan 2023 10:57",
          "username": "secdaddy",
          "content": "\\\"publicly accessible Amazon Aurora MySQL database\\\"noncompliant as \\\"company's security policy states that no database should be publicly accessible\\\"<br>Unless I am mistaken, nothing in B makes this database publicly inaccessible ?<br>A makes the database publicly inaccessible and meets the 'MOST secure way' requirement.<br><br>C and D are nonsensical<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also why would Lambda need to access RDS directly? \\\"In the Lambda functions' VPC, con+gure an interface VPC endpoint that uses the service endpoint in the Aurora database's VPC\\\"<br>Wouldn't Lambda access the Aurora DB instances in the VPC and those instances would then access RDS?<br>Has anyone actually worked with this stuff and can comment please ?</li><li>Good article here : https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 771273,
          "date": "Tue 10 Jan 2023 11:01",
          "username": "secdaddy",
          "content": "Also why would Lambda need to access RDS directly? \\\"In the Lambda functions' VPC, con+gure an interface VPC endpoint that uses the service endpoint in the Aurora database's VPC\\\"<br>Wouldn't Lambda access the Aurora DB instances in the VPC and those instances would then access RDS?<br>Has anyone actually worked with this stuff and can comment please ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Good article here : https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771276,
          "date": "Tue 10 Jan 2023 11:01",
          "username": "secdaddy",
          "content": "Good article here : https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 769377,
          "date": "Sun 08 Jan 2023 13:21",
          "username": "sahanpere",
          "content": "B is the answer. Both services can access through VPC's using the VPC endpoints.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-endpoints.html<br><br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-endpoints.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 764841,
          "date": "Tue 03 Jan 2023 16:55",
          "username": "secdaddy",
          "content": "I guess the problem with A is the IP addresses of the Lambda functions as sources?The answer says to allow access but it doesn't say we need to actually know the IP addresses so maybe this is okay as when we configure a Lambda function to access the Aurora subnet we choose a security group during configuration ?<br><br>B confuses me. I'm ok with the RDS service endpoint in the Aurora private subnet but aren't Lambda functions in a VPC owned by the Lambda service?Are we even able to configure an interface VPC endpoint in the Lambda service owned VPC? It looks to me like connectivity from the Lambda service owned VPC to an account VPC (where the Aurora instances are) would use Hyperplane ENIs created by Lambda as needed.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html<br>https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728925,
          "date": "Mon 28 Nov 2022 10:20",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 726899,
          "date": "Fri 25 Nov 2022 16:41",
          "username": "AdamWest",
          "content": "I also have B as the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723543,
          "date": "Mon 21 Nov 2022 14:28",
          "username": "luisfsm",
          "content": "I'd say B by elimination...",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#385",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed servers on Amazon EC2 instances in a VPC. External vendors access these servers over the internet. Recently, the company deployed a new application on EC2 instances in a new CIDR range. The company needs to make the application available to the vendors.<br><br>A security engineer verified that the associated security groups and network ACLs are allowing the required ports in the inbound diction. However, the vendors cannot connect to the application.<br><br>Which solution will provide the vendors access to the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#385",
          "answers": [
            {
              "choice": "<p>Modify the security group that is associated with the EC2 instances to have the same outbound rules as inbound rules.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the network ACL that is associated with the CIDR range to allow outbound traffic to ephemeral ports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the inbound rules on the internet gateway to allow the required ports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the network ACL that is associated with the CIDR range to have the same outbound rules as inbound rules.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 385 discussion",
      "discusstion": [
        {
          "id": 914523,
          "date": "Sun 04 Jun 2023 13:51",
          "username": "Toptip",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 806467,
          "date": "Sun 12 Feb 2023 16:05",
          "username": "XaviL",
          "content": "B is correct, always on ephemeral port range.<br>I understand that this change not apply to IG, the change was on EC2s",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771816,
          "date": "Tue 10 Jan 2023 22:32",
          "username": "Nocky24",
          "content": "B definitely.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 767033,
          "date": "Thu 05 Jan 2023 21:46",
          "username": "Leonardocp33",
          "content": "B for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733554,
          "date": "Fri 02 Dec 2022 08:50",
          "username": "tainh",
          "content": "B is correct<br>Need allow outbound traffic for new CIDR back with ephemeral port range",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733350,
          "date": "Fri 02 Dec 2022 03:24",
          "username": "AdamWest",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728929,
          "date": "Mon 28 Nov 2022 10:25",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724932,
          "date": "Wed 23 Nov 2022 07:20",
          "username": "Isaias",
          "content": "B,<br>ACL outbound neet to permit epheral ports to return traffic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#386",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's security engineer receives an alert that indicates that an unexpected principal is accessing a company-owned Amazon Simple Queue Service (Amazon SQS) queue. All the company's accounts are within an organization in AWS Organizations. The security engineer must implement a mitigation solution that minimizes compliance violations and investment in tools that are outside of AWS.<br><br>What should the security engineer do to meet these requirements?</p>",
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
              "choice": "<p>Create security groups that only accept inbound traffic from the CIDR blocks of all the VPCs in the organization. Attach the security groups to all the SQS queues in all the VPCs in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In all the VPCs in the organization, adjust the network ACLs to only accept inbound traffic from the CIDR blocks of all the VPCs in the organization. Attach the network ACLs to all the subnets in all the VPCs in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create interface VPC endpoints for Amazon SQS in all the VPCs in the organization. Set the aws:SourceVpce condition to the VPC endpoint identifier on the SQS policy. Add the aws:PrincipalOrgId condition to the VPC endpoint policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a cloud access security broker (CASB) to maintain a list of managed resources. Configure the CASB to check the API and console access against that list on a web proxy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 386 discussion",
      "discusstion": [
        {
          "id": 723551,
          "date": "Mon 21 Nov 2022 14:32",
          "username": "luisfsm",
          "content": "C looks correct",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930341,
          "date": "Thu 22 Jun 2023 11:35",
          "username": "Green53",
          "content": "C is the best option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 916710,
          "date": "Wed 07 Jun 2023 01:39",
          "username": "cloudesigner",
          "content": "C is correct but it doesn't address using a tool outside of AWS. So D is the correct answer to this question<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question states it wants to *minimizes* investment in tools that are outside of AWS. The answer is C.<br>D would put investment into tools outside AWS.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930340,
          "date": "Thu 22 Jun 2023 11:35",
          "username": "Green53",
          "content": "The question states it wants to *minimizes* investment in tools that are outside of AWS. The answer is C.<br>D would put investment into tools outside AWS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914532,
          "date": "Sun 04 Jun 2023 14:01",
          "username": "Toptip",
          "content": "Well... it's C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 867871,
          "date": "Wed 12 Apr 2023 05:17",
          "username": "awsgugu",
          "content": "B is correct, as question is saying minimizes \\\"compliance violations and investment in tools that are outside of AWS\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not B (Typo), Correct is C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 867873,
          "date": "Wed 12 Apr 2023 05:19",
          "username": "awsgugu",
          "content": "Not B (Typo), Correct is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836646,
          "date": "Sun 12 Mar 2023 02:01",
          "username": "derpeedoo",
          "content": "C is correct but it does not address the \\\"in tools that are outside of AWS\\\". So the answer must be D since A, B, and C are all AWS solutions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 806479,
          "date": "Sun 12 Feb 2023 16:13",
          "username": "XaviL",
          "content": "\\\" in tools that are outside of AWS\\\" -> means all tools, not only SQS, so very ambiguos if you do to \\\"C\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733557,
          "date": "Fri 02 Dec 2022 08:55",
          "username": "tainh",
          "content": "may be C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726908,
          "date": "Fri 25 Nov 2022 16:47",
          "username": "AdamWest",
          "content": "Agree C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#387",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's public website consists of an Application Load Balancer (ALB), a set of Amazon EC2 instances that run a stateless application behind the ALB, and an Amazon DynamoDB table from which the application reads data. The company is concerned about malicious scanning and DDoS attacks. The company wants to impose a restriction in which each client IP address can read the data only 3 times in any 5-minute period.<br><br>Which solution will meet this requirement with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#387",
          "answers": [
            {
              "choice": "<p>Set up AWS WAF in front of the ALB. Create a rule that blocks requests that exceed the limit of 3 requests in any 5-minute period for each IP address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function based on an Amazon CloudWatch request. Configure the Lambda function to count the requests for each IP address in rolling 5-sminute intervals and to provide notification if the count exceeds 3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the EC2 application to count the source IP address of requests and calculate a rolling 5-minute sum. Return an error message if the count sum is greater than 3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add source IP address and request time to the DynamoDB table. Add a 5-minute TTL setting based on request time. Change the read capacity of the DynamoDB table throughput to 3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 387 discussion",
      "discusstion": [
        {
          "id": 724933,
          "date": "Wed 23 Nov 2022 07:24",
          "username": "Isaias",
          "content": "A- rate-based rule with Waf<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 929029,
          "date": "Wed 21 Jun 2023 06:04",
          "username": "Green53",
          "content": "As 6_8ftwin has said, A *does not* work. AWS WAF has a minimum count of 100:<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based-high-level-settings.html<br>https://repost.aws/knowledge-center/waf-apply-rate-limit<br>So you can't create a rule to block only 3 reads per 5 minute period.<br><br>I can't see B working, why would CloudWatch have the data? I see no option to enable ALB access logs. Even then, what happens when a notification is generated? This option provides no restrictions.<br><br>C maybe? Seems like a lot of effort though<br>D doesn't make sense to me, the 5 minute TTL would just remove the change.<br><br>It's a difficult one, but I'd likely go C. It's the only one that actual provides a blocking mechanism that is possible (even if it requires a lot of effort).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915723,
          "date": "Mon 05 Jun 2023 22:26",
          "username": "p4v10",
          "content": "A - very straightforward",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914539,
          "date": "Sun 04 Jun 2023 14:04",
          "username": "Toptip",
          "content": "A... nothing else",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913844,
          "date": "Sat 03 Jun 2023 19:37",
          "username": "6_8ftwin",
          "content": "C<br>https://docs.aws.amazon.com/waf/latest/developerguide/limits.html<br>\\\"Minimum request rate that can be defined for a rate-based rule: 100\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Possibly 'B' since \\\"a set of Amazon EC2 instances that run a stateless application behind the ALB\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913846,
          "date": "Sat 03 Jun 2023 19:41",
          "username": "6_8ftwin",
          "content": "Possibly 'B' since \\\"a set of Amazon EC2 instances that run a stateless application behind the ALB\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 893341,
          "date": "Tue 09 May 2023 20:15",
          "username": "ITGURU51",
          "content": "AWS WAF is the only viable solution that offers rate based limiting.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 891484,
          "date": "Sun 07 May 2023 16:48",
          "username": "yeswanthnarra",
          "content": "Rate limit must be between 100 and 20,000,000 for Rate based rules. So, they might not be useful to enforce say 3 requests.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 771822,
          "date": "Tue 10 Jan 2023 22:36",
          "username": "Nocky24",
          "content": "A - rate based rules.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 769285,
          "date": "Sun 08 Jan 2023 11:30",
          "username": "Smartphone",
          "content": "A is correct. Implementation of WAF is a good idea.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763979,
          "date": "Mon 02 Jan 2023 21:44",
          "username": "awsec2",
          "content": "B. Create an AWS Lambda function based on an Amazon CloudWatch request. Configure the Lambda function to count the requests for each IP address in rolling 5-sminute intervals and to provide notification if the count exceeds 3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733558,
          "date": "Fri 02 Dec 2022 08:59",
          "username": "tainh",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 726912,
          "date": "Fri 25 Nov 2022 16:53",
          "username": "AdamWest",
          "content": "Agree - A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#388",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a VPC that contains a publicly accessible subnet and a privately accessible subnet. Both subnets send network traffic that is destined for the company's data center through the public internet.<br><br>The public subnet uses Route Table A, which has a default route for network traffic to travel through the internet gateway of the VPC. The private subnet uses Route Table B, which has a default route for network traffic to travel through a NAT gateway within the VPC. Recently, the company created an AWS Site-to-Site VPN connection to the VPC from one of is data centers. The tunnel s active and is working property between the customer gateway and the virtual private gateway. The CIDR blocks of the VPC and the data center do not overlap.<br><br>According to a new security policy, all network traffic that originates from the VPC and travels to the data center must not travel across the public internet. A security engineer determines that resources in the public subnet and private subnet are still sending traffic across the public internet to the data center.<br><br>Which combination of steps will ensure that all network traffic that originates from the VPC will not use the public internet to communicate with the data cantor? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#388",
          "answers": [
            {
              "choice": "<p>Adjust the route table for the public subnet to use the NAT gateway as its default route,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the route table for the public subnet to use the customer gateway for the data center's CIDR block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the route table for the public subnet to use the virtual private gateway for the data cantor's CIDR block<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the route table for the private subnet to use the customer gateway for the data center's CIDR block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the route table for the private subnet to use the virtual private gateway for the data centers CIDR block.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 388 discussion",
      "discusstion": [
        {
          "id": 914545,
          "date": "Sun 04 Jun 2023 14:08",
          "username": "Toptip",
          "content": "got C+E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 893343,
          "date": "Tue 09 May 2023 20:21",
          "username": "ITGURU51",
          "content": "Traffic from both subnets must be routed through the virtual private gateway instead of the internet gateway or NAT device.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841462,
          "date": "Fri 17 Mar 2023 01:47",
          "username": "c73bf38",
          "content": "C& E will ensure traffic originating from the public and private subnet that is destined for the data center will be sent through the VPN tunnel through use of virtual private gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 838092,
          "date": "Mon 13 Mar 2023 18:04",
          "username": "Artaggedon",
          "content": "C and D<br><br>To add more info, a Customer Gateway is the VPN terminator that is hosted on-premises. You need to declare it in AWS so AWS knows that it exists and can map a VPN between the virtual private gateway and the VPN terminator (aka the customer gateway). Therfore, you need to configure your route tables for both subnets to route the traffic to your virtual private gateway, which rests in the VPC, not on premises like the Customer Gateway does.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 771825,
          "date": "Tue 10 Jan 2023 22:41",
          "username": "Nocky24",
          "content": "CE - VPG links the VPC to the S2S VPN.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 733566,
          "date": "Fri 02 Dec 2022 09:08",
          "username": "tainh",
          "content": "C,E<br>update routing table for on-premise's CIDR to VGW",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 726916,
          "date": "Fri 25 Nov 2022 16:57",
          "username": "AdamWest",
          "content": "CE - Is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can route traffic in AWS through a virtual private gateway when you want to connect your VPC to your on-premises network over an IPsec VPN connection.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 895026,
          "date": "Thu 11 May 2023 13:59",
          "username": "ITGURU51",
          "content": "You can route traffic in AWS through a virtual private gateway when you want to connect your VPC to your on-premises network over an IPsec VPN connection.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 724946,
          "date": "Wed 23 Nov 2022 07:40",
          "username": "Isaias",
          "content": "C D<br>route the DC CIDR blocks through the VPG on both Route Tables,<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C E.<br>I wrote D by mistake</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 724948,
          "date": "Wed 23 Nov 2022 07:42",
          "username": "Isaias",
          "content": "C E.<br>I wrote D by mistake",
          "upvote_count": "1",
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
      "question_text": "<p>A company has public certificates that are managed by AWS Certificate Manager (ACM). The certificates are either imported certificates or managed certificates from ACM with mixed validation methods. A security engineer needs to design a monitoring solution to provide alerts by email when a certificate is approaching its expiration date.<br><br>What is the MOST operationally efficient way to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#389",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function to list al certificates and to go through each certificate to describe the certificate by using the AW'S SDK. Filter on the NotAfter attribute and send an email notification. Use an Amazon EventBridge (Amazon CloudWatch Events) rate expression to schedule the Lambda function to run daily.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudWatch alarm. Add all the certificate ARNs in the AWS/CertificateManager namespace to the DaysToExpiry metric. Configure the alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic when the value for the DaysToExpiry metric is less than or equal to 31.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Security Hub. Turn on the AWS Foundational Security Best Practices standard with integrated ACM to send findings. Configure and use a custom action by creating a rule to match the pattern from the ACM findings on the NotBefore attribute as the event source. Create an Amazon Simple Notification Service (Amazon SNS) top as the target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge (Amazon CloudWatch Events) rule by using a predefined pattern for ACM. Choose the metric in the ACM Certficate Approaching Expiration event as the event pattern. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 389 discussion",
      "discusstion": [
        {
          "id": 724953,
          "date": "Wed 23 Nov 2022 07:49",
          "username": "Isaias",
          "content": "I go with D<br>https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree D - 100%</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726923,
          "date": "Fri 25 Nov 2022 17:01",
          "username": "AdamWest",
          "content": "Agree D - 100%",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914553,
          "date": "Sun 04 Jun 2023 14:14",
          "username": "Toptip",
          "content": "D .. i remember i did it once and it actually works =E2=9C=85",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 867877,
          "date": "Wed 12 Apr 2023 05:33",
          "username": "awsgugu",
          "content": "D.<br><br>{<br>\\\"version\\\": \\\"0\\\",<br>\\\"id\\\": \\\"abc\\\",<br>\\\"detail-type\\\": \\\"ACM Certificate Approaching Expiration\\\",<br>\\\"source\\\": \\\"aws.acm\\\",<br>\\\"account\\\": \\\"\\\",<br>\\\"time\\\": \\\"2020-09-30T06:51:08Z\\\",<br>\\\"region\\\": \\\"us-east-1\\\",<br>\\\"resources\\\": [\\\"arn:aws:acm:us-east-1:*:certificate/abc\\\"],<br>\\\"detail\\\": {<br>\\\"DaysToExpiry\\\": 31,<br>\\\"CommonName\\\": \\\"example.com\\\"<br>}<br>}",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 867763,
          "date": "Wed 12 Apr 2023 02:29",
          "username": "nairj",
          "content": "Answer is D: Use EventBridge Rules - https://docs.aws.amazon.com/acm/latest/userguide/example-actions.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842153,
          "date": "Fri 17 Mar 2023 17:59",
          "username": "c73bf38",
          "content": "EventBridge using predefined patterns for ACM is operationally efficient compared to adding all the certificates ARN to CloudWatch.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 841469,
          "date": "Fri 17 Mar 2023 01:57",
          "username": "c73bf38",
          "content": "https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html<br><br>PDF<br>RSS<br>Amazon CloudWatch is a monitoring service for AWS resources. You can use CloudWatch to collect and track metrics, set alarms, and automatically react to changes in your AWS resources. ACM publishes metrics once per day for every certificate in an account until expiration.<br><br>The AWS/CertificateManager namespace includes the following metric.<br><br>Metric Description Unit Dimensions<br>DaysToExpiry Number of days until a certificate expires. ACM stops publishing this metric after a certificate expires.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Change to D since its least overhead.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842149,
          "date": "Fri 17 Mar 2023 17:57",
          "username": "c73bf38",
          "content": "Change to D since its least overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 838100,
          "date": "Mon 13 Mar 2023 18:13",
          "username": "Artaggedon",
          "content": "D is the correct answer since DaysToExpire is good-to-go as an alert in AWS CloudWatch and, also, any future certificate is automatically monitored.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 802814,
          "date": "Thu 09 Feb 2023 05:06",
          "username": "Smartphone",
          "content": "Correct Answer is B<br>Read the below text from the AWS documentation<br>\\\"The second option uses the recently launched DaysToExpiry metric to schedule a batch search of expiring certificates and to log all the findings. The metric also provides a single SNS notification for all expiring certificates....\\\"<br>https://aws.amazon.com/blogs/security/how-to-monitor-expirations-of-imported-certificates-in-aws-certificate-manager-acm/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's not efficient because you have to add new certs to CloudWatch every time. Operationally efficient is D.</li><li>Cloudwatch metric DaysToExpiry is already available. So, only need to create an alarm for that.<br>https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 826465,
          "date": "Thu 02 Mar 2023 04:23",
          "username": "derpeedoo",
          "content": "It's not efficient because you have to add new certs to CloudWatch every time. Operationally efficient is D.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 802818,
          "date": "Thu 09 Feb 2023 05:12",
          "username": "Smartphone",
          "content": "Cloudwatch metric DaysToExpiry is already available. So, only need to create an alarm for that.<br>https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 790303,
          "date": "Sat 28 Jan 2023 06:06",
          "username": "sakibmas",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/03/aws-certificate-manager-provides-certificate-expiry-monitoring-through-amazon-cloudwatch/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783121,
          "date": "Sat 21 Jan 2023 09:29",
          "username": "sahanpere",
          "content": "The answer is B, There is no predefined event rule under eventBridge. It has to be setup with Config --> CWEvent Bridge which is not mentioned here.<br>But, ACM daily sending the metrics called DaystoEpiry to CW on all the ACM certificates. You have to set the alarm base on this metrics under the ACM namespace.<br>https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 773844,
          "date": "Thu 12 Jan 2023 20:44",
          "username": "krishccie",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-expiration/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733584,
          "date": "Fri 02 Dec 2022 09:50",
          "username": "tainh",
          "content": "D is correct<br>D: provide alerts by email when a certificate is approaching its expiration date.<br><br>B: using run report for all certificates on a timer with DaysToExpiry metric in CloudWatch (option 2 of reference link)<br>https://aws.amazon.com/blogs/security/how-to-monitor-expirations-of-imported-certificates-in-aws-certificate-manager-acm/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723123,
          "date": "Mon 21 Nov 2022 02:56",
          "username": "AdamWest",
          "content": "B - ACM works with cloud watch and SNS<br>https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-events.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is wrong.Isaias is correct - D.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 726922,
          "date": "Fri 25 Nov 2022 17:01",
          "username": "AdamWest",
          "content": "This is wrong.Isaias is correct - D.",
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
      "question_text": "<p>A security engineer needs to implement an intrusion detection system (IDS) for a shipping company. The findings from the system must generate alerts that can be sent to an email distribution group that the company's operations team uses. The security engineer must maximize the coverage that the IDS provides.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#390",
          "answers": [
            {
              "choice": "<p>Create an AWS CloudTrail trail to capture management events and Amazon S3 data events. Create VPC flow logs for all VPCs. Specify for the flow logs to capture all traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudTrail trail to capture management events and Amazon S3 data events. Create VPC flow logs for all VPCS. Specify for the flow logs to capture accepted traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon GuardDuty. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to forward finding events to an Amazon Simple Notification Service (Amazon SNS) topic<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Security Hub. Create an Amazon EventBridge (Amazon CloudWatch Events) rue to forward finding events to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudTrail trail to capture management events and Amazon S3 data events. Configure an AWS Lambda function to analyze VPC flow logs and to inspect all flow log traffic that matches the ACCEPT filter type.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 390 discussion",
      "discusstion": [
        {
          "id": 728947,
          "date": "Mon 28 Nov 2022 10:50",
          "username": "D2",
          "content": "Answer: AC<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 938886,
          "date": "Fri 30 Jun 2023 09:08",
          "username": "Granwizzard",
          "content": "\\\"The findings from the system must generate alerts that can be sent to an email distribution group\\\", C and D are the only ones configured to do that.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 934071,
          "date": "Mon 26 Jun 2023 07:48",
          "username": "Green53",
          "content": "A/C<br>I'd say AWS Security Hub is more of a CSPM tool, rather than IDS/IPS (since you're pulling in data from other sources that provide that functionality).<br>GuardDuty can act as a IDS (not IPS) since it provides information from VPC Flow logs and DNS logs about suspicious traffic (i.e, detection)<br><br>Yes, you don't need to enable VPC Flow Logs separately, but CloudFlare capturing S3 and API events is good practise.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 914576,
          "date": "Sun 04 Jun 2023 14:29",
          "username": "Toptip",
          "content": "A+D for me...<br>GuardDuty it's NOT IDS (or IPS).<br>D - Security Hub can actually report IDS findings:<br>https://docs.aws.amazon.com/managedservices/latest/userguide/gui-enable-IPSIDS.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 867794,
          "date": "Wed 12 Apr 2023 03:31",
          "username": "nairj",
          "content": "Answer is A and C - Use Guardduty, and logs from Cloudtrail, VPC flow logs, and DNS logs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818139,
          "date": "Wed 22 Feb 2023 18:50",
          "username": "createchange",
          "content": "Of note, you don't NEED to enable CloudTrail, VPC Flow Logs, etc. for GuardDuty to function: I'm voting C,D.<br><br>GuardDuty does not require that enable CloudTrail, VPC Flow Logs, etc: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html#setup-before. Enabling these services and alerting<br><br>However, in an effort to maximize coverage, it does make sense to enable those sources and ship them to your IDS. This will allow both GuardDuty and the IDS to evaluate and generate findings. Might be duplicative, but alas.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Whoa that got mangled - here is what I meant to type...<br><br>Of note - you don't NEED to enable CloudTrail, VPC Flow Logs, etc. for GuardDuty to function: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html#setup-before.<br><br>However, in an effort to maximize coverage, it does make sense to enable those sources and ship them to your IDS. This will allow both GuardDuty and the IDS to evaluate and generate findings. Might be duplicative, but alas.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 818143,
          "date": "Wed 22 Feb 2023 18:52",
          "username": "createchange",
          "content": "Whoa that got mangled - here is what I meant to type...<br><br>Of note - you don't NEED to enable CloudTrail, VPC Flow Logs, etc. for GuardDuty to function: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html#setup-before.<br><br>However, in an effort to maximize coverage, it does make sense to enable those sources and ship them to your IDS. This will allow both GuardDuty and the IDS to evaluate and generate findings. Might be duplicative, but alas.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 763344,
          "date": "Sun 01 Jan 2023 22:18",
          "username": "awsec2",
          "content": "CD<br>because of maximizing the coverage requirement<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry AC</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763345,
          "date": "Sun 01 Jan 2023 22:19",
          "username": "awsec2",
          "content": "sorry AC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734186,
          "date": "Sat 03 Dec 2022 04:21",
          "username": "tainh",
          "content": "https://aws.amazon.com/blogs/security/new-third-party-test-compares-amazon-guardduty-to-network-intrusion-detection-systems/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#391",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is observing frequent bursts of unusual traffic to its corporate website. The IP address ranges that inflate the requests keep changing, and the volumes of traffic are increasing.<br><br>A security engineer needs to implement a solution to protect the website from a potential DDoS attack. The solution must rack the rate of requests from IP addresses. When the requests from a particular IP address exceed a specific rate, the solution must limit the amount of traffic that can reach the website from that IP address.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#391",
          "answers": [
            {
              "choice": "<p>Setup Amazon Inspector on the backend servers. Create assessment targets with a rate-based configuration to block any offending IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a rate-based rule in AWS WAF to block an IP address when that IP address exceeds the configured threshold rate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Identity the offending client IP address ranges. Create a regular rule in AWS WAF to block the offending IP address ranges.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a rate-based rule in Amazon GuardDuty to block an IP address when that IP address exceeds the configured threshold rate<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 391 discussion",
      "discusstion": [
        {
          "id": 734187,
          "date": "Sat 03 Dec 2022 04:23",
          "username": "tainh",
          "content": "B is correct<br>WAF: rate-based rule",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914584,
          "date": "Sun 04 Jun 2023 14:34",
          "username": "Toptip",
          "content": "B easy one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 771830,
          "date": "Tue 10 Jan 2023 22:50",
          "username": "Nocky24",
          "content": "B for sure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724955,
          "date": "Wed 23 Nov 2022 07:55",
          "username": "Isaias",
          "content": "rate-base rule with WAF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724286,
          "date": "Tue 22 Nov 2022 12:42",
          "username": "luisfsm",
          "content": "Agree with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723128,
          "date": "Mon 21 Nov 2022 03:05",
          "username": "AdamWest",
          "content": "B - Rate Based WAF ACL",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 722148,
          "date": "Sat 19 Nov 2022 18:48",
          "username": "Shriraj32",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#392",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an organization in AWS Organizations to manage its AWS accounts. The company runs its primary application on Amazon EC2 instances. A security engineer discovers unauthorized access in one of the company's developer AWS accounts. An investigation reveals that AWS access keys from the developer account were mistakenly added to public source code repository.<br><br>Which combination of actions should the security engineer take to secure the compromised account? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#392",
          "answers": [
            {
              "choice": "<p>Rotate all the access key pairs in the compromised account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create security group that denies traffic from the internet. Attach the security group to all EC2 instances in the compromised account<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Temporarily remove the compromised account from the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete all EC2 key pairs in the compromised account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete any potentially unauthorized IAM users in the compromised account. Change the password for all other IAM users.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 392 discussion",
      "discusstion": [
        {
          "id": 734193,
          "date": "Sat 03 Dec 2022 04:49",
          "username": "tainh",
          "content": "A,E<br>https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 932674,
          "date": "Sat 24 Jun 2023 16:45",
          "username": "Green53",
          "content": "A+E for me. Here's why:<br><br>A - This is the first step. The attacker could have used the compromised keys to create others, so best rotate them all (see https://repost.aws/knowledge-center/potential-account-compromise)<br>B - Rubbish<br>C - Potentially reduces the security controls (SCPs?), or, if not, provides no benefit<br>D - Deleting EC2 key pairs is fine (attacker may have generated them), but this doesn't prevent an attacker using these keys on instances they may have provisioned. I'd expect an additional \\\"remove new resources using these keys\\\" (or similar) for this to be useful<br>E - The attacker may have created new users, or changed the passwords of others.<br><br>A + E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 914595,
          "date": "Sun 04 Jun 2023 14:45",
          "username": "Toptip",
          "content": "Only A+E make sense.. i can't understand D, why deleting all EC2 access keys? that's not really a smart thing to do!! especially in production environment!!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 853438,
          "date": "Tue 28 Mar 2023 18:33",
          "username": "Cyp",
          "content": "I think D and E is the answer because if an access key is exposed, it dosent mean that attacker and capture the other access keys. Once downloaded Access keys can not be seen from console either from CLI.<br><br> On the other hand, if attacker got access to ec2 console and have or define the privileges, can download EC2 key pairs. So it makes sense to delete all EC2 key pairs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 765331,
          "date": "Wed 04 Jan 2023 08:04",
          "username": "secdaddy",
          "content": "It would be nice if the answers actually mapped to AWS documentation wouldn't it?<br>I guess AE<br>A makes sense<br>B not applicable<br>C not stupid but not recommended in the documentation that I can see<br>D delete compromised keys yes but delete all keys in the account, probably not<br>E this makes sense",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763346,
          "date": "Sun 01 Jan 2023 22:22",
          "username": "awsec2",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727288,
          "date": "Sat 26 Nov 2022 06:52",
          "username": "Isaias",
          "content": "I beleive AE too<br>https://aws.amazon.com/es/premiumsupport/knowledge-center/potential-account-compromise/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 724011,
          "date": "Tue 22 Nov 2022 01:53",
          "username": "AdamWest",
          "content": "CD - Invalidate creds, Invalidate temp creds (if created), restore access, review access<br>https://aws.amazon.com/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 722149,
          "date": "Sat 19 Nov 2022 18:50",
          "username": "Shriraj32",
          "content": "A and E, I believe.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#393",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company finds that one of its Amazon EC2 instances suddenly has a high CPU usage. The company does not know whether the EC2 instance is compromised or whether the operating system is performing background cleanup.<br><br>Which combination of steps should a security engineer take before investigating the issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#393",
          "answers": [
            {
              "choice": "<p>Disable termination protection for the EC2 instance if termination protection has not been disabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable termination protection for the EC2 instance if termination protection has not been enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Take snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Remove all snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Capture the EC2 instance metadata, and then tag the EC2 instance as under quarantine.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Immediately remove any entries in the EC2 instance metadata that contain sensitive information.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 393 discussion",
      "discusstion": [
        {
          "id": 733854,
          "date": "Fri 02 Dec 2022 16:03",
          "username": "AdamWest",
          "content": "BCE -<br>1. Capture the metadata from the Amazon EC2 instance, before you make any<br>changes to your environment.<br>2. Protect the Amazon EC2 instance from accidental termination by enabling<br>termination protection for the instance.<br>3. Isolate the Amazon EC2 instance by switching the VPC Security Group or<br>explicitly denying network traffic to the IP address of the instance with the<br>Network Access Control List.<br>4. Detach the Amazon EC2 instance from any AWS Auto Scaling groups.<br>5. Deregister the Amazon EC2 instance from any related Elastic Load Balancing<br>service.<br>Amazon Web Services AWS Security Incident Response Guide<br>Page 35<br>6. Snapshot the Amazon EBS data volumes that are attached to the EC2 instance<br>for preservation and follow-up investigations.<br>7. Tag the Amazon EC2 instance as quarantined for investigation, and add any<br>pertinent metadata, such as the trouble ticket associated with the investigation.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 734194,
          "date": "Sat 03 Dec 2022 04:57",
          "username": "tainh",
          "content": "Sure: BCE<br>https://d1.awsstatic.com/WWPS/pdf/aws_security_incident_response.pdf",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 914604,
          "date": "Sun 04 Jun 2023 14:48",
          "username": "Toptip",
          "content": "BCE for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 732414,
          "date": "Thu 01 Dec 2022 09:34",
          "username": "D2",
          "content": "Answer BCE<br><br>https://d1.awsstatic.com/WWPS/pdf/aws_security_incident_response.pdf",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 724290,
          "date": "Tue 22 Nov 2022 12:54",
          "username": "luisfsm",
          "content": "By elimination, BCE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        }
      ]
    },
    {
      "question_id": "#394",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that stores data in an Amazon S3 bucket. In the same AWS account, the company deploys a new data analysis application on Amazon EC2 with an instance profile attached. The analysis application is able to get a list of S3 objects but is unable to read the data. The following IAM policy is attached to the instance role:<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image19.png\"&gt;<br><br>Which solution will give the analysis application the ability to read the data in the S3 bucket?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#394",
          "answers": [
            {
              "choice": "<p>Add the s3:GetObjectVersion action to the list of actions in the policy that is attached to the instance role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the following IAM policy to the instance role:<img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image20.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a bucket policy for the data bucket. Add the following statement to the bucket policy:<img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image21.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the application to write objects with the bucket-owner-full-control ACL.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 394 discussion",
      "discusstion": [
        {
          "id": 895175,
          "date": "Thu 11 May 2023 17:13",
          "username": "ITGURU51",
          "content": "In this particular case, it is not necessary to create a new bucket policy since the IAM policy is not correct. The IAM policy needs the /* parameter.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771842,
          "date": "Tue 10 Jan 2023 23:10",
          "username": "Nocky24",
          "content": "B for sure. C is missing the Principal so is an invalid bucket policy.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765344,
          "date": "Wed 04 Jan 2023 08:38",
          "username": "secdaddy",
          "content": "B as the already attached IAM policy is missing /*",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 734248,
          "date": "Sat 03 Dec 2022 07:54",
          "username": "tainh",
          "content": "B is answer<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-instance-access-bucket/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732727,
          "date": "Thu 01 Dec 2022 15:47",
          "username": "Isaias",
          "content": "B correct<br>C incorrect,it does not have a Resource base policy format, It=C2=B4s missing the Principal",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732318,
          "date": "Thu 01 Dec 2022 07:11",
          "username": "landsamboni",
          "content": "B. Add the following IAM policy to the instance role:",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#395",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer recently enabled the me-south-1 Region. The security engineer is now assuming an IAM role and is making an API call to an endpoint in me-south-1.<br><br>The API call returns the following error: 'AuthFailure: AWS was not able to validate the provided access credentials' .<br><br>Which solutions will resolve this error? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#395",
          "answers": [
            {
              "choice": "<p>Add the iam:SetSecurityTokenServicePreferences action to the security engineer's IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Security Token Service (AWS STS) endpoint in me-south-1 to obtain an STS token.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Security Token Service (AWS STS) endpoint in the us-east-1 Region to obtain an STS token.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Manually activate the AWS Security Token Service (AWS STS) endpoint in me-south-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the AWS Security Token Service (AWS STS) global endpoint to issue Region-compatible session tokens.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 395 discussion",
      "discusstion": [
        {
          "id": 734251,
          "date": "Sat 03 Dec 2022 08:04",
          "username": "tainh",
          "content": "B,E<br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-validate-access-credentials/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 939744,
          "date": "Sat 01 Jul 2023 10:19",
          "username": "whuzzup",
          "content": "By default, the AWS Security Token Service (AWS STS) is available as a global service, and all AWS STS requests go to a single endpoint at https://sts.amazonaws.com. AWS recommends using Regional AWS STS endpoints instead of the global endpoint to reduce latency, build in redundancy, and increase session token validity.<br> If you choose to use the global endpoint, you must change the Region compatibility of AWS STS session tokens for the global endpoint. Doing so ensures that tokens are valid in all AWS Regions.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 932637,
          "date": "Sat 24 Jun 2023 16:17",
          "username": "Green53",
          "content": "Difficult question!<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html<br>States that 'me-south-1' is an opt-in region. If this is the case, then you have two options (according to https://repost.aws/knowledge-center/iam-validate-access-credentials).<br><br>* Obtain tokens from a Regional endpoint - i.e B<br>* Change Region compatibility of session tokens for global endpoint - i.e E.<br><br>I'd go:<br>B + E<br>Because of the above, and the fact it states solutionS, rather than solution. While A/E are a valid combination, it's a single solution. B/E are both solutions (granted, you *might* need A before applying E, but we don't know what permissions the engineer has).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 914625,
          "date": "Sun 04 Jun 2023 15:06",
          "username": "Toptip",
          "content": "Well... it's A+E 100%",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 895198,
          "date": "Thu 11 May 2023 17:52",
          "username": "ITGURU51",
          "content": "The IAM role is being assumed in the me south 1 region. Therefore, the temporary access token will be granted from that specific region where the resource is located. B<br>Change Region compatibility E.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 870747,
          "date": "Sat 15 Apr 2023 09:56",
          "username": "isokalau",
          "content": "According to the provided links:<br>To change the Region compatibility of session tokens for the global endpoint (console):<br>Sign in as a root user or a user with permissions to perform IAM administration tasks. To change the compatibility of session tokens, you must have a policy that allows the iam:SetSecurityTokenServicePreferences action.<br><br>Open the IAM console. In the navigation pane, choose Account settings.<br><br>Under Security Token Service (STS) section Session Tokens from the STS endpoints. The Global endpoint indicates Valid only in AWS Regions enabled by default. Choose Change.<br><br>In the Change region compatibility dialog box, select All AWS Regions. Then choose Save changes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 810752,
          "date": "Thu 16 Feb 2023 15:27",
          "username": "Boss_Sivaji",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-manage-tokens",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 810698,
          "date": "Thu 16 Feb 2023 14:35",
          "username": "gtmnagalla",
          "content": "Option A- provides instructions to change the Region compatibility of session tokens for the global endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 794405,
          "date": "Tue 31 Jan 2023 17:43",
          "username": "KVK16",
          "content": "The Global endpoint Tokens are valid in Default regions only. So the error was being generated .Two way approach 1. Go to Regional endpoint for (Regions that are manually enabled) for token or Go to Global endpoint and ask to generate regional tokens - these tokens are valid in all regions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 765359,
          "date": "Wed 04 Jan 2023 09:00",
          "username": "secdaddy",
          "content": "Could be AB following the one best practice of getting a token from the regional endpoint.<br>Could be AE to answer with two different ways to solve the error if one assumes that adding SetSecurityTokenServicePreferences infers correct configuration of it.<br>Could be BE also to answer with two different ways to solve the error, if one went so far as to say that adding SetSecurityTokenServicePreferences without the right parameters wouldn't be enough.<br>'Which solutions will resolve this error' can be interpreted to be asking for more than one solution so I will guess AE, assuming that SetSecurityTokenServicePreferences includes the necessary configuration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754096,
          "date": "Fri 23 Dec 2022 10:25",
          "username": "sse69",
          "content": "BE<br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-validate-access-credentials/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>refer to thelink<br>1. AWS STS endpoint closer to your application.<br>2. AWS STS global endpoint.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 754964,
          "date": "Sat 24 Dec 2022 16:24",
          "username": "due",
          "content": "refer to thelink<br>1. AWS STS endpoint closer to your application.<br>2. AWS STS global endpoint.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 752569,
          "date": "Wed 21 Dec 2022 17:36",
          "username": "aj2aj2",
          "content": "Answer AE . To change the Region compatibility of session tokens for the global endpoint (console)<br><br>Sign in as a root user or an IAM user with permissions to perform IAM administration tasks. To change the compatibility of session tokens, you must have a policy that allows the \\\"iam:SetSecurityTokenServicePreferences\\\" action.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-manage-tokens",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747329,
          "date": "Fri 16 Dec 2022 16:17",
          "username": "Un1c0rn",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-manage-tokens",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 745303,
          "date": "Wed 14 Dec 2022 17:58",
          "username": "amcloud",
          "content": "AD Seems Good.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-manage-tokens",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 734748,
          "date": "Sun 04 Dec 2022 00:42",
          "username": "speedster",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/iam-validate-access-credentials/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 724298,
          "date": "Tue 22 Nov 2022 13:06",
          "username": "luisfsm",
          "content": "I'd choose BD<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-validate-access-credentials/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why D!, no need of manual activate as per the reference. Answer is BE</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 734747,
          "date": "Sun 04 Dec 2022 00:41",
          "username": "speedster",
          "content": "why D!, no need of manual activate as per the reference. Answer is BE",
          "upvote_count": "2",
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
      "question_text": "<p>A company has two applications: Application A and Application B. The applications run in different VPCs in the same account. The account is not part of an organization in AWS Organizations. The company's development team manages both applications by using AWS CloudFormation.<br><br>The development team splits into two teams, Now, Team A manages Application A. Team B manages Application B. AWS CloudTrail logs in the account are sent to an Amazon S3 bucket.<br><br>The company needs to prevent faults in one application from affecting the other application, ensure that teams can access only their own workloads, and send CloudTrail logs to a central S3 bucket. In addition, the company needs granular billing for each application.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>Deploy an attribute-based access control (ABAC) tagging strategy to separate the teams. Use cost allocation tags for granular billing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a role-based access control (RBAC) tagging strategy to separate the teams. Use cost allocation tags for granular billing<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Control Tower. Create two accounts: one account for Application A and one account for Application B. Migrate each application to its new account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate Application B to a new account. Use CloudFormation to send CloudTrail logs from the new account to the existing S3 bucket in the original account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 396 discussion",
      "discusstion": [
        {
          "id": 724299,
          "date": "Tue 22 Nov 2022 13:10",
          "username": "luisfsm",
          "content": "\\\"MOST operationally efficient\\\" is subjective, but I'd go with A:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html#introduction_attribute-based-access-control_compare-rbac<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed - from your URL \\\"The disadvantage to using the traditional RBAC model is that when employees add new resources, you must update policies to allow access to those resources.\\\" which is higher operational overhead.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 765382,
          "date": "Wed 04 Jan 2023 09:25",
          "username": "secdaddy",
          "content": "Agreed - from your URL \\\"The disadvantage to using the traditional RBAC model is that when employees add new resources, you must update policies to allow access to those resources.\\\" which is higher operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 929642,
          "date": "Wed 21 Jun 2023 16:43",
          "username": "vherman",
          "content": "I'm thinking, granular billing would be impossible in one account env. Think of data transfer. how would you split data transferred by A and B ???<br><br>Control tower",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914690,
          "date": "Sun 04 Jun 2023 15:44",
          "username": "Toptip",
          "content": "Most operationally efficient with FULL isolation between teams and AppsControl Tower.<br>From my experience ABAC is actually a bad idea especially when you want to separate two teams/resources... =E2=9C=85<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Not part of organizations\\\"...CT can't be used w/o it.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930061,
          "date": "Thu 22 Jun 2023 03:49",
          "username": "kuber2023",
          "content": "\\\"Not part of organizations\\\"...CT can't be used w/o it.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 895206,
          "date": "Thu 11 May 2023 18:00",
          "username": "ITGURU51",
          "content": "Attribute based access control is preferred over RBAC and is consider the best practice. It is more efficient and easier to manage than RBAC.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734254,
          "date": "Sat 03 Dec 2022 08:12",
          "username": "tainh",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 728882,
          "date": "Mon 28 Nov 2022 09:24",
          "username": "D2",
          "content": "Considering below requirements \\\"prevent faults in one application from affecting the other application, ensure that teams can access only their own workloads, and send CloudTrail logs to a central S3 bucket. In addition, the company needs granular billing for each application.\\\"<br>Most operationally efficient solution would be control tower<br><br>Answer C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>they don't have AWS Organizations, so you can't use Control Tower</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 732322,
          "date": "Thu 01 Dec 2022 07:18",
          "username": "landsamboni",
          "content": "they don't have AWS Organizations, so you can't use Control Tower",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 726986,
          "date": "Fri 25 Nov 2022 18:46",
          "username": "AdamWest",
          "content": "Agree A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#397",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is evaluating a company's use of AWS Key Management Service (AWS KMS). The security engineer must implement a hybrid solution with two sets of keys to meet the following requirements:<br><br>- Set 1: The company needs granular control over the keys so that the company can maintain a copy of the keys in the key management infrastructure and reimport the keys at any time. The company needs the ability to set the expiration period to 3 days for the keys.<br>- Set 2: No restrictions exist regarding immediate key deletion. A waiting period of 14 days is acceptable for keys to be marked deleted.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Use imported keys for Set 1. Use AWS managed keys for Set 2. For Set 1, set an expiration period and manually delete the keys after the expiration period has elapsed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use imported keys for Set 1. Use AWS managed keys for Set 2. For Set 1, set an expiration period. AWS will automatically delete the keys after the expiration period has elapsed.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS managed keys for Set 1. Use imported keys for Set 2. For Set 1, set an expiration period and manually delete the keys after the expiration period has elapsed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS managed keys for Set 1. Use imported keys for Set 2. For Set 1, set an expiration period. AWS will automatically delete the keys after the expiration period has elapsed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 397 discussion",
      "discusstion": [
        {
          "id": 849048,
          "date": "Fri 24 Mar 2023 07:32",
          "username": "rijub2022",
          "content": "https://aws.amazon.com/kms/faqs/<br>' You may set an expiration period for an imported key. AWS KMS will automatically delete the key material after the expiration period. You can also delete imported key material on demand. In both cases the key material itself is deleted but the KMS key reference in AWS KMS and associated metadata are retained so that the key material can be re-imported in the future. Keys generated by AWS KMS do not have an expiration time and cannot be deleted immediately; there is a mandatory 7 to 30 day wait period. All customer managed KMS keys, regardless of whether the key material was imported, can be manually disabled or scheduled for deletion. In this case the KMS key itself is deleted, not just the underlying key material.' ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 938897,
          "date": "Fri 30 Jun 2023 09:37",
          "username": "Granwizzard",
          "content": "A is the correct one, please fix all the wrong answers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 931182,
          "date": "Fri 23 Jun 2023 05:20",
          "username": "Green53",
          "content": "Both C and D are instantly out, you don't have granuluar control over AWS Managed Keys.<br>For B, you can set an expiration period and AWS will automatically delete:<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html<br><br>When you import the key material for your KMS key, you can set an optional expiration date and time for the key material of up to 365 days from the import date. When imported key material expires, *AWS KMS* deletes it. This action changes the key state of the KMS key to PendingImport, which prevents it from being used in any cryptographic operation. To use the KMS key, you must reimport a copy of the original key material.<br><br>So I would go B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914696,
          "date": "Sun 04 Jun 2023 15:52",
          "username": "Toptip",
          "content": "B for sure...AWS will deleted expired imported keys",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 895430,
          "date": "Thu 11 May 2023 23:46",
          "username": "gerches",
          "content": "imported keys cannot be automatically deleted",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 834503,
          "date": "Fri 10 Mar 2023 00:06",
          "username": "awsguru1998",
          "content": "A, you cannot delete set2 as they are aws managed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822354,
          "date": "Sun 26 Feb 2023 13:25",
          "username": "SergioP",
          "content": "Option B is not a viable solution because AWS does not automatically delete imported keys. , the correct it=C2=B4s A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 765388,
          "date": "Wed 04 Jan 2023 09:36",
          "username": "secdaddy",
          "content": "I agree B - Also I note that the Set 1 requirements specifically mentions 'reimport' and you can't re-import if you haven't imported to start with which eliminates C and D.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 734255,
          "date": "Sat 03 Dec 2022 08:18",
          "username": "tainh",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html<br>You can only schedule the deletion of a customer managed key. You cannot delete AWS managed keys or AWS owned keys.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724302,
          "date": "Tue 22 Nov 2022 13:13",
          "username": "luisfsm",
          "content": "According to this information the only that applies is B:<br><br>https://aws.amazon.com/kms/faqs/#:~:textYou%20may%20set%20an%20expiration%20period%20for%20an%20imported%20key.%20AWS%20KMS%20will%20automatically%20delete%20the%20key%20material%20after%20the%20expiration%20period.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#398",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The company's security team is developing automation to capture Amazon EC2 forensic evidence within any AWS account in the organization. The company has encrypted the Amazon Elastic Block Store (Amazon EBS) volumes of all the EC2 instances in the organization by default by using the AWS managed key. The automation consists of AWS Lambda functions and AWS Step Functions state machines.<br><br>The automation assumes an IAM role in the target AWS account. The automation takes snapshots of suspicious EC2 instances and assigns permissions to allow the security team's account to copy the snapshots. The security team has an AWS Key Management Service (AWS KMS) key to encrypt the snapshots. During testing, the automation fails to copy the snapshots into the security team's AWS account.<br><br>Which combination of steps should the security team take so that the automation can capture EC2 forensic evidence in all AWS accounts in the organization? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#398",
          "answers": [
            {
              "choice": "<p>In the target AWS account, update the KMS key policy on the AWS managed key to explicitly allow the kms:Decrypt and kms:CreateGrant actions to the automation's IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the target AWS account, create a customer managed KMS key. Update the automation's IAM role to allow the kms:Encrypt, kms:Decrypt, kms:GenerateDataKey*, and kms:CreateGrant actions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the security team's AWS account, update the automation's IAM role to allow the kms:Encrypt, kms:Decrypt, kms:GenerateDataKey*, and kms:CreateGrant actions for the AWS managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the security team's AWS account, update the automation's IAM role to allow the kms:Encrypt, kms:Decrypt, kms:GenerateDataKey*, and kms:CreateGrant actions for the customer managed KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the security team's AWS account, update the automation code to take EBS snapshots and to use the AWS managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the security team's AWS account, update the automation code to take EBS snapshots and to use the customer managed KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 398 discussion",
      "discusstion": [
        {
          "id": 724619,
          "date": "Tue 22 Nov 2022 20:49",
          "username": "beatz",
          "content": "you cannot change the key policy for an AWS managed key, it has to be a CMK",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 734264,
          "date": "Sat 03 Dec 2022 08:35",
          "username": "tainh",
          "content": "BDF<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-policy.html<br>B: Step 4<br>D: Step 2<br>F: Step 1<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>'You can only share snapshots that are unencrypted or that are encrypted using a customer managed key. You can't share snapshots that are encrypted with the default EBS encryption KMS key. If you share encrypted snapshots, then you must also share the KMS key that was used to encrypt the source volume with the target accounts.'</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 755185,
          "date": "Sat 24 Dec 2022 22:49",
          "username": "Wilson_S",
          "content": "'You can only share snapshots that are unencrypted or that are encrypted using a customer managed key. You can't share snapshots that are encrypted with the default EBS encryption KMS key. If you share encrypted snapshots, then you must also share the KMS key that was used to encrypt the source volume with the target accounts.'",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914707,
          "date": "Sun 04 Jun 2023 15:57",
          "username": "Toptip",
          "content": "Very long Q/A but it's B+D+F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 843784,
          "date": "Sun 19 Mar 2023 14:46",
          "username": "Relaxeasy",
          "content": "the answer is bdf",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 742213,
          "date": "Mon 12 Dec 2022 00:45",
          "username": "Balki",
          "content": "Interesting fact.<br>You can view the key policy for an AWS managed key or a customer managed key, but you can only change the key policy for a customer managed key. The policies of AWS managed keys are created and managed by the AWS service that created the KMS key in your account. You cannot view or change the key policy for an AWS owned key.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 739918,
          "date": "Fri 09 Dec 2022 09:23",
          "username": "maddyr",
          "content": "agree with BDF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 723137,
          "date": "Mon 21 Nov 2022 03:29",
          "username": "AdamWest",
          "content": "ACE -75%<br>https://aws.amazon.com/blogs/compute/must-know-best-practices-for-amazon-ebs-encryption/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#399",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Secrets Manager to manage database credentials that an application uses to access Amazon DocumentDB (with MongoDB compatibility). The company needs to implement automated password rotation.<br><br>Which solution will meet this requirement with the LEAST administrative overhead?</p>",
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
              "choice": "<p>Create a new AWS Lambda function to manage the password rotation. Turn on automatic password rotation in Secrets Manager. Associate the rotation with the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on automatic password rotation in Secrets Manager. Configure Secrets Manager to create a new AWS Lambda function to manage the password rotation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the SecretsManagerRotationTemplate from the AWS Serverless Application Model (AWS SAM) to create a new AWS Lambda function. Change the vpc-config option of the Lambda function to include the subnet IDs when Amazon DocumentDB is hosted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the SecretsManagerRotationTemplate from the AWS Serverlss Application Model (AWS SAM) to create three new AWS Lambda functions: createSecret, setSecret, and testSecret. Change the vpc-config option of all three Lambda functions to include the subnet IDs where Amazon DocumentDB is hosted.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 399 discussion",
      "discusstion": [
        {
          "id": 734265,
          "date": "Sat 03 Dec 2022 08:38",
          "username": "tainh",
          "content": "B is correct<br>- Rotation is the process of periodically updating a secret. When you rotate a secret, you update the credentials in both the secret and the database or service. In Secrets Manager, you can set up automatic rotation for your secrets.<br>- Secrets Manager uses a Lambda function to rotate secrets",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1176558,
          "date": "Mon 18 Mar 2024 15:33",
          "username": "SKS",
          "content": "B is correct with criteria of least overhead .And document dB is natively supported by secret managerhttps://aws.amazon.com/blogs/security/how-to-rotate-amazon-documentdb-and-amazon-redshift-credentials-in-aws-secrets-manager/#:~:textSecrets%20Manager%20natively%20supports%20rotating,rotate%20other%20types%20of%20secrets.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 932621,
          "date": "Sat 24 Jun 2023 15:58",
          "username": "Green53",
          "content": "B seems like the best answer:<br>https://aws.amazon.com/blogs/security/how-to-rotate-amazon-documentdb-and-amazon-redshift-credentials-in-aws-secrets-manager/<br><br>Secrets Manager can create the function for you.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914710,
          "date": "Sun 04 Jun 2023 16:01",
          "username": "Toptip",
          "content": "B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 769817,
          "date": "Sun 08 Jan 2023 21:34",
          "username": "sahanpere",
          "content": "To set up rotation using the console, you need to first choose a rotation strategy. Then you configure the secret for rotation, which creates a Lambda rotation function if you don't already have one. The console also sets permissions for the Lambda function execution role. The last step is to make sure that the Lambda rotation function can access both Secrets Manager and your database through the network.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 769084,
          "date": "Sun 08 Jan 2023 05:51",
          "username": "Smartphone",
          "content": "Answer is B<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765494,
          "date": "Wed 04 Jan 2023 11:41",
          "username": "secdaddy",
          "content": "Good writeup here but it doesn't mention either templates or vpc endpoints so these don't seem to be required to be configured additionally on top of just enabling DocumentDB key rotation in Secrets Manager ?<br>https://aws.amazon.com/blogs/security/how-to-rotate-amazon-documentdb-and-amazon-redshift-credentials-in-aws-secrets-manager/<br><br>What would the benefit be of using a template vs not using a template, if a template isn't actually required for key rotation with DocumentDB ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 759271,
          "date": "Wed 28 Dec 2022 03:05",
          "username": "must_be_rohit",
          "content": "LEAST administrative overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751133,
          "date": "Tue 20 Dec 2022 16:38",
          "username": "Blueocean",
          "content": "Option C is correct answer. While Option B is the correct answer for password rotations and is correct that a lamba function is created to rotate which points to Option B, the question asks for password rotation for DocumentDB(with MongoDB) for this the below link is better Option C.<br><br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html#NON-RDS_rotation_templates",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742206,
          "date": "Mon 12 Dec 2022 00:34",
          "username": "Balki",
          "content": "LEAST administrative overhead. Use the template and do below steps<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-other.html<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-configuring",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 739927,
          "date": "Fri 09 Dec 2022 09:34",
          "username": "maddyr",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your link shows answer B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 878455,
          "date": "Sun 23 Apr 2023 16:14",
          "username": "Kezuko",
          "content": "Your link shows answer B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732326,
          "date": "Thu 01 Dec 2022 07:26",
          "username": "landsamboni",
          "content": "B - Use Secrets Manager for Password rotation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree with you as this link.<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742460,
          "date": "Mon 12 Dec 2022 07:27",
          "username": "Phongsanth",
          "content": "Agree with you as this link.<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728897,
          "date": "Mon 28 Nov 2022 09:50",
          "username": "D2",
          "content": "Lambda is created by AWS when rotation is enabled.<br><br>Answer B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 722978,
          "date": "Sun 20 Nov 2022 21:14",
          "username": "AdamWest",
          "content": "B - Use Secrets Manager for Password rotation.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company has multiple AWS accounts in an organization in AWS Organizations. The company uses Amazon S3 buckets to store sensitive information of patients. The company needs to restrict users from deleting any S3 bucket across the organization.<br><br>What is the MOST scalable solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#400",
          "answers": [
            {
              "choice": "<p>Permissions boundaries in AWS Identity and Access Management (IAM)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>S3 bucket policies<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Tag policies<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>SCPs<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 400 discussion",
      "discusstion": [
        {
          "id": 724284,
          "date": "Tue 22 Nov 2022 12:41",
          "username": "AdamWest",
          "content": "SCP - SCPs offer central control over the maximum available permissions for all accounts in your organization",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914714,
          "date": "Sun 04 Jun 2023 16:02",
          "username": "Toptip",
          "content": "SCP is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 796436,
          "date": "Thu 02 Feb 2023 21:53",
          "username": "Suhasj02",
          "content": "SCP for across organization",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731053,
          "date": "Wed 30 Nov 2022 04:39",
          "username": "kerar",
          "content": "This SCP prevents users or roles in any affected account from deleting any S3 bucket or objects.<br><br>https://asecure.cloud/a/scp_s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D for Sure, I agree</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 767073,
          "date": "Thu 05 Jan 2023 22:57",
          "username": "Leonardocp33",
          "content": "D for Sure, I agree",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731051,
          "date": "Wed 30 Nov 2022 04:38",
          "username": "kerar",
          "content": "This SCP prevents users or roles in any affected account from deleting any S3 bucket or objects.<br><br>https://asecure.cloud/a/scp_s3/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    }
  ]
}