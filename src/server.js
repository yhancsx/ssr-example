import { ChunkExtractor } from '@loadable/server';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
  const extractedStats = path.resolve(__dirname, '../build/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile: extractedStats });

  const jsx = extractor.collectChunks(
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
  );

  const html = renderToString(jsx);
  const helmet = Helmet.renderStatic();

  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no">
          <meta name="google" content="notranslate">
          ${helmet.title.toString()}
          ${extractor.getLinkTags()}
          ${extractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          ${extractor.getScriptTags()}
        </body>
      </html>
  `);
});

app.listen(5000, () => console.log('Server started http://localhost:5000'));
