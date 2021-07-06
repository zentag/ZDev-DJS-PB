const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: ({ message, prefix, args }) => {
        if(args[0]){
            const embed = new Discord.MessageEmbed()
            embed.setTitle("Help")
            embed.setColor("0099ff")
            embed.addField("Presets", `**base\nevent\nrecruit\nsign`)
            embed.setDescription(`These can making adding PB easier, and add an automatic reason\n**Format: ${prefix}<preset> <mention>**`)
            message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
            embed.setTitle("Help")
            embed.setColor("0099ff")
            embed.addField("Add+Remove", `**${prefix}add <mention> <amount> [reason]** - Add pb to an account\n**${prefix}remove <mention> <amount> [reason]** - Remove pb from an account`)
            embed.setDescription(`To see preset commands do ${prefix}help presets`)
            message.channel.send(embed)
        }
    }
}