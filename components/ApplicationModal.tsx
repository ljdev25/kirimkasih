"use client";

import { useActionState, useEffect, useId } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { initialApplicationState, type ApplicationState } from "@/lib/applications";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface ApplicationField {
  name: string;
  label: string;
  type?: string;
}

interface ApplicationModalProps {
  title: string;
  description: string;
  fields: ApplicationField[];
  action: (
    prevState: ApplicationState,
    formData: FormData
  ) => Promise<ApplicationState>;
  onClose: () => void;
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
}

function Field({ label, name, type = "text", error }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-neutral-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full rounded-xl border px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:ring-2",
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-neutral-300 focus:border-primary-400 focus:ring-primary-100"
        )}
      />
      {error ? (
        <p id={errorId} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="mt-2 w-full">
      {pending ? "Menghantar..." : "Hantar Permohonan"}
    </Button>
  );
}

export function ApplicationModal({
  title,
  description,
  fields,
  action,
  onClose,
}: ApplicationModalProps) {
  const [state, formAction] = useActionState(action, initialApplicationState);
  const titleId = useId();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const errors = state.errors ?? {};

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-soft-lg"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        >
          <X className="h-5 w-5" />
        </button>

        {state.success ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-secondary-500" />
            <h3 className="mt-4 font-heading text-lg font-bold text-neutral-900">
              Permohonan Berjaya!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{state.message}</p>
            <Button variant="secondary" onClick={onClose} className="mt-6">
              Tutup
            </Button>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-4">
            <div>
              <h3
                id={titleId}
                className="font-heading text-lg font-bold text-neutral-900"
              >
                {title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{description}</p>
            </div>

            {state.message && !state.success ? (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {state.message}
              </p>
            ) : null}

            {fields.map((field) => (
              <Field
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                error={errors[field.name]}
              />
            ))}

            <SubmitButton />
          </form>
        )}
      </div>
    </div>
  );
}
