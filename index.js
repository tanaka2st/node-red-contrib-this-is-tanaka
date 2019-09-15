module.exports = function (RED) {
	function TanakaChangeNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		node.on('input', function (msg) {
			msg.payload = "tanaka";
			node.send(msg);
		});
	}
	RED.nodes.registerType("change-to-tanaka", TanakaChangeNode);
}
