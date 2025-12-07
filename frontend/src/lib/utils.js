export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function isOnlyEmojis(text) {
  if (!text) return false;
  // Regex matches strings that contain ONLY emojis and whitespace
  // \p{Emoji} matches emoji characters
  // \p{Extended_Pictographic} catches newer emojis
  const emojiRegex = /^[\p{Emoji}\p{Extended_Pictographic}\s]+$/u;
  return emojiRegex.test(text);
}

export function getThemeBySentiment(text) {
  if (!text) return "sunset";

  const lowerText = text.toLowerCase();

  // Happy/Excited -> happy (Custom Dark Yellow)
  if (["happy", "lol", "haha", "great", "awesome", "good", "yay", "cool", "smile", "funny", "comedy", "fun", "happiness", "excited", "party", "joy", "laugh"].some(w => lowerText.includes(w))) {
    return "custom-happy";
  }

  // Love/Romantic -> valentine (Pink)
  if (["love", "heart", "xoxo", "cute", "kiss", "baby", "sweet", "darling", "honey", "crush", "hug", "miss you", "adore", "romance"].some(w => lowerText.includes(w))) {
    return "valentine";
  }

  // Angry/Intense -> custom-angry (Faded Red)
  if (["angry", "hate", "mad", "stupid", "idiot", "bad", "wtf", "annoying", "furious", "rage", "shut up", "worst", "damn", "hell"].some(w => lowerText.includes(w))) {
    return "custom-angry";
  }

  // Sad/Melancholy -> nord (Blue-Grey)
  if (["sad", "cry", "sorry", "miss", "hurt", "pain", "blue", "depressed", "lonely", "grief", "broken", "tears", "upset", "unhappy"].some(w => lowerText.includes(w))) {
    return "nord";
  }

  return "sunset"; // Default
}
