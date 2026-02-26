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
    @import url(&quot;https://fonts.googleapis.com/css?family&#x3D;Lato:400,700&amp;display&#x3D;swap&quot;);
    
    /* Base styles with Handlebars variables for email compatibility */
    /* Email Styling & Generation powered by Supa-Tools.com */
    
    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      background-color: #fff7ed;
    }
    
    a {
      color: #ea580c;
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
      font-family: "Lato", Helvetica, Arial, sans-serif;
    }
    
    h1 {
      margin-top: 0;
      color: #1c1917;
      font-size: 22px;
      font-weight: bold;
      text-align: left;
    }
    
    h2 {
      margin-top: 0;
      color: #1c1917;
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
      color: #44403c;
    }
    
    .button {
      background-color: #ea580c !important;
      border-top: 10px solid #ea580c !important;
      border-right: 18px solid #ea580c !important;
      border-bottom: 10px solid #ea580c !important;
      border-left: 18px solid #ea580c !important;
      display: inline-block;
      color: #ffffff !important;
      text-decoration: none !important;
      border-radius: 6px;
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
      color: #ffffff !important;
      text-decoration: none !important;
      background-color: #ea580c !important;
    }
    
    a.button:hover,
    a.button:active,
    a.button:visited,
    a.button:focus,
    a.button:link {
      color: #ffffff !important;
      text-decoration: none !important;
    }
    
    .code-box {
      background-color: #ffffff;
      border: 1px solid #fed7aa;
      border-radius: 6px;
      padding: 20px;
      text-align: center;
      margin: 30px 0;
    }
    
    .code {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 8px;
      color: #1c1917;
      font-family: "Courier New", Courier, monospace;
    }
    
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      background-color: #fff7ed;
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
      color: #ea580c;
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
      background-color: #ffffff;
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
     color: #78716c;
     font-size: 12px;
     line-height: 1.4;
     margin: .2em 0;
   }

    .email-footer a {
      color: #78716c;
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
      padding: 28px;
    }
    
    .sub {
      font-size: 12px;
      color: #78716c;
    }
    
    /* Ensure mailing address content matches footer text size */
    .sub p {
      font-size: 12px !important;
      color: #78716c !important;
      margin: 0.4em 0 !important;
    }
    
    /* Style TipTap content in footer */
    .email-footer .tiptap-paragraph,
    .email-footer p.tiptap-paragraph,
    .email-footer .content-cell .tiptap-paragraph {
      font-size: 12px !important;
      color: #78716c !important;
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
      border-top: 1px solid #fed7aa;
    }
    
    /* Fallback text section for confirmation links */
    .fallback-text {
      margin-top: 40px;
      padding-top: 25px;
      border-top: 1px solid #fed7aa;
    }
    
    .fallback-text p {
      margin: .2em 0;
      color: #78716c;
      font-size: 12px;
      line-height: 1.4;
    }
    
    /* Make the link paragraph even closer to the text above */
    .fallback-text p + p {
      margin-top: .1em;
    }
    
    .fallback-text .fallback-link {
      color: #78716c;
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
        background-color: #1c1917 !important;
      }
      .email-footer .content-cell {
        background-color: #1c1917 !important;
      }
      .email-footer td {
        background-color: #1c1917 !important;
      }
      .email-body_inner {
        background-color: #292524 !important;
      }
      p, td, span, ul, ol, blockquote {
        color: #e7e5e4 !important;
      }
      h1, h2, h3, .code {
        color: #f5f5f4 !important;
      }
      a {
        color: #fb923c !important;
      }
      .button,
      a.button {
        background-color: #fb923c !important;
        border-top-color: #fb923c !important;
        border-right-color: #fb923c !important;
        border-bottom-color: #fb923c !important;
        border-left-color: #fb923c !important;
        border-color: #fb923c !important;
        color: #ffffff !important;
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
        background-color: #fb923c !important;
        border-top-color: #fb923c !important;
        border-right-color: #fb923c !important;
        border-bottom-color: #fb923c !important;
        border-left-color: #fb923c !important;
        border-color: #fb923c !important;
        color: #ffffff !important;
      }
      .email-masthead_name {
        color: #fb923c !important;
      }
      .email-footer p {
        color: #a8a29e !important;
      }
      .sub {
        color: #a8a29e !important;
      }
      .sub p {
        color: #a8a29e !important;
        font-size: 12px !important;
      }
      .email-footer .tiptap-paragraph,
      .email-footer p.tiptap-paragraph {
        color: #a8a29e !important;
        font-size: 12px !important;
      }
      .email-footer .content-cell .tiptap-paragraph {
        color: #a8a29e !important;
        font-size: 12px !important;
      }
      .code-box {
        background-color: #292524 !important;
        border-color: #9a3412 !important;
      }
      .body-sub {
        border-top-color: #9a3412 !important;
      }
      .fallback-text {
        border-top-color: #9a3412 !important;
      }
      .fallback-text p {
        color: #a8a29e !important;
      }
      .fallback-text .fallback-link {
        color: #a8a29e !important;
      }
    }
    
    /* Custom CSS will be inserted here */
    
    /* SupaTools link state overrides */
    a:link, a:visited, a:hover, a:active, a:focus {
      color: #ea580c !important;
      text-decoration: underline !important;
    }
    .button:link, .button:visited, .button:hover, .button:active, .button:focus,
    a.button:link, a.button:visited, a.button:hover, a.button:active, a.button:focus {
      color: #ffffff !important;
      text-decoration: none !important;
    }
    @media (prefers-color-scheme: dark) {
      a:link, a:visited, a:hover, a:active, a:focus {
        color: #fb923c !important;
        text-decoration: underline !important;
      }
      .button:link, .button:visited, .button:hover, .button:active, .button:focus,
      a.button:link, a.button:visited, a.button:hover, a.button:active, a.button:focus {
        color: #ffffff !important;
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
              <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="word-break: break-word; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #ffffff;" bgcolor="#ffffff">
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell" style="word-break: break-word; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; padding: 28px;">
                      <div class="f-fallback">
                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #44403c;">Hola {{ .Data.display_name }},</p>
<p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #44403c;">Estás a un paso de confirmar tu cuenta de JAMIT. Por favor,haz click en el botón de aquí abajo para confirmar tu dirección de correo electrónico.</p>

      
      <!--[if mso]>
      <div align="center">
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{ .ConfirmationURL }}" style="height:36px;v-text-anchor:middle;width:200px;" arcsize="16.67%" stroke="f" fillcolor="#ea580c">
          <w:anchorlock/>
          <center style="color:#ffffff;font-family:'Lato', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;">
            Activar Cuenta
          </center>
        </v:roundrect>
      </div>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <table style="margin: 30px auto; width: auto;" border="0" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center" bgcolor="#ea580c" style="word-break: break-word; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; border-radius: 6px; background-color: #ea580c;">
            <a href="{{ .ConfirmationURL }}" target="_blank" rel="noopener noreferrer" class="button" style="box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; border: solid 1px #ea580c; border-radius: 6px; box-sizing: border-box; cursor: pointer; font-size: 16px; font-weight: bold; margin: 0; padding: 10px 20px; text-transform: capitalize; border-color: #ea580c; text-align: center; display: inline-block; background-color: #ea580c !important; border-top: 10px solid #ea580c !important; border-right: 18px solid #ea580c !important; border-bottom: 10px solid #ea580c !important; border-left: 18px solid #ea580c !important; color: #ffffff !important; text-decoration: none !important;">
              Activar Cuenta
            </a>
          </td>
        </tr>
      </table>
      <!--<![endif]-->
    <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #44403c;">Si no te has creado una cuenta en JAMIT, puedes ignorar este mensaje. (O acceder, y ver que se cuece)</p>
<p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #44403c;">¿Necesitas ayuda? Puedes encontrarnos en hola@jamit.es</p><p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #44403c;">¡Gracias!<br>JAMIT Team</p>

      <div class="fallback-text" style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #fed7aa;">
        <p class="f-fallback sub" style="margin: .2em 0; color: #78716c; font-size: 12px; line-height: 1.4;">Si tienes problemas con el botón, copia y pega este enlace en tu navegador.</p>
        <p class="f-fallback sub" style="margin: .2em 0; color: #78716c; font-size: 12px; line-height: 1.4; margin-top: .1em;"><a href="{{ .ConfirmationURL }}" class="fallback-link" style="color: #78716c; text-decoration: underline; word-break: break-all; font-size: 12px;">{{ .ConfirmationURL }}</a></p>
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
