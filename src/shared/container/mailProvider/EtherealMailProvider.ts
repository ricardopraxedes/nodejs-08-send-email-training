import { IMailProvider } from "./IMailProvider";

class EtherealMailProvider implements IMailProvider {
  sendMail(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { EtherealMailProvider };
