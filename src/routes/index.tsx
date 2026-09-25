import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { OrderForm } from "@/components/OrderForm";
import { Confetti, Reveal, useInView } from "@/components/Reveal";
import {
  IconBag,
  IconCash,
  IconCheck,
  IconClock,
  IconDiamond,
  IconFacebook,
  IconGift,
  IconHeart,
  IconInstagram,
  IconKnot,
  IconLeather,
  IconPhone,
  IconReturn,
  IconRuler,
  IconSparkle,
  IconStar,
  IconTikTok,
  IconTrophy,
  IconTruck,
  IconWhatsApp,
  Stars,
} from "@/components/Icons";
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
    Icon: IconDiamond,
    no: "01",
    title: "জিওমেট্রিক এমবসড ডিজাইন",
    text: "ব্যাগের ফ্ল্যাপে bold geometric pattern — আলোতে texture টা আলাদাভাবে shine করে। কোনো প্রিন্ট না, embossed — তাই সহজে মুছবে না।",
  },
  {
    Icon: IconKnot,
    no: "02",
    title: "সিগনেচার নটেড হ্যান্ডেল",
    text: "দুই পাশে hand-tied leather knots আর gold-tipped metal ends — এই ডিটেইলটাই ব্যাগকে expensive দেখায়। হাতে ঝুলিয়ে carry করো, instant elegant look।",
  },
  {
    Icon: IconLeather,
    no: "03",
    title: "প্রিমিয়াম PU লেদার",
    text: "Soft-touch, scratch-resistant PU leather — ছুঁলেই বুঝবে quality। Rain এ damage হবে না, সহজে clean করা যায়, আর দীর্ঘদিন টিকবে।",
  },
  {
    Icon: IconRuler,
    no: "04",
    title: "পারফেক্ট এভরিডে সাইজ",
    text: "22cm × 14cm — বড় ফোন (6.7 ইঞ্চি পর্যন্ত), wallet, keys, lip gloss, earphones সব আরামে ঢুকবে। ভারী না, সারাদিন comfortable।",
  },
];

