import { Title } from "@solidjs/meta";
import EmojiAnimator, { EmojiArray } from "~/components/EmojiAnimator";

export default function Home() {
  let sequence: EmojiArray = {
    name: "Train Sequence",
    description: "A sequence representing a train ride.",
    emojis: ["🚂", "🚂🚃", "🚂🚃🚃", "🚂🚃🚃",
      "🚂🚃🚃🚃", "🚂🚃🚃🚃🚃", "🚂🚃🚃🚃🚃🚃", "🚂🚃🚃🚃🚃🚃🚃",
      "🚃🚃🚃🚃🚃🚃🚃💨", " 🚃🚃🚃🚃🚃🚃 💨", "     🚃🚃🚃🚃🚃 💨", "     🚃🚃🚃🚃  💨",
      "    🚃🚃🚃  💨", "     🚃🚃  💨", "       🚃 💨 ", "         💨 ",
      "         💨💨 ", "     💨   💨 ", "  🚨   ", "   🚨    "],
    size: "2em",
    duration: 3000,
  };
  return (

    <main>
      <Title>About</Title>
      <h1>About</h1>
      <div class="p-3 bg-gray-200 rounded-full mb-4 mt-2 ">
        <EmojiAnimator emojis={sequence.emojis} size={sequence.size} duration={sequence.duration} />
      </div>
    </main>
  );
}
