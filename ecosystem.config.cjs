module.exports = {
  apps: [
    {
      name: 'web-weekend-senyawa-plus',
      port: '3701',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}