const { get } = require("snekfetch"); 
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.react('👌');
try {
get('https://aws.random.cat/meow').then(res => {

return message.channel.send({files: [{attachment: res.body.file}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
}

module.exports.help = {
name: "cat"
}