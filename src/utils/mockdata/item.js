import { Images } from "../../assets";
import { Icons } from "../../assets";

const products = [
  {
    id:101,
    name: 'Fresh Bananas',
    grams: 500,
    price: 50,
    discounted: 45,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfF1f7rX94ZhU2cAgYKQPDqeuNcBtR9td4Q&s',
       description:'Naturally sweet and rich in potassium, these fresh bananas are perfect for a healthy snack or to add to your smoothies and desserts.'
  },
  {
    id:102,
    name: 'Almond Milk',
    grams: 1000,
    price: 400,
    discounted: 375,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7vxooLtgX3i1MXftI8BF9dTc7uVlc7G7eA&s',
       description:'A creamy, dairy-free alternative to regular milk, packed with vitamins and minerals. Perfect for your morning coffee, cereal, or as a base for smoothies.'
  },
  {
    id:103,
    name: 'Organic Spinach',
    grams: 200,
    price: 60,
    discounted: 45,
    image:
      'https://kazeliving.com/cdn/shop/files/3d85c28c-62e3-4213-8e62-1346b66ad1c1.jpg?v=1729921186&width=480',
    description:'Fresh and pesticide-free, this organic spinach is a nutrient-packed leafy green, ideal for salads, smoothies, or as a side dish in your meals.'
  },
  {

    id:104,
    name: 'Brown Eggs',
    grams: 600,
    price: 120,
    discounted: 100,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL1-KFlv8FnD_eJqOLQnwKqIA2PTQrP8oWw&s',
     description:'These fresh brown eggs are sourced from free-range hens, offering a richer taste and high-quality protein for your daily needs.'
  },
  {
    id:105,
    name: 'Whole Wheat Bread',
    grams: 400,
    price: 55,
    discounted: 50,
    image:
      'https://www.jiomart.com/images/product/original/491127282/britannia-100-whole-wheat-bread-450-g-product-images-o491127282-p491127282-0-202204092013.jpg?im=Resize=(1000,1000)',
       description:'Soft, hearty, and made with 100% whole wheat, this bread is perfect for sandwiches, toast, or as a side to your favorite meal.'
  },
  {
    id:106,
    name: 'Full Cream Fresh Milk',
    grams: 1000,
    price: 68,
    discounted: 60,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0dgwhwtH4IN69oR8QpifIUbnlfdOCDOf2Q&s',
       description:'Rich and creamy, this full cream milk is perfect for adding a rich texture to your coffee, tea, or baking. High in calcium and nutrients.'
  },
  {
    id:107,
    name: 'Onion',
    grams: 1000,
    price: 109,
    discounted: 91,
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnZWF0Ens2eSzoR85kLZogrA16uTHhT_CpIPPwI-EYnGhD2dvoKM6pzCvo1tjMC-5amoJNaW1ax8sThqlWeuBNJE1hdehjBeWPs0I2mrzuov8RgZCUMst0LQ&usqp=CAE',
       description:'Essential for any dish, these fresh onions add flavor and depth to your cooking. Perfect for stir-fries, salads, or soups.'
  },
  {
    id:108,
    name: 'Fresh Paneer',
    grams: 200,
    price: 95,
    discounted: 90,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GK1ZR4GtaXjFFiSaNqqX7hUYSJld8bxUiA&s',
       description:'Soft and creamy, this fresh paneer is perfect for curries, snacks, or grilling. A great source of protein for vegetarians.'
  },
  { id:109,
    name: 'Tomato Hybrid',
    grams: 500,
    price: 81,
    discounted: 49,
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRiWdC7qTBK0afpS_gyrq_iqHmV1otkw4yCdBx9tzgqc6yfrmpTwgwiWpXafy41v7KN95TRklSZZZYpBVjzG2CyeITkKvdg-HabWMKNE4oS4URbFIcfBpie',
       description:'These ripe, juicy tomatoes are perfect for sauces, salads, or sandwiches. Packed with vitamins and antioxidants for a healthy, flavorful addition to any dish.'
  },
  {
    id:110,
    name: 'Pure Ghee',
    grams: 1000,
    price: 635,
    discounted: 560,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarmkrUiFTzpdRrKNJtaFb5gcxas1QoiM2jw&s',
       description:'Rich, aromatic, and pure, this ghee is made from high-quality butter and is perfect for cooking, baking, or adding a delicious touch to your meals.'
  },
];

