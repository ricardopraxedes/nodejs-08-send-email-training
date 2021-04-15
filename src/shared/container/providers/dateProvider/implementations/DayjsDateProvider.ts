import dayjs from "dayjs";
import { IDateProvider } from "../IDateProvider";

class DayJSDateProvider implements IDateProvider {
  addDays(days: number): Date {
    return dayjs().add(days, "day").toDate();
  }
}

export { DayJSDateProvider };
