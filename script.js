// A $( document ).ready() block.
$( document ).ready(function() {
    const jogador1 = "X";
    const jogador2 = "O";

    let bes = 1;
    let jogada = 0;

    let caixa = $(".caixa");
    let element_id = []

    caixa.on('click', e => {
        jogada++;

        let verdade = false
        if(element_id.length > 0) {
            element_id.forEach(item => {
                if(item.id === e.target.id)
                    verdade = true
            })
        }

        
        if(!verdade) {
            
            if (bes === 1) {             
                element_id.push({id: e.target.id, jogador: jogador1})
                document.getElementById(e.target.id).innerHTML = jogador1
                //event.target.innerHTML = jogador1; 
                bes++;
            } else if( bes === 2){
                element_id.push({id: e.target.id, jogador: jogador2})
                document.getElementById(e.target.id).innerHTML = jogador2
                //event.target.innerHTML = jogador2;
                bes--;  
            }
        }

        if(element_id.length > 3) {
            const winner = element_id.filter(item => ite)
        }

        

        //element_id.push(e.target.id)

        

        const c = e.target.id
        console.log(element_id)
       
        
    });

});