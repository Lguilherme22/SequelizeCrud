export default async function updateUser(id, data, repository) {
  return repository.update(id, data);
}
