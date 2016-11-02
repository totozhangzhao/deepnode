var agent = new http.Agent({
	maxSockets: 10
});

var options = {
	hostname: "127.0.0.1",
	port: 1334,
	path: "/",
	method: "GET",
	agent: agent
};