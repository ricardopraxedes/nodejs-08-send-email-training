import fs from "fs";
import handlebars from "handlebars";
import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
  Transporter,
} from "nodemailer";
import { IMailProvider } from "../IMailProvider";

class EtherealMailProvider implements IMailProvider {
  private transporter: Transporter;

  constructor() {
    createTestAccount()
      .then((account) => {
        this.transporter = createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });
      })
      .catch((error) => console.log(error));
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    const templateString = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateString);

    const templateHtml = templateParse(variables);

    await this.transporter
      .sendMail({
        to,
        from: "noreply@test.com",
        subject,
        html: templateHtml,
      })
      .then((info) => {
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", getTestMessageUrl(info));
      })
      .catch((err) => console.error(err));
  }
}

export { EtherealMailProvider };
