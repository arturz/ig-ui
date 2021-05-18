export default async function myCustomFetch(...args) {
  try {
    const response = await fetch(...args);

    const json = await response.json();
    if (response.ok) {
      return json.message; // NestJS response
    }
    throw json.message; // NestJS error
  } catch (error) {
    throw error;
  }
}
