# country-flag-svg

Lightweight loader for country flag SVG files. Designed for compatibility and simplicity, it helps map country codes directly to their corresponding flag SVG.

## Features

- Direct mapping of country codes to SVG flags
- Support for commonly used country codes
- Browser and Node.js compatible
- No emoji dependencies (works on all platforms)

## Installation

```bash
npm install country-flag-svg
```

## Usage

```javascript
import getFlagEmoji from 'country-flag-svg';

// Using country codes
const flagPath = await getFlagEmoji('US');
console.log(flagPath); // Returns SVG path for US flag

// HTML Example
const img = document.createElement('img');
img.src = await getFlagEmoji('FR');
img.alt = 'France Flag';
```

## Display Example

You can easily integrate flags into your UI:

```html
<div class="flag-container">
    <img src="path-to-flag.svg" alt="Country Flag" width="100" />
</div>
```

## Styling

Recommended CSS for flag display:

```css
.flag-container img {
    width: 100px;
    height: 75px;
    object-fit: contain;
}
```

## Supported Countries

Includes support for most common country codes (US, FR, GB, JP, etc.). Returns empty string for unsupported codes.

## Motivation

Created to provide consistent flag display across all platforms, especially Windows systems where emoji flags might not render properly.

## Attribution

Flag graphics provided by and copyright © Twemoji. Usage must comply with Twemoji licensing terms.

## Contributing

Contributions welcome! Feel free to add country codes or improve existing implementations.

## License

MIT License
