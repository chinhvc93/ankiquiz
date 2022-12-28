var ExamTopic_001_100 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company policies require encryption of sensitive data at rest. You are considering the possible options for protecting data while storing it at rest on an EBS data volume, attached to an EC2 instance.<br>Which of these options would allow you to encrypt your data at rest? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Implement third party volume encryption tools</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement SSL/TLS for all services running on the server<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Encrypt data inside your applications before storing it on EBS</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Encrypt data using native data encryption drivers at the file system level</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Do nothing as EBS volumes are encrypted by default<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495061,
          "date": "Mon 06 Dec 2021 11:55",
          "username": "KiraguJohnkrisvija12RVivek",
          "content": "Which of the following choices enables you to encrypt your data in transit? Why is SSL wrong?SSL/TLS encrypts data in transit and not in rest.The question mentions \\\"possible options for protecting data while storing it at rest\\\"SSL/TLS is used for encrrypting data in transite",
          "upvote_count": "531"
        },
        {
          "id": 512542,
          "date": "Wed 29 Dec 2021 19:16",
          "username": "krisvija12",
          "content": "SSL/TLS encrypts data in transit and not in rest.",
          "upvote_count": "3"
        },
        {
          "id": 511632,
          "date": "Tue 28 Dec 2021 23:50",
          "username": "RVivek",
          "content": "The question mentions \\\"possible options for protecting data while storing it at rest\\\"SSL/TLS is used for encrrypting data in transite",
          "upvote_count": "1"
        },
        {
          "id": 675401,
          "date": "Wed 21 Sep 2022 20:03",
          "username": "Ashok_Gonuguntla",
          "content": "ACD is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 653247,
          "date": "Mon 29 Aug 2022 03:55",
          "username": "nazhar",
          "content": "BCD is incorrect",
          "upvote_count": "1"
        },
        {
          "id": 653191,
          "date": "Mon 29 Aug 2022 01:00",
          "username": "epomatti",
          "content": "Correct: A, C, D<br><br>Incorrect:<br>B - TLS is for transit encryption, not encryption at rest<br>E - EBS does not automatically encrypt",
          "upvote_count": "1"
        },
        {
          "id": 651033,
          "date": "Wed 24 Aug 2022 02:10",
          "username": "exam_asz",
          "content": "No need SSL/TLS",
          "upvote_count": "1"
        },
        {
          "id": 554868,
          "date": "Wed 23 Feb 2022 21:50",
          "username": "pititcu667",
          "content": "bcd is incorrect.",
          "upvote_count": "1"
        },
        {
          "id": 546364,
          "date": "Sun 13 Feb 2022 10:50",
          "username": "futen0326futen0326",
          "content": "You all have completely misread the question .. it is not a trick question.<br><br>\\\"You're weighing your choices for data protection while it's stored at rest on an EBS data disk\\\"<br><br>So besides the questions literally asking plainly how you can encrypt data in transit.. The scenario is saying that the data is sitting in the EBS data disk waiting to be moved, and the data will need to be encrypted in transit.Encrypting the volume DOES NOT provide encryption in transit..",
          "upvote_count": "21"
        },
        {
          "id": 546366,
          "date": "Sun 13 Feb 2022 10:52",
          "username": "futen0326",
          "content": "Encrypting the volume DOES NOT provide encryption in transit..",
          "upvote_count": "1"
        },
        {
          "id": 532292,
          "date": "Tue 25 Jan 2022 18:15",
          "username": "cannottellname",
          "content": "I believe, Data in transit means from EC2 level application to EBS volumes which is internal. Hence, SSL/TLS is not the solution. Thus, ACD seems correct options here.<br><br>3rd party encryption, File level encryption, and added already encrypted data.",
          "upvote_count": "1"
        },
        {
          "id": 527892,
          "date": "Wed 19 Jan 2022 21:26",
          "username": "Ni_yot",
          "content": "A, C and D.  Trick question which i fell for.the question is asking about EBS volume encryption not for data in transit.",
          "upvote_count": "1"
        },
        {
          "id": 520760,
          "date": "Mon 10 Jan 2022 10:22",
          "username": "pititcu667",
          "content": "it's acd because: \\\"You're weighing your choices for data protection while it's stored at rest on an EBS data disk connected to an EC2 instance.\\\" so they do not care about transit so it rules out b.",
          "upvote_count": "1"
        },
        {
          "id": 515838,
          "date": "Mon 03 Jan 2022 15:40",
          "username": "GeniusMikeLiu",
          "content": "why B is wrong? the question is \\\"Which of the following choices enables you to encrypt your data in transit\\\". SSL/TLS is to encrypt data in transit, I think B is right. Wired Question.",
          "upvote_count": "1"
        },
        {
          "id": 446146,
          "date": "Tue 02 Nov 2021 22:28",
          "username": "guru_jikaleen_bhaiyakrisvija12",
          "content": "Bonus Question:<br><br>A financial services company uses Amazon RDS for Oracle with Transparent Data Encryption (TDE). The company is required to encrypt its data at rest at all times. The key required to decrypt the data has to be highly available, and access to the key must be limited. As a regulatory requirement, the company must have the ability to rotate the encryption key on demand. The company must be able to make the key unusable if any potential security breaches are spotted. The company also needs to accomplish these tasks with minimum overhead.<br>What should the database administrator use to set up the encryption to meet these requirements?<br><br>A.  AWS CloudHSM<br>B.  AWS Key Management Service (AWS KMS) with an AWS managed key<br>C.  AWS Key Management Service (AWS KMS) with server-side encryption<br>D.  AWS Key Management Service (AWS KMS) CMK with customer-provided material<br><br>A or D, which one is correct ?Its D, CloudHSM is not highly available by default.I guess, it should be A.  You can build HSM HA by spreading clusters across AZs.",
          "upvote_count": "221"
        },
        {
          "id": 470583,
          "date": "Wed 03 Nov 2021 04:26",
          "username": "kaleen_bhaiyakrisvija12",
          "content": "Its D, CloudHSM is not highly available by default.I guess, it should be A.  You can build HSM HA by spreading clusters across AZs.",
          "upvote_count": "21"
        },
        {
          "id": 512565,
          "date": "Wed 29 Dec 2021 19:26",
          "username": "krisvija12",
          "content": "I guess, it should be A.  You can build HSM HA by spreading clusters across AZs.",
          "upvote_count": "1"
        },
        {
          "id": 444506,
          "date": "Mon 01 Nov 2021 01:44",
          "username": "lferrari",
          "content": "ACD Correct",
          "upvote_count": "1"
        },
        {
          "id": 435574,
          "date": "Sat 23 Oct 2021 21:54",
          "username": "kashi1983",
          "content": "Answer is ACD",
          "upvote_count": "2"
        },
        {
          "id": 405768,
          "date": "Mon 11 Oct 2021 05:11",
          "username": "Akhil254",
          "content": "ACD Correct",
          "upvote_count": "3"
        },
        {
          "id": 384497,
          "date": "Fri 08 Oct 2021 00:15",
          "username": "walkwolf3",
          "content": "Answer B is to encrypt data in transit. <br>New Amazon EBS volumes aren't encrypted by default. So E is incorrect. https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/<br><br>The correct answer is ACD. ",
          "upvote_count": "1"
        },
        {
          "id": 327946,
          "date": "Thu 07 Oct 2021 15:15",
          "username": "anandbabu",
          "content": "ACD is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer is deploying an SSL enabled web application to AWS and would like to implement a separation of roles between the EC2 service administrators that are entitled to login to instances as well as making API calls and the security officers who will maintain and have exclusive access to the application's X.509 certificate that contains the private key.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. Upload the certificate on an S3 bucket owned by the security officers and accessible only by EC2 Role of the web servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the web servers to retrieve the certificate upon boot from an CloudHSM is managed by the security officers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure system permissions on the web servers to restrict access to the certificate only to the authority security officers<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure IAM policies authorizing access to the certificate store only to the security officers and terminate SSL on an ELB. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 35845,
          "date": "Wed 22 Sep 2021 05:40",
          "username": "hcchou",
          "content": "Here is the full text of Option D<br><br>D.  Configure IAM policies authorizing access to the certificate store only to the security officers and terminate SSL on an ELB. ",
          "upvote_count": "20"
        },
        {
          "id": 11292,
          "date": "Mon 20 Sep 2021 21:39",
          "username": "cptnitinz",
          "content": "I believe it would have been helpfully to explain that \\\"terminate\\\" means to terminate the SSL/TLS session before reaching the EC2 instance. This could be done by an Loadbalancer which is only accessibleto the Security team.B is a distraction, why? because HSM can be used to offload SSL but not to download the X509 at boot time :-) Picture speaks 1000 words, check the picture on https://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload-overview.html and things will make sense. D makes full sense. Terminate SSL/TLS connection on ELB and from there use HTTP. I have done this many times with legacy apps which could not support latest TLS. Flow is like this Client (HTTPS) --> (HTTPS) LBL (HTTP) ---> Web Server.<br><br>For this question answer is D. ",
          "upvote_count": "115"
        },
        {
          "id": 314336,
          "date": "Thu 28 Oct 2021 14:01",
          "username": "nitinz",
          "content": "B is a distraction, why? because HSM can be used to offload SSL but not to download the X509 at boot time :-) Picture speaks 1000 words, check the picture on https://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload-overview.html and things will make sense. D makes full sense. Terminate SSL/TLS connection on ELB and from there use HTTP. I have done this many times with legacy apps which could not support latest TLS. Flow is like this Client (HTTPS) --> (HTTPS) LBL (HTTP) ---> Web Server.<br><br>For this question answer is D. ",
          "upvote_count": "5"
        },
        {
          "id": 650968,
          "date": "Tue 23 Aug 2022 21:49",
          "username": "rochester",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 405771,
          "date": "Sun 07 Nov 2021 09:37",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "1"
        },
        {
          "id": 327947,
          "date": "Sun 07 Nov 2021 06:47",
          "username": "anandbabu",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 323182,
          "date": "Sat 06 Nov 2021 21:19",
          "username": "01037",
          "content": "D<br>I'll go for D. ",
          "upvote_count": "1"
        },
        {
          "id": 322463,
          "date": "Sun 31 Oct 2021 21:16",
          "username": "cldy",
          "content": "D.  Correct - this provides separation of roles.<br>plz remember CloudHSM can store the private key of the Cert but not the Cert itself!",
          "upvote_count": "2"
        },
        {
          "id": 283970,
          "date": "Wed 27 Oct 2021 23:30",
          "username": "RedKane",
          "content": "This question is not valid. It ends with \\\"...have exclusive access to the applications X.509 certificate that contains the private key.\\\"X.509 certificate do not contain private keys, only public keys.",
          "upvote_count": "1"
        },
        {
          "id": 218876,
          "date": "Mon 25 Oct 2021 21:07",
          "username": "qkhanhpro",
          "content": "So far Cloud HSM does not support X509 yet<br><br>https://forums.aws.amazon.com/thread.jspa?threadID=264969",
          "upvote_count": "1"
        },
        {
          "id": 212112,
          "date": "Mon 25 Oct 2021 12:10",
          "username": "ChauPhan",
          "content": "X.509 certificate is SSL Web Certification. It is not a KMS or CloudHSM encrypted key. So D is correct",
          "upvote_count": "1"
        },
        {
          "id": 190062,
          "date": "Fri 22 Oct 2021 14:46",
          "username": "srknbngl",
          "content": "Answer - D",
          "upvote_count": "1"
        },
        {
          "id": 143138,
          "date": "Thu 21 Oct 2021 08:48",
          "username": "fullaws",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 133270,
          "date": "Mon 18 Oct 2021 15:56",
          "username": "MannyC",
          "content": "Answer - D",
          "upvote_count": "1"
        },
        {
          "id": 129471,
          "date": "Sat 16 Oct 2021 03:36",
          "username": "sensorsensor",
          "content": "Nothing more annoying when in one question all possible answers appear. However, this time<br>challenging answer due to similarity in question bellow, source: acg :<br>Your client recently failed a security audit because they had username and passwords hard-coded in a script which runs on an EC2 instance. <br>Which of the following is a way to remediate?<br>Store credentials in an encrypted file on S3 and create an IAM role with access assigning it to the EC2 instance.Correction to D",
          "upvote_count": "11"
        },
        {
          "id": 154371,
          "date": "Thu 21 Oct 2021 23:19",
          "username": "sensor",
          "content": "Correction to D",
          "upvote_count": "1"
        },
        {
          "id": 126073,
          "date": "Fri 15 Oct 2021 16:55",
          "username": "KayodeSunnyr3",
          "content": "The Ans is B:<br>Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are used to confirm the identity of web servers and establish secure HTTPS connections over the Internet. You can use AWS CloudHSM to offload SSL/TLS processing for your web servers. Using CloudHSM for this processing reduces the burden on your web server and provides extra security by storing your web server's private key in CloudHSM.<br>https://aws.amazon.com/cloudhsm/<br>https://docs.aws.amazon.com/cloudhsm/latest/userguide/keystore-third-party-tools.htmlIn my perspective, B doesnt seem to describe what you mention. It doesnt say that it will be used to offload the ssl processing from the webserver but to take the certificate on boot from CloudHSM and use it the webserver instance.",
          "upvote_count": "32"
        },
        {
          "id": 179505,
          "date": "Fri 22 Oct 2021 08:40",
          "username": "Sunnyr3",
          "content": "In my perspective, B doesnt seem to describe what you mention. It doesnt say that it will be used to offload the ssl processing from the webserver but to take the certificate on boot from CloudHSM and use it the webserver instance.",
          "upvote_count": "2"
        },
        {
          "id": 122338,
          "date": "Wed 13 Oct 2021 17:31",
          "username": "noisonnoiton",
          "content": "go with D<br>https://aws.amazon.com/ko/blogs/aws/elastic-load-balancer-support-for-ssl-termination/",
          "upvote_count": "1"
        },
        {
          "id": 115899,
          "date": "Wed 06 Oct 2021 21:13",
          "username": "manoj101",
          "content": "There is nothing called cert store. It's AWS Certificate Manager that managers SSL/TSL. I'm curious to know why option B \\\"Cloud HSM\\\" is not correct?",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS.<br>During the pilot, you measured a peak or 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database.<br>The current deployment consists of a load-balanced auto scaled Ingestion layer using EC2 instances and a PostgreSQL RDS database with 500GB standard storage.<br>The pilot is considered a success and your CEO has managed to get the attention or some potential investors. The business plan requires a deployment of at least 100K sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year<br>Improvements.<br>To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling.<br>Which setup win meet the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Add an SQS queue to the ingestion layer to buffer writes to the RDS instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ingest data into a DynamoDB table and move old data to a Redshift cluster<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Keep the current architecture but upgrade RDS storage to 3TB and 10K provisioned IOPS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 5841,
          "date": "Tue 21 Sep 2021 10:17",
          "username": "anolatiana528PrathsJAWS1600nitinz",
          "content": "Correct answer: \\\"B\\\"<br><br>For one day we will have = 24 hrs * 60 min * 1 KB = 1440 KB of data<br>For one month we will have = 1440 * 30 = 43200 KB of data<br>For 100k sensors we will have '4.32' TB of data in a month<br><br>This transates to '103,68' TB of data for 2 years<br><br>Option \\\"C\\\" is incorrect as the question does not mention how the large data gets scaled or how the ingestion of large data will be handled. Also '96TB' of storage is insufficient when compared to '103.68' TB of data derived above.>For one month we will have = 1440 * 30 = 43200 KB of data<br><br>It is a little confusing, but I think this calculation is incorrect, as the question says there is 3GB data per month.This calculation doesnt add up . Are we sure the answer is B ?1440 KB per Day . 1440*730=1051,200 KB for 2 years PER Sensor.for 100K sensors =<br>1051,200,00,000 KB= 97.9 TB . ( 1051,200,00,000/1024MB/1024GB/1024TB).It is still over96TB.  But cutting close.You do not need a calculator for this, B is correct answer. Any seasoned Architect will use a flow control and flow control can be done by SQS.",
          "upvote_count": "185213"
        },
        {
          "id": 16708,
          "date": "Fri 24 Sep 2021 20:16",
          "username": "tiana528",
          "content": ">For one month we will have = 1440 * 30 = 43200 KB of data<br><br>It is a little confusing, but I think this calculation is incorrect, as the question says there is 3GB data per month.",
          "upvote_count": "5"
        },
        {
          "id": 19256,
          "date": "Thu 30 Sep 2021 17:56",
          "username": "Praths",
          "content": "This calculation doesnt add up . Are we sure the answer is B ?",
          "upvote_count": "2"
        },
        {
          "id": 98614,
          "date": "Tue 19 Oct 2021 20:06",
          "username": "JAWS1600",
          "content": "1440 KB per Day . 1440*730=1051,200 KB for 2 years PER Sensor.for 100K sensors =<br>1051,200,00,000 KB= 97.9 TB . ( 1051,200,00,000/1024MB/1024GB/1024TB).It is still over96TB.  But cutting close.",
          "upvote_count": "1"
        },
        {
          "id": 314340,
          "date": "Mon 01 Nov 2021 01:46",
          "username": "nitinz",
          "content": "You do not need a calculator for this, B is correct answer. Any seasoned Architect will use a flow control and flow control can be done by SQS.",
          "upvote_count": "3"
        },
        {
          "id": 9412,
          "date": "Thu 23 Sep 2021 18:02",
          "username": "Judy",
          "content": "I think the the explaination is talking about the answer B, using Dynamo DB to ingest data and saving data in Redshift(3GB*1000*24=72TB).",
          "upvote_count": "8"
        },
        {
          "id": 650970,
          "date": "Tue 23 Aug 2022 21:53",
          "username": "rochester",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 577859,
          "date": "Tue 29 Mar 2022 22:55",
          "username": "jj22222",
          "content": "b looks right",
          "upvote_count": "1"
        },
        {
          "id": 444977,
          "date": "Sun 07 Nov 2021 13:07",
          "username": "andypham",
          "content": "I will go for C, as the question is only focusing on the backend part, which is the data layer. The ingestion layer is being handled by instances with autoscaling and load balancer, which is fine.",
          "upvote_count": "1"
        },
        {
          "id": 415844,
          "date": "Sun 07 Nov 2021 11:39",
          "username": "Osemk",
          "content": "Answer is B",
          "upvote_count": "2"
        },
        {
          "id": 413723,
          "date": "Sun 07 Nov 2021 07:12",
          "username": "Gustava6272",
          "content": "I think A is better answer for IOPS , as size can always be increase .RDS has 80K IOPS, which can be increased by SQS ( even size matches 1K to 256KB)",
          "upvote_count": "1"
        },
        {
          "id": 405772,
          "date": "Sat 06 Nov 2021 06:52",
          "username": "Akhil254",
          "content": "B Correct",
          "upvote_count": "1"
        },
        {
          "id": 390652,
          "date": "Sat 06 Nov 2021 03:22",
          "username": "nik_aws",
          "content": "Answer is B.  DynamoDB is perfect for scale and Redshift is meant for data warehousing. It cannot handle streaming data ingestion.",
          "upvote_count": "1"
        },
        {
          "id": 378435,
          "date": "Fri 05 Nov 2021 21:57",
          "username": "santhoshmp",
          "content": "answer is B , redshift is a data warehouse",
          "upvote_count": "1"
        },
        {
          "id": 327948,
          "date": "Fri 05 Nov 2021 07:08",
          "username": "anandbabu",
          "content": "i will go with B",
          "upvote_count": "1"
        },
        {
          "id": 323183,
          "date": "Wed 03 Nov 2021 22:53",
          "username": "01037",
          "content": "I'll go for B",
          "upvote_count": "1"
        },
        {
          "id": 322475,
          "date": "Mon 01 Nov 2021 14:20",
          "username": "cldy",
          "content": "As an architect if i get this requirement in real project I will go for B DynamoDB - scaling is crucial ....",
          "upvote_count": "1"
        },
        {
          "id": 292996,
          "date": "Sat 30 Oct 2021 22:41",
          "username": "RomanTsai",
          "content": "I go for \\\"B\\\" based my past experiences.... Option \\\"C\\\" will be a nightmare after day2 operations.",
          "upvote_count": "2"
        },
        {
          "id": 212120,
          "date": "Sat 30 Oct 2021 10:15",
          "username": "ChauPhan",
          "content": "For 100 devices, we need 10 IOPS and 3G per months<br>So for 100K devices, we need 10K IOPS and 3T per month (or 3T x 24 = 72T per 2 years).<br>B is correct as we need quick IO process, scalable, no storage limit to handle data then store it to RedShift.<br>Choose C.  RedShift from beginning seem not correct, Redshift is Datawarehouse and can't process quick data, it's used to store data. Furthermore, 96T is fixed and we can't do scalable",
          "upvote_count": "2"
        },
        {
          "id": 192731,
          "date": "Thu 28 Oct 2021 02:34",
          "username": "NarendraNK",
          "content": "\\\" C \\\". The question says 3G every month for 100 devices. So, for 100K devices, it becomes almost 3000G or 3T. For 2 years, it adds up to 72T which can be well served by the 96T cluster.<br>And, for IoT, redshift is the recommended setup.",
          "upvote_count": "2"
        },
        {
          "id": 190063,
          "date": "Tue 26 Oct 2021 21:16",
          "username": "srknbngl",
          "content": "Answer is B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web company is looking to implement an intrusion detection and prevention system into their deployed VPC.  This platform should have the ability to scale to thousands of instances running inside of the VPC. <br>How should they architect their solution to achieve these goals?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see an traffic across the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 32857,
          "date": "Sun 26 Sep 2021 23:28",
          "username": "ReggieR2JAWS1600",
          "content": "So i googled and found this on A nother Cloud G u r u site:<br>B is the correct answer.<br><br>The key line of the question is - \\\"thousands of instances running in the VPC\\\" .<br><br>Option C does not confirm that the incoming traffic is passed through the IDS/IPS before reaching the host, which is one of the primary feature/requirement of any IDS/IPS. THe traffic will need to pass through the IDS so that any vulnerability could be assessed. Moreover in Option C, you can not expect to manage thousands and thousands of Servers through host based routing.<br><br>Option A is invalid as promiscuous mode is not supported in AWS.<br><br>Option D does not meet the IPS requirement and moreover although it can perform IDS activities but again it is not a scalable solution.<br><br>SO, OPTION B is the correct ANSWER.I found the same Cloud G U R U<br> <br>Jayendra Patil is wrong. B is the right answer",
          "upvote_count": "262"
        },
        {
          "id": 105667,
          "date": "Wed 13 Oct 2021 00:21",
          "username": "JAWS1600",
          "content": "I found the same Cloud G U R U<br> <br>Jayendra Patil is wrong. B is the right answer",
          "upvote_count": "2"
        },
        {
          "id": 21431,
          "date": "Mon 20 Sep 2021 10:11",
          "username": "skywalkernitinz",
          "content": "I will go for \\\"B\\\" as this is how IDS/IPS are being deploy.<br><br>\\\"D\\\" not possible as this will create additional CPU workload which should be prevent.D is correct answer. you can scale IDS/IPS depending on the volume.",
          "upvote_count": "71"
        },
        {
          "id": 314341,
          "date": "Thu 28 Oct 2021 21:18",
          "username": "nitinz",
          "content": "D is correct answer. you can scale IDS/IPS depending on the volume.",
          "upvote_count": "1"
        },
        {
          "id": 698135,
          "date": "Tue 18 Oct 2022 13:01",
          "username": "Snip",
          "content": "Only B can be the right answer, IDS/IPS must analyze traffic BEFORE the traffic reach the instance",
          "upvote_count": "1"
        },
        {
          "id": 657901,
          "date": "Sat 03 Sep 2022 01:22",
          "username": "skywalker",
          "content": "B. ..<br>Security Team need a clean room or network for IDS/IPS..Seperate VPC is the answer",
          "upvote_count": "2"
        },
        {
          "id": 626134,
          "date": "Sat 02 Jul 2022 14:26",
          "username": "aandc",
          "content": "B,Gateway Load Balancer is needed<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html",
          "upvote_count": "1"
        },
        {
          "id": 623267,
          "date": "Mon 27 Jun 2022 14:32",
          "username": "[Removed]",
          "content": "B. <br>There was a similar question and its answer was such as B. ",
          "upvote_count": "1"
        },
        {
          "id": 585116,
          "date": "Wed 13 Apr 2022 11:11",
          "username": "HellGate",
          "content": "There's same question at official exam from AWS.",
          "upvote_count": "1"
        },
        {
          "id": 579063,
          "date": "Thu 31 Mar 2022 18:58",
          "username": "bkrishbkrish",
          "content": "D --> This architecture is better suited for HIPAA compliance customers where they make use of the Gateway Load balancer. CISCO NGFW integration with Gateway Load Balancer is a classic example for this type of scenario.Typo with the above option. It's B. ",
          "upvote_count": "11"
        },
        {
          "id": 579064,
          "date": "Thu 31 Mar 2022 19:00",
          "username": "bkrish",
          "content": "Typo with the above option. It's B. ",
          "upvote_count": "1"
        },
        {
          "id": 577741,
          "date": "Tue 29 Mar 2022 18:57",
          "username": "jj22222",
          "content": "D.  Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.",
          "upvote_count": "1"
        },
        {
          "id": 539036,
          "date": "Wed 02 Feb 2022 18:37",
          "username": "cannottellname",
          "content": "Routing traffic from1 VPC to other is older method. I work in an organization and we use Agent based monitoring only. D seems correct.",
          "upvote_count": "1"
        },
        {
          "id": 532317,
          "date": "Tue 25 Jan 2022 19:03",
          "username": "shotty1",
          "content": "B is correct imo",
          "upvote_count": "1"
        },
        {
          "id": 500000,
          "date": "Sun 12 Dec 2021 13:41",
          "username": "KiraguJohn",
          "content": "I honestly do not understand this question",
          "upvote_count": "3"
        },
        {
          "id": 423939,
          "date": "Sun 07 Nov 2021 14:06",
          "username": "Shap",
          "content": "I will go for B. ",
          "upvote_count": "1"
        },
        {
          "id": 405773,
          "date": "Sat 06 Nov 2021 21:31",
          "username": "Akhil254",
          "content": "B Correct",
          "upvote_count": "1"
        },
        {
          "id": 387406,
          "date": "Fri 05 Nov 2021 11:29",
          "username": "Comoks",
          "content": "In 2021 we should be using AWS Network firewall",
          "upvote_count": "1"
        },
        {
          "id": 342277,
          "date": "Mon 01 Nov 2021 21:05",
          "username": "DashL",
          "content": "B<br>It sounds more like a Gateway Load Balancer introduced in Nov 2020. https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html#overview<br>Gateway Load Balancers enable you to deploy, scale, and manage virtual appliances, such as firewalls, intrusion detection and prevention systems, and deep packet inspection systems. It combines a transparent network gateway (that is, a single entry and exit point for all traffic) and distributes traffic while scaling your virtual appliances with the demand.",
          "upvote_count": "3"
        },
        {
          "id": 327949,
          "date": "Mon 01 Nov 2021 11:25",
          "username": "anandbabu",
          "content": "D is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing data on Amazon Simple Storage Service (S3). The company's security policy mandates that data is encrypted at rest.<br>Which of the following methods can achieve this? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon S3 server-side encryption with customer-provided keys.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 server-side encryption with EC2 key pair.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 bucket policies to restrict access to the data at rest.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use SSL to encrypt the data while in transit to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 308643,
          "date": "Wed 29 Sep 2021 02:53",
          "username": "ppsheinnitinz",
          "content": "My choice is A,B,Eonly ABE does encryption at rest.",
          "upvote_count": "82"
        },
        {
          "id": 314342,
          "date": "Mon 11 Oct 2021 02:32",
          "username": "nitinz",
          "content": "only ABE does encryption at rest.",
          "upvote_count": "2"
        },
        {
          "id": 681974,
          "date": "Wed 28 Sep 2022 19:26",
          "username": "emmanuelodenyire",
          "content": "I see only these support encryption at rest",
          "upvote_count": "1"
        },
        {
          "id": 657902,
          "date": "Sat 03 Sep 2022 01:23",
          "username": "skywalker",
          "content": "I will go for A,B,E",
          "upvote_count": "1"
        },
        {
          "id": 600019,
          "date": "Wed 11 May 2022 11:47",
          "username": "michaelbaib",
          "content": "dont understand why encrypt 3 times??",
          "upvote_count": "2"
        },
        {
          "id": 568789,
          "date": "Wed 16 Mar 2022 06:45",
          "username": "bluesmile979",
          "content": "vote ABE",
          "upvote_count": "1"
        },
        {
          "id": 494256,
          "date": "Sun 05 Dec 2021 12:14",
          "username": "cldy",
          "content": "A.  Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.<br>B.  Use Amazon S3 server-side encryption with customer-provided keys.<br>E.  Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key.",
          "upvote_count": "1"
        },
        {
          "id": 405774,
          "date": "Mon 01 Nov 2021 08:43",
          "username": "Akhil254",
          "content": "ABE Correct",
          "upvote_count": "1"
        },
        {
          "id": 360131,
          "date": "Wed 27 Oct 2021 16:44",
          "username": "kidd5",
          "content": "ABE is correct",
          "upvote_count": "1"
        },
        {
          "id": 327950,
          "date": "Sun 24 Oct 2021 16:38",
          "username": "anandbabu",
          "content": "ABE is correct",
          "upvote_count": "2"
        },
        {
          "id": 323194,
          "date": "Mon 18 Oct 2021 23:25",
          "username": "01037",
          "content": "ABE for sure",
          "upvote_count": "1"
        },
        {
          "id": 322477,
          "date": "Sat 16 Oct 2021 09:21",
          "username": "cldy",
          "content": "A. B. E. ",
          "upvote_count": "1"
        },
        {
          "id": 312065,
          "date": "Sun 10 Oct 2021 22:05",
          "username": "LoganIsh",
          "content": "ABE is right",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your firm has uploaded a large amount of aerial image data to S3. In the past, in your on-premises environment, you used a dedicated group of servers to oaten process this data and used Rabbit MQ - An open source messaging system to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost.<br>Which is correct?</p>",
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
              "choice": "<p>A. Use SQS for passing job messages use Cloud Watch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SOS Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS Once data is processed, change the storage class of the S3 objects to Glacier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use SNS to pass job messages use Cloud Watch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671317,
          "date": "Sat 17 Sep 2022 09:07",
          "username": "emmanuelodenyire",
          "content": "C fits the scenario very well",
          "upvote_count": "1"
        },
        {
          "id": 495900,
          "date": "Tue 07 Dec 2021 12:01",
          "username": "cldy",
          "content": "C.  Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS Once data is processed, change the storage class of the S3 objects to Glacier.",
          "upvote_count": "3"
        },
        {
          "id": 449764,
          "date": "Sun 07 Nov 2021 15:28",
          "username": "moon2351",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 405776,
          "date": "Sat 06 Nov 2021 17:20",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 360084,
          "date": "Sun 31 Oct 2021 23:46",
          "username": "kidd5",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 327952,
          "date": "Sat 23 Oct 2021 06:14",
          "username": "anandbabu",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 323199,
          "date": "Tue 19 Oct 2021 05:21",
          "username": "01037",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 322479,
          "date": "Sat 16 Oct 2021 15:35",
          "username": "cldy",
          "content": "C.  best answer...",
          "upvote_count": "1"
        },
        {
          "id": 310341,
          "date": "Wed 06 Oct 2021 18:57",
          "username": "thai",
          "content": "the answer is C",
          "upvote_count": "2"
        },
        {
          "id": 309924,
          "date": "Tue 05 Oct 2021 01:05",
          "username": "didek1986nitinz",
          "content": "answer cC fits the bill",
          "upvote_count": "31"
        },
        {
          "id": 314344,
          "date": "Sat 09 Oct 2021 17:02",
          "username": "nitinz",
          "content": "C fits the bill",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You've been hired to enhance the overall security posture for a very large e-commerce site. They have a well architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3. They are using a combination of RDS and DynamoDB for their dynamic data and then archiving nightly into S3 for further processing with EMR. They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access.<br>Which approach provides a cost effective scalable mitigation to this kind of attack?</p>",
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
              "choice": "<p>A. Recommend that they lease space at a DirectConnect partner location and establish a 1G DirectConnect connection to their VPC they would then establish Internet connectivity into their space, filter the traffic in hardware Web Application Firewall (WAF). And then pass the traffic through the DirectConnect connection into their application running in their VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host-based WAF.  They would redirect Route 53 to resolve to the new WAF tier ELB.  The WAF tier would their pass the traffic to the current web tier The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove all but TLS 1.2 from the web tier ELB and enable Advanced Protocol Filtering. This will enable the ELB itself to perform WAF functionality.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 681987,
          "date": "Wed 28 Sep 2022 19:36",
          "username": "emmanuelodenyire",
          "content": "Let me go with C.  I guess it's the only answer making sense here",
          "upvote_count": "1"
        },
        {
          "id": 634764,
          "date": "Thu 21 Jul 2022 20:43",
          "username": "Mr_nobody79",
          "content": "It's C, but don't take it lightly. There's not such thing as a host-based AWS WAF.  It's C because it's talking about a 3rd party WAF. ",
          "upvote_count": "2"
        },
        {
          "id": 610797,
          "date": "Fri 03 Jun 2022 00:02",
          "username": "Ddssssss",
          "content": "There are many host based WAF solutions: Cloudfare, Imperva, Fortinet, etc. So C could be correct. I would not do it myself as there are better solutions than running EC2 instances with host based WAF. ",
          "upvote_count": "2"
        },
        {
          "id": 590863,
          "date": "Sun 24 Apr 2022 05:32",
          "username": "Murtazaarif",
          "content": "What about being cost effective??",
          "upvote_count": "1"
        },
        {
          "id": 530371,
          "date": "Sun 23 Jan 2022 09:24",
          "username": "lulz111",
          "content": "This question seems to be wrong. For everyone saying C, there is no such thing as a \\\" host-based WAF\\\". The only option that is feasible is to block using a NACL but that isnt a very scalable approach, and they dont have a 'web tier'. I suspect the answers are not correctly described and that C needs tweaking to make sense.",
          "upvote_count": "2"
        },
        {
          "id": 405777,
          "date": "Mon 01 Nov 2021 21:06",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "2"
        },
        {
          "id": 360089,
          "date": "Tue 19 Oct 2021 02:33",
          "username": "kidd5",
          "content": "C is correct, Use WAF. ",
          "upvote_count": "1"
        },
        {
          "id": 327953,
          "date": "Mon 18 Oct 2021 15:19",
          "username": "anandbabuuser0001",
          "content": "i will go with Bit is B ,<br>seems no one read everything, they just see WAF and they fo with it ,regardless",
          "upvote_count": "21"
        },
        {
          "id": 606356,
          "date": "Tue 24 May 2022 01:37",
          "username": "user0001",
          "content": "it is B ,<br>seems no one read everything, they just see WAF and they fo with it ,regardless",
          "upvote_count": "1"
        },
        {
          "id": 322454,
          "date": "Thu 07 Oct 2021 19:32",
          "username": "cldycldy01037",
          "content": "How C? there is no host-based WAF. ..or does it refer to a 3rd party waf and not the AWS WAF ...I'll go for C<br>I guess it's third party.<br>But Only C makes sense.",
          "upvote_count": "111"
        },
        {
          "id": 322482,
          "date": "Sat 16 Oct 2021 21:39",
          "username": "cldy01037",
          "content": "or does it refer to a 3rd party waf and not the AWS WAF ...I'll go for C<br>I guess it's third party.<br>But Only C makes sense.",
          "upvote_count": "11"
        },
        {
          "id": 323238,
          "date": "Sun 17 Oct 2021 23:22",
          "username": "01037",
          "content": "I'll go for C<br>I guess it's third party.<br>But Only C makes sense.",
          "upvote_count": "1"
        },
        {
          "id": 310346,
          "date": "Sun 03 Oct 2021 05:54",
          "username": "thai",
          "content": "C for sure",
          "upvote_count": "2"
        },
        {
          "id": 309927,
          "date": "Tue 28 Sep 2021 04:26",
          "username": "didek1986nitinz",
          "content": "answer cC is correct, Use WAF. ",
          "upvote_count": "21"
        },
        {
          "id": 314347,
          "date": "Wed 06 Oct 2021 08:15",
          "username": "nitinz",
          "content": "C is correct, Use WAF. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met.<br>✑ Provide the ability for real-time analytics of the inbound biometric data<br>✑ Ensure processing of the biometric data is highly durable. Elastic and parallel<br>✑ The results of the analytic processing should be persisted for data mining<br>Which architecture outlined below win meet the initial requirements for the collection platform?</p>",
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
              "choice": "<p>A. Utilize S3 to collect the inbound sensor data analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Utilize SQS to collect the inbound sensor data analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Utilize EMR to collect the inbound sensor data, analyze the data from EUR with Amazon Kinesis and save me results to DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 22905,
          "date": "Fri 24 Sep 2021 21:59",
          "username": "examaccnitinz",
          "content": "B looks correct one. with kinesis parallel processing using shardsB is correct answer, Keinesis can do online analytics.",
          "upvote_count": "201"
        },
        {
          "id": 314349,
          "date": "Fri 29 Oct 2021 01:03",
          "username": "nitinz",
          "content": "B is correct answer, Keinesis can do online analytics.",
          "upvote_count": "1"
        },
        {
          "id": 114159,
          "date": "Sun 26 Sep 2021 23:39",
          "username": "roguecloud",
          "content": "Pretty much anytime AWS exams use \\\"real-time,\\\" it's a pretty safe bet the answer has Kinesis in it.",
          "upvote_count": "13"
        },
        {
          "id": 657905,
          "date": "Sat 03 Sep 2022 01:27",
          "username": "skywalker",
          "content": "my vote is B",
          "upvote_count": "1"
        },
        {
          "id": 514394,
          "date": "Sat 01 Jan 2022 07:16",
          "username": "cldy",
          "content": "B correct.",
          "upvote_count": "1"
        },
        {
          "id": 491137,
          "date": "Wed 01 Dec 2021 02:52",
          "username": "acloudguru",
          "content": "B, i really like this collar, I will buy one for my dog, i also like this easy question, hope i can find it in my exam",
          "upvote_count": "2"
        },
        {
          "id": 405778,
          "date": "Sat 06 Nov 2021 18:24",
          "username": "Akhil254",
          "content": "B Correct",
          "upvote_count": "1"
        },
        {
          "id": 322488,
          "date": "Fri 29 Oct 2021 10:07",
          "username": "cldy",
          "content": "B.  - fulfills all three requirements.",
          "upvote_count": "1"
        },
        {
          "id": 264362,
          "date": "Wed 27 Oct 2021 16:47",
          "username": "Ajeeshpv",
          "content": "yes B is correct. For analytic processing and Data mining Kinesis is the right tool",
          "upvote_count": "2"
        },
        {
          "id": 253900,
          "date": "Sun 24 Oct 2021 04:25",
          "username": "Shan_lion",
          "content": "I prefer B. .. <br>When the question says \\\"Real Time\\\", then straight away the first option to come in our mind is Kinesis.",
          "upvote_count": "3"
        },
        {
          "id": 210216,
          "date": "Thu 21 Oct 2021 13:30",
          "username": "Candid_Developer",
          "content": "my vote is B",
          "upvote_count": "1"
        },
        {
          "id": 193318,
          "date": "Sun 17 Oct 2021 03:18",
          "username": "deejiwdeejiw01037",
          "content": "B<br>Real-time -> Kinesis<br>Scalable -> Kinesis Shard<br>Data mining -> Redshift*Elastic and parallel -> Kinesis ShardAgree.<br>I'll go for B too",
          "upvote_count": "621"
        },
        {
          "id": 193319,
          "date": "Mon 18 Oct 2021 06:30",
          "username": "deejiw",
          "content": "*Elastic and parallel -> Kinesis Shard",
          "upvote_count": "2"
        },
        {
          "id": 323475,
          "date": "Mon 01 Nov 2021 05:39",
          "username": "01037",
          "content": "Agree.<br>I'll go for B too",
          "upvote_count": "1"
        },
        {
          "id": 190456,
          "date": "Sat 16 Oct 2021 20:10",
          "username": "un",
          "content": "B seems to be correct to me",
          "upvote_count": "1"
        },
        {
          "id": 190074,
          "date": "Sat 16 Oct 2021 15:15",
          "username": "srknbngl",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 143158,
          "date": "Wed 06 Oct 2021 09:00",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 138622,
          "date": "Mon 04 Oct 2021 20:22",
          "username": "MultiAZ",
          "content": "I do not find a right answer, <br>B seems to make most sense but the EMS does not fit<br>C may work too, but I doubt AWS will push you towards MS SQL Server",
          "upvote_count": "1"
        },
        {
          "id": 122461,
          "date": "Sat 02 Oct 2021 11:03",
          "username": "noisonnoiton",
          "content": "go with B",
          "upvote_count": "3"
        },
        {
          "id": 94620,
          "date": "Sun 26 Sep 2021 20:53",
          "username": "JAWS1600Lucifer8740Jasperianoatif",
          "content": "D .<br>B is invalid - \\\"analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR\\\"<br>Save results to Redshift with EMR ?? Does not make sense<br>Analyze data with Kinesis Clients - Does not make sense<br>Option A- not correct dure to \\\"daily scheduled\\\"<br>Option C -SQL server is not DWH - not food for data miningYou don't make any sense either.>> Analyze data with Kinesis Clients - Does not make sense\\\"<br>\\\"You can develop a consumer application for Amazon Kinesis Data Streams using the Kinesis Client Library (KCL)\\\"D doesn't make any sense at all. B is valid as you can collects large amounts of data streaming constantly. EMR is not for collecting data but for analyzing it in real time.",
          "upvote_count": "1114"
        },
        {
          "id": 119681,
          "date": "Sat 02 Oct 2021 06:49",
          "username": "Lucifer8740",
          "content": "You don't make any sense either.",
          "upvote_count": "1"
        },
        {
          "id": 163418,
          "date": "Wed 13 Oct 2021 22:47",
          "username": "Jasperian",
          "content": ">> Analyze data with Kinesis Clients - Does not make sense\\\"<br>\\\"You can develop a consumer application for Amazon Kinesis Data Streams using the Kinesis Client Library (KCL)\\\"",
          "upvote_count": "1"
        },
        {
          "id": 115162,
          "date": "Fri 01 Oct 2021 12:32",
          "username": "oatif",
          "content": "D doesn't make any sense at all. B is valid as you can collects large amounts of data streaming constantly. EMR is not for collecting data but for analyzing it in real time.",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing Internet connectivity for your VPC.  The Web servers must be available on the Internet.<br>The application must have a highly available architecture.<br>Which alternatives should you consider? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Configure a NAT instance in your VPC.  Create a default route via the NAT instance and associate it with all subnets. Configure a DNS A record that points to the NAT instance public IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers. Configure a Route53 CNAME record to your CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place all your web servers behind ELB.  Configure a Route53 CNMIE to point to the ELB DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign EIPs to all web servers. Configure a Route53 record set with all EIPs, with health checks and DNS failover.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure ELB with an EIP. Place all your Web servers behind ELB.  Configure a Route53 A record that points to the EIP.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 310351,
          "date": "Tue 21 Sep 2021 12:17",
          "username": "thaiuser0001nitinzExtHoblackgamerwahlbergusa",
          "content": "As solution architect pro my answer is BCis this case you are not a good solution architectC & E<br><br>A.  Configure a NAT instance in your VPC.  Create a default route via the NAT instance and associate it with all subnets. Configure a DNS A record that points to the NAT instance public IP address. - DOEST NO TMAKE SENSE.  NAT IS FOR OUTGOING NOT INCOMING.<br>B.  Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers. Configure a Route53 CNAME record to your CloudFront distribution. ORIGIN CAN NOT BE PRIVATE IP.<br>C.  Place all your web servers behind ELB.  Configure a Route53 CNMIE to point to the ELB DNS name. POSSIBLE ANSWER<br>D.  Assign EIPs to all web servers. Configure a Route53 record set with all EIPs, with health checks and DNS failover. WHAT? NON SENSE. <br>E.  Configure ELB with an EIP. Place all your Web servers behind ELB.  Configure a Route53 A record that points to the EIP. WILL WORK.Can we able to assign EIP to ELB?The answer is NO. Which makes option C & D are only valid options.An EIP can be assigned to NLB.  => https://aws.amazon.com/premiumsupport/knowledge-center/elb-attach-elastic-ip-to-public-nlb/",
          "upvote_count": "8412164"
        },
        {
          "id": 599325,
          "date": "Tue 10 May 2022 01:26",
          "username": "user0001",
          "content": "is this case you are not a good solution architect",
          "upvote_count": "4"
        },
        {
          "id": 314355,
          "date": "Tue 21 Sep 2021 16:17",
          "username": "nitinzExtHoblackgamerwahlbergusa",
          "content": "C & E<br><br>A.  Configure a NAT instance in your VPC.  Create a default route via the NAT instance and associate it with all subnets. Configure a DNS A record that points to the NAT instance public IP address. - DOEST NO TMAKE SENSE.  NAT IS FOR OUTGOING NOT INCOMING.<br>B.  Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers. Configure a Route53 CNAME record to your CloudFront distribution. ORIGIN CAN NOT BE PRIVATE IP.<br>C.  Place all your web servers behind ELB.  Configure a Route53 CNMIE to point to the ELB DNS name. POSSIBLE ANSWER<br>D.  Assign EIPs to all web servers. Configure a Route53 record set with all EIPs, with health checks and DNS failover. WHAT? NON SENSE. <br>E.  Configure ELB with an EIP. Place all your Web servers behind ELB.  Configure a Route53 A record that points to the EIP. WILL WORK.Can we able to assign EIP to ELB?The answer is NO. Which makes option C & D are only valid options.An EIP can be assigned to NLB.  => https://aws.amazon.com/premiumsupport/knowledge-center/elb-attach-elastic-ip-to-public-nlb/",
          "upvote_count": "12164"
        },
        {
          "id": 330952,
          "date": "Sat 02 Oct 2021 16:58",
          "username": "ExtHoblackgamerwahlbergusa",
          "content": "Can we able to assign EIP to ELB?The answer is NO. Which makes option C & D are only valid options.An EIP can be assigned to NLB.  => https://aws.amazon.com/premiumsupport/knowledge-center/elb-attach-elastic-ip-to-public-nlb/",
          "upvote_count": "164"
        },
        {
          "id": 333042,
          "date": "Sun 03 Oct 2021 03:24",
          "username": "blackgamerwahlbergusa",
          "content": "The answer is NO. Which makes option C & D are only valid options.An EIP can be assigned to NLB.  => https://aws.amazon.com/premiumsupport/knowledge-center/elb-attach-elastic-ip-to-public-nlb/",
          "upvote_count": "64"
        },
        {
          "id": 511629,
          "date": "Tue 28 Dec 2021 23:37",
          "username": "wahlbergusa",
          "content": "An EIP can be assigned to NLB.  => https://aws.amazon.com/premiumsupport/knowledge-center/elb-attach-elastic-ip-to-public-nlb/",
          "upvote_count": "4"
        },
        {
          "id": 717582,
          "date": "Mon 14 Nov 2022 00:49",
          "username": "hobokabobo",
          "content": "Key is we need to reach the service from INTERNET. That requires a PublicIP.<br><br>A. Nat does not allow ingress. It maps multiple egress origins to one IP not the other way. >>>>NOT POSSIBLE<br>B.  We need a public IP.Private IP will not be accessible. >>>>NOT POSSIBLE<br>C.  ELB has a private IP only so it is not accessible. >>>>NOT Possible.<br>D.  Public IP is available. DNS can distribute traffic.>>>> POSSIBLE <br>E.  EIP provides a public IP an. ELB is scaling. A record can point to EIP. >>>> POSSIBLE<br><br>One may argue against D.  I see that. It does work. Health check ensures availability and load is distributed byDNS resolution(round robin default). <br>Valid solution: ED",
          "upvote_count": "1"
        },
        {
          "id": 496622,
          "date": "Wed 08 Dec 2021 09:03",
          "username": "cldy",
          "content": "C.  Place all your web servers behind ELB.  Configure a Route53 CNMIE to point to the ELB DNS name.<br>D.  Assign EIPs to all web servers. Configure a Route53 record set with all EIPs, with health checks and DNS failover.",
          "upvote_count": "2"
        },
        {
          "id": 435716,
          "date": "Sun 07 Nov 2021 13:21",
          "username": "Coffeinerd",
          "content": "A.  makes no sense, <br>B.  as mentioned you cannot have a private IP as origin, so definitely wrong<br>C.  Right, no discussion here<br>D.  Works but is not a good solution but is high available<br>E.  Considering NLB this works and could be an elegant solution BUT it says assign ONE IP, so it is NOT HA,<br><br>I keep going with C,D due to HA",
          "upvote_count": "2"
        },
        {
          "id": 433965,
          "date": "Sun 07 Nov 2021 09:30",
          "username": "chat77",
          "content": "CD is right",
          "upvote_count": "2"
        },
        {
          "id": 405779,
          "date": "Tue 02 Nov 2021 03:35",
          "username": "Akhil254",
          "content": "C,E Correct",
          "upvote_count": "1"
        },
        {
          "id": 364533,
          "date": "Sun 10 Oct 2021 02:10",
          "username": "01037",
          "content": "Finally, C&E. <br>As nitinz said<br>CloudFront's ORIGIN CAN NOT BE PRIVATE IP",
          "upvote_count": "1"
        },
        {
          "id": 325100,
          "date": "Sat 02 Oct 2021 01:13",
          "username": "01037",
          "content": "After a rethink, why not CNAME. <br>We can use subdomain to point to CF, can't we?",
          "upvote_count": "1"
        },
        {
          "id": 322510,
          "date": "Thu 30 Sep 2021 03:23",
          "username": "cldy0103701037",
          "content": "C. E.  - possible answers.<br>A - NAT is for OUTGOING.<br>B.  - point R53 ALIAS record to CF, not CNAME. <br>D.  doesnt make senseI'll go for C and E, too.<br>Though if B is using alias, it will be a better answer.<br>ALB doesn't work with EIP, so NLB has to be used, and NLB before web servers is not a good idea.B & C now",
          "upvote_count": "112"
        },
        {
          "id": 323491,
          "date": "Thu 30 Sep 2021 21:20",
          "username": "0103701037",
          "content": "I'll go for C and E, too.<br>Though if B is using alias, it will be a better answer.<br>ALB doesn't work with EIP, so NLB has to be used, and NLB before web servers is not a good idea.B & C now",
          "upvote_count": "12"
        },
        {
          "id": 364523,
          "date": "Thu 07 Oct 2021 14:50",
          "username": "01037",
          "content": "B & C now",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team has a tomcat-based Java application you need to deploy into development, test and production environments. After some research, you opt to use<br>Elastic Beanstalk due to its tight integration with your developer tools and RDS due to its ease of management. Your QA team lead points out that you need to roll a sanitized set of production data into your environment on a nightly basis. Similarly, other software teams in your org want access to that same restored data via their EC2 instances in your VPC. <br>The optimal setup for persistence and security that meets the above requirements would be the following.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Create your RDS instance as part of your Elastic Beanstalk definition and alter its security group to allow access to it from hosts in your application subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create your RDS instance separately and add its IP address to your application's DB connection strings in your code Alter its security group to allow access to it from hosts within your VPC's IP address block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create your RDS instance separately and pass its DNS name to your app's DB connection string as an environment variable. Create a security group for client machines and add it as a valid source for DB traffic to the security group of the RDS instance itself.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create your RDS instance separately and pass its DNS name to your's DB connection string as an environment variable Alter its security group to allow access to It from hosts in your application subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 326227,
          "date": "Sun 17 Oct 2021 19:36",
          "username": "tbolar",
          "content": "As per CG expert<br>It can't be A because the scenario specifically requires persistence. According to http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.db.html \\\"A database instance that is part of your environment is tied to the lifecycle of your environment. If you terminate the environment, the database instance is terminated as well. An integrated database instance also cannot be removed from your environment once added.\\\"<br>It can't be B because we never have access to the IP address of any RDS instance.<br>C & D are very similar except that the scenario requirements specifically state that optimal security should be applied.<br>It can't be D because RDS is opened to all \\\"hosts in your application subnets\\\" where C only opens RDS to specific client machines in a specific security group.<br>C is the correct answer.",
          "upvote_count": "22"
        },
        {
          "id": 718284,
          "date": "Mon 14 Nov 2022 22:14",
          "username": "hobokabobo",
          "content": "we have two requirements:<br>a) roll out sanitized set of production data nightly<br>b) grant access to ec2 instances in our vpc(operated by others)<br><br>Now a) is a very interesting requirement. It says data should *not* be kept but replaced every night. *This database is not the source of truth*.*It should not be persisted* This means nightlyrecreation is not only an option but mandatory. Keeping old unsanitized data is against this requirement.<br><br>The only answer that in some way addresses requirement a) is answer A.  The database is recreated with deployment which can happen over night. Requirement b is fulfilled by security group setting.",
          "upvote_count": "1"
        },
        {
          "id": 715736,
          "date": "Fri 11 Nov 2022 04:39",
          "username": "chufei",
          "content": "A is correct because it's required in testing environment only.",
          "upvote_count": "1"
        },
        {
          "id": 715734,
          "date": "Fri 11 Nov 2022 04:38",
          "username": "chufei",
          "content": "A is correct because it's required in testing environment only.",
          "upvote_count": "1"
        },
        {
          "id": 622777,
          "date": "Sun 26 Jun 2022 21:40",
          "username": "kangtamo",
          "content": "Agree with C.  RDS should be separate.",
          "upvote_count": "2"
        },
        {
          "id": 430384,
          "date": "Sun 07 Nov 2021 09:53",
          "username": "Shap",
          "content": "I’ll go with C. ",
          "upvote_count": "1"
        },
        {
          "id": 405784,
          "date": "Mon 01 Nov 2021 18:49",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 380373,
          "date": "Sun 24 Oct 2021 16:24",
          "username": "santhoshmp",
          "content": "C is the. answer",
          "upvote_count": "1"
        },
        {
          "id": 353179,
          "date": "Tue 19 Oct 2021 19:42",
          "username": "devilman222",
          "content": "I choose C. How do they choose the correct answer, random?",
          "upvote_count": "1"
        },
        {
          "id": 337473,
          "date": "Tue 19 Oct 2021 04:18",
          "username": "zek",
          "content": "A is correct !",
          "upvote_count": "1"
        },
        {
          "id": 327945,
          "date": "Mon 18 Oct 2021 06:53",
          "username": "anandbabu",
          "content": "i will go with C",
          "upvote_count": "1"
        },
        {
          "id": 322496,
          "date": "Mon 11 Oct 2021 07:35",
          "username": "cldy",
          "content": "C.  - more secure by allowing DB SG access from Host SG",
          "upvote_count": "1"
        },
        {
          "id": 312555,
          "date": "Mon 04 Oct 2021 08:16",
          "username": "ExtHo",
          "content": "Yes its CSecurity group allows instances to access the RDS with new instances launched without any changes<br>https://jayendrapatil.com/aws-elastic-beanstalk/",
          "upvote_count": "1"
        },
        {
          "id": 309012,
          "date": "Tue 21 Sep 2021 21:15",
          "username": "waliasawaliasanitinz01037",
          "content": "I chose D. Answer is C because C is more secured. https://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KSModQtvq7YxmsCIPVS/question_for_aws_saaC is reasonable answer. instead of opening to whole VPC CIDR block just open for the clients you know need access to your D/B. Agree <br>C is more secured",
          "upvote_count": "1221"
        },
        {
          "id": 309018,
          "date": "Sun 26 Sep 2021 11:24",
          "username": "waliasa",
          "content": "Answer is C because C is more secured. https://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KSModQtvq7YxmsCIPVS/question_for_aws_saa",
          "upvote_count": "2"
        },
        {
          "id": 314370,
          "date": "Fri 08 Oct 2021 07:53",
          "username": "nitinz01037",
          "content": "C is reasonable answer. instead of opening to whole VPC CIDR block just open for the clients you know need access to your D/B. Agree <br>C is more secured",
          "upvote_count": "21"
        },
        {
          "id": 325107,
          "date": "Thu 14 Oct 2021 19:13",
          "username": "01037",
          "content": "Agree <br>C is more secured",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has an on-premises multi-tier PHP web application, which recently experienced downtime due to a large burst in web traffic due to a company announcement Over the coming days, you are expecting similar announcements to drive similar unpredictable bursts, and are looking to find ways to quickly improve your infrastructures ability to handle unexpected increases in traffic.<br>The application currently consists of 2 tiers a web tier which consists of a load balancer and several Linux Apache web servers as well as a database tier which hosts a Linux server hosting a MySQL database.<br>Which scenario below will provide full site functionality, while helping to improve the ability of your application in the short timeframe required?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Failover environment: Create an S3 bucket and configure it for website hosting. Migrate your DNS to Route53 using zone file import, and leverage Route53 DNS failover to failover to the S3 hosted website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Hybrid environment: Create an AMI, which can be used to launch web servers in EC2. Create an Auto Scaling group, which uses the AMI to scale the web tier based on incoming traffic. Leverage Elastic Load Balancing to balance traffic between on-premises web servers and those hosted in AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Offload traffic from on-premises environment: Setup a CIoudFront distribution, and configure CloudFront to cache objects from a custom origin. Choose to customize your object cache behavior, and select a TTL that objects should exist in cache.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate to AWS: Use VM Import/Export to quickly convert an on-premises web server to an AMI. Create an Auto Scaling group, which uses the imported AMI to scale the web tier based on incoming traffic. Create an RDS read replica and setup replication between the RDS instance and on-premises MySQL server to migrate the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 34471,
          "date": "Fri 01 Oct 2021 17:10",
          "username": "AnNguyenhhuoicemanWilliam_YeCDV_frBlah777",
          "content": "Answer is C<br>A: This works if the website is static but we don’t know enough about it to determine if S3 can host it<br>B: ELB can not be used with resources outside of AWS<br>C: CloudFront works with custom origins, in this case the external PHP web app. CloudFront is a good choice for handling the traffic spike in a short time<br>D: The scenario does not say the on-prem app is in a VM, this is not an option<br>https://acloud.guru/forums/aws-certified-solutions-architect-professional/discussion/-KF5MzPkMfG_IyE2jkG1/load-balancing-to-balance-traffic-between-on-premises-web-servers-and-those-hostI'm not saying B is correct. But, for ELB not being used outside of AWS, the following link shows AWS seems to have supported it.<br>https://aws.amazon.com/about-aws/whats-new/2017/08/elastic-load-balancing-application-load-balancer-now-supports-load-balancing-to-ip-addresses-as-targets-for-aws-and-on-premises-resources/If this is supported why B is not a valid answer then? C does look simpler thoughAfter read your link, only ALB support on-premise;Correct answer still C. ELB = load balancing service. When you choose ELB, you still have to choose between ALB (layer 7), NLB (layer 4), or CLB (both, but is not integrated with new services).<br>Previously, CLB was the only LB available and therefore was called ELB.  https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.htmlELB is including ALB and CLB (Classic one). ALB can support on-premise resources and AWS resources via IP address. But you have to create connection between AWS and on-premise first (VPN or Direct Connect). So, i think that B is not correct.",
          "upvote_count": "1641322"
        },
        {
          "id": 50663,
          "date": "Tue 05 Oct 2021 17:52",
          "username": "hhuoicemanWilliam_YeCDV_fr",
          "content": "I'm not saying B is correct. But, for ELB not being used outside of AWS, the following link shows AWS seems to have supported it.<br>https://aws.amazon.com/about-aws/whats-new/2017/08/elastic-load-balancing-application-load-balancer-now-supports-load-balancing-to-ip-addresses-as-targets-for-aws-and-on-premises-resources/If this is supported why B is not a valid answer then? C does look simpler thoughAfter read your link, only ALB support on-premise;Correct answer still C. ELB = load balancing service. When you choose ELB, you still have to choose between ALB (layer 7), NLB (layer 4), or CLB (both, but is not integrated with new services).<br>Previously, CLB was the only LB available and therefore was called ELB.  https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html",
          "upvote_count": "4132"
        },
        {
          "id": 55710,
          "date": "Thu 07 Oct 2021 15:04",
          "username": "iceman",
          "content": "If this is supported why B is not a valid answer then? C does look simpler though",
          "upvote_count": "1"
        },
        {
          "id": 103564,
          "date": "Sun 10 Oct 2021 20:12",
          "username": "William_YeCDV_fr",
          "content": "After read your link, only ALB support on-premise;Correct answer still C. ELB = load balancing service. When you choose ELB, you still have to choose between ALB (layer 7), NLB (layer 4), or CLB (both, but is not integrated with new services).<br>Previously, CLB was the only LB available and therefore was called ELB.  https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html",
          "upvote_count": "32"
        },
        {
          "id": 163029,
          "date": "Sun 17 Oct 2021 21:09",
          "username": "CDV_fr",
          "content": "ELB = load balancing service. When you choose ELB, you still have to choose between ALB (layer 7), NLB (layer 4), or CLB (both, but is not integrated with new services).<br>Previously, CLB was the only LB available and therefore was called ELB.  https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html",
          "upvote_count": "2"
        },
        {
          "id": 164774,
          "date": "Tue 19 Oct 2021 13:14",
          "username": "Blah777",
          "content": "ELB is including ALB and CLB (Classic one). ALB can support on-premise resources and AWS resources via IP address. But you have to create connection between AWS and on-premise first (VPN or Direct Connect). So, i think that B is not correct.",
          "upvote_count": "2"
        },
        {
          "id": 276864,
          "date": "Thu 28 Oct 2021 12:24",
          "username": "PredaOvde",
          "content": "I don't think it's C.  What if database is the bottleneck? Cloudfront would not help with that. I vote D. ",
          "upvote_count": "8"
        },
        {
          "id": 658818,
          "date": "Sun 04 Sep 2022 00:10",
          "username": "chamarz",
          "content": "Answer is C - Worth mentioning that CF supports dynamic + static content. The keyword here is \\\"short timeframe\\\".. <br>all the other options will work if <br>A - if the content was static <br>B - If there was no short time frame requirement<br>C - Correct because CF supports dynamic + static content<br>D - Doesnt justify the \\\"short time frame\\\" requirement",
          "upvote_count": "1"
        },
        {
          "id": 653243,
          "date": "Mon 29 Aug 2022 03:25",
          "username": "dino210",
          "content": "the key point is \\\"announcement\\\"，it's static content. Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 638189,
          "date": "Wed 27 Jul 2022 17:57",
          "username": "hilft",
          "content": "C.  quick option",
          "upvote_count": "2"
        },
        {
          "id": 610383,
          "date": "Thu 02 Jun 2022 02:00",
          "username": "Murtazaarif",
          "content": "Cloudfront is right choice. because we are time bounded",
          "upvote_count": "2"
        },
        {
          "id": 559768,
          "date": "Thu 03 Mar 2022 01:58",
          "username": "azure_kai",
          "content": "I would choose B.  <br>For C, we don't know whether the web traffic is about read or wirte/update. If it's about upload files, for example, CloudFront caching won't help at all.",
          "upvote_count": "1"
        },
        {
          "id": 514349,
          "date": "Sat 01 Jan 2022 05:17",
          "username": "cldy",
          "content": "C correct.",
          "upvote_count": "1"
        },
        {
          "id": 405788,
          "date": "Sun 07 Nov 2021 07:05",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "2"
        },
        {
          "id": 353890,
          "date": "Sat 06 Nov 2021 01:49",
          "username": "wem",
          "content": "D is the correct answer",
          "upvote_count": "1"
        },
        {
          "id": 325921,
          "date": "Fri 05 Nov 2021 05:20",
          "username": "01037",
          "content": "C. <br>As everyone says, AD are wrong.<br>As to B, it works, but C is better considering time and cost.<br>And I have a question about ASG, ASG needs time to scale up, so when there is suddenly a burst, can ASG deal with it fast enough?",
          "upvote_count": "1"
        },
        {
          "id": 312579,
          "date": "Sat 30 Oct 2021 01:55",
          "username": "ExtHo",
          "content": "C <br>You can use CloudFront with the on-premises website as the origin. CloudFront is a highly available, scalable service that can cache frequently accessed files on the website and can significantly make the load times faster.",
          "upvote_count": "1"
        },
        {
          "id": 308859,
          "date": "Fri 29 Oct 2021 01:11",
          "username": "ppshein",
          "content": "for me, B",
          "upvote_count": "1"
        },
        {
          "id": 267759,
          "date": "Wed 27 Oct 2021 20:51",
          "username": "rusll",
          "content": "B or C, but mostly C.  Since time is a factor, B will likely take some time to implement, it is a valid scenario but to implement it, we need to set up a vpn connection (or direct connect), create AMIs, configure ALB ... i think for the short term we implement the C solution but then probably implement D after the burst has happened.",
          "upvote_count": "1"
        },
        {
          "id": 266844,
          "date": "Wed 27 Oct 2021 13:39",
          "username": "awsnoob",
          "content": "i don't think is C. .. CloudFront is normally use to cache static content... I think it is B",
          "upvote_count": "2"
        },
        {
          "id": 237017,
          "date": "Tue 26 Oct 2021 13:54",
          "username": "rselas",
          "content": "I don't see how C can be correct. Cloudfront wiould help with caching static content. But the web application is PHP, so content dynamic required. Cloudfront wouldn't help. I bet for B since you can have a hybrid solution, ELB + ( ASG + EC2 ) + on-premise web tier and DB on-premise.",
          "upvote_count": "4"
        },
        {
          "id": 203542,
          "date": "Mon 25 Oct 2021 05:51",
          "username": "newmestudent2020",
          "content": "C<br>A: only available to static website<br>B: auto scaling group can't work with target type IP which is necessary for ELB to work on premise. I tried it just now.<br>D: not enough timeI also tested that autoscaling only works with an instance type target group, not an IP type target group. This will rule out a hybrid option of adding instances and physical servers on prem in the same target group (this requires IP type target group). Also, you cannot create a read replica without a RDS instance first in AWS. This rules out D.  Only viable answer is C. ",
          "upvote_count": "42"
        },
        {
          "id": 398873,
          "date": "Sun 07 Nov 2021 03:31",
          "username": "student2020",
          "content": "I also tested that autoscaling only works with an instance type target group, not an IP type target group. This will rule out a hybrid option of adding instances and physical servers on prem in the same target group (this requires IP type target group). Also, you cannot create a read replica without a RDS instance first in AWS. This rules out D.  Only viable answer is C. ",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are implementing AWS Direct Connect.You intend to use AWS public service end points such as Amazon S3, across the AWS Direct Connect link. You want other Internet traffic to use your existing link to an Internet Service Provider.<br>What is the correct way to configure AWS Direct connect for access to services such as Amazon S3?</p>",
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
              "choice": "<p>A. Configure a public Interface on your AWS Direct Connect link. Configure a static route via your AWS Direct Connect link that points to Amazon S3 Advertise a default route to AWS using BGP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a private interface on your AWS Direct Connect link. Configure a static route via your AWS Direct connect link that points to Amazon S3 Configure specific routes to your network in your VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a public interface on your AWS Direct Connect link. Redistribute BGP routes into your existing routing infrastructure; advertise specific routes for your network to AWS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a private interface on your AWS Direct connect link. Redistribute BGP routes into your existing routing infrastructure and advertise a default route to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 327029,
          "date": "Thu 07 Oct 2021 04:40",
          "username": "01037",
          "content": "C for sure",
          "upvote_count": "6"
        },
        {
          "id": 446953,
          "date": "Mon 01 Nov 2021 10:14",
          "username": "Allen_Du",
          "content": "in my opinion the difference between A and C isn't the BGP, but the static route.if you advertise a default route to AWS, then all the traffic will go throuth DX.",
          "upvote_count": "3"
        },
        {
          "id": 445609,
          "date": "Sun 31 Oct 2021 08:31",
          "username": "andypham",
          "content": "C is correct as we need to use public VIF on direct link to connect to S3. BGP protocol is used for dynamic, hence option A is eliminated.",
          "upvote_count": "2"
        },
        {
          "id": 405789,
          "date": "Sun 31 Oct 2021 00:59",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 399410,
          "date": "Sat 23 Oct 2021 05:57",
          "username": "blackgamer",
          "content": "Answer is C. <br>Refer to below link for how to set it up - <br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-direct-connect/",
          "upvote_count": "3"
        },
        {
          "id": 362270,
          "date": "Sun 17 Oct 2021 17:39",
          "username": "neta1o",
          "content": "C, from the FAQ \\\"A public virtual interface enables access to public services, such as Amazon S3. A private virtual interface enables access to your VPC. \\\"",
          "upvote_count": "1"
        },
        {
          "id": 360149,
          "date": "Thu 07 Oct 2021 21:56",
          "username": "kidd5",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 316111,
          "date": "Thu 30 Sep 2021 10:36",
          "username": "ppshein",
          "content": "C is the most suitable",
          "upvote_count": "2"
        },
        {
          "id": 314380,
          "date": "Fri 24 Sep 2021 01:13",
          "username": "nitinz",
          "content": "C is the correct answer.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your application is using an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence.<br>The database CPU is often above 80% usage and 90% of I/O operations on the database are reads. To improve performance you recently added a single-node<br>Memcached ElastiCache Cluster to cache frequent DB query results. In the next weeks the overall workload is expected to grow by 30%.<br>Do you need to change anything in the architecture to maintain the high availability or the application with the anticipated additional load? Why?</p>",
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
              "choice": "<p>A. Yes, you should deploy two Memcached ElastiCache Clusters in different AZs because the RDS instance will not be able to handle the load if the cache node fails.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, if the cache node fails you can always get the same data from the DB without having any availability impact.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, if the cache node fails the automated ElastiCache node recovery feature will prevent any availability impact.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, you should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 625119,
          "date": "Thu 30 Jun 2022 10:20",
          "username": "TechX",
          "content": "It's A",
          "upvote_count": "1"
        },
        {
          "id": 528848,
          "date": "Fri 21 Jan 2022 00:43",
          "username": "tkanmani76tkanmani76",
          "content": "While A works, it involves additional cost. Whereas Elasticache supports node recovery on failure. Believe that would be good enough to take care, there may be momentary impact during that time alone.Hence C look right.",
          "upvote_count": "21"
        },
        {
          "id": 528849,
          "date": "Fri 21 Jan 2022 00:43",
          "username": "tkanmani76",
          "content": "Hence C look right.",
          "upvote_count": "1"
        },
        {
          "id": 405790,
          "date": "Fri 05 Nov 2021 23:54",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 328681,
          "date": "Sun 26 Sep 2021 03:29",
          "username": "01037",
          "content": "A for sure",
          "upvote_count": "1"
        },
        {
          "id": 312596,
          "date": "Thu 23 Sep 2021 13:05",
          "username": "ExtHonitinz",
          "content": "yes A is correctgreat explanation, a is correct.",
          "upvote_count": "11"
        },
        {
          "id": 314383,
          "date": "Thu 23 Sep 2021 21:20",
          "username": "nitinz",
          "content": "great explanation, a is correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ERP application is deployed across multiple AZs in a single region. In the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes. The customer realizes that data corruption occurred roughly 1.5 hours ago.<br>What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>A. Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use synchronous database master-slave replication between two availability zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take hourly DB backups to EC2 Instance store volumes with transaction logs stored In S3 every 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take 15 minute DB backups stored In Glacier with transaction logs stored in S3 every 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 18752,
          "date": "Thu 23 Sep 2021 07:07",
          "username": "skywalker",
          "content": "A. .cozRDS backup or snapshot is written to S3.. If automatically backup, transaction logs are also being backup in 5 mins interval to S3.",
          "upvote_count": "11"
        },
        {
          "id": 175414,
          "date": "Sun 17 Oct 2021 04:44",
          "username": "soksy01037",
          "content": "The only answer we can be assured of working is A. <br>B doesn't help for data corruption (question doesn't specify physical or logical so have to address both) as logical corruption will be replicated.<br>C.  We don't put backups on ephemeral storage.<br>D.  Glacier Standard retrieval is 3-5 hours, and whilst expedited can be used to retrieve within 5 minutes, this is only for archives up to 250MB - the question doesn't give the size of the database, so I think we should not choose this option.Nicely explained.",
          "upvote_count": "101"
        },
        {
          "id": 329051,
          "date": "Tue 02 Nov 2021 06:18",
          "username": "01037",
          "content": "Nicely explained.",
          "upvote_count": "1"
        },
        {
          "id": 705418,
          "date": "Thu 27 Oct 2022 12:03",
          "username": "sjpd10",
          "content": "A works",
          "upvote_count": "1"
        },
        {
          "id": 549145,
          "date": "Thu 17 Feb 2022 05:02",
          "username": "jyrajan69",
          "content": "If we are at 10:30am, that would mean that incident occured at 8am. Based on the backup schedule, we will be restoring from the 7am backup and have transaction logs upto 9:55am. Therefore total amount of data loss, will be 5 minutes, satisfying the RPO of 15 min and the RTO. So my answer would be A. ",
          "upvote_count": "1"
        },
        {
          "id": 496527,
          "date": "Wed 08 Dec 2021 05:34",
          "username": "cldy",
          "content": "A.  Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.",
          "upvote_count": "1"
        },
        {
          "id": 405792,
          "date": "Sun 07 Nov 2021 10:41",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 380396,
          "date": "Sat 06 Nov 2021 11:53",
          "username": "santhoshmp",
          "content": "With A , I will not be able to meet the RPO requirement. if we use the S3 backup 2 hours back to restore the DB, the RPO will be 30 minutes from the moment it was corrupted. Transaction logs cannot be used to restore a database . So the answer is D .",
          "upvote_count": "1"
        },
        {
          "id": 363353,
          "date": "Fri 05 Nov 2021 23:14",
          "username": "kuroro",
          "content": "Just want to ask how can RDS backup at hourly interval? I can only find daily, weekly and monthly.",
          "upvote_count": "1"
        },
        {
          "id": 323079,
          "date": "Sun 31 Oct 2021 09:05",
          "username": "cldy",
          "content": "A. <br>while D can also work but backup every 15 mins doesn't seem like real ... so A satisfies the requirement.",
          "upvote_count": "1"
        },
        {
          "id": 319675,
          "date": "Sat 30 Oct 2021 22:09",
          "username": "eji",
          "content": "D is correct because now you can retrieve from glacier much faster but it cost additional charge. so you can still meet the RTO",
          "upvote_count": "1"
        },
        {
          "id": 312602,
          "date": "Tue 26 Oct 2021 19:42",
          "username": "ExtHo",
          "content": "Only one option is correct and that is A :)",
          "upvote_count": "1"
        },
        {
          "id": 293713,
          "date": "Mon 25 Oct 2021 23:21",
          "username": "Madwyn",
          "content": "D is incorrect. When recover the DB, you won't need old backups from 90 days ago, it doesn't make sense to commit such a long retention period. Glacier Expedited can reduce the retrieval time to 1-5 minutes, but the retention made it no longer economical, imagine the total amount of data stored on Glacier for 90 days compared to most recent 24 hours data on S3, big cost difference.",
          "upvote_count": "2"
        },
        {
          "id": 267771,
          "date": "Sun 24 Oct 2021 14:19",
          "username": "rusll",
          "content": "D.  this is the only option that will satisfy both the rpo and the rto constraints, sure it will cost a lot of money, and sure its not ideal (standard-ia is better adapted for backups), but its the only feasible solution proposed.",
          "upvote_count": "2"
        },
        {
          "id": 193393,
          "date": "Fri 22 Oct 2021 22:01",
          "username": "hkwongiamgk",
          "content": "Still can't understand why option A can meet the 15 min RPO requirement. Anyone can explain?because transaction logs are stored every 5 mins , means RPO will be less than 15 mins.",
          "upvote_count": "13"
        },
        {
          "id": 198886,
          "date": "Sat 23 Oct 2021 01:11",
          "username": "iamgk",
          "content": "because transaction logs are stored every 5 mins , means RPO will be less than 15 mins.",
          "upvote_count": "3"
        },
        {
          "id": 193347,
          "date": "Tue 19 Oct 2021 19:31",
          "username": "deejiw",
          "content": "I vote for D",
          "upvote_count": "1"
        },
        {
          "id": 190100,
          "date": "Mon 18 Oct 2021 08:20",
          "username": "srknbngl",
          "content": "I Think A",
          "upvote_count": "1"
        },
        {
          "id": 150013,
          "date": "Thu 14 Oct 2021 20:33",
          "username": "7thGuestCDV_frJoshEversman",
          "content": "A - Best Answer: Meets the requirement and is more cost effective than B<br>B - Second Best: Meets the requirement but is more expensive<br>C - We cannot backup to an instance store volume. Instance store volumes are ephemeral (temporary)<br>D - Won't meet the RTO, because Glacier's standard retrieval time is typically within 3 to 5 hoursI disagree with B.  What happen on master happen on slave. If you take 1h and half to see that data is corrupted, it is corrupted on slave too. No backup on S3, no transaction logs, B is not really helping.with A option, if there is already 50 mins since last backup and now disaster occurs, how will you go to 15 min RPO, D appears to be option, as with expedited request in glacier, you can retrieve data in 1-5 mins.",
          "upvote_count": "112"
        },
        {
          "id": 163034,
          "date": "Sat 16 Oct 2021 13:28",
          "username": "CDV_fr",
          "content": "I disagree with B.  What happen on master happen on slave. If you take 1h and half to see that data is corrupted, it is corrupted on slave too. No backup on S3, no transaction logs, B is not really helping.",
          "upvote_count": "1"
        },
        {
          "id": 170678,
          "date": "Sat 16 Oct 2021 18:31",
          "username": "JoshEversman",
          "content": "with A option, if there is already 50 mins since last backup and now disaster occurs, how will you go to 15 min RPO, D appears to be option, as with expedited request in glacier, you can retrieve data in 1-5 mins.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing the network infrastructure for an application server in Amazon VPC.  Users will access all application instances from the Internet, as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link.<br>How would you design routing to meet the above requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a single routing table with two default routes: on to the Internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure two routing tables: on that has a default router via the Internet gateway, and other that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 312608,
          "date": "Mon 27 Sep 2021 14:49",
          "username": "ExtHo",
          "content": "Rolled out<br>Apropagating default route would cause conflict.<br>C there cannot be 2 default routes<br>D as the instances has to be in public subnet and should have a single routing table associated with them<br><br>so B is right answer",
          "upvote_count": "10"
        },
        {
          "id": 314392,
          "date": "Thu 30 Sep 2021 05:41",
          "username": "nitinz",
          "content": "A.  Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets. 2 DEFAUTL ROUTES? <br>B.  Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets. PERFECT.<br>C.  Configure a single routing table with two default routes: on to the Internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in the VPC.  CAN NOT HAVE 2 DEFAUTL ROUTES.<br>D.  Configure two routing tables: on that has a default router via the Internet gateway, and other that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet. ???",
          "upvote_count": "6"
        },
        {
          "id": 705423,
          "date": "Thu 27 Oct 2022 12:08",
          "username": "sjpd10",
          "content": "B. <br>Use a routing table for the VPC access and BGP for the Direct Connect based access from on-prem.",
          "upvote_count": "1"
        },
        {
          "id": 497622,
          "date": "Thu 09 Dec 2021 11:46",
          "username": "cldy",
          "content": "B.  Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.",
          "upvote_count": "1"
        },
        {
          "id": 405794,
          "date": "Sat 23 Oct 2021 15:52",
          "username": "Akhil254",
          "content": "B Correct",
          "upvote_count": "1"
        },
        {
          "id": 397341,
          "date": "Fri 22 Oct 2021 20:34",
          "username": "backfringe",
          "content": "B is the right answer cause specific routesthat identify on prem-net need to be configured to send the traffic to on-prem net via direct connect.<br>C is wrong as default route (0.0.0.0/0) will send all traffic over direct connect even internet traffic",
          "upvote_count": "2"
        },
        {
          "id": 329690,
          "date": "Sat 16 Oct 2021 08:30",
          "username": "01037",
          "content": "What does A means?",
          "upvote_count": "1"
        },
        {
          "id": 328059,
          "date": "Wed 13 Oct 2021 18:56",
          "username": "M_Asep",
          "content": "B is Right Answer",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You control access to S3 buckets and objects with:</p>",
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
              "choice": "<p>A. Identity and Access Management (IAM) Policies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Access Control Lists (ACLs).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Bucket Policies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. All of the above<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 25615,
          "date": "Sat 25 Sep 2021 16:37",
          "username": "Yangnitinz",
          "content": "D is correct answerD all the way.",
          "upvote_count": "111"
        },
        {
          "id": 314393,
          "date": "Mon 18 Oct 2021 04:33",
          "username": "nitinz",
          "content": "D all the way.",
          "upvote_count": "1"
        },
        {
          "id": 625606,
          "date": "Fri 01 Jul 2022 08:34",
          "username": "TechX",
          "content": "D, easy one",
          "upvote_count": "2"
        },
        {
          "id": 578132,
          "date": "Wed 30 Mar 2022 09:57",
          "username": "jj22222",
          "content": "DDDDDDDDDDDD",
          "upvote_count": "2"
        },
        {
          "id": 536866,
          "date": "Mon 31 Jan 2022 12:06",
          "username": "HellGate",
          "content": "D. ..<br>IAM, ACL, Bucket policies + Block Public Access<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/secure-s3-resources/",
          "upvote_count": "1"
        },
        {
          "id": 330788,
          "date": "Sun 24 Oct 2021 00:11",
          "username": "01037",
          "content": "D for sure",
          "upvote_count": "1"
        },
        {
          "id": 322616,
          "date": "Sat 23 Oct 2021 06:56",
          "username": "cldy",
          "content": "D. <br>IAM + ACL + BP",
          "upvote_count": "1"
        },
        {
          "id": 291345,
          "date": "Tue 12 Oct 2021 20:44",
          "username": "bustedd",
          "content": "ddddddddddd",
          "upvote_count": "1"
        },
        {
          "id": 264509,
          "date": "Mon 11 Oct 2021 12:11",
          "username": "Ajeeshpv",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 215296,
          "date": "Sat 09 Oct 2021 05:23",
          "username": "JohnPhan",
          "content": "It is D",
          "upvote_count": "1"
        },
        {
          "id": 210326,
          "date": "Wed 06 Oct 2021 09:18",
          "username": "Candid_Developer",
          "content": "All the above - IAM at user/group level, Bucket Polices at Bucket level, ACLs at Object level",
          "upvote_count": "2"
        },
        {
          "id": 190105,
          "date": "Sun 03 Oct 2021 10:38",
          "username": "srknbngl",
          "content": "D is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 143338,
          "date": "Sat 02 Oct 2021 06:19",
          "username": "fullaws",
          "content": "D is correct",
          "upvote_count": "2"
        },
        {
          "id": 123084,
          "date": "Thu 30 Sep 2021 17:14",
          "username": "noisonnoiton",
          "content": "go with D",
          "upvote_count": "3"
        },
        {
          "id": 49635,
          "date": "Sun 26 Sep 2021 11:33",
          "username": "BillyC",
          "content": "Yes D is Correct!",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The AWS IT infrastructure that AWS provides, complies with the following IT security standards, including:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: E</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. SOC 1/SSAE 16/ISAE 3402 (formerly SAS 70 Type II), SOC 2 and SOC 3<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. FISMA, DIACAP, and FedRAMP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. PCI DSS Level 1, ISO 27001, ITAR and FIPS 140-2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. HIPAA, Cloud Security Alliance (CSA) and Motion Picture Association of America (MPAA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. All of the above<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 22916,
          "date": "Thu 23 Sep 2021 11:52",
          "username": "examacc",
          "content": "Answer is E.  Since question does not ask select3. so it is single choice answer. not sure why they selected 3. if it was select 3 then there is issue if we have to include recent certifications",
          "upvote_count": "7"
        },
        {
          "id": 18807,
          "date": "Tue 21 Sep 2021 18:00",
          "username": "skywalker",
          "content": "http://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf<br><br>E should be correct now.",
          "upvote_count": "6"
        },
        {
          "id": 705428,
          "date": "Thu 27 Oct 2022 12:10",
          "username": "sjpd10",
          "content": "E.  for sure",
          "upvote_count": "1"
        },
        {
          "id": 497796,
          "date": "Thu 09 Dec 2021 15:29",
          "username": "cldy",
          "content": "E.  All of the above",
          "upvote_count": "1"
        },
        {
          "id": 487966,
          "date": "Sat 27 Nov 2021 09:01",
          "username": "acloudguru",
          "content": "hope i can have this easy one in my exam",
          "upvote_count": "1"
        },
        {
          "id": 422017,
          "date": "Thu 04 Nov 2021 17:09",
          "username": "ciberado",
          "content": "I don't think this type of question (based on very specific knowledge of the different available certifications) appears on a real exam.",
          "upvote_count": "1"
        },
        {
          "id": 330793,
          "date": "Wed 03 Nov 2021 15:45",
          "username": "01037",
          "content": "E<br>It's really difficult to know all this standards",
          "upvote_count": "3"
        },
        {
          "id": 322615,
          "date": "Mon 01 Nov 2021 19:48",
          "username": "cldy",
          "content": "E. <br>All supported",
          "upvote_count": "1"
        },
        {
          "id": 285434,
          "date": "Sat 23 Oct 2021 09:16",
          "username": "windwind",
          "content": "It's A base the latest informationAll options are right, the answer is E. ",
          "upvote_count": "11"
        },
        {
          "id": 285435,
          "date": "Sun 24 Oct 2021 00:25",
          "username": "wind",
          "content": "All options are right, the answer is E. ",
          "upvote_count": "1"
        },
        {
          "id": 281497,
          "date": "Thu 21 Oct 2021 11:51",
          "username": "bnagaraja9099",
          "content": "E.  https://aws.amazon.com/compliance/programs/",
          "upvote_count": "3"
        },
        {
          "id": 253324,
          "date": "Sun 17 Oct 2021 17:56",
          "username": "reoreoreoreo",
          "content": "The answer is A, B, C.  HIPPA, MPAA, CSA don't offer certification for Cloud Service Provider like AWS. It is the user's responsibility to meet those compliances. AWS provides guidances align with those compliances' best practice.<br>https://aws.amazon.com/compliance/hipaa-compliance/?nc1=h_ls<br>https://aws.amazon.com/compliance/mpaa/?nc1=h_ls<br>https://aws.amazon.com/compliance/csa/?nc1=h_ls",
          "upvote_count": "1"
        },
        {
          "id": 243736,
          "date": "Fri 15 Oct 2021 12:58",
          "username": "TaherShaker",
          "content": "Based on the below link, Answer is A, B & C<br>https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-and-compliance.html",
          "upvote_count": "1"
        },
        {
          "id": 210327,
          "date": "Wed 13 Oct 2021 03:05",
          "username": "Candid_Developer",
          "content": "Need to update the answer as E",
          "upvote_count": "1"
        },
        {
          "id": 203585,
          "date": "Tue 12 Oct 2021 01:37",
          "username": "newme",
          "content": "Where can I find all IT Security Standards?<br>Not only what AWS implements.",
          "upvote_count": "1"
        },
        {
          "id": 190106,
          "date": "Sun 10 Oct 2021 06:20",
          "username": "srknbngl",
          "content": "E is correct",
          "upvote_count": "1"
        },
        {
          "id": 151782,
          "date": "Fri 08 Oct 2021 21:08",
          "username": "Krish812003",
          "content": "E is correct. <br>IT infrastructure that AWS provides to its customers is designed and managed in alignment with security best practices and a variety of IT security standards, including:<br>SOC 1/SSAE 16/ISAE 3402 (formerly SAS 70)<br>SOC 2<br>SOC 3<br>FISMA, DIACAP, and FedRAMP<br>DOD CSM Levels 1-5<br>PCI DSS Level 1<br>ISO 9001 / ISO 27001<br>ITAR<br>FIPS 140-2<br>MTCS Level 3<br>And meet several industry-specific standards, including:<br>Criminal Justice Information Services (CJIS)<br>Cloud Security Alliance (CSA)<br>Family Educational Rights and Privacy Act (FERPA)<br>Health Insurance Portability and Accountability Act (HIPAA)<br>Motion Picture Association of America (MPAA)",
          "upvote_count": "3"
        },
        {
          "id": 143341,
          "date": "Fri 08 Oct 2021 19:32",
          "username": "fullaws",
          "content": "E is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Auto Scaling requests are signed with a _________ signature calculated from the request and the user's private key.</p>",
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
              "choice": "<p>A. SSL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AES-256<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. HMAC-SHA1<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. X.509<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 705431,
          "date": "Thu 27 Oct 2022 12:13",
          "username": "sjpd10",
          "content": "C.  is right",
          "upvote_count": "1"
        },
        {
          "id": 655318,
          "date": "Wed 31 Aug 2022 19:26",
          "username": "davideccc",
          "content": "c SHA1",
          "upvote_count": "1"
        },
        {
          "id": 610688,
          "date": "Thu 02 Jun 2022 18:23",
          "username": "Ddssssss",
          "content": "C <br>Requests are signed with an HMAC-SHA1 signature calculated from the request and the user’s private key.",
          "upvote_count": "3"
        },
        {
          "id": 527916,
          "date": "Wed 19 Jan 2022 21:52",
          "username": "wahlbergusawahlbergusa",
          "content": "D . X509Correction. It is C.  => https://d1.awsstatic.com/whitepapers/Security/Security_Compute_Services_Whitepaper.pdf",
          "upvote_count": "12"
        },
        {
          "id": 527921,
          "date": "Wed 19 Jan 2022 21:54",
          "username": "wahlbergusa",
          "content": "Correction. It is C.  => https://d1.awsstatic.com/whitepapers/Security/Security_Compute_Services_Whitepaper.pdf",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#19",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The following policy can be attached to an IAM group. It lets an IAM user in that group access a \"home directory\" in AWS S3 that matches their user name using the console.<br>{<br>\"Version\": \"2012-10-17\",<br>\"Statement\": [<br>{<br>\"Action\": [\"s3:*\"],<br>\"Effect\": \"Allow\",<br>\"Resource\": [\"arn:aws:s3:::bucket-name\"],<br>\"Condition\":{\"StringLike\":{\"s3:prefix\":[\"home/${aws:username}/*\"]}}<br>},<br>{<br>\"Action\":[\"s3:*\"],<br>\"Effect\":\"Allow\",<br>\"Resource\": [\"arn:aws:s3:::bucket-name/home/${aws:username}/*\"]<br>}<br>]<br>}</p>",
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
              "choice": "<p>A. True<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. False<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 12298,
          "date": "Tue 21 Sep 2021 10:29",
          "username": "Moonsarah1FAB1975fwnitinzcldy",
          "content": "Answer B:<br>explanation:<br>https://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders-in-an-amazon-s3-bucket/I thought this link was super helpful. Here's a quote:<br><br>\\\"The ListAllMyBuckets action grants David permission to list all the buckets in the AWS account, which is required for navigating to buckets in the Amazon S3 console (and as an aside, you currently can’t selectively filter out certain buckets, so users must have permission to list all buckets for console access). The console also does a GetBucketLocation call when users initially navigate to the Amazon S3 console, which is why David also requires permission for that action. Without these two actions, David will get an access denied error in the console.\\\"Thank you Sarah. Really good and concise summary: <br>Is missing: <br>List on resource: all buckets<br>GetBucketLocation on resource: all bucketsThe link indeed is very helpful. It shows how to configure policies so that user can use console to upload/download objects from S3 to his own directory.<br>Basically two more blocks are needed (in addition to two blocks listed in this question):<br>Block 1: Allow required Amazon S3 console permissions<br>Block 2: Allow listing objects in root and home foldersthat ink is super helpful, many config are missing from it, hence B\\\"s:*\\\" covers everything, so the correct answer is A TRUE. ",
          "upvote_count": "1551314"
        },
        {
          "id": 43386,
          "date": "Sat 02 Oct 2021 19:12",
          "username": "sarah1FAB1975",
          "content": "I thought this link was super helpful. Here's a quote:<br><br>\\\"The ListAllMyBuckets action grants David permission to list all the buckets in the AWS account, which is required for navigating to buckets in the Amazon S3 console (and as an aside, you currently can’t selectively filter out certain buckets, so users must have permission to list all buckets for console access). The console also does a GetBucketLocation call when users initially navigate to the Amazon S3 console, which is why David also requires permission for that action. Without these two actions, David will get an access denied error in the console.\\\"Thank you Sarah. Really good and concise summary: <br>Is missing: <br>List on resource: all buckets<br>GetBucketLocation on resource: all buckets",
          "upvote_count": "51"
        },
        {
          "id": 671306,
          "date": "Sat 17 Sep 2022 08:24",
          "username": "FAB1975",
          "content": "Thank you Sarah. Really good and concise summary: <br>Is missing: <br>List on resource: all buckets<br>GetBucketLocation on resource: all buckets",
          "upvote_count": "1"
        },
        {
          "id": 83889,
          "date": "Thu 07 Oct 2021 09:24",
          "username": "fw",
          "content": "The link indeed is very helpful. It shows how to configure policies so that user can use console to upload/download objects from S3 to his own directory.<br>Basically two more blocks are needed (in addition to two blocks listed in this question):<br>Block 1: Allow required Amazon S3 console permissions<br>Block 2: Allow listing objects in root and home folders",
          "upvote_count": "3"
        },
        {
          "id": 314396,
          "date": "Sun 24 Oct 2021 11:41",
          "username": "nitinzcldy",
          "content": "that ink is super helpful, many config are missing from it, hence B\\\"s:*\\\" covers everything, so the correct answer is A TRUE. ",
          "upvote_count": "14"
        },
        {
          "id": 323075,
          "date": "Mon 01 Nov 2021 20:24",
          "username": "cldy",
          "content": "\\\"s:*\\\" covers everything, so the correct answer is A TRUE. ",
          "upvote_count": "4"
        },
        {
          "id": 27625,
          "date": "Mon 27 Sep 2021 02:10",
          "username": "tan9Musk",
          "content": "User has no permission to list the ancestor directories, so that they won't be possible to navigate into their own home directory. And full working policy can be found at: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_home-directory-console.htmlBut if they type the right URL they get in. I don't see why it would not work. The question is not whether the user can navigate down to the right path.<br>I think it's TRUE",
          "upvote_count": "85"
        },
        {
          "id": 33776,
          "date": "Tue 28 Sep 2021 07:11",
          "username": "Musk",
          "content": "But if they type the right URL they get in. I don't see why it would not work. The question is not whether the user can navigate down to the right path.<br>I think it's TRUE",
          "upvote_count": "5"
        },
        {
          "id": 705432,
          "date": "Thu 27 Oct 2022 12:15",
          "username": "sjpd10",
          "content": "The second action provides access to all S3 buckets unlike the first with a 'Condition'",
          "upvote_count": "1"
        },
        {
          "id": 580848,
          "date": "Mon 04 Apr 2022 18:54",
          "username": "roka_ua",
          "content": "Vote B",
          "upvote_count": "1"
        },
        {
          "id": 504129,
          "date": "Sat 18 Dec 2021 10:22",
          "username": "tkanmani76RVivektkanmani76",
          "content": "Answer A - In the same link being discussed here the last block is as below - which provides * for all S3 Actions and take to his home page. <br>{<br> \\\"Sid\\\": \\\"AllowAllS3ActionsInUserFolder\\\",<br> \\\"Action\\\":[\\\"s3:*\\\"],<br> \\\"Effect\\\":\\\"Allow\\\",<br> \\\"Resource\\\": [\\\"arn:aws:s3:::my-company/home/${aws:username}/*\\\"]<br>}It still gives permission only to\\\"my-company/home/${aws:username}/*\\\", Permission to list all buckets is necessary to navigate to this folderAgree, stand corrected - Option B",
          "upvote_count": "111"
        },
        {
          "id": 511806,
          "date": "Wed 29 Dec 2021 06:10",
          "username": "RVivektkanmani76",
          "content": "It still gives permission only to\\\"my-company/home/${aws:username}/*\\\", Permission to list all buckets is necessary to navigate to this folderAgree, stand corrected - Option B",
          "upvote_count": "11"
        },
        {
          "id": 523249,
          "date": "Fri 14 Jan 2022 02:28",
          "username": "tkanmani76",
          "content": "Agree, stand corrected - Option B",
          "upvote_count": "1"
        },
        {
          "id": 330868,
          "date": "Tue 02 Nov 2021 17:10",
          "username": "01037",
          "content": "B. <br>\\\"Using the console\\\" is the key.<br>If only program access is needed, then it's enough.",
          "upvote_count": "1"
        },
        {
          "id": 322610,
          "date": "Sun 24 Oct 2021 14:39",
          "username": "cldy",
          "content": "A.  <br>Shouldn't s:* cover all S3 actions?",
          "upvote_count": "1"
        },
        {
          "id": 190111,
          "date": "Sat 16 Oct 2021 10:08",
          "username": "srknbngl",
          "content": "Correct Answer: B",
          "upvote_count": "1"
        },
        {
          "id": 143355,
          "date": "Fri 15 Oct 2021 20:25",
          "username": "fullaws",
          "content": "B is correct (s3:ListAllMyBuckets, s3:GetBucketLocation need to Resource *)",
          "upvote_count": "4"
        },
        {
          "id": 123088,
          "date": "Fri 15 Oct 2021 04:16",
          "username": "noisonnoiton",
          "content": "go with B",
          "upvote_count": "2"
        },
        {
          "id": 117592,
          "date": "Mon 11 Oct 2021 16:48",
          "username": "awssp12345",
          "content": "Should s3:* cover all the s3 permissions including list?",
          "upvote_count": "4"
        },
        {
          "id": 49639,
          "date": "Thu 07 Oct 2021 02:38",
          "username": "BillyC",
          "content": "Yes B is Correct!",
          "upvote_count": "2"
        },
        {
          "id": 36360,
          "date": "Thu 30 Sep 2021 01:21",
          "username": "amog",
          "content": "Answer is B<br>\\\"using the console.\\\". They can use this policy to access home directory by URL, but not the console",
          "upvote_count": "4"
        },
        {
          "id": 26944,
          "date": "Sun 26 Sep 2021 14:06",
          "username": "Danao",
          "content": "Missing quite a few configs, like console access, root and home folder access, etc",
          "upvote_count": "1"
        },
        {
          "id": 21136,
          "date": "Sat 25 Sep 2021 23:10",
          "username": "Tamili",
          "content": "False because either one should be present. Both satisfy the requirement",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What does elasticity mean to AWS?</p>",
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
              "choice": "<p>A. The ability to scale computing resources up easily, with minimal friction and down with latency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The ability to scale computing resources up and down easily, with minimal friction.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The ability to provision cloud computing resources in expectation of future demand.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The ability to recover from business continuity events with minimal friction.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 36362,
          "date": "Thu 30 Sep 2021 15:00",
          "username": "amognitinz",
          "content": "Answer B<br>Elasticity is the ability to grow or shrink infrastructure resources dynamically as needed to adapt to workload changes in an autonomic manner, maximizing the use of resources. This can result in savings in infrastructure costs overall.B is okay",
          "upvote_count": "171"
        },
        {
          "id": 314397,
          "date": "Wed 03 Nov 2021 04:15",
          "username": "nitinz",
          "content": "B is okay",
          "upvote_count": "1"
        },
        {
          "id": 609228,
          "date": "Mon 30 May 2022 15:44",
          "username": "bobsmith2000",
          "content": "B fits the most but it's incorrect as well.<br>I presume they mean scale OUT and IN, instead of UP and DOWN, because the latter means changing instance type, not the number of instances",
          "upvote_count": "1"
        },
        {
          "id": 592076,
          "date": "Tue 26 Apr 2022 06:19",
          "username": "AswinHadinata",
          "content": "B .. up scale and down scale with no harms",
          "upvote_count": "1"
        },
        {
          "id": 494259,
          "date": "Sun 05 Dec 2021 12:20",
          "username": "cldy",
          "content": "B.  The ability to scale computing resources up and down easily, with minimal friction.",
          "upvote_count": "1"
        },
        {
          "id": 330871,
          "date": "Sat 06 Nov 2021 20:54",
          "username": "01037",
          "content": "Yes, B",
          "upvote_count": "2"
        },
        {
          "id": 322612,
          "date": "Wed 03 Nov 2021 23:41",
          "username": "cldy",
          "content": "B. - up & down",
          "upvote_count": "1"
        },
        {
          "id": 291352,
          "date": "Sun 31 Oct 2021 07:22",
          "username": "bustedd",
          "content": "bbbbbb",
          "upvote_count": "1"
        },
        {
          "id": 210329,
          "date": "Tue 26 Oct 2021 07:22",
          "username": "Candid_Developer",
          "content": "Elasticity allows for scaling up and down while scalability is ability to grow up when there is demand. So B",
          "upvote_count": "1"
        },
        {
          "id": 190113,
          "date": "Mon 25 Oct 2021 01:33",
          "username": "srknbngl",
          "content": "Correct Answer: B",
          "upvote_count": "1"
        },
        {
          "id": 143356,
          "date": "Fri 22 Oct 2021 05:06",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 123092,
          "date": "Fri 15 Oct 2021 22:06",
          "username": "noisonnoiton",
          "content": "go with B",
          "upvote_count": "3"
        },
        {
          "id": 49640,
          "date": "Sun 03 Oct 2021 23:09",
          "username": "BillyC",
          "content": "B is Correct!",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The following are AWS Storage services? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. AWS Relational Database Service (AWS RDS)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS ElastiCache<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Glacier<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Import/Export<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698236,
          "date": "Tue 18 Oct 2022 14:34",
          "username": "daniolekdaniolek",
          "content": "rds is considered as storage",
          "upvote_count": "2"
        },
        {
          "id": 650929,
          "date": "Tue 23 Aug 2022 19:32",
          "username": "Ni_yot",
          "content": "C and D. As per whats been said below.",
          "upvote_count": "1"
        },
        {
          "id": 589454,
          "date": "Thu 21 Apr 2022 16:23",
          "username": "user0001",
          "content": "it is C and D , RDS and elastic cache are databases",
          "upvote_count": "2"
        },
        {
          "id": 555724,
          "date": "Fri 25 Feb 2022 04:19",
          "username": "jyrajan69tobstar86",
          "content": "It's B and C.  A is Database Managed Service and D is tool pull data from on premise to cloud and vice versa.C, D<br>The issue is: B - elasticache is an in-memory caching service and not regarded as a storage service.<br>While AWS Import/Export is \\\"moving large amounts of data into and out of AWS using portable storage devices\\\", like an AWS snowball etc., which is made to store to data.",
          "upvote_count": "11"
        },
        {
          "id": 559850,
          "date": "Thu 03 Mar 2022 07:22",
          "username": "tobstar86",
          "content": "C, D<br>The issue is: B - elasticache is an in-memory caching service and not regarded as a storage service.<br>While AWS Import/Export is \\\"moving large amounts of data into and out of AWS using portable storage devices\\\", like an AWS snowball etc., which is made to store to data.",
          "upvote_count": "1"
        },
        {
          "id": 492738,
          "date": "Thu 02 Dec 2021 19:58",
          "username": "pcops",
          "content": "Its on C.  Export import is migration service. RDS is database.",
          "upvote_count": "1"
        },
        {
          "id": 397352,
          "date": "Thu 04 Nov 2021 13:41",
          "username": "backfringe",
          "content": "I go with C &D",
          "upvote_count": "1"
        },
        {
          "id": 330873,
          "date": "Sun 31 Oct 2021 15:33",
          "username": "01037",
          "content": "C&D<br>RDS is database service",
          "upvote_count": "4"
        },
        {
          "id": 329946,
          "date": "Thu 28 Oct 2021 04:47",
          "username": "obaallen",
          "content": "C & D<br>AWS Import/Export = AWS Snowball<br>https://docs.aws.amazon.com/whitepapers/latest/aws-storage-services-overview/introduction.html",
          "upvote_count": "3"
        },
        {
          "id": 329225,
          "date": "Wed 27 Oct 2021 03:30",
          "username": "sevromv",
          "content": "AWS Import/Export is a service you can use to transfer large amounts of data from physical storage devices into AWS. You mail your portable storage devices to AWS and AWS Import/Export transfers data directly off of your storage devices using Amazon's high-speed internal network.",
          "upvote_count": "1"
        },
        {
          "id": 329224,
          "date": "Sun 24 Oct 2021 12:02",
          "username": "sevromv",
          "content": "List of Storage Services:<br>https://docs.aws.amazon.com/whitepapers/latest/aws-storage-services-overview/introduction.html",
          "upvote_count": "1"
        },
        {
          "id": 328067,
          "date": "Sat 23 Oct 2021 10:08",
          "username": "M_Asep",
          "content": "C dan D is correct answer<br>A is running on database<br>https://aws.amazon.com/products/storage/",
          "upvote_count": "1"
        },
        {
          "id": 323080,
          "date": "Sat 16 Oct 2021 18:46",
          "username": "cldy",
          "content": "A.  & C. ",
          "upvote_count": "2"
        },
        {
          "id": 314032,
          "date": "Wed 13 Oct 2021 01:21",
          "username": "D2",
          "content": "It should be A, C",
          "upvote_count": "2"
        },
        {
          "id": 312890,
          "date": "Thu 30 Sep 2021 17:11",
          "username": "ExtHoExtHonitinzvirtual",
          "content": "WhyAWS Import/Export is storage service instead RDS?CD are OK. RDS comes under database .A and C is correct answer. For some stange reasons all cloud providers take RDS as storage. beats me.Exporting data for migration is not indented for storage ... so D is a wrong answer",
          "upvote_count": "2331"
        },
        {
          "id": 314286,
          "date": "Wed 13 Oct 2021 13:43",
          "username": "ExtHo",
          "content": "CD are OK. RDS comes under database .",
          "upvote_count": "3"
        },
        {
          "id": 314398,
          "date": "Sat 16 Oct 2021 14:40",
          "username": "nitinzvirtual",
          "content": "A and C is correct answer. For some stange reasons all cloud providers take RDS as storage. beats me.Exporting data for migration is not indented for storage ... so D is a wrong answer",
          "upvote_count": "31"
        },
        {
          "id": 590681,
          "date": "Sat 23 Apr 2022 16:35",
          "username": "virtual",
          "content": "Exporting data for migration is not indented for storage ... so D is a wrong answer",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How is AWS readily distinguished from other vendors in the traditional IT computing landscape?</p>",
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
              "choice": "<p>A. Experienced. Scalable and elastic. Secure. Cost-effective. Reliable<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Secure. Flexible. Cost-effective. Scalable and elastic. Global<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Secure. Flexible. Cost-effective. Scalable and elastic. Experienced<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Flexible. Cost-effective. Dynamic. Secure. Experienced.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 65844,
          "date": "Tue 05 Oct 2021 03:52",
          "username": "Smart",
          "content": "Ridiculous question...Ridiculous options",
          "upvote_count": "26"
        },
        {
          "id": 21137,
          "date": "Mon 20 Sep 2021 04:37",
          "username": "Tamilinitinz",
          "content": "Just ignore you won't get this type of ques for sureI agree this is not coming. B",
          "upvote_count": "121"
        },
        {
          "id": 314399,
          "date": "Mon 25 Oct 2021 20:17",
          "username": "nitinz",
          "content": "I agree this is not coming. B",
          "upvote_count": "1"
        },
        {
          "id": 623315,
          "date": "Mon 27 Jun 2022 15:35",
          "username": "[Removed]",
          "content": "I will submit without answering to this.",
          "upvote_count": "1"
        },
        {
          "id": 577813,
          "date": "Tue 29 Mar 2022 20:15",
          "username": "jj22222",
          "content": "B = Global vs experienced",
          "upvote_count": "3"
        },
        {
          "id": 512319,
          "date": "Wed 29 Dec 2021 16:22",
          "username": "RVivek",
          "content": "Remember out of the 75 qustions 10 questions are dummy 0 score questions. I guess this is one of them",
          "upvote_count": "2"
        },
        {
          "id": 476968,
          "date": "Fri 12 Nov 2021 14:53",
          "username": "Tzone12",
          "content": "I will go for B AWS is more global than others, in fact it's the only public cloud services in Africa. It has an edge location in Kenya and South Africa is also considered a region",
          "upvote_count": "3"
        },
        {
          "id": 381728,
          "date": "Mon 01 Nov 2021 18:21",
          "username": "bamjive06",
          "content": "Not sure why people find this ridiculous...this' a straightforward business case and market advantage. I think its all over in SAA FAQs etc for a start",
          "upvote_count": "2"
        },
        {
          "id": 338639,
          "date": "Wed 27 Oct 2021 21:32",
          "username": "Chubb",
          "content": "stupid question",
          "upvote_count": "2"
        },
        {
          "id": 323083,
          "date": "Wed 27 Oct 2021 18:36",
          "username": "cldyDashL",
          "content": "C. <br>as per [http://awsmedia.s3.amazonaws.com/AWS_Overview_Whitepaper_120809.pdf]Based on what AWS is Experienced??<br>There are products released like yesterday. What is your benchmark to say that 1 day counts for experience.",
          "upvote_count": "71"
        },
        {
          "id": 383721,
          "date": "Mon 01 Nov 2021 23:54",
          "username": "DashL",
          "content": "Based on what AWS is Experienced??<br>There are products released like yesterday. What is your benchmark to say that 1 day counts for experience.",
          "upvote_count": "1"
        },
        {
          "id": 293730,
          "date": "Sun 24 Oct 2021 10:45",
          "username": "Madwynneta1ouser0001",
          "content": "B.  Remember go global in minutesIt is C, the whitepaper above has the exact options. Though not likely to see this type of question on the exam.well bae on this link http://awsmedia.s3.amazonaws.com/AWS_Overview_Whitepaper_120809.pdf<br>it is C",
          "upvote_count": "211"
        },
        {
          "id": 362296,
          "date": "Sat 30 Oct 2021 03:06",
          "username": "neta1o",
          "content": "It is C, the whitepaper above has the exact options. Though not likely to see this type of question on the exam.",
          "upvote_count": "1"
        },
        {
          "id": 589455,
          "date": "Thu 21 Apr 2022 16:26",
          "username": "user0001",
          "content": "well bae on this link http://awsmedia.s3.amazonaws.com/AWS_Overview_Whitepaper_120809.pdf<br>it is C",
          "upvote_count": "1"
        },
        {
          "id": 281554,
          "date": "Sat 23 Oct 2021 14:05",
          "username": "bnagaraja9099",
          "content": "I would have started with aws is flexible than data center and selected D",
          "upvote_count": "1"
        },
        {
          "id": 251425,
          "date": "Mon 18 Oct 2021 09:02",
          "username": "toainguyen",
          "content": "I would choose B",
          "upvote_count": "1"
        },
        {
          "id": 190127,
          "date": "Sun 17 Oct 2021 19:35",
          "username": "srknbngl",
          "content": "C is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 143359,
          "date": "Sun 17 Oct 2021 18:25",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 123112,
          "date": "Tue 05 Oct 2021 23:35",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 60168,
          "date": "Mon 04 Oct 2021 03:15",
          "username": "Reza215r",
          "content": "B 100%",
          "upvote_count": "3"
        },
        {
          "id": 49642,
          "date": "Thu 30 Sep 2021 10:29",
          "username": "BillyC",
          "content": "C for me",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The four EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000<br>IOPS (4,000 16KB reads or writes), for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned<br>IOPS volumes to the RAID.  Each volume is provisioned to 4,000 IOPs like the original four, for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%, but the total random IOPS measured at the instance level does not increase at all.<br>What is the problem and a valid solution?</p>",
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
              "choice": "<p>A. The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBSOptimized instance that provides larger throughput.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Small block sizes cause performance degradation, limiting the I/O throughput; configure the instance device driver and filesystem to use 64KB blocks to increase throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The standard EBS Instance root volume limits the total IOPS rate; change the instance root volume to also be a 500GB 4,000 Provisioned IOPS volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Larger storage volumes support higher Provisioned IOPS rates; increase the provisioned volume storage of each of the 6 EBS volumes to 1TB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. RAID 0 only scales linearly to about 4 devices; use RAID 0 with 4 EBS Provisioned IOPS volumes, but increase each Provisioned IOPS EBS volume to 6,000 IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 710486,
          "date": "Thu 03 Nov 2022 13:41",
          "username": "Pigi_102",
          "content": "Is there such thing as an \\\"EBSoptimized\\\" vs an \\\"EBS-Optimized\\\" ? I can't find any reference. They sound as the same thing to me.",
          "upvote_count": "1"
        },
        {
          "id": 705438,
          "date": "Thu 27 Oct 2022 12:21",
          "username": "sjpd10",
          "content": "A. <br>Use an EBSOptimized instance with higher throughput",
          "upvote_count": "1"
        },
        {
          "id": 655331,
          "date": "Wed 31 Aug 2022 19:38",
          "username": "davideccc",
          "content": "a correct",
          "upvote_count": "1"
        },
        {
          "id": 590867,
          "date": "Sun 24 Apr 2022 05:56",
          "username": "Murtazaarif",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 577933,
          "date": "Wed 30 Mar 2022 01:43",
          "username": "jj22222",
          "content": "A.  The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBSOptimized instance that provides larger throughput.",
          "upvote_count": "2"
        },
        {
          "id": 532307,
          "date": "Tue 25 Jan 2022 18:47",
          "username": "lulz111FAB1975",
          "content": "I think the key here is 16,000 IOPS was working fine, then when adding more disks (IOPS) it didnt go any higher. As noted at the link[1] GP2 and GP3 max out at 16000 IOPS per volume. To go beyond this (64000 IOPS)we need to use IO1/IO2/IO2 Block Express, which should be used with EBS optimised instances [2]. Therefore the instance is our bottleneck, and should be changed (Answer A).<br>[1]https://aws.amazon.com/ebs/volume-types/<br>[2]https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.htmlDouble checked and yes spot on",
          "upvote_count": "31"
        },
        {
          "id": 671307,
          "date": "Sat 17 Sep 2022 08:29",
          "username": "FAB1975",
          "content": "Double checked and yes spot on",
          "upvote_count": "1"
        },
        {
          "id": 512895,
          "date": "Thu 30 Dec 2021 01:56",
          "username": "RVivek",
          "content": "A is correct<br>small block size will not limit IOPS count, it will only limit the effective through put . Hence if there was no limit on the instance type the IOPS should have increased",
          "upvote_count": "1"
        },
        {
          "id": 405795,
          "date": "Thu 04 Nov 2021 23:11",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 397370,
          "date": "Sat 30 Oct 2021 13:23",
          "username": "backfringe",
          "content": "I go with A",
          "upvote_count": "1"
        },
        {
          "id": 358967,
          "date": "Sat 30 Oct 2021 00:44",
          "username": "JindalSaurabh",
          "content": "A is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 332254,
          "date": "Tue 26 Oct 2021 22:46",
          "username": "01037",
          "content": "A. <br><br>According to <br>https://aws.amazon.com/ebs/volume-types/<br>500GB gp2 can only provide 1500 IOPS, so it has to be io1 or io2, then ebs isn't the bottleneck.<br>So the bottleneck is the instance.",
          "upvote_count": "2"
        },
        {
          "id": 325111,
          "date": "Fri 15 Oct 2021 19:06",
          "username": "ZL2301037",
          "content": "It's weird since 500M\\\"b\\\"ps only provides 4000 IOPS with 16Ki\\\"B\\\" IO (for example, c4.large). How come it could reach up to 16000 IOPS? This question and the answers does not really make sense.I guess it's due to block size, maybe the block size is 4kb whick is default.<br>So that cloudwatch tells the IOPS is 16,000.",
          "upvote_count": "11"
        },
        {
          "id": 332250,
          "date": "Thu 21 Oct 2021 04:37",
          "username": "01037",
          "content": "I guess it's due to block size, maybe the block size is 4kb whick is default.<br>So that cloudwatch tells the IOPS is 16,000.",
          "upvote_count": "1"
        },
        {
          "id": 322406,
          "date": "Wed 13 Oct 2021 19:31",
          "username": "thai",
          "content": "AAAAAAAAAA",
          "upvote_count": "1"
        },
        {
          "id": 312897,
          "date": "Sun 19 Sep 2021 18:11",
          "username": "ExtHonitinzMinasWang",
          "content": "Should be A <br>EC2 Instance types have limit on max throughput and would require larger instance types to provide 24000 IOPSA, You are correctBut the total 500Mbps throughput indicated a maximum 32,000 IOPS. A does not make sence.",
          "upvote_count": "113"
        },
        {
          "id": 314400,
          "date": "Sun 26 Sep 2021 12:28",
          "username": "nitinz",
          "content": "A, You are correct",
          "upvote_count": "1"
        },
        {
          "id": 318939,
          "date": "Mon 04 Oct 2021 00:05",
          "username": "MinasWang",
          "content": "But the total 500Mbps throughput indicated a maximum 32,000 IOPS. A does not make sence.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is storing millions of sensitive transactions across thousands of 100-GB files that must be encrypted in transit and at rest. Analysts concurrently depend on subsets of files, which can consume up to 5 TB of space, to generate simulations that can be used to steer business decisions.<br>You are required to design an AWS solution that can cost effectively accommodate the long-term storage and in-flight subsets of data.<br>Which approach can satisfy these objectives?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Simple Storage Service (S3) with server-side encryption, and run simulations on subsets in ephemeral drives on Amazon EC2.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon S3 with server-side encryption, and run simulations on subsets in-memory on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use HDFS on Amazon EMR, and run simulations on subsets in ephemeral drives on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use HDFS on Amazon Elastic MapReduce (EMR), and run simulations on subsets in-memory on Amazon Elastic Compute Cloud (EC2).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Store the full data set in encrypted Amazon Elastic Block Store (EBS) volumes, and regularly capture snapshots that can be cloned to EC2 workstations.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 719202,
          "date": "Wed 16 Nov 2022 01:23",
          "username": "hobokabobo",
          "content": "That said HDFS cached on local EBS is the most reasonable approach of the given approaches: A.  HDFS vrs S3: small files and store only nectling EMR features. Store on disk because 5TB in ram would be huge.<br>A",
          "upvote_count": "1"
        },
        {
          "id": 668534,
          "date": "Wed 14 Sep 2022 03:23",
          "username": "LeoExam",
          "content": "why not B, the u-24tb1.metal can provide 24TB memory, and data handled in memory will be more secure than in EBS",
          "upvote_count": "2"
        },
        {
          "id": 655340,
          "date": "Wed 31 Aug 2022 19:46",
          "username": "davideccc",
          "content": "the only reasonable options are A and C (5TB in memory? no way). However C does not mention any long-term storage service, leaving A as the only reasonable answer (not the best approach though - which would be have the processing in EMR and the storage in S3. The EMR cluster can get subset data directly from S3 using EMRFS)",
          "upvote_count": "1"
        },
        {
          "id": 590695,
          "date": "Sat 23 Apr 2022 17:38",
          "username": "virtual",
          "content": "Because of \\\"long term storage\\\" specified. EMR is not a service designed for that. So S3 seems to be accurate.",
          "upvote_count": "3"
        },
        {
          "id": 577849,
          "date": "Tue 29 Mar 2022 22:09",
          "username": "jj22222",
          "content": "A.  Use Amazon Simple Storage Service (S3) with server-side encryption, and run simulations on subsets in ephemeral drives on Amazon EC2.",
          "upvote_count": "1"
        },
        {
          "id": 561288,
          "date": "Sat 05 Mar 2022 08:39",
          "username": "Alvindo",
          "content": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-file-systems.html<br>this link tells us hdfs isn't long-term which by itself cancels out c and d, leaving a as only practical answer",
          "upvote_count": "1"
        },
        {
          "id": 525724,
          "date": "Mon 17 Jan 2022 12:37",
          "username": "pititcu667",
          "content": "because of emr",
          "upvote_count": "1"
        },
        {
          "id": 512479,
          "date": "Wed 29 Dec 2021 18:16",
          "username": "Vendu",
          "content": "S3 would be cist effective compare to EMR",
          "upvote_count": "1"
        },
        {
          "id": 511651,
          "date": "Wed 29 Dec 2021 00:48",
          "username": "wahlbergusa",
          "content": "Asks for a cost effective solution. S3 is better than EMR.",
          "upvote_count": "1"
        },
        {
          "id": 501333,
          "date": "Tue 14 Dec 2021 13:07",
          "username": "dv1",
          "content": "EMR can do encryption at rest and in transit: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-data-encryption.html <br><br>Also, you can combine EMR with EC2 for running simulations:<br>https://aws.amazon.com/getting-started/hands-on/optimize-amazon-emr-clusters-with-ec2-spot/",
          "upvote_count": "1"
        },
        {
          "id": 442802,
          "date": "Sat 06 Nov 2021 05:45",
          "username": "Bhagirathi",
          "content": "can someone pls help explain - why / how it should be A?",
          "upvote_count": "1"
        },
        {
          "id": 405802,
          "date": "Tue 26 Oct 2021 20:41",
          "username": "Akhil254ciberado",
          "content": "A CorrectThe question does not explictly says the ephemeral storage is going to be encrypted in any way, so I would discard this option.",
          "upvote_count": "11"
        },
        {
          "id": 422023,
          "date": "Fri 05 Nov 2021 08:36",
          "username": "ciberado",
          "content": "The question does not explictly says the ephemeral storage is going to be encrypted in any way, so I would discard this option.",
          "upvote_count": "1"
        },
        {
          "id": 397970,
          "date": "Tue 26 Oct 2021 10:04",
          "username": "backfringe",
          "content": "I go with A as it says cost-effective",
          "upvote_count": "3"
        },
        {
          "id": 374978,
          "date": "Tue 26 Oct 2021 08:29",
          "username": "nodogoshi",
          "content": "Concurrency Analysis require EMR. not S3. C and D are candidate.",
          "upvote_count": "2"
        },
        {
          "id": 333311,
          "date": "Tue 19 Oct 2021 22:40",
          "username": "01037dli",
          "content": "What's wrong with B?Data size is 5TB",
          "upvote_count": "13"
        },
        {
          "id": 409277,
          "date": "Thu 04 Nov 2021 20:53",
          "username": "dli",
          "content": "Data size is 5TB",
          "upvote_count": "3"
        },
        {
          "id": 327971,
          "date": "Sun 26 Sep 2021 21:48",
          "username": "anandbabu",
          "content": "i will go with A",
          "upvote_count": "1"
        },
        {
          "id": 323221,
          "date": "Fri 24 Sep 2021 22:49",
          "username": "cldy",
          "content": "A. <br>encryption at rest - with S3 server side encryption.<br>encryption in transit - between S3 & EC2 encrypted with HTTPS; betweeb EC2 and instance store also encrypted.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your customer is willing to consolidate their log streams (access logs, application logs, security logs, etc.) in one single system. Once consolidated, the customer wants to analyze these logs in real time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours.<br>What is the best approach to meet your customer's requirements?</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: Records B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Send all the log events to Amazon SQS, setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Send all the log events to Amazon Kinesis, develop a client process to apply heuristics on the logs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon CloudTrail to receive custom logs, use EMR to apply heuristics the logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Setup an Auto Scaling group of EC2 syslogd servers, store the logs on S3, use EMR to apply heuristics on the logs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 520227,
          "date": "Sun 09 Jan 2022 14:47",
          "username": "JGOMEZ2886",
          "content": "Keyword \\\"Near-real-time\\\" answer is B",
          "upvote_count": "6"
        },
        {
          "id": 671310,
          "date": "Sat 17 Sep 2022 08:39",
          "username": "FAB1975",
          "content": "B; A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).<br>https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html<br><br>Near Real time",
          "upvote_count": "2"
        },
        {
          "id": 657919,
          "date": "Sat 03 Sep 2022 02:06",
          "username": "skywalker",
          "content": "B is my vote<br>Amazon Kinesis allow storage of up to 1 year and allow data to be consolidated.https://aws.amazon.com/blogs/big-data/retaining-data-streams-up-to-one-year-with-amazon-kinesis-data-streams/",
          "upvote_count": "1"
        },
        {
          "id": 651003,
          "date": "Wed 24 Aug 2022 00:20",
          "username": "rochester",
          "content": "Anser should be D. <br>A, B, C does not address log storage option to back after 12 hours.<br>Syslogd server can be used to capture incoming log data.",
          "upvote_count": "1"
        },
        {
          "id": 519455,
          "date": "Sat 08 Jan 2022 11:51",
          "username": "peddyua",
          "content": "C is for APIcalls,<br><br>ec2 doesn't make any sense<br>most effective is Kinesis B",
          "upvote_count": "1"
        },
        {
          "id": 515831,
          "date": "Mon 03 Jan 2022 15:26",
          "username": "GeniusMikeLiuNi_yot",
          "content": "why B??Kinesis is for Near real time streaming and data analysis.",
          "upvote_count": "13"
        },
        {
          "id": 527873,
          "date": "Wed 19 Jan 2022 21:02",
          "username": "Ni_yot",
          "content": "Kinesis is for Near real time streaming and data analysis.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A newspaper organization has an on-premises application which allows the public to search its back catalogue and retrieve individual newspaper pages via a website written in Java. They have scanned the old newspapers into JPEGs (approx 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software are now end of life and the organization wants to migrate its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability.<br>Which is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Use S3 with reduced redundancy lo store and serve the scanned files, install the commercial search application on EC2 Instances and configure with auto- scaling and an Elastic Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Model the environment using CloudFormation use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EBS volumes together to store the JPEGs and search index.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 with standard redundancy to store and serve the scanned files, use CloudSearch for query processing, and use Elastic Beanstalk to host the website across multiple availability zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a single-AZ RDS MySQL instance lo store the search index 33d the JPEG images use an EC2 instance to serve the website and translate user queries into SQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use a CloudFront download distribution to serve the JPEGs to the end users and Install the current commercial search product, along with a Java Container Tor the website on EC2 instances and use Route53 with DNS round-robin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37108,
          "date": "Wed 22 Sep 2021 11:38",
          "username": "amog",
          "content": "Answer is C<br>A.  Use S3 with RRS: RRS is not high availability<br>B.  An EC2 instance and stripe multiple standard EBS volumes together: Not HA too<br>D.  Use a single-AZ RDS MySQL : Not HA also RDS is not using for store image<br>E.  Use a CloudFront: Missing CloudFront origin. Also using an EC2 will not HA",
          "upvote_count": "16"
        },
        {
          "id": 657921,
          "date": "Sat 03 Sep 2022 02:08",
          "username": "skywalker",
          "content": "C is my vote",
          "upvote_count": "1"
        },
        {
          "id": 635774,
          "date": "Sun 24 Jul 2022 00:42",
          "username": "hilft",
          "content": "C but The question is outdated.<br>AWS now supports managed OCR with Amazon Textract. Jon Bonso's exam got a similar question to this but it has Amazon Textract option with it.",
          "upvote_count": "4"
        },
        {
          "id": 626397,
          "date": "Sun 03 Jul 2022 05:37",
          "username": "aandc",
          "content": "have to be C \\\"use CloudSearch\\\"",
          "upvote_count": "1"
        },
        {
          "id": 405803,
          "date": "Fri 05 Nov 2021 03:55",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 397974,
          "date": "Wed 03 Nov 2021 16:20",
          "username": "backfringe",
          "content": "C as it says cost effective",
          "upvote_count": "1"
        },
        {
          "id": 333316,
          "date": "Tue 02 Nov 2021 20:24",
          "username": "01037",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 323217,
          "date": "Sat 30 Oct 2021 15:54",
          "username": "cldy",
          "content": "C. <br>S3 for storage<br>CloudSearch for processing<br>Beanstalk for deployment",
          "upvote_count": "1"
        },
        {
          "id": 316284,
          "date": "Wed 27 Oct 2021 04:01",
          "username": "ppshein",
          "content": "Key point is \\\"CloudSearch for query processing\\\", the I would choose C",
          "upvote_count": "1"
        },
        {
          "id": 308923,
          "date": "Mon 18 Oct 2021 15:42",
          "username": "ppshein",
          "content": "C is the best for me.",
          "upvote_count": "1"
        },
        {
          "id": 285473,
          "date": "Sun 17 Oct 2021 08:37",
          "username": "wind",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 275888,
          "date": "Thu 14 Oct 2021 09:10",
          "username": "chMun",
          "content": "C.  As S3 to serve the static content. Cloud search is managed service to setup, manage and scale a search solution.Combination of 2 AWS service suffice the purpose.",
          "upvote_count": "1"
        },
        {
          "id": 202332,
          "date": "Tue 12 Oct 2021 07:22",
          "username": "saddly",
          "content": "A would work, however the question mentioned eol of the software. I go with C",
          "upvote_count": "1"
        },
        {
          "id": 190147,
          "date": "Sat 09 Oct 2021 13:17",
          "username": "srknbngl",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 143391,
          "date": "Fri 08 Oct 2021 01:09",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 123220,
          "date": "Thu 07 Oct 2021 11:52",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 93865,
          "date": "Wed 06 Oct 2021 15:54",
          "username": "Shawn1",
          "content": "Availability means multiple AZs. Answer C is the only solution with multiple AZs.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a complex web application that leverages Amazon CloudFront for global scalability and performance. Over time, users report that the web application is slowing down.<br>The company's operations team reports that the CloudFront cache hit ratio has been dropping steadily. The cache metrics report indicates that query strings on some URLs are inconsistently ordered and are specified sometimes in mixed-case letters and sometimes in lowercase letters.<br>Which set of actions should the solutions architect take to increase the cache hit ratio as quickly possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the CloudFront distribution to disable caching based on query string parameters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a reverse proxy after the load balancer to post process the emitted URLs in the application to force the URL strings to be lowercase.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFront distribution to specify case-insensitive query string processing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 156238,
          "date": "Sat 25 Sep 2021 00:10",
          "username": "KonnonLunchTime",
          "content": "A. Before CloudFront serves content from the cache it will trigger any Lambda function associated with the Viewer Request, in which we can normalize parameters.Agreed. A is correct",
          "upvote_count": "214"
        },
        {
          "id": 156677,
          "date": "Sat 25 Sep 2021 11:47",
          "username": "LunchTime",
          "content": "Agreed. A is correct",
          "upvote_count": "4"
        },
        {
          "id": 160067,
          "date": "Sun 26 Sep 2021 00:45",
          "username": "Nemer",
          "content": "A is correct.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-normalize-query-string-parameters",
          "upvote_count": "11"
        },
        {
          "id": 705715,
          "date": "Thu 27 Oct 2022 17:59",
          "username": "sedado77Cal88",
          "content": "Option A adds costs.<br>Option B is quicker.Option B will not cache content<br>The main problem presented in the question is that the cache hit has decreased so to solve it option A is the only choice",
          "upvote_count": "11"
        },
        {
          "id": 706699,
          "date": "Fri 28 Oct 2022 20:34",
          "username": "Cal88",
          "content": "Option B will not cache content<br>The main problem presented in the question is that the cache hit has decreased so to solve it option A is the only choice",
          "upvote_count": "1"
        },
        {
          "id": 653272,
          "date": "Mon 29 Aug 2022 06:04",
          "username": "nazhar",
          "content": "A is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 498459,
          "date": "Fri 10 Dec 2021 10:08",
          "username": "cldy",
          "content": "A.  Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.",
          "upvote_count": "1"
        },
        {
          "id": 489356,
          "date": "Sun 28 Nov 2021 19:47",
          "username": "realsaid",
          "content": "https://docs.amazonaws.cn/en_us/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-query-string-examples<br> A is the answer",
          "upvote_count": "1"
        },
        {
          "id": 488824,
          "date": "Sun 28 Nov 2021 05:08",
          "username": "acloudguru",
          "content": "even it is bad question, which does not say the string query impact the the cache, but still easy one hope I can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 438256,
          "date": "Sat 06 Nov 2021 09:18",
          "username": "jackyw",
          "content": "Bad question, not mention clearly about the query string is affecting the cached object or not, B is quickest but with the risk of wrong data renders",
          "upvote_count": "1"
        },
        {
          "id": 423230,
          "date": "Fri 05 Nov 2021 08:08",
          "username": "FERIN_01",
          "content": "B.  is the quickest solution as per AWS documentation",
          "upvote_count": "1"
        },
        {
          "id": 405804,
          "date": "Fri 05 Nov 2021 00:55",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 397977,
          "date": "Wed 03 Nov 2021 16:43",
          "username": "backfringe",
          "content": "I go with B as it says quickest",
          "upvote_count": "1"
        },
        {
          "id": 370529,
          "date": "Tue 02 Nov 2021 04:48",
          "username": "TonyGedli",
          "content": "A is correct.<br>B is incorrect, this will ignore any query parameters and will cache all requests which will cause CloudFront to return incorrect cached items to users.Cached answer won’t be incorrect. It’s just the ordering and combination creating multiple cached items of the same resources, and didn’t improve the performance.",
          "upvote_count": "21"
        },
        {
          "id": 409450,
          "date": "Fri 05 Nov 2021 07:04",
          "username": "dli",
          "content": "Cached answer won’t be incorrect. It’s just the ordering and combination creating multiple cached items of the same resources, and didn’t improve the performance.",
          "upvote_count": "1"
        },
        {
          "id": 333978,
          "date": "Sun 31 Oct 2021 15:23",
          "username": "01037",
          "content": "A for aure",
          "upvote_count": "1"
        },
        {
          "id": 323092,
          "date": "Sun 31 Oct 2021 13:53",
          "username": "cldy",
          "content": "B. <br>A would also work but B is Correct for \\\"as quickly as possible\\\" requirement.",
          "upvote_count": "2"
        },
        {
          "id": 290101,
          "date": "Wed 27 Oct 2021 23:10",
          "username": "lechuk",
          "content": "A.  <br>With B users will get the same cached result without taking the parameters into account.",
          "upvote_count": "1"
        },
        {
          "id": 269237,
          "date": "Sun 24 Oct 2021 09:31",
          "username": "kopper2019",
          "content": "I would also say B<br>https://docs.amazonaws.cn/en_us/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html",
          "upvote_count": "2"
        },
        {
          "id": 268677,
          "date": "Sat 23 Oct 2021 02:41",
          "username": "JustuCal88",
          "content": "I think B is the correct answer. As when you disable caching bases on query parameters, all requests are cached, regardless of the parameters. This is the quickest method. <br><br>Using lamdba can be done, but it's not the fastest way to change how cloudfront is caching.The content served depends on query parameters , so by disabling caching on them you are either eliminating the cache or caching the wrong content <br>I would personally go with A since its the best way to guarantee a high cache hit while serving the right content",
          "upvote_count": "11"
        },
        {
          "id": 706702,
          "date": "Fri 28 Oct 2022 20:37",
          "username": "Cal88",
          "content": "The content served depends on query parameters , so by disabling caching on them you are either eliminating the cache or caching the wrong content <br>I would personally go with A since its the best way to guarantee a high cache hit while serving the right content",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are looking to migrate your Development (Dev) and Test environments to AWS.You have decided to use separate AWS accounts to host each environment.<br>You plan to link each accounts bill to a Master AWS account using Consolidated Billing. To make sure you keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts.<br>Identify which option will allow you to achieve this goal.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A. Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create IAM users in the Master account. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master account access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 705720,
          "date": "Thu 27 Oct 2022 18:01",
          "username": "sedado77",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 498609,
          "date": "Fri 10 Dec 2021 13:24",
          "username": "cldy",
          "content": "C.  Create IAM users in the Master account. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master account access.",
          "upvote_count": "4"
        },
        {
          "id": 450602,
          "date": "Sun 31 Oct 2021 10:07",
          "username": "joe16",
          "content": "C is Correct.<br>Refer this link - https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "2"
        },
        {
          "id": 405805,
          "date": "Sat 23 Oct 2021 18:00",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 335477,
          "date": "Sun 17 Oct 2021 06:05",
          "username": "0103701037",
          "content": "Yes, VYes, C",
          "upvote_count": "11"
        },
        {
          "id": 335478,
          "date": "Tue 19 Oct 2021 05:16",
          "username": "01037",
          "content": "Yes, C",
          "upvote_count": "1"
        },
        {
          "id": 323211,
          "date": "Wed 13 Oct 2021 23:53",
          "username": "cldy",
          "content": "C.  is the answer.",
          "upvote_count": "1"
        },
        {
          "id": 312926,
          "date": "Wed 29 Sep 2021 22:21",
          "username": "ExtHo",
          "content": "C is Correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You're running an application on-premises due to its dependency on non-x86 hardware and want to use AWS for data backup. Your backup application is only able to write to POSIX-compatible block-based storage. You have 140TB of data and would like to mount it as a single folder on your file server. Users must be able to access portions of this data while the backups are taking place.<br>What backup solution would be most appropriate for this use case?</p>",
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
              "choice": "<p>A. Use Storage Gateway and configure it to use Gateway Cached volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure your backup software to use S3 as the target for your data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure your backup software to use Glacier as the target for your data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Storage Gateway and configure it to use Gateway Stored volumes.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 19098,
          "date": "Sun 26 Sep 2021 01:10",
          "username": "G3manoj101gerhardblJJu",
          "content": "The question states “access **portions **of this data while the backups are taking place” meaning that in theory the whole data set does not need to stored on premise and can be streamed back from S3 on demand as required. A cached volume still presents the files as if they were present on the file system. Answer is A. I agree with you. \\\"Users must be able to access portions of this data while the backups are taking place\\\" This is the condition which can be fulfilled by option A. I also support A, because there is a >backup application< that apparently copies data from somewhere else. If it copied to a Stored Volume, that would mean there are now 3 copies of that data (1 original, 1 in the Stored Volume, 1 replicated to S3). Since this is backup, I find Cached Volumes more likely. I would use a Stored Volume if I wanted a POSIX compliant volume to store my data locally and still have it backed up automatically to S3.I agree with you. <br>Refer this link ----<br>https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts<br>----------------------------------<br>You can find at cached volume....=> ''You can take incremental backups, called snapshots, of your storage volumes in Amazon S3.''",
          "upvote_count": "33221"
        },
        {
          "id": 116563,
          "date": "Wed 20 Oct 2021 11:17",
          "username": "manoj101",
          "content": "I agree with you. \\\"Users must be able to access portions of this data while the backups are taking place\\\" This is the condition which can be fulfilled by option A. ",
          "upvote_count": "2"
        },
        {
          "id": 646316,
          "date": "Sat 13 Aug 2022 14:06",
          "username": "gerhardbl",
          "content": "I also support A, because there is a >backup application< that apparently copies data from somewhere else. If it copied to a Stored Volume, that would mean there are now 3 copies of that data (1 original, 1 in the Stored Volume, 1 replicated to S3). Since this is backup, I find Cached Volumes more likely. I would use a Stored Volume if I wanted a POSIX compliant volume to store my data locally and still have it backed up automatically to S3.",
          "upvote_count": "2"
        },
        {
          "id": 198185,
          "date": "Sat 23 Oct 2021 00:40",
          "username": "JJu",
          "content": "I agree with you. <br>Refer this link ----<br>https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts<br>----------------------------------<br>You can find at cached volume....=> ''You can take incremental backups, called snapshots, of your storage volumes in Amazon S3.''",
          "upvote_count": "1"
        },
        {
          "id": 106971,
          "date": "Mon 18 Oct 2021 18:11",
          "username": "JAWS1600",
          "content": "D .<br>Stored volume keep all the data on site and can be mounted on site. All teh files are backed up to S3. It is a backup solution<br>In cached only \\\"portion of the data - cached\\\" is kept on site and rest of the data lies on S3<br>It is a storage \\\"extension\\\" solution.<br>If customer like to \\\"backup\\\" - It is likely that they want Stored volume, instead of cache",
          "upvote_count": "7"
        },
        {
          "id": 712179,
          "date": "Sun 06 Nov 2022 08:36",
          "username": "Christoph2",
          "content": "\\\"Backup should be mounted as single directory\\\". This requirements suggests to use single volume? But max size of single storage gareway volume is 32TB. ",
          "upvote_count": "2"
        },
        {
          "id": 667755,
          "date": "Tue 13 Sep 2022 09:43",
          "username": "siju13",
          "content": "D.  <br>In stored mode, each volume can be up to 16 TB for a maximum of 512 TB of data per gateway (32 volumes, each 16 TB in size)<br>While cache mode only 16 TB",
          "upvote_count": "1"
        },
        {
          "id": 657924,
          "date": "Sat 03 Sep 2022 02:15",
          "username": "skywalker",
          "content": "A. . coz Stored volumes make your entire data available locally on the gateway, while maintaining an asynchronous copy in the S3 bucket.This make entire copy avaliable for access.<br><br>D is just a backup solution and keeping just a portion of data on-prem. This is not suitable for this use case.",
          "upvote_count": "1"
        },
        {
          "id": 649963,
          "date": "Mon 22 Aug 2022 01:16",
          "username": "Cloudyheema",
          "content": "Answer is A: Volume stored does not improve datacenter capacity",
          "upvote_count": "1"
        },
        {
          "id": 540802,
          "date": "Sat 05 Feb 2022 07:14",
          "username": "kyo",
          "content": "D is a backup solution.",
          "upvote_count": "1"
        },
        {
          "id": 533925,
          "date": "Thu 27 Jan 2022 17:29",
          "username": "CloudChef",
          "content": "Storage gateway, stored.",
          "upvote_count": "3"
        },
        {
          "id": 531897,
          "date": "Tue 25 Jan 2022 07:08",
          "username": "cannottellname",
          "content": "Answer D.  S3 is not POSIX compliant storage service. While, Application can only write to it and hence, it needs to be on-premises using non-x86. Store Volume Gateway provides that - where primary data is on-premise while whole backup is on s3.",
          "upvote_count": "1"
        },
        {
          "id": 527858,
          "date": "Wed 19 Jan 2022 20:41",
          "username": "Ni_yot",
          "content": "I will choose A.  then it could be D. Rubbish question really.users must be able to access portions of the data. With cached data, yes you will be able to access a portion i.e frequently access data.So that works.",
          "upvote_count": "1"
        },
        {
          "id": 523557,
          "date": "Fri 14 Jan 2022 14:55",
          "username": "pititcu667",
          "content": "D is correctbecause 1) you have all the data onsite 2) async replication to s3 3) backup software can always access it. 4) better performance for random io in case the data is stored on a relational db",
          "upvote_count": "2"
        },
        {
          "id": 519793,
          "date": "Sat 08 Jan 2022 23:11",
          "username": "CloudChef",
          "content": "D <br>Volume gateway provides an iSCSI target, which enables you to create volumes and mount them as iSCSI devices from your on-premises application servers.<br>The volume gateway runs in either a cached or stored mode.<br>In the cached mode, your primary data is written to S3, while you retain some portion of it locally in a cache for frequently accessed data.<br>In the stored mode, your primary data is stored locally and your entire dataset is available for low-latency access while asynchronously backed up to AWS.<br>In either mode, you can take point-in-time snapshots of your volumes and store them in Amazon S3, enabling you to make space-efficient versioned copies of your volumes for data protection and various data reuse needs.",
          "upvote_count": "2"
        },
        {
          "id": 514433,
          "date": "Sat 01 Jan 2022 09:40",
          "username": "cldy",
          "content": "A:<br>You can take incremental backups, called snapshots, of your storage volumes in Amazon S3. These point-in-time snapshots are also stored in Amazon S3 as Amazon EBS snapshots.<br>https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts",
          "upvote_count": "1"
        },
        {
          "id": 491164,
          "date": "Wed 01 Dec 2021 03:07",
          "username": "acloudguru",
          "content": "between A and D, I support A as the requirement is to access the data so we need cached copy to allow users to access the data ,so A is better than D",
          "upvote_count": "2"
        },
        {
          "id": 405806,
          "date": "Sun 07 Nov 2021 02:33",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "2"
        },
        {
          "id": 397987,
          "date": "Sat 06 Nov 2021 02:32",
          "username": "backfringe",
          "content": "go with D<br>\\\"Your backup application is only able to write to POSIX-compatible block-based storage\\\"",
          "upvote_count": "3"
        },
        {
          "id": 329238,
          "date": "Sat 06 Nov 2021 02:00",
          "username": "hihismkskks",
          "content": "Answer is A.  Because of \\\"Users must be able to access portions of this data while the backups are taking place.\\\"",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To serve Web traffic for a popular product your chief financial officer and IT director have purchased 10 m1.large heavy utilization Reserved Instances (RIs), evenly spread across two availability zones; Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity. As a result, your company purchases two C3.2xlarge medium utilization Ris. You register the two c3.2xlarge instances with your ELB and quickly find that the m1.large instances are at 100% of capacity and the c3.2xlarge instances have significant capacity that's unused.<br>Which option is the most cost effective and uses EC2 capacity most effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. Configure Autoscaling group and Launch Configuration with ELB to add up to 10 more on-demand m1.large instances when triggered by Cloudwatch. Shut off c3.2xlarge instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure ELB with two c3.2xlarge instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances. Shut off m1.large instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Route traffic to EC2 m1.large and c3.2xlarge instances directly using Route 53 latency based routing and health checks. Shut off ELB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37121,
          "date": "Wed 22 Sep 2021 23:36",
          "username": "amog",
          "content": "Answer is D<br>Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin",
          "upvote_count": "15"
        },
        {
          "id": 627662,
          "date": "Wed 06 Jul 2022 03:20",
          "username": "TechX",
          "content": "It's D",
          "upvote_count": "1"
        },
        {
          "id": 405807,
          "date": "Sat 06 Nov 2021 11:08",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "1"
        },
        {
          "id": 397990,
          "date": "Fri 05 Nov 2021 03:20",
          "username": "backfringe",
          "content": "I go with D as there are RIs",
          "upvote_count": "1"
        },
        {
          "id": 335485,
          "date": "Wed 03 Nov 2021 16:56",
          "username": "01037",
          "content": "D is correct",
          "upvote_count": "2"
        },
        {
          "id": 323198,
          "date": "Mon 01 Nov 2021 21:35",
          "username": "cldy",
          "content": "D. <br>although not very cost effective with 2 ELBs but D solves the requirement with weighted R53 routing.",
          "upvote_count": "2"
        },
        {
          "id": 231982,
          "date": "Mon 01 Nov 2021 17:12",
          "username": "ChauPhan",
          "content": "A, B if you have already purchase Reversed Instance (RIs) so if you shutdown either of them, you still lose the cost.<br>C.  It does not work well, as Route53 can't route to EC2 unless it has EIP because its IP will change when rebooted. You will need EIPs for all EC2s. So it is impossible solution.<br>D make sense, the traffic for each instance was loaded-balance however the improper type between C2 and M1 cause the CPU on M1 meanwhile no load on C2. You need another ELB, one for C2 group and one for M1 group; then route the traffic 80% to C1 and 20% to C1 for example.",
          "upvote_count": "2"
        },
        {
          "id": 203850,
          "date": "Mon 25 Oct 2021 18:22",
          "username": "kneelcpal012cpal012newme",
          "content": "I think C is the correct answer. The question asks for the \\\"most cost effective\\\" option. Option C removes the ELB which is cheaper than option D which adds another ELB.  Additionally, Option C utilizes Latency Based routing which ensures none of the four instances are overloaded.R53 doesnt work that way, it is not a intra-regional load balancer. The closest it can get to inter regional load balancing is a multi-value response and then letting the client decide which IP to usePlus as R53 is regional, latency records are also regional. All these servers are in the same region and any such latency record would apply to them all equallyThank you. Latency-based routing only works If the application is hosted in multiple AWS Regions<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency",
          "upvote_count": "1121"
        },
        {
          "id": 207332,
          "date": "Wed 27 Oct 2021 10:49",
          "username": "cpal012",
          "content": "R53 doesnt work that way, it is not a intra-regional load balancer. The closest it can get to inter regional load balancing is a multi-value response and then letting the client decide which IP to use",
          "upvote_count": "1"
        },
        {
          "id": 207335,
          "date": "Sat 30 Oct 2021 01:59",
          "username": "cpal012newme",
          "content": "Plus as R53 is regional, latency records are also regional. All these servers are in the same region and any such latency record would apply to them all equallyThank you. Latency-based routing only works If the application is hosted in multiple AWS Regions<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency",
          "upvote_count": "21"
        },
        {
          "id": 209205,
          "date": "Mon 01 Nov 2021 08:55",
          "username": "newme",
          "content": "Thank you. Latency-based routing only works If the application is hosted in multiple AWS Regions<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency",
          "upvote_count": "1"
        },
        {
          "id": 190154,
          "date": "Mon 18 Oct 2021 12:49",
          "username": "srknbngl",
          "content": "Answer is D",
          "upvote_count": "2"
        },
        {
          "id": 143401,
          "date": "Sat 16 Oct 2021 13:58",
          "username": "fullaws",
          "content": "D is correct",
          "upvote_count": "2"
        },
        {
          "id": 123299,
          "date": "Thu 14 Oct 2021 18:55",
          "username": "noisonnoiton",
          "content": "go with D",
          "upvote_count": "4"
        },
        {
          "id": 66670,
          "date": "Sun 10 Oct 2021 18:02",
          "username": "drneondrneon",
          "content": "Is it possible to guarantee effective use of EC2 capacity with route53 weighted routing?<br>Answer is BBut you have to use many RIs - m1.large, not turn off. <br>so answer is D. ",
          "upvote_count": "23"
        },
        {
          "id": 66675,
          "date": "Mon 11 Oct 2021 05:38",
          "username": "drneon",
          "content": "But you have to use many RIs - m1.large, not turn off. <br>so answer is D. ",
          "upvote_count": "3"
        },
        {
          "id": 66012,
          "date": "Thu 07 Oct 2021 06:29",
          "username": "Smartpleasespammelater",
          "content": "A & B are wrong - not utilizing Reserved Instances (waste). C will have same current problem. D is not that quite cost-effective but it resolves the problem(currently, 3/2020, you can do weighting at your ELB itself).Yep, D is correct (Note that the weighted routing for ALB's was added in Nov 2019 https://aws.amazon.com/blogs/aws/new-application-load-balancer-simplifies-deployment-with-weighted-target-groups/ )",
          "upvote_count": "42"
        },
        {
          "id": 126411,
          "date": "Fri 15 Oct 2021 10:45",
          "username": "pleasespammelater",
          "content": "Yep, D is correct (Note that the weighted routing for ALB's was added in Nov 2019 https://aws.amazon.com/blogs/aws/new-application-load-balancer-simplifies-deployment-with-weighted-target-groups/ )",
          "upvote_count": "2"
        },
        {
          "id": 49654,
          "date": "Mon 04 Oct 2021 21:35",
          "username": "BillyCmandrakenet",
          "content": "D is Correct!D is not cost effective, lack autoscaling",
          "upvote_count": "31"
        },
        {
          "id": 60857,
          "date": "Tue 05 Oct 2021 17:09",
          "username": "mandrakenet",
          "content": "D is not cost effective, lack autoscaling",
          "upvote_count": "1"
        },
        {
          "id": 42462,
          "date": "Thu 30 Sep 2021 12:37",
          "username": "dumma",
          "content": "D Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin http://jayendrapatil.com/tag/connection-draining/",
          "upvote_count": "4"
        },
        {
          "id": 39023,
          "date": "Thu 23 Sep 2021 20:41",
          "username": "ReggieR2cpal012",
          "content": "Not A: The 10 M1s are already at 100%. Doesnt make sense to add 10 more. Its better to use the C3<br>Not C: this doesn't guarantee effective use of EC2 capacity<br>Not D: Inefficient to have 2 ELBs<br><br>B is the better answer.The instances are reserved. You can shut them off but you still have to pay for them.",
          "upvote_count": "21"
        },
        {
          "id": 207331,
          "date": "Mon 25 Oct 2021 20:02",
          "username": "cpal012",
          "content": "The instances are reserved. You can shut them off but you still have to pay for them.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name.example.com. You decide to use<br>Route53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. Dunning a DR test you notice that when you disable all web servers in one of the regions Route53 does not automatically direct all users to the other region.<br>What could be happening? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Latency resource record sets cannot be used in combination with weighted resource record sets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You did not setup an HTTP health check to one or more of the weighted resource record sets associated with me disabled web servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. One of the two working web servers in the other region did not pass its HTTP health check.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. You did not set \"Evaluate Target Health\" to \"Yes\" on the latency alias resource record set associated with example com in the region where you disabled the servers.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 316120,
          "date": "Sun 19 Sep 2021 19:28",
          "username": "Fazzy",
          "content": "Indeed BE are correct",
          "upvote_count": "5"
        },
        {
          "id": 705728,
          "date": "Thu 27 Oct 2022 18:21",
          "username": "sedado77",
          "content": "I'd go with BE.  it is correct in the explanation",
          "upvote_count": "1"
        },
        {
          "id": 495691,
          "date": "Tue 07 Dec 2021 07:54",
          "username": "cldy",
          "content": "B.  You did not setup an HTTP health check to one or more of the weighted resource record sets associated with me disabled web servers.<br>E.  You did not set \\\"Evaluate Target Health\\\" to \\\"Yes\\\" on the latency alias resource record set associated with example com in the region where you disabled the servers.",
          "upvote_count": "3"
        },
        {
          "id": 491279,
          "date": "Wed 01 Dec 2021 05:57",
          "username": "backfringe",
          "content": "I'd go with B and E",
          "upvote_count": "1"
        },
        {
          "id": 405810,
          "date": "Sat 06 Nov 2021 14:45",
          "username": "Akhil254",
          "content": "BE Correct",
          "upvote_count": "2"
        },
        {
          "id": 397993,
          "date": "Sat 09 Oct 2021 13:47",
          "username": "backfringe",
          "content": "go with B E",
          "upvote_count": "1"
        },
        {
          "id": 340331,
          "date": "Thu 07 Oct 2021 09:18",
          "username": "01037",
          "content": "B & E are correct",
          "upvote_count": "3"
        },
        {
          "id": 316305,
          "date": "Sun 03 Oct 2021 15:22",
          "username": "ppshein",
          "content": "I would chooseD,E",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months you expect 10 orders per day on your first day. 1000 orders per day after 6 months and 10,000 orders after 12 months.<br>Orders coming in are checked for consistency men dispatched to your manufacturing plant for production quality control packaging shipment and payment processing If the product does not meet the quality standards at any stage of the process employees may force the process to repeat a step Customers are notified via email about order status and any critical issues with their orders such as payment failure.<br>Your base architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders.<br>How can you implement the order fulfillment process while making sure that the emails are delivered reliably?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Add a business process management application to your Elastic Beanstalk app servers and re-use the ROS database for tracking order status use one of the Elastic Beanstalk instances to send emails to customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 Use the decider instance to send emails to customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 use SES to send emails to customers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an SQS queue to manage all process tasks Use an Auto Scaling group of EC2 Instances that poll the tasks and execute them. Use SES to send emails to customers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37293,
          "date": "Tue 21 Sep 2021 11:28",
          "username": "AnNguyen",
          "content": "Answer is C",
          "upvote_count": "11"
        },
        {
          "id": 704299,
          "date": "Wed 26 Oct 2022 03:14",
          "username": "Neftali",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 496637,
          "date": "Wed 08 Dec 2021 09:25",
          "username": "cldy",
          "content": "C.  Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 use SES to send emails to customers.",
          "upvote_count": "1"
        },
        {
          "id": 405811,
          "date": "Fri 29 Oct 2021 17:35",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 340819,
          "date": "Fri 29 Oct 2021 00:28",
          "username": "01037",
          "content": "Vote for C",
          "upvote_count": "1"
        },
        {
          "id": 323936,
          "date": "Wed 27 Oct 2021 11:45",
          "username": "cldy",
          "content": "C.  Correct.",
          "upvote_count": "1"
        },
        {
          "id": 320305,
          "date": "Tue 19 Oct 2021 13:06",
          "username": "Dgix",
          "content": "Jeez. NOBODY uses SWF any more.",
          "upvote_count": "1"
        },
        {
          "id": 190197,
          "date": "Fri 15 Oct 2021 02:09",
          "username": "srknbngl",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 143406,
          "date": "Tue 12 Oct 2021 20:50",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 127858,
          "date": "Mon 11 Oct 2021 22:19",
          "username": "sirmie_slim",
          "content": "C for sure .",
          "upvote_count": "1"
        },
        {
          "id": 123319,
          "date": "Sun 10 Oct 2021 01:27",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 118996,
          "date": "Sat 09 Oct 2021 20:54",
          "username": "Yogee",
          "content": "C is correct",
          "upvote_count": "2"
        },
        {
          "id": 116894,
          "date": "Wed 06 Oct 2021 15:07",
          "username": "manoj101",
          "content": "SWF is required here for distributed components that makes it easy to compare between B & C. ",
          "upvote_count": "2"
        },
        {
          "id": 49656,
          "date": "Fri 01 Oct 2021 15:20",
          "username": "BillyC",
          "content": "C is Correct!",
          "upvote_count": "2"
        },
        {
          "id": 37294,
          "date": "Thu 23 Sep 2021 02:24",
          "username": "AnNguyen",
          "content": "SQS only keep message in 14 days<br>Send email by instance is not reliably",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically.<br>What AWS services should be used meet these requirements?</p>",
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
              "choice": "<p>A. Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaimg group monitored with CloudWatch and RDS with read replicas.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and RDS with read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and multi-AZ RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch and multi-AZ RDS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636796,
          "date": "Mon 25 Jul 2022 17:42",
          "username": "hilft",
          "content": "A.  read only. read replica.",
          "upvote_count": "1"
        },
        {
          "id": 626427,
          "date": "Sun 03 Jul 2022 07:33",
          "username": "aandc",
          "content": "high availability is not the requirement",
          "upvote_count": "1"
        },
        {
          "id": 586291,
          "date": "Fri 15 Apr 2022 12:53",
          "username": "tartarus23",
          "content": "A.  RDS with read replicas offer better performance so handle unexpected traffic not multi-AZ RDS which only focuses on high availability.",
          "upvote_count": "4"
        },
        {
          "id": 558302,
          "date": "Mon 28 Feb 2022 21:01",
          "username": "Ni_yot",
          "content": "A for me. ChoseA because it also has memcache as well as read replicas.Both will defo speed up throughput and allow it to meet unexpected traffic demands.",
          "upvote_count": "2"
        },
        {
          "id": 540200,
          "date": "Fri 04 Feb 2022 05:57",
          "username": "HellGate",
          "content": "My answer is A. <br><br>The only difference between A and D is “RDS with read replicas” and “multi-AZ RDS”.Question only focus on high traffic, no HA requirement for multi-AZ.",
          "upvote_count": "2"
        },
        {
          "id": 446596,
          "date": "Wed 03 Nov 2021 22:54",
          "username": "lyxasdAkaAka4",
          "content": "why not B?what's the difference between A and B?The difference here is that A is stateless and B is stateful. <br><br>Here I quote: \\\"A stateless application is one that needs no knowledge of previous interactions and stores no session information.\\\" (Refer to https://docs.aws.amazon.com/whitepapers/latest/best-practices-wordpress/stateless-web-tier.html) <br><br>As the web app is read-only, it is stateless. Hence A. <br><br>p.s. Reading AWS documentation does help. As you can see, others are always taking it as reference for their answers : )",
          "upvote_count": "12"
        },
        {
          "id": 504973,
          "date": "Sun 19 Dec 2021 16:55",
          "username": "AkaAka4",
          "content": "The difference here is that A is stateless and B is stateful. <br><br>Here I quote: \\\"A stateless application is one that needs no knowledge of previous interactions and stores no session information.\\\" (Refer to https://docs.aws.amazon.com/whitepapers/latest/best-practices-wordpress/stateless-web-tier.html) <br><br>As the web app is read-only, it is stateless. Hence A. <br><br>p.s. Reading AWS documentation does help. As you can see, others are always taking it as reference for their answers : )",
          "upvote_count": "2"
        },
        {
          "id": 423417,
          "date": "Fri 29 Oct 2021 19:31",
          "username": "FERIN_01",
          "content": "D.  alreadycache there to handle reads, which will forward to only primary RDS. Multi AZ makes more sense",
          "upvote_count": "1"
        },
        {
          "id": 405813,
          "date": "Thu 28 Oct 2021 21:25",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "3"
        },
        {
          "id": 398001,
          "date": "Thu 28 Oct 2021 17:52",
          "username": "backfringe",
          "content": "go with A",
          "upvote_count": "3"
        },
        {
          "id": 340832,
          "date": "Mon 25 Oct 2021 11:58",
          "username": "01037",
          "content": "Multi AZ is just backup, doesn't help improve throughput.<br>So A",
          "upvote_count": "3"
        },
        {
          "id": 323926,
          "date": "Sun 26 Sep 2021 11:11",
          "username": "cldy",
          "content": "A. <br>Stateless + AutoScaling + CloudWatch + Read-Replicas",
          "upvote_count": "4"
        },
        {
          "id": 309575,
          "date": "Mon 20 Sep 2021 22:34",
          "username": "ppsheinnitinzppshein",
          "content": "my answer is D. its A.  you need read replica to speed up.... d is for H/AYap, it's correct. Answer should be A",
          "upvote_count": "193"
        },
        {
          "id": 314440,
          "date": "Tue 21 Sep 2021 13:25",
          "username": "nitinzppshein",
          "content": "its A.  you need read replica to speed up.... d is for H/AYap, it's correct. Answer should be A",
          "upvote_count": "93"
        },
        {
          "id": 316362,
          "date": "Sat 25 Sep 2021 11:29",
          "username": "ppshein",
          "content": "Yap, it's correct. Answer should be A",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a photo-sharing mobile app. The application will store all pictures in a single Amazon S3 bucket.<br>Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3.<br>You want to configure security to handle potentially millions of users in the most secure manner possible.<br>What should your server-side application do when a new user registers on the photo-sharing mobile application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: E</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user. Assign appropriate permissions to the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a set of long-term credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app and use them to access Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Record the user's information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app, create temporary credentials using the AWS Security Token Service \"AssumeRole\" function. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Record the user's information in Amazon DynamoDB.  When the user uses their mobile app, create temporary credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 17332,
          "date": "Mon 20 Sep 2021 15:20",
          "username": "rasagulla",
          "content": "Is it 'D' because it mentions about 'AssumeRole' function with STS Service and not 'E' because tho'it also uses STS service it does not explicitly mention the 'AssumeRole' function.Except for that , i feel even DynamoDB can the scenario better.",
          "upvote_count": "15"
        },
        {
          "id": 202378,
          "date": "Mon 11 Oct 2021 07:47",
          "username": "saddlyCal88Chuky64",
          "content": "I would go with DynamoDB.  I don't think \\\"AssumeRole\\\" statement is important as for STS this is almost the only function.Also it say use STS to generate the credential.<br>My point is <br>RDS vs DynamoDB<br>For this App, it's read heavy. From scaling out perspective DynamoDB is better.Yes DynamoDB would be better , but their is no mention of the role in that answer.<br>You can't use STS to assume a \\\"role\\\" without actually creating that role so I would go with answer DI agree, best option is DynamoDB for millons of users.",
          "upvote_count": "1213"
        },
        {
          "id": 706710,
          "date": "Fri 28 Oct 2022 20:51",
          "username": "Cal88",
          "content": "Yes DynamoDB would be better , but their is no mention of the role in that answer.<br>You can't use STS to assume a \\\"role\\\" without actually creating that role so I would go with answer D",
          "upvote_count": "1"
        },
        {
          "id": 614555,
          "date": "Fri 10 Jun 2022 15:06",
          "username": "Chuky64",
          "content": "I agree, best option is DynamoDB for millons of users.",
          "upvote_count": "3"
        },
        {
          "id": 696031,
          "date": "Sun 16 Oct 2022 08:15",
          "username": "jamat",
          "content": "I go for D<br>IAM role + AssumeRole make perfect sense here<br>Only 1 IAM role could used for all users with a variable<br>https://youtu.be/-1gkwLBfBCo<br>Finally RDS is perfectly fine with millions of records, isn’t it..?",
          "upvote_count": "1"
        },
        {
          "id": 626763,
          "date": "Mon 04 Jul 2022 03:21",
          "username": "aandc",
          "content": "vote for E",
          "upvote_count": "2"
        },
        {
          "id": 615245,
          "date": "Sun 12 Jun 2022 11:38",
          "username": "BingTR",
          "content": "I believe E is the answer, and D could not be correct - not because of RDS/DynamoDB, but the mentioning of \\\"AssumeRole\\\". With \\\"AssumeRole\\\", the caller must be an AWS identity. However the mobile users don't have AWS identity before assuming role.",
          "upvote_count": "2"
        },
        {
          "id": 605063,
          "date": "Sun 22 May 2022 03:02",
          "username": "jyrajan69",
          "content": "First you have millions of users which rules D out, SQL not designed for this, for me easy answer, it must be E",
          "upvote_count": "1"
        },
        {
          "id": 595553,
          "date": "Sun 01 May 2022 12:25",
          "username": "pankajrawat",
          "content": "E is better, I'll not create user in IAM, instead use AssumeRole",
          "upvote_count": "2"
        },
        {
          "id": 510369,
          "date": "Mon 27 Dec 2021 15:19",
          "username": "AwsSuperTrooper",
          "content": "It believe it's answer E for two reasons:<br>- dynamoDB is more suitable than RDS for scaling reasons.<br>- answer D seems to indicate a role per user which is not scalable.",
          "upvote_count": "2"
        },
        {
          "id": 495610,
          "date": "Tue 07 Dec 2021 06:04",
          "username": "cldy",
          "content": "E.  Record the user's information in Amazon DynamoDB.  When the user uses their mobile app, create temporary credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.",
          "upvote_count": "1"
        },
        {
          "id": 488883,
          "date": "Sun 28 Nov 2021 07:26",
          "username": "backfringebackfringe",
          "content": "I'd go with Dtype I meant EEEE",
          "upvote_count": "11"
        },
        {
          "id": 488885,
          "date": "Sun 28 Nov 2021 07:26",
          "username": "backfringe",
          "content": "type I meant EEEE",
          "upvote_count": "1"
        },
        {
          "id": 482118,
          "date": "Fri 19 Nov 2021 23:00",
          "username": "sashenkaCal88",
          "content": "EEE - Why would one millions of these IAM roles? \\\"create a role in IAM with appropriate permissions\\\". That is exactly what this solution states to do for EACH new user.You don't create millions of roles , you create one role and assume it using STS <br>That's how STS works , without the role you can't just use STS to grant permission.<br>Answer E is missing the part that makes STS work which creating that role that will give your users permission to access S3<br>So the correct answer is D",
          "upvote_count": "11"
        },
        {
          "id": 706711,
          "date": "Fri 28 Oct 2022 20:57",
          "username": "Cal88",
          "content": "You don't create millions of roles , you create one role and assume it using STS <br>That's how STS works , without the role you can't just use STS to grant permission.<br>Answer E is missing the part that makes STS work which creating that role that will give your users permission to access S3<br>So the correct answer is D",
          "upvote_count": "1"
        },
        {
          "id": 405823,
          "date": "Sun 07 Nov 2021 05:52",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "1"
        },
        {
          "id": 398007,
          "date": "Fri 05 Nov 2021 17:25",
          "username": "backfringe",
          "content": "I go with E",
          "upvote_count": "1"
        },
        {
          "id": 384450,
          "date": "Wed 03 Nov 2021 10:16",
          "username": "DashL",
          "content": "D<br>For all agreeing with answer E, if you look at https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html and search for \\\"SourceIdentity\\\".<br>SourceIdentity: The source identity specified by the principal that is calling the AssumeRole operation.<br>Required: No<br>So, for AssumeRole calls, you don't have to have a SourceIdentity i.e. it doesn't have to be an existing user.<br>So, the most reasonable answer is D. <br>If someone has an argument contradicting this, please help me!!",
          "upvote_count": "4"
        },
        {
          "id": 370706,
          "date": "Mon 01 Nov 2021 05:09",
          "username": "01037",
          "content": "E. <br><br>How could D be correct?<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html<br>\\\"The AssumeRole API operation is useful for allowing existing IAM users to access AWS resources that they don't already have access to. For example, the user might need access to resources in another AWS account\\\"",
          "upvote_count": "3"
        },
        {
          "id": 368618,
          "date": "Mon 01 Nov 2021 01:55",
          "username": "ptnlzy",
          "content": "D is probably correct if 'AssumeRole' weren't there: the role would probably be assumed with 'AssumeRoleWithWebIdentity' from mobile since you can't directly log into an AWS account from a mobile app.",
          "upvote_count": "2"
        },
        {
          "id": 351711,
          "date": "Sat 30 Oct 2021 16:24",
          "username": "pt8",
          "content": "Only D mentioned creating a role, which is critical in this case before we can leverage STS. The solution has to be feasible before putting cost effectiveness into considerations.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are tasked with moving a legacy application from a virtual machine running inside your datacenter to an Amazon VPC.  Unfortunately, this app requires access to a number of on-premises services and no one who configured the app still works for your company. Even worse there's no documentation for it.<br>What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. An AWS Direct Connect link between the VPC and the network housing the internal services.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. An Internet Gateway to allow a VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. An Elastic IP address on the VPC instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An IP address space that does not conflict with the one on-premises<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Entries in Amazon Route 53 that allow the Instance to resolve its dependencies' IP addresses<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. A VM Import of the current virtual machine<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 17392,
          "date": "Wed 22 Sep 2021 06:18",
          "username": "Warrenntan9sashenkaEricZhangSmartkakashi",
          "content": "ADE The question asks what will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured. Not how to migrate it. To properly resolve internal dependency address you need Route53 https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-getting-started.htmlADF.  The question is \\\"MOVING a legacy application from a virtual machine running inside your datacenter to an Amazon VPC,\\\" hence (E) VM Import is the necessary step to do. Besides, (D) Route 53 Private DNS will only work for DNS names ratherthan IP addresses.AD[E]. So if the application is referencing internal/on-prem domains one would need to forward those to the on-prem DNS via R53. The facts we're given is there is \\\"no documentation\\\" about the app. For example the app could be trying to connect to an on-prem database or file server via a FQDN which is a best practice rather than reference IP's. So in this scenario how would you suggest it function if one does not leverage R53? Take another look at what we are being asked for... it is communication dependencies and not migration methodology.You need to configure Resolver that forward the DNS query to on-prem DNS servers. I think E means adding A/CNAME/Alias records into Route 53.Agreed. Option F is simply not relevant to the question asked. Option E is more appropriate. In this case, we setup a R53 Private Hosted Zone. More appropriately, also setup R53 Resolver. Answer is ADE. Although I agree that Route53 could be used E does not clearly explain what needs to be done. D is important because is a VM with no documentation so you might not be able to recreate it from scratch and the best way is to import the VM into AWS.",
          "upvote_count": "18111421"
        },
        {
          "id": 28064,
          "date": "Tue 28 Sep 2021 09:46",
          "username": "tan9sashenka",
          "content": "ADF.  The question is \\\"MOVING a legacy application from a virtual machine running inside your datacenter to an Amazon VPC,\\\" hence (E) VM Import is the necessary step to do. Besides, (D) Route 53 Private DNS will only work for DNS names ratherthan IP addresses.AD[E]. So if the application is referencing internal/on-prem domains one would need to forward those to the on-prem DNS via R53. The facts we're given is there is \\\"no documentation\\\" about the app. For example the app could be trying to connect to an on-prem database or file server via a FQDN which is a best practice rather than reference IP's. So in this scenario how would you suggest it function if one does not leverage R53? Take another look at what we are being asked for... it is communication dependencies and not migration methodology.",
          "upvote_count": "111"
        },
        {
          "id": 479411,
          "date": "Tue 16 Nov 2021 14:50",
          "username": "sashenka",
          "content": "AD[E]. So if the application is referencing internal/on-prem domains one would need to forward those to the on-prem DNS via R53. The facts we're given is there is \\\"no documentation\\\" about the app. For example the app could be trying to connect to an on-prem database or file server via a FQDN which is a best practice rather than reference IP's. So in this scenario how would you suggest it function if one does not leverage R53? Take another look at what we are being asked for... it is communication dependencies and not migration methodology.",
          "upvote_count": "1"
        },
        {
          "id": 40550,
          "date": "Sun 03 Oct 2021 18:59",
          "username": "EricZhangSmartkakashi",
          "content": "You need to configure Resolver that forward the DNS query to on-prem DNS servers. I think E means adding A/CNAME/Alias records into Route 53.Agreed. Option F is simply not relevant to the question asked. Option E is more appropriate. In this case, we setup a R53 Private Hosted Zone. More appropriately, also setup R53 Resolver. Answer is ADE. Although I agree that Route53 could be used E does not clearly explain what needs to be done. D is important because is a VM with no documentation so you might not be able to recreate it from scratch and the best way is to import the VM into AWS.",
          "upvote_count": "421"
        },
        {
          "id": 66062,
          "date": "Tue 05 Oct 2021 06:36",
          "username": "Smartkakashi",
          "content": "Agreed. Option F is simply not relevant to the question asked. Option E is more appropriate. In this case, we setup a R53 Private Hosted Zone. More appropriately, also setup R53 Resolver. Answer is ADE. Although I agree that Route53 could be used E does not clearly explain what needs to be done. D is important because is a VM with no documentation so you might not be able to recreate it from scratch and the best way is to import the VM into AWS.",
          "upvote_count": "21"
        },
        {
          "id": 68588,
          "date": "Wed 06 Oct 2021 08:05",
          "username": "kakashi",
          "content": "Although I agree that Route53 could be used E does not clearly explain what needs to be done. D is important because is a VM with no documentation so you might not be able to recreate it from scratch and the best way is to import the VM into AWS.",
          "upvote_count": "1"
        },
        {
          "id": 37304,
          "date": "Sat 02 Oct 2021 13:23",
          "username": "AnNguyen",
          "content": "Answer is A,D,F<br>B: Virtual and Customer gateway is needed<br>C: Don’t need a EIP as private subnets can also interact with on-premises network<br>E: Route 53 is not required",
          "upvote_count": "11"
        },
        {
          "id": 706720,
          "date": "Fri 28 Oct 2022 21:24",
          "username": "Cal88",
          "content": "I don't know why a lot of comments here are talking about route 53 when its not relevant at all.<br>If we have a direct connect connection and a server that's migrated from on premise as is (including DNS config in /etc/resolv.conf )<br>That server will still use on premise DNS since we already have reachability to our on premise using direct connect<br><br>You use route 53 resolver to point an ec2 instance that's using your VPC DNS to on premise<br>The question is clearly asking for a \\\"Lift and shift\\\" approach so I would go with ADF",
          "upvote_count": "1"
        },
        {
          "id": 655821,
          "date": "Thu 01 Sep 2022 07:08",
          "username": "welcomeYM",
          "content": "ADF ADF ADF ADF ADF",
          "upvote_count": "1"
        },
        {
          "id": 596832,
          "date": "Wed 04 May 2022 15:18",
          "username": "snakecharmer2",
          "content": "F and no E - We need to import the VM because we want to move all the configruations and keys that are located on its disk with it, so it is a must for the migration. Route53 is not a must!!!",
          "upvote_count": "1"
        },
        {
          "id": 596103,
          "date": "Mon 02 May 2022 17:39",
          "username": "aloha123",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html",
          "upvote_count": "1"
        },
        {
          "id": 513411,
          "date": "Thu 30 Dec 2021 14:36",
          "username": "RVivekRVivek",
          "content": "ADE or ADF<br>ADE : If you take the question\\\"What enables the application operating inside the VPC to communicate with and access its internal dependencies without requiring reconfiguration?\\\" In this case we assume the VM migaration is over<br>ADF:If you focus on the question part \\\"You've been entrusted with the responsibility of migrating a legacy application from a virtual machine\\\". here we assume the application uses hardcoded IP address and do not use DNS namesADF after reading this https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network<br>On route 53 you configure an outboud end point and forward queries from VPC to on-pre DNS server. You need not (cannot ?)make netries onRoute53",
          "upvote_count": "11"
        },
        {
          "id": 513427,
          "date": "Thu 30 Dec 2021 14:44",
          "username": "RVivek",
          "content": "ADF after reading this https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network<br>On route 53 you configure an outboud end point and forward queries from VPC to on-pre DNS server. You need not (cannot ?)make netries onRoute53",
          "upvote_count": "1"
        },
        {
          "id": 479412,
          "date": "Tue 16 Nov 2021 14:54",
          "username": "sashenkaCal88",
          "content": "AD[E]. We are being asked for communication dependencies and NOT migration strategy! If the application is referencing internal/on-prem domains one would need to forward those to the on-prem DNS via R53. The facts we're given is there is \\\"no documentation\\\" about the app. So if the app could be configured to connect to an on-prem database or file server via a FQDN which is a best practice rather than reference IP's. So in this scenario how would you suggest it function if one does not leverage R53? Take another look at what we are being asked for... it is communication dependencies and not migration method!That's not true<br>We are asked to \\\"Lift and shift\\\" the application and make it work in AWS as it was on premise.<br>Why would. you need route 53 when the server is already using the on premise DNS and direct connect is being used?<br>The DNS queries will go from the server to the on premise without the need to setup anything on route 53.<br>if you use VM import export the same server will be replicated to AWS and all of its configuration will be the same including DNS configs<br>I would choose ADF. ",
          "upvote_count": "11"
        },
        {
          "id": 706717,
          "date": "Fri 28 Oct 2022 21:16",
          "username": "Cal88",
          "content": "That's not true<br>We are asked to \\\"Lift and shift\\\" the application and make it work in AWS as it was on premise.<br>Why would. you need route 53 when the server is already using the on premise DNS and direct connect is being used?<br>The DNS queries will go from the server to the on premise without the need to setup anything on route 53.<br>if you use VM import export the same server will be replicated to AWS and all of its configuration will be the same including DNS configs<br>I would choose ADF. ",
          "upvote_count": "1"
        },
        {
          "id": 413025,
          "date": "Fri 05 Nov 2021 15:52",
          "username": "joyees1979",
          "content": "ADE should be correct. Not F because the questionasks what will be required for the applicaton running inside the VPC (assumption that the application has already been migrated).",
          "upvote_count": "1"
        },
        {
          "id": 405824,
          "date": "Sat 30 Oct 2021 04:46",
          "username": "Akhil254",
          "content": "ADF Correct",
          "upvote_count": "2"
        },
        {
          "id": 341787,
          "date": "Wed 27 Oct 2021 20:26",
          "username": "0103701037",
          "content": "I believe the answer is ADE. <br>F may be correct, but it's not what the question asks.<br>From what the questions says, we can assume that no change can be made to on-prem service, so if the application accesses them via domain name, then it has to be the same after migrating to AWS.<br>So E could be necessary.Second thought.<br><br>Since there no doc about the app, and no one knows it, using VM import to import it to EC2 is the only way doing the job.<br>So ADF",
          "upvote_count": "11"
        },
        {
          "id": 370720,
          "date": "Fri 29 Oct 2021 10:53",
          "username": "01037",
          "content": "Second thought.<br><br>Since there no doc about the app, and no one knows it, using VM import to import it to EC2 is the only way doing the job.<br>So ADF",
          "upvote_count": "1"
        },
        {
          "id": 232792,
          "date": "Wed 20 Oct 2021 17:46",
          "username": "ChauPhanChauPhan",
          "content": "A,D,F. <br>First you would like to move your on-premise server to AWS server (for ex, EC2), it require VM import to import our image to AWS EC2. So F is mandatory.<br>This server requires connecting back to your data center network (services), so it requires connection, in this case Direct Connect, so A. <br>The connection is internal from AWS VPC to your data center through DX, so Route53 or EIP (which are for external/Internet) is not essential here.<br>When internally connected, you need IP of your AWS machine not conflict with data center services IPs, so it's DRoute53 is used to resolve between server's DNS and its IP, you don't need in this case. You only need IP address of the server. EIP is external fixed IP of AWS for external permanent IP, you connect from internet, which is not required in the case.",
          "upvote_count": "41"
        },
        {
          "id": 232799,
          "date": "Sun 24 Oct 2021 09:19",
          "username": "ChauPhan",
          "content": "Route53 is used to resolve between server's DNS and its IP, you don't need in this case. You only need IP address of the server. EIP is external fixed IP of AWS for external permanent IP, you connect from internet, which is not required in the case.",
          "upvote_count": "1"
        },
        {
          "id": 225949,
          "date": "Tue 19 Oct 2021 17:43",
          "username": "qkhanhproRVivek",
          "content": "A B D<br>The question does not even ask about being able to start or import the VM. It just ask what are the requirements to reach back to on prem without reconfiguration<br>So VM import is not relatedB is not required. B is not relevent",
          "upvote_count": "12"
        },
        {
          "id": 513405,
          "date": "Thu 30 Dec 2021 14:31",
          "username": "RVivek",
          "content": "B is not required. B is not relevent",
          "upvote_count": "2"
        },
        {
          "id": 202384,
          "date": "Mon 18 Oct 2021 15:06",
          "username": "saddly",
          "content": "F would be the right answer. <br>For naming resolving, 53 is not must now. Refer New – Amazon Route 53 Resolver for Hybrid Clouds",
          "upvote_count": "1"
        },
        {
          "id": 190200,
          "date": "Mon 18 Oct 2021 11:42",
          "username": "srknbngl",
          "content": "A,D,F is correct",
          "upvote_count": "1"
        },
        {
          "id": 170225,
          "date": "Sun 17 Oct 2021 23:57",
          "username": "Bulti",
          "content": "Answer : ADF<br>https://jayendrapatil.com/tag/ec2/<br>F instead of E because the key word \\\"No documentation\\\" suggest that the application will need to go through life and shift which is possible only with F.  E is not required since D ensures that the IP addresses do not conflict between on-prem and AWS and assuming the configuration uses IP addresses and not DNS names there may not be a need to resolve IP addresses.",
          "upvote_count": "5"
        },
        {
          "id": 148522,
          "date": "Fri 15 Oct 2021 06:17",
          "username": "sensor",
          "content": "ADF:<br>I cant imagine how is DNS resolution from VPC (and app) to on prem DNS server (and its services) provided.<br>ADE:<br>Acc to 'Hybrid Cloud DNS Options for Amazon VPC' whitepaper to setup DNS resolution from VPC to on prem there are more options available:<br>R53 resolver outbound point, ec2 (conditional) resolver,..complete list in table 4 in referenced whitepaper.<br>Set up of a R53 outbound point is described, which resembles to me to E :<br>https://aws.amazon.com/premiumsupport/knowledge-center/route53-resolve-with-outbound-endpoint/<br>Therefore, I'll rather go for ADE than ADF",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have a periodic image analysis application that gets some files in input, analyzes them and tor each file writes some data in output to a ten file the number of files in input per day is high and concentrated in a few hours of the day.<br>Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results. It takes almost 20 hours per day to complete the process.<br>What services could be used to reduce the elaboration time and improve the availability of the solution?</p>",
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
              "choice": "<p>A. S3 to store I/O files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. EBS with Provisioned IOPS (PIOPS) to store I/O files. SNS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. S3 to store I/O files, SNS to distribute evaporation commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the number of SNS notifications<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. EBS with Provisioned IOPS (PIOPS) to store I/O files SQS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group ot hosts depending on the length of the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 17394,
          "date": "Mon 20 Sep 2021 18:26",
          "username": "Warrenn",
          "content": "the question asks to improve the availability EBS volumes are attached to a single ec2 instance correct answer is A",
          "upvote_count": "20"
        },
        {
          "id": 17335,
          "date": "Mon 20 Sep 2021 11:56",
          "username": "rasagulla",
          "content": "I am trying to understand why option 'A' using S3 cannot be a possible solution for this question. Can some help me on that.",
          "upvote_count": "9"
        },
        {
          "id": 704307,
          "date": "Wed 26 Oct 2022 03:34",
          "username": "Neftali",
          "content": "Answer: A",
          "upvote_count": "1"
        },
        {
          "id": 651035,
          "date": "Wed 24 Aug 2022 02:18",
          "username": "rajvee",
          "content": "A.  Tricky qn. \\\"S3 to store I/O files.\\\" = Increases availability/durability from storing in a single EC2 and EBS. \\\"SQS to distribute <br> elaboration commands to a group of hosts working in parallel\\\" and<br>\\\"Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue\\\" = Increase the compute power and availability to support the processing.",
          "upvote_count": "1"
        },
        {
          "id": 623884,
          "date": "Tue 28 Jun 2022 11:59",
          "username": "TechX",
          "content": "Answer: A<br>Explanation:<br>SNS doesn’t allow you to distribute tasks between group of hosts. It allows you sending notification but how do you decide which host will handle it?<br>Also PIOPS is good for performance but not for availability which this task is asking about.<br>There is no problem in using S3 as there is no frequently changing data, you process the file and write the result once and don’t change it later.",
          "upvote_count": "3"
        },
        {
          "id": 622785,
          "date": "Sun 26 Jun 2022 21:47",
          "username": "kangtamo",
          "content": "Agree with A.  S3 is better.",
          "upvote_count": "1"
        },
        {
          "id": 520771,
          "date": "Mon 10 Jan 2022 10:53",
          "username": "pititcu667",
          "content": "this is hard going with d simply because \\\"shorten the solution's development time\\\".",
          "upvote_count": "2"
        },
        {
          "id": 519500,
          "date": "Sat 08 Jan 2022 13:13",
          "username": "Tokyoboy",
          "content": "A is better because the files in S3 can be read by multiple instances.EBS storage is attached to a single instance",
          "upvote_count": "2"
        },
        {
          "id": 495553,
          "date": "Tue 07 Dec 2021 03:53",
          "username": "KiraguJohn",
          "content": "A.  With S3 i do a lot to increase availability like cross-region replication etc. Even if you can do multi-attach on EBS Procisioned IOPS io1 it is still limited to 16 and can only be on a single -AZ",
          "upvote_count": "1"
        },
        {
          "id": 444814,
          "date": "Sun 07 Nov 2021 12:23",
          "username": "pavelurv",
          "content": "a is better",
          "upvote_count": "1"
        },
        {
          "id": 423434,
          "date": "Fri 05 Nov 2021 18:49",
          "username": "FERIN_01",
          "content": "D.  Already solution is working with EC2 with EBS volume. Question asking to reduce elaboration time and increase availability. Implementing auto scaling elaboration time will get reduce, with multiple instance in ASG highly available.",
          "upvote_count": "2"
        },
        {
          "id": 405828,
          "date": "Wed 03 Nov 2021 23:46",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 384462,
          "date": "Wed 03 Nov 2021 09:07",
          "username": "DashL",
          "content": "A<br> Multi-Attach on Amazon EBS Provisioned IOPS io1 volumes allow a single volume to be concurrently attached to up to sixteen AWS Nitro System-based Amazon Elastic Compute Cloud (Amazon EC2) instances within the same Availability Zone.<br>Note: the key words are Nitro based systems and Singe-AZ. So, with so many assumptions, D can not be the correct answer.",
          "upvote_count": "2"
        },
        {
          "id": 341789,
          "date": "Sat 30 Oct 2021 04:11",
          "username": "01037",
          "content": "Obviously A",
          "upvote_count": "1"
        },
        {
          "id": 282398,
          "date": "Thu 28 Oct 2021 08:09",
          "username": "bnagaraja9099",
          "content": "I ll go with A",
          "upvote_count": "1"
        },
        {
          "id": 272765,
          "date": "Thu 28 Oct 2021 01:58",
          "username": "Ajeeshpv",
          "content": "A should be correct",
          "upvote_count": "1"
        },
        {
          "id": 272476,
          "date": "Wed 27 Oct 2021 10:15",
          "username": "AWSLeaerner",
          "content": "A is correct. The simple reason is that the hosts cannot share EBS volume as stated in option D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. <br>Which of the following designs will meet these objectives?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: E</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A. Instantiate a c3.8xlarge instance in us-east-1. Provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Instantiate a c3.8xlarge instance in us-east-1. Provision 3xlTB EBS volumes, attach them to the Instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral-backed volume to the EBS-backed volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Instantiate a c3.8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Configure synchronous, block-level replication to an identically configured instance in us-east-1b.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37332,
          "date": "Thu 23 Sep 2021 11:27",
          "username": "AnNguyenbernardtaolulz111",
          "content": "Answer is E<br>Keyword is \\\"or Availability Zone without any data loss\\\"<br>A: RAID 5 is not recommened by AWS. Also need replicate to another AZ<br>B: Need synchronous replication to prevent any data loss (in case lost AZ)<br>C: Need synchronous replication to prevent any data loss<br>D: Need synchronous replication to prevent any data loss<br>Also full option E is<br>\\\"Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the Instance Configure synchronous block-level replication to an identically configured Instance in us-east-1b.\\\"very helpful! almost lost as it seems none to be right with the incomplete option :-)Raid0 cant tolerate the loss of one disk, so it cant be E. ",
          "upvote_count": "2024"
        },
        {
          "id": 84575,
          "date": "Mon 04 Oct 2021 12:12",
          "username": "bernardtao",
          "content": "very helpful! almost lost as it seems none to be right with the incomplete option :-)",
          "upvote_count": "2"
        },
        {
          "id": 529852,
          "date": "Sat 22 Jan 2022 13:51",
          "username": "lulz111",
          "content": "Raid0 cant tolerate the loss of one disk, so it cant be E. ",
          "upvote_count": "4"
        },
        {
          "id": 294600,
          "date": "Sat 30 Oct 2021 19:10",
          "username": "MadwynLiongeek",
          "content": "I've never seen any customer using RAID in the cloud, this is OLD.  I'd rather fail the exam than provide such a solution.lol xd",
          "upvote_count": "124"
        },
        {
          "id": 432759,
          "date": "Sun 07 Nov 2021 01:55",
          "username": "Liongeek",
          "content": "lol xd",
          "upvote_count": "4"
        },
        {
          "id": 713610,
          "date": "Tue 08 Nov 2022 09:45",
          "username": "NathanvB99",
          "content": "It has to be D. <br><br>RAID 0 doesn't accept disk failures, so this is not an option. <br><br>Answer A would work but doesn't prevent complete data loss because of the 15 minute backup window.<br><br>D is the answer, there's no data loss, it has disk resilience through Storage Gateway and has the needed IO and disk space.",
          "upvote_count": "1"
        },
        {
          "id": 704309,
          "date": "Wed 26 Oct 2022 03:38",
          "username": "Neftali",
          "content": "E is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 658849,
          "date": "Sun 04 Sep 2022 02:17",
          "username": "skywalker",
          "content": "Should it be C since the question ask for redundancy across AZ.There is no mentioned ofredundancy for lost of region.",
          "upvote_count": "1"
        },
        {
          "id": 606147,
          "date": "Mon 23 May 2022 16:17",
          "username": "user0001",
          "content": "answer is D",
          "upvote_count": "1"
        },
        {
          "id": 342570,
          "date": "Sat 30 Oct 2021 19:17",
          "username": "01037",
          "content": "How can 3TB provide 100,000iops?",
          "upvote_count": "1"
        },
        {
          "id": 225967,
          "date": "Fri 22 Oct 2021 03:23",
          "username": "qkhanhpro",
          "content": "I think AWS will remove this. Who would even consider synchronous replication when you need super fast disk arrays ( with synchronous repl, you wait until the write is completed on both local and remote which severely impact your super critical high perf disk array )<br>Asynchronous replication with writes being queued for a few minutes is much more acceptable",
          "upvote_count": "3"
        },
        {
          "id": 190272,
          "date": "Thu 21 Oct 2021 19:44",
          "username": "srknbngl",
          "content": "E is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 170252,
          "date": "Tue 19 Oct 2021 20:27",
          "username": "Bulti",
          "content": "Answer is E.  Keyword is \\\" survive loss of an AZ\\\" which is possible only via E. ",
          "upvote_count": "1"
        },
        {
          "id": 143435,
          "date": "Sat 16 Oct 2021 14:55",
          "username": "fullaws",
          "content": "E, synchornous block-level replication to an Identical configure instance in other AZ",
          "upvote_count": "1"
        },
        {
          "id": 137725,
          "date": "Sat 16 Oct 2021 02:59",
          "username": "RyanGhavidel",
          "content": "E makes sense. however, dont think that IOPS level could be met with a synch replication tbh. so keen to see what is the solution in details!",
          "upvote_count": "2"
        },
        {
          "id": 130180,
          "date": "Thu 07 Oct 2021 01:27",
          "username": "Imy",
          "content": "you do know Raid 0 has no resiliency right?",
          "upvote_count": "3"
        },
        {
          "id": 127380,
          "date": "Tue 05 Oct 2021 21:30",
          "username": "noisonnoiton",
          "content": "go with E",
          "upvote_count": "2"
        },
        {
          "id": 84179,
          "date": "Thu 30 Sep 2021 01:12",
          "username": "fw",
          "content": "E is correct.You have to use instance store volumes on supported EC2 instance.<br>A, B, D don't work as c3.8xlarge only supports 2 x 320 GB (640 GB)<br>C: you can only copy data between Instance store file system to EBS file system, no block level replication available.<br>E: You can use a third party tool like DRDB to perform replication to another instance in another AZ to get HA. ",
          "upvote_count": "1"
        },
        {
          "id": 75181,
          "date": "Wed 29 Sep 2021 15:20",
          "username": "Joeylee",
          "content": "Full text for E:<br>Instantiate an 12 8xlarge instance in us-east-1a create a raid 0 volume using the four 800GB SSD ephemeral disks provide with the Instance Configure synchronous block-level replication to an Identically configured Instance in us-east-1b.",
          "upvote_count": "3"
        },
        {
          "id": 49660,
          "date": "Sun 26 Sep 2021 21:52",
          "username": "BillyC",
          "content": "En is Correct!",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are the new IT architect in a company that operates a mobile sleep tracking application.<br>When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend.<br>The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table.<br>Every morning, you scan the table to extract and aggregate last night's data on a per user basis, and store the results in Amazon S3. Users are notified via<br>Amazon SNS mobile push notifications that new data is available, which is parsed and visualized by the mobile app.<br>Currently you have around 100k users who are mostly based out of North America.<br>You have been tasked to optimize the architecture of the backend system to lower cost.<br>What would you recommend? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. Have the mobile app access Amazon DynamoDB directly Instead of JSON files stored on Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a new Amazon DynamoDB table each day and drop the one for the previous day after its data is on Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 12541,
          "date": "Wed 22 Sep 2021 23:27",
          "username": "MoonWarrennhilftRVivek",
          "content": "Answer: C, E. <br>C: it is great solution to use SQS as it spread the write load, and absorb the high load per second, which allow for less read and write capacity on DynamoDB. <br>D: There is no high reparative access to similar data, so we would cache them using ElastiCache!! it is once per morning, where the user see the report of last night.<br><br>E: Comparing to deleting the table every morning after storing the information on S3, which would save DyB capacity, and reduce cost!!<br><br>any other ideas?Agree C E reducing the size of DynamoDb reduces the required RCU and WCUNo idea. CE is the perfect comboMakes perfect sens",
          "upvote_count": "26412"
        },
        {
          "id": 17396,
          "date": "Fri 24 Sep 2021 07:20",
          "username": "Warrenn",
          "content": "Agree C E reducing the size of DynamoDb reduces the required RCU and WCU",
          "upvote_count": "4"
        },
        {
          "id": 638361,
          "date": "Thu 28 Jul 2022 01:55",
          "username": "hilft",
          "content": "No idea. CE is the perfect combo",
          "upvote_count": "1"
        },
        {
          "id": 513120,
          "date": "Thu 30 Dec 2021 08:46",
          "username": "RVivek",
          "content": "Makes perfect sens",
          "upvote_count": "2"
        },
        {
          "id": 607934,
          "date": "Fri 27 May 2022 08:05",
          "username": "bobsmith2000",
          "content": "I'm more inclined to choose CE. <br>A) Accessing S3 is much more cheaper, than DDB.  Moreover it gonna be used a few times per user or cached on a mobile device. S3 lifecycle is gonna be more useful in that case.<br>B) Redshift is a red herring.<br>C) Even though 1 WCU = 1KB, we have to spread the load to not depleting all WCU capacity.<br>D) There's no reason to pay for ElastiCache because the data is read once and then is put in S3.<br>E) Creating new DDB and dropping the previous one makes sense as long as you put data in S3. In reduces a query/scan volume and consumes less RCU.",
          "upvote_count": "1"
        },
        {
          "id": 601336,
          "date": "Fri 13 May 2022 21:58",
          "username": "ghfalcon7",
          "content": "C,E: https://stackoverflow.com/questions/32813873/avoid-throttle-dynamodb",
          "upvote_count": "1"
        },
        {
          "id": 514367,
          "date": "Sat 01 Jan 2022 05:56",
          "username": "cldy",
          "content": "C and E. ",
          "upvote_count": "2"
        },
        {
          "id": 511829,
          "date": "Wed 29 Dec 2021 06:48",
          "username": "seanfang",
          "content": "I'll go with C&E. <br>D it is not necessary",
          "upvote_count": "2"
        },
        {
          "id": 502220,
          "date": "Wed 15 Dec 2021 15:07",
          "username": "Tan0k",
          "content": "C & E is correct",
          "upvote_count": "2"
        },
        {
          "id": 344663,
          "date": "Fri 05 Nov 2021 19:14",
          "username": "01037",
          "content": "C & E for sure",
          "upvote_count": "2"
        },
        {
          "id": 329298,
          "date": "Sun 31 Oct 2021 04:51",
          "username": "hihismkskks",
          "content": "C & E is right",
          "upvote_count": "1"
        },
        {
          "id": 294605,
          "date": "Sat 30 Oct 2021 13:51",
          "username": "Madwyn",
          "content": "ElastiCache won't work as the data is scanned once, nothing needs to be cached.",
          "upvote_count": "1"
        },
        {
          "id": 232840,
          "date": "Mon 25 Oct 2021 18:39",
          "username": "ChauPhanChauPhan",
          "content": "Agree with C and E.  <br>DynamoDB will charge based on 02 things: the table you stored on disk based on capacity Gb and Read/Write throughput. So after querying and processing the table, storing the result in S3, you can remove old table. The user will read from S3 result, you don't need to keep old data 100k user every 5 mins 5k each.<br>To reduce the write throughput, C can be used. We don't need to use Elasticcache to reduce the read throughput because we read from S3 where we stored processed result.Sorry I consider D as well, because as question, we need to scan the table and aggregate the result. So read CU is also important. So maybe D,E.  We ignore write CU because SQS does not help to reduce write CU",
          "upvote_count": "11"
        },
        {
          "id": 232846,
          "date": "Tue 26 Oct 2021 17:12",
          "username": "ChauPhan",
          "content": "Sorry I consider D as well, because as question, we need to scan the table and aggregate the result. So read CU is also important. So maybe D,E.  We ignore write CU because SQS does not help to reduce write CU",
          "upvote_count": "1"
        },
        {
          "id": 226284,
          "date": "Sun 24 Oct 2021 19:46",
          "username": "qkhanhpro01037",
          "content": "I disagree with C<br>SQS is not free, neither is the poller need to be employed since there is no direct free SQS - DynamoDB integration yet<br>The workload is also highly stable for SQS to do anything meaningful hereThe point is SQS is much cheaper comparing to write capacity of DynamoDB. ",
          "upvote_count": "11"
        },
        {
          "id": 344662,
          "date": "Thu 04 Nov 2021 23:35",
          "username": "01037",
          "content": "The point is SQS is much cheaper comparing to write capacity of DynamoDB. ",
          "upvote_count": "1"
        },
        {
          "id": 210250,
          "date": "Sat 23 Oct 2021 23:51",
          "username": "newmelalitsrana",
          "content": "Why C. <br>After all, the amount of data to write to Dynamodb is the same, isn't it?<br>So needed write capacity doesn't change, and it's not free to use SQS.I think they are assuming that there is a processor between SQL and DynamoDB. <br>So data would be processed before writing to DynamoDB and not after storing to DB (the processes results are again assumed to be stored in Dynamo DB).",
          "upvote_count": "21"
        },
        {
          "id": 276909,
          "date": "Fri 29 Oct 2021 01:28",
          "username": "lalitsrana",
          "content": "I think they are assuming that there is a processor between SQL and DynamoDB. <br>So data would be processed before writing to DynamoDB and not after storing to DB (the processes results are again assumed to be stored in Dynamo DB).",
          "upvote_count": "1"
        },
        {
          "id": 190205,
          "date": "Fri 22 Oct 2021 21:33",
          "username": "srknbngl",
          "content": "C & E is correct",
          "upvote_count": "1"
        },
        {
          "id": 170308,
          "date": "Fri 22 Oct 2021 11:31",
          "username": "Bulti",
          "content": "C,E - both options will reduce cost.",
          "upvote_count": "1"
        },
        {
          "id": 143443,
          "date": "Fri 22 Oct 2021 09:54",
          "username": "fullaws",
          "content": "C & E is correct",
          "upvote_count": "1"
        },
        {
          "id": 127382,
          "date": "Tue 19 Oct 2021 08:23",
          "username": "noisonnoiton",
          "content": "go with C,E",
          "upvote_count": "3"
        },
        {
          "id": 116926,
          "date": "Mon 18 Oct 2021 11:45",
          "username": "manoj101",
          "content": "C:SQS to manage write capacity.<br>E:Cost of S3 is always lower than other storage options. So deleting tables from DB once stored on S3 is better option.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large real-estate brokerage is exploring the option of adding a cost-effective location based alert to their existing mobile application. The application backend infrastructure currently runs on AWS. Users who opt in to this service will receive alerts on their mobile device regarding real-estate otters in proximity to their location. For the alerts to be relevant delivery time needs to be in the low minute count the existing mobile app has 5 million users across the US.<br>Which one of the following architectural suggestions would you make to the customer?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. The mobile application will submit its location to a web service endpoint utilizing Elastic Load Balancing and EC2 instances; DynamoDB will be used to store and retrieve relevant offers EC2 instances will communicate with mobile earners/device providers to push alerts back to mobile application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DirectConnect or VPN to establish connectivity with mobile carriers EC2 instances will receive the mobile applications location through carrier connection: RDS will be used to store and relevant offers. EC2 instances will communicate with mobile carriers to push alerts back to the mobile application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The mobile application will send device location using SQS. EC2 instances will retrieve the relevant others from DynamoDB.  AWS Mobile Push will be used to send offers to the mobile application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The mobile application will send device location using AWS Mobile Push EC2 instances will retrieve the relevant offers from DynamoDB.  EC2 instances will communicate with mobile carriers/device providers to push alerts back to the mobile application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496657,
          "date": "Wed 08 Dec 2021 09:38",
          "username": "cldy",
          "content": "C.  The mobile application will send device location using SQS. EC2 instances will retrieve the relevant others from DynamoDB.  AWS Mobile Push will be used to send offers to the mobile application.",
          "upvote_count": "1"
        },
        {
          "id": 405833,
          "date": "Sun 07 Nov 2021 10:38",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 344672,
          "date": "Sat 06 Nov 2021 12:56",
          "username": "01037",
          "content": "I'll go with C. <br>Thought A also works at first, but ELB is regional, and users are all over US, so it may not be a good solution.<br>SQS is also regional, does it matter?",
          "upvote_count": "1"
        },
        {
          "id": 286787,
          "date": "Tue 02 Nov 2021 07:14",
          "username": "wind",
          "content": "Cis correct.",
          "upvote_count": "1"
        },
        {
          "id": 221930,
          "date": "Sat 30 Oct 2021 11:07",
          "username": "consultsk",
          "content": "I will go with C. <br>My thoughts: Keeping in view of the no. of users and always keep the data sources and callers decoupled. SQS also scales well on-demand.<br>Ref: https://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KLh_r0HF-c4CLFplqe_/amazon-sns?answer=-KLj_DmVDHqT8a6zp_5e<br>Ref: https://jayendrapatil.com/aws-storage-options-whitepaper/",
          "upvote_count": "2"
        },
        {
          "id": 211441,
          "date": "Fri 29 Oct 2021 07:17",
          "username": "kneelMadwynuser0001",
          "content": "The answer is D. <br>C is not correct for two reasons. One, SQS by itself cannot send notifications and secondly, SQS is typically used to either lower cost or decouple a system, both of which are not required here.The notifications are sent using Mobile Push, pushed to the mobile app. SQS is used to buffer the 5 million users' locations.i agree , <br>in C, The mobile application will send device location using SQS ,",
          "upvote_count": "221"
        },
        {
          "id": 294611,
          "date": "Tue 02 Nov 2021 18:15",
          "username": "Madwyn",
          "content": "The notifications are sent using Mobile Push, pushed to the mobile app. SQS is used to buffer the 5 million users' locations.",
          "upvote_count": "2"
        },
        {
          "id": 599801,
          "date": "Wed 11 May 2022 02:06",
          "username": "user0001",
          "content": "i agree , <br>in C, The mobile application will send device location using SQS ,",
          "upvote_count": "1"
        },
        {
          "id": 190273,
          "date": "Tue 26 Oct 2021 21:29",
          "username": "srknbngl",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 130968,
          "date": "Thu 14 Oct 2021 08:37",
          "username": "kneelmanoj101",
          "content": "I think the answer is D.  For option C it states \\\"send device location using SQS\\\", SQS by itself cannot be used to send device location. However answer D states \\\"send device location using AWS Mobile Push\\\", Mobile Push was designed to do this very function.AWS SNS Mobile Push is for pushing out and not pulling in the data from mobile devices.",
          "upvote_count": "23"
        },
        {
          "id": 174885,
          "date": "Sun 17 Oct 2021 07:23",
          "username": "manoj101",
          "content": "AWS SNS Mobile Push is for pushing out and not pulling in the data from mobile devices.",
          "upvote_count": "3"
        },
        {
          "id": 127386,
          "date": "Thu 07 Oct 2021 08:40",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 49664,
          "date": "Sun 26 Sep 2021 18:58",
          "username": "BillyC",
          "content": "C is Correct!",
          "upvote_count": "3"
        },
        {
          "id": 37722,
          "date": "Sun 26 Sep 2021 00:33",
          "username": "amog",
          "content": "Answer is C",
          "upvote_count": "3"
        },
        {
          "id": 31372,
          "date": "Mon 20 Sep 2021 20:23",
          "username": "[Removed]",
          "content": "C is the answer.SQS is scalable for 5millions users.",
          "upvote_count": "3"
        },
        {
          "id": 17336,
          "date": "Mon 20 Sep 2021 00:42",
          "username": "rasagullaTamili",
          "content": "Why not use mobile push instead of SQS. Wouldn't that be effective here?Sqs can buffer and store in scale abel and highly available way. You wouldn't want to bombard ec2 with all data at once. Take note of num of users. You need a q service like SQS",
          "upvote_count": "210"
        },
        {
          "id": 21870,
          "date": "Mon 20 Sep 2021 01:54",
          "username": "Tamili",
          "content": "Sqs can buffer and store in scale abel and highly available way. You wouldn't want to bombard ec2 with all data at once. Take note of num of users. You need a q service like SQS",
          "upvote_count": "10"
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You currently operate a web application. In the AWS US-East region. The application runs on an auto-scaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2.IAM And RDS resources. The solution must ensure the integrity and confidentiality of your log data.<br>Which of these solutions would you recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles S3 bucket policies and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CloudTrail with one new S3 bucket to store the logs Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket mat stores your logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected. Use S3 ACLs and Multi Factor Authentication (MFA). Delete on the S3 bucket that stores your logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create three new CloudTrail trails with three new S3 buckets to store the logs one for the AWS Management console, one for AWS SDKs and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 323943,
          "date": "Tue 26 Oct 2021 18:35",
          "username": "cldy",
          "content": "A.  <br>1 a new CT trail + 1 new S3 bucket + global services option selected + IAM roles + bucket policies + MFA Delete.",
          "upvote_count": "8"
        },
        {
          "id": 577863,
          "date": "Tue 29 Mar 2022 23:05",
          "username": "jj22222",
          "content": "A.  Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles S3 bucket policies and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.",
          "upvote_count": "1"
        },
        {
          "id": 406199,
          "date": "Thu 04 Nov 2021 14:35",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 344977,
          "date": "Mon 01 Nov 2021 19:18",
          "username": "01037wassbblackgamer",
          "content": "A. <br>But why is global services option needed.<br>There is only one region, isn't it?\\\"Durability\\\" i think. In case of using a new regionYes, A is correct. Global services option is not needed to select when creates using AWS console, but it will need to set --is-multi-region-trail true to enable global services if you create from aws cli.",
          "upvote_count": "211"
        },
        {
          "id": 686236,
          "date": "Tue 04 Oct 2022 16:08",
          "username": "wassb",
          "content": "\\\"Durability\\\" i think. In case of using a new region",
          "upvote_count": "1"
        },
        {
          "id": 418262,
          "date": "Fri 05 Nov 2021 12:31",
          "username": "blackgamer",
          "content": "Yes, A is correct. Global services option is not needed to select when creates using AWS console, but it will need to set --is-multi-region-trail true to enable global services if you create from aws cli.",
          "upvote_count": "1"
        },
        {
          "id": 313517,
          "date": "Mon 18 Oct 2021 18:08",
          "username": "ExtHo",
          "content": "A is correct one",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your department creates regular analytics reports from your company's log files All log data is collected in Amazon S3 and processed by daily Amazon Elastic<br>MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse.<br>Your CFO requests that you optimize the cost structure for this system.<br>Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A. Use reduced redundancy storage (RRS) for all data In S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use reduced redundancy storage (RRS) for PDF and .csv data In Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 684261,
          "date": "Sat 01 Oct 2022 16:18",
          "username": "davideccc",
          "content": "c is the only logic answer",
          "upvote_count": "1"
        },
        {
          "id": 527143,
          "date": "Wed 19 Jan 2022 02:50",
          "username": "tkanmani76",
          "content": "C - Due to the fault-tolerant nature of big data workloads on EMR, they can continue processing, even when interrupted. Running EMR on Spot Instances drastically reduces the cost of big data, allows for significantly higher compute capacity, and reduces the time to process big data sets.",
          "upvote_count": "4"
        },
        {
          "id": 409082,
          "date": "Thu 04 Nov 2021 19:15",
          "username": "DashL",
          "content": "C<br>First of all this question is outdated, since as of 2020, RRS is not one of the available object classes for S3.So, this question will never come in certification exam.<br>https://aws.amazon.com/ec2/spot/use-case/emr/ provides an use case for EC2 sport instances \\\"Amazon EMR on EC2 Spot Instances\\\".Due to the fault-tolerant nature of big data workloads on EMR, they can continue processing, even when interrupted. Running EMR on Spot Instances drastically reduces the cost of big data, allows for significantly higher compute capacity, and reduces the time to process big data sets. Also, if Raw data is available all processing can be redone.",
          "upvote_count": "1"
        },
        {
          "id": 345003,
          "date": "Tue 02 Nov 2021 01:45",
          "username": "01037",
          "content": "C. <br>As long as the original data exist, you can always generate reports.",
          "upvote_count": "1"
        },
        {
          "id": 336035,
          "date": "Thu 28 Oct 2021 09:56",
          "username": "blackgamer",
          "content": "I believe the answer is C.  The requirement is not to compromise performance and integrity of Raw data. The raw data should still be in Standard Storage. ue to the fault-tolerant nature of big data workloads on EMR, they can continue processing, even when interrupted. Running EMR on Spot Instances drastically reduces the cost of big data, allows for significantly higher compute capacity, and reduces the time to process big data sets.",
          "upvote_count": "1"
        },
        {
          "id": 334444,
          "date": "Sat 23 Oct 2021 02:57",
          "username": "aws_arn_name",
          "content": "Why use RRS instead of S3 Standard . The S3 Standard storage class is more cost effective https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-freq-data-access",
          "upvote_count": "2"
        },
        {
          "id": 324920,
          "date": "Mon 11 Oct 2021 23:29",
          "username": "cldybobsmith2000",
          "content": "A. <br>the \\\"creates regular analytics reports\\\" requirement, you cannot achieve it with only spot instances.Pay attention to \\\"without compromising data integrity for the raw data\\\". Which means that you cannot store raw data using RRS storage class.<br>Ans. seems to be C",
          "upvote_count": "31"
        },
        {
          "id": 590085,
          "date": "Fri 22 Apr 2022 17:23",
          "username": "bobsmith2000",
          "content": "Pay attention to \\\"without compromising data integrity for the raw data\\\". Which means that you cannot store raw data using RRS storage class.<br>Ans. seems to be C",
          "upvote_count": "1"
        },
        {
          "id": 313729,
          "date": "Tue 28 Sep 2021 00:17",
          "username": "ExtHo",
          "content": "Correct Ans is A as Spot instance in all other options will effect performance",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#42",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You require the ability to analyze a large amount of data, which is stored on Amazon S3 using Amazon Elastic Map Reduce. You are using the cc2 8xlarge instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?</p>",
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
              "choice": "<p>A. Create more, smaller flies on Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add additional cc2 8xlarge instances by introducing a task group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use smaller instances that have higher aggregate I/O performance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create fewer, larger files on Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 49667,
          "date": "Fri 24 Sep 2021 15:52",
          "username": "BillyC",
          "content": "Yes, C is Correct!",
          "upvote_count": "6"
        },
        {
          "id": 635817,
          "date": "Sun 24 Jul 2022 02:31",
          "username": "hilft",
          "content": "C. <br>D is wrong larger files slow down the performance<br>A is wrong smaller files but more files slow down the performance",
          "upvote_count": "1"
        },
        {
          "id": 499755,
          "date": "Sun 12 Dec 2021 03:06",
          "username": "vbal",
          "content": "Create fewer, larger files on Amazon S3 is to get the better CPU performance, here in question we already have CPU idle so can't be the answer.",
          "upvote_count": "1"
        },
        {
          "id": 406203,
          "date": "Tue 02 Nov 2021 16:43",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 345004,
          "date": "Sun 31 Oct 2021 18:19",
          "username": "01037",
          "content": "C. <br>Since I/O is the bottleneck",
          "upvote_count": "1"
        },
        {
          "id": 276320,
          "date": "Wed 27 Oct 2021 16:33",
          "username": "Ajeeshpv",
          "content": "C is the correct one",
          "upvote_count": "1"
        },
        {
          "id": 230373,
          "date": "Tue 19 Oct 2021 02:32",
          "username": "BillyT",
          "content": "It talks about cost efficient way to reduce processing time. Having a server that is mostly idle means several smaller instances could help speed it up ?",
          "upvote_count": "1"
        },
        {
          "id": 210307,
          "date": "Sun 10 Oct 2021 02:45",
          "username": "newmenewme",
          "content": "It feels like A. <br>\\\"instances that have higher aggregate I/O performance\\\" is all about EBS, isn't it?<br>Reading from S3 only uses network, so why does high IO performance instances have anything to do with S3?Only A isn't enough though.<br>Also needs more instances to do the processing.<br>So instances don't need to wait long to start processing.",
          "upvote_count": "11"
        },
        {
          "id": 210313,
          "date": "Sat 16 Oct 2021 23:36",
          "username": "newme",
          "content": "Only A isn't enough though.<br>Also needs more instances to do the processing.<br>So instances don't need to wait long to start processing.",
          "upvote_count": "1"
        },
        {
          "id": 190279,
          "date": "Sat 09 Oct 2021 06:54",
          "username": "srknbngl",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 188804,
          "date": "Wed 06 Oct 2021 23:59",
          "username": "DS2021",
          "content": "I would definitely go with D. ",
          "upvote_count": "1"
        },
        {
          "id": 188584,
          "date": "Fri 01 Oct 2021 23:28",
          "username": "smartassX",
          "content": "\\\" the most cost efficient way to reduce the runtime of the job\\\" --> D.  Create fewer, larger files on Amazon S3.",
          "upvote_count": "2"
        },
        {
          "id": 143848,
          "date": "Thu 30 Sep 2021 02:27",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 131040,
          "date": "Wed 29 Sep 2021 12:19",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "1"
        },
        {
          "id": 75182,
          "date": "Sun 26 Sep 2021 01:01",
          "username": "Joeylee",
          "content": "C is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS customer is deploying an application mat is composed of an AutoScaling group of EC2 Instances.<br>The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id.<br>In addition, an x 509 certificates must Designed by the customer's Key management service in order to be trusted for authentication.<br>Which of the following configurations will support these requirements?</p>",
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
              "choice": "<p>A. Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group. Have the launched instances generate a certificate signature request with the instance's assigned instance-id to the key management service for signature.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the launched instances to generate a new certificate upon first boot. Have the Key management service poll the Auto Scaling group for associated instances and send new instances a certificate signature (hat contains the specific instance-id.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 10676,
          "date": "Sun 19 Sep 2021 18:18",
          "username": "dpvnmeWarrennskywalker",
          "content": "I would go with Cagree C.  A is incorrect and will not workAgreed to be C",
          "upvote_count": "844"
        },
        {
          "id": 17400,
          "date": "Wed 22 Sep 2021 09:53",
          "username": "Warrenn",
          "content": "agree C.  A is incorrect and will not work",
          "upvote_count": "4"
        },
        {
          "id": 18815,
          "date": "Wed 22 Sep 2021 15:37",
          "username": "skywalker",
          "content": "Agreed to be C",
          "upvote_count": "4"
        },
        {
          "id": 22956,
          "date": "Wed 29 Sep 2021 23:38",
          "username": "examacc",
          "content": "C is option making some sense. However it should be ACM for certificates. KMS is for keys",
          "upvote_count": "6"
        },
        {
          "id": 625039,
          "date": "Thu 30 Jun 2022 07:31",
          "username": "TechX",
          "content": "Answer: C<br>Explanation:<br>The certificate must be signed by the customers key management service and this is the only option. Using S3 wont have it unique, embedding in AMI wont make it unique, Generating a new certificate by itself would defeat the requirement of getting it signed by customers key management service.<br>A – Accessing from S3 was fine but how can the file be unique when every time autoscaling generates different instances and instance-id.. Thats not predictable<br>B – Embedding a certificate in AMI cannot make the certificate unique.<br>D – As the EC2 instances must generate unique X.509 certificate and this must be specific to the instance id. The EC2 instance can generate the certificate itself BUT it is clearly mentioned that the certificate must be signed by the customers key management service and not self signed.",
          "upvote_count": "2"
        },
        {
          "id": 538579,
          "date": "Wed 02 Feb 2022 11:20",
          "username": "cannottellname",
          "content": "Option C<br><br>Just to be clear, this question doesn't talk about AWS KMS but a customer's key management service (something like internal Certificate Authority). The requirement asks about unique certificate to be assigned for each EC2 instance. A, B doesn't guarantee a unique certificate. D doesn't make sense as CA won't poll for a CSR (Certificate Signining Request) and Sign it. This leaves with Option C which is possible with SNS alerting the customer's key management service or CA with details about instance-id and CA can generate a Certificate, Sign It and send back to the associated instance.<br><br>Saw a comment that AWS SNS doesn't send notification to KMS which is correct as KMS service is not integrated with SNS but the question is about Customer's Key Management Service and not AWS KMS. AFAIK, AWS KMS doesn't deal with X509 SSL certificates. It only deals with Cryptographic Keys",
          "upvote_count": "2"
        },
        {
          "id": 418267,
          "date": "Wed 03 Nov 2021 23:25",
          "username": "blackgamer",
          "content": "C is correct , A & B not handling to generate cert with instance-id.",
          "upvote_count": "1"
        },
        {
          "id": 345011,
          "date": "Sat 30 Oct 2021 08:56",
          "username": "0103701037",
          "content": "I understand why B can't be the answer, since the very first request violates the policy.<br>But how does the Key management service send signed certificate directly to the newly launched instance?Is customer's Key management service AWS KMS? Or is it inside any VPC? Nothing mentioned about it.<br>If it is, AWS KMS isn't inside any VPC, the B doesn't violates the policy.",
          "upvote_count": "21"
        },
        {
          "id": 345015,
          "date": "Tue 02 Nov 2021 23:09",
          "username": "01037",
          "content": "Is customer's Key management service AWS KMS? Or is it inside any VPC? Nothing mentioned about it.<br>If it is, AWS KMS isn't inside any VPC, the B doesn't violates the policy.",
          "upvote_count": "1"
        },
        {
          "id": 255403,
          "date": "Thu 28 Oct 2021 04:33",
          "username": "lin404",
          "content": "How does SNS send notifications to KMS?",
          "upvote_count": "3"
        },
        {
          "id": 210328,
          "date": "Wed 27 Oct 2021 13:57",
          "username": "newme",
          "content": "To meet the requirements, It has to be C. <br>A.  Not unique for each instance.<br>B.  First request is too insecure.<br>D.  New instance may not have unique certificate before the first request",
          "upvote_count": "2"
        },
        {
          "id": 194659,
          "date": "Sat 23 Oct 2021 05:38",
          "username": "cpal012",
          "content": "Cant be 'C'. KMS doesnt generate certificates, ACM does.",
          "upvote_count": "4"
        },
        {
          "id": 190282,
          "date": "Thu 21 Oct 2021 16:27",
          "username": "srknbngl",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 170443,
          "date": "Thu 21 Oct 2021 06:04",
          "username": "Bulti",
          "content": "Answer is B.  When an EC2 instance that is started communicates with the Trusted Customer managed KMS service, it can use client ID and client secret to send the Certificate Signature request.",
          "upvote_count": "2"
        },
        {
          "id": 151858,
          "date": "Thu 21 Oct 2021 02:00",
          "username": "pddddd",
          "content": "you do not need Auto-scaling group for SNS.<br>B",
          "upvote_count": "2"
        },
        {
          "id": 143850,
          "date": "Mon 18 Oct 2021 06:34",
          "username": "fullaws",
          "content": "C is correct, A & B is not specific to instance, D CA does not have feature of poll CSR and signed. SNS cant work with KMS however, the \\\"trust key management\\\" here refer to third party.",
          "upvote_count": "2"
        },
        {
          "id": 131047,
          "date": "Sun 17 Oct 2021 04:07",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 129133,
          "date": "Fri 15 Oct 2021 01:02",
          "username": "sirmie_slim",
          "content": "C has to be the answer",
          "upvote_count": "2"
        },
        {
          "id": 86668,
          "date": "Tue 12 Oct 2021 06:24",
          "username": "RogerRabbitnewme",
          "content": "I believe it is B.  <br><br>1. as Musk mentions, it is the only option that creates a unique certificate. <br><br>2. it does not violate the requirements since, although the first request is unsigned, it is not a request to a VPC resource. The first unsigned request is to the Customer's key management service which is external to AWS. The question states: \\\"every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated\\\"C also has unique certificate for each instance<br><br>Though the question doesn't mention it, the first request if B is too unsure",
          "upvote_count": "22"
        },
        {
          "id": 210322,
          "date": "Sun 24 Oct 2021 01:23",
          "username": "newme",
          "content": "C also has unique certificate for each instance<br><br>Though the question doesn't mention it, the first request if B is too unsure",
          "upvote_count": "2"
        },
        {
          "id": 75183,
          "date": "Mon 11 Oct 2021 13:52",
          "username": "Joeylee",
          "content": "I would go with C",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company runs a customer facing event registration site This site is built with a 3-tier architecture with web and application tier servers and a MySQL database The application requires 6 web tier servers and 6 application tier servers for normal operation, but can run on a minimum of 65% server capacity and a single MySQL database.<br>When deploying this application in a region with three availability zones (AZs) which architecture provides high availability?</p>",
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
              "choice": "<p>A. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and one RDS (Relational Database Service) Instance deployed with read replicas in the two other AZs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 2 AZs with 3 EC2 instances m each AZ inside an Auto Scaling Group behind an ELS and a Multi-AZ RDS (Relational Database Service) deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ Inside an Auto Scaling Group behind an ELB (elastic load balancer). And an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and a Multi-AZ RDS (Relational Database services) deployment.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 54295,
          "date": "Sat 25 Sep 2021 13:47",
          "username": "virtual",
          "content": "Yes, I think we can consider what remains if we loose one AZ, that is you retrieve your 65% capacity, so D seems correct",
          "upvote_count": "11"
        },
        {
          "id": 628326,
          "date": "Thu 07 Jul 2022 13:01",
          "username": "Bill_Wiiliam",
          "content": "D is the right answer",
          "upvote_count": "1"
        },
        {
          "id": 508049,
          "date": "Thu 23 Dec 2021 17:55",
          "username": "vbal",
          "content": "high availability = Multi-AZ ; D",
          "upvote_count": "1"
        },
        {
          "id": 497766,
          "date": "Thu 09 Dec 2021 14:50",
          "username": "cldy",
          "content": "D.  A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ Inside an Auto Scaling Group behind an ELB (elastic load balancer). And an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and a Multi-AZ RDS (Relational Database services) deployment.",
          "upvote_count": "1"
        },
        {
          "id": 485728,
          "date": "Wed 24 Nov 2021 09:13",
          "username": "acloudguru",
          "content": "to operate at 65%, have 3 AZs with 2 instances each + RDS with Multi-AZ.",
          "upvote_count": "1"
        },
        {
          "id": 406217,
          "date": "Thu 04 Nov 2021 17:47",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "1"
        },
        {
          "id": 346239,
          "date": "Mon 01 Nov 2021 09:10",
          "username": "0103701037",
          "content": "How is availability calculated?I'll chiose D though",
          "upvote_count": "11"
        },
        {
          "id": 346240,
          "date": "Tue 02 Nov 2021 22:29",
          "username": "01037",
          "content": "I'll chiose D though",
          "upvote_count": "1"
        },
        {
          "id": 346237,
          "date": "Sat 23 Oct 2021 04:00",
          "username": "01037",
          "content": "D for sure",
          "upvote_count": "1"
        },
        {
          "id": 324690,
          "date": "Fri 22 Oct 2021 14:58",
          "username": "cldy",
          "content": "D. <br>to operate at 65%, have 3 AZs with 2 instances each + RDS with Multi-AZ.",
          "upvote_count": "1"
        },
        {
          "id": 190284,
          "date": "Thu 21 Oct 2021 05:39",
          "username": "srknbngl",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 131096,
          "date": "Tue 19 Oct 2021 10:50",
          "username": "noisonnoiton",
          "content": "go with D",
          "upvote_count": "1"
        },
        {
          "id": 126609,
          "date": "Sun 17 Oct 2021 19:54",
          "username": "AWSChia",
          "content": "You can follow this link https://aws.amazon.com/rds/features/multi-az/ and scroll down to this section \\\"Multi-AZ deployments, multi-region deployments, and read replicas\\\"to confirm the main purpose for each of them. So, D is a right choice.",
          "upvote_count": "1"
        },
        {
          "id": 126591,
          "date": "Sun 17 Oct 2021 02:09",
          "username": "AWSChia",
          "content": "D is correct. Since you must have \\\"...a minimum of 65% server capacity and a single database\\\"",
          "upvote_count": "1"
        },
        {
          "id": 116952,
          "date": "Sat 16 Oct 2021 18:14",
          "username": "manoj101",
          "content": "D: Read Replica does not create High Availability where as Multi-AZ RDS.",
          "upvote_count": "1"
        },
        {
          "id": 109325,
          "date": "Fri 15 Oct 2021 00:11",
          "username": "KwasiB",
          "content": "I will go with D",
          "upvote_count": "1"
        },
        {
          "id": 96963,
          "date": "Mon 11 Oct 2021 17:40",
          "username": "JAWS1600",
          "content": "Reading it again. I think answer is A.  <br>This is what changed my mind. They are sending tapes to offsite. So we need to find a solution which replaces tapes.A is the only option which provides Glacier, which is alternative to tape solution as per AWS documentation.<br>You can directly backup to glacier using API calls ( not via console). See the following console<br>https://www.msp360.com/resources/blog/compare-amazon-glacier-direct-upload-and-glacier-upload-through-amazon-s3/",
          "upvote_count": "1"
        },
        {
          "id": 94004,
          "date": "Sun 03 Oct 2021 14:47",
          "username": "JAWS1600",
          "content": "It is B.  Yes I agreed with option D , it is using Multi AZ, but that leverages only two AZs. If we loose both these AZs, The DB layer is gone.With Option B, it is using Read replica. RR can be promoted to Active DB, in case 1 or 2 AZs go down.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your customer wishes to deploy an enterprise application to AWS, which will consist of several web servers, several application servers and a small (50GB)<br>Oracle database. Information is stored, both in the database and the file systems of the various servers. The backup system must support database recovery whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database.<br>Which backup architecture will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. Backup RDS using automated daily DB backups. Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Backup RDS using a Multi-AZ Deployment. Backup the EC2 instances using Amis, and supplement by copying file system data to S3 to provide file level restore.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Backup RDS using automated daily DB backups. Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file level restore.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Backup RDS database to S3 using Oracle RMAN. Backup the EC2 instances using Amis, and supplement with EBS snapshots for individual volume restore.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 34813,
          "date": "Wed 22 Sep 2021 02:06",
          "username": "Mm_meawRVivekJJuExtHocldydavideccc",
          "content": "- no need for multi-az<br>- no glacier<br>- rds not support RMAN<br>Then answer left is A. How do we address volume level restore (part of the question)<br>Backup the EC2 instances using AMI-what does this mean ?Really? RDS not support RMAN?<br>i search and find this document.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.RMAN.html@JJubut youmissed note in your provided link clearly mentioned <br>\\\"Currently, RMAN restore isn't supported for Amazon RDS for Oracle DB instances.\\\"why no Glacier? Expedited retrievals in Glacier is within 1-5 minutes.If the question does not specify the Glacier type, we need to assume it's \\\"classic\\\" Glacier with 12 hours retrieval time",
          "upvote_count": "1211311"
        },
        {
          "id": 513241,
          "date": "Thu 30 Dec 2021 11:24",
          "username": "RVivek",
          "content": "How do we address volume level restore (part of the question)<br>Backup the EC2 instances using AMI-what does this mean ?",
          "upvote_count": "1"
        },
        {
          "id": 211708,
          "date": "Wed 13 Oct 2021 13:42",
          "username": "JJuExtHo",
          "content": "Really? RDS not support RMAN?<br>i search and find this document.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.RMAN.html@JJubut youmissed note in your provided link clearly mentioned <br>\\\"Currently, RMAN restore isn't supported for Amazon RDS for Oracle DB instances.\\\"",
          "upvote_count": "13"
        },
        {
          "id": 313759,
          "date": "Sat 23 Oct 2021 08:24",
          "username": "ExtHo",
          "content": "@JJubut youmissed note in your provided link clearly mentioned <br>\\\"Currently, RMAN restore isn't supported for Amazon RDS for Oracle DB instances.\\\"",
          "upvote_count": "3"
        },
        {
          "id": 324694,
          "date": "Wed 27 Oct 2021 02:24",
          "username": "cldydavideccc",
          "content": "why no Glacier? Expedited retrievals in Glacier is within 1-5 minutes.If the question does not specify the Glacier type, we need to assume it's \\\"classic\\\" Glacier with 12 hours retrieval time",
          "upvote_count": "11"
        },
        {
          "id": 684272,
          "date": "Sat 01 Oct 2022 16:39",
          "username": "davideccc",
          "content": "If the question does not specify the Glacier type, we need to assume it's \\\"classic\\\" Glacier with 12 hours retrieval time",
          "upvote_count": "1"
        },
        {
          "id": 695846,
          "date": "Sun 16 Oct 2022 04:30",
          "username": "ashii007",
          "content": "AWS RDS oracle supports RMAN <br>https://aws.amazon.com/blogs/database/automate-amazon-rds-backups-using-the-oracle-rman-utility-and-upload-backup-files-to-amazon-s3/<br><br>Given 2 hour Restore objective, D is a viable option.",
          "upvote_count": "1"
        },
        {
          "id": 684273,
          "date": "Sat 01 Oct 2022 16:40",
          "username": "davideccc",
          "content": "the only answer that fits all the requirements is A",
          "upvote_count": "1"
        },
        {
          "id": 683580,
          "date": "Fri 30 Sep 2022 15:23",
          "username": "emmanuelodenyire",
          "content": "A fits the scenario",
          "upvote_count": "1"
        },
        {
          "id": 624372,
          "date": "Wed 29 Jun 2022 04:14",
          "username": "TechX",
          "content": "Can not be C.  Even Expedited Galicer has retrival time 1-5 minutes (but only with files are < 250MB). Should be A",
          "upvote_count": "2"
        },
        {
          "id": 596494,
          "date": "Wed 04 May 2022 06:03",
          "username": "snakecharmer2",
          "content": "A - full server backup is done using AMI. snapshots are per volume backup.",
          "upvote_count": "1"
        },
        {
          "id": 590095,
          "date": "Fri 22 Apr 2022 17:49",
          "username": "bobsmith2000",
          "content": "C is correct.<br>A) Backup the EC2 instances using AMIs is nonsense. The only reasonable way to back up your instance is snapshots using DLM.<br>B) Multi-AZ deployment is not from a backup opera at all. It's more of HA strategy.<br>D) For using Oracle RMAN the one have to OS level access to DB instance. Which's not the case with RDS.",
          "upvote_count": "1"
        },
        {
          "id": 406218,
          "date": "Fri 05 Nov 2021 10:09",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 346707,
          "date": "Thu 04 Nov 2021 23:29",
          "username": "01037",
          "content": "What does \\\"Backup the EC2 instances using AMIs means?<br>Does it mean snapshot?<br>If so, I support A. ",
          "upvote_count": "1"
        },
        {
          "id": 283094,
          "date": "Thu 21 Oct 2021 17:47",
          "username": "bnagaraja9099",
          "content": "I ll go with A.  No multi az, no glacier. Question says individual file level back up. So no volumes. Leaves S3 and snapshots as best option",
          "upvote_count": "1"
        },
        {
          "id": 215295,
          "date": "Fri 15 Oct 2021 12:25",
          "username": "A_New_Guy",
          "content": "The D is the option correct<br><br>https://aws.amazon.com/about-aws/whats-new/2019/02/Amazon-RDS-for-Oracle-Now-Supports-Amazon-S3-Integration/",
          "upvote_count": "1"
        },
        {
          "id": 170449,
          "date": "Sun 10 Oct 2021 12:10",
          "username": "Bulti",
          "content": "Answer is A: RDS support automated backup to another region. EC2 backup usin AMI and individual files using S3 seems to be the right option.",
          "upvote_count": "2"
        },
        {
          "id": 143858,
          "date": "Thu 07 Oct 2021 08:35",
          "username": "fullaws",
          "content": "A is correct (automatic daily backup, transaction log), (s3 retrieve time)",
          "upvote_count": "3"
        },
        {
          "id": 131097,
          "date": "Thu 30 Sep 2021 14:21",
          "username": "noisonnoiton",
          "content": "go with A",
          "upvote_count": "2"
        },
        {
          "id": 106994,
          "date": "Tue 28 Sep 2021 04:40",
          "username": "JAWS1600",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 94343,
          "date": "Mon 27 Sep 2021 22:22",
          "username": "KB26",
          "content": "Now you can use RMAN with RDS for Backup, but you can't restore it as per: <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.RMAN.html",
          "upvote_count": "2"
        },
        {
          "id": 87349,
          "date": "Sun 26 Sep 2021 07:36",
          "username": "qianhaopower",
          "content": "It is D, you can use RMAN on RDS. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.RMAN.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has HQ in Tokyo and branch offices all over the world and is using a logistics software with a multi-regional deployment on AWS in Japan, Europe and USA.  The logistic software has a 3-tier architecture and currently uses MySQL 5.6 for data persistence. Each region has deployed its own database.<br>In the HQ region you run an hourly batch process reading data from every region to compute cross-regional reports that are sent by email to all offices this batch process must be completed as fast as possible to quickly optimize logistics.<br>How do you build the database architecture in order to meet the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37900,
          "date": "Sun 19 Sep 2021 22:38",
          "username": "amog",
          "content": "Answer is A<br>\\\"as fast as possible\\\" => read replica",
          "upvote_count": "10"
        },
        {
          "id": 695850,
          "date": "Sun 16 Oct 2022 04:35",
          "username": "ashii007",
          "content": "A implies - read replica in a different region that region of master. AWS RDS mysql supports multi -AZ deployment ONLY. It cannot span across multiple regions.",
          "upvote_count": "2"
        },
        {
          "id": 577866,
          "date": "Tue 29 Mar 2022 23:11",
          "username": "jj22222",
          "content": "A.  For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region",
          "upvote_count": "1"
        },
        {
          "id": 406219,
          "date": "Fri 05 Nov 2021 01:06",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 346712,
          "date": "Thu 28 Oct 2021 14:51",
          "username": "01037",
          "content": "A<br>Easy one",
          "upvote_count": "1"
        },
        {
          "id": 324699,
          "date": "Tue 26 Oct 2021 19:42",
          "username": "cldy",
          "content": "A.  <br>Read Replicas for \\\"as fast as possible\\\" requirement.",
          "upvote_count": "1"
        },
        {
          "id": 293651,
          "date": "Tue 19 Oct 2021 05:42",
          "username": "bustedd",
          "content": "A is the right answer here.",
          "upvote_count": "1"
        },
        {
          "id": 143859,
          "date": "Sat 16 Oct 2021 11:14",
          "username": "fullaws",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 131101,
          "date": "Mon 04 Oct 2021 20:00",
          "username": "noisonnoiton",
          "content": "go with A",
          "upvote_count": "2"
        },
        {
          "id": 49676,
          "date": "Thu 23 Sep 2021 09:40",
          "username": "BillyC",
          "content": "A is Correct",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files They wish to move this system to AWS to make it more scalable, but they wish to maintain customer privacy and Keep costs to a minimum.<br>What AWS architecture would you recommend?</p>",
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
              "choice": "<p>A. ASK their customers to use an S3 client instead of an FTP client. Create a single S3 bucket Create an IAM user for each customer Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the 'username' Policy variable.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an auto-scaling group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of ftp users from S3 as part of the user Data startup script on each Instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket tor each customer with a Bucket Policy that permits access only to that one customer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 32580,
          "date": "Tue 05 Oct 2021 17:24",
          "username": "CSharpPro",
          "content": "A - Default Bucket Limit of 100 per account invalidates B",
          "upvote_count": "10"
        },
        {
          "id": 671223,
          "date": "Sat 17 Sep 2022 05:15",
          "username": "kaushik9845",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html100 buckets per account is default limit which can be increased to max 1000. So if we go with B its not scalable beyond limit.",
          "upvote_count": "1"
        },
        {
          "id": 637718,
          "date": "Wed 27 Jul 2022 03:20",
          "username": "hilft",
          "content": "why not b?",
          "upvote_count": "1"
        },
        {
          "id": 499335,
          "date": "Sat 11 Dec 2021 11:38",
          "username": "cldy",
          "content": "A.  ASK their customers to use an S3 client instead of an FTP client. Create a single S3 bucket Create an IAM user for each customer Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the 'username' Policy variable.",
          "upvote_count": "1"
        },
        {
          "id": 346713,
          "date": "Wed 03 Nov 2021 22:16",
          "username": "01037",
          "content": "A is the solution.<br>But in reality, customers won't like to change their tools unless a really good reason.",
          "upvote_count": "2"
        },
        {
          "id": 211006,
          "date": "Wed 03 Nov 2021 10:09",
          "username": "newme",
          "content": "A. <br>But 250 IAM users is a little too many.<br>I think Identity federation may be a better option.",
          "upvote_count": "2"
        },
        {
          "id": 203280,
          "date": "Sun 31 Oct 2021 00:50",
          "username": "TerrenceC",
          "content": "Here is another two inputs that RRS might not be an ideal option.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html<br>\\\"We recommend that you not use this storage class. The S3 Standard storage class is more cost effective\\\"<br><br>Also, when you look at the pricing between Standard and RRS then you would observe that RRS is a bit more expensive than Standard.",
          "upvote_count": "1"
        },
        {
          "id": 201838,
          "date": "Mon 25 Oct 2021 14:57",
          "username": "Amitv2706",
          "content": "This question has not mentioned about reduced redundancy storage requirements then perhaps B can't be the best fit.",
          "upvote_count": "1"
        },
        {
          "id": 188547,
          "date": "Sun 24 Oct 2021 22:01",
          "username": "smartassX",
          "content": "100 by Default;limit increase up to 1000. <br>\\\"By default, you can create up to 100 buckets in each of your AWS accounts. If you need additional buckets, you can increase your account bucket limit to a maximum of 1,000 buckets by submitting a service limit increase. There is no difference in performance whether you use many buckets or just a few. \\\" <br>https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html",
          "upvote_count": "1"
        },
        {
          "id": 170454,
          "date": "Thu 21 Oct 2021 14:36",
          "username": "Bulti",
          "content": "A is Correct - B is not scalable when no of customers exceed the limit on buckets per account.",
          "upvote_count": "2"
        },
        {
          "id": 149830,
          "date": "Mon 18 Oct 2021 11:07",
          "username": "kratnesh",
          "content": "Answer B.  The default now is 1000 buckets per account",
          "upvote_count": "3"
        },
        {
          "id": 143862,
          "date": "Tue 12 Oct 2021 22:16",
          "username": "fullaws",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 131102,
          "date": "Mon 11 Oct 2021 05:01",
          "username": "noisonnoiton",
          "content": "go with A",
          "upvote_count": "3"
        },
        {
          "id": 49678,
          "date": "Fri 08 Oct 2021 15:31",
          "username": "BillyC",
          "content": "A is Correct!",
          "upvote_count": "2"
        },
        {
          "id": 37901,
          "date": "Thu 07 Oct 2021 15:19",
          "username": "amog",
          "content": "Answer is A<br>B: Limit 100 buckets<br>C: Too expensive<br>D: Limit 100 buckets",
          "upvote_count": "4"
        },
        {
          "id": 19812,
          "date": "Tue 05 Oct 2021 12:06",
          "username": "pra276",
          "content": "Correct answer is A",
          "upvote_count": "2"
        },
        {
          "id": 17060,
          "date": "Wed 29 Sep 2021 15:47",
          "username": "Pupina",
          "content": "Why? I think B is more cost and less durability",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You would like to create a mirror image of your production environment in another region for disaster recovery purposes.<br>Which of the following AWS resources do not need to be recreated in the second region? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Route 53 Record Sets<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. IAM Roles<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Elastic IP Addresses (EIP)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. EC2 Key Pairs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Launch configurations<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Security Groups<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 324912,
          "date": "Tue 21 Sep 2021 07:09",
          "username": "cldy01037",
          "content": "A.  B. <br>IAM & R53 are global services.Agreed",
          "upvote_count": "91"
        },
        {
          "id": 346714,
          "date": "Sat 02 Oct 2021 06:05",
          "username": "01037",
          "content": "Agreed",
          "upvote_count": "1"
        },
        {
          "id": 706744,
          "date": "Fri 28 Oct 2022 22:13",
          "username": "Cal88",
          "content": "A and B<br>Even though technically you can use use the same c2 key pair across region but its not best practice for security reasons so I would go with A and B",
          "upvote_count": "1"
        },
        {
          "id": 648522,
          "date": "Thu 18 Aug 2022 18:36",
          "username": "Ni_yot",
          "content": "Yeb A and B being global service dont need replicating",
          "upvote_count": "1"
        },
        {
          "id": 577732,
          "date": "Tue 29 Mar 2022 18:42",
          "username": "jj22222",
          "content": "AB look right",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO is strongly agreeing to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to help improve Business continuity in the short term. He specifies a target Recovery Time<br>Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks.<br>Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?</p>",
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
              "choice": "<p>A. Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELB resources to support deploying the application across Multiple- Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on- premises database to a database instance in AWS across a secure VPN connection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 506109,
          "date": "Tue 21 Dec 2021 13:54",
          "username": "saptati",
          "content": "C is not the r8 option. What if the DR stikes while copying the DB dumps to S3, it won't be able to fulfil the RPO of 1 hour or less. Becoz the DB copy is sent every 1 hour and also it will take some time to copy the dumps to S3. In that case, the latest copy available will be 2 hrs back. <br>Also, we can eliminate B as it doesn't talk abt AMI backup and D, as well becoz Direct connect, is expensive. <br>Thus, the r8 answer is A. ",
          "upvote_count": "12"
        },
        {
          "id": 324302,
          "date": "Thu 30 Sep 2021 11:03",
          "username": "DgixYahowmy",
          "content": "C.  No mention is made of migrating the database, only of preparing for a DR situation.There is a requirement of moving to AWS.",
          "upvote_count": "51"
        },
        {
          "id": 391912,
          "date": "Tue 02 Nov 2021 09:23",
          "username": "Yahowmy",
          "content": "There is a requirement of moving to AWS.",
          "upvote_count": "1"
        },
        {
          "id": 684279,
          "date": "Sat 01 Oct 2022 16:50",
          "username": "davideccc",
          "content": "A and B are similar but B is active-active while A leverages a cloudformation template to spin up and start the environment. This is a key point since one of the requirements is to minimize cost and RTO is 4 hours. With this timeframe you will be comfortably re-create your environment with Cloudformation and save a lot of money since you don't need to keep the EC2 up and running 24/7",
          "upvote_count": "1"
        },
        {
          "id": 671230,
          "date": "Sat 17 Sep 2022 05:35",
          "username": "kaushik9845",
          "content": "To move 200GB data with 20Mbps it takes ~22 days. 200*8(bits)*1000M/20M/60min*60s..How can a db setup be done in aws in 2 weeks?",
          "upvote_count": "1"
        },
        {
          "id": 641952,
          "date": "Wed 03 Aug 2022 16:30",
          "username": "fukami_ymir",
          "content": "I think it's B.  C is bad since backup to S3 required a lot of time and won't fit the RPO at all. A is good but the question wants a temporary solution with lower cost so ELB is not necessary.",
          "upvote_count": "2"
        },
        {
          "id": 635819,
          "date": "Sun 24 Jul 2022 02:37",
          "username": "hilft",
          "content": "Confused.<br>C seems an option with DR,<br>A is something more with migration and DR.<br>Forum seems to go for C",
          "upvote_count": "1"
        },
        {
          "id": 591758,
          "date": "Mon 25 Apr 2022 15:57",
          "username": "virtual",
          "content": "RTO=4 and RPO <=1. So:<br>D with sync. replication is wrong because not accurate with RPO and would result in high costing ...<br>C (full)back ups the local database: this is not a solution for an RPO of approx. one hour.<br>A and B are both async. replication (that is good). The difference is A going with CloudFormation, so my choice is A. ",
          "upvote_count": "1"
        },
        {
          "id": 526202,
          "date": "Tue 18 Jan 2022 01:35",
          "username": "tkanmani76",
          "content": "C preserves 1 hr backup data - When DR happens we can use that backup to restore instance. This the only option which maps to RPO of 1hr.<br>In case of A - when DR happens we can use the AMI to setup the instance. We havent got any snapshot of data in this case and we have replicate the full 200GB data - doesnt look good considering the bandwidth availability.",
          "upvote_count": "1"
        },
        {
          "id": 501981,
          "date": "Wed 15 Dec 2021 09:23",
          "username": "dv1",
          "content": "Question asks for a short term DR solution UNTIL the AWS Migration is approved by all stakeholders. I will go C. ",
          "upvote_count": "1"
        },
        {
          "id": 415369,
          "date": "Sun 07 Nov 2021 14:32",
          "username": "Madhu654javiems",
          "content": "A,B are incorrect with a 20Mbps internet connection you can copy as much a 50GB of data within 2 weeks<br><br>Answer is C<br>C hourly backup to S3 seems a viable option<br><br>D could have been correct if there isn't a 2week time constraint.. Direct Connect connections can take anytime between 2weeks to month to setup20 Mbps = 2 MBps approx.2 x 60 seconds x 60 minutes x 24 hours = 172.800 MBps (172 GB approx)",
          "upvote_count": "11"
        },
        {
          "id": 489712,
          "date": "Mon 29 Nov 2021 09:46",
          "username": "javiems",
          "content": "20 Mbps = 2 MBps approx.2 x 60 seconds x 60 minutes x 24 hours = 172.800 MBps (172 GB approx)",
          "upvote_count": "1"
        },
        {
          "id": 331247,
          "date": "Mon 18 Oct 2021 16:32",
          "username": "ExtHo",
          "content": "A https://jayendrapatil.com/tag/disaster-recovery/",
          "upvote_count": "2"
        },
        {
          "id": 327253,
          "date": "Fri 01 Oct 2021 09:35",
          "username": "tbolardli01037",
          "content": "As per the question, RTO is 4 and RPO is 1 hr. How option A confirms the RPO? Where as Option C confirming that.The database has asynchronous replication all the time. Only the web tier is launched during DR to meet RTO.Maybe.<br>But 200G data in S3, could it meet the requirement of RTO with 20Mbps bandwidth?<br><br>I support A, though it should mention backup plan.",
          "upvote_count": "211"
        },
        {
          "id": 411319,
          "date": "Thu 04 Nov 2021 04:01",
          "username": "dli",
          "content": "The database has asynchronous replication all the time. Only the web tier is launched during DR to meet RTO.",
          "upvote_count": "1"
        },
        {
          "id": 346718,
          "date": "Thu 28 Oct 2021 20:42",
          "username": "01037",
          "content": "Maybe.<br>But 200G data in S3, could it meet the requirement of RTO with 20Mbps bandwidth?<br><br>I support A, though it should mention backup plan.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise's account The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege and there must be controls in place to ensure that the credentials used by the SaaS vendor cannot be used by any other third party.<br>Which of the following would meet all of these conditions?</p>",
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
              "choice": "<p>A. From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user within the enterprise account assign a user policy to the IAM user that allows only the actions required by the SaaS application create a new access and secret key for the user and provide these credentials to the SaaS provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role for cross-account access allows the SaaS provider's account to assume the role and assign it a policy that allows only the actions required by the SaaS application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role for EC2 instances, assign it a policy that allows only the actions required tor the SaaS application to work, provide the role ARN to the SaaS provider to use when launching their application instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37903,
          "date": "Thu 23 Sep 2021 02:04",
          "username": "amog",
          "content": "Answer is C<br>You should not give any credentials to SaaS, because they can give it to the other",
          "upvote_count": "13"
        },
        {
          "id": 684281,
          "date": "Sat 01 Oct 2022 16:55",
          "username": "davideccc",
          "content": "the doubt could be if the SaaS has an AWS account, but this piece of information excludes B<br>\\\"ensure that the credentials used by the SaaS vendor cannot be used by any other third party\\\"<br>i.e. the correct answer is C",
          "upvote_count": "1"
        },
        {
          "id": 612949,
          "date": "Wed 08 Jun 2022 00:26",
          "username": "KengL",
          "content": "C is mostly correct answer, if there is mention of ExternalID.  Still go with C",
          "upvote_count": "1"
        },
        {
          "id": 590114,
          "date": "Fri 22 Apr 2022 18:33",
          "username": "bobsmith2000davidecccbobsmith2000",
          "content": "B. <br>As long as there aren't any mentions that a third-party SaaS application has AWS account, C can't be correct! Otherwise it would be C. \\\"ensure that the credentials used by the SaaS vendor cannot be used by any other third party\\\" this invalidates B.  the access key can be used by anyoneIt should be C, because B doesn't allow any ec2 actions.<br>But the concerns are the same",
          "upvote_count": "112"
        },
        {
          "id": 684280,
          "date": "Sat 01 Oct 2022 16:53",
          "username": "davideccc",
          "content": "\\\"ensure that the credentials used by the SaaS vendor cannot be used by any other third party\\\" this invalidates B.  the access key can be used by anyone",
          "upvote_count": "1"
        },
        {
          "id": 612245,
          "date": "Mon 06 Jun 2022 09:43",
          "username": "bobsmith2000",
          "content": "It should be C, because B doesn't allow any ec2 actions.<br>But the concerns are the same",
          "upvote_count": "2"
        },
        {
          "id": 488991,
          "date": "Sun 28 Nov 2021 09:42",
          "username": "acloudguru",
          "content": "this one is easy, hope I can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 442752,
          "date": "Mon 01 Nov 2021 08:37",
          "username": "kashi1983",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 406233,
          "date": "Sat 30 Oct 2021 14:08",
          "username": "Akhil254",
          "content": "C Correct",
          "upvote_count": "1"
        },
        {
          "id": 346723,
          "date": "Tue 26 Oct 2021 16:05",
          "username": "01037",
          "content": "Should be C",
          "upvote_count": "1"
        },
        {
          "id": 170481,
          "date": "Tue 12 Oct 2021 07:12",
          "username": "Bulti",
          "content": "C is correct. Although the question doesn't mention that the SaaS provider is in AWS, the option mentions the use of AWS account by the SaaS provider and therefore C is the right answer.",
          "upvote_count": "1"
        },
        {
          "id": 148518,
          "date": "Mon 11 Oct 2021 17:09",
          "username": "RyanGhavidel",
          "content": "B, since the SaaS app does not have an account, it should not be able to assume a role",
          "upvote_count": "2"
        },
        {
          "id": 144183,
          "date": "Mon 11 Oct 2021 15:47",
          "username": "guptas",
          "content": "Although C looks appropriate but in ques nowhere it is given that saas appn has aws account.",
          "upvote_count": "2"
        },
        {
          "id": 143871,
          "date": "Sat 09 Oct 2021 17:21",
          "username": "fullaws",
          "content": "C is answer, access keys does not grant use by one third party, IAM role for the ec2 introduce uncommon and complexity on SaaS application (which not likely to change to meet a specific customer), as the SaaS application need to ssh to the target ec2 and call the AWS API.",
          "upvote_count": "2"
        },
        {
          "id": 131109,
          "date": "Sun 03 Oct 2021 04:15",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        },
        {
          "id": 117915,
          "date": "Sat 02 Oct 2021 07:38",
          "username": "manoj101newme",
          "content": "D looks correct as for C to work SAAS needs to have account on AWS & it's not mentioned any where.I don't think the question is accurate either.<br>But since it is SaaS, the service provider won't install their software in you EC2 instance, will they?",
          "upvote_count": "21"
        },
        {
          "id": 211019,
          "date": "Tue 26 Oct 2021 11:34",
          "username": "newme",
          "content": "I don't think the question is accurate either.<br>But since it is SaaS, the service provider won't install their software in you EC2 instance, will they?",
          "upvote_count": "1"
        },
        {
          "id": 97689,
          "date": "Fri 01 Oct 2021 09:49",
          "username": "meenu2225meenu2225",
          "content": "I think it is D, it cannot be C, as the option says \\\"Cross account Role\\\", there is no mention of multiple accounts in the question. It cannot be B as it is not the best practice.Correct, C looks better.",
          "upvote_count": "21"
        },
        {
          "id": 108171,
          "date": "Sat 02 Oct 2021 04:38",
          "username": "meenu2225",
          "content": "Correct, C looks better.",
          "upvote_count": "1"
        },
        {
          "id": 87975,
          "date": "Thu 30 Sep 2021 14:58",
          "username": "aandavan",
          "content": "There is nowhere it was mentioned that SaaS runs in AWS.",
          "upvote_count": "3"
        },
        {
          "id": 51627,
          "date": "Thu 23 Sep 2021 13:29",
          "username": "cloudinvader",
          "content": "Not A and B As access and secret key can be used by any other third party If shared by SaaS application.<br>Not D as IAM role for EC2 instance used by half accessing other AWS resources<br>Yes C as Cross-account access has Principal as part of Trusted Policy.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer has a 10 GB AWS Direct Connect connection to an AWS region where they have a web application hosted on Amazon Elastic Computer Cloud (EC2).<br>The application has dependencies on an on-premises mainframe database that uses a BASE (Basic Available, Soft state, Eventual consistency) rather than an<br>ACID (Atomicity, Consistency, Isolation, Durability) consistency model. The application is exhibiting undesirable behavior because the database is not able to handle the volume of writes.<br>How can you reduce the load on your on-premises database resources in the most cost-effective way?</p>",
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
              "choice": "<p>A. Use an Amazon Elastic Map Reduce (EMR) S3DistCp as a synchronization mechanism between the on-premises database and a Hadoop cluster on AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the application to use DynamoDB to feed an EMR cluster which uses a map function to write to the on-premises database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an RDS read-replica database on AWS to handle the writes and synchronize the two databases using Data Pipeline.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 12650,
          "date": "Tue 21 Sep 2021 12:39",
          "username": "Moonmanoj101",
          "content": "I agree...answer is B:<br>http://jayendrapatil.com/aws-sqs-simple-queue-service/#targetText=A%20customer%20has%20a%2010,Elastic%20Computer%20Cloud%20(EC2).&targetText=The%20application%20is%20exhibiting%20undesirable,handle%20the%20volume%20of%20writes.Cost effective solution is another reason to go with B",
          "upvote_count": "184"
        },
        {
          "id": 117922,
          "date": "Mon 04 Oct 2021 13:16",
          "username": "manoj101",
          "content": "Cost effective solution is another reason to go with B",
          "upvote_count": "4"
        },
        {
          "id": 11199,
          "date": "Sun 19 Sep 2021 22:01",
          "username": "piotr",
          "content": "A is wrong - S3DistCp is used between HDFS and S3, not a database. I would go with B (SQS to flaten write request rate to DB).",
          "upvote_count": "18"
        },
        {
          "id": 647731,
          "date": "Tue 16 Aug 2022 17:33",
          "username": "Ni_yot",
          "content": "B for me.Eventual consistency = SQS",
          "upvote_count": "1"
        },
        {
          "id": 612990,
          "date": "Wed 08 Jun 2022 02:47",
          "username": "kangtamo",
          "content": "Go with B",
          "upvote_count": "1"
        },
        {
          "id": 552209,
          "date": "Sun 20 Feb 2022 20:29",
          "username": "johnnsmith",
          "content": "C is correct. Eventual consistency implys multiple nodes. Map function writes to all nodes in parallel.",
          "upvote_count": "1"
        },
        {
          "id": 406235,
          "date": "Sat 06 Nov 2021 02:08",
          "username": "Akhil254",
          "content": "B Correct",
          "upvote_count": "1"
        },
        {
          "id": 347758,
          "date": "Mon 01 Nov 2021 08:01",
          "username": "01037",
          "content": "Has to be B",
          "upvote_count": "1"
        },
        {
          "id": 324997,
          "date": "Fri 29 Oct 2021 12:25",
          "username": "cldy",
          "content": "B. <br>SQS good to absorb writes + also cost effective",
          "upvote_count": "1"
        },
        {
          "id": 269221,
          "date": "Sat 16 Oct 2021 03:26",
          "username": "MHKyaw",
          "content": "I go with B",
          "upvote_count": "1"
        },
        {
          "id": 211053,
          "date": "Thu 14 Oct 2021 20:30",
          "username": "newme",
          "content": "Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 143876,
          "date": "Sun 10 Oct 2021 07:04",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "3"
        },
        {
          "id": 131110,
          "date": "Tue 05 Oct 2021 21:55",
          "username": "noisonnoiton",
          "content": "go with B",
          "upvote_count": "2"
        },
        {
          "id": 51630,
          "date": "Tue 28 Sep 2021 15:25",
          "username": "cloudinvader",
          "content": "Yes Agree B should the answer, As we are looking for \\\"Cost-effective\\\" way for BASE DB that can bare few latencies.",
          "upvote_count": "5"
        },
        {
          "id": 37906,
          "date": "Tue 28 Sep 2021 13:33",
          "username": "amog",
          "content": "Answer is B",
          "upvote_count": "5"
        },
        {
          "id": 17402,
          "date": "Mon 27 Sep 2021 20:29",
          "username": "Warrenn",
          "content": "Answer is B",
          "upvote_count": "6"
        },
        {
          "id": 13020,
          "date": "Fri 24 Sep 2021 21:23",
          "username": "SivaG",
          "content": "Answer is B",
          "upvote_count": "8"
        }
      ]
    },
    {
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are responsible for a legacy web application whose server environment is approaching end of life You would like to migrate this application to AWS as quickly as possible, since the application environment currently has the following limitations:<br>✑ The VM's single 10GB VMDK is almost full;<br>✑ Me virtual network interface still uses the 10Mbps driver, which leaves your 100Mbps WAN connection completely underutilized;<br>✑ It is currently running on a highly customized. Windows VM within a VMware environment;<br>✑ You do not have me installation media;<br>This is a mission critical application with an RTO (Recovery Time Objective) of 8 hours. RPO (Recovery Point Objective) of 1 hour.<br>How could you best migrate this application to AWS while meeting your business continuity requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. Use the EC2 VM Import Connector for vCenter to import the VM into EC2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Import/Export to import the VM as an ESS snapshot and attach to EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 to create a backup of the VM and restore the data into EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use me ec2-bundle-instance API to Import an Image of the VM into EC2<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37908,
          "date": "Sun 19 Sep 2021 20:07",
          "username": "amog",
          "content": "Answer is A<br>EC2 VM Import/Export enables importing virtual machine (VM) images from existing virtualization environment to EC2, and then export them back<br>EC2 VM Import/Export enables<br>migration of applications and workloads to EC2,<br>coping VM image catalog to EC2, or<br>create a repository of VM images for backup and disaster recovery<br>to leverage previous investments in building VMs by migrating your VMs to EC2.<br>The supported file formats are: VMware ESX VMDK images, Citrix Xen VHD images, Microsoft Hyper-V VHD images, and RAW images<br>For VMware vSphere, AWS Connector for vCenter can be used to export a VM from VMware and import it into Amazon EC2<br>For Microsoft Systems Center, AWS Systems Manager for Microsoft SCVMM can be used to import Windows VMs from SCVMM to EC2",
          "upvote_count": "12"
        },
        {
          "id": 580870,
          "date": "Mon 04 Apr 2022 19:50",
          "username": "roka_ua",
          "content": "Vote A",
          "upvote_count": "1"
        },
        {
          "id": 406237,
          "date": "Sat 06 Nov 2021 07:30",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "1"
        },
        {
          "id": 347764,
          "date": "Fri 05 Nov 2021 02:12",
          "username": "01037",
          "content": "A is the better solution",
          "upvote_count": "1"
        },
        {
          "id": 325494,
          "date": "Wed 03 Nov 2021 08:01",
          "username": "cldy",
          "content": "A. <br>https://aws.amazon.com/about-aws/whats-new/2011/03/04/Announcing-VMImport-Connector/<br>https://aws.amazon.com/blogs/aws/ec2-vm-import-connector/",
          "upvote_count": "1"
        },
        {
          "id": 143878,
          "date": "Sun 31 Oct 2021 09:20",
          "username": "fullaws",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 136173,
          "date": "Tue 26 Oct 2021 14:02",
          "username": "DuyPhanfcbflo",
          "content": "initially, i go with A, but there is no \\\"EC2 VM Import Connector for vCenter\\\"<br>There is only have Server Migration Connector which used to migrate on-premise VM to AWS.<br>So, i go with Bhttps://aws.amazon.com/de/blogs/aws/ec2-vm-import-connector/",
          "upvote_count": "14"
        },
        {
          "id": 139116,
          "date": "Fri 29 Oct 2021 07:05",
          "username": "fcbflo",
          "content": "https://aws.amazon.com/de/blogs/aws/ec2-vm-import-connector/",
          "upvote_count": "4"
        },
        {
          "id": 131112,
          "date": "Mon 18 Oct 2021 04:09",
          "username": "noisonnoiton",
          "content": "go with A",
          "upvote_count": "1"
        },
        {
          "id": 113030,
          "date": "Mon 18 Oct 2021 01:03",
          "username": "ricoyaokhksoma",
          "content": "My answer is A.  Import/Export which is called Snowball, is used to transfer large amount of dataThis isVM Import/Export and not AWS import export,A is still the right answer",
          "upvote_count": "13"
        },
        {
          "id": 132262,
          "date": "Fri 22 Oct 2021 10:18",
          "username": "khksoma",
          "content": "This isVM Import/Export and not AWS import export,A is still the right answer",
          "upvote_count": "3"
        },
        {
          "id": 107013,
          "date": "Sun 10 Oct 2021 19:31",
          "username": "JAWS1600",
          "content": "B is the answer.",
          "upvote_count": "2"
        },
        {
          "id": 107006,
          "date": "Sun 10 Oct 2021 16:48",
          "username": "JAWS1600wlc90210meenu2225",
          "content": "B<br>is the right answerSomeone needs to ban this guyBig time",
          "upvote_count": "1176"
        },
        {
          "id": 107333,
          "date": "Mon 11 Oct 2021 17:41",
          "username": "wlc90210meenu2225",
          "content": "Someone needs to ban this guyBig time",
          "upvote_count": "176"
        },
        {
          "id": 108177,
          "date": "Thu 14 Oct 2021 04:50",
          "username": "meenu2225",
          "content": "Big time",
          "upvote_count": "6"
        },
        {
          "id": 49907,
          "date": "Sat 25 Sep 2021 20:52",
          "username": "BillyC",
          "content": "A is Correct!",
          "upvote_count": "3"
        },
        {
          "id": 40592,
          "date": "Thu 23 Sep 2021 01:03",
          "username": "EricZhangkakashi",
          "content": "I understand A definitely is better but wonder why B is incorrect? Is it simply because an EBS snapshot cannot be directly attach to EC2?That is what I think too, it should be S3 first.",
          "upvote_count": "22"
        },
        {
          "id": 69588,
          "date": "Wed 29 Sep 2021 05:19",
          "username": "kakashi",
          "content": "That is what I think too, it should be S3 first.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS customer runs a public blogging website. The site users upload two million blog entries a month. The average blog entry size is 200 KB.  The access rate to blog entries drops to negligible 6 months after publication and users rarely access a blog entry 1 year after publication. Additionally, blog entries have a high update rate during the first 3 months following publication, this drops to no updates after 6 months.The customer wants to use CloudFront to improve his user's load times.<br>Which of the following recommendations would you make to the customer?</p>",
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
              "choice": "<p>A. Duplicate entries into two different buckets and create two separate CloudFront distributions where S3 access is restricted only to Cloud Front identity<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFront distribution with ג€US Europeג€ price class for US/Europe users and a different CloudFront distribution with ג€All Edge Locationsג€ for the remaining users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry's location in S3 according to the month it was uploaded to be used with CloudFront behaviors.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFront distribution with Restrict Viewer Access Forward Query string set to true and minimum TTL of 0.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 49908,
          "date": "Tue 21 Sep 2021 13:18",
          "username": "BillyCuser0001",
          "content": "Hi, Is C the correct answer?it is the only option that make sense",
          "upvote_count": "161"
        },
        {
          "id": 599784,
          "date": "Wed 11 May 2022 00:54",
          "username": "user0001",
          "content": "it is the only option that make sense",
          "upvote_count": "1"
        },
        {
          "id": 51431,
          "date": "Fri 24 Sep 2021 02:08",
          "username": "Gorha",
          "content": "Yes, C is correct!",
          "upvote_count": "8"
        },
        {
          "id": 496624,
          "date": "Wed 08 Dec 2021 09:06",
          "username": "cldy",
          "content": "C.  Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry's location in S3 according to the month it was uploaded to be used with CloudFront behaviors.",
          "upvote_count": "1"
        },
        {
          "id": 483860,
          "date": "Mon 22 Nov 2021 05:33",
          "username": "acloudguru",
          "content": "j'espere to have such simple question in my exam",
          "upvote_count": "1"
        },
        {
          "id": 347772,
          "date": "Thu 28 Oct 2021 14:25",
          "username": "01037",
          "content": "Yes it's C. <br>Thought the question is about S3 storage class at first",
          "upvote_count": "1"
        },
        {
          "id": 326296,
          "date": "Sat 16 Oct 2021 22:39",
          "username": "AJ41185",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 325497,
          "date": "Sat 16 Oct 2021 22:10",
          "username": "cldy",
          "content": "C seems correct of all.",
          "upvote_count": "1"
        },
        {
          "id": 293739,
          "date": "Tue 12 Oct 2021 14:20",
          "username": "bustedd",
          "content": "ccccccc",
          "upvote_count": "1"
        },
        {
          "id": 211252,
          "date": "Thu 07 Oct 2021 23:09",
          "username": "newme01037",
          "content": "Why does \\\"partition the blog entry's location in S3 according to the month it was uploaded\\\" help?To improve request rate.<br>your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per prefix in a bucket.",
          "upvote_count": "14"
        },
        {
          "id": 347771,
          "date": "Fri 22 Oct 2021 23:18",
          "username": "01037",
          "content": "To improve request rate.<br>your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per prefix in a bucket.",
          "upvote_count": "4"
        },
        {
          "id": 143882,
          "date": "Tue 05 Oct 2021 14:44",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "2"
        },
        {
          "id": 131130,
          "date": "Wed 29 Sep 2021 22:45",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are implementing a URL whitelisting system for a company that wants to restrict outbound HTTP'S connections to specific domains from their EC2-hosted applications. You deploy a single EC2 instance running proxy software and configure It to accept traffic from all subnets and EC2 instances in the VPC.  You configure the proxy to only pass through traffic to domains that you define in its whitelist configuration. You have a nightly maintenance window or 10 minutes where all instances fetch new software updates. Each update Is about 200MB In size and there are 500 instances In the VPC that routinely fetch updates. After a few days you notice that some machines are failing to successfully download some, but not all of their updates within the maintenance window. The download<br>URLs used for these updates are correctly listed in the proxy's whitelist configuration and you are able to access them manually using a web browser on the instances.<br>What might be happening? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>A. You are running the proxy on an undersized EC2 instance type so network throughput is not sufficient for all instances to download their updates in time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. You are running the proxy on a sufficiently-sized EC2 instance in a private subnet and its network throughput is being throttled by a NAT running on an undersized EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The route table for the subnets containing the affected EC2 instances is not configured to direct network traffic for the software update locations to the proxy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You have not allocated enough storage to the EC2 instance running the proxy so the network buffer is filling up, causing some requests to fail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. You are running the proxy in a public subnet but have not allocated enough EIPs to support the needed network throughput through the Internet Gateway (IGW).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 325509,
          "date": "Thu 23 Sep 2021 18:40",
          "username": "cldy",
          "content": "A.  B. <br>possible reasons for the \\\"failing to successfully download some, but not all of their updates\\\" requirement.",
          "upvote_count": "6"
        },
        {
          "id": 625640,
          "date": "Fri 01 Jul 2022 10:03",
          "username": "TechX",
          "content": "Answer: AB<br>Explanation: http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-ec2-config.html",
          "upvote_count": "1"
        },
        {
          "id": 508936,
          "date": "Sat 25 Dec 2021 03:42",
          "username": "Juks",
          "content": "A and B<br>https://acloud.guru/forums/aws-certified-solutions-architect-professional/discussion/-KGXk5Feqh4hQm1Bjt9U/tricky_network_question",
          "upvote_count": "1"
        },
        {
          "id": 348694,
          "date": "Wed 03 Nov 2021 16:40",
          "username": "01037",
          "content": "I'll choose A&B. <br>D looks like a correct answer, but I think it depends on the proxy software and nothing is mentioned about it.",
          "upvote_count": "1"
        },
        {
          "id": 340756,
          "date": "Tue 02 Nov 2021 13:44",
          "username": "Malcnorth59sTeVe86",
          "content": "A.  E.  Is the answerE is incorrect, otherwise all failed.",
          "upvote_count": "11"
        },
        {
          "id": 547827,
          "date": "Tue 15 Feb 2022 16:09",
          "username": "sTeVe86",
          "content": "E is incorrect, otherwise all failed.",
          "upvote_count": "1"
        },
        {
          "id": 329198,
          "date": "Tue 28 Sep 2021 14:38",
          "username": "kenkool",
          "content": "AD is the answer",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Company B is launching a new game app for mobile devices. Users will log into the game using their existing social media account to streamline data capture.<br>Company B would like to directly save player data and scoring information from the mobile app to a DynamoDS table named Score Data When a user saves their game the progress data will be stored to the Game state S3 bucket.<br>What is the best approach for storing data to DynamoDB and S3?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>A. Use an EC2 Instance that is launched with an EC2 role providing access to the Score Data DynamoDB table and the GameState S3 bucket that communicates with the mobile app via web services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use temporary security credentials that assume a role providing access to the Score Data DynamoDB table and the Game State S3 bucket using web identity federation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Login with Amazon allowing users to sign in with an Amazon account providing the mobile app with access to the Score Data DynamoDB table and the Game State S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an IAM user with access credentials assigned a role providing access to the Score Data DynamoDB table and the Game State S3 bucket for distribution with the mobile app.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 325512,
          "date": "Thu 30 Sep 2021 00:00",
          "username": "cldy",
          "content": "B. <br>Web Identity Federation is the right way to store data in DynamoDB & S3 using existing social identities.",
          "upvote_count": "6"
        },
        {
          "id": 349107,
          "date": "Tue 02 Nov 2021 04:12",
          "username": "01037",
          "content": "B for sure",
          "upvote_count": "1"
        },
        {
          "id": 340758,
          "date": "Wed 13 Oct 2021 00:32",
          "username": "Malcnorth59",
          "content": "B.  Is the answer",
          "upvote_count": "1"
        },
        {
          "id": 328852,
          "date": "Mon 04 Oct 2021 11:13",
          "username": "M_Asep",
          "content": "B definately",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL.<br>Which are the best approaches to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Deploy ElastiCache in-memory cache running in each availability zone<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement sharding to distribute load to multiple RDS MySQL instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the RDS MySQL Instance size and Implement provisioned IOPS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an RDS MySQL read replica in each availability zone<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 49910,
          "date": "Tue 21 Sep 2021 02:36",
          "username": "BillyC",
          "content": "Yes. A and D",
          "upvote_count": "16"
        },
        {
          "id": 711687,
          "date": "Sat 05 Nov 2022 11:44",
          "username": "RRRichard",
          "content": "Dont understand why not B and C?<br>the question is about high writes and reads, how could D meet the requiement with only read replica?",
          "upvote_count": "1"
        },
        {
          "id": 527872,
          "date": "Wed 19 Jan 2022 21:00",
          "username": "Ni_yot",
          "content": "Yes A and D. ",
          "upvote_count": "1"
        },
        {
          "id": 499069,
          "date": "Sat 11 Dec 2021 04:33",
          "username": "challenger1",
          "content": "My Answer: A&D",
          "upvote_count": "1"
        },
        {
          "id": 491290,
          "date": "Wed 01 Dec 2021 06:16",
          "username": "acloudguru",
          "content": "very easy one, hope I can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 349109,
          "date": "Mon 01 Nov 2021 01:51",
          "username": "01037",
          "content": "A and D",
          "upvote_count": "1"
        },
        {
          "id": 340760,
          "date": "Mon 25 Oct 2021 01:47",
          "username": "Malcnorth59",
          "content": "A and D is the best answer",
          "upvote_count": "1"
        },
        {
          "id": 325518,
          "date": "Fri 22 Oct 2021 16:15",
          "username": "cldy",
          "content": "A.  D. <br>to improve read performance.",
          "upvote_count": "1"
        },
        {
          "id": 293838,
          "date": "Tue 12 Oct 2021 09:15",
          "username": "bustedd",
          "content": "AD is the right answer",
          "upvote_count": "1"
        },
        {
          "id": 131147,
          "date": "Thu 30 Sep 2021 00:13",
          "username": "noisonnoiton",
          "content": "go with A,D<br>Implement sharding to distribute load to multiple RDS MySQL instances (this is only a read contention, the writes work fine)<br>Increase the RDS MySQL Instance size and Implement provisioned IOPS (not scalable, this is only a read contention, the writes work fine)",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing an intrusion detection prevention (IDS/IPS) solution for a customer web application in a single VPC.  You are considering the options for implementing IOS IPS protection for traffic coming from the Internet.<br>Which of the following options would you consider? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Implement IDS/IPS agents on each Instance running in VPC<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement Elastic Load Balancing with SSL listeners in front of the web applications<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement a reverse proxy layer in front of web servers and configure IDS/IPS agents on each reverse proxy server.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 624360,
          "date": "Wed 29 Jun 2022 03:39",
          "username": "TechX",
          "content": "It's AD<br>Explanation:<br>EC2 does not allow promiscuous mode, and you cannot put something in between the ELB and the web server (like a listener or IDP)",
          "upvote_count": "2"
        },
        {
          "id": 349110,
          "date": "Wed 03 Nov 2021 19:50",
          "username": "01037",
          "content": "A and D",
          "upvote_count": "2"
        },
        {
          "id": 340761,
          "date": "Mon 11 Oct 2021 23:32",
          "username": "Malcnorth59",
          "content": "A and D for me.",
          "upvote_count": "1"
        },
        {
          "id": 325568,
          "date": "Thu 23 Sep 2021 14:58",
          "username": "cldy",
          "content": "A. D. <br>these are the two ways to implement IDS/IPS.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p><img src=\"https://www.examtopics.com/https://examtopics.com/assets/media/exam-media/04241/0005700001.png\" class=\"in-exam-image\"><br>Refer to the architecture diagram above of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors Cloud Watch monitors the number of Job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in Cloud Watch alarms.<br>You can use this architecture to implement which of the following features in a cost effective and efficient manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. Reduce the overall lime for executing jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement fault tolerance against EC2 instance failure since messages would remain in SQS and worn can continue with recovery of EC2 instances implement fault tolerance against SQS failure by backing up messages to S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement message passing between EC2 instances within a batch by exchanging messages through SQS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Coordinate number of EC2 instances with number of job requests automatically thus Improving cost effectiveness.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Handle high priority jobs before lower priority jobs by assigning a priority metadata field to SQS messages.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37912,
          "date": "Wed 22 Sep 2021 23:08",
          "username": "amog",
          "content": "Answer is D<br>https://acloud.guru/forums/aws-certified-solutions-architect-associate/discussion/-KQROiiTiwuq4744rUiV/aws-associate-questions",
          "upvote_count": "8"
        },
        {
          "id": 577832,
          "date": "Tue 29 Mar 2022 20:42",
          "username": "jj22222",
          "content": "D.  Coordinate number of EC2 instances with number of job requests automatically thus Improving cost effectiveness.",
          "upvote_count": "1"
        },
        {
          "id": 532386,
          "date": "Tue 25 Jan 2022 21:23",
          "username": "shotty1",
          "content": "I think this is E, since D is already implemented",
          "upvote_count": "1"
        },
        {
          "id": 521571,
          "date": "Tue 11 Jan 2022 15:11",
          "username": "pititcu667",
          "content": "I am going to say e just as the message says you can delay visibility of a low priority message hence you might not force an autoscale event. From the diagram d is already implemented hence going for e -> priority queue with delay visibility.",
          "upvote_count": "1"
        },
        {
          "id": 349144,
          "date": "Fri 29 Oct 2021 03:33",
          "username": "01037",
          "content": "Yes, D",
          "upvote_count": "1"
        },
        {
          "id": 340766,
          "date": "Thu 07 Oct 2021 03:11",
          "username": "Malcnorth59",
          "content": "D. <br>This is a common patern",
          "upvote_count": "1"
        },
        {
          "id": 325520,
          "date": "Thu 07 Oct 2021 01:27",
          "username": "cldy",
          "content": "D. <br>ASG efficient & saves cost by removing surplus instances.",
          "upvote_count": "1"
        },
        {
          "id": 143897,
          "date": "Thu 30 Sep 2021 08:16",
          "username": "fullaws",
          "content": "D is correcr",
          "upvote_count": "2"
        },
        {
          "id": 117952,
          "date": "Tue 28 Sep 2021 12:23",
          "username": "manoj101",
          "content": "D: Depending up on the workload you can autoscale eC2 instances and save cost.",
          "upvote_count": "4"
        },
        {
          "id": 51221,
          "date": "Tue 28 Sep 2021 06:45",
          "username": "miracle",
          "content": "My answer is D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An International company has deployed a multi-tier web application that relies on DynamoDB in a single region. For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours. They should synchronize their data on a regular basis and be able to provision me web application rapidly using CloudFormation.<br>The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data and synchronize only the modified elements.<br>Which design would you choose to meet these requirements?</p>",
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
              "choice": "<p>A. Use AWS data Pipeline to schedule a DynamoDB cross region copy once a day, create a ג€Lastupdatedג€ attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Send also each Ante into an SQS queue in me second region; use an auto-scaling group behind the SQS queue to replay the write in the second region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 638971,
          "date": "Fri 29 Jul 2022 05:47",
          "username": "hahaaaaa",
          "content": "I think A.  <br>Requirements: \\\"to synchronize only updated parts.\\\"<br>A.  CRR:continuously replicate changes from a DynamoDB table.<br>C.  export/import : backup the entire contents of DynamoDB table.",
          "upvote_count": "2"
        },
        {
          "id": 591765,
          "date": "Mon 25 Apr 2022 16:18",
          "username": "bobsmith2000wassb",
          "content": "It can't be A! There's no such an option in data pipeline templates any more! It's not mentioned in documentation as well. <br>There are two options in templates:<br>1) Export DynamoDB table to S3<br>2) Import DynamoDB backup data from S3<br>That's it! <br>So the only thing that has left is C.  Import and exportI believe that wont satisfy the RPO of 24h",
          "upvote_count": "11"
        },
        {
          "id": 686457,
          "date": "Wed 05 Oct 2022 00:09",
          "username": "wassb",
          "content": "I believe that wont satisfy the RPO of 24h",
          "upvote_count": "1"
        },
        {
          "id": 497628,
          "date": "Thu 09 Dec 2021 11:48",
          "username": "cldy",
          "content": "A.  Use AWS data Pipeline to schedule a DynamoDB cross region copy once a day, create a ג€Lastupdatedג€ attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.",
          "upvote_count": "2"
        },
        {
          "id": 485481,
          "date": "Wed 24 Nov 2021 00:01",
          "username": "acloudgurutiana528",
          "content": "why no use dynamoDB global table?dynamodb global table is active-active, this question asks for a way of disaster recovery which is not active-active.",
          "upvote_count": "13"
        },
        {
          "id": 494967,
          "date": "Mon 06 Dec 2021 08:42",
          "username": "tiana528",
          "content": "dynamodb global table is active-active, this question asks for a way of disaster recovery which is not active-active.",
          "upvote_count": "3"
        },
        {
          "id": 428885,
          "date": "Sat 06 Nov 2021 19:23",
          "username": "rockc",
          "content": "Here are more details: https://aws.amazon.com/blogs/aws/copy-dynamodb-data-between-regions-using-the-aws-data-pipeline/",
          "upvote_count": "1"
        },
        {
          "id": 427469,
          "date": "Thu 14 Oct 2021 09:51",
          "username": "nwk",
          "content": "https://aws.amazon.com/about-aws/whats-new/2013/09/12/announcing-dynamodb-cross-region-copy-feature-in-aws-data-pipeline/",
          "upvote_count": "1"
        },
        {
          "id": 349469,
          "date": "Mon 04 Oct 2021 20:38",
          "username": "01037Yahowmy01037",
          "content": "A needs to modify the web application to update Lastupdated attribute, doesn't it?I believe the only modification here is to the DynamoDB table.I think C is the best option here.",
          "upvote_count": "112"
        },
        {
          "id": 391931,
          "date": "Sun 10 Oct 2021 09:07",
          "username": "Yahowmy",
          "content": "I believe the only modification here is to the DynamoDB table.",
          "upvote_count": "1"
        },
        {
          "id": 349470,
          "date": "Fri 08 Oct 2021 20:12",
          "username": "01037",
          "content": "I think C is the best option here.",
          "upvote_count": "2"
        },
        {
          "id": 340767,
          "date": "Sat 02 Oct 2021 01:05",
          "username": "Malcnorth59",
          "content": "A. <br>Seems right",
          "upvote_count": "2"
        },
        {
          "id": 333960,
          "date": "Tue 28 Sep 2021 16:55",
          "username": "ppshein",
          "content": "A is for exact answer I believe.",
          "upvote_count": "2"
        },
        {
          "id": 325566,
          "date": "Tue 21 Sep 2021 19:24",
          "username": "cldy",
          "content": "A. <br>meets the requirements.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a social media site and are considering how to mitigate distributed denial-of-service (DDoS) attacks.<br>Which of the below are viable mitigation techniques? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>A. Add multiple elastic network interfaces (ENIs) to each EC2 instance to increase the network bandwidth.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use dedicated instances to ensure that each instance has the maximum performance possible.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon CloudFront distribution for both static and dynamic content.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Elastic Load Balancer with auto scaling groups at the web, app and Amazon Relational Database Service (RDS) tiers<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add alert Amazon CloudWatch to look for high Network in and CPU utilization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create processes and capabilities to quickly add and remove rules to the instance OS firewall.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 382128,
          "date": "Fri 05 Nov 2021 15:24",
          "username": "iliri_iatlasgaravisar",
          "content": "This is an old question. WAF is not an option. From what is here I choose CEF.  D is not right because you cant put an ELB in front of RDS. Also the OS firewall should not be modified on EC2 since that is what Security Groups are for. So, in general I would discard this question as valid but if I had to choose 3 I'd go with CEFThe only reason I can think of that they list the OS firewall in F is they might mean rules that blacklist malicious IP blocks, which cannot be done with security groups. Then again you shouldn't be letting that traffic even reach your EC2 instances and should instead by relying on other measures to block that traffic.Yes, I agree. CEF may correct.RDS won't support ELB.  We can use L4 or L7 LB in front of RDS instances for horizontal load balancing such as HAProxy or layer 7 SQL-aware load balancer. https://aws.amazon.com/blogs/database/scaling-your-amazon-rds-instance-vertically-and-horizontally/",
          "upvote_count": "911"
        },
        {
          "id": 656647,
          "date": "Thu 01 Sep 2022 22:06",
          "username": "atlasga",
          "content": "The only reason I can think of that they list the OS firewall in F is they might mean rules that blacklist malicious IP blocks, which cannot be done with security groups. Then again you shouldn't be letting that traffic even reach your EC2 instances and should instead by relying on other measures to block that traffic.",
          "upvote_count": "1"
        },
        {
          "id": 541863,
          "date": "Sun 06 Feb 2022 17:42",
          "username": "ravisar",
          "content": "Yes, I agree. CEF may correct.RDS won't support ELB.  We can use L4 or L7 LB in front of RDS instances for horizontal load balancing such as HAProxy or layer 7 SQL-aware load balancer. https://aws.amazon.com/blogs/database/scaling-your-amazon-rds-instance-vertically-and-horizontally/",
          "upvote_count": "1"
        },
        {
          "id": 662925,
          "date": "Thu 08 Sep 2022 00:00",
          "username": "icanfly",
          "content": "My answer is CEF",
          "upvote_count": "1"
        },
        {
          "id": 637528,
          "date": "Tue 26 Jul 2022 19:02",
          "username": "hilft",
          "content": "DEF seems the option without WAF and shield.<br>ABC are meant for performace",
          "upvote_count": "1"
        },
        {
          "id": 498622,
          "date": "Fri 10 Dec 2021 13:42",
          "username": "cldy",
          "content": "C.  Use an Amazon CloudFront distribution for both static and dynamic content.<br>D.  Use an Elastic Load Balancer with auto scaling groups at the web, app and Amazon Relational Database Service (RDS) tiers<br>E.  Add alert Amazon CloudWatch to look for high Network in and CPU utilization.",
          "upvote_count": "3"
        },
        {
          "id": 369101,
          "date": "Tue 26 Oct 2021 08:52",
          "username": "[Removed]bobsmith2000",
          "content": "Why not use AWS Shield or AWS WAF rules? <br>https://aws.amazon.com/shield/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc <br>https://aws.amazon.com/waf/faqs/<br>Can I use Rate-based rule to mitigate Web layer DDoS attacks?<br>Yes. This new rules type is designed to protect you from use cases such web-layer DDoS attacks, brute force login attempts and bad bots.AWS Shield is applied to ELB and CloudFront by default.",
          "upvote_count": "11"
        },
        {
          "id": 605894,
          "date": "Mon 23 May 2022 09:28",
          "username": "bobsmith2000",
          "content": "AWS Shield is applied to ELB and CloudFront by default.",
          "upvote_count": "1"
        },
        {
          "id": 365657,
          "date": "Sun 10 Oct 2021 18:06",
          "username": "pradhyumnapradhyumna",
          "content": "C and E are clear choices. May be F is the 3rd one which can help to mitigate though it sounds a manual step. A and B does not help to mitigate while they improve only performance. D does not mitigate anything.thinking again, D may be right. with ELB you can start light, so your attack surface for DDOS is also less. C, D and E is the answer.",
          "upvote_count": "22"
        },
        {
          "id": 365662,
          "date": "Thu 21 Oct 2021 09:47",
          "username": "pradhyumna",
          "content": "thinking again, D may be right. with ELB you can start light, so your attack surface for DDOS is also less. C, D and E is the answer.",
          "upvote_count": "2"
        },
        {
          "id": 349474,
          "date": "Thu 07 Oct 2021 01:17",
          "username": "01037",
          "content": "I think F is also an option here.<br>But after all I don't think it's a good question.",
          "upvote_count": "2"
        },
        {
          "id": 333961,
          "date": "Fri 01 Oct 2021 15:19",
          "username": "ppshein",
          "content": "C. D. E for me.",
          "upvote_count": "2"
        },
        {
          "id": 325565,
          "date": "Mon 27 Sep 2021 19:37",
          "username": "cldy",
          "content": "C. D. E.  Correct choices.<br>A, B & F cannot mitigate DDoS.",
          "upvote_count": "3"
        },
        {
          "id": 314505,
          "date": "Fri 24 Sep 2021 17:25",
          "username": "nitinz",
          "content": "E is not going to mitigate anything. ACD is correct.",
          "upvote_count": "1"
        },
        {
          "id": 314009,
          "date": "Fri 24 Sep 2021 01:16",
          "username": "ExtHo",
          "content": "CDE Are perfect choice",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You must architect the migration of a web application to AWS. The application consists of Linux web servers running a custom web server. You are required to save the logs generated from the application to a durable location.<br>What options could you select to migrate the application to AWS? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Elastic Beanstalk application using the custom web server platform. Specify the web server executable and the application project and source files. Enable log file rotation to Amazon Simple Storage Service (S3).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Dockerfile for the application. Create an AWS OpsWorks stack consisting of a custom layer. Create custom recipes to install Docker and to deploy your Docker container using the Dockerfile. Create customer recipes to install and configure the application to publish the logs to Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Dockerfile for the application. Create an AWS OpsWorks stack consisting of a Docker layer that uses the Dockerfile. Create custom recipes to install and configure Amazon Kinesis to publish the logs into Amazon CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Dockerfile for the application. Create an AWS Elastic Beanstalk application using the Docker platform and the Dockerfile. Enable logging the Docker configuration to automatically publish the application logs. Enable log file rotation to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use VM import/Export to import a virtual machine image of the server into AWS as an AMI. Create an Amazon Elastic Compute Cloud (EC2) instance from AMI, and install and configure the Amazon CloudWatch Logs agent. Create a new AMI from the instance. Create an AWS Elastic Beanstalk application using the AMI platform and the new AMI.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 325802,
          "date": "Wed 29 Sep 2021 21:55",
          "username": "cldy",
          "content": "D.  - Docker with awslogs<br>E.  VM Import/Export + CW logs",
          "upvote_count": "7"
        },
        {
          "id": 713870,
          "date": "Tue 08 Nov 2022 14:49",
          "username": "NathanvB99",
          "content": "DE.  A falls of because there’s a custom platform for AWS Elastic Beanstalk but it works based on an AMI and not on an executable. This is what you do in E. ",
          "upvote_count": "1"
        },
        {
          "id": 646546,
          "date": "Sun 14 Aug 2022 05:49",
          "username": "Harithareddynn",
          "content": "Docker with awslogs to S3 . Since ELB Cloudwatch agents doesnt send logs directly to S3, it is not A but E",
          "upvote_count": "4"
        },
        {
          "id": 591832,
          "date": "Mon 25 Apr 2022 18:22",
          "username": "bobsmith2000bobsmith2000",
          "content": "BE<br>A.  It sounds substantially wrong. There's no \\\"custom web server platform\\\" only \\\"custom platform\\\". And if that's the case the one doesn't have to specify a web server executable anywhere. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html<br><br>B.  That's completely feasible. https://aws.amazon.com/blogs/devops/running-docker-on-aws-opsworks/<br><br>C.  Wrong. There's no such thing as \\\"Docker layer\\\". A custom layer is required. https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers.html<br><br>D.  Wrong. The one is only able to request logs from EB instances. On an instance the logs appear via docker volumes. There are no mentions of any sctipts for sending logs anywhere which has to be embedded into custom ami for EB env. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.container.console.html#docker-env-cfg.dc-customized-logging<br><br>E.  That's ancually feasible. A custom image is fairly common pattern. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.customenv.htmlMy bad.<br>E is wrong because there's no such a platform as \\\"AMI platform\\\".<br>Moreover I misunderstood D.  You create a volume to map logs from a container to a host and then it's possible to publish them to CloudWatch or rotate to S3 even using the web console.<br><br>So it seems to be BD",
          "upvote_count": "11"
        },
        {
          "id": 600256,
          "date": "Wed 11 May 2022 19:52",
          "username": "bobsmith2000",
          "content": "My bad.<br>E is wrong because there's no such a platform as \\\"AMI platform\\\".<br>Moreover I misunderstood D.  You create a volume to map logs from a container to a host and then it's possible to publish them to CloudWatch or rotate to S3 even using the web console.<br><br>So it seems to be BD",
          "upvote_count": "1"
        },
        {
          "id": 566590,
          "date": "Sun 13 Mar 2022 08:06",
          "username": "sin99",
          "content": "B & D is best",
          "upvote_count": "1"
        },
        {
          "id": 547569,
          "date": "Tue 15 Feb 2022 07:51",
          "username": "jyrajan69",
          "content": "There is nothing here that indicates that we need to containerize this application. It is BeSpoke so it is customized. so E for sure and A.  I am opting for A and E",
          "upvote_count": "1"
        },
        {
          "id": 503325,
          "date": "Fri 17 Dec 2021 04:04",
          "username": "vbal",
          "content": "B & E https://aws.amazon.com/blogs/devops/running-docker-on-aws-opsworks/<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.customenv.html",
          "upvote_count": "1"
        },
        {
          "id": 495940,
          "date": "Tue 07 Dec 2021 13:03",
          "username": "cldy",
          "content": "D.  Create a Dockerfile for the application. Create an AWS Elastic Beanstalk application using the Docker platform and the Dockerfile. Enable logging the Docker configuration to automatically publish the application logs. Enable log file rotation to Amazon S3.<br>E.  Use VM import/Export to import a virtual machine image of the server into AWS as an AMI. Create an Amazon Elastic Compute Cloud (EC2) instance from AMI, and install and configure the Amazon CloudWatch Logs agent. Create a new AMI from the instance. Create an AWS Elastic Beanstalk application using the AMI platform and the new AMI.",
          "upvote_count": "2"
        },
        {
          "id": 488995,
          "date": "Sun 28 Nov 2021 09:46",
          "username": "tiana528",
          "content": "A, D. <br><br>A : The question mentions it uses a specific webserver of bespoke, and A mentions creating the customized platform. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html<br><br>Why E is incorrect : Because `Elastic Beanstalk installs a CloudWatch log agent with the default configuration settings on each instance it creates` : https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.cloudwatchlogs.html<br>Cloudwatch logs agent is already there, you don't need to do that complex steps to install it.",
          "upvote_count": "4"
        },
        {
          "id": 440622,
          "date": "Thu 28 Oct 2021 07:06",
          "username": "chat77",
          "content": "BE<br>D - Wrong, logs are not in S3",
          "upvote_count": "2"
        },
        {
          "id": 440175,
          "date": "Thu 28 Oct 2021 05:59",
          "username": "Kinnam",
          "content": "A, D and E are correct.<br><br>A & E - https://aws.amazon.com/about-aws/whats-new/2017/02/aws-elastic-beanstalk-supports-custom-platforms/<br><br>D- Docker platform runs natively on Linux. https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html<br>https://acloud.guru/forums/aws-certified-solutions-architect-professional/discussion/-KHL5b624o_6PR_KAW30/sample-question-<br><br>CloudWatch Logs will store your log data indefinitely. S3 is equally durable. <br><br>Going with A & E since they allow \\\"custom platform\\\" comparing to D which offers \\\"Docker platform\\\".",
          "upvote_count": "2"
        },
        {
          "id": 406245,
          "date": "Thu 21 Oct 2021 14:20",
          "username": "Akhil254",
          "content": "DE Correct",
          "upvote_count": "1"
        },
        {
          "id": 365666,
          "date": "Fri 15 Oct 2021 09:09",
          "username": "pradhyumnaGeniusMikeLiu",
          "content": "A and D because S3 is the durable location that the question hints.cloudwatch logs default expire time is indefinitely. That meams it is durable.",
          "upvote_count": "31"
        },
        {
          "id": 500421,
          "date": "Mon 13 Dec 2021 07:59",
          "username": "GeniusMikeLiu",
          "content": "cloudwatch logs default expire time is indefinitely. That meams it is durable.",
          "upvote_count": "1"
        },
        {
          "id": 351047,
          "date": "Thu 07 Oct 2021 12:22",
          "username": "01037wahlbergusa",
          "content": "D & E<br>A.  Custom platform isn't needed.<br>B.  I don't think\\\"Create Dockerfile for the application. Create an AWS OpsWorks stack consisting of a custom layer\\\" is possible.<br>C.  Using Kinesis is kinda waste.It only takes a Google search to see Opsworks supporting custom layer with Docker => https://aws.amazon.com/blogs/devops/running-docker-on-aws-opsworks/",
          "upvote_count": "11"
        },
        {
          "id": 512555,
          "date": "Wed 29 Dec 2021 19:24",
          "username": "wahlbergusa",
          "content": "It only takes a Google search to see Opsworks supporting custom layer with Docker => https://aws.amazon.com/blogs/devops/running-docker-on-aws-opsworks/",
          "upvote_count": "1"
        },
        {
          "id": 314041,
          "date": "Wed 22 Sep 2021 03:59",
          "username": "ExtHoExtHo",
          "content": "Any one what about DE?Yes DE i think too",
          "upvote_count": "11"
        },
        {
          "id": 317073,
          "date": "Thu 23 Sep 2021 01:20",
          "username": "ExtHo",
          "content": "Yes DE i think too",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web company is looking to implement an external payment service into their highly available application deployed in a VPC Their application EC2 instances are behind a public facing ELB.  Auto scaling is used to add additional instances as traffic increases under normal load the application runs 2 instances in the Auto<br>Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an<br>API.<br>How should they architect their solution?</p>",
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
              "choice": "<p>A. Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the MAT instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist API.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 591943,
          "date": "Mon 25 Apr 2022 21:31",
          "username": "bobsmith2000kaushik9845",
          "content": "Why not D?<br>ASG: 2 at normal load, 6 at max. 4 instances can be added at a time.<br>Add a script in user data for whitelisting.public ip changes when instance restarts . So you need Elastic IP assigned to ec2. But only 4 ip can be whitelisted. But at peak there can be 6 instances.",
          "upvote_count": "21"
        },
        {
          "id": 671305,
          "date": "Sat 17 Sep 2022 08:24",
          "username": "kaushik9845",
          "content": "public ip changes when instance restarts . So you need Elastic IP assigned to ec2. But only 4 ip can be whitelisted. But at peak there can be 6 instances.",
          "upvote_count": "1"
        },
        {
          "id": 498446,
          "date": "Fri 10 Dec 2021 10:00",
          "username": "cldy",
          "content": "A.  Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the MAT instances.",
          "upvote_count": "1"
        },
        {
          "id": 406265,
          "date": "Wed 03 Nov 2021 03:23",
          "username": "Akhil254",
          "content": "A Correct",
          "upvote_count": "2"
        },
        {
          "id": 351048,
          "date": "Sat 23 Oct 2021 23:42",
          "username": "01037",
          "content": "Definitely A",
          "upvote_count": "1"
        },
        {
          "id": 340772,
          "date": "Mon 04 Oct 2021 03:54",
          "username": "Malcnorth59",
          "content": "Has to be A",
          "upvote_count": "1"
        },
        {
          "id": 333966,
          "date": "Sun 03 Oct 2021 10:06",
          "username": "ppsheinMalcnorth59",
          "content": "C is good choice for meElb is for ingress traffic and as NLB not specifically mentioned could be dynamic IP",
          "upvote_count": "33"
        },
        {
          "id": 340774,
          "date": "Fri 08 Oct 2021 14:00",
          "username": "Malcnorth59",
          "content": "Elb is for ingress traffic and as NLB not specifically mentioned could be dynamic IP",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and it required you may need to pay for a consultant.<br>How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?</p>",
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
              "choice": "<p>A. A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 625511,
          "date": "Fri 01 Jul 2022 03:18",
          "username": "klientel",
          "content": "The answer is C",
          "upvote_count": "2"
        },
        {
          "id": 624566,
          "date": "Wed 29 Jun 2022 12:56",
          "username": "altonh",
          "content": "The answer is C.  For those who think it's B because of the Glacier, take note that it is the ORIGINAL file that is moved to Glacier, not the CONVERTED file.",
          "upvote_count": "3"
        },
        {
          "id": 615097,
          "date": "Sun 12 Jun 2022 00:25",
          "username": "makpk",
          "content": "C. <br><br>Amazon Elastic Transcoder uses pipelines to manage transcoding jobs. When you create a job, you specify the pipeline that you want to submit the job to. Pipelines are closely tied to an S3 bucket that you specify.",
          "upvote_count": "2"
        },
        {
          "id": 612546,
          "date": "Tue 07 Jun 2022 03:22",
          "username": "AnhddAnhddAnhdd",
          "content": "B for me<br>Because option C mention S3 glacier which is not really HA (99.5%) while other S3 type is 99.9% and the question request that need maintain HAAfter re-read the question, I change to Cmy bad, I have mistake between S3 One-Zone IA which is HA (99.5%), not S3 Glacier. C would be better solution here",
          "upvote_count": "111"
        },
        {
          "id": 618942,
          "date": "Mon 20 Jun 2022 04:51",
          "username": "Anhdd",
          "content": "After re-read the question, I change to C",
          "upvote_count": "1"
        },
        {
          "id": 619003,
          "date": "Mon 20 Jun 2022 07:53",
          "username": "Anhdd",
          "content": "my bad, I have mistake between S3 One-Zone IA which is HA (99.5%), not S3 Glacier. C would be better solution here",
          "upvote_count": "1"
        },
        {
          "id": 597773,
          "date": "Fri 06 May 2022 17:00",
          "username": "walkwolf3Cal88",
          "content": "B. <br><br>For C, once file is moved in Glacier, it will take time to retrieve.You are moving the original video to glacier which is high in size and will increase cost.<br>You will server your users the transcoded video which is still on S3<br>So C is the correct answer for me",
          "upvote_count": "21"
        },
        {
          "id": 706754,
          "date": "Fri 28 Oct 2022 23:04",
          "username": "Cal88",
          "content": "You are moving the original video to glacier which is high in size and will increase cost.<br>You will server your users the transcoded video which is still on S3<br>So C is the correct answer for me",
          "upvote_count": "1"
        },
        {
          "id": 591948,
          "date": "Mon 25 Apr 2022 21:41",
          "username": "bobsmith2000Network_1",
          "content": "Why C?<br>Glacier doesn't seem to be correct.Glacier is for achieving the original videos which are in mp4 format, not the transcoded videos",
          "upvote_count": "21"
        },
        {
          "id": 652611,
          "date": "Sat 27 Aug 2022 17:20",
          "username": "Network_1",
          "content": "Glacier is for achieving the original videos which are in mp4 format, not the transcoded videos",
          "upvote_count": "1"
        },
        {
          "id": 498673,
          "date": "Fri 10 Dec 2021 15:09",
          "username": "cldy",
          "content": "C.  Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.",
          "upvote_count": "1"
        },
        {
          "id": 352830,
          "date": "Tue 02 Nov 2021 08:52",
          "username": "pt8",
          "content": "To serve the video from S3 when they are archieved in Glacier after a few days? It doesn't seem right.",
          "upvote_count": "3"
        },
        {
          "id": 351052,
          "date": "Sat 23 Oct 2021 16:11",
          "username": "01037",
          "content": "C<br>It's MediaConvert now",
          "upvote_count": "3"
        },
        {
          "id": 340775,
          "date": "Wed 20 Oct 2021 07:50",
          "username": "Malcnorth59",
          "content": "C form me",
          "upvote_count": "1"
        },
        {
          "id": 333967,
          "date": "Wed 06 Oct 2021 22:22",
          "username": "ppshein",
          "content": "I will go C",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is trying to understand the detailed CloudWatch monitoring concept. Which of the below mentioned services does not provide detailed monitoring with<br>CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>A. AWS RDS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS ELB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Route53<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS EMR<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 674068,
          "date": "Tue 20 Sep 2022 13:08",
          "username": "mfratta",
          "content": "This question is outdated because according to [1] all listed services monitor metrics with CloudWatch<br>[1] https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html",
          "upvote_count": "2"
        },
        {
          "id": 651690,
          "date": "Thu 25 Aug 2022 09:39",
          "username": "examJack",
          "content": "Amazon EMR Documentation : CloudWatch events and metrics<br><br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-manage-cluster-cloudwatch.html<br><br>Use events and metrics to track the activity and health of an Amazon EMR cluster. Events are useful for monitoring a specific occurrence within a cluster - for example, when a cluster changes state from starting to running. Metrics are useful for monitoring a specific value - for example, the percentage of available disk space that HDFS is using within a cluster.<br><br>For more information about CloudWatch Events, see the Amazon CloudWatch Events User Guide. For more information about CloudWatch metrics, see Using Amazon CloudWatch metrics and Creating Amazon CloudWatch alarms in the Amazon CloudWatch User Guide.",
          "upvote_count": "1"
        },
        {
          "id": 531874,
          "date": "Tue 25 Jan 2022 06:25",
          "username": "GeniusMikeLiu",
          "content": "why d? It seems like EMR do support CloudWatch...",
          "upvote_count": "2"
        },
        {
          "id": 524878,
          "date": "Sun 16 Jan 2022 12:15",
          "username": "tkanmani76",
          "content": "D - Metrics are updated every five minutes and automatically collected and pushed to CloudWatch for every Amazon EMR cluster. This interval is not configurable.",
          "upvote_count": "2"
        },
        {
          "id": 487275,
          "date": "Fri 26 Nov 2021 12:00",
          "username": "ryu10_09",
          "content": "isn't EMR also supported ?",
          "upvote_count": "1"
        },
        {
          "id": 351055,
          "date": "Sat 06 Nov 2021 00:27",
          "username": "01037",
          "content": "Yes<br>It's D",
          "upvote_count": "1"
        },
        {
          "id": 334732,
          "date": "Mon 27 Sep 2021 10:47",
          "username": "aws_arn_nameaws_arn_nameTechX",
          "content": "Answer is A.  https://jayendrapatil.com/cloudwatch-monitoring-supported-aws-services/Sorry missed typo. Answer is Dthank you",
          "upvote_count": "241"
        },
        {
          "id": 334733,
          "date": "Fri 05 Nov 2021 10:24",
          "username": "aws_arn_name",
          "content": "Sorry missed typo. Answer is D",
          "upvote_count": "4"
        },
        {
          "id": 627340,
          "date": "Tue 05 Jul 2022 10:14",
          "username": "TechX",
          "content": "thank you",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer's end, however the customer is unable to connect from EC2 instances inside its VPC to servers residing in its datacenter.<br>Which of the following options provide a viable solution to remedy this situation? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>A. Add a route to the route table with an iPsec VPN connection as the target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable route propagation to the virtual pinnate gateway (VGW).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable route propagation to the customer gateway (CGW).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the route table of all Instances using the 'route' command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the Instances VPC subnet route table by adding a route back to the customer's on-premises environment.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 50726,
          "date": "Mon 04 Oct 2021 04:37",
          "username": "Gorha",
          "content": "B and E correct: https://aws.amazon.com/premiumsupport/knowledge-center/routing-dx-private-virtual-interface/",
          "upvote_count": "9"
        },
        {
          "id": 625432,
          "date": "Thu 30 Jun 2022 23:44",
          "username": "KiraguJohnhilft",
          "content": "Is pinnate gateway a typo?yes typo.",
          "upvote_count": "21"
        },
        {
          "id": 637734,
          "date": "Wed 27 Jul 2022 03:41",
          "username": "hilft",
          "content": "yes typo.",
          "upvote_count": "1"
        },
        {
          "id": 563843,
          "date": "Wed 09 Mar 2022 09:00",
          "username": "Alexey79",
          "content": "Why NOT C:<br>“routes are listed on the client's end”, VGW successfully propagate routes to CGW.",
          "upvote_count": "1"
        },
        {
          "id": 514489,
          "date": "Sat 01 Jan 2022 12:26",
          "username": "RVivekCGJoon",
          "content": "E is fine<br>Between B and C ,<br>C is correct because the question says\\\"routes are being advertised from the customers's end\\\"which means Customer end router is probagating routes to VGW<br>Now VGW should be configured to probagate routes \\\"TO\\\" customer end routerMy thought too.",
          "upvote_count": "41"
        },
        {
          "id": 538607,
          "date": "Wed 02 Feb 2022 12:09",
          "username": "CGJoon",
          "content": "My thought too.",
          "upvote_count": "1"
        },
        {
          "id": 513899,
          "date": "Fri 31 Dec 2021 06:39",
          "username": "cldy",
          "content": "B and E. ",
          "upvote_count": "1"
        },
        {
          "id": 499002,
          "date": "Sat 11 Dec 2021 00:20",
          "username": "challenger1",
          "content": "My Answer: B & E",
          "upvote_count": "1"
        },
        {
          "id": 351987,
          "date": "Sun 07 Nov 2021 05:31",
          "username": "01037",
          "content": "Yes<br>B and E",
          "upvote_count": "1"
        },
        {
          "id": 325728,
          "date": "Tue 02 Nov 2021 03:12",
          "username": "cldy",
          "content": "B.  E. <br>Route propagation on VGW + route back to on-prem",
          "upvote_count": "1"
        },
        {
          "id": 143937,
          "date": "Fri 29 Oct 2021 11:17",
          "username": "fullaws",
          "content": "B and E is correct",
          "upvote_count": "3"
        },
        {
          "id": 143929,
          "date": "Thu 28 Oct 2021 15:20",
          "username": "fullaws",
          "content": "B and E is correct",
          "upvote_count": "3"
        },
        {
          "id": 40423,
          "date": "Fri 24 Sep 2021 06:34",
          "username": "CloudFloatersarah1virtual",
          "content": "AE<br>http://jayendrapatil.com/aws-direct-connect-dx/<br><br>a.(deals with VPN)<br>b.CORRECT (VGW)<br>c.(route propagation is enabled on VGW)<br>d.(no route command available)<br>e.CORRECTI think you have a typo. you said 'a' is an answer, then in your explanation you said it is not because it refers to VPN and not DX (which is true)Right ... BE is correct",
          "upvote_count": "351"
        },
        {
          "id": 43851,
          "date": "Sat 25 Sep 2021 00:41",
          "username": "sarah1virtual",
          "content": "I think you have a typo. you said 'a' is an answer, then in your explanation you said it is not because it refers to VPN and not DX (which is true)Right ... BE is correct",
          "upvote_count": "51"
        },
        {
          "id": 51644,
          "date": "Tue 26 Oct 2021 05:42",
          "username": "virtual",
          "content": "Right ... BE is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are running a news website in the eu-west-1 region that updates every 15 minutes. The website has a world-wide audience. It uses an Auto Scaling group behind an Elastic Load Balancer and an Amazon RDS database. Static content resides on Amazon S3, and is distributed through Amazon CloudFront. Your Auto<br>Scaling group is set to trigger a scale up event at 60% CPU utilization. You use an Amazon RDS extra large DB instance with 10.000 Provisioned IOPS, its CPU utilization is around 80%, while freeable memory is in the 2 GB range.<br>Web analytics reports show that the average load time of your web pages is around 1.5 to 2 seconds, but your SEO consultant wants to bring down the average load time to under 0.5 seconds.<br>How would you improve page load times for your users? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>A. Lower the scale up trigger of your Auto Scaling group to 30% so it scales more aggressively.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Switch the Amazon RDS database to the high memory extra large Instance type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Set up a second installation in another region, and use the Amazon Route 53 latency-based routing feature to select the right region.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 377600,
          "date": "Sat 30 Oct 2021 22:25",
          "username": "tvsrobertomartinezrobertomartinezsashenkaClandestine60",
          "content": "should be BCD . Cloudfront replaces additonal region requirment , because its main purpouse is CDNfrom differenr GEO location. Also how creating another region with latency routing will help world wide customers.?Cloudfront does NOT \\\"replaces additonal region requirment\\\"and D isn't required there's plenty of free memBut the CPU is considered HIGH @ 80%E cannot be right as it says \\\"global audience\\\". So multiple regions should be setup to really help",
          "upvote_count": "72121"
        },
        {
          "id": 401657,
          "date": "Mon 01 Nov 2021 14:30",
          "username": "robertomartinezrobertomartinezsashenkaClandestine60",
          "content": "Cloudfront does NOT \\\"replaces additonal region requirment\\\"and D isn't required there's plenty of free memBut the CPU is considered HIGH @ 80%E cannot be right as it says \\\"global audience\\\". So multiple regions should be setup to really help",
          "upvote_count": "2121"
        },
        {
          "id": 401659,
          "date": "Tue 02 Nov 2021 08:25",
          "username": "robertomartinezsashenka",
          "content": "and D isn't required there's plenty of free memBut the CPU is considered HIGH @ 80%",
          "upvote_count": "12"
        },
        {
          "id": 477238,
          "date": "Sat 13 Nov 2021 02:37",
          "username": "sashenka",
          "content": "But the CPU is considered HIGH @ 80%",
          "upvote_count": "2"
        },
        {
          "id": 526460,
          "date": "Tue 18 Jan 2022 10:55",
          "username": "Clandestine60",
          "content": "E cannot be right as it says \\\"global audience\\\". So multiple regions should be setup to really help",
          "upvote_count": "1"
        },
        {
          "id": 638201,
          "date": "Wed 27 Jul 2022 18:14",
          "username": "hilft",
          "content": "ABC make sense<br>but BCD seems better",
          "upvote_count": "1"
        },
        {
          "id": 613708,
          "date": "Thu 09 Jun 2022 10:59",
          "username": "Anhdd",
          "content": "BCE for me. Anyone who choose D over E could explains why we need to upsize DB when we have already cache the DB content by ElastisCache? When you cache you data in Redis, I think CPU never go over 80% because it not need to run continously, right?",
          "upvote_count": "3"
        },
        {
          "id": 601250,
          "date": "Fri 13 May 2022 18:39",
          "username": "ghfalcon7",
          "content": "With E you need to handle multi-master DB replication, I don't think that's in the scope of this question, not to mention adding just one region doesn't really solve the \\\"Global audience\\\" part",
          "upvote_count": "1"
        },
        {
          "id": 577591,
          "date": "Tue 29 Mar 2022 14:40",
          "username": "Mimek",
          "content": "BCE is my choice",
          "upvote_count": "2"
        },
        {
          "id": 543388,
          "date": "Tue 08 Feb 2022 23:51",
          "username": "jj22222",
          "content": "B, C, D is right",
          "upvote_count": "1"
        },
        {
          "id": 514352,
          "date": "Sat 01 Jan 2022 05:25",
          "username": "cldy",
          "content": "B. C. D. <br><br>Random spikes in CPU consumption may not hamper database performance, but sustained high CPU can hinder upcoming database requests. Depending on the overall database workload, high CPU (70%–90%) at your Amazon RDS instance can degrade the overall performance. If a bad or unexpected query, or unusually high workload, causes a high value of CPUUtilization, you might move to a larger instance class.",
          "upvote_count": "1"
        },
        {
          "id": 477235,
          "date": "Sat 13 Nov 2021 02:33",
          "username": "sashenkasashenkasashenkasashenka",
          "content": "B C DDD - It should be D over E because the RDS CPU is considered high at 80%. Check out the AWS best practices and recommendations at the link below. \\\"Using metrics to identify performance issues --> The red line in the Monitoring tab metrics is marked at 75% for CPU, Memory and Storage Metrics. If instance memory consumption frequently crosses that line, then this indicates that you should check your workload or upgrade your instance.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.htmlAdditionally, take a look at this \\\"Making better decisions about Amazon RDS with Amazon CloudWatch metrics\\\" reference states \\\"Depending on the overall database workload, high CPU (70%–90%) at your Amazon RDS instance can degrade the overall performance.\\\"<br>https://aws.amazon.com/blogs/database/making-better-decisions-about-amazon-rds-with-amazon-cloudwatch-metrics/So clearly RDS is the cause of the performance issue and needs to be upgraded. Besides, even if we were to setup a environment (we aren't even given any regional/global info as to where we would do that) we would need to address the RDS. Besides, even if we were to “Set up a second installation in another region, and use the Amazon Route 53 latency-based routing”, what region would you select (Europe?, Asia?) and who is to say that it’s guaranteed to get average load times under 0.5 sec? Amazon Route 53 latency-based routing will route traffic to the Region that provides the best latency with less round-trip time. What if most of the global traffic is not distributed equally with the respect that it’s based on latency of the requestor to the endpoint. Even if we assume that its split evenly 50/50 currently one region is producing 1.5 and 2 sec average load times so at its best we reduce that in half to .75 - 1 sec which still does not meet the requirement.Finally to drive this home, option C which enables dynamic content allows one to select a distribution separate from the S3 bucket (static) content. Typically one would point the custom origin at the ALB endpoint or the EC2 instance and set a TTL to 15 min as in this case we are told that the dynamic content on the news site only changes every 15 min. So, having CloudFront distribute content globally we do not need any more global resources. CloudFront will cache both S3 and ALB content and time out the dynamic content (that comes from the RDS) every 15 min. This in itself should bring down the average load times as the majority of the requests would be coming from the cache in CloudFront and not even have to go back to the origin.",
          "upvote_count": "2122"
        },
        {
          "id": 477236,
          "date": "Sat 13 Nov 2021 02:34",
          "username": "sashenkasashenkasashenka",
          "content": "Additionally, take a look at this \\\"Making better decisions about Amazon RDS with Amazon CloudWatch metrics\\\" reference states \\\"Depending on the overall database workload, high CPU (70%–90%) at your Amazon RDS instance can degrade the overall performance.\\\"<br>https://aws.amazon.com/blogs/database/making-better-decisions-about-amazon-rds-with-amazon-cloudwatch-metrics/So clearly RDS is the cause of the performance issue and needs to be upgraded. Besides, even if we were to setup a environment (we aren't even given any regional/global info as to where we would do that) we would need to address the RDS. Besides, even if we were to “Set up a second installation in another region, and use the Amazon Route 53 latency-based routing”, what region would you select (Europe?, Asia?) and who is to say that it’s guaranteed to get average load times under 0.5 sec? Amazon Route 53 latency-based routing will route traffic to the Region that provides the best latency with less round-trip time. What if most of the global traffic is not distributed equally with the respect that it’s based on latency of the requestor to the endpoint. Even if we assume that its split evenly 50/50 currently one region is producing 1.5 and 2 sec average load times so at its best we reduce that in half to .75 - 1 sec which still does not meet the requirement.Finally to drive this home, option C which enables dynamic content allows one to select a distribution separate from the S3 bucket (static) content. Typically one would point the custom origin at the ALB endpoint or the EC2 instance and set a TTL to 15 min as in this case we are told that the dynamic content on the news site only changes every 15 min. So, having CloudFront distribute content globally we do not need any more global resources. CloudFront will cache both S3 and ALB content and time out the dynamic content (that comes from the RDS) every 15 min. This in itself should bring down the average load times as the majority of the requests would be coming from the cache in CloudFront and not even have to go back to the origin.",
          "upvote_count": "122"
        },
        {
          "id": 477237,
          "date": "Sat 13 Nov 2021 02:34",
          "username": "sashenkasashenka",
          "content": "So clearly RDS is the cause of the performance issue and needs to be upgraded. Besides, even if we were to setup a environment (we aren't even given any regional/global info as to where we would do that) we would need to address the RDS. Besides, even if we were to “Set up a second installation in another region, and use the Amazon Route 53 latency-based routing”, what region would you select (Europe?, Asia?) and who is to say that it’s guaranteed to get average load times under 0.5 sec? Amazon Route 53 latency-based routing will route traffic to the Region that provides the best latency with less round-trip time. What if most of the global traffic is not distributed equally with the respect that it’s based on latency of the requestor to the endpoint. Even if we assume that its split evenly 50/50 currently one region is producing 1.5 and 2 sec average load times so at its best we reduce that in half to .75 - 1 sec which still does not meet the requirement.Finally to drive this home, option C which enables dynamic content allows one to select a distribution separate from the S3 bucket (static) content. Typically one would point the custom origin at the ALB endpoint or the EC2 instance and set a TTL to 15 min as in this case we are told that the dynamic content on the news site only changes every 15 min. So, having CloudFront distribute content globally we do not need any more global resources. CloudFront will cache both S3 and ALB content and time out the dynamic content (that comes from the RDS) every 15 min. This in itself should bring down the average load times as the majority of the requests would be coming from the cache in CloudFront and not even have to go back to the origin.",
          "upvote_count": "22"
        },
        {
          "id": 477242,
          "date": "Sat 13 Nov 2021 02:49",
          "username": "sashenka",
          "content": "Finally to drive this home, option C which enables dynamic content allows one to select a distribution separate from the S3 bucket (static) content. Typically one would point the custom origin at the ALB endpoint or the EC2 instance and set a TTL to 15 min as in this case we are told that the dynamic content on the news site only changes every 15 min. So, having CloudFront distribute content globally we do not need any more global resources. CloudFront will cache both S3 and ALB content and time out the dynamic content (that comes from the RDS) every 15 min. This in itself should bring down the average load times as the majority of the requests would be coming from the cache in CloudFront and not even have to go back to the origin.",
          "upvote_count": "2"
        },
        {
          "id": 424031,
          "date": "Thu 04 Nov 2021 22:30",
          "username": "FERIN_01",
          "content": "E.  Doesn't make any impact as all static and dynamic traffic through cloudfront. More over users are global. Just setting another region will not reduce RDS workload, as traffic comes only to primary region via cloudfront",
          "upvote_count": "3"
        },
        {
          "id": 416306,
          "date": "Thu 04 Nov 2021 02:49",
          "username": "Madhu654sashenka",
          "content": "BCE is correct.. Cloudfront supports dynamic <br>content caching by default.. you don't have to enable to support it.. Option C could have been phrased betterIt actually states \\\"CONFIGURE Amazon CloudFront dynamic content support\\\" and not \\\"ENABLE\\\". The way you configure it is by adding an origin that points to the dynamic content. Typically one would create an origin that directs static content at S3 but one could also add a second origin that points at the ALB for the caching of dynamic content.",
          "upvote_count": "21"
        },
        {
          "id": 477456,
          "date": "Sat 13 Nov 2021 14:05",
          "username": "sashenka",
          "content": "It actually states \\\"CONFIGURE Amazon CloudFront dynamic content support\\\" and not \\\"ENABLE\\\". The way you configure it is by adding an origin that points to the dynamic content. Typically one would create an origin that directs static content at S3 but one could also add a second origin that points at the ALB for the caching of dynamic content.",
          "upvote_count": "1"
        },
        {
          "id": 406283,
          "date": "Wed 03 Nov 2021 07:56",
          "username": "Akhil254",
          "content": "BCE Correct",
          "upvote_count": "2"
        },
        {
          "id": 375642,
          "date": "Fri 29 Oct 2021 05:48",
          "username": "nodogoshi",
          "content": "E MUST",
          "upvote_count": "1"
        },
        {
          "id": 359853,
          "date": "Wed 20 Oct 2021 06:33",
          "username": "01037",
          "content": "I'll choose BCE",
          "upvote_count": "2"
        },
        {
          "id": 352968,
          "date": "Tue 12 Oct 2021 16:51",
          "username": "pt8",
          "content": "B, C, D is correct.",
          "upvote_count": "2"
        },
        {
          "id": 351988,
          "date": "Sun 10 Oct 2021 06:49",
          "username": "01037",
          "content": "BCE for sue",
          "upvote_count": "2"
        },
        {
          "id": 340781,
          "date": "Thu 07 Oct 2021 08:36",
          "username": "Malcnorth59",
          "content": "Agreed, bce.",
          "upvote_count": "2"
        },
        {
          "id": 325767,
          "date": "Sun 03 Oct 2021 20:47",
          "username": "cldy",
          "content": "B. C. E. <br>since \\\"website has a world-wide audience\\\".",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC) and is connected to the corporate data center via an IPSec VPN.The application must authenticate against the on-premises LDAP server.After authentication, each logged-in user can only access an Amazon Simple Storage Space<br>(S3) keyspace specific to that user.<br>Which two approaches can satisfy these objectives? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. Develop an identity broker that authenticates against IAM security Token service to assume a IAM role in order to get temporary AWS security credentials The application calls the identity broker to get AWS temporary security credentials with access to the appropriate S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role. The application can use the temporary credentials to access the appropriate S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Develop an identity broker that authenticates against LDAP and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The application authenticates against LDAP the application then calls the AWS identity and Access Management (IAM) Security service to log in to IAM using the LDAP credentials the application can use the IAM temporary credentials to access the appropriate S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. The application authenticates against IAM Security Token Service using the LDAP credentials the application uses those temporary AWS security credentials to access the appropriate S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40447,
          "date": "Thu 07 Oct 2021 22:48",
          "username": "CloudFloater",
          "content": "BC<br><br>A.  Needs to authenticate against LDAP and not IAM<br>B.  Authenticates with LDAP and calls the AssumeRole<br>C.  Custom Identity broker implementation, with authentication with LDAP and using federated token<br>D.  Can’t login to IAM using LDAP credentials)<br>E.  Need to authenticate with LDAP<br><br>http://jayendrapatil.com/tag/iam-role/",
          "upvote_count": "14"
        },
        {
          "id": 495916,
          "date": "Tue 07 Dec 2021 12:26",
          "username": "wahlbergusawahlbergusa",
          "content": "C is definitely correct but B cannot be. Cause the application NEVER talks to STS directly. => https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html ,Correction. I interpreted the options to be used at the same time. As I now understand any of the options can be used so B would be a viable alternative to C. ",
          "upvote_count": "11"
        },
        {
          "id": 512786,
          "date": "Wed 29 Dec 2021 22:52",
          "username": "wahlbergusa",
          "content": "Correction. I interpreted the options to be used at the same time. As I now understand any of the options can be used so B would be a viable alternative to C. ",
          "upvote_count": "1"
        },
        {
          "id": 495112,
          "date": "Mon 06 Dec 2021 13:15",
          "username": "cldy",
          "content": "B.  The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role. The application can use the temporary credentials to access the appropriate S3 bucket.<br>C.  Develop an identity broker that authenticates against LDAP and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.",
          "upvote_count": "1"
        },
        {
          "id": 424036,
          "date": "Wed 03 Nov 2021 22:35",
          "username": "FERIN_01",
          "content": "C.  seems to be correct <br>If the Organization doesn’t support SAML compatible IdP, a Custom Identity Broker can be used to provide the access<br>Custom Identity Broker should perform the following steps<br>Verify that the user is authenticated by the local identity system.<br>Call the AWS Security Token Service (AWS STS) AssumeRole (recommended) or GetFederationToken (by default, has a expiration period of 36 hours) APIs to obtain temporary security credentials for the user.<br>Temporary credentials limit the permissions a user has to the AWS resource<br>Call an AWS federation endpoint and supply the temporary security credentials to get a sign-in token.<br>Construct a URL for the console that includes the token.<br>URL that the federation endpoint provides is valid for 15 minutes after it is created.<br>Give the URL to the user or invoke the URL on the user’s behalf",
          "upvote_count": "1"
        },
        {
          "id": 377605,
          "date": "Sat 30 Oct 2021 20:37",
          "username": "tvs",
          "content": "BD . Develop an identity broker , seriously ?",
          "upvote_count": "1"
        },
        {
          "id": 359856,
          "date": "Fri 22 Oct 2021 16:58",
          "username": "01037",
          "content": "Yes, B&C",
          "upvote_count": "1"
        },
        {
          "id": 325774,
          "date": "Wed 20 Oct 2021 21:25",
          "username": "cldy",
          "content": "B. C. <br>authentication is always against LDAP",
          "upvote_count": "1"
        },
        {
          "id": 143987,
          "date": "Mon 11 Oct 2021 12:42",
          "username": "fullaws",
          "content": "B and C is correct",
          "upvote_count": "3"
        },
        {
          "id": 37939,
          "date": "Thu 23 Sep 2021 15:32",
          "username": "amog",
          "content": "Answer is B,C<br>AssumeRole() and GetFederationToken()",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using the new connection.<br>After configuring DirectConnect settings in the AWS Console, which of the following options win provide the most seamless transition for your users?</p>",
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
              "choice": "<p>A. Delete your existing VPN connection to avoid routing loops configure your DirectConnect router with the appropriate settings and verity network traffic is leveraging DirectConnect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure your DirectConnect router with a higher BGP priority man your VPN router, verify network traffic is leveraging Directconnect and then delete your existing VPN connection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update your VPC route tables to point to the DirectConnect connection configure your DirectConnect router with the appropriate settings verify network traffic is leveraging DirectConnect and then delete the VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure your DirectConnect router, update your VPC route tables to point to the DirectConnect connection, configure your VPN connection with a higher BGP priority, and verify network traffic is leveraging the DirectConnect connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 37944,
          "date": "Thu 23 Sep 2021 03:33",
          "username": "amog01037kakashi",
          "content": "Answer is B<br>We can have only 1 VGW on VPC, so no need to configure route in VPC anymore<br>https://acloud.guru/forums/aws-certified-solutions-architect-professional/discussion/-KWVDow4aXPEdVfmBcZD/after-configuring-directconnect-settings-in-the-aws-console-which-of-the-followiI think it's B. <br>It's client side configuration.<br>VPC automatically prioritize DX, but client side doesn't, so it needs the adjustment.What does higher priority mean? In networking sometimes this means less preferable. Anyway the important here is the traffic has to use the same path (DX) from the VPC to on-premise and from on-premise to the VPC. ",
          "upvote_count": "1341"
        },
        {
          "id": 360251,
          "date": "Tue 02 Nov 2021 15:27",
          "username": "01037",
          "content": "I think it's B. <br>It's client side configuration.<br>VPC automatically prioritize DX, but client side doesn't, so it needs the adjustment.",
          "upvote_count": "4"
        },
        {
          "id": 69605,
          "date": "Wed 29 Sep 2021 23:21",
          "username": "kakashi",
          "content": "What does higher priority mean? In networking sometimes this means less preferable. Anyway the important here is the traffic has to use the same path (DX) from the VPC to on-premise and from on-premise to the VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 712584,
          "date": "Sun 06 Nov 2022 19:56",
          "username": "kzqc",
          "content": "B.  Updating VPC routing table is useless here because AWS will always use DC over VPN when sending traffic to on-premise. But changing DC router and vpn router (both on-prem) will affect return traffic from on-prem to AWS. Higher BGP priority really means high BGP local preference. <br>https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/vpn-connection-as-a-backup-to-aws-dx-connection-example.html",
          "upvote_count": "1"
        },
        {
          "id": 636273,
          "date": "Mon 25 Jul 2022 00:47",
          "username": "hilft",
          "content": "I will go for C.  Still super confused. Networking specialty",
          "upvote_count": "1"
        },
        {
          "id": 627215,
          "date": "Tue 05 Jul 2022 04:52",
          "username": "TechX",
          "content": "Answer: C<br>Explanation:<br>Direct Connect takes priority over Dynamically configured VPN connections.",
          "upvote_count": "1"
        },
        {
          "id": 514498,
          "date": "Sat 01 Jan 2022 13:13",
          "username": "RVivekRVivekRVivek",
          "content": "Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You<br>recently provisioned a DirectConnect connection and would like to start using the new connection.<br>After configuring DirectConnect settings in the AWS Console, which of the following options win provide the most seamless transition for your<br>users?So even if you dont perfrom steps the mentioned in optionB it is going to be take care sutomaticallycopy paste mistake. Answer is as B is not required <br>Q. Can I use AWS Direct Connect and a VPN Connection to the same VPC simultaneously?<br>Yes. However, only in fail-over scenarios. The Direct Connect path will always be preferred, when established, regardless of AS path prepending.<br>Reference:<br>https://aws.amazon.com/directconnect/faqs/",
          "upvote_count": "212"
        },
        {
          "id": 514500,
          "date": "Sat 01 Jan 2022 13:16",
          "username": "RVivek",
          "content": "So even if you dont perfrom steps the mentioned in optionB it is going to be take care sutomatically",
          "upvote_count": "1"
        },
        {
          "id": 514506,
          "date": "Sat 01 Jan 2022 13:42",
          "username": "RVivek",
          "content": "copy paste mistake. Answer is as B is not required <br>Q. Can I use AWS Direct Connect and a VPN Connection to the same VPC simultaneously?<br>Yes. However, only in fail-over scenarios. The Direct Connect path will always be preferred, when established, regardless of AS path prepending.<br>Reference:<br>https://aws.amazon.com/directconnect/faqs/",
          "upvote_count": "2"
        },
        {
          "id": 424070,
          "date": "Thu 04 Nov 2021 10:40",
          "username": "FERIN_01",
          "content": "Not sure on high BGP Priority, as BGP Priority numbers got different meaning. But option C.  for sure, will work. Also need not delete VPN as it can be used alternative if direct link goes down",
          "upvote_count": "2"
        },
        {
          "id": 353511,
          "date": "Sat 30 Oct 2021 13:23",
          "username": "pt8tvs",
          "content": "B is missing 'update the VPC route table', so C is correctBGP does that.",
          "upvote_count": "12"
        },
        {
          "id": 377608,
          "date": "Wed 03 Nov 2021 12:37",
          "username": "tvs",
          "content": "BGP does that.",
          "upvote_count": "2"
        },
        {
          "id": 330058,
          "date": "Fri 29 Oct 2021 10:04",
          "username": "hihismkskks",
          "content": "B is right. Becuase only BGP makes priorities in Direct Connect",
          "upvote_count": "1"
        },
        {
          "id": 297186,
          "date": "Thu 28 Oct 2021 02:20",
          "username": "RomanTsai",
          "content": "Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 289490,
          "date": "Thu 21 Oct 2021 21:12",
          "username": "wind",
          "content": "C is correct, you don't need to care BGP.",
          "upvote_count": "1"
        },
        {
          "id": 269444,
          "date": "Thu 21 Oct 2021 07:23",
          "username": "MHKyaw",
          "content": "Keyword in question is \\\" After Configuring DirectConnect settings,\\\". So, we don't need to configure DirectConnect again. <br>I go with C. ",
          "upvote_count": "1"
        },
        {
          "id": 230784,
          "date": "Sat 16 Oct 2021 02:53",
          "username": "qkhanhpro",
          "content": "Answer is B<br>\\\"Important: Be sure that Direct Connect is the preferred route from your end, and not over VPN when the Direct Connect virtual interface is up in order to avoid asymmetric routing; this might cause traffic to be dropped. We always prefer a Direct Connect connection over VPN routes\\\"<br>Quoted from AWS. On the client side, the client's router must prefer DX to avoid traffix going in through VPC while going out through DX",
          "upvote_count": "1"
        },
        {
          "id": 195809,
          "date": "Thu 14 Oct 2021 04:22",
          "username": "cpal012",
          "content": "Definitely not C.  This is a common test trap. You cant point to a DC connection, only the VGW. Who sets the answers on this site?",
          "upvote_count": "4"
        },
        {
          "id": 182412,
          "date": "Sat 09 Oct 2021 12:42",
          "username": "ipindado2020",
          "content": "Agree with B",
          "upvote_count": "1"
        },
        {
          "id": 176294,
          "date": "Fri 08 Oct 2021 05:51",
          "username": "ashendy",
          "content": "Answer is B<br>You don't need to make any change in the routing table, because BGP will automatically handle any neededchanges in the route tables",
          "upvote_count": "3"
        },
        {
          "id": 155292,
          "date": "Thu 07 Oct 2021 17:43",
          "username": "sensor",
          "content": "Its not possible to point router table to direct connect connection, but vgw. Therefore B",
          "upvote_count": "3"
        },
        {
          "id": 152178,
          "date": "Mon 04 Oct 2021 03:42",
          "username": "RyanGhavidel",
          "content": "C - there is no BGP priority and also VPC rt prefers DX routes automatically",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company hosts a social media website for storing and sharing documents. The web application allows user to upload large files while resuming and pausing the upload as needed. Currently, files are uploaded to your PHP front end backed by Elastic Load Balancing and an autoscaling fleet of Amazon Elastic Compute<br>Cloud (EC2) instances that scale upon average of bytes received (NetworkIn). After a file has been uploaded, it is copied to Amazon Simple Storage Service (S3).<br>Amazon EC2 instances use an AWS Identity and Access Management (IAM) role that allows Amazon S3 uploads. Over the last six months, your user base and scale have increased significantly, forcing you to increase the Auto Scaling group's Max parameter a few times. Your CFO is concerned about rising costs and has asked you to adjust the architecture where needed to better optimize costs.<br>Which architecture change could you introduce to reduce costs and still keep your web application secure and scalable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. Replace the Auto Scaling launch configuration to include c3.8xlarge instances; those instances can potentially yield a network throuthput of 10gbps.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Re-architect your ingest pattern, have the app authenticate against your identity provider, and use your identity provider as a broker fetching temporary AWS credentials from AWS Secure Token Service (GetFederationToken). Securely pass the credentials and S3 endpoint/prefix to your app. Implement client-side logic to directly upload the file to Amazon S3 using the given credentials and S3 prefix.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Re-architect your ingest pattern, and move your web application instances into a VPC public subnet. Attach a public IP address for each EC2 instance (using the Auto Scaling launch configuration settings). Use Amazon Route 53 Round Robin records set and HTTP health check to DNS load balance the app requests; this approach will significantly reduce the cost by bypassing Elastic Load Balancing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Re-architect your ingest pattern, have the app authenticate against your identity provider, and use your identity provider as a broker fetching temporary AWS credentials from AWS Secure Token Service (GetFederationToken). Securely pass the credentials and S3 endpoint/prefix to your app. Implement client-side logic that used the S3 multipart upload API to directly upload the file to Amazon S3 using the given credentials and S3 prefix.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 9919,
          "date": "Fri 24 Sep 2021 03:21",
          "username": "DalianYifang",
          "content": "Ans is D. ",
          "upvote_count": "17"
        },
        {
          "id": 605343,
          "date": "Sun 22 May 2022 12:30",
          "username": "bobsmith2000",
          "content": "B od D. <br>It's for big files, so multi-part upload. Which means D",
          "upvote_count": "2"
        },
        {
          "id": 576333,
          "date": "Sun 27 Mar 2022 18:31",
          "username": "omishaaaa",
          "content": "I find D correct too, since the app allows to upload \\\"big files\\\", hence multi part uploads will add a great value here.",
          "upvote_count": "1"
        },
        {
          "id": 498629,
          "date": "Fri 10 Dec 2021 13:48",
          "username": "cldy",
          "content": "D.  Re-architect your ingest pattern, have the app authenticate against your identity provider, and use your identity provider as a broker fetching temporary AWS credentials from AWS Secure Token Service (GetFederationToken). Securely pass the credentials and S3 endpoint/prefix to your app. Implement client-side logic that used the S3 multipart upload API to directly upload the file to Amazon S3 using the given credentials and S3 prefix.",
          "upvote_count": "2"
        },
        {
          "id": 406345,
          "date": "Sat 06 Nov 2021 10:30",
          "username": "Akhil254",
          "content": "D Correct",
          "upvote_count": "1"
        },
        {
          "id": 368331,
          "date": "Wed 03 Nov 2021 17:55",
          "username": "rain_wu",
          "content": "D for sure",
          "upvote_count": "1"
        },
        {
          "id": 360276,
          "date": "Tue 02 Nov 2021 07:45",
          "username": "0103701037",
          "content": "D for sureresuming and pausing the upload is needed, so multi part upload is necessary",
          "upvote_count": "12"
        },
        {
          "id": 360289,
          "date": "Tue 02 Nov 2021 09:54",
          "username": "01037",
          "content": "resuming and pausing the upload is needed, so multi part upload is necessary",
          "upvote_count": "2"
        },
        {
          "id": 325789,
          "date": "Sun 31 Oct 2021 15:59",
          "username": "cldy",
          "content": "D. <br>to \\\"reduce costs and still keep your web application secure and scalable\\\".",
          "upvote_count": "1"
        },
        {
          "id": 298167,
          "date": "Fri 29 Oct 2021 06:04",
          "username": "bustedd",
          "content": "dddddddddddddd",
          "upvote_count": "1"
        },
        {
          "id": 297194,
          "date": "Tue 26 Oct 2021 09:18",
          "username": "RomanTsai",
          "content": "Ans is D.  <br>C definitely wrong.",
          "upvote_count": "2"
        },
        {
          "id": 176298,
          "date": "Sun 24 Oct 2021 09:01",
          "username": "ashendy",
          "content": "Ans is D",
          "upvote_count": "2"
        },
        {
          "id": 150472,
          "date": "Fri 22 Oct 2021 03:07",
          "username": "kratnesh",
          "content": "Answer should be D, using S3 pre-signed URL and Multipart upload is the recommended wayfor direct uploads to bucket",
          "upvote_count": "3"
        },
        {
          "id": 144018,
          "date": "Thu 21 Oct 2021 23:11",
          "username": "fullaws",
          "content": "D, multi upload, large file, support pause and resume",
          "upvote_count": "2"
        },
        {
          "id": 118004,
          "date": "Mon 18 Oct 2021 18:30",
          "username": "manoj101",
          "content": "To reduce the cost we need to remove EC2 instances from the middle. S3 is scalable & with HA so for just loading &Saving files it's most cost effective solution.",
          "upvote_count": "1"
        },
        {
          "id": 59406,
          "date": "Fri 15 Oct 2021 08:07",
          "username": "ripntear",
          "content": "Not sure I agree: Note: Multivalue answer routing is not a substitute for Elastic Load Balancing (ELB). Route 53 randomly selects any eight records. When you perform dig (on Linux) or nslookup (on Windows) on your domain name multiple times, you might notice that the IP addresses rotate. This rotation improves availability and provides some load balancing functionality. Your operating system performs this round-robin DNS for cached responses, not Route 53.",
          "upvote_count": "1"
        },
        {
          "id": 53563,
          "date": "Tue 12 Oct 2021 19:01",
          "username": "miracle",
          "content": "Answer is D - multipart upload and resume feature",
          "upvote_count": "4"
        },
        {
          "id": 50750,
          "date": "Sat 09 Oct 2021 14:04",
          "username": "Gorha",
          "content": "D is correct!",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You require the ability to analyze a customer's clickstream data on a website so they can do behavioral analysis. Your customer needs to know what sequence of pages and ads their customer clicked on. This data will be used in real time to modify the page layouts as customers click through the site to increase stickiness and advertising click-through.<br>Which option meets the requirements for captioning and analyzing this data?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Log clicks in weblogs by URL store to Amazon S3, and then analyze with Elastic MapReduce<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write click events directly to Amazon Redshift and then analyze with SQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish web clicks by session to an Amazon SQS queue then periodically drain these events to Amazon RDS and analyze with SQL.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 49933,
          "date": "Mon 20 Sep 2021 15:09",
          "username": "BillyC",
          "content": "B is COrret!",
          "upvote_count": "8"
        },
        {
          "id": 577726,
          "date": "Tue 29 Mar 2022 18:35",
          "username": "jj22222",
          "content": "B.  Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers",
          "upvote_count": "1"
        },
        {
          "id": 360294,
          "date": "Sat 06 Nov 2021 03:34",
          "username": "01037",
          "content": "B. <br>Standard AWS question.<br>kinesis whenever keyword \\\"real-time\\\" appears.",
          "upvote_count": "3"
        },
        {
          "id": 325792,
          "date": "Thu 28 Oct 2021 15:04",
          "username": "cldy",
          "content": "B. <br>Kinesis to support \\\"data will be used in real time\\\" requirement.",
          "upvote_count": "2"
        },
        {
          "id": 300956,
          "date": "Fri 22 Oct 2021 23:20",
          "username": "bustedd",
          "content": "bbbbbbbbbbbb",
          "upvote_count": "1"
        },
        {
          "id": 276711,
          "date": "Thu 21 Oct 2021 11:24",
          "username": "eji",
          "content": "key word is \\\"real-time\\\". so kinesis B",
          "upvote_count": "1"
        },
        {
          "id": 144022,
          "date": "Tue 05 Oct 2021 09:14",
          "username": "fullaws",
          "content": "B is corect",
          "upvote_count": "2"
        },
        {
          "id": 51470,
          "date": "Wed 29 Sep 2021 11:43",
          "username": "Gorha",
          "content": "sorry, typo, meant B!",
          "upvote_count": "3"
        },
        {
          "id": 50753,
          "date": "Tue 21 Sep 2021 08:33",
          "username": "Gorha",
          "content": "D is correct!",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance tor a total of seven EC2 instances. The web, application and database servers are deployed across two availability zones<br>(AZs). You also deploy an ELB in front of the two web servers, and use Route53 for DNS Web (raffle gradually increases in the first few days following the deployment, so you attempt to double the number of instances in each tier of the application to handle the new load unfortunately some of these new instances fail to launch.<br>Which of the following could be the root caused? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>A. AWS reserves the first and the last private IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Internet Gateway (IGW) of your VPC has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The ELB has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS reserves one IP address in each subnet's CIDR block for Route53 so you do not have enough addresses left to launch all of the new EC2 instances<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. AWS reserves the first four and the last IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 626432,
          "date": "Sun 03 Jul 2022 07:43",
          "username": "aandc",
          "content": "it's CE",
          "upvote_count": "3"
        },
        {
          "id": 587513,
          "date": "Mon 18 Apr 2022 09:04",
          "username": "Alexey79Alexey79Alexey79",
          "content": "DE as it’s only correct answers!!!<br><br>WRONG Question!!!<br>x2 AZs usage require x2 Subnets, x1 for each AZ.<br>But, Subnet can’t be /29!!!<br>“IPv4 block sizes must be between a /16 netmask and /28 netmask”<br>So only one Subnet and AZ is used.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.htmlhttps://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html<br>“<br>For example, in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved:<br>10.0.0.0: Network address.<br>10.0.0.1: Reserved by AWS for the VPC router.<br>10.0.0.2: Reserved by AWS. The IP address of the DNS server is the base of the VPC network range plus two. For VPCs with multiple CIDR blocks, the IP address of the DNS server is located in the primary CIDR. We also reserve the base of each subnet range plus two for all CIDR blocks in the VPC.  <br>Amazon DNS server = is an Amazon Route 53 Resolver server.<br>10.0.0.3: Reserved by AWS for future use.<br>10.0.0.255: Network broadcast address. We do not support broadcast in a VPC, therefore we reserve this address.<br>“<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html<br>“<br>The load balancer has one IP address per enabled Availability Zone.<br>“/28 is x16 IPs - x5 Reserved IPs = 11 available<br>11 - x2 Web Servers - x2 Application Servers - x2 db - x1 NAT Intance = 4 available<br>4 - x1 ELB IPs per x1 AZ = 3 available<br><br>Why NOT B:<br>IGW has no IP and scaling up will not consume IP Address.<br><br>Why NOT C:<br>“ELB … scaled-up” <br>Scaling EC2 instances in Subnet doesn’t take more IP Addresses of the ELB in AZ.",
          "upvote_count": "312"
        },
        {
          "id": 587514,
          "date": "Mon 18 Apr 2022 09:04",
          "username": "Alexey79Alexey79",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html<br>“<br>For example, in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved:<br>10.0.0.0: Network address.<br>10.0.0.1: Reserved by AWS for the VPC router.<br>10.0.0.2: Reserved by AWS. The IP address of the DNS server is the base of the VPC network range plus two. For VPCs with multiple CIDR blocks, the IP address of the DNS server is located in the primary CIDR. We also reserve the base of each subnet range plus two for all CIDR blocks in the VPC.  <br>Amazon DNS server = is an Amazon Route 53 Resolver server.<br>10.0.0.3: Reserved by AWS for future use.<br>10.0.0.255: Network broadcast address. We do not support broadcast in a VPC, therefore we reserve this address.<br>“<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html<br>“<br>The load balancer has one IP address per enabled Availability Zone.<br>“/28 is x16 IPs - x5 Reserved IPs = 11 available<br>11 - x2 Web Servers - x2 Application Servers - x2 db - x1 NAT Intance = 4 available<br>4 - x1 ELB IPs per x1 AZ = 3 available<br><br>Why NOT B:<br>IGW has no IP and scaling up will not consume IP Address.<br><br>Why NOT C:<br>“ELB … scaled-up” <br>Scaling EC2 instances in Subnet doesn’t take more IP Addresses of the ELB in AZ.",
          "upvote_count": "12"
        },
        {
          "id": 587515,
          "date": "Mon 18 Apr 2022 09:04",
          "username": "Alexey79",
          "content": "/28 is x16 IPs - x5 Reserved IPs = 11 available<br>11 - x2 Web Servers - x2 Application Servers - x2 db - x1 NAT Intance = 4 available<br>4 - x1 ELB IPs per x1 AZ = 3 available<br><br>Why NOT B:<br>IGW has no IP and scaling up will not consume IP Address.<br><br>Why NOT C:<br>“ELB … scaled-up” <br>Scaling EC2 instances in Subnet doesn’t take more IP Addresses of the ELB in AZ.",
          "upvote_count": "2"
        },
        {
          "id": 586302,
          "date": "Fri 15 Apr 2022 13:07",
          "username": "tartarus23",
          "content": "CE<br>The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use, and they cannot be assigned to a resource, such as an EC2 instance.",
          "upvote_count": "1"
        },
        {
          "id": 553410,
          "date": "Tue 22 Feb 2022 04:31",
          "username": "jyrajan69",
          "content": "10.0.0.0/28, means that 28 IP reserved for Network and 4 IP for the host, hence 2^4 which is 16. So from that 5 are reserved by AWS, hence only 11 IP's available for use. E is one definite answer. 7 of the IP's are in use, so only 4 are available now. B is IGW which is your access to the Internet. The IGW does not have any IP Address assigned to it, but can do NAT. So based on tht only possible is C.  Answer C and E. ",
          "upvote_count": "3"
        },
        {
          "id": 540217,
          "date": "Fri 04 Feb 2022 06:55",
          "username": "HellGate",
          "content": "B or C…<br><br>Both of them have feature of scaling out but does ELB consume more IPs than IGW when spike loads?",
          "upvote_count": "1"
        },
        {
          "id": 519177,
          "date": "Fri 07 Jan 2022 20:28",
          "username": "lucesarano",
          "content": "C,E are correct indeed, but please specify the CIDR notation for the people that may not be used to it.<br><br>10.0.0.0/28 has 14 ips available. Precisely,<br>from 10.0.0.1<br>to10.0.0.14<br><br>4 ips are reserved so availables ips are from 10.0.0.1 to 10.0.0.10<br><br>known fixed ips by reqs are 7 ips<br>variable ips are dictated by the Balancers, at least 1.<br>so at least 8 ips are busy, making only 2 ips for scaling up.<br><br>Hence, C, E. ",
          "upvote_count": "2"
        },
        {
          "id": 429594,
          "date": "Tue 12 Oct 2021 09:36",
          "username": "nwk",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-sizing-ipv4",
          "upvote_count": "3"
        },
        {
          "id": 360308,
          "date": "Sun 03 Oct 2021 06:02",
          "username": "01037",
          "content": "Yes CE",
          "upvote_count": "2"
        },
        {
          "id": 358052,
          "date": "Sat 02 Oct 2021 02:42",
          "username": "alfa2",
          "content": "CE is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#72",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company produces customer commissioned one-of-a-kind skiing helmets combining nigh fashion with custom technical enhancements Customers can show off their Individuality on the ski slopes and have access to head-up-displays. GPS rear-view cams and any other technical innovation they wish to embed in the helmet.<br>The current manufacturing process is data rich and complex including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards Assessments are a mixture of human and automated assessments you need to add a new set of assessment to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking.<br>What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?</p>",
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
              "choice": "<p>A. Use AWS Data Pipeline to manage movement of data & meta-data and assessments Use an auto-scaling group of G2 instances in a placement group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Simple Workflow (SWF) to manages assessments, movement of data & meta-data Use an auto-scaling group of G2 instances in a placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Simple Workflow (SWF) to manages assessments movement of data & meta-data Use an auto-scaling group of C3 instances with SR-IOV (Single Root I/O Virtualization).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS data Pipeline to manage movement of data & meta-data and assessments use auto-scaling group of C3 with SR-IOV (Single Root I/O virtualization).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40467,
          "date": "Mon 27 Sep 2021 08:23",
          "username": "CloudFloater",
          "content": "B<br>http://jayendrapatil.com/aws-swf/<br>Human and automated assessments with GPU and low latency networking",
          "upvote_count": "6"
        },
        {
          "id": 635769,
          "date": "Sun 24 Jul 2022 00:33",
          "username": "hilft",
          "content": "It's B. <br>aandc guy got the right point",
          "upvote_count": "1"
        },
        {
          "id": 626396,
          "date": "Sun 03 Jul 2022 05:33",
          "username": "aandc",
          "content": "\\\"manual and computerized evaluations\\\" -> SWF<br>\\\"GPU\\\" -> G2",
          "upvote_count": "3"
        },
        {
          "id": 547773,
          "date": "Tue 15 Feb 2022 14:13",
          "username": "tkanmani76",
          "content": "Choosing SWF for \\\"Assessments are a combination of manual and computerized evaluations\\\" and G4 happens to be the current standard for GPU loads. Nearest match is B. ",
          "upvote_count": "1"
        },
        {
          "id": 537825,
          "date": "Tue 01 Feb 2022 13:10",
          "username": "HellGateHellGate",
          "content": "A and B cannot be the answer since ASG cannot be used in placement group.If SWF needed over data Pipeline, my answer would be C. to support process change over time, SFW is needed over ETL tool (Data Pipeline).<br><br>The answer should be C. ",
          "upvote_count": "11"
        },
        {
          "id": 538444,
          "date": "Wed 02 Feb 2022 08:55",
          "username": "HellGate",
          "content": "to support process change over time, SFW is needed over ETL tool (Data Pipeline).<br><br>The answer should be C. ",
          "upvote_count": "1"
        },
        {
          "id": 534372,
          "date": "Fri 28 Jan 2022 05:49",
          "username": "kaush4u",
          "content": "should be C due to requirment of law latency networking",
          "upvote_count": "1"
        },
        {
          "id": 360865,
          "date": "Mon 25 Oct 2021 21:10",
          "username": "01037",
          "content": "B. <br>I think both data pipeline and swf work.<br>But data pipeline focuses on creation and management of periodic batch-processing data-driven workloads, particularly ones using AWS storage services.<br>So swf is a better fit here.",
          "upvote_count": "1"
        },
        {
          "id": 327330,
          "date": "Mon 25 Oct 2021 12:37",
          "username": "cldy",
          "content": "B. <br>hybrid automation - SWF<br>GPUs - G2 instance",
          "upvote_count": "1"
        },
        {
          "id": 152649,
          "date": "Tue 19 Oct 2021 06:28",
          "username": "kneelNkem",
          "content": "I think C is the answer,this is my reasoning for not selecting B.  <br>A cluster placement group is intended to increase network performance but it is best practice to create all instances in the placement at the same time, an autoscaling group implies instances can be added and deleted according to the load which goes against using placement groups. However using instances with Single Root I/O Virtualization can deliver low network latency without the constraints of cluster placement groups.<br>If my reasoning is wrong please let me know why :)Answer is B<br>A cluster placement group was not a requirement. There are other placement groups types other than cluster placement that would work fine with autoscaling.",
          "upvote_count": "11"
        },
        {
          "id": 172113,
          "date": "Tue 19 Oct 2021 14:27",
          "username": "Nkem",
          "content": "Answer is B<br>A cluster placement group was not a requirement. There are other placement groups types other than cluster placement that would work fine with autoscaling.",
          "upvote_count": "1"
        },
        {
          "id": 144518,
          "date": "Mon 11 Oct 2021 08:51",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 53569,
          "date": "Thu 30 Sep 2021 18:03",
          "username": "miracle",
          "content": "Answer is B.  It required GPU and SWF (Simple Workflow Service).",
          "upvote_count": "2"
        },
        {
          "id": 37964,
          "date": "Mon 20 Sep 2021 18:14",
          "username": "amog",
          "content": "Answer is B<br>\\\"hybrid approach\\\" and GPUs then using SWF with G2 instances",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing an SSL/TLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient.<br>Which of the following options would you consider for configuring the web server infrastructure? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Configure ELB with TCP listeners on TCP/443. And place the Web servers behind it.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set and configure health checks against all Web servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure ELB with HTTPS listeners, and place the Web servers behind it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure your web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 596282,
          "date": "Tue 03 May 2022 05:09",
          "username": "delfnec",
          "content": "A&C, i will choose A&C, both ALB and NLB can do that, but not cloudfront or route 53.",
          "upvote_count": "2"
        },
        {
          "id": 497760,
          "date": "Thu 09 Dec 2021 14:43",
          "username": "cldy",
          "content": "A.  Configure ELB with TCP listeners on TCP/443. And place the Web servers behind it.<br>B.  Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set and configure health checks against all Web servers.",
          "upvote_count": "1"
        },
        {
          "id": 361683,
          "date": "Sun 24 Oct 2021 14:56",
          "username": "01037",
          "content": "AB<br>Neither ALB nor Cloudfront supports client certificate.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#RequestCustomClientSideSslAuth",
          "upvote_count": "4"
        },
        {
          "id": 332938,
          "date": "Tue 05 Oct 2021 02:30",
          "username": "sevromv",
          "content": "https://www.reddit.com/r/aws/comments/862vxa/client_side_certificate_check_with_elb_in_aws/",
          "upvote_count": "1"
        },
        {
          "id": 332936,
          "date": "Sat 02 Oct 2021 21:07",
          "username": "sevromv",
          "content": "ELB does not do mutual authentication, aka client certificate authentication. You can use a TCP listener on an ELB on TCP/443 and pass the connection to your backing instances to do mutual authentication.",
          "upvote_count": "1"
        },
        {
          "id": 328095,
          "date": "Wed 29 Sep 2021 21:40",
          "username": "anandbabu",
          "content": "i will go with C D",
          "upvote_count": "2"
        },
        {
          "id": 314416,
          "date": "Wed 22 Sep 2021 08:33",
          "username": "TaherShaker",
          "content": "Correct Answer is A, B<br>https://medium.com/@dirk.avery/can-an-aws-web-server-authenticate-using-client-certificate-authentication-85c65bc2f145",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. www.example.com) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database.<br>During the migration you can change the application code, but you have to file a change request.<br>How would you implement the architecture on AWS in order to maximize scalability and high availability?</p>",
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
              "choice": "<p>A. File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different Azs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different Azs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different Azs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 535198,
          "date": "Sat 29 Jan 2022 06:12",
          "username": "tkanmani76",
          "content": "D is incorrect - it passes the Client IP part of header, when proxy protocol is enabled. How will this improve availability.<br>C will help ensure the load is distributed across instance in different AZs.",
          "upvote_count": "8"
        },
        {
          "id": 658511,
          "date": "Sat 03 Sep 2022 15:20",
          "username": "welcomeYM",
          "content": "cccccc",
          "upvote_count": "1"
        },
        {
          "id": 497784,
          "date": "Thu 09 Dec 2021 15:16",
          "username": "cldy",
          "content": "D.  File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different Azs.",
          "upvote_count": "1"
        },
        {
          "id": 327332,
          "date": "Wed 06 Oct 2021 01:17",
          "username": "cldy01037",
          "content": "D. <br>Proxy Protocol to obtain the clients IP address if the ELB is configured for TCP load balancing.<br>X-Forwarded-For headers to obtain the clients IP address if the ELB is configured for HTTP(s) load balancing.Yes, D",
          "upvote_count": "41"
        },
        {
          "id": 361686,
          "date": "Wed 27 Oct 2021 16:59",
          "username": "01037",
          "content": "Yes, D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a personal document-archiving solution for your global enterprise with thousands of employees. Each employee has potentially gigabytes of data to be backed up in this archiving solution. The solution will be exposed to the employees as an application, where they can just drag and drop their files to the archiving system. Employees can retrieve their archives through a web interface. The corporate network has high bandwidth AWS Direct Connect connectivity to<br>AWS.<br>You have a regulatory requirement that all data needs to be encrypted before being uploaded to the cloud.<br>How do you implement this in a highly available and cost-efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>A. Manage encryption keys on-premises in an encrypted relational database. Set up an on-premises server with sufficient storage to temporarily store files, and then upload them to Amazon S3, providing a client-side master key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Mange encryption keys in a Hardware Security Module (HSM) appliance on-premises serve r with sufficient storage to temporarily store, encrypt, and upload files directly into Amazon Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Manage encryption keys in Amazon Key Management Service (KMS), upload to Amazon Simple Storage Service (S3) with client-side encryption using a KMS customer master key ID, and configure Amazon S3 lifecycle policies to store each object using the Amazon Glacier storage tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Manage encryption keys in an AWS CloudHSM appliance. Encrypt files prior to uploading on the employee desktop, and then upload directly into Amazon Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 327340,
          "date": "Thu 14 Oct 2021 21:38",
          "username": "cldy",
          "content": "C. <br> Amazon S3 Encryption Client + KMS<br>https://docs.aws.amazon.com/kms/latest/developerguide/services-s3.html",
          "upvote_count": "7"
        },
        {
          "id": 717461,
          "date": "Sun 13 Nov 2022 19:47",
          "username": "evgeng",
          "content": "How could it be C?<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html<br>The encryption is happening on the Cloud... <br>And it does not matter that it is encrypted in transit as it is encrypted by TLS over HTTP. However, it appear unencrypted on S3 before it is encrypted with client provided key...<br>https://awsinfographics.s3.amazonaws.com/S3_Encryption_Infographic.png",
          "upvote_count": "1"
        },
        {
          "id": 533269,
          "date": "Wed 26 Jan 2022 21:47",
          "username": "AMKazi",
          "content": "C: client side encryption will ensure data is encrypted in transit as well",
          "upvote_count": "2"
        },
        {
          "id": 513991,
          "date": "Fri 31 Dec 2021 10:34",
          "username": "cldy",
          "content": "C: Amazon S3 Encryption Client + KMS",
          "upvote_count": "1"
        },
        {
          "id": 507038,
          "date": "Wed 22 Dec 2021 12:39",
          "username": "Ni_yot",
          "content": "C for me. AWS KMS and Client side Enc",
          "upvote_count": "1"
        },
        {
          "id": 429784,
          "date": "Sat 30 Oct 2021 12:44",
          "username": "nwk",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html",
          "upvote_count": "1"
        },
        {
          "id": 361691,
          "date": "Mon 18 Oct 2021 17:09",
          "username": "01037Jonfernz",
          "content": "Yes C<br>Glacier isn't necessary.C is the answer but not because Glacier isn't necessary.<br><br>The objects need to go through S3 first for client-side encryption before they are moved the Glacier. That's why C is the answer.",
          "upvote_count": "11"
        },
        {
          "id": 577606,
          "date": "Tue 29 Mar 2022 14:55",
          "username": "Jonfernz",
          "content": "C is the answer but not because Glacier isn't necessary.<br><br>The objects need to go through S3 first for client-side encryption before they are moved the Glacier. That's why C is the answer.",
          "upvote_count": "1"
        },
        {
          "id": 314420,
          "date": "Sun 26 Sep 2021 00:46",
          "username": "TaherShaker",
          "content": "You can use the Amazon S3 Encryption Client in the AWS SDK in your own application to encrypt objects and upload them to Amazon S3. This method allows you to encrypt your data locally to ensure its security as it passes to the Amazon S3 service. The Amazon S3 service receives your encrypted data; it does not play a role in encrypting or decrypting it.<br><br>The Amazon S3 Encryption Client encrypts the object by using envelope encryption. The client calls AWS KMS as a part of the encryption call you make when you pass your data to the client. AWS KMS verifies that you are authorized to use the customer master key (CMK) that you specify and, if so, returns a new plaintext data key and the data key encrypted under the CMK. The Amazon S3 Encryption Client encrypts the data by using the plaintext key and then deletes the key from memory. The encrypted data key is sent to Amazon S3 to store alongside your encrypted data.<br><br>References:<br>https://docs.aws.amazon.com/kms/latest/developerguide/services-s3.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a voting system for a popular TV show, viewers win watch the performances then visit the show's website to vote for their favorite performer.It is expected that in a short period of time after the show has finished the site will receive millions of visitors. The visitors will first login to the site using their Amazon.com credentials and then submit their vote.After the voting is completed the page will display the vote totals.The company needs to build the site such that can handle the rapid influx of traffic while maintaining good performance but also wants to keep costs to a minimum.<br>Which of the design patterns below should they use?</p>",
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
              "choice": "<p>A. Use CloudFront and an Elastic Load balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user then process the users vote and store the result into a multi-AZ Relational Database Service instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use CloudFront and the static website hosting feature of S3 with the Javascript SDK to call the Login With Amazon service to authenticate the user, use IAM Roles to gain permissions to a DynamoDB table to store the users vote.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login with Amazon service to authenticate the user, the web servers will process the users vote and store the result into a DynamoDB table using IAM Roles for EC2 instances to gain permissions to the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user, the web servers win process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 12802,
          "date": "Fri 08 Oct 2021 06:10",
          "username": "Mooncldybobsmith2000",
          "content": "D is correct. It would be more costly to scale the read and write of the DynamoDB for the million visitors peak time, while you can offload the read and write using SQS. That will reduce the high cost of read/write on DyDB. wont extra servers to process SQS increase the cost?Why not B?<br>DDB is able to sustain millions of writes.<br>With D you pay for ELB, numerous web servers, sqs, numerous of app servers. And how to make sure that all votes are written to DDB after the show is over? Watches have to wait untill app servers process all items in the queue and untill DDB lets them to write? <br><br>In the case of B: the JS can implement the exponential back-off to wait untill DDB finish scaling and lets writes (it maintains double capacity in case of a spike and uses some kind of predictive 1 scaling under the hood)",
          "upvote_count": "2223"
        },
        {
          "id": 328515,
          "date": "Wed 27 Oct 2021 04:00",
          "username": "cldy",
          "content": "wont extra servers to process SQS increase the cost?",
          "upvote_count": "2"
        },
        {
          "id": 601503,
          "date": "Sat 14 May 2022 11:04",
          "username": "bobsmith2000",
          "content": "Why not B?<br>DDB is able to sustain millions of writes.<br>With D you pay for ELB, numerous web servers, sqs, numerous of app servers. And how to make sure that all votes are written to DDB after the show is over? Watches have to wait untill app servers process all items in the queue and untill DDB lets them to write? <br><br>In the case of B: the JS can implement the exponential back-off to wait untill DDB finish scaling and lets writes (it maintains double capacity in case of a spike and uses some kind of predictive 1 scaling under the hood)",
          "upvote_count": "3"
        },
        {
          "id": 17514,
          "date": "Sun 10 Oct 2021 03:48",
          "username": "Warrenn",
          "content": "The answer is not C if DynamoDb is configured to auto-provision WCU then a burst in traffic is going to be very expense as million of users are going to make the WCU very high to handle the load, if DynamoDb has fixed WCU then the high sudden volume will cause errors. SQS is always better at dealing with normalizing bursts in traffic therefore D. ",
          "upvote_count": "7"
        },
        {
          "id": 657410,
          "date": "Fri 02 Sep 2022 14:25",
          "username": "welcomeYM",
          "content": "DDDDDDDDD",
          "upvote_count": "1"
        },
        {
          "id": 601498,
          "date": "Sat 14 May 2022 10:49",
          "username": "bobsmith2000",
          "content": "Why not B?<br>It's totally feasible. <br>Millions of visitors + keeping the cost low => Serverless, CloudFront -> S3 (JS) -> DDB. ",
          "upvote_count": "1"
        },
        {
          "id": 556817,
          "date": "Sat 26 Feb 2022 18:06",
          "username": "johnnsmithjohnnsmith",
          "content": "C is correct.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3Export.html <br>Log data can take up to 12 hours to become available for export. For near real-time analysis of log data, see Analyzing log data with CloudWatch Logs Insights or Real-time processing of log data with subscriptions instead.<br>Only C meets the RPO/RTO requirements.Sorry. This is meant for another question.",
          "upvote_count": "11"
        },
        {
          "id": 556873,
          "date": "Sat 26 Feb 2022 18:38",
          "username": "johnnsmith",
          "content": "Sorry. This is meant for another question.",
          "upvote_count": "1"
        },
        {
          "id": 496595,
          "date": "Wed 08 Dec 2021 07:40",
          "username": "cldy",
          "content": "D.  Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user, the web servers win process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.",
          "upvote_count": "1"
        },
        {
          "id": 361698,
          "date": "Sun 31 Oct 2021 03:37",
          "username": "01037",
          "content": "OK, I'll go with D. <br>Both B and C can be expensive if using on-demand capacity mode of DynamoDB. <br>But by adding some retry logic, I think I can work.",
          "upvote_count": "1"
        },
        {
          "id": 218441,
          "date": "Tue 26 Oct 2021 11:50",
          "username": "newme0103701037",
          "content": "I'm not sure which is right.<br>It seems people don't choose A or C, because it is said to be expensive.<br>But using on-demand capacity mode of DynamoDB, in US East (N. Virginia) Region, it's only $1.25 per million write request units. So with millions of visitors and 1 vote for each visitor, it only costs less than $20 for each performance.<br>And another thing, aggregation is needed after vote, but I don't think DynamoDB is good at aggregation. So is DynamoDB really a good choice?Oh, so it's not that expensive!?<br>As to aggression, create a new table for every event, use performer as hash key and visitor as range key, I think it works.So why not B?",
          "upvote_count": "111"
        },
        {
          "id": 361970,
          "date": "Sun 31 Oct 2021 13:12",
          "username": "0103701037",
          "content": "Oh, so it's not that expensive!?<br>As to aggression, create a new table for every event, use performer as hash key and visitor as range key, I think it works.So why not B?",
          "upvote_count": "11"
        },
        {
          "id": 361971,
          "date": "Fri 05 Nov 2021 14:18",
          "username": "01037",
          "content": "So why not B?",
          "upvote_count": "1"
        },
        {
          "id": 150488,
          "date": "Sun 24 Oct 2021 03:08",
          "username": "kratnesh",
          "content": "Answer D, using SQS the request rate will get flattened and make proper IOPS of DynamoDB to write and read data for millions of users.",
          "upvote_count": "1"
        },
        {
          "id": 144534,
          "date": "Wed 20 Oct 2021 03:10",
          "username": "fullaws",
          "content": "D is correct, agree, SQS is better than auto-provision WCU for dynamodb",
          "upvote_count": "1"
        },
        {
          "id": 40490,
          "date": "Tue 19 Oct 2021 03:49",
          "username": "CloudFloater",
          "content": "D<br>http://jayendrapatil.com/aws-storage-options-whitepaper/",
          "upvote_count": "2"
        },
        {
          "id": 37967,
          "date": "Sat 16 Oct 2021 20:12",
          "username": "amogamog",
          "content": "Answer is D<br>Keyword is \\\"After the voting is completed the page will display the vote totals\\\"For milions vote processing, we need SQS to do this",
          "upvote_count": "12"
        },
        {
          "id": 37968,
          "date": "Sun 17 Oct 2021 06:36",
          "username": "amog",
          "content": "For milions vote processing, we need SQS to do this",
          "upvote_count": "2"
        },
        {
          "id": 20030,
          "date": "Sat 16 Oct 2021 08:33",
          "username": "pra276",
          "content": "Answer D: <br>Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login. With Amazon service to authenticate the user, the web servers would process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table",
          "upvote_count": "4"
        },
        {
          "id": 10305,
          "date": "Fri 24 Sep 2021 05:34",
          "username": "awsec2",
          "content": "C is right .",
          "upvote_count": "1"
        },
        {
          "id": 9952,
          "date": "Wed 22 Sep 2021 08:20",
          "username": "DalianYifangbobsmith2000",
          "content": "Any comments on D to keep the cost to a minimum? Why not C? cheaper than D and it should be working correct. Any thoughts?Why not B? Even cheaper.",
          "upvote_count": "11"
        },
        {
          "id": 601501,
          "date": "Sat 14 May 2022 10:55",
          "username": "bobsmith2000",
          "content": "Why not B? Even cheaper.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a connectivity solution between on-premises infrastructure and Amazon VPC.  Your servers on-premises will be communicating with your VPC instances. You will be establishing IPSec tunnels over the Internet You will be using VPN gateways, and terminating the IPSec tunnels on AWS supported customer gateways.<br>Which of the following objectives would you achieve by implementing an IPSec tunnel as outlined above? (Choose four.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. End-to-end protection of data in transit<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. End-to-end Identity authentication<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Data encryption across the Internet<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Protection of data in transit over the Internet<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Peer identity authentication between VPN gateway and customer gateway<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Data integrity protection across the Internet<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 361977,
          "date": "Mon 20 Sep 2021 20:45",
          "username": "01037",
          "content": "My answer would be C,D,E,F. <br><br>For A, End to end protection means the secure tunnel has to be established between your EC2 instance and the on-perm machine. By establishing a VPN tunnel between VPC and your on-perm gateway does not achieve that, the traffic before entering and after exiting the VPN tunnel will not be encrypted.<br><br>For B, Same as A<br><br>For C, As explained in A, this is what you can achieve by established a VPN tunnel between the two gateway. (encryption only happen between the two VPN end point which protect the data when it travel on the internet)<br><br>For D, same as C<br><br>For E, When establishing the VPN tunnel, the two gateway will authenticate each other prior to form the VPN tunnel.<br><br>For F, same as C",
          "upvote_count": "9"
        },
        {
          "id": 643100,
          "date": "Fri 05 Aug 2022 23:21",
          "username": "CloudHandsOn",
          "content": "C,D,E,F were the first choices",
          "upvote_count": "1"
        },
        {
          "id": 499007,
          "date": "Sat 11 Dec 2021 00:37",
          "username": "challenger1",
          "content": "My answer: C, D, E, F<br>C.  Data encryption across the Internet<br>D.  Protection of data in transit over the Internet<br>E.  Peer identity authentication between VPN gateway and customer gateway<br>F.  Data integrity protection across the Internet",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are responsible for a web application that consists of an Elastic Load Balancing (ELB) load balancer in front of an Auto Scaling group of Amazon Elastic<br>Compute Cloud (EC2) instances. For a recent deployment of a new version of the application, a new Amazon Machine Image (AMI) was created, and the Auto<br>Scaling group was updated with a new launch configuration that refers to this new AMI. During the deployment, you received complaints from users that the website was responding with errors. All instances passed the ELB health checks.<br>What should you do in order to avoid errors for future deployments? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. Add an Elastic Load Balancing health check to the Auto Scaling group. Set a short period for the health checks to operate as soon as possible in order to prevent premature registration of the instance to the load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable EC2 instance CloudWatch alerts to change the launch configuration's AMI to the previous one. Gradually terminate instances that are using the new AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the Elastic Load Balancing health check configuration to target a part of the application that fully tests application health and returns an error if the tests fail.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new launch configuration that refers to the new AMI, and associate it with the group. Double the size of the group, wait for the new instances to become healthy, and reduce back to the original size. If new instances do not become healthy, associate the previous launch configuration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Increase the Elastic Load Balancing Unhealthy Threshold to a higher value to prevent an unhealthy instance from going into service behind the load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 517923,
          "date": "Thu 06 Jan 2022 03:52",
          "username": "AMKazibobsmith2000",
          "content": "Why A is not the right choice?\\\"All occurrences were found to be in good health by the ELB. \\\"<br>Adding ELB hc to ASG won't solve the issue. ELB hc in ASG doesn't influence instances registration in ELB, it's an instrument of ASG to replace them",
          "upvote_count": "63"
        },
        {
          "id": 612673,
          "date": "Tue 07 Jun 2022 12:09",
          "username": "bobsmith2000",
          "content": "\\\"All occurrences were found to be in good health by the ELB. \\\"<br>Adding ELB hc to ASG won't solve the issue. ELB hc in ASG doesn't influence instances registration in ELB, it's an instrument of ASG to replace them",
          "upvote_count": "3"
        },
        {
          "id": 624420,
          "date": "Wed 29 Jun 2022 06:42",
          "username": "adsdadasdadhilft",
          "content": "This makes me so angry, D has a solution in aws which you specify. Its the rollout strategy and you should use a rolling update. Autoscaling groups have rollout strategys. The other is C as this will be essential for application health monitoring.That sounds like this question is outdated.",
          "upvote_count": "21"
        },
        {
          "id": 637691,
          "date": "Wed 27 Jul 2022 02:07",
          "username": "hilft",
          "content": "That sounds like this question is outdated.",
          "upvote_count": "1"
        },
        {
          "id": 613040,
          "date": "Wed 08 Jun 2022 04:52",
          "username": "Anhdd",
          "content": "No doubt, it's CD",
          "upvote_count": "2"
        },
        {
          "id": 582730,
          "date": "Fri 08 Apr 2022 09:16",
          "username": "jyrajan69",
          "content": "As far as i know you can check the health of an EC2 instance so do highlight how is C possible, how do use ELB to target part of the app? So for me C is out. Only A and D make sense.",
          "upvote_count": "3"
        },
        {
          "id": 530171,
          "date": "Sun 23 Jan 2022 01:41",
          "username": "jj22222",
          "content": "C, D look right",
          "upvote_count": "2"
        },
        {
          "id": 499264,
          "date": "Sat 11 Dec 2021 10:26",
          "username": "cldy",
          "content": "C.  Set the Elastic Load Balancing health check configuration to target a part of the application that fully tests application health and returns an error if the tests fail.<br>D.  Create a new launch configuration that refers to the new AMI, and associate it with the group. Double the size of the group, wait for the new instances to become healthy, and reduce back to the original size. If new instances do not become healthy, associate the previous launch configuration.",
          "upvote_count": "3"
        },
        {
          "id": 361980,
          "date": "Thu 21 Oct 2021 21:03",
          "username": "01037",
          "content": "Yes CD",
          "upvote_count": "2"
        },
        {
          "id": 358075,
          "date": "Tue 12 Oct 2021 18:05",
          "username": "alfa2",
          "content": "CD is correct",
          "upvote_count": "2"
        },
        {
          "id": 314549,
          "date": "Sat 02 Oct 2021 18:25",
          "username": "ExtHo",
          "content": "CD Correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which is a valid Amazon Resource name (ARN) for IAM?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. aws:iam::123456789012:instance-profile/Webserver<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. arn:aws:iam::123456789012:instance-profile/Webserver<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 123456789012:aws:iam::instance-profile/Webserver<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. arn:aws:iam::123456789012::instance-profile/Webserver<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577830,
          "date": "Tue 29 Mar 2022 20:37",
          "username": "jj22222",
          "content": "B.  arn:aws:iam::123456789012:instance-profile/Webserver",
          "upvote_count": "1"
        },
        {
          "id": 535967,
          "date": "Sun 30 Jan 2022 07:11",
          "username": "HellGateHellGate",
          "content": "I need explanation on using two :, why use \\\"::\\\" before account?It's even not mentioned on regular ARN format.I got it... <br>region is always blank for IAM resource.It's not two :, there's blank for resource.",
          "upvote_count": "13"
        },
        {
          "id": 535969,
          "date": "Sun 30 Jan 2022 07:14",
          "username": "HellGate",
          "content": "I got it... <br>region is always blank for IAM resource.It's not two :, there's blank for resource.",
          "upvote_count": "3"
        },
        {
          "id": 361985,
          "date": "Mon 18 Oct 2021 19:10",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 328517,
          "date": "Tue 12 Oct 2021 21:30",
          "username": "cldy",
          "content": "B. <br>ARN format ->arn:aws:service:region:account:resource",
          "upvote_count": "2"
        },
        {
          "id": 317325,
          "date": "Tue 28 Sep 2021 20:00",
          "username": "ExtHo",
          "content": "AM ARNs<br>Most resources have a friendly name (for example, a user named Bob or a group named Developers). However, the permissions policy language requires you to specify the resource or resources using the following Amazon Resource Name (ARN) format.<br><br>arn:partition:service:region:account:resource<br>Where:<br><br>partition identifies the partition that the resource is in. For standard AWS Regions, the partition is aws. If you have resources in other partitions, the partition is aws-partitionname. For example, the partition for resources in the China (Beijing) Region is aws-cn. You cannot delegate access between accounts in different partitions.<br><br>service identifies the AWS product. For IAM resources, this is always iam.<br><br>region is the Region the resource resides in. For IAM resources, this is always kept blank.<br><br>account is the AWS account ID with no hyphens (for example, 123456789012).<br><br>resource is the portion that identifies the specific resource by name.",
          "upvote_count": "1"
        },
        {
          "id": 53680,
          "date": "Sat 25 Sep 2021 01:37",
          "username": "miracle",
          "content": "Answer is B",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Dave is the main administrator in Example Corp., and he decides to use paths to help delineate the users in the company and set up a separate administrator group for each path-based division. Following is a subset of the full list of paths he plans to use:<br>* /marketing<br>* /sales<br>* /legal<br>Dave creates an administrator group for the marketing part of the company and calls it Marketing_Admin.<br>He assigns it the /marketing path. The group's ARN is arn:aws:iam::123456789012:group/marketing/Marketing_Admin.<br>Dave assigns the following policy to the Marketing_Admin group that gives the group permission to use all IAM actions with all groups and users in the /marketing path. The policy also gives the Marketing_Admin group permission to perform any AWS S3 actions on the objects in the portion of the corporate bucket.<br>{<br>\"Version\": \"2012-10-17\",<br>\"Statement\": [<br>{<br>\"Effect\": \"Deny\",<br>\"Action\": \"iam:*\",<br>\"Resource\": [<br>\"arn:aws:iam::123456789012:group/marketing/*\",<br>\"arn:aws:iam::123456789012:user/marketing/*\"<br>]<br>},<br>{<br>\"Effect\": \"Allow\",<br>\"Action\": \"s3:*\",<br>\"Resource\": \"arn:aws:s3:::example_bucket/marketing/*\"<br>},<br>{<br>\"Effect\": \"Allow\",<br>\"Action\": \"s3:ListBucket*\",<br>\"Resource\": \"arn:aws:s3:::example_bucket\",<br>\"Condition\":{\"StringLike\":{\"s3:prefix\": \"marketing/*\"}}<br>}<br>]<br>}</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. True<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. False<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 99708,
          "date": "Mon 11 Oct 2021 01:45",
          "username": "oatif",
          "content": "\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"iam:*\\\",<br>\\\"Resource\\\": [<br>\\\"arn:aws:iam::123456789012:group/marketing/*\\\",<br><br>at the very top there is deny",
          "upvote_count": "6"
        },
        {
          "id": 636814,
          "date": "Mon 25 Jul 2022 18:09",
          "username": "hilft",
          "content": "deny IAM activity.<br>False",
          "upvote_count": "1"
        },
        {
          "id": 561791,
          "date": "Sun 06 Mar 2022 06:59",
          "username": "Alvindo",
          "content": "questions dissapeard :0",
          "upvote_count": "1"
        },
        {
          "id": 504992,
          "date": "Sun 19 Dec 2021 17:54",
          "username": "AkaAka4",
          "content": "Wait, what? Where's the question? :0",
          "upvote_count": "3"
        },
        {
          "id": 328519,
          "date": "Tue 26 Oct 2021 10:54",
          "username": "cldy",
          "content": "B.  FALSE. <br>Deny ALL actions on IAM (iam:*)",
          "upvote_count": "1"
        },
        {
          "id": 277497,
          "date": "Mon 18 Oct 2021 12:09",
          "username": "eji",
          "content": "we can't specific bucket in s3:listbucket. CMIIW",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your fortune 500 company has under taken a TCO analysis evaluating the use of Amazon S3 versus acquiring more hardware The outcome was that ail employees would be granted access to use Amazon S3 for storage of their personal documents.<br>Which of the following will you need to consider so you can set up a solution that incorporates single sign-on from your corporate AD or LDAP directory and restricts access for each user to a designated user folder in a bucket? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Setting up a federation proxy or identity provider<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Using AWS Security Token Service to generate temporary tokens<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Tagging each folder in the bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configuring IAM role<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Setting up a matching IAM user for every user in your corporate directory that needs access to a folder in the bucket<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 366046,
          "date": "Sun 03 Oct 2021 00:37",
          "username": "01037",
          "content": "ABDですね",
          "upvote_count": "7"
        },
        {
          "id": 625551,
          "date": "Fri 01 Jul 2022 05:18",
          "username": "jyrajan69",
          "content": "If you with ABD, how do address this , limits access for each user to a defined user folder in a bucket?, because it using AD, then A for sure, but between B and D, when you create a Role is does call up the STS Service, so I will go with D, and that will have every user access his folder, so for me I will go with ACD",
          "upvote_count": "1"
        },
        {
          "id": 577816,
          "date": "Tue 29 Mar 2022 20:18",
          "username": "jj22222",
          "content": "ABD looks right",
          "upvote_count": "2"
        },
        {
          "id": 459232,
          "date": "Tue 12 Oct 2021 22:38",
          "username": "Bhagirathi",
          "content": "ABD is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a batch analysis every hour on their main transactional DB, running on an RDS MySQL instance, to populate their central Data Warehouse running on Redshift. During the execution of the batch, their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team.<br>How would you optimize this scenario to solve performance issues and automate the process as much as possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>A. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace RDS with Redshift for the oaten analysis and SQS to send a message to the on-premises system to update the dashboard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 52930,
          "date": "Fri 15 Oct 2021 00:16",
          "username": "cloudinvaderkaushchigo17chigo17",
          "content": "C is correct as \\\"solve performance issues \\\" by ReadReplica \\\" and automate\\\" SNSBatch analysis is not the intended purpose for OLAP DB, That should be done by OLAP Database such as Redshift?? OLAP or OLAP.A should be the answer",
          "upvote_count": "8111"
        },
        {
          "id": 173167,
          "date": "Sun 17 Oct 2021 23:25",
          "username": "kaushchigo17chigo17",
          "content": "Batch analysis is not the intended purpose for OLAP DB, That should be done by OLAP Database such as Redshift?? OLAP or OLAP.A should be the answer",
          "upvote_count": "111"
        },
        {
          "id": 300410,
          "date": "Sat 23 Oct 2021 04:34",
          "username": "chigo17chigo17",
          "content": "?? OLAP or OLAP.A should be the answer",
          "upvote_count": "11"
        },
        {
          "id": 300411,
          "date": "Sat 23 Oct 2021 23:31",
          "username": "chigo17",
          "content": "A should be the answer",
          "upvote_count": "1"
        },
        {
          "id": 495742,
          "date": "Tue 07 Dec 2021 08:41",
          "username": "cldy",
          "content": "C.  Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard",
          "upvote_count": "1"
        },
        {
          "id": 366049,
          "date": "Sat 30 Oct 2021 20:10",
          "username": "01037",
          "content": "Absolutely C",
          "upvote_count": "1"
        },
        {
          "id": 328646,
          "date": "Mon 25 Oct 2021 09:22",
          "username": "cldy",
          "content": "C. <br>Read Replica for performance<br>SNS for notification",
          "upvote_count": "1"
        },
        {
          "id": 50968,
          "date": "Tue 05 Oct 2021 16:59",
          "username": "Gorha",
          "content": "C is correct!",
          "upvote_count": "2"
        },
        {
          "id": 37985,
          "date": "Mon 04 Oct 2021 19:14",
          "username": "amog",
          "content": "Answer is C",
          "upvote_count": "2"
        },
        {
          "id": 27640,
          "date": "Mon 27 Sep 2021 21:47",
          "username": "sorok7",
          "content": "for the A",
          "upvote_count": "3"
        },
        {
          "id": 9969,
          "date": "Sun 26 Sep 2021 22:53",
          "username": "DalianYifang",
          "content": "never mind.",
          "upvote_count": "1"
        },
        {
          "id": 9968,
          "date": "Sat 25 Sep 2021 05:08",
          "username": "DalianYifangtan9user0001",
          "content": "Why not A?C is correct, since datawarehouse and traditional relational database is not the same thing. A data warehouse exists as a layer on top of another database or databases (usually OLTP databases).you dont want to change the database",
          "upvote_count": "251"
        },
        {
          "id": 29180,
          "date": "Thu 30 Sep 2021 11:42",
          "username": "tan9user0001",
          "content": "C is correct, since datawarehouse and traditional relational database is not the same thing. A data warehouse exists as a layer on top of another database or databases (usually OLTP databases).you dont want to change the database",
          "upvote_count": "51"
        },
        {
          "id": 598590,
          "date": "Sun 08 May 2022 16:58",
          "username": "user0001",
          "content": "you dont want to change the database",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application s database.<br>You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented Elasticache as a database caching layer between the application tier and database tier.<br>Please select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database.</p>",
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
              "choice": "<p>A. Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a RDS Read Replica connected to your Multi AZ master database and generate reports by querying the Read Replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Generate the reports by querying the ElastiCache database caching tier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 32023,
          "date": "Mon 27 Sep 2021 15:19",
          "username": "cinopi",
          "content": "C is correct because Cache won't represent full DB. Here, we need aggregation on whole DB which can be with Read Replica",
          "upvote_count": "12"
        },
        {
          "id": 577287,
          "date": "Tue 29 Mar 2022 08:26",
          "username": "Mimek",
          "content": "C<br>typical use case of RDS read-replicas",
          "upvote_count": "2"
        },
        {
          "id": 534342,
          "date": "Fri 28 Jan 2022 04:28",
          "username": "AMKazi",
          "content": "ans is c: <br>https://aws.amazon.com/rds/features/multi-az/#:~:text=Several%20Amazon%20RDS%20engines%20allow,instances%20in%20a%20different%20AZ.<br>B: is not possible. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html<br>A Multi-AZ DB instance deployment has one standby DB instance that provides failover support, but doesn't serve read traffic.",
          "upvote_count": "1"
        },
        {
          "id": 514016,
          "date": "Fri 31 Dec 2021 10:59",
          "username": "cldy",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 477021,
          "date": "Fri 12 Nov 2021 16:20",
          "username": "mnsait",
          "content": "C<br>This is a typical use case for read-replica. It is an Architect Associate level question :)",
          "upvote_count": "1"
        },
        {
          "id": 366052,
          "date": "Wed 03 Nov 2021 10:09",
          "username": "01037",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 328651,
          "date": "Tue 02 Nov 2021 20:22",
          "username": "cldy",
          "content": "C. <br>Remember cache is not the DB.  For reporting you need a replica DB. ",
          "upvote_count": "1"
        },
        {
          "id": 197109,
          "date": "Thu 28 Oct 2021 15:06",
          "username": "encraze",
          "content": "But if ElastiCache is using the write-through strategy and TTL is 30+ mins, then D is an option.",
          "upvote_count": "1"
        },
        {
          "id": 144618,
          "date": "Fri 22 Oct 2021 23:30",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 141335,
          "date": "Tue 19 Oct 2021 22:27",
          "username": "learner4evercpal01201037Ni_yot",
          "content": "Why not B? The data is already available in standby RDS MySQL.That is not accessible to you. You can't query from that DBAgreed.The standby DB is always offline.So not accessible",
          "upvote_count": "1212"
        },
        {
          "id": 196626,
          "date": "Thu 28 Oct 2021 13:40",
          "username": "cpal01201037",
          "content": "That is not accessible to you. You can't query from that DBAgreed.",
          "upvote_count": "21"
        },
        {
          "id": 366051,
          "date": "Wed 03 Nov 2021 05:47",
          "username": "01037",
          "content": "Agreed.",
          "upvote_count": "1"
        },
        {
          "id": 507183,
          "date": "Wed 22 Dec 2021 15:52",
          "username": "Ni_yot",
          "content": "The standby DB is always offline.So not accessible",
          "upvote_count": "2"
        },
        {
          "id": 136947,
          "date": "Tue 19 Oct 2021 00:36",
          "username": "AWSChia",
          "content": "C is the answer.<br><br>One of the use cases of Read Replica is for business reporting and cached data wouldn't represent the entire reports.",
          "upvote_count": "2"
        },
        {
          "id": 54386,
          "date": "Tue 12 Oct 2021 14:06",
          "username": "miracle",
          "content": "Answer is C.  Very simple.",
          "upvote_count": "1"
        },
        {
          "id": 52934,
          "date": "Tue 05 Oct 2021 06:13",
          "username": "cloudinvader",
          "content": "Yes its C, As Cache layer will keep most read content and report need to generate on the aggregation of latest changes in DB.  So using ReadReplica we can create reports without impacting main RDS.",
          "upvote_count": "3"
        },
        {
          "id": 50970,
          "date": "Sat 02 Oct 2021 21:48",
          "username": "Gorha",
          "content": "C is correct!",
          "upvote_count": "2"
        },
        {
          "id": 38013,
          "date": "Tue 28 Sep 2021 22:41",
          "username": "amog",
          "content": "Answer is C",
          "upvote_count": "2"
        },
        {
          "id": 31020,
          "date": "Sun 26 Sep 2021 14:26",
          "username": "dojoGorha",
          "content": "Caching layer is already there. no need to add Read Replica.<br>D is my answerThe caching wouldn't grantee all data required for reporting is there. It only keeps frequent reads",
          "upvote_count": "27"
        },
        {
          "id": 50972,
          "date": "Sun 03 Oct 2021 10:17",
          "username": "Gorha",
          "content": "The caching wouldn't grantee all data required for reporting is there. It only keeps frequent reads",
          "upvote_count": "7"
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a data leak prevention solution for your VPC environment. You want your VPC Instances to be able to access software depots and distributions on the Internet for product updates. The depots and distributions are accessible via third party CDNs by their URLs.<br>You want to explicitly deny any other outbound connections from your VPC instances to hosts on the internet.<br>Which of the following options would you consider?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>A. Configure a web proxy server in your VPC and enforce URL-based rules for outbound access Remove default routes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement security groups and configure outbound rules to only permit traffic to software depots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move all your instances into private VPC subnets remove default routes from all routing tables and add specific routes to the software depots and distributions only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement network access control lists to all specific destinations, with an Implicit deny all rule.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 38018,
          "date": "Mon 20 Sep 2021 16:46",
          "username": "amog",
          "content": "Answer is A<br>Security group and NACL cannot have URLs in the rules nor does the route",
          "upvote_count": "13"
        },
        {
          "id": 366137,
          "date": "Fri 15 Oct 2021 02:44",
          "username": "01037",
          "content": "A<br>CDN, so IP is fixed",
          "upvote_count": "1"
        },
        {
          "id": 328653,
          "date": "Sun 10 Oct 2021 07:39",
          "username": "cldy",
          "content": "A. <br>SG/NACL/RT cannot help with URL whitelisting.",
          "upvote_count": "1"
        },
        {
          "id": 268857,
          "date": "Sat 09 Oct 2021 02:36",
          "username": "aimar047",
          "content": "Answer A seems correct but removing default routes not possible",
          "upvote_count": "1"
        },
        {
          "id": 54388,
          "date": "Thu 23 Sep 2021 21:38",
          "username": "miracle",
          "content": "Answer is A.  <br>SG is for allow only.<br>NACL is for deny and allow but cannot only via IP or Port. Cannot deny url.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have an application running on an EC2 instance which will allow users to download files from a private S3 bucket using a pre-signed URL. Before generating the URL, the application should verify the existence of the file in S3.<br>How should the application use AWS credentials to access the S3 bucket securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Use the AWS account access keys; the application retrieves the credentials from the source code of the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role for EC2 that allows list access to objects in the S3 bucket; launch the Instance with the role, and retrieve the role's credentials from the EC2 instance metadata.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user for the application with permissions that allow list access to the S3 bucket; the application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the Application user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user for the application with permissions that allow list access to the S3 bucket; launch the instance as the IAM user, and retrieve the IAM user's credentials from the EC2 instance user data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635814,
          "date": "Sun 24 Jul 2022 02:21",
          "username": "hilft",
          "content": "B.  <br>the keyword here is IAM role and metadata. userdata is irrelevant",
          "upvote_count": "2"
        },
        {
          "id": 443002,
          "date": "Mon 01 Nov 2021 16:22",
          "username": "kashi1983",
          "content": "Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 366139,
          "date": "Tue 21 Sep 2021 12:43",
          "username": "01037",
          "content": "B for sure",
          "upvote_count": "1"
        },
        {
          "id": 328655,
          "date": "Mon 20 Sep 2021 09:05",
          "username": "cldy",
          "content": "B. <br>IAM role for EC2 to access objects In the S3 bucket.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your system recently experienced down time during the troubleshooting process. You found that a new administrator mistakenly terminated several production<br>EC2 instances.<br>Which of the following strategies will help prevent a similar situation in the future?<br>The administrator still must be able to:<br>✑ launch, start stop, and terminate development resources.<br>✑ launch and start production instances.</p>",
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
              "choice": "<p>A. Create an IAM user, which is not allowed to terminate instances by leveraging production EC2 termination protection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Leverage resource based tagging, along with an IAM user which can prevent specific users from terminating production, EC2 resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 38049,
          "date": "Wed 06 Oct 2021 04:50",
          "username": "amogIbranthovickaparahelpaws",
          "content": "Answer is B<br>Keyword is \\\"launch and start production instances\\\" => C does not stop him to do terminate\\\" still must be able to:<br>✑ launch, start stop, and terminate development resources.\\\"<br><br>It is CLaunch, start, stop and terminate **development** resources\\\" - notice this is development environment. <br>The production environment requirement is that they can only \\\"launch and start production instances\\\" - they should not be able to terminate, so B is correct.it's C.  Keyword here actually is \\\"mistake.\\\" This will prevent mistake only.",
          "upvote_count": "9423"
        },
        {
          "id": 100511,
          "date": "Mon 25 Oct 2021 10:20",
          "username": "Ibranthovickapara",
          "content": "\\\" still must be able to:<br>✑ launch, start stop, and terminate development resources.\\\"<br><br>It is CLaunch, start, stop and terminate **development** resources\\\" - notice this is development environment. <br>The production environment requirement is that they can only \\\"launch and start production instances\\\" - they should not be able to terminate, so B is correct.",
          "upvote_count": "42"
        },
        {
          "id": 675740,
          "date": "Thu 22 Sep 2022 07:01",
          "username": "kapara",
          "content": "Launch, start, stop and terminate **development** resources\\\" - notice this is development environment. <br>The production environment requirement is that they can only \\\"launch and start production instances\\\" - they should not be able to terminate, so B is correct.",
          "upvote_count": "2"
        },
        {
          "id": 642014,
          "date": "Wed 03 Aug 2022 18:46",
          "username": "helpaws",
          "content": "it's C.  Keyword here actually is \\\"mistake.\\\" This will prevent mistake only.",
          "upvote_count": "3"
        },
        {
          "id": 40618,
          "date": "Sat 23 Oct 2021 17:51",
          "username": "CloudFloater",
          "content": "B<br>http://jayendrapatil.com/tag/tags/",
          "upvote_count": "5"
        },
        {
          "id": 658922,
          "date": "Sun 04 Sep 2022 04:39",
          "username": "welcomeYM",
          "content": "CCCCCC",
          "upvote_count": "2"
        },
        {
          "id": 636801,
          "date": "Mon 25 Jul 2022 17:53",
          "username": "hilft",
          "content": "thought it was D.  not B. ",
          "upvote_count": "1"
        },
        {
          "id": 626430,
          "date": "Sun 03 Jul 2022 07:39",
          "username": "aandc",
          "content": "key word \\\"launch and start production instances.\\\"-> terminate production should be prohibited",
          "upvote_count": "1"
        },
        {
          "id": 618732,
          "date": "Sun 19 Jun 2022 17:15",
          "username": "Kb80",
          "content": "C.  https://aws.amazon.com/premiumsupport/knowledge-center/accidental-termination/",
          "upvote_count": "2"
        },
        {
          "id": 595312,
          "date": "Sat 30 Apr 2022 23:56",
          "username": "tartarus23",
          "content": "B.  because it allows u separate dev and prod instances and utilize IAM to disable the prod termination access",
          "upvote_count": "2"
        },
        {
          "id": 594725,
          "date": "Sat 30 Apr 2022 01:29",
          "username": "tartarus23",
          "content": "b lets you separate dev and prod",
          "upvote_count": "1"
        },
        {
          "id": 554189,
          "date": "Wed 23 Feb 2022 06:36",
          "username": "jyrajan69",
          "content": "A B and D assume that you will login as this user that has been created, what if he is not logged in as that user? Therefore only possible answer is C",
          "upvote_count": "1"
        },
        {
          "id": 540207,
          "date": "Fri 04 Feb 2022 06:22",
          "username": "HellGateHellGate",
          "content": "CCCCCCChange to B",
          "upvote_count": "21"
        },
        {
          "id": 540208,
          "date": "Fri 04 Feb 2022 06:24",
          "username": "HellGate",
          "content": "Change to B",
          "upvote_count": "1"
        },
        {
          "id": 521885,
          "date": "Wed 12 Jan 2022 04:01",
          "username": "CoryDlulz111",
          "content": "Correct answer is C.  Ignore everyone sayings it's B. ..IT'S NOT B. The requirement states that he still needs to be able to delete resources after the fix is implemented. This question was made for termination protection and MFA just adds onto it.It states that he has to be able to terminate DEVELOPMENT resources after the fix, not all resources. The idea here is to allow them to continue to interact with dev ec2 instances but not kill prod instances.",
          "upvote_count": "21"
        },
        {
          "id": 534007,
          "date": "Thu 27 Jan 2022 19:04",
          "username": "lulz111",
          "content": "It states that he has to be able to terminate DEVELOPMENT resources after the fix, not all resources. The idea here is to allow them to continue to interact with dev ec2 instances but not kill prod instances.",
          "upvote_count": "1"
        },
        {
          "id": 507314,
          "date": "Wed 22 Dec 2021 20:10",
          "username": "bwestpha",
          "content": "Pretty sure its C . He still has to be able to terminate them, just noty accident. Yes MFA won't help here, but termination protection does.",
          "upvote_count": "2"
        },
        {
          "id": 367728,
          "date": "Wed 03 Nov 2021 07:32",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 223311,
          "date": "Tue 02 Nov 2021 20:36",
          "username": "newme",
          "content": "B. <br>Finally understand why D isn't the answer.<br>D doesn't provide a solution to determine the difference between DEV and PROD. ",
          "upvote_count": "1"
        },
        {
          "id": 176165,
          "date": "Sun 31 Oct 2021 22:07",
          "username": "manoj101",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 144650,
          "date": "Fri 29 Oct 2021 13:19",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "3"
        },
        {
          "id": 18911,
          "date": "Thu 23 Sep 2021 21:10",
          "username": "Teriexamaccjimmy_sticks",
          "content": "why not C?Because he can still terminate instance as he is IAM user so will have access to MFA as well. By using policy to deny termination will not let him to do that.yeah, but he still should be able to terminate instances as per the requirements. i reckon it is C",
          "upvote_count": "233"
        },
        {
          "id": 23246,
          "date": "Mon 27 Sep 2021 08:06",
          "username": "examaccjimmy_sticks",
          "content": "Because he can still terminate instance as he is IAM user so will have access to MFA as well. By using policy to deny termination will not let him to do that.yeah, but he still should be able to terminate instances as per the requirements. i reckon it is C",
          "upvote_count": "33"
        },
        {
          "id": 126083,
          "date": "Tue 26 Oct 2021 14:44",
          "username": "jimmy_sticks",
          "content": "yeah, but he still should be able to terminate instances as per the requirements. i reckon it is C",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A 3-tier e-commerce web application is current deployed on-premises and will be migrated to AWS for greater scalability and elasticity. The web server currently shares read-only data using a network distributed file system. The app server tier uses a clustering mechanism for discovery and shared session state that depends on IP multicast. The database tier uses shared-storage clustering to provide database fall over capability, and uses several read slaves for scaling. Data on all servers and the distributed file system directory is backed up weekly to off-site tapes.<br>Which AWS storage and database architecture meets the requirements of the application?</p>",
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
              "choice": "<p>A. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Web servers: store read-only data in an EC2 NFS server; mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 441701,
          "date": "Sun 07 Nov 2021 06:02",
          "username": "sergioandreslq",
          "content": "The same question as 87, the answer is C. ",
          "upvote_count": "8"
        },
        {
          "id": 714443,
          "date": "Wed 09 Nov 2022 10:55",
          "username": "tradaz",
          "content": "A is wrong, backing up to glacier is not a thing<br>B is wrong, IP multicast not available in AWS<br>I'll be left with C",
          "upvote_count": "1"
        },
        {
          "id": 703901,
          "date": "Tue 25 Oct 2022 15:21",
          "username": "resnef",
          "content": "I think the answer is B",
          "upvote_count": "1"
        },
        {
          "id": 603605,
          "date": "Thu 19 May 2022 06:46",
          "username": "bobsmith2000",
          "content": "C complies to all stipulations.<br>S3, unicast, RDS read replicas, Ami + db snapshots",
          "upvote_count": "2"
        },
        {
          "id": 596827,
          "date": "Wed 04 May 2022 15:09",
          "username": "snakecharmer2",
          "content": "C - all the NFS guys, do u really think AWS will recommend to use self managed NFS over EFS?if there is no EFS option then we choose S3",
          "upvote_count": "2"
        },
        {
          "id": 507465,
          "date": "Thu 23 Dec 2021 02:03",
          "username": "vbal",
          "content": "B makes sense instead of loading data from s3 for every boot as cost is not a factor here S3 probably doesn't fit here.",
          "upvote_count": "1"
        },
        {
          "id": 497599,
          "date": "Thu 09 Dec 2021 11:23",
          "username": "cldy",
          "content": "B.  Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi- AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.",
          "upvote_count": "1"
        },
        {
          "id": 367734,
          "date": "Tue 12 Oct 2021 01:39",
          "username": "01037DashLDashL",
          "content": "I choose A. <br>off-site tapes = GlacierThis question may not be applicable in 2021. As per the article in the following link published in Nov 2020, AWS is the first cloud provider to offer native IP multicast capabilities that enable customers to migrate their multicast applications to the cloud and take advantage of the elasticity and scalability that AWS provides. <br>https://aws.amazon.com/about-aws/whats-new/2020/11/ip-multicast-on-aws-transit-gateway-now-available-in-major-aws-regions-world-wide/<br>However, using DynamoDB and IP Unicast, a solution similar to using IP multicast can be achieved.<br>Also, the question says \\\"Data on all servers and the distributed file system directory is backed up weekly to off-site tapes\\\" - which means the solutions has to use Glacier. Except A, no other answer mention Glacier.This is same as question #110 in link https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/11/<br>The answer is A in that link.",
          "upvote_count": "221"
        },
        {
          "id": 386593,
          "date": "Wed 13 Oct 2021 19:57",
          "username": "DashLDashL",
          "content": "This question may not be applicable in 2021. As per the article in the following link published in Nov 2020, AWS is the first cloud provider to offer native IP multicast capabilities that enable customers to migrate their multicast applications to the cloud and take advantage of the elasticity and scalability that AWS provides. <br>https://aws.amazon.com/about-aws/whats-new/2020/11/ip-multicast-on-aws-transit-gateway-now-available-in-major-aws-regions-world-wide/<br>However, using DynamoDB and IP Unicast, a solution similar to using IP multicast can be achieved.<br>Also, the question says \\\"Data on all servers and the distributed file system directory is backed up weekly to off-site tapes\\\" - which means the solutions has to use Glacier. Except A, no other answer mention Glacier.This is same as question #110 in link https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/11/<br>The answer is A in that link.",
          "upvote_count": "21"
        },
        {
          "id": 387420,
          "date": "Mon 01 Nov 2021 16:49",
          "username": "DashL",
          "content": "This is same as question #110 in link https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/11/<br>The answer is A in that link.",
          "upvote_count": "1"
        },
        {
          "id": 363237,
          "date": "Sun 10 Oct 2021 16:54",
          "username": "neta1o",
          "content": "err meant NFS not EFS",
          "upvote_count": "1"
        },
        {
          "id": 363236,
          "date": "Sat 02 Oct 2021 20:44",
          "username": "neta1o",
          "content": "I was thinking B as well. network distributed file system = EFS",
          "upvote_count": "1"
        },
        {
          "id": 334108,
          "date": "Sat 02 Oct 2021 07:07",
          "username": "higgscern",
          "content": "I believe B is the correct answer.",
          "upvote_count": "1"
        },
        {
          "id": 314827,
          "date": "Tue 21 Sep 2021 18:41",
          "username": "ExtHoExtHo",
          "content": "C is correct Answer.AWS support IP multicast now B,C both are correct but B due to NFS is good choice",
          "upvote_count": "21"
        },
        {
          "id": 331805,
          "date": "Thu 23 Sep 2021 02:16",
          "username": "ExtHo",
          "content": "AWS support IP multicast now B,C both are correct but B due to NFS is good choice",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS.<br>Which service should you use?</p>",
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
              "choice": "<p>A. Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon ElastiCache to store the writes until the writes are committed to the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495979,
          "date": "Tue 07 Dec 2021 13:34",
          "username": "cldy",
          "content": "B.  Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.",
          "upvote_count": "1"
        },
        {
          "id": 367748,
          "date": "Sat 06 Nov 2021 19:04",
          "username": "01037",
          "content": "No doubt, B",
          "upvote_count": "2"
        },
        {
          "id": 329236,
          "date": "Mon 01 Nov 2021 11:44",
          "username": "cldy",
          "content": "B. <br>always use SQS to consume undetermined write traffic.",
          "upvote_count": "1"
        },
        {
          "id": 54398,
          "date": "Wed 06 Oct 2021 17:09",
          "username": "miracle",
          "content": "Answer is B",
          "upvote_count": "2"
        },
        {
          "id": 50982,
          "date": "Mon 04 Oct 2021 05:13",
          "username": "Gorha",
          "content": "B is correct!",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#89",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls. Usually there are a few calls/second, but once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project.<br>What database implementation would better fit this scenario, keeping costs as low as possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>A. Use DynamoDB with a \"Calls\" table and a Global Secondary Index on a \"State\" attribute that can equal to \"active\" or \"terminated\". In this way the Global Secondary Index can be used for all items in the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use RDS Multi-AZ with a \"CALLS\" table and an indexed \"STATE\" field that can be equal to \"ACTIVE\" or 'TERMINATED\". In this way the SQL query is optimized by the use of the Index.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use RDS Multi-AZ with two tables, one for \"ACTIVE_CALLS\" and one for \"TERMINATED_CALLS\". In this way the \"ACTIVE_CALLS\" table is always small and effective to access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use DynamoDB with a \"Calls\" table and a Global Secondary Index on a \"IsActive\" attribute that is present for active calls only. In this way the Global Secondary Index is sparse and more effective.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496523,
          "date": "Wed 08 Dec 2021 05:23",
          "username": "cldy",
          "content": "D.  Use DynamoDB with a \\\"Calls\\\" table and a Global Secondary Index on a \\\"IsActive\\\" attribute that is present for active calls only. In this way the Global Secondary Index is sparse and more effective.",
          "upvote_count": "1"
        },
        {
          "id": 367766,
          "date": "Sun 26 Sep 2021 15:52",
          "username": "0103701037",
          "content": "Davis correctD is correct",
          "upvote_count": "13"
        },
        {
          "id": 367767,
          "date": "Fri 15 Oct 2021 09:07",
          "username": "01037",
          "content": "D is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company hosts a social media site supporting users in multiple countries. You have been asked to provide a highly available design tor the application that leverages multiple regions tor the most recently accessed content and latency sensitive portions of the wet) site The most latency sensitive component of the application involves reading user preferences to support web site personalization and ad selection.<br>In addition to running your application in multiple regions, which option will support this application's requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>A. Serve user content from S3. CloudFront and use Route53 latency-based routing between ELBs in each region Retrieve user preferences from a local DynamoDB table in each region and leverage SQS to capture changes to user preferences with SOS workers for propagating updates to each table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the S3 Copy API to copy recently accessed content to multiple regions and serve user content from S3. CloudFront with dynamic content and an ELB in each region Retrieve user preferences from an ElasticCache cluster in each region and leverage SNS notifications to propagate user preference changes to a worker node in each region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the S3 Copy API to copy recently accessed content to multiple regions and serve user content from S3 CloudFront and Route53 latency-based routing Between ELBs In each region Retrieve user preferences from a DynamoDB table and leverage SQS to capture changes to user preferences with SOS workers for propagating DynamoDB updates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Serve user content from S3. CloudFront with dynamic content, and an ELB in each region Retrieve user preferences from an ElastiCache cluster in each region and leverage Simple Workflow (SWF) to manage the propagation of user preferences from a centralized OB to each ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 556507,
          "date": "Sat 26 Feb 2022 05:21",
          "username": "Changwha",
          "content": "A.  Serve user content from S3. CloudFront and use Route53 latency-based routing between ELBs in each region Retrieve user preferences from a local DynamoDB table in each region and leverage SQS to capture changes to user preferences with SOS workers for propagating updates to each table.",
          "upvote_count": "1"
        },
        {
          "id": 556505,
          "date": "Sat 26 Feb 2022 05:17",
          "username": "Changwha",
          "content": "A is the answer",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You've been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud<br>(VPC) The previous architect has already deployed a 3-tier VPC. <br>The configuration is as follows:<br><br>VPC: vpc-2f8bc447 -<br><br>IGW: igw-2d8bc445 -<br><br>NACL: ad-208bc448 -<br>Subnets and Route Tables:<br><br>Web servers: subnet-258bc44d -<br>Application servers: subnet-248bc44c<br>Database servers: subnet-9189c6f9<br>Route Tables:<br>rrb-218bc449<br>rtb-238bc44b<br>Associations:<br>subnet-258bc44d : rtb-218bc449<br>subnet-248bc44c : rtb-238bc44b<br>subnet-9189c6f9 : rtb-238bc44b<br>You are now ready to begin deploying EC2 instances into the VPCWeb servers must have direct access to the internet Application and database servers cannot have direct access to the internet.<br>Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?</p>",
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
              "choice": "<p>A. Create a bastion and NAT instance in subnet-258bc44d, and add a route from rtb- 238bc44b to the NAT instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within subnet-248bc44c.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bastion and NAT instance in subnet-248bc44c, and add a route from rtb- 238bc44b to subnet-258bc44d.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a bastion and NAT instance in subnet-258bc44d, add a route from rtb-238bc44b to Igw-2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet-248bc44c.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 369123,
          "date": "Thu 04 Nov 2021 00:57",
          "username": "01037",
          "content": "A<br>Sa<br><br>Easy one",
          "upvote_count": "6"
        },
        {
          "id": 661207,
          "date": "Tue 06 Sep 2022 14:22",
          "username": "skywalker",
          "content": "Should be D",
          "upvote_count": "1"
        },
        {
          "id": 653927,
          "date": "Tue 30 Aug 2022 10:37",
          "username": "Network_1Network_1",
          "content": "A is the answer.<br>D is wrong: you can add a route to igw in a private subnet.I meant you *can't* add add a route to igw in a private subnet. To allow the app and db instances to receive update from the Internet, you add a route in the private subnet towards the NAT gateway",
          "upvote_count": "11"
        },
        {
          "id": 653928,
          "date": "Tue 30 Aug 2022 10:40",
          "username": "Network_1",
          "content": "I meant you *can't* add add a route to igw in a private subnet. To allow the app and db instances to receive update from the Internet, you add a route in the private subnet towards the NAT gateway",
          "upvote_count": "1"
        },
        {
          "id": 535360,
          "date": "Sat 29 Jan 2022 10:45",
          "username": "lulz111",
          "content": "Such a badly written and formatted question.",
          "upvote_count": "2"
        },
        {
          "id": 499016,
          "date": "Sat 11 Dec 2021 01:24",
          "username": "tkanmani76",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 357545,
          "date": "Tue 26 Oct 2021 16:10",
          "username": "viet1991",
          "content": "A<br>\\\"CloudFloater Highly Voted1 year, 3 months ago<br><br>http://jayendrapatil.com/tag/bastion-host/<br><br>(Bastion and NAT should be in the public subnet. As Web Server has direct access to Internet, the subnet subnet-258bc44d should be public and Route rtb-2i8bc449 pointing to IGW. Route rtb-238bc44b for private subnets should point to NAT for outgoing internet access)\\\"<br><br>https://www.examtopics.com/discussions/amazon/view/12325-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "4"
        },
        {
          "id": 357294,
          "date": "Sun 24 Oct 2021 01:06",
          "username": "Rudrajit",
          "content": "Answer should be D. ",
          "upvote_count": "2"
        },
        {
          "id": 350966,
          "date": "Tue 12 Oct 2021 08:04",
          "username": "LisX",
          "content": "I mean NAT not NACL",
          "upvote_count": "1"
        },
        {
          "id": 350964,
          "date": "Thu 07 Oct 2021 02:00",
          "username": "LisX",
          "content": "I think answer should be D.  NACL does not grant internet access",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#92",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a multi-platform web application for AWS The application will run on EC2 instances and will be accessed from PCs. Tablets and smart phones<br>Supported accessing platforms are Windows, MacOS, IOS and Android Separate sticky session and SSL certificate setups are required for different platform types.<br>Which of the following describes the most cost effective and performance efficient architecture setup?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>A. Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up one ELB for all platforms to distribute load among multiple instance under it Each EC2 instance implements ail functionality for a particular platform.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up two ELBs The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms for each ELB run separate EC2 instance groups to handle the web application for each platform.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign multiple ELBS to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type Session stickiness and SSL termination are done at the ELBs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 29188,
          "date": "Thu 23 Sep 2021 07:47",
          "username": "tan9dojo01037DashL",
          "content": "D is a bit out-dated.<br>See \\\"Application Load Balancers Now Support Multiple TLS Certificates With Smart Selection Using SNI\\\" at https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/Yes, ELB now supports SNI based certificates. Offload SSL for all sites at one place.Yes.<br>So maybe B could be a correct answerAs I understand from the question \\\"Separate sticky session and SSL certificate setups are required for different platform types\\\" - there will be different sticky session setup for different platforms.<br>The question says ELB - assuming we can generalize ALB for an ELB, the ALB can handle multiple SSL Certs using SNI. How one ELB will handle different sticky session for different platform types?<br>So, the only valid answer is D",
          "upvote_count": "14321"
        },
        {
          "id": 31068,
          "date": "Sun 26 Sep 2021 07:44",
          "username": "dojo",
          "content": "Yes, ELB now supports SNI based certificates. Offload SSL for all sites at one place.",
          "upvote_count": "3"
        },
        {
          "id": 370475,
          "date": "Fri 29 Oct 2021 16:00",
          "username": "01037DashL",
          "content": "Yes.<br>So maybe B could be a correct answerAs I understand from the question \\\"Separate sticky session and SSL certificate setups are required for different platform types\\\" - there will be different sticky session setup for different platforms.<br>The question says ELB - assuming we can generalize ALB for an ELB, the ALB can handle multiple SSL Certs using SNI. How one ELB will handle different sticky session for different platform types?<br>So, the only valid answer is D",
          "upvote_count": "21"
        },
        {
          "id": 387361,
          "date": "Fri 29 Oct 2021 18:37",
          "username": "DashL",
          "content": "As I understand from the question \\\"Separate sticky session and SSL certificate setups are required for different platform types\\\" - there will be different sticky session setup for different platforms.<br>The question says ELB - assuming we can generalize ALB for an ELB, the ALB can handle multiple SSL Certs using SNI. How one ELB will handle different sticky session for different platform types?<br>So, the only valid answer is D",
          "upvote_count": "1"
        },
        {
          "id": 564531,
          "date": "Thu 10 Mar 2022 05:48",
          "username": "Dohecadi",
          "content": "Answer is D. <br>Question states: \\\"Different platform types need distinct sticky session and SSL certificate configurations.\\\"<br>ELB does not support more than one certificate per load balancer.<br>You wil need a load balancer per platform.",
          "upvote_count": "1"
        },
        {
          "id": 496549,
          "date": "Wed 08 Dec 2021 06:27",
          "username": "cldy",
          "content": "B.  Set up one ELB for all platforms to distribute load among multiple instance under it Each EC2 instance implements ail functionality for a particular platform.",
          "upvote_count": "2"
        },
        {
          "id": 249063,
          "date": "Wed 27 Oct 2021 06:36",
          "username": "halfdeaf",
          "content": "Question seems to be old, ELB now supports multiple TLS certificate addition using SNI.<br><br>So answer would be B",
          "upvote_count": "1"
        },
        {
          "id": 176183,
          "date": "Mon 25 Oct 2021 02:51",
          "username": "manoj101",
          "content": "B is correct. ELB supports SNI Based Certificates that allow multiple certs on single ELB. ",
          "upvote_count": "3"
        },
        {
          "id": 144962,
          "date": "Fri 22 Oct 2021 07:43",
          "username": "fullaws",
          "content": "D is correct previously as sticky session only support HTTP/HTTPS listener which enforce SSL termination on ELB.  For latest AWS will be B as ALB support SNI based certificate.",
          "upvote_count": "2"
        },
        {
          "id": 119019,
          "date": "Sat 16 Oct 2021 16:34",
          "username": "manoj101",
          "content": "If D is not valid do you think B is the right answer or C",
          "upvote_count": "1"
        },
        {
          "id": 40715,
          "date": "Tue 12 Oct 2021 02:55",
          "username": "CloudFloater",
          "content": "D<br>http://jayendrapatil.com/aws-elastic-load-balancing/<br>Assign multiple ELBs to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type. Session stickiness and SSL termination are done at the ELBs. (Session stickiness requires HTTPS listener with SSL termination on the ELB and ELB does not support multiple SSL certs so one is required for each cert)",
          "upvote_count": "1"
        },
        {
          "id": 39164,
          "date": "Wed 06 Oct 2021 09:30",
          "username": "vijay1319",
          "content": "Agree. D is the right answer.",
          "upvote_count": "2"
        },
        {
          "id": 38111,
          "date": "Tue 28 Sep 2021 02:43",
          "username": "amog",
          "content": "Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 36456,
          "date": "Mon 27 Sep 2021 09:46",
          "username": "AWSKeener",
          "content": "Complete option text:<br><br>Assign multiple ELBs to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type. Session stickiness and SSL termination are done at the ELBs.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon<br>DynamoDB for storage when creating the CloudFormation template.<br>Which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>A. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Parameter section in the Cloud Formation template to nave the user input Access and Secret Keys from an already created IAM user that has me permissions required to read and write from the required DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 324347,
          "date": "Tue 21 Sep 2021 12:36",
          "username": "DgixExtHo01037",
          "content": "A: \\\"...and associate the Role to the application instances by referencing an instance profile\\\"<br><br>C: \\\"...and reference the Role in the instance profile property of the application instance\\\"<br><br>The correct answer is not C, as the instance profile property of an instance doesn't refer to an IAM Role, it refers to an Instance Profile, which is a resource in its own right.<br><br>Therefore, the correct answer is A. It would be A if you were doing it directly in EC2. However, since it says you have to use CloudFormation then you have to add the reference to the profile in the template. This means the answer is C. <br><br>When we doing with CloudFormation Template we need to update under properties. See following.<br><br>Type: AWS::IAM::InstanceProfile<br>Properties:<br>InstanceProfileName: String<br>Path: String<br>Roles:<br>- StringYes it's C",
          "upvote_count": "6111"
        },
        {
          "id": 331661,
          "date": "Thu 14 Oct 2021 19:37",
          "username": "ExtHo01037",
          "content": "It would be A if you were doing it directly in EC2. However, since it says you have to use CloudFormation then you have to add the reference to the profile in the template. This means the answer is C. <br><br>When we doing with CloudFormation Template we need to update under properties. See following.<br><br>Type: AWS::IAM::InstanceProfile<br>Properties:<br>InstanceProfileName: String<br>Path: String<br>Roles:<br>- StringYes it's C",
          "upvote_count": "111"
        },
        {
          "id": 370481,
          "date": "Mon 01 Nov 2021 15:05",
          "username": "01037",
          "content": "Yes it's C",
          "upvote_count": "1"
        },
        {
          "id": 496790,
          "date": "Wed 08 Dec 2021 13:02",
          "username": "cldy",
          "content": "C.  Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has recently extended its datacenter into a VPC on AWS to add burst computing capacity as needed Members of your Network Operations Center need to be able to go to the AWS Management Console and administer Amazon EC2 instances as necessary. You don't want to create new IAM users for each<br>NOC member and make those users sign in again to the AWS Management Console.<br>Which option below will meet the needs for your NOC members?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Use OAuth 2.0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use your on-premises SAML 2.0-compliant identity provider (IDP) to grant the NOC members federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use your on-premises SAML2.0-compliam identity provider (IDP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561176,
          "date": "Sat 05 Mar 2022 05:29",
          "username": "pal40sg",
          "content": "Federated access via SSO endpoint.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html",
          "upvote_count": "2"
        },
        {
          "id": 430630,
          "date": "Sun 24 Oct 2021 02:49",
          "username": "nwk",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html",
          "upvote_count": "1"
        },
        {
          "id": 370490,
          "date": "Tue 12 Oct 2021 21:15",
          "username": "01037",
          "content": "Yes C<br><br>http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html<br><br>This specific use of SAML differs from the more general one illustrated at About SAML 2.0-based federation because this workflow opens the AWS Management Console on behalf of the user. This requires the use of the AWS SSO endpoint instead of directly calling the AssumeRoleWithSAML API. The endpoint calls the API for the user and returns a URL that automatically redirects the user's browser to the AWS Management Console.",
          "upvote_count": "3"
        },
        {
          "id": 329243,
          "date": "Sun 10 Oct 2021 07:32",
          "username": "cldy",
          "content": "C. <br>Federated access via SSO endpoint.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have an application running on an EC2 Instance which will allow users to download flies from a private S3 bucket using a pre-signed URL. Before generating the URL the application should verify the existence of the file in S3.<br>How should the application use AWS credentials to access the S3 bucket securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Use the AWS account access Keys the application retrieves the credentials from the source code of the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user for the application with permissions that allow list access to the S3 bucket launch the instance as the IAM user and retrieve the IAM user's credentials from the EC2 instance user data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role for EC2 that allows list access to objects in the S3 bucket. Launch the instance with the role, and retrieve the role's credentials from the EC2 Instance metadata<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user for the application with permissions that allow list access to the S3 bucket. The application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the application user.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671975,
          "date": "Sun 18 Sep 2022 06:20",
          "username": "kaushik9845NathanvB99",
          "content": "What does retrieving credentials in instance data mean..is it really needed?https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html",
          "upvote_count": "11"
        },
        {
          "id": 712352,
          "date": "Sun 06 Nov 2022 15:17",
          "username": "NathanvB99",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html",
          "upvote_count": "1"
        },
        {
          "id": 370586,
          "date": "Mon 01 Nov 2021 12:09",
          "username": "01037",
          "content": "CCCCCCC",
          "upvote_count": "2"
        },
        {
          "id": 329245,
          "date": "Fri 22 Oct 2021 11:27",
          "username": "cldy",
          "content": "C. <br>repeated question 85.",
          "upvote_count": "3"
        },
        {
          "id": 114826,
          "date": "Wed 20 Oct 2021 20:35",
          "username": "ricoyao",
          "content": "same as question 85.",
          "upvote_count": "3"
        },
        {
          "id": 97702,
          "date": "Thu 23 Sep 2021 22:47",
          "username": "oatif",
          "content": "C looks correct to me since we should create roles for services to take on",
          "upvote_count": "3"
        },
        {
          "id": 87992,
          "date": "Thu 23 Sep 2021 00:02",
          "username": "qianhaopower",
          "content": "C is correct! Duplicate question.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload tor the new fiscal year benefit enrollment period plus some extra overhead<br>Enrollment proceeds nicely for two days and then the web tier becomes unresponsive, upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15 specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them.<br>Which activity would be useful in defending against this attack?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#96",
          "answers": [
            {
              "choice": "<p>A. Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW (Internet Gateway)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the EIP (Elastic IP Address) of the NAT instance in the web tier subnet and update the Main Route Table with the new EIP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create 15 Security Group rules to block the attacking IP addresses over port 80<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an inbound NACL (Network Access control list) associated with the web tier subnet with deny rules to block the attacking IP addresses<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 87993,
          "date": "Wed 22 Sep 2021 05:33",
          "username": "qianhaopower",
          "content": "D is correct!",
          "upvote_count": "6"
        },
        {
          "id": 370587,
          "date": "Sat 06 Nov 2021 04:00",
          "username": "01037",
          "content": "Yes it's D. <br>WAF may help too",
          "upvote_count": "2"
        },
        {
          "id": 329254,
          "date": "Thu 04 Nov 2021 20:56",
          "username": "cldy",
          "content": "D. <br>NACL to blacklist the IPs with deny rule.",
          "upvote_count": "2"
        },
        {
          "id": 97703,
          "date": "Fri 29 Oct 2021 03:54",
          "username": "oatif",
          "content": "D is correct because there is not deny option in SG's",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are developing a new mobile application and are considering storing user preferences in AWS.2w This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be 50KB in size Additionally 5 million customers are expected to use the application on a regular basis.<br>The solution needs to be cost-effective, highly available, scalable and secure, how would you design a solution to meet the above requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#97",
          "answers": [
            {
              "choice": "<p>A. Setup an RDS MySQL instance in 2 availability zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize STS. Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup an RDS MySQL instance with multiple read replicas in 2 availability zones to store the user preference data .The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the user preference data in S3 Setup a DynamoDB table with an item for each user and an item attribute pointing to the user' S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly utilize STS, Web identity Federation, and S3 ACLs to authenticate and authorize access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 161333,
          "date": "Sun 24 Oct 2021 16:42",
          "username": "nameisreqd",
          "content": "One logon for 5mil users using S3+DDB vs DDB alone<br>DDB Alone:<br>1 logon retrieves 50kb data that consumes ~12 rcu<br>total rcu consumed for 5 mil logons = 60 mil<br>cost for 1 mil rcu = 0.25.<br>total cost = .25*60 = $15<br>DDB + S3:<br>1 logon retrieves less than 4kb data so consumes 1 rcu of DDB<br>5 mil logon consume 5 mil rcu<br>DDB cost = 5*.25 = $1.25<br>S3:<br>total read requests = 5mil<br>1000 read requests cost 0.0004<br>5 mil read requests cost 5000*.0004 =$2<br>Total cost = $2+$1.25= $3.25<br>So DDB+S3 is more cost effective.<br>So answer should be D. ",
          "upvote_count": "11"
        },
        {
          "id": 68574,
          "date": "Mon 04 Oct 2021 09:46",
          "username": "Exam_boyrb39AdamSmithqianhaopowernameisreqd01037nameisreqduser0001",
          "content": "D:(cost-effective, highly available, scalable and secure.)<br><br>HA and scalable: S3<br>Secure: S3 ACL<br><br>Cost-effective<br>5,000,000 * 50 KB = 250 GB<br>DynamoDB Storage Cost = 0.25/GB * 250 = $62.50<br>S3 Storage = $0.03/GB * 250 = $7.50<br>So S3 is ~10% Cost of DDB but in the grant scheme of things,but maintaining S3 ACL for all users doesn't scale as good as DynamoDb fine grain accessdon't forgot cost for request to S3, they will eat u aliveMillions GetObject request are too expensive.One logon for 5000 users using S#+DDB vs DDB alone<br><br>DDB Alone:<br>1 logon retrives 50kb data that consumes 12 rcu<br>total rcu for 5 mil logons = 60 mil<br>cost for 1 mil rcu = 0.25.<br>total cost = .25*60 = $15<br><br>DDB + S3<br>1 logon retrieves less than 4kb data so consumes 1 rcu of DDB<br>5 mil lognon consume 5 mil rcu<br>DDB cost = 5*.25 = $1.25<br><br>S3:<br><br>total read requests = 5mil<br>1000 read requests cost 0.0004<br>5 mil read requests cost 5000*.0004 =$2<br>Total cost = $2+$1.25= $3.25<br><br>So DDB+S3 is more cost effective.<br><br>So answer should be D?<br><br>Does it make sense?I just feel D be correct.<br>Thank you for the analysis5 mil users... not 5000.if anyone choose mysql over DynomoDB, then you should not be taking this exam",
          "upvote_count": "52214121"
        },
        {
          "id": 499817,
          "date": "Sun 12 Dec 2021 07:06",
          "username": "rb39",
          "content": "but maintaining S3 ACL for all users doesn't scale as good as DynamoDb fine grain access",
          "upvote_count": "2"
        },
        {
          "id": 70376,
          "date": "Thu 07 Oct 2021 21:33",
          "username": "AdamSmith",
          "content": "don't forgot cost for request to S3, they will eat u alive",
          "upvote_count": "2"
        },
        {
          "id": 87997,
          "date": "Fri 08 Oct 2021 03:45",
          "username": "qianhaopowernameisreqd01037nameisreqd",
          "content": "Millions GetObject request are too expensive.One logon for 5000 users using S#+DDB vs DDB alone<br><br>DDB Alone:<br>1 logon retrives 50kb data that consumes 12 rcu<br>total rcu for 5 mil logons = 60 mil<br>cost for 1 mil rcu = 0.25.<br>total cost = .25*60 = $15<br><br>DDB + S3<br>1 logon retrieves less than 4kb data so consumes 1 rcu of DDB<br>5 mil lognon consume 5 mil rcu<br>DDB cost = 5*.25 = $1.25<br><br>S3:<br><br>total read requests = 5mil<br>1000 read requests cost 0.0004<br>5 mil read requests cost 5000*.0004 =$2<br>Total cost = $2+$1.25= $3.25<br><br>So DDB+S3 is more cost effective.<br><br>So answer should be D?<br><br>Does it make sense?I just feel D be correct.<br>Thank you for the analysis5 mil users... not 5000.",
          "upvote_count": "1412"
        },
        {
          "id": 161330,
          "date": "Mon 11 Oct 2021 21:46",
          "username": "nameisreqd01037nameisreqd",
          "content": "One logon for 5000 users using S#+DDB vs DDB alone<br><br>DDB Alone:<br>1 logon retrives 50kb data that consumes 12 rcu<br>total rcu for 5 mil logons = 60 mil<br>cost for 1 mil rcu = 0.25.<br>total cost = .25*60 = $15<br><br>DDB + S3<br>1 logon retrieves less than 4kb data so consumes 1 rcu of DDB<br>5 mil lognon consume 5 mil rcu<br>DDB cost = 5*.25 = $1.25<br><br>S3:<br><br>total read requests = 5mil<br>1000 read requests cost 0.0004<br>5 mil read requests cost 5000*.0004 =$2<br>Total cost = $2+$1.25= $3.25<br><br>So DDB+S3 is more cost effective.<br><br>So answer should be D?<br><br>Does it make sense?I just feel D be correct.<br>Thank you for the analysis5 mil users... not 5000.",
          "upvote_count": "412"
        },
        {
          "id": 370811,
          "date": "Thu 28 Oct 2021 01:08",
          "username": "01037",
          "content": "I just feel D be correct.<br>Thank you for the analysis",
          "upvote_count": "1"
        },
        {
          "id": 161331,
          "date": "Fri 15 Oct 2021 09:47",
          "username": "nameisreqd",
          "content": "5 mil users... not 5000.",
          "upvote_count": "2"
        },
        {
          "id": 598213,
          "date": "Sat 07 May 2022 18:58",
          "username": "user0001",
          "content": "if anyone choose mysql over DynomoDB, then you should not be taking this exam",
          "upvote_count": "1"
        },
        {
          "id": 626540,
          "date": "Sun 03 Jul 2022 14:08",
          "username": "aandc",
          "content": "B, this one is in the book \\\"AWS Certified Solutions Architect Associate (SAA) 2021 | 15 Mock Tests For Complete Preparation\\\"",
          "upvote_count": "1"
        },
        {
          "id": 494387,
          "date": "Sun 05 Dec 2021 14:53",
          "username": "cldy",
          "content": "B.  Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize STS. Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.",
          "upvote_count": "4"
        },
        {
          "id": 484008,
          "date": "Mon 22 Nov 2021 10:06",
          "username": "backfringe",
          "content": "I go with B",
          "upvote_count": "1"
        },
        {
          "id": 442302,
          "date": "Mon 01 Nov 2021 20:44",
          "username": "nodogoshi",
          "content": "Should be D.  50KB record consume Dynamodb rcu/wcu a lot. Not cost effective.",
          "upvote_count": "1"
        },
        {
          "id": 286907,
          "date": "Wed 27 Oct 2021 15:42",
          "username": "Mansur",
          "content": "Correct Option is B<br>https://youtu.be/uAUYphLWL5w",
          "upvote_count": "2"
        },
        {
          "id": 224848,
          "date": "Sun 24 Oct 2021 19:32",
          "username": "newme",
          "content": "D. <br>The question asks for cost-effective solution.<br>D is most cost-effective and also highly available, scalable and secure.<br>Though B is much easier for devekopers.",
          "upvote_count": "1"
        },
        {
          "id": 144990,
          "date": "Sun 10 Oct 2021 23:50",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "3"
        },
        {
          "id": 54451,
          "date": "Fri 01 Oct 2021 06:07",
          "username": "miracle",
          "content": "Sound likes B",
          "upvote_count": "2"
        },
        {
          "id": 40726,
          "date": "Mon 20 Sep 2021 01:55",
          "username": "CloudFloater",
          "content": "B<br>http://jayendrapatil.com/aws-storage-options-whitepaper/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic Map Reduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO.<br>You recently improved overall performance of the website using Cloud Front for dynamic content delivery and your website as the origin.<br>After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude.<br>How do you fix your usage dashboard?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
          "answers": [
            {
              "choice": "<p>A. Enable Cloud Front to deliver access logs to S3 and use them as input of the Elastic Map Reduce job.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on Cloud Trail and use trail log tiles on S3 as input of the Elastic Map Reduce job<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change your log collection process to use Cloud Watch ELB metrics as input of the Elastic Map Reduce job<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Elastic Beanstalk \"Rebuild Environment\" option to update log delivery to the Elastic Map Reduce job.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Elastic Beanstalk \"Restart App server(s)\" option to update log delivery to the Elastic Map Reduce job.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 17523,
          "date": "Thu 23 Sep 2021 00:37",
          "username": "Warrenn",
          "content": "The answer should be A",
          "upvote_count": "14"
        },
        {
          "id": 18912,
          "date": "Sun 10 Oct 2021 09:53",
          "username": "skywalker",
          "content": "I go for \\\"A\\\" as EMR do read data from S3 that were written by CloudFront",
          "upvote_count": "8"
        },
        {
          "id": 623886,
          "date": "Tue 28 Jun 2022 12:01",
          "username": "TechX",
          "content": "Answer: A<br>Explanation: http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html",
          "upvote_count": "2"
        },
        {
          "id": 622787,
          "date": "Sun 26 Jun 2022 21:49",
          "username": "kangtamo",
          "content": "I agree with A: CloudFront.",
          "upvote_count": "1"
        },
        {
          "id": 532657,
          "date": "Wed 26 Jan 2022 07:24",
          "username": "cannottellname",
          "content": "After you have created and deployed your Elastic Beanstalk application you can sign up for CloudFront and start using CloudFront to distribute your content.<br><br>CF needs to be operated separately and hence, A is correct.",
          "upvote_count": "2"
        },
        {
          "id": 370818,
          "date": "Sat 06 Nov 2021 11:09",
          "username": "01037",
          "content": "I think it's A. <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html#access-logs-choosing-s3-bucket",
          "upvote_count": "1"
        },
        {
          "id": 355086,
          "date": "Sun 31 Oct 2021 12:34",
          "username": "pt8neta1o",
          "content": "Should modify through Beanstalk, D.  Otherwise Beanstalk is useless. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-management-rebuild.htmlI'm fairly certain you cannot add CloudFront through Beanstalk. You'd have to build the CF distro separately and point it your Beanstalk stack. Therefore the CloudFront logging would be setup separately as well. I'd go with A. ",
          "upvote_count": "11"
        },
        {
          "id": 367239,
          "date": "Wed 03 Nov 2021 17:18",
          "username": "neta1o",
          "content": "I'm fairly certain you cannot add CloudFront through Beanstalk. You'd have to build the CF distro separately and point it your Beanstalk stack. Therefore the CloudFront logging would be setup separately as well. I'd go with A. ",
          "upvote_count": "1"
        },
        {
          "id": 329263,
          "date": "Fri 29 Oct 2021 05:20",
          "username": "cldy",
          "content": "A. <br>so that EMR job can analyze CF logs.",
          "upvote_count": "1"
        },
        {
          "id": 144992,
          "date": "Sat 23 Oct 2021 18:38",
          "username": "fullaws",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 128641,
          "date": "Thu 21 Oct 2021 21:13",
          "username": "Paramg1234",
          "content": "D is more appropriate as Beanstalk managed systems has to be managed by Beanstalk ... although A also do the work.",
          "upvote_count": "2"
        },
        {
          "id": 104957,
          "date": "Wed 20 Oct 2021 15:36",
          "username": "JAWS1600",
          "content": "A is the right answer",
          "upvote_count": "2"
        },
        {
          "id": 101998,
          "date": "Wed 20 Oct 2021 06:16",
          "username": "sam422cpal012",
          "content": "Answer is D, Reason is ElasticBean stalk environment is already running and pushing logs to S3, only addition is cloud front. may be a re-build environment is sufficient to fix the issue.The requests are not even making it to EB, they're being answered by cloudfront. Nothing you do in EB will make any difference",
          "upvote_count": "32"
        },
        {
          "id": 196672,
          "date": "Sat 23 Oct 2021 23:17",
          "username": "cpal012",
          "content": "The requests are not even making it to EB, they're being answered by cloudfront. Nothing you do in EB will make any difference",
          "upvote_count": "2"
        },
        {
          "id": 88004,
          "date": "Sun 17 Oct 2021 12:41",
          "username": "qianhaopower",
          "content": "A is correct. Need the those portion of traffic from CloudFront to logs as well.",
          "upvote_count": "3"
        },
        {
          "id": 40729,
          "date": "Fri 15 Oct 2021 03:46",
          "username": "CloudFloater",
          "content": "A<br>http://jayendrapatil.com/tag/cache/",
          "upvote_count": "4"
        },
        {
          "id": 38121,
          "date": "Thu 14 Oct 2021 02:32",
          "username": "amog",
          "content": "Answer is A",
          "upvote_count": "3"
        },
        {
          "id": 36463,
          "date": "Tue 12 Oct 2021 04:27",
          "username": "AWSKeener",
          "content": "yes, A sounds right",
          "upvote_count": "3"
        },
        {
          "id": 23266,
          "date": "Mon 11 Oct 2021 18:50",
          "username": "examacc",
          "content": "A is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web-startup runs its very successful social news application on Amazon EC2 with an Elastic Load Balancer, an Auto-Scaling group of Java/Tomcat application- servers, and DynamoDB as data store. The main web-application best runs on m2 x large instances since it is highly memory- bound Each new deployment requires semi-automated creation and testing of a new AMI for the application servers which takes quite a while ana is therefore only done once per week.<br>Recently, a new chat feature has been implemented in nodejs and wails to be integrated in the architecture. First tests show that the new component is CPU bound Because the company has some experience with using Chef, they decided to streamline the deployment process and use AWS Ops Works as an application life cycle tool to simplify management of the application and reduce the deployment cycles.<br>What configuration in AWS Ops Works is necessary to integrate the new chat module in the most cost-efficient and flexible way?</p>",
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
              "choice": "<p>A. Create one AWS OpsWorks stack, create one AWS Ops Works layer, create one custom recipe<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create one AWS OpsWorks stack create two AWS Ops Works layers, create one custom recipe<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two AWS OpsWorks stacks create two AWS Ops Works layers, create one custom recipe<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create two AWS OpsWorks stacks create two AWS Ops Works layers, create two custom recipe<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40733,
          "date": "Tue 05 Oct 2021 06:06",
          "username": "CloudFloater",
          "content": "B<br>http://jayendrapatil.com/category/aws/opsworks/<br><br>Create one AWS Ops Works stack, create two AWS Ops Works layers create one custom recipe (Single environment stack, two layers for java and node.js application using built-in recipes and custom recipe for DynamoDB connectivity only as other configuration. Refer link)",
          "upvote_count": "6"
        },
        {
          "id": 635776,
          "date": "Sun 24 Jul 2022 00:46",
          "username": "hilft",
          "content": "B. <br>Start with one stack.<br>Then two layers.<br>No idea about the recipe. I think it is irrelevant here.",
          "upvote_count": "2"
        },
        {
          "id": 406276,
          "date": "Wed 27 Oct 2021 03:11",
          "username": "DashL",
          "content": "Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-1.<br>I have seen similar question in other websites and there is question is something like \\\"To meet the growing number of support tickets being sent, it was decided that a new chat feature should be implemented as part of the customer support app, but should be hosted on a different set of servers\\\". Note the key word \\\"different set of servers\\\"<br><br>The stack is the top-level AWS OpsWorks Stacks entity. It represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving web applications. Each layer in a stack must have at least one instance and can optionally have multiple instances.",
          "upvote_count": "1"
        },
        {
          "id": 406274,
          "date": "Tue 19 Oct 2021 12:45",
          "username": "DashLDashLDashL",
          "content": "Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-1.<br>I have seen similar question in other websites and there is question is something like \\\"To meet the growing number of support tickets being sent, it was decided that a new chat feature should be implemented as part of the customer support app, but should be hosted on a different set of servers\\\". Note the key word \\\"different set of servers\\\"<br><br>The stack is the top-level AWS OpsWorks Stacks entity. It represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving web applications. Each layer in a stack must have at least one instance and can optionally have multiple instances.Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-2.<br>Every stack contains one or more layers, each of which represents a stack component, such as a load balancer or a set of application servers. Each instance in a stack must be a member of at least one layer, except for registered instances. You cannot configure an instance directly, except for some basic settings such as the SSH key and hostname. You must create and configure an appropriate layer, and add the instance to the layer.<br>Recipes are Ruby applications that define a system's configuration. They install packages, create configuration files from templates, execute shell commands, create files and directories, and so on. You typically have AWS OpsWorks Stacks execute recipes automatically when a lifecycle event occurs on the instance but you can also run them explicitly at any time by using the Execute Recipes stack command.Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-3.<br>In the scenario, an AMI should be deployed - so the AMI is part of the stack. it tells us that the chat feature should be implemented as part of the customer support application, but should be hosted on the same set of servers. if it is the same set of servers, it would be just one layer. But if there were two set of servers, it would have been two layers. This means that the chat feature is part of the stack, but should be in a different layer since it will be using a different set of servers. Hence, we have to use one stack and one layer and one recipe to meet the requirement.",
          "upvote_count": "112"
        },
        {
          "id": 406279,
          "date": "Sun 31 Oct 2021 08:28",
          "username": "DashLDashL",
          "content": "Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-2.<br>Every stack contains one or more layers, each of which represents a stack component, such as a load balancer or a set of application servers. Each instance in a stack must be a member of at least one layer, except for registered instances. You cannot configure an instance directly, except for some basic settings such as the SSH key and hostname. You must create and configure an appropriate layer, and add the instance to the layer.<br>Recipes are Ruby applications that define a system's configuration. They install packages, create configuration files from templates, execute shell commands, create files and directories, and so on. You typically have AWS OpsWorks Stacks execute recipes automatically when a lifecycle event occurs on the instance but you can also run them explicitly at any time by using the Execute Recipes stack command.Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-3.<br>In the scenario, an AMI should be deployed - so the AMI is part of the stack. it tells us that the chat feature should be implemented as part of the customer support application, but should be hosted on the same set of servers. if it is the same set of servers, it would be just one layer. But if there were two set of servers, it would have been two layers. This means that the chat feature is part of the stack, but should be in a different layer since it will be using a different set of servers. Hence, we have to use one stack and one layer and one recipe to meet the requirement.",
          "upvote_count": "12"
        },
        {
          "id": 406281,
          "date": "Sun 31 Oct 2021 14:26",
          "username": "DashL",
          "content": "Ans A:<br>Here is explanation. I am not able to post the whole explanation in one go. Here is Part-3.<br>In the scenario, an AMI should be deployed - so the AMI is part of the stack. it tells us that the chat feature should be implemented as part of the customer support application, but should be hosted on the same set of servers. if it is the same set of servers, it would be just one layer. But if there were two set of servers, it would have been two layers. This means that the chat feature is part of the stack, but should be in a different layer since it will be using a different set of servers. Hence, we have to use one stack and one layer and one recipe to meet the requirement.",
          "upvote_count": "2"
        },
        {
          "id": 144994,
          "date": "Thu 07 Oct 2021 13:33",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 38125,
          "date": "Sun 03 Oct 2021 22:39",
          "username": "amog",
          "content": "Answer is B<br>Single environment stack, two layers for java and node.js application using built-in recipes and custom recipe for DynamoDB connectivity only as other configuration",
          "upvote_count": "4"
        },
        {
          "id": 18913,
          "date": "Wed 22 Sep 2021 19:58",
          "username": "skywalker",
          "content": "\\\" a new chat feature\\\" is added.. thus there is no need to create an another stack under OpsWork. Instead use the same stack under OpsWorks and create an additional layer for the new feature.<br><br>Thus, my answer is B",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Select the correct set of options. These are the initial settings for the default security group:</p>",
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
              "choice": "<p>A. Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 329272,
          "date": "Fri 15 Oct 2021 21:31",
          "username": "cldy",
          "content": "A. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html#default-security-group",
          "upvote_count": "13"
        },
        {
          "id": 661223,
          "date": "Tue 06 Sep 2022 14:45",
          "username": "skywalker",
          "content": "My Answer is A<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html#default-security-group",
          "upvote_count": "2"
        },
        {
          "id": 650164,
          "date": "Mon 22 Aug 2022 10:38",
          "username": "astalavista1",
          "content": "C - By default, almost everything in AWS is explicitly denied. Even communication between instances needs to be configured.",
          "upvote_count": "1"
        },
        {
          "id": 643675,
          "date": "Sun 07 Aug 2022 12:16",
          "username": "ude",
          "content": "A is correct. Not C. <br>the question ask about Default SG.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html",
          "upvote_count": "2"
        },
        {
          "id": 636062,
          "date": "Sun 24 Jul 2022 15:28",
          "username": "CloudHell",
          "content": "It's A:<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#DefaultSecurityGroup",
          "upvote_count": "1"
        },
        {
          "id": 635379,
          "date": "Sat 23 Jul 2022 00:38",
          "username": "Mr_nobody79",
          "content": "It's C.  Don't guess, just check it (like i did) :)",
          "upvote_count": "1"
        },
        {
          "id": 622537,
          "date": "Sun 26 Jun 2022 14:12",
          "username": "[Removed]",
          "content": "It's C. <br><br>\\\"By default, new security groups start with only an outbound rule that allows all traffic to leave the resource. You must add rules to enable any inbound traffic or to restrict the outbound traffic.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html<br><br>Bad question anyway....",
          "upvote_count": "1"
        },
        {
          "id": 621026,
          "date": "Thu 23 Jun 2022 15:49",
          "username": "cert_001",
          "content": "C<br>You need explicit rules to be defined to enable communication between instances in the same sec group",
          "upvote_count": "1"
        },
        {
          "id": 605379,
          "date": "Sun 22 May 2022 13:07",
          "username": "p2010",
          "content": "Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html#default-security-group<br>Allows inbound traffic from network interfaces and instances that are assigned to the same security group.<br>---<br>This means that instances with same SG can talk to each other. As all outbound traffic is allowed by default.",
          "upvote_count": "3"
        },
        {
          "id": 588085,
          "date": "Tue 19 Apr 2022 11:53",
          "username": "bobsmith2000",
          "content": "It's A. <br>Just checked myself.<br>No inbound traffic except for the same SG<br>All outbound traffic.",
          "upvote_count": "1"
        },
        {
          "id": 587139,
          "date": "Sun 17 Apr 2022 11:26",
          "username": "LiamNg",
          "content": "Ans is A",
          "upvote_count": "1"
        },
        {
          "id": 581738,
          "date": "Wed 06 Apr 2022 11:52",
          "username": "zekesg",
          "content": "A is correct. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html#default-security-group<br><br>Inbound Rules -- Allows inbound traffic from network interfaces and instances that are assigned to the same security group.",
          "upvote_count": "1"
        },
        {
          "id": 577621,
          "date": "Tue 29 Mar 2022 15:11",
          "username": "Hasitha99",
          "content": "Selected Answer: A<br><br>Question asked about the default security group of default vpc. Don't confuse with the default rules of a custom security group.",
          "upvote_count": "1"
        },
        {
          "id": 568730,
          "date": "Wed 16 Mar 2022 02:40",
          "username": "RVD",
          "content": "As Per AWS documentation: <br>\\\"Allows inbound traffic from network interfaces and instances that are assigned to the same security group.\\\"<br>So Answer: A",
          "upvote_count": "1"
        },
        {
          "id": 567074,
          "date": "Sun 13 Mar 2022 17:39",
          "username": "shaiker",
          "content": "awsnser is C By default nothing is allowed in period doesnt matter if they use the same sg it still will not allow traffic in",
          "upvote_count": "1"
        },
        {
          "id": 560128,
          "date": "Thu 03 Mar 2022 15:36",
          "username": "Mechanicbobsmith2000",
          "content": "Answer is C<br>Created it just now (Mar 2022), and it didn't bring any rule to allow traffic from the same SG.Check VPC's default SG, not created by you.",
          "upvote_count": "11"
        },
        {
          "id": 588086,
          "date": "Tue 19 Apr 2022 11:55",
          "username": "bobsmith2000",
          "content": "Check VPC's default SG, not created by you.",
          "upvote_count": "1"
        },
        {
          "id": 532103,
          "date": "Tue 25 Jan 2022 13:23",
          "username": "panton",
          "content": "A is correct. <br>if you allow all outbound traffic then you will be able to communicate within SG",
          "upvote_count": "1"
        }
      ]
    }
  ]
}