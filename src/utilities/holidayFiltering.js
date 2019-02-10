export default function (holidays, now) {
	return holidays
		.filter(h => h.date > now)
		.sort((h1, h2) => h1.date.diff(h2.date).shiftTo('milliseconds').milliseconds)
		.slice(0, 3);
}