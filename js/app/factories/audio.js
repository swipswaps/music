/**
 * ownCloud - Music app
 *
 * @author Morris Jobke
 * @copyright 2013 Morris Jobke <morris.jobke@gmail.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

 angular.module('Music').factory('Audio', ['$rootScope', function ($rootScope) {
	soundManager.setup({
		url: OC.linkTo('music', '3rdparty/soundmanager'),
		flashVersion: 8,
		// this fixes a bug with HTML5 playback in Chrome
		// TODO fix this in another way
		useHTML5Audio: false,
		preferFlash: true,
		useFlashBlock: true,
		onready: function() {
			$rootScope.$emit('SoundManagerReady');
		}
	});

	return soundManager;
}]);