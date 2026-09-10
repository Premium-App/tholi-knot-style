import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const COLOR_IDS = ["black", "beige", "olive", "rose", "lime", "pink"] as const;
const PRICE_ONE = 700;
const PRICE_TWO = 1300;
const DELIVERY = { dhaka: 80, outside: 150 } as const;

const orderSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    phone: z
      .string()
      .trim()
      .regex(/^01\d{9}$/),
    address: z.string().trim().min(10).max(500),
    quantity: z.union([z.literal(1), z.literal(2)]),
    color1: z.enum(COLOR_IDS),
    color2: z.enum(COLOR_IDS).optional(),
    deliveryArea: z.enum(["dhaka", "outside"]),
    note: z.string().trim().max(500).optional(),
  })
  .refine((v) => v.quantity === 1 || !!v.color2, { message: "color2 required" });

export type OrderInput = z.infer<typeof orderSchema>;

export const submitOrder = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => orderSchema.parse(data))
  .handler(async ({ data }) => {
    const bagAmount = data.quantity === 2 ? PRICE_TWO : PRICE_ONE;
    const deliveryCharge = DELIVERY[data.deliveryArea];
    const total = bagAmount + deliveryCharge;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("orders").insert({
      customer_name: data.name,
      phone: data.phone,
      address: data.address,
      quantity: data.quantity,
      color_1: data.color1,
      color_2: data.quantity === 2 ? (data.color2 ?? null) : null,
      delivery_area: data.deliveryArea,
      delivery_charge: deliveryCharge,
      bag_amount: bagAmount,
      total_amount: total,
      note: data.note?.length ? data.note : null,
    });

    if (error) {
      console.error("order insert failed", error);
      throw new Error("ORDER_SAVE_FAILED");
    }

    return { ok: true as const, total };
  });
