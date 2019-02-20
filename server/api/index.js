const fs = require('fs');
const path = require('path');

export default app => {
  app.get('/api/products', (req, res) => {
    fs.readFile(path.resolve(__dirname, './products.json'), (err, resp) => {
      if (err) {
        res.send(500, 'Something went wrong');
      }

      res.send(resp);
    });
  });
};
