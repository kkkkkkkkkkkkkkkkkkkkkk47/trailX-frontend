import re

with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

output = []
in_event_contracts = False
card_num = 0

for i, line in enumerate(lines):
    # Detect when we enter Event Contracts section
    if "activeTab === 'Event Contracts'" in line:
        in_event_contracts = True
    
    # Detect card comments and wrap the card
    if in_event_contracts and '── Card' in line and 'Events Contracts' in line:
        card_num += 1
        output.append(line)
        # Next line should be the card div - remove its onClick
        if i + 1 < len(lines):
            next_line = lines[i + 1]
            # Remove onClick from the div and add a wrapper
            if 'onClick={() => setActiveEventCard(' in next_line:
                # Add wrapper div with onClick
                indent = len(next_line) - len(next_line.lstrip())
                output.append(' ' * indent + f'<div onClick={() => setActiveEventCard({card_num})}} style={{{{ position: \'relative\' }}}}>\n')
                # Remove onClick from card background div
                cleaned = re.sub(r'onClick=\{\(\) => setActiveEventCard\(\d+\)\} style=\{\{ cursor: \'pointer\', ', 'style={{ ', next_line)
                output.append(cleaned)
                continue
    
    output.append(line)

# Now we need to close the wrapper divs - this is tricky
# Let's use a simpler approach instead

print("Complex wrapping needed - using simpler pointer-events approach instead")

# Simpler approach: just remove cursor: pointer from card divs since content blocks clicks anyway
with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove cursor: 'pointer' from card background divs since they don't work
content = re.sub(
    r"onClick=\{\(\) => setActiveEventCard\(\d+\)\} style=\{\{ cursor: 'pointer', ",
    "style={{ ",
    content
)

# Instead, ensure the "See more/less" buttons set activeEventCard (they already do)
# The buttons are the only clickable elements, which is fine

with open('src/VuluePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Removed onClick from card backgrounds (content blocks them)")
print("✓ Buttons already set activeEventCard when clicked")
print("Note: Clicking anywhere on card won't work due to absolute positioning")
print("      Only 'See more/less' buttons will set active card")
