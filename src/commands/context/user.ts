import { ContextCommand, Discord } from "xernerx";

export default class UserContextCommand extends ContextCommand {
	constructor() {
		super("user", {
			name: "user",
			type: 3,
		});
	}
}
