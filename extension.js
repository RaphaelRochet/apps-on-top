//GNOME Shell extension. Moves the Applications button at the top of the Dash.
//Copyright (C) 2012 Arnaud Bonatti <arnaud.bonatti@gmail.com>
//Copyright (C) 2020 Raphael Rochet <raphael@rri.fr>

//This program is free software; you can redistribute it and/or
//modify it under the terms of the GNU General Public License
//as published by the Free Software Foundation; either version 3
//of the License, or (at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program; if not, write to the Free Software
//Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

const Config = imports.misc.config
const Main   = imports.ui.main

function init() {
}

function enable()  {
	let dash = Main.overview.dash;
	let container = dash._container;
	let appsIcon = dash._showAppsIcon;
	container.remove_child(appsIcon);
	container.insert_child_at_index(appsIcon,0);
}

function disable() {
	let dash = Main.overview.dash;
	let container = dash._container;
	let appsIcon = dash._showAppsIcon;
	container.remove_child(appsIcon);
	container.add_child(appsIcon);
}
