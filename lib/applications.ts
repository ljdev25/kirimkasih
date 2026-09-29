export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\+?[0-9\s-]{7,15}$/;

export const VALIDATION_ERROR_MESSAGE = "Sila betulkan ralat di bawah.";
export const GENERIC_ERROR_MESSAGE = "Gagal menghantar permohonan. Sila cuba lagi.";
export const SUCCESS_MESSAGE =
  "Permohonan berjaya dihantar! Kami akan hubungi anda tidak lama lagi.";

export interface ApplicationState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export const initialApplicationState: ApplicationState = {
  success: false,
  message: "",
};
