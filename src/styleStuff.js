const StyleRelated = {
	cssPrefixes 	: ['Webkit', 'Moz', 'ms'],
	emptyStyles 	: document.createElement('div').style,
	CSS_TRANS_ORG 	: null,
	CSS_TRANSFORM 	: null,
	CSS_USERSELECT	: null,
	vendorPrefix(prop) {
		if (prop in this.emptyStyles) {
			return prop;
		}

		const capProp = prop[0].toUpperCase() + prop.slice(1);
		let i = this.cssPrefixes.length;

		while (i--) {
			prop = this.cssPrefixes[i] + capProp;
			if (prop in this.emptyStyles) {
				return prop;
			}
		}
	}
};

StyleRelated.CSS_TRANSFORM = StyleRelated.vendorPrefix('transform');
StyleRelated.CSS_TRANS_ORG = StyleRelated.vendorPrefix('transformOrigin');
StyleRelated.CSS_USERSELECT = StyleRelated.vendorPrefix('userSelect');

export default StyleRelated;
