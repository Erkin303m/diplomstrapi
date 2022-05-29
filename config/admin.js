module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71b8bb6307c116c67e19c68ec2149d20'),
  },
});
