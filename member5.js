const emailDatabase = [
{
  "id": "leg_001",
  "subject": "Your Monthly Bank Statement is Ready",
  "sender": "alerts@gtbank.com",
  "body": "Dear David, your monthly account statement is now available. Please log into your banking app to review.",
  "label": "legitimate",
  "sender_name": "GTBank Alert"  ,
  "trust_signals": [
  "Recognized sender domain",
  "Professional language",
  "No suspicious request"
  ] ,
  "explanation": "This email is legitimate because it uses a trusted sender address, contain normal, communication language,and does not request sensitive information suspiciously" ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
  "id": "leg_002",
  "subject": "Order Confirmation #45231",
  "sender": "orders@jumia.com",
  "body": "Hi David, your order has been successfully placed. You will receive delivery updates shortly.",
  "label": "legitimate",
  "sender_name": "Jumia Orders"  ,
  "trust_signals":[
  "Recognized e-commerce branding", 
  "order confirmation details", 
  "transaction reference"
  ] ,
  "explanation": "This email confirms that an order was successfully placed on Jumia" ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
    "id": "leg_003",
    "subject": "Password Changed Successfully",
    "sender": "security@google.com",
    "body": "Your password was changed successfully. If this was not you, please secure your account immediately.",
    "label": "legitimate",
    "sender_name": "Google Security" ,
    "trust_signals":[
    "Official Google security notification style", 
    "account protection context"
    ] ,
    "explanation":"This email informs the user that a password or security setting was changed on the account." ,
    "is_phishing": false ,
    "difficulty":"hard",
    "red_flags": []
  },

  {
    "id": "leg_004",
    "subject": "Your Electricity Bill for April",
    "sender": "billing@ikejaelectric.com",
    "body": "Dear Customer, your electricity bill is ready. Kindly log into your official account portal to view details.",
    "label": "legitimate",
    "sender_name":"Ikeja Electric Billing" ,
    "trust_signals":[
    "Utility company branding", 
    "billing notification format", 
    "no suspicious requests"
    ] ,
    "explanation":"This is a normal electricity billing notification sent to customers." ,
    "is_phishing": false ,
    "difficulty":"medium",
    "red_flag": []
  },

{
  "id": "leg_005",
  "subject": "Welcome to Netflix",
  "sender": "info@netflix.com",
  "body": "Welcome! Your subscription has been activated. Enjoy unlimited movies and series.",
  "label": "legitimate",
  "sender_name":"Netflix Info" ,
  "trust_signals":[
  "Official subscription service branding", 
  "welcome message format"
  ] ,
  "explanation":"This email confirms successful activation of a Netflix subscription." ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
    "id": "leg_006",
    "subject": "Shipment Update: Package in Transit",
    "sender": "updates@dhl.com",
    "body": "Your package is currently in transit and will be delivered soon. Track via the official DHL website.",
    "label": "legitimate",
    "sender_name":"Delivery Updates"  ,
    "trust_signals":[
    "Shipment tracking context", 
    "expected delivery information", 
    "professional wording"
    ] ,
    "explanation":"This email updates the user about the progress of a package delivery." ,
    "is_phishing": false ,
    "difficulty":"medium",
    "red_flags": []
  },

{
  "id": "leg_007",
  "subject": "Meeting Reminder - Project Discussion",
  "sender": "hr@company.com",
  "body": "This is a reminder for your scheduled meeting tomorrow at 10 AM.",
  "label": "legitimate",
  "sender_name":"Project Meetings Team"  ,
  "trust_signals":[
  "Workplace communication style", 
  "meeting schedule information"
  ] ,
  "explanation":"This is a normal reminder about an upcoming project or work meeting" ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
    "id": "leg_008",
    "subject": "Payment Received Successfully",
    "sender": "no-reply@paypal.com",
    "body": "You have received a payment. Check your PayPal account for details.",
    "label": "legitimate",
    "sender_name":" Payment Notifications"  ,
    "trust_signals":[
    "Payment receipt format", 
    "Academic institution communication style"
    ] ,
    "explanation":"This email confirms that a payment transaction was completed successfully." ,
    "is_phishing": false ,
    "difficulty":"medium",
    "red_flags": []
  },

  {
    "id": "leg_009",
    "subject": "University Admission Update",
    "sender": "admissions@unilag.edu.ng",
    "body": "Your application status has been updated. Please log into the student portal.",
    "label": "legitimate",
    "sender_name":"University Admissions Office"  ,
    "trust_signals":[
    "Academic institution communication style", 
    "admission update context"
    ] ,
    "explanation":"This email provides a legitimate update about university admission status." ,
    "is_phishing": false ,
    "difficulty":"hard",
    "red_flags": []
  },

{
  "id": "leg_010",
  "subject": "Weekly Newsletter",
  "sender": "newsletter@techcrunch.com",
  "body": "Here are this week’s top tech stories and insights.",
  "label": "legitimate", 
  "sender_name":"Weekly Newsletter Team"  ,
  "trust_signals":[
  "Newsletter formatting", 
  "informational content", 
  "no urgent action request"
  ] ,
  "explanation":"This is a regular newsletter sent to subscribers with updates or information." ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
    "id": "leg_011",
    "subject": "Account Login Alert",
    "sender": "security@facebook.com",
    "body": "We noticed a new login to your account from a new device.",
    "label": "legitimate", 
    "sender_name":"Account Security Alerts"  ,
    "trust_signals":[
    "Security-focused language", 
    "login notification format"
    ] ,
    "explanation": "This email informs the user about a recent account login or security-related event." ,
    "is_phishing": false ,
    "difficulty":"hard",
    "red_flags": []
  },

{
  "id": "leg_012",
  "subject": "Flight Booking Confirmation",
  "sender": "tickets@airpeace.com",
  "body": "Your flight has been successfully booked. Check your itinerary for details.",
  "label": "legitimate",  
  "sender_name":"Flight Booking Services"  ,
  "trust_signals":[
  "Travel booking confirmation style", 
  "reservation details"
  ] ,
  "explanation":"This email confirms a flight booking or travel reservation." ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},

{
    "id": "leg_013",
    "subject": "Subscription Renewal Reminder",
    "sender": "billing@spotify.com",
    "body": "Your subscription will renew soon. Ensure your payment method is valid.",
    "label": "legitimate",  
    "sender_name":"Subscription Support"  ,
    "trust_signals":[
    "Subscription renewal notice", 
    "customer service tone"
    ] ,
    "explanation":"This email reminds the user that a subscription is due for renewal soon" ,
    "is_phishing": false ,
    "difficulty":"medium",
    "red flags": []
},

{
    "id": "leg_014",
    "subject": "Password Reset Request",
    "sender": "no-reply@amazon.com",
    "body": "We received a request to reset your password. If this was not you, ignore this message.",
    "label": "legitimate",  
    "sender_name":"Password Assistance Team"  ,
    "trust_signals":[
    "Password reset process", 
    "account recovery wording"
    ] ,
    "explanation":"This email helps the user reset or recover account credentials safely" ,
    "is_phishing": false ,
    "difficulty":"hard",
    "red_flags": []
},

{
  "id": "leg_015",
  "subject": "Your Ride Receipt",
  "sender": "receipts@uber.com",
  "body": "Thanks for riding with us. Here is your trip summary and fare breakdown.",
  "label": "legitimate",
  "sender_name":"Ride Receipts"  ,
  "trust_signals":[
  "Transportation service receipt format", 
  "trip details included"
  ] ,
  "explanation":"This email provides a receipt after completing a transportation ride." ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},
{
  "id": "leg_016",
  "subject": "Course Enrollment Successful",
  "sender": "noreply@coursera.org",
  "body": "You have successfully enrolled in your selected course.",
  "label": "legitimate",
  "sender_name":"Course Enrollment Team"  ,
  "trust_signals":[
  "Educational platform confirmation style", 
  "enrollment success notice"
  ] ,
  "explanation":" This email confirms that the user successfully enrolled in a course." ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},
{
  "id": "leg_017",
  "subject": "Maintenance Notice",
  "sender": "support@bank.com",
  "body": "Our services will be temporarily unavailable due to scheduled maintenance.",
  "label": "legitimate",
  "sender_name":"System Maintenance Team"  ,
  "trust_signals":[
  "Maintenance announcement format", 
  "informational purpose"
  ] ,
  "explanation":"This email informs users about scheduled system maintenance or updates" ,
  "is_phishing": false ,
  "difficulty":"easy",
  "red_flags": []
},



{
    "id":"leg_018",
    "subject":"Your Mobile Data Plan Renewal Successful",
    "sender":"notifications@mtn.ng",
    "body":"Dear Customer,your datasubscription has been successfully renewed.You can continue enjoying uninterrupted internet access.",
    "label":"legitimate",
    "sender_name":"Mobile Network Services"  ,
    "trust_signals":[
    "Telecom provider branding", 
    "renewal confirmation", 
    "customer account context"
    ] ,
    "explanation":" This email confirms successful renewal of a mobile data or service plan.",
    "is_phishing": false ,
    "difficulty":"easy",
    "red_flags": []
    },
 

    {
        "id":"leg_019",
        "subject":"Job Application Received",
        "sender":"careers@flutterwave.com",
        "body":"Hi David,we have received your job application. Our team will review it and get back to you shortly.",
        "label":"legitimate",
        "sender_name":"Recruitment Team"  ,
        "trust_signals":[
        "Professional hiring communication", 
        "application acknowledgment"
        ] ,
        "explanation":" This email confirms that a job application was received successfully." ,
        "is_phishing": false ,
        "difficulty":"easy",
        "red_flags": []
        },
  
        {
            "id":"leg_020",
            "subject":"Your Receipt from Shoprite",
            "sender":"receipts@shoprite.com",
            "body":"Hi David,thank you for shopping with us.Your receipt is attached for your recent purchase.",
            "label":"legitimate",
            "sender_name":"Shoprite Receipts"  ,
            "trust_signals":[
            "Retail purchase receipt format", 
            "transaction confirmation details"
            ] ,
            "explanation":"This email serves as proof of purchase from a Shoprite transaction." ,
            "is_phishing": false ,
            "difficulty":"easy",
            "red_flags": []
            },
            {
            "id":"leg_021",
            "subject":"Gym Membership Renewal Confirmation",
            "sender":"support@fitnessplus.com",
            "body":"Your gym membership has been successfully renewed. We look forward to seeing you.",
            "label":"legitimate",
            "sender_name":"Gym Membership Support"  ,
            "trust_signals":[
            "Membership service communication", 
            "renewal confirmation wording"
            ] ,
            "explanation":"This email confirms renewal of a gym membership subscription." ,
            "is_phishing": false ,
            "difficulty":"easy",
            "red_flags": []
            },
            {
            "id":"leg_022",
            "subject":"Library Book Due Reminder",
            "sender":"notifications@library.org",
            "body":"This is a reminder that your borrowed book is due in 3days.Please return or renew it.",
            "label":"legitimate",
            "sender_name":"Library Notifications"  ,
            "trust_signals":[
            "Educational institution format", 
            "reminder-style communication"
            ] ,
            "explanation":"This email reminds the user about a library due date or borrowed material." ,
            "is_phishing": false ,
            "difficulty":"easy",
            "red_flags": []
            },
            {
            "id":"leg_023",
            "subject":"Your Subscription Has Been Activated",
            "sender":"info@canva.com",
            "body":"Welcome! Your premium subscription is now active. Enjoy all features available on your plan.",
            "label":"legitimate",
            "sender_name":"Subscription Activation Team"  ,
            "trust_signals":[
            "Service activation confirmation", 
            "professional language"
            ] ,
            "explanation":"This email confirms that a service subscription has been activated successfully" ,
            "is_phishing": false ,
            "difficulty":"easy",
            "red_flags": []
            },
   

            {
                "id":"leg_024",
                "subject":"Invoice Available for Your Recent Purchase",
                "sender":"billing@konga.com",
                "body":"Dear David, your invoice is ready. Please visit your account dashboard to view details.",
                "label":"legitimate",
                "sender_name":"Invoice Services"  ,
                "trust_signals":[
                "Invoice notification style", 
                "purchase-related reference"
                ] ,
                "explanation":"This email informs the user that an invoice is available for a recent transaction." ,
                "is_phishing": false ,
                "difficulty":"medium",
                "red_flags": []
                },
                {
                "id":"leg_025",
                "subject":"Your Account Balance Update",
                "sender":"alerts@accessbank.com",
                "body":"Your account balance has been updated. Kindly check your banking app for recent transactions.",
                "label":"legitimate",
                "sender_name":"Banking Notifications"  ,
                "trust_signals":[
                "Account update wording", 
                "financial institution communication style"
                ] ,
                "explanation":"This email provides a normal update about account balance or banking activity." ,
                "is_phishing": false ,
                "difficulty":"medium",
                "red_flags": []
                },
    {
        "id":"leg_026",
        "subject":"Delivery Attempt Notification",
        "sender":"support@fedex.com",
        "body":"We attempted delivery but could not reach you. Please reschedule via our official website.",
        "label":"legitimate",
        "sender_name":"Delivery Attempt Services"  ,
        "trust_signals":[
        "Courier-related message", 
        "package delivery context"
        ] ,
        "explanation":"This email informs the user that a package delivery attempt was made." ,
        "is_phishing": false ,
        "difficulty":"medium",
        "red_flags": []
        },
        {
        "id":"leg_027",
        "subject":"Action Required: Update Your Profile Information",
        "sender":"support@linkedin.com",
        "body":"Hi David, please review and update your profile information to keep your account up to date.",
        "label":"legitimate",
        "sender_name":"Customer Profile Support"  ,
        "trust_signals":[
        "Account management context", 
        "professional customer support wording"
        ] ,
        "explanation":"This email asks the user to review or update profile information safely." ,
        "is_phishing": false ,
        "difficulty":"medium",
        "red_flags": []
        },
        {
        "id":"leg_028",
        "subject":"Reminder:PaymentDueSoon",
        "sender":"billing@dstv.com",
        "body":"Your subscription payment is due soon. Please ensure your account is funded to avoid interruption.",
        "label":"legitimate",
        "sender_name":"Billing Reminder Team"  ,
        "trust_signals":[
        "Payment reminder formatting", 
        "normal billing communication"
        ] ,
        "explanation":"This email reminds the user about an upcoming or pending payment." ,
        "is_phishing": false ,
        "difficulty":"medium",
        "red_flags": []
        },
        {
        "id":"leg_029",
        "subject":"Security Notice: New Device Login",
        "sender":"security@instagram.com",
        "body":"We detected a login from a new device. If this was you, no action is needed.",
        "label":"legitimate",
        "sender_name":"Security Notice Team"  ,
        "trust_signals":[
        "New device login alert", 
        "account protection focus"
        ] ,
        "explanation":"This email warns the user about a login from a new device for security awareness." ,
        "is_phishing": false ,
        "difficulty":"medium",
        "red_flags": []
        },
    
        {
            "id":"leg_030",
            "subject":"Update Your Payment Method",
            "sender":"billing@apple.com",
            "body":"There was an issue with your payment method. Please update it via your account settings.",
            "label":"legitimate",
            "sender_name":"Payment Method Support"  ,
            "trust_signals":[
            "Billing management communication", 
            "subscription-related context"
            ] ,
            "explanation":" This email requests the user to update payment details for continued service access." ,
            "is_phishing": false ,
            "difficulty":"medium",
            "red_flags": []
            },
            {
            "id":"leg_031",
            "subject":"Course Progress Update",
            "sender":"updates@udemy.com",
            "body":"You have made progress in your enrolled course. Continue learning to complete your certification.",
            "label":"legitimate",
            "sender_name":"Learning Progress Team"  ,
            "trust_signals":[
            "Educational progress report style", 
            "course-related context"
            ] ,
            "explanation":"This email provides updates about the users learning or course progress." ,
            "is_phishing": false ,
            "difficulty":"medium",
            "red_flags": []
            },

            {
                "id":"leg_032",
                "subject":"Unusual Activity Detected on Your Account",
                "sender":"security@amazon.com",
                "body":"Hi David, we noticed unusual activity. Please review your account activity to ensure everything is secure.",
                "label":"legitimate",
                "sender_name":"Fraud Detection Team"  ,
                "trust_signals":[
                "Security monitoring language", 
                "fraud prevention context"
                ] ,
                "explanation":"This email alerts the user about suspicious account activity for protection purposes." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },
                {
                "id":"leg_033",
                "subject":"Verify Your Account Information",
                "sender":"support@microsoft.com",
                "body":"We recommend verifying your account details to maintain uninterrupted service.",
                "label":"legitimate",
                "sender_name":"Verification Services"  ,
                "trust_signals":[
                "Verification request style", 
                "account security process"
                ] ,
                "explanation":"This email asks the user to confirm account details as part of a normal verification process." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },
                {
                "id":"leg_034",
                "subject":"Important: Review Your Recent Activity",
                "sender":"alerts@paypal.com",
                "body":"A recent transaction was flagged for review. Please check your account activity for confirmation.",
                "label":"legitimate",
                "sender_name":"Activity Review Team"  ,
                "trust_signals":[
                "Security review notification", 
                "account activity summary format"
                ] ,
                "explanation":"This email asks the user to review recent account activity for safety reasons." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },
                {
                "id":"leg_035",
                "subject":"Login Attempt Notification",
                "sender":"security@facebook.com",
                "body":"We detected a login attempt from an unfamiliar device. Please review your login history.",
                "label":"legitimate",
                "sender_name":"Login Notification Services"  ,
                "trust_signals":[
                "Login alert wording", 
                "security notification style"
                ] ,
                "explanation":"This email informs the user about a recent login attempt or account access event." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },
                {
                "id":"leg_036",
                "subject":"Confirm Your Identity",
                "sender":"no-reply@GtBank.com",
                "body":"To continue using your account, please confirm your identity through the official portal.",
                "label":"legitimate",
                "sender_name":"Identity Confirmation Team"  ,
                "trust_signals":[
                "Identity verification process", 
                "account protection purpose"
                ] ,
                "explanation":"This email requests identity confirmation as part of normal security procedures." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },
                {
                "id":"leg_037",
                "subject":"Security Update Required",
                "sender":"security@google.com",
                "body":"We recommend updating your security settings to enhance account protection.",
                "label":"legitimate",
                "sender_name":"Security Update Team"  ,
                "trust_signals":[
                "Security improvement notification", 
                "professional formatting, account safetycontext"
                ] ,
                "explanation":"This email informs the user about an important account security update." ,
                "is_phishing": false ,
                "difficulty":"hard",
                "red_flags": []
                },

  {
  "id":"phish_001",
  "subject":"Verify Your Account",
  "sender_Name": "GTBank Alert Team",
  "sender":"alert@fakebank.com",
  "body":"Click the link to verify your account immediately.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag":[ 
      "Fake domain and urgency" 
  ],
  "Explanation":"Real banks usually use official domains. This email pressures users to act immediately."
  },
   
  {
  "id":"phish_002",
  "subject":"Your ATM Card Has Been Blocked",
  "sender_Name": "Bank Security Department",
  "sender":"security@bank-warning.com",
  "body":"Your ATM card is blocked. Log in now to reactivate it.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag":[
      "Fear tactic"
  ],
  "Explanation":"The email scares users by claiming the ATM card is blocked."
  },
  
  {
  "id":"phish_003",
  "subject":"Urgent Bank Notification",
  "sender_Name":"Banking Helpdesk Support",
  "sender":"support@banking-helpdesk.com",
  "body":"Your account will be suspended if you fail to update your details.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag":[
       "Threat of suspension"
      ],
  "Explanation":"Threatening suspension is a common phishing trick."
  },
  
  {
  "id":"phish_004",
  "subject":"Confirm Your BVN",
  "sender_Name":"Secure Bank Verification",
  "sender":"verify@secure-bankalert.com",
  "body":"Please confirm your BVN within 24hours to avoid restrictions.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Sensitive info request"
  ],
  "Explanation":"Requesting BVN information is suspicious and dangerous."
  },
  
  {
  "id":"phish_005",
  "subject":"Unauthorized Login Attempt",
  "sender_Name":"Bank Safety Admin",
  "sender":"admin@bank-safealert.com",
  "body":"We detected unusual activity on your account. Verify now.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Unusual activity warning"
  ],
  "Explanation":"Fake unusual activity alerts are used to steal credentials."
  },
  
  {
  "id":"phish_006",
  "subject":"Claim Your Refund",
  "sender_Name":"Refund Processing Team",
  "sender":"refund@bankservice-alert.com",
  "body":"You have a pending refund waiting. Click here to receive it.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Unexpected refund"
  ],
  "Explanation":"Scammers use fake refunds to trick victims into clicking links."
  },
  
  {
  "id":"phish_007",
  "subject":"Bank Transfer Failed",
  "sender_Name":"Banking Update Center",
  "sender":"noreply@banking-update.com",
  "body":"Your recent transfer failed. Re-enter your banking details.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Requests banking details"
  ],
  "Explanation":"Banks rarely ask for sensitive details through email."
  },
  
  {
  "id":"phish_008",
  "subject":"Security Upgrade Required",
  "sender_Name":"Online Banking Security",
  "sender":"security@onlinebanking-secure.com",
  "body":"Update your password immediately to secure your account.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Urgent password reset"
  ],
  "Explanation":"Urgency is used to pressure users into clicking fake links."
  },
  
  {
  "id":"phish_009",
  "subject":"Your Account Is Locked",
  "sender_Name":"Bank Access Support",
  "sender":"alert@bankaccesshelp.com",
  "body":"We locked your account due to suspicious activity. Unlock now.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Account locked scare"
  ],
  "Explanation":"Fake account lock messages are common phishing tactics."
  },
  {
  "id":"phish_010",
  "subject":"Payment Verification Needed",
  "sender_Name":"Payment Verification Team",
  "sender":"verify@payment-bankalert.com",
  "body":"Verify your payment information to avoid transaction failure.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Payment verification pressure"
  ],
  "Explanation":"The email creates panic about transaction failure."
  },
  
  {
  "id":"phish_011",
  "subject":"Update Your Banking App",
  "sender_Name":"Mobile Banking Update",
  "sender":"mobile@bank-updateportal.com",
  "body":"Install the latest banking update to continue using our service.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Fake app update"
  ],
  "Explanation":"Phishing emails may disguise malware as updates."
  },
  
  {
  "id":"phish_012",
  "subject":"Bank Reward Bonus",
  "sender_Name":" Bank Rewards Promo",
  "sender":"reward@bank-promo.com",
  "body":"You won a loyalty reward. Claim it before it expires.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Too-good-to-be-true reward"
  ],
  "Explanation":"Unexpected rewards are common phishing bait."
  },
  
  {
  "id":"phish_013",
  "subject":"AccountVerificationPending",
  "sender_Name":"Banking Alert Helpdesk",
  "sender":"helpdesk@bank-alertsystem.com",
  "body":"Verify your account information to prevent temporary suspension.",
  "difficulty":"easy",
  "Red Flag": [
      " Poor formatting"
  ],
  "Explanation":"Unprofessional formatting is often a phishing sign."
  },
  
  {
  "id":"phish_014",
  "subject":"Immediate Action Required",
  "sender_Name":"Bank Security Care",
  "sender":"care@bank-securityalert.com",
  "body":"Your online banking access will expire today unless verified.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Extreme urgency"
  ],
  "Explanation":" The email pressures users by saying action is needed today."
  },
  
  {
  "id":"phish_015",
  "subject":"Banking Login Error",
  "sender_Name":"Banking Fix Portal",
  "sender":"service@bank-fixportal.com",
  "body":"We detected an issue with your account login. Resolve it immediately.",
  "label": "phishing",
  "difficulty":"easy",
  "Red Flag": [
      "Immediate action request"
  ],
  "Explanation":"Scammers often create fake account problems."
  },
  
                                             
  
  {
  "id":"phish_016",
  "subject":"Important: Suspicious Transaction Detected",
  "sender_Name":"Chase Secure Mail",
  "sender":"security@chase-securemail.com",
  "body":"We noticed a suspicious withdrawal attempt from your account. Please review and confirm your identity immediately.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Bank impersonation"
  ],
  "Explanation":"The sender tries to look like a legitimate bank using a fake domain."
  },
  
  {
  "id":"phish_017",
  "subject":"Your Mobile Banking Access Will Expire",
  "sender_Name":"Banking Authentication Support",
  "sender":"support@banking-authentication.com",
  "body":"Your mobile banking session has expired. Log in again to continue uninterrupted service.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Session expiration warning"
  ],
  "Explanation":"Fake login expiration notices are commonly used to steal credentials."
  },
  
  {
  "id":"phish_018",
  "subject":"Action Required: Debit Card Verification",
  "sender_Name":"Customer Bank Help",
  "sender":"verify@customer-bankhelp.com",
  "body":"For security purposes, verify your debit card details to prevent deactivation.",  
  "label": "phishing", 
  "difficulty":"medium",
  "Red Flag": [
      "Debit card verification request"
  ],
  "Explanation":"Legitimate banks rarely request card details through email."
  },
  
  {
  "id":"phish_019",
  "subject":"Transaction Declined Notification",
  "sender_Name":"Banking Service Center",
  "sender":"service@banking-center.com",
  "body":"A recent payment was declined due to account verification failure. Update your records now.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      " Banking Service Center"
  ],
  "Explanation":"The email creates fear about payment failure to trick users."
  },
  
  {
  "id":"phish_020",
  "subject":"New Security Patch Installed",
  "sender_Name":"Bank Security Team",
  "sender":"admin@banksecurityteam.com",
  "body":"We upgraded our security systems. Re-login to confirm your identity and restore access.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Fake security update"
  ],
  "Explanation":"Attackers pretend security upgrades require account verification."
  },
  
  {
  "id":"phish_021",
  "subject":"Tax Refund Processed",
  "sender_Name":"Finance Refund Services",
  "sender":"refund@finance-bankservices.com",
  "body":"Your tax refund has been processed successfully. Confirm your account to receive payment.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Tax refund scam"
  ],
  "Explanation":"Fake tax refunds are used to lure victims into revealing details."
  },
  
  {
  "id":"phish_022",
  "subject":"Your Online Banking Profile Needs Attention",
  "sender_Name":"Banking Support Center",
  "sender":"care@bankingsupportcenter.com",
  "body":"We identified incomplete information in your profile. Update your account details today.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Generic support domain"
  ],
  "Explanation":"The email sounds official but is linked to an unknown bank."
  },
  
  {
  "id":"phish_023",
  "subject":"Failed Login Attempts Recorded",
  "sender_Name":"Bank Alert Security",
  "sender":"security@bank-alertcenter.com",
  "body":"Several failed login attempts were detected on your account. Reset your password immediately.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Failed login alert"
  ],
  "Explanation":"The email creates panic about account compromise."
  },
  
  {
  "id":"phish_024",
  "subject":"Pending Wire Transfer Confirmation",
  "sender_Name":"Banking Payments Transfer",
  "sender":"transfer@banking-payments.com",
  "body":"A wire transfer is awaiting confirmation. Review the transaction to avoid cancellation.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Wire transfer confirmation"
  ],
  "Explanation":"Fake transaction notifications are used to steal information."
  },
  
  {
  "id":"phish_025",
  "subject":"Customer Satisfaction Reward",
  "sender_Name":"Rewards Center Promo",
  "sender":"promo@bank-rewardscenter.com",
  "body":"You have been selected for a special banking reward. Complete verification to claim it.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Verification for reward claim"
  ],
  "Explanation":"Scammers use fake rewards to collect personal details."
  },
  
  {
  "id":"phish_026",
  "subject":"Account Access Limited",
  "sender_Name":"Secure Bank Login Notice",
  "sender":"notice@securebank-login.com",
  "body":"Your banking access has been temporarily limited due to unusual activity.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      " Access limitation scare"
  ],
  "Explanation":"The email pressures users by saying access has been restricted."
  },
  
  {
  "id":"phish_027",
  "subject":"Digital Banking Update Required",
  "sender_Name":"Secure Banking Update",
  "sender":"update@bank-secureservice.com",
  "body":"To continue using digital banking, please install the latest security update.",
  "label": "phishing",
  "difficulty":"medium",
  "Red Flag": [
      "Mandatory update request"
  ],
  "Explanation":"Fake updates can redirect users to malicious websites."
  },
  
                                                  
  
  {
  "id":"phish_028",
  "subject":"Security Notice Regarding Your Online Banking Session",
  "sender_Name":"Access Bank Security Notifications",
  "sender":"security.notifications@secure-accessbank.com",
  "body":"Aspart of our fraud prevention measures, we detected an unrecognized login from a new device. Please authenticate your identity.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      " Professional security language"
  ],
  "Explanation":"The email sounds highly professional to appear legitimate."
  },
  
  {
  "id":"phish_029",
  "subject":"Scheduled Banking Maintenance Completed",
  "sender_Name":"Banking Update Customer Service",
  "sender":"customerservice@banking-updateservice.com",
  "body":"Following our maintenance update, some customers must revalidate credentials to avoid disruption.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Fake maintenance notice"
  ],
  "Explanation":"Attackers use maintenance updates to request credentials."
  },
  
  {
  "id":"phish_030",
  "subject":"Action Needed To Protect Your Funds",
  "sender_Name":"Fraud Prevention Finance Group",
  "sender":"fraudprevention@secure-financegroup.com",
  "body":"Our monitoring system identified irregular activity patterns associated with your banking profile.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Vague fraud warning"
  ],
  "Explanation":"The email sounds serious but gives no clear details."
  },
  
  {
  "id":"phish_031",
  "subject":"Multi-Factor Authentication Enrollment Reminder",
  "sender_Name":"Bank Security Identity Team",
  "sender":"identity@bank-securityportal.com",
  "body":"Customers are required to enroll in enhanced authentication protection immediately.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Multi-Factor Authentication enrollment pressure"
  ],
  "Explanation":"Attackers imitate real security systems like multi-factor authentication."
  },
  
  {
  "id":"phish_032",
  "subject":"PaymentReviewRequest",
  "sender_Name":"Banking Compliance Review Team",
  "sender":"compliance@banking-reviewteam.com",
  "body":"Your recent international transaction requires additional verification before processing.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Formal compliance language"
  ],
  "Explanation":"Formal wording is used to make the phishing email appear trustworthy."
  },
  
  {
  "id":"phish_033",
  "subject":"Notice Of Temporary Access Restriction",
  "sender_Name":"Bank Client Protection Support",
  "sender":"support@bank-clientprotection.com",
  "body":"Temporary restrictions have been applied to your banking profile due to failed verification attempts.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Temporary restriction notice"
  ],
  "Explanation":"Fake restrictions create panic and pressure quick action."
  },
  
  {
  "id":"phish_034",
  "subject":"Updated Privacy And Security Policy",
  "sender_Name":"Secure Policy Notifications",
  "sender":"notifications@bank-securepolicy.com",
  "body":"We updated our customer security policy. Confirm acceptance to continue secure banking access.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Fake policy update"
  ],
  "Explanation":"Scammers disguise phishing emails as policy changes."
  },
  
  {
  "id":"phish_035",
  "subject":"Business Account Confirmation Required",
  "sender_Name":"Business Finance Verification",
  "sender":"business-support@finance-verification.com",
  "body":"Business clients are advised to confirm account activity to avoid payment interruptions.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      " Business account targeting"
  ],
  "Explanation":"Business users are often targeted because company accounts may contain more funds."
  },
  
  {
  "id":"phish_036",
  "subject":"Digital Token Synchronization Failure",
  "sender_Name":"Secure Bank Authentication Team",
  "sender":"authentication@securebank-loginteam.com",
  "body":"We were unable to synchronize your digital security token.Re-authentication is required.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      "Technical security wording"
  ],
  "Explanation":"Complex security terms are used to sound legitimate."
  },
  
  {
  "id":"phish_037",
  "subject":"Fraud Detection System Alert",
  "sender_Name":"Secure Financial Monitoring",
  "sender":"monitoring@secure-financialnetwork.com",
  "body":"Our fraud prevention engine temporarily paused account activity pending identity confirmation.",
  "label": "phishing",
  "difficulty":"hard",
  "Red Flag": [
      " Fraud monitoring alert"
  ],
  "Explanation":"The email uses fake fraud alerts to pressure victims into verifying identity."
  }
  ]
  
  