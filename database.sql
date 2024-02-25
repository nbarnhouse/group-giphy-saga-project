-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "image_id" VARCHAR (255) NOT NULL,
  "url" VARCHAR (255) NOT NULL, 
  "title" VARCHAR (255) NOT NULL, 
  "category_id" integer REFERENCES categories
);

INSERT INTO favorites
("image_id", "url", "title", "category_id")
VALUES ('wEM71wbHnFPTHa7FSt', 'https://media4.giphy.com/media/wEM71wbHnFPTHa7FSt/giphy.gif?cid=4af27364vgoqrmjns1fdgc1nmh4dq8uj6byugqfys9tto538&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'Full Moon Love GIF by darrenjturner', '1')