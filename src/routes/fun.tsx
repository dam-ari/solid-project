import EmojiAnimator, { EmojiArray } from "../components/EmojiAnimator";
import "./fun.css";
export default function Fun() {
  const emojisArr = [
    { emojis: ["😀", "😅", "😂", "🤣"], size: "2em", duration: 2000 },
    // {
    //   emojis: ["a", "b", "c", "d", "e", "f", "g"],
    //   size: "2em",
    //   duration: 3000,
    // },
  ];
  const emojis = [
    "monkey",
    "clock",
    "mailbox",
    "camera",
    "hourglass",
    "earth",
    "moon",
    "bomb",
    "hearts",
    "wave",
    "inbox",
    "vomit",
    "whale",
    "city-time",
  ];
  return (
    <main>
      {emojisArr.map(({ emojis, size, duration }: EmojiArray) => (
        <EmojiAnimator emojis={emojis} size={size} duration={duration} />
      ))}
      <span class="emoji">| Dynamic!</span>
      {emojis.map((emoji) => (
        <span class={`emoji ${emoji}`} role="img" aria-label={emoji}></span>
      ))}
      <EmojiAnimator emojis={["ab", "bc"]} size={"1em"} duration={2000} />
    </main>
  );
}
