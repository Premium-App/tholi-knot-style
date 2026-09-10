import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { OrderForm } from "@/components/OrderForm";
import { Confetti, Reveal, useInView } from "@/components/Reveal";
import { COLORS, PHONE, WHATSAPP, type ColorId } from "@/lib/product";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geometric Knot Crossbody Bag ৳700 | Tholi (থলি)" },
      {
        name: "description",
        content:
          "Tholi Geometric Knot Crossbody Bag — প্রিমিয়াম PU লেদার, ৬টি কালার, ৳700। ২টি নিলে ৳1,300। ক্যাশ অন ডেলিভারি, সারা বাংলাদেশে ডেলিভারি।",
      },
      { property: "og:title", content: "Geometric Knot Crossbody Bag ৳700 | Tholi (থলি)" },
      {
        property: "og:description",
        content:
          "ট্রেন্ডি নটেড হ্যান্ডেল ক্রসবডি ব্যাগ — ৬টি কালার, ৳700, ক্যাশ অন ডেলিভারি।",
      },
    ],
  }),
  component: LandingPage,
});

const SPECS: [string, string][] = [
  ["Material", "Premium PU Leather (Embossed)"],
  ["Dimensions", "22cm × 14cm × 7cm"],
  ["Weight", "~350g"],
  ["Closure", "Magnetic flap with tonal buckle"],
  ["Handle", "Knotted top handle (gold-tipped)"],
  ["Strap", "Detachable adjustable crossbody strap"],
  ["Interior", "1 main compartment + 1 zip pocket"],
  ["Hardware", "Gold-tone metal"],
  ["Colors Available", "6 (Black, Beige, Olive, Rose, Lime, Pink)"],
  ["Care", "Wipe with damp cloth"],
];

const FEATURES = [
  {
    icon: "🔷",
    title: "জিওমেট্রিক এমবসড ডিজাইন",
    text: "ব্যাগের ফ্ল্যাপে bold geometric pattern — আলোতে texture টা আলাদাভাবে shine করে। কোনো প্রিন্ট না, embossed — তাই সহজে মুছবে না।",
  },
  {
    icon: "🪢",
    title: "সিগনেচার নটেড হ্যান্ডেল",
    text: "দুই পাশে hand-tied leather knots আর gold-tipped metal ends — এই ডিটেইলটাই ব্যাগকে expensive দেখায়। হাতে ঝুলিয়ে carry করো, instant elegant look।",
  },
  {
    icon: "✨",
    title: "প্রিমিয়াম PU লেদার",
    text: "Soft-touch, scratch-resistant PU leather — ছুঁলেই বুঝবে quality। Rain এ damage হবে না, সহজে clean করা যায়, আর দীর্ঘদিন টিকবে।",
  },
  {
    icon: "📱",
    title: "পারফেক্ট এভরিডে সাইজ",
    text: "22cm × 14cm — বড় ফোন (6.7 ইঞ্চি পর্যন্ত), wallet, keys, lip gloss, earphones সব আরামে ঢুকবে। ভারী না, সারাদিন comfortable।",
  },
];

const REVIEWS = [
  {
    stars: 5,
    text: "৳700 তে এই কোয়ালিটি বিশ্বাসই হচ্ছিলো না! হাতে পেয়ে আরো বেশি ভালো লেগেছে। আমি আবার অলিভ কালারটাও নেবো। 😍",
    who: "ফাতিমা রহমান, ঢাকা",
  },
  {
    stars: 5,
    text: "বোনের birthday তে gift দিলাম পিংক আর বেইজ — combo offer এ ২টা নিলাম। ও অনেক খুশি হয়েছে! Packaging ও সুন্দর ছিল।",
    who: "নুসরাত আহমেদ, চট্টগ্রাম",
  },
  {
    stars: 5,
    text: "প্রতিদিন অফিসে নিয়ে যাই। Compact size, সব essential জিনিস ধরে, আর knot handle টা অনেক unique — সবাই জিজ্ঞেস করে কোথায় পেলাম!",
    who: "তানজিলা সুলতানা, সিলেট",
  },
  {
    stars: 4,
    text: "ব্যাগটা অনেক সুন্দর, delivery ও fast ছিল (৩ দিনে পেয়েছি)। শুধু crossbody strap টা আমার জন্য একটু ছোট ছিল, তবে adjustable তো — শেষমেশ ঠিক হয়ে গেছে।",
    who: "রিমা খানম, রাজশাহী",
  },
];

