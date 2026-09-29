import { MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

interface City {
  name: string;
  x: number;
  y: number;
  primary?: boolean;
}

const cities: City[] = [
  { name: "Tuaran", x: 25, y: 35.5 },
  { name: "Kota Kinabalu", x: 27.5, y: 42, primary: true },
  { name: "Papar", x: 28.75, y: 51 },
  { name: "Ranau", x: 42.5, y: 39.5 },
  { name: "Tambunan", x: 41.25, y: 52.5 },
  { name: "Sandakan", x: 75, y: 42 },
];

const SABAH_PATH =
  "M120,40 C140,20 170,15 190,35 C210,55 200,90 230,100 C280,110 320,130 340,170 C360,210 350,260 310,290 C280,310 250,300 230,320 C200,340 170,330 150,310 C120,290 110,260 100,230 C90,200 95,170 90,140 C85,110 90,70 120,40 Z";

function SabahMap() {
  return (
    <div className="relative mx-auto aspect-[400/380] w-full max-w-md">
      <svg
        viewBox="0 0 400 380"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d={SABAH_PATH}
          className="fill-secondary-100 stroke-secondary-400"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
        >
          {city.primary ? (
            <span className="absolute bottom-4 h-8 w-8 animate-ping rounded-full bg-primary-400 opacity-40" />
          ) : null}
          <MapPin
            className={cn(
              "relative drop-shadow-sm",
              city.primary
                ? "h-7 w-7 text-primary-600"
                : "h-5 w-5 text-secondary-600"
            )}
            strokeWidth={2}
          />
          <span
            className={cn(
              "mt-0.5 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold shadow-soft",
              city.primary ? "text-primary-700" : "text-neutral-700"
            )}
          >
            {city.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ServiceArea() {
  return (
    <section id="kawasan" className="scroll-mt-28 bg-neutral-100/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kawasan Perkhidmatan"
          title="Kami Ada di Seluruh Sabah"
          description="Menghubungkan kampung ke bandar di seluruh Sabah."
        />

        <div className="mt-12">
          <SabahMap />
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <span
              key={city.name}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-soft"
            >
              {city.name}
            </span>
          ))}
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-500 shadow-soft">
            dan lebih ramai lagi
          </span>
        </div>
      </Container>
    </section>
  );
}
