/**
 * ACMarket.js
 * Official AC-Market JS SDK
 * 
 * (c) 2021 Anticheat United. All rights reserved
 * View LICENSE for license information.
 */
const fetch = require('node-fetch');

module.exports = class ACMarketJS {
	constructor(key) {
		this.apiKey = key;
	}

	async getUser(id) {
		return new Promise(async (resolve, reject) => {
			fetch('https://anticheat.market/api/profiles/' + id, {
				method: 'POST',
				headers: {
					'User-Agent': 'ACMarketJS'
				}
			})
			.then(res => res.json())
			.then(
				data => {
					switch (data.status) {
						case 'success': {
							resolve(data);
							break;
						}
						case 'banned': {
							resolve(data);
							break;
						}
						case 'error': {
							reject(data.message);
							break;
						}
						default: {
							reject('Unknown status type. Are you running an older version?');
							break;
						}
					}
				},
				err => {
					reject(err);
				}
			)
			.catch(err => reject(err));
		});
	}

	async getResource(id) {
		return new Promise(async (resolve, reject) => {
			fetch('https://anticheat.market/api/resources/' + id, {
				method: 'POST',
				headers: {
					'User-Agent': 'ACMarketJS'
				}
			})
			.then(res => res.json())
			.then(
				data => {
					switch (data.status) {
						case 'success': {
							resolve(data);
							break;
						}
						case 'error': {
							reject(data.message);
							break;
						}
						default: {
							reject('Unknown status type. Are you running an older version?');
							break;
						}
					}
				},
				err => {
					reject(err);
				}
			)
			.catch(err => reject(err));
		});
	}
}