// 10. Security and Identity
var SecurityAndIdentity = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 49901,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are in charge of maintaining an Oracle database in RDS. The development team tells you that the database instance needs to communicate with a new S3 bucket. For example, it should be able to save the backup files to&nbsp;S3, and at the same time, it can fetch Oracle Data Pump files from the same bucket when required. To connect the database instance with the particular S3 bucket successfully, which options are the prerequisites? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A, E</strong></p>\r\n\r\n<p>About how to transfer files between RDS Oracle and S3, please refer to the reference in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-s3-integration.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-s3-integration.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Because the IAM role is required to allow the DB instance to interact with the S3 bucket.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because parameter group is not a necessary condition for this scenario.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because a new subnet group is not required. The default subnet group also works.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because the S3 bucket does not need public access. The RDS and S3 can communicate with each other under the same VPC.</li>\r\n\t<li><strong>Option​ ​E ​is​ CORRECT:</strong>​ Because an option group that includes the S3_INTEGRATION option should be attached with the DB instance. Check the below screenshot on how to add the S3_INTEGRATION option to the option group:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/07/ckeditor_1.png\" style=\"height:664px; width:1000px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39769,
            "question_id": 49901,
            "answers": [
              {
                "choice": "<p>Configure an IAM role with a policy that allows to read and write the S3 bucket objects. Associate the role with the RDS instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a parameter group that includes the parameter of the IAM S3 service role name. Attach the parameter group with the DB instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a new DB subnet group. Link the DB instance with the subnet group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For the new S3 bucket, ensure the Block Public Access settings are turned off. Enable the public access for the S3 bucket or add the S3 endpoint for the bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an option group that includes the S3_INTEGRATION option. Associate the DB instance with the option group.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 49903,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company has a new S3 bucket that stores very sensitive files. These objects are supposed to be used only by IAM admin user. Other IAM users or roles should not have access. Users in other AWS accounts cannot assume any role in reading the S3 objects either. You plan to use the S3 bucket policy to apply the security rules. Which option is the most secure one?&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>Explicit deny should be considered as it takes the highest priority even if the action is explicitly allowed somewhere else. Options A and C are eliminated. For option D, it is not realistic to list all users and roles to deny the action. The only option left is option B. About how to use NotPrincipal, refer to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect </strong>because other users can access the bucket as well if they have an Allow in their IAM policies. Explicit deny should be used.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT​ </strong>With the policy, only the user Admin and root can access the bucket objects. Other IAM entities are denied.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because it is unsuitable to use Allow with NotPrincipal. Any IAM users or roles which are not in the NotPrincipal list can access the objects<strong>.</strong></li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect&nbsp;</strong>because you have to list all IAM users and roles in the Principal list, which is not appropriate.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 52773,
            "question_id": 49903,
            "answers": [
              {
                "question_id": "49903",
                "choice": "<p>{ &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&quot;Statement&quot;: [&nbsp; {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Principal&quot;: {&quot;AWS&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/Admin&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:root&quot; ]&nbsp; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;s3:*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:s3:::BUCKETNAME&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:s3:::BUCKETNAME/*&quot;&nbsp;]</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp; ]</p>\r\n\r\n<p>}</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49903",
                "choice": "<p>{ &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&quot;Statement&quot;: [{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Effect&quot;: &quot;Deny&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;NotPrincipal&quot;: {&quot;AWS&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/Admin&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:root&quot; ]&nbsp; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;s3:*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;arn:aws:s3:::BUCKETNAME&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;arn:aws:s3:::BUCKETNAME/*&quot; ]</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp; ]</p>\r\n\r\n<p>}</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "49903",
                "choice": "<p>{ &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&quot;Statement&quot;: [{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;NotPrincipal&quot;: {&quot;AWS&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/User1&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/User2&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&hellip;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:user/UserX&quot; ]&nbsp; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;s3:*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;arn:aws:s3:::BUCKETNAME&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;arn:aws:s3:::BUCKETNAME/*&quot;&nbsp;]</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp; ]</p>\r\n\r\n<p>}</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49903",
                "choice": "<p>{ &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&quot;Statement&quot;: [{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Effect&quot;: &quot;Deny&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;Principal&quot;: {&quot;AWS&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/User1&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/User2&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&hellip;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;arn:aws:iam::444455556666:user/UserX&quot; ]&nbsp; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;s3:*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:s3:::BUCKETNAME&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:s3:::BUCKETNAME/*&quot; ]</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp; ]</p>\r\n\r\n<p>}</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 49904,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>As an AWS Solutions Architect, you need to configure an identity service in AWS based on SAML. Since you already have a SAML identity provider outside of AWS, you plan to use the same IdP to manage user identities. To create the SAML identity provider in IAM, the below steps may be required.</p>\r\n\r\n<p>1.&nbsp;Configure the SAML IdP with relying party trust.</p>\r\n\r\n<p>2.&nbsp;Use AWS CLI assume-role-with-web-identity to return a set of temporary security credentials for authentication.</p>\r\n\r\n<p>3.&nbsp;Get the SAML metadata document from the IdP.</p>\r\n\r\n<p>4.&nbsp;Create a SAML IAM identity provider from AWS console or CLI.</p>\r\n\r\n<p>5.&nbsp;In IdP, configure SAML Assertions for the authentication response.</p>\r\n\r\n<p>Which one describes the correct sequences?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>Please check <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html</a> on how to create IAM SAML identity providers.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because assume-role-with-web-identity is not used for SAML identity provider. Step 2 should not be included.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Same reason as Option A.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Before creating the identity provider, you need to get the metadata document from IdP:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_123.png\" style=\"height:302px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ After creating the identity provider in step 4, you need to configure the IdP side as steps 1 and 5 which add relying party trust between the IdP and AWS.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39772,
            "question_id": 49904,
            "answers": [
              {
                "choice": "<p>4 -&gt; 1 -&gt; 5 -&gt; 2</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>3 -&gt; 1 -&gt; 4 -&gt; 2</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>1 -&gt; 4 -&gt; 3 -&gt; 5</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>3 -&gt; 4 -&gt; 1 -&gt; 5<br />\r\n<br />\r\n&nbsp;</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49905,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team is developing an Android app. You need to use an Amazon Cognito Identity Pool to create unique identities for the app users and federate them with the identity provider from Google. You also want to allow unauthenticated guest access for the application. Guests can get temporary tokens for limited access. How would you implement the guest access using Amazon Cognito?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>About how to use Identity Pool for federated identities in AWS Cognito, please refer to</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html\" target=\"_blank\">https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html</a>. The authentication flow can be found in <a href=\"https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/authentication-flow.html\">https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/authentication-flow.html</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Because the unauthenticated access feature can be enabled in Cognito Identity Pool as below:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_234.png\" style=\"height:333px; width:920px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because the feature of unauthenticated identities is managed in Cognito Identity Pool instead of User Pool.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​</strong> Because the GetCredentialsForIdentity API does not have a request type of Guest.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because the GetOpenIdToken API does not provide the temporary tokens. Users can request a new temporary identity ID via the GetId API.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39773,
            "question_id": 49905,
            "answers": [
              {
                "choice": "<p>Enable the unauthenticated access in Cognito Identity Pool. Guest users can request an identity ID via the GetId API.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Activate the unauthenticated access feature in Cognito User Pool. Link the User Pool in Cognito Identity Pool.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Users can get guest credentials via the GetCredentialsForIdentity API with a request type as Guest.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Guest users can request temporary tokens by using the GetOpenIdToken API.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 49906,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You create an EBS snapshot for an application in non-production AWS account A. The snapshot is encrypted by a customer-managed key (CMK-A). To deploy the same application in the production AWS account B, you need to create an AMI using the snapshot and launch an EC2 instance. The IAM admin user in account B is allowed to use CMK-A. However, the production EC2 instance has to use its own customer-managed key (CMK-B) to encrypt the EBS volume. Which solution is the best suited?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>When sharing an Amazon EBS snapshot between accounts, a new CMK has to be used.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because encrypted snapshots cannot be copied to non-encrypted ones.</li>\r\n\t<li><strong>Option​ ​B&nbsp;​is​ ​incorrect:​</strong> Because&nbsp;you cannot just create the snapshot without sharing the AMI with Account &quot;B&quot;.</li>\r\n\t<li><strong>Option​ ​C&nbsp;​is​ CORRECT</strong>:​ Because when creating&nbsp;snapshots, the new snapshot can be encrypted with a new CMK.&nbsp;</li>\r\n</ul>\r\n\r\n<p>The steps to create a proper encrypted EC2 AMI in account B are:</p>\r\n\r\n<p>1. Share the EBS snapshot with account B.</p>\r\n\r\n<p>2. Copy the EBS snapshot from A to B (since it is shared and we have access to CMK A) using CMK B.</p>\r\n\r\n<p>3. Create EC2 AMI from the copied EBS Snapshot.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because you need to&nbsp;share the snapshot between Account &quot;A&quot; and Account &quot;B&quot;. Without sharing, you cannot create the AMI&nbsp;in Account &quot;B&quot;.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 92966,
            "question_id": 49906,
            "answers": [
              {
                "question_id": "49906",
                "choice": "<p>Copy the snapshot to account B&nbsp;and do not encrypt it. Share the new snapshot to account B.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49906",
                "choice": "<p>Create an AMI using the encrypted snapshot. Launch an EC2 instance using the AMI and encrypt the EBS volume with CMK-B.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49906",
                "choice": "<p>Share the snapshot with account B and encrypt&nbsp;it with CMK-B. Create an AMI using the new snapshot and launch an EC2 instance.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "49906",
                "choice": "<p>Create an AMI&nbsp;in account B and change the encryption key to CMK-B. Launch an EC2 instance using the AMI.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 49907,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You use AWS Cognito User Pool to configure a user directory for an application. You want to separate different users as readers, contributors, and editors of the app. For example, the readers can only read contents from AWS S3 buckets. Contributors can put contents into Amazon S3 buckets, and editors have the permissions to publish contents through an API in Amazon API Gateway. Which method is the best to achieve this requirement in AWS Cognito?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>In Amazon Cognito User Pool, you can configure users in groups to manage the permissions better. Each group can be linked with an IAM role ARN. The reference can be found in <a href=\"https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/cognito-user-pools-user-groups.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/cognito-user-pools-user-groups.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because users should be added into groups in the Cognito User Pool instead of IAM.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because users in Cognito User Pool cannot be configured directly with an IAM role.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Check the below example:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_345.png\" style=\"height:446px; width:800px\" /></p>\r\n\r\n<p>Group1 is linked with an IAM role, and User1 is added into the group.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Similar to Option B, it is inappropriate to attach an IAM policy to each user directly.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39775,
            "question_id": 49907,
            "answers": [
              {
                "choice": "<p>In IAM, add different groups and assign suitable IAM policies. In Amazon Cognito User Pool, assign users to the IAM groups.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure different IAM roles in IAM for readers, contributors and editors. In Amazon Cognito User Pool, configure each user with an IAM role.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In Amazon Cognito User Pool, create groups and assign IAM roles to them. Add users to the groups to assign the required permissions.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Directly attach an IAM policy to each user in Amazon Cognito User Pool. Make sure each user has an appropriate IAM policy according to the user role.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 49908,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team creates a Customer Managed Key (CMK) in KMS in an AWS account (111122223333). The key is supposed to be used by another account (444455556666) for encryption and decryption operations. At the moment, it is known that only IAM user Bob and IAM role Admin in the account (444455556666) need access.&nbsp;Which configurations are required together to achieve this requirement? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B and&nbsp;D</strong></p>\n\n<ul>\n\t<li><strong>Option​ ​A ​is​ incorrect</strong>:​ Because this key policy gives the external account (or users and roles in the external account) permission and violates the &#39;principle of least privilege.&#39;</li>\n\t<li><strong>Option​ ​B ​is​ ​CORRECT</strong>:​ Because this follows the &#39;principle of least privilege&#39; by giving permission only to &quot;Admin&quot; and &quot;Bob&quot; as per the requirements stated.</li>\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because only &quot;arn:aws:iam::444455556666:root&quot; is not required.</li>\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ In account 444455556666, IAM policies can be used to configure the permissions to use the key in another account. This option will work together with Option B&nbsp;to assign permissions.</li>\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong>:​ Because the field should be &quot;Resource&quot; instead of &quot;Principal&quot; in IAM policies as it controls which resources to be allowed for IAM entities.</li>\n</ul>\n\n<p>Check <a href=\"https://docs.aws.amazon.com/en_pv/kms/latest/developerguide/key-policy-modifying-external-accounts.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/kms/latest/developerguide/key-policy-modifying-external-accounts.html</a> on how to allow users or roles in other accounts to use a CMK.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 119895,
            "question_id": 49908,
            "answers": [
              {
                "question_id": "49908",
                "choice": "<div style=\"background:#eeeeee; border:1px solid #cccccc; padding:5px 10px\">Edit the Principal of the key policy as below:<br />\n&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;AWS&quot;: [<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:root&quot;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />\n&nbsp;&nbsp;&nbsp;&nbsp;}</div>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49908",
                "choice": "<div style=\"background:#eeeeee; border:1px solid #cccccc; padding:5px 10px\">Edit the Principal of the key policy as below:<br />\n&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;AWS&quot;: [<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:role/Admin&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:user/Bob&quot;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />\n&nbsp;&nbsp;&nbsp;&nbsp;}</div>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "49908",
                "choice": "<div style=\"background:#eeeeee; border:1px solid #cccccc; padding:5px 10px\">Edit the Principal of the key policy as below:<br />\n&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;AWS&quot;: [<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:root&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:role/Admin&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:iam::444455556666:user/Bob&quot;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />\n&nbsp;&nbsp;&nbsp;&nbsp;}</div>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49908",
                "choice": "<p>In account 444455556666, allow the KMS encryption and decryption actions as below:</p>\n\n<p>&quot;Resource&quot;: &quot;arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab&quot;</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "49908",
                "choice": "<p>In account 444455556666, allow the KMS encryption and decryption actions as below:</p>\n\n<p>&quot;Principal&quot;: &quot;arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab&quot;</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 49909,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work in a DevOps team, and your team maintains several applications deployed in AWS. At the moment, there are dozens of server certificates stored in IAM. These certificates are used for different purposes and have different expiry date. You have to renew the certificates before they expire. Otherwise, the services will be impacted. You want to use another approach to renew and manage these certificates. Which method is the best?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>Check <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html</a> on how to manage server certificates in IAM and ACM.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrec</strong>t:​ Because for the imported server certificates in IAM, there is no IAM console to manage them. This is one major disadvantage of managing certificates in IAM.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:</strong>​ Because ACM is a preferred solution. Certificates requested by ACM are free and automatically renew.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because you cannot migrate the certificates from IAM to ACM directly. There is no such console to do that. For ACM, you can import third-party certificates to the service.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:</strong>​ Because ACM cannot automatically renew imported third-party certificates. You are responsible for monitoring the expiration date.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Please check the reference in</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39777,
            "question_id": 49909,
            "answers": [
              {
                "choice": "<p>In the IAM console, add a new strategy for server certificates to renew one month before the expiry date automatically.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Provision and manage the server certificates in AWS Certificate Manager (ACM). The certificates requested from ACM are automatically renewed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In IAM console, migrate the certificates from IAM to ACM then ACM can automatically renew the certificates one month before the expiry date.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import all third-party certificates into ACM. ACM is responsible for the automatic renew for both third-party certificates and ACM provided certificates.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 49910,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You start to use AWS Certificate Manager to manage certificates. And some existing certificates in IAM will not be used or will be replaced by the new ones in ACM. You just create a new public server certificate for a domain name called www.example.com. However, the status of the certificate is &ldquo;Pending validation&rdquo;. Which option can be used by ACM as a validation approach? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B, D</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Refer to the below approaches on how to validate pending certificates in ACM:</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/en_pv/acm/latest/userguide/gs-acm-validate-dns.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/acm/latest/userguide/gs-acm-validate-dns.html</a></p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/en_pv/acm/latest/userguide/gs-acm-validate-email.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/acm/latest/userguide/gs-acm-validate-email.html</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:​</strong> Because ACM does not send SMS to validate if a user owns the domain name or not<strong>.</strong></li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:​ </strong>User can choose either DNS validation or Email validation as below<strong>:</strong></li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_456.png\" style=\"height:315px; width:900px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because domain names registered through Route53 still need to be validated.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT:​ </strong>The below email will be received as an email validation:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_567.png\" style=\"height:397px; width:850px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect:​ </strong>Because there is no Pending Validation icon. You have to use either DNS validation or Email validation.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39778,
            "question_id": 49910,
            "answers": [
              {
                "choice": "<p>ACM sends an SMS to the registered phone number of the domain name. A user can validate it by clicking the validation URL.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use DNS to validate the domain ownership. You can insert ACM generated CNAME records into your DNS database.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>If the domain name is registered by Route53, no validation action is required. Just wait for a while, and it will be automatically validated.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>ACM sends emails to the contact addresses of the domain name. You can validate the domain owner in the email.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>If the domain name is registered by Route53, a Pending Validation icon is generated in the Registered Domains. Just click the Pending Validation icon, and ACM will modify the certificate status to Issued.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      }
    ]
  }