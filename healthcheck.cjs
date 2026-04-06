const http = require('http');

const req = http.get('http://localhost:8000/mcp', (res) => {
  process.exit(res.statusCode < 500 ? 0 : 1);
});
req.on('error', () => process.exit(1));
req.setTimeout(5000, () => { req.destroy(); process.exit(1); });
