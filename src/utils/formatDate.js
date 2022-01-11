export default function formatDate(date) {
  return date
    .replace(/\D/g, '')
    .slice(0, 8);
  // .replace('-', '/')
  // .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
}
