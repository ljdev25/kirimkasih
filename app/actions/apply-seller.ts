"use server";

import { supabase } from "@/lib/supabase";
import {
  EMAIL_REGEX,
  GENERIC_ERROR_MESSAGE,
  PHONE_REGEX,
  SUCCESS_MESSAGE,
  VALIDATION_ERROR_MESSAGE,
  type ApplicationState,
} from "@/lib/applications";

export async function applySellerAction(
  _prevState: ApplicationState,
  formData: FormData
): Promise<ApplicationState> {
  const nama = String(formData.get("nama") ?? "").trim();
  const noTelefon = String(formData.get("noTelefon") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const perniagaan = String(formData.get("perniagaan") ?? "").trim();

  const errors: Record<string, string> = {};

  if (!nama) errors.nama = "Nama penuh diperlukan.";
  if (!noTelefon) {
    errors.noTelefon = "No. telefon diperlukan.";
  } else if (!PHONE_REGEX.test(noTelefon)) {
    errors.noTelefon = "Format no. telefon tidak sah.";
  }
  if (!email) {
    errors.email = "E-mel diperlukan.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Format e-mel tidak sah.";
  }
  if (!perniagaan) errors.perniagaan = "Nama perniagaan/produk diperlukan.";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: VALIDATION_ERROR_MESSAGE, errors };
  }

  try {
    const { error } = await supabase.from("seller_applications").insert({
      nama,
      no_telefon: noTelefon,
      email,
      perniagaan,
    });

    if (error) {
      return { success: false, message: GENERIC_ERROR_MESSAGE };
    }
  } catch {
    return { success: false, message: GENERIC_ERROR_MESSAGE };
  }

  return { success: true, message: SUCCESS_MESSAGE };
}
