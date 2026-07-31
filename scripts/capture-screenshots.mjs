import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const sites = [
  { name: "big-as-balloons", url: "https://bigasballoons.co.nz/" },
  { name: "the-sage-vintage", url: "https://thesagevintage.com/" },
  { name: "restaurant-chairs", url: "https://restaurantchairs.com/" },
  { name: "cargo-id-secure", url: "https://app.cargoidsecure.com/" },
  { name: "allzone-technologies", url: "https://allzonetech.com/" },
  { name: "instacare-b2c", url: "https://instacare.pk/" },
  { name: "instacare-b2b", url: "https://app.instacare.pk/" },
];

const outDir = path.join(process.cwd(), "public", "projects");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

for (const site of sites) {
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(outDir, `${site.name}.jpg`),
      type: "jpeg",
      quality: 88,
      fullPage: false,
    });
    console.log(`Captured: ${site.name}`);
  } catch (error) {
    console.error(`Failed ${site.name}:`, error.message);
  }
}

await browser.close();
console.log("Done");
