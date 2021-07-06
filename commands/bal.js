const Discord = require("discord.js")
const profileSchema = require("../schemas/profile-schema")

module.exports = {
    minArgs: 1,
    maxArgs: 1,
    aliases: ['balance'],
    callback: ({ message }) => {
        const target = message.mentions.users.first()
        const userId = target.id
        const result = profileSchema.findOne({userId}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                const embed = new Discord.MessageEmbed()
                  .setTitle(`${target.username}`)
                  .setDescription(`Find the transaction history with pb$history <@${userId}>`)
                  .addField("Balance", docs.pb)
                  .setColor("0099ff")
                  .setFooter(`POGLANDS ON TOP https://discord.gg/6vSPRtggyq`)
                message.channel.send(embed)
            }
        });
    }
}