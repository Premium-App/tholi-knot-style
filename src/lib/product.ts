import bagBlack from "@/assets/bag-black.jpg.asset.json";
import bagBeige from "@/assets/bag-beige.jpg.asset.json";
import bagOlive from "@/assets/bag-olive.jpg.asset.json";
import bagRose from "@/assets/bag-rose.jpg.asset.json";
import bagLime from "@/assets/bag-lime.jpg.asset.json";
import bagPink from "@/assets/bag-pink.jpg.asset.json";

export const COLOR_IDS = ["black", "beige", "olive", "rose", "lime", "pink"] as const;
export type ColorId = (typeof COLOR_IDS)[number];

export type BagColor = {
  id: ColorId;
  bn: string;
  en: string;
  swatch: string;
  image: string;
};

export const COLORS: BagColor[] = [
  { id: "black", bn: "কালো", en: "Black", swatch: "#1f1f1f", image: bagBlack.url },
  { id: "beige", bn: "বেইজ", en: "Nude Beige", swatch: "#cdb69f", image: bagBeige.url },
  { id: "olive", bn: "অলিভ", en: "Olive Green", swatch: "#7b7f5e", image: bagOlive.url },
  { id: "rose", bn: "রোজ", en: "Rose Mauve", swatch: "#b0637a", image: bagRose.url },
  { id: "lime", bn: "লাইম", en: "Chartreuse", swatch: "#b5c34a", image: bagLime.url },
  { id: "pink", bn: "পিংক", en: "Soft Pink", swatch: "#e0bfc4", image: bagPink.url },
];

export const PRICE_ONE = 700;
export const PRICE_TWO = 1300;
export const DELIVERY = { dhaka: 60, outside: 120 } as const;
export type DeliveryArea = keyof typeof DELIVERY;

export const PHONE = "01793648214";
export const WHATSAPP = "8801793648214";

export function colorLabel(id: string): string {
  const found = COLORS.find((c) => c.id === id);
  return found ? `${found.bn} (${found.en})` : id;
}
