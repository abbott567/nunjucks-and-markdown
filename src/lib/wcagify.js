const slugify = require('slugify')

function wcagify (string) {
  const wcagpath = 'https://www.w3.org/WAI/WCAG21/Understanding'
  const wcagMatch = string.match(/(\d*\.\d*\.\d*)\s(\D*)/)
  const criteria = [
    {
      name: 'Non-text Content',
      ref: '1.1.1'
    },
    {
      name: 'Audio-only and Video-only (Prerecorded)',
      ref: '1.2.1'
    },
    {
      name: 'Captions (Prerecorded)',
      ref: '1.2.2'
    },
    {
      name: 'Audio Description or Media Alternative (Prerecorded)',
      ref: '1.2.3'
    },
    {
      name: 'Captions (Live)',
      ref: '1.2.4'
    },
    {
      name: 'Audio Description (Prerecorded)',
      ref: '1.2.5'
    },
    {
      name: 'Sign Language (Prerecorded)',
      ref: '1.2.6'
    },
    {
      name: 'Extended Audio Description (Prerecorded)',
      ref: '1.2.7'
    },
    {
      name: 'Media Alternative (Prerecorded)',
      ref: '1.2.8'
    },
    {
      name: 'Audio-only (Live)',
      ref: '1.2.9'
    },
    {
      name: 'Info and Relationships',
      ref: '1.3.1'
    },
    {
      name: 'Meaningful Sequence',
      ref: '1.3.2'
    },
    {
      name: 'Sensory Characteristics',
      ref: '1.3.3'
    },
    {
      name: 'Orientation',
      ref: '1.3.4'
    },
    {
      name: 'Identify Input Purpose',
      ref: '1.3.5'
    },
    {
      name: 'Identify Purpose',
      ref: '1.3.5'
    },
    {
      name: 'Use of Color',
      ref: '1.4.1'
    },
    {
      name: 'Audio Control',
      ref: '1.4.2'
    },
    {
      name: 'Contrast (Minimum)',
      ref: '1.4.3'
    },
    {
      name: 'Resize text',
      ref: '1.4.4'
    },
    {
      name: 'Images of Text',
      ref: '1.4.5'
    },
    {
      name: 'Contrast (Enhanced)',
      ref: '1.4.6'
    },
    {
      name: 'Low or No Background Audio',
      ref: '1.4.7'
    },
    {
      name: 'Visual Presentation',
      ref: '1.4.8'
    },
    {
      name: 'Images of Text (No Exception)',
      ref: '1.4.9'
    },
    {
      name: 'Reflow',
      ref: '1.4.10'
    },
    {
      name: 'Non-text Contrast',
      ref: '1.4.11'
    },
    {
      name: 'Text Spacing',
      ref: '1.4.12'
    },
    {
      name: 'Content on Hover or Focus',
      ref: '1.4.13'
    },
    {
      name: 'Keyboard',
      ref: '2.1.1'
    },
    {
      name: 'No Keyboard Trap',
      ref: '2.1.2'
    },
    {
      name: 'Keyboard (No Exception)',
      ref: '2.1.3'
    },
    {
      name: 'Character Key Shortcuts',
      ref: '2.1.4'
    },
    {
      name: 'Timing Adjustable',
      ref: '2.2.1'
    },
    {
      name: 'Pause, Stop, Hide',
      ref: '2.2.2'
    },
    {
      name: 'No Timing',
      ref: '2.2.3'
    },
    {
      name: 'Interruptions',
      ref: '2.2.4'
    },
    {
      name: 'Re-authenticating',
      ref: '2.2.5'
    },
    {
      name: 'Timeouts',
      ref: '2.2.6'
    },
    {
      name: 'Three Flashes',
      ref: '2.3.2'
    },
    {
      name: 'Animation from Interactions',
      ref: '2.3.3'
    },
    {
      name: 'Bypass Blocks',
      ref: '2.4.1'
    },
    {
      name: 'Page Titled',
      ref: '2.4.2'
    },
    {
      name: 'Focus Order',
      ref: '2.4.3'
    },
    {
      name: 'Link Purpose (In Context)',
      ref: '2.4.4'
    },
    {
      name: 'Multiple Ways',
      ref: '2.4.5'
    },
    {
      name: 'Headings and Labels',
      ref: '2.4.6'
    },
    {
      name: 'Focus Visible',
      ref: '2.4.7'
    },
    {
      name: 'Location',
      ref: '2.4.8'
    },
    {
      name: 'Link Purpose (Link Only)',
      ref: '2.4.9'
    },
    {
      name: 'Section Headings',
      ref: '2.4.10'
    },
    {
      name: 'Pointer Gestures',
      ref: '2.5.1'
    },
    {
      name: 'Pointer Cancellation',
      ref: '2.5.2'
    },
    {
      name: '2.5.3 Label in Name',
      ref: '2.5.3'
    },
    {
      name: 'Motion Actuation',
      ref: '2.5.4'
    },
    {
      name: 'Target Size',
      ref: '2.5.5'
    },
    {
      name: 'Concurrent Input Mechanisms',
      ref: '2.5.6'
    },
    {
      name: 'Language of Page',
      ref: '3.1.1'
    },
    {
      name: 'Language of Parts',
      ref: '3.1.2'
    },
    {
      name: 'Unusual Words',
      ref: '3.1.1'
    },
    {
      name: 'Abbreviations',
      ref: '3.1.4'
    },
    {
      name: 'Reading Level',
      ref: '3.1.5'
    },
    {
      name: 'Pronunciation',
      ref: '3.1.6'
    },
    {
      name: 'On Focus',
      ref: '3.2.1'
    },
    {
      name: 'On Input',
      ref: '3.2.2'
    },
    {
      name: 'Consistent Navigation',
      ref: '3.2.3'
    },
    {
      name: 'Consistent Identification',
      ref: '3.2.4'
    },
    {
      name: 'Change on Request',
      ref: '3.2.5'
    },
    {
      name: 'Error Identification',
      ref: '3.3.1'
    },
    {
      name: 'Labels or Instructions',
      ref: '3.3.2'
    },
    {
      name: 'Error Suggestion',
      ref: '3.3.3'
    },
    {
      name: 'Error Prevention (Legal, Financial, Data)',
      ref: '3.3.4'
    },
    {
      name: 'Help',
      ref: '3.3.5'
    },
    {
      name: 'Error Prevention (All)',
      ref: '3.3.6'
    },
    {
      name: 'Parsing',
      ref: '4.1.1'
    },
    {
      name: 'Name, Role, Value',
      ref: '4.1.2'
    },
    {
      name: 'Status Messages',
      ref: '4.1.3'
    }
  ]
  if (!wcagMatch) {
    throw new Error(`${string}: No WCAG reference not found`)
  }
  let name
  let slug
  const ref = wcagMatch[1]
  criteria.forEach(criterion => {
    if (criterion.ref === ref) {
      name = criterion.name
      slug = slugify(criterion.name, { lower: true, strict: true })
    }
  })
  return {
    criterion: `${ref} ${name}`,
    ref,
    name,
    link: `${wcagpath}/${slug}.html`
  }
}

module.exports = wcagify
