const { MessageEmbed } = require('discord.js')
const request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.comick.fun/chapter?lang=en&page=1&order=new',
  'headers': {
  }
};




module.exports = {
    name : 'update',
    category : 'manga',
    description : 'Returns Top List on comick.fun',
    run : async(client, message, args) => {
      let counter;
      var best = await request(options, function (error, response) {
          //if (error) throw new Error(error);
          const test = JSON.parse(response.body)
          var result_loop = test.every((elements, index) => {
            counter = counter + 1;
            console.log(elements["md_comics"]["title"])
            const embed = new MessageEmbed()
              .setTitle(elements["md_comics"]["title"])
              .setURL('https://comick.fun/comic/' + elements["slug"])
              .setImage(elements["md_comics"]["md_covers"]["0"]["gpurl"])
              .setDescription("Chapter: " + elements["md_comics"]["last_chapter"])
              .setTimestamp(elements["last_at_date"])
              message.channel.send({ embeds: [embed] })
              console.log(counter);
             if(index == 9) { return false; }
            return true;
          })
        })
       
        const msg = await message.channel.send(`🏓 Pinging...`)
        msg.delete()
    }
}
