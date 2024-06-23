import { Title } from "@solidjs/meta";
import EmojiAnimator, { EmojiArray } from "~/components/EmojiAnimator";
import Carousel from "~/components/Carousel";

export default function Home() {
  let sequence: EmojiArray = {
    name: "Train Sequence",
    description: "A sequence representing a train ride.",
    emojis: ["🚂           ", "🚂🚃          ", "🚂🚃🚃         ", "🚂🚃🚃        ",
      "🚂🚃🚃🚃       ", "🚂🚃🚃🚃🚃      ", "🚂🚃🚃🚃🚃🚃     ", "🚂🚃🚃🚃🚃🚃🚃    ",
      "🚃🚃🚃🚃🚃🚃🚃💨", " 🚃🚃🚃🚃🚃🚃 💨", "     🚃🚃🚃🚃🚃 💨", "     🚃🚃🚃🚃  💨",
      "    🚃🚃🚃  💨", "     🚃🚃  💨", "       🚃 💨 ", "         💨 ",
      "         💨💨 ", "     💨   💨 ", "  🚨   ", "   🚨    "],
    size: "2em",
    duration: 3000,
  };

  let images = [{ src: "https://picsum.photos/1200/800", alt: "Random Image" },
  { src: "https://picsum.photos/1000/800", alt: "Random Image" },
  { src: "https://picsum.photos/1000/800", alt: "Random Image" }];

  return (

    <main>
      <Title>About</Title>
      <h1>About</h1>
      <div class="bg-gray-200 mb-4 mt-2 rounded-full">
        <EmojiAnimator emojis={sequence.emojis} size={sequence.size} duration={sequence.duration} fadeIn={true} />
      </div>
      <div class="bg-emerald-500 w-20 rounded flex h-10 px-2 inline-flex">
        <EmojiAnimator emojis={["_", " ", "_", " ", "_", "a ", "a_", "ab ", "ab_", "abc ", "abc_"]}
          size={sequence.size} duration={sequence.duration} fadeIn={true} reverseLoop={true} />
      </div>


    </main>
  );
}
