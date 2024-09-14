const { Client_ID, Guild_ID, Token } = require('../config.json')
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: 'Replies with hey!',
  },

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