const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'openit.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '**',
      },
      
    ],
  },
};


// const path = require('path');

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'openit.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 't3.ftcdn.net',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'img.freepik.com',
//         pathname: '**',
//       },
//     ],
//   },

//   output: 'export',  // Ensure this is set to export your project as static files
//   basePath: '/portfolio',  // Make sure this is the correct repo name
//   assetPrefix: '/portfolio',
//   trailingSlash: true,
// };


// const path = require('path');

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'openit.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 't3.ftcdn.net',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'img.freepik.com',
//         pathname: '**',
//       },
//     ],
//   },

//   output: 'export',  // This ensures that your project is exported as static files
//   basePath: '/portfolio/master',  // Replace with your repo name
//   assetPrefix: '/portfolio/master',  // Ensure consistency with the basePath
//   trailingSlash: true,  // Adds trailing slashes to generated paths
// };
