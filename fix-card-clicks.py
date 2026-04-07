import re

with open('src/VuluePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Strategy: Find all <p> and <div> elements between card background divs and "See more/less" buttons
# and add pointerEvents: 'none' to them, then add pointerEvents: 'auto' to the buttons

# For each card, we need to:
# 1. Add pointerEvents: 'none' to static content (titles, labels, values)
# 2. Keep pointerEvents: 'auto' (or add it) to "See more/less" buttons

# Pattern: Find style={{ that doesn't already have pointerEvents
# Between card div and See more/less buttons, add pointerEvents: 'none'

# This is complex, so let's use a different approach:
# Add pointerEvents: 'none' to the card content wrapper if it exists,
# or add it inline to each content element

# Actually, simpler solution: wrap all card content in a div with pointerEvents: 'none'
# and set pointerEvents: 'auto' on buttons

# Even simpler: just add pointerEvents: 'none' to all <p> tags inside event cards
# and pointerEvents: 'auto' to button divs

print("Note: Manual fix needed - add pointerEvents: 'none' to card content")
print("The card background div already has onClick, but content blocks it")
print("Solution: Add style={{ pointerEvents: 'none' }} to all <p> and non-interactive <div> inside cards")
