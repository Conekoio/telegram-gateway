import { HttpWrapper } from '../http/http-wrapper';
import type { CheckSendAbility } from '../types/requests/check-send-ability';
import type { CheckVerificationStatus } from '../types/requests/check-verification-status';
import type { RevokeVerificationMessage } from '../types/requests/revoke-verification-message';
import type { VerificationMessage } from '../types/requests/verification-message';
import type { RequestStatus } from '../types/responses/request-status';

export class Client {
  private httpClient: HttpWrapper;

  constructor(token: string) {
    this.httpClient = new HttpWrapper(token);
  }

  public sendVerificationMessage(
    data: VerificationMessage,
  ): Promise<RequestStatus> {
    return this.httpClient.send<VerificationMessage, RequestStatus>(
      'sendVerificationMessage',
      data,
    );
  }

  public checkSendAbility(data: CheckSendAbility): Promise<RequestStatus> {
    return this.httpClient.send<CheckSendAbility, RequestStatus>(
      'checkSendAbility',
      data,
    );
  }

  public checkVerificationStatus(
    data: CheckVerificationStatus,
  ): Promise<RequestStatus> {
    return this.httpClient.send<CheckVerificationStatus, RequestStatus>(
      'checkVerificationStatus',
      data,
    );
  }

  public revokeVerificationMessage(
    data: RevokeVerificationMessage,
  ): Promise<boolean> {
    return this.httpClient.send<RevokeVerificationMessage, boolean>(
      'revokeVerificationMessage',
      data,
    );
  }
}
