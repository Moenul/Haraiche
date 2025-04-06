import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => {
    return {
      categories: [
        {
          name: "Money and Wallet",
          icon: "/images/category/money-wallet.avif",
          subcategories: [
            {
              name: "Bank Card",
              icon: "💳",
              details: [
                {
                  name: "Card Type",
                  type: "select",
                  option: [
                    "Visa",
                    "MasterCard",
                    "NexusPay",
                    "DBBL Mobile Banking",
                    "UCash",
                    "SureCash",
                    "Rocket",
                    "bKash",
                  ],
                },
                {
                  name: "Bank Name",
                  type: "text",
                },
                {
                  name: "Card Holder Name",
                  type: "text",
                },
                {
                  name: "Last 4 Digits",
                  type: "text",
                },
              ],
            },
            {
              name: "Check Book",
              icon: "🏦",
              details: [
                {
                  name: "Bank Name",
                  type: "text",
                },
                {
                  name: "Check type",
                  type: "text",
                },
                {
                  name: "Check Number Range",
                  type: "text",
                },
              ],
            },
            {
              name: "Money",
              icon: "💵",
              details: [
                {
                  name: "Currency",
                  type: "select",
                  option: ["BDT", "USD", "GBP", "EUR", "AED", "SAR", "OMR", "MYR"],
                },
                {
                  name: "Approximate Amount",
                  type: "text",
                },
              ],
            },
          ],
          details: [
            {
              name: "Owner Full Name",
              type: "text",
            },
            { name: "Contact Number", type: "text" },
          ],
        },
        {
          name: "Identity Document",
          icon: "/images/category/travel-passport.webp",
          subcategories: [
            {
              name: "NID",
              icon: "🛂",
              details: [
                {
                  name: "NID number",
                  type: "text",
                },
              ],
            },
            {
              name: "Passport",
              icon: "🛂",
              details: [
                {
                  name: "Passport ID",
                  type: "text",
                },
                {
                  name: "Expire Date",
                  type: "date",
                },
              ],
            },
            {
              name: "Institute ID",
              icon: "📇",
              details: [
                {
                  name: "Institute Name",
                  type: "text",
                },
              ],
            },
            {
              name: "Driving License",
              icon: "🚗",
              details: [
                {
                  name: "License ID",
                  type: "text",
                },
                {
                  name: "Expire Date",
                  type: "date",
                },
              ],
            },
          ],
          details: [
            {
              name: "Fullname",
              type: "text",
            },
            {
              name: "Date of birth",
              type: "date",
            },
            {
              name: "Father Name",
              type: "text",
            },
            {
              name: "Address",
              type: "text",
            },
          ],
        },
        {
          name: "Others Document",
          icon: "/images/category/documents.avif",
          subcategories: [
            {
              name: "Certificate",
              icon: "🛂",
              details: [
                {
                  name: "Certificate Type",
                  type: "select",
                  option: ["PSC/=", "SSC/=", "HSC/=", "Honors/=", "Scholarship Documents"],
                },
                {
                  name: "Institute Name",
                  type: "text",
                },
                {
                  name: "Institution Type",
                  type: "select",
                  option: ["School", "College", "University", "Madrasah", "Institute"],
                },
              ],
            },

            {
              name: "Registration Document",
              icon: "📇",
              details: [
                {
                  name: "Registration Number",
                  type: "text",
                },
              ],
            },
          ],
          details: [
            {
              name: "Fullname",
              type: "text",
            },
          ],
        },
        {
          name: "Pets",
          icon: "/images/category/pets.webp",
          subcategories: [
            { name: "Dog", icon: "🐕" },
            { name: "Cat", icon: "🐈" },
            { name: "Parrot", icon: "🦜" },
            { name: "Pigeon", icon: "🐦" },
            { name: "Rabbit", icon: "🐇" },
            { name: "Fish", icon: "🐟" },
            { name: "Tortoise", icon: "🐢" },
            { name: "Hamster", icon: "🐹" },
            { name: "Cow", icon: "🐄" },
            { name: "Goat", icon: "🐐" },
          ],
          details: [
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Black", values: "#000000" },
                { name: "White", values: "#FFFFFF" },
                { name: "Brown", values: "#A52A2A" },
                { name: "Golden", values: "#FFD700" },
                { name: "Cream", values: "#FFFDD0" },
                { name: "Gray", values: "#808080" },
                { name: "Tri-color", values: "#B2BEB5" },
                { name: "Spotted", values: "#D3D3D3" },
                { name: "Brindle", values: "#A0522D" },
              ],
            },
            { name: "Pets Breeds", type: "text" },
            { name: "Distinct Features", type: "text" },
          ],
        },
        {
          name: "Jewelry",
          icon: "/images/category/Jewelry.png",
          subcategories: [
            { name: "Ring", icon: "💍" },
            { name: "Necklace", icon: "📿" },
            { name: "Bracelet", icon: "🔗" },
            { name: "Earrings", icon: "👂" },
            { name: "Others", icon: "👂" },
            { name: "Gold Chain", icon: "🔗" },
            { name: "Silver Bangles", icon: "镯" },
            { name: "Nose Pin", icon: "💍" },
            { name: "Anklet", icon: "踝" },
          ],
          details: [
            {
              name: "Material",
              type: "select",
              option: [
                "22K Gold",
                "18K Gold",
                "Silver",
                "Platinum",
                "Imitation Jewelry",
                "Pearl",
                "Gemstone",
                "Imitation",
                "Plastic",
                "Diamond",
                "nacre",
                "Snail",
                "Leather",
              ],
            },
            {
              name: "Model",
              type: "text",
            },
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Gold", values: "#FFD700" },
                { name: "Silver", values: "#C0C0C0" },
                { name: "Rose Gold", values: "#E7B8A5" },
                { name: "Pearl White", values: "#F5F5F5" },
                { name: "Emerald Green", values: "#50C878" },
                { name: "Sapphire Blue", values: "#0F52BA" },
                { name: "Ruby Red", values: "#E0115F" },
                { name: "Amber Brown", values: "#FFBF00" },
                { name: "Onyx Black", values: "#000000" },
                { name: "Copper", values: "#B87333" },
                { name: "Antique Silver", values: "#A8A8A8" },
                { name: "Ivory", values: "#FFFFF0" },
                { name: "Teak Wood", values: "#8B4513" },
                { name: "Walnut Brown", values: "#784C34" },
                { name: "Shell Pink", values: "#FFB6C1" },
                { name: "Nacre Iridescent", values: "#E6E6FA" },
                { name: "Leather Tan", values: "#D2B48C" },
              ],
            },
            {
              name: "Weight (grams)",
              type: "text",
            },
          ],
        },
        {
          name: "Electronics",
          icon: "/images/category/electronoics.avif",
          subcategories: [
            { name: "Smartphone", icon: "📱" },
            { name: "Power Bank", icon: "🔋" },
            { name: "Bluetooth Earphone", icon: "🎧" },
            { name: "Smartwatch", icon: "⌚" },
            { name: "Laptop", icon: "💻" },
            { name: "Tablet", icon: "📱" }, // Reused smartphone icon if tablet-specific unavailable
            { name: "USB Flash Drive", icon: "💾" },
            { name: "Charger", icon: "🔌" },
            { name: "Headphones", icon: "🎧" },
            { name: "Bluetooth Speaker", icon: "🔈" },
            { name: "E-Reader", icon: "📚" },
            { name: "Fitness Tracker", icon: "🏃♂️" },
            { name: "Calculator", icon: "🧮" },
            { name: "Portable Hard Drive", icon: "💽" },
            { name: "Wireless Mouse", icon: "🖱️" },
            { name: "Keyboard", icon: "⌨️" },
            { name: "Gaming Console", icon: "🎮" },
            { name: "Mi-Fi/Hotspot", icon: "📶" },
            { name: "Digital Camera", icon: "📷" },
          ],
          details: [
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Silver", values: "#C0C0C0" },
                { name: "Rose Gold", values: "#E7B8A5" },
                { name: "Space Gray", values: "#5A5A5A" },
                { name: "Midnight Green", values: "#004D40" },
                { name: "Coral", values: "#FF6F61" },
                { name: "Ocean Blue", values: "#4A90E2" },
                { name: "Matte Black", values: "#333333" },
                { name: "Champagne Gold", values: "#F7E7CE" },
                { name: "Titanium Gray", values: "#808080" },
                { name: "Neon Purple", values: "#9400D3" },
                { name: "Graphite", values: "#3C3C3C" },
                { name: "Pearl White", values: "#F5F5F5" },
              ],
            },
            {
              name: "Brand",
              type: "select",
              option: [
                "Nokia",
                "Symphony",
                "Walton",
                "Micromax",
                "Realme",
                "Samsung",
                "Xiaomi",
                "Oppo",
                "Vivo",
                "Apple",
                "HP",
                "Dell",
                "Acer",
                "Mac",
                "Others",
              ],
            },
            {
              name: "Model",
              type: "text",
            },
          ],
        },
        {
          name: "Outfits",
          icon: "👔",
          subcategories: [
            {
              name: "Clothes",
              icon: "👕",
              details: [
                {
                  name: "Cloth Type",
                  type: "select",
                  option: ["T-Shirt", "Shirt", "Pant", "Kurti", "Fatua", "Panjabi", "Sharee"],
                },

                {
                  name: "Size",
                  type: "select",
                  option: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
                },
                {
                  name: "Pattern",
                  type: "text",
                },
              ],
            },
            {
              name: "Shoes",
              icon: "👟",
              details: [
                {
                  name: "Shoe Type",
                  type: "select",
                  option: ["Sneakers", "Sandals", "Boots", "Loafers", "Juttis"],
                },

                {
                  name: "Shoe Size",
                  type: "select",
                  option: [
                    "28",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "35",
                    "36",
                    "37",
                    "38",
                    "39",
                    "40",
                    "41",
                    "42",
                    "43",
                    "44",
                  ],
                },
              ],
            },
            {
              name: "Belts",
              icon: "Be",
              details: [
                {
                  name: "Material",
                  type: "select",
                  option: ["Leather", "Fabric", "Synthetic", "Traditional"],
                },
                {
                  name: "Buckle Type",
                  type: "select",
                  option: ["Metal", "Plastic", "Decorative", "Plain"],
                },
              ],
            },
            {
              name: "Caps",
              icon: "🧢",
              details: [
                {
                  name: "Cap Type",
                  type: "select",
                  option: ["Baseball Cap", "Beanie", "Sun Hat", "Traditional Topi"],
                },
              ],
            },
            {
              name: "Traditional Wear",
              icon: " lungi",
              details: [
                {
                  name: "Type",
                  type: "select",
                  option: ["Lungi", "Panjabi Set", "Sharee Set", "Fatua Set"],
                },
                {
                  name: "Material",
                  type: "select",
                  option: ["Cotton", "Silk", "Linen", "Synthetic"],
                },
              ],
            },
          ],
          details: [
            {
              name: "Brand",
              type: "select",
              option: [
                "Aarong",
                "KayKraft",
                "Yellow",
                "Bata",
                "Bata",
                "Apex",
                "Cat's Eye",
                "Yellow",
                "Sports Brand",
                "Designer",
                "Local Market",
              ],
            },
            {
              name: "Condition",
              type: "select",
              option: ["New", "Used - Good", "Used - Fair"],
            },
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Black", values: "#000000" },
                { name: "White", values: "#FFFFFF" },
                { name: "Silver", values: "#C0C0C0" },
                { name: "Gold", values: "#FFD700" },
                { name: "Gray", values: "#808080" },
                { name: "Red", values: "#FF0000" },
                { name: "Blue", values: "#0000FF" },
                { name: "Navy Blue", values: "#000080" },
                { name: "Maroon", values: "#800000" },
                { name: "Jamdani", values: "#E6E6FA" },
                { name: "Beige", values: "#F5F5DC" },
                { name: "Olive Green", values: "#556B2F" },
                { name: "Lungi Print", values: "#FFFAE6" },
                { name: "Sharee Border", values: "#FFD700" },
                { name: "Panjabi Embroidery", values: "#8B4513" },
                { name: "Rose Gold", values: "#E7B8A5" },
                { name: "Matte Black", values: "#333333" },
                { name: "Pearl White", values: "#FDEEF4" },
              ],
            },
          ],
        },
        {
          name: "Medicine",
          icon: "💊",
          subcategories: [
            {
              name: "Prescription Medicines",
              icon: "℞",
              details: [
                {
                  name: "Medicine Type",
                  type: "select",
                  option: ["Tablet", "Capsule", "Injection", "Syrup"],
                },
                {
                  name: "Hospital Name",
                  type: "text",
                },
                {
                  name: "Dosage Instructions",
                  type: "text",
                },
              ],
            },
            {
              name: "Over-the-Counter",
              icon: " 🌡️",
              details: [
                {
                  name: "Product Type",
                  type: "select",
                  option: ["Pain Relief", "Allergy", "Digestive Aid"],
                },
                {
                  name: "Active Ingredient",
                  type: "text",
                },
                {
                  name: "Strength",
                  type: "text",
                  placeholder: "e.g., 500mg",
                },
              ],
            },
            {
              name: "Herbal Medicines",
              icon: "🌿",
              details: [
                {
                  name: "Preparation Type",
                  type: "select",
                  option: ["Powder", "Oil", "Paste"],
                },
                {
                  name: "Main Ingredients",
                  type: "text",
                },
              ],
            },
            {
              name: "Medical Devices",
              icon: "🩺",
              details: [
                {
                  name: "Device Type",
                  type: "select",
                  option: ["Glucose Monitor", "Inhaler", "Thermometer"],
                },
                {
                  name: "Brand",
                  type: "select",
                  option: ["ACI Limited", "Square Medical", "Popular Pharmaceuticals"],
                },
              ],
            },
          ],
          details: [
            {
              name: "Patient Name",
              type: "text",
            },
            {
              name: "Packaging Description",
              type: "text",
            },
          ],
        },
        {
          name: "Bags and Suitcases",
          icon: "🧳",
          subcategories: [
            { name: "Backpack", icon: "🎒" },
            { name: "Handbag", icon: "👜" },
            { name: "Suitcase", icon: "🧳" },
            { name: "Briefcase", icon: "💼" },
            { name: "School Bag", icon: "🎒" },
            { name: "Office Bag", icon: "💼" },
            { name: "Luggage", icon: "🧳" },
            { name: "Jute Bag", icon: "袋子" },
          ],
          details: [
            {
              name: "Brand",
              type: "select",
              option: ["Apex", "Rangs", "Bashundhara", "Aarong", "Yellow", "KayKraft", "Ekdosha"],
            },
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Black", values: "#000000" },
                { name: "Brown", values: "#A52A2A" },
                { name: "Beige", values: "#F5F5DC" },
                { name: "Navy Blue", values: "#000080" },
              ],
            },
          ],
        },
        {
          name: "Vehicles",
          icon: "🚲",
          subcategories: [
            { name: "Bicycle", icon: "🚲" },
            { name: "Motorcycle", icon: "🏍️" },
            { name: "Rickshaw", icon: "🛺" },
            { name: "CNG Auto", icon: "嘟嘟车" },
          ],
          details: [
            { name: "Registration Number", type: "text" },
            {
              name: "Colors",
              type: "colorPicker",
              option: [
                { name: "Black", values: "#000000" },
                { name: "Red", values: "#FF0000" },
                { name: "Green", values: "#008000" },
                { name: "Yellow", values: "#FFFF00" },
              ],
            },
          ],
        },
        {
          name: "Everyday Essentials",
          icon: "🔑",
          subcategories: [
            {
              name: "Keys",
              icon: "🗝️",
              details: [
                {
                  name: "Key Type",
                  type: "select",
                  option: ["House Key", "Car Key", "Locker Key", "Office Key", "Padlock Key"],
                },
                {
                  name: "Brand/Make",
                  type: "select",
                  option: ["Yale", "Huy Cuong", "Local Locksmith", "Godrej", "Samsung Smart Key"],
                },
                {
                  name: "Distinct Features",
                  type: "text",
                },
              ],
            },
            {
              name: "Umbrella",
              icon: "☔",
              details: [
                {
                  name: "Type",
                  type: "select",
                  option: ["Foldable", "Golf Umbrella", "Kids Umbrella", "Transparent"],
                },
                {
                  name: "Colors",
                  type: "colorPicker",
                  option: [
                    { name: "Black", values: "#000000" },
                    { name: "Navy Blue", values: "#000080" },
                    { name: "Red", values: "#FF0000" },
                  ],
                },
                {
                  name: "Brand",
                  type: "select",
                  option: ["Senhai", "Automatic", "Manual", "Local Brand"],
                },
              ],
            },
            {
              name: "Tools",
              icon: "🛠️",
              details: [
                {
                  name: "Tool Type",
                  type: "select",
                  option: ["Screwdriver", "Hammer", "Pliers", "Utility Knife", "Tape Measure"],
                },
                {
                  name: "Material",
                  type: "select",
                  option: ["Stainless Steel", "Chrome Vanadium", "Plastic Handle"],
                },
              ],
            },
            {
              name: "Cosmetics",
              icon: "💄",
              details: [
                {
                  name: "Product Type",
                  type: "select",
                  option: ["Lipstick", "Foundation", "Eyeshadow", "Perfume", "Hair Accessories"],
                },
                {
                  name: "Brand",
                  type: "select",
                  option: ["The Body Shop", "Maybelline", "L'Oréal", "Local Brand"],
                },
                {
                  name: "Shade/Color",
                  type: "text",
                },
              ],
            },
            {
              name: "Stationery",
              icon: "🖊️",
              details: [
                {
                  name: "Item Type",
                  type: "select",
                  option: ["Notebook", "Pen Set", "Calculator", "Stapler", "Geometry Box"],
                },
                {
                  name: "Brand",
                  type: "select",
                  option: ["Montex", "Parker", "Staedtler", "Local Stationery"],
                },
              ],
            },
            {
              name: "Reusable Items",
              icon: "♻️",
              details: [
                {
                  name: "Item Type",
                  type: "select",
                  option: ["Water Bottle", "Coffee Cup", "Shopping Bag", "Food Container"],
                },
                {
                  name: "Material",
                  type: "select",
                  option: ["Stainless Steel", "Glass", "Silicone", "Recycled Plastic"],
                },
              ],
            },

            {
              name: "Personal Care",
              icon: "🧴",
              details: [
                {
                  name: "Item Type",
                  type: "select",
                  option: ["Comb", "Hair Tie", "Razor", "Nail Clipper", "Tweezers"],
                },
                {
                  name: "Material",
                  type: "select",
                  option: ["Plastic", "Stainless Steel", "Wooden"],
                },
              ],
            },
            {
              name: "Protective Gear",
              icon: "🛡️",
              details: [
                {
                  name: "Item Type",
                  type: "select",
                  option: ["Helmet", "Knee Pad", "Safety Glasses", "Mask"],
                },
                {
                  name: "Certification",
                  type: "text",
                },
              ],
            },
            {
              name: "Cultural Items",
              icon: "工艺品",
              details: [
                {
                  name: "Item Type",
                  type: "select",
                  option: ["Nakshi Kantha", "Clay Art", "Rickshaw Art", "Pottery"],
                },
                {
                  name: "Origin",
                  type: "select",
                  option: ["Dhaka", "Chittagong", "Rajshahi", "Sylhet"],
                },
              ],
            },
          ],
          details: [
            {
              name: "Distinctive Marks",
              type: "text",
            },
          ],
        },
      ],
    };
  },
  getters: {
    // Get sub categories
    getSubCategories(state) {
      const findSubCategories = (categories, name) => {
        return categories.find((cat) => cat.name === name)?.subcategories || [];
      };

      return (name) => findSubCategories(state.categories, name);
    },

    // Get category details
    getCategoryDetails(state) {
      const findCategoryDetails = (categories, name) => {
        return categories.find((cat) => cat.name === name)?.details || [];
      };

      return (name) => findCategoryDetails(state.categories, name);
    },

    // Get category details
    getSubCategoryDetails(state) {
      const findSubCategoryDetails = (categories, categoryName, subCategoryName) => {
        return (
          categories
            .find((cat) => cat.name === categoryName)
            ?.subcategories.find((sub) => sub.name === subCategoryName)?.details || []
        );
      };

      return (categoryName, subCategoryName) =>
        findSubCategoryDetails(state.categories, categoryName, subCategoryName);
    },
  },
});
