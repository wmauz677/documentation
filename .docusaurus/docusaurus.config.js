export default {
  "title": "Weston Mauz",
  "tagline": "Technical, Creative, and Career Portfolio",
  "url": "https://github.com/wmauz677",
  "baseUrl": "/documentation/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "wmauz677",
  "projectName": "documentation",
  "themeConfig": {
    "navbar": {
      "title": "East Meets Weast",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "/about",
          "label": "About",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "East Meets Weast",
          "items": [
            {
              "label": "Weston Mauz",
              "to": "https://wmauz677.github.io/Mauz-Portfolio-Web/"
            },
            {
              "label": "wmmauz@gmail.com",
              "href": "mailto:wmmauz@gmail.com"
            }
          ]
        },
        {
          "title": "Attributions",
          "items": [
            {
              "label": "Docusaurus",
              "href": "https://docusaurus.io/"
            },
            {
              "label": "Freepik",
              "href": "https://www.freepik.com"
            },
            {
              "label": "photo3idea_studio",
              "href": "https://www.flaticon.com/authors/photo3idea-studio"
            },
            {
              "label": "Flaticon",
              "href": "https://www.flaticon.com/"
            }
          ]
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/westonmauz/Websites/documentation/sidebars.js",
          "editUrl": "https://wmauz677.github.io/documentation/docs"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/westonmauz/Websites/documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};