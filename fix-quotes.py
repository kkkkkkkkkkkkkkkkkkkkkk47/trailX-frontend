with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("cursor: \\'pointer\\'", "cursor: 'pointer'")

with open('src/VuluePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Fixed escaped quotes")
