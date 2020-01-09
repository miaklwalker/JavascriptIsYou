export function uniqueid() {
	let id = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
	do {
		let ASCI_Code = Math.floor(Math.random() * 42 + 48);
		if (ASCI_Code < 58 || ASCI_Code > 64) {
			id += String.fromCharCode(ASCI_Code);
		}
	} while (id.length < 32);

	return id;
}
