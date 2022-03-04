const vscode = require("vscode");
const crypto = require("crypto");
const axios = require("axios");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log("Congratulations, your extension 'tropity-tools' is now active!");

	let disposable = vscode.commands.registerCommand("tropity-tools.generateUID", function () {
		vscode.window.showInformationMessage(`Your Random ID: ${crypto.randomBytes(12).toString("base64")}`);
	});

	let disposable2 = vscode.commands.registerCommand("tropity-tools.tropityStatus", function() {
		axios.default.get("https://tropity.com").then((response) => {
			if (parseInt(response.status) == 200)
			{
				vscode.window.showInformationMessage("Tropity is online");
			} else
			{
				vscode.window.showWarningMessage("Tropity may be offline");
			}
		});
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
