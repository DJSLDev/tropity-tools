const vscode = require("vscode");
const crypto = require("crypto");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log("Congratulations, your extension 'tropity-tools' is now active!");

	let disposable = vscode.commands.registerCommand("tropity-tools.generateUID", function () {
		vscode.window.showInformationMessage(crypto.randomBytes(12).toString("base64"));
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
