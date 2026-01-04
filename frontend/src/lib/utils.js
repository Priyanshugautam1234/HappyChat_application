export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function isOnlyEmojis(text) {
  if (!text) return false;ca 
  // Regex matches strings that contain ONLY emojis and whitespace
  // \p{Emoji} matches emoji characters
  // \p{Extended_Pictographic} catches newer emojis
  const emojiRegex = /^[\p{Emoji}\p{Extended_Pictographic}\s]+$/u;
  return emojiRegex.test(text);
}

export function getThemeBySentiment(text) {
  if (!text) return "sunset";

  const lowerText = text.toLowerCase();

  // Helper for whole word matching
  const hasWord = (words) => words.some(w => new RegExp(`\\b${w}\\b`, "i").test(lowerText));

  // Happy/Excited -> happy (Custom Dark Yellow)
  if (hasWord(["happy", "lol", "haha", "great", "awesome", "good", "yay", "cool", "smile", "funny", "comedy", "fun", "happiness", "excited", "party", "joy", "laugh"])) {
    return "custom-happy";
  }

  // Love/Romantic -> valentine (Pink)
  if (hasWord(["love", "heart", "xoxo", "cute", "kiss", "baby", "sweet", "darling", "honey", "crush", "hug", "miss you", "adore", "romance"])) {
    return "valentine";
  }

  // Angry/Intense -> custom-angry (Faded Red)
  if (hasWord(["angry", "hate", "mad", "stupid", "idiot", "bad", "wtf", "annoying", "furious", "rage", "shut up", "worst", "damn", "hell"])) {
    return "custom-angry";
  }

  // Sad/Melancholy -> nord (Blue-Grey)
  if (hasWord(["sad", "cry", "sorry", "miss", "hurt", "pain", "blue", "depressed", "lonely", "grief", "broken", "tears", "upset", "unhappy"])) {
    return "nord";
  }

  return "sunset"; // Default
}
