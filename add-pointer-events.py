import re

with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all <p> tags within Event Contracts cards and add pointerEvents: 'none'
# Pattern: <p style={{ ... }}> where it doesn't already have pointerEvents

def add_pointer_events_to_p_tags(match):
    full_match = match.group(0)
    # Check if pointerEvents already exists
    if 'pointerEvents' in full_match:
        return full_match
    # Add pointerEvents: 'none' after style={{
    return full_match.replace("style={{ ", "style={{ pointerEvents: 'none', ")

# Apply to all <p> tags with inline styles
content = re.sub(
    r'<p style=\{\{[^}]+\}\}>',
    add_pointer_events_to_p_tags,
    content
)

# Also add to non-button divs (but not the card background or button divs)
# This is trickier - let's target specific patterns

# Add pointerEvents: 'auto' to button divs (See more/less)
def ensure_auto_on_buttons(match):
    full_match = match.group(0)
    if 'pointerEvents' in full_match:
        return full_match
    # Add after cursor: 'pointer'
    if "cursor: 'pointer'" in full_match:
        return full_match.replace("cursor: 'pointer'", "cursor: 'pointer', pointerEvents: 'auto'")
    return full_match

# Find divs with onClick that have cursor: pointer (these are buttons)
content = re.sub(
    r'<div onClick=\{[^}]+\} style=\{\{[^}]+cursor: \'pointer\'[^}]+\}\}>',
    ensure_auto_on_buttons,
    content
)

with open('src/VuluePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Added pointerEvents: 'none' to all <p> tags")
print("✓ Added pointerEvents: 'auto' to button divs")
print("✓ Card background clicks should now work")
