export default {
	async fetch(request): Promise<Response> {
		const html = `<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title></title>
    <style type="text/css" rel="stylesheet" media="all">
    @import url(&quot;https://fonts.googleapis.com/css?family&#x3D;Nunito+Sans:400,700&amp;display&#x3D;swap&quot;);

    /* Base styles with Handlebars variables for email compatibility */
    /* Email Styling & Generation powered by Supa-Tools.com */

    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      background-color: #F2F4F6;
    }

    a {
      color: #6000C7;
    }

    a img {
      border: none;
    }

    td {
      word-break: break-word;
    }

    body,
    td,
    th {
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    }

    h1 {
      margin-top: 0;
      color: #333333;
      font-size: 22px;
      font-weight: bold;
      text-align: left;
    }

    h2 {
      margin-top: 0;
      color: #333333;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    td,
    th {
      font-size: 16px;
    }

    p {
      margin: .4em 0 1.1875em;
      font-size: 16px;
      line-height: 1.625;
      color: #51545E;
    }

    .button {
      background-color: #6000C7 !important;
      border-top: 10px solid #6000C7 !important;
      border-right: 18px solid #6000C7 !important;
      border-bottom: 10px solid #6000C7 !important;
      border-left: 18px solid #6000C7 !important;
      display: inline-block;
      color: #FFFFFF !important;
      text-decoration: none !important;
      border-radius: 3px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
      -webkit-text-size-adjust: none;
      box-sizing: border-box;
      font-weight: bold;
    }


    .button:hover,
    .button:active,
    .button:visited,
    .button:focus,
    .button:link {
      color: #FFFFFF !important;
      text-decoration: none !important;
      background-color: #6000C7 !important;
    }

    a.button:hover,
    a.button:active,
    a.button:visited,
    a.button:focus,
    a.button:link {
      color: #FFFFFF !important;
      text-decoration: none !important;
    }

    .code-box {
      background-color: #FFFFFF;
      border: 1px solid #DEDEDE;
      border-radius: 3px;
      padding: 20px;
      text-align: center;
      margin: 30px 0;
    }

    .code {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 8px;
      color: #333333;
      font-family: "Courier New", Courier, monospace;
    }

    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      background-color: #F2F4F6;
    }

    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }

    .email-masthead {
      padding: 25px 0;
      text-align: center;
    }

    .email-masthead_name {
      font-size: 14px;
      font-weight: bold;
      color: #A8AAAF;
      text-decoration: none;
    }

    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }

    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      background-color: #FFFFFF;
    }

    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }

   .email-footer p {
     color: #A8AAAF;
     font-size: 12px;
     line-height: 1.4;
     margin: .2em 0;
   }

    .email-footer a {
      color: #A8AAAF;
      font-size: 12px;
      text-decoration: underline;
    }

    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }

    .content-cell {
      padding: 24px;
    }

    .sub {
      font-size: 12px;
      color: #A8AAAF;
    }

    /* Ensure mailing address content matches footer text size */
    .sub p {
      font-size: 12px !important;
      color: #A8AAAF !important;
      margin: 0.4em 0 !important;
    }

    /* Style TipTap content in footer */
    .email-footer .tiptap-paragraph,
    .email-footer p.tiptap-paragraph,
    .email-footer .content-cell .tiptap-paragraph {
      font-size: 12px !important;
      color: #A8AAAF !important;
      margin: 0.4em 0 !important;
      text-align: center !important;
    }

    .align-center {
      text-align: center;
    }

    /* Fallback section spacer and divider before footer */
    .body-sub {
      width: 100%;
      margin: 40px 0 0;
      padding-top: 20px;
      border-top: 1px solid #ECEDEE;
    }

    /* Fallback text section for confirmation links */
    .fallback-text {
      margin-top: 40px;
      padding-top: 25px;
      border-top: 1px solid #ECEDEE;
    }

    .fallback-text p {
      margin: .2em 0;
      color: #A8AAAF;
      font-size: 12px;
      line-height: 1.4;
    }

    /* Make the link paragraph even closer to the text above */
    .fallback-text p + p {
      margin-top: .1em;
    }

    .fallback-text .fallback-link {
      color: #A8AAAF;
      text-decoration: underline;
      word-break: break-all;
      font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
      .email-body_inner,
      .email-footer {
        width: 100% !important;
      }
    }

    @media (prefers-color-scheme: dark) {
      body,
      .email-wrapper,
      .email-body,
      .email-content,
      .email-masthead,
      .email-footer {
        background-color: #333333 !important;
      }
      .email-footer .content-cell {
        background-color: #333333 !important;
      }
      .email-footer td {
        background-color: #333333 !important;
      }
      .email-body_inner {
        background-color: #444444 !important;
      }
      p, td, span, ul, ol, blockquote {
        color: #FFFFFF !important;
      }
      h1, h2, h3, .code {
        color: #FFFFFF !important;
      }
      a {
        color: #9D7AFF !important;
      }
      .button,
      a.button {
        background-color: #9D7AFF !important;
        border-top-color: #9D7AFF !important;
        border-right-color: #9D7AFF !important;
        border-bottom-color: #9D7AFF !important;
        border-left-color: #9D7AFF !important;
        border-color: #9D7AFF !important;
        color: #FFFFFF !important;
      }
      .button:hover,
      .button:active,
      .button:visited,
      .button:focus,
      .button:link,
      a.button:hover,
      a.button:active,
      a.button:visited,
      a.button:focus,
      a.button:link {
        background-color: #9D7AFF !important;
        border-top-color: #9D7AFF !important;
        border-right-color: #9D7AFF !important;
        border-bottom-color: #9D7AFF !important;
        border-left-color: #9D7AFF !important;
        border-color: #9D7AFF !important;
        color: #FFFFFF !important;
      }
      .email-masthead_name {
        color: #CCCCCC !important;
      }
      .email-footer p {
        color: #CCCCCC !important;
      }
      .sub {
        color: #CCCCCC !important;
      }
      .sub p {
        color: #CCCCCC !important;
        font-size: 12px !important;
      }
      .email-footer .tiptap-paragraph,
      .email-footer p.tiptap-paragraph {
        color: #CCCCCC !important;
        font-size: 12px !important;
      }
      .email-footer .content-cell .tiptap-paragraph {
        color: #CCCCCC !important;
        font-size: 12px !important;
      }
      .code-box {
        background-color: #444444 !important;
        border-color: #555555 !important;
      }
      .body-sub {
        border-top-color: #555555 !important;
      }
      .fallback-text {
        border-top-color: #555555 !important;
      }
      .fallback-text p {
        color: #CCCCCC !important;
      }
      .fallback-text .fallback-link {
        color: #CCCCCC !important;
      }
    }

    /* Custom CSS will be inserted here */

    /* SupaTools link state overrides */
    a:link, a:visited, a:hover, a:active, a:focus {
      color: #6000C7 !important;
      text-decoration: underline !important;
    }
    .button:link, .button:visited, .button:hover, .button:active, .button:focus,
    a.button:link, a.button:visited, a.button:hover, a.button:active, a.button:focus {
      color: #FFFFFF !important;
      text-decoration: none !important;
    }
    @media (prefers-color-scheme: dark) {
      a:link, a:visited, a:hover, a:active, a:focus {
        color: #9D7AFF !important;
        text-decoration: underline !important;
      }
      .button:link, .button:visited, .button:hover, .button:active, .button:focus,
      a.button:link, a.button:visited, a.button:hover, a.button:active, a.button:focus {
        color: #FFFFFF !important;
        text-decoration: none !important;
      }
    }
    </style>
    <!--[if mso]>
    <style type="text/css">
      .f-fallback,
      .footer {
        font-family: Arial, sans-serif;
      }
    </style>
    <![endif]-->
  </head>
  <body style="font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; height: 100%; margin: 0; -webkit-text-size-adjust: none; width: 100% !important;">
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; 
-premailer-cellspacing: 0; background-color: #F2F4F6;" bgcolor="#F2F4F6">
      <tr>
        <td align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
          <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; 
-premailer-cellspacing: 0;">
            <tr>
              <td class="email-masthead" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 25px 0; text-align: center;" 
align="center">
                <span class="email-masthead email-masthead_name" style="padding: 25px 0; text-align: center; font-size: 14px; font-weight: bold; color: #A8AAAF; text-decoration: none;">
                  JAMIT
                </span>
              </td>
            </tr>
            <!-- Email Body -->
            <tr>
              <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; width: 
100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 
570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;" bgcolor="#FFFFFF">
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 24px;">
                      <div class="f-fallback">
                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Hola {{ .Data.display_name }},</p>
<p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Estás a un paso de confirmar tu cuenta de JAMIT. Por favor,haz click en el botón de aquí abajo para confirmar 
tu dirección de correo electrónico.</p>


      <!--[if mso]>
      <div align="center">
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:1234/auth/confirm?token_hash={{ .TokenHash }}&type=signup" 
style="height:36px;v-text-anchor:middle;width:200px;" arcsize="8.33%" stroke="f" fillcolor="#6000C7">
          <w:anchorlock/>
          <center style="color:#FFFFFF;font-family:'Nunito Sans', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;">
            Activar Cuenta
          </center>
        </v:roundrect>
      </div>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <table style="margin: 30px auto; width: auto;" border="0" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center" bgcolor="#6000C7" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; border-radius: 3px; background-color: 
#6000C7;">
            <a href="http://localhost:1234/auth/confirm?token_hash={{ .TokenHash }}&type=signup" target="_blank" rel="noopener noreferrer" class="button" style="box-shadow: 0 2px 3px rgba(0, 0, 0, 
0.16); -webkit-text-size-adjust: none; border: solid 1px #6000C7; border-radius: 3px; box-sizing: border-box; cursor: pointer; font-size: 16px; font-weight: bold; margin: 0; padding: 10px 20px; 
text-transform: capitalize; border-color: #6000C7; text-align: center; display: inline-block; background-color: #6000C7 !important; border-top: 10px solid #6000C7 !important; border-right: 18px 
solid #6000C7 !important; border-bottom: 10px solid #6000C7 !important; border-left: 18px solid #6000C7 !important; color: #FFFFFF !important; text-decoration: none !important;">
              Activar Cuenta
            </a>
          </td>
        </tr>
      </table>
      <!--<![endif]-->
    <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Si no te has creado una cuenta en JAMIT, puedes ignorar este mensaje. (O acceder, y ver que se cuece)</p>
<p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">¿Necesitas ayuda? Puedes encontrarnos en hola@jamit.es</p><p style="margin: .4em 0 1.1875em; font-size: 16px; 
line-height: 1.625; color: #51545E;">¡Gracias!<br>JAMIT Team</p>

      <div class="fallback-text" style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #ECEDEE;">
        <p class="f-fallback sub" style="margin: .2em 0; color: #A8AAAF; font-size: 12px; line-height: 1.4;">If you're having trouble with the button above, copy and paste the URL below into your 
web browser.</p>
        <p class="f-fallback sub" style="margin: .2em 0; color: #A8AAAF; font-size: 12px; line-height: 1.4; margin-top: .1em;"><a href="http://localhost:1234/auth/confirm?token_hash={{ .TokenHash 
}}&type=signup" class="fallback-link" style="color: #A8AAAF; text-decoration: underline; word-break: break-all; font-size: 12px;">http://localhost:1234/auth/confirm?token_hash={{ .TokenHash 
}}&type=signup</a></p>
      </div>

                        <!-- Optional fallback text section -->

                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; 
-premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                  <tr>
                    <td class="content-cell" align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 24px;">
                      <p class="footer footer-text sub align-center" style="line-height: 1.4; font-size: 12px !important; color: #A8AAAF !important; text-align: center !important; margin: 0.4em 0 
!important;">© 2026 Your Company. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
