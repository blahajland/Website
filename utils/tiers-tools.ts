import sanitizeHtml from "sanitize-html";

interface Tier {
  color: string;
  title: string;
  price: string;
  bulletpoints: string[];
  isFree: boolean;
}

interface TiersList {
  tiers: Array<Tier>;
}

export const formatTiers = (data: any): Array<Tier> => {
  if (!data) return [];
  const tiers = (data as TiersList).tiers;
  tiers.forEach((e) => {
    e.bulletpoints.forEach((e, i, l) => {
      let cleaned = sanitizeHtml(e);
      l[i] = `&bull; ${cleaned}`;
    });
  });
  return tiers;
};
