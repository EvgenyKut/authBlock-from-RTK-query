export type LoginRequest = {
  login: string;
  passwordHash: string;
  language: string;
  Captcha?: string;
};

export type ResetPswRequest = {
  Login: string;
  Captcha?: string;
};

export type RecoverLoginRequest = {
  BirthDate: string;
  Email: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Captcha?: string;
};

export type setNewPasswordRequest = {
  passwordHash: string;
};
