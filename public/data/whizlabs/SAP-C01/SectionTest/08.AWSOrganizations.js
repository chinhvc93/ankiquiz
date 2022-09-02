// 8. AWS Organizations
var AWSOrganizations = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 49699,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>As an AWS Solutions Architect, you are in charge of configuring a new AWS Organization among several AWS accounts. You already created an Organization and sent invitations for other accounts to join. Most AWS accounts can join the Organization successfully. However, for one AWS account, it did not receive the invitation email&nbsp;so that it did not know how to join. How should you fix the problem?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>Refer to the below screenshot on how to manage invitations:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_2.1.png\" style=\"height:284px; width:1000px\" /></p>\r\n\r\n<p>One thing to note is that for open invitations, users can only perform the Cancel operation.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>&nbsp;because the user cannot resend the same invitation if it is still in the Open state.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT</strong>&nbsp;because only after the first invitation is canceled, the user can create a new one to the same email id. If there is already one open invitation, the user cannot create another one to the same account. The error can be found below:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_2.2.png\" style=\"height:366px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because this is not required. Option B is more appropriate.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>&nbsp;because it has to wait for 15 days until it expires, which is unnecessary.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39568,
            "question_id": 49699,
            "answers": [
              {
                "choice": "<p>In the root AWS account, select the pending invitation and choose &ldquo;resend email&rdquo;.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the root AWS account of the Organization Master Account, cancel the invitation and then create a new invitation to this AWS account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Contact AWS enterprise support to help you resend the invitation email to this AWS account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the root AWS account of the Organization, wait until the invitation expires and then create a new invitation to the AWS account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49700,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are an AWS Solutions Architect in a financial company. The company recently started working on migrating legacy applications to AWS. You planned to use a new AWS Organization to manage all AWS accounts so that you can easily configure accounts, assign organizational units, configure security policies, etc. Which methods are valid for you to add accounts to the Organization? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A, D</strong></p>\r\n\r\n<p>There are two methods to add accounts to the AWS Organization either by creating new accounts within an Organization or creating invitations. Please refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html</a></li>\r\n</ul>\r\n\r\n<p>and</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html</a>.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>&nbsp;because the user can create a new account that is part of the Organization.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect&nbsp;</strong>because other accounts can not create requests to join the Organization. There is no CLI request-join-to-organization as well.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because, in the AWS console, users cannot create requests to join an Organization. However, they can accept invitations.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT&nbsp;</strong>because this can be done through the AWS console, CLI, or API.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong>&nbsp;because the cross-account IAM role is not required in this scenario. Also, there is no API call to add to an organization for other accounts.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39569,
            "question_id": 49700,
            "answers": [
              {
                "choice": "<p>In the AWS Organization console, create accounts within your organization.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS CLI request-join-to-organization for other AWS accounts to join the Organization. After the Organization owner accepts the requests, the accounts will join successfully.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For other accounts, use root accounts to login to the AWS Organization console, create requests to the Organization owner to join the organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the root account of the Organization, create invitations to other accounts and wait for them to accept the invitations.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>For other accounts, create a cross-account IAM role that allows the operation of add-account-to-organization for the resource of the AWS Organization ARN. Use an IAM user to assume the IAM role and send an API call to add the account to the Organization.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49701,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team&rsquo;s AWS account is a root account of an AWS Organization, and you are in charge of configuring Organizational Units within the Organization. At the moment, each Organizational Unit is supposed to be connected with a team. However, sometimes because of project changes or team restructuring, Organizational Units need to be adjusted as well. Which operation is valid for Organizational Units?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>An Organizational Unit can have AWS accounts and other Organizational Units as members. This makes the whole structure similar to a tree. The accounts are organized in a hierarchical, tree-like structure. Check</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html</a></li>\r\n</ul>\r\n\r\n<p>on how to manage OUs.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because an OU can have only one parent. This is explained in\r\n\r\n\t<ul style=\"list-style-type:circle\">\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html</a>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Similar to Option A, an AWS account can be a member of only one OU.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Before deleting an OU, you must first move all accounts out of the OU and any child OUs, and the child OUs need to be deleted as well.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ This is the right answer as none of the others are valid.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39570,
            "question_id": 49701,
            "answers": [
              {
                "choice": "<p>Configure an OU to be the child of two other OUs which are parents.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>As two departments use an AWS account, move the account to be a member of two OUs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An OU and its members are no longer needed due to business needs, you can delete the OU directly, and the members will be automatically removed from the AWS Organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>None of the above is valid.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49702,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have signed in to an AWS Organization&#39;s master account using an admin IAM user. You need to move accounts to this Organization from one OU (Organizational Unit) to another or back to the root from an OU. However, the operation was disallowed due to a lack of permissions. So you started looking at the IAM policies attached to this user. What are the minimum permissions&nbsp;you need to move accounts among OUs? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B, C</strong></p>\r\n\r\n<p>Users can move accounts between the Root and OUs in AWS Organization according to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html</a>.</li>\r\n</ul>\r\n\r\n<p>However, permissions are needed to do that.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect </strong>because organizations:DescribeAccount is used to retrieve Organization details about the account, which is not required.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT&nbsp;</strong>because organizations:DescribeOrganization is required if the move operation is done from console.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>&nbsp;because organizations:MoveAccount permits users to move accounts in an Organization.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect&nbsp;</strong>because attaching SCP is not needed in this scenario.</li>\r\n\t<li><strong>Option​ E ​is​ ​incorrect</strong>:&nbsp;because this will allow all actions for Organizations, which will not meet the least privilege.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39571,
            "question_id": 49702,
            "answers": [
              {
                "choice": "<p>organizations:DescribeAccount</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>organizations:DescribeOrganization</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>organizations:MoveAccount</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>organizations:AttachPolicy</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>organizations:*</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49703,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have maintained an AWS Organization and the Organization has below OUs (Organizational Units) configured:</p>\r\n\r\n<p>Root - Dev_Department (account 1, account 2)</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; - QA_Department (account 3, account 4)&nbsp;</p>\r\n\r\n<p>The OUs Dev_Department and QA_Department are the children of the Root, and each has two accounts as members. Due to a recent organizational change, QA_Department needs to be a child of Dev_Department. And account 3 and account 4 should still be the members of QA_Department.</p>\r\n\r\n<p>How should you achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>For OUs, there are limited operations that users can do. Please check</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html</a>.</li>\r\n</ul>\r\n\r\n<p>One thing to note is that the user cannot move an OU to another place from the console or CLI command. So the user has to create a new OU and move accounts to it.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>: because the user cannot drag and drop an OU to another place.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>&nbsp;because it is unnecessary to move accounts out of the Organization. Otherwise, you have to re-invite these accounts.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>&nbsp;because users can move accounts from an OU to another. After that, empty OU can be deleted.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>&nbsp;because there is no such CLI command to move an Organizational Unit.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39572,
            "question_id": 49703,
            "answers": [
              {
                "choice": "<p>In the tree view of AWS Organization console, drag and drop QA_Department and its members to be a child of Dev_Department.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Move accounts 3 and 4 out of the AWS Organization, move QA_Department to be a child of Dev_Department. Add accounts 3 and 4 back to QA_Department.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new OU under Dev_Department named QualityAssurance_Department. Move accounts 3 &amp; 4 to the new OU. Delete the original empty OU QA_Department.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Move accounts 3 and 4 under the Root of the AWS Organization. Use CLI move-organizational-unit to move QA_Department to be a child of Dev_Department. Then add accounts 3 and 4 to QA_Department.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49704,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>In an AWS Organization, the Root is attached with a default SCP that allows all actions on all resources. And other OUs or AWS accounts are attached with SCPs that contain Deny lists. For example, an SCP that denies cloudtrail:StopLogging is attached to an OU. However, you think that the Deny lists can be improved to contain more services such as those that are not used. How would you find out the AWS services&nbsp;that are allowed by the SCP but are never used?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\n\n<ul>\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>&nbsp;because the AWS Organization console does not contain the last access data.</li>\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>&nbsp;because&nbsp;the IAM credential report provides IAM user information. There is no access data for AWS Organization.</li>\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because AWS Config Resources do not show resource information related to the Organization. The user cannot identify which services are not used in AWS Config.</li>\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>&nbsp;because the service report in Organization Activity to identify the AWS services&nbsp;to be included in the Deny lists.</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_7.png\" style=\"height:398px; width:1000px\" /><br />\n<br />\n<strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84486,
            "question_id": 49704,
            "answers": [
              {
                "question_id": "49704",
                "choice": "<p>In the AWS Organization console, identify allowed services that are never used by AWS accounts.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49704",
                "choice": "<p>In the IAM credential report of AWS accounts, examine those services that are not required to be allowed by SCPs.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49704",
                "choice": "<p>In AWS Config Resources, list the AWS services that are not used by IAM users.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49704",
                "choice": "<p>In the IAM console, click the&nbsp;Organization activity&nbsp;and check the last accessed data to identify services that are never used.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49705,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your AWS Organization has below hierarchy.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_8.0.png\" style=\"height:111px; width:152px\" /></p>\r\n\r\n<p>And the OUs are attached with below SCPs:</p>\r\n\r\n<p>Root: FullAWSAccess.</p>\r\n\r\n<p>Admin_OU: Deny S3 upload action if without encryption.</p>\r\n\r\n<p>DEV1_OU: Deny all S3 actions.</p>\r\n\r\n<p>DEV2_OU: Allow all S3 actions.</p>\r\n\r\n<p>An AWS Account is attached under DEV2_OU, and it has an IAM user Bob who is given full permissions to S3 resources. What will happen when the user Bob is trying to upload objects to an S3 bucket without encryption?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>About how SCPs work, please refer to the documentation in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html</a>.</li>\r\n</ul>\r\n\r\n<p>One rule is that any action that has an explicit Deny always takes priority.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT&nbsp;</strong>because DEV2_OU inherits the SCP in Admin_OU which contains a Deny policy. The policy overrides any Allow that other SCPs might grant.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>: because other SCPs that the OU has inherited should also be considered.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>&nbsp;because the SCP in DEV1_OU does not need to be considered as it is not a parent node for user Bob.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:&nbsp;because the Allow policy does not override a Deny policy if it exists.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39574,
            "question_id": 49705,
            "answers": [
              {
                "choice": "<p>The action will be denied as the SCP in Admin_OU denies the operation.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The action will be allowed as the SCP in the root has full AWS access, and Bob is attached with full S3 permissions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The action will be denied as SCP in DEV1_OU has an S3 Deny policy, which takes priority.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The action will be allowed as DEV2_OU is attached with an S3 Allow SCP policy, which takes priority.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49706,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are in charge of configuring an AWS Organization as below hierarchy.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2020/10/13/ckeditor_52244.png\" style=\"height:250px; width:202px\" /></p>\r\n\r\n<p>Accounts in Security_OU are from the security team. The Project_OU includes DEV_OU and QA_OU which belong to the development department and QA department respectively. The root is attached with a default FullAWSAccess policy. For future security requirements, all AWS users in both the development and QA department are not allowed to perform certain actions such as the deletion of IAM roles. How would you achieve the requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>OUs in AWS Organization inherit the SCPs from the parent OU.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect&nbsp;</strong>because it is improper to attach the Deny SCP to Root as it affects all other nodes including Security_OU.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT</strong>: because the Deny SCP only affects all OUs under Project_OU. Other OUs such as Security_OU are not affected.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>&nbsp;because Project_OU and Security_OU do not need to attach full access SCP since they can inherit from the Root.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:&nbsp;because DEV_OU and QA_OU are not required to attach the Deny SCP separately since Project_OU as a parent can effectively do&nbsp;that.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84618,
            "question_id": 49706,
            "answers": [
              {
                "question_id": "49706",
                "choice": "<p>Create an SCP that denies required actions and attach it to Root. Attach another SCP that contains an Allow list in Project_OU.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "49706",
                "choice": "<p>In Project_OU, attach an SCP that contains a Deny list to restrict the deletion of IAM roles.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "49706",
                "choice": "<p>Make sure that Root, Project_OU, and Security_OU are attached with a full access SCP. Attach another SCP that contains the Deny list to DEV1_OU, DEV2_OU, and QA1_OU.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "49706",
                "choice": "<p>Create an SCP that denies the required actions. Attach it to Project_OU, DEV_OU, and QA_OU.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49707,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are an AWS architect in an IT startup company. Last month you configured an AWS Organization. Although the default feature set of AWS Organization is &ldquo;All Features&rdquo;, you only enabled the &ldquo;Consolidated Billing&rdquo; feature at that time. Later on, you found it was necessary to use service control policies (SCPs) to provide a central control to enable &ldquo;All Features&rdquo; for the Organization. Recently, the company is short on budget and has to make a cost reduction. Your manager asked you whether you can modify &ldquo;All Features&rdquo; to &ldquo;Consolidated Billing&rdquo; to save some cost. How would you answer this question?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>About AWS Organization pricing, please refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html</a>.</li>\r\n</ul>\r\n\r\n<p>AWS Organization itself is a free service. Users are only charged for the AWS resources in their accounts.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:</strong>&nbsp;All Features cannot be switched back to Consolidated Billing. This is described in\r\n\r\n\t<ul style=\"list-style-type:circle\">\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html</a>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Similar to Option A.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​&nbsp;AWS Organization is a free service regardless of how many OUs in the Organization.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ After All Features is enabled, it cannot be changed back. Besides, since it is a free service, you have to consider other AWS services to save some costs.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39576,
            "question_id": 49707,
            "answers": [
              {
                "choice": "<p>All attached SCPs need to be detached first in the Organization before All Features is changed to Consolidated Billing. This can also save some cost as Consolidated Billing is a free feature.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All Features can be switched to Consolidated Billing as long as the user has proper IAM permission. However, it will not save any cost as Consolidated Billing and All Features charge the same.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Users can switch between All Features and Consolidated Billing anytime. However, this will not save any cost since AWS Organization is offered without charge as long as there are more than 5 OUs in the Organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All Features cannot be switched back to Consolidated Billing. Besides, AWS Organization is a free service, so it is not required to modify it.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      }
    ]
  }