var DOP_C01_Part6 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#501",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Using the AWS CLI, which command would you use to change the configuration settings for a CloudTrail trail?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#501",
            "answers": [
              {
                "choice": "<p>A. modify-trail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. change-trail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. update-trail<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. set-trail<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 501 discussion",
        "discusstion": [
          {
            "id": 497557,
            "date": "Thu 09 Dec 2021 10:45",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401735,
            "date": "Sat 30 Oct 2021 14:16",
            "username": "shwetapathak2301",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338904,
            "date": "Thu 14 Oct 2021 16:59",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/cli/latest/reference/cloudtrail/update-trail.html<br>This is the new URL for update-trail command, please keep in mind below:<br>Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. UpdateTrail must be called from the region in which the trail was created; otherwise, an InvalidHomeRegionException is thrown.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#502",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>As CloudTrail sends a notification each time a log file is written to the Amazon S3 bucket, an account that is very active can generate a large number of notifications. If you subscribe using email or SMS, you may end up receiving a large volume of messages. Which of the following should you use to handle notifications programmatically?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#502",
            "answers": [
              {
                "choice": "<p>A. Amazon Kinesis Firehose<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Simple Queue Service (Amazon SQS)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Simple Email Service (Amazon SES)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon AppStream<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 502 discussion",
        "discusstion": [
          {
            "id": 401738,
            "date": "Sat 06 Nov 2021 17:25",
            "username": "shwetapathak2301",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338907,
            "date": "Sat 23 Oct 2021 05:07",
            "username": "GCP_user",
            "content": "CloudTrail sends a notification when log files are written to the Amazon S3 bucket. An active account can generate a large number of notifications. If you subscribe with email or SMS, you can receive a large volume of messages. We recommend that you subscribe using Amazon Simple Queue Service (Amazon SQS), which lets you handle notifications programmatically. For more information, see Subscribing a Queue to an Amazon SNS Topic in the Amazon Simple Queue Service Developer Guide.<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/configure-sns-notifications-for-cloudtrail.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#503",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Within an IAM policy, can you add an IfExists condition at the end of a Null condition?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#503",
            "answers": [
              {
                "choice": "<p>A. Yes, you can add an IfExists condition at the end of a Null condition but not in all Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Yes, you can add an IfExists condition at the end of a Null condition depending on the condition.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. No, you cannot add an IfExists condition at the end of a Null condition.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Yes, you can add an IfExists condition at the end of a Null condition.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 503 discussion",
        "discusstion": [
          {
            "id": 497539,
            "date": "Thu 09 Dec 2021 10:34",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 401740,
            "date": "Fri 29 Oct 2021 06:34",
            "username": "shwetapathak2301",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338916,
            "date": "Mon 18 Oct 2021 07:34",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html<br>...IfExists condition operators<br>You can add IfExists to the end of any condition operator name except the Null condition=E2=80=94for example, StringLikeIfExists. You do this to say \\\"If the policy key is present in the context of the request, process the key as specified in the policy. If the key is not present, evaluate the condition element as true.\\\" Other condition elements in the statement can still result in a nonmatch, but not a missing key when checked with ...IfExists.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#504",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are hosting multiple environments in multiple regions and would like to use Amazon Inspector for regular security assessments on your AWS resources across all regions. Which statement about Amazon Inspector's operation across regions is true?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#504",
            "answers": [
              {
                "choice": "<p>A. Amazon Inspector is a global service that is not region-bound. You can include AWS resources from multiple regions in the same assessment target.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Inspector is hosted within AWS regions behind a public endpoint. All regions are isolated from each other, and the telemetry and findings for all assessments performed within a region remain in that region and are not distributed by the service to other Amazon Inspector locations.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Inspector is hosted in each supported region. Telemetry data and findings are shared across regions to provide complete assessment reports.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Inspector is hosted in each supported region separately. You have to create assessment targets using the same name and tags in each region and Amazon Inspector will run against each assessment target in each region.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 504 discussion",
        "discusstion": [
          {
            "id": 383244,
            "date": "Sat 23 Oct 2021 02:20",
            "username": "Sagardonthineni",
            "content": "Answer B;<br>https://docs.aws.amazon.com/inspector/latest/userguide/inspector_agents.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 561345,
            "date": "Sat 05 Mar 2022 11:00",
            "username": "[Removed]",
            "content": "from the link",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 545212,
            "date": "Fri 11 Feb 2022 10:30",
            "username": "SonamDhingra",
            "content": "https://docs.aws.amazon.com/inspector/latest/user/getting_started_tutorial.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#505",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>To override an allow in an IAM policy, you set the Effect element to ______.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#505",
            "answers": [
              {
                "choice": "<p>A. Block<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Stop<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deny<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Allow<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 505 discussion",
        "discusstion": [
          {
            "id": 579948,
            "date": "Sat 02 Apr 2022 18:52",
            "username": "jj22222",
            "content": "Effect - Deny",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497425,
            "date": "Thu 09 Dec 2021 09:04",
            "username": "I_heart_shuffle_girls",
            "content": "I believe C should be correct.<br><br>Set the Effect element to Deny to override an allow in an IAM policy.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 478919,
            "date": "Mon 15 Nov 2021 19:26",
            "username": "BaburTurk",
            "content": "Effect =E2=80=93 Use Allow or Deny to indicate whether the policy allows or denies access.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html<br><br>c",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 475293,
            "date": "Wed 10 Nov 2021 09:46",
            "username": "afantict",
            "content": "I think it's c",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#506",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>To access the AWS Security Token Service (STS) you can issue calls directly to the AWS STS Query API. This API is a web service interface that accepts<br>______ requests.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#506",
            "answers": [
              {
                "choice": "<p>A. PUT<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. HTTPS<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. POST<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. GET<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 506 discussion",
        "discusstion": [
          {
            "id": 401742,
            "date": "Thu 07 Oct 2021 14:51",
            "username": "shwetapathak2301",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#507",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A root account has created an IAM group and defined the policy as:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03760/0029800001.png\" class=\"in-exam-image\"><br>What will this policy do?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#507",
            "answers": [
              {
                "choice": "<p>A. Allow this group to view the password policy of all the users added only to that group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Allow all the users of IAM to modify their password<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Allow an IAM user in this group to view the password policy and modify only his/her password<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Allow this group to view the password policy of all the IAM users<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 507 discussion",
        "discusstion": [
          {
            "id": 383249,
            "date": "Sat 02 Oct 2021 01:40",
            "username": "Sagardonthineni",
            "content": "Answer C<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#508",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>For Amazon Inspector's integration with CloudTrail, what information is logged for List* and Describe* APIs?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#508",
            "answers": [
              {
                "choice": "<p>A. None. Amazon Inspector is an automated service and not monitored by CloudTrail.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Both request and response information is logged.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Only request information is logged.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Request information is always logged. Response information is logged only for Completed assessment runs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 508 discussion",
        "discusstion": [
          {
            "id": 497525,
            "date": "Thu 09 Dec 2021 10:26",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 354400,
            "date": "Thu 28 Oct 2021 20:54",
            "username": "cnetherscnethers",
            "content": "B is the correct answer<br>CloudTrail logs all Amazon Inspector operations, including read-only operations, such as ListAssessmentRuns and DescribeAssessmentTargets, and management operations, such as AddAttributesToFindings and CreateAssessmentTemplate.<br><br>https://docs.aws.amazon.com/inspector/latest/userguide/logging-using-cloudtrail.htmlCorrection C is the correct answer<br><br>CloudTrail logs only the request information of Amazon Inspector read-only operations. Both request and response information is logged for all other Amazon Inspector operations.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 354401,
            "date": "Thu 28 Oct 2021 21:05",
            "username": "cnethers",
            "content": "Correction C is the correct answer<br><br>CloudTrail logs only the request information of Amazon Inspector read-only operations. Both request and response information is logged for all other Amazon Inspector operations.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338922,
            "date": "Fri 22 Oct 2021 04:45",
            "username": "GCP_user",
            "content": "For List* and Describe* operations they are all read-only then C is correct. Only the request information has been logged.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 338921,
            "date": "Mon 20 Sep 2021 03:43",
            "username": "GCP_user",
            "content": "CloudTrail logs only the request information of Amazon Inspector read-only operations. Both request and response information is logged for all other Amazon Inspector operations.<br>https://docs.aws.amazon.com/inspector/latest/userguide/logging-using-cloudtrail.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#509",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user is defining a policy for the IAM user. Which of the below mentioned elements can be found in an IAM policy?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#509",
            "answers": [
              {
                "choice": "<p>A. Not Effect<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Supported Data Types<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Principal Resource<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Version Management<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 509 discussion",
        "discusstion": [
          {
            "id": 647297,
            "date": "Mon 15 Aug 2022 19:20",
            "username": "hubekpeter",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_datatypes.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 519231,
            "date": "Fri 07 Jan 2022 23:36",
            "username": "RightAnswers",
            "content": "The question doesn't sound right. I guess it should be an element of IAM policy.<br>Even if we change \\\"components\\\" to \\\"elements\\\", supported data types is not an element of an IAM policy.<br>The following are the elements of an IAM policy:<br>IAM JSON policy elements: Version<br>IAM JSON policy elements: Id<br>IAM JSON policy elements: Statement<br>IAM JSON policy elements: Sid<br>IAM JSON policy elements: Effect<br>AWS JSON policy elements: Principal<br>AWS JSON policy elements: NotPrincipal<br>IAM JSON policy elements: Action<br>IAM JSON policy elements: NotAction<br>IAM JSON policy elements: Resource<br>IAM JSON policy elements: NotResource<br>IAM JSON policy elements: Condition<br><br>Supported Data Types are the data types supported by an IAM policy.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 497566,
            "date": "Thu 09 Dec 2021 11:00",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#510",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which statement is true about configuring proxy support for Amazon Inspector agent on Linuxbased systems?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#510",
            "answers": [
              {
                "choice": "<p>A. Amazon Inspector proxy support on Linux-based systems is achieved through installing proxyenabled version of the agent which comes with pre-configured files that you need to edit to match your environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Inspector agent does NOT support the use of proxy on Linux-based systems.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Inspector proxy configuration on Linux-based system is included in awsagent.env file under /etc/init.d/<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Inspector agent proxy settings on Linux-based systems are configured through WinHTTP proxy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 510 discussion",
        "discusstion": [
          {
            "id": 561495,
            "date": "Sat 05 Mar 2022 16:06",
            "username": "kanavpeer",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540422,
            "date": "Fri 04 Feb 2022 13:57",
            "username": "Erso",
            "content": "ANSWER C https://docs.aws.amazon.com/inspector/v1/userguide/inspector_agents-on-linux.html under \\\"Configuring proxy support for an Amazon Inspector Classic agent\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497662,
            "date": "Thu 09 Dec 2021 12:10",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 350945,
            "date": "Sun 17 Oct 2021 06:20",
            "username": "cnethers",
            "content": "1: Create a file called awsagent.env and save it in the /etc/init.d/ directory.<br><br>2: Edit awsagent.env to include these environment variables in the following format:<br><br>- export https_proxyhostname:port<br>- export http_proxyhostname:port<br>- export no_proxy169.254.169.254<br>3: Install the Amazon Inspector agent by completing the steps in the Installing the agent on a Linux-based EC2 instance procedure.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 338927,
            "date": "Sun 03 Oct 2021 21:24",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/inspector/latest/userguide/inspector_agents-on-linux.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#511",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Some of your EC2 instances are configured to use a Proxy. Can you use Amazon Inspector for regular assessment of instances behind proxy?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#511",
            "answers": [
              {
                "choice": "<p>A. Only Windows-based systems are supported as Linux-based systems use custom configurations that are not supported by AWS Agent in the current release.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Only Linux-based systems are supported, and AWS agent supports HTTPS proxy on these systems.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. No, AWS Agent does NOT support proxy environments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Yes, AWS Agent supports proxy environments on both Linux-based and Windows-based systems.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 511 discussion",
        "discusstion": [
          {
            "id": 497584,
            "date": "Thu 09 Dec 2021 11:14",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 401688,
            "date": "Sun 26 Sep 2021 23:03",
            "username": "shwetapathak2301",
            "content": "the answer is D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#512",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Amazon Inspector agent collects telemetry data during assessment run and sends this data to Amazon Inspector dedicated S3 bucket for analysis. How can you access telemetry data out of Amazon Inspector and how can you benefit from this data in securing your resources?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#512",
            "answers": [
              {
                "choice": "<p>A. Telemetry data is kept in S3 and encrypted with a pre-assessment test key configured in KMS, as long as you have access to that key you can download and decrypt telemetry data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Telemetry data is stored in Amazon Inspector dedicated S3 bucket that does NOT belong to your account, Amazon Inspector currently does NOT provide an API or an S3 bucket access mechanism to collected telemetry. Data is retained temporarily only to allow for assistance with support requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Telemetry data is saved on S3 bucket in your account, therefore telemetry data is accessible with proper permissions on that bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Telemetry data is deleted immediately after assessment run, therefore data can NOT be accessed or analyzed by any other tools.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 512 discussion",
        "discusstion": [
          {
            "id": 337874,
            "date": "Sat 16 Oct 2021 21:01",
            "username": "GCP_user",
            "content": "\\\"B\\\" is correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#513",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A root owner is trying to create an IAM user of the various departments. The owner has created groups for each department, but wants to still delineate the user based on the sub division level. E. g. The two users from different sub departments should be identified separately and have separate permissions. How can the root owner configure this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#513",
            "answers": [
              {
                "choice": "<p>A. Create a hierarchy of the IAM users which are separated based on the department<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a nested group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the paths to separate the users of the same group<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. It is not possible to delineate within a group<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 513 discussion",
        "discusstion": [
          {
            "id": 557675,
            "date": "Sun 27 Feb 2022 23:08",
            "username": "lucesarano",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html<br><br>Answer C.  Using API you can achieve this.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 383197,
            "date": "Wed 27 Oct 2021 09:54",
            "username": "Sagardonthineni",
            "content": "Answer D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#514",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user is defining a policy for an IAM user. Which of the below mentioned options is a valid version defined for the policy?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#514",
            "answers": [
              {
                "choice": "<p>A. \"Version\":\"2014-01-01\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. \"Version\":\"2011-10-17\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. \"Version\":\"2013-10-17\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. \"Version\":\"2012-10-17\"<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 514 discussion",
        "discusstion": [
          {
            "id": 581249,
            "date": "Tue 05 Apr 2022 14:32",
            "username": "jj22222",
            "content": "only one version",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497488,
            "date": "Thu 09 Dec 2021 10:04",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 402328,
            "date": "Mon 11 Oct 2021 09:38",
            "username": "shwetapathak2301",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 350973,
            "date": "Mon 27 Sep 2021 04:11",
            "username": "cnethers",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html<br>2012-10-17. This is the current version of the policy language, and you should always include a Version element and set it to 2012-10-17. Otherwise, you cannot use features such as policy variables that were introduced with this version.<br><br>2008-10-17. This was an earlier version of the policy language. You might see this version on older existing policies. Do not use this version for any new policies or when you update any existing policies.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#515",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which command will start an assessment run?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#515",
            "answers": [
              {
                "choice": "<p>A. aws inspector start-assessment-run --assessment-template-arn<template-arn><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. aws inspector start-assessment-run --assessment-run-name examplerun --assessment-target<target-arn><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aws inspector start-assessment-run --assessment-run-name examplerun<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. aws inspector start-assessment-run --assessment-run-name examplerun --assessment-duration<duration-in-seconds><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 515 discussion",
        "discusstion": [
          {
            "id": 497497,
            "date": "Thu 09 Dec 2021 10:11",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 402329,
            "date": "Sat 06 Nov 2021 21:38",
            "username": "shwetapathak2301",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338849,
            "date": "Wed 22 Sep 2021 23:54",
            "username": "GCP_user",
            "content": "A is correct, here is version 2 of the reference:<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/inspector/start-assessment-run.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#516",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which statement is true about configuring proxy support for Amazon Inspector agent on a Windows-based system?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#516",
            "answers": [
              {
                "choice": "<p>A. Amazon Inspector agent supports proxy usage on Windows-based systems through the use of the WinHTTP proxy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Inspector agent supports proxy usage on Linux-based systems but not on Windows.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Inspector proxy support on Windows-based systems is achieved through installing proxy-enabled version of the agent which comes with preconfigured files that you need to edit to match your environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Inspector agent supports proxy usage on Windows-based systems through awsagent.env configuration file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 516 discussion",
        "discusstion": [
          {
            "id": 616433,
            "date": "Wed 15 Jun 2022 01:07",
            "username": "SHAAHIBHUSHANAWS",
            "content": "A<br>https://docs.aws.amazon.com/inspector/v1/userguide/inspector_agents-on-win.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497626,
            "date": "Thu 09 Dec 2021 11:47",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401723,
            "date": "Wed 03 Nov 2021 19:28",
            "username": "shwetapathak2301",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 351030,
            "date": "Thu 23 Sep 2021 23:38",
            "username": "cnethers",
            "content": "https://docs.aws.amazon.com/inspector/latest/userguide/inspector_agents-on-win.html#inspector-agent-proxy<br><br>To get proxy support for an agent on a Windows-based operating system, use the WinHTTP proxy. To set up the WinHTTP proxy using the netsh utility, see Netsh Commands for Windows Hypertext Transfer Protocol (WINHTTP).",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#517",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the default maximum number of Roles per AWS account?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#517",
            "answers": [
              {
                "choice": "<p>A. 500<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 250<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. 100<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. There is no limit.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 517 discussion",
        "discusstion": [
          {
            "id": 715309,
            "date": "Thu 10 Nov 2022 15:43",
            "username": "RightAnswers",
            "content": "I doubt if there will really be question like this asking for quotas in DevOps Professional Exam :)<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497569,
            "date": "Thu 09 Dec 2021 11:02",
            "username": "I_heart_shuffle_girls",
            "content": "Answer is fluid currently max is 1000. I would chose the number closest to that at this point.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 338854,
            "date": "Mon 20 Sep 2021 01:30",
            "username": "GCP_usereji",
            "content": "This is dynamic and always change.<br>Currently it is 1,000 IAM roles you are limited under your AWS account.<br>https://aws.amazon.com/iam/faqs/#:~:textYou%20are%20limited%20to%201%2C000,we%20will%20consider%20your%20request.<br>Q: How many IAM roles can I create?<br>You are limited to 1,000 IAM roles under your AWS account. If you need more roles, submit the IAM limit increase request form with your use case, and we will consider your request.so the answer is C",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 478105,
            "date": "Sun 14 Nov 2021 13:32",
            "username": "eji",
            "content": "so the answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#518",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application which consists of EC2 instances in an Auto Scaling group. Between a particular time frame every day, there is an increase in traffic to your website. Hence users are complaining of a poor response time on the application. You have configured your Auto Scaling group to deploy one new EC2 instance when CPU utilization is greater than 60% for 2 consecutive periods of 5 minutes.<br>What is the least cost-effective way to resolve this problem?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#518",
            "answers": [
              {
                "choice": "<p>A. Decrease the consecutive number of collection periods<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the minimum number of instances in the Auto Scaling group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Decrease the collection period to ten minutes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Decrease the threshold CPU utilization percentage at which to deploy a new instance<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 518 discussion",
        "discusstion": [
          {
            "id": 533521,
            "date": "Thu 27 Jan 2022 05:54",
            "username": "EricPark",
            "content": "I'll go with A. ",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 558823,
            "date": "Tue 01 Mar 2022 16:49",
            "username": "miketyz",
            "content": "I'll go with A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 544748,
            "date": "Thu 10 Feb 2022 18:54",
            "username": "blueorca",
            "content": "A, question is asking the most cost-effective",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 526832,
            "date": "Tue 18 Jan 2022 17:54",
            "username": "RightAnswers",
            "content": "I would guess ta scheduled scaling policy will be the best option. Alternatively I would go with decreasing the CPU utilization threshold (Ans D) - why keep more instances running all the time?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 383046,
            "date": "Thu 04 Nov 2021 20:45",
            "username": "D2",
            "content": "B is correct.<br><br>First time i noticed a question asking for 'least cost effective' implementation",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#519",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have decided that you need to change the instance type of your production instances which are running as part of an AutoScaling group. The entire architecture is deployed using CloudFormation Template. You currently have 4 instances in Production. You cannot have any interruption in service and need to ensure 2 instances are always runningduring the update. Which of the options below listed can be used for this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#519",
            "answers": [
              {
                "choice": "<p>A. AutoScalingRollingUpdate<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AutoScalingScheduledAction<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AutoScalingReplacingUpdate<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AutoScalinglntegrationUpdate<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 519 discussion",
        "discusstion": [
          {
            "id": 553735,
            "date": "Tue 22 Feb 2022 15:21",
            "username": "SonamDhingra",
            "content": "Answer is A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 355848,
            "date": "Mon 04 Oct 2021 18:44",
            "username": "LBLB",
            "content": "Answer is C.  We should be using replacingupdate as we changing instance type as well.Actually, I take it back. Please remove the above statement. A seems to be correct",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 355865,
            "date": "Sun 17 Oct 2021 20:22",
            "username": "LB",
            "content": "Actually, I take it back. Please remove the above statement. A seems to be correct",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#520",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You currently have the following setup in AWS:<br>1) An Elastic Load Balancer<br>2) Auto Scaling Group which launches EC2 Instances<br>3) AMIs with your code pre-installed You want to deploy the updates of your app to only a certain number of users. You want to have a cost-effective solution. You should also be able to revert back quickly.<br>Which of the below solutions is the most feasible one?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#520",
            "answers": [
              {
                "choice": "<p>A. Create a second ELB, and a new Auto Scaling Group assigned a new Launch Configuration. Create a new AMI with the updated app. Use Route53 Weighted Round Robin records to adjust the proportion of traffic hitting the two ELBs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create new AMIs with the new app. Then use the new EC2 instances in half proportion to the older instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Redeploy with AWS Elastic Beanstalk and Elastic Beanstalk versions. Use Route 53 Weighted Round Robin records to adjust the proportion of traffic hitting the two ELBs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a full second stack of instances, cut the DNS over to the new stack of instances, and change the DNS back if a rollback is needed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 520 discussion",
        "discusstion": [
          {
            "id": 595853,
            "date": "Mon 02 May 2022 05:39",
            "username": "cooldeitycooldeity",
            "content": "D: blue/green casewill go back to A. ",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 595854,
            "date": "Mon 02 May 2022 05:41",
            "username": "cooldeity",
            "content": "will go back to A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 516115,
            "date": "Mon 03 Jan 2022 23:51",
            "username": "RightAnswers",
            "content": "A<br>From Route 53 FAQ (https://aws.amazon.com/route53/faqs/):<br>DNS Routing Policies: Q. Does Amazon Route 53 support Weighted Round Robin (WRR)?<br>Ans: Yes. Weighted Round Robin allows you to assign weights to resource record sets in order to specify the frequency with which different responses are served. You may want to use this capability to do A/B testing, sending a small portion of traffic to a server on which you=E2=80=99ve made a software change. For instance, suppose you have two record sets associated with one DNS name=E2=80=94one with weight 3 and one with weight 1. In this case, 75% of the time Route 53 will return the record set with weight 3 and 25% of the time Route 53 will return the record set with weight 1. Weights can be any number between 0 and 255.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#521",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application running a specific process that is critical to the application's functionality, and have added the health check process to your Auto Scaling<br>Group. The instances are showing healthy but the application itself is not working as it should. What could be the issue with the health check, since it is still showing the instances as healthy.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#521",
            "answers": [
              {
                "choice": "<p>A. You do not have the time range in the health check properly configured<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. It is not possible for a health check to monitor a process that involves the application<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The health check is not configured properly<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The health check is not checking the application process<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 521 discussion",
        "discusstion": [
          {
            "id": 510758,
            "date": "Tue 28 Dec 2021 03:51",
            "username": "I_heart_shuffle_girls",
            "content": "D should be the answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 430967,
            "date": "Sun 07 Nov 2021 02:18",
            "username": "sigI_heart_shuffle_girls",
            "content": "Why not B?Because you can configure your instance to report data on the health check path. In my environment the page reports application statuses.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 510759,
            "date": "Tue 28 Dec 2021 03:52",
            "username": "I_heart_shuffle_girls",
            "content": "Because you can configure your instance to report data on the health check path. In my environment the page reports application statuses.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 337864,
            "date": "Mon 04 Oct 2021 01:14",
            "username": "GCP_userGreatFunanabobsmith2000",
            "content": "Feel like \\\"D\\\" is not the right answer.<br>https://aws.amazon.com/builders-library/implementing-health-checks/<br>=E2=80=A2 Critical processes crashing or breaking=E2=80=94Some services take requests using an on-server proxy (similar to NGINX) and perform their business logic in another server process. A liveness check might only test whether the proxy process is running. A local health check process might pass through from the proxy to the application to check that both are running and answering requests correctly. Interestingly, in the website example from the beginning of the article, the existing health check was deep enough to ensure that the rendering process was running and responding but not deep enough to ensure it was responding correctly.<br>Is it \\\"A\\\"?D reads as a correct answer, but its not. This is the question:<br><br>\\\"What may be wrong with the health check, since it continues to report the instances as healthy?\\\"<br><br>Knowing that, the question is asking us whats wrong with the health check. If the timing is not setup right, it could be bombing out even though the instance at one point reported healthy. I agree, seems like A is the best answer.The link is correct but you got it wrong.<br>Look here https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#instance-health-status<br><br>Default health check here are the liveness check from you link.<br>Local health check (which checks processes on os)custom health check.<br><br>We obviously need to run app verifications from the os point of view.<br>So it's D. ",
            "upvote_count": "321",
            "selected_answers": ""
          },
          {
            "id": 502679,
            "date": "Thu 16 Dec 2021 06:12",
            "username": "GreatFunana",
            "content": "D reads as a correct answer, but its not. This is the question:<br><br>\\\"What may be wrong with the health check, since it continues to report the instances as healthy?\\\"<br><br>Knowing that, the question is asking us whats wrong with the health check. If the timing is not setup right, it could be bombing out even though the instance at one point reported healthy. I agree, seems like A is the best answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 534170,
            "date": "Thu 27 Jan 2022 23:15",
            "username": "bobsmith2000",
            "content": "The link is correct but you got it wrong.<br>Look here https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#instance-health-status<br><br>Default health check here are the liveness check from you link.<br>Local health check (which checks processes on os)custom health check.<br><br>We obviously need to run app verifications from the os point of view.<br>So it's D. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#522",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have just recently deployed an application on EC2 instances behind an ELB.  After a couple of weeks, customers are complaining on receiving errors from the application. You want to diagnose the errors and are trying to get errors from the ELB access logs. But the ELB access logs are empty. What is the reason for this.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#522",
            "answers": [
              {
                "choice": "<p>A. You do not have the appropriate permissions to access the logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. You do not have your CloudWatch metrics correctly configured<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. ELB Access logs are only available for a maximum of one week<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Access logging is an optional feature of Elastic Load Balancing that is disabled by default<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 522 discussion",
        "discusstion": [
          {
            "id": 337866,
            "date": "Tue 12 Oct 2021 13:07",
            "username": "GCP_user",
            "content": "D is correct:<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br>Access logging is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logging for your load balancer, Elastic Load Balancing captures the logs and stores them in the Amazon S3 bucket that you specify as compressed files. You can disable access logging at any time.",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#523",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have deployed an application to AWS which makes use of Autoscaling to launch new instances. You now want to change the instance type for the new instances. Which of the following is one of the action items to achieve this deployment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#523",
            "answers": [
              {
                "choice": "<p>A. Use Elastic Beanstalk to deploy the new application with the new instance type<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Cloudformation to deploy the new application with the new instance type<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new launch configuration with the new instance type<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create new EC2 instances with the new instance type and attach it to the Autoscaling Group<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 523 discussion",
        "discusstion": [
          {
            "id": 376570,
            "date": "Mon 18 Oct 2021 22:34",
            "username": "peddyua",
            "content": "It=E2=80=99s already on ASG so it=E2=80=99s either LC or LT, ANSWER C",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 514795,
            "date": "Sun 02 Jan 2022 04:07",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 342175,
            "date": "Sat 16 Oct 2021 10:10",
            "username": "PPP_D",
            "content": "I'd go with C.  https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 337869,
            "date": "Fri 24 Sep 2021 06:31",
            "username": "GCP_userGreatFunana",
            "content": "Is the answer \\\"A\\\"?<br>https://docs.amazonaws.cn/en_us/elasticbeanstalk/latest/dg/using-features.managing.as.htmlASG bruh. No mention of a ElasticBeanstalk deployment.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 509898,
            "date": "Mon 27 Dec 2021 00:19",
            "username": "GreatFunana",
            "content": "ASG bruh. No mention of a ElasticBeanstalk deployment.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#524",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application stores sensitive information on an EBS volume attached to your EC2 instance. How can you protect your information? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#524",
            "answers": [
              {
                "choice": "<p>A. Unmount the EBS volume, take a snapshot and encrypt the snapshot. Re-mount the Amazon EBS volume.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. It is not possible to encrypt an EBS volume, you must use a lifecycle policy to transfer data to S3 for encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Copy the unencrypted snapshot and check the box to encrypt the new snapshot. Volumes restored from this encrypted snapshot will also be encrypted.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 524 discussion",
        "discusstion": [
          {
            "id": 376571,
            "date": "Mon 11 Oct 2021 03:28",
            "username": "peddyua",
            "content": "CD correct",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 367699,
            "date": "Sun 03 Oct 2021 15:00",
            "username": "Bmaster",
            "content": "I will go with C D. ",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 497592,
            "date": "Thu 09 Dec 2021 11:18",
            "username": "I_heart_shuffle_girls",
            "content": "CD is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#525",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which Auto Scaling process would be helpful when testing new instances before sending traffic to them, while still keeping them in your Auto Scaling Group?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#525",
            "answers": [
              {
                "choice": "<p>A. Suspend the process AZ Rebalance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Suspend the process Health Check<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Suspend the process Replace Unhealthy<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Suspend the process AddToLoadBalancer<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 525 discussion",
        "discusstion": [
          {
            "id": 497655,
            "date": "Thu 09 Dec 2021 12:07",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 367698,
            "date": "Fri 15 Oct 2021 08:25",
            "username": "Bmaster",
            "content": "I will go with D.  https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#526",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an ELB setup in AWS with EC2 instances running behind it. You have been requested to monitor the incoming connections to the ELB. <br>Which of the below options can suffice this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#526",
            "answers": [
              {
                "choice": "<p>A. Use AWSCIoudTrail with your load balancer<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable access logs on the load balancer<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a CloudWatch Logs Agent<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a custom metric CloudWatch filter on your load balancer<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 526 discussion",
        "discusstion": [
          {
            "id": 395861,
            "date": "Mon 20 Sep 2021 05:50",
            "username": "muell_xyz",
            "content": "B for me.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 522491,
            "date": "Wed 12 Jan 2022 23:12",
            "username": "Ram_Param",
            "content": "B)<br>\\\"Access logging is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logging for your load balancer, Elastic Load Balancing captures the logs and stores them in the Amazon S3 bucket that you specify. You can disable access logging at any time.\\\"<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 517163,
            "date": "Wed 05 Jan 2022 05:17",
            "username": "Ray0411",
            "content": "D for me",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#527",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer has been asked to recommend a tool to deploy the components of a threetier web application. This application will use Amazon DynamoDB as a database Which deployment requires the LEAST amount of operational management?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#527",
            "answers": [
              {
                "choice": "<p>A. Use AWS CloudFormation to create a Classic Load Balancer and an Auto Scaling group. Use AWS OpsWorks to create the application and database resources Deploy application updates with OpsWorks using lifecycle events<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS OpsWorks to create a Classic Load Balancer, an Auto Scaling group application, and database resources Deploy application updates using OpsWorks lifecycle events<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS OpsWorks to create a Classic Load Balancer Auto Scaling and application resources Use AWS CloudFormation to create the database resources Deploy application updates using CloudFormation rolling updates<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CloudFormation to create a Classic Load Balancer an Auto Scaling group and database resources Deploy application updates using CloudFormation rolling updates<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 527 discussion",
        "discusstion": [
          {
            "id": 521816,
            "date": "Wed 12 Jan 2022 00:11",
            "username": "RightAnswers",
            "content": "D is preferable.<br>AWS OpsWorks Stacks provides integrated support for MySQL servers through the MySQL layer and for several types of database servers through the Amazon Relational Database Service (Amazon RDS) layer. However, you can easily customize a stack to have the application servers use other database servers such as Amazon DynamoDB or MongoDB. <br>Since DDB is not integrated with OpsWorks, looks like this will have more management overhead than CFN templates.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 552042,
            "date": "Sun 20 Feb 2022 18:12",
            "username": "bobsmith2000",
            "content": "Only D makes sense",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 552041,
            "date": "Sun 20 Feb 2022 18:12",
            "username": "bobsmith2000",
            "content": "CloudFormation is native to AWS.<br>So A or D. <br>Only D makes sense.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 532031,
            "date": "Tue 25 Jan 2022 11:11",
            "username": "sonoda",
            "content": "If you want to use DynamoDB in OpsWork that need a custom layer<br>So I would slect D. ",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 474485,
            "date": "Mon 08 Nov 2021 21:39",
            "username": "francisco_guerra",
            "content": "Ans: B<br>LEAST amount of operational management",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 406543,
            "date": "Fri 22 Oct 2021 07:46",
            "username": "NNHAN",
            "content": "D is better",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 395862,
            "date": "Fri 15 Oct 2021 02:18",
            "username": "muell_xyz",
            "content": "B for me.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#528",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS CodePipeline to manage and deploy infrastructure as code. The infrastructure is defined in AWS CloudFormation templates and is primarily comprised of multiple Amazon EC2 instances and Amazon RDS databases. The Security team has observed many operators creating inbound security group rules with a source CIDR of 0 0 0 0/0 and would like to proactively stop the deployment of rules with open CIDRs The DevOps Engineer will implement a predeptoyment step that runs some security checks over the CloudFormation template before the pipeline processes it. This check should allow only inbound security group rules with a source CIDR of 0.0.0.0/0 if the rule has the description \"Security Approval Ref XXXXX (where XXXXX is a preallocated reference). The pipeline step should fail if this condition is not met and the deployment should be blocked. How should this be accomplished?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#528",
            "answers": [
              {
                "choice": "<p>A. Enable a SCP in AWS Organizations. The policy should deny access to the API call Create Security GroupRule if the rule specifies 0.0.0.0/0 without a description referencing a security approval.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an initial stage to CodePipeline called Security Check. This stage should call an AWS Lambda function that scans the CloudFormation template and fails the pipeline if it finds 0.0.0.0/0 in a security group without a description referencing a security approval.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Config rule that is triggered on creation or edit of resource type EC2 SecurityGroup. This rule should call an AWS Lambda function to send a failure notification if the security group has any rules with a source CIDR of 0.0.0.0/0 without a description referencing a security approval.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the IAM role used by CodePipeline. The IAM policy should deny access.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 528 discussion",
        "discusstion": [
          {
            "id": 359178,
            "date": "Tue 05 Oct 2021 00:59",
            "username": "sb333",
            "content": "The answer is B. ",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 509575,
            "date": "Sun 26 Dec 2021 13:00",
            "username": "Jaxjd",
            "content": "B, the requirement is to check for 0.0.0.0 before resource provisioning..so, need to lookup in the template",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#529",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using tagging to allocate AWS costs. The company has Amazon EC2 instances that run in Auto Scaling groups. The Amazon Elastic Block Store<br>(Amazon EBS) volumes that are attached to the EC2 instances are being created without the appropriate cost center tags. A DevOps engineer must ensure that the new EBS volumes are properly tagged.<br>What is the MOST efficient solution that meets this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#529",
            "answers": [
              {
                "choice": "<p>A. Create a lifecycle hook on the autoscaling:EC2_INSTANCE_TERMINATING instance state that attaches the cost center tags to the EBS volumes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the Auto Scaling group launch template to include the cost center tags for EBS volumes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the Auto Scaling group to include the cost center tags. Set the PropagateAILaunch property to true.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Tag Editor to search for EBS volumes that are missing the tags and to add the cost center tags to the volumes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 529 discussion",
        "discusstion": [
          {
            "id": 359177,
            "date": "Tue 12 Oct 2021 05:40",
            "username": "sb333prlRightAnswers",
            "content": "The answer is B.  \\\"Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template...\\\"<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.htmlHi! Currently, there are 536 Questions. Which is the most latest one....1st or 536th. I am new to ET and have contributor access. Please help!You can tag new or existing Auto Scaling groups. You can also propagate tags from an Auto Scaling group to the Amazon EC2 instances it launches.<br>Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template.",
            "upvote_count": "1411",
            "selected_answers": ""
          },
          {
            "id": 361852,
            "date": "Tue 12 Oct 2021 20:21",
            "username": "prl",
            "content": "Hi! Currently, there are 536 Questions. Which is the most latest one....1st or 536th. I am new to ET and have contributor access. Please help!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 523155,
            "date": "Thu 13 Jan 2022 23:00",
            "username": "RightAnswers",
            "content": "You can tag new or existing Auto Scaling groups. You can also propagate tags from an Auto Scaling group to the Amazon EC2 instances it launches.<br>Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 631122,
            "date": "Thu 14 Jul 2022 04:09",
            "username": "nqthien041292",
            "content": "Vote B for tagging new EBS volumes",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 630910,
            "date": "Wed 13 Jul 2022 14:56",
            "username": "nebojsaMa",
            "content": "C: why because no one mentioned any launch template in the description, if there was the mention of it then yes the B would be the answer. https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 588373,
            "date": "Wed 20 Apr 2022 01:13",
            "username": "Training",
            "content": "Should be B.  As per the link https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html<br><br>You can tag new or existing Auto Scaling groups. You can also propagate tags from an Auto Scaling group to the Amazon EC2 instances it launches.<br><br>Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template. For more information, see Create a launch template for an Auto Scaling group.<br><br>You can create and manage tags through the AWS Management Console, AWS CLI, or SDKs.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 544730,
            "date": "Thu 10 Feb 2022 18:25",
            "username": "blueorca",
            "content": "B as the question is asking tagging on NEW EBS volumes, not existing/new EC2 instances",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 537182,
            "date": "Mon 31 Jan 2022 15:57",
            "username": "vpupkin",
            "content": "B<br>Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template. For more information, see Creating a launch template for an Auto Scaling group.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514154,
            "date": "Fri 31 Dec 2021 17:14",
            "username": "Bad_Mat",
            "content": "It's probably B because question says: tag NEW volumes",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 413190,
            "date": "Thu 14 Oct 2021 19:28",
            "username": "TexaspiderStelSen",
            "content": "for is C - look at the documents.Correct Answer is B: Checked the document and it says \\\"Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution when configuring instance tags in your launch template.\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 429925,
            "date": "Thu 28 Oct 2021 08:12",
            "username": "StelSen",
            "content": "Correct Answer is B: Checked the document and it says \\\"Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution when configuring instance tags in your launch template.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 351066,
            "date": "Sun 19 Sep 2021 21:52",
            "username": "cnethersStelSen",
            "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html<br><br>the value to propogate tags is something else .. see below<br>aws autoscaling create-auto-scaling-group --auto-scaling-group-name my-asg \\<br>--launch-configuration-name my-launch-config --min-size 1 --max-size 3 \\<br>--vpc-zone-identifier \\\"subnet-5ea0c127,subnet-6194ea3b,subnet-c934b782\\\" \\<br>--tags Keyenv,Valueprod,PropagateAtLaunchtrueI checked the LINK and there is NO clear statement that this PropagateAtLaunch will propagate tags to EBS volumes. Check this link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html<br><br>Set to true if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to false if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group. So I believe there are some tags are set to AutoScalingGroup resource and if PropagateAtLaunchtrue, then ASG tags are copied to EC2 instance. Hope it clears now?",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 429926,
            "date": "Sun 07 Nov 2021 09:21",
            "username": "StelSen",
            "content": "I checked the LINK and there is NO clear statement that this PropagateAtLaunch will propagate tags to EBS volumes. Check this link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html<br><br>Set to true if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to false if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group. So I believe there are some tags are set to AutoScalingGroup resource and if PropagateAtLaunchtrue, then ASG tags are copied to EC2 instance. Hope it clears now?",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#531",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company maintains a stateless web application that is experiencing inconsistent traffic. The company uses AWS CloudFormation to deploy the application. The application runs on Amazon EC2 On-Demand Instances behind an Application Load Balancer (ALB). The instances run across multiple Availability Zones.<br>The company wants to Include the use of Spot Instances while continuing to use a small number of On-Demand Instances to ensure that the application remains highly available.<br>What is the MOST cost-effective solution that meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#531",
            "answers": [
              {
                "choice": "<p>A. Add a Spot block resource to the AWS CloudFormation template. Use the diversified allocation strategy with step scaling behind the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a Spot block resource to the AWS CloudFormation template. Use the lowest-price allocation strategy with target tracking scaling behind the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a Spot Fleet resource to the AWS CloudFormation template. Use the capacity-optimized allocation strategy with step scaling behind the ALB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a Spot Fleet resource to the AWS CloudFormation template. Use the diversified allocation strategy with scheduled scaling behind the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 531 discussion",
        "discusstion": [
          {
            "id": 358005,
            "date": "Fri 24 Sep 2021 12:29",
            "username": "shammous",
            "content": "C.  It=E2=80=99s the closest to the context of having dedicated and optimized resources.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 521807,
            "date": "Wed 12 Jan 2022 00:02",
            "username": "RightAnswerscox1960",
            "content": "Ans D. <br>The key item in the question is high availability.<br>Looking at the EC2 SPOT FLEET instance allocation strategies:<br>If your fleet runs workloads that may have a HIGHER COST OF INTERRUPTION associated with restarting work and checkpointing, then use the capacity-optimized strategy. This strategy offers the possibility of fewer interruptions, which can lower the overall cost of your workload.<br>If your fleet is small or runs for a short time, the probability that your Spot Instances will be interrupted is low, even with all of the instances in a single Spot capacity pool. Therefore, the lowest-price strategy is likely to meet your needs while providing the lowest cost.<br>If your fleet is large or runs for a long time, you can IMPROVE THE AVAILABILITY OF YOUR FLEET by distributing the Spot Instances across multiple pools using the diversified strategy.<br>So, for high level of availability, diversified strategy should be selected.scheduled scaling seems wrong",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 612247,
            "date": "Mon 06 Jun 2022 09:49",
            "username": "cox1960",
            "content": "scheduled scaling seems wrong",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 465656,
            "date": "Tue 02 Nov 2021 23:47",
            "username": "justfmm",
            "content": "Go for C. <br><br>https://aws.amazon.com/blogs/compute/introducing-the-capacity-optimized-allocation-strategy-for-amazon-ec2-spot-instances/<br><br>There is a price associated with interruptions, restarting work, and checkpointing. While the overall hourly cost of capacity-optimized allocation strategy might be slightly higher, the possibility of having fewer interruptions can lower the overall cost of your workload.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 439714,
            "date": "Wed 20 Oct 2021 07:04",
            "username": "thecorpbobsmith2000",
            "content": "B is the most cost-effective solution.There's no such thing as a \\\"Spot block resource\\\"",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 552026,
            "date": "Sun 20 Feb 2022 17:50",
            "username": "bobsmith2000",
            "content": "There's no such thing as a \\\"Spot block resource\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#532",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages an application that stores logs in Amazon CloudWatch Logs. The company wants to archive the logs in Amazon S3. Logs are rarely accessed after 90 days and must be retained for 10 years.<br>Which combination of steps should a DewOps engineer take to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#532",
            "answers": [
              {
                "choice": "<p>A. Configure a CloudWatch Logs subscription filter to use AWS Glue to transfer all logs to an S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a CloudWatch Logs subscription filter to use Amazon Kinesis Data Firehose to stream all logs to an S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a Cloud Watch Logs subscription filter to stream all logs to an S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the S3 bucket lifecycle policy to transition logs to S3 Glacier after 90 days and to expire logs after 3.650 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure the S3 bucket lifecycle policy to transition logs to Reduced Redundancy after 90 days and to expire logs after 3.650 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 532 discussion",
        "discusstion": [
          {
            "id": 351079,
            "date": "Fri 01 Oct 2021 07:54",
            "username": "cnethers",
            "content": "B to get logs to S3<br>D because you want to achieve the logs at a low cost storage",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 643366,
            "date": "Sat 06 Aug 2022 13:53",
            "username": "GCPWizard",
            "content": "And: BD. <br>You need Kinesis Firehose. Check the aws youtube link:<br>https://www.google.com/search?qCloud+Watch+Logs+subscription+filter+to+stream+all+logs+to+an+S3+bucket&sxsrfALiCzsa0o4gSioFn0cNlC_91kFUGsB9LvA%3A1659793741638&sourcehp&eiTXHuYpH2IveHptQP2JyySA&iflsigAJiK0e8AAAAAYu5_XY5C8wEHwGzmtON1P5No_EhwEo39&ved0ahUKEwjR0PfCrbL5AhX3g4kEHViODAkQ4dUDCAk&uact5&oqCloud+Watch+Logs+subscription+filter+to+stream+all+logs+to+an+S3+bucket&gs_lcpCgdnd3Mtd2l6EANQAFgAYJ4EaABwAHgAgAGWAYgBlgGSAQMwLjGYAQCgAQKgAQE&sclientgws-wiz#kpvalbx_UHHuYvryKqeoptQPuo-vgA416",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 559943,
            "date": "Thu 03 Mar 2022 09:49",
            "username": "MF2C",
            "content": "firehose",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 559458,
            "date": "Wed 02 Mar 2022 15:00",
            "username": "miketyzmiketyz",
            "content": "Does not precise \\\"lot of logs\\\" so does not need extra cost with firehose so would say C (not B)Actually, I am wrong, subscription filters could not work without Kinesis :<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html<br>Ans. is BD",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 559462,
            "date": "Wed 02 Mar 2022 15:05",
            "username": "miketyz",
            "content": "Actually, I am wrong, subscription filters could not work without Kinesis :<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html<br>Ans. is BD",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 553096,
            "date": "Mon 21 Feb 2022 19:22",
            "username": "bobsmith2000",
            "content": "Firehouse to deliver logs from CloudWatch to S3<br>S3 lifestyle policy to transit an object between states",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 544838,
            "date": "Thu 10 Feb 2022 21:13",
            "username": "blueorca",
            "content": "CD, you can export logs directly to S3 from CWL https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3ExportTasksConsole.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 504095,
            "date": "Sat 18 Dec 2021 09:25",
            "username": "GreatFunanaGreatFunanaJaxjd",
            "content": "Reads like a trick question to me: \\\"After 90 days, logs are seldom viewed and must be preserved for a period of ten years.\\\"<br><br>Note the language. I'd normally go with Glacier, but it says seldom viewed, and AWS tests are usually pretty clear when it needs to be archived in glacier, and statement is clear as mud.<br><br>AE since they didn't specify what \\\"seldom\\\" means.I mean BE! Not AE. If they want to store logs for 10!years means, the logs are critical and may require for compliance. So, E will not come into the picture.. it will be D. ",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 504096,
            "date": "Sat 18 Dec 2021 09:26",
            "username": "GreatFunanaJaxjd",
            "content": "I mean BE! Not AE. If they want to store logs for 10!years means, the logs are critical and may require for compliance. So, E will not come into the picture.. it will be D. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 508511,
            "date": "Fri 24 Dec 2021 14:30",
            "username": "Jaxjd",
            "content": "If they want to store logs for 10!years means, the logs are critical and may require for compliance. So, E will not come into the picture.. it will be D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401414,
            "date": "Sun 31 Oct 2021 09:41",
            "username": "shwetapathak2301",
            "content": "yes BD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 389169,
            "date": "Tue 19 Oct 2021 10:21",
            "username": "D2",
            "content": "Answer BD",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#534",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team manages website deployments using AWS CodeDeploy blue/green deployments. The application is running on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group.<br>When deploying a new revision, the team notices the deployment eventually falls, but it takes a long time to fail. After further inspection, the team discovers the<br>AllowTraffic lifecycle event ran for an hour and eventually failed without providing any other information. The team wants to ensure failure notices are delivered more quickly while maintaining application availability even upon failure.<br>Witch combination of actions should be taken to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#534",
            "answers": [
              {
                "choice": "<p>A. Change the deployment configuration to CodeDeployDefaultAllAtOnce to speed up the deployment process by deploying to all of the instances at the same time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CodeDeploy trigger for the deployment failure event and make the deployment fail as soon as a single health check failure is detected.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reduce the HealthCheckIntervalSeconds and UnhealthyThresholdCount values within the target group health checks to decrease the amount of time it takes for the application to be considered unhealthy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the appspec.yml file to run a script on the AllowTraffic hook to perform lighter health checks on the application instead of making CodeDeploy wait for the target group health checks to pass.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use the appspec,yml file to run a script on the BeforeAllowTraffic hook to perform hearth checks on the application and fail the deployment it the health checks performed by the script are not successful.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 534 discussion",
        "discusstion": [
          {
            "id": 372292,
            "date": "Wed 22 Sep 2021 07:32",
            "username": "nseihappydaze",
            "content": "It should be B and EAgreed.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 373182,
            "date": "Mon 27 Sep 2021 09:53",
            "username": "happydaze",
            "content": "Agreed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 361946,
            "date": "Mon 20 Sep 2021 19:13",
            "username": "MrCarterJinhongLiGreatFunanaStelSen",
            "content": "Answers are C and EAgreedC is just a slower version of E, and getting information to the team is paramount. B and E are legit.Feel this is correct. Esp the word combination makes C&E are most suitable",
            "upvote_count": "12111",
            "selected_answers": ""
          },
          {
            "id": 448568,
            "date": "Fri 22 Oct 2021 09:29",
            "username": "JinhongLi",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504075,
            "date": "Sat 18 Dec 2021 08:30",
            "username": "GreatFunana",
            "content": "C is just a slower version of E, and getting information to the team is paramount. B and E are legit.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429940,
            "date": "Sun 10 Oct 2021 10:24",
            "username": "StelSen",
            "content": "Feel this is correct. Esp the word combination makes C&E are most suitable",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 597065,
            "date": "Thu 05 May 2022 02:59",
            "username": "TarTee",
            "content": "As per the question, The team's goal is to guarantee that failure notifications are given more promptly while yet ensuring application availability in the event of a failure.<br>The task is to get notification immediately if failure. So B is for sure for option.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 544758,
            "date": "Thu 10 Feb 2022 19:09",
            "username": "blueorca",
            "content": "BE for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 515074,
            "date": "Sun 02 Jan 2022 17:30",
            "username": "sg0206",
            "content": "I will go with A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515072,
            "date": "Sun 02 Jan 2022 17:28",
            "username": "sg0206",
            "content": "A is definately an aswer as this is blue green deployment and if we do Allatonce, we will get to know quickly if something is not correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 382239,
            "date": "Sat 02 Oct 2021 23:50",
            "username": "D2",
            "content": "It should be B and E",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#535",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a number of internet-facing APIs that use an AWS Lambda authorizer to control access. A security team wants to be alerted when a large number of requests are failing authorization, as this may indicate API abuse. Given the magnitude of API requests, the team wants to be alerted only if the number of HTTP 403 Forbidden responses goes above 2% of overall API calls.<br>Which solution will accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#535",
            "answers": [
              {
                "choice": "<p>A. Use the default Amazon API Gateway 403Error and Count metrics sent to Amazon CloudWatch, and use metric math to create a CloudWatch alarm. Use the (403Error/Count)*100 mathematical expression when defining the alarm. Set the alarm threshold to be greater than 2.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write a Lambda function that fetches the default Amazon API Gateway 403Error and Count metrics sent to Amazon CloudWatch, calculate the percentage of errors, then push a custom metric to CloudWatch named Custorn403Percent. Create a CloudWatch alarm based on this custom metric. Set the alarm threshold to be greater than 2.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon API Gateway to send custom access logs to Amazon CloudWatch Logs. Create a log filter to produce a custom metric for the HTTP 403 response code named Custom403Error. Use this custom metric and the default API Gateway Count metric sent to CloudWatch, and use metric match to create a CloudWatch alarm. Use the (Custom403Error/Count)*100 mathematical expression when defining the alarm. Set the alarm threshold to be greater than 2.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon API Gateway to enable custom Amazon CloudWatch metrics, enable the ALL_STATUS_CODE option, and define an APICustom prefix. Use CloudWatch metric math to create a CloudWatch alarm. Use the (APICustom403Error/Count)*100 mathematical expression when defining the alarm. Set the alarm threshold to be greater than 2.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 535 discussion",
        "discusstion": [
          {
            "id": 351811,
            "date": "Mon 20 Sep 2021 10:14",
            "username": "cnethers",
            "content": "I agree C is the answer",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 532448,
            "date": "Tue 25 Jan 2022 23:10",
            "username": "RightAnswerscox1960",
            "content": "API gateway by defaults sends 4xx errors to CloudWatch under AWS/Apigateway name space (https://docs.aws.amazon.com/apigateway/latest/d) eveloperguide/api-gateway-metrics-and-dimensions.html- so I don't understand why it is required to enable Custom Access Logging for all the APIs - unless I am missing something.<br>If \\\"Custom Access Logging\\\" part is removed from Ans C, it looks resonable.you want 403 error, not just all 4XX as default.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 616895,
            "date": "Wed 15 Jun 2022 20:16",
            "username": "cox1960",
            "content": "you want 403 error, not just all 4XX as default.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 433796,
            "date": "Mon 04 Oct 2021 13:15",
            "username": "TonyGe",
            "content": "C for sure.<br>A log filter is needed to collect record contains \\\"HTTP 403\\\" error",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      }
    ]
  }