import http from 'http';
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify({ service: 'users', status: 'running' }));
});
server.listen(port, () => console.log(`Users service on ${port}`));