export const trending_products = [
  {
    id:111,
    name: 'Fresh Apples',
    grams: 1000,
    price: 180,
    discounted: 160,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNFhbVGVNWF0lwGrf0FDwcRpp_WlC00msZg&s',
       description:'Crisp, sweet, and juicy, these apples are perfect for snacking, making pies, or adding a fresh crunch to your salads.'
  },
  {
    id:112,
    name: 'Oatmeal',
    grams: 500,
    price: 220,
    discounted: 200,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK18eLm_jWbq9uXX0mp3YDYwTcmkPjT2cJ_Q&s',
       description:'A wholesome, heart-healthy breakfast option, this oatmeal is perfect for a nutritious start to your day. Can be customized with your favorite toppings.'
  },
  {
    id:113,
    name: 'Bikaneri Bhujia',
    grams: 500,
    price: 90,
    discounted: 75,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEORl5UOzjxpu3fhpAqIygbaTn4RWPFaAXA&s',
       description:'A popular Indian snack, this crispy and spicy Bikaneri Bhujia is the perfect treat for those who love a crunchy, savory snack.'
  },
  {
    id:114,
    name: 'Cage-Free Eggs',
    grams: 600,
    price: 150,
    discounted: 130,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJ7RPs6WYI1e2mWefFjtlIbV_LmEq1Yi3FQ&s',
       description:'These eggs are laid by free-range hens, ensuring you get the freshest, most flavorful eggs. Great for breakfast, baking, or cooking.'
  },
  {
    id:115,
    name: 'Sourdough Bread',
    grams: 450,
    price: 75,
    discounted: 65,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38CGOPWqfJ-XKtH37iPeio9Ji3uZ5GuJYHQ&s',
       description:'With a tangy flavor and chewy texture, this sourdough bread is perfect for sandwiches or to pair with your favorite soups and stews.'
  },
  {
    id:116,
    name: 'Almond Butter',
    grams: 300,
    price: 220,
    discounted: 200,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tvlqtvaOcHNniKC7L-59slkZJb_wdXLE2g&s',
       description:'Smooth, creamy, and full of healthy fats, this almond butter is perfect for spreading on toast, adding to smoothies, or using in baking recipes.'
  },
  {
    id:117,
    name: 'Garlic',
    grams: 250,
    price: 55,
    discounted: 45,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t06ZqZMQKAivz8KtYB5ceMff7-YCLH6dzg&s',
       description:'Fresh garlic cloves, perfect for adding a bold flavor to any dish. A must-have for cooking, from pastas to stir-fries.'
  },
  {
    id:118,
    name: 'Greek Yogurt',
    grams: 500,
    price: 140,
    discounted: 120,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu_kBmwaxCCDsZ6De4t5l10FbYeHz22_yVg&s',
       description:'Thick, creamy, and full of probiotics, this Greek yogurt is perfect for smoothies, parfaits, or as a healthy snack with fruit and honey.'
  },
  {
    id:119,
    name: 'Red Bell Pepper',
    grams: 300,
    price: 65,
    discounted: 55,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LwtmspgDNeEZAK0lKr8RfceYi4DxgJl8zw&s',
       description:'Sweet and vibrant, these red bell peppers are a great addition to salads, stir-fries, or as a crunchy snack on their own.'
  },
  {
    id:120,
    name: 'Coconut Oil',
    grams: 500,
    price: 300,
    discounted: 270,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnocgFXrzUB7HrLYKOgJnpT2CdV6JwgHQeg&s',
       description:"Pure, cold-pressed coconut oil thats perfect for cooking, baking, or as a natural moisturizer. Packed with healthy fats and antioxidants."
  },
];
export const other_products = [
  {
    id:121,
    name: 'Fresh Apples',
    grams: 1000,
    price: 180,
    discounted: 160,
    image:Images.vegetable,
       description:'Crisp, sweet, and juicy, these apples are perfect for snacking, making pies, or adding a fresh crunch to your salads.'
  },
  {
    id:122,
    name: 'Oatmeal',
    grams: 500,
    price: 220,
    discounted: 200,
    image:Images.dairy,
       description:'A wholesome, heart-healthy breakfast option, this oatmeal is perfect for a nutritious start to your day. Can be customized with your favorite toppings.'
  },
  {
    id:123,
    name: 'Bikaneri Bhujia',
    grams: 500,
    price: 90,
    discounted: 75,
    image:Images.meet,
       description:'A popular Indian snack, this crispy and spicy Bikaneri Bhujia is the perfect treat for those who love a crunchy, savory snack.'
  },
  {
    id:124,
    name: 'Cage-Free Eggs',
    grams: 600,
    price: 150,
    discounted: 130,
    image:Images.masala,
       description:'These eggs are laid by free-range hens, ensuring you get the freshest, most flavorful eggs. Great for breakfast, baking, or cooking.'
  },
  {
    id:125,
    name: 'Sourdough Bread',
    grams: 450,
    price: 75,
    discounted: 65,
    image:Images.package,
       description:'With a tangy flavor and chewy texture, this sourdough bread is perfect for sandwiches or to pair with your favorite soups and stews.'
  },
  {
    id:126,
    name: 'Almond Butter',
    grams: 300,
    price: 220,
    discounted: 200,
    image:Images.pharma,
       description:'Smooth, creamy, and full of healthy fats, this almond butter is perfect for spreading on toast, adding to smoothies, or using in baking recipes.'
  },
  {
    id:127,
    name: 'Garlic',
    grams: 250,
    price: 55,
    discounted: 45,
    image:Images.snacks,
       description:'Fresh garlic cloves, perfect for adding a bold flavor to any dish. A must-have for cooking, from pastas to stir-fries.'
  },
  {
    id:128,
    name: 'Greek Yogurt',
    grams: 500,
    price: 140,
    discounted: 120,
    image:Images.atta,
       description:'Thick, creamy, and full of probiotics, this Greek yogurt is perfect for smoothies, parfaits, or as a healthy snack with fruit and honey.'
  },
  {
    id:129,
    name: 'Red Bell Pepper',
    grams: 300,
    price: 65,
    discounted: 55,
    image:Images.tea,
       description:'Sweet and vibrant, these red bell peppers are a great addition to salads, stir-fries, or as a crunchy snack on their own.'
  },
  {
    id:130,
    name: 'Coconut Oil',
    grams: 500,
    price: 300,
    discounted: 270,
    image:Images.biscuits,
       description:"Pure, cold-pressed coconut oil thats perfect for cooking, baking, or as a natural moisturizer. Packed with healthy fats and antioxidants."
  },
];
const grocery =[
  {
    name:'Fruits & Vegetables',
    image:Images.vegetable,
    // image:Icons.ban1
  
  },
  {
    name:'Dairy, Bread & Eggs',
    image:Images.dairy
  },
  {
    name:'Atta, Rice, Oil & Dals',
    image:Images.atta
  },
  {
    name:'Meat, Fish & Eggs',
    image:Images.meet
  },
  {
    name:'Masala & Dry Fruits',
    image:Images.masala
  },
  { 
    name:'Packaged Food',
    image:Images.package
  },
];

