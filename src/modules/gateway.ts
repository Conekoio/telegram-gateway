import { Client } from './client';
import { IntegrityChecker } from './integrity-checker';

export class TgGateway {
  public client: Client;

  public integrity: IntegrityChecker;

  constructor(token: string) {
    this.client = new Client(token);
    this.integrity = new IntegrityChecker(token);
  }
}
