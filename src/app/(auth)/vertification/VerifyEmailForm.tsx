"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";

export default function VerifyEmailForm() {
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<{ code: string }>({
    defaultValues: { code: "" },
  });

  async function onSubmit({ code }: { code: string }) {
    setError(undefined);
    startTransition(async () => {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { success, error } = await res.json();
      if (!success) setError(error);
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      {error && <p className="text-center text-destructive">{error}</p>}
      <Input {...form.register("code")} placeholder="Verification Code" />
      <LoadingButton loading={isPending} type="submit" className="w-full">
        Verify Email
      </LoadingButton>
    </form>
  );
}
