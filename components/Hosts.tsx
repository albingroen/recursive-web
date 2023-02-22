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

export default function Hosts() {
  return (
    <Stack direction="vertical" className="w-full">
      <p className="text-lg font-semibold">Hosts</p>

      <ul>
        {HOSTS.map((HOST) => (
          <li key={HOST.name}>
            <a
              href={HOST.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl hover:bg-gray-200 transition p-2 -mx-2 group"
            >
              <Stack align="center" justify="between">
                <Stack align="center">
                  <Image
                    alt=""
                    src={HOST.photo}
                    width={50}
                    height={50}
                    className="w-8 h-8 grayscale rounded-full"
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
