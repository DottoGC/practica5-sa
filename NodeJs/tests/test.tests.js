
const functions = requiere('../src/index.js');


describe("factorial",()=>{
    it('Deberia mostrar el factorial de un numero',()=>{
        expect(functions.factorial.get(2)).toBe(2);
        expect(functions.factorial.get(3)).toBe(6);
        expect(functions.factorial.get(4)).toBe(24);
    });
    it('El factorial de 0 deberia ser 0',()=>{
        expect(functions.factorial.get(0)).toBe(0);
    });
});


describe("get",()=>{
    it('Deberia mostrar la pagina raiz',()=>{
        expect(functions.app.get()).toBe(0);
    });

});