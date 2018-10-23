const { get } = require("snekfetch"); 
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.react('👌');
try {
get('https://dog.ceo/api/breeds/image/random').then(res => {

return message.channel.send({files: [{attachment: res.body.message}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
}

module.exports.help = {
name: "dog"
}