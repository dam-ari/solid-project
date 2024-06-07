import { createEffect, createSignal, onCleanup } from "solid-js";
import "./EmojiAnimator.css";

export type EmojiArray = {
    name?: string;
    description?: string;
    emojis: string[];
    size?: string;
    duration?: number;
    onAnimationEnd?: () => void;
};

const EmojiAnimator = (props: EmojiArray) => {
    const { emojis = [], duration = 5000, onAnimationEnd, size = "2em" } = props;
    const [currentEmoji, setCurrentEmoji] = createSignal(emojis[0] || "");
    const [currentSet, setCurrentSet] = createSignal(emojis);
    let intervalId: number;

    createEffect(() => {

        clearInterval(intervalId);
        console.log("Initializing EmojiAnimator with emojis:", emojis);
        setCurrentSet(emojis);
        let currentIndex = 0;

        intervalId = setInterval(() => {
            const current = currentSet();
            const len = current.length;
            if (len > 0) {
                currentIndex = (currentIndex + 1) % len;
                setCurrentEmoji(currentSet()[currentIndex]);

                if (currentIndex === len - 1 && onAnimationEnd) {
                    onAnimationEnd();
                }
            }
        }, duration / (currentSet().length || 1));

        // onCleanup(() => {
        //     clearInterval(interval);
        //     console.log("Clearing interval");
        // });

        setCurrentEmoji(emojis[0] || "");

        return () => clearInterval(intervalId); // Ensure cleanup
    });

    return (
        <div class="emoji-animator" style={{ "font-size": size }}>
            <span>{currentEmoji()}</span>
        </div>
    );
};

export default EmojiAnimator;
