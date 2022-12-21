import {
  CaptchaConfigResponse,
  LoginRequest,
  LoginResponse,
  PasswordPolicyResponse,
  RecoverLoginRequest,
  ResetPswRequest,
  SaltResponse,
  SuccessResponse,
  TempTokenResponse,
  setNewPasswordRequest,
} from 'types/auth';

import { apiUnionEntryPoint } from './apiUnionEntryPoint';

export const API_REQUEST_URL = '/rs/v1';
export const API_REQUEST_URL_V2 = '/rs/v2';
const apiUrlCommonV2 = `${API_REQUEST_URL_V2}/users/`;


export const authApi = apiUnionEntryPoint.injectEndpoints({
  endpoints: (builder) => ({
    getPasswordPolicies: builder.query<PasswordPolicyResponse, void>({
      query: () => `${API_REQUEST_URL}/password_policies`,
    }),
    getCaptchaConfig: builder.query<CaptchaConfigResponse, void>({
      query: () => `${API_REQUEST_URL}/captcha/config`,
    }),
    getSalt: builder.query<SaltResponse, void>({
      query: () => `${API_REQUEST_URL}/users/login/salt`,
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ login, passwordHash, language, Captcha }) => ({
        url: `${API_REQUEST_URL}/users/login`,
        method: 'POST',
        body: { login, passwordHash, language, Captcha },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${API_REQUEST_URL}/sessions`,
        method: 'DELETE',
      }),
    }),
    getTempToken: builder.query<TempTokenResponse, string>({
      query: (targetAccessType) => ({
        url: `${API_REQUEST_URL}/users/login/temp_token`,
        params: {
          targetAccessType,
        },
      }),
    }),
    setUTCOffset: builder.mutation({
      query: (utcOffset) => ({
        url: `${API_REQUEST_URL}/persons/all/messages/utc_offset`,
        method: 'POST',
        body: { utcOffset },
      }),
    }),
  }),
});

export const authApi2 = apiUnionEntryPoint.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation<LoginResponse, ResetPswRequest>({
      query: ({ Login, Captcha }) => ({
        url: `${apiUrlCommonV2}reset_password`,
        method: 'POST',
        body: { Login, Captcha },
      }),
    }),
    recoverLogin: builder.mutation<LoginResponse, RecoverLoginRequest>({
      query: ({ BirthDate, Email, FirstName, LastName, MiddleName, Captcha }) => ({
        url: `${apiUrlCommonV2}recover_login`,
        method: 'POST',
        body: { BirthDate, Email, FirstName, LastName, MiddleName, Captcha },
      }),
    }),
    checkIdResetPassword: builder.mutation({
      query: (hash) => ({
        url: `${apiUrlCommonV2}reset_password/check_id`,
        method: 'POST',
        body: { ResetId: hash },
      }),
    }),
    checkIdResetLogin: builder.mutation({
      query: (hash) => ({
        url: `${apiUrlCommonV2}reset_login/check_id`,
        method: 'POST',
        body: { ResetId: hash },
      }),
    }),
    setNewPassword: builder.mutation<SuccessResponse, setNewPasswordRequest>({
      query: (passwordHash) => ({
        url: `${apiUrlCommonV2}reset_password/password`,
        method: 'POST',
        body: passwordHash,
      }),
    }),
  }),
});

export const {
  useGetPasswordPoliciesQuery,
  useLogoutMutation,
  useGetCaptchaConfigQuery,
  useLazyGetTempTokenQuery,
  useSetUTCOffsetMutation,
} = authApi;
