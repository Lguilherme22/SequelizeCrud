export default async function getAllUsers(repository) {
  return repository.findAll();
}
