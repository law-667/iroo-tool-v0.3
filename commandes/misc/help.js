const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🔹 Help`)
    .setImage(config.bot.image)
    .setDescription(`• Hey salut ** ${message.author}**\n• Je suis actuellement sur \`${client.guilds.cache.size}\` serveur\n• PLus de \`${client.users.cache.size}\` membres!,\n • Plus de \`${client.channels.cache.size}\` salons! \n • Version : \`${config.bot.version}\`\n• Préfix du bot sur ${message.guild} : \`${db.prefix}\`\n• Commands : \`${client.commands.size}\` `)
    .setColor(db.color)

    const administratif = new MessageEmbed()
    .setAuthor(`🔹 Administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul les admin peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes](https://iroo.bot)`)

.addField("`prefix`", `[Alias:](http://iroo.bot) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`settings`" , `[Alias:](http://iroo.bot)  \`config\`\n - Permet d'avoir quelque info sur le bot.`)
.addField("`dm`" , `[Alias:](http://iroo.bot)  \`mp\`\n - Permet d'envoyer des mp avec le bot.`)
.addField("`say`" , `[Alias:](http://iroo.bot)  \`❌\`\n - Faire dire n'importe quoi au bot.`)
.addField("`poll`" , `[Alias:](http://iroo.bot)  \`sondage\`\n - Faire un sondage.`)

const serveur = new MessageEmbed()
.setAuthor(`🔹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://iroo.bot)`)
.addField("`giveaway`", `[Alias:](http://iroo.bot) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](http://iroo.bot) \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](http://iroo.bot) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](http://iroo.bot) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](iroo://iroo.bot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](http://iroo.bot) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `[Alias:](http://iroo.bot) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)

const moderation = new MessageEmbed()
.setAuthor(`🔹 Modération`)
.setColor(db.color)
.setDescription(`Partie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://iroo.Bot)`)
.addField("`mpanel`", `[Alias:](http://iroo.bot) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `[Alias:](http://iroo.bot) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](http://iroo.bot) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](http://iroo.bot) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](http://iroo.bot) \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `[Alias:](http://iroo.bot) \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `[Alias:](http://iroo.bot) \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
.addField("`clear`", `[Alias:](http://iroo.bot) \`purge\`\n - Suprime le nombre de message que vous vouler`)
.addField("`slowmode`", `[Alias:](http://iroo.bot) \`slow\`\n - Active le slow mode dans le salon`)
.addField("`lock-all`", `[Alias:](http://iroo.bot) \`lkall\`\n - Ferme tout les salons du server`)
.addField("`warn`", `[Alias:](http://iroo.bot) \`wrn\`\n - Warn un membre`)

const fun = new MessageEmbed()
.setAuthor(`🔹  fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://iroo.bot)`)
.addField("`kiss`", `[Alias:](http://iroo.bot) \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `[Alias:](http://iroo.bot) \`❌\` \n - Combat une personne`)
.addField("`hug`", `[Alias:](http://iroo.bot) \`❌\` \n - Fais un calin a une personne.`)
.addField("`8ball`", `[Alias:](http://iroo.bot) \`❌\` \n - Il y a de grandes chances que je vous insulte!.`)
.addField("`pic`" , `[Alias:](http://iroo.bot) \`pp\`, \`avatar\` \n - Obtenez votre propre avatar ou celui de quelqu'un d'autre.`)
.addField("`calc`" , `[Alias:](http://iroo.bot) \`calcule\`, \`math\` \n - Resoudre des calcules simples`)
.addField("`love`" , `[Alias:](http://iroo.bot) \`lc\` \n - A combien en t'aime ?.`)
.addField("`gif`" , `[Alias:](http://iroo.bot) \`tenor\` \n - Fournissez une requête et je vous retournerai un gif!.`)
.addField("`cat`" , `[Alias:](http://iroo.bot) \`❌\` \n - Donne une image random de chat!.`)
.addField("`dog`" , `[Alias:](http://iroo.bot) \`❌\` \n - Donne une image random de chien!.`)
.addField("`koala`" , `[Alias:](http://iroo.bot) \`❌\` \n - Donne une image random de koala!.`)
.addField("`trivia`" , `[Alias:](http://iroo.bot) \`trv\` \n - Quiz pour un developer`)
.addField("`panda`" , `[Alias:](http://iroo.bot) \`❌\` \n -  Donne une image random de panda`)
.addField("`punsh`" , `[Alias:](http://iroo.bot) \`❌\` \n - Fraper un membre`)
.addField("`flip`" , `[Alias:](http://iroo.bot) \`coin\` \n - Lance une pièce`)

const util = new MessageEmbed()
.setAuthor(`🔹  utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes](https://iroo.bot)`)
.addField("`vc`", `[Alias:](http://iroo.bot) \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `[Alias:](http://iroo.bot) \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `[Alias:](http://iroo.bot) \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `[Alias:](http://iroo.bot) \`aide\` \n - Affiche la liste des commandes`)
.addField("`ping`" , `[Alias:](http://iroo.bot) \`❌\` \n - Affiche le ping du bot et de l'api discord`)
.addField("`embed`" , `[Alias:](http://iroo.bot) \`❌\` \n - Ecrire en embed`)
.addField("`server-pic`" , `[Alias:](http://iroo.bot) \`sp\` \n - Donne la pdp du server`)
.addField("`server-info`" , `[Alias:](http://iroo.bot) \`si\` \n - Donne des infos sur le server`)
.addField("`user-info`" , `[Alias:](http://iroo.bot) \`info\`, \`ui\` \n - Donne des infos sur une perssonne`)
.addField("`ancien`" , `[Alias:](http://iroo.bot) \`oldest\` \n - Donne la perssonne la plus ancienne du server`)
.addField("`recent`" , `[Alias:](http://iroo.bot) \`yougest\` \n - Donne la perssonne la plus jeunne du server`)
.addField("`addbot`" , `[Alias:](http://iroo.bot) \`invite\` \n - Donne l'invitation du bot`)
.addField("`total-ban`" , `[Alias:](http://iroo.bot) \`bans\` \n - Liste des membres / bot ban sur le serveur `)

const nsfw = new MessageEmbed()
.setAuthor(`🔹  Nsfw`)
.addField("`4k`" , `[Alias:](http://iroo.bot) \`❌\` \n - 4k`)
.addField("`anal`" , `[Alias:](http://iroo.bot) \`❌\` \n - anal`)
.addField("`ass`" , `[Alias:](http://iroo.bot) \`❌\` \n - ass`)
.addField("`boobs`" , `[Alias:](http://iroo.bot) \`❌\` \n - boobs`)
.addField("`hentai`" , `[Alias:](http://iroo.bot) \`❌\` \n - hentai`)
.addField("`porngif`" , `[Alias:](http://iroo.bot) \`pgif\` \n - prongif`)
.addField("`pussy`" , `[Alias:](http://iroo.bot) \`❌\` \n - pussy`)


.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://iroo.bot)`)
const owner = new MessageEmbed()
.setAuthor(`🔹  Owner`)
.setColor(db.color)
.setDescription(`Partie Owner du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.

> [Liste des commandes](https://iroo.bot)`)
.addField("`server-list`" , `[Alias:](http://iroo.bot) \`slt\` \n - Donne les serveurs ou ce trouve le bot`)
.addField("`setavatar`", `[Alias:](http://iroo.bot) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](http://iroo.bot) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`stream`", `[Alias:](http://iroo.bot) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `[Alias:](http://iroo.bot) \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
.addField("`eval`", `[Alias:](http://iroo.bot) \`❌\` \n - ❌ `)
.addField("`down`" , `[Alias:](http://iroo.bot) \`shutdown\` \n - Eteint le bot`)

    const pages = [
        help,
        util,
        fun,
        nsfw,
      serveur,
      moderation,
      administratif,
      owner
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ",
  };