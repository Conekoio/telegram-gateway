export type VerificationStatus = {
  status:
    | 'code_valid'
    | 'code_invalid'
    | 'code_max_attempts_exceeded'
    | 'expired';
  updated_at: number;
  code_entered?: string;
}
