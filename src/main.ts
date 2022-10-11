import { Discord, XernerxClient } from "xernerx";

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
				ownerId: [],
			}
		);
	}
}

const client = new Client();

client;
