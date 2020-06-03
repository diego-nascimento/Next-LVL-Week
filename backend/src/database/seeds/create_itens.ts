import Knex from 'knex';
export async function seed(knex: Knex){
  await knex('itens').insert(
    [
      {
        title: 'Lampadas',
        image: 'lampadas.svg'
      },
      {
        title: 'Pilhas e Baterias',
        image: 'baterias.svg'
      },
      {
        title: 'Papeis e papelao',
        image: 'papeis-papelao.svg'
      },
      {
        title: 'Residuos Eletrônicos',
        image: 'eletronico.svg'
      },
      {
        title: 'Residuos Orgânicos',
        image: 'organicos.svg'
      },
      {
        title: 'Óleo de Cozinha',
        image: 'oleo.svg'
      },
    ]
  )
}