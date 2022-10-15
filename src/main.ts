import { Discord, XernerxClient } from "xernerx";
import { default as config } from "./data/config/config.js";

class Client extends XernerxClient {
	constructor() {
		super(
			{
				intents: [
					Discord.GatewayIntentBits.Guilds,
					Discord.GatewayIntentBits.GuildMessages,
				],
			},
			{
				ownerId: config.ownerId,
				logging: true,
			}
		);

		this.modules.commandHandler.loadAllMessageCommands({
			directory: "./dist/commands/message",
			prefix: config.prefix,
			handleDeletes: true,
			handleEdits: true,
			allowMention: true,
			logging: true,
		});

		this.modules.commandHandler.loadAllSlashCommands({
			directory: "./dist/commands/slash",
			guildId: config.guildId,
			global: false,
			defer: {
				reply: true,
			},
			logging: true,
		});

		this.modules.commandHandler.loadAllContextCommands({
			directory: "./dist/commands/context",
			guildId: config.guildId,
			global: false,
			logging: true,
		});

		this.modules.eventHandler.loadAllEvents({
			directory: "./dist/events",
			logging: true,
		});

		this.modules.inhibitorHandler.loadAllInhibitors({
			directory: "./dist/inhibitors",
		});
	}
}

const client = new Client();

client.login(config.token);
