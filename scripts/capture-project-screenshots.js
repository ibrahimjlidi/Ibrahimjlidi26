const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const outputDir = path.join(__dirname, '..', 'public', 'screenshots');
fs.mkdirSync(outputDir, { recursive: true });

const projects = [
  { slug: 'eduinsight', url: 'https://edu-insight.vercel.app/' },
  { slug: 'ecommerce-mern', url: 'https://eshop-eco.vercel.app/' },
  { slug: 'movie-metro', url: 'https://movie-metro.netlify.app' },
  { slug: 'safoua-academy', url: 'https://safoua-academy.vercel.app' },
  { slug: 'smartbabysittercare', url: 'https://smartbabsittercare.vercel.app' },
  { slug: 'greenlife', url: 'https://greenlife.vercel.app' },
  { slug: 'medtourmedical', url: 'https://medtourmedical.vercel.app' },
  { slug: 'node-express-guide', url: 'https://node-express-guid.netlify.app/' },
  { slug: 'meditravel', url: 'https://projects-template.netlify.app/' },
  { slug: 'city-weather', url: 'https://citys-weather.netlify.app/' },
  { slug: 'mental-calcul', url: 'https://mentalcalcul.netlify.app/' }
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    for (const project of projects) {
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(120000);
      await page.goto(project.url, { waitUntil: 'networkidle2' });
      const filePath = path.join(outputDir, `${project.slug}.png`);
      await page.screenshot({ path: filePath, fullPage: false });
      console.log(`Saved ${filePath}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
