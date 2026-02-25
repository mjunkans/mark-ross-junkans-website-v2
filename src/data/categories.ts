export const categoryColors: Record<string, string> = {
  "Faith & AI": "border-l-amber-500",
  "Faith & Culture": "border-l-emerald-500",
  "Devotional Life": "border-l-sky-400",
  "Business & Faith": "border-l-rose-400",
  "Endurance & Faith": "border-l-orange-400",
};

export const categoryDotColors: Record<string, string> = {
  "Faith & AI": "bg-amber-500",
  "Faith & Culture": "bg-emerald-500",
  "Devotional Life": "bg-sky-400",
  "Business & Faith": "bg-rose-400",
  "Endurance & Faith": "bg-orange-400",
};

export function getCategoryBorderColor(category: string): string {
  return categoryColors[category] || "border-l-gold";
}

export function getCategoryDotColor(category: string): string {
  return categoryDotColors[category] || "bg-gold";
}
