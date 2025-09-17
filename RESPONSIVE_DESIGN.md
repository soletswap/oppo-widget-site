# Mobile & Desktop Responsiveness Guide

## Design Philosophy
The Oppo Jupiter Ultra widget is designed with a mobile-first approach, ensuring optimal user experience across all device sizes while maintaining the sophisticated look and feel expected of a professional DeFi application.

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Widget takes full available width
- Condensed information cards
- Touch-optimized button sizes (minimum 44px)
- Simplified navigation

### Tablet (768px - 1023px)
- Two-column layout with side-by-side sections
- Widget maintains fixed width with proper spacing
- Enhanced information display
- Optimized for both portrait and landscape

### Desktop (1024px+)
- Full two-column layout
- Maximum content width constraints
- Enhanced visual hierarchy
- Hover effects and transitions

## CSS Implementation

### Flexible Grid System
```css
.main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: start;
}

@media (min-width: 768px) {
  .main-content {
    grid-template-columns: 1fr 350px;
  }
}
```

### Responsive Widget Container
```css
#target-container {
  width: 100%;
  max-width: 400px;
  height: 568px;
  border-radius: 16px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  #target-container {
    max-width: 100%;
    height: auto;
    min-height: 500px;
  }
}
```

### Typography Scaling
```css
.header h1 {
  font-size: clamp(24px, 4vw, 36px);
}

@media (max-width: 767px) {
  .header h1 {
    font-size: 28px;
  }
}
```

## Mobile Optimizations

### Touch Targets
- All interactive elements meet 44px minimum size
- Adequate spacing between clickable elements
- No hover states on mobile (touch-only interactions)

### Content Reflow
- Information cards stack vertically on mobile
- Token badges adapt to smaller screens with flexible grid
- Status messages take full width for readability

### Performance
- Minimal CSS transforms and animations
- Optimized background gradients
- Efficient use of backdrop-filter for glass effects

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Meaningful alt text for images
- ARIA labels where appropriate
- Keyboard navigation support

### Color Contrast
- All text meets WCAG AA contrast requirements
- Clear visual hierarchy with proper color usage
- Status messages use distinct colors for different states

### Focus Management
- Visible focus indicators
- Logical tab order
- Screen reader friendly

## Browser Compatibility

### Modern Browsers (Recommended)
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used
- CSS Grid (with fallbacks)
- Flexbox
- CSS Custom Properties
- Backdrop-filter (with fallbacks)
- Clamp() function

### Fallbacks
```css
/* Backdrop filter fallback */
.info-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

/* For browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(10px)) {
  .info-section {
    background: rgba(255, 255, 255, 0.1);
  }
}
```

## Testing Guidelines

### Device Testing Matrix
- **Mobile**: iPhone SE, iPhone 12/13/14, Samsung Galaxy S21
- **Tablet**: iPad Air, iPad Pro, Samsung Galaxy Tab
- **Desktop**: 1920x1080, 1366x768, 2560x1440

### Responsive Testing Tools
- Chrome DevTools device emulation
- Firefox Responsive Design Mode
- Real device testing when possible

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## User Experience Considerations

### Loading States
- Clear loading indicators for Jupiter widget
- Progressive enhancement for slow connections
- Graceful degradation when resources fail to load

### Status Feedback
- Real-time status messages for all operations
- Clear success/error/info states with appropriate colors
- Auto-dismissing notifications to reduce cognitive load

### Content Hierarchy
1. **Primary**: Jupiter swap widget (core functionality)
2. **Secondary**: Referral fee information (context)
3. **Tertiary**: Supported tokens and features (supplementary)

## Implementation Best Practices

### CSS Organization
- Mobile-first media queries
- Logical property groupings
- Minimal specificity conflicts
- Reusable component patterns

### JavaScript Considerations
- Touch event handling for mobile
- Viewport size detection for adaptive behavior
- Debounced resize handlers for performance

### Content Strategy
- Concise copy for mobile screens
- Progressive disclosure of complex information
- Clear visual groupings and whitespace usage