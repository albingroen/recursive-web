import MailButton from "./MailButton";
import Stack from "./Stack";

const HEADER = "Sponsor";
const DESCRIPTION =
  "Get your brand in front of a highly-engaged, tech-savvy audience across different countries with a sponsorship. From the latest tech trends to successful side-projects, our podcast covers it all through interviews, reviews, and discussions about tech and design. Don't miss the opportunity to promote your message to our growing community of enthusiasts.";

const INFO_HEADER = "Each sponsorship will be";
const INFO_DESCRIPTION = [
  {
    text: "For each sponsorship, you will receive a 1-2 minute long segment in which one of the hosts will read your ad using either a pre-written script or improvised speaking points from your bullet list.",
  },
  {
    text: "Additionally, your brand will be mentioned in the show notes that will be visible on both the recursivepod.com website and in listeners' podcast clients.",
  },
];

const BUTTON_LABEL = "Email us to sponsor";

interface SponsorshipProps {
  email?: string;
}

export default function Sponsorship({ email = "" }: SponsorshipProps) {
  const emailWithSponsorSubject = `${email}?subject=Sponsorship`;

  return (
    <Stack direction="vertical" className="!gap-10">
      <Stack direction="vertical" className="!gap-7" align="start">
        <Stack direction="vertical" spacing="large">
          <h2 className="text-2xl font-semibold">{HEADER}</h2>

          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            {DESCRIPTION}
          </p>
        </Stack>

        <MailButton
          buttonLabel={BUTTON_LABEL}
          email={emailWithSponsorSubject}
        />
      </Stack>

      <Stack direction="vertical" spacing="large">
        <h3 className="text-xl font-semibold">{INFO_HEADER}</h3>

        <ul className="ml-4 list-disc flex flex-col gap-3">
          {INFO_DESCRIPTION.map((DESCRIPTION, index) => (
            <li
              key={index}
              className="leading-relaxed text-gray-700 dark:text-gray-400"
            >
              {DESCRIPTION.text}
            </li>
          ))}
        </ul>
      </Stack>
    </Stack>
  );
}
