import MailButton from "./MailButton";
import Stack from "./Stack";

const HEADER = "Feedback";
const DESCRIPTION =
  "We want your feedback! Please feel free to share any comments or suggestions you may have, as it helps us improve. Your feedback may be credited in a future podcast, but if you prefer to be anonymous, we respect that! Send us your feedback through the button below. Thank you!";

interface FeedbackContentProps {
  email?: string;
}

export default function FeedbackContent({ email = "" }: FeedbackContentProps) {
  const emailWithFeedbackSubject = `${email}?subject=Recursive feedback`;

  return (
    <Stack direction="vertical" className="!gap-7" align="start">
      <Stack direction="vertical" spacing="large">
        <h2 className="text-2xl font-semibold">{HEADER}</h2>

        <p className="leading-relaxed text-gray-700 dark:text-gray-400">
          {DESCRIPTION}
        </p>
      </Stack>

      <MailButton email={emailWithFeedbackSubject} />
    </Stack>
  );
}
