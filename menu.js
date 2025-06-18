const menuData = [
  {
    category: "Entrées",
    items: [
      { name: "Pakora", description: "Beignets de légumes variés à la farine de pois chiche.", price: "5.00€" },
      { name: "Samoussa Sabzi", description: "Triangle frit farci de légumes épicés.", price: "5.50€" },
      { name: "Samoussa Keema", description: "Triangle frit farci à la viande hachée et aux épices.", price: "5.50€" },
      { name: "Crevettes Penjab", description: "Crevettes marinées et légèrement épicées.", price: "6.50€" },
      { name: "Onion Bhaji", description: "Beignets d'oignons émincés aux épices.", price: "5.00€" },
      { name: "Raita aux Crevettes", description: "Yaourt frais avec concombres, tomates et crevettes.", price: "6.00€" },
      { name: "Raita", description: "Yaourt frais avec concombres, tomates et épices douces.", price: "4.50€" },
      { name: "Salade de Poulet", description: "Salade fraîche garnie de morceaux de poulet tikka.", price: "6.00€" },
    ],
  },
  {
    category: "Grillades Tandoori",
    items: [
      { name: "Chicken Tikka", description: "Brochettes de poulet désossé, mariné et cuit au tandoor.", price: "12.00€" },
      { name: "Chicken Tandoori", description: "Cuisse de poulet marinée aux épices et cuite au tandoor.", price: "12.00€" },
      { name: "Shish Kebab", description: "Brochettes de viande hachée aux herbes et épices.", price: "12.00€" },
      { name: "Agneau Tikka", description: "Brochettes d'agneau mariné, tendres et savoureuses.", price: "15.00€" },
      { name: "Poisson Tikka", description: "Poisson mariné et grillé délicatement au tandoor.", price: "15.00€" },
      { name: "Gambas Tandoori", description: "Gambas géantes marinées et grillées à la perfection.", price: "15.00€" },
      { name: "Grillades Mixtes", description: "Assortiment de nos meilleures grillades tandoori.", price: "17.00€" },
    ],
  },
  {
    category: "Pains & Accompagnements",
    items: [
      { name: "Naan Nature", description: "Pain traditionnel cuit au tandoor.", price: "2.50€" },
      { name: "Riz Basmati", description: "Riz parfumé nature.", price: "2.50€" },
      { name: "Naan Sabzi", description: "Naan fourré aux légumes.", price: "3.00€" },
      { name: "Naan à l'Ail", description: "Naan garni d'ail frais.", price: "3.00€" },
      { name: "Naan Keema", description: "Naan fourré à la viande hachée épicée.", price: "3.00€" },
      { name: "Cheese Naan", description: "Pain traditionnel cuit au tandoor, fourré au fromage fondant.", price: "3.50€" },
    ],
  },
  {
    category: "Plats au Poulet",
    items: [
      { name: "Poulet Curry", description: "Le grand classique du curry de poulet traditionnel.", price: "12.00€" },
      { name: "Poulet Sabzi", description: "Poulet cuisiné avec un assortiment de légumes frais.", price: "14.00€" },
      { name: "Butter Chicken", description: "Poulet grillé, sauce onctueuse à la tomate, beurre et crème.", price: "14.00€" },
      { name: "Poulet Madras", description: "Curry de poulet relevé, spécialité de la région de Madras.", price: "15.00€" },
      { name: "Poulet Tikka Masala", description: "Morceaux de poulet tandoori dans une sauce tomate crémeuse.", price: "15.00€" },
      { name: "Poulet Vindaloo", description: "Curry de poulet très épicé avec des pommes de terre.", price: "15.00€" },
      { name: "Poulet Korma", description: "Poulet dans une sauce douce et onctueuse aux amandes et noix de cajou.", price: "15.00€" },
      { name: "Poulet Palak", description: "Poulet cuisiné dans un curry d'épinards frais.", price: "15.00€" },
    ],
  },
  {
    category: "Plats à l'Agneau",
    items: [
      { name: "Agneau Curry", description: "Le grand classique du curry d'agneau traditionnel.", price: "14.00€" },
      { name: "Agneau Makhani", description: "Agneau mijoté dans une sauce onctueuse à la tomate et au beurre.", price: "14.00€" },
      { name: "Agneau Madras", description: "Curry d'agneau relevé, spécialité de la région de Madras.", price: "15.00€" },
      { name: "Agneau Vindaloo", description: "Curry d'agneau très épicé avec des pommes de terre.", price: "15.00€" },
      { name: "Agneau Sabzi", description: "Agneau cuisiné avec un assortiment de légumes frais.", price: "15.00€" },
      { name: "Agneau Korma", description: "Morceaux d'agneau tendres dans une sauce douce aux amandes et à la crème.", price: "15.00€" },
      { name: "Agneau Palak", description: "Agneau cuisiné dans un curry d'épinards frais.", price: "15.00€" },
      { name: "Agneau Tikka Masala", description: "Morceaux d'agneau tandoori dans une sauce tomate crémeuse.", price: "16.00€" },
    ],
  },
  {
    category: "Fruits de Mer",
    items: [
        { name: "Crevettes Curry", description: "Crevettes dans une sauce curry traditionnelle.", price: "14.00€" },
        { name: "Crevettes Korma", description: "Crevettes dans une sauce douce aux amandes et noix de cajou.", price: "15.00€" },
        { name: "Crevettes Madras", description: "Curry de crevettes relevé de la région de Madras.", price: "15.00€" },
        { name: "Crevettes Masala", description: "Crevettes dans une sauce riche aux épices et tomates.", price: "15.00€" },
        { name: "Crevettes Sabzi", description: "Crevettes cuisinées avec un assortiment de légumes frais.", price: "15.00€" },
        { name: "Gambas Curry", description: "Gambas géantes dans une sauce curry traditionnelle.", price: "15.00€" },
        { name: "Poisson Curry", description: "Poisson blanc dans une sauce curry traditionnelle.", price: "15.00€" },
        { name: "Poisson Korma", description: "Poisson blanc dans une sauce douce aux amandes et noix de cajou.", price: "15.00€" },
        { name: "Gambas Korma", description: "Gambas dans une sauce douce aux amandes et noix de cajou.", price: "16.00€" },
        { name: "Gambas Masala", description: "Gambas dans une sauce riche aux épices et tomates.", price: "18.00€" },
    ],
  },
  {
    category: "Biryanis",
    description: "Plat de riz basmati parfumé, mijoté avec des épices, servi avec une sauce raita.",
    items: [
      { name: "Biryani Légumes", price: "13.00€" },
      { name: "Biryani Agneau", price: "15.00€" },
      { name: "Biryani Poulet", price: "15.00€" },
      { name: "Biryani Crevettes", price: "15.00€" },
      { name: "Biryani Royal", description: "Agneau, poulet et crevettes.", price: "17.00€" },
    ],
  },
  {
    category: "Plats Végétariens",
    items: [
      { name: "Dal Makhani", description: "Mélange de lentilles noires et haricots rouges, cuits lentement.", price: "12.00€" },
      { name: "Aloo Palak Paneer", description: "Épinards, pommes de terre et fromage indien maison.", price: "12.00€" },
      { name: "Matar Paneer", description: "Petits pois et fromage indien maison dans une sauce tomate.", price: "12.00€" },
      { name: "Baingan Bharta", description: "Caviar d'aubergines grillées aux épices.", price: "12.00€" },
      { name: "Légumes du Jour", description: "Mélange de légumes de saison cuisinés au curry.", price: "12.00€" },
    ],
  },
   {
    category: "Boissons",
    items: [
        { name: "Lassi", description: "Mangue, Rose ou Nature.", price: "4.00€" },
    ]
   },
  {
    category: "Desserts",
    items: [
      { name: "Mystère", description: "Glace vanille avec un cœur de meringue.", price: "4.00€" },
      { name: "Sorbet", description: "Sorbet aux fruits de saison.", price: "4.00€" },
      { name: "Halwa", description: "Gâteau de semoule aux fruits secs.", price: "5.00€" },
      { name: "Gulab Jamun", description: "Boules de lait solides imbibées de sirop à la cardamome.", price: "5.00€" },
      { name: "Kulfi", description: "Glace indienne traditionnelle à la pistache.", price: "6.00€" },
    ],
  },
];

export function renderMenu() {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return;

  const html = menuData.map(category => `
    <div class="menu-category">
      <h3>${category.category}</h3>
      ${category.description ? `<p class="menu-item-desc" style="flex-basis: 100%; margin-bottom: 1rem;">${category.description}</p>` : ''}
      ${category.items.map(item => `
        <div class="menu-item">
          <h4>${item.name}</h4>
          <p class="menu-item-price">${item.price}</p>
          ${item.description ? `<p class="menu-item-desc">${item.description}</p>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');

  menuGrid.innerHTML = html;
}