import {useState} from "react"; 
import { DataContext } from "./Datacontext";
const Dataprovider=({children})=>{
    const [data,setData]=useState( [
  {
    name: "Margherita Pizza",
    price: 250,
    type: "veg",
    description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww",
    restaurant: "The Oven Story"
  },
  {
    name: "Chicken Biryani",
    price: 350,
    type: "non-veg",
    description: "Aromatic basmati rice cooked with tender chicken and Indian spices.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHwwfDB8fHww",
    restaurant: "Dumdaar Kitchen"
  },
  {
    name: "Paneer Butter Masala",
    price: 280,
    type: "veg",
    description: "Soft paneer cubes simmered in a rich, creamy tomato gravy.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8MHwwfHx8MA%3D%3D",
    restaurant: "The Royal Spice"
  },
  {
    name: "Grilled Fish",
    price: 400,
    type: "non-veg",
    description: "Fresh fish fillet grilled with herbs and lemon butter sauce.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1656389863341-1dfd38ee6edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGZyeXxlbnwwfDB8MHx8fDA%3D",
    restaurant: "Ocean Grill House"
  },
  {
    name: "Veg Burger",
    price: 150,
    type: "veg",
    description: "Crispy veggie patty with lettuce, cheese, and sauces in a soft bun.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
    restaurant: "Quick Bite Central"
  },
  {
    name: "Chicken Burger",
    price: 180,
    type: "non-veg",
    description: "Juicy chicken patty served with fresh veggies and mayo in a bun.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
    restaurant: "Quick Bite Central"
  },
  {
    name: "Masala Dosa",
    price: 120,
    type: "veg",
    description: "Crispy South Indian crepe stuffed with spicy potato filling.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfDB8MHx8fDA%3D",
    restaurant: "South Flavours"
  },
  {
    name: "Mutton Curry",
    price: 450,
    type: "non-veg",
    description: "Tender mutton pieces cooked in a spicy and flavorful curry.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXV0dG9uJTIwY3Vycnl8ZW58MHwwfDB8fHww",
    restaurant: "Deccan Delights"
  },
  {
    name: "Caesar Salad",
    price: 200,
    type: "veg",
    description: "Fresh lettuce, croutons, and parmesan tossed in Caesar dressing.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1664474719548-519fbbed2193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsYWFkfGVufDB8MHwwfHx8MA%3D%3D",
    restaurant: "Green & Fresh Cafe"
  },
  {
    name: "Prawn Fry",
    price: 380,
    type: "non-veg",
    description: "Crispy fried prawns seasoned with spices and herbs.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1597387216134-81e3c0e69b21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvd24lMjBjdXJyeXxlbnwwfDB8MHx8fDA%3D",
    restaurant: "Coastal Kitchen"
  },
  {
    name: "Chole Bhature",
    price: 180,
    type: "veg",
    description: "Spiced chickpeas served with fluffy fried bhature bread.",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/1292633282/photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-or-channa-masala-is-traditional.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIwUc0R6WanHKQEicUYtuQTt2LZqsa5PmTS_-Phbmfg=",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Egg Curry",
    price: 220,
    type: "non-veg",
    description: "Boiled eggs simmered in a spicy tomato-onion gravy.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1748286993010-73db79cf6fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnJTIwY3Vycnl8ZW58MHwwfDB8fHww",
    restaurant: "The Family Table"
  },
  {
    name: "Chicken Handi",
    price: 390,
    type: "non-veg",
    description: "Bone-in chicken cooked in a rich, rustic gravy with tomatoes, onions, and yogurt, traditionally prepared in an earthen pot (handi).",
    rating: 4.5,
    image: "https://plus.unsplash.com/premium_photo-1669557208969-737d6ab1c9fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    restaurant: "The Pot & Spoon"
  },
  {
    name: "Dal Tadka",
    price: 200,
    type: "veg",
    description: "Yellow lentils (Toor or Moong dal) cooked until tender and finished with a tempering (tadka) of ghee, cumin seeds, garlic, and red chilies.",
    rating: 4.2,
    image: "https://media.istockphoto.com/id/1326815151/photo/indian-popular-food-dal-fry-or-traditional-dal-tadka-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=4sqh6vtzeeHbORT_xELhA05xIiImCLUGkS5-IP18vkg=",
    restaurant: "Home Style Comfort"
  },
  {
    name: "Vada Pav",
    price: 80,
    type: "veg",
    description: "A popular Mumbai street food: a deep-fried spiced potato dumpling (vada) nestled inside a soft bread roll (pav) with chutneys.",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/1444922691/photo/bombay-vada-pav-isolated-on-wooden-board-side-view-of-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnGrlAxWlL1Su2lXYRetzW7yN4--Rlp-BI_3pziHT1M=",
    restaurant: "Mumbai Street Eats"
  },
  {
    name: "Mutton Biryani (Kolkata Style)",
    price: 470,
    type: "non-veg",
    description: "Aromatic Basmati rice and tender mutton, subtly flavored with rose water and saffron, featuring a signature potato and egg.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXV0dG9uJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    restaurant: "The Calcutta Plate"
  },
  {
    name: "Chana Masala",
    price: 240,
    type: "veg",
    description: "Spicy and tangy curry made with chickpeas (chana) cooked in a dry blend of ground spices, onions, and tomatoes.",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/669466116/photo/spicy-chick-peas-curry-or-chola-masala-or-chana-masala-or-chole-bhature-or-choley-garnished.webp?a=1&b=1&s=612x612&w=0&k=20&c=7JrXhQX9lgwp0g9z_zMn0CJLT2AwkDeYVoBLpwZx-Tg=",
    restaurant: "The Royal Spice"
  },
  {
    name: "Fish Amritsari",
    price: 360,
    type: "non-veg",
    description: "Boneless fish fillets marinated in a spicy chickpea flour batter and deep-fried until crispy, a famous street snack from Punjab.",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1420212298/photo/amritsari-fried-fish-or-macchi-fry-served-in-a-dish-isolated-on-table-background-top-view-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ucQ0GhLSnQGHA1k_OsCN1FMTpsXnn_X8kgxfhDiZvU=",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Baingan Bharta",
    price: 270,
    type: "veg",
    description: "A smoky North Indian dish where eggplant (baingan) is roasted, mashed, and cooked with onions, tomatoes, and spices.",
    rating: 4.3,
    image: "https://media.istockphoto.com/id/2202290924/photo/smoky-roasted-baingan-bharta.webp?a=1&b=1&s=612x612&w=0&k=20&c=jG8mDAaU8gsXWyaKWNxruz-7zXLRqHpMChcl3lf0an0=",
    restaurant: "The Pot & Spoon"
  },
  {
    name: "Pani Puri (Gol Gappe)",
    price: 100,
    type: "veg",
    description: "Crispy hollow balls (puri) filled with spiced mashed potatoes, chickpeas, and a tangy, spicy tamarind water (pani).",
    rating: 4.7,
    image: "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.webp?a=1&b=1&s=612x612&w=0&k=20&c=gipl8gjcid4yNp9cIjVEvhyAFdlFyplwGXYgRv0jdoI=",
    restaurant: "Street Food Hub"
  },
  {
    name: "Seekh Kebab",
    price: 350,
    type: "non-veg",
    description: "Minced meat (lamb or chicken) mixed with spices, pressed onto skewers (seekh), and cooked in a tandoor until smoky and tender.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VlayUyMGthYmFifGVufDB8fDB8fHww",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Bisi Bele Bath",
    price: 230,
    type: "veg",
    description: "A wholesome South Indian dish: a hot lentil, rice, and vegetable medley, flavored with a special spice powder.",
    rating: 4.3,
    image: "https://media.istockphoto.com/id/1273289152/photo/delicious-south-indian-food-bisi-bele-bath.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mv8ECaIGoTs9GnC7stlODahCWU10tNJg2XeOc2_STps=",
    restaurant: "South Flavours"
  },
  {
    name: "Rara Gosht",
    price: 490,
    type: "non-veg",
    description: "A rich Punjabi curry combining tender pieces of bone-in mutton with spicy mutton mince (keema) in a thick, dark gravy.",
    rating: 4.7,
    image: "https://media.istockphoto.com/id/1432794047/photo/shahi-mutton-curry-mutton-masala-mutton-korma-is-a-famous-spicy-non-vegetarian-dish-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CiZroQTg6nXF8OlpFnPBAacpZu4zohqxYe4N_LyCA3I=",
    restaurant: "Deccan Delights"
  },
  {
    name: "Veg Kofta Curry",
    price: 310,
    type: "veg",
    description: "Deep-fried vegetable and paneer dumplings (kofta) served in a mild, aromatic, cashew-based curry.",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/1432794047/photo/shahi-mutton-curry-mutton-masala-mutton-korma-is-a-famous-spicy-non-vegetarian-dish-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CiZroQTg6nXF8OlpFnPBAacpZu4zohqxYe4N_LyCA3I=",
    restaurant: "The Royal Spice"
  },
  {
    name: "Chicken Korma",
    price: 410,
    type: "non-veg",
    description: "A classic Mughlai dish: chicken braised in a flavorful sauce made with yogurt, cream, ground nuts, and a blend of gentle spices.",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=_UHYNHAOBxEoOrzqLgi3iRN9S03FrsKhDWPgubpSdg4=",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Dhokla",
    price: 120,
    type: "veg",
    description: "A soft, spongy, savory cake from Gujarat, made from fermented rice and chickpea flour, seasoned with mustard seeds and curry leaves.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1714799263291-272975db795a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGhva2xhfGVufDB8fDB8fHww",
    restaurant: "Street Food Hub"
  },
  {
    name: "Tawa Pulao",
    price: 260,
    type: "veg",
    description: "A Mumbai street food specialty: Basmati rice mixed with Pav Bhaji masala, onions, vegetables, and potatoes on a large flat griddle (tawa).",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/1264285522/photo/tawa-pulao-popular-indian-street-food-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yp7n0kgH2Rr-EvLdsxPlOXYdievq2fK1VPBxvg4V9eI=",
    restaurant: "Mumbai Street Eats"
  },
  {
    name: "Peshawari Naan",
    price: 150,
    type: "veg",
    description: "A subtly sweet leavened bread stuffed with a mixture of raisins, almonds, coconut, and sometimes cherries, best with mild curries.",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1413305764/photo/peshawari-chicken-with-chutney-raita-lime-salad-and-roti-served-in-a-dish-isolated-on-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=NK-tzNosoT7K2c2UGC_VamuvXROaaav_bV3Ffo2tocc=",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Pork Vindaloo",
    price: 480,
    type: "non-veg",
    description: "The original Goan preparation: spicy and intensely flavored pork cooked in a sauce with vinegar, garlic, and red chili paste.",
    rating: 4.3,
    image: "https://media.istockphoto.com/id/179281158/photo/indian-curry-pork-vindaloo-with-poppadums.webp?a=1&b=1&s=612x612&w=0&k=20&c=alFGXyLrwdDKfDS3DwtiSmWtc6KXv0PQ2RYRS5y38tM=",
    restaurant: "Coastal Kitchen"
  },
  {
    name: "Dum Aloo Kashmiri",
    price: 300,
    type: "veg",
    description: "Small potatoes (aloo) slow-cooked in a yogurt-based gravy with dry ginger and fennel, avoiding onion and garlic.",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/1421211856/photo/indian-cuisine-paneer-stuffed-dum-aloo-kashmiri-dum-aloo-or-potatoes-in-red-gravy-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=hc45Z_1tt9K_ssfwgywS8VflNm6jqjjfx25fULGRu3I=",
    restaurant: "The Royal Spice"
  },
  {
    name: "Lemon Rice",
    price: 190,
    type: "veg",
    description: "A quick, flavorful South Indian dish: rice seasoned with mustard seeds, curry leaves, turmeric, and fresh lemon juice.",
    rating: 4.1,
    image: "https://media.istockphoto.com/id/483790424/photo/south-indian-lemon-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=BGEd2_YNyxgz8vfGd0Y8WLZAZHdQEp_ZklJjuEabe4w=",
    restaurant: "South Flavours"
  },
  {
    name: "Bhuna Gosht",
    price: 460,
    type: "non-veg",
    description: "Mutton cubes cooked 'bhuna' style—slowly fried in its own juices and spices until the gravy is thick and clinging to the meat.",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/2124064220/photo/keema-puri-and-chole-bhature-recipe-is-the-most-famous-food-in-south-indian.webp?a=1&b=1&s=612x612&w=0&k=20&c=yyMNwZvy2XsXhHk3u0-iZhyalOmWv96FClCAbyy55Ts=",
    restaurant: "Deccan Delights"
  },
  {
    name: "Butter Chicken",
    price: 520,
    type: "non-veg",
    description: "Tender chicken pieces simmered in a rich, creamy tomato gravy with a hint of smoky flavor and finished with butter and cream.",
    rating: 4.7,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Paneer Tikka Masala",
    price: 430,
    type: "veg",
    description: "Cubes of grilled paneer (Indian cottage cheese) cooked in a spiced, flavorful tomato-onion gravy.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Royal Spice"
  },
  {
    name: "Aloo Paratha (2 Pcs)",
    price: 180,
    type: "veg",
    description: "Whole wheat bread stuffed with a spicy, mashed potato filling, served with curd and pickle.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1683533761804-5fc12be0f684?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Home Style Comfort"
  },
  {
    name: "Chicken Biryani (Hyderabadi)",
    price: 480,
    type: "non-veg",
    description: "Aromatic basmati rice cooked with marinated chicken, saffron, and a blend of secret spices in a traditional 'dum' style.",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1624473/pexels-photo-1624473.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Dumdaar Kitchen"
  },
  {
    name: "Chole Bhature",
    price: 210,
    type: "veg",
    description: "A popular Punjabi dish featuring fluffy, deep-fried bread (bhature) served with spicy chickpea curry (chole).",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580689376629-2c4ef0920e79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Masala Dosa",
    price: 150,
    type: "veg",
    description: "A thin, crispy rice crepe filled with seasoned, mashed potatoes, served with sambar and coconut chutney.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "South Flavours"
  },
  {
    name: "Tandoori Chicken (Half)",
    price: 380,
    type: "non-veg",
    description: "Chicken marinated in yogurt and spices, roasted to perfection in a traditional clay oven (tandoor).",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1640542509430-f529fdfce835?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFuZHVyaSUyMGNoaWNrZW4lMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Dal Makhani",
    price: 350,
    type: "veg",
    description: "Black lentils and kidney beans slow-cooked with cream, butter, and a blend of spices for a rich, velvety texture.",
    rating: 4.5,
    image: "https://plus.unsplash.com/premium_photo-1700253176330-71ee9f44e30b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Pani Puri (8 Pcs)",
    price: 120,
    type: "veg",
    description: "Hollow, crispy semolina balls filled with spicy mashed potato, tamarind chutney, and a tangy, spiced water (pani).",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5604810/pexels-photo-5604810.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Street Food Hub"
  },
  {
    name: "Mutton Rogan Josh",
    price: 650,
    type: "non-veg",
    description: "A classic Kashmiri curry with tender lamb pieces cooked in a rich, deeply flavored gravy made with red chillies (for color) and aromatic spices.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Deccan Delights"
  },
  {
    name: "Vegetable Fried Rice",
    price: 290,
    type: "veg",
    description: "Wok-tossed rice with fresh, finely chopped vegetables and light soy sauce, perfect as a side or a meal.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Wok Star"
  },
  {
    name: "Seekh Kebab Roll",
    price: 240,
    type: "non-veg",
    description: "Spicy minced meat seekh kebabs, wrapped in a thin, flaky flatbread (paratha) with onions and mint chutney.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1692106914406-093b0df73a10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXV0dG9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Malai Kofta",
    price: 490,
    type: "veg",
    description: "Soft, creamy paneer and vegetable dumplings (kofta) served in a rich, mild, and slightly sweet cashew-based gravy.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1708782340377-882559d544fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXV0dG9uJTIwc29vcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Royal Spice"
  },
  {
    name: "Goan Fish Curry",
    price: 580,
    type: "non-veg",
    description: "Tangy and spicy coastal curry with fresh fish fillets, cooked in a vibrant gravy made with coconut milk, tamarind, and Goan spices.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1626508035297-0cd27c397d67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Coastal Kitchen"
  },
  {
    name: "Veggie Burger",
    price: 190,
    type: "veg",
    description: "A hearty patty made from mixed vegetables and potatoes, topped with fresh lettuce, tomato, and mayo in a toasted bun.",
    rating: 4.0,
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Quick Bite Central"
  },
  {
    name: "Chicken 65",
    price: 450,
    type: "non-veg",
    description: "Spicy, deep-fried chicken appetizer marinated in chili powder, turmeric, and ginger, tossed with curry leaves and green chillies.",
    rating: 4.6,
    image: "https://plus.unsplash.com/premium_photo-1723575734758-97e6e862a670?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMDY1fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Dumdaar Kitchen"
  },
  {
    name: "Rajma Chawal",
    price: 280,
    type: "veg",
    description: "North Indian comfort food—kidney bean curry slow-cooked with tomatoes and spices, served with steamed basmati rice.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1727018953313-403d17215a1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhd2FsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Home Style Comfort"
  },
  {
    name: "Samosa (2 Pcs)",
    price: 90,
    type: "veg",
    description: "Crispy, triangular pastry filled with spiced potatoes, peas, and served with tamarind and mint chutneys.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    restaurant: "Street Food Hub"
  },
  {
    name: "Egg Curry",
    price: 320,
    type: "non-veg",
    description: "Boiled eggs served in a flavorful, thick gravy made from ground spices, tomatoes, and onions, best with rice or roti.",
    rating: 4.1,
    image: "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "The Family Table"
  },
  {
    name: "Gulab Jamun (3 Pcs)",
    price: 160,
    type: "veg",
    description: "Deep-fried milk-solids dumplings, soaked in a rose-flavored sugar syrup, a classic Indian dessert.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Sweet Treat Junction"
  },
  {
    name: "Tandoori Lamb Chops",
    price: 890,
    type: "non-veg",
    description: "Tender, frenched lamb chops marinated overnight in a spicy yogurt and aromatic spice blend, roasted perfectly in a Tandoor.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1676854029971-1403b9b1a71f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Grand Grill"
  },
  {
    name: "Murgh Malai Kebab",
    price: 590,
    type: "non-veg",
    description: "Boneless chicken pieces marinated in cream, cheese, cardamom, and mild spices, grilled to a buttery, melt-in-your-mouth texture.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1559203244-78de52adba0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Prawn Ghee Roast",
    price: 720,
    type: "non-veg",
    description: "A fiery, tangy, and premium coastal dish where prawns are roasted in clarified butter (ghee) with a potent, dark red spice paste.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1597387216134-81e3c0e69b21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvd24lMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Coastal Kitchen"
  },
  {
    name: "Vegetarian Thali (Deluxe)",
    price: 550,
    type: "veg",
    description: "A grand platter featuring premium portions of Shahi Paneer, Dal Makhani, Mixed Veg, Raita, Basmati Rice, and two breads.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Royal Spice"
  },
  {
    name: "Galouti Kebab",
    price: 650,
    type: "non-veg",
    description: "The famous 'melt-in-your-mouth' Awadhi kebab made from finely minced meat, rich spices, and aromatic herbs, served with mini parathas.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Grand Grill"
  },
  {
    name: "Shahi Paneer",
    price: 490,
    type: "veg",
    description: "Cottage cheese cubes cooked in a thick, creamy, and mildly sweet gravy made of cashews, almonds, and dried fruits—a dish fit for royalty.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFuZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "North Frontier Meals"
  },
  {
    name: "Awadhi Gosht Biryani",
    price: 750,
    type: "non-veg",
    description: "Slow-cooked lamb (gosht) marinated in yogurt and spices, layered with aromatic basmati rice and saffron, sealed and cooked 'dum' style.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Dumdaar Kitchen"
  },
  {
    name: "Paneer Parda (Potli)",
    price: 510,
    type: "veg",
    description: "Finely chopped paneer and vegetables enclosed in a thin pastry 'potli' (pouch), baked, and served with a rich saffron curry.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Pot & Spoon"
  },
  {
    name: "Black Dal (Premium)",
    price: 410,
    type: "veg",
    description: "Urad dal and rajma slow-cooked for 24 hours, finished with white butter, fresh cream, and smoked with charcoal for an intense flavor.",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1726769145769-7ff764c537c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBkYWwlMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Home Style Comfort"
  },
  {
    name: "Crab Sukka Roast",
    price: 850,
    type: "non-veg",
    description: "A fiery, tangy, and premium coastal dish where prawns are roasted in clarified butter (ghee) with a potent, dark red spice paste.",
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1719611418728-6234a4dba5a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JhYiUyMHJvYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Coastal Kitchen"
  },
  {
    name: "Afghani Chicken",
    price: 620,
    type: "non-veg",
    description: "Whole chicken pieces marinated in a blend of cream, cashews, yogurt, and subtle spices, cooked in a tandoor until smoky and tender.",
    "rating": 4.6,
    image: "https://images.unsplash.com/photo-1649295948526-fd64e7248754?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmZ2FuaSUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Grand Grill"
  },
  {
    name: "Kashmiri Pulao",
    price: 380,
    type: "veg",
    description: "A mild and aromatic rice dish cooked with whole spices, dry fruits (almonds, cashews, raisins), and topped with fresh fruit slices.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVsYW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Home Style Comfort"
  },
  {
    name: "Bhuna Gosht",
    price: 680,
    type: "non-veg",
    description: "Mutton cubes cooked 'bhuna' style—slowly fried in its own juices and spices until the gravy is thick, dark, and clinging to the meat.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29zaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000p",
    restaurant: "Deccan Delights"
  },
  {
    name: "Mushroom Tikka (Exotic)",
    price: 450,
    type: "veg",
    description: "Large button mushrooms marinated in a creamy spice mix with exotic bell peppers, skewered, and charred in the clay oven.",
    rating: 4.2,
    image: " https://images.unsplash.com/photo-1694953593181-6ce423500712?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzaHJvb20lMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Keema Paratha (2 Pcs)",
    price: 320,
    type: "non-veg",
    description: "Whole wheat parathas generously stuffed with a spicy, savory minced meat (keema) filling, served with raita and salad.",
    rating: 4.4,
    image: "https://images.pexels.com/photos/17234691/pexels-photo-17234691/free-photo-of-aloo-paratha-flatbread-stuffed-with-potato-mixture.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "The Family Table"
  },
  {
    name: "Veg Sizzler",
    price: 580,
    type: "veg",
    description: "A platter of grilled paneer, exotic vegetables, fries, and rice, served smoking hot on a metal sizzler plate with rich sauce.",
    rating: 4.3,
    image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "The Wok Star"
  },
  {
    name: "Dum Aloo Kashmiri",
    price: 460,
    type: "veg",
    description: "Small potatoes, deep-fried and simmered in a yogurt-based gravy with ginger, fennel, and special Kashmiri spices.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1673534751361-a610db445eef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxvb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Royal Spice"
  },
  {
    name: "Peshawari Naan",
    price: 150,
    type: "veg",
    description: "A sweet, fluffy naan bread stuffed with a mixture of coconut, raisins, and nuts, perfect for pairing with rich curries.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Tandoor Grill"
  },
  {
    name: "Firni (Saffron & Pistachio)",
    price: 190,
    type: "veg",
    description: "A premium dessert made from ground sticky rice cooked in thick milk, flavored with saffron, cardamom ",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593967858208-67ddb5b4c406?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "Sweet Treat Junction"
  },
  {
    name: "Seafood Platter (Mixed Grill)",
    price: 1190,
    type: "non-veg",
    description: "A premium assortment of grilled prawns, fish tikka, and lobster pieces, marinated in a light spice mix and served with garlic butter.",
    rating: 4.9,
    image: " https://images.unsplash.com/photo-1702823394169-e80de67f8e72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYWZvb2QlMjBwbGF0dGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    restaurant: "The Grand Grill"
  }
]);
    return(
<DataContext.Provider value={{data,setData}}>
    {children}
</DataContext.Provider>
    )};
export default Dataprovider;