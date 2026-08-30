import { createFileRoute } from "@tanstack/react-router";

import banner from "@/assets/sky-sea-banner.jpg";
import base from "@/assets/oysteic-base.png";
import joy from "@/assets/oysteic-joy.png";
import proud from "@/assets/oysteic-proud.png";
import playful from "@/assets/oysteic-playful.png";
import focus from "@/assets/oysteic-focus.png";
import cheer from "@/assets/oysteic-cheer.png";
import curious from "@/assets/oysteic-curious.png";
import sleepy from "@/assets/oysteic-sleepy.png";
import surprised from "@/assets/oysteic-surprised.png";
import warm from "@/assets/oysteic-warm.png";
import determined from "@/assets/oysteic-determined.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oysteic — Mascot cảm xúc cho ToeicSpace" },
      {
        name: "description",
        content:
          "Bộ mascot Oysteic: vỏ sò pastel và viên ngọc biết kể chuyện, 10 biến thể cảm xúc cùng mockup banner bầu trời và biển cả cho ToeicSpace.",
      },
      { property: "og:title", content: "Oysteic — Mascot cảm xúc cho ToeicSpace" },
      {
        property: "og:description",
        content:
          "Character sheet, 10 biến thể cảm xúc và mockup banner sky & sea của mascot Oysteic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const emotions = [
  {
    src: joy,
    name: "Vui vẻ",
    en: "Joyful",
    note: "Vỏ mở rộng, ngọc sáng bừng, bong bóng bay lên",
  },
  {
    src: proud,
    name: "Tự hào",
    en: "Proud",
    note: "Vỏ ngẩng cao, tia sáng và ngôi sao nhỏ quanh ngọc",
  },
  {
    src: playful,
    name: "Tinh nghịch",
    en: "Playful",
    note: "Vỏ mở lệch như đang nháy mắt, ngọc ánh lên tinh quái",
  },
  {
    src: focus,
    name: "Tập trung",
    en: "Focused",
    note: "Vỏ gần khép, ánh sáng rọi qua khe, sóng nhiễu mờ đi",
  },
  {
    src: cheer,
    name: "Cổ vũ",
    en: "Cheering",
    note: "Vỏ mở hết cỡ, bong bóng thoại “!” vang khắp nơi",
  },
  {
    src: curious,
    name: "Bối rối",
    en: "Confused",
    note: "Vỏ nghiêng đầu, một bong bóng dấu “?” lơ lửng",
  },
  {
    src: sleepy,
    name: "Mệt mỏi",
    en: "Tired",
    note: "Vỏ khép hờ trĩu xuống, ngọc lim dim, bong bóng chìm",
  },
  {
    src: surprised,
    name: "Ngạc nhiên",
    en: "Surprised",
    note: "Vỏ bật mở đột ngột, bong bóng văng ra mọi hướng",
  },
  {
    src: warm,
    name: "Ấm áp",
    en: "Warm",
    note: "Ngọc ánh hồng vàng, bong bóng hình trái tim bay quanh",
  },
  {
    src: determined,
    name: "Quyết tâm",
    en: "Determined",
    note: "Vỏ khép chặt, ánh sáng gắt xuyên qua khe, sóng bị đẩy lùi",
  },
];

const palette = [
  { label: "Xanh pastel", hex: "#BFD9F2" },
  { label: "Xanh biển nhạt", hex: "#8FBFE0" },
  { label: "Vàng ngọc ấm", hex: "#F7DFA0" },
  { label: "Hồng xà cừ", hex: "#F6C9D2" },
  { label: "Mực viền", hex: "#3A4A63" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner mockup */}
      <section className="relative overflow-hidden">
        <img
          src={banner}
          alt="Nền bầu trời và biển cả pastel dùng cho banner ToeicSpace"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center md:flex-row md:gap-12 md:text-left">
          <img
            src={base}
            alt="Mascot Oysteic — vỏ sò pastel với viên ngọc phát sáng bên trong"
            width={420}
            height={420}
            className="w-56 animate-bob drop-shadow-[0_20px_30px_rgba(90,130,180,0.35)] md:w-80"
          />
          <div className="max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              ToeicSpace
            </p>
            <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
              Chào cậu, tớ là Oysteic!
            </h1>
            <p className="mt-4 text-lg text-secondary-foreground">
              Viên ngọc bên trong tớ chính là kiến thức. Đóng vỏ lại để thế giới ồn ào
              nằm ngoài kia, rồi cùng nhau học thôi.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="surface-card px-6 py-3 font-display text-base font-semibold text-primary-foreground [background:var(--primary)]">
                Bắt đầu luyện đề
              </span>
              <span className="surface-card px-6 py-3 font-display text-base font-semibold text-secondary-foreground">
                Gặp Oysteic
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Character sheet */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="surface-card [background:var(--gradient-sky)] p-8">
            <img
              src={base}
              alt="Character sheet gốc của Oysteic"
              width={512}
              height={512}
              loading="lazy"
              className="mx-auto w-full max-w-sm"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Character sheet gốc</h2>
            <ul className="mt-5 space-y-3 text-base text-secondary-foreground">
              <li>
                <strong className="text-foreground">Vỏ sò</strong> — độ mở/khép là ngôn
                ngữ cơ thể duy nhất: mở là hào hứng, khép là tập trung.
              </li>
              <li>
                <strong className="text-foreground">Viên ngọc</strong> — nguồn biểu cảm
                chính, kể chuyện bằng độ sáng, sắc màu và hình khối, không mắt mũi miệng.
              </li>
              <li>
                <strong className="text-foreground">Bong bóng</strong> — lời nói, tiếng
                cười và tiếng cổ vũ của Oysteic.
              </li>
              <li>
                <strong className="text-foreground">Đường sóng</strong> — tiếng ồn và sự
                xao nhãng bên ngoài, mờ dần khi Oysteic tập trung.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              {palette.map((c) => (
                <div key={c.hex} className="flex items-center gap-2">
                  <span
                    className="h-9 w-9 rounded-full border border-border"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {c.label}
                    <br />
                    <span className="font-mono text-xs">{c.hex}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emotion grid */}
      <section className="[background:var(--gradient-sky)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">10 biến thể cảm xúc</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-secondary-foreground">
            Nền trong suốt, dùng tốt ở kích thước nhỏ — từ sticker chat tới icon trạng
            thái trong bài học.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {emotions.map((e) => (
              <article
                key={e.en}
                className="surface-card group p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="mx-auto flex h-40 items-center justify-center">
                  <img
                    src={e.src}
                    alt={`Oysteic biểu cảm ${e.name}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="max-h-40 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold">{e.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{e.en}</p>
                <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Small-size check */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Kiểm tra ở kích thước nhỏ</h2>
        <p className="mt-3 text-secondary-foreground">
          Cùng một bộ sticker ở 64px, 40px và 28px — silhouette vỏ sò vẫn đọc được.
        </p>
        <div className="mt-8 space-y-6">
          {[64, 40, 28].map((size) => (
            <div key={size} className="surface-card flex flex-wrap items-center gap-5 p-5">
              <span className="w-14 font-mono text-xs text-muted-foreground">{size}px</span>
              {emotions.map((e) => (
                <img
                  key={e.en}
                  src={e.src}
                  alt={`Oysteic ${e.name} ở ${size}px`}
                  loading="lazy"
                  style={{ width: size, height: size }}
                  className="object-contain"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Oysteic · bộ mascot cho ToeicSpace
      </footer>
    </main>
  );
}
