const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
const { Token } = require("../config.json");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,

  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online`)
})
client.on('messageCreate', (msg) => {
  if (msg.author.bot) {
    return;
  }
  if (msg.content === 'hello') {
    msg.reply("What's up nerd!")
  }
})
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("What's up nerd!")
  }
  if (interaction.commandName === 'duel') {
    const wepon = interaction.options.get('with').value;
    if (wepon === 'hand') {
      interaction.reply("Ouch! What was that for??")

    } else if (wepon === 'sword') {
      interaction.reply("Too easy!")


    } else if (wepon === 'bending') {
      interaction.reply("nahhhh i am forfit.")


    } else if (wepon === 'bow') {
      interaction.reply("I was born for this.")


    } else {
      interaction.reply("What the heck was that?")


    }
  }
  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle('This is an Embed Title.')
      .setDescription('This is the discription of the embed.this is a test for discription i just watnt to make it long to see how it looks.')
    interaction.reply({ embeds: [embed] })
  }
})

client.login(Token);