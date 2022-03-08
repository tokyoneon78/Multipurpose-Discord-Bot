const { MessageEmbed } = require('discord.js')
const request = require('request');


module.exports = {
    name : 'meme',
    category : 'memes',
    description : 'Gets meme from r/genshin_memepact',
    run : async(client, message, args) => {
        const embed = new MessageEmbed()
        const msg = await message.channel.send(`🏓 Fetching...`)
		    var request = require('request');
        var options = {
          'method': 'GET',
          'url': 'https://reddit.com/r/memes/random/.json',
          'headers': {
            'Cookie': 'csv=2; edgebucket=jkROrKLatTH7ADJDR2; loid=0000000000khlb9sox.2.1646780367688.Z0FBQUFBQmlKOV9QYTd4QWo3c1hSQlZKNVhiZEVpTHliZ3RLZDhXSkJ5Z3o3LTJIdW80eDhrTHo2TUx0Nnd0X3lOTWVReDI0N2QwUjRsM0dGLVY5aFQ5ZUxtY00yc0o0cjNnR1dQaEt5aHo5N1d6R2I1OEZKb255UXdONlFCNXRqRzBKdzVNc1lBR0I; session_tracker=jl9JQmbHJlWDzM1B56.0.1646780390401.Z0FBQUFBQmlKOV9tcjBqR2lmaU01YmFrRmszbHRKMUhNaHQxb2I3T3YtZlQ5YzY4RWRuS051TDgyV1VEZnlndlJBMWFtMGRTZnVOTEd2RVVWUEZQeWJnc1NXX2ktVGxLdFVJSHlkczJKR01MbGltSzhKWTl0SXRvWlVQS3lia1FMRWNCMS1FWHhEcV8'
          }
        };
      request(options, function (error, response) {
      if (error) throw new Error(error);
        const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`); 
            msg.delete()

    message.channel.send({ embeds: [embed] })

        
      });



		   // }).catch(console.log)

    }
}
