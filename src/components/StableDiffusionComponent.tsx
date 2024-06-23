import { createSignal } from 'solid-js';

const StableDiffusionComponent = () => {
    const [imageUrl, setImageUrl] = createSignal<string | null>(null);
    const [loading, setLoading] = createSignal(false);
    const [error, setError] = createSignal<string | null>(null);

    const generateImage = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/generate-image', {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={generateImage} disabled={loading()}>
                {loading() ? 'Generating...' : 'Generate Image'}
            </button>
            {error() && <p style={{ color: 'red' }}>{error()}</p>}
            {imageUrl() && <img src={imageUrl()} alt="Generated" />}
        </div>
    );
};

export default StableDiffusionComponent;
