const menuData = [
  {
    id: "breakfast",
    title: "Breakfast (Served with Chai)",
    items: [
      {
        name: "Poha",
        price: "14",
        description:
          "Flattened rice tossed with vegetables, green peas, onions, green chilies, mild spices, peanuts, and topped with sev and fresh green mango.",
      },
      {
        name: "Upma",
        price: "14",
        description: "Classic vegetable upma with aromatic spices.",
        images: ["assets/menu-images/Breakfast/Upma.jpg"],
      },
      {
        name: "Stuffed Paratha's",
        price: "Aloo Paratha OR Methi Paratha 16\nCheese Paratha OR Paneer Paratha 19",
        description: "Fresh whole wheat stuffed parathas, served with yogurt & pickle.",
        images: ["assets/menu-images/Breakfast/Stuffed Paratha.jpg"],
      },
      {
        name: "Poori Bhaji",
        price: "17",
        description: "Poori served with potato curry. Choice of dry or gravy bhaji.",
      },
      {
        name: "Chole Bhatura",
        price: "24",
        description: "Fluffy deep-fried flatbread served with chickpea curry.",
      },
      {
        name: "Thepla Platter",
        price: "17",
        description:
          "A Gujarati Specialty! Spiced flatbread served with a flavorful dry potato bhaji.",
        images: ["assets/menu-images/Breakfast/Thepla Platter.jpg"],
      },
      {
        name: "Maska Bun",
        price: "Soft bun with sweet cream 6 | With Chai 8\nCheese Honey Maska Bun 9 | With Chai 11",
        description: "",
        images: ["assets/menu-images/Breakfast/maska bun with sweet butter.jpg"],
      },
      {
        name: "Egg Paratha",
        price: "18",
        description:
          "Omelette with onions, green chilies, and fresh coriander rolled in a flaky paratha.",
      },
      {
        name: "Egg Bhurji Pav",
        price: "18",
        description:
          "Scrambled eggs cooked with onions, chilies and tomatoes, served with buttery pav.",
      },
      {
        name: "Masala Omelette",
        price: "18",
        description: "Masala omelette with onions, tomatoes, chillies, toast & chai.",
        images: ["assets/menu-images/Breakfast/Masala Omlette.jpg"],
      },
    ],
  },
  {
    id: "sandwiches-wraps-burgers",
    title: "Sandwiches / Wraps / Burgers",
    items: [
      {
        name: "Chilli Cheese Sandwich",
        price: "19",
        description:
          "A toasted sandwich loaded with melted cheese and spicy green chillies and capsicum served with crispy golden fries.",
      },
      {
        name: "Bombay Sandwich",
        price: "22",
        description:
          "Toasted sandwich layered with fresh vegetables, green chutney, served with crispy golden fries. Available with or without cheese.",
        images: ["assets/menu-images/Sandwich/bombay-sandwich.jpg"],
      },
      {
        name: "Omelette Sandwich",
        price: "22",
        description:
          "A fluffy masala omelette tucked between toasted bread slices, served with crispy golden fries. Available with and without cheese.",
      },
      {
        name: "Chicken Tikka Sandwich",
        price: "24",
        description: "Flavorful chicken tikka with green chutney, served with crispy fries.",
      },
      {
        name: "Chicken Mayo Sandwich",
        price: "24",
        description:
          "Tender chicken mixed with creamy mayonnaise in toasted bread, served with crispy fries.",
        images: ["assets/menu-images/Sandwich/Chicken Mayo Sandwich.jpg"],
      },
      {
        name: "Wraps",
        price: "Aloo 20 | Paneer 25 | Chicken 25",
        description:
          "Your choice of aloo, paneer, or chicken wrapped with fresh vegetables and flavorful sauces in a wheat or white paratha, served with fries or salad.",
      },
      {
        name: "Burgers",
        price: "Peri Peri Aloo Tikki 23 | Paneer 27\nMasala Fried Chicken 27 | Nihari 32",
        description: "Choose your favorite burger, served with fries & Soft Drink or water.",
        images: ["assets/menu-images/Burger/Burgers.jpg"],
      },
    ],
  },
  {
    id: "rice-bowls",
    title: "Rice Bowls",
    items: [
      {
        name: "Grilled Chicken OR Vegetable with Herb Rice Bowl",
        price: "22",
        description: "",
      },
      {
        name: "Nasi Goreng Rice Bowl",
        price: "24",
        description:
          "Indonesian-style fried rice with your choice of vegetables or chicken, tossed with aromatic spices.",
      },
    ],
  },
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    items: [
      { name: "Chai", price: "1.50", description: "", images: ["assets/menu-images/Hot Beverages/Chai.jpg"] },
      { name: "Masala Chai", price: "4", description: "" },
      { name: "Masala Chai Big", price: "6", description: "" },
      { name: "Adrak Chai", price: "4", description: "" },
      { name: "Adrak Chai Big", price: "6", description: "" },
      { name: "Black Tea", price: "5", description: "" },
      { name: "Zafran Chai", price: "8", description: "" },
      { name: "Americano", price: "10", description: "" },
      { name: "Latte", price: "13", description: "" },
      {
        name: "Cuppuccino",
        price: "13",
        description: "",
        images: ["assets/menu-images/Hot Beverages/Cappucino.jpg"],
      },
      { name: "Spanish Latte", price: "16", description: "" },
      { name: "Desi Coffee", price: "2", description: "" },
      { name: "Masala Coffee", price: "3", description: "" },
      { name: "Espresso", price: "Single 8 | Double 11", description: "" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    items: [
      { name: "Iced Latte", price: "14", description: "", images: ["assets/menu-images/Cold Beverages/Iced latte.jpg"] },
      { name: "Iced Spanish Latte", price: "16", description: "" },
      { name: "Cold Coffee", price: "15", description: "", images: ["assets/menu-images/Cold Beverages/Cold Coffee.jpg"] },
      { name: "Lassi Sweet / Salty", price: "13", description: "" },
      { name: "Masala Chaas", price: "13", description: "" },
      { name: "Hibiscus Shikanji", price: "15", description: "" },
      { name: "Fresh Lime Soda / Water", price: "13", description: "" },
      { name: "Fresh Orange Juice", price: "16", description: "", images: ["assets/menu-images/Cold Beverages/Orange Juice.jpg"] },
      {
        name: "Mojito Mint / Passion Fruit",
        price: "16",
        description: "",
        images: [
          "assets/menu-images/Cold Beverages/Mint Mojito.jpg",
          "assets/menu-images/Cold Beverages/Passion Fruit Mojito.jpg",
        ],
      },
      { name: "Masala Cola", price: "13", description: "" },
      { name: "Milkshake", price: "20", description: "" },
      { name: "Soft Drink", price: "5", description: "" },
      { name: "Water", price: "2", description: "" },
    ],
  },
  {
    id: "chaat",
    title: "Chaat",
    items: [
      {
        name: "Pani Puri",
        price: "12",
        description: "Bite-sized crispy puris bursting with spicy, tangy, and sweet flavors.",
      },
      {
        name: "Sev Puri OR Dahi Puri OR Bhel Puri",
        price: "13",
        description:
          "Classic Indian street snack with tangy chutneys, mashed potatoes, crunchy toppings and pomegranate.",
      },
      {
        name: "Dabeli",
        price: "13",
        description: "A sweet and spicy potato-filled bun topped with chutneys, peanuts, and sev.",
      },
      {
        name: "Aloo Tikki Chaat OR Samosa Chaat",
        price: "17",
        description:
          "Crispy potato patties served with chutneys, sev and chaat masala, or crispy samosas topped with chickpeas, chutneys, and sev.",
        images: [
          "assets/menu-images/Chaat/Aloo Tikki Chaat.jpg",
          "assets/menu-images/Chaat/Samosa Chaat.jpg",
        ],
      },
      {
        name: "Samosa Pav OR Vada Pav",
        price: "11",
        description:
          "Crispy samosa or potato fritter served inside soft pav with chutneys, and spices for a flavorful street-food twist.",
        images: [
          "assets/menu-images/Chaat/Samosa Pav.jpg",
          "assets/menu-images/Chaat/Vada Pav.jpg",
        ],
      },
      {
        name: "Kala Channa Chaat",
        price: "16",
        description:
          "Spiced black chickpeas with green chilies, onions, tomatoes and dry spices.",
        images: ["assets/menu-images/Chaat/Kala Chaana Chaat.jpg"],
      },
      {
        name: "Papadi Cone OR Katori Chaat",
        price: "20",
        description:
          "Crispy papdi cones or katori filled with spicy potatoes, brown sprouts, chickpeas, chutneys, and sev.",
      },
      {
        name: "Pav Bhaji",
        price: "24",
        description: "Spiced mashed vegetables served with butter-toasted pav.",
        images: ["assets/menu-images/Chaat/Pav Bhaji.jpg"],
      },
      {
        name: "Misal Pav",
        price: "24",
        description: "Spicy sprout curry topped with farsan, served with pav.",
        images: ["assets/menu-images/Chaat/Misal Pav.jpg"],
      },
    ],
  },
  {
    id: "pakoras",
    title: "Pakora's",
    items: [
      {
        name: "Pakora's",
        price:
          "Aloo OR Methi OR Onion 15 (served with Chai)\nChilli 12 | Cheese Corn 16 | Mix Pakora 18\nPaneer 19",
        description:
          "Crispy, golden fritters made with vegetables coated in spiced gram flour batter and deep-fried to perfection. All pakoras are served in portions of 8 pieces. Mix Pakora is served in 12 pieces.",
        images: ["assets/menu-images/Pakora's/mix pakora.jpg"],
      },
    ],
  },
  {
    id: "mimis-special",
    title: "Mimi's Special",
    items: [
      {
        name: "Vegetarian Thali",
        price: "27",
        description:
          "A complete Indian meal with gravy sabzi, dry sabzi, dal, rice, 4 rotis, appetizer, sweet, and water.",
      },
      {
        name: "Chicken Thali",
        price: "30",
        description:
          "A wholesome platter with chicken gravy, dry sabzi, dal, rice, 4 rotis, appetizer, sweet, and water.",
      },
    ],
  },
  {
    id: "big-plate",
    title: "Big Plate",
    items: [
      {
        name: "Dal Fry OR Tadka",
        price: "25",
        description:
          "Yellow lentils cooked to perfection and finished with a fragrant garlic and spice tempering for a rich, homestyle flavor. Served with rice.",
      },
      {
        name: "Veg Makhani",
        price: "33",
        description:
          "A rich, creamy mix of garden vegetables in a buttery tomato gravy with mild spices, served with paratha.",
        images: ["assets/menu-images/Big Plates/veg makhni.jpg"],
      },
      {
        name: "Veg OR Egg Bhurji Masala",
        price: "33",
        description:
          "Mixed vegetables or eggs sauteed with onions, tomatoes, and Indian spices. Served with paratha.",
      },
      {
        name: "Paneer Tikka Lababdar",
        price: "33",
        description:
          "Paneer tikka cubes in a rich, creamy tomato gravy with aromatic spices, served with paratha.",
      },
      {
        name: "Murg-E-Nizami",
        price: "33",
        description:
          "Tender chicken in a rich, creamy onion gravy with aromatic spices, served with paratha.",
        images: ["assets/menu-images/Big Plates/Murg-e-nizami.jpg"],
      },
      {
        name: "Chicken Kosha",
        price: "33",
        description:
          "Tender chicken slow-cooked in a rich, spiced onion-based gravy for an authentic homestyle flavor. Served with paratha.",
      },
      {
        name: "Butter Chicken",
        price: "33",
        description: "Tender chicken in a rich, creamy tomato gravy, served with paratha.",
      },
    ],
  },
  {
    id: "bread-biryani",
    title: "Bread / Biryani",
    items: [
      { name: "Roti", price: "2", description: "" },
      { name: "Plain Paratha", price: "6", description: "", images: ["assets/menu-images/Bread or biryani/Plain Paratha.jpg"] },
      { name: "Laccha Paratha", price: "7", description: "" },
      { name: "Bajra Roti", price: "7", description: "", images: ["assets/menu-images/Bread or biryani/Bajra roti.jpg"] },
      {
        name: "Paneer Biryani",
        price: "28",
        description: "Spiced basmati rice layered with paneer.",
      },
      {
        name: "Chicken Biryani",
        price: "30",
        description:
          "Fragrant basmati rice layered with spiced chicken. Served with Raita, Pickle & Papad.",
        images: ["assets/menu-images/Bread or biryani/Chicken biryani.jpg"],
      },
    ],
  },
  {
    id: "small-plates",
    title: "Small Plates",
    items: [
      {
        name: "Punjabi Samosa Plate",
        price: "10",
        description: "Fried pastry stuffed with spiced potatoes. 2 pcs.",
        images: ["assets/menu-images/Small Plates/Punjabi Samosa.jpg"],
      },
      {
        name: "Green Chili Paneer",
        price: "22",
        description: "Paneer sauteed with peppers and onions in a zesty green chili sauce.",
        images: ["assets/menu-images/Small Plates/Green Chili Paneer.jpg"],
      },
      {
        name: "Hara Bhara Kebab",
        price: "20",
        description: "Flavorful patties cooked with spinach, peas, and spices. 6 pcs.",
        images: ["assets/menu-images/Small Plates/Hara Bhara Kebab.jpg"],
      },
      {
        name: "Cheese & Broccoli Fritters",
        price: "24",
        description: "Crispy golden bites of broccoli and melted cheese, lightly spiced. 6 pcs.",
        images: ["assets/menu-images/Small Plates/Cheese & Broccoli fritters.jpg"],
      },
      {
        name: "Chicken OR Paneer Tikka Skewers",
        price: "24",
        description:
          "Succulent chicken or paneer tikka marinated in spices and grilled on skewers for a smoky, flavorful bite.",
        images: ["assets/menu-images/Small Plates/Chicken Tikka Skewers.jpg"],
      },
      {
        name: "Kerala Style Fried Chicken",
        price: "20",
        description: "Tender chicken marinated in a blend of spices, deep-fried to crispy perfection.",
        images: ["assets/menu-images/Small Plates/Kerala Fried Chicken.jpg"],
      },
      {
        name: "Chili Chicken",
        price: "20",
        description: "Crispy chicken tossed with onions, bell peppers, and spicy chili sauce.",
        images: ["assets/menu-images/Small Plates/Chili Chicken.jpg"],
      },
      {
        name: "Regular OR Peri Peri Fries",
        price: "14",
        description: "Crispy golden fries tossed with a smoky, spicy peri-peri seasoning.",
        images: ["assets/menu-images/Small Plates/Regular or Peri Peri fries.jpg"],
      },
    ],
  },
  {
    id: "mimis-tea-blend",
    title: "Mimi's Tea Blend",
    items: [
      { name: "Green Tea", price: "8", description: "" },
      {
        name: "CCF Tea",
        price: "8",
        description:
          "A soothing blend of cumin, coriander, and fennel with a warm, aromatic, and comforting flavor.",
      },
      {
        name: "Immunity Booster",
        price: "8",
        description:
          "A spicy, aromatic blend of ginger, pepper, turmeric, cinnamon, and cloves for a warm and revitalizing tea experience.",
      },
      {
        name: "Golden Tea",
        price: "8",
        description:
          "Rich golden tea infused with turmeric, saffron, cinnamon, and honey for a warm, fragrant, comforting sip.",
      },
      { name: "Tea Infusions", price: "11", description: "" },
    ],
  },
];

const categoryTabs = document.querySelector("#category-tabs");
const menuSections = document.querySelector("#menu-sections");
const searchInput = document.querySelector("#menu-search");
const emptyState = document.querySelector("#empty-state");
const itemModal = document.querySelector("#item-modal");
const modalImageWrap = document.querySelector(".item-modal__image-wrap");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalPrice = document.querySelector("#modal-price");
const modalDescription = document.querySelector("#modal-description");

let activeCategory = "all";
let activeModalTrigger = null;

function money(value) {
  return value || "";
}

function dirhamPrice(value) {
  if (!value) return "";
  return value
    .split("\n")
    .map((line) =>
      line.replace(/\d+(?:\.\d+)?/g, (amount) => {
        return `<span class="price-amount"><img src="assets/icons/Dirham Currency Symbol - Black.svg" alt="AED" />${amount}</span>`;
      }),
    )
    .join("<br />");
}

function itemImages(item) {
  return item.images || (item.image ? [item.image] : []);
}

function renderTabs() {
  const allButton = document.createElement("button");
  allButton.className = "active";
  allButton.dataset.category = "all";
  allButton.textContent = "All";
  categoryTabs.appendChild(allButton);

  menuData.forEach((section) => {
    const button = document.createElement("button");
    button.dataset.category = section.id;
    button.textContent = section.title;
    categoryTabs.appendChild(button);
  });
}

function renderMenu() {
  menuSections.innerHTML = menuData
    .map(
      (section) => `
        <section class="menu-category" data-category="${section.id}">
          <div class="category-heading">
            <h3>${section.title}</h3>
            <span>${section.items.length} items</span>
          </div>
          <div class="menu-grid">
            ${section.items
              .map((item, itemIndex) => {
                const images = itemImages(item);
                return `
                  <article
                    class="menu-card"
                    tabindex="0"
                    role="button"
                    aria-label="View ${item.name}"
                    data-category="${section.id}"
                    data-section-title="${section.title}"
                    data-item-index="${itemIndex}"
                  >
                    <div class="item-title">
                      <h4>${item.name}</h4>
                    </div>
                    ${item.description ? `<p>${item.description}</p>` : ""}
                    <strong class="item-price">${dirhamPrice(item.price)}</strong>
                    <span class="image-hint">${images.length ? "Tap to view image" : "Image ready slot"}</span>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function openItemModal(card) {
  activeModalTrigger = card;
  const section = menuData.find((menuSection) => menuSection.id === card.dataset.category);
  const item = section?.items[Number(card.dataset.itemIndex)];
  const images = item ? itemImages(item) : [];

  modalCategory.textContent = section?.title || "";
  modalTitle.textContent = item?.name || "";
  modalDescription.textContent = item?.description || "Description coming soon.";
  modalPrice.innerHTML = dirhamPrice(item?.price || "");
  modalImageWrap.innerHTML = "";

  if (images.length) {
    const gallery = document.createElement("div");
    gallery.className = `item-modal__gallery${images.length === 1 ? " is-single" : ""}`;
    images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = images.length === 1 ? item.name : `${item.name} ${index + 1}`;
      gallery.appendChild(img);
    });
    modalImageWrap.appendChild(gallery);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "item-modal__placeholder";
    placeholder.textContent = "Image slot";
    modalImageWrap.appendChild(placeholder);
  }

  itemModal.hidden = false;
  document.body.classList.add("modal-open");
  itemModal.querySelector(".item-modal__close").focus();
}

function closeItemModal() {
  itemModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (activeModalTrigger) activeModalTrigger.focus();
}

function updateMenu() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleItemCount = 0;

  document.querySelectorAll(".menu-category").forEach((section) => {
    const sectionMatches = activeCategory === "all" || section.dataset.category === activeCategory;
    let visibleInSection = 0;

    section.querySelectorAll(".menu-card").forEach((card) => {
      const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
      const shouldShow = sectionMatches && matchesSearch;
      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleInSection += 1;
        visibleItemCount += 1;
      }
    });

    section.hidden = visibleInSection === 0;
  });

  emptyState.hidden = visibleItemCount > 0;
}

renderTabs();
renderMenu();

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  categoryTabs.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  activeCategory = button.dataset.category;
  updateMenu();
});

searchInput.addEventListener("input", updateMenu);

menuSections.addEventListener("click", (event) => {
  const card = event.target.closest(".menu-card");
  if (card) openItemModal(card);
});

menuSections.addEventListener("keydown", (event) => {
  const card = event.target.closest(".menu-card");
  if (!card) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openItemModal(card);
  }
});

itemModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeItemModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !itemModal.hidden) closeItemModal();
});

updateMenu();
