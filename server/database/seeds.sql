
-- -- INSERT INTO Categories (id,name,image)
-- -- VALUES
-- --   (1,'Breakfast','Avocado_Toast.jpeg'),
-- --   (2,'Salads','Caprese_Salad.jpeg'),
-- --   (3,'Main Dishes','Main_dishes.jpg'),
-- --   (4,'Desserts','Desserts.jpg'),
-- --   (5,'Drinks','Drinks.jpg');

INSERT INTO Recipes (
    name, 
    description, 
    instructions, 
    calories, 
    protein, 
    carbs, 
    image_url, 
    ingredients_list, 
    category_id, 
    user_id
) VALUES
  (
    'Vegetarian Stir-Fry',
    'Colorful and flavorful vegetable stir-fry',
    'Chop mixed vegetables (bell peppers, broccoli, carrots) into bite-sized pieces. Heat a wok or large skillet over medium-high heat. Add a splash of oil and stir-fry the vegetables until tender-crisp. Pour in 2 tbsp of soy sauce and your favorite spices, tossing to coat. Serve over a bed of steamed rice.',
    250,
    8,
    30,
    'Vegetarian_Stir_Fry.jpeg',
    'Mixed Vegetables - 2 cups, Soy Sauce - 2 tbsp, Rice - 1 cup',
    3,
    1
  ),
  (
    'Margherita Pizza',
    'Classic pizza with tomato, mozzarella, and basil',
    'Roll out pizza dough on a floured surface. Spread 1/2 cup of tomato sauce evenly over the dough. Sprinkle 1 cup of mozzarella cheese over the sauce. Arrange fresh basil leaves on top. Bake in a preheated oven at 400°F (200°C) until the crust is golden.',
    400,
    15,
    45,
    'Margherita_Pizza.jpeg',
    'Pizza Dough - 1 ball, Tomato Sauce - 1/2 cup, Mozzarella Cheese - 1 cup, Fresh Basil - 1/4 cup',
    3,
    1
  ),
  (
    'Avocado Toast',
    'Simple and healthy avocado toast',
    'Toast two slices of your favorite bread. Mash one ripe avocado and spread it evenly over the toast. Sprinkle with a pinch of salt and pepper. Optional: Drizzle with olive oil or add a poached egg on top.',
    200,
    5,
    15,
    'Avocado_Toast.jpeg',
    'Avocado - 1, Bread - 2 slices',
    1,
    1
  ),
  (
    'Mango Salsa Chicken',
    'Grilled chicken topped with fresh mango salsa',
    'Grill chicken breasts until fully cooked. In a bowl, mix diced mango, red onion, cilantro, and lime juice to create the salsa. Top grilled chicken with the mango salsa. Serve with your favorite side dishes.',
    300,
    20,
    25,
    'Mango_Salsa_Chicken.jpeg',
    'Chicken Breasts - 2, Mango - 1, Red Onion - 1/2, Cilantro - 1/4 cup, Lime Juice - 2 tbsp',
    3,
    1
  ),
  (
    'Spicy Shrimp Tacos',
    'Tacos filled with spicy shrimp, slaw, and avocado',
    'Saute shrimp with spices until pink and opaque. Fill tortillas with cooked shrimp, slaw mix, and sliced avocado. Optional: Garnish with cilantro and lime wedges. Serve warm and enjoy the spicy kick!',
    350,
    18,
    30,
    'Spicy_Shrimp_Tacos.jpeg',
    'Shrimp - 1 lb, Tortillas - 8, Slaw Mix - 2 cups, Avocado - 2',
    3,
    1
  ),
  (
    'Greek Salad',
    'Fresh and tangy Greek salad with feta cheese',
    'Chop cucumber, tomatoes, olives, and feta cheese into bite-sized pieces. Combine in a bowl and toss with olive oil. Sprinkle oregano on top for added flavor. Serve chilled as a refreshing side dish or light meal.',
    300,
    10,
    20,
    'Greek_Salad.jpg',
    'Cucumber - 1, Tomatoes - 2 cups, Olives - 1/2 cup, Feta - 1/2 cup, Olive Oil - 2 tbsp, Oregano - 1 tsp',
    2,
    1
  ),
  (
    'Pineapple Fried Rice',
    'Sweet and savory fried rice with pineapple',
    'Stir-fry cooked rice with diced pineapple, mixed vegetables, and soy sauce. Optional: Add cooked shrimp or chicken for protein. Toss until well combined and heated through. Serve garnished with chopped green onions.',
    400,
    12,
    50,
    'Pineapple_Fried_Rice.jpeg',
    'Rice - 2 cups, Pineapple - 1 cup, Mixed Vegetables - 1 cup, Soy Sauce - 3 tbsp',
    3,
    1
  ),
  (
    'Caprese Salad',
    'Classic Italian salad with tomatoes, mozzarella, and basil',
    'Slice tomatoes and mozzarella cheese into rounds. Arrange on a plate with fresh basil leaves. Drizzle with balsamic glaze for added richness. Serve as a light and elegant appetizer or side dish.',
    250,
    15,
    10,
    'Caprese_Salad.jpeg',
    'Tomatoes - 2, Mozzarella Cheese - 1/2 cup, Fresh Basil - 1/4 cup, Balsamic Glaze - 2 tbsp',
    2,
    1
  ),
  (
    'Sushi Rolls',
    'Homemade sushi rolls with your favorite fillings',
    'Prepare sushi rice according to package instructions. Lay a sheet of seaweed on a bamboo sushi rolling mat. Spread a thin layer of rice on the seaweed, leaving a border at the top. Add your favorite fillings, roll tightly, and slice into bite-sized pieces. Serve with soy sauce and pickled ginger.',
    350,
    18,
    40,
    'Sushi_Rolls.jpeg',
    'Sushi Rice - 2 cups, Seaweed - 10 sheets, Assorted Fillings - Varies, Soy Sauce - 3 tbsp, Pickled Ginger - 1/4 cup',
    3,
    1
  ),
  (
    'Mushroom Risotto',
    'Creamy and comforting mushroom risotto',
    'Saute mushrooms and onions in a pan until tender. Add Arborio rice and stir until coated with oil. Gradually add vegetable broth, stirring continuously until absorbed. Finish with grated Parmesan cheese for a creamy texture. Serve hot with a sprinkle of fresh parsley.',
    400,
    10,
    45,
    'Mushroom_Risotto.jpeg',
    'Mushrooms - 8 oz, Onions - 1, Arborio Rice - 1 cup, Vegetable Broth - 4 cups, Parmesan Cheese - 1/2 cup',
    3,
    1
  ),
  (
    'Fruit Smoothie Bowl',
    'Healthy and colorful fruit smoothie bowl',
    'Blend assorted fruits (berries, banana, mango) with yogurt until smooth. Pour the smoothie into a bowl. Top with granola, mixed nuts, and fresh berries. Enjoy a nutritious and vibrant start to your day!',
    300,
    8,
    40,
    'Fruit_Smoothie_Bowl.jpeg',
    'Assorted Fruits - 2 cups, Yogurt - 1 cup, Granola - 1/2 cup, Mixed Nuts - 1/4 cup, Berries - 1/2 cup',
    1,
    1
  ),
  (
    'BBQ Pulled Pork Sandwich',
    'Slow-cooked pulled pork in barbecue sauce',
    'Cook pork shoulder in a slow cooker until tender. Shred the pork and mix with barbecue sauce. Toast buns and fill with the pulled pork mixture. Serve with coleslaw for a classic barbecue experience.',
    500,
    25,
    35,
    'BBQ_Pulled_Pork_Sandwich.jpeg',
    'Pork Shoulder - 3 lbs, Barbecue Sauce - 2 cups, Buns - 6',
    3,
    1
  ),
  (
    'Cauliflower Crust Pizza',
    'Low-carb pizza with cauliflower crust',
    'Make the crust by blending cauliflower, cheese, and egg. Press the mixture onto a baking sheet and bake until crispy. Add your favorite pizza toppings. Bake until the cheese is melted and bubbly. Enjoy a guilt-free pizza experience!',
    350,
    15,
    25,
    'Cauliflower_Crust_Pizza.jpeg',
    'Cauliflower - 1 head, Cheese - 1 cup, Egg - 1, Pizza Toppings - Varies',
    3,
    1
  ),
  (
    'Lemon Garlic Butter Shrimp',
    'Quick and flavorful lemon garlic butter shrimp',
    'Saute shrimp in minced garlic and butter until pink. Squeeze fresh lemon juice over the shrimp. Garnish with chopped parsley. Serve over pasta, rice, or with crusty bread for a delightful meal.',
    250,
    20,
    5,
    'Lemon_Garlic_Butter_Shrimp.jpeg',
    'Shrimp - 1 lb, Garlic - 3 cloves, Butter - 2 tbsp, Lemon Juice - 1 lemon, Parsley - 2 tbsp',
    3,
    1
  ),
  (
    'Quinoa Salad',
    'Nutrient-packed quinoa salad with vegetables',
    'Cook quinoa according to package instructions. Toss cooked quinoa with diced cucumber, cherry tomatoes, and crumbled feta. Drizzle with olive oil and toss until well combined. A refreshing and wholesome salad is ready to be served.',
    300,
    12,
    40,
    'Quinoa_Salad.jpeg',
    'Quinoa - 1 cup, Cucumber - 1, Cherry Tomatoes - 1 cup, Feta - 1/2 cup, Olive Oil - 2 tbsp',
    2,
    1
  ),
  (
    'Chicken Caesar Wrap',
    'Grilled chicken, romaine lettuce, and Caesar dressing in a wrap',
    'Grill chicken breasts until fully cooked. Wrap grilled chicken with fresh romaine lettuce in a tortilla. Drizzle Caesar dressing over the ingredients. Roll the wrap and secure with toothpicks if needed. A quick and satisfying meal on the go!',
    400,
    20,
    30,
    'Chicken_Caesar_Wrap.jpeg',
    'Chicken Breast - 2, Romaine Lettuce - 1 cup, Caesar Dressing - 2 tbsp, Tortilla - 1',
    3,
    1
  ),
  (
    'Vegetable Lasagna',
    'Layered vegetable lasagna with marinara sauce and cheese',
    'Cook lasagna noodles according to package instructions. Layer lasagna noodles with marinara sauce, sautéed mixed vegetables, and shredded cheese. Repeat the layers until the baking dish is filled. Bake until the cheese is melted and bubbly. Let it rest before slicing and serving.',
    350,
    15,
    30,
    'Vegetable_Lasagna.jpeg',
    'Lasagna Noodles - 12, Marinara Sauce - 2 cups, Mixed Vegetables - 2 cups, Cheese - 1 cup',
    3,
    1
  ),
  (
    'Peach Cobbler',
    'Sweet and juicy peach cobbler with a golden crust',
    'Mix sliced peaches with sugar and spices in a baking dish. In a separate bowl, prepare a biscuit crust with flour, sugar, and butter. Spread the crust over the peaches and bake until golden brown. Allow it to cool slightly before serving with a scoop of vanilla ice cream.',
    300,
    3,
    45,
    'Peach_Cobbler.jpeg',
    'Peaches - 4 cups, Sugar - 1 cup, Spices - 1 tsp, Biscuit Crust - 1 cup',
    4,
    1
  ),
  (
    'Teriyaki Salmon',
    'Grilled teriyaki-glazed salmon fillets',
    'Marinate salmon in teriyaki sauce. Grill until fish flakes easily with a fork.',
    350,
    25,
    15,
    'Teriyaki_Salmon.jpeg',
    'Salmon Fillets - 4, Teriyaki Sauce - 1/2 cup',
    3,
    1
  ),
  (
    'Chocolate Avocado Mousse',
    'Rich and creamy chocolate mousse made with avocados',
    'Blend avocados, cocoa powder, and sweetener until smooth. Chill before serving.',
    200,
    5,
    20,
    'Chocolate_Avocado_Mousse.jpeg',
    'Avocado - 2, Cocoa Powder - Varies, Sweetener - Varies',
    1,
    1
  );



