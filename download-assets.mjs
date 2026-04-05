import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const assets = {
  'Rectangle1040.png': 'https://www.figma.com/api/mcp/asset/c1813890-d942-4376-8a2a-86fb47470142',
  'Vector.png': 'https://www.figma.com/api/mcp/asset/175cc4cf-2507-41b9-8490-e5167d6e9ac3',
  'Rectangle1556.png': 'https://www.figma.com/api/mcp/asset/2cec859c-ec90-47ae-9e45-533eb194186d',
  'Group4802.png': 'https://www.figma.com/api/mcp/asset/5059836d-2772-4d0d-a1d8-9784aec990e1',
  'Group4941.png': 'https://www.figma.com/api/mcp/asset/88bbca3a-420e-4628-965a-782ef8f9ef0f',
  'Ellipse371.png': 'https://www.figma.com/api/mcp/asset/3ea7ad59-9c23-40ab-8438-44991fe9964a',
  'Vector1.png': 'https://www.figma.com/api/mcp/asset/c84514a2-d3d6-454d-895e-787a500ee2e8',
  'Arrow26.png': 'https://www.figma.com/api/mcp/asset/530ccf2d-0702-410e-a52b-8981a40e19b3',
  'Ellipse353.png': 'https://www.figma.com/api/mcp/asset/ddbca912-a9bc-49de-bbe4-fe923ffca7ff',
  'Ellipse354.png': 'https://www.figma.com/api/mcp/asset/5acad67b-79cf-4665-8f91-bf9c6d46fec8',
  'Group4951.png': 'https://www.figma.com/api/mcp/asset/b1bebb8c-6ed3-481e-b5f6-48023fd393a2',
  'Line160.png': 'https://www.figma.com/api/mcp/asset/2f54824d-f38a-4d4d-8197-c28c40388668',
  'Ellipse243.png': 'https://www.figma.com/api/mcp/asset/3f760bf1-20a6-4504-8f5a-78c2dae57bb1',
  'Vector2.png': 'https://www.figma.com/api/mcp/asset/572114ef-835b-45a6-a1a9-2a79d1632af7',
  'Group4957.png': 'https://www.figma.com/api/mcp/asset/fa19b384-eadf-46be-aa7e-90be0808f7a0',
  'Ellipse244.png': 'https://www.figma.com/api/mcp/asset/53ad5550-88a4-4d00-be69-51bcace79433',
  'Vector3.png': 'https://www.figma.com/api/mcp/asset/292781d8-9abc-4dd7-959b-cc9c6634748a',
  'Vector4.png': 'https://www.figma.com/api/mcp/asset/2f4cf16b-01dd-4ede-beb5-309b9126f261',
  'Line7Stroke.png': 'https://www.figma.com/api/mcp/asset/48f07490-fe22-4d07-a299-edd3a6d4ff83',
  'Line7Stroke1.png': 'https://www.figma.com/api/mcp/asset/7e0e75aa-372d-4db4-b0d1-37f165efa943',
  'IconCalendar.png': 'https://www.figma.com/api/mcp/asset/3d68831d-0722-4676-bd0e-bf7507840e3b',
  'Group4794.png': 'https://www.figma.com/api/mcp/asset/1e15dea4-a806-4be7-a7e9-3ad5a6df7849',
  'Vector5.png': 'https://www.figma.com/api/mcp/asset/4883fa45-6e97-40ff-ae8a-6ff3cf6c36e4',
  'Arrow29.png': 'https://www.figma.com/api/mcp/asset/25d5227b-7e1e-4f41-9f24-c536b4a59ebd',
  'Ellipse372.png': 'https://www.figma.com/api/mcp/asset/ab7bcd76-13eb-4307-ad36-cd829c9a92f1',
  'Polygon19.png': 'https://www.figma.com/api/mcp/asset/18bc6d1c-60fb-46cd-91fe-863a2e423dc8',
  'Group4968.png': 'https://www.figma.com/api/mcp/asset/c4adce8e-c490-4df0-99eb-de64074b5bd1',
  'Vector6.png': 'https://www.figma.com/api/mcp/asset/0148c19f-2e5f-4735-b080-efa456b9642f',
  'Arrow28.png': 'https://www.figma.com/api/mcp/asset/34f82eb1-93f5-4727-a8a9-6c33d139c4f6',
  'Line7Stroke2.png': 'https://www.figma.com/api/mcp/asset/a98feb43-db76-4db6-8226-32cad3657a92',
};

const outDir = './src/assets/figma';
mkdirSync(outDir, { recursive: true });

async function downloadAll() {
  for (const [filename, url] of Object.entries(assets)) {
    try {
      const res = await fetch(url);
      if (!res.ok) { console.error(`Failed: ${filename} (${res.status})`); continue; }
      const buf = await res.arrayBuffer();
      writeFileSync(join(outDir, filename), Buffer.from(buf));
      console.log(`✓ ${filename}`);
    } catch (e) {
      console.error(`Error ${filename}: ${e.message}`);
    }
  }
  console.log('Done!');
}

downloadAll();
