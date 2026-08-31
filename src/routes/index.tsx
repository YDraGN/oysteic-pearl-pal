import { createFileRoute } from "@tanstack/react-router";

import banner from "@/assets/sky-sea-banner.jpg";
import base from "@/assets/oy2-base.png";
import hello from "@/assets/oy2-hello.png";
import joy from "@/assets/oy2-joy.png";
import proud from "@/assets/oy2-proud.png";
import playful from "@/assets/oy2-playful.png";
import focus from "@/assets/oy2-focus.png";
import cheer from "@/assets/oy2-cheer.png";
import confused from "@/assets/oy2-confused.png";
import tired from "@/assets/oy2-tired.png";
import surprised from "@/assets/oy2-surprised.png";
import warm from "@/assets/oy2-warm.png";
import determined from "@/assets/oy2-determined.png";
import waiting from "@/assets/oy2-waiting.png";
import teamwork from "@/assets/oy2-teamwork.png";
import listening from "@/assets/oy2-listening.png";
import reading from "@/assets/oy2-reading.png";
import notFound from "@/assets/oy2-404.png";
import sysError from "@/assets/oy2-error.png";
import locked from "@/assets/oy2-locked.png";
import empty from "@/assets/oy2-empty.png";
import success from "@/assets/oy2-success.png";
import search from "@/assets/oy2-search.png";
import offline from "@/assets/oy2-offline.png";
import maintenance from "@/assets/oy2-maintenance.png";
import streak from "@/assets/oy2-streak.png";
import denied from "@/assets/oy2-denied.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oysteic — Mascot 3D cảm xúc cho ToeicSpace" },
      {
        name: "description",
        content:
          "Bộ mascot Oysteic phong cách 3D mềm: sinh vật ngọc trai trong vỏ sò pastel với mắt mũi miệng biểu cảm, 15 biến thể cảm xúc và mockup banner bầu trời — biển cả cho ToeicSpace.",
      },
      { property: "og:title", content: "Oysteic — Mascot 3D cảm xúc cho ToeicSpace" },
      {
        property: "og:description",
        content:
          "Character sheet, 15 biến thể cảm xúc 3D và mockup banner sky & sea của mascot Oysteic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const emotions = [
  { src: hello, name: "Chào hỏi", en: "Hello", note: "Vẫy tay, cười tươi — dùng cho onboarding" },
  { src: joy, name: "Vui vẻ", en: "Joyful", note: "Mắt cong hình vòng cung, hai tay giơ cao" },
  { src: proud, name: "Tự hào", en: "Proud", note: "Ưỡn ngực, cười tự mãn, lấp lánh vàng" },
  { src: playful, name: "Tinh nghịch", en: "Playful", note: "Nháy mắt, lè lưỡi, vẫy tay trêu chọc" },
  { src: focus, name: "Tập trung", en: "Focused", note: "Mắt nheo lại, ôm cuốn sách nhỏ pastel" },
  { src: cheer, name: "Cổ vũ", en: "Cheering", note: "Miệng mở to hò reo, confetti và bong bóng" },
  { src: confused, name: "Bối rối", en: "Confused", note: "Nghiêng đầu, gãi má, bong bóng dấu “?”" },
  {
    src: tired,
    name: "Mệt mỏi",
    en: "Tired",
    note: "Vỏ khép lại như chăn, trăng khuyết navy, sao vàng và vòng loading — dùng cho màn hình chờ",
  },
  { src: surprised, name: "Ngạc nhiên", en: "Surprised", note: "Mắt tròn xoe, miệng chữ O, bong bóng văng ra" },
  { src: warm, name: "Ấm áp", en: "Warm", note: "Tự ôm mình, má hồng, bong bóng trái tim" },
  {
    src: determined,
    name: "Quyết tâm",
    en: "Determined",
    note: "Băng đô trắng, cờ đỏ san hô và khiên 3D “990” đỏ nổi bật — mục tiêu điểm TOEIC",
  },
  {
    src: waiting,
    name: "Chờ đợi",
    en: "Waiting",
    note: "Chống cằm kiên nhẫn, đồng hồ cát và đồng hồ soft 3D — đặt cạnh timer phòng thi thử",
  },
  {
    src: teamwork,
    name: "Hợp tác",
    en: "Teamwork",
    note: "Oysteic đập tay cùng bạn sứa tím bạc hà — nhóm học, lớp học, mời bạn bè",
  },
  {
    src: listening,
    name: "Luyện nghe",
    en: "Listening",
    note: "Tai nghe đỏ san hô, nốt nhạc vàng và sóng âm cyan — phần thi Listening",
  },
  {
    src: reading,
    name: "Luyện đọc",
    en: "Reading",
    note: "Kính tròn, sách đỏ mở rộng và chữ ABC vàng — phần thi Reading",
  },
];

