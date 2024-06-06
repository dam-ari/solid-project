import { createSignal, createEffect } from "solid-js";
import EmojiAnimator, { EmojiArray } from "~/components/EmojiAnimator";
import { emojiSequences } from "~/data/emojisSequences";
import "~/styles/EmojiParade.css";

const EmojiParade = () => {
    const [sequence, setSequence] = createSignal(emojiSequences[0].emojis);

    // Ensure the sequence updates and the component re-renders
    createEffect(() => {
        console.log("Selected emoji sequence: ", sequence());
    });

    const handleChange = (e: Event) => {
        const target = e.currentTarget as HTMLSelectElement;
        const selectedIndex = parseInt(target.value);
        setSequence(emojiSequences[selectedIndex].emojis);
    };

    return (
        <div class="container">
            <h1>Emoji Animator</h1>
            <EmojiAnimator
                emojis={sequence()}
                size="3em"
                duration={4000}
                onAnimationEnd={() => console.log("Animation ended")}
            />
            <select onChange={handleChange}>
                {emojiSequences.map((seq: EmojiArray, index: number) => (
                    <option value={index} key={index}>
                        {seq.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EmojiParade;