const FAQS = [
  [
    "এটা কি আসল leather?",
    "এই ব্যাগটি প্রিমিয়াম PU (polyurethane) leather দিয়ে তৈরি — দেখতে এবং ছুঁতে real leather এর মতো, কিন্তু cruelty-free এবং পানিতে damage হয় না। সহজে clean করা যায় এবং দীর্ঘদিন টেকে।",
  ],
  [
    "আমার ফোন কি ঢুকবে?",
    "হ্যাঁ! 6.7 ইঞ্চি পর্যন্ত যেকোনো ফোন (iPhone 15 Pro Max, Samsung S24 Ultra সহ) আরামে ফিট হবে। সাথে wallet, keys, lip gloss, earphones ও রাখতে পারবে।",
  ],
  [
    "লম্বা strap আছে সাথে?",
    "হ্যাঁ! প্রতিটি ব্যাগের সাথে ২টি carry option আছে — knotted top handle (হাতে ঝুলিয়ে) + detachable adjustable crossbody strap (কাঁধে ঝুলিয়ে)।",
  ],
  [
    "ডেলিভারি কতদিনে পাবো?",
    "ঢাকার ভিতরে ২–৪ কার্যদিবস, ঢাকার বাইরে ৩–৫ কার্যদিবস। অর্ডার confirm হওয়ার পর তোমাকে tracking update দেওয়া হবে।",
  ],
  [
    "ডেলিভারি চার্জ কত?",
    "ঢাকার ভিতরে ৳80, ঢাকার বাইরে ৳150। সম্পূর্ণ Cash on Delivery — ব্যাগ হাতে পেয়ে টাকা দেবেন।",
  ],
  [
    "পছন্দ না হলে ফেরত দেওয়া যাবে?",
    "হ্যাঁ! ডেলিভারি পাওয়ার ৩ দিনের মধ্যে unused অবস্থায় original packaging সহ return করতে পারবে। Return shipping charge প্রযোজ্য।",
  ],
  [
    "Combo তে কি ২টা একই রঙ নেওয়া যায়?",
    "অবশ্যই! ২টা একই রঙ বা ২টা আলাদা রঙ — তোমার যেভাবে ইচ্ছা সেভাবে mix & match করতে পারো।",
  ],
];

function scrollToOrder() {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function OrderButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={scrollToOrder} className={className}>
      {children}
    </button>
  );
}

