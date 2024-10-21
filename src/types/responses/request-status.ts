import type { DeliveryStatus } from './delivery-status';
import type { VerificationStatus } from './verification-status';

export type RequestStatus = {
  request_id: string;
  phone_number: string;
  request_cost: number;
  remaining_balance?: number;
  delivery_status?: DeliveryStatus;
  verification_status?: VerificationStatus;
  payload?: string;
}
