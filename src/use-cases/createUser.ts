export default async function createUser(userData, repository) {
  return repository.create(userData);
}
