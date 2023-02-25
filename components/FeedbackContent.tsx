import MailButton from "./MailButton";
import Stack from "./Stack";

const HEADER = "Feedback";
const DESCRIPTION =
  "As Recursive, we value your feedback on our services. Please feel free to share any comments or suggestions you may have, as it helps us improve. Your feedback may be credited in a future podcast, but if you prefer to remain anonymous, we respect your privacy. Send us your feedback via the button below. Thank you!";

interface FeedbackContentProps {
  email?: string;
}

export default function FeedbackContent({ email = "" }: FeedbackContentProps) {
  const emailWithFeedbackSubject = `${email}?subject=Recursive feedback`;

  return (
    <Stack direction="vertical" className="!gap-6">
      <h2 className="text-2xl font-semibold">{HEADER}</h2>
      <p>{DESCRIPTION}</p>
      <Stack>
        <MailButton email={emailWithFeedbackSubject} />
      </Stack>
    </Stack>
  );
}
