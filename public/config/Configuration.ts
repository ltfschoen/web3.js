/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file Configuration.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import EthereumConfiguration from "internal/ethereum/src/config/EthereumConfiguration";
import ConfigurationTypes from "./ConfigurationTypes";
import IConfiguration from "./IConfiguration";

export default class Configuration {
    /**
     * @property ethereum
     */
    public [ConfigurationTypes.ETHEREUM]: EthereumConfiguration;

    /**
     * @param {Object} options
     * @param {Object} parent
     *
     * @constructor
     */
    public constructor(options: any = {}, parent?: any) {
        this[ConfigurationTypes.ETHEREUM] = new EthereumConfiguration(options.ethereum, parent);
    }

    /**
     * @method toJSON
     *
     * @returns {IConfiguration}
     */
    public toJSON(): IConfiguration {
        return {
            [ConfigurationTypes.ETHEREUM]: this[ConfigurationTypes.ETHEREUM].toJSON()
        }
    }
}