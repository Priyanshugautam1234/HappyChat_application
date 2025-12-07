import { useEffect, useState } from "react";
import { useThemeStore } from "../store/useThemeStore";

const MoodBackground = () => {
    const { theme } = useThemeStore();
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        // Determine emojis based on theme
        let themeEmojis = [];
        switch (theme) {
            case "custom-happy":
                themeEmojis = ["😊", "😂", "🤣", "✨", "🌞", "😆", "🎉"];
                break;
            case "valentine":
                themeEmojis = ["❤️", "😍", "😘", "💖", "🌸", "💕", "💘"];
                break;
            case "custom-angry":
                themeEmojis = ["😡", "🤬", "💢", "😠", "🔥", "👿", "😤"];
                break;
            case "nord":
                themeEmojis = ["😢", "😭", "🌧️", "💔", "☹️", "💧", "😿"];
                break;
            default:
                themeEmojis = [];
        }

        if (themeEmojis.length === 0) {
            setEmojis([]);
            return;
        }

        // Generate random floating emojis
        const initialEmojis = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            emoji: themeEmojis[Math.floor(Math.random() * themeEmojis.length)],
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 5 + 5 + "s", // 5-10s
            animationDelay: Math.random() * 5 + "s",
        }));

        setEmojis(initialEmojis);
    }, [theme]);

    if (emojis.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {emojis.map((item) => (
                <div
                    key={item.id}
                    className="absolute bottom-0 text-4xl opacity-20"
                    style={{
                        left: item.left,
                        animation: `floatUp ${item.animationDuration} linear infinite`,
                        animationDelay: item.animationDelay,
                    }}
                >
                    {item.emoji}
                </div>
            ))}
        </div>
    );
};

export default MoodBackground;
