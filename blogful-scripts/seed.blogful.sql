BEGIN;

INSERT 
  INTO blogful_articles 
    (title, date_published, content)
  VALUES 
    ('How to train your dragon', '2019-01-01', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('How to make sushi', '2019-03-01', 'Step 1: Buy ingredients. Step 2: Make sushi.'),
    ('How to eat sushi', '2019-02-01', 'Step 1: Buy ingredients. Step 2: Make sushi. Step 3: Eat sushi.'),
    ('How to buy sushi', '2019-06-01', 'Step 1: Buy ingredients.'),
    ('Where to buy sushi', '2019-11-01', '1. Grocery. 2. Restaurants.'),
    ('Where to eat sushi', '2019-10-01', '1. Home 2. Restaurants 3. Outside'),
    ('Where to make sushi', '2019-04-01', '1. Home'),
    ('When to make sushi', '2019-07-12', 'All the time'),
    ('When to buy sushi', '2019-04-11', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('When to eat sushi', '2019-02-02', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Who makes sushi', '2019-01-01', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Who buys sushi', '2018-01-01', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Who eats sushi', '2017-05-18', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Best times for sushi', '2016-03-11', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Worst times for sushi', '2019-12-09', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Tips for looking for sushi', '2019-03-04', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Tips for sushi', '2019-01-02', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('All you need to know about sushi', '2019-06-29', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('When to train your dragon', '2018-07-21', 'Step 1: Get a dragon. Step 2: Train them.'),
    ('Why to train your dragon', '2019-03-20', 'Step 1: Get a dragon. Step 2: Train them.');

COMMIT;