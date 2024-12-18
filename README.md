# country-flag-svg

Lightweight loader for country flag SVG files. Designed for compatibility and simplicity, it helps map locale inputs directly to their corresponding country flag SVG.

## Features

- Efficient, direct mapping of country codes to SVG flags.
- Support for a wide range of locales.
- Straightforward integration into existing projects.

## Installation

```bash
npm install country-flag-svg
```

## Usage

```javascript
import getFlagEmoji from 'country-flag-svg';

const locale = 'en-US'; 
const flagPath = getFlagEmoji(locale);
console.log(flagPath); // Outputs the SVG file
```

If no country code is provided, the loader attempts to use a default based on the language. If no default is defined or the locale is not supported, it returns an empty string.

## Integration

Simply integrate the returned SVG path into your UI components, such as `<img>` tags, CSS backgrounds, or any SVG-friendly rendering approach.

## Motivation

This simple package was made to fix a specific issue of Windows systems not displaying flags due to geopolitics.

## Attribution

All icon graphics are provided by and copyright © Twemoji. Use of these icons should comply with the Twemoji licensing terms.

## Contributing

Contributions to expand locale support or improve mappings are welcome. Adjust the `flagMap` within the source for additional countries or tweak default logic to fit different requirements.

## License

MIT License
