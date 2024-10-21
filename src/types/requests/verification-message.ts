type VerificationMessageBase = {
  phone_number: string;
  request_id?: string;
  sender_username?: string;
  callback_url?: string;
  payload?: string;
  ttl?: number;
}

export type VerificationMessage = VerificationMessageBase & (
  { code: string | number; } | { code_length: number; }
  )
