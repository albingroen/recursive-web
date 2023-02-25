import React from "react";

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
      className="block p-2 -mx-2 transition bg-gray-100 rounded-xl dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 group"
    >
      {buttonLabel}
    </a>
  );
}
