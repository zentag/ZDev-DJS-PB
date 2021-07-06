const profileSchema = require('../schemas/profile-schema')
const mongoose = require('mongoose')
const mongo = require('../mongo')

module.exports = {
    minArgs: 2,
    maxArgs: -1,
    callback: async ({ message, args }) => {
        if(!(message.author.id == "518518142532845591" || message.author.id == "521115847801044993" || message.author.id == "309837382344245248")){
            message.reply("Fuck off you're not a cool guy")
            return
        }
        const target = message.mentions.users.first()
        if(!target) return;
        const userId = target.id
        const pbnum = args[1]
        if(args[2]){
            args.shift()
            args.shift()
        } 
        var trs = `${message.author.username} removed ${pbnum} PB to ${target.username}'s account`
        if(args[2]) trs += ` for the reason "${args.join(" ")}"`
        await mongo().then(async (mongoose) => {
            try {
              const result = await profileSchema.findOneAndUpdate(
                {
                  userId
                },
                {
                  userId,
                  $push: {
                    trsHistory: trs,
                  },
                  
                },
                {
                  upsert: true,
                  new: true,
                }
              )
              const { pb } = result;
              const result2 = await profileSchema.findOneAndUpdate(
                {
                  userId
                },
                {
                  userId,
                  $set: {
                    pb: pb - pbnum,
                  },
                  
                },
                {
                  upsert: true,
                  new: true,
                })
            } finally {
              console.log("hell ya, mongo succeed")
            }
          })
    }
}
/* 
$set: {
                      pb: pb - pbnum
                  }
*/