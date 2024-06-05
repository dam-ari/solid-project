import "./fun.css";
export default function Fun() {
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
      {emojis.map((emoji) => (
        <span class={`emoji ${emoji}`} role="img" aria-label={emoji}></span>
      ))}
    </main>
  );
}
