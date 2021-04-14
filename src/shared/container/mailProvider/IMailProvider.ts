interface IMailProvider {
  sendMail(to: string): Promise<void>;
}

export { IMailProvider };
