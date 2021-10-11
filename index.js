function createTestMessage(message) {
    if (message === undefined) throw new Error("No Message Found");
    console.log("✨", message)
};

createTestMessage("This is awesome emoji");

module.exports = awesomeEmojiLog