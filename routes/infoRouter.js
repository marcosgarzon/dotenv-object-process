const express = require('express');
const router = express.Router();

function verifyArgs(argvs) {
    if (argvs.length === 0) return 'no arguments entered'
    return argvs
  } 
  
  const infoView = {
    argvs: verifyArgs(process.argv.slice(2)),
    platform: process.platform,
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage(),
    path: process.execPath,
    pid: process.pid,
    directory: process.cwd()
  }
  
  
  router.get('/', (req, res) => {
    res.render('info', {info: infoView})
  })


module.exports = router;