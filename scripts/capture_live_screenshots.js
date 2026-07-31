const { chromium } = require('playwright');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1,
    });

    // 1. HRMS
    console.log('Capturing HRMS screenshot...');
    const pageHrms = await context.newPage();
    try {
      await pageHrms.goto('https://azt-hrms-dev.azurewebsites.net/', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await pageHrms.waitForTimeout(3000);
      const rawHrms = path.join(__dirname, '../public/projects/hrms_raw.png');
      await pageHrms.screenshot({ path: rawHrms });
      await sharp(rawHrms)
        .resize(1920, 1080, { fit: 'cover' })
        .jpeg({ quality: 92 })
        .toFile(path.join(__dirname, '../public/projects/hrms.jpg'));
      if (fs.existsSync(rawHrms)) fs.unlinkSync(rawHrms);
      console.log('HRMS screenshot saved successfully');
    } catch (e) {
      console.log('HRMS capture note:', e.message);
    }
    await pageHrms.close();

    // 2. CRCLS
    console.log('Capturing CRCLS screenshot...');
    const pageCrcls = await context.newPage();
    try {
      await pageCrcls.goto('https://crcls-main-geebf9e6f0hfcngf.centralus-01.azurewebsites.net/Home/Index', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await pageCrcls.waitForTimeout(3000);
      const rawCrcls = path.join(__dirname, '../public/projects/crcls_raw.png');
      await pageCrcls.screenshot({ path: rawCrcls });
      await sharp(rawCrcls)
        .resize(1920, 1080, { fit: 'cover' })
        .jpeg({ quality: 92 })
        .toFile(path.join(__dirname, '../public/projects/crcls.jpg'));
      if (fs.existsSync(rawCrcls)) fs.unlinkSync(rawCrcls);
      console.log('CRCLS screenshot saved successfully');
    } catch (e) {
      console.log('CRCLS capture note:', e.message);
    }
    await pageCrcls.close();

    await browser.close();
    console.log('Done capturing live screenshots.');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  }
})();
