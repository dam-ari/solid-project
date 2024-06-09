import { createSignal, createEffect, JSX } from "solid-js";
import EmojiAnimator, { EmojiArray } from "~/components/EmojiAnimator";
import { emojiSequences } from "~/data/emojisSequences";
import "~/styles/EmojiParade.css";
import { handleCopy } from "~/utils/createGif";

const EmojiParade = () => {
    const [sequence, setSequence] = createSignal<EmojiArray>(emojiSequences[0]);
    const [key, setKey] = createSignal(0);
    const [dom, setDom] = createSignal<JSX.Element | null>(null);

    const handleChange = (e: Event) => {
        const target = e.currentTarget as HTMLSelectElement;
        const selectedIndex = parseInt(target.value);
        setSequence(emojiSequences[selectedIndex]);
        setKey((prev) => prev + 1); // Update the key to force re-render
    };

    const handleCopyGif = async () => {
        const { emojis, size, duration } = sequence();
        const animatorElement = document.querySelector('.emoji-animator');
        if (!animatorElement) return;
        let res = await handleCopy(emojis, size, duration, () => { });

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
            {dom()}
            <p>{sequence().description}</p>
            <select onChange={handleChange}>
                {emojiSequences.map((seq: EmojiArray, index: number) => (
                    <option value={index} key={index}>
                        {seq.name}
                    </option>
                ))}
            </select>
            <button class="icon-button px-2" onClick={handleCopyGif}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </button>
        </div>
    );
};

export default EmojiParade;
