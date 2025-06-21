import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Margherita from "../assets/margherita.jpg";
import Pepperoni from "../assets/pepperoni.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";
import Vegan from "../assets/vegan.jpg";

export const MenuList = [
  {
    name: "Classic Pepperoni",
    image: Pepperoni,
    price: 14.99,
    description:
      "Our signature pizza with pepperoni, mozzarella cheese, and homemade tomato sauce",
  },
  {
    name: "Margherita",
    image: Margherita,
    price: 12.99,
    description:
      "Fresh mozzarella, basil, olive oil, and our signature tomato sauce",
  },
  {
    name: "Deluxe Supreme",
    image: PedroTechSpecial,
    price: 18.99,
    description:
      "Pepperoni, Italian sausage, bell peppers, onions, mushrooms, and black olives",
  },
  {
    name: "Garden Veggie",
    image: Vegan,
    price: 15.99,
    description:
      "Spinach, artichokes, mushrooms, tomatoes, and vegan cheese on a whole wheat crust",
  },
  {
    name: "Hawaiian",
    image: Pineapple,
    price: 15.49,
    description:
      "Ham, pineapple, and mozzarella cheese with our signature tomato sauce",
  },
  {
    name: "Truffle Mushroom",
    image: Expensive,
    price: 19.99,
    description:
      "Wild mushrooms, truffle oil, arugula, and goat cheese on a hand-tossed crust",
  },
];
