import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

const repository = {
  name: 'uniform',
  description: 'Form in React',
  link: 'https://github.com/ffzanini'
}
export function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}