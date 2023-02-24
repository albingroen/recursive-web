import MailButton from "./MailButton";
import Stack from "./Stack";

const HEADER = "Sponsor";
const DESCRIPTION =
  "Get your brand in front of a highly-engaged, tech-savvy audience across different countries with a sponsorship. From the latest tech trends to successful side-projects, our podcast covers it all through interviews, reviews, and discussions about tech and design. Don't miss the opportunity to promote your message to our growing community of enthusiasts.";

const BUTTON_LABEL = "Email us to sponsor";

interface SponsorshipProps {
  email?: string;
}

export default function Sponsorship({ email = "" }: SponsorshipProps) {
  const emailWithSponsorSubject = `${email}?subject=Sponsorship`;

  return (
    <Stack direction="vertical" className="!gap-6">
      <h2 className="text-2xl font-semibold">{HEADER}</h2>
      <p>{DESCRIPTION}</p>
      <Stack>
        <MailButton
          buttonLabel={BUTTON_LABEL}
          email={emailWithSponsorSubject}
        />
      </Stack>
    </Stack>
  );
}
