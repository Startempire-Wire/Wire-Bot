export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"app/immutable/entry/start.Ddi37K5e.js","app":"app/immutable/entry/app.Uka88Csf.js","imports":["app/immutable/entry/start.Ddi37K5e.js","app/immutable/chunks/entry.MSBuBJR0.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/entry/app.Uka88Csf.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.hnf42E4R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
