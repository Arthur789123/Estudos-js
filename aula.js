/*
    Regras do If Else:

    O que são condições?
    Resposta: São alternativas/possibilidades de respostas!


    Comparações:
    ------------------------------------------------------------------------------------
    | SIMBOLOS              DESCRIÇÃO              Exemplo         
    |----------------------------------------------------------------------------------|
    | ===                   Comparação exata       "Arthur" === "Alberto"  ?  false    |
    | =                     Definir Valor          const nome = "Arthur";              |
    | >                     maior que              40 > 20 ? true                      |
    | <                     menor que              46 < 40 ? false                     |
    | >=                    maior igual que        40 >= 40 ? true                     |
    | <=                    menor igual que        20 <= 19 ? false                    |
    -----------------------------------------------------------------------------------|

    - 1 Condição:
        ( Vamos ingorar por enquanto  )

    - 2 Condições:
        Se um time faz menos de 46 pontos, esse time é REBAIXADO.
        Se um time então faz mais de 46 pontos, esse time NÃO é REBAIXADO.
        ------------------------------------------------------------------
        Código para 2 condições:

            if (AQUI DENTRO você escreve a condição) {

            } else {
            
            }
        
        
        

    - + de 2 Condições:
*/

const time = 40;

if (time >= 46) {
    console.log("Não foi rebaixado!")
} else {
  console.log("Rebaixado!")  
}