const REVIEWS = [
  {
    stars: 5,
    text: "৳700 তে এই কোয়ালিটি বিশ্বাসই হচ্ছিলো না! হাতে পেয়ে আরো বেশি ভালো লেগেছে। আমি আবার অলিভ কালারটাও নেবো।",
    who: "ফাতিমা রহমান",
    city: "ঢাকা",
  },
  {
    stars: 5,
    text: "বোনের birthday তে gift দিলাম পিংক আর বেইজ — combo offer এ ২টা নিলাম। ও অনেক খুশি হয়েছে! Packaging ও সুন্দর ছিল।",
    who: "নুসরাত আহমেদ",
    city: "চট্টগ্রাম",
  },
  {
    stars: 5,
    text: "প্রতিদিন অফিসে নিয়ে যাই। Compact size, সব essential জিনিস ধরে, আর knot handle টা অনেক unique — সবাই জিজ্ঞেস করে কোথায় পেলাম!",
    who: "তানজিলা সুলতানা",
    city: "সিলেট",
  },
  {
    stars: 4,
    text: "ব্যাগটা অনেক সুন্দর, delivery ও fast ছিল (৩ দিনে পেয়েছি)। শুধু crossbody strap টা আমার জন্য একটু ছোট ছিল, তবে adjustable তো — শেষমেশ ঠিক হয়ে গেছে।",
    who: "রিমা খানম",
    city: "রাজশাহী",
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

const CRAFT = [
  { img: 0, cap: "Embossed geometric texture", sub: "আলোতে ঝিলিক দেয়", pos: "object-center" },
  { img: 1, cap: "Hand-tied knotted handle", sub: "সিগনেচার ডিটেইল", pos: "object-top" },
  { img: 4, cap: "Gold-tone metal tips", sub: "হাতে বসানো হার্ডওয়্যার", pos: "object-right" },
  { img: 2, cap: "Spacious interior + zip pocket", sub: "সব essential ধরে", pos: "object-bottom" },
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

function Eyebrow({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "gold" }) {
  return (
    <p className="flex items-center justify-center gap-3">
      <span aria-hidden className={`hairline w-10 ${tone === "gold" ? "opacity-90" : "opacity-70"}`} />
      <span
        className={`eyebrow text-[0.7rem] ${tone === "gold" ? "text-gold" : "text-brand"}`}
      >
        {children}
      </span>
      <span aria-hidden className={`hairline w-10 ${tone === "gold" ? "opacity-90" : "opacity-70"}`} />
    </p>
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
      <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-espresso py-2 text-[0.7rem] font-medium tracking-[0.14em] text-champagne uppercase sm:text-xs">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="px-8">
              ২টি ব্যাগ নিলে ৳100 ছাড় &nbsp;·&nbsp; ক্যাশ অন ডেলিভারি সারা দেশে &nbsp;·&nbsp; ঢাকায় ২–৪ দিনে ডেলিভারি &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* 2. Navbar */}
      <header
        className={`fixed inset-x-0 top-[34px] z-40 border-b bg-cream/90 backdrop-blur-md transition-all ${
          scrolled ? "border-gold/40 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]" : "border-border/60"
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={logo.url}
              alt="Tholi (থলি) logo"
              className="h-10 w-10 shrink-0 rounded-full object-contain ring-1 ring-gold/60"
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-xl font-semibold tracking-[0.2em] text-espresso uppercase">
                Tholi
              </span>
              <span className="eyebrow block text-[0.55rem] text-muted-foreground">
                Bangladesh
              </span>
            </span>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-espresso px-6 py-2.5 text-sm font-semibold text-champagne ring-1 ring-gold/40 transition-colors hover:bg-brand hover:text-brand-foreground">
            অর্ডার করুন
          </OrderButton>
        </nav>
      </header>

      <main className="pt-[98px]">
        {/* 3. Hero */}
        <section className="textile relative overflow-hidden px-4 py-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-champagne/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_1fr]">
            <div className="order-2 lg:order-1">
              <p className="flex items-center gap-3">
                <span aria-hidden className="hairline w-12" />
                <span className="eyebrow text-[0.7rem] text-brand">The Signature Collection</span>
              </p>

              <h1 className="mt-5 text-[2.6rem] leading-[1.14] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
                তোমার স্টাইলের
                <br />
                <span className="font-serif text-[1.08em] font-medium italic text-brand">
                  পারফেক্ট
                </span>{" "}
                সঙ্গী
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Geometric Knot Crossbody Bag — এমবসড টেক্সচার, হাতে বাঁধা নট হ্যান্ডেল, আর
                সারাদিনের জন্য নিখুঁত সাইজ।
              </p>

              <div aria-hidden className="hairline mt-7 max-w-xs" />

              <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-5xl font-bold tracking-tight text-espresso sm:text-6xl">
                  ৳700
                </span>
                <span className="pb-1.5 text-xl text-muted-foreground/80 line-through">৳1,400</span>
                <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-champagne/60 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.12em] text-gold-foreground uppercase">
                  <IconSparkle className="h-3 w-3" />
                  ৫০% ছাড়
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                অথবা ২টি মাত্র <span className="font-semibold text-foreground">৳1,300</span>
                &nbsp;·&nbsp; ডেলিভারি: ঢাকায় ৳80, বাইরে ৳150
              </p>

              <div className="mt-8">
                <p className="eyebrow mb-3 text-[0.65rem] text-muted-foreground">
                  Choose your shade
                </p>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      aria-label={`${c.bn} ${c.en}`}
                      aria-pressed={selected === c.id}
                      onClick={() => setSelected(c.id)}
                      className={`h-10 w-10 rounded-full transition-all duration-300 ${
                        selected === c.id
                          ? "ring-1 ring-espresso ring-offset-4 ring-offset-background"
                          : "ring-1 ring-border ring-offset-2 ring-offset-background hover:ring-gold"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                  ))}
                </div>
                <p className="mt-3 font-serif text-base italic text-muted-foreground">
                  {current.bn} — <span className="text-foreground">{current.en}</span>
                </p>
              </div>

              <OrderButton className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-9 py-4 text-base font-semibold tracking-wide text-brand-foreground shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--brand)_70%,transparent)] transition-all hover:bg-espresso hover:text-champagne sm:w-auto">
                <IconBag className="h-5 w-5" />
                এখনই অর্ডার করুন
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </OrderButton>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <IconCash className="h-4 w-4 text-brand" /> ক্যাশ অন ডেলিভারি
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconTruck className="h-4 w-4 text-brand" /> দ্রুত ডেলিভারি
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconReturn className="h-4 w-4 text-brand" /> ৩ দিনে রিটার্ন
                </span>
              </div>
            </div>

            {/* Product presentation */}
            <div className="order-1 lg:order-2">
              <div className="pedestal relative mx-auto max-w-md">
                <figure className="studio-zoom vignette lux-frame relative overflow-hidden rounded-[1.25rem] bg-linen">
                  <img
                    key={current.id}
                    src={current.image}
                    alt={`Geometric Knot Crossbody Bag — ${current.en}`}
                    className="aspect-[4/5] w-full object-cover"
                    width={1200}
                    height={1500}
                  />
                  <figcaption className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-espresso/85 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.16em] text-champagne uppercase backdrop-blur">
                    <IconStar className="h-2.5 w-2.5" /> Studio Shot
                  </figcaption>
                  <span className="absolute bottom-4 right-4 z-10 rounded-full border border-gold/50 bg-cream/90 px-3 py-1 font-serif text-xs font-semibold tracking-wider text-espresso uppercase backdrop-blur">
                    {current.en}
                  </span>
                </figure>

                {/* Thumbnail rail */}
                <div className="mt-8 flex justify-center gap-2.5">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelected(c.id)}
                      aria-label={`${c.bn} দেখুন`}
                      aria-pressed={selected === c.id}
                      className={`overflow-hidden rounded-lg transition-all duration-300 ${
                        selected === c.id
                          ? "ring-1 ring-espresso ring-offset-2 ring-offset-background"
                          : "opacity-55 ring-1 ring-border hover:opacity-100"
                      }`}
                    >
                      <img
                        src={c.image}
                        alt=""
                        loading="lazy"
                        className="h-12 w-12 object-cover sm:h-14 sm:w-14"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Social proof */}
        <section className="bg-espresso px-4 py-7 text-charcoal-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { Icon: IconBag, big: "2,500+", small: "ব্যাগ ডেলিভার্ড" },
              { Icon: IconStar, big: "4.8/5", small: "কাস্টমার রেটিং" },
              { Icon: IconHeart, big: "98%", small: "সন্তুষ্ট ক্রেতা" },
              { Icon: IconTrophy, big: "#1", small: "ট্রেন্ডিং ব্যাগ" },
            ].map((s) => (
              <div key={s.small} className="flex flex-col items-center gap-1.5">
                <s.Icon className="h-5 w-5 text-gold" />
                <span className="font-serif text-2xl font-semibold text-champagne">{s.big}</span>
                <span className="text-[0.7rem] tracking-[0.12em] text-charcoal-foreground/60 uppercase">
                  {s.small}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Color gallery */}
        <Reveal as="section" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Six Shades</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              আপনার পছন্দটা{" "}
              <span className="font-serif font-medium italic text-brand">বেছে নিন</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
              {COLORS.map((c) => {
                const active = selected === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c.id)}
                    className={`group studio-zoom relative rounded-[1.1rem] bg-linen text-left transition-all duration-500 ${
                      active
                        ? "lux-frame -translate-y-1"
                        : "border border-border/70 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)]"
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={`Tholi bag in ${c.en}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
                      width={800}
                      height={1000}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-[1.1rem] bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent"
                    />
                    {active && (
                      <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-cream/95 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.14em] text-espresso uppercase backdrop-blur">
                        <IconCheck className="h-2.5 w-2.5" /> Selected
                      </span>
                    )}
                    <span className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-4">
                      <span className="min-w-0">
                        <span className="block truncate font-semibold text-champagne">{c.bn}</span>
                        <span className="eyebrow block text-[0.55rem] text-champagne/70">
                          {c.en}
                        </span>
                      </span>
                      <span className="shrink-0 font-serif text-lg font-semibold text-gold">
                        ৳700
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mx-auto mt-10 max-w-lg text-center font-serif text-lg italic text-muted-foreground">
              “২টি আলাদা রঙ নিলে প্রতিটি outfit এর সাথে match করানো যায়।”
            </p>
          </div>
        </Reveal>

        {/* 6. Combo deal */}
        <section
          ref={combo.ref}
          className="textile relative overflow-hidden bg-espresso px-4 py-16 text-center text-charcoal-foreground sm:py-20"
        >
          {combo.visible && <Confetti count={14} />}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5">
              <IconGift className="h-3.5 w-3.5 text-gold" />
              <span className="eyebrow text-[0.65rem] text-gold">Combo Offer</span>
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              যেকোনো ২টি ব্যাগ — মাত্র{" "}
              <span className="font-serif font-semibold italic text-gold">৳1,300</span>
            </h2>
            <p className="mt-3 text-charcoal-foreground/70">
              ৳1,400 এর জায়গায় ৳1,300 — ৳100 সেভ করুন
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <img
                src={COLORS[3]!.image}
                alt="Rose Mauve bag"
                loading="lazy"
                className="h-28 w-24 rounded-xl object-cover ring-1 ring-gold/40 sm:h-32 sm:w-28"
              />
              <span className="font-serif text-2xl text-gold">+</span>
              <img
                src={COLORS[4]!.image}
                alt="Chartreuse bag"
                loading="lazy"
                className="h-28 w-24 rounded-xl object-cover ring-1 ring-gold/40 sm:h-32 sm:w-28"
              />
              <span className="font-serif text-2xl text-champagne">
                = <span className="font-semibold text-gold">৳1,300</span>
              </span>
            </div>

            <OrderButton className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-champagne px-9 py-4 text-base font-semibold text-espresso transition-colors hover:bg-gold">
              <IconGift className="h-5 w-5" />
              কম্বো অর্ডার করুন
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </OrderButton>
            <p className="mt-4 text-sm text-charcoal-foreground/60">
              যেকোনো রঙ মিক্স ও ম্যাচ করা যাবে
            </p>
          </div>
        </section>

        {/* 7. Features */}
        <Reveal as="section" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Why Tholi</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              কেন এই ব্যাগটাই{" "}
              <span className="font-serif font-medium italic text-brand">বেছে নেবেন</span>
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.1rem] border border-border/70 bg-border/60 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <article key={f.title} className="group bg-card p-7 transition-colors hover:bg-linen">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-champagne/40 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                      <f.Icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-2xl font-medium text-border">{f.no}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 8. Craftsmanship showcase */}
        <Reveal as="section" className="textile bg-linen px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>The Craft</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              প্রতিটি ডিটেইল{" "}
              <span className="font-serif font-medium italic text-brand">যত্ন দিয়ে তৈরি</span>
            </h2>
            <div className="mt-11 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
              {CRAFT.map((d) => (
                <figure
                  key={d.cap}
                  className="studio-zoom vignette group relative w-[230px] shrink-0 snap-start overflow-hidden rounded-[1.1rem] border border-gold/30 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] md:w-auto"
                >
                  <img
                    src={COLORS[d.img]!.image}
                    alt={d.cap}
                    loading="lazy"
                    className={`aspect-[4/5] w-full object-cover ${d.pos}`}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/85 to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 text-champagne">
                    <span className="block text-sm font-semibold">{d.cap}</span>
                    <span className="mt-0.5 block text-xs text-champagne/70">{d.sub}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 9. Specs */}
        <Reveal as="section" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Specification</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              স্পেসিফিকেশন
            </h2>
            <dl className="mt-10 overflow-hidden rounded-[1.1rem] border border-border/70">
              {SPECS.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-4 px-5 py-3.5 text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-linen"
                  }`}
                >
                  <dt className="eyebrow text-[0.6rem] text-muted-foreground">{k}</dt>
                  <dd className="min-w-0 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* 10. Reviews */}
        <Reveal as="section" className="bg-linen px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>500+ Reviews</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              কাস্টমারদের <span className="font-serif font-medium italic text-brand">মতামত</span>
            </h2>
            <div className="mt-11 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible">
              {REVIEWS.map((r) => (
                <article
                  key={r.who}
                  className="relative w-[288px] shrink-0 snap-center rounded-[1.1rem] border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-32px_rgba(0,0,0,0.4)] sm:w-auto"
                >
                  <span
                    aria-hidden
                    className="absolute right-6 top-3 font-serif text-5xl leading-none text-border"
                  >
                    ”
                  </span>
                  <Stars value={r.stars} className="text-gold" />
                  <p className="mt-4 text-sm leading-relaxed">{r.text}</p>
                  <div aria-hidden className="hairline my-5" />
                  <p className="font-semibold">{r.who}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{r.city}</p>
                  <p className="mt-2.5 inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.12em] text-leaf uppercase">
                    <IconCheck className="h-3 w-3" /> Verified Purchase
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-9 text-center font-serif text-lg italic text-muted-foreground">
              4.8 / 5 গড় রেটিং — 500+ রিভিউ
            </p>
          </div>
        </Reveal>

        {/* 11. FAQ */}
        <Reveal as="section" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              সচরাচর জিজ্ঞাসা
            </h2>
            <div className="mt-10 overflow-hidden rounded-[1.1rem] border border-border/70 bg-card">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div key={q} className={i > 0 ? "border-t border-border/60" : ""}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className={`flex w-full items-center gap-4 px-5 py-4.5 text-left font-semibold transition-colors ${
                        open ? "bg-linen" : "hover:bg-linen/60"
                      }`}
                    >
                      <span className="font-serif text-sm text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">{q}</span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm transition-all ${
                          open
                            ? "rotate-180 border-brand bg-brand text-brand-foreground"
                            : "border-border text-brand"
                        }`}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <p className="bg-linen px-5 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground">
                        {a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* 12. Urgency */}
        <Reveal
          as="section"
          className="textile relative overflow-hidden bg-brand px-4 py-16 text-center text-brand-foreground sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-espresso/25 via-transparent to-espresso/35"
          />
          <div className="relative mx-auto max-w-2xl">
            <IconClock className="mx-auto h-8 w-8 text-champagne" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              স্টক সীমিত — তোমারটা এখনই বুক করো
            </h2>
            <p className="mt-3 text-brand-foreground/80">এই অফার যেকোনো সময় শেষ হতে পারে</p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-champagne/40 bg-espresso/25 px-5 py-2 text-sm font-medium backdrop-blur">
              <span className="pulse-ring inline-block h-2 w-2 rounded-full bg-champagne" />
              আজকের জন্য মাত্র কয়েকটি বাকি
            </p>
            <div className="mt-9">
              <OrderButton className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-espresso px-9 py-4 text-base font-semibold text-champagne transition-colors hover:bg-cream hover:text-espresso sm:w-auto">
                <IconBag className="h-5 w-5" />
                এখনই অর্ডার করুন
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </OrderButton>
            </div>
          </div>
        </Reveal>

        {/* 13. Order form */}
        <section id="order" className="bg-cream px-4 py-16 sm:py-20">
          <div aria-hidden className="gold-rule mx-auto mb-14 max-w-xs" />
          <Eyebrow>Cash on Delivery</Eyebrow>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            অর্ডার করুন
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            ফর্মটা পূরণ করুন — আমরা ফোন করে কনফার্ম করবো
          </p>
          <div className="mt-10">
            <OrderForm initialColor={selected} />
          </div>
        </section>

        {/* 14. Footer */}
        <footer className="bg-espresso px-4 pb-24 pt-14 text-charcoal-foreground/70 md:pb-14">
          <div className="mx-auto max-w-5xl text-center">
            <img
              src={logo.url}
              alt=""
              className="mx-auto h-11 w-11 rounded-full object-contain ring-1 ring-gold/50"
            />
            <p className="mt-3 font-serif text-2xl font-semibold tracking-[0.24em] text-champagne uppercase">
              Tholi
            </p>
            <p className="eyebrow mt-1 text-[0.6rem] text-charcoal-foreground/50">
              থলি · Bangladesh
            </p>

            <div aria-hidden className="gold-rule mx-auto my-8 max-w-sm" />

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-gold">
                Shipping Policy
              </a>
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-gold">
                Return Policy
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
              >
                <IconPhone className="h-3.5 w-3.5" /> {PHONE}
              </a>
            </div>

            <div className="mt-7 flex justify-center gap-3" aria-label="Social links">
              {[
                { Icon: IconFacebook, name: "Facebook" },
                { Icon: IconInstagram, name: "Instagram" },
                { Icon: IconTikTok, name: "TikTok" },
              ].map((s) => (
                <span
                  key={s.name}
                  title={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-espresso"
                >
                  <s.Icon className="h-4 w-4" />
                </span>
              ))}
            </div>

            <p className="mt-9 text-xs text-charcoal-foreground/50">
              © 2026 Tholi (থলি). সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="mt-1 text-xs text-charcoal-foreground/40">
              Designed &amp; delivered in Bangladesh
            </p>
          </div>
        </footer>
      </main>

      {/* 15. WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("আমি Geometric Knot Bag অর্ডার করতে চাই")}`}
        target="_blank"
        rel="noreferrer"
        title="WhatsApp এ মেসেজ করুন"
        aria-label="WhatsApp এ মেসেজ করুন"
        className="fixed bottom-24 right-4 z-50 grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 md:bottom-6"
      >
        <IconWhatsApp className="h-7 w-7" />
      </a>

      {/* 16. Sticky bottom bar (mobile) */}
      {scrolled && (
        <div className="slide-up-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-gold/40 bg-cream/95 px-4 py-3 backdrop-blur-md shadow-[0_-8px_24px_-16px_rgba(0,0,0,0.5)] md:hidden">
          <div className="min-w-0">
            <span className="eyebrow block text-[0.55rem] text-muted-foreground">Today only</span>
            <p className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-espresso">৳700</span>
              <span className="text-xs text-muted-foreground line-through">৳1,400</span>
            </p>
          </div>
          <OrderButton className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground">
            অর্ডার করুন
          </OrderButton>
        </div>
      )}
    </div>
  );
}
