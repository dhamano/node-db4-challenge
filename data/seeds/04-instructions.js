exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { step: 1, description: "Cut off ti leaf stems, remove stiff rib and wash leaves." },
    { step: 2, description: "Arrange leaves in a circular pattern, overlapping leaves." },
    { step: 3, description: "Score port butt all over and place in a container. Rub all sides of port butt with salt and liquid smoke." },
    { step: 4, description: "Place butt, fat side up, on ti leaves. Wrap butt with ti leaves to comletely cover and tie securely with string." },
    { step: 5, description: "Place the wrapped butt on heavy aluminium foil and seal well so no steam escapes." },
    { step: 6, description: "Places the prepared butt in a shallow roasting pan and roast in a preheated 450˚F oven." },
    { step: 7, description: "After 1 hour, reduce heat to 400˚F and cook 3 to 4 hours longer or until done." },
    { step: 8, description: "Shred and add more Hawaiian salt to taste, if desired." },
    { step: 1, description: "Build a medium-hot barbecue fire." },
    { step: 2, description: "Lightly mix the meat with the chopped basil. Divide into 4 portions and shape into patties about 4 inches in diameter." },
    { step: 3, description: "Grill the meat, turning once, for 5 to 8 minutes per side, until charred on the outside and the desired degree of doneness on the inside." },
    { step: 4, description: "About 2 minutes before the burgers are done, top with the cheese slices to melt. Season with salt and pepper." },
    { step: 5, description: "Serve each burger topped with an oinion and tomato slice and 2 basil leaves." },
    { step: 1, description: "Cut chuck steak into portion size pieces." },
    { step: 2, description: "Combine all ingredients in baking dish." },
    { step: 3, description: "Cover and bake 3 hours at 300˚F or until meat is tender and there is a rich gravy." },
  ]);
};