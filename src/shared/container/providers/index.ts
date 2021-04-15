import { container } from "tsyringe";
import { DayJSDateProvider } from "./dateProvider/implementations/DayjsDateProvider";
import { IDateProvider } from "./dateProvider/IDateProvider";
import { EtherealMailProvider } from "./mailProvider/implementations/EtherealMailProvider";
import { IMailProvider } from "./mailProvider/IMailProvider";

container.registerInstance<IMailProvider>(
  "MailProvider",
  new EtherealMailProvider()
);

container.registerSingleton<IDateProvider>("DateProvider", DayJSDateProvider);
