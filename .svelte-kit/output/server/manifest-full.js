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
		client: {"start":"app/immutable/entry/start.BUdLSsG8.js","app":"app/immutable/entry/app.C7mYKKHF.js","imports":["app/immutable/entry/start.BUdLSsG8.js","app/immutable/chunks/entry.ClyT-GOS.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/entry/app.C7mYKKHF.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.hnf42E4R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/popup",
				pattern: /^\/popup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sidepanel",
				pattern: /^\/sidepanel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
