module.exports = {
    name: 'clearmsgs',
    cooldown: 5,
    aliases: ['clear', 'purge', 'delete'],
    description: 'Deletes a defined Count of Messages',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');

        } message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to clear messages in this channel!');
        });
        console.log('issued clearmsg command')

    }
}