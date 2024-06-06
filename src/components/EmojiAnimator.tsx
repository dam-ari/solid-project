import { createEffect, createSignal } from "solid-js";

export type EmojiArray = {
    name: string;
    description: string;
    emojis: string[];
    size?: string;
    duration?: number;
    onAnimationEnd?: () => void;
};

const EmojiAnimator = (props: EmojiArray) => {
    const [currentEmoji, setCurrentEmoji] = createSignal(props.emojis[0]);

    // Effect to handle the emoji animation
    createEffect(() => {
        let currentIndex = 0;
        const { emojis, duration = 5000, onAnimationEnd } = props;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % emojis.length;
            setCurrentEmoji(emojis[currentIndex]);

            if (currentIndex === emojis.length - 1 && onAnimationEnd) {
                onAnimationEnd();
            }
        }, duration / emojis.length);

        return () => clearInterval(interval);
    });

    // Effect to update the current emoji when the emojis prop changes
    createEffect(() => {
        setCurrentEmoji(props.emojis[0]);
    });

    return (
        <div class="emoji-animator" style={{ "font-size": props.size }}>
            <span>{currentEmoji()}</span>
        </div>
    );
};

export default EmojiAnimator;
