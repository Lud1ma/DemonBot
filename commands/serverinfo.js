module.exports = {
    name: 'serverinfo',
    guildOnly: true,
    cooldown: 5,
    description: 'Tells Guild Name and member Count',
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        console.log('Issued Server_Info Command')
        if (message.guild.name === 'Höllenschlund') {
            message.channel.send('Die Hölle!')
            console.log('Issued ServerInfo Command')
        }
    }
}
