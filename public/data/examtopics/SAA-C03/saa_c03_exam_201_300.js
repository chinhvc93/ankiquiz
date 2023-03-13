var SAA_C03_Exam_201_300 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792557,
          "date": "Mon 30 Jan 2023 09:32",
          "username": "\t\t\t\tProfXsamson\t\t\t",
          "content": "Amazon Pinpoint is a flexible, scalable and fully managed push notification and SMS service for mobile apps.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 781229,
          "date": "Thu 19 Jan 2023 15:36",
          "username": "\t\t\t\tFoucault\t\t\t",
          "content": "It's B, see following link https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779329,
          "date": "Tue 17 Jan 2023 21:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "https://aws.amazon.com/pinpoint/product-details/sms/<br>Two-Way Messaging:<br>Receive SMS messages from your customers and reply back to them in a chat-like interactive experience. With Amazon Pinpoint, you can create automatic responses when customers send you messages that contain certain keywords. You can even use Amazon Lex to create conversational bots.<br>A majority of mobile phone users read incoming SMS messages almost immediately after receiving them. If you need to be able to provide your customers with urgent or important information, SMS messaging may be the right solution for you.<br><br>You can use Amazon Pinpoint to create targeted groups of customers, and then send them campaign-based messages. You can also use Amazon Pinpoint to send direct messages, such as appointment confirmations, order updates, and one-time passwords.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 772280,
          "date": "Wed 11 Jan 2023 10:24",
          "username": "\t\t\t\tDavidNamy\t\t\t",
          "content": "D:<br>Amazon Simple Notification Service (SNS) is a fully managed messaging service that enables you to send and receive SMS messages in a cost-effective and highly scalable way. By creating an SNS FIFO topic, you can ensure that the SMS messages are delivered to your users in the order they were sent and that the SMS responses are processed and stored in the same order. You can also configure your SNS FIFO topic to publish SMS responses to an Amazon Kinesis data stream, which will allow you to store and analyze the responses for a year.<br><br>Amazon Pinpoint ?¿?¿? NO! <br><br>is not correct solution because while Amazon Pinpoint allows you to send SMS and Email campaigns, as well as handle push notifications to a user base, it doesn't provide SMS sending feature by itself. Furthermore, it's a service mainly focused on sending and tracking marketing campaigns, not for managing two-way SMS communication and the reception of reply.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What do think about https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 797629,
          "date": "Sat 04 Feb 2023 06:47",
          "username": "\t\t\t\tOmok\t\t\t",
          "content": "What do think about https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754484,
          "date": "Fri 23 Dec 2022 20:56",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To send SMS messages and store the responses for a year for analysis, the company can use Amazon Pinpoint. Amazon Pinpoint is a fully-managed service that allows you to send targeted and personalized SMS messages to your users and track the results.<br><br>To meet the requirements of the company, a solutions architect can build an Amazon Pinpoint journey and configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving. The Kinesis data stream can be configured to store the data for a year, allowing the company to analyze the responses over time.<br><br>So, Option B is the correct answer.<br><br>Option B.  Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 752881,
          "date": "Thu 22 Dec 2022 00:56",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Weneed to analyze and archiving A doesnt help with it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 750468,
          "date": "Tue 20 Dec 2022 04:57",
          "username": "\t\t\t\tBENICE\t\t\t",
          "content": "B is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747746,
          "date": "Sat 17 Dec 2022 05:00",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Answer B, This is Pinpoint usecase",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743699,
          "date": "Tue 13 Dec 2022 08:18",
          "username": "\t\t\t\tMarge_Simpson\t\t\t",
          "content": "Anytime you see marketing or campaign, just pick AWS Pinpoint.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 735400,
          "date": "Sun 04 Dec 2022 20:43",
          "username": "\t\t\t\tRameez1\t\t\t",
          "content": "Amazon Pinpoint is perfect choice for this scenario, as it provides 2 way communication and can stream events to kinesis Data stream for further analysis.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734170,
          "date": "Sat 03 Dec 2022 03:39",
          "username": "\t\t\t\ticaniwill\t\t\t",
          "content": "The diagram on the link shows \\\"Campaign and journeys\\\" with the arrow directing to Channels which includes SMS, emails etc. So the correct choice is B. <br>https://aws.amazon.com/pinpoint/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732279,
          "date": "Thu 01 Dec 2022 06:25",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731993,
          "date": "Wed 30 Nov 2022 22:22",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "Amazon Pinpoint +Kinesis can store for upto a year - answer B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729697,
          "date": "Tue 29 Nov 2022 00:10",
          "username": "\t\t\t\tTMM369\t\t\t",
          "content": "A - https://aws.amazon.com/blogs/contact-center/building-personalized-customer-experiences-over-sms-through-amazon-connect/#:~:text=Get%20Amazon%20Connect%20instance%20details%201%20Navigate%20to,in%20and%20note%20down%20the%20Contact%20Flow%20ID",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 729609,
          "date": "Mon 28 Nov 2022 21:43",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "Amazon Pinpoint for two marketing",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 729437,
          "date": "Mon 28 Nov 2022 17:48",
          "username": "\t\t\t\tGabs90\t\t\t",
          "content": "Pinpoint is the correct one https://aws.amazon.com/it/pinpoint/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 729360,
          "date": "Mon 28 Nov 2022 17:09",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "Amazon Connect is more like a custom service. However, amazon pinpoint can send sms to customers for confirmation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 751708,
          "date": "Wed 21 Dec 2022 01:32",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "SSE-S3 - is free and uses AWS owned CMKs (CMK = Customer Master Key). The encryption key is owned and managed by AWS, and is shared among many accounts. Its rotation is automatic with time that varies as shown in the table here. The time is not explicitly defined.<br><br>SSE-KMS - has two flavors:<br><br>AWS managed CMK. This is free CMK generated only for your account. You can only view it policies and audit usage, but not manage it. Rotation is automatic - once per 1095 days (3 years),<br>Customer managed CMK. This uses your own key that you create and can manage. Rotation is not enabled by default. But if you enable it, it will be automatically rotated every 1 year. This variant can also use an imported key material by you. If you create such key with an imported material, there is no automated rotation. Only manual rotation.<br>SSE-C - customer provided key. The encryption key is fully managed by you outside of AWS. AWS will not rotate it.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754472,
          "date": "Fri 23 Dec 2022 20:46",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "KEYWORD: LEAST operational overhead<br><br>To encrypt the data when it is stored in the S3 bucket and automatically rotate the encryption key every year with the least operational overhead, the company can use server-side encryption with Amazon S3-managed encryption keys (SSE-S3). SSE-S3 uses keys that are managed by Amazon S3, and the built-in key rotation behavior of SSE-S3 encryption keys automatically rotates the keys every year.<br><br>To meet the requirements of the company, the solutions architect can move the data to the S3 bucket and enable server-side encryption with SSE-S3. This solution requires no additional configuration or maintenance and has the least operational overhead.<br><br>Hence, the correct answer is;<br><br>Option A.  Move the data to the S3 bucket. Use server-side encryption with Amazon S3-managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The order of these events is being ignored here in my opinion. The encryption checkbox needs to be checked before data is moved into the S3 bucket or it will not be encrypted otherwise, you'll have to encrypt manually and reload into S3 bucket. If the box was checked before moving data into S3 then you are good to go !</li><li>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html</li><li>Option B involves using a customer-managed AWS KMS key and enabling automatic key rotation, but this requires the company to manage the KMS key and monitor the key rotation process. <br><br>Option C involves using a customer-managed AWS KMS key, but this requires the company to manually rotate the key every year, which introduces additional operational overhead. <br><br>Option D involves encrypting the data with customer key material and creating a KMS key without key material, but this requires the company to manage the customer key material and import it into the KMS key, which introduces additional operational overhead.</li><li>But...<br><br>For A there is no reference to how often these keys are rotated, and to rotate to a new key, you need to upload it, which is operational overhead. So not only does it not necessarily meet the 'rotate keys every year' requirement, but every year it requires operational overhead.<br><br>More importantly, the question states move the objects first, and then configure encryption, but ...\\\"There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.\\\" from https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br><br>So A is clearly wrong.<br><br>For B, whilst you have to set up KMS once, you then don't have to anything else, which i would say is LEAST operational overhead.</li><li>God bless you, man! The most articulated answers, easy to understand. Good job!</li><li>But wrong :)</li><li>Reviewed it the second time. Some of them are wrong, indeed.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 789864,
          "date": "Fri 27 Jan 2023 19:00",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "The order of these events is being ignored here in my opinion. The encryption checkbox needs to be checked before data is moved into the S3 bucket or it will not be encrypted otherwise, you'll have to encrypt manually and reload into S3 bucket. If the box was checked before moving data into S3 then you are good to go !<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 789868,
          "date": "Fri 27 Jan 2023 19:03",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754474,
          "date": "Fri 23 Dec 2022 20:47",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Option B involves using a customer-managed AWS KMS key and enabling automatic key rotation, but this requires the company to manage the KMS key and monitor the key rotation process. <br><br>Option C involves using a customer-managed AWS KMS key, but this requires the company to manually rotate the key every year, which introduces additional operational overhead. <br><br>Option D involves encrypting the data with customer key material and creating a KMS key without key material, but this requires the company to manage the customer key material and import it into the KMS key, which introduces additional operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But...<br><br>For A there is no reference to how often these keys are rotated, and to rotate to a new key, you need to upload it, which is operational overhead. So not only does it not necessarily meet the 'rotate keys every year' requirement, but every year it requires operational overhead.<br><br>More importantly, the question states move the objects first, and then configure encryption, but ...\\\"There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.\\\" from https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br><br>So A is clearly wrong.<br><br>For B, whilst you have to set up KMS once, you then don't have to anything else, which i would say is LEAST operational overhead.</li><li>God bless you, man! The most articulated answers, easy to understand. Good job!</li><li>But wrong :)</li><li>Reviewed it the second time. Some of them are wrong, indeed.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 771140,
          "date": "Tue 10 Jan 2023 08:09",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "But...<br><br>For A there is no reference to how often these keys are rotated, and to rotate to a new key, you need to upload it, which is operational overhead. So not only does it not necessarily meet the 'rotate keys every year' requirement, but every year it requires operational overhead.<br><br>More importantly, the question states move the objects first, and then configure encryption, but ...\\\"There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.\\\" from https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br><br>So A is clearly wrong.<br><br>For B, whilst you have to set up KMS once, you then don't have to anything else, which i would say is LEAST operational overhead.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 765300,
          "date": "Wed 04 Jan 2023 06:58",
          "username": "\t\t\t\tocbn3wby\t\t\t",
          "content": "God bless you, man! The most articulated answers, easy to understand. Good job!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But wrong :)</li><li>Reviewed it the second time. Some of them are wrong, indeed.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 771141,
          "date": "Tue 10 Jan 2023 08:09",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "But wrong :)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Reviewed it the second time. Some of them are wrong, indeed.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 800122,
          "date": "Mon 06 Feb 2023 19:38",
          "username": "\t\t\t\tocbn3wby\t\t\t",
          "content": "Reviewed it the second time. Some of them are wrong, indeed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 833893,
          "date": "Thu 09 Mar 2023 12:16",
          "username": "\t\t\t\tLanoraMoe\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830436,
          "date": "Mon 06 Mar 2023 00:49",
          "username": "\t\t\t\tSdraju\t\t\t",
          "content": "Because in Option - A : Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a key that it rotates regularly.<br>Does this mean Amazon does not rotate the keys with which the objects are encrypted - rather the root key is the one that is rotated regularly",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 824880,
          "date": "Tue 28 Feb 2023 15:03",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Option B allows me to set the auto rotation every year.SSE-S3 doesn't allow me to control *when* a key gets auto-rotated.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 807523,
          "date": "Mon 13 Feb 2023 16:09",
          "username": "\t\t\t\tStanislav4907\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 797238,
          "date": "Fri 03 Feb 2023 18:51",
          "username": "\t\t\t\tremand\t\t\t",
          "content": "SSE-S3 also uses key and rotates automatically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 797040,
          "date": "Fri 03 Feb 2023 13:54",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "Documentation says sse-s3 keys are rotated every year, so practically have to do nothing for this kind of encryption hence least operational overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 770637,
          "date": "Mon 09 Jan 2023 17:19",
          "username": "\t\t\t\tMahadeva\t\t\t",
          "content": "In May 2022, AWS KMS changed the rotation schedule for AWS managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days).<br><br>New AWS managed keys are automatically rotated one year after they are created, and approximately every year thereafter.<br><br>Existing AWS managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-aws-managed-keys<br><br>So, SSE-KMS with AWS-managed keys is least operational overhead (unlike customer managed CMK where the user has to provide cryptographic key material for rotation). Supports Auto-rotation (SSE-S3 does not specify the time duration required for auto-rotation).",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 769336,
          "date": "Sun 08 Jan 2023 12:40",
          "username": "\t\t\t\traf123123\t\t\t",
          "content": "Selected Answer: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 768740,
          "date": "Sat 07 Jan 2023 17:48",
          "username": "\t\t\t\tHayLLlHuK\t\t\t",
          "content": "Sorry, guys, but we can't rely on SSE-S3 encryption keys rotation. <br>I've investigated tons of information, but I didn't find any concrete information about the frequency of SSE-S3 keys rotation. The only one thing mentioned in aws articles is \\\"it rotates regularly\\\".<br>Based on it, we can't rely on SSE.  The question ask us \\\"key must be automatically rotated every year.\\\" I'll vote for B - KMS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html</li><li>If someone finds the article where the SSE-S3 encryption keys rotation frequency says that it can be rotate every year, than yes, the correct solution is A. <br>As of now, I'll go for A</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 768741,
          "date": "Sat 07 Jan 2023 17:49",
          "username": "\t\t\t\tHayLLlHuK\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If someone finds the article where the SSE-S3 encryption keys rotation frequency says that it can be rotate every year, than yes, the correct solution is A. <br>As of now, I'll go for A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 768742,
          "date": "Sat 07 Jan 2023 17:50",
          "username": "\t\t\t\tHayLLlHuK\t\t\t",
          "content": "If someone finds the article where the SSE-S3 encryption keys rotation frequency says that it can be rotate every year, than yes, the correct solution is A. <br>As of now, I'll go for A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763562,
          "date": "Mon 02 Jan 2023 08:02",
          "username": "\t\t\t\tZerotn3\t\t\t",
          "content": "The correct answer is A.  Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.<br><br>By using SSE-S3, you can encrypt your data at rest in the S3 bucket without having to manage any encryption keys yourself. SSE-S3 automatically rotates the encryption keys for you, so you don't have to worry about manually rotating them every year. This option has the least operational overhead, as you don't have to manage any encryption keys or manually rotate them.<br><br>Option B is incorrect because you would still need to manually rotate the KMS key every year. Option C is incorrect for the same reason. Option D is incorrect because you would need to manage the customer key material yourself, which is more operational overhead than using SSE-S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 757853,
          "date": "Mon 26 Dec 2022 22:14",
          "username": "\t\t\t\tPassNow1234\t\t\t",
          "content": "I agree with A.  However aws is easy enough to do with both A or B.  This is one question I hope I don't get.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 749022,
          "date": "Sun 18 Dec 2022 17:04",
          "username": "\t\t\t\tnexus2020\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html<br><br>Customer managed keys<br>Automatic key rotation is disabled by default on customer managed keys but authorized users can enable and disable it. When you enable (or re-enable) automatic key rotation, AWS KMS automatically rotates the KMS key one year (approximately 365 days) after the enable date and every year thereafter.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 747753,
          "date": "Sat 17 Dec 2022 05:25",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "A is the right answer. <br>Option B is not a good choice because though Automatic rotation of the keys is possible incase of Customer Managed is is possible but it is not mentioned as requirement here. There is additional operation overhead for customer for Managing the Keys if customer Managed keys are used.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 746220,
          "date": "Thu 15 Dec 2022 15:59",
          "username": "\t\t\t\tk1kavi1\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 745544,
          "date": "Thu 15 Dec 2022 01:08",
          "username": "\t\t\t\tnexus2020\t\t\t",
          "content": "when you use customer managed key, you can not automatically rotate. cusomer needs to upload the key first!<br><br>so A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes you can from https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html<br>\\\"Automatic rotation is optional for customer managed KMS keys\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 771137,
          "date": "Tue 10 Jan 2023 08:02",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Yes you can from https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html<br>\\\"Automatic rotation is optional for customer managed KMS keys\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database.<br><br>As the company expands, customers report that their meeting invitations are taking longer to arrive.<br><br>What should a solutions architect recommend to resolve this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#203",
          "answers": [
            {
              "choice": "<p>A. Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 754462,
          "date": "Fri 23 Dec 2022 20:38",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Option D.  Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.<br><br>To resolve the issue of longer delivery times for meeting invitations, the solutions architect can recommend adding an Auto Scaling group for the application that sends meeting invitations and configuring the Auto Scaling group to scale based on the depth of the SQS queue. This will allow the application to scale up as the number of appointment requests increases, improving the performance and delivery times of the meeting invitations.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 747754,
          "date": "Sat 17 Dec 2022 05:29",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Option D is the right Answer,",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 746221,
          "date": "Thu 15 Dec 2022 16:01",
          "username": "\t\t\t\tk1kavi1\t\t\t",
          "content": "Agreed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729728,
          "date": "Tue 29 Nov 2022 00:47",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "ANswer d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729363,
          "date": "Mon 28 Nov 2022 17:12",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "D meets the requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729217,
          "date": "Mon 28 Nov 2022 15:27",
          "username": "\t\t\t\tNigma\t\t\t",
          "content": "Answer : D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#204",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS.<br><br>The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#204",
          "answers": [
            {
              "choice": "<p>A. Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 742474,
          "date": "Mon 12 Dec 2022 07:44",
          "username": "\t\t\t\tanhike\t\t\t",
          "content": "Answer : C keyword \\\"manage-fine-grained\\\"<br>https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-using-aws-lake-formation/",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 789458,
          "date": "Fri 27 Jan 2023 10:18",
          "username": "\t\t\t\tdoorahmie\t\t\t",
          "content": "https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-overview.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779553,
          "date": "Wed 18 Jan 2023 04:02",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "To me, the give-away was: \\\"The company wants to make all the data available to various teams\\\" - Data-Lake - All data in one place.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 768336,
          "date": "Sat 07 Jan 2023 08:59",
          "username": "\t\t\t\tmaster1004\t\t\t",
          "content": "The correct answer is D. <br>The company uses all the data from various teams so that the teams can do their analysis.<br>Therefore, it is the best way to separately configure redshift for data warehousing and for all employees to connect to the redshift DB and perform analysis tasks without burdening the operating DB (must minimize operational overhead).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 766409,
          "date": "Thu 05 Jan 2023 09:53",
          "username": "\t\t\t\taba2s\t\t\t",
          "content": "Manage fine-grained access control using AWS Lake Formation<br>https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-using-aws-lake-formation/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 754458,
          "date": "Fri 23 Dec 2022 20:26",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Option C.  Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.<br><br>To make all the data available to various teams and minimize operational overhead, the company can create a data lake by using AWS Lake Formation. This will allow the company to centralize all the data in one place and use fine-grained access controls to manage access to the data.<br><br>To meet the requirements of the company, the solutions architect can create a data lake by using AWS Lake Formation, create an AWS Glue JDBC connection to Amazon RDS, and register the S3 bucket in Lake Formation. The solutions architect can then use Lake Formation access controls to limit access to the data. This solution will provide the ability to manage fine-grained permissions for the data and minimize operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 753425,
          "date": "Thu 22 Dec 2022 16:17",
          "username": "\t\t\t\tkvenikoduru\t\t\t",
          "content": "a combination of the following 2 URLs I believe it is C<br>https://aws.amazon.com/lake-formation/<br>https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-using-aws-lake-formation/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 747759,
          "date": "Sat 17 Dec 2022 05:33",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Option C is the right answer. Fine-grained access-control from different types of data sources is a Lakeformation usecase.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 744552,
          "date": "Wed 14 Dec 2022 00:39",
          "username": "\t\t\t\tgloritown\t\t\t",
          "content": "CCCCCCCCCCCC",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734284,
          "date": "Sat 03 Dec 2022 09:14",
          "username": "\t\t\t\t9014\t\t\t",
          "content": "ANSWER IS OF COURSE C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729759,
          "date": "Tue 29 Nov 2022 01:52",
          "username": "\t\t\t\tMee6\t\t\t",
          "content": "I think the answer is C because the keyword here is \\\"FINE GRAINED\\\" which Lake Formation provides",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729727,
          "date": "Tue 29 Nov 2022 00:46",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "answr c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729364,
          "date": "Mon 28 Nov 2022 17:13",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "Data lake is for complex data sources",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 729221,
          "date": "Mon 28 Nov 2022 15:29",
          "username": "\t\t\t\tNigma\t\t\t",
          "content": "Answer : C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents.<br><br>The company decides to host its website on AWS and to use Amazon CloudFront. The company's solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>A. Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811109,
          "date": "Thu 16 Feb 2023 22:15",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "AWS transfer is a cost and doesn't mention using CloudFront<br>https://aws.amazon.com/aws-transfer-family/pricing/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 807571,
          "date": "Mon 13 Feb 2023 17:17",
          "username": "\t\t\t\tYelizaveta\t\t\t",
          "content": "If you don't want to disable block public access settings for your bucket but you still want your website to be public, you can create a Amazon CloudFront distribution to serve your static website. For more information, see Use an Amazon CloudFront distribution to serve a static website in the Amazon Route 53 Developer Guide.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 789091,
          "date": "Thu 26 Jan 2023 21:26",
          "username": "\t\t\t\tPDR\t\t\t",
          "content": "I at first thought D but it is in fact C because <br><br>\\\"D: Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.\\\"questions says that the company has decided to use Amazon Cloudfront and this answer does not reference using CF and setting S3 as the Origin\\\"C.  Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.\\\" - mentions CF and the origin and the AWS CLI does infact support transfer by SFTP (which was the part I originally doubted but this link evidences that it does:<br><br>https://docs.aws.amazon.com/cli/latest/reference/transfer/describe-server.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 783891,
          "date": "Sun 22 Jan 2023 03:36",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "Option C, creating a private Amazon S3 bucket and using an S3 bucket policy to allow access from a CloudFront origin access identity (OAI), would not be the most cost-effective solution. While it would allow the company to use Amazon S3 for storage, it would also require additional setup and maintenance of the OAI, which would add additional cost. Additionally, this solution would not allow the use of SFTP client for uploading content which is the current method used by the company.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 772912,
          "date": "Wed 11 Jan 2023 22:44",
          "username": "\t\t\t\tverguy\t\t\t",
          "content": "The Answer is C<br>https://medium.com/aws-poc-and-learning/how-to-access-s3-hosted-website-via-cloudfront-using-oai-origin-access-identity-720ad7c57f15",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 770402,
          "date": "Mon 09 Jan 2023 14:15",
          "username": "\t\t\t\tMahadeva\t\t\t",
          "content": "Option C is a better choice than D for following reasons:<br>(1) Cost effective: data transfer is cheaper for Cloudfront than directly from S3 bucket <br>(2) Resilient: recovery from failures. Having a Cloudfront distribution and making S3 bucket policy only for Cloudfront. ie. private bucket (with OAI for access) hardens and betters resiliency.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764562,
          "date": "Tue 03 Jan 2023 12:40",
          "username": "\t\t\t\tgustavtd\t\t\t",
          "content": "If you don't do extra setup in AWS, you can not use SFTP connecting to it, so D is not the case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764525,
          "date": "Tue 03 Jan 2023 12:20",
          "username": "\t\t\t\tvtbk\t\t\t",
          "content": "s3 + Cloudfront. In this case, S3 does not need to be public.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 763588,
          "date": "Mon 02 Jan 2023 09:16",
          "username": "\t\t\t\tZerotn3\t\t\t",
          "content": "The most cost-effective and resilient solution for hosting a website on AWS with CloudFront is to create a public Amazon S3 bucket, configure AWS Transfer for SFTP, configure the S3 bucket for website hosting, and then upload website content using the SFTP client.<br><br>Option A involves using Amazon Lightsail to create a virtual server, which may not be the most cost-effective solution compared to using S3. Option B involves using an Auto Scaling group with EC2 instances and an Application Load Balancer, which may be more expensive and complex than using S3. Option C involves creating a private S3 bucket, which may not allow CloudFront to access the website content.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 754432,
          "date": "Fri 23 Dec 2022 19:53",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "KEYWORD: most cost-effective and resilient architecture<br><br>Option D: Creating a public Amazon S3 bucket, configuring AWS Transfer for SFTP, configuring the S3 bucket for website hosting, and uploading website content by using the SFTP client will meet these requirements with the most cost-effective and resilient architecture.<br><br>Configuring AWS Transfer for SFTP allows the company to securely upload content to the S3 bucket using the SFTP client, which the administrator is already familiar with. This eliminates the need to change the administrator's workflow or learn new tools.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://medium.com/aws-poc-and-learning/how-to-access-s3-hosted-website-via-cloudfront-using-oai-origin-access-identity-720ad7c57f15</li><li>Option C: Creating a private Amazon S3 bucket and using an S3 bucket policy to allow access from a CloudFront origin access identity (OAI) is not a suitable solution because it does not allow the administrator to use an SFTP client to upload website content. The administrator would need to use the AWS CLI or a different tool to upload content to the S3 bucket, which would require a change in the administrator's workflow.</li><li>The requirements are \\\"cost-effective and resilient architecture\\\", and nothing about least operational overhead so your concerns are not valid. Cloudfront makes it resilient and cuts costs, so far more relevant.</li><li>. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Are you sure about D?</li><li>An administrator updates the website content infrequently and uses an SFTP client to upload new documents.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780729,
          "date": "Thu 19 Jan 2023 05:45",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "https://medium.com/aws-poc-and-learning/how-to-access-s3-hosted-website-via-cloudfront-using-oai-origin-access-identity-720ad7c57f15",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754436,
          "date": "Fri 23 Dec 2022 19:55",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Option C: Creating a private Amazon S3 bucket and using an S3 bucket policy to allow access from a CloudFront origin access identity (OAI) is not a suitable solution because it does not allow the administrator to use an SFTP client to upload website content. The administrator would need to use the AWS CLI or a different tool to upload content to the S3 bucket, which would require a change in the administrator's workflow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The requirements are \\\"cost-effective and resilient architecture\\\", and nothing about least operational overhead so your concerns are not valid. Cloudfront makes it resilient and cuts costs, so far more relevant.</li><li>. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Are you sure about D?</li><li>An administrator updates the website content infrequently and uses an SFTP client to upload new documents.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 771542,
          "date": "Tue 10 Jan 2023 16:12",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "The requirements are \\\"cost-effective and resilient architecture\\\", and nothing about least operational overhead so your concerns are not valid. Cloudfront makes it resilient and cuts costs, so far more relevant.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757701,
          "date": "Mon 26 Dec 2022 18:37",
          "username": "\t\t\t\tPassNow1234\t\t\t",
          "content": ". The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Are you sure about D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>An administrator updates the website content infrequently and uses an SFTP client to upload new documents.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778833,
          "date": "Tue 17 Jan 2023 12:20",
          "username": "\t\t\t\t17Master\t\t\t",
          "content": "An administrator updates the website content infrequently and uses an SFTP client to upload new documents.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751675,
          "date": "Wed 21 Dec 2022 00:59",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Answer is C only,Bucket doesn't need to be public when using cloudfront.<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes \\\" If your use case requires the block public access settings to be turned on, use the REST API endpoint as the origin. Then, restrict access by an origin access control (OAC) or origin access identity (OAI).\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 771348,
          "date": "Tue 10 Jan 2023 12:43",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Yes \\\" If your use case requires the block public access settings to be turned on, use the REST API endpoint as the origin. Then, restrict access by an origin access control (OAC) or origin access identity (OAI).\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 750467,
          "date": "Tue 20 Dec 2022 04:55",
          "username": "\t\t\t\tBENICE\t\t\t",
          "content": "C is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747762,
          "date": "Sat 17 Dec 2022 05:39",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Option C is right answer as company has already decided to use Cloudfront.<br>Option D is not correct as it does not use Cloudfront. <br>As long as there is way to upload the content using CLI, it is OK as updates are not very frequent.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 746244,
          "date": "Thu 15 Dec 2022 16:20",
          "username": "\t\t\t\tjupa\t\t\t",
          "content": "According to https://www.pass4future.com/questions/amazon/saa-c02",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 746229,
          "date": "Thu 15 Dec 2022 16:11",
          "username": "\t\t\t\tk1kavi1\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/81299-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745554,
          "date": "Thu 15 Dec 2022 01:27",
          "username": "\t\t\t\tnexus2020\t\t\t",
          "content": "D make more sense overall….<br><br>werid question....",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 744414,
          "date": "Tue 13 Dec 2022 20:43",
          "username": "\t\t\t\tbearcandy\t\t\t",
          "content": "it's D - https://aws.amazon.com/about-aws/whats-new/2018/11/aws-transfer-for-sftp-fully-managed-sftp-for-s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and cloud front ?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 748999,
          "date": "Sun 18 Dec 2022 16:01",
          "username": "\t\t\t\t17Master\t\t\t",
          "content": "and cloud front ?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#206",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company's account.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730792,
          "date": "Tue 29 Nov 2022 20:41",
          "username": "\t\t\t\towenrooney11\t\t\t",
          "content": "I'm team C. <br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html#:~:text=For%20example%2C%20you%20can%20create%20an%20EventBridge%20rule%20that%20detects%20when%20the%20AMI%20creation%20process%20has%20completed%20and%20then%20invokes%20an%20Amazon%20SNS%20topic%20to%20send%20an%20email%20notification%20to%20you.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That link contains the exact use case and explains how C can be used. <br>Option B requires you to send logs to S3 and use Athena, 2 additional services that are not required, so this does not meet the \\\"LEAST operational overhead?\\\" requirement, since these are extra services requiring management.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 771545,
          "date": "Tue 10 Jan 2023 16:17",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "That link contains the exact use case and explains how C can be used. <br>Option B requires you to send logs to S3 and use Athena, 2 additional services that are not required, so this does not meet the \\\"LEAST operational overhead?\\\" requirement, since these are extra services requiring management.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729450,
          "date": "Mon 28 Nov 2022 18:02",
          "username": "\t\t\t\tGabs90\t\t\t",
          "content": "It's C to me : https://www.examtopics.com/discussions/amazon/view/82701-exam-aws-certified-solutions-architect-associate-saa-c02/<br>Use Event bridge seems to be the best choice<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But option C - they are trying to mention about cloudwatch events. Eventbridge monitors the state change of AMI's. Will go for Option B</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 730050,
          "date": "Tue 29 Nov 2022 08:24",
          "username": "\t\t\t\tKADSM\t\t\t",
          "content": "But option C - they are trying to mention about cloudwatch events. Eventbridge monitors the state change of AMI's. Will go for Option B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763590,
          "date": "Mon 02 Jan 2023 09:24",
          "username": "\t\t\t\tZerotn3\t\t\t",
          "content": "LEAST operational overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 755371,
          "date": "Sun 25 Dec 2022 02:47",
          "username": "\t\t\t\tWajif\t\t\t",
          "content": "Why not A? API calls are already logged in Cloudtrail.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 754426,
          "date": "Fri 23 Dec 2022 19:44",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct solution is Option C.  Creating an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call and configuring the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected will meet the requirements with the least operational overhead.<br><br>Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated Software as a Service (SaaS) applications, and AWS services. By creating an EventBridge rule for the CreateImage API call, the company can set up alerts whenever this operation is called within their account. The alert can be sent to an SNS topic, which can then be configured to send notifications to the company's email or other desired destination. <br><br>This solution does not require the company to create a Lambda function or query CloudTrail logs, which makes it the most cost-effective and efficient option.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 747832,
          "date": "Sat 17 Dec 2022 08:02",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Option C is right answer.<br>Eventbridge has integration with CloudTrail as source of events (using pipes).<br>Option D is incorrect as Cloudtrail can not automatically send its API event logs to SQS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742843,
          "date": "Mon 12 Dec 2022 14:33",
          "username": "\t\t\t\tShasha1\t\t\t",
          "content": "C<br>Option B is not correct because it involves using Amazon Athena to query AWS CloudTrail logs, which can be a time-consuming and error-prone process. Additionally, it requires the company to manage the underlying infrastructure for Amazon Athena, which adds operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742506,
          "date": "Mon 12 Dec 2022 08:28",
          "username": "\t\t\t\tSahilbhai\t\t\t",
          "content": "answer is c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738179,
          "date": "Wed 07 Dec 2022 18:38",
          "username": "\t\t\t\tjavitech83\t\t\t",
          "content": "it is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 736886,
          "date": "Tue 06 Dec 2022 15:16",
          "username": "\t\t\t\tinvaderfr\t\t\t",
          "content": "The Goal is to trigger AMI create event from API Call, for me B because C mentioned EventBridge will only focuses on state change (available, failed, deregistered) so we don't need these details according the question.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please read documentation:<br>\\\" you can create an EventBridge rule that detects when the AMI creation process has completed and then invokes an Amazon SNS topic to send an email notification to you.\\\"<br><br>So it do send event when AMI is created, so C is correct.</li><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-ami-events.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 746970,
          "date": "Fri 16 Dec 2022 09:41",
          "username": "\t\t\t\tromko\t\t\t",
          "content": "Please read documentation:<br>\\\" you can create an EventBridge rule that detects when the AMI creation process has completed and then invokes an Amazon SNS topic to send an email notification to you.\\\"<br><br>So it do send event when AMI is created, so C is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-ami-events.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 769257,
          "date": "Sun 08 Jan 2023 10:45",
          "username": "\t\t\t\tHayLLlHuK\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-ami-events.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735420,
          "date": "Sun 04 Dec 2022 21:09",
          "username": "\t\t\t\tRameez1\t\t\t",
          "content": "Option B and C seems right but \\\"LEAST operational overhead\\\" eliminates B.  So, C is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732003,
          "date": "Wed 30 Nov 2022 22:36",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>typo - it's C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732006,
          "date": "Wed 30 Nov 2022 22:36",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "typo - it's C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 731076,
          "date": "Wed 30 Nov 2022 05:11",
          "username": "\t\t\t\tkmaneith\t\t\t",
          "content": "why it is not D? I think this is the correct answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is incorrect because it requires the company to configure an SQS FIFO queue as a target for CloudTrail logs, create a Lambda function, and send an alert to an SNS topic. <br><br>This option is more complex and requires more operational overhead than creating an EventBridge rule. <br><br>Hence, the correct solution is Option C. </li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754425,
          "date": "Fri 23 Dec 2022 19:41",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "D is incorrect because it requires the company to configure an SQS FIFO queue as a target for CloudTrail logs, create a Lambda function, and send an alert to an SNS topic. <br><br>This option is more complex and requires more operational overhead than creating an EventBridge rule. <br><br>Hence, the correct solution is Option C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730831,
          "date": "Tue 29 Nov 2022 21:29",
          "username": "\t\t\t\tlakshmilnj\t\t\t",
          "content": "what's the correct answer?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html</li><li>typo - it's C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732002,
          "date": "Wed 30 Nov 2022 22:35",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>typo - it's C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732005,
          "date": "Wed 30 Nov 2022 22:36",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "typo - it's C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 730312,
          "date": "Tue 29 Nov 2022 12:28",
          "username": "\t\t\t\tJCH760310\t\t\t",
          "content": "the key \\\"The company needs to design an application that captures AWS API calls\\\" not how can they capture AWS API calls :-)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729693,
          "date": "Tue 29 Nov 2022 00:04",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/using-cloudtrail.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 729368,
          "date": "Mon 28 Nov 2022 17:18",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "I choose B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#207",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices.<br><br>The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests.<br><br>What should a solutions architect do to address this issue without impacting existing users?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Add throttling on the API Gateway with server-side throttling limits.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a secondary index in DynamoDB for the table with the user requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 822227,
          "date": "Sun 26 Feb 2023 11:17",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "The key here is \\\"Losing user requests\\\" sqs messages will stay in the queue until it has been processed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 790257,
          "date": "Sat 28 Jan 2023 05:00",
          "username": "\t\t\t\tdark_firzen\t\t\t",
          "content": "D because SQS is the cheapest way.First 1,000,000 requests are free each month.<br><br>Question states: \\\"The company provisioned as much DynamoDB throughput as its budget allows\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755373,
          "date": "Sun 25 Dec 2022 02:52",
          "username": "\t\t\t\tWajif\t\t\t",
          "content": "D is more likely to fix this problem as SQS queue has the ability to wait (buffer) for consumer to notify that the request or message has been processed.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 754421,
          "date": "Fri 23 Dec 2022 19:32",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To address the issue of lost user requests and improve the availability of the API, the solutions architect should use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.  Option D (correct answer)<br><br>By using an SQS queue and Lambda, the solutions architect can decouple the API front end from the processing microservices and improve the overall scalability and availability of the system. The SQS queue acts as a buffer, allowing the API front end to continue accepting user requests even if the processing microservices are experiencing high workloads or are temporarily unavailable. The Lambda function can then retrieve requests from the SQS queue and write them to DynamoDB, ensuring that all user requests are stored and processed. This approach allows the company to scale the processing microservices independently from the API front end, ensuring that the API remains available to users even during periods of high demand.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752520,
          "date": "Wed 21 Dec 2022 16:45",
          "username": "\t\t\t\talect096\t\t\t",
          "content": "I would go to B : https://aws.amazon.com/es/blogs/database/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-dynamodb/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 750466,
          "date": "Tue 20 Dec 2022 04:55",
          "username": "\t\t\t\tBENICE\t\t\t",
          "content": "D is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 748267,
          "date": "Sat 17 Dec 2022 19:10",
          "username": "\t\t\t\tNikaCZ\t\t\t",
          "content": "D.  Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 747834,
          "date": "Sat 17 Dec 2022 08:06",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "Option D is right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745889,
          "date": "Thu 15 Dec 2022 10:33",
          "username": "\t\t\t\talexfk\t\t\t",
          "content": "Why not B? DAX.<br><br>\\\"When you're developing against DAX, instead of pointing your application at the DynamoDB endpoint, you point it at the DAX endpoint, and DAX handles the rest. As a read-through/write-through cache, DAX seamlessly intercepts the API calls that an application normally makes to DynamoDB so that both read and write activity are reflected in the DAX cache.\\\"<br><br>https://aws.amazon.com/es/blogs/database/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-dynamodb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735746,
          "date": "Mon 05 Dec 2022 08:55",
          "username": "\t\t\t\takosigengen\t\t\t",
          "content": "yeah I though the answer is also DAX.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729755,
          "date": "Tue 29 Nov 2022 01:46",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "Using SQS should be the answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not DAX? Could somebody explain?</li><li>Using DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB, may improve the write performance of the system, but it does not provide the same level of scalability and availability as using an SQS queue and Lambda. <br><br>Hence, Option B is incorrect.</li><li>key noted issue is \\\"losing user requests\\\" which is resolved with SQS</li><li>DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. </li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 735058,
          "date": "Sun 04 Dec 2022 13:03",
          "username": "\t\t\t\tnVizzz\t\t\t",
          "content": "Why not DAX? Could somebody explain?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Using DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB, may improve the write performance of the system, but it does not provide the same level of scalability and availability as using an SQS queue and Lambda. <br><br>Hence, Option B is incorrect.</li><li>key noted issue is \\\"losing user requests\\\" which is resolved with SQS</li><li>DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754422,
          "date": "Fri 23 Dec 2022 19:34",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Using DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB, may improve the write performance of the system, but it does not provide the same level of scalability and availability as using an SQS queue and Lambda. <br><br>Hence, Option B is incorrect.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 738488,
          "date": "Thu 08 Dec 2022 01:49",
          "username": "\t\t\t\tbmofo\t\t\t",
          "content": "key noted issue is \\\"losing user requests\\\" which is resolved with SQS",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 735430,
          "date": "Sun 04 Dec 2022 21:21",
          "username": "\t\t\t\tRameez1\t\t\t",
          "content": "DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 729722,
          "date": "Tue 29 Nov 2022 00:43",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "Answer d",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729233,
          "date": "Mon 28 Nov 2022 15:36",
          "username": "\t\t\t\tNigma\t\t\t",
          "content": "Answer : D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#208",
          "answers": [
            {
              "choice": "<p>A. Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket's service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket's service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 729892,
          "date": "Tue 29 Nov 2022 05:09",
          "username": "\t\t\t\tSSASSWS\t\t\t",
          "content": "I think answer should be A and not B. <br>as we cannot \\\"Attach a security groups to a gateway endpoint.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's possible:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 749308,
          "date": "Mon 19 Dec 2022 01:00",
          "username": "\t\t\t\tA_New_Guy\t\t\t",
          "content": "It's possible:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 825039,
          "date": "Tue 28 Feb 2023 17:42",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3. Gateway endpoints use public s3 ip addresses",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795071,
          "date": "Wed 01 Feb 2023 13:05",
          "username": "\t\t\t\tkerl\t\t\t",
          "content": "Answer is A is correct. U cannot attaach security group to Gateway Endpoint. Note that Gateway Endpoint do not create ENI in your subnet, hence no Security group can be attached. You can create IAM policy to allow only IAM Role to access to AWS. (https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 794975,
          "date": "Wed 01 Feb 2023 10:47",
          "username": "\t\t\t\tJohnnyBG\t\t\t",
          "content": "A - Because we can not configure a SG on an gateway endpoint<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 766482,
          "date": "Thu 05 Jan 2023 10:47",
          "username": "\t\t\t\taba2s\t\t\t",
          "content": "Interface Endpoint use private IP adresses from VPC to acces S3. IE use private AWS PrivateLink",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 763600,
          "date": "Mon 02 Jan 2023 09:41",
          "username": "\t\t\t\tZerotn3\t\t\t",
          "content": "The correct answer is A.  Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.<br><br>A VPC endpoint allows you to create a private connection between your VPC and another service without requiring access over the internet, a NAT device, or a VPN connection. An interface VPC endpoint is a network interface that you can create in your VPC that serves as an entry point for incoming traffic. You can use an interface VPC endpoint to access resources in the service, such as an Amazon S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Attaching a resource policy to the S3 bucket allows you to specify which IAM entities are allowed to access the bucket and what actions they can perform on the bucket and its contents. In this case, you can specify that only the EC2 instance's IAM role has access to the bucket.<br><br>Option B is incorrect because a gateway VPC endpoint is used to access resources outside of the VPC, such as an on-premises data center. It is not used to access resources within the VPC. <br><br>Option C is incorrect because the nslookup tool is used to find the IP address associated with a domain name. It is not used to obtain the private IP address of the S3 bucket's service API endpoint.<br><br>Option D is incorrect because the ip-ranges.json file contains the IP address ranges for all AWS services. It does not contain the private IP address of the S3 bucket's service API endpoint. Additionally, using a publicly available IP address range to create a route in the VPC route table would not meet the requirement to ensure that no data is routed through public internet routes.</li><li>You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.<br><br>Reason for B is absolutely wrong</li><li>Even Interface VPC endpoint can be use to access service such as S3 or SNS outside of the VPC.  The reasoning in Option B is not correct.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 763601,
          "date": "Mon 02 Jan 2023 09:41",
          "username": "\t\t\t\tZerotn3\t\t\t",
          "content": "Attaching a resource policy to the S3 bucket allows you to specify which IAM entities are allowed to access the bucket and what actions they can perform on the bucket and its contents. In this case, you can specify that only the EC2 instance's IAM role has access to the bucket.<br><br>Option B is incorrect because a gateway VPC endpoint is used to access resources outside of the VPC, such as an on-premises data center. It is not used to access resources within the VPC. <br><br>Option C is incorrect because the nslookup tool is used to find the IP address associated with a domain name. It is not used to obtain the private IP address of the S3 bucket's service API endpoint.<br><br>Option D is incorrect because the ip-ranges.json file contains the IP address ranges for all AWS services. It does not contain the private IP address of the S3 bucket's service API endpoint. Additionally, using a publicly available IP address range to create a route in the VPC route table would not meet the requirement to ensure that no data is routed through public internet routes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.<br><br>Reason for B is absolutely wrong</li><li>Even Interface VPC endpoint can be use to access service such as S3 or SNS outside of the VPC.  The reasoning in Option B is not correct.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796576,
          "date": "Fri 03 Feb 2023 01:53",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.<br><br>Reason for B is absolutely wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 769984,
          "date": "Mon 09 Jan 2023 03:11",
          "username": "\t\t\t\tMahadeva\t\t\t",
          "content": "Even Interface VPC endpoint can be use to access service such as S3 or SNS outside of the VPC.  The reasoning in Option B is not correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759234,
          "date": "Wed 28 Dec 2022 02:16",
          "username": "\t\t\t\tMimikabs\t\t\t",
          "content": "From what I understand, you can create security groups for interface endpoints because they use an ENI, but you cannot create security groups for gateway endpoints as they do not use ENIs. So I would go with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 754415,
          "date": "Fri 23 Dec 2022 19:23",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct solution to meet the requirements is Option B.  A gateway VPC endpoint for Amazon S3 should be created in the Availability Zone where the EC2 instance is located. This will allow the EC2 instance to access the S3 bucket directly, without routing through the public internet. The endpoint should also be configured with appropriate security groups to allow access to the S3 bucket. Additionally, a resource policy should be attached to the S3 bucket to only allow the EC2 instance's IAM role for access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A is incorrect because an interface VPC endpoint for Amazon S3 would not provide a direct connection between the EC2 instance and the S3 bucket. <br><br>Option C is incorrect because using the nslookup tool to obtain the private IP address of the S3 bucket's service API endpoint would not provide a secure connection between the EC2 instance and the S3 bucket. <br><br>Option D is incorrect because using the ip-ranges.json file to obtain the private IP address of the S3 bucket's service API endpoint is not a secure method to connect the EC2 instance to the S3 bucket.</li><li>There are two types VPC Endpoint:<br><br>Gateway endpoint<br>Interface endpoint<br><br>A Gateway endpoint:<br><br>1) Helps you to securely connect to Amazon S3 and DynamoDB<br>2) Endpoint serves as a target in your route table for traffic<br>3) Provide access to endpoint (endpoint, identity and resource policies)<br><br>An Interface endpoint:<br><br>1) Help you to securely connect to AWS services EXCEPT FOR Amazon S3 and DynamoDB<br>2) Powered by PrivateLink (keeps network traffic within AWS network)<br>3) Needs a elastic network interface (ENI) (entry point for traffic)</li><li>An interface VPC endpoint does provide a direct connection between the EC2 instance and the S3 bucket. It enables private communication between instances in your VPC and resources in other services without requiring an internet gateway, a NAT device, or a VPN connection.<br><br>Option A , which recommends creating an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located and attaching a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access, is the correct solution for the given scenario. It meets the requirement to ensure that no API calls and no data are routed through public internet routes and that only the EC2 instance can have access to upload data to the S3 bucket.</li><li>In support, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754416,
          "date": "Fri 23 Dec 2022 19:23",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Option A is incorrect because an interface VPC endpoint for Amazon S3 would not provide a direct connection between the EC2 instance and the S3 bucket. <br><br>Option C is incorrect because using the nslookup tool to obtain the private IP address of the S3 bucket's service API endpoint would not provide a secure connection between the EC2 instance and the S3 bucket. <br><br>Option D is incorrect because using the ip-ranges.json file to obtain the private IP address of the S3 bucket's service API endpoint is not a secure method to connect the EC2 instance to the S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There are two types VPC Endpoint:<br><br>Gateway endpoint<br>Interface endpoint<br><br>A Gateway endpoint:<br><br>1) Helps you to securely connect to Amazon S3 and DynamoDB<br>2) Endpoint serves as a target in your route table for traffic<br>3) Provide access to endpoint (endpoint, identity and resource policies)<br><br>An Interface endpoint:<br><br>1) Help you to securely connect to AWS services EXCEPT FOR Amazon S3 and DynamoDB<br>2) Powered by PrivateLink (keeps network traffic within AWS network)<br>3) Needs a elastic network interface (ENI) (entry point for traffic)</li><li>An interface VPC endpoint does provide a direct connection between the EC2 instance and the S3 bucket. It enables private communication between instances in your VPC and resources in other services without requiring an internet gateway, a NAT device, or a VPN connection.<br><br>Option A , which recommends creating an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located and attaching a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access, is the correct solution for the given scenario. It meets the requirement to ensure that no API calls and no data are routed through public internet routes and that only the EC2 instance can have access to upload data to the S3 bucket.</li><li>In support, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811558,
          "date": "Fri 17 Feb 2023 07:33",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "There are two types VPC Endpoint:<br><br>Gateway endpoint<br>Interface endpoint<br><br>A Gateway endpoint:<br><br>1) Helps you to securely connect to Amazon S3 and DynamoDB<br>2) Endpoint serves as a target in your route table for traffic<br>3) Provide access to endpoint (endpoint, identity and resource policies)<br><br>An Interface endpoint:<br><br>1) Help you to securely connect to AWS services EXCEPT FOR Amazon S3 and DynamoDB<br>2) Powered by PrivateLink (keeps network traffic within AWS network)<br>3) Needs a elastic network interface (ENI) (entry point for traffic)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764669,
          "date": "Tue 03 Jan 2023 14:17",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "An interface VPC endpoint does provide a direct connection between the EC2 instance and the S3 bucket. It enables private communication between instances in your VPC and resources in other services without requiring an internet gateway, a NAT device, or a VPN connection.<br><br>Option A , which recommends creating an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located and attaching a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access, is the correct solution for the given scenario. It meets the requirement to ensure that no API calls and no data are routed through public internet routes and that only the EC2 instance can have access to upload data to the S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In support, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 797652,
          "date": "Sat 04 Feb 2023 07:29",
          "username": "\t\t\t\tOmok\t\t\t",
          "content": "In support, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751605,
          "date": "Tue 20 Dec 2022 23:55",
          "username": "\t\t\t\tamsimann\t\t\t",
          "content": "B is wrong as it is not created in just an AZ, but specifically in a VPC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 749685,
          "date": "Mon 19 Dec 2022 10:43",
          "username": "\t\t\t\tromko\t\t\t",
          "content": "Both (Gateway and Interface) VPC endpoints allow to access S3 privately over AWS network.<br>VPC gateway usually is preferred when private access to S# is needed form EC2 in some VPC, because it free of charge, easy to set up and scalable.<br><br>To setup properly access via gateway VPC endpoint is required to editroute tables, but in answer choice it's not mentioned, so without it connection will not work.<br><br>So by elimination we may select A as correct answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Similarly to enable interface VPC endpoint, the Security Group must be attached, which is not mentioned in Option A.  Actually both interface and gateway VPC endpoints can access AWS service outside of VPC. </li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 769988,
          "date": "Mon 09 Jan 2023 03:22",
          "username": "\t\t\t\tMahadeva\t\t\t",
          "content": "Similarly to enable interface VPC endpoint, the Security Group must be attached, which is not mentioned in Option A.  Actually both interface and gateway VPC endpoints can access AWS service outside of VPC. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747841,
          "date": "Sat 17 Dec 2022 08:20",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "A Interface endpoint is the right answer.<br>B is incorrect because though VPC endpoint keep the traffic within Amazon network, it will use S3 Public IP address which may not be acceptable in this case.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I stated it incorrectly. B that says VPC Gateway end point is the right answer.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 751424,
          "date": "Tue 20 Dec 2022 21:09",
          "username": "\t\t\t\tcareer360guru\t\t\t",
          "content": "I stated it incorrectly. B that says VPC Gateway end point is the right answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 747835,
          "date": "Sat 17 Dec 2022 08:06",
          "username": "\t\t\t\tNikaCZ\t\t\t",
          "content": "Correct is: Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access. WHY: EC2 instance access S3 bucket directly over the AWS network without routing data over the public internet. VPC endpoint helps you to securely connect your VPC to another service.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742866,
          "date": "Mon 12 Dec 2022 14:48",
          "username": "\t\t\t\tShasha1\t\t\t",
          "content": "A<br>Option Aallow the EC2 instance to access the S3 bucket directly over the AWS network without routing data over the public internet.<br>Option B is not correct because a gateway VPC endpoint for Amazon S3 will not provide the EC2 instance with direct access to the S3 bucket over the AWS network. Instead, a gateway VPC endpoint will route data over the public internet, which is not allowed in this scenario.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>VPC endpoints (Gateway or Interface) will not allow the data to traverse through internet.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743599,
          "date": "Tue 13 Dec 2022 05:55",
          "username": "\t\t\t\tKADSM\t\t\t",
          "content": "VPC endpoints (Gateway or Interface) will not allow the data to traverse through internet.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732642,
          "date": "Thu 01 Dec 2022 14:16",
          "username": "\t\t\t\tDWISE1\t\t\t",
          "content": "VPC Endpoint helps you to securely connect your VPC to another service.<br><br>There are two types<br><br>Gateway endpoint<br>Interface endpoint<br>A Gateway endpoint:<br><br>Help you to securely connect to Amazon S3 and DynamoDB<br>Endpoint serves as a target in your route table for traffic<br>Provide access to endpoint (endpoint, identity and resource policies)<br>An Interface endpoint:",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 730827,
          "date": "Tue 29 Nov 2022 21:25",
          "username": "\t\t\t\tJCH760310\t\t\t",
          "content": "I'm confused: see question #4 - gateway VPC endpoint",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729719,
          "date": "Tue 29 Nov 2022 00:42",
          "username": "\t\t\t\tjambajuice\t\t\t",
          "content": "Answer A . Gateway endpoint doent support Security group.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's support it:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 749309,
          "date": "Mon 19 Dec 2022 01:01",
          "username": "\t\t\t\tA_New_Guy\t\t\t",
          "content": "It's support it:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729371,
          "date": "Mon 28 Nov 2022 17:21",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "I choose A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think it's B after some more considering.</li><li>no SG for gateway</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 729756,
          "date": "Tue 29 Nov 2022 01:48",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "I think it's B after some more considering.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>no SG for gateway</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732016,
          "date": "Wed 30 Nov 2022 22:44",
          "username": "\t\t\t\tmj98\t\t\t",
          "content": "no SG for gateway",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed.<br><br>What should the solutions architect do to ensure that the architecture supports distributed session data management?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#209",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache to manage and store session data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use session affinity (sticky sessions) of the ALB to manage session data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Session Manager from AWS Systems Manager to manage the session.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 754407,
          "date": "Fri 23 Dec 2022 19:07",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct answer is A.  Use Amazon ElastiCache to manage and store session data.<br><br>In order to support distributed session data management in this scenario, it is necessary to use a distributed data store such as Amazon ElastiCache. This will allow the session data to be stored and accessed by multiple EC2 instances across multiple Availability Zones, which is necessary for a scalable and highly available architecture.<br><br>Option B, using session affinity (sticky sessions) of the ALB, would not be sufficient because this would only allow the session data to be stored on a single EC2 instance, which would not be able to scale across multiple Availability Zones.<br><br>Options C and D, using Session Manager and the GetSessionToken API operation in AWS STS, are not related to session data management and would not be appropriate solutions for this scenario.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777671,
          "date": "Mon 16 Jan 2023 14:13",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "correct answer is A as instance are getting up and down.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 748013,
          "date": "Sat 17 Dec 2022 12:27",
          "username": "\t\t\t\tinseong\t\t\t",
          "content": "야 근데 210문제는 어딧냐 ..?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/94992-exam-aws-certified-solutions-architect-associate-saa-c03/<br>여기 임마</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822484,
          "date": "Sun 26 Feb 2023 15:01",
          "username": "\t\t\t\tnoche\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/94992-exam-aws-certified-solutions-architect-associate-saa-c03/<br>여기 임마",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747606,
          "date": "Fri 16 Dec 2022 22:39",
          "username": "\t\t\t\tNikaCZ\t\t\t",
          "content": "Amazon ElastiCache to manage and store session data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 746249,
          "date": "Thu 15 Dec 2022 16:25",
          "username": "\t\t\t\tk1kavi1\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46412-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742872,
          "date": "Mon 12 Dec 2022 14:56",
          "username": "\t\t\t\tShasha1\t\t\t",
          "content": "A<br>Amazon ElastiCache to manage and store session data. This solution will allow the application to automatically scale across multiple Availability Zones without losing session data, as the session data will be stored in a cache that is accessible from any EC2 instance. Additionally, using Amazon ElastiCache will enable the company to easily manage and scale the cache as needed, without requiring any changes to the application code. Option C is not correct because,Session Manager from AWS Systems Manager will not provide the necessary support for distributed session data management. Session Manager is a tool for managing and tracking sessions on EC2 instances, but it does not provide a mechanism for storing and managing session data in a distributed environment.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732095,
          "date": "Thu 01 Dec 2022 00:46",
          "username": "\t\t\t\tTelaO\t\t\t",
          "content": "better justification found here...<br>https://www.examtopics.com/discussions/amazon/view/46412-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 731089,
          "date": "Wed 30 Nov 2022 05:30",
          "username": "\t\t\t\tkmaneith\t\t\t",
          "content": "why not C?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729376,
          "date": "Mon 28 Nov 2022 17:25",
          "username": "\t\t\t\tleonnnn\t\t\t",
          "content": "ALB sticky session can keep request accessing to the same backend application. But it says \\\"distributed session management\\\" and company \\\"will to change code\\\", so I think A is better",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 729237,
          "date": "Mon 28 Nov 2022 15:40",
          "username": "\t\t\t\tNigma\t\t\t",
          "content": "Answer : A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#210",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company offers a food delivery service that is growing rapidly. Because of the growth, the company's order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following:<br><br>• A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application<br>• Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders<br><br>The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event.<br><br>A solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company's AWS resources.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#210",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group's minimum capacity according to peak workload values.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 830840,
          "date": "Mon 06 Mar 2023 14:31",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "When the backlog per instance reaches the target value, a scale-out event will happen. Because the backlog per instance is already 150 messages (1500 messages / 10 instances), your group scales out, and it scales out by five instances to maintain proportion to the target value.<br>Backlog per instance: To calculate your backlog per instance, start with the ApproximateNumberOfMessages queue attribute to determine the length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which for an Auto Scaling group is the number of instances in the InService state, to get the backlog per instance.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 785530,
          "date": "Mon 23 Jan 2023 16:22",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Scale based on queue length",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779886,
          "date": "Wed 18 Jan 2023 11:48",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "answer is D. <br>read question again",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779641,
          "date": "Wed 18 Jan 2023 06:46",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "The number of instances in your Auto Scaling group can be driven by how long it takes to process a message and the acceptable amount of latency (queue delay). <br>The solution is to use a backlog per instance metric with the target value being the acceptable backlog per instance to maintain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779392,
          "date": "Wed 18 Jan 2023 00:23",
          "username": "\t\t\t\tAseem8888\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778469,
          "date": "Tue 17 Jan 2023 03:15",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "C<br>Need to Auto-<br>Scale Queue of SQS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why would you scale based on \\\" Scale the Auto Scaling groups based on notifications that the queues send.\\\"? Would it not make 1000 times more sense to scale base don queue length \\\"Create a metric based on a backlog per instance calculation\\\"?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785529,
          "date": "Mon 23 Jan 2023 16:22",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Why would you scale based on \\\" Scale the Auto Scaling groups based on notifications that the queues send.\\\"? Would it not make 1000 times more sense to scale base don queue length \\\"Create a metric based on a backlog per instance calculation\\\"?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777684,
          "date": "Mon 16 Jan 2023 14:19",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "I think its D as here we are creating new metric to calculate load on each EC2 instance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777682,
          "date": "Mon 16 Jan 2023 14:18",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "I think its D as here we are creating new metric to calculate load on each EC2 instance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777601,
          "date": "Mon 16 Jan 2023 12:18",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "C is incorrect as SQS doesn't send notifications and needs to be polled by the consumers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776243,
          "date": "Sun 15 Jan 2023 09:02",
          "username": "\t\t\t\tKM01\t\t\t",
          "content": "I think, D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776239,
          "date": "Sun 15 Jan 2023 08:46",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "ı think c ,but ı m not sure ı think both of solve problem<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No they don't. How exactly would you scale based on a queue sending a message? Scale up when it sends a message? Scale up every time it sends a message? This takes no account of how quickly messages are processed.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785532,
          "date": "Mon 23 Jan 2023 16:24",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "No they don't. How exactly would you scale based on a queue sending a message? Scale up when it sends a message? Scale up every time it sends a message? This takes no account of how quickly messages are processed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775730,
          "date": "Sat 14 Jan 2023 17:32",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "I think C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775211,
          "date": "Sat 14 Jan 2023 10:10",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774272,
          "date": "Fri 13 Jan 2023 10:04",
          "username": "\t\t\t\tsenthil21\t\t\t",
          "content": "correct answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#211",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of “application” and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#211",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudTrail to generate a list of resources with the application tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS CLI to query each service across all Regions to report the tagged components.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791535,
          "date": "Sun 29 Jan 2023 11:03",
          "username": "\t\t\t\tsh0811\t\t\t",
          "content": "D가 맞습니다.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 789141,
          "date": "Thu 26 Jan 2023 23:13",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779888,
          "date": "Wed 18 Jan 2023 11:50",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "Answer is D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777688,
          "date": "Mon 16 Jan 2023 14:21",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "validated <br>https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775212,
          "date": "Sat 14 Jan 2023 10:12",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775084,
          "date": "Sat 14 Jan 2023 05:27",
          "username": "\t\t\t\twaiyiu9981\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/51352-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB.  The S3 access pattern for the data is variable and changes rapidly. The data must be immediately available and must remain accessible for up to 3 months. The company needs the most cost-effective solution that will not increase retrieval time.<br><br>Which S3 storage class should the company use to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>A. S3 Intelligent-Tiering<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. S3 Glacier Instant Retrieval<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. S3 Standard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. S3 Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777695,
          "date": "Mon 16 Jan 2023 14:25",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "S3 Intelligent-Tiering monitors access patterns and moves objects that have not been accessed for 30 consecutive days to the Infrequent Access tier and after 90 days of no access to the Archive Instant Access tier.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 802974,
          "date": "Thu 09 Feb 2023 09:29",
          "username": "\t\t\t\tneosis91\t\t\t",
          "content": "Response D, not A<br>S3 Intelligent-Tiering is a cost-optimized storage class that automatically moves data to the most cost-effective access tier based on changing access patterns. Although it offers cost savings, it also introduces additional latency and retrieval time into the data retrieval process, which may not meet the requirement of \\\"immediately available\\\" data.<br><br>On the other hand, S3 Standard-Infrequent Access (S3 Standard-IA) provides low cost storage with low latency and high throughput performance. It is designed for infrequently accessed data that can be recreated if lost, and can be retrieved in a timely manner if required. It is a cost-effective solution that meets the requirement of immediately available data and remains accessible for up to 3 months.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779890,
          "date": "Wed 18 Jan 2023 11:52",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "Changes rapidly and immidiately available so Answe is AAAAA. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777792,
          "date": "Mon 16 Jan 2023 15:44",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A looks correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775966,
          "date": "Sat 14 Jan 2023 23:10",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "\\\"The S3 access pattern for the data is variable and changes rapidly\\\" => Use S3 intelligent tiering with smart enough to transit the prompt storage class.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775746,
          "date": "Sat 14 Jan 2023 17:49",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  S3 Standard-Infrequent Access (S3 Standard-IA)<br><br>S3 Standard-IA is the most cost-effective storage class that meets the company's requirements. It provides immediate access to the data, and the data remains accessible for up to 3 months. S3 Standard-IA is optimized for infrequently accessed data, which is suitable for the company's use case of exporting the database once a day. This storage class also has a lower retrieval fee compared to S3 Glacier, which is important for the company as the S3 access pattern for the data is variable and changes rapidly. S3 Intelligent-Tiering and S3 Standard are not the best choice in this case because they are designed for frequently accessed data and have higher retrieval fees<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The correct answer is A. <br>The S3 access pattern for the data is variable and changes rapidly.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779577,
          "date": "Wed 18 Jan 2023 04:31",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "The correct answer is A. <br>The S3 access pattern for the data is variable and changes rapidly.",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>A. Configure AWS WAF rules and associate them with the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application using Amazon S3 with public hosting enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS Shield Advanced and add the ALB as a protected resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778499,
          "date": "Tue 17 Jan 2023 04:06",
          "username": "\t\t\t\tShinobiGrappler\t\t\t",
          "content": "C --- Read and understand the question. *The company needs to reduce its share of responsibility in managing, updating, and securing servers for its AWS environment* Go with AWS Shield advanced --This is a managed service that includes AWS WAF, custom mitigations, and DDoS insight.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You stated, \\\"This is a managed service that includes AWS WAF, custom mitigations, and DDoS insight.\\\" and you are correct.However, the service you would actually have to setup to prevent SQL injection attacks is WAF. </li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 825241,
          "date": "Tue 28 Feb 2023 21:26",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "You stated, \\\"This is a managed service that includes AWS WAF, custom mitigations, and DDoS insight.\\\" and you are correct.However, the service you would actually have to setup to prevent SQL injection attacks is WAF. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832091,
          "date": "Tue 07 Mar 2023 17:12",
          "username": "\t\t\t\tNel8\t\t\t",
          "content": "Selected Answer: A<br>\\\"The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection.\\\" --- WAF monitors the Application Load Balancer or CloudFront will either allow this content to be received or give an HTTP 403 status code. Also, WAF protects the Layer 7 (the Application Layer).<br><br>While AWS Shield Advanced, provides enhanced protections for applications running on Elastic Load Balancer, CloudFront, and Route 53 against DDoS attack. Also, Shield protects the Layer 3 and 4, these layers are not for Application Layer. And most of all, Shield Advance is expensive, it costs $3,000 USD per month.<br><br>So, the answer should be A -- AWS WAF. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825059,
          "date": "Tue 28 Feb 2023 18:06",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Waf is for application attacks.Shield advanced is for ddos",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 822250,
          "date": "Sun 26 Feb 2023 11:30",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "\\\"against common application-level attacks, such as cross-site scripting or SQL injection\\\" Shield is for DDOS Protection... Answer A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818509,
          "date": "Wed 22 Feb 2023 23:50",
          "username": "\t\t\t\tNel8\t\t\t",
          "content": "Selected Answer: A<br>\\\"The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection.\\\" --- WAF monitors the Application Load Balancer or CloudFront will either allow this content to be received or give an HTTP 403 status code. Also, WAF protects the Layer 7 (the Application Layer).<br><br>While AWS Shield Advanced, provides enhanced protections for applications running on Elastic Load Balancer, CloudFront, and Route 53 against DDoS attack. Also, Shield protects the Layer 3 and 4, these layers are not for Application Layer. And most of all, Shield Advance is expensive, it costs $3,000 USD per month.<br><br>So, the answer should be A -- AWS WAF. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 808666,
          "date": "Tue 14 Feb 2023 19:12",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "AWS WAF comes with Managed rule groups which are collections of predefined, ready-to-use rules <br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-rule-groups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 802982,
          "date": "Thu 09 Feb 2023 09:35",
          "username": "\t\t\t\tneosis91\t\t\t",
          "content": "A<br>A solutions architect should recommend option A, which is to configure AWS WAF rules and associate them with the ALB.  This will allow the company to apply traffic filtering at the application layer, which is necessary for protecting the ALB against common application-level attacks such as cross-site scripting or SQL injection. AWS WAF is a managed service that makes it easy to protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. The company can easily manage and update the rules to ensure the security of its application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 800380,
          "date": "Tue 07 Feb 2023 01:13",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "https://aws.amazon.com/shield/features/<br><br>Shield Advanced provides additional detection and mitigation against large and sophisticated DDoS attacks, near real-time visibility into attacks, and integration with AWS WAF, a web application firewall. Shield Advanced also gives you 24/7 access to the AWS Shield Response Team (SRT) and protection against DDoS-related spikes in your EC2, ELB, CloudFront, Global Accelerator, and Route 53 charges.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 797797,
          "date": "Sat 04 Feb 2023 11:01",
          "username": "\t\t\t\tJohnnyBG\t\t\t",
          "content": "WAF = Application level defense<br>Shield = L4 DDOS protection",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 797698,
          "date": "Sat 04 Feb 2023 08:28",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "Answer should be A, because It has asked only for application-level attacks, shield advanced costs are very high, why would you use such a high cost solution just to mitigate application level attacks?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795185,
          "date": "Wed 01 Feb 2023 14:42",
          "username": "\t\t\t\tdamirbek369\t\t\t",
          "content": "The company needs to reduce its share of responsibility in managing, updating, and securing servers for its AWS environment* Go with AWS Shield advanced",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791982,
          "date": "Sun 29 Jan 2023 20:24",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "AWS WAF offers the following protections to prevent SQLi and XSS attacks:<br><br>Built-in SQLi and XSS engines<br>AWS Managed Rules available for SQLi and XSS injection attacks<br>To configure these protections, be sure that you have set up AWS WAF and created a web ACL.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/waf-rule-prevent-sqli-xss/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790488,
          "date": "Sat 28 Jan 2023 10:53",
          "username": "\t\t\t\tskondey\t\t\t",
          "content": "C - is the correct answer in this case base on the question: the company nee to reduce its share of responsibility in managing, so Shield is the best choice for this question. <br>Shield is a fully managed service.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785566,
          "date": "Mon 23 Jan 2023 16:46",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "\\\"With AWS WAF, **YOU**can create security rules that control bot traffic and block common attack patterns such as SQL injection or cross-site scripting (XSS).\\\" The \\\"company needs to reduce its share of the responsibility in managing\\\". So yes A will provide the protection, but it does not meet the requirement for the company needs to reduce its share of the responsibility in managing, so C. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784487,
          "date": "Sun 22 Jan 2023 17:37",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Focus: The company has #minimal #infrastructure and #operational #staff. The company needs to REDUCE its SHARE of the RESPONSIBILITY in #managing, #updating, and #securing #servers for its AWS environment.<br><br>AWS Shield is a #MANAGED DDoS protection service that safeguards apps running on AWS.<br><br>AWS WAF (for common application-level attacks, such as cross-site scripting or SQL injection) is available AT NO EXTRA CHARGE for usage on resources protected by AWS Shield Advanced (protected resource = ALB).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784399,
          "date": "Sun 22 Jan 2023 15:40",
          "username": "\t\t\t\tbrownest\t\t\t",
          "content": "Shield advanced contains WAF. https://aws.amazon.com/shield/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779893,
          "date": "Wed 18 Jan 2023 11:55",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "cross site scripting and SQL injection so WAF on ALB is the answer so AAAAA. ",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket.<br><br>Which solution will meet these requirements with the LEAST development effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#214",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775169,
          "date": "Sat 14 Jan 2023 08:50",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "It looks like AWS Glue allows fully managed CSV to Parquet conversion jobs: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 831367,
          "date": "Tue 07 Mar 2023 00:11",
          "username": "\t\t\t\tachevez85\t\t\t",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 785629,
          "date": "Mon 23 Jan 2023 18:01",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "S3 provides a single control to automatically encrypt all new objects in a bucket with SSE-S3 or SSE-KMS. Unfortunately, these controls only affect new objects.If your bucket already contains millions of unencrypted objects, then turning on automatic encryption does not make your bucket secure as the unencrypted objects remain. <br><br>For S3 buckets with a large number of objects (millions to billions), use Amazon S3 Inventory to get a list of the unencrypted objects, and Amazon S3 Batch Operations to encrypt the large number of old, unencrypted files.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.</li><li>Please delete this. I was meaning to place this response on a different question.</li><li>Please delete this. I was meaning to place this response on a different question.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 785630,
          "date": "Mon 23 Jan 2023 18:02",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please delete this. I was meaning to place this response on a different question.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785633,
          "date": "Mon 23 Jan 2023 18:05",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Please delete this. I was meaning to place this response on a different question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785632,
          "date": "Mon 23 Jan 2023 18:05",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Please delete this. I was meaning to place this response on a different question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779895,
          "date": "Wed 18 Jan 2023 11:56",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "ETL = Glue",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777797,
          "date": "Mon 16 Jan 2023 15:50",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777710,
          "date": "Mon 16 Jan 2023 14:35",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "AWS Glue Crawler is for ETL",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777248,
          "date": "Mon 16 Jan 2023 02:41",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "The correct answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777123,
          "date": "Sun 15 Jan 2023 23:28",
          "username": "\t\t\t\tMamiololo\t\t\t",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776288,
          "date": "Sun 15 Jan 2023 09:47",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "ıt should be b",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775959,
          "date": "Sat 14 Jan 2023 22:53",
          "username": "\t\t\t\tmarcioicebr\t\t\t",
          "content": "De acordo com a documentação, a resposta certa é B. <br><br>https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775783,
          "date": "Sat 14 Jan 2023 18:34",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "B is the ans",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775758,
          "date": "Sat 14 Jan 2023 18:01",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775542,
          "date": "Sat 14 Jan 2023 15:55",
          "username": "\t\t\t\tKayamables\t\t\t",
          "content": "Option B sounds more plausible to me.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer.<br><br>What should a solutions architect do to migrate and store the data at the LOWEST cost?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#215",
          "answers": [
            {
              "choice": "<p>A. Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a VPN connection between the data center and Amazon VPC.  Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827876,
          "date": "Fri 03 Mar 2023 11:35",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "Snowball",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 811708,
          "date": "Fri 17 Feb 2023 10:50",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "9 Snowball devices are needed to migrate the 700TB of data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>700TB of Data can not be transferred through a 500Mbps link within one month.<br><br>Total data that can be transferred in one month = bandwidth x time<br>= (500 Mbps / 8 bits per byte) x (30 days x 24 hours x 3600 seconds per hour)<br>= 648,000 GB or 648 TB<br>This is calculated theoretically with the maximum available situation. Due to a number of factors, the actual total transferred Data may be less than 645 TB. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811719,
          "date": "Fri 17 Feb 2023 11:04",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "700TB of Data can not be transferred through a 500Mbps link within one month.<br><br>Total data that can be transferred in one month = bandwidth x time<br>= (500 Mbps / 8 bits per byte) x (30 days x 24 hours x 3600 seconds per hour)<br>= 648,000 GB or 648 TB<br>This is calculated theoretically with the maximum available situation. Due to a number of factors, the actual total transferred Data may be less than 645 TB. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779899,
          "date": "Wed 18 Jan 2023 12:00",
          "username": "\t\t\t\tRudraman\t\t\t",
          "content": "Snow ball Devices the answe is AAAAA. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777606,
          "date": "Mon 16 Jan 2023 12:35",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "A is incorrect as DC is an expensive option. Correct answer should be C as the company already has 500Mbps that can be used for data transfer. By consuming all the available internet bandwidth, data transfer will complete in 3 hours 6 mins - https://www.omnicalculator.com/other/data-transfer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ignore please, miscalculated time to transfer, it will take 129 days and will breach the 1 month requirement. A is correct.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777607,
          "date": "Mon 16 Jan 2023 12:39",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "Ignore please, miscalculated time to transfer, it will take 129 days and will breach the 1 month requirement. A is correct.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 777249,
          "date": "Mon 16 Jan 2023 02:42",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776298,
          "date": "Sun 15 Jan 2023 09:57",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "a is correct but not less expensive.I think,should be D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775962,
          "date": "Sat 14 Jan 2023 23:00",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A is correct.<br><br>Cannot copy files directly from on-prem to S3 Glacier with DataSync. It should be S3 standard first, then configuration S3 Lifecycle to transit to Glacier => Exclude D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yes you can - https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790630,
          "date": "Sat 28 Jan 2023 14:50",
          "username": "\t\t\t\tPDR\t\t\t",
          "content": "yes you can - https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775765,
          "date": "Sat 14 Jan 2023 18:11",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "The correct answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774229,
          "date": "Fri 13 Jan 2023 09:09",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "Less expensive = Data Sync i guess (D)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The migration must be complete within 1 month\\\" you can't complete this with transfer 500Mb/s. With that speed we need 129days to transfer. Snowball is only way to do it in desired time.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786914,
          "date": "Tue 24 Jan 2023 21:18",
          "username": "\t\t\t\tPindol\t\t\t",
          "content": "\\\"The migration must be complete within 1 month\\\" you can't complete this with transfer 500Mb/s. With that speed we need 129days to transfer. Snowball is only way to do it in desired time.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#216",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all objects that are added to the S3 bucket in the future.<br><br>Which solution will meet these requirements with the LEAST amount of effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all existing objects to temporary local storage. Upload the objects to the new S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt those objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on versioning for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket's objects. Sort by the encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to every unencrypted object in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775965,
          "date": "Sat 14 Jan 2023 23:07",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "Step 1: S3 inventory to get object list<br>Step 2 (If needed): Use S3 Select to filter<br>Step 3: S3 object operations to encrypt the unencrypted objects.<br><br>On the going object use default encryption.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Useful ref link: https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775970,
          "date": "Sat 14 Jan 2023 23:14",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "Useful ref link: https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 808673,
          "date": "Tue 14 Feb 2023 19:22",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Amazon S3 now configures default encryption on all existing unencrypted buckets to apply server-side encryption with S3 managed keys (SSE-S3) as the base level of encryption for new objects uploaded to these buckets. Objects that are already in an existing unencrypted bucket won't be automatically encrypted.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 808149,
          "date": "Tue 14 Feb 2023 07:35",
          "username": "\t\t\t\tYelizaveta\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-copy-example-bucket-key.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 797700,
          "date": "Sat 04 Feb 2023 08:31",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 796928,
          "date": "Fri 03 Feb 2023 10:20",
          "username": "\t\t\t\tVal182\t\t\t",
          "content": "B 100%<br>https://spin.atomicobject.com/2020/09/15/aws-s3-encrypt-existing-objects/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 791200,
          "date": "Sun 29 Jan 2023 00:32",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Why is no one discussing A ? I thinkA can also achieve the required results. Bis the most appropriate answer though.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785642,
          "date": "Mon 23 Jan 2023 18:08",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "S3 provides a single control to automatically encrypt all new objects in a bucket with SSE-S3 or SSE-KMS. Unfortunately, these controls only affect new objects. If your bucket already contains millions of unencrypted objects, then turning on automatic encryption does not make your bucket secure as the unencrypted objects remain.<br><br>For S3 buckets with a large number of objects (millions to billions), use Amazon S3 Inventory to get a list of the unencrypted objects, and Amazon S3 Batch Operations to encrypt the large number of old, unencrypted files.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 785644,
          "date": "Mon 23 Jan 2023 18:08",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785636,
          "date": "Mon 23 Jan 2023 18:06",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "S3 provides a single control to automatically encrypt all new objects in a bucket with SSE-S3 or SSE-KMS. Unfortunately, these controls only affect new objects.If your bucket already contains millions of unencrypted objects, then turning on automatic encryption does not make your bucket secure as the unencrypted objects remain. <br><br>For S3 buckets with a large number of objects (millions to billions), use Amazon S3 Inventory to get a list of the unencrypted objects, and Amazon S3 Batch Operations to encrypt the large number of old, unencrypted files.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.</li><li>Please remove duplicate response as I was meaning to submit a voting comment.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785637,
          "date": "Mon 23 Jan 2023 18:06",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Versioning:<br><br>When you overwrite an S3 object, it results in a new object version in the bucket. However, this will not remove the old unencrypted versions of the object. If you do not delete the old version of your newly encrypted objects, you will be charged for the storage of both versions of the objects. <br><br>S3 Lifecycle <br><br>If you want to remove these unencrypted versions, use S3 Lifecycle to expire previous versions of objects. When you add a Lifecycle configuration to a bucket, the configuration rules apply to both existing objects and objects added later. C is missing this step, which I believe is what makes B the better choice. B includes the functionality of encrypting the old unencrypted objects via Batch Operations, whereas, Versioning does not address the old unencrypted objects.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please remove duplicate response as I was meaning to submit a voting comment.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785646,
          "date": "Mon 23 Jan 2023 18:09",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Please remove duplicate response as I was meaning to submit a voting comment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783178,
          "date": "Sat 21 Jan 2023 11:38",
          "username": "\t\t\t\tJohn_Zhuang\t\t\t",
          "content": "C is wrong. Even though you turn on the SSE-KMS with a new key, the existing objects are still yet to be encrypted. They still need to be manually encrypted by AWS batch",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779777,
          "date": "Wed 18 Jan 2023 09:59",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "https://spin.atomicobject.com/2020/09/15/aws-s3-encrypt-existing-objects/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777806,
          "date": "Mon 16 Jan 2023 15:55",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777724,
          "date": "Mon 16 Jan 2023 14:46",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Agree with Parsons",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777538,
          "date": "Mon 16 Jan 2023 11:16",
          "username": "\t\t\t\tLilibell\t\t\t",
          "content": "the answer is C<br>also, the questions require future encryption of the objects is the S3 bucket = VERSIONING",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776301,
          "date": "Sun 15 Jan 2023 10:01",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "could not open default encripton for exist bucket,so need to use KMS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775769,
          "date": "Sat 14 Jan 2023 18:16",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "The correct answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774528,
          "date": "Fri 13 Jan 2023 14:26",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/93042-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#217",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#217",
          "answers": [
            {
              "choice": "<p>A. Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775973,
          "date": "Sat 14 Jan 2023 23:24",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A is correct.<br>- \\\"The solution does not need to handle the load when the primary infrastructure is healthy.\\\" => Should use Route 53 Active-Passive ==> Exclude B, C<br>- D is incorrect because \\\"Create an Aurora second primary instance in the second Region.\\\", we need to create an Aurora Replica enough.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ref link: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775974,
          "date": "Sat 14 Jan 2023 23:24",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "Ref link: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 808167,
          "date": "Tue 14 Feb 2023 08:12",
          "username": "\t\t\t\tYelizaveta\t\t\t",
          "content": "Depending on the Regions involved and the amount of data to be copied, a cross-Region snapshot copy can take hours to complete and will be a factor to consider for the RPO requirements. You need to take this into account when you estimate the RPO of this DR strategy.<br><br>If you have strict RTO and RPO requirements, you should consider a different DR strategy, such as Amazon Aurora Global Database .<br>https://aws.amazon.com/blogs/database/cost-effective-disaster-recovery-for-amazon-aurora-databases-using-aws-backup/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 801968,
          "date": "Wed 08 Feb 2023 12:55",
          "username": "\t\t\t\tJiyuKim\t\t\t",
          "content": "The solution does not need to handle the load when the primary infrastructure is healthy. -> Amazon Route 53 active-passive failover -> A,D<br>The company can tolerate up to 30 minutes of downtime and potential data loss -> backup -> D<br>you don't have to use read replicas if you can tolerate downtime and data loss.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Consider Answer B. <br>It is suggesting a Pilot Light DR strategy.<br>https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html</li><li>I will Vote B and i initially thought it Pilot Light however after 2nd read, it seem it more like warm standby. Option D looks more like back up and Restore strategy and it will take more than 30 minutes to get it done.C is wrong, snapshot takes longer time to restore</li><li>The key sentence is <br>\\\"a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss\\\"<br>Take a look at the visualization in the URL provided. Pilot light = 30 minutes.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811661,
          "date": "Fri 17 Feb 2023 09:58",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "Consider Answer B. <br>It is suggesting a Pilot Light DR strategy.<br>https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I will Vote B and i initially thought it Pilot Light however after 2nd read, it seem it more like warm standby. Option D looks more like back up and Restore strategy and it will take more than 30 minutes to get it done.C is wrong, snapshot takes longer time to restore</li><li>The key sentence is <br>\\\"a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss\\\"<br>Take a look at the visualization in the URL provided. Pilot light = 30 minutes.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 827591,
          "date": "Fri 03 Mar 2023 02:47",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "I will Vote B and i initially thought it Pilot Light however after 2nd read, it seem it more like warm standby. Option D looks more like back up and Restore strategy and it will take more than 30 minutes to get it done.C is wrong, snapshot takes longer time to restore<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The key sentence is <br>\\\"a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss\\\"<br>Take a look at the visualization in the URL provided. Pilot light = 30 minutes.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828517,
          "date": "Sat 04 Mar 2023 03:33",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "The key sentence is <br>\\\"a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss\\\"<br>Take a look at the visualization in the URL provided. Pilot light = 30 minutes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797702,
          "date": "Sat 04 Feb 2023 08:35",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "I am confused within A and D but I think D is the answer because this seems to be a cost related problem, a replica is kind of a standby and you can promote to be the main db anytime without any much downtime, but here it says it can withstand 30 mins of downtime so we can just keep a backup of the instance and then create a DB whenever required from the backup, hence less cost",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777808,
          "date": "Mon 16 Jan 2023 15:56",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776022,
          "date": "Sun 15 Jan 2023 00:29",
          "username": "\t\t\t\tgunmin\t\t\t",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775779,
          "date": "Sat 14 Jan 2023 18:27",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "answer is d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774593,
          "date": "Fri 13 Jan 2023 15:49",
          "username": "\t\t\t\talanp\t\t\t",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774356,
          "date": "Fri 13 Jan 2023 12:01",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "A is correct answer.<br>https://www.examtopics.com/discussions/amazon/view/81439-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774353,
          "date": "Fri 13 Jan 2023 12:00",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/81439-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#218",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all traffic. A solutions architect needs to make the web server accessible from everywhere on port 443.<br><br>Which combination of steps will accomplish this task? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#218",
          "answers": [
            {
              "choice": "<p>A. Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the network ACL to allow TCP port 443 from source 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 32768-65535 to destination 0.0.0.0/0.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775975,
          "date": "Sat 14 Jan 2023 23:28",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A, E is perfect the combination. To be more precise, We should add outbound with \\\"outbound TCP port 32768-65535 to destination 0.0.0.0/0.\\\" as an ephemeral port due to the stateless of NACL.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 837634,
          "date": "Mon 13 Mar 2023 05:50",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "NACL blocks outgoing traffic since it is infact stateless..Option E allows outbound traffic from ephemeral ports going outside of the VPC back to the web.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 830737,
          "date": "Mon 06 Mar 2023 12:00",
          "username": "\t\t\t\tBrak\t\t\t",
          "content": "It can't be C, since the current NACL blocks all traffic, including outbound. Need to allow outbound traffic through the NACL.<br>But E is a bad answer, since ephemeral ports start at 1024, not 32768.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 802994,
          "date": "Thu 09 Feb 2023 09:43",
          "username": "\t\t\t\tneosis91\t\t\t",
          "content": "A and C not E<br>Option E states to allow incoming TCP ports on 443 and outgoing on 32768-65535 to all IP addresses (0.0.0.0/0). This option only allows outgoing ports and does not guarantee that incoming connections on 443 will be allowed. It does not meet the requirement of making the web server accessible on port 443 from anywhere. Therefore, option C which states to allow incoming TCP ports on 443 from all IP addresses is the best answer to meet the requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer : AE - Incoming traffic on port 443 but sever can use any port to reply back.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 818618,
          "date": "Thu 23 Feb 2023 02:12",
          "username": "\t\t\t\tDeepak_k\t\t\t",
          "content": "Answer : AE - Incoming traffic on port 443 but sever can use any port to reply back.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777812,
          "date": "Mon 16 Jan 2023 15:57",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "AE correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 777732,
          "date": "Mon 16 Jan 2023 14:56",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "A & E , E asNACL isstateless.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 775797,
          "date": "Sat 14 Jan 2023 18:58",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "AE:<br>https://www.examtopics.com/discussions/amazon/view/29767-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775781,
          "date": "Sat 14 Jan 2023 18:32",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/29767-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 775218,
          "date": "Sat 14 Jan 2023 10:26",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "A E is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 774594,
          "date": "Fri 13 Jan 2023 15:50",
          "username": "\t\t\t\talanp\t\t\t",
          "content": "Ans AE",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#219",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application.<br><br>Which solution will resolve these issues in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>A. Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775983,
          "date": "Sat 14 Jan 2023 23:37",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "D is the correct answer.<br><br> \\\"in-memory tasks\\\" => need the \\\"R\\\" EC2 instance type to archive memory optimization. So we are concerned about C & D.  <br>Because EC2 instances don't have built-in memory metrics to CW by default. As a result, we have to install the CW agent to archive the purpose.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777813,
          "date": "Mon 16 Jan 2023 15:58",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Would go with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775786,
          "date": "Sat 14 Jan 2023 18:44",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "ı think D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775184,
          "date": "Sat 14 Jan 2023 09:21",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "It's D, EC2 do not provide by default memory metrics to CloudWatch and require the CloudWatch Agent to be installed on the monitored instances : https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-memory-metrics-ec2/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made.<br><br>Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#220",
          "answers": [
            {
              "choice": "<p>A. An AWS Glue job<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An AWS Lambda function<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A containerized service hosted in Amazon ECS with Amazon EC2<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777817,
          "date": "Mon 16 Jan 2023 16:00",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Lambda !",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775984,
          "date": "Sat 14 Jan 2023 23:39",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "B is the correct answer.<br>APIGateway + Lambda is the perfect solution for modern applications with serverless architecture.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775791,
          "date": "Sat 14 Jan 2023 18:48",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/43780-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able to access all the files concurrently.<br><br>Which storage solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>A. Amazon Elastic Block Store (Amazon EBS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Elastic File System (Amazon EFS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon EC2 instance store<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon S3<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777822,
          "date": "Mon 16 Jan 2023 16:01",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Cost Effective: S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775985,
          "date": "Sat 14 Jan 2023 23:41",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "S3 is enough with the lowest cost perspective.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775792,
          "date": "Sat 14 Jan 2023 18:50",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/22182-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hired an external vendor to perform work in the company's AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company's AWS account.<br><br>How should a solutions architect grant this access to the vendor?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#222",
          "answers": [
            {
              "choice": "<p>A. Create an IAM role in the company's account to delegate access to the vendor's IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user in the company's account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM group in the company's account. Add the tool's IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new identity provider by choosing “AWS account” as the provider type in the IAM console. Supply the vendor's AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778042,
          "date": "Mon 16 Jan 2023 18:48",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "A is proper<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777823,
          "date": "Mon 16 Jan 2023 16:02",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "IAM role is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777751,
          "date": "Mon 16 Jan 2023 15:12",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "A is correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777446,
          "date": "Mon 16 Jan 2023 09:10",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776165,
          "date": "Sun 15 Jan 2023 06:08",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775990,
          "date": "Sat 14 Jan 2023 23:46",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775182,
          "date": "Sat 14 Jan 2023 09:18",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "My guess is D: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the internet.<br><br>Which combination of steps should the solutions architect take to accomplish this goal? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#223",
          "answers": [
            {
              "choice": "<p>A. Attach an IAM role that has sufficient privileges to the EKS pod.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an IAM user that has sufficient privileges to the EKS pod.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow outbound connectivity to the DynamoDB table through the private subnets' network ACLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC endpoint for DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Embed the access keys in the Java Spring Boot code.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 780552,
          "date": "Thu 19 Jan 2023 00:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Definitely",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 777827,
          "date": "Mon 16 Jan 2023 16:04",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A D are the correct options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 776170,
          "date": "Sun 15 Jan 2023 06:15",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html<br>https://aws.amazon.com/about-aws/whats-new/2019/09/amazon-eks-adds-support-to-assign-iam-permissions-to-kubernetes-service-accounts/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 775991,
          "date": "Sat 14 Jan 2023 23:47",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A, D is the correct answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 775799,
          "date": "Sat 14 Jan 2023 19:00",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "The correct answer is A,D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its web application to AWS by rehosting the application on Amazon EC2 instances in a single AWS Region. The company wants to redesign its application architecture to be highly available and fault tolerant. Traffic must reach all running EC2 instances randomly.<br><br>Which combination of steps should the company take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#224",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Route 53 failover routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Route 53 weighted routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Route 53 multivalue answer routing policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch three EC2 instances: two instances in one Availability Zone and one instance in another Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 831439,
          "date": "Tue 07 Mar 2023 01:54",
          "username": "\t\t\t\tachevez85\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-multivalue.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 826148,
          "date": "Wed 01 Mar 2023 19:14",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I went back and rewatched the lectures from Udemy on Weighted and Multi-Value. The lecturer said that Multi-value is *not* as substitute for ELB and he stated that DNS load balancing is a good use case for Weighted routing policies",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 807173,
          "date": "Mon 13 Feb 2023 09:10",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-multivalue.html<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html<br><br>Note the following:<br>If you associate a health check with a multivalue answer record, Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 789310,
          "date": "Fri 27 Jan 2023 05:00",
          "username": "\t\t\t\tdoorahmie\t\t\t",
          "content": "why e not c? sorry for naive question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777831,
          "date": "Mon 16 Jan 2023 16:04",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C and E are the correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 777754,
          "date": "Mon 16 Jan 2023 15:17",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "CE:<br>https://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-policies/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777448,
          "date": "Mon 16 Jan 2023 09:13",
          "username": "\t\t\t\talanp\t\t\t",
          "content": "Multivalue answer routing policy – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random. You can use multivalue answer routing to create records in a private hosted zone.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777438,
          "date": "Mon 16 Jan 2023 09:04",
          "username": "\t\t\t\traf123123\t\t\t",
          "content": "C, E is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 777149,
          "date": "Sun 15 Jan 2023 23:54",
          "username": "\t\t\t\tMamiololo\t\t\t",
          "content": "Why not A, E ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The reason A is wrong is that while it does check if the resources are available, before responding to the client, it does not meet this requirement: \\\"Traffic must reach all running EC2 instances randomly\\\", since it will only send to the failover EC2 instances once the active ones fail.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785610,
          "date": "Mon 23 Jan 2023 17:39",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "The reason A is wrong is that while it does check if the resources are available, before responding to the client, it does not meet this requirement: \\\"Traffic must reach all running EC2 instances randomly\\\", since it will only send to the failover EC2 instances once the active ones fail.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775995,
          "date": "Sat 14 Jan 2023 23:51",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "C, E is the correct answer.<br><br>\\\"Traffic must reach all running EC2 instances randomly.\\\" => We need a Multi-answer with health checks up to 8 items.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 775806,
          "date": "Sat 14 Jan 2023 19:06",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "B.  Create an Amazon Route 53 weighted routing policy.E.  Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone.<br><br>To meet the requirements of high availability and fault tolerance, the company should take the following steps:<br>B.  Create an Amazon Route 53 weighted routing policy. This will allow the company to distribute traffic to all running EC2 instances in a random fashion.<br>E.  Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone. This will ensure that the application is highly available and fault-tolerant by spreading the instances across multiple availability zones. In the event of a failure of an availability zone, the traffic will be routed to the remaining instances which are running in other availability zones.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The reason B is wrong is that it doe snot check if the resources are available, before responding to the client. So you will distribute traffic to the 4 EC2 instances, but if one of these fails, then traffic will still b sent there. Option C WILL perform a health check \\\"When a client makes a DNS request with multivalue answer routing, Route 53 responds to DNS queries with up to eight healthy records selected at random for the particular domain name. These records can each be attached to a **** Route 53 health check ****, which helps prevent clients from receiving a DNS response that is not reachable\\\", see https://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-policies/</li><li>Weighted routing isn't the same as simple routing.Weighted routing does have health checks</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 785607,
          "date": "Mon 23 Jan 2023 17:36",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "The reason B is wrong is that it doe snot check if the resources are available, before responding to the client. So you will distribute traffic to the 4 EC2 instances, but if one of these fails, then traffic will still b sent there. Option C WILL perform a health check \\\"When a client makes a DNS request with multivalue answer routing, Route 53 responds to DNS queries with up to eight healthy records selected at random for the particular domain name. These records can each be attached to a **** Route 53 health check ****, which helps prevent clients from receiving a DNS response that is not reachable\\\", see https://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-policies/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Weighted routing isn't the same as simple routing.Weighted routing does have health checks</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 825426,
          "date": "Wed 01 Mar 2023 01:50",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Weighted routing isn't the same as simple routing.Weighted routing does have health checks",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#225",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#225",
          "answers": [
            {
              "choice": "<p>A. Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 783974,
          "date": "Sun 22 Jan 2023 07:26",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "B: Kinesis Data Firehose service automatically load the data into Amazon Redshift and is a petabyte-scale data warehouse service. It allows you to perform on-demand analytics with minimal operational overhead. Since the requirement didn't state what kind of analytics you need to run, we can assume that we do not need to set up additional services to provide further analytics. Thus, it has the least operational overhead.<br><br>Why not A:It is a viable solution, but storing the data in S3 would require you to set up additional services like Amazon Redshift or Amazon Athena to perform the analytics.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 781116,
          "date": "Thu 19 Jan 2023 13:26",
          "username": "\t\t\t\tBerny\t\t\t",
          "content": "Data ingestion through Kinesis data streams will require manual intervention to provide more shards as data size grows. Kinesis firehose will ingest data with the least operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778064,
          "date": "Mon 16 Jan 2023 18:58",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "I think the key word in the question is \\\"ingestion\\\"...whish is data stream<br><br>Data Streams is a low latency streaming service in AWS Kinesis with the facility for ingesting at scale. On the other hand, Kinesis Firehose aims to serve as a data transfer service. The primary purpose of Kinesis Firehose focuses on loading streaming data to Amazon S3, Splunk, ElasticSearch, and RedShift",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777833,
          "date": "Mon 16 Jan 2023 16:05",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "petabytes: redshift",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777655,
          "date": "Mon 16 Jan 2023 13:54",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "Amazon Kinesis Data Firehose + Redshift meets the requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776177,
          "date": "Sun 15 Jan 2023 06:21",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. This allows you to use your data to gain new insights for your business and customers.<br><br>The first step to create a data warehouse is to launch a set of nodes, called an Amazon Redshift cluster. After you provision your cluster, you can upload your data set and then perform data analysis queries. Regardless of the size of the data set, Amazon Redshift offers fast query performance using the same SQL-based tools and business intelligence applications that you use today.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776174,
          "date": "Sun 15 Jan 2023 06:19",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "for Analytics of Petabyte size data, it should be Redshift cluster",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775997,
          "date": "Sat 14 Jan 2023 23:54",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "B is the correct answer.<br>We cannot ingest data from KDS to S3 => A is rollout.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775812,
          "date": "Sat 14 Jan 2023 19:18",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/83853-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774240,
          "date": "Fri 13 Jan 2023 09:30",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "No it's B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#226",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#226",
          "answers": [
            {
              "choice": "<p>A. Use AWS Glue to process the raw data in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Route 53 to route traffic to different EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add more EC2 instances to accommodate the increasing amount of incoming data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776000,
          "date": "Sat 14 Jan 2023 23:57",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A, E is the correct answer<br><br>\\\"RESTful web services\\\" => API Gateway.<br>\\\"EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket\\\" => GLUE with (Extract - Transform - Load)",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 812703,
          "date": "Sat 18 Feb 2023 07:08",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "How about \\\"C\\\" to increase EC2 instances for the increased devices soon?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777835,
          "date": "Mon 16 Jan 2023 16:07",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Glue and API",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 775815,
          "date": "Sat 14 Jan 2023 19:20",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/83387-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#227",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years.<br><br>After the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained consistent.<br><br>Which solution will delete objects that are older than 3 years in the MOST cost-effective manner?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#227",
          "answers": [
            {
              "choice": "<p>A. Configure the organization's centralized CloudTrail trail to expire objects after 3 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the S3 Lifecycle policy to delete previous versions as well as current versions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the parent account as the owner of all objects that are delivered to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 786967,
          "date": "Tue 24 Jan 2023 22:05",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "A more cost-effective solution would be to configure the organization's centralized CloudTrail trail to expire objects after 3 years. This would ensure that all objects, including previous versions, are deleted after the specified retention period.<br>Another option would be to create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years, this would allow you to have more control over the deletion process and to write a custom logic that best fits your use case.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786178,
          "date": "Tue 24 Jan 2023 06:48",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "The question clearly says \\\"An S3 Lifecycle policy is in place to delete current objects after 3 years\\\". This implies that previous versions are not deleted, since this is a separate setting, and since logs are constantly changed, it would seem to make sense to delete previous versions so, so B.  D is wrong, since the parent account (the management account) will already be the owner of all objects delivered to the S3 bucket, \\\"All accounts in the organization can see MyOrganizationTrail in their list of trails, but member accounts cannot remove or modify the organization trail. Only the management account or delegated administrator account can change or delete the trail for the organization.\\\", see https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783217,
          "date": "Sat 21 Jan 2023 12:43",
          "username": "\t\t\t\tJohn_Zhuang\t\t\t",
          "content": "B is the right answer. Ref: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html#:~:text=The%20CloudTrail%20trail,time%20has%20passed.<br><br>Option A is wrong. No way to expire the cloudtrail logs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778465,
          "date": "Tue 17 Jan 2023 03:13",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Configure the S3 Lifecycle policy to delete previous versions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777841,
          "date": "Mon 16 Jan 2023 16:08",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "B.  Configure the S3 Lifecycle policy to delete previous versions as well as current versions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777840,
          "date": "Mon 16 Jan 2023 16:08",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "B.  Configure the S3 Lifecycle policy to delete previous versions as well as current versions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776003,
          "date": "Sun 15 Jan 2023 00:00",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "B is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775848,
          "date": "Sat 14 Jan 2023 19:58",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "Ans: A <br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html<br>When you create an organization trail, a trail with the name that you give it is created in every AWS account that belongs to your organization. Users with CloudTrail permissions in member accounts can see this trail when they log into the AWS CloudTrail console from their AWS accounts, or when they run AWS CLI commands such as describe-trail. However, users in member accounts do not have sufficient permissions to delete the organization trail, turn logging on or off, change what types of events are logged, or otherwise change the organization trail in any way.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>correction: Ans D is the answer. <br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775852,
          "date": "Sat 14 Jan 2023 20:03",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "correction: Ans D is the answer. <br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775820,
          "date": "Sat 14 Jan 2023 19:27",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "B.  Configure the S3 Lifecycle policy to delete previous versions as well as current versions.<br><br>To delete objects that are older than 3 years in the most cost-effective manner, the company should configure the S3 Lifecycle policy to delete previous versions as well as current versions. This will ensure that all versions of the objects, including the previous versions, are deleted after 3 years.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#228",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API fluctuates. During periods of heavy traffic, the API often returns timeout errors.<br><br>After an inspection of the logs, the company determines that the database is not capable of processing the volume of write traffic that comes from the API. A solutions architect must minimize the number of connections to the database and must ensure that data is not lost during periods of heavy traffic.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#228",
          "answers": [
            {
              "choice": "<p>A. Increase the size of the DB instance to an instance type that has more available memory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 832982,
          "date": "Wed 08 Mar 2023 14:12",
          "username": "\t\t\t\tkaushald\t\t\t",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 825447,
          "date": "Wed 01 Mar 2023 02:14",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Cis correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 806595,
          "date": "Sun 12 Feb 2023 18:13",
          "username": "\t\t\t\tmaciekmaciek\t\t\t",
          "content": "C looks ok",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 800410,
          "date": "Tue 07 Feb 2023 02:03",
          "username": "\t\t\t\tiamjaehyuk\t\t\t",
          "content": "why not D?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776004,
          "date": "Sun 15 Jan 2023 00:02",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "C is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775831,
          "date": "Sat 14 Jan 2023 19:35",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "C.  Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.<br><br>To minimize the number of connections to the database and ensure that data is not lost during periods of heavy traffic, the company should modify the API to write incoming data to an Amazon SQS queue. The use of a queue will act as a buffer between the API and the database, reducing the number of connections to the database. And the use of an AWS Lambda function invoked by SQS will provide a more flexible way of handling the data and processing it. This way, the function will process the data from the queue and insert it into the database in a more controlled way.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Did you use ChatGPT?</li><li>same question as you :D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777843,
          "date": "Mon 16 Jan 2023 16:09",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Did you use ChatGPT?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>same question as you :D</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 822275,
          "date": "Sun 26 Feb 2023 11:56",
          "username": "\t\t\t\tNguyen25183\t\t\t",
          "content": "same question as you :D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#229",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#229",
          "answers": [
            {
              "choice": "<p>A. Migrate the databases to Amazon Aurora Serverless for Aurora MySQL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816106,
          "date": "Tue 21 Feb 2023 03:02",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "A is correct because aurora might be more expensive but its serverless and is much faster",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778092,
          "date": "Mon 16 Jan 2023 19:27",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "A is porper<br><br>https://aws.amazon.com/rds/aurora/serverless/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777846,
          "date": "Mon 16 Jan 2023 16:11",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Aurora MySQL",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775833,
          "date": "Sat 14 Jan 2023 19:36",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/51509-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#230",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the company's application. A solutions architect wants to implement a solution that is highly available, fault tolerant, and automatically scalable.<br><br>What should the solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#230",
          "answers": [
            {
              "choice": "<p>A. Remove the two NAT instances and replace them with two NAT gateways in the same Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Auto Scaling groups with Network Load Balancers for the NAT instances in different Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Remove the two NAT instances and replace them with two NAT gateways in different Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replace the two NAT instances with Spot Instances in different Availability Zones and deploy a Network Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816103,
          "date": "Tue 21 Feb 2023 03:01",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "fyi yall in most cases nat instances are a bad thing because their customer managed while nat gateways are AWS Managed. So in this case I already know to get rid of the nat instances the reason its c is because it wants high availability meaning different AZs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 806986,
          "date": "Mon 13 Feb 2023 02:48",
          "username": "\t\t\t\tTheodorz\t\t\t",
          "content": "Could anybody teach me why the B cannot be correct answer? This solution also seems providing Scalability(Auto Scaling Group), High Availability(different AZ), and Fault Tolerance(NLB & AZ). <br><br>I honestly think that C is not enough, because each NAT gateway can provide a few scalability, but the bandwidth limit is clearly explained in the document. The C exactly mentioned \\\"two NAT gateways\\\" so the number of NAT is fixed, which will reach its limit soon.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B proposes to use an Auto Scaling group with Network Load Balancers to continue using the existing two NAT instances. However, NAT instances do not support automatic failover without a script, unlike NAT gateways which provide this functionality. Additionally, using Network Load Balancers to balance traffic between NAT instances adds more complexity to the solution.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812777,
          "date": "Sat 18 Feb 2023 09:15",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Option B proposes to use an Auto Scaling group with Network Load Balancers to continue using the existing two NAT instances. However, NAT instances do not support automatic failover without a script, unlike NAT gateways which provide this functionality. Additionally, using Network Load Balancers to balance traffic between NAT instances adds more complexity to the solution.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 786182,
          "date": "Tue 24 Jan 2023 06:54",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "C.  If you have resources in multiple Availability Zones and they share one NAT gateway, and if the NAT gateway's Availability Zone is down, resources in the other Availability Zones lose internet access. To create an Availability Zone-independent architecture, create a NAT gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone. https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-basics",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778471,
          "date": "Tue 17 Jan 2023 03:17",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Replace NAT Instances with Gateway",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775847,
          "date": "Sat 14 Jan 2023 19:57",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#231",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application runs on an Amazon EC2 instance that has an Elastic IP address in VPC A.  The application requires access to a database in VPC B.  Both VPCs are in the same AWS account.<br><br>Which solution will provide the required access MOST securely?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#231",
          "answers": [
            {
              "choice": "<p>A. Create a DB instance security group that allows all traffic from the public IP address of the application server in VPC A. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a VPC peering connection between VPC A and VPC B. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Make the DB instance publicly accessible. Assign a public IP address to the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an EC2 instance with an Elastic IP address into VPC B.  Proxy all requests through the new EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797866,
          "date": "Sat 04 Feb 2023 12:19",
          "username": "\t\t\t\tJohnnyBG\t\t\t",
          "content": "B But what a crappy question/answers ...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 797500,
          "date": "Sat 04 Feb 2023 01:15",
          "username": "\t\t\t\tkerl\t\t\t",
          "content": "Answer is B,<br>A is not the answer <--it is not SECURE to have your traffic flow out from the internet to database.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 795099,
          "date": "Wed 01 Feb 2023 13:33",
          "username": "\t\t\t\tPoomJanT\t\t\t",
          "content": "Should B)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790537,
          "date": "Sat 28 Jan 2023 11:59",
          "username": "\t\t\t\traf123123\t\t\t",
          "content": "Answer: B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790422,
          "date": "Sat 28 Jan 2023 09:54",
          "username": "\t\t\t\tfocus_23\t\t\t",
          "content": "A) not possible, DB instance not have a public ip.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 789272,
          "date": "Fri 27 Jan 2023 03:20",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "Agreeing with JayBee65. See link for exact solution:<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html#CHAP_SettingUp.SecurityGroup<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html#CHAP_SettingUp.SecurityGroup",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786187,
          "date": "Tue 24 Jan 2023 07:01",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "A is correct. B will work but is not the most secure method, since it will allow everything in VPC A to talk to everything in VPC B and vice versa, not at all secure. A on the other hand will only allow the application (since you select it's IP address) to talk to the application server in VPC A - you are allowing only the required connectivity. See the link for this exact use case: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\" allows all traffic from the public IP address\\\" Nice bro niceee This is absolutelythe most secure method at all. :)))</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 791784,
          "date": "Sun 29 Jan 2023 16:43",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "\\\" allows all traffic from the public IP address\\\" Nice bro niceee This is absolutelythe most secure method at all. :)))",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 775858,
          "date": "Sat 14 Jan 2023 20:16",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "Ans: B <br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-connectivity-instance-subnet-vpc/<br>My DB instance can't be accessed by an Amazon EC2 instance from a different VPC<br>Create a VPC peering connection between the VPCs. A VPC peering connection allows two VPCs to communicate with each other using private IP addresses.<br><br>1.Create and accept a VPC peering connection.<br><br>Important: If the VPCs are in the same AWS account, be sure that the IPv4 CIDR blocks don't overlap. For more information, see VPC peering limitations.<br><br>2.Update both route tables.<br><br>3.Update your security groups to reference peer VPC groups.<br><br>4.Activate DNS resolution support for your VPC peering connection.<br><br>5.On the Amazon Elastic Compute Cloud (Amazon EC2) instance, test the VPC peering connection by using a networking utility. See the following example:",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775850,
          "date": "Sat 14 Jan 2023 20:01",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "B.  Configure a VPC peering connection between VPC A and VPC B. <br><br>The most secure solution to provide access to the database in VPC B from the application running on an EC2 instance in VPC A is to configure a VPC peering connection between the two VPCs. This will allow the application to access the database using the private IP addresses, and will not require any public IP addresses or Internet access. The traffic will be confined to the VPCs, and can be further secured with security group rules.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is absolutely NOT the most secure method at all.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 786190,
          "date": "Tue 24 Jan 2023 07:02",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "This is absolutely NOT the most secure method at all.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#232",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is isolated in its own VPC.  The company's operations team needs to be notified when RDP or SSH access to an environment has been established.<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#232",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or SSH access is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the EC2 instances with an IAM instance profile that has an IAM role with the AmazonSSMManagedInstanceCore policy attached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Publish VPC flow logs to Amazon CloudWatch Logs. Create required metric filters. Create an Amazon CloudWatch metric alarm with a notification action for when the alarm is in the ALARM state.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 780048,
          "date": "Wed 18 Jan 2023 14:40",
          "username": "\t\t\t\tVickysss\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-accepted-rejected <br><br>Adding this to support that VPC flow logs can be used to cvapture Accepted or Rejected SSH and RDP traffic.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792699,
          "date": "Mon 30 Jan 2023 12:51",
          "username": "\t\t\t\tNitiATOS\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-accepted-rejected <br><br>Adding this to support that VPC flow logs can be used to cvapture Accepted or Rejected SSH and RDP traffic.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825538,
          "date": "Wed 01 Mar 2023 06:31",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787059,
          "date": "Wed 25 Jan 2023 00:01",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "A.  Configuring Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or SSH access is detected would be the most appropriate solution in this scenario. This would allow the operations team to be notified when RDP or SSH access has been established and provide them with the necessary information to take action if needed. Additionally, Amazon CloudWatch Application Insights would allow for monitoring and troubleshooting of the system in real-time.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785696,
          "date": "Mon 23 Jan 2023 19:13",
          "username": "\t\t\t\tTraining4aBetterLife\t\t\t",
          "content": "EC2 Instance State-change Notifications are not the same as RDP or SSH established connection notifications. Use Amazon CloudWatch Logs to monitor SSH access to your Amazon EC2 Linux instances so that you can monitor rejected (or established) SSH connection requests and take action.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 783962,
          "date": "Sun 22 Jan 2023 07:15",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "The Answer can be A or C depending on the requirement if it requires real-time notification.<br>A:Allows the operations team to be notified in real-time when access is established, and also provides visibility into the access events through the OpsItems.<br><br>C:The logs will need to be analyzed and metric filters applied to detect access, and then the alarm will trigger based on that analysis. This method could have a delay in providing notifications. Thus, not the best solution if real-time notification is required.<br><br>Why not D: RDP or SSH access does not cause an EC2 instance to have a state change. The state change events that Amazon EventBridge can listen for include stopping, starting, and terminated instances, which do not apply to RDP or SSH access. But RDP or SSH connection to an EC2 instance does generate an event in the system, such as a log entry which can be used to notify the Operation team. Since its a log, you would require a service that monitors logs like CloudTrail, VPC Flow logs, or AWS Systems Manager Session Manager.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I completely agree with the logic here, but I'm thinking C, since I believe you will need to \\\"Create required metric filters\\\" in order to detect RDP or SSH access, and this is not specified in the question, see https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-create-OpsItems-from-CloudWatch-Alarms.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786196,
          "date": "Tue 24 Jan 2023 07:12",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "I completely agree with the logic here, but I'm thinking C, since I believe you will need to \\\"Create required metric filters\\\" in order to detect RDP or SSH access, and this is not specified in the question, see https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-create-OpsItems-from-CloudWatch-Alarms.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781534,
          "date": "Thu 19 Jan 2023 20:30",
          "username": "\t\t\t\towlminus\t\t\t",
          "content": "It's C fam. RDP or SSH connections won't change the state of the EC2 instance, so D doesn't make sense.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776222,
          "date": "Sun 15 Jan 2023 08:01",
          "username": "\t\t\t\tforzadejan\t\t\t",
          "content": "D.  Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic.<br><br>EC2 instances sends events to the EventBridge when state change occurs, such as when a new RDP or SSH connection is established, you can use EventBridge to configure a rule that listens for these events and trigger an action, like sending an email or SMS, when the connection is detected. The operations team can be notified by subscribing to the Amazon Simple Notification Service (Amazon SNS) topic, which can be configured as the target of the EventBridge rule.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Are state changes pending:<br>running<br>stopping<br>stopped<br>shutting-down<br>terminated<br><br>https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777563,
          "date": "Mon 16 Jan 2023 11:41",
          "username": "\t\t\t\talanp\t\t\t",
          "content": "Are state changes pending:<br>running<br>stopping<br>stopped<br>shutting-down<br>terminated<br><br>https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775857,
          "date": "Sat 14 Jan 2023 20:15",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic. This approach allows you to set up a rule that listens for state change events on the EC2 instances, specifically for when RDP or SSH access is established, and trigger a notification via Amazon SNS to the operations team. This way they will be notified when RDP or SSH access to an environment has been established.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#233",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has created a new AWS account and must secure AWS account root user access.<br><br>Which combination of actions will accomplish this? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#233",
          "answers": [
            {
              "choice": "<p>A. Ensure the root user uses a strong password.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable multi-factor authentication to the root user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store root user access keys in an encrypted Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add the root user to a group containing administrative permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Apply the required permissions to the root user with an inline policy document.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837656,
          "date": "Mon 13 Mar 2023 06:26",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "AB are the right answers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 831704,
          "date": "Tue 07 Mar 2023 10:35",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "This is probably the hardest question in AWS history",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793882,
          "date": "Tue 31 Jan 2023 10:06",
          "username": "\t\t\t\tProfXsamson\t\t\t",
          "content": "AB is the only feasible answer here.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 787079,
          "date": "Wed 25 Jan 2023 00:25",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "B.  Enabling multi-factor authentication for the root user provides an additional layer of security to ensure that only authorized individuals are able to access the root user account.E.  Applying the required permissions to the root user with an inline policy document ensures that the root user only has the necessary permissions to perform the necessary tasks, and not any unnecessary permissions that could potentially be misused.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</li><li>The other options are not sufficient to secure the root user access because:A.  A strong password alone is not enough to protect against potential security threats such as phishing or brute force attacks.C.  Storing the root user access keys in an encrypted S3 bucket does not address the root user's authentication process.D.  Adding the root user to a group with administrative permissions does not address the root user's authentication process and does not provide an additional layer of security.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 787081,
          "date": "Wed 25 Jan 2023 00:26",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787080,
          "date": "Wed 25 Jan 2023 00:25",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "The other options are not sufficient to secure the root user access because:A.  A strong password alone is not enough to protect against potential security threats such as phishing or brute force attacks.C.  Storing the root user access keys in an encrypted S3 bucket does not address the root user's authentication process.D.  Adding the root user to a group with administrative permissions does not address the root user's authentication process and does not provide an additional layer of security.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786803,
          "date": "Tue 24 Jan 2023 19:36",
          "username": "\t\t\t\tPindol\t\t\t",
          "content": "AB obviusly",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 782173,
          "date": "Fri 20 Jan 2023 12:37",
          "username": "\t\t\t\tdavid76x\t\t\t",
          "content": "Root user already has admin, so D is not correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 777866,
          "date": "Mon 16 Jan 2023 16:29",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "AB are correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 777692,
          "date": "Mon 16 Jan 2023 14:23",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "D is incorrect as root user already has full admin access.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 776928,
          "date": "Sun 15 Jan 2023 19:34",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "D.  Add the root user to a group containing administrative permissions. >>its not about security,actually its unsecure so >> a&B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 776882,
          "date": "Sun 15 Jan 2023 18:42",
          "username": "\t\t\t\traf123123\t\t\t",
          "content": "BD is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 775861,
          "date": "Sat 14 Jan 2023 20:22",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/21794-exam-aws-certified-solutions-architect-associate-saa-c02/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What would D achieve exactly??? :)</li><li>AB are correct in this link</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 786200,
          "date": "Tue 24 Jan 2023 07:13",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "What would D achieve exactly??? :)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777865,
          "date": "Mon 16 Jan 2023 16:29",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "AB are correct in this link",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774814,
          "date": "Fri 13 Jan 2023 20:59",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "https://docs.aws.amazon.com/accounts/latest/reference/best-practices-root-user.html<br><br>* Enable AWS multi-factor authentication (MFA) on your AWS account root user. For more information, see Using multi-factor authentication (MFA) in AWS in the IAM User Guide.<br><br>* Never share your AWS account root user password or access keys with anyone.<br><br>* Use a strong password to help protect access to the AWS Management Console. For information about managing your AWS account root user password, see Changing the password for the root user.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#234",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the application must be encrypted at rest and in transit.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#234",
          "answers": [
            {
              "choice": "<p>A. Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS root account to log in to the AWS Management Console. Upload the company's encryption certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit for the account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use BitLocker to encrypt all data at rest. Import the company's TLS certificate keys to AWS Key Management Service (AWS KMS) Attach the KMS keys to the ALB to encrypt data in transit.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778996,
          "date": "Tue 17 Jan 2023 15:05",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "C is correct ,A REVERSES the work ofeach service.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777867,
          "date": "Mon 16 Jan 2023 16:29",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C is correct!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775864,
          "date": "Sat 14 Jan 2023 20:27",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "c is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#235",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several applications that write to the same tables. The applications need to be migrated one by one with a month in between each migration. Management has expressed concerns that the database has a high number of reads and writes. The data must be kept in sync across both databases throughout the migration.<br><br>What should a solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#235",
          "answers": [
            {
              "choice": "<p>A. Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task and a table mapping to select all tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a memory optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select the largest tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813591,
          "date": "Sun 19 Feb 2023 01:08",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "DMS+SCT for Oracle to Aurora PostgreSQL migration<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-oracle-database-to-aurora-postgresql-using-aws-dms-and-aws-sct.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797909,
          "date": "Sat 04 Feb 2023 13:00",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "C : because we need SCT to convert from Oracle to PostgreSQL, and we need memory optimized machine for databases not compute optimized.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792942,
          "date": "Mon 30 Jan 2023 15:54",
          "username": "\t\t\t\ticurfer\t\t\t",
          "content": "https://aws.amazon.com/ko/premiumsupport/knowledge-center/dms-memory-optimization/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791032,
          "date": "Sat 28 Jan 2023 20:59",
          "username": "\t\t\t\tdark_firzen\t\t\t",
          "content": "It has to be either C or D because it requires Schema Conversion Tool to convert Oracle database to Amazon Aurora PostgreSQL.C would be the better choice here because it replicates a memory optimized instance, which is recommended for databases.Also, the database must be kept in sync, so they require mapping to select all tables.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787065,
          "date": "Wed 25 Jan 2023 00:12",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "A or C are both valid options. Both options involve using AWS DataSync for the initial migration, and then using AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task for ongoing data synchronization.<br>Option A: Uses a memory optimized replication instance.<br>Option C: Uses a compute optimized replication instance.<br><br>Option A is a better choice for migrations where the data is more complex and may require more memory.<br>Option C is a better choice for migrations that require more processing power.<br>It is also depend on the size of the data, the complexity of the data, and the resources available in the target Aurora cluster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786205,
          "date": "Tue 24 Jan 2023 07:26",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Why would you not use the schema conversion tool, which is designed specifically to covert form one db engine to another. It can convert Oracle to Aurora PostgreSQL, see https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html. Then it is a choice of C or D. Since you want to move all tables C makes more sense that D.  <br>A and B are wrong since DataSync deals with data not databases, see https://aws.amazon.com/datasync/faqs/.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 784454,
          "date": "Sun 22 Jan 2023 16:43",
          "username": "\t\t\t\tbrownest\t\t\t",
          "content": "Initial migration is full using DataSync and on-going replication is through CDC for the changes.The full load was already performed so no need to do it again as with Answer B. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing my answer to C as you need schema conversion from Oracle the PostgreSQL</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 787777,
          "date": "Wed 25 Jan 2023 16:11",
          "username": "\t\t\t\tbrownest\t\t\t",
          "content": "Changing my answer to C as you need schema conversion from Oracle the PostgreSQL",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779746,
          "date": "Wed 18 Jan 2023 09:21",
          "username": "\t\t\t\tTapasGhosh\t\t\t",
          "content": "Correct answer is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777708,
          "date": "Mon 16 Jan 2023 14:31",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "A is correct. Initial migration is full using DataSync and on-going replication is through CDC Task - https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC. html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776221,
          "date": "Sun 15 Jan 2023 07:59",
          "username": "\t\t\t\tforzadejan\t\t\t",
          "content": "B.  Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.<br><br>AWS DataSync can be used for the initial migration of the data, it can transfer large amount of data quickly and securely over the network. AWS Database Migration Service (AWS DMS) can be used to replicate changes made to the data in the source database to the target database. A full load plus CDC replication task allows for the initial migration of the data and then continuously replicate any changes made to the data in the source database to the target database. This will ensure that the data is kept in sync across both databases throughout the migration process. Selecting all tables in the table mapping will ensure that all data is replicated, as the migration process will be done in several steps, it will be important to make sure that all data is kept in sync.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776186,
          "date": "Sun 15 Jan 2023 06:44",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775866,
          "date": "Sat 14 Jan 2023 20:29",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46704-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#236",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the front-end layer, another EC2 instance for the application layer, and a third EC2 instance for a MySQL database. A solutions architect must design a scalable and highly available solution that requires the least amount of change to the application.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#236",
          "answers": [
            {
              "choice": "<p>A. Use Amazon S3 to host the front-end layer. Use AWS Lambda functions for the application layer. Move the database to an Amazon DynamoDB table. Use Amazon S3 to store and serve users' images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS DB instance with multiple read replicas to serve users' images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 to host the front-end layer. Use a fleet of EC2 instances in an Auto Scaling group for the application layer. Move the database to a memory optimized instance type to store and serve users' images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS Multi-AZ DB instance. Use Amazon S3 to store and serve users' images.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790806,
          "date": "Sat 28 Jan 2023 17:34",
          "username": "\t\t\t\tPDR\t\t\t",
          "content": "B and D very similar with D being the 'best' solution but it is not the one that requires the least amount of development changes as the application would need to be changed to store images in S3 instead of DB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790480,
          "date": "Sat 28 Jan 2023 10:46",
          "username": "\t\t\t\tfocus_23\t\t\t",
          "content": "RDS multi AZ.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777709,
          "date": "Mon 16 Jan 2023 14:35",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "D is correct as application changes needs to me minimal",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776497,
          "date": "Sun 15 Jan 2023 12:58",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775802,
          "date": "Sat 14 Jan 2023 19:03",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "for \\\"Highly available\\\": Multi-AZ &<br>for \\\"least amount of changes to the application\\\": Elastic Beanstalk automatically<br>handles the deployment, from capacity provisioning, load balancing, auto-scaling to<br>application health monitoring",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774263,
          "date": "Fri 13 Jan 2023 09:53",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/24840-exam-aws-certified-solutions-architect-associate-saa-c02/<br><br>Please ExamTopics, review your own answers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#237",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPC-B.  Both VPCs are in separate AWS accounts. The network administrator needs to design a solution to configure secure access to EC2 instance in VPC-B from VPC-A.  The connectivity should not have a single point of failure or bandwidth concerns.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#237",
          "answers": [
            {
              "choice": "<p>A. Set up a VPC peering connection between VPC-A and VPC-B. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up VPC gateway endpoints for the EC2 instance running in VPC-B. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach a virtual private gateway to VPC-B and set up routing from VPC-A. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a private virtual interface (VIF) for the EC2 instance running in VPC-B and add appropriate routes from VPC-A. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791429,
          "date": "Sun 29 Jan 2023 06:52",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS uses the existing infrastructure of a VPC to create a VPC peering connection; it is neither a gateway nor a VPN connection, and does not rely on a separate piece of physical hardware. There is no single point of failure for communication or a bandwidth bottleneck.<br><br>https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790814,
          "date": "Sat 28 Jan 2023 17:41",
          "username": "\t\t\t\tPDR\t\t\t",
          "content": "correct answer is A and as mentioned by JayBee65 below, key reason being that solution should not have a single point of failure and bandwidth restrictions<br><br>the following paragraph is taken from the AWS docs page linked below that backs this up<br>\\\"AWS uses the existing infrastructure of a VPC to create a VPC peering connection; it is neither a gateway nor a VPN connection, and does not rely on a separate piece of physical hardware. There is no single point of failure for communication or a bandwidth bottleneck.\\\"<br><br>https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 781795,
          "date": "Fri 20 Jan 2023 03:23",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A VPC endpoint gateway to the EC2 Instance is more specific and more secure than forming a VPC peering that exposes the whole of the VPC infrastructure just for one connection.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your logic is correct but security is not a requirement here - the requirements are \\\"The connectivity should not have a single point of failure or bandwidth concerns.\\\" A VPC gateway endpoint\\\" would form a single point of failure, so B is incorrect, (and C and D are incorrect for the same reason, they create single points of failure).</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 786209,
          "date": "Tue 24 Jan 2023 07:32",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Your logic is correct but security is not a requirement here - the requirements are \\\"The connectivity should not have a single point of failure or bandwidth concerns.\\\" A VPC gateway endpoint\\\" would form a single point of failure, so B is incorrect, (and C and D are incorrect for the same reason, they create single points of failure).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776498,
          "date": "Sun 15 Jan 2023 13:01",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775805,
          "date": "Sat 14 Jan 2023 19:05",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "VPC peering allows resources in different VPCs to communicate with each other as if they were within the same network. This solution would establish a direct network route between VPC-A and VPC-B, eliminating the need for a single point of failure or bandwidth concerns.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775083,
          "date": "Sat 14 Jan 2023 05:25",
          "username": "\t\t\t\twaiyiu9981\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/27763-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#238",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each account.<br><br>What should a solutions architect do to meet this requirement MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#238",
          "answers": [
            {
              "choice": "<p>A. Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2 instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818470,
          "date": "Wed 22 Feb 2023 22:44",
          "username": "\t\t\t\tSamuel03\t\t\t",
          "content": "I go with D.  It says \\\"as soon as\\\", \\\"daily\\\" reports seems to be a bit longer time frame to wait in my opinion.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Athena can only be use in s3, that is enough to discard D</li><li>Actually, I take that back. It clearly says \\\"Cost effective.\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829982,
          "date": "Sun 05 Mar 2023 15:46",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "Athena can only be use in s3, that is enough to discard D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818472,
          "date": "Wed 22 Feb 2023 22:45",
          "username": "\t\t\t\tSamuel03\t\t\t",
          "content": "Actually, I take that back. It clearly says \\\"Cost effective.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 783941,
          "date": "Sun 22 Jan 2023 06:48",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "C: AWS Budgets allows you to set a budget for costs and usage for your accounts and you can set alerts when the budget threshold is exceeded in real-time which meets the requirement.<br><br>Why not B: B would be the most cost-effective if the requirements didn't ask for real-time notification. You would not incur additional costs for the daily or monthly reports and the notifications. But doesn't provide real-time alerts.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778125,
          "date": "Mon 16 Jan 2023 19:50",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "Agree...C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776502,
          "date": "Sun 15 Jan 2023 13:06",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776192,
          "date": "Sun 15 Jan 2023 06:56",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775808,
          "date": "Sat 14 Jan 2023 19:10",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "AWS Budgets allows you to create budgets for your AWS accounts and set alerts when usage exceeds a certain threshold. By creating a budget for each account, specifying the period as monthly and the scope as EC2 instances, you can effectively track the EC2 usage for each account and be notified when a threshold is exceeded. This solution is the most cost-effective option as it does not require additional resources such as Amazon Athena or Amazon EventBridge.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774302,
          "date": "Fri 13 Jan 2023 10:45",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "AWS budget IMO, it's done for it",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#239",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to design a new microservice for a company's application. Clients must be able to call an HTTPS endpoint to reach the microservice. The microservice also must use AWS Identity and Access Management (IAM) to authenticate calls. The solutions architect will write the logic for this microservice by using a single AWS Lambda function that is written in Go 1.x.<br><br>Which solution will deploy the function in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#239",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM authentication on the API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Lambda function URL for the function. Specify AWS_IAM as the authentication type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution. Deploy the function to Lambda@Edge. Integrate IAM authentication logic into the Lambda@Edge function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution. Deploy the function to CloudFront Functions. Specify AWS_IAM as the authentication type.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776512,
          "date": "Sun 15 Jan 2023 13:12",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "A.  Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM authentication on the API.<br>This option is the most operationally efficient as it allows you to use API Gateway to handle the HTTPS endpoint and also allows you to use IAM to authenticate the calls to the microservice. API Gateway also provides many additional features such as caching, throttling, and monitoring, which can be useful for a microservice.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819017,
          "date": "Thu 23 Feb 2023 10:24",
          "username": "\t\t\t\tPRASAD180\t\t\t",
          "content": "A is crt 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814974,
          "date": "Mon 20 Feb 2023 08:53",
          "username": "\t\t\t\ttellmenowwwww\t\t\t",
          "content": "Why c is not correct? ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808720,
          "date": "Tue 14 Feb 2023 20:06",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://asanchez.dev/blog/deploy-api-go-aws-lambda-gateway/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776135,
          "date": "Sun 15 Jan 2023 04:25",
          "username": "\t\t\t\tSanLi\t\t\t",
          "content": "D<br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-authentication-api-gateway/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>With CloudFront Functions in Amazon CloudFront, you can write lightweight functions in JavaScript for high-scale, latency-sensitive CDN customizations. But you are using Go 1.x. Lambda supports go. So A makes a lot more sense than D</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786215,
          "date": "Tue 24 Jan 2023 07:40",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "With CloudFront Functions in Amazon CloudFront, you can write lightweight functions in JavaScript for high-scale, latency-sensitive CDN customizations. But you are using Go 1.x. Lambda supports go. So A makes a lot more sense than D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#240",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate office users query the data warehouse using a visualization tool. The average size of a query returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500 KB.  Result sets returned by the data warehouse are not cached.<br><br>Which solution provides the LOWEST data transfer egress cost for the company?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#240",
          "answers": [
            {
              "choice": "<p>A. Host the visualization tool on premises and query the data warehouse directly over the internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the visualization tool on premises and query the data warehouse directly over a Direct Connect connection at a location in the same AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the visualization tool in the same AWS Region as the data warehouse and access it over a Direct Connect connection at a location in the same Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826759,
          "date": "Thu 02 Mar 2023 11:54",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "A. --> No since if you access via internet you are creating egress traffic.B.  -->It's a good choice to have both DWH and visualization in the same region to lower the egress transfer (i.e. data going egress/out of the region) but if you access over internet you might still haveegress transfer.C.  -> Valid but in this case you send out of AWS 50MB if you query the DWH instead of the visualization tool, D removes this need since puts the visualization tools in AWS with the DWH so reduces data returned out of AWS from 50MB to 500KBD.  --> Correct, see explanation on answer C<br>-------------------------------------------------------------------------------------------------------------------------------------------<br>Useful links:<br>AWS Direct Connect connection create a connection in an AWS Direct Connect location to establish a network connection from your premises to an AWS Region.<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 790450,
          "date": "Sat 28 Jan 2023 10:18",
          "username": "\t\t\t\tdexpos\t\t\t",
          "content": "D let you reduce at minimum the data transfer costs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783927,
          "date": "Sun 22 Jan 2023 06:21",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "D: Direct Connect connection at a location in the same Region will provide the lowest data transfer egress cost, improved performance, and lower complexity<br><br>Why it is not C is because the visualization tool is hosted on-premises, as it's not hosted in the same region as the data warehouse the data transfer between them would occur over the internet, thus, would incur in egress data transfer costs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780056,
          "date": "Wed 18 Jan 2023 14:56",
          "username": "\t\t\t\tVickysss\t\t\t",
          "content": "https://www.nops.io/reduce-aws-data-transfer-costs-dont-get-stung-by-hefty-egress-fees/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Whilst \\\"Direct Connect can help lower egress costs even after taking the installation costs into account. This is because AWS charges lower transfer rates.\\\" D removes the need to send the query results out of AWS and instead returns the web page, so reduces data returned from 50MB to 500KB, so D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786220,
          "date": "Tue 24 Jan 2023 07:45",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Whilst \\\"Direct Connect can help lower egress costs even after taking the installation costs into account. This is because AWS charges lower transfer rates.\\\" D removes the need to send the query results out of AWS and instead returns the web page, so reduces data returned from 50MB to 500KB, so D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776515,
          "date": "Sun 15 Jan 2023 13:16",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775856,
          "date": "Sat 14 Jan 2023 20:13",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Should be D<br>https://aws.amazon.com/directconnect/pricing/<br>https://aws.amazon.com/blogs/aws/aws-data-transfer-prices-reduced/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774308,
          "date": "Fri 13 Jan 2023 10:55",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/47140-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#241",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#241",
          "answers": [
            {
              "choice": "<p>A. Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in another Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to be copied to another Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 783922,
          "date": "Sun 22 Jan 2023 06:09",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "B: Amazon RDS Multi-AZ feature automatically creates a synchronous replica in another availability zone and failover to the replica in the event of an outage. This will provide high availability and data durability across multiple AWS regions which fit the requirements. <br><br>Though C may sound good, it in fact requires manual management and monitoring of the replication process due to the fact that Amazon RDS read replicas are asynchronous, meaning there is a delay between the primary and read replica. Therefore, there will be a need to ensure that the read replica is constantly up-to-date and someone still has to fix any read replica errors during the replication process which may cause data inconsistency. Lastly, you still have to configure additional steps to make it fail over to the read replica.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I go with option B because:<br>Multi-AZ is for high availiblity<br>Read replicas are for low-latency<br>in question they talk about available online</li><li>But the question is clearly asking for Multiple Regions. Multi-AZ is not across Regions.</li><li>You are right, Multi-AZ is only within one Region. C would be the right answer.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815069,
          "date": "Mon 20 Feb 2023 10:59",
          "username": "\t\t\t\tRehan33\t\t\t",
          "content": "I go with option B because:<br>Multi-AZ is for high availiblity<br>Read replicas are for low-latency<br>in question they talk about available online",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786561,
          "date": "Tue 24 Jan 2023 14:29",
          "username": "\t\t\t\tMahadeva\t\t\t",
          "content": "But the question is clearly asking for Multiple Regions. Multi-AZ is not across Regions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are right, Multi-AZ is only within one Region. C would be the right answer.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 787214,
          "date": "Wed 25 Jan 2023 03:40",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "You are right, Multi-AZ is only within one Region. C would be the right answer.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 826112,
          "date": "Wed 01 Mar 2023 18:16",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Multi az is not the same as multi regional",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 814753,
          "date": "Mon 20 Feb 2023 03:34",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Option \\\"C\\\" would be a better solution.<br>Option \\\"B\\\" not specifically mention about cross multiple Regions.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 802900,
          "date": "Thu 09 Feb 2023 07:53",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "\\\"online across multiple AWS Regions\\\"<br>in B we did not have any words about Regions, Multi-AZ only for one region!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 797974,
          "date": "Sat 04 Feb 2023 14:15",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "C is the correct answer, read replicas can be created cross region and can be promoted to be main database",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 797561,
          "date": "Sat 04 Feb 2023 04:16",
          "username": "\t\t\t\tremand\t\t\t",
          "content": "requires manual intervention to promote the read replica",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 791073,
          "date": "Sat 28 Jan 2023 21:36",
          "username": "\t\t\t\tdark_firzen\t\t\t",
          "content": "Question asks for \\\"available and online across multiple AWS Regions at all times\\\".Multi-AZ is only within one region.Database can be replicated cross-region.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790456,
          "date": "Sat 28 Jan 2023 10:22",
          "username": "\t\t\t\tdexpos\t\t\t",
          "content": "Multi AZ can be cross region but the nodes in the other regions would be read replicas",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 789361,
          "date": "Fri 27 Jan 2023 07:26",
          "username": "\t\t\t\tMahakali\t\t\t",
          "content": "Question says \\\" online across multiple AWS Regions at all times\\\". Currently only Read Replica supports cross-regions , Multi-AZ does not support cross-region (it works only in same region)<br>https://aws.amazon.com/about-aws/whats-new/2018/01/amazon-rds-read-replicas-now-support-multi-az-deployments/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 788527,
          "date": "Thu 26 Jan 2023 09:27",
          "username": "\t\t\t\taws4myself\t\t\t",
          "content": "Because data must be available all the time. With multi-AZ, you can not read stand-by database.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787121,
          "date": "Wed 25 Jan 2023 01:40",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "Option C would meet the requirement of data being available across multiple regions, but it would require additional operational overhead in terms of managing and maintaining the read replica in the other region. This would also require additional infrastructure to handle replication and failover. Option B (RDS Multi-AZ) provides automatic failover across regions with minimal operational overhead, making it the best option in terms of minimizing operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please do more research because you have gotten a lot of the other questions wrong.Question asks for \\\"available and online across multiple AWS Regions at all times\\\".Multi-AZ is only within one region.Database can be replicated cross-region.</li><li>Option B (using Multi-AZ feature on RDS) provides automatic failover and high availability across multiple regions with less operational overhead, that is why it is the best solution.</li><li>Availability is not High Availability</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 791071,
          "date": "Sat 28 Jan 2023 21:36",
          "username": "\t\t\t\tdark_firzen\t\t\t",
          "content": "Please do more research because you have gotten a lot of the other questions wrong.Question asks for \\\"available and online across multiple AWS Regions at all times\\\".Multi-AZ is only within one region.Database can be replicated cross-region.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787122,
          "date": "Wed 25 Jan 2023 01:42",
          "username": "\t\t\t\tbullrem\t\t\t",
          "content": "Option B (using Multi-AZ feature on RDS) provides automatic failover and high availability across multiple regions with less operational overhead, that is why it is the best solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Availability is not High Availability</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809399,
          "date": "Wed 15 Feb 2023 12:04",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "Availability is not High Availability",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786222,
          "date": "Tue 24 Jan 2023 07:47",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "EAST amount of operational overhead = PostgreSQL DB instance with the Multi-AZ feature turned on. No read replicas to manage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 784319,
          "date": "Sun 22 Jan 2023 14:01",
          "username": "\t\t\t\tJohn_Zhuang\t\t\t",
          "content": "C for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781823,
          "date": "Fri 20 Jan 2023 04:17",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776522,
          "date": "Sun 15 Jan 2023 13:20",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/61056-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775862,
          "date": "Sat 14 Jan 2023 20:24",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "should be C: multiple AWS regions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774311,
          "date": "Fri 13 Jan 2023 10:57",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#242",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP addresses of all healthy EC2 instances be returned in response to DNS queries.<br><br>Which policy should be used to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#242",
          "answers": [
            {
              "choice": "<p>A. Simple routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Latency routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Multivalue routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Geolocation routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837669,
          "date": "Mon 13 Mar 2023 06:56",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "Multivalue answer routing policy ...answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781863,
          "date": "Fri 20 Jan 2023 05:08",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Use a multivalue answer routing policy to help distribute DNS responses across multiple resources. For example, use multivalue answer routing when you want to associate your routing records with a Route 53 health check. For example, use multivalue answer routing when you need to return multiple values for a DNS query and route traffic to multiple IP addresses.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-policies/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776545,
          "date": "Sun 15 Jan 2023 13:40",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775863,
          "date": "Sat 14 Jan 2023 20:25",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "Should be C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774384,
          "date": "Fri 13 Jan 2023 12:30",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46491-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774312,
          "date": "Fri 13 Jan 2023 10:58",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46491-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#243",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the country for their on-premises, file-based applications. The data files are stored in an Amazon S3 bucket that has read-only permissions for each clinic.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#243",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the files to each clinic's on-premises applications by using AWS DataSync for processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic's on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776549,
          "date": "Sun 15 Jan 2023 13:45",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "A.  Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic<br><br>AWS Storage Gateway is a service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and AWS's storage infrastructure. By deploying a file gateway as a virtual machine on each clinic's premises, the medical research lab can provide low-latency access to the data stored in the S3 bucket while maintaining read-only permissions for each clinic. This solution allows the clinics to access the data files directly from their on-premises file-based applications without the need for data transfer or migration.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826754,
          "date": "Thu 02 Mar 2023 11:52",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "Amazon S3 File Gateway enables you to store file data as objects in Amazon S3 cloud storage for data lakes, backups, and Machine Learning workflows. With Amazon S3 File Gateway, each file is stored as an object in Amazon S3 with a one-to-one mapping between a file and an object.<br><br>Volume Gateway provides block storage volumes over iSCSI, backed by Amazon S3, and provides point-in-time backups as Amazon EBS snapshots. Volume Gateway integrates with AWS Backup, an automated and centralized backup service, to protect Storage Gateway volumes.<br><br>So it's A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826118,
          "date": "Wed 01 Mar 2023 18:25",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "A for answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 796346,
          "date": "Thu 02 Feb 2023 19:58",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://cloud.in28minutes.com/aws-certification-aws-storage-gateway",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785048,
          "date": "Mon 23 Jan 2023 07:45",
          "username": "\t\t\t\tkbaruu\t\t\t",
          "content": "A.  Deploy an AWS Storage Gateway file gateway...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 780223,
          "date": "Wed 18 Jan 2023 17:40",
          "username": "\t\t\t\timisioluwa\t\t\t",
          "content": "The correct answer is A. <br> https://www.knowledgehut.com/tutorials/aws/aws-storage-gateway#:~:text=AWS%20Storage%20Gateway%20helps%20in%20connecting,as%20well%20as%20providing%20data%20security.&text=AWS%20Storage%20Gateway%20helps,as%20providing%20data%20security.&text=Gateway%20helps%20in%20connecting,as%20well%20as%20providing <br>https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776196,
          "date": "Sun 15 Jan 2023 07:09",
          "username": "\t\t\t\tvenice1234\t\t\t",
          "content": "I think C (Volume Gateway) is correct as it has an option to have Local Storage with Asynchronous sync with S3. This would give low latency access to all local files not just cached/recent files.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776126,
          "date": "Sun 15 Jan 2023 03:50",
          "username": "\t\t\t\tlaicos\t\t\t",
          "content": "https://aws.amazon.com/storagegateway/file/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775867,
          "date": "Sat 14 Jan 2023 20:33",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A.  Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774320,
          "date": "Fri 13 Jan 2023 11:02",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "It's A imo (file gatewat)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#244",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a content management system that runs on a single Amazon EC2 instance. The EC2 instance contains both the web server and the database software. The company must make its website platform highly available and must enable the website to scale to meet user demand.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#244",
          "answers": [
            {
              "choice": "<p>A. Move the database to Amazon RDS, and enable automatic backups. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer in the Availability Zone, and set the two instances as targets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to an Amazon Aurora instance with a read replica in the same Availability Zone as the existing EC2 instance. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer, and set the two EC2 instances as targets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the database to Amazon Aurora with a read replica in another Availability Zone. Create an Amazon Machine Image (AMI) from the EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the database to a separate EC2 instance, and schedule backups to Amazon S3. Create an Amazon Machine Image (AMI) from the original EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776553,
          "date": "Sun 15 Jan 2023 13:49",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "C.  Move the database to Amazon Aurora with a read replica in another Availability Zone. Create an Amazon Machine Image (AMI) from the EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.<br><br>This approach will provide both high availability and scalability for the website platform. By moving the database to Amazon Aurora with a read replica in another availability zone, it will provide a failover option for the database. The use of an Application Load Balancer and an Auto Scaling group across two availability zones allows for automatic scaling of the website to meet increased user demand. Additionally, creating an AMI from the original EC2 instance allows for easy replication of the instance in case of failure.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775915,
          "date": "Sat 14 Jan 2023 21:46",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C: This will allow the website platform to be highly available by using Aurora, which provides automatic failover and replication. Additionally, by creating an AMI from the original EC2 instance, the Auto Scaling group can automatically launch new instances in multiple availability zones and use the Application Load Balancer to distribute traffic across them. This way, the website will be able to handle the increased traffic, and will be less likely to go down due to a single point of failure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#245",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group. The instances are in an Auto Scaling group for each environment. The company requires a development environment and a production environment. The production environment will have periods of high traffic.<br><br>Which solution will configure the development environment MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#245",
          "answers": [
            {
              "choice": "<p>A. Reconfigure the target group in the development environment to have only one EC2 instance as a target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the ALB balancing algorithm to least outstanding requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Reduce the size of the EC2 instances in both environments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reduce the maximum number of EC2 instances in the development environment's Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776557,
          "date": "Sun 15 Jan 2023 13:56",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Reduce the maximum number of EC2 instances in the development environment's Auto Scaling group<br><br>This option will configure the development environment in the most cost-effective way as it reduces the number of instances running in the development environment and therefore reduces the cost of running the application. The development environment typically requires less resources than the production environment, and it is unlikely that the development environment will have periods of high traffic that would require a large number of instances. By reducing the maximum number of instances in the development environment's Auto Scaling group, the company can save on costs while still maintaining a functional development environment.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, it will not reduce the number of instances being used, since a minimum of 2 will be used at all times.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 786252,
          "date": "Tue 24 Jan 2023 08:24",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "No, it will not reduce the number of instances being used, since a minimum of 2 will be used at all times.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 834914,
          "date": "Fri 10 Mar 2023 12:47",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "if specify only one instance in target group, <br>we dont have any merit for using auto scale group<br>i think so i go with d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829980,
          "date": "Sun 05 Mar 2023 15:45",
          "username": "\t\t\t\tHaineHess\t\t\t",
          "content": "it's A (D does not reduce €)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826130,
          "date": "Wed 01 Mar 2023 18:40",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Dev doesn't need autoscaling so setting it to one is the most COST effective solution, not the most operationally efficient",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 824899,
          "date": "Tue 28 Feb 2023 15:23",
          "username": "\t\t\t\tK0nAn\t\t\t",
          "content": "Since option D says that decrease max number ,it will not affect minimum number which 2 ,it will be always same ,so option A makes sense for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820576,
          "date": "Fri 24 Feb 2023 15:05",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "You cant use a Target Group to change ASG behavior guys . <br><br>ALB's Target Group is pointing to an ASG . So no amount to TG tweaking is going to lead to a scale in opportunity on ASG side .<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Group here refers to auto scaling group. Target refers to ec2 instances</li><li>Nm, delete this comment</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 826131,
          "date": "Wed 01 Mar 2023 18:43",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Group here refers to auto scaling group. Target refers to ec2 instances<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nm, delete this comment</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826133,
          "date": "Wed 01 Mar 2023 18:47",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Nm, delete this comment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 808750,
          "date": "Tue 14 Feb 2023 20:35",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://medium.com/dnx-labs/reducing-aws-costs-by-turning-off-development-environments-at-night-the-easy-way-without-lambda-c7b40abc7287",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 806457,
          "date": "Sun 12 Feb 2023 15:57",
          "username": "\t\t\t\tG3\t\t\t",
          "content": "B. <br><br>https://aws.amazon.com/about-aws/whats-new/2019/11/application-load-balancer-now-supports-least-outstanding-requests-algorithm-for-load-balancing-requests/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797309,
          "date": "Fri 03 Feb 2023 20:42",
          "username": "\t\t\t\tjoric\t\t\t",
          "content": "I choose C:Reduce the size of the EC2 instances in both environments.<br> they are gona use 2 at minimum anyway because they need the availabilityif you set the maximum to 100 instances its not gona cost more because it will only use 2 and then lets say 3 or 4 for for a period of high load and scale back to 2. if you reduce the size of the instances they will still be runing at 2 most of the time but will cost less.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 788523,
          "date": "Thu 26 Jan 2023 09:22",
          "username": "\t\t\t\taws4myself\t\t\t",
          "content": "A is wrong - if it is an auto-scaling group, then if you remove it from the target group also it will not be deleted/ terminated. So there is no cost reduction.<br><br>But for D, if you reduce the max capacity, EC2 will be terminated.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 787288,
          "date": "Wed 25 Jan 2023 06:14",
          "username": "\t\t\t\tkerl\t\t\t",
          "content": "my opinion, A is wrong, if you remove the instance in the Target Group, ASG will reprovision to match the minimum/desire number of instance. I choose D because i can configure my ASG to assigned minimum / maximum to 1.ASG will automatically create the instanced and add into the Target Group. If u delete the instance, ASG will reprovison and readd into the Target Group. So A is wrong. Answer is D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But the question states:<br>\\\"The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group.\\\"<br>Which means that we can not reduce number of instances to 1 as each stage is different target group</li><li>Sorry under wrong comment. D is ok.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 819675,
          "date": "Thu 23 Feb 2023 20:59",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "But the question states:<br>\\\"The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group.\\\"<br>Which means that we can not reduce number of instances to 1 as each stage is different target group<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry under wrong comment. D is ok.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819678,
          "date": "Thu 23 Feb 2023 21:01",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "Sorry under wrong comment. D is ok.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786250,
          "date": "Tue 24 Jan 2023 08:23",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "A is correct. D will not save costs unless the development environment has a heavy load placed upon it, and it requires the current maximum number or instances, which is pretty unlikely in a development environment. For most (all?) of the time, it will continue to run 2 EC2 instances (the minimum number)when these are unlikely to be required. A will however reduce the number of EC2 instances being used in development from 2 to 1, so will actually save money.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But the question states:<br>\\\"The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group.\\\"<br>Which means that we can not reduce number of instances to 1 as each stage is different target group. D is the right option.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819679,
          "date": "Thu 23 Feb 2023 21:01",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "But the question states:<br>\\\"The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group.\\\"<br>Which means that we can not reduce number of instances to 1 as each stage is different target group. D is the right option.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781886,
          "date": "Fri 20 Jan 2023 05:40",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A: Reconfigure the target group in the development environment to have only one EC2 instance as a target.<br>D will defeat the purpose of having the EC2 in an auto scaling group because limiting it to only one instance means it can't auto-scale over that single instance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is the correct answer. Why do we need to scaledevelopment environmentif the load is constant?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785825,
          "date": "Mon 23 Jan 2023 21:53",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "This is the correct answer. Why do we need to scaledevelopment environmentif the load is constant?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776215,
          "date": "Sun 15 Jan 2023 07:48",
          "username": "\t\t\t\tforzadejan\t\t\t",
          "content": "D.  Reduce the maximum number of EC2 instances in the development environment's Auto Scaling group.<br>This option will reduce the number of instances running in the development environment, which will decrease the cost of running the environment. The other options do not directly address the cost of running the development environment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775922,
          "date": "Sat 14 Jan 2023 21:59",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D.  Reduce the maximum number of EC2 instances in the development environment's Auto Scaling group<br>This will help to configure the development environment more cost-effectively as it reduces the maximum number of instances that can be launched at a time, which in turn reduces the costs associated with running the instances. Since the development environment is not expected to experience periods of high traffic, it will not require as many instances as the production environment, thus reducing costs.<br>It's worth noting that if the traffic is not high and the instances are not being utilized, the cost of running instances is the same as having them idle. So, the best cost-effective solution will be to have the minimum number of instances that can handle the traffic and scale it up as needed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#246",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. A solutions architect implements an internet-facing Application Load Balancer (ALB) and specifies the EC2 instances as the target group. However, the internet traffic is not reaching the EC2 instances.<br><br>How should the solutions architect reconfigure the architecture to resolve this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#246",
          "answers": [
            {
              "choice": "<p>A. Replace the ALB with a Network Load Balancer. Configure a NAT gateway in a public subnet to allow internet traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the EC2 instances to public subnets. Add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the route tables for the EC2 instances' subnets to send 0.0.0.0/0 traffic through the internet gateway route. Add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create public subnets in each Availability Zone. Associate the public subnets with the ALB.  Update the route tables for the public subnets with a route to the private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 829785,
          "date": "Sun 05 Mar 2023 10:16",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "I think either the question or the answers are not formulated correctly because of this document:<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/subnets-routing.html<br>A - Might be possible but it's quite impractical<br>B - Not needed as the setup described should work as is provided the SGs of the EC2 instances accept traffic from the ALB<br>C - Update the route tables for the EC2 instances' subnets to send 0.0.0.0/0 traffic through the internet gateway route - not needed as the EC2 instances would receive the traffic from the ALB ENIs. Add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0 - the default behaviour of the SG is to allow outbound traffic only.<br>D -Create public subnets in each Availability Zone. Associate the public subnets with the ALB - if it's a internet facing ALB these should already be in place. Update the route tables for the public subnets with a route to the private subnets - no need as the local prefix entry in the route tables would take care of this point<br><br>I'm 110% sure the question or answers or both are wrong. Prove me wrong! :)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829521,
          "date": "Sun 05 Mar 2023 02:20",
          "username": "\t\t\t\tTheodorz\t\t\t",
          "content": "I think C would be correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817979,
          "date": "Wed 22 Feb 2023 16:29",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "I change my answer to 'D' because of following link:<br>https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816163,
          "date": "Tue 21 Feb 2023 04:34",
          "username": "\t\t\t\tAYap\t\t\t",
          "content": "Answer: D<br>https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 808780,
          "date": "Tue 14 Feb 2023 20:50",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Just need to configure the outbound path from the servers back out to the Internet. Inbound path is already configured",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 803075,
          "date": "Thu 09 Feb 2023 11:22",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "The correct answer is C.  To resolve the issue of internet traffic not reaching the EC2 instances, the solutions architect should update the route tables for the EC2 instances' subnets to send 0.0.0.0/0 traffic through the internet gateway route. The EC2 instances are in private subnets, so they need a route to the internet to be able to receive internet traffic. Additionally, the solutions architect should add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0, to ensure that the instances are allowed to send traffic out to the internet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is not a complete solution, as it only allows outbound traffic, but the instances need to be able to receive inbound traffic from the internet. <br><br>Option D is not necessary, as the internet-facing ALB is already specified and the EC2 instances are already part of the target group. <br><br>Option A is not a solution to the problem, as it does not address the underlying issue of the EC2 instances not being able to receive internet traffic.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 803076,
          "date": "Thu 09 Feb 2023 11:22",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "Option B is not a complete solution, as it only allows outbound traffic, but the instances need to be able to receive inbound traffic from the internet. <br><br>Option D is not necessary, as the internet-facing ALB is already specified and the EC2 instances are already part of the target group. <br><br>Option A is not a solution to the problem, as it does not address the underlying issue of the EC2 instances not being able to receive internet traffic.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 799893,
          "date": "Mon 06 Feb 2023 16:21",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "i choose B because it makes more sense to me. You want to place your web application in a public subnet not in private subnet for security reasons. You don't need to open your inbound traffic for all traffic, your already have a load balance. However, u need to be able to return the traffic , hence open up the outbound to 0.0.0.0/00.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790468,
          "date": "Sat 28 Jan 2023 10:38",
          "username": "\t\t\t\tdexpos\t\t\t",
          "content": "D makes more sense to enable the internet traffic reach the EC2, the C is only considering outbound",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 788521,
          "date": "Thu 26 Jan 2023 09:18",
          "username": "\t\t\t\taws4myself\t\t\t",
          "content": "Simply we can update the private subnet route table to get internet with IGW id. Aslo we are allowing security group outbound to 0.0.0.0/0. <br><br>D is a bad answer. If you launch a public ALB, there should be min 2 AZs with internet access. There is nothing to update route tables for public and private subnets. By default, every route table has a default rule with VPC CIDR range.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787304,
          "date": "Wed 25 Jan 2023 06:48",
          "username": "\t\t\t\tChan1509\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/80859-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776562,
          "date": "Sun 15 Jan 2023 14:01",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Create public subnets in each Availability Zone. Associate the public subnets with the ALB.  Update the route tables for the public subnets with a route to the private subnets.<br><br>This solution will resolve the issue by allowing the internet traffic to reach the EC2 instances. By creating public subnets in each availability zone and associating them with the ALB, the internet traffic will be directed to the ALB.  Updating the route tables for the public subnets with a route to the private subnets will allow the traffic to be routed to the private subnets where the EC2 instances reside. This ensures that the traffic reaches the correct target group, and the security group of the instances allows inbound traffic from the internet.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775882,
          "date": "Sat 14 Jan 2023 20:55",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "To attach Amazon EC2 instances that are located in a private subnet, first create public subnets. These public subnets must be in the same Availability Zones as the private subnets that are used by the backend instances. Then, associate the public subnets with your load balancer.<br><br>Note: Your load balancer establishes a connection with its target privately. To download software or security patches from the internet, use a NAT gateway rule on the target instance's route table to allow internet access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But where is the net gateway mentioned in option D. </li><li>NAT Gateway is used when the question asks you the private EC2 are not able to connect to internet to download window patches etc.. Here the question is Internet is not able to reach the EC2 Instances. The only way the internet traffic reaches to EC2 instances in private subnet is through ALB in public subnet and need to edit the route table to reach private subnets</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783942,
          "date": "Sun 22 Jan 2023 06:48",
          "username": "\t\t\t\tjainparag1\t\t\t",
          "content": "But where is the net gateway mentioned in option D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NAT Gateway is used when the question asks you the private EC2 are not able to connect to internet to download window patches etc.. Here the question is Internet is not able to reach the EC2 Instances. The only way the internet traffic reaches to EC2 instances in private subnet is through ALB in public subnet and need to edit the route table to reach private subnets</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819633,
          "date": "Thu 23 Feb 2023 20:28",
          "username": "\t\t\t\tDeepak_k\t\t\t",
          "content": "NAT Gateway is used when the question asks you the private EC2 are not able to connect to internet to download window patches etc.. Here the question is Internet is not able to reach the EC2 Instances. The only way the internet traffic reaches to EC2 instances in private subnet is through ALB in public subnet and need to edit the route table to reach private subnets",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774394,
          "date": "Fri 13 Jan 2023 12:40",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/80859-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774325,
          "date": "Fri 13 Jan 2023 11:15",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/80859-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#247",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a database in Amazon RDS for MySQL. Due to increased transactions, the database support team is reporting slow reads against the DB instance and recommends adding a read replica.<br><br>Which combination of actions should a solutions architect take before implementing this change? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#247",
          "answers": [
            {
              "choice": "<p>A. Enable binlog replication on the RDS primary node.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Choose a failover priority for the source DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow long-running transactions to complete on the source DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a global table and specify the AWS Regions where the table will be available.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable automatic backups on the source instance by setting the backup retention period to a value other than 0.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777368,
          "date": "Mon 16 Jan 2023 07:38",
          "username": "\t\t\t\tKelvinEM\t\t\t",
          "content": "C,E<br>\\\"An active, long-running transaction can slow the process of creating the read replica. We recommend that you wait for long-running transactions to complete before creating a read replica. If you create multiple read replicas in parallel from the same source DB instance, Amazon RDS takes only one snapshot at the start of the first create action.<br><br>When creating a read replica, there are a few things to consider. First, you must enable automatic backups on the source DB instance by setting the backup retention period to a value other than 0. This requirement also applies to a read replica that is the source DB instance for another read replica\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 832137,
          "date": "Tue 07 Mar 2023 18:10",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "Who would know this stuff man...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 808782,
          "date": "Tue 14 Feb 2023 20:55",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 796418,
          "date": "Thu 02 Feb 2023 21:32",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "When creating a Read Replica, there are a few things to consider. First, you must enable automatic backups on the source DB instance by setting the backup retention period to a value other than 0. This requirement also applies to a Read Replica that is the source DB instance for another Read Replica. <br><br>After you enable automatic backups by modifying your read replica instance to have a backup retention period greater than 0 days, you'll find that the log_bin and binlog_format will align itself with the configuration specified in your parameter group dynamically and will not require the RDS instance to be restarted. You will also be able to create a read replica from your read replica instance with no further modification requirements.<br><br>https://blog.pythian.com/enabling-binary-logging-rds-read-replica/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 783918,
          "date": "Sun 22 Jan 2023 05:49",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "A,C<br><br>A: Before we can start read replica, it is important to enable binary logging on the RDS primary node, thus, ensuring read replica to have up-to-date data.<br>C:To avoid inconsistencies between the primary and replica instances by allowing long-running transactions to complete on the source DB instance<br><br>Though E is a good practise, it is not part of the steps you need to do before enabling read replica.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Binlog replication is a popular feature serving multiple use cases, including offloading transactional work from a source database, replicating changes to a separate dedicated system to run analytics, and streaming data into other systems, but the benefits don't come for free. I don't believe it is used for creating read replicas. It is not mentioned in the link below.<br>On the other hand this link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create says...<br>(C) We recommend that you wait for long-running transactions to complete before creating a read replica.<br>(E) First, you must enable automatic backups on the source DB instance by setting the backup retention period to a value other than 0</li><li>You are right, Binlog is enabled by doing (E). If we think from Database-as-a-service, C and E would be the correct answer. My answer will only be correct if it is not using AWS. Apologizes.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 786295,
          "date": "Tue 24 Jan 2023 09:08",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "Binlog replication is a popular feature serving multiple use cases, including offloading transactional work from a source database, replicating changes to a separate dedicated system to run analytics, and streaming data into other systems, but the benefits don't come for free. I don't believe it is used for creating read replicas. It is not mentioned in the link below.<br>On the other hand this link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create says...<br>(C) We recommend that you wait for long-running transactions to complete before creating a read replica.<br>(E) First, you must enable automatic backups on the source DB instance by setting the backup retention period to a value other than 0<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are right, Binlog is enabled by doing (E). If we think from Database-as-a-service, C and E would be the correct answer. My answer will only be correct if it is not using AWS. Apologizes.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787209,
          "date": "Wed 25 Jan 2023 03:29",
          "username": "\t\t\t\talexleely\t\t\t",
          "content": "You are right, Binlog is enabled by doing (E). If we think from Database-as-a-service, C and E would be the correct answer. My answer will only be correct if it is not using AWS. Apologizes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779096,
          "date": "Tue 17 Jan 2023 18:01",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "C&E ARE right choices.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 776570,
          "date": "Sun 15 Jan 2023 14:09",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/68927-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 775883,
          "date": "Sat 14 Jan 2023 20:57",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C and E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 774472,
          "date": "Fri 13 Jan 2023 13:44",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "C and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 774327,
          "date": "Fri 13 Jan 2023 11:17",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/68927-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        }
      ]
    },
    {
      "question_id": "#248",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs analytics software on Amazon EC2 instances. The software accepts job requests from users to process data that has been uploaded to Amazon S3. Users report that some submitted data is not being processed Amazon CloudWatch reveals that the EC2 instances have a consistent CPU utilization at or near 100%. The company wants to improve system performance and scale the system based on user load.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#248",
          "answers": [
            {
              "choice": "<p>A. Create a copy of the instance. Place all instances behind an Application Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 VPC endpoint for Amazon S3. Update the software to reference the endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stop the EC2 instances. Modify the instance type to one with a more powerful CPU and more memory. Restart the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Route incoming requests to Amazon Simple Queue Service (Amazon SQS). Configure an EC2 Auto Scaling group based on queue size. Update the software to read from the queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776575,
          "date": "Sun 15 Jan 2023 14:16",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Route incoming requests to Amazon Simple Queue Service (Amazon SQS). Configure an EC2 Auto Scaling group based on queue size. Update the software to read from the queue.<br><br>By routing incoming requests to Amazon SQS, the company can decouple the job requests from the processing instances. This allows them to scale the number of instances based on the size of the queue, providing more resources when needed. Additionally, using an Auto Scaling group based on the queue size will automatically scale the number of instances up or down depending on the workload. Updating the software to read from the queue will allow it to process the job requests in a more efficient manner, improving the performance of the system.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837677,
          "date": "Mon 13 Mar 2023 07:14",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "Autoscaling Group and SQS solves the problem. <br>SQS - Decouples the process<br>ASG - Autoscales the EC2 instances based on usage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828698,
          "date": "Sat 04 Mar 2023 06:45",
          "username": "\t\t\t\tak1ak\t\t\t",
          "content": "its definitely A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775940,
          "date": "Sat 14 Jan 2023 22:21",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "D is correct.Decouple the process. autoscale the EC2 based on query size.best choice",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 775884,
          "date": "Sat 14 Jan 2023 21:03",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "I think it's A \\\" A.  Create a copy of the instance. Place all instances behind an Application Load Balancer.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#249",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a shared storage solution for a media application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed.<br><br>Which AWS solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#249",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Storage Gateway volume gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Storage Gateway tape gateway. Configure tapes to use Amazon S3. Connect the application server to the tape gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792238,
          "date": "Mon 30 Jan 2023 02:17",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "Amazon FSx has native support for Windows file system features and for the industry-standard Server Message Block (SMB) protocol to access file storage over a network.<br><br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 782066,
          "date": "Fri 20 Jan 2023 10:44",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon FSx for Windows File Server file system",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779190,
          "date": "Tue 17 Jan 2023 19:22",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "amazon fsx for smb connectivity.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778154,
          "date": "Mon 16 Jan 2023 20:31",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "FSX is the ans",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776582,
          "date": "Sun 15 Jan 2023 14:23",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/81115-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774476,
          "date": "Fri 13 Jan 2023 13:46",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "D.  Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774330,
          "date": "Fri 13 Jan 2023 11:24",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "SMB + fully managed = fsx for windows imo",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#250",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed intermittently.<br><br>What should a solutions architect do to meet these requirements when configuring the logs?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#250",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3 Intelligent-Tiering.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 801702,
          "date": "Wed 08 Feb 2023 07:15",
          "username": "\t\t\t\tocbn3wby\t\t\t",
          "content": "There's a table here that specifies that VPC Flow logs can go directly to S3. Does not need to go via CloudTrail and then to S3. Nor via CW. <br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-logs-infrastructure-S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 782070,
          "date": "Fri 20 Jan 2023 10:47",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "D is the correct answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779196,
          "date": "Tue 17 Jan 2023 19:29",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "we need to preserve logs hence D<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogsConcepts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778150,
          "date": "Mon 16 Jan 2023 20:24",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "D. ..agree that retention is the key word",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776983,
          "date": "Sun 15 Jan 2023 20:24",
          "username": "\t\t\t\tswolfgang\t\t\t",
          "content": "a is not,retantion means delete after 90 days but questions say rarely access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776604,
          "date": "Sun 15 Jan 2023 14:36",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.<br><br>By using Amazon S3 as the target for the VPC Flow Logs, the logs can be easily stored and accessed by the security team. Enabling an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days will automatically move the logs to a storage class that is optimized for infrequent access, reducing the storage costs for the company. The security team will still be able to access the logs as needed, even after they have been transitioned to S3 Standard-IA, but the storage cost will be optimized.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776508,
          "date": "Sun 15 Jan 2023 13:09",
          "username": "\t\t\t\tlaicos\t\t\t",
          "content": "I prefer D<br>\\\"accessed intermittently\\\" need logs after 90 days",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776069,
          "date": "Sun 15 Jan 2023 01:43",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "No, D should be is correct.<br>\\\"The logs will be frequently accessed for 90 days and then accessed intermittently.\\\" => We still need to store instead of deleting as the answer A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775898,
          "date": "Sat 14 Jan 2023 21:22",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D looks correct. This will meet the requirements of frequently accessing the logs for the first 90 days and then intermittently accessing them after that. S3 standard-IA is a storage class that is less expensive than S3 standard for infrequently accessed data, so it would be a more cost-effective option for storing the logs after the first 90 days.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774331,
          "date": "Fri 13 Jan 2023 11:25",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "Cloudwatch for this<br><br>https://www.examtopics.com/discussions/amazon/view/59983-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#251",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon EC2 instance is located in a private subnet in a new VPC.  This subnet does not have outbound internet access, but the EC2 instance needs the ability to download monthly security updates from an outside vendor.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#251",
          "answers": [
            {
              "choice": "<p>A. Create an internet gateway, and attach it to the VPC.  Configure the private subnet route table to use the internet gateway as the default route.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the NAT gateway as the default route.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the NAT instance as the default route.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an internet gateway, and attach it to the VPC.  Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the internet gateway as the default route.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 833965,
          "date": "Thu 09 Mar 2023 13:49",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "why not C?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 802958,
          "date": "Thu 09 Feb 2023 09:00",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "Require NAT gateway",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779369,
          "date": "Tue 17 Jan 2023 23:13",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Answer explained here https://medium.com/@tshemku/aws-internet-gateway-vs-nat-gateway-vs-nat-instance-30523096df22",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779254,
          "date": "Tue 17 Jan 2023 20:21",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "NAT Gateway is right choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776616,
          "date": "Sun 15 Jan 2023 14:42",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "B.  Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the NAT gateway as the default route.<br><br>This approach will allow the EC2 instance to access the internet and download the monthly security updates while still being located in a private subnet. By creating a NAT gateway and placing it in a public subnet, it will allow the instances in the private subnet to access the internet through the NAT gateway. And then, configure the private subnet route table to use the NAT gateway as the default route. This will ensure that all outbound traffic is directed through the NAT gateway, allowing the EC2 instance to access the internet while still maintaining the security of the private subnet.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774398,
          "date": "Fri 13 Jan 2023 12:42",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/59966-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#252",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to design a system to store client case files. The files are core company assets and are important. The number of files will grow over time.<br><br>The files must be simultaneously accessible from multiple application servers that run on Amazon EC2 instances. The solution must have built-in redundancy.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#252",
          "answers": [
            {
              "choice": "<p>A. Amazon Elastic File System (Amazon EFS)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Elastic Block Store (Amazon EBS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon S3 Glacier Deep Archive<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Backup<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 822609,
          "date": "Sun 26 Feb 2023 16:33",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "If the application servers are running on Linux or UNIX operating systems, EFS is a the most suitable solution for the given requirements.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 802959,
          "date": "Thu 09 Feb 2023 09:01",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "\\\"accessible from multiple application servers that run on Amazon EC2 instances\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776619,
          "date": "Sun 15 Jan 2023 14:44",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775909,
          "date": "Sat 14 Jan 2023 21:42",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "EFS Amazon Elastic File System (EFS) automatically grows and shrinks as you add and remove files with no need for management or provisioning.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774399,
          "date": "Fri 13 Jan 2023 12:43",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/68833-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#253",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has created two IAM policies: Policy1 and Policy2. Both policies are attached to an IAM group.<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image2.png\"><br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image3.png\"><br><br>A cloud engineer is added as an IAM user to the IAM group. Which action will the cloud engineer be able to perform?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#253",
          "answers": [
            {
              "choice": "<p>A. Deleting IAM users<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deleting directories<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deleting Amazon EC2 instances<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deleting logs from Amazon CloudWatch Logs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 786320,
          "date": "Tue 24 Jan 2023 09:35",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "ec2:* Allows full control of EC2 instances, so C is correct<br><br>The policy only grants get and list permission on IAM users, so not A<br>ds:Delete deny denies delete-directory, so not B, see https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ds/index.html<br>The policy only grants get and describe permission on logs, so not D",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 778158,
          "date": "Mon 16 Jan 2023 20:35",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C : Deleting Amazon EC2 instances",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776631,
          "date": "Sun 15 Jan 2023 14:51",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775911,
          "date": "Sat 14 Jan 2023 21:44",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C : Deleting Amazon EC2 instances",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774401,
          "date": "Fri 13 Jan 2023 12:45",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/27873-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774334,
          "date": "Fri 13 Jan 2023 11:33",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "Explicite deny on directories, only available action for deleting is EC2",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#254",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is reviewing a recent migration of a three-tier application to a VPC.  The security team discovers that the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules between the application tiers.<br><br>What should a solutions architect do to correct this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#254",
          "answers": [
            {
              "choice": "<p>A. Create security group rules using the instance ID as the source or destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create security group rules using the security group ID as the source or destination.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create security group rules using the VPC CIDR blocks as the source or destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create security group rules using the subnet CIDR blocks as the source or destination.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826951,
          "date": "Thu 02 Mar 2023 14:55",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "By using security group IDs, the ingress and egress rules can be restricted to only allow traffic from the necessary source or destination, and to deny all other traffic. This ensures that only the minimum required traffic is allowed between the application tiers.<br><br>Option A is not the best choice because using the instance ID as the source or destination would allow traffic from any instance with that ID, which may not be limited to the specific application tier.<br><br>Option C is also not the best choice because using VPC CIDR blocks would allow traffic from any IP address within the VPC, which may not be limited to the specific application tier.<br><br>Option D is not the best choice because using subnet CIDR blocks would allow traffic from any IP address within the subnet, which may not be limited to the specific application tier.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 782598,
          "date": "Fri 20 Jan 2023 18:43",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": ". Create security group rules using the security group ID as the source or destination",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779312,
          "date": "Tue 17 Jan 2023 21:22",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Security Group Rulesapply to instances<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776637,
          "date": "Sun 15 Jan 2023 14:54",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775925,
          "date": "Sat 14 Jan 2023 22:01",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "B.  Create security group rules using the security group ID as the source or destination.<br>This way, the security team can ensure that the least privileged access is given to the application tiers by allowing only the necessary communication between the security groups. For example, the web tier security group should only allow incoming traffic from the load balancer security group and outgoing traffic to the application tier security group. This approach provides a more granular and secure way to control traffic between the different tiers of the application and also allows for easy modification of access if needed.<br>It's also worth noting that it's good practice to minimize the number of open ports and protocols, and use security groups as a first line of defense, in addition to network access control lists (ACLs) to control traffic between subnets.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774418,
          "date": "Fri 13 Jan 2023 13:04",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46463-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774335,
          "date": "Fri 13 Jan 2023 11:34",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "B right<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#255",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an ecommerce checkout workflow that writes an order to a database and calls a service to process the payment. Users are experiencing timeouts during the checkout process. When users resubmit the checkout form, multiple unique orders are created for the same desired transaction.<br><br>How should a solutions architect refactor this workflow to prevent the creation of multiple orders?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#255",
          "answers": [
            {
              "choice": "<p>A. Configure the web application to send an order message to Amazon Kinesis Data Firehose. Set the payment service to retrieve the message from Kinesis Data Firehose and process the order.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a rule in AWS CloudTrail to invoke an AWS Lambda function based on the logged application path request. Use Lambda to query the database, call the payment service, and pass in the order information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the order in the database. Send a message that includes the order number to Amazon Simple Notification Service (Amazon SNS). Set the payment service to poll Amazon SNS, retrieve the message, and process the order.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the order in the database. Send a message that includes the order number to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the payment service to retrieve the message and process the order. Delete the message from the queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826953,
          "date": "Thu 02 Mar 2023 14:57",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "The use of a FIFO queue in Amazon SQS ensures that messages are processed in the order they are received.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776638,
          "date": "Sun 15 Jan 2023 14:58",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/95026-exam-aws-certified-solutions-architect-associate-saa-c03/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775931,
          "date": "Sat 14 Jan 2023 22:08",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D.  Store the order in the database. Send a message that includes the order number to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the payment service to retrieve the message and process the order. Delete the message from the queue.<br>This approach ensures that the order creation and payment processing steps are separate and atomic. By sending the order information to an SQS FIFO queue, the payment service can process the order one at a time and in the order they were received. If the payment service is unable to process an order, it can be retried later, preventing the creation of multiple orders. The deletion of the message from the queue after it is processed will prevent the same message from being processed multiple times.<br>It's worth noting that FIFO queues guarantee that messages are processed in the order they are received, and prevent duplicates.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774420,
          "date": "Fri 13 Jan 2023 13:05",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "asnwer is d",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#256",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is implementing a document review application using an Amazon S3 bucket for storage. The solution must prevent accidental deletion of the documents and ensure that all versions of the documents are available. Users must be able to download, modify, and upload documents.<br><br>Which combination of actions should be taken to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#256",
          "answers": [
            {
              "choice": "<p>A. Enable a read-only bucket ACL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable versioning on the bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach an IAM policy to the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable MFA Delete on the bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Encrypt the bucket using AWS KMS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826955,
          "date": "Thu 02 Mar 2023 14:59",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "no doubts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 806928,
          "date": "Mon 13 Feb 2023 01:00",
          "username": "\t\t\t\tMinHyeok\t\t\t",
          "content": "아몰랑 ㅇㅁㄹㅇㅁㄹ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 782791,
          "date": "Fri 20 Jan 2023 22:17",
          "username": "\t\t\t\takdavsan\t\t\t",
          "content": "b and d ofc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 782646,
          "date": "Fri 20 Jan 2023 19:30",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B & D Definitely.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 782282,
          "date": "Fri 20 Jan 2023 14:29",
          "username": "\t\t\t\tdavid76x\t\t\t",
          "content": "B & D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 778171,
          "date": "Mon 16 Jan 2023 20:41",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "B and D for sure guys",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 776774,
          "date": "Sun 15 Jan 2023 17:04",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/21969-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#257",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a solution that will report Amazon EC2 Auto Scaling events across all the applications in an AWS account. The company needs to use a serverless solution to store the EC2 Auto Scaling status data in Amazon S3. The company then will use the data in Amazon S3 to provide near-real-time updates in a dashboard. The solution must not affect the speed of EC2 instance launches.<br><br>How should the company move the data to Amazon S3 to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#257",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch an Amazon EMR cluster to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a bootstrap script during the launch of an EC2 instance to install Amazon Kinesis Agent. Configure Kinesis Agent to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 808795,
          "date": "Tue 14 Feb 2023 21:13",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Serverless solution and near real time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 807727,
          "date": "Mon 13 Feb 2023 20:03",
          "username": "\t\t\t\tStanislav4907\t\t\t",
          "content": "near real time -eliminates c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798042,
          "date": "Sat 04 Feb 2023 15:38",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792277,
          "date": "Mon 30 Jan 2023 02:58",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "You can use metric streams to continually stream CloudWatch metrics to a destination of your choice, with near-real-time delivery and low latency. One of the use cases is Data Lake: create a metric stream and direct it to an Amazon Kinesis Data Firehose delivery stream that delivers your CloudWatch metrics to a data lake such as Amazon S3.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792012,
          "date": "Sun 29 Jan 2023 20:51",
          "username": "\t\t\t\tStanislav4907\t\t\t",
          "content": "Option C, using an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule to send the EC2 Auto Scaling status data directly to Amazon S3, may not be the best choice because it may not provide real-time updates to the dashboard.<br><br>A schedule-based approach with an EventBridge rule and Lambda function may not be able to deliver the data in near real-time, as the EC2 Auto Scaling status data is generated dynamically and may not always align with the schedule set by the EventBridge rule.<br><br>Additionally, using a schedule-based approach with EventBridge and Lambda also has the potential to create latency, as there may be a delay between the time the data is generated and the time it is sent to S3.<br><br>In this scenario, using Amazon CloudWatch and Kinesis Data Firehose as described in Option A, provides a more reliable and near real-time solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791955,
          "date": "Sun 29 Jan 2023 19:59",
          "username": "\t\t\t\tMikelH93\t\t\t",
          "content": "A seems to be the right answer. Don't think C could be correct as it says \\\"near real-time\\\" and C is on schedule",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 789578,
          "date": "Fri 27 Jan 2023 13:20",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "C.  Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779341,
          "date": "Tue 17 Jan 2023 22:23",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "A seemsright choice but serverless keyword confuses,and cloud watch metric steam is server less too.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778176,
          "date": "Mon 16 Jan 2023 20:49",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A.  Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776786,
          "date": "Sun 15 Jan 2023 17:14",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "C.  Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.<br><br>This approach will use a serverless solution (AWS Lambda) which will not affect the speed of EC2 instance launches. It will use the EventBridge rule to invoke the Lambda function on schedule to send the data to S3. This will meet the requirement of near-real-time updates in a dashboard as well. The Lambda function can be triggered by CloudWatch events that are emitted when Auto Scaling events occur. The function can then collect the necessary data and store it in S3. This direct sending of data to S3 will reduce the number of steps and hence it is more efficient and cost-effective.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ChatGPT is not correct here</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778175,
          "date": "Mon 16 Jan 2023 20:49",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "ChatGPT is not correct here",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776086,
          "date": "Sun 15 Jan 2023 02:40",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A is the correct answer.<br>\\\"near-real-time\\\"=> A & D<br>\\\"The solution must not affect the speed of EC2 instance launches.\\\" => D is an incorrect",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774422,
          "date": "Fri 13 Jan 2023 13:07",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/81327-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#258",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that places hundreds of .csv files into an Amazon S3 bucket every hour. The files are 1 GB in size. Each time a file is uploaded, the company needs to convert the file to Apache Parquet format and place the output file into an S3 bucket.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#258",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to download the .csv files, convert the files to Parquet format, and place the output files in an S3 bucket. Invoke the Lambda function for each S3 PUT event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Apache Spark job to read the .csv files, convert the files to Parquet format, and place the output files in an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the Spark job.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Glue table and an AWS Glue crawler for the S3 bucket where the application places the .csv files. Schedule an AWS Lambda function to periodically use Amazon Athena to query the AWS Glue table, convert the query results into Parquet format, and place the output files into an S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Parquet format and place the output files into an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the ETL job.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776089,
          "date": "Sun 15 Jan 2023 02:43",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "No, D should be correct.<br><br>\\\"LEAST operational overhead\\\" => Should you fully manage service like Glue instead of manually like the answer A. ",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 803707,
          "date": "Thu 09 Feb 2023 22:55",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANS - d<br>https://aws.amazon.com/blogs/database/how-to-extract-transform-and-load-data-for-analytic-processing-using-aws-glue-part-2/<br>- READ ARTICLE -",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788502,
          "date": "Thu 26 Jan 2023 08:55",
          "username": "\t\t\t\taws4myself\t\t\t",
          "content": "Here A is the correct answer. The reason here is the least operational overhead.<br>A ==> S3 - Lambda - S3<br>D ==> S3 - Lambda - Glue - S3<br><br>Also, glue cannot convert on fly automatically, you need to write some code there. If you write the same code in lambda it will convert the same and push the file to S3<br><br>Lambda has max memory of 128 MB to 10 GB.  So, it can handle it easily.<br><br>And we need to consider cost also, glue cost is more. Hope many from this forum realize these differences.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Cost is not a factor. AWS Glue is a fully managed service therefore, it's the least operational overhead</li><li>We also need to stay with the question, cost was not a consideration in the question.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 822598,
          "date": "Sun 26 Feb 2023 16:21",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "Cost is not a factor. AWS Glue is a fully managed service therefore, it's the least operational overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792521,
          "date": "Mon 30 Jan 2023 08:33",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "We also need to stay with the question, cost was not a consideration in the question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786381,
          "date": "Tue 24 Jan 2023 10:52",
          "username": "\t\t\t\tJayBee65\t\t\t",
          "content": "A is unlikely to work as Lambda may struggle with 1GB size: \\\"< 64 MB, beyond which lambda is likely to hit memory caps\\\", see https://stackoverflow.com/questions/41504095/creating-a-parquet-file-on-aws-lambda-function",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 784146,
          "date": "Sun 22 Jan 2023 10:44",
          "username": "\t\t\t\tjainparag1\t\t\t",
          "content": "Should be D as Glue is self managed service and provides tel job for converting cab files to parquet off the shelf.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 780229,
          "date": "Wed 18 Jan 2023 17:48",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779395,
          "date": "Wed 18 Jan 2023 00:39",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "AWS Glue is right solution here.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778166,
          "date": "Mon 16 Jan 2023 20:39",
          "username": "\t\t\t\tmp165\t\t\t",
          "content": "I am thinking D.  <br><br> A says lambda will download the .csv...but to where? that seem manual based on that",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776803,
          "date": "Sun 15 Jan 2023 17:28",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "I think A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774423,
          "date": "Fri 13 Jan 2023 13:09",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/83201-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#259",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing new data retention policies for all databases that run on Amazon RDS DB instances. The company must retain daily backups for a minimum period of 2 years. The backups must be consistent and restorable.<br><br>Which solution should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#259",
          "answers": [
            {
              "choice": "<p>A. Create a backup vault in AWS Backup to retain RDS backups. Create a new backup plan with a daily schedule and an expiration period of 2 years after creation. Assign the RDS DB instances to the backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a backup window for the RDS DB instances for daily snapshots. Assign a snapshot retention policy of 2 years to each RDS DB instance. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule snapshot deletions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure database transaction logs to be automatically backed up to Amazon CloudWatch Logs with an expiration period of 2 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an AWS Database Migration Service (AWS DMS) replication task. Deploy a replication instance, and configure a change data capture (CDC) task to stream database changes to Amazon S3 as the target. Configure S3 Lifecycle policies to delete the snapshots after 2 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 779397,
          "date": "Wed 18 Jan 2023 00:41",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "A is right choice",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778202,
          "date": "Mon 16 Jan 2023 21:15",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A A A A A A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776806,
          "date": "Sun 15 Jan 2023 17:31",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774426,
          "date": "Fri 13 Jan 2023 13:11",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "Create a backup vault in AWS Backup to retain RDS backups. Create a new backup plan with a daily schedule and an expiration period of 2 years after creation. Assign the RDS DB instances to the backup plan.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#260",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file share. A self-managed on-premises Active Directory controls access to the files and folders.<br><br>The company wants to use Amazon FSx for Windows File Server as part of the solution. The company must ensure that the on-premises Active Directory groups restrict access to the FSx for Windows File Server SMB compliance shares, folders, and files after the move to AWS. The company has created an FSx for Windows File Server file system.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#260",
          "answers": [
            {
              "choice": "<p>A. Create an Active Directory Connector to connect to the Active Directory. Map the Active Directory groups to IAM groups to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Assign a tag with a Restrict tag key and a Compliance tag value. Map the Active Directory groups to IAM groups to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM service-linked role that is linked directly to FSx for Windows File Server to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Join the file system to the Active Directory to restrict access.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776814,
          "date": "Sun 15 Jan 2023 17:37",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Join the file system to the Active Directory to restrict access.<br><br>Joining the FSx for Windows File Server file system to the on-premises Active Directory will allow the company to use the existing Active Directory groups to restrict access to the file shares, folders, and files after the move to AWS. This option allows the company to continue using their existing access controls and management structure, making the transition to AWS more seamless.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837710,
          "date": "Mon 13 Mar 2023 08:15",
          "username": "\t\t\t\tsomsundar\t\t\t",
          "content": "Answer D.  Amazon FSx does not support Active Directory Connector .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832941,
          "date": "Wed 08 Mar 2023 13:23",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD. html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 809279,
          "date": "Wed 15 Feb 2023 09:21",
          "username": "\t\t\t\tYelizaveta\t\t\t",
          "content": "Note:<br>Amazon FSx does not support Active Directory Connector and Simple Active Directory.<br><br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/aws-ad-integration-fsxW.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 798050,
          "date": "Sat 04 Feb 2023 15:43",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "The answer will be AD connector so : A, it will create a proxy between your onpremises AD which you can use to restrict access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792158,
          "date": "Mon 30 Jan 2023 00:29",
          "username": "\t\t\t\tStanislav4907\t\t\t",
          "content": "Option D: Join the file system to the Active Directory to restrict access.<br><br>Joining the FSx for Windows File Server file system to the on-premises Active Directory allows the company to use the existing Active Directory groups to restrict access to the file shares, folders, and files after the move to AWS. By joining the file system to the Active Directory, the company can maintain the same access control as before the move, ensuring that the compliance team can maintain compliance with the relevant regulations and standards.<br><br>Options A and B involve creating an Active Directory Connector or assigning a tag to map the Active Directory groups to IAM groups, but these options do not allow for the use of the existing Active Directory groups to restrict access to the file shares in AWS.<br><br>Option C involves creating an IAM service-linked role linked directly to FSx for Windows File Server to restrict access, but this option does not take advantage of the existing on-premises Active Directory and its access control.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 789593,
          "date": "Fri 27 Jan 2023 13:41",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "A is correct <br>Use AD Connector if you only need to allow your on-premises users to log in to AWS applications and services with their Active Directory credentials. You can also use AD Connector to join Amazon EC2 instances to your existing Active Directory domain.<br>Pls refer - https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html#adconnector",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779402,
          "date": "Wed 18 Jan 2023 00:53",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Going with D here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775947,
          "date": "Sat 14 Jan 2023 22:28",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D.  Join the file system to the Active Directory to restrict access.<br><br>The best way to restrict access to the FSx for Windows File Server SMB compliance shares, folders, and files after the move to AWS is to join the file system to the on-premises Active Directory. This will allow the company to continue using the Active Directory groups to restrict access to the files and folders, without the need to create additional IAM groups or roles.<br><br>By joining the file system to the Active Directory, the company can continue to use the same access control mechanisms it already has in place and the security configuration will not change.<br><br>Option A and B are not applicable to FSx for Windows File Server because it doesn't support the use of IAM groups or tags to restrict access.<br><br>Option C is not appropriate in this case because FSx for Windows File Server does not support using IAM service-linked roles to restrict access.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#261",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently announced the deployment of its retail website to a global audience. The website runs on multiple Amazon EC2 instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones.<br><br>The company wants to provide its customers with different versions of content based on the devices that the customers use to access the website.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#261",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon CloudFront to cache multiple versions of the content.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a host header in a Network Load Balancer to forward traffic to different instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a Lambda@Edge function to send specific objects to users based on the User-Agent header.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up host-based routing to different EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up path-based routing to different EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776099,
          "date": "Sun 15 Jan 2023 02:53",
          "username": "\t\t\t\tParsons\t\t\t",
          "content": "A, C is correct.<br><br>NLB lister rule only supports Protocol & Port (Not host/based routing like ALB) => D, E is incorrect.<br>NLB just works layer 4 (TCP/UDP) instead of Layer 7 (HTTP) => B is incorrect.<br><br>After eliminating, AC should be the answer.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 806219,
          "date": "Sun 12 Feb 2023 11:44",
          "username": "\t\t\t\twors\t\t\t",
          "content": "So will this mean the entire architecture needs to move to lambda in order to leverage off lambda edge? This doesn't make sense as the question outlines the architecture already in ec2, asg and elb?<br><br>Just looking for clarification if I am missing something",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792311,
          "date": "Mon 30 Jan 2023 03:21",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "AC are the correct answers.<br><br>For C:<br>IMPROVED USER EXPERIENCE<br>Lambda@Edge can help improve your users' experience with your websites and web applications across the world, by letting you personalize content for them without sacrificing performance.<br><br>Real-time Image Transformation<br>You can customize your users' experience by transforming images on the fly based on the user characteristics. For example, you can resize images based on the viewer's device type—mobile, desktop, or tablet. You can also cache the transformed images at CloudFront Edge locations to further improve performance when delivering images.<br><br>https://aws.amazon.com/lambda/edge/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 776822,
          "date": "Sun 15 Jan 2023 17:42",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A,C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 775957,
          "date": "Sat 14 Jan 2023 22:45",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C.  Configure a Lambda@Edge function to send specific objects to users based on the User-Agent header.<br><br>Lambda@Edge allows you to run a Lambda function in response to specific CloudFront events, such as a viewer request, an origin request, a response, or a viewer response.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 774342,
          "date": "Fri 13 Jan 2023 11:44",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/67881-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#262",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to use Amazon ElastiCache for its multi-tier web application. A solutions architect creates a Cache VPC for the ElastiCache cluster and an App VPC for the application's Amazon EC2 instances. Both VPCs are in the us-east-1 Region.<br><br>The solutions architect must implement a solution to provide the application's EC2 instances with access to the ElastiCache cluster.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#262",
          "answers": [
            {
              "choice": "<p>A. Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application's security group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Transit VPC.  Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC.  Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application's security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the peering connection's security group to allow inbound connection from the application's security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Transit VPC.  Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC.  Configure an inbound rule for the Transit VPC's security group to allow inbound connection from the application's security group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776827,
          "date": "Sun 15 Jan 2023 17:47",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "A.  Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application's security group.<br><br>Creating a peering connection between the VPCs allows the application's EC2 instances to communicate with the ElastiCache cluster directly and efficiently. This is the most cost-effective solution as it does not involve creating additional resources such as a Transit VPC, and it does not incur additional costs for traffic passing through the Transit VPC.  Additionally, it is also more secure as it allows you to configure a more restrictive security group rule to allow inbound connection from only the application's security group.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 825228,
          "date": "Tue 28 Feb 2023 21:03",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "Cost Effectively!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#263",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application that consists of several microservices. The company has decided to use container technologies to deploy its software on AWS. The company needs a solution that minimizes the amount of ongoing effort for maintenance and scaling. The company cannot manage additional infrastructure.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#263",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon Elastic Container Service (Amazon ECS) cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the Kubernetes control plane on Amazon EC2 instances that span multiple Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Amazon Elastic Container Service (Amazon ECS) service with an Amazon EC2 launch type. Specify a desired task number level of greater than or equal to 2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon Elastic Container Service (Amazon ECS) service with a Fargate launch type. Specify a desired task number level of greater than or equal to 2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy Kubernetes worker nodes on Amazon EC2 instances that span multiple Availability Zones. Create a deployment that specifies two or more replicas for each microservice.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 830651,
          "date": "Mon 06 Mar 2023 09:38",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "ECS has 2 launch type, EC2 (you maintain the infra) and Fargate (serverless). Since the question ask for no additional infra to manage it should be Fargate.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 792320,
          "date": "Mon 30 Jan 2023 03:33",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "AWS Fargate is a technology that you can use with Amazon ECS to run containers without having to manage servers or clusters of Amazon EC2 instances. With Fargate, you no longer have to provision, configure, or scale clusters of virtual machines to run containers. <br><br>https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 778220,
          "date": "Mon 16 Jan 2023 21:32",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A D is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776830,
          "date": "Sun 15 Jan 2023 17:50",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "A,D is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 775978,
          "date": "Sat 14 Jan 2023 23:32",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "AD: <br>https://www.examtopics.com/discussions/amazon/view/60032-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774347,
          "date": "Fri 13 Jan 2023 11:51",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "AD - EC2 out for this, cluster + fargate is the right answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#264",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53. The company occasionally experiences a timeout error when attempting to browse the application. The networking team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error.<br><br>What should a solutions architect implement to overcome these timeout errors?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#264",
          "answers": [
            {
              "choice": "<p>A. Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each record.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each record.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827104,
          "date": "Thu 02 Mar 2023 17:29",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779418,
          "date": "Wed 18 Jan 2023 01:18",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Its D only",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779411,
          "date": "Wed 18 Jan 2023 01:10",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Why not B<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html#dns-failover-types-active-passive<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Its D,found the root cause<br>Option B is not the best option to overcome these timeout errors because it is not designed to handle traffic directed by Amazon Route 53. Option B creates a failover routing policy record for each EC2 instance, which is designed to route traffic to a backup EC2 instance if one of the EC2 instances becomes unhealthy. This is not ideal for routing traffic from Route 53 as it does not allow for the redirection of traffic away from unhealthy instances. Option D would be the best choice as it allows for the creation of an Application Load Balancer which can detect unhealthy instances and redirect traffic away from them.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779416,
          "date": "Wed 18 Jan 2023 01:17",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "Its D,found the root cause<br>Option B is not the best option to overcome these timeout errors because it is not designed to handle traffic directed by Amazon Route 53. Option B creates a failover routing policy record for each EC2 instance, which is designed to route traffic to a backup EC2 instance if one of the EC2 instances becomes unhealthy. This is not ideal for routing traffic from Route 53 as it does not allow for the redirection of traffic away from unhealthy instances. Option D would be the best choice as it allows for the creation of an Application Load Balancer which can detect unhealthy instances and redirect traffic away from them.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778222,
          "date": "Mon 16 Jan 2023 21:33",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776833,
          "date": "Sun 15 Jan 2023 17:54",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775982,
          "date": "Sat 14 Jan 2023 23:36",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "Ans: D <br>https://www.examtopics.com/discussions/amazon/view/83982-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775967,
          "date": "Sat 14 Jan 2023 23:11",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D.  Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53.<br><br>An Application Load Balancer (ALB) allows you to distribute incoming traffic across multiple backend instances, and can automatically route traffic to healthy instances while removing traffic from unhealthy instances. By using an ALB in front of the EC2 instances and routing traffic to it from Route 53, the load balancer can perform health checks on the instances and only route traffic to healthy instances, which should help to reduce or eliminate timeout errors caused by unhealthy instances.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#265",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to design a highly available application consisting of web, application, and database tiers. HTTPS content delivery should be as close to the edge as possible, with the least delivery time.<br><br>Which solution meets these requirements and is MOST secure?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#265",
          "answers": [
            {
              "choice": "<p>A. Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775969,
          "date": "Sat 14 Jan 2023 23:13",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C.  Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.<br><br>This solution meets the requirements for a highly available application with web, application, and database tiers, as well as providing edge-based content delivery. Additionally, it maximizes security by having the ALB in a private subnet, which limits direct access to the web servers, while still being able to serve traffic over the Internet via the public ALB.  This will ensure that the web servers are not exposed to the public Internet, which reduces the attack surface and provides a secure way to access the application.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 776838,
          "date": "Sun 15 Jan 2023 18:01",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775987,
          "date": "Sat 14 Jan 2023 23:43",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "ans: C<br>https://www.examtopics.com/discussions/amazon/view/46401-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774349,
          "date": "Fri 13 Jan 2023 11:55",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "Instances in private, ALB in public, point cloudfront to the public ALB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#266",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a popular gaming platform running on AWS. The application is sensitive to latency because latency can impact the user experience and introduce unfair advantages to some players. The application is deployed in every AWS Region. It runs on Amazon EC2 instances that are part of Auto Scaling groups configured behind Application Load Balancers (ALBs). A solutions architect needs to implement a mechanism to monitor the health of the application and redirect traffic to healthy endpoints.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#266",
          "answers": [
            {
              "choice": "<p>A. Configure an accelerator in AWS Global Accelerator. Add a listener for the port that the application listens on, and attach it to a Regional endpoint in each Region. Add the ALB as the endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution and specify the ALB as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution and specify Amazon S3 as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon DynamoDB database to serve as the data store for the application. Create a DynamoDB Accelerator (DAX) cluster to act as the in-memory cache for DynamoDB hosting the application data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 775981,
          "date": "Sat 14 Jan 2023 23:36",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A.  Configure an accelerator in AWS Global Accelerator. Add a listener for the port that the application listens on, and attach it to a Regional endpoint in each Region. Add the ALB as the endpoint.<br><br>AWS Global Accelerator directs traffic to the optimal healthy endpoint based on health checks, it can also route traffic to the closest healthy endpoint based on geographic location of the client. By configuring an accelerator and attaching it to a Regional endpoint in each Region, and adding the ALB as the endpoint, the solution will redirect traffic to healthy endpoints, improving the user experience by reducing latency and ensuring that the application is running optimally. This solution will ensure that traffic is directed to the closest healthy endpoint and will help to improve the overall user experience.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775203,
          "date": "Sat 14 Jan 2023 09:51",
          "username": "\t\t\t\talanp\t\t\t",
          "content": "A.  When you have an Application Load Balancer or Network Load Balancer that includes multiple target groups, Global Accelerator considers the load balancer endpoint to be healthy only if each target group behind the load balancer has at least one healthy target. If any single target group for the load balancer has only unhealthy targets, Global Accelerator considers the endpoint to be unhealthy.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-health-check-options.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 816920,
          "date": "Tue 21 Feb 2023 18:23",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "Global accelerators can be used for non http cases such as UDP, tcp , gaming , or voip",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776846,
          "date": "Sun 15 Jan 2023 18:08",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775992,
          "date": "Sat 14 Jan 2023 23:49",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "A: <br>https://www.examtopics.com/discussions/amazon/view/46403-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774352,
          "date": "Fri 13 Jan 2023 11:57",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-health-check-options.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#267",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has one million users that use its mobile app. The company must analyze the data usage in near-real time. The company also must encrypt the data in near-real time and must store the data in a centralized location in Apache Parquet format for further processing.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#267",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data. Invoke an AWS Lambda function to send the data to the Kinesis Data Analytics application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data. Invoke an AWS Lambda function to send the data to the EMR cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776851,
          "date": "Sun 15 Jan 2023 18:14",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "D.  Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data.<br><br>This solution will meet the requirements with the least operational overhead as it uses Amazon Kinesis Data Firehose, which is a fully managed service that can automatically handle the data collection, data transformation, encryption, and data storage in near-real time. Kinesis Data Firehose can automatically store the data in Amazon S3 in Apache Parquet format for further processing. Additionally, it allows you to create an Amazon Kinesis Data Analytics application to analyze the data in near real-time, with no need to manage any infrastructure or invoke any Lambda function. This way you can process a large amount of data with the least operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nicely explained. Thanks.</li><li>Apache Parquet format processing was not mentioned in the answer options. Strange.</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 784134,
          "date": "Sun 22 Jan 2023 10:34",
          "username": "\t\t\t\tjainparag1\t\t\t",
          "content": "Nicely explained. Thanks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783027,
          "date": "Sat 21 Jan 2023 06:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Apache Parquet format processing was not mentioned in the answer options. Strange.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776044,
          "date": "Sun 15 Jan 2023 01:01",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "D:<br>https://www.examtopics.com/discussions/amazon/view/82022-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775986,
          "date": "Sat 14 Jan 2023 23:42",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "D.  Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data.<br><br>Amazon Kinesis Data Firehose can automatically encrypt and store the data in Amazon S3 in Apache Parquet format for further processing, which reduces the operational overhead. It also allows for near-real-time data analysis using Kinesis Data Analytics, which is a fully managed service that makes it easy to analyze streaming data using SQL. This solution eliminates the need for setting up and maintaining an EMR cluster, which would require more operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#268",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company has a web application that displays scores. The application runs on Amazon EC2 instances behind an Application Load Balancer. The application stores data in an Amazon RDS for MySQL database. Users are starting to experience long delays and interruptions that are caused by database read performance. The company wants to improve the user experience while minimizing changes to the application's architecture.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#268",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache in front of the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use RDS Proxy between the application and the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application from EC2 instances to AWS Lambda.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database from Amazon RDS for MySQL to Amazon DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827120,
          "date": "Thu 02 Mar 2023 17:46",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Rds proxy is for too many connections, not for performance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 824831,
          "date": "Tue 28 Feb 2023 14:18",
          "username": "\t\t\t\tK0nAn\t\t\t",
          "content": "It should B ,key is here to minimize application change",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 823960,
          "date": "Mon 27 Feb 2023 17:44",
          "username": "\t\t\t\tZiEthio\t\t\t",
          "content": "correct answer is 'B' Amazon RDS Proxy, you can allow your applications to pool and share database connections to improve their ability to scale. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 823831,
          "date": "Mon 27 Feb 2023 15:51",
          "username": "\t\t\t\tJa13\t\t\t",
          "content": "I think it should be A, it says \\\"minimize code changes\\\" no \\\"reduce code change to zero\\\", so some changes are allowed. Also indicate that the problem is the performance reading operations, elasticache solved reads.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816927,
          "date": "Tue 21 Feb 2023 18:28",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "Every other answer choice can simnifically change the architecture or can someone explain?<br>A.  Elasticache changes codeC.  can take time and effort to implementD.  Going from an SQL to no sql can be challenging and take time. Probably not the best idea when its being done for no reason",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 800497,
          "date": "Tue 07 Feb 2023 04:15",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "By using Amazon RDS Proxy, you can allow your applications to pool and share database connections to improve their ability to scale. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections. By using RDS Proxy, you can also enforce AWS Identity and Access Management (IAM) authentication for databases, and securely store credentials in AWS Secrets Manager.<br><br>Using RDS Proxy, you can handle unpredictable surges in database traffic. Otherwise, these surges might cause issues due to oversubscribing connections or creating new connections at a fast rate. RDS Proxy establishes a database connection pool and reuses connections in this pool. This approach avoids the memory and CPU overhead of opening a new database connection each time. To protect the database against oversubscription, you can control the number of database connections that are created.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 799074,
          "date": "Sun 05 Feb 2023 19:24",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "PROBLEM: long delays and interruptions that are CAUSED BY database “read performance”.<br>TASK: is to improve user experience w/o changing application architecture.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798205,
          "date": "Sat 04 Feb 2023 18:28",
          "username": "\t\t\t\taakashkumar1999\t\t\t",
          "content": "Answer is B : Even though elastic cache improves read performance still there will be a lot of code changes, RDS proxy manages if a database has a lot of connections and hence improves performance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Possible answers can be A or D. <br>Gaming companies use Amazon DynamoDB in all parts of game platforms, including game state, player data, session history, and leaderboards. The main benefits that these companies get from DynamoDB are its ability to scale reliably to millions of concurrent users and requests while ensuring consistently low latency—measured in single-digit milliseconds. Using DynamoDB to store player game state and other player data allows game companies to accommodate high numbers of concurrent players while maintaining millisecond access latency. As an example, consider Electronic Arts (EA)<br>BUT BUT the question indicates \\\"minimizing changes to the application's architecture\\\" therefore we discard answer D, leaving it as the correct answer AAAAAAAAAA</li><li>By using Amazon RDS Proxy, you can allow your applications to pool and share database connections to improve their ability to scale. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 810283,
          "date": "Thu 16 Feb 2023 06:37",
          "username": "\t\t\t\tLalo\t\t\t",
          "content": "Possible answers can be A or D. <br>Gaming companies use Amazon DynamoDB in all parts of game platforms, including game state, player data, session history, and leaderboards. The main benefits that these companies get from DynamoDB are its ability to scale reliably to millions of concurrent users and requests while ensuring consistently low latency—measured in single-digit milliseconds. Using DynamoDB to store player game state and other player data allows game companies to accommodate high numbers of concurrent players while maintaining millisecond access latency. As an example, consider Electronic Arts (EA)<br>BUT BUT the question indicates \\\"minimizing changes to the application's architecture\\\" therefore we discard answer D, leaving it as the correct answer AAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 810286,
          "date": "Thu 16 Feb 2023 06:38",
          "username": "\t\t\t\tLalo\t\t\t",
          "content": "By using Amazon RDS Proxy, you can allow your applications to pool and share database connections to improve their ability to scale. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792872,
          "date": "Mon 30 Jan 2023 14:39",
          "username": "\t\t\t\togerber\t\t\t",
          "content": "But Elasticache request application changes, so I think It's RDS proxy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 787050,
          "date": "Tue 24 Jan 2023 23:48",
          "username": "\t\t\t\tdevonwho\t\t\t",
          "content": "Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776853,
          "date": "Sun 15 Jan 2023 18:16",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776048,
          "date": "Sun 15 Jan 2023 01:09",
          "username": "\t\t\t\tAHUI\t\t\t",
          "content": "A: https://www.examtopics.com/discussions/amazon/view/86219-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 775989,
          "date": "Sat 14 Jan 2023 23:45",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774436,
          "date": "Fri 13 Jan 2023 13:15",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "A.  Use Amazon ElastiCache in front of the database",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774354,
          "date": "Fri 13 Jan 2023 12:00",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "https://aws.amazon.com/caching/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#269",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The performance degradation is attributed to an increase in the number of read-only SQL queries triggered by business analysts. A solutions architect needs to solve the problem with minimal changes to the existing web application.<br><br>What should the solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#269",
          "answers": [
            {
              "choice": "<p>A. Export the data to Amazon DynamoDB and have the business analysts run their queries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Load the data into Amazon ElastiCache and have the business analysts run their queries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica of the primary database and have the business analysts run their queries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Copy the data into an Amazon Redshift cluster and have the business analysts run their queries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 776856,
          "date": "Sun 15 Jan 2023 18:17",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "C is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 775996,
          "date": "Sat 14 Jan 2023 23:53",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C.  Create a read replica of the primary database and have the business analysts run their queries.<br><br>Creating a read replica of the primary RDS database will offload the read-only SQL queries from the primary database, which will help to improve the performance of the web application. Read replicas are exact copies of the primary database that can be used to handle read-only traffic, which will reduce the load on the primary database and improve the performance of the web application. This solution can be implemented with minimal changes to the existing web application, as the business analysts can continue to run their queries on the read replica without modifying the code.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774432,
          "date": "Fri 13 Jan 2023 13:14",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "Create a read replica of the primary database and have the business analysts run their queries.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#270",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions architect needs to ensure that the data is encrypted at rest before the data is uploaded to the S3 buckets. The data also must be encrypted in transit.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#270",
          "answers": [
            {
              "choice": "<p>A. Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use server-side encryption to encrypt the data that is being uploaded to the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create bucket policies that require the use of server-side encryption with S3 managed encryption keys (SSE-S3) for S3 uploads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the security option to encrypt the S3 buckets through the use of a default AWS Key Management Service (AWS KMS) key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 781136,
          "date": "Thu 19 Jan 2023 13:46",
          "username": "\t\t\t\ttechhb\t\t\t",
          "content": "here keyword is \\\"before\\\" \\\"the data is encrypted at rest before the data is uploaded to the S3 buckets.\\\"",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819540,
          "date": "Thu 23 Feb 2023 19:22",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "Because the data must be encrypted while in transit",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795536,
          "date": "Wed 01 Feb 2023 22:27",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A is correct IMO",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776858,
          "date": "Sun 15 Jan 2023 18:19",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/53840-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 775999,
          "date": "Sat 14 Jan 2023 23:57",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "A.  Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774431,
          "date": "Fri 13 Jan 2023 13:14",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#271",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the desired Amazon EC2 capacity is reached. The peak capacity is the ‘same every night and the batch jobs always start at 1 AM. The solutions architect needs to find a cost-effective solution that will allow for the desired EC2 capacity to be reached quickly and allow the Auto Scaling group to scale down after the batch jobs are complete.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#271",
          "answers": [
            {
              "choice": "<p>A. Increase the minimum capacity for the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the maximum capacity for the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure scheduled scaling to scale up to the desired compute level.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change the scaling policy to add more EC2 instances during each scaling operation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 782294,
          "date": "Fri 20 Jan 2023 14:42",
          "username": "\t\t\t\tdavid76x\t\t\t",
          "content": "C is correct.Goodluck everybody!",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 805080,
          "date": "Sat 11 Feb 2023 09:25",
          "username": "\t\t\t\tawscerts023\t\t\t",
          "content": "Reached here ! Did anyone schedule the real exam now ? How was it ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804346,
          "date": "Fri 10 Feb 2023 14:23",
          "username": "\t\t\t\tpal40sg\t\t\t",
          "content": "Thanks to everyone who contributed with answers :)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 802713,
          "date": "Thu 09 Feb 2023 02:15",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "GOOD LUCK EVERYONE :) YOU CAN DO THIS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 795199,
          "date": "Wed 01 Feb 2023 15:00",
          "username": "\t\t\t\tProfXsamson\t\t\t",
          "content": "C.  I'm here at the end, leaving this here for posterity sake 02/01/2023.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787577,
          "date": "Wed 25 Jan 2023 13:05",
          "username": "\t\t\t\tdedline\t\t\t",
          "content": "GL ALL!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776860,
          "date": "Sun 15 Jan 2023 18:20",
          "username": "\t\t\t\tmhmt4438\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/27868-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776002,
          "date": "Sat 14 Jan 2023 23:59",
          "username": "\t\t\t\tAninina\t\t\t",
          "content": "C.  Configure scheduled scaling to scale up to the desired compute level.<br><br>By configuring scheduled scaling, the solutions architect can set the Auto Scaling group to automatically scale up to the desired compute level at a specific time (1AM) when the batch job starts and then automatically scale down after the job is complete. This will allow the desired EC2 capacity to be reached quickly and also help in reducing the cost.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774429,
          "date": "Fri 13 Jan 2023 13:13",
          "username": "\t\t\t\tbamishr\t\t\t",
          "content": "Configure scheduled scaling to scale up to the desired compute level.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774361,
          "date": "Fri 13 Jan 2023 12:06",
          "username": "\t\t\t\tMorinator\t\t\t",
          "content": "predictable = schedule scaling",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#272",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company serves a dynamic website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The website needs to support multiple languages to serve customers around the world. The website's architecture is running in the us-west-1 Region and is exhibiting high request latency for users that are located in other parts of the world.<br><br>The website needs to serve requests quickly and efficiently regardless of a user's location. However, the company does not want to recreate the existing architecture across multiple Regions.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#272",
          "answers": [
            {
              "choice": "<p>A. Replace the existing architecture with a website that is served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin. Set the cache behavior settings to cache based on the Accept-Language request header.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to cache based on the Accept-Language request header.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway API that is integrated with the ALB.  Configure the API to use the HTTP integration type. Set up an API Gateway stage to enable the API cache based on the Accept-Language request header.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the EC2 instances and the ALB behind an Amazon Route 53 record set with a geolocation routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828143,
          "date": "Fri 03 Mar 2023 18:03",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827127,
          "date": "Thu 02 Mar 2023 17:52",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I think it's b",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815182,
          "date": "Mon 20 Feb 2023 12:49",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813333,
          "date": "Sat 18 Feb 2023 18:19",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "Configuring caching based on the language of the viewer<br>If you want CloudFront to cache different versions of your objects based on the language specified in the request, configure CloudFront to forward the Accept-Language header to your origin.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#273",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A rapidly growing ecommerce company is running its workloads in a single AWS Region. A solutions architect must create a disaster recovery (DR) strategy that includes a different AWS Region. The company wants its database to be up to date in the DR Region with the least possible latency. The remaining infrastructure in the DR Region needs to run at reduced capacity and must be able to scale up if necessary.<br><br>Which solution will meet these requirements with the LOWEST recovery time objective (RTO)?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#273",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Aurora global database with a pilot light deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon Aurora global database with a warm standby deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon RDS Multi-AZ DB instance with a pilot light deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon RDS Multi-AZ DB instance with a warm standby deployment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813812,
          "date": "Sun 19 Feb 2023 08:15",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "Note: The difference between pilot light and warm standby can sometimes be difficult to understand. Both include an environment in your DR Region with copies of your primary Region assets. The distinction is that pilot light cannot process requests without additional action taken first, whereas warm standby can handle traffic (at reduced capacity levels) immediately. The pilot light approach requires you to “turn on” servers, possibly deploy additional (non-core) infrastructure, and scale up, whereas warm standby only requires you to scale up (everything is already deployed and running). Use your RTO and RPO needs to help you choose between these approaches.<br><br>https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813347,
          "date": "Sat 18 Feb 2023 18:46",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "Option A is incorrect because while Amazon Aurora global database is a good solution for disaster recovery, pilot light deployment provides only a minimalistic setup and would require manual intervention to make the DR Region fully operational, which increases the recovery time.<br><br>Option B is a better choice than Option A as it provides a warm standby deployment, which is an automated and more scalable setup than pilot light deployment. In this setup, the database is replicated to the DR Region, and the standby instance can be brought up quickly in case of a disaster.<br><br>Option C is incorrect because Multi-AZ DB instances provide high availability, not disaster recovery.<br><br>Option D is a good choice for high availability, but it does not meet the requirement for DR in a different region with the least possible latency.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 811334,
          "date": "Fri 17 Feb 2023 04:02",
          "username": "\t\t\t\tkrisfromtw\t\t\t",
          "content": "should be D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, my friend. The question asks for deployment in another Region. Hence, it cannot be C or D.  <br>The answer is B because is Global (different regions) and Ward Standby has faster RTO than Pilot Light.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 817736,
          "date": "Wed 22 Feb 2023 11:56",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "No, my friend. The question asks for deployment in another Region. Hence, it cannot be C or D.  <br>The answer is B because is Global (different regions) and Ward Standby has faster RTO than Pilot Light.",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#274",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4 hours. The DR solution also needs to use the fewest possible AWS resources during normal operations.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#274",
          "answers": [
            {
              "choice": "<p>A. Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811075,
          "date": "Thu 16 Feb 2023 21:20",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Guys, sorry but I don't really have time to deepdive as my exam is soon. Based on chatGPT and my previous study the answer should be B<br>\\\"Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation,\\\" would likely be the most suitable solution for the given requirements.<br><br>This option allows for the creation of Amazon Machine Images (AMIs) to back up the EC2 instances, which can then be copied to a secondary AWS region to provide disaster recovery capabilities. The infrastructure deployment in the secondary region can be automated using AWS CloudFormation, which can help to reduce the amount of time and resources needed for deployment and management.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 820655,
          "date": "Fri 24 Feb 2023 16:13",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "So Weird , they have product for this > Elastic Disaster Recovery , but option is not given .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813821,
          "date": "Sun 19 Feb 2023 08:27",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "https://docs.aws.amazon.com/zh_cn/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html#backup-and-restore",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813350,
          "date": "Sat 18 Feb 2023 18:47",
          "username": "\t\t\t\tnickolaj\t\t\t",
          "content": "Option B would be the most operationally efficient solution for implementing a DR solution for the application, meeting the requirement of an RTO of less than 4 hours and using the fewest possible AWS resources during normal operations.<br><br>By creating Amazon Machine Images (AMIs) to back up the EC2 instances and copying them to a secondary AWS Region, the company can ensure that they have a reliable backup in the event of a disaster. By using AWS CloudFormation to automate infrastructure deployment in the secondary Region, the company can minimize the amount of time and effort required to set up the DR solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812654,
          "date": "Sat 18 Feb 2023 05:52",
          "username": "\t\t\t\tJoan111edu\t\t\t",
          "content": "the answer should be B<br>--->recovery time objective (RTO) of less than 4 hours.<br><br>https://docs.aws.amazon.com/zh_cn/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html#backup-and-restore",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#275",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales up to 20 instances during work hours, but scales down to 2 instances overnight. Staff are complaining that the application is very slow when the day begins, although it runs well by mid-morning.<br><br>How should the scaling be changed to address the staff complaints and keep costs to a minimum?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#275",
          "answers": [
            {
              "choice": "<p>A. Implement a scheduled action that sets the desired capacity to 20 shortly before the office opens.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement a step scaling action triggered at a lower CPU threshold, and decrease the cooldown period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement a target tracking action triggered at a lower CPU threshold, and decrease the cooldown period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement a scheduled action that sets the minimum and maximum capacity to 20 shortly before the office opens.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828852,
          "date": "Sat 04 Mar 2023 12:28",
          "username": "\t\t\t\tFourOfAKind\t\t\t",
          "content": "With step scaling and simple scaling, you choose scaling metrics and threshold values for the CloudWatch alarms that invoke the scaling process. You also define how your Auto Scaling group should be scaled when a threshold is in breach for a specified number of evaluation periods.<br><br>We strongly recommend that you use a target tracking scaling policy to scale on a metric like average CPU utilization or the RequestCountPerTarget metric from the Application Load Balancer.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827004,
          "date": "Thu 02 Mar 2023 15:34",
          "username": "\t\t\t\tfeddo\t\t\t",
          "content": "I vote for A<br>The desired capacity does not statically fix the size of the group.<br><br>Desired capacity: Represents the **initial capacity** of the Auto Scaling group at the time of creation. An Auto Scaling group attempts to maintain the desired capacity. It starts by launching the number of instances that are specified for the desired capacity, and maintains this number of instances **as long as there are no scaling policies** or scheduled actions attached to the Auto Scaling group.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816865,
          "date": "Tue 21 Feb 2023 17:45",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "C:<br>target tracking may be a better option for ensuring the application remains responsive during high-traffic periods while also minimizing costs during periods of low usage. The target tracking can be used without CloudWatch alarms, as it relies on CloudWatch metrics directly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815214,
          "date": "Mon 20 Feb 2023 13:34",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Between closing and opening times there'll be enough \\\"cooling down\\\" period if necessary, however, I don't see it's relationship with the solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 811963,
          "date": "Fri 17 Feb 2023 15:18",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "I would personally go for C, Implementing a target tracking scaling policy would allow the Auto Scaling group to adjust its capacity in response to changes in demand while keeping the specified metric at the target value<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-strategies.html<br><br>Option A is not the best solution because it sets the desired capacity to 20 shortly before the office opens, but it does not take into account the actual demand of the application. This means that the company will be paying for 20 instances all the time, even during the off-hours, which will result in unnecessary costs. Additionally, there may be days when the demand is lower or higher than expected, so it is not a scalable solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How is decreasing cooldown related to question?</li><li>I think because by decreasing the cooldown, the scale up and down will be more sensitive, more in \\\"real time\\\" I would say.</li><li>Honestly not completely sure, but the rest of the options either don't think for the MOST Cost effective solution (as when directly placed on 20 this will generate cost|) or are irrelevant</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812613,
          "date": "Sat 18 Feb 2023 04:40",
          "username": "\t\t\t\tRocky2023\t\t\t",
          "content": "How is decreasing cooldown related to question?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think because by decreasing the cooldown, the scale up and down will be more sensitive, more in \\\"real time\\\" I would say.</li><li>Honestly not completely sure, but the rest of the options either don't think for the MOST Cost effective solution (as when directly placed on 20 this will generate cost|) or are irrelevant</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817829,
          "date": "Wed 22 Feb 2023 13:50",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "I think because by decreasing the cooldown, the scale up and down will be more sensitive, more in \\\"real time\\\" I would say.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815414,
          "date": "Mon 20 Feb 2023 16:02",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Honestly not completely sure, but the rest of the options either don't think for the MOST Cost effective solution (as when directly placed on 20 this will generate cost|) or are irrelevant",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811681,
          "date": "Fri 17 Feb 2023 10:21",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#276",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An Amazon RDS for Oracle instance is the application' s data layer that uses Oracle-specific PL/SQL functions. Traffic to the application has been steadily increasing. This is causing the EC2 instances to become overloaded and the RDS instance to run out of storage. The Auto Scaling group does not have any scaling metrics and defines the minimum healthy instance count only. The company predicts that traffic will continue to increase at a steady but unpredictable rate before leveling off.<br><br>What should a solutions architect do to ensure the system can automatically scale for the increased traffic? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#276",
          "answers": [
            {
              "choice": "<p>A. Configure storage Auto Scaling on the RDS for Oracle instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon Aurora to use Auto Scaling storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an alarm on the RDS for Oracle instance for low free storage space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Auto Scaling group to use the average CPU as the scaling metric.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure the Auto Scaling group to use the average free memory as the scaling metric.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826495,
          "date": "Thu 02 Mar 2023 05:28",
          "username": "\t\t\t\tNel8\t\t\t",
          "content": "My answer is B & D. .. B.  Migrate the database to Amazon Aurora to use Auto Scaling Storage. --- Aurora storage is also self-healing. Data blocks and disks are continuously scanned for errors and repaired automatically.D.  Configurate the Auto Scaling group to sue the average CPU as the scaling metric. -- Good choice.<br><br>I believe either A & C or B & D options will work.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In this question, you have Oracle DB, and Amazon Aurora is for MySQL/PostgreSQL. A and D are the correct choices.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 828856,
          "date": "Sat 04 Mar 2023 12:35",
          "username": "\t\t\t\tFourOfAKind\t\t\t",
          "content": "In this question, you have Oracle DB, and Amazon Aurora is for MySQL/PostgreSQL. A and D are the correct choices.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 817371,
          "date": "Wed 22 Feb 2023 03:04",
          "username": "\t\t\t\tJa13\t\t\t",
          "content": "a and d",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 816892,
          "date": "Tue 21 Feb 2023 18:02",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "A and D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 816474,
          "date": "Tue 21 Feb 2023 12:14",
          "username": "\t\t\t\tGwonLEE\t\t\t",
          "content": "a and d",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 815226,
          "date": "Mon 20 Feb 2023 13:44",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 812667,
          "date": "Sat 18 Feb 2023 06:18",
          "username": "\t\t\t\tJoan111edu\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46534-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 812637,
          "date": "Sat 18 Feb 2023 05:21",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "answer is A and D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://www.examtopics.com/discussions/amazon/view/46534-exam-aws-certified-solutions-architect-associate-saa-c02/#:~:text=%22This%20overloads%20the%20EC2%20instances%20and%20causes%20the,the%20RDS%20for%20Oracle%20instance%20upvoted%202%20times</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812638,
          "date": "Sat 18 Feb 2023 05:21",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/46534-exam-aws-certified-solutions-architect-associate-saa-c02/#:~:text=%22This%20overloads%20the%20EC2%20instances%20and%20causes%20the,the%20RDS%20for%20Oracle%20instance%20upvoted%202%20times",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812604,
          "date": "Sat 18 Feb 2023 04:28",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "A and D are the Answers",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#277",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides an online service for posting video content and transcoding it for use by any mobile platform. The application architecture uses Amazon Elastic File System (Amazon EFS) Standard to collect and store the videos so that multiple Amazon EC2 Linux instances can access the video content for processing. As the popularity of the service has grown over time, the storage costs have become too expensive.<br><br>Which storage solution is MOST cost-effective?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#277",
          "answers": [
            {
              "choice": "<p>A. Use AWS Storage Gateway for files to store and process the video content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Storage Gateway for volumes to store and process the video content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon EFS for storing the video content. Once processing is complete, transfer the files to Amazon Elastic Block Store (Amazon EBS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 for storing the video content. Move the files temporarily over to an Amazon Elastic Block Store (Amazon EBS) volume attached to the server for processing.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812269,
          "date": "Fri 17 Feb 2023 20:23",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Storage gateway is not used for storing content - only to transfer to the Cloud",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 831564,
          "date": "Tue 07 Mar 2023 05:58",
          "username": "\t\t\t\tBrak\t\t\t",
          "content": "It can't be D, since there are multiple servers accessing the video files which rules out EBS. File Gateway provides a shared filesystem to replace EFS, but uses S3 for storage to reduce costs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816914,
          "date": "Tue 21 Feb 2023 18:16",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Using Amazon S3 for storing video content is the best way for cost-effectiveness I think. But I am still confused about why moved the data to EBS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A better solution would be to use a transcoding service like Amazon Elastic Transcoder to process the video content directly from Amazon S3. This would eliminate the need for storing the content on an EBS volume, reduce storage costs, and simplify the architecture by removing the need for managing EBS volumes.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 816917,
          "date": "Tue 21 Feb 2023 18:19",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "A better solution would be to use a transcoding service like Amazon Elastic Transcoder to process the video content directly from Amazon S3. This would eliminate the need for storing the content on an EBS volume, reduce storage costs, and simplify the architecture by removing the need for managing EBS volumes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 816397,
          "date": "Tue 21 Feb 2023 10:31",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "A looks right . File Gateway is S3 , but exposes it as NFS/SMB . So no need for costly retrieval like option D , or C consuming expensive EBS .",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816395,
          "date": "Tue 21 Feb 2023 10:31",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "A looks right . File Gateway is S3 , but exposes it as NFS/SMB . So no need for costly retrieval like option D , or C consuming expensive EBS .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815422,
          "date": "Mon 20 Feb 2023 16:08",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Can someone please explain or provide information why not C? If we go with option D it states that we store the Content in S3 which is indeed cheaper, but then we move them to EBS for processing, how are multiple Linux instances, gonna process the same videos from EBS when they can't read them simultaneously. <br>Where for Option C, we indeed keep the EFS, then we process from there and move them to EBS for reading? seems more logical to me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815223,
          "date": "Mon 20 Feb 2023 13:43",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Use Amazon S3 for storing the video content. Move the files temporarily over to an Amazon Elastic Block Store (Amazon EBS) volume attached to the server for processing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811344,
          "date": "Fri 17 Feb 2023 04:22",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Most Cost Effective is S3",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#278",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum-latency response to high-traffic queries for the employee data and must protect any sensitive data. The company also needs to receive monthly email messages if any financial information is present in the employee data.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#278",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly events to AWS Lambda.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight to publish analysis dashboards and share the dashboards with users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818799,
          "date": "Thu 23 Feb 2023 05:38",
          "username": "\t\t\t\tPRASAD180\t\t\t",
          "content": "BE is crt 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816935,
          "date": "Tue 21 Feb 2023 18:33",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "B and E<br>To send monthly email messages, an SNS service is required.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 814168,
          "date": "Sun 19 Feb 2023 15:30",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "B and E",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 814096,
          "date": "Sun 19 Feb 2023 14:10",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "Data in hierarchies : Amazon DynamoDBB.  Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month.<br><br>Sensitive Info: Amazon MacieE.  Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#279",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that is backed by an Amazon DynamoDB table. The company's compliance requirements specify that database backups must be taken every month, must be available for 6 months, and must be retained for 7 years.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#279",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Backup plan to back up the DynamoDB table on the first day of each month. Specify a lifecycle policy that transitions the backup to cold storage after 6 months. Set the retention period for each backup to 7 years.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a DynamoDB on-demand backup of the DynamoDB table on the first day of each month. Transition the backup to Amazon S3 Glacier Flexible Retrieval after 6 months. Create an S3 Lifecycle policy to delete backups that are older than 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS SDK to develop a script that creates an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the script on the first day of each month. Create a second script that will run on the second day of each month to transition DynamoDB backups that are older than 6 months to cold storage and to delete backups that are older than 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS CLI to create an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the command on the first day of each month with a cron expression. Specify in the command to transition the backups to cold storage after 6 months and to delete the backups after 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816625,
          "date": "Tue 21 Feb 2023 14:42",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "A is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816057,
          "date": "Tue 21 Feb 2023 01:36",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814171,
          "date": "Sun 19 Feb 2023 15:32",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "A is the correct answe",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813342,
          "date": "Sat 18 Feb 2023 18:33",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "A is the Answer<br><br>can be used to create backup schedules and retention policies for DynamoDB tables",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812952,
          "date": "Sat 18 Feb 2023 13:48",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "A.  Create an AWS Backup plan to back up the DynamoDB table on the first day of each month. Specify a lifecycle policy that transitions the backup to cold storage after 6 months. Set the retention period for each backup to 7 years.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#280",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the company's Amazon S3 buckets. The company needs to perform advanced analyses on the logs and build visualizations.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#280",
          "answers": [
            {
              "choice": "<p>A. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811337,
          "date": "Fri 17 Feb 2023 04:07",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is B - Quicksite creating data visualizations<br><br>https://docs.aws.amazon.com/quicksight/latest/user/welcome.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 816969,
          "date": "Tue 21 Feb 2023 19:10",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "B because athena can be used to analyse data in s3 buckets and AWS quicksight is literally used to create visual representation of data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816808,
          "date": "Tue 21 Feb 2023 17:11",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Using Athena to query the CloudFront logs in the S3 bucket and QuickSight to visualize the results is the best solution because it is cost-effective, scalable, and requires no infrastructure setup. It also provides a robust solution that enables the company to perform advanced analysis and build interactive visualizations without the need for a dedicated team of developers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 814173,
          "date": "Sun 19 Feb 2023 15:34",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Yes B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 814144,
          "date": "Sun 19 Feb 2023 15:02",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Correct answer should be B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813608,
          "date": "Sun 19 Feb 2023 01:39",
          "username": "\t\t\t\tNamrash\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812955,
          "date": "Sat 18 Feb 2023 13:50",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "Amazon Athena can be used to analyze data in S3 buckets using standard SQL queries without requiring any data transformation. By using Athena, a solutions architect can easily and efficiently query the CloudFront logs stored in the S3 bucket. The results of the queries can be visualized using Amazon QuickSight, which provides powerful data visualization capabilities and easy-to-use dashboards. Together, Athena and QuickSight provide a cost-effective and scalable solution to analyze CloudFront logs and build visualizations.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812713,
          "date": "Sat 18 Feb 2023 07:24",
          "username": "\t\t\t\tJoan111edu\t\t\t",
          "content": "should be B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812347,
          "date": "Fri 17 Feb 2023 21:41",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/blogs/big-data/harmonize-query-and-visualize-data-from-various-providers-using-aws-glue-amazon-athena-and-amazon-quicksight/<br>https://docs.aws.amazon.com/comprehend/latest/dg/tutorial-reviews-visualize.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>attached file realted with B</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 823097,
          "date": "Mon 27 Feb 2023 02:12",
          "username": "\t\t\t\ttellmenowwwww\t\t\t",
          "content": "attached file realted with B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#281",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#281",
          "answers": [
            {
              "choice": "<p>A. Enable a Multi-AZ deployment for the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable auto scaling for the DB instance in one Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811348,
          "date": "Fri 17 Feb 2023 04:28",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Correct Answer is A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 827264,
          "date": "Thu 02 Mar 2023 19:54",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "My vote is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817294,
          "date": "Wed 22 Feb 2023 00:56",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "A:<br>By using Multi-AZ deployment, the company can achieve an RPO of less than 1 second because the standby instance is always in sync with the primary instance, ensuring that data changes are continuously replicated.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 817290,
          "date": "Wed 22 Feb 2023 00:47",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Agree with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816091,
          "date": "Tue 21 Feb 2023 02:47",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Multi-AZ is a synchronous communication with the Master in \\\"real time\\\" and fail over will be almost instant.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814690,
          "date": "Mon 20 Feb 2023 01:26",
          "username": "\t\t\t\tGwonLEE\t\t\t",
          "content": "correct is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813606,
          "date": "Sun 19 Feb 2023 01:39",
          "username": "\t\t\t\tNamrash\t\t\t",
          "content": "A should be correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812714,
          "date": "Sat 18 Feb 2023 07:25",
          "username": "\t\t\t\tJoan111edu\t\t\t",
          "content": "should be A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#282",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC.  An Application Load Balancer (ALB) that extends across the public subnets directs web traffic to the EC2 instances. The company wants to implement new security measures to restrict inbound traffic from the ALB to the EC2 instances while preventing access from any other source inside or outside the private subnet of the EC2 instances.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#282",
          "answers": [
            {
              "choice": "<p>A. Configure a route in a route table to direct traffic from the internet to the private IP addresses of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the EC2 instances into the public subnet. Give the EC2 instances a set of Elastic IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the security group for the ALB to allow any TCP traffic on any port.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816093,
          "date": "Tue 21 Feb 2023 02:48",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812960,
          "date": "Sat 18 Feb 2023 13:54",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB.  This ensures that only the traffic originating from the ALB is allowed access to the EC2 instances in the private subnet, while denying any other traffic from other sources. The other options do not provide a suitable solution to meet the stated requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812029,
          "date": "Fri 17 Feb 2023 16:04",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "B.  Configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#283",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research company runs experiments that are powered by a simulation application and a visualization application. The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The visualization application is a Windows desktop application that displays the simulation output and requires an SMB file system.<br><br>The company maintains two synchronized file systems. This strategy is causing data duplication and inefficient resource usage. The company needs to migrate the applications to AWS without making code changes to either application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#283",
          "answers": [
            {
              "choice": "<p>A. Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File Gateway for storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between the applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811350,
          "date": "Fri 17 Feb 2023 04:33",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is D",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 827221,
          "date": "Thu 02 Mar 2023 19:23",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "windows => FSX<br>we didn't mention containers => can't be ECS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816102,
          "date": "Tue 21 Feb 2023 02:59",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon FSx for NetApp ONTAP provides shared storage between Linux and Windows file systems.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814976,
          "date": "Mon 20 Feb 2023 08:56",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "Amazon FSx for NetApp ONTAP is a fully managed service that provides shared file storage built on NetApp's popular ONTAP file system. It supports NFS, SMB, and iSCSI protocols2 and also allows multi-protocol access to the same data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813916,
          "date": "Sun 19 Feb 2023 10:39",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "Amazon FSx for NetApp ONTAP is a fully-managed shared storage service built on NetApp's popular ONTAP file system. Amazon FSx for NetApp ONTAP provides the popular features, performance, and APIs of ONTAP file systems with the agility, scalability, and simplicity of a fully managed AWS service, making it easier for customers to migrate on-premises applications that rely on NAS appliances to AWS. FSx for ONTAP file systems are similar to on-premises NetApp clusters. Within each file system that you create, you also create one or more storage virtual machines (SVMs). These are isolated file servers each with their own endpoints for NFS, SMB, and management access, as well as authentication (for both administration and end-user data access). In turn, each SVM has one or more volumes which store your data.<br>https://aws.amazon.com/de/blogs/storage/getting-started-cloud-file-storage-with-amazon-fsx-for-netapp-ontap-using-netapp-management-tools/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812799,
          "date": "Sat 18 Feb 2023 10:03",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "B is correct I believe",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#284",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#284",
          "answers": [
            {
              "choice": "<p>A. Run a query with Amazon Athena to generate the report.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a report in Cost Explorer and download the report.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Access the bill details from the billing dashboard and download the bill.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813106,
          "date": "Sat 18 Feb 2023 15:39",
          "username": "\t\t\t\tpcops\t\t\t",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812290,
          "date": "Fri 17 Feb 2023 20:43",
          "username": "\t\t\t\tfulingyu288\t\t\t",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 811351,
          "date": "Fri 17 Feb 2023 04:34",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#285",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message. The company anticipates that there will be fewer than 100 site visits each month.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#285",
          "answers": [
            {
              "choice": "<p>A. Host a dynamic contact form page in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to any third-party email provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway endpoint with an AWS Lambda backend that makes a call to Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert the static webpage to dynamic by deploying Amazon Lightsail. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a t2.micro Amazon EC2 instance. Deploy a LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827286,
          "date": "Thu 02 Mar 2023 20:02",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Both api gateway and lambda are serverless so charges apply only on the 100 form submissions per month",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 819381,
          "date": "Thu 23 Feb 2023 17:08",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "After looking at cost of Workmail compared to SES - probably 'B' is better",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818095,
          "date": "Wed 22 Feb 2023 18:18",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Create a t2 micro Amazon EC2 instance. Deploy a LAMP (Linux Apache MySQL, PHP/Perl/Python) stack to host the webpage (free open-source). Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail. This solution will provide the company with the necessary components to host the contact form page and integrate it with Amazon WorkMail at the lowest cost. Option A requires the use of Amazon ECS, which is more expensive than EC2, and Option B requires the use of Amazon API Gateway, which is also more expensive than EC2. Option C requires the use of Amazon Lightsail, which is more expensive than EC2.<br>https://aws.amazon.com/what-is/lamp-stack/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816608,
          "date": "Tue 21 Feb 2023 14:15",
          "username": "\t\t\t\tPalanda\t\t\t",
          "content": "It's B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816131,
          "date": "Tue 21 Feb 2023 03:38",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B allows the company to create an API endpoint using AWS Lambda, which is a cost-effective and scalable solution for a contact form with low traffic. The backend can make a call to Amazon SES to send email notifications, which simplifies the process and reduces complexity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815659,
          "date": "Mon 20 Feb 2023 19:26",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Correct answer is B.  https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813244,
          "date": "Sat 18 Feb 2023 17:05",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "it is B : https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812135,
          "date": "Fri 17 Feb 2023 17:51",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html<br>Using AWS Lambda with Amazon API Gateway - AWS Lambda<br>https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html<br>https://aws.amazon.com/lambda/faqs/<br>AWS Lambda FAQs<br>https://aws.amazon.com/lambda/faqs/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#286",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website uses a database backend. The company notices that the website does not reflect updates that have been made in the website's Git repository. The company checks the continuous integration and continuous delivery (CI/CD) pipeline between the Git repository and Amazon S3. The company verifies that the webhooks are configured properly and that the CI/CD pipeline is sending messages that indicate successful deployments.<br><br>A solutions architect needs to implement a solution that displays the updates on the website.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#286",
          "answers": [
            {
              "choice": "<p>A. Add an Application Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add Amazon ElastiCache for Redis or Memcached to the database layer of the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invalidate the CloudFront cache.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Certificate Manager (ACM) to validate the website's SSL certificate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813626,
          "date": "Sun 19 Feb 2023 02:15",
          "username": "\t\t\t\tNamrash\t\t\t",
          "content": "B should be the right one",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812297,
          "date": "Fri 17 Feb 2023 20:48",
          "username": "\t\t\t\tfulingyu288\t\t\t",
          "content": "Invalidate the CloudFront cache: The solutions architect should invalidate the CloudFront cache to ensure that the latest version of the website is being served to users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812126,
          "date": "Fri 17 Feb 2023 17:39",
          "username": "\t\t\t\tNeorem\t\t\t",
          "content": "We need to create an Cloudfront invalidation",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812066,
          "date": "Fri 17 Feb 2023 16:32",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "C.  Invalidate the CloudFront cache.<br>Problem is the CF cache. After invalidating the CloudFront cache, CF will be forces to read the updated static page from the S3 and the S3 changes will start being visible.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#287",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application has three tiers: an application tier, a business tier, and a database tier with Microsoft SQL Server. The company wants to use specific features of SQL Server such as native backups and Data Quality Services. The company also needs to share files for processing between the tiers.<br><br>How should a solutions architect design the architecture to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#287",
          "answers": [
            {
              "choice": "<p>A. Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing between the tiers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File Server for file sharing between the tiers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for file sharing between the tiers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817436,
          "date": "Wed 22 Feb 2023 04:37",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is B:<br>A: Incorrect> FSx file Gateway designed for low latency and efficient access to in-cloud FSx for Windows File Server file shares from your on-premises facility. <br><br>B: Correct> This solution will allow the company to host all three tiers on Amazon EC2 instances while using Amazon FSx for Windows File Server to provide Windows-based file sharing between the tiers. This will allow the company to use specific features of SQL Server, such as native backups and Data Quality Services, while sharing files for processing between the tiers.<br><br>C: Incorrect> Currently, Amazon EFS supports the NFSv4.1 protocol and does not natively support the SMB protocol, and can't be used in Windows instances yet.<br><br>D: Incorrect> Amazon EBS is a block-level storage solution that is typically used to store data at the operating system level, rather than for file sharing between servers.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817298,
          "date": "Wed 22 Feb 2023 01:20",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Why not C?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Currently, Amazon EFS supports the NFSv4.1 protocol and does not natively support the SMB protocol, and can't be used in Windows instances yet.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817424,
          "date": "Wed 22 Feb 2023 04:21",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Currently, Amazon EFS supports the NFSv4.1 protocol and does not natively support the SMB protocol, and can't be used in Windows instances yet.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816697,
          "date": "Tue 21 Feb 2023 15:57",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "Yup B . RDS will not work , Native Backup only to S3 , and Data Quality is not supported , so all EC2 . https://aws.amazon.com/premiumsupport/knowledge-center/native-backup-rds-sql-server/ andhttps://www.sqlserver-dba.com/2021/07/aws-rds-sql-server-limitations.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After further research, I concur that the correct answer is B.  Native Back up and Data Quality not supported on RDS for Ms SQL</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816854,
          "date": "Tue 21 Feb 2023 17:39",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "After further research, I concur that the correct answer is B.  Native Back up and Data Quality not supported on RDS for Ms SQL",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 816177,
          "date": "Tue 21 Feb 2023 04:57",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "C.  <br>Host the application tier and the business tier on Amazon EC2 instances. <br>Host the database tier on Amazon RDS. <br>Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers.<br><br>This solution allows the company to use specific features of SQL Server such as native backups and Data Quality Services, by hosting the database tier on Amazon RDS. It also enables file sharing between the tiers using Amazon EFS, which is a fully managed, highly available, and scalable file system. Amazon EFS provides shared access to files across multiple instances, which is important for processing files between the tiers. Additionally, hosting the application and business tiers on Amazon EC2 instances provides the company with the flexibility to configure and manage the environment according to their requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813930,
          "date": "Sun 19 Feb 2023 11:05",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "Data Quality Services: If this feature is critical to your workload, consider choosing Amazon RDS Custom or Amazon EC2.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-sql-server/comparison.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812069,
          "date": "Fri 17 Feb 2023 16:34",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "Correct Answer: B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#288",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#288",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 Standard bucket with access to the web servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812074,
          "date": "Fri 17 Feb 2023 16:38",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "Since no code change is permitted, below choice makes sense for the unix server's file sharing:C.  Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827394,
          "date": "Thu 02 Mar 2023 21:19",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "No application changes are allowed and EFS is compatible with Linux",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816189,
          "date": "Tue 21 Feb 2023 05:30",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "C is the answer: <br>Create an Amazon Elastic File System (Amazon EFS) file system. <br>Mount the EFS file system on all web servers.<br><br>To meet the requirements of providing a shared file store for Linux-based web servers without making changes to the application, using an Amazon EFS file system is the best solution. <br>Amazon EFS is a managed NFS file system service that provides shared access to files across multiple Linux-based instances, which makes it suitable for this use case.<br><br>Amazon S3 is not ideal for this scenario since it is an object storage service and not a file system, and it requires additional tools or libraries to mount the S3 bucket as a file system. <br><br>Amazon CloudFront can be used to improve content delivery performance but is not necessary for this requirement. <br><br>Additionally, Amazon EBS volumes can only be mounted to one instance at a time, so it is not suitable for sharing files across multiple instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But what about aws ebs multi attach?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828350,
          "date": "Fri 03 Mar 2023 21:04",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "But what about aws ebs multi attach?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#289",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS Lambda function that needs read access to an Amazon S3 bucket that is located in the same AWS account.<br><br>Which solution will meet these requirements in the MOST secure manner?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#289",
          "answers": [
            {
              "choice": "<p>A. Apply an S3 bucket policy that grants read access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Embed an access key and a secret key in the Lambda function's code to grant the required IAM permissions for read access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to all S3 buckets in the account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827396,
          "date": "Thu 02 Mar 2023 21:20",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "B is only for one bucket and you want to use Role based security here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818606,
          "date": "Thu 23 Feb 2023 01:55",
          "username": "\t\t\t\tJa13\t\t\t",
          "content": "C, it says MOST secure manner, so only to one bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817033,
          "date": "Tue 21 Feb 2023 20:03",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812983,
          "date": "Sat 18 Feb 2023 14:08",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "This is the most secure and recommended way to provide an AWS Lambda function with access to an S3 bucket. It involves creating an IAM role that the Lambda function assumes, and attaching an IAM policy to the role that grants the necessary permissions to read from the S3 bucket.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812737,
          "date": "Sat 18 Feb 2023 07:51",
          "username": "\t\t\t\tJoan111edu\t\t\t",
          "content": "B.  Least of privilege",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#290",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web application on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling group that scales in response to user demand. The company wants to optimize cost savings without making a long-term commitment.<br><br>Which EC2 instance purchasing option should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#290",
          "answers": [
            {
              "choice": "<p>A. Dedicated Instances only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. On-Demand Instances only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A mix of On-Demand Instances and Spot Instances<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. A mix of On-Demand Instances and Reserved Instances<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827398,
          "date": "Thu 02 Mar 2023 21:25",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "It's about COST, not operational efficiency for this question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818521,
          "date": "Thu 23 Feb 2023 00:02",
          "username": "\t\t\t\tSamuel03\t\t\t",
          "content": "Should be C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816900,
          "date": "Tue 21 Feb 2023 18:09",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816725,
          "date": "Tue 21 Feb 2023 16:21",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "C - WEB apps , mostly Stateless , and ASG support OnDemand and Spot mix, in fact , you can prioritize to have Ondemand , before it uses Spot > https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816693,
          "date": "Tue 21 Feb 2023 15:53",
          "username": "\t\t\t\tdesignmood22\t\t\t",
          "content": "Answer : C.  A mix of On-Demand Instances and Spot Instances",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816264,
          "date": "Tue 21 Feb 2023 06:54",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "To optimize cost savings without making a long-term commitment, a mix of On-Demand Instances and Spot Instances would be the best EC2 instance purchasing option to recommend.<br>By combining On-Demand and Spot Instances, the company can take advantage of the cost savings offered by Spot Instances during periods of low demand while maintaining the reliability and stability of On-Demand Instances during periods of high demand. This provides a cost-effective solution that can scale with user demand without making a long-term commitment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 815451,
          "date": "Mon 20 Feb 2023 16:25",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "In this scenario, a mix of On-Demand Instances and Spot Instances is the most cost-effective option, as it can provide significant cost savings while maintaining application availability. The Auto Scaling group can be configured to launch Spot Instances when the demand is high and On-Demand Instances when demand is low or when Spot Instances are not available. This approach provides a balance between cost savings and reliability.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 814745,
          "date": "Mon 20 Feb 2023 03:22",
          "username": "\t\t\t\tminglu\t\t\t",
          "content": "In my opinion, it is C, on demand instances and spot instances can be in a single auto scaling group.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#291",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company uses Amazon CloudFront for its publicly available streaming video content. The company wants to secure the video content that is hosted in Amazon S3 by controlling who has access. Some of the company's users are using a custom HTTP client that does not support cookies. Some of the company's users are unable to change the hardcoded URLs that they are using for access.<br><br>Which services or methods will meet these requirements with the LEAST impact to the users? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#291",
          "answers": [
            {
              "choice": "<p>A. Signed cookies<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Signed URLs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS AppSync<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. JSON Web Token (JWT)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. AWS Secrets Manager<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 829961,
          "date": "Sun 05 Mar 2023 15:12",
          "username": "\t\t\t\tjohnmcclane78\t\t\t",
          "content": "B.  Signed URLs - This method allows the media company to control who can access the video content by creating a time-limited URL with a cryptographic signature. This URL can be distributed to the users who are unable to change the hardcoded URLs they are using for access, and they can access the content without needing to support cookies.<br>D.  JSON Web Token (JWT) - This method allows the media company to control who can access the video content by creating a secure token that contains user authentication and authorization information. This token can be distributed to the users who are using a custom HTTP client that does not support cookies. The users can include this token in their requests to access the content without needing to support cookies.<br><br>Therefore, options B and D are the correct answers.<br><br>Option A (Signed cookies) would not work for users who are using a custom HTTP client that does not support cookies. Option C (AWS AppSync) is not relevant to the requirement of securing video content. Option E (AWS Secrets Manager) is a service used for storing and retrieving secrets, which is not relevant to the requirement of securing video content.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 826814,
          "date": "Thu 02 Mar 2023 13:06",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "https://aws.amazon.com/vi/blogs/media/awse-protecting-your-media-assets-with-token-authentication/<br>JSON Web Token (JWT) need using with Lambda@Edge",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826032,
          "date": "Wed 01 Mar 2023 16:34",
          "username": "\t\t\t\tHaineHess\t\t\t",
          "content": "b d seems good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 818276,
          "date": "Wed 22 Feb 2023 20:14",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "I thought that option A was totally wrong, because the question mentions \\\"HTTP client does not support cookies\\\". However it is right, along with option B.  Check the link bellow, first paragraph. <br>https://aws.amazon.com/blogs/media/secure-content-using-cloudfront-functions/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks for this!What a tricky question.If the client doesn't support cookies, THEN they use the signed S3 Urls.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 827406,
          "date": "Thu 02 Mar 2023 21:30",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Thanks for this!What a tricky question.If the client doesn't support cookies, THEN they use the signed S3 Urls.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818121,
          "date": "Wed 22 Feb 2023 18:39",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "It says some use a custom HTTP client that does not support cookies - those will use signed URLs which has precedence over cookies<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 817751,
          "date": "Wed 22 Feb 2023 12:10",
          "username": "\t\t\t\tpagom\t\t\t",
          "content": "B, D<br>Presigned URL uses the GET Parameter. That is, authentication is performed using Query String. The string containing Query String is a URI, not a URL. Therefore, B can be the answer.<br>The authentication method using JWT Token may use HTTP Header. This is not using cookies. Therefore, D can be the answer.<br>Please understand even if the sentence is awkward. I am not an English speaker.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 816516,
          "date": "Tue 21 Feb 2023 13:01",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "Using Appsync is possible<br>https://stackoverflow.com/questions/48495338/how-to-upload-file-to-aws-s3-using-aws-appsync",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816272,
          "date": "Tue 21 Feb 2023 07:03",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B.  Signed URLs: Signed URLs provide access to specific objects in Amazon S3 and can be generated with an expiration time, which means that the URL will only be valid for a specific period. This method does not require the use of cookies or changes to the hardcoded URLs used by some of the users.<br>D.  JSON Web Token (JWT): JWT is a method for securely transmitting information between parties as a JSON object. It can be used to authenticate users and control access to resources, including streaming video content hosted in Amazon S3. This method does not require the use of cookies, and it can be used with custom HTTP clients that support header-based authentication.<br><br>Therefore, the media company can use Signed URLs and JWT to control access to their streaming video content hosted in Amazon S3, without impacting the users who are unable to change the hardcoded URLs they are using or those using a custom HTTP client that does not support cookies.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/vi/blogs/media/awse-protecting-your-media-assets-with-token-authentication/<br>JSON Web Token (JWT) need using with Lambda@Edge</li><li>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 826816,
          "date": "Thu 02 Mar 2023 13:06",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "https://aws.amazon.com/vi/blogs/media/awse-protecting-your-media-assets-with-token-authentication/<br>JSON Web Token (JWT) need using with Lambda@Edge",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826826,
          "date": "Thu 02 Mar 2023 13:11",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815453,
          "date": "Mon 20 Feb 2023 16:27",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "I would go A and B based on the question's description",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815365,
          "date": "Mon 20 Feb 2023 15:25",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "Signed URLs are URLs that grant temporary access to an S3 object. They include a signature that verifies the authenticity of the request, as well as an expiration date that limits the time during which the URL is valid. This solution will work for users who are using custom HTTP clients that do not support cookies.<br><br>Signed cookies are similar to signed URLs, but they use cookies to grant temporary access to S3 objects. This solution will work for users who are unable to change the hardcoded URLs that they are using for access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 814068,
          "date": "Sun 19 Feb 2023 13:39",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "The question says \\\"custom HTTP client that does not support cookies\\\". Then how can A be the answer ??",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813197,
          "date": "Sat 18 Feb 2023 16:28",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813195,
          "date": "Sat 18 Feb 2023 16:26",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "Syned URL and cookies",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813126,
          "date": "Sat 18 Feb 2023 15:51",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "I would go for A,B given the question's description",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#292",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is preparing a new data platform that will ingest real-time streaming data from multiple sources. The company needs to transform the data before writing the data to Amazon S3. The company needs the ability to use SQL to query the transformed data.<br><br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#292",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Kinesis Data Streams to stream the data. Use Amazon Kinesis Data Analytics to transform the data. Use Amazon Kinesis Data Firehose to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use AWS Glue to transform the data and to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Database Migration Service (AWS DMS) to ingest the data. Use Amazon EMR to transform the data and to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use Amazon Kinesis Data Analytics to transform the data and to write the data to Amazon S3. Use the Amazon RDS query editor to query the transformed data from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Kinesis Data Streams to stream the data. Use AWS Glue to transform the data. Use Amazon Kinesis Data Firehose to write the data to Amazon S3. Use the Amazon RDS query editor to query the transformed data from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827413,
          "date": "Thu 02 Mar 2023 21:38",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "OK, for B I did some research, https://docs.aws.amazon.com/glue/latest/dg/add-job-streaming.html<br><br>\\\"You can create streaming extract, transform, and load (ETL) jobs that run continuously, consume data from streaming sources like Amazon Kinesis Data Streams, Apache Kafka, and Amazon Managed Streaming for Apache Kafka (Amazon MSK). The jobs cleanse and transform the data, and then load the results into Amazon S3 data lakes or JDBC data stores.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 825942,
          "date": "Wed 01 Mar 2023 15:09",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "may Amazon RDS query editor to query the transformed data from Amazon S3 ?<br>i don't think so, plz get link docs to that",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817307,
          "date": "Wed 22 Feb 2023 01:33",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Why not A & D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>may Amazon RDS query editor to query the transformed data from Amazon S3 ?<br>i don't think so, plz get link docs to that</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 825943,
          "date": "Wed 01 Mar 2023 15:09",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "may Amazon RDS query editor to query the transformed data from Amazon S3 ?<br>i don't think so, plz get link docs to that",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816938,
          "date": "Tue 21 Feb 2023 18:37",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 816695,
          "date": "Tue 21 Feb 2023 15:54",
          "username": "\t\t\t\tdesignmood22\t\t\t",
          "content": "Answer is : A & B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813354,
          "date": "Sat 18 Feb 2023 18:54",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is A and B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 813135,
          "date": "Sat 18 Feb 2023 15:53",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "A and B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#293",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises volume backup solution that has reached its end of life. The company wants to use AWS as part of a new backup solution and wants to maintain local access to all the data while it is backed up on AWS. The company wants to ensure that the data backed up on AWS is automatically and securely transferred.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#293",
          "answers": [
            {
              "choice": "<p>A. Use AWS Snowball to migrate data out of the on-premises solution to Amazon S3. Configure on-premises systems to mount the Snowball S3 endpoint to provide local access to the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Snowball Edge to migrate data out of the on-premises solution to Amazon S3. Use the Snowball Edge file interface to provide on-premises systems with local access to the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Storage Gateway and configure a cached volume gateway. Run the Storage Gateway software appliance on premises and configure a percentage of data to cache locally. Mount the gateway storage volumes to provide local access to the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Storage Gateway and configure a stored volume gateway. Run the Storage Gateway software appliance on premises and map the gateway storage volumes to on-premises storage. Mount the gateway storage volumes to provide local access to the data.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827426,
          "date": "Thu 02 Mar 2023 21:57",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "The question states, \\\"wants to maintain local access to all the data\\\"This is storage gateway.Cached gateway stores only the frequently accessed data locally which is not what the problem statement asks for.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816545,
          "date": "Tue 21 Feb 2023 13:22",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "Ans = D<br><br>https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 813166,
          "date": "Sat 18 Feb 2023 16:11",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "D<br>https://www.examtopics.com/discussions/amazon/view/43725-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812223,
          "date": "Fri 17 Feb 2023 19:35",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/storagegateway/faqs/#:~:text=In%20the%20cached%20mode%2C%20your,asynchronously%20backed%20up%20to%20AWS.<br>In the cached mode, your primary data is written to S3, while retaining your frequently accessed data locally in a cache for low-latency access.<br>In the stored mode, your primary data is stored locally and your entire dataset is available for low-latency access while asynchronously backed up to AWS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#294",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application that is hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. Traffic must not traverse the internet.<br><br>How should a solutions architect configure access to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#294",
          "answers": [
            {
              "choice": "<p>A. Create a private hosted zone by using Amazon Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a gateway VPC endpoint for Amazon S3 in the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the EC2 instances to use a NAT gateway to access the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827427,
          "date": "Thu 02 Mar 2023 21:58",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "S3 and DynamoDB are the only services with Gateway endpoint options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817308,
          "date": "Wed 22 Feb 2023 01:35",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Agree with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817248,
          "date": "Tue 21 Feb 2023 23:40",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - B<br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.htmlRB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816961,
          "date": "Tue 21 Feb 2023 19:00",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 814310,
          "date": "Sun 19 Feb 2023 18:25",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Bbbbbbbb",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#295",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally identifiable information (PII). The company wants to use the data in three applications. Only one of the applications needs to process the PII. The PII must be removed before the other two applications process the data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#295",
          "answers": [
            {
              "choice": "<p>A. Store the data in an Amazon DynamoDB table. Create a proxy application layer to intercept and process the data that each application requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the data in an Amazon S3 bucket. Process and transform the data by using S3 Object Lambda before returning the data to the requesting application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Process the data and store the transformed data in three separate Amazon S3 buckets so that each application has its own custom dataset. Point each application to its respective S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Process the data and store the transformed data in three separate Amazon DynamoDB tables so that each application has its own custom dataset. Point each application to its respective DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827430,
          "date": "Thu 02 Mar 2023 22:02",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Actually this is what Macie is best used for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817832,
          "date": "Wed 22 Feb 2023 13:52",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "B is the right answer and the proof is in this link.<br><br>https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817776,
          "date": "Wed 22 Feb 2023 12:38",
          "username": "\t\t\t\tpagom\t\t\t",
          "content": "https://aws.amazon.com/ko/blogs/korea/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816983,
          "date": "Tue 21 Feb 2023 19:21",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the correct answer.<br>Amazon S3 Object Lambda allows you to add custom code to S3 GET requests, which means that you can modify the data before it is returned to the requesting application. In this case, you can use S3 Object Lambda to remove the PII before the data is returned to the two applications that do not need to process PII. This approach has the least operational overhead because it does not require creating separate datasets or proxy application layers, and it allows you to maintain a single copy of the data in an S3 bucket.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815458,
          "date": "Mon 20 Feb 2023 16:32",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "To meet the requirement of removing the PII before processing by two of the applications, it would be most efficient to use option B, which involves storing the data in an Amazon S3 bucket and using S3 Object Lambda to process and transform the data before returning it to the requesting application. This approach allows the PII to be removed in real-time and without the need to create separate datasets or tables for each application. S3 Object Lambda can be configured to automatically remove PII from the data before it is sent to the non-PII processing applications. This solution provides a cost-effective and scalable way to meet the requirement with the least operational overhead.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 814746,
          "date": "Mon 20 Feb 2023 03:27",
          "username": "\t\t\t\tminglu\t\t\t",
          "content": "I think it is B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 814314,
          "date": "Sun 19 Feb 2023 18:29",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Looks like C is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#296",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team has launched a new application that is hosted on Amazon EC2 instances inside a development VPC.  A solutions architect needs to create a new VPC in the same account. The new VPC will be peered with the development VPC.  The VPC CIDR block for the development VPC is 192.168.0.0/24. The solutions architect needs to create a CIDR block for the new VPC.  The CIDR block must be valid for a VPC peering connection to the development VPC. <br><br>What is the SMALLEST CIDR block that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#296",
          "answers": [
            {
              "choice": "<p>A. 10.0.1.0/32<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 192.168.0.0/24<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 192.168.1.0/32<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10.0.1.0/24<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827438,
          "date": "Thu 02 Mar 2023 22:06",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "A process by elimination solution here.a CIDR value is the number of bits that are lockeed so 10.0.0.0/32 means no range.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 817060,
          "date": "Tue 21 Feb 2023 20:27",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Answer is D, 10.0.1.0/24.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814320,
          "date": "Sun 19 Feb 2023 18:34",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Yes D is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814242,
          "date": "Sun 19 Feb 2023 17:09",
          "username": "\t\t\t\tBrainOBrain\t\t\t",
          "content": "10.0.1.0/32 and 192.168.1.0/32 are too small for VPC, and /32 network is only 1 host <br>192.168.0.0/24 is overlapping with existing VPC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814186,
          "date": "Sun 19 Feb 2023 15:49",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Definitely D.  It is the only valid VPC CIDR block that does not overlap with the development VPC CIDR block among the options.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811966,
          "date": "Fri 17 Feb 2023 15:20",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "The allowed block size is between a /28 netmask and /16 netmask.<br>The CIDR block must not overlap with any existing CIDR block that's associated with the VPC. <br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#297",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys an application on five Amazon EC2 instances. An Application Load Balancer (ALB) distributes traffic to the instances by using a target group. The average CPU usage on each of the instances is below 10% most of the time, with occasional surges to 65%.<br><br>A solutions architect needs to implement a solution to automate the scalability of the application. The solution must optimize the cost of the architecture and must ensure that the application has enough CPU resources when surges occur.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#297",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm that enters the ALARM state when the CPUUtilization metric is less than 20%. Create an AWS Lambda function that the CloudWatch alarm invokes to terminate one of the EC2 instances in the ALB target group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set a target tracking scaling policy that is based on the ASGAverageCPUUtilization metric. Set the minimum instances to 2, the desired capacity to 3, the maximum instances to 6, and the target value to 50%. Add the EC2 instances to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set the minimum instances to 2, the desired capacity to 3, and the maximum instances to 6. Add the EC2 instances to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create two Amazon CloudWatch alarms. Configure the first CloudWatch alarm to enter the ALARM state when the average CPUUtilization metric is below 20%. Configure the second CloudWatch alarm to enter the ALARM state when the average CPUUtilization matric is above 50%. Configure the alarms to publish to an Amazon Simple Notification Service (Amazon SNS) topic to send an email message. After receiving the message, log in to decrease or increase the number of EC2 instances that are running.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811978,
          "date": "Fri 17 Feb 2023 15:30",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Just create an auto scaling policy",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827445,
          "date": "Thu 02 Mar 2023 22:09",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "B is my vote",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817624,
          "date": "Wed 22 Feb 2023 09:46",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Based on the information given, the best solution is option\\\"B\\\".<br>Autoscaling group with target tracking scaling policy with min 2 instances, desired capacity to 3, and the maximum instances to 6.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817040,
          "date": "Tue 21 Feb 2023 20:08",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the correct solution because it allows for automatic scaling based on the average CPU utilization of the EC2 instances in the target group. With the use of a target tracking scaling policy based on the ASGAverageCPUUtilization metric, the EC2 Auto Scaling group can ensure that the target value of 50% is maintained while scaling the number of instances in the group up or down as needed. This will help ensure that the application has enough CPU resources during surges without overprovisioning, thus optimizing the cost of the architecture.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815758,
          "date": "Mon 20 Feb 2023 20:50",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "Should be B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#298",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a critical business application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances run in an Auto Scaling group and access an Amazon RDS DB instance.<br><br>The design did not pass an operational review because the EC2 instances and the DB instance are all located in a single Availability Zone. A solutions architect must update the design to use a second Availability Zone.<br><br>Which solution will make the application highly available?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#298",
          "answers": [
            {
              "choice": "<p>A. Provision a subnet in each Availability Zone. Configure the Auto Scaling group to distribute the EC2 instances across both Availability Zones. Configure the DB instance with connections to each network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision two subnets that extend across both Availability Zones. Configure the Auto Scaling group to distribute the EC2 instances across both Availability Zones. Configure the DB instance with connections to each network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a subnet in each Availability Zone. Configure the Auto Scaling group to distribute the EC2 instances across both Availability Zones. Configure the DB instance for Multi-AZ deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a subnet that extends across both Availability Zones. Configure the Auto Scaling group to distribute the EC2 instances across both Availability Zones. Configure the DB instance for Multi-AZ deployment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811982,
          "date": "Fri 17 Feb 2023 15:33",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "A subnet must reside within a single Availability Zone.<br>https://aws.amazon.com/vpc/faqs/#:~:text=Can%20a%20subnet%20span%20Availability,within%20a%20single%20Availability%20Zone.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827447,
          "date": "Thu 02 Mar 2023 22:13",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "a subnet is per AZ.a scaling group can span multiple AZs. https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-availability-zone.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817655,
          "date": "Wed 22 Feb 2023 10:22",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "I think D. <br>Span the single subnet in both Availability Zones can access the DB instances in either zone without going over the public internet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Can span like that?</li><li>Nope. The answer is indeed C.  <br>You cannot span like that. Check the link below:<br>\\\"Each subnet must reside entirely within one Availability Zone and cannot span zones.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html</li><li>Thanks, Leoattf for the link you shared.</li><li>Sorry I think C is correct.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817658,
          "date": "Wed 22 Feb 2023 10:24",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Can span like that?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nope. The answer is indeed C.  <br>You cannot span like that. Check the link below:<br>\\\"Each subnet must reside entirely within one Availability Zone and cannot span zones.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html</li><li>Thanks, Leoattf for the link you shared.</li><li>Sorry I think C is correct.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818398,
          "date": "Wed 22 Feb 2023 21:54",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "Nope. The answer is indeed C.  <br>You cannot span like that. Check the link below:<br>\\\"Each subnet must reside entirely within one Availability Zone and cannot span zones.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks, Leoattf for the link you shared.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 823348,
          "date": "Mon 27 Feb 2023 08:41",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Thanks, Leoattf for the link you shared.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817665,
          "date": "Wed 22 Feb 2023 10:27",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Sorry I think C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815757,
          "date": "Mon 20 Feb 2023 20:50",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "it's C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#299",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research laboratory needs to process approximately 8 TB of data. The laboratory requires sub-millisecond latencies and a minimum throughput of 6 GBps for the storage subsystem. Hundreds of Amazon EC2 instances that run Amazon Linux will distribute and process the data.<br><br>Which solution will meet the performance requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#299",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon FSx for NetApp ONTAP file system. Sat each volume' tiering policy to ALL. Import the raw data into the file system. Mount the fila system on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file system that uses persistent SSD storage. Select the option to import data from and export data to Amazon S3. Mount the file system on the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file system that uses persistent HDD storage. Select the option to import data from and export data to Amazon S3. Mount the file system on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon FSx for NetApp ONTAP file system. Set each volume's tiering policy to NONE.  Import the raw data into the file system. Mount the file system on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812261,
          "date": "Fri 17 Feb 2023 20:14",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Create an Amazon S3 bucket to store the raw data Create an Amazon FSx for Lustre file system that<br>uses persistent SSD storage Select the option to import data from and export data to Amazon S3<br>Mount the file system on the EC2 instances. Amazon FSx for Lustre uses SSD storage for submillisecond latencies and up to 6 GBps throughput, and can import data from and export data to<br>Amazon S3. Additionally, the option to select persistent SSD storage will ensure that the data is stored on the disk and not lost if the file system is stopped.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 827448,
          "date": "Thu 02 Mar 2023 22:15",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817480,
          "date": "Wed 22 Feb 2023 06:08",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "FSX Lusture is 1000mbs per TB provisioned and we have 8TBs so gives us 8GBs . The netapp FSX appears a hard limit of 4gbs . <br><br>https://aws.amazon.com/fsx/lustre/faqs/?nc=sn&loc=5<br>https://aws.amazon.com/fsx/netapp-ontap/faqs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817015,
          "date": "Tue 21 Feb 2023 19:54",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the best choice as it utilizes Amazon S3 for data storage, which is cost-effective and durable, and Amazon FSx for Lustre for high-performance file storage, which provides the required sub-millisecond latencies and minimum throughput of 6 GBps. Additionally, the option to import and export data to and from Amazon S3 makes it easier to manage and move data between the two services.<br>B is the best option as it meets the performance requirements for sub-millisecond latencies and a minimum throughput of 6 GBps.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 815055,
          "date": "Mon 20 Feb 2023 10:37",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "Amazon FSx for Lustre provides fully managed shared storage with the scalability and performance of the popular Lustre file system. It can deliver sub-millisecond latencies and hundreds of gigabytes per second of throughput.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812121,
          "date": "Fri 17 Feb 2023 17:27",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "Keyword here is a minimum throughput of 6 GBps. Only the FSx for Lustre with SSD option gives the sub-milli response and throughput of 6 GBps or more.B.  Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file system that uses persistent SSD storage. Select the option to import data from and export data to Amazon S3. Mount the file system on the EC2 instances.<br><br>Refrences:<br>https://aws.amazon.com/fsx/when-to-choose-fsx/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#300",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate a legacy application from an on-premises data center to the AWS Cloud because of hardware capacity constraints. The application runs 24 hours a day, 7 days a week. The application's database storage continues to grow over time.<br><br>What should a solutions architect do to meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#300",
          "answers": [
            {
              "choice": "<p>A. Migrate the application layer to Amazon EC2 Spot Instances. Migrate the data storage layer to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon RDS On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon Aurora Reserved Instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application layer to Amazon EC2 On-Demand Instances. Migrate the data storage layer to Amazon RDS Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 814175,
          "date": "Sun 19 Feb 2023 15:38",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Option B based on the fact that the DB storage will continue to grow, so on-demand will be a more suitable solution<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Since the application's database storage is continuously growing over time, it may be difficult to estimate the appropriate size of the Aurora cluster in advance, which is required when reserving Aurora.<br><br>In this case, it may be more cost-effective to use Amazon RDS On-Demand Instances for the data storage layer. With RDS On-Demand Instances, you pay only for the capacity you use and you can easily scale up or down the storage as needed.</li><li>The Answer is C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 815466,
          "date": "Mon 20 Feb 2023 16:40",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Since the application's database storage is continuously growing over time, it may be difficult to estimate the appropriate size of the Aurora cluster in advance, which is required when reserving Aurora.<br><br>In this case, it may be more cost-effective to use Amazon RDS On-Demand Instances for the data storage layer. With RDS On-Demand Instances, you pay only for the capacity you use and you can easily scale up or down the storage as needed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The Answer is C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 819388,
          "date": "Thu 23 Feb 2023 17:14",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "The Answer is C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 832964,
          "date": "Wed 08 Mar 2023 14:00",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "C: With Aurora Serverless v2, each writer and reader has its own current capacity value, measured in ACUs. Aurora Serverless v2 scales a writer or reader up to a higher capacity when its current capacity is too low to handle the load. It scales the writer or reader down to a lower capacity when its current capacity is higher than needed.<br><br>This is sufficient to accommodate the growing data changes. <br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.how-it-works.html#aurora-serverless-v2.how-it-works.scaling",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827453,
          "date": "Thu 02 Mar 2023 22:23",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Typically Amazon RDS cost less than Aurora.But here, it's Aurora reserved.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827184,
          "date": "Thu 02 Mar 2023 18:59",
          "username": "\t\t\t\tACasper\t\t\t",
          "content": "Answer C<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithReservedDBInstances.html<br>Discounts for reserved DB instances are tied to instance type and AWS Region.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821193,
          "date": "Sat 25 Feb 2023 05:49",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "Both RDS and RDS aurora support Storage Auto scale . <br>Aurora is more expensive than base RDS , But between B and C , the Aurora is reserved instanceand base RDS is on demand . Also it states the DB strorage will grow , so no concern about a bigger DB instance ( server ) , only the actual storage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819385,
          "date": "Thu 23 Feb 2023 17:13",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818755,
          "date": "Thu 23 Feb 2023 04:38",
          "username": "\t\t\t\tSamuel03\t\t\t",
          "content": "I also think it is B.  Otherewise there is no point in mentionig about growing storage requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817857,
          "date": "Wed 22 Feb 2023 14:23",
          "username": "\t\t\t\tAmerico32\t\t\t",
          "content": "A opção B com base no fato de que o armazenamento de banco de dados continuará a crescer, portanto, sob demanda será uma solução mais adequada<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Mudando para opção C, Observações importantes sobre compras<br>Os preços de instâncias reservadas cobrem apenas os custos da instância. O armazenamento e a E/S ainda são faturados separadamente.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817864,
          "date": "Wed 22 Feb 2023 14:31",
          "username": "\t\t\t\tAmerico32\t\t\t",
          "content": "Mudando para opção C, Observações importantes sobre compras<br>Os preços de instâncias reservadas cobrem apenas os custos da instância. O armazenamento e a E/S ainda são faturados separadamente.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817321,
          "date": "Wed 22 Feb 2023 01:53",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Why not B?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817002,
          "date": "Tue 21 Feb 2023 19:43",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon EC2 Reserved Instances allow for significant cost savings compared to On-Demand instances for long-running, steady-state workloads like this one. Reserved Instances provide a capacity reservation, so the instances are guaranteed to be available for the duration of the reservation period.<br><br>Amazon Aurora is a highly scalable, cloud-native relational database service that is designed to be compatible with MySQL and PostgreSQL. It can automatically scale up to meet growing storage requirements, so it can accommodate the application's database storage needs over time. By using Reserved Instances for Aurora, the cost savings will be significant over the long term.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 814335,
          "date": "Sun 19 Feb 2023 18:52",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Ccccccc",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    }
  ]
}