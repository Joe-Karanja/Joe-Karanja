import { Injectable } from "@angular/core";
import { MESSAGES } from "./mock-messages";
import { Message } from "./message";

@Injectable()
export class MailService {
  getMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }
}
