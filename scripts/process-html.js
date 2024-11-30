import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const htmlFiles = ['popup', 'options', 'sidepanel'];

htmlFiles.forEach(name => {
  const htmlPath = resolve(__dirname, `../dist/${name}.html`);
  
  if (!existsSync(htmlPath)) {
    console.warn(`Warning: ${htmlPath} does not exist, skipping...`);
    return;
  }

  const html = readFileSync(htmlPath, 'utf-8');
  
  // Update script paths
  const processedHtml = html.replace(
    /src="\.\/.*?\.js"/,
    `src="./${name}.js"`
  );

  writeFileSync(htmlPath, processedHtml);
  console.log(`Processed ${name}.html`);
}); 