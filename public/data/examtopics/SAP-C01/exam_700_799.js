var ExamTopic_700_799 = 
{
    "msg": "Quiz Questions",
    "data": [
    {
        "question_id": "#700",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has five physical data centers in specific locations around the world. Each data center has hundreds of physical servers with a mix of Windows and<br>Linux-based applications and database services. Each data center also has an AWS Direct Connect connection of 10 Gbps to AWS with a company-approved<br>VPN solution to ensure that data transfer is secure. The company needs to shut down the existing data centers as quickly as possible and migrate the servers and applications to AWS.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#700",
            "answers": [
        
        {
            "choice": "<p>A. Install the AWS Server Migration Service (AWS SMS) connector onto each physical machine. Use the AWS Management Console to select the servers from the server catalog, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Install the AWS DataSync agent onto each physical machine. Use the AWS Management Console to configure the destination to be an AMI, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Install the CloudEndure Migration agent onto each physical machine. Create a migration blueprint, and start the replication. Once the replication is complete, launch the Amazon EC2 instances in cutover mode.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Install the AWS Application Discovery Service agent onto each physical machine. Use the AWS Migration Hub import option to start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":309366,"date":"Sat 25 Sep 2021 08:38","username":"ajeeshb","content":"Answer is C. <br>SMS is currently not supported on physical machines. <br>https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"19","selected_answers":""},{"id":380462,"date":"Fri 08 Oct 2021 08:56","username":"blackgamerMrCartercannottellname","content":"The question is outdated. Now the recommended solution from AWS is Application Migration Service. <br><br>https://aws.amazon.com/application-migration-service/awesome info, thanksExactly....!!<br>AWS Application Migration Service (MGN) is the primary migration service recommended for lift-and-shift migrations to the AWS Cloud. Customers who currently use CloudEndure Migration or AWS Server Migration Service (AWS SMS) are encouraged to switch to MGN for future migrations.","upvote_count":"1811","selected_answers":""},{"id":396222,"date":"Sun 10 Oct 2021 04:08","username":"MrCarter","content":"awesome info, thanks","upvote_count":"1","selected_answers":""},{"id":535377,"date":"Sat 29 Jan 2022 11:15","username":"cannottellname","content":"Exactly....!!<br>AWS Application Migration Service (MGN) is the primary migration service recommended for lift-and-shift migrations to the AWS Cloud. Customers who currently use CloudEndure Migration or AWS Server Migration Service (AWS SMS) are encouraged to switch to MGN for future migrations.","upvote_count":"1","selected_answers":""},{"id":628812,"date":"Fri 08 Jul 2022 16:45","username":"asfsdfsdfpsou7","content":"Only C will work for migration lift and shift physical servers.<br>Question is outdated - SMS is no longer recommended and it used to work only on Vmware/hyper-v/azure virtual machines.<br>Cloudendure is MGN now - so the correct answer if you see this in the exam is Application Migration Service. (MGN)Well, MGN is replacing AWS Server Migration Services & CloudEndure Migration.<br>So the question does not make sense for the time being.<br>C would be the best fit but it wont show up in the exam. It is outdated (based on material from Stephane Maarek).","upvote_count":"22","selected_answers":""},{"id":688035,"date":"Thu 06 Oct 2022 20:27","username":"psou7","content":"Well, MGN is replacing AWS Server Migration Services & CloudEndure Migration.<br>So the question does not make sense for the time being.<br>C would be the best fit but it wont show up in the exam. It is outdated (based on material from Stephane Maarek).","upvote_count":"2","selected_answers":""},{"id":628252,"date":"Thu 07 Jul 2022 09:38","username":"Enigmaaaaaa","content":"CloudEndure - which is now MGN is the correct solution for physical server.<br>SMS is for migration virtual servers.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":617114,"date":"Thu 16 Jun 2022 07:55","username":"Chuky64","content":"With AWS Application Migration Service, you can migrate your applications from physical infrastructure, VMware vSphere, Microsoft Hyper-V, Amazon Elastic Compute Cloud (AmazonEC2), Amazon Virtual Private Cloud (Amazon VPC), and other clouds to AWS. <br><br>December 30, 2022 - Existing CloudEndure MigrationThe CloudEndure is deprecated.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":569481,"date":"Thu 17 Mar 2022 07:22","username":"itznotme","content":"C<br><br>aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":535376,"date":"Sat 29 Jan 2022 11:15","username":"cannottellname","content":"SMS is currently supported. SMS is named as MGN because of few improvements & changes in its process.<br><br>AWS still does not recommend CloudEndure currently. please check their website.<br><br>\\\"AWS Application Migration Service (MGN) is the primary migration service recommended for lift-and-shift migrations to the AWS Cloud. Customers who currently use CloudEndure Migration or AWS Server Migration Service (AWS SMS) are encouraged to switch to MGN for future migrations.\\\"","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":501882,"date":"Wed 15 Dec 2021 06:28","username":"tkanmani76","content":"SMS is meant for migration of Virtual machines to AWS whereas Cloud Endure can be used for Physical, Virtual or Cloud Server. Hence C is correct.https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"1","selected_answers":""},{"id":495094,"date":"Mon 06 Dec 2021 12:53","username":"AzureDP900","content":"C is right","upvote_count":"1","selected_answers":""},{"id":446985,"date":"Sun 07 Nov 2021 12:35","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":435326,"date":"Mon 18 Oct 2021 10:45","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":434691,"date":"Fri 15 Oct 2021 07:41","username":"Liongeekstudent22student22student22Goram113","content":"If you reading this, in 2021, answer is A.  Read the second line here:<br>https://docs.aws.amazon.com/es_es/mgn/latest/ug/what-is-application-migration-service.html<br>\\\"AWS Application Migration Service (MGN) is a highly automated lift-and-shift (rehost) solution that simplifies, expedites, and reduces the cost of migrating applications to AWS. It enables companies to lift-and-shift a large number of physical, virtual, or cloud servers\\\"This link is about MGM. The question is about SMS.<br>Answer is C. I mean answer A (not the question) is about SMS.https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/MGN is not SMS but new AWS flavoured version of cloudendure. So it is C :-)<br>Amazon made acquisition of cloudendure some time ago.","upvote_count":"41112","selected_answers":""},{"id":442700,"date":"Mon 18 Oct 2021 22:41","username":"student22student22student22","content":"This link is about MGM. The question is about SMS.<br>Answer is C. I mean answer A (not the question) is about SMS.https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"111","selected_answers":""},{"id":442701,"date":"Tue 26 Oct 2021 09:47","username":"student22student22","content":"I mean answer A (not the question) is about SMS.https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"11","selected_answers":""},{"id":442702,"date":"Tue 02 Nov 2021 09:33","username":"student22","content":"https://aws.amazon.com/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/","upvote_count":"1","selected_answers":""},{"id":442929,"date":"Thu 04 Nov 2021 12:09","username":"Goram113","content":"MGN is not SMS but new AWS flavoured version of cloudendure. So it is C :-)<br>Amazon made acquisition of cloudendure some time ago.","upvote_count":"2","selected_answers":""},{"id":431073,"date":"Wed 13 Oct 2021 11:39","username":"Suresh108","content":"CCCCCC - key word here is 'physical servers' - MGN or cloud endure<br><br>https://console.cloudendure.com/#/register/register","upvote_count":"1","selected_answers":""},{"id":414034,"date":"Tue 12 Oct 2021 12:36","username":"WhyIronMan","content":"I'll go with C","upvote_count":"2","selected_answers":""},{"id":385658,"date":"Fri 08 Oct 2021 20:59","username":"hk436","content":"c for sure","upvote_count":"1","selected_answers":""},{"id":357804,"date":"Sun 03 Oct 2021 09:26","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":343355,"date":"Sat 02 Oct 2021 13:30","username":"blackgamer","content":"Yes agreed with C.  Keyword is physical servers.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#701",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security:<br>✑ The database must use strong, randomly generated passwords stored in a secure AWS managed service.<br>✑ The application resources must be deployed through AWS CloudFormation.<br>✑ The application must rotate credentials for the database every 90 days.<br>A solutions architect will generate a CloudFormation template to deploy the application.<br>Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#701",
            "answers": [
        
        {
            "choice": "<p>A. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":311074,"date":"Wed 22 Sep 2021 07:07","username":"sek12324","content":"A<br>https://aws.amazon.com/blogs/security/how-to-securely-provide-database-credentials-to-lambda-functions-by-using-aws-secrets-manager/","upvote_count":"12","selected_answers":""},{"id":313816,"date":"Fri 01 Oct 2021 22:41","username":"nitinzkalyan_krishna742020","content":"Sure Answer is A, but I do not see the need of lambda to do the rotation when secret manager can do the rotation. can some one enlighten me?Nope. You need to choose a Lambda function in order to rotate the secret.","upvote_count":"85","selected_answers":""},{"id":316695,"date":"Tue 12 Oct 2021 09:12","username":"kalyan_krishna742020","content":"Nope. You need to choose a Lambda function in order to rotate the secret.","upvote_count":"5","selected_answers":""},{"id":636870,"date":"Mon 25 Jul 2022 19:43","username":"hilft","content":"A.  AWS secret manager with lambda.","upvote_count":"1","selected_answers":""},{"id":627347,"date":"Tue 05 Jul 2022 10:36","username":"TechX","content":"A 100%, AWS Secret Manager auto rotate, you don't need to trigger a lambda function","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":595411,"date":"Sun 01 May 2022 04:55","username":"tartarus23","content":"A.  as AWS secrets manager supports passport rotation through Lambda functions and rotation schedule.<br>C.  is not correct since there is no need to use Amazon EventBridge to meet the requirements<br><br>https://aws.amazon.com/secrets-manager/","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":532719,"date":"Wed 26 Jan 2022 09:52","username":"shotty1","content":"It is A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":526176,"date":"Tue 18 Jan 2022 00:18","username":"weurseuk","content":"A : secret manager can rotate on console but here it's with cloudformation, and it's done with the lambda, see AWS::SecretsManager::RotationSchedule","upvote_count":"1","selected_answers":""},{"id":509597,"date":"Sun 26 Dec 2021 13:59","username":"GeniusMikeLiu","content":"why we need lambda to rotate database password???","upvote_count":"1","selected_answers":""},{"id":498618,"date":"Fri 10 Dec 2021 13:37","username":"cldy","content":"A.  Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.","upvote_count":"1","selected_answers":""},{"id":495098,"date":"Mon 06 Dec 2021 12:57","username":"AzureDP900","content":"I will go with A","upvote_count":"1","selected_answers":""},{"id":447001,"date":"Sat 06 Nov 2021 05:23","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":443486,"date":"Fri 05 Nov 2021 05:36","username":"mrphuongbn","content":"Both A & C are ok. But \\\"with the LEAST amount of operational overhead\\\" <br>=> A.  <br>https://aws.amazon.com/blogs/security/how-to-securely-provide-database-credentials-to-lambda-functions-by-using-aws-secrets-manager/","upvote_count":"1","selected_answers":""},{"id":436592,"date":"Thu 04 Nov 2021 17:37","username":"tgv","content":"AAA<br>---","upvote_count":"1","selected_answers":""},{"id":414051,"date":"Fri 29 Oct 2021 04:34","username":"WhyIronMan","content":"I'll go with A","upvote_count":"1","selected_answers":""},{"id":380470,"date":"Mon 25 Oct 2021 16:00","username":"blackgamer","content":"The answer is A.  it can configure AWS Secret Manager to rotate key automatically, not necessary to use EventBridge for that. <br><br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html","upvote_count":"3","selected_answers":""},{"id":358431,"date":"Mon 25 Oct 2021 12:26","username":"Waiweng","content":"it's A","upvote_count":"1","selected_answers":""},{"id":339722,"date":"Wed 20 Oct 2021 12:47","username":"CarisB","content":"A<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_cloudformation.html","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#702",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a three-tier application running on AWS with a web server, an application server, and an Amazon RDS MySQL DB instance. A solutions architect is designing a disaster recovery (DR) solution with an RPO of 5 minutes.<br>Which solution will meet the company's requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#702",
            "answers": [
        
        {
            "choice": "<p>A. Configure AWS Backup to perform cross-Region backups of all servers every 5 minutes. Reprovision the three tiers in the DR Region from the backups using AWS CloudFormation in the event of a disaster.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Maintain another running copy of the web and application server stack in the DR Region using AWS CloudFormation drift detection. Configure cross-Region snapshots of the DB instance to the DR Region every 5 minutes. In the event of a disaster, restore the DB instance using the snapshot in the DR Region.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use Amazon EC2 Image Builder to create and copy AMIs of the web and application server to both the primary and DR Regions. Create a cross-Region read replica of the DB instance in the DR Region. In the event of a disaster, promote the read replica to become the master and reprovision the servers with AWS CloudFormation using the AMIs.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create AMIs of the web and application servers in the DR Region. Use scheduled AWS Glue jobs to synchronize the DB instance with another DB instance in the DR Region. In the event of a disaster, switch to the DB instance in the DR Region and reprovision the servers with AWS CloudFormation using the AMIs.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":423023,"date":"Sun 10 Oct 2021 05:34","username":"hbrandsashenkapeddyuaPatrickLi","content":"My pick would be A. <br>https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html<br><br>C and D don't really make sense to me. EC2 image builder is for deploying an creating new AMIs. Glue is for data integration. With B I am not sure how drift detection would help as that would just allow a rollback and is not geared towards backup. Also A seemed to be the only one that addressed backing up the web and app servers along with RDS.[C} It can'b be A becasue cross-Region backup of a large RDS MySQL could take more than 5 minutes and in fact often takes 1+ hrs. This is done with a cop;y and not a continuous replication. So a backup job would not complete fast enough to be able to meet the 5 min RPO.you didn't read the article...<br>\\\"With this feature, database and backup administrators are able to reduce their recovery point objective (RPO) to 5 minutes or under, directly from the AWS Backup console.\\\"<br><br>We use AWS Backups+Terraform at work for our DR Scenario.while this is true, it requires the point-in-time recovery feature of AWS backup. Option A didn't say that and implies it uses the normal snapshot based backups, which won't meet the RPO","upvote_count":"11723","selected_answers":""},{"id":479698,"date":"Tue 16 Nov 2021 23:30","username":"sashenkapeddyuaPatrickLi","content":"[C} It can'b be A becasue cross-Region backup of a large RDS MySQL could take more than 5 minutes and in fact often takes 1+ hrs. This is done with a cop;y and not a continuous replication. So a backup job would not complete fast enough to be able to meet the 5 min RPO.you didn't read the article...<br>\\\"With this feature, database and backup administrators are able to reduce their recovery point objective (RPO) to 5 minutes or under, directly from the AWS Backup console.\\\"<br><br>We use AWS Backups+Terraform at work for our DR Scenario.while this is true, it requires the point-in-time recovery feature of AWS backup. Option A didn't say that and implies it uses the normal snapshot based backups, which won't meet the RPO","upvote_count":"723","selected_answers":""},{"id":545000,"date":"Fri 11 Feb 2022 04:08","username":"peddyuaPatrickLi","content":"you didn't read the article...<br>\\\"With this feature, database and backup administrators are able to reduce their recovery point objective (RPO) to 5 minutes or under, directly from the AWS Backup console.\\\"<br><br>We use AWS Backups+Terraform at work for our DR Scenario.while this is true, it requires the point-in-time recovery feature of AWS backup. Option A didn't say that and implies it uses the normal snapshot based backups, which won't meet the RPO","upvote_count":"23","selected_answers":""},{"id":548089,"date":"Tue 15 Feb 2022 22:44","username":"PatrickLi","content":"while this is true, it requires the point-in-time recovery feature of AWS backup. Option A didn't say that and implies it uses the normal snapshot based backups, which won't meet the RPO","upvote_count":"3","selected_answers":""},{"id":550804,"date":"Sat 19 Feb 2022 10:29","username":"futen0326razerlg","content":"Answer CANNOT be A, deploying a brand new RDS instance will take >30 minutes. You will use EC2 Image builder to put the AMIs into the new region, but not use image builder to LAUNCH them. To me the answer is clearly C. it doesn't matter how long it takes to deploy the RDS. Question is only asking about RPO, not RTO.","upvote_count":"54","selected_answers":"Selected Answer: C"},{"id":565937,"date":"Sat 12 Mar 2022 07:05","username":"razerlg","content":"it doesn't matter how long it takes to deploy the RDS. Question is only asking about RPO, not RTO.","upvote_count":"4","selected_answers":""},{"id":709504,"date":"Wed 02 Nov 2022 02:12","username":"Nidhin07","content":"RTO is not provided hence we are covered with option A","upvote_count":"1","selected_answers":""},{"id":679991,"date":"Mon 26 Sep 2022 19:09","username":"dcdcdc3","content":"This article describes continuous backup for RDS (not Aurora, not EC2, just RDS) with AWS backup (RPO under 5 min), which means that backups of all servers every 5 minutes is NOT possible, only RDS can be handled, I think I will have to go with C:<br>https://aws.amazon.com/blogs/storage/point-in-time-recovery-and-continuous-backup-for-amazon-rds-with-aws-backup/","upvote_count":"3","selected_answers":"Selected Answer: C"},{"id":672925,"date":"Mon 19 Sep 2022 06:43","username":"skywalker","content":"BetweenA and C. .. I go for C ...<br>Time to restore the data will take times.. and having AWS CloudFormation also take time to rebuilt the infras.... all within 5 minutes is questionable. <br><br>On C, AMI, and Database are already in place on DR site. Just need to activite the failover to make the DR become production.. All this can happen in 5 mins... Thus my pick i C. ","upvote_count":"2","selected_answers":""},{"id":671556,"date":"Sat 17 Sep 2022 15:34","username":"pixepe","content":"C is Correct;<br><br>Note that we have aggressive RPO.<br><br>Now, Disaster Strategy - Cold DR (Backup & Restore) vs Hot DR (active to active);<br>due to aggressive RPO => Replication (Hot DR)<br><br>Article on DR for RDS (though it has SQL server instead of MySQL; concept remains same) - To meet very aggressive RPO and RTO requirements, your DR strategy needs to consider continuous replication capability<br>https://aws.amazon.com/blogs/database/cross-region-disaster-recovery-of-amazon-rds-for-sql-server/","upvote_count":"2","selected_answers":""},{"id":670508,"date":"Fri 16 Sep 2022 07:51","username":"Sathish1412","content":"Because RPO is 5 minutes, not RTO.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":645780,"date":"Fri 12 Aug 2022 09:07","username":"foureye2004","content":"Should be C<br>https://aws.amazon.com/image-builder/faqs/#:~:text=Image%20Builder%20can%20copy%20AMIs%20to%20selected%20AWS%20regions%20using%20existing%20AMI%20sharing%20mechanisms.%20The%20distribution%20can%20be%20gated%20on%20the%20passing%20of%20tests%20with%20Image%20Builder.<br><br>If A, it should be included Point-In-Time Recovery <br>https://docs.aws.amazon.com/aws-backup/latest/devguide/point-in-time-recovery.html","upvote_count":"2","selected_answers":""},{"id":625661,"date":"Fri 01 Jul 2022 10:58","username":"TechX","content":"I support A, a simple require that need 5 mins of RPO (Not RTO).<br>A meet the requirement with least complexity. Although C would work but it have higher cost when you have active-active model which is not require in the question, I prefer the simpler solution","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":605330,"date":"Sun 22 May 2022 12:09","username":"sudeender","content":"A is correct here, promoting RDS Mysql read replica as primary needs to be done manually and also RDS instance has to be rebooted.. this will not meet 5 minutes RPO","upvote_count":"2","selected_answers":""},{"id":596201,"date":"Mon 02 May 2022 22:02","username":"aloha123","content":"Agree with hbrand","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":547932,"date":"Tue 15 Feb 2022 19:28","username":"pititcu667","content":"A is not feasible because of 5 min restore time. Restore point objective less than 5 min, the limit for aws backup way more than that. The only way to achieve it is with a read replica.","upvote_count":"1","selected_answers":""},{"id":546896,"date":"Mon 14 Feb 2022 05:21","username":"Bigbearcn","content":"It's C. ","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":545003,"date":"Fri 11 Feb 2022 04:13","username":"peddyua","content":"https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html<br>A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":543523,"date":"Wed 09 Feb 2022 05:23","username":"cannottellname","content":"Cross Region Replication without RDS doesn't seem a good option as well as to maintain it as Read Replica.<br><br>From https://aws.amazon.com/blogs/storage/point-in-time-recovery-and-continuous-backup-for-amazon-rds-with-aws-backup/ I think answer should be A","upvote_count":"1","selected_answers":""},{"id":497007,"date":"Wed 08 Dec 2021 18:46","username":"AzureDP900peddyua","content":"I agree with C as right answer for given scnerioYou can't use EC2 Image Builder for DR Scenario. Also Read replicas have a lag as well on replication as it's async. How big this lag can be... depends on several factors.","upvote_count":"21","selected_answers":""},{"id":545002,"date":"Fri 11 Feb 2022 04:13","username":"peddyua","content":"You can't use EC2 Image Builder for DR Scenario. Also Read replicas have a lag as well on replication as it's async. How big this lag can be... depends on several factors.","upvote_count":"1","selected_answers":""},{"id":477743,"date":"Sat 13 Nov 2021 22:12","username":"Liongeek","content":"You cannot use EC2 Image Builder as DR strategy, its porpurse isn't even related... that eliminates C(although cross-region replica sounds good).<br>That leave us A, which is the ans","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#703",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its corporate data center from on premises to the AWS Cloud. The data center includes physical servers and VMs that use VMware and Hyper-V. An administrator needs to select the correct services to collect data for the initial migration discovery process. The data format should be supported by AWS Migration Hub. The company also needs the ability to generate reports from the data.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#703",
            "answers": [
        
        {
            "choice": "<p>A. Use the AWS Agentless Discovery Connector for data collection on physical servers and all VMs. Store the collected data in Amazon S3. Query the data with S3 Select. Generate reports by using Kibana hosted on Amazon EC2.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use the AWS Application Discovery Service agent for data collection on physical servers and all VMs. Store the collected data in Amazon Elastic File System (Amazon EFS). Query the data and generate reports with Amazon Athena.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use the AWS Application Discovery Service agent for data collection on physical servers and Hyper-V. Use the AWS Agentless Discovery Connector for data collection on VMware. Store the collected data in Amazon S3. Query the data with Amazon Athena. Generate reports by using Amazon QuickSight.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use the AWS Systems Manager agent for data collection on physical servers. Use the AWS Agentless Discovery Connector for data collection on all VMs. Store, query, and generate reports from the collected data by using Amazon Redshift.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":315535,"date":"Sun 10 Oct 2021 00:11","username":"awsnoob","content":"C is correct. VMware can support agentless discovery","upvote_count":"14","selected_answers":""},{"id":313821,"date":"Wed 06 Oct 2021 13:48","username":"nitinz","content":"C is correct answer.","upvote_count":"7","selected_answers":""},{"id":497801,"date":"Thu 09 Dec 2021 15:33","username":"cldy","content":"C.  Use the AWS Application Discovery Service agent for data collection on physical servers and Hyper-V. Use the AWS Agentless Discovery Connector for data collection on VMware. Store the collected data in Amazon S3. Query the data with Amazon Athena. Generate reports by using Amazon QuickSight.","upvote_count":"1","selected_answers":""},{"id":497010,"date":"Wed 08 Dec 2021 18:48","username":"AzureDP900","content":"C is right","upvote_count":"1","selected_answers":""},{"id":447108,"date":"Sun 07 Nov 2021 07:04","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":436593,"date":"Fri 05 Nov 2021 14:19","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":431077,"date":"Mon 01 Nov 2021 22:53","username":"Suresh108","content":"CCCC -- Possible answers areB and C , eliminate B due to 'EFS', hence CCCC. ","upvote_count":"2","selected_answers":""},{"id":414058,"date":"Fri 29 Oct 2021 08:22","username":"WhyIronMan","content":"I'll go with C<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-connector.html","upvote_count":"1","selected_answers":""},{"id":381711,"date":"Wed 27 Oct 2021 20:30","username":"tvs","content":"Question is badly defined. Athena can query the data collect by agent not the connector. No other choice os going with C eventhougth it is partially wrong.","upvote_count":"1","selected_answers":""},{"id":358623,"date":"Sun 24 Oct 2021 04:51","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":334310,"date":"Tue 19 Oct 2021 20:02","username":"anandbabu","content":"D is correct option","upvote_count":"1","selected_answers":""},{"id":322950,"date":"Tue 19 Oct 2021 07:22","username":"kejam","content":"C: https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-connector.html","upvote_count":"3","selected_answers":""},{"id":321521,"date":"Wed 13 Oct 2021 10:39","username":"champcloud","content":"Going with C","upvote_count":"3","selected_answers":""},{"id":316593,"date":"Sun 10 Oct 2021 23:03","username":"SD13","content":"Correct Option : C","upvote_count":"3","selected_answers":""},{"id":311082,"date":"Fri 01 Oct 2021 00:43","username":"sek12324wasabidev","content":"B - <br>Agent-based discovery can be performed by deploying the AWS Application Discovery Agent on each of your VMs and physical servers.Athena doesn't allow to query EFS, but S3","upvote_count":"12","selected_answers":""},{"id":312577,"date":"Wed 06 Oct 2021 04:17","username":"wasabidev","content":"Athena doesn't allow to query EFS, but S3","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#704",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon Aurora MySQL for a customer relationship management (CRM) application. The application requires frequent maintenance on the database and the Amazon EC2 instances on which the application runs. For AWS Management Console access, the system administrators authenticate against<br>AWS Identity and Access Management (IAM) using an internal identity provider. For database access, each system administrator has a user name and password that have previously been configured within the database.<br>A recent security audit revealed that the database passwords are not frequently rotated. The company wants to replace the passwords with temporary credentials using the company's existing AWS access controls.<br>Which set of options will meet the company's requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#704",
            "answers": [
        
        {
            "choice": "<p>A. Create a new AWS Systems Manager Parameter Store entry for each database password. Enable parameter expiration to invoke an AWS Lambda function to perform password rotation by updating the parameter value. Create an IAM policy allowing each system administrator to retrieve their current password from the Parameter Store. Use the AWS CLI to retrieve credentials when connecting to the database.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a new AWS Secrets Manager entry for each database password. Configure password rotation for each secret using an AWS Lambda function in the same VPC as the database cluster. Create an IAM policy allowing each system administrator to retrieve their current password. Use the AWS CLI to retrieve credentials when connecting to the database.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Enable IAM database authentication on the database. Attach an IAM policy to each system administrator's role to map the role to the database user name. Install the Amazon Aurora SSL certificate bundle to the system administrators' certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Enable IAM database authentication on the database. Configure the database to use the IAM identity provider to map the administrator roles to the database user. Install the Amazon Aurora SSL certificate bundle to the system administrators' certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":330456,"date":"Mon 18 Oct 2021 02:30","username":"ExtHo","content":"C seems correct.<br>passwords are not frequently rotated+AWS Secrets Manager is just a trap but actual requirement is replace the passwords with temporary credentials that C fulfill","upvote_count":"18","selected_answers":""},{"id":317385,"date":"Sun 03 Oct 2021 02:40","username":"ItsmePBilenghsarah_tcertainlyGaurav_GGG","content":"D is correct : As company wants to replace the passwords with temporary credentials using the company existing AWS access controls.<br>below are the steps: <br>set up IAM database authentication using IAM roles, follow these steps:<br><br>1.Enable IAM DB authentication on the DB instance.<br>2.Create a database user account that uses an AWS authentication token.<br>3.Add an IAM policy that maps the database user to the IAM role.<br>4.Attach the IAM role to the EC2 instance.<br>5.Generate an AWS authentication token to identify the IAM role.<br>6.Download the SSL root certificate file or certificate bundle file.<br>7.Connect to the DB instance using IAM role credentials and the authentication token or an SSL certificate.<br>https://aws.amazon.com/premiumsupport/knowledge-center/users-connect-rds-iam/Doesn't step no. 3 mean that the answer is then C?C, because: \\\"To allow an IAM user or role to connect to your DB cluster, you must create an IAM policy. After that, you attach the policy to an IAM user or role.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.htmlI think C sounds closer to what is described in the aws document. also D fit better with question with Idp solution. but it sounds little off for me how do youconfigure the database to use the IAM identity provider to map the administrator roles to the database user?Your steps have one 3rd point about IAM policy map to IAM Role which means C is correct.","upvote_count":"1410871","selected_answers":""},{"id":318743,"date":"Fri 08 Oct 2021 12:38","username":"Bilengh","content":"Doesn't step no. 3 mean that the answer is then C?","upvote_count":"10","selected_answers":""},{"id":334853,"date":"Thu 21 Oct 2021 00:45","username":"sarah_t","content":"C, because: \\\"To allow an IAM user or role to connect to your DB cluster, you must create an IAM policy. After that, you attach the policy to an IAM user or role.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html","upvote_count":"8","selected_answers":""},{"id":319190,"date":"Fri 08 Oct 2021 21:05","username":"certainly","content":"I think C sounds closer to what is described in the aws document. also D fit better with question with Idp solution. but it sounds little off for me how do youconfigure the database to use the IAM identity provider to map the administrator roles to the database user?","upvote_count":"7","selected_answers":""},{"id":508301,"date":"Fri 24 Dec 2021 05:07","username":"Gaurav_GGG","content":"Your steps have one 3rd point about IAM policy map to IAM Role which means C is correct.","upvote_count":"1","selected_answers":""},{"id":714672,"date":"Wed 09 Nov 2022 15:51","username":"mrgreatness","content":"c 1000% done this myself","upvote_count":"1","selected_answers":""},{"id":686689,"date":"Wed 05 Oct 2022 09:40","username":"skywalker","content":"Here is create a new account and not enroll an existing account.Thus B is the answer.If we refer to enroll an exisiting account, then A as it require to sign in with a 64bit character from the email specified during account invitation.","upvote_count":"1","selected_answers":""},{"id":637712,"date":"Wed 27 Jul 2022 03:06","username":"hilft","content":"when you see rotation => secret manager<br>B. ","upvote_count":"2","selected_answers":""},{"id":568698,"date":"Wed 16 Mar 2022 00:24","username":"Bigbearcn","content":"To allow an IAM user or role to connect to your DB instance, you must create an IAM policy. After that, you attach the policy to an IAM user or role.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":513370,"date":"Thu 30 Dec 2021 13:53","username":"cldy","content":"C is correct.<br>https://aws.amazon.com/premiumsupport/knowledge-center/users-connect-rds-iam/","upvote_count":"1","selected_answers":""},{"id":499206,"date":"Sat 11 Dec 2021 09:36","username":"cldy","content":"C.  Enable IAM database authentication on the database. Attach an IAM policy to each system administratorג€™s role to map the role to the database user name. Install the Amazon Aurora SSL certificate bundle to the system administratorsג€™ certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.","upvote_count":"1","selected_answers":""},{"id":477820,"date":"Sat 13 Nov 2021 23:03","username":"Liongeek","content":"Ans C<br>If you could even configure the db to use the IAM IDP to map the administrator roles... you were not only giving access to the administrator but also all the users in the IDP.","upvote_count":"2","selected_answers":""},{"id":447114,"date":"Thu 04 Nov 2021 15:50","username":"andylogan","content":"It's C -IAM policy with temporary credentials","upvote_count":"2","selected_answers":""},{"id":439986,"date":"Wed 03 Nov 2021 12:33","username":"student22","content":"C - Correct<br>A,B - Wrong: Retrieves password<br>D - Not sure if IDP can be used this way. C sounds better.","upvote_count":"2","selected_answers":""},{"id":439722,"date":"Sat 30 Oct 2021 08:29","username":"DerekKey","content":"C correct- https://aws.amazon.com/blogs/big-data/federate-database-user-authentication-easily-with-iam-and-amazon-redshift/<br>D wrong","upvote_count":"1","selected_answers":""},{"id":439645,"date":"Sat 30 Oct 2021 08:05","username":"Coffeinerd","content":"A and B are wrong: it does not address the use of temporary credentials and using existing company controls. It will just rotate existing credentials but not use temporary ones. <br><br>C and D are in the fight... from a technical perspective D would be better BUT I could not find any doc that explains how to leverage an IdP with IAM DB Auth, so I would go for C as it follows the current process to grant an IAM user DB rights.<br><br>CCC!","upvote_count":"1","selected_answers":""},{"id":435333,"date":"Fri 29 Oct 2021 04:55","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":433096,"date":"Thu 28 Oct 2021 14:27","username":"Sur272Viper57","content":"why A is not correct?Because the question states the company wants to replace the passwords with temporary credentials using the company's existing AWS access controls.<br><br>Option A means the they would still rely on storing their password rather than using temp credentials.","upvote_count":"11","selected_answers":""},{"id":459359,"date":"Sun 07 Nov 2021 13:34","username":"Viper57","content":"Because the question states the company wants to replace the passwords with temporary credentials using the company's existing AWS access controls.<br><br>Option A means the they would still rely on storing their password rather than using temp credentials.","upvote_count":"1","selected_answers":""},{"id":431080,"date":"Wed 27 Oct 2021 10:25","username":"Suresh108","content":"Going with CCCCC.  Probable C and D, eliminated D due to Identity provider","upvote_count":"1","selected_answers":""},{"id":428330,"date":"Wed 27 Oct 2021 03:01","username":"denccc","content":"it's D","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#705",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's AWS architecture currently uses access keys and secret access keys stored on each instance to access AWS services. Database credentials are hard-coded on each instance. SSH keys for command-line remote access are stored in a secured Amazon S3 bucket. The company has asked its solutions architect to improve the security posture of the architecture without adding operational complexity.<br>Which combination of steps should the solutions architect take to accomplish this? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#705",
            "answers": [
        
        {
            "choice": "<p>A. Use Amazon EC2 instance profiles with an IAM role<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use AWS Secrets Manager to store access keys and secret access keys<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use AWS Systems Manager Parameter Store to store database credentials<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use a secure fleet of Amazon EC2 bastion hosts for remote access<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Use AWS KMS to store database credentials<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>F. Use AWS Systems Manager Session Manager for remote access<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":312565,"date":"Sat 25 Sep 2021 21:08","username":"wasabidev","content":"I think ACF are better","upvote_count":"28","selected_answers":""},{"id":324696,"date":"Mon 11 Oct 2021 12:42","username":"cnethers","content":"ACF <br>A -roles and instance profiles attached to an instance defining who and what access is a best practice <br>B - not required if your using SSM session manager so you would not need access keys for instances <br>C - parameter store can be used to store secretsso we are green better option would be secrets manager which password rotation <br>D - not wrong but why would you when you can use session manager?<br>E - just wrong<br>F - no brainer https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html","upvote_count":"16","selected_answers":""},{"id":653965,"date":"Tue 30 Aug 2022 11:40","username":"gnic","content":"ABF - Database Credential should be stored in secret manager","upvote_count":"1","selected_answers":""},{"id":592901,"date":"Wed 27 Apr 2022 08:25","username":"JYZ","content":"F is not a good choice as it requires the access to console.","upvote_count":"1","selected_answers":""},{"id":498626,"date":"Fri 10 Dec 2021 13:45","username":"cldy","content":"A.  Use Amazon EC2 instance profiles with an IAM role<br>C.  Use AWS Systems Manager Parameter Store to store database credentials<br>F.  Use AWS Systems Manager Session Manager for remote access","upvote_count":"1","selected_answers":""},{"id":497032,"date":"Wed 08 Dec 2021 18:58","username":"AzureDP900","content":"A,C,F correct","upvote_count":"1","selected_answers":""},{"id":489094,"date":"Sun 28 Nov 2021 12:45","username":"acloudguru","content":"ACF<br>A - roles and instance profiles attached to an instance defining who and what access is a best practice<br>B - not required if your using SSM session manager so you would not need access keys for instances<br>C - parameter store can be used to store secrets so we are green better option would be secrets manager which password rotation<br>D - not wrong but why would you when you can use session manager?<br>E - just wrong<br>F - no brainer https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html","upvote_count":"3","selected_answers":"Selected Answer: ACF"},{"id":447126,"date":"Sat 06 Nov 2021 16:13","username":"andylogan","content":"It's A C F","upvote_count":"1","selected_answers":""},{"id":438485,"date":"Wed 03 Nov 2021 03:07","username":"Kopa","content":"A,C,F no doubt","upvote_count":"1","selected_answers":""},{"id":436598,"date":"Sun 31 Oct 2021 17:35","username":"tgv","content":"AAA CCC FFF<br>---","upvote_count":"1","selected_answers":""},{"id":434245,"date":"Sat 30 Oct 2021 01:04","username":"blackgamer","content":"ACF is the answer","upvote_count":"1","selected_answers":""},{"id":414063,"date":"Sun 24 Oct 2021 17:49","username":"WhyIronMan","content":"I'll go with A, C, F","upvote_count":"1","selected_answers":""},{"id":400768,"date":"Sat 23 Oct 2021 22:58","username":"vimgoru24","content":"ACF no doubts","upvote_count":"1","selected_answers":""},{"id":358642,"date":"Sat 23 Oct 2021 18:37","username":"Waiweng","content":"it's A,C,F","upvote_count":"2","selected_answers":""},{"id":342963,"date":"Wed 20 Oct 2021 11:30","username":"blackgamer","content":"Yes, totally agree with ACF. ","upvote_count":"1","selected_answers":""},{"id":334518,"date":"Thu 14 Oct 2021 12:24","username":"anandbabu","content":"ACD is correct answer","upvote_count":"1","selected_answers":""},{"id":319309,"date":"Mon 11 Oct 2021 06:41","username":"certainly","content":"B is incorrect. don't need to store secret if you can access by assuming role.so I will go for ACF","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#706",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br>Which solution is the MOST cost-effective way to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#706",
            "answers": [
        
        {
            "choice": "<p>A. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure AWS Budgets in the organization's master account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's master account to create monthly reports for each business unit.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Enable AWS Cost and Usage Reports in the organization's master account and configure reports grouped by application, environment, and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":313832,"date":"Wed 22 Sep 2021 15:55","username":"nitinz","content":"B: https://aws.amazon.com/about-aws/whats-new/2019/07/introducing-aws-budgets-reports/#:~:text=AWS%20Budgets%20gives%20you%20the,below%20the%20threshold%20you%20define.","upvote_count":"19","selected_answers":""},{"id":694152,"date":"Thu 13 Oct 2022 19:24","username":"Blair77","content":"BBB ! Centralized + AWS Budgets + Cost Explorer","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":497044,"date":"Wed 08 Dec 2021 19:03","username":"AzureDP900","content":"B is right","upvote_count":"1","selected_answers":""},{"id":496805,"date":"Wed 08 Dec 2021 13:18","username":"cldy","content":"B.  Configure AWS Budgets in the organizationג€™s master account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organizationג€™s master account to create monthly reports for each business unit.","upvote_count":"1","selected_answers":""},{"id":447131,"date":"Sun 31 Oct 2021 07:26","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":443825,"date":"Sun 24 Oct 2021 20:55","username":"AkanshaR91","content":"this question appeared in my exam on 12th July","upvote_count":"3","selected_answers":""},{"id":439991,"date":"Fri 22 Oct 2021 01:27","username":"student22","content":"B<br>Centralized + AWS Budgets + Cost Explorer","upvote_count":"1","selected_answers":""},{"id":435334,"date":"Sat 16 Oct 2021 02:25","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":414066,"date":"Sat 16 Oct 2021 00:11","username":"WhyIronMan","content":"I'll go with B","upvote_count":"1","selected_answers":""},{"id":385674,"date":"Fri 08 Oct 2021 06:18","username":"hk436","content":"B: AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.","upvote_count":"3","selected_answers":""},{"id":363919,"date":"Tue 05 Oct 2021 04:00","username":"vkbajoria","content":"it's B","upvote_count":"2","selected_answers":""},{"id":358644,"date":"Sun 03 Oct 2021 21:06","username":"Waiweng","content":"it's B","upvote_count":"4","selected_answers":""},{"id":338245,"date":"Thu 30 Sep 2021 18:53","username":"ppshein","content":"I will go with B. ","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#707",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is configuring connectivity to a multi-account AWS environment to support application workloads that serve users in a single geographic region. The workloads depend on a highly available, on-premises legacy system deployed across two locations. It is critical for the AWS workloads to maintain connectivity to the legacy system, and a minimum of 5 Gbps of bandwidth is required. All application workloads within AWS must have connectivity with one another.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#707",
            "answers": [
        
        {
            "choice": "<p>A. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create private virtual interfaces on each connection for each AWS account VPC.  Associate the private virtual interface with a virtual private gateway attached to each VPC. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a DX gateway in a central network account and associate it with the virtual private gateways. Create a public virtual interface on each DX connection and associate the interface with the DX gateway.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a transit gateway in a central network account and associate it with the virtual private gateways. Create a transit virtual interface on each DX connection and attach the interface to the transit gateway.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":317500,"date":"Tue 12 Oct 2021 18:55","username":"aws_masterTony_W","content":"A - no, there is no connection between VPCs.<br>B - no, bcz DX gateway doesn't supportrouting from one VPN to another ( https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html )<br>C - right answer. https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html<br>D - no, you can not connect Direct Connect to the Transit gateway without Direct Connect gateway in the middle.One more thing I think I see wrong with B is at the end of the answer. It says to create a PUBLIC Virtual interface on each DX connection. Wouldnt that be a private virtual interface making this answer wrong from the start? Plus transit gateways can do peering. So C would work just fine.","upvote_count":"278","selected_answers":""},{"id":409908,"date":"Mon 01 Nov 2021 18:10","username":"Tony_W","content":"One more thing I think I see wrong with B is at the end of the answer. It says to create a PUBLIC Virtual interface on each DX connection. Wouldnt that be a private virtual interface making this answer wrong from the start? Plus transit gateways can do peering. So C would work just fine.","upvote_count":"8","selected_answers":""},{"id":355466,"date":"Sat 23 Oct 2021 02:19","username":"tvsMrCarter","content":"I go with C https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/direct-connect.htmlawesome link","upvote_count":"51","selected_answers":""},{"id":396240,"date":"Sun 31 Oct 2021 11:52","username":"MrCarter","content":"awesome link","upvote_count":"1","selected_answers":""},{"id":693307,"date":"Wed 12 Oct 2022 20:09","username":"davideccc","content":"c is the right one","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":685708,"date":"Mon 03 Oct 2022 19:29","username":"Ell89","content":"ill go for C","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":625557,"date":"Fri 01 Jul 2022 05:32","username":"aandc","content":"C: All AWS application workloads must be connected to one another -> transit-gateway","upvote_count":"5","selected_answers":""},{"id":608139,"date":"Fri 27 May 2022 17:54","username":"user89","content":"C.  <br>The solution involves the following components:<br><br>A transit gateway that has VPC attachments.<br><br>A Direct Connect gateway.<br><br>An association between the Direct Connect gateway and the transit gateway.<br><br>A transit virtual interface that is attached to the Direct Connect gateway.<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html","upvote_count":"2","selected_answers":""},{"id":599602,"date":"Tue 10 May 2022 15:16","username":"MuskyWilkinsJonfernzLiamNgEnigmaaaaaa","content":"The exact scenario is detailed here: https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.htmlThat link actually suggests C as the answer, bruv.Agree, the answer should be B.  The workload are in separate accounts.<br>Ref to\\\"Virtual private gateway associations across accounts\\\" in MuskyWilkins linkWhere do you see in the link \\\"ublic virtual interface \\\"?","upvote_count":"3111","selected_answers":"Selected Answer: B"},{"id":613542,"date":"Thu 09 Jun 2022 01:55","username":"Jonfernz","content":"That link actually suggests C as the answer, bruv.","upvote_count":"1","selected_answers":""},{"id":603222,"date":"Wed 18 May 2022 12:15","username":"LiamNgEnigmaaaaaa","content":"Agree, the answer should be B.  The workload are in separate accounts.<br>Ref to\\\"Virtual private gateway associations across accounts\\\" in MuskyWilkins linkWhere do you see in the link \\\"ublic virtual interface \\\"?","upvote_count":"11","selected_answers":""},{"id":628295,"date":"Thu 07 Jul 2022 11:30","username":"Enigmaaaaaa","content":"Where do you see in the link \\\"ublic virtual interface \\\"?","upvote_count":"1","selected_answers":""},{"id":580138,"date":"Sun 03 Apr 2022 08:59","username":"jyrajan69sb333","content":"There must be a reason for saying its confined to one region, so DX Gateway is not required. So left with A or D, and D only option that allows for comm between VPC, so the answer is DDX Gateway is required when you want to use a TGW (with Transit VIF per DX connection), even if only for a single Region.","upvote_count":"11","selected_answers":""},{"id":691597,"date":"Tue 11 Oct 2022 01:59","username":"sb333","content":"DX Gateway is required when you want to use a TGW (with Transit VIF per DX connection), even if only for a single Region.","upvote_count":"1","selected_answers":""},{"id":537559,"date":"Tue 01 Feb 2022 01:41","username":"jj22222","content":"C.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":534201,"date":"Fri 28 Jan 2022 01:01","username":"jj22222","content":"C looks right","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":514331,"date":"Sat 01 Jan 2022 03:57","username":"Derrick888","content":"C.  for sure","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":499204,"date":"Sat 11 Dec 2021 09:30","username":"cldy","content":"C.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.","upvote_count":"1","selected_answers":""},{"id":497058,"date":"Wed 08 Dec 2021 19:09","username":"AzureDP900","content":"It is C","upvote_count":"1","selected_answers":""},{"id":447483,"date":"Sat 06 Nov 2021 19:33","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":438491,"date":"Thu 04 Nov 2021 21:58","username":"Kopa","content":"Im for C.  TransitGateway makes sense.","upvote_count":"1","selected_answers":""},{"id":435340,"date":"Thu 04 Nov 2021 15:14","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":434281,"date":"Wed 03 Nov 2021 07:20","username":"blackgamer","content":"C for me","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#708",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company needs to create a separate AWS account for a new digital wallet application. The company uses AWS Organizations to manage its accounts.<br>A solutions architect uses the IAM user Support1 from the master account to create a new member account with finance1@example.com as the email address.<br>What should the solutions architect do to create IAM users in the new member account?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#708",
            "answers": [
        
        {
            "choice": "<p>A. Sign in to the AWS Management Console with AWS account root user credentials by using the 64-character password from the initial AWS Organizations email sent to finance1@example.com. Set up the IAM users as required.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. From the master account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Go to the AWS Management Console sign-in page. Choose ג€Sign in using root account credentials.ג€ Sign in by using the email address finance1@example.com and the master account's root password. Set up the IAM users as required.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Go to the AWS Management Console sign-in page. Sign in by using the account ID of the new member account and the Support1 IAM credentials. Set up the IAM users as required.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":312543,"date":"Fri 24 Sep 2021 05:29","username":"wasabidevRVivek","content":"B. <br>A wrong because \\\"When you create an account, AWS Organizations initially assigns a long (64 characters), complex, randomly generated password to the root user. You can't retrieve this initial password. To access the account as the root user for the first time, you must go through the process for password recovery. \\\"Good explanation. Yes. B is the answer. Aditional inforatonhttps://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"151","selected_answers":""},{"id":545723,"date":"Sat 12 Feb 2022 10:02","username":"RVivek","content":"Good explanation. Yes. B is the answer. Aditional inforatonhttps://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"1","selected_answers":""},{"id":364419,"date":"Tue 19 Oct 2021 12:39","username":"vkbajoria","content":"it is B for me. It makes more sense","upvote_count":"6","selected_answers":""},{"id":714944,"date":"Thu 10 Nov 2022 06:40","username":"janvandermerwer","content":"B for sure - Have had to use this option regularly at work.<br>Would still recommend resetting the password of the root account however.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":680087,"date":"Mon 26 Sep 2022 21:13","username":"dcdcdc3","content":"Not A because an email with password is never sent when creating the account form Orgs","upvote_count":"1","selected_answers":""},{"id":680086,"date":"Mon 26 Sep 2022 21:12","username":"dcdcdc3","content":"B. <br>As added value I would always want to reset the root password once, set mfa and vault both. If not, email admins can get themselves access in the future.","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":526566,"date":"Tue 18 Jan 2022 12:59","username":"Student1950Byrney","content":"A is the correct answer.<br>Reason: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html<br>When an invited account joins your organization, you do not automatically have full administrator control over the account, unlike created accounts. If you want the management account to have full administrative control over an invited member account, you must create the OrganizationAccountAccessRole IAM role in the member account and grant permission to the management account to assume the role.<br>When you create an account in your organization instead of inviting an existing account to join, AWS Organizations automatically creates an IAM role (named OrganizationAccountAccessRole by default) that you can use to grant users in the management account administrator access to the created account.This part is exactly what option B is: \\\"When you create an account in your organization instead of inviting an existing account to join, AWS Organizations automatically creates an IAM role (named OrganizationAccountAccessRole by default) that you can use to grant users in the management account administrator access to the created account.\\\"","upvote_count":"11","selected_answers":""},{"id":713466,"date":"Tue 08 Nov 2022 05:05","username":"Byrney","content":"This part is exactly what option B is: \\\"When you create an account in your organization instead of inviting an existing account to join, AWS Organizations automatically creates an IAM role (named OrganizationAccountAccessRole by default) that you can use to grant users in the management account administrator access to the created account.\\\"","upvote_count":"1","selected_answers":""},{"id":497062,"date":"Wed 08 Dec 2021 19:13","username":"AzureDP900","content":"OrganizationAccountAccessRole is keyword here. B is right","upvote_count":"2","selected_answers":""},{"id":497061,"date":"Wed 08 Dec 2021 19:12","username":"AzureDP900","content":"B is right answer","upvote_count":"2","selected_answers":""},{"id":496008,"date":"Tue 07 Dec 2021 13:54","username":"cldy","content":"B.  From the master account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.","upvote_count":"1","selected_answers":""},{"id":483117,"date":"Sun 21 Nov 2021 09:36","username":"acloudguru","content":"When you create a new member account, Organizations sets an initial password for that account that can't be retrieved. To access the account as the root user for the first time, follow these instructions to reset the initial password.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":480866,"date":"Thu 18 Nov 2021 17:45","username":"Smartphone","content":"The correct option is A.  Please see read the below link for the reference. <br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html","upvote_count":"3","selected_answers":""},{"id":447486,"date":"Sat 06 Nov 2021 23:27","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":438492,"date":"Thu 04 Nov 2021 05:54","username":"Kopa","content":"Im for B, in Neal Davis we practice this often on labs","upvote_count":"3","selected_answers":""},{"id":436605,"date":"Wed 03 Nov 2021 14:12","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":434283,"date":"Tue 02 Nov 2021 17:12","username":"blackgamer","content":"Answer is B","upvote_count":"1","selected_answers":""},{"id":414074,"date":"Wed 27 Oct 2021 00:52","username":"WhyIronMan","content":"I'll go with B<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"2","selected_answers":""},{"id":363598,"date":"Tue 12 Oct 2021 11:39","username":"apmpmWhyIronMan","content":"It has to be AWhen you create a new member account, Organizations sets an initial password for that account that can't be retrieved. To access the account as the root user for the first time, follow these instructions to reset the initial password.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"31","selected_answers":""},{"id":414075,"date":"Thu 28 Oct 2021 16:52","username":"WhyIronMan","content":"When you create a new member account, Organizations sets an initial password for that account that can't be retrieved. To access the account as the root user for the first time, follow these instructions to reset the initial password.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/organizations-member-account-access/","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#709",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is designing a data processing platform to process a large number of files in an Amazon S3 bucket and store the results in Amazon DynamoDB. <br>These files will be processed once and must be retained for 1 year. The company wants to ensure that the original files and resulting data are highly available in multiple AWS Regions.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#709",
            "answers": [
        
        {
            "choice": "<p>A. Create an S3 CreateObject event notification to copy the file to Amazon Elastic Block Store (Amazon EBS). Use AWS DataSync to sync the files between EBS volumes in multiple Regions. Use an Amazon EC2 Auto Scaling group in multiple Regions to attach the EBS volumes. Process the files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 bucket with an S3 Lifecycle policy to move the files to S3 Glacier after 1 year.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an S3 CreateObject event notification to copy the file to Amazon Elastic File System (Amazon EFS). Use AWS DataSync to sync the files between EFS volumes in multiple Regions. Use an AWS Lambda function to process the EFS files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 buckets with an S3 Lifecycle policy to move the files to S3 Glacier after 1 year.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to push S3 file paths into Amazon EventBridge (Amazon CloudWatch Events). Use an AWS Lambda function to poll EventBridge (CloudWatch Events) to process each file and store the results in a DynamoDB table in each Region. Configure both S3 buckets to use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to execute an AWS Lambda function to process each file and store the results in a DynamoDB global table in multiple Regions. Configure both S3 buckets to use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":311177,"date":"Tue 21 Sep 2021 14:47","username":"lostre","content":"D is my choice. S3 CRR, C3 create triggers lambda, stores results in Dynamo DB Global, S3IA and lifecycle to delete after 1 year","upvote_count":"26","selected_answers":""},{"id":358663,"date":"Sun 03 Oct 2021 23:58","username":"Waiweng","content":"it's D","upvote_count":"8","selected_answers":""},{"id":615484,"date":"Sun 12 Jun 2022 22:15","username":"CloudHell","content":"I think it's D, and If it's not D then I'll get it wrong in the exam.","upvote_count":"1","selected_answers":""},{"id":497330,"date":"Thu 09 Dec 2021 05:48","username":"cldy","content":"D.  Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to execute an AWS Lambda function to process each file and store the results in a DynamoDB global table in multiple Regions. Configure both S3 buckets to use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.","upvote_count":"2","selected_answers":""},{"id":497066,"date":"Wed 08 Dec 2021 19:18","username":"AzureDP900","content":"D is right answer. We don't need files after 1 year.","upvote_count":"1","selected_answers":""},{"id":484110,"date":"Mon 22 Nov 2021 12:08","username":"acloudguru","content":"D is my choice. S3 CRR, C3 create triggers lambda, stores results in Dynamo DB Global, S3IA and lifecycle to delete after 1 year","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":447489,"date":"Mon 01 Nov 2021 08:50","username":"andyloganandylogan","content":"It's Btypo It's D","upvote_count":"11","selected_answers":""},{"id":447490,"date":"Mon 01 Nov 2021 15:18","username":"andylogan","content":"typo It's D","upvote_count":"1","selected_answers":""},{"id":439781,"date":"Fri 29 Oct 2021 14:10","username":"DerekKeyViper57Viper57","content":"Have you noticed the requirement:<br>\\\"original files ..... available in multiple AWS Regions\\\"<br>How will you make it working with C & D?<br>\\\"Copy the files to an S3 bucket in another Region by using cross-Region replication\\\"<br>\\\"Configure both S3 buckets\\\"<br>--> Therefore C&D should be WRONG<br>The only solution that will work is B. By your own logic question B is also wrong because it relies on a 'CreateObject' event. This assumes new objects will be created in the S3 bucket which also means D can be correct.Cross region replication also supports replicating existing objects.<br><br>https://aws.amazon.com/blogs/storage/replicating-existing-objects-between-s3-buckets/","upvote_count":"111","selected_answers":""},{"id":450442,"date":"Thu 04 Nov 2021 06:16","username":"Viper57Viper57","content":"By your own logic question B is also wrong because it relies on a 'CreateObject' event. This assumes new objects will be created in the S3 bucket which also means D can be correct.Cross region replication also supports replicating existing objects.<br><br>https://aws.amazon.com/blogs/storage/replicating-existing-objects-between-s3-buckets/","upvote_count":"11","selected_answers":""},{"id":459589,"date":"Sat 06 Nov 2021 22:32","username":"Viper57","content":"Cross region replication also supports replicating existing objects.<br><br>https://aws.amazon.com/blogs/storage/replicating-existing-objects-between-s3-buckets/","upvote_count":"1","selected_answers":""},{"id":438496,"date":"Mon 25 Oct 2021 09:08","username":"Kopa","content":"Im going for D. ","upvote_count":"1","selected_answers":""},{"id":436606,"date":"Sun 24 Oct 2021 09:03","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":434285,"date":"Sat 16 Oct 2021 17:17","username":"blackgamer","content":"It is D","upvote_count":"1","selected_answers":""},{"id":414079,"date":"Wed 13 Oct 2021 05:05","username":"WhyIronMan","content":"I'll go with D","upvote_count":"1","selected_answers":""},{"id":400786,"date":"Sat 09 Oct 2021 17:08","username":"vimgoru24","content":"A is nonsense, D is the way to go","upvote_count":"1","selected_answers":""},{"id":354223,"date":"Fri 01 Oct 2021 00:41","username":"KnightVictor","content":"D is correct. <br>Default answer A is incorrect. Glacier cannot give data back immediately","upvote_count":"3","selected_answers":""},{"id":321518,"date":"Wed 29 Sep 2021 07:08","username":"champcloud","content":"Going with D","upvote_count":"2","selected_answers":""},{"id":313839,"date":"Sun 26 Sep 2021 10:03","username":"nitinz","content":"D is correct","upvote_count":"5","selected_answers":""},{"id":312519,"date":"Sat 25 Sep 2021 14:26","username":"wasabidev","content":"I think D is better than A","upvote_count":"6","selected_answers":""}]
    }
    ,
    {
        "question_id": "#710",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an Apache Hadoop cluster on Amazon EC2 instances. The Hadoop cluster stores approximately 100 TB of data for weekly operational reports and allows occasional access for data scientists to retrieve data. The company needs to reduce the cost and operational complexity for storing and serving this data.<br>Which solution meets these requirements in the MOST cost-effective manner?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#710",
            "answers": [
        
        {
            "choice": "<p>A. Move the Hadoop cluster from EC2 instances to Amazon EMR. Allow data access patterns to remain the same.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Write a script that resizes the EC2 instances to a smaller instance type during downtime and resizes the instances to a larger instance type before the reports are created.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Move the data to Amazon S3 and use Amazon Athena to query the data for reports. Allow the data scientists to access the data directly in Amazon S3.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Migrate the data to Amazon DynamoDB and modify the reports to fetch data from DynamoDB.  Allow the data scientists to access the data directly in DynamoDB. <br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":322963,"date":"Mon 27 Sep 2021 00:45","username":"kejamAWSum1","content":"C: S3 and Athena.\\\"The company needs to reduce the cost and operational complexity for storing and serving this data.Which solution meets these requirements in the MOST cost-effective manner?\\\"EMR storage is ephemeral. The company has 100TB that need to persist, they would have to use EMRFS to backup to S3 anyway.<br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-storage.htmlGreat explanation. I suppose the deliberately put in EMR to confuse you into thinking it solves the Hadoop problem","upvote_count":"263","selected_answers":""},{"id":470824,"date":"Fri 05 Nov 2021 01:32","username":"AWSum1","content":"Great explanation. I suppose the deliberately put in EMR to confuse you into thinking it solves the Hadoop problem","upvote_count":"3","selected_answers":""},{"id":309653,"date":"Mon 20 Sep 2021 16:39","username":"doris0306WhyIronMan","content":"A EMR helps creating Hadoop clusters to analyse vase amount of Databut is not cost effective","upvote_count":"72","selected_answers":""},{"id":414081,"date":"Tue 26 Oct 2021 04:59","username":"WhyIronMan","content":"but is not cost effective","upvote_count":"2","selected_answers":""},{"id":693317,"date":"Wed 12 Oct 2022 20:25","username":"davideccc","content":"athena + S3 is definitely the cheaper option here","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":690451,"date":"Sun 09 Oct 2022 20:32","username":"JohnPi","content":"Move the data to Amazon S3 and use Amazon Athena to query the data for reports. Allow the data scientists to access the data directly in Amazon S3.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":680925,"date":"Tue 27 Sep 2022 17:45","username":"dcdcdc3","content":"Per the below article, EMR is way cheaper than ec2. I would choose A as I am not sure if the structure of hte data can be queried by Athena in cost-effective way<br><br>https://blogs.perficient.com/2016/05/19/two-choices-1-amazon-emr-or-2-hadoop-on-ec2/","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":668853,"date":"Wed 14 Sep 2022 11:48","username":"chase12345","content":"I will choose A AWS EMR because Amazon EMR makes it simple and cost effective to run highly distributed processing frameworks such as Hadoop, Spark, and Presto when compared to on-premises<br>https://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html","upvote_count":"1","selected_answers":""},{"id":651608,"date":"Thu 25 Aug 2022 04:45","username":"AYANtheGLADIATOR","content":"C is the answer because EMR is not a cheap option.","upvote_count":"2","selected_answers":""},{"id":634900,"date":"Fri 22 Jul 2022 01:30","username":"MarkChoi","content":"100TB??<br>Is it possible to use Athena?<br>I'll go with A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":497067,"date":"Wed 08 Dec 2021 19:21","username":"AzureDP900","content":"I agree with C as right answer.","upvote_count":"1","selected_answers":""},{"id":495106,"date":"Mon 06 Dec 2021 13:08","username":"cldy","content":"C.  Move the data to Amazon S3 and use Amazon Athena to query the data for reports. Allow the data scientists to access the data directly in Amazon S3.","upvote_count":"2","selected_answers":""},{"id":447553,"date":"Wed 03 Nov 2021 19:57","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":439801,"date":"Wed 03 Nov 2021 06:48","username":"DerekKey","content":"100TB<br>EBS - 8.109$<br>S3 - 2.355$<br>You have saved 5.752$<br>This amount can be used for Athen. BTW. we don't know indexes, amount of data that is scanned. What we know is that tit will be: \\\"occasional access for data scientists to retrieve data\\\"<br><br>I am choosing C as CORRECT answer","upvote_count":"2","selected_answers":""},{"id":434292,"date":"Sat 30 Oct 2021 04:57","username":"blackgamer","content":"C over A because it is most cost effective.","upvote_count":"1","selected_answers":""},{"id":428337,"date":"Fri 29 Oct 2021 17:23","username":"denccc","content":"It's C","upvote_count":"1","selected_answers":""},{"id":409893,"date":"Sat 23 Oct 2021 13:31","username":"Tony_WDerekKey","content":"Anthena is 5.00 per TB of data scanned. <br>Scenario A: <br>10 queries on 5TB of uncompressed data stored in an S3 bucket. 250.00<br>10 queries on 100TB of uncompressed data ... 5000.00 for just 10 queries.<br>So long story short, reshift. lol But since they are asking for the MOST cost-effective, I would have to say A.  Even though I do see issues with it. And yes, you would back end this with S3 but it just assumes you know that.You are wrong. Check my answer.","upvote_count":"22","selected_answers":""},{"id":439802,"date":"Wed 03 Nov 2021 11:22","username":"DerekKey","content":"You are wrong. Check my answer.","upvote_count":"2","selected_answers":""},{"id":400794,"date":"Sat 23 Oct 2021 11:00","username":"vimgoru24DerekKey","content":"The proper answer should be: move the stuff to Redshift and use it to query / generate reports.This is not most cost-effective solution","upvote_count":"11","selected_answers":""},{"id":439794,"date":"Sun 31 Oct 2021 12:32","username":"DerekKey","content":"This is not most cost-effective solution","upvote_count":"1","selected_answers":""},{"id":400792,"date":"Sat 09 Oct 2021 23:20","username":"vimgoru24","content":"All of them nonsense. A does address only part of the problem, and C would fail performance-wise in real world - try query 100 TB with Athena.","upvote_count":"5","selected_answers":""}]
    }
    ,
    {
        "question_id": "#711",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a sensor data collection pipeline in which thousands of sensors write data to an Amazon Simple Queue Service (Amazon SQS) queue every minute. The queue is processed by an AWS Lambda function that extracts a standard set of metrics from the sensor data. The company wants to send the data to Amazon CloudWatch. The solution should allow for viewing individual and aggregate sensor metrics and interactively querying the sensor log data using<br>CloudWatch Logs Insights.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#711",
            "answers": [
        
        {
            "choice": "<p>A. Write the processed data to CloudWatch Logs in the CloudWatch embedded metric format.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Write the processed data to CloudWatch Logs. Then write the data to CloudWatch by using the PutMetricData API call.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Write the processed data to CloudWatch Logs in a structured format. Create a CloudWatch metric filter to parse the logs and publish the metrics to CloudWatch with dimensions to uniquely identify a sensor.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure the CloudWatch Logs agent for AWS Lambda. Output the metrics for each sensor in statsd format with tags to uniquely identify a sensor. Write the processed data to CloudWatch Logs.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":311899,"date":"Tue 21 Sep 2021 13:48","username":"sek12324","content":"A<br>The CloudWatch embedded metric format is a JSON specification used to instruct CloudWatch Logs to automatically extract metric values embedded in structured log events. You can use CloudWatch to graph and create alarms on the extracted metric values.","upvote_count":"20","selected_answers":""},{"id":613023,"date":"Wed 08 Jun 2022 04:11","username":"kangtamo","content":"Go with A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":497072,"date":"Wed 08 Dec 2021 19:33","username":"AzureDP900","content":"A is right<br><br>https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-embedded-metric-format/","upvote_count":"2","selected_answers":""},{"id":447556,"date":"Sat 06 Nov 2021 19:02","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":435348,"date":"Wed 27 Oct 2021 07:51","username":"tgv","content":"AAA<br>---","upvote_count":"1","selected_answers":""},{"id":434296,"date":"Mon 25 Oct 2021 19:07","username":"blackgamer","content":"A is the answer.","upvote_count":"1","selected_answers":""},{"id":414085,"date":"Fri 22 Oct 2021 15:44","username":"WhyIronMan","content":"I'll go with A","upvote_count":"2","selected_answers":""},{"id":359192,"date":"Fri 15 Oct 2021 05:58","username":"Waiweng","content":"it's A","upvote_count":"3","selected_answers":""},{"id":340178,"date":"Wed 29 Sep 2021 22:50","username":"Kelvin","content":"A is correct. https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-embedded-metric-format/","upvote_count":"2","selected_answers":""},{"id":329998,"date":"Sun 26 Sep 2021 02:25","username":"Pupu86","content":"A. <br>https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-embedded-metric-format/","upvote_count":"3","selected_answers":""},{"id":321514,"date":"Thu 23 Sep 2021 15:08","username":"champcloud","content":"Going with A","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#712",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors. Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events.<br>The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.<br>Which strategy meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#712",
            "answers": [
        
        {
            "choice": "<p>A. Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":319703,"date":"Tue 21 Sep 2021 16:06","username":"certainlycertainly","content":"it is A for me.you can enabled cached on API gateway. no need for extra cache layer for additional cost.also changing to Edge-optimized endpoint would also help caching content base on Cookie https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.htmlhttps://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html","upvote_count":"133","selected_answers":""},{"id":319705,"date":"Sun 26 Sep 2021 08:25","username":"certainly","content":"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html","upvote_count":"3","selected_answers":""},{"id":707028,"date":"Sat 29 Oct 2022 08:34","username":"rahulrajtiwari","content":"it's A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":522532,"date":"Thu 13 Jan 2022 00:47","username":"tkanmani76","content":"Was inclined to B but it does add additional cost for Elasticache.Using API gateway caching helps.<br><br>You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API.<br><br>When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint. The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.","upvote_count":"1","selected_answers":""},{"id":497357,"date":"Thu 09 Dec 2021 06:35","username":"cldy","content":"A.  Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.","upvote_count":"1","selected_answers":""},{"id":497076,"date":"Wed 08 Dec 2021 19:38","username":"AzureDP900","content":"A is for sure","upvote_count":"1","selected_answers":""},{"id":447567,"date":"Sun 07 Nov 2021 12:03","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":437052,"date":"Sun 07 Nov 2021 04:11","username":"tgv","content":"AAA<br>---","upvote_count":"2","selected_answers":""},{"id":431588,"date":"Fri 05 Nov 2021 08:24","username":"denccc","content":"It's A","upvote_count":"1","selected_answers":""},{"id":414092,"date":"Thu 04 Nov 2021 19:45","username":"WhyIronMan","content":"I'll go with A","upvote_count":"2","selected_answers":""},{"id":400506,"date":"Thu 04 Nov 2021 11:14","username":"vimgoru24","content":"B is classic, but A works better to minimize cost and overhead. So A","upvote_count":"2","selected_answers":""},{"id":375070,"date":"Tue 19 Oct 2021 21:12","username":"cmthiru","content":"Will got for B. <br>https://aws.amazon.com/blogs/database/latency-reduction-of-hybrid-architectures-with-amazon-elasticache/","upvote_count":"1","selected_answers":""},{"id":359195,"date":"Sun 10 Oct 2021 07:04","username":"Waiweng","content":"it's A","upvote_count":"2","selected_answers":""},{"id":338650,"date":"Sun 03 Oct 2021 05:40","username":"ppshein","content":"it should be A. <br>B = costly","upvote_count":"1","selected_answers":""},{"id":334587,"date":"Sat 02 Oct 2021 17:41","username":"anandbabu","content":"its B as it was mentioned \\\"same Queries\\\"","upvote_count":"3","selected_answers":""},{"id":330004,"date":"Fri 01 Oct 2021 06:45","username":"Pupu86","content":"Default endpoint setting is usually edge-optimised to support cookie forwarding which in turn caches multiple identical reads in its cloudfront cache. Thus reducing the need to keep fetching identical data from the origin. While B is viable but implemented persistent memory based caching is definitely more costly. So I’m inclined to move towards A. ","upvote_count":"2","selected_answers":""},{"id":328697,"date":"Wed 29 Sep 2021 10:07","username":"SD13SD13MrCarter","content":"Correct option A. B is not an option for me because API gateway caching will eliminate lambda invocations and costs associated with it.Neal Davis exam also selected this option as the correct one.yessir Neal Davis ftw","upvote_count":"343","selected_answers":""},{"id":328699,"date":"Wed 29 Sep 2021 23:13","username":"SD13MrCarter","content":"Neal Davis exam also selected this option as the correct one.yessir Neal Davis ftw","upvote_count":"43","selected_answers":""},{"id":396249,"date":"Thu 28 Oct 2021 08:05","username":"MrCarter","content":"yessir Neal Davis ftw","upvote_count":"3","selected_answers":""},{"id":322823,"date":"Mon 27 Sep 2021 06:01","username":"kejam","content":"B: https://aws.amazon.com/getting-started/hands-on/real-time-leaderboard-amazon-aurora-serverless-elasticache/","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#713",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS for PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released.<br>What changes to the current architecture will reduce operational overhead and support the product release?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#713",
            "answers": [
        
        {
            "choice": "<p>A. Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":308836,"date":"Wed 22 Sep 2021 14:49","username":"kalyan_krishna742020","content":"D seems to be correct","upvote_count":"31","selected_answers":""},{"id":435704,"date":"Tue 02 Nov 2021 19:57","username":"Liongeek","content":"For those that don't know if answer is C or D.  They say they want to support the increase demand... MultiAZ doesn't help with that, MuliAZ it's meant for HA, but read replicas are meant for increased demand... that's why ans is D","upvote_count":"16","selected_answers":""},{"id":636475,"date":"Mon 25 Jul 2022 08:16","username":"cen007","content":"Ans D. <br>Solution is here.<br>https://aws.amazon.com/blogs/big-data/power-your-kafka-streams-application-with-amazon-msk-and-aws-fargate/<br>Fargate+Amazon MSK<br><br>A.  Running container on EC2 is more expensive compared to Fargate<br>B.  Same as above + higher Multi AZ costs.<br>C.  same as B. ","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":631957,"date":"Sat 16 Jul 2022 02:21","username":"Student1950","content":"I would vote for C. <br>RDS support auto-scaling -> less operating cost <br>https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/#:~:text=RDS%20Storage%20Auto%20Scaling%20continuously,in%20the%20AWS%20Management%20Console.<br>RDS-Multi-AZ- To support sync R/W in case of failures since more write load for DB with new orders","upvote_count":"3","selected_answers":""},{"id":630787,"date":"Wed 13 Jul 2022 07:46","username":"hahaaaaaArreRaja","content":"it's C<br>- B : not denotes about container <br>- D : Fargate is managed Service. no use EC2AWS Fargate with Amazon EKS is available in all Amazon EKS Regions except AWS GovCloud (US-East) and AWS GovCloud (US-West).<br>from https://docs.aws.amazon.com/eks/latest/userguide/fargate.html","upvote_count":"11","selected_answers":""},{"id":659442,"date":"Sun 04 Sep 2022 20:11","username":"ArreRaja","content":"AWS Fargate with Amazon EKS is available in all Amazon EKS Regions except AWS GovCloud (US-East) and AWS GovCloud (US-West).<br>from https://docs.aws.amazon.com/eks/latest/userguide/fargate.html","upvote_count":"1","selected_answers":""},{"id":602632,"date":"Mon 16 May 2022 17:13","username":"Niaj","content":"D is the right answer here","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":564025,"date":"Wed 09 Mar 2022 13:25","username":"SonujunkowsyhHasitha99","content":"Cannot be D, as Fargate is part of ECS and not EKS<br>B - looks correct <br>1, Cost saving with ASG<br>2. Storage Auto Scaling for Volume<br>3, Multi AZ for better support /availabilityAmazon EKS support run Kubernetes pods on AWS Fargate<br>https://docs.aws.amazon.com/eks/latest/userguide/fargate.htmlFargate support for both ECS and EKS.<br>Ref : https://docs.aws.amazon.com/eks/latest/userguide/fargate.html","upvote_count":"212","selected_answers":""},{"id":587075,"date":"Sun 17 Apr 2022 08:23","username":"wsyh","content":"Amazon EKS support run Kubernetes pods on AWS Fargate<br>https://docs.aws.amazon.com/eks/latest/userguide/fargate.html","upvote_count":"1","selected_answers":""},{"id":582102,"date":"Thu 07 Apr 2022 03:30","username":"Hasitha99","content":"Fargate support for both ECS and EKS.<br>Ref : https://docs.aws.amazon.com/eks/latest/userguide/fargate.html","upvote_count":"2","selected_answers":""},{"id":560927,"date":"Fri 04 Mar 2022 18:42","username":"omishaaaa","content":"D seems right to me as well since `deploying the DB instance in Multi-AZ mode and enable storage auto scaling` seems like a huge manual effort. DBs are not advised to have storage autoscaling.","upvote_count":"1","selected_answers":""},{"id":560727,"date":"Fri 04 Mar 2022 12:33","username":"Mechanic","content":"I guess it's C. <br>Not B? because Kinesis and S3 will make an extra costs in addition to the burden of modifying the apps to use Kinesis.<br>Not D? because EKS will charge more cost.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":529810,"date":"Sat 22 Jan 2022 13:20","username":"RVivekRVivek","content":"C-- Latency based to direct to the reagion close to the user and failover for resilency<br>E-DB repplication Instance back upSorry commented on a wrong question and unbale to delete","upvote_count":"11","selected_answers":""},{"id":536942,"date":"Mon 31 Jan 2022 13:04","username":"RVivek","content":"Sorry commented on a wrong question and unbale to delete","upvote_count":"1","selected_answers":""},{"id":505609,"date":"Mon 20 Dec 2021 19:10","username":"faisalshani001","content":"D seems right. Because I think auto-storage scaling is a feature of DynamoDB and/or Aurora.","upvote_count":"1","selected_answers":""},{"id":497079,"date":"Wed 08 Dec 2021 19:44","username":"AzureDP900","content":"D seems right option, I am only thinking about read-write not mentioned in this option as per question there is big rise in order volume","upvote_count":"1","selected_answers":""},{"id":494373,"date":"Sun 05 Dec 2021 14:38","username":"cldy","content":"D.  Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.","upvote_count":"1","selected_answers":""},{"id":487042,"date":"Fri 26 Nov 2021 03:19","username":"cakriwut","content":"D - better product release support, using PROD v1 and PROD v2 namespace in kubernetes to support product release lifecycle; better scalability with lower cost of maintaining own fleet of ec2","upvote_count":"3","selected_answers":"Selected Answer: D"},{"id":483971,"date":"Mon 22 Nov 2021 09:48","username":"backfringe","content":"I go with D","upvote_count":"1","selected_answers":""},{"id":448038,"date":"Sat 06 Nov 2021 08:57","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":436609,"date":"Thu 04 Nov 2021 17:58","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#714",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently completed a large-scale migration to AWS. Development teams that support various business units have their own accounts in AWS<br>Organizations. A central cloud team is responsible for controlling which services and resources can be accessed, and for creating operational strategies for all teams within the company. Some teams are approaching their account service quotas. The cloud team needs to create an automated and operationally efficient solution to proactively monitor service quotas. Monitoring should occur every 15 minutes and send alerts when a team exceeds 80% utilization.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#714",
            "answers": [
        
        {
            "choice": "<p>A. Create a scheduled AWS Config rule to trigger an AWS Lambda function to call the GetServiceQuota API. If any service utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an Amazon CloudWatch alarm that triggers an AWS Lambda function to call the Amazon CloudWatch GetInsightRuleReport API to retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish an Amazon Simple Email Service (Amazon SES) notification to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, use Amazon Pinpoint to send an alert to the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":316345,"date":"Fri 01 Oct 2021 15:21","username":"SD13certainly","content":"B is correct.<br>A: Lambda should be invoked by cloudwatch on a schedule, not by Config.<br>C & D : does not make much sense to me.agree with B","upvote_count":"143","selected_answers":""},{"id":319721,"date":"Sun 03 Oct 2021 19:47","username":"certainly","content":"agree with B","upvote_count":"3","selected_answers":""},{"id":357516,"date":"Sun 17 Oct 2021 09:44","username":"KnightVictor9xnineChibuzo1","content":"Going with B.  Verified this in Neal Davis sample questionsWhat's Neal Davis sample questions?Google Neal Davis and you will find out","upvote_count":"513","selected_answers":""},{"id":393350,"date":"Sat 23 Oct 2021 07:00","username":"9xnineChibuzo1","content":"What's Neal Davis sample questions?Google Neal Davis and you will find out","upvote_count":"13","selected_answers":""},{"id":405269,"date":"Sun 31 Oct 2021 01:41","username":"Chibuzo1","content":"Google Neal Davis and you will find out","upvote_count":"3","selected_answers":""},{"id":607600,"date":"Thu 26 May 2022 13:01","username":"bobsmith2000","content":"No-brainer","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":523018,"date":"Thu 13 Jan 2022 20:03","username":"pititcu667","content":"i agree it's b","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":513985,"date":"Fri 31 Dec 2021 10:26","username":"cldy","content":"B is correct.","upvote_count":"1","selected_answers":""},{"id":497589,"date":"Thu 09 Dec 2021 11:17","username":"Tan0k","content":"BBB<br><br>...","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":497080,"date":"Wed 08 Dec 2021 19:48","username":"AzureDP900","content":"I will go with B.  Amzon Pinpoint is not relevant to this question<br><br>Amazon Pinpoint is a flexible and scalable outbound and inbound marketing communications service. You can connect with customers over channels like email, SMS, push, voice or in-app messaging. Amazon Pinpoint is easy to set up, easy to use, and is flexible for all marketing communication scenarios. Segment your campaign audience for the right customer and personalize your messages with the right content. Delivery and campaign metrics in Amazon Pinpoint measure the success of your communications. Amazon Pinpoint can grow with you and scales globally to billions of messages per day across channels.","upvote_count":"1","selected_answers":""},{"id":448045,"date":"Sat 06 Nov 2021 11:37","username":"andylogan","content":"It's B. <br>Service Limits ---> Trusted Advisor","upvote_count":"1","selected_answers":""},{"id":438523,"date":"Sat 06 Nov 2021 06:21","username":"Kopa","content":"B for sure, Trusted Advisor","upvote_count":"2","selected_answers":""},{"id":436611,"date":"Thu 04 Nov 2021 11:55","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":434300,"date":"Tue 02 Nov 2021 06:07","username":"blackgamer","content":"B, trusted advisor to check service limits.","upvote_count":"3","selected_answers":""},{"id":414100,"date":"Mon 01 Nov 2021 23:21","username":"WhyIronMan","content":"I'll go with B","upvote_count":"3","selected_answers":""},{"id":375299,"date":"Wed 20 Oct 2021 20:28","username":"Amitv2706","content":"B. <br>Service Limits ---> Trusted Advisor","upvote_count":"1","selected_answers":""},{"id":359207,"date":"Mon 18 Oct 2021 19:45","username":"Waiweng","content":"it's B","upvote_count":"4","selected_answers":""},{"id":354678,"date":"Sat 16 Oct 2021 09:54","username":"ladh","content":"why not c?","upvote_count":"2","selected_answers":""},{"id":332983,"date":"Tue 12 Oct 2021 06:22","username":"gsw","content":"The answer is A - service quotas were introduced in 2019 so B is not correct","upvote_count":"1","selected_answers":""},{"id":322835,"date":"Mon 11 Oct 2021 09:42","username":"kejam","content":"B: https://docs.aws.amazon.com/solutions/latest/limit-monitor/architecture.html","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#715",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.<br>The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application<br>Load Balancer (ALB) in a VPC.  The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets.<br>How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#715",
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
        "discusstion": [{"id":311550,"date":"Tue 21 Sep 2021 03:28","username":"heyheyhei","content":"B should be correct. When EC2 instances reach third-party API through internet, their privates IP addresses will be masked by NAT Gateway public IP address.","upvote_count":"21","selected_answers":""},{"id":312298,"date":"Tue 21 Sep 2021 17:03","username":"wasabidev","content":"B.  instances in private subnets use NAT, not ELB","upvote_count":"9","selected_answers":""},{"id":577278,"date":"Tue 29 Mar 2022 08:16","username":"Mimek","content":"B IMHO","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":532557,"date":"Wed 26 Jan 2022 03:16","username":"tkanmani76Sonujunko","content":"D also works.ALB is for connections coming in not going out. EC2 will respond to sessions coming through ALB for 80 and 443, for EC2initiate anything from 3rd party source on internet it need NAT G/W","upvote_count":"11","selected_answers":""},{"id":556948,"date":"Sat 26 Feb 2022 20:36","username":"Sonujunko","content":"ALB is for connections coming in not going out. EC2 will respond to sessions coming through ALB for 80 and 443, for EC2initiate anything from 3rd party source on internet it need NAT G/W","upvote_count":"1","selected_answers":""},{"id":514005,"date":"Fri 31 Dec 2021 10:48","username":"cldy","content":"B s correct.","upvote_count":"1","selected_answers":""},{"id":497081,"date":"Wed 08 Dec 2021 19:51","username":"AzureDP900","content":"B seems right choice.","upvote_count":"1","selected_answers":""},{"id":448048,"date":"Fri 05 Nov 2021 05:42","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":436614,"date":"Wed 03 Nov 2021 07:23","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":434301,"date":"Mon 25 Oct 2021 20:26","username":"blackgamer","content":"B obviously.","upvote_count":"1","selected_answers":""},{"id":414101,"date":"Sun 24 Oct 2021 10:26","username":"WhyIronMan","content":"I'll go with B","upvote_count":"4","selected_answers":""},{"id":393722,"date":"Mon 11 Oct 2021 11:45","username":"zapper1234vimgoru24Viper57","content":"Why not C? C is the only answer that meets the solution criteria by only have \\\"one\\\" IP.There is no such criteria. The criteria is to have calling IP in the predefined CIDR range. The B covers that.You cannot assign an elastic IP address to an ALB, only NLBs.","upvote_count":"113","selected_answers":""},{"id":400511,"date":"Tue 12 Oct 2021 05:38","username":"vimgoru24","content":"There is no such criteria. The criteria is to have calling IP in the predefined CIDR range. The B covers that.","upvote_count":"1","selected_answers":""},{"id":459604,"date":"Fri 05 Nov 2021 12:44","username":"Viper57","content":"You cannot assign an elastic IP address to an ALB, only NLBs.","upvote_count":"3","selected_answers":""},{"id":385699,"date":"Tue 05 Oct 2021 15:20","username":"hk436","content":"B is my answer!!","upvote_count":"1","selected_answers":""},{"id":359210,"date":"Mon 04 Oct 2021 19:42","username":"Waiweng","content":"it's B","upvote_count":"4","selected_answers":""},{"id":343287,"date":"Sun 03 Oct 2021 09:45","username":"blackgamer","content":"Agree with B.  NAT.","upvote_count":"2","selected_answers":""},{"id":328706,"date":"Fri 01 Oct 2021 12:36","username":"SD13","content":"B looks like a good option compared to others.","upvote_count":"2","selected_answers":""},{"id":322838,"date":"Tue 21 Sep 2021 22:08","username":"kejam","content":"B: https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-bring-your-own-ip-byoip-for-amazon-vpc/","upvote_count":"4","selected_answers":""}]
    }
    ,
    {
        "question_id": "#716",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple<br>Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts.<br>A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks.<br>Trusted access has been enabled in Organizations.<br>What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#716",
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
            "choice": "<p>C. Create a stack set in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create stacks in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":314769,"date":"Sat 25 Sep 2021 05:07","username":"lostre","content":"C (master -> members, service-managed permissions, deploy to org, auto deployment)<br>https://aws.amazon.com/blogs/aws/use-cloudformation-stacksets-to-provision-resources-across-multiple-aws-accounts-and-regions/","upvote_count":"16","selected_answers":""},{"id":542733,"date":"Mon 07 Feb 2022 23:38","username":"jj22222","content":"C looks right","upvote_count":"1","selected_answers":""},{"id":513375,"date":"Thu 30 Dec 2021 14:00","username":"cldy","content":"C is correct.","upvote_count":"1","selected_answers":""},{"id":499326,"date":"Sat 11 Dec 2021 11:27","username":"cldy","content":"C.  Create a stack set in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.","upvote_count":"1","selected_answers":""},{"id":498997,"date":"Sat 11 Dec 2021 00:11","username":"challenger1","content":"My Answer: C","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497102,"date":"Wed 08 Dec 2021 20:04","username":"AzureDP900","content":"I am going with C","upvote_count":"1","selected_answers":""},{"id":449418,"date":"Fri 05 Nov 2021 17:54","username":"moon2351","content":"Answer is C","upvote_count":"1","selected_answers":""},{"id":448052,"date":"Thu 04 Nov 2021 14:50","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":437068,"date":"Wed 03 Nov 2021 22:36","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":414105,"date":"Fri 29 Oct 2021 14:29","username":"WhyIronMan","content":"I'll go with C","upvote_count":"2","selected_answers":""},{"id":400515,"date":"Sun 24 Oct 2021 23:21","username":"vimgoru24","content":"Did not know you can do C.  Nice feature.","upvote_count":"1","selected_answers":""},{"id":385705,"date":"Tue 19 Oct 2021 04:29","username":"hk436","content":"C is my answer!!","upvote_count":"1","selected_answers":""},{"id":359227,"date":"Thu 14 Oct 2021 03:20","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":330142,"date":"Sun 10 Oct 2021 05:24","username":"AJBA","content":"C<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html","upvote_count":"3","selected_answers":""},{"id":320557,"date":"Mon 04 Oct 2021 17:33","username":"nitinz","content":"C is correct","upvote_count":"2","selected_answers":""},{"id":317522,"date":"Sat 25 Sep 2021 16:02","username":"aws_master","content":"i think C as well","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#717",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to provide desktop as a service (DaaS) to a number of employees using Amazon WorkSpaces. WorkSpaces will need to access files and services hosted on premises with authorization based on the company's Active Directory. Network connectivity will be provided through an existing AWS Direct<br>Connect connection.<br>The solution has the following requirements:<br>✑ Credentials from Active Directory should be used to access on-premises files and services.<br>✑ Credentials from Active Directory should not be stored outside the company.<br>✑ End users should have single sign-on (SSO) to on-premises files and services once connected to WorkSpaces.<br>Which strategy should the solutions architect use for end user authentication?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#717",
            "answers": [
        
        {
            "choice": "<p>A. Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory within the WorkSpaces VPC.  Use the Active Directory Migration Tool (ADMT) with the Password Export Server to copy users from the on-premises Active Directory to AWS Managed Microsoft AD.  Set up a one- way trust allowing users from AWS Managed Microsoft AD to access resources in the on-premises Active Directory. Use AWS Managed Microsoft AD as the directory for WorkSpaces.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service to be deployed on premises using the service account to communicate with the on-premises Active Directory. Ensure the required TCP ports are open from the WorkSpaces VPC to the on-premises AD Connector. Use the AD Connector as the directory for WorkSpaces.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service within the WorkSpaces VPC using the service account to communicate with the on-premises Active Directory. Use the AD Connector as the directory for WorkSpaces.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory in the AWS Directory Service within the WorkSpaces VPC.  Set up a one-way trust allowing users from the on-premises Active Directory to access resources in the AWS Managed Microsoft AD.  Use AWS Managed Microsoft AD as the directory for WorkSpaces. Create an identity provider with AWS Identity and Access Management (IAM) from an on-premises ADFS server. Allow users from this identity provider to assume a role with a policy allowing them to run WorkSpaces.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":311558,"date":"Thu 23 Sep 2021 04:16","username":"heyheyhei","content":"C should be correct. One of the requirement is “Credentials from Active Directory should not be stored outside the company”, where AD Connector will not cache any information in the cloud.<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html","upvote_count":"21","selected_answers":""},{"id":338076,"date":"Tue 05 Oct 2021 02:46","username":"Jaypdv","content":"C. <br><br>First clue: \\\"AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory without caching any information in the cloud. \\\" (https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html) which includes pretty much everything needed in the question<br>Other clue: one-way trust do not work with AWS SSO (https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html) that would eliminate D. ","upvote_count":"7","selected_answers":""},{"id":643640,"date":"Sun 07 Aug 2022 10:44","username":"MikeyJ","content":"AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory without caching any information in the cloud.<br><br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":637017,"date":"Tue 26 Jul 2022 02:22","username":"hilft","content":"C. <br>Not D.  it says credential shoudn't leave outside.","upvote_count":"2","selected_answers":""},{"id":630143,"date":"Mon 11 Jul 2022 19:21","username":"asfsdfsdf","content":"I will go with C ...<br>Caching is not being done on cloud...<br>Also it requires two-way trust in order to implement D<br>https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspace-trusted-domain.html<br>taking look at the documentation creating it with one-way trust is done using AD connector:<br>https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspace-ad-connector.html<br>And <br>https://d1.awsstatic.com/Projects/deploy-amazon-workspaces-one-way-trust-with-aws-directory-service.pdf","upvote_count":"1","selected_answers":""},{"id":626456,"date":"Sun 03 Jul 2022 09:08","username":"aandc","content":"\\\"AWS SSO\\\" is a AWS service which dose not support one way trust. But in this Q, The SSO is the general term. hence D","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":584811,"date":"Tue 12 Apr 2022 17:22","username":"prathima","content":"Answer is D","upvote_count":"1","selected_answers":""},{"id":569986,"date":"Thu 17 Mar 2022 18:48","username":"nimodaytona","content":"C, https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspace-ad-connector.html","upvote_count":"1","selected_answers":""},{"id":518330,"date":"Thu 06 Jan 2022 16:51","username":"lucesarano","content":"There’s no need to “ensure the required TCP ports are open from the WS VPC to the on-prem AD Connector” <br><br>The connector is on aws, meaning B is wrong.<br><br>A is wrong, it violates 2nd req.<br><br>D is wrong because there’s no need to create an additional AD on AWS.<br><br>C is the only feasible answer.","upvote_count":"1","selected_answers":""},{"id":448055,"date":"Sat 30 Oct 2021 02:35","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":436616,"date":"Thu 28 Oct 2021 14:28","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":434303,"date":"Wed 27 Oct 2021 17:37","username":"blackgamer","content":"C to me.","upvote_count":"2","selected_answers":""},{"id":415281,"date":"Mon 25 Oct 2021 01:07","username":"Kopa","content":"AD connector for this case, im going for C","upvote_count":"2","selected_answers":""},{"id":414109,"date":"Fri 22 Oct 2021 23:49","username":"WhyIronMan","content":"I'll go with C","upvote_count":"4","selected_answers":""},{"id":399404,"date":"Thu 14 Oct 2021 19:10","username":"DashLDashL","content":"B<br>The document https://docs.aws.amazon.com/whitepapers/latest/best-practices-deploying-amazon-workspaces/best-practices-deploying-amazon-workspaces.pdf provides various scenarios of deploying Workspace. In this document, there is a note: Regardless of its location (on premises or remote), the device running the Amazon WorkSpaces client uses the same two ports for connectivity to the Amazon WorkSpaces service. The client uses port 443 (HTTPS port) for all authentication and session-related information, and port 4172 (PCoIP port), with both Transmission Control Protocol (TCP) and User Datagram Protocol (UDP), for pixel streaming to a given WorkSpace and network health checks. <br>Looks like it is required to open TCP Ports.I guess, I was wrong. Option B says open \\\"TCP ports are open from the WorkSpaces VPC to the on-premises AD Connector\\\". The AD connector is on AWS, not on-prem.<br>Ans should be C. ","upvote_count":"13","selected_answers":""},{"id":399414,"date":"Thu 21 Oct 2021 11:15","username":"DashL","content":"I guess, I was wrong. Option B says open \\\"TCP ports are open from the WorkSpaces VPC to the on-premises AD Connector\\\". The AD connector is on AWS, not on-prem.<br>Ans should be C. ","upvote_count":"3","selected_answers":""},{"id":385707,"date":"Thu 14 Oct 2021 03:52","username":"hk436","content":"C is my answer!!","upvote_count":"2","selected_answers":""},{"id":375314,"date":"Sun 10 Oct 2021 02:32","username":"Amitv2706","content":"C. <br><br>AD Connector simply connects your existing on-premises Active Directory to AWS. AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory \\\"without caching any information in the cloud. \\\"<br><br>https://aws.amazon.com/single-sign-on/faqs/","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#718",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints.<br>Which step should the solutions architect take to resolve this issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#718",
            "answers": [
        
        {
            "choice": "<p>A. Update the subnet route table with a route to the interface endpoint<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable the private DNS option on the VPC attributes<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure the security group on the interface endpoint to allow connectivity to the AWS services<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":347365,"date":"Wed 29 Sep 2021 18:25","username":"oxfordsolutions","content":"yup its B https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.html#vpce-private-dns","upvote_count":"18","selected_answers":""},{"id":428225,"date":"Sat 23 Oct 2021 16:37","username":"pablobairatsashsztgv","content":"It is C, Private DNS is turned on by default for endpoints created for AWS services and AWS Marketplace Partner services, so B is ruled out of the question.<br>Source: https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.htmlLearn some more about the security group's purpose for EP interface<br>It's Bgood catch!","upvote_count":"1021","selected_answers":""},{"id":583581,"date":"Sun 10 Apr 2022 07:09","username":"sashsz","content":"Learn some more about the security group's purpose for EP interface<br>It's B","upvote_count":"2","selected_answers":""},{"id":435759,"date":"Wed 27 Oct 2021 14:30","username":"tgv","content":"good catch!","upvote_count":"1","selected_answers":""},{"id":637008,"date":"Tue 26 Jul 2022 02:10","username":"hilft","content":"I think it's B","upvote_count":"2","selected_answers":""},{"id":633768,"date":"Wed 20 Jul 2022 00:47","username":"dkp","content":"Ans is B <br>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-interface-configure-dns/","upvote_count":"1","selected_answers":""},{"id":630147,"date":"Mon 11 Jul 2022 19:28","username":"asfsdfsdf","content":"I will go with B. <br>For everyone saying its C - if this was an SG issue the address would be resolved with the private IP but not accessaible.<br>you can see proof here:<br>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-interface-configure-dns/<br>For the interface VPC endpoint, verify that private DNS names is turned on. If private DNS names isn't turned on, the service domain name or endpoint domain name resolves to regional public IPs. For steps to turn on private DNS names, see Modify an interface endpoint.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":617963,"date":"Sat 18 Jun 2022 00:18","username":"Chitty9","content":"Option C is appropriate.<br>Option B also correct if this point not highlighted-internal services are unable to connect to the interface endpoints.","upvote_count":"1","selected_answers":""},{"id":581875,"date":"Wed 06 Apr 2022 16:37","username":"dev10","content":"Ans B:even though private DNS option is enabled we still need to ensure the VPC attributes are set to true. To use private DNS, you must set the following VPC attributes to true: enableDnsHostnames and enableDnsSupport.<br>There is a possibility that DNS private option was turned off when the interface endpoint was created inside the VPC. ","upvote_count":"2","selected_answers":""},{"id":549068,"date":"Thu 17 Feb 2022 02:28","username":"Bigbearcn","content":"The service name are resolved to public IP address, so the application is using the default DNS name, not the endpoint hostname. So you need to enable private DNS option to resolve it to private address. <br>read the Private DNS for interface endpoints in the link https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.html.","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":541553,"date":"Sun 06 Feb 2022 08:39","username":"HellGate","content":"My answer is C. <br><br>You don't need to check private DNS because it’s turned on by default while you need to configure SG.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.html","upvote_count":"1","selected_answers":""},{"id":527343,"date":"Wed 19 Jan 2022 10:06","username":"saeidpsaeidp","content":"private DNS option on the VPC attributes is a bit confusing. Private DNS is enabled by default on private endpoints not VPC.  It appears the answer is pointing to VPC attributes <br>DNS hostnames and DNS resolution<br>Yes without the above enabled attributes privatelink will not work.<br>answere is BI change my answer. Private DNS is enabled by default. in this case C is correct","upvote_count":"21","selected_answers":""},{"id":530256,"date":"Sun 23 Jan 2022 05:49","username":"saeidp","content":"I change my answer. Private DNS is enabled by default. in this case C is correct","upvote_count":"1","selected_answers":""},{"id":524566,"date":"Sun 16 Jan 2022 03:38","username":"tkanmani76","content":"C - https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.html","upvote_count":"1","selected_answers":""},{"id":500972,"date":"Tue 14 Dec 2021 01:59","username":"vbal","content":"Enable private DNS for the endpoint so you can make requests to the service using its default DNS hostname; If you don't enable it the default DNS Hostname resolves to Public IP of the Service. B. ","upvote_count":"1","selected_answers":""},{"id":497113,"date":"Wed 08 Dec 2021 20:13","username":"AzureDP900","content":"C is right Configure the security group on the interface endpoint to allow connectivity to the AWS services. Interface endpoint need Security groups .. look at Gateway endpoint vs interface endpoint. Neal Davis having similar question","upvote_count":"3","selected_answers":""},{"id":489846,"date":"Mon 29 Nov 2021 13:00","username":"ByomkeshDas","content":"Security group issue is far beyond the question requirement. It is just like a firewall which can allow some traffic. The question clearly said that \\\"the service names resolve to public IP addresses\\\". So it is a DNS resolve related issue not ACL related issue. So option B is correct..","upvote_count":"2","selected_answers":""},{"id":448061,"date":"Sat 30 Oct 2021 23:10","username":"andylogan","content":"It's C","upvote_count":"2","selected_answers":""},{"id":442784,"date":"Sat 30 Oct 2021 21:01","username":"Cotter","content":"B for sure.https://www.examtopics.com/user/student22/","upvote_count":"1","selected_answers":""},{"id":440057,"date":"Sat 30 Oct 2021 12:42","username":"student22","content":"B<br>You have enable private DNS option. Otherwise it will resolve to the public address.","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#719",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.<br>To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.<br>Which combination of steps should the solutions architect take to implement this solution? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#719",
            "answers": [
        
        {
            "choice": "<p>A. Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC.  Update the bucket policy to require access from an access point<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an interface endpoint for Amazon S3 in each application's VPC.  Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a gateway endpoint for Amazon S3 in each application's VPC.  Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC.  Update the bucket policy to require access from an access point.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Create a gateway endpoint for Amazon S3 in the data lake's VPC.  Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":351834,"date":"Sun 03 Oct 2021 23:08","username":"beebatov","content":"A & C. <br>https://joe.blog.freemansoft.com/2020/04/protect-data-in-cloud-with-s3-access.html","upvote_count":"6","selected_answers":""},{"id":714941,"date":"Thu 10 Nov 2022 06:37","username":"janvandermerwer","content":"A & C look to be the \\\"best\\\" options.","upvote_count":"1","selected_answers":"Selected Answer: AC"},{"id":651078,"date":"Wed 24 Aug 2022 04:56","username":"Sumit_Kumar","content":"https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/","upvote_count":"1","selected_answers":""},{"id":619375,"date":"Mon 20 Jun 2022 18:41","username":"xyzman","content":"It's A,C but the path is App --> S3 Gateway Endpoint --> S3 Access Point --> S3 Bucket","upvote_count":"1","selected_answers":""},{"id":561292,"date":"Sat 05 Mar 2022 08:48","username":"pal40sgJohnPi","content":"It's A,C<br>App --> S3 Access Point --> S3 Gateway Endpoint --> S3 Bucketpath is App --> S3 Gateway Endpoint --> S3 Access Point --> S3 Bucket","upvote_count":"11","selected_answers":"Selected Answer: AC"},{"id":682944,"date":"Thu 29 Sep 2022 20:00","username":"JohnPi","content":"path is App --> S3 Gateway Endpoint --> S3 Access Point --> S3 Bucket","upvote_count":"1","selected_answers":""},{"id":497115,"date":"Wed 08 Dec 2021 20:16","username":"AzureDP900","content":"A,C is right","upvote_count":"1","selected_answers":""},{"id":448065,"date":"Sat 06 Nov 2021 04:40","username":"andyloganJohnPi","content":"It's A,C<br>App --> S3 Access Point --> S3 Gateway Endpoint --> S3 Bucketpath is App --> S3 Gateway Endpoint --> S3 Access Point --> S3 Bucket","upvote_count":"32","selected_answers":""},{"id":682946,"date":"Thu 29 Sep 2022 20:00","username":"JohnPi","content":"path is App --> S3 Gateway Endpoint --> S3 Access Point --> S3 Bucket","upvote_count":"2","selected_answers":""},{"id":443003,"date":"Sat 30 Oct 2021 20:59","username":"Goram113","content":"can't see this route step here https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/ but A&C seems to be the best '","upvote_count":"1","selected_answers":""},{"id":440062,"date":"Sat 23 Oct 2021 07:52","username":"student22","content":"A,C<br>App --> S3 Access Point --> S3 Gateway Endpoint --> S3 Bucket","upvote_count":"3","selected_answers":""},{"id":436619,"date":"Sat 23 Oct 2021 04:57","username":"tgv","content":"AAA CCC<br>---","upvote_count":"1","selected_answers":""},{"id":414113,"date":"Wed 13 Oct 2021 02:59","username":"WhyIronMan","content":"I'll go with A, C","upvote_count":"2","selected_answers":""},{"id":384531,"date":"Mon 11 Oct 2021 23:27","username":"Waiweng","content":"it's A&C","upvote_count":"2","selected_answers":""},{"id":367669,"date":"Sat 09 Oct 2021 18:18","username":"mustpassla","content":"A & C, https://aws.amazon.com/s3/features/access-points/","upvote_count":"1","selected_answers":""},{"id":364480,"date":"Fri 08 Oct 2021 14:48","username":"vkbajoria","content":"It is A & C. ","upvote_count":"1","selected_answers":""},{"id":355963,"date":"Wed 06 Oct 2021 02:01","username":"tvs","content":"AChttps://aws.amazon.com/s3/features/access-points/ & https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/","upvote_count":"3","selected_answers":""},{"id":352380,"date":"Tue 05 Oct 2021 12:58","username":"CarisB","content":"I vote for A & C<br><br>https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/<br><br>https://aws.amazon.com/blogs/storage/setting-up-cross-account-amazon-s3-access-with-<br>s3-access-points/ => Account A (The Data Owner). This is the account you create the Amazon S3 Access Point in","upvote_count":"2","selected_answers":""},{"id":350862,"date":"Sat 02 Oct 2021 07:38","username":"miniso8153","content":"I choose B & D","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#720",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that runs applications on AWS recently subscribed to a new software-as-a-service (SaaS) data vendor. The vendor provides the data by way of a<br>REST API that the vendor hosts in its AWS environment. The vendor offers multiple options for connectivity to the API and is working with the company to find the best way to connect.<br>The company's AWS account does not allow outbound internet access from its AWS environment. The vendor's services run on AWS in the same Region as the company's applications.<br>A solutions architect must implement connectivity to the vendor's API so that the API is highly available in the company's VPC. <br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#720",
            "answers": [
        
        {
            "choice": "<p>A. Connect to the vendor's public API address for the data service<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Connect to the vendor by way of a VPC peering connection between the vendor's VPC and the company's VPC<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Connect to the vendor by way of a VPC endpoint service that uses AWS PrivateLink<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Connect to a public bastion host that the vendor provides. Tunnel the API traffic<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":348808,"date":"Thu 07 Oct 2021 03:10","username":"SantoshhhhhDashL","content":"C : With AWS PrivateLink, you can create an endpoint within your Amazon Virtual Private Cloud (Amazon VPC) that provides access to SaaS applications over a secure, private connection that eliminates the exposure of private data to the public internet.<br><br>https://aws.amazon.com/blogs/apn/using-aws-privatelink-integrations-to-access-saas-solutions-from-apn-partners/#:~:text=With%20AWS%20PrivateLink%2C%20you%20can,data%20to%20the%20public%20internet.AWS API Gateway Endpoint types:<br>•\tAn API endpoint type refers to the hostname of the API. The API endpoint type can be edge-optimized, regional, or private, depending on where the majority of your API traffic originates from. An edge-optimized API endpoint is best for geographically distributed clients. API requests are routed to the nearest CloudFront Point of Presence (POP). This is the default endpoint type for API Gateway REST APIs. A regional API endpoint is intended for clients in the same region. When a client running on an EC2 instance calls an API in the same region, or when an API is intended to serve a small number of clients with high demands, a regional API reduces connection overhead. A private API endpoint is an API endpoint that can only be accessed from your Amazon Virtual Private Cloud (VPC) using an interface VPC endpoint, which is an endpoint network interface (ENI) that you create in your VPC. ","upvote_count":"141","selected_answers":""},{"id":399434,"date":"Thu 28 Oct 2021 19:57","username":"DashL","content":"AWS API Gateway Endpoint types:<br>•\tAn API endpoint type refers to the hostname of the API. The API endpoint type can be edge-optimized, regional, or private, depending on where the majority of your API traffic originates from. An edge-optimized API endpoint is best for geographically distributed clients. API requests are routed to the nearest CloudFront Point of Presence (POP). This is the default endpoint type for API Gateway REST APIs. A regional API endpoint is intended for clients in the same region. When a client running on an EC2 instance calls an API in the same region, or when an API is intended to serve a small number of clients with high demands, a regional API reduces connection overhead. A private API endpoint is an API endpoint that can only be accessed from your Amazon Virtual Private Cloud (VPC) using an interface VPC endpoint, which is an endpoint network interface (ENI) that you create in your VPC. ","upvote_count":"1","selected_answers":""},{"id":351837,"date":"Sun 17 Oct 2021 02:01","username":"beebatov","content":"C.  <br>In addition to what Santosh mentioned, Endpoints are supported within the same Region only.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-interface.html","upvote_count":"6","selected_answers":""},{"id":622388,"date":"Sun 26 Jun 2022 08:53","username":"naiduveerendra","content":"C is answer","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":499250,"date":"Sat 11 Dec 2021 10:17","username":"cldy","content":"C.  Connect to the vendor by way of a VPC endpoint service that uses AWS PrivateLink","upvote_count":"1","selected_answers":""},{"id":497117,"date":"Wed 08 Dec 2021 20:20","username":"AzureDP900","content":"C is right answer","upvote_count":"1","selected_answers":""},{"id":490336,"date":"Tue 30 Nov 2021 03:00","username":"acloudguru","content":"C,privatelink is designed for such senerio, hope i can have this easy question in my exam","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":448193,"date":"Sat 06 Nov 2021 14:04","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":436620,"date":"Fri 05 Nov 2021 04:11","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":434337,"date":"Thu 04 Nov 2021 18:06","username":"blackgamer","content":"It is C","upvote_count":"1","selected_answers":""},{"id":415290,"date":"Wed 03 Nov 2021 09:22","username":"Kopa","content":"Im for C","upvote_count":"1","selected_answers":""},{"id":414115,"date":"Wed 03 Nov 2021 02:58","username":"WhyIronMan","content":"I'll go with C<br>C is more secure than B","upvote_count":"2","selected_answers":""},{"id":404609,"date":"Sun 31 Oct 2021 07:01","username":"tuananhngo","content":"why not B?","upvote_count":"1","selected_answers":""},{"id":400751,"date":"Thu 28 Oct 2021 20:32","username":"vimgoru24","content":"D is for perverts. C is the proper way.","upvote_count":"2","selected_answers":""},{"id":367675,"date":"Mon 25 Oct 2021 13:05","username":"mustpassla","content":"C for sure","upvote_count":"1","selected_answers":""},{"id":359253,"date":"Sat 23 Oct 2021 16:36","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":356278,"date":"Tue 19 Oct 2021 10:23","username":"LCC92","content":"c for sure","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#721",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a web application that runs on Amazon EC2 instances in an Auto Scaling group behind a public-facing Application Load Balancer (ALB).<br>Only users from a specific country are allowed to access the application. The company needs the ability to log the access requests that have been blocked. The solution should require the least possible maintenance.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#721",
            "answers": [
        
        {
            "choice": "<p>A. Create an IPSet containing a list of IP ranges that belong to the specified country. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from an IP range in the IPSet. Associate the rule with the web ACL. Associate the web ACL with the ALB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB. <br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure AWS Shield to block any requests that do not originate from the specified country. Associate AWS Shield with the ALB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a security group rule that allows ports 80 and 443 from IP ranges that belong to the specified country. Associate the security group with the ALB. <br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":347386,"date":"Thu 23 Sep 2021 07:29","username":"oxfordsolutionsgswjduoDashL","content":"Correct Answer: Bhow is it B?https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.htmlIf you want to allow or block web requests based on the country that the requests originate from, create one or more geo match conditions. A geo match condition lists countries that your requests originate from. Later in the process, when you create a web ACL, you specify whether to allow or block requests from those countries.","upvote_count":"13133","selected_answers":""},{"id":348707,"date":"Fri 24 Sep 2021 18:09","username":"gswjduo","content":"how is it B?https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html","upvote_count":"13","selected_answers":""},{"id":351815,"date":"Sun 26 Sep 2021 04:14","username":"jduo","content":"https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html","upvote_count":"3","selected_answers":""},{"id":399438,"date":"Tue 26 Oct 2021 07:33","username":"DashL","content":"If you want to allow or block web requests based on the country that the requests originate from, create one or more geo match conditions. A geo match condition lists countries that your requests originate from. Later in the process, when you create a web ACL, you specify whether to allow or block requests from those countries.","upvote_count":"3","selected_answers":""},{"id":542541,"date":"Mon 07 Feb 2022 17:33","username":"jj22222","content":"B looks right","upvote_count":"2","selected_answers":""},{"id":530338,"date":"Sun 23 Jan 2022 08:37","username":"Devgela","content":"B is the correct answer for me","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":515531,"date":"Mon 03 Jan 2022 10:04","username":"tkanmani76","content":"B - https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html","upvote_count":"1","selected_answers":""},{"id":499296,"date":"Sat 11 Dec 2021 10:57","username":"cldy","content":"B.  Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB. ","upvote_count":"2","selected_answers":""},{"id":497119,"date":"Wed 08 Dec 2021 20:23","username":"AzureDP900","content":"B is right. Option A provided to confuse you!","upvote_count":"1","selected_answers":""},{"id":490369,"date":"Tue 30 Nov 2021 03:58","username":"acloudguru","content":"WAF is designed to serve this case, for A making a IP list is impossible. AWS has such list, and can ganrutee 99.8% accurate, how can a company do it?","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":488531,"date":"Sat 27 Nov 2021 23:07","username":"AzureDP900","content":"B completely make sense. A is wrong answer.","upvote_count":"1","selected_answers":""},{"id":448203,"date":"Fri 05 Nov 2021 14:05","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":436929,"date":"Fri 05 Nov 2021 05:47","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":434340,"date":"Tue 02 Nov 2021 06:28","username":"blackgamer","content":"It is B","upvote_count":"1","selected_answers":""},{"id":415382,"date":"Sun 31 Oct 2021 02:04","username":"Kopa","content":"Im for B","upvote_count":"1","selected_answers":""},{"id":414116,"date":"Sat 30 Oct 2021 08:10","username":"WhyIronMan","content":"I'll go with B","upvote_count":"3","selected_answers":""},{"id":400043,"date":"Tue 26 Oct 2021 08:48","username":"vimgoru24","content":"It’s B.  You should not manage IP lists in this case","upvote_count":"1","selected_answers":""},{"id":385722,"date":"Wed 20 Oct 2021 02:04","username":"hk436","content":"B is my answer!!","upvote_count":"1","selected_answers":""},{"id":359469,"date":"Mon 11 Oct 2021 00:15","username":"Waiweng","content":"it's B","upvote_count":"3","selected_answers":""},{"id":355969,"date":"Sun 03 Oct 2021 22:08","username":"tvs","content":"Bhttps://aws.amazon.com/blogs/aws/aws-web-application-firewall-waf-for-application-load-balancers/","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#722",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A multimedia company needs to deliver its video-on-demand (VOD) content to its subscribers in a cost-effective way. The video files range in size from 1-15 GB and are typically viewed frequently for the first 6 months after creation, and then access decreases considerably. The company requires all video files to remain immediately available for subscribers. There are now roughly 30,000 files, and the company anticipates doubling that number over time.<br>What is the MOST cost-effective solution for delivering the company's VOD content?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#722",
            "answers": [
        
        {
            "choice": "<p>A. Store the video files in an Amazon S3 bucket using S3 Intelligent-Tiering. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use AWS Elemental MediaConvert and store the adaptive bitrate video files in Amazon S3. Configure an AWS Elemental MediaPackage endpoint to deliver the content from Amazon S3.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Store the video files in Amazon Elastic File System (Amazon EFS) Standard. Enable EFS lifecycle management to move the video files to EFS Infrequent Access after 6 months. Create an Amazon EC2 Auto Scaling group behind an Elastic Load Balancer to deliver the content from Amazon EFS.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Store the video files in Amazon S3 Standard. Create S3 Lifecycle rules to move the video files to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months and to S3 Glacier Deep Archive after 1 year. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":516876,"date":"Tue 04 Jan 2022 18:58","username":"AndySH","content":"Answer is A","upvote_count":"7","selected_answers":""},{"id":526296,"date":"Tue 18 Jan 2022 05:18","username":"jigu1981","content":"Answer should be A. . D moves the file to Glacier whereas the expectation is to serve the file instantly","upvote_count":"5","selected_answers":""},{"id":713949,"date":"Tue 08 Nov 2022 16:54","username":"sou123454","content":"D is the answer","upvote_count":"1","selected_answers":""},{"id":585553,"date":"Thu 14 Apr 2022 07:39","username":"zinoxx90","content":"Answer is A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":546188,"date":"Sun 13 Feb 2022 02:57","username":"RVivek","content":"A is the answer<br>B- Media convert is not requested and laso will not help in reducing cost<br>C-EFS is at least 10 times expensive than S3<br>D- Glacier will not support instant access","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#723",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the Internet.<br>What is the MOST operationally efficient way to enforce this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#723",
            "answers": [
        
        {
            "choice": "<p>A. Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. <br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. <br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":347392,"date":"Sat 25 Sep 2021 11:19","username":"oxfordsolutions","content":"correct answer: B","upvote_count":"18","selected_answers":""},{"id":497128,"date":"Wed 08 Dec 2021 20:33","username":"AzureDP900","content":"B is right answer <br>https://aws.amazon.com/s3/features/access-points/","upvote_count":"5","selected_answers":""},{"id":689235,"date":"Sat 08 Oct 2022 13:24","username":"caveman712","content":"https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":688695,"date":"Fri 07 Oct 2022 16:22","username":"psou7","content":"B.  \\\"You can control access point usage using AWS Organizations support for AWS SCPs.\\\"<br>https://aws.amazon.com/s3/features/access-points/","upvote_count":"1","selected_answers":""},{"id":654026,"date":"Tue 30 Aug 2022 13:48","username":"gnic","content":"It's B. <br>SCP to restrict permission","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":651860,"date":"Thu 25 Aug 2022 18:13","username":"kadev","content":"B.  Example Service control policy: <br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Principal\\\": \\\"*\\\",<br>\\\"Action\\\": \\\"s3:CreateAccessPoint\\\",<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\": {<br>\\\"StringNotEquals\\\": {<br>\\\"s3:AccessPointNetworkOrigin\\\": \\\"VPC\\\"<br>}<br>}<br>}]<br>}","upvote_count":"1","selected_answers":""},{"id":569431,"date":"Thu 17 Mar 2022 03:04","username":"jyrajan69","content":"The question states clearly '. Recently, the firm began allowing product teams to build and administer their own S3 access points under their own accounts' so setting SCP at root level would not allow this, therefore only possible solution is A. ","upvote_count":"2","selected_answers":""},{"id":496551,"date":"Wed 08 Dec 2021 06:29","username":"cldy","content":"B.  Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. ","upvote_count":"2","selected_answers":""},{"id":448214,"date":"Fri 05 Nov 2021 22:10","username":"andylogan","content":"It's B","upvote_count":"2","selected_answers":""},{"id":440970,"date":"Thu 04 Nov 2021 00:51","username":"Kopa","content":"good point to use Acess Point with SCP. Im for B","upvote_count":"2","selected_answers":""},{"id":436934,"date":"Fri 29 Oct 2021 23:08","username":"tgv","content":"BBB<br>---","upvote_count":"2","selected_answers":""},{"id":434363,"date":"Tue 26 Oct 2021 10:53","username":"blackgamer","content":"Answer is B","upvote_count":"2","selected_answers":""},{"id":414120,"date":"Mon 25 Oct 2021 03:45","username":"WhyIronMan","content":"I'll go with B","upvote_count":"2","selected_answers":""},{"id":408002,"date":"Thu 21 Oct 2021 16:19","username":"student2020","content":"B<br>https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/","upvote_count":"3","selected_answers":""},{"id":400447,"date":"Wed 20 Oct 2021 19:49","username":"vimgoru24","content":"AWS Org hints it should be B","upvote_count":"1","selected_answers":""},{"id":363216,"date":"Tue 19 Oct 2021 07:36","username":"apmpm","content":"B<br>aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/<br><br>\\\"You can set up AWS SCPs to require any new Access Point in the organization to be restricted to VPC-Only type. This makes sure that any Access Point created in your organization provides access only from within the VPCs and there by firewalling your data to within your private networks.\\\"","upvote_count":"2","selected_answers":""},{"id":363213,"date":"Mon 18 Oct 2021 17:08","username":"apmpm","content":"B<br>https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/<br>\\\"You can set up AWS SCPs to require any new Access Point in the organization to be restricted to VPC-Only type. This makes sure that any Access Point created in your organization provides access only from within the VPCs and there by firewalling your data to within your private networks.\\\"","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#724",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs.<br>✑ The company has the following DNS resolution requirements:<br>✑ On-premises systems should be able to resolve and connect to cloud.example.com.<br>All VPCs should be able to resolve cloud.example.com.<br>There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway.<br>Which architecture should the company use to meet these requirements with the HIGHEST performance?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#724",
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
            "choice": "<p>C. Associate the private hosted zone to the shared services VPC.  Create a Route 53 outbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the outbound resolver.<br></p>",
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
        "discusstion": [{"id":351898,"date":"Wed 22 Sep 2021 13:50","username":"beebatovDerekKey","content":"A is the answer, based on https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>\\\"When a Route 53 private hosted zone needs to be resolved in multiple VPCs and AWS accounts as described earlier, the most reliable pattern is to share the private hosted zone between accounts and associate it to each VPC that needs it.\\\"There is only one Account. Not multiple account","upvote_count":"183","selected_answers":""},{"id":440504,"date":"Wed 03 Nov 2021 00:23","username":"DerekKey","content":"There is only one Account. Not multiple account","upvote_count":"3","selected_answers":""},{"id":730916,"date":"Tue 29 Nov 2022 23:57","username":"SureNot","content":"Do smb know why HIGHEST performance is highlighted?<br>I may reveal the difference between A and D","upvote_count":"1","selected_answers":""},{"id":717452,"date":"Sun 13 Nov 2022 19:23","username":"orik","content":"D<br>https://aws.amazon.com/blogs/networking-and-content-delivery/integrating-aws-transit-gateway-with-aws-privatelink-and-amazon-route-53-resolver/","upvote_count":"1","selected_answers":""},{"id":710878,"date":"Fri 04 Nov 2022 03:43","username":"Blair77","content":"AAA - Well explain here: <br>https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br>-\\\"When a Route 53 private hosted zone needs to be resolved in multiple VPCs and AWS accounts as described earlier, the most reliable pattern is to share the private hosted zone between accounts and associate it to each VPC that needs it. \\\"","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":688951,"date":"Sat 08 Oct 2022 01:45","username":"Malluchan","content":"The key point is : the resources stored within VPCs, no were mentioned shared VPC","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":648748,"date":"Fri 19 Aug 2022 07:44","username":"Kyperos","content":"\\\"Although it is possible to use forwarding rules to resolve private hosted zones in other VPCs, we do not recommend that. The most reliable, performant and low-cost approach is to share and associate private hosted zones directly to all VPCs that need them.\\\"<br><br>https://aws.amazon.com/vi/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/<br><br>So answer is A!!!!","upvote_count":"4","selected_answers":""},{"id":630158,"date":"Mon 11 Jul 2022 19:58","username":"asfsdfsdfasfsdfsdf","content":"I will go with Dthere is a blog for this - there is no need to associate the private zone with all VPCs only with the shared one. the shared one will be already associated with others.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/After reviewing it again i think A will work<br>\\\"Create Route 53 private hosted zones in the shared services VPC and associate them. In addition, complete the cross-account private hosted zone-VPC association of the spoke VPCs because the spoke VPCs are in different accounts. All VPC’s will need to associate their private hosted zones to all other VPC’s if required to.\\\"","upvote_count":"12","selected_answers":""},{"id":645884,"date":"Fri 12 Aug 2022 14:42","username":"asfsdfsdf","content":"After reviewing it again i think A will work<br>\\\"Create Route 53 private hosted zones in the shared services VPC and associate them. In addition, complete the cross-account private hosted zone-VPC association of the spoke VPCs because the spoke VPCs are in different accounts. All VPC’s will need to associate their private hosted zones to all other VPC’s if required to.\\\"","upvote_count":"2","selected_answers":""},{"id":626143,"date":"Sat 02 Jul 2022 14:57","username":"aandc","content":"D, after reading https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/","upvote_count":"1","selected_answers":""},{"id":624973,"date":"Thu 30 Jun 2022 03:24","username":"jyrajan69","content":"First criteria, On-premises systems should be able to resolve and connect to cloud.example.com which rules out outbound, must be inbound from DC.  So that leaves us with A and D, both work but based on best practice, using shared VPC is more efficient, so answer must be D","upvote_count":"2","selected_answers":""},{"id":577800,"date":"Tue 29 Mar 2022 20:00","username":"jj22222","content":"A is the answer","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":573673,"date":"Wed 23 Mar 2022 15:20","username":"gunjan229","content":"D - We dont need to attach all the VPCs to TGW, only the Shared VPC.  Private Hosted Zones and Forwarding Rules can be in shared VPC and shared using RAM to all the VPC (doesnt need Peering or TGW between VPCs for that, so A is incorrect)","upvote_count":"3","selected_answers":"Selected Answer: D"},{"id":535462,"date":"Sat 29 Jan 2022 13:56","username":"Milind","content":"When a Route 53 private hosted zone needs to be resolved in multiple VPCs and AWS accounts as described earlier, the most reliable pattern is to share the private hosted zone between accounts and associate it to each VPC that needs it<br><br>from-> https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/","upvote_count":"1","selected_answers":""},{"id":519382,"date":"Sat 08 Jan 2022 09:28","username":"GeniusMikeLiu","content":"A or D? I am so confused...","upvote_count":"2","selected_answers":""},{"id":516870,"date":"Tue 04 Jan 2022 18:43","username":"Smartphone","content":"D is the Answer. Read the link below. Don't blindly assume anything. <br>https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/","upvote_count":"1","selected_answers":""},{"id":501844,"date":"Wed 15 Dec 2021 05:02","username":"heyhey_00","content":"The answer to the recent dump is marked with D.  Is the answer A still valid?","upvote_count":"1","selected_answers":""},{"id":501795,"date":"Wed 15 Dec 2021 03:09","username":"tkanmani76","content":"Question says access to resources inside VPC and hence it is Inbound resolver. Choice is between A and D. The article https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/ explains how to connect a Shared Service VPC with Inbound resolver with TGW. So answer is D. ","upvote_count":"1","selected_answers":""},{"id":459519,"date":"Sun 07 Nov 2021 11:22","username":"student22","content":"A<br>1.Associate the private hosted zone to all the VPCs. <br>2. Create a Route 53 inbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#725",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team has created a new flight tracker application that provides near-real-time data to users. The application has a front end that consists of an<br>Application Load Balancer (ALB) in front of two large Amazon EC2 instances in a single Availability Zone. Data is stored in a single Amazon RDS MySQL DB instance. An Amazon Route 53 DNS record points to the ALB. <br>Management wants the development team to improve the solution to achieve maximum reliability with the least amount of operational overhead.<br>Which set of actions should the team take?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#725",
            "answers": [
        
        {
            "choice": "<p>A. Create RDS MySQL read replicas. Deploy the application to multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure the DB instance as Multi-AZ. Deploy the application to two additional EC2 instances in different Availability Zones behind an ALB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Replace the DB instance with Amazon DynamoDB global tables. Deploy the application in multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Replace the DB instance with Amazon Aurora with Aurora Replicas. Deploy the application to multiple smaller EC2 instances across multiple Availability Zones in an Auto Scaling group behind an ALB. <br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":359482,"date":"Sat 25 Sep 2021 02:28","username":"WaiwengCoffeinerdczarno","content":"it's D Aurora which provides the least amount of operational overheadFor sure D! Besides Aurora we have autoscaling -> no operational overhead on load events.I don't think so.<br>There might be a reason why there are 2 HUGE ec2 instances running.<br>Maybe the application needs this kind of a performance as it can't run in parallel.<br>In this case you can't just scale out... while scaling in.<br>Aurora would be nice, but not this time.<br><br>Answer B is correct","upvote_count":"2041","selected_answers":""},{"id":439662,"date":"Wed 27 Oct 2021 03:27","username":"Coffeinerd","content":"For sure D! Besides Aurora we have autoscaling -> no operational overhead on load events.","upvote_count":"4","selected_answers":""},{"id":579078,"date":"Thu 31 Mar 2022 19:21","username":"czarno","content":"I don't think so.<br>There might be a reason why there are 2 HUGE ec2 instances running.<br>Maybe the application needs this kind of a performance as it can't run in parallel.<br>In this case you can't just scale out... while scaling in.<br>Aurora would be nice, but not this time.<br><br>Answer B is correct","upvote_count":"1","selected_answers":""},{"id":352194,"date":"Mon 20 Sep 2021 03:39","username":"beebatovbeebatovDashLkadev","content":"Answer: C<br><br>B doesn't offer MAXIMUM resiliency, following the well architected framework's resiliency pillar, DR scenario must be considered. In this scenario we have a near real-time application, we would need DynamoDB + multi region for maximum resiliency for both App and DB.  Moreover, we are working the development team that can switch from RDS to NoSQL.changing to D<br><br>https://youtu.be/ZCt3ctVfGIk?t=111The question says \\\"achieve maximum reliability with the least amount of operational overhead\\\". RDS/Aurora has much higher operational overhead than DynamoDB. And you want to doublelarge EC2 to another region + add more money for changing coding lol","upvote_count":"61021","selected_answers":""},{"id":354953,"date":"Wed 22 Sep 2021 03:41","username":"beebatov","content":"changing to D<br><br>https://youtu.be/ZCt3ctVfGIk?t=111","upvote_count":"10","selected_answers":""},{"id":399485,"date":"Sat 02 Oct 2021 05:26","username":"DashLkadev","content":"The question says \\\"achieve maximum reliability with the least amount of operational overhead\\\". RDS/Aurora has much higher operational overhead than DynamoDB. And you want to doublelarge EC2 to another region + add more money for changing coding lol","upvote_count":"21","selected_answers":""},{"id":658127,"date":"Sat 03 Sep 2022 08:29","username":"kadev","content":"And you want to doublelarge EC2 to another region + add more money for changing coding lol","upvote_count":"1","selected_answers":""},{"id":661958,"date":"Wed 07 Sep 2022 06:08","username":"cale","content":"It's D","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":658124,"date":"Sat 03 Sep 2022 08:25","username":"kadev","content":"\\\"operational overhead\\\" => saving cost<br>B/D<br><br>1. Currently, App in \\\"two large Amazon EC2\\\" in 1 AZ, we can saving cost by smaller EC2 + Autoscaling in multi A-Z , not adds more large EC2 <br>2. RDS multi AZ, that mean 2 instance equaly, double cost.With replicas, you can chose a maller RDS type for savign cost.<br><br>===> Finally,D","upvote_count":"1","selected_answers":""},{"id":640363,"date":"Mon 01 Aug 2022 07:49","username":"KiraguJohnkadev","content":"Which one is more costly? <br>1. Changing existing RDS to multi AZ or<br>2. Converting the existing RDS to Amazon AuroraRDS to multi AZ => two instance equally , double cost<br>Amazon Aurora or RDS ( with replicas , read Q carefully ) => you can pick small RDS type for replica instance","upvote_count":"11","selected_answers":""},{"id":658128,"date":"Sat 03 Sep 2022 08:31","username":"kadev","content":"RDS to multi AZ => two instance equally , double cost<br>Amazon Aurora or RDS ( with replicas , read Q carefully ) => you can pick small RDS type for replica instance","upvote_count":"1","selected_answers":""},{"id":623756,"date":"Tue 28 Jun 2022 08:06","username":"TechXCal88","content":"B for me<br>Seem that the question has change, it's say that it needs minimize operational expense, which made me choose B over D.  Using Aurora will cost you moreOperational overhead not expense.<br>Read the question carefully<br>Cost is not a concern here but availability is.<br>Adding two large nodes will not guarantee HA , but auto scaling will<br>So D is better I am sorry","upvote_count":"12","selected_answers":"Selected Answer: B"},{"id":709442,"date":"Tue 01 Nov 2022 22:17","username":"Cal88","content":"Operational overhead not expense.<br>Read the question carefully<br>Cost is not a concern here but availability is.<br>Adding two large nodes will not guarantee HA , but auto scaling will<br>So D is better I am sorry","upvote_count":"2","selected_answers":""},{"id":623327,"date":"Mon 27 Jun 2022 16:09","username":"kangtamo","content":"Agree with D: Aurora.","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":571319,"date":"Sun 20 Mar 2022 01:16","username":"azure_kai","content":"Ans: D","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":564941,"date":"Thu 10 Mar 2022 19:21","username":"razerlg","content":"In my opinion D doesnt guarantee multi-AZ unless the replica is placed in a different AZ, and that is not specified. I would choose B","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":553444,"date":"Tue 22 Feb 2022 05:35","username":"johnnsmith","content":"B is correct. A and C are wrong because Route 53 health check is missing. D is wrong because it doesn't say \\\"replica in a different AZ\\\" or Multi-AZ. Only B can still function when an AZ fails,","upvote_count":"2","selected_answers":""},{"id":547085,"date":"Mon 14 Feb 2022 12:37","username":"pititcu667","content":"B because they specifically mention least amount of effort while minimizing costs.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":546356,"date":"Sun 13 Feb 2022 10:30","username":"futen0326","content":"Did they change the question ..? I'm reading \\\"The development team is tasked with enhancing the solution's dependability while minimizing operating expenses.\\\"<br><br>Switching to Aurora will incur a big cost.. you can simply setup Multi-AZ, and switch the instances to be in different AZs. It is not the most resilient architecture but it is improved and the most cost-effective one here.","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":540800,"date":"Sat 05 Feb 2022 07:07","username":"kyo","content":"D is better than B. ","upvote_count":"1","selected_answers":""},{"id":532281,"date":"Tue 25 Jan 2022 17:57","username":"kubala","content":"D my opinion","upvote_count":"3","selected_answers":"Selected Answer: D"},{"id":531886,"date":"Tue 25 Jan 2022 06:48","username":"cannottellname","content":"DDDDDDDDDDD","upvote_count":"4","selected_answers":"Selected Answer: D"},{"id":514432,"date":"Sat 01 Jan 2022 09:29","username":"cldy","content":"D: Aurora + ASG + ELB + MultiAZ","upvote_count":"1","selected_answers":""},{"id":499066,"date":"Sat 11 Dec 2021 04:18","username":"challenger1","content":"My Answer: D <br>For sure","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#726",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A multimedia company with a single AWS account is launching an application for a global user base. The application storage and bandwidth requirements are unpredictable. The application will use Amazon EC2 instances behind an Application Load Balancer as the web tier and will use Amazon DynamoDB as the database tier. The environment for the application must meet the following requirements:<br>✑ Low latency when accessed from any part of the world<br>✑ WebSocket support<br>✑ End-to-end encryption<br>Protection against the latest security threats<br><img src=\"https://www.examtopics.com/https://examtopics.com/assets/media/exam-media/04241/0047600004.png\" class=\"in-exam-image\"><br>✑ Managed layer 7 DDoS protection<br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#726",
            "answers": [
        
        {
            "choice": "<p>A. Use Amazon Route 53 and Amazon CloudFront for content distribution. Use Amazon S3 to store static content<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use Amazon Route 53 and AWS Transit Gateway for content distribution. Use an Amazon Elastic Block Store (Amazon EBS) volume to store static content<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use AWS WAF with AWS Shield Advanced to protect the application<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use AWS WAF and Amazon Detective to protect the application<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Use AWS Shield Standard to protect the application<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":590614,"date":"Sat 23 Apr 2022 14:34","username":"snakecharmer2","content":"A & C<br>easy one...","upvote_count":"8","selected_answers":"Selected Answer: AC"},{"id":590233,"date":"Fri 22 Apr 2022 22:16","username":"ravisar","content":"Answer is AC. AWS Transit Gateway is Enables for attaching VPNs and Different VPC on the same region for different AWS accounts. Nothing to do content distribution.","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#727",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to manage 15 AWS accounts. A solutions architect wants to run advanced analytics on the company's cloud expenditures. The cost data must be gathered and made available from an analytics account. The analytics application runs in a VPC and must receive the raw cost data each night to run the analytics.<br>The solutions architect has decided to use the Cost Explorer API to fetch the raw data and store the data in Amazon S3 in JSON format. Access to the raw cost data must be restricted to the analytics application. The solutions architect has already created an AWS Lambda function to collect data by using the Cost Explorer<br>API.<br>Which additional actions should the solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#727",
            "answers": [
        
        {
            "choice": "<p>A. Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create a gateway endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the S3 endpoint.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create a gateway endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the analytics VPC by using the aws:SourceVpc condition.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create an interface endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the analytics VPC private CIDR range by using the aws:SourceIp condition.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create an interface endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the S3 endpoint.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":382145,"date":"Fri 01 Oct 2021 04:15","username":"wowznuz","content":"Agreed, A is correct. C could be correct except for the part about restricting access using a bucket policy with aws:SourceIp which leaves A. <br>See https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html#vpc-endpoints-s3-bucket-policies","upvote_count":"16","selected_answers":""},{"id":352260,"date":"Sun 26 Sep 2021 16:10","username":"beebatov","content":"Answer: A<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html<br><br>the administrator in the management account can create a role to grant cross-account permissions to a user in a member account as follows:<br><br>The management account administrator creates an IAM role and attaches a permissions policy to the role that grants permissions to the organization's resources.<br><br>The management account administrator attaches a trust policy to the role that identifies the member account ID as the Principal who can assume the role.<br><br>The member account administrator can then delegate permissions to assume the role to any users in the member account. Doing this allows users in the member account to create or access resources in the management account and the organization. The principal in the trust policy can also be an AWS service principal if you want to grant permissions to an AWS service to assume the role.","upvote_count":"11","selected_answers":""},{"id":669990,"date":"Thu 15 Sep 2022 16:00","username":"pinhead900","content":"answer is A - but still lambda would need to run in VPC for it to be able to use the Gateway endpoint, that part is missing.","upvote_count":"2","selected_answers":""},{"id":652655,"date":"Sat 27 Aug 2022 20:03","username":"AndykrisAndykris","content":"C has interface endpoint which is incorrect for S3.Correct answer is A","upvote_count":"21","selected_answers":""},{"id":652657,"date":"Sat 27 Aug 2022 20:04","username":"Andykris","content":"Correct answer is A","upvote_count":"1","selected_answers":""},{"id":622767,"date":"Sun 26 Jun 2022 21:28","username":"kangtamo","content":"Agree with A.  Gateway endpoint for S3.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":497143,"date":"Wed 08 Dec 2021 20:48","username":"AzureDP900","content":"A is correct, S3 gateway endpoint for access within analytics VPC from analytics application.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html","upvote_count":"2","selected_answers":""},{"id":448279,"date":"Sun 07 Nov 2021 16:33","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":434738,"date":"Sat 06 Nov 2021 17:00","username":"tgv","content":"AAA<br>---<br>The cost of the AWS Organization is visible in the master account so B & D are out.<br>A is a more best practice approach. No need for an interface endpoint","upvote_count":"4","selected_answers":""},{"id":434735,"date":"Mon 01 Nov 2021 21:23","username":"tgv","content":"AAA<br>---<br>The cost of the AWS Organization is visible in the master account so B & D are out.<br>A is a more best practice approach. No need for an interface endpoint","upvote_count":"1","selected_answers":""},{"id":434389,"date":"Sun 31 Oct 2021 06:52","username":"blackgamer","content":"A for sure","upvote_count":"1","selected_answers":""},{"id":428243,"date":"Mon 25 Oct 2021 10:17","username":"pablobairat","content":"It is D.  In A, the Lambda does not have permissions to write in the S3 bucket because it is not able to access the endpoint","upvote_count":"1","selected_answers":""},{"id":422391,"date":"Tue 19 Oct 2021 05:29","username":"rodolfo2020","content":"agreed A is correct cause S3 supported only Gateway and DynamoDB endpoints<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-gateway.html","upvote_count":"2","selected_answers":""},{"id":415482,"date":"Sun 17 Oct 2021 00:29","username":"Kopa","content":"going for A","upvote_count":"1","selected_answers":""},{"id":414157,"date":"Sat 16 Oct 2021 19:59","username":"WhyIronMan","content":"I'll go with A","upvote_count":"3","selected_answers":""},{"id":400484,"date":"Sat 09 Oct 2021 22:37","username":"vimgoru24student2020","content":"I believe A is not the only option here, however it is the most secure one, so A. Even though the new interface VPC endpoint option seems correct, that last part of the answer to use VPC CIDR range as sourceIP is incorrect. Only public Ip addresses are supported.","upvote_count":"21","selected_answers":""},{"id":408041,"date":"Tue 12 Oct 2021 04:57","username":"student2020","content":"Even though the new interface VPC endpoint option seems correct, that last part of the answer to use VPC CIDR range as sourceIP is incorrect. Only public Ip addresses are supported.","upvote_count":"1","selected_answers":""},{"id":385737,"date":"Fri 08 Oct 2021 07:02","username":"hk436","content":"A is my answer!!","upvote_count":"4","selected_answers":""},{"id":368386,"date":"Wed 29 Sep 2021 05:40","username":"mustpassla","content":"A, org acc and gateway endpoint","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#728",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate a 30 TB Oracle data warehouse from on premises to Amazon Redshift. The company used the AWS Schema Conversion Tool (AWS<br>SCT) to convert the schema of the existing data warehouse to an Amazon Redshift schema. The company also used a migration assessment report to identify manual tasks to complete.<br>The company needs to migrate the data to the new Amazon Redshift cluster during an upcoming data freeze period of 2 weeks. The only network connection between the on-premises data warehouse and AWS is a 50 Mbps internet connection.<br>Which migration strategy meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#728",
            "answers": [
        
        {
            "choice": "<p>A. Create an AWS Database Migration Service (AWS DMS) replication instance. Authorize the public IP address of the replication instance to reach the data warehouse through the corporate firewall. Create a migration task to run at the beginning of the fata freeze period.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Install the AWS SCT extraction agents on the on-premises servers. Define the extract, upload, and copy tasks to send the data to an Amazon S3 bucket. Copy the data into the Amazon Redshift cluster. Run the tasks at the beginning of the data freeze period.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Install the AWS SCT extraction agents on the on-premises servers. Create a Site-to-Site VPN connection. Create an AWS Database Migration Service (AWS DMS) replication instance that is the appropriate size. Authorize the IP address of the replication instance to be able to access the on-premises data warehouse through the VPN connection.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a job in AWS Snowball Edge to import data into Amazon S3. Install AWS SCT extraction agents on the on-premises servers. Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device. When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346094,"date":"Sun 26 Sep 2021 16:36","username":"gswStelSenExtHo","content":"D seems correctAdding one more link for architecture: https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.Process.htmlYes its D :)<br>Transfer 30TB over 50Mbps will take around 53Days that ruled out ABC<br>https://www.calctool.org/CALC/prof/computing/transfer_time","upvote_count":"1119","selected_answers":""},{"id":460256,"date":"Sun 31 Oct 2021 12:00","username":"StelSen","content":"Adding one more link for architecture: https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.Process.html","upvote_count":"1","selected_answers":""},{"id":349827,"date":"Mon 27 Sep 2021 08:24","username":"ExtHo","content":"Yes its D :)<br>Transfer 30TB over 50Mbps will take around 53Days that ruled out ABC<br>https://www.calctool.org/CALC/prof/computing/transfer_time","upvote_count":"9","selected_answers":""},{"id":495622,"date":"Tue 07 Dec 2021 06:15","username":"cldy","content":"D.  Create a job in AWS Snowball Edge to import data into Amazon S3. Install AWS SCT extraction agents on the on-premises servers. Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device. When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.","upvote_count":"1","selected_answers":""},{"id":490550,"date":"Tue 30 Nov 2021 10:35","username":"backfringe","content":"I go with D","upvote_count":"1","selected_answers":""},{"id":488524,"date":"Sat 27 Nov 2021 22:55","username":"AzureDP900","content":"D is best option, data transfer using corporate internet takes around 58 days!","upvote_count":"1","selected_answers":""},{"id":448280,"date":"Sun 24 Oct 2021 23:50","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":434740,"date":"Fri 22 Oct 2021 19:57","username":"tgv","content":"DDD<br>---<br>You cannot migrate 20 TB over 50 Mbps in 2 weeks without Snowball","upvote_count":"3","selected_answers":""},{"id":414159,"date":"Wed 20 Oct 2021 14:55","username":"WhyIronMan","content":"I'll go with D<br>for data > 20TB use Snowball","upvote_count":"2","selected_answers":""},{"id":400485,"date":"Tue 19 Oct 2021 02:26","username":"vimgoru24","content":"D.  This is the way.","upvote_count":"1","selected_answers":""},{"id":385742,"date":"Mon 18 Oct 2021 17:04","username":"hk436","content":"D is my answer!!","upvote_count":"1","selected_answers":""},{"id":359488,"date":"Wed 13 Oct 2021 00:39","username":"Waiweng","content":"it's D","upvote_count":"2","selected_answers":""},{"id":356032,"date":"Tue 12 Oct 2021 08:54","username":"tvs","content":"it is D . Since there is no online data to sync , snowball is best option. Also with 50Mbs you can able totransfer 7Tb only in 14 days.","upvote_count":"3","selected_answers":""},{"id":352207,"date":"Thu 30 Sep 2021 11:43","username":"beebatov","content":"Answer: D<br><br>AWS Database Migration Service (AWS DMS) can use Snowball Edge and Amazon S3 to migrate large databases more quickly than by other methods<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.html","upvote_count":"4","selected_answers":""}]
    }
    ,
    {
        "question_id": "#729",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that tracks medical devices in hospitals wants to migrate its existing storage solution to the AWS Cloud. The company equips all of its devices with sensors that collect location and usage information. This sensor data is sent in unpredictable patterns with large spikes. The data is stored in a MySQL database running on premises at each hospital. The company wants the cloud storage solution to scale with usage.<br>The company's analytics team uses the sensor data to calculate usage by device type and hospital. The team needs to keep analysis tools running locally while fetching data from the cloud. The team also needs to use existing Java application and SQL queries with as few changes as possible.<br>How should a solutions architect meet these requirements while ensuring the sensor data is secure?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#729",
            "answers": [
        
        {
            "choice": "<p>A. Store the data in an Amazon Aurora Serverless database. Serve the data through a Network Load Balancer (NLB). Authenticate users using the NLB with credentials stored in AWS Secrets Manager.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Store the data in an Amazon S3 bucket. Serve the data through Amazon QuickSight using an IAM user authorized with AWS Identity and Access Management (IAM) with the S3 bucket as the data source.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Store the data in an Amazon S3 bucket. Serve the data through Amazon Athena using AWS PrivateLink to secure the data in transit.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346138,"date":"Mon 20 Sep 2021 13:45","username":"JaypdvExtHojustfmm","content":"Going with C.  because it works with the app still running on-prem. You will still need a few code changesbut the question allows that.<br>D.  would sound plausible but PrivateLink is for VPC onlyExisting MySQL database can't be easy to serve from S3 (object storage) that ruled out S3 option and NLB is also not good option that leaves only Chttps://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/","upvote_count":"1442","selected_answers":""},{"id":349832,"date":"Tue 21 Sep 2021 16:09","username":"ExtHo","content":"Existing MySQL database can't be easy to serve from S3 (object storage) that ruled out S3 option and NLB is also not good option that leaves only C","upvote_count":"4","selected_answers":""},{"id":425626,"date":"Sat 23 Oct 2021 07:04","username":"justfmm","content":"https://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/","upvote_count":"2","selected_answers":""},{"id":352242,"date":"Sun 26 Sep 2021 15:14","username":"beebatov","content":"Answer: C<br><br>https://aws.amazon.com/blogs/aws/new-data-api-for-amazon-aurora-serverless/<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html","upvote_count":"7","selected_answers":""},{"id":683221,"date":"Fri 30 Sep 2022 06:19","username":"JohnPi","content":"I wonder how option C satisfies the statement \\\"use existing Java application and SQL queries with as few changes as possible\\\"? btw Aurora Serverless has an \\\"invisible\\\" NLB in front","upvote_count":"1","selected_answers":""},{"id":681312,"date":"Wed 28 Sep 2022 02:16","username":"dcdcdc3","content":"B&D - no, as SQL queries are desired..<br>A - no, unless anyone can show me how this works: \\\"Authenticate users using the NLB with credentials stored in AWS Secrets Manager.\\\"","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497151,"date":"Wed 08 Dec 2021 20:55","username":"AzureDP900","content":"C is right choice.","upvote_count":"2","selected_answers":""},{"id":496737,"date":"Wed 08 Dec 2021 11:44","username":"cldy","content":"C.  Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.","upvote_count":"1","selected_answers":""},{"id":488521,"date":"Sat 27 Nov 2021 22:46","username":"AzureDP900","content":"C) Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.","upvote_count":"1","selected_answers":""},{"id":448285,"date":"Sat 06 Nov 2021 23:56","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":440995,"date":"Sat 06 Nov 2021 11:52","username":"Kopa","content":"going for C, as app code needs no change","upvote_count":"1","selected_answers":""},{"id":440529,"date":"Sat 06 Nov 2021 09:00","username":"DerekKey","content":"C is correct - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html#data-api.access","upvote_count":"2","selected_answers":""},{"id":434748,"date":"Sun 31 Oct 2021 19:12","username":"tgv","content":"CCC<br>---<br>The data is currently stored in a MySQL database running on-prem. Storing MySQL data in S3 doesn't sound good so B & D are out.<br>Aurora Data API \\\"enables the SQL HTTP endpoint, a connectionless Web Service API for running SQL queries against this database. When the SQL HTTP endpoint is enabled, you can also query your database from inside the RDS console (these features are free to use).\\\"","upvote_count":"1","selected_answers":""},{"id":434392,"date":"Sat 30 Oct 2021 17:53","username":"blackgamer","content":"C for me","upvote_count":"1","selected_answers":""},{"id":400494,"date":"Thu 21 Oct 2021 15:43","username":"vimgoru24","content":"All of this answers are bad in real world, but for the purpose of the exam - C is the answer","upvote_count":"1","selected_answers":""},{"id":385745,"date":"Fri 08 Oct 2021 17:17","username":"hk436MrCarterMrCarterMrCarterMrCarterDerekKey","content":"My answer is D.  <br> The team also needs to use existing Java application and SQL queries with as few changes as possible.<br>THere is a requirement to be able toexecute sql queries. Athena provides the way!!s3 through private link? i dont think so mateyi stand corrected s3 and privatelink is a thingi stand corrected s3 and privatelink is a thingThe team needs to keep analysis tools running locally while fetching data from the cloud. That is why it has to be CWrong if you think it is not possible.","upvote_count":"211111","selected_answers":""},{"id":396315,"date":"Fri 08 Oct 2021 19:34","username":"MrCarterMrCarterMrCarter","content":"s3 through private link? i dont think so mateyi stand corrected s3 and privatelink is a thingi stand corrected s3 and privatelink is a thing","upvote_count":"111","selected_answers":""},{"id":396316,"date":"Sun 10 Oct 2021 23:01","username":"MrCarter","content":"i stand corrected s3 and privatelink is a thing","upvote_count":"1","selected_answers":""},{"id":396317,"date":"Mon 18 Oct 2021 09:43","username":"MrCarter","content":"i stand corrected s3 and privatelink is a thing","upvote_count":"1","selected_answers":""},{"id":396320,"date":"Tue 19 Oct 2021 06:21","username":"MrCarterDerekKey","content":"The team needs to keep analysis tools running locally while fetching data from the cloud. That is why it has to be CWrong if you think it is not possible.","upvote_count":"11","selected_answers":""},{"id":440523,"date":"Mon 01 Nov 2021 00:57","username":"DerekKey","content":"Wrong if you think it is not possible.","upvote_count":"1","selected_answers":""},{"id":371533,"date":"Wed 06 Oct 2021 08:20","username":"Kukkuji","content":"Going with C. ","upvote_count":"1","selected_answers":""},{"id":368393,"date":"Tue 05 Oct 2021 08:11","username":"mustpasslamustpassla","content":"A, unpredictable patterns with large spikes & less change.Change to C, coz A use NLB","upvote_count":"11","selected_answers":""},{"id":368399,"date":"Wed 06 Oct 2021 00:36","username":"mustpassla","content":"Change to C, coz A use NLB","upvote_count":"1","selected_answers":""},{"id":359493,"date":"Mon 04 Oct 2021 17:02","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#730",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The following AWS Identity and Access Management (IAM) customer managed policy has been attached to an IAM user:<br><img src=\"https://www.examtopics.com/https://examtopics.com/assets/media/exam-media/04241/0048000001.png\" class=\"in-exam-image\"><br>Which statement describes the access that this policy provides to the user?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#730",
            "answers": [
        
        {
            "choice": "<p>A. The policy grants access to all Amazon S3 actions, including all actions in the prod-data S3 bucket<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. This policy denies access to all Amazon S3 actions, excluding all actions in the prod-data S3 bucket<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. This policy denies access to the Amazon S3 bucket and objects not having prod-data in the bucket name<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. This policy grants access to all Amazon S3 actions in the prod-data S3 bucket, but explicitly denies access to all other AWS services<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":352253,"date":"Thu 30 Sep 2021 08:41","username":"beebatov","content":"Answer: D<br><br>NotAction + NotResource<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html","upvote_count":"12","selected_answers":""},{"id":623825,"date":"Tue 28 Jun 2022 09:42","username":"TechX","content":"100% D","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":562328,"date":"Mon 07 Mar 2022 01:51","username":"yacin","content":"D is correct","upvote_count":"1","selected_answers":""},{"id":557771,"date":"Mon 28 Feb 2022 03:20","username":"jyrajan69","content":"Definitely C.  The explicit deny is clearly for S3 and denies access to any bucket that is not Prod. There is nothing here that prevents access to other AWS Services.","upvote_count":"2","selected_answers":""},{"id":499074,"date":"Sat 11 Dec 2021 04:42","username":"challenger1","content":"My Answer: D","upvote_count":"1","selected_answers":""},{"id":492592,"date":"Thu 02 Dec 2021 15:46","username":"AzureDP900","content":"D is correct for given scnerio!","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":448287,"date":"Sun 24 Oct 2021 02:55","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":434752,"date":"Thu 14 Oct 2021 21:44","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":414165,"date":"Tue 12 Oct 2021 01:14","username":"WhyIronMan","content":"I'll go with D<br>Trick question need to pay attention in the \\\"NotAction\\\" and \\\"NotResources\\\" clauses","upvote_count":"3","selected_answers":""},{"id":400498,"date":"Wed 06 Oct 2021 11:15","username":"vimgoru24","content":"Today I learned there is a negate Not- prefix in policy statements 😅 D it is","upvote_count":"3","selected_answers":""},{"id":385751,"date":"Sun 03 Oct 2021 05:43","username":"hk436","content":"D is my answer!!","upvote_count":"1","selected_answers":""},{"id":359496,"date":"Sat 02 Oct 2021 07:21","username":"Waiweng","content":"it's D","upvote_count":"3","selected_answers":""},{"id":349839,"date":"Fri 24 Sep 2021 13:13","username":"ExtHo","content":"D<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html","upvote_count":"3","selected_answers":""},{"id":348720,"date":"Thu 23 Sep 2021 23:12","username":"gsw","content":"D seems correct","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#731",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has implemented an ordering system using an event driven architecture. During initial testing, the system stopped processing orders. Further log analysis revealed that one order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was causing an error on the backend and blocking all subsequent order messages. The visibility timeout of the queue is set to 30 seconds, and the backend processing timeout is set to 10 seconds. A solutions architect needs to analyze faulty order messages and ensure that the system continues to process subsequent messages.<br>Which step should the solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#731",
            "answers": [
        
        {
            "choice": "<p>A. Increase the backend processing timeout to 30 seconds to match the visibility timeout.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Reduce the visibility timeout of the queue to automatically remove the faulty message.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346144,"date":"Mon 20 Sep 2021 15:15","username":"Jaypdv","content":"D. <br>You need a dead-letter queue with a type that matches the queue. So a DLQ for a standard queue must be a standard queue. Hence D. <br>Ref: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html","upvote_count":"17","selected_answers":""},{"id":352263,"date":"Sat 25 Sep 2021 04:18","username":"beebatov","content":"Answer: D<br><br>The dead-letter queue of a standard queue must also be a standard queue.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html","upvote_count":"6","selected_answers":""},{"id":697406,"date":"Mon 17 Oct 2022 14:44","username":"Blair77","content":"+1 for DDD","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":637653,"date":"Wed 27 Jul 2022 00:21","username":"hilft","content":"D.  DLQ","upvote_count":"1","selected_answers":""},{"id":499156,"date":"Sat 11 Dec 2021 05:14","username":"cldy","content":"D.  Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.","upvote_count":"1","selected_answers":""},{"id":497153,"date":"Wed 08 Dec 2021 21:03","username":"AzureDP900","content":"My answer is D","upvote_count":"1","selected_answers":""},{"id":448544,"date":"Thu 21 Oct 2021 23:11","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":434758,"date":"Fri 15 Oct 2021 08:16","username":"tgv","content":"DDD<br>---<br>dead-letter queue will do the job. FIFO is not needed here","upvote_count":"1","selected_answers":""},{"id":414168,"date":"Tue 12 Oct 2021 09:34","username":"WhyIronMan","content":"I'll go with D","upvote_count":"3","selected_answers":""},{"id":400010,"date":"Sun 10 Oct 2021 22:01","username":"vimgoru24","content":"D is the way you handle faulty messages in SQS","upvote_count":"3","selected_answers":""},{"id":385754,"date":"Mon 27 Sep 2021 22:34","username":"hk436","content":"D is my answer","upvote_count":"1","selected_answers":""},{"id":359991,"date":"Mon 27 Sep 2021 20:57","username":"Waiweng","content":"it's D","upvote_count":"4","selected_answers":""},{"id":348681,"date":"Wed 22 Sep 2021 05:19","username":"gsw","content":"agree D","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#732",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company has a business-critical application that runs in a single AWS Region. The application consists of multiple Amazon EC2 instances and an Amazon<br>RDS Multi-AZ DB instance. The EC2 instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones.<br>A solutions architect is implementing a disaster recovery (DR) plan for the application. The solutions architect has created a pilot light application deployment in a new Region, which is referred to as the DR Region. The DR environment has an Auto Scaling group with a single EC2 instance and a read replica of the RDS DB instance.<br>The solutions architect must automate a failover from the primary application environment to the pilot light environment in the DR Region.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#732",
            "answers": [
        
        {
            "choice": "<p>A. Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Add an email subscription to the SNS topic that sends messages to the application owner. Upon notification, instruct a systems operator to sign in to the AWS Management Console and initiate failover operations for the application.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task notifies a systems operator and attempts to restart the application services.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task modifies the DR environment by promoting the read replica and by adding EC2 instances to the Auto Scaling group.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Use an AWS Lambda function that is invoked by Amazon SNS in the DR Region to promote the read replica and to add EC2 instances to the Auto Scaling group.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":348683,"date":"Tue 28 Sep 2021 05:05","username":"gsw","content":"D makes more sense","upvote_count":"17","selected_answers":""},{"id":346150,"date":"Mon 27 Sep 2021 16:54","username":"Jaypdv","content":"Voting D. ","upvote_count":"8","selected_answers":""},{"id":678298,"date":"Sun 25 Sep 2022 02:07","username":"linuxmaster007","content":"Does this question came in real exam ?","upvote_count":"1","selected_answers":""},{"id":648921,"date":"Fri 19 Aug 2022 13:07","username":"gnic","content":"It's D.  \\\"Automate the failover\\\"<br>I would like to know why the right answer is not updated....","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":603604,"date":"Thu 19 May 2022 06:39","username":"bobsmith2000","content":"Because of \\\"automate the failover\\\"","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":584369,"date":"Mon 11 Apr 2022 20:33","username":"Yamchi","content":"Neither of them.... the answer is Route53 <br>if have to choose, I will go with DDDDDD","upvote_count":"5","selected_answers":""},{"id":497595,"date":"Thu 09 Dec 2021 11:20","username":"cldy","content":"D.  Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Use an AWS Lambda function that is invoked by Amazon SNS in the DR Region to promote the read replica and to add EC2 instances to the Auto Scaling group.","upvote_count":"1","selected_answers":""},{"id":497155,"date":"Wed 08 Dec 2021 21:08","username":"AzureDP900","content":"D is right answer","upvote_count":"1","selected_answers":""},{"id":448548,"date":"Sun 07 Nov 2021 06:42","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":434764,"date":"Wed 03 Nov 2021 00:54","username":"tgv","content":"DDD<br>---<br>Involving a system operator to do stuff when he receives a notification defeats the purpose of \\\"automate the failover\\\", so A & B are out<br>Between cron task every 5 minute and AWS native services always go for the latter","upvote_count":"2","selected_answers":""},{"id":434399,"date":"Wed 27 Oct 2021 20:22","username":"blackgamer","content":"Answer is D","upvote_count":"1","selected_answers":""},{"id":416074,"date":"Fri 22 Oct 2021 19:31","username":"nisoshabangu","content":"Answer is D, I agree with vimgoru24 in real life I would probably do A. ","upvote_count":"1","selected_answers":""},{"id":416029,"date":"Thu 21 Oct 2021 02:11","username":"Kopa","content":"Im going for D","upvote_count":"1","selected_answers":""},{"id":414173,"date":"Sat 16 Oct 2021 05:25","username":"WhyIronMan","content":"I'll go with D","upvote_count":"1","selected_answers":""},{"id":400013,"date":"Wed 13 Oct 2021 13:33","username":"vimgoru24linuxmaster007","content":"On exam I’d answer D.  <br>In real life I’d do A. Does this question came in real exam ?","upvote_count":"21","selected_answers":""},{"id":678297,"date":"Sun 25 Sep 2022 02:07","username":"linuxmaster007","content":"Does this question came in real exam ?","upvote_count":"1","selected_answers":""},{"id":385759,"date":"Tue 12 Oct 2021 23:13","username":"hk436","content":"D is my answer!!","upvote_count":"1","selected_answers":""},{"id":368406,"date":"Tue 12 Oct 2021 09:06","username":"mustpassla","content":"D is the ans. C also work but expensive comparing with D. ","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#733",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service<br>(Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the application's authentication service. All the failed login attempts originate from about 500 different IP addresses that change each week. A solutions architect must prevent the failed login attempts from overwhelming the authentication service.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#733",
            "answers": [
        
        {
            "choice": "<p>A. Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the ALB<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIDR ranges<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the ALB<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346152,"date":"Sat 25 Sep 2021 19:03","username":"Jaypdv","content":"Going with B.  <br>Rate-base rule in the WAF <br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html","upvote_count":"22","selected_answers":""},{"id":709466,"date":"Wed 02 Nov 2022 00:03","username":"Nidhin07","content":"The key here is IP Address changes every week, so that leaves the only suitable answer to B","upvote_count":"1","selected_answers":""},{"id":612085,"date":"Mon 06 Jun 2022 03:04","username":"KengL","content":"D, coz rated rule only checking 5 minutes which wasn't mentioned in the question.","upvote_count":"1","selected_answers":""},{"id":532893,"date":"Wed 26 Jan 2022 14:02","username":"tkanmani76gnic","content":"A is right - https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/which IP you will block? they change every week...","upvote_count":"11","selected_answers":""},{"id":654047,"date":"Tue 30 Aug 2022 14:29","username":"gnic","content":"which IP you will block? they change every week...","upvote_count":"1","selected_answers":""},{"id":532303,"date":"Tue 25 Jan 2022 18:39","username":"AMKazi","content":"Ans: B - only rate base rule can be used in this situation.<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html","upvote_count":"1","selected_answers":""},{"id":513951,"date":"Fri 31 Dec 2021 09:37","username":"cldy","content":"B is correct.","upvote_count":"1","selected_answers":""},{"id":497156,"date":"Wed 08 Dec 2021 21:11","username":"AzureDP900","content":"B is right ..<br>The IP set match statement inspects the IP address of a web request against a set of IP addresses and address ranges. Use this to allow or block web requests based on the IP addresses that the requests originate from. By default, AWS WAF uses the IP address from the web request origin, but you can configure the rule to use an HTTP header like X-Forwarded-For instead.<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-ipset-match.html<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html","upvote_count":"1","selected_answers":""},{"id":490991,"date":"Tue 30 Nov 2021 21:57","username":"AzureDP900","content":"I will go with B only!","upvote_count":"1","selected_answers":""},{"id":490496,"date":"Tue 30 Nov 2021 08:50","username":"acloudguruacloudguru","content":"B,WAF is designed for this kind of DDOShope i can have this easy question in my exam","upvote_count":"22","selected_answers":"Selected Answer: B"},{"id":490497,"date":"Tue 30 Nov 2021 08:50","username":"acloudguru","content":"hope i can have this easy question in my exam","upvote_count":"2","selected_answers":""},{"id":448549,"date":"Thu 04 Nov 2021 03:05","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":434767,"date":"Tue 02 Nov 2021 11:02","username":"tgv","content":"BBB<br>---<br>This is something that you can do with WAF and the fact that the IP addresses are changing you cannot set an IP set match rule","upvote_count":"1","selected_answers":""},{"id":414175,"date":"Tue 19 Oct 2021 20:28","username":"WhyIronManWhyIronManblackgamer","content":"I'll go with Bhttps://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.htmlYes , it is B","upvote_count":"321","selected_answers":""},{"id":414176,"date":"Thu 21 Oct 2021 02:59","username":"WhyIronManblackgamer","content":"https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.htmlYes , it is B","upvote_count":"21","selected_answers":""},{"id":434400,"date":"Tue 02 Nov 2021 02:51","username":"blackgamer","content":"Yes , it is B","upvote_count":"1","selected_answers":""},{"id":400018,"date":"Sun 17 Oct 2021 15:08","username":"vimgoru24","content":"B.  <br><br>You’d have hell of burden to manually blacklisting +500 IPs every week","upvote_count":"4","selected_answers":""},{"id":398840,"date":"Sun 17 Oct 2021 05:16","username":"SJain50","content":"security can not explicitly deny.<br>So going with B","upvote_count":"2","selected_answers":""},{"id":396367,"date":"Mon 11 Oct 2021 18:58","username":"KittuCheeku","content":"B is the right answer","upvote_count":"1","selected_answers":""},{"id":385762,"date":"Tue 05 Oct 2021 01:22","username":"hk436","content":"B is my answer!!","upvote_count":"1","selected_answers":""},{"id":368407,"date":"Thu 30 Sep 2021 08:36","username":"mustpassla","content":"B, other not make sense.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#734",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time. A user is notified when image processing is complete.<br>Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#734",
            "answers": [
        
        {
            "choice": "<p>A. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Invoke an AWS Lambda function to perform image processing when a message is available in the queue.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>F. Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346156,"date":"Tue 28 Sep 2021 05:29","username":"Jaypdv","content":"BCE <br>Upload to S3, process with lambda, notify with SNS","upvote_count":"24","selected_answers":""},{"id":349849,"date":"Wed 29 Sep 2021 04:42","username":"ExtHo","content":"S3 Batch Operations job seems not relevant so BCE<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-basics.html","upvote_count":"10","selected_answers":""},{"id":697641,"date":"Mon 17 Oct 2022 21:02","username":"Ni_yot","content":"Should BCE.  The only set of ans that work","upvote_count":"1","selected_answers":"Selected Answer: BCE"},{"id":697396,"date":"Mon 17 Oct 2022 14:32","username":"Blair77","content":"+1 for BCE !","upvote_count":"1","selected_answers":"Selected Answer: BCE"},{"id":624652,"date":"Wed 29 Jun 2022 15:07","username":"kangtamo","content":"BCE for sure.","upvote_count":"2","selected_answers":"Selected Answer: BCE"},{"id":497781,"date":"Thu 09 Dec 2021 15:11","username":"cldy","content":"B.  Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.<br>C.  Invoke an AWS Lambda function to perform image processing when a message is available in the queue.<br>E.  Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.","upvote_count":"1","selected_answers":""},{"id":497158,"date":"Wed 08 Dec 2021 21:15","username":"AzureDP900","content":"BCE is correct","upvote_count":"1","selected_answers":""},{"id":486549,"date":"Thu 25 Nov 2021 10:29","username":"acloudguru","content":"i hope i can have it in my exam","upvote_count":"2","selected_answers":""},{"id":448551,"date":"Fri 05 Nov 2021 02:08","username":"andylogan","content":"It's B C E","upvote_count":"1","selected_answers":""},{"id":445210,"date":"Sat 23 Oct 2021 14:58","username":"oppai1232oppai1232oppai1232","content":"Why BCE instead of BDE?<br>Lambda times out at 15 mins, what if it needed to take more than that?ohh I read it as AWS Batch lol<br>S3 Batch Operations only performs operations such as Copy, Invoke AWS Lambda function, and Restore on millions or billions of objects.will go for BCE as well","upvote_count":"151","selected_answers":""},{"id":445213,"date":"Tue 26 Oct 2021 14:44","username":"oppai1232oppai1232","content":"ohh I read it as AWS Batch lol<br>S3 Batch Operations only performs operations such as Copy, Invoke AWS Lambda function, and Restore on millions or billions of objects.will go for BCE as well","upvote_count":"51","selected_answers":""},{"id":445214,"date":"Thu 28 Oct 2021 17:03","username":"oppai1232","content":"will go for BCE as well","upvote_count":"1","selected_answers":""},{"id":441321,"date":"Fri 22 Oct 2021 23:38","username":"Kopa","content":"Im for B,C,E","upvote_count":"1","selected_answers":""},{"id":434770,"date":"Mon 18 Oct 2021 10:04","username":"tgv","content":"BBB CCC EEE<br>---","upvote_count":"1","selected_answers":""},{"id":434403,"date":"Sat 16 Oct 2021 20:17","username":"blackgamer","content":"It is BCE","upvote_count":"1","selected_answers":""},{"id":416045,"date":"Sat 16 Oct 2021 15:13","username":"Kopa","content":"BCE, very corelated to each other and makes sense","upvote_count":"3","selected_answers":""},{"id":414179,"date":"Fri 15 Oct 2021 21:52","username":"WhyIronMan","content":"I'll go with B, C, E","upvote_count":"1","selected_answers":""},{"id":400022,"date":"Wed 13 Oct 2021 21:39","username":"vimgoru24","content":"BCE classic","upvote_count":"1","selected_answers":""},{"id":385763,"date":"Tue 12 Oct 2021 12:06","username":"hk436","content":"BCE is my answer!!","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#735",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's processing team has an AWS account with a production application. The application runs on Amazon EC2 instances behind a Network Load<br>Balancer (NLB). The EC2 instances are hosted in private subnets in a VPC in the eu-west-1 Region. The VPC was assigned the CIDR block of 10.0.0.0/16. The billing team recently created a new AWS account and deployed an application on EC2 instances that are hosted in private subnets in a VPC in the eu-central-1<br>Region. The new VPC is assigned the CIDR block of 10.0.0.0/16.<br>The processing application needs to securely communicate with the billing application over a proprietary TCP port.<br>What should a solutions architect do to meet this requirement with the LEAST amount of operational effort?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#735",
            "answers": [
        
        {
            "choice": "<p>A. In the billing team's account, create a new VPC and subnets in eu-central-1 that use the CIDR block of 192.168.0.0/16. Redeploy the application to the new subnets. Configure a VPC peering connection between the two VPCs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. In the processing team's account, add an additional CIDR block of 192.168.0.0/16 to the VPC in eu-west-1. Restart each of the EC2 instances so that they obtain a new IP address. Configure an inter-Region VPC peering connection between the two VPCs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. In the billing team's account, create a new VPC and subnets in eu-west-1 that use the CIDR block of 192.168.0.0/16. Create a VPC endpoint service (AWS PrivateLink) in the processing team's account and an interface VPC endpoint in the new VPC.  Configure an inter-Region VPC peering connection in the billing team's account between the two VPCs.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. In each account, create a new VPC with the CIDR blocks of 192.168.0.0/16 and 172.16.0.0/16. Create inter-Region VPC peering connections between the billing team's VPCs and the processing team's VPCs. Create gateway VPC endpoints to allow traffic to route between the VPCs.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":508858,"date":"Fri 24 Dec 2021 21:30","username":"AzureDP900azkzmk","content":"C is correct answer , This question is part of AWS official practice test.You are right!","upvote_count":"101","selected_answers":""},{"id":556506,"date":"Sat 26 Feb 2022 05:19","username":"azkzmk","content":"You are right!","upvote_count":"1","selected_answers":""},{"id":346168,"date":"Thu 23 Sep 2021 17:20","username":"Jaypdv","content":"A.  seems right","upvote_count":"10","selected_answers":""},{"id":665101,"date":"Sat 10 Sep 2022 07:35","username":"Guoxian","content":"This is very interesting. I would say B is less trouble than A because instead of creating a brand new VPC, AWS now allows to add additional CiDR. Since both solutions require re-deployment of the EC2. Then I would argue B is possibly a better option than A.  I have also seen answers ticking C.  Honestly, I am not sure if it will work because we will still need a sets of new EC2 in the new CiDR to run the service. At this point of time, there is no EC2 services in the new CiDR.","upvote_count":"1","selected_answers":""},{"id":630060,"date":"Mon 11 Jul 2022 15:55","username":"Enigmaaaaaa","content":"For me its C. <br>A - can work but its not MINIMUM amount of operational work for sure.<br>Answer should be C without redeploying to whole solution - NLB is already configured, just need to create Service Endpoint and inter-region VPC since private link is a regional serviceand need to access it from another region.<br>So C will do it -1 service EP in another region + VPC inter-region peering to it <br>https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":626237,"date":"Sat 02 Jul 2022 18:48","username":"aandc","content":"C:redeploy the application meansoperational work","upvote_count":"1","selected_answers":""},{"id":565493,"date":"Fri 11 Mar 2022 13:57","username":"guillmichel","content":"A: redeploy the application -> operational work<br>C: just declare the PrivateLink + Interface endpoint (using the existing NLB). Less work","upvote_count":"4","selected_answers":""},{"id":555716,"date":"Fri 25 Feb 2022 03:59","username":"jyrajan69","content":"3 factors in this question, first it should be the least amount of effort, then there is the NLB and the need for secure connection. All of this can be achieved by A, no issues with NLB based on the followjng link (https://aws.amazon.com/about-aws/whats-new/2018/10/network-load-balancer-now-supports-inter-region-vpc-peering/). C is way more complicated and not required","upvote_count":"1","selected_answers":""},{"id":497160,"date":"Wed 08 Dec 2021 21:22","username":"AzureDP900AzureDP900","content":"A seems right answer based on scenario.Changing my answer to C after attempting AWS official practice test","upvote_count":"21","selected_answers":""},{"id":508860,"date":"Fri 24 Dec 2021 21:31","username":"AzureDP900","content":"Changing my answer to C after attempting AWS official practice test","upvote_count":"1","selected_answers":""},{"id":465738,"date":"Fri 05 Nov 2021 19:22","username":"Viper57","content":"It's weird that some people think its option C.  Here are the reason that it is wrong - <br><br>1. If it is using a VPC endpoint, why is a peering connection necessary? It can directly connect to the application via the endpoint so the extra VPC and peering connection is an unnecessary step<br>2. 'Inter region peering' is enabled by default for all VPC peering connections so there is no special type of 'inter region peering' connection<br>3. The order is wrong. The processing account needs to access the billing application. So the VPC endpoint service should be created in the Billing teams account, and the interface endpoint created in the processing account as the service provider. <br><br>A works and is much simpler.","upvote_count":"6","selected_answers":""},{"id":459598,"date":"Fri 05 Nov 2021 10:57","username":"student22","content":"C<br>---<br>Private Link","upvote_count":"2","selected_answers":""},{"id":455469,"date":"Wed 03 Nov 2021 00:25","username":"nisoshabangu","content":"C for me, application is behind an NLB, best way to achieve this isPrivatelinks.","upvote_count":"2","selected_answers":""},{"id":448555,"date":"Mon 01 Nov 2021 22:44","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":443308,"date":"Sat 30 Oct 2021 19:01","username":"Goram113","content":"https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/ - so I think this is C.  In such approach you don't need to make any changes in application related to moving ec2 to non overlapping subnets.","upvote_count":"2","selected_answers":""},{"id":440537,"date":"Fri 29 Oct 2021 14:28","username":"DerekKeyjohnnsmith","content":"You will need inter-region peering.<br>A wrong - doesn't have it<br>B wrong - will not work<br>C correct - vpc inter-regon peering and VPC enpoint<br>D wrong - doesn't make senseC doesn't work. The processing application needs to communicate with billing application. If the processing application is behind a endpoint. How can it communicate with billing application. Peering can be between any VPC.  You don't need to create a special inter-region peering type.","upvote_count":"23","selected_answers":""},{"id":446169,"date":"Sun 31 Oct 2021 21:03","username":"johnnsmith","content":"C doesn't work. The processing application needs to communicate with billing application. If the processing application is behind a endpoint. How can it communicate with billing application. Peering can be between any VPC.  You don't need to create a special inter-region peering type.","upvote_count":"3","selected_answers":""},{"id":434774,"date":"Tue 26 Oct 2021 19:49","username":"tgv","content":"AAA<br>---","upvote_count":"1","selected_answers":""},{"id":432682,"date":"Sat 23 Oct 2021 20:58","username":"Suresh108Suresh108Suresh108","content":"i see many selected option \\\"A\\\"<br>question haseu-west-1 where answer A has beloweu-central-1 <br>did anyone notice?disregard. mis read first. going with AAAAafter reading this again and again going for CCCCCC<br><br>https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/","upvote_count":"211","selected_answers":""},{"id":432715,"date":"Mon 25 Oct 2021 14:05","username":"Suresh108Suresh108","content":"disregard. mis read first. going with AAAAafter reading this again and again going for CCCCCC<br><br>https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/","upvote_count":"11","selected_answers":""},{"id":515391,"date":"Mon 03 Jan 2022 05:58","username":"Suresh108","content":"after reading this again and again going for CCCCCC<br><br>https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/","upvote_count":"1","selected_answers":""},{"id":416068,"date":"Sat 23 Oct 2021 03:14","username":"nisoshabangu","content":"A and C both work, A is less effort .","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#736",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that is developing a mobile game is making game assets available in two AWS Regions. Game assets are served from a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in each Region. The company requires game assets to be fetched from the closest Region. If game assets become unavailable in the closest Region, they should be fetched from the other Region.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#736",
            "answers": [
        
        {
            "choice": "<p>A. Create an Amazon CloudFront distribution. Create an origin group with one origin for each ALB.  Set one of the origins as primary.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Amazon Route 53 health check for each ALB.  Create a Route 53 failover routing record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create two Amazon CloudFront distributions, each with one ALB as the origin. Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions. Set the Evaluate Target Health value to Yes.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an Amazon Route 53 health check for each ALB.  Create a Route 53 latency alias record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346173,"date":"Wed 22 Sep 2021 07:09","username":"JaypdvExtHo","content":"D.  is validSupporting JaypdvYes It's D <br>Failover routing policy – Use when you want to configure active-passive failover.<br><br>Latency routing policy – Use when you have resources in multiple AWS Regions and you want to route traffic to the region that provides the best latency.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html","upvote_count":"2111","selected_answers":""},{"id":349929,"date":"Wed 22 Sep 2021 11:56","username":"ExtHo","content":"Supporting JaypdvYes It's D <br>Failover routing policy – Use when you want to configure active-passive failover.<br><br>Latency routing policy – Use when you have resources in multiple AWS Regions and you want to route traffic to the region that provides the best latency.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html","upvote_count":"11","selected_answers":""},{"id":557661,"date":"Sun 27 Feb 2022 22:56","username":"junehcuser0001","content":"Can someone please help me to understand why C is wrong?because failover routing","upvote_count":"11","selected_answers":""},{"id":606785,"date":"Tue 24 May 2022 17:30","username":"user0001","content":"because failover routing","upvote_count":"1","selected_answers":""},{"id":546854,"date":"Mon 14 Feb 2022 03:17","username":"futen0326","content":"Answer is D.  An alias record can have more than 1 entry, contrary to what people are saying here.","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":510667,"date":"Tue 28 Dec 2021 00:54","username":"vbal","content":"it did confuse for sure with CloudFront with OriginSet in the options but Answer is D because the request won't go the nearest Region with CloudFront as every request first lands on Primary.","upvote_count":"1","selected_answers":""},{"id":497163,"date":"Wed 08 Dec 2021 21:27","username":"AzureDP900","content":"If the nearest Region's game assets become unavailable, they should be retrieved from the other Region. This is key to answer this question. This concludes me D as right answer.","upvote_count":"1","selected_answers":""},{"id":448556,"date":"Fri 05 Nov 2021 06:30","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":440542,"date":"Sun 31 Oct 2021 01:54","username":"DerekKeyDerekKeyjohnnsmith","content":"Either I don't know how it works or all of you are wrong.<br>If you want such sophisticated routing one of the answers should mention Routing Policy. None of them is. <br>A correct - CloudFron: create an origin group with two origins: a primary and a secondary. If the primary origin is unavailable or returns specific HTTP response status codes CloudFront automatically switches to the secondary origin<br>B wrong - \\\"Create a Route 53 failover routing record pointing to the two ALBs\\\" - you have to set failover in each Route 53 record (each ALB) as Primary or Secondary<br>C wrong - \\\"Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions.\\\" - same as above<br>D wrong - \\\"Create a Route 53 latency alias record pointing to the two ALBs\\\" - alias can use only one destinationAdditonally for \\\"company requires game assets to be fetched from the closest Region\\\" you would need geoproximity or geolocation. CloudFront will do it for each request based on requestor IP.This is a badly worded question. A is wrong because \\\"The company requires game assets to be fetched from the closest Region\\\". With A, you always fetch from one ALB.  D is wrong because a latency alias record can't point to two ALB.  If you think \\\"The company requires game assets to be fetched from the closest Region\\\" really mean touching the closet region, A is correct. If you think a latency alias record really means two records, D is correct.","upvote_count":"211","selected_answers":""},{"id":440543,"date":"Sun 31 Oct 2021 15:16","username":"DerekKeyjohnnsmith","content":"Additonally for \\\"company requires game assets to be fetched from the closest Region\\\" you would need geoproximity or geolocation. CloudFront will do it for each request based on requestor IP.This is a badly worded question. A is wrong because \\\"The company requires game assets to be fetched from the closest Region\\\". With A, you always fetch from one ALB.  D is wrong because a latency alias record can't point to two ALB.  If you think \\\"The company requires game assets to be fetched from the closest Region\\\" really mean touching the closet region, A is correct. If you think a latency alias record really means two records, D is correct.","upvote_count":"11","selected_answers":""},{"id":446178,"date":"Wed 03 Nov 2021 03:47","username":"johnnsmith","content":"This is a badly worded question. A is wrong because \\\"The company requires game assets to be fetched from the closest Region\\\". With A, you always fetch from one ALB.  D is wrong because a latency alias record can't point to two ALB.  If you think \\\"The company requires game assets to be fetched from the closest Region\\\" really mean touching the closet region, A is correct. If you think a latency alias record really means two records, D is correct.","upvote_count":"1","selected_answers":""},{"id":434778,"date":"Mon 25 Oct 2021 01:39","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":414184,"date":"Wed 20 Oct 2021 11:41","username":"WhyIronMan","content":"I'll go with D","upvote_count":"1","selected_answers":""},{"id":400031,"date":"Sun 10 Oct 2021 16:51","username":"vimgoru24","content":"D.  The proximity requirement rules out other options","upvote_count":"2","selected_answers":""},{"id":385767,"date":"Thu 07 Oct 2021 00:04","username":"hk436","content":"D is my answer!!","upvote_count":"1","selected_answers":""},{"id":368413,"date":"Wed 29 Sep 2021 04:30","username":"mustpassla","content":"D for sure","upvote_count":"1","selected_answers":""},{"id":360258,"date":"Wed 29 Sep 2021 03:58","username":"Waiweng","content":"it's D","upvote_count":"2","selected_answers":""},{"id":352284,"date":"Sat 25 Sep 2021 14:20","username":"beebatov","content":"Answer: D<br><br>Latency routing for this use-case (having active resources in multiple regions)","upvote_count":"2","selected_answers":""},{"id":346129,"date":"Sun 19 Sep 2021 19:35","username":"gsw","content":"must be B","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#737",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet.<br>An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.<br>The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.<br>How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#737",
            "answers": [
        
        {
            "choice": "<p>A. Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":636782,"date":"Mon 25 Jul 2022 17:08","username":"cen007","content":"D is more suitable since the EC2 instances are being terminated.","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":622142,"date":"Sat 25 Jun 2022 15:35","username":"skyblue07","content":"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":498326,"date":"Fri 10 Dec 2021 06:39","username":"cldy","content":"D.  Suspend the Auto Scaling groupג€™s Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.","upvote_count":"2","selected_answers":""},{"id":497165,"date":"Wed 08 Dec 2021 21:32","username":"AzureDP900","content":"D is correct, I agree with acloudguru comments!","upvote_count":"2","selected_answers":""},{"id":488648,"date":"Sun 28 Nov 2021 02:25","username":"acloudguru","content":"either replaceunhealthy or terminate will work. here is only D. https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":475283,"date":"Wed 10 Nov 2021 09:14","username":"GeeBeeEl","content":"See https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html it shows<br>For Amazon EC2 Auto Scaling, there are two primary process types: Launch and Terminate. The Launch process adds a new Amazon EC2 instance to an Auto Scaling group, increasing its capacity. The Terminate process removes an Amazon EC2 instance from the group, decreasing its capacity. <br>HealthCheck process for EC2 autoscaling is not a primary process! It is a process along with the following <br>AddToLoadBalancer AlarmNotification AZRebalance HealthCheck InstanceRefresh ReplaceUnhealthy ScheduledActions <br>From the requirements, Some EC2 instances are now beingmarked as unhealthy and are being terminated. Application is running at reduced capacity not because instances are marked unhealthy but because they are being terminated. <br>I go with D because it is the only option that can prevent application from running at reduced capacity <br>Option D is the answer","upvote_count":"1","selected_answers":""},{"id":451413,"date":"Fri 29 Oct 2021 01:05","username":"Viper57","content":"D is correct.<br><br>You can suspend the 'ReplaceUnhealthy' process to prevent unhealthy instances from being terminated. <br><br>See https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html","upvote_count":"2","selected_answers":""},{"id":448559,"date":"Thu 28 Oct 2021 15:49","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":440551,"date":"Tue 26 Oct 2021 05:36","username":"DerekKey","content":"A wrong - impossible<br>B wrong - even with termination protection and instance scale-in protection enabled, instance will be terminated if a health check determines that an instance is unhealthy<br>C wrong - stupid<br>D correct - but not advised","upvote_count":"1","selected_answers":""},{"id":434781,"date":"Fri 22 Oct 2021 19:43","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":434432,"date":"Thu 21 Oct 2021 23:44","username":"blackgamer","content":"D for me","upvote_count":"1","selected_answers":""},{"id":433986,"date":"Wed 20 Oct 2021 00:12","username":"sergioandreslqsergioandreslq","content":"A-Incorrect: disable the healthcheck won't inform which is healthy and unhealthy, remember we need to review unhealthy and we need to identify which instance in this status.<br>B: It is the correct, Termination protection: Prevents Auto Scaling terminating protected instances, this is helpful to execute a deep diagnostics of the EC2 and identify the root cause why they are unhealthy and they are being terminating.<br>C: Incorrect: There is not relation about unhealthy and oldest instance. <br>D: You can't suspend the auto Scaling Terminate process.Change From B to D: The way to suspend the Scaling Termination process is using ASG \\\"Instance Scale-in Protection\\\": With the new control that we are giving you today, you can protect certain instances from termination.<br>https://aws.amazon.com/blogs/aws/new-instance-protection-for-auto-scaling/","upvote_count":"11","selected_answers":""},{"id":433992,"date":"Thu 21 Oct 2021 14:16","username":"sergioandreslq","content":"Change From B to D: The way to suspend the Scaling Termination process is using ASG \\\"Instance Scale-in Protection\\\": With the new control that we are giving you today, you can protect certain instances from termination.<br>https://aws.amazon.com/blogs/aws/new-instance-protection-for-auto-scaling/","upvote_count":"1","selected_answers":""},{"id":418542,"date":"Sun 17 Oct 2021 21:24","username":"lifebeginsViper57","content":"How we can suspend Autoscaling Termination Process itself. We can suspend the processes which is running inside the instances. <br><br>I hope it shoud beOption 'B'.<br><br>https://aws.amazon.com/blogs/aws/new-instance-protection-for-auto-scaling/Read this guide, it clearly explains how to suspend the termination process on ASGs. <br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html<br><br>Answer is D. ","upvote_count":"11","selected_answers":""},{"id":451414,"date":"Sun 07 Nov 2021 04:18","username":"Viper57","content":"Read this guide, it clearly explains how to suspend the termination process on ASGs. <br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html<br><br>Answer is D. ","upvote_count":"1","selected_answers":""},{"id":414189,"date":"Thu 14 Oct 2021 09:46","username":"WhyIronMan","content":"I'll go with D","upvote_count":"3","selected_answers":""},{"id":360271,"date":"Tue 12 Oct 2021 00:01","username":"Waiweng","content":"it's D","upvote_count":"3","selected_answers":""},{"id":352291,"date":"Mon 11 Oct 2021 02:27","username":"beebatovGeeBeeElGeeBeeEl","content":"Answer: D<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#choosing-suspend-resumeYour link actually suggests option AActually your link also suggests option D and now looking at it, option D is the answer -- see my separate post for the reasoning","upvote_count":"411","selected_answers":""},{"id":475274,"date":"Wed 10 Nov 2021 08:47","username":"GeeBeeElGeeBeeEl","content":"Your link actually suggests option AActually your link also suggests option D and now looking at it, option D is the answer -- see my separate post for the reasoning","upvote_count":"11","selected_answers":""},{"id":475279,"date":"Wed 10 Nov 2021 09:07","username":"GeeBeeEl","content":"Actually your link also suggests option D and now looking at it, option D is the answer -- see my separate post for the reasoning","upvote_count":"1","selected_answers":""},{"id":346185,"date":"Wed 06 Oct 2021 18:10","username":"gswgsw","content":"AWS actually suggests you should put your instances into the standby state to troubleshoot failure but that isn't an option hereno i was wrong it is option D","upvote_count":"12","selected_answers":""},{"id":346187,"date":"Thu 07 Oct 2021 11:08","username":"gsw","content":"no i was wrong it is option D","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#738",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application<br>VPC with the shared services VPC, an error message indicates a peering failure.<br>Which factors could cause this error? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#738",
            "answers": [
        
        {
            "choice": "<p>A. The IPv4 CIDR ranges of the two VPCs overlap<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. The VPCs are not in the same Region<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. One or both accounts do not have access to an Internet gateway<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. One of the VPCs was not shared through AWS Resource Access Manager<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. The IAM role in the peer accepter account does not have the correct permissions<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346189,"date":"Sun 19 Sep 2021 23:51","username":"gsw","content":"i agree A and E","upvote_count":"17","selected_answers":""},{"id":584273,"date":"Mon 11 Apr 2022 16:58","username":"Netaji","content":"https://aws.amazon.com/about-aws/whats-new/2017/11/announcing-support-for-inter-region-vpc-peering/","upvote_count":"1","selected_answers":""},{"id":577649,"date":"Tue 29 Mar 2022 15:55","username":"jj22222","content":"these look right: a and e","upvote_count":"1","selected_answers":"Selected Answer: AE"},{"id":561319,"date":"Sat 05 Mar 2022 09:58","username":"pal40sg","content":"A&E - https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-vpc-peering-error/","upvote_count":"1","selected_answers":"Selected Answer: AE"},{"id":529489,"date":"Sat 22 Jan 2022 01:14","username":"tkanmani76","content":"A&E - https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-vpc-peering-error/","upvote_count":"1","selected_answers":""},{"id":497168,"date":"Wed 08 Dec 2021 21:35","username":"AzureDP900","content":"A,E sounds good to me.","upvote_count":"1","selected_answers":""},{"id":497167,"date":"Wed 08 Dec 2021 21:35","username":"AzureDP900","content":"A,E sound good to me","upvote_count":"1","selected_answers":""},{"id":448561,"date":"Sun 07 Nov 2021 14:29","username":"andylogan","content":"It's A E","upvote_count":"1","selected_answers":""},{"id":434820,"date":"Sun 07 Nov 2021 00:11","username":"tgv","content":"AAA EEE<br>---<br>No need for the VPCs to be in the same region <br>No need for an internet gateway<br>No need for the VPCs to be shared using RAM","upvote_count":"4","selected_answers":""},{"id":414190,"date":"Fri 29 Oct 2021 13:04","username":"WhyIronMan","content":"I'll go with A, E","upvote_count":"1","selected_answers":""},{"id":400035,"date":"Tue 26 Oct 2021 22:10","username":"vimgoru24","content":"A,E is way to go","upvote_count":"1","selected_answers":""},{"id":385772,"date":"Wed 20 Oct 2021 12:37","username":"hk436","content":"A &E is my answer!!","upvote_count":"1","selected_answers":""},{"id":360273,"date":"Mon 11 Oct 2021 19:28","username":"Waiweng","content":"it's A and E","upvote_count":"3","selected_answers":""},{"id":353264,"date":"Mon 04 Oct 2021 06:50","username":"digimaniacbeebatovdigimaniac","content":"AD<br>A is obvious, D is documented below<br>Shared VPCs prerequisites<br>You must enable resource sharing from the management account for your organization.<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html#vpc-share-prerequisitesits A & E.  Cloud engineer uses \\\"AWS CloudFormation\\\" to attempt to peer the application.<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-vpc-peering-error/it is shared service VPC, I read it wrong.<br>AE","upvote_count":"121","selected_answers":""},{"id":354098,"date":"Mon 11 Oct 2021 08:28","username":"beebatovdigimaniac","content":"its A & E.  Cloud engineer uses \\\"AWS CloudFormation\\\" to attempt to peer the application.<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-vpc-peering-error/it is shared service VPC, I read it wrong.<br>AE","upvote_count":"21","selected_answers":""},{"id":362552,"date":"Fri 15 Oct 2021 03:03","username":"digimaniac","content":"it is shared service VPC, I read it wrong.<br>AE","upvote_count":"1","selected_answers":""},{"id":352296,"date":"Wed 22 Sep 2021 21:42","username":"beebatovbeebatov","content":"Answer: C & E<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-vpc-peering-error/Sorry it was a Typo, Answer: A & E","upvote_count":"12","selected_answers":""},{"id":352518,"date":"Mon 04 Oct 2021 04:39","username":"beebatov","content":"Sorry it was a Typo, Answer: A & E","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#739",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that develops consumer electronics with offices in Europe and Asia has 60 TB of software images stored on premises in Europe. The company wants to transfer the images to an Amazon S3 bucket in the ap-northeast-1 Region. New software images are created daily and must be encrypted in transit. The company needs a solution that does not require custom development to automatically transfer all existing and new software images to Amazon S3.<br>What is the next step in the transfer process?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#739",
            "answers": [
        
        {
            "choice": "<p>A. Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure Amazon Kinesis Data Firehose to transfer the images using S3 Transfer Acceleration<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use an AWS Snowball device to transfer the images with the S3 bucket as the target<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Transfer the images over a Site-to-Site VPN connection using the S3 API with multipart upload<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":615162,"date":"Sun 12 Jun 2022 07:25","username":"Chuky64","content":"AWS DataSync for current and new objects.","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":603187,"date":"Wed 18 May 2022 08:59","username":"bobsmith2000","content":"\\\"current and new objects\\\" = DataSync","upvote_count":"3","selected_answers":"Selected Answer: A"},{"id":497388,"date":"Thu 09 Dec 2021 07:28","username":"cldy","content":"A.  Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket","upvote_count":"1","selected_answers":""},{"id":497172,"date":"Wed 08 Dec 2021 21:38","username":"AzureDP900","content":"A is right <br>https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html","upvote_count":"1","selected_answers":""},{"id":448563,"date":"Sun 31 Oct 2021 12:03","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":434821,"date":"Sun 31 Oct 2021 09:32","username":"tgv","content":"AAA<br>---","upvote_count":"1","selected_answers":""},{"id":416061,"date":"Sat 23 Oct 2021 12:22","username":"Kopa","content":"its A,<br><br>. DataSync provides built-in security capabilities such as encryption of data in-transit, and data integrity verification in-transit and at-rest. It optimizes use of network bandwidth, and automatically recovers from network connectivity failures. In addition, DataSync provides control and monitoring capabilities such as data transfer scheduling and granular visibility into the transfer process through Amazon CloudWatch metrics, logs, and events.","upvote_count":"4","selected_answers":""},{"id":414192,"date":"Thu 21 Oct 2021 01:47","username":"WhyIronManStelSen","content":"I'll go with A<br>Unfortunately in real world it will be a combination of D and A due the first high volumeI would say combination of C&A. ","upvote_count":"42","selected_answers":""},{"id":460362,"date":"Wed 03 Nov 2021 13:02","username":"StelSen","content":"I would say combination of C&A. ","upvote_count":"2","selected_answers":""},{"id":400037,"date":"Thu 14 Oct 2021 08:34","username":"vimgoru24","content":"No custom development + no time constraints = A","upvote_count":"3","selected_answers":""},{"id":385775,"date":"Wed 13 Oct 2021 01:48","username":"hk436","content":"A is my answer!!","upvote_count":"1","selected_answers":""},{"id":382648,"date":"Wed 13 Oct 2021 00:39","username":"Rich_Rich","content":"(A) https://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/","upvote_count":"1","selected_answers":""},{"id":360279,"date":"Mon 11 Oct 2021 19:56","username":"Waiweng","content":"it's A","upvote_count":"2","selected_answers":""},{"id":352589,"date":"Mon 11 Oct 2021 15:37","username":"CarisB","content":"Agree on A","upvote_count":"4","selected_answers":""},{"id":352273,"date":"Fri 08 Oct 2021 20:56","username":"beebatov","content":"Answer: A<br><br>DataSync can automate the transfer + Snowball can't be shipped cross-region!<br><br>https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html<br>https://docs.aws.amazon.com/snowball/latest/ug/shipping.html","upvote_count":"4","selected_answers":""},{"id":346191,"date":"Tue 21 Sep 2021 06:11","username":"gswChibuzo1sergioandreslq","content":"datasync agent uses TLS so it could well be AHow long will it take to transfer 60TB from one region to another?There is no time constraint in the requirements, so, DataSync is the best option to comply with requirements of: \\\"automatically transfer all existing and new software images to Amazon S3 encrypted in transit\\\"<br>C: Incorrect: Won't fit the requirement to \\\"automatically transfer all existing and NEW SOFTWARE IMAGES\\\" <br>D: Incorrect: it works however, it is easier use DataSync as this process is automatic, upload files using Site To Site VPN will require a manual intervention to review status of upload.","upvote_count":"211","selected_answers":""},{"id":348770,"date":"Sun 26 Sep 2021 08:59","username":"Chibuzo1sergioandreslq","content":"How long will it take to transfer 60TB from one region to another?There is no time constraint in the requirements, so, DataSync is the best option to comply with requirements of: \\\"automatically transfer all existing and new software images to Amazon S3 encrypted in transit\\\"<br>C: Incorrect: Won't fit the requirement to \\\"automatically transfer all existing and NEW SOFTWARE IMAGES\\\" <br>D: Incorrect: it works however, it is easier use DataSync as this process is automatic, upload files using Site To Site VPN will require a manual intervention to review status of upload.","upvote_count":"11","selected_answers":""},{"id":433995,"date":"Sat 30 Oct 2021 23:16","username":"sergioandreslq","content":"There is no time constraint in the requirements, so, DataSync is the best option to comply with requirements of: \\\"automatically transfer all existing and new software images to Amazon S3 encrypted in transit\\\"<br>C: Incorrect: Won't fit the requirement to \\\"automatically transfer all existing and NEW SOFTWARE IMAGES\\\" <br>D: Incorrect: it works however, it is easier use DataSync as this process is automatic, upload files using Site To Site VPN will require a manual intervention to review status of upload.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#740",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a distributed application on a set of Amazon EC2 instances in an Auto Scaling group. The application stores large amounts of data on an<br>Amazon Elastic File System (Amazon EFS) file system, and new data is generated monthly. The company needs to back up the data in a secondary AWS Region to restore from in case of a performance problem in its primary Region. The company has an RTO of 1 hour. A solutions architect needs to create a backup strategy while minimizing the extra cost.<br>Which backup strategy should the solutions architect recommend to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#740",
            "answers": [
        
        {
            "choice": "<p>A. Create a pipeline in AWS Data Pipeline. Copy the data to an EFS file system in the secondary Region. Create a lifecycle policy to move files to the EFS One Zone-Infrequent Access storage class.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Set up automatic backups by using AWS Backup. Create a copy rule to copy backups to an Amazon S3 bucket in the secondary Region. Create a lifecycle policy to move backups to the S3 Glacier storage class.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Set up AWS DataSync and continuously copy the files to an Amazon S3 bucket in the secondary Region. Create a lifecycle policy to move files to the S3 Glacier Deep Archive storage class.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Turn on EFS Cross-Region Replication and set the secondary Region as the target. Create a lifecycle policy to move files to the EFS Infrequent Access storage class in the secondary Region.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":556134,"date":"Fri 25 Feb 2022 18:19","username":"seyik","content":"D, EFS cross-Region Replication is now possible with RTO of 15mins<br>https://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/","upvote_count":"16","selected_answers":""},{"id":414202,"date":"Mon 25 Oct 2021 05:07","username":"WhyIronManJohnPi","content":"I'll go with A<br><br>By elimination: <br><br>- B and C because of S3 Glacierwill not attend the 1 hour RTO<br><br>- D: there is no such thing \\\"EFS Cross-Region Replication\\\".... if you google it, everything points to AWS DataSync insteadhttps://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/","upvote_count":"111","selected_answers":""},{"id":690872,"date":"Mon 10 Oct 2022 10:24","username":"JohnPi","content":"https://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/","upvote_count":"1","selected_answers":""},{"id":714969,"date":"Thu 10 Nov 2022 07:28","username":"janvandermerwer","content":"D - I agree with other comments.<br><br>B - May be an option depending on what tier of glacier is being used - i.e instance retrieval, flexible retrieval: https://aws.amazon.com/s3/storage-classes/glacier/<br>C - Doesn't meet RTO of 1 hour (Glacier Deep Archive)","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":640793,"date":"Mon 01 Aug 2022 19:44","username":"Ni_yot","content":"Change my ans to D.  EFS cross region replication does exist. It depends on really when answered the question.As of Jan 2022 EFS CRR is a thing. <br>https://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/","upvote_count":"1","selected_answers":""},{"id":630180,"date":"Mon 11 Jul 2022 21:05","username":"asfsdfsdf","content":"D should be the answer - RTO of 15<br>https://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/<br>before jan 2022 answer its A- Since C is for deep archive more than 1 hour, B you cant copy backup data to s3 only vaults, D wasn't exists before 2022 jan","upvote_count":"1","selected_answers":""},{"id":613665,"date":"Thu 09 Jun 2022 08:52","username":"AnhddAnhdd","content":"anyone who choose A can tell me why One Zone - IA could be anh failover? I support for Danyone who choose A can tell me why One Zone - IA could be a failover? I support for D<br>- my typo sorry","upvote_count":"11","selected_answers":"Selected Answer: D"},{"id":613666,"date":"Thu 09 Jun 2022 08:53","username":"Anhdd","content":"anyone who choose A can tell me why One Zone - IA could be a failover? I support for D<br>- my typo sorry","upvote_count":"1","selected_answers":""},{"id":613051,"date":"Wed 08 Jun 2022 05:29","username":"hilft","content":"I go D","upvote_count":"1","selected_answers":""},{"id":607675,"date":"Thu 26 May 2022 15:32","username":"bobsmith2000","content":"https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":577286,"date":"Tue 29 Mar 2022 08:25","username":"Mimek","content":"D as of Jan 2022","upvote_count":"8","selected_answers":"Selected Answer: D"},{"id":546218,"date":"Sun 13 Feb 2022 05:00","username":"futen0326","content":"B.  Glacier supports expedited archive. AWS Backup is the recommended backup solution for EFS. Not sure about cost here but the question does not mention anything about cost-efficiency.","upvote_count":"1","selected_answers":""},{"id":534194,"date":"Fri 28 Jan 2022 00:55","username":"AMKazi","content":"Ans is C: \\\"use as a fallback in the event of a main Region performance issue.\\\" meets this requirements as data needs to be continuously replicated. <br>Remember its being copied to S3 so it can meet RTO requirement. Glacier will come into picture as a lifecycle policy , not in effect immediately.","upvote_count":"1","selected_answers":""},{"id":527808,"date":"Wed 19 Jan 2022 19:18","username":"lulz111lulz111","content":"Its C in my opinion<br>https://aws.amazon.com/about-aws/whats-new/2019/05/aws-datasync-now-supports-efs-to-efs-transfer/ - copying data between EFS file systems<br>https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html - Expedited recovery from Glacier is between 1-5 minutes.B sorry, i missed the Deep archive bit of C.  <br>https://aws.amazon.com/about-aws/whats-new/2020/01/aws-backup-supports-cross-region-backup/","upvote_count":"12","selected_answers":""},{"id":527810,"date":"Wed 19 Jan 2022 19:20","username":"lulz111","content":"B sorry, i missed the Deep archive bit of C.  <br>https://aws.amazon.com/about-aws/whats-new/2020/01/aws-backup-supports-cross-region-backup/","upvote_count":"2","selected_answers":""},{"id":497198,"date":"Wed 08 Dec 2021 22:53","username":"AzureDP900","content":"I will go with A<br>https://aws.amazon.com/about-aws/whats-new/2019/05/aws-datasync-now-supports-efs-to-efs-transfer/","upvote_count":"1","selected_answers":""},{"id":497174,"date":"Wed 08 Dec 2021 21:41","username":"AzureDP900","content":"A is right","upvote_count":"1","selected_answers":""},{"id":496505,"date":"Wed 08 Dec 2021 04:26","username":"tkanmani76tkanmani76","content":"Option C<br>A- Is a legacy solution for EFS backup - Refer https://docs.aws.amazon.com/efs/latest/ug/alternative-efs-backup.html#backup-considerations - hence not preferred<br>2.Batch - Preferred approach - But not cost effective<br>3. Data Sync - Supports data movement across regions and can be used to hook EFS with S3. Also Glacier Deep archive cheaper than Glacier storage and hence the best choice, considering that the expenses should be minimum.Pricing wise S3 Glacier is cheaper than EFS - $0.0133 for EFS Vs .0036$ for Glacier. Using Glacier we can retrieve in minutes using expedited option. DeepArchive though cheaper retrieval can take more than 12 hours. I retract from C and B is the right option.","upvote_count":"11","selected_answers":""},{"id":514756,"date":"Sun 02 Jan 2022 01:28","username":"tkanmani76","content":"Pricing wise S3 Glacier is cheaper than EFS - $0.0133 for EFS Vs .0036$ for Glacier. Using Glacier we can retrieve in minutes using expedited option. DeepArchive though cheaper retrieval can take more than 12 hours. I retract from C and B is the right option.","upvote_count":"1","selected_answers":""},{"id":491765,"date":"Wed 01 Dec 2021 16:24","username":"Gaurav_GGGGaurav_GGG","content":"Should be B. <br><br>AWS Documentation clearly mentions AWS Backup as a recommended service for EFS backup solution.<br>\\\"Recommended Amazon EFS backup solutions<br>There are two recommended solutions available for backing up your Amazon EFS file systems.<br><br>AWS Backup service<br><br>The EFS-to-EFS backup solution<br><br>\\\"<br>https://docs.aws.amazon.com/efs/latest/ug/alternative-efs-backup.html#recommended-backup-solutionsAnd Glacier expedited retrieval supports 1-5 minutes retrieval time.","upvote_count":"32","selected_answers":""},{"id":491767,"date":"Wed 01 Dec 2021 16:26","username":"Gaurav_GGG","content":"And Glacier expedited retrieval supports 1-5 minutes retrieval time.","upvote_count":"2","selected_answers":""},{"id":476525,"date":"Thu 11 Nov 2021 22:47","username":"sashenka","content":"Technically speaking both B and C would meet the requirements of the 1 hour RTO!Creating a lifecycle policy to move backups to the S3 Glacier or S# Glacier Deep Archive storage class happens asynchronously and the actual transition typically takes over 24 hrs. Both B and C do not state the number of days to transition to Glacier from S3 and even if 0 is selected one would have at least 24 hrs and certainly more than the required 1 hour of RTO to have direct access to the backup data. Again, the point I am making is that the data is not being moved DIRECTLY into S3 Glacier or S3 Glacier Archive and as such the lifecycle policy transition is not immediate and will allow for a 1 hour RTO.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#741",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application on AWS. An AWS Lambda function uses credentials to authenticate to an Amazon RDS for MySQL DB instance. A security risk assessment identified that these credentials are not frequently rotated. Also, encryption at rest is not enabled for the DB instance. The security team requires that both of these issues be resolved.<br>Which strategy should a solutions architect recommend to remediate these security risks?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#741",
            "answers": [
        
        {
            "choice": "<p>A. Configure the Lambda function to store and retrieve the database credentials in AWS Secrets Manager and enable rotation of the credentials. Take a snapshot of the DB instance and encrypt a copy of that snapshot. Replace the DB instance with a new DB instance that is based on the encrypted snapshot.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Modify the DB instance and enable encryption.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure the Lambda function to store and retrieve the database credentials as encrypted AWS Systems Manager Parameter Store parameters. Create another Lambda function to automatically rotate the credentials. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":352302,"date":"Tue 21 Sep 2021 23:49","username":"beebatovAnonymousJhb","content":"Answer: A<br><br>Parameter store can store DB credentials as secure string but CANNOT rotate secrets, hence, go with A + Cannot enable encryption on existing MySQL RDS instance, must create a new encrypted one from unencrypted snapshot.https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/#:~:text=Secrets%20Manager%20offers%20built%2Din%20integrations%20for%20rotating%20credentials%20for,rotate%20other%20types%20of%20secrets.","upvote_count":"211","selected_answers":""},{"id":543946,"date":"Wed 09 Feb 2022 18:12","username":"AnonymousJhb","content":"https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/#:~:text=Secrets%20Manager%20offers%20built%2Din%20integrations%20for%20rotating%20credentials%20for,rotate%20other%20types%20of%20secrets.","upvote_count":"1","selected_answers":""},{"id":347328,"date":"Tue 21 Sep 2021 15:55","username":"ExtHo","content":"A <br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html","upvote_count":"11","selected_answers":""},{"id":655826,"date":"Thu 01 Sep 2022 07:15","username":"AYANtheGLADIATOR","content":"A for sure.","upvote_count":"1","selected_answers":""},{"id":631696,"date":"Fri 15 Jul 2022 12:41","username":"CloudHandsOn","content":"My first answer was A","upvote_count":"1","selected_answers":""},{"id":593244,"date":"Wed 27 Apr 2022 16:43","username":"bobsmith2000","content":"B and C are wrong because of RDS encryption limitation<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Limitations<br><br>D is incorrect due to parameter store usage. There's no rotation provided by the service","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":568807,"date":"Wed 16 Mar 2022 07:28","username":"RVD","content":"Ans: A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":559883,"date":"Thu 03 Mar 2022 08:28","username":"KennethTam","content":"A is correct","upvote_count":"1","selected_answers":""},{"id":536723,"date":"Mon 31 Jan 2022 08:28","username":"ashehzad","content":"A is the right answer","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":526938,"date":"Tue 18 Jan 2022 20:01","username":"mattfaz","content":"Here is why D cannot be correct: https://aws.amazon.com/premiumsupport/knowledge-center/rds-encrypt-instance-mysql-mariadb/<br>In the short description of this link - it specifically states that you cannot create an encrypted read-replica from an unencrypted DB.  The only way to set encryption on an RDS instance is during deployment of the initial instance or creating a new instance from a snapshot and selecting the Encryption and Key in the parameters page. So that eliminates B,C,D. D is also incorrect since you would not need to create another Lambda function to rotate the keys - this is a feature included in Secrets Manager OOTB. ","upvote_count":"2","selected_answers":""},{"id":510224,"date":"Mon 27 Dec 2021 11:35","username":"RVivek","content":"Answer: A<br>Encrypting a unencrypted instance of DB or creating a encrypted replica of an un encrypted DBinstance are not possible Hence A is the only solution possible. <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Limitations","upvote_count":"1","selected_answers":""},{"id":497200,"date":"Wed 08 Dec 2021 22:58","username":"AzureDP900","content":"A is correct","upvote_count":"1","selected_answers":""},{"id":496487,"date":"Wed 08 Dec 2021 03:47","username":"rogan1821","content":"지금 사용중","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":494296,"date":"Sun 05 Dec 2021 13:00","username":"cldy","content":"A.  Configure the Lambda function to store and retrieve the database credentials in AWS Secrets Manager and enable rotation of the credentials. Take a snapshot of the DB instance and encrypt a copy of that snapshot. Replace the DB instance with a new DB instance that is based on the encrypted snapshot.","upvote_count":"2","selected_answers":""},{"id":486546,"date":"Thu 25 Nov 2021 10:24","username":"RVD","content":"RDS has integration with Secret Manger with Key rotation fuction.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":485219,"date":"Tue 23 Nov 2021 18:12","username":"Gaurav_GGG","content":"Answer is A.  Secret manager will store and rotate secrets. And need encrypted snapshot to create encryption at rest DB. ","upvote_count":"1","selected_answers":""},{"id":482287,"date":"Sat 20 Nov 2021 07:18","username":"backfringe","content":"AAAAAAAAAAAAAAAAA","upvote_count":"1","selected_answers":""},{"id":475233,"date":"Wed 10 Nov 2021 06:34","username":"ByomkeshDas","content":"Option A is correct. Because you can't create an encrypted read replica from an unencrypted instance. https://aws.amazon.com/premiumsupport/knowledge-center/rds-encrypt-instance-mysql-mariadb","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#742",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently deployed a new application that runs on a group of Amazon EC2 Linux instances in a VPC.  In a peered VPC, the company launched an EC2<br>Linux instance that serves as a bastion host. The security group of the application instances allows access only on TCP port 22 from the private IP of the bastion host. The security group of the bastion host allows access to TCP port 22 from 0.0.0.0/0 so that system administrators can use SSH to remotely log in to the application instances from several branch offices.<br>While looking through operating system logs on the bastion host, a cloud engineer notices thousands of failed SSH logins to the bastion host from locations around the world. The cloud engineer wants to change how remote access is granted to the application instances and wants to meet the following requirements:<br>✑ Eliminate brute-force SSH login attempts.<br>✑ Retain a log of commands run during an SSH session.<br>✑ Retain the ability to forward ports.<br>Which solution meets these requirements for remote access to the application instances?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#742",
            "answers": [
        
        {
            "choice": "<p>A. Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to use Session Manager to establish a session with the application instances. Terminate the bastion host.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Update the security group of the bastion host to allow traffic from only the public IP addresses of the branch offices.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure an AWS Client VPN endpoint and provision each system administrator with a certificate to establish a VPN connection to the application VPC.  Update the security group of the application instances to allow traffic from only the Client VPN IPv4 CIDR. Terminate the bastion host.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to issue commands to the application instances by using Systems Manager Run Command. Terminate the bastion host.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346206,"date":"Sun 26 Sep 2021 10:50","username":"Jaypdv","content":"A. <br>\\\"Session Manager removes the need to open inbound ports, manage SSH keys, or use bastion hosts\\\"<br>Ref: https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html","upvote_count":"20","selected_answers":""},{"id":398729,"date":"Tue 12 Oct 2021 16:21","username":"SJain50","content":"B<br>question says \\\" Retain the ability to forward ports\\\" - NAT gateway can not do this. Only NAT instance or bastian host is capable to do this.","upvote_count":"6","selected_answers":""},{"id":615143,"date":"Sun 12 Jun 2022 06:21","username":"Shankar124","content":"A is correct:<br>As its now also support port forwarding<br>Ref: https://aws.amazon.com/about-aws/whats-new/2022/05/aws-systems-manager-support-port-forwarding-remote-hosts-using-session-manager/","upvote_count":"1","selected_answers":""},{"id":608069,"date":"Fri 27 May 2022 14:26","username":"user89","content":"A. <br>Session Manager logs the commands you enter and their output during a session depending on your session preferences. so it covers all requirement.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html","upvote_count":"2","selected_answers":""},{"id":598608,"date":"Sun 08 May 2022 18:02","username":"tartarus23","content":"A.  Session manager enables secure SSH Access, port forwarding, and logging of sesssions","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":520721,"date":"Mon 10 Jan 2022 08:55","username":"chatvinoth","content":"I go for A, as session manager also allows port forwarding - Refer below blog<br>https://aws.amazon.com/blogs/aws/new-port-forwarding-using-aws-system-manager-sessions-manager/","upvote_count":"1","selected_answers":""},{"id":497201,"date":"Wed 08 Dec 2021 23:02","username":"AzureDP900","content":"A right answer","upvote_count":"1","selected_answers":""},{"id":448589,"date":"Thu 04 Nov 2021 13:49","username":"andylogan","content":"It's A","upvote_count":"1","selected_answers":""},{"id":434825,"date":"Sun 24 Oct 2021 13:52","username":"tgv","content":"AAA<br>---<br>Good job @ExtHo on sharing:<br>Retain a log of commands run during an SSH session. https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html<br>Retain the ability to forward ports. https://aws.amazon.com/blogs/aws/new-port-forwarding-using-aws-system-manager-sessions-manager/","upvote_count":"1","selected_answers":""},{"id":434457,"date":"Sun 24 Oct 2021 04:47","username":"blackgamer","content":"A is the answer.","upvote_count":"1","selected_answers":""},{"id":434015,"date":"Thu 21 Oct 2021 04:12","username":"sergioandreslqsergioandreslq","content":"A: Incorrect: It is the most secure, However, it does not comply with requirement to: \\\"Retain the ability to forward ports.\\\"<br>B: Correct: It is the easy way just allowing SSH from offices, the SysAdmins will continue connecting in the same way they are doing today and Retain the ability to forward ports.<br>C: Incorrect, It will work but the issue is the amount of work of the deployment for VPN.changed From B to A.  At the end, session manager is the most secure. I like the B because it is faster and easier, but exist the risk of brute force even from the on-premise network. So, the most secure is option A. ","upvote_count":"12","selected_answers":""},{"id":436769,"date":"Mon 25 Oct 2021 00:15","username":"sergioandreslq","content":"changed From B to A.  At the end, session manager is the most secure. I like the B because it is faster and easier, but exist the risk of brute force even from the on-premise network. So, the most secure is option A. ","upvote_count":"2","selected_answers":""},{"id":432751,"date":"Tue 19 Oct 2021 21:15","username":"Suresh108","content":"AAAAAAA","upvote_count":"1","selected_answers":""},{"id":416087,"date":"Tue 19 Oct 2021 00:50","username":"Kopa","content":"Its A, <br><br>Session Manager provides secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. Session Manager also allows you to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end users with simple one-click cross-platform access to your managed instances.","upvote_count":"2","selected_answers":""},{"id":414206,"date":"Thu 14 Oct 2021 04:58","username":"WhyIronMan","content":"I'll go with A","upvote_count":"2","selected_answers":""},{"id":403581,"date":"Tue 12 Oct 2021 22:18","username":"qurren","content":"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html<br><br>It says: \\\"Logging isn't available for Session Manager sessions that connect through port forwarding or SSH. This is because SSH encrypts all session data, and Session Manager only serves as a tunnel for SSH connections.\\\" So A is not correct...<br><br>I will choose B. ","upvote_count":"2","selected_answers":""},{"id":385779,"date":"Mon 11 Oct 2021 17:27","username":"hk436","content":"A is my answer!!<br>Session Manager logs the commands you enter and their output during a session depending on your session preferences. To prevent sensitive data, such as passwords, from being viewed in your session logs we recommend using the following commands when entering sensitive data during a session.<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html","upvote_count":"2","selected_answers":""},{"id":371071,"date":"Mon 11 Oct 2021 15:35","username":"Karthic","content":"It should be A<br>ref: https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#743",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that provisions job boards for a seasonal workforce is seeing an increase in traffic and usage. The backend services run on a pair of Amazon EC2 instances behind an Application Load Balancer with Amazon DynamoDB as the datastore. Application read and write traffic is slow during peak seasons.<br>Which option provides a scalable application architecture to handle peak seasons with the LEAST development effort?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#743",
            "answers": [
        
        {
            "choice": "<p>A. Migrate the backend services to AWS Lambda. Increase the read and write capacity of DynamoDB<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Migrate the backend services to AWS Lambda. Configure DynamoDB to use global tables<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use Auto Scaling groups for the backend services. Use DynamoDB auto scaling<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use Auto Scaling groups for the backend services. Use Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function to write to DynamoDB<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":352484,"date":"Fri 01 Oct 2021 01:20","username":"kpcert","content":"Agree , C[ Key : LEAST development work]","upvote_count":"8","selected_answers":""},{"id":497202,"date":"Wed 08 Dec 2021 23:06","username":"AzureDP900","content":"C works perfectly fine. There is no need of SQS as mentioned in option D","upvote_count":"1","selected_answers":""},{"id":491294,"date":"Wed 01 Dec 2021 06:30","username":"acloudguru","content":"simple one, hope i can have it in my exam C","upvote_count":"1","selected_answers":""},{"id":448590,"date":"Wed 03 Nov 2021 17:01","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":434826,"date":"Mon 01 Nov 2021 02:21","username":"tgv","content":"CCC<br>---<br>LEAST development work","upvote_count":"3","selected_answers":""},{"id":414207,"date":"Sat 23 Oct 2021 14:12","username":"WhyIronMan","content":"I'll go with C","upvote_count":"4","selected_answers":""},{"id":385780,"date":"Fri 22 Oct 2021 14:27","username":"hk436","content":"C is my answer!!","upvote_count":"1","selected_answers":""},{"id":368501,"date":"Sat 09 Oct 2021 13:52","username":"mustpassla","content":"C for sure","upvote_count":"1","selected_answers":""},{"id":364852,"date":"Sat 02 Oct 2021 01:11","username":"vkbajoria","content":"least amount of work. Answer is C","upvote_count":"2","selected_answers":""},{"id":360367,"date":"Fri 01 Oct 2021 19:41","username":"Waiweng","content":"it's C","upvote_count":"4","selected_answers":""},{"id":346208,"date":"Sun 26 Sep 2021 20:41","username":"gsw","content":"i agree C","upvote_count":"2","selected_answers":""},{"id":346207,"date":"Sat 25 Sep 2021 13:01","username":"Jaypdv","content":"C.  works","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#744",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that sells tickets online and experiences bursts of demand every 7 days. The application has a stateless presentation layer running on Amazon EC2, an Oracle database to store unstructured data catalog information, and a backend API layer. The front-end layer uses an Elastic Load Balancer to distribute the load across nine On-Demand instances over three Availability Zones (AZs). The Oracle database is running on a single EC2 instance. The company is experiencing performance issues when running more than two concurrent campaigns. A solutions architect must design a solution that meets the following requirements:<br>✑ Address scalability issues.<br>✑ Increase the level of concurrency.<br>✑ Eliminate licensing costs.<br>✑ Improve reliability.<br>Which set of steps should the solutions architect take?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#744",
            "answers": [
        
        {
            "choice": "<p>A. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the Oracle database into a single Amazon RDS reserved DB instance.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Create two additional copies of the database instance, then distribute the databases in separate AZs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the tables in the Oracle database into Amazon DynamoDB tables.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Convert the On-Demand Instances into Spot instances to reduce costs for the front end. Convert the tables in the Oracle database into Amazon DynamoDB tables.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":347318,"date":"Sun 03 Oct 2021 08:50","username":"ExtHohilft","content":"C<br>Combination of On-Demand and Spot Instances + DynamoDB. <br>DShould be eliminated due to only use of Spot Instance as any time can be taken back by AWSCCC.  GJ","upvote_count":"231","selected_answers":""},{"id":636259,"date":"Mon 25 Jul 2022 00:14","username":"hilft","content":"CCC.  GJ","upvote_count":"1","selected_answers":""},{"id":537901,"date":"Tue 01 Feb 2022 15:02","username":"HellGate","content":"Answer is C!!!","upvote_count":"2","selected_answers":""},{"id":522012,"date":"Wed 12 Jan 2022 10:05","username":"pititcu667","content":"c because eliminate licensing costs and scalability.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497203,"date":"Wed 08 Dec 2021 23:08","username":"AzureDP900","content":"C is right answer for scalability and reduce license cost","upvote_count":"1","selected_answers":""},{"id":448591,"date":"Thu 28 Oct 2021 22:25","username":"andylogan","content":"It's C","upvote_count":"2","selected_answers":""},{"id":434828,"date":"Tue 26 Oct 2021 01:51","username":"tgv","content":"CCC<br>---<br>A: single RDS doesn't improve reliability<br>B: two additional copies of the Oracle database doesn't eliminate licensing costs <br>D: doesn't address the scalability issues","upvote_count":"3","selected_answers":""},{"id":434466,"date":"Fri 22 Oct 2021 19:53","username":"blackgamer","content":"C is the answer.","upvote_count":"1","selected_answers":""},{"id":416131,"date":"Thu 21 Oct 2021 19:27","username":"Kopa","content":"Im going for C","upvote_count":"1","selected_answers":""},{"id":414210,"date":"Thu 21 Oct 2021 09:00","username":"WhyIronMan","content":"I'll go with C","upvote_count":"4","selected_answers":""},{"id":368507,"date":"Wed 20 Oct 2021 05:19","username":"mustpassla","content":"C for sure","upvote_count":"1","selected_answers":""},{"id":364853,"date":"Tue 19 Oct 2021 12:02","username":"vkbajoria","content":"my vote goes to C","upvote_count":"1","selected_answers":""},{"id":360371,"date":"Tue 19 Oct 2021 05:40","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":352304,"date":"Fri 15 Oct 2021 04:24","username":"beebatov","content":"Answer: C<br><br>Hints: Unstructured data store + Eliminate licenses cost","upvote_count":"4","selected_answers":""},{"id":346531,"date":"Wed 29 Sep 2021 08:31","username":"JaypdvJaypdv","content":"Voting for D.  Option A.  does not eliminate licensing cost. At best it's included in the RDS instance price. And the question mentions \\\"unstructured data\\\" which fits DynamoDB well.Typo. I mean C. ","upvote_count":"23","selected_answers":""},{"id":347716,"date":"Mon 04 Oct 2021 09:20","username":"Jaypdv","content":"Typo. I mean C. ","upvote_count":"3","selected_answers":""},{"id":346214,"date":"Mon 20 Sep 2021 20:08","username":"gswDashLgswhdomingogswjduo","content":"doesn't make sense - structured data would normally be Dynamo DBIt is required to address \\\"Scalability issue\\\", which can be addressed only by AutoScaling. That means the options are A, B or C.  No \\\"Licensing cost - That is addressed by only option C. <br>The other two requirements are: \\\"Increase the level of concurrency \\\"and \\\"Improve reliability\\\" - Options C meets those.has to be C or DSpot instances (option D) is not valid response, because dont meet de requirements of\\\"Address scalability issues\\\". Correct option is Ci think COracle database to store unstructured data catalog information","upvote_count":"121121","selected_answers":""},{"id":400309,"date":"Wed 20 Oct 2021 11:17","username":"DashL","content":"It is required to address \\\"Scalability issue\\\", which can be addressed only by AutoScaling. That means the options are A, B or C.  No \\\"Licensing cost - That is addressed by only option C. <br>The other two requirements are: \\\"Increase the level of concurrency \\\"and \\\"Improve reliability\\\" - Options C meets those.","upvote_count":"2","selected_answers":""},{"id":346215,"date":"Fri 24 Sep 2021 02:39","username":"gswhdomingogsw","content":"has to be C or DSpot instances (option D) is not valid response, because dont meet de requirements of\\\"Address scalability issues\\\". Correct option is Ci think C","upvote_count":"112","selected_answers":""},{"id":378330,"date":"Wed 20 Oct 2021 05:29","username":"hdomingo","content":"Spot instances (option D) is not valid response, because dont meet de requirements of\\\"Address scalability issues\\\". Correct option is C","upvote_count":"1","selected_answers":""},{"id":346217,"date":"Sat 25 Sep 2021 07:40","username":"gsw","content":"i think C","upvote_count":"2","selected_answers":""},{"id":351842,"date":"Thu 07 Oct 2021 20:41","username":"jduo","content":"Oracle database to store unstructured data catalog information","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#745",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to refactor its retail ordering web application that currently has a load-balanced Amazon EC2 instance fleet for web hosting, database API services, and business logic. The company needs to create a decoupled, scalable architecture with a mechanism for retaining failed orders while also minimizing operational costs.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#745",
            "answers": [
        
        {
            "choice": "<p>A. Use Amazon S3 for web hosting with Amazon API Gateway for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use Amazon Elastic Container Service (Amazon ECS) for business logic with Amazon SQS long polling for retaining failed orders.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use AWS Elastic Beanstalk for web hosting with Amazon API Gateway for database API services. Use Amazon MQ for order queuing. Use AWS Step Functions for business logic with Amazon S3 Glacier Deep Archive for retaining failed orders.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use Amazon S3 for web hosting with AWS AppSync for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use AWS Lambda for business logic with an Amazon SQS dead-letter queue for retaining failed orders.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use Amazon Lightsail for web hosting with AWS AppSync for database API services. Use Amazon Simple Email Service (Amazon SES) for order queuing. Use Amazon Elastic Kubernetes Service (Amazon EKS) for business logic with Amazon Elasticsearch Service (Amazon ES) for retaining failed orders.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":347688,"date":"Tue 28 Sep 2021 03:08","username":"testtaker3434","content":"It should be C.  You dont use long pooling\\\" for retaining failed orders while also minimizing operational costs.\\\". You use DLQ.","upvote_count":"15","selected_answers":""},{"id":352316,"date":"Wed 06 Oct 2021 21:03","username":"beebatov","content":"Answer C:<br><br>Hints: Refactoring app to use GraphQL APIs (AppSync) + Serverless + DLQ for failed orders","upvote_count":"10","selected_answers":""},{"id":544859,"date":"Thu 10 Feb 2022 21:35","username":"AMKazi","content":"C: solves all problems","upvote_count":"1","selected_answers":""},{"id":514430,"date":"Sat 01 Jan 2022 09:26","username":"cldy","content":"C: DLQ","upvote_count":"1","selected_answers":""},{"id":499065,"date":"Sat 11 Dec 2021 04:17","username":"challenger1","content":"My Answer: C<br>Use a Dead Letter Queue, not long polling","upvote_count":"1","selected_answers":""},{"id":497241,"date":"Thu 09 Dec 2021 00:43","username":"tkanmani76AMKazi","content":"Everyone is in favour of C - however the application mentioned is not a static one -retail ordering online application - so how can S3 host it ? So it cannot be Option C.  The next decoupled scalable architecture is with Step Functions - Option B is correct in that case.You are only hosting website on S3, for all server side processing you have lambda","upvote_count":"12","selected_answers":""},{"id":544862,"date":"Thu 10 Feb 2022 21:38","username":"AMKazi","content":"You are only hosting website on S3, for all server side processing you have lambda","upvote_count":"2","selected_answers":""},{"id":497207,"date":"Wed 08 Dec 2021 23:12","username":"AzureDP900","content":"It is C, SQS is required.","upvote_count":"1","selected_answers":""},{"id":448593,"date":"Sun 07 Nov 2021 00:00","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":434831,"date":"Sat 30 Oct 2021 06:22","username":"tgvtgv","content":"CCC<br>---<br>A: you don't retain failed orders with SQS long polling<br>B: Amazon S3 Glacier Deep Archive for retaining failed orders doesn't sound good<br>C: You cannot use Amazon Simple Email Service (Amazon SES) for order queuingD: You cannot use Amazon Simple Email Service (Amazon SES) for order queuing*","upvote_count":"41","selected_answers":""},{"id":436996,"date":"Tue 02 Nov 2021 09:53","username":"tgv","content":"D: You cannot use Amazon Simple Email Service (Amazon SES) for order queuing*","upvote_count":"1","selected_answers":""},{"id":432767,"date":"Wed 27 Oct 2021 19:47","username":"Suresh108","content":"CCCCC<br><br>Method of Elimination -- look for failed order options in all the answers","upvote_count":"2","selected_answers":""},{"id":414213,"date":"Wed 27 Oct 2021 10:26","username":"WhyIronMan","content":"I'll go with C<br><br>Unfortunately is a Trick question...While AppSync is no better than API GW in this context, DLQ is better choice than SQS long polling for retaining failed orders<br><br>Damn aws...","upvote_count":"6","selected_answers":""},{"id":410051,"date":"Mon 25 Oct 2021 11:02","username":"santhoshmp","content":"I think its C itself","upvote_count":"1","selected_answers":""},{"id":410050,"date":"Thu 21 Oct 2021 13:05","username":"santhoshmp","content":"can S3 be used to host a retail web application. ? answer should be B or D ?","upvote_count":"2","selected_answers":""},{"id":399991,"date":"Tue 19 Oct 2021 23:23","username":"vimgoru24","content":"C<br><br>While AppSync is no better than API GW in this context, the latter part of the answer does mention DLQ which is a “must have”","upvote_count":"2","selected_answers":""},{"id":385781,"date":"Sat 09 Oct 2021 19:22","username":"hk436","content":"C is my answer!!","upvote_count":"1","selected_answers":""},{"id":364856,"date":"Sat 09 Oct 2021 09:14","username":"vkbajoria","content":"It is C","upvote_count":"1","selected_answers":""},{"id":360375,"date":"Thu 07 Oct 2021 00:01","username":"Waiweng","content":"it's C","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#746",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company is building a system to generate monthly, immutable bank account statements for its users. Statements are stored in Amazon S3. Users should have immediate access to their monthly statements for up to 2 years. Some users access their statements frequently, whereas others rarely access their statements. The company's security and compliance policy requires that the statements be retained for at least 7 years.<br>What is the MOST cost-effective solution to meet the company's needs?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#746",
            "answers": [
        
        {
            "choice": "<p>A. Create an S3 bucket with Object Lock disabled. Store statements in S3 Standard. Define an S3 Lifecycle policy to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days. Define another S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an S3 bucket with versioning enabled. Store statements in S3 Intelligent-Tiering. Use same-Region replication to replicate objects to a backup S3 bucket. Define an S3 Lifecycle policy for the backup S3 bucket to move the data to S3 Glacier. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an S3 bucket with Object Lock enabled. Store statements in S3 Intelligent-Tiering. Enable compliance mode with a default retention period of 2 years. Define an S3 Lifecycle policy to move the data to S3 Glacier after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an S3 bucket with versioning disabled. Store statements in S3 One Zone-Infrequent Access (S3 One Zone-IA). Define an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346534,"date":"Mon 11 Oct 2021 13:04","username":"Jaypdv","content":"C.  <br>Object lock and compliance mode: https://aws.amazon.com/about-aws/whats-new/2018/11/s3-object-lock/. The rest makes the most sense","upvote_count":"16","selected_answers":""},{"id":569570,"date":"Thu 17 Mar 2022 09:44","username":"KennethTam","content":"C is correct","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497209,"date":"Wed 08 Dec 2021 23:15","username":"AzureDP900","content":"C is right answer","upvote_count":"2","selected_answers":""},{"id":496608,"date":"Wed 08 Dec 2021 08:34","username":"cldy","content":"C.  Create an S3 bucket with Object Lock enabled. Store statements in S3 Intelligent-Tiering. Enable compliance mode with a default retention period of 2 years. Define an S3 Lifecycle policy to move the data to S3 Glacier after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.","upvote_count":"1","selected_answers":""},{"id":483828,"date":"Mon 22 Nov 2021 03:41","username":"acloudguru","content":"C https://aws.amazon.com/about-aws/whats-new/2018/11/s3-object-lock/. The rest makes the most sense","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":448659,"date":"Fri 05 Nov 2021 12:18","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":435975,"date":"Fri 05 Nov 2021 11:33","username":"Liongeek","content":"CCC because of Object lock","upvote_count":"2","selected_answers":""},{"id":434832,"date":"Wed 03 Nov 2021 14:31","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":434505,"date":"Sun 31 Oct 2021 17:09","username":"blackgamer","content":"It is C","upvote_count":"1","selected_answers":""},{"id":432768,"date":"Sun 31 Oct 2021 10:56","username":"Suresh108","content":"CCCCC -- 'object lock enabled'","upvote_count":"1","selected_answers":""},{"id":414216,"date":"Wed 27 Oct 2021 16:10","username":"WhyIronMan","content":"I'll go with C, you convinced me","upvote_count":"2","selected_answers":""},{"id":399992,"date":"Sun 24 Oct 2021 22:14","username":"vimgoru24","content":"C is far superior than any other answer","upvote_count":"1","selected_answers":""},{"id":385785,"date":"Wed 20 Oct 2021 02:26","username":"hk436","content":"C is my answer!!","upvote_count":"1","selected_answers":""},{"id":364871,"date":"Sun 17 Oct 2021 21:27","username":"vkbajoria","content":"C. <br>if you don't know Object lock and compliance mode, you will surely get it wrong like I did.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html","upvote_count":"3","selected_answers":""},{"id":360381,"date":"Sat 16 Oct 2021 01:54","username":"Waiweng","content":"it's C","upvote_count":"3","selected_answers":""},{"id":352318,"date":"Thu 14 Oct 2021 06:38","username":"beebatov","content":"Answer: C<br><br>S3 Object Lock protection is maintained regardless of which storage class the object resides in and throughout S3 Lifecycle transitions between storage classes.","upvote_count":"2","selected_answers":""},{"id":346225,"date":"Fri 08 Oct 2021 11:01","username":"gsw","content":"has to be C the others are silly","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#747",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a large on-premises MySQL database at its main office that supports an issue tracking system used by employees around the world. The company already uses AWS for some workloads and has created an Amazon Route 53 entry for the database endpoint that points to the on-premises database.<br>Management is concerned about the database being a single point of failure and wants a solutions architect to migrate the database to AWS without any data loss or downtime.<br>Which set of actions should the solutions architect implement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#747",
            "answers": [
        
        {
            "choice": "<p>A. Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load from the on-premises database to Aurora. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. During nonbusiness hours, shut down the on-premises database and create a backup. Restore this backup to an Amazon Aurora DB cluster. When the restoration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load with continuous replication from the on-premises database to Aurora. When the migration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a backup of the database and restore it to an Amazon Aurora multi-master cluster. This Aurora cluster will be in a master-master replication configuration with the on-premises database. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346535,"date":"Mon 20 Sep 2021 03:44","username":"Jaypdv","content":"C. <br>Got the feeling some of those questions come from the DB Specialist cert.","upvote_count":"13","selected_answers":""},{"id":637012,"date":"Tue 26 Jul 2022 02:19","username":"hilft","content":"A or C?<br>Seems it's C","upvote_count":"1","selected_answers":""},{"id":596170,"date":"Mon 02 May 2022 20:07","username":"tartarus23","content":"C.  does not have a downtime or data loss since live replication happens so on-premise DB is still operational until the new AWS Aurora DB is completely migrated.","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":582469,"date":"Thu 07 Apr 2022 15:33","username":"tartarus23","content":"continuous replication from on-premises to Aurora is a feasible solution.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":561458,"date":"Sat 05 Mar 2022 15:00","username":"Ni_yot","content":"Yah its C.  Continuous replication is thekey here. No downtime or data loss. Just do a cutover to finalize the migration when complete.","upvote_count":"1","selected_answers":""},{"id":497210,"date":"Wed 08 Dec 2021 23:20","username":"AzureDP900","content":"I will go with C, there is no dataloss with this option","upvote_count":"1","selected_answers":""},{"id":448663,"date":"Wed 03 Nov 2021 09:51","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":434834,"date":"Sun 31 Oct 2021 01:00","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":414217,"date":"Fri 29 Oct 2021 13:42","username":"WhyIronMan","content":"I'll go with C","upvote_count":"4","selected_answers":""},{"id":399997,"date":"Tue 26 Oct 2021 20:24","username":"vimgoru24","content":"C<br><br>“Around the world” eliminates possibility for the maintenance window at night. The other difference is ability to leverage continuous replication in MySQL to Aurora case.","upvote_count":"3","selected_answers":""},{"id":385786,"date":"Sun 24 Oct 2021 09:33","username":"hk436","content":"C is my answer!!","upvote_count":"1","selected_answers":""},{"id":364873,"date":"Tue 12 Oct 2021 14:06","username":"vkbajoria","content":"Always choose full load with continuous replication. <br>C","upvote_count":"2","selected_answers":""},{"id":360387,"date":"Sat 02 Oct 2021 03:33","username":"Waiweng","content":"it's C","upvote_count":"2","selected_answers":""},{"id":353589,"date":"Sat 25 Sep 2021 18:52","username":"LCC92","content":"go with C","upvote_count":"1","selected_answers":""},{"id":352308,"date":"Fri 24 Sep 2021 15:28","username":"beebatov","content":"Answer: C<br><br>AWS DMS + CDC to capture daily changes","upvote_count":"2","selected_answers":""},{"id":348765,"date":"Thu 23 Sep 2021 08:28","username":"gsw","content":"i agree with C","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#748",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a policy that all Amazon EC2 instances that are running a database must exist within the same subnets in a shared VPC.  Administrators must follow security compliance requirements and are not allowed to directly log in to the shared account. All company accounts are members of the same organization in AWS Organizations. The number of accounts will rapidly increase as the company grows.<br>A solutions architect uses AWS Resource Access Manager to create a resource share in the shared account.<br>What is the MOST operationally efficient configuration to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#748",
            "answers": [
        
        {
            "choice": "<p>A. Add the VPC to the resource share. Add the account IDs as principals<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Add all subnets within the VPC to the resource share. Add the account IDs as principals<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Add all subnets within the VPC to the resource share. Add the organization as a principal<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Add the VPC to the resource share. Add the organization as a principal<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346536,"date":"Sat 09 Oct 2021 12:31","username":"Jaypdv","content":"C. <br>Adding the organization as a principal ensure that current and future accounts will have access to the share. The question mentions that there will be many new accounts, that's the clue","upvote_count":"21","selected_answers":""},{"id":714949,"date":"Thu 10 Nov 2022 06:51","username":"janvandermerwer","content":"C appears to be the most operationally efficient.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":603183,"date":"Wed 18 May 2022 08:48","username":"bobsmith2000caveman712","content":"We have to add organization as principle due to \\\"swift increase in account num\\\".: So it's C or D. <br>There's no reason to share a VPC, so it's C. You can't share VPC anyways in RAM..only subnets","upvote_count":"31","selected_answers":"Selected Answer: C"},{"id":689687,"date":"Sat 08 Oct 2022 23:29","username":"caveman712","content":"You can't share VPC anyways in RAM..only subnets","upvote_count":"1","selected_answers":""},{"id":497374,"date":"Thu 09 Dec 2021 07:07","username":"cldy","content":"C.  Add all subnets within the VPC to the resource share. Add the organization as a principal","upvote_count":"1","selected_answers":""},{"id":497211,"date":"Wed 08 Dec 2021 23:25","username":"AzureDP900","content":"I will go with C as mentioned @https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-createTo restrict resource sharing to only principals in your organization, choose Allow sharing with principals in your organization only.","upvote_count":"1","selected_answers":""},{"id":482981,"date":"Sun 21 Nov 2021 03:11","username":"pcopsacloudguruwassb","content":"How to get access to questions from 390 onwards. I can only see questions upto 389. Please suggestuse incognito mode directly with the urland a Cloudfront distribution with OAI configured","upvote_count":"241","selected_answers":""},{"id":484672,"date":"Tue 23 Nov 2021 02:04","username":"acloudguruwassb","content":"use incognito mode directly with the urland a Cloudfront distribution with OAI configured","upvote_count":"41","selected_answers":""},{"id":695378,"date":"Sat 15 Oct 2022 14:19","username":"wassb","content":"and a Cloudfront distribution with OAI configured","upvote_count":"1","selected_answers":""},{"id":448665,"date":"Thu 04 Nov 2021 22:25","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":434837,"date":"Wed 03 Nov 2021 03:34","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":414218,"date":"Tue 02 Nov 2021 18:17","username":"WhyIronMan","content":"I'll go with C","upvote_count":"1","selected_answers":""},{"id":398542,"date":"Thu 28 Oct 2021 23:00","username":"AkbaralisergioandreslqChibuzo1pradhyumna","content":"New Solutions Architect Pro question. <br><br>A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email, Data is stored in a MySQL database running on an Amazon EC2 instance. The database is running with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC.  <br><br>The website has suffered several outages during the last month due to high traffic. <br><br>Which actions should a solutions architect take to increase the reliability of the application? (select three)<br><br>A – Place the Tomcat server in an Autoscaling group with multiple EC2 instances behind an Application Load Balancer<br><br>B – Provision an additional VPC peering connection <br><br>C – Migrate the MySQL database to Amazon Aurora with one Aurora Replica <br><br>D – Provision two NAT gateways in the database VPC <br><br>E – Move the tomcat server to the database VPC<br><br>F – Create an additional public subnet in a different Availability Zone in the website VPCThis questing is the 760, Answer is ACF. Answer is A C Flooks like ACE","upvote_count":"3132","selected_answers":""},{"id":434051,"date":"Tue 02 Nov 2021 18:33","username":"sergioandreslq","content":"This questing is the 760, Answer is ACF. ","upvote_count":"1","selected_answers":""},{"id":405479,"date":"Sat 30 Oct 2021 08:20","username":"Chibuzo1","content":"Answer is A C F","upvote_count":"3","selected_answers":""},{"id":401607,"date":"Fri 29 Oct 2021 10:49","username":"pradhyumna","content":"looks like ACE","upvote_count":"2","selected_answers":""},{"id":384605,"date":"Tue 26 Oct 2021 08:20","username":"Waiweng","content":"it's C<br>https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-create","upvote_count":"2","selected_answers":""},{"id":384369,"date":"Wed 20 Oct 2021 01:13","username":"Chibuzo1","content":"To specify a principal from the list, for each principal, select the principal type, enter the ID or ARN, <br>AWS account: To add an AWS account, enter the 12-digit account ID.  For example:<br>123456789012<br>Organization: To add your entire organization, enter the ID of the organization. For example:<br>o-abcd1234efgh5678<br>The right answer is B.  To add organization, you add the ID, and to add an Account you add the ID. ","upvote_count":"2","selected_answers":""},{"id":352322,"date":"Sat 16 Oct 2021 08:24","username":"beebatov","content":"Answer: C<br><br>You share the resources of the VPC which are Subnets in this case + add Organization as the principal as the number of accounts will grow in future.<br><br>https://docs.aws.amazon.com/ram/latest/userguide/ram-ug.pdf","upvote_count":"4","selected_answers":""},{"id":346229,"date":"Mon 27 Sep 2021 06:21","username":"gswJaypdv","content":"i think B is correct see the linkC.  Is better, you can add the entire organization as principal. This covers all existing and future accounts as per the question. See https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-create","upvote_count":"17","selected_answers":""},{"id":347722,"date":"Tue 12 Oct 2021 08:43","username":"Jaypdv","content":"C.  Is better, you can add the entire organization as principal. This covers all existing and future accounts as per the question. See https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-create","upvote_count":"7","selected_answers":""}]
    }
    ,
    {
        "question_id": "#749",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is evaluating the reliability of a recently migrated application running on AWS. The front end is hosted on Amazon S3 and accelerated by<br>Amazon CloudFront. The application layer is running in a stateless Docker container on an Amazon EC2 On-Demand Instance with an Elastic IP address. The storage layer is a MongoDB database running on an EC2 Reserved Instance in the same Availability Zone as the application layer.<br>Which combination of steps should the solutions architect take to eliminate single points of failure with minimal application code changes? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#749",
            "answers": [
        
        {
            "choice": "<p>A. Create a REST API in Amazon API Gateway and use AWS Lambda functions as the application layer<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Application Load Balancer and migrate the Docker container to AWS Fargate<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Migrate the storage layer to Amazon DynamoDB<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Migrate the storage layer to Amazon DocumentDB (with MongoDB compatibility)<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>E. Create an Application Load Balancer and move the storage layer to an EC2 Auto Scaling group<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":346537,"date":"Tue 21 Sep 2021 04:17","username":"Jaypdv","content":"BD. <br>Seems natural to me","upvote_count":"17","selected_answers":""},{"id":414220,"date":"Fri 15 Oct 2021 12:44","username":"WhyIronMan","content":"I'll go with B,D<br><br>https://aws.amazon.com/documentdb/?nc1=h_ls<br><br>https://aws.amazon.com/blogs/containers/using-alb-ingress-controller-with-amazon-eks-on-fargate/","upvote_count":"7","selected_answers":""},{"id":528554,"date":"Thu 20 Jan 2022 16:40","username":"kubala","content":"BD for sure","upvote_count":"2","selected_answers":"Selected Answer: BD"},{"id":497213,"date":"Wed 08 Dec 2021 23:31","username":"AzureDP900","content":"B,D is my choice. MongoDB is compatible with DocumentDB and Containers can be hosted on Fargate","upvote_count":"2","selected_answers":""},{"id":448668,"date":"Sun 31 Oct 2021 21:09","username":"andylogan","content":"It's B D","upvote_count":"1","selected_answers":""},{"id":440181,"date":"Tue 26 Oct 2021 21:04","username":"student22","content":"B,D<br>Minimum code changes","upvote_count":"1","selected_answers":""},{"id":434838,"date":"Sat 23 Oct 2021 10:28","username":"tgv","content":"BBB DDD<br>----","upvote_count":"1","selected_answers":""},{"id":434524,"date":"Sat 23 Oct 2021 10:23","username":"blackgamer","content":"B and D","upvote_count":"2","selected_answers":""},{"id":400003,"date":"Wed 13 Oct 2021 20:48","username":"vimgoru24","content":"It’s BD","upvote_count":"1","selected_answers":""},{"id":390737,"date":"Tue 05 Oct 2021 18:51","username":"nik_awsvimgoru24","content":"Given that Lambda now supports containers and it specifically says the containers are stateless, option A also seems good.On paper - yes. But if you’d really try to convert a regular web app to a lambda compatible image - you’d see that this option still far away from “little code changes” :)","upvote_count":"11","selected_answers":""},{"id":400002,"date":"Thu 07 Oct 2021 00:44","username":"vimgoru24","content":"On paper - yes. But if you’d really try to convert a regular web app to a lambda compatible image - you’d see that this option still far away from “little code changes” :)","upvote_count":"1","selected_answers":""},{"id":385788,"date":"Sun 03 Oct 2021 19:04","username":"hk436","content":"BD is my answer!!","upvote_count":"1","selected_answers":""},{"id":384910,"date":"Fri 01 Oct 2021 04:55","username":"glahitette","content":"BD for me too","upvote_count":"1","selected_answers":""},{"id":368527,"date":"Fri 01 Oct 2021 00:31","username":"mustpassla","content":"BD for sure","upvote_count":"1","selected_answers":""},{"id":360399,"date":"Sat 25 Sep 2021 17:09","username":"Waiweng","content":"it's B,D","upvote_count":"4","selected_answers":""},{"id":352323,"date":"Thu 23 Sep 2021 07:28","username":"beebatov","content":"Answer: BD","upvote_count":"2","selected_answers":""},{"id":346234,"date":"Mon 20 Sep 2021 01:58","username":"gsw","content":"if they meant lambda layers then its poorly expressed","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#750",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company operates an on-premises software-as-a-service (SaaS) solution that ingests several files daily. The company provides multiple public SFTP endpoints to its customers to facilitate the file transfers. The customers add the SFTP endpoint IP addresses to their firewall allow list for outbound traffic. Changes to the<br>SFTP endpoint IP addresses are not permitted.<br>The company wants to migrate the SaaS solution to AWS and decrease the operational overhead of the file transfer service.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#750",
            "answers": [
        
        {
            "choice": "<p>A. Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Add a subnet containing the customer-owned block of IP addresses to a VPC.  Create Elastic IP addresses from the address pool and assign them to an Application Load Balancer (ALB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the ALB.  Store the files in attached Amazon Elastic Block Store (Amazon EBS) volumes.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Register the customer-owned block of IP addresses with Amazon Route 53. Create alias records in Route 53 that point to a Network Load Balancer (NLB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the NLB.  Store the files in Amazon S3.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an Amazon S3 VPC endpoint. Enable SFTP support on the S3 bucket.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":350976,"date":"Mon 27 Sep 2021 09:20","username":"miniso8153sergioandreslq","content":"I vote for A<br>https://aws.amazon.com/premiumsupport/knowledge-center/sftp-enable-elastic-ip-addresses/A:<br>Bring your own IP addresses (BYOIP)<br>You can bring part or all of your publicly routable IPv4 or IPv6 address range from your on-premises network to your AWS account. You continue to own the address range, but AWS advertises it on the internet by default. After you bring the address range to AWS, it appears in your AWS account as an address pool.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html<br><br>AWS Transfer for SFTP enables you to easily move your file transfer workloads that use the Secure Shell File Transfer Protocol (SFTP) to AWS without needing to modify your applications or manage any SFTP servers.<br>https://aws.amazon.com/about-aws/whats-new/2018/11/aws-transfer-for-sftp-fully-managed-sftp-for-s3/","upvote_count":"215","selected_answers":""},{"id":433880,"date":"Tue 02 Nov 2021 21:41","username":"sergioandreslq","content":"A:<br>Bring your own IP addresses (BYOIP)<br>You can bring part or all of your publicly routable IPv4 or IPv6 address range from your on-premises network to your AWS account. You continue to own the address range, but AWS advertises it on the internet by default. After you bring the address range to AWS, it appears in your AWS account as an address pool.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html<br><br>AWS Transfer for SFTP enables you to easily move your file transfer workloads that use the Secure Shell File Transfer Protocol (SFTP) to AWS without needing to modify your applications or manage any SFTP servers.<br>https://aws.amazon.com/about-aws/whats-new/2018/11/aws-transfer-for-sftp-fully-managed-sftp-for-s3/","upvote_count":"5","selected_answers":""},{"id":497214,"date":"Wed 08 Dec 2021 23:37","username":"AzureDP900","content":"I will go with A after reading the AWS docs mentioned by miniso8153","upvote_count":"1","selected_answers":""},{"id":495975,"date":"Tue 07 Dec 2021 13:31","username":"cldy","content":"A.  Register the customer-owned block of IP addresses in the companyג€™s AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.","upvote_count":"1","selected_answers":""},{"id":448670,"date":"Thu 04 Nov 2021 12:13","username":"andylogan","content":"It's A with AWS Transfer for SFTP","upvote_count":"2","selected_answers":""},{"id":434842,"date":"Wed 03 Nov 2021 02:02","username":"tgv","content":"AAA<br>---<br>B: You cannot assign an Elastic IP to an Application Load Balancer<br>C: You cannot register the customer-owned block of IP addresses with Amazon Route 53<br>D: Not sure if you can assign an IP to S3 VPC endpoint","upvote_count":"1","selected_answers":""},{"id":416173,"date":"Mon 25 Oct 2021 13:34","username":"Kopastudent22","content":"A for sure.<br>The AWS Transfer Family provides fully managed support for file transfers directly into and out of Amazon S3 or Amazon EFS. With support for Secure File Transfer Protocol (SFTP), File Transfer Protocol over SSL (FTPS), and File Transfer Protocol (FTP), the AWS Transfer Family helps you seamlessly migrate your file transfer workflows to AWS by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3 or Amazon EFS, you can use it with AWS services for processing, analytics, machine learning, archiving, as well as home directories and developer tools.A<br>https://aws.amazon.com/aws-transfer-family/","upvote_count":"41","selected_answers":""},{"id":440188,"date":"Thu 04 Nov 2021 02:36","username":"student22","content":"A<br>https://aws.amazon.com/aws-transfer-family/","upvote_count":"1","selected_answers":""},{"id":414221,"date":"Sun 17 Oct 2021 17:14","username":"WhyIronMan","content":"I'll go for A","upvote_count":"1","selected_answers":""},{"id":400006,"date":"Sat 16 Oct 2021 19:16","username":"vimgoru24","content":"It’s A","upvote_count":"1","selected_answers":""},{"id":388870,"date":"Thu 14 Oct 2021 18:31","username":"mustpassla","content":"A for sure","upvote_count":"1","selected_answers":""},{"id":360402,"date":"Fri 01 Oct 2021 03:28","username":"Waiweng","content":"it's A","upvote_count":"3","selected_answers":""},{"id":352340,"date":"Thu 30 Sep 2021 11:27","username":"beebatov","content":"Answer: A<br><br>COIP is registered with an AWS Account (Not Route 53)<br><br>https://aws.amazon.com/about-aws/whats-new/2020/01/aws-transfer-for-sftp-supports-vpc-security-groups-and-elastic-ip-addresses/","upvote_count":"1","selected_answers":""},{"id":350455,"date":"Sun 26 Sep 2021 20:54","username":"ExtHo","content":"C no due to NLB A,D can be valid in first view but D can be ruled out due to Amazon S3 VPC endpoint as the main usage is access to S3 without internet (AWS resources in Private Subnets) that leaves A is only valid option what i think.","upvote_count":"3","selected_answers":""},{"id":348663,"date":"Thu 23 Sep 2021 13:24","username":"gswdigimaniac","content":"could be C?watch out for operational overhead cue in the question. host FTP will increase op. overhead","upvote_count":"11","selected_answers":""},{"id":362565,"date":"Thu 07 Oct 2021 12:37","username":"digimaniac","content":"watch out for operational overhead cue in the question. host FTP will increase op. overhead","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#751",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application consists of a single application server and a Microsoft SQL<br>Server database server. Each server is deployed on a VMware VM that consumes 500 TB of data across multiple attached volumes.<br>The company has established a 10 Gbps AWS Direct Connect connection from the closest AWS Region to its on-premises data center. The Direct Connect connection is not currently in use by other services.<br>Which combination of steps should a solutions architect take to migrate the application with the LEAST amount of downtime? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#751",
            "answers": [
        
        {
            "choice": "<p>A. Use an AWS Server Migration Service (AWS SMS) replication job to migrate the database server VM to AWS.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use VM Import/Export to import the application server VM.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Export the VM images to an AWS Snowball Edge Storage Optimized device.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use an AWS Server Migration Service (AWS SMS) replication job to migrate the application server VM to AWS.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>E. Use an AWS Database Migration Service (AWS DMS) replication instance to migrate the database to an Amazon RDS DB instance.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":431883,"date":"Sun 10 Oct 2021 02:19","username":"Jupi","content":"D & E<br><br>A Not correct, database need to be migrated to RDS, not to EC2<br>B - AWS Server Migration Service is a significant enhancement of EC2 VM Import. The AWS Server Migration Service provides automated, live incremental server replication and AWS Console support. For customers using EC2 VM Import for migration, we recommend using AWS Server Migration Service.<br>C- Lease amount of downtime will not work<br>D- is correct SMS for application server<br>E - Is correct. DMS for data base","upvote_count":"10","selected_answers":""},{"id":711790,"date":"Sat 05 Nov 2022 14:51","username":"resnef","content":"The question doest mention time of project, but only LEAST amount of downtime. Excluding Snowball, and instead SMS/DMS replication jobs , D/E","upvote_count":"1","selected_answers":""},{"id":711594,"date":"Sat 05 Nov 2022 08:07","username":"examaws","content":"A & D.  <br>this is for legacy apps, it may not compatble with RDS, plus RDS MS SQL has limited capacity up to 16TB. ","upvote_count":"1","selected_answers":""},{"id":691309,"date":"Mon 10 Oct 2022 17:34","username":"redipa","content":"The question says EACH server has 500TB of attached storage. <br><br>Maximum storage for RDS SQL Server is 16TB.  RDS cannot be part of the solution.","upvote_count":"2","selected_answers":""},{"id":623475,"date":"Mon 27 Jun 2022 21:46","username":"kangtamo","content":"Go with DE: SMS + DMS","upvote_count":"1","selected_answers":"Selected Answer: DE"},{"id":536241,"date":"Sun 30 Jan 2022 15:48","username":"timlow84","content":"Product Update: As of March 31, 2022, AWS will discontinue AWS Server Migration Service (AWS SMS). You can initiate new migration jobs using AWS SMS until January 1, 2022. Please complete your active migration projects using AWS SMS by March 31, 2022. Going forward, we recommend AWS Application Migration Service (AWS MGN) as the primary migration service for lift-and-shift migrations.","upvote_count":"3","selected_answers":""},{"id":497701,"date":"Thu 09 Dec 2021 13:13","username":"cldy","content":"D.  Use an AWS Server Migration Service (AWS SMS) replication job to migrate the application server VM to AWS.<br>E.  Use an AWS Database Migration Service (AWS DMS) replication instance to migrate the database to an Amazon RDS DB instance.","upvote_count":"1","selected_answers":""},{"id":497218,"date":"Wed 08 Dec 2021 23:40","username":"AzureDP900","content":"D, E sounds good to me","upvote_count":"1","selected_answers":""},{"id":448682,"date":"Sun 31 Oct 2021 22:20","username":"andylogan","content":"It's D E","upvote_count":"1","selected_answers":""},{"id":435407,"date":"Tue 26 Oct 2021 00:34","username":"tgv","content":"DDD EEE<br>---","upvote_count":"1","selected_answers":""},{"id":434562,"date":"Mon 11 Oct 2021 05:11","username":"blackgamer","content":"D@ and E","upvote_count":"1","selected_answers":""},{"id":429128,"date":"Wed 06 Oct 2021 12:49","username":"denccc","content":"D and E","upvote_count":"1","selected_answers":""},{"id":427503,"date":"Tue 28 Sep 2021 00:17","username":"fukuyama","content":"It's DE","upvote_count":"2","selected_answers":""},{"id":427488,"date":"Sat 25 Sep 2021 05:28","username":"pkboy78","content":"It is D and E","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#752",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is creating a REST API to share information with six of its partners based in the United States. The company has created an Amazon API Gateway<br>Regional endpoint. Each of the six partners will access the API once per day to post daily sales figures.<br>After initial deployment, the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet and wants to secure its API while minimizing cost.<br>Which approach should the company take to secure its API?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#752",
            "answers": [
        
        {
            "choice": "<p>A. Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Configure CloudFront with an origin access identity (OAI) and associate it with the distribution. Configure API Gateway to ensure only the OAI can run the POST method.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Add a custom header to the CloudFront distribution populated with an API key. Configure the API to require an API key on the POST method.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a resource policy with a request limit and associate it with the API. Configure the API to require an API key on the POST method.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to the usage plan.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":428144,"date":"Sat 09 Oct 2021 13:58","username":"mericov","content":"D.  - \\\"A usage plan specifies who can access one or more deployed API stages and methods—and also how much and how fast they can access them. The plan uses API keys to identify API clients and meters access to the associated API stages for each key. It also lets you configure throttling limits and quota limits that are enforced on individual client API keys.\\\" https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html","upvote_count":"17","selected_answers":""},{"id":431889,"date":"Thu 21 Oct 2021 14:45","username":"Jupi","content":"A - wrong. You can use WAF to protect your api gateway directly without cloudfront<br>B - wrong. You can use WAF to protect your api gateway directly without cloudfront<br>c - wrong. You can use api gateway resource policis to allow users from specified aws account, from specified IP ranges or CIDR blocks or from specified VPCs or VPC endpoints. request limit is not part of resource policies. <br>d - correct. API gateway usage plans can limit the API access and be sure that the usage does not exceed thrsholds we define.","upvote_count":"12","selected_answers":""},{"id":695997,"date":"Sun 16 Oct 2022 06:27","username":"tomosabc1","content":"A(wrong): OAI is used only for S3.<br>B(wrong): This is not possible to define a WAF web ACL rule to block clients that submit more than five requests per day, because<br><br>\\\"<br>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span......<br>The following caveats apply to AWS WAF rate-based rules:<br>The minimum rate that you can set is 100.<br>AWS WAF checks the rate of requests every 30 seconds, and counts requests for the prior five minutes each time. Because of this, it's possible for an IP address to send requests at too high a rate for 30 seconds before AWS WAF detects and blocks it.<br>AWS WAF can block up to 10,000 IP addresses. If more than 10,000 IP addresses send high rates of requests at the same time, AWS WAF will only block 10,000 of them.<br>\\\"<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":649137,"date":"Sat 20 Aug 2022 04:13","username":"Kyperos","content":"CDN is also a way to prevent DDoS, this question focus to \\\"500 unique IP addresses worldwide\\\" so 500 IPs come from multiple Region in the world, so if you use Cloudfront, you will distribute DDoS Attack traffic to nearest PoPs and apply Rate Limiting on this PoPs.<br><br>----> Answer is B","upvote_count":"1","selected_answers":""},{"id":645744,"date":"Fri 12 Aug 2022 06:50","username":"Jughead","content":"D is the answer","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":515885,"date":"Mon 03 Jan 2022 16:50","username":"RVivek","content":"Why Not B ?Adding Cloud front provides AWS Shield service which is a free DDoS protection.https://aws.amazon.com/shield/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc","upvote_count":"1","selected_answers":""},{"id":497220,"date":"Wed 08 Dec 2021 23:48","username":"AzureDP900","content":"Read both docs andchoose your option. I am going with D<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html","upvote_count":"3","selected_answers":""},{"id":496618,"date":"Wed 08 Dec 2021 08:50","username":"cldy","content":"D.  Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to the usage plan.","upvote_count":"2","selected_answers":""},{"id":448686,"date":"Sun 07 Nov 2021 12:03","username":"andylogan","content":"It's D","upvote_count":"2","selected_answers":""},{"id":435415,"date":"Mon 25 Oct 2021 17:09","username":"tgv","content":"DDD<br>---","upvote_count":"2","selected_answers":""},{"id":434567,"date":"Mon 25 Oct 2021 04:42","username":"blackgamer","content":"D is the answer","upvote_count":"2","selected_answers":""},{"id":431696,"date":"Sun 17 Oct 2021 09:06","username":"denccc","content":"I'll go with D","upvote_count":"3","selected_answers":""},{"id":431476,"date":"Sat 16 Oct 2021 05:52","username":"neta1o","content":"+1 to D, seems like usage plans support the referenced rate limits where resource policies don't.","upvote_count":"3","selected_answers":""},{"id":431081,"date":"Fri 15 Oct 2021 04:52","username":"vjawscert","content":"My vote - D <br>AB - Ignored as Cloudfront not required as its regional based resource. It is gonna add costs. Also WAF can directly sit on top of APIGW<br>C - Incorrect as resource policies are used to restrict access and not to provide limit. Request limit is done with usage plan.","upvote_count":"6","selected_answers":""},{"id":430228,"date":"Sun 10 Oct 2021 14:52","username":"zolthar_zrb39","content":"I think is C, resource policy allows control the IP source: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.htmlbut you cannot define a limit in a resource policy, it's just allow/deny access","upvote_count":"42","selected_answers":""},{"id":501690,"date":"Tue 14 Dec 2021 22:45","username":"rb39","content":"but you cannot define a limit in a resource policy, it's just allow/deny access","upvote_count":"2","selected_answers":""},{"id":427502,"date":"Tue 21 Sep 2021 17:35","username":"pkboy78","content":"I think it is C. ","upvote_count":"4","selected_answers":""}]
    }
    ,
    {
        "question_id": "#753",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running its AWS infrastructure across two AWS Regions. The company has four VPCs in the eu-west-1 Region and has two VPCs in the us-east-1<br>Region. The company also has an on-premises data center in Europe that has two AWS Direct Connect connections in eu-west-1.<br>The company needs a solution in which Amazon EC2 instances in each VPC can connect to each other by using private IP addresses. Servers in the on-premises data center also must be able to connect to those VPCs by using private IP addresses.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#753",
            "answers": [
        
        {
            "choice": "<p>A. Create an AWS Transit Gateway in each Region, and attach each VPC to the transit gateway in that Region. Create cross-Region peering between the transit gateways. Create two transit VIFs, and attach them to a single Direct Connect gateway. Associate each transit gateway with the Direct Connect gateway.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create VPC peering between each VPC in the same Region. Create cross-Region peering between each VPC in different Regions. Create two private VIFs, and attach them to a single Direct Connect gateway. Associate each VPC with the Direct Connect gateway.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create VPC peering between each VPC in the same Region. Create cross-Region peering between each VPC in different Regions. Create two public VIFs that are configured to route AWS IP addresses globally to on-premises servers.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an AWS Transit Gateway in each Region, and attach each VPC to the transit gateway in that Region. Create cross-Region peering between the transit gateways. Create two private VIFs, and attach them to a single Direct Connect gateway. Associate each VPC with the Direct Connect gateway.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":431905,"date":"Sat 09 Oct 2021 13:30","username":"Jupi","content":"A - In correct. It will work, but there is cost for each transit gateway<br>B - Correct. https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-vs-vpc-peering.html<br>\\\"Lower cost — With VPC peering you only pay for data transfer charges. Transit Gateway has an hourly charge per attachment in addition to the data transfer fees. \\\"<br>C - public VIFs is for public IP<br>D - for transit gateways, you need transit VIFs, not private VIFs..","upvote_count":"13","selected_answers":""},{"id":444920,"date":"Sun 24 Oct 2021 18:30","username":"anandkl80","content":"Answer: B<br><br>What is the MOST cost-effective solution that meets these requirements?<br><br>While this makes TGW a good default for most network architectures, VPC peering is still a valid choice due to the following advantages it has over TGW:<br><br>Lower cost — With VPC peering you only pay for data transfer charges. Transit Gateway has an hourly charge per attachment in addition to the data transfer fees.<br><br>Latency — Unlike VPC peering, Transit Gateway is an additional hop between VPCs.","upvote_count":"7","selected_answers":""},{"id":710658,"date":"Thu 03 Nov 2022 17:43","username":"alxjandroleiva","content":"Clearly B choice, most cost-effective","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":690931,"date":"Mon 10 Oct 2022 11:29","username":"JohnPiJohnPi","content":"AWS Transit Gateway + transit VIFoption B cost less (you do not pay the transit gateway) but is missing the VGW (each VGW is attached to a VPC)","upvote_count":"21","selected_answers":"Selected Answer: A"},{"id":699846,"date":"Thu 20 Oct 2022 13:33","username":"JohnPi","content":"option B cost less (you do not pay the transit gateway) but is missing the VGW (each VGW is attached to a VPC)","upvote_count":"1","selected_answers":""},{"id":676228,"date":"Thu 22 Sep 2022 16:03","username":"pinhead900","content":"you can ONLY associate a transit gateway or a virtual private gateway to the direct connect gateways, therefore B cannot be correct<br> https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html","upvote_count":"3","selected_answers":"Selected Answer: A"},{"id":635789,"date":"Sun 24 Jul 2022 01:00","username":"hilft","content":"B.  Forum is right. <br>This is a terrible question. I would go for a real-world environment. As an architect, I would always go for transit gateway because peering over peering got scalability issues.","upvote_count":"1","selected_answers":""},{"id":630658,"date":"Tue 12 Jul 2022 21:24","username":"asfsdfsdf","content":"A is the only correct answer<br>Why not B? <br>1) VPC peering edge to edge is not possible also its not trasetive with VPN / DC - how on-prem servers will be able to communicate with VPCs on another region?<br>https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html#edge-to-edge-vgw<br>2) you cant associate VPCs to a direct connect GW only virtual private GW or transit GW<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html<br>C - uses public VIFs cant be correct<br>D - will not route traffic between regions as it uses private VIFs and not transit VIFs<br>For A its documented architecture - Two DCs, Two VIFs, DX GW and inter-region transit peering, here:<br>https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/aws-dx-dxgw-with-aws-transit-gateway-multi-regions-and-aws-public-peering.html","upvote_count":"6","selected_answers":""},{"id":585405,"date":"Wed 13 Apr 2022 21:11","username":"bkrish","content":"B for cost-effective solution and it make use of DC gateway","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":557532,"date":"Sun 27 Feb 2022 19:58","username":"Ni_yot","content":"Will go with B as well.We must use private VIFs for connectivity. https://aws.amazon.com/premiumsupport/knowledge-center/public-private-interface-dx/","upvote_count":"1","selected_answers":""},{"id":552549,"date":"Mon 21 Feb 2022 07:00","username":"futen0326","content":"Not enough VPCs for A to be correct, we're going for cost-efficiency.. B will work fine here.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":539772,"date":"Thu 03 Feb 2022 15:57","username":"Clandestine60","content":"B is the answer. cross-region vpc peering handles inter-vpc communication and 2 private VIFs are all thats needed for the ON-prem DC to the differnt VPC connections. 1 private VIF for 1 direct connect connection and the 2nd private VIF for the second DConnect connection. This is possible because we are using a DConnect gateway. with DC gateway, we just need a single private VIF for connectivity to multiple VPCs. <br>Details Here: https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/direct-connect.html","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":538584,"date":"Wed 02 Feb 2022 11:24","username":"HellGate","content":"Answer is D. <br><br>This question ask on Transit Gateway Association. https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":525445,"date":"Mon 17 Jan 2022 04:47","username":"ByomkeshDas","content":"Seems option B has lowest cost. But there they have said to create only 2 Private VIFs. But there are total 4+2=6 VPCs in the two regions. So it require 6 private VIFs not 2. Otherwise option A is correct.","upvote_count":"2","selected_answers":""},{"id":471112,"date":"Thu 04 Nov 2021 21:14","username":"andyphamBigbearcn","content":"B is NOT correct, because VPC peering is point to point. So if you want to connect 6 total vpc to on-premises, you need 6 private VIFs, not only 2.A Direct Connect Gateway can connect to up to 10 VPCs (via VGWs) globally in any AWS account over a single private VIF.  so it's B. ","upvote_count":"31","selected_answers":""},{"id":570782,"date":"Fri 18 Mar 2022 23:48","username":"Bigbearcn","content":"A Direct Connect Gateway can connect to up to 10 VPCs (via VGWs) globally in any AWS account over a single private VIF.  so it's B. ","upvote_count":"1","selected_answers":""},{"id":448725,"date":"Mon 01 Nov 2021 20:45","username":"andylogan","content":"It's B - Lower cos","upvote_count":"1","selected_answers":""},{"id":441046,"date":"Fri 22 Oct 2021 09:16","username":"DerekKey","content":"VPC peering is cheaper and additionally you don't pay for transfer within the region if vpcs are in the same zone.","upvote_count":"1","selected_answers":""},{"id":435471,"date":"Tue 19 Oct 2021 04:14","username":"tgv","content":"BBB<br>---<br>Both A & B are correct but the question is asking to be cost-efficient.<br>According to AWS, you have Lower cost — With VPC peering<br>https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-vs-vpc-peering.html","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#754",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application that gives users the ability to search for videos and related information by using keywords that are curated from content providers.<br>The application data is stored in an on-premises Oracle database that is 800 GB in size.<br>The company wants to migrate the data to an Amazon Aurora MySQL DB instance. A solutions architect plans to use the AWS Schema Conversion Tool and<br>AWS Database Migration Service (AWS DMS) for the migration. During the migration, the existing database must serve ongoing requests. The migration must be completed with minimum downtime.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#754",
            "answers": [
        
        {
            "choice": "<p>A. Create primary key indexes, secondary indexes, and referential integrity constraints in the target database before starting the migration process.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use AWS DMS to run the conversion report for Oracle to Aurora MySQL. Remediate any issues. Then use AWS DMS to migrate the data.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use the M5 or C5 DMS replication instance type for ongoing replication.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Turn off automatic backups and logging of the target database until the migration and cutover processes are complete.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":435451,"date":"Tue 05 Oct 2021 05:21","username":"tgvCoffeinerd","content":"BBB<br>---<br>Key words: \\\"A solutions architect PLANS to use the AWS Schema Conversion Tool and<br>AWS Database Migration Service (AWS DMS) for the migration\\\" so running the conversion report for Oracle to Aurora MySQL hasn't been done yet <br>https://docs.aws.amazon.com/dms/latest/sbs/chap-rdsoracle2aurora.html<br><br>A: AWS actually recommends to: \\\"drop primary key indexes, secondary indexes, referential integrity constraints, and data manipulation language (DML) triggers. Or you can delay their creation until after the full load tasks are complete\\\" --> https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html<br>C: M5 doesn't exist --> https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html<br>D: You can't disable automated backups on Aurora. The backup retention period for Aurora is managed by the DB cluster --> https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.htmlB seems the most logical, we are talking about migration with no downtime, not about increase speed of loading data, so B is the best here.","upvote_count":"121","selected_answers":""},{"id":439689,"date":"Thu 14 Oct 2021 13:56","username":"Coffeinerd","content":"B seems the most logical, we are talking about migration with no downtime, not about increase speed of loading data, so B is the best here.","upvote_count":"1","selected_answers":""},{"id":439102,"date":"Tue 12 Oct 2021 16:42","username":"TomPaschenda","content":"Following the replies here it seems that no answer can be correct (see tgv + Jupi)<br>My guess: there is a typo in answer B - it should be AWS SCT in the first part of the answer. Then it all makes sense.","upvote_count":"8","selected_answers":""},{"id":605579,"date":"Sun 22 May 2022 16:59","username":"bobsmith2000","content":"It seems like the answers don't match the question or there are some typos or mistakes","upvote_count":"2","selected_answers":""},{"id":563026,"date":"Tue 08 Mar 2022 05:47","username":"Kuang","content":"B is my answer","upvote_count":"1","selected_answers":""},{"id":539244,"date":"Thu 03 Feb 2022 00:12","username":"Bigbearcn","content":"It's D. ","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":498483,"date":"Fri 10 Dec 2021 10:29","username":"cldy","content":"B.  Use AWS SCT to run the conversion report for Oracle to Aurora MySQL. Remediate any issues. Then use AWS DMS to migrate the data.","upvote_count":"1","selected_answers":""},{"id":497222,"date":"Wed 08 Dec 2021 23:53","username":"AzureDP900","content":"B is right","upvote_count":"1","selected_answers":""},{"id":488895,"date":"Sun 28 Nov 2021 07:39","username":"acloudguru","content":"The first tool in B should be SCT, then B will be the answer. Anyway this is the simplest migration question i've met so far ,hope I can have it in my exam","upvote_count":"3","selected_answers":"Selected Answer: B"},{"id":448727,"date":"Sun 31 Oct 2021 21:19","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":444477,"date":"Wed 20 Oct 2021 07:00","username":"Kopa","content":"I will go for B","upvote_count":"1","selected_answers":""},{"id":435430,"date":"Sat 02 Oct 2021 20:18","username":"tgvnetwork_zealstudent22","content":"GUYS, You can't disable automated backups on Aurora<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html<br>It cannot be Dgood catch. B seems to be right answer. yes, schema Conversion is done by SCT but SCT is a part of DMS.Yes, the link clearly states that:<br>\\\"You can't disable automated backups on Aurora. The backup retention period for Aurora is managed by the DB cluster.\\\"<br>AsTomPaschenda has mentioned, it looks like there's a typo in Answer B which should be SCT in the first part.","upvote_count":"221","selected_answers":""},{"id":436082,"date":"Mon 11 Oct 2021 12:30","username":"network_zeal","content":"good catch. B seems to be right answer. yes, schema Conversion is done by SCT but SCT is a part of DMS.","upvote_count":"2","selected_answers":""},{"id":440218,"date":"Fri 15 Oct 2021 02:43","username":"student22","content":"Yes, the link clearly states that:<br>\\\"You can't disable automated backups on Aurora. The backup retention period for Aurora is managed by the DB cluster.\\\"<br>AsTomPaschenda has mentioned, it looks like there's a typo in Answer B which should be SCT in the first part.","upvote_count":"1","selected_answers":""},{"id":434572,"date":"Sat 02 Oct 2021 13:01","username":"blackgamer","content":"Only D seems to make sense.","upvote_count":"1","selected_answers":""},{"id":431916,"date":"Thu 30 Sep 2021 21:48","username":"Jupi","content":"A - Incorrect This will be done by DMS by default.<br>B - Incorrect - Conversion reports are by Schema Conversion tool<br>C - Incorrect AWS DMS creates the replication instance on an Amazon EC2 instance. AWS DMS currently supports the T2, T3, C4, C5, R4, and R5 Amazon EC2 instance classes for replication instances:<br>D - Correct. This will ensure migration is faster.","upvote_count":"1","selected_answers":""},{"id":431218,"date":"Sun 26 Sep 2021 09:13","username":"Cotter","content":"OK the most sound is D. ","upvote_count":"1","selected_answers":""},{"id":428519,"date":"Sat 25 Sep 2021 02:36","username":"pablobairatDerekKey","content":"D<br>Source: https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.General.SlowTaskThis is a general source not Aurora MySQL specific:<br>You can't disable automated backups on Aurora. The backup retention period for Aurora is managed by the DB cluster.<br>D is WRONG","upvote_count":"11","selected_answers":""},{"id":441051,"date":"Tue 19 Oct 2021 14:45","username":"DerekKey","content":"This is a general source not Aurora MySQL specific:<br>You can't disable automated backups on Aurora. The backup retention period for Aurora is managed by the DB cluster.<br>D is WRONG","upvote_count":"1","selected_answers":""},{"id":428162,"date":"Thu 23 Sep 2021 23:00","username":"mericovDerekKey","content":"D - When migrating to an Amazon RDS database, it's a good idea to turn off backups and Multi-AZ on the target until you're ready to cut over. Similarly, when migrating to systems other than Amazon RDS, turning off any logging on the target until after cutover is usually a good idea. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.htmlWRONG we have Aurora MySQL","upvote_count":"11","selected_answers":""},{"id":441055,"date":"Tue 19 Oct 2021 23:16","username":"DerekKey","content":"WRONG we have Aurora MySQL","upvote_count":"1","selected_answers":""},{"id":427506,"date":"Mon 20 Sep 2021 23:33","username":"pkboy78","content":"It should be D","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#755",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#755",
            "answers": [
        
        {
            "choice": "<p>A. Create an Amazon SES configuration set with Amazon Kinesis Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":428174,"date":"Sat 25 Sep 2021 21:03","username":"mericovRVivekByrney","content":"A / C - https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.htmlKinesisFirehose data type is JSON.Athena query wll not work on that. <br>D& E id the answer. https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html\\\"Athena supports creating tables and querying data from CSV, TSV, custom-delimited, and JSON formats; data from Hadoop-related formats: ORC, Apache Avro and Parquet; logs from Logstash, AWS CloudTrail logs, and Apache WebServer logs.\\\"","upvote_count":"1011","selected_answers":""},{"id":545647,"date":"Sat 12 Feb 2022 05:18","username":"RVivekByrney","content":"KinesisFirehose data type is JSON.Athena query wll not work on that. <br>D& E id the answer. https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html\\\"Athena supports creating tables and querying data from CSV, TSV, custom-delimited, and JSON formats; data from Hadoop-related formats: ORC, Apache Avro and Parquet; logs from Logstash, AWS CloudTrail logs, and Apache WebServer logs.\\\"","upvote_count":"11","selected_answers":""},{"id":713520,"date":"Tue 08 Nov 2022 07:10","username":"Byrney","content":"\\\"Athena supports creating tables and querying data from CSV, TSV, custom-delimited, and JSON formats; data from Hadoop-related formats: ORC, Apache Avro and Parquet; logs from Logstash, AWS CloudTrail logs, and Apache WebServer logs.\\\"","upvote_count":"1","selected_answers":""},{"id":428324,"date":"Sun 26 Sep 2021 00:20","username":"dencccdencccdenccc","content":"B and CChange to A and C: To enable you to track your email sending at a granular level, you can set up Amazon SES to publish email sending events to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon Simple Notification Service based on characteristics that you define. https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.htmlFYI https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html","upvote_count":"711","selected_answers":""},{"id":429142,"date":"Sun 26 Sep 2021 00:43","username":"dencccdenccc","content":"Change to A and C: To enable you to track your email sending at a granular level, you can set up Amazon SES to publish email sending events to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon Simple Notification Service based on characteristics that you define. https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.htmlFYI https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html","upvote_count":"11","selected_answers":""},{"id":431699,"date":"Sun 26 Sep 2021 10:58","username":"denccc","content":"FYI https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html","upvote_count":"1","selected_answers":""},{"id":700011,"date":"Thu 20 Oct 2022 16:14","username":"pek77","content":"https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination.html<br><br>AC<br><br>If you simply want a running total of each type of event (for example, so that you can set an alarm when the total gets too high), you can use CloudWatch.<br><br>If you want detailed event records that you can output to another service such as Amazon OpenSearch Service or Amazon Redshift for analysis, you can use Kinesis Data Firehose.","upvote_count":"1","selected_answers":""},{"id":666674,"date":"Mon 12 Sep 2022 08:51","username":"Yashar1691","content":"https://docs.aws.amazon.com/athena/latest/ug/connectors-cloudwatch.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":631773,"date":"Fri 15 Jul 2022 15:48","username":"JonnyB1001","content":"https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination-cloudwatch.html<br>Email Header – Amazon SES retrieves the dimension name and value from a header in the email. Note<br>You can't use any of the following email headers as the Dimension Name: Received, To, From, DKIM-Signature, CC, message-id, or Return-Path...so A&C","upvote_count":"1","selected_answers":""},{"id":600237,"date":"Wed 11 May 2022 19:22","username":"bobsmith2000","content":"It's AC. <br><br>\\\"The event destination that you choose depends on the level of detail you want about the events, and the way you want to receive the event information. If you simply want a running total of each type of event (for example, so that you can set an alarm when the total gets too high), you can use CloudWatch.<br><br>If you want detailed event records that you can output to another service such as Amazon OpenSearch Service or Amazon Redshift for analysis, you can use Kinesis Data Firehose.<br><br>If you want to receive notifications when certain events occur, you can use Amazon SNS.\\\"<br>Source:<br>https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination.html","upvote_count":"2","selected_answers":""},{"id":586897,"date":"Sat 16 Apr 2022 19:10","username":"Hasitha99","content":"Answer: A, C https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":565088,"date":"Fri 11 Mar 2022 00:39","username":"Yasyas86","content":"Answer is A/C <br>https://aws.amazon.com/getting-started/hands-on/build-serverless-real-time-data-processing-app-lambda-kinesis-s3-dynamodb-cognito-athena/4/#:~:text=Amazon%20Athena%20allows%20us%20to,to%20an%20Amazon%20S3%20bucket.","upvote_count":"1","selected_answers":""},{"id":545634,"date":"Sat 12 Feb 2022 04:52","username":"RVivekRVivek","content":"A& C will work<br>D& E also work <br>Now whic combination is the best soloutiion ?Answer is D & E. <br>Kinesis Firehose delivers Data in JSON format . To run Athena query JSON format should be conveted using Lambda function","upvote_count":"11","selected_answers":""},{"id":545645,"date":"Sat 12 Feb 2022 05:12","username":"RVivek","content":"Answer is D & E. <br>Kinesis Firehose delivers Data in JSON format . To run Athena query JSON format should be conveted using Lambda function","upvote_count":"1","selected_answers":""},{"id":497225,"date":"Wed 08 Dec 2021 23:57","username":"AzureDP900","content":"A,C is right","upvote_count":"2","selected_answers":""},{"id":495837,"date":"Tue 07 Dec 2021 10:39","username":"cldy","content":"A.  Create an Amazon SES configuration set with Amazon Kinesis Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.<br>C.  Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.","upvote_count":"1","selected_answers":""},{"id":483069,"date":"Sun 21 Nov 2021 07:56","username":"acloudguru","content":"CHoose A and C","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":474714,"date":"Tue 09 Nov 2021 10:40","username":"Kopa","content":"A and C<br><br>https://docs.aws.amazon.com/ses/latest/dg/event-publishing-retrieving-firehose.html","upvote_count":"1","selected_answers":""},{"id":448731,"date":"Tue 26 Oct 2021 23:13","username":"andylogan","content":"It's A, C","upvote_count":"1","selected_answers":""},{"id":441766,"date":"Sat 09 Oct 2021 21:33","username":"AkanshaR91andylogan","content":"Answer should be B and C. <br>Reference-<br>https://aws.amazon.com/about-aws/whats-new/2015/05/amazon-ses-is-now-integrated-with-cloudtrail/Quote from your link \\\"Using the information collected by CloudTrail, you can determine what request was made to Amazon SES, the source IP address from which the request was made, who made the request, when it was made, and so on\\\"<br>So CloudTrail doesn't log email content, answer should be A, C instead of B","upvote_count":"13","selected_answers":""},{"id":448730,"date":"Wed 13 Oct 2021 16:18","username":"andylogan","content":"Quote from your link \\\"Using the information collected by CloudTrail, you can determine what request was made to Amazon SES, the source IP address from which the request was made, who made the request, when it was made, and so on\\\"<br>So CloudTrail doesn't log email content, answer should be A, C instead of B","upvote_count":"3","selected_answers":""},{"id":440219,"date":"Wed 06 Oct 2021 07:49","username":"student22","content":"A,C<br>SES --> Kinesis Firehose --> S3 --> Query with Athena","upvote_count":"2","selected_answers":""},{"id":439922,"date":"Sat 02 Oct 2021 20:57","username":"Liongeek","content":"Ans is A and C . WHY?<br><br>You can both publish logs and metric to CloudWatch and Kinesis Data Firehose, but ONLY can publish detailed event records to Kinesis Data Firehose.<br>And of course, once in Firehose you can put the logs in S3 and analyze them with Athena<br><br>Oficial Ref: https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination.html","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#756",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is launching a new web application on Amazon EC2 instances. Development and production workloads exist in separate AWS accounts.<br>According to the company's security requirements, only automated configuration tools are allowed to access the production account. The company's security team wants to receive immediate notification if any manual access to the production AWS account or EC2 instances occurs.<br>Which combination of actions should a solutions architect take in the production account to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CDE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#756",
            "answers": [
        
        {
            "choice": "<p>A. Turn on AWS CloudTrail logs in the application's primary AWS Region. Use Amazon Athena to query the logs for AwsConsoleSignIn events.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure Amazon Simple Email Service (Amazon SES) to send email to the security team when an alarm is activated.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Deploy EC2 instances in an Auto Scaling group. Configure the launch template to deploy instances without key pairs. Configure Amazon CloudWatch Logs to capture system access logs. Create an Amazon CloudWatch alarm that is based on the logs to detect when a user logs in to an EC2 instance.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure an Amazon Simple Notification Service (Amazon SNS) topic to send a message to the security team when an alarm is activated.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>E. Turn on AWS CloudTrail logs for all AWS Regions. Configure Amazon CloudWatch alarms to provide an alert when an AwsConsoleSignIn event is detected.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>F. Deploy EC2 instances in an Auto Scaling group. Configure the launch template to delete the key pair after launch. Configure Amazon CloudWatch Logs for the system access logs. Create an Amazon CloudWatch dashboard to show user logins over time.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":564563,"date":"Thu 10 Mar 2022 06:37","username":"iillii","content":"C,D,E is right!!","upvote_count":"4","selected_answers":""},{"id":497228,"date":"Thu 09 Dec 2021 00:01","username":"AzureDP900","content":"C,D,E is right","upvote_count":"2","selected_answers":""},{"id":496835,"date":"Wed 08 Dec 2021 14:12","username":"Meghaaaalingxian","content":"Why not B?SES is a service that helps you send/receive emails, not a service that could subscribe an event.","upvote_count":"12","selected_answers":""},{"id":606900,"date":"Tue 24 May 2022 22:42","username":"lingxian","content":"SES is a service that helps you send/receive emails, not a service that could subscribe an event.","upvote_count":"2","selected_answers":""},{"id":496544,"date":"Wed 08 Dec 2021 06:19","username":"cldy","content":"C.  Deploy EC2 instances in an Auto Scaling group. Configure the launch template to deploy instances without key pairs. Configure Amazon CloudWatch Logs to capture system access logs. Create an Amazon CloudWatch alarm that is based on the logs to detect when a user logs in to an EC2 instance.<br>D.  Configure an Amazon Simple Notification Service (Amazon SNS) topic to send a message to the security team when an alarm is activated.<br>E.  Turn on AWS CloudTrail logs for all AWS Regions. Configure Amazon CloudWatch alarms to provide an alert when an AwsConsoleSignin event is detected.","upvote_count":"2","selected_answers":""},{"id":488462,"date":"Sat 27 Nov 2021 20:22","username":"AzureDP900","content":"C,D,E is correct answer","upvote_count":"2","selected_answers":""},{"id":483758,"date":"Mon 22 Nov 2021 01:35","username":"acloudguru","content":"F is not right, cloudwatch dashboard does not have such way to meet the requirement","upvote_count":"2","selected_answers":"Selected Answer: CDE"},{"id":474732,"date":"Tue 09 Nov 2021 11:26","username":"Kopa","content":"yep C. D. E","upvote_count":"2","selected_answers":""},{"id":448734,"date":"Wed 27 Oct 2021 03:47","username":"andylogan","content":"It's C D E","upvote_count":"2","selected_answers":""},{"id":435488,"date":"Sun 24 Oct 2021 20:11","username":"tgv","content":"CCC DDD EEE<br>---","upvote_count":"3","selected_answers":""},{"id":434594,"date":"Sat 23 Oct 2021 01:53","username":"blackgamer","content":"CDE is the answer.","upvote_count":"1","selected_answers":""},{"id":431229,"date":"Sat 09 Oct 2021 18:21","username":"Cotter","content":"Sure for C,D and E. ","upvote_count":"1","selected_answers":""},{"id":429151,"date":"Tue 28 Sep 2021 19:06","username":"denccc","content":"Also going for CDE","upvote_count":"1","selected_answers":""},{"id":428522,"date":"Mon 27 Sep 2021 08:20","username":"pablobairat","content":"C,D,E it is","upvote_count":"3","selected_answers":""},{"id":427514,"date":"Thu 23 Sep 2021 09:06","username":"pkboy78","content":"I think it is C, D and E","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#757",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a workload that consists of thousands of Amazon EC2 instances. The workload is running in a VPC that contains several public subnets and private subnets. The public subnets have a route for 0.0.0.0/0 to an existing internet gateway. The private subnets have a route for 0.0.0.0/0 to an existing NAT gateway.<br>A solutions architect needs to migrate the entire fleet of EC2 instances to use IPv6. The EC2 instances that are in private subnets must not be accessible from the public internet.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#757",
            "answers": [
        
        {
            "choice": "<p>A. Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Update all the VPC route tables, and add a route for ::/0 to the internet gateway.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Update the VPC route tables for all private subnets, and add a route for ::/0 to the NAT gateway.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Create an egress-only internet gateway. Update the VPC route tables for all private subnets, and add a route for ::/0 to the egress-only internet gateway.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Create a new NAT gateway, and enable IPv6 support. Update the VPC route tables for all private subnets, and add a route for ::/0 to the IPv6-enabled NAT gateway.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":432182,"date":"Sun 10 Oct 2021 11:22","username":"Jupi","content":"A - Incorrect - It will allow instances to be accessed from internet<br>B - Incorrect - NAT gateways are not supported for IPv6 traffic—use an outbound-only (egress-only) internet gateway instead.<br>C- Correct. https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html#vpc-migrate-ipv6-cidr<br>D: Incorrect - NAT gateways are not supported for IPv6 traffic—use an outbound-only (egress-only) internet gateway instead.","upvote_count":"9","selected_answers":""},{"id":625063,"date":"Thu 30 Jun 2022 08:16","username":"TechX","content":"C, easy one","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":577665,"date":"Tue 29 Mar 2022 16:19","username":"jj22222","content":"C looks right","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":532310,"date":"Tue 25 Jan 2022 18:52","username":"shotty1","content":"it is C","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497229,"date":"Thu 09 Dec 2021 00:03","username":"AzureDP900","content":"I will go with C","upvote_count":"1","selected_answers":""},{"id":448736,"date":"Sat 23 Oct 2021 10:34","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":444491,"date":"Thu 21 Oct 2021 14:00","username":"Kopa","content":"key word egress gateway, so C is correct","upvote_count":"1","selected_answers":""},{"id":435490,"date":"Sun 17 Oct 2021 18:09","username":"tgv","content":"CCC<br>---","upvote_count":"3","selected_answers":""},{"id":431231,"date":"Sat 09 Oct 2021 03:23","username":"Cotter","content":"Yes C.  > https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html.","upvote_count":"1","selected_answers":""},{"id":429153,"date":"Thu 30 Sep 2021 16:48","username":"denccc","content":"Also go for C","upvote_count":"1","selected_answers":""},{"id":428524,"date":"Sat 25 Sep 2021 08:42","username":"pablobairat","content":"C<br>Sources:<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html","upvote_count":"2","selected_answers":""},{"id":427516,"date":"Mon 20 Sep 2021 07:22","username":"pkboy78","content":"It should be C","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#758",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating applications from on premises to the AWS Cloud. These applications power the company's internal web forms. These web forms collect data for specific events several times each quarter. The web forms use simple SQL statements to save the data to a local relational database.<br>Data collection occurs for each event, and the on-premises servers are idle most of the time. The company needs to minimize the amount of idle infrastructure that supports the web forms.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#758",
            "answers": [
        
        {
            "choice": "<p>A. Use Amazon EC2 Image Builder to create AMIs for the legacy servers. Use the AMIs to provision EC2 instances to recreate the applications in the AWS Cloud. Place an Application Load Balancer (ALB) in front of the EC2 instances. Use Amazon Route 53 to point the DNS names of the web forms to the ALB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create one Amazon DynamoDB table to store data for all the data input. Use the application form name as the table key to distinguish data items. Create an Amazon Kinesis data stream to receive the data input and store the input in DynamoDB.  Use Amazon Route 53 to point the DNS names of the web forms to the Kinesis data stream's endpoint.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create Docker images for each server of the legacy web form applications. Create an Amazon Elastic Container Service (Amazon EC2) cluster on AWS Fargate. Place an Application Load Balancer in front of the ECS cluster. Use Fargate task storage to store the web form data.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Provision an Amazon Aurora Serverless cluster. Build multiple schemas for each web form's data storage. Use Amazon API Gateway and an AWS Lambda function to recreate the data input forms. Use Amazon Route 53 to point the DNS names of the web forms to their corresponding API Gateway endpoint.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":647560,"date":"Tue 16 Aug 2022 11:27","username":"kadev","content":"Main point is \\\"The company's goal should be to reduce the quantity of idle infrastructure supporting online forms.\\\" => serverless or scheduled autoscaling, but has no option about autoscaling => answer is D","upvote_count":"2","selected_answers":""},{"id":637656,"date":"Wed 27 Jul 2022 00:24","username":"hilft","content":"B vs. D<br>But don't need kinesis here.<br>D","upvote_count":"1","selected_answers":""},{"id":626541,"date":"Sun 03 Jul 2022 14:08","username":"awsgorilla","content":"D.  Provision an Amazon Aurora Serverless cluster. Build multiple schemas for each web form's data storage. Use Amazon API Gateway and an AWS Lambda function to recreate the data input forms. Use Amazon Route 53 to point the DNS names of the web forms to their corresponding API Gateway endpoint.","upvote_count":"3","selected_answers":""},{"id":591927,"date":"Mon 25 Apr 2022 20:59","username":"JYZ","content":"The reference is about using Kinesis for capturing changes to DynamoDB not about updating data in DynamoDB.  Also how will customer supply the data?","upvote_count":"1","selected_answers":""},{"id":517119,"date":"Wed 05 Jan 2022 03:19","username":"AMKazi","content":"Kineses data streams will increase the cost exponentially. Also the volume is low and per qtr.<br>D: is the answer","upvote_count":"2","selected_answers":""},{"id":499230,"date":"Sat 11 Dec 2021 10:05","username":"cldy","content":"D.  Provision an Amazon Aurora Serverless cluster. Build multiple schemas for each web formג€™s data storage. Use Amazon API Gateway and an AWS Lambda function to recreate the data input forms. Use Amazon Route 53 to point the DNS names of the web forms to their corresponding API Gateway endpoint.","upvote_count":"1","selected_answers":""},{"id":490318,"date":"Tue 30 Nov 2021 02:19","username":"acloudguru","content":"Serverless API + Serverless Business Logic + Serverless DB","upvote_count":"4","selected_answers":"Selected Answer: D"},{"id":448758,"date":"Sun 31 Oct 2021 23:30","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":440229,"date":"Thu 28 Oct 2021 08:11","username":"student22","content":"D<br>Serverless API + Serverless Business Logic + Serverless DB","upvote_count":"1","selected_answers":""},{"id":435494,"date":"Fri 22 Oct 2021 08:51","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":434601,"date":"Tue 19 Oct 2021 16:17","username":"blackgamer","content":"It should be D. ","upvote_count":"1","selected_answers":""},{"id":430251,"date":"Mon 04 Oct 2021 21:30","username":"zolthar_z","content":"Answer is D.  Fargate Storage is ephemeral storage, so, if the cluster has some problem the data will be lost","upvote_count":"2","selected_answers":""},{"id":429159,"date":"Mon 04 Oct 2021 06:35","username":"dencccdenccc","content":"Would go for DBecause of \\\"respond to each event\\\" and \\\"minimize the amount of idle infrastructure\\\"","upvote_count":"32","selected_answers":""},{"id":431701,"date":"Mon 11 Oct 2021 16:22","username":"denccc","content":"Because of \\\"respond to each event\\\" and \\\"minimize the amount of idle infrastructure\\\"","upvote_count":"2","selected_answers":""},{"id":429098,"date":"Mon 04 Oct 2021 04:37","username":"RmukhwassbAMKazi","content":"I think it should be C.  D says create multiple schemas for each data format storage which is unnecessary.Farget Task storage is an ephemeral storageWhere will the data be stored? Fargate task is a compute node.","upvote_count":"111","selected_answers":""},{"id":695491,"date":"Sat 15 Oct 2022 16:57","username":"wassb","content":"Farget Task storage is an ephemeral storage","upvote_count":"1","selected_answers":""},{"id":517118,"date":"Wed 05 Jan 2022 03:19","username":"AMKazi","content":"Where will the data be stored? Fargate task is a compute node.","upvote_count":"1","selected_answers":""},{"id":428525,"date":"Fri 24 Sep 2021 01:05","username":"pablobairat","content":"D for sure","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#759",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.<br>The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company's customers.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#759",
            "answers": [
        
        {
            "choice": "<p>A. Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases are synced, point the collector DNS record to the ALB.  Disable the AWS DMS sync task after the cutover from on premises to AWS.<br></p>",
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
        "discusstion": [{"id":432221,"date":"Mon 18 Oct 2021 13:58","username":"Jupi","content":"A - Incorrect - Network Load Balancers do not support the lambda target type. Application Load Balancers are the only load balancers that support the lambda target type<br>B - InCorrect - This will not solve problem of load jobs fail, while the aggregate job runs<br>C- Correct - Aurora Replica for aggregates job and RDS proxy for better RDS performance<br>D- Incorrect - Kinesis Firehose ca not replicate data to aurora directly","upvote_count":"21","selected_answers":""},{"id":428198,"date":"Sat 25 Sep 2021 00:49","username":"mericov","content":"C - Migrate the database with DMS -> Create a read replica - aggregation jobs will read data from RR -> Endpoints with Lambda behind an ALB -> use Proxy to write to master DB.  Once synchronized, stop the task and point collectors to ALB.  For B, is too complicated to configure the apps as EC2 instances. Instead Lambda is suitable. A, Lambda cannot run behind NLB. ","upvote_count":"10","selected_answers":""},{"id":626601,"date":"Sun 03 Jul 2022 16:51","username":"aandc","content":"C adds read replica to solve aggregation jobs issue","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":497230,"date":"Thu 09 Dec 2021 00:13","username":"AzureDP900","content":"I will go with C","upvote_count":"3","selected_answers":""},{"id":495100,"date":"Mon 06 Dec 2021 13:00","username":"cldy","content":"C.  Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB.  Disable the AWS DMS sync task after the cutover from on premises to AWS.","upvote_count":"2","selected_answers":""},{"id":488849,"date":"Sun 28 Nov 2021 06:24","username":"backfringe","content":"I'd go with C","upvote_count":"2","selected_answers":""},{"id":482950,"date":"Sun 21 Nov 2021 01:51","username":"acloudguru","content":"B - InCorrect - This will not solve problem of load jobs fail, while the aggregate job runs","upvote_count":"3","selected_answers":"Selected Answer: C"},{"id":448759,"date":"Thu 28 Oct 2021 00:48","username":"andylogan","content":"It''s C - <br>Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66%","upvote_count":"3","selected_answers":""},{"id":435500,"date":"Wed 27 Oct 2021 06:39","username":"tgv","content":"CCC<br>---","upvote_count":"2","selected_answers":""},{"id":434605,"date":"Mon 18 Oct 2021 21:32","username":"blackgamer","content":"C for sure.","upvote_count":"1","selected_answers":""},{"id":431233,"date":"Sun 17 Oct 2021 06:45","username":"Cotter","content":"I think C. ","upvote_count":"2","selected_answers":""},{"id":430272,"date":"Tue 12 Oct 2021 13:26","username":"zolthar_z","content":"Answer is C, even B works did not fix the reading issue from the aggregation task","upvote_count":"4","selected_answers":""},{"id":428584,"date":"Sat 09 Oct 2021 02:22","username":"Abhiju2019","content":"it shouldbe B","upvote_count":"1","selected_answers":""},{"id":428531,"date":"Mon 27 Sep 2021 14:57","username":"pablobairat","content":"C it is","upvote_count":"4","selected_answers":""},{"id":427763,"date":"Tue 21 Sep 2021 22:27","username":"pkboy78","content":"I think it is B","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#760",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email. Data is stored in a MySQL database running on an Amazon EC2 instance. The database is running in a VPC with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC. <br>The website has suffered several outages during the last month due to high traffic.<br>Which actions should a solutions architect take to increase the reliability of the application? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#760",
            "answers": [
        
        {
            "choice": "<p>A. Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Provision an additional VPC peering connection.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Migrate the MySQL database to Amazon Aurora with one Aurora Replica.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Provision two NAT gateways in the database VPC. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Move the Tomcat server to the database VPC. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>F. Create an additional public subnet in a different Availability Zone in the website VPC. <br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":589940,"date":"Fri 22 Apr 2022 13:35","username":"snakecharmer2","content":"A - autoscalling <br>C - aurora with read replica<br>F - multi-az","upvote_count":"7","selected_answers":"Selected Answer: ACF"},{"id":698388,"date":"Tue 18 Oct 2022 19:22","username":"Ni_yot","content":"ACF looks good.","upvote_count":"2","selected_answers":"Selected Answer: ACF"},{"id":596178,"date":"Mon 02 May 2022 20:23","username":"Yamchi","content":"go with ACF","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#761",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is building a web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is expected to receive many more reads than writes. The solutions architect needs to ensure that the large amount of read traffic can be accommodated and that the DB instance is highly available.<br>Which steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#761",
            "answers": [
        
        {
            "choice": "<p>A. Create multiple read replicas and put them into an Auto Scaling group.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create multiple read replicas in different Availability Zones.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an Amazon Route 53 hosted zone and a record set for each read replica with a TTL and a weighted routing policy.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an Application Load Balancer (ALB) and put the read replicas behind the ALB. <br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Configure an Amazon CloudWatch alarm to detect a failed read replicas. Set the alarm to directly invoke an AWS Lambda function to delete its Route 53 record set.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>F. Configure an Amazon Route 53 health check for each read replica using its endpoint.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":428535,"date":"Sat 02 Oct 2021 10:25","username":"pablobairatsergioandreslqkadevViper57","content":"B,C,F<br>Source: https://aws.amazon.com/premiumsupport/knowledge-center/requests-rds-read-replicas/Why not B-D-E? I liked B,C,F, however, B-D-E can be a possible solution.<br>Either way, I go with B,C,F but if possible to know why the other are not correct?ALB supports http protocol ( L7) , To use Mysql you must connect via TCP ( L4)You cannot use an ALB to distribute traffic to read replicas, you need to use a Route53 weighted routing policy.","upvote_count":"15218","selected_answers":""},{"id":433937,"date":"Mon 25 Oct 2021 08:30","username":"sergioandreslqkadevViper57","content":"Why not B-D-E? I liked B,C,F, however, B-D-E can be a possible solution.<br>Either way, I go with B,C,F but if possible to know why the other are not correct?ALB supports http protocol ( L7) , To use Mysql you must connect via TCP ( L4)You cannot use an ALB to distribute traffic to read replicas, you need to use a Route53 weighted routing policy.","upvote_count":"218","selected_answers":""},{"id":651646,"date":"Thu 25 Aug 2022 07:11","username":"kadev","content":"ALB supports http protocol ( L7) , To use Mysql you must connect via TCP ( L4)","upvote_count":"1","selected_answers":""},{"id":451915,"date":"Fri 05 Nov 2021 08:18","username":"Viper57","content":"You cannot use an ALB to distribute traffic to read replicas, you need to use a Route53 weighted routing policy.","upvote_count":"8","selected_answers":""},{"id":614565,"date":"Fri 10 Jun 2022 15:36","username":"patrickznk","content":"B,C,E <br>I believe Route53 can not check an endpoint in a private Subnet. Therefore we need to create a Cloudwatch Alarm and check the state of the Cloudwatch Alarm.","upvote_count":"5","selected_answers":""},{"id":636264,"date":"Mon 25 Jul 2022 00:27","username":"hilft","content":"B and C is the must.<br>F, i will memorize.","upvote_count":"2","selected_answers":""},{"id":616000,"date":"Tue 14 Jun 2022 03:06","username":"kangtamo","content":"Agree with BCF","upvote_count":"1","selected_answers":"Selected Answer: BCF"},{"id":497231,"date":"Thu 09 Dec 2021 00:16","username":"AzureDP900","content":"Agree with BCF. ","upvote_count":"2","selected_answers":""},{"id":448764,"date":"Wed 27 Oct 2021 02:48","username":"andylogan","content":"It's B C F<br>You can use Amazon Route 53 weighted record sets to distribute requests across your read replicas. Within a Route 53 hosted zone, create individual record sets for each DNS endpoint associated with your read replicas and give them the same weight. Then, direct requests to the endpoint of the record set.<br>You can incorporate Route 53 health checks to be sure that Route 53 directs traffic away from unavailable read replicas","upvote_count":"1","selected_answers":""},{"id":437222,"date":"Mon 25 Oct 2021 17:09","username":"tgv","content":"BBB CCC FFF<br>---","upvote_count":"3","selected_answers":""},{"id":432248,"date":"Wed 06 Oct 2021 01:00","username":"Jupi","content":"Agree with BCF. ","upvote_count":"3","selected_answers":""},{"id":431935,"date":"Sun 03 Oct 2021 04:08","username":"tvs","content":"BCF.  https://aws.amazon.com/premiumsupport/knowledge-center/requests-rds-read-replicas/","upvote_count":"3","selected_answers":""},{"id":431705,"date":"Sat 02 Oct 2021 19:46","username":"denccc","content":"would go for BCF","upvote_count":"2","selected_answers":""},{"id":427773,"date":"Thu 30 Sep 2021 21:10","username":"pkboy78","content":"I think it should be B, C and F","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#762",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS<br>Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only into a single AWS Region.<br>The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#762",
            "answers": [
        
        {
            "choice": "<p>A. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC.  Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy's Auto Scaling group.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC.  Configure a new NAT gateway. Use an AWS Network Firewall firewall for rule-based filtering. Create Network Firewall endpoints in each Availability Zone. Modify all default routes to point to the Network Firewall endpoints.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an AWS Network Firewall firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering. Modify all default routes to point to the proxy's Auto Scaling group.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429162,"date":"Sat 25 Sep 2021 22:08","username":"denccc","content":"B https://aws.amazon.com/blogs/networking-and-content-delivery/deploy-centralized-traffic-filtering-using-aws-network-firewall/","upvote_count":"10","selected_answers":""},{"id":428539,"date":"Tue 21 Sep 2021 17:00","username":"pablobairat","content":"B<br>Source: https://aws.amazon.com/blogs/networking-and-content-delivery/deployment-models-for-aws-network-firewall/","upvote_count":"7","selected_answers":""},{"id":651146,"date":"Wed 24 Aug 2022 09:50","username":"kadev","content":"If you dont know about Network Firewall, you can remove wrong Answer:<br>- each AWS account => Nope, manager want to centrally managed<br>- Modify all default routes to point to the proxy's Auto Scaling group. => Nope, route table can not route to ASG<br><br>=> B","upvote_count":"4","selected_answers":""},{"id":497233,"date":"Thu 09 Dec 2021 00:20","username":"AzureDP900","content":"B is correct","upvote_count":"1","selected_answers":""},{"id":474794,"date":"Tue 09 Nov 2021 13:51","username":"Kopa","content":"B for sure","upvote_count":"1","selected_answers":""},{"id":449230,"date":"Wed 27 Oct 2021 13:18","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":440254,"date":"Wed 27 Oct 2021 00:11","username":"student22","content":"B<br>AWS Network Firewall + Transit Gateway + NAT Gateway","upvote_count":"1","selected_answers":""},{"id":435532,"date":"Mon 18 Oct 2021 14:06","username":"tgv","content":"BBB<br>---","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#763",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has multiple business units. Each business unit has its own AWS account and runs a single website within that account. The company also has a single logging account. Logs from each business unit website are aggregated into a single Amazon S3 bucket in the logging account. The S3 bucket policy provides each business unit with access to write data into the bucket and requires data to be encrypted.<br>The company needs to encrypt logs uploaded into the bucket using a single AWS Key Management Service (AWS KMS) CMK. The CMK that protects the data must be rotated once every 365 days.<br>Which strategy is the MOST operationally efficient for the company to use to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#763",
            "answers": [
        
        {
            "choice": "<p>A. Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Manually rotate the CMK every 365 days.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Enable automatic rotation of the CMK.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Manually rotate the CMK every 365 days.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Enable automatic rotation of the CMK.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":432833,"date":"Thu 07 Oct 2021 07:09","username":"Jupi","content":"A -incorrect - Manual Roation of key is not good<br>B - Correct - Use a customer managed CMK if you want to grant cross-account access to your S3 objects. You can configure the policy of a customer managed CMK to allow access from another account. <br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html<br>C,D - Incorrect. you cannot manage Amazon managed CMKs, rotate them, or change their key policies. AWS managed customer master key (CMK) key policies can't be modified because they're read-only","upvote_count":"14","selected_answers":""},{"id":429262,"date":"Fri 24 Sep 2021 04:25","username":"mericov","content":"B - https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html","upvote_count":"5","selected_answers":""},{"id":691651,"date":"Tue 11 Oct 2022 03:56","username":"AwsBRFanJonfernz","content":"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br>\\\"Server-side encryption is the encryption of data at its destination by the application or service that receives it.\\\"<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html<br>\\\"Automatic key rotation is disabled by default on customer managed keys but authorized users can enable and disable it. When you enable (or re-enable) automatic key rotation, AWS KMS automatically rotates the KMS key one year (approximately 365 days) after the enable date and every year thereafter.\\\"wrong. there's no yearly automatic rotation for AWS managed KMS keys.","upvote_count":"21","selected_answers":"Selected Answer: D"},{"id":696421,"date":"Sun 16 Oct 2022 19:40","username":"Jonfernz","content":"wrong. there's no yearly automatic rotation for AWS managed KMS keys.","upvote_count":"1","selected_answers":""},{"id":685974,"date":"Tue 04 Oct 2022 09:10","username":"pek77","content":"What's the AWS managed CMK (AWS Managed Customer Managed Key)? is there the concept of this?<br>B is Correct","upvote_count":"1","selected_answers":""},{"id":630886,"date":"Wed 13 Jul 2022 13:42","username":"Enigmaaaaaa","content":"B is correct<br>A - will not work no access provided to other accounts and manual rotate.<br>C - AWS managed key you cant provide access to others + manual rotate- will not work<br>D - AWS managed CMKyou cant provide access to other<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":628908,"date":"Fri 08 Jul 2022 23:38","username":"etopics","content":"D its correct:<br><br>In May 2022, AWS KMS changed the rotation schedule for AWS managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days).<br><br>New AWS managed keys are automatically rotated one year after they are created, and approximately every year thereafter.<br><br>Existing AWS managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html","upvote_count":"2","selected_answers":""},{"id":523045,"date":"Thu 13 Jan 2022 20:37","username":"WebMariaPunitsolankiEnigmaaaaaa","content":"So many answers here. Still wrong. It is D.  The question asks for MOST OPTIMAL. D works and is more optimal than any other.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.htmlAWS managed CMK is rotated once every three years automatically, so cant be C or D. <br>ref- https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.htmlwith D - How can you provide access to other accounts/roles to use AWS managed key?","upvote_count":"111","selected_answers":""},{"id":541454,"date":"Sun 06 Feb 2022 04:35","username":"Punitsolanki","content":"AWS managed CMK is rotated once every three years automatically, so cant be C or D. <br>ref- https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.html","upvote_count":"1","selected_answers":""},{"id":630882,"date":"Wed 13 Jul 2022 13:28","username":"Enigmaaaaaa","content":"with D - How can you provide access to other accounts/roles to use AWS managed key?","upvote_count":"1","selected_answers":""},{"id":497234,"date":"Thu 09 Dec 2021 00:22","username":"AzureDP900","content":"B is right","upvote_count":"1","selected_answers":""},{"id":495617,"date":"Tue 07 Dec 2021 06:09","username":"cldy","content":"B.  Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Enable automatic rotation of the CMK.","upvote_count":"1","selected_answers":""},{"id":490808,"date":"Tue 30 Nov 2021 17:02","username":"javiems","content":"It's A.  B is incorrect. <br>AWS-managed CMK (rotation): Once every three years automatically <br>Customer-managed CMK: Once a year automatically through opt-in or on-demand manually <br><br>https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.html","upvote_count":"2","selected_answers":""},{"id":490546,"date":"Tue 30 Nov 2021 10:27","username":"backfringe","content":"I go with B","upvote_count":"1","selected_answers":""},{"id":487123,"date":"Fri 26 Nov 2021 07:51","username":"RVD","content":"enable automatic rotation after 1 year.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":482992,"date":"Sun 21 Nov 2021 04:11","username":"acloudguru","content":"A -incorrect - Manual Roation of key is not good<br>B - Correct - Use a customer managed CMK if you want to grant cross-account access to your S3 objects. You can configure the policy of a customer managed CMK to allow access from another account.<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html<br>C,D - Incorrect. you cannot manage Amazon managed CMKs, rotate them, or change their key policies. AWS managed customer master key (CMK) key policies can't be modified because they're read-only","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":451623,"date":"Wed 27 Oct 2021 17:12","username":"Pratap","content":"got to be B","upvote_count":"1","selected_answers":""},{"id":449240,"date":"Tue 26 Oct 2021 02:21","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":435535,"date":"Tue 19 Oct 2021 14:46","username":"tgv","content":"BBB<br>---","upvote_count":"3","selected_answers":""},{"id":434618,"date":"Thu 14 Oct 2021 12:54","username":"blackgamer","content":"B is answer.<br><br>AWS managed CMK rotate every three year.<br>https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.html","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#764",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#764",
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
        "discusstion": [{"id":428548,"date":"Wed 29 Sep 2021 16:13","username":"pablobairatblackgamer","content":"B<br>Source:<br>https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.htmlAgree B","upvote_count":"131","selected_answers":""},{"id":434651,"date":"Wed 06 Oct 2021 08:00","username":"blackgamer","content":"Agree B","upvote_count":"1","selected_answers":""},{"id":429244,"date":"Sun 03 Oct 2021 13:40","username":"mericov","content":"B<br>- Export an OVF Template<br>- Create / use an Amazon S3 bucket for storing the exported images. The bucket must be in the Region where you want to import your VMs.<br>- Create an IAM role named vmimport.<br>- You'll use AWS CLI to run the import commands.","upvote_count":"6","selected_answers":""},{"id":698402,"date":"Tue 18 Oct 2022 19:39","username":"Ni_yot","content":"agree its B","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":630888,"date":"Wed 13 Jul 2022 13:47","username":"Enigmaaaaaa","content":"B - classic VM Export/Import","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":622832,"date":"Mon 27 Jun 2022 00:02","username":"kangtamo","content":"Agree with B: VMware vSphere.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":501860,"date":"Wed 15 Dec 2021 05:28","username":"tkanmani76","content":"https://docs.vmware.com/en/VMware-vSphere/5.5/com.vmware.vsphere.hostclient.doc/GUID-AFEDC48B-C96F-4088-9C1F-4F0A30E965DE. html<br>VMWare vSphere is not an AWS solution. While it works the best option would be to use AWS System manager. Option D is right.","upvote_count":"1","selected_answers":""},{"id":497237,"date":"Thu 09 Dec 2021 00:25","username":"AzureDP900","content":"B is right","upvote_count":"1","selected_answers":""},{"id":456193,"date":"Wed 03 Nov 2021 22:47","username":"nsei","content":"It is B https://aws.amazon.com/premiumsupport/knowledge-center/import-instances/","upvote_count":"1","selected_answers":""},{"id":451624,"date":"Wed 13 Oct 2021 06:42","username":"Pratap","content":"B is the answer","upvote_count":"1","selected_answers":""},{"id":449242,"date":"Wed 13 Oct 2021 04:22","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":435538,"date":"Fri 08 Oct 2021 01:26","username":"tgv","content":"BBB<br>---","upvote_count":"2","selected_answers":""},{"id":431709,"date":"Sun 03 Oct 2021 22:27","username":"denccc","content":"I think it's B: https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html","upvote_count":"4","selected_answers":""},{"id":427991,"date":"Sat 25 Sep 2021 23:02","username":"AWSDEvops","content":"I think its D","upvote_count":"1","selected_answers":""},{"id":427805,"date":"Mon 20 Sep 2021 09:45","username":"pkboy78","content":"I think it is B?I am not sure how AWS backup can make snapshot of the on-premise server from SSM","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#765",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account.<br>Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads.<br>Which strategy will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#765",
            "answers": [
        
        {
            "choice": "<p>A. Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCPs with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the IAM policy for the developers' assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/ DevelopmentUnit.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":466253,"date":"Fri 05 Nov 2021 09:36","username":"Viper57","content":"B is the correct answer IMO.<br><br>A - Does not make much sense. An account can only belong to one OU. This is a single production account so it can't be in multiple OUs.<br>B - Session tag is used to identify which business unit a user is part of. IAM policy prevent them from modifying resources for any business unit but their own.<br>C.  This does not restrict any existing permissions so users can still modify resources from different business units. <br>D.  STS cannot be used to assign a policy to an IAM role. A policy has to be assigned to the role before authentication occurs.","upvote_count":"9","selected_answers":""},{"id":432881,"date":"Sat 09 Oct 2021 07:57","username":"Jupi","content":"It is B<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_abac-saml.html","upvote_count":"8","selected_answers":""},{"id":689697,"date":"Sun 09 Oct 2022 00:06","username":"caveman712","content":"B is correct<br><br>C is incorrect because we can't use \\\"Allow\\\" with conditions in SCP","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":499339,"date":"Sat 11 Dec 2021 11:42","username":"cldy","content":"B.  Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the IAM policy for the developersג€™ assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/ DevelopmentUnit.","upvote_count":"1","selected_answers":""},{"id":449861,"date":"Mon 01 Nov 2021 21:12","username":"Bigbearcn","content":"It is B. <br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html","upvote_count":"1","selected_answers":""},{"id":449248,"date":"Sun 31 Oct 2021 15:48","username":"andylogan","content":"It's B","upvote_count":"2","selected_answers":""},{"id":441206,"date":"Sun 31 Oct 2021 01:00","username":"DerekKey","content":"In my opinion<br>B is correct - they already have ALLOW therefore we need DENY<br>C is wrong - since they already have ALLOW permission adding additional ALLOW permission doesn't make sense","upvote_count":"2","selected_answers":""},{"id":440266,"date":"Fri 29 Oct 2021 22:29","username":"student22student22","content":"C<br>Centrally controlled via SCP added to root.Changing to B.  <br>Answer from DerekKey makes sense.","upvote_count":"11","selected_answers":""},{"id":459785,"date":"Thu 04 Nov 2021 08:08","username":"student22","content":"Changing to B.  <br>Answer from DerekKey makes sense.","upvote_count":"1","selected_answers":""},{"id":437243,"date":"Mon 25 Oct 2021 16:49","username":"tgv","content":"BBB<br>---","upvote_count":"3","selected_answers":""},{"id":434757,"date":"Fri 22 Oct 2021 23:57","username":"denccc","content":"It's B","upvote_count":"1","selected_answers":""},{"id":434664,"date":"Fri 22 Oct 2021 04:20","username":"blackgamer","content":"D to me.","upvote_count":"2","selected_answers":""},{"id":431516,"date":"Thu 30 Sep 2021 17:09","username":"neta1o","content":"Seems we have some research to do on this one, I was thinking B. ","upvote_count":"2","selected_answers":""},{"id":431243,"date":"Sun 26 Sep 2021 14:56","username":"Cotter","content":"I not sure, may be choose B?","upvote_count":"2","selected_answers":""},{"id":428553,"date":"Fri 24 Sep 2021 04:07","username":"pablobairat","content":"D it is","upvote_count":"1","selected_answers":""},{"id":427992,"date":"Fri 24 Sep 2021 03:18","username":"AWSDEvopsAWSDEvops","content":"I think its Achanging it to C","upvote_count":"31","selected_answers":""},{"id":432480,"date":"Thu 30 Sep 2021 20:08","username":"AWSDEvops","content":"changing it to C","upvote_count":"1","selected_answers":""},{"id":427808,"date":"Thu 23 Sep 2021 22:09","username":"pkboy78","content":"I think it is C","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#766",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's factory and automation applications are running in a single VPC.  More than 20 applications run on a combination of Amazon EC2, Amazon Elastic<br>Container Service (Amazon ECS), and Amazon RDS.<br>The company has software engineers spread across three teams. One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications. Team resources have tags that represent their application and team. The teams use IAM access for daily activities.<br>The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and<br>Cost Management solution that provides these cost reports.<br>Which combination of actions will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#766",
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
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Activate IAM access to Billing and Cost Management.<br></p>",
            "correct": true,
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
        "discusstion": [{"id":432901,"date":"Mon 11 Oct 2021 04:53","username":"JupidmscounterahilftShanmahisergioandreslqtgv","content":"A: After you create and apply user-defined tags, you can activate them for cost allocation. <br><br>D.  By default, IAM users don't have access to the AWS Billing and Cost Management console. You or your account administrator must grant users access. <br><br>F You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. You can view data for up to the last 12 months, forecast how much you're likely to spend for the next 12 months, and get recommendations for what Reserved Instances to purchase.ACF<br>Not D:<br>Important<br>Activating IAM access alone doesn't grant IAM users and roles the necessary permissions for these Billing console pages. In addition to activating IAM access, you must also attach the required IAM policies to those users or roles. For more information, see Using identity-based policies (IAM policies) for AWS Billing.<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.htmlADF is the answerAgree Jupi. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html<br>By default, IAM users dont have access to Billing & Cost Mgmt. One of the ask is that the users should be able to create reports of usage and forecast, for which they will require access to the billing console.Agree: ADF<br>A: Key line in Question: \\\"Team resources have tags that represent their application and team\\\", meaning that the teams are using Tags, So, It is required to enable \\\"Cost Allocation Tags \\\"User-defined\\\". Then:<br>D: Key question:\\\"each time is responsible for the cost\\\", meaning, they need to access the AWS billing and cost management. remember than only root account is able to access billing, so, It is required to enable the IAM access to the teams to controls their cost. then,<br>F: to be able to see the cost using the cost allocation tags, It is required to enable \\\"Cost Explorer\\\".I disagree on --> D: Key question:\\\"each time is responsible for the cost\\\"\\\"<br>I believe the Key is in the request: \\\"The company needs to determine which costs on the monthly AWS bill are attributable to each application or team\\\" and for this I will choose C over D","upvote_count":"1911171","selected_answers":""},{"id":701976,"date":"Sun 23 Oct 2022 09:10","username":"dmscountera","content":"ACF<br>Not D:<br>Important<br>Activating IAM access alone doesn't grant IAM users and roles the necessary permissions for these Billing console pages. In addition to activating IAM access, you must also attach the required IAM policies to those users or roles. For more information, see Using identity-based policies (IAM policies) for AWS Billing.<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html","upvote_count":"1","selected_answers":""},{"id":638926,"date":"Fri 29 Jul 2022 02:25","username":"hilft","content":"ADF is the answer","upvote_count":"1","selected_answers":""},{"id":433321,"date":"Tue 12 Oct 2021 23:55","username":"Shanmahi","content":"Agree Jupi. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html<br>By default, IAM users dont have access to Billing & Cost Mgmt. One of the ask is that the users should be able to create reports of usage and forecast, for which they will require access to the billing console.","upvote_count":"1","selected_answers":""},{"id":433780,"date":"Wed 13 Oct 2021 06:27","username":"sergioandreslqtgv","content":"Agree: ADF<br>A: Key line in Question: \\\"Team resources have tags that represent their application and team\\\", meaning that the teams are using Tags, So, It is required to enable \\\"Cost Allocation Tags \\\"User-defined\\\". Then:<br>D: Key question:\\\"each time is responsible for the cost\\\", meaning, they need to access the AWS billing and cost management. remember than only root account is able to access billing, so, It is required to enable the IAM access to the teams to controls their cost. then,<br>F: to be able to see the cost using the cost allocation tags, It is required to enable \\\"Cost Explorer\\\".I disagree on --> D: Key question:\\\"each time is responsible for the cost\\\"\\\"<br>I believe the Key is in the request: \\\"The company needs to determine which costs on the monthly AWS bill are attributable to each application or team\\\" and for this I will choose C over D","upvote_count":"71","selected_answers":""},{"id":437438,"date":"Wed 20 Oct 2021 01:23","username":"tgv","content":"I disagree on --> D: Key question:\\\"each time is responsible for the cost\\\"\\\"<br>I believe the Key is in the request: \\\"The company needs to determine which costs on the monthly AWS bill are attributable to each application or team\\\" and for this I will choose C over D","upvote_count":"1","selected_answers":""},{"id":437439,"date":"Thu 21 Oct 2021 08:39","username":"tgvtgvsashenka","content":"AAA CCC FFF<br>---<br>A: After you create and apply user-defined tags, you can activate them for cost allocation<br>C: I believe the Key is in the request: \\\"The company needs to determine which costs on the monthly AWS bill are attributable to each application or team\\\"<br>F: You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. You can view data for up to the last 12 months, forecast how much you're likely to spend for the next 12 monthsC: The COMPANY and not the IAM usersThen how do you suggest you satisfy the requirement that \\\"each team is responsible for the cost and performance of all of its applications\\\"? We also are given that they use IAM for their daily use. We are also given that “teams rely on IAM access for day-to-day operations.” Only possible solution here is D. ","upvote_count":"1253","selected_answers":""},{"id":437441,"date":"Fri 22 Oct 2021 20:09","username":"tgvsashenka","content":"C: The COMPANY and not the IAM usersThen how do you suggest you satisfy the requirement that \\\"each team is responsible for the cost and performance of all of its applications\\\"? We also are given that they use IAM for their daily use. We are also given that “teams rely on IAM access for day-to-day operations.” Only possible solution here is D. ","upvote_count":"53","selected_answers":""},{"id":476596,"date":"Fri 12 Nov 2021 02:28","username":"sashenka","content":"Then how do you suggest you satisfy the requirement that \\\"each team is responsible for the cost and performance of all of its applications\\\"? We also are given that they use IAM for their daily use. We are also given that “teams rely on IAM access for day-to-day operations.” Only possible solution here is D. ","upvote_count":"3","selected_answers":""},{"id":691706,"date":"Tue 11 Oct 2022 05:56","username":"AwsBRFandmscountera","content":"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html<br>\\\"IAM users cannot access billing data until the account owner activates IAM access and also attaches policies that provide billing actions to the user or role.\\\"Important<br>Activating IAM access alone doesn't grant IAM users and roles the necessary permissions for these Billing console pages. In addition to activating IAM access, you must also attach the required IAM policies to those users or roles. For more information, see Using identity-based policies (IAM policies) for AWS Billing.","upvote_count":"21","selected_answers":"Selected Answer: ADF"},{"id":701977,"date":"Sun 23 Oct 2022 09:11","username":"dmscountera","content":"Important<br>Activating IAM access alone doesn't grant IAM users and roles the necessary permissions for these Billing console pages. In addition to activating IAM access, you must also attach the required IAM policies to those users or roles. For more information, see Using identity-based policies (IAM policies) for AWS Billing.","upvote_count":"1","selected_answers":""},{"id":630898,"date":"Wed 13 Jul 2022 14:23","username":"Enigmaaaaaawassb","content":"ACF<br>E - Incorrect - no need for budgets here<br>B - Incorrect - need to create custom cost allocation tags not to use the default ones<br>D - Incorrect -This is a consolidated billing organization - IAM access to billing is enabled by default<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html#tutorial-billing-step1<br>\\\"Note<br>If you create a member account using AWS Organizations, this feature is enabled by default.\\\"<br>all other answers make sense A C F - Cost categories + user defined CAT + enable CEThere is no AWS ORGANIZATION in the question","upvote_count":"11","selected_answers":""},{"id":695523,"date":"Sat 15 Oct 2022 18:19","username":"wassb","content":"There is no AWS ORGANIZATION in the question","upvote_count":"1","selected_answers":""},{"id":624350,"date":"Wed 29 Jun 2022 02:50","username":"TechX","content":"Answer: ACF<br>Explanation:<br>https://aws.amazon.com/aws-cost-management/aws-cost-categories/","upvote_count":"1","selected_answers":"Selected Answer: ACF"},{"id":620029,"date":"Tue 21 Jun 2022 21:39","username":"Kb80","content":"I tend to lean towards ACF for the reason that the teams can manage their billing through cost explorer without needing to be provided access to the billing and cost management portal. By default a member account will have access to cost explorer and you can control what they have access to (or revoke access). https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-access.html","upvote_count":"1","selected_answers":"Selected Answer: ACF"},{"id":557939,"date":"Mon 28 Feb 2022 08:59","username":"jyrajan69","content":"Has to be A,D,F. <br>C is wrong as it only refers to application, and the question clearly says ether Team or Application","upvote_count":"1","selected_answers":""},{"id":546880,"date":"Mon 14 Feb 2022 04:54","username":"lifebegins","content":"Answer is ACF:<br><br>1. https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html<br>2.https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html<br>3. https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html","upvote_count":"1","selected_answers":""},{"id":532709,"date":"Wed 26 Jan 2022 09:48","username":"cannottellname","content":"Team already includes tags then why activate that? <br>CDF seems better to me.","upvote_count":"1","selected_answers":""},{"id":509298,"date":"Sat 25 Dec 2021 23:05","username":"vbal","content":"https://aws.amazon.com/premiumsupport/knowledge-center/cost-explorer-analyze-spending-and-usage/ ; ACF. ","upvote_count":"1","selected_answers":""},{"id":507203,"date":"Wed 22 Dec 2021 16:20","username":"Ni_yot","content":"ACF for me.you can create a cost category for each team.Since its the org that needs the info no need for users to have access to billing/cost explorer.","upvote_count":"1","selected_answers":""},{"id":491827,"date":"Wed 01 Dec 2021 18:10","username":"Gaurav_GGG","content":"It's A, C, F. For A and F agree with other comments. C is because in Question it's said they each Software team manages each Application so in C you can create category for each Application and monitor corresponding cost using Tags.","upvote_count":"1","selected_answers":""},{"id":449252,"date":"Sat 30 Oct 2021 22:13","username":"andylogan","content":"It's A D F<br>I am with D, not C because you can'tcreate cost category for application, below link also suggest to manage by team: \\\"You can create groupings of costs using cost categories. For example, assume that your business is organized by teams and that each team has multiple accounts within. To build this structure in cost categories, create a cost category named Team. Then, you can map costs to a cost category value that's named Team 1\\\"<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html#cost-categories-dimensions","upvote_count":"1","selected_answers":""},{"id":446603,"date":"Sat 30 Oct 2021 07:06","username":"johnnsmith","content":"C is wrong. The requirement is \\\"application or team\\\". C only allows application.","upvote_count":"1","selected_answers":""},{"id":445017,"date":"Sat 30 Oct 2021 01:46","username":"Kopa","content":"Im for A,C,F im for C because it is saying the company not users. Users doesn't need access to Bill Mgm.","upvote_count":"1","selected_answers":""},{"id":440680,"date":"Mon 25 Oct 2021 14:58","username":"Bigbearcn","content":"ACF. <br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html","upvote_count":"2","selected_answers":""},{"id":440284,"date":"Sat 23 Oct 2021 12:42","username":"student22sashenka","content":"A,C,F<br>It seems C is more relevant than D as the question doesn't mention that the reports are generated by the application teams.Then how do you suggest you satisfy the requirement that \\\"each team is responsible for the cost and performance of all of its applications\\\"? We are also given that “teams rely on IAM access for day-to-day operations.” Only option here is D to satisfy the requirement.","upvote_count":"11","selected_answers":""},{"id":476597,"date":"Fri 12 Nov 2021 02:30","username":"sashenka","content":"Then how do you suggest you satisfy the requirement that \\\"each team is responsible for the cost and performance of all of its applications\\\"? We are also given that “teams rely on IAM access for day-to-day operations.” Only option here is D to satisfy the requirement.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#767",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company's applications read from and write to Amazon Kinesis Data Streams.<br>Most of the workloads run in private subnets.<br>A solutions architect must review the infrastructure. The solution architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high. A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#767",
            "answers": [
        
        {
            "choice": "<p>A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that the VPC endpoint policy allows traffic from the applications.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":428560,"date":"Fri 01 Oct 2021 23:21","username":"pablobairat","content":"It is D<br>Source: https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html","upvote_count":"13","selected_answers":""},{"id":432924,"date":"Mon 18 Oct 2021 05:00","username":"Jupitgv","content":"D: If most traffic through your NAT gateway is to AWS services that support interface VPC endpoints, then create an interface VPC endpoint for the services.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-reduce-nat-gateway-transfer-costs/<br><br>VPC endpoint policies enable you to control access by either attaching a policy to a VPC endpoint or by using additional fields in a policy that is attached to an IAM user, group, or role to restrict access to only occur via the specified VPC endpointFirst I was the impression that you cannot attach a policy to a VPC interface endpoint (only to VPC gateway endpoints), but did a bit of research and found this --> https://aws.amazon.com/about-aws/whats-new/2019/06/now-add-endpoint-policies-to-interface-endpoints-for-aws-services/<br><br>Since \\\"a default policy gets attached for you to allow full access to the service\\\" when you create the endpoint you don't really need to ensure that the VPC endpoint policy allows traffic from the applications. But I guess this is just AWS way to confuse us","upvote_count":"71","selected_answers":""},{"id":437271,"date":"Thu 04 Nov 2021 18:36","username":"tgv","content":"First I was the impression that you cannot attach a policy to a VPC interface endpoint (only to VPC gateway endpoints), but did a bit of research and found this --> https://aws.amazon.com/about-aws/whats-new/2019/06/now-add-endpoint-policies-to-interface-endpoints-for-aws-services/<br><br>Since \\\"a default policy gets attached for you to allow full access to the service\\\" when you create the endpoint you don't really need to ensure that the VPC endpoint policy allows traffic from the applications. But I guess this is just AWS way to confuse us","upvote_count":"1","selected_answers":""},{"id":624737,"date":"Wed 29 Jun 2022 17:20","username":"Bill_Wiiliam","content":"D is the correct answer","upvote_count":"2","selected_answers":""},{"id":622555,"date":"Sun 26 Jun 2022 14:56","username":"kangtamo","content":"Agree with D. ","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":586600,"date":"Sat 16 Apr 2022 06:37","username":"bfalcen007","content":"Correct answer is B. <br>D is wrong because it states VPC endpoint policy for traffic \\\"from\\\" the application. With vac endpoint policy, you can't control traffic from the application, but traffic to the application. This should be viewed from service consumer perspective .D. <br>IAM is Identity and Access Management.","upvote_count":"11","selected_answers":""},{"id":636800,"date":"Mon 25 Jul 2022 17:50","username":"cen007","content":"D. <br>IAM is Identity and Access Management.","upvote_count":"1","selected_answers":""},{"id":449310,"date":"Sun 07 Nov 2021 14:56","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":435554,"date":"Wed 03 Nov 2021 03:26","username":"tgv","content":"DDD<br>---","upvote_count":"2","selected_answers":""},{"id":434698,"date":"Thu 21 Oct 2021 17:58","username":"blackgamer","content":"D is the answer.","upvote_count":"1","selected_answers":""},{"id":429174,"date":"Mon 11 Oct 2021 10:45","username":"denccc","content":"Would go for D since you don't need a IAM policy to USE vpc endpoints (only to create/update/delete them).","upvote_count":"3","selected_answers":""},{"id":428260,"date":"Thu 23 Sep 2021 11:52","username":"pkboy78","content":"I think it is D?","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#768",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using multiple AWS accounts. The company has a shared service account and several other accounts for different projects.<br>A team has a VPC in a project account. The team wants to connect this VPC to a corporate network through an AWS Direct Connect gateway that exists in the shared services account. The team wants to automatically perform a virtual private gateway association with the Direct Connect gateway by using an already- tested AWS Lambda function while deploying its VPC networking stack. The Lambda function code can assume a role by using AWS Security Token Service<br>(AWS STS). The team is using AWS CloudFormation to deploy its infrastructure.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#768",
            "answers": [
        
        {
            "choice": "<p>A. Deploy the Lambda function to the project account. Update the Lambda function's IAM role with the directconnect:* permission.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a cross-account IAM role in the shared services account that grants the Lambda function the directconnect:* permission. Add the sts:AssumeRole permission to the IAM role that is associated with the Lambda function in the shared services account.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Add a custom resource to the CloudFormation networking stack that references the Lambda function in the project account.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Deploy the Lambda function that is performing the association to the shared services account. Update the Lambda function's IAM role with the directconnect:* permission.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Create a cross-account IAM role in the shared services account that grants the sts:AssumeRole permission to the Lambda function with the directconnect:* permission acting as a resource. Add the sts:AssumeRole permission with this cross-account IAM role as a resource to the IAM role that belongs to the Lambda function in the project account.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>F. Add a custom resource to the CloudFormation networking stack that references the Lambda function in the shared services account.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429350,"date":"Tue 28 Sep 2021 06:13","username":"Rmukh","content":"I would say it is B, D, F","upvote_count":"6","selected_answers":""},{"id":645237,"date":"Thu 11 Aug 2022 05:00","username":"foureye2004","content":"https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html <br>With above guideline, you should:<br>Project Account: a lambda function to:<br>- Create an associate from VPG to the DX Gateway ID (input DX Gateway Owner) (answer A, need directconnect:*permission to do this)<br>- Assume role on Share Service account to accept the association request.<br><br>Share Service account:<br>- an IAM role to allow Project account's Lambda to assume with directconnect:* permission to allow acction accept/deny the request (answer E)<br><br>So A,C,E are correct","upvote_count":"5","selected_answers":"Selected Answer: ACE"},{"id":689581,"date":"Sat 08 Oct 2022 20:12","username":"tomosabc1i_bird","content":"The answer is ACE. <br>Quick Resolution: The Lambda must be in the same account with network stack, meaning project account. Therefore,<br>B(wrong): ... Lambda function in the shared services account.<br>D(wrong): Deploy the lambda function .... to the shared services account<br>F(wrong): ... references the lambda function in the shared services account<br><br>E(correct): Really bad worded answer.<br>1) Create a cross-account IAM role in the shared services account<br>2) The cross-account IAM role grants sts:AssumeRole permission to the Lambda function, allowing lambda function in project account to assume it.<br>3) The cross-account IAM role has directconnect:* permission<br>4) Add policy to allow Lambda execution role to assume the cross-account role.<br>This is a typical use case of cross account IAM role, but E describes it in a very vague and misleading way.Well said..thanks","upvote_count":"41","selected_answers":"Selected Answer: ACE"},{"id":698226,"date":"Tue 18 Oct 2022 14:12","username":"i_bird","content":"Well said..thanks","upvote_count":"1","selected_answers":""},{"id":603215,"date":"Wed 18 May 2022 11:33","username":"bobsmith2000","content":"The correct version is a combination of B and E:<br>1) The role in shared services contains allow for \\\"directconnect:*\\\". Its trusted policy allows sts:AssumeRole for a principle which is lambda role in B. <br>2) The role in the project account allows sts:AssumeRole and Resource is the role in the shared services account.<br>So that lamda assumes the role (allowed by its role) and recives the privileges of ASSUMED role.<br>So neither is correct.<br>Apparently the functions should be in the same account (or created along with a VPC networking stack). So it's A without second sentence.<br>In case of the Lambda in the shared account, we don't need any cross-account roles.<br><br>Bad-worded answers","upvote_count":"1","selected_answers":""},{"id":497244,"date":"Thu 09 Dec 2021 00:46","username":"AzureDP900sashszsashsz","content":"ACE is correct.Exceptionally bad written answers.<br>This is what E should state:<br>E.  Create a cross-account IAM role in the shared services account that grants the sts:AssumeRole permission to the Lambda function's execution role in the project account with the directconnect:* permission acting as a resource. Add the sts:AssumeRole permission with this cross-account IAM role as a resource to the IAM role that belongs to the Lambda function in the project account.Also, the 2nd sentence in A should be removed.","upvote_count":"211","selected_answers":""},{"id":584999,"date":"Wed 13 Apr 2022 06:46","username":"sashszsashsz","content":"Exceptionally bad written answers.<br>This is what E should state:<br>E.  Create a cross-account IAM role in the shared services account that grants the sts:AssumeRole permission to the Lambda function's execution role in the project account with the directconnect:* permission acting as a resource. Add the sts:AssumeRole permission with this cross-account IAM role as a resource to the IAM role that belongs to the Lambda function in the project account.Also, the 2nd sentence in A should be removed.","upvote_count":"11","selected_answers":""},{"id":585000,"date":"Wed 13 Apr 2022 06:48","username":"sashsz","content":"Also, the 2nd sentence in A should be removed.","upvote_count":"1","selected_answers":""},{"id":484744,"date":"Tue 23 Nov 2021 05:41","username":"acloudguruacloudguru","content":"how did you choose between B and E?https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/. seems B is over E. ","upvote_count":"11","selected_answers":""},{"id":484747,"date":"Tue 23 Nov 2021 05:48","username":"acloudguru","content":"https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/. seems B is over E. ","upvote_count":"1","selected_answers":""},{"id":466263,"date":"Wed 03 Nov 2021 00:15","username":"Viper57","content":"ACE makes the most sense. According to AWS<br><br>\\\"The owner of the virtual private gateway creates an association proposal and the owner of the Direct Connect gateway must accept the association proposal.\\\"<br><br>So it makes sense in this case that the project account would create a virtual gateway association first, and then assume the cross-account role to accept the association in the shared services account.","upvote_count":"4","selected_answers":""},{"id":459787,"date":"Sun 31 Oct 2021 09:35","username":"student22","content":"A,C,E<br>New role in shared account + Lambda in project account","upvote_count":"1","selected_answers":""},{"id":449634,"date":"Mon 25 Oct 2021 21:03","username":"BigbearcnBigbearcn","content":"Only 1 lambda function in shared service account is enough. BDF. ACE is correct. <br><br>Actually lambda function can be created in shared service account or project account. If lambda function is create in shared service account,you need grant your cloudformation customer resource permission to call lambda, so Option F is incomplete. Option B is wrong because in that case sts::AssumeRole is not needed. Only when lambda in other account that need to assume the role, you need grant sts::AssumeRole permission. SoACE is answer.","upvote_count":"17","selected_answers":""},{"id":449751,"date":"Thu 28 Oct 2021 18:19","username":"Bigbearcn","content":"ACE is correct. <br><br>Actually lambda function can be created in shared service account or project account. If lambda function is create in shared service account,you need grant your cloudformation customer resource permission to call lambda, so Option F is incomplete. Option B is wrong because in that case sts::AssumeRole is not needed. Only when lambda in other account that need to assume the role, you need grant sts::AssumeRole permission. SoACE is answer.","upvote_count":"7","selected_answers":""},{"id":449348,"date":"Mon 11 Oct 2021 14:41","username":"andylogan","content":"It's A C E","upvote_count":"1","selected_answers":""},{"id":437293,"date":"Sun 10 Oct 2021 13:16","username":"tgv","content":"AAA CCC EEE<br>---","upvote_count":"3","selected_answers":""},{"id":436355,"date":"Sun 03 Oct 2021 10:36","username":"blackgamer","content":"ACE is the answer","upvote_count":"1","selected_answers":""},{"id":430608,"date":"Tue 28 Sep 2021 21:33","username":"DesaillyDesaillytgv","content":"C,D,E <br>Story explanantion: Project team deploys something which - as a result - creates VGW association in shared account.<br>The flow works as follows (_P for Project, _S for shared)<br>Project team runs a lambda_P which invokes lambda_S (the one team has already tested) and lambda_S creates a desired association<br>In order to do so:<br>lambda_S needs directconnect:* permission to handle DC (option D)<br>lambda_P needs permissions to run lambda_S, which is done via 2 roles<br>- lambda_S can be assumed via dedicated cross-account IAM_1 role (option D part 1)<br>- lambda_P can assume IAM_1 via IAM_2 (role for lamda_P) (option D part 2)<br>Cloudformation is run from _P account and runs lamda_P, --> thus C\\\"option D part x\\\" relates to \\\"E\\\" in explanationI don't think there are 2 lambda functions. Only 1 is enough and should be deployed in the project account.<br>I'll go with A C E","upvote_count":"113","selected_answers":""},{"id":430619,"date":"Fri 01 Oct 2021 09:30","username":"Desailly","content":"\\\"option D part x\\\" relates to \\\"E\\\" in explanation","upvote_count":"1","selected_answers":""},{"id":437292,"date":"Sun 03 Oct 2021 15:39","username":"tgv","content":"I don't think there are 2 lambda functions. Only 1 is enough and should be deployed in the project account.<br>I'll go with A C E","upvote_count":"3","selected_answers":""},{"id":429078,"date":"Mon 27 Sep 2021 18:51","username":"mericov","content":"https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/","upvote_count":"1","selected_answers":""},{"id":429077,"date":"Tue 21 Sep 2021 12:13","username":"mericov","content":"I would say B / C/ D https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#769",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a line-of-business (LOB) application on AWS to support its users. The application runs in one VPC, with a backup copy in a second VPC in a different AWS Region for disaster recovery. The company has a single AWS Direct Connect connection between its on-premises network and AWS. The connection terminates at a Direct Connect gateway.<br>All access to the application must originate from the company's on-premises network and traffic must be encrypted in transit through the use of IPsec. The company is routing traffic through a VPN tunnel over the Direct Connect connection to provide the required encryption.<br>A business continuity audit determines that the Direct Connect connection represents a potential single point of failure for access to the application. The company needs to remediate this issue as quickly as possible.<br>Which approach will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#769",
            "answers": [
        
        {
            "choice": "<p>A. Order a second Direct Connect connection to a different Direct Connect location. Terminate the second Direct Connect connection at the same Direct Connect gateway.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure an AWS Site-to-Site VPN connection over the internet. Terminate the VPN connection at a virtual private gateway in the secondary Region.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Configure an AWS Site-to- Site VPN connection, and terminate it at the transit gateway.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Order a second Direct Connect connection, and terminate it at the transit gateway.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":451950,"date":"Wed 03 Nov 2021 17:49","username":"Viper57Gaurav_GGGaandc","content":"I think the answer is B. <br><br>A - Wrong, because this is too slow.<br>B -Only option that works and does not take too long<br>C - Wrong. Looks good at first, but a transit gateway can't be associated with multiple VPCs in different regions, only the same region. This only works if the transit gateway is peered with another gateway in a different region, which is not stated in the question.<br>D - Wrong, because this is too slow. <br><br>A transit gateway is a regional construct, not global. See - https://aws.amazon.com/blogs/networking-and-content-delivery/building-a-global-network-using-aws-transit-gateway-inter-region-peering/. ATG supports InterRegion VPC Peering- https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/you need two TG https://aws.amazon.com/blogs/networking-and-content-delivery/building-a-global-network-using-aws-transit-gateway-inter-region-peering/","upvote_count":"1132","selected_answers":""},{"id":510292,"date":"Mon 27 Dec 2021 13:43","username":"Gaurav_GGGaandc","content":"TG supports InterRegion VPC Peering- https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/you need two TG https://aws.amazon.com/blogs/networking-and-content-delivery/building-a-global-network-using-aws-transit-gateway-inter-region-peering/","upvote_count":"32","selected_answers":""},{"id":627749,"date":"Wed 06 Jul 2022 08:31","username":"aandc","content":"you need two TG https://aws.amazon.com/blogs/networking-and-content-delivery/building-a-global-network-using-aws-transit-gateway-inter-region-peering/","upvote_count":"2","selected_answers":""},{"id":429354,"date":"Mon 20 Sep 2021 20:55","username":"Rmukhsergioandreslq","content":"I agree with C , as of D it will take more time plus it will require additional VPN tunneling for encryption which is not mentioned in D. TGW is required to receive the Site To Site VPN and the DX Gateway is required to reach the DR in secondary region. (Transit VIF is required to connect DX GW to TGW).<br>Site to Site VPN comply with encryption, the answer D doesn't comply with encryption requirement using only DX","upvote_count":"72","selected_answers":""},{"id":433803,"date":"Thu 30 Sep 2021 13:46","username":"sergioandreslq","content":"TGW is required to receive the Site To Site VPN and the DX Gateway is required to reach the DR in secondary region. (Transit VIF is required to connect DX GW to TGW).<br>Site to Site VPN comply with encryption, the answer D doesn't comply with encryption requirement using only DX","upvote_count":"2","selected_answers":""},{"id":717482,"date":"Sun 13 Nov 2022 20:40","username":"Relaxeasy","content":"B sounds right","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":710329,"date":"Thu 03 Nov 2022 08:25","username":"dmscountera","content":"https://aws.amazon.com/premiumsupport/knowledge-center/dx-configure-dx-and-vpn-failover-tgw/ C","upvote_count":"2","selected_answers":""},{"id":683891,"date":"Sat 01 Oct 2022 02:10","username":"dcdcdc3","content":"I would choose B for its simplicity and not having to order a second DX<br>https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html<br><br>A requires another DX GW if DX terminates in another location<br>C and D are an overkill in comparison (if they were adding a redundant WAN/DX link)<br>also D is not adding encryption in this wording","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":656013,"date":"Thu 01 Sep 2022 10:43","username":"kadevkadev","content":"B<br>Many people confuse between B and C, key point is resolving \\\"single point as quickly as posible\\\"<br>=> B write, VPN is secondary when DX conection goes down<br>C \\\"Create a transit gateway. Attach the VPCs to the transit gateway\\\" , Do you see \\\"a TG\\\" => VPCs in diffirent regions, so can not attach VPC in this region to TG in another regionAnd add TG not resolve \\\"single point\\\", because is still using the same DX connection","upvote_count":"22","selected_answers":""},{"id":656016,"date":"Thu 01 Sep 2022 10:44","username":"kadev","content":"And add TG not resolve \\\"single point\\\", because is still using the same DX connection","upvote_count":"2","selected_answers":""},{"id":637250,"date":"Tue 26 Jul 2022 09:07","username":"foureye2004kadevdethblow","content":"https://aws.amazon.com/directconnect/resiliency-recommendation/<br><br>A is the best solution because 1 DX is a point of failure, we have to address it by order the second\\\"remediate this issue as quickly as possible\\\" you will fail exam if not read Q carefullyC<br>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/","upvote_count":"221","selected_answers":"Selected Answer: A"},{"id":655999,"date":"Thu 01 Sep 2022 10:36","username":"kadev","content":"\\\"remediate this issue as quickly as possible\\\" you will fail exam if not read Q carefully","upvote_count":"2","selected_answers":""},{"id":651156,"date":"Wed 24 Aug 2022 10:53","username":"dethblow","content":"C<br>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/","upvote_count":"1","selected_answers":""},{"id":636459,"date":"Mon 25 Jul 2022 07:58","username":"cen007","content":"Ans is C. <br>The question is about resiliency of connection.<br>The connection goes from 2 VPC > Transit Gateway > DXGateway > VPN+DX connection (on-premise).<br><br>B is just a disaster recovery site to store copy of the primary site. Also terminating the VPN to a private gateway will not help the primary region.","upvote_count":"5","selected_answers":"Selected Answer: C"},{"id":630912,"date":"Wed 13 Jul 2022 15:01","username":"Enigmaaaaaa","content":"I will go with B<br>A - will take a lot of time+Incorrect configuration<br>C- you cant attach VPCs from different regions to the same transit GW - need to create two TGWs with inter-region<br>D- you cant attach VPCs from different regions to the same transit GW + will take a lot of time<br>B - can it address immediately = Add extra VPN from on-prem","upvote_count":"1","selected_answers":""},{"id":627748,"date":"Wed 06 Jul 2022 08:29","username":"aandccen007","content":"Vote for B,<br>C D are wrong, two VPC are in different regional, a transit gateway is not enoughAns is C. <br>The question is about resiliency of connection.<br>The connection goes from 2 VPC > Transit Gateway > DXGateway > VPN+DX connection (on-premise).<br><br>B is just a disaster recovery site to store copy of the primary site. Also terminating the VPN to a private gateway will not help the primary region.","upvote_count":"11","selected_answers":"Selected Answer: B"},{"id":636458,"date":"Mon 25 Jul 2022 07:56","username":"cen007","content":"Ans is C. <br>The question is about resiliency of connection.<br>The connection goes from 2 VPC > Transit Gateway > DXGateway > VPN+DX connection (on-premise).<br><br>B is just a disaster recovery site to store copy of the primary site. Also terminating the VPN to a private gateway will not help the primary region.","upvote_count":"1","selected_answers":""},{"id":627109,"date":"Mon 04 Jul 2022 20:50","username":"JonJon03sb333","content":"Secondary region is for disaster recovery. We're not associating the TGW with multiple regions, we are increasing the resiliency of the primary connection via a TGW/DXW/S2S VPNAnswer C specifically says to connect the \\\"VPCs\\\" to the TGW. That is completely wrong - can't do it. There are only two VPCs in the solution. One in the primary region and one in the secondary (DR) region. So with the creation of only one TGW, this is invalid. You would need a TGW in both Regions for this to work.","upvote_count":"21","selected_answers":"Selected Answer: C"},{"id":689684,"date":"Sat 08 Oct 2022 23:22","username":"sb333","content":"Answer C specifically says to connect the \\\"VPCs\\\" to the TGW. That is completely wrong - can't do it. There are only two VPCs in the solution. One in the primary region and one in the secondary (DR) region. So with the creation of only one TGW, this is invalid. You would need a TGW in both Regions for this to work.","upvote_count":"1","selected_answers":""},{"id":568183,"date":"Tue 15 Mar 2022 08:06","username":"riched99","content":"C: each VPC would need a TGW and there is no mention of a Transit VIF, the correct answer is B","upvote_count":"1","selected_answers":""},{"id":508081,"date":"Thu 23 Dec 2021 18:59","username":"vbalFuccon","content":"B makes for sense to remove SPOF.  2 issues with c & d; Transit Gateway is SPOF & It can't take connection from different regional VPCs.You do not need additional transit gateways for high availability, because transit gateways are highly available by design.<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-best-design-practices.html","upvote_count":"11","selected_answers":""},{"id":564108,"date":"Wed 09 Mar 2022 16:00","username":"Fuccon","content":"You do not need additional transit gateways for high availability, because transit gateways are highly available by design.<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-best-design-practices.html","upvote_count":"1","selected_answers":""},{"id":497770,"date":"Thu 09 Dec 2021 14:56","username":"cldy","content":"C.  Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Configure an AWS Site-to- Site VPN connection, and terminate it at the transit gateway.","upvote_count":"2","selected_answers":""},{"id":489840,"date":"Mon 29 Nov 2021 12:48","username":"ByomkeshDas","content":"They haven't asked that the backup connection must terminate in the secondary region, so there is no need to connect VPC's of the secondary region to the TGW. The existing VPCs (of main region) must connect to the TGW, it's enough. And why will you connect the S-toS VPN to only the secondary region (as per option-B)?<br>Option-C is correct.","upvote_count":"1","selected_answers":""},{"id":459789,"date":"Sat 06 Nov 2021 09:48","username":"student22","content":"C<br>Better redundancy than B. ","upvote_count":"2","selected_answers":""},{"id":455842,"date":"Thu 04 Nov 2021 16:37","username":"SmartphoneSmartphone","content":"Answer is B.  In question it tells about quickly. Use Site-to-Site VPN is a good approach to use in a failover situation. However, if you are using an AWS Site-to-Site VPN connection to a virtual gateway (VGW) that is associated with your Direct Connect gateway, you can use your VPN connection for failover.<br>https://aws.amazon.com/directconnect/faqs/After reading the AWS documentation, I am changing my answer. The Correct Anwer is C.  With option B, two site-to-site connections need to be created to make the connection for two VPCs.Option C provides a way to create a single site-to-site connection for both the VPC.  <br>Answer is C<br>https://aws.amazon.com/premiumsupport/knowledge-center/dx-configure-dx-and-vpn-failover-tgw/","upvote_count":"17","selected_answers":""},{"id":456104,"date":"Fri 05 Nov 2021 00:36","username":"Smartphone","content":"After reading the AWS documentation, I am changing my answer. The Correct Anwer is C.  With option B, two site-to-site connections need to be created to make the connection for two VPCs.Option C provides a way to create a single site-to-site connection for both the VPC.  <br>Answer is C<br>https://aws.amazon.com/premiumsupport/knowledge-center/dx-configure-dx-and-vpn-failover-tgw/","upvote_count":"7","selected_answers":""}]
    }
    ,
    {
        "question_id": "#770",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company in Europe plans to migrate its applications to the AWS Cloud. The company uses multiple AWS accounts for various business groups. A data privacy law requires the company to restrict developers' access to AWS European Regions only.<br>What should the solutions architect do to meet this requirement with the LEAST amount of management overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#770",
            "answers": [
        
        {
            "choice": "<p>A. Create IAM users and IAM groups in each account. Create IAM policies to limit access to non-European Regions. Attach the IAM policies to the IAM groups.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable AWS Organizations, attach the AWS accounts, and create OUs for European Regions and non-European Regions. Create SCPs to limit access to non-European Regions and attach the policies to the OUs.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Set up AWS Single Sign-On and attach AWS accounts. Create permission sets with policies to restrict access to non-European Regions. Create IAM users and IAM groups in each account.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Enable AWS Organizations, attach the AWS accounts, and create OUs for European Regions and non-European Regions. Create permission sets with policies to restrict access to non-European Regions. Create IAM users and IAM groups in the primary account.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429040,"date":"Sun 03 Oct 2021 16:20","username":"mericov","content":"B - \\\"This policy uses the Deny effect to deny access to all requests for operations that don't target one of the two approved regions (eu-central-1 and eu-west-1).\\\" https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region","upvote_count":"19","selected_answers":""},{"id":708738,"date":"Mon 31 Oct 2022 22:52","username":"SureNot","content":"B answer B is little bit weird. It's enough to have only one OU and attact SCP to it.<br>But having two two OUs with the same SCP is still ok.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":700828,"date":"Fri 21 Oct 2022 13:52","username":"tomosabc1tomosabc1","content":"C is correct.<br><br>B is wrong, because each account(meaning each business unit) has developers, meaning there are some IAM users in each account who has access to AWS European Regions only. There is no point to create OUs for European Regions and non-European Regions. We can simply create only one OU and attach SCP to that OU or root OU.https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region","upvote_count":"11","selected_answers":"Selected Answer: C"},{"id":700835,"date":"Fri 21 Oct 2022 14:06","username":"tomosabc1","content":"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region","upvote_count":"1","selected_answers":""},{"id":697402,"date":"Mon 17 Oct 2022 14:39","username":"Blair77","content":"+1 for BBB","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":515809,"date":"Mon 03 Jan 2022 14:57","username":"Ni_yot","content":"B defo. Use service control policies to restrict access to certain accounts","upvote_count":"2","selected_answers":""},{"id":514002,"date":"Fri 31 Dec 2021 10:43","username":"cldy","content":"B is correct.","upvote_count":"1","selected_answers":""},{"id":490631,"date":"Tue 30 Nov 2021 12:22","username":"acloudguru","content":"hope i can have this question in my exam","upvote_count":"1","selected_answers":""},{"id":470172,"date":"Fri 05 Nov 2021 08:03","username":"andypham","content":"B is correct","upvote_count":"1","selected_answers":""},{"id":455597,"date":"Tue 26 Oct 2021 14:09","username":"Liongeek","content":"BBBBBBBBBBBB","upvote_count":"1","selected_answers":""},{"id":449356,"date":"Mon 25 Oct 2021 07:28","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":446658,"date":"Wed 20 Oct 2021 10:33","username":"johnnsmithAMKazi","content":"How about non-developers if B is correct? SCP will restrict them as well. It has to be A. you can restrict which groups you want to deny access in the policy.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html","upvote_count":"11","selected_answers":""},{"id":533972,"date":"Thu 27 Jan 2022 18:27","username":"AMKazi","content":"you can restrict which groups you want to deny access in the policy.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html","upvote_count":"1","selected_answers":""},{"id":437302,"date":"Fri 15 Oct 2021 04:15","username":"tgv","content":"BBB<br>---","upvote_count":"4","selected_answers":""},{"id":429176,"date":"Thu 14 Oct 2021 14:35","username":"denccc","content":"would go for B","upvote_count":"4","selected_answers":""},{"id":428306,"date":"Sat 02 Oct 2021 01:56","username":"pkboy78","content":"I think it is B","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#771",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has several applications running in an on-premises data center. The data center runs a mix of Windows and Linux VMs managed by VMware vCenter.<br>A solutions architect needs to create a plan to migrate the applications to AWS. However, the solutions architect discovers that the document for the applications is not up to date and that there are no complete infrastructure diagrams. The company's developers lack time to discuss their applications and current usage with the solutions architect.<br>What should the solutions architect do to gather the required information?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#771",
            "answers": [
        
        {
            "choice": "<p>A. Deploy the AWS Server Migration Service (AWS SMS) connector using the OVA image on the VMware cluster to collect configuration and utilization data from the VMs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use the AWS Migration Portfolio Assessment (MPA) tool to connect to each of the VMs to collect the configuration and utilization data.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Install the AWS Application Discovery Service on each of the VMs to collect the configuration and utilization data.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Register the on-premises VMs with the AWS Migration Hub to collect configuration and utilization data.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":431867,"date":"Mon 11 Oct 2021 19:33","username":"Shanmahisergioandreslq","content":"Ans: C<br>Reason: AWS Application Discovery Service collects and presents configuration, usage, and behavior data from your servers to help you better understand your workloads.<br>Link: https://aws.amazon.com/application-discovery/answer C: it is the correct because AWS Application Discovery Service is used to collect data using Discovery Connector for VMWareor Discovery Agent for VMware, Hyper-V or Physical Server","upvote_count":"154","selected_answers":""},{"id":433816,"date":"Fri 15 Oct 2021 20:41","username":"sergioandreslq","content":"answer C: it is the correct because AWS Application Discovery Service is used to collect data using Discovery Connector for VMWareor Discovery Agent for VMware, Hyper-V or Physical Server","upvote_count":"4","selected_answers":""},{"id":692296,"date":"Tue 11 Oct 2022 19:28","username":"AwsBRFan","content":"I would to say C correct, but this seems a old question. D is wrong cuz you dont need register the servers, the discover connector brings this data to migration Hub.<br><br>Reference:<br>https://www.youtube.com/watch?v=aq6ohCf6PBo<br>https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-connector.html<br><br>\\\"We recommended that all customers currently using Discovery Connector transition to the new Agentless Collector. Customer's currently using Discovery Connector can continue to do so until Aug 31, 2023. After this date, data sent to AWS Application Discovery Service by Discovery Connector will not be processed. Going forward, Application Discovery Service Agentless Collector is the supported discovery tool for agentless data collection by AWS Application Discovery Service. \\\"","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":684352,"date":"Sat 01 Oct 2022 18:43","username":"dcdcdc3","content":"The Discovery connector VM is connected tovCenter not on all VMs but for the lack of better options it would be C","upvote_count":"1","selected_answers":""},{"id":555569,"date":"Thu 24 Feb 2022 22:17","username":"cannottellname","content":"Q: What data does the AWS Application Discovery Agentless Connector capture?<br><br>The AWS Application Discovery Agentless Connector is delivered as an Open Virtual Appliance (OVA) package that can be deployed to a VMware host. Once configured with credentials to connect to vCenter, the Discovery Connector collects VM inventory, configuration, and performance history such as CPU, memory, and disk usage and uploads it to Application Discovery Service data store.","upvote_count":"1","selected_answers":""},{"id":513962,"date":"Fri 31 Dec 2021 09:51","username":"cldy","content":"C: Application Discovery Service.","upvote_count":"1","selected_answers":""},{"id":497248,"date":"Thu 09 Dec 2021 00:56","username":"AzureDP900","content":"C is right!","upvote_count":"1","selected_answers":""},{"id":490503,"date":"Tue 30 Nov 2021 08:53","username":"acloudguru","content":"C, EASY ONE ,HOPE i can have it in my exam","upvote_count":"1","selected_answers":""},{"id":489816,"date":"Mon 29 Nov 2021 12:06","username":"Ni_yot","content":"C of cause.","upvote_count":"1","selected_answers":""},{"id":455598,"date":"Thu 04 Nov 2021 18:17","username":"Liongeek","content":"CCCCCCCCCCCCC","upvote_count":"1","selected_answers":""},{"id":451168,"date":"Sat 23 Oct 2021 17:45","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":449381,"date":"Sat 23 Oct 2021 03:22","username":"andylogan","content":"It's C","upvote_count":"1","selected_answers":""},{"id":437305,"date":"Wed 20 Oct 2021 00:56","username":"tgv","content":"CCC<br>---","upvote_count":"1","selected_answers":""},{"id":430302,"date":"Sat 25 Sep 2021 08:10","username":"zolthar_zzolthar_z","content":"Answer is D, Application discovery is oriented to map resources from on-premise to AWS Cloud, Migration hub helps to create migration plansSorry, Answer is C, Migration hub uses Application Discovery to collect the data","upvote_count":"15","selected_answers":""},{"id":430306,"date":"Sat 02 Oct 2021 10:05","username":"zolthar_z","content":"Sorry, Answer is C, Migration hub uses Application Discovery to collect the data","upvote_count":"5","selected_answers":""},{"id":430090,"date":"Wed 22 Sep 2021 06:05","username":"mericovvjawscertsergioandreslq","content":"A - Deploy SMS connector, then with Server Migration Service, you have automated, incremental and scheduled migrations towards AMI images which can be used to deploy EC2 instances. AWS SMS migrates VMware vSphere, Hyper-V and Azure VMs.They are just in the planning phase so no SMS needed here. My vote would be - C (that is the close one even not accurate as we can collect information with agentless connectors)A: it is incorrect because SMS is used to migrate servers not to collect data to plan the migration, in this case, the issue is: \\\"What should the solutions architect do to GATHER!!! the required information. <br>So, answer C is the correct because AWS Application Discovery Service is used to collect data using Discovery Connector for VMWareor Discovery Agent for VMware, Hyper-V or Physical Server","upvote_count":"311","selected_answers":""},{"id":434242,"date":"Fri 15 Oct 2021 21:28","username":"vjawscert","content":"They are just in the planning phase so no SMS needed here. My vote would be - C (that is the close one even not accurate as we can collect information with agentless connectors)","upvote_count":"1","selected_answers":""},{"id":433815,"date":"Thu 14 Oct 2021 04:34","username":"sergioandreslq","content":"A: it is incorrect because SMS is used to migrate servers not to collect data to plan the migration, in this case, the issue is: \\\"What should the solutions architect do to GATHER!!! the required information. <br>So, answer C is the correct because AWS Application Discovery Service is used to collect data using Discovery Connector for VMWareor Discovery Agent for VMware, Hyper-V or Physical Server","upvote_count":"1","selected_answers":""},{"id":429359,"date":"Tue 21 Sep 2021 19:52","username":"Rmukh","content":"No it is C","upvote_count":"2","selected_answers":""},{"id":428305,"date":"Tue 21 Sep 2021 19:47","username":"pkboy78pkboy78","content":"I think it is DYes I think C is correct","upvote_count":"12","selected_answers":""},{"id":431065,"date":"Sun 10 Oct 2021 20:24","username":"pkboy78","content":"Yes I think C is correct","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#772",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use<br>AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#772",
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
        "discusstion": [{"id":516872,"date":"Tue 04 Jan 2022 18:48","username":"AndySH","content":"A and C","upvote_count":"12","selected_answers":""},{"id":715060,"date":"Thu 10 Nov 2022 09:51","username":"janvandermerwer","content":"Process of elimination.<br><br>B - no - SCP's are not really for sharing resources.<br><br>D - No - \\\"peering transit gateway attachment\\\" - Meant to really be peering transit gateway to transit gateway.<br><br>E - No - Sure, you can configure service catalog via account factory, however that leaves the part out of automating the gateway attachment process (potentially)<br>https://controltower.aws-management.tools/networking/tgw/tgw-simple/","upvote_count":"1","selected_answers":"Selected Answer: AC"},{"id":686350,"date":"Tue 04 Oct 2022 19:24","username":"Ell89","content":"A & C<br>you need to share the TGW via the RAM.<br>the VPC TGW attachment needs to be associated with the TGW.","upvote_count":"3","selected_answers":"Selected Answer: AC"}]
    }
    ,
    {
        "question_id": "#773",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A scientific company needs to process text and image data from an Amazon S3 bucket. The data is collected from several radar stations during a live, time-critical phase of a deep space mission. The radar stations upload the data to the source S3 bucket. The data is prefixed by radar station identification number.<br>The company created a destination S3 bucket in a second account. Data must be copied from the source S3 bucket to the destination S3 bucket to meet a compliance objective. The replication occurs through the use of an S3 replication rule to cover all objects in the source S3 bucket.<br>One specific radar station is identified as having the most accurate data. Data replication at this radar station must be monitored for completion within 30 minutes after the radar station uploads the objects to the source S3 bucket.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#773",
            "answers": [
        
        {
            "choice": "<p>A. Set up an AWS DataSync agent to replicate the prefixed data from the source S3 bucket to the destination S3 bucket. Select to use all available bandwidth on the task, and monitor the task to ensure that it is in the TRANSFERRING status. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. In the second account, create another S3 bucket to receive data from the radar station with the most accurate data. Set up a new replication rule for this new S3 bucket to separate the replication from the other radar stations. Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Enable Amazon S3 Transfer Acceleration on the source S3 bucket, and configure the radar station with the most accurate data to use the new endpoint. Monitor the S3 destination bucket's TotalRequestLatency metric. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a new S3 replication rule on the source S3 bucket that filters for the keys that use the prefix of the radar station with the most accurate data. Enable S3 Replication Time Control (S3 RTC). Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429324,"date":"Thu 30 Sep 2021 19:42","username":"nl11121","content":"Answer is D - https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html","upvote_count":"10","selected_answers":""},{"id":433105,"date":"Tue 05 Oct 2021 01:01","username":"Jupi","content":"D - S3 Replication Time Control is designed to replicate 99.99% of objects within 15 minutes after upload, with the majority of those new objects replicated in seconds.","upvote_count":"5","selected_answers":""},{"id":623878,"date":"Tue 28 Jun 2022 11:35","username":"[Removed]","content":"Key: \\\"S3 Replication Time Control\\\"<br>\\\"S3 Replication Time Control is designed to replicate 99.99% of objects within 15 minutes after upload, with the majority of those new objects replicated in seconds\\\"<br><br>https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-s3-replication-time-control-for-predictable-replication-time-backed-by-sla","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":622878,"date":"Mon 27 Jun 2022 03:45","username":"kangtamo","content":"Agree with D. ","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":538183,"date":"Tue 01 Feb 2022 21:28","username":"Ni_yot","content":"D seems to work. https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html. not sure how A can help here. Once you setup data sync there is now to ensure it completes on time.","upvote_count":"1","selected_answers":""},{"id":530442,"date":"Sun 23 Jan 2022 11:23","username":"HellGate","content":"Answer is A<br>DataSync is designed for this kind of job.<br><br>https://cloudcompiled.com/tutorials/aws-datasync-transfer-data/<br>https://aws.amazon.com/blogs/storage/how-to-use-aws-datasync-to-migrate-data-between-amazon-s3-buckets/","upvote_count":"1","selected_answers":""},{"id":510371,"date":"Mon 27 Dec 2021 15:22","username":"Gaurav_GGG","content":"D only talks about precise data expedite transfer. How about rest of the data? No options talk about it. So i am little confused.","upvote_count":"1","selected_answers":""},{"id":497251,"date":"Thu 09 Dec 2021 01:02","username":"AzureDP900","content":"It is D","upvote_count":"1","selected_answers":""},{"id":449398,"date":"Wed 20 Oct 2021 12:01","username":"andylogan","content":"It's D","upvote_count":"1","selected_answers":""},{"id":435560,"date":"Mon 18 Oct 2021 00:32","username":"tgv","content":"DDD<br>---","upvote_count":"1","selected_answers":""},{"id":434705,"date":"Thu 07 Oct 2021 16:59","username":"blackgamer","content":"Yes, it is D. ","upvote_count":"1","selected_answers":""},{"id":428323,"date":"Wed 29 Sep 2021 23:07","username":"pkboy78","content":"I think it is D","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#774",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is serving files to its customer through an SFTP server that is accessible over the Internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached. Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses.<br>A solutions architect must implement a solution to improve availability, minimize the complexity of infrastructure management, and minimize the disruption to customers who access files. The solution must not change the way customers connect.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#774",
            "answers": [
        
        {
            "choice": "<p>A. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted, Internet-facing endpoint. Associate the SFTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by using the task definition, and place a Network Load Balancer (NLB) in front of the service. When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NLB.  Sync all files from the SFTP server to the S3 bucket.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used for SFTP file hosting. Create a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume. Configure the Auto Scaling group to automatically add instances behind the NLB.  Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429025,"date":"Thu 30 Sep 2021 19:00","username":"mericov","content":"I would say B.  Reasons: \\\"The EC2 instance also has an attached security group that allows access from all customer IP addresses\\\" - There is no option to put a security group in the publicly accessible endpoint (A).","upvote_count":"12","selected_answers":""},{"id":577756,"date":"Tue 29 Mar 2022 19:17","username":"jj22222","content":"BBBBBBBBBB","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":529109,"date":"Fri 21 Jan 2022 12:59","username":"tkanmani76tkanmani76","content":"Why B ? What does \\\"Attach the security group with customer IP addresses to the new endpoint.\\\" mean ? How do we attach so many IP addresses of customers ? And how will such solution minimize infra complexity ?<br>A looks reasonable. Some additional reading link https://aws.amazon.com/premiumsupport/knowledge-center/aws-sftp-endpoint-type/Realize their is SG with client IP already which can be attached to endpoint - Option B will give access through Elastic IP.","upvote_count":"22","selected_answers":""},{"id":529112,"date":"Fri 21 Jan 2022 13:06","username":"tkanmani76","content":"Realize their is SG with client IP already which can be attached to endpoint - Option B will give access through Elastic IP.","upvote_count":"2","selected_answers":""},{"id":497252,"date":"Thu 09 Dec 2021 01:04","username":"AzureDP900","content":"I will go with B","upvote_count":"1","selected_answers":""},{"id":449807,"date":"Mon 25 Oct 2021 23:55","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":439816,"date":"Fri 22 Oct 2021 03:01","username":"mgurkanandylogan","content":"How about availability? one EC2 does not provide high availability.It's hosted with managed AWS Transfer Family server and S3 now, no need for EC2 - then B","upvote_count":"11","selected_answers":""},{"id":449808,"date":"Fri 05 Nov 2021 02:44","username":"andylogan","content":"It's hosted with managed AWS Transfer Family server and S3 now, no need for EC2 - then B","upvote_count":"1","selected_answers":""},{"id":437326,"date":"Tue 19 Oct 2021 06:44","username":"tgv","content":"BBB<br>---","upvote_count":"1","selected_answers":""},{"id":434709,"date":"Wed 13 Oct 2021 03:45","username":"blackgamer","content":"B is correct. <br>https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html","upvote_count":"1","selected_answers":""},{"id":432278,"date":"Mon 04 Oct 2021 21:03","username":"tvs","content":"B. https://aws.amazon.com/premiumsupport/knowledge-center/aws-sftp-endpoint-type/","upvote_count":"2","selected_answers":""},{"id":431856,"date":"Sun 03 Oct 2021 14:03","username":"vjawscert","content":"Correct Answer: B<br>CD - Maintenance overhead with EC2<br>A -You can't use a static elastic ip with public hosted one (ref: https://aws.amazon.com/premiumsupport/knowledge-center/aws-sftp-endpoint-type/)","upvote_count":"2","selected_answers":""},{"id":431714,"date":"Sat 02 Oct 2021 04:43","username":"denccc","content":"Would go for B: https://aws.amazon.com/premiumsupport/knowledge-center/aws-sftp-endpoint-type/. Only this way you can use security groups to restrict sources.","upvote_count":"2","selected_answers":""},{"id":428329,"date":"Tue 28 Sep 2021 01:38","username":"pkboy78tvs","content":"It is AB.  Not able to attaché EIP to public facing SFTP endpoint of AWS Transfer Family server.","upvote_count":"12","selected_answers":""},{"id":432281,"date":"Wed 06 Oct 2021 01:14","username":"tvs","content":"B.  Not able to attaché EIP to public facing SFTP endpoint of AWS Transfer Family server.","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#775",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application distributed over several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The security team requires that all application access attempts be made available for analysis. Information about the client IP address, connection type, and user agent must be included.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#775",
            "answers": [
        
        {
            "choice": "<p>A. Enable EC2 detailed monitoring, and include network logs. Send all logs through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Enable VPC Flow Logs for all EC2 instance network interfaces. Publish VPC Flow Logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Enable Traffic Mirroring and specify all EC2 instance network interfaces as the source. Send all traffic information through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429189,"date":"Tue 19 Oct 2021 20:12","username":"dencccdenccc","content":"Would go for Chttps://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html","upvote_count":"85","selected_answers":""},{"id":429190,"date":"Fri 22 Oct 2021 16:21","username":"denccc","content":"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html","upvote_count":"5","selected_answers":""},{"id":725341,"date":"Wed 23 Nov 2022 19:38","username":"vid001","content":"C.  Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.","upvote_count":"1","selected_answers":""},{"id":626198,"date":"Sat 02 Jul 2022 16:59","username":"nm4u","content":"Only and Only C. ","upvote_count":"1","selected_answers":""},{"id":613034,"date":"Wed 08 Jun 2022 04:24","username":"Anhdd","content":"Clearly C","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":581159,"date":"Tue 05 Apr 2022 12:00","username":"Netaji","content":"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":534998,"date":"Sat 29 Jan 2022 00:18","username":"jj22222","content":"CCCCCCCCCCCCCC","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":521284,"date":"Tue 11 Jan 2022 05:56","username":"seyikseyik","content":"D<br>https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html<br>ES is used for analyzing the steamed logs not AthenaPlease ignore this post","upvote_count":"11","selected_answers":""},{"id":521287,"date":"Tue 11 Jan 2022 06:10","username":"seyik","content":"Please ignore this post","upvote_count":"1","selected_answers":""},{"id":499259,"date":"Sat 11 Dec 2021 10:22","username":"cldy","content":"C.  Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.","upvote_count":"1","selected_answers":""},{"id":497253,"date":"Thu 09 Dec 2021 01:07","username":"AzureDP900","content":"I will go with C","upvote_count":"1","selected_answers":""},{"id":449809,"date":"Fri 05 Nov 2021 14:59","username":"andylogan","content":"It's C","upvote_count":"2","selected_answers":""},{"id":435592,"date":"Thu 28 Oct 2021 17:38","username":"tgvlifehacker0777","content":"CCC<br>---i have a set of new sap c01 questions, how can i send. Thanks","upvote_count":"46","selected_answers":""},{"id":531333,"date":"Mon 24 Jan 2022 14:45","username":"lifehacker0777","content":"i have a set of new sap c01 questions, how can i send. Thanks","upvote_count":"6","selected_answers":""},{"id":428338,"date":"Thu 30 Sep 2021 15:25","username":"pkboy78","content":"It is C","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#776",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a legacy application on Amazon EC2 instances in multiple Availability Zones behind a software load balancer that runs on an active/standby set of EC2 instances. For disaster recovery, the company has created a warm standby version of the application environment that is deployed in another AWS<br>Region. The domain for the application uses a hosted zone from Amazon Route 53.<br>The company needs the application to use static IP addresses, even in the case of a failover event to the secondary Region. The company also requires the client's source IP address to be available for auditing purposes.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#776",
            "answers": [
        
        {
            "choice": "<p>A. Replace the software load balancer with an AWS Application Load Balancer. Create an AWS Global Accelerator accelerator. Add an endpoint group for each Region. Configure Route 53 health checks. Add an alias record that points to the accelerator.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Replace the software load balancer with an AWS Network Load Balancer. Create an AWS Global Accelerator accelerator. Add an endpoint group for each Region. Configure Route 53 health checks. Add a CNAME record that points to the DNS name of the accelerator.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Replace the software load balancer with an AWS Application Load Balancer. Use AWS Global Accelerator to create two separate accelerators. Add an endpoint group for each Region. Configure Route 53 health checks. Add a record set that is configured for active-passive DNS failover. Point the record set to the DNS names of the two accelerators.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Replace the software load balancer with an AWS Network Load Balancer. Use AWS Global Accelerator to create two separate accelerators. Add an endpoint group for each Region. Configure Route 53 health checks. Add a record set that is configured for weighted round-robin DNS failover. Point the record set to the DNS names of the two accelerators.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":433808,"date":"Wed 06 Oct 2021 06:47","username":"tvssashenkasashenkaMillariChuky64","content":"A.  https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.how-to-enable-preservation.html<br>Global Accelerator does not support client IP address preservation for Network Load Balancer and Elastic IP address endpoints.Furthermore, for those questioning that the GA will route to both endpoints in the endpoing group (Active region as well as the DR region ALB's), the GA can configure endpoints with weights for routing preference. By default they are set at 128 but one can configure one to send a tiny portion of your traffic to one endpoint and the rest to another endpoint, you might specify weights of 1 and 255. GA will route based on the weight unless to only healthy endpoints. Once the Primary region endpoint becomes unhealthy all traffic will route to the DRendpoint even though it has a weight of 1. The unhealthy endpoints assumes a weight of 0 during an unhealthy state.<br><br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.htmlThis clarifies it a bit more at the above link. So you can actually set the weight to 0's for the endpoint group in the DR and it will route to it in the event that Primary endpoint group becomes unhealthy.<br>\\\"If there are no healthy endpoints in an endpoint group that have a weight greater than zero, Global Accelerator tries to failover to a healthy endpoint with a weight greater than zero in another endpoint group. For this failover, Global Accelerator ignores the traffic dial setting. So if, for example, an endpoint group has a traffic dial set to zero, Global Accelerator still includes that endpoint group in the failover attempt.\\\"There are two types of endpoints that can preserve the source IP address of the client in incoming packets: Application Load Balancers and Amazon EC2 instances.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.htmlIf Global Accelerator detects that your application endpoint is failing in the primary AWS Region, it instantly triggers traffic re-routing to your application endpoint in the next available, closest AWS Region.","upvote_count":"112111","selected_answers":""},{"id":478374,"date":"Mon 15 Nov 2021 00:03","username":"sashenkasashenkaMillariChuky64","content":"Furthermore, for those questioning that the GA will route to both endpoints in the endpoing group (Active region as well as the DR region ALB's), the GA can configure endpoints with weights for routing preference. By default they are set at 128 but one can configure one to send a tiny portion of your traffic to one endpoint and the rest to another endpoint, you might specify weights of 1 and 255. GA will route based on the weight unless to only healthy endpoints. Once the Primary region endpoint becomes unhealthy all traffic will route to the DRendpoint even though it has a weight of 1. The unhealthy endpoints assumes a weight of 0 during an unhealthy state.<br><br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.htmlThis clarifies it a bit more at the above link. So you can actually set the weight to 0's for the endpoint group in the DR and it will route to it in the event that Primary endpoint group becomes unhealthy.<br>\\\"If there are no healthy endpoints in an endpoint group that have a weight greater than zero, Global Accelerator tries to failover to a healthy endpoint with a weight greater than zero in another endpoint group. For this failover, Global Accelerator ignores the traffic dial setting. So if, for example, an endpoint group has a traffic dial set to zero, Global Accelerator still includes that endpoint group in the failover attempt.\\\"There are two types of endpoints that can preserve the source IP address of the client in incoming packets: Application Load Balancers and Amazon EC2 instances.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.htmlIf Global Accelerator detects that your application endpoint is failing in the primary AWS Region, it instantly triggers traffic re-routing to your application endpoint in the next available, closest AWS Region.","upvote_count":"2111","selected_answers":""},{"id":478379,"date":"Mon 15 Nov 2021 00:14","username":"sashenkaMillari","content":"This clarifies it a bit more at the above link. So you can actually set the weight to 0's for the endpoint group in the DR and it will route to it in the event that Primary endpoint group becomes unhealthy.<br>\\\"If there are no healthy endpoints in an endpoint group that have a weight greater than zero, Global Accelerator tries to failover to a healthy endpoint with a weight greater than zero in another endpoint group. For this failover, Global Accelerator ignores the traffic dial setting. So if, for example, an endpoint group has a traffic dial set to zero, Global Accelerator still includes that endpoint group in the failover attempt.\\\"There are two types of endpoints that can preserve the source IP address of the client in incoming packets: Application Load Balancers and Amazon EC2 instances.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html","upvote_count":"11","selected_answers":""},{"id":628781,"date":"Fri 08 Jul 2022 15:10","username":"Millari","content":"There are two types of endpoints that can preserve the source IP address of the client in incoming packets: Application Load Balancers and Amazon EC2 instances.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html","upvote_count":"1","selected_answers":""},{"id":612700,"date":"Tue 07 Jun 2022 13:20","username":"Chuky64","content":"If Global Accelerator detects that your application endpoint is failing in the primary AWS Region, it instantly triggers traffic re-routing to your application endpoint in the next available, closest AWS Region.","upvote_count":"1","selected_answers":""},{"id":673239,"date":"Mon 19 Sep 2022 13:45","username":"skywalker","content":"A .<br><br>B and D are out coz : Global Accelerator does not support client IP address preservation for Network Load Balancer and Elastic IP address endpoints.<br><br>C is also out coz it create two seperate accelerators.. It need seperate endpoint in same accelerators instead.. <br><br>Thus answer is A","upvote_count":"1","selected_answers":""},{"id":631748,"date":"Fri 15 Jul 2022 14:30","username":"asfsdfsdfasfsdfsdf","content":"GA does not need two separate accelerators in order to route traffic between regions so C and D are out. <br>https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html#introduction-traffic-dials-weights<br>between A and B - A is out since GA with NLB cannot support IP preservation.<br>Also its better to use alias records with AWS resources.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.how-to-enable-preservation.htmlmy bad, B is out between A and B - the correct answer is A - GA with endpoints in each region pointing to the ALB + Alias record","upvote_count":"12","selected_answers":""},{"id":631749,"date":"Fri 15 Jul 2022 14:31","username":"asfsdfsdf","content":"my bad, B is out between A and B - the correct answer is A - GA with endpoints in each region pointing to the ALB + Alias record","upvote_count":"2","selected_answers":""},{"id":623903,"date":"Tue 28 Jun 2022 12:26","username":"TechX","content":"A for me","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":622804,"date":"Sun 26 Jun 2022 22:23","username":"kangtamo","content":"A sounds better.","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":614361,"date":"Fri 10 Jun 2022 08:16","username":"azurehunterazurehunter","content":"Answer is A.  Both GC and R53 can be used for Regional Active-Passive Failover. One GC fulfills all requirements, and do not need to create two GC. <br><br>Search keyword \\\"Global Accelerator\\\" in the link below:<br><br>https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.htmlshall be \\\"GA\\\"","upvote_count":"11","selected_answers":""},{"id":614362,"date":"Fri 10 Jun 2022 08:18","username":"azurehunter","content":"shall be \\\"GA\\\"","upvote_count":"1","selected_answers":""},{"id":592708,"date":"Wed 27 Apr 2022 01:06","username":"cloudude","content":"go with c","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":533693,"date":"Thu 27 Jan 2022 12:38","username":"pititcu667usmanbaigmughal","content":"going with c simply because of active failover. Not sure how you would do it with a.Option A is right. you can manage Active passive in Global accelerator by adding passive endpoint weight to 0.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html","upvote_count":"11","selected_answers":"Selected Answer: C"},{"id":553298,"date":"Mon 21 Feb 2022 22:57","username":"usmanbaigmughal","content":"Option A is right. you can manage Active passive in Global accelerator by adding passive endpoint weight to 0.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html","upvote_count":"1","selected_answers":""},{"id":527664,"date":"Wed 19 Jan 2022 16:29","username":"Clandestine60","content":"You don`t need DNS failover for Global accelerators. It handles failover it by default based on dials and weights you set for endpoint groups and endpoints respectively. <br>\\\"Failover<br>With a multi-Region active/active strategy, if your workload cannot operate in a Region, failover will route traffic away from the impacted Region to healthy Region(s). You can accomplish this with Route 53 by updating the DNS records. Make sure you set TTL (time to live) on these records low enough so that DNS resolvers will reflect your changes quickly enough to meet your RTO targets. Alternatively, you can use AWS Global Accelerator for routing and failover. It does not rely on DNS. Global Accelerator gives you two static IP addresses. You then configure which Regions user traffic goes to based on traffic dials and weights you set.\\\"<br>From https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iv-multi-site-active-active/","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":497254,"date":"Thu 09 Dec 2021 01:08","username":"AzureDP900","content":"A is right","upvote_count":"1","selected_answers":""},{"id":482478,"date":"Sat 20 Nov 2021 12:48","username":"ryu10_09","content":"***accelerator DOES NOT SUPPORT client ip address preservation for NLB*****<br>answer is B","upvote_count":"1","selected_answers":""},{"id":452564,"date":"Mon 01 Nov 2021 04:30","username":"Viper57","content":"An global accelerator supports multiple endpoints in different regions (which can be ALBs or NLBs, so two accelerators are not required. This leaves only A and B. <br><br>Between A and B, A is the better option as its easier to preserve the client IP with an ALB. <br><br>Answer: A<br><br>See - https://docs.aws.amazon.com/global-accelerator/latest/dg/getting-started.html#getting-started-add-endpoints","upvote_count":"2","selected_answers":""},{"id":449831,"date":"Wed 27 Oct 2021 11:19","username":"andyloganandylogan","content":"It's A - since one GA standard accelerator can config for multiple RegionsAnd warm standby mean a scaled down, but fully functional, copy of your production environment in another Region, so it can handle fail-over request","upvote_count":"11","selected_answers":""},{"id":449832,"date":"Thu 28 Oct 2021 21:28","username":"andylogan","content":"And warm standby mean a scaled down, but fully functional, copy of your production environment in another Region, so it can handle fail-over request","upvote_count":"1","selected_answers":""},{"id":448516,"date":"Tue 26 Oct 2021 05:35","username":"Pratap","content":"I will go with B<br>https://aws.amazon.com/global-accelerator/?blogs-global-accelerator.sort-by=item.additionalFields.createdDate&blogs-global-accelerator.sort-order=desc&aws-global-accelerator-wn.sort-by=item.additionalFields.postDateTime&aws-global-accelerator-wn.sort-order=desc","upvote_count":"1","selected_answers":""},{"id":442057,"date":"Fri 22 Oct 2021 11:32","username":"Bigbearcn","content":"A is correct. ALB preserve the source IP address of the client. So B is wrong. 1 GA is enough.","upvote_count":"3","selected_answers":""},{"id":441846,"date":"Fri 22 Oct 2021 02:27","username":"AkanshaR91","content":"C - https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.pdf","upvote_count":"1","selected_answers":""},{"id":441275,"date":"Thu 21 Oct 2021 07:46","username":"DerekKey","content":"In my opinion<br>C is correct<br>\\\"needs ... to use static IP addresses, ... a failover event to the secondary Region\\\" - means that primary is used and switched to secondary only if primary fails therefore you must use two separate GA and active-passive DNS failover","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#777",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company maintains a restaurant review website. The website is a single-page application where files are stored in Amazon S3 and delivered using Amazon<br>CloudFront. The company receives several fake postings every day that are manually removed.<br>The security team has identified that most of the fake posts are from bots with IP addresses that have a bad reputation within the same global region. The team needs to create a solution to help restrict the bots from accessing the website.<br>Which strategy should a solutions architect use?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#777",
            "answers": [
        
        {
            "choice": "<p>A. Use AWS Firewall Manager to control the CloudFront distribution security settings. Create a geographical block rule and associate it with Firewall Manager.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Associate an AWS WAF web ACL with the CloudFront distribution. Select the managed Amazon IP reputation rule group for the web ACL with a deny action.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use AWS Firewall Manager to control the CloudFront distribution security settings. Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Associate an AWS WAF web ACL with the CloudFront distribution. Create a rule group for the web ACL with a geographical match statement with a deny action.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":429436,"date":"Tue 28 Sep 2021 13:22","username":"Rmukhsergioandreslq","content":"Answer is BB: WAF with CloudFront using WebACL with Amazon IP reputation List which:<br>IP reputation rule groups allow you to block requests based on their source. Choose one or more of these rule groups if you want to reduce your exposure to BOTS!!!! traffic or exploitation attempts","upvote_count":"126","selected_answers":""},{"id":433859,"date":"Sat 09 Oct 2021 21:44","username":"sergioandreslq","content":"B: WAF with CloudFront using WebACL with Amazon IP reputation List which:<br>IP reputation rule groups allow you to block requests based on their source. Choose one or more of these rule groups if you want to reduce your exposure to BOTS!!!! traffic or exploitation attempts","upvote_count":"6","selected_answers":""},{"id":587328,"date":"Sun 17 Apr 2022 19:48","username":"azure_kai","content":"B<br>https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-ip-rep.html","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":547715,"date":"Tue 15 Feb 2022 12:44","username":"pititcu667","content":"You really do not need the firewall manager. It makes no mention of multiple accounts, hence waf with reputation is good enough.","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":530398,"date":"Sun 23 Jan 2022 10:07","username":"HellGatefuten0326","content":"my answer is C. <br>I think WAF is good combination with CloudFront but WAF is best at blocking massive attacks like DDoS. Question is about blocking fraudulent postings, so AWS Firewall Manager can be proper choice over WAF. WAF = SQL Injections, Cross-Site Scripting, Geolocation Blocks, Rate Awareness<br><br>AWS Shield = Provides AWS resources with DDoS protection","upvote_count":"11","selected_answers":""},{"id":546846,"date":"Mon 14 Feb 2022 02:45","username":"futen0326","content":"WAF = SQL Injections, Cross-Site Scripting, Geolocation Blocks, Rate Awareness<br><br>AWS Shield = Provides AWS resources with DDoS protection","upvote_count":"1","selected_answers":""},{"id":497255,"date":"Thu 09 Dec 2021 01:09","username":"AzureDP900","content":"B is right","upvote_count":"1","selected_answers":""},{"id":451163,"date":"Tue 02 Nov 2021 00:55","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":449833,"date":"Sat 30 Oct 2021 15:57","username":"andylogan","content":"It's B","upvote_count":"1","selected_answers":""},{"id":440367,"date":"Tue 26 Oct 2021 18:49","username":"student22","content":"B<br>The Amazon IP reputation list rule group contains rules that are based on Amazon internal threat intelligence. This is useful if you would like to block IP addresses typically associated with bots or other threats. Inspects for a list of IP addresses that have been identified as bots by Amazon threat intelligence.","upvote_count":"2","selected_answers":""},{"id":435581,"date":"Sun 24 Oct 2021 05:41","username":"tgv","content":"BBB<br>---","upvote_count":"3","selected_answers":""},{"id":434766,"date":"Wed 20 Oct 2021 15:01","username":"denccc","content":"It's B","upvote_count":"1","selected_answers":""},{"id":434732,"date":"Tue 19 Oct 2021 08:12","username":"blackgamer","content":"IT is B. ","upvote_count":"1","selected_answers":""},{"id":434730,"date":"Sat 16 Oct 2021 14:49","username":"blackgamer","content":"It is B.  IT Reputation rule.","upvote_count":"1","selected_answers":""},{"id":430134,"date":"Fri 01 Oct 2021 03:02","username":"dotchiblackgamer","content":"I will go with D.  IP reputation comes from Threat intelligence, this is not mentioned as the source.D is wrong, the IP coming from same region, only that those IPs are in bad reputation IP list.","upvote_count":"11","selected_answers":""},{"id":434731,"date":"Mon 18 Oct 2021 13:08","username":"blackgamer","content":"D is wrong, the IP coming from same region, only that those IPs are in bad reputation IP list.","upvote_count":"1","selected_answers":""},{"id":429006,"date":"Sat 25 Sep 2021 22:40","username":"mericovzolthar_z","content":"I would say D - reason: \\\"that have a bad reputation within the same global region\\\"If You use Geo Match Will block the entire region. Even You can add whitelist... For this escenario is better answer B","upvote_count":"23","selected_answers":""},{"id":430354,"date":"Sat 02 Oct 2021 20:23","username":"zolthar_z","content":"If You use Geo Match Will block the entire region. Even You can add whitelist... For this escenario is better answer B","upvote_count":"3","selected_answers":""},{"id":428357,"date":"Sat 25 Sep 2021 08:19","username":"pkboy78","content":"yes I think it is B","upvote_count":"4","selected_answers":""},{"id":427813,"date":"Fri 24 Sep 2021 12:20","username":"mate_kims","content":"my answer is B","upvote_count":"4","selected_answers":""}]
    }
    ,
    {
        "question_id": "#778",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon<br>DynamoDB table. The application is showing an increase in the number of errors during PUT requests. Most of the PUT calls come from a small number of clients that are authenticated with specific API keys.<br>A solutions architect has identified that a large number of the PUT requests originate from one client. The API is noncritical, and clients can tolerate retries of unsuccessful calls. However, the errors are displayed to customers and are causing damage to the API's reputation.<br>What should the solutions architect recommend to improve the customer experience?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#778",
            "answers": [
        
        {
            "choice": "<p>A. Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Implement API throttling through a usage plan at the API Gateway level. Ensure that the client application handles code 429 replies without error.<br></p>",
            "correct": false,
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
        "discusstion": [{"id":513779,"date":"Fri 31 Dec 2021 00:32","username":"Firelord","content":"Put can’t be cached, better throttling","upvote_count":"11","selected_answers":""},{"id":545588,"date":"Sat 12 Feb 2022 02:02","username":"RVivek","content":"Answer A. Custermer can accept delay /even failed attempts.<br>https://aws.amazon.com/premiumsupport/knowledge-center/aws-batch-requests-error/","upvote_count":"7","selected_answers":""},{"id":704098,"date":"Tue 25 Oct 2022 20:32","username":"Blair77","content":"AAA - all the information here: <br>https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-429-limit/","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":695624,"date":"Sat 15 Oct 2022 20:54","username":"wassb","content":"I would go for A since the throttling can affect the other clients. <br>Answer B would have been more accurate if we were using the API key specific to the client for the usage plan.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":690793,"date":"Mon 10 Oct 2022 09:04","username":"skywalker","content":"A.  <br>B.  is not ok since large number of the PUT requests originate from one client... Having Usage Plan to control throttle will not help.<br>C. No clue.<br>D. Problem is not Lambda issue","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":679495,"date":"Mon 26 Sep 2022 09:17","username":"joancarles","content":"Usage plans seems the best way to improve the customer experience. Option A doesn't fix nothing in this sense, so I go for B here.","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":631973,"date":"Sat 16 Jul 2022 04:06","username":"wannaaws","content":"Concern is \\\"faults are visible to clients, jeopardizing the API's reputation\\\", implies no failure should/error be made visible to client. App can retry from backend in event of 429. Hence B is preferred.","upvote_count":"2","selected_answers":""},{"id":586228,"date":"Fri 15 Apr 2022 09:28","username":"Hasitha99","content":"API gateway support based on customers (since they are using API keys)","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":562548,"date":"Mon 07 Mar 2022 11:53","username":"pat100user0001","content":"Answer B - <br>1) REST API - allows Usage Plan and API Keys - which help enable throttle requests - by request per second or burst requests<br>2) API Keys can be associated to client <br>3) When client submit requests breaching defined threshold, they will receive 429 - client error, NOT API server error - This is the key requirement as server errors dents API reputation<br>Clients can catch such exceptions [429 Too Many Requests error responses ], the client can resubmit the failed requests in a way that is rate limiting<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.htmlB, since we know the majority of them are coming from 1 client, B will solve the issue","upvote_count":"52","selected_answers":""},{"id":598601,"date":"Sun 08 May 2022 17:26","username":"user0001","content":"B, since we know the majority of them are coming from 1 client, B will solve the issue","upvote_count":"2","selected_answers":""},{"id":562461,"date":"Mon 07 Mar 2022 09:13","username":"Dohecadi","content":"A is correct.<br><br>Three points from the question:<br>a) The application is seeing an increase in the amount of PUT request failures.<br>b) However, the faults are visible to clients, jeopardizing the API's reputation.<br>It also says:<br>c) The API is not mission-critical, and customers may accept failed call retries.<br><br>A.  From point \\\"c\\\" above, retries are permissable.<br>B.  From point \\\"b\\\" above, throttling even further will only make it worse.<br>C.  From point \\\"a\\\" above, caching on API is best suited for GET rqeuests.<br>D.  Problem is with API Gateway not Lambda.","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":525689,"date":"Mon 17 Jan 2022 11:27","username":"GeniusMikeLiuGeniusMikeLiu","content":"A or B??should be A.  customer can accept retry.","upvote_count":"11","selected_answers":""},{"id":525690,"date":"Mon 17 Jan 2022 11:28","username":"GeniusMikeLiu","content":"should be A.  customer can accept retry.","upvote_count":"1","selected_answers":""},{"id":518185,"date":"Thu 06 Jan 2022 12:31","username":"Smartphone","content":"A seems a better approach.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#779",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical company is running an application in the AWS Cloud. The application simulates the effect of medical drugs in development.<br>The application consists of two parts: configuration and simulation. The configuration part runs in AWS Fargate containers in an Amazon Elastic Container Service<br>(Amazon ECS) cluster. The simulation part runs on large, compute optimized Amazon EC2 instances. Simulations can restart if they are interrupted.<br>The configuration part runs 24 hours a day with a steady load. The simulation part runs only for a few hours each night with a variable load. The company stores simulation results in Amazon S3, and researchers use the results for 30 days. The company must store simulations for 10 years and must be able to retrieve the simulations within 5 hours.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#779",
            "answers": [
        
        {
            "choice": "<p>A. Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Intelligent-Tiering.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part and the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Purchase Compute Savings Plans to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Purchase Compute Savings Plans to cover the usage for the configuration part. Purchase EC2 Reserved Instances for the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier Deep Archive.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":554145,"date":"Wed 23 Feb 2022 03:38","username":"AndySHwassbYamchiAnhdd","content":"C is correct.<br>A is wrong: \\\"older than 30 days to S3 Intelligent-Tiering.\\\"- Good for unpredictable retrieval requirements. Not cost effective.<br>B is wrong: Savings Plan to cover also for simulation part which can be interrupted and restarted - Not cost effective.<br>D is wrong: \\\"be able to recover them within five hours\\\". Glacier Deep Archive retrieval time within 12 hours. Does not meet the requirements.C is correct. <br>A,B are automatically ruled out since EC2 instance savings plans doesnt apply to FargateC is correct.agree with you, C should be the best option here","upvote_count":"11111","selected_answers":""},{"id":695629,"date":"Sat 15 Oct 2022 21:00","username":"wassb","content":"C is correct. <br>A,B are automatically ruled out since EC2 instance savings plans doesnt apply to Fargate","upvote_count":"1","selected_answers":""},{"id":584891,"date":"Tue 12 Apr 2022 21:46","username":"Yamchi","content":"C is correct.","upvote_count":"1","selected_answers":""},{"id":612536,"date":"Tue 07 Jun 2022 02:53","username":"Anhdd","content":"agree with you, C should be the best option here","upvote_count":"1","selected_answers":""},{"id":637544,"date":"Tue 26 Jul 2022 19:35","username":"hilft","content":"C.  spot/s3 glacier","upvote_count":"1","selected_answers":""},{"id":625255,"date":"Thu 30 Jun 2022 14:43","username":"aandc","content":"C<br>can be interrupted and restarted ->Spot Instances","upvote_count":"1","selected_answers":""},{"id":623551,"date":"Tue 28 Jun 2022 02:03","username":"kangtamo","content":"Agree with C: 30 days / S3 Glacier","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":612537,"date":"Tue 07 Jun 2022 02:55","username":"Anhdd","content":"C is good for simulation part which can be interrupted and restarted + data retrieve within 5 hours -> best cost-effective","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":592929,"date":"Wed 27 Apr 2022 08:59","username":"JYZ","content":"No option is good. (see s3 glacier retrieval time from https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/amazon-s3-glacier.html","upvote_count":"1","selected_answers":""},{"id":527281,"date":"Wed 19 Jan 2022 08:09","username":"Milind","content":"B is correct, C mentioned spot instance <br>D mentioned deep archive that requires 11 hours for retrieval.","upvote_count":"1","selected_answers":""},{"id":523587,"date":"Fri 14 Jan 2022 16:09","username":"gm","content":"Correct answer is C,","upvote_count":"3","selected_answers":""},{"id":520103,"date":"Sun 09 Jan 2022 11:23","username":"tkanmani76","content":"C is correct - https://aws.amazon.com/about-aws/whats-new/2019/03/S3-glacier-deep-archive/ takes 12 hr so D is not right.","upvote_count":"2","selected_answers":""},{"id":518007,"date":"Thu 06 Jan 2022 08:03","username":"SoumyashreeStudent1950","content":"If a simulation is interrupted, it may be restarted.-- C mentions Spot Instances, I go for DI believe simulation can be restarted if interrupted with the selection of spot instances. I would go with C","upvote_count":"22","selected_answers":""},{"id":535073,"date":"Sat 29 Jan 2022 02:31","username":"Student1950","content":"I believe simulation can be restarted if interrupted with the selection of spot instances. I would go with C","upvote_count":"2","selected_answers":""},{"id":511706,"date":"Wed 29 Dec 2021 02:50","username":"techn00b","content":"Answer isC-5 hours of retrieval time <br>https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/amazon-s3-glacier.html","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#780",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.<br>Because of regulatory requirements, all resources that the company deploys in the organization must reside in the ap-northeast-1 Region. Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.<br>A solutions architect must implement a solution that applies these restrictions. The solution must maximize operational efficiency and must minimize ongoing maintenance.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#780",
            "answers": [
        
        {
            "choice": "<p>A. Create an IAM role in one account under the DataOps OU. Use the ec2:InstanceType condition key in an inline policy on the role to restrict access to specific instance type.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an IAM user in all accounts under the root OU. Use the aws:RequestedRegion condition key in an inline policy on each user to restrict access to all AWS Regions except ap-northeast-1.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an SCP. Use the aws:RequestedRegion condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an SCP. Use the ec2:Region condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU, the DataOps OU, and the Research OU.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Create an SCP. Use the ec2:InstanceType condition key to restrict access to specific instance types. Apply the SCP to the DataOps OU.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":538376,"date":"Wed 02 Feb 2022 05:06","username":"gsaini","content":"C & E should be right answer.","upvote_count":"7","selected_answers":""},{"id":714882,"date":"Thu 10 Nov 2022 03:39","username":"janvandermerwer","content":"C - Yes - Apply once to Root OU which will propogate to all accounts \\\"Because of regulatory requirements, ALL resources\\\"<br>E - Yes - Logical remaining answer<br><br>A - High overhead<br>B - High overhead<br>D - Wrong as you'll need to add the policy multiple times to different OUs, compared to adding once (More operational overhead)","upvote_count":"1","selected_answers":"Selected Answer: CE"},{"id":682044,"date":"Wed 28 Sep 2022 20:57","username":"gnandam","content":"C& E<br>- https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-requested-region.html","upvote_count":"1","selected_answers":""},{"id":644451,"date":"Tue 09 Aug 2022 12:24","username":"gondohwe","content":"combination of C,E make sense","upvote_count":"1","selected_answers":""},{"id":582826,"date":"Fri 08 Apr 2022 12:58","username":"Hasitha99","content":"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_ec2.html)","upvote_count":"2","selected_answers":"Selected Answer: CE"},{"id":537880,"date":"Tue 01 Feb 2022 14:29","username":"RVivek","content":"C & E. <br>B: Wrong . Creating user ccount in each account and adding and in line policy for each account is too much adminstrative work","upvote_count":"1","selected_answers":""},{"id":537877,"date":"Tue 01 Feb 2022 14:27","username":"RVivek","content":"C & E. ","upvote_count":"1","selected_answers":""},{"id":515259,"date":"Sun 02 Jan 2022 23:45","username":"Buggie","content":"C and E. ","upvote_count":"2","selected_answers":""},{"id":514836,"date":"Sun 02 Jan 2022 06:18","username":"guruaws2021","content":"The answer should be CE here","upvote_count":"1","selected_answers":""},{"id":513742,"date":"Thu 30 Dec 2021 22:36","username":"Firelord","content":"C & É (https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_ec2.html)","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#781",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting an image-processing service on AWS in a VPC.  The VPC extends across two Availability Zones. Each Availability Zone contains one public subnet and one private subnet.<br>The service runs on Amazon EC2 instances in the private subnets. An Application Load Balancer in the public subnets is in front of the service. The service needs to communicate with the internet and does so through two NAT gateways. The service uses Amazon S3 for image storage. The EC2 instances retrieve approximately 1 ׀¢׀’ of data from an S3 bucket each day.<br>The company has promoted the service as highly secure. A solutions architect must reduce cloud expenditures as much as possible without compromising the service's security posture or increasing the time spent on ongoing operations.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#781",
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
            "choice": "<p>C. Set up an S3 gateway VPC endpoint in the VPC.  Attach an endpoint policy to the endpoint to allow the required actions on the S3 bucket.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Attach an Amazon Elastic File System (Amazon EFS) volume to the EC2 instances. Host the image on the EFS volume.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":532384,"date":"Tue 25 Jan 2022 21:17","username":"Ni_yot","content":"my bad meant to say C. ","upvote_count":"10","selected_answers":""},{"id":624371,"date":"Wed 29 Jun 2022 04:10","username":"TechX","content":"Answer: C<br>Explanation:<br>Create Amazon S3 gateway endpoint in the VPC and add a VPC endpoint policy. This VPC endpoint policy will have a statement that allows S3 access only via access points owned by the organization.","upvote_count":"3","selected_answers":"Selected Answer: C"},{"id":543437,"date":"Wed 09 Feb 2022 01:27","username":"Bigbearcn","content":"It's C. ","upvote_count":"3","selected_answers":""},{"id":532383,"date":"Tue 25 Jan 2022 21:16","username":"Ni_yot","content":"A for me. you dont want to replace the NAT gw with an instance. More administration. And you definitely dont want to move instances to the public subnet. You dont attach EBS voulmes to EC2 instances","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#782",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching.<br>Management requires a single report showing the patch status of all the servers and instances.<br>Which set of actions should a solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#782",
            "answers": [
        
        {
            "choice": "<p>A. Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.<br></p>",
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
        "discusstion": [{"id":533049,"date":"Wed 26 Jan 2022 17:26","username":"kubala","content":"surely A https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html","upvote_count":"6","selected_answers":"Selected Answer: A"},{"id":512842,"date":"Thu 30 Dec 2021 00:16","username":"padelGeniusMikeLiu","content":"A for meA right. SSM does support on-premise machines.","upvote_count":"52","selected_answers":""},{"id":528144,"date":"Thu 20 Jan 2022 05:56","username":"GeniusMikeLiu","content":"A right. SSM does support on-premise machines.","upvote_count":"2","selected_answers":""},{"id":693137,"date":"Wed 12 Oct 2022 15:53","username":"Blair77","content":"A- SSM all the way!","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":686361,"date":"Tue 04 Oct 2022 19:53","username":"Ell89","content":"answer is A","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":511713,"date":"Wed 29 Dec 2021 03:11","username":"techn00b","content":"Answer is B","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#783",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a large containerized workload in the AWS Cloud. The workload consists of approximately 100 different services. The company uses<br>Amazon Elastic Container Service (Amazon ECS) to orchestrate the workload.<br>Recently, the company's development team started using AWS Fargate instead of Amazon EC2 instances in the ECS cluster. In the past, the workload has come close to running the maximum number of EC2 instances that are available in the account.<br>The company is worried that the workload could reach the maximum number of ECS tasks that are allowed. A solutions architect must implement a solution that will notify the development team when Fargate reaches 80% of the maximum number of tasks.<br>What should the solutions architect do to meet this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#783",
            "answers": [
        
        {
            "choice": "<p>A. Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/ SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an AWS Lambda function to poll detailed metrics form the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon Simple Email Service (Amazon SES) to notify the development team.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":688986,"date":"Sat 08 Oct 2022 04:28","username":"sb333","content":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Quotas-Visualize-Alarms.html#:~:text=(Optional)%20To%20set,Create%20alarm.","upvote_count":"4","selected_answers":"Selected Answer: B"},{"id":553988,"date":"Tue 22 Feb 2022 21:15","username":"usmanbaigmughal","content":"B,<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Quotas-Visualize-Alarms.html","upvote_count":"3","selected_answers":""},{"id":513773,"date":"Fri 31 Dec 2021 00:19","username":"glider79","content":"Answer is B, see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Quotas-Visualize-Alarms.html","upvote_count":"3","selected_answers":""},{"id":511716,"date":"Wed 29 Dec 2021 03:25","username":"techn00b","content":"Answer is B","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#784",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a large number of AWS accounts in an organization in AWS Organizations. A different business group owns each account. All the AWS accounts are bound by legal compliance requirements that restrict all operations outside the eu-west-2 Region.<br>The company's security team has mandated the use of AWS Systems Manager Session Manager across all AWS accounts.<br>Which solution should a solutions architect recommend to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#784",
            "answers": [
        
        {
            "choice": "<p>A. Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. In AWS Organizations, apply the SCP to the root of the organization.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. For each AWS account, use the AmNotLike condition key to add the ARN of the IAM role that is associated with the Session Manager instance profile to the condition element of the SCP. In AWS Organizations apply, the SCP to the root of the organization.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. In AWS Organizations, apply the SCP to the root of the organization. In each AWS account, create an IAM permissions boundary that allows access to the IAM role that is associated with the Session Manager instance profile.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. For each AWS account, create an IAM permissions boundary that denies access to all requests that do not target eu-west-2. For each AWS account, apply the permissions boundary to the IAM role that is associated with the Session Manager instance profile.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":714756,"date":"Wed 09 Nov 2022 18:11","username":"mrgreatness","content":"A for me, does what is asked","upvote_count":"1","selected_answers":""},{"id":711139,"date":"Fri 04 Nov 2022 13:42","username":"SureNot","content":"Choosing between A and B. .<br>Can't see a condition or any reason SSM should AVOID region restriction - so A. ","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":705206,"date":"Thu 27 Oct 2022 05:59","username":"nsvijay04b1","content":"A) SSM not handled.<br>B) region + SSM handled in SCP at root level ( ques says 'mandated')<br>C) region handled at root with SCP+ SSM left for accounts tohandle( not 'mandated') and permission boundary cannot give perm if SCP denies it<br>D) not at all centrally managed , needs SCP","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":631832,"date":"Fri 15 Jul 2022 17:03","username":"asfsdfsdfasfsdfsdf","content":"D will not work for sure - its applied to session manager only<br>C will not work also its aagain applied to SSM profile and it will not grant access<br>its either A or B - for B it means we will allow the SSM ARN role to work on all regions<br>only A left as the correct option - it will deny access to all regions with exception of eu-west-2 no need to do anything else as SSM is already allowed by SCP by default<br>A - means we deny all access to other regions -if question was stated the <br>The company's security team has required that all AWS accounts utilize AWS Systems Manager Session Manager on all regions - I would choose B","upvote_count":"21","selected_answers":"Selected Answer: A"},{"id":631833,"date":"Fri 15 Jul 2022 17:04","username":"asfsdfsdf","content":"if question was stated the <br>The company's security team has required that all AWS accounts utilize AWS Systems Manager Session Manager on all regions - I would choose B","upvote_count":"1","selected_answers":""},{"id":616325,"date":"Tue 14 Jun 2022 19:21","username":"Ddssssss","content":"Its not B because that would apply the SCP for all users except The session manager IAM which would allow that account to do whatever it wants. I would say \\\"D\\\", why cant a simple permissions boundary simply deny access for sessions manager to all other regions? Why does it need an SCP?","upvote_count":"1","selected_answers":""},{"id":559706,"date":"Wed 02 Mar 2022 22:59","username":"DLML","content":"I am not too convinced with C nor A. How about B?SCP will have deny to run EC2 with condition ArnNotLike the session-manager-profile-role","upvote_count":"3","selected_answers":""},{"id":555149,"date":"Thu 24 Feb 2022 09:59","username":"Alexey79bobsmith2000SeanQiSeanQiuser0001Ddssssss","content":"It's C. <br><br>1. Create SCP policy to privent denies access to any operations outside of the specified Region.<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region<br><br>2. Create IAM Policy in each account from making certain changes<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html<br>“<br>security team has required that all AWS accounts utilize AWS Systems Manager Session Manager <br>“<br>IAM must be configured to allow access.C doesn't grant permission and don't override SCPyes, C is missing granting permission from iam role, but it's not the point here. choosing C over B is to reduce the complexity of the setupI mean: choose B over C to reduce the complexityB<br>C is not a scalable solution, plus the root account can change itBoundaries restrict access, they do not allow access.","upvote_count":"221123","selected_answers":""},{"id":602236,"date":"Sun 15 May 2022 19:53","username":"bobsmith2000SeanQiSeanQi","content":"C doesn't grant permission and don't override SCPyes, C is missing granting permission from iam role, but it's not the point here. choosing C over B is to reduce the complexity of the setupI mean: choose B over C to reduce the complexity","upvote_count":"211","selected_answers":""},{"id":622897,"date":"Mon 27 Jun 2022 04:36","username":"SeanQiSeanQi","content":"yes, C is missing granting permission from iam role, but it's not the point here. choosing C over B is to reduce the complexity of the setupI mean: choose B over C to reduce the complexity","upvote_count":"11","selected_answers":""},{"id":622900,"date":"Mon 27 Jun 2022 04:39","username":"SeanQi","content":"I mean: choose B over C to reduce the complexity","upvote_count":"1","selected_answers":""},{"id":599815,"date":"Wed 11 May 2022 03:33","username":"user0001","content":"B<br>C is not a scalable solution, plus the root account can change it","upvote_count":"2","selected_answers":""},{"id":616321,"date":"Tue 14 Jun 2022 19:17","username":"Ddssssss","content":"Boundaries restrict access, they do not allow access.","upvote_count":"3","selected_answers":""},{"id":535165,"date":"Sat 29 Jan 2022 05:05","username":"Bigbearcnbobsmith2000","content":"It's C. Permission boundaries don't grant permission and don't override SCP","upvote_count":"22","selected_answers":""},{"id":602238,"date":"Sun 15 May 2022 19:54","username":"bobsmith2000","content":"Permission boundaries don't grant permission and don't override SCP","upvote_count":"2","selected_answers":""},{"id":527536,"date":"Wed 19 Jan 2022 14:38","username":"GeniusMikeLiuusmanbaigmughaltimlow84user0001","content":"why A?Because in A there is no solution for Session managers. C answer cover both Regional restriction and Session managers.why not C?root account can change it","upvote_count":"1311","selected_answers":""},{"id":553992,"date":"Tue 22 Feb 2022 21:27","username":"usmanbaigmughal","content":"Because in A there is no solution for Session managers. C answer cover both Regional restriction and Session managers.","upvote_count":"3","selected_answers":""},{"id":534458,"date":"Fri 28 Jan 2022 07:25","username":"timlow84user0001","content":"why not C?root account can change it","upvote_count":"11","selected_answers":""},{"id":599816,"date":"Wed 11 May 2022 03:33","username":"user0001","content":"root account can change it","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#785",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations. The company has an organization that has a central management account. The company plans to provision multiple AWS accounts for different departments. All department accounts must be a member of the company's organization.<br>Compliance requirements state that each account must have only one VPC.  Additionally, each VPC must have an identical network security configuration that includes fully configured subnets, gateways, network ACLs, and security groups.<br>The company wants this security setup to be automatically applied when a new department account is created. The company wants to use the central management account for all security operations, but the central management account should not have the security setup.<br>Which approach meets these requirements with the LEAST amount of setup?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#785",
            "answers": [
        
        {
            "choice": "<p>A. Create an OU within the company's organization. Add department accounts to the OU. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create a CloudFormation stack set by using this template file with automated deployment enabled. Apply the CloudFormation stack set to the OU.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a new organization with the central management account. Invite all AWS department accounts into the new organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create a CloudFormation stack that is based on this template. Apply the CloudFormation stack to the newly created organization.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Invite department accounts to the company's organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create an AWS CodePipeline pipeline that will deploy the network security setup to the newly created account. Specify the creation of an account as an event hook. Apply the event hook to the pipeline.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Invite department accounts to the company's organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create an AWS Lambda function that will deploy the VPC and the network security setup to the newly created account. Create an event that watches for account creation. Configure the event to invoke the pipeline.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":686362,"date":"Tue 04 Oct 2022 19:59","username":"Ell89","content":"A<br>C&D mention inviting accounts into the org. it doesnt state anywhere this needs to be done, says new accounts are to be provisioned.<br>B mentions creating an org, but there already is one.<br>leaves A by default.","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":631836,"date":"Fri 15 Jul 2022 17:13","username":"asfsdfsdf","content":"only A mention CF automatic deployment - Also the organization already has a management accounts and it about to create new ones \\\"The organization intends to create many Amazon Web Services accounts for various departments\\\"so no need to invite or create a new ORG","upvote_count":"4","selected_answers":"Selected Answer: A"},{"id":536003,"date":"Sun 30 Jan 2022 09:17","username":"cannottellname","content":"AAAAAA","upvote_count":"1","selected_answers":""},{"id":529696,"date":"Sat 22 Jan 2022 09:44","username":"tkanmani76tkanmani76","content":"A - https://aws.amazon.com/blogs/aws/new-use-aws-cloudformation-stacksets-for-multiple-accounts-in-an-aws-organization/https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html","upvote_count":"42","selected_answers":""},{"id":529699,"date":"Sat 22 Jan 2022 09:47","username":"tkanmani76","content":"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html","upvote_count":"2","selected_answers":""},{"id":522951,"date":"Thu 13 Jan 2022 17:40","username":"CloudChef","content":"https://aws.amazon.com/blogs/security/how-to-use-aws-organizations-to-automate-end-to-end-account-creation/","upvote_count":"2","selected_answers":""},{"id":522949,"date":"Thu 13 Jan 2022 17:39","username":"CloudChefwassb","content":"B \\\"automated deployment enabled\\\"? Not seeing how this is possible in answer A. I think it's possible : https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html","upvote_count":"21","selected_answers":""},{"id":695688,"date":"Sat 15 Oct 2022 22:04","username":"wassb","content":"I think it's possible : https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html","upvote_count":"1","selected_answers":""},{"id":521351,"date":"Tue 11 Jan 2022 08:30","username":"pititcu667","content":"i will go with a since the the aws organization is already configured why make a new one when you can just add an OU?","upvote_count":"2","selected_answers":""},{"id":518231,"date":"Thu 06 Jan 2022 13:55","username":"GeniusMikeLiuTokyoboy","content":"Why not A?Existing accounts have to be invited into the OU.","upvote_count":"22","selected_answers":""},{"id":521536,"date":"Tue 11 Jan 2022 13:47","username":"Tokyoboy","content":"Existing accounts have to be invited into the OU.","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#786",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company owns a chain of travel agencies and is running an application in the AWS Cloud. Company employees use the application to search for information about travel destinations. Destination content is updated four times each year.<br>Two fixed Amazon EC2 instances serve the application. The company uses an Amazon Route 53 public hosted zone with a multivalue record of travel.example.com that returns the Elastic IP addresses for the EC2 instances. The application uses Amazon DynamoDB as its primary data store. The company uses a self-hosted Redis instance as a caching solution.<br>During content updates, the load on the EC2 instances and the caching solution increases drastically. This increased load has led to downtime on several occasions. A solutions architect must update the application so that the application is highly available and can handle the load that is generated by the content updates.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#786",
            "answers": [
        
        {
            "choice": "<p>A. Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB.  Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the EC2 instances before the content updates.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Set up Amazon ElastiCache for Redis. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Set up Amazon ElastiCache for Memcached. Update the application to use ElastiCache Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB.  Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the application before the content updates.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":548254,"date":"Wed 16 Feb 2022 03:33","username":"AndySH","content":"Answer is A.  DynamoDB Accelerator (DAX) is a fully managed, custom cache for DynamoDB.  ElastiCache supports both Redis and Memcached and typically used to cache results from relational databases","upvote_count":"5","selected_answers":""},{"id":705236,"date":"Thu 27 Oct 2022 07:00","username":"nsvijay04b1Byrney","content":"Key points <br>-> he company uses a self-hosted Redis instance as a caching solution. ( Managed Redis is obvious choice as you would make use of existing redis cache data migrated , DAX is overkillhere micro secs latency ?really? )<br>-> During content updates, the load on the EC2 instances and the caching solution increases drastically. (Need cloudfront as well, as load is on EC2 too not only DB)A:The load is during *update* and on EC2 and Redis because the EC2 instance is writing to both Redis as well as DynamoDB for each update.DAX is a write through cache = 1 write only.<br><br>https://aws.amazon.com/blogs/database/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-dynamodb/<br><br>Cloudfront won't help here.","upvote_count":"11","selected_answers":"Selected Answer: B"},{"id":714150,"date":"Wed 09 Nov 2022 00:12","username":"Byrney","content":"A:The load is during *update* and on EC2 and Redis because the EC2 instance is writing to both Redis as well as DynamoDB for each update.DAX is a write through cache = 1 write only.<br><br>https://aws.amazon.com/blogs/database/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-dynamodb/<br><br>Cloudfront won't help here.","upvote_count":"1","selected_answers":""},{"id":631837,"date":"Fri 15 Jul 2022 17:20","username":"asfsdfsdf","content":"CF cant point to an ASG so B and D are out - MemCached is not HA so its out only A left","upvote_count":"3","selected_answers":"Selected Answer: A"},{"id":537360,"date":"Mon 31 Jan 2022 20:27","username":"Bigbearcnadsdadasdad","content":"It's A.  B or D is wrong because cloudfront is not needed in this case.Yet the content is \\\"static\\\" because it only gets updated 4 times a year? A makes sense but b and d are good alternatives. Go with A. ","upvote_count":"11","selected_answers":"Selected Answer: A"},{"id":578137,"date":"Wed 30 Mar 2022 10:07","username":"adsdadasdad","content":"Yet the content is \\\"static\\\" because it only gets updated 4 times a year? A makes sense but b and d are good alternatives. Go with A. ","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#787",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical company is building a data lake on Amazon S3. The data must be encrypted in transit and at rest. The data must remain protected even if S3 bucket is inadvertently made public.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#787",
            "answers": [
        
        {
            "choice": "<p>A. Ensure that each S3 bucket has a bucket policy that includes a Deny statement if the aws:SecureTransport condition is not present.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create a CMK in AWS Key Management Service (AWS KMS). Turn on server-side encryption (SSE) on the S3 buckets, select SSE-KMS for the encryption type, and use the CMK as the key.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Ensure that each S3 bucket has a bucket policy that includes a Deny statement for PutObject actions if the request does not include an ג€s3:x-amz-server-side- encryptionג€:ג€aws:kmsג€ condition.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Turn on server-side encryption (SSE) on the S3 buckets and select SSE-S3 for the encryption type.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>E. Ensure that each S3 bucket has a bucket policy that includes a Deny statement for PutObject actions if the request does not include an ג€s3:x-amz-server-side- encryptionג€:ג€AES256ג€ condition.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>F. Turn on AWS Config. Use the s3-bucket-public-read-prohibited, s3-bucket-public-write-prohibited, and s3-bucket-ssl-requests-only AWS Config managed rules to monitor the S3 buckets.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":631839,"date":"Fri 15 Jul 2022 17:33","username":"asfsdfsdf","content":"ABC - must use CMK to avoid public access of an unauthorized users (no access to the key)<br>Must enforce header of aws:KMS in order to make sure all object are encrypted with CMK (SSE-KMS) <br>Finally need to make sure aws:SecureTransport is set to true which means SSL","upvote_count":"4","selected_answers":""},{"id":577926,"date":"Wed 30 Mar 2022 01:26","username":"RVD","content":"In order to enforce object encryption, create an S3 bucket policy that denies any S3 Put request that does not include the x-amz-server-side-encryption header. There are two possible values for the x-amz-server-side-encryption header: AES256, which tells S3 to use S3-managed keys, and aws:kms, which tells S3 to use AWS KMS–managed keys.","upvote_count":"1","selected_answers":""},{"id":569511,"date":"Thu 17 Mar 2022 08:33","username":"kenchou73","content":"Due to the requirement of the Data Lake, ABC is better than ADE.  That needs SSE-KMS but not SSE-S3.<br>https://aws.amazon.com/blogs/big-data/build-secure-encrypted-data-lakes-with-aws-lake-formation/","upvote_count":"1","selected_answers":"Selected Answer: ABC"},{"id":569304,"date":"Wed 16 Mar 2022 21:22","username":"Serial_X25","content":"A,B,C is correct. In my opinion, If you are using SSE-S3 since you have access to the bucket, S3 service will automatically decrypt the file for you, but with SSE-KMS we have:<br>\\\"To upload an object encrypted with an AWS KMS key to Amazon S3, you need kms:GenerateDataKey permissions on the key. To download an object encrypted with an AWS KMS key, you need kms:Decrypt permissions.\\\", from https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br>Then, just making the S3 bucket public is not enough to have access to files, you also need access to KMS.","upvote_count":"2","selected_answers":""},{"id":532864,"date":"Wed 26 Jan 2022 13:06","username":"panton","content":"I'll go ABC<br>A - to use encryption at rest SSL should be enabled<br>B - Create Key<br>C - Require Key on PutObject","upvote_count":"1","selected_answers":""},{"id":513543,"date":"Thu 30 Dec 2021 18:05","username":"wahlbergusaBigbearcnwahlbergusa","content":"A,B,C is correct. Reason SSE-S3 is not appropriate is that if the user has access privileges to S3 then they will automatically have access to the S3 key as well.I don't agree. SSE-S3 and SSE-KMS are same secure. The difference is who manage the key. ABC is a combination solution, but D isn't.Not sure I understand. There is segregation of duties on SSE-KMS, you can assign a key policy to the KMS Key. Hence the reason it is more secure in terms of access controls to the service.","upvote_count":"121","selected_answers":""},{"id":522617,"date":"Thu 13 Jan 2022 04:59","username":"Bigbearcnwahlbergusa","content":"I don't agree. SSE-S3 and SSE-KMS are same secure. The difference is who manage the key. ABC is a combination solution, but D isn't.Not sure I understand. There is segregation of duties on SSE-KMS, you can assign a key policy to the KMS Key. Hence the reason it is more secure in terms of access controls to the service.","upvote_count":"21","selected_answers":""},{"id":528834,"date":"Thu 20 Jan 2022 23:41","username":"wahlbergusa","content":"Not sure I understand. There is segregation of duties on SSE-KMS, you can assign a key policy to the KMS Key. Hence the reason it is more secure in terms of access controls to the service.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#788",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin.<br>The web application communicates with Amazon API Gateway Regional endpoints. The API Gateway APIs call AWS Lambda functions that store metadata in an<br>Amazon Aurora Serverless database and put the documents into an S3 bucket.<br>The company is growing steadily and has completed a proof of concept with its largest customer. The company must improve latency outside of Europe<br>Which combination of actions will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#788",
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
        "discusstion": [{"id":516901,"date":"Tue 04 Jan 2022 19:35","username":"Smartphone","content":"Answer is A & C","upvote_count":"12","selected_answers":""},{"id":699999,"date":"Thu 20 Oct 2022 16:01","username":"Ni_yot","content":"A and C for me.S3 Transfer speeds up the transfer and optimized edge endpoint reduces latency","upvote_count":"1","selected_answers":""},{"id":631844,"date":"Fri 15 Jul 2022 17:48","username":"asfsdfsdf","content":"AC<br>GA is excluded since it cannot point to CF also no need GA if we use CF - this exclude B<br>D is not needed too complicated<br>so only ACEleft -C for sure help, S3 transfer can help with upload times across the world<br>E - will help if there were errors connecting to the DB and not latency issues<br>so AC it is","upvote_count":"3","selected_answers":"Selected Answer: AC"},{"id":577897,"date":"Wed 30 Mar 2022 00:23","username":"jj22222","content":"C and A look right here","upvote_count":"2","selected_answers":"Selected Answer: AC"},{"id":561776,"date":"Sun 06 Mar 2022 05:17","username":"lifebegins","content":"It cannot be Global Accelerator. CloudFront and GA are diffrent services and diffrent purposes. <br>https://aws.amazon.com/global-accelerator/faqs/","upvote_count":"3","selected_answers":""},{"id":561774,"date":"Sun 06 Mar 2022 05:16","username":"lifebeginstobstar86","content":"Global Accelerator is only for Non-HTTP Services such as UDP. Not for Http Appshttps://aws.amazon.com/global-accelerator/faqs/<br>GA good fit for.. \\\"as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover.\\\"","upvote_count":"12","selected_answers":""},{"id":561792,"date":"Sun 06 Mar 2022 07:01","username":"tobstar86","content":"https://aws.amazon.com/global-accelerator/faqs/<br>GA good fit for.. \\\"as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover.\\\"","upvote_count":"2","selected_answers":""},{"id":555059,"date":"Thu 24 Feb 2022 05:02","username":"jyrajan69","content":"For those choosing B, please justify your answer. Global Accelerator and CloudFront are 2 separate services, how can you attach a Global Accelerator to CF? That option is not available as far as I can see. So based on elimination have to go with A and C","upvote_count":"3","selected_answers":""},{"id":546213,"date":"Sun 13 Feb 2022 04:54","username":"Bigbearcn","content":"AAA CCC","upvote_count":"3","selected_answers":"Selected Answer: AC"},{"id":540439,"date":"Fri 04 Feb 2022 14:36","username":"Clandestine60","content":"i`ll go with BD.  Global accelerators don`t have cloudfront as their endpoints<br>\\\"For standard accelerators, the endpoints are Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses. For custom routing accelerators, endpoints are virtual private cloud (VPC) subnets with one or more EC2 instances. The static IP addresses accept incoming traffic onto the AWS global network from the edge location that is closest to your users.\\\"<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html","upvote_count":"2","selected_answers":"Selected Answer: BD"},{"id":539775,"date":"Thu 03 Feb 2022 16:04","username":"vampiretCloudxie","content":"Why not D?No global aurora serverless db","upvote_count":"11","selected_answers":""},{"id":697218,"date":"Mon 17 Oct 2022 11:21","username":"Cloudxie","content":"No global aurora serverless db","upvote_count":"1","selected_answers":""},{"id":535960,"date":"Sun 30 Jan 2022 06:50","username":"saeidp","content":"Accelerator can attach to ALB or NLB but not cloudfront<br>I vote for A and C","upvote_count":"2","selected_answers":""},{"id":530252,"date":"Sun 23 Jan 2022 05:42","username":"Trueguy","content":"BC it seems","upvote_count":"1","selected_answers":""},{"id":528268,"date":"Thu 20 Jan 2022 09:51","username":"tkanmani76","content":"BC - An edge-optimized API endpoint is best for geographically distributed clients. API requests are routed to the nearest CloudFront Point of Presence (POP). This is the default endpoint type for API Gateway REST APIs.","upvote_count":"2","selected_answers":""},{"id":525851,"date":"Mon 17 Jan 2022 15:44","username":"pititcu667","content":"i think b and c is correct. Because s3 is not exposed directly and we already use cf and there is no talk about provisioning in new regios hence not d.","upvote_count":"1","selected_answers":"Selected Answer: BC"},{"id":522268,"date":"Wed 12 Jan 2022 16:40","username":"lucesaranolucesarano","content":"B,D.  Not A since there is a deployed CF distributionI meant B,C. ","upvote_count":"11","selected_answers":""},{"id":522270,"date":"Wed 12 Jan 2022 16:41","username":"lucesarano","content":"I meant B,C. ","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#789",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is troubleshooting an application that runs on Amazon EC2 instances. The EC2 instances run in an Auto Scaling group. The application needs to access user data in an Amazon DynamoDB table that has fixed provisioned capacity.<br>To match the increased workload, the solutions architect recently doubled the maximum size of the Auto Scaling group. Now, when many instances launch at the same time, some application components are throttled when the components scan the DynamoDB table. The Auto Scaling group terminates the failing instances and starts new instances until all applications are running<br>A solutions architect must implement a solution to mitigate the throttling issue in the MOST cost-effective manner<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#789",
            "answers": [
        
        {
            "choice": "<p>A. Double the provisioned read capacity of the DynamoDB table.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Duplicate the DynamoDB table. Configure the running copy of the application to select at random which table it access.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Set the DynamoDB table to on-demand mode.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Add DynamoDB Accelerator (DAX) to the table.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":554014,"date":"Tue 22 Feb 2022 22:09","username":"AndySH","content":"D. DAX accommodates unpredictable bursts of reading activity.","upvote_count":"10","selected_answers":""},{"id":714762,"date":"Wed 09 Nov 2022 18:18","username":"mrgreatness","content":"On-demand mode is a good option if any of the following are true:<br><br>You create new tables with unknown workloads.<br><br>You have unpredictable application traffic.<br><br>You prefer the ease of paying for only what you use.","upvote_count":"2","selected_answers":""},{"id":706249,"date":"Fri 28 Oct 2022 09:54","username":"nsvijay04b1","content":"Its 100% C as per AWS documentation. <br>Read <Peak traffic and scaling properties> section in below link<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":700010,"date":"Thu 20 Oct 2022 16:14","username":"Ni_yot","content":"yeah i'd go for C as well. Several documents mention on demand mode as the way forward.there could still be queuingif data is not in cache when using DAX","upvote_count":"1","selected_answers":""},{"id":695724,"date":"Sat 15 Oct 2022 22:54","username":"wassb","content":"\\\"However, tables using the on-demand mode might still throttle.\\\"<br>https://aws.amazon.com/premiumsupport/knowledge-center/on-demand-table-throttling-dynamodb/<br>Considering that switching on demand-mode might not solve the problem, i will go for DAX","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":684040,"date":"Sat 01 Oct 2022 08:25","username":"JohnPiJohnPiJohnPi","content":"I vote for DAXhttps://aws.amazon.com/premiumsupport/knowledge-center/on-demand-table-throttling-dynamodb/On demand will be trotheled if the traffic is more than double the prețioase peak","upvote_count":"111","selected_answers":"Selected Answer: D"},{"id":691683,"date":"Tue 11 Oct 2022 05:19","username":"JohnPiJohnPi","content":"https://aws.amazon.com/premiumsupport/knowledge-center/on-demand-table-throttling-dynamodb/On demand will be trotheled if the traffic is more than double the prețioase peak","upvote_count":"11","selected_answers":""},{"id":691684,"date":"Tue 11 Oct 2022 05:21","username":"JohnPi","content":"On demand will be trotheled if the traffic is more than double the prețioase peak","upvote_count":"1","selected_answers":""},{"id":631852,"date":"Fri 15 Jul 2022 17:59","username":"asfsdfsdf","content":"Since its with peaks better to use on-demand and its more cost effective than to use DAX nodes and pay for them 24/7 - on-demand reads is 0.25$ for 1 million unit","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":532140,"date":"Tue 25 Jan 2022 14:00","username":"HellGatesTeVe86wannaawswahlbergusa","content":"Is On-Demand cheaper than DAX?Yes, some application components are throttled when they scan the DynamoDB database.<br>Means READ capacity may not be sufficient.<br>DAX will fix.throttling occurs when app scanning the DynamoDB database, note it's not querying, i.e, run query vs full scan. In the table full scan, caching (DAX) not efficient. Perhaps, change DDB to on-demand may be more cost effective? https://cloud.in28minutes.com/aws-certification-amazon-dynamodb-vs-rdsI'd go with D. ","upvote_count":"2323","selected_answers":""},{"id":546509,"date":"Sun 13 Feb 2022 15:52","username":"sTeVe86wannaaws","content":"Yes, some application components are throttled when they scan the DynamoDB database.<br>Means READ capacity may not be sufficient.<br>DAX will fix.throttling occurs when app scanning the DynamoDB database, note it's not querying, i.e, run query vs full scan. In the table full scan, caching (DAX) not efficient. Perhaps, change DDB to on-demand may be more cost effective? https://cloud.in28minutes.com/aws-certification-amazon-dynamodb-vs-rds","upvote_count":"32","selected_answers":""},{"id":615725,"date":"Mon 13 Jun 2022 11:54","username":"wannaaws","content":"throttling occurs when app scanning the DynamoDB database, note it's not querying, i.e, run query vs full scan. In the table full scan, caching (DAX) not efficient. Perhaps, change DDB to on-demand may be more cost effective? https://cloud.in28minutes.com/aws-certification-amazon-dynamodb-vs-rds","upvote_count":"2","selected_answers":""},{"id":533683,"date":"Thu 27 Jan 2022 12:13","username":"wahlbergusa","content":"I'd go with D. ","upvote_count":"3","selected_answers":""},{"id":523758,"date":"Fri 14 Jan 2022 22:11","username":"lucesaranoJohnPi","content":"C. <br><br>https://aws.amazon.com/premiumsupport/knowledge-center/on-demand-table-throttling-dynamodb/It is D according to the document.","upvote_count":"31","selected_answers":"Selected Answer: C"},{"id":691682,"date":"Tue 11 Oct 2022 05:19","username":"JohnPi","content":"It is D according to the document.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#790",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must analyze a company's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/ passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.<br>The solutions architect must analyze the environment and take action based on the findings.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#790",
            "answers": [
        
        {
            "choice": "<p>A. Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes. Create and review a dashboard that is based on the metrics. Identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Install the Amazon CloudWatch agent on each of the EC2 instances. Turn on AWS Compute Optimizer, and let it run for at least 12 hours. Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Sign up for the AWS Enterprise Support plan. Turn on AWS Trusted Advisor. Wait 12 hours. Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":631860,"date":"Fri 15 Jul 2022 18:10","username":"asfsdfsdf","content":"C - for sure since its memory instance need to install CW agent and to configure memory metrics - optimizer will do the work and analyze and suggest rightsizing for both Ec2 EBS and EC2 instances - need to pay just for one extra metric per EC2.<br>A is incorrect OpsCenter is identifying issue with resources like instance failures etc.. not for cost optimizing<br>D is not cost effective <br>B- will not fulfil the requirement - no memory data also enable detailed monitoring for all EC2 instances is expensive","upvote_count":"5","selected_answers":"Selected Answer: C"},{"id":656474,"date":"Thu 01 Sep 2022 19:03","username":"Ni_yot","content":"looks C according to this - CloudWatch Agent is a software package that autonomously and continuously runs on your servers. Using CloudWatch Agent, we can collect metrics and logs from Amazon Elastic Compute Cloud (Amazon EC2), hybrid, and on-premises servers running both Linux and Windows.","upvote_count":"1","selected_answers":""},{"id":637682,"date":"Wed 27 Jul 2022 01:48","username":"hilft","content":"C.  Directly from Jon Bonso's practice exam","upvote_count":"1","selected_answers":""},{"id":611634,"date":"Sun 05 Jun 2022 02:25","username":"hilft","content":"C.  You need CW agent install first","upvote_count":"1","selected_answers":""},{"id":567638,"date":"Mon 14 Mar 2022 13:47","username":"ablazleon","content":"Both A and C seems to have the functional requirements to be useful, but C seems to be cheaper. I checked cheris opinion, aws compute optimizer seems to have a free tier where it is free. System Manager ops center seems not to have this free tier (https://aws.amazon.com/compute-optimizer/pricing/, https://aws.amazon.com/systems-manager/pricing/).","upvote_count":"2","selected_answers":"Selected Answer: C"},{"id":564807,"date":"Thu 10 Mar 2022 14:01","username":"cheris","content":"I don't think option C is cost-effective ... A sounds less costly.","upvote_count":"1","selected_answers":""},{"id":531819,"date":"Tue 25 Jan 2022 05:06","username":"kaush4u","content":"To sign up for AWS Compute Optimizer, go to the AWS Compute Optimizer console and click “opt in”. You must have an Amazon Web Services account to access this service. Once you opt in, AWS Compute Optimizer immediately starts analyzing your AWS resources and starts delivering recommendations. When you first opt in AWS Compute Optimizer, it may take up to 12 hours to fully analyze the AWS resources in your account.","upvote_count":"1","selected_answers":""},{"id":517807,"date":"Wed 05 Jan 2022 22:12","username":"AMKazi","content":"https://aws.amazon.com/compute-optimizer/","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":517682,"date":"Wed 05 Jan 2022 18:14","username":"Smartphone","content":"C is the correct answer. CloudWatch Agent needs to be install to work the AWS Compute Optimizer correctly.","upvote_count":"1","selected_answers":""},{"id":514119,"date":"Fri 31 Dec 2021 15:15","username":"krisvija12","content":"If not for cost wise I would have gone with D.  For D one has to purchase Enterprise plan, hence the right answer should be C.  Install CW agent on each EC2","upvote_count":"1","selected_answers":""},{"id":512173,"date":"Wed 29 Dec 2021 13:55","username":"kubala","content":"need to install cloudwatch agent","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":512171,"date":"Wed 29 Dec 2021 13:54","username":"kubala","content":"c - need to install cloudwatch agent","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#791",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large mobile gaming company has successfully migrated all of its on-premises infrastructure to the AWS Cloud. A solutions architect is reviewing the environment to ensure that it was built according to the design and that it is running in alignment with the Well-Architected Framework.<br>While reviewing previous monthly costs in Cost Explorer, the solutions architect notices that the creation and subsequent termination of several large instance types account for a high proportion of the costs. The solutions architect finds out that the company's developers are launching new Amazon EC2 instances as part of their testing and that the developers are not using the appropriate instance types.<br>The solutions architect must implement a control mechanism to limit the instance types that only the developers can launch.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#791",
            "answers": [
        
        {
            "choice": "<p>A. Create a desired-instance-type managed rule in AWS Config. Configure the rule with the instance types that are allowed. Attach the rule to an event to run each time a new EC2 instance is launched.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. In the EC2 console, create a launch template that specifies the instance types that are allowed. Assign the launch template to the developers' IAM accounts.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a new IAM policy. Specify the instance types that are allowed. Attach the policy to an IAM group that contains the IAM accounts for the developers<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":585393,"date":"Wed 13 Apr 2022 20:43","username":"bkrish","content":"This is doable with IAM policy creation to restrict users to specific instance types. Found the below article.<br>https://blog.vizuri.com/limiting-allowed-aws-instance-type-with-iam-policy","upvote_count":"5","selected_answers":"Selected Answer: C"},{"id":700603,"date":"Fri 21 Oct 2022 09:14","username":"Ni_yot","content":"should be C","upvote_count":"1","selected_answers":""},{"id":654842,"date":"Wed 31 Aug 2022 09:04","username":"gnic","content":"It's C - AWS Config is for monitoring and alert, it doesn't prevent.","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":635783,"date":"Sun 24 Jul 2022 00:53","username":"hilft","content":"C. <br>tkanmani76 is right.","upvote_count":"3","selected_answers":""},{"id":555545,"date":"Thu 24 Feb 2022 21:41","username":"Ni_yotNi_yot","content":"will go with B.  Better to restrict using IAM groups.its C my bad","upvote_count":"11","selected_answers":""},{"id":700604,"date":"Fri 21 Oct 2022 09:14","username":"Ni_yot","content":"its C my bad","upvote_count":"1","selected_answers":""},{"id":512103,"date":"Wed 29 Dec 2021 12:38","username":"feddotkanmani76wahlbergusasodasu","content":"Could this not be done with either AWS Config or an IAM Policy? Wouldn't both A and C be options in this case? I am not sure why I would pick one over the other here...Its C - Option A doesnt restrict only for devs. It would impact everyone.AWS Config is also a detection engine. You can automate things in the backend to correct whatever needs to be corrected. But it cannot prefent it from happening.Right!→https://aws.amazon.com/tw/config/faq/<br>---<br>Q: Does the service prevent users from taking non-compliant actions?<br><br>Config rules do not directly affect how end-users consume AWS. Config rules evaluate resource configurations only after a configuration change has been completed and recorded by AWS Config. Config rules do not prevent the user from making changes that could be non-compliant. To control what a user can provision on AWS and configuration parameters allowed during provisioning, please use AWS Identity and Access Management (IAM) Policies and AWS Service Catalog respectively.","upvote_count":"11151","selected_answers":""},{"id":526281,"date":"Tue 18 Jan 2022 04:28","username":"tkanmani76wahlbergusasodasu","content":"Its C - Option A doesnt restrict only for devs. It would impact everyone.AWS Config is also a detection engine. You can automate things in the backend to correct whatever needs to be corrected. But it cannot prefent it from happening.Right!→https://aws.amazon.com/tw/config/faq/<br>---<br>Q: Does the service prevent users from taking non-compliant actions?<br><br>Config rules do not directly affect how end-users consume AWS. Config rules evaluate resource configurations only after a configuration change has been completed and recorded by AWS Config. Config rules do not prevent the user from making changes that could be non-compliant. To control what a user can provision on AWS and configuration parameters allowed during provisioning, please use AWS Identity and Access Management (IAM) Policies and AWS Service Catalog respectively.","upvote_count":"1151","selected_answers":""},{"id":537503,"date":"Mon 31 Jan 2022 22:46","username":"wahlbergusasodasu","content":"AWS Config is also a detection engine. You can automate things in the backend to correct whatever needs to be corrected. But it cannot prefent it from happening.Right!→https://aws.amazon.com/tw/config/faq/<br>---<br>Q: Does the service prevent users from taking non-compliant actions?<br><br>Config rules do not directly affect how end-users consume AWS. Config rules evaluate resource configurations only after a configuration change has been completed and recorded by AWS Config. Config rules do not prevent the user from making changes that could be non-compliant. To control what a user can provision on AWS and configuration parameters allowed during provisioning, please use AWS Identity and Access Management (IAM) Policies and AWS Service Catalog respectively.","upvote_count":"51","selected_answers":""},{"id":693420,"date":"Thu 13 Oct 2022 00:33","username":"sodasu","content":"Right!→https://aws.amazon.com/tw/config/faq/<br>---<br>Q: Does the service prevent users from taking non-compliant actions?<br><br>Config rules do not directly affect how end-users consume AWS. Config rules evaluate resource configurations only after a configuration change has been completed and recorded by AWS Config. Config rules do not prevent the user from making changes that could be non-compliant. To control what a user can provision on AWS and configuration parameters allowed during provisioning, please use AWS Identity and Access Management (IAM) Policies and AWS Service Catalog respectively.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#792",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC. <br>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#792",
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
            "choice": "<p>C. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection and connect the new public virtual interface to the single VPC. <br></p>",
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
        "discusstion": [{"id":517760,"date":"Wed 05 Jan 2022 20:20","username":"shaiker","content":"A Direct Connect gateway is a globally available resource. You can create the Direct Connect gateway in any Region and access it from all other Regions. The following describe scenarios where you can use a Direct Connect gateway.<br><br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html<br><br>The scenario omits the fact that you will need a vgw (virtual private gateway) in all options. So I am presuming it is safe to assume that it is present and unmentioned","upvote_count":"15","selected_answers":"Selected Answer: A"},{"id":516757,"date":"Tue 04 Jan 2022 16:10","username":"Smartphone","content":"The correct Answer is A. ","upvote_count":"8","selected_answers":""},{"id":685831,"date":"Tue 04 Oct 2022 01:47","username":"dcdcdc3","content":"One more article to support A:<br>https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/aws-dx-dxgw-with-vgw-single-region.html","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":632028,"date":"Sat 16 Jul 2022 08:57","username":"asfsdfsdfSathish1412","content":"A - No brainer<br>C - is using public VIFs it will not work<br>B - No Direct connect GW how can traffic be routed to another region?<br>D - Transit GW is a regional service you cant route traffic to another region with it - you need to either provision a new Transit GW on another region and peer it or use DX GW with a transit VIFGreat Ans","upvote_count":"31","selected_answers":"Selected Answer: A"},{"id":649452,"date":"Sat 20 Aug 2022 15:26","username":"Sathish1412","content":"Great Ans","upvote_count":"1","selected_answers":""},{"id":570671,"date":"Fri 18 Mar 2022 18:22","username":"azure_kai","content":"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":516879,"date":"Tue 04 Jan 2022 19:05","username":"Firelordshaiker","content":"I prefer DD is out you would not use a new private virtual interface here but a transit virtual interface.https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html<br>\\\"You can use an AWS Direct Connect gateway to connect your AWS Direct Connect connection over a transit virtual interface to the VPCs or VPNs that are attached to your transit gateway. You associate a Direct Connect gateway with the transit gateway. Then, create a transit virtual interface for your AWS Direct Connect connection to the Direct Connect gateway.\\\"","upvote_count":"23","selected_answers":""},{"id":517732,"date":"Wed 05 Jan 2022 19:52","username":"shaiker","content":"D is out you would not use a new private virtual interface here but a transit virtual interface.https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html<br>\\\"You can use an AWS Direct Connect gateway to connect your AWS Direct Connect connection over a transit virtual interface to the VPCs or VPNs that are attached to your transit gateway. You associate a Direct Connect gateway with the transit gateway. Then, create a transit virtual interface for your AWS Direct Connect connection to the Direct Connect gateway.\\\"","upvote_count":"3","selected_answers":""},{"id":515546,"date":"Mon 03 Jan 2022 10:17","username":"GeniusMikeLiu","content":"why C???","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#793",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company plans to deploy a new private intranet service on Amazon EC2 instances inside a VPC.  An AWS Site-to-Site VPN connects the VPC to the company's on-premises network. The new service must communicate with existing on-premises services. The on-premises services are accessible through the use of hostnames that reside in the company.example DNS zone. This DNS zone is wholly hosted on premises and is available only on the company's private network.<br>A solutions architect must ensure that the new service can resolve hostnames on the company example domain to integrate with existing services.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#793",
            "answers": [
        
        {
            "choice": "<p>A. Create an empty private zone in Amazon Route 53 for company example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Turn on DNS hostnames for the VPC.  Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Turn on DNS hostnames for the VPC.  Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configure the on-premises DNS server to forward requests for company.example to the new resolver.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to run the document when an instance is entering the running state.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":698994,"date":"Wed 19 Oct 2022 14:08","username":"Blair77","content":"No doubt! It's BBB","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":654858,"date":"Wed 31 Aug 2022 09:27","username":"gnic","content":"it's B, outbound resolver<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":632034,"date":"Sat 16 Jul 2022 09:13","username":"asfsdfsdf","content":"B - need to resolve DNS entries from the VPC to the on-prem, already have VPN connection so forward DNS resolving query usingg outbound endpoint and rule to the DNS server of the company","upvote_count":"3","selected_answers":"Selected Answer: B"},{"id":603175,"date":"Wed 18 May 2022 08:20","username":"LiamNg","content":"Answer: B<br>Ref https://docs.amazonaws.cn/en_us/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html<br>To forward DNS queries that originate on Amazon EC2 instances in one or more VPCs to your network, you create an outbound endpoint and Route 53 Resolver rules","upvote_count":"4","selected_answers":""},{"id":576388,"date":"Sun 27 Mar 2022 20:22","username":"omishaaaauser0001","content":"I think its B, since services within VPC wants to connect to on-prem network, hence a clear case of outbound traffic.Based on the question the answer is B. ","upvote_count":"21","selected_answers":""},{"id":603280,"date":"Wed 18 May 2022 14:18","username":"user0001","content":"Based on the question the answer is B. ","upvote_count":"1","selected_answers":""},{"id":539057,"date":"Wed 02 Feb 2022 19:00","username":"Bigbearcn","content":"It's B","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":520738,"date":"Mon 10 Jan 2022 09:26","username":"tkanmani76","content":"B it is - DNS is in on-prem and requires outbound endpoints.","upvote_count":"3","selected_answers":""},{"id":515284,"date":"Mon 03 Jan 2022 00:43","username":"Firelord","content":"I think it’s outbound B, the dns is on prem","upvote_count":"3","selected_answers":""},{"id":511864,"date":"Wed 29 Dec 2021 07:32","username":"kubala","content":"inbound resolver - C","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#794",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company recently experienced an unexpected increase in Amazon RDS and Amazon DynamoDB costs. The company needs to increase visibility into details of AWS Billing and Cost Management. There are various accounts associated with AWS Organizations, including many development and production accounts. There is no consistent tagging strategy across the organization, but there are guidelines in place that require all infrastructure to be deployed using<br>AWS CloudFormation with consistent tagging. Management requires cost center numbers and project ID numbers for all existing and future DynamoDB tables and<br>RDS instances.<br>Which strategy should the solutions architect provide to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#794",
            "answers": [
        
        {
            "choice": "<p>A. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Use an AWS Config rule to alert the finance team of untagged resources. Create a centralized AWS Lambda based solution to tag untagged RDS databases and DynamoDB resources every hour using a cross-account role.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID.  Use SCPs to restrict resource creation that do not have the cost center and project ID on the resource.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources. Update existing federated roles to restrict privileges to provision resources that do not include the cost center and project ID on the resource.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":632036,"date":"Sat 16 Jul 2022 09:23","username":"asfsdfsdf","content":"only C will add tags and restrict creation of untagged resources using SCPs ortag policies.","upvote_count":"4","selected_answers":"Selected Answer: C"},{"id":598599,"date":"Sun 08 May 2022 17:16","username":"user0001","content":"A is wrong because users can still deploy new resources without tagging <br>B is wrong as you dont need to alert finance <br>C is right base on the requirments","upvote_count":"2","selected_answers":""},{"id":563050,"date":"Tue 08 Mar 2022 07:36","username":"Dohecadi","content":"\\\"For all present and prospective DynamoDB tables and RDS instances, management needs cost center and project ID numbers.\\\" Only C gives us Organizations/SCP","upvote_count":"1","selected_answers":"Selected Answer: C"},{"id":530571,"date":"Sun 23 Jan 2022 15:00","username":"RVivek","content":"Answer is C<br>This is a duplicate of question 120","upvote_count":"3","selected_answers":""},{"id":516830,"date":"Tue 04 Jan 2022 17:44","username":"AndySH","content":"C is the correct answer","upvote_count":"1","selected_answers":""},{"id":511730,"date":"Wed 29 Dec 2021 03:53","username":"techn00b","content":"Answer is C","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#795",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its data center from on premises to the AWS Cloud. The migration will take several months to complete. The company will use Amazon<br>Route 53 for private DNS zones.<br>During the migration, the company must keep its AWS services pointed at the VPC's Route 53 Resolver for DNS. The company also must maintain the ability to resolve addresses from its on-premises DNS server. A solutions architect must set up DNS so that Amazon EC2 instances can use native Route 53 endpoints to resolve on-premises DNS queries.<br>Which configuration will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#795",
            "answers": [
        
        {
            "choice": "<p>A. Configure the VPC DHCP options set to point to on-premises DNS server IP addresses. Ensure that security groups for EC2 instances allow outbound access to port 53 on those DNS server IP addresses.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Launch an EC2 instance that has DNS BIND installed and configured. Ensure that the security groups that are attached to the EC2 instance can access the on-premises DNS server IP address on port 53. Configure BIND to forward DNS queries to on-premises DNS server IP addresses. Configure each migrated EC2 instance's DNS settings to point to the BIND server IP address.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create a new outbound endpoint in Route 53, and attach the endpoint to the VPC.  Ensure that the security groups that are attached to the endpoint can access the on-premises DNS server IP address on port 53. Create a new Route 53 Resolver rule that routes on-premises designated traffic to the on-premises DNS server.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a new private DNS zone in Route 53 with the same domain name as the on-premises domain. Create a single wildcard record with the on-premises DNS server IP address as the record's address.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":518156,"date":"Thu 06 Jan 2022 11:48","username":"Smartphone","content":"Answer is C. ","upvote_count":"5","selected_answers":""},{"id":632038,"date":"Sat 16 Jul 2022 09:26","username":"asfsdfsdf","content":"C - outbound to company DNS servers","upvote_count":"4","selected_answers":"Selected Answer: C"},{"id":547822,"date":"Tue 15 Feb 2022 15:45","username":"AndySH","content":"C<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/set-up-integrated-dns-resolution-for-hybrid-networks-in-amazon-route-53.html","upvote_count":"3","selected_answers":""}]
    }
    ,
    {
        "question_id": "#796",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements:<br>✑ Inbound requests must be filtered for common vulnerability attacks.<br>✑ Rejected requests must be sent to a third-party auditing application.<br>✑ All resources should be highly available.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#796",
            "answers": [
        
        {
            "choice": "<p>A. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB.  Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Configure an Application Load Balancer (ALB) and add the EC2 instances as targets. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs. Use an AWS Lambda function to frequently push the logs to the third-party auditing application.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Configure an Application Load Balancer (ALB) along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Configure a Multi-AZ Auto Scaling group using the application's AMI Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.<br></p>",
            "correct": true,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":706327,"date":"Fri 28 Oct 2022 11:48","username":"nsvijay04b1","content":"B/C doesn't make sense. Between A & D , the Answer is 'D'. why ?<br>1. As WAF is front end , it is responsible for threats not ALB or EC2, its too late for threat analysis. <br>2. Inspector doesn't analyse ALB but EC2, ECR <br>3. WAF logging integrates with S3, KDF, Cloudwatch where as ALB access logs with S3 (no KDF)<br>4. WAF marketplace rules help threat detection","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":701034,"date":"Fri 21 Oct 2022 17:37","username":"Vinafec","content":"D almost looks good, but doesn't specify whether the third-party application is a supported target for Firehose. Or am I missing something?","upvote_count":"1","selected_answers":""},{"id":691772,"date":"Tue 11 Oct 2022 07:34","username":"JohnPi","content":"ALB logs go to S3 and WAF logs stream to Firehose","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":685844,"date":"Tue 04 Oct 2022 02:34","username":"dcdcdc3","content":"why subscribe to managed WAF rules in marketplace:<br>https://docs.aws.amazon.com/waf/latest/developerguide/marketplace-managed-rule-groups.html","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":672114,"date":"Sun 18 Sep 2022 10:07","username":"Yashar1691Byrney","content":"A is correctInspector scans EC2 instances, it won't detect if a request was blocked by WAF at the ALB","upvote_count":"21","selected_answers":"Selected Answer: A"},{"id":714156,"date":"Wed 09 Nov 2022 00:40","username":"Byrney","content":"Inspector scans EC2 instances, it won't detect if a request was blocked by WAF at the ALB","upvote_count":"1","selected_answers":""},{"id":654865,"date":"Wed 31 Aug 2022 09:41","username":"gnic","content":"It's A, you don't need Firehose here.<br>https://docs.aws.amazon.com/inspector/v1/userguide/inspector_network-reachability.html","upvote_count":"2","selected_answers":"Selected Answer: A"},{"id":644884,"date":"Wed 10 Aug 2022 11:20","username":"foureye2004","content":"Just wonder why \\\"Subscribe to AWS Managed Rules in AWS Marketplace\\\" in option D","upvote_count":"1","selected_answers":""},{"id":637023,"date":"Tue 26 Jul 2022 02:49","username":"hilft","content":"Do you need firehose for this task? you don't need anything real-time","upvote_count":"1","selected_answers":""},{"id":632042,"date":"Sat 16 Jul 2022 09:37","username":"asfsdfsdf","content":"A or D since the requirement here is for HA. <br>Why not A? Amazon inspector is not for analyzing traffic from ALB - better to stream the ALB logging data to splunk and analyze it there.","upvote_count":"4","selected_answers":"Selected Answer: D"},{"id":626462,"date":"Sun 03 Jul 2022 09:22","username":"aandc","content":"vote D","upvote_count":"1","selected_answers":""},{"id":580866,"date":"Mon 04 Apr 2022 19:39","username":"roka_ua","content":"Vote D","upvote_count":"1","selected_answers":"Selected Answer: D"},{"id":532757,"date":"Wed 26 Jan 2022 10:47","username":"shotty1","content":"I think it is D","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":525751,"date":"Mon 17 Jan 2022 13:19","username":"yvinisiupacuando","content":"Firstly I doubt between A and B but in fact that is true that Amazon Inspector cannot monitor ALB traffic, it can only monitor EC2 activity so, this fact discards A, I'll go with D","upvote_count":"3","selected_answers":"Selected Answer: D"},{"id":523477,"date":"Fri 14 Jan 2022 11:13","username":"tkanmani76tkanmani76","content":"D is right - KDF can have 3rd party apps as destination - https://docs.aws.amazon.com/firehose/latest/dev/create-destination.htmlAdditionally while A looks to be valid considering AWS Inspector can be deployed for scanning vulnerabilities, it supports only EC2. However choice A mentions - \\\" Use Amazon Inspector to monitor traffic to the ALB and EC2 instances\\\" - ALB is not supported by Inspector - hence Option A is invalid. https://aws.amazon.com/inspector/faqs/?nc=sn&loc=6","upvote_count":"21","selected_answers":""},{"id":523482,"date":"Fri 14 Jan 2022 11:24","username":"tkanmani76","content":"Additionally while A looks to be valid considering AWS Inspector can be deployed for scanning vulnerabilities, it supports only EC2. However choice A mentions - \\\" Use Amazon Inspector to monitor traffic to the ALB and EC2 instances\\\" - ALB is not supported by Inspector - hence Option A is invalid. https://aws.amazon.com/inspector/faqs/?nc=sn&loc=6","upvote_count":"1","selected_answers":""},{"id":522183,"date":"Wed 12 Jan 2022 14:23","username":"pititcu667peddyua","content":"only a and b mention the third party. between the two i choose a.amazon inspector is for inspecting code, not traffic.","upvote_count":"11","selected_answers":"Selected Answer: A"},{"id":546855,"date":"Mon 14 Feb 2022 03:19","username":"peddyua","content":"amazon inspector is for inspecting code, not traffic.","upvote_count":"1","selected_answers":""},{"id":520870,"date":"Mon 10 Jan 2022 14:29","username":"GeniusMikeLiu","content":"D, we need detail WAF access logs, so use Kinesis Data Firehose.","upvote_count":"2","selected_answers":"Selected Answer: D"},{"id":512207,"date":"Wed 29 Dec 2021 14:37","username":"kubalayvinisiupacuando","content":"imho CNo way C is valid, it doesn't meet the \\\"High Availability\\\" Req.","upvote_count":"11","selected_answers":"Selected Answer: C"},{"id":525754,"date":"Mon 17 Jan 2022 13:21","username":"yvinisiupacuando","content":"No way C is valid, it doesn't meet the \\\"High Availability\\\" Req.","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#797",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs applications on Amazon EC2 instances. The company plans to begin using an Auto Scaling group for the instances. As part of this transition, a solutions architect must ensure that Amazon CloudWatch Logs automatically collects logs from all new instances. The new Auto Scaling group will use a launch template that includes the Amazon Linux 2 AMI and no key pair.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#797",
            "answers": [
        
        {
            "choice": "<p>A. Create an Amazon CloudWatch agent configuration for the workload. Store the CloudWatch agent configuration in an Amazon S3 bucket. Write an EC2 user data script to fetch the configuration file from Amazon S3. Configure the CloudWatch agent on the instance during initial boot.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an Amazon CloudWatch agent configuration for the workload in AWS Systems Manager Parameter Store. Create a Systems Manager document that installs and configures the CloudWatch agent by using the configuration. Create an Amazon EventBridge (Amazon CloudWatch Events) rule on the default event bus with a Systems Manager Run Command target that runs the document whenever an instance enters the running state.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an Amazon CloudWatch agent configuration for the workload. Create an AWS Lambda function to install and configure the CloudWatch agent by using AWS Systems Manager Session Manager. Include the agent configuration inside the Lambda package. Create an AWS Config custom rule to identify changes to the EC2 instances and invoke Lambda function.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create an Amazon CloudWatch agent configuration for the workload. Save the CloudWatch agent configuration as part of an AWS Lambda deployment package. Use AWS CloudTrail to capture EC2 tagging events and initiate agent installation. Use AWS CodeBuild to configure the CloudWatch agent on the instances that run the workload.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":516007,"date":"Mon 03 Jan 2022 20:58","username":"vinodkp","content":"Answer is B","upvote_count":"11","selected_answers":""},{"id":713282,"date":"Mon 07 Nov 2022 20:43","username":"SureNotmrgreatness","content":"I think the agent is preinstalled on Amazon Linux 2. Am I wrong?no the package is there but not installed, please see: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html#download-CloudWatch-Agent-on-EC2-Instance-fleet","upvote_count":"11","selected_answers":"Selected Answer: A"},{"id":714765,"date":"Wed 09 Nov 2022 18:32","username":"mrgreatness","content":"no the package is there but not installed, please see: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html#download-CloudWatch-Agent-on-EC2-Instance-fleet","upvote_count":"1","selected_answers":""},{"id":679692,"date":"Mon 26 Sep 2022 13:52","username":"joancarles","content":"B seems to be more complet, and it's feasible the CW agent installation through SSM:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/download-CloudWatch-Agent-on-EC2-Instance-SSM-first.html","upvote_count":"3","selected_answers":"Selected Answer: B"},{"id":655220,"date":"Wed 31 Aug 2022 17:19","username":"kadev","content":"B<br>Because this AWS exam, you must choose the solution in AWS guide<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/implementing-logging-monitoring-cloudwatch/install-cloudwatch-systems-manager.html<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/installing-cloudwatch-agent-ssm.html","upvote_count":"2","selected_answers":""},{"id":645520,"date":"Thu 11 Aug 2022 16:33","username":"Sumit_Kumarkadev","content":"A needs IAM roleB need a IAM Role also","upvote_count":"11","selected_answers":""},{"id":655213,"date":"Wed 31 Aug 2022 17:08","username":"kadev","content":"B need a IAM Role also","upvote_count":"1","selected_answers":""},{"id":633019,"date":"Mon 18 Jul 2022 14:34","username":"JonnyB1001","content":"If A said \\\"Install & configure the CW agent during initial boot\\\" then it would be A, but without that its B<br>C & D are talking rubbish.","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":632047,"date":"Sat 16 Jul 2022 09:49","username":"asfsdfsdf","content":"A and B will work however in A there is no CW agent installation (its not installed by default)just configuration.<br>B is complete and can be managed correctly:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html<br>https://wellarchitectedlabs.com/security/200_labs/200_remote_configuration_installation_and_viewing_cloudwatch_logs/","upvote_count":"1","selected_answers":"Selected Answer: B"},{"id":627220,"date":"Tue 05 Jul 2022 05:00","username":"aandc","content":"Vote for A, B seems overkill","upvote_count":"1","selected_answers":"Selected Answer: A"},{"id":602187,"date":"Sun 15 May 2022 18:21","username":"bobsmith2000Chuky64","content":"The real world scenario.https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html","upvote_count":"21","selected_answers":"Selected Answer: A"},{"id":611094,"date":"Fri 03 Jun 2022 15:14","username":"Chuky64","content":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html","upvote_count":"1","selected_answers":""},{"id":582798,"date":"Fri 08 Apr 2022 11:43","username":"KengL","content":"Answer is C","upvote_count":"2","selected_answers":""},{"id":573793,"date":"Wed 23 Mar 2022 18:19","username":"Bigbearcn","content":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html","upvote_count":"2","selected_answers":""},{"id":514095,"date":"Fri 31 Dec 2021 14:38","username":"AwsSuperTrooper","content":"Answer A","upvote_count":"1","selected_answers":""},{"id":512222,"date":"Wed 29 Dec 2021 14:50","username":"kubala","content":"https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-cwe-target.html<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/download-CloudWatch-Agent-on-EC2-Instance-SSM-first.html","upvote_count":"1","selected_answers":""}]
    }
    ,
    {
        "question_id": "#798",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central<br>Amazon S3 bucket every 15 minutes. The security team discovers that log files are missing from some of the terminated EC2 instances.<br>Which set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#798",
            "answers": [
        
        {
            "choice": "<p>A. Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>B. Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>C. Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge (CloudWatch Events) rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.<br></p>",
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
        "discusstion": [{"id":528899,"date":"Fri 21 Jan 2022 03:22","username":"DLML","content":"B is correct.Check out this aws blog. https://aws.amazon.com/blogs/infrastructure-and-automation/run-code-before-terminating-an-ec2-auto-scaling-instance/","upvote_count":"6","selected_answers":""},{"id":632054,"date":"Sat 16 Jul 2022 10:01","username":"asfsdfsdf","content":"Only A or B are valid I will choose B<br>C - will drop logs if the instance is terminated <br>D - not mention which transition to use<br>A - is incorrect abandon will not stop the instance from terminating, so the script will not be executed","upvote_count":"2","selected_answers":"Selected Answer: B"},{"id":573845,"date":"Wed 23 Mar 2022 19:37","username":"ravisar","content":"B is correct. The difference between B and D are 1) SNS vs Event bridge 2) Life Cycle Abandon vs Continue. <br><br>The SNS and Event bridge will work. For abandon vs Continue -(Action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occur). You want to continue even if there is a time out, instead of abandoning the log file copying.","upvote_count":"4","selected_answers":""},{"id":540110,"date":"Fri 04 Feb 2022 00:52","username":"saeidp","content":"B is correct. System Manager, EC2_INSTANCE_TERMINATING plus CONTINUE are the keywords","upvote_count":"2","selected_answers":""},{"id":531072,"date":"Mon 24 Jan 2022 06:47","username":"tkanmani76","content":"D is right - https://docs.aws.amazon.com/autoscaling/ec2/userguide/adding-lifecycle-hooks.html - Refer to Default Result section - If the instance is terminating, both abandon and continue allow the instance to terminate. However, abandon stops any remaining actions, such as other lifecycle hooks, and continue allows any other lifecycle hooks to complete.","upvote_count":"1","selected_answers":""},{"id":522057,"date":"Wed 12 Jan 2022 11:49","username":"m0h3n","content":"Ans: B SSM document is reliable way to copy the data from EC2 instance.","upvote_count":"3","selected_answers":""},{"id":517493,"date":"Wed 05 Jan 2022 15:03","username":"SmartphoneSmartphone","content":"Looks like the Answer is AChanging my answer here. B looks more close. The System Manager Document (script) to copy and run it through the lambda function, is the correct solution. <br>https://github.com/aws-samples/aws-lambda-lifecycle-hooks-function<br>https://github.com/aws-samples/aws-lambda-lifecycle-hooks-function/blob/master/cloudformation/template.yaml","upvote_count":"12","selected_answers":""},{"id":518160,"date":"Thu 06 Jan 2022 11:53","username":"Smartphone","content":"Changing my answer here. B looks more close. The System Manager Document (script) to copy and run it through the lambda function, is the correct solution. <br>https://github.com/aws-samples/aws-lambda-lifecycle-hooks-function<br>https://github.com/aws-samples/aws-lambda-lifecycle-hooks-function/blob/master/cloudformation/template.yaml","upvote_count":"2","selected_answers":""}]
    }
    ,
    {
        "question_id": "#799",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must implement a multi-Region architecture for an Amazon RDS for PostgreSQL database that supports a web application. The database launches from an AWS CloudFormation template that includes AWS services and features that are present in both the primary and secondary Regions.<br>The database is configured for automated backups, and it has an RTO of 15 minutes and an RPO of 2 hours. The web application is configured to use an Amazon<br>Route 53 record to route traffic to the database.<br>Which combination of steps will result in a highly available architecture that meets all the requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#799",
            "answers": [
        
        {
            "choice": "<p>A. Create a cross-Region read replica of the database in the secondary Region. Configure an AWS Lambda function in the secondary Region to promote the read replica during failover event.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>B. In the primary Region, create a health check on the database that will invoke an AWS Lambda function when a failure is detected. Program the Lambda function to recreate the database from the latest database snapshot in the secondary Region and update the Route 53 host records for the database.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>C. Create an AWS Lambda function to copy the latest automated backup to the secondary Region every 2 hours.<br></p>",
            "correct": false,
            "feedback": ""
        },
        {
            "choice": "<p>D. Create a failover routing policy in Route 53 for the database DNS record. Set the primary and secondary endpoints to the endpoints in each Region.<br></p>",
            "correct": true,
            "feedback": ""
        },
        {
            "choice": "<p>E. Create a hot standby database in the secondary Region. Use an AWS Lambda function to restore the secondary database to the latest RDS automatic backup in the event that the primary database fails.<br></p>",
            "correct": false,
            "feedback": ""
        }
    ]
          }
        ],
        "topic_name": "",
        "discusstion": [{"id":557567,"date":"Sun 27 Feb 2022 20:39","username":"Ni_yot","content":"i like A and D for this one.With A you can easily get the replica promoted with the RTO timescale and with D.  If R53 detects a failure of one DB i will route traffic to the other DB.  Both solutions meet the 15 RTO requirement","upvote_count":"5","selected_answers":""},{"id":635811,"date":"Sun 24 Jul 2022 02:16","username":"hilft","content":"A and D. ","upvote_count":"3","selected_answers":""},{"id":632057,"date":"Sat 16 Jul 2022 10:14","username":"asfsdfsdf","content":"Answer is AD<br>example for this is here:<br>https://cloudbasic.net/aws/rds/alwayson/dr/","upvote_count":"4","selected_answers":"Selected Answer: AD"},{"id":545693,"date":"Sat 12 Feb 2022 08:02","username":"peddyua","content":"question from DevOps Prof exam","upvote_count":"3","selected_answers":""},{"id":519353,"date":"Sat 08 Jan 2022 07:51","username":"m0h3n","content":"A - Automated failover using Lambda<br>D - Failover route policy","upvote_count":"3","selected_answers":""}]
    }
    ]
}
