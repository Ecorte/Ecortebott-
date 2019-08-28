const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  if (args[0] === "cat") {
    const cat = await fetch("http://aws.random.cat/meow")
      .then(res => res.json())
      .then(json => json.file);

    const embed = new MessageEmbed()
      .setImage(cat)
      .setFooter("Powered by 'http://aws.random.cat/meow'");
    message.channel.send(embed);
  } else if (args[0] === "dog") {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(json => json.message);

    const embed = new MessageEmbed()
      .setImage(dog)
      .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'");
    message.channel.send(embed);
  } else if (args[0] === "fox") {
    const fox = await fetch("https://randomfox.ca/floof/")
      .then(res => res.json())
      .then(json => json.image);

    const embed = new MessageEmbed()
      .setImage(fox)
      .setFooter("Powered by 'https://randomfox.ca/floof/'");
    message.channel.send(embed);
  } else {
    message.channel.send("Animals available: cat, dog, fox");
  }
};
