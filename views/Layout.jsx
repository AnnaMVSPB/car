const React = require('react');
const Navigation = require('./Navigation');

function Layout({ title, children ,user}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/navigation.css" />
        <link rel="stylesheet" href="/styles/cars.css" />
        <script defer src="/scripts/client.js" />
        <script defer src="/scripts/auth.js" />
        <title>{title}</title>
      </head>
              <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      <body>
        <div className="body__container">
          <Navigation user={user}/>
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
