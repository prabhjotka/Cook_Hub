
INSERT INTO Categories (id,name,image)
VALUES
  (1,'Breakfast','Avocado_Toast.jpeg'),
  (2,'Salads','Caprese_Salad.jpeg'),
  (3,'Main Dishes','Main_dishes.jpg'),
  (4,'Desserts','Desserts.jpg'),
  (5,'Drinks','Drinks.jpg');


-- Insert default favorites data
INSERT INTO favorites (user_id, item_id) VALUES
    (1, 101),  -- User with ID 1 favorites item with ID 101
    (1, 102),  -- User with ID 1 favorites item with ID 102
    (2, 101),  -- User with ID 2 favorites item with ID 101
    (3, 103);  -- User with ID 3 favorites item with ID 103

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
    'Chop and stir-fry your favorite vegetables, Add soy sauce and spices, Serve over rice.',
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
    'Roll out pizza dough, Add tomato sauce, cheese, and fresh basil, Bake until crust is golden.',
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
    'Toast bread, Spread mashed avocado on top, Sprinkle with salt and pepper.',
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
    'Grill chicken breasts, Top with a mix of diced mango, red onion, cilantro, and lime juice.',
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
    'Saute shrimp with spices., Fill tortillas with shrimp, slaw, and sliced avocado.',
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
    'Combine chopped cucumber, tomatoes, olives, and feta, Drizzle with olive oil and sprinkle with oregano.',
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
    'Stir-fry rice with diced pineapple, vegetables, and soy sauce, Optional: add cooked shrimp or chicken.',
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
    'Slice tomatoes and mozzarella. Arrange on a plate with fresh basil. Drizzle with balsamic glaze.',
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
    'Roll sushi with rice, seaweed, and your choice of fillings, Serve with soy sauce and pickled ginger.',
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
    'Saute mushrooms and onions. Cook Arborio rice with broth until creamy, Finish with Parmesan cheese.',
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
    'Blend your favorite fruits with yogurt., Top with granola, nuts, and fresh berries.',
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
    'Cook pork shoulder in slow cooker, Shred and mix with barbecue sauce, Serve in a bun.',
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
    'Make crust with cauliflower, cheese, and egg, Add your favorite toppings, Bake until crispy.',
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
    'Saute shrimp in garlic and butter, Squeeze fresh lemon juice, Garnish with parsley.',
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
    'Cook quinoa, Toss with diced cucumber, cherry tomatoes, and feta, Drizzle with olive oil.',
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
    'Grill chicken, Wrap with romaine lettuce and Caesar dressing in a tortilla.',
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
    'Layer lasagna noodles with marinara sauce, vegetables, and cheese, Bake until bubbly.',
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
    'Mix peaches with sugar and spices, Top with a buttery biscuit crust, Bake until golden brown.',
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
    'Marinate salmon in teriyaki sauce, Grill until fish flakes easily with a fork.',
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
    'Blend avocados, cocoa powder, and sweetener until smooth, Chill before serving.',
    200,
    5,
    20,
    'Chocolate_Avocado_Mousse.jpeg',
    'Avocado - 2, Cocoa Powder - Varies, Sweetener - Varies',
    1,
    1
  );


