const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   // Fetches User
   const person = message.mentions.members.first();
   if (!person) return message.reply("Please mention someone to ban.");
   let user = args[0]
   let kappa = args.slice(1).join(" ");
   // Checks for Permissions 
   if (!person.manageable) return message.reply("I have no control over that person.");
 
   // Sets Their Nickname
   try {
      await person.setNickname(kappa);
	  const embed = {
  "color": 9299529,
  "footer": {
    "text": "werbot 2018"
  },
  "fields": [
    {
      "name": "Setting Suceeded!",
      "value": `User's ${user} name has been set to ${kappa}`
    }
  ]
};
message.react('👌');
message.channel.send({embed});
   } catch(e) {
      message.reply(`Sorry, I got an error saying: ${e.message}`);
   }
args.slice(1).join(" ");
}

module.exports.help = {
  name: "setnick"
}