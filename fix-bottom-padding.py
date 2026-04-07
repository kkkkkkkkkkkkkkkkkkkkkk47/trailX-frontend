import re

with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Update the type signature
content = re.sub(
    r'onEventExpandedChange\?: \(count: number\) => void',
    'onEventExpandedChange?: (bottom: number) => void',
    content
)

# Fix 2: Update the useEffect to calculate bottom instead of count
old_useEffect = r'''  useEffect\(\(\) => \{
    const count = \[eventCard1Expanded, eventCard2Expanded, eventCard3Expanded, eventCard4Expanded\]\.filter\(Boolean\)\.length;
    onEventExpandedChange\?\.\(count\);
  \}, \[eventCard1Expanded, eventCard2Expanded, eventCard3Expanded, eventCard4Expanded\]\);'''

new_useEffect = '''  useEffect(() => {
    const EC_BASE = 706, EC_GAP = 10, EC_EXPANDED = 382, EC_COLLAPSED = 190, EC_COLLAPSED_1 = 226;
    const h1 = eventCard1Expanded ? EC_EXPANDED : EC_COLLAPSED_1;
    const h2 = eventCard2Expanded ? EC_EXPANDED : EC_COLLAPSED;
    const h3 = eventCard3Expanded ? EC_EXPANDED : EC_COLLAPSED;
    const h4 = eventCard4Expanded ? EC_EXPANDED : EC_COLLAPSED;
    const top2 = EC_BASE + h1 + EC_GAP;
    const top3 = top2 + h2 + EC_GAP;
    const top4 = top3 + h3 + EC_GAP;
    const bottom = top4 + h4;
    onEventExpandedChange?.(bottom);
  }, [eventCard1Expanded, eventCard2Expanded, eventCard3Expanded, eventCard4Expanded]);'''

content = re.sub(old_useEffect, new_useEffect, content, flags=re.MULTILINE)

with open('src/VuluePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Updated onEventExpandedChange type to accept bottom position")
print("✓ Updated useEffect to calculate and pass actual bottom position")
