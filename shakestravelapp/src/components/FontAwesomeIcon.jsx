/**
 * FontAwesome Icon Component
 * Provides a simple wrapper to use Font Awesome icons throughout the application
 * Usage: <FontAwesomeIcon icon="fa-gorilla" className="w-12 h-12 text-safari-green" />
 */

export default function FontAwesomeIcon({ icon, className = 'w-6 h-6', ...props }) {
  return <i className={`fa-solid ${icon} ${className}`} {...props}></i>
}

/**
 * Icon names mapping for easy reference
 * Font Awesome Free icons used throughout the application
 */
export const ICON_NAMES = {
  // Wildlife icons
  gorilla: 'fa-paw',
  lion: 'fa-paw',
  chimp: 'fa-paw',
  zebra: 'fa-striped',
  giraffe: 'fa-paw',
  waterfall: 'fa-water',
  mountain: 'fa-mountain',

  // Accommodation icons
  hotel: 'fa-building',
  home: 'fa-house',
  tent: 'fa-campground',
  bed: 'fa-bed',

  // Feature/benefit icons
  trophy: 'fa-trophy',
  leaf: 'fa-leaf',
  star: 'fa-star',
  sparkles: 'fa-sparkles',
  handshake: 'fa-handshake',
  checkmark: 'fa-check',
  coins: 'fa-coins',

  // Navigation/action icons
  map: 'fa-map',
  location: 'fa-location-dot',
  timer: 'fa-hourglass-end',
  package: 'fa-box',
  people: 'fa-people-group',

  // Communication icons
  phone: 'fa-phone',
  envelope: 'fa-envelope',
  camera: 'fa-camera',

  // Status icons
  crown: 'fa-crown',
  award: 'fa-award',
  globe: 'fa-globe',
  compass: 'fa-compass',
  target: 'fa-bullseye',
  fire: 'fa-fire',

  // Additional icons
  heart: 'fa-heart',
  tree: 'fa-tree',
  car: 'fa-car',
  sunrise: 'fa-sun',
  hiking: 'fa-person-hiking',
  hiker: 'fa-person-hiking',
}