function LandingPage() {
  const [selected, setSelected] = useState<ColorId>("black");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const current = COLORS.find((c) => c.id === selected) ?? COLORS[0]!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const combo = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* 1. Announcement bar */}
      <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-brand py-2 text-sm font-semibold text-brand-foreground">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="px-6">
              🔥 ২টি ব্যাগ নিলে ৳100 ছাড়! &nbsp;|&nbsp; ✅ Cash on Delivery &nbsp;|&nbsp; 🚚 ঢাকায়
              ২-৪ দিনে ডেলিভারি &nbsp;|&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* 2. Navbar */}
      <header
        className={`fixed inset-x-0 top-[34px] z-40 bg-card transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src={logo.url}
              alt="Tholi (থলি) logo"
              className="h-10 w-10 shrink-0 rounded-lg object-contain"
            />
            <span className="truncate text-xl font-extrabold text-brand">Tholi</span>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition-transform hover:scale-105">
            অর্ডার করুন
          </OrderButton>
        </nav>
      </header>

      <main className="pt-[86px]">
        {/* 3. Hero */}
        <section className="bg-gradient-to-b from-background to-peach px-4 py-8 sm:py-12">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full bg-brand/15 px-3 py-1 text-sm font-bold text-brand">
                🔥 HOT SELLING
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                তোমার স্টাইলের পারফেক্ট সঙ্গী 👜
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Geometric Knot Crossbody Bag — ট্রেন্ডি ডিজাইন, প্রিমিয়াম কোয়ালিটি, সাশ্রয়ী দাম
              </p>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
                  ৳700
                </span>
                <span className="text-xl text-muted-foreground line-through">৳1,400</span>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold tracking-wide text-brand">
                  ৫০% ছাড়
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground/70">
                অথবা ২টি মাত্র ৳1,300 &nbsp;·&nbsp; ডেলিভারি: ঢাকায় ৳80, বাইরে ৳150
              </p>

              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold">রঙ বেছে নাও:</p>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      aria-label={`${c.bn} ${c.en}`}
                      aria-pressed={selected === c.id}
                      onClick={() => setSelected(c.id)}
                      className={`h-11 w-11 rounded-full border-2 transition-transform hover:scale-110 ${
                        selected === c.id
                          ? "border-brand ring-2 ring-brand ring-offset-2 ring-offset-background"
                          : "border-border"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  সিলেক্টেড: <span className="font-semibold text-foreground">{current.bn}</span> (
                  {current.en})
                </p>
              </div>

              <OrderButton className="cta-bounce mt-6 w-full rounded-2xl bg-brand px-6 py-4 text-lg font-extrabold text-brand-foreground shadow-lg sm:w-auto">
                এখনই অর্ডার করুন →
              </OrderButton>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <span>✅ ক্যাশ অন ডেলিভারি</span>
                <span>🚚 দ্রুত ডেলিভারি</span>
                <span>↩️ ৩ দিনে রিটার্ন</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-4 -z-10 rounded-[2rem] bg-coral/30 blur-2xl" />
                <img
                  key={current.id}
                  src={current.image}
                  alt={`Geometric Knot Crossbody Bag — ${current.en}`}
                  className="w-full rounded-3xl object-cover shadow-xl"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Social proof */}
        <section className="bg-muted px-4 py-4">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 text-center text-sm font-semibold sm:grid-cols-4">
            <span>🛒 2,500+ ব্যাগ বিক্রি হয়েছে</span>
            <span>⭐ 4.8/5 রেটিং</span>
            <span>💕 98% কাস্টমার সন্তুষ্ট</span>
            <span>🏆 #1 Trending Bag</span>
          </div>
        </section>

        {/* 5. Color gallery */}
        <Reveal as="section" className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
              ৬টি স্টানিং কালার — তোমারটা বেছে নাও 🎨
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
              {COLORS.map((c) => {
                const active = selected === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c.id)}
                    className={`group relative overflow-hidden rounded-xl border-2 bg-card p-2 text-left transition-transform hover:-translate-y-1 hover:shadow-lg ${
                      active ? "border-brand shadow-lg" : "border-border"
                    }`}
                  >
                    {active && (
                      <span className="absolute right-3 top-3 z-10 rounded-full bg-brand px-2 py-0.5 text-xs font-bold text-brand-foreground">
                        ✓ সিলেক্টেড
                      </span>
                    )}
                    <img
                      src={c.image}
                      alt={`Tholi bag in ${c.en}`}
                      loading="lazy"
                      className="aspect-square w-full rounded-lg object-cover"
                      width={800}
                      height={800}
                    />
                    <div className="mt-2 flex items-center gap-2 px-1 pb-1">
                      <span
                        aria-hidden
                        className="h-5 w-5 shrink-0 rounded-full border border-border"
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span className="min-w-0 truncate font-bold">{c.bn}</span>
                      <span className="ml-auto shrink-0 font-extrabold text-brand">৳700</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="mx-auto mt-6 max-w-xl rounded-2xl bg-peach p-4 text-center font-semibold">
              💡 TIP: ২টি আলাদা রঙ নিয়ে every outfit এ match করো!
            </p>
          </div>
        </Reveal>

        {/* 6. Combo deal */}
        <section
          ref={combo.ref}
          className="relative overflow-hidden bg-gradient-to-br from-brand to-coral px-4 py-12 text-center text-brand-foreground"
        >
          {combo.visible && <Confetti count={18} />}
          <span aria-hidden className="sparkle absolute left-6 top-8 text-2xl">
            ✨
          </span>
          <span aria-hidden className="sparkle absolute right-8 top-14 text-xl">
            ✨
          </span>
          <div className="relative mx-auto max-w-3xl">
            <p className="text-2xl font-extrabold sm:text-3xl">🎁 COMBO OFFER</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
              যেকোনো ২টি ব্যাগ — মাত্র ৳1,300!
            </h2>
            <p className="mt-2 font-semibold opacity-90">
              ৳1,400 এর জায়গায় ৳1,300 — ৳100 সেভ করো!
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <img
                src={COLORS[3]!.image}
                alt="Rose Mauve bag"
                loading="lazy"
                className="h-24 w-24 rounded-2xl border-4 border-white/70 object-cover sm:h-28 sm:w-28"
              />
              <span className="text-3xl font-extrabold">+</span>
              <img
                src={COLORS[4]!.image}
                alt="Chartreuse bag"
                loading="lazy"
                className="h-24 w-24 rounded-2xl border-4 border-white/70 object-cover sm:h-28 sm:w-28"
              />
              <span className="text-2xl font-extrabold sm:text-3xl">= ৳1,300</span>
            </div>

            <OrderButton className="mt-7 rounded-2xl bg-card px-7 py-4 text-lg font-extrabold text-brand shadow-lg transition-transform hover:scale-105">
              কম্বো অর্ডার করো →
            </OrderButton>
            <p className="mt-3 text-sm opacity-90">যেকোনো রঙ মিক্স ও ম্যাচ করা যাবে</p>
          </div>
        </section>

        {/* 7. Features */}
        <Reveal as="section" className="px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
              কেন এই ব্যাগটাই তোমার দরকার? 💕
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="mt-3 text-lg font-extrabold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 text-center font-semibold">📐 বিস্তারিত Specification নিচে দেখো ⬇️</p>
          </div>
        </Reveal>

        {/* 8. Detail showcase */}
        <Reveal as="section" className="bg-peach px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
              প্রতিটি ডিটেইল যত্ন দিয়ে তৈরি 🔍
            </h2>
            <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:overflow-visible">
              {[
                { img: COLORS[0]!.image, cap: "Embossed geometric texture", pos: "object-center" },
                { img: COLORS[1]!.image, cap: "Hand-tied knotted handle", pos: "object-top" },
                { img: COLORS[4]!.image, cap: "Gold-tone metal tips", pos: "object-right" },
                { img: COLORS[2]!.image, cap: "Spacious interior + zip pocket", pos: "object-bottom" },
              ].map((d) => (
                <figure
                  key={d.cap}
                  className="w-[220px] shrink-0 snap-start rounded-2xl bg-card p-2 shadow-sm md:w-auto"
                >
                  <img
                    src={d.img}
                    alt={d.cap}
                    loading="lazy"
                    className={`aspect-square w-full scale-[1.6] rounded-xl object-cover ${d.pos}`}
                    style={{ transform: "none" }}
                  />
                  <figcaption className="p-2 text-center text-sm font-semibold">{d.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 9. Specs */}
        <Reveal as="section" className="px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">স্পেসিফিকেশন 📋</h2>
            <dl className="mt-7 overflow-hidden rounded-2xl border border-border">
              {SPECS.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3 px-4 py-3 text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-peach"
                  }`}
                >
                  <dt className="font-bold">{k}</dt>
                  <dd className="min-w-0 text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* 10. Reviews */}
        <Reveal as="section" className="bg-peach px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
              কাস্টমারদের মতামত 💬
            </h2>
            <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible">
              {REVIEWS.map((r) => (
                <article
                  key={r.who}
                  className="w-[280px] shrink-0 snap-center rounded-2xl bg-card p-5 shadow-sm sm:w-auto"
                >
                  <p className="text-lg">{"⭐".repeat(r.stars)}</p>
                  <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
                  <p className="mt-4 font-bold">— {r.who}</p>
                  <p className="mt-1 text-xs font-semibold text-green-700">✅ Verified Purchase</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center font-semibold">⭐ 4.8/5 গড় রেটিং (500+ রিভিউ)</p>
          </div>
        </Reveal>

        {/* 11. FAQ */}
        <Reveal as="section" className="px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-3xl">সচরাচর জিজ্ঞাসা ❓</h2>
            <div className="mt-7 space-y-3">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={q}
                    className={`overflow-hidden rounded-2xl bg-card shadow-sm ${
                      open ? "border-l-4 border-brand" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left font-bold"
                    >
                      <span className="min-w-0 flex-1">{q}</span>
                      <span className="shrink-0 text-brand">{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* 12. Urgency */}
        <Reveal as="section" className="bg-[#FFF3EC] px-4 py-12 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="text-4xl">⏰</span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              স্টক সীমিত — তোমারটা এখনই বুক করো!
            </h2>
            <p className="mt-2 text-muted-foreground">এই offer যেকোনো সময় শেষ হতে পারে</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold">
              <span className="pulse-ring inline-block h-2.5 w-2.5 rounded-full bg-brand" />
              limited stock — আজকের জন্য মাত্র কয়েকটি বাকি
            </p>
            <div className="mt-6">
              <OrderButton className="cta-bounce w-full rounded-2xl bg-brand px-7 py-4 text-lg font-extrabold text-brand-foreground shadow-lg sm:w-auto">
                এখনই অর্ডার করুন →
              </OrderButton>
            </div>
          </div>
        </Reveal>

        {/* 13. Order form */}
        <section id="order" className="border-t-4 border-brand bg-cream px-4 py-12">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">তোমার অর্ডার দাও 🛒</h2>
          <p className="mt-2 text-center text-muted-foreground">
            ফর্মটা পূরণ করো — আমরা ফোন করে কনফার্ম করবো
          </p>
          <div className="mt-7">
            <OrderForm initialColor={selected} />
          </div>
        </section>

        {/* 16. Footer */}
        <footer className="bg-[#2D2D2D] px-4 pb-24 pt-10 text-white/80 md:pb-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center gap-2">
              <img src={logo.url} alt="" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-lg font-extrabold text-white">Tholi (থলি)</span>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              <a href={`tel:${PHONE}`} className="hover:text-white">
                Shipping Policy
              </a>
              <span aria-hidden>|</span>
              <a href={`tel:${PHONE}`} className="hover:text-white">
                Return Policy
              </a>
              <span aria-hidden>|</span>
              <a href={`tel:${PHONE}`} className="hover:text-white">
                Contact
              </a>
            </div>
            <div className="mt-5 flex justify-center gap-4 text-xl" aria-label="Social links">
              <span title="Facebook">📘</span>
              <span title="Instagram">📸</span>
              <span title="TikTok">🎵</span>
            </div>
            <p className="mt-6 text-xs">© 2024 Tholi (থলি). সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-1 text-xs">Made with ❤️ in Bangladesh 🇧🇩</p>
          </div>
        </footer>
      </main>

      {/* 14. WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("আমি Geometric Knot Bag অর্ডার করতে চাই")}`}
        target="_blank"
        rel="noreferrer"
        title="WhatsApp এ মেসেজ করো"
        aria-label="WhatsApp এ মেসেজ করো"
        className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl shadow-lg transition-transform hover:scale-110 md:bottom-6"
      >
        💬
      </a>

      {/* 15. Sticky bottom bar (mobile) */}
      {scrolled && (
        <div className="slide-up-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-card px-4 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
          <div className="min-w-0">
            <span className="text-xs text-muted-foreground">থেকে</span>
            <p className="text-xl font-extrabold text-brand">৳700</p>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground">
            অর্ডার করুন
          </OrderButton>
        </div>
      )}
    </div>
  );
}
