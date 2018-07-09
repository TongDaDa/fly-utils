export default (n) => (typeof n === 'number' && !Number.isFinite(n) && !Number.isNaN(n))