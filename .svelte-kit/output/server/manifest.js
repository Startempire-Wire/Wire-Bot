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
		client: {"start":"app/immutable/entry/start.CS2MJVh_.js","app":"app/immutable/entry/app.Btyrh38a.js","imports":["app/immutable/entry/start.CS2MJVh_.js","app/immutable/chunks/entry.BKrXdReC.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/entry/app.Btyrh38a.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.hnf42E4R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
