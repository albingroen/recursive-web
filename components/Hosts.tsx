import Image from "next/image";
import Stack from "./Stack";
const HOSTS = [
  {
    url: "https://twitter.com/albingroen",
    photo: "/albin.jpeg",
    name: "Albin Groen",
  },
  {
    url: "https://twitter.com/sgnilreutr",
    name: "Robbert Tuerlings",
    photo: "/robbert.jpeg",
  },
];

const HEADER = "Hosts";

export default function Hosts() {
  return (
    <Stack direction="vertical" className="w-full">
      <p className="text-lg font-semibold">{HEADER}</p>

      <ul>
        {HOSTS.map((HOST) => (
          <li key={HOST.name}>
            <a
              href={HOST.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 -mx-2 transition rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <Stack align="center" justify="between">
                <Stack align="center">
                  <Image
                    alt=""
                    src={HOST.photo}
                    width={50}
                    height={50}
                    className="w-8 h-8 rounded-full grayscale"
                  />
                  <span>{HOST.name}</span>
                </Stack>
              </Stack>
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
}
