export default async function deleteUser(id, repository) {
  return repository.delete(id);
}
