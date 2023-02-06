var SAP_C02_Part2 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running applications on AWS in a multi-account environment. The company's sales team and marketing team use separate AWS accounts in AWS Organizations.<br><br>The sales team stores petabytes of data in an Amazon S3 bucket. The marketing team uses Amazon QuickSight for data visualizations. The marketing team needs access to data that the sates team stores in the S3 bucket. The company has encrypted the S3 bucket with an AWS Key Management Service (AWS KMS) key. The marketing team has already created the IAM service role for QuickSight to provide QuickSight access in the marketing AWS account. The company needs a solution that will provide secure access to the data in the S3 bucket across AWS accounts.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#101",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sates account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in the sales account and grant access to the S3 bucket. From the marketing account, assume the IAM role in the sales account to access the S3 bucket. Update the QuickSight rote, to create a trust relationship with the new IAM role in the sales account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795549,
          "date": "Wed 01 Feb 2023 23:01",
          "username": "Musk",
          "content": "The rest of options have errors.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 793424,
          "date": "Mon 30 Jan 2023 23:47",
          "username": "zozza2023",
          "content": "Initially i thought C and D are correct answers BUT seems C is uncorrrect as The marketing team doesn't have access to data that the sales team stores in the S3 bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779100,
          "date": "Tue 17 Jan 2023 18:05",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is D.  Create an IAM role in the sales account and grant access to the S3 bucket. From the marketing account, assume the IAM role in the sales account to access the S3 bucket. Update the QuickSight role to create a trust relationship with the new IAM role in the sales account.<br><br>This solution meets the requirements by allowing the marketing team to access the data in the S3 bucket in the sales account through assuming an IAM role, which eliminates the need to copy the data or share the KMS key, and also eliminates the need to modify the S3 bucket policy or create a KMS grant. This solution allows to use the same access to the bucket without duplicating data and re-encrypting it.A.  Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket is not correct because it would create unnecessary data duplication and increased storage costs.<br>B.  Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sales account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket is not correct because it does not provide a secure way to share the KMS key between accounts and also it would create unnecessary data duplication and increased storage costs.C.  Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket is not correct because the Sales team's S3 bucket is in a different account, so the Marketing team cannot update the policy on the Sales team's S3 bucket.",
          "upvote_count": "322",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779101,
          "date": "Tue 17 Jan 2023 18:05",
          "username": "masetromainmasetromain",
          "content": "A.  Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket is not correct because it would create unnecessary data duplication and increased storage costs.<br>B.  Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sales account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket is not correct because it does not provide a secure way to share the KMS key between accounts and also it would create unnecessary data duplication and increased storage costs.C.  Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket is not correct because the Sales team's S3 bucket is in a different account, so the Marketing team cannot update the policy on the Sales team's S3 bucket.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 779102,
          "date": "Tue 17 Jan 2023 18:06",
          "username": "masetromain",
          "content": "C.  Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket is not correct because the Sales team's S3 bucket is in a different account, so the Marketing team cannot update the policy on the Sales team's S3 bucket.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777165,
          "date": "Mon 16 Jan 2023 00:18",
          "username": "zhangyu20000",
          "content": "D is correct.<br>C is not correct because The marketing team needs access to data that the sates team stores in the S3 bucket",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776576,
          "date": "Sun 15 Jan 2023 14:20",
          "username": "masetromainzhangyu20000masetromainmasetromainmasetromain",
          "content": "The correct answer is option C for ME.  (D is also correct but the choice is difficult)<br><br>In this option, the solution architect updates the S3 bucket policy in the marketing account to grant access to the QuickSight role. This allows the QuickSight service to read the data stored in the S3 bucket. Additionally, the solution architect creates a KMS grant for the encryption key that is used in the S3 bucket, granting the QuickSight role the ability to decrypt the data. This will allow the marketing team to access and visualize the data stored in the S3 bucket, while keeping it secure with the use of encryption.<br><br>Option A would require the creation of a new S3 bucket in the marketing account and a replication rule to copy the data. This would increase the operational overhead and could also cause data consistency issues.C is only allow marketing bucket. But data is stored on sales bucketOption B would require the creation of a service control policy (SCP) in the marketing account, and the use of AWS RAM to share the KMS key, but this option would not grant the QuickSight role the ability to decrypt the data.<br><br>Option D would require creating an IAM role in the sales account and granting access to the S3 bucket. From the marketing account, assuming the IAM role in the sales account to access the S3 bucket. This would also increase operational overhead and complexity.Option C:<br><br>- Update the S3 bucket policy in the sales account to grant access to the QuickSight role in the marketing account.<br><br>- Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role in the marketing account.<br><br>- Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.<br><br>This option allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer. The KMS grant allows the marketing team to access the decryption key without having to have access to the key itself.Option D:<br><br>- Create an IAM role in the sales account and grant access to the S3 bucket.<br>- From the marketing account, assume the IAM role in the sales account to access the S3 bucket.<br>- Update the QuickSight role, to create a trust relationship with the new IAM role in the sales account.<br><br>This option is similar to option C but instead of using KMS grant, it uses IAM role to access the S3 bucket in the sales account. This option also allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer.",
          "upvote_count": "12111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777954,
          "date": "Mon 16 Jan 2023 17:53",
          "username": "zhangyu20000",
          "content": "C is only allow marketing bucket. But data is stored on sales bucket",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776577,
          "date": "Sun 15 Jan 2023 14:20",
          "username": "masetromainmasetromainmasetromain",
          "content": "Option B would require the creation of a service control policy (SCP) in the marketing account, and the use of AWS RAM to share the KMS key, but this option would not grant the QuickSight role the ability to decrypt the data.<br><br>Option D would require creating an IAM role in the sales account and granting access to the S3 bucket. From the marketing account, assuming the IAM role in the sales account to access the S3 bucket. This would also increase operational overhead and complexity.Option C:<br><br>- Update the S3 bucket policy in the sales account to grant access to the QuickSight role in the marketing account.<br><br>- Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role in the marketing account.<br><br>- Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.<br><br>This option allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer. The KMS grant allows the marketing team to access the decryption key without having to have access to the key itself.Option D:<br><br>- Create an IAM role in the sales account and grant access to the S3 bucket.<br>- From the marketing account, assume the IAM role in the sales account to access the S3 bucket.<br>- Update the QuickSight role, to create a trust relationship with the new IAM role in the sales account.<br><br>This option is similar to option C but instead of using KMS grant, it uses IAM role to access the S3 bucket in the sales account. This option also allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 776580,
          "date": "Sun 15 Jan 2023 14:21",
          "username": "masetromainmasetromain",
          "content": "Option C:<br><br>- Update the S3 bucket policy in the sales account to grant access to the QuickSight role in the marketing account.<br><br>- Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role in the marketing account.<br><br>- Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.<br><br>This option allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer. The KMS grant allows the marketing team to access the decryption key without having to have access to the key itself.Option D:<br><br>- Create an IAM role in the sales account and grant access to the S3 bucket.<br>- From the marketing account, assume the IAM role in the sales account to access the S3 bucket.<br>- Update the QuickSight role, to create a trust relationship with the new IAM role in the sales account.<br><br>This option is similar to option C but instead of using KMS grant, it uses IAM role to access the S3 bucket in the sales account. This option also allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 776581,
          "date": "Sun 15 Jan 2023 14:21",
          "username": "masetromain",
          "content": "Option D:<br><br>- Create an IAM role in the sales account and grant access to the S3 bucket.<br>- From the marketing account, assume the IAM role in the sales account to access the S3 bucket.<br>- Update the QuickSight role, to create a trust relationship with the new IAM role in the sales account.<br><br>This option is similar to option C but instead of using KMS grant, it uses IAM role to access the S3 bucket in the sales account. This option also allows the marketing team to access the data in the S3 bucket in the sales account, while ensuring that the data remains encrypted at rest and during transfer.",
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
      "question_text": "<p>A company is planning to migrate its business-critical applications from an on-premises data center to AWS. The company has an on-premises installation of a Microsoft SQL Server Always On cluster. The company wants to migrate to an AWS managed database service. A solutions architect must design a heterogeneous database migration on AWS.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#102",
          "answers": [
            {
              "choice": "<p>A. Migrate the SQL Server databases to Amazon RDS for MySQL by using backup and restore utilities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Snowball Edge Storage Optimized device to transfer data to Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool to translate the database schema to Amazon RDS for MySQL. Then use AWS Database Migration Service (AWS DMS) to migrate the data from on-premises databases to Amazon RDS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to migrate data over the network between on-premises storage and Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797724,
          "date": "Sat 04 Feb 2023 09:05",
          "username": "Musk",
          "content": "heterogenous -> frmo onee DB engine to another",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 796187,
          "date": "Thu 02 Feb 2023 16:53",
          "username": "MasterP007",
          "content": "Straightforward - C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793426,
          "date": "Mon 30 Jan 2023 23:48",
          "username": "zozza2023",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776585,
          "date": "Sun 15 Jan 2023 14:24",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C.  Use the AWS Schema Conversion Tool to translate the database schema to Amazon RDS for MySQL. Then use AWS Database Migration Service (AWS DMS) to migrate the data from on-premises databases to Amazon RDS.<br><br>AWS Schema Conversion Tool (SCT) can automatically convert the database schema from Microsoft SQL Server to Amazon RDS for MySQL. This allows for a smooth transition of the database schema without any manual intervention.<br><br>AWS DMS can then be used to migrate the data from the on-premises databases to the newly created Amazon RDS for MySQL instance. This service can perform a one-time migration of the data or can set up ongoing replication of data changes to keep the on-premises and AWS databases in sync.Option A is not correct because while Amazon RDS for MySQL supports SQL Server databases, it is not a good fit for migrating business-critical applications. The data model and architecture are different and would require significant re-engineering.<br><br>Option B is not correct because AWS Snowball Edge Storage Optimized devices are used for transferring large amounts of data to and from AWS, but they do not support SQL Server.<br><br>Option D is not correct because AWS DataSync can only transfer files and folders, it does not support SQL Server databases.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776586,
          "date": "Sun 15 Jan 2023 14:25",
          "username": "masetromain",
          "content": "Option A is not correct because while Amazon RDS for MySQL supports SQL Server databases, it is not a good fit for migrating business-critical applications. The data model and architecture are different and would require significant re-engineering.<br><br>Option B is not correct because AWS Snowball Edge Storage Optimized devices are used for transferring large amounts of data to and from AWS, but they do not support SQL Server.<br><br>Option D is not correct because AWS DataSync can only transfer files and folders, it does not support SQL Server databases.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#103",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A publishing company's design team updates the icons and other static assets that an ecommerce web application uses. The company serves the icons and assets from an Amazon S3 bucket that is hosted in the company's production account. The company also uses a development account that members of the design team can access.<br><br>After the design team tests the static assets in the development account, the design team needs to load the assets into the S3 bucket in the production account. A solutions architect must provide the design team with access to the production account without exposing other parts of the web application to the risk of unwanted changes.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#103",
          "answers": [
            {
              "choice": "<p>A. In the production account, create a new IAM policy that allows read and write access to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the development account, create a new IAM policy that allows read and write access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the production account, create a role Attach the new policy to the role. Define the development account as a trusted entity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the development account, create a role. Attach the new policy to the role Define the production account as a trusted entity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role In the production account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797740,
          "date": "Sat 04 Feb 2023 09:31",
          "username": "Musk",
          "content": "I think it's clear",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 795363,
          "date": "Wed 01 Feb 2023 18:36",
          "username": "tatdatpham",
          "content": "ACE is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 793429,
          "date": "Mon 30 Jan 2023 23:55",
          "username": "zozza2023",
          "content": "ACEshould works",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 779103,
          "date": "Tue 17 Jan 2023 18:08",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is A, C, and E. <br><br>A: In the production account, creating a new IAM policy that allows read and write access to the S3 bucket is correct because it allows the design team to upload and update the static assets in the S3 bucket in the production account.<br><br>C: In the production account, creating a role and attaching the new policy to the role, and defining the development account as a trusted entity is correct because it allows the design team from the development account to assume the role and access the S3 bucket in the production account, while limiting their access to only the specific resources and actions defined in the policy.E: In the development account, creating a group that contains all the IAM users of the design team and attaching a different IAM policy to the group to allow the sts:AssumeRole action on the role in the production account is correct because it allows the users in the group to assume the role created in the production account, which gives them access to the S3 bucket in the production account.<br><br>The other choices are not correct because:<br><br>B: In the development account, creating a new IAM policy that allows read and write access to the S3 bucket is not correct because the design team needs to access the S3 bucket in the production account, not the development account.D: In the development account, creating a role, attaching the new policy to the role and defining the production account as a trusted entity is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not create a role in the development account.<br><br>F: In the development account, creating a group that contains all the IAM users of the design team and attaching a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not the development account.",
          "upvote_count": "321",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 779105,
          "date": "Tue 17 Jan 2023 18:08",
          "username": "masetromainmasetromain",
          "content": "E: In the development account, creating a group that contains all the IAM users of the design team and attaching a different IAM policy to the group to allow the sts:AssumeRole action on the role in the production account is correct because it allows the users in the group to assume the role created in the production account, which gives them access to the S3 bucket in the production account.<br><br>The other choices are not correct because:<br><br>B: In the development account, creating a new IAM policy that allows read and write access to the S3 bucket is not correct because the design team needs to access the S3 bucket in the production account, not the development account.D: In the development account, creating a role, attaching the new policy to the role and defining the production account as a trusted entity is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not create a role in the development account.<br><br>F: In the development account, creating a group that contains all the IAM users of the design team and attaching a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not the development account.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 779106,
          "date": "Tue 17 Jan 2023 18:08",
          "username": "masetromain",
          "content": "D: In the development account, creating a role, attaching the new policy to the role and defining the production account as a trusted entity is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not create a role in the development account.<br><br>F: In the development account, creating a group that contains all the IAM users of the design team and attaching a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account is not correct because the design team needs to assume a role in the production account to access the S3 bucket, not the development account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777171,
          "date": "Mon 16 Jan 2023 00:24",
          "username": "zhangyu20000",
          "content": "ACE is my answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776600,
          "date": "Sun 15 Jan 2023 14:32",
          "username": "masetromainmasetromain",
          "content": "A, D, and E are the correct steps that would meet the requirements.<br>A.  In the production account, create a new IAM policy that allows read and write access to the S3 bucket. This will allow the design team to read and write to the S3 bucket that holds the assets in the production account.<br>D.  In the development account, create a role. Attach the new policy to the role. Define the production account as a trusted entity. This will allow the design team to assume a role in the development account that has permissions to access the S3 bucket in the production account.<br>E.  In the development account, create a group that contains all the IAM users of the design team. Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role in the production account. This will allow the users in the design team group to assume the role created in step D and access the S3 bucket in the production account.Option B is not required because the design team needs to access the S3 bucket in the production account, not in the development account.<br><br>Option C is not required because the design team needs to access the S3 bucket in the production account and this can be done by assuming a role in the development account.<br><br>Option F is not required because the design team needs to access the S3 bucket in the production account and this can be done by assuming a role in the development account that is trusted by the production account.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 776601,
          "date": "Sun 15 Jan 2023 14:32",
          "username": "masetromain",
          "content": "Option B is not required because the design team needs to access the S3 bucket in the production account, not in the development account.<br><br>Option C is not required because the design team needs to access the S3 bucket in the production account and this can be done by assuming a role in the development account.<br><br>Option F is not required because the design team needs to access the S3 bucket in the production account and this can be done by assuming a role in the development account that is trusted by the production account.",
          "upvote_count": "1",
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
      "question_text": "<p>A company developed a pilot application by using AWS Elastic Beanstalk and Java. To save costs during development, the company's development team deployed the application into a single-instance environment. Recent tests indicate that the application consumes more CPU than expected. CPU utilization is regularly greater than 85%, which causes some performance bottlenecks.<br><br>A solutions architect must mitigate the performance issues before the company launches the application to production.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#104",
          "answers": [
            {
              "choice": "<p>A. Create a new Elastic Beanstalk application. Select a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the maximum CPU utilization is over 85% for 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second Elastic Beanstalk environment. Apply the traffic-splitting deployment policy. Specify a percentage of incoming traffic to direct to the new environment in the average CPU utilization is over 85% for 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing environment’s capacity configuration to use a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the average CPU utilization is over 85% for 5 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Select the Rebuild environment action with the load balancing option. Select an Availability Zones. Add a scale-out rule that will run if the sum CPU utilization is over 85% for 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797747,
          "date": "Sat 04 Feb 2023 09:41",
          "username": "Musk",
          "content": "It's C.  https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html#using-features.managing.changetype",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786727,
          "date": "Tue 24 Jan 2023 18:23",
          "username": "vsk12mikeshop",
          "content": "A: Elastic Beanstalk environment can not be changed.https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html<br>Yes they can.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 793861,
          "date": "Tue 31 Jan 2023 09:44",
          "username": "mikeshop",
          "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html<br>Yes they can.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786286,
          "date": "Tue 24 Jan 2023 08:54",
          "username": "Untamables",
          "content": "I think AWS wants you to know is the below.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784271,
          "date": "Sun 22 Jan 2023 13:16",
          "username": "romidan",
          "content": "I think C does make sense as per the link below - <br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.EditConfig.html<br><br>As per this link, a change would automatically initiate the new instance as per the ASG min attribute.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779110,
          "date": "Tue 17 Jan 2023 18:11",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A.  Create a new Elastic Beanstalk application. Select a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the maximum CPU utilization is over 85% for 5 minutes.<br>This solution will create a new load-balanced environment which will increase the scalability and availability of the application, which will help mitigate the performance issues. Additionally, by adding a scale-out rule that triggers when the CPU utilization is high, the application will automatically scale to handle increased traffic, which will help alleviate the performance bottlenecks.<br>B.  Create a second Elastic Beanstalk environment. Apply the traffic-splitting deployment policy. Specify a percentage of incoming traffic to direct to the new environment in the average CPU utilization is over 85% for 5 minutes.<br>This option is not correct because it only directs some traffic to the new environment but it does not scale out the instances.C.  Modify the existing environment’s capacity configuration to use a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the average CPU utilization is over 85% for 5 minutes.<br>This option is not correct because you can't change the existing environment.<br>D.  Select the Rebuild environment action with the load balancing option. Select an Availability Zones. Add a scale-out rule that will run if the sum CPU utilization is over 85% for 5 minutes.<br>This option is not correct because it rebuilds the environment but it does not scale out the instances.<br><br>In summary, option A is the correct answer because it creates a new load-balanced environment, which increases scalability and availability, and it also includes a scale-out rule that triggers when CPU utilization is high, which automatically scales the instances to handle increased traffic, thus alleviating performance bottlenecks.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779111,
          "date": "Tue 17 Jan 2023 18:11",
          "username": "masetromain",
          "content": "C.  Modify the existing environment’s capacity configuration to use a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the average CPU utilization is over 85% for 5 minutes.<br>This option is not correct because you can't change the existing environment.<br>D.  Select the Rebuild environment action with the load balancing option. Select an Availability Zones. Add a scale-out rule that will run if the sum CPU utilization is over 85% for 5 minutes.<br>This option is not correct because it rebuilds the environment but it does not scale out the instances.<br><br>In summary, option A is the correct answer because it creates a new load-balanced environment, which increases scalability and availability, and it also includes a scale-out rule that triggers when CPU utilization is high, which automatically scales the instances to handle increased traffic, thus alleviating performance bottlenecks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777177,
          "date": "Mon 16 Jan 2023 00:40",
          "username": "zhangyu20000keenian",
          "content": "A: You cannot change envrionmentYes, you can. Try on your AWS account. The correct answer is C. ",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 784410,
          "date": "Sun 22 Jan 2023 15:59",
          "username": "keenian",
          "content": "Yes, you can. Try on your AWS account. The correct answer is C. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 776607,
          "date": "Sun 15 Jan 2023 14:37",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer is C.  This solution will meet the requirements with the least operational overhead because it modifies the existing environment's capacity configuration to use a load-balanced environment type and selects all availability zones. This will allow the application to scale out automatically if the average CPU utilization is over 85% for 5 minutes. This will help alleviate the performance issues without the need to create a new environment or rebuild the existing one.Option A, creating a new Elastic Beanstalk application, would require more operational overhead as it would involve creating a new environment and configuring it with a load-balanced environment type and selecting all availability zones.<br><br>Option B, creating a second Elastic Beanstalk environment and applying a traffic-splitting deployment policy, would also require more operational overhead as it would involve creating a new environment and configuring it to handle some of the incoming traffic.<br><br>Option D, selecting the Rebuild environment action with the load balancing option, would also require more operational overhead as it would involve rebuilding the existing environment and configuring it with a load-balanced environment type.To modify the existing environment's capacity in Elastic Beanstalk, you can use the Elastic Beanstalk management console or the AWS Elastic Beanstalk API.<br><br>To do this using the management console:<br><br>1 - Open the Elastic Beanstalk management console.<br>2 - Select the application and environment that you want to modify.<br>3 - In the navigation pane, choose Configuration.<br>4 - In the Capacity configuration section, you can modify the number of instances in your environment and configure automatic scaling settings.<br><br>To do this using the AWS Elastic Beanstalk API, you can use the UpdateEnvironment API action. The UpdateEnvironment action allows you to change the number of instances in your environment, as well as other settings like the environment name and description.",
          "upvote_count": "312",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776608,
          "date": "Sun 15 Jan 2023 14:37",
          "username": "masetromainmasetromain",
          "content": "Option A, creating a new Elastic Beanstalk application, would require more operational overhead as it would involve creating a new environment and configuring it with a load-balanced environment type and selecting all availability zones.<br><br>Option B, creating a second Elastic Beanstalk environment and applying a traffic-splitting deployment policy, would also require more operational overhead as it would involve creating a new environment and configuring it to handle some of the incoming traffic.<br><br>Option D, selecting the Rebuild environment action with the load balancing option, would also require more operational overhead as it would involve rebuilding the existing environment and configuring it with a load-balanced environment type.To modify the existing environment's capacity in Elastic Beanstalk, you can use the Elastic Beanstalk management console or the AWS Elastic Beanstalk API.<br><br>To do this using the management console:<br><br>1 - Open the Elastic Beanstalk management console.<br>2 - Select the application and environment that you want to modify.<br>3 - In the navigation pane, choose Configuration.<br>4 - In the Capacity configuration section, you can modify the number of instances in your environment and configure automatic scaling settings.<br><br>To do this using the AWS Elastic Beanstalk API, you can use the UpdateEnvironment API action. The UpdateEnvironment action allows you to change the number of instances in your environment, as well as other settings like the environment name and description.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 776611,
          "date": "Sun 15 Jan 2023 14:38",
          "username": "masetromain",
          "content": "To modify the existing environment's capacity in Elastic Beanstalk, you can use the Elastic Beanstalk management console or the AWS Elastic Beanstalk API.<br><br>To do this using the management console:<br><br>1 - Open the Elastic Beanstalk management console.<br>2 - Select the application and environment that you want to modify.<br>3 - In the navigation pane, choose Configuration.<br>4 - In the Capacity configuration section, you can modify the number of instances in your environment and configure automatic scaling settings.<br><br>To do this using the AWS Elastic Beanstalk API, you can use the UpdateEnvironment API action. The UpdateEnvironment action allows you to change the number of instances in your environment, as well as other settings like the environment name and description.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#105",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand.<br><br>Which of the following actions would allow the database to handle the month-end load with the LEAST impact on performance?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#105",
          "answers": [
            {
              "choice": "<p>A. Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/O per second by taking snapshots before the end of the month and reverting back afterwards.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793433,
          "date": "Tue 31 Jan 2023 00:00",
          "username": "zozza2023",
          "content": "B is the best solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776617,
          "date": "Sun 15 Jan 2023 14:42",
          "username": "masetromain",
          "content": "B.  Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.<br><br>This is the optimal solution as migrating the database to Amazon RDS will provide the ability to easily scale read replicas for handling increased read traffic during the end of the month. Additionally, RDS will manage the underlying infrastructure and provide automatic backups, software patching, and monitoring, which will reduce the operational overhead for the company. <br><br>Option A may help but it will not be sufficient to handle the heavy load, option C and D are not efficient solutions to han",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Java application that has complex dependencies on VMs that are in the company's data center. The application is stable. but the company wants to modernize the technology stack. The company wants to migrate the application to AWS and minimize the administrative overhead to maintain the servers.<br><br>Which solution will meet these requirements with the LEAST code changes?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#106",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Grant the ECS task execution role permission 10 access the ECR image repository. Configure Amazon ECS to use an Application Load Balancer (ALB). Use the ALB to interact with the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application code to a container that runs in AWS Lambda. Build an Amazon API Gateway REST API with Lambda integration. Use API Gateway to interact with the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application to Amazon Elastic Kubernetes Service (Amazon EKS) on EKS managed node groups by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Give the EKS nodes permission to access the ECR image repository. Use Amazon API Gateway to interact with the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application code to a container that runs in AWS Lambda. Configure Lambda to use an Application Load Balancer (ALB). Use the ALB to interact with the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797753,
          "date": "Sat 04 Feb 2023 09:52",
          "username": "MuskMusk",
          "content": "B implies LEAST code changes.Sorry I meant A",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 797754,
          "date": "Sat 04 Feb 2023 09:53",
          "username": "Musk",
          "content": "Sorry I meant A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795791,
          "date": "Thu 02 Feb 2023 07:00",
          "username": "jojom19980",
          "content": "B should be correct, why to use EKS, the question does not mention any details or complex design to use it so I will go with an easy and cost Solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776623,
          "date": "Sun 15 Jan 2023 14:46",
          "username": "masetromainMuskMuskmasetromain",
          "content": "The correct answer would be A, as migrating the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate by using AWS App2Container and storing container images in Amazon Elastic Container Registry (Amazon ECR) would minimize the code changes and administrative overhead required to maintain the servers. This option would allow the company to use the Application Load Balancer (ALB) to interact with the application and the ECS task execution role permission to access the ECR image repository.<br><br>Option B would require the application code to be migrated to a container that runs in AWS Lambda, which would require more code changes. <br><br>Option C would require migrating the application to Amazon Elastic Kubernetes Service (Amazon EKS) which would require more administrative overhead. <br><br>Option D would require configuring Lambda to use an Application Load Balancer (ALB), which is not a native feature of Lambda.B does not say anything about Lambda. Where have you red that?You are right, I mixed A with BThis solution allows for the existing application code to be packaged into a container, which can then be deployed to ECS on Fargate. The use of AWS App2Container will help automate the containerization process, minimizing the need for code changes. Additionally, by using ECR to store container images, the application can continue to use the same images and dependencies that it currently relies on. The use of an Application Load Balancer (ALB) to interact with the application further simplifies the migration process by allowing the use of the existing application's endpoint.",
          "upvote_count": "4112",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 797752,
          "date": "Sat 04 Feb 2023 09:52",
          "username": "MuskMusk",
          "content": "B does not say anything about Lambda. Where have you red that?You are right, I mixed A with B",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 797756,
          "date": "Sat 04 Feb 2023 09:53",
          "username": "Musk",
          "content": "You are right, I mixed A with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776625,
          "date": "Sun 15 Jan 2023 14:48",
          "username": "masetromain",
          "content": "This solution allows for the existing application code to be packaged into a container, which can then be deployed to ECS on Fargate. The use of AWS App2Container will help automate the containerization process, minimizing the need for code changes. Additionally, by using ECR to store container images, the application can continue to use the same images and dependencies that it currently relies on. The use of an Application Load Balancer (ALB) to interact with the application further simplifies the migration process by allowing the use of the existing application's endpoint.",
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
      "question_text": "<p>A company has an asynchronous HTTP application that is hosted as an AWS Lambda function. A public Amazon API Gateway endpoint invokes the Lambda function. The Lambda function and the API Gateway endpoint reside in the us-east-1 Region. A solutions architect needs to redesign the application to support failover to another AWS Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#107",
          "answers": [
            {
              "choice": "<p>A. Create an API Gateway endpoint in the us-west-2 Region to direct traffic to the Lambda function in us-east-1. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure API Gateway to direct traffic to the SQS queue instead of to the Lambda function. Configure the Lambda function to pull messages from the queue for processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the Lambda function to the us-west-2 Region. Create an API Gateway endpoint in us-west-2 10 direct traffic to the Lambda function in us-west-2. Configure AWS Global Accelerator and an Application Load Balancer to manage traffic across the two API Gateway endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the Lambda function and an API Gateway endpoint to the us-west-2 Region. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 779113,
          "date": "Tue 17 Jan 2023 18:13",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D.  Deploy the Lambda function and an API Gateway endpoint to the us-west-2 Region. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints. This solution meets the requirement of having a failover to another region by having a copy of the Lambda function and API Gateway endpoint in a different region, and using Route 53's failover routing policy to route traffic between the two regions.<br><br>Option A is not correct because it only creates an additional API Gateway endpoint in us-west-2 and relies on Route 53's failover routing policy to direct traffic to the correct endpoint. But it does not deploy the Lambda function to the new region and this makes the failover incomplete.Option B is not correct because it uses a SQS queue as a buffer between the API Gateway and the Lambda function, but this does not provide failover to another region. In addition, it would also increase the latency of the system as the SQS will act as an additional layer.<br><br>Option C is not correct because it deploys the Lambda function to the us-west-2 Region and creates an API Gateway endpoint in the same region. But it uses AWS Global Accelerator and an Application Load Balancer to manage traffic across the two API Gateway endpoints. However, this is not a failover solution as both regions will be active and serving traffic at the same time.",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779115,
          "date": "Tue 17 Jan 2023 18:13",
          "username": "masetromain",
          "content": "Option B is not correct because it uses a SQS queue as a buffer between the API Gateway and the Lambda function, but this does not provide failover to another region. In addition, it would also increase the latency of the system as the SQS will act as an additional layer.<br><br>Option C is not correct because it deploys the Lambda function to the us-west-2 Region and creates an API Gateway endpoint in the same region. But it uses AWS Global Accelerator and an Application Load Balancer to manage traffic across the two API Gateway endpoints. However, this is not a failover solution as both regions will be active and serving traffic at the same time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793436,
          "date": "Tue 31 Jan 2023 00:09",
          "username": "zozza2023",
          "content": "The correct answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777194,
          "date": "Mon 16 Jan 2023 01:03",
          "username": "zhangyu20000",
          "content": "D is correct<br>A is not because the Lambda is in us-ease-1 but api gateway is in us-west-2. cannot cross regions",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776639,
          "date": "Sun 15 Jan 2023 15:01",
          "username": "masetromain",
          "content": "The correct answer is A. <br><br>In this solution, an API Gateway endpoint is created in the us-west-2 Region. This new endpoint is configured to direct traffic to the Lambda function in us-east-1. If a failure occurs in the us-east-1 Region, Amazon Route 53's failover routing policy automatically routes traffic to the us-west-2 Region. This ensures that traffic is directed to a healthy endpoint, providing failover support for the application.<br><br>B, C and D does not meet the requirement of having failover routing policy.<br><br>In B, SQS is not a failover mechanism, it is a messaging service and it does not provide failover routing.<br><br>In C, Global Accelerator and Application Load Balancer does not provide failover routing.<br><br>In D, While creating a second endpoint in the us-west-2 Region and using Amazon Route 53 to route traffic to it, it still does not provide failover routing.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#108",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has structured its AWS accounts to be part of an organization in AWS Organizations. The company has set up consolidated billing and has mapped its departments to the following OUs: Finance, Sales, Human Resources (HR), Marketing, and Operations. Each OU has multiple AWS accounts, one for each environment within a department. These environments are development, test, pre-production, and production.<br><br>The HR department is releasing a new system that will launch in 3 months. In preparation, the HR department has purchased several Reserved Instances (RIs) in its production AWS account. The HR department will install the new application on this account. The HR department wants to make sure that other departments cannot share the RI discounts.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#108",
          "answers": [
            {
              "choice": "<p>A. In the AWS Billing and Cost Management console for the HR department's production account turn off RI sharing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the HR department's production AWS account from the organization. Add the account 10 the consolidating billing configuration only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the AWS Billing and Cost Management console. use the organization’s management account 10 turn off RI Sharing for the HR departments production AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP in the organization to restrict access to the RIs. Apply the SCP to the OUs of the other departments.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795795,
          "date": "Thu 02 Feb 2023 07:07",
          "username": "jojom19980",
          "content": "The correct answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776699,
          "date": "Sun 15 Jan 2023 16:08",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C. <br><br>In this solution, the organization’s management account can be used to turn off RI sharing for the HR department's production AWS account in the AWS Billing and Cost Management console. This will ensure that the other departments cannot share the RI discounts and the HR department can use the RIs for their new system without any interruption.A, B and D does not meet the requirement of turning off RI sharing for the HR department's production AWS account.<br><br>In A, Turning off RI sharing in the HR department's production account will not prevent other departments from sharing the RI discounts.<br><br>In B, Removing the HR department's production AWS account from the organization may cause issues in consolidated billing and it does not prevent other departments from sharing the RI discounts.<br><br>In D, Creating an SCP in the organization to restrict access to the RIs is not necessary because the management account can directly turn off the RI sharing, it also does not prevent other departments from sharing the RI discounts.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776700,
          "date": "Sun 15 Jan 2023 16:08",
          "username": "masetromain",
          "content": "A, B and D does not meet the requirement of turning off RI sharing for the HR department's production AWS account.<br><br>In A, Turning off RI sharing in the HR department's production account will not prevent other departments from sharing the RI discounts.<br><br>In B, Removing the HR department's production AWS account from the organization may cause issues in consolidated billing and it does not prevent other departments from sharing the RI discounts.<br><br>In D, Creating an SCP in the organization to restrict access to the RIs is not necessary because the management account can directly turn off the RI sharing, it also does not prevent other departments from sharing the RI discounts.",
          "upvote_count": "1",
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
      "question_text": "<p>A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet. An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.<br><br>The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.<br><br>How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#109",
          "answers": [
            {
              "choice": "<p>A. Suspend the Auto Scaling group’s HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.<br></p>",
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
              "choice": "<p>D. Suspend the Auto Scaling group’s Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793437,
          "date": "Tue 31 Jan 2023 00:12",
          "username": "zozza2023",
          "content": "The correct answer is D. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776711,
          "date": "Sun 15 Jan 2023 16:12",
          "username": "masetromainmasetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/51249-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answer is D. <br><br>In this solution, the architect can suspend the Auto Scaling group's Terminate process, which will prevent the instances marked as unhealthy from being terminated. This will allow the architect to log in to the instance using Session Manager and troubleshoot the issue without losing access to the instance.Option A is incorrect because suspending the HealthCheck scaling process will not prevent instances from being terminated.<br><br>Option B is incorrect because enabling EC2 instance termination protection will not prevent instances from being terminated by Auto Scaling group.<br><br>Option C is incorrect because setting the termination policy to OldestInstance on the Auto Scaling group will not prevent instances marked as unhealthy from being terminated.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776712,
          "date": "Sun 15 Jan 2023 16:12",
          "username": "masetromain",
          "content": "Option A is incorrect because suspending the HealthCheck scaling process will not prevent instances from being terminated.<br><br>Option B is incorrect because enabling EC2 instance termination protection will not prevent instances from being terminated by Auto Scaling group.<br><br>Option C is incorrect because setting the termination policy to OldestInstance on the Auto Scaling group will not prevent instances marked as unhealthy from being terminated.",
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
      "question_text": "<p>A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations.<br><br>Administrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed. Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#110",
          "answers": [
            {
              "choice": "<p>A. Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an organization-wide AWS Config rule that requires all resources in the selected OUs to associate the AWS WAF rules. Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources. Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OUs where the AWS Config rule is applied.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create AWS WAF rules in the management account of the organization. Use AWS Lambda environment variables to store account numbers and OUs to manage. Update environment variables as needed to add or remove accounts or OUs. Create cross-account IAM roles in member accounts. Assume the roles by using AWS Security Token Service (AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Control Tower to manage AWS WAF rules across accounts in the organization. Use AWS Key Management Service (AWS KMS) to store account numbers and OUs to manage. Update AWS KMS as needed to add or remove accounts or OUs. Create IAM users in member accounts. Allow AWS Control Tower in the management account to use the access key and secret access key to create and update AWS WAF rules in the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793439,
          "date": "Tue 31 Jan 2023 00:13",
          "username": "zozza2023",
          "content": "The correct answer is A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 787287,
          "date": "Wed 25 Jan 2023 06:12",
          "username": "Untamables",
          "content": "https://aws.amazon.com/solutions/implementations/automations-for-aws-firewall-manager/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776719,
          "date": "Sun 15 Jan 2023 16:16",
          "username": "masetromainmasetromain",
          "content": "The correct answer is A. <br><br>In this solution, AWS Firewall Manager is used to manage AWS WAF rules across accounts in the organization. An AWS Systems Manager Parameter Store parameter is used to store account numbers and OUs to manage. This parameter can be updated as needed to add or remove accounts or OUs. An Amazon EventBridge rule is used to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account. This solution allows for easy management of AWS WAF rules across multiple accounts with minimal operational overhead.Option B does not meet the requirement of being able to add or remove accounts or OUs from managed AWS WAF rule sets as needed.<br><br>Option C is not the best approach as it requires manual configuration of the cross-account IAM roles and assume-role calls in the Lambda function, increasing the operational overhead.<br><br>Option D does not meet the requirement of providing a centralized management console to manage the WAF rules across multiple accounts.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776720,
          "date": "Sun 15 Jan 2023 16:16",
          "username": "masetromain",
          "content": "Option B does not meet the requirement of being able to add or remove accounts or OUs from managed AWS WAF rule sets as needed.<br><br>Option C is not the best approach as it requires manual configuration of the cross-account IAM roles and assume-role calls in the Lambda function, increasing the operational overhead.<br><br>Option D does not meet the requirement of providing a centralized management console to manage the WAF rules across multiple accounts.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#111",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is auditing the security setup or an AWS Lambda function for a company. The Lambda function retrieves, the latest changes from an Amazon Aurora database. The Lambda function and the database run in the same VPC.  Lambda environment variables are providing the database credentials to the Lambda function.<br><br>The Lambda function aggregates data and makes the data available in an Amazon S3 bucket that is configured for server-side encryption with AWS KMS managed encryption keys (SSE-KMS). The data must not travel across the Internet. If any database credentials become compromised, the company needs a solution that minimizes the impact of the compromise.<br><br>What should the solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#111",
          "answers": [
            {
              "choice": "<p>A. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793442,
          "date": "Tue 31 Jan 2023 00:17",
          "username": "zozza2023",
          "content": "a little bit confused between A and D but as said by others members D doesn't adress the The question of \\\"data must not travel across the Internet\\\"==> A is the answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790818,
          "date": "Sat 28 Jan 2023 17:46",
          "username": "Untamables",
          "content": "https://aws.amazon.com/blogs/database/iam-role-based-authentication-to-amazon-aurora-from-serverless-applications/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786759,
          "date": "Tue 24 Jan 2023 18:58",
          "username": "vsk12",
          "content": "A: the critical point here - is \\\"The data must not travel across the Internet\\\". VPC endpoint for Amazon S3 help in this.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779117,
          "date": "Tue 17 Jan 2023 18:16",
          "username": "masetromainmasetromainmasetromain",
          "content": "You are correct. Option A: Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC is the best solution.<br><br>It is a combination of measures that work together to meet the requirements:<br><br>- IAM database authentication for the Aurora DB cluster allows for secure and centralized management of access to the database, and eliminates the need to store user credentials in the database.<br><br>- Deploying a gateway VPC endpoint for Amazon S3 ensures that data does not travel across the internet and is protected by VPC security.<br>Changing the IAM role for the Lambda function allows it to access the database securely via IAM database authentication.<br><br>- By implementing the above steps, you can ensure that the data is protected in transit and at rest, and that the impact of a compromise of the database credentials is minimized.Option B: Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br>This option only covers the encryption of data in transit and doesn't address the security concerns of the data at rest.<br><br>Option C: Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br>This option addresses the security concern of rotating the credentials but doesn't cover the secure authentication to the database.Option D: Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br>This option addresses the security concern of rotating the credentials but doesn't cover the secure authentication to the database and doesn't address the security concerns of the data at rest.<br><br>Option A is the best choice as it covers all the security concern in the question :<br><br>- secure authentication to the database<br>- encryption of data in transit<br>- protection of the data at rest.<br><br>It also provides centralised management of access to the database via IAM and protection of data while stored in S3 via a VPC endpoint.",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779118,
          "date": "Tue 17 Jan 2023 18:17",
          "username": "masetromainmasetromain",
          "content": "Option B: Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br>This option only covers the encryption of data in transit and doesn't address the security concerns of the data at rest.<br><br>Option C: Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br>This option addresses the security concern of rotating the credentials but doesn't cover the secure authentication to the database.Option D: Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br>This option addresses the security concern of rotating the credentials but doesn't cover the secure authentication to the database and doesn't address the security concerns of the data at rest.<br><br>Option A is the best choice as it covers all the security concern in the question :<br><br>- secure authentication to the database<br>- encryption of data in transit<br>- protection of the data at rest.<br><br>It also provides centralised management of access to the database via IAM and protection of data while stored in S3 via a VPC endpoint.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 779120,
          "date": "Tue 17 Jan 2023 18:17",
          "username": "masetromain",
          "content": "Option D: Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br>This option addresses the security concern of rotating the credentials but doesn't cover the secure authentication to the database and doesn't address the security concerns of the data at rest.<br><br>Option A is the best choice as it covers all the security concern in the question :<br><br>- secure authentication to the database<br>- encryption of data in transit<br>- protection of the data at rest.<br><br>It also provides centralised management of access to the database via IAM and protection of data while stored in S3 via a VPC endpoint.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777201,
          "date": "Mon 16 Jan 2023 01:20",
          "username": "zhangyu20000",
          "content": "A is correct answer - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776726,
          "date": "Sun 15 Jan 2023 16:19",
          "username": "masetromain",
          "content": "The correct answer is D. <br><br>In this solution, the solutions architect would recommend saving the database credentials in AWS Secrets Manager. Secrets Manager allows for password rotation on the credentials, which means that the credentials can be automatically rotated on a schedule to minimize the impact of a compromise. Additionally, the IAM role for the Lambda function can be changed to allow the function to access Secrets Manager, so that the function can retrieve the credentials securely.<br><br>Enforcing HTTPS on the connection to Amazon S3 during data transfers also ensures that the data is transmitted securely and does not travel across the internet.<br><br>Option A does not include a way to securely store and rotate the database credentials, and Option B does not include a way to securely retrieve the credentials from the Lambda function. Option C does not include a way to encrypt the data transfer to S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#112",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large mobile gaming company has successfully migrated all of its on-premises infrastructure to the AWS Cloud. A solutions architect is reviewing the environment to ensure that it was built according to the design and that it is running in alignment with the Well-Architected Framework.<br><br>While reviewing previous monthly costs in Cost Explorer, the solutions architect notices that the creation and subsequent termination of several large instance types account for a high proportion of the costs. The solutions architect finds out that the company’s developers are launching new Amazon EC2 instances as part of their testing and that the developers are not using the appropriate instance types.<br><br>The solutions architect must implement a control mechanism to limit the instance types that only the developers can launch.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#112",
          "answers": [
            {
              "choice": "<p>A. Create a desired-instance-type managed rule in AWS Config. Configure the rule with the instance types that are allowed. Attach the rule to an event to run each time a new EC2 instance is launched.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the EC2 console, create a launch template that specifies the instance types that are allowed. Assign the launch template to the developers’ IAM accounts.<br></p>",
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
      "discusstion": [
        {
          "id": 793443,
          "date": "Tue 31 Jan 2023 00:20",
          "username": "zozza2023",
          "content": "answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776729,
          "date": "Sun 15 Jan 2023 16:21",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C. <br><br>In this solution, a new IAM policy is created that specifies the allowed instance types. This policy is then attached to an IAM group that contains the IAM accounts for the developers. This will ensure that the developers can only launch instances of the specified types, thus limiting the costs associated with the creation and termination of large instances.A.  Creating a desired-instance-type managed rule in AWS Config is not a sufficient solution, as it only identifies when an instance is launched with an unauthorized type, it does not prevent it.<br>B.  Creating a launch template that specifies the instance types that are allowed is not a sufficient solution, because it limits the instances types that can be launched in the EC2 console, but it does not prevent the launch of instances through the AWS SDK, AWS CLI, or other AWS services.<br>D.  Using EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image is not a direct solution to the problem of limiting the instance types that only the developers can launch. It can be useful for creating standardize images for the developers, but it does not provide the necessary control mechanism to limit the instance types.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776730,
          "date": "Sun 15 Jan 2023 16:21",
          "username": "masetromain",
          "content": "A.  Creating a desired-instance-type managed rule in AWS Config is not a sufficient solution, as it only identifies when an instance is launched with an unauthorized type, it does not prevent it.<br>B.  Creating a launch template that specifies the instance types that are allowed is not a sufficient solution, because it limits the instances types that can be launched in the EC2 console, but it does not prevent the launch of instances through the AWS SDK, AWS CLI, or other AWS services.<br>D.  Using EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image is not a direct solution to the problem of limiting the instance types that only the developers can launch. It can be useful for creating standardize images for the developers, but it does not provide the necessary control mechanism to limit the instance types.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.<br><br>Which actions should a solutions architect lake to resolve the problem and prevent it from happening in the future? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#113",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule in each account to find resources with missing tags.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP in the organization with a deny action for ec2:RunInstances if the Project tag is missing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Inspector in the organization to find resources with missing tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy in each account with a deny action for ec2:RunInstances if the Project tag is missing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797795,
          "date": "Sat 04 Feb 2023 10:57",
          "username": "Musk",
          "content": "BE makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 790538,
          "date": "Sat 28 Jan 2023 12:00",
          "username": "zozza2023",
          "content": "the best way to deploy config rules accross accounts= SCP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 788814,
          "date": "Thu 26 Jan 2023 15:45",
          "username": "masssa",
          "content": "In adding tag, the keywords are config, scp, aggreagator.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 787324,
          "date": "Wed 25 Jan 2023 07:29",
          "username": "Untamables",
          "content": "A and E are correct. But the below is the best way to deploy config rules accross accounts.<br>https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html<br>https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html<br>B is correct.<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 786939,
          "date": "Tue 24 Jan 2023 21:37",
          "username": "ccort",
          "content": "ABE for me<br><br>D I am sure it is not, it would be too much trouble putting the policy in each account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 777204,
          "date": "Mon 16 Jan 2023 01:23",
          "username": "zhangyu20000",
          "content": "BDE are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776742,
          "date": "Sun 15 Jan 2023 16:33",
          "username": "masetromainmasetromain",
          "content": "The correct answer is BDE. <br><br>B: Creating an SCP (Service Control Policy) in the organization with a deny action for ec2:RunInstances if the Project tag is missing will prevent developers from launching instances without the necessary tag. This is a good option because it will prevent the problem from happening again in the future.<br><br>D: Creating an IAM policy in each account with a deny action for ec2:RunInstances if the Project tag is missing will also prevent developers from launching instances without the necessary tag. This is a good option because it will prevent the problem from happening again in the future.<br><br>E: Creating an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag will help the team identify which instances are missing the tag, so they can take action to add the tag. This is a good option because it will help resolve the problem that has already happened and also help the team identify any instances that are not compliant with the company's tagging policy.The other options, A and C are not appropriate for this scenario, because they would only identify the instances that are missing the tag, but not prevent the problem from happening again. Using option F is also not appropriate for this scenario, because AWS Security Hub is not used for cost allocation.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 776744,
          "date": "Sun 15 Jan 2023 16:34",
          "username": "masetromain",
          "content": "The other options, A and C are not appropriate for this scenario, because they would only identify the instances that are missing the tag, but not prevent the problem from happening again. Using option F is also not appropriate for this scenario, because AWS Security Hub is not used for cost allocation.",
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
      "question_text": "<p>A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.<br><br>The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes:<br>• Managed AWS services to minimize operational complexity.<br>• A buffer that automatically scales to match the throughput of data and requires no ongoing administration.<br>• A visualization tool to create dashboards to observe events in near-real time.<br>• Support for semi-structured JSON data and dynamic schemas.<br><br>Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#114",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777207,
          "date": "Mon 16 Jan 2023 01:24",
          "username": "zhangyu20000",
          "content": "AD are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776749,
          "date": "Sun 15 Jan 2023 16:38",
          "username": "masetromainmasetromain",
          "content": "The combination of components that will enable the company to create a monitoring solution that will satisfy these requirements is:<br>A.  Use Amazon Kinesis Data Firehose to buffer events. This service can automatically scale to match the throughput of data, and it requires no ongoing administration. With Firehose, it's possible to use a Lambda function to process and transform events as well as to store them in other services like S3 or Redshift.<br>D.  Configure Amazon Elasticsearch Service (Amazon ES) to receive events. With Amazon Elasticsearch Service, it's possible to create an index for the events, making them searchable and queryable. This service is a fully managed service so it minimizes operational complexity. Also, it's possible to use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.Option B: Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events. is incorrect because Kinesis Data Stream is a different service than Kinesis Data Firehose and does not have the buffer feature.<br><br>Option C: Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards. is incorrect because Amazon Aurora is a relational database service and does not support JSON data or dynamic schemas.<br><br>Option E: Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards. is incorrect because Amazon Neptune is a graph database service and does not support JSON data or dynamic schemas.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 776750,
          "date": "Sun 15 Jan 2023 16:38",
          "username": "masetromain",
          "content": "Option B: Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events. is incorrect because Kinesis Data Stream is a different service than Kinesis Data Firehose and does not have the buffer feature.<br><br>Option C: Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards. is incorrect because Amazon Aurora is a relational database service and does not support JSON data or dynamic schemas.<br><br>Option E: Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards. is incorrect because Amazon Neptune is a graph database service and does not support JSON data or dynamic schemas.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#115",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company’s applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets.<br><br>A solutions architect must review the infrastructure. The solution architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high. A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#115",
          "answers": [
            {
              "choice": "<p>A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that the VPC endpoint policy allows traffic from the applications.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797843,
          "date": "Sat 04 Feb 2023 11:49",
          "username": "Musk",
          "content": "B seems correct too.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777209,
          "date": "Mon 16 Jan 2023 01:26",
          "username": "zhangyu20000",
          "content": "D: by pass internet to save cost on NAT GW",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776753,
          "date": "Sun 15 Jan 2023 16:42",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D.  Adding an interface VPC endpoint for Kinesis Data Streams to the VPC will allow the applications to access the service without the need for a NAT gateway. This will reduce the cost associated with NatGateway-Bytes charges, which are increasing the cost in the EC2-Other category.<br><br>Option A is not correct because enabling VPC Flow Logs and reviewing the logs for traffic that can be removed is not a direct solution for reducing NatGateway-Bytes charges. Additionally, security groups are used to control access to resources, not to optimize network traffic.Option B is not correct because it does not address the specific issue of high NatGateway-Bytes charges. Additionally, ensuring that applications have the correct IAM permissions is a best practice but it is not directly related to reducing costs.<br><br>Option C is not correct because while reviewing Detective findings for traffic that is not related to Kinesis Data Streams can help identify potential issues, it does not directly address the issue of high NatGateway-Bytes charges. Additionally, Configuring security groups to block that traffic is not a solution for reducing costs associated with NatGateway-Bytes charges.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776754,
          "date": "Sun 15 Jan 2023 16:42",
          "username": "masetromain",
          "content": "Option B is not correct because it does not address the specific issue of high NatGateway-Bytes charges. Additionally, ensuring that applications have the correct IAM permissions is a best practice but it is not directly related to reducing costs.<br><br>Option C is not correct because while reviewing Detective findings for traffic that is not related to Kinesis Data Streams can help identify potential issues, it does not directly address the issue of high NatGateway-Bytes charges. Additionally, Configuring security groups to block that traffic is not a solution for reducing costs associated with NatGateway-Bytes charges.",
          "upvote_count": "1",
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
      "question_text": "<p>A retail company has an on-premises data center in Europe. The company also has a multi-Region AWS presence that includes the eu-west-1 and us-east-1 Regions. The company wants to be able to route network traffic from its on-premises infrastructure into VPCs in either of those Regions. The company also needs to support traffic that is routed directly between VPCs in those Regions. No single points of failure can exist on the network.<br><br>The company already has created two 1 Gbps AWS Direct Connect connections from its on-premises data center. Each connection goes into a separate Direct Connect location in Europe for high availability. These two locations are named DX-A and DX-B, respectively. Each Region has a single AWS Transit Gateway that is configured to route all inter-VPC traffic within that Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#116",
          "answers": [
            {
              "choice": "<p>A. Create a private VIF from the DX-A connection into a Direct Connect gateway. Create a private VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with the Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Associate the eu-west-1 transit gateway with this Direct Connect gateway. Create a transit VIF from the DX-8 connection into a separate Direct Connect gateway. Associate the us-east-1 transit gateway with this separate Direct Connect gateway. Peer the Direct Connect gateways with each other to support high availability and cross-Region routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Configure the Direct Connect gateway to route traffic between the transit gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795867,
          "date": "Thu 02 Feb 2023 08:58",
          "username": "jojom19980Muskjojom19980",
          "content": "D: <br>https://aws.amazon.com/blogs/networking-and-content-delivery/aws-transit-gateway-now-supports-intra-region-peering/Maybe you meant this one: https://aws.amazon.com/blogs/aws/new-for-aws-transit-gateway-build-global-networks-and-centralize-monitoring-using-network-manager/and this for connect two transit gateways with one direct connect gateway :<br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 798178,
          "date": "Sat 04 Feb 2023 17:54",
          "username": "Musk",
          "content": "Maybe you meant this one: https://aws.amazon.com/blogs/aws/new-for-aws-transit-gateway-build-global-networks-and-centralize-monitoring-using-network-manager/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795869,
          "date": "Thu 02 Feb 2023 09:01",
          "username": "jojom19980",
          "content": "and this for connect two transit gateways with one direct connect gateway :<br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 793448,
          "date": "Tue 31 Jan 2023 00:33",
          "username": "zozza2023",
          "content": "answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 787378,
          "date": "Wed 25 Jan 2023 09:00",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/directconnect/latest/UserGuide/virtualgateways.html<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/high_resiliency.html<br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777212,
          "date": "Mon 16 Jan 2023 01:28",
          "username": "zhangyu20000",
          "content": "D use DX GW for multi region to on-premise, direct TGW peer for cross regions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776760,
          "date": "Sun 15 Jan 2023 16:52",
          "username": "masetromainmasetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/91771-exam-aws-certified-solutions-architect-professional-topic-1/<br><br>The correct answer is D. <br><br>In this solution, two transit VIFs are created - one from the DX-A connection and one from the DX-B connection - into the same Direct Connect gateway for high availability. Both the eu-west-1 and us-east-1 transit gateways are then associated with this Direct Connect gateway. The transit gateways are then peered with each other to support cross-Region routing.<br><br>This solution meets the requirements of the company by creating a highly available connection between the on-premises data center and the VPCs in both the eu-west-1 and us-east-1 regions, and by enabling direct traffic routing between VPCs in those regions.Option A is incorrect because a private VIF does not support inter-VPC traffic and cross-Region routing.<br><br>Option B is incorrect because it separates the two Direct Connect connections into separate Direct Connect gateways, which would not provide high availability.<br><br>Option C is incorrect because it does not mention how to peer the transit gateways to support cross-Region routing.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776761,
          "date": "Sun 15 Jan 2023 16:53",
          "username": "masetromain",
          "content": "Option A is incorrect because a private VIF does not support inter-VPC traffic and cross-Region routing.<br><br>Option B is incorrect because it separates the two Direct Connect connections into separate Direct Connect gateways, which would not provide high availability.<br><br>Option C is incorrect because it does not mention how to peer the transit gateways to support cross-Region routing.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#117",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-Region AWS CloudTrail trail in the AWS account.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#117",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invoke an AWS Step Functions state machine to remove access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon Pinpoint to notify the security team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798246,
          "date": "Sat 04 Feb 2023 19:20",
          "username": "Musk",
          "content": "I like ACE better. I am not sure Step Functions would work.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 777213,
          "date": "Mon 16 Jan 2023 01:31",
          "username": "zhangyu20000",
          "content": "ADE are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776763,
          "date": "Sun 15 Jan 2023 16:56",
          "username": "masetromain",
          "content": "This is the correct answer because it follows these steps:<br><br>- A: The first step is to create an EventBridge rule that listens for the specific API call to create a new IAM user. This will trigger the next step in the process.<br><br>- D: The next step is to use an AWS Step Functions state machine to remove access for the new IAM user. This ensures that access is removed automatically, as required by the security team.<br><br>- E: Finally, use Amazon SNS to notify the security team that a new user has been created and access has been removed. This allows the security team to review and approve the user as necessary.<br><br>Option B is not correct because CloudTrail alone is not able to remove access for the new user.<br><br>Option C is not correct because it is not specified in the question that the company is using Amazon Elastic Container Service and AWS Fargate technology.<br><br>Option F is not correct because the question specifies that the company should use Amazon SNS to notify the security team, not Amazon Pinpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        }
      ]
    },
    {
      "question_id": "#118",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate to AWS. The company wants to use a multi-account structure with centrally managed access to all accounts and applications. The company also wants to keep the traffic on a private network. Multi-factor authentication (MFA) is required at login, and specific roles are assigned to user groups.<br><br>The company must create separate accounts for development. staging, production, and shared network. The production account and the shared network account must have connectivity to all accounts. The development account and the staging account must have access only to each other.<br><br>Which combination of steps should a solutions architect take 10 meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#118",
          "answers": [
            {
              "choice": "<p>A. Deploy a landing zone environment by using AWS Control Tower. Enroll accounts and invite existing accounts into the resulting organization in AWS Organizations.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS Security Hub in all accounts to manage cross-account access. Collect findings through AWS CloudTrail to force MFA login.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create transit gateways and transit gateway VPC attachments in each account. Configure appropriate route tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up and enable AWS IAM Identity Center (AWS Single Sign-On). Create appropriate permission sets with required MFA for existing accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable AWS Control Tower in all accounts to manage routing between accounts. Collect findings through AWS CloudTrail to force MFA login.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create IAM users and groups. Configure MFA for all users. Set up Amazon Cognoto user pools and Identity pools to manage access to accounts and between accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 777218,
          "date": "Mon 16 Jan 2023 01:37",
          "username": "zhangyu20000",
          "content": "ACD are correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776771,
          "date": "Sun 15 Jan 2023 17:04",
          "username": "masetromainmasetromainmasetromain",
          "content": "The correct answer would be options A, C and D, because they address the requirements outlined in the question.<br>A.  Deploying a landing zone environment using AWS Control Tower and enrolling accounts in an organization in AWS Organizations allows for a centralized management of access to all accounts and applications.<br>C.  Creating transit gateways and transit gateway VPC attachments in each account and configuring appropriate route tables allows for private network traffic, and ensures that the production account and shared network account have connectivity to all accounts, while the development and staging accounts have access only to each other.<br>D.  Setting up and enabling AWS IAM Identity Center (AWS Single Sign-On) and creating appropriate permission sets with required MFA for existing accounts allows for multi-factor authentication at login and specific roles to be assigned to user groups.The other options are not correct because:<br>B.  Enabling AWS Security Hub in all accounts to manage cross-account access and collecting findings through AWS CloudTrail to force MFA login is not enough to meet the requirement of creating separate accounts for development, staging, production, and shared network. It can be used in addition to the other steps, but not as a standalone solution.<br>E.  Enabling AWS Control Tower in all accounts to manage routing between accounts and collecting findings through AWS CloudTrail to force MFA login is not enough to meet the requirement of creating separate accounts for development, staging, production, and shared network. It can be used in addition to the other steps, but not as a standalone solution.F.  Creating IAM users and groups and configuring MFA for all users and setting up Amazon Cognito user pools and Identity pools to manage access to accounts and between accounts does not address the requirement of creating separate accounts for development, staging, production, and shared network. Additionally, it does not address the requirement of keeping the traffic on a private network.",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 776773,
          "date": "Sun 15 Jan 2023 17:04",
          "username": "masetromainmasetromain",
          "content": "The other options are not correct because:<br>B.  Enabling AWS Security Hub in all accounts to manage cross-account access and collecting findings through AWS CloudTrail to force MFA login is not enough to meet the requirement of creating separate accounts for development, staging, production, and shared network. It can be used in addition to the other steps, but not as a standalone solution.<br>E.  Enabling AWS Control Tower in all accounts to manage routing between accounts and collecting findings through AWS CloudTrail to force MFA login is not enough to meet the requirement of creating separate accounts for development, staging, production, and shared network. It can be used in addition to the other steps, but not as a standalone solution.F.  Creating IAM users and groups and configuring MFA for all users and setting up Amazon Cognito user pools and Identity pools to manage access to accounts and between accounts does not address the requirement of creating separate accounts for development, staging, production, and shared network. Additionally, it does not address the requirement of keeping the traffic on a private network.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 776775,
          "date": "Sun 15 Jan 2023 17:04",
          "username": "masetromain",
          "content": "F.  Creating IAM users and groups and configuring MFA for all users and setting up Amazon Cognito user pools and Identity pools to manage access to accounts and between accounts does not address the requirement of creating separate accounts for development, staging, production, and shared network. Additionally, it does not address the requirement of keeping the traffic on a private network.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#119",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application in the eu-west-1 Region and has one account for each of its environments: development, testing, and production. All the environments are running 24 hours a day, 7 days a week by using stateful Amazon EC2 instances and Amazon RDS for MySQL databases. The databases are between 500 GB and 800 GB in size.<br><br>The development team and testing team work on business days during business hours, but the production environment operates 24 hours a day, 7 days a week. The company wants to reduce costs. All resources are tagged with an environment tag with either development, testing, or production as the key.<br><br>What should a solutions architect do to reduce costs with the LEAST operational effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#119",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge rule that runs once every day. Configure the rule to invoke one AWS Lambda function that starts or slops instances based on me tag, day, and time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge rule that runs every business day in the evening. Configure the rule to invoke an AWS Lambda function that stops instances based on the tag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that starts instances based on the tag.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule that runs every business day in the evening, Configure the rule to invoke an AWS Lambda function that terminates, instances based on the lag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that restores the instances from their last backup based on the tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge rule that runs every hour. Configure the rule to invoke one AWS Lambda function that terminates or restores instances from their last backup based on the tag. day, and time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798946,
          "date": "Sun 05 Feb 2023 16:39",
          "username": "Musk",
          "content": "this is easy. I wish I'll have several of this in the exam.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777220,
          "date": "Mon 16 Jan 2023 01:41",
          "username": "zhangyu20000",
          "content": "B is correct. Stop the instance that preserver all data. <br>C: is incorrect because it terminate instance that will loss data",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776863,
          "date": "Sun 15 Jan 2023 18:23",
          "username": "masetromain",
          "content": "The correct answer is B.  Creating an Amazon EventBridge rule that runs every business day in the evening to stop instances and another rule that runs every business day in the morning to start instances based on the tag will reduce costs with the least operational effort.<br><br>This approach allows for instances to be stopped during non-business hours when they are not in use, reducing the costs associated with running them. It also allows for instances to be started again in the morning when the development and testing teams need to use them.<br><br>Option A would require the instances to be stopped and started once a day, which could result in instances being stopped while they are in use or not being stopped when they are not in use.<br><br>Option C would terminate instances during non-business hours and restore them again in the morning, which could lead to data loss or longer start up times.<br><br>Option D would terminate or restore instances every hour, which could lead to unnecessary costs as well as data loss or longer start up times.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#120",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a software-as-a-service (SaaS) solution on AWS. The company has deployed an Amazon API Gateway REST API with AWS Lambda integration in multiple AWS Regions and in the same production account.<br><br>The company offers tiered pricing that gives customers the ability to pay for the capacity to make a certain number of API calls per second. The premium tier offers up to 3,000 calls per second, and customers are identified by a unique API key. Several premium tier customers in various Regions report that they receive error responses of 429 Too Many Requests from multiple API methods during peak usage hours. Logs indicate that the Lambda function is never invoked.<br><br>What could be the cause of the error messages for these customers?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#120",
          "answers": [
            {
              "choice": "<p>A. The Lambda function reached its concurrency limit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Lambda function its Region limit for concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The company reached its API Gateway account limit for calls per second.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The company reached its API Gateway default per-method limit for calls per second.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793460,
          "date": "Tue 31 Jan 2023 00:46",
          "username": "zozza2023",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777221,
          "date": "Mon 16 Jan 2023 01:43",
          "username": "zhangyu20000",
          "content": "C is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776869,
          "date": "Sun 15 Jan 2023 18:27",
          "username": "masetromainmasetromain",
          "content": "The correct answer is C.  The company reached its API Gateway account limit for calls per second. This is because Amazon API Gateway has a default account-level limit of 10,000 requests per second (RPS) and a default per-method limit of 5,000 RPS. If the company's premium tier customers are making more than 10,000 requests per second in total across all API methods and regions, they would be receiving the error message of 429 Too Many Requests. This indicates that the API Gateway account is reaching its capacity limit, and the Lambda function is not being invoked because API Gateway is blocking the requests before they reach the Lambda function. <br><br>The other choices are not correct because the Lambda function's concurrency limit and region limit for concurrency would not affect the API Gateway's request rate limit, and the API Gateway's default per-method limit is 5,000 RPS which is less than the premium tier's 3,000 calls per second.Option A is incorrect because the error message is not related to the Lambda function reaching its concurrency limit.<br><br>Option B is incorrect because the error message is not related to the Lambda function reaching its region limit for concurrency.<br><br>Option D is incorrect because the error message is not related to the company reaching its API Gateway default per-method limit for calls per second, but it's related to the account level limit.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776871,
          "date": "Sun 15 Jan 2023 18:28",
          "username": "masetromain",
          "content": "Option A is incorrect because the error message is not related to the Lambda function reaching its concurrency limit.<br><br>Option B is incorrect because the error message is not related to the Lambda function reaching its region limit for concurrency.<br><br>Option D is incorrect because the error message is not related to the company reaching its API Gateway default per-method limit for calls per second, but it's related to the account level limit.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#121",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company is planning to migrate its web application from on premises to AWS. The company uses a third-party security tool to monitor the inbound traffic to the application. The company has used the security tool for the last 15 years, and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology.<br><br>The company plans to deploy the application migration to AWS on Amazon EC2 instances. The EC2 instances will run in an Auto Scaling group in a dedicated VPC.  The company needs to use the security tool to inspect all packets that come in and out of the VPC.  This inspection must occur in real time and must not affect the application's performance. A solutions architect must design a target architecture on AWS that is highly available within an AWS Region.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#121",
          "answers": [
            {
              "choice": "<p>A. Deploy the security tool on EC2 instances m a new Auto Scaling group in the existing VPC<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the web application behind a Network Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Application Load Balancer in front of the security tool instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision a transit gateway to facilitate communication between VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793462,
          "date": "Tue 31 Jan 2023 00:49",
          "username": "zozza2023",
          "content": "answer A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 777769,
          "date": "Mon 16 Jan 2023 15:27",
          "username": "masetromainmasetromainmasetromain",
          "content": "Yes, options A and D are a good combination of steps for the solutions architect to take to meet the requirements.<br><br>Option A, Deploy the security tool on EC2 instances in a new Auto Scaling group in the existing VPC, allows the company to use its existing security tool while still running it within the AWS environment. This ensures that all packets coming in and out of the VPC are inspected by the security tool in real time.<br><br>Option D, Provision a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool, allows for high availability within an AWS Region. By provisioning a Gateway Load Balancer for each Availability Zone, the traffic is redirected to the security tool in the event of any failures or outages. This ensures that the security tool is always available to inspect the traffic, even in the event of a failure.Option B and C are not correct because the security tool is not compatible with the AWS load balancer services and deploying it behind or in front of the load balancer would not provide the desired functionality.<br>Option E is not correct because it is not required for this scenario and does not relate to the requirement of integrating the security tool with the VPC. <br><br>I am not aware of any specific information that the security tool is not compatible with the AWS load balancer. In this scenario, it is stated that the company has used the security tool for the last 15 years and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology. So it is unclear if the security tool is compatible with the AWS load balancer or not.Option A and D seem like a good solution because it allows the company to deploy the security tool on EC2 instances in a new Auto Scaling group in the existing VPC, which allows the company to continue using its existing security tool while also taking advantage of the scalability and high availability of the Auto Scaling group. Additionally, Provisioning a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool, allows the company to ensure that the traffic is being inspected by the security tool in real time, and that the inspection does not affect the performance of the application.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 777772,
          "date": "Mon 16 Jan 2023 15:27",
          "username": "masetromainmasetromain",
          "content": "Option B and C are not correct because the security tool is not compatible with the AWS load balancer services and deploying it behind or in front of the load balancer would not provide the desired functionality.<br>Option E is not correct because it is not required for this scenario and does not relate to the requirement of integrating the security tool with the VPC. <br><br>I am not aware of any specific information that the security tool is not compatible with the AWS load balancer. In this scenario, it is stated that the company has used the security tool for the last 15 years and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology. So it is unclear if the security tool is compatible with the AWS load balancer or not.Option A and D seem like a good solution because it allows the company to deploy the security tool on EC2 instances in a new Auto Scaling group in the existing VPC, which allows the company to continue using its existing security tool while also taking advantage of the scalability and high availability of the Auto Scaling group. Additionally, Provisioning a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool, allows the company to ensure that the traffic is being inspected by the security tool in real time, and that the inspection does not affect the performance of the application.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 777774,
          "date": "Mon 16 Jan 2023 15:27",
          "username": "masetromain",
          "content": "Option A and D seem like a good solution because it allows the company to deploy the security tool on EC2 instances in a new Auto Scaling group in the existing VPC, which allows the company to continue using its existing security tool while also taking advantage of the scalability and high availability of the Auto Scaling group. Additionally, Provisioning a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool, allows the company to ensure that the traffic is being inspected by the security tool in real time, and that the inspection does not affect the performance of the application.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777670,
          "date": "Mon 16 Jan 2023 14:12",
          "username": "zhangyu20000zhangyu20000",
          "content": "AE: classical case for third party appliance deployed with gateway load balancerignore, should be AD",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 777966,
          "date": "Mon 16 Jan 2023 18:06",
          "username": "zhangyu20000",
          "content": "ignore, should be AD",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#122",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has purchased appliances from different vendors. The appliances all have IoT sensors. The sensors send status information in the vendors' proprietary formats to a legacy application that parses the information into JSON. The parsing is simple, but each vendor has a unique format. Once daily, the application parses all the JSON records and stores the records in a relational database for analysis.<br><br>The company needs to design a new data analysis solution that can deliver faster and optimize costs.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#122",
          "answers": [
            {
              "choice": "<p>A. Connect the IoT sensors to AWS IoT Core. Set a rule to invoke an AWS Lambda function to parse the information and save a .csv file to Amazon. S3 Use AWS Glue to catalog the files. Use Amazon Athena and Amazon QuickSight for analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application server to AWS Fargate, which will receive the information from IoT sensors and parse the information into a relational format. Save the parsed information to Amazon Redshlft for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Transfer for SFTP server. Update the IoT sensor code to send the information as a .csv file through SFTP to the server. Use AWS Glue to catalog the files. Use Amazon Athena for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Snowball Edge to collect data from the IoT sensors directly to perform local analysis. Periodically collect the data into Amazon Redshift to perform global analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798983,
          "date": "Sun 05 Feb 2023 17:28",
          "username": "Musk",
          "content": "I m not convinced about A.  It kind of requires changes in the sensors to be compatible with AWS IoT Core.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792153,
          "date": "Mon 30 Jan 2023 00:17",
          "username": "zozza2023",
          "content": "i'll go for A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777779,
          "date": "Mon 16 Jan 2023 15:31",
          "username": "masetromain",
          "content": "A.  Connect the IoT sensors to AWS IoT Core. Set a rule to invoke an AWS Lambda function to parse the information and save a .csv file to Amazon S3. Use AWS Glue to catalog the files. Use Amazon Athena and Amazon QuickSight for analysis.<br><br>This solution meets the requirement of faster analysis and cost optimization by using AWS IoT Core to collect data from the IoT sensors in real-time and then using AWS Glue and Amazon Athena for efficient data analysis.<br><br>Option B and D do not optimize the cost of data analysis as they involve use of expensive services like AWS Fargate and Snowball Edge respectively. Option C does not make use of real-time data collection and may not be optimal for faster analysis.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777676,
          "date": "Mon 16 Jan 2023 14:16",
          "username": "zhangyu20000Musk",
          "content": "A is correct.<br>B: it is appliance, impossible to install on Fargate<br>C: device not use FTP protocol<br>D: snowball is not real timeIn B, we don't try to port appliances to Fargate, but only the app that parses the informtion from the appliances into JSON.<br>I am doubting about A.  Unless you would reprogrm the sensors they would not know how to connect to AWS IoT Core.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 798982,
          "date": "Sun 05 Feb 2023 17:27",
          "username": "Musk",
          "content": "In B, we don't try to port appliances to Fargate, but only the app that parses the informtion from the appliances into JSON.<br>I am doubting about A.  Unless you would reprogrm the sensors they would not know how to connect to AWS IoT Core.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is migrating some of its applications to AWS. The company wants to migrate and modernize the applications quickly after it finalizes networking and security strategies. The company has set up an AWS Direct Connect connection in a central network account.<br><br>The company expects to have hundreds of AWS accounts and VPCs in the near future. The corporate network must be able to access the resources on AWS seamlessly and also must be able to communicate with all the VPCs. The company also wants to route its cloud resources to the internet through its on-premises data center.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#123",
          "answers": [
            {
              "choice": "<p>A. Create a Direct Connect gateway in the central account. In each of the accounts, create an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Direct Connect gateway and a transit gateway in the central network account. Attach the transit gateway to the Direct Connect gateway by using a transit VIF. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an internet gateway. Attach the internet gateway to subnets. Allow internet traffic through the gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the transit gateway with other accounts. Attach VPCs to the transit gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision VPC peering as necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Provision only private subnets. Open the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793468,
          "date": "Tue 31 Jan 2023 00:54",
          "username": "zozza2023",
          "content": "B D and F",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 792155,
          "date": "Mon 30 Jan 2023 00:23",
          "username": "zozza2023",
          "content": "I agree with BD&F",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 777783,
          "date": "Mon 16 Jan 2023 15:34",
          "username": "masetromain",
          "content": "B and D and F are correct.<br>B: Creating a Direct Connect gateway and a transit gateway in the central network account will allow the company to connect its on-premises data center to the resources in AWS.<br>D: Sharing the transit gateway with other accounts will allow the company to communicate with all the VPCs in multiple accounts.<br>F: Provisioning only private subnets and opening necessary routes on the transit gateway and customer gateway will allow the company to route its cloud resources to the internet through its on-premises data center.<br><br>A is incorrect because it would be redundant to use both a Direct Connect gateway and a transit gateway.<br>C is incorrect because it is not necessary to provision an internet gateway, since the company wants to route traffic through their on-premises data center.<br>E is incorrect because VPC peering may not be necessary if the company is using a transit gateway to connect all the VPCs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 777680,
          "date": "Mon 16 Jan 2023 14:18",
          "username": "zhangyu20000",
          "content": "BDF are correct",
          "upvote_count": "2",
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
      "question_text": "<p>A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br><br>A solutions architect needs to enforce the new process in the most secure way possible.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#124",
          "answers": [
            {
              "choice": "<p>A. Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792157,
          "date": "Mon 30 Jan 2023 00:26",
          "username": "zozza2023",
          "content": "A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 777799,
          "date": "Mon 16 Jan 2023 15:51",
          "username": "masetromain",
          "content": "A and D are the correct answer.<br>A: By ensuring all AWS accounts are part of an organization in AWS Organizations, it allows for centralized management and control of the accounts. This can help enforce the new purchasing process by giving a dedicated team the ability to manage and enforce policies across all accounts.<br>D: By creating an SCP (Service Control Policy) that denies access to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions, it enforces the new centralized purchasing process. Attaching the SCP to each OU (organizational unit) within the organization ensures that all business units are adhering to the new process.<br><br>B and C are not the correct answer, because AWS Config and IAM policies are used for monitoring and managing access to resources in an account, respectively. They don't enforce the new process for purchasing reserved instances.<br>E is not the correct answer as this is not related to the new process for purchasing reserved instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 777683,
          "date": "Mon 16 Jan 2023 14:19",
          "username": "zhangyu20000",
          "content": "AD are correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running a critical application that uses an Amazon RDS for MySQL database to store data. The RDS DB instance is deployed in Multi-AZ mode.<br><br>A recent RDS database failover test caused a 40-second outage to the application. A solutions architect needs to design a solution to reduce the outage time to less than 20 seconds.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#125",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache for Memcached in front of the database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon ElastiCache for Redis in front of the database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use RDS Proxy in front of the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon Aurora MySQL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Aurora Replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an RDS for MySQL read replica<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793473,
          "date": "Tue 31 Jan 2023 00:57",
          "username": "zozza2023",
          "content": "C D andE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDE"
        },
        {
          "id": 781884,
          "date": "Fri 20 Jan 2023 05:36",
          "username": "AjayD123zozza2023",
          "content": "RDS read replica auto failover takes approx 35 seconds hence, BCF does not satisfy under 20 seconds failover requirement.<br>https://aws.amazon.com/rds/features/multi-az/#:~:text=Amazon%20RDS%20Multi%2DAZ%20with%20two%20readable%20standbys,-Automatically%20fail%20over&text=Automatically%20failover%20in%20typically%20under,and%20with%20no%20manual%20intervention.thanks for the information about RDS read replica",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: CDE"
        },
        {
          "id": 792164,
          "date": "Mon 30 Jan 2023 00:34",
          "username": "zozza2023",
          "content": "thanks for the information about RDS read replica",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779124,
          "date": "Tue 17 Jan 2023 18:21",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D, E and C:<br><br>Migrate the database to Amazon Aurora MySQL.<br>- Create an Amazon Aurora Replica.<br>- Use RDS Proxy in front of the database.<br>- These options are correct because they address the requirement of reducing the failover time to less than 20 seconds.<br><br>Migrating to Amazon Aurora MySQL and creating an Aurora replica can reduce the failover time to less than 20 seconds. Aurora has a built-in, fault-tolerant storage system that can automatically detect and repair failures. Additionally, Aurora has a feature called \\\"Aurora Global Database\\\" which allows you to create read-only replicas across multiple AWS regions which can further help to reduce the failover time.<br><br>Creating an Aurora replica can also help to reduce the failover time as it can take over as the primary DB instance in case of a failure.<br><br>Using RDS proxy can also help to reduce the failover time as it can route the queries to the healthy DB instance, it also helps to balance the load across multiple DB instances.Option A and B, Use Amazon ElastiCache for Memcached and Redis in front of the database, are not correct as ElastiCache is a caching service, it doesn't provide a high availability solution for the underlying database.<br><br>Option F, Create an RDS for MySQL read replica, is not correct as a read replica can only be used to offload read traffic from the primary instance, it doesn't provide a high availability solution for the underlying database.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: CDE"
        },
        {
          "id": 779125,
          "date": "Tue 17 Jan 2023 18:21",
          "username": "masetromain",
          "content": "Option A and B, Use Amazon ElastiCache for Memcached and Redis in front of the database, are not correct as ElastiCache is a caching service, it doesn't provide a high availability solution for the underlying database.<br><br>Option F, Create an RDS for MySQL read replica, is not correct as a read replica can only be used to offload read traffic from the primary instance, it doesn't provide a high availability solution for the underlying database.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777809,
          "date": "Mon 16 Jan 2023 15:56",
          "username": "masetromain",
          "content": "The correct answer is B, C and F. <br><br>Using Amazon ElastiCache for Redis in front of the database (Option B) will help to reduce the failover time by caching the frequently-used data, so that it can be quickly served from the cache rather than having to be retrieved from the database during a failover.<br><br>Using RDS Proxy in front of the database (Option C) will help to reduce the failover time by managing the connections to the RDS DB instance, so that it can quickly route traffic to the new primary instance during a failover.<br><br>Creating an RDS for MySQL read replica (Option F) will help to reduce the failover time by having a read-only copy of the database running in parallel with the primary instance, so that it can take over as the primary instance in the event of a failover.<br><br>Option A and D are not relevant in this case as the question is asking specifically about reducing failover time for an RDS for MySQL database.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 777696,
          "date": "Mon 16 Jan 2023 14:26",
          "username": "zhangyu20000",
          "content": "CDE are correct",
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
      "question_text": "<p>An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account.<br><br>What is the MOST secure way to allow org1 to access resources in org2?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#126",
          "answers": [
            {
              "choice": "<p>A. The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role’s Amazon Resource Name (ARN) when requesting access to perform the required tasks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role’s Amazon Resource Name (ARN), including the external ID in the IAM role’s trust policy, when requesting access to perform the required tasks.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 799037,
          "date": "Sun 05 Feb 2023 18:46",
          "username": "Musk",
          "content": "Easy. The external ID is for sure the winner.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 792166,
          "date": "Mon 30 Jan 2023 00:39",
          "username": "zozza2023",
          "content": "D seems the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 788442,
          "date": "Thu 26 Jan 2023 07:36",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777815,
          "date": "Mon 16 Jan 2023 15:58",
          "username": "masetromain",
          "content": "The correct answer is D.  This is the most secure way to allow org1 to access resources in org2 because it allows for least privilege security access. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role’s Amazon Resource Name (ARN) and include the external ID in the IAM role’s trust policy when requesting access to perform the required tasks. This ensures that the partner company can only access the resources that it needs and only from the specific customer account.<br><br>Option A and B both involve providing the partner company with credentials, which can be easily compromised and could lead to a security breach. Option C also provides the partner company with an IAM role, but it doesn't have any restrictions on when and where the partner company can access the resources in customer account, it could be a security risk.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777705,
          "date": "Mon 16 Jan 2023 14:30",
          "username": "zhangyu20000",
          "content": "D is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A delivery company needs to migrate its third-party route planning application to AWS. The third party supplies a supported Docker image from a public registry. The image can run in as many containers as required to generate the route map.<br><br>The company has divided the delivery area into sections with supply hubs so that delivery drivers travel the shortest distance possible from the hubs to the customers. To reduce the time necessary to generate route maps, each section uses its own set of Docker containers with a custom configuration that processes orders only in the section's area.<br><br>The company needs the ability to allocate resources cost-effectively based on the number of running containers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2. Use the Amazon EKS CLI to launch the planning application in pods by using the --tags option to assign a custom tag to the pod.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on AWS Fargate. Use the Amazon EKS CLI to launch the planning application. Use the AWS CLI tag-resource API call to assign a custom tag to the pod.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic Container Service (Amazon ECS) cluster on Amazon EC2. Use the AWS CLI with run-tasks set to true to launch the planning application by using the --tags option to assign a custom tag to the task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Use the AWS CLI run-task command and set enableECSManagedTags to true to launch the planning application. Use the --tags option to assign a custom tag to the task.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792173,
          "date": "Mon 30 Jan 2023 00:46",
          "username": "zozza2023",
          "content": "ECS and Fragate cost effective",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777826,
          "date": "Mon 16 Jan 2023 16:03",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D.  Create an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Use the AWS CLI run-task command and set enableECSManagedTags to true to launch the planning application. Use the --tags option to assign a custom tag to the task.<br><br>AWS Fargate is a serverless compute engine for containers that eliminates the need to provision and manage servers, which reduces operational overhead. Additionally, Fargate automatically scales resources based on the number of running containers, providing cost-effective resource allocation. Using the AWS CLI run-task command and setting enableECSManagedTags to true allows for easy tagging of resources for organization and cost tracking.The other options, A and C, are using Amazon Elastic Kubernetes Service (Amazon EKS) and Amazon Elastic Container Service (Amazon ECS) on Amazon EC2, which require provisioning and management of servers and may not provide the same cost-effective resource allocation as Fargate. Option B is using EKS on Fargate but it's not recommended because EKS is intended for more complex and advanced use cases, whereas ECS is a more simple service for running Docker container.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777828,
          "date": "Mon 16 Jan 2023 16:04",
          "username": "masetromain",
          "content": "The other options, A and C, are using Amazon Elastic Kubernetes Service (Amazon EKS) and Amazon Elastic Container Service (Amazon ECS) on Amazon EC2, which require provisioning and management of servers and may not provide the same cost-effective resource allocation as Fargate. Option B is using EKS on Fargate but it's not recommended because EKS is intended for more complex and advanced use cases, whereas ECS is a more simple service for running Docker container.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777711,
          "date": "Mon 16 Jan 2023 14:36",
          "username": "zhangyu20000",
          "content": "D is correct<br>https://docs.aws.amazon.com/cli/latest/reference/ecs/run-task.html",
          "upvote_count": "3",
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
      "question_text": "<p>A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure.<br><br>Which factors could cause this error? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#128",
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
      "discusstion": [
        {
          "id": 792176,
          "date": "Mon 30 Jan 2023 00:48",
          "username": "zozza2023",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 777878,
          "date": "Mon 16 Jan 2023 16:40",
          "username": "masetromain",
          "content": "A is correct because the IPv4 CIDR ranges of the two VPCs overlap. The two VPCs have an IP range of 10.10.0.0/16 and 10.10.10.0/24, which means that they share the same 10.10.0.0 network. This causes a conflict in routing and will prevent the VPCs from being able to communicate with each other.<br><br>E is correct because the IAM role in the peer accepter account does not have the correct permissions. The role must have permissions to create, modify, and delete VPC peering connections in order for the peering to be established.<br><br>B, C, and D are not correct. The VPCs are in the same region, both accounts have access to an internet gateway and both VPCs are not shared through AWS Resource Access Manager.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 777713,
          "date": "Mon 16 Jan 2023 14:37",
          "username": "zhangyu20000",
          "content": "AE is correct<br>D is not correct because you cannot share VPC via RAM, subnet can",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#129",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An external audit of a company’s serverless application reveals IAM policies that grant too many permissions. These policies are attached to the company's AWS Lambda execution roles. Hundreds of the company's Lambda functions have broad access permissions such as full access to Amazon S3 buckets and Amazon DynamoDB tables. The company wants each function to have only the minimum permissions that the function needs to complete its task.<br><br>A solutions architect must determine which permissions each Lambda function needs.<br><br>What should the solutions architect do to meet this requirement with the LEAST amount of effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#129",
          "answers": [
            {
              "choice": "<p>A. Set up Amazon CodeGuru to profile the Lambda functions and search for AWS API calls. Create an inventory of the required API calls and resources for each Lambda function. Create new IAM access policies for each Lambda function. Review the new policies to ensure that they meet the company's business requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on AWS CloudTrail logging for the AWS account. Use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on AWS CloudTrail logging for the AWS account. Create a script to parse the CloudTrail log, search for AWS API calls by Lambda execution role, and create a summary report. Review the report. Create IAM access policies that provide more restrictive permissions for each Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS CloudTrail logging for the AWS account. Export the CloudTrail logs to Amazon S3. Use Amazon EMR to process the CloudTrail logs in Amazon S3 and produce a report of API calls and resources used by each execution role. Create a new IAM access policy for each role. Export the generated roles to an S3 bucket. Review the generated policies to ensure that they meet the company’s business requirements.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792178,
          "date": "Mon 30 Jan 2023 00:51",
          "username": "zozza2023",
          "content": "Identity and Access Management Access Analyzer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777892,
          "date": "Mon 16 Jan 2023 16:48",
          "username": "masetromain",
          "content": "The correct answer is B.  Turn on AWS CloudTrail logging for the AWS account, and use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.<br><br>This is the least amount of effort as it makes use of AWS services that can automatically analyze the CloudTrail logs, generate the IAM policies, and provide a report for the review process. <br>Option A and D both involve additional steps such as running scripts or using Amazon EMR, which would take more effort to set up and maintain. <br>Option C is similar to option A and D but doesn't use any AWS services to help with the process.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777714,
          "date": "Mon 16 Jan 2023 14:38",
          "username": "zhangyu20000",
          "content": "B is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A solutions architect must analyze a company’s Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.<br><br>The solutions architect must analyze the environment and take action based on the findings.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#130",
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
      "discusstion": [
        {
          "id": 778000,
          "date": "Mon 16 Jan 2023 18:27",
          "username": "masetromain",
          "content": "The correct answer is C.  Installing the Amazon CloudWatch agent on each of the EC2 instances and turning on AWS Compute Optimizer allows the solutions architect to analyze the environment and make recommendations on the sizing of the EC2 instances in a cost-effective way. AWS Compute Optimizer analyzes the utilization of the instances and recommends the optimal instance types for the workloads. This solution is more cost-effective than creating a dashboard and reviewing it periodically, or signing up for the AWS Enterprise Support plan and waiting for Trusted Advisor recommendations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777715,
          "date": "Mon 16 Jan 2023 14:40",
          "username": "zhangyu20000",
          "content": "C is correct, with computer optimizer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#131",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.<br><br>In an AWS application account, the company’s application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization. The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed m the application account.<br><br>The application team has stored the database credentials as secrets in AWS Secrets Manager in the application account. The application team is manually sharing the secrets with the database administrators. The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account. A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the application account, create an IAM role that is named DBA-Secret. Grant the role the required permissions to access the secrets. In the DBA account, create an IAM role that is named DBA-Admin. Grant the DBA-Admin role the required permissions to assume the DBA-Secret role in the application account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the DBA account create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets and the default AWS managed key in the application account. In the application account, attach resource-based policies to the key to allow access from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets in the application account. Attach an SCP to the application account to allow access to the secrets from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 799086,
          "date": "Sun 05 Feb 2023 19:34",
          "username": "Musk",
          "content": "B makes complete sense. Other options have issues.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 795435,
          "date": "Wed 01 Feb 2023 20:10",
          "username": "tatdatpham",
          "content": "I voted for B, because: <br>SCPs are a type of policy that is used to set fine-grained permissions at the root level of an AWS organization. Using SCPs in this scenario could result in overly permissive access, which may not meet the organization's security and compliance requirements.<br>Additionally, using SCPs to manage access to the secrets could make it more difficult to track who has access to the secrets, as SCPs are applied at the organization level and may not be tied to specific IAM roles or users.<br>Option B provides a more secure and controlled solution, as it uses cross-account role assumption and IAM roles to manage access to the secrets, which is a more secure and controlled way to manage access to AWS resources in a multi-account environment.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792195,
          "date": "Mon 30 Jan 2023 01:10",
          "username": "zozza2023Musk",
          "content": "SCP will provide more granular permissions for DBASCP do not provide permissions. It just removes permissions.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 799085,
          "date": "Sun 05 Feb 2023 19:33",
          "username": "Musk",
          "content": "SCP do not provide permissions. It just removes permissions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791642,
          "date": "Sun 29 Jan 2023 13:56",
          "username": "masssaMuskzozza2023Musk",
          "content": "A is incorrect.Because aRAM cannot share secrets manager resouce.<br>https://docs.aws.amazon.com/ja_jp/ram/latest/userguide/shareable.htmlGood catchRAM can share secret manager ressours bu as masetromainsaid \\\"Option A is incorrect because while using AWS Resource Access Manager (AWS RAM) to share the secrets would provide the DBA account access to the secrets, it does not eliminate the need for manual sharing of the secrets as the DBA team would still need to manually access the shared secrets in the DBA account.\\\"I don't think it can as per this list: https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "2111",
          "selected_answers": ""
        },
        {
          "id": 799087,
          "date": "Sun 05 Feb 2023 19:34",
          "username": "Musk",
          "content": "Good catch",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792194,
          "date": "Mon 30 Jan 2023 01:09",
          "username": "zozza2023Musk",
          "content": "RAM can share secret manager ressours bu as masetromainsaid \\\"Option A is incorrect because while using AWS Resource Access Manager (AWS RAM) to share the secrets would provide the DBA account access to the secrets, it does not eliminate the need for manual sharing of the secrets as the DBA team would still need to manually access the shared secrets in the DBA account.\\\"I don't think it can as per this list: https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 799089,
          "date": "Sun 05 Feb 2023 19:35",
          "username": "Musk",
          "content": "I don't think it can as per this list: https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 786490,
          "date": "Tue 24 Jan 2023 13:13",
          "username": "Nicocacik",
          "content": "It can't be D because SCP doesn't give access. A permission is needed in the application account. The correct answer has to be B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 781375,
          "date": "Thu 19 Jan 2023 18:10",
          "username": "masetromain",
          "content": "I swith for D<br> option D, using an SCP to allow access to the secrets from the DBA account, is a more appropriate solution for the requirements given in the problem. Using an SCP allows for more granular control over cross-account access, and ensures that the DBA-Admin role in the DBA account is only able to perform the actions that are explicitly allowed by the SCP, rather than being granted all permissions to access the secrets. Additionally, using an SCP is more secure than using IAM roles and policies because SCP uses a deny-all by default approach while IAM policies use an allow-all by default approach.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780739,
          "date": "Thu 19 Jan 2023 06:13",
          "username": "jhonivy",
          "content": "D, for all dbas. B & C to create IAM role are not so perfect.<br>If a user or role has an IAM permission policy that grants access to an action that is either not allowed or explicitly denied by the applicable SCPs, the user or role can't perform that action.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778007,
          "date": "Mon 16 Jan 2023 18:30",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B. <br>In this solution, the application account creates an IAM role, DBA-Secret, with the required permissions to access the secrets stored in the Secrets Manager. In the DBA account, the DBA-Admin role is created and granted the required permissions to assume the DBA-Secret role in the application account. This allows the DBA-Admin role to access the secrets stored in the application account, eliminating the need for manual sharing.Option A is incorrect because while using AWS Resource Access Manager (AWS RAM) to share the secrets would provide the DBA account access to the secrets, it does not eliminate the need for manual sharing of the secrets as the DBA team would still need to manually access the shared secrets in the DBA account.<br><br>Option C is incorrect because it does not provide a way for the DBA team to access the secrets stored in the application account and instead focuses on the permissions of the default AWS managed key.<br><br>Option D is incorrect because it uses an SCP to allow access to the secrets which is not necessary as the IAM role DBA-Admin with the required permissions to assume the DBA-Secret role in the application account is sufficient to access the secrets.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778009,
          "date": "Mon 16 Jan 2023 18:30",
          "username": "masetromain",
          "content": "Option A is incorrect because while using AWS Resource Access Manager (AWS RAM) to share the secrets would provide the DBA account access to the secrets, it does not eliminate the need for manual sharing of the secrets as the DBA team would still need to manually access the shared secrets in the DBA account.<br><br>Option C is incorrect because it does not provide a way for the DBA team to access the secrets stored in the application account and instead focuses on the permissions of the default AWS managed key.<br><br>Option D is incorrect because it uses an SCP to allow access to the secrets which is not necessary as the IAM role DBA-Admin with the required permissions to assume the DBA-Secret role in the application account is sufficient to access the secrets.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777718,
          "date": "Mon 16 Jan 2023 14:42",
          "username": "zhangyu20000",
          "content": "B is correct",
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
      "question_text": "<p>A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.<br><br>Because of regulatory requirements, all resources that the company deploys in the organization must reside in the ap-northeast-1 Region. Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.<br><br>A solutions architect must implement a solution that applies these restrictions. The solution must maximize operational efficiency and must minimize ongoing maintenance.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#132",
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
      "discusstion": [
        {
          "id": 795438,
          "date": "Wed 01 Feb 2023 20:14",
          "username": "tatdatpham",
          "content": "With AWS Org, consider SCP first.<br>In this scenario, Only C,D,E are mention about SCP, but D apply for all, not only the DataOps OU",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 778018,
          "date": "Mon 16 Jan 2023 18:36",
          "username": "masetromainmasetromain",
          "content": "The correct options are C and E. <br><br>Option C: Create an SCP. Use the aws:RequestedRegion condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU.<br><br>This option is correct because it allows the company to restrict access to all AWS regions except for ap-northeast-1. This ensures that all resources deployed in the organization must reside in the ap-northeast-1 region. By applying the SCP to the root OU, it ensures that all accounts and OUs under the root will be affected.<br><br>Option E: Create an SCP. Use the ec2:InstanceType condition key to restrict access to specific instance types. Apply the SCP to the DataOps OU.<br><br>This option is correct because it allows the company to restrict access to specific instance types, which is required for the DataOps OU. By applying the SCP to the DataOps OU, it ensures that only resources deployed in the DataOps OU will be affected by the restriction.Option A is incorrect because it only restricts access to specific instance types, but it does not restrict access to a specific region.<br><br>Option B is incorrect because it is applied to IAM users rather than OUs, which would not effectively apply the restriction to all resources in the organization.<br><br>Option D is incorrect because it uses the ec2:Region condition key which would not allow to restrict the instances types only in the DataOps OU.<br><br>By creating an SCP that uses the aws:RequestedRegion condition key and restricting access to all regions except ap-northeast-1 and applying it to the root OU, this ensures that all resources deployed in the organization will reside in the ap-northeast-1 Region.<br><br>By creating an SCP that uses the ec2:InstanceType condition key and restricts access to specific instance types and applying it to the DataOps OU, this ensures that all EC2 instances deployed in the DataOps OU will use the predefined list of instance types.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 778021,
          "date": "Mon 16 Jan 2023 18:39",
          "username": "masetromain",
          "content": "Option A is incorrect because it only restricts access to specific instance types, but it does not restrict access to a specific region.<br><br>Option B is incorrect because it is applied to IAM users rather than OUs, which would not effectively apply the restriction to all resources in the organization.<br><br>Option D is incorrect because it uses the ec2:Region condition key which would not allow to restrict the instances types only in the DataOps OU.<br><br>By creating an SCP that uses the aws:RequestedRegion condition key and restricting access to all regions except ap-northeast-1 and applying it to the root OU, this ensures that all resources deployed in the organization will reside in the ap-northeast-1 Region.<br><br>By creating an SCP that uses the ec2:InstanceType condition key and restricts access to specific instance types and applying it to the DataOps OU, this ensures that all EC2 instances deployed in the DataOps OU will use the predefined list of instance types.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777721,
          "date": "Mon 16 Jan 2023 14:44",
          "username": "zhangyu20000",
          "content": "CE is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.<br><br>The company wants to process each URL in other Regions to compare possible differences in site localization. URLs must be published from the existing Region. Results must be written to the existing S3 bucket in the current Region.<br><br>Which combination of changes will produce multi-Region deployment that meets these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. Deploy the SQS queue with the Lambda function to other Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subscribe the SNS topic in each Region to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Subscribe the SQS queue in each Region to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the SQS queue to publish URLs to SNS topics in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the SNS topic and the Lambda function to other Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798211,
          "date": "Sat 04 Feb 2023 18:32",
          "username": "MasterP007",
          "content": "A & C - Deploy & Subscribe SQS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792200,
          "date": "Mon 30 Jan 2023 01:21",
          "username": "zozza2023",
          "content": "A and C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 778025,
          "date": "Mon 16 Jan 2023 18:40",
          "username": "masetromain",
          "content": "Option A is correct because deploying the SQS queue with the Lambda function to other regions will allow the application to process URLs in those regions and compare differences in site localization.<br><br>Option C is correct because subscribing the SQS queue in each region to the SNS topic in the existing region will allow the application to publish URLs to the existing SNS topic and have those URLs processed in other regions.<br><br>Option B is incorrect because subscribing the SNS topic in each region to the SQS queue in the existing region would not allow URLs to be processed in other regions.<br><br>Option D is incorrect because configuring the SQS queue to publish URLs to SNS topics in each region would not ensure that the URLs are processed in those regions.<br><br>Option E is incorrect because deploying the SNS topic and Lambda function to other regions without the SQS queue would not allow the application to process URLs in those regions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 777725,
          "date": "Mon 16 Jan 2023 14:46",
          "username": "zhangyu20000",
          "content": "AC is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#134",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instances. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM, and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to 20 minutes. A solutions architect wants to revise the architecture for the solution.<br><br>Which strategy should the solutions architect use?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#134",
          "answers": [
            {
              "choice": "<p>A. Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778029,
          "date": "Mon 16 Jan 2023 18:42",
          "username": "masetromainmasetromain",
          "content": "C.  Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.<br><br>AWS Fargate is a serverless compute engine for containers that allows running containerized workloads without managing the underlying EC2 instances. This eliminates the need to provision, configure, and scale clusters of virtual machines to run containers.<br><br>Amazon EventBridge (formerly CloudWatch Events) allows scheduling tasks using cron or rate expressions, which can be used to invoke the Fargate task every 4 hours. This will allow for cost-effective and scalable solution, as the infrastructure is managed by AWS and the application can run in a serverless fashion, only incurring costs when the task is running.The other options are not appropriate in this scenario:<br><br>Option A: Running the application on AWS Lambda would not be appropriate, as Lambda is designed to run event-driven, short-lived functions, and not CPU-intensive, long-running tasks.<br>Option B: AWS Batch is a service for running batch jobs, and it may not be the most appropriate service for this scenario, as the application is not a batch job but a long running task.<br>Option D: Using Amazon EC2 Spot Instances would not be the best option for this scenario because the application is running for up to 20 minutes and EC2 Spot instances can be terminated at any time.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778034,
          "date": "Mon 16 Jan 2023 18:44",
          "username": "masetromain",
          "content": "The other options are not appropriate in this scenario:<br><br>Option A: Running the application on AWS Lambda would not be appropriate, as Lambda is designed to run event-driven, short-lived functions, and not CPU-intensive, long-running tasks.<br>Option B: AWS Batch is a service for running batch jobs, and it may not be the most appropriate service for this scenario, as the application is not a batch job but a long running task.<br>Option D: Using Amazon EC2 Spot Instances would not be the best option for this scenario because the application is running for up to 20 minutes and EC2 Spot instances can be terminated at any time.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777726,
          "date": "Mon 16 Jan 2023 14:49",
          "username": "zhangyu20000",
          "content": "C is correct. only eventbridge can run scheduled task",
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
      "question_text": "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch. Currently, the game consists of the following components deployed in a single AWS Region:<br><br>• Amazon S3 bucket that stores game assets<br>• Amazon DynamoDB table that stores player scores<br><br>A solutions architect needs to design a multi-Region solution that will reduce latency, improve reliability, and require the least effort to implement.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#135",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Cross-Region Replication. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB table in a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create another S3 bucket in a new Region, and configure S3 Cross-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create another S3 bucket in the sine Region, and configure S3 Same-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792203,
          "date": "Mon 30 Jan 2023 01:28",
          "username": "zozza2023",
          "content": "DynamoDB global tables+ S3 replication+Cloudfront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778044,
          "date": "Mon 16 Jan 2023 18:49",
          "username": "masetromainmasetromain",
          "content": "Option C is the correct answer because it meets the requirements of reducing latency, improving reliability and requiring minimal effort to implement.<br><br>By creating another S3 bucket in a new Region, and configuring S3 Cross-Region Replication between the buckets, the game assets will be replicated to the new Region, reducing latency for users accessing the assets from that region. Additionally, by creating an Amazon CloudFront distribution and configuring origin failover with two origins accessing the S3 buckets in each Region, it ensures that the game assets will be served to users even if one of the regions becomes unavailable.<br><br>Configuring DynamoDB global tables by enabling Amazon DynamoDB Streams, and adding a replica table in a new Region, will also improve reliability by allowing the player scores to be replicated and updated in multiple regions, ensuring that the scores are available even in the event of a regional failure.Option A is not correct because using the new table as a replica target for DynamoDB global tables will not improve reliability. The same applies for Option D, which only uses S3 Same-Region Replication, which will not reduce latency for users in other regions.<br><br>Option B is not correct because configuring asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC) is not the best solution for this use case. It would require additional configuration and management effort.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 778047,
          "date": "Mon 16 Jan 2023 18:49",
          "username": "masetromain",
          "content": "Option A is not correct because using the new table as a replica target for DynamoDB global tables will not improve reliability. The same applies for Option D, which only uses S3 Same-Region Replication, which will not reduce latency for users in other regions.<br><br>Option B is not correct because configuring asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC) is not the best solution for this use case. It would require additional configuration and management effort.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777727,
          "date": "Mon 16 Jan 2023 14:51",
          "username": "zhangyu20000",
          "content": "C is correct. S3 cross replicate, CloudFront, Dynamodb global database and origin failover",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an on-premises website application that provides real estate information for potential renters and buyers. The website uses a Java backend and a NoSQL MongoDB database to store subscriber data.<br><br>The company needs to migrate the entire application to AWS with a similar structure. The application must be deployed for high availability, and the company cannot make changes to the application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#136",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Aurora DB cluster as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use MongoDB on Amazon EC2 instances as the database for the subscriber data. Deploy EC2 instances in an Auto Scaling group in a single Availability Zone for the Java backend application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon DocumentDB (with MongoDB compatibility) with appropriately sized instances in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon DocumentDB (with MongoDB compatibility) in on-demand capacity mode in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798656,
          "date": "Sun 05 Feb 2023 07:55",
          "username": "ExamTopix01",
          "content": "C<br>On-demand capacity mode is the function of Dynamodb. <br>https://aws.amazon.com/blogs/news/running-spiky-workloads-and-optimizing-costs-by-more-than-90-using-amazon-dynamodb-on-demand-capacity-mode/<br><br>Amazon DocumentDB Elastic Clusters<br>https://aws.amazon.com/blogs/news/announcing-amazon-documentdb-elastic-clusters/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778050,
          "date": "Mon 16 Jan 2023 18:51",
          "username": "masetromain",
          "content": "D is correct because it uses Amazon DocumentDB with MongoDB compatibility, which allows for a seamless migration of the subscriber data from the on-premises MongoDB database to the cloud. Additionally, by using DocumentDB in on-demand capacity mode, the company can easily scale the database based on the actual load and usage of the application, without the need to provision instances in advance.<br><br>Option A is not a good fit because Aurora is a relational database and not compatible with MongoDB. <br>Option B is not a good fit because it uses MongoDB on a single EC2 instance, which does not provide high availability for the subscriber data.<br>Option C is not a good fit because it uses Amazon DocumentDB with MongoDB compatibility, but it is deployed on instances, which may not be able to handle the load and usage of the application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777731,
          "date": "Mon 16 Jan 2023 14:56",
          "username": "zhangyu20000",
          "content": "D is correct with Document on demand mode because it is new deployment. load is unknown<br>A: Aurora is not compatiable with Mongodb<br>B: Mongodb on single EC2 not support HA<br>C: DocumentDB on instance may not support real load",
          "upvote_count": "2",
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
      "question_text": "<p>A digital marketing company has multiple AWS accounts that belong to various teams. The creative team uses an Amazon S3 bucket in its AWS account to securely store images and media files that are used as content for the company’s marketing campaigns. The creative team wants to share the S3 bucket with the strategy team so that the strategy team can view the objects.<br><br>A solutions architect has created an IAM role that is named strategy_reviewer in the Strategy account. The solutions architect also has set up a custom AWS Key Management Service (AWS KMS) key in the Creative account and has associated the key with the S3 bucket. However, when users from the Strategy account assume the IAM role and try to access objects in the S3 bucket, they receive an Access Denied error.<br><br>The solutions architect must ensure that users in the Strategy account can access the S3 bucket. The solution must provide these users with only the minimum permissions that they need.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to the account ID of the Strategy account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the strategy_reviewer IAM role to grant full permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to an anonymous user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the custom KMS key policy in the Creative account to grant encrypt permissions to the strategy_reviewer IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Update the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792215,
          "date": "Mon 30 Jan 2023 01:49",
          "username": "zozza2023",
          "content": "A C AND F",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 789348,
          "date": "Fri 27 Jan 2023 06:46",
          "username": "Untamables",
          "content": "https://repost.aws/knowledge-center/cross-account-access-denied-error-s3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 781389,
          "date": "Thu 19 Jan 2023 18:24",
          "username": "masetromain",
          "content": "A, C, and F are the correct options.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 778055,
          "date": "Mon 16 Jan 2023 18:53",
          "username": "masetromain",
          "content": "A, C, and F are the correct options.<br><br>Option A creates a bucket policy that includes read permissions for the S3 bucket and sets the principal of the bucket policy to the account ID of the Strategy account. This ensures that users in the Strategy account have the necessary permissions to access the S3 bucket.<br><br>Option C updates the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role. This ensures that the users in the Strategy account have the necessary permissions to decrypt the objects stored in the S3 bucket.<br><br>Option F updates the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key. This ensures that the users in the Strategy account have the necessary permissions to read the objects in the S3 bucket and to decrypt them using the custom KMS key.<br><br>The other options are not correct because they either grant unnecessary permissions (B, D) or grant permissions in the wrong way (E).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777736,
          "date": "Mon 16 Jan 2023 14:59",
          "username": "zhangyu20000",
          "content": "ACF is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#138",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on-premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed. The research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days.<br><br>The company has a high-speed AWS Direct Connect connection. Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity. The end result will be stored in Amazon S3. The company is expecting 10-15 job requests each day.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#138",
          "answers": [
            {
              "choice": "<p>A. Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792218,
          "date": "Mon 30 Jan 2023 01:52",
          "username": "zozza2023",
          "content": "C is the correct solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778058,
          "date": "Mon 16 Jan 2023 18:54",
          "username": "masetromain",
          "content": "The correct solution is C. <br><br>AWS DataSync can be used to transfer the sequencing data to Amazon S3, which is a more efficient and faster method than using Snowball Edge devices. Once the data is in S3, S3 events can trigger an AWS Lambda function that starts an AWS Step Functions workflow. The Docker images can be stored in Amazon Elastic Container Registry (Amazon ECR) and AWS Batch can be used to run the container and process the sequencing data.<br><br>Option A is not the best solution because it would take a long time to transfer the data to AWS and process the data, and AWS Snowball Edge is not ideal for high-speed data transfer.<br>Option B is not the best solution because EC2 Auto Scaling group is not a cost-effective solution for running short-lived jobs<br>Option D is not the best solution because AWS Batch is not the best service for running short-lived jobs and it may not be cost-effective",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777739,
          "date": "Mon 16 Jan 2023 15:01",
          "username": "zhangyu20000",
          "content": "C is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs a content management application on a single Windows Amazon EC2 instance in a development environment. The application reads and writes static content to a 2 TB Amazon Elastic Block Store (Amazon EBS) volume that is attached to the instance as the root device. The company plans to deploy this application in production as a highly available and fault-tolerant solution that runs on at least three EC2 instances across multiple Availability Zones.<br><br>A solutions architect must design a solution that joins all the instances that run the application to an Active Directory domain. The solution also must implement Windows ACLs to control access to file contents. The application always must maintain exactly the same content on all running instances at any given point in time.<br><br>Which solution will meet these requirements with the LEAST management overhead?<br><br></p>",
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
              "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file share. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to install the application, join the instance to the AD domain, and mount the EFS file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AMI from the current EC2 Instance that is running. Create an Amazon FSx for Lustre file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to join the instance to the AD domain and mount the FSx for Lustre file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to install the application and mount the FSx for Windows File Server file system. Perform a seamless domain join to join the instance to the AD domain.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AMI from the current EC2 instance that is running. Create an Amazon Elastic File System (Amazon EFS) file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three Instances. Perform a seamless domain join to join the instance to the AD domain.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796839,
          "date": "Fri 03 Feb 2023 08:34",
          "username": "jojom19980",
          "content": "FSx for Lustre can only be used by Linux-based instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792226,
          "date": "Mon 30 Jan 2023 01:58",
          "username": "zozza2023zozza2023",
          "content": "good answer are C or D but as it says LEAST management overhead ==> D as in C we will need a user data scriptsorry D is uncorrect as it use Elastic File System (Amazon EFS) itch is not windows so Iswitch to C",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 792227,
          "date": "Mon 30 Jan 2023 02:00",
          "username": "zozza2023",
          "content": "sorry D is uncorrect as it use Elastic File System (Amazon EFS) itch is not windows so Iswitch to C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 789855,
          "date": "Fri 27 Jan 2023 18:52",
          "username": "ARLV",
          "content": "@masetromain is this a good exam study guide? Like how many questions were from here. Any help would be appreciated. Thank you",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 789372,
          "date": "Fri 27 Jan 2023 07:37",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_join_instance.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779136,
          "date": "Tue 17 Jan 2023 18:30",
          "username": "masetromainmasetromainmasetromain",
          "content": "I switch for C: Create an Amazon FSx for Windows File Server file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to install the application and mount the FSx for Windows File Server file system. Perform a seamless domain join to join the instance to the AD domain.This solution meets the requirements with the least management overhead because it utilizes Amazon FSx for Windows File Server, which is a fully managed service that allows you to easily set up a highly available and scalable file server. The Auto Scaling group ensures that the application is running on at least three instances across multiple Availability Zones, providing high availability and fault tolerance. The user data script can be used to automate the setup and configuration of the instances when they are launched, and it can be used to join the instances to the AD domain, so that the instances can be managed and access to the file contents can be controlled using Windows ACLs.The other choices are not correct because:<br><br>Option A: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>Option B: Amazon FSx for Lustre is a high-performance file system optimized for compute-intensive workloads, it is not a windows file system and it does not support Windows ACLs.<br><br>Option D: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>In both cases, creating a new AMI from the current EC2 instance that is running it doesn't help to solve the problem as it won't provide a scalable solution that runs on at least three instances across multiple Availability Zones.",
          "upvote_count": "322",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779138,
          "date": "Tue 17 Jan 2023 18:30",
          "username": "masetromainmasetromain",
          "content": "This solution meets the requirements with the least management overhead because it utilizes Amazon FSx for Windows File Server, which is a fully managed service that allows you to easily set up a highly available and scalable file server. The Auto Scaling group ensures that the application is running on at least three instances across multiple Availability Zones, providing high availability and fault tolerance. The user data script can be used to automate the setup and configuration of the instances when they are launched, and it can be used to join the instances to the AD domain, so that the instances can be managed and access to the file contents can be controlled using Windows ACLs.The other choices are not correct because:<br><br>Option A: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>Option B: Amazon FSx for Lustre is a high-performance file system optimized for compute-intensive workloads, it is not a windows file system and it does not support Windows ACLs.<br><br>Option D: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>In both cases, creating a new AMI from the current EC2 instance that is running it doesn't help to solve the problem as it won't provide a scalable solution that runs on at least three instances across multiple Availability Zones.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 779139,
          "date": "Tue 17 Jan 2023 18:30",
          "username": "masetromain",
          "content": "The other choices are not correct because:<br><br>Option A: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>Option B: Amazon FSx for Lustre is a high-performance file system optimized for compute-intensive workloads, it is not a windows file system and it does not support Windows ACLs.<br><br>Option D: An Amazon Elastic File System (Amazon EFS) file share is not a windows file system and it does not support Windows ACLs.<br><br>In both cases, creating a new AMI from the current EC2 instance that is running it doesn't help to solve the problem as it won't provide a scalable solution that runs on at least three instances across multiple Availability Zones.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 778061,
          "date": "Mon 16 Jan 2023 18:57",
          "username": "masetromainmasetromain",
          "content": "The correct answer is D, as it meets all of the requirements with the least management overhead.<br><br>In this solution, an Amazon Elastic File System (Amazon EFS) file system is created and an Auto Scaling group is created that extends across three Availability Zones and maintains a minimum size of three instances. A new AMI is created from the current EC2 instance that is running, and the instances in the Auto Scaling group are then launched from this new AMI.<br><br>A seamless domain join is then performed to join the instances to the AD domain, and the Amazon EFS file system is mounted on the instances. This solution uses an existing EC2 instance, so there is no need to use a user data script to install the application or join the instances to the AD domain, which reduces the management overhead.The other choices are not correct because they either require a user data script to install the application or to join the instances to the AD domain, which increases the management overhead, or they use a different file system that may not be compatible with the application or the AD domain.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778062,
          "date": "Mon 16 Jan 2023 18:57",
          "username": "masetromain",
          "content": "The other choices are not correct because they either require a user data script to install the application or to join the instances to the AD domain, which increases the management overhead, or they use a different file system that may not be compatible with the application or the AD domain.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777758,
          "date": "Mon 16 Jan 2023 15:19",
          "username": "zhangyu20000",
          "content": "D is only one make sense<br>A: No AMI creation, have to use user data to install app, more complex<br>B: need user data<br>C: need user data<br>D: has least management overhead",
          "upvote_count": "1",
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
      "question_text": "<p>A software as a service (SaaS) based company provides a case management solution to customers A3 part of the solution. The company uses a standalone Simple Mail Transfer Protocol (SMTP) server to send email messages from an application. The application also stores an email template for acknowledgement email messages that populate customer data before the application sends the email message to the customer.<br><br>The company plans to migrate this messaging functionality to the AWS Cloud and needs to minimize operational overhead.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace. Store the email template in an Amazon S3 bucket. Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template. Use an SDK in the Lambda function to send the email message.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up Amazon Simple Email Service (Amazon SES) to send email messages. Store the email template in an Amazon S3 bucket. Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template. Use an SDK in the Lambda function to send the email message.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace. Store the email template in Amazon Simple Email Service (Amazon SES) with parameters for the customer data. Create an AWS Lambda function to call the SES template and to pass customer data to replace the parameters. Use the AWS Marketplace SMTP server to send the email message.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Amazon Simple Email Service (Amazon SES) to send email messages. Store the email template on Amazon SES with parameters for the customer data. Create an AWS Lambda function to call the SendTemplatedEmail API operation and to pass customer data to replace the parameters and the email destination.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792231,
          "date": "Mon 30 Jan 2023 02:07",
          "username": "zozza2023",
          "content": "D should be the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778069,
          "date": "Mon 16 Jan 2023 19:02",
          "username": "masetromain",
          "content": "The correct answer is D. <br><br>In this solution, the company can use Amazon SES to send email messages, which will minimize operational overhead as SES is a fully managed service that handles sending and receiving email messages. The company can store the email template on Amazon SES with parameters for the customer data and use an AWS Lambda function to call the SendTemplatedEmail API operation, passing in the customer data to replace the parameters and the email destination. This solution eliminates the need to set up and manage an SMTP server on EC2 instances, which can be costly and time-consuming.<br><br>Option A and B are not correct because it requires to set up an SMTP server on EC2 instances, which is not necessary and will increase operational overhead.<br>Option C is not correct because it stores the email template in Amazon SES with parameters for the customer data which is not possible.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777765,
          "date": "Mon 16 Jan 2023 15:22",
          "username": "zhangyu20000",
          "content": "D is correct - https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html",
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
      "question_text": "<p>A company is processing videos in the AWS Cloud by Using Amazon EC2 instances in an Auto Scaling group. It takes 30 minutes to process a video Several EC2 instances scale in and out depending on the number of videos in an Amazon Simple Queue Service (Amazon SQS) queue.<br><br>The company has configured the SQS queue with a redrive policy that specifies a target dead-letter queue and a maxReceiveCount of 1. The company has set the visibility timeout for the SQS queue to 1 hour. The company has set up an Amazon CloudWatch alarm to notify the development team when there are messages in the dead-letter queue.<br><br>Several times during the day. the development team receives notification that messages are in the dead-letter queue and that videos have not been processed property. An investigation finds no errors m the application logs.<br><br>How can the company solve this problem?<br><br></p>",
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
              "choice": "<p>A. Turn on termination protection tor the EC2 Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the visibility timeout for the SQS queue to 3 hours<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure scale-in protection for the instances during processing<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the redrive policy and set maxReceiveCount to 0.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792235,
          "date": "Mon 30 Jan 2023 02:11",
          "username": "zozza2023",
          "content": "for me, should be C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778073,
          "date": "Mon 16 Jan 2023 19:04",
          "username": "masetromain",
          "content": "The correct answer is C.  The company can solve the problem by configuring scale-in protection for the instances during processing. This will ensure that the instances are not terminated while they are processing videos. This will prevent the messages from moving to the dead-letter queue and ensure that videos are processed properly.<br><br>Option A is incorrect because turning on termination protection for the EC2 instances will not solve the problem as it will impact the ability of the Auto Scaling group to scale instances in and out based on the number of videos in the queue.<br><br>Option B is incorrect because the company has specified a visibility timeout of 1 hour, which is enough time for the instances to process a video and there is no need to update the timeout to 3 hours.<br><br>Option D is incorrect because the company has set the maxReceiveCount to 1 and changing it to 0 will not solve the problem. maxReceiveCount allowed range is 1 to 1000.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777793,
          "date": "Mon 16 Jan 2023 15:45",
          "username": "zhangyu20000",
          "content": "C is correct<br>A: termination protection of EC2 will impact ASG<br>B: only take 30 minutes, no need for 3 hour<br>C: ASG is based on queue depth, ASG will scale in when queue length is 0. But maxreceivecount is set to 1.<br>D: maxreceivecount allowed range is 1 to 1000",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#142",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed APIs that use Amazon API Gateway with Regional endpoints. The APIs call AWS Lambda functions that use API Gateway authentication mechanisms. After a design review, a solutions architect identifies a set of APIs that do not require public access.<br><br>The solutions architect must design a solution to make the set of APIs accessible only from a VPC.  All APIs need to be called with an authenticated user<br><br>Which solution will meet these requirements with the LEAST amount of effort?<br><br></p>",
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
              "choice": "<p>A. Create an internal Application Load Balancer (ALB). Create a target group. Select the Lambda function to call. Use the ALB DNS name to call the API from the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the DNS entry that is associated with the API in API Gateway. Create a hosted zone in Amazon Route 53. Create a CNAME record in the hosted zone. Update the API in API Gateway with the CNAME record. Use the CNAME record to call the API from the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the API endpoint from Regional to private in API Gateway. Create an interface VPC endpoint in the VPCreate a resource policy, and attach it to the API. Use the VPC endpoint to call the API from the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the Lambda functions inside the VPC Provision an EC2 instance, and install an Apache server. From the Apache server, call the Lambda functions. Use the internal CNAME record of the EC2 instance to call the API from the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792240,
          "date": "Mon 30 Jan 2023 02:19",
          "username": "zozza2023",
          "content": "should be C as on the question has said 'no need for public IP\\\" ==> private in API gateway = VPC endpoint",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778075,
          "date": "Mon 16 Jan 2023 19:05",
          "username": "masetromain",
          "content": "The correct answer is C.  Update the API endpoint from Regional to private in API Gateway. Create an interface VPC endpoint in the VPC.  Create a resource policy, and attach it to the API. Use the VPC endpoint to call the API from the VPC. <br>This solution will meet the requirements with the least amount of effort because it utilizes the built-in features of API Gateway and VPC to restrict access to the API. With this method, no additional infrastructure or configurations are necessary.<br>A and B are not correct because they would require additional infrastructure and configurations.<br>D is not correct because it would require provisioning an EC2 instance and installing an Apache server, introducing additional complexity and management overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777804,
          "date": "Mon 16 Jan 2023 15:54",
          "username": "zhangyu20000",
          "content": "C iscorrect",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront.<br><br>The company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time.<br><br>Which combination of steps will resolve the us-east-1 performance issues? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution. Use Lambda@Edge to modify requests from North America to use the new origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792247,
          "date": "Mon 30 Jan 2023 02:22",
          "username": "zozza2023",
          "content": "A and E are not correct as there isn't a need to use aws global accel",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 778077,
          "date": "Mon 16 Jan 2023 19:06",
          "username": "masetromain",
          "content": "B is correct because it involves creating a new S3 bucket in the us-east-1 region and configuring cross-Region replication to synchronize from the existing S3 bucket in eu-west-1. This will allow users in us-east-1 to access the weather maps from a closer location, improving performance.<br><br>D is correct because it involves using Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1. This will also allow users in us-east-1 to access the weather maps from a closer location, improving performance.<br><br>A and E are not correct because they do not involve creating a new S3 bucket in us-east-1, which is necessary for improving performance for the users in that region. C is not correct because it involves using the S3 Transfer Acceleration endpoint, which is a different service and not necessary for this scenario.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 777805,
          "date": "Mon 16 Jan 2023 15:55",
          "username": "zhangyu20000",
          "content": "BD is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#144",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is investigating an issue in which a company cannot establish new sessions in Amazon Workspaces. An initial analysis indicates that the issue involves user profiles. The Amazon Workspaces environment is configured to use Amazon FSx for Windows File Server as the profile share storage. The FSx for Windows File Server file system is configured with 10 TB of storage.<br><br>The solutions architect discovers that the file system has reached Its maximum capacity. The solutions architect must ensure that users can regain access. The solution also must prevent the problem from occurring again.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Remove old user profiles to create space. Migrate the user profiles to an Amazon FSx for Lustre file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase capacity by using the update-file-system command. Implement an Amazon CloudWatch metric that monitors free space. Use Amazon EventBridge to invoke an AWS Lambda function to increase capacity as required.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Monitor the file system by using the FreeStorageCapacity metric in Amazon CloudWatch. Use AWS Step Functions to increase the capacity as required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove old user profiles to create space. Create an additional FSx for Windows File Server file system. Update the user profile redirection for 50% of the users to use the new file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792249,
          "date": "Mon 30 Jan 2023 02:25",
          "username": "zozza2023",
          "content": "B seems to be the correct answer.<br>the unique possible solution is to add storage capacity using CLI",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 787509,
          "date": "Wed 25 Jan 2023 11:34",
          "username": "pitakk",
          "content": "To increase the storage capacity for an FSx for Windows File Server file system, use the AWS CLI command update-file-system. https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html It's B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778078,
          "date": "Mon 16 Jan 2023 19:07",
          "username": "masetromain",
          "content": "B is correct. It can prevent the issue from happening again by monitoring the file system with the FreeStorageCapacity metric in Amazon CloudWatch and using Amazon EventBridge to invoke an AWS Lambda function to increase the capacity as required. This ensures that the file system always has enough free space to store user profiles and avoids reaching maximum capacity.<br>A: Removing old user profiles may not be sufficient to create enough space and does not prevent the problem from happening again.<br>C: AWS Step Functions cannot be used to increase capacity, it is a service for creating and running workflows that stitch together multiple AWS services.<br>D: Creating an additional FSx for Windows File Server file system and updating user profile redirection for a portion of the users may not be sufficient to prevent the problem from happening again and does not address the current capacity issue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777825,
          "date": "Mon 16 Jan 2023 16:03",
          "username": "zhangyu20000",
          "content": "B is correct. It can prevent issue happen again with EventBridge and Lambda<br>A: not make sense at all<br>C: Cannot use Step Function to increase capacity<br>D: not prevent happen again",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#145",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient’s signature or a photo of the package with the recipient. The driver’s handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.<br><br>As the company expands, drivers report that the system is rejecting connections. The FTP server is having problems because of dropped connections and memory issues in response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes. The billing team reports that files are not always in the archive and that the central system is not always updated.<br><br>A solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated. The handheld devices cannot be modified, so the company cannot deploy a new application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#145",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792253,
          "date": "Mon 30 Jan 2023 02:30",
          "username": "zozza2023",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778082,
          "date": "Mon 16 Jan 2023 19:10",
          "username": "masetromain",
          "content": "C is correct. Using AWS Transfer Family to create an FTP server that places the files in Amazon S3 and using S3 event notifications through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function will ensure that the archive always receives the files and that the central system is always updated. This solution maximizes scalability and eliminates the need for manual intervention, such as rebooting the EC2 instance. <br><br>Option A and B still use EC2 instance, which is the source of the problem. Option D requires modification to the handheld devices which is not possible.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777829,
          "date": "Mon 16 Jan 2023 16:04",
          "username": "zhangyu20000",
          "content": "C is correct",
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
      "question_text": "<p>A company is running an application in the AWS Cloud. The application runs on containers m an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS tasks use the Fargate launch type. The application's data is relational and is stored in Amazon Aurora MySQL. To meet regulatory requirements, the application must be able to recover to a separate AWS Region in the event of an application failure. In case of a failure, no data can be lost.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#146",
          "answers": [
            {
              "choice": "<p>A. Provision an Aurora Replica in a different Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS DataSync for continuous replication of the data to a different Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Database Migration Service (AWS DMS) to perform a continuous replication of the data to a different Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule a snapshot every 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792259,
          "date": "Mon 30 Jan 2023 02:34",
          "username": "zozza2023",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778084,
          "date": "Mon 16 Jan 2023 19:11",
          "username": "masetromain",
          "content": "A is correct. Provision an Aurora Replica in a different Region will meet the requirement of the application being able to recover to a separate AWS Region in the event of an application failure, and no data can be lost, with the least amount of operational overhead.<br>B.  AWS DataSync can replicate data, but it is not a fully managed service and requires more configuration and management.<br>C.  AWS DMS is a fully managed service for migrating data between databases, but it may require additional configuration and management to continuously replicate data in real-time.<br>D.  Amazon DLM can be used for scheduling snapshots, but it does not provide real-time replication and may not meet the requirement of no data loss in case of a failure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777839,
          "date": "Mon 16 Jan 2023 16:08",
          "username": "zhangyu20000",
          "content": "A is correct<br>B: cannot use DataSync for Aurora backup<br>C: too complex<br>D: DLM is for EBS backup. Here use managed Aurora server, no access to EBS",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#147",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company receives a regular data feed from its credit card servicing partner. Approximately 5,000 records are sent every 15 minutes in plaintext, delivered over HTTPS directly into an Amazon S3 bucket with server-side encryption. This feed contains sensitive credit card primary account number (PAN) data. The company needs to automatically mask the PAN before sending the data to another S3 bucket for additional internal processing. The company also needs to remove and merge specific fields, and then transform the record into JSON format. Additionally, extra feeds are likely to be added in the future, so any design needs to be easily expandable.<br><br>Which solutions will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#147",
          "answers": [
            {
              "choice": "<p>A. Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Invoke another Lambda function when new messages arrive in the SQS queue to process the records, writing the results to a temporary location in Amazon S3. Invoke a final Lambda function once the SQS queue is empty to transform the records into JSON format and send the results to another S3 bucket for internal processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Configure an AWS Fargate container application to automatically scale to a single instance when the SQS queue contains messages. Have the application process each record, and transform the record into JSON format. When the queue is empty, send the results to another S3 bucket for internal processing and scale down the AWS Fargate instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Glue crawler and custom classifier based on the data feed formats and build a table definition to match. Invoke an AWS Lambda function on file delivery to start an AWS Glue ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, have the ETL job send the results to another S3 bucket for internal processing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Glue crawler and custom classifier based upon the data feed formats and build a table definition to match. Perform an Amazon Athena query on file delivery to start an Amazon EMR ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, send the results to another S3 bucket for internal processing and scale down the EMR cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792262,
          "date": "Mon 30 Jan 2023 02:40",
          "username": "zozza2023",
          "content": "C is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778089,
          "date": "Mon 16 Jan 2023 19:15",
          "username": "masetromain",
          "content": "C is correct. It will process the data in batch mode using Glue ETL job which can handle large amount of data and can be scheduled to run periodically. This solution is also easily expandable for future feeds.<br><br>A: It uses multiple Lambda functions, SQS queue and S3 temporary location which will increase operational overhead.<br>B: Using Fargate may not be the most cost-effective solution and also it may not handle large amount of data.<br>D: Athena and EMR both are powerful tools but they are more complex and can be more costly than Glue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777844,
          "date": "Mon 16 Jan 2023 16:10",
          "username": "zhangyu20000",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use AWS to create a business continuity solution in case the company's main on-premises application fails. The application runs on physical servers that also run other applications. The on-premises application that the company is planning to migrate uses a MySQL database as a data store. All the company's on-premises applications use operating systems that are compatible with Amazon EC2.<br><br>Which solution will achieve the company's goal with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#148",
          "answers": [
            {
              "choice": "<p>A. Install the AWS Replication Agent on the source servers, including the MySQL servers. Set up replication for all servers. Launch test instances for regular drills. Cut over to the test instances to fail over the workload in the case of a failure event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the AWS Replication Agent on the source servers, including the MySQL servers. Initialize AWS Elastic Disaster Recovery in the target AWS Region. Define the launch settings. Frequently perform failover and fallback from the most recent point in time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create AWS Database Migration Service (AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database. Create a DMS replication task to copy the existing data to the target DB cluster. Create a local AWS Schema Conversion Tool (AWS SCT) change data capture (CDC) task to keep the data synchronized. Install the rest of the software on EC2 instances by starting with a compatible base AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway Volume Gateway on premises. Mount volumes on all on-premises servers. Install the application and the MySQL database on the new volumes. Take regular snapshots. Install all the software on EC2 Instances by starting with a compatible base AMI. Launch a Volume Gateway on an EC2 instance. Restore the volumes from the latest snapshot. Mount the new volumes on the EC2 instances in the case of a failure event.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795563,
          "date": "Wed 01 Feb 2023 23:43",
          "username": "tatdatpham",
          "content": "C is correct.<br>Option B, Initializing AWS Elastic Disaster Recovery in the target AWS Region, requires frequent failover and fallback from the most recent point in time which would increase operational overhead for the company. The goal is to have the solution with the LEAST operational overhead.<br>Option C, using AWS DMS and SCT, provides a more efficient and less manual process for replicating and synchronizing the database, reducing the operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792264,
          "date": "Mon 30 Jan 2023 02:42",
          "username": "zozza2023",
          "content": "I select C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792199,
          "date": "Mon 30 Jan 2023 01:20",
          "username": "bititan",
          "content": "this is asking about application and not data alone. So option B with DRS is good. C is concentrating only on DB migration.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790295,
          "date": "Sat 28 Jan 2023 05:47",
          "username": "Untamables",
          "content": "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html<br>https://docs.aws.amazon.com/drs/latest/userguide/recovery-workflow-gs.html<br>Option C is wrong. That just mentions the migration method. I think this question asks us the DR architecture between on-premises and AWS cloud.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 785387,
          "date": "Mon 23 Jan 2023 14:29",
          "username": "pitakk",
          "content": "C is intuitive and makes sense apart from the fact that there's no CDC in SCT... I guess they thought about B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778180,
          "date": "Mon 16 Jan 2023 20:51",
          "username": "masetromain",
          "content": "C.  Create AWS Database Migration Service (AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database. Create a DMS replication task to copy the existing data to the target DB cluster. Create a local AWS Schema Conversion Tool (AWS SCT) change data capture (CDC) task to keep the data synchronized. Install the rest of the software on EC2 instances by starting with a compatible base AMI.<br><br>This option would allow the company to use the AWS DMS and SCT tools, which are specifically designed for migrating and replicating databases, to migrate their MySQL database to an Amazon Aurora MySQL DB cluster in the target AWS Region. This would reduce the operational overhead compared to option A and B, as it would automate the process of replicating and synchronizing the data. Option D is also a viable solution but it would have more operational overhead compared to option C as it involves more manual steps like taking regular snapshot and restoring them.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777850,
          "date": "Mon 16 Jan 2023 16:18",
          "username": "zhangyu20000",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is subject to regulatory audits of its financial information. External auditors who use a single AWS account need access to the company's AWS account. A solutions architect must provide the auditors with secure, read-only access to the company's AWS account. The solution must comply with AWS security best practices.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. In the company's AWS account, create resource policies for all resources in the account to grant access to the auditors' AWS account. Assign a unique external ID to the resource policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the company's AWS account, create an IAM role that trusts the auditors' AWS account. Create an IAM policy that has the required permissions. Attach the policy to the role. Assign a unique external ID to the role's trust policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the company's AWS account, create an IAM user. Attach the required IAM policies to the IAM user. Create API access keys for the IAM user. Share the access keys with the auditors.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the company's AWS account, create an IAM group that has the required permissions. Create an IAM user in the company's account for each auditor. Add the IAM users to the IAM group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795565,
          "date": "Wed 01 Feb 2023 23:47",
          "username": "tatdatpham",
          "content": "Option B is the best solution. This solution creates an IAM role that trusts the auditors' AWS account and attaches the required IAM policies to the role. This ensures that the auditors have read-only access to the company's AWS account while ensuring that the company's AWS account is secure and complies with AWS security best practices. Additionally, the unique external ID assigned to the role's trust policy adds an extra layer of security.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792266,
          "date": "Mon 30 Jan 2023 02:45",
          "username": "zozza2023",
          "content": "B seems to be the right answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778181,
          "date": "Mon 16 Jan 2023 20:53",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B.  In the company's AWS account, create an IAM role that trusts the auditors' AWS account. Create an IAM policy that has the required permissions. Attach the policy to the role. Assign a unique external ID to the role's trust policy.<br><br>This solution meets the requirement of providing the external auditors with secure, read-only access to the company's AWS account while also complying with AWS security best practices. In this solution, an IAM role is created that trusts the auditors' AWS account and has an IAM policy with the required permissions attached to it. The role's trust policy should include a unique external ID for added security. This allows the external auditors to assume the role and access the resources with the permissions specified in the policy, without the need to share access keys or create individual IAM users for each auditor.Option A is incorrect because it grants access to all resources in the company's AWS account and does not provide a way to restrict the permissions that the external auditors have.<br><br>Option C is incorrect because it creates an IAM user in the company's account and shares the API access keys with the external auditors, which is not secure and does not comply with AWS security best practices.<br><br>Option D is incorrect because it creates an IAM user in the company's account for each auditor, which would be tedious and difficult to manage for the company. It would be more secure and efficient to use an IAM role that trusts the auditors' AWS account instead of creating individual users for each auditor.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778183,
          "date": "Mon 16 Jan 2023 20:54",
          "username": "masetromain",
          "content": "Option A is incorrect because it grants access to all resources in the company's AWS account and does not provide a way to restrict the permissions that the external auditors have.<br><br>Option C is incorrect because it creates an IAM user in the company's account and shares the API access keys with the external auditors, which is not secure and does not comply with AWS security best practices.<br><br>Option D is incorrect because it creates an IAM user in the company's account for each auditor, which would be tedious and difficult to manage for the company. It would be more secure and efficient to use an IAM role that trusts the auditors' AWS account instead of creating individual users for each auditor.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777852,
          "date": "Mon 16 Jan 2023 16:20",
          "username": "zhangyu20000",
          "content": "B is correct",
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
      "question_text": "<p>A company has a latency-sensitive trading platform that uses Amazon DynamoDB as a storage backend. The company configured the DynamoDB table to use on-demand capacity mode. A solutions architect needs to design a solution to improve the performance of the trading platform. The new solution must ensure high availability for the trading platform.<br><br>Which solution will meet these requirements with the LEAST latency?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#150",
          "answers": [
            {
              "choice": "<p>A. Create a two-node DynamoDB Accelerator (DAX) cluster. Configure an application to read and write data by using DAX.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data directly from the DynamoDB table and to write data by using DAX.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a single-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795392,
          "date": "Wed 01 Feb 2023 19:18",
          "username": "irene7",
          "content": "B, writing with DAX can have more latency and needs three nodes for HA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 792271,
          "date": "Mon 30 Jan 2023 02:51",
          "username": "zozza2023mikeshop",
          "content": "I\\\"ll go for A (enven if it is less in HA) but because it is the unique option where it it saied that read and write is done thru DAXIt said least latency. Writing via DAX has higher latency than writing directly to dynamodb.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 794004,
          "date": "Tue 31 Jan 2023 11:36",
          "username": "mikeshop",
          "content": "It said least latency. Writing via DAX has higher latency than writing directly to dynamodb.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791055,
          "date": "Sat 28 Jan 2023 21:20",
          "username": "schalke04",
          "content": "A DAX cluster can be deployed with one or two nodes for development or test workloads. One- and two-node clusters are not fault-tolerant, and we don't recommend using fewer than three nodes for production use. If a one- or two-node cluster encounters software or hardware errors, the cluster can become unavailable or lose cached data.A DAX cluster can be deployed with one or two nodes for development or test workloads. One- and two-node clusters are not fault-tolerant, and we don't recommend using fewer than three nodes for production use. If a one- or two-node cluster encounters software or hardware errors, the cluster can become unavailable or lose cached data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790302,
          "date": "Sat 28 Jan 2023 06:06",
          "username": "Untamables",
          "content": "3 nodes are required for a DAX cluster to be fault-tolerant.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778185,
          "date": "Mon 16 Jan 2023 20:55",
          "username": "masetromain",
          "content": "A.  Create a two-node DynamoDB Accelerator (DAX) cluster. Configure an application to read and write data by using DAX.<br><br>DynamoDB Accelerator (DAX) is a service that provides a fully managed, in-memory cache for DynamoDB tables. By creating a two-node DAX cluster, the solution will be able to handle a large number of read and write requests with low latency. Configuring the application to read and write data by using DAX will enable the trading platform to take advantage of DAX's in-memory cache, resulting in improved performance.<br><br>Option B, C and D are not correct because they all recommend using DAX only for reading data or writing data which will reduce the performance improvement, also having a single node DAX cluster will not ensure high availability for the trading platform as it has a single point of failure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778016,
          "date": "Mon 16 Jan 2023 18:35",
          "username": "zhangyu20000",
          "content": "A: two nodes with R/W through DAX",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#151",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated an application from on premises to AWS. The application frontend is a static website that runs on two Amazon EC2 instances behind an Application Load Balancer (ALB). The application backend is a Python application that runs on three EC2 instances behind another ALB.  The EC2 instances are large, general purpose On-Demand Instances that were sized to meet the on-premises specifications for peak usage of the application.<br><br>The application averages hundreds of thousands of requests each month. However, the application is used mainly during lunchtime and receives minimal traffic during the rest of the day.<br><br>A solutions architect needs to optimize the infrastructure cost of the application without negatively affecting the application availability.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#151",
          "answers": [
            {
              "choice": "<p>A. Change all the EC2 instances to compute optimized instances that have the same number of cores as the existing EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the application frontend to a static website that is hosted on Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application frontend by using AWS Elastic Beanstalk. Use the same instance type for the nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change all the backend EC2 instances to Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the backend Python application to general purpose burstable EC2 instances that have the same number of cores as the existing EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795570,
          "date": "Thu 02 Feb 2023 00:01",
          "username": "tatdatpham",
          "content": "The correct answer is B, E. <br>Option B of moving the frontend to a static website hosted on Amazon S3 will reduce the cost of running the frontend, as S3 is a lower cost storage option than EC2 instances.<br>Option E of deploying the backend Python application to general purpose burstable EC2 instances will ensure that the backend EC2 instances have the capacity to handle spikes in usage, as burstable instances are designed to handle unpredictable workloads. This will help to optimize the cost of running the backend, as burstable instances are less expensive than On-Demand instances and more cost-effective than Spot instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 790327,
          "date": "Sat 28 Jan 2023 06:37",
          "username": "Untamables",
          "content": "B and E. <br>Option D is wrong. A spot instance is not appropriate for a production server.<br>By the way, I would like another option that mentions changing the backend Python API Gateway and Lambda because Option B mentions changing the frontend serverless. I think this question is a typical use case of the serverless architecture.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 787192,
          "date": "Wed 25 Jan 2023 03:07",
          "username": "vsk12",
          "content": "Correct answers are<br>B & E<br>Option B as S3 is a cost-effective storage solution for static websites.<br>Option E as burstable general-purpose instances provides a cost-effective solution for this kind of workload.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 778188,
          "date": "Mon 16 Jan 2023 21:00",
          "username": "masetromainmasetromain",
          "content": "B.  Move the application frontend to a static website that is hosted on Amazon S3.D.  Change all the backend EC2 instances to Spot Instances.<br><br>Step 1: Moving the application frontend to a static website that is hosted on Amazon S3 will reduce the cost and increase the scalability of the application. S3 is a highly scalable object storage service that can handle large amounts of data and traffic at a lower cost than running EC2 instances.<br><br>Step 2: Changing the backend EC2 instances to Spot Instances can help reduce cost without negatively affecting the application availability. Spot Instances allow customers to bid on unused Amazon EC2 capacity, which can result in significant cost savings. You can also use AWS Auto Scaling to automatically increase or decrease the number of Spot Instances based on the application's traffic.Option A, C: Changing to compute optimized instances or using Elastic Beanstalk will not help reducing the cost, it will only change the instances type and not helping the cost optimization.<br>Option E: Deploying the backend Python application to general purpose burstable EC2 instances will not help reducing the cost, as it still using On-Demand instances.<br><br>It is important to note that using spot instances comes with the risk of instances being terminated when the spot price goes up. To mitigate this risk, you could use the EC2 Auto Scaling group with a combination of on-demand and spot instances. This way, if a spot instance is terminated, the Auto Scaling group can automatically replace it with an on-demand instance to ensure the application is always available.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 778189,
          "date": "Mon 16 Jan 2023 21:00",
          "username": "masetromain",
          "content": "Option A, C: Changing to compute optimized instances or using Elastic Beanstalk will not help reducing the cost, it will only change the instances type and not helping the cost optimization.<br>Option E: Deploying the backend Python application to general purpose burstable EC2 instances will not help reducing the cost, as it still using On-Demand instances.<br><br>It is important to note that using spot instances comes with the risk of instances being terminated when the spot price goes up. To mitigate this risk, you could use the EC2 Auto Scaling group with a combination of on-demand and spot instances. This way, if a spot instance is terminated, the Auto Scaling group can automatically replace it with an on-demand instance to ensure the application is always available.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777864,
          "date": "Mon 16 Jan 2023 16:28",
          "username": "zhangyu20000masetromain",
          "content": "BE are correct<br>A: Compute optimized instance is expensive than burstable instance<br>B: S3 hosted static web server is cheaper<br>C: Not save money<br>D: Spot instance affect availibility<br>E: Burstable EC2 is cheaperTo mitigate this risk, you could use the EC2 Auto Scaling group with a combination of on-demand and spot instances. This way, if a spot instance is terminated, the Auto Scaling group can automatically replace it with an on-demand instance to ensure the application is always available.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 779144,
          "date": "Tue 17 Jan 2023 18:33",
          "username": "masetromain",
          "content": "To mitigate this risk, you could use the EC2 Auto Scaling group with a combination of on-demand and spot instances. This way, if a spot instance is terminated, the Auto Scaling group can automatically replace it with an on-demand instance to ensure the application is always available.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#152",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an event ticketing platform on AWS and wants to optimize the platform's cost-effectiveness. The platform is deployed on Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 and is backed by an Amazon RDS for MySQL DB instance. The company is developing new application features to run on Amazon EKS with AWS Fargate.<br><br>The platform experiences infrequent high peaks in demand. The surges in demand depend on event dates.<br><br>Which solution will provide the MOST cost-effective setup for the platform?<br><br></p>",
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
              "choice": "<p>A. Purchase Standard Reserved Instances for the EC2 instances that the EKS cluster uses in its baseline load. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet predicted peak load for the year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase Compute Savings Plans for the predicted medium load of the EKS cluster. Scale the cluster with On-Demand Capacity Reservations based on event dates for peaks. Purchase 1-year No Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale out database read replicas during peaks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase EC2 Instance Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase Compute Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795575,
          "date": "Thu 02 Feb 2023 00:08",
          "username": "tatdatpham",
          "content": "Agree with zhangyu20000",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792302,
          "date": "Mon 30 Jan 2023 03:14",
          "username": "zozza2023",
          "content": "I agree with zhangyu20000",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790342,
          "date": "Sat 28 Jan 2023 07:05",
          "username": "Untamables",
          "content": "Option A, C and D are wrong. They all mention using spot instances and EKS based on EC2. A spot instance is not appropriate for a production server and the company is developing new application designed for AWS Fargate, which means we must plan the future cost improvement including AWS Fargate.<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 784003,
          "date": "Sun 22 Jan 2023 08:04",
          "username": "pitakkzhangyu20000zhangyu20000",
          "content": "I think it's D.  They use Savings Plans for the predicted base load. They scale on Spot during peaks. They manually scale up DB as they know the event dates - scaling out read replicas only won't help with writes.never build real time system on spot instance, spot instance is good for no-real time data processing, not good for web serverThe company is developing new application features to run on Amazon EKS with AWS Fargate.<br>So any solution that deal with EC2 for EKS are not correct. ACD all deal with EC2.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 788223,
          "date": "Thu 26 Jan 2023 01:08",
          "username": "zhangyu20000",
          "content": "never build real time system on spot instance, spot instance is good for no-real time data processing, not good for web server",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 784591,
          "date": "Sun 22 Jan 2023 19:44",
          "username": "zhangyu20000",
          "content": "The company is developing new application features to run on Amazon EKS with AWS Fargate.<br>So any solution that deal with EC2 for EKS are not correct. ACD all deal with EC2.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778190,
          "date": "Mon 16 Jan 2023 21:05",
          "username": "masetromaintatdatphamzhangyu20000masetromain",
          "content": "A.  Purchase Standard Reserved Instances for the EC2 instances that the EKS cluster uses in its baseline load. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet predicted peak load for the year.<br><br>This solution provides the most cost-effective setup for the platform by combining the cost savings of reserved instances with the flexibility of spot instances. By purchasing Standard Reserved Instances for the baseline load of the EKS cluster, the company can save money on the cost of running the instances. For the infrequent high peaks in demand, the company can scale the cluster with Spot Instances, which are significantly cheaper than on-demand instances. Finally, purchasing 1-year All Upfront Reserved Instances for the database will help meet the predicted peak load for the year and will help save more cost.No, the another key point is \\\"The company is developing new application features to run on Amazon EKS with AWS Fargate\\\" -> It mean the do not want manage EC2. B is correctThe company is developing new application features to run on Amazon EKS with AWS Fargate. This means customer should not manage EC2 at all. So ACD all incorrectOption B, C and D all use a combination of reserved instances, savings plans and spot instances but they don't fully utilize the cost savings of reserved instances and savings plans.<br>Option B uses On-demand Capacity Reservations which are not cost-effective as they are more expensive than spot instances.<br>Option C and D both use manually scaling the DB instance during peaks which is a labor-intensive process and can cause delays in handling the peak demand.",
          "upvote_count": "2111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 795573,
          "date": "Thu 02 Feb 2023 00:07",
          "username": "tatdatpham",
          "content": "No, the another key point is \\\"The company is developing new application features to run on Amazon EKS with AWS Fargate\\\" -> It mean the do not want manage EC2. B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779214,
          "date": "Tue 17 Jan 2023 19:42",
          "username": "zhangyu20000",
          "content": "The company is developing new application features to run on Amazon EKS with AWS Fargate. This means customer should not manage EC2 at all. So ACD all incorrect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778192,
          "date": "Mon 16 Jan 2023 21:05",
          "username": "masetromain",
          "content": "Option B, C and D all use a combination of reserved instances, savings plans and spot instances but they don't fully utilize the cost savings of reserved instances and savings plans.<br>Option B uses On-demand Capacity Reservations which are not cost-effective as they are more expensive than spot instances.<br>Option C and D both use manually scaling the DB instance during peaks which is a labor-intensive process and can cause delays in handling the peak demand.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777871,
          "date": "Mon 16 Jan 2023 16:38",
          "username": "zhangyu20000",
          "content": "B is correct. Compute saving plan will also cover Fargate<br>A: use spot instance is not reliable<br>CD: manually scale up DB",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#153",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an application on AWS Elastic Beanstalk. The application uses Amazon Aurora for the database layer. An Amazon CloudFront distribution serves web requests and includes the Elastic Beanstalk domain name as the origin server. The distribution is configured with an alternate domain name that visitors use when they access the application.<br><br>Each week, the company takes the application out of service for routine maintenance. During the time that the application is unavailable, the company wants visitors to receive an informational message instead of a CloudFront error message.<br><br>A solutions architect creates an Amazon S3 bucket as the first step in the process.<br><br>Which combination of steps should the solutions architect take next to meet the requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#153",
          "answers": [
            {
              "choice": "<p>A. Upload static informational content to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CloudFront distribution. Set the S3 bucket as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the S3 bucket as a second origin in the original CloudFront distribution. Configure the distribution and the S3 bucket to use an origin access identity (OAI).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. During the weekly maintenance, edit the default cache behavior to use the S3 origin. Revert the change when the maintenance is complete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. During the weekly maintenance, create a cache behavior for the S3 origin on the new distribution. Set the path pattern to \\ Set the precedence to 0. Delete the cache behavior when the maintenance is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. During the weekly maintenance, configure Elastic Beanstalk to serve traffic from the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 792307,
          "date": "Mon 30 Jan 2023 03:17",
          "username": "zozza2023",
          "content": "ACD is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 778197,
          "date": "Mon 16 Jan 2023 21:12",
          "username": "masetromainmasetromain",
          "content": "A.  Upload static informational content to the S3 bucket.C.  Set the S3 bucket as a second origin in the original CloudFront distribution. Configure the distribution and the S3 bucket to use an origin access identity (OAI).D.  During the weekly maintenance, edit the default cache behavior to use the S3 origin. Revert the change when the maintenance is complete.<br><br>Step 1: The solutions architect should upload static informational content to the S3 bucket, this content will be shown to the users when the application is down for maintenance.<br><br>Step 2: The solutions architect should set the S3 bucket as a second origin in the original CloudFront distribution. To keep the S3 bucket secure, the solutions architect should configure the distribution and the S3 bucket to use an origin access identity (OAI). This will ensure that only CloudFront has access to the S3 bucket.Step 3: During the weekly maintenance, the solutions architect should edit the default cache behavior of the CloudFront distribution to use the S3 origin. This will redirect all incoming traffic to the S3 bucket and show the static informational content to the users. Once the maintenance is complete, the solutions architect should revert the change back to the original Elastic Beanstalk origin.<br><br>Option B: Creating a new CloudFront distribution and setting the S3 bucket as the origin is unnecessary and could cause confusion for the users.<br>Option E: During the weekly maintenance, creating a cache behavior for the S3 origin on the new distribution is unnecessary, it is more complex and prone to human error.<br>Option F: Configuring Elastic Beanstalk to serve traffic from the S3 bucket is not necessary because CloudFront is already being used as the web request server.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 778198,
          "date": "Mon 16 Jan 2023 21:12",
          "username": "masetromain",
          "content": "Step 3: During the weekly maintenance, the solutions architect should edit the default cache behavior of the CloudFront distribution to use the S3 origin. This will redirect all incoming traffic to the S3 bucket and show the static informational content to the users. Once the maintenance is complete, the solutions architect should revert the change back to the original Elastic Beanstalk origin.<br><br>Option B: Creating a new CloudFront distribution and setting the S3 bucket as the origin is unnecessary and could cause confusion for the users.<br>Option E: During the weekly maintenance, creating a cache behavior for the S3 origin on the new distribution is unnecessary, it is more complex and prone to human error.<br>Option F: Configuring Elastic Beanstalk to serve traffic from the S3 bucket is not necessary because CloudFront is already being used as the web request server.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777883,
          "date": "Mon 16 Jan 2023 16:43",
          "username": "zhangyu20000zhangyu20000",
          "content": "ABD is correctACD is correct",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 779234,
          "date": "Tue 17 Jan 2023 19:56",
          "username": "zhangyu20000",
          "content": "ACD is correct",
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
      "question_text": "<p>A company gives users the ability to upload images from a custom application. The upload process invokes an AWS Lambda function that processes and stores the image in an Amazon S3 bucket. The application invokes the Lambda function by using a specific function version ARN.<br><br>The Lambda function accepts image processing parameters by using environment variables. The company often adjusts the environment variables of the Lambda function to achieve optimal image processing output. The company tests different parameters and publishes a new function version with the updated environment variables after validating results. This update process also requires frequent changes to the custom application to invoke the new function version ARN. These changes cause interruptions for users.<br><br>A solutions architect needs to simplify this process to minimize disruption to users.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#154",
          "answers": [
            {
              "choice": "<p>A. Directly modify the environment variables of the published Lambda function version. Use the SLATEST version to test image processing parameters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon DynamoDB table to store the image processing parameters. Modify the Lambda function to retrieve the image processing parameters from the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Directly code the image processing parameters within the Lambda function and remove the environment variables. Publish a new function version when the company updates the parameters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Lambda function alias. Modify the client application to use the function alias ARN. Reconfigure the Lambda alias to point to new versions of the function when the company finishes testing.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 795578,
          "date": "Thu 02 Feb 2023 00:20",
          "username": "tatdatpham",
          "content": "D is correct<br>By using a function alias, the custom application invokes the latest version of the Lambda function without the need to modify the application code every time the company updates the image processing parameters. This reduces the risk of causing interruptions for users.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778200,
          "date": "Mon 16 Jan 2023 21:15",
          "username": "masetromainmasetromain",
          "content": "D.  Create a Lambda function alias. Modify the client application to use the function alias ARN. Reconfigure the Lambda alias to point to new versions of the function when the company finishes testing.<br><br>Creating a Lambda function alias allows the solutions architect to change the version of the Lambda function that the alias points to without modifying the client application. This eliminates the need for frequent updates to the custom application and minimizes disruption to users. The solutions architect can test different parameters by using different versions of the function and reconfigure the alias to point to the new version after validating results. This allows the company to update the image processing parameters without affecting the users.Option A: Directly modifying the environment variables of the published Lambda function version would cause all clients to use the updated environment variables immediately and would not allow for testing.<br>Option B: Using DynamoDB to store image processing parameters increases complexity and operational overhead, and it would not eliminate the need for updating the custom application.<br>Option C: Directly coding the image processing parameters within the Lambda function and publishing new versions would not eliminate the need for updating the custom application.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778201,
          "date": "Mon 16 Jan 2023 21:15",
          "username": "masetromain",
          "content": "Option A: Directly modifying the environment variables of the published Lambda function version would cause all clients to use the updated environment variables immediately and would not allow for testing.<br>Option B: Using DynamoDB to store image processing parameters increases complexity and operational overhead, and it would not eliminate the need for updating the custom application.<br>Option C: Directly coding the image processing parameters within the Lambda function and publishing new versions would not eliminate the need for updating the custom application.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777891,
          "date": "Mon 16 Jan 2023 16:47",
          "username": "zhangyu20000",
          "content": "D is correct",
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
      "question_text": "<p>A global media company is planning a multi-Region deployment of an application. Amazon DynamoDB global tables will back the deployment to keep the user experience consistent across the two continents where users are concentrated. Each deployment will have a public Application Load Balancer (ALB). The company manages public DNS internally. The company wants to make the application available through an apex domain.<br><br>Which solution will meet these requirements with the LEAST effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. Migrate public DNS to Amazon Route 53. Create CNAME records for the apex domain to point to the ALB.  Use a geolocation routing policy to route traffic based on user location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Place a Network Load Balancer (NLB) in front of the ALMigrate public DNS to Amazon Route 53. Create a CNAME record for the apex domain to point to the NLB’s static IP address. Use a geolocation routing policy to route traffic based on user location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Global Accelerator accelerator with multiple endpoint groups that target endpoints in appropriate AWS Regions. Use the accelerator’s static IP address to create a record in public DNS for the apex domain.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 778204,
          "date": "Mon 16 Jan 2023 21:19",
          "username": "masetromainmasetromainmasetromain",
          "content": "C.  Create an AWS Global Accelerator accelerator with multiple endpoint groups that target endpoints in appropriate AWS Regions. Use the accelerator’s static IP address to create a record in public DNS for the apex domain.<br><br>This solution meets the requirements with the least effort because it uses AWS Global Accelerator, which automatically routes traffic to the optimal endpoint based on health and geography, eliminating the need for manual configuration or additional routing policies. It also eliminates the need to create a CNAME record for the apex domain to point to the ALB or NLB's IP address, which can be less efficient and less reliable.A.  Migrate public DNS to Amazon Route 53. Create CNAME records for the apex domain to point to the ALB.  Use a geolocation routing policy to route traffic based on user location.<br>While this solution uses Route 53 and geolocation routing, it requires manual configuration and maintenance of the routing policy and could introduce additional latency as traffic is routed through the ALB first.<br>B.  Place a Network Load Balancer (NLB) in front of the ALB.  Migrate public DNS to Amazon Route 53. Create a CNAME record for the apex domain to point to the NLB’s static IP address. Use a geolocation routing policy to route traffic based on user location.<br>This solution is similar to the first one, but it uses a Network Load Balancer (NLB) instead of an Application Load Balancer (ALB). It has the same downsides as the first solution.D.  Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.<br><br>This solution uses Amazon API Gateway and AWS Lambda to route traffic, but the round-robin method is not the best way to ensure optimal performance and availability for a multi-region deployment. Additionally, routing traffic through a Lambda function can introduce additional latency.<br><br>AWS Global Accelerator is a more efficient solution that automatically routes traffic to the optimal endpoint based on health and geography, eliminating the need for manual configuration or additional routing policies.",
          "upvote_count": "211",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 778206,
          "date": "Mon 16 Jan 2023 21:21",
          "username": "masetromainmasetromain",
          "content": "A.  Migrate public DNS to Amazon Route 53. Create CNAME records for the apex domain to point to the ALB.  Use a geolocation routing policy to route traffic based on user location.<br>While this solution uses Route 53 and geolocation routing, it requires manual configuration and maintenance of the routing policy and could introduce additional latency as traffic is routed through the ALB first.<br>B.  Place a Network Load Balancer (NLB) in front of the ALB.  Migrate public DNS to Amazon Route 53. Create a CNAME record for the apex domain to point to the NLB’s static IP address. Use a geolocation routing policy to route traffic based on user location.<br>This solution is similar to the first one, but it uses a Network Load Balancer (NLB) instead of an Application Load Balancer (ALB). It has the same downsides as the first solution.D.  Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.<br><br>This solution uses Amazon API Gateway and AWS Lambda to route traffic, but the round-robin method is not the best way to ensure optimal performance and availability for a multi-region deployment. Additionally, routing traffic through a Lambda function can introduce additional latency.<br><br>AWS Global Accelerator is a more efficient solution that automatically routes traffic to the optimal endpoint based on health and geography, eliminating the need for manual configuration or additional routing policies.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 778207,
          "date": "Mon 16 Jan 2023 21:21",
          "username": "masetromain",
          "content": "D.  Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.<br><br>This solution uses Amazon API Gateway and AWS Lambda to route traffic, but the round-robin method is not the best way to ensure optimal performance and availability for a multi-region deployment. Additionally, routing traffic through a Lambda function can introduce additional latency.<br><br>AWS Global Accelerator is a more efficient solution that automatically routes traffic to the optimal endpoint based on health and geography, eliminating the need for manual configuration or additional routing policies.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778035,
          "date": "Mon 16 Jan 2023 18:44",
          "username": "zhangyu20000",
          "content": "C is correct<br>ABD all have CNAME record that is not allowed for apex domain",
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
      "question_text": "<p>A company is developing a new serverless API by using Amazon API Gateway and AWS Lambda. The company integrated the Lambda functions with API Gateway to use several shared libraries and custom classes.<br><br>A solutions architect needs to simplify the deployment of the solution and optimize for code reuse.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#156",
          "answers": [
            {
              "choice": "<p>A. Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the shared libraries and custom classes to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service (Amazon ECS) by using the AWS Fargate launch type. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797760,
          "date": "Sat 04 Feb 2023 09:59",
          "username": "jojom19980",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/lambda-layer-simulated-docker/#:~:text=(Optional)%20To%20use%20the%20Docker,package%20without%20creating%20a%20layer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 795586,
          "date": "Thu 02 Feb 2023 00:37",
          "username": "tatdatpham",
          "content": "\\\"use several shared libraries and custom classes\\\" => Use Lambda layer to optimize code reuse.<br>=> A & B are matched but A is saving Image into S3, not good. Should use ECR.<br>So the answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792319,
          "date": "Mon 30 Jan 2023 03:30",
          "username": "zozza2023",
          "content": "After reading comment , I guess B makes more sens than D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 790645,
          "date": "Sat 28 Jan 2023 15:07",
          "username": "Untamables",
          "content": "Option A, B and C are wrong. An AWS Lambda Layer does not support a Docker image or a deployed container as the source.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html<br>https://aws.amazon.com/blogs/compute/working-with-lambda-layers-and-extensions-in-container-images/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778210,
          "date": "Mon 16 Jan 2023 21:23",
          "username": "masetromainmasetromainmasetromain",
          "content": "B.  Deploy the shared libraries and custom classes to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.<br><br>This solution will simplify the deployment of the solution and optimize for code reuse as it utilizes Lambda Layers to share common code and dependencies. By using Amazon Elastic Container Registry (ECR) to store the Docker image, it allows for easy management and versioning of the shared libraries and custom classes. This way the common code can be reused across multiple Lambda functions and are only deployed once.A.  Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.<br><br>This solution is similar to option B, but it uses S3 bucket to store the Docker image instead of Amazon Elastic Container Registry (ECR). Using S3 for storing the image may be less secure and less manageable than using ECR.<br>C.  Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service (Amazon ECS) by using the AWS Fargate launch type. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.<br><br>This solution is using a more complex service (ECS) and launch type (Fargate) which is not necessary, it will also increase the complexity of the deployment process and make it harder to manage.D.  Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.<br><br>This solution is using a single image to contain all the shared libraries, custom classes, and the code for the API's Lambda functions, which makes it harder to manage and update the shared libraries and custom classes. It also increases the size of the image and make it harder to reuse the common code.",
          "upvote_count": "312",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 778212,
          "date": "Mon 16 Jan 2023 21:24",
          "username": "masetromainmasetromain",
          "content": "A.  Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.<br><br>This solution is similar to option B, but it uses S3 bucket to store the Docker image instead of Amazon Elastic Container Registry (ECR). Using S3 for storing the image may be less secure and less manageable than using ECR.<br>C.  Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service (Amazon ECS) by using the AWS Fargate launch type. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.<br><br>This solution is using a more complex service (ECS) and launch type (Fargate) which is not necessary, it will also increase the complexity of the deployment process and make it harder to manage.D.  Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.<br><br>This solution is using a single image to contain all the shared libraries, custom classes, and the code for the API's Lambda functions, which makes it harder to manage and update the shared libraries and custom classes. It also increases the size of the image and make it harder to reuse the common code.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 778213,
          "date": "Mon 16 Jan 2023 21:24",
          "username": "masetromain",
          "content": "D.  Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.<br><br>This solution is using a single image to contain all the shared libraries, custom classes, and the code for the API's Lambda functions, which makes it harder to manage and update the shared libraries and custom classes. It also increases the size of the image and make it harder to reuse the common code.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 777228,
          "date": "Mon 16 Jan 2023 01:58",
          "username": "zhangyu20000",
          "content": "B: is correct. use Lambda layer. Layer source is docker images on ECR",
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
      "question_text": "<p>A manufacturing company is building an inspection solution for its factory. The company has IP cameras at the end of each assembly line. The company has used Amazon SageMaker to train a machine learning (ML) model to identify common defects from still images.<br><br>The company wants to provide local feedback to factory workers when a defect is detected. The company must be able to provide this feedback even if the factory’s internet connectivity is down. The company has a local Linux server that hosts an API that provides local feedback to the workers.<br><br>How should the company deploy the ML model to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Kinesis video stream from each IP camera to AWS. Use Amazon EC2 instances to take still images of the streams. Upload the images to an Amazon S3 bucket. Deploy a SageMaker endpoint with the ML model. Invoke an AWS Lambda function to call the inference endpoint when new images are uploaded. Configure the Lambda function to call the local API when a defect is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy AWS IoT Greengrass on the local server. Deploy the ML model to the Greengrass server. Create a Greengrass component to take still images from the cameras and run inference. Configure the component to call the local API when a defect is detected.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order an AWS Snowball device. Deploy a SageMaker endpoint the ML model and an Amazon EC2 instance on the Snowball device. Take still images from the cameras. Run inference from the EC2 instance. Configure the instance to call the local API when a defect is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy Amazon Monitron devices on each IP camera. Deploy an Amazon Monitron Gateway on premises. Deploy the ML model to the Amazon Monitron devices. Use Amazon Monitron health state alarms to call the local API from an AWS Lambda function when a defect is detected.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796232,
          "date": "Thu 02 Feb 2023 17:34",
          "username": "bititan",
          "content": "this is taking about detecting defects from an image that is taken from a camera. I would go for running a ML model on IoT greengras pc and transfer it to IoT core, then store it in s3 bucket, which can be called by api function via lambda to send it to users. <br>option D would monitor only sensor data of machines.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 796193,
          "date": "Thu 02 Feb 2023 16:57",
          "username": "schalke04schalke04",
          "content": "Amazon Monitron is a machine-learning based end-to-end condition monitoring system that detects potential failures within equipment. You can use it to implement a predictive maintenance program and reduce lost productivity from unplanned machine downtime. Amazon Monitron includes purpose-built sensors to capture vibration and temperature data, as well as gateways to automatically transfer data to the AWS Cloud. It also comes with an application in two versions. The mobile application handles system setup, analytics, and notiﬁcation when tracking equipment conditions. The web application provides all the same functions as the mobile app except setup. Reliability managers can quickly deploy Amazon Monitron to track the machine health of industrial equipment, such as such as bearings, motors, gearboxes, and pumps, without any development work or specialized training.B is correct.<br>AWS IoT Greengrass enables ML inference locally using models that are created, trained, and optimized in the cloud using Amazon SageMaker, AWS Deep Learning AMI, or AWS Deep Learning Containers, and deployed on the edge devices",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 797416,
          "date": "Fri 03 Feb 2023 22:52",
          "username": "schalke04",
          "content": "B is correct.<br>AWS IoT Greengrass enables ML inference locally using models that are created, trained, and optimized in the cloud using Amazon SageMaker, AWS Deep Learning AMI, or AWS Deep Learning Containers, and deployed on the edge devices",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#158",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must create a business case for migration of a company's on-premises data center to the AWS Cloud. The solutions architect will use a configuration management database (CMDB) export of all the company's servers to create the case.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Use AWS Well-Architected Tool to import the CMDB data to perform an analysis and generate recommendations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Migration Evaluator to perform an analysis. Use the data import template to upload the data from the CMDB export.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement resource matching rules. Use the CMDB export and the AWS Price List Bulk API to query CMDB data against AWS services in bulk.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Discovery Service to import the CMDB data to perform an analysis.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796197,
          "date": "Thu 02 Feb 2023 17:02",
          "username": "schalke04",
          "content": "D<br>https://aws.amazon.com/application-discovery/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#159",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a website that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB is associated with an AWS WAF web ACL.<br><br>The website often encounters attacks in the application layer. The attacks produce sudden and significant increases in traffic on the application server. The access logs show that each attack originates from different IP addresses. A solutions architect needs to implement a solution to mitigate these attacks.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm that monitors server access. Set a threshold based on access by IP address. Configure an alarm action that adds the IP address to the web ACL’s deny list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy AWS Shield Advanced in addition to AWS WAF.  Add the ALB as a protected resource.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm that monitors user IP addresses. Set a threshold based on access by IP address. Configure the alarm to invoke an AWS Lambda function to add a deny rule in the application server’s subnet route table for any IP addresses that activate the alarm.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Inspect access logs to find a pattern of IP addresses that launched the attacks. Use an Amazon Route 53 geolocation routing policy to deny traffic from the countries that host those IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796198,
          "date": "Thu 02 Feb 2023 17:04",
          "username": "schalke04",
          "content": "AWS Shield is a managed distributed denial of service (DDoS) protection service that safeguards applications running on AWS. It provides dynamic detection and automatic inline mitigations that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection. There are two tiers of AWS Shield: Standard and Advanced.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a critical application in which the data tier is deployed in a single AWS Region. The data tier uses an Amazon DynamoDB table and an Amazon Aurora MySQL DB cluster. The current Aurora MySQL engine version supports a global database. The application tier is already deployed in two Regions.<br><br>Company policy states that critical applications must have application tier components and data tier components deployed across two Regions. The RTO and RPO must be no more than a few minutes each. A solutions architect must recommend a solution to make the data tier compliant with company policy.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#160",
          "answers": [
            {
              "choice": "<p>A. Add another Region to the Aurora MySQL DB cluster<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add another Region to each table in the Aurora MySQL DB cluster<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up scheduled cross-Region backups for the DynamoDB table and the Aurora MySQL DB cluster<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the existing DynamoDB table to a global table by adding another Region to its configuration<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Route 53 Application Recovery Controller to automate database backup and recovery to the secondary Region<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796444,
          "date": "Thu 02 Feb 2023 22:08",
          "username": "schalke04",
          "content": "A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 796309,
          "date": "Thu 02 Feb 2023 19:07",
          "username": "bititan",
          "content": "you can create only db's not global tables, hence A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A telecommunications company is running an application on AWS. The company has set up an AWS Direct Connect connection between the company's on-premises data center and AWS. The company deployed the application on Amazon EC2 instances in multiple Availability Zones behind an internal Application Load Balancer (ALB). The company's clients connect from the on-premises network by using HTTPS. The TLS terminates in the ALB.  The company has multiple target groups and uses path-based routing to forward requests based on the URL path.<br><br>The company is planning to deploy an on-premises firewall appliance with an allow list that is based on IP address. A solutions architect must develop a solution to allow traffic flow to AWS from the on-premises network so that the clients can continue to access the application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#161",
          "answers": [
            {
              "choice": "<p>A. Configure the existing ALB to use static IP addresses. Assign IP addresses in multiple Availability Zones to the ALB.  Add the ALB IP addresses to the firewall appliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Network Load Balancer (NLB). Associate the NLB with one static IP addresses in multiple Availability Zones. Create an ALB-type target group for the NLB and add the existing ALAdd the NLB IP addresses to the firewall appliance. Update the clients to connect to the NLB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB). Associate the LNB with one static IP addresses in multiple Availability Zones. Add the existing target groups to the NLB.  Update the clients to connect to the NLB.  Delete the ALB Add the NLB IP addresses to the firewall appliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Gateway Load Balancer (GWLB). Assign static IP addresses to the GWLB in multiple Availability Zones. Create an ALB-type target group for the GWLB and add the existing ALB.  Add the GWLB IP addresses to the firewall appliance. Update the clients to connect to the GWLB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798032,
          "date": "Sat 04 Feb 2023 15:31",
          "username": "masssa",
          "content": "https://aws.amazon.com/jp/premiumsupport/knowledge-center/alb-static-ip/<br>ALB cannnot use static ip, so it must be set NLB in front of ALB. <br>Correct answer is C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797799,
          "date": "Sat 04 Feb 2023 11:02",
          "username": "jojom19980",
          "content": "it uses path-based routing to forward requests based on the URL path",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 796310,
          "date": "Thu 02 Feb 2023 19:09",
          "username": "bititanjojom19980",
          "content": "ALB's cannot use static IP's. NLB's have static IP'sNo should be B cause it uses path-based routing to forward requests based on the URL path",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 797798,
          "date": "Sat 04 Feb 2023 11:01",
          "username": "jojom19980",
          "content": "No should be B cause it uses path-based routing to forward requests based on the URL path",
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
      "question_text": "<p>A company runs an application on a fleet of Amazon EC2 instances that are in private subnets behind an internet-facing Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront distribution. An AWS WAF web ACL that contains various AWS managed rules is associated with the CloudFront distribution.<br><br>The company needs a solution that will prevent internet traffic from directly accessing the ALB. <br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#162",
          "answers": [
            {
              "choice": "<p>A. Create a new web ACL that contains the same rules that the existing web ACL contains. Associate the new web ACL with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the existing web ACL with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a security group rule to the ALB to allow traffic from the AWS managed prefix list for CloudFront only.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a security group rule to the ALB to allow only the various CloudFront IP address ranges.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798038,
          "date": "Sat 04 Feb 2023 15:34",
          "username": "masssa",
          "content": "https://docs.amazonaws.cn/en_us/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html<br>AWS managed prefix list is more recommended.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 797839,
          "date": "Sat 04 Feb 2023 11:47",
          "username": "ExamTopix01",
          "content": "C https://aws.amazon.com/blogs/news/limit-access-to-your-origins-using-the-aws-managed-prefix-list-for-amazon-cloudfront/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797807,
          "date": "Sat 04 Feb 2023 11:11",
          "username": "jojom19980",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/02/amazon-cloudfront-managed-prefix-list/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#163",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application that uses an Amazon ElastiCache for Redis cluster as a caching layer. A recent security audit revealed that the company has configured encryption at rest for ElastiCache. However, the company did not configure ElastiCache to use encryption in transit. Additionally, users can access the cache without authentication.<br><br>A solutions architect must make changes to require user authentication and to ensure that the company is using end-to-end encryption.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#163",
          "answers": [
            {
              "choice": "<p>A. Create an AUTH token. Store the token in AWS System Manager Parameter Store, as an encrypted parameter. Create a new cluster with AUTH, and configure encryption in transit. Update the application to retrieve the AUTH token from Parameter Store when necessary and to use the AUTH token for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AUTH token. Store the token in AWS Secrets Manager. Configure the existing cluster to use the AUTH token, and configure encryption in transit. Update the application to retrieve the AUTH token from Secrets Manager when necessary and to use the AUTH token for authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SSL certificate. Store the certificate in AWS Secrets Manager. Create a new cluster, and configure encryption in transit. Update the application to retrieve the SSL certificate from Secrets Manager when necessary and to use the certificate for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SSL certificate. Store the certificate in AWS Systems Manager Parameter Store, as an encrypted advanced parameter. Update the existing cluster to configure encryption in transit. Update the application to retrieve the SSL certificate from Parameter Store when necessary and to use the certificate for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 799120,
          "date": "Sun 05 Feb 2023 20:38",
          "username": "harleydog",
          "content": "You have to create a new cluster, otherwise the the cluster supports the AUTH token specified and supports connecting without authentication.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797822,
          "date": "Sat 04 Feb 2023 11:23",
          "username": "jojom19980",
          "content": "Previously, you needed to set up authentication for ElastiCache for Redis clusters using Redis user passwords or store the password in AWS Secrets Manager or on a third-party secrets management tool. However, in large organizations that host many applications, passwords can often become out of sync when it comes time to rotate the password. IAM authentication provides a streamlined security posture by allowing access management from a centralized service. With IAM authentication, ElastiCache users can use their IAM identities when connecting to their Redis clusters",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 796326,
          "date": "Thu 02 Feb 2023 19:28",
          "username": "bititan",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/in-transit-encryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#164",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a compute workload by using Amazon EC2 Spot Instances that are in an Auto Scaling group. The launch template uses two placement groups and a single instance type.<br><br>Recently, a monitoring system reported Auto Scaling instance launch failures that correlated with longer wait times for system users. The company needs to improve the overall reliability of the workload.<br><br>Which solution will meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#164",
          "answers": [
            {
              "choice": "<p>A. Replace the launch template with a launch configuration to use an Auto Scaling group that uses attribute-based instance type selection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new launch template version that uses attribute-based instance type selection. Configure the Auto Scaling group to use the new launch template version.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the launch template Auto Scaling group to increase the number of placement groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the launch template to use a larger instance type.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796364,
          "date": "Thu 02 Feb 2023 20:24",
          "username": "bititan",
          "content": "launch config is replaced by launch template hence is not advisible, option A rulled out. C is wrong because launch template cannot be updated. D is also wrong for the same reason",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#165",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a document processing workload to AWS. The company has updated many applications to natively use the Amazon S3 API to store, retrieve, and modify documents that a processing server generates at a rate of approximately 5 documents every second. After the document processing is finished, customers can download the documents directly from Amazon S3.<br><br>During the migration, the company discovered that it could not immediately update the processing server that generates many documents to support the S3 API. The server runs on Linux and requires fast local access to the files that the server generates and modifies. When the server finishes processing, the files must be available to the public for download within 30 minutes.<br><br>Which solution will meet these requirements with the LEAST amount of effort?<br><br></p>",
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
              "choice": "<p>A. Migrate the application to an AWS Lambda function. Use the AWS SDK for Java to generate, modify, and access the files that the company stores directly in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon S3 File Gateway and configure a file share that is linked to the document store. Mount the file share on an Amazon EC2 instance by using NFS. When changes occur in Amazon S3, initiate a RefreshCache API call to update the S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon FSx for Lustre with an import and export policy. Link the new file system to an S3 bucket. Install the Lustre client and mount the document store to an Amazon EC2 instance by using NFS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS DataSync to connect to an Amazon EC2 instance. Configure a task to synchronize the generated files to and from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796336,
          "date": "Thu 02 Feb 2023 19:43",
          "username": "schalke04",
          "content": "C: <br>Amazon FSx for Lustre is a fully managed service that provides cost-effective, high-performance, scalable storage for compute workloads. Powered by Lustre, the world’s most popular high-performance file system, FSx for Lustre offers shared storage with sub-ms latencies, up to terabytes per second of throughput, and millions of IOPS. FSx for Lustre file systems can also be linked to Amazon Simple Storage Service (S3) buckets, allowing you to access and process data concurrently from both a high-performance file system and from the S3 API.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#166",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A delivery company is running a serverless solution in the AWS Cloud. The solution manages user data, delivery information, and past purchase details. The solution consists of several microservices. The central user service stores sensitive data in an Amazon DynamoDB table. Several of the other microservices store a copy of parts of the sensitive data in different storage services.<br><br>The company needs the ability to delete user information upon request. As soon as the central user service deletes a user, every other microservice must also delete its copy of the data immediately.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#166",
          "answers": [
            {
              "choice": "<p>A. Activate DynamoDB Streams on the DynamoDB table. Create an AWS Lambda trigger for the DynamoDB stream that will post events about user deletion in an Amazon Simple Queue Service (Amazon SQS) queue. Configure each microservice to poll the queue and delete the user from the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up DynamoDB event notifications on the DynamoDB table. Create an Amazon Simple Notification Service (Amazon SNS) topic as a target for the DynamoDB event notification. Configure each microservice to subscribe to the SNS topic and to delete the user from the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the central user service to post an event on a custom Amazon EventBridge event bus when the company deletes a user. Create an EventBridge rule for each microservice to match the user deletion event pattern and invoke logic in the microservice to delete the user from the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the central user service to post a message on an Amazon Simple Queue Service (Amazon SQS) queue when the company deletes a user. Configure each microservice to create an event filter on the SQS queue and to delete the user from the DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 799122,
          "date": "Sun 05 Feb 2023 20:45",
          "username": "harleydog",
          "content": "We can't use a queue, the message will only get processed once. I don't think we can generate event notifications on DynamoDB table updates.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#167",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web application in a VPC.  The web application runs on a group of Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is using AWS WAF. <br><br>An external customer needs to connect to the web application. The company must provide IP addresses to all external customers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Replace the ALB with a Network Load Balancer (NLB). Assign an Elastic IP address to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Allocate an Elastic IP address. Assign the Elastic IP address to the ALProvide the Elastic IP address to the customer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Global Accelerator standard accelerator. Specify the ALB as the accelerator's endpoint. Provide the accelerator's IP addresses to the customer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon CloudFront distribution. Set the ALB as the origin. Ping the distribution's DNS name to determine the distribution's public IP address. Provide the IP address to the customer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 798332,
          "date": "Sat 04 Feb 2023 21:04",
          "username": "jojom19980",
          "content": "......",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 798077,
          "date": "Sat 04 Feb 2023 15:59",
          "username": "masssa",
          "content": "NLB cannot be used when WAF is used",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 798073,
          "date": "Sat 04 Feb 2023 15:55",
          "username": "masssa",
          "content": "static IP can made below method.<br>・NLB (replace NLB from ALB)<br>・NLB + ALB<br>・global accelarator + ALB<br>・original load balancer (ex. made by EC2 + nginx)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797861,
          "date": "Sat 04 Feb 2023 12:14",
          "username": "ExamTopix01ExamTopix01",
          "content": "A<br>https://aws.amazon.com/jp/premiumsupport/knowledge-center/alb-static-ip/Sorry C<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.alb-accelerator.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 797864,
          "date": "Sat 04 Feb 2023 12:18",
          "username": "ExamTopix01",
          "content": "Sorry C<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.alb-accelerator.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796450,
          "date": "Thu 02 Feb 2023 22:19",
          "username": "schalke04",
          "content": "This solution meets the requirement with the least operational overhead, as it only requires the allocation of an Elastic IP address, assignment to the ALB, and providing the address to the customer. The other options involve configuring additional services, which can increase operational overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796376,
          "date": "Thu 02 Feb 2023 20:36",
          "username": "bititan",
          "content": "this option has the least admin effort. A has more admin effort, B is not possible, D will not give static IP address",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 796136,
          "date": "Thu 02 Feb 2023 15:47",
          "username": "schalke04",
          "content": "B will works",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#168",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a few AWS accounts for development and wants to move its production application to AWS. The company needs to enforce Amazon Elastic Block Store (Amazon EBS) encryption at rest current production accounts and future production accounts only. The company needs a solution that includes built-in blueprints and guardrails.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#168",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation StackSets to deploy AWS Config rules on production accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Control Tower landing zone in an existing developer account. Create OUs for accounts. Add production and development accounts to production and development OUs, respectively.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS Control Tower landing zone in the company’s management account. Add production and development accounts to production and development OUs. respectively.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invite existing accounts to join the organization in AWS Organizations. Create SCPs to ensure compliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a guardrail from the management account to detect EBS encryption.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a guardrail for the production OU to detect EBS encryption.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 797869,
          "date": "Sat 04 Feb 2023 12:24",
          "username": "ExamTopix01",
          "content": "CDF<br>https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#169",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a critical stateful web application on two Linux Amazon EC2 instances behind an Application Load Balancer (ALB) with an Amazon RDS for MySQL database. The company hosts the DNS records for the application in Amazon Route 53. A solutions architect must recommend a solution to improve the resiliency of the application.<br><br>The solution must meet the following objectives:<br><br>• Application tier: RPO of 2 minutes. RTO of 30 minutes<br>• Database tier: RPO of 5 minutes. RTO of 30 minutes<br><br>The company does not want to make significant changes to the existing application architecture. The company must ensure optimal latency after a failover.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#169",
          "answers": [
            {
              "choice": "<p>A. Configure the EC2 instances to use AWS Elastic Disaster Recovery. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Configure RDS automated backups. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a backup plan in AWS Backup for the EC2 instances and RDS DB instance. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Configure an Amazon CloudFront distribution in front of the ALB.  Update DNS records to point to CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 796380,
          "date": "Thu 02 Feb 2023 20:44",
          "username": "bititan",
          "content": "its understood that others cannot meet the RTO and RPO requirements, because restore from back can take time based on the size of the data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 796135,
          "date": "Thu 02 Feb 2023 15:44",
          "username": "schalke04",
          "content": "DRS should fulfill the requirements",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    }
  ]
}