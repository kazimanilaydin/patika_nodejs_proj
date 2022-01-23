const circleArea = (r) => {
	let area = Math.PI * (r ** 2)
	console.log(`Daire alan: ${area}`)
	return area
}

const circleCircumference = (r) => {
	let circumference = 2 * Math.PI * r
	console.log(`Daire çevre: ${circumference}`)
	return circumference
}

module.exports = {
	circleArea,
	circleCircumference
}