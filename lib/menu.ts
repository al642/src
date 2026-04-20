export type Category = "hot" | "cold" | "food";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: Category;
  emoji: string;
}

export const MENU: MenuItem[] = [
  // Hots
  { name: "Espresso", price: "UGX 5,000", description: "A bold, single shot of pure energy.", category: "hot", emoji: "☕" },
  { name: "Double Espresso", price: "UGX 7,000", description: "Twice the kick, twice the love.", category: "hot", emoji: "☕" },
  { name: "Cappuccino", price: "UGX 8,000", description: "Velvety foam over rich espresso.", category: "hot", emoji: "☕" },
  { name: "Caffè Latte", price: "UGX 8,500", description: "Smooth espresso with steamed milk.", category: "hot", emoji: "🥛" },
  { name: "Flat White", price: "UGX 8,000", description: "Silky microfoam, strong coffee.", category: "hot", emoji: "🤍" },
  { name: "Mocha", price: "UGX 9,000", description: "Espresso, chocolate, dreamy.", category: "hot", emoji: "🍫" },
  { name: "Macchiato", price: "UGX 7,500", description: "Espresso marked with a touch of foam.", category: "hot", emoji: "✨" },
  { name: "Hot Chocolate", price: "UGX 8,000", description: "Belgian cocoa, marshmallows on top.", category: "hot", emoji: "🍫" },
  { name: "Chai Latte", price: "UGX 8,000", description: "Spiced black tea with steamed milk.", category: "hot", emoji: "🫖" },
  { name: "Masala Tea", price: "UGX 4,000", description: "Mbalwa classic, cardamom & ginger.", category: "hot", emoji: "🍵" },

  // Colds
  { name: "Iced Latte", price: "UGX 9,000", description: "Espresso poured over milk & ice.", category: "cold", emoji: "🧊" },
  { name: "Iced Americano", price: "UGX 7,000", description: "Crisp espresso, cold water, ice.", category: "cold", emoji: "🧊" },
  { name: "Cold Brew", price: "UGX 10,000", description: "Slow-steeped 18hrs. Smooth & strong.", category: "cold", emoji: "❄️" },
  { name: "Caramel Frappé", price: "UGX 11,000", description: "Blended ice, caramel, espresso.", category: "cold", emoji: "🍯" },
  { name: "Mocha Frappé", price: "UGX 11,000", description: "Chocolate dream blended cold.", category: "cold", emoji: "🍫" },
  { name: "Mango Smoothie", price: "UGX 8,500", description: "Fresh local mangoes, blended.", category: "cold", emoji: "🥭" },
  { name: "Strawberry Smoothie", price: "UGX 9,000", description: "Berries, yoghurt, honey.", category: "cold", emoji: "🍓" },
  { name: "Avocado Shake", price: "UGX 8,000", description: "Creamy, dreamy, Uganda grown.", category: "cold", emoji: "🥑" },
  { name: "Iced Matcha", price: "UGX 10,000", description: "Ceremonial matcha, oat milk, ice.", category: "cold", emoji: "🍃" },
  { name: "Lemonade", price: "UGX 5,500", description: "Fresh squeezed, hint of mint.", category: "cold", emoji: "🍋" },

  // Food
  { name: "Butter Croissant", price: "UGX 6,000", description: "Flaky, golden, baked daily.", category: "food", emoji: "🥐" },
  { name: "Chocolate Muffin", price: "UGX 5,000", description: "Warm, gooey center.", category: "food", emoji: "🧁" },
  { name: "Chicken Sandwich", price: "UGX 13,000", description: "Grilled chicken, fresh greens.", category: "food", emoji: "🥪" },
  { name: "Avocado Toast", price: "UGX 11,000", description: "Sourdough, smashed avo, chili.", category: "food", emoji: "🥑" },
  { name: "Cheesecake Slice", price: "UGX 10,000", description: "New York style, berry coulis.", category: "food", emoji: "🍰" },
  { name: "Samosa (2 pcs)", price: "UGX 3,500", description: "Crispy, spiced, Mbalwa favourite.", category: "food", emoji: "🥟" },
];
