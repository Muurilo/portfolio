import * as React from "react";
import Lottie from "lottie-react";
import { format } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import animationData from "@/public/playing.json";
import axios from "axios";
import Marquee from "react-double-marquee";
import Link from "next/link";

export function Footer() {
  const timeZone = "America/Sao_Paulo";

  const [timeInSP, setTimeInSP] = React.useState(new Date());
  const [song, setSong] = React.useState<{
    isPlaying: boolean;
    title?: string;
    album?: string;
    artists?: Array<{ name: string; url: string }>;
    albumImageUrl?: string;
    songUrl?: string;
  } | null>(null);

  React.useEffect(() => {
    async function getSong() {
      const data = await axios
        .get("/api/spotify")
        .then((res) => {
          setSong(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      return data;
    }
    getSong();

    const intervalId = setInterval(() => {
      setTimeInSP(zonedTimeToUtc(new Date(), timeZone));
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer className="flex justify-between w-full py-5">
      <div className="flex items-center justify-start w-1/2 space-x-1">
        <div className="flex flex-row items-center justify-center">
          <Lottie
            animationData={animationData}
            className="flex items-center justify-center w-5 h-5"
            loop={true}
          />
        </div>
        {song === null || song.isPlaying === false ? (
          <div className="flex flex-row justify-end max-w-[85%]">
            <small className="ml-auto text-xs font-medium leading-none text-muted-foreground">
              Offline
            </small>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-end max-w-full pr-10">
            <div className="max-w-full whitespace-nowrap">
              <Marquee direction="left" scrollWhen="overflow" speed={0.02}>
                <Link
                  href={song.songUrl || "#"}
                  target="_blank"
                  className="text-xs font-semibold tracking-tight scroll-m-20 text-muted-foreground max-w-[50%]"
                >
                  {song.title}
                </Link>
              </Marquee>
            </div>

            <div className="max-w-full -mt-2 whitespace-nowrap">
              <Marquee
                direction="left"
                scrollWhen="overflow"
                speed={0.02}
                delay={6000}
              >
                <small className="text-xs font-medium leading-none text-muted-foreground">
                  {song.artists?.map((artist, index) => artist.name).join(", ")}
                </small>
              </Marquee>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end w-1/2">
        <small className="text-xs text-muted-foreground">
          Brasil &bull;{" "}
          <React.Suspense fallback={null}>
            {format(timeInSP, "LLL d, HH:mm aaa")}
          </React.Suspense>
        </small>
      </div>
    </footer>
  );
}
