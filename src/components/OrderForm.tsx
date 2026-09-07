import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitOrder } from "@/lib/orders.functions";
import { Confetti } from "@/components/Reveal";
import {
  COLORS,
  DELIVERY,
  PHONE,
  PRICE_ONE,
  PRICE_TWO,
  type ColorId,
  type DeliveryArea,
} from "@/lib/product";

type Errors = Partial<Record<"name" | "phone" | "address" | "color1" | "color2" | "form", string>>;

const bn = (n: number) => n.toLocaleString("bn-BD", { useGrouping: false });

export function OrderForm({ initialColor }: { initialColor: ColorId }) {
  const send = useServerFn(submitOrder);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState<1 | 2>(1);
  const [color1, setColor1] = useState<ColorId>(initialColor);
  const [color2, setColor2] = useState<ColorId | "">("");
  const [deliveryArea, setDeliveryArea] = useState<DeliveryArea>("dhaka");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const bagAmount = quantity === 2 ? PRICE_TWO : PRICE_ONE;
  const deliveryCharge = DELIVERY[deliveryArea];
  const total = bagAmount + deliveryCharge;

  const fieldClass = (bad?: string) =>
    `w-full rounded-xl border-2 bg-background px-4 py-3 text-base outline-none transition-colors focus:border-brand ${
      bad ? "border-destructive" : "border-border"
    }`;

  const colorOptions = useMemo(
    () =>
      COLORS.map((c) => (
        <option key={c.id} value={c.id}>
          {c.bn} — {c.en}
        </option>
      )),
    [],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "তোমার নাম লিখতে হবে";
    if (!/^01\d{9}$/.test(phone.trim())) next.phone = "১১ ডিজিটের সঠিক নম্বর দাও (01 দিয়ে শুরু)";
    if (address.trim().length < 10) next.address = "বিস্তারিত ঠিকানা লিখতে হবে";
    if (!color1) next.color1 = "রঙ বেছে নাও";
    if (quantity === 2 && !color2) next.color2 = "২য় ব্যাগের রঙ বেছে নাও";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      await send({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          address: address.trim(),
          quantity,
          color1,
          ...(quantity === 2 && color2 ? { color2 } : {}),
          deliveryArea,
          ...(note.trim() ? { note: note.trim() } : {}),
        },
      });
      setDone(true);
    } catch {
      setErrors({ form: "দুঃখিত, অর্ডার পাঠানো যায়নি। আবার চেষ্টা করো বা আমাদের কল করো।" });
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl bg-card p-8 text-center shadow-lg">
        <Confetti />
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-4xl">
          ✅
        </div>
        <h3 className="mt-5 text-2xl font-extrabold">ধন্যবাদ! তোমার অর্ডার সফলভাবে নেওয়া হয়েছে! 🎉</h3>
        <p className="mt-3 text-muted-foreground">
          আমরা শীঘ্রই তোমাকে ফোন করে অর্ডার কনফার্ম করবো।
        </p>
        <p className="mt-4 font-semibold">
          অর্ডার সম্পর্কে জানতে কল করো:{" "}
          <a href={`tel:${PHONE}`} className="text-brand underline">
            {PHONE}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-[500px] rounded-3xl bg-card p-5 shadow-lg sm:p-7"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="of-name" className="mb-1.5 block font-semibold">
            আপনার নাম <span className="text-brand">*</span>
          </label>
          <input
            id="of-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="তোমার পুরো নাম লেখো"
            className={fieldClass(errors.name)}
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="of-phone" className="mb-1.5 block font-semibold">
            ফোন নম্বর <span className="text-brand">*</span>
          </label>
          <input
            id="of-phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01XXXXXXXXX"
            className={fieldClass(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="of-address" className="mb-1.5 block font-semibold">
            ডেলিভারি ঠিকানা <span className="text-brand">*</span>
          </label>
          <textarea
            id="of-address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="বাসা নং, রোড, এলাকা, জেলা — বিস্তারিত লেখো"
            className={fieldClass(errors.address)}
          />
          {errors.address && <p className="mt-1 text-sm text-destructive">{errors.address}</p>}
        </div>

        <fieldset>
          <legend className="mb-2 font-semibold">
            কয়টি ব্যাগ নেবে? <span className="text-brand">*</span>
          </legend>
          <div className="grid gap-2">
            {([1, 2] as const).map((q) => (
              <label
                key={q}
                className={`relative flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-colors ${
                  quantity === q ? "border-brand bg-peach" : "border-border"
                }`}
              >
                <input
                  type="radio"
                  name="quantity"
                  className="h-5 w-5 shrink-0 accent-[var(--brand)]"
                  checked={quantity === q}
                  onChange={() => setQuantity(q)}
                />
                <span className="min-w-0 font-semibold">
                  {q === 1 ? "১টি ব্যাগ — ৳700" : "২টি ব্যাগ — ৳1,300 🔥 (৳100 সেভ!)"}
                </span>
                {q === 2 && (
                  <span className="ml-auto shrink-0 rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-brand-foreground">
                    বেস্ট ডিল
                  </span>
                )}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4">
          <div>
            <label htmlFor="of-c1" className="mb-1.5 block font-semibold">
              {quantity === 2 ? "১ম ব্যাগের রঙ" : "ব্যাগের রঙ"} <span className="text-brand">*</span>
            </label>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-8 w-8 shrink-0 rounded-full border-2 border-border"
                style={{ backgroundColor: COLORS.find((c) => c.id === color1)?.swatch }}
              />
              <select
                id="of-c1"
                value={color1}
                onChange={(e) => setColor1(e.target.value as ColorId)}
                className={fieldClass(errors.color1)}
              >
                {colorOptions}
              </select>
            </div>
          </div>

          {quantity === 2 && (
            <div>
              <label htmlFor="of-c2" className="mb-1.5 block font-semibold">
                ২য় ব্যাগের রঙ <span className="text-brand">*</span>
              </label>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-8 w-8 shrink-0 rounded-full border-2 border-border"
                  style={{ backgroundColor: COLORS.find((c) => c.id === color2)?.swatch ?? "#eee" }}
                />
                <select
                  id="of-c2"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value as ColorId)}
                  className={fieldClass(errors.color2)}
                >
                  <option value="">রঙ বেছে নাও</option>
                  {colorOptions}
                </select>
              </div>
              {errors.color2 && <p className="mt-1 text-sm text-destructive">{errors.color2}</p>}
            </div>
          )}
        </div>

        <fieldset>
          <legend className="mb-2 font-semibold">
            ডেলিভারি এরিয়া <span className="text-brand">*</span>
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(["dhaka", "outside"] as const).map((area) => (
              <label
                key={area}
                className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-colors ${
                  deliveryArea === area ? "border-brand bg-peach" : "border-border"
                }`}
              >
                <input
                  type="radio"
                  name="area"
                  className="h-5 w-5 shrink-0 accent-[var(--brand)]"
                  checked={deliveryArea === area}
                  onChange={() => setDeliveryArea(area)}
                />
                <span className="font-semibold">
                  {area === "dhaka" ? "ঢাকার ভিতরে (৳60)" : "ঢাকার বাইরে (৳120)"}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="of-note" className="mb-1.5 block font-semibold">
            অর্ডার নোট <span className="text-muted-foreground">(অপশনাল)</span>
          </label>
          <textarea
            id="of-note"
            rows={2}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="কোনো বিশেষ কিছু জানাতে চাইলে এখানে লেখো"
            className={fieldClass()}
          />
        </div>

        <div className="rounded-2xl border-2 border-dashed border-brand/40 bg-peach p-4">
          <div className="flex justify-between text-sm">
            <span>
              ব্যাগ:{" "}
              {quantity === 2 ? "৳1,300 × 1 combo" : `৳${bn(PRICE_ONE)} × ${bn(1)}`}
            </span>
            <span className="font-semibold">৳{bagAmount.toLocaleString("en-US")}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm">
            <span>ডেলিভারি:</span>
            <span className="font-semibold">৳{deliveryCharge}</span>
          </div>
          <div className="my-3 border-t border-brand/30" />
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold">সর্বমোট:</span>
            <span className="text-2xl font-extrabold text-brand">
              ৳{total.toLocaleString("en-US")}
            </span>
          </div>
        </div>

        {errors.form && (
          <p className="rounded-xl bg-destructive/10 p-3 text-sm text-destructive">{errors.form}</p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="pulse-ring w-full rounded-2xl bg-brand px-6 py-4 text-lg font-extrabold text-brand-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          {sending ? "পাঠানো হচ্ছে..." : "অর্ডার কনফার্ম করুন ✅"}
        </button>

        <div className="space-y-1 text-center text-sm text-muted-foreground">
          <p>💳 ক্যাশ অন ডেলিভারি — হাতে পেয়ে টাকা দিন</p>
          <p>🔒 তোমার তথ্য সম্পূর্ণ নিরাপদ</p>
        </div>
      </div>
    </form>
  );
}
