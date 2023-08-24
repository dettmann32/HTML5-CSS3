function resolver(){
    let response = document.getElementById('resposta')
    function solveQuadraticEquation(a, b, c) {
        const discriminant = b * b - 4 * a * c;
    
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            return [root];
        } else {
            return []; // Sem raízes reais
        }
    }
    
    // Exemplo de uso
    const a = parseFloat( document.getElementById('a').value)
    const b = parseFloat( document.getElementById('b').value)
    const c = parseFloat( document.getElementById('c').value)
    const roots = solveQuadraticEquation(a, b, c);
    
    if (roots.length === 0) {
        response.innerHTML ="A equação não possui raízes reais."
    } else if (roots.length === 1) {
        response.innerHTML =`A equação possui uma raiz real: x = ${roots[0]}`
    } else {
        response.innerHTML =`A equação possui duas raízes reais: x1 = ${roots[0]}, x2 = ${roots[1]}`
    }
    
}