const states = [
  {
    src: notFound,
    name: "Không tìm thấy trang",
    en: "404",
    note: "Ngó nghiêng tìm đường, số 404 đỏ san hô, ghim bản đồ cam và đường nét đứt",
  },
  {
    src: sysError,
    name: "Lỗi hệ thống",
    en: "System error",
    note: "Vỏ nứt nhẹ, biển cảnh báo đỏ, bánh răng gãy — dùng cho lỗi 500 / crash",
  },
  {
    src: locked,
    name: "Tính năng đang khóa",
    en: "Locked",
    note: "Ôm ổ khóa vàng, chìa khóa lấp lánh — gợi mở gói nâng cấp",
  },
  {
    src: denied,
    name: "Không có quyền",
    en: "Access denied",
    note: "Giơ tay xin lỗi, biển cấm đỏ và khiên bảo mật — dùng cho 403",
  },
  {
    src: empty,
    name: "Chưa có dữ liệu",
    en: "Empty state",
    note: "Hộp rỗng, khung nét đứt và dấu cộng cam — danh sách lớp, đề thi còn trống",
  },
  {
    src: search,
    name: "Không có kết quả",
    en: "No results",
    note: "Kính lúp viền cyan, dấu hỏi tím — tìm kiếm từ vựng / đề thi không ra",
  },
  {
    src: offline,
    name: "Mất kết nối",
    en: "Offline",
    note: "Wifi gạch đỏ, dây mạng cam rớt — nhắc học viên kiểm tra mạng",
  },
  {
    src: maintenance,
    name: "Đang bảo trì",
    en: "Maintenance",
    note: "Mũ bảo hộ cam, cờ lê xanh, bánh răng quay — thông báo nâng cấp hệ thống",
  },
  {
    src: success,
    name: "Hoàn thành",
    en: "Success",
    note: "Dấu tick xanh lá, cúp vàng, confetti — nộp bài / hoàn thành khóa học",
  },
  {
    src: streak,
    name: "Nhắc học mỗi ngày",
    en: "Streak / Reminder",
    note: "Lịch streak lửa đỏ và chuông vàng — nhắc nhở duy trì thói quen",
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
            src={hello}
            alt="Mascot Oysteic — sinh vật ngọc trai trong vỏ sò pastel đang vẫy tay chào"
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
              Tớ sống trong một chiếc vỏ sò yên tĩnh giữa biển. Đóng vỏ lại để thế giới ồn
              ào nằm ngoài kia, rồi cùng nhau học thôi.
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
                <strong className="text-foreground">Thân ngọc trai</strong> — thân tròn xà
                cừ óng ánh, mắt to bóng, mũi nhỏ và miệng biểu cảm rõ ràng.
              </li>
              <li>
                <strong className="text-foreground">Vỏ sò</strong> — vừa là mái nhà vừa là
                ngôn ngữ cơ thể: mở là hào hứng, khép là tập trung, nghỉ ngơi.
              </li>
              <li>
                <strong className="text-foreground">Bong bóng</strong> — lời nói, tiếng
                cười và tiếng cổ vũ của Oysteic.
              </li>
              <li>
                <strong className="text-foreground">Chất liệu</strong> — render 3D mềm,
                bề mặt ngọc trai iridescent, ánh sáng dịu, không viền cứng.
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
          <h2 className="text-center text-3xl font-bold">15 biến thể cảm xúc</h2>
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

      {/* System states */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Bộ trạng thái hệ thống</h2>
        <p className="mt-3 max-w-2xl text-secondary-foreground">
          Oysteic đại diện cho toàn hệ thống ToeicSpace/LMS: mỗi trạng thái đi kèm element
          màu nổi bật để học viên nhận ra ngay chuyện gì đang xảy ra.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <article
              key={s.en}
              className="surface-card group p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mx-auto flex h-40 items-center justify-center">
                <img
                  src={s.src}
                  alt={`Oysteic trạng thái ${s.name}`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="max-h-40 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{s.en}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
            </article>
          ))}
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
              {[...emotions, ...states].map((e) => (
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
