module.exports = {
  apps: [{
    name: "cosmic-renewable",
    script: "npm",
    args: "start",
    cwd: "./frontend",
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "production"
    },
    log_file: "combined.log",
    time: true
  }]
};