const snacks =[
  {
    name:'Tea, Coffee & More',
    image:Images.tea
  },
  {
    name:'Sweet Cravings',
    image:Images.sweet
  },
  {
    name:'Cold Drinks & Juices',
    image:Images.juice
  },
  {
    name:'Frozen Food',
    image:Images.frozen
  },
  {
    name:'Munchies & Biscuits',
    image:Images.biscuits
  },
  { 
    name:'Ice Creams',
    image:Images.ice
  },
];
const beauty =[
  {
    name:'Makeup & Beauty',
    image:Images.makeup
  },
  {
    name:'Skincare',
    image:Images.skin
  },
  {
    name:'Bath & Body',
    image:Images.tea
  },
  {
    name:'Haircare',
    image:Images.hair
  },
  {
    name:'Grooming Essentials',
    image:Images.groom
  },
  { 
    name:'Pharma & Wellness',
    image:Images.pharma
  },
];
const household =[
  {
    name:'Home Needs',
    image:Images.table
  },
  {
    name:'Kitchenware & Appliances',
    image:Images.kitchen
  },
  {
    name:'Cleaning Essentials',
    image:Images.clean
  },
  {
    name:'Electronics & Appliances',
    image:Images.fan
  },
  {
    name:'Stationary & Crafts',
    image:Images.copy
  },
  { 
    name:'Toys & Sports',
    image:Images.toys
  },
]

export {products, trending_products, other_products, grocery, snacks, beauty, household};
