import { createEffect, createSignal, JSX } from "solid-js";
import EmojiAnimator, { EmojiArray } from "~/components/EmojiAnimator";
import { emojiSequences } from "~/data/emojisSequences";
import "~/styles/EmojiParade.css";

const EmojiParade = () => {
    const [sequence, setSequence] = createSignal<EmojiArray>(emojiSequences[0]);
    const [key, setKey] = createSignal(0);
    const [dom, setDom] = createSignal<JSX.Element | null>(null);

    const handleChange = (e: Event) => {
        const target = e.currentTarget as HTMLSelectElement;
        const selectedIndex = parseInt(target.value);
        setSequence(emojiSequences[selectedIndex]);
        setKey(prev => prev + 1); // Update the key to force re-render
    };

    createEffect(() => {
        console.log("Sequence changed:", sequence());
        setDom(
            <EmojiAnimator
                key={key()}
                emojis={sequence().emojis}
                size={sequence().size || "3em"}
                duration={sequence().duration || 4000}
                onAnimationEnd={() => console.log("Animation ended")}
            />
        );
    });

    return (
        <div class="container">
            <h1>Emoji Animator</h1>
            {/* Using the key prop to force a new instance */}
            {dom()}
            <p>{sequence().description}</p>
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
