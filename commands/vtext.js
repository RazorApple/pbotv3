
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let command = message.content.split(' ');
        if(command.length < 2){ //not enough arguments
            message.channel.send("Please enter some text to ｖａｐｏｒｉｚｅ it.");
        }
        else{
            command.shift();
            var sentence = command.join(" ");
            var aesthetic = '';
            for(var i=0; i<sentence.length; i++){
                if(sentence[i] == ' '){
                    aesthetic += '   '
                }
                else if(sentence[i] >= '!' && sentence[i] <= '~'){
                    aesthetic += String.fromCharCode(sentence.charCodeAt(i)+65248);
                }
                else{
                    aesthetic += sentence[i];
                }
            }
            message.react('👌');
            message.channel.send(aesthetic);
        }
    }


module.exports.help = {
  name: "vtext"
}
