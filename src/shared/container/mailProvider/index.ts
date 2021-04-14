import { container } from "tsyringe";
import { EtherealMailProvider } from "./EtherealmailProvider";
import { IMailProvider } from "./IMailProvider";

container.registerInstance<IMailProvider>(
  "MailProvider",
  new EtherealMailProvider()
);
