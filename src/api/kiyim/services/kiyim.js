'use strict';

/**
 * kiyim service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kiyim.kiyim');
