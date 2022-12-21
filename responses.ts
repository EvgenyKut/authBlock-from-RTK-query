import { OtpChallenge, PasswordPolicy, PermissionType, SystemStatus } from './models';

export type PasswordPolicyResponse = {
  passwordPolicy: PasswordPolicy[];
};

export type PermissionsResponse = {
  permissionTypes: PermissionType[];
};

export type SystemStatusResponse = {
  systemStatus: SystemStatus[];
};

export type CaptchaConfigResponse = {
  authCaptchaImmediate: boolean;
  recoverLoginCaptchaImmediate: boolean;
  registerCaptchaImmediate: boolean;
  resetPasswordCaptchaImmediate: boolean;
};

export type SaltResponse = {
  salt: string;
};

export type LoginResponse = {
  otpChallenge: OtpChallenge;
};

export type SuccessResponse = {
  success: true;
};

export type ITempToken = {
  temporaryToken: string;
};

export type TempTokenResponse = {
  result: ITempToken[];
};
