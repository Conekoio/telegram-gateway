import { createHash, createHmac } from 'node:crypto';

export class IntegrityChecker {
  private apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  private generateSecretKey(): Buffer {
    return createHash('sha256').update(this.apiToken).digest();
  }

  private generateSignature(
    dataCheckString: string,
    secretKey: Buffer,
  ): string {
    return createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');
  }

  public check(
    requestTimestamp: string,
    requestSignature: string,
    postBody: string,
  ): boolean {
    const dataCheckString = `${requestTimestamp}\n${postBody}`;
    const secretKey = this.generateSecretKey();
    const calculatedSignature = this.generateSignature(
      dataCheckString,
      secretKey,
    );

    return calculatedSignature === requestSignature;
  }
}
