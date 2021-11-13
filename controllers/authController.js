exports.sendEmail = (req, res) => {
  const { name, email, message, whatsappNumber } = req.body;
  // console.log(req.body);
  const mailjet = require("node-mailjet").connect(
    "ee3e3410915e8ad4b0344021b27bd403",
    "4cea7055c258108ad25701e49801a340"
  );
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "fullstacknodedeveloper@gmail.com",
          Name: "WebZeco",
        },
        To: [
          {
            Email: "nodebazaar@gmail.com",
          },
          {
            Email: "usamaprince145@gmail.com",
          },
          {
            Email: "aliqadeer9233@gmail.com",
          },
        ],
        Subject: "clint message",
        TextPart: message,
        HTMLPart: `
<!doctype html>
<html lang="en-US">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>message from clint</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://rakeshmandal.com" title="logo" target="_blank">
                            <img width="60" src="https://webzecos.herokuapp.com/assets/img/portfolio/logos/logo5.png" title="logo" alt="logo">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Message from client</h1>
                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                      
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            ${message}
                                        </p>
                                                                            <h2> Clint info</h2>
                            
                                      <p> ${name}<p/>
                                      <p> ${email}<p/>
                                      <p>${whatsappNumber}</p>
                                        <a href=mailto:${email}
                                            style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reply</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.webzeco.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>
</html>`,
        CustomID: "sendMessagetodevelopers",
      },
    ],
  });
  request
    .then((result) => {
      // console.log(result);
      res.status(200).json({
        status: "success",
      });
      //   console.log(result.body)
    })
    .catch((err) => {
      res.status(401).json({
        status: "failed",
      });
      // console.log(err);
    });
};
exports.signup = (req, res) => {
  res.status(200).json({
    title: "Signup",
  });
};
// const {name,email,subject,message}=req.body;
// const client=new Twilio(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//       );
// client.messages
//       .create({
//          body: `
//              name:${name},
//              email:${email},
//              subject:${subject},
//              message:${message}
//          `,
//          messagingServiceSid:process.env.MESSAGINGSERVICESID,
//          to: process.env.SEND_TO
//        })
//       .then(message => {
//         res.status(200).json( {
//             message
//         });
//       })
//       .done();

// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// var apiKey = defaultClient.authentications['api-key'];
// // apiKey.apiKey = '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';
// apiKey.apiKey = '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'
// var apiInstance = new SibApiV3Sdk.ContactsApi();

// var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
// createContact = { 'email' : "fullstacknodedeveloper@gmail.com" };

// apiInstance.createContact(createContact).then(function(data) {
//   console.log('API called successfully : ' + data);
//   res.status(200).json({
//       data
//   })
// },function(error) {
//     res.status(200).json({error});
// });

// MAILJET_PARAM_1=d96d83cc8662956df302dbc4ba7f120e
// MAILJET_PARAM_2=5b24bce943d9e2df92e97684d4ba6b1e
// PHONE_NUMBER=+12027598783
// MESSAGINGSERVICESID=MGb1c1b1ecb395ae990a8d390f01de962b
// SEND_TO=+923179520496
// PORT=3000
// NODE_ENV=developement
