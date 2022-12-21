export type PasswordPolicy = {
  pattern: string;
  errorMessage: string;
  hint: string;
};

export type PermissionState = 'GRANTED' | 'BLOCKED' | 'NONACTIVE' | 'DENIED';

export type PermissionType = {
  accessObjectId: number;
  code: string;
  permissionState: PermissionState;
};

export type SystemStatus = {
  Status: string;
  BlockReasonCode: string;
  BlockReasonText: string;
};

export type Session = {
  userId: number;
  userName: string;
};

export type OtpChallenge = {
  maskedPhone: string;
  operationId: string;
  smsTryLeft: number;
  timeout: number;
};

export type Error = {
  Error: string;
  ErrorCode?: string;
  ErrorMessageText: string;
};
