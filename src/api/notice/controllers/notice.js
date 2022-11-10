// 'use strict';
//
// /**
//  *  notice controller
//  */
//
// const { createCoreController } = require('@strapi/strapi').factories;
//
// module.exports = createCoreController('api::notice.notice');

// "use strict";
//
// /**
//  *  new controller
//  */
//
// const { createCoreController } = require("@strapi/strapi").factories;
//
// module.exports = createCoreController("api::new.new");
//

"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::notice.notice", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany(
      "api::notice.notice",
      query
    );

    const sanitizedEntity = await this.sanitizeOutput(post);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
