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
      <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-gradient-to-r from-brand via-coral to-brand py-2 text-xs font-bold tracking-wide text-brand-foreground sm:text-sm">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="px-6">
              🔥 ২টি ব্যাগ নিলে ৳100 ছাড় &nbsp;·&nbsp; ক্যাশ অন ডেলিভারি সারা দেশে &nbsp;·&nbsp; ঢাকায় ২–৪ দিনে ডেলিভারি &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* 2. Navbar */}
      <header
        className={`fixed inset-x-0 top-[34px] z-40 border-b border-border/70 bg-cream/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-lg shadow-brand/5" : ""
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src={logo.url}
              alt="Tholi (থলি) logo"
              className="h-10 w-10 shrink-0 rounded-xl object-contain ring-2 ring-gold/60"
            />
            <span className="truncate text-xl font-extrabold tracking-tight text-brand">Tholi</span>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-gradient-to-r from-brand to-coral px-5 py-2.5 text-sm font-extrabold text-brand-foreground shadow-md shadow-brand/30 transition-transform hover:scale-105">
            অর্ডার করুন
          </OrderButton>
        </nav>
      </header>

      <main className="pt-[86px]">
        {/* 3. Hero */}
        <section className="textile textile-drift relative overflow-hidden px-4 py-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="shimmer inline-block rounded-full border border-gold/60 bg-gold/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground">
                ⭐ বেস্ট সেলিং কালেকশন
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                তোমার স্টাইলের <span className="gold-text">পারফেক্ট</span> সঙ্গী
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Geometric Knot Crossbody Bag — ট্রেন্ডি ডিজাইন, প্রিমিয়াম কোয়ালিটি, সাশ্রয়ী দাম
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-5xl font-extrabold tracking-tight text-brand sm:text-6xl">
                  ৳700
                </span>
                <span className="text-2xl text-muted-foreground line-through">৳1,400</span>
                <span className="shimmer rounded-full bg-gradient-to-r from-gold to-gold/80 px-3 py-1.5 text-xs font-extrabold tracking-wide text-gold-foreground shadow-md shadow-gold/40">
                  ৫০% ছাড়
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground/70">
                অথবা ২টি মাত্র ৳1,300 &nbsp;·&nbsp; ডেলিভারি: ঢাকায় ৳80, বাইরে ৳150
              </p>

              <div className="mt-6">
                <p className="mb-2 text-sm font-bold">রঙ বেছে নাও:</p>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      aria-label={`${c.bn} ${c.en}`}
                      aria-pressed={selected === c.id}
                      onClick={() => setSelected(c.id)}
                      className={`h-11 w-11 rounded-full border-2 shadow-sm transition-transform hover:scale-110 active:scale-95 ${
                        selected === c.id
                          ? "border-brand ring-2 ring-gold ring-offset-2 ring-offset-background"
                          : "border-border"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  সিলেক্টেড: <span className="font-bold text-foreground">{current.bn}</span> (
                  {current.en})
                </p>
              </div>

              <OrderButton className="shimmer cta-glow mt-7 w-full rounded-2xl bg-gradient-to-r from-brand to-coral px-8 py-4 text-lg font-extrabold text-brand-foreground transition-transform hover:scale-[1.02] sm:w-auto">
                এখনই অর্ডার করুন →
              </OrderButton>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <span>✅ ক্যাশ অন ডেলিভারি</span>
                <span>🚚 দ্রুত ডেলিভারি</span>
                <span>↩️ ৩ দিনে রিটার্ন</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="floaty relative mx-auto max-w-md">
                <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/50 to-brand/40 blur-2xl" />
                <div className="rounded-[2rem] bg-gradient-to-br from-gold via-brand to-coral p-1.5 shadow-2xl shadow-brand/25">
                  <img
                    key={current.id}
                    src={current.image}
                    alt={`Geometric Knot Crossbody Bag — ${current.en}`}
                    className="w-full rounded-[1.7rem] object-cover"
                    width={1200}
                    height={800}
                  />
                </div>
                <span className="sparkle absolute -right-2 -top-2 grid h-12 w-12 place-items-center rounded-full bg-gold text-xl shadow-lg shadow-gold/50">
                  ✨
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Social proof */}
        <section className="bg-charcoal px-4 py-5 text-charcoal-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 text-center text-sm font-bold sm:grid-cols-4">
            <span>🛒 <span className="text-gold">2,500+</span> ব্যাগ বিক্রি হয়েছে</span>
            <span>⭐ <span className="text-gold">4.8/5</span> রেটিং</span>
            <span>💕 <span className="text-gold">98%</span> কাস্টমার সন্তুষ্ট</span>
            <span>🏆 <span className="text-gold">#1</span> Trending Bag</span>
          </div>
        </section>

        {/* 5. Color gallery */}
        <Reveal as="section" className="px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
              ৬টি রঙ
            </p>
            <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              আপনার পছন্দটা <span className="gold-text">বেছে নিন</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {COLORS.map((c) => {
                const active = selected === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c.id)}
                    className={`group relative overflow-hidden rounded-2xl border-2 bg-card p-2 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/15 ${
                      active ? "border-brand shadow-lg shadow-brand/20 ring-2 ring-gold/60" : "border-border"
                    }`}
                  >
                    {active && (
                      <span className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-brand to-coral px-2.5 py-0.5 text-xs font-extrabold text-brand-foreground shadow">
                        ✓ সিলেক্টেড
                      </span>
                    )}
                    <img
                      src={c.image}
                      alt={`Tholi bag in ${c.en}`}
                      loading="lazy"
                      className="aspect-square w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    <div className="mt-2 flex items-center gap-2 px-1 pb-1">
                      <span
                        aria-hidden
                        className="h-5 w-5 shrink-0 rounded-full border border-border shadow-inner"
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span className="min-w-0 truncate font-bold">{c.bn}</span>
                      <span className="ml-auto shrink-0 font-extrabold text-brand">৳700</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="textile mx-auto mt-7 max-w-xl rounded-2xl border border-gold/40 bg-peach p-4 text-center font-bold">
              💡 TIP: ২টি আলাদা রঙ নিয়ে every outfit এ match করো!
            </p>
          </div>
        </Reveal>

        {/* 6. Combo deal */}
        <section
          ref={combo.ref}
          className="textile relative overflow-hidden bg-charcoal px-4 py-14 text-center text-charcoal-foreground"
        >
          {combo.visible && <Confetti count={18} />}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <span aria-hidden className="sparkle absolute left-6 top-8 text-2xl">
            ✨
          </span>
          <span aria-hidden className="sparkle absolute right-8 top-14 text-xl">
            ✨
          </span>
          <div className="relative mx-auto max-w-3xl">
            <p className="gold-text text-xl font-extrabold tracking-wide sm:text-2xl">🎁 COMBO OFFER</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              যেকোনো ২টি ব্যাগ — মাত্র <span className="text-gold">৳1,300!</span>
            </h2>
            <p className="mt-2 font-semibold opacity-90">
              ৳1,400 এর জায়গায় ৳1,300 — ৳100 সেভ করো!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <img
                src={COLORS[3]!.image}
                alt="Rose Mauve bag"
                loading="lazy"
                className="h-24 w-24 rounded-2xl border-4 border-gold/70 object-cover shadow-lg shadow-brand/30 sm:h-28 sm:w-28"
              />
              <span className="text-3xl font-extrabold text-gold">+</span>
              <img
                src={COLORS[4]!.image}
                alt="Chartreuse bag"
                loading="lazy"
                className="h-24 w-24 rounded-2xl border-4 border-gold/70 object-cover shadow-lg shadow-brand/30 sm:h-28 sm:w-28"
              />
              <span className="text-2xl font-extrabold sm:text-3xl">= <span className="text-gold">৳1,300</span></span>
            </div>

            <OrderButton className="shimmer cta-glow mt-8 rounded-2xl bg-gradient-to-r from-brand to-coral px-8 py-4 text-lg font-extrabold text-brand-foreground transition-transform hover:scale-105">
              কম্বো অর্ডার করো →
            </OrderButton>
            <p className="mt-3 text-sm opacity-80">যেকোনো রঙ মিক্স ও ম্যাচ করা যাবে</p>
          </div>
        </section>

        {/* 7. Features */}
        <Reveal as="section" className="px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
              প্রিমিয়াম কোয়ালিটি
            </p>
            <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              কেন এই ব্যাগটাই <span className="gold-text">বেছে নেবেন</span>
            </h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-brand/10"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand/15 to-gold/25 text-3xl transition-transform group-hover:scale-110">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center font-bold">📐 বিস্তারিত Specification নিচে দেখো ⬇️</p>
          </div>
        </Reveal>

        {/* 8. Detail showcase */}
        <Reveal as="section" className="textile bg-peach px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
              কারুকাজ
            </p>
            <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              প্রতিটি ডিটেইল <span className="gold-text">যত্ন দিয়ে তৈরি</span>
            </h2>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:overflow-visible">
              {[
                { img: COLORS[0]!.image, cap: "Embossed geometric texture", pos: "object-center" },
                { img: COLORS[1]!.image, cap: "Hand-tied knotted handle", pos: "object-top" },
                { img: COLORS[4]!.image, cap: "Gold-tone metal tips", pos: "object-right" },
                { img: COLORS[2]!.image, cap: "Spacious interior + zip pocket", pos: "object-bottom" },
              ].map((d) => (
                <figure
                  key={d.cap}
                  className="w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gold/40 bg-card p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl md:w-auto"
                >
                  <img
                    src={d.img}
                    alt={d.cap}
                    loading="lazy"
                    className={`aspect-square w-full rounded-xl object-cover ${d.pos}`}
                  />
                  <figcaption className="p-2 text-center text-sm font-bold">{d.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 9. Specs */}
        <Reveal as="section" className="px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">স্পেসিফিকেশন</h2>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
              {SPECS.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3 px-4 py-3 text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-peach"
                  }`}
                >
                  <dt className="font-extrabold">{k}</dt>
                  <dd className="min-w-0 text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* 10. Reviews */}
        <Reveal as="section" className="bg-peach px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
              ৫০০+ রিভিউ
            </p>
            <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              কাস্টমারদের <span className="gold-text">মতামত</span>
            </h2>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible">
              {REVIEWS.map((r) => (
                <article
                  key={r.who}
                  className="w-[280px] shrink-0 snap-center rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  <p className="text-lg tracking-wide">{"⭐".repeat(r.stars)}</p>
                  <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
                  <p className="mt-4 font-extrabold">— {r.who}</p>
                  <p className="mt-1 text-xs font-bold text-leaf">✅ Verified Purchase</p>
                </article>
              ))}
            </div>
            <p className="mt-7 text-center font-bold">⭐ 4.8/5 গড় রেটিং (500+ রিভিউ)</p>
          </div>
        </Reveal>

        {/* 11. FAQ */}
        <Reveal as="section" className="px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">সচরাচর জিজ্ঞাসা</h2>
            <div className="mt-8 space-y-3">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={q}
                    className={`overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors ${
                      open ? "border-l-4 border-brand border-border/70" : "border-border/70"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left font-extrabold"
                    >
                      <span className="min-w-0 flex-1">{q}</span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-extrabold transition-colors ${
                          open ? "bg-brand text-brand-foreground" : "bg-peach text-brand"
                        }`}
                      >
                        {open ? "−" : "+"}
                      </span>
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
        <Reveal as="section" className="textile relative overflow-hidden bg-gradient-to-br from-brand via-coral to-brand px-4 py-14 text-center text-brand-foreground">
          <div className="relative mx-auto max-w-2xl">
            <span className="sparkle inline-block text-4xl">⏰</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              স্টক সীমিত — তোমারটা এখনই বুক করো!
            </h2>
            <p className="mt-2 opacity-90">এই offer যেকোনো সময় শেষ হতে পারে</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal/30 px-4 py-2 text-sm font-extrabold backdrop-blur">
              <span className="pulse-ring inline-block h-2.5 w-2.5 rounded-full bg-gold" />
              সীমিত স্টক — আজকের জন্য মাত্র কয়েকটি বাকি
            </p>
            <div className="mt-7">
              <OrderButton className="shimmer w-full rounded-2xl bg-charcoal px-8 py-4 text-lg font-extrabold text-gold shadow-xl transition-transform hover:scale-105 sm:w-auto">
                এখনই অর্ডার করুন →
              </OrderButton>
            </div>
          </div>
        </Reveal>

        {/* 13. Order form */}
        <section id="order" className="border-t-4 border-gold bg-cream px-4 py-14">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
            ক্যাশ অন ডেলিভারি
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">অর্ডার করুন</h2>
          <p className="mt-2 text-center text-muted-foreground">
            ফর্মটা পূরণ করো — আমরা ফোন করে কনফার্ম করবো
          </p>
          <div className="mt-8">
            <OrderForm initialColor={selected} />
          </div>
        </section>

        {/* 16. Footer */}
        <footer className="bg-charcoal px-4 pb-24 pt-12 text-charcoal-foreground/80 md:pb-12">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center gap-2">
              <img src={logo.url} alt="" className="h-9 w-9 rounded-xl object-contain ring-2 ring-gold/50" />
              <span className="text-lg font-extrabold text-charcoal-foreground">Tholi (থলি)</span>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              <a href={`tel:${PHONE}`} className="hover:text-gold">
                Shipping Policy
              </a>
              <span aria-hidden className="text-gold/60">|</span>
              <a href={`tel:${PHONE}`} className="hover:text-gold">
                Return Policy
              </a>
              <span aria-hidden className="text-gold/60">|</span>
              <a href={`tel:${PHONE}`} className="hover:text-gold">
                Contact
              </a>
            </div>
            <div className="mt-5 flex justify-center gap-3" aria-label="Social links">
              {["Facebook", "Instagram", "TikTok"].map((n) => (
                <span
                  key={n}
                  title={n}
                  className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-xs font-extrabold text-gold transition-colors hover:bg-gold hover:text-charcoal"
                >
                  {n.slice(0, 2)}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs">© 2026 Tholi (থলি). সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-1 text-xs">Designed &amp; delivered in Bangladesh</p>
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
        className="cta-glow fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl shadow-xl transition-transform hover:scale-110 md:bottom-6"
      >
        💬
      </a>

      {/* 15. Sticky bottom bar (mobile) */}
      {scrolled && (
        <div className="slide-up-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-gold/40 bg-cream px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] md:hidden">
          <div className="min-w-0">
            <span className="text-xs text-muted-foreground line-through">৳1,400</span>
            <p className="text-xl font-extrabold tracking-tight text-brand">৳700</p>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-gradient-to-r from-brand to-coral px-5 py-3 text-sm font-extrabold text-brand-foreground shadow-md shadow-brand/30">
            অর্ডার করুন
          </OrderButton>
        </div>
      )}
    </div>
  );
}
