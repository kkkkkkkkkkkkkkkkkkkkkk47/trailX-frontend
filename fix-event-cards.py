import re

# Read the file
with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Change activeEventCard initial state from null to 1
content = re.sub(
    r'const \[activeEventCard, setActiveEventCard\] = useState<number \| null>\(null\);',
    'const [activeEventCard, setActiveEventCard] = useState<number | null>(1);',
    content
)

# Fix 2-5: Add onClick and cursor to each card div
# Card 1
content = re.sub(
    r'({/\* ── Card 1: Crypto Events Contracts.*?── \*/}\s*)<div style={{',
    r'\1<div onClick={() => setActiveEventCard(1)} style={{ cursor: \'pointer\',',
    content,
    flags=re.DOTALL
)

# Card 2
content = re.sub(
    r'({/\* ── Card 2: Economics Events Contracts.*?── \*/}\s*)<div style={{',
    r'\1<div onClick={() => setActiveEventCard(2)} style={{ cursor: \'pointer\',',
    content,
    flags=re.DOTALL
)

# Card 3
content = re.sub(
    r'({/\* ── Card 3: Financials Events Contracts.*?── \*/}\s*)<div style={{',
    r'\1<div onClick={() => setActiveEventCard(3)} style={{ cursor: \'pointer\',',
    content,
    flags=re.DOTALL
)

# Card 4
content = re.sub(
    r'({/\* ── Card 4: IPOs Events Contracts.*?── \*/}\s*)<div style={{',
    r'\1<div onClick={() => setActiveEventCard(4)} style={{ cursor: \'pointer\',',
    content,
    flags=re.DOTALL
)

# Write back
with open('src/VuluePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Fixed activeEventCard initial state to 1")
print("✓ Added onClick handlers to all 4 event cards")
print("✓ Added cursor: pointer to all 4 event cards")
