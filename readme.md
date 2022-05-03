## Tabelas com JS

- Teste de inserção de dados em tabelas para projeto pré hackathon.

Tecnologia usada
- HTML
- CSS
- JavaScript

OBS: o campo Total ainda não está funcionando.
    formulário "frm" input id "celTotal.
    - script recebe valor da tabela HTML? OK
    - Script faz a soma? OK
    - script devolve o valor para o HTML? OK

[OzzyBR](https://ozzybr.com.br)


                <div id="dtContas">
                    <table id="tbGastos">
                        <thead>
                            <tr>
                                <td>Código</td>
                                <td>Cartão</td>
                                <td>Descrição</td>
                                <td>Valor da compra</td>
                                <td>Número de parcelas</td>
                                <td id="valorDaParcela">Valor da parcela</td>
                            </tr>
                        </thead>
                    </table>

                    <table id="tbTotal">
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total: </td>
                                <td>
                                    <form id="frm">
                                        <input type="text" name="celTotal" id="celTotal" class="celTotal" size="9">
                                    </form>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>