const Discord = require('discord.js');
const { getFips } = require('node:crypto');
const Client = new Discord.Client;
const token = "ODMyOTQ5MzIxNzIwMjY2Nzkz.YHrOgQ.hNgOMqAovp5zS4rb_sy3p5SThF0";
const prefix = "=";
//Identifiants salons//
const salonarrivée = "831496223974359071";
const salondepart = "831496406052110337";
const salonlogs = "833981143111303229";
//Couleur de l'embed//
const couleur = "0C00FF";


//Client  prêt//

Client.on("ready" , () => {
    console.log("MegaBot is ON")
    console.log(".|BOT PRÊT|.")
    Client.user.setActivity('Créer avec Discord.js' , {type: 'WATCHING'});
});

//Arrivée/Départ//

Client.on("guildMemberAdd" , member => {
    const embednewmember = new Discord.MessageEmbed()
    .setTitle("Voici un nouveau membre!")
    .setDescription(`**${member.user.tag}** vien de rejoindre le serveur!`)
    .setFooter(``)
    .setColor(couleur)

    member.guild.channels.cache.find(channel => channel.id === salonarrivée).send(embednewmember)
});

Client.on("guildMemberRemove" , member => {
    const embedaurevoir = new Discord.MessageEmbed
    member.guild.channels.cache.find(channel => channel.id === salondepart).send("Un membre est parti.Au-revoir!")
});


//Commandes//

Client.on("message" , message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    //ping//

    if(message.content == prefix + "ping"){
        message.channel.send("🏓pong!")
    };

    //stat//

    if(message.content.startsWith(prefix + "stat")){
        const mentionné = message.mentions.members.first();
        if(mentionné == null) return message.channel.send("Mentionne quelqu'un!")

        const embedstat = new Discord.MessageEmbed()
        .setTitle(`Statistique de ${mentionné.user.username}`)
        .setDescription(`Nom d'utilisateur : ${mentionné.user.username} \n Nom d'utilisateur + tag : ${mentionné.user.tag} \n ID : ${mentionné.user.id} \n Date de création du compte : ${mentionné.user.createdAt}`)
        .setFooter("FOOTER")
        .setColor(couleur)

        message.channel.send(embedstat);
    };

    //help//

    if(message.content == prefix + "help"){
        const embedhelp = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription(`Prefix : ${prefix} \n Nom du bot : MegaBot \n help : donne toutes les commandes leurs utilité \n stat : donne les staistique de la personne qui éxécute la commande \n serverstat : donne des infos sur le serveur`)
        .setFooter(`HELP | ${message.guild.name}`)
        .setColor(couleur)

        message.channel.send(embedhelp);
    };

    if(message.content == prefix + "serverstat"){
        const embedserverinfo = new Discord.MessageEmbed()
        .setTitle("Server Stat")
        .setDescription(`Nom du serveur : ${message.guild.name} \n ID du serveur : ${message.guild.id} \n Nombre de membre : ${message.guild.memberCount} \n Date de création : ${message.guild.createdAt}`)
        .setFooter(`SERVERSTAT | ${message.guild.name}`)
        .setColor(couleur)

        message.channel.send(embedserverinfo);
    };

    //8ball//

    if(message.content.startsWith(prefix + "8ball")){
        const réponse = ["Oui", "C'est sûr!" , "Hmmmm , je ne sais pas" , "Peut-être" , "Certainement!" , "Non" , "Jamais !"]

        const embed8ball = new Discord.MessageEmbed()
        .setTitle("8ball")
        .setDescription(`${réponse[Math.floor(Math.random() * réponse.length)]}`)
        .setFooter(`8BALL | ${message.guild.name}`)
        .setColor(couleur)

        message.channel.send(embed8ball)
    };

    //kick//

    if(message.content.startsWith(prefix + "kick")){
        if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send("Tu n'as pas la permission de kick des membres!")
        const mentionné = message.mentions.members.first()
        if(!mentionné)return message.channel.send("Membre invalide")
        mentionné.kick()

        const embedkick = new Discord.MessageEmbed()
        .setTitle("Kick")
        .setDescription(`${mentionné.user.tag} à été kick`)
        .setFooter(`KICK | ${message.guild.name}`)
        .setColor(couleur)

        message.channel.send(embedkick)
    };

    //ban//

    if(message.content.startsWith(prefix + "ban")){
        if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("Tu n'as pas la permission de ban des membres!");
        const mentionné = message.mentions.members.first();
        if(!mentionné)return message.channel.send("Membre invalide");
        mentionné.ban()

        const embedban = new Discord.MessageEmbed()
        .setTitle("Ban")
        .setDescription(`${mentionné.user.tag} à été ban`)
        .setColor(couleur)

        message.channel.send(embedban)
    };

    //GIF//

    if(message.content == prefix + "gifchech"){
        const gifchech = new Discord.MessageAttachment("https://tenor.com/view/cheh-maskey-galaxy-mask-gif-15576330" , chech-maskey)

        message.channel.send(gifchech);
    };

    if(message.content == prefix + "wtf"){

    };

});

//logs//

Client.on("messageDelete" , message => {
    messagedeleted.guild.channels.cache.find(channel => channel.id === salonlogs).send("Message supprimé!") 
});

Client.on("inviteCreate" , invite => {
    invite.guild.channels.cache.find(channel => channel.id === salonlogs).send("Invitation créer!")
});

Client.on("inviteDelete" , invite => {
    invite.guild.channels.cache.find(channel => channel.id === salonlogs).send("Invitaion supprimé!")
});

Client.on("roleCreate" , rôle => {
    rôle.guild.channels.cache.find(channel => channel.id === salonlogs).send("Rôle créer!")
});

Client.on("roleDelete" , rôle => {
    rôle.guild.channels.cache.find(channels => channel.id === salonlogs).send("rôle supprimé!")
});

Client.on("roleUpdate" , rôle => {
    rôle.guild.channels.cache.find(channel => channel.id === salonlogs).send("Rôle édité!")
});

Client.on("")

Client.login(token);