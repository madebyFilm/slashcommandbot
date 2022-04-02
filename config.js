const { Intents } = require("discord.js");;

module.exports = {
    client: {
        token: "OTU5NjAxMTc1OTM2NzY1OTUy.YkeQPA.goMV-_9kNdsfSzjbuZkqoQCl1bs",
        intents: [
            Intents.FLAGS.GUILDS
        ],
    },
    commandsDir: './src/commands',
    prefix: '(!): '
}
