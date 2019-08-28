const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete({ timeout: 1 });
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
  } else if (args[0] === "pikachu") {
    const pikachu = await fetch("https://some-random-api.ml/pikachuimg")
      .then(res => res.json())
      .then(json => json.link);

    const embed = new MessageEmbed()
      .setImage(pikachu)
      .setFooter("Powered by 'https://some-random-api.ml/pikachuimg'");
    message.channel.send(embed);
  } else if (args[0] === "koala") {
    const koala = await fetch("https://some-random-api.ml/img/koala")
      .then(res => res.json())
      .then(json => json.link);

    const embed = new MessageEmbed()
      .setImage(koala)
      .setFooter("Powered by 'https://some-random-api.ml/img/koala'");
    message.channel.send(embed);
  } else if (args[0] === "bird") {
    const bird = await fetch("https://some-random-api.ml/img/birb")
      .then(res => res.json())
      .then(json => json.link);

    const embed = new MessageEmbed()
      .setImage(bird)
      .setFooter("Powered by 'https://some-random-api.ml/img/birb'");
    message.channel.send(embed);
  } else {
    message.channel.send(
      "Animals available: cat, dog, fox, pikachu, koala, bird"
    );
  }
};
