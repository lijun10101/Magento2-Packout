/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

define([
    'jquery'
], function ($) {
    'use strict';

    const config = window.checkoutConfig || window.vertexAddressValidationConfig || {};

    return {
        method: 'rest',
        storeCode: config.storeCode,
        version: 'V1',
        serviceUrl: ':method/:storeCode/:version',

        /**
         * @param {String} url
         * @param {Object} params
         * @return {*}
         */
        createUrl: function (url, params) {
            const completeUrl = this.serviceUrl + url;

            return this.bindParams(completeUrl, params);
        },

        /**
         * @param {String} url
         * @param {Object} params
         * @return {*}
         */
        bindParams: function (url, params) {
            params.method = this.method;
            params.storeCode = this.storeCode;
            params.version = this.version;

            let urlParts = url.split('/');
            urlParts = urlParts.filter(Boolean);

            $.each(urlParts, function (key, part) {
                part = part.replace(':', '');

                if (params[part] !== undefined) {
                    urlParts[key] = params[part];
                }
            });

            return urlParts.join('/');
        }
    };
});
