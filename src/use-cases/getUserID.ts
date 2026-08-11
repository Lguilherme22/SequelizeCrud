export default async function getUserById(id, repository) {
  return repository.findById(id);
}
