module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13c6b37ec1af97645970ecd32ea350c4'),
  },
});
