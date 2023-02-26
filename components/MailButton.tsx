import classNames from "@/lib/classNames";
import React from "react";
import ArrowRight from "./ArrowRight";

const BUTTON_LABEL = "Email us";

interface MailButtonProps {
  buttonLabel?: string;
  email: string;
}

export default function MailButton({
  buttonLabel = BUTTON_LABEL,
  email,
}: MailButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={classNames(
        "flex items-center gap-3 text-white px-4 py-2 font-medium transition rounded-full",
        "bg-orange-500 hover:bg-orange-600",
        "dark:bg-orange-800 dark:hover:bg-orange-700"
      )}
    >
      <span>{buttonLabel}</span>
      <ArrowRight />
    </a>
  );
}
