import localFont from "next/font/local";
import { Inter, Lora, Raleway } from "next/font/google";

// defining the your variable fonts

const lora = Lora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

// defining a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const myFont = localFont({
  src: "../usedFonts/TT Norms Pro Bold.otf",
  weight: "700",
  style: "bold",
});

export { inter, lora, myFont, raleway };
