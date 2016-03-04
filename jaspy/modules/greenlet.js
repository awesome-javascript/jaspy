/*
 * Copyright (C) 2016, Maximilian Koehl <mail@koehlma.de>
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

jaspy.define_module('greenlet', function (module, builtins) {
    var Greenlet = module.define_type('greenlet');
    var GreenletExit = module.define_type('GreenletExit', [builtins.Exception]);


    var current = builtins.None;

    Greenlet.define_method('__init__', function (self, run) {

    }, ['run', 'parent'], {defaults: {run: builtins.None, parent: builtins.None}});

}, ['builtins']);