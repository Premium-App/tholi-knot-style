# Tholi — Geometric Knot Crossbody Bag landing page

A single-page, mobile-first product page in Bangla + English, built to convert visitors from Facebook/Instagram ads. Vibrant orange (#FF6B35) on warm white, rounded and playful — Instagram-shop energy, not luxury minimal.

## Your photos

- Your থলি logo is used in the top bar and footer.
- Your 6 bag photos are used as the real product images and mapped to colours: Black, Nude Beige, Olive Green, Rose Mauve, Lime (Chartreuse), Soft Pink.
- The hero image swaps to the matching photo when a colour is tapped.
- The "close-up detail" strip reuses zoomed crops of your photos (pattern, knot handle, gold tips, body) since there are no separate macro shots. If you send real close-ups later, they drop straight in.

## Page sections

1. Orange marquee bar with offer, COD and delivery message (fixed).
2. Sticky nav: logo + "Tholi", "অর্ডার করুন" button.
3. Hero: hot-selling badge, Bangla headline, ৳700 with ৳950 struck through, combo line, 6 colour swatches, big CTA, trust row, large product photo.
4. Social proof strip (sold count, rating, satisfaction, trending).
5. Colour gallery — 6 cards, selectable, with mix-and-match tip box.
6. Combo banner — orange→coral gradient, ২টি ৳1,300, sparkle animation, CTA.
7. Four "why this bag" feature cards.
8. Close-up detail showcase (scroll strip on mobile).
9. Specification list.
10. Four customer reviews (swipe on mobile, grid on desktop).
11. FAQ accordion, 7 questions.
12. Urgency block with pulsing limited-stock indicator.
13. Order form (#order).
14. Floating WhatsApp button → 01793648214.
15. Mobile sticky bottom bar with price + order button.
16. Dark footer with policy links, social icons, credit line.

## Order form

Fields: name, phone (11-digit, must start with 01), address, quantity (1 bag ৳700 / 2 bags ৳1,300 with recommended badge), colour dropdown(s) — one for a single bag, two for the combo — delivery area (Dhaka ৳60 / outside ৳120), optional note.

A live total box shows bag price + delivery = grand total. Invalid fields get a red border and a Bangla message. On success the form is replaced by a thank-you card with confetti and your number 01793648214 for follow-up.

## Where orders go

Orders are saved securely in Lovable Cloud so you never lose one. Each saved order keeps name, phone, address, quantity, colours, delivery area, note and total. Only you (as an admin) can read them — the public can submit but cannot view anyone's order.

If you'd like a simple admin page to view incoming orders, say so and I'll add it as a follow-up.

## Technical notes

- TanStack Start route at `/` (replaces the placeholder), Tailwind v4 tokens in `src/styles.css` for the orange/peach/charcoal/gold palette; Nunito + Inter loaded via `<link>` in `__root.tsx`.
- Uploaded images become CDN asset pointers via `lovable-assets`; imported by pointer JSON.
- Lovable Cloud enabled; `public.orders` table with grants, RLS: `INSERT` allowed to `anon`/`authenticated`, `SELECT` restricted to an admin role via a separate `user_roles` table + `has_role()` security-definer function.
- Submission goes through a `createServerFn` with Zod validation server-side (phone regex, colour enum, quantity 1|2) and recomputes the total server-side rather than trusting the client.
- Light animation only: CSS keyframes plus small IntersectionObserver reveal; no heavy libraries. SEO head() with product title, description, og/twitter tags.
