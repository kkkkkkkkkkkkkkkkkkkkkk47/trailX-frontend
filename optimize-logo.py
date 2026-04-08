from PIL import Image
import os

# Open the PNG
img_path = 'src/assets/figma/login-logo.png'
img = Image.open(img_path)

print(f"Original size: {os.path.getsize(img_path) / 1024:.1f}KB")
print(f"Original dimensions: {img.size}")

# Optimize and save
img.save(img_path, 'PNG', optimize=True, quality=85)

print(f"Optimized size: {os.path.getsize(img_path) / 1024:.1f}KB")
print("✓ Logo optimized")
