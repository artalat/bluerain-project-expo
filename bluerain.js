// This file contain all the apps, plugins and configuration which are required
// for booting bluerain-os. see https://blueeast.gitbooks.io/bluerain-os/
module.exports = {
	platform: [
		require('@blueeast/bluerain-platform-reactxp')
	],
	apps:[
		// All bluerain apps will also be added in this array
		// require('@blueeast/bluerain-app-hello-world'),
		// require('@blueeast/bluerain-app-settings'),
		require('./apps/Alarm'),
		require('./apps/Android'),
		require('./apps/Bulb'),
		require('./apps/Foo'),
		require('./apps/Sites'),
	],
	plugins:[
		// All bluerain plugins will be added here
		// require('@blueeast/bluerain-plugin-apollo'),
		// require('@blueeast/bluerain-plugin-intl'),
		// require('@blueeast/bluerain-plugin-launcher'),
		// require('@blueeast/bluerain-plugin-redux-devtools'),
		// require('@blueeast/bluerain-plugin-user-management')
	],
	config: {
		// Configurations for bluerain-os will be added here
		title: 'Bluerain OS',

		wallpaper: {
			backgroundColor: '#32438E',
			source: `https://s3-us-west-2.amazonaws.com/bluerainimages/bg.jpg`,
			resizeMode: 'cover',
		},

		apps: {
			alarm: {
				foo: 'bar'
			}
		},

		plugins: {
			// Plugins related configurations will be added here
			apollo: {
				httpLinkOptions: {
					uri: 'https://mqtt.mevris.io/graphql'
				}
			},

			'user-management': {
				protectedRoutes: [{
					path: '/',
					exact: true,
				}, {
					path: '/app',
					exact: false,
				}]
			}
		},
		theme: {
			colors: {
				primary: '#3949ab'
			}
		}
	}
};
