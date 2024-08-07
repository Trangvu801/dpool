declare module 'nodemailer' {
    import * as Transport from 'nodemailer/lib/mailer';
    import SMTPTransport from 'nodemailer/lib/smtp-transport';
  
    export function createTransport(options: SMTPTransport.Options): Transport;
  
    export interface SentMessageInfo {
      envelope: { from: string; to: string[] };
      messageId: string;
      accepted: string[];
      rejected: string[];
      pending: string[];
      response: string;
    }
  
    export namespace createTestAccount {
      function createTestAccount(callback: (err: Error | null, testAccount: TestAccount) => void): void;
      function createTestAccount(): Promise<TestAccount>;
    }
  
    export interface TestAccount {
      user: string;
      pass: string;
      smtp: SMTPTransport.Options;
      imap: any;
      pop3: any;
      web: string;
    }
  
    export interface Transporter<SentMessageInfo = any> {
      sendMail(mailOptions: SendMailOptions, callback: (err: Error | null, info: SentMessageInfo) => void): void;
      sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo>;
      verify(callback: (err: Error | null, success: true) => void): void;
      verify(): Promise<true>;
    }
  
    export interface SendMailOptions {
      from?: string | Address;
      to?: string | Address | Array<string | Address>;
      cc?: string | Address | Array<string | Address>;
      bcc?: string | Address | Array<string | Address>;
      subject?: string;
      text?: string;
      html?: string | Buffer | Readable;
      attachments?: Attachment[];
      [key: string]: any;
    }
  
    export interface Address {
      name: string;
      address: string;
    }
  
    export interface Attachment {
      filename?: string;
      content?: string | Buffer | Readable;
      path?: string | Url;
      href?: string;
      contentType?: string;
      encoding?: string;
      contentDisposition?: string;
      cid?: string;
      raw?: string | Buffer | Readable;
      [key: string]: any;
    }
  }
  