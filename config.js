const { Intents } = require("discord.js");;

module.exports = {
    client: {
        token: "",
        intents: [
            Intents.FLAGS.GUILDS
        ],
    },
    commandsDir: './src/commands',
    prefix: '(!): '
}
