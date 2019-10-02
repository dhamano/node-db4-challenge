exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { recipe_id: 1, step: 1, description: "Cut off ti leaf stems, remove stiff rib and wash leaves." },
    { recipe_id: 1, step: 2, description: "Arrange leaves in a circular pattern, overlapping leaves." },
    { recipe_id: 1, step: 3, description: "Score port butt all over and place in a container. Rub all sides of port butt with salt and liquid smoke." },
    { recipe_id: 1, step: 4, description: "Place butt, fat side up, on ti leaves. Wrap butt with ti leaves to comletely cover and tie securely with string." },
    { recipe_id: 1, step: 5, description: "Place the wrapped butt on heavy aluminium foil and seal well so no steam escapes." },
    { recipe_id: 1, step: 6, description: "Places the prepared butt in a shallow roasting pan and roast in a preheated 450˚F oven." },
    { recipe_id: 1, step: 7, description: "After 1 hour, reduce heat to 400˚F and cook 3 to 4 hours longer or until done." },
    { recipe_id: 1, step: 8, description: "Shred and add more Hawaiian salt to taste, if desired." },
    { recipe_id: 2, step: 1, description: "Build a medium-hot barbecue fire." },
    { recipe_id: 2, step: 2, description: "Lightly mix the meat with the chopped basil. Divide into 4 portions and shape into patties about 4 inches in diameter." },
    { recipe_id: 2, step: 3, description: "Grill the meat, turning once, for 5 to 8 minutes per side, until charred on the outside and the desired degree of doneness on the inside." },
    { recipe_id: 2, step: 4, description: "About 2 minutes before the burgers are done, top with the cheese slices to melt. Season with salt and pepper." },
    { recipe_id: 2, step: 5, description: "Serve each burger topped with an oinion and tomato slice and 2 basil leaves." },
    { recipe_id: 3, step: 1, description: "Cut chuck steak into portion size pieces." },
    { recipe_id: 3, step: 2, description: "Combine all ingredients in baking dish." },
    { recipe_id: 3, step: 3, description: "Cover and bake 3 hours at 300˚F or until meat is tender and there is a rich gravy." },
  ]);
};