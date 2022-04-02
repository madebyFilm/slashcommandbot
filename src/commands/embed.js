module.exports = {
    name: "embed",
    description: "sends an embed",
    permissions: ["MANAGE_GUILD", "MANAGE_MESSAGES", "MANAGE_CHANNELS"],
    options: [
        { type: 3, name: 'type', description: 'Which embed to send?', required: false },
        /*
            If you search more option types?
            Check it; https://github.com/clqu/discord.js-v13-slash-bot#for-developers
        */
    ],
    run: async (client, interaction) => {
        // const _user = interaction?.options?.get("user")?.user;
        const _type = interaction?.options?.get("string")?.channel;
        /* 
            interaction.options.get("optionName") 
        */

        /* 
           And I recommend using interaction.reply
           Because otherwise you will have to write a text to indicate who the message belongs to, 
           interaction.reply in slash commands will be best for you.
       */
        if (type) {
            await interaction.reply({ content: `${client.user.username} | ${channel.id}`, ephemeral: true })
        }
        // if (user) {
        //     await interaction.followUp({ content: `${client.user.username} | ${user.username}`, ephemeral: true })
        // }
        /*
            Why using followUp?
            > Because we can reply once in slash commands, but if we want 
            > to write more than one, we can provide multiple replies using followUp. 
            > But it is not a method that I highly recommend.
        */
    },
};
