const { Client_ID, Guild_ID, Token } = require('../config.json')
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: 'Replies with hey!',
  },
  {
    name: 'duel',
    description: 'Fight sokka',
    options: [
      {
        name: 'with',
        description: "Fight sokka with",
        type: ApplicationCommandOptionType.String,
        require: true,
        choices: [
          {
            name: 'hand',
            value: 'hand'
          },
          {
            name: 'sword',
            value: 'sword'
          },
          {
            name: 'bending',
            value: 'bending'
          },
          {
            name: 'bow',
            value: 'bow'
          },
        ]
      }
    ]
  }

];

const rest = new REST({ version: '10' }).setToken(Token);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        Client_ID,
        Guild_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();