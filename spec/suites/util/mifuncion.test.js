describe('ejemplo de test en util/mifuncion', () => {
	it('Este test falla', function () {
		expect(window.location.pathname).to.match(/nada que ver/);
	});

	it('Si le pido se porta bien', function () {
		var r= TuProyecto.unaFuncionExportada('portate bien');
		expect(r).to.be('me porto bien');
	});

	it('No se debería portar mal', function () {
		var r= TuProyecto.unaFuncionExportada('portate mal');
		expect(r).to.be('me porto bien');
	});

	it('A ver si encima lanza una excepcion', function () {
		var r= TuProyecto.unaFuncionExportada('lanzá excepción');
		expect(r).to.be('me porto bien');
	});

});
