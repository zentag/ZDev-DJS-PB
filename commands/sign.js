const profileSchema = require('../schemas/profile-schema')
const mongoose = require('mongoose')
const mongo = require('../mongo.js')
module.exports = {
    minArgs: 1,
    maxArgs: 1,
    callback: async ({ message, args }) => {
        if(!(message.author.id == "518518142532845591" || message.author.id == "521115847801044993" || message.author.id == "309837382344245248")){
            message.reply("Fuck off you're not a cool guy")
            return
        }
        const target = message.mentions.users.first()
        const userId = target.id
        await mongo().then(async (mongoose) => {
            try {
              const result = await profileSchema.findOneAndUpdate(
                {
                  userId
                },
                {
                  userId,
                  $push: {
                    trsHistory: `${message.author.username} added 100 PB to ${target.username}'s account for building a pogland sign`,
                  },
                  $inc: {
                      pb: 100
                  }
                },
                {
                  upsert: true,
                  new: true,
                }
              )
            } finally {
              console.log("hell ya, mongo succeed")
              message.reply("Operation Succeeded")
            }
          })
    }
}