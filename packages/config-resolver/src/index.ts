import priorityFindUp from '@bytriska/priority-find-up'

async function run() {
  const packagePath = await priorityFindUp.resolveOne(['tsconfig.json'])

  // eslint-disable-next-line no-console
  console.log(packagePath)
}

